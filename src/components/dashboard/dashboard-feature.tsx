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
    "2BnrrnqJgNBBv5WmW4LE6MqK5nPQP7PJA29r1qNG2Z4yftnX8U7RHVdVmKQBJf3926xPAfjmVdajMwSEqPGkthZc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kJZe3LgXPDA5zFv27NFHmmqqoqoj2SgX5wLWUcLPS82BnVD5Vy9ReUBjtD6XqstYFNGKckderYwKzidD33USVoe",
  "key1": "4R6KBsJxFuhLB2h8aMVJYkF1ipdXED8xyHFWmasXFgstGz6barWm9AVuaHKLH6RAQejv1oAt5Y98xvv5P4z3su9R",
  "key2": "1LujhxKi9ax2titz88jbx9Z6wuiUK9txWBNLDpgqPk5xJsvZQ8Xui9HVXe75C6USgy3fDB7QjdXWt98ZXZKFfTB",
  "key3": "3r1Dtf7CzuqsDWkcuxupZBePLZdqgFTBvQLoBGsF2ouhnKbPM7gKzc7dhx5ATVAGHrDkzpWR3SwV8wcM6pyrA4YH",
  "key4": "2CSg4nUHtu9G1gqnbeQDhLaHdsQ4pmB7kvzWdoUN3pKHq5QKvokPzcfcJTyYkzhKFhFuydVG39fgfZnQLAgTidAj",
  "key5": "9ojMvCC8H5t4HBBZwXvY3DrSX2KLzV2rUSS9eEUXVbRvWk9sVhF1LZnSABfLbTwuVJ3enrRXKYjk4pozH9iW1Bj",
  "key6": "sbUohDoRqJfdmEDcQuk7RGfdUgrnCrLoLcu8mvq713r1obEVJkWF4KgKFQw993BoKmr7vZKq4m1g9Bqk8E2DkJ8",
  "key7": "23UQebi5K6pH8mnvvxATJC2oRuCJiGMqP9KVzbfxAAKDjrANRGHEiqiRbgUYmiHBpQdTXwG5kgB2X96928DhVKG3",
  "key8": "2nE96bdMGy49SJvDBCGfphkxAb72t821SXFbuUdWDX1CXwUabmuVCDZApt4ksJTC4u1ss4FAeVTCmB6EAxjdwnmn",
  "key9": "WeTTfSkTgtaXzbAxadfvXoUCWifmfoDuiQjfc65nFh9QX4aiAnvgEEKTYuM61GoFWiYsQAfSwd6m4wjUbkYLYj2",
  "key10": "epVHAtkmnYES6MNmLHUGuSiPzkeqFTjkKV3i2KNx6KY1eTp9A8mi1YKJRJFoyxcD9w6RyouHcbDhM8PsGbpc58f",
  "key11": "2ZonHPqSvMvrAG2rY2gAJuWnY2pc1EdzTePMkZ6KkeDsVTjdDmT41n5pKrwRRvU5BWoo76EwmBtFd2UESYCjrMaU",
  "key12": "iBmJqMXYjZDuuwUfF9qz9VCm45p5mZzqXd1XjtW3Kwrshkcrmr95PW8eBcBL6WeBdAvxieSkCQ1Gu4eDf2rxRWP",
  "key13": "5gqHnMFyJi3AKYXtXGjaE3Kfk4hPUaCAu1LEmzV7tJsNCGVxxpFuzZfzBb4ByieQ4JYVojEGTqWti3FBBF2RRbsq",
  "key14": "2QUQnaGcZhLz2kKQmbbVWkymxog2By3XJWkS7oFG2r3Z8rSJHXq4vpBSWAxgRTVSRU8ujBi5zjfsyjS5YgLWGPad",
  "key15": "3w1mMMcx7ZpZ8xYTKn2JWwsotdPkCNo2jQCAiLR86dkmndoBnrn4NDNZeqtskkwBgvQavtK6WCVsGHk8oX4z2ah3",
  "key16": "AgNgZgCWuoqXjMshzWsJHzvnuEryfUYyrYm8sdtEC1ZVBxaM7usxcRz2WFuqSjBiXw25RkoaFQdRUPMzwoiUFYD",
  "key17": "64SwYctWxeRxPL8W4FJPYoe6k1kN6b39MRT6QrLZ4NXQUscgjZADsquuhfTFHe3cTmkCZznAyTzqbosTxwkfdUXn",
  "key18": "3SuvX75ADVCgFu9HNFwtXaj1zLeFW6mRSJcaWMTv8uZwTi46nxo3euzP1SuNohLTbN1ytXVYfn3MH2dxiDckWJi7",
  "key19": "47D5d1d7imTrypjTT6dYmhMR6taGu8pVtf9UvB8KH3iR2mZzRwXfnNABMzue7zo2yGXpxxMRhpKaeQxcD5eEvsnE",
  "key20": "4xTyDzLUANEdYjma4Y2sQoQDLa4ceQLgcohKwtT1yLfiLT7xMWC7pdbTjNGtFJHFUQLHttWQ85tWpfXDGrUe5JCc",
  "key21": "5PxsmpErJiC6T6eyoKxtyQ3YwBEnWyVty6UqZNXVB5k8pk7DRYwHwzUn6h9ERn178FxhAuXLwCZUBt1Kf7b6Pjqe",
  "key22": "4uaiMCfn9EWTB2K1qVZhYctqAnTfhKRF1Xn4xQVXvWY1k8mskWKfkANLSjTWRExEcJBNJiUVNYG7cBpPg1wBzf5U",
  "key23": "2pcJPU2TcbZhedGH5Bpq75d2oEPkfapQQbnfvkvh65h72si86LMxVTzws6PuyrNzpLHu91wrqywwMvNCXJWEY6Ac",
  "key24": "A6FAvBfLvhYRmWRrdaQ9Gvmamo8F4oWUBZod5bdVSpz48AN94WbGuftRMPfZVyPpV3rwgTP57N7PJjvHNxAAyNg",
  "key25": "jB3S6byWWYbkckKaWP8M4ogovkG8NZ33GXn8NjMe3T7zf5VADb2WmJq6NmL3bJC9oTFH1S2uwBfhuh2aFmuY1EV",
  "key26": "2pTffETz4RSCQ8Df8ZdoSRxz3YZmhHQg68KdtArkcvqCTf2UAmA5ck1pWbdVWerc6ob6DDcKBzADmunm7D3gUAq5",
  "key27": "5euwV9W2d9mhWmiTmp2C55XTnDSAgyia6hDHHP3tQpFiCgZVEfaxYsQpAYLFnVL2qxse4PqYSuYsNUA2UJ3MACtL",
  "key28": "5eao6PHqJMCBs1TAURcHJyGjGbWkDsWVTcor6oQVraoLnc73twSPrKzbfUQSSBfdHVMwi5UnZnzLqpy3ugaWyDJs",
  "key29": "3zv4HTiTYUFyXEPPdwLzdMpr259QFxQ4TxvFgFfWcbYdiXzc5smZuL3XM7uM232o7jVovmBzkHnPpDqu5xeLXESY",
  "key30": "3MHW6zhWQmAY4yXP6dvPwitvm3PNJkWEyT3Z4QMnJQ8bu13H4qvVBazxd5NCWYTy3M7D2BhXYdDnVujqKsio2F5D",
  "key31": "2jw7wURfKgsuqdzmA2agbo86bBNbmpStN4b11sopnpiHr8wh3K386vMyRZXEe9o19txNUiZQm7jVeAiqNe3ufL6a",
  "key32": "65QGsrnPQXUq77CGyejUxQMneMmnrmM5TzzUVgrxfnCo2c1GCWnyqXDkvr79xa95J2aocZS5giPzjx22eoUd8M3f",
  "key33": "2HX9kLy8dxco1WUwDPAwPRnFd6M745VcqZXRHWPCARuCDcsv4caAV113XaNQnHhpHyhnEf5cPRP2e8Z7oG6PAR8h",
  "key34": "4pdsESTX3fVrAqsU7faZe2rWBYgvA1v3vg1dmv6cX3pLwaVoPVVrf5hpgDmH3QKHmK1s6gJ1K6mEcEGxqL3MBJRA",
  "key35": "2sJYTx8sAgaC1bj9zwdg2fz8QvFERwDd1GSBh7md4CFY97GZhCGoenKdH3ihUmjk12dJfiTzX8kUz2NUVBQVmUSB",
  "key36": "2ynvg4L36SXnznkBjNBaMsyba44gNCtoGFfkRDeuvYNjrNyWERpMAuUEfVCWz573nhgpDChqW4rGi1RnGauvA2aS",
  "key37": "5fhBtgiMVTs263bMFnoumXyZFCmLUqPGEzcH8gEs79dwP4LfUzD9LdUk3xVavmX6D5Uh8SywHEPutbLYysnRspPP",
  "key38": "4c7xLa6E9Yi2EjafMNMWYYKJBZCfMGL8mvXFWWCMV8QWfGbiLuShhsfxdy53YGVwv1abJLdKjdnLaCciB5Avhak",
  "key39": "37HPvmx51pyoLHdwacx98MYVdtpPAbCtY965LrKu4HTMwb1rPbuMffq2cBLwwugL193f5rTH4LCAnCFLmqQk3Fvg",
  "key40": "4nB7J8nusZUKxCrMDcaGhADNvDT3ayGtoaJvQxS9L3YswXngbhUkZf2FGm9rE4v1kHMBwcnpJyeEJTLijiS9rJjY",
  "key41": "4zsM3f86TNvVhQyMMUJFztLsBEJ5ZtLqbP4YKCbzFBwccDPf2WYAFxmpNpZgDT9UStLpEue262DQPiDrnD3gtqeF",
  "key42": "51jMopLZn25opoGXRSYSv3bgn6NwWWg9c14Zyq3jUxqL5icgXmdqGHSJbswknkXuGnHoe3BPqNAviE4E5yKLrr7c",
  "key43": "3XjPTUr5tkuNnqF7c9UdtvRm2b1DVKY9yiTkBvSeeE6m5hM5HjE2jyyNqguL2CtmRabZcry6QJMjiM85Vo5M3yTK",
  "key44": "2rFb4Huz2W3qWDdkazD7EnthSW4RedRZCPUwXT6YJQ1ecb6cCLW6QaRS8P9USUaenNHr35nm74cYE8LVm3iHP5t7",
  "key45": "mcyFhLh3G2veGB3tr8NX1ae9PaStG3pMUs8xJBXfFtfB4owGDw4TBisKcgfsyX5NV5LSkHMgsZVokPfDNzt89XJ",
  "key46": "dfQBWnDfBJi8Vwa9wvxpzgoE3amNh2ZywHP7zhoS4vhyDxh23QdNGMrNzYaBnqVkH7p1QDrFYir4ML9VP4AHLPk",
  "key47": "2s2jyQFncC7jyb8dprtDNRSMwaDMAt8JRWJrhzbYnC8q5Ke982LdnfZvyi1dMnZdHsodsYYCksCsHzaYa2zEoEmQ"
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
