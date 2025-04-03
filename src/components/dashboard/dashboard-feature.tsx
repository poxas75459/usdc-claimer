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
    "5aUVeCQ5qPUsdmRamj4kxus3Qypxcpf1UrfYyDKg5edwbXaCbMNfTvzn3ExkSS5DpfzBWUsEvmCR4xFjfp58jHBz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TFHidbUYAXZjzyWxR8EgchpPeQHkzSsjPEmvSXXA6LEvUPociUuji5ySsre4skMSzBE6VSiUx5CEMmc32ropPPR",
  "key1": "bD1tAM2QnbD4m3ATnzAUrAbnNQQF9m59CZeLxEXYjsZJHZH28V78aFMhb5qUcVoHWqxvZM7jqaMY1Y6U2cz9Zjf",
  "key2": "zgjTp6wA54zB1LbNPxwWa9tNxVN4LetE2RzwJi8kP2ocJkYMLs2qL5ih9c3mCen5rvxNksp6Gr4zCMXkizk2sPs",
  "key3": "pz3UNbaYyBC3H1NsUmFCAK7WaWrFrmuWTJZCJPVWQ3q7bG31RES9orU2vmi6KfiVEM8CF4bpds8T3nBvgbaK8kc",
  "key4": "3Zo3mq83FWHbxpmBxxGN1uRDwUkDxGp4Pe28SCWoycZUPSSvHTNUMfBEYsuMyTzbypsGxWeupkXRNJimpZvnXAam",
  "key5": "2hxS8ZDXZHg2m4PKZ54gDFPyJj8HUCz3vnYAeQSdF9ERgkckCZFVACJDK4XvEwxxpWrphqCCvhyXN5tPdwCZhsj8",
  "key6": "4fCKBXKkZVpMvozsrGUJ6eJPcuoRk4TNnMbnfYU2DNUgRRKUzWza9E4JDCoKYRoSQsPcthREdVfarktpxvyccuDU",
  "key7": "28uMZ5MqCUiFnFLpCdrtZ9Jw6F6kXMiqtCNpGWvriq6cZaJ8bFbFdxeqwD6V6iTDjQfQwLJBSuhanSb8B23637Lz",
  "key8": "67KAxmY8tjgbM71iCjTfG62Mtxs3ZPx71QpzghbP1nLfdq4rVc7BBMUYDt7yaQR5Zn7fNkje7NN11dYyr4aJJ9ik",
  "key9": "J71H7sTpCSXPqazdeCUPcJu9ymb8qEx6MyAZ2VeBqgwvYnq1gUmb9g91Do4tLwTxmyzSqWPPKqEZLcJzgnPxGhN",
  "key10": "629u7nf2FBhqfNnarRK1DZTFc2rfW5a2A23f9AmdVMqbYxNs9TacPWL2BY6hVmDTVifaT1QDD4aBmehFaT6kuewU",
  "key11": "Qf9FM2PwpEBzMCwfdTF6qNFPpDsN1kmDWyqFbQ71JHTxy9syPSXMFffqPRtst53VnPfTjwWWtMPzAxzArd97eyA",
  "key12": "3amK9Lx8Wgkrz8srGEningnM8j6Nx2is3PJ4GbEWUGvhMtcNrdMZdZ7GRMenxtH6tJWNsraudL7UJMNMsThxS8nJ",
  "key13": "4EeWCNzvTb2kJomN8YKP6g8A5NWpxdsxaKjUruqk7aXevRFtvMp4dBKuzgAeYxTveXuy7d5JSbZKNpHNqERVoYHh",
  "key14": "J7waB7wzvSmvB5uiYZj5pvXhGiL1RYaKcuPMcmpCE2B66wVYqELBbjujwX4nizkGoewvCTTbXwXYntCKnLSHTDq",
  "key15": "2mNrUEiv61hdKEsifStCnkyWYqvhqFECYBHQ11tJVZqjUZbGNmXVkxs3bve2sQTD2QKpMMfDYcvCt2cRLg5ZUt5L",
  "key16": "3CQ1Jzbo67jadTepb2Z3t3SKp3UuCpeBfnLizAD82wimfqrhXg6n7JBnEfwqrsZTMoNRoctFtWa3HGL3MRPizC67",
  "key17": "5PjsWVRt3hF5aJTnKuTXXUVHThjCzP6jPHdSncZ8JdSd9abdQTa8fSiUKm411gMbK1DpRnnLhYHEEi6MjV9kvBFT",
  "key18": "4hAcjpmwFn5ZJAoZmfDUpeXyG2rZus3xu3SbUv49UuH2eX6rXJpzsqzd9i4x98aN3GuVQ6i834nwf9GSWQK88BXY",
  "key19": "59vPp5g8Zo1WeMLo6bfFhK5nTKENcMDmNgKiDdW6mYzp1Fav4VqxZYqyS9HoDKAR2tCEwR3tTqrytnnFFgZrqVe",
  "key20": "XsUKVaXPii1uDgjYkd1YaRaN6cyqAf9ChVA7Q2ASx2DeyBdauDzzUu4RhHVB6M5zMfAbmp9YpQEgJkDL4yiRxzo",
  "key21": "2WAxtc8NQySwP1CfYEqovErdk9c7AEm12RQtrFR3uBoVnL6YQgnS5mieRqWd36DmKgHyJkAzyHGKfErXMexJ71eH",
  "key22": "5rrxuf81Q3zs393wF56u92uHXs7tYZKJ6Y3aYtyVmSsPQMbXTpKBrgZxPYp1ydeWYzFkYFmZFbSB6YHG2zBWzE8Q",
  "key23": "4aDJk4B1tFRsaHD5gR65Jua7HnTciC2wryT6Z96BDcqYBZGMnbkK1pWBAw11RaYQpyvDZngEgDrtsykFKwBYRJDS",
  "key24": "u8txr8crtkeD2EcLM6t44boY25t1gKcGARA2Fx6uqDxZabzepMLCg8RmpGRr8tkzbeCZL71s8QeGb2hudtfw5d6",
  "key25": "2RRHKbUmPgGu2aMjhupQMzg4mitQ27qYD6PwHTCe6iBmn4FHd13PbEkHX6aKDgSSnMcQZsFyddQnpUdpD3FP1fBE",
  "key26": "4Hc1htigc3vzw84baPMwPoiHroMcoSiRkjmm2ETxoQKSpkgma87wr9b8FChbeuMf9aZabTnHzug8ATcZcdbYJts7",
  "key27": "5rSeomjCeCQR6UqXMxxhtfy3LV2W1ExMu2asZsQpg64sxM3orYbN27YbRLfK86HhFvejdad98rExTZcgtuuPh7UM",
  "key28": "4CTNcWMffgJa4XyU53P222XhsKDa8NVFm7PPyh9wQ9zfGZatSGM7SAnd5X1B5tAZDXQnma37KSNXpAXCAmYjFkRv",
  "key29": "3BJVC4u3SD6c6WU3cDDKRTQNRgrF6XDpVtdGPWjJVeKMN2nS3LoUd7ujcfwEpYZDzJfNPQeSnsFoxVe3F4RFt63P",
  "key30": "3Lhm3ugdCBTgXxfFVW9LiRYMpyNDCqwZTTsNP6hvUVHNC42gzaBT68GfSmDRGQPhgJ2mgGZ8L3KETNiPasTbn8pk",
  "key31": "jE39RbqbyHTmcHVNYcPfh7pHRQtJbxypabQk23LuYv5EDbS6G43CALQfBkLuPgbtPPz3jKzHbe4WBCGttJXULAh",
  "key32": "4oaHh4NjWTrcvouHDvNd6f6ms5SL5fjdpDxBWfWFA6u8s8nmjg2mNHhHefJjNZA49FpoduNkkDwZYLM5quNJZQxt",
  "key33": "5VaHcr65yNSxAazDfdSAFVm9DiJuZdY1o2MShtk6SKhcZ68xys6nMEBYXLaETFoXDZy3j6LneybzqJqMzxNqW2nt",
  "key34": "5onFeA6XCdUpFQKtmz7615xjrCLXSU54f3cDnApGSs6EyzJuGUG2oYSXwVUPT77EZtHP1Tg2u1mhSbJLAeWCEREs",
  "key35": "3TvkMcCY1KUPhmq7G5qkuuRefuHaNtPiA9dQdr9co8NWAkxLF9h2umwuZimJt9ASr6SuMrBKB1RfyijmXTUVYtHT",
  "key36": "3wLEJvFf91Z7iVDud5QzDzFNmj2WGkDGLeQPz523ybVR795PkcGkzLeL6Z7yT6h8f4qJfU9LYd6W7Z5wWMoQY8Vf",
  "key37": "3LfB1QN9NFXeVDHTLB2YzsrNZTqx9qtSAyeDpJAVGWtAQzDvrJnsdbESFrYc6rfy9jsdtg5boDerPV7iW2vMGaF2",
  "key38": "2fY8C9yRmVhXHwkmiGgJjJGkF5CFiVczBrbA7udtYBRcy5tRekDhFhXUXhR5ExrMPcVSET93JEZPr6sAVc4GCPVS",
  "key39": "34VzcZAvw3uWCBq6Bpqj2vu4pjYmytSMUEsuEuJWouGxJh4p7qQMdKCMAMTd7M5PGH1D9fC6XpPgbn27QFmW63vU",
  "key40": "5decTC47t7sYypZt7QFHS31Sjf4oGfEcraDRHc4JM4d9ADvevmF7XjDpf5sVtdhUGS9G8jx7bFzUAmzubVKYuqUv",
  "key41": "4V4iL3Aw2vAYtzWxZ7rxDAmdAiCaZa2rD4q2Xfh2BKPpvXPCZJpEPihNv4aGF8yfGnZAhMyw8K2B67miyinrqRKQ",
  "key42": "4UQa3MLawrWvQw6Zy5zBerMGd5piebULzs3DBqpS6UrQjQZaDJYGMiaUAoaFjeE23m4X3nCogetPQ2U4eEm7m7ej",
  "key43": "4n9CFeG8BrDVxWAfUYQoDSL6yxa3yEwBERRYcf5v1poFQWQ57ezHTavDQiW9PMmA3Ke8qd9ZN7TqF2mkLVyaosGv",
  "key44": "3x7MTgRUCdFVpRGtz8EFrz3wphKRN6LrFvqCmrA17aSe5xQoYCNEToewWDWQrwqNwZELLNm75hN3BDLWQNdUhtqp",
  "key45": "PVNMkMmKQnxevRMDQMEhFCPLh5HzggamWz3yZJe4q3vhhHqkJthC3k2gsfhzoMNAWn5fxN1zwkRgmCH3e6qRcpG",
  "key46": "66f5fQmXd5Ghnsdm8oaHzLezmK95SCUq8A7sC5fFRyZGYEbnRKdBjhfBTgFJx7MTYdTsbhumD1zgP9qWrCpBHtK5",
  "key47": "4x11f54ayu2XSVLu18ZyjULie4ebnmcywurnunnfYns4mL55mGLJq3NsdhxJ8fg8tDv13YuH7A93xBoAB4pjmNe9",
  "key48": "5tCQiKAdrdmbQfQLi4pcATSFZagQyXDWGge9GSs49Ttw3pZw7y545EJwNWwk2pzCkfz5hk83h8UKrixbrsefGhvi"
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
