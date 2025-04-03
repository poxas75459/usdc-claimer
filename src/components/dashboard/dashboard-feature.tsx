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
    "52WFSzBrkkSbBjh8uf2PMUWHzdtsftkDfNNaEyWBtwptcQCeABpPHTXW2CpdDm8ydHiygxUWkeiEtbM4fhmYW7u1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AQVzC3UjYYx5Tex5564Q1dnd5wwnWcLyauhyQqFxWYNV6Vx4L3nZqRVRdcdA2RxrJCWUDThJ5S3ZquRkANDA6Wo",
  "key1": "34WcAptGu6eyVzu3G758KyjLR3hsXbFCrMMqmHwYRB1yrRqA9tLXq1BHYG9tJ5jKKqafiwWUFKdT4tuPSztVZS75",
  "key2": "5mHz1hQf3SukAQwgzryjyzhsC3xN8bfKjCk4QpujYhWpo5NBVMbkqxi9HfULj8BCsY4dBnACRVUZdXEAJuWGV5vA",
  "key3": "PDmrA1hQRpgQvTQoJumXmFr6PxGvwCEhXZvyXSfYxjuEtdb484vXJos9dLzvX6rb6cJqK1CD6vL9ozLySwVo8eR",
  "key4": "2iXRHFmapizrjuNN5N8Nyo7VP3v2cxMpvudPARSkXDE4TaqbWxmNMpXTEVSyGqXPRyzZMA9W7bFN32fTJ3NpHtYv",
  "key5": "4eZ6bD5Yam7AA8hTRx6pifUq5pUig8u3D5CQMprsP63HD24cR2Tyxn71bqYRL6Zowf2jQmK3Uw7DZjnBkEobKV44",
  "key6": "5qNqTdqYLMSsnVR5V68EZfjsvpovJ719UdJwbnVr64QwAHyMMg2cVP12ZvyfHYMcEqnhT5Gg7mYar7VHcBfQeGFj",
  "key7": "65b78hzRVHFyuFPVB6pM9RFZ5HYCRVS7cBVFN7XJjVXRG5s33KwVgwP6FQkp6fghwGzKZqUQ8RZzy8hTXTV8cWRw",
  "key8": "5mdGR2qTqyUqCCiRHH8bkiy5MHwKGQqD3uL6tVYrCCCd7y4avxjVjw6UQAs4awDL54fJ5bsGjg9nNhy2vmAd4aA5",
  "key9": "AVPtkgA3YbSNgMhU583EjFNzAxoxPDXZNMMMUArtYtao2LQEKQJ6kS6ogAMUxY65QyyS65zB6iuGWGYVnXEnT8e",
  "key10": "XYt7PvrJdSxh132fug8SGYKtzmFHTW7V6z9vYkC7MYensUzZujTQNFqoEef1axWuutE3TtgAMBmyWnW4zJpmCeo",
  "key11": "yR4T8UsaxJP8CvGcwZYRrWz5osuoLWptefrd15fhXyePh4e6orDibrp5swYzW6WVnDqdNythAvX3XBCKtGvf424",
  "key12": "5hfi1q9rzx22mwLksBjxXdvWSe9kT6mBrJ3nFmy2Ff778VxHaeLZuDNzA8a39nHRo7wm3yRfE1Q3eKEoRjxubH5s",
  "key13": "6UbwUsJwU9icMkZ4Gpqx8ZnLAuYo4qcfjLmogEFrQBeUwLskv46hRSWkJ63iPyKCU8x4ZXLDrcKVR1eBHoYdbnK",
  "key14": "2uU8iVJekyRGTxVmoBAN8txAcoPnyeYdomPxMP1rHpbUgYkGxu22zPHuoH4xNk2YXeTVXDxKmgQaE4a4VAwH1y9b",
  "key15": "3miWr9xax8QLKtmeYAHW4pPS5369ccDKA4BcH2dgjotVUAKMSPcH5SLi87FqyhUD2aPF55iz6i4R2CHmNUhcvomd",
  "key16": "4C2EEL2CPWVL1iV2ThBzK3trLEVMKEiLTzsjZi2HW8hHQjmDYfBQwBE9kgJZEaZsmkYA18hw5Pa8h9m34SgF5f1X",
  "key17": "67nQWLqpooZkwSUtEWMrfdeFjr2pFPiwJg3peh7xYf7fM1Uq6Cv61SXrnSF24WhXHmchYK9VHiFrsy6dYiqM565D",
  "key18": "25ZGszqVGxLpqXxt4YYWmLn2W4qfpjxkkQSiRYLFUbsxZmmJNUunt1BcpR9L71bU5FweA3Dzh9bG4XAdTPFAnL1i",
  "key19": "5F4wBco9wdQqfMqpyKd5Mm5bZboRmRmK8pNnUicdAVHg9jEgTZ4Y7yTwu2f1N1LnJFvHbHV2SNDFuvK55jrgrghn",
  "key20": "3RN6dF5aw39bRCVcTQ77jk79BXjbfy9hKitT9vpvtuH2dhfbuj9Uinkc78BWvfdMnPGiPUmZod4AB6L79sD4qUji",
  "key21": "5mw12nEYmehHB5ejCq481dTn3y1aqbsicv2VZEcQShXG593dfknVRoLeTnNMBWBJi3T4Lyah9Sg1gQzC9c5533vW",
  "key22": "2KC5P2bBTVMyjqxzvJzfzSAAUh2y8jHGSpjGt9951kUpne5tWWMncR4BtWvUiGYGkY4s3exorhjFDw9jbaxXgCvK",
  "key23": "59UBre9DgjqAVLNjYmjtXVGFnufWusp7QrJgnbJhkUDnPuvFa77a8fx5PC7SXtGGTrihFcSvjvJYoifhkHBBQMeH",
  "key24": "5TdyfWdAzaVe2cbHaQUH4q7g6Jb1gJjKHcf3zYNLf561p9Nn5HUJHizXpFaftgH4dtB8pDGzwLszuUpdjUUcsdwd",
  "key25": "3TaS7MLwnJxi7yGtM2BwGaGMrARbJZzYaEE6QvUmpHYf9R28UoVw6WPVD6knQK7GRaPMyYPuo9ThEtwuPY3wPGhF",
  "key26": "5DiJLTqPY9nzikc28MY3Wsa7mcs2qPRK6yJP5wk8GTizA8N59Ppj2hmAec96RXJFrZi3N6Yvw3UoYvz15mvBsZPv",
  "key27": "42URzkE9XRxmJEnQmZUEYEqYTmBPkL4QdtvAge9yBvzQxYyA6gxzxGaKZrGyD1vZnQUYsxkgn5GXArUs8VrdTH5X",
  "key28": "2AwmY9eBgF66QBBVtcGzG2t3BusDDPcpKyxR5mrHVo2YZqStAq8tpFdV4bjjRoVe7gJrUppuxHj9FAvWYNysQm5v",
  "key29": "2VCpjMjWqrJWZrXQBtMSETSDnboXGbTasUterusYQ1XDnqEt4xnLjGWT9bDwbqmLBsGtGNiLRfq2gSbtKoxXtiLv",
  "key30": "3tk7BCVqM7xsxrJNGxvLS4mv6MLmcCWi7X8YpjMfRKmzcKPEsKn57BAhLhA8EhxpurnpGckWMPsLq3JNnEZRSJdk",
  "key31": "3NHT6ZWLcTHHDgqPFjMPLZcQMBg7P3BUajrAZ3KMczTs8x6fb4SADwgKCLRSAPNcJWqDDvinCYqgw76Xzvqbh27r",
  "key32": "3QswJEQLicDBN9D19U7NuL2ehYZD3z4P1f9zKjomrkA2z3BQqQroxCjUQ12o2g2Pdv7HsKdYLvRDg6iF5suW3Jvz",
  "key33": "5wXB9a5QP8sFfbqqCPSZW1tG1mZPg8cWe9H2UEXmfcUSBj6qaTJR9tmANsvCyq1W2bvabbAQm7ci13PghWEd7cpt",
  "key34": "QvoACGqEkWXRu1RPufLPb7kmXqJW4E3inmqafT8vZNYLSqZ39mWTfWnFcoGX7a62tGKhyd4Utjqc4nTREKv1coj",
  "key35": "5VwudQnvtssXnLnTpmzQEjgRoWzeTLvYuvLmmd2kZyWd2CmLYLqeMEwZNREPYwTxFUWGQoXRbGCCdBT9vSjCh3hr",
  "key36": "5WsohqM5kMY56zSS8VPghd8H2FDwfytF7UDSPUd95i7BgAPHdWXgcVP9kSByUbbpC8hwLyb7cTTtsenLjjTosqNM",
  "key37": "foWkViQcFgvcoC19BEHtVT4QaWV41y5SQB5GyGBiLTVfzK4TyCXRoVRJLeRwCGQosY3BCsDUDEioijDk3vHwy2w",
  "key38": "5aaARjBNLG7j9iqg2VpnbPXrUhQYwwf59tWDAszCHjh7VDXByroGR3Z3r2gr2vi5tEdTeJ9jhg1ds5a4fLMG5Jwk",
  "key39": "5GpjLdLkG9GCMzx8rCnrtnxEC9UptNXr58CiZyAmiozYytMknrzR4siDtJXWgmyY6o8CwiPnsFhxUDmfLmQfFPFB",
  "key40": "4R2JBm6DhxJQebNbZcmW5KZiLY2XUghxchc6XtjwSBdkBrWpvfLqyS65XhLdnWB2RTP7zpn8PCz4gpahBxCqq47G",
  "key41": "4EMXEjGi8cjTz3ZGr8RQWXJ3h34KC7eUZ8H5dcUio6yQoVEZ2wryiztynBvyA4XqaFUBUdSvfN5avZpDaK4deVRR",
  "key42": "2xsnmvrjYsWgwJw4My5JnxZYMvf8QnNDJ4YcUjiKwnFe942idEXcfViwifidznLgcKAYWk4Qg8kFeEajVhLnAoL2",
  "key43": "3anG7N3ZPKEp1H3ZhNe9jALg1MjepBUiB5wt2bRKC3FXKHZF2CNVPWHd1DBrRwf2wDQEuuDVxXdKFsJUFBWLkxuP",
  "key44": "4efn5QCxcDXJjec44vp7vhhzww7v4N6dgKkRS2Xf4u5ZLqz67jdhaA2oTX2mTphdJX3uD4XRi4pMJUnYEt3AHmn6",
  "key45": "3MhaaZp5iSzHyB8SRkcmjhjukkTpJadv3vAWEtjtQpocgqTCiYWdPEcnZbQf1mxsGtkVQ7eUMPT8keLhXraUeBgd",
  "key46": "5Aa11eJyoZtAVT5NRWbqMAc3gxULk8u3N6tSTjsfvFjP9PhahKzF7Z1vaY4nVHW31bCyXeCQpPBEh32y3jxvPaPT"
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
