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
    "59rHEViCLGmiNeKdMapy4sYQCExNn6cEKMrJp2BzK36CgTtenSBYG9LvpatJ48eJPMY9US9GJacRpmVKejYdJdjC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YKjegVj2S6BC5GWX17FjLwCtYkpfZP3pXfaZPFw9nVSHaArcxEmGjaymcUdDqtf5UzCEuJZ2LMK5YncsmhHDk3f",
  "key1": "4PLNPp5PkcNU7AfXqwhBkzLW3Htq68WtodxJUguJNSgYSWBp2VqXX7snQBQD5yX5zxPcW8LuwYGGVfDypK2gBQNe",
  "key2": "zEjgEADKLsYKKpgin1PpgHp9DPeyaFKVNqt6GGqnttAPWQGbZascHtjEcf7ThAkK9Jk2dCs2JXN8YePXndbQFU6",
  "key3": "WSeVE8nv5yHj4PLz151FGvBcEt19DwznQJbQ7FxV4jdEg2W7mLoTE56UZJ2eG75UcHVNATSxhrpA12qHFTPY8it",
  "key4": "4BxmtD92Lo4NVmxPXu5sn18quDQqVfMVvDzTdhgNXCKZdmat9Q1xqJhjp67J5noVBseMNVAHmD5fR7ATVVuLr4VY",
  "key5": "3eUhms3qKw9WL7VuWiXTzEPLLPWNyxEC5RGW1YAN7RViHCLWYe7DgZz2jNDWES2vUY21kv9rV7mKRHsNeuRBFMTF",
  "key6": "3WNyXgnf7EoE8Zrkkjf1MXmWB3S7UjKsxC2bK36T2hBxEmyv6YtubeMWGaD2iEfgaCbb2in7soDoWTdvUXcXRZtN",
  "key7": "5v6m7A3jzzRModvVfRS9ndkUf6jAwuGCFgSdGwA64ALFs8chw1fJHnnh4MAxxtojTz4zAB3ETnqHrZr56p4KktDX",
  "key8": "2hPiPbt8nGdEp15HUUJf3cWJecMC9xrqra7Ac5eic5ZEH871y4kucyh1P4S84XqQjo1YJeDiL9ZkuoeZXmu2vG2V",
  "key9": "q2uKoHWWVCVAachQXSEDt5X5GaqRJKLkZer2YmV92PZe3gcERmnx5tUrtZAjWgs9XDgKHUBZFdbV9aZQMAX3evk",
  "key10": "23yJPx4hM3RwQ2PYDCtvkDZc4TMr4tjLMmdKaMC8zeZK6Kpi81bJyDZjCSmrx3MmLMMTqu3iXoKLBM2Ut66g6sfu",
  "key11": "2wZeeWmVqXzdAw95exTB6nEJc2FF7531U2qqs8Zn81hSdqTYQy1dszcmKz3Zwk5kpSfXEfvL9sMs1PsoXiyvyxH9",
  "key12": "33sGrFmbzTrAgEXWk5jdkhDfwbt1jyCLsHeUnj4rn15GjGqemnVuGRgK8i8gwvM5wpkc2uNByvC4HreKa3nwPQ3q",
  "key13": "4bv18dpFusdiHp3sYCJMbVPhaQVbJugSZfpYMURDAP4wF4FXEk8F5rmSicRbQgUBNg1gHcVUySbVvp5WzfiU26Zs",
  "key14": "5HdYJDN8bBpVuLFpeSdtY7o3vxuiyUdKo5KcrGD72xpZYRTFj3gW6durs8j11PTNgv4v5AnLMqqsHYop4xaQXv6J",
  "key15": "4QuPDRFuoAFWE55tLc66fkcWw1Y75EtSTWVsKp3ov5Em949aNskR4fYAuidhTEUWRTp3pKaYKZ8tFu8AfGV3fxFj",
  "key16": "3qfykA5taBhbi5mVex4mpcwGDXYhosGkgb8iLfSJ2e9LCR5LJchLHfBkLs72DXn943LAeCx8A9g5GGJPy9PomakF",
  "key17": "61RR8rFDKtMpMXFNML126ZvhhGAW5KG4T41rUQNLxgyXpzXmuCFopHZj7KDKDswfrayLdtJ9ukqXSi6XaQGtjVhK",
  "key18": "5w3BLKDtxC3qi71PX4epTWe3KhvVaLcyEev8cue8y9M4vdszHgFC1f6EVCPQbMPHJsHQU9FdHFEHeraAMmAo6KX9",
  "key19": "363mBmjfTcfJWGcCkuhCoSPvBzfoDXjndfy2BbenuDQkTBcVik42Jya8ukwcf5HCuMR8k38waAEPz83EiE14WAgJ",
  "key20": "5EKVReiV5SoAYQdCNk2C6VGJBqkmrmLttNnnaBmi91TWTf2wrquCNUUxJW7BbMoorwD7NXSj5pE72SazW8cT6e3M",
  "key21": "3qzXAq444PNdrz8rgmy8QTqDjqJ2mfdjoeufvQ49QBwKLKDjmbWWc7M3KiPJg79tBbV8uWWzohN3W9G32eXQHgAH",
  "key22": "31iJ3e4sUGP2WvHXeeAvbGQ7V9eWz8MeSKdx9S8CeNtcLuVKst35oMbDLWsA6XgUnYsjvRYZsXm7jD748VCri5bh",
  "key23": "537Cfe1Roey1osUUoGVJKcoKJ9dUnDPvVGwvJkbPwdPQ5HU3VvNxFRxXRBi9pfpMuivJPhNvoFKLMwKEzQqtmGX",
  "key24": "4GsskUtUhDrx19yUSyRvzoZfZfGbfgD3zCVkRVCJS1Yci7LodpNpSvertokBhg2razrZiMqhvkduAgWcMaYLJwAB",
  "key25": "5YfEN7RcBkDNEvFJxSTc4KSEsV1QayrPS6jERPNTEdvCPhoscvA15A9iSXPxrg2CQu2YgzdV6fZ8nCDf3VFgceZn",
  "key26": "2V6AWiAAVRLpBQmKHbQyangpXobp3BHdz2kK31YhhbBq2omoY9oGAFdx261QVtp2tDZHcQMAMmh9xdeq1RM7jwTY",
  "key27": "KpHVWA4Kt4xbPj6zkajGyfi1TedeJAeLykxTjMeeTQCrxLAeHhvKMPh4crGjUrdJ192WJjgkudsqvArfpjkungr",
  "key28": "VRs7oyrCUx6Fhv2T1FVzG2VcrD7FoDSRJMcaE91B3zgHeNArfdSg87QtV9efXTtmq6avu6jZM5538zcY5jkUFcb",
  "key29": "4q2R9eeNESwA8uzxijfT8RLsRDnHhFjSFW7xHsMxvQ1vzZWBQZR1rAa5b1yuGhFfncAecYyi6WZDnW83N3Phu7F5",
  "key30": "tUztFjR9UYmYncfmBm9kFdFpf5x3ou7b1Db6WKpSgrJR8gtPoxxHVAUAZjkfmjtC95QwjQJt7Lqe8XGT5RYfykr",
  "key31": "tR7VhBwa31B1uwYBD5ATNqsJkmNDXR5MKQTTYMRH8xK1nBs63grppkAwEej35MQd4Nm2c3WNouvs3tbQbiKVqnT",
  "key32": "Skb3tFLmFVbSXew2PGiKj8wQkNVuxTuVwYkukmpm3obCD7UWPXuHqj3W2HTK12zHXjgedocoueKo3BLdpbDNgCW",
  "key33": "Rb9eAfw1LqHeQrcy8YiCy915nhtr3mfVA3H3R1YbzVp1SmqjwBChH4SxKjEdAfgyK4phjraiKiAiYQH2JmoAN44",
  "key34": "64tR6y1hYAT2T8heKmk1SxyNQbpcPcCrbTz86fr39xZhTR5vvDyYUAAgfqnJSQaEgkjbUCHb3QYg9vrufrxQce8K",
  "key35": "4VTsje1RnibE3U4kNp1NLbzCaKfExPBiX7MuBqR6JenFb71EkQgsbBFKN1U4xVNe2WxaPJ7PDtiqKWs7YAiovnZc",
  "key36": "2Q6L4kWehGqogq3i6vzireCo9rQ64ahN5hKktJVktMY3xfMC9VMtqS3YUf3PyKcb3AotdQNSSbh5y5ZQXruermnq"
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
