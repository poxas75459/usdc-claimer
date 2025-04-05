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
    "4SskwMeNeGudqy85T8gRvsV8EijiUHUqL6FiRwqH9UBFPTxRuZiWKZwsk4tzFUdZhBRuMtU6tzu86WuaCmmGm9eN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24AqE5Eig6fPKeRVPUWuk1fnGRk8q9NZvBWXNTJfR9usZ1BYGmcBEoaeF1BymAPe7ja66bBZkGkCwnYPrA7f2DAU",
  "key1": "oZqUrZkKL5ve8XKBukn9pTZwv5k5gYYCHdgwtyi2s6Ucqt8wpLjvAkooAnsLKN4p8WSrcRsvctHTsqHQaPUzMNe",
  "key2": "4yzuB9ehDXZLHsF1exgueDQVutCq5cp2VgLEajZ3Sj76rXD8bc8enfXAnZR7BWPavP2deJA7Jk1nKJvTGXW3H8KC",
  "key3": "26VVuSKKgMVp4irtcpxYydMN9C9C7U9BJeH3YLyQgVSJ6mwNm5SAmUHRHNMWwEtyoJ4BDrij49ut4toopV7tUx53",
  "key4": "3rm31mJCc77oA3Z1Gcf7DfrUAAzgMB4fJbffKW6TPTh3DEVe4BF1JvZ5gAq8bHLVJBD5P2BT1i6oBqoKMb6dCFAQ",
  "key5": "32sYv4cFVgvuewPqvjqSYe7k3TogQ9xm2EcBv5buVVUqP8kFpWqeX3dVJPxbb9uGaroaUDBfPdXjaKDas81zShGR",
  "key6": "4yBPKBxrTDikNS9AvLd7NRDwxcs69Vdv2odC7pQV5mSyKHQ6r1a8q2XSJGoKEccorxTBMDLgVWh9QFfDVcxVXy2c",
  "key7": "2Qj2RPYez5TVdPbQbZrYQ8AXWivBX3iwJKxTwhVwCDTcYcwgXdW59CsUDvo4pDUexQjQSE7fi5RQBgSiPM468kgd",
  "key8": "5RG6t1wjvEKy2TQSxR7QZeEmd1UpmuoAPefJ3NavxYAAogcEomrBpa6ucmd6fAGg9MdjX8NoLZv42ayb6kDitay9",
  "key9": "21LZFjxxgSwiejyzUuZBU6UqgLqLozidQ4nvej4bPaW6F3cBfU2DVCjCQdhbBx4Ub7S123HDdWR5ams95HgWyrdq",
  "key10": "59aTsTbJvWTPKwGNzHTzFaGgm3knFgkP1oR3pMzHEbxRjf7CQo1hGoKMbt7xxxdS8ebEHJ79b3PXTpBrhphg7ACD",
  "key11": "4NUjWKUuPKwBzFWkHYAdd9snCqFZUVwNAtYfC1DtrxvWtwmtxS1ediMHyykwYDruQBW9tLZVcbt9eBkocDh8m3iS",
  "key12": "7MSZ2QXsXGNUZg7VqyiCJ3EzfbVFm91mYVUrrV78okTbjrPotfmdqwxmRcqooMxiptuWrt8Av1Bt2M6xH9PNjV9",
  "key13": "64VF5825YMmf8CxzESRH4r12HvDU9NTqbkhmdPeQ2wFtPjNeqTRqXzPCx7bJ1cYjQzY3Nv3m7hLRcbFP55B2CQ4r",
  "key14": "4SCmpDwcfCScivWMCr6isaHnwT8gWrmxRvfoCGDuyuuAmqrhhEKnFxXEwXHEoEcJXboSzQknEKyjuzgjDoqaa6qq",
  "key15": "5RV3STsYTgudDQP22WAtGFqfLWKvxWagUte5QNQqvfkd5fVNQdeeCMTgEzhDXDMWn7UZPrnjJyEGV1wN6zaKtXwW",
  "key16": "5sasxNVPg59HkkMjGbRrr3J7xrc1k6c6rJfda3soEFdpjp7Pg91QBCg9DZJxRbazfZGeXPoUMF2mZEVvD8uAEPR8",
  "key17": "2Qr5ZFsKcNvCM5zpaCSPwqna11iktVaMJvwVF2m8jhakMSDccqbSwH4t3GXUK6cXDL3nrrb5Mx7zQoUu42s6KDEo",
  "key18": "3XrmRRE2urEqEtiGeJTzrJqCXYVbL2u8ZL8S6cHD9N83cccrB6uXWKEXAWwrd44RBUBX5q8dic662hTugsdD1ver",
  "key19": "6648cdrTGbvfUQJBEP9jrSzh2AkH6pC8EVWgoqbRDLEXjtFDoPGMFnHwcg48o4g8knRZoe8VTYTGfnrCmFD9jiR3",
  "key20": "TCCAW8JGtdMGVkNG6Drkvo56YTAaCQN87CvhxQn6FJVTgoScnZ5EoTVafvius4mgi6iwmWuTtMQ7iXxbvxsKh7k",
  "key21": "4BmhudrWoEV7jPnoV4aQUX3eV2M393nyjBcw9aWe8JmiN3FsQuqZ3x4xbe7u1KTymYADtmvCWnYMGbWXiJs9uSwK",
  "key22": "3b8iwF4XsizCyVTSD2tmFTxzGnvBnFK83QHSrGZwR2mHhgYTiuGmpdgniZSHgwax8KKWP7pKyQM6tee1KWCXyBS1",
  "key23": "YeHiEYLsNne7WDDsLZGF6M8nCmmu2c4FWpGZY2V8q2ok4cg1JLN8QXDPu8XGuN3TmdB6yJbdMNGgMhYnXzVsbRx",
  "key24": "66pZfVn2r3pwue9FaR8bsYqsA8At4QtZHCgKDvHuBgzwtvcYVZ8tnjP2Pj15MX7rXxP31JjTGVWNKkemygrdWJF5",
  "key25": "3GgXS6SCqYLuUPBuXfn97mGeH9LPepc5WtxhGWURrrZAPfn4cqrX7DwdD4GvTJ4aaqK9efbarjA4BJCqcZzzmz7X",
  "key26": "7RfqzdWPozcyHqAMWQSx34ffLDMWWf5zDPwVyaVj9hH9kB1uyuiffMpYVU6u6JnjX2jsthAxpXCDbJsKHD5bQWM",
  "key27": "3wLhXTdA2bpauLxoS9xJs2iuTMKv6Cp6UzCJjUYX875UifUUAZ3dgbKGg6vrK2PUqT63e34YpFrY4LvfgGirRN7J",
  "key28": "5Sq9nmtCjCFNbWcLytvMgNB56cDMQytGv8aw4uVQXfQ916VDhwBxe2CgaciwuyroXm1iumLpFWUJttTHoswNxLBd",
  "key29": "LzHYjN71AuPP9W8kSC2DBN9DDEjxmvu8Yuomt856zPwJoEt8t8wrHqDTxPSz1Xgeu5aotsk8mf5jmydjXTX8G4g",
  "key30": "2pudQx1vJ7DnYK9Ch5nVK794R7FL8EZQZYe84Fr8SFuUPZUky2dECwmWSKCHs8RKXzvBvMaCGGoh54Vzcmkcv33F",
  "key31": "2aEQEnC2ZeMvQeKjJk9t79ZTQmVCSnqPQppG57i8CCpK8txmyizHK4oTWTsYrVabvC8aCDGBMKGXidwBTHKe4TH9",
  "key32": "2XKnKgjxwRPPb5YVqGjYR9ZyE1MfqKBczMDnCtASbWNF57HAySNVM2oXVQfQKd5JPFmdAxZTPLh9Uky2W9e2DRJj",
  "key33": "2T59iJQUe4ASQKhtS5an27vh8LSXbCbMnxwZmPC4F2hR6wwaEnmQFqq6nDSkCNADXktFeaxvzasHGTzMW6CmUbiK",
  "key34": "2Fcw9hexz1usoqZWPWX6pjPNpo56yvuXmLRqQmmmnCAAravzvSr9UorZYaPJg6DzTvSeYVFrcY8xpS1Bdi4qtJAV",
  "key35": "2nQpcVLCM5tTgtBksnJa5gX96t6t9NJjpRRWVUQXtMw4ty6qq4z5CGhVfKK51Rb2oUdB8fjutoC8CEukuBwnpxe7",
  "key36": "4hdzDakVmghGgT94iUWJxiapAEN91Kgd3CUfA7nBRETrh1YVjSUkwGmAuBipDZT7cbKHecMyRrZe8hZnzfwL8Sio",
  "key37": "3KCjmm4Zx1n93ZNXKjb4vK45Z54D8LXweaf376a8hULibadTLbAyqfTBMKXWFa3pnuv5TMFXtK7bZ7PvgZVSPD8G",
  "key38": "xrv9iV17xKWsQXVHa8xvVZR7fv96fGuezWRJYAxN69Aqeux5Y9vwaowkadeJERuT74Z2c13fEXmv3y4ei6PtSwy",
  "key39": "38SZ9kV3GNfeCNReYfgpexm7FkS31QNjqBTwvxvK89qgE5UcXr9B5y2vDSXAxW3UadaU14wkq3Eyc4NA93tqPMic",
  "key40": "65WTrijRaiYq2ymGDenpdVMcspFUiztBHmp9BGFcKx9H5NcL4hwAem6LhmM5oEhMm8fKLCHwacHS7QygwBMGbzz",
  "key41": "BNBvfZKSxGJVw4X4AkRroLQnv43NrkmVdVPQxEGTZji3uJLQGeSETR85fCxST3LUkbYs7rXaN9MTshJhQUhzqbH",
  "key42": "5iz8NonkXoHDBHguCzpwyJcpax5kdKsXQfVkkVzf2RmUhttJM7gfiFdSWDaneRjXHa8557xPuSYohWZuBTDJKQzB",
  "key43": "4jpZRkJpYyd7Y9ENYHPZQUPQa6HT9Y9pd6vAHWr5Sp7sdr6T34m8f6PCHC2Rg7zdnTFPZHFLWfckLuBum65mtBsA",
  "key44": "4Nz3J88yCT7umxH3BdBocHXcvvak9dH7uCJxARhKgQJXy4n5LBxEbFzaLiFZjbwbeggA6oFZqTrL7egWp32jPJbw"
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
