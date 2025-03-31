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
    "5PBF1UDeztFZtCQ3qseoEZyHwwZSnvFDxh4yP8Q4K1rxeECXqpX1DSu757vcGucUaye7jvoxdKMxScXMrkSDwtEg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HJr6kYfTjBVPW2oqppzJpEpNCPSuvCRwDT7Kgt8dNEbsgcCZMCoR7KAzL3kQM9HrLkF9fajgk3s9U5JygqiDbg5",
  "key1": "47sKux78m5WXnuD1nSHyJdrMg3KwVjmeo3JRwHBYa7L8u7FrzqtgggtCQhc6DsAjh4xKsaVEwjKYtq6hz7XW8bsM",
  "key2": "RFRUfis5eKAPxMuLfn1n5b5CCkKUHkHuoX7hN7iPNzmpkHiG7EA2AcezXq7b1JXR5azmSzFjTDbGU2aWQ99oCqi",
  "key3": "2ChRPWZ1DghH5M4N5NtnTAVzyLssTuMR1wz8ErrB2eSNvSVAEDtMX65rra5HGFLTfW7tRBuxWzPSD8ZTEnFzNvyU",
  "key4": "3FBY3XCeZ9ZyyeV6UVLkwE4T3kidtPi24TT6URBLJ7GXTEWiFjjnNaBPKDuoxhE7hXJP7SqMdJRQ6UZ7sChaffr",
  "key5": "3SzRfG6Z12SiEu12vjr1HpyAUzTJHXavr21MjC4Vx4suSMF45b2dhJ9zc2FrrtTqCxzAAxmbtCVhugPo9us4c7GS",
  "key6": "3XKW415qrDYdNHKLuEKP4EDCmCY8Jf2XmR8tsxQHVJmuz4qB4vAppv37A68uYTAehzgbWNNfaUp4Q1Vns2WC1JHV",
  "key7": "3FkcoHPN33kTXZcwEXuLiHe9NjHh8CXTcKU28zj29TmopksUgqvt8Py24y16M5fM4dXHroXL7w4nwxkg1eXRiMMb",
  "key8": "4Yg2je1xJt8YfGSPBs4sRAAS1kAiP6bRETvaSbTAmTBgwXQ5Bsza5bGgyX1Ts1kUYVX21qtWFjTSXzpTib8QfV9V",
  "key9": "2Z7HkgCwYfdeHu9srDey1MKiYdo2MbCFkmrnF6QiawNrNWtdzkZFC5b6YQXUv6zEsifC6RE11BVP383hptwM1udL",
  "key10": "5zh7EZAz4J5dghd8REp1GSWczLigP86i3XV2vzFsxxqBUNyzoMy9RiesD5M652TzzGaf35VsGpMb8dBj2o92LU5g",
  "key11": "3cZ5NLiyjW41TPPv3gBUpk5x3nWby1sbtcVzPCbqayHqBohFCD6c5E2B1qMvbq3zumdfyTzjWdrjnPuV4CBUYJuS",
  "key12": "5i7iav1UdLha7G56mQA2whfpikmETuUmRHN56Hz2cL2cNoSwSHywLYc3QUWSNPVShmXKinLssybwX3KWrRCUo9Ab",
  "key13": "4ynt4UvoWk8c9sUacydu7Ggxx2LwtKnbgdv75rY3hz9PTnwvekSZiaB4Dc77nGyxHGPGLTJ5iKVZjeL7RdTYhT8o",
  "key14": "3DpYqi3Vh1WG1EiZJoCzwvYT7artvdG98udJ3uev6RDXVJNeZa3vHHoUprnNjhPgS2vbRKFb9XnE9cw9egXXLFRC",
  "key15": "5gqPipytzmxsNzTa6R4mkoKbWBy2ST6rZJMZCs2R1mCmVVo4H9gD9EBUUUNT99MfJzoQ8eDfjEwUB4SfjkGkoxP5",
  "key16": "2uGJVTjV1u4QixXUj4MHYJneSxcR7FvSaE7bu1rUL1QhrD9YtVqCPUVmttM5JaPjxDmqeagrwf9WCp9kUZsAEXSz",
  "key17": "GpW2gxs8dRrP3Vcc2oTZHKab7gTi5iHYormjzpbQadQnK3gQvrFeBQeUBTpq7y6yfYEVU8EufgAHiyxeDSnMv9a",
  "key18": "3JVPaMoEWNNTY6FmksPcXvEHikMCPDPC3Vz1iGSWKEGMQSxu7BodNRJWA3kx7s1p1fRNAY8ScR9Uh4o3hyVSv1kp",
  "key19": "57LJed4B431bZ9mw2YNZXRjDJ1v4CYunYWQbgxUqk34GsTah3dXGcJnjvWE5iLXcvvkMBX3pbW2ihzfhVCxKKuMR",
  "key20": "4GbUHAvHevGTs3NpELBhUz5kNpncDaypBMeuaL8KuNMdq4MVMR3nTtgbdHtLfuueREeRNaTWY8zbxt6v5VNn2UcS",
  "key21": "2EzGpHDHyvhPMZbDELaqkMCajmQ7dLz2uSxuCmjE2LaLEAMHPnokXCLu7cWLw7bvXsLoKPnKEikcjTudadYbDkJo",
  "key22": "4E2Jy9zf4xXJDLDjsNEbq8UaFc26XSPvdRsWKcqofmVhFmuPmuRRGdDNqG3cXPW1hz5X6U3RpG5FdiFvuAopoUh2",
  "key23": "3abKPTmcibRHWBEq3BVitMskuVsUjzeQntAj11FHGvBHiBijRcnWSmwrCnLif1Ey7CRuY2FgNqtK1RPTABaAYFFr",
  "key24": "4L97KqQMET6c367Bf2J3NF6BFJx2j4qDvkt9kUg1KL6tWitvgyhMa8yvjSCrQtszpMRk25MQXRYooPFL9RLbFDXm",
  "key25": "42aqh8zBg6dJuAiKNiMM5if4AKpAEJoPMY2UR3FDEcMArGpt16B3GXXhii2HvgSZzqMewJk2W2mYDR9Ht1SyTKTo",
  "key26": "2GPc6hGD6jZEPYYLC5ACoBPEmR6Dn9D7JNtTKwxeKkK3LFbVE72TGvgxaw4p9M6xD6PMT3VTVRf8QMtw8x4MbojY",
  "key27": "5ZEzc6Kn2oJGaNA852FDZHMMoAcBY4cCPzRfhVD27anaX9nSzg9KLKWqnZR5pz1A6hizUdo96zyxJamMWwvPFjYv",
  "key28": "35B8BDoFRu1oXMqNszND6g9ubh1Banq4QkVBpUhPhTUCpbo89MaNzEjTjSu9pAPXAJeXugEHpSRFdLqqcztMc7dF",
  "key29": "5MN7p83HBys25TcouEtfytBhFF7Yh1y4FbGqFSr5XTa1obreShy9JxPBZRQ3Dp2iYZxjZQpMsy7yfFdeBwLUMJcz",
  "key30": "4ByfuvEX8dcXVKypSYUzVwqVZ2eP2tLavCsfmgE6AeP8GpKXKNs3YuU3ay7D7GXKioCDQrerDGtXvHAvXBtfG1zu",
  "key31": "314i4hZA8MQ9E5qSZQiSaqgWQjPQZ95ATjm1jcemZGbEYbEJsfmVfY3RwaAR7svJafDBsvKz3emdDkGk8Cq4qxqK",
  "key32": "4xWWttnUXWEXTmRH8aCVvLip4XzvzXBi62qUfaTtgpRPEG8kHGeYkLmR5RYrjQFfQxifpbL885p4c54hgw1k3GRB",
  "key33": "UxNR4Ta5cBsVMT5ik3zbDm9yvPZ1xEMmnUaF5j2s9iPAv82kX1vpsxGh6iKmyCcaobacGFaoDHgw5ucfVdyzHV9",
  "key34": "3DFMQBEuRu8tpZcAUKZuzw6P29ExFKEE9F5WEbkVs7E9ZFmeXNC1xKeeAsDYrHNnkpSfPgXAhyiYDBXKM5TQ5uK6",
  "key35": "bdmmywtZps4Vqyzj4KjGTMXU8bcLsmyYQjtcryWpLJXzF2CDjtrNMFVTi3kHSiEuZRdMD6LbjY7Nx7ptgSra1Qh",
  "key36": "5Gj2DvqqARm796b2GhaWs3iBXUwGxKxxpMY8nAU9ZdfNkzeoxz7duw9gMAnZjdFaDVqV5F6VoZa2b7B5Vaw8MhPr",
  "key37": "4FmL92x9jgEtT7JYY1MoEMVqFbwMEBnK8cVPDDaGKT73q6N7njAHzxsWuvSXs3RosG4ZrD771Zi1mMCgt9FbwxWD",
  "key38": "xeqFuV7S9ppZRNs5i4MwKSMocxjaWyhVutu6dKwTYiCDi2MgCP5wGhWC2GFFk3WiZm4fBaxpRBkrNnQ7xZ5eDw1",
  "key39": "H3cUDrB5iC8v3hSPR7KtryBT5RZuJmR9PdBEhTePVzJ5gpZyWUDrGNFUrBZNumwaGVqXuBFR23vX2gSsyUe7W2v",
  "key40": "3NY6DR3GYe9mje35aLL8B3Y9qWo21DcrghAH4bShR45gFtCHvGuq6GNPmebZTge8guRw6fQUB32dds9CR2RRChGu",
  "key41": "2PUSnPp3KzSR4Bqi35pucZVaPUcGd2JvNpTJkNi1A1FtngDoPeSq3N5nefF1fobBigYWyR4TMQT7SSdhrFQ1zSoA",
  "key42": "4gvr7rxMvqxP2URAE2qrFhdZSM2C7dBP9YRWzNxjg2c5id7UMj3rsMsFgH8ZeFiuYBRCcsE5q6ckxNUdiVccTKJw",
  "key43": "2Jp3BsdPgCizustM7c2FEkevm5nWgg86eYDhB1FqLuysoE3nXiHhmcgQiAsursvRtxJNC6WdW4LdQGWVnfgp4Qdm",
  "key44": "58pVNHBZ9HTpnpJkZDiVPjvy9MxAch28Kw5EbsDW8zzyYL5X1RHLf7X8Pfkc6DjJuZReSvyZHWwEx2FAzFS5fQ6j",
  "key45": "3M9Ffvcw3upaiGe5mn4Uoi1MvGQFb1dBkKxgUS84hPPLK1oPyTxE4QysiKLwnSW9TrHExQzf8VZgsN26g8CLGnhz",
  "key46": "2MeogAffnyUyjWGb5MxpsM4MjwCdV3fo1sxqBZnaRxSaw4JhspxK7XkcgBRd2RdPAzJEXQ9fQXKgDYrcBDVMvYSZ",
  "key47": "5WmmeG2AyLRoQ5xP6qJHWW78z9ktpBdna4kKKYaBq8PaNs274batRsF93AS9K3vwpu9gxAmZo54KdzRdqWEdbbJ1",
  "key48": "2HTX33PZt1qxLPWE5aMp26YT6pEZ2pLCWA59AhuAhJJUxj57BTKZMEEGFGYd6ej3GRm4491s8WRYAKvDR9UbASbU"
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
