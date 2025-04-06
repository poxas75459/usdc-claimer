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
    "5cQVaRccc1GTJrYyeeDh5f9PmfBR4f1xd6fCHqH3C28Gs9J6HpVksy566djjzp68sZXq8EP2q3HHe7QDmUqwqGD6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Tp9TLyPmUEtB1un5cdYgzAsjau6VKQBDwNbU3em1iJ4YKamvisLHDSWDHC23xxuLE3dKQqAqk9o3baXZytz2mFx",
  "key1": "xjGVcawsXuRr7ebbsckKte7e6fuYfFCSgF63ybR1HqyTEhBd9KkPBBvHhU2k589SgJWJnsQec68pVfUNwgfWUtK",
  "key2": "5CcmSjAHkaeHnsETuSsaWunDcNxDRFt26i4CuTYgUwU6tbHJCHaXk48evN1fQB1Ro7Qu6s5Fo8fRc1oqJoewRYtv",
  "key3": "RD6EhTLs41Qiew5Yi2THiXXNjsw88WtpmzZHKyM9N6eRuS6x2ifWSU84m8wfnc6pPQsRhkzUiSzxxAgYkkB99GL",
  "key4": "5QedbCTp74NsFVwcM2GPxoWRq32T3PvZZiyNpeZWvLd31pa5L5KKEFC27xrAmeXdWgJzgQDVh2Js2dBL8D9GGYJi",
  "key5": "3eqzG3TpkR7a4ZCo7ZQnztxgm27aTPJPesLfwUNUmRYa1uoBGUgaiBim8y8aSGw3CizTDcu3vcXzR7a8FZfFTLL4",
  "key6": "3UeTgqd1TrRtuKhAUarM2GjFMYNF1dubF5xPUi7LdYXYbE4LZwEFypVchndTGayZXiCAmQrLtw5mw4NvvxuCgieV",
  "key7": "3kUMDs5S19a9V3V4Yv8hpC27oMwcRL25S6Eb8PFhRyXdF8tGX6sAEWWuzV8YWvXYWzEYGuDdCHhduswgAs2UVzHU",
  "key8": "422tFUPyaoW55c5ZG5n52tX9zVyks9KpZruA7T7Em2HM5HWXac1nQs6BaQG11Bwx7dYLF2fFE6LJp4EwyFMYpu6s",
  "key9": "5rMkomoXjGtuuHpinf98x2wmeaJErmEU9gyuh3zWPMLjpnMxQpCUVnrrxGGS7p1GSpEdG3ZrAzRBZujTJiirSbAr",
  "key10": "4ADEKszKPCpnuNYntX7q7RW5YDv5zMJAVkVNkuLgCZ5TtzkZ7HLEcD3bNfu1Q995yygd2LYtzTvtheFUjQH3ejxw",
  "key11": "24jAvuj7TCWnFnx7GjCjrDm7jA8rsiFyFLSXkGpxtet9qs5ZBQcLzCoysKAZE9FAwQWzTPtbXRmYS7AoH4gAP1jy",
  "key12": "3gcXtSwnkcXTHbhnuDnCxVu5qh47WtJkvQMtCzxxQNjtfg3HQWfnjvM1WSYBex1Pxxey7B5zXKECSKPdmAnzCATq",
  "key13": "5wq6YbQJW6M41TANcNFMCPw5GPC5KZz4zgjUjfQ1C67VHvUDmT81HWEFSXc8DMB2GSX4otTULRk93fhrUoiUPKTn",
  "key14": "2tMBMocf7vcevk6MvZw6GLDhMKPP9nVZCRaMYaPWRJUyL51RhwYPpwSrGXeC9jGJhhBqiNzh3ZMHvrzZT4wYenn8",
  "key15": "2Nauv3o23bVVjz33DC7Hkbn9cbWiKpYtwSjEnyxtCPyi9dUNYsB1sMozn2weSf5x99aHqyxVAsAc5eiaoB3gAUiA",
  "key16": "5nPRHoUYwa1fUrdAZ75hgFFZCiRarLQhHkUpv9tzFgshLYvxCjM8a62bkiuo4ninssDqQ2P4QhieyRxyCtuCkpZm",
  "key17": "4hTqbUJu4F411WuxiNB13EN8dZqr62S5j2AaC12VkirzQ1wmKnuhcBdwStp8eAV1b7xGzoGaAP6VzLWYYQ51d7s8",
  "key18": "47qAYR3HFN1PEXSJjzQsqhanFSa6t3uxnJ9aq1ScU5nFKpCeHomwXoRpMyNbiZZ8reBmizMnu6WXjeFyj4FWRbma",
  "key19": "3MT9y1UbxDchNk5v4CADqxQYggBbJjdKTQMaN4ALQe5nfEqFDshobauYoo93gFKod5rjugL7cZPqtXEktCCdc4hx",
  "key20": "4Ek4h1gNgnXehQidm9uWXPw4JeLy3195zy8hej8AAST6tS4a3L3wTPR37XYW9WjFfqPEm5yRe2825WcnHaBJDRT2",
  "key21": "3TNjwJGUrgw1Md6nrqXASsbMkpmbDE79rQ1YhA7ayprZPewU9yThZJjfBMVwtqRtE8abQHzC9HL4S7WxX2DZc4ZV",
  "key22": "2PYvSp1VWeVd67wHKTvNoXzxkSSuYrT6MEfXfVCAHKrFbCLJ7foFyFtrbGNsQZQDYJ1LjrVxarwrC75on6g5Qpo5",
  "key23": "ppX9yFxZ65EWvXyK5cLY4TrnY2DjssFNMmUDpZMs7Z841eA9XcBEAk1ck4m53kPN75AagxbEWwohARRbgqdnAnp",
  "key24": "FJ8DTJtmcVs9EBj4YFFWy4pkRhH5HU1BVSzsyp3p4hNL7pg4JQwYHaoeNo9r3KPiZg739VfYoAfRc5M7R96bxMP",
  "key25": "4H9bsMLCuQgEKnkXZpUSfuC3mWsjm91DSz1UjiJjasvjnLv9Q1dPTTa2vspcmQ2otRamejg7dzjc6jJDoJtSdtMq",
  "key26": "3JyCud6LZ5GtYfmaUgqkrCY9o5sDwc7EzqDaLKLn3jmFUvqs3V1fUYRtHqFkJNN5EN4U7mKuPxCg4EChdqhoU3Dr",
  "key27": "BAsDPrs9WY4ZhKx1NWJDFz2mtZZXChWvjtXfTuuA1xh41GdkbdC2x8miy9xPWiRUFXGcMcWTwwBkRLJ246QfzwH",
  "key28": "634oa6d1wLisL8pvyhu1BFPxCfQcrqvJRuG88xrGZ6Q1VPu64pzJ7wKjGp5Bw1eL9wmUyoXSa2RFvkVq7hZaaabS",
  "key29": "2XWW997Cx4i3kRjrk8eTS9j7uDGwBmrvvpE8vvH1HbHDTASXdsESPyYCVEgRqt95iEvzaptbU1mtJsCpY5kCghKo",
  "key30": "2mEoCLn3tqzMewky6bGBNYPKVGPgUnzwcFq6vSGpsnGLUaWV5TkMQgY9VuEyszjKgC17Xnm7HqMoioM5WZfrEZLu",
  "key31": "2S1vduffyMEBs1g3vZZo6g9LdvvJw6gDTQVHY3HnUg927Uj7AHCLVkMPrhDXw2q3bpda9FCZ5S249dMxmxHTTzBY",
  "key32": "3yurEi4wAYbBHYnLmcB8jVKwtsk8rbt3W5qDapR58bkaTeuX6sKrqGWLTxpfGR5bwJuMk6LbvJ61D9QxLsFgmqEX",
  "key33": "4Yt2TCthpAetjShyZ2QqVBYdkj6N5UMRiuAVpbxsvZCBM5zJu5KYws6tEkuptcqLQde2Sz3n3Kwx5jCUhy1rYvHY",
  "key34": "enUDjohqCuH21dAoKKpFSyzj5HxnxJoaQuEZd7CRVAdmhBBLbczYmSQdrUeXeBrrmS8CoaWA2FLD2NzjD9w6kx4",
  "key35": "JQxYabidZtUujfPJGckYfpADwSAY5pCiTc2vVutnmVkzKZTB4V9DcD5NZ72XnKXeRxpKKLkxAnKhhFG7fcg7S6K",
  "key36": "zPvDJJc6mUcYp9wk2rFBjZHf3KMCR5ZeBd5kgYBp2dvsgTq1GYiXQBpDuau9ubP1n9z6SkxZenUq1G89ULTSnPK",
  "key37": "5xjfHEX1ztXn2GwYex1DtVAcPjtVmUPJ82LzhyF5dFwMfgf24pyspyVXwc5KZ1GnHta9CzPeWWFLetty49ewsvZZ",
  "key38": "29tkMkwVvcmo3iLq6qkwF9pJL1V9CsJ3EFKxrqS63Ffz5ddkfCWECwCnJfzda3epDjPsZzbUBn9pkddRHKJezazv"
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
