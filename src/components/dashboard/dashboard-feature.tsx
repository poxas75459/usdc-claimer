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
    "gFSEPjG9JqTQEsV3DiFVuxTZf9QDikW522cUBGXcPpV6okyd7zT2WZANBGAtxyd8ZvSeaetLUQ6TDga7bjdbUP2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QEP6xM7yQHPwGZXfE4R2xdukEUgnU3q4GWkjLiuKwd8ho7SRkpGTj2rHD9fcpe1JgewsvFvFcJEwGvS5rc6osip",
  "key1": "UJ2EDfuURizePhtMKQk79ZJfp7oL8ccywqrsoqckPd1WTFLotdFkEfh1jz7nyCKUhKNdsS1LEmmZD9wMFA9JWAN",
  "key2": "4gjnwgnH5GpXtTggyYdYbLmKt2RihgbCwbGuT3ss3yxNZRwvW8VrSaduunG2uJSqajQYqZ1QgFAEftJJPYsaSrTc",
  "key3": "3hPRCD6X97nXRMjJwyLRiyrm3xfwC1foeZQdGkrd52YWvd4z7VjvtZ1z4D2vBujkCYPTEapVwFnnPhkG3qVfrwbg",
  "key4": "64VFWt1C9JoaT5YkVLcCzn58dCXemksXkLT6oRmGWpMvfU9KGfahc6CRMKSk1tusgejzzZEe6Bdf2XxH9FK9rsj3",
  "key5": "AH1e7nXr8uCPXGgK8uquFvKy6DXKVRFpbLK81yoWaKErY32VaKeSsVbnBz2tvQc1VdiZURNvbGreLvX6rBaw6jv",
  "key6": "4BGWYYHYCD79JuYTqQE7hxvXRKQbt75p6mTygWjG6ADSRCq4TH1y53AS3TeEtCE58Da9NrG5CkEZa5t8xPUmwkue",
  "key7": "APAqBowJUGRh6yWdi1gRS42XcZ82amuP3oAdRBqn8LvH6hfFqZu7n7rQ1MHycBLunrDkeiRN5B8K4hKXZSzgvaa",
  "key8": "5wtpTCAVoEQabegfykuwVXnTxtJSvB7dSYcxZzMaxYHwD33vA6ysCRcYKTpksGzbthNRrKG9CDJV1BZNjtL4CuMY",
  "key9": "ALByNnmX1nU5qgPp3iGoZvMgNMs7AAHRz7qcMeahxdbKDXxoXN5sRHtJVeD7dgEmpiaPm6QbF3CCpbVUiESGnsL",
  "key10": "3gXuL2UAWKuXz2RYy8DrcBrT8cfSd9qJHQdT9tsaEPFJUQgVbdRkoNjASMBK5nGMeufKn4Nd4HvLXsJeRdRLBSwd",
  "key11": "2rAhS4JanfttdLCsecEY7vZDNUi8krHbDwYWRriQ7KVVp1ZE2Nd13HVD8GpdgDyyvQAmxL9RLvdDUVEXjc4Fw5gj",
  "key12": "67mkW9q7GYpmdh48XbjjY9FHXHz7MJxxhcNgsv5jeq7zJPtiA1FfNubJw77Rx1VpJoBD5eEPfmfcqgNYXPY3AAgW",
  "key13": "4EbYYEoXFXix3cGsKbKWkTSk9WJ7nWXnkXDTimpFRuztKhenATtDMoh2qeNJiwz81S59ZbZviWUsCytxSMyuvhav",
  "key14": "3Tqy56agxyW6hQAKH1VHCrKna26ELQy8T8WveRgnih6J2PBVCc8n14j8BwUnytuUMrCHr5gNy3NeeZ8L9XrZmsDB",
  "key15": "gZfD3QjACvTyCcATeHv6BqWb1Kh8QEHM4E7wTdpixP2FLMhDNeMoaLGhczuzrUxWhzN5TaPNtLbXaZq1YKwR4De",
  "key16": "4Y9s1YXoDJ6D3F9mogN2hCumLZru3MnAJaGzvcH2eB1vjwu9W7a6obxL2tmUj4EGn8yUmdM3kaGmHcqPq8CSKvtD",
  "key17": "2vkbRA865KHYNF5f1P3vvg5HqAZGwtqyRnRyqTReFu5VDoVDpoamJ75XdUMrqNxq7VmNJ8oCVyPLuYroEhu4tsFi",
  "key18": "3DvnCF8ETzdsqs21DtUpHmq22JHZNb4jhrr4aZV7QqifB1Wr2LXH2L68uuHgoGMaVjBKYHdEUcpwy54FP3Qnkx1G",
  "key19": "Sph5ELUntAEWAVDS5UTx2vr97MCMWYyBMpxH2FtzhUPMonRaxg8VywBwEyjgs7Bf3Kw42mdAaeEFf1MA2F4eRaR",
  "key20": "3wcysru4DdtppgbJTaWhgS171uSwVQxFCn4EEU9wCnuZ9gsjdXGMveRvRFFamkDiCZMAfUsD6rJmCXUATUFzJef5",
  "key21": "3SG3Aj4KVMz3AnRM3k4Py1S269TUkqijpASBzxN8cywhc9YQR78w2QHDW3fcFz3v6dqppy1hifyAxkz44feuNP3j",
  "key22": "2WqGumAGbWXai8an1vXx3XRREkndDBVNFM5rNwzmTxhjVFBr3EaEJBWrWq7sAFQqNZF2TCivpsxbeoo8xrntxp8r",
  "key23": "3pwJsCWR2ZaDN79GbMhtLW1uozUurivKyYvGdPXQu4yqMPBNhETbxyfpfvZz9p3bKLcTF1qFPDe8yheopykpgcYv",
  "key24": "2DdbTLR2wu1Eq4L3noDs533P6PzUnDNUSZx6wQ4PfmVAZCtxUmfP3ZQxR92iM4WxaHCWtAJeRBqNW1Dy2FucSojS",
  "key25": "65wpxu2BfMwjmzXL8HG4hidxkvkXp6PrDKSooMdjsAtTyaECqXZfhbkocbkrV5NRxkfrgT1kmrPXBZwGFj7aq5NK",
  "key26": "4D2Ym1FrPEEamAjKQsy4UTEnAAFZA3oWNkEg2pf2UafDmyzQq8gc6tqp2qVne3NgXj7Y6XQYupc76eDbUstFkDg6",
  "key27": "tWvqxZ7uwkPSCpxdNVvSBLXYuxDZ8rq2Hy5jyTBXTAm8Ld8E5n5uFCoQohLT4Vbpxx8C6CA3zh559X6KLAm131X",
  "key28": "2rwvpkciFK5Qc5iBti5dV1yK91zH3QbWw2BHbimazvMm48YuNPhVeQeYeWUMy9xw1RMm5PsiZ6oHtWHDbBHfadju",
  "key29": "5u8Rq5MUt2gvZbdB4oSG3u9Sgrpxx2BQJwkjWXk3AdbQgPFpycTnk5eeZYKUGvJGDsromNVkcTDwawPDXeqQok8p",
  "key30": "5UjamFN3wez8VbTpmjsnEE6eUByDAWnHmLcqSoYaAM8zhUPeVvkJdGrNzupfyRTXcnnWPupB7cLK6brX9AWqeQM4",
  "key31": "5jT47ydJ1jgXAQUCBkRYrDuJbDyzFFuypcBbqLx3DhL7KfduAGLsRWL3ndnp5Zu3EkLRgsge7RTW98RsoPpfb7H2",
  "key32": "nL9enz5pmviDNV3Sd3tpNeBPFopp8szMTYxJYbFcoVQk4f7y3aiy1hLD3Gih8wztriLnAwtPoUELDMkgbg1AfS1",
  "key33": "4zy9KCYz4mFA14pTroRQBFdsCDQCsz653xt5GodcJBBV3nKEZGZKgDA3pipmhBiMzj4K3p5uQkracX17aAU5un6f",
  "key34": "3Vckq2nKnSehka3Lx2qeAdHo5q9A1e8kLCc14CRJ9CkWThh5jg4ZwXrPTyEbtTRKM45qrMPcXcSSrF8x6dLpE6Be"
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
