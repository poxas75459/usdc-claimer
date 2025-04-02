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
    "4SJu4M8JgRLUssfeVsYTaai9cJqX9eFTnqZqB5HBKySmLQr3FuXoXxsguhUGfLCd4M1pMG2VoNRV2iMarfW5z7UW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36xfpyTSbypPBbamdpn2RzmBJzAYk6wwdNaZjk2utuWwpD693kWFukxQRox9V4yrWJp5TTSxMZSji7NCruxtJrj",
  "key1": "5wpu5nMoBnRMsvBG66SgccBtTnijsSwANqoeX948UZGFmGVfyD5Yu5HmsiiWajXBwkZZcEVC6k2qT6jR36Xo6oAT",
  "key2": "2wWvvDRtcNYoijbLL5iUFzs2XZpdawNd2hgEViSDFNfKnepCT8mVsvp6vHfaTcBEQaUdSxiY6GSjq94QmPQ6rTHx",
  "key3": "3dSjRKuUin5EGPZgk8zCUt59FymFpZVNro9eSZS7CnyY7XHREEQDMR3X4roxvrSohuYVx5HMRFqf7Ey2SbkD2eDg",
  "key4": "3Dzxz3dgRyPEBeuzngnjw2912BtysBsThDcZ7esMQcPPQAAMFREVKevMCHsHvdJkvSGhRPUT2Uwq3QBzu2Mjo9Zp",
  "key5": "WfeitwAu6JD3PqgKtBDqMRk2djV28eniS7K9gNXPMw3SyuVK8fC9buZoq2aBTQTnikcsqiu2PpursvGxhgs7ix4",
  "key6": "eARHnSAqrgvXPvJLRzvsoVefAeiRFn1BBNtrJrNaLRrwCspCGA4jy9VgEiyApTPCKnd5AeSkxci2TTQPSftr2uN",
  "key7": "674Lsz8an2thF3ui2kXiKmuEfuBJWH54hSTkcs2eBHrJezKDAEjgNCaRnT9LEcgitwZHov5RZuvYkbDtcmpntHLH",
  "key8": "2LRPjXp1QReGUjNQB7n1g7fmcTcGuqk1vY2wStsStinpFGjce5pNWEdJpPZ4q7Ns7FTFCpmqzQfxgwLWw7PBZ5Yz",
  "key9": "guDjqDNBJJrFx3hVPU1Cyv2xsMesEdFza5sQXjx4pu1TLSpuG41fSTfTVbExZQbr5Xz6R8ZRufpKNrwhmgziN9T",
  "key10": "3w5ckK5zJN4NyKdUEbXn6PofmLnvVQoUsR9tYUs1ESi4MWQst32RcEXuzmgUZSgcL2Da4kg1YAPLudvR77Esaf1e",
  "key11": "5JSTunxCxa9XN5fnDYgXPdMZgHe61NKtqtFZtoKzbUkXKSvEUXyGRTtwiWyEYp5QyVMGvhBF72o4YH1rK86W4pme",
  "key12": "2hUk2HYzvZSMJqB47CioGDJh95Aq928BHnZjpZNBp8EDm1LAR4SBqEVNz48LMeHqtYgGBL7GrKFWLgEmrD17iJMY",
  "key13": "2wbo4YF4R6cWU11CGwX682D33nnYMkSwsCqHqV1uc5EeSJbSWYh7rVSGdd3HQy3XaWGD3XQ5yf9JFxipbARVMgXJ",
  "key14": "2kY2cUfxG3u2Lt8VbWnjdxK7miXLJyWYMbU2ouHXKJKdFef23VWs7CtA6TeDxTsN9RQb7pTbDuXNXy1Xf6e7Go8c",
  "key15": "2Y1a2CLhANets32iZD47NiEWMbi955rog7V8vbdeEMVMsDV9eZ6TkHjyf9XBiH4W3TyCysLvEHU7zWtafAgsrADo",
  "key16": "584UKccsgpBXgDkXP6ZpxV6BfSPysBZtKn93eTfgEKUuTudXrzRMfLhRLRDRGnvUDsPvD2nUj5eUpKc64Ehs8pbt",
  "key17": "4zHt4hzh1JANpRXJoWvymiNeWgy2LZjvx7bWcKs6m1LzmKkE4cWbaoqNqCLVKFkDeYMkUvzGFQJMk7gdqkMW9idU",
  "key18": "5qcxHrsZqbqZZeAHMgqh4gL7KTv3mnSYVbsnczXx3fHJEoA9frP8NBQ9FpjQAuz6sSGmNqNea1pT11cUGjudD9Us",
  "key19": "2TmEhsKwcV5mGEBvNrTPpRFpnh8bTPgE3ENZAE7z4qyV6EzDETVPu5Cpg59prMxQPp948RZRRnEtKDcgAejCxEHQ",
  "key20": "2dgh4SRRLdqPo9yx4bHzsBWVVVq1BUNidgWCUzc2xgBBV3QGJjsmjiYzX4h2Wgut7iFh5kW9UKMJrEYruNJVH7Wr",
  "key21": "jRHSdBCYgQ1Te2zrG3uweCTVJmCjhvxzytc4qtvJ6oQhfBisYDwEhXT2zy63iMHAtChDzp3WyFXKe36jfTMc8N2",
  "key22": "2Nvqvmpo1cxVuRTAHrtbMcGmgwJP8M87QEfDjgMcw8U2Nkxg4Xy18cYxiwLqLiqG1pVhgabxJL5dY1sYAEKNkdCe",
  "key23": "261vXqN6e9dtfsLA3iALpoq1ihCicdKmpVkvfSB6jm5GAxtQTRDMSZkVfYRTi6c5etULezpfwAykgbHUf2vyacVK",
  "key24": "4DdoWExtCz1SUgbqY79kvcnWzsmUH22DWsDcomBbLSKNuss2eXMeH3Vw5iNeaRLhx3hBUjSSZ2KcdQmdeTtyz9Vb",
  "key25": "2Hi6usSUnKLB1AJkivoLADi2qcChcuzUcgeU6RxvXtvHvq5QkPgxksSz3tCFxmt1Dq9J3jwZz6FHHZACDhY9bW1d",
  "key26": "2Kf5eeEXvv7HFjbDy9jsdV9PA22VUy4yHAdHQDxECM6M44SaKzxc1dvfbcyoLxKSGNUmErqcHxMc2qqQ7iaECH6a",
  "key27": "3qAm2jmTFUXvAgvSsLaUxC9KVbvbkwBkP3AK8WxwZueDQmhmpmhqrPzMqzcMRxed9jDmrqfezdXHEEZwXYte3Wh7",
  "key28": "3tYPuZmK3Z6wtVMtbkfhMofwUiV3w1dSC42iaQj3aieNSG9gUcuirx9KNgmLEtstGrBUec3HkLEwqm7eoUvNwc4E",
  "key29": "58cXU2gJrHN4NHG89avFeN27kPegFLBM8cc3bh25MrtPgrk6kYNDFspGMiBzCaCsTLkJNT488FY9T5gKq5mgHjc4",
  "key30": "5X8H35pYbyzUs6sfM54hFdgEJH3UDZTXhB7FtTgfSUpTSwymQ6CWszwfcTNc2Q2DQsh86xZT9qJGd1uiMkfJuU6k",
  "key31": "2C9REgQsiN3dbFCAJGbG9BeQbXsEd4C5yxpZaCvJa7h5zvJWAEigsh557HGHVF9Ui9kJjfNATEDWfVsG4zCSYPBX",
  "key32": "qB8H8PaCqzQrwCVZBiGjnNEqn3hwkz3HNJeo1uqhcUhFJfArBXFoWu7kfYmVfpK6UYxbQnzu4ToCShsZ6oma7QR",
  "key33": "5qD3Pnxc6gobSatueGJ9oKqFjBboZ9UtEsCbPrco7p8cvzVyASpfxiq6f6ituBm29KQ3BvD4Roy8i5ZmLjBcf8kt",
  "key34": "3cUGeBkiJVTHahYRJvVWhoDkq4Auk4C4ZMrJxv7HfNWEW8JBLGC4beKmXHhdzpJs1cEdvtAZ8QGmDSa4ogsSGXw2",
  "key35": "BRZvg4PtfCSQDryyVsgFAfczX1YbnLiwahkRBZ9Ubm78XjCJfjx7Qj6fAVRJdMPYxB2kE7YacnmFMRpk9ZvUXyF"
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
