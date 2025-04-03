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
    "3zPknHsR7RS4EQmTBJcAS1WqvA6VGWvQEq6hUBRpGo6JDyxk9qS4RqNt4f7rSPsa3tWk1aHYrVohZBjkZivWLuCA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GpKzCtJhe3JYXNLJsNj3DZkWeqvjeQsVwDAqbo4JgFpbQ2w57kRNtJuye1dScpcMkw1PZMPd91WVGGLFQyo3FVB",
  "key1": "fNcNTvczrq4AxDJi6h5tya9Ku3cd76Udapqga3LoxQ7qspgMjaHXQLWqhq9fF5TutFQAihoySAMtTuT5xPBjqtB",
  "key2": "48RhKfSpC1v3spU1gkX8WX4e9UCwLbMmV7AcjtbStvhbEYjnu62WdjXYYopeFjTTHZBwyaNh6eeifFQTYPUNu4bb",
  "key3": "59GXLQKTaLvckncV2RfNYe199vwDbSthUntt6sSrnVq7KowXEbRzAYhCx73euApRtpYfcxtowoqR3AhzUFGH25Ef",
  "key4": "2JHmQqKPM8fCJCX6V6ZcgG5b9k3xoc4jzDCoHJ2CHERPSjWSNS2dSWhfQHAt8QmNJmsbuuPW8KW22dkB13fF6dta",
  "key5": "fAn1crSQ9FEfv1sYeHu6nNhzduexXyGNirRCXrBLXQuUBGQMFcBeUHd8kArKTbwSSC4QvRkbtHYZs2Cy7NmwEiT",
  "key6": "3CsKuzDdWcodJtF5hFt3MdezUxugof7SnCMrVQ85zZ5QU5VVoKKWrhvVJ8gFhDjQJkziWS293ndJUNTa1gN5yNWa",
  "key7": "5kWy64aNwCvBZrqnotuCjpoKe3e384TvCzYB5zb4tjx6HBgVzZUDXdUd9uBFzcu1NixeF6LBcyYT2ec8ZiUoL7Mo",
  "key8": "pGxiDmcF9UwXuG3jyPSHvHTM6iiFNT9KztE3Vn7Xdpm66iRcUvM6G7GKJKV4WmPjMEpLva4tGLsEEGstp4NUmqx",
  "key9": "4CGtEm2suj6jcBqCd2vgBE51xWfcgrYSsVYNa5vxX4daFLguffTPTzn1i1ZHA7nEqVyaiwFveZ1gniPVzffNCMLR",
  "key10": "4aNtd5MGNv8xhmbTYkBRJAXnAwo8MUxy6juAdJn8tShx9PTbqJBNFjHeLPZzVFgqeAaQNLbB8W3nJuKS8e3afDwx",
  "key11": "5zWWSTEyd6Pb3yxGmGMFwdRM7gaVDM63Mc4ZQMJGjGrMNk9f4j78MAyqv2SMz7FWUuCitUXYPJkJ5W4mS8wgYEz",
  "key12": "5EYfcjXAPwq2wkFQUfuLip91TWYLytSzJWgb9pLchFQ9LA2o728fCiH1fGX5vLw13eEEHqqz8WQR6uiFQ4PQ6SHq",
  "key13": "FwaN4USjfdZvffqHJXveisKQBceZqLzbeybL8TwqU91Sz3kgWdT8HscY9YDXHbd6ANx2urDJWaMMgz6aYDSY3Pi",
  "key14": "MwkKnv6b6FrHALCo6PSjrXQQELRH1NokzYi59oMQJ3s7D4FvhkdfGYAWA3Gbqso42gFBFDnL9jmCR3DJxmGYX1s",
  "key15": "64ZNWfpMEXxWkzh3HZTrRroT2LFL84JpBhvvSpji6mHdvUjAuCWzUvz43xsExLEphw9Ync28481hAxrdUoJwgZf7",
  "key16": "33nGiBLycTdKzuEZXHk9NF1WfmBnN34uoYaoyxLfJfh8PpECPSe3jyFXZfwQ5r3ML72KbvP9j8RpTfN4r84rSXu7",
  "key17": "2mw3ta2BfGFvQHknCckkmQHdAV5TEVGDfNuScojAFB7PC3TWiyvDVqv2taSxhVwYr82Zv6dgjK41hV2tvmXNSXmF",
  "key18": "56fzbECheSXSn6KPR9bRoCDQywJd2LyN24ZDAUJLWYESeGS6V1gSu727r7guHtXtR2aMkgrakJfQhzzXMFuoPJDj",
  "key19": "CLQQHFgoGqUrzNJ83R2D5ckkFEjM5cu8ZsjqoJbwtSthnmANXLdcjeAroyBKNbLP4yqN47Mz8YiKnhx73RtidHc",
  "key20": "5LP7sf2Qfec7bVMgiqtdfeMMqSqeFzSRtAqB5Qe9tFLGy7EZwrAje4iCtiekPzm774CvbvMUsYeAeNRtkKSXD2YE",
  "key21": "5BcChDVHf3rTe9B3FDfFbApYkBbNYnVducBAuK1pTSZEGPnzizM6eS2uQ1QRZCEPXrEuMdDmfkdR77G8ctGCSd7m",
  "key22": "5rxMcrvRQFiKMG998ibqEW3JBfhjPW7gXH3wvueiLzimvzjtNPN54EvPtA9CSGPkSfYBvPQ1nTunyEB6tWdfnZJk",
  "key23": "5VsnC6S7dJUKmZxcxBWvkMhVwEKXcdsAiEWnoMsg9zR7BtBs5RsKJo4AcFitJweJYAWjxLEgDxAgWSRGrF96cU4",
  "key24": "3uQPYHg6ozEPB8GqafYyHGfwYVyP479tKV2iRQSRHyMQkNLpegVMSS5ggZ5swn6Xzqxkzaxm3zCz6R5CspgE8qyL"
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
