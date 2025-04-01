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
    "4qh2SRSKQYSjt1av7AQmNdgC6hXJXohM4WhG5QsL2RLb8ehZHC4M4Z4hu46ffQT7kSseH4d39rKGdLHzSzjfY3mg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41LWJza8EaRqaFAYeGQk5E3g9sSLpTMhPtZNEW1icD3po8djgzYJdLjfKYi6uHqjmnKKB5jFDgsunwxRp9GHP3JT",
  "key1": "5tTRyeAEGQAmiBsHqE8ULt91Dmke4XG3Lbr7QHfvaxW2rJKRoKJzfxhCd2taHN5viwRqR6s4aRffmBCjiXxmmgXn",
  "key2": "5s1389jHDN3QpGR5tqALkTfVVdYunwQyVKYRUX167jt5vu8VrFujEQyZsSqduL6ZRkHuZA16tRnNDZKSXcHoNdV6",
  "key3": "2HNi2BcsQMH8cNSv441JRdPiPSA9bCU81uZDZbRH26ZGmynAgRwZn9MiiaHWBThwmygRk4gcFcdSrAUCr4U3YB1B",
  "key4": "4cnueaPijcSZvydN2S3oE8JBuP4QnvzrsHQ8kWTmLi7GasNpZRTnDzBkxyoXbaLC9NSmykhCgGp1JZRF9BNdzwdF",
  "key5": "4R4pCzCxKE5nxYH6QoRynCsb1U5jyHJ5YkSwfmVXRDaFeEQS6ms6BWTMo1NR2Le5C1hY5XLUSryo3BbaLU5CFNS9",
  "key6": "4seZCfrjSy8FZys1uhKXhrxJvXkC8mqevVLwWkxSxsJ9kCYqHmJXiER2pXgt6gfCyQturXH7vMHru45bPEsQAQ6S",
  "key7": "3zPN7XmdKaG2syZHqj81hxAhKhbJqLzjUqfRxMJ6qy6DAvP1RtzZFrxAZ1LmGxF2KXWGERbHVKG4xsqW1pHQSoaC",
  "key8": "3PdeS2LBa3Y48GEbkJXKjadj2iGbiiiComkLs46WXzBzv1v4Ln8oU3qETf9jeThjRYVPJapxFuYpNvUPUNx72VWT",
  "key9": "3STsi4crofe7nDr5C4fpj5nCzaVBgafmMcWFJLMCJqBRgTaakqfKzR7VbVwaCF3P9Rwm1BzmAsdeXSv94MEfKBUw",
  "key10": "2k78u4vQvLUz5vyxKEWfEpGb6RuRjPp4AiKJ6VVroFb4LiBBU6UyjzttPnrWqQTFPEymY474rCnyx5aEKdaQcCte",
  "key11": "ikNiHFBpXTa868qmHkGufQvn7NyFAU7mcvBbRWUBCDafCLo64XGCjFVrFNLqKxR2Szp6KAzh3YwDpmzesEmm32W",
  "key12": "5YCkBUcpLLJbTooHqW3mH3ruNTz1kQQrf8STmQuQqQCnptGhoMyyXEK6z3QwyFf83sbszzg5kGouEdVso8VaUDyy",
  "key13": "1KY8Uud2DkZiF1HRucjAg4k6zU4ZPggjJLb2H46Mr4F7tyrTVwYpsdB4t9o6R6ttYQRNNHZCz4gz6e2R94YWBA8",
  "key14": "3m9CX96NUHg8MNTLUfUBgKxo5kYR7umPQgGiTugTFrKEEaZ56dBkY8YE3fiLAmcHQx6ycGXqE6oLF2S9GY8GmGM4",
  "key15": "4GbrVAVRUuTiRXrzJ8xQfyP2GmsTvWVZCmnvCqMTuE9gQFjo8rF7FSJUJhJuzURtUs1ek3uadzo1zk5yAovxUui5",
  "key16": "2rM4ojK22B1Q91GEr4sZhghr3kFvJ7ZS3NkTHm2VuvdTfctH5h8Jjj3amHMBkDoLKdgTd7hJoUcJPkNy8yEKin9t",
  "key17": "5nD7or5KBJE2Q9sKwYBqyiL5kwj1bvQ8BjkzfKBLdRVaWFWEJJmQEA56qVVXgoDLBeNk7ovngE1eHTatYLbiYen2",
  "key18": "3ngNWYh5Txmh47284uFFLuNfQcFUvwMyoq68nkPysNHWwUvbwmLQu3sJ213B9mmpe9t9pU8xosZJTY3RC7X8mEdj",
  "key19": "2UxYjQ4GgHU71dAfR6w3Xs1WzwvYCKT3r2rruVq2kRxU7Z4Lwbj9SNmVBUtAzjDJj12dNg6QrdJs1yAktiawrnng",
  "key20": "3GNQBdQfgjk1u5FaAaY5YPP9UXPa4ZRtmAMdKntUU8XRbWif5VgNL1vT47NcLCh2M81VdkR4zrFTHVs4wZsGW5ta",
  "key21": "4tDzcSCoKZRmy3GhA3mEadtFBxjdF3PABMKtMM8DfpHEsgQCWDK7hZj8S4jF46ZwdugQALMyZCbXrAKnnnSRZEVU",
  "key22": "2Ch4cBDtH7gYjvzFQK63PmyKWnF6tHc1Fm7AgSE4y3VgZDsdupNUBGnSqEe586AD6v9WFaCDdjXx3GkY8SMiWfpd",
  "key23": "33LfiqTBdxDwUUE8pJ8wQN9izdwuY6ozNSMhCMYeGaNz39bsESLasa9wgEb2wrMcYUowKS5XdYZ8uApvvD6mTaEn",
  "key24": "5PHBaSAUKJzadf3FZd9RAtnWFo1bqMF9d7jAQH6sCVSaraeKZJMi2wGwk6SDUiRrdDsuSu7ydy7xQ1Z46wA3Y3Yr",
  "key25": "2sH2NccU6j6p9fbxSS6FPLPBCz1LM8Hk92FDRYe7aK5fCqXTJzMfTFuMS1MpruKeMuuTMfJebMVgaVBk1DGveeas",
  "key26": "Y1vJmJ4Ho3MKpjABxsesWh6URghfVwVqVBe9BXG622ikiWj2Mtrbni6jtQiE6btZRPrmEY8fyNxisepCAe3VLHn",
  "key27": "4f8WrsEz3aVucNwxuR4jJ9EFGDjSGGopwixu7xrt7epfExDVZjDdYXav4jnm2xiM81HNX692fwf5ZuVKPWDqdgsV",
  "key28": "34WS32T1z5znvAKRZtnMHtqYYWUVQxGhJHGB5nzB7ANjLgF4ntxMKuPr8FPJ4JtFXFcnER1DLZnsZbes35nsPtJ9",
  "key29": "4YQMYxxuTXjhGUQt3aJmDxpHh5zwBZye1vE6ET7nmhor1YrajBvyjbEanV8Wf2RbeKSBpTnE3ygeTj6jJpZAJHKL",
  "key30": "4VFe2KHn6U6EoymuzyChQp2yUq4P6PtKAkfnupYcSoyrgtfkf74tokozbWRvWwJdp3acWsWWNEykvXvWjqXgyXxN",
  "key31": "m6qHHnqj9hvpztJpoCsrsQdT1NKTiL4qz7iBHXQc14caLYHh3TvUJXZ4qqwyxY6s5j1bK9nHYGmzL6oYcqwMRCT"
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
