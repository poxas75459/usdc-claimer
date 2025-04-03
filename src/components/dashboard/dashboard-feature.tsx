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
    "iJHijgvtRxmrw93X43F9154RLMUsBLXw4QKm9vMP9NB6afUtAL61ruo4mxRE4kUvLHdtyJmQ8aqryx22wPfhfbc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21KzGwzRiw1Q7D6LoJsuTodrZteQfzwPGVv5ywQHpHFPaYAyUUGVn2Hp4FZLn5cVrLfAooWqSDeCxvwi6eKtYSMu",
  "key1": "2FZZCzBz9aSQTTv9npQm3nZqc6DKGHmetNUykBoB6aHSPWUTvR4wpDzYbMmySjsyxxKVBhxSX6sNQQkpY6vyCfAe",
  "key2": "23NDdxpDkDuvdQB1X1HVF5xLD1eT9X9pvDxRirxAkofFHqzbyMurRZGMXaHW3cCkgLBJTGo2ePA5Y22jnsxL1cgk",
  "key3": "2pSHYEbKjnZVFedmtpoCKZMyu4nMYHdkEwQYm458u9W39s88BH64EgKUZgk2TaPjpZZWDerHrMo1BcjAXkTwLDS3",
  "key4": "3Q6QutYtTgDQibEbFbdzP1FMvwFbS5dzVPNBBSKsRY1RLr1P9fL2CmvpShs2Tna5SiNUutwVFLhDC91de5nLAGQv",
  "key5": "5zTWcqMarDXhwWxd5ePmRA4MeakWbSPxswTaKujB4JgenacKKcUdRkUaFen9vGNnphfzMGFvRfjEVGD6Gi6kW35Z",
  "key6": "5U7V8hYbs2djaXrZwu11UBYRAhHySuYddzRa23HC3rUtHWF8eg9uZYMe9LZy3sJ6djU3oQXH81QfnANWtVLeTJPE",
  "key7": "5N1u5HpjJSsNiasseSVa7gzvk8xjVongScx4XVy2iHuUofA8bHLEDBJGusZmWUZMgJTpxXEfskjBkHQYEd7sXTUW",
  "key8": "2Mo5fGmhsRzjgY9yk9xdypnbqbj3ysNBSWdmebzNPKmpSw59JuR7YLbx1AgKy3cSw9ta2kgJKxzxB96wLgBY7EZw",
  "key9": "JmD5reMnoQk7aSo6HpsaviVzmoZ1WRM7znd4R2STJHUsRnGs3DxTzALLfZmEeVfXrb49bCnrr4ZHLSWwou42x95",
  "key10": "246T69Z2axXjH4u2hDUQSXWcsy5gt4ysybPXboK3axhKmgktNJG4R6pZuGbkYRba1MwysczGP9UkHegfAvqcLmbX",
  "key11": "7XfvQmk9X1SNdMhHaAqsamLUZ2YjdCfAuphwDXTnSAK4B5cUbyE3QhKh94RfnRtAgM8fnZJokthRccEUW7KrDDa",
  "key12": "288Qb3sA83zoxXZYgy8fXQTrW18GgC1GsthM9eGqCMPJMkpEZiATapCFEkFDMF69rg84t1tsC3YfFqnN3ScyBNem",
  "key13": "44KM7heWbaHtYmCZmKtVr1gkc7DfV5gPd3qtKK9krmSpbBNFMfp6QzF5HVQiRpc4GdCWL5MM8nzfzAhMngbV1kSv",
  "key14": "4qZiP3h9W4qSn1R7qCK2UrCAj3bRfMrMm3m3qiJVVE2kgAUNCsW8KccUA3RsBJTeq9u3ruDrbknfuMX5KYZHYCsJ",
  "key15": "5M2icbts646fcQ1Ydz9rpfk8JmRtYGN4XEtuhtLpkB29n69nvGV17BipR5YEcGwLgpnCeL8MDggLttWZhd1RYCBG",
  "key16": "5Xv9Mt49NS1DXtJwf5gwWtbpWir2ytZHmhWx5VWyDU112kExQWdBuaJHwpACvqa9Ma4wtWjdPKyx2bYpgmuSurvv",
  "key17": "66EAy5sv5YqYaJmUFMfYUJ97vTb1hZiJVPjrmGSWbhhSFpaoaFYqK76o6jYy1RBHRUjUxf5GUm3LqStRHnRtpU44",
  "key18": "x3VbhwdpPFSYzHcWqZ3Cdr8dftm1hGGHU7GFFKnSs9JFjm8DfkLeW4WtagGCaufjVnNZY2DWWYmPwm293Zipuru",
  "key19": "55w3HrGrkxEGcXddEqNcxxVqDkbeCwCFLtxunud9zq5aNNq1twy3Y4cWmirmcT5gMrnMDF5DdPEF7GythJAmrYt",
  "key20": "5XJAZZ1oeAHh3pifcbP8wTRGFQ2EQ9Sikf3BXJv3CEFk4VfYRShJjL5wditgMS21qNt4LTgcC7VVHDkZPnvCy8V9",
  "key21": "RiK75Pk1o4aS4GB8owab8FwywvxgQQ5vaPjzaRBN93t3fyEHhDriN4J5aWoEvBTkS4ikX3aJ3RbjbPuRTARs5ZG",
  "key22": "5zTqu6bbQ45toHn7d7LiKstkpqBMFMyd8u2NHSifVcXPGspR31wsj91KZHMUYZNYYLTezct8kSe2s8RT43qys5UH",
  "key23": "5XUQZ3B1J5qeZwkxWvCZbHnwgJUgPh6Js3Rd1VBASNy4mrT1j3g7Gu2Q91LFwykpND86jrg2oW4vTgxZGAZYrLci",
  "key24": "4fCuWXbMGHu2zHbixY1YHSBvpntKuB59PULZvFtdszroHSPMxj5fgK8bpRxkkYZPVePV9yz7jHaBahfMnkKsVdDQ",
  "key25": "2MShnyr4DNRz4zVR8yi9wq5EPHkQVRvkQEFwo1wTeLAGskqJtFf4p5VeodbAQmWLBrKwdoJZJ4LqjTXFvhDHPyBy"
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
