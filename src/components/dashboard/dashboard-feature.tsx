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
    "3wYey3P4NHp1VWa1faWJ26Zn8kjQ3MhbkkXg8Z31ZuLVXdcPhzp3AUUyLPE1sJKGQvkpBFikv3fLGHDCmA51zEcu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iz5qWKn1ZGnkRwMYMBLuqNaRYVTxhbHjua4VXMnn12tvjdFuSrBVB7sfqbAtWzQoFRCYhHwC881wRR1QA2chxWp",
  "key1": "gG69bo3iKG2TUhxU97ro16fieH563sQWrBudKasc7PTAo3Y4YoP9EWRfj9Xuxvn8RmgScPvAFzdpsAQZzrwAi9V",
  "key2": "56oGZs7TLwefgfBrZMdwnacx5ZvZNRKkACLXp5gdY5kw5HbdKWZqib6nvoMgqWGvPvzoiahSEjiMMnYQgUSHU2Gt",
  "key3": "41d8Mk5DDgKpyPJptTKoHVyVQT92XREAtXJY4fjfdDhLKNMbhmfVRdgDryyJzzMTXrD2Q4YbP6AWMH8N1HxCbbA1",
  "key4": "vZLqytt5iBkyhAuWqCsZaufdWHrLuBQYMqBUAfWiUHX1bbWFGE4KK2MmXDQzmU6PRBnVmBbg7RKEWr4bsthFVdd",
  "key5": "52Vvv6WzQd1tkecXfhmqdp1M8MLRMshbPJAttrc27zHMAsUbQ1UKkLyKzxGbMav7CYjLd5r5eVA1JoEhJMou6V26",
  "key6": "5YCDCbYZnL9r46ArY3C6HDT5EyRamStRUa86gGBntjgaRkEsCwhggQuJpM8gHqLKtG1akyMJBv9vjgXHDQAQq35t",
  "key7": "4AguSkLfF9LbJAKvjeHfdtdeioj2RSSRbtHPZnBrHwc6Gvktkr7wpEmMGZLb3SwCc84ucsT1PQWttXax8f7FzFcJ",
  "key8": "58LQYTH4fFS4TRcTsYYsJqSzQpKs3484a9kNLjtVRrzjWoGcrBpJ951hhYnuhGfUMZfWdc9XsWz9u5rEF6kvRSwA",
  "key9": "2hq5FxytiBMApAkFAgZy1TFgbc5w9doZP6jpKdMrFd9S5LpY6c54udUk2yTPBKtKCteQTTgB5LC4GcagRkj3fHZi",
  "key10": "2Gue1bwadmG56xdDNeoSj7TfGoor6JDb9hEzzTDVnihJdWRaQ3T4g8DSt8iag9Tmmf6es6VpJdcq1XHHeD68q4vg",
  "key11": "wpPfhUnyW4YFCB5prVAeaiSzRgYB5ppMn6cps4XQ8GA76B2HTJDGdQSWx7zFJkvoK88cA3wosfUo4aExFL26KSD",
  "key12": "2uZ5DgKi2zeqV6zcyKpv4C92SXRUrjKErVkv44cPC5SQGeynyNnsvn3hJExRLBZpYzmfz9x7JL3MQt6wKsmaDacG",
  "key13": "3eXH9pAvbSNr1RXUNufD1BPUHdzDoTiYPQHtEqwXLoJt2BP2jvjTRu93Amm2kK9AQK3BtsNKcFFGDK1vBV6zAFHj",
  "key14": "3bXBgv8E1Rh8JeGZy9aguPkYmAMKpWT6rQndmYNz5kALQhZLhS9HU4QcgKR2JArhVRJEFwfoY2vYnFZxa8SGAxk7",
  "key15": "3cyzJaXMxA51DzFrn1bFd8ogJTZDbMGPF3p3r4kGKk8Kb8e7XZKhR5t9XPEu2mSDsysev71U1FPv9VzSpNsDZZh1",
  "key16": "2QdW5qN1mgCcCXE98i5ni9rp3aFTEvhW3f2kuTB3chQkPApGg4SvhK4zbqA3yUuGPbxvpUoS3tXdn25ognMgZn2r",
  "key17": "q62CBFz6GRVvJ8RHEUyYpFsibavDjuicCAwCjNvMgvCULJyDCpL8mKq4re2ZjdtGZJPEbCvQp4npUb4UA8atB4z",
  "key18": "55gHBp6SzDNrA3emaKSQtp9knSWCM34r49nNM4244HgEUbyksEzjnJsTEQbcK7M4z7oShuZzn3bwV8yPWq8CJpu3",
  "key19": "5iCzy8mkPxVTmtpMbw8APJERrsF7HgydeFb8KASVe49jiArBjcA5Cno6NAKkgsVzyouE6uWcBuBP486ucHotbmMd",
  "key20": "AWqpkhW4wAyEF3oNMJ8EtWSCUsTi5W65gS3HBgwBUEjWD6hXPBZ3SzBCfjBGu9PxcZkgB3xRaRvz5HTQdCzPQ6v",
  "key21": "5BvTsxfpovyBJWHxjfxyBi5DTu8rN644gK4ysdbo4ebUaMib6kwW1QcxP25JKrzxMqnifXSA6Lo6DxnR2yEPYwj9",
  "key22": "27E6b1ih1w39LescT6EzidjQLBCNmHNSYEdCE1PnjFWNBgcofqDxXbRvZxhb2ukiAEqa2R2y7PCUNAeZts8MKnhM",
  "key23": "4EJTCMbCVKMUBZi6NPWs2dic9oW4e2kWwDtsKvXWeBdPAjnqoMTXsQXmx6peuZnh5rSsr5oUAemK9aFs9iym9RHC",
  "key24": "2m2GLKwVpoDMfkQDArrM41Gfea7h1wFHXw5hSoxt1rraAL25Ej7robRQ63MfEfTmiN9zujsAQhUBCP9GanLPQuZJ",
  "key25": "2HTQT5r15yGbfuCa2PZrZYK2UExv2GKmPoLHmKWsdcQFgp6GoQv1xNGTojXS2hogXqXU7jpjkcNPVLA6BQWzLitC"
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
