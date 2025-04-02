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
    "hcBooPPznxAEtaSEt4QKjbRbqHRhqjBMhy3spBJrE4BBpAbMJsMmSL3XveSVWakkgZUnE9U4HC88jTpXdPUDjim"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dNzN7vMZvMYNpHeZeHEhURmAh9je97nXqyL6XQ7wp3CjBeG3Y5QQu4eQ6mprToFtC5WRa1LpnjAUwBRQ57q9d9",
  "key1": "5xsp3GFDUufEPnmJQsMtMnvEoGZtPWzjBCv8NrpQFD4zTpoqUqX1HG9q938kr5MnABveG7sABA5wMhGmbJde1TV5",
  "key2": "4T2RBskuRHtLPCZZuuyMmtn7aSoEeADnVht5u7cSxq5czkmxAF7TPv8Qus3RtbZbkwKAPE5m869DA4Gii81h2uUw",
  "key3": "4Ld3NAtjpjD1epnLMkywFmhoUY7HNcBokzFD3RAoCLWddUq3bVaC2ey2jrpEgZtLbHXR61ZkJjn6w73dsS57g7HE",
  "key4": "3kUj1YRsbkXMgESB7KadRk6Kr1VEEoUhZoW1cWyTJdgotxX9h25jfoareeJ77LvDSh3R453AKbdu5iZLTLCdGkE",
  "key5": "3TjB7MFWiw3LwBGpP1uW7cZWBEz2xfTpgdJPikuNHNqbewxdyzrXNgogwSvCyVV5Ax5hgVgN1fyQhX5D5obUggmw",
  "key6": "2cvbkAWpkpbJnnbxsLqdkfZ5WG6byRBgQmTomfb1ocr6brS4H45WUjvQhEWCwrXVowEbF733N288R9mw3r8U7re1",
  "key7": "3fz6iSqMd1krrt3EVEsPGhEEnPi385648T7CHUAukAi5ACX5PoST4GSYbjjwVMaY4ixWSpFuYi1GTRSWuVFWLdhL",
  "key8": "4sYggFC8oez2nwVuhWV35p4M2JihfrKwvkosSdZjq9FytUWWmYcBFY7GRtgQYExPGmJRezP5k1Gyn6x4FeF9wyR5",
  "key9": "5WuekryEa41bMnMtATugwWGJ2vZ1G9gaqUCyYEWAxJan5SrPhmDj3NGSFvPZHGG6whRUYUGBvUBeoge5MXSbQ3P2",
  "key10": "5dBNf5eEFMP34X7SqFS8oj4qQAVvMY6y8aZJcfkLHAZsici4tJC26qZZ9KjNtA9NL5QBz88pzpLojwynrJaGGfFo",
  "key11": "gHbLEjoANcrpN3Ydmk3wTCQGXt8xsqkRmboHq88ExquJEx9WiwSm4mHuJRAcgVFEDvt5ndoGdnhxPAFNg1rwHoN",
  "key12": "NEDeAAkEsyqTH6TAtN1KraHSncMRLtbsNNJQbi5frKEf8pebdPRu2CoGzTTe6f8UHERwrjH9jf8MtNHL368JNc4",
  "key13": "56maSKURQQdQLA8pTsuPjCM29fQc6hX87hGvW8hgi7bCX5zFrSa7jT2ngizGr9V9Xt6nGx2oinRbykgVPvbdVRA2",
  "key14": "4A6TagHQjaAC2cP1FG38ZxNkHhVrJggL7e9SWieXyBPSprEzvPVxaDdb8WDa7hwemEmFWjWdRyqmMziE6gAR4E42",
  "key15": "61NTeyxTTVmmZyeGcHHtJXefWruWjJjjKtnop5UWnBegL3ssG9gMMzobrgiW4GZe3ohRk7QtopWR6JevT9agLxjU",
  "key16": "3XWR5UjMspreKN2nz1b1ZyhALHDUrWAvMdHra4hPM1pjwq5hvNbrMAygWYVsgJFTNoaPrN9axkSYx5MDHv8EhhsL",
  "key17": "38xbxPw9YxQpdRprNbMShowG4wiSrDo1cWVHLS6928TNfipMd6GBXzzrhAcQdPnWtxAAETeUxDWGEwThRkupvctg",
  "key18": "4FUQvtEFneq8NMx5QMUYMeJyUAYYSfckG1rPssAC4xCBqxUWvLxCxQ46XcUKaBtync67krJoUMaSskSbAgLrJrQL",
  "key19": "3sqJRMG7PbkAMbsmN2coUDZZyq7i1uNRZxvhe8sJGwjGNXYr32iC1dU5YgDHzKN6RbpPWY6zHr23uMXRTNh2v6Bv",
  "key20": "4iEJyrq253xLvCVfaJpQ4a9y3a16HVafAuYqYtbQH3juomuDhMiM5yho5LfKZGFiAHLNzwjhYmnoaxBAVnPxxeb6",
  "key21": "38QxCkGgpdeNq2X4Ag5BBRr4c2SmibfPR12ugL7FbawdWhWdJDZnarbtGFN1dDxyqjWVmzS8KiV8Jz2EAWsMSLnL",
  "key22": "3nw6eMg7ZJFmbbgVdoraJiqLrWAmJbiq7vMJrSxXE8w7ykiGWTdqoHLZJ2fou2esbJEiqSLHHK8YwehPLoeo5wX6",
  "key23": "4bcZEyEPEP5sXbgn6Rj8nSjyZT8zdLgYqEba6EdrgLjDLBRAfkogETDEomNgnT8KeD8LkCg2NRj7mmLP14SgWYyw",
  "key24": "2nagPbjLH93r5mHSZmEUCgLrLQFNDNngHmtZnfLqtM6yjtYWDyrKk6wUz7ELKrtGVYcAJvf6m2EFfSt9JxHovxEe",
  "key25": "5k1UajwZuCfCtk4Xo6FjyDehYNfGRGR6pWWpC5a4VP8vXZEfJ2MYP13aqUuhnBaSW2979fzvSb4tdDyhVYWBWqLW",
  "key26": "5E7o6qnkfgT6ETCQ4nbiS6PnzmB4bQgBNVbUd7btX9thBLg6CSQE477NQr48k6Ya2MWFeGk8VHe2RGjTyNVmmSHj",
  "key27": "3VG7R5uL7DX5etMrn6UR7w5Vgr8BoqxMxWtjdSrntQ1LE84ugW3BZcM5sLaHUVA6vMZh9CgC8vtTsxSTq4qBg68X",
  "key28": "sUYb1srcvsE2zZW8v8DbpaBkWuKZJsQtgpoPzh9ahWA1UXt4PJe6RGwY9UvcUjKBGMCxcPcfy3HgDkKqguF2ovn",
  "key29": "2dFML4ojQVfanFyYNsNHZpGEuLKKnFtNXmCSToPMYCzfapp6pEirWSWMpoBXtiAjm9GUBonKMQydxGrEfeYNoDYp",
  "key30": "2EBEgtpigKr8zT19Eg37voC3ucd38agKRTRHRMW52zktzW6qELGfw4HEQUhx9Mk8xQ2upk7GKFWDhcH45h4VW2ZG",
  "key31": "5LmPMJ5AtGtYQZBs4oDw9jmJcwVme8vtobuNZGu5w75psXNwXunn1zxtMGcx6E13mgw1K7roTKN1BVZxrjr2BbLH",
  "key32": "2AMa3dC55Mnw2E3jKUGtFbDKF8AgP7H3GLt462NcsWLusMv1sc7eTcWk9zeQ56ydMUDyKzFBqHSBHB5TP6AgChAU",
  "key33": "4TmHfGQbzhJQxH2HDtpsM2MLFjDiyhgJaUx2jwgK4PAwJ3yQv9m9muWG21aNf94W3LfCgbRBXR5vLE3yD2x7n7bj",
  "key34": "5w9Fm6CMxXdWSsQMACiRNQ1juyHczeRjVuja6QUDo7vA8MKuPqxhA78EWKBsTBrLpg1xeKq8MucjFFbyFCh4VQn6",
  "key35": "3LhDH9A86LAP4WcCJuqFa51LSWmA63Qx2eZmZbzfDZWB9msaerycA9khpZNovfxJwHwAUs6ZXSGZokpS8QHgUof6",
  "key36": "486Dw2cxGD2CFNSpEN5itqzYcag8tUNuoYsxbfjpRZy1GfsQcXmYKjd7bnPCHKCLadUXa6oPwsWcxC62UM3x1wm9",
  "key37": "64HficNAp373UjigAe4UrfrqrzZRHRQSseUWnoRzybJ43c3iygyuiQSj3Aehnzxyus5Dbkzn2oAnikKQMw6rHPx2"
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
