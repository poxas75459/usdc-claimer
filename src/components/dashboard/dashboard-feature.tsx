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
    "aJeNyKEs39H3mJVPAtZk5azxshkp2rGmSSCLzbuwNfNYSMU7dPCbxQuTGXNF7Du3zQeXt68wwY55iMKcLK1p8vK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i2bBGNDn7USEcgdZtcAYBEWApV9Ppb4YJRxwtupEFFD781TGE9X6ADXGW14Lh5BznD8FSnBTYWhrduUTL7nkV2q",
  "key1": "3svdk46qpJXAhuTrpU4BDGfQMn6yjvsV7kjVga9VGR32N1U3madn5ANFqpeK3QbxWnqxwkTn8mfbWracmHHgSKk9",
  "key2": "4hGnzDCKfhuzypu48RKLZ43WB3yDEYtVHdMfq1RyATSTXK6BMcipaEB5Nz9PY3SkusWmc9AfqxTCCwpmSy8Xw7MD",
  "key3": "4f9gskCPEMKQ6twC83LqkqTPnynRvo1VYvxZ1F9uQJqsS9rjCHMg7oLJYwKpp1TGY4gmAe3mMGAXmEMU5M6KR3u2",
  "key4": "44JFhbe74QRAmKreoqZDWqo9vkK6Uhb5HvfA4d3v6breDkTrXaCsW9ZhHqFt9VrUKnDDqEnBJAZDoMyfLNbrUvfP",
  "key5": "3MbLSNwVpoKH4so5U84RQrXuQvysqW7UxoE6pQJ38nt1QhQa9BuLBUH49yEQQiSD5u5wSu7R31QjsKLKFvCec9Sd",
  "key6": "4Myex91uB6MkAjUG3CVas7HAhh94JoQSdrXQruFs7Q6H8VzcwFBPTz5RVpei177QMAsxkGBkeF5UPQe5qEERaP2a",
  "key7": "2STJDLef4YvL7zwFHZqtbwXbemFaQEcSePJakQXj2gzUsiNFQxsxKxyJdApBVG5fZGkt4qyJvLENSK9QHpGiukZ3",
  "key8": "39F84tHQzjtdSyNjhuTRjh54aSzPyruVh9h7qayzdaTGXaZgJh6Uwv7diRjyMjSHarhA7LcJbgWmLQmPnPphGtRU",
  "key9": "4xuLZfVVnfVTRLa3fmmkqmqJuSscSEuHHWSfRuidWkGCywUePEAHSY2dBTQbr4TTGiqNUERCfbVXdeb4GwN6JCrq",
  "key10": "2R8KmMupUwGELzE97EemuV5ExuDfrAvyfBK5LyXSoHoKJX15QsuyL2UEzWJgE6582jZpzACqYYDdqV5pCJpt3Rhd",
  "key11": "2uFiPZ77sMbxQeGEhACdR6WWtCNobJrYyhZcr6SW3hRGqULPhSDu3Z9kvZYvZyHJGxq1Ro5LYoQhwfNQ6f1Qv5E4",
  "key12": "5pPVM4ttxuSjf3nejTC5WhbHUgQ5ktJKu621nN9UMDftKPep4PxKwJvSqDj9RVzrLC58X635TVQM9oKiDkDdXweP",
  "key13": "3FseB2pEZsYLSLBXjfib6h2VwV92x2axDefQcKDP9FkKe9N9WEDrzVnyJdXt6CDwDV7pXEZBgJGJJjkRpjdn7h8W",
  "key14": "5y3bwj5kqHsR7bw5cW2u2a2tB5qovqVjLqfgLutRDfrTLbcM3NiNrSHSqxg3GWcKXpN1LzkkhtECwpTgnoU6Vjs5",
  "key15": "5gw2EiUp25S64YwyjZh9cvBjqtEbpXBMuGeNqS6jWyPNVN7rTpPjcWiAz3o8WzuiY2Q9h6KE2pGNoA9VKdc8DPTS",
  "key16": "5uagZotyJBDzWUDAiU3817j4BtxLBgGLw6caqNdynV993tuLCmJ7xPRD3QaeVaHFPZVgG1dQkmCjnZ8Z6EZFLm88",
  "key17": "7su7GfWbcPjJYMJSZr2QhCwcrHuFo2bPoaRepC113m3BDeqj556Sfaf7iiWjoEDepq6SrK9BTw7HPqkXuHYgD5B",
  "key18": "5yNGfMhDGNAyUPWcLk6qar6jzUmwVVGLaPtGo5ftFvobbCR6gB5mVUTW3dV3j9DtwzmRtp7ma4t2XtEiSpGjV29K",
  "key19": "5vn3rbDH4kcnrWwG9Bh191rZM9ewCKJ8mp2kJ9bAiyQ1fBHQUENSXVtFreYBjWR4F74DWBCk5mdT6wRnTQ91EQSC",
  "key20": "3jkeoCEXyk2tpKwkyrzQ9EFygAzo96z6ntBL1UxYKo6mRwNyYpKJ3JRkNqfxcCsvy1TgedknH3wKpu1Tr7wYpENM",
  "key21": "26zujJtwvUxmgrBqniZzUCm7sxW1RoqiJLP2LqEyTWXu3X2zXkyY3Mrm2fimyqSt21MjFECmV7pWa9TNtV8xBWYy",
  "key22": "jpvmxj9qpA9wNRSpzgdmKkcdBzbmZqxkRnHkvjLF72BDHKw8ixehNrNFdqGpvhjZFfkxFC1hsNbmh3k2GVHf5Hs",
  "key23": "3TYsdyvBMj643vJRfY2Bc4DdYgQTno4qFKfbukScX94gvcFgt1AnjLjNEBgsQmoA5kWrwidUwAw4H1gPf7wAVjgq",
  "key24": "4mz8mnwowwa35ag74cFKXhGjjyayTbmrsmycwsSEbd8DFD6eibQV1X2dxAd5QHn4K9hXyHEDwrX4cPpoKk3xvnvF",
  "key25": "2f3yA9ksirEGbUffBK4d9opchihWXpCDTS8sudRy2heVoY2opZkKVm1RuoZSmHae2hXqWGzbGRZ263UWk7q5DgJS",
  "key26": "5dqJRnsigNRy79hCNVEBLAFBZ9ZmwSmsfMaxFBRpGRmvkcpcXeyAa2oZRnhpk4DnehFgYnN1oRWb3eWgwd8d9JYz",
  "key27": "3jyEds3RpiAnyYqjmbuteSHKgWtMZjhWUDM76it7C5UupFu3Z6n6fj94XvMuNiPwqizHhLXTnXm4ZAbb5xW7gxAB",
  "key28": "W85jHBJJThPLNqb68GpPCWtXaJtwHgXQgjuKUjkHotTRRCbxJZVRXAH7SgyTmzZb7zmAwdoXa1KwWSmfufWskS5",
  "key29": "4pXBxzFwKfnuQCbGiqy7aR92a8Wv5zW85haWHwGteeEugGucuY9GAvgTVtjjRfBKmQY9pQ2yU3zjhbVh99fadcUC",
  "key30": "2EzDKyXHb6Pkoj3Sozd4nS9hsSYKnXYVff4E7hwpLDMQNNGHJsaK2WFmffUdnoheZ7TTRT7WKbNwf5uzncntMu75",
  "key31": "n8P8Lz8mERBWvQZnuJ4cAEVisotrio313FYzvpGt8NYxyjyUPQBQoJJCPB6R7tYiayh88QGLUy3PYrPosQCnw84",
  "key32": "4sHP6GsoHeEaGNXRhQmG4wbZTcCA2dnwzKPCDfz12nKGVGhX1YJ4wbXLZbZP5ew2oXAtkNZZJJnnm5irHXBNwGew",
  "key33": "LyDUWbFaGjSHdAehv1FGgzvPdxzdtMK8WnSR31vWHLh4odhSgNht2xGLHGSds5Q6BnnnVzGA4VV9LENW58Jntfw",
  "key34": "awShLXbtFVASssFDZLPVZd9n1WGvrpkPbo6ovpiY1Awi5oCP8WmtEteiKLcJ4DfAoSDQejkQd7Lq5iB8DTaCX4e",
  "key35": "5nHpA3NbJhx9m21riCWryHVqJ5bmbwnPpCWsf6kv9o6KY3q8as4pzhdKDMbGriQYzyRb2GXUEsQL2Fo8ujf1ZGr3",
  "key36": "QCrjQiCxyRmfLB7m2KhnnqoG8uBz1C59UpALks7KhPE6t3C5E1jGD4tzGVNTRsfTUAMYPnLsQ7V4CtBQRbSVPpM",
  "key37": "5NUJqgf8DQqx8DKWbXYVjGzRZxFs2XinPQ3Lha6Bi3Ry4cBqhxky39Ut3YZEMJG7VHrQpvEv8xigHcEg7TGxtNxq"
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
