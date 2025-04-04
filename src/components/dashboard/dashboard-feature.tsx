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
    "3xoWxMKLYuvJDNhV7ooWLXgd1P8bB5KywnHdwKQt99CCQJADfWRo2xD61wHP2FGqUUGvP8JhH53h2ddnj34xv5rR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PzUwhQgP4xRrTKHQpZwwbE7TadAg3ivwNWmuqDWUKJ4brXPH2iU3fctf9asgiLMj1dUbyCbXaAH3WviERM4gDvv",
  "key1": "4B5B138msoNw9XAp8jRnCWEJrzTTBxtSajzGTqABwWfaZwoV4tpdEcAoCrnDN1q1ri6GJ6QARfMaVh5GcN7wMvqv",
  "key2": "273mY19rCYWwmSejaFmUzic92QgzzmLJHfVJUSpHgxb5b2VeH38vBEjvu4rnuUUkKE9U8wp37jDUQvw137jMNwsV",
  "key3": "4Z6JDdVBjuXszzs4BvADkDzW97RdWk94j9s7HLmBMKoegvP9HgjNwftaztRRyimT3TCAFUqmgZT4cAz3dCY4nV2E",
  "key4": "67VRToyMbzhUNAt8ksY8wNshpq6B9kDH5LKtbgZkUiNkKtM19B7eTZrEqsgfZABxJCtDUT7N8AdxG5C4xDy2x8Fz",
  "key5": "SSJ2n7TFRm5ct26qXakdzekQ2NyYq7CPXfgfvhSh95ybAkYkA8R8F4Qi67cWb3tUbuLdk55jj7eJrbFnjVZGMjm",
  "key6": "5WimuXj5hXVnEXqACwgGPYcQYcAwnTMvzP9T23Fk9qQrurg5q36qrC5acDB8gtkAv4tYL1dt2nb5yawhYyCffPsS",
  "key7": "xgwSkqNThyA41kvrnzfoMPhrPWp7vPDVi9T8QtoT3sJ1ns9cuNsCQ6TbQn5hpTAvftWRYovTo5hjhDBKGoJn519",
  "key8": "v74NzfjKjHEsAanozti6hp8xC6CYJkzTwpedLhBTayLUxnQG2JYMAixMQMK2RjQ1BWaajVaz6qFmQafBVSgDnjT",
  "key9": "xPf58NBo9Av4sjdWW6KMLjVTaEf36gs4aeLzhFwRDjy7GnPvvao5yA7VTkwkzju57dtWrgm38CtDDcpoKqTRgFE",
  "key10": "3DoPhCPmjDKUoz3GSpDGwyE2wAvScuSh8pnfKiuzELiRx3pygzp3ZRmiAGpnAgXLErsD4RHEHee1JwEXTzRmTRBB",
  "key11": "5Ztg535UDK2s2HwGqbRxCkyhLzErbVoCgt45VUmwHQPtXncwRk1V2XNFUAj9obdK7MMZhbENNNMPwCpvAzsErP7q",
  "key12": "rRT7jG8ptNQu1XdUHi1eHXUZugM252eszLHrfX6Ax6jQkCmbh5xgfNc54aFrvejALgc2BdNy18APRSP5K1r8Ehi",
  "key13": "3PrUbzRrpa3EbeieDgirstKp48HMXLsGbPt88kAyvqidoANcrNVTnrSkFpWv1WzUvrAAiLL33QwpYTMko3ptuJRQ",
  "key14": "2sVbXfXBtwosXczcmwUbtQbZamFgqXeepNpZJqX1YxcyVmnEu2MmgxqYE9NurNodcYSBbQRWpbvwyLVabQ4VGmd7",
  "key15": "3XG4qjuYQZuuVXU8GgEkbg3TfPxDocroPT46ddB9cQf5s6V6ktq4miyBW97zYFZ8YWGnTXrJEHp6bs9tm4q2KBTN",
  "key16": "66ccLn9Qw1bH3nnnVhDwkYtaPH5nXwkGrmaVdQpZtdWvuTsWtYkbd3TNG9LrCfMHRD1ZCsMsNZyWSgguScnUWiQf",
  "key17": "45Df911eiMGuPnZPNPqaNG42GY5bcarQmYCJVoSgqWRFPCu1agsbq76nuFb6B6TNxCAPUwefEFSBmKSu2pRagE2r",
  "key18": "3XNTQxo4vNYXgurJVTMWZ5ViyV3K5eFAc5b4n6RtC914UVWvAFj6B8mBg53vCn1ixszhXvfTMScdHQGAgD9r7MPi",
  "key19": "4xfDSPWaaM7i9VcQQ2PSkLjMiAL5GnGHMxNnFLf2VeNsp6CrNaNqXmerTnhkEQhd98GV6T4HxQ3Y88DuVK7hMf4U",
  "key20": "5D3zownM68oGyB8iYZWiX8rBLMpUwSx5Jq7hfNnUT9nRDLD97CSjUC4HVkRVr5YDv7Apu9tFiBPySU2UHfSRwidf",
  "key21": "3FwweaZHdqHyuBEL5Dv7KvgDNnSvxCQNpQr7W4uMLSFF6eVXrKLyA4WGfumDJNuLP59weWyYC5rKdivMthDhz9og",
  "key22": "4BRn2wXS8BGfZCtgJWNkrr2yk1JjkRx4E8j2UN2U8UfFusGCtpN261rQ3dXcz8PXGWNZSNrjxDFsUxQLeVoTTE3u",
  "key23": "5GP16ftL6avjiASNVw1o7uCN9GU6D3MrwrqGp2fcUuszKs6PgimSz1FEThvP3JZN3ejm6LSNywcS58EAmr6yvuyb",
  "key24": "4Z2LjuduZ5HjkHiyx9ipHWL9F61waRtwon5ZHbUZ3F7K7RcDx3ai5c3kGK6cdunH1TPPtzpabMpeb75KUoMyf8md",
  "key25": "4rdTPoLeu9QaZTGUFne2MZSCT2CiWGrN7eP1Sff94tHUuvyj5h8yMkHbwzaB8W5KrrCwPDxCAVfpuJQzoZt1mTYs",
  "key26": "2vLjRZC6UwX7xVYf7qShCncGaCDJwRNQngAYJR1evoBn2i4erc3F75dTGbGSgjyyJ2XwzeLYGx7LEkzCqroLk3s6",
  "key27": "3xC4iYaqHWZaYXSLNfbD5BEwHCd82mFvthWTufGH3x9udgTSRLMfFvsEVinVWRwV4S49C6Z8XMBbgM8kct2m8Gko",
  "key28": "4ZGJTAaZEeerchFzyKbjbTRem393Kxwi6msJyQrYMKvb4CrgBLC24gbkUUS7DcB28djsmRqdyB74E8KmaacXowdS",
  "key29": "4XCYRKJ3bveDmapzc81zZSpJYWJodcM2Gt2pNaoNMaQLhMA81V2dkf33xiHAHitAc4CQbRB4TfaAFSH815tLYNMn",
  "key30": "2ckGJnZpWWuC5Xd1rG2eTdZBeTZyrAvk4xEzYozSFCHbxj6UbqupXNqDASLAFT3s4yU5s2FaRHzG93BcDaNnNRdp",
  "key31": "2R6Dh3CWWdPmPBDKHmQ9y8xbvQoKaRBjMAqeHLrUyRoLqsiDhgv6oevpQMMKjeNfAcoWh3r7zSUj3FSczxhris5D",
  "key32": "2Xkk8oaYcWVYe6s1HY8xeKFopNFunoVPQ78ffvJfU9xNR5RAoAtAFf1oanbf3xJA6LKSfjmZyMLwazVsttq85Ren"
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
