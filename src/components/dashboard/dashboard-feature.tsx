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
    "4CnbWSBgqz6LsCWgAtwCj36Hbb8nx9Mtt98ivW2MAtKgwWWtA78C9F49EJEpWgu5vez21YHKmfMhbK4PuBERL9VM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nk8c3bGsCszMY2QbbySGuPBx323gwze1PS2AeuGGn32F9ZjSxhUYtbwou6Kv91E52iQfAVUoRf4jQxeuRMuGgxS",
  "key1": "2zTwJxqujPAbmKjvfSKujMMAd1nzdg7J21NBddiaSEiAHY3WX43iVQYAZ87mndKJYWy3okdZvSYNxexb62RQGQuh",
  "key2": "3XzRTDWVXZrbVsdckuWhd4cWtx28GShFhC2ZZLv5teY77CCzcRN7m3TAtfKrjSMxzuAZgtw8MkG8AKFAXMBuJBSD",
  "key3": "3zQfNdSSu1FPyUvdzn11sJs51Xv8aAcVZtb2K7kaDRymcqnymGv4GeWdAT17ZwAsrkhSw4kEdhkAqKsNVjZfGqK6",
  "key4": "3x3j8w5AVzyyXp6gsuAZLUb8cirQAHD1KZvRPyZHnfzTMaX78x9JrshUKgTxsMwnPfShNTDRvHmZwvWyJpdv8DHk",
  "key5": "5zUJwyhBrmVUEByAztf6w1mSgNU6QFqFqJco5961LsZUuegpnCDJWbrSWJfA4pAwwaDyzhJarCXGUthEEmKBu8hr",
  "key6": "2fLxuTx6VcDdJ6AZJUSbwUEpjuvHVSWoXvSEqNXBGojUWxzghdQuHgCoR9JHJt3akwwXiRSJ63KjPpUfTs3vLAVS",
  "key7": "c96hk99hePhQ3E46YCinMUrpdiDwjA8L5VbpGcuPaXsKXUgGavX5u5Fw6HRVN87GrzRopdD4nzdxyuJx5LATEAH",
  "key8": "5YYhw9a1DmEd9sxHhQAdj9taVBpZQbUibHdghzu2sHibfUY5RfDXHRSEa162NAcem94qeSGzju4uka52352y5av1",
  "key9": "3aRFZRz8FWcBExn8hrGhHeYMgsfLF8SPqBjrBLEaR1jVfS5pLiaxxqRCJ39MfreVatpWf4jSyzPzTXXjWbYZA2KC",
  "key10": "5W3SS9rXzyZjRg7cGFpd1rHtXbyaBxndvKgHS93UGN1moSs5XoHcrS9wiXnxnMpjh1mdw3NeZx22imX4DDS1StDp",
  "key11": "5GwmFb6wKzh6gL1NbXSnyX8Pc8mn5h9226pdt69zTSc7wUu4ftLM9hNB3Sd6B1sz9TguLdf8K2UVKXwCoHE3G9W6",
  "key12": "je2emdT7DpayydW3ZvwF3sBAJcbzL28Cp1dwd2sng9RkX2SoexwK19CtqDToAsecBLwzo8RKiS3yro9TmjH3aTY",
  "key13": "4LLMMCuM6bxi7joyLuWooPZJL8YtYwSupCDXBwfDch5GXvKooRhr4TbKvKHtBbi76TULVBruZ5RCy71ag3aGPVPd",
  "key14": "3aSUARkqwpj4G4iCj6zoLDAkoKE5Fw2XcR7BBHfzqeT2T1ZzEPymKrajhHZqUVP7SpJEYw86NMVyE8BB8gUn6jrw",
  "key15": "23MXQ9SbJJFBb59FPmTqBKwJEWZUpcwTFXoy3TLuY7TwwaFgL5Z1FEnnsQUFwzYWxp4H8ALqvYTprT6gEQkCRfPu",
  "key16": "FkeRQujyBEsUxU2KYFmPjv2a8LKikW5wKsLbhpc8QBejGpo8p4fFcPuz4MR2LMs6HkfprQi9fxGsPiuZHTZJNH3",
  "key17": "se6ojjNN6UjiqgxCosyNgworoYk8kUVQhHi9aXyDB2iGHRYAzta1NNp83g7TWcQ1waNdNGaZnxjJP8cSUrGwaao",
  "key18": "2MBveUeJuykLv59cWbNpR5ibbAjpGy1dTXZt1XvUppP7oao3LAjFrkf2SgboxhHXYiYTpcLac2B4LzchbsQK8CEU",
  "key19": "55CZGSes54LTK4yVVwDo29PfmTDfhngXWbJTvDLWn69rxSZqqvWFh3XSkatJ3dhbAQo27NGsc9QiubbeeiR6HSr8",
  "key20": "5Wo9fHiRcErKhu9yarze14FVf9HyNYAoJJ5hM1APmZgfAu41McCEQcUNMVw6zR8vqyn43J4ymLCVYkwqRawZr2bg",
  "key21": "NEmYfA1URz5XUjjaXMizxDE23hdYpb78aJEEiY5FnNDYm1tDCUdK4Q1WBG7DYCiZ9SJNa19KXjdCG1mRzmsUxz1",
  "key22": "2t7izW7dKb9xkh1kT7qP7DByxVyHsbWPnEJuqa5X8TGA5aKcCZisX89sPAput4gRw3uUWskwSDVKaLPzxesyr23t",
  "key23": "4MEwqCnfPZrfaCARNJh22LYzNXsgrW1ysyajhvjLVbCDV9s7p9nJZLKcmTRjkYbxnzweMNzLXjkG1g4VLk6P6sXB",
  "key24": "5FHC6VVsoW8oKsspAERPT3K99ymXbt6kaMAB9FvC5tdkmmwbBvfJXNbi1acbP4MzsN4cTXA2eapHB4yjGsEUywNd",
  "key25": "5XeaeFhDo1ZXs38bnRLAXZdBPTR4NdYzmv47qbPhnbdaxKkeQXvp44ZXNRzSAzi23z1b8inPgjcMe3kxE7g1o57z",
  "key26": "4RRaMrMhU9nCtQ5tqyrE9sndJQ9bTpbcMxh9GwUmrGYDqPXRE3UHRW4ATr4TJWQ59bzctYke9PFMggG6nFg7vyKi"
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
