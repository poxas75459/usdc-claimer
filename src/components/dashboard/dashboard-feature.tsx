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
    "5nyboG5fpahyaymoopiwyqKdWcdkQ3oNrmDKsRZ6tzc6dsTCFPQ92VR5JurRSsonnoy7Tagzw3z8SArC91ckGnVF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VbedX9A8y2C22Vf9Ln3TDtgg66Ng75FvaRs4VrQi5WyZMfq2NWr7NG7vm8JRyYcmpAGDJ9DsKreV2WETN4rKCHs",
  "key1": "3oBJFMnPFiVMfho4xxSPRVyiAmTm2dVGKsE9KjbH43ASGXxA8fa8WU7z2cBvrEDkNufTAx5Y1jkAvh9sxASFGzPZ",
  "key2": "NuCpWLaMC1TNM7g3T4uqRix7keX5rVfsuED3bR57GnwLPi2qx8qwJ9o8CSpuK3ck4VpUaMy9LnUhutMRVGCioBu",
  "key3": "Zrqb6oQ772h2Dq7TAof215Lg3fpxPE6k8bZDHVnggGMzaY1aUCQFg5pn9yJ1aLCttMjqxTwjcLguPYfSVyYbZrt",
  "key4": "5QA2Nn5aeNCmZ7RMsjSHgsGdbwnPgy1iJ3B8KfjMV326aBXQEpNuDNC11fq6uvqhR9V8uoiK7c3s4gdBcgx1r6QB",
  "key5": "4fCcnnVboqVNapKpyb4mC3WMNKVawDTVNWcUJ5yqLtUB6BNbKj5vzJhM9JxEVSbAHmT4ipyoZn4PxSLb4k3cV1Rp",
  "key6": "2pUrnWaQH96wUgv59dUDUoZYcC5qGpEu4YDWyoB6ZwAaM3ZnMdB6oujkeUA4Sdt3P82H4rqTmnXqybpEqpiUMdwM",
  "key7": "4hArjymkWVeDWk3He4tcRrRgsmzZqXKKkCH38LdxEAzR7xiuxRhEVUunbce6SbTragzePwffhs231tLmBBnvJUVT",
  "key8": "en687jA9Gxewfgtqrqs5drALPCyTmuJQgSZhF68Udip1aKF4Q1cwscLjUruQ9Qbzb3rbKJ3BjxYNiZfgVvq6FY7",
  "key9": "4zBad3qpKDWQkUYGBM5Q4ArgrBzba2rgVPFY1SB3Z1BoFaA92canqaE189SRhbAq3w1ZFbKPwDPsgccVgsrNhMRZ",
  "key10": "ZmPHdGmNA7bW8uSA24hTQdKioVCbdc3H14CEFq4LfNbptt8T8U49BsGvanZK2WVMs2QF72cbHtCzosye59coCzo",
  "key11": "2UNXSosNvhTkYCLaosPMxAn2CcAqgMpHuVnguS3gPvKeN1jFeKgrntvVjWPyesNaXt7ABtQyNvz31JYCJ3Mqy1PY",
  "key12": "2eqrUsgGMKviyCeXzo5cLYWWTf6CRWVDB2LhR6Mqwrs33icfBvzR9B4pc5XhQfNnf86rUMnXbN2xrSUbf9um7ERc",
  "key13": "5yT3E4hQDYP7KGD2jhTaJ2sVBTPKnS5f3wHB3j1sWALmyNvUVqBVJemVGidvYdva2dXs52qSGpsQczsxFZUYXGYp",
  "key14": "Xe2bHrosGVVNusnvPE53XbGnmxpWQT1UWRV7f6MoEiWdcrLm1HDphWRG5vynkFuB5Wf4hDkfMnPZhJpebSAh3di",
  "key15": "5LjrkE1QSqsJ8mqz7hJMeHsyUkqXmMkdiPF94UhyWiUG9j2g9EdBagbvUxhsbY3v8GW5ZA7nRa4KmUEKMVGr1hBc",
  "key16": "5T1c3BNEDzrA3QrDWpej7dvCTAFRK4xKs3ZyDAzdYHeVdimqYL2xAwQXu4gCiSJ7kzApTjyHh82yesehDNDPBpSs",
  "key17": "4UunNgTaKMaVR4ezQD9nvuDe6CYq3mezJP28aUywridWfTZkWWku4o8Zc7nX6ipckpR917p2PbXhtWnYap2nqVf7",
  "key18": "5QqcyEt6thsgpMrP4YMSxRR9QrKUAGQNxELhZHUUuvQTrfQGup6isdeRHa5BamT6hZWLu3nMmWQLTJCVNqtn6BJB",
  "key19": "4Y7CBoUvFmY6SjNwCxqnPA2bQXq5uYwfzEZR44Ppo37wwvamjgowdsfJEVGNZYntGWtPXejYQkDH6qevyG6SfYbS",
  "key20": "enzyRtbmwHcqYt5sLiXcXTZrPDKVaBp2ZKtnLf2GUbWiLoBsnHiDfDPg6k6bkVU6XSjH1aiw2XggHF4MtQJ6Mjj",
  "key21": "5sx3ahmPodtPmT7g9aTGSo5pfUifwuTo8KAga9wCfb2vaMjVUy1xFzxvsdhs67GWSDvM46uGg8waCKv1AewiaLoy",
  "key22": "5SieJrFz9hmKfY16EdfC2mwaE4FJG6bnVKpKE7VwVDHA3WsF57iWu5nb8M3HzwLvQtfm2mxA6iaNWGzkRoHdZhvR",
  "key23": "3xePp6h8rYnbYDemGb4XW8sdXYAYQPZGXrxmrcXcEpwaZw7FwZAnNqEwMF29emMzzAwBYJHAA8VFHscZkPVBQDte",
  "key24": "nBvzGxDZTmQRaSc9kHAW8iLyeK6pbLfyj39r2s8EZC6gojAWWWurYUFV2ct9XePdQhkjSA9qrcUX9on4tHAy2b4",
  "key25": "3xFVpA76sxqMq2fMARWAdmbr56JCCAG74wXET6JWzUBB6nU7fU7LVNpWgwECrGdzB4w6AA4crrj6YX1NFCZgeWhS",
  "key26": "5F4X7NoMiH9hDVfrx7mVLJ5rLX3cYeZv1TRP8uJZHsnRMXeb7LPEco5dEbuTvKgtd8Ypathr16gzS87VckYPQ3ip",
  "key27": "d8LcRm4HwTwToMvdJGCXnUnnchxCMc4rUj7m3f93PuQjYnjx2Jvj6bxqAKKARWqnNcRoVYFFGYh1TRX6H6UqXp8",
  "key28": "2HABhUQx7cCRdPz9qxYJS4gMwPn9QvCEn7nBg4u1gVFgP9NNBFcHUEJL88vTaLiHCsoeFEKMBthQH6F1pqK46Pof",
  "key29": "4P6Rr8rzZz7oJL3LHSXBCyzXZHgEzWrRwnb3cXj3HHq6oeVVTpobyURyBE2uJuyFnL1y9fN2WdziASo4xu4123th",
  "key30": "5L7HNkPauf4Zm8JcxsiaMVCAJVYv8wqLUvy8BvF7pnri5cuP8jzcCEsGZpmiSTwau8Nxn4aHJcihwFfLoj6vDXd8",
  "key31": "2RezfpzMt2cuvmAEbekesB6ua1AM9zdovLF5cmKjqdWcjkocauEtyuPTgKySEDhxTgZStukLD2yCAbi1qmQezM3K",
  "key32": "5CAjkdjR27UbQ5kZsCJ3wCkyYtDWZFXB28N1BX3jbkaWJMwg1W75pdXQhX7ytek9ehVQk6fjsALdvk9Gmav4aTws",
  "key33": "gPLht91JKcwD439iy8PfEzKsjoebd8PFDbGEbK54edLJaX5k8aYC4oG266EgieZrQC2DdfjJR8LtwBDVzJBvpTw",
  "key34": "5SxMcihJYreaVTwYV2DWdWfBJhLMkcqdHR7tn2JcRZ4HXbAi66wH4BJHMjGdCAq9n35596f48PBi8XYwUwY5ELzW",
  "key35": "4BJ4Gy7mArjPkkKzeVkgVqq3E5ZZqqpFboX6SkMsrkp8Rp4QV3tRxJtbVi9PA6MveLdq5YuyNnhq3dmq4qWUWc87",
  "key36": "5wfR5x1SmCnmcWePQogovGBEeRMwY4GhSDvPgjjJAyz6AF1BgNHoDfHzys9LtcezinkcSbR4vabPpVWWKawR5d5t",
  "key37": "4Wcpu25DRDYDuXDL9B8TQEbkWvrtjixUrpSasnfRZ4R7ED4aLMv3avm6iMzN4gAQGCJnQmHdFQELStagesxqrPcr",
  "key38": "2kjXFibqBMjRtNHUQzHyrBuUkg3MTrQ6cEy41scU2xJEeBDmt9B14pr3yRBvb4rMu8S2KqGQY1R1TWBPSC8VUhxP",
  "key39": "4K624tFgLSvEMsKn256KqRDwsnkdoAJvP1EfuNbHFxSZeEZe3bqE4P1x33bwxshs92jEH5BTsmpBzSRqo9ecZt1J",
  "key40": "3hFNCcAAPwtRa6VSfEHACZkUN5QRgdaVnBWSX7FrZrdeyrF5JvbZD3ZdPVynPDsjzDMPGyoEzXx6mCLDJCVMvsfG",
  "key41": "7XD66RY4eY8pVjXyQzekUrNPQjFbUEaJbspYRu6ccLMQRNbPc81UWt9W43PwxzAsTdg7MWDPnq8odUiSk8i3KaF",
  "key42": "4vAE5RJqkAhhehysZEMgrD9Dbxsi1EW5C1pk2K5QCYWTR9E6VPtJTQWmqX1ZNnWNGMdh54eDCwe3Exkzt5QfL8JS",
  "key43": "2JrWninUS1PPsArsKPAujmA1DpZ9cJERLHjm4HUDV6PFvaMJ4JH6ByazNkfsusRZJGsWuSvHuENtgjwpxgP3Qiv4"
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
