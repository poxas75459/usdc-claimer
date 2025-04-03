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
    "22R6TvUrhkRXVGtbv8kXzBt217hd67KJ357cnU2r9Ta8G6YqZM1ooZy6pRmABnuJcph1rCHC4ypQwFx7hE3DKpL7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F9PxfWgDng987WTbrw4sJKdXo7iGmCTM7iEDPuDyoCp8FVZNtF311Nar2h2whcZMzuUsbNMjD4pwq3TFfrBi7nb",
  "key1": "5N1s1tsnq5TmxkoYkMGd8MErefhjS1oUpgr5LmhV7pHRm5xHKbEDRQhWbf8JiAuZDNcyDERonqB1xUY1uYRZ1Rrn",
  "key2": "4pNZa5dJ7vG2kF3Df2NwzSXa6RcthYUS9QXioBoCCwcH5QneYzjKRX56ozRDMDjpxAnMC9VVRLAR6JYfPzdhiNZB",
  "key3": "4KRb89WoTnHobijjKdqrM8wR9m9uNcMJA8WLbPbvp8pv3a6f3QjanjmuxzByJPTengQMYwBBkbiP24QcRB4DSTCy",
  "key4": "3cqr8TFX7ZiU1eD5FUc6n4AzdaVSUqzEaGdZFYXaVSHcvLYmzH7nQdoe1LD8yQe97YVdR5uhytNk4RLuAZRHDF8N",
  "key5": "4xT8zRUaLeURtG3pp3h8YSeswWpi1siaEwV39dvv9SWSuxVw1YaMhDx9CXWSnxfVK3XDa31zM3rmtfSdyXZsHc6u",
  "key6": "3GQipgZMBdGyFaSTCpbLGUXFxGUPxs7u6Bv5UQp7rebRP2u3qUgUbiYeidmpi2joSw9eRjtsWwa7CpTYha7qbfML",
  "key7": "mkaxFQoUxEeDBgxEVCtASJa7eJXJqsd7rqoP79djn9rnpdDiVUMaN6eEY3vKM7BpuzTaNzhby5QKUoUaunGWM5K",
  "key8": "2Atxq3fhnpF2AwxWVwzsHz7SXeVSoeVvzrM6kUQcx3VQCBWkCobatpTmkrPiwiNm3h5K4EmzG3XoEjhFrTMNZDmh",
  "key9": "3pH2KtfGbnTq1dLtc3oxTrSy8q21RqJSd1nNvQfJ5cJffx99R5RpabcXVkzAVYLSt5RJ6ZiSKBScjQYXNvNiEcn2",
  "key10": "5YwucL8pLopaCeLujofvQpFsD2qFjWXENLcPf89rrjoGd2zTExPmJF2XjKShNw2n7QjqPu3S4cCzS1uYgXepaLuK",
  "key11": "WJjUDqVLP4iejtb4vuAPCfAdnyRe89c2f68DzYiZyTDtDGWcxnY9CjXJ6cdpAWgwRELRzp5nQ39KAouynEf3b5v",
  "key12": "5pQshmobdZCXq8cBxqDFbnz7Pt5UAdLshzjZFFAr3fqHjguZVg5T6iC3T4QXhsjKb9gVnTBmrYwQdRHFpZ9LdaNw",
  "key13": "3quXGrMuJb6awTUaJ6jNi1C94rcZuS4bk7XWS4a15kgCzgBCK9XXqMMKNVsuT6oj4wPE5SEk5wTyEUhJsjBpKKPD",
  "key14": "2esmX3d8rtiRR2ARV1Wjh63v29jfTbCAwe1J32BERJt4ijpkePBdJy1NRQqLxnifKPLr1qCnPakrsUeRoMJL5Ryb",
  "key15": "4MJ1XWXDwuzciqCbzk4wmVfRZmrTEjmnkw1dgK24CT36Qc2dBWqTXLjczXMvCeuQtDpWBxfADsQnHkG9xvFYSYAq",
  "key16": "3NSAhBmDyeoekcBbiwFtjABrHwyPosoad343rkq2z9H7sissQxdPBAXzWVMkMfhiiVCLVG6YQsiZbnZLkBT7c9M7",
  "key17": "4Gk682KQnofVTUJUgFxvK6wzFZb8ZgDu82V8VTN3vUgr55N3yEZSKW67uWDiGn1tapUNs7th33m6gdTB8zeCkFxQ",
  "key18": "55Dunq2fh9u4sNqWaozKr2WrcByDNy2MpP5SpvRLj8sGnN35dWd8KZkChjm3bvgm5r3hShvHzYY5jMwoERyS6GMA",
  "key19": "3yCu8UAmXvguDdaBxHGd8xzNG1BKwBrwmttD578dvwBwVHZG3Rd1oqtHAXWssvGYRC5UskhkhZt4vuQRzc3ndfYo",
  "key20": "4quyrhwNrjgmYcWoFR2QWUreCxjqZ1CM53Ksa1qdPK7zv9qFrrtyXsSb9yLFbJekkwGhVgCFTVRPP6mmTY52crgr",
  "key21": "2AnVZyTR9vBVkX4GFKhLjXbdwpArWstF8ZqEZLwRVVG2LKufttLcSmo1LJpwLpmDctzkG8r8zEfRRAvpUA7WTZFL",
  "key22": "3CGhmpgeyFEEWocTfv21j9WMmavkgewDEw2DutmQ9KFKS6hosqtSssuuBCZopL8CpgJqcx3ufeatziytfut8ZbCg",
  "key23": "2JQQeGmd3A88JEhvrfYBbLUgQf4WWn3LaFd5GGBiewUn29JQuKEpqCvaVz1Ws2Qo7gjeWLaJqdd8ic6vmazp4S4y",
  "key24": "4DZbXrSdib2MHdLDEiNvEy5ARddHzNh5J3XVu75oVb6WA2yZt8kgvWdQHW3QS4o76v3CEVUNR7n3SipaFJ4DaDHZ",
  "key25": "5r6o2Bjb7fVbhM7nVncsTAz1DH6ZhcpDoFphNcLxVuvj8q89YVuGUmtPWURkemiVyBQsqcz9xtocwg4C4MDRvQeQ"
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
