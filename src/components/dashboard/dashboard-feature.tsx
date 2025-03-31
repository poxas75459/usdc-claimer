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
    "5gmc1R64hcuUNPz8dpDRbTY5NsXDAzQHWf1tZRLSQ8EwWwEUV6komDvJ319WRQVLFTZ3bhCSLYEPVW1NrBUW8dzc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W7w12wMPBcdAXTaHc3NhMTcC9WE9FGUoc3U56U1eXp8U1F2kFa9kKAxQBmGC2DxbEE4jk16n3GXQZEa8xwYg8BZ",
  "key1": "37N5XBN42RsTYn773XQ2dHv4pVPE9TcS4Bfs9UHvMzV69cCHtjFKQv34PXwNFE45rftGfwznRyoLq7wYjNikGdGM",
  "key2": "4C4E7dP3zVNDvkLAcn4MQvocCNfNiWwo1kBNgLwNJuNq6Nu5FEKvRq4ZdPHdkh6tpW5vRNesW6Tm7e7igM3t6p1a",
  "key3": "oenw8bVmMCNNvn6hmPpABWTpxdiwFmGS6S84jxpXovJffSr3jhbD6GX361dzBq7JeKi9kru568B8BazB7Aoh9xq",
  "key4": "3AWcfn1nUVJtosLwziFx7QXRq9fXDw7QEPBAzaM8XuBeC4Xk8nYsJjdwYGPge1merJzE847rZk3pwWXDXwX6ZBVn",
  "key5": "2nyYdUQaQQHShVLA21QJ6miDyoFiu9whhqLKm73mMwnjcR3SsfAfRaQyghTt6GiLjRppbrau8gvVknrqiA8GACKg",
  "key6": "3xvmGVPwS14z6f5xBztLu9ho2xscXHUJrvFy3pFEw9XJngPB5SAtMFDjxZ9CuKBN7vvqRWuW6nJF8kWy9vs5Aw1k",
  "key7": "4k8a1XjCAiHYkrUj2dwQ4nVraLDBTfisdBFfgErrbcEejhwJ4jgPx5Na89DiRJqVYH2NKzUWdFPyXd6oVwkPmeyU",
  "key8": "2ySh8C1a2zATkGXh1Cz87oQCCNBoxFyezYWHoxFdPdKUr7maowDcTNU3Tn69YtV5JNW63FpAfYqBUMsj8qqFQD61",
  "key9": "3sretYf3d3U2N2NzumTE44Wu2Lib2TseJdYGngb5s5UizPPVagzYDefwcqy8irC2TVxW6hzfaDx6iD1pq9TrrgwK",
  "key10": "NL1Qg4RZm3JutKExmeTmVLBwzPRy4sQVGp7eLQyXGscswGSJSW52E2nnpJn4NzxsmBQxxCESv6KT4hjfn2RFhp1",
  "key11": "5oVWRdA8vdLWRzqBy6ZFRYPcdZdXvbKvLMjA69N54bxgay5Bnd4muPhg62XpgbDBpdUjXYozDcr7Sixu2TsGLVCc",
  "key12": "2vbBF46TNQYuxCd2Nv5NNeFBrpW6haMooQbir6pYBFM4qnUSjZek67UkmVPfbfA4LxBvMs3Aw5VGwC8haEy1Wvft",
  "key13": "AnzUp99zHTS4jx95EUJD5Yd7C6oPnDBGZZq94nPSizsKfkGZBNesrfBVng8sZMSr2RsoThZs8ouoQfV9PHwrNTh",
  "key14": "3S94DUmMj3VGMfqwgsoSYvDy22hWwSnubXkcaMwPSudopMr5yB3cVmNfwPa3re5YWEnskdBLpdKuAZYavvCisFef",
  "key15": "5myQLJ1xVEEJkkd4VKC6pP5TWcWshk3Dsr7nYMrZSGFUtsTNrKrbs99njmg4iExgkcdqnppZXA5HGFqseYZ5cKEB",
  "key16": "4ywXpCrSixfvvhtdH8bTCg1W7WDsQqMMQK76S66VADLyrd5Sj4Tmu446uY7MVRjczu8VGmXyaiMm9ohLJkUcTnCy",
  "key17": "2B736b9bZaxZuT4t3znHjTP9efbUwUw7dihYFr1AimaW5aXwr3APATzsNG69Zb4SMT6hQMftXtXRA9GrFPWcSabc",
  "key18": "3V1DZNckHpSetvPTyke1cbm7iMaRuc6ka66UVnHii2i7NX1JDHhfjnBptnzMyz1yF5MS8X17abqJhjfygS85dUxG",
  "key19": "2tVCafJMFFmWpiNJNQX7jSWVzKobAqCgn7bru7N6tmxrerV4Rzxr6ouZWEpPLzJ7sHDCJScuzV8nFyMN9HoWhQUG",
  "key20": "3b1V8wh7qAWgpGwRaVNugP3ajQLLvDiMmE7KevEDVkLtm2w37ZhTCg1HiGZ6JkA42i1cFmhR1cBVpU6orANTRh83",
  "key21": "2FQSbp9zy8DsdQuAgWfHwLsmfwqU9NpZiegHvCz744sjmPQuh4VtTdE84S2xCSVAZzXra54RcUbLLShdhYa1A8Zc",
  "key22": "4BfhYi7YgX8RVQvbywCPFFio1t3jvKcRWH7bcpcRMCtrWvoSQWWcvYucE9uoT2CcwhMyGCgq378Sooj9KyM6gyt3",
  "key23": "2CKwspAF7VFNrGEr65vS2RahYQzhSivJ4MGe6T5VbwCbxUSDMfvXTu3APsibLidiUGy3DcUYDhdDE8dDcEKBTfPY",
  "key24": "5QvEhEdgHS3F6uGsByPXkmSih9uAM6MEzawrpZWE6bXCwg5b4Njv63e4DnqpBK7U1UtyNdojcjE14H8SHAmSvQwc",
  "key25": "4w8tsTPBs4253QYwZHWdhujMpjAWfPnGvVEBAXmqcjQ2kPMCvcQECShmaVvDzs5kX1wDP16bwv8goBqwQkaPfNNQ",
  "key26": "3P8TDLesdkburVB9vts3xuSnJ9co9gJ4pCYNHyadhxVZQNKKQ2Lr3TVonxub9jXEuyDkXgYDVFRyW5CcgCpJRLVC",
  "key27": "21jGeryZmbm8SNMAHVi74T3FEgkyuUGEHb4tugiwjQb8V3Js8qCxy9JJUDd7Qx9T55iKPBoMkfhGx4KhXVLHUHZp",
  "key28": "5dNQYGz1tzN4NbRoCjWEz1r8W4SeyyzA7BR88i8pLvG9t1hUFDTDoXY3GHjNhwm1H3GZdM23mhBDViSSzUrveowb",
  "key29": "4dj96FXtqrFyMQpHnTAQCYJoeB53Z9RPjs3MrNcgtGNUy2qVRE6yziPBF5JaBXsFh4gXN4RcWVkUwa2xewp6segW",
  "key30": "2GBcJeRVQMrvsShZzHRqD2FXgWoyjs88iB3FJMu9PA6bdZnRP88uB4kpqspNWhvs1BZ6bhsMJVD3ZyNBQ215qtnG",
  "key31": "5DGpfD6bnPgRur998CarA56LkhV1TjkzFW7vfi68zGANtBLusZGbDs1cF1uatQucDNsijBbdJr4oKb7cuUmPXmMM",
  "key32": "fYBXpfyU8pXTYZ4Q6g3si8W4koAkkprqV7BgfuA6buABf7X7Yac6dCFyupAtJNVYBdjP9Mn46zqyVvWKFx6PFAX",
  "key33": "GXTuDEUCc44ARf7yiGn9XzwWgWozvr1QjLUniWYQAxgaHTVA9EtuXEqN6rK7Y6jgkAxct8fLmYBWY1zgAcEoNka",
  "key34": "4Fa2xEmjwRk8X5sQSkM2LVGUiQYY74V2AqRHH1UZwxYa561MA4rExuyVxeC8pnCzCMyqEh8Ye7JGzmaD4AoKAohL",
  "key35": "qtCfbDod56gBE8SNks6dHfjz3Qy2HzCXPEpjdVnJq8hsnhkzUJCa52tdTua21CWULUbGERA44h2YuU91UWLvFE6",
  "key36": "3AmeHcp8FVCdwZtTWZkhPayrzRagYsKezQdnWzsrpvGZDGm2FZVHAuoytGwHxMstsFRYvzbEWYhzAuLviJBesf4s",
  "key37": "355PNhKwrnLx4NBsge7EJCKco1L3C6CFBTLzrGnQsnaAxpHgcLoFkb6MVNL9tQvrAcpQFya1MAkuWF7nUbAUg5xT",
  "key38": "3kG8aRAwQeFC4ZaTZegLdz3M3bef8i9L4NyS9ohYUJtXZWq7ZZeizmiQSUzGKCAxYpW9sKyxMee2KYtakKEGzSuJ",
  "key39": "efPDZ2gNx6Gg7QadtyZhz6WqtAFU4ASnGdpeSrDmX9sNsc1mQFTtpF6QQUuohfbuAf7GKQeWqTxYWWzG23qCZKc",
  "key40": "4ZNDK6MwReCARHsD1w9WfoPv7Qmreg1aqrbmDpyfEaFsLkkQpjHHvngnU2j61utufRsCf5meBRjUvcJy4FU7MuD5",
  "key41": "49x2upn8bHepv5mPWBqYVk7gbDvAdwKnDrpFkqKofRAdB7D28XVT3pfeMa93E5SGBMABmu5ZvNmiTcPg7e1jQ4ah",
  "key42": "3t7jWMBe7kCosanmXQzpSJ5BkRK8dk29nzQ7SZFC8HqXuqCWcrDZXb7FhCdzPbDfQTtUpKTMfy5V7mx27g4cQHVY",
  "key43": "4PoWjFPTHnJUfSEMrLQKfE47HVB3Sd6JSrGCpP8uotUjfg59vRVXjarNxAWEE7KxfcJHfVL9apsgkFDcDMrxVpwJ",
  "key44": "3YqCY6FEpmBd9iBtFfqFGR2hdm8R8F5xvT6ReYqNgRwXhagZKFGH1sRkz5XQuutCHf111GXr5iUK3Lo15j48f2EB",
  "key45": "3BFF9vRDnfcHbiiEjUwBtvPgJw5qWqGf9QPPShaBGxATEmokx7VZR7a7BTq6J4pvrewD1zTrsfPheWT34MBsqeLq"
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
