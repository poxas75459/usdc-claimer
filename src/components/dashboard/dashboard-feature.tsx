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
    "4H9DB1QDvb1Npg19HPUaKFx3GDqRZuVBgi9AzXFH3N4CpZmsJYVvE37Cs4uj5o4nCLHrGJtM8V88yacs968sYMxG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QYU8KBcMEoMTgbjqyUX1ZNYw4agHGsFYn6dJvjZc6LJkvjhjthtqZ6zxtAWpGRUDWhvb34uNeg3tYsUnCYoaP5a",
  "key1": "5nM9gBYnwmP4YBzq5FvEhxnHv1JMB16PRLatcXo2AH1yaG9jBGqC4AHu8VeaWS9SyYVk2Kooa48crqvMs7H7wf65",
  "key2": "3mETtpEKzNsNmFnCVHv7YmH9vbNivSXCYoFyZv9HhELLL81nRpNVmKpds84XQfmbauVLmhNvTi7JX7ZWDU8PpHnd",
  "key3": "2haJaMkkaxogYybSd9pzghBvGxverdhQA5CgFBqMunLMmV2wuCTAnaveTpyMKGsumnHqPWYDjQYznVcFFFPdacjs",
  "key4": "5F1duV27theQyZ5SQygsC7yvCjmoMBXhWBdKiHUSuP826ZW8imS3ddNm6bruJgtQUgs5sNcqa9GLPGjb7sMTzqSF",
  "key5": "2LbbgD6F1pkzu6z9FkUS7yfswC6HRDK74azknkBfDSBZvda3u3KkRSEx9tCCSeHeMTsYfVU6HX95rQttQL6oVHNg",
  "key6": "2jcTA6wKJmeEvDMG2XK2Mz3MqjYJnBczYPGRf5EHjCQxscFnSGbmw72LPQfNgwX61VGvahwD3QeJef3DQosgggeb",
  "key7": "jge1TYirFrEjCkKfeuX1dUpMuY9FHpwd63aZ61csKDn15WKvHHP8qGkWQfJ8maKwnFd3ac4LtZYKpvkVwY9heKC",
  "key8": "2Z28vK2CsDL12thc3LkucTByr7hiigMaxCoFznfBcShGGEEF5fgPYmkX9wpEspAn2hg2h7EPXeuDqMkUnKQEwSu8",
  "key9": "4Cy6eBfmUBLHZ9DccaNs3pQ859zqXkZ9avXrwY31GMDMREVFk38QkXiW9wzvfAaoc3Fq4x9xQHQGoWQXbdakhSZw",
  "key10": "26dzEJPkKzGP6RkqUkN1CagxwhJmUkZBL2w8wYLkaDW6nWKPdF8aevSZiGWNN4pPZMSfiSdgrEmQ2QsKdo2hm38k",
  "key11": "5yzPAULe3MUrhxbA3W3J5fVVfUhJ1jkemQv7sBS8t8jMnpABoohBNN6npWFbzbQDyiUqZriUG5C7TUYyD8iVmMbJ",
  "key12": "3yEkevTdPEYpgs9maYQarkyTHUgp5L3mTd4NhTmbtxkyHKKeaYpNf2cM2GEmbSnqAzQ7yDXPVA6i6ain9KE4DH58",
  "key13": "4b2N9URbUJHGNDzZBtU9WiAXmTEa6xd8vFHfkeAHkBSbdeoMPQRMo8w1GB9WbyH95G5fUui3eVY91hLtPJn59oA8",
  "key14": "5Eg7MXWBHwKejABx74Zneoazj4cDL9H3BUjfM5pCfyMqAb3qHn8TQtFxh4UCGETaoahHQETuoDZo5jGSGeNjYjhY",
  "key15": "QHxh2xa4ymWiHnmJ5UQUqgyvBHaRdMDhtneCfu7mSKAgwTLWJaJFakZP4UWGunEqT3et6mWoaf8XMvf4SjqSeDn",
  "key16": "7M9GTEnaV8Xjt7Gf3jYuTQwnXsD19PUHM5Q6ogNDnaPucLTcJXUvgAtGQ4QsSJfqeJx2jqmzjiGz76VAgmphQc8",
  "key17": "3soQ23z4pCWzkdEnw7ZczmdC98iULP4gGcBXyvrVGGiQWq6CmZx1i1UxuMdhKjDJhNn87E5o2Ck2xCazbihESLKi",
  "key18": "33YhFeELUxx4hJDe2ivFKTmg3PRcfXykLm51CtGLnzwk4oWf9D9Lf9ipnYA7ZifNuNPiQxXp3LVjwKfys2qhKMUB",
  "key19": "2548nJPGLtACgL7mk3YFbyx2igoU3H2kzNkJEBEVJngaWT7ZcbYiys4MWn59NGbu3XXa5UTdqKTMfn3qR78RdhuE",
  "key20": "2P6DRwc3YuXGyeV3JVtULaSXzVGwA1ReA7RmrUV6x2zf2RdqxqZjP787Y72Jqpj8oRGNVZ25NYfd3gdHmsrSEehm",
  "key21": "BXR8hS1JbjuyZoDKRqVQnkomVEU4Gn5tNSHM6oHGvnbNrjGxJXsovLaC2JzBgHBkm9NafyM7Bq2WEP5mAdByZV3",
  "key22": "4TjR9rrBqbHNLqCgcieh4owfmgRHHGCfNNh3nW91hyP7V8YBQyp383WcTDXjnm8ch1zH4mheuAiVM9Lq3dgYXPzR",
  "key23": "54BZqR7e5ocd7ScBzhRsNEWzoJEmX4nKyUcBd9hZ7FnWHZGwqYpTc6Bt3NAd8KbJoL4KszeVBN611ung635J3fqA",
  "key24": "3sXzBs7UU9MiGE5ggXPZCakY24ybjY3Rvs5iTPkVYX9qWWoXVwfHeo28QbxB7PW8UpwY8zxmDTvoJG2kLV98ybkH"
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
