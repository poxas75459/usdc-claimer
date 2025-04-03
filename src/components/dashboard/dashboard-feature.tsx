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
    "21qG6yCQMCFRK4LHoCNwZD2jLHZFpzW4m6KZKfqBYgydcFZaWJJnagUW2L5cDUyU8APWuoGBWQnaWyHgEdvEqPfU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zSU1pZrAfWtx4c2fa18KHzWACoFt2ruwv2kdsgguqx9rMEitFh7zxNGRaahVFEKEZJ4nhWSzWRg7JWgyptxm7j7",
  "key1": "5Xx2Mw44woqgAEacRT6cMG7fWLYsFLKX3h9Pk5GnbJZF9LqYaDxDVzYAiqZswA1bbqGDzKVDJejKLa5Mgw66Li5S",
  "key2": "5U2Sqqg7FqVLBKvCNhgqpZQvFDraeopqSukFUuXLBAKhZMFYvvtrZG3sKAFnuoBSkzkoF6W7uP8wah9YyiXJmTQL",
  "key3": "3oY2NkPKW3yDmWnSC1EVYNUZZpyTnKkFH77KqBYuyT13HfMnrGeYEs55uvV1UAH24nAS5fKUKFeBqEhhLE9267Xw",
  "key4": "6J7mCGBZDGGwJ7cUC2HTtM3aMbGuahW2FKeSTzKwCRtNTgtzXpQemAsxmtFGHmaEzTnthbgdtHi1FpgKtG5PzTG",
  "key5": "SFWr3gPZvZtbEsrKU6421i6FiAJzyG3MwRZaqNsZpZG2jhr2kE8ZLgnyTYxyso82XwzTd94F1uEbKJBYPjxDv6V",
  "key6": "QZbFhV9XANKAE3pPWAaywSHxyU5EpKKGUnuXHnAbbJF4FQscfGhWDc47LvZc4bPZaJpzPva6EYMKWVhuSQC8T7V",
  "key7": "4seyKAgkgpTteh8jcfkcJyfxaQf75kWm3GGSb4vkY9ETFU86ksjksYU7k9npnowJimaNo4Pd5zV8Du7PGPU7gtds",
  "key8": "4AFHWN735kJuGQingENHBY92MmeiEew4EfwKjwP6aJewtoHynFd2qBSujAnVBJFRsqVYTC8rnNAFEjuTbvGBWsVF",
  "key9": "5n9JeAeDE8pLKYCQLinvwexg1vEUFtpxCWHzNiJQrhGggfP8822La7To8RNrBTQJtVWhm2gTf1V9t5WFv5YTKcBi",
  "key10": "5wiqM5tMvwVC6Whz1X6YyR1SoMGF3GkU9mW2simE3P3J71iZAqRfjXWZcLZ6dVF2DnZNWm8aNrssjqDop2TMZSWz",
  "key11": "4x7x3mzFrzXZ6Rj4iL7ANdH9RaHktJ9zUk7UZf2r3j4YeQ3RrQVDLMoF2qiwtQPwZwLqr9ga9EcqbiRkodqpp891",
  "key12": "3ZrTSwDQJHoouHhPLEjmXhBxoqqFC6ZmK8sDKUgZJvuo198ygcoi9pWJ8cbwbTi6Zww7fC9DppnLkjHx7TsPgqKK",
  "key13": "2Qm8ee7UddNwzhQ2zx4Y5DH275CT67TowXnBaWvvtsirCDUPeDQZTq41ScrJoHRfAuYef33BPuUcuDJoJemtKoB3",
  "key14": "929YW6rxPRyArXuz1zAAa4Pi2MUmkZH8vc9nnHQE3g5LJFiEXeYnNQBLhVoUPrYWuwcK2eiFRiS1xW5NyToFrXt",
  "key15": "2uk75VgdNQ3tn3TEjKBFaaypz18SsLFZ46HM4WunnjPaCVia8m3fumtf26bnsTwHqCKf9xgLLVTM3kpmGVF3kSiA",
  "key16": "5xzDSnoVMyD15DCfQx4LNQdphcpFrAjE9WcARdQzNfSSsBPNy52Kfacz5rt2ASJeZFfEQf2vGtxb8ub8nq7qkZw8",
  "key17": "2atrL5NdFNkrvQUa88jjauLNhG9ki2M1pM9LmQjLBBpsUj1J8cWa8iCKVpKxGqAJWYMgyfHrqnVZYyCr65JPomQz",
  "key18": "3v8LUzfWWYJDHvapDgnDne33VpY13RmoAiw171q3DfFwGT9UiHRWNDe6HK2a5bTS2nMfmzxp2YU1tqFjTz5ugteN",
  "key19": "28RcJGjQ4J9Zjm8naX2NiayUDtRJ3PZgMdMSREUfYYGS3rDBa76KzQEVpi6o7SJLBF3MMzY22VdFeF67PeiCDgjL",
  "key20": "hnbVCooWVJC2vUPEcz2vB3EPHERtszrQWQRKAUZdb43RMaqsU779bj4WK86hJjaz3EHEmR23C51y4xzLUgQQu7M",
  "key21": "4tG2FjVV4irg9WyoaQqd57EfVrJfMQw2pZ29C8Z2wPb2DPyjTeH5tmUSKVEX7JNhqLBCWfs4RR5RMPfGhGRMB9Ho",
  "key22": "2VskBc2vDHRKabPTV2iYeT1ikNg24fieF6DfCfJauMKzLNQkmDWZ7CWmcRZzq3goZXKyubNAHyLXVZr3mVcDTBDg",
  "key23": "DebAzNT3CoXVusB4NpHb5AyvQgNcbiZGLbXyZP9rpKnWu7KhNDCkoVif6rAhUZxgZrpZ3hqXFyyc4oHZa7SC34K",
  "key24": "25c5qjm51dAeEJyUi8Xskp6bkY4USXYFWg5dywa5wVTe9erAZ6xEyAhs34mUaKA5MnG3Sb6EzH7ZJjEzUvCYfzkC"
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
