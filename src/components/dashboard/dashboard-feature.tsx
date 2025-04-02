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
    "3yJxd36oL4fAA4doC4Gmaj6Tn3ThKP98wgDbymLBwCUmgXNrGXi61BwiRFbLf4gHWtNAWQhUZAh7UZbAVfDg9Hat"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LjEhbAb5USnYpaCur3R81uxc1YnQ5yF77HnBt6UUSpTU1upLNbGS6gcb42G5RGSgmizb4sqD7d1wc5X7QWKMheU",
  "key1": "33XYxjCEh3BAb7JACE36L9s7JJPS43DQ4hppN3Y8mrYUTQGPZpBH3ya8K6BcyLEkKMRMFKg2SWufW4LL7WF9CXZr",
  "key2": "YrbMGQVD5fJHi7D8UmqmMVtSXuzR9taFCQKYKnqWdkFT5NLxGT9neyqER8pBE2oQHQgFivNQUxbMR6ssoPVCLwg",
  "key3": "4uN4o7Uv7xzYULyMQorVL2mHpx28eZvnwsSaqp17vN4aP8z34NFik8rkGPATzZrtJoREhAAPbgj65RPHBioZb66n",
  "key4": "5U4tKfTNpHTPTH3cE8aGSAuDtoAT67LRwjbAKX4BFPKY5FHMC5GwkwJTpjMhSxQ6wB5dCJEo7Gf8jSq7UuMz4NGa",
  "key5": "4Ci7SfCR97yfSfoAzFD2LCyjonbfXrjo3qLrWcXXRWovJk1KprYHnbaWDgpnbJmUvNpSgTPYuXvED4nNMMV667g2",
  "key6": "3BfNYHtf8rM2zgqXGamh5nnWB6NPZWq8YV9dPGDGgkHqBnqgvdinD3JSswXCWssnBw4pi4BJVY3xu2qt9dD3kVMe",
  "key7": "2A73TfRr62fZq4ZG7Aaz6yjdFf64FjUWBrf1EEWgRtTP4GLDAGBRDtdHRHNjs5Hi2CQJoRbJrZsKgNm4DAhHRx3c",
  "key8": "4tMrxLRfKYJHvh8ZCxTLTgZQFMhhQbCcvbCXtHKL3Gio8N2uw8mhkNddUPMUvAj32YFPJUhwHEr1ERCzKQntucrZ",
  "key9": "65iRPgbzKtjtxMUnuaXML2nsN5a1YGyPRkRQsQT6GfpV9Xb3HCwVwuy5W8mwjynkNtFK6NuV9KUgDDxrDn5zEkdN",
  "key10": "561vJF63qNEZ7Lfjsy2AA7pMNKHf4qFxoUnhjXmQzCj6afpKofnxSnp6LQufz6989SxHtjfzdz7LyA7DpDm3snMh",
  "key11": "2xQtZEbjumpTfBkPeebxcm3Xitn2xAhV4z9pZtv2Eu6GVbbXbg7e66nbdhUfBbmbfAbzERsmihE1tNZNohH9mLVQ",
  "key12": "25cnaC7psPgeroek8bS1bzhsm4nLLB2BDEyuAXjFEpYYAdjd3LXgHHMg7Mz4ngAwTRTH9zB3PkVqDN9q8pofziXs",
  "key13": "2ZMo32Fs8kbEFRnb6qSsywdeKc2QQ7Y44SXWissUJPMsepr73AiCdGRHokVKErH1Fk9mcb1pwfZnGBt7fXsN48BL",
  "key14": "2tPABEwuG1Jue9SdJKsVX6g32YrE4fFj5GhkrCNC6EoFzwbwEaESyJdbztms46Dj5nTPYQiqZLT7iHfoESNJXjn5",
  "key15": "4tgU3XVquc3jbNEDWD261GMU7hjpRqX5AzKAWa7XZ46TdRLgxyaYFnF6anfJZde5aL8gyyK2GkXZZU3DyzdYruUd",
  "key16": "kF9Xo8HE8yUBVnn86RP6LmDULKdQ4BvSZeVv38RBEcejCfG5VEq88eDWKoHWsy5CtEV2ubJtsS2NNSggShMwCjm",
  "key17": "4ZaPpXK22SV7WNb5mUUja4Fe3FDtxiodrJ8nGE8ZRQ3nyEhtqHKnYwqWtfAvRWW35rNweJFJAa9tX2QnLgb6Duh3",
  "key18": "4HfQ6uQXuEBBRwm4WAWEzKq7JpukMkmVgJ89r7Fo9yQAamVSzeT46VKnGGVdqCvKU8xttPKHdQwyxAiCGi4cNLcY",
  "key19": "3fAeaFjFqk2LSmRzCoN19UXZXnS6GYiP7gxYZNf9Q5vBvMbR21j2yF9Jy3R8upke99bdvj9sBcA3QpS4Jtar3XfJ",
  "key20": "3yGMEyrxK9JZtd9hnCHPvRv13bPJW7xEJiTVeyxFTWC3BujExNd6f18ar53TRJxcAvnZcaKFeg7wtGXrMeKPeswn",
  "key21": "4nu8yvDVUYZrowvZRDKP6vkcqeKDtXpK2ZDtKgPpKoXgNSM3pd6jRjdJMi9H6xNpjGm3qQXTzDiiXPg6KpnpEVXW",
  "key22": "2KK3dnA9dzx7A7u9Q9ecwnorrdmNqC4C8xmSKsAzevj4s7gZWoEDT14TSi4cAPtvya4kLhZHx6Zf2UzRdZ3EjvXi",
  "key23": "4QvwCHUH7mxwQE5jykZxUhvZSQunWQhfGUmbjejuPZLPRNReAwTDEHo47899zGAkarTve7SCbfu9xufH6DCD9C6M",
  "key24": "4JKcabfbqJNpNcWYL2qnjKbrpY4fwQ1gCuEYxttDNsDTMLm9HDREEPP7fZLqy5FaJG5DTwxN3Y98zKriGy5RyDAJ",
  "key25": "2iFFZrQNb2ZG1G2vHu4f5sWDNwX2Pou1WRCZQrwL7WgjRXPxJiWzHuk74G1pgg5nE5exowS7bgHDeGesRHuzYXyQ",
  "key26": "FdB2gCKMhEPkhHW2CxEYiu2cUfN7AKEqZRrKhnhSrFfeV92LdqCFo2C5rDB4Nd6pk5pmWQhb9XPE738ah3j7Sdf",
  "key27": "4tL8MpLcmnpJNQLY3gQoB1sAuiF1xCSGHRshSN3BC2p8sKJBQy3fMyRS1krTHTKsBkG3s3vYZXhZ68YrZYYF645f",
  "key28": "2v8fvG4BUuFsjWWt2kxvSJXivsKkiR3mUMMc2q3JsphyipBJu92vZKHsqVS384iC515K7btKm1D32qUp7u27oGp3",
  "key29": "3b8sBnMXakLBYJ1eJoQAohidk3F7FtJH6VBP5HnHvbMaa7uzWiW84aq21ufo1ywWZ9TamzH68VdEZFZY5aE4qRTS"
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
