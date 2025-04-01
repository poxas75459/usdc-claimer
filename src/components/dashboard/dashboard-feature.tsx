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
    "4Lby1PHAUoeJHPWYUf7jsVX4XucV9GijhagxjDZE6UdPPUNMu9YKN2r7VNevgRsGCeCfS1SCH6gBLiPew32Z1UG2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4awde1C5W3unEWRfyT17DyCwYk149RDyHAZ5tJZ2cjVErYMbWCaUNfjpxdpCrnvfxf3JLyvpyufHjMYXPZUAXajk",
  "key1": "N7n5ZwKbvpdB3Jt27XJQbPDjrrKg8QUV9865sd4VjZUsjwMbmm2UzcokRCHFiB4QSZYP7E4DVhH6vQboxAwriLt",
  "key2": "5d3izQK2Mrkeoc6az8vfSDLgEJmzF1s3SDbVrZ45TRcfNxR9dK2kGR9KzDcSjroexPTP4CYvmyRa5tAeUNc9Yz5A",
  "key3": "3rivwyUKMJapx85U8mRFok9coFjob3otsLyJr8f83N3WKMQCZgNzZEk4m6MxETyk85oXTTJMrK8wSi1wQokbXaCr",
  "key4": "2oPvAnTX311hmdSfVipPyvKs3uwh4adzC111Czfq8U9FNzkVSghgFQm8N6dfcwvSLcNwA2PJxMSdTvgaieZt1mza",
  "key5": "SgaCyAYpouUA29iCq2i39z3gYLsLYk3qcrWMHhVP2J9ST2sPJLv6HgBLB4oLzqjoYdp5bzCJfsNHoKa4TQUFJZh",
  "key6": "32EPmQqkmtiGsJnXb97DdqgiczRUcEzmhVXoe36n6zv8rbRBYZjfGxWdYoRTbHHscRyxqy6BNsx5CQDUAV4bMZqB",
  "key7": "ARLDAkvTJdjLdVUHMrGMmSXvKnXtubxdSYmPX76EbCx1kftWFccvMQipE3KfagZD2CKb3wdHJGyC7nbkZ1PVCPv",
  "key8": "5ND5nWPQdddwfMGUGrXUecsvnNZ4NviJkPz7BCNHjS2aeiJVR6knoBwHULGtaNTt23W4YhLsvi9Wzt2iE6RAuqiU",
  "key9": "5oYa6zsdrzcy6HWfvHYHi1QbEbM85M5ppDCsUkqUptu644QcbgmJzwbgqZZAtjBirxDHQCfBGSUAbHJSRYv9Y2T8",
  "key10": "3ciMYUM6qiqKjZZBoy5MkoZVGvD8ZuymatUoeSiiw4yKZ2PxojL1nwgC391rk2mdhzYPXSsqfzdhKdGqqy7DGsrQ",
  "key11": "5GoYnKbxisnMejEXKxzVPXYWeqJ9v1RCNh1NnWEx6oAfKsVEFraa2xz9SvLdUrQGf8WrqmBA2uwQ4AKMVhyyBySe",
  "key12": "45UgxXFBTxPYFkdDDUELsX6DFNVnAkx5AKnTG7974JqpG5mh8hWXfYrpbJAgTqZLYcbqQF9j8mzTvyUWJuWi5oTU",
  "key13": "2WJuFTYWUq5yZkjBuSJoJxmPawbyhHF7B2rEXbdshtPTaUK3qNztQcM78UjWNE8iS3HcNwh5ycYZvYHcnNNd7dGS",
  "key14": "5YpEF3LVbydEn3bniijaebv3YSjQzS3mdY7UnGtJ7uy9AU6P7xeGFKpqPSw5BPuUBNL98eRZC2DLcBeMi6E8MJdp",
  "key15": "3bLjt6viuwAFNQCPtJubzkX8jpzyDT4sBwUVnrUS97A3mJXyxwqNq2L37KcS3SRUQEZbiZUE61KW71hry8HsVjXh",
  "key16": "2nqHDhogMvUgsZ2ep65pHe5JwEcR2L41YA7PTTS6pG7yowV8wcvCLuAcGdo8z1TQvVoHuvdYH28ZJsWZwGfFcRmM",
  "key17": "5uBxakZDAb8neD2P8YUE2jWTscQJqLZQVCDKfqK2t3PB6BkRaHJ8vn7g54sb9CWXkYeAcZgTm29u9QTkbX8chpc3",
  "key18": "5BwwpuRXM3surfqfRwMJpzsC4EzFK4ZfiQ3Lhd97dLCaxQCSaGNxKbKySA8FUzqpAW7iAKMTy752U5jnGjsBrgKr",
  "key19": "3JYYTNLc1Wj2bfg89TATgM8bbb8uMj3b6zACgj9kCqswUdsaCNBGNbuL58hmhZ2DUo5HyL8fWivgSRFuhXc9aEsY",
  "key20": "3RitYfvYhMtpueabNiJtqAcsdVKvaCMhFv2dWpxPSQLATkwJg7jATsb2GGRB9CTBBV69KRtwiHNr7BF53Bk9GW7X",
  "key21": "2PZovcv1RhPn7tjpXhzRvugPhEEoCd3p3dFm5cXg7rFDWz6sMYzmcE1P3WkCwLD7S9WDn5Buru5SePuZiU4wN3pt",
  "key22": "5vLDKpCqqfc1kLxtZ5he7Jv1SkwcgLrq7EtwbyiS89NAqu1QrDFANXLEvcokWCgGkqyonCJbcBTExCTCvhqEA21M",
  "key23": "3nTVRWh5YnMjnu9mCvssVbQ1j5PAkHTUyNvKAov3Cr361T4pJ9SKXV1tczbNQuTGZjN2QmRaY88QYA6phGJA2nTX",
  "key24": "2eyz8w3ZXsLyGizZxPGRi8uEW5moiPPXzyeW9Km8KGZjmvrk9Lmynfty6GjTrQpgghP6VSzbE1KDYzH4p2YqWrfY",
  "key25": "2hm616MLzihmnMBKe54YQEXxZRYvL5sdyhtprd1kycWZgNCnLaToS3KZidgCEZ58HQ7SH5UmLwqLrZ3RKe8vdnus",
  "key26": "531NPScoXu4SwX2BtGjsPUE8ewKWpUFgLzQnK8KpYoR3E5tBdvjVDaVXbnRT38AEA4T7sYVypiFKqEQDpf4xjnMM",
  "key27": "2vRoUb24b9EriDuy87MwvsVTXyupimpqWgVYuiP2QRjad2yd1ePGpkzPVVHdBDqqKSXQPSZi9UTuCjibvYLPU3A1",
  "key28": "5XJLuHRSghfhFZVBkoWz1XQwS6zWwwv7JMiXjCjAfEPNQHWXkiUHFZaASBUgACh5aPG5YpnP7vEcTErrYScU4ovY",
  "key29": "evChhkxFE2dLBiQ8tnDoHBzJxfvHKxbC53RxoHEv3CHSLHuAf54RWqixJa5dHrBGGCYqYuu6yzwLrQz9Z3vkoSL",
  "key30": "5ZCjmLVWUZRbKS6KkAwZqWt3Pc9oLEQjVGrGWmNisCuDNo7UsxpUDd8X5qgMXJpJWr3NbmCohokfLc7aw97NBYGC",
  "key31": "USTkFjQFKGHkKdZoxpfkjkHc1RAx2UAHkiC1hcr2bP7vcNY3tUSMbLxiUttBH5ymGRbBAHLLxc3XPyNVmVApvH5",
  "key32": "2iDN6EXg2E7kZhgRyGAtTZN7awK8fjASbmPvyqPC2as545pq4YtxYsaNGEUjjfrqyVv86X1dQLoN1VznEpRu3Tqv",
  "key33": "42ED1MktYzEKj4QQ2KJfaM8p9dvQLSPNmNwEuU6LPVsuH4jjdunPRJV6c7aqmiuTfXmyfHRobP9XKY1ewwgr1z2A",
  "key34": "3xQQuPrT56LaUMWAyAnZNgcZJeJq91nvvZNMNgAw4viJww8jnZn5BcpQ4Ja5uK8ggFiAJinr69yki4uoPANuBfDg"
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
