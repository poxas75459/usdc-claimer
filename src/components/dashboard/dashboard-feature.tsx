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
    "2ftQDMtYTnhWsWh8D7bne1bBB4dKxehecTWNatMsx9xycAuLHQ6awLtLfLGyfGiYaAsH3NuF8zCX5q3f4TPrQ2aF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nVCKqn5o6AS7qWXXVHLdAHy3r9fYybK7Wso5Mn7TpBsWzchMVREVp3yqTSPzU7yt7LywnJ1SYqZ6BfRb5aicyW5",
  "key1": "3pJnFFeQJRmBsHzQWRzx2rD3r6dQVY58SaxuUPKPeYNzXgDox9SngDzh77zJ8pxfJbV8QYHrpGWdQ28KF9LDQN7F",
  "key2": "2rCq8fyG7iX6PModRuyFuzstUEuADQjq4cP156DR8gJwGxDmvkhQhYVqhdZHhSQ8mgeKoiUgW4aDwhbKF6uJK8FV",
  "key3": "4pWBWM4xDdaSHffBvVELyBBecWy4RWXzqFaofsmtFSymGr8cB7wRRgnaeWB4F3oKJpRCpjibY19D5mcZK2gBcRYL",
  "key4": "2fb9LwPCfTqTYNGMMd45ThF6Syzzo3vZ2UsLAknYaXrmQqxtvdWy9ENG1UdAGN19XX2peN9eNpJrq494mUSyyTyU",
  "key5": "N3Hj9Nu2f9AqZRoVrK33arYM3wJBaCdqGc4s2fqEepsgxa94UaUTnjsY9z8qRFXK1eAtyj2i6R2S7CyyuGvNYHt",
  "key6": "5vTgoVSbRNUNcFo1Y12krrWekWzqt5731Gqqc5BW9cSq6EfnQBrd5eSWoLyj6sRbQnAZaZ5SEQ5euSmCXss5YrKt",
  "key7": "2cvG39ReLtH4SunMwgn3D2voGyY3YWNQevVfHHZ1Kgge2B6AoUPdEmR7rYdvNSJaxMNppUuPEGtb5xRo18TV8tpY",
  "key8": "5eTWGcWYW6cWqNAxBBkN1hfPobxpGpHQk25HEctnnF7iaPaTFD6gAEypJC9n9rdQFKwLzis5NSJvGjmqkGCB5NdY",
  "key9": "2EtvuzSzwwr4NoDjazAxQ1hgBk9BobBnGKtkFecaUfhzLFsZgBYXioDvwNaA7BXgXqHdpiuCbzpdu6RCKcCMvuyy",
  "key10": "vh5uQu4i6Qvq9m5pLdbKzMY6SwLBN2j7pd4e7ktspauhz6yA9BH2g4Fq1LRMBGNHaHnvFJRDZRTPoXoih9BkM7u",
  "key11": "4L9WTpBgCiVK5n7fB3d9G4tvHXQNuh2q4q6F48Ys784uBRpQB5q4bcv7HBDfA8Jv7VC4ATcqYkPfqrDQWLBvdaQo",
  "key12": "41z9Jvo76oeeRZaxV7WXx7YCHKr13EUaam8YzNmcApzHTHiHhSJZ3D4j8haNZRDgPnqrc8oVRb9M5ogssv1TQzZd",
  "key13": "3SiHNj92cpGaXfz6no14zEVBSnVurKDpTdecmGggtpbFy4wdCNpdPsfGp4UwLp6DJCNH1L3E37cKhqCZtGc2tVYE",
  "key14": "4FGuvqZ4pzgYfsxta3y77bbN64v1boH96WUogjYBHTDU5imP2SFM7hQ5g8Khcu3uiqUAdzmtcMif3Yyzh53D4HxW",
  "key15": "4dtPHwV6HmqgohN296FhQdzd1waizbodaZq2ZQxK9QrPtGDHwiQYhniu4d9inQr8kPASZ4sdKULHaN3Ka2WYKVeM",
  "key16": "C4Tz9NgGuvhWbDDJ7DqMmUp6BTtSkBiVcgEqgRgVp3BN3pGCJUMt61uxQenGs62f4fv68PtH3vuaXVJnUDhqJtL",
  "key17": "57PMi1pY6pyCBXfZpLE5SJvoVrCTnEWQ7kRAXCUV9azahpHbVU1Gwrw4BN5KaDcSvrwWZxVV36HHmGirtb5386jV",
  "key18": "2n1FpXrZWrDWdTEaShBvFcdVVuRqoggVX6JJE4UKG8UCpKhxYwTmkqdgimox31p5fUY77afgyumWjPNf832Nrhjr",
  "key19": "3LRWSNuxgHS1G8Ke6MMgKuJ5gakYfpLVqoNiXmnZhQYD2dh91hgZbRnrmmn64scmow3oEVANQdheT1VeXCU6c4Ro",
  "key20": "eKTPACYLHLVPQNaSUNPAXqTjzBwTjgjUDbQeibmKzZgwomhFMdD1SAYDMPGiFuPAvWYXCZ3Ga2yXrprs2bGfYow",
  "key21": "2YmtPN8sJ2iXfdFQoFerCifLU559rUR9xaQydSkih4P4WXLmrH4MvQ1jFqpkVzkJNogq4R8WVEPSjmFaZrApFBGA",
  "key22": "58PBuijawL9X67mAU7mhwtm1NXrssAfXH1bGAjJYYd1pUfWgpxkRLXpoCP1MEdSg5VEV6y7QR6XrXZNcLzDFkTB5",
  "key23": "46K17YLm7VJSAJ45hco7Y7MRmmrPDfyRgLq6oCwyF8jzJLYXkpBAUqy2LBH7zKhUtr92nRdd6cu3Fn4emZbsXPup",
  "key24": "4V34pRYN9ninw3re4MF6g5dwsngcfWhdL3uFZNM4Cf2GuAhGA4tQr1A8RYgBbE1ubqwNjMwwthy7gGBqimfJCnjy"
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
