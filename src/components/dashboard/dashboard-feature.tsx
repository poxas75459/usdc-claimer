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
    "4YXYhPuJw1a26wVWkP9buqJzLFG3pYZAHDteEYAnU3hXvYsW32LoMWQsWUfkuVeMXqjdN5omLU4UStRPwDEMqNdR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DjDbunZjf11hS5Kw9b5TNXbhpjmcd2rgkmkPg7iTcbFW9twNUZF6ffYuPiAD8zPvaVuMPocimJpgUJFHsiwyaQ7",
  "key1": "4dSkN2EronLe7EAuGPvDwmwkdLdcs1hPHSCnD3FWWhpewgMTazodKhbCmqBFrHLgMeFBymsWgoaD6fAq1zZMyaTy",
  "key2": "44GzuALLuZA6LypkbUo1qJdrtD5h4hm6RPNh71Jj6ckkmiqu1fpcYP5r3C8Bx1ZkCKeyHyJfvHrkMXVjL8TLNgLo",
  "key3": "vMcyKZxUghYTdcLaTkRYoh5YPs4TjmfAUxxAiSgbZCPaQTvwiCYzkMCuNpzo1ozT45kuEz5qgZ3fu8nJ8t6BPSD",
  "key4": "3z7QUnJcY8KggttYT55Z65UaR9jWxYZXdZZwMKSPcEbSGAREgtKUKjvfyJ2hsNTTxSoAVomYPoaJEv9EMgrLmWEx",
  "key5": "5svHajgtF7AYqAtELdXQWk2HULJNMQKkg9yapCqgASbxudAN3Bqyon8MHxGXpCf3uFkhcWvzDCkPbLVgA6P3bs81",
  "key6": "2VDr6URoFS6FgaFkPZDrXzNEa3RdRbeMhonFzun9KouZYTsaMfX8pHoLTXQZc5MB5QWkSiyRQR5veSd8gNURBM6X",
  "key7": "2DQoqwdhjBsJQ5dMPvmRr1vbwQUmao615PR7wSRVFwsGqk3sZbGjT2m7a6u48hHg13S7LdgBLbdLvyQ6e47DUBuR",
  "key8": "dWNEeY6KqRfDsxqUgvs8ZRW4GzWxEoGDA4uWb4hYeAjmVKPVdt3i5oZLyRVxPkrkYip2jXNyF6f2Cuxm1jqidq9",
  "key9": "5qsZ5Yv1yTEVqDJLJwQgErZ8fvbRG1DnSK5Zks4unuxeoNX5atSgGYziHQGofgpd7wCPS1k2Tvw7KEjGsSW3mtNH",
  "key10": "5THrNGoVBUM8qwUgE9YXJNCwdQVYj2jH3eUGWeVJyiwxtZsqHjwVNtF8QK1HvzLoAqHqZjwYazTbyjrbZVbps5wh",
  "key11": "516nefyW8Poeq5Wv8xPQ2xVKLifk42WEbefBPkwjQyvAKkMsXDiybHwPkbiHLKozZMyuCJ8BaYEQCheCRqZjYJiP",
  "key12": "3rfQQEFBMvEns2nPQpMWeAD1bB6vDg3mCnHtypYsDBVUANjCmSLQYeX2vXZSFnHJC2ruaickTRJngqfXrFwJMZKp",
  "key13": "5CD8ynop4VvZey5DVwVbfHLJ5LNQ5xk725i7UFr6RMQ6KPrsqvZhJAxTtwPofZvUtNkSZgWeFuyt7kApXNEzHPL5",
  "key14": "5ikd7CEF6MMxSCtMaC5L6cUaGkGNtCaWzYpmg2fouMcQmxLr3LpQkXpWnVCh7BqCXzQPuwbVfPB1hdDS81gdsSGU",
  "key15": "4acXHVzFMuphCAUQxZyFG47ftPHiWbW1VEQU8PnxYhviSXWYUUfwdHBze2XRUucuhnExxUmj23a7xbAZ2oymQgDE",
  "key16": "4J1m1f1X3BWah3UhU56pJJLXvBhDXNgRvzKn9tmxbRuBfbbt7QmR1KYSWWwa28RMSkBcMrvYvTr2dFSTAK7kJk8e",
  "key17": "3R8Ejg98FqDu91kNPoeRn8NoKVGiS3YQ6GvohomLp5ZNetZVSvWaRgEc6dGJLd8TEQAykYUog55VngkM3Cspmp8H",
  "key18": "aELVn5focpZMGwhYwodwRPJFAwqxeJ1WCZxH67vXQtazevyDVXfvWALCHcBda98nRBm1VxmZ9BdTnMKcetDUv9J",
  "key19": "2fbN6gEpYNuMm8m5A9CHWQwrDDiUVEsbvrLgzgr94TLnQvB3VaVxNxByvQhpE3sbMbbKRqyppcWeKta2n2F2rhpE",
  "key20": "26ekWub6XhQ3XZjKocPidQYBXzYUBbBoQPTeUmAvZ5VKP4Lqx1eH18r2JrGgFgHg2b46NVuau47mgCVkmqFgJ4R9",
  "key21": "5QZ3iitokcrJuczsKxrW4igVhBwimTPbHZeaA6mtahAVJfjeyi86QCoV2p6LktsJHx8U4gCsbhR85wuS2zNqi3PD",
  "key22": "496zjeeiBbddmZ2UXEzZJzAkMquJ8PUt6pLEgQTiGPnmRw2nyHiC7r7eQ9PHWriKBXroVAZJ4NCAFQsd3iGzemXc",
  "key23": "5yCMKqB2L8TuEf2jFXMHGhZHUrXHuoBbk93cxiG7QuZ5dPCnWiUrmY6bcJxfYn2MWPBiamD4Kbj2wujapMYCnxzv",
  "key24": "38Yo2UFaDkpXmixmFSSFd4QX9uCUQyqbeLCzxbjq5cgALkSeR4MhrvRSREgrJVRsUkXeGqbYfts3P99VA5SYj75a",
  "key25": "2avxpreUe2JSzFTBGtv49teFrzKBoBtdntqTwKkmcSJCN53WyhoMR6NR7KRYmMsf39WfFbnv45yWNWf4rRR1J3HJ",
  "key26": "3nwXJ8XHzxWEL6AKJNf7Yw9RnixS1uiPhismwhoVxLpUk8HRCYcPLqoMAybz1CpN3z8pdUum8UPJ9vwsAqC6yQs5",
  "key27": "4JnsTfciv17HxYB2WhFDJbJn6yjL2kaCrHo6ueKmcqYVrPkpxaLFcYPdkBcuxeFkpMCNNHCnbYT7fDwEbUtU6UaZ",
  "key28": "EzEJdb5KRbiLpsEhKVJb9WKXY6wpmsTYLHRDjRnVXSPCiYnqNdfVVFxP4YFvN7NR41123WPRgSbLVwVsQbh6B9n",
  "key29": "47iABtyWfPy1oWzrTV1hj5ewEtNmoVTdWM4jpztBR6xnu2s6i4AVVegEZBMH5HqN3UzsZwLSe2uz4cUWWGeSpCLV",
  "key30": "gRD59ARe2DasG1VE36TooeCuargxZuKoQFCSSkFw26ycf9M5e5FLWV9iP1QQejSAtUDWK1ZvgVUJGwvBTNt5GuL",
  "key31": "5P7xPkegnqTgpWA8pWYhBKQo568VLFNFq167mxCZLJ71BcQtestMy4p6T1krt7sDg4Fow623BTKLk8wCXWSKjoiQ",
  "key32": "45N3QBFVNLB2U9k65jQPcNbZDHjkc9QwdCaiKp7Z7VL5xhqRJoBMdmUBefZdM48VbGdr9ZYREjHp2gp89yiWU8q2",
  "key33": "3bLjMBcnpP3bp7pxChRKbAooPYMxNrFnHinndzYtCfZuzVLd8BWp7FUm7w1hmHz3n5Js9MNkuzWGiDE9UHmpobtR",
  "key34": "3ommFzzfBpi7JuLHw83jUdBZP7Przaa2kTobV36iFyCZA7wzUtcxHQ7cBWmKDcEgUN5hcmaVnaR5968nhNLeuWeV"
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
