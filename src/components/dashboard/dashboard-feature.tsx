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
    "3pwKtDX6AXBRee9vDop4HTNvn6KtAsnNrE4yMHiqAQQomLuBtzcnykkdMNuhiR1GQWuksbFitZLdu9x4av9jCk2d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "239ecRqh5XbMCu8swKaQMZZvQB8DAE6quQLWycTo63t2c64R9CwNnRVQQbwCbjibixPD2LSgDk3SWRud4KvfVaFL",
  "key1": "61QycwUbvYRdnPbuCM6aEXRGde6FnQiGczJQnhjfnTakC47W96hBbJ9VSpVA7qhFbZ5WP2PSDeAH4aMfgsQDMPvc",
  "key2": "5jHELwZyq2jc3sKE67mj6qdeumMAya3cFhXDpUAbnGPtq3dyZvLNP4T3JpWTqkLfzJw7t7u7BTsFamkefw7wg6GR",
  "key3": "4c9NY2NdQAgQaMk7zhrdEtd7ftpQmB662rp8BXSbd6fHiHSEPuLFnjYh9ckNv8mzmEpesGHQicn18r9SJyedE5MV",
  "key4": "4iyMQJf3FhJfPkbuySUbRUsfRN32tzuWyPGAEAQQqnCqShrPhR3vMTRfPQqR3nZb7QnEwz28tCuyudQTq9zZyCA2",
  "key5": "2XNtkgkeTEDUyFXwmLVmcjFeP2ihFJkPLNYA3XS6mArGwhHxFaSj1KrnDLcCLTNQ9SAy2r7AYU6nMgqjFUXf7JcU",
  "key6": "5cpNtduKZghEiKYFpW9YW3gC9CeigUQBAMA3jdvwMQkYV5u7yqmq1KbyFXziAUsBABCMdyLQZd1vjcxWZFxhQG8W",
  "key7": "2PPZ1zd7M6g8rDYgg8rHuZFdzRF9pNB4uGFzb8LtcoPuLYjSYXx6ouQDb6wHhBDd5LfBMxJ1XstkGtaoaCxYMqsZ",
  "key8": "2tkUm9v41wMfWLALpEtg2rPGmZezWHWdZiKHR94Y4STaFw9hBdfPKnrNpHAf19womZCm8fQ2CoshRc84nDxhyHuE",
  "key9": "vGEc8RYpzfzoVaMdCUK4hnEp7ZQP4sThdDvQQFn96aMHWcChEjivtm5NDFLpJdcovunAQEi7Dev9JjBZsQ2K5KG",
  "key10": "2GmqtQ12gmEQ6bMwkdua6JU3MJQkavXaQDyEqVGTGhDq3sdc2r4z9BEbwBmeGdoWN5mpKoCtQTDL6XAEfd4wVxmX",
  "key11": "5i9orXAYm1FimhBKnUMD7PW6nv3qouYfoBQ8rqVGBpikU5BBAjAojmy1gvHW47bCxfbqDtzsVCY7vhwQMCfGaaBL",
  "key12": "2CH6XHUE9JXYHjeq4TtSnUjWGJZq7zSyGcURHBEbqJVWbwBrEbyKT8YRyzP4XFWq2N7jdDRedMGvCqtWo1nPED8Q",
  "key13": "moDRuGkZ3n3XejHGzcnTygg8h9DH6fi9WA9igvJWZsgEGgMfUhZMPSqqdCmzcCFUXq57JcuZRvQMhwP518GPFwb",
  "key14": "4yxsQAuapuRx139HcKUzcZFQMkF4Nas3rk2KceUZdhYuUbvNsejkirjp3NBiAvQhiLLmN1XLo68yL8FyivE9gRcP",
  "key15": "2FCxdgaHfhhYrW6jTjR6q9MXKTdRCcMEs2YN2uzZXLqi5Emph1DUfS2oLJ4RkkN977KiCGkwMzc8geQxu4EWQByu",
  "key16": "4EPRJ2skZoVHsePfHWPHaAMChMgzzFMtEWmosxpJy4hGwQxFyeWoNVjDgRLsCpctwaJ2QUHAskpvoc5ABKFsJXnT",
  "key17": "5gBj6WxdZSGU7owfrbKbDUkyXfsqJaDDFFxnLRNRg81wQ9Vgm4WdZPLreecrhoJX2K2GtpYxYrLRHWf49QdLf7qg",
  "key18": "2adW7Fe4p5mLYLu5nc9kGGUiP9xbCi2V5CdTvuHQx4BtpGXYaikgpVcR1KHs1vrTHBmYy6RW1LrM4vWJ7yqJTsZN",
  "key19": "5E53dv4fK36HPwXcELkbysotroJQJSZ1GYF2woEadcMcoTFjGFEukARLHycSmGpdpmj1FehpuSEf5ZVg4JxjDUqY",
  "key20": "4Kwp53cm6EvtGjqTnqH95QcqUNsDVpFuoptEeX7smy51jMfTxwZaQYygspp1jYwQATxtyBx3bCSPTu6oaRNng9hZ",
  "key21": "3M6sFvX3WWmvB4wErhNUYGEFZ252JpRUm2CLXD97qVoat35iR2yAYjLN7pM7npChrqwPpDRFKraLNAp4V3wauxkk",
  "key22": "3HVJzULGsuegWr8SyQiNhoq6aUFc3Ctxv5Ay9AsrL7fczvFUvGksLvrV8s9zY8jy7uzZVGRqhzrZUz1y4WchE9ru",
  "key23": "6jDLp9CUkRSivVwnPxLgAHEM6o9XYpm99VeDX7azChwjoLMXqfv8V8V3whu9CkK6TnFviPm4txS756eAJTDEmLN",
  "key24": "2PXQm5MkfEpguQZ4mXbNMMVpZKsAJXLfMdMnzquvEDf2EG2wfLy2qjaLAzUhfTN5fviaV6vaFyiVLutNHYjwrRLU",
  "key25": "ve6Fd8x5fr3yPDPT9n1Foy4tJwDPX5LnAxEbasYn1WeRPwmzva7Ee27A7JpygkvnKkh6h8njiAW8caR1K3AQS3b",
  "key26": "4WrTjdS68aqpLkAxV2HeCWL6t1qqJqLHomR3EvzWnQ7hYJPDWTpNuPm4emApMxRQ6PnBMB3MVthsaGBiPPWLdS3y",
  "key27": "2Ddqt42nfHmhmrM7bbqRDQxeYPJVefW43FbzHWKEU7TvPD4wEiEnkLzjm7zWCKtvc3VXrZFedrvkSDRoJ8xjEFHb",
  "key28": "4mBnHrPSM216zxA7NPEsjW9SRyBoBVEvHJvwjFxhbfpPnY3YsvaLgT427Toq6cdjR6854WzW9CJ5FPjo8syD97z1",
  "key29": "2Z8L4VGZtG6hT2ZvqTsQudtbag64rRsSWtBR7r5cZyKe9jxbntdU19CbXhXKtpkrxvdN76thVDX4YBvCYEcRo3DA",
  "key30": "GE4WLUD1ZsoovoZuApjoPm7fqMAKsnhqUfkbQiwUFdo3Tni1gEWCAJS5ubLbTxsVr7M9d9P5GXhnMvMUZVSZcsD",
  "key31": "5T4fEfE34Bk3jfv3CDiHxpzZ98xNzJK2qf3csos8gze4wVktFbf8YyL6iMFPVaCHFHcXCfinTKc16sapP7wfixpW",
  "key32": "5pE1FBvMbGXCjiBY8PDTAXpZWd3tH88XoMuHt8eQTXKnRnymALkkdCKWCrajxpkuDaBscPK1B549cZTzGJe7N5Dr",
  "key33": "4J1uN8VDMc14Kr3SHFNt6Lf7gBJ1qCpvyhRzGAWAeU7bFU6H1YHpLdctTqnYqr6kmcaHYR3PDTVC1GwTy3hPTXru",
  "key34": "2gmijTB7AAcs7eLUWCb52kU6FsstDoqjpLJhUFe9ZrKAZmfiph9g1BCarYj5Qa7qxyUtdze2KqGJ1xveWtBGtWjA"
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
