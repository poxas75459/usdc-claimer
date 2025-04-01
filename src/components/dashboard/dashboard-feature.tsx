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
    "3T4tTpcKrrdfFm6bUxarxfyM4AhsBVgBMUQAWRQqAqCHnUe97SokrThV1vXAo84tFw4PUNiDBT32697Fi99RZM6U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CSttC3qHbfYv4SMCeGtRrduq2H67mf2hX9Fw8n6xxBbJKets9GFEX14R58P5DcJFC8ZTQNfdSn4QupwoZa1PNNA",
  "key1": "49q4QYVvPfPCSCqgzSUVxVA7gQVPmSp2yAQoPhgEiCHVGR2sD9Db62HYh7otsBmRYbdWWhztVUhaxJ8FGnUJkhom",
  "key2": "5DhRt2inBEgxGkKWwb5dqEBL7W342heSYg4c1UyDoFDaycEft6Tkiy5bSiwZnu27r7J71cd1g22fW1iPAcjPwDHj",
  "key3": "FnZP975nhWuKKVaAsYKoTwuAzzG8ZRrk5muWYFfjdNKGxAZrfUvfdDpaipsXayfn2uNGGPJTeKZQ2VCo75CQZjN",
  "key4": "39ZV1ZywEvYiCWS1b6Zqqz36DfmQ9N9upW7psXVtAwZTckiMgtTS8AM9YxiCM3mEWXgReKiXKVV1vn7Wy4SnVXNa",
  "key5": "aSxXK4cvWyWuGPNfGEMU6wJGosiRXytygAqzNxoi3LGiwKxU5HxmhAwX4N6iEoq4d6eSDQS1Jwkm8hgmtkMjr3P",
  "key6": "3SDvZwQNwEoEhuw9TZoLAQ6rTzGyrhmphNFzB9gwqRFKc8YGtbCaLwgUzXyj7CbBpTXqfYucEAq1pwpxsoMr21Ws",
  "key7": "52iwtzpPZMvyiuVyCKXMZacAMAZHADg556dCMGuC4NvWMV5MaVUodB1GX3SwMBJQmevqMvBdv3AFPjdxFKstoV6L",
  "key8": "4miQdz8cw3nHEGGPos7iby3uccU43CDaDg6mPrYtzWUEkeszNNvMYgjUSYbTViEUc9ndyN2kqoL8KqHAVPR2K6U5",
  "key9": "4MtPQnZhL3evnnExFBdkX1n94DrGv89uVjj35iMMkQHTuBDg3wnpSGDpaPgkkaVoyLKJDvZG6nV2We5GWHySWKSk",
  "key10": "4wJPCL58hHQ7Crx6V3GHMdDq7Zjk2zR6wtMn7AycwUDVop1QdFy7RoKcNJL7kgXtG61WKz2HD2cbWHB6bLdkxiEx",
  "key11": "3TEpDdto7LpLEz2Qp1nqSMRSsjz9s9pG6hS5MZGftUnfF9D33FNxwFVV59qPUyF51WJX8sWBCnn3mMfDAKfFZcT4",
  "key12": "5mUthAdxKz6qSfudyUGMbc48KNQfXgL2YAkfEjBWZuQLE9oRBMCR8aNA9WGjUEp9rgmLAVievLtaUyrHeyeWVx9s",
  "key13": "4FTUv8PwuqvLcCkZaDxF2DKK4gAQnQz9mHCTaX7o3UKah2CUF5PVPZ1BtmdfPWXsbdCvCL46EkjhRpiPjeVz4Sgg",
  "key14": "fSEvJQTUVrAGkq3CAcQyrSKZBtXtcabhrtUS4cTfRJ8JxfWy1i6LZbZJ4DfVrmsfvK4joiHe2VrdbWkh5DJUmC5",
  "key15": "4Dz9Z7FaN1fhM1G1GhHf24yTrGfvkus3fNtug6EbZbB9BtJyoz8EFMfDw7jD3jZ5B1Jm1KVxepTqRkN9zhL8fLan",
  "key16": "5nAm8UUWXSeGy5t4XWzGGj1Wx1Po3HJFpxujGHau1xHmvTRLUkZkmkzGfj5zoLyovNxf9gMj1z8NpNNW196QKgb2",
  "key17": "3fozAGp9zjbDG5SbKfFS8i5rcqo2yynB16YCYzLstCVWmLaL5icHqMQuFwEASaaoFPCHDjHZfprC8KoGfn44z5pc",
  "key18": "TgLHnGdH3n6az11x89vhwKQcq1J9Jb9dtAZsmiiYev6enHobYhU8AK9CCKYtgNvohWCoUXSG4XuTikN6bk5iQSW",
  "key19": "Jw8jpnGyFqmb3ymeqLqGYr2iGyaQ8tUYN1UByUh8xWceTVaWKVsmVmeKxsbeQiAdL1Y6CwChQ6mRYiZ8C89jAxe",
  "key20": "2LyfH1qiQdmGN2TCXv9KU4fQQarmdJtkMBn5yeyLDRrizgFQ1wPphpYZDE6QLCgXmdvtT8zv4fDk48ENpfKsD1rq",
  "key21": "mLDhLVY6p9cauqCUM8hZK81tg7G1E7PJPQYAsG4twTsnLu1qjjAYLfSr8Poh8STAUCF6vntv6RpKSBVceBhu5yU",
  "key22": "3XeHd8PjjCfGvyFQAp25nD1tEXS79cNXeKgucWBEsa3zmfA7ub3519Jgn5PRvuYSrPthHpK53EZJJ9XAkWaasJUK",
  "key23": "2FyCNdYWzHk6YFZcPiaf4TcBztkAcWayxqwvg5ymxrzAQnTNpRcFN3vSSfqDie6EAaeQqksusCJBFdabRpBNoHF7",
  "key24": "2wiPP1wmzyr135wkkZos2HccQvQMMNX1ZaRXb1tPMR52zrRKMpwKcpMAKSbbpGPPoPtHA182ehmGfRVtpMgTdSqv",
  "key25": "4itEQSv9e9niCAKLcaK8tdZTfx6t6WStfXwigeH5eHk4QVmkPSr3s1od5z81Y9TFNnNeeKRm5dH3mHf2BKmZSJHC",
  "key26": "4VL2LdcxazranTbqjDFJ9sNTytEks96X59NeKrgmHBxxQ5SmXnEPBqarCZnyBrVPv1oL91b1tPgqAGKbhZX3xCLu",
  "key27": "4ptxy4cR4FwzUSitFGigNhRumHpSPbNiTdq8G7XMCF4QyAstYkDuRUb48iFqkPARmfHwkSgBRiSM9UtDziPTQU1E",
  "key28": "2cKsyhjtGCTwYfjaV6okSds8inrwH89VytjkWRdhC8X58TjM4iZ6uRnRMKiuzCpS4hbpfpKsgqzAWsz3pZphao7R",
  "key29": "5HyboXb7WLmyLSa5xMsxutXY5gyxpMPgYpSrPenbp1mQKfMkCnKwF7z7VaN74NoCRUtQJCRaLL6dxBQVRKjRYm2o",
  "key30": "32MAEf5Sri92hjaEznUVYtD6RLJvoifeFpQbndZ3xdHUXLzq5RrxqhC6zxhWrNMJFaWduqaCCa3i9fKaB6rRCjWu",
  "key31": "KnGcUX7oFuiqtoC1o2HerJhNy8z25dhfvmcUu9Naqt33Y2sBsH192mcm4SgH1rUVD1cUPz6fvq5dT7rpMbguoze",
  "key32": "3xNfgqt784v7THrjDtAipwwxDGwSgEau9GFnwtyCa7AMz1tiyUh4FtwmGg1CW9qjwcRP4th1o7nVuUCNekKnjmYh",
  "key33": "2A5zs8AydpZKGNyE1MJ2pZmPww5kvvbK5YFsCP1NMGXcdvMYs1k1rMmsqkAbYcNN7oCXpxrLsEevN9Xyfo9ruQub",
  "key34": "2gUQGECnJh4SWEX3zBBDtd4TP8RxAXXPiTBdmPVYnt84SNVVwLS26APjdLskHTy3v9T1SVt3H4tn5gwLBcTy8yNL",
  "key35": "4fYSYDrmcy46HbhyTd7r7MYAzB99SQZcY5jVhVhckXYtvHeLUj5iSxQXTQ11c9BF1bC2tE7ZodDmJTJT75KNtJZt",
  "key36": "3UQCL6aJa53CzPJHfvCfjUg7ysFNsZe7LpjwBYaE55BBecL483G1XW3HRqmoyNycKq4inrus6ukXcgKZZNxY4kTz",
  "key37": "3brA5dQcmvWP4DXcMoEeC6hLunpgcdB3XDX5dmrRQ4QkQU6GihGtPa1viErTT1UVs5YqAfJEdyY1p1zxiSNShMCA",
  "key38": "3cKRZQVZ5RQ5PDvn7ocQMT2bLtAHDwhnFXup7d2qktcKTioexBh3Jt1vMLmszcDjx3cVpHB1GtA2mJhy2qWckvKU",
  "key39": "jZL8qrTiNctjHe3pGN481UAvevNjsfgsh1YafVt1Pba9PsnFRG5aN5nospkeV3VdcCrSSHsbZnVStxvZQ3hdue8",
  "key40": "5kZdV2LyPMrSkrDLqPznDBfYm8RQ5qXMC7pJ3EmiBDUCbcZfdfuTw1ejaH6MBbEgGj7GnYYEeW4aa9Dxs2gotuVe",
  "key41": "5BSPCWNGaQfb4jw4db9CnGm6hy6ZCUgx5JcQ7vYpfJ1a9PingorBfTMDYWygq2jxdRKifi49mrkA8fuSsp8nQa5z",
  "key42": "s2Ntst8Wszqr9Nn1RroTL3H2zByLuzrg5HfCAJhNY3pmkScuD5wbtZqAr9gJJ3L4fDtfgyEewnzAw47PxNU9RG9",
  "key43": "4g3VTjWjKSxhTzRNd8RtXykxYQFSfDq6SkVWVEknpWGCNa3XwvnRhKbc7PeidvWpYNCx6zQAuP1HadaBEwUhCdwZ",
  "key44": "2k7GTsdwRYP75DXHUk4UJKEsKsxEBECNG9FV6yA4vxTH5rbPEJVt4cSh1wznNVd8jqAc4aZkmsUtFCiY4YjzBvLR",
  "key45": "2hnPqEfhJWV9iE9jg68zrETsxWSf198oL24ssD99Z7XbgtfccEd7b9tcjksxVAroFeai9qcZpHrK9hRhUezUC3ew",
  "key46": "2u4khAXKBpp7WN2bpVHoEvTTZrqqsTA8HZWyQ8QTwuD51vQihWrMqyg6uNc6rpFAt55Gbky4ViyTSHEyHiyivpds",
  "key47": "YPeU4boS3EkuCQXPTYBXTQTXZ6WfF982NNPRjRgnrAjkXXWVnqGJMzSW1AiTymf9y1JqA9yWVuC8tncS6yreuxS"
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
