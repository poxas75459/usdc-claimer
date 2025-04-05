/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2BsYHXhnUAPLJ6wnnumrLiD3paFiQeg4d7vtXWdYvntWvHeuAGpvSF18cFDivpCnP7QcyprSgUtSmbtWWGiw26Ym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x1JTSaTDMRjDtHKiuFpMDXgjyewnWEhVM78CpTR7bDj9BRzTdNG6rBd4v1QZPaDyLCZNAaMayYmeMS8DERKzmMk",
  "key1": "3H2kfUrYoy8ieEaasU5JC3AMWsgvsNM8wRxAYZ2FKh68PSu26qX9C3CiiHbUPmahZpbzhoXHELvdo8L78fYHJvsC",
  "key2": "2JL6UaRsJXPdJRzsgMh3TjVX25oT4DLM1CP6BfNNStNwibViWdC3TysWSEijSQCCMLgxW6ZMVY9wQ7LWKzpNSwGx",
  "key3": "3rMyXKumy7FwaRgqJrPUPUkXNk9FnWPE36R2RmdnpB7MagvrXnmZb7f61uZ4CfmnqQqBv1vJ9foks8sWGRBu9Exi",
  "key4": "5QpoRS1geMz5AkYvM1eUPNhA5EsTvqTZUiPUa8vaEMeXPtFzntAYhvm3JkJkM8AfK3J3KbVHozyenqniGh7kpqsQ",
  "key5": "4eQFB2mfsUq7iWpdAPSXCwPU86ihWWy4JwYPsBJ8qHmr947DrkhFGXJT5CAGV6PgUtQRGj6Wh9Tecj83E8SKonxS",
  "key6": "4kCM6UpFsMJLekipsfYragNufcPwTJysegu8PRHNJZG4n1wthdAASyHFyqPdmpZukmzPZHggMXe2A2EpvNFy7TjE",
  "key7": "zxN4WUD6omDRAq99eJAKnm2K9s8goYNxzTGNLN6AhETq9VVDdKckB7LEBrnACVvcnAMvSTHuYSTe3y8qhiD3RRC",
  "key8": "qMKRg3fS8nRZ7e7pP73QHCXTsBfoKb8vyQ2LGGMDUAfLpvYKYzasbNnwdQVcDgzikdwDkriTycCFSLZhqi7oP4E",
  "key9": "5ANiaj7n54aYKz93dfmqQKmbunxtLPDL4B2bpUdVEahqksJ232Gzx4oc9zaiuZcEDhtgohwYjYC6RFhy21MdSXL7",
  "key10": "3VN8Y4QRAH9T4WKwprqG23659qAoLneYEjecPAP84fWKB6HMFBNQmPJEFYZm15Bp6wZzYA3S42LK7GqiRLniGgVY",
  "key11": "2Wd44V1Tn2o5KwcpMrC5RUFzeL8va829TW89hED8VDfAJG6kLKLpGk7R6W4U9mujhiVUVsbU6xcEQJiY4vxNAmcQ",
  "key12": "3GCc7gn863eAgo7MwrTwVeViYKF39oWkYz4T9yicZPfVpf8ruBvdop3z3AgU19td56Cx479aFk3Zsuuy6HkTcp8Y",
  "key13": "4tedGjbNTSBRK9ZEY4VtY1Qtgcs5ujNtAKZp1AqFQwfnyQrZWFvNZaeaw4FkPN4ZpMSGZ7h8XBAmE2gW1ovMsYLe",
  "key14": "5jeThv3KzB1FPMX2B9FWhtNnby7gdnF7yTAjcmCg1CXxoJ8BF77qjPsmZmS6po8Fq3so3ctzyPmC5rfbtjy2k4PL",
  "key15": "5xnTWwoU1ZU2SXGKZ1fz58Vmf78EaXQBFzQidB6FZZ5sX74sM6HC4LQQZNJNvi79sFB9JCp7zUGjSCEANLVud4BQ",
  "key16": "xFUGzqEQUUEA53JGKZGLSCeBoA27mcvSQvTHJ6gdrzMMLTPQ5qKHgH7pYyKbuT5xZN7mAfCAuyFhXHjZNN1fsaV",
  "key17": "vTnwRkmpLwfQsDGgXeHyLXMdL7ENWSbNucnekHwzrCYL1w7sSiNY7m7N9Hhu5kU7U48NAnAn3MmwSjZZRtT3hYG",
  "key18": "2bXsdNidPJgrxPPeaGQs4hCCR33tD3bMPwaUsSi7r5pkREQDVQ2hkUAxGEG4gZPGJW3RbpfGk2XHCinSBRbzPGj5",
  "key19": "4C2kQn1WAxbvkkEURpWGFLCDvsesyaW7YdEo6iuZySJu8tNnXdEnyWRp7vzAoJxHsRteaUcFEjZ1cG3SDpPkTPCC",
  "key20": "4X7gAmCstBS5CKjfRJPP9bmrsEdV73UCcqKyj4hfKcHtApvUBhoqNnoKUTDzTHGdVhujdbH9SEJzt5yU8ZYCcFNZ",
  "key21": "AYbV5jYFfqMbGdqwVUN6ZSmdxo8ZrSM1qmju84gBLoRc4iLjBpr8ft9M8cQFP2q3m2kLMHLN3RFJTfynutJevLW",
  "key22": "3YQodHaA5A1dcGgJk8m9roBuekKYLuvRD6L3XtmwKopN5osxheVsBdqwTKmm3kS3uD6XFqpt5ANiduzJgjwF8CfT",
  "key23": "5iKptNuEeHEoy3WuTxJKvGsRqqQ6GJvw4VjFsoh4fcdU6tZgYiSetHGTXxrcKrnbDMsaETsM1Hr9fjg6rLwABJsQ",
  "key24": "5LhJ5aJDL28PqQTYCCoTHRvncZ6JF4kFe1YF1pKQmfARcG1W4GgjRxrGSDSx51iA1BkVVUv3evdwABudhkPrDRuC",
  "key25": "3gWraNDnHeKRgyAzrAvFLt1G6PaWUyS3UNJtqdgQjcLgnhZhidaLmTGbLLQKRhcSUmkmYFHfX1tVedxVxA3UDSJE",
  "key26": "2Rrm7RHPtkRptgaFmSCwkBQV8wsGmxqnUi9rPt9CDYCRUGK9NUBg46LTvB3HJ1SbbGBiAXjTJ1gsjgfTiMzcSNn5",
  "key27": "4L88fPWqRgiViQDzSM5JSKvVDEp8QBpVc8sdfkuwccKH2bg7GqnYLMiTpHscgmKSB79HLX9KZ5c9oT2N8zbPDXGb",
  "key28": "2cQ6C9dA2oKtsqN4uFmvRPmxtw3mmVwGxTyz6bLRk71QBFfkcArU7xqNBnnqegh7vkFE6zeMEZkQRiNzJCRM8HiL",
  "key29": "5FzF4ukWVu5PbPpgiAFeNnECSHmVJRTXc4eS71hQB8tw6GYr8LXQUsjwvmULNY7CAyUiZqznEQxhi85BBEMNgzuH",
  "key30": "3WApZAQ9wipjZrZtfkuriZ38YhDy1Ej1j9aa8rfuxX7Z9DP6K9BZjQ9bm5y9FHqXfgeKaH6kF2agxbdPUm25dWmq",
  "key31": "pCjqXeGPtkrovnCreyth2hLaF3ZBQV1k3V9KRKxMPSXtA3fJAzK7K7MYVxfYHiS4L1km9qYpjqbfL13oqgnj361",
  "key32": "5NoTYDFL8kVuEDyMS8tYgy1EuSjwgNMhpvBEpMuUiua74fPcFVYdzngjFAp4ABsJxAk8MGpyepotKk4MwDs1rcjy",
  "key33": "4nJn12vS97Px5xat8xWMLweDGB52aiKScD691nhqgmL5MbqMUdXtZR5KAHBpGcBjRCzEfsYdmZt7XXVXqvuvowht",
  "key34": "2PwE7BSY3xfQztY84Rp58VHbaBTXKysqFQySHZajKjThiqGgpK91jc9s6QTL7LTidAfTfRxXwJJWgko5Xsj9aQNE",
  "key35": "4VbdQvvFHrnsJ38rTbBJxTXQvG7ctrcFNExeUjoV6p4KEZFSLymeCorMTouTBnr5y6k1pv3LHbKZm4sGpQSsWGXt",
  "key36": "4CBiVD42HB2hwTwujU9QfYHtJHFEhZjb92bkji6qkvwTc5Lp7LWLSTgn1XTaRCsQdPn5r7CLg7YCn3rUnLULejZP",
  "key37": "215GtqJAM9vXboFuSGJwP3vWE16yN3KXBUU1JMuNnJPYfCsZ2Yxb4GQHWfChBK4TXmjUetCGfKWJ36sARQCyXUbk"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
