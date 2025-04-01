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
    "PXgN3sTE9pf9a8bh4DUmt7cAM9n8rK2eoVRQ86wsLczAABRNbYZDcaKnDnG67WeqUgiCnRudFZebL3EJD82ARUz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38JVLRjS5yhec9gWVPZZbhQp1SK3a31BzyRPeQTXwU4HhH9V9dhPgoi33WWu3cuSgjUXro868d9rgHand8HArP62",
  "key1": "4KnpgqBaubG65ctC3cf8nBzf9LSu7Kc8cXQpa6d2CZZhnMDyJdPgnxsrYUapxVfo5osuE9Vbj6vSXk4VWB9PG1aw",
  "key2": "3WcGxnDZWZBDT2vZE2avJay7kGb8twEazSqz6U3pdz4n6aQ8Sbc1UsZBThpvjhYHE3e2nw7WneMFmXic4jLpiM1B",
  "key3": "4GACDqJynDL5bdPtV4FsMRaJJEMLikW5FGXj3DsFCAvsKKdNgRD12gKYKuq2NbodMumzJM6yAdY1h9Gg9nnAxYBU",
  "key4": "26Qe1TPFUjZ8kGXweFyopr8yKKpRKJvF5s4vr2zv4ybJHLnrgXLE9CD3oCzGNAwh7masunDnDBW7SE3km5pZSGMf",
  "key5": "2gWqN4Piercq3LWnncQYycYVXqe2fPY6QJAEiixnm8SzZNRkNwjxUQPTSp6fN2f7oufdpL3GAjJPw5dfSUbtbjUK",
  "key6": "47RC2iMzUeq2819DLyV9GRh3BcXkj3CLD4mo2AD73cAhrHxwejpS4vT2thH4nyVjRkPFgdsMSeNGd7bpiQYaRomp",
  "key7": "33DJ9M5GHNz8XW7F2zUfScLyVjJ4hbCcXL9pQ3EN565HtUd5CspsCjGKysZXNZMQZY9acwvJdhDa7bQGh8Aja7mt",
  "key8": "3SrGKgFmVVm5wCQXhSWEHCCvS3ZjUR6RN9CNsn1s7vVWiz7mFPMyiEcra779esDbksY1PJspGxUiqupbVtj7PRYU",
  "key9": "5xY6X8nfeaN95u1f237pJo2z4zKrXKLqnkvWR87G3ZJm2yXAfU2aiUUmj4j5RztYiUn7nxHdRi7JMzthxgqWuZVU",
  "key10": "4xdrm3FcYziNDzj1LGFVxtwka5rUmot87Ju6zcAKTf1W4nARzepz4aTzkkyuwDToKgoBrqhPYCoHp6zGtoJkPt6R",
  "key11": "2i8aTWYKPsVMcM2huiZaCVApQxZ3Vx3UCKeKMp9buqSnJqx66ZW74XHdmuq5BYGieTap8ZLmisoh9Mf1pFh6E5Uw",
  "key12": "24M7ob9SNWY4V2M19FJMkTzMFUubAgMwSc888FJghvjgvTsL1Ggcqu1XVREM4aJ5PUFNEpfTuBK87xJEJSphWt8P",
  "key13": "2u3u9whfecHt5qc6wAgGBzX4u9bdM77DUCoSDEhz2WnX127kzyunVsriBWV4AeApEsFqtMUB2jhqvw9N6n756RSg",
  "key14": "JUHo49o6hiRVkSuQeYqjYRL17hs2ZiWRmpzb9XNKxeSCacKHhsEShwBw4Fh5zcQ5NwEkAMaCMV96yZNaFy9Z8q7",
  "key15": "2yKGLtBPijBRq8mTcZkVp2wU8fMVjsSsJRF86nUwUVnS6zUjq1bS3g4UXj2PNKzz6HuwegcaBjjv3WmXGRE1BS14",
  "key16": "4TSdeaUuLT5bFgvvLHAKrysHE33KAz6XwUoE1oewXryH87r9tg27dNBYpAfikd6dsWNyY3pR5CNM6Qohtdh176qV",
  "key17": "jSyNnfQryTjGdcej46As89YPHjyUVfyQzhodxymfxY7sWTLG4Fpx1Vkt2kyVaQNR2SA4AxvysrGQ7d68SW1XuAr",
  "key18": "3pEi3PtgdeaJZKCL7hnJyMyfBnhBggTqKfGVWAhNS9KyvaU4sgV8mDsp8jgDv1uRRmwZT9tfPzrp8YgoEnJZJy5h",
  "key19": "5DXuPGjRVJsxYzBpTxmieoJwVNL3PdKFY7oeEZF8P7M8YeqsMG51VX6UXunotobLZwC9TMZhKp7HqNdbGFEganx2",
  "key20": "4zcEdnC7HDZmKhw6pvNsDanbyVyXPfvrgwywgs1PrhpRPU8zqmNi1kcBTcW1D52nHQRDZVosSEnJqifVAkZmdnz",
  "key21": "2yAjPnSrQiUTMtjHSGo5jLvQWRmDYiWtQ7uDwKL8rQvVCiCxod2AUeHMUyhfW31HXpgmdeWh7xc42VMcUkmGBjqH",
  "key22": "3dMRgeCfuT9TvDAUveizufgzY123h9iufGF3nbkDGWtfjkoFdMqA2BgEhELM1gw4MSaNtJs6MYK9o3K2KuxjUST3",
  "key23": "5UQVBtapgAs1bbqRu4bySZPCBpASY2FSobKJhrPR8ayAEFbvL8KtPYfr6H3LD7TiRQGmqPixkV9FzaetYmpzhtAf",
  "key24": "5drCHzinraK22ySR3XGeK734X6sZjtNJwHeyLHMkjbDCkXJdPcaR9U72T11EFwovVFxqihncqWXWtwGyhEkFtMaa",
  "key25": "36VcQMNHB9jrdW42ysz7vt9j52WtkrC5GqBNTWA7FX96KmpM22fsruVqn52cGuNxogzYspyghMK2uHcKQd3Gx4Ma",
  "key26": "2Bzxaxxnaohw6KjoviZfc3WG1boTa3sB43zE4Dj3vQ8ZGHp6HjVnumeKBL9CR9nXmmioJbtS7RQTeX7iJ8qCkXBQ",
  "key27": "Sb7iA3XYpqyiymKcW6e9FdnUNfxx3v5yRq2NZEYVPhcNksPTK3naXh8fttDfBjHNyZRuch7a15mczzSJ94LtZEU",
  "key28": "5exMYMad6zQTyDAAACKvCCZ5LWFSBeeTovzqVxUPrFnV5wyTGwFwTDVME3Hj3asiKCYLVuHMyVwqXMZDt6FgECgr",
  "key29": "5MN92p8PqaZEu2hK9JqsQNB6HXoLxaLuf1jrVQKoHAuanV5JxfGfCFmvseZFB9MJqfxU2oUuBE74JkFezMc5C7qU",
  "key30": "67MusFErp3ajuPSkEEYazwF26vWYkNjWBUz28DPHb1gmcvmNkX1KzEYJkkgR2uYPTkWXjhEYUgUPaix1DzYPR3kj",
  "key31": "3JmZJtxEpboGqyiGkKxW3bJZXr2c2AVVAt4xBoRcPhGFmFRRcFcGPpdftppoXN1zVB3uim8zY6YZ64arCjhGcnRB",
  "key32": "2PhT66rU56qUVGRXForA4dskqLDzFMjw9qZkkiv4eNi7W6QShF2EabWTCs9C8yi2dBgrGZSM5nM8ZARG2iVAQYDe",
  "key33": "1N8tSU1UvUuZ8rLed5scYsE7efNuDPU4zGWQMM3tiv1GBjtZLpq7mg44Jm5kMF2fNY4LWsUKU4p5GVn24MYaJ1X",
  "key34": "3mKkF6gGGCYh85XLiqXYeKBKGoSd1ujPXDKiTYy3zLULgSohutUDPaCfFdB4jJyiabAy6bBY2gXBPuFkp9TPC71P",
  "key35": "64ySkCxJ6VAiLNw4G4bpyA64rhx5sfCqzZgYbgpsPJKsEYAXQR38cMKetCe982J2EXPse8L913uKxwgsKNp1aD5B",
  "key36": "4BkrqUbRsyJkGnkU3S1hQ4MgjjTGbUBhnXYZmXTKeaMmh8X9JSYWFMbxh56rUStmTuLRSuMhzeM9QC1mtb9yZTQG",
  "key37": "3dcuvATggZutNwVFaPhxMms253DkaA25RSMZCBZCksY2Bre69CNiWiPceNDvG1dyRzizNfvsExPVBu7RJfqcJpx9",
  "key38": "5b4Q2DxpUrp9rBD1g1mS31MATqa7WoE6tmyZkqimCzLe4hxznnzcp9yRMstP4rAB43eboT28EptuGAD2tjUf4kqj",
  "key39": "4N6q6Sc441oVT9zyLUzgrgeBGaZPKhcS3u4EJ9HH8jzWB1PtkjouhC4hZeMbWtMLXq923FjDttpGyKR2KAHTZytQ",
  "key40": "2ZHwEduEqmCP8VbSqGwMsGWvaXiEy3SjZ9jZo8Ni1DRAmKyeNUnX6YrrDSKYZcS7krENVsgeGuX87X1bjLzuHPWm",
  "key41": "3kDDiwnLo8AkB6AMEUD96dKZa2Dd7DMfku8Dik4s22UjHCwHRsM4h19w9twBH4Q7zYPoDq9tctu3KXkkNUFT7dyk",
  "key42": "4rqg1ioYvJjE7dN3kunsJSayohtAn8JyE1G9xFKWfPCDF5vzPb7dZD6WvGETmNL4EiUygyyS8VNB1wUsxNVFZX1o",
  "key43": "XgKbvoSep7eHgNKxxgqMDdw2PM4KMvQtjsChJHeDoUQCv7F7Eky8ueDZ7RAaTH5w2JEvxUqsvkuiXvruXcDgZLD",
  "key44": "5J5i8qQRnuQ8kg2jztmPdy6z3xMqfu8bVN8cps1A6aHU3fZqWWmPwiiNN66Ua97GcuxMfW9wXusnPwHu1Gbuqeyj",
  "key45": "3Qw46Mddsrs7XizQoQ2UqJBxsBGRyuQ41PWuDNbtHmiSqrF7vb7JNghgNJQbgKDmpDNFegWbWBhou5Dmh6XELFwJ"
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
