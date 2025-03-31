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
    "GjGBhMcNFGkHwghDCXaZSsE1XKLhzjn3y3LuDML4FbMpdmUdJxFJmnD8PyrBcuDLXEhH6CfVHYThKqypgL6i4Hx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p7ZPrDf8x8i4rb2sEoXmDe8NVQKZmiyoxJiAnbQ5GX3bBqyAGTk6kcpHiHTeFK9x8s6YfZZBH1TWJ7P9A3uBaHp",
  "key1": "4r8K9uNeGit2ZJ4qSqtMuUTqRzhM1oEcKxYbquwE9E67Fj32gfQzx1bW84ATpcWqqhGkeTUY4j2zTpVA72RNyAVZ",
  "key2": "4gQqxrMacCd3M3XCMUr3i1JTgu7vGJW7bVcFDyS7wG6CKjQaK9iXqBdC4hY1HmPqgG9jN82jWX3GgFkHi3Hghcd9",
  "key3": "59UQjzWW2Dh8dRL3ug8Ptdamx58nzh5hc8kA3Ly9aqpYarEdErnKLL6rhGRCEkmAnHmdZP6zJfweWqBCCzjRHiqa",
  "key4": "3BaQfW8y1VzEdpsXRpwmCs5P5iVhRLYQ8MsgkfHYHEJB1rvki5AqGs8Kmd6hY2cudC3pF84xjLKyGjk11Ma7NArZ",
  "key5": "5f2L4sfFViCwntA3MdL4jVaMNd8f1Nc8mHEPD7MgASDSaP2xNHw1LFq2xyKMKuMzXSZwQynfvufCMNvnReQFTWkb",
  "key6": "2iyZcLXGXnPJmsPAoPuA8bvPYNAdoXH41btA5XhG5M4LWtM2reSusScaTnY1eUV21ep8sTG5wrRDJ49dW4FQ8gFp",
  "key7": "4DsfV1f294B93zigPLQYKHEtTArt5P1uSP8DMSVixiAe6WxYnRz6DuzDs8dmEmqcc2RKpGyktFDUuRKNUB5niRUL",
  "key8": "4cGdKkCHDgDJtvzWmyVmP5Co3Eva8CLGVopnSSZXkFXjbyLKvw7bPFry9uGgr1evT63qwsqZnQqCVqiJ3asXWkWY",
  "key9": "53wpxjufhc4NysT7ddzaVyCVcBpQH1Py8FZ8AnmJJEL7ViFqxzcHGpchcRsVGfrVQkaHkr2zmPRnzYmF6tJYF6Rv",
  "key10": "3nYfFuwfmCopvuYXo1a45eLAthptoe53x7kLXwqG397y54XpPP7XFLmBdjdQQoYYPQnvGTkfYiz9xem5FML557SM",
  "key11": "4kxDXpn7bvFHZkZn5kyyvJVcsCNHMKX8F3FViNqEwkb3dWZqaJBLbDw39ZoiVUgG3D3UZ1joHLFutw1p7z1bmKVm",
  "key12": "XbrVLy5SnqGByG5joc6tz65FCkP4F6EFfftrBjbYPNF3xs9meD7wCny5mgLXPaRu5cykASkypsAAG22sTCfJpHz",
  "key13": "2dBQMHSDVoQAHwjPW5FdCtfBntivGf8MBkSXpzVCNX1W852CZW89Fuh5ieKYKfbrnWMeLe4i5b65e99ArHuUakxp",
  "key14": "xs1aRP95wyqLB2cceN2GixakEWak7b9GiJkYMQ6BVySUYXTJPVF93wvEsw13s1aT9iaNTVr2dM7hoptC21bC6o4",
  "key15": "WPy4RMLegzxfT2sLkYSy7ijepFh7kRfJwgf6K57opVWv6HNG1aXsmpXBzSAULysNAbjfrvQtN7kyHwdc5r1dDru",
  "key16": "4MEvyderJ2tg5AHaJoDniDnPbq9hgx9mqur7Au6syDi3e6MpUtKGacTHEFaAEYuMdKJSsjHPKEZT3uMny5nZjaR3",
  "key17": "3Ynx9G8ZZgjn76WK9WrEnPTyUaVtgurM9koxJpGr4THm6guWByiRiV7BMKPQC9kwUtWhrrpZMsjhDefsnCUmTvHC",
  "key18": "53eRYvunSz7BDed89dvdsruTwYqcMEgsXi7R3wVpbeyUde54fMUe3Bu4yptTfSKEViUBH2M9kFQ6La5doVmhmU8H",
  "key19": "3cFELMu6F6VGiWpvRHYJhZknEkQsjXeb8nkmwBbna9pcGtzATVpPbE5kWU7eLhvuu12zqZb2MFmbt5bC27exTzHD",
  "key20": "4a89bfq44oea3orSojCbNSpC9VyMMwmCxb3hpWzt6vbd8TZaNNBZHvQWmkXU4ZGqwMqfEmw4TFuVkBWJeJf5o85T",
  "key21": "3A3qmR5J2qrnV1Am7s5EoH7tvryNddxaRWzm44fvDgLD5CYTdJKfgbQfsTbCWRwwKeRu4SVGCPumuXx9dAcbYPLY",
  "key22": "4yiuDS9EnxRMouNZKdNms7xVfsM4sESZ7ZuixBdqrozJmWR5fiPrCDocs3KXRXE8JA6SrjNGMsyS1yYBHa8KTHpJ",
  "key23": "YoyLJgGqSYgeuWjXGDSgtwDMP4CjMjzjA1aTnZiURL69QzhUufFddp8Hj6XQDFqHANbmKpppKSUbTRc8jtgHv6X",
  "key24": "2V2TpFqhLMNFwmoXNgdaME242J3joiJFgJy2kAr9B5KWbQS4RSZC73j5YkyXiFXYZfZd3PLt4wpXEiK3Qp7NWLEm",
  "key25": "iXSHeaYjKeiysjLmR3A578oK6MkFCmEadmLoeewswfp1xXZ97K8PCLW3hWtqMXoubtCX8yXbxUxucvykkb6qHLj",
  "key26": "4HuNq4w64gzCuzGUs2E9SwtGarZhRAA1TGmc8mdZn8hRpeYUHUPGAzMTM1z3QMnKhGuupaQHFDBYyeQRaFQcaVVA",
  "key27": "2pZxvv3wCDsgbwpyLZHNFhrGicUX7czTT5ZvHiS2HCX2fsw9TWQ6HpJgRgWdSUHJexQLuatCHEi5AprwpGkMYfBX",
  "key28": "5jkynvt4EtnhreuvXjj87jAyjkZw2aRCTYmr8HCHDWb8L4xPuma9xZd9W5ceWj4jb3wy9hJTi5wUvjzXGYdG5njU",
  "key29": "3CwxRvUCyF8R9STgZmkZ7AZZHhFCAtYxDWsktUgkozSA926u6EeuP6J7UxMj2N1EueDAacX2azLjtY4iqxQD2Ggo",
  "key30": "5pbPZHi5UuBP8mw5CfXfxYZdbjjaQqBtBw75DkgGDubD71WBH6BBvsBFSwy6VbUQbiovBkbFPy3Gdb12K6iyjCuX",
  "key31": "3hUM6WW7t9rQ8B4G21dcVHvX52Bk4AZrPLdJ5Pz71YLFEFWTP6noAfnTxCFGbCJoejo4v1jA8kFFn9y7sUUZKtrX",
  "key32": "UAzTC1k7rKm7Z8M9Xt1C4UqJpjpnSL9s5MuFMqhwfUd6Zw3sX28rv67smcDgSFpJ5XKF4py6N9EyFDkCmRFVoDo",
  "key33": "5vAxcckUt7n9qNcGGPUA6r1gmVM5AXufwbEeBASZGFxALnPanHvLs1m9ZJNMHNUo6LiKUCBHkNnuYi5BEGQkhMUe",
  "key34": "kNMuDY3b7LgoDxNWXGVsduBoWPR7ux2YrRRwkWYApMum3TMKU8rkeNuvsen4fcqZCgEbf9184e1tkiLxWZPF5no",
  "key35": "WWD8jEmEVWjTkKFDQ9aCDooU6DMVwBr3xp1Nq3qS5N3RjGNPZQR6DKJbLGkqK699J2rt6HubZVzXWkXW23LgU3b",
  "key36": "4qV92et3rSFRXnKnQDRNtUybpECteAUBmBzmAsXVy5A8U2mohGYHEwszi7dfW5UV4d4gJCvsaUi656u46q4zmaYP"
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
