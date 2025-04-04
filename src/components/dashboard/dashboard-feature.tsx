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
    "4csqiZWGUbkgaamGNFatzK8wCR63JvydQg2nP4N6ThFj1DLjSxxRoxXrk5Fi8AqtRmqw8sFPuAHbLZztXAAFPMdU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Fu7kuVEepRt82LFGppGbSAxQUaYAobVctPwrqvSh839KemBHk6R2UFxtCAYVHQSwV54pkUDGsrk9HKzbANf2gKr",
  "key1": "3Mc7n1cYEv3Q3THeAc5GzV5h4ESNQgCgBHbdgey6rvSeSCkntMhtF2BRPrw3DvbakSost5R6sNBEo6uG2j3zfAhf",
  "key2": "2wzBH1LdrqdpcRV5t7nCE9AvRv2hjSUMxcw2FfvYrXCsmvQDL7SdhnULjrur5G2nWrfdtt1w9bdNiJt3Q6Ksbvix",
  "key3": "3Nqm78RAdC9C5CLZazRf8rM5uS7Gw2AUCXoThi1qarT4bC7LtF7UiWxJ94x55dLrKjKjdpk6DhaYrHvr1wZttgAN",
  "key4": "h1KJKhoHcErbnrvQfX64sN6bVTLQuWYac3Hp4736KUYJBC8xT9GgYkqYfNeAHWPF4StjERhh4JQdsRvuy8ix35K",
  "key5": "2sj4Yv8X4H1gnCFWcv49jRnPLsrHkgHVkvNxQZXS5DWznm8qRi2J9dVtSzx1qomD3621Z2tjUQT5sDu2at9hDhDC",
  "key6": "grbTFQxWtMr5dkR4QYv1CPimfCiGmSR7EngH5Dg58mUzYZbPTayyTobApUkiKLpzacEifJG6wysM6Dq7qpuboT2",
  "key7": "4AumoDHJSbJRZCuNpmn9ZCuVBSvZV2vqojdsRQT4SB1MUywarJUKGLdn3xp36xB9dnvSB4hz5hD9gYJX5mBMGhmp",
  "key8": "3h9f64MdbXEJd4zpXqBTW9Ruv6rBQshZLRRpoG66jGYu51a891Xb1kaW9BAejtuegr5cpYXKH38YFXcZHiteD1ZH",
  "key9": "3EBS3SVnoD1ztLbVLmgCuZE1NzR7cUK4xKQM6MQ9fFYaVKh1TB4WhrHj4DCAfCGywiRmU5uABGntht5kuhh4TLYe",
  "key10": "4VR6LyBMfZNZwQHpr9Ao7XCZtH1UToisLLRTUamzhZzXV58C5KiHgWjKp6zHMh1Aj5gpjHRKwFYn9aEBk8eKRDhe",
  "key11": "YgGUW7QXERNhXNgEsPo7AAujuaF4sbcWhqkoJ1c8Xp3eQ1gie3VFFNKhVnevbEEVeaFwMweG1kAUzzJtcm3MWyk",
  "key12": "5xhQMpX3F7T7RxevBXg8eaMuc2oARvE2AD4Msc5AbQEsaqL28xkKXutm3GmL9WwaYz3fDZsZyheF3JnxKGGjXrRn",
  "key13": "2nmPkU8Aex2cETg3U38Txa5ti7GS1dDTM2PyCp9v7rn27Du35Z6rSfhnGb2D2fs42rkYiXhABRjHU1ebzTQyviUn",
  "key14": "5h2at1vPdK5adbbEojAptWyqqmx7jrKTm25gZDQRyXyHkqycFwk3X4bJfpqA1hd4ezoihEah8XsUeiPRL5EsFzwB",
  "key15": "5GcxARLHMUedjZN3woM8iYuvPUoJTobbj9Giem8xx54MXNKVzmnQUtDDvBYjPnxvVT4SohGWGgG9R7QabfNFU45h",
  "key16": "2prmP2Yd8hWWU28eUH2YG8Jx2tJi3R219aec4rJbvthWckfSQ8HjGjEa6RWQaX5fVzD8KmTkTnJwZCsi1AbbxbAA",
  "key17": "21UtDjUBVkpMST2QmkJwA6H1AS3quAnKso6xPDx5aZSyG2K3hV8QJEHNSM85mz9bBXKjjfhoUx2t9SP7uXSSGk8w",
  "key18": "LDnutHfhqLst6MukxHCTDqkrYmUoo1G8Y9EXoTkgDiSedc1fQov6XK3igwpoJe5gte5BVpViHbx45HmgR7Dmco2",
  "key19": "DjGQMBCbzWZE7ZrgMm7SRFX7mQHXhoYtodoZrARaiyJRHu7Yi3wQioschU6wSbZ74xuYHBQVU8MFmxqHAHKoFdT",
  "key20": "2wex5Ax7VSxMt1ytNRBGtgAe3r6DKJxy88h3qha45dsbh51j3qv3pJsD4HJyQArFaK1hqmWiZE8sQ6GeZP3iDT98",
  "key21": "62KosBcFLfTHtD14B8NfkrtcK2W6adknZjS2cJvx17VutK9KjTuTzwW8kSE3wN1cdZi7dgDz7VsFnR658r9pxpff",
  "key22": "4GrWYaTmTauzntMru6CYKbF3g4jfiivC1QzY1PVuMKpTMzPUMZU6Yrm8Krgyp87xG1yEqQuS9F2Lx1KamWFqoaj",
  "key23": "efeVFkuTZiUoZH9Jjp5SDXhnkbB8kNqoC3Hoxt8QsX41tLfD96Ghwrckx3FUqowhrfEkBZp7ugU8B9dsyqjh7Y8",
  "key24": "X3oWkPrbqSG6aKsU2REkJ4QYk6EbzsnRafuwxcBqXXGMN9xce3MQ5DWdobj7vKTA9uCaNSAWHVESkDpLN9SyYyy",
  "key25": "5JAWAnGyVLBjTm4U4oRYo48FLkjKois4796gCf5SKwLqXM7sj8YZkCCGEjWCdAG5LfD5SSuJcEoWEsr4Ft7iERnP",
  "key26": "5eEAA721isrnawmG8LhAUBCfAMqWGREM378KKrrFhdhZrpqVGcWqKw2VEsrQZvVfpuoPRuLskyiDzc6dFxQ2SjHU",
  "key27": "WnwpNWveS2E79wb4eY76xqNth6WHP7Rp13f2NxfBqhoE3KEPi9z5Dgp6WRWETDSTynR5Gx8Kk59EEy2LeVKrr6i",
  "key28": "5EZPYWYc5RxR73Kbk881W7Z3Zmnc8g9btmKBFg4YFVFw9N1DucDw1YUhjtPs6uVSDDMBugcWiaUNLsbb3Zb85NNY",
  "key29": "3RFuoK8NiY47zLNDBK548zTU3SjBcA8BpnwbdEW95kYiHLiDVUYdiKe3KPgQwDfm2aXGui8FHvTWV1E7RxN7vz9D",
  "key30": "4WfsEnn8hFU6pGPahx34iua5ybM6GvTfAqsHcAiVLfv6ohbDcFvJgzcRjYG2zuCSJeCsdKfuunMaBLWeqcu3RUiC",
  "key31": "h3sSW9JCiC2AFpQYkBWEKu4NxDkpB2KtTDuzVhjXPwTLUBZAtNGsr2QNXr6jhyLmp8rCT7s5N3QvKTkhfYBM97Z",
  "key32": "5AV238DGjJ79os8Dv4zM2nxeP27EQeP17xLRvrrqvvyZHZfNsn9Csm6zu5cyi9sypYvQ2oRrosWMC3us1FJsirkV",
  "key33": "44bte2qzFsi22Xkqdr4aJqnJLCyBg2QoWwsci6dyyyQbL5q6iE7eRDEefzC2HwvzHVtxYYkKRzhQ9rep3YSKxkdM",
  "key34": "hnAzYEY8QYNCua1ohG1TKvt5ihUxvhYDYkyNbfjeTWDmUwkzb5iKKMAcWojxVTcm5teYxLhKiYmbHYDrofwChzp",
  "key35": "4v5v1Nc9sMmk3WPBtXykm2ss1Ew4HtEiLu7rddY9d5yHyQ3fH21C2Zhhu4M3c8i9ysLXvzwY829QVxyV6wJ45iNq",
  "key36": "5mCqqihcuNk7xGJWAk7AxqTMqCXHg6yujMSTvWPuvaTQ6yuVDw3nBn5Sc43xJAtKpRmhN5WYNeM1g9ngXDedVRbA",
  "key37": "55VzbV8zgdaGxLYQPTFCihZjP3Eu6tfEtFJUiTDWf8xD1CCJUmGxQ2pZ5t13rDF2Ja1j9q6pbaRPcfnt2fQCcYfh",
  "key38": "3iQAAWwx3Ag21VyXG1y5X3x2FJNaWnTCyPxnKJyvXcVeMfKHDtw7FWbGSjn4d5gUgGqGWafR2KKbC6VakGCRVv7p",
  "key39": "4qGyectBrWbcL5tgwxQMuodRue33ihFQFBvhr5G84dXRWwLWGyTosxizY81y3ZKLtiiZuPdMKEoe38CEQb5zrnpH",
  "key40": "3cjySktGCwmdwtttVd1Vj4mkWUvkdgSR7nnt44NJZwdNBbBAthu5XR3tGL7Q9AG5qP3uUXp2ii1YwcRcNcqT2VPN",
  "key41": "29SPiHMfKfsMMNXVvZhDZVSYcKf76fZqKDzbMsUHQMXfRBPhqypp1ntFUnDgehcEo5eAatDRRhFW7RxYPJKPQsbe",
  "key42": "3ANe7CSx6gYsLjCebR215p9X4Sszr3E93i5by71CnPPee9ZPEFxWCvyeKGySamKbDBkrz39ZAyPXGDXFLe5obzhw"
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
