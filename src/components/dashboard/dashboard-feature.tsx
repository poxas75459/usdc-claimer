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
    "31WTwSatHCkqwxNiYLgikUpFpTsKmSEs72vf7SBUq9Ziy9s7r9gAovDsv4enxM1D7DKUNipm7rDxeF2L5VLKmQcj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sPfjzSuX4HpQvMSVuvg4YUgp7Rhqx9mEHuGHbkUnBAhYbGMJM4SDyYDzQfzgHACKWzxyKfMCfwA4QF1qzUmawPa",
  "key1": "5VJrc3aBqtuwCGSPRtJ4k8eTzuhzCYfYHv9WY5C6cRS2CrwkRmyYVV4nCyMuHGzNwnUP7MndL8UViNKkXRYZzvkZ",
  "key2": "2McPy7SmcP2Ur4T5VD9uQK7t33u5RYnqhNgoc2jM1pFJxk2YxwC5qyDPxfxZBYYiosEdGeJMwUzWsBi8WdvV9wne",
  "key3": "4mF3DBUpc9W6Mg8ss2MenXjSoNaENzPU7jCuoZtusHkyRz4UkCqVvrrDucge5LckTWWCinaje3SFdjz52cgJvQDg",
  "key4": "3D7ehZXZJG2W3Hw1snk6jqK3yzLgRh8wvFKyJ8xHuzS6dhtJPDYWWjH4LqVrPzQBMWJUmYmGiKXfk8dMePpMYaYk",
  "key5": "VFWrThJifxdouUGadWCbacKPyGdCwaFpWqAfYQ9iCC6bRFiAng56k1UbUpNWFAute5aseXtR8ViZGSGTfWLnvS8",
  "key6": "5MmeUnvt7sfDeiJds2ebTb9AnoK9SLXEeNdK1wgGaf6WBB1BUTQWoMUHT2hts29zM3amTqEwCT63Ee6FAGdQuicP",
  "key7": "2Wi9Wr66PWcBYMp3rVGoyW3yfUV7myiiJxRpEoEUXdPiDja1NEsDAZBq4ifhceCEZdJ4GbjDW647ruJnLrYNWbtf",
  "key8": "3Fya3PTsXw43fu2daYU59URf2xPWC6a1fcXPhvZYHLqBJbBRqQSg5pWJFUSr4KXC8zmK4CB1xocT91HQJfFJPJWz",
  "key9": "5hYfHGyNyjtZu9N2nvWxL9B7dBXHcfczBzM7pGGtyrZvisbGdWdWiby7hYqVdj5uHGttnA5cAtnHbrqKjB38TFUh",
  "key10": "DkMtNcmYsaP2B8sie1h1dRPA5KeeHNd26kfEkykKXRjuFWAJptMRQtY5B9mZSykss7LPmd3PKPk58eZkVTdJ5o9",
  "key11": "3no9cnGUKqDafs6dBQQ3WnvgKtrpJziZF6KgUs98e4nHeyGBzWnZ3Q7CUWyJeHWonWGbCdrRtbdub4paSfawz1y1",
  "key12": "5hugnKPv1zhKMvqYyoV2jumskTq7xccoNTsMp6aTJgg8DfP3qN7Sh21KWxGEekpbS5eqimPUZ8LwfzB5NJvV3vXn",
  "key13": "WrjwBQPk47EiHg921HBVxVsg9kKXaos5tSCKuu4nqUSeavnhpQpbfHUmtjweRcBprqaBWSq7hqUm486NDLMMGWM",
  "key14": "44KEL7eEVdyizJphC6rHkqoBqVESEhuqFW6PH6ksesbtTbENwAUVWfYg5D9fyVssRZCMnhXTdcLF6pDNMYiKMTY3",
  "key15": "5iuTC9DEjzTifZHzr3JQ8To6jo3uLBAheu1TC29RZXtYAJamBS522F5HnkdmeAdd1CUTi8e4UuLNB9rgb8WYbC9j",
  "key16": "39Xvf4BgwUGycMfkPs5z4t9yNk7UtkbHoKmoN1wDEih25ofQMUTHJKQpD5xvJMopZB4URuB9SiZ2auS7f34H3XB4",
  "key17": "3tGdDKfbb5HVMfEgxp1WAd2TcmtxTZB6pcrWjWvnFr3keXHzgnEhnJ816c9xN7pMfo9ybjdANMjX3TcNcFD2xPoj",
  "key18": "4yHKXpEY3dxAH3chN54U99xb4cCYF1VFEr6i29EjXJ5NpdLKbtKz5YUBWbgqbj9Q5HykvCmkuumZxPWHK2TQy4bE",
  "key19": "2s4gAbk36nwBeXrRcf2mjvYSQXXjLoVdqPdPdyzw6jx3SqXG8hiSrbTwGdCDsUNDEy5fGQ67zHzY5msTgZdMquGn",
  "key20": "67RqgcDmprFbamqCNYgF8opDHnWQ9LojHkxatLPgNziqSKrThJauEQNAMKDG5ZVBwJvL1JBVWdZg9DzJdm8tGeeY",
  "key21": "3qKEtuFPdj4Yx71Dbrxuz73Nif6Fs5tjDmapEH61pkrdLhSrfMTnTNkvuUqDgNzdg5TyR81CQa4asT1KA5poBQv",
  "key22": "4YWuhkqhgfXnd8nUxy7SUUHevz7CRL7D64xjD7LMNFs1Zi6uozrPdy9Y3PnucCXJyMK5tDMsLyDu21Xoz8kHGoez",
  "key23": "2jii3RHxsqAn37gg7gFEYph4SuahyJNW4PSSDre8g2ZBReQ19rZzXGwWNXxWcRyvLw6kgmASgw7vdsx2714kPBLf",
  "key24": "5fryeKDR5ANL2f6eZC2EpFft1EMBr8BifFvrV37J5Y86Cr83Rd7up7HMjm7h3s9gR5p7AuBr97xGyvJAjS55UD9o",
  "key25": "2jrXDTtFM2M11BLdyimbkSC4jMkG8TmJgBuar7UAroatZ9dRTCSbkn8rZRnPD9SPh9fwQU81YUuBWdVvVw5rLEq4",
  "key26": "3KxD5QRcFcgT8BPd6Ex3fTB4gZuxHnMJm5NEHdSGZoyAStqUApVaWcEdKZHeai2R3c9koF2uCtaURt9v86WgjwKS",
  "key27": "3AyNeU5WiCkcmU5FGBHH8W4iG72szqdX6DjFkBjfbExDGHHrpLwLsaKHv99W9b9XxXmX55qVVicgPQUp2xP55a5E",
  "key28": "61GYeSHimdC3v2M5iV61KUMLK1aMkQk4bNMXUQAbB3awqMuWRtmyWgGhGsKpsaqvk5fhoX7xZs4CTWvCiUXx87Qm",
  "key29": "bDtfUPScNc9vbqCqXD7stW1AHRJQZbiJfzEo2xBLqn5ypkt8ExNti2PpWsbTs8wJLUEaYFpPv7AyxzRFPzCWb4L",
  "key30": "4fHrqtpdKLoh4ZENk1dnkKLaEBr1XAFCNLsJMvktmuioWWx8FJ6TYaFmpJk3W1dzb2eaqgUB7RyiMaBdyjGoe7eY",
  "key31": "3eX7fQdJGQadKEVBhKP1tW2LwdTfBzxDXGv1Kmkwjv8d6dCYnmu94RDCQ5ibWJ6uxiZa9i1MzHDVkupdMLqv7aAb",
  "key32": "5cRKb8AB4e5v1dFaWSiKRchWdchYgmaVs6wPNqxHDqQaveZ5mcUqLnAZ9qzoDQgPV1v8Cns2EDFAWzopgyHRooHB",
  "key33": "5Ji1Z31fDbAK2KveqRDopqrjd8paDSv9snCw9SV5jib1NYp26qstYjHyMnWazfHRxxevfcR2kpRS2c8vmoByVMMZ",
  "key34": "48bfyybjVeygCyiDvEgBw4cgRde6dzUQu2bCDFZAgvdm5xX5uYudKVLu1qSqu9pogUVzMgQo8ERKvZJhWTXqneWZ",
  "key35": "3MaokWfDb9DCJ4fvdgfQz8UnHV43WvWa66Q46sW4kYkQoeE2ASM26HXYhXxvdNK8ANUGd799cBY3yKBMhqNimTwZ",
  "key36": "2qTbBMiVJJ2qLPcXv1qBYfnGndCA3D36yKPTwakVvbyGuJGnp2xMBSDTwE1mqqGWQpxQpxfYyBvrF5wxKnmhAM9e",
  "key37": "2gULz5HLys3yx58LPocPCop2T8F9NQWxY32vatgc1pYAjYNPRMUG66wrWeuYFaRUDec4pSgwQn9ZF8UhFPQmbRGe"
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
