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
    "3TkbNjBtBJTcbaKwsCujLcPJwSXUTJVsYRNY8L7hXosJzB8psZhRcKQMNM5aMLYYGXzhY9FnwVzSfDbQfWhwse6i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FLZheCyvCX4EmM47VTax2kfGCVmNdz5AQaNKsK5pjcsch5JrYjwo2ztY8gDDaaVGssXEdkiMkWNy1Bh8kGcNGMC",
  "key1": "4Wqhsb89a2mSTEEYRYBMH6zdEQbqSDzs2m7NycuPMw9kuWBdZup8gV8AFQTmN4iHC8CzCSDzMsyYZw51v5sq7EdT",
  "key2": "62DrYALyLns2G3QnZvz46MyG41YL7BKfCgYku1XSY5pH2289KNCdeJJVZPAJnj9LqUmHscgFmUCrT1hERmBqN4i8",
  "key3": "5tURgkTSgxiYvhMkXn2iSxE8CiP8qyWsNY846EoLreWfryxz9nBeaCnriMjgckmiGnhsK871PVz7mvQ7uouqABrk",
  "key4": "5nnC3A5Yqa9gChPXrn9oty1PSpyQNDKyMDzmUbFuGC7JZVJTFfpnmoQkAShqdBtfyFBGFPCwo7Z1P24T2qYAxx9J",
  "key5": "5mV2XugaBauNxo7Wrcw9jc73bsJ7emF8dTLrNh7omvmZCe9gQ3xcdNrixYi4UBRkiRztBSkzxzYEBPgXvcVJYnvw",
  "key6": "2k2gRSgQ3Rdpc7ZgMbhqNyeJLiocoETi8inhWGX6oqiKoBAvCXzVWzbjcakokUD8QpU4Z5TkQXTRJWQQDMyYZ9tJ",
  "key7": "2WCPDHBByaLiWyd67FmMLaSXLutswQSvmzUnMyR35a9oKpLykakTKeiAKqgaxhF1meraJ52zWs8udPERCjU1nBV2",
  "key8": "54DqRD95h6zQjnY9zXcrhxFXvCBAizThK3ByQzaxxgbZ3zZUyFGbK6BhwNC9r4MFxXEZf39BAw5fdVmRhB9mpMex",
  "key9": "4vTZmcHzMBC7uGSJYM4J71eiFGwpXwCTUgQUsjhfKi2boJhcCa71ZbEKQ6nuMWjWovRoX7wDMDzS5jVjBTZY8R9H",
  "key10": "xFjxpV53CQhghWBvd1kwcMbFtNcU2TZX4DE4U86SvPp62Gwqxj4hgGt9hFbyFRnEUUc3uVJ2H6yFTzomVse7GYn",
  "key11": "2ZdS6veNvfSNa4diDasQMEhcHiXPQanU2ysRRfeH6UW1p7Wvq74uqdjZGEeUCKZ3yZEanKZCCm8XBaUPKpo5RiDQ",
  "key12": "2tf7vVLr7qkvYYptvxqmjFWFXvcX4iZ2Nv6BHPnhXKxyDG4adRoav2Ehjh8pFJAyWcgpJp6ZnYTV6QcAT5Xmz9bV",
  "key13": "2C2UAv2PEcxN3iqe3vExcKUTLKqWix269rsgwixrGKUPfbkWy1zfiN1abGoGgWKNJgDYmZmTHW1iRcTUXkw5LR2n",
  "key14": "4ezsDcJEFjdRoEUkRts7VpwKjV7cy769B7jpDyR8PRhXpdtGiD24WiCbC5EgJT5rsY41KxcnGKdcgexdXW9Xzeba",
  "key15": "DA9nKwwJFJEk5SoNvMhnnyhah7giKW4Z6xGaE3VhQU3oHzB2mRTXqhJaAHhA7VKwjFiBfGfyFqheFw746zbGCy4",
  "key16": "5uRZT3uNNcTsNint1kFesSdHjaH9DndG53qooZ5kmnF2ziNEqZU91Tysd9rYAoBaW3BCggjDyLCk48LAvjjDLRkP",
  "key17": "3oDBzhYuDSW528MA64JhtaxhxQp8P6YUSYWeA7dsJAYhtjQYuBD9KR1XU77xD2XvsAp1EbcxWqG7EYPK7cENBy1V",
  "key18": "2vpz6wNjAnCmWG6GzNS6FwTC8XLWxe8AH9JoQydqrkhhsKFKnpzxAmuVcgpZzXqjATnMZJJYFubRnHejwAFs18fk",
  "key19": "5DXwAVBtC2Z2vqKXhVk6nVsCPdG9ahxeacwXJrbJ2g4eEYyhEmg9s7Utb9BX91g643AEjBs8Nkg3podL1mBNfmv1",
  "key20": "2Voq3HwUK1nFeS7qke3TVKkyUrfNobkhpAe7tDXQo56wdMtcKVcQodkYUpLxhYFiUwwUSgxeEkHWv54ypzwWh1PF",
  "key21": "4v9yBZeAWV8UcKwcu2VCNLnCeow3tU31qz6dSk7pCFk4PQwHEMST3fK7gCWdaM5bDQpooZ7LcvPTsjWZup5oDCZx",
  "key22": "5ooSMTdCD99cxSJwXU4D7jVqiKgeNtsqh1hRCxdyXTGnLAjo1oKtpYRcJAAZZSgSYBKkMtb4sribzJZNdDLAD2qA",
  "key23": "DghgoywFWsmTqtfsncYCtRDHDqQKkuQru42RPN8zw9qmKHp4bK7BxTa5n9nMWnNYkNTTmEoWDnkzc3bGheEbKmP",
  "key24": "2CLPuXYxFmQvhijXgrqCBdhLLeh1P1BR8RgJ7HXQGEf9QZJqqQZ2L4acVPeHtLJJY2jDXPjdECAsM67fe8L1Y3FP"
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
