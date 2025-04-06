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
    "4oWhsBNRY6N7GG2rSGYAGymMzaoaHYXdjZ8XBHzeKyn5rUivqNHyMwCQxL7gGge7DR6cJskfMcGPLFdTcmGbaRim"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZeyQiEQ2ZdaFPAbGHnATikEBJ7fedGigwJns5L4h9dCXhPdzUMKyHzJoLvdHnNTJuZPR5CRpEg61AfXBSb58trM",
  "key1": "5DVh2Cy1mrVDGjMHQCbMVdbKWsRUcZJbt4JKG2doatAjZJvQhBqKGSnSkfAFE13EEGarSvwjga7XhJgq4oTR6pZc",
  "key2": "3JZ18BG7K3CHH7dzgMeR4CSVNLrGkaWaUJebEszDHFu21yzLWhyqjrsWvch4FcF1Dmn18W5jiCLRuTaDSbyQgFWv",
  "key3": "RM7vhK27nMekQBv5CrcxJg2a7BP1A3aawYkuggzHdJ5Md69EqeHTpw258eR8Hyse8WiXhHPtfwgzjEWWFFDZTeF",
  "key4": "4jRjUA9fbELRkze4gMgU9WVH9X3sfKfjtJX3QzMgAW68mUrzcocwAhsUaEgyqFj8jnjpwALzY7FVhvon3uyw1t6Z",
  "key5": "56oETjRFWSxTd43NfMxtTAHxS8EQxFRh5g7twcC4UUd6qcgBTYXbX1bsnJGMhNdNdMESnnWGUNaytQwr3C3zjWXh",
  "key6": "RCPMuKiKayz6p2TM9toXwsxHoP8whoLuS7M19t24eih7d5u1Hmc7qtCdRBvc87DFt1Vy6adQ7JfNeAcqeJoPc7a",
  "key7": "3b4eR4s5gC9RbVuJjzA7C1Qw8EUVETcrEvUcErXpkwvqUV9vFtWqo2Z1vtYSnsmVqL5xXfnzKSDE5vH1eGSFNZyG",
  "key8": "3zHCAVgYR19bnqYF6LpCc3EzyfcaChzFQ7tMzJczKkzfUUFCT5YN96aPsWsE79jwPdb6b3kRkCb4B52koafq8tHc",
  "key9": "3sNpQkDdjvNqbMWwsxS3yRQg37hFWyY7BzWJmyva4H31V9Wscm5oL7rGhjpW8aJuHNhCt3ixM8MZHXw5MY4JLzL2",
  "key10": "YLFz99RKpY9qgb57JxL42517Kuz1jm8fzh6wDGE9gHhvPM5qHXuruqnRUdxQhSrvSkB6mGWtKQAZ6xu9ZqAYmzM",
  "key11": "4cQQmRTsFm6L1d8VfqY97kKyFJbZye6fL6Sg7Y2CprM57zAMAA5FtNUs1uPu3ThyWiA4EB4aa76Ntt763rvBcHew",
  "key12": "VgA5kyWtFgzTiHqpHzPoH2RTSC92qWdm7Atb14bE45MJqNRVTKnMBT8uCjAqwpfcHssZYoy9LdqdPgQradUqYF8",
  "key13": "4kwpUYqnh8VB7vx9b33Ku8Qssaij9zzv8aWPMy6q6QTV2d74AnZz8iw56T15wPHDK9p4BS4yaC9A1uFWui9Zr7c6",
  "key14": "3MRFE76Lw8Pa7NA3G3CAD31KSYtKVyvKgpcFJNu71jKzsRTNzo46r4AAgYLN4z4yDfjCHkjLJjgDXCK3ATVtbjeL",
  "key15": "5xzHr3yDSyVKNzVjzTLF5cHz6PJH2NLGEFYHjzw3xWWJhXNFy6a1wqn1TdBs4p6fF9A6hMQKcE1z3eBVKNEShxXp",
  "key16": "2uc1urTraux9cX7bFz7h3fb9gWk6ZznTjfDTY6VD5B5qoMBsHDuRARX1Rk5CMz985gM8DRH4sPUH64b7oJ86J3SC",
  "key17": "4YEtqbByjxcN3aybDDEVRDHpmXzva9CVFgTUuPWqnLoMkA8dbgqzjFySaxAyqFBNeKTb3GtNpeZ2afgpT4zwVGfm",
  "key18": "5pWYB8eJwV31XPhTzSv6PqNeFECLieKqr1Wf1AECzA4t97Cgg1vHdSdm26nG1o1o5oNbiQzGvzvAUvKkH5gNSMsD",
  "key19": "4iUWzbosGiQucT7gmuHHzYUKbbVSFTrcKueah7rZfksKbf45JMxyhNkAckxkTPc9GLZFKVJEtFtg1dUDvA2Z7jE2",
  "key20": "4tDxJ4MTs5V7SqWaUudxqnBjspc6dfiHV4focz1CVLQ52xStM5QBRiERhSPBwKXtTf4JtASC3HDzm56SzBXNUiH6",
  "key21": "ZiD4pev92LzB1RABbPfy8raoAifyWkrTnRqAmg1iNNBXStfUAv7HKoQUbY29aCJSfjTFZeYqAf9Co4TgoqK26XE",
  "key22": "23o9gRPkEWr2LcQZqugYhY964outxrPZzTrUnAst4qapafUPXgZnreFryXURwgMQeCEbpoWHydtVomYiUNdkCZgp",
  "key23": "2Lpuk9ZX868kaZPMBnPnuUrQNdR8QgWbUZd3Ap3KZ3gbYL6pRTbTPUpKjqPaoFgKUasZ9ApaMUZZhmxRhK92TXLN",
  "key24": "2twgbzw2KFjgAN8FMqx96jQVTfqvE74vvJGypTsEKpmquatpAPqw2hMqeKBVbC7w2boVbVWNV1ixkY4U3VXHgVbE",
  "key25": "2D1Vit6qwj5CdvxzR3XhDFQAvT8d5VRHTKj12Xeca68oHCY3BCVrMLTjgJ1zrw9BxrP2YsywADUumCqg4JD25XQG",
  "key26": "y6YziXpPdwSmdbE6rCUiHQSWBSvtBAZY7HDkJwqjFnn4BAo1Q6FjcQBJRv6CpRepz9Ve5wHzywg58u9bH9XjxBP",
  "key27": "3Y8Yc3UDCsbbpdgy8Te7H5iCdD3vNmRMY4W2sPxYor5vKZiHxzsx5SvsS4d7iwhXxJ4QgXUnpupXddrcXzsPxLSX",
  "key28": "pqHJvYKmHfdZc1dgTXay9qWU3Qi5JbLRXYEAaSGJvX1MxVuDiFHtNKjS3PKm4XErAf4q7vQvmAbh8jXVY1A3ZJT"
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
