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
    "53cEJ4wc91oVCVmTgTumjXtfVpKtWSQuirSosAzGe9ctoEue2FrXzW5z8iPC3pCQgLC8B7irjDAhmZnsvzGWXRuq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65gjU3ErJJs7yhNWf7bW6M2pk54r7RaxZdBv3RDZyjDTc8GwU8sggF3E2GgnSSZEzHtzmykXfVtvf99ZsAnCs89Q",
  "key1": "65MzSeG9tMjPrBUFChUCamy6MKJ1wDtGwKqQ24H1BPt19jvCvwbgbRTmmARqSSPNJzmbnLp32YZQJ7ZxjSWeSgz7",
  "key2": "5vaywmyxwRPsjGES9LtoHaQ9WWoDoWNESVrAknmbQvudy3xKLBexkMroz83Fw5wZSn9PsNqiaW3maxtLxLfDNoJ4",
  "key3": "587soTHj2XCRkKCChm5NWttHzNYetF9mVCztUWq37QPbnPx6yDBx165GPPe9p2YaY1egQsnHt1pfFhv2PocSidUQ",
  "key4": "4X1MoqsUoUdbPA7dKvePf2iEyhTzT5ZbWJRt2jGbsv32u6j4aYJ6mwi2SRv4qP2TJtH1ibPX6jCPNmfTiJ5bXoAc",
  "key5": "5rtn2P1fM71xKWuE822Pqh9N6J6zudaRMftCekDukiXrFxuQU62c5MrxkMQmb5W3qj5P6CyPGMamoNy9Jy8bjTZf",
  "key6": "4W91BwEQa9Zh46E7Ajtt2jnhq7bp6Jda3UMJKA5qyJ73q5drkg8x4H7mkcjw3gxroRJkfs5344teDv8eE1s3Hxh6",
  "key7": "4mVFzsYdFwWhNvG8ZkYfupFmyaYPfXMXvB1iciDMDd6FmavAAvDg7uHbzBCDV9EDkyJ2XA8M9qxqP2npkxF8cj9f",
  "key8": "5xcbFEhQa3Mv51xyegVRNiUwgYYwB7LNcVvbLiFyGeVYsg5wZMBLjcGJT5m53oeEYNBL34WjjzncqVPdx7TYsXKd",
  "key9": "5GmURWCjZrZ81FaYHZTMow2gsCGQ7LD752UHDamreje2EhRo5qXkUq7k79Pw4k47GUSAYy4jUNDbLvZeVxhJjuoC",
  "key10": "3Z4HJ6CMBGkenK22QifVsejev21ZoBq47ivMsVsYTZ1H8K6EFK9pedHYpR7XZd7xh65Lm3VzGeUaUExS3j7xaLLu",
  "key11": "5rLUzW2kmoZQEaqmP47h2Nnut6nCS18oc5f6Cd9au8x1zpqFCpYbLMkDnXvFZZKURwZcDidMtNFpU9fu4iKtkZWU",
  "key12": "3eyEP4K4Ap8drxBu6zQ59Y7wFQbqBLBL4DBZvJoGoxxdb9Jw6hQPobMmgKaYBkrEidpPMW3fhDR37wFRfBKdjRnh",
  "key13": "3puR1G4qoJ4DsWgU4Lz5ttKiEqJ522R2MFhoPNusznEn3v7H6MeA1WgYr7mBx685k8bYcAnHFyw8rXo1LWshDr2y",
  "key14": "4E9qHD1d63NMThcaqiwT9JR9urHyd6eUup8bcRXyitjarEMeZ44sJcdH4VHRnv8okj3WUjwvg96KUM7hk7jcCQLQ",
  "key15": "2G2Cpi1Uhyp8YWneGy2zoxqZ2bSQZvwEvSvKXwbDz1YzGfDuD4H7vYK5CeWwKQfFSaYSwrSspwWcagneUG6qMYJe",
  "key16": "cNKMM4Lqayh7WhjgqhSoiKbRFGMuh4r9JkxE8JZ3zN1HjBrdFyjuLdzYm5yHAJQyuiQsdtwG3PBN89G5no2LkW8",
  "key17": "6EwzEu6BQirq2MRUfQod1ontMoUTXZS5zQD4aWgUDxqgSpENpmWWZ7m8RLLYpH9Hp2gXQo5Duy2Y7pknArbuBpx",
  "key18": "4DrmX6MjErJfcdX1B4G8o8N7b6JdvmsUL8rX7Nou8VoRK5mcUQLvcLhFCyWE38VVNQaQyzvo6VnqLuSpq6ExgEuk",
  "key19": "4BiFzEFRW6Wvk3HM7uu6hoMZQf6EMqU6BVAZtG15pZrJ4sVQ35nozHfFdpk7E1R6EUrxJBTYgEgXEKrpvPrNKMNf",
  "key20": "3Wrc1DTx5Y3KHMwF7U7ZWQKGZFCwJ5VGfXv9o1UHPJJRQLbYuVKGQeqk7sfA1RBwFCGuyBw9ukKsaUEXdG76ibVB",
  "key21": "VNVvEovx8W8qYwSvGmWtAi7BZ6bKazzrRmvGBnG9u6UXK1vtoHbHjLCbL18Aybnxhz8S8egR4Qj6U3yTzbnnkNZ",
  "key22": "3ZsqybqwK41qatua7qQyrUgL39WJFUYsGGYfwfuWrvtnC6zCowhpctjMD9e9g16fVtZPXMc96KkFVcgoSkndpzB1",
  "key23": "2Hk3KBH1HZWW5pMhKkGBrwJiey89JNNp89cecv7bLV29yDQkbJYuEg7dZ1dHCsyabQw1Mez6qmuoLHTbzc5aRapn",
  "key24": "2dYsoFXJFoT1TxWPA8BcuB9YF6VXDv2ky9scmoxUkpKwkB7wqZmQ2BqVMqwUWTHcZqfZK55zfsmWexLAapHgLwxo",
  "key25": "3LYkVZbV9F8JrHW6iFyGhNBnN7HN7EMqF6XnMFRpFWdBNLELth9trPQ9G7m14X6erE2bKTrjvmvKL4D8seATT5nm",
  "key26": "5RDJUVRfTkDypFcfpshEvD3DzELdx2zdamhPrQhCeewd18BA2JamJTkM7SzBmWwrt2cP6366qR14apCEhL8ja9Vu",
  "key27": "3DVKgejBMthBGZRUYqxkUixzRn1DbKLn8XQX6oxyJKMrh1zfTDHrzuoi8qWMYMTyxSjTnKDNsxhNxJgF8pbvH6uJ",
  "key28": "KSSHfLaUbCWQnmUV94uxMPigxZrJUqU4PhukmKiLjhESyiQ6qym1BSL4wokga9WUWXgfnhyUbidBXSPvXU7yf5D",
  "key29": "2m1sNgFFcS9PMFqC7PEu3gnfLww81siW7aGsK85BbkvZt4QMbK8bH5e45UWwci1ZWr2rpi91KZk1UAPrQsf53LkG",
  "key30": "5oYuoZ233o64UNifstcWDomiZHDEfaDDgQ871c1muxEuDeiBzLSazj1yA6qh8duRGGM7uDEEZqWdnNjpuaK2sh1D",
  "key31": "4C7evuMmaDkh6kWLZpLJDgjWMBobYxJUQBkUJF1eHuv9QtTLouwXYLVKqTvSZZ11nhS3vDVgPxACxR6ux4FJRcur",
  "key32": "4eZew9qiLMVtpytrurV97m3PkHLDMtr2tVCvLQfEVQn5WBaUcmw7KWXUApNTJ6isMcLbKDk5yzYgd6vqKk594fL5",
  "key33": "5vqy7aj5xdEdVrjd1youa87mrHcCXwobTEr8HmkPqSNYDe5u15RvL2S7S29NqugDZxAsiPUxGRzinpMezScySSw1",
  "key34": "3YtLhQGErduinNjh7xyruQaqtdX3e9XSfAyGNt5u51jXkZuWr5Arj915Sks7V1nRJqMeCbV54T5ohJSXtvztnsnq",
  "key35": "5sqHvAtzBVSEDNfdp2Ynp4CEwLmnBtkJJ6A2B3N14qYy6uPqoqsQP6qGkm2Xj8Gn7JwmfA7CVypuzewN1aHuSMif",
  "key36": "3mtuSE2hFm8nzVYiNXTSqDyYHjcSNJq7Y4KMRjiJTVTuVudxJFk4dkGq9ZKda99uLsWavnHY1kvWCfcoEnNW3ExW",
  "key37": "4uUXZzsCxGNtgmtZKJMnshd2KRks5r4pZhbbmnWPW1XYxM7SShg1XS4Y2cfBibbrup8b9NJnANXvo48ETv3JXus8",
  "key38": "5WyHaWDzT9B3W4nFFjE1S9irenUssbpcXr8X8p1oeskaLpqrocFEbEbYPpkACrt3vAz9EsiJYaqKpTVkuckyNWba",
  "key39": "61ihE98vq9B9XSZfubrK3LUEc6fhsHdTa8fGYJPFmKQ6SJuNb2bFDyNHuY8UWUhb35Be8ZyLXpMPvPCBzf21dey3",
  "key40": "dVDRDaFuGbYoiS8t9kjxVZbfE9TK7omyXCqiKXgHzsEFBaapFAdDbHybwFKEHKyRsswczWinnqNW7Ryo16EChj1",
  "key41": "4Fh3ESgvtb1VMhGy46rXfk8cFmJrFNBBXkNUrPDA8nMRBLAkoeZx76Qem5HTAt8KijZU1A5P6UzveKzqwSs4rXTq",
  "key42": "5qjYCD7WVqmwLuLw4ri9aRhQHsAVBQ6S1ppBurSmYd7ZpdvsdnfDYg839gdDzPURNBZ8itP8ZwEhJvLyBpXWMtJs",
  "key43": "4Ysbduk1Wk6Ty6wVPukTsL3nN37hQdE1kGJM7QtP6DA9penoUEYKxo8ifWzdCfqfvttzFudpDR2PtVuMCseEaTbp"
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
