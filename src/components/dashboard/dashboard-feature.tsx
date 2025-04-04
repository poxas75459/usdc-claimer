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
    "M8nvVf7jaC4uEvXoddjcCs2hLfGU4584rRMrZjjqhps4u9Pqiv8kqXEguLQq7chZYGRGuL1TCCnCXusJA6WK2PY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37s1FqUroLaQuGqTFLhzg21hCGPGaWW9iH9an5MLrE7KZrURTuZii83BpL9Kc5w5MEZaqGrCwaZkmFjFVppXUNdt",
  "key1": "2RH5GUnRtKETQ2ipWtzLk41FDnBsWYzHUsBAMeTxN355dgH5VJt28GnLwp7uZUW9dvEXXNe2vr5MnajAGxBjcY7r",
  "key2": "5EVMQ82fGr8XQmckPACTGWBmo41ZAh3rfLoDakwD2jwFqAp8yPQrNpKWQDrETY8JTkqNP91nicwC8CnDAwUNAe1d",
  "key3": "TLeh1ZgkNu5NV7WwPG9mjFcKGsPBWqPGKpUwyhg2X2KXTg8P8E81eLqXxxCqhekUVDdSAAD8DiJVjFPWpNYKogy",
  "key4": "2Yu4o8PL7aFEFZdLhdUL1yBTj4xLTSPn4ZD3eGAKBpeWa1eiDYoXxZ9WYgCp8RT1d6mMTGDRfunAcCsPwQyPksSp",
  "key5": "tu6rqDcEVGTxpujcgQxgKjoK2wFC1JVkN83nsuxv6ysjRoxharSE9RE3hhQYvA1Sd7HXT2UfF3qbxTUaVD8YCmy",
  "key6": "tHWukxtifqSkPa449f6gFWiS9k1gyt9tWpD8wvAgpba8UH4o57kbzqfLziyNUa22YWQGkEcvVgwmSfn6AKsnppu",
  "key7": "2psUknSXb1Anf2BFXgUqToQQ8ZbudGHuVZc5xd7wjMu14YKRST3VdFuG8askDnXHetc6sgQUvPQSRPWyDDLEy1bo",
  "key8": "4x2VcXcrWHwwB8KdWJCUJrQNEPrqHnGc5akfz5Swsrps8pNvzaaTzitbRGNHrhC5LqVXXyVwtkKuSjRa665jiPfb",
  "key9": "5RLjXHAcbHNxDdxhq9bMj4g75WJxgL8d3vxqqGnKnkCmohbGYeWP37g4K13gucD8XmS3DYgPgTgLi9D2WYmDGDFG",
  "key10": "2cNcjbg6PmGMPUysy3ejAEh9UHFnFA8gdVSwuYfK3LaxRkrgvDFn4Ldj9bckd62LnR66PX4khg7dGCii1dy3UyXX",
  "key11": "55UZNt5874f18qgfe62L1WGwRRUUyeVbVgSmG1JwtUgJK85u2ofkbvNynYoHrqzmD6Ejy2BhdLQs45t5Ua7y98XK",
  "key12": "bapet4hZF7Y75HAm6NCYbkkn3dGYyp5HzsKD3RjHVhWnUqCtnWUd5R3bB5MNFYHWKMpcyjJhHVC3k3sFfJ4DN2F",
  "key13": "5GoS5F148ycJWj3caFTcouwBexruZqtVhwXdigME8MNutnDt8D3cm12cGUhBk2gZ6Mjh3oeQWwLhnum65x4H49m7",
  "key14": "4RF4KnQ9axzLFPCuBP7vwqZMMSXDwz91Y8H2q1UhxexjjqsJ9xkrpmddbW5hYg6iVvxVKDepfLLYwG77XG3Zh1KV",
  "key15": "k3wPFA4JA6wc7buFPyJwKPhTeg7swLTdPSZQSAAKUhQ7jecnxhHvzaoURCbWiCwxrhyKeYw1aCDuvSgu81uAwN3",
  "key16": "3xHA3HSdPDb3j5UQavTPM4nMTxNr6eTD7BtJmAiCEyeU2qEeFnrNPjN8JpbNjyVrQUJSg4pZ6tXw3Wj4RH4ht3DR",
  "key17": "kVgopy7KtJniKeV5FxrkZBQ7CF7XNcm74hhB55QDq6Uf75JqsvvNsFAAqAgF5m21fKWeWeTK1wdFUnp8PdD4VA7",
  "key18": "5945CYsWLtUvVJqDhkTNhGjLkSYFZb5gR3iKim5jBHe7j9uN8NY1xyhhCD49FtwNhS9QoXFyoiA98dNXLD47Edcj",
  "key19": "3FkpMuXcYqnJocShGXugHwtCUfpybreyiHKLFQKFUxn9gedkQUhj1Cm27m6uz2gkc12HzidjexCumuDpPQLWFjK9",
  "key20": "5m7EKgFry2UMJaVEWpfVL8SwBBY6WJ2raVCrmAhfuPNQLkzBokB86kuEMQEcVf4cMJu3vnS7mEvZNBHkCZCmJouT",
  "key21": "5oesUPHLEcfKSFdisk7j1ghupiF2fpGvp4mjb75N88hFiQWdXexkYjieMGNaMDbjzzBQkPHasWPN3f5UsQYJhvtU",
  "key22": "5BgtyteqQ54nj2BCh87R5ata6x7kcrGY6hKBDi53mxDQvh99oa9xxnUqnsxar3idUE2Qz7JUg1qSUFLTFEP6FAjc",
  "key23": "4skMMu58mBVZXuZEcNQRDtXjjnjNxoB63k7j7Zi2kwiXzcGUngKFEQhZuRFVfubb559QskXj3irufjH4uRuiaq5C",
  "key24": "47uSewqkEneKkPdkNDix1EWa8U2epAp3CwzG3BXfxrXVH8y4xda7gpdQWYENPpa7gFgC9kccad7LvN4eTg4p7XkM",
  "key25": "51WnrCzzkQNJoVa8GYo98HW364JHdckbwwqEA1AQzU936CxLSM5JmMhYaezoYkcfE634NM4D5asGAC4qx3qTrFdU",
  "key26": "2HneGyRbA6PWJAYh5wUYAhiJaqA9FnMM7qxcjpqg1vbG1bTbdfJLb6hQyRYuNzBLYSh5i5FqamH62bGhkprKhp5H",
  "key27": "3TvHQHHbWYP1WTmDMT8cAaKVbwzGqXGGXoEmEbTJWyCsEFeuCgi4QimcgU2NX8WKGnJVKU6ydu3o61EfUJwe4aBk",
  "key28": "2kfeZrAqwwhtpo6u5ErZ28QrdSoeTsMPHAvumkAB6YAiLHTWDzvCyUPX1xgxXmB4HAMVb4XXnnumDuApN3krqn79",
  "key29": "3Epj3karTrVkpHhKqRN1apixQSQ3n8w6uUK2Rey6kqed5kQuGVCSACwZJye4po6z6R9x9fCBmtLS2fEXBihbkJF9",
  "key30": "2StningGshtq4c1dXYfP1Ltv4cttbfoySohfwicCPTdFRd4WP1G1zevFy3FjEELD8NVSqSn1P45TSwRRPCBYjTP1",
  "key31": "3HCSQEi1LcTXoXiHqFWZz8qdnF4Zidf8ffPpMJNBSYfvA86wJexbvZZkKaQfYHhFQe7sahqm7gmTiC16hH2eLNdr",
  "key32": "5Ao63DESzZEPhfyzgY9rH3vYn7xgEf4w8Yn3NbkMrEEcnTgEkbuPStCWxXnyVuSBYpyapV16sLrh5X3kCheSYH7N",
  "key33": "4Lej4oA1XWTLJdaJEDJzsqtyh7YE7NVMohEpoMKw4Pdt352GEf9zJEpQ46PFctCZ7bdA9wXXwvsJpeG4KdDJa69x",
  "key34": "daeouFqjvr42EQdGHjot7RCMy4PRjay5ixt9T2jqeKxEhFLD2dgGYdXpxd8dC4FPcxs5xpjLSnUcpZ2CNh5a231",
  "key35": "RyJkotynekof6Z8yfVCRL7fFvNRGrENo7Kkzw4CPEudg2t35p2aC34KG2W3LSQt1ESaxRrs69pF7q35podW9YQi",
  "key36": "5UCiSoGHWC5aJZ7WbPPNeCTSvGymEw2mkKgscqLciNumyRpk2B4aRKxWQW7MTiGDuVfiEQhYqQtNem8V7KDHvtkk",
  "key37": "2ve46aN9w1Y2ciiDfrjmjvmZCmjES9b8nLnLZxstgSPMW2B5kSk5dCznRVUBmULtUwwoP9MrfNPH7HMjLX9qKUHq",
  "key38": "KhP7FJENj2UrZXzw7fd7xWzQVjDwUyYi8uuL9YBKtzPFxmwadn1WUVqzFBaHSo9rk9CSY8zojqumYBhykPADjYU",
  "key39": "4o3S92yZPBRM9gW9KtiSpoeB6miooLTm1dqKPDj8zEhhsNYTpChjDtChX29GwPSVHEAPproj2QQWwdpoVAwHeJ2o",
  "key40": "DqPd9KbBfCdsmQFVJHKBhN9X9KiG5UZHjpLfFn5QKmHAR7sarC2Rv1oiKXd71vJXK3m52uytk1VzqRYJT9oHKn2",
  "key41": "4QSWCqQw3DP7srLyHijeAxRfc8jCbkJHAGi5WRfM3q3TENigZWiGW5gVi7FKXpmHVMbrfZtgJQ62ZcKmSKKB7xG7",
  "key42": "4Ckptb6U28uADXTxc98MQbEUcsHAFgbML8yv7xJA4si9DGXKtLp8eXJTjViT7jY8Xi7DkMmw4qK1wy3snDCut66t",
  "key43": "5RvBHKNNYxndPsGqmgjvWvwDNnGjMSU1718LfL4xMptotbs2PBZPho5Sq8EKJ3wg2HCaMy6ZSZrXzMkwin3ADDwq",
  "key44": "3kCycWtTPVeqq5EpktTVux8iiFa1JU8SZ5vg8USBU3bXoHk8iZukUgRk4bMkWXFitgvpn37jJcM9qrC9oX7E11nT",
  "key45": "4q9KzNiJTWBhxkeQGELZnkaVDM4oqm88CH8g1XWZgEVDhQRnx9W6mMU6Di5P74SVtHtwdaifbgGMZhSgaQwAqHKr",
  "key46": "2ZjLzs4xpPUSF1Ga3zFm4SrM1DGvubJ4XsRCVgtpxMPu7xAQXsPChFEM3TMstQUnoGmJ3nhdaoUYDFTsLw2x77KQ",
  "key47": "3GUe6iXgGypxspQEz45yJAF7KuyZHi7dxXBT4iiW8QnrMv9zJJFghftSvRY2K7V4wvMP4NZtmRe5bWUpxWR8dgEC"
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
