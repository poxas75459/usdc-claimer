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
    "5DRx2y9cL1VsDTQfZ3A1gjKwyX6o9DZHYzXxz4wV5FpMyeE6QMDAUetawqpoZW7s4WHpFm7RtEAPWShUFmpRscXj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33WTChdoYBNFsZfAj8CtP8fJsjnCnSPwKEN8eLqvBbmCiC3iXPdrSKnp692T8vAXkXuH7HauPKxkhhM4b5x9h5Ww",
  "key1": "37XtuuUhm3XjCoVPP4Gw5m36rAmKJQsqpKnXcW4xy6aRycEMh2HhJJnTyubLneMZxgxLauYPt57Ar6SdubFM9F6F",
  "key2": "47DyUzeRLvNfZi6sdKYXpLD47rpmdkGkpZpGTg615weAbcuYJJPcJiGJQWRdrbFUVH2r29Vg2EBiJKAq2dUmBRkY",
  "key3": "387WhxDZSkMqmg1LdGmzLPmEEAuN4rQJDb3tboYTKsvuys95GWyPDNV2JtVGUoy7NLoLBxsaSSaWqWf9V6erdtUK",
  "key4": "BVQjZjimHzN2BooPRHBzWGuDBjiWSEptdvPXs75KQEDYB5KHRkodMbXpCjaZ5EDDXVm74MSJKbnP9Awg5bZDgGn",
  "key5": "wPt1ssEiqLHqV2yV7erc2C29BqQSNXan94q7XDZPpbMwfXvRAkzhtcUgPKAWTpaTqR2BS46Uj7cqrMije6r1A7Z",
  "key6": "RSgkEk6NfhmdPnqqCTn1fbUywjhcS78Jz8kyDyzStJ7nQLHPjhADwd7i3R14UbD6sqnmkQ45Fc9SWUM1oRgGWA3",
  "key7": "MvdNAD5DwfhjjGaxGMea1XUVApuEZK6w9PKaijoncNho8zNsJTX4Kf2x76UaA5RZZVAnQT9wY9FbtR2UZeWzeiD",
  "key8": "2qgHWC6roT59PxuVHAKB2qfrMbhNHL8zpdXvRUp9hYX3L4nQaFG3BdDju2XTJMz6nyEsigKgvS3ARfjpGjy2UfCJ",
  "key9": "41PMsCymUyQZVzdBCWJaAJzEJQwr3n3rZ4Zs7YBnjHujWMWTkFaHFCL5VLtL5nwcnQaWQSzwQ3cGP6Pz8nJYSDZR",
  "key10": "4J1ZdJUE45cYtujQarqb3DiNABnjNkNFk7sqmwHHC7sGzLjMgRBKwt2Qt6ovPgSRSkf1XNnFBoRtSZVEbRurXjgM",
  "key11": "6682iCjT7k8aCLPDXp62hND6WR974eC3FPFb61qfbsSAyAKje8snPpz93kCYNEDJcMvEYP3pqREYDRdA4wjwMZQf",
  "key12": "5dKMTGuTcKBbqUXj7TzXWVcJfLfzkD6tKBd599JNjHmvTTFjxrn17tJTij9govNKRrdAoyNyjBEckJnRVMa286Pg",
  "key13": "8Zs2MLWLPP873NXZRFv8Vm44VJNJpo9AKcKhV34NujiDAN2DdmK4DAVCYqyWVVsWhhcXpWwPuz89DZ6XGsYtJfR",
  "key14": "2vJzbBAA7ECmGCJiFhwSnaipSUCDsTzFXaSnidHQMBf6kPpVqa2KU4c87wLpWa2iR1dzPsm7yjgZ9f278yYgqY5j",
  "key15": "5tUmB71TSEdvvSKhx3Qcmxk1qG7XZbUrLzrSZLrGCbmsg2M4Paa3dm93LcpXqhxpCundcZWPSiskoxd5tERWWaEv",
  "key16": "3m9igzyFXAKNGE6hBTKzAD69nLu24wZY4MoNQK53HcsPLqfxnJk7rh5qsiUNPbPGR6UkPgCbnTcauWHHYVa8bLjj",
  "key17": "2fU4bwVozVknHs5Wn1yp9mDpVdC3B9DBvt45NF3skYmRtPrdFL4szTb2pSJgSJC6wij4PAU6xvweEzqcHoBNFhub",
  "key18": "62Hkd7yPF7rpJxEyHZx6RmJWK7Q7QNYAPTXMrUdnepEhaRuHaWFs5KUtPrgbeVS5h7cDNMgiVNE92DprnGWc3h9G",
  "key19": "aUYt2tCqr76SjxPpzf261WrZAyvW6U6gsbv5VhA9WRvS11AbsUtZ2v1Yc8YfY3C2goCWAeuKP6nx7F8N5eAfsMM",
  "key20": "Rr38uA2juwFtVDLKUKG8x3kwPXZsrsTtJbcBUkzT69KY5qHwuvgJGUQaGkc4GQA5SPojjHnaSDr5DKzJHMXfzFg",
  "key21": "5HbnfhWzZQYx2fRhkkDh9nNjTh8sVbtRFSSqSm29FyZ3uxxYFegDkErT9BQ4Xk2TWkLAXd7CiDDCShKowC29jm8S",
  "key22": "3PD2vhL4KFoqzBqbnLdgQSMivfv89frNH1cD2PmLvbT3kHC489ndyu4ZMuhvXDvTkS5sSDDmuku9HcqtU5LzFbpU",
  "key23": "zcproqMgoGP1ZSFz7iX5BcRaxJe1neNqHZytKSrdxz9KrZLx9GdRUxs6gpqJZCW6EyW6rY9DUAPBKuUTbQWUcqc",
  "key24": "4jrwrt8Qh1yWSbqRJAtBU5T6jyAwPdi7YJwkf8f1f1qBxv7hPxJM3iCaWq64XKhqoMURUWKNEHitdtnfJbYSVdYP",
  "key25": "5MWpq4dqQaHgUxqgZ26CyFH8igFVVnGqy33QPmtD28s9pqhxXvKFqud59kii7FAD5wiY1Qp6uVFKcRKsFj5HnFyv",
  "key26": "3TWvGZ5Ye2g4U9NWWR5x8uj9WdXMgzxinqNw9693htn4VjXDVEYAK49RQQyQC8Rmp6q5Y7J6juczEhWgmedHWsFV",
  "key27": "5wq8Doscc9Qzmm9WskovhRRofhSX81TdcZm8Kj5dYuAtiE98XqnrYRPiF43HxGweRQmkm3difYuv5RUc9WBBX75L",
  "key28": "5R1NSnFu7dgxegzWqjrMFebWvkjD1TDGqck4cpo89GQhPFeukERKLi22PEhNqNk6gs89ZoXnqsnQfFpFqgYfFGHZ",
  "key29": "5BxpMGXwT7SLwPtZ2kDJxZChWU9DemkyjfNyVbHtFGQsS7mNrFTPax7RpJ4M1EYJ9h2knimoqhyHjn21niY12zZP",
  "key30": "28knBmE9zcRjLfSR5RKixGv4Hf6fUMFgyrudegzCV8xoRUiRtBsYUyuxkUUVMLKCySC9Z5R1DHhYo8pg3RMz91oD",
  "key31": "2XJjVjh4WmpgBuHwyadonsJY9WvYXZpiXSX8meFTus9qh8bG1v3KP2qseSsY2oyDoYqXyhzhXcSJgzRr9dzPdCAw",
  "key32": "2nR7pXexxFEii8c9Fv4ZhXuDHS3WEazsoiZRmKb8Lg6Er4UEgTcTtJeRJUSfgBfb57qKbbgAMZHTvJgZ2TVEb5iq",
  "key33": "veJ9XPY8SEXmfw1DHZwBPyWTi2uCMeCiL35XH2X6BQYymAkx9f4HXURKweFEQ5xPy6UNkufu62BjZivVy3DGLAZ",
  "key34": "57pz9KauYm2xJpKu6av336Lmk7JEsDGiSUskrJQ6SK5eMgPcpppSTgxcetwzhx2HNmbCS8RVsg8cYkP92mCvUp3s",
  "key35": "4ykVXNLyyqeWX5ZM3KjQQ7jCoyjr81BeFuNRGGkk8zfGjUq7wqPeXPb9zB5BkkgwQ8ZAbCPtyc5JWvtPKCg6HmBd",
  "key36": "3S8BTF2gf9ZoDj2xgxsuiMUNmFfhHdvbocC9ZZCJZpYvqs7ES3whUrymdqddAwXZkBUzJsNpQsz5nRWnqRG79in",
  "key37": "4PaV63NY1dTT1gT9v714XfN6dx8uo7nYakzVHjjL6mJhoC58FTLShzTDzfgvMDqu12xUqKHHe2sezPdbQxBKAvNf",
  "key38": "3256CZemLjwkruJpfddRXCRw8LcneKhxBbCr5tGiQWMcAHnYmbj6ULvXLbgqqZzEsUkKy1XLiMVFHLdKjGV6mTcr",
  "key39": "5KmbRdy3rARgGJMuFSVLqcC9vaLWbBu91PxaEfqAwLueMtk8K892VqS2rkTokS7nVwjVGU873ZnhRz5GGSZKKTMf",
  "key40": "EFahudKSyPfHoJw7J63DFq5p5HhVJ6dbBcSqSDQjPZhdEZuXvqCmMAz8vW3o9gzZX1rvAcoBmmYYdu8BYxDQkGd",
  "key41": "5AsSPYTVDKTeSmgv4aRxeVXQQrXEX6fyRbYma7X6TiBWdyaLyjnTjcWTweU3TddWTc8a5BEzSn4siRpygiDkSFjM",
  "key42": "4huXE1QYXdmJnmC2nNwd1C81gdgnYbHRNZ4m4B4TeZPrHRTo26B6YcahFoBY9avTMWNEMPY1B63QNoMJyKXhDrpG",
  "key43": "n1yDncVZQ42xHTH7BMqMojGBPJx5mE7rBrzqtPBHUhC3CW2gtkjeuUFMpNYiMV1NRVfPaTVNZg3SMHANByBUKkU",
  "key44": "5CUYi23eyHbSvkMMVpzrmCaoKopVRqHstGgCh2g3skKRnV1WMc8z8dunJMcCZ834EnENFC8vceo6NFScj6eruSik",
  "key45": "3hvfEmy6eT4sadTNtedhD2zhvUsMycUHSd5G2Kn7xsurcpZsacAUYmadMApFwNN99y19HXAHA3Pq2rXH4Hk5YBCL",
  "key46": "2VVeZYtaQQTYgmJa226PbVT7npTJqZwkkAD1miieSjzzM6cwTLc7GiBkQyjKc4asZQeUQxNhMgkcVZ4jGGhsGkiw",
  "key47": "5BvUYjgrWp7oxHaKGSVXPyBu7hKpwvri9XnbPKYHdKNxZKdkmvqr42HaGKZpYNQ3febGV92uYQAPhFPozBQcPx7G",
  "key48": "2h5fEwJ4cwrzaKTLiwCihBSYBA8FPRAZd2K6Zf1EnUryUo8mRE6HR4mPmrPq1dePMhTqdofxma2SonKZ8q6zwe58",
  "key49": "5XK97Gies8T4BGaYsd8bzzQGgBocczq9vsD5WHtDwCSagrEiN6VG1cvgUcGyda3yrjdzv5L9GbJdAyFo8wJfFoVS"
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
