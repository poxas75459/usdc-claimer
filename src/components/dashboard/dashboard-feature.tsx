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
    "2w9WxHFtEHPfpmNtoHKZdGJtFesZMKzEk17tZhsxyQSfZs2spfRa2xSEfpALAyj9iNdZv3Jm4Cq1nJVtEAANFi5p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iHSvQPBATwwoeTpjqUGoEAATGMd67wK8sx5BiBe18wwGLGZqUev5bApbRV7rncMPc6Dq5Z952jvokqiRnj7YM3s",
  "key1": "2ExWAm2Fc4mAfu95J1Uiic9Z4XgqdLHoEr31F29pfB8bDZ4FXTj1UX2LVTYikNFPnfHH87M6LvFLkgHYB2GZ3xd1",
  "key2": "P2H918Z4kLTPpdDekdSkqeyzkf1UtHhGUQBwkHuV8yYUFUDXacjMAqBMrN26ipbnp3DjbJFMKfuo4c764RF6gb3",
  "key3": "4W6aHKAKYKLxSnFrEZZhsosaQQZRP7a2mRDj4QuxarWG61jLsQsabccUNtkszHvN2go68n6fcPkzCFmnyrY5Ufm",
  "key4": "38Z2yjza6DAbX5aJaiPBMJwY9nprn7kCpRPU2eGCKZzipUBSQfuLnCk1URDMEu3y8KNbMrFyQnaNwZeuX3R6dNzV",
  "key5": "63xY8s4rtduDZSdTJbfDjDPoYqnNfVGyUd2sPwFtnyEPPWcF6xn4KTAfcG3R2vYaiBJyZtmYtPumDwxxPGwj5Z3",
  "key6": "48TnEjntEEVSz9eMptEEiZpnpKBpNFikZpmQKmuym7sphhhjUExLR7hBSTWH6fLTp598UKLG3J6mftvGyokatPFD",
  "key7": "5yoAPLdca94xzQk3R7MPKQ8WPMV2JocomSFu9tSXfKRfRV4rLhyLzUSUUbahDLrNFc4x2HKUyQA5f47yv5G28D6x",
  "key8": "GLzvKVvoQKWJzkzqpUtV91mtZubkZttRwcwCjupDxUhAwtbAq3WhMWA4ZWR5hGoaSbE2kVkt1kNTsJABBnskVSu",
  "key9": "RB9G7UqCTZv36JMgkBAeJSzxgJZ79FQiYwHFz3pYS9NNVDZDAeTCHjs2V3XAZ1f6hcURdyLxeyWqXEXwuo6oB1P",
  "key10": "5jitHqXE2J4bMaYeuvaGhsWdqvgFZdL7YpABfGr6ipbejLcT3Jqy7Et5ikViBuvhkFtGmEp6ZiLmkmY6pSJZdsdp",
  "key11": "5zhrAC21VNVETMNovt1yUZqZkpSuthD9GaWFGQQ3h5CanwVBbrKnyEj7eq3jrkvHnD5u1zauuZFFBSh6uiJa68rz",
  "key12": "39aAi3JhdX86dUyyY2kAeyoFbUR817vxyDRtm1L8cZSiwaWPL71QSG5e4RHdafrFkAzzu7Td5XhptcD8MzXYMaZa",
  "key13": "5FGNnkNR639xLikehPvXnGDSsHz37BkS9q8HwLgnLrge4Q1pTUvjDvELET36qfuYzJMg4wrAavPCUNzm9eFzTvms",
  "key14": "4WkPSzqWA6xJjFUA9iKQdJmgTnR7mNZrp54S2NLvspikWDpBs8TqRDR7gn2oMm2vBo783P9BnZGpbGxXNq7QBUEa",
  "key15": "2gMA3C283RYTQRsTRvoRGD5VY21gDagqfnn7wzjs5jmj614kXQrSZAerPV4tJptQbdWshTCYRZKmwFZjd7CXJwJd",
  "key16": "yhsb7mS8pAScbhK1TtByaUhvL5ZrgvKPi5ctNJwLz4DakLsUFDZ5tA9L5PBD71ntebZnLAez5GwntE4EULreFfH",
  "key17": "KfDznuAFYtj2SRB3ghtKw5zV4DysrxJEn13c8RajPbrMqtYAWXpFLzYzAQzsWN2c9EvLdEJcnXW27UMgM2HgbNJ",
  "key18": "5rbJZRDUQ7K7C3e6LNE6NJpnRiTg2ryGyYfYQSgUfpPe6g4QRqGitZBrm5VAZa7RKu99wKNdTwkBBLJ73oghbbee",
  "key19": "2AQ1CcL3tX7KDa9AcynHZkMx8rEo6Mcz4MseSoepfUeUvH5zK9AM5AZ74Nv63BJZJiC286xZYAqXJQYZakkSyv3q",
  "key20": "4nge5mthbvu756XPuBsU2tVzv9sfGBQjLMif388EVQnKNyqvPBszg7rnN72HUNkKnEm3KNjTz4vmmsmj8TSjFifC",
  "key21": "44SUh5Hnj9DDsGbUts7JZQUQ7c5cDmRM6vD8bXqVBpap6W4wi8b4f49mkeVohdRzNWhFds3Py8FgAJNG6QJP6mWi",
  "key22": "2CZzyqYUHLHhXyuXkV8AGRVgw8eniwXmH7dcgvkampyXFekUEDxMaMa9NoBmPuEKkT5RyQbCZW7uMbSnQXgQwYNJ",
  "key23": "3UcPhkSqnphEYWpyvYDpxSa7c4Lwq7m7xomSCZKtd9pxyLuDYJJ2aifJw5Y2Rdr4mAc9n9UgxyHDDC2cAWKFbjZV",
  "key24": "3KiaUfnZaQNYDvxGwaxnA9fuktcfD5HdhwrGjh3aPisMAiPZ36XtMcR4EvNZZLeGJTSKnSnttWat14C26yfuM34N",
  "key25": "5FA8JxefH5Yj6CYWdq7Tx6jbcSdJ2eoKNfmdsTXqNyKSvuf1cRUCGmD2ESVfgBfjN1rfu7iL4V78Ypcr3B9KnJTv",
  "key26": "3aAtEs4ber3dszTnMw7BFyDbignQsZ39MBad9djAQezC1DvzU1cmBpbg9nJJtVWFrmLqj77aijRuWT3BTsRM6t9G",
  "key27": "245eJMqDdtw3QJzopZP3wLGEv5A5yyEopCGjvseYFJjvkV9iYF6kZpr2zE4CyQ4W9Aa7djKyh9Un786brLNvCbFs",
  "key28": "2MnQ5eUrvEEdTCv5aqQ31YUNRtmWJu5Sjz5JyUEimQtbsVPooohP7WpjNibhww4dZdFu6CTNsmeL43X4tApBrjDq",
  "key29": "4QBpJtnz485gz9i37Vz3TZqTpDwrxvghftAEpDPvPvzePPVz8iUCps7BBUwx85jdcwSPRSZ7ScqWAwrtyVsAmt7Y",
  "key30": "5z1HMQYvCvjLCbE1hkJYm6SoJX6JSogJvbC5bK9KzRVrYchQHuED6Ru9YYCCKFDwBmJhZiAfnVWAHa96J3JBw7KQ",
  "key31": "2r15eTdQB81FqUDtfoyGNZ9ArKQVrWN1cd95cQC7xf9UQg5WWcWXHnsotvySvd2TSc1MuCvDBfm3qVGomyFPkCR3",
  "key32": "Zu2jHEfsKsQZSnm6HY2Muvx8QQExU2mzt8r8Eiy6TU3H4hPMG3pNfJDqny8UMssKSjhjjd3rzQdjgV6YhuwbgYk"
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
