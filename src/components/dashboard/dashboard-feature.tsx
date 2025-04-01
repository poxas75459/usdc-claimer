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
    "479rvAGsUQUJSGG3ZGCYJ7WNao8erKDi6BhJxHuHiQv7d1z4MnfK2yAdscV6Gx7sYwEZCuz3xdJKx5GqnSeH1k6n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67BKtHwUSZDWFAzH64tDrCBsPSX7Y39oKvyqXx7DwabJtVHMWTVtRTjAfVkZRjzJLzMWguTKd5VGgUava877dojY",
  "key1": "3EVy3eBxJAmQkkegpo9pYtmHFqbYy1ZeGYqmRTdeoYfDpczyYeUNW5uLaCwEVG5RetxvM6XRa2qERtTER1NGdz1M",
  "key2": "5iDnL5uHHJNB4ZjGWhGhPHoxSGNDwNCqBRVBCPoJuVTkKuzt953rCzRLe96CxUEgxGk4opt6qUQXLeYjPhLocsAi",
  "key3": "4sKrbGWPoAHjcRsvrkEYMUsyoLgDH2YihMarJ7N2ydoY48HZZVopn4howLpqj2uhQoffMyTCSpr2KAF1safewbT5",
  "key4": "4RKFa2cXksSkGncy254zshzv4mdUJ65yRHLsmcsy2Nc6taLEcfT1wSAqXFTdaeMUhsrVWefRHbj8YocryCeBptCg",
  "key5": "2jxSw4vpdpV47tSPUGEb2rMBMwgHA3rYdDiBac5qzpZykSyngdttTNFQNFrik1qy2bLQhw7mkFqQRy6faFNcAbfj",
  "key6": "5JrBqTvbXEL1Ki5vdLgzWDP4HKPwhJE8UrC1LHoXX937YtWN4n1pbsi1dTnrSYdSeFUPSzmjBMh9xTyTNTx6z3Db",
  "key7": "5TXY7yhpmtmmi9EmXSjWpsjPJTarSKMbJz59SrQEEBStK2onGkc6ZPXPyiRDo3FYRgurWa5KbEMvaiDnWWeBHmtc",
  "key8": "3AKQS9XbnAJgU7jahgmSWs7jVbuLYt25BwQNgB6bjwQUxbwRqaspCcjznnVYSMXMVv9M3bvbH3UioUN4NMRZ6zEz",
  "key9": "2PPirzRNmEaUFQLf3qr5TKPzT3EghsDkxwHmoie3Q1D82UZ68Tcdzh6F1fb7NykYxwDZ8vXAUjfwux7j2pgr6WBb",
  "key10": "4hAKZtB24mJfZewqe7YYtm7cdp3NrjFii4wheimPhbHiqyHhKVvXyoUVVfGFnN2iKuJqeAzUvAwyYzHDUoWtYsbw",
  "key11": "Am8RfNo6sZ9fgv4xpaChHTrSwBWz2s7GwpaUnrMarom17Ufwjvb1hZrXVrSvY3yQJ925d4Fe8XXK159P2tceTyP",
  "key12": "KvJDMcMZJdsWVeBJqKnwEzBzv3UiuHPnebfru47yjtk4wUFA1Gbw9ys5gwjRAuwMSi3gN4QgxRgye14oX7wTGBD",
  "key13": "4Bu6aezGWcC4c2XutuvDvj4VzkMu5ghwvxzaeJyotJYrfPTBHUvuphGhfuv4xtaDDobg9XRSumR4gTAqenRJgxxD",
  "key14": "3jChZ7fGPz8ocvzRMBxtYiheM38kxdTLd4FrK9XZpPUTTG2jmT4o2uPdxcpYREgFdii7jLnB2RzJixTgmmRGjtv7",
  "key15": "34su6g4gzm5tRwKXGSQExY4NETAzEyupoRJiNEAV3ezqu2ar7UBCCrPtKT9PVobWSZdipH6oUgEKaUGgbPW3VRfs",
  "key16": "iFFA4o8DKPfZEQRwTqAu3orsD2aagmKUrxcb6pP34jm5Hp41uHUwFB6DrQsJvr5C5XEc1gCRkj7gXutVYz6XKQQ",
  "key17": "55iyXPX5YY8FnQJ4K1EYQXArduUYGQF2Xgx6WvhoWio13bBMBQ8fWvxwYtnPaEHYKRoTUnkRngNPpMGg3MJUK7Ej",
  "key18": "5b3TK9EpsnBXexaWCADhz93fkrU7LzEuuJnFZauepcAFrvHYY4XJmT9NrA9RzWnftkHUfWnHZ2G7dcDwUEWCJa38",
  "key19": "3uYquWjGY7tJZ3sUFTGfar5dwiKSLB8gaoyutLsX4A3hpGjBZGhcMtTXe2MZ1f9siLbnz5ee8gUjhED9AtvVhzzZ",
  "key20": "3EV4yfj7rMg9upR4Mq4JPvK6uuF4v11ViFWC443Znr5NcpVBX1Vdt4ZFQpAEqSmRjT6DzqtHvh5E4t7WScamzsyC",
  "key21": "5NAZFa1UDXBQsfAUjZJrFoqPM82tdKnvqdKXFSfJ8SiDDjajt8b8yxCtTMJPSLVnVLAQ3Nu8iCEnyHZstoiorLix",
  "key22": "2uKk8Y9UXThJnp31i6sBp6MtWz1oLwfxJLdAscSyG1LWB3mAd6QqDTq37PmkrUALgtcSEpi9jGpVEx9BzjvHiQHp",
  "key23": "3CZPfn1vSJZEfbzHBp33gQ7vrbDXvAneM4yee2Bn8iAGcgLTQZKdvUjAzwzahyPqMDMDegDKBzP61ydkqXNi9hBx",
  "key24": "cCEwCGpEXrLB44FRd7cqqtU7YZohdNLFK9Wu2cgMWq6DkRwm7jw7i4GgzSEs6TFK1XGz1D3QG5CsVHAS7DjausP",
  "key25": "2Ec69HvrLkdE63bnnhrS92UDnYH1VtEGbiy8drgjB8S3KSHJsQ2qPvEpzKBDjasEzoK7BVfaRrByNcgcoGdsBrTd",
  "key26": "5N8XoFsSzDDxnTzqSSceHRexjbA7qf6X5gth1CSuYZDxnwZPp7ZxhvkU7JeozVTyVRnzj5J6DQRcxMa3a6co1iuw",
  "key27": "5G8Za9a8MUpVgS2M5JaRUUtbNJ77BbfZSg5xgJWoc8bP3WKcbd7o3EP7hufCQo4wavyy2D9bL4m9hFXPUZdk1s9A",
  "key28": "r9t5dgHT1rYAAZsvdBJJ11TtiYLQkL3eDytgEC9aAN6ueZnQHyv8xkt3fAPaSL88BUaU6zBmZgqNspe4iGBS8JB",
  "key29": "4WS4f1vJmiobQmumrrbXDaGp55mwh7hUNyVEmQdwk81HxUYBcworsEYpPRz1Mgk6xifgsdndo17AdB9MiJTdGw23",
  "key30": "4xND8etHHU3DtcGLPoT87MoWf9MmHdbq7h656uwCXPqsZT2y4xBbJRaHQZ8ptSzQTwyutVRkyGVXUkc3g7nL2Ftq",
  "key31": "2anuUGDdeBATYFtBJwezwT3S84VPSsSwoerVJqY9tG6dQDGQmiRjmNfHQ5BX9Wv7XSCVpocfK4f2ARJDoN5wenFT",
  "key32": "3gxJyKJbvdKCjNXiL133svnijhnEd3DiJMvpHLkGiwSPVPipuwEMx5SHSSn1NmYaBgHaKJe2NV5FTHW5caurPLxE",
  "key33": "4YwJ2dJpnPpMpyJKAkx6ri8iecewCkkDWWZ4s9mwumYqB4LCfe7DvyvZ7Fsi78p7LLNvxphLAV3VxyfWUGA4p1mM",
  "key34": "636BeDxLmFNc1QsRaZkXkSmFxsAJxNRAUke4hcEMpFVRnDDMwnrwfSk7sa14TcEdwiQkzCQNsZE5AF8JSPwmyU38",
  "key35": "4FM8ZFBMB1qe2tfh3QUY3fpEAc5WefHNvD5vVrF1GqGMy8vygW28PbpN8GB2yaeajdzMCVn1LEyAK1EKCrvbaAjK",
  "key36": "3aRYpZtRMw5FPraTagqjKSQoLDPMA4Epjsyb7FMYdSUcjMVkEiwgrWm2bf3VBNpGRqhwGAXY58362cZYW42GVR4m",
  "key37": "qJXqFgBoPzwvMZhaAG3qGgzA6befd3Jg6awAjiPqiY6rdGq8f8GsVScigrej77jJtY3VF1Ci5WvG1g9xGUax8A5",
  "key38": "n3nudRcNNpjFpU3AcLgv4BkpthXhzwCmBkvwDpmWVjznGrYeM5mZQHQBHDprkjFjB5LQWA8GxmSD5DPPBkC8dNd",
  "key39": "EkZJUBfPZdQS73vwPK33zacE7CgHWuNDnRa5RQzYwkvCZtZbcMSxeTtAGDDCkFeqEttgPJ7hJcCXkmaLCNjMwUp",
  "key40": "3VFHwqfqAgTn1VxiKQ78snRkZimoWiXAVjN9kGGRfJmd9vjd99StRDyMVNBgeFQ6vNT1315eB8WKLeSS46T8a2WK",
  "key41": "6763v8z4rRC5GEXJiEhjgvJxCtEpXFU9nee157aXSsS5N4jrubuyHYNuv6R5Q2y81eZcs2geA7m8FTtA25K3BNXS",
  "key42": "29FfSicE9ydykaJ1h3b9xFPxHEsRGkE4xyFGQ7EfoQSb7X1M48rftigiZfe8Y7ojdrsNZVW6PfQc4dKEpdfG84hr",
  "key43": "HLPzkCjyu9oqU2TDXDZXXGdtqZmMsNex7bteuUHvu1iYHNoMEZW8nNc6Nx5FscT32niiuFfg3KGWjoTxRr3jLK2",
  "key44": "1auxowusk4jUyavNa56Gz9WrtAnexVYCLHtj4BbMKxdbotyPzsxMdWbE7pf942ZVMKeegiupNhXNmDcDvv1kUYr",
  "key45": "2jukameMd1nK6QyQoHr6kRcByQhdWXXh94QeCes6wmRxDiA66RRb5w7Jgyf2PLqH2V49TsmkGFVizPqHW6XN6Epq",
  "key46": "383bjgr7UdmnYQEvGvS5VbnghaVksHJ2e4DCLuFLyYvAha7b5PM2j6Z1RPUYUPYxinn1pGpnStoWvtSY3RicdPUR",
  "key47": "bKKjidj2Z14vVphvXVzaMKFJzWexp1e4LbYAApEPPkPffc8zuh2xuz3TpgihPqAPHoEx1eHP41mAB2DGURkqg5i",
  "key48": "3dczoX86QeBVAK1J2PcwF1npGXy34cPqCMXVaWRAGUMFyFXS7SYcEkprEitTzomVgvLoZFcAwxZStcCtGMegeU74"
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
