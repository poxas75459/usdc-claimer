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
    "3xnX2YJdW672HnHC5uvTEBS41JMi1RFfhgXzgTLwr4kFWin1T6dW76QKTXgZT2nrRahuFPoU23aW1Xywvz17imY8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F6NPtH2y1XqZYsDAHpjdVF741epyzEB6NscSpsFzMF45D72VUggCGcPcMh7MKFb2KK2Minaa6S83Y9613rTPQTa",
  "key1": "3kHyxMkf1CCZB3QmDF85uJnLPp98T1xJbQ6Sh7iLFUBZwqjG2DHwv4qjnGbTf3kioXpbf69uDP8dpbPyoPE8aFMr",
  "key2": "2PyZPQxb3J2Boq8VNyhRtxG2kQNo14ao1R4HuijJm8UPNPWKM1zX6MD2gMBojSZgSWareHRQU1UwDNF24Kp7FwUF",
  "key3": "4wQi7zdZ2DULruh2svnH9xqssnpMDM3xTPRPvM9eMKP9TUR7tNvTZfurNqkRhSMF72oW9v5T4dx1tQGWmzAzES9b",
  "key4": "2vGBJwsxZdL4Et3JKvxiPFPmUYH2HgmpGuVUVDfHCBaMYctQBLDY5yphxy43figfeewcuhB6soUg7FxcrVK8yr2o",
  "key5": "BTD3KxE7EXKTaC4YLwWhrZy2ipaFURUwaRoKvxAvFe76jVkTLYRaKSuQdqBbiAHroj7bjwT1Mba4jdXc1pSPE2Q",
  "key6": "n63jM63BLqiH1aLjw73piw9mztEnmHvovGrMqRRoUxA7gQ21fTnuC8jCQQT5itHDm6eba9DvUjqQeCRP1TiTSBn",
  "key7": "3FphckNzU8KZ7BYgYs5881KncNFocnBA6CEVZW6LwXMaBQRsJ4EZcoreDgUi8jWFTvyHTLedCeDcG3MoXhcbLyRg",
  "key8": "35hj2HgJq1S5jvK1CrPs8uiY9QAAZUzEagku2xjxq2E72a1y1EEUpzYnQ58jfxYtDjAenzNGJGJjEC9YAcm53cYE",
  "key9": "KerVHvBq9dWm6PwfP6P6epH3vQW4LoeZLKeYfzJcNhdfxyJSz5gWm5762FvTvng8pe7f4h2FFHzgEVDAeyAryuL",
  "key10": "2tTEvVf1diy1CvfqsZGVfEyUVYbC6Nd9aYMqYk5yY7EbAT3AnGLFKpKpQhHt6r4GNo9JCxAq625548gESp5HAtXR",
  "key11": "5xpMLZdqDzKMYZpa4XF6qmGQhZhGHUmrzbqvJjygVEqrtMa1z7ph4UW3Tc7RJmavs4Sn5mfz3yXTtHeHwjh7CEGP",
  "key12": "3RDpByjFYj3ETk7rEp2i8yWLQFez3Ya3U4tor7rTkPq5GxPYeQ25YdELwUyu4Dz3WkshuVyaSHQBLxMTzWyodwmB",
  "key13": "67Mmdpf4MiVDio4rpEzRTjrCZpNnBkiZpQk5wBtKvt2ZSF7CZ5Lgot3eEa4PkQmiiY6GEKaF4CzBMvGmcK7M2T3j",
  "key14": "wnjHgnVSJiaid87scZXUWsXoJu9diJQGNchEiQSSYwBZavcrVZ9Suwdya4chT6y9Ez3gfEVc3oMAuLMXU6NKx3Y",
  "key15": "5m8FCPaegJeGyq2NS2M3TtGXwmNDvg358n8i1wAWBiKMsfJTXiyeduhQ911DkWJDCNpSn9bh9ecJHnixTWDpp3KS",
  "key16": "62ard2PwX8oH79JDQ8fgBaZhuisX7UpCyKxpmQ5b5iVQnRihaNjMvpvHC7u1t5my3XreQdm4p3EQLWc42FzGRAkB",
  "key17": "ZVRf5Yb8dx9yLkPFhBxPTxxRyoVVZKQJkYh1Wueyh93WubHbVq7eTu1i6nh8LtmysPcaXv1H6tRnKCmJYEjPhJC",
  "key18": "44a5mB6hAL8PVNTMmGRYWKYCwLHjUk46rKjnk2BPcoS8od3ZNrP2Kvzr61uWyPN2z95Fkay3HsX6cqQqpNhELLpD",
  "key19": "4jUoXKn3AT3niLdwAV18fU9dC1FZXp8Su7Jny8ukH161tjYVCuAD2abcGEbFZXdXxzzu4aXq6km64QWpEazZpH8w",
  "key20": "2eL5yaCdtPHYkZSk3n61x5QjYd3ARXQmWihgu6fg1VNE5VM4cTDjtgpr6WjHuL8yCZhC7ejoYQBBtszigBDv4Tx4",
  "key21": "3D5csrUR2yKBDoBMi8exswkbS7caKAHFYPAfeCzao4727JVXYjfPZkktSKe1KogYSVuvTLaBckENtJB4k6HuN8e5",
  "key22": "4V2W4tuLwKRZJhqgd9tmhGY99dVMUc4Fcsrdn2rShMBc2smKpnuCpvLGgTmAqDheTX53jCrhXsMF6Esg2sxmiPU",
  "key23": "2TEXCi9Htsacfjip7EqsWxZYRQdDkxE1uNSHbYqgotrNyNEWnS4hqgR4ngxBXrZxmFUTZXHQcnbwdG3r6kYJUGNS",
  "key24": "5pdxgHGkfJMk6BzRUye27KVTHBfV2JxDV21UdSoe2d4mM4XP9E9KiFar9sevWokXZJaLyJVrrUKFezR1bgZJAQBv",
  "key25": "5Ka9disKg9aBMJw3PPUuVssAvD3EcrKVZzDE6KqXBtuKKQM54QCHnEdMZxUg4yFF7ZWZxdGMAZ984DeFbFTG3UWV",
  "key26": "3n6UV5qdA7vD8KxvoU3m9PYrUuCHkdLq5K5pQ59jj8tpJWWsobmuh4fZYVRkC6BqtYc3jhBKRakHdqBdYiAJmVSK",
  "key27": "2eTkG3MCjEosPHLddFLAnTwYjN1m5MnDDvCTJPWzQw8VSBfJhtsrXujiHnwZmnpWUBUpoH5jDTt42NjDj8Vg2FPV",
  "key28": "4hFJLRM4gyDLUeRKPEtUxAZBEQf71KaymTwAF6xL7b16snGYPDzWC8B5fDwBKtuVZEhF1sFy4GEqHNaRjraMEXV",
  "key29": "311atEFCP9DP718vee7bqnymTQm2HEc4pyCmg2d15KcnhGDZdSSrUCygGLTaCf8r5xVYQbf6acbxfr1pq3Jguk24",
  "key30": "6unenhLXDQbUJXdoQ2fVHXnAJ7Cnp3x36wrvF9q96oz5rqCtUYfuzZVZv5xZaPNRxAzdJWfC3Z6fSszatGauUTa",
  "key31": "5xJ2TcDihgEVBeyJS5BjigFdUDX4K88WWHYLGAjJcLodnaJhiFTPbXijFwrtLxVLJ6EcpHGbZs1FqdtcFqWWjAG",
  "key32": "vfrdoTcnFnA8iS5kHN5xfrx87CaWQybC8z8z5QvYFRXHPsa8KYzNgnXG26zTSzbwpp3vfdBsr5PpdBdzn3pUZHN",
  "key33": "3jBHAcmaPet23gFYLptj9zuTxMFkmZJ4n1oqEnMF9eAFFzASGyUQ73FJmFqvU9SsZ1srrRi4hwEhcHHwNu8aqHtx",
  "key34": "4yFTrRP72sH8d8TnA2grMj2gtq8Rjdz762nchNWnuW8xx5ZYAQAiAXz5ghHTRVkd11C6r1cKzdMDDPnHD2rZivPy",
  "key35": "5CnvzJsbCbGDXxf7sopRRU6dnPhkZ1nxBayQnPpNNHEaCWSJwBviGhnsowYkWvm1rGUuVH9h8cih9dARVjTK75hQ"
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
