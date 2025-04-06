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
    "5SmiMuyMo11GxCHprrNxofgsQ23wNo9zXb6q2txfGA2DRRVpYm8dTyWSJMDbRj6WEqU3GoEbeA7VKEtwRkNKxQYM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sh1AdDqKMaeLFbVZvzi8rS5FVgRryMCu8QmyX7K6RZ7BnnAbBk6LDevWAhCBqC7VRVJ4iFt5x44Ry4z42NS6frP",
  "key1": "zjrCDGRD43PCxhu2Rh3eHSodEs8DbfpPPEhwNiY2zqcfr17xXvUyq5vM41FtE4Ei5RUrGn6Swo6bPkM1JTT3fyf",
  "key2": "3Ma8v5rG5sbhSCC3wdriThYVYez7Hk275jAMaVA4skCLwRTzy5aATrkEX2vXDzqDLRnYNRUoHmT179BZsXRFBt8n",
  "key3": "3uB3HM5REgrs9CA9WfenUez34zLDHiYaffKsE1gTc4Yt5n4DC91yb4yc9GMRjNLgmGZJfGNoZA6jjYd6Z9Am3LeH",
  "key4": "3C2Qpv6QPRspW9g9EEcHM5TqcJsvEKEHRmv7eFrMSiLus3atg8KdgZJrFFmKurGdHZEDA1dJzzwnPkK5gHZWrfxE",
  "key5": "3Kk1BCB6xAZ185d6cvvM84hLVckoJfQugLnAexse5SWPRtMy7emGNDDDTfUFUewA2eG9S7wXAF2dPLjNPiQsgXk",
  "key6": "5jbrrYQaRBvXqpKa5VofLQVriwxdfFpjiZeYKgnsT8pmw9yHFqFG6rsAwqmxT75PR4XKZ8SRGwdETn8DgQsASkuD",
  "key7": "ggaMSs84ti5VKLTNESgyDiAujc7Y7mwxnFa4CGNy3M8b5vDN3TjTxFpcRGk6MjTiu7SdXXYhz4EVQp19SPfFCT4",
  "key8": "3fvKwJk2QRUX7c4yZAj3rvs32uWJ7cVBo7zgBkSMNWD5dRY1qmjgEc2LFA6vkpA4mEePn26cvQ7Kstxjs8rytWHH",
  "key9": "3xZ7JcdUqj1xYgpQ1FDiMexDbTx1trDX1aq9J5DB4AzwyxQMhukn6iPERPkotB7Lv9x8RGSQwuLnPiYbHYRPdFij",
  "key10": "5QvESJLsmRevjTDAizU3Sc7gTcjDnJbdsqJjqCLvtPKsVij4B4CH3XeV6rD2WUDDQPKUwt9XoGDzYgRSx2MhC2sp",
  "key11": "5cwwA1uLZGz6vswMmt3fuB1sLha8RRtdTfo2BankxGM92jjKKZ72HV1oVK6jd1GMAVGG2jU6j1xNdisGJjJKewN5",
  "key12": "2y6TZjjsSwDKXP2z56u3C877w2RcSe3MYFZknF6YjZRqanYCDUxMWzeX5y9NkzsAJ3T5P44iquY5TcqWzVcRfgG1",
  "key13": "2CBPZce3vCK1faS6KUcWLLMP1hMwkkSPfizQiXEuKe7wZwcMq2m8gvM4Eu1NaZF26b7yMwWrkUGgAjFYynBWqkBM",
  "key14": "ZKG4QXrwcs5JUNbefawYg9tUgTKy3crEZicdSegADbpZBXmQZCM3vJs8KzEqHVeSRtrZiQEKD5RbdNiBXNmCH7F",
  "key15": "5KrWka9Sq8muUApZ1NN4mWyRT7LpS5FGptnZc96RANJ2sABNMaHL9juwEK1ejjx4nXjd3JC22xnxYdkGEL1kRgt2",
  "key16": "zQKGbXEYoY4fvy8YcXoT7gFgxFnSWtV53oSUX6QDX6Kxq1Cw2UcUehjrXLzb66cg2rae276orXWBcQAeSJWGpo8",
  "key17": "ToNHK3ugyjUgZu741kKgWn6HMe9hzPBwRt8FHqwUK9CSJCCQ86cUWFFqgeGc5PUZqkPoBwB92YNzNv38CsT83SL",
  "key18": "5iUgPjDxxoDBwaBycajUhsc79ExdsQZm5XPPTGDuVxTzRuvaMFpSnX28RQ5yXCCrEddcHx1NF8p1GN28Nzc2Pkd7",
  "key19": "Wu2nqeYvZtRZvTJVeK5VintmPKSTt3pmfDWtAqwQ7f3EDx3J8VsPZWUPbX4Sjjz9ivGdpB3U6Fue8vLMBGZPUiP",
  "key20": "2ma25JxNP2CurDdVkLbnFnrC9hDcLWgxtZPkgZKr2xcqhTtCviAy85h6pXsUB5NEwzhdEdgCzvXfgbruHvK5LbaH",
  "key21": "sDEkLh9SK5MLfKSib9sN2BUzmTB4fcLGD9x5yD6EsTngWAzQtoMg9KC6F8odQxcfus3whuEexxLm8h53EjHwzbX",
  "key22": "2uxu7uLomMxYGaAWwQqKMynfL9VargAuNQNZZ66g1qJFe7GjRRmATz9Kxc6HStnXt8XdfGieGX5HsmSzqDf6wytA",
  "key23": "7SFtBAPH1sEsge9ixNfTiXuUCgYujjmQdsavgVWg9vTqPsb4KPKiyZTmtbCMoKBCdUi3io3wv4s1fPBYqgzKnu4",
  "key24": "3PVB9r5krkhvBJVU8LmLzPuaVC1tehcA2TsvU8593PcpuyFyWdZGF8HcQHijCakwhVeRhevp9BPoZSaxYGZwTWXd",
  "key25": "4PGwe48aDcTJhwKbuZZ4uGpM3oMKiDQ5mhUPeMiyuqyZGPfRSsyEnyEJvBF9xNCv61HQAydzS99i4jbVgwdMU1ph",
  "key26": "24nYd4PFbds2NCrJxiebpXUNFMCetmDRb9mfhD4XxjE1T9b2m4ruPHoWD4bk9ffxnWS37YuKtpVhF8ggCFvNUrdH",
  "key27": "3u1ahUnJDFcWZfaKoQmWhz35CZ6NXW5e4BgiF65FCaLJVTwMwyrReiN5aAVqvDKUC35KkVFtmrL6AY3etmRHu77B",
  "key28": "5V8kupMaf1DxZMiwNkh3zL8ymmjoZhE1ckyN1217W3DjMGdzyRCyXqZsgkPsMrYn4hnd1igBpbC9wPBkoF8dAdVa"
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
