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
    "FadcLo1LkrA3BXazCR3sEeqcjXW9RfsQCjmtPZCsUudDDriCsF8nm87Z4g7MTi1MUaCwZJC2mJ7XUKbk9b6zmFo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4srAvpxnZWB6ytdvj5imWzDiupa1WGQk6ktCBkLZVmaJC1msnXZPKTCofAPk1meAgmNtSsaKBJBcsGXuQ2P6uLD1",
  "key1": "5hWptS9wSK2h6V2hod3VuYpr1M3BxcpvFiYATEWfTgxCeBUoTiGbSGTUQv7Q6sU9faeQU79AurmwpoiFfpxeNEVF",
  "key2": "3D3zTjjydfWocskuxr9U8xHCRnqynDLzLJC5xjoZB43Zuqtt4UWne1g4hDv9myGgi98v4GDYYSzcNDkXWuLKY2yC",
  "key3": "2bs1sNMtvj1EcQkjLp2h1FzXJCVWbWBbm5pYNVHvjwg57S6JP96Uzkf2Lt4kg4sEBPq7Atm6yufPd68FtcfaxLzj",
  "key4": "5k7VUbNajkkooWXobwRaTsPPEJtY76Ey3pDNVSkMZPQiSwhKshPzuJHMQLwqF6SGnqRwDs7rbCrVD6MZYJ8C7meQ",
  "key5": "4BUE44SASSrkGpMM1wRwAK3wiXMrn4p8bhC6Y74TXmffkrbTtnMzNxUXhCfAeetjbMC79SaA6orLB1HHFTR9AoeE",
  "key6": "5EufrGW87h6FVmm5WrCbZQDQBGXmaJNCkEYTaxBdrzhyWdrM5QZMjivTAYvN9TGyr1rVjaEq2XnQzukwwKPS1gKZ",
  "key7": "P54ViK5FKErPhoKaxcxeGvdpkhAjMXRMq8t8auFubM5nmgYAG4o8jdAH6kur39szZu84FEXwFbRS8EyzCxCPCpE",
  "key8": "46LA5ufnQCuRhMzAWMQH1hfoy2b24DwUsczoQn1ULVNxTQyk3YeauYMJ9sPYTDUKuGgP7iHSDWQ4NJEbin9UVai5",
  "key9": "DhcXhaSUHZTN924wwgUtEW5SkKKQWp7LtUz9qmiyVbXcVMqpieHts9FpjHSRaejV7XYUad7DMyv32EoEBPd8mYt",
  "key10": "5oyk15BgxnRbocMoS7RDfwSeXzdrQLrwAgWTPzZnzPosoXeAUKYTq6PH2nNQWuKx7pcB5jgn3Cjh9wpmcTVuyjx5",
  "key11": "2ecqdgNfVbGdYqgggUB1r83krzEXbQPW7xrzViYNrfnEfT8viwZ3esEeG5rnqtXaT7xVcDLo7Cu98rxnkZx8xezD",
  "key12": "23MQYTA6JRUr1sBmVUJbkSffiqiNNvpV95yG7grVQuifiyMGizhFJ9fz7jyvfduGsvy554iA6wmDoUscVdaQmni6",
  "key13": "478adHpNKJBVGmiu7sJg54vKtNGYDikFqNKjnASngLHMaZvdTm1AQ83WpfZAVTfp4Cix5zQJP9qWr8167JxGWvXn",
  "key14": "2dgYMUe7pzA96yNXd7FpL1HudCmCqB4GxpzAnEBvAkmwd2yDpTK93x5kMmmFeDkMhSMq2zZtyC6vPCxn4w952Pxi",
  "key15": "4cRBgnitigr4Ruz9cXVYPcmXUt9S8Vmm7qV3a86f3Ahwgt8w5N1uyb37uFC36z7dH5f171r38iE7bK991V5Cn92N",
  "key16": "3cMNF3STfo9tiQX4f3oMj2UJ9t7651vZotBnftnSNHFA1mTA9dRU7bGkxWqsjRtwoAczeUtynhGW54jJkyvX1tqM",
  "key17": "3bX9moKCZeKSm5SRonELbWqwEJzKuePUpeu5kJDBZZqf5cn4M4ySNPukv9XHMoh2PTmWCo6n1Erc1e4mqwEdeKZf",
  "key18": "5FLSNNY11rExv7iZGQj2mb4WCQqpneSwvyBThXF4uuaPK5jUZEh4ZtKrEY6LnXa9AdUrLGLfKVqFnpENHdQ3xE2J",
  "key19": "jP77RT7z8uNk5j3xwFWWWTsrRbSEakLLoKTU9LV2Gqey9r77cjQTgCYPCqm9qLbAsP2F3ADzziDmejDHAUn7XPt",
  "key20": "5Cnbreyt5neJY3VTRrPYMT6XRbhzYKciwE8tsLSk7RYPRNEwDAn823Z6Y3ac417YdpqDCirVhPwS7MXnvMCZrht8",
  "key21": "2mD2sCTCs5mYShNWDLwpMMmQJCB2ar16doYU4dcWqdoYBQPNHS1fC6EZkR3UPqmc584JJhoZvQMmPfS6QdUN3Gcf",
  "key22": "5Ej5rqhh4pXso4HjmVGZHmTrcUD3mJ61eViM3cZjpbeNZw2YLAsTq2156ryKc6GdQeEUJmDJKhGs8Gw28LL51DZp",
  "key23": "5DhbRxwwwRxqBegKXTjRdbsAnuBHbX4jwPqZRSC5PnCygAYgqgm4HyKYuEWapCaJFNX6W9EuMDKnjhpq6zM3uDvs",
  "key24": "2QbAejyjGJPWZgEVDRJoqg9KYxiUfAqpBEz8P13u7LB7Zk28QBiUaf73bZFD3Vtph3ykWKiLbk7wtgqHTmqehnF8",
  "key25": "wD5sLj9qQWyfAdCJ9rPsbTdVY1bSFFEYp3qFYjNTgs1wK9J8uQhVtBB2fwYPjNvGn8koavR1ywi5g9ccbFLAE4J",
  "key26": "44BFaRzC5ANR8yzUNh5sViNaBCUeQcp4ckhCp3PiB2UpA72S4EAcdPkj53QCEExkRGpRHVC7bcr1kQ95Fnq7PGbm",
  "key27": "57kCyooaWYPvgoaqc3FRrMfV2XHu55xdpcNCd2HYD5xboppJKvaez1Fg8icHirJympxGw3fQ3t51DJ3WH1QLHrKV",
  "key28": "4aS3JfqHRLuX8Yc5a4JoKJVP76VdHVUZ2d4bsK2CHbKbLdDyTiZUBm5yA1xdSTd3y8387G6CKX9VsGqLSAZ6AWRW",
  "key29": "2LFXkujR53unDjhuTVpRr2afMnqwFeHb4HpqMtqj6XdYge3N2sjzRu6x6Pu17BXdo8rBqQoKW9g5ramkkLArwJKr",
  "key30": "63PBangWKxi9GAfP8idNhQ2gVwCbH1wKfre3k62f9ZHQ636QptYczmdCTM3NMPdtp35PxA7ZNeUrCDPmh3dwAuuQ",
  "key31": "4Tjoaf3imZa2JdLYNYpzFr3DKQM5s1SmrNHEieVtxYgr7gnhcagif2YEjW7cEab7AB2puPjPDzQ9Sqa4UzccPaBJ",
  "key32": "3ZNR2x9ETbMSdkNCFa5oC8EBPG7dJ62fz1EAHv6z3YexH4oDWkCLvtm63HA47neqcWfNyeBR1pBPag9o9QJ4FdFG",
  "key33": "4hAeRcTzNNb5hKAweWYNM3VvQf7NUzQAr2jBPMu6a4xNS1GmQdqLnjevtgtHFHi2CsVrreaeMjZ82UkrnmZzCbfn",
  "key34": "4CWoE3uy2HB53XYpm9ERgRnqFkJJPq63SnYDSgZBh8rxG4UNwdpM23KhBhVtnJgbWa4uG82yrTR2cosSJcjvHZfD",
  "key35": "3KTsRktWWfVNSKo7kSkLKmZ2UNPC8zMw1gcxqnkE6aVUatav9op3kZiurML51cw7M4KsuU31izD31jRmBrY3qHoY"
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
