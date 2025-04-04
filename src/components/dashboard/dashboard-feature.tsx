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
    "eBecLw1JrQQikDWtnah91dh5jGcKjxhMGUg7ya3EneoDuBr5Vs7vrcG9XyfsEE3GBfA9MWzCHdsuns3NwADhVRF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xFS7s7kA4eCsb4C9zJwZvV5K9F6xpZCZtgNx8YRp3ZEd18j2kQsnRS3k3pAH7n161MpzRQP5prwsA1UntUMDdM8",
  "key1": "2CTcnSbAt3VwJoDwFzcKY5ArZkkXY2mJ4PAoQ5kcPEVbktCREycfBJPYpozP3mdg1ppJhaGfmFHprWtbdm3kmfB1",
  "key2": "3p3tM3yU1yj1c8cZnKpAameFJ2ESaTVf5iqxtUuS91qLSELSp27fd9TtRgVkxWYVTXusET3uU76PL2AE2sYpJM8c",
  "key3": "66xHLJPYNeH4k5RfUGpSXymz77rQV3nMB18yUMFzLQLUTMyK2g1wFev2PTUwsMh1mufvE47uXkiezzMdFRnxxr8m",
  "key4": "L2SRCuAqRe7yWkarJPzzDPZZAQz3Ypt66NPCcyEdYmP2YicdeiZuBFVRUiKr578LDCX8S5avi9rU8EhWTG4nhA7",
  "key5": "4U1wAD3J73NukFpd8qH9zru1LuZUeqiRfZTwZWC1mdX1Fvg2DsQKfn5vh6mwcAVvSnHoWt5UJjDzcnLkB13sZtSQ",
  "key6": "4YsMJYQ9S95Lcz5decg8RUgKjZwoQut33CASpzrLPdby2xk28WLxvWKnBYGLyJ7BnwyTtPTx2siSSXDhd4V2PcCD",
  "key7": "3AnH9YjRXyGUfBsmwakNxqnaJhZzoaNnoJcN7E8akziVaDVB7mY4vx32D7hHoEZUTVhExtKnj2BHfHrvxzsAiPht",
  "key8": "5TMM2R74eLgBTg61Z9XBn74vgnefHLsj5xn5yFFbsPcamQCsxRfhcfXB6zuDhpEiCNBnQ5Jq55r9q1cH626WNEXr",
  "key9": "56vyKfVXDZeAFXSbXSYJcriM997x8khfNyG1ccDVycKLSZasT2A2FR1mquLaoatZeLtfDCQZCEinFdwrx6rLjP5Z",
  "key10": "5pCAbv7HacUpsoz4k9EMhSfxzgxSdgqk6CMV6rhkp21iAYKdF24uuNFR8eprqdv2ysSx2cjcNNg9StLGxTrsx7m8",
  "key11": "gNFiejhijQq4Hmq3RMw7EWpJ6L5D7ASp7uGpUdCDRsy7zsuWCMipjr6g2a8acLjHdUhcUArYbxbuBksPLDeQ3QN",
  "key12": "2ixH4qufRZQuZowaDJnwLPTyqfYoyDciw4wCrrLGgtvf6Dpxkc6LMu5rjehTrK85TWsfUBrisFjs9iuEGBMEhXXw",
  "key13": "XMGHomzy1du8eXcSiFR98XEVf6goAXA4EJgXRLmC2bNm98kKABwQSEGN147AYuKT512dBLabmz1SqFKZ23RCHAp",
  "key14": "2TRXK9yEfAVFDHYA9StiejQtfy96vzp7nJxCtRCiGuTdfTBuygNAXxi3CYDtQ2Zc6uUoZMqAeaWRpKadqnUUvDK",
  "key15": "4D4z1RjfzbM9QBLMNLaQy5rG6yK6BaSB8fc7a6rYmogvvVa5B9FPcdAufBEyPvnnst5GsZhU7BoXVkcTNcBAYqxT",
  "key16": "2wqTycDQQxR666C2c8DEz84hU9BJJasG8LJixVwXDX5x5gNaTjHzux9DaDZqVwtYvdpB4vcmZiQrKykYTewnrj1C",
  "key17": "2PpMLhfs7ECGjtVZT2TAVFo95utnowYMnTb4dnE2xiBBmabdnQggKCg8e9HxuXxjgnAStGg77M3zgh4djqfGtLRX",
  "key18": "Q73pm4NTWKLNfEb9RXAvGFeaGTTkoLpdiVEdZsyCuBsVFtkZmZ6yj9yCt4BkL3sNftDNsHRmkiHqXDgqAfpomjm",
  "key19": "5s3hnBEBJrFvwsq7E7D2c5gEgqnGPrghYfEWRLfPGUKeBY4uuF4UB8NMFPLS5mw5VkdQCPLi93BEnABVo3WFT9zM",
  "key20": "3M2eRmjL6NorPn8jfZsBYGo4v3aQtBBAhr2od4TuDKjhTTxY8AdSPt5zYED95tiUEW6X8v3YrPUe9PjB852dhZeL",
  "key21": "5bQA3o6EZbmALPMnZbJpPDnm9tFZPD1wvaAbswxHWcnacpx7hoursPizygtfFpYR4PrA4HhfBDBGNMKsczBM3ER4",
  "key22": "4uRoN6e6KCkcFZqcbensq5sqSu3gEtFuYzvN85FQVKm75FnHS9WC47HKEauzCzrJxTHKdS8jCWg6eXS22AMRE6hH",
  "key23": "4r7VLwRbdhz5WcKrVM5JgckhAwwCgnTwxe2EtLVKE5J1nZ52zywZL1S8uGG2ja5278ryZv1WmrLjPcwecA3h21s9",
  "key24": "vsovAcLpXMYwPbdCndcaysp8aNmPiLRDV9grWzdAK2jm3w7JjDAitpx4Cajncx4wRZk4NAe1yJ1TekBpAcesVkN",
  "key25": "4RHx5wwmPqXR6Y3rVd27QfC7wrNKtkMzLGB1khZ8ixxWGPvA9m9YpMK39tvy39yJjfG92uzhgudoa5gBY4MzN5Bm",
  "key26": "2QkWt47xZyVhkeAzWZJZq6EkSYCHse9CvLsMvaBS3KMHqySsRGFxkw188yRE89kQFbEMfgEFqx7jWXpZf8tQbuBp",
  "key27": "2vz8tpj4VR3XCSDbkZX6Qc9EzeHSwTJpkt7cqTGMF7EGnnam6SjYqTrHUGqWRNFyCaWC1t2adjifd92uFRceh9aZ",
  "key28": "5dBSm8wV5Jiya2LWatfFQFLysWwDM38K7u8SqYoUHwWYogMZYh3hxcUgzF6egV8m7toKjTqkLQGJCUJ5JKeBzhah",
  "key29": "4ueYSayjAGCNrfZKvojDYgdjTAPNHTNXfG2SbHue2ZwbRpUSRhW92c3migfpd9EzqpgHEsvPVQZ7Bht35TiGGpU",
  "key30": "28iAAt1X3ZxUAeyNUAT8E4tFn29ApqxNMiHETfja8pb5S8nTJjcPuiGFQ2zryBcZLyaU4oUXa1C7q2meM3FBh6Kn",
  "key31": "2uLxB1qTTTCJkkmWSAQpcup7qkAZG7tyDE2yiTRynrY4BbzydT12yVpfu2PEpax6uD7J4vRV1eDxKCUfBGWiKndf",
  "key32": "2QvPAjGAwuLTz3fjgQ4Ga4EybRfCuTaboMC849o6833QL1FMkxmzZW9cHJMzvA7LHTTPxSNQECdE8PHKLcmSnd1e",
  "key33": "435CGukFvkoiF4qLKecM19pjEaZgz7Zf5VVo6ATYg6bq1HmdkZeu1tfg3iL9ZKPn8uZb4J5BSG3KUEztLhjJVRbw",
  "key34": "34sLTkhD3BfqmD1K29dXFvbWAWLb2CoK9hoGzwAMm1VTH5NdM68vzvWM68YnFCzxhZHFyKBU1dKS2P9PPftPeCjy",
  "key35": "2wFhqPGKDi3Afs8c2vErxkTUkGxSLqZ5RFyEoZfNCsvCh5mcCtNkyxAbHT78rSXu25bQZU1NwqbfCBfCfUsbrmne",
  "key36": "29FfB4p5hZRN19sisFNMLLztTmLSAYZCExoxSq6cucGTc8RF9CB8dBX83DfZj2JobTKGxuE81q4UCPS6mAXkM2e7",
  "key37": "5c59fcBTNWFriKKiNTcVqsUMg3VbcHPLQDbidix5T8Nh1XELteXuLbrHXhUczDRC73Cd6RuYuA7HU5suxLkATnpJ",
  "key38": "2TZCDNYVoyrkVHuVA7Z7sQSpHhhpKsK7bmW4eGRTAUYDMT6akeL7HzjMKERKegaBptDw5U1PXL6cqpU5vFRqUjF5",
  "key39": "3Q9kmcsz8BamzS5smVKyLR6fmeKMb7X4zuyYsrp5ngDyhCFaQk9gqF8NiU3oMoexg74tZysqTQtACXHoevryq9KQ",
  "key40": "5hfBfAjt17kT5yB1MMyegV2XCacrqxrYR9UgZYY554juJ6DuXivepnGH1yzTeevoDSmRswEgzKqGfkqfwFmjbpRv",
  "key41": "5QcvWqFovNn44Farp2oXfFJmuj1D8xPCG9Up7iBvaJsmmG1LiWs9S2g2T4uArosis9NdDojqgPEWtcu3NZgK6tab",
  "key42": "26rH438TBUbtdhnXWKwGjh4v4JLiAquXvKxZcN4oWtWsJoeNif8HisvQAudRXUvfsfmx3quBHxDXxFJiDeLSuKhT",
  "key43": "3JD3Sa2ee6b6VCYiU3MoMpgK7oSpzqZmQjohZhYcSVH4LHexWBXa4VvDotkYSTzw2wUtyJi4GwwLFyEtQutb6iKa",
  "key44": "5Cams8rL7Hr6FGNtDCJ3qHxqzr9DT3WPGhgWxMskxVMBSqksTfk9jU4LvwEmbDiwDa83H1AiQRPLff9BW1pfG637",
  "key45": "2ut29QdfRGDXeKno7G1AsFQ4dkkvMg9iGTdFCKH4USZKGyNwpRdnRPJuTEb4aAFdYCaeqy4poGRy6gAqTA8Lmkt"
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
