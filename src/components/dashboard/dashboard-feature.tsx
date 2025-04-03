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
    "2ao9hTqZtjDHByecmKfxbkbFCsdpitWfasXV5j8mdJmMkvcWPncQ9c4Aa9hscpb2sHWFMobzVJt3LuvViXJaxKsa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Dgr6N3ggXv8UUGWvXYEJJC1FzmL31oa22rFfoKkEwbqaoXSJS1ueFuvwmawuYqnJ7QyEnokpUK2TorfsvQdUNpp",
  "key1": "63xk6woM7UMzCpPuJNNSVYJDUS4y8LmngpjvfaeZZzD2ib39JA6KJZUzCRePwda1sUFM6krwDrUmCFMmywCmMez3",
  "key2": "5Sfq7FCmwwdqRsRSdP1RvKVoP8HsVWnbCvNnBYthLbZjqEqydxYnZ62PkgmUVVkpWQcbw3rZVyvbQZFNsoQEmuPP",
  "key3": "2t9F3tGLZGKvgCjQafArDbocmhXta7A1DA6XT3TZ9euUHFSTadfrr36H7rUK6qy4yC7asHkmDquSg2hXNW9SEH5r",
  "key4": "5GYP4Buaso7Jo3nsF7acCXg859GYNcTokBJdNt9Hwhna8D5na6ja6Hk566hUgFXDxEvjShnMt6K9eakYnqffEVfT",
  "key5": "4iYppmSxnQSvWYwwbm49cqsHFGKMjgu52wu6hMRpfyMPF8X41tSwacxMgFTdzqWGApVGDshPamaZk5iDTR3gGwPm",
  "key6": "BhPqSQeS87vUzFAczgYQcARrVn4n2ejNcMHfYgcYC6MsXzYwVfnnkHhr5Pt516tNVwK8FofsJfvQEn4FubQMn9s",
  "key7": "2L2gtYQgDC6QiYSjRYifXAkWSH4RZTrf7qNaDjbgnPN6VTE2r3pS7wq7Hcy7Ns3b8Vh9AxAnmUfbqCJhvVSTH9g2",
  "key8": "4aNG41jPhK6ctfcQyg3GdyojJzkyuJALXXeBJB7cgEHVCzdxEPmUQ72ki2Fmyx3sfk7TXiMAM6UwtSPC6X5ao5ey",
  "key9": "2Tuss8QsEDDS76dH9TAwedmm4uu83gXYWC4NkGH6BcDyrF27Z4jbHio2u2CnAPcUSZBVzxTXcL5gPTjutiPmizTp",
  "key10": "qXZEf7P8fLE26n7nJNqpE8AG5XrRouTZVNBpQsicK24k47tuxkXPBxe6T2UpjVxYsq9QU2yiqSYTzKPKDFnwsk8",
  "key11": "RTEu5retptpHaChC953iYkebj29Y3At35tj8FQ4W6v3EsmXWvWdURL2bCmYSCJxdHDpb2m37uVAX5WezAofh8Uj",
  "key12": "4ahnX7T8n3iJkD2eFTsffQtkDdo5Q39J1kDJiyqaUCxDh6azkugKaDyAskxXYCWmkncy9sExYtuAZim3Jz7cxUFt",
  "key13": "5JnTxh7vZn3Xx58MwmSHZvZBpCp1SafeafNwc3B5m6acNNQ23mmtS8RhQ4GeYQJHna8b9Qb6yj9ZoUH6Pfnv6zSD",
  "key14": "2TgW1Ps6MPAy8gPGYVyhUzNjqFrrk5hGynvRhN9FFsVQ6Z2RwH6wf8ZoWveyLvuDCxw4uta8ufLeYSAEk3ZNbAjY",
  "key15": "3tyoNzGCoYyYhqozUzhrY5M6S8UwPNwhcpgXbwvE59VosHrWuDJAc5txjV3VSYao8kYYRoFWCKN4g3bVFCab7DQC",
  "key16": "2nCU6DaEhWTvjaTM5DPo2cUmLWKXr5uiemRruC7d1wBa1aUu8RCPWdYd7mHi7fUBpK9BseAaETDHDipgccuvBre5",
  "key17": "5k8g6FWQ7xgiHe8kRcrruZDtXNqfNMFSy3i3Apmv3afhfjjKb4eXamWHVWX3mHbbLkPtURmndMcP7mDJSmLT12DN",
  "key18": "2aN78vSRcMANRS19dQYJktoYhSXd1tjCEXPRGV1iCQkUYvSX5iWU8UCdiHqhZGsZdo73py24Edj38PjjAKBePwAZ",
  "key19": "4puPyMAf3ZBwe1zSuejyeamm6agLyhFdZk8mvv37D4gPT1djqjvTMpfwVrVEsEENrfMAGb1tnE1QGohPtfxQfmJP",
  "key20": "2Li9mMDwM4MUmgob63q7sufyvmLscpWEA2M7SSRM3EngFH9usb1hceRbYZGbQWdUaEkVhcDjQfKaZze3okKHHava",
  "key21": "4VgatLfbAn7aGjuKDpEFb6WYtiZE6CoL25Udh14D48382Z3VZjqKp1YzXRKPpsTfxG93JmHGMeMJg16Eisf6r23e",
  "key22": "4y6hJN2YVpG78YUGS78CWeJFcxappCFade3ALVpQVJ2dZtcRD5imdoU47PkVPrfy3Eb4Pc7JUN5J5KVTvAjXrZz3",
  "key23": "5CwM8NPBR8NHCkkdR5GLyf6WqFiFSX5sBEwAPTp5aDdhkfTGmyHKAG3M1DyQhAhBmWjoT54hq8WparPNhaF5zgib",
  "key24": "dQxzv1xLcVAANd7ZZ7am6w3oaxCs5SBuzRXqBNatQN715qofQwgWnm93KKMwe9scGYwrwbevq7Jm8diWQYa5sSg",
  "key25": "6GG3RAJR4LUfU46EaEhYRaLE5KGkH8VWYhA3UKd7VsgVDZBRf3mtfX81gn9SP2da649JZvrWhkvyVbVgxd2S7Kb",
  "key26": "3LLZUf88pkonn6xzFpFpg67ZjDxL8gKp3FMF8yBr9KpVENRiohEsePoAR1N7mmQfNKM7jKtMQtPcgT1UWaQMvTpq",
  "key27": "4PxRRunTc3b7Uv21xvWuBePFK2FwirYU3YqjqpDZfGbvcvFHk8ukTmsA7SNsVSAwouAEkJSzYBoEGeU4UBXmzTW8",
  "key28": "2yje9oRWbHfET2P9bqFs5xHKW1hNKPRbaxZLAbbnaw9ucJA7VRHHbDhSRj8eZ8AjkHzs7BD8JvFhUqv8MpYDHZbE",
  "key29": "4cwiRe1rnTbyxSaKjJDun56SCzzDzrt8pNFCBLDGbvBFMATvwUTWpQzyCpT2cfGTcUyrnWqXWujY7zKzTvGXxPtA",
  "key30": "3gi2mvbHZjiqMZcgmpXVRWkwwh3vWGJy6GXzYtXmYpTE8bKUsk7sVoYbYNvKvkySiZTp97DJPnQJWsfnGgJBJ5CC",
  "key31": "2VYWKSpS3LosJtavGKH25kfhVdp3Q63oWhjrRiefmv7PC4TmXNDNBVyhrgvZ1mqcFp8ZwSDFd9fq5WfHAMAeZfE7",
  "key32": "4GvmgTpGMsmA4XLjGFKhswVEARbp3nohhVo2CE68tFndFfCkLs2zvuuzd59B3P9UZFkdgtrimAhcmfTaqyqGzmzM",
  "key33": "5XkkQv5uo88adXc6Tj9nAUyAiSkq7hNcNuvzHhMWkCC4RzXvVc2EAvqBcCVdcf8xSzAyvEjCbQMseQL3wPHtwSSh",
  "key34": "2fofG5MosXyQHyzgNRgDpZkd8C6Gfw6AQGzmcGpjkvBe6r1Fa7PmZXHH9eiSzqKR3cSb19Dk8AGGAYsdArGVKf5j",
  "key35": "RYPf5Pm9Z87VmU31ZtL6oAdLJPZCbLVn7ZDdxnRZ7c9UoL9mwg3FqA8jWGJyPFh1vM5vx5iqvM6YHRWiJAAGUX5",
  "key36": "5uc6JWtxyYC6unMxhZ65NRoX6LY1Fyk4hb9GtevHbu2SRbSKPycNJzeW4rnJ4e9vNT7RgJwbCwTPcg7HsuVVkF9G",
  "key37": "2XCfPEX2Uyptny9WhUCSedFvx3sFhmryquKgm3GBZV6ytu8jA5YDQhkEZ2YdLgxeb1RjN8JPbQyZ6hd73kPbtPdh",
  "key38": "4r5Yti1KTgPpxTtSNEDZ54m1TuUHiprHYpvEfsJ2ZmiWp4b2vDtQJkruxENoy8nST86h56RZ63vYpessS5qv7PfA",
  "key39": "3v9XHBrwysVAGyhoshN7MLVzyTW7hn6MiKzk93CmeRY94ar9hTydhV1KkLu9VeTJCiYJqDFF67NaAGMi514HxK5V",
  "key40": "618nXzHF7EPMH8LjvXgHfingPpqvPSwQ9DYPZAFD95hv4hWy5BEakjpHTKNte5PU5YEvhBhuL93UmKTcuDCwzESL",
  "key41": "4w7tQhFtPGnqNEd9mkNKFWqnfSRc5HVkon9Us7s8ZjB8JR2kmJrtvAENYLESZSNyvgDzVDpFwzfphqNvaQD22nJx",
  "key42": "4TbxiuLZMPTMCemJChjhTbGbT8k2vaECzcDe3U69YKDYCNyKP1r42bBxF6UYedYZDDr4WmwPttzG6R2qmxtSYhNc",
  "key43": "VjuMygg6xLnhn1X1d65qgKEhq8XrJs8QEB3MFk6n5tZTdw3sWHsur3g7zshoLgN1jCBwhVmSv4Lg1zd8gX75skV",
  "key44": "25bnWHxSe99T64eKf24TjzjypvoVfokqz4egsAzZC5XdhVXrcjiU9tsbkTtjrapfwg91e9pmag6ZEZ5ttpnoDgKT",
  "key45": "L8gu5QCYkYEUxfwrGGUzXiykv5qREGdHc9ysdnPnuJTQJWAC3o8KCUAMr8gRN2AA6y3jrH7kVkJhRtCgXyV6Qom",
  "key46": "5BjPFMpKV9Xyp7BWAV39zpXEzeTNz5Fnv8fFRPSQyp9CrbxXBD2so7KSehcTbdoQSeU26Y4JYpk5JszJGJPhW5sm",
  "key47": "42aeKNusVMuWJp6EpD33c4pPViegubpfuqtkEk1Y9xQCgNirRSqVzYbWcMVr2ZEntNid3YPBo26uavwSEm5KiqCX"
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
