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
    "37DpYgBsPyhWhu8ELeAhZLKpLwV1J1KvhzGbLupy6XEz9ia3t3g5sJBgRRvV3PbNW1XcxuUbZ7CXq8znNZxneYS9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1LchZi97jfvbQ6hHE495A6q1s9o9PwYcXc72Jtb9ScM6J7DFj3z34ncguv6G36jJ5TkdDZhZeA2z6ZcCtHxY5NP",
  "key1": "HKdhs3coCJSbEc7imqnxAyiz9dyU3yfiaqZabwjk4wijAP8yRVKDydFeG5mPTNBgZdXqdzA7DYXd4RBZSLsjRUK",
  "key2": "4hhkwaX2BjeZJEcadEkGEqSv1cKLcxsKLTYf2Ju5W4Do6iGobDSp13AUW2hoX7yiGTsHEcy6ow5LyhZ19ndnLvyD",
  "key3": "2RX1B9dZRbU4Cw63SAqTKM9C2SS2kJiVisA1RQw5eXWQ514dvR7ueKjKytVhwRk7feECnAwgjTwGjngRyjmQuEJE",
  "key4": "2tkus59N6M1yweanGRLyPWNKahMmJAYhk7Ybm7RnVm1SHvgE6mrKVDK3p7LJ2fr3Mg8MNicYSuegMjkyyd1HfnqX",
  "key5": "2Mdv4BVBrabQz5Z2hBDqUFp1U37b2vA5HPCwLEb2u4JqvjzExWZJSAZ5XcUMQMaRfWEP1NYTmYZY8yppyxMgqYH6",
  "key6": "29NXRaXz1ytVGDkGNqfYCA8ChYwYLncPMVR6GHBYRx3muVQSwSuUY5W7nSZnd7XmeHEim2FrseVHbmVEBGtSJphp",
  "key7": "5L49J1FjSYGo85Kv2puWpSv5eMCndC6BztsDG2j3SkehJ9zsA2wZXkEVBM4S7EfhaEoTz2eXQ9JhtmLoWFYFPyTJ",
  "key8": "3kx1QXMp4oqo1ZgRrxfJeBVjpesgXYvfXC6RjoVUs8mwWhECrVontL3GSiQeW6Sb6mk56RzaJXWrAArxym7A5pGW",
  "key9": "59WdGMqC28stBXzijR1tPqeiZBLeJBmdzvnGnePovG1vDQWi87oGKfQjqPKshG1hc5dphy2yj9CGGU5NNaAfrpdu",
  "key10": "2LWtQmU8CUHYbKESaNbMiFVpNuP2Qv4LXNEC8hUbFhzNKZQMTr4ZAD8rTkeJCx2eD15jf8Ck1d78EPdisVDWtETk",
  "key11": "4fRhoSpZytxZzTueNnqFwkFDzkRWELDt1FnxmGNhTXn88WJHbCxA4MWnNsEEAwubyXLMJmVrZD7oVbmCPHnxKqKe",
  "key12": "2YFLewMFgkyAjnLzSUAYQAfSWeJXV9TUvayRk1LMUs4qGmNvauSiuzmQvArTsBwo3QbxgHSjvgY9JXBGyStdBn8E",
  "key13": "xw8xRjw6vSJZWTg7UVXUK9jZdtH3UdtCfnNfNVzVjYK9iyPV1YyGaX7gT3LkSYCn6zKafiocRaLQtMGuGky6fz2",
  "key14": "5qDHnuLw6EaKJP9VA15eUbkCgPUxewnCPNZqEwownRx6sLYnYJ6SbotY741ZKszPozq2aMS64NVdC5cMfxtXZ5YV",
  "key15": "2bzpGyRVrFYvf5yvuVDtZnmibrRXsufnhufXDx6MixNpNzC5LppwTxBoQs1GvMLkB3yKzQcNkbeAUtSLrb8ekfcH",
  "key16": "4pJyVJnUZjQeLFUGuRaiwh1RCV5z8wsPRWwnQwNkqgYJ21Cq2HxHeQDp8m4LFi4QZ3JRvD1YqScG3RgEaSzbJbu4",
  "key17": "5sXCzHxNCjTFgt7diK5J1X3tfU45pRSi6bsuKRqpDP3acZAJyTucyTrmfozTFiPKqEuYA8ZhZANT7xWgbUkjSE5o",
  "key18": "3AqHCr39uBZtb7H9yARYBwwFhfBpZYzfmjDAnrWB1un1EzWYfWsjzaHyFjZYHbUpuDqqbZzLLqL2GmXvwbKQnQVP",
  "key19": "59SMfGPPL3PSn2J5ypGkhDo9zMgtdcc99TiEyHQi4X7V7x4ep4PrrdF1BJREhX6kgrj37WFdbx2nJ3qXS5GuVzCf",
  "key20": "2NexpsHGAG9onfGUF3budcqhyMSxSgZFiHFLqJStrYnQ1zBUNrpESaeniMeFkk7ufm2YKNfnGXfrrq886uraBsAF",
  "key21": "P5H1F1mBaUFytMidAG4SnSD4Fspi1fAHoXifkZvDzhKU6MJA9hBK94tUMwZvowrV2vzULY3mxcwWrZsDQHWcDLB",
  "key22": "2susk2pfe9QcPWJSvBLVAwWys8SbkicRLrkbgfPPjAadhKRkpsSJDzMhSptvB5nnxLUpcgoxGkBjYEFzdniT24si",
  "key23": "3RpYhd3FHfDN6WvKYZCiBu44yiBhXMdRZpCibEsbiiLLquD6jchDLWixN17BYmFiTNGa7yLW7KKHN7mYhwUcgvPz",
  "key24": "4qy1KA22Dnd6fnjRFYuEphH3HYHVgAxpQMi4ovrWb7MAC3qnyJW71adSnzuLuw45zmBuWfprPbLtdo6zr92XnJsv",
  "key25": "3dbTfSamPSwXrcv9X6ikjrXAVkZDFqSxh6Vkbsq2qL9F2kYsZccxyKYUVpVZWxtAbEAJQoc8dMZPLGD5QjhPcMPH",
  "key26": "4JiTEPB7z6PXHTzwWavXi2myfi7Vod9mKRCEYKTWvM6FHfGqw64ouhJxHqQAr4AYH2Pd3z6auzNFEKZp5ddepWW4",
  "key27": "3JVCY2TMz5AGPBoWVd3URftRfbHY33N3vtTDrSMhPR4DoESHdgULJHomBMrxDJr8AokHPCDiXEe51w22oX9YgBur",
  "key28": "3pCh59dRsqLyPXenqido3u1CJfFxir3SEULzH5H7tqnaiMaa9LdqzfZWRjR6Z91JdBbbYfWX3iGGNV2rjAds5tnF",
  "key29": "3XqQHKJfAe1TUdwwxXStT7GpTUy9FDtmu2jeGvSCmT9Tv4nkCPBTHmT8f6KQ8UmtiwQjAanhpdX9uQ7gC17CA6ir",
  "key30": "5juz7rTmTKfSLaaVY15Pe8sxPnxtsVLc5GjVEtGXUNXtcLgzyYYTqCQZVbLHGjAJgUoqL6BZoRNHx8dMkY7fyfKo",
  "key31": "2woiEKXYzwSjSF4hqqeBLLewqPc18RtRPBxRJDnUNkc9QBJ3gvLiUi5SeU9WFbZCCBZZ9cYeHb4Qn2ZnHbdTvGQw",
  "key32": "4qW2daXYRqKF1RuDWR4XWJ2MmpwH2Mw6oTk5cbb23cebQyu49JxvwcnqcakpNttfvhiQz4N5HpBNuYHCwdWFgKjA"
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
