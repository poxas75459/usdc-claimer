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
    "3VF4nA6xZ6tqPzzx7zbnjwSP5efBePu2wHJ8sWQ9TXANfF3pADUkaVw4cnbEKVofT3bemXoNNdfiu8vheMSE5gzE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4edGA6pCuk32RUJok3yRy8A2ADJ94x7Gd5xcoSVde6qDMg8sL4LQJoh5RnuKViQVad2F7QR6VYmyBv8fsizYweci",
  "key1": "5DLs7txAag4o2Yu7tc2ECBC8s32DfSqWzDUxfkLpc5dAs2bBYjJ91vbpUyfByabQ9Xp8PiMp938LrHrj3RE36yyu",
  "key2": "4UbrJ7oVCKRWMCERva2XbhovKAMPEaCZU7CkvpXdv6K76CuM9vmJReyrWoPyxa6SmhL1wS1Ekc5rzqNoXYhC4Lkd",
  "key3": "4Sem7WJBZJrvVFKn72msii1QwQJHdoWVMpuUvbeuto5rpWe9RdgBdZxfABcVBmAXQKryAsXYNDJGNKFm6dqfcd1c",
  "key4": "4P6hNb8nt8eGgJm7s7t34inKZWs5Ggh1QggsEpejqHmuUCGT7dKweqZ7NFLeYKXCAnMbHqM18BXm9Vvcy1z4stz4",
  "key5": "5Ykc817me9MWfbVPo3XEe4NXPpstNjgTTR8U1TWVfCygQ5CYrMwBd3CeKLD1CmVK2fJhGLFLSHfUXha6vZUBEaKD",
  "key6": "4PM384fJbv1wJHToweYgZmZzXqar2Bo6cBWa7GHeaTWTtz1sBPHBvL1XYWY1q7rBnmhNfNkRh8eogQFft9XZrVuE",
  "key7": "3b3w1PFikmJisZQqqq8otZaejPJTqw48roa6C234jzn3UyK4jw9ii9cNZgNSXoUGWriKLvz4xH2XAKqQnqHwpqiv",
  "key8": "2TsWYuvYuvu3Td8pS2ZL4R3jddCZgLxKLvjVye7otKDRCa622cXNTzzgPTJGevCQA75Jo4CiABXgPWSEesrko3Fo",
  "key9": "RZSfZGbGoT2qfEfuNrivw2gw8TRZf5atGgNNQi6Cp3CdxjD1m5ctsqEqFoUWJAakrirE3HYYuDPuYydyYg6yog9",
  "key10": "3PDpFW9hccLJDSca3uHbG9FwLBxurDpvQpmbMfuVX8L75kVnTT9scSizRvt7RuEBEGHUEfo4gin4kkquWYkbPS2Z",
  "key11": "4TJF1qBRbU15RPQmS1wrzPbzjw3wsTtSyekQsgmjgKB1WWc17bT3Yd9B6Eu7uyYEawJJyGe9ys4g7zLtunz4GnvW",
  "key12": "5wE92qz2Hu88NUGBATWw69uGAqWvHNNSgdfDUmn2pSkjYXea11CVSejajRkdvKTP6mZ3gKjE3Gx6kx3tuMbQ9e7h",
  "key13": "3bvUNsCTemtKy59jZARnjvnR9rL8yh3yA4s2TKkLj6kaxpWiw4d1Z5U3CGWa9dsYA9zzRjxRHt1BbnKhGf9eMAo2",
  "key14": "2JW3SYE1AjK5WtwyJPj6UVZTwETUdnmrQqq4eLNeZS1YtAtbfjix3cVcV1ioSFWWdkdqiNTzkRnvmwFhAdqSysZf",
  "key15": "1U7Ad4nbHacjuRtFkcJ3hDCCP4rpZxZx8MM28zdy9WyQ35tqhNmwSSYLBhRxih4mgKe4yi6KuoYWEcYqWrtwyTU",
  "key16": "2B1LXQ2B5uzrpPyRRGHmJzU2JmUz9m5nXSVJejH4mrcfsvDpdXPUbVoNyK3uQHfHXeczNJzs1LYhgJux8K2KhuXy",
  "key17": "2eaoQNUuna5pYhSuq2H98f9K58TANMKjiVdjtwd4SQBF78aSeEAu5u7mJZAevsot9h3HogHKy8Pc2uJtsfxoNhJ3",
  "key18": "2HAm456GB3hPS2h2xd6LMHY9Vkz3iQZYZ2ukKmSENUKUbrcK5kF9LjLvCuybYEFP1TL98nAGvhT99tH7VsSNhJo2",
  "key19": "4BHH2ft7VG3Rg6Wt4inqfp4JuPMhS1fGVWrSDw72N5GRYktYTLPSfpZi2jksCHwcBe9SbdDd2MneD9oeojPfikSU",
  "key20": "63ax896jrhfZmcau2MDbcKt7fBXnrDdGvmLHrYBKde2V2Vb3iHSHtP7BSFUZ2tZ9bwmoY2v4ZrXkh8PvmXUB9MES",
  "key21": "2EXMQZgPG3TWoMo5UgvtxoMNaD6vStFuPJZppCqFJbjTrEV1qeoHFe934AWgULapgbA8DNP7n65JwcYcevrjX3sZ",
  "key22": "5eWxYgJiyoy1Zn1JyC2G8DNaRF2Edh6Wum8RBgbHyuyQK6JCMDJft2aTXoJJ1pTzcY9pAVGxdqRFPTMAuQHpnZob",
  "key23": "JvHAvxsDsoc91toTrwengAKdyYa7Za3sng1AbThNHmCdEE2ummP517eGpifVY7npo4fukdu36zrzVfEFEDPaPfo",
  "key24": "5xMiovLVubmLppQA7ekp21JWQRyowVaPEc4KJd5xejT4wiKg2gKBCpxKu4yVmFLS6QbRzNaXQHKr2dAf1RhTGacF",
  "key25": "4JRxCqQCT4TycybdNjWVEBS2VzCGP9gox2vGqw5WFB1Pq5JTPch35FvwzbJk3B9UcoG5fkKwfyxbLRvKnitWj1s3",
  "key26": "611m5RaGagMha2RtHkyZQYWaZNGhdCfAvnTfRJUrwUQd8CfLrBcHKcrJxG4GxGgXMgmbSXcTmnA6KHPnKJZA78Pa",
  "key27": "4YRH1vGgieA4BNCm3mUGXSLTWncUH2XpTaU7wGdwT91PkASxwp3RMygpW2rwAndwjNAcjUbtnchYMWCqUSm31cut",
  "key28": "5dozW8Z4u16PWbVGjvjEHTtgzd8mUBRKXV7CiuCs9p2wuqSa4yLsixyVoZdm2xbk2LPYcJEUKbbodTG2akpDUaqy",
  "key29": "PoMexoYpy64HhkW1c5uDiKCsSjr1fHQDxrpxhBChJ31uRr9AhbuoajpxhWaFuZWT1PcZKAL3BPvkLDQTcnTxBEj",
  "key30": "3ecS7jYcjKPquf8vQLygFCB3D4xP5JeFashsBa5vhcxpPwv7PYJ746n8rffAZmQ8KGdxQmL8mMscqZaCqS3uyfo5",
  "key31": "58jtQzdXRMdZminD5rbh2pHZiTmKNmarvkAHZAmdYzX9noXHEmHyd9h7WRrQhT8KXxQ6QP4DTGsufgNe6NR8osDV",
  "key32": "49ucc865vmvHSFHjESzoKzBB1EA2F6MtWyhhuYMh2o8ixyuJ8GUf7zTCKRg4vSGwnwJw3d9WtQXafExDHi6AMjsV",
  "key33": "2VK1qtraXLHSPVg7DcZ1G23zGBeUhJWC4Hs468XCAcxQqwxTMFyqFWYhid5bbr3mrPboRQEokUEotfYHr7EJxhkf",
  "key34": "3qLf2JRpeMP8K4v77vJnfCkszAeaTmTqJMVKoDwgBLBUabihBuHKLga1cyeLUesjsrDznsVhy67VH9J5T2jGTzkU",
  "key35": "3F2EeyYEioSfy2Vf9BtdYV4c2fE4D7KqyxgrPCX6dYz2dHGdDBgeSCABZDVe8ferB1h5HyNpytsAdWcm2GG9wvfa",
  "key36": "4ZYntfDFQwZntMkymjZnib5qDmoYZkKz8zM7DxHkYFVYwBJjdQLy9qfhed9bgzTzvqjx8R7yNJakM282GCBE5V9e",
  "key37": "3mpwgky94opnntc8EZytgQYKzcq1uiyPUYmzjPAGHda3ddr9qa6X2cns3jEpLvSKj1eWG6krpaR7YCD9coq8DZod",
  "key38": "5ypwToH22nZNZsrAVBP2eJTegp4pmosdJZ9MZT9ojtsXYfCniyUo7mBd6MKiszvKWv8WPsHgwxeic6V73CBhw3xx"
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
