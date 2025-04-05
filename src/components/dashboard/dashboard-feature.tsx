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
    "2GZDozsfB5KntNkzizto94Sj3JzArqNiyBb1iawLjeHLFg251HKUoqYwxwZvtDNUMQDEF5DnoaZDUB3XqHdQcb3t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Eshk5tZNMjjL5XzfxCseNk2vgjuNPtSziB1auSHUnq8K2TT1nfNzoF97QdvkpxcRHH4MmeyHZfgquWNjJZuXHEZ",
  "key1": "JqvGePJQWCSdRgPmLoAx25vZt8kGAyoVbjdemJSDUVm32DH6NFX2M4v7u9VFGYnV2Q9XnZqkM1ewx2SXjUAVu8M",
  "key2": "3LvVsQLH6HnsM1UgiZqh1tbzTBp8rH1oGPVK3nhQTYt9cM5FUL6gRpSdCLKdgY74XKzDMTzw1nfxVRMWbpdvw3Co",
  "key3": "5xUtAXRKefoah9bK4NvHp2JLNsAYefMQNarcGKK46oVNiYqdzGaC9yCVjTVeYCkD61UPoVFo5DfywQrj1FzAJCSu",
  "key4": "3hYd8JwP52m8xmq21sQwaZVg3WfrwS2A6dj8UxTP1pZyz2AfXhJTZxztQauVp2kz4n5QA7C3YZVaPinH5FBJX4cv",
  "key5": "5PxeY82VKoB1wCXD2L4UCny6ry73xoBKctjNensqcu8NxQkinFt8LxKvW4uzUhi8djsnL55zTZvqv7RVNEDACr3P",
  "key6": "3Sahbv5STz4YwiyV1Er9bnZHxygNTDTcLZJTKEDys5729CUtKycr9SwJFmRAKF8xTMkNEeYZ1Ar8Ejp5CadoL1Wv",
  "key7": "nygZWimZDpgTTbwVCscmAjLP5m3fZ4h2E6ZhLRRmLMJH3SHgdsJ3Sq3exKRFqKhDPhBo6xDiGb7vBqW2MZBRFn7",
  "key8": "5VK826HuNm36J6bMgY7KsmaS84kxxMZsdJETEbfnVgCku3bzeCu9HeRZTocPmKiX4EfinUf2ikqJWoB7g71NSZ3e",
  "key9": "5TjHvs1AP4f3pw2RWxYKHBYoUSeN27ehMGV9v9dukbniGnRxGwCZ8kAFwJ8q9sxDvn21wmuXZYJn9RwpgPGgYBMD",
  "key10": "3VDPBDNzEEZQEeTTZEM5imGrifQexgbCAnAogGvWVCSWb5duAZcrLngXvLddh1J6JMuFJHxnEiXrjHSjUaS1fC9a",
  "key11": "1xmH8ZgqmRSqPAgBwE3K65gqrZtPkgLXUZxHoAKdiyQyfBYNJSUzRPeaWrzv8pDyhZstHCVvvcEDjGWWe3hvCSB",
  "key12": "3SfXEuLFUp6j7Qe9oQJ4yBvBt4ex2MBrD1HSGKdykRRP64bZpdpF6z5NrARNjPgUatRpnGPxAtXwDW6qCQUDUVxt",
  "key13": "3WF8xwEWzeTqvNeZmxmH82eSkmWzWFYN45Upr7nJEQXbdUnz1wKRuoh1GgKW4GCnGw32AYR9tyuBdPGNQw6nrJxo",
  "key14": "4xKje6Fd2xQNurKf31RMXjqCknt7jSPSAJmncSAy7hTd1aTHRMnH9Sg8VqT5zZwMJs1TYgVwZGEx3qv8WousnDWB",
  "key15": "53ZYK5v6YHXNt8jJGQrARbvVB7tzi8EoTGzUqZEugUiqe1AFpzTnWtpCMoHiar8PE7kxwpRVsYxVpUtRSsRBr7G4",
  "key16": "4XDWhTFmPutjHFYLV6Ptd1Vdvfzvdkb5uLGgePEVZScnACeYcSwt7peowetc2FyigLvEKmCXvbwor6gKPEiZbZ4E",
  "key17": "4popDAtHxVq7PFTc55RFzEMKtDmR1vuHyKrBpSnLirccF4vjUAAoz4feadL8W5BqEn9jjEzbm1RfZy9WApeqJwdd",
  "key18": "4HmXHQWM5UoxqSXBPVVCgPsAY9oSuoXj3bPQfJBCfRcxnjQ63GdcJ7udfs9TRVvn67LjmBH8ZzfErXFmbcqj8ygQ",
  "key19": "SWSKBhEoVaNstCKHpTopAh3Fh2MqfqvH273MJDuABBr5dirTVfUujaDZxWFvvYAiKEgwG1coJL8Kct89UdADVAA",
  "key20": "JXCM4GQrHTBuRSrNExVVLdra3uyfo6K4KVXQJUvLQHtyK9xcDNd159PHFQmHRG1RmcYXKduMerfWm3fUxSmA4Ea",
  "key21": "4hasCfd2oroPpEdrR563T2XtUE9FGGPa2vZqJTpQgbF2TAjXhbDGE1NqKBxVABefPWybqoyPydeS92Y9DUwhXoLz",
  "key22": "MBuLT2EZzKvReEwqfxNn4bvCxoosE1EdnzRtc5EAKidSre4UJn7PiyHSaAxTAtpnzi9pmdqndC6Pd82kVdnrPqX",
  "key23": "5NAZZjsHf9qbELJ53yJtvoBCRyUUjrMGcogLRd1sph1k4iSToSAU98BLUGYx6T44LuqdLY4nqWn5gpYr4wB2mj1k",
  "key24": "5yG3tqqjZKY2tRBAN2Dxp1FHYhVZXebXXrCxhrKDnCaMzCXyGCuGuUfWgGvLMWeFLqGX4z3CxFGY1mBTXjXaUm6X",
  "key25": "22aZoymXE1cTaQahdLSChMmEr58VbaRTb9B2nDsLJ4pzsvdiSkc67YL1jG9dauDukbA7oTYas3DKjNQTksoPPrtE",
  "key26": "auoXck2QQUnRiHUNjhG3DCpdbRNDDeLo5u1vf4mjo5igUEM4iSqRPKkyfS4r27xdTpnfLtrS53ucqN2cWU2TSh9",
  "key27": "4V3ESDSMT8gV6bi5YFRCVWwzVYWYx3f14gpbSPTP7yZv4MhGBSqmfzAhkeMZDbNJRyZ82ZBVrbJkp5CT8xkjBj2v",
  "key28": "2Ny9qQmTtFYcXfa9TpPYgMi7xqRW7jcZJC4fFDLjrxv41satjjij3hVK3aqHujXytXKPQSXt2hEDxZTChEeoFbxc",
  "key29": "3fLS2KudAoFw35Rhqp37c4U9TRDy87SiiKMaDdi6Tu3pH28tngE4aLCe2bsVbRZsrg4otCEpewuKSTYrmz5VShcL",
  "key30": "3jAmu3BnwbZ8kEeptWy8JurbaYF1Yi16peTijqoMS11Spgea4eLtweqt6HwhrqjoFuqsbhJxLg2Et6z2Ny9TUZ4b",
  "key31": "2yHth6PUpDDHeRxTzXs1H1nGE7Re4uvwy6HnT7u3nFocKw7mbEA1ZaBMmrkEFXMorFqTKQeACvFDgfU2VK857ZTw",
  "key32": "2ZTXw8Uv5JfLgQushnY4tBpdj5pXJWwHPuHtPZSrooVrvoNWxZxqeyDy3gz16qJtJ9DUNrddVUF1jzK2TxGiM6kG",
  "key33": "2yS6AYcPaR7aRQGFXjY6Rs7zj8mhxE2hgqnBjPoLetdxQ3Uud4KEi3TaTq2hPV4UBnHpjw8Hksb6VYjTX1C9pFLs",
  "key34": "U1e6v24pGC6WnxtxgyN6vWxPSDgMdjazDddPNbtvNKTbJfhap7unGm6EnZzRSxYyY5L2J8bUatJ2SLYKDrSpJkW",
  "key35": "4gU3ErHBXcA8aQEdhYmwa3k1wecefVpVCjzkJwFfU9cpW8VLmvTh6wejWS5p3SiWKyizU2aqNnFgSLJSoJRN2ZqC",
  "key36": "5Tgw8G8qVjLiU8wCS9xipugDs7pnt78fCQXC95hhU6RQ4tqzhPwaeYCqxTAZUwvGJEfD1oXnYB7MtJTNLFqn9fn8",
  "key37": "knrQAs7woZcxxP9yZLmwem7dreoxrd5ahLdnFD2BxAa9Lc1kHjwdbmeFEG6UqcMuCe9NmvMVfingecxXwQavd5s",
  "key38": "3DRVtKo9Yv6j4wLt1Jik6tk29qTHtEX4WPgfKjjqqF9vM3aPjU1WZ83FNAczseNjnxvKv5ta6vmP43K2vF9PAXZr"
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
