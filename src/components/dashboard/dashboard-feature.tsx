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
    "5BHA6CtrT4s9nTse9DKiT7TPPqncVn7Nx5MnAUCaeNa3UBMxK79c5BfQxAnCkhjm9fjMVaMXkTQC39kbUSF7re3a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1DbAPGSmmqZCGZvnZ5vKsbXEo37J1tidHsHSycbnLqVL6yY1SgYHZZegf27HeU7xx3U3jDvcV29uB9oFPvLEL4T",
  "key1": "3Lz1kGU7YqMzcBqjM3Hv5wMMUpjPq4MUghDuw8PEoj9Zrqss3S6eTw91rXUVYQWzLU3VvbqsbvYAMRnNnLEJ93ht",
  "key2": "3xETteH5gKysUmtdRfEkKpZeMLFmu2tSLJNKVtvBWyoA9ZZQyMANMU9hMhf9xxMDBPsw3CAvob1v7bT8CjJLh15e",
  "key3": "kt4VmepeuRTT2kvmAs7wSb6tL63AymTLj1MRYmvvavv2jykrGCu9CARU3k7URVRDVMoEHJDHayuzVSmTXeMy7Pv",
  "key4": "MzmQaPLVdPEw6iKrVGFqNGxZNEi3dAJV83egjjRQo8BKqvF1BYycmsDCN5xiGw8G6P3YbYknmj2tqTrwdWKZxcM",
  "key5": "3iofKZU3adDz7coPpugtfEiokwy7chmbn82KJ3MFfNVLUbX62UXUUxb6MkDAsvjPibJoJ8VY7HZJmKpA9Km3m2u1",
  "key6": "2Tpnidzh3tYydAadvSpbS3TWxZ5HoTnxNnsUQPSHJ4UyxeHAGXz5hTMY6vRDzb4dCE7DRuLtMszyEar7ji1fthcs",
  "key7": "5WXeQxioT9mv3KavANGk2D7CMtLoeGLr8Pbm69KRcyZmP8L8eKJEJScCYWPBpTSDqgbTmaxUMtpt8UXSD5UuD8Dj",
  "key8": "4bRwdfoja9xqsoyPwQR47fsXNaL2fyr3qanX193vT3AU8kqScFS1XjL1nHSiKKCPvGb7SrPeBxAHhPTsdNJSJDnh",
  "key9": "3LvD8XwVphExxHLfSPMUhBsjM2MQH76QZU8aTvxLXyid5vUinogKNKmREbGeBwe5xdoWLo4LvaWFLNiuJFQ7h58h",
  "key10": "3zB7QUKEDzLEAV3UV5aUQD3kNJCXoYvP647PA78446gDURjoUoPE7RbyDZPvNP1YHhRezCdCgYeWkyZMoLhSW7me",
  "key11": "4httv9vngoC5Ws9Q1xFJoLdFoMiCYTb6pi7f2oANjRZpUpnyNPKXpjPRnupKy4Ds4GaF6eUJCTSLuKy9yJ79WHfe",
  "key12": "2N2ZmWWyFjLH1wZKwvq5WGsoiHAdM86q24TATLm9v4spT9MhTHK7nhTfuaJ8N35ERgb5oZQtaP9dfQaCsrArcA9s",
  "key13": "5nA9Tz8nb4vEe7kBn2RXxdqokiLNNNAXazQXkj4r9fiUNgG2iHq33q6hU2bs8rLs11up2CExJ5tziePUyyvVVjkT",
  "key14": "55BWTwK5GQXfmbKsbsm8k5SACuKiPinbDBMuzM7enbpJ7TpoE9CaN64T6G2R4UUXE4PNufDGkn9TAkJKCZrwkNcW",
  "key15": "344epB1K7QZaeYt7rbvYDLThSTs4bsNVii28JJUxtvJKTXbmCNhYjwAncb7UjoHxc6HcaF4iQTUaqFLRJd14kDAn",
  "key16": "2Bxm3DMwTBXEggAP9GNwYkph4irTuqTXFfcXLWTKJsgBkDYBvXxZzBnu5J8mFi9K2PVFKfExd8sJUAP17GD7zoA7",
  "key17": "3VW5oL4wzhPefLQobuYJn7kabz6C7Ny9s7oRo9iYqmoCoGenkAGuN4x1DSxnrP61xqS23Kyv9T9MjtDu9gpwHkvd",
  "key18": "63i3aqomfKFAjyjHFDSJuVVGmCdTERk5DZKMpQsAhib3hhqvVarrpAQt6LiY8gpcruJLeq89uKY1jJgQf4ifeUfn",
  "key19": "2gF8xsPkofoD83u8v4UugQgijvr6XJLs6KDvwi8anXJ7AcrZZYFnthpEZT8D9DP31pmFvwD8sHTiHurfbGmwLKYS",
  "key20": "5TsGG63zDeH9vtV5aaMojvR8PMKsAD22CguQtHs963mSpHCqWPccSxBKhVdNSFvCkQmqacYExG6C5LCQcvXLpo2J",
  "key21": "uNv8RNeNYpsih6CrjYNgbz9rVD2yuAr2bS4VJwSXuMfBcGS1BPatRqRixSUbrTfDPT66ouWMfhpNBHNZHUe39so",
  "key22": "5svX1JBzxfCRBmngNHGwiKoeTd6hXjEaQVLsVqodpmbj7F8rvnp6xeLgS6fkLn6Z95RvL3DszMHvwqsWtSrdzCyZ",
  "key23": "dgEJoV7LXQhtgF7HWsvzGjoCSHCEn6d3c7XWEEPpBzSQkazytdckKHhDt6H43r96hWHjL8xcfa7UysikvHxocvh",
  "key24": "5HHuXP3BGM9DrPPKHSH3BbioX2cenKMVJ7dgzwbiQPx8PiikSZHWvvG5WTB91jyNnjaPTqKZrMcCT9kav1iqnQw",
  "key25": "4B6QkyBp74YjtYisX4iPwquomrqe3qWfCquGUuZwrMyFzTXvdp9dxnLAs494bHi6DPJ1Du8YVGoS9BgiSXmaN6k2",
  "key26": "2wXmSseRuqmykVwJpCD41gNsXLUsN4e38zHRYJwnxFpN9y42BZZRfqjefrjTejfA4yyXvVy8c3uiLNgyN95fUbkF",
  "key27": "4VXxhqQqnngSLR8rXbLMYe5N8Gz8GH9iMHZn3RNtVtwFcHgXPu25PZLKgwxZhypzCZEjm8aHdULSFxHddXJtDgVS",
  "key28": "5v21Agg7ZbXBz9FjZVtSo8ivchZYGzKk2sspnddx85nEN4ptsknrTkWSWqksmWkgJJFFjnwqTp4NWy6CZbuxtRnn",
  "key29": "2crBmzfC3zwm3akYGQ285C12uBdLogLJeGr7h7qxEBAYc4REKRDEw5Y5xZvNUqmtbC7quYeWQt4mSvWsmRZfoLyX",
  "key30": "3Uv3Tcv9rkxA6mw58YVLQzpUhYeDy7a74mk4PwPCmE9RLWtZjw71kwe2CarMLCDz33jtdgBwyUR57MYuiwivF66G",
  "key31": "fgNmwbaBkQoWgkJyhQa1LtNT69eTXYYGsr9a9GEzjgY59p4XgDPqdXRoGRyEXor2NJt1WvXF23jBf9f2RfWMVJ8",
  "key32": "MctuVuj2v6BHRrjVMKEfPaRSBbs61DZrEP3hjRhZ5bXxQwv2ywX3YB9dgbHEuKAzGa4c12crjDb5aFjHPM796AY",
  "key33": "5VNhVC6Qr6tXDraacjKTeU8PSKTQt2yCtDcoCxDbNUdaCoi9dU2CPK2d2dzXDjHmVwykymGT4FSQYbf6Kyt4qTn9",
  "key34": "4PQD5ikDSapi324X33ggjZVyzuomivsVpfUHRhP6ye4VcqwTbeR82ZwWvaCk6AxSpdJz6nDUDHu18oa6MdB9Pz2u",
  "key35": "3P1V1iuMrTPjH7N9F6DPRWWWaeyNoygnyCs3WYXHTpMRFg69UXhZvBVYc18KceRiGaKdVAX4cTtfXCfaZ9FtWjnj",
  "key36": "5Zg697cC8sBrou7SUJexprpKXLCxBA1zJpurSvhFxH6hMqqkrPxn5bZ79p6yuCXtYy7YpeChw95hcYaZgvo8imiX",
  "key37": "4QNUfMdZtbtJconzP2Jnu2Cf638iMum4B2bqKDwzM2Axy8ebjjnckHnm99pk65upjej6Fru4ig5wn14ApK57izeb",
  "key38": "4nBRTYncheoaXNVUpMa8sPR4rw92gLc7T44WdvsGGrFPLPEaUa4CVyM578jpLTjgprGtWPMRMKhhpPSA4x7dbket",
  "key39": "4kWmnqcW5DRecUt9BtXwpmmwUZrzTPfQuuukpETNGfrWxJNQ4X3JVhw8pdLqhsSpJ4RbmuiL2J8Ei1Gh8tXAj3h3",
  "key40": "3R4RXLchZdCttLzJv4KTdyNMmbXocwrsneZaP8ZSU6ixyhwSUUYyF1UVmWMuAEwFSATrJS5TWDDSa6vaE4gv2RCY",
  "key41": "4VNhkDyHRefuuEnh8zfJsBsDCUUUuUrCTEejsUqaPxFSrhLKf6oPGi4rMhVjfTbQJmHEYhWg2VG3N132u1vXTfNF",
  "key42": "2ukXbXhhodT4t3XgpcrM2idKGUDxDDCxdEJaPLsL1mCRzhLQbrwuE9GNNVBByZRvybHkPGTed8xVAHL1Xv6z5iuS",
  "key43": "4z4izvtnCBYrFB4BipyRUorWgQVKMA4zSZFatcbqNJHj7McdR2LP8TEcTgW8f6RsSnksSPwDm9bz3A772nPReGDR",
  "key44": "3VURDipt277tvKCGVDVdgttFDHsmnPvLX342cNjcn5vUXrY9TBksDPZo8NcZzc9DyoAyBk15xHPYU1sP9dCz87ju",
  "key45": "3K8ciNKwC8oN196Fbijau1oY9i3nUT6wceaXJgVXjneaGqkV6szK2mmMQa7UXPByK8sEGsmhfEs7Kj8ZCvXwFWp2"
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
