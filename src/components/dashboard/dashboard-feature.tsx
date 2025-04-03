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
    "3CMN6nrpK8LZeDfz4j2aPvPC7o9SsC2sjBQaQzEu7SgSXphZobhGmGqKPeyYsQRL4JYZ4VPPX5Nrfq57g5TJTMBz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NeScvZ3imqAr8FN96LHvmQWD8YVRpxQ5J84B1tFLSzeeLVMzeLbe2MEp7Bg8eCBQNfec1FEgux6CM4EWSYVyhn2",
  "key1": "62tW9ekVk3gD47UPdVA4wqjr3w8QKfBmUsQ1NJ4V2qZb5wD9C4tAtczWPW1b6E16DkfBZvvUneWYZDA52HwcVN7t",
  "key2": "2BCP2YpQKhHWmkfyHSJA4cX9BSq1TpGMFNCV1eMVtTaeVBudHv816JXT6kw5NMonZkgUDPffV2NxMSUwWgeNfWLt",
  "key3": "3JgZD3qtR8HULYicCRi5t9aUS2yuSC52G1H6Qv4osJpRf3XBJguAEkBZPXiLfnT29F6bPWuJLhudgzNhoUw1ZDc1",
  "key4": "4soQRvpFn92aKmxFL5nNFEEz3MUzPeER1YLi1BTAg9Png1SmDbo5nxPLmbuZGEU47EzKxnX2GsNYgQPAZJYJxjVZ",
  "key5": "3yPQ1fVCLkZAkTnsFS8vpmDc5YsMQ4sahfefg3AJ4m4u2m6zk4AqcgX35uj36VnzvZarYgDFuXasGaxQm5Ye37wi",
  "key6": "29eZG19tXyf21UB1utfqXLyUsVARuehZncCpArsAeVE9voo6fFbAnRGAZudySgWGRQHvHSLkFcjuu2vtYUXrYxNi",
  "key7": "oPqHu5V2M7bSYTVp11886JcGZ2LXzVKFkhHB4i2YQKkxR5aoemxCcQaahR3w1UpCE4GHoe2EWmB98HW5SgZyPqo",
  "key8": "5s9byTAJ488sNU6j2SNvE3e7RXWPhD3JjGaLUVZLjn9b4XMixaA4jdJw4wFBcPc7Cd6ub6SvngdjdwLVXCbsS3zt",
  "key9": "3NtcoBe99XiawPo184CKE8Pzg8WAcVvJa83uFHGeEeW4bgMEHAqabPCq3JEqATsvSCrLRBfdmGNiWggKtyj6anMf",
  "key10": "2KWvzYSw8XKrTrQVg9oUhbmepYdzyzhpNDR4jFPpRvwP3KtmDDVAPb5PcbceknJUxUHAQzp18L7ykr2xYG6kNqDU",
  "key11": "2iGnzEt1kTsVUYT5Y4gajEkf4zNeiYP2DFeLs9wr12dr4o5ZhmptVsnv4wUXLT8uwEwWCZWZHE5e2bnXaXMadCqy",
  "key12": "mGJBSKxogvRrfwPd9KwDp2k5qWn612BYnn3UkSLRYJt6Ydfa9wj1ECTMduMdzLJgKEAtsMvLiu2py4gt9qAi9V1",
  "key13": "4iuUSmwCniPk7um3gThfVrndQdzxSeJiBayQryDTiqqsU7isXrZ1Axr7KjRpFYCk8vYqYYLqXcS9iPn3PHR62mVC",
  "key14": "517BsfncnxH4TmdTnH358k9Ro5pZVUKDEyt3pizjqkMMk9Bwg7obzyL6M5jmcxX45RqdnksEmjcLyPg9JiwUwHYR",
  "key15": "5riDBnaguLELeruzNyLHUgSv2Ha3DRvjdBfE7P8ktCBHubpNABHrKZZ7TxD4TwYiJTGNNZN4U4CStxa37hJjhYqr",
  "key16": "3N6zDL6rLPgTrQDMeZ7aErLjByAfxnaRYwjS7aAKKRiZm1na9KB2Dg6iN1vMnYm86U7LjTuSJwcrxZ896DmnAtpV",
  "key17": "2ALf1eEBDRpUw5to6rwFft8G2UiyBYYcaZZYy18xpd8kGkG8YxaSJdTha1xQaBoE55c97dy1JRWzrhJEyzEwZDiU",
  "key18": "R1stgAaQURrtNQ3PztVEJG9UoyH4pTpM8EwqwiqhcovzyfrE74bpRp4LES3aJMD3KJ57u12diyEHwS3ie7d6Hdg",
  "key19": "5rgseLECHHCVoDhEcqwxya4psX4vb7kTsD4CykzUaieK55xPMg7M7rXtvavwgQauHt3BX39roDT8uyTS9NziSXtn",
  "key20": "3BYy65DweB8nUv3xT1KagEzADkHTS9PXtKVq8oMsWWmr5NJom9h8iJtqA6Z1i9ARJ7Jg3TzhLEZy3kF7Vh7c3mq4",
  "key21": "5Mu3sSazpsz4LAsaiNbp4eL2RGkY8meopYizgfGswj71Nyacv7wLDCa486eVYZDNS6bWGV5yPNESk9vVT25gf88k",
  "key22": "5PXLwfQLKX5FjKZhAFCxnUBsSgiopFVrfN8opBwoo4bpRv8DseAjGQuFLNbZgxLPPmtLV1auYQ8PSbLi8DJ9KUXS",
  "key23": "kCUcCH41uiYZMuJ5UXFbhqavfPxk7Jv9Quy1cBCqej8q77sydKrZtGtk4TsaG6DVhPr239Pu5YZSbZwpHEohD55",
  "key24": "4x4QN76GsFAcCyCq6UHLtg3jK6R1iBP1j9fatbBq1vsfSjBE5TCa8YtXTxxabFA8D8h8TSfNDAJ3qG83swAUeq9L",
  "key25": "L2urPZqoDQCT91wVSoWFHwfNzYvdeuBoVddQqs2uEgetUpeMabM5xQgWfyeio17nQJFUnL4VvhbxXm6NaiGmA2y",
  "key26": "5FUvbVADgzt55tUwe5FEmcH6EbwDnf7rrphUXmNeCTwn7oqiq8CXvxPzh8qqMRtUeqruSGqFmb8XUmtSFbWzAPFX",
  "key27": "5PttUE1PsDqoPp7XGQktqMoxvxZaruFJ1UbK15mPmcoyba3L1wmiEb2FDocNQomzbUq1BJxCyyT5a9LMGRt6bxtj",
  "key28": "4xPqPbJVuCqVD16NeTvmbzDpDRVjK33Lk2hvp1ABjXNMqmu6hv1NfJEHaxrYvUvRCaEEXwLrdaZtqLj3vYMZqSqw",
  "key29": "3nqRbBFYaQho5Ce6hMyDts9DEXwwjxCbzuTu5tsv5P8zgC62ahfFzpMSNcE89E6yc8y6Cbqk3Hc8ztxE9enuk3zQ",
  "key30": "3Zdus5qqkxRDjRZqLhAWaK199M4J8cm99CK92oXfgtyovWUmisuyAkG3mcq3oYR1qNhcuTmqZFgXh8gkmqu34A4Q",
  "key31": "2c2KreSKy5R73LksX5xdW9yccgXJvakxkVPXh3fxFvUzjqcocbsrLebVgZxbbxtcVC9icQmXcDK2LK7of8CBuXuz"
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
