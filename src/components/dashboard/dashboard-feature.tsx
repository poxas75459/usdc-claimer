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
    "2T4ortwHsJ4gajTtCHf1MiL1DL5vA38GBd8BjitB6VXqwN3crha6NR9nAYGPgJHZscJUXh2VyhLSCYKRKiXv82LX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UQV7TJMZPDFhJhQhEyrehENmbowXiWxDk858qgPBjjhPFoCyW2Ngz9VAZNFFVxi57jqMaVUeUmtKK9pRPoq1DoK",
  "key1": "4AF4brfPivrhoQh9KFBjBt7BfY1FD6eySKwugzYen3SbUpWpQaHmJ85deXytL8XTx6JZ24ChLiwVrHTcBdvHgd4d",
  "key2": "4YHCDhvL1R9ZdU6d7ugCbMKwSJYkY12jizYFSkiPG1h7rfnneSJXvMPoCReRXCpRkd7QKhUymHmBZVvUV5p24mcA",
  "key3": "2qzR6b77m4yeLq3pTt1NhANuKPRs95sxoKbZP9KNLP8beW8yHcbg3RFmEUK214XWUBsQzkvrqfaftMPbpBWAHht2",
  "key4": "JtNPBt4gThmxkmmwhk5zLmZFyaxvrGTMxAn82QPJC59EY2vW9VpHmNS5LHxG3NkgdtFPbNmMcrZkhwGqjtFpK1z",
  "key5": "3YY7JDnvVk5NFC5HunwLSjCSbr4vGLEcZRzWREDi1kHh9FMGdraCUnFShfcVuef77f2NFJdmq9adhGPeARKMYX7G",
  "key6": "WRMj8vvf4Nff5VSjMhBryAF42g8sd22758WkkLHy7fy83CKrPeKstycgAyeJZT3c6DCBSZALXUj6BwHcRUKYduN",
  "key7": "5ACLSmidb9yQktac9LxjqqYeEVrWq6AHhxt6g1kKgdbbbk5KWYQsubebJ95iNWbHm5ueFLhJUvu8uoE9UCRXtMgu",
  "key8": "4RQ8tedpL21jzcjVWfgWqXRZjvm9xuGd7Nz8tmnUTWiwUA1QbEemRPYcvzLkpLjVXgJAVDuc3ADPeb2VeC9FSMrM",
  "key9": "HWdCniYPAfAYkAXuBrvi3uYtYtaDj7Ce3F3zhhWShTsLBwDCpekLFXUhvTqHpVBYUHcFx6psj3Jp26MAG366mMX",
  "key10": "f2ezLhyAxhc3jpYbNdpzbh15zARbPoDT8U4e6T2pHD5qJjFNpn27fcfk7Sk56KtjsSaYitfBARwPQVfw9B3XU2U",
  "key11": "5P3ojh1sytEZFZKNckeST5P5bYTYFz6DHWUnwoDArQuuyu8KiV5xoC8aXt4SqGdoR9g2Rm6Y8vjb8WYZdt6j8Ukx",
  "key12": "48qxswTgoQsZTctuDXfc4u6sNJkFKHjEwFajz7NAe5qRBzqHrTqQY9eGFnH1p95CRf6K7Y5rY4t5gMCmtUmSAP3Y",
  "key13": "94rCNDrqiT4tSqyHF4t83KYMV2JiLiccFFX9LdsdMYJep6S6mvCHSDemfgMHKDsvNqHiR2wiQpGyXEZpor2VwyN",
  "key14": "56ibsJZ8gyna9TXL8LA5L3MLhrhdwRLVcdaJhqUmhpWcTKVesLxSQvnKpyWLpeRVdj5n5VRoCdJzjuUnZh181HLh",
  "key15": "4b7duzkdQS6R1sPuWK9RibWec2kHXVAEUxAfm7xLoSsDF9rhKFbJM5Pr7hmkG2gxnLqyZM1wvUyfzE3H551uapFt",
  "key16": "65QLjMfJhH3hCpQv4ssmFcQaQrs7cbHguPYG1YPvf48se6ZuEJnjPwaWPuW5wSFnFJhZCgKzD3bCoyj8saMCBiHS",
  "key17": "3cdvpnTDnJKbENmJ1wYqfQEMmbfpTKz9HNDyGrEMX8usqG7iddZMxNCtULHdTysVm2St4Zb7fMEAVXY8JhKvhLYu",
  "key18": "3cno6hUHMxJqTKgwDwXQSkxjV8hoz4Cesfiefnqvjyg17hFkjUtWioR5uL7Axr1Ag1H4jcEJ5GwgKjTaBPeKnpig",
  "key19": "4y7tAsiBYF8Hxaz3eZY7mQDF544hFip7cozBB4u6yYe4Rz96u6PHdBKPEZLY7cvPCj4XtHBBo6UfXKqxDhQa2UNJ",
  "key20": "5rXeNN3geJBT8SdyJsfCKyVdsfPL3BAbXaK6L5cK3YcK7VvUhMMYqiNLeYzmWH6REf4Nw6Zmz1EwrYb6fusPjacP",
  "key21": "5z1JuJ5E7G2zzQ8BFGReZJAd4DqvPxSdgG8kTTnUuMgUQtETHLnipK5FYLmmwyNY2BpSZ3xNZKjUgAYGC447GH5h",
  "key22": "xoCJpzeV5VmLEAHE4FVNTDqrsf4Dnt5jrUXVmdgePwNPNtGAXu7gLDS2dTfM4jvbSfMVe2rnw83FjXUsNKSsHKU",
  "key23": "3y5NAfoJWPm1dMqcdcJBSB4oJuSADBLsfmELiHiwbhc3WwB1y8UtFyCX8vwcbN5hsYudGCGVLNT1GwSAmGkRAiPK",
  "key24": "2m49eGTDrcC9pgohjeNdhg1weJrYVaFeFGUemhUh28o2Kagn2U3oFVAKgfZY2qySS6EBF6KAE3TYYyLKAnw5UkoC",
  "key25": "1v8UFHfQTLhtNZRr4SQLAg3xZ5qAJjqJHEfwkom7R7UrzQ7xrkGkTFMbUWkEQEDFwEVUyyRRMkNAX6QyMBEZzTw",
  "key26": "4hv5EwbQx5XqqKC5KV3WZjmyYWvLP562bSbR4uExhJbpbz3bYFQsUxrL3YyYPpyc95LDuUhbWrdiYSigU1ZHywju",
  "key27": "3F5gPcUnEjW9vm5CyNspQwDXxzbhhAskmvQejLBSuRobmGHWaU9MEVHotsFagKfSjeQJCBNMvEv1QQmBPryKzHEa",
  "key28": "3wp4dYCkrCHzMESwNVS83rRkhxbVeZ6MXZ8mXeR35oTtNT6HREhSUECrWWPfix3M1bNqV61dbfFYZLXk5ZLUtxPd",
  "key29": "5od3q91fKRbSoeqBBJhe4E75jQY8a1myRWfdJ5o7QrtvaeE41immxBATH5WYEpcxRVYGstBYTKwKd1WpAVA2pngq",
  "key30": "hSVGj28QehGMy3RGHqtQEWhr2d4UrbeckXZB8xGL1Mw3x7GSFZgnhCv7LhyaGbT3zLmSZJrH9LbR7uhXTFJdUMi",
  "key31": "5ivar2rvLdmKfrYf2Qygeh6j9W5mXTZeu83q84Hbm9ptrRdhnWFd8drQ41czvcix4355FcNnp6FuWS5mgusKxPjD",
  "key32": "2n3LZzoHakBPN7B7VaekjNDM1dgcM81TASWf8qnw1G5N79VwkLZX1RdNMD6TPwqrQ1cvnJUek67QqwcEhS62Wjrn",
  "key33": "3Jdn7Vpvs3JgAuR1E6mPAt5J9HZTDeMVHNtixTAw33h4BS5pojTPcXxtoBFBMMpHLRxK4SUUSyfbvL4JJ35cnNny",
  "key34": "4zs3qcFYBzifCUSycJyR4dPFN3YDeb1D94AkrBKhU9usRfLbZMQJdeUyErw59jFATfuCtP2sjcq6HwGb6rseTnAM",
  "key35": "33ay8dxu3cKE2cCJSoLZV9orMGWvPH3L5gvEBQqho3z1viiWs57TfYs1k9YgUA2bUfqvEfB3458SHdtqVDcqGsX5",
  "key36": "4LRVnXDn5jTnGNzKxwQpYQk7AEE6cosdJpFej8yj5tFQhv47iv8yAPy8PorWEiuGDi8QpFJmyB58rcjfR2cct8Tq",
  "key37": "3gJCg1Dm51RDX55Gv52vNHwKVM5QamCWso3dWeZc5Cek4zBCs1TQSRrU3LVBhSi4HhtMtFvkSMFL8RzY9Hcm2Lu5",
  "key38": "2PB9QnHRG5nFp1UH1jWWtJQLwX5Uxbu3v5GPkRW9r3piwaCuqn2FdBcrbbhb33pWTdEeQaH91GKhkj6LjPdBhjcr",
  "key39": "4Lo49qie6vZBkYyVDubc6NJg8VqemJXS2GLpE5SLN7HoLZaB6TttQoXcPBnq5xZWdUggvKZFMzDSnpSLXgC69xj5",
  "key40": "2iuSUbNX6p9dm821JDxMjz9qpgWveWB3KAmaLXXQUSFuDKP87FhfN3gxvRyLW9jTcQWTuYfbAhfqUYKcvyVHtfYR",
  "key41": "KWkpC8kdo1GY5qSTsidfZgJcUg6msTh7N6ac47pQSNf9NRu4RtV6LhMETnwemFCBLQYbX1YpN3XRh9PkDWdaUCr",
  "key42": "3jahQxZpyWQE1BMBsETDt57LPy4WrxKrVqGxYnhKLDqx7TUPqX6fTteRN9oA3eKKWaGAGBNohnPwk9opsrGCVpxw",
  "key43": "5PUkg54TSn1vvZYPCsZKn7i1JsqafagHT3kQWMrcXR9RtnzGn1cRQDyarf4NADT2aRui9Fc1pE79g18EMPVUgXUT",
  "key44": "5CNtpDSHZfpypMtZGTkSsk69WZtvEuwxczeA178tJBK6mW9ACEWNiSSBvbkN9KHHoRYVivYHAJyXAE9Z5hcqAnhr",
  "key45": "42FBNb4z58nKmrCFkck9RQyAavdDLQRLMyLmZi6mNenJ5nGkTjNN96AihpRaX8df9WDD8BLPyVyRMFQkU8HNbvAH",
  "key46": "zaGWNXXCK2DnUHWtYDbyW7axzfzyohq18MuYtNvhZ6UH2CiY3kYF95rAAGTQSBYTPR1yUZMhTorZcGYBz1Y6LTQ"
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
