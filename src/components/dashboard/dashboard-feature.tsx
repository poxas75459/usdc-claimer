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
    "357n12vFkiVUQkmkP9mpwvePmUzxb2XG168Kibq3YA3uXXDi5TGBhVFU77r6b3pneDFkpvgTifyTxKF1MduwdvSV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65WRnjNibAsZnZVimf54mgQS3L1RRVdxo148t7o4oSPRoFXhuZiJ62ZSauuj762PD2FkpFYnzNXh9YferMfLewsd",
  "key1": "23Lcw6YmTGcHbUQCTzNU1yoHAgaPtUQb5vuZE5J1U1Z752iGn1yNoeqvKiDcYKxvCMcWnuZLhgHPVaEHcGVEb7GD",
  "key2": "5TRWkeE2ytwsHvYdai8NLRowdYDT9tAHyRU3r7x7U3LRSd1bAQCanwXVYiYJN9VEeVEDoc89QrwFC7Uu8zKoioWa",
  "key3": "2Mifmn1s76w8i13nNzxKuiUJexWMVsamWsU45wuA8pRRhGd2waDXuLB4LrVP8M5UKLPNokxd9LJc5yqxKV6rEMbR",
  "key4": "2TK3txTRaCnFGasTHPuo7mN8famLxcVvcmKMZtxGPZzvExzYM2A4BYGqzZJhG7yfTUWJra2SLRCTaCkLSDZuJxLR",
  "key5": "3EMqwxPbLS9LaorkhUsJTGQSdXofch7V1uixaY4jmEdhThXisyDX9SiNLq1BP1fDqRhFcC2bBFcg4cNXuXX7cHab",
  "key6": "2XesG2VGAY4mrF6X2cGhiJjN8Qt1ECVmDHcgVQ1fdMEAcQX8wQixPNQPfG6K5hN3UBT56yMfvvBMqWADQYjYoNbf",
  "key7": "9Mmnam3dVYKjaXdrzH2ZXjwJtQbXyyTPQSn8toh93B626KUsVn2htbuvwH15efTaGLHAw9Ei4C2vakwmB1rXWCi",
  "key8": "5ay2wytQEi2Suo8uQfgL1orv5mwAaQHz3BRCAz1FMEsKA2rs9dNoEw2gSWHCSASFZ8Yf8866itQWwL3tEanFhW4",
  "key9": "owZVitsJ9SrJZHiVGNuLBfZLHRmCkjLsSUBLu2boXCCPVSKG1M4gm1D6m2Y35BRLtPcoxw21LdPeLyYRuY6T5jA",
  "key10": "2Hw7yb6yrD52KnyFkcnR3n47ZZcnQ9GZfKaziHtdt8pGhmEKWH2uwhyzrFbxuFVgaTzf6r4yRzkiXxtunDtqET2d",
  "key11": "NrbGW6XntFhPshqAGLNXGwmkjtqZL69oe6nNxbjanomC6EYpvobLEigqE8dWsY9PTse4pEbt714bdnJvYFWo1cD",
  "key12": "5MHiZbgVcBb97Zndwdcm5cQkDXbGe9BXv5ktyoKpCzknkLxVu2VYFF2W7Zgvme1Y69GSpkHFPEV1iE7mMKiZY1gq",
  "key13": "2xzcBVnugqT7u6sPqbQjPmkXyTBvgZwjYiKEdj4B9f2GjrdpYqPoNwmudHe73JPuRvH7kD6vhJ6yEo6tr9thrCfD",
  "key14": "3Vo2JWSdhp67XK2R4oswfUm7iQuyD6AtrzJwpazQEGea9gTtbCqT6kbVZQsjb19pHnminLVxK5oS2L3uF6uCZy2C",
  "key15": "4MKLhXdYMRciw9gBs9ibZW1YiWP677Pn4tJcRJJzHnMmM12Sh93yuiW3ZoNotUEAvNcetLAh2vg9Z8YuPanTVmma",
  "key16": "4VAarrzyzZXCeA7Hzhia3VRuRakTrdK6uba8KSd9346Q5KaiNFQ2UbULoJX6SBnAzEBbXCzoRxhgKCQSU2864Xdo",
  "key17": "Q1rTT1TXqhFM5QQi86njj9MvotKWcjRoTQ3rFyTZZmD6S3R4TbX7ytshnc9FdhHku7Pq7rs3434Q6VWWwWWE8p9",
  "key18": "2NhWUzdMLatBVaXU6kAYT1v9Sxuc6KcYynVxk95LGEwuBVTYwB1gCg2sL5SsihXyvD2kvSuNyRemyj1MJmLGCfUP",
  "key19": "3vxWMUnG6HqpxFRBw4usYH8jkHTxMnXEM5mmH7iy8TFQpCeUDjNZuXwqH9VwNbeuZ4rr9sTd11SFzhZr3FregAXV",
  "key20": "2xY9BFiFRjDCAHwDtHAapiqWxQXexz48cyiHhMbu757ZSFfQHHgcAi5DPYLtmBbYuBJbVegocGgH6WgiafUFwjXn",
  "key21": "32aihnBv5gcdU8C7XTq2ZVyJ7H6efJnhoEWENrJ1uufymfHb2ZVcYqBfkcajFayKPN3ABTXkq2gEHM5biqe1eec6",
  "key22": "5Rj3CXHFnwA3VMT4vkBZfYHjKiExfbg4kRp7beeYEeuCdLzB4XQHjkKvHgrPKTzdf292SeTe7Gi7CVedZBvfxEVe",
  "key23": "iv1VZ1v3rjuwMKThuxFWwsPqDxBFWgsVK2aoH9ViuWzTQHCudhm4KdG3fRWjzuiLqhsSRdckMhduXwRb3mJCByK",
  "key24": "677nHtkkmXFmLoMGk7KQBL4bqTrmEDe4YezQt45cjNyEgJx4S7BH47gZMGaGHhTmSTKtDJA5FzsiHP2y5Tx8sH8e",
  "key25": "aQpkW9djvzViQB2rCHyUeQAo9hXUdHySr79vbJX5jjijRrbyZBrwoVjNuS69SC2U6PtKZPCchHdoBZGehxt6Wcm",
  "key26": "4Kk5SBLiMaQ2MVWH4BgZ893TtEcazgg1Bo6v6JsyJD3J4PSD72Yegj9A6DrmQiHGEGBzzP3dFTcZLDL6hYR7w87G",
  "key27": "5ZnsirY4a4jwawJHU8SQzx59bybuNiZjgccGydzbYH3L65wP8f5PzD9o8L4zhiYbc2oEuCFdq3Ckxrd4DacVgk4u",
  "key28": "4EKj3Lytx9VeUjSDXo9HrS4gN15AVBWLfYnHet2Xid6cjeNLdCJYZ9NzCbaJs2uVtb9egYxKy6Eb1KsrqynWrSMb",
  "key29": "4rK1Wmh4kpgQ1BhW71rr8248HWgVgqGrBvsjyLAHbq5ZAb4YhQUUY4vxZJm6XrBnxYXMFZkc1wbLWGFKgN3m4Cfv",
  "key30": "585qXFArgo8gyXwvEKsCtRNenAQBZLrwiVvb2f5PT8MWWqvjB2dDEVYpPBAKEBqbSz6sPVxREESKToKydnGJ4hta",
  "key31": "4mKuYB3sAJHh2JwExT31igqiW3mjqdS1DSUgJyaVXP4C3vtWqxHibpigptvrV3EQ7iviu1XRrGHtZts6XL48rAUm",
  "key32": "28qEt7nwXxYRunWhobEjVLX3S3Xw9EsxTMUCqgtgCxfCaFkhtwFTVr8KqKQ9oR2DVqCckGCiB7rUGd3tJMspDyPR",
  "key33": "5pAuHy4tvhjxHHj3URsJX4oZPUh36PZihFsEH2MAT7qntfTxKJF3mYFVZFBnrQqbTVUmNpcDWD2VUuvCCKCpZs82",
  "key34": "3i4YnLuuqqP616CDAx8GUm61upLkazXx2gzTgb8HUSMAnYaVCWiKPFKoMwvymfR3wNock97YvUSUkRDC98Kv8AKx",
  "key35": "3cEvoPoKwPATEHSj9t2wNg8hLc36h795NyHReqAVH9YS1wQbhoRp1CFziDGbVaqhKMDZQMkGXpGBxsb68263eujk",
  "key36": "3fryfjLrBxT1Rta1RDHU1mTsGhufTpNZEA79pggL4Dt8BVZRKMKnm4LDxqZ8sesd4RqRDRJ8iDS4GA1DPqdzNdM3",
  "key37": "3UfFnA49HhY2KmwxWjemeRxVjgdsc3JXVJHcZmREcMMzvvJ6ijeZvbbYaGfN2qpHi4fLdCENR2yMsXjyw35Jn2p8",
  "key38": "5AVuR3caaiWdR6hCqkDNDCs9oQsnuSAsmCHtB9z3goSa7nKDTEeqmDxZ4ZxPQNHY2nXp3PfusofJDg98BCneWBT2",
  "key39": "42BGsARWpuLAEDRLEgL1xHyTEDk9tUJcLxEECNhzUkKSjzMhbM9UwCsf5PxLDTAwCEG8S7XTuGdNQ59A2Jp1fsFT",
  "key40": "2G29DueC1TbtaxgmEWaUhG8jvkvRNZgtXEqKHMPwaRwuy35yA6y6G9C5cFjy3EZSLF6tkMgbyaagqFouVjMTLwoG",
  "key41": "63XV6rGW8fTaSaRqa5mob9x1wQuAsHfGXMnaBdDRgM5296S4Qh37cx9b2CzkVGMuSP63tVgXndeLFvmft93bwfSy",
  "key42": "28YcL1rXeVdXZJvzuog7rviFUvEW2WtzCyHTar6zMH7daF2kZrF173A4LgEBnP4VqyLoXuwvTXM4QdwHZFh2xeJB",
  "key43": "53wAuf8JsWDQYY4Ci5d72k2yWujUfXx8L836CkeQn72fkk6g2apD46XhWUNXwHDQKvGGYBr7cGiadLMbYzHeeUKz",
  "key44": "3DHBPWQUahzpD3Yw7THzLiqz44xWQtp3cZJGgnPFZfqmXowJtuBWPeXfywtvCtbH24ooM5y2WUatPZ7Ju2Bsv1uU",
  "key45": "3XEYMriaENgd6iNXJ3VTiwkdhmJHwMoedLZcEqcCCceNqdeabehGUs7ucvV1m7bg9FDvjL3UoWTiR9kygnLn4dDt",
  "key46": "5fi2AyTwaGFUSbZA63YCPAwccUPpT52hfxojxcnH2wtbYN18HtTjqmtQe18GPvSH2otNHxPj9Vf1UdMiZgpKoYjk",
  "key47": "4jtvSvqkwngEkmZd9MJ7J8htqcKfi4pW6xWXyXdNN4bFTHqaFkiBW47Ae3fDcwzw48m4bbX4kE2A2vdvdsqxA92d",
  "key48": "23nGBwDqHdzVE2M7U2a81du3HUfAGJ4hbTZ3MF1md6mbcF5bi21gxeiY7W6LpsKANRfQCHxzZF5NVspW87wnK9LC"
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
