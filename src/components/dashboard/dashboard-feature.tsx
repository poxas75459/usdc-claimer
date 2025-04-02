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
    "GKWrHWSEmcoRigHHiBnhbGZVHxjKbrtubNthnHYc28UTFWQDwVD9UZfYftfoWecA3FBu2APAm6R5zbsVQkwhLko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64FEkjMvGfbnrGZusY7u2Ewqp3Ymr9HvzC94YMyCmYzTjFt4QQh1JAUYoGy7uZsN5yVqeVuHQxXzHQDxUoqau4P7",
  "key1": "4RRW75wJwPhShpwx3BN793HtVSj5BzcvLCcVjqjzLiZifgmJ2UtFCDvG2opxKcj4qr3vzyaAjimbcUSzptPdV1yX",
  "key2": "2h2bqGMX8Enf7nyCJJHGUsZ22S1gebd9JkzAzjFaz7uPUuqxmJ2diGcMcPNCAi25YEQqx32YUsJR6X1GuEnwiCys",
  "key3": "3a9ztBhfwbUD7E2cchgUL4voKJpYdviWyrKsu77gaWJT5NduAYEvHd9qWWbs5nF9cfdwPqa7S6zsfiWC5rsAN7tC",
  "key4": "3QCaLXeLHoGBbaxPcp5uRiDkjSZAod2GWyaNMjD5y7LsL3ySvBUjRnXbo8hQMgDYTkVnTXCjg3tCxJpB9Um5Njv5",
  "key5": "25SyLDrftDsLxhCgqqBG2cJtbm3dWAwD7gbghaNMkBMe9vq8We6G8JXv2TfJGZzP67aDhQLXfyWCozdg3cr9mhwn",
  "key6": "47BYwodqhyELn1K6EmzgbDvvt9QSFiiQeXoy82kRyfFdioRJ1wTCEuoomZto9SRnVWDVEgANYCZcrQAPxHyDjU9A",
  "key7": "4rk7T1C8KMH3cfqb4KVHsuqk69rks7ipnhfSqdHgvQhW5gK2etUzwMAqtvw6o6JkdFrDjwqadnoxVEugGxBMhjdh",
  "key8": "5WiqLjeCQ4VN54z6ztK6j8eyAbUg66Xp8BYxFARoWLtYte2dD9JbZZVXi9ywXYY4A6KkW9TvYzHpeUPyWCsLyCFG",
  "key9": "4kMdfDzNRyNwsJG2ebgoTdK1tuuccGEkEX7hVsqQth5XpuJuMGDdRERAubtVzgaVKAmGBfKtjNBuEebeNynJn5GU",
  "key10": "5GRNz7Bef1upwjJcctvkgp9yzB2teDzbCkZSB88g3iaHsPuZPS7VkJZnR9wFZJgk24hgEPfVZQ4zi4JNfPUQCZnA",
  "key11": "3nqBs2vRwSsBPMPKqTMdP3Gto66YkBY1seDJeX4RNMpeD11w3P5F3tGzAsgme6p34ewz5XJwcjhwvL1ogWvMxjJu",
  "key12": "3YP2A9AvJkEt3ffbesygjPnhAAi8U396ZVVkpD6DyGUHkQD8tUV6QVm84SMR96t1bgbDSYUxxSGdSmmZsT7TY7pf",
  "key13": "4jTVytcTYBfbCxfUbMwr3iH8zWM1Y1VFiYLxQJB9eCBJQ86v8WYmu8RAJGTYtXA5vMNyUTZq3GLzqkj2b9Hdedk8",
  "key14": "2PPdKg1kZdaQJfyPjydqiYTNxD7WZDsMRCBsm3PVgWsukK76QL5MuKEuz3RPgZw8Y1t8wEkn8QC1eY9jHEyMnvuf",
  "key15": "5pFpsQSDCUaqnjEUfoe7xURmKUXkYGr6iPd4UDyUa6PXxwU9ez6BHLFYAd4FaLY4s1m1Vn8t7fsSaFAGZeaaernj",
  "key16": "2FYvD1fRrLPZm4jRSaDziGL78tF29j7wfn92sbiZGY4bfdBUarwDFqKqQR1wfGUMdPhz6csE4PLTWSCXFUH8A8XL",
  "key17": "4ZV9w5M8TLJpZDpnvjFbJM43nxky8DWPcXNnCcKZcqVQ5h6JzXWeic87JnfYpjLicMacTg2pYKe97sxW5BgWNwmq",
  "key18": "5vo4DvWA21f9sa7giKcdp6vu6TCTrav2s8CiiJ3FavWCD7Lu9rQrkV7d3AS5DHKaWrePHTCcfituWLUbTGeNBqxi",
  "key19": "6741FYKFncDqdpoVe5XgsAPWH7QVPhopiJXDmmF4KWQbUQqWiwFTtEyQzrk2AByohh6FneibLNQExMCuFgM1dxNF",
  "key20": "5JqPPPbmCqLR95vuwTsLqHTMigTS6NMeG7NRs8oy4Wk87ybgcSKcFujBG37RRtF85YRekNT7DPQ3PMLMsbfF3VHa",
  "key21": "84gcSr2MRT2Cr453S9LgbTCmwQdHWwYGAA11hztetroyKGAiHxfJUzqHzdqQQCrCXPGkNb6EuQSBPFhKGsLAgRd",
  "key22": "aNJPP85JPwwqrD6CpzG2AKDxvf9GMp8M8ehwe54A3Yzac5EdquSBgcvAUWm7Ww1sGY1npKRdCS4e2E2BpmApeuW",
  "key23": "3TmW4TceTZszqDyBvEbxdJboHskEqTn5H4RQMqAGRzrsfkW7mg9hV3HZb4JH13BhoXibKpLVb3d6mfREPEzrvK2A",
  "key24": "2XfjStRCepQhWdmXrrr4KfXZUBNfPQgXj14p7kj2Q1oC6VXrHjpwGtRt4qEqd1EytrLFphTVizFqx3Z1H2wZQaP9",
  "key25": "5YoGJx5hLmA6jN1dN5YcpusxG5hCV2Cmye5FE6NozWof5YDjbjbWHapkLg6jRWvVUy581fPPzP5p38gpdbCwYkhJ"
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
