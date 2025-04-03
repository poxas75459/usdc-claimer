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
    "3BGhCya5j6FNEf3xLhCsVhhSP7cMLEjcyhDgkXt36TDNyxuoffhvHoVwRPHbyVkA2PaYsdNEy8yGtGMeG2jJgn12"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bXJMAB9BeLVTr11vPuEbh1WDD4LzJ4Mv3eQhybK8s3EAnesfpJNsqiydxa5V4vvug3xkanVEKxXSramGTU42YrE",
  "key1": "64XzDBSZLARTvbptzVAbZ5Ztay8JqkaWLpdoftsTnAMzMUu7oupdXY8eH4XdsL1aCNZToyeULdcnt7TqnXkWGK8X",
  "key2": "2LrhhUTAWThMaemJ4BeHMUB4D2eMNLn3V33f31SHoGJ5p5bQ6RLN4m6G2BFGQRvifSEdaLVL7dewbaPmBs7vXLTz",
  "key3": "WfiKVkZt3PwyF6n645iFfEXZYVKGbxkfh6SkgpzwvxPtXe6euFzFL8NDMj5piUTHcpVTVyvXfXRchNJQiqVuXHm",
  "key4": "3Qz9KTwGcAuG3YDvzrvBfNWB6z8e5dXb1o1b8QDwqGp6GYtZEW1XALxdb8hNZJSTJC9DaxwWpgaaEYjYU86rp9vL",
  "key5": "5ecLzLcSX35j1bMzcRTVdXc5bVvvRdztTeV9rJELHhU1TSbDGBV6eqPgY7GeWzpVKxtHMP6brnHs2ArgfG4Btwbh",
  "key6": "63gh4T1qZ2UUwpA24xpDntc17SUjHLfBDaNbhYw6ooGY8seBeHeCFGDefFntr3WoMXbFcR62CzHcf3xKVS8xwQuD",
  "key7": "5sbYpekQcQDpoPBsPazDkLaXaRroYLtWpD3xz3CT31xn3RBkBzEhrgQFQHcxvji3LGiaTDxyLkQrjj2nzP4gYfwZ",
  "key8": "5d2jZ6PCFZP4Q8ErtDtn5K3JpDbGCVruxAdLpKJYpbavrpF4V952XN1yinxdcmFdR3X7oVMGQ1TFoSDHwaPJm5Um",
  "key9": "3zeJQ4XRTRQfiodSpbiNQ9UxMiaA1qtawmS7dkWcysY5HhRL515bjAJ1mnhHDRsujc1soo2tfRLcGupz5h7o9Yd6",
  "key10": "5B9ukzvJSSVs4N5Twysp8woeeWe23oaoTkoskaoFZBMuJMXis9QJtaMtTXCfWNsn7aBsWP9v8ZUDkrKMC5FcgTJy",
  "key11": "32QwkSQFcCzqXUY1ep1CGXdpjPHCX85p3kXg1CtgZgnELbpLfRemPUBid8TpzmbRcjVPPBXUqRfsvAMS3cVXKanQ",
  "key12": "4wcfZwiB9pxgzaJBDfaD6PEFctdCEngj1T6UwKtiy9Mfif8XcdYKc7ep7CtZaLaRfuGyYcC2A5QWVLgZToqpXrBb",
  "key13": "3W41cy7kLqFkKRYgNnnGCGmY2yhgcfjdXHbxPbWFg3HtnXrtf93etDszPgo2abzAzT8VES5dXLt1NXcBSXu9gMPp",
  "key14": "2oUFFYimSPrHC4drjFmqEVHx47uZLnN88RQXHdkm8Au6PkbKR6Hbe3akLJSmeFQt9WDMDsTRgv2D2PzaP87oTTka",
  "key15": "RD9sBePtUtqmQPmWBofoxwT7Tua1zuTmkdhruinGPnDcvVdt22RP7S6i2vYpmuNNVn2dRdJo5fCCXvwDW7MoyY4",
  "key16": "2HFz44Yab5GZcW7isE9vpBeg8nUDXjTqnvx4Wiw1vUzgQRGxtaXFgdjz1nvYPvGWyWrcqpEnkoAUNbrfFV3qnoWU",
  "key17": "65t2fV8dAf1Em6FXRkUcFX25GZVuXeywjNMEqJmEp7MZQAGx9UBiYicXQNE9QstKR4GWKjFs6D6BE1PwgqtuBz1b",
  "key18": "Ej4x34FtY1EWPpzo1qGP7PxzCqQMGijidxV6nZStCErFWw88DYTnb2MFsXRBa7ZWA5XTe5btm9L5dku1eiY4dr5",
  "key19": "3QS2abrA5P8DDF1NsL3DZPa7gqhAXfUivNMDv3jwGmPPvyPDsju8r7Mrp6QcAwpwfEq8F2AyjqyQfhctAWxC9z6C",
  "key20": "2deAwFSs2eS6ZQYfhYFW1jASUma2j6wcn5hZsiQYv6hWWAkYr5p9syAsp8zEuug8bZreJLwyVp4wNTpkJSREXxnz",
  "key21": "3kKZXPx2vsbrb1GzNPx78JZ842bY2MYf1dq69cM7GjJNv79vrZCNTVdrvo7iJTskGwLkyafQA2yzTPdNmRihjaZm",
  "key22": "4VqdRWNhzWfiLDnwB7zDxGCiYpsuzj8sYo13QfbrvYsCcFGFWHgyYnr2BFdU9de5oPBr7seVWV2e8nChGffY9YW2",
  "key23": "2t6v4pnTfzxgjqVdiTvWb4kMxiPRDrZ1wbMf5v3UC2g89mrY2PfsHXxsqKQRaRyf6ZKpmrD8cuZUH1LvjYZHdtzP",
  "key24": "5i3bonb2ieT8G9h1GszeFnhCv4NxGgkTDXT27kjXoGmgTLgocUSEPZjWLTGBgwKWXHG3ASDRfkLJddtymSMQYfB6",
  "key25": "2yDerujonHUokpihvyKGYGRdJXEmMWiHLK4oC8H6pFJZdvrjcjBscgwopEKrCGwxAguHyFkp4dhgi1NEbZxCGA2t",
  "key26": "x5o8ooavMghxso3HkDQpYUPJYb8LQEgYCnhcK8kZ6NQq5pfZDk8hmsfTfhkx9ZL5jxNmpFfjmjNEaiqByDzZqra",
  "key27": "P9RRMfNYHreuioZJmDQ3KrVnKbo39BN4u4T1fUDuuinfpCHv7oaCbLTEbChjbRjH1JFMtj9Rvo2SuKGhTfb851d",
  "key28": "bVoddynn12uUU3vL4nRqWN7AHWSQccQXRhsNjnqHPRFZiQWLnWSJzaAaT9kAeqwDPq9RQvL8SLcBYCTKUtkREgj",
  "key29": "5oonsBydu7M33k8HkbioNmk7sbSATsMWNN23Hs8sx9AkmrRk2cw83G6jdSrKbSJCNiYkkyDNKDW8phehuguBL2S1",
  "key30": "27YuqWtfCsRzSoVnmEked1SUxUZG2vLHaK4p3vn4oR9uhhBnny9R4QEEzQWHD8yT6SMKXNL2QEc5MmMNr7wPASoU",
  "key31": "3ECZTrZk6fUEvtSQ2PcPwHeSPD3F7UFunyU1SxDNJ1SPPR1GpFEofhYzrTj4hdYwsKyDQNYDTtZQV5k5SQSGLELJ",
  "key32": "3zSZ78fHYf8T6hzzC8c4nNv5U353A1UoTvRFioAccu4KzN7ttk6dRdfo1oJv11Y8KzzKghaTyt4PFnCtS72vSDyk",
  "key33": "6eUgUd8caKU5Cd5Pg1sHptrsLGFrFa4ktN49wRytXagPLW2MzcjQeJGfnE9AMLf484qtxxK6an84UsckhMRS8xj",
  "key34": "3RaEX8GS8TX5J4bFpprLPA4egbQNeRfi51p6NLAGb1w4HBzXa4EnfXaYXfopwRELC7HVW8rEeTtcxeBdSEPzuoaB",
  "key35": "yeWDmCdKZiNGh28xeaQqVqMCnXay5arLeMRkGV6TJGyMZutzx7WJXFzqvzd44B99mKWfzSgPP9cYUFQay9khfRv",
  "key36": "4FqzkTemkKPDEDoJKZUFxtw5VnrxRFjvpzmwcskg4iGeaNP4Q61DWidqAnDx7fnGokT3F9f5cDxGRpMUa7E9A2FR",
  "key37": "3UjcXsTH8EPY2NtUutWHZRKnSKdP6fv78muY5kczPjxGFN5t8ozCJMevfuakkEDpzrp6gevt9b5m4WB8Dfq7Rfth"
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
