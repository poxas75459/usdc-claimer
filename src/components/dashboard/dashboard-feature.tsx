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
    "2mWPvqgRpzeNurcMeuQfvXVSv4Qk1FoUcX7KSLQxBgLUPrDbhNhLikCxXvB9GgbF3JvY9ydpFaeUpd6VRC69MqCj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CTcW15CyvvmrSMm3NitgbVFGWp5vTzQQQidiq8EC2gMes6rgqiuD8fSwThj7SRAYkNaQN2wcDy7piR7wKBiy1sd",
  "key1": "4A3v32Fkxa8B5eduKoRiSVzEErKwoLpYX6F284gf38NGiE7r4PHfdVrKqaQkU3u5gwZXYrt8ACA3Q22qgW9fdQKZ",
  "key2": "4sxmrW59heTtF7CMY3KKtUaRnmw9thXRoXyzubbfCDrQ8CGM2MF8dYgAKWtwr49rT52yLoJu4FxEnzjKbueFGsMt",
  "key3": "2QMWCEcsAkeBUpeBa43YSqv8nBwEKHmdHCLqyZ7J1AxUMKMQhfmC26X4BrqcPGuquJNbPqLmJsKkUuf9cFngrqeQ",
  "key4": "258Zqj8qNFwP18nAbBGj8qw95HE9N9v6BvEUKUhWktJHzMSo24v15wAXaG6zuVsNj3VX1QMfLYXefJPqfiPtsde9",
  "key5": "3rMysdGm4nCaynp3Gt5o5jkzi4j4JEU1eEpBXprhRtnEzRhW7z4cFszPQS7VpgyGPHc89L2LrYrH63qPnLo3BUNM",
  "key6": "5RKAS65sY5DCpk1pCGviZwBPEpaRTkCTchAz1oaWJwgte2pyArmzK6NscvFp6pF5vW5wHKyEQxCvri91L97fDub9",
  "key7": "2Exmn9ErBzfHvx9SSR5dqyin71CYa8UDVXDQPGGrFXgQ4bJ4J1C6P3Lsq2eHrm2PKga3nFGXiR8HrPwSxh2mzKdR",
  "key8": "3GBVcoSW2c8832VkzaU6Ay4cFuwMDgoxLzMeWuD2T8Lwuoq7qFQn2L8aoHpvWM412pUqFuT4xskC9ym3FUxS5ZJd",
  "key9": "5Fg1xtAxrLRg9Wwu9weCb1W9CihvZJfMVS7uzqS3hD5LNr69WHaTHUbXHcYgKRu1ZggFkgnksNpavmeQsLazhEVc",
  "key10": "34fasoJuZ54SHCULhiweBWzMsRQhg6xbJhzAWVARSdjvPspwHdxRd1LAeaHzQyCgBi22wVTQFioFVMa5XT3s9wzM",
  "key11": "2ucyqMhBQvg9zzkBw5ZvJRf8Ymwr9Hb5xEtz3dJJJkRaz8TWDVbGKZ9Aa6GZCTUaMJW4LsLST8rV6FwWb9Xw4NFM",
  "key12": "3A7ouiioprsRuteBZqj7s3aPKC9zwFtjZTpRz3rpUDaRKLXJPVfEJEogDvf6dK2dD9uxb7Va22wdYukkSrxWSzvp",
  "key13": "3ZLyrAZeGaGPi9LbHfZQKzanzq3hwXWVviBnXbJ4Ns3ooeG2wQ9EVU1W8GSrL6XiRBvnsuafnLsCTCJeRTNsv99H",
  "key14": "8QLc88zubhLhNf9Cuma737uNLfTTqroYPfVQCDTgsjb2eSRV4jYFSsGAqEh6QqZLHEkXcCQ4UNvKwFLmo8qEszY",
  "key15": "3HMn31rzdQjobDMMigxXzpKuwoVQgQ9qvtYJG43dGfDWdmNLUULmL7uGzw1L3qoHEQNi3n63A3YFsXs4ndfR1SDe",
  "key16": "4S5QVrtuDHHzsV883qsCTNGi47qkXvbfKMJXYwkF49vUt73bkcsxMSE17m468FkDCGb1ufSNNSaT1HJaGenpNQwD",
  "key17": "2uiuzD48nEHjmdsjWBrry5x2FdaeCaXZ6nf1zUvz7kzitagawuJPEEDeuJKorHxXpqL1iRrir1kJ8EHTeHaaK1cb",
  "key18": "53hURHi17Fc4XXPYLJZzM3esfits5Zn6cXfwmRkmdbzTw5RySBTPDeQPkptoCxVpqbQtgDoxmRqMrihE6bp9Y7sg",
  "key19": "3uh5E9dVzfwAUYFcSiLoYnt8k2JhRcgeF2JJxr6eZ49hHk5qqmcxjVnJdFMmNx623rDBmP4TpvzPtXDmLtNPduAg",
  "key20": "4Dw9N4QVFLHDV6aPQ4q38iTvHREddM9hDNNQay2ipTWK4Af6n1NiVShtf7USzosMWLXmquP1k9VkJSxgFMdq4k8Y",
  "key21": "67LWjjH9WnEJYF2hieYM1WKmXAtw44F3n3eGfEFR64KM2o1VDc8xHT1ZTEPV4nCqWZxK17FoSAqh4X3odSrm2sHf",
  "key22": "5H4gPYqkNqpYhbmeLj48SfzJvzj33voBCBXbfuDTQ3rMYP4ysVSQNsbeW8P35XCbXwrzmQZrLuL8YTxqMH1931Q9",
  "key23": "49M44LKx8oAP8N8WWmMXZnMqLF6f7yAU6HC7fxki7j2ie6AKEsWaeZYqZZyhmag7D13WYLHNfAhM5wEm6yW3jxHt",
  "key24": "2HfMtJJNr9ZmsWy65snvc2UYKR6E7ntJqUpxVg2hbKhJSVSLjhjQHWrjFTtdb768bvuXc9t5AdaNd9sbSruBpRAK"
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
