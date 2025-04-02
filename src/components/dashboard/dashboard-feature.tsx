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
    "LEjLAaytHwy5NpRqpZdj7vqffZcZdJSvaxm4HEh3xiTxBqwUKH18jBDedFrmcsw36tF8rVayGnt8hrSBWboAXut"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZxXW6TbttGvuAvkLmwVHVqQdayS5cFco88gURZVHvmhsQPua2XDBUv5q2DLiKaWxx3rfmaQczr2TvbadYSFNHTZ",
  "key1": "63XjasBB6DCAawtgoijqh8y5SN1nM5QoPcjwh7g67erdV1uVJ35uxQig1cr4n8b7ogE2cdp7eBirNyGVWb7bv5zj",
  "key2": "5d2i91k6eS5UgmMR4Jvgds9mLUzxZFQTWafUCoZzZhamKfwmvXF11VcynZgnRnXHS6JBa1tyjJGF1LhTcXDBwMNy",
  "key3": "3FUJdAbrXGExu5B9z9Pq8ZLNRCVZYP6vVEe9imC7g9NogdG1KGGvSrobomaww9PcuavfwnsEBwFAW5kuimHCX6Tx",
  "key4": "5GqnGPD2eWbhmeKbNQq59hkQQd3iXNeaa4qukVW42T1wgkwRwoAmiWEDZvTSEnUubm4t4y7C88Y8WUWNj4uab1tC",
  "key5": "4mdxREcX5HoSoYMJ38wrkrVtESZPrJRW2atWoCpYtyC6z1E8GtAD5VxfswFeqYAYAoy2hnChoSpJ5x76JW3bF7vF",
  "key6": "65vKkYb7vHWSAD7TamELQYZGg4QZSbEswM6aE6w4CUw9E8Ct1HVDwhfhknWhgq6wvNQkiGG7UmhUiUzRBtJMWkv3",
  "key7": "5oyQsKBUUzgywzWsPLK7Dcx3Uzi1Tkggh2BeB8yF56EseYacZWVY9VvyJVbgwVQhr9sPXJNbFYwPEuT9zC6VNgvh",
  "key8": "2Nmg4ezuQvxMM8uwgBNyJd7uFXDKxGvUjCuMyZd1td1ntPPRzwEoMmSjPTgJQ7aope2ntn3cybRmbsaRic4CXCrr",
  "key9": "461deKzMcT2cs1DH7oXfrLTXX9v2HJmk6JQvcHLNGcKZuNDqt5gHuABiLtqDv9rKhGiDk36u2zanYp4yrSNHnZAQ",
  "key10": "Gn1XBRQ8HvMA6CMNV7BANsopeWCF2P2TFEPJtk4WX1QsExEVMNnLQqgZqZ1n2hoogTa4fAb8NRs6AT6Wd3ge2dn",
  "key11": "A718Q7LDzrHuGvJU79MLevWrnhmyLhWyyciUoKmTsn9Fg4ynpp4bAJ1F4fTctbxfxz7dNv6Hc8wFHrDJGmPFAmB",
  "key12": "5mnBY2ZxqtDTouywnjXLkF1x3u98jMrnPEnuHfGvFVouHMF1e1QH376cKgWY2sCXQU2JdxxAdfkS9u9qLqHcMPLK",
  "key13": "3DwfwgHY8sjwYMaD5Fv4RodAToWVRig2MEjeKDrMGdUn4FzkBbtzFSXygmWhdE4qaiCouocE5wCZ6ywjQ9vp9pLn",
  "key14": "5G5GoVqzc2VssYYozirsWZoFxfHCbCF8Ud6nCfucgu4tUfZyncEyEvbyJdirzkejYJXuP4jqUjW2jW1pA3paFmRY",
  "key15": "62kVa3D9rd7S2EFZygcofpsS5PS27tAHwgS32vmye5QKSRcQ47WHaXx8dcPnEDYgrBtx7KgzsjrWoUK2H3ESDnFu",
  "key16": "5wGTiMBjp48ogYBAce32zpepq8ZM61gTGar5hLGSfNcwhjYdq32T5as8T9pzxcSZuU4VgA8GDy9v6RkZrdort9g9",
  "key17": "4bqai47xsiwVPhTUsL9VsWvcbZk2BPzZPcyJPsDCD6tozp8FuLm1tBapVBq3npqGHdfjfEGBDoBoMuHMHKY2WyhQ",
  "key18": "5mHiUSF9A7x51W6vyKmeznAcY7LUuQqSxT1eK9XNdE6QtpLNt2UY9687MSqYgBmcHrbYx833t2Hc2DvFJ1dmNt47",
  "key19": "5yNo7uhj6c8hRjtQRMxdCM4BdLJP75CUmHweNmmyjuo3CmgNxqrpZD2XceTrGVxQk9AqDjXo4sLuHhAYHKBxRocD",
  "key20": "2MrW16qfSf22tDLXhmHqWY2TKhvDSCWFwgP73gJoZPdEa4G6bzwQoFYH6RGouDWJiXDSBY6Hvwm6Qy5WEmsRRVYt",
  "key21": "3owH9zhBjSMWoU5AkqWheGhipPf2jJ3Bn6nS8K7qcfdnFzGko6tpxnhEfHiPovk8Cf6MzvR15t8iRasdYiaPB6th",
  "key22": "3KAFqEjFpUuZn3QiBDTpfsk9ABd5WSywTJ7m4vZEQjyrzbMfKRc8SmiHws3w9LRoSK1qMQ5KrPPgKRon7pg6bzHW",
  "key23": "64YBLuanzpTmtEKHP89yzyP75PMCVEP9jwB2M4HkwUgp48BCpXcyy3CzHuM1GhDQV1hy2MUhFWs85jh8rLgJ5Bqc",
  "key24": "2c1WKT9WdPtFSnquoRZXPoUdHHsWp59dxiGtWGCHsZnptN2Kd9L8RuWzUFtXsWtWXMTLTffvtUMxAkwnuxrD8pJD",
  "key25": "671DofToAHXDaR1D6YykyQvAWsdrmvdATQfw7RaC31HCuLEQJ151da2gpLZt8ydXVmNgiiSSFj9bXoCZDUPLxCEt",
  "key26": "4hUmMBbZPLag2DJjRmZLRkQYDGTD3cSEX2k94xGsy8Q8HMTMMWvnh3L5U6rbX7t5bCNW42G29QY4G3arWKTHSBc4",
  "key27": "3dMhtH4HWnuYKfAr736142Kj5F5c5UWqfee7mY2iuVPJ7CsiFcz2hWA5t38JmbwsYYbA4wbbQwdDSQvr8XryYsy3",
  "key28": "4m9gVhX5SFtoZRW4u45LgJ15kvw37KNVkowuknWfB9ZZJUG5qCJ2L295NcMh2RvKHiiGriWTVFr4kLeZbTPZbbDC",
  "key29": "4YMcxzHMpwyTfuCFXXw9qnxLnMpyLmjXVQnFGnt2434EC6X9kTWFSW3Xn4eputLtFEBXryBPARuVmX2jQbzFfeHa",
  "key30": "2YQgioTubEd6iZTZadTgGf4ZU8r7i4m7nsp6Wu9oZPodNcinrzbRriRpBnQ9dMSPERRq62mo237YwA9yhMG3yZjv",
  "key31": "3bqCgERuHkCu5tZJT9VtTZPcLJzphKA7JExL4oyHvprsHnU1YRdMhyQRtELcvcaMKfPtND1WgdLZ95AWhgMNpgPF",
  "key32": "3aaCPW7HXQ64NSPgXCkHiCUCfSXLc9NcQWfFUsHPjsUsG5NdfCF6WdBUgscqmSpi9ypFbUW9jgrrkStXCt18g8fd",
  "key33": "2UrDfKvQPuSjG7rAthBsR5j4d36HnpekuHRjQ19iR2Z7zB4QQ6p2SCKZG9EdVv9jxvhvQwGCkg6N3BqAzt7iARyV",
  "key34": "2ozmZh7GP3MYX2zhfWwrZ7L22MDNS43RQhtvb5ZLaGgnwKMCmRkptd9MEnMhEqMsWdAEgFjKXZ4hUjY4eThTbYmn",
  "key35": "4iF9xztZKk7aH4tDJPpTJLVDVDXiziLetshURNjpYuTCLoteHBEridwfw5aBKcbEMuzpcpyFpPZZ5gsBr4f9Z6Dc",
  "key36": "4ktjAeyCmjA8Sbumf3uPvFRDJQs3MGQFYyqXwxrmwPVCQ7Fabf6dcPCk6j1nNrJ78WUQ4Bx9mh2ZzUCCPwqSi6it",
  "key37": "3xhgwemfrFZHCKsLCxzyPguHiUSFXY7yuvLZ9W5ymCsdaUR1exvkzus9M3VDoxo8yWsYATqzDPJzMd4gJNFttGax",
  "key38": "2BpSSUffJVMTjL6GesmVuaB64e9hG2K6RgfKhWJfSNAANnKjjm7Vg2UZsaUTEAGMXfGzm7qhTmBVPMDMkqU1ArkL",
  "key39": "43k8FAAppu2B5VPgHkeWvgRxBqcrq6HCgibomxcDjDF8B8jkc2XbJHXozvjgKEbGuWh67Mms4dwCW74Ga4LniiaY",
  "key40": "2uMVi41dwhCnQDbvqfv4buqTUZ7XJprqBVhkQEAGVPY1XeYYCDGMXdmLrA7UhFBDSV5fHw9ivewGNZHozoJSgB2z"
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
