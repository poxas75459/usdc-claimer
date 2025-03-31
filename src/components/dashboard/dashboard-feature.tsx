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
    "5Up6yXFwexqTtCzJWSJoSEQVx6N5quE6w53oDfeNSrPys96YkxyYkzzDGHEMPVMFyhAgdc72gPc6HR1s8G2MuvSd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GxQeyLbAMX6CnJt8pp9owed9k2Zvt3njBoCPZrSZHa8q7JrZc26V257KvejbRtnqcLQvqGzHsTTWVybbmoZ7P7z",
  "key1": "2jq42tnatLPDPrmvP6NZXeYMy917Pfv9Jh5fmc27YybapmHHCsdXzrJ49UDxjZtPL5sFHrtAYXzAJ55H18b7uPev",
  "key2": "29DDNNQR2XeHVQYxVCXFhT7wEo57H1FRs8e2jyNS4LtG7ThzUDxNt8t58yJj43NuhVgovAq8Lghj3X26tnBVyA1Q",
  "key3": "3LVeKfvhWFe8umKKeciRgoAZFiThHAb1NJD4gqWkFebgxGCtbMVzyqY6NhsNVBJMNcobb41ATsBnfST8bp7eDRwm",
  "key4": "2jJ9nf5XF8S81z7h7GFTZ4zipYSmM1ZVicbA67AZihmP1GFpJQDKaUwJ7qFzi4s2zJwAmpMPxpC1WBfRCDorurig",
  "key5": "3C4vkkh6uK2d2nF5MkD3CdHhBGbUVNA9BC3noZPN8i1QaCC3AkqhCs5X7RC3esWQFgpc71FjfoDxTedHb8UsqunK",
  "key6": "5fzStxeh1TZHgfXDno5Tyuy8Ddf46DP5PHjkmVouEuadUaNjr1ZGhrtcxWVavrYMUQ4c7qeUDXQYMk8QNWiuUYXS",
  "key7": "3R2pv1naQwkpFoV1vnqabHEvhpFer6VjZcfK1o5xkEHdmcHCutQQwTqVoT8DgNuVD4bMKUQbYm87ESQrCvh4mjiC",
  "key8": "hw1BSDELNqmFMc5AosXbwLAfwikt8dhqJtz3nVMDV1Di5KuwVhrhmJ9hVkKvZigAwYfyjraDSBgHoTGgNrpW6Ev",
  "key9": "26ZCgjCD3Z9tJ6RsTwwFHa4NtGjR93f7vDMAnwsXkMp3pMxgDzrZy9qsNXRZw4txkjCfZTnLvUyUdWp853ch9VLN",
  "key10": "4TyZyNbw7VyJRXWB45EfXdED1oue8ZUTdZt3SvVQ1WKgk1U4Rvyc2GGiKzHARv2oowe77uDQJkN8xt9a8s4eBe2U",
  "key11": "3J4zGnyiBi1YBTFCJfS74yUGMUccrJyJza7bxNootL6D1PzCfKxnrKV1DUhGuQywcsB6wqozETaREfXJHqD4fatf",
  "key12": "YJCoeZkBUVB3qaXXGN6jN6UpcphP87nBH6c9etQY1Mhy5YZycQcw9itd5SvxaTFyqjH9N3S247YWxmJZsgqigKG",
  "key13": "GcSkQoWJcv3fvMFgnTX7VDnRSpaG4efLdoYVxoCc8n8M362xTM71VR4dnhRw3LDj56kJfRzQ2oKmDxGTNCiYxgF",
  "key14": "5Nse3t6vGjejXtjM6ZFP4jHmTXQnZ5A8bmLcUL9YEd8zcNHa6cwmeChRXu6qPJy5d9i2oiWB5AWrRdGbPJaL5AE6",
  "key15": "5Ta9eNH4N2GB42LB6Mk7gK3ZmzQzYL46UXLHRjuLwk8CAxJrv4Aw67JKcgJuHy5xR5r5cK7mUC1rfQmkcyuJZWZz",
  "key16": "3pPJsFDmB9Jx2X9JbvisE8MACeKCwPfBs3qWe1M8nDpf1eWbuSQgcnPd524u2PLZRsXudaKsMYJzYeYBaewusZbm",
  "key17": "5hvdzkdbQ1EgHkfdfosHtxoMhzRtiXQUzVpZcCYLX5Vtg9z9bKcZ5Tcx39cryV9QievepiZMrCwmyrZZMrpoaRhV",
  "key18": "2Mhx88fdn4vASoEng1TnpEjUUmEXbXMEDcQ4qaTBxnEtudgf4xafvo5T1e9TLHdYQBvYxK1jvtsu2VMXXTxAMUNX",
  "key19": "5czqQU8K73B91cRw289FtVtyJFuVh8q97JKvvpu5e1Lj8zvmiwnWfbGhNVy4crZfaTdxoCLVvN7APoX7oDXbuLDA",
  "key20": "2JHWPs49aHLkSaAbHJZJ43wpq5Lxb4i3Bjg487tDoAmfJWDiDB1ztHv2r7ypucYdN2Ewz27dpNKh5YpjYoYUzQ4K",
  "key21": "5LaTo85d2u543uZThSVeehFFtQDhnQqhKX4851RcAGjYvf9yZdDeYdet1r9j8iC5zokRpEfchJ16GAnpb6qv17qB",
  "key22": "5XysR4fjwwu9cRsonen9dXEvX93iCDzAiWw7b4whmKX3Rn7d3FBafks13BSoKDeMZu3tHSRH4ET9LzqMQnpXxMUx",
  "key23": "5EkcTqLZ3oq8Yqcy1Hpx2uUUaEXDazhic6h16kxKmeNH5Vxdiu9erXeJ2XT5DN7dphfQK4kPogCj4MGqpMCzhpzu",
  "key24": "2ZjUj1nm1Ah5qfa4Wrk8Uqfx6hJ9GfTb3oxQgHdcQra9tUEapnga6a3o5jGj3JG3SsMidpLjqJ9d3PHDWQXoz6eY",
  "key25": "4Z1tZThabkKnFt3FyFkcPpUUmMd2xEjYhJJ9Gq9TTGeeHSGDXsgtqdzoKyjFRi4XwzPLK9bbLHqsfYbWay5Zyp2h",
  "key26": "37NFsqq9paGT9ZMvgt8NRxLNCJGAbeVxFPQdYCkk1HR6QibeoLRdZd4RwEcYueKysPYS52X4x1CvkE5wLz4rgpQV",
  "key27": "3HDGT73iQKHwRmMNe31kBnbSdYoi7pRt59WpYHHBYiWAtJFvRCjgpYKbNfRS6oUeZdYue1E2WNMddJ5bpzkmzkPc",
  "key28": "4aoh9YHHKvYdzoGZYAhBCrHW7bBd8wenyigmNpAVUimoKVRScq1uH9ExD3AKztpctUEUM4Vx2t8GNGbKta2fdoui",
  "key29": "4SwjmVr41DXccEoxjT6tyqSGEZJiDTS74bTMtBZqQYtw3Bs4YJGaEsToqCGR4PUUhTWYaspm7MKnqdoVTdqQNdyT",
  "key30": "3STFXdB53aHAs3emY5eAfxBnN2qway2X6jjNwrHJY7AzFst4pGTMkFVTKak9EoYB2gD3QZ2LpZBctHP9Mn8aJ2hf",
  "key31": "3bxsZxErK2ocUZPmBaUNHhwmVPiBSKcohq3PN2oahVm8HKRYwGas41h4cxARGeW5NmMFQh1WRNHsXMxorWpX4KjP",
  "key32": "3pppAzxXyj1BcqMxqV7QpnYQLLxtUuykziwztdypwGRFHCMfj9PM6DGUmXaZKiRneqobvThxXRrNKpJH614rE7sm",
  "key33": "4NygCMuqupkaoAMARL4E61o2sfRG6uZr4QnQH9BPP1Fy4FqjjPEbLBKDti8AVi4pRhZJMvssmZQJ9Em2cEazu8er",
  "key34": "5NvtKeXRg5shJQACCgqbds9cbU25xg2T7huQ29zJBspATY2zNwpZ7wSF9HuvMDz1BzfWRiSx6wiVYZMaPuXWBbbC",
  "key35": "3UkWg9ZSXmJKCUdyiqwRC3MdFXoVcCchuiVsVFEaCKmb6Se8wjUg28CmnmTRxgZCfXbvrpmG3u3R98tRFrLXmuWd",
  "key36": "5Cm8QuCAUMZMRpNMTGBHDbvrxpZVBTvhtzUVcprEoPsZ325daNot2Jbitdavs5pNX874urprEUBuZnyhAKaefSiT",
  "key37": "Ep8BaV5kkx7Nte2Kk21NdbQagVey8HQERFhASEcQwzE2uHmY1AoQraAV2frBZzqJtHSchsD8xmtZPrrP5DfdNpw",
  "key38": "ncyKMN5JB41fc88yH6pLEAN9A6BG8JuQxqf2kwvn9aPT73RkbmgS861FXRtNHohD41gs8Hv6G3kqNApwHTDAhcr",
  "key39": "2dwxeGzuHofPAEWibERNAwP3p7zoU4NtHCYTKAmupHivcL1Bm6NZBLXqWgPuzW8BQwAs5vqAFwmie8SxzcVUwz3V",
  "key40": "2j9B59An7S4jd1a49w97L4Nv41kwSzyVkKdzyr4xokbRc3L6mNNN6VBJwketDxM9DekvUAzpCR4dUyBJ7atyv7K8",
  "key41": "Wrunfp7m4mc5sPANZtHHVjXESPhaVG4NKLxj4EWyQ4epi684jxkpKABWKtRZmKqert5oPaHFmPEc26Hzht45x9N",
  "key42": "5xaPpRwGgi92dXyPMXUSp9VfPJ7HZ2FE6eeKnV9AdvgK2bJ6DKQgZ26kmwo45eZZ7rF9B5HJoEcWwKXjpVFjWnLS",
  "key43": "N59kvrJZetG9xj23uBpKa1XEzSekm3LhSYyNX15ACWXrnbBdt4tkkkb2N4dQhMEPUwDhmvJ2iFBCTneXxieCXrD",
  "key44": "4z4pdgx2TJFnm1uzRs2mrwvPkPbpEgUjbKfJJwVH9oWfrhMKWUZBdUiaSj19gYh4N3Q4Egze32w1wiqSnSfN7ZZv",
  "key45": "5prN5WwyFDmuwsDDU7jcytYM6FsRHj4jB3oGetR3957MdjYE1Ky1eJPAnLFpL5xuioreU9SBsaaAnuL6naKBnHvH",
  "key46": "2SMwr6sdyKJNMW7MXhfGyRTRHztt4ThZkNtEuasfBJvCVHpZfiiVP8quXE2zzFVEFWhea8g1dfMDWVBzRg1cRBdu",
  "key47": "m35B7d3Q2cMnZu9ZwGRFJFfKWCqKKykGcKCWX2iVFqGYSNvVQAaQSx4ZnoYD5as6dc9HRgtq2oJ5pRdDZm98q25",
  "key48": "4sNgocjNduMCSKqpCDbARkXMkjppJzq4wmSSJVhcDpy5xof8yeUfokhEPBiMJqxo6V323rsUasfAd3V4qzq1QiQf",
  "key49": "G98nMXGbiYQKjYSru6g1E4Z689K3hTY6hGw8p5PHvSSXoUaTwhBHapi88DnUwyLtt5nUfqRBw1zayPgXhuNxxBh"
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
