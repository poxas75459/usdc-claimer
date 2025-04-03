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
    "5CCSEARLJm35b1JMeFZVoHpajd9MeTkvynXBm5Btyhu5NXbx77e95NeUbqC9zvMSSqQLn15yp4QverTpB6kXNrJj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YtgxUrujBNYtedKz29h7EiXMSTLeiMsCtFdhniXP5cicFUaRsjgcYXK6WBkahigtddC22TX8fdEop8HREdyLrsB",
  "key1": "3YszeR1Ft7mY2Ppkw6g6gJczUr4oiB4RT9Y7Ckk749mbY6DtK9Ygeq33jj8jdwX7tyB5JPWFE5FpiuGrrhpQmQD6",
  "key2": "ThZRgf8XCyWkuzSZNo4t3aCZ72VUupQVm4GWyMPtSG2jEByeFvkQ1fzWwbLdsmV6MT6J3jVkaSF7eH6Sbd7JyDj",
  "key3": "5vYB4XXz5typonqfTCZQ1KMt5Vwkv1R4DziV87kXDY1tpy5EaGzyPVCHCmCjntXK3msSyo8n1wGDUtPHP8JLhPaC",
  "key4": "3naa5fPJF9RszBdbZK4pFPeayGYXb75Y6gdHi3RpciNaQgkKWeNiMiDt4RHBs4EjQERRBNMdgA6qL1RFqQKmW5mw",
  "key5": "4BDBrb5qLoL8YTFyAantpFsvbp1NYkqdaveRmHUcDTJd5UNbA9yGc3AdV5Z4U9FJQnryun3xn6gfu1gh73bbMaUx",
  "key6": "5dvSbyt2WmUVn3uwYg39YrQ7maePc7fSi9F3CMWmAXewbMmHRCXEHWmx7HuSkUHNS5a7QtfAYMnYp84tr19bMZsr",
  "key7": "31sbpNXVuT7VooM5EpQf3DBvXMBAGNQUJsKWmKBFJweiAZ3MVFZBQ2WrjPPx7HuD8RxwwBDbxanXqaeuwo13urDn",
  "key8": "GJKAMeQB2FFaM9Bsr1GFFVpBZpXyMXwgL3uRibqYLbVLM4BXBwgJtceEQtzo1Qop4maNrM9wAunVuNhyuT9HFu8",
  "key9": "5MNrKLEv5RibgAQik5rY37i5uDvL8JMpEHFCsWJCDDWrFCrg35Q58buxVrvcSv62SiQJcCaDXLC9kYQmkUPosMvw",
  "key10": "2HAJ3S7jLci3ncvNmK1Hrtt2MbKKdsUGhduP6bRYDR8v6PUPiFPkF9URqmPwABKnHT2iUsX3Z1BwF1gibVcwK9GA",
  "key11": "5ZBf5w3Dc8mq669uEUKeXa8oYYjBVpe5paamgB7H67USxipBbj44TagAdNYSvuCkdBufxtabqbtbhGP8EDXbD5Dk",
  "key12": "toyZTADAfRfZjRMxv9Wj6xsjgxFbZqfXn3y17asd5epPuZdmQZ8FyExoVYQHYZQqjCun9Fvrho6267UazDYkwA9",
  "key13": "5GFb9puehNGK7rXCJ2nRmQVxqPcymFt217yJgGQRUhyzj4iaRNPHWCbciDhbeXzZhZY6ZmXEUbRDjuvjtktSYXaS",
  "key14": "4JyDAiCF1aGMTtugtCR149LLGEJFPPNUHrF4yC2FDcCESzakHbvRL335KEEGc553Hn8mvWgTRg7F1aYQrycw3Sar",
  "key15": "23XZhHs5LxHcsfSJYKTzHV7kcSnPppc5EWQeqoRG273EcpGgZQD8rt9qiBAKoNQLHe1XLtbi3NPaCXA6pWBDZehV",
  "key16": "24WrXCKtHixYnTm3cyHbVdq21ae4K6DAubJitCwK5mih3yuxKboDQwqSkP58MB1KJPPmaa5M7EykrUZvUj5Z4M7y",
  "key17": "nAf2MtcdBYMs7w1iW7A9U3uxAn7H2Z9SWjS4tLnxpKALCiHGmoJwY8Wi2TUmsAv8cr8Hcpo1aDPhT817fcn9vHi",
  "key18": "5ksGEpT2Q2bHfEzNY63QFPQGikjnA6zdmTRdvfZWRuHo9ymW1p5hZ9xDMigEk9eaADDzUtAXBGE4soxn9cpvhoq3",
  "key19": "3hJ4guJhwLfYsc2nK4PyiJWvKYaVotumvPsmG2nBt2bwubu4E9AsdPwVGMJ1bRTAS8BPnacfocW5gf56mrqg92nu",
  "key20": "aEcD118enPWtDoi2ZPjzHLFxmZvdmrP9mdjJ8w26muxxUrwnKoMFyxVsW9AftdP2rRfG5Vkjiwqs1BkgC71kkBw",
  "key21": "3wMLeHJ745FBwgqjy8ong5qddeb2hg9P31N95nBifQcEeoJPUY5Y2s3o9izaQfdG7ft3c9jGqnNPPiDXqC6vP5xb",
  "key22": "63UvL83Z1W13D8CpeBoweM8bACLLin93oLuEzoi4wqDWdcMsm39Yxn4Z5GCvSsj9wBYRqNePLjxt1gp3vBL5398d",
  "key23": "3SWWqvwCQyaZLp2DzHn6gwanNWWsnmjnYAmW6Xn3yU4FTkQvZLvuq1nw8HyPCHeTxZ82Bv5yDNLzhJHGsyiHCRzA",
  "key24": "4bJFv4vrovawfpXJNS7bM75zbEtbvAouABH3ix3ytf9JfaDogX7vhPyM3CgaEg1Ya84u6qttNNB8mc1W87SgNvh",
  "key25": "cauVYSUqgBUv4Z1vrnpVpE4uR6da1HFQrKzKJy9neADQwmrr3kCWitnAeRp52scd4yx9osPnLEkSRJpAjU11igT"
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
