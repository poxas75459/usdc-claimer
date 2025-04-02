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
    "46EPMf4ch54QFju4RXc7uHYoCRosm9Fany399FGpNYh8LptpqdzeeNRtu2tEgzMo9nbK482SEEKpocZV2hbf2eS9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EtSVfJs2WqgSu6Zt57g46FAqRZbKBEbrMU8wm33VfRE9o9FGVhhhSpoWcfdWRU7caG51XTjvkD8dhrGqm8nXxSp",
  "key1": "iPbouVPKEWFfcj6i2L425DeBmovPEAyRsGsQUN4xf5tz3h3gpzoX6tugfp7Nz2ophytZZcjsUidGRoWmqMnJSw8",
  "key2": "4zpNWP9RTQ2s1EiZAovMCqjEQtf8B9pxZHsY4JScvvWRmRNdZiKyNvH1F1JWNd96qFdadjfdvn1qMJtPcGNY2sfs",
  "key3": "2svuDmkbbp2S1xzyJaoabAEZUqCzSao2mcr4GRyXmwA2tSeywSMJcagPnLCnFGzkLhLykNV8yvPSafEy9iMgCLjx",
  "key4": "28wTTcjpTZm4Qjgc4akTmvFMCPfFXKio66nXuQxHFdhCakNYScH64iqWpVNkL566atjEZo27SmaHrjU9c2WvEtwM",
  "key5": "2jidZjxzWjN9gw4TYiwFFKh8bU8hfMWiwxjcSHftHBybSKpA3DgqqCjLTRPYLF7Hjvrp9FMxABPGsj5PE68vtH73",
  "key6": "5K3mwQN9AqMejfAM6LSxZ1FdUXjt1M15ShgJ1WePFA44JTk1PFc42QygHv4SkJ3ABHk55wt8Z89FuA9DM83D4cib",
  "key7": "5ApKQ1U6UCNj49iugNRE8vzozw7N4HWTmG521Ygpr4G7PGR5MKftopbwyaoNaqSBw9fGXKX38t7UNkuxx6Vmqw6y",
  "key8": "5DNQA21np3YkvkoRkbywuDvoikU7uhpSpxEPJQiUvJaQGDbnsskXtmVq1FcBjnjRcodwR9XA9bxuZMtRnrpyC2e1",
  "key9": "1cnySDcApEVZrxpaSmz5bq7XyZ7EvqabyNck7NHF4ENJrXqcaYmQo5SKSRcgiYzfuG75jwLkEg12ymm2oxiuaSt",
  "key10": "3pyrQAeVjBhTgtKrp7GYKcfWctgEarthJpZstNfJsJsddzK2LitcZike9iH94jg1FtXGh3bEmK9JW3Vq84BTQLmC",
  "key11": "5BBF4k8hfFAPjNVXYBigXUnCnUFhiS7Q3W1tcvAey5THe8hyN3SBAwzCjw1RFXATH1V1h1aBuWEQWTuJadXXF31u",
  "key12": "37GDjJEx2WCvP1JLPhyPHcnKXcQ3TrA82zzJ4vHyPxGXmn3r6wqf25NPAF6od42mRtmsXcNcmE9JEUsWXddiGCyM",
  "key13": "5Ci3RiqcuUM13a98X6qXjN6BTZ6AUajTDNZXo3C3MP6e3ZZqfY13iXT3EtMUEA41UZzegDQ8oHbVmG3oQcZ5CF3q",
  "key14": "fqE8pmNLAKm638qmVPgBGhFy2ZnLtninJHy9D6ucfG4vr9LdJZ4LnRZg2Q5MpLnD3KDQjaiVjZy8sEKoCGMzdLm",
  "key15": "5HQVzbtQtwpykkuU3nCL53z4g3UkgQDjKn1YEaFvFn1xA2DQqbtuU5Gocq5vNtndyk3nU37tgaUzG4U7GfnvHqmZ",
  "key16": "2dSr5k2wRzLubhiUgwGRCjHUNm8KDSFoGP2pVdQNa4hVHCP3kxV5TKRz1vmFkMJMWjTsiRMRfyg9T5eNnnfFHvJy",
  "key17": "Sh29SNceC8bMgPzVLcuYrnQUsf3ok7kaNq7dK9ZXMqmqrpohUTMFbLRnvH9c1YfoHkKkCZPiz9qhd8PHJCzmT55",
  "key18": "2aRU3dxTb9CFsWv4AXpnwTXMjFBkT9ZBiqfEXLn6gfS92hZ4bNeH3MR5D88xEo9mXfTqMuBUy1GM63qYBeoQoCCh",
  "key19": "4XaSAr5LwDLQJcE5MzTUhHNrTuMeaeeUnikDPmSwYLSKv2MDSPxikooy7Mdagb8k8Y45bcT1WpZg4P6EyXZ24saj",
  "key20": "4XPMxLiEMYaa1yk2SubE3C9RfPrraWXJTB8k4d8dX6jbaiXGSoUY1paLzLLDL5rb9n3WpAhpygtoguz1BuDCb8ig",
  "key21": "5RESF2SMVCNCyDdtByM7VBWBRAypctY7q7ctYndFJD8ccWScAp4P2jLRw2rsepREvwFnmDoaSpcZALMchFjRkvQC",
  "key22": "apGsUYwx3UEgzpEXqdPe92ZCmVYBn2veiHSvgkgc5YZTaMfMBP7w6T3FYtepNSVx7EZKGLC4oAFomNYSaEoURLj",
  "key23": "pub1DafQt7XniVLro2qBqLEcE48Lc7ApFurvE68TdgyNSoS7g2yYnKqQ9f1TTzTajpWvD34xiVNMtCvPpdpykpT",
  "key24": "41SGKJ8t5SUrAuEcNK8x6JuhRzL6rBW6wQoL33LqFTNA8pLqp3cQJETKTjP1iaN2wwqHX9VeQuGCwqs1uZCuKiB1",
  "key25": "4wkka9t32t9oC8tPhB2eWwE4nWXzHnMfZevp574pQA1o3tEq9qvgSagyXmCczwRSTGFYXHvHjvLbVNokbJoPiz1u",
  "key26": "4CHkZUQHTEnuGAHdTzBozftEG23oFn1rbNdCH6YxyvyWuypakiV7ZE2kofoFS2XviqW5zQ9ckSMbmWBEifpa1NWU",
  "key27": "3RinYj3XXXXsWL1EwUG6We17Auwk26Ka9JRNdVdLe8NfosAL9An7rtj5Khd58KdW7BkMc1gGq9DGoFGi12dvcBi1",
  "key28": "5uGpp2kowkL1hvXD8NetvqLfHLjVRW6YG3ScYDc2BWyn28gVfQTrJ8sQG7EvnSBX6fxitbQDDJjKAUiGePBnnzDW",
  "key29": "7ezcJCYrerRTzxNWZmjVkH4EQ6LUPgPm9nBy8ucgB6H9scG26f7kq6Efky7ys291HtYjGW18LxAwYVmnHXmCgbf",
  "key30": "bRBtTxQsnJoXUuikFwhkzib7RsosZUydK8PT6pQZ7kYk3xL48pq4QygHuwuvEAijBXRWopKoPyQve9Rz7pW2ddZ",
  "key31": "5P69uDkzt35RWR5DiuJHBjQiifm5WxSkPfVwJmVGqLLfspGknhFtvUHuCSUVxRVkQjzrDTwxCMw6A47QusLM3ahq",
  "key32": "31rZbYM1ANn51H17WuYfdDaNM678FmZx5N3S5YxwK5raoNLnSRRRwzEqZL5fKY2CMrASBfUafNhfMswe6HrGs9t7",
  "key33": "A4Wy7mPiQAGkhAR6ZkzFenUqHNbcHg3zruoUd4adErs4CnrZHH7omE7VW5xbFLEavEhj7M8tZMPPrr3aVGyHgHL",
  "key34": "5Bpr2MsAfPUWgLEMPBvZKJBj2JttDGUbTvuSHj9gqtoPa3CdH3Xt6PEaGtKwWqUTNEiGsDqRPmnEU78wWwRhnKnS",
  "key35": "3vZPJjjmbzSt2jZgDS2BwgXS2uaCzjAxeBbZtKniesy7TWWQntFtoiJX8JemFdbmeP4jQqFKJSHevyL9zgkUosUP",
  "key36": "3AaN3ecieAda1kmH24CDDVo6ACvgfEhJNwS1kWe1HLQbtPPUCPFLwu3ongHpPJh5ueTrrwvrG28fhFvRcSrwpLXP"
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
