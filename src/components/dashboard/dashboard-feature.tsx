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
    "5rqvHfNKvjtEBrbJeK1QBEwsReXBTXGehsLMnYk2K2tmvYRQQfTBXWbm7kn3MZeN2jhjW2CHQKGyPehUqUEVR24T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gEBjB7JVPGzdhgBmzams8sRCb3Ps6kZFp735vvoTkPQ6759RgMQK53qJdWH1scmtasRXzWoYUZeypJ75JeWiKsm",
  "key1": "2BVaEUgoJkYjFaa6hmHghJmzfTaFYhs2RJsNw1PkoFFJi2anPaQswqUEezHcgwwxAgWDMiBtNfpFmurg5zgd6Tuz",
  "key2": "5U4du2zNK7NdsthEgqoeUtt2W1GJodspDHhKsFFiw3FeAAnhWAASpUReBJmBLbSeN9piT6jnm6EcjvGnkJ6gLXVU",
  "key3": "5b79EZxS38mJ2gdsTVtrayZEhQDmcjJEFWrv9bUwYVE2FD5Q65rBi73oELHqgpPKNpshDZq2cKoSh76cH8JuiQqX",
  "key4": "FQcNh4Su32NZUbeyJhz6iLBoK4ZLKJzy8q4W2ExP4xKkiAbXYrbEvERxULLP15pGvPoQZe3PC4H2TJAYVsNRBrQ",
  "key5": "5PjGv8XzMWihuEZeLsGfXS855L8oY856Shzyu9fi687CXhu56xM6FgNeGhCTyaThKUutsYPvaBeXb8TzHczcFgAa",
  "key6": "2Ngn7rhmwkn5NoTyCbPjGWfVb8D7Ls1jZq9b47JomU8HaUakyPcXKmngiLceofp94m7vdh4JbAEiNkNzvppPiaL6",
  "key7": "5CNcQV6sLPqtkRSyYQyAie7DYgyJK7DwfuJygWQZyzetk56BsvVFegx7MKMan6UBvS7ua8LY6QLHpwsZGW8G6Bt4",
  "key8": "5FDG9WgZPsmTnjHbuXAAG56ZrJw8kWgDkDHC3z7Rdt53ahE4YBcUgd2Fkn7jx5BbMZzvrUe5jSgJfY3wpR7zvDX3",
  "key9": "3vd8NijogCJCiyLV8LaT5LKyCEPW7sfhu4y558zw4DKR7EVNYY7CaZqm7iP4KsuuBBox22AEA7GxcBTAKMsMz8eJ",
  "key10": "Rpc57XUy2P3WytEWp4nfodSedXPz1AumtUwsfPgCSecYEX9JeDYaAUCP59U315ZhWfd786ytNzv7FMbP2Cw1P2B",
  "key11": "5g7oQFsWWpCwTZXao36gW7LMChknYNW3Ax6mLRuycD4NPc1fu2dTmTY9qUyZDiF9jhsk4PXn3zbWcrAB74A9ev23",
  "key12": "3xZHXQ8EXfiZmBdYKsizuFTXiBCzAGZ72kTFFuohBb1otnTwg62abHYpVSu7RXst2PMBaWe1dfuoQ11qfVX6L1Xn",
  "key13": "2cGwkuaVsYgBChZ9AQY28bnPKg2TPurnhrxXnqZEjdnct6xV6QiRzhG7YNXcMPGhtfxQTDX8p9J35r8oN1uxdnGf",
  "key14": "4SewtS5E4TgKmgHmp8bvZc46wSg9vTrDLjnj6ARL4huHkxtFhPsyscLNyAycQ6DN9nn9kfsPRj4QPEQbNdt4gdet",
  "key15": "647vMQg2S4UHBEhd81hCXABWTXkkiCebVxLH14ZGcJRev4z5SRnbrj7xiNvZXAdDdjgWH9fVLkrtQJo8NZkGQJ4j",
  "key16": "51KJig3BMWCmLcSg9DQ372HDCBBVcCrxS2hByz7M86fz4VG3PrhSMvVoCmFvdxJne8MeHsMLRFzaig4P3pXUiLP5",
  "key17": "4Yetxd1ZwTgTc8ZPa6soqPYmXUH5nNgBsTvuRTDhVZmfqAGmh26kiqM2zerwE4SZiXue6UVA9V8oD4H9wD26uLGg",
  "key18": "5mrNFrb3zWbRDNb1sXLhUupWaMLTYQHhPRZZkoaaT1NTqZRWX1ZB2dT8Bm1qG4EwtEw7Xm1JtcuYa9DqRFMKdkrp",
  "key19": "2WsSaVF4JxYRLvzMMiuYRm4KfvJVtijNoucpP2GRNixcQaoDgx1c7s2ZJpCjnpfJTFXD6N6zJZLtjoxaJFPZMUdy",
  "key20": "257bw4aEHbtVYDJLX4WGwuV2JQhQpD7wwHzcmy4yD7FirVj93E6f4uztJrESUFd3ntY249fpa8U6yw6rqdr26ah4",
  "key21": "4VKM2nb9Rh37qnfo1GQSHUfZfeNAesRo6MJ5UsFxBLkDW8k5wjtiEBvnuoLYtKNW6UG9GJgLEr2VtGF25EchjsQV",
  "key22": "5CWq9tJYbK2FrvfGNpG24qRJ3pExphtZGa6s2tXhvDTSRSEanizphwuLbjUcfYk7AGn8Wsm22wV4uLeKtwrfVsS9",
  "key23": "4yd5xrFsLXzEvsX5qtL8y4G1QQ9PA3kjXyXUMuubTfXzxmBZnQUiqNLRtqAmFuNAjBnpaN5eEq3dRgsLiqpvRvak",
  "key24": "3sM7ajLkF4Vk8VQfbw2xvTTtaWNgYHA4yT6mW9vo6tbe7LcD3d2p5Sd4zojktGNFvvk2SrcAQP6bGLWVRvN5Z6BM",
  "key25": "266Nw5tnnDktSzWPNWZfmnm4Vw7ZLEDREutTPzj2E4sdDhyWgLiPKzvKxQDPE5mLWrrZDJ32MenzpBXyWzGnKZPw",
  "key26": "34u59L5mkoW8UsF2cAfkpBVtrqNkRkZehPFk9F4qcvGsiB1xhJiqLLaLGoj6afChxJkApUAmZGudREM5STcjNmnS",
  "key27": "3kUauxMnAaFrdw2B5Tgm2xYV35Nay253U21Xzk2RTwHxbtchkntbZPSUHxBNbMAaDk2nGBNz7pt9ZW5tnpLqbqjs",
  "key28": "2E57dxMyghL9tK17Z5a7KWfSrF5Fj3mjwKH2fR26EW2YXYHs7BQAB5EwvWccUpDt15BvTey54H8QUGa8RLw1b31B",
  "key29": "WWjVSYdhnKvBVzhJfZ1iRvSxbz1kvJEeE7abhYFqKdbBaEra9j6ME8nVUbbs5ADS5zu3Zwsn75iG3Zi1hjK4iRt",
  "key30": "5LvWxkEWvCvvW2Cze6n44WNQpXAyjWbLpB3r6P4oKv9BMvf2n8U352UJs9DhE5ysxNrCNagD4BMsCsGrAwVhBk4G",
  "key31": "Qacc2Tc1VYSvxvzT4daKVGEA4LmH2TJKMzpuJM1SKSs7PTkL9g23UiwDTR9XF5igjJhki4sFtyPcoLLF3NQ4Pzg",
  "key32": "2khx1fGsM2x46ZGAkyqxxGC1h9jfdZWg5zykk9vfQLJDZdoQaU6HLWtkUwUiW7sZS3hdr7TpGEC3SWWDmQCBtTaG",
  "key33": "3zhV7MiF5HcNEauk3arJYyGPggVD7kfpxANG2RHiaKcuci9UxUSfpbaxXsb58eiXKEoPp3e1JVKP7m5HjZM6Drj6",
  "key34": "5bEUQZie5JUqmJ8PFoVWYCj9RHbwzTGcvuZdJYXEX64Sk6kFvPTM7wVgk7GZqVELhQ7ag37DneAu6rJJokAH23fD",
  "key35": "2V17nC2h9Z3QpTfhQuhYupAsAWcE68DNc56Y1jtAaWaByr2QMkXrXntQf3qrx6TA33CzcCjnCiMYr3pXzYKHyN4t"
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
