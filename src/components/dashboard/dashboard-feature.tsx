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
    "4HTPTZxbWb9z7Ctqa1HzwEFzAWpVPSJ2WvEvHigU9aEQ7i3vvi2wvbTiQ7NzixdqG9hcxYbSRiBsEiG654HF42Px"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53zaQKTHenM4eBz11yTUvV3U5AYRh7Ld2YFv6hA6tn33N84beD28ac9YVy7YbQhQxsDBuJgSo6TTokKLMkjbWpXv",
  "key1": "2LpbapffVcd7CEKLwCzXuBwnrSD7Wj3w4juU7HHz8RLh7CEEtRp9RRmGaMV5NnmWz8RDt6w3zxj1nnnvaNhmMSEr",
  "key2": "vsDXPH2vkD1YHcX6C76p2QqJN1e5CqEgsYR3bFUcchUUoEFzs4HjRmpRvyrQe2TJ7wGrLYhqZBcdWhrqYNYZy3W",
  "key3": "311Q2WYvvFWnNByobXTtQRKGGJzyVqyWdj5eBvw12CZS4u1Y3PXNyugEuu9dY4mX1iTE9DpDMkwwGP1QxrB18J3d",
  "key4": "3v8hV4WpEp1UgwvuvuqRkdHQ2gQWLXSF8xCMcGz3mC5duzN7fQfVy7THehiXLCDQiSHg7u9rNtE5vkPYGoNJFo4Q",
  "key5": "o84AW6yGURbzgN6YvXv1W4Us4p7hCDX4aisXXM649UVNkitm1y7fzW6bXeGkCBJwUpkgiiycYTTzHr1adg1iuJ3",
  "key6": "fugVfGk2A8B8Tdxi69BzHtxH3Lago7fa4A1Dbso5TbMH32JUt9jyN3DREN6aPJTnLNuaXe8UCUxDnECSscutFq6",
  "key7": "4qmnchmwXCkH6WhxqMcC4AR4sPuPeYcugcayQ1TSwQju192bYzjURGXENzriGqeNWdCrV8se47WnDPrPyqucstKx",
  "key8": "5mCdhE51kf6bL2i8yweAX9bSxsiQditZWcaHf6n7JWRZpn49f1r9SwasEtGksiN7qsS5X4GZugnMLeWhvB7h6XQc",
  "key9": "3LkpNz9DfixwYn3RdYexmU4b9AykmUtZVwewcY1s2Mabmi5uj1VX5GgTgYqb2zV9mpkwWSbz6b9h2DMifhHFMkGB",
  "key10": "43oigsng9PcCWahri9kU7aBHKnxfMfmJH3UAUQ2GGsAd2eqKRzPbydZAMyzoC31eGhWSzkPmxEQ1CXKM3aPgzUri",
  "key11": "5f2JpTmGfgCi1bv6jUnepS6ZUJUe5F5AExwT51VNgzgkb7bCCt1kk2WuknAyXSi1oESWbuwmFJgtpUJCCm7y47YP",
  "key12": "3omzp4qk82ayBMxXy6o59jtoSiqgCcuW7FE8d6deTKFvhjicf9J3SnNFArA1osm75ZeesM1SyC76vZ3MWBuu9YWY",
  "key13": "4UiUqgSDQpLnSLnX12FoUKABJeubuE2AJfSiTARELmm6cx7icKhwW2L4J3zxVQMerL88yXgbYJEVqbodqZwhXMnV",
  "key14": "3dPabECAsVfFwH7n3pEXMFS12sm3kVMM1SySn1xZ1ACiLemuvfcaSdBRH4SK5GTEXnYPdPKAVcSnuH2aNdmarEYy",
  "key15": "4HD2AyuGAV1FKhDwUXQGx2uXg8THWKqearDKdDw8ttvc31Lc6RTvWLKyRsutGWwEmdNgfJXQUVfre1UqwYorjUW1",
  "key16": "36uqQTquFzZ1dr9iLBvjqNBMz5BTQdktQLRbJ4S9WJioGUz4hPQsQAnRu2iXUzYm61QYxiPM7mc8ehXCWiC9ZudP",
  "key17": "24djhsqgJDs3FekpRFekUsa95hSj4uMX89A8wP2psKKPnvgoBrR6i1fPm2Xz8NHrNgzHfXJT4seHmtt7qE71qF5j",
  "key18": "5P3fa11TeLZZaNffHKRYF3VsxGHyYANXybNMBT4u4NSC4vCjmBvQwy3Ys8eDBD1whQjVFP4BLqc7PK7gWecrVZhk",
  "key19": "4XpDyjRULJs6NmzbmtMEdYoEN8srRKPNvCBJRZWEPapvLB37cSd2ch1Atwhr672p8djLvmv9yPPzctkicspTMib9",
  "key20": "3LQk5koGt3aLAELnHC8Xp9MTHb9W4Q67dfoBnRtQx5wUqKXzyZBgwGrrHx9zHRzteeWNcibbDPPEokFVHhB5rTGc",
  "key21": "qZWX8xtkjpGoGJsgg6B9mYL7PBnYgF1sUns9G3RLX6G6zFHxJ9Rk9N24TnybZ9yXcNq1bWMho4s2KmVMdYtCmF6",
  "key22": "2Apd2Wp1cEpUyGEVjmUwXUyzP8dCdyp2ZE4yodd1QWN2MhZwdUhQ3MGvrbAXqiqDeX91seAS31kUnpekSYBsfJQb",
  "key23": "5QKB94DnprQhUkMAwc5R9m3vuaxqCa2LcejYij734rNb1YBPF2ohk4iyyhCt5eDeMfsuiFSgyWtQJJxHmfrijCsr",
  "key24": "4tBeJm9Az91RXa7a4PuRXrv3eumBD7JsdJyydrKYDPjStSPS8XEWTV9qff6pihzR4VYoBqnFCUheYHFVyEENPnjS",
  "key25": "3suKYPRiJ6f1vUa5SJzMoZvmWEhkxsTHKR6FUy3GjY41kHrrBc8xcfpGrTjE6BiHiw1CWsLkpaj6UgPTaYmszWCb",
  "key26": "5HjW4hvVpk6E7tV8HmGtG8H56umQFeY9RRFNXavjUcrUGoh1A2oVefcVkrLkYUyQN6gj43H17nM16LDvN66xW4dG",
  "key27": "2SyyTQW2ri2LopVspuzymKdCbSGkTT8j2ZZvkDMYh4f8AtrrJpVkH9845sSZo29q3TNkeUYGgf7CTjW83eYeihLK",
  "key28": "wDm1KykRyH9qvcYDs4Wgho36P6gWAnTA3FnqmjgWAHuLnEiULQBudaEjANQvJwmB58yKfoMcmA9LeU1x6yrfkDH",
  "key29": "MaR7CBT97cLHRdbp4zDoPWTVq6oM1DgHFiuRuN62Zam2c6WqQCaYBzCarq7PqHmsSgmaGLkZiiHQqL1Umz8oDde",
  "key30": "39WJSzBp2uWHjLAr3aSV69KtJovGBQwcFmLQaxY6oeMxj9GPHnwPzbdHFPSwGbSBCYMVvdsj3Q1d5K6MZjmRECYy",
  "key31": "vFZ9x6iQnBoQfXpHG5TvSE4y2pjnsKo3pGxt6uQR9V8bJLu8pziYNstTeAXz5aSqu82292WCpBaN3JtLx3PfmB3",
  "key32": "3nw7DSLSew5zkBpwiBarbSqMDMjzgkCkSyho6K3HxT1qVXws1tTuhkLkPh6ePzmdvKEWFQ3BMzozjGaz9doAHFo2",
  "key33": "3YMQBqLaLvESmWNjQiKxuBgJ2t3AXrMuwPXTuWxJuR8CHsBg3dw1YfmmqMwo91gygSgH4ttxmaWx1kUSWChhwuja",
  "key34": "2LUKTFroqPryarAEJjf2wErcJZJzxhkAaRNMXDZoHznBkhZq7dZ8xyAtkJmGK8tv4HGjNPLi9Z4dwpsiuCWume3",
  "key35": "bbWdGoFWDSRrCZtSDuPHCSc9XXU9Ls3rvZwdZkFvBQe5QpuQGH8tMUJNo5FbJhFynohVK7gjFBAbGUixkw2dqG1",
  "key36": "FFJ5Par6UqF8peC2eqVF1AMCJDVE5SopApGxsQ2oBAayWzxU7HWz7qajQTPuvBCVbajDDFWx5ecN2VYbXpDVGhX",
  "key37": "4UAC7Mxkh6JKSTDSZ4a415psoePdeWyaByuMyAasCkuvdD98BPRv1vjPVgu18m7KCqnSxvvFwJbg7JsZM6bXmonm",
  "key38": "36ar4J2Dhr7n2hnd13jheTQBqh7HJRsYV34RRQQr5Rp9WTTcF9qGHkd5DKBDtgDdQzwSp3yJnJ57efNFxKDAgTAw",
  "key39": "5KWAdNrzbRdAzuQxBy8DTZ5fTWVKaddmhPRaxp2RKUzHj4TaXYc15NxXtWMbF3qWxe5BCz59wajhdJi4b6LUgYZS",
  "key40": "5PxHvLHAQzdbAeVMYZdKnu8e7SEnXcdKtzpT16UNWgwmwDjZPX3XyHec5dcjbQ6hF9aGFdzjRXhxo9e7pv5qQoz7",
  "key41": "qdiaGSGNHY2jKQMrEJg58Fv6LrLu7MwKuya3FoC8H2r5FexndBUGXrp1g2GQ1YtiyRb4tGEmggPVXWjL7dXxs4f",
  "key42": "oENgUY2fEAYu8ecbtyCZkwi8MFgXuSAfP7opvB4QqjdWFKYY6MmYePxyz5N5ne97emXWpVTkZJqSxERjLKfL7WD",
  "key43": "5oR6G7ZVr4MWY5x8N3GEE97nobKi5xmhp2J6K41HRpeBX2pAPAGAcG1m64q5g4fVueya6Kad8qZhvRHrGdwLkEUw",
  "key44": "XS5gGrSPpxt9PoH76WJexqvXbxhXaunspVNzvtKJGQtYNMV65BeXSLqBR8kwichwbsj3g2Hxwt8sravQbcshf8n",
  "key45": "53tPATTGRyzNMJrkSBW3EqDo9oWy7VsUDVbLRuAcGBNsEotZkAdogrvMkUnGhtAe8yMKfFj8rzwTFbLyvqWD6fTN",
  "key46": "p6gR8x4g4G2wySE1NCDKrzzzqU3vMcBxjLWdmhk8uWCZRe5E2fhXWYuQp72K1s6uCNvZk9JUXttYrqcS9TEvZ74",
  "key47": "5zZ9hHQaEvcGpGEXeqP96zStc9wLgdtTgUL7bfqmLKLborWuP8D3WhoLeLqpbo4LCpLrjvWoJUjCtRmrDiLy7fYc",
  "key48": "35N3p5c8GoA5fiBZbdKQVtZyYvTLYyeRV56nMtbcVt9cTUMaNrd9zKVXoc3ti7gZ32UsbRn2f21CeRWiv2cj135q"
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
