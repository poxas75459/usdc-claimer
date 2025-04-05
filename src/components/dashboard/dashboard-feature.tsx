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
    "5sDrS8R4fWNDQmuDyLWUkLKaLm6GgGovM7o3izwVPiauHRNsTP86tZCkajDpQZBmGANkQN8EKfqni9QV8P174HQr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2orwXmMom7kcGgULZ2ZMoFvkyWEyyXmXQoFPCLWyV25LXtFeebJXpDLnSAyhbjKzuFfzVRZf4gGavei9wGMAuc4r",
  "key1": "4TcMvEUWYbf3KV2WGrbb8CpTzTaFS1ARjcGJ1deKoAfGVGDfEtGPm6mX7kAJkxLmnNGZmPPtX2vAJE8kSGJAiAfS",
  "key2": "gdg53osnbYNa1ZuRRZoGjPgCnGgfW7wgX8SkWBSQqW74MaApYDDreyjcZJhgdgZC47ED6LEFEL6orGGZRVEwXqH",
  "key3": "3cFRGk4T1ozUoeTGuqo5B6RnKS8kxsUyQSqaUUD7pij5wRiUCzPYcXKgGggr2BgaPf2aadsZcnyChkwYEa2hA9ys",
  "key4": "3oogsMw95svRFb4AuynisKnkuYZ749JVB6a9CbmSG69MhZc4vRqz8EgAhjkYJySynjeVDrCotpbKdg1fMjjDW1a4",
  "key5": "JJ9tmL4rhyjCK6cC8RXycgT4fdN9AcLBFiXtikbz4dinGkRwFoQHi7csxodVfwPsJYCXGnnWC5CF3xqf2W7c5x5",
  "key6": "3hQHN3mrXg4mGYwNs9quXZfAcWcirGXJ3cUhS9fuvGaL4JGnMufbQEUUqeTQUUPkPKPDD6W9Pjc6SwME6uwZ9QbV",
  "key7": "4a83koWKzBuxrrqLShP6FKKrQkjMpe6jwZkpJ5jJfsrf8chnkbEWNvYmEda32a7MWFZiVBi8sQQqhotJrBTrX5iD",
  "key8": "35Eku1qFKcVd3fQXVmkoVPtFRnQ1Kbxddk2F41dHDjmPFgamQqqYMhtUaYrmGNvNqen3tFEerwT78tMTXKiF5xMm",
  "key9": "5RKMWyhpzdqYDWHRKK1pyuTj8GdAFp5MdM2bhK18tT45Dxb1hvjbXawggjXxHAFYEg9XbwUUZZCuBzwr7Xr7M64v",
  "key10": "9py5mpXJAem4jpshNPnKTpWzHkzZ2ZhjRGDGHfw1jmUUrcvrakAEE3fEstYbE9M4gStc6v41nHRBoSgQr5DdL12",
  "key11": "5Qp3x1eVGuNQtcrTqZka5UGS7MNPiAWHwVmP3dLEPvCYN1NoGEhmhL9DCjWaDnEE1LSiXuVv5M87FUbQqibF3MJc",
  "key12": "5MuSV6et8Qm6CDRkVZA6Xvk4ZyAGd3hswE5nWYUUkBY5v8skYeJmNrXVRb3mYK5wjE2b7DsqS2Hg8gaMLrhR7EGn",
  "key13": "2jmChUGErgztFE1RSJeArHsoFFes6nYsCqWqxcSTqtoeeigYUB8E1VB4ebjRyWRjkQmsLe7VTkAD3WPCobjzcYAk",
  "key14": "WEevRPJHuAEDJ82TRb1bMTyyrCnPnJn1koFMECtzjs8rZsqXkD9h4rZfKocA9KmTdX866ZR6RwsgoW1fDx6ME2J",
  "key15": "4Fh7QQxX21mNCGvS3D2xt24ybCHBD6iPdAxtP6Pp7gGYwSxkYpixbcBhYhdnEFtdeE5dq94A8Mhw9LV7B4v6r5QQ",
  "key16": "tqRKV1brfegkPg96nt61M3grTfHVfFpRwwYu1xWth88aTT8QLpTjEyb2f43hVo6xFintaHfry1Drv8KjsD7SFuz",
  "key17": "3PBnPsrFWu3xqJ8BA93NQNsYGsdJcPyw5vSeopPb5yjM6Ur1kxrbrXMZRrnx5Lx5paR4duT8YgXMcL4QW2sjDWz8",
  "key18": "3hHd7bagbcUEB3Qkw2kj1ecgLRpkY9zbNvBF3ZkbomNLfjNvF8YLBhixNhsTh1bGiH36QQqT6yifCtmVzVEMaKHH",
  "key19": "yt6JKNGwCtuMDq6PebV2ce3yvYiHWeKJ8sPLbZmbWePjnnWzL8eoE2HpeQRuMnWk6Uj5rEexjhTHhKsx7hNRjPo",
  "key20": "p21x8eSMZJGwJLCgtcifEQtyCLBrjN6426rPZN8EkxGBfLWUbCmmHj2H4DpLxLLpVmS25EVMw6UF2WDc15Y37g1",
  "key21": "5JS97SCusudyZq7TZQu4vQ5mZR5nM9EzSdWdfsyuSejsKZWRJ6vxrxt8oaLiUvkC5QM6WvdoKw4FrbVVVb7swNSS",
  "key22": "48pwc9X6uRfd3WdbyaumULSisPYdEYJiMPwnXQeDtisweTjStSvcMtQLwHw7LvufQhy1tSxxm19txTZi4qRd6Eef",
  "key23": "QZgm8HVn4PniQS1VFqcKtgbS5vd2wCDpsw3eaGfjdPHt1MUexSQb1qjjY31tg6j1S6mTMRrFXZTSRwFdFJaHNDT",
  "key24": "4e1vYmiBzyo47iJoDMihnw6maNKV6685oCWvqN2mjvZ5KHBoki6wS4b8gfVJsQzHwij2jnxnjCTT2owgoEyybv2E",
  "key25": "4Vke9gS473Wwrf9mcTvNpwBqV8WLGMagGKkbJXaR5BCebevAP51KBH3PdMRXX9AN5pen41p8NmD3FRvFniXijGGk",
  "key26": "3oJsAKjJePA3RefhfsRSynECyDm4iQU9ZMj3UJwy2moushERCSsCRUpPC4FkpqMCVbxb4uM1uAe2Tb2CX8pRAEpz",
  "key27": "XVvoerAP2TP24j3dKKE2nv7to3tNTkwHnU5J5FX6MdSnZp4sEhHCxaTfrhQSgUmLwaCUmdxkAUjFwWEzCXjW83A",
  "key28": "2QBULcTeKrCX3Hjd8pxtJ6JedRsKZP8FfsCxwFbUW4v74vUwqHjBJaTTEkpR8VUfM9wLFGhMogB1fZDissTtx5dC",
  "key29": "3rU8K5J8w1QBYg4VMcsPnmovr8a7zkJGdFEddMeGyr8CT9sPSfqm5APbsPoD74YtBPij7ALGFU6G6sTdPJcFjMWG",
  "key30": "2X9We1T222dnEQZVZEdaGs3LjMrE3rMaJ2qYyn7Xh8iQv2dibjWqShNvQ55y8xcq8C8NyejA2YSMdxff8Y1tK1Qh"
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
