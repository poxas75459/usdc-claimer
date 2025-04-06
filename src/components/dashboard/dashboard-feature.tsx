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
    "4NNyRVybhdkPq6CuXxFn3afo3BCiTigEo1P6GkeMdcLUWjxKhthbbgWHsFs3uzWyNXYpA1TQzaCnV3rfvLfy68Tx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bLtre1oovAQmhnnu9cBgcjMQpepR6aF2pqT5ipYF9V4hWokhC7ZxghXYa1Y398ULL5GuXoMhwFZRT58VeR5W3BR",
  "key1": "2xifok1St1pM6VragTvhyDvxadbEant2UjWZvHDaS87V2iYtgUQeNFjJB7UFtN67SJ4m4EfYCZehX6cqvgBHz9Kd",
  "key2": "2RzdqtUVP8M1DFDouUJzsSta7RX1GcnbTbdvKK4EcG2GkDNM9diuCZGUghbfi2sN81TeNkFTtCi8zWsNyydR3pqQ",
  "key3": "5K4e59hwSXr7t5S1uPWugQzUdNqvYmRKpTjA1yX8fd88QFK7bWhfm363D6vHpE3KmeJZNvNnNdZaSfwiPJLLk2Te",
  "key4": "3nBjJFho3UHhs3GGqbB3ZaYj83tU8xfBYauh3qE5ZGXtMcBDN7uwK514moSpbdmZhaHy1WFL8ueAcwibxbZz2h2r",
  "key5": "3nCXKSKd4YzpZKBEGQ7SaDbYDRYB2rr1hqTb3Ls6oZUreSiLQmv1JgEAakACLQ3ihrvCeGGxQmmpEFxtn45JTGDG",
  "key6": "4wxRGoh86B291NP9P7RmmZsp7SHZVzStDFjUMBRh6hsaoHo3xhy3qdQr9cdkdUTi7JgSV1Ped2mkr5PsS6sZDDeL",
  "key7": "61nH9QwJPUYjYi1iHnF9LMa286mmG2SeK9jF5aoZNt8tc4ASmEPuzqkw65BbbJjTpXuuKqUy3YYZLLbLdYf5s5zs",
  "key8": "3z4xy5K3EKwBj55cAozgYiA2HdoQAei81ywLacZojxnocQ8K3wrZzWpYcwy4NGhEmg2Da44iHuXazLLmyoYd2QoD",
  "key9": "yXDXf8CF89UEyLHEHvBi3qf3YMFgzwf8soxuUQ2aTVsk8uNYEQWdxWTxx8EixtjVEz9UtiGEPbVsCrseVUc1dsB",
  "key10": "5LWC4cRvHdWGEb8Fdi28s1QfD5GKEZPoDEkM2exqDhhdiG66ZWhE7W7QjjHNEoiTodvaPcopmbxjH1GNzFbTdR1N",
  "key11": "4RHdYgvY5RdztS6pKbcJaKJ3sSScumMXa1PuvDuH5F663qfqZG2P8vwhkD6KL9hB7K1ywW682Xv5MtuFeXPCb45w",
  "key12": "2xqefY654CBCwC5sHjYukhAuasNxCqYUxyqmt1aRTCwgvt1x8o3jqzKUWjDPGaAgPefEL7idzofku6d8gXvpyUzE",
  "key13": "478CEhq2UL87Tbp2sCDjMGMrm45VRzpyzAy3K9NvCxBfWom3r6h1GxooJjH3Dj1gy14wWGxJNuMsXUCYVhc96vbH",
  "key14": "51wmvytJEeG6xRhr3VRKvFJkjoYBRohNfSRK2wepJutEQNXQmpTopwHMnLpuYC3TX76xxR7wzZT2AZT8cfC5Fyfe",
  "key15": "5vf3NnNW1ymj2SMLYtcn8QBbUmK2bRfZknzFVdbGRzBVkE7mBgKXrh3g4hoG9aSBzsbdmswQEA6KAgQaNffWhxUc",
  "key16": "5ALKReWWNwfa5ZWPNy4tmeg7JkHg1muJQ8EMenrVLF4UddFRNDsSNkjuuLVaeLzRT8zXY32E2vsxC2ZWr6VMbTpa",
  "key17": "3LpSPFdXn1LjybWNpsgkx3YBx6seBetzoEKq7aJXBNR6o79cEjChLQqcvQE35ESByvtLbTAxFPJRyZ4frJXnpFRu",
  "key18": "4pau6xLE7NjqJZFXf3pCQrPx1q35F6GzF794tdnnGgRDGFJof75W5UN9xjYwYSTqB9NgKzwCnzQgjLKgKbb8cPsz",
  "key19": "3odX9FNyruUPfnqxYSVxSy4NLtdrQGcNhzfzuUxXA7EPFWngQz9tUyNBtEiWnwRJBYi1g2yM23R2dYLnVXYKu3Na",
  "key20": "MvSdCCyG7BCPbVCUnn8GsWMbjbmzM7xHRs8P8z8c3zLtvdMNVvKfvGacvqzdtDttzt1Sa8P5BmueTk6uU9h2T99",
  "key21": "4Fom7U5jj9eRceaGAKuAqAHCBhBuJVC2S9gV5W8Uk89pJyWJW6fU5rxwL9EoCdn5wKb83BFfyxcP5te644qq7UtY",
  "key22": "4TG3fSXYBUJos4jtX2pVBxUergSgKbHtJUN76LgeP53xFUhsAFNadnPr6bDcgN7PcohSL8crCxtymGRTinDCFuRF",
  "key23": "rDTe5hrRpwTJNE8MyKNmYoN9rmf4tU5a8hDswzdwJ4FjQo2tyHgQQqWoTZTnhFT6AqR3rquFdC1ADeY96p5r7fu",
  "key24": "iQ58DC2ybqhYrytUzPtDVKDrLFVWEppH398pRgSbBpnDh2Pda74GyjU778nbzgWdVR4ibw5zENn526VemCF2ASN"
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
