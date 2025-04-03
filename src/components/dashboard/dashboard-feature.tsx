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
    "Xbv4qRDd4J1ojgpTgqJMfkmMNmEbE2R1kR5TwJ3ikqbf67hSDPjPXXjrtb9Ros3ZBrMm51TX4w99C7jJafCwiGi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nE8ojm19uFfTcPdQ5JuXUxun39juxVoxcXaeKmvpxnUtw1AHatZ3Yt82zqypyrQrEnFFarsWPAxxBZf1zACt7yG",
  "key1": "2D1FZ546TuYG2MeMRTvFbboMGHiMJ7pXB6YVrNHGzrZqVaPNWPd8fPC4my1L5Qny6fLX9MgLAY4vkqN1DWNrMiGe",
  "key2": "3KMEykrGvoqA68LW625TUZoe6w6CKEdY7xQL9Tmve3S1VCesztoGsQtKTsRHkboWr7VDpMdvKdCVnwu42ytuH2N3",
  "key3": "5X3WjHaMdNA1Wo1czF4W1fafhLp93UD29Ch6Jz7sNeBgZe66UdfTubJdaEa76BsJ3Gtz1HFDbsDvx3vPz1ek6bDm",
  "key4": "4jQ7GM5fSq581CHhGc9ssxWu3eCt2mSfAXRbYaZ3XF3ndetvqjkAZQwS81Q3ABosXmUpbKjzorZ6Knqr4Hohjqjy",
  "key5": "32q7v8wzXxfcK2DEjogLbB58p8gUnEvYuikaLyfyPaGyhtkTpX2Dfq597XQH5DTjXgFjpLTTZDDBnh8ktfJhatD3",
  "key6": "3RjzeGMh7dMwpREie5kswQR9LwUbjnbQtn8q1ZDMzCoMUarBu67ySwPvRqn4N196pbKrK8HRTAnNvLWWPvVK7iUr",
  "key7": "3iUx4Y7r6wuPuz9JKDuQVE9DU3eL6gpBmNDYrZn7mwgmmRUTeH9Hw414RPv4rWzJPRYNR2f6FYLdTbVJfDELwkZF",
  "key8": "XNdZAyCgmHmhzK8QQfwcaU1Z7NnovGuRDjMmWaDVGL7bc9yv4YPR1uZxdhrJWjnpt8fVjGmLj5tYpuRLt3Hy2BB",
  "key9": "4eps8QdyRtXTqPT9tUNpPUVfTqVcBZCGf8ByEoqu8p2WsGmY2eEVfphDNNH1MvHMnsebPX2B6yLfUBZNYAEzG6Fy",
  "key10": "3L3h3VMwytnDnLNyaiQ32XJgPLtep4M5iAiBgmCzFn1AohptgVyp8EJkL1Uwk5Hb3jdLQkZjdnyQijGGygUKJpCQ",
  "key11": "42ZZD7hnvWPJmukCv6Kbp5ddRhdeHgFMX52UzHFYPjChpBwiKEJV1LaTfwHn77t8eNAn6JHyRSowkt6vVwug8Dro",
  "key12": "34Px6aVCqLv5qjkPL5xv3aSCVzwx1baBduDy2uAfRsfbqBpDa8ku5GqGKQLKUHAKVV3Q5baRZZvkSw7v8CFAWYHL",
  "key13": "3hxMSTZxkd1NVeuz3LeJpQmUJUXtqnjUxBffwsrf8mMqSQtg1rxMCBLxYpcpvtm5CySvvAzaN7GJ9c58BXVq76ES",
  "key14": "5nTatQf3XdFfD8wU8nQoHiVefFkshtmPBrShKYBJeALpMgp6smEqDUCEc67sCiDMPV8ecAr1nQqPhAaK1qCo21up",
  "key15": "2iB6AGXjZ2gAvxHSdrw1wvgdgRZKNGcekLAu3RnkqP1NCKoJ2U8f5WFm6busXJ9MXYyV1Z8QinCfQR9nyQetRo8H",
  "key16": "2zerkUE7C5bpYWNvD2gWVX4kbZDTGJzhRjbwF5jN8kU1EBXs1e2c8qtALft178vmur8fhyH3n5hLsdgAMRy2X4w6",
  "key17": "4oRAzhM2b5FPWDsaqUhBBt1jwQuy7Rdy14g15283sfoTaV2Pwp45KFhtwKeBtnYe2bWewiSt8wFXq7YMURsohWD9",
  "key18": "3osaP9JtsXMRdWKosgrdsBor3mt278gMFWLUQBpnyiPFdY1ENkTuYN8pBvjdFexMz6r6MUYbgYfeUYuYZAqQSMFt",
  "key19": "38Lg4X3dtgiGSdnMH4rgTjSynSU5ytzDEWfivcDJUoZZce5moZG8aTZSSMtqjUZuW9zB884FnMfu2pijAhq11fge",
  "key20": "2hx4VHG6Wnmkhne9Sv85cjf7dJWX8vtQhhoLSzuowZkUmRfoY83vM32yrfaGtZEQmotaJsKA2YE9xUe5W1oWCw7P",
  "key21": "23Xvs8JC4B9g5qSaP9PU6aiTi52y98KEoPtAURaBwKaC1EMESQgVr1hfbMs2nfUCQgpXc8CFUtwZMak5gBGHoBvj",
  "key22": "5gZzxjHqmsuqJatJKfw9YpjLQYMJmbQN2VNUw74CbLmEmNyCMhMSsChFfEJrQA9f7FGf1dU3D8TDwSr6vfZg1E24",
  "key23": "4m7J9nHndDQty4X2fUEAhDaNaQyo3TzngZpcAspjXTt8TydyKZgUJ3TAQEpjL6QTDibijJpmB9T1KhEU5EHtrUGz",
  "key24": "7Vf6jCnJ7rgqGhSoLve12nSzeVE1JYiyGjALoGYZSua967VHFmfd4XuCJM7gKcp8PBhhC51SqZCTfDFADKjbXQJ",
  "key25": "36Jfe9PWgXJxKNyZDtmGbC19owQaXCNWnTKqcD1rGrXVvi6xmfpzHk4HD7wu8F1ciEbGDuUyrihX6NpPNLA5GYug",
  "key26": "QYxa1Brp87Pa1zZfi3DyQaCbpLEydZoWQbvRKdT5YKMtCyy96tcMgxxNBtKbCnzZVS3ZULxTSxw3KMEncmM2mCL",
  "key27": "2NoDmF6GbaojYZbos1R7mee66FWpKkAMuAY6rVnQ6iHEd79bK6zHcD8NYdevPWVei3w3E2BWZeNsVHHCQ4taNfk8",
  "key28": "515h31fPvmem6qat1dBTtoow2i1ma1BKvMuyejRqycazar3sJLYqZxcVNMniGpXfqJRjfVPECFwShxekbvhvA22s",
  "key29": "5avwWqoozCXm9PdkdXVuusCt3uGGa5dJbuxnVL4HEbLJX6RWsxfTnKP5qADxk5szRiqyLSwUQjgYKjbiPZ8tZj7s",
  "key30": "2mpMKvNwXDNTNewG64TL1FVrMeDG4sjwttF2EUEBsV5Hz1Kr8mdx7mMAdzBUQn62LTrtxWpDL8tyRY4sU5jupszh",
  "key31": "2D2N2ETTBXpzMWBwjKTD4X2NaLkrGugymbzRGkS2LutQf8odM4nhsvsngEA1Bgf4k7BX1X2tcwZSJ9KSpYKMXqtT",
  "key32": "45nHQtmiwrjrDwrPLvvqKqdNPoLbgzUq8DNSpnVUegZhqNFsxqBN4QAGQxPwBiK7JhTQZg3DwvBGHkHkt2yTtpar",
  "key33": "4hcoZhUcqqXc4WuHNZ5YxybTswP8HsYvRGTSte67ecCn33Q8grPcVu49fpNcXZ5P7CzX25mkT9kDNddcBXsvPjbt",
  "key34": "3CFvKY3VRfWF3ZxLQJxhyFHPADegmo3QRgSjarXC1Kx4P8XesHkH1xnVyk8PUNJsRhwSAAXGiQtaLnP7dVZdy6N3",
  "key35": "3thEodnQchE7NX6xt1XGwaVrCy5rDHHcF9mnQpW52RqdoqUcZZhDUHt7oMHa18zswDAjBHL9vqRob51fCGCB4P6P",
  "key36": "3L3CZj2nhnoeZz8xjHpCkojRtx6HQsAA5i7Dykf65JPieBktS6R3dfxEbe6QUypFctqx6fdkyJ1kKh9e8VBWYDam",
  "key37": "35SbssWbJB3G16K47tMMDwAqzNr6gWrYygctgCsco6yPVLGkAovn5fqeC8jhgTJ4fKRfjG55RZc4rEnggWbpYRP6",
  "key38": "3Gmy84DRNHJB8GJGgQN9pGG2kVdRAxjebKwuTYEKvbuqyyUSuwEPrechsFED76nQ5EZGP9K9o5djG1fKkJJawmA5",
  "key39": "2f4K8FhULho2SYVthQqzKnfW1rzJxNtSczWm3UQi8NcjNDwcY3VXmysqy4t6cjQqEAdoronUT9zpZtPNi52vG7eH",
  "key40": "Soe3Wn9oEVAKFMNxXj7KWSJezmnfmEB9ecnD5WpdD3WEwze5tSpBKiJknCL5d9kaoENtJyg7nyWHERC7yjctABq",
  "key41": "3xPmtfvdvhvKVfssnxsXqYMSRC2zGqqqN7Uym91XhWf2jSxQ7nAAXibMf3hBufug82yhViENKdZFJX8PA1BLFzc6",
  "key42": "PGe4e9pU3THow6a7z87zYNGU2Tu6GKKPezk3wPpZbywWPCYXZZAnq5yFf1BVgLa1Z78XxrpmebBeSLBiW1NDqVZ",
  "key43": "2E4AezuXEowb4XpjyUDk6YHyx1g9kRDF6NmT1uCQpUQHRanZTVqXKjbk5E6d5Y2RZNGYJzzQApNuxwM4bJpBCEfD",
  "key44": "3tX3Yfti5yaMdGgZii7xqKnzaSFfrFB8ezwFpL5gijMy7NqaSNzHBteb3BsqWGGRzpq2A9mTayQqVdm81RsSMkFx",
  "key45": "5cbmAz7qZyVwUFotBTo3pWN56DwNniavwMpYhsLrSY4JuSrRS9yd7sGf8NtWSLgGJp9znusxursDB4C5QgjTSfcX"
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
