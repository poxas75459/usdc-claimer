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
    "2EqfS9HxYg2ycnEMppphiKngtsYHCpKnz5XkbPP5NbSRKNisWR7iieFfrWtAcJAg95wxyEiAr4qtXEzYbyTi4idz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QX8jT39XGK7DXNq61mpC2xDNvcjxcLgwrkq93xxCJ5CsDWP8iSz1kTXNd2ovz38X41eBPhpKw7PJGSB5FpLG4VP",
  "key1": "3fJbPcT3s4mXRa3P1dTwubgEdfbbuuzcvtVeSLjfDP3KvVD9o5iYMNEwoLPKL9KUgPzuWoxW4zkAMpTdnkQdRhyw",
  "key2": "gn27qaeQFRLML3wmLXvjuERyUARG4CV1XWSDhprmh6RubQWY68PPvEbSnANFo28wWGGny1CFT3hTairuFKtj55H",
  "key3": "2H7M2Qk1t3w1edtYxHY5VCGvjDgebsUVeNbK9w4jSvQYn6npwUYm3sehoi7auHkboVt6SQk4gUcfz8hDJN7NdTyz",
  "key4": "4EiYuYPYY2JDFSxMazYePpanH3akVNdEcqCRpKiKVNBMSCj6yMRk1B9cawkurkgBSXrM1KPcGo5e2o4525zQ16Wj",
  "key5": "3xM9zCBGSFK1QcH4FjydDXiPFn69eYxNQXjv22obeQCgRzJdJqypacCfUAMicPfAX833Rwi1WJtJoyEhqt8muWG9",
  "key6": "55EMBLPxaD91d1oCkRgnSqY5rZSd7QMTiR93936CLnDpBUzwNvPnPKBNpWpjBthSQfmWTQYmudCXMB8HAittM4hv",
  "key7": "5iQaXg3DXY1gsgvaH7y7VB2TAWJykTyzvZcsJcVDNZJezHwHbkVcepRXdTZVSTRVrsBqgnFUx9iWp2anxuX5zAdJ",
  "key8": "4Emf3GJJ4rvL2KeqPeYGo1qeN5bn7Pt3eq3vV1gc8TnBvyGg6TGJHgzCmA4dVrJW4L6CdLPnhfnwwDjRijLLtQND",
  "key9": "2ftHYNb6hdKKpkPRXGpDGyb9RrN6ExfK2BVk3cSpTbUZUdygW69C1EU6KdgmUD5hvb2oMnew49GLZKqLksfmZQWp",
  "key10": "5ENYUEFUBkRPxioeqdfRJy2m3JJMV4iC7k6kufjxN2s7ab7udN5nM1aa4GSDrsDcAVfUih5tjHiKfZ9bDBuir6MF",
  "key11": "4HhmTRVaYePLny7N87CcYzHypDcXi1URzAWTMGxWpppSoSrhibjq7hG5YUPikSsxvXzEeeGH2f33ZwVtCtZpbKBU",
  "key12": "2v16Ax4WSnWFpR6v4fDPig5cLbFWkDW3TdaUoTmCuQDQuk8Rqw3hSTS3wAe2xRZzSsSPqxXJkef5xCfeyKoVcEXw",
  "key13": "5V8mLRwGScMCuYnhg1vbdUyrib5Cg5SfrHu8bcGxfwkhCJ5dWo9yry8rQneZRtFLUH3e5x4pJ4aFyW4ZVUmHnxc",
  "key14": "33b5JEBsqLyeYRGq8dcGxWLyJzZFuU6LCTvwxr3geMmEHs356ESYzdxHwH1nGtsF5ivwJMG5Jy8C3bxpqkMVuBrW",
  "key15": "gEoX2PS8NFSY27brSUEyoEkD99tD1DCPwWAimoQPLth1bjS9tGWdmthgTAHhYxsiM6fUwMf5i9rnwJb79C6pGk9",
  "key16": "4KxMfCuyNtokJTUHjPUkWfuwt69yRU9fC6NKADXK2QGXNsSMZbL6jd2zHEXzQcKFd82fF9TyncJRwDingunA9Ecp",
  "key17": "RgBjXcsx1tfj7W3afGcD3cSP3vNvLGxBUCSn1wsBheU1CwBjrxLMVBr4YufQkMZfDBeMQ3vTxeDoatjWzXDHduz",
  "key18": "5QFjYxsUU38RrVw2PLYFGC2gakj7yhMxjQncZDC1M7QPb8TtjyCFagqGN5WN9MM3SWULNr6VpAb6v2d6tPMnv87y",
  "key19": "48aDFVCo3SUQmM63Hy3W3EPNj9BRYK85J5sbmd7NkCmmYV2iDUnDHtQaW2AyPXjPzCo1icX6gtkK3ffYfQv1Wvk2",
  "key20": "2expE5rqJ3f7rwmE2kA9aM82hUEdrWUQVdtRsHWqmepVc9hJfq7ZeGYeV5cCPFnePx5fgkRFhNPwWsh7N2H6Fqq3",
  "key21": "5bAjp2XbMe1W1jmswDN81nURTrERaenqjmX7XBNMajR7R8oEWjMtvwKL2AU7Evnct3eQntr9mtS2Z45L7hAyzNeM",
  "key22": "WWL4JeL9PJCUCw7Xqh52gLsUmyUyPHw9yUaWKrSMgNBpaHUdEYfp2Xv4DDMxyX3aPf6P5pnSqo4KRPyTdj4svvm",
  "key23": "5bGctJMruJYGK4T8ikFUXN9FJu9hiMgPmWR1JK1hjxE159MLuamScFrTcJBAn8aTMZBZKfvB9zCwfbQUZj5aBhgB",
  "key24": "5ukYz1EXH6SyMgrAmNnbHihcBPh6ZNq8iRPXPFThVd42f3QeDMAebKUQxsgxRH28H5C28HmnSnB2Mjdy5drECioH",
  "key25": "5MwuZiBH4VoHAABe9ADEiqxNdvgMr6WJdRhfdYvFc73FvP229NbVPUrCrwYBEU9gkNa8CuRXVcWCoiHwycokjKu",
  "key26": "2qQUqMAJUCtsoS87JdeALcf4dYLY1dCMxH5qQuo82SKWK1i2ZeiKW6iRtpgfX45kMmeXzeaiuvvKM9kXs74s9T5F",
  "key27": "59JREJBaSVvhykaagy2ndcL2bUKuDLn7zENJCaNvH7ytQk8wjLwTUzNGp9yJSc8X7yL9364Fhox2VHWkG5xGEuUs",
  "key28": "63RQcD3y5CUDts5ZLuakuvAPBZxyDCG5T1u3bLZPHz6rLZvthTaruGMuqd2SD5Ridx6ezE9n8xR2y8zQd6Rcw7bX",
  "key29": "5MCSsrXdFPoSRpEz2yjsvhqvqd1vrFQGj4936QPSZz3WTrNG3hoejQxzLMVLNT5tugLVZ2qABJUKxtecG9WQbsND",
  "key30": "2cc4qzrZCtoFGwdypU8NPuHKm2hVKBMfwx4BSgZKW7fW48kdWeyCf1Jbsn85VB6gHeYzZfJGWH4v7BT1ubeaGYMQ",
  "key31": "61AeoPXPVv1rGdLEsoRSB6N7Fi1Kyw7jrXy8Qk6dTsL5xNJy8PoNDTrX1MPQrXo7PK7UYcPBrprZzEiSV7WAom6L",
  "key32": "4JM1TNjGoQwVQMG2GVGY4j2cuQ2b99viLDx2TNWiAde4ai6GGEj8MS6KwTzs3NVpkqFcBoTQD8hBrY3zCEH82yHJ",
  "key33": "4oF3ox3ftMaJTpDJeQDnvxJQPuRBHVUfhsNQ6HgNL9A3FHha1oE9P7b4xBvcocugKrcSRwEop38LT4SqkB2y1RJ4",
  "key34": "4MSbmRK1R8xEXTPVFGePW1o38C8ufwpfWy1YPJXo4PjKC995FGCBFVyFgzm9QKbqDTeMdRUFB8eNKv2Rz58D91a1",
  "key35": "4g8geSuHsDtJQ5VxSPL5nQPRtMCRRj9aWqPBiPgMRJoRDRSCAPeUkVcFWk9uBzSKbvVhFtd2xqEnSdrJk4r4Po8R",
  "key36": "4obZb3ar1fvcqAyAntUFneZFvcX1myXyxentMb8YZgfkx9Do9PpsUDnFd5A45Gz8VBUDW8prf9VJuKTDRJwBCE7K",
  "key37": "22dnxbPKZ5zy2FrG44RyPLZnC2aHTZ3vRZmKZiC4uzz2M7DGYHVAEy3VSsrKp1dHUYpwuDx9wUi5ktrPoGW3ixew",
  "key38": "uzL4WzTwnC3drqM52dVR4RcHRjP2LNKFcPo2ovAmAMkwhcenBx2wCjH8cK4jec8G7FjYJzeoG6d78cdYkEob9yz"
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
