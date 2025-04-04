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
    "uvWrv9XHYqVHr2S6UZdMs87jw3TjPA75Wu7boUQadoPgktZpr81z1RyZdNaZZF9JGkSCBYgmPNxe94ARzyRoxXp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48MCWXbJqEeZrXjgSfYyqau7i6MN36xybW5FyrFyv3cwCnDNRbceUxKuqh9A3sYeUxzu2c5M98MpjsYgkAURnvXD",
  "key1": "4NJnmFjy35UhP12nTMWBxy8QUMbBbX1jpooYbDJei5deLNjhw63Da32p1swdHHKtFJ1N3nofiSyKaY9LF6gTTocc",
  "key2": "5BFoAuFtpaKnGgzdqwa2PxhGsNRf3h1mQerHMqMgpSJwZpM22Z2RHmA3u9CnXGei6her1Fp4nmQP5uceXhfNXhs1",
  "key3": "BABpf8uLob6a1ADd91Vpb1ov5LgKLqu3wC9F2WQBHbvAjQdzq3NmZj8urddof6WacJtxNqmaGL7HCy25bJ6fam5",
  "key4": "CTe3twuYfcd6hoHZM4RxrGMNSgvLi91YTSJqawiswmgyAPBTFZfxVsbZEVmqgAHnBuSQ3jtbTWZj9vSLHKoMpCG",
  "key5": "56ME7W9TqSfo24UNfR4oHkicFn6SFTV3eJrFtw9eXfWaLgmpTEB7KyfdTUwL5Na6PFe8F2dAqv3HJqeA5Tcj3mgH",
  "key6": "4suxj1HB3Q6AMvQSGWRHdid1kncWxGqzhLnpbdrNdAgnGw5j2cLLFCqhkoVTAe4S5b7fmUtrkGicjpmH3TYHb6rX",
  "key7": "2jQcW41iqLwkRRFxDvVo2HEFQ7tLn5EvD6ChZAcVcLzvA4iSwPg8XmiGPD95f6rvSPnbdkFZLXdZjEoKGYefXTVN",
  "key8": "PuX4LVTVfQF4tnYPSaTyx8UuK8LuX3zpwVUVpZ9Q8gDQLG7D4Tj9tDxKo5dHx4u9zFTtV8Q3qckK673Q1qPwqUf",
  "key9": "41cuFkqNMWLDPA7KUnebvZsYaw9naRtMnCiamTBvxsE81vL9piSd9wp9sorcLdvU2HHgUPjyi9jYYeXs86s34x3w",
  "key10": "VPsx3JT1ZusBbojtHW5GcouyC3coXGi7u95MYrqpi2EvzyD555svRFezJuhR5MJsVHggMQYzhyZpwLvDi6oHHEx",
  "key11": "5gvgVogKynkKnyrwqbiQCWML5vuxAhBQdkEctqESKwweyGgYsBXRHmxHJ1YNZYVZPDBXUu89wj16Tcng1VdgNLjN",
  "key12": "CJsZu2wEJKgVcoS4hqMrGGvEid4vDy6fbu6s6oUi2Daer14mhgwpT1Defm4cD71mKoWG4wSgqcqjA4RZcQrc7tr",
  "key13": "41RntPx8sV2u7gE7DLGf3wKNySvwcJJFJH18ZSkLZ8qgmSmKRYKcULQGaLybhMu9NrLgvbBGYuKWkR958iRT8q7e",
  "key14": "5YXUCW4f8wwXcSnGzF4WwD3U3YnzTB87dTUtXTSwMz4Fp8pDVveCkcZDunjY5AznwwXTfKNadc1fF5X4RgGThhER",
  "key15": "8JzW6uTVV2u3UzKB25FqxAppXPxXELyiFpSFndWPd13dbPXXkc1UYCHtrTFrRstGfUuLp9djuUdHjiiTi9F4HXR",
  "key16": "FJP815ZsjguG7CPw7VuBrJn2mLnWHCu47ZBEJHSHrHQSbU8TvvRuCrbCDvDxZotJ5kuirtXpCWQEjkZR8sjVnSA",
  "key17": "21518TkeUjYUEyX363v9cD3ucyBvUyriEhi1ywkDD4YQzpnoVPRhk2uTV5NeksXi464VGQ7idVBQBch982zf9oSk",
  "key18": "2yQA1nxiLUrUZYrQGRwHF5wvB5iPc5rGSguuUYJaR39WReZbip5LeVtD2qu5f5tSN8phnohzuGKjvehannvBdXzD",
  "key19": "qpPWMoACb3KwaCYLaDL6iv9SjnByc7Nm1DUPtc7e3LoxQatPAQpHkDS91W2GxBWhWXZ8VTvsyyRX9zKw2Di2w6v",
  "key20": "3FfEkRUF8NSnGjm4LDDyzdBkaL6rzwxrFDi6mh4BobqtUXwMrzDDH9z7ctpjDpJCuS2eYHvB9zk888TXE7WP7WSm",
  "key21": "3aC9ALNFj6PzuU1L2h9QB88fuHrRwkyF8NREvEy6kPQ6WNogcRhfkY8WVaftJLfpstTDAhZLyfgjDXVbmEdhrCjA",
  "key22": "23FpPrFfHQ8LoNPNVaPJTHzKt3vhDukrP8kbWqUw5ocGwQ3qG2yTU2go9aJa1QgUTFnF8hmcnMFBjjYHg5QVdDhM",
  "key23": "43JRwMgcggQMzaH1sGcACMTnVPC1feVWJ8cbQpxJV8pDAKWrTqqu9QmGhiLh2pWDeamNnyNsG25zgG6BzmCRqMDs",
  "key24": "49E4bCQAKaTwh1SiTeVoKciono6n5MJCB8Gj8FGrhDjDYadMv6B2wDUhi5t1Y8ejNVuWHNM1nrggzG8DT5XnVDxt",
  "key25": "2a6HndXkJtN1dztxLYRmv1rE7oFKb3PGKmdc1NThzHpfP2XsgVrmu6a8v5hsRf7kXkoEVQf4bqxxe3nDBVrsp395",
  "key26": "5ZiZwWubH5XDDVM32RHGyJmBmtpSj22rA1sSb1DgwavvDQUBq5vfpAt4e8ZffPkRHqzjUorgtw1AEjPrcYoW5CoT",
  "key27": "2ByUNRUVXr596EgjrQuiRojQ6sMP2LzoBYC8BQ6zhDpdfVtx9JQt2T6SfFJdFxXVdwJAUjHhaxgWKZBT5TnPEw65",
  "key28": "3Mp3fVJ6LkBk4MUQRHQat8yqgr2AeYpwoDcj5JmKauLwF9fYurGN2eygQfWWJ2MQL3Mgwugi8zk3oGV7ZvShxAY9",
  "key29": "wjrEGez5Dp4jNvs8fPrLAasyy3iKE6dB3XJGmubE3QzKRwWZPnGnZ8FozVJrdhzNa9dbPFwsKamn6QdoFaZBSzM",
  "key30": "4gMqkcc7MVESeir5qiwSYSaGqVH3GCMvPGgo9fG97x8MXLMwPjqjLECsbwZRs5FgQD4PfpS9XyzPiZJ4R72PB4Fw",
  "key31": "5kPCntqKd4YjopCYR93ondM4XQNMWtfE19vW3CEzHdBb1cr74rCsifibMeQe4G1utxHBtPQ5uz5Yi5dcds54QCR6",
  "key32": "2PERgD3pp4Q7qZSYWJqAhfoSNHZ8drg6BtbgUbvYG8XGXgopA5vEVfEaHq4S1YGcxZJ8fZJ45AEvybSvEui571Xe",
  "key33": "3nGm7okfmKrNzpFzAeYTsvMHzQVGjBUp3e96HkBBPnbtyPCZTQqNDtN4QhKzKy9ajkXiAv3daEifi3YobXFd3NJQ",
  "key34": "2CdmTg2qotmKAkh3bs3iB7PBvMg2dCtwwKQF8GUZvdebKitk8b2HWnLvNZ1TcxLtbscfpz8tjffpmRDro26UKQjH",
  "key35": "3peq2t3icgX4TuCgjSscTXWHkPETo5vF3ojRqQBU6zr328XxZmAHjJBjUxYX6j4v5fUXYNK27Syd4Rpj957FpLxy",
  "key36": "56FWYPZNmiuKtVgz9AJa5EuU8HXKSpTRRJYCLwRzAMdJ134NHfScqWcvCU3BGwyxW3qCtg1iNEtqqyFvN92zFWLx",
  "key37": "2q62VZRYNzXoEj5H6AqkVNi89AxRqXfFNSQbCq5WsUSVjPgqAz8pqS75Rze19AL7krBcCjfFrxZDVVmjJ1aiC6Uo",
  "key38": "5V6GBQXn7Yr92wTMiS9uMEuiTa9behhJ1XHBj6eCoJ6NW5m7n26YjwErzPDWfjAdkTUnNtgbo6cP3BffsHn9EHy3",
  "key39": "bjf7BDvbDUoevN1iNVMb34U3gPMPtGeLLwaJonogHTTDVMmA6vNSiDPSTzitDVFnRF52Lc5PnTVeLwMKqVqMVet",
  "key40": "3BMec8jr6UFkaE6YpxgW1fxzVdAsQ5DNCjHY3H9oWUr7LfVGZNzyCJGzBLyJHgNrcvYPQYhwGZjwcFyKq3Y3GQGx",
  "key41": "3FWnwjXymx1Suz3gyj3kt3qKtnUfRKKK4R9zPbkqF94WRqavet8dgzTrGj5RNVQ8gkv2x53cS2QGCgsWxSDddyYC",
  "key42": "25eGkK9VtRyobaWeKs6TnH1LV2vdt8gALf2MbdJSFkfjMRsGNZ6vEFjrFDrLgcqYJuP35zWfmJkzpHg3nKS5eQqY",
  "key43": "4d3ATB2Rd1jSTwVoEXcjmi9aA62HufWi24F84RJ4c11t9oYEraJCUVFZWr8ywQLp2AjHyE8guZaqv2VeC8rQ4vpx",
  "key44": "4K5apN2CwkwkxnmpcjCs3ct963iyK68pm68RBZdJUZ8fxrajSW7yD8dFyyZX5TL2gnn6ne2Qb9K9VM49inNA1ia3",
  "key45": "2qJsHHru234GGkyZQoARrKubRu3387u4M7uSzxSUMESMeegeohNqHrDu4hwkUMDQEWj2adRv1AopettJFHZRBrMw",
  "key46": "eiFDg8jcsDGbZgGZsZjZPEZBvVDh2af4KnbAsVBya3UPEuq8y6gWNqYpeQrJtJhRHoKzDCGiXH9MozGWWi4JRVX",
  "key47": "5uAwNnFJqXCrPzHHqRVPA9Po56uTWgwZsrHbB5dQhcWXf3iEFmq9Vs5HWv1mvwdNNCHgnr3o9FRwkMFXNgcXCs4Z",
  "key48": "2ibXVywuBCaUPqXnLWHQ2iKmaZQFtRHymbTWV8VYXK1CiaUCFGnnMFWqSYREYbCcPmQqrxyuGZ13vNPPVzJvfcAm",
  "key49": "67jZRztpxtBRnAS6B97X1ZMZNGpU42RKJBZkUgBGmB4kJqg2PSbf4BEhFC2ySb3pSxz9eH6NvKAHg3vM3NrwvwLe"
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
