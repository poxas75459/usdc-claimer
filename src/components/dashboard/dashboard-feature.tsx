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
    "wJ5uhHRaZYoya13dFcMiTEpPxYwZ1ZKWeo5YCNwcT6TX4bdorQECne5bpayrJvatj9qpi4AkTYQZBzME54pMcoV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57cTsSvDbi1DD2RzUpHNH4dLTiBvfnesgFLcbQFSfKqtmZEA6AJzoBw9ZKV9695dqp1KL3Lxhe4WkDdpq4jy6BM9",
  "key1": "4xsb4PMzR98LawZ19u4sJF4MVeqCVHQW3F9vaMr4Eo7gWoyFMWfnYzW7RpX1wxhmC2gMAX1zU8ch4D1DTgbgvquk",
  "key2": "2BDWDV4kqDCFuPrgGYmvtYDViwXcAPnn4ag3xWSz95FPuMzXrrfuNHdtoA8rzuSzTjcg3ty1T1wHUAzWf7YmirCH",
  "key3": "62hXcLyNLSiu8yWABc9vD4xExoapGfkJMrSenF5zfoLvarSNJv1S13CRvmQCK2hHXmEPy5jLb76beNh8iDdRxCQy",
  "key4": "5NMEUSutjtmE7bX1qe6wUwuWNMRRuCpAV4MT9XfpxeJY4cvfTQ1otnxqWDjuZ8P4zuU6Zdd68JycGX2kFT74BU1Q",
  "key5": "QED5A6ardSsAy594F1BKmAqtDSS57sEWgGz9YwabTcJABwxedJUU5tvfJqVmZgEN3uasSyzWZDoddgSMgBf9VCp",
  "key6": "3akgabqy6ntpfuYH1rLtJCdsuAJtEBQYivhfxByW27eP11CHE21aULXMv3rngtbGjWhNt8QNW4BtbPYM7KyE1a5p",
  "key7": "22Nx8632WyNLL8TuXoJkQzDTxWZpuxdKKh7Z32BcFjeZzPv4qJkLfZTe2Tfipy7PJSjgK1RyurGJw4e7S6k2NjPF",
  "key8": "3m6ZUxn62Squ8ueAwu4v6DsY85QGacRovG8TJRHnLqxHiL4UCBfLG6UifZEDf7SMKcevvRoRynGH8as3bS2ixzWe",
  "key9": "5s75ymmADCGcWdQpzJjdCsqBdL2NzsndpbjB7r7QjmEa9k96BJSou3juHgY5Y7TF4p3oFj32tGPTWFfU252R54ue",
  "key10": "5LggKvhf2DZCrN79AsrtGR2ZaxahprbwZSoW13vcYkPNSvgMJmgTt4mZ8pikfMLi4UKaUXPLnE8WEK5gg1UhkNUz",
  "key11": "55Bd5K2xfzuDxVutZA8qMbJT9LLhCj6UsXahPzxkkVVgvQ145ymJvZoCKAm1AhitVVCqhCSFPxTwZ6tz2Y4Wio2w",
  "key12": "1opa6umYzGJbPVtaCWd4EddAoDPZtGGBqztCC3ZzUe75y4bdPrUe6zEEfN6VyD2p5dtYuqHMCcAryExeJbZfwet",
  "key13": "5rp13qSV7qHKDtPwm2dmj7QbwYsACXnif1weRHr5HK6kxUT8Kc8vsUw2jXfy4EqNQ7R99eG1P7cFsrFAWNKTauUQ",
  "key14": "4WuvusJhbEooZMmuhvwCLcQ3uGMFkhBv96KLaxSvXaq8jy8BgRtGQVPgQ7wxUxSgEY6hmt93mhSvwsv1CF72gu7R",
  "key15": "52jpqtjNisDFvbeRjdSP5MGsB921BP9YEx2Uc2USfgK6nRrqeabRSkhoMt2JFiS3rjUiXXm7PmCFGWJkkdnWzDWi",
  "key16": "34HhvNkB4K2uswnpuVh644317cqqDzpCQoumPfRrh1di31bFa95A9PiuZ2a3MPzUjYGRQdYHw1sVVNAkpNoxeFY5",
  "key17": "581gWPuXLZgtRbr4VmgmmSX9aPNTVpHti641CXaQ4LsmqTE77cnuVTEk5kibsi996Z2JpPLFqSAfVa6aCqETkKV5",
  "key18": "21Y7ufKHpPJHNkWqYn1hoLfHZJmmNnsc9136wFmKMa2cLTe3eC7dtvamF5p3LKzDJ4TjnjqwZXnbQU4g4RGG1LyV",
  "key19": "3d2c1yrve3ks1rn58naALnTVKXfq9PueYBzp5PDzZp6ENeM15FrouAMU5aSwBksQmRpA5k4wHumFHAXsQ2DxyCEA",
  "key20": "4efdPFc6Nkn6SxNhVR2eugbYkVTa6EiB8b3WvBAaQ27GSCKA1nWQGCd2WtPW7ioqfzBJUqx2pPAtniZESP9mmLH9",
  "key21": "4ST5AW14nbF7k8BXgpxpFR844VRazmEk9p6BoTQQo33EmxUXLNVamhc7x5KpnZbyU7amkyQFh5NezapERXWcL3T1",
  "key22": "3ejYv91g3B9Vtt97HdwHRVqAEPoekMckEBf3UU5gDiMjmt1fZenVaoVPnfXuuc8Qj6Fph9nWf7brHUtJohczUfj3",
  "key23": "3Vosn6KDr1SFrQw8B5YCkzQKADKkv5acmeMpRup29sDQMyWTAJQDMgMCrwZY4UekZh9TmZDNz8d4Bd7GkfJLu1NZ",
  "key24": "2As7PxA4KX415c9QHFJBDfFnGR6xKJBY4zzogSQjHHTJbgcn227avyM4CqjxzYuHwA1MAp2ug9S6boErwD4uGMy9",
  "key25": "g3n3TVkMVk6egvFYGVmvc2nHwpJPXsigoZ56afPbrvvVdH7Xfbn5hn7FegeJ2BnpRAc5PGBKseaTJijJvySsKgM",
  "key26": "2AFPdC6McmXRFqUrzvMkAtSJ59iqzJWKsqZbGzEmP8r8UKNvq8JaGJ8pxzWSXtTxVfbEajsQXGcckLBug43khq1L",
  "key27": "4ak51Lc81tuSQXVRTAoECUZxEF8rUHL6cmQNoJionfZmZqV1TxzVtQGEc7UwBLHsVK6wxBxUmLP6vdxMMcyq6f5W",
  "key28": "2EGeoCfMPwXRExLJT3uTvE9Km82C464EmcBTnRjfqqK8kgzdDYBGRK3A1rrPd4BU8sUDGVAEmppYRiDbfJ23bJ8L",
  "key29": "UJs5KL2AKe4YvFPumhn3aYmx7SawnKn1HvFAy5eW52HszrERLkgKrPo2PSqbz3foPj2GWgRnvrALpnyv2RCKmJ1",
  "key30": "2VjdeYe79S5nciUeYTiNZ5YTkMS8vsgGphxoh257YWLeFdXgHc96K5FfmfKcPDnD9v8ZH7eUHaEVfcq9p6bnECCf",
  "key31": "vmfdbn84MyQRR6vVpWXNz6MDxLxX1qk9Mt7BLHxicFwTV71LkrNw8R8hubYbepkzEdfkbf1niUUSAoMV6o5uh2H",
  "key32": "3VRYzZSWZCZ3dmkEP25oRVopJLYbrTLcbZJufqfsxB9LWwXoT3CtFnXqahzKVtBwZNQdSNqPAJrmoJCX7mSqYPvr",
  "key33": "ARAgqM1esEBU8nNJ3nAp9czofS4vp2f77pYQruoXaEujMsLEHFA8jngghGAh83KG9zZ5raa9bXLfJjCNCeKq2aC",
  "key34": "4ofC6yV5FFQdG3oJnmBV2FcMp5RyWMNHt35SY9V49bWtPsX1for6AMpNw1dxzYpfpdBge8NMJWio6EaR3XBFn4Bh",
  "key35": "4qQfuJWprCjxnPbqvq9EmXTaLqB4hDnvTjyTUawkG1xQL5roSwAL71dvs2yBEmVH2WUsg4FUA1YwWKrBofEV5oq1",
  "key36": "mDnUw9B83Grf46TJrYNRYpCi6zTRPrWatiSapNE5t4Yso26Yhr7VhxfCKELJLB6Yspj1WprNCWj4pWNnhPG6dcQ",
  "key37": "5J3V6rUXrHQnCTJm99EcHx9BwfKpmdf3S7Hd6XoNkNoXU6c2rLi7qJJ32HoqKf889f7swgV2mzkbxQdcZt76T8cP",
  "key38": "3ydjvT3ETyTEoMD4LaECv5oS7WL3zoJimtcpYzJogco1renHge7EMm5eZ6JZ8Y5X56r5DrvRDypVgTQtF622vrVH",
  "key39": "2NBkQcv6Qji6qMgx2koU8FmtR9oAgyxtXMW82uArn9tvhRbVK6nskK8eSJoKgV3qGSD342p6AteWVJxPXL6W4mLL",
  "key40": "3311to4fQc7sPGyb3BTLpX5CjFeow6zQH99dbL4GiQnMCnSfmT7EXEMHma3eSdrJqhhPy9wmMkd2miLn2UQEYSBD",
  "key41": "4FPUHe8htF6bJKQ5gpGCS9VBKFRjviLoLTwYErekcqdayvxdMPgcHYmUTRZUMZuSogmLUxEvRrYk1V3Fe3JN2beT",
  "key42": "4NnYNp4AKexy1RrtLzVXhiCccua9HHbfkGCPW85foRXiKLVd4Xszp2phAFDoLLAW89h3n3hTmLjktDYJxbpztjYk",
  "key43": "jAx7pDN4jmPNrRpLgqQ7tk4gtFDrSF1YMEn3CxuQ1x6piDYm3hS74QpunU7ejZbGd6kHmPLsweWVrBtGh8A3Ltf",
  "key44": "43R7SnnHEr9bnJCYm3Rh85vJ2tHeiAR27iGQ4ZWuLXM5XoKdHPEjvxWrZHdWtL287sfXrTGZtXMicXhmq2Uqc5Z6",
  "key45": "5Ncw93paUJF3p2wmCembd4NMWNuFJsFGsyWaA76eoKmqxNiZn2DwsX9xfgj91zJDHfDCijHnzcJ5ViqyXfeZW4wY",
  "key46": "xKFyhYFwotVCD1N2Mz8ExqieySZAFhW4f5q9AQvww3mhVmRKbGc9VzCw42RSDK7T5pKrzKJMH23yJt1jj5J7T4o"
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
