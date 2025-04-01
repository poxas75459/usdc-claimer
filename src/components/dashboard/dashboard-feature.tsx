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
    "38EzUBZKR8iLLk74ZBZ2RZjy24Mf3LDonGKfDCSvz9R3nDppzrvJMKn7ZJZJTBKBxTdobz6CGpJgwLwUBWvAzz2B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KRuaF2SSbqWUwS3Bv4hVzJFaU68v2xZNmeaTYbKM4tfrKQviVkiQcgBee8tsErVsza6KLkTd3Lb255fbc9HTrXB",
  "key1": "i5WoecYScAsCy18cNha5kaRGH8r7HdFFu7p8jQSRz3oppJAehtaL7RVCXxveyoJcgZT7xTdHR9LYbCu2PfcgMpY",
  "key2": "5GWzoYdgcxTxRzVfRrQMryKQZjpd5GfhfhgmDwrxvuFRG3PPVbq8p6Prer98xbfJuLK3fSVVSUG8TcmLVVY7WHyq",
  "key3": "LafhDyPaMbc5UXkcxLNCBZioUXwzKvBWKCN6UEbvJK3ppLbo8Dwed92BTzAqEZvmbKEe3ezLL7vUHK4GDZJbzt1",
  "key4": "61jAvg89qRyxakyUMNbUvjwJU2q9scB8D9AULPLhdBg1wmw81K8XAoky6XpC7CZpBgBUEXf9L3o3qcnNFuWm5XMM",
  "key5": "3WCoxXFVQntRXBWd7RyZcCrPq553EQkCRXYbqr1yDBSAYXSnXwzSWxdCQw4tUJbD69VyL9Ta3gAVxEK3ZpudR5Ew",
  "key6": "2KrSBsTeCNAtNgKuse3Skn22bK94rSRQ9vxT7cMZuDvVVytqb3CqSNXC1L1nmJ8kMN3E5R5GTe8TCyuw638D46R4",
  "key7": "4B39LoQ6L7jHNBPV8XT3YUKuTLSqDuuHjBzZrsP4N6vv7L5iFQScceKGATnxhFhWLD22bLi3ZR43ueq35FZwSiYp",
  "key8": "3dm6MbsSXf8aQm96t8VLNi32BiZVpi8tHzexJNg23FetNr1zT5enPpxq2RZtgUPerPWkyMTXnQKuwqAGCDnFL8fo",
  "key9": "5w1fnx5rMJ4cWt2JJCwHVpnE1s51rRz3BcrwHpMFbB4vrwu8VmFw6mbbCQR5utGux8Kox1x6HE3ohLtwiYv27u9J",
  "key10": "HSyitWWadXeHQZJaxdfWChNvEdcUkFbhXgXcCtYnApdkzsDpLLFkG6n1LjXiTFWMSMWPMQQJEdp56FzXmtthexo",
  "key11": "ExryFKYgBU3CmZxKum7uH7awa2S2ysHEU8NCefDzVp28RhWGjbH2DwFCRPc1TtudZumerEhBYeRVd84h2wbSJY2",
  "key12": "3UscHbdz1UHSkLckA1RN1BmZ7WLqM4pQxca2LmzpgAv3yo5u8EkS2NcCKCN2csVU9F4Kttzww1NTdAjDrYVkZxvT",
  "key13": "2SrnJcMRgY55iEtk8MLUVDFHSsnofXUsmDqhFzodqWcVxbC3wkJmMRxD1yeW68z8sKpfV3DXB3eZ1JWD42T2kTe",
  "key14": "2d7LQyqph8koom5LSqC2VdQWZ8qehmgn28RKhspfSSWSK7NAGEXLDG71DeEjGMuPQPZyZjNDznwCQ9MxTppJHivF",
  "key15": "5RgiEvJDi1NHkAyiHnxKnhLSLbbchYEHw6vvSfgMZLPxcFgUHf4EYYHGWypewYPtXvCYuvsSoE9yKgRbwM9BdJDe",
  "key16": "nRGQ4PvtfrRTF1YXYwfARc6gM9J8QTN5XAzJsmy5gPMPVrdZjuR6xCWrGvdapYHgEQZG8KS4L7JN5aZEdCyT1L4",
  "key17": "3WhaNz27PHETMMrUTMszJn9AD93KugAgWpkMX28VfVtEvKkj5m4GPWasFtV2pnHaF8xSNLFpamhr9A7sefCU41cm",
  "key18": "5dqGZ5XKaYT8dbK5uYbyz1er81eL9x53WJ85dcCvVeBENoEJfW6fH7MCdErD8Wa3Li9YXUgScwdmNBLJoBpBYZHq",
  "key19": "vi5hFafSuyiM7UEM38c9Mq2AZ7QdP4zkehcbRpcrrRBoHXKLsrDiYG6tNfMNRhaiPjM31wiGFtL8y6pa8RfRo5s",
  "key20": "5JZSeWUDGmeaEstxwADyaTZJJZqeQ8vdzxjvgVEEUG6wT8Mjn2FS8qtppehwvvfApbFCxYhBMDjYb7wZqzwJym3d",
  "key21": "5fApHbMT3nPFPAXfifhiZQ8E5MwhwTgUqRXt4Jux37kxDh4kJoUnkAfuAiJsRTo7rAnwUSRZaktxcCL4D5ySSV3M",
  "key22": "3adjH9Hoq18GZk3de3oRzpQunwiDD9EJGi791Hpm3TnjmnwFi2cKBoxaSKdV4mgeHZRAc5fnZ6ofrdvmD1xtpRN9",
  "key23": "3G4W3VEsYqoVcuHg7rZ3BX9rf57SYegeCnBUXyin6SEmJtN5j4ndE2gffmdXfMQW1WUMMbyA57ARXDbMJ3eSEULF",
  "key24": "2xoYcydX5G4hmZm1QESRQ8p5F1WYruJd4uVy52AU4z9MhjrfjhvEBnsqmMC6CmEygmj1Lw1TADUEnrEwBxSXkjkC",
  "key25": "2toZxyHotVrgiEv5uDUb9AzNXJmw88Gu1uZe2p1NYhgGgpv1zuLVWtwm8LV4KALVF8Trc7XYByV5tmE5JQZVMU9K",
  "key26": "3aUorZAE5gV7bGHXhQ8wyMSsVAbJSHtqqkLrEQiFDWHAPJm7A5wSJCwGe2ij1yMdeqXFhBdkcuJW2StYDozQppu9",
  "key27": "2M5H49NBdDyLMpbYtpPjoJQGnrT37rXZWidvH38mgH4vgzGnVW6CyrKgR3s3qqZ4GjzApANPhr245kx4goY25MXs",
  "key28": "66Nf3HqYDsAJ63pyCyhsoGJpPkq9qDZDn9hMMYHjrt1WFzheK9d3vfELGv8B3Qn7N3NLH2WPMywA7Mr6n4JVYFRz",
  "key29": "4BHeRL6dywAfWpSxxUpau5nHSitsc7qrDVjVbZE4fBnipTjQmmSTSS7dyLFLZFhuMVuaND9aN8Efj1kx3KBEzHxG",
  "key30": "5YpBZ8ejxvRpLaPDdJ77kbMN7PvnVzDhz7184AWRyiNgw964w2LMats2PfAimQ14B6sPkndbw2kRfDNqSy7agK4X",
  "key31": "dXKZ51JdXT6rna6YtTw3bKA2FpP8KqoonYHaje6Qsu36G2vpY9Zfj9PPgB74c3muF34GjqXFt7UH99NMGjeHyRm",
  "key32": "4XfLFu53kHGgfsFU82ratpLwwL1i9ZbCxigMUDyfXN7gSYgaCsTdzoQdGK5Ch7C53GJ7FWNg7sjY9C6gyvutBRyK",
  "key33": "5ZME92S4TeqaSeFH3AVXV6mZPKyNx4rHzg1nMtJvDVGFPMjp8iEy1vYaGoXd2HbvSWa8A2vkFMgoGJXB5dnuy5gy",
  "key34": "4ZBr9BtS561bbqzntGAxzsZEdC6MCc6zqNtjfyikvu1cjyeMWe1pEg12YHaBfWRqr9FKSEpTw1xQQok2EL516mDw",
  "key35": "4gPYUFdjn4uzJvnJnkEUWEieDYKME8r7kc3fsrFaL9QGFy3DFgZWzHwajmMJoDcRf1J8uubDGm5WcwiSHjugQZzz",
  "key36": "3ZyEyqwqWZ9jZuFdSzam3AjmGiFHE7fEHMY2fPDC4QSnPYqueJazYb1QAYSiF8Gu1WfWZzxwAXHBNWaKR1yignWF",
  "key37": "r9pXNmLKKqEBaJcVeMSk34zwXs73fAjUJm2yKh4eqXNzQNveh3ezwdHSfSoRRfuVXrp9yS2Gbd75ti5ExKcGza7",
  "key38": "4UA6uekMTD4N2PK8cwdAFs3oRibfcvg5hXhueQ3z1Es3f1BvMoNHWiJRHeJ47TZNKHjN6sSXdjBydAVVDpPf5Rtr",
  "key39": "4RFXJf6sjaD8GQ6BrMg6vMLS3Lh7XaqH5FjLsi3KpDYT44eshhwgGrGBnJGRDpXSyrgg5Jf2sLRF22yPf7B3iw7C",
  "key40": "4PZysYPSAcZJHuNNnpKy5U7cisKpuaGV5BsEB5tJcbKeLL7ubxvjbjkn52E3ZEfuaDE1goXdykJDRj2dSYFrBXPh",
  "key41": "3HLUr8fS65FsBgfzwdCUZpaf7xyUv6wnj4NxV65QucxGsmUGks6HnjFWkyAnEryL8U1kQiD3kANgLM1jjjW368Nn",
  "key42": "XF7u7UMAoGqVggvrsLoYp7aNaQ1dvxWZLXhuWBZijT86q6gNWNFJ8YkSiePpeb94fkjHFQnSi5Km5VMdqYvaBtK"
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
