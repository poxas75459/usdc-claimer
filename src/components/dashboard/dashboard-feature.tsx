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
    "3bWfQQcNeJytiw5erQ3DC7m2ZekUkivXTVqB2Fk66R6ocnpULcgnbRT3ZrsU69tLeidVw8aGoq2iDzBNTDs944h1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YV7RArymbexEcPj47LVwdQm5NX28paaQyYErcGjaLfv71QGpdwN8eABe3j6ECda8yhS7jhYzakTih3da5CWvym7",
  "key1": "3XUPuwo5BZaaZYU3dp2wppW9BbEpUnNXjkLPR6bW9XFu6iGSxYTPtNMLDD8RCb8vD1o3cCUp28RpRvxvrS2Jqn6u",
  "key2": "3DH88KxSJ41Ao5yi48L4WqMUd73Sak8sw15WU59AASLdWyvR3ca21MFAUdJ9MJr4fWdyp8MXsp1ydTQZ7NWKbwAG",
  "key3": "3niwtod5SzCW25ZfYqnLXLCzZe5nHMYLqfjUjLS4cmjbCzULUUXMzq4QkPLrH1FpLgRAnbYrhd8cMS4kdfGvFNLi",
  "key4": "3a1RNvsHkgPeqA35orzXWNCNqFhi7KBvvn25Mus8TksbzNGrcMv7XU9XxyraHoVZoys9u7JyUomok1UQR1V88qPA",
  "key5": "2bdeDdTgFE8Yq1xZNZfPNLppP3zcR8pMShWzPpXjMX6hUzi2XpmBAR5LGnQuv6MLnbqouV4PnzjDgcgDR6JT4HMZ",
  "key6": "zZboPRAvHQJTSpPYf3F64EzzL383mspkaBg2R9Jw2HPfnvm6QvWsAgMe7qNfdVM7bupgehkCDaPjvJAmYDCJByk",
  "key7": "3BKEAGZPqsAQuEy6pTTJPnwqg4YZU2DezebMjMfqGQ9tA6CiVd2HC2LULx57942u78XnECKdj4S2rBnm2ebDYCvm",
  "key8": "9VNyWB7gGA1bCFjCYtFsvJWjaajorPZkVudVEnkCH1DN3aLxx1EiVMUzXN38MWCmmqUX8dY45VwgKVasdKPW8zU",
  "key9": "5sR6mNu6UYCLA9eX8ioAhTSW2EAuAY9JqZJC7mih1Vz1P6cohTzFzrqBjgaxbdmA5v9YAkdC5dTZ5M76Dr6pEBP3",
  "key10": "5uSXhnzdT4VfTnD8DnqPMQzQvJU3MJN2C6uajsRicRbuSXzz335cGiHfJc8xPppZShrsAPPAxxnfgiQNLrjnh8LT",
  "key11": "5NsAxyX7596K58KRxUyEvnBRyFQP2ZV5LYzbtTNQfbh7WU45rV5fc3DiSzdDt6ut2VsgK5HgYAN4KBVcVfe49iJC",
  "key12": "4SYvC7DiQoQthEG7kcHAgm8wnf6pkdqsJYUzBKrW2tP6x1CKJ3AqPGDzBvHpV3pxQuLbj6KWbPQSJFxsXa1NxjH9",
  "key13": "5JznyXuxC885FThNVLz8jUCsXRrTVrbgS5PJ4uWh3ND1uMveNZJqPrsqSQfJt54fBQ2XfGRrV6EPUgDh2d2NneB7",
  "key14": "5xjf2oGUSHGF7oQwNwaiCkWHEu9fXH5dVX5UXPjScnoezFs3NGnYofvwLCMmnJC7GDywpLgnu4MmBRBuWrpjV7K6",
  "key15": "5task4vx6C8wAZkwKZjKuy4PjZy3gk8Tg8s2co2q521fc4mHEu6ihu4VqQssV9qSUdooFLTZzBDaGfuvqXE5p4qs",
  "key16": "3dcaAnVsbZeBDp6H8NbCfp8fDJdDLMttEweCMTrSRo4tv4AaVEpRusg4bEGc3g6fAb1AKumqZAgMkpFgRJdpFZis",
  "key17": "3cWFSsZtJf42CjixXdNL4oPETQBEe9vV8ezYVyadpxCV9Tqm6G7VpEqRenPKtoYn2aMaLDWBVwmMeS4sdvAjPHpu",
  "key18": "2LY5bTL3NtdorgTj5EymjTibDMjPap5tPTH4XAWAeqCGTgTghSyntN9pqndFLiDkA4neAWfgyaZafK7EQgVgLBWs",
  "key19": "454p9cf2mPwjr2pPc4ii5TZQBY1DUY8ohRonWXvczmoTewYo8ZKRpqTb3LuNKUz7MpdcMGKihHeFVeWAgq5STmoB",
  "key20": "NWU7Y9YQ2W3FXXeafezb2tiHro7NWKxKneUKZAaSM32wHMLXJ2ade1PJ43tMfWa9QirqY3SbgrvXV3qyMY2MWZi",
  "key21": "4zyzcg6KU5AX8ePvbHvafupC163gUADrbJ2czW6pdTtGt7QiqutRU1zvzAWvkgixreVfm7FCVr31XiT6Q4pXRH5a",
  "key22": "6NBbVKNxGuihpUmMjCmrA7Co3bqtBz3oixSXphRjcW7KMWLnVn2qJpYiiYkEFn8v5FFWdYQmWAECxbv5J4vUmFv",
  "key23": "2DFoAavt5yFaYbtRAC4XET9763XnDN2ogzTBdJfoMmLSzXJY4Y7fzHsXNZpT5RQZoxDgWoxFUCj9dYAVc6KK2bPW",
  "key24": "caLVba1DpB5WQ2sZ9eVZuqXoHjzeezHYXG2TJVWvqViFMzuZjafK64mnSBrH63WccK1XfxDEzbuNMetcqrkFs5X",
  "key25": "csby2TwiHw3RWbsm3cToM7qdY6eDBiSmrfoUpJMbrGD2tXnVCTvNThfhoP3ZtbAgY7xb1P8josEMgkbaNb8Hce1",
  "key26": "3g7YosLz7ibARbUKAzBwP8ZkbL2LuocEcX8HDfpNukBhGkysr2Q7gSCGKaeYMJhh5ERfQ3Fmkq5dvY1nwgePLTy1",
  "key27": "2gQRMNKTbeRjncTACV3UMzreb1ULg7CjfLv1GLYn4uNz5QhdCWj9Lwt7ad3mKpnewaBCFgykN3mMaFT5Css6Jc5w",
  "key28": "53qCArU92zy2AswX3pXHrDRsd8jAVjeNu5CS15NWuArHqZcnouLrbH7V8AQH7BbJg9LmXoTmh72hYqSU973dG4a4"
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
