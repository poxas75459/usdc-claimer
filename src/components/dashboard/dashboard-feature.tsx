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
    "58XRt975zaz9md1u4nQHjznAk9s8SAw7aqbneRvyku9Q1D6GtdwEDpS3sLvWEsudAVj8r6C5sqtB9y7BDE64irxg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FeiQWUAGTdjZAZLuUpJ4ivB71LNe1DKrexukjSyKWnduTHFhCVUjkJPRxJ8ZCNAuaRma5yAPecCKP62pggQQgLu",
  "key1": "3uSpNP62McnJPgWXX2nALuzntpTsDjWtLudZYcyUW9p4mEmQoJeSLdfKKFt2FwDS45AFEF7frR3nqScaq3ZAqjxV",
  "key2": "2BXLcy9nmmsfPEkMK4nuQ9ScwCt7D6nceUzFeWETsocxYQ71A73oP9v1RHxUWzBaJLZnxspkc1ETKMPWqtAtnKfb",
  "key3": "4zZ35sD7Wd4UjstwmYC7ywWxYnbrfZUBiKyJJzJXABKdojFLMUotvuqn1BLjVdTrCmba9kLi4baxGTKr5ufsMjVd",
  "key4": "3HcpxnB92C7QfzaeZNAt8b9HRosugFW1de5EzBFFLVoBbTaWxn8NF1QFFr4iUiLSjgehKwsLC6jtNKphsiEsEpPi",
  "key5": "2TYWZyHJBqbe7dDhPNcGJzR1sWfAGjz6fD8Ez1ZrEHQw8XN8LCWG27Wts3nWVaqPdReqFPL1F4Q5GZyW2GQbqg5d",
  "key6": "2mvzFUcCLp8eLHdVVeVrQ1BUFTvr9EpASNR7yCUW8AfH3g8Rsk6BuWPoM2b8xuKuDYJEJ4xiKqDqhsFogN3GWQQG",
  "key7": "ePsDLnBkwzaivTTvN2aYvmA18dnZU5iyaxYuMvrrMwRDwknCwg9r1gmSJjwnuV3PV5dbAG6BBYs64UoA59z7atQ",
  "key8": "5urxN99eRJa5xwZ2YQvCK71SgPM84iLA3S9n9bpXoMueodwrp1TNu2ZBhWJbNAhrW6AfNJDhCpkk4BBSeUJzFh7V",
  "key9": "5uvJZ7Rp7unmBpu27q8oZGS9ZrmaSm7cm34hxXRTsRRvnYpT1v5Nrc9AbejZ1LZLXj6cFtHjYoRXETHeJ6i6W2V4",
  "key10": "3pxFKqQpGS1jSP8B3TSvNUqjT4NPVmdTzXQesHb7sETgvMfQtF1C8RXFjX8mSNFRroCBP2SZC1cMiDWeD2zNZ7kG",
  "key11": "2BgLTMhWNtyufwcSaE6tRFVwberxsffRsudWeSP1Kx7VfmTVmcjXXdeFgENqZB1QqEkXj59ZzsGRKeTNjAr9i6n2",
  "key12": "4rkcU14b5J5qDKPBLyLndriC5NFMYdoX53PSwi4JXeVqTPFhjy6JhmMvmuvegknWNStu7wSeeGe9Hjq9oWmJ69yH",
  "key13": "4GbdXJ6Vzds8BPcnhfYpk3XggNCPi7f56mQ1PaeEepAaH79gePutVvweiM6JT1aZTid1Q3rLZQXJGXECEHDyG9TE",
  "key14": "2F11bG3SbqmJ8K4BM9ppgx2LYing5TbveLTypeea3Gc4xxcStb3XQgaBniegg292uxgZ8HBTSrcSr5sjvaT6CWfL",
  "key15": "Xkjs9Jk9BXZawprw7eRLKDQhYUwRfhLgSrTNAHmRGdZp2QESvpWbF6qqidZkV1QcjVP3WuH2LiFSpjfXDTTvVC2",
  "key16": "3bi5a87vVGPVfLmrER2UBPM2CdH5ZQuSt88y4n6J5MxV8iCt8roF6qqyeK8r6WpoomYZZMNtRfTVSSQArpozRCyC",
  "key17": "5c9UffUpgB6VkrvLHjgxHhobyf614hGi2vEoDyv2mih8Hn36kmziEKGktNqJUHii1cnNuVe5qWL7GtxTuom27Vgr",
  "key18": "5t9WcYmDypjyQksEH4RwNRbPacPnhcPSY33cTsaDLrhFGN16eZZzZBhAYwBnw7VFkHeCNs1pJoTFkTDiYGfXcGgB",
  "key19": "4jfHUz6Mu1SrHm6ktbwnmRDDouBhxAs1LiET67FNqJHBfs7y2C34JCQQeDHTJY1UJY3kFEgAjX2J1H3mYZGqrwKH",
  "key20": "1jMLzcq3vQ2Da9LWrszZuTaqLoddv1kZ7A9nuJBW3L8RjGB6TW9waE9FaKkA3j8WVC2rMPcmtgL53gV25U6DRRv",
  "key21": "3xUcre41QS2Rf6fuF1aZUJDe23b1eXvKweN96rrLw2XtBpGQxNps9hzqdi8Y4sE7Srdb1x1oKWQNuywm3sePWFT2",
  "key22": "cF2shBRw9Xqfm66SvC9nJaD3CCFacWC9LvD5H5HnMRnGdcusyPJ24uNHCWWGkyzpaPeVGhLMPbswq3ZJV5T1zMx",
  "key23": "Vuch5YRxtPSC6w4ZumCn7tmpXu9e9P6DfkVJzyxzMVxeQ9HcSGhGsPDDS5wdeMZQ1Ab91CJKAo6KxyoxJSZnQRg",
  "key24": "4JWHTJY6Fns1rSsPZzydVhMvLzxkAKLrRNafCF9ju6fpL6swtnFcvToezTEh812ga4yhev8bzPFMbR1zw7rgW7AU"
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
