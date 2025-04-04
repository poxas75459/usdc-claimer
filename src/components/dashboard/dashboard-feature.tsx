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
    "62dQLFnSiuRP6BnWjgjjeXZJY3Dt61XhQNFD3a1udy66A7KotNwGZg9aorHkP9Ap9uZHCJkRcpYcGpTmMfXAA9Uq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BsGxKi6S9MvrhMLuLGFDCsMFKbKW2gnYvHdAg8qmN3fJJ2Z1zC4hjjt3vTSZWZ75PkHHeWSJWxJ1gLQQQTrnUUa",
  "key1": "2yZvcaPZSeqCnSnAAGEBQRTwR9hqrfh8GGK3U8QJTazRSiVth1BGKiDnkXeia5Y8iHfRabPiuPNqJ4VM7tKmk2uj",
  "key2": "5BD6YZD6z2qjSrwAqpzTSPq2dHXtaifU5C5TjgPbMkLoohegz7RL4GXWEG28G1L1HjTp1WbbmpqzGsQKtKDQeBvr",
  "key3": "125gSZ3ZwzEB6Y86ba2EZuQ1QAYWuKGTKu6DaPPJsdvaiUyVWhPBp1no3SvLVUmkL6BqyBNdtD758bggiayRMio2",
  "key4": "2RjKcUEEcp3TyfXv1QnaGud9LZATb3jyDbCHFe3UdjeGvTfjBjfPVXYcqZrmkHADJ5UgnWjzr2n8RRDEGopCXSi3",
  "key5": "54ejysD6uqVPGFD9RJgfzQ59UiAkG2LcMToD7UeUeMDsmPrxopq5QGiDTZPdTxEMyM7dtALi9jFc3qkxmEjhRRSS",
  "key6": "dKFCH53tAw2VQVPUxxu9SssZZPfiqripwSVpgdGa76sEE9M1mgwww1zKX4hd8aFwmu2HcpoXsRXFXgNxxYQFC4y",
  "key7": "2dQN49NWuQ83kcAmm3szkLc6TFYXX28ihJmboM9KwyXBJwkpGYzm1uqpVWSumMVgLcoVMAfL7Mz1VYHfgxqDWnEt",
  "key8": "5QQYhgPXyrrXKCqck4iTJ2o2mwMLADe2jCHhznuqANK82vvzVcMNz8ZXmcj2GMFLxreDqz9YteYDeWLHPNtKr2DW",
  "key9": "5ayNovcZsVeeksC4FZebULfVPLwE3Pau7qxNFN2MiWViKovovQYD2ng5HmNvLwfTVX3gsfLZP5zbDKtA1ofgRt1k",
  "key10": "zpVgBzTed6e1NJ9EzLnwhwhdVtZvUoZNmT5zWoTKKWwoTzMUR3nqTNpDw8XUtXk2eA6NBWEkPXo2NemYQirhsDP",
  "key11": "4gw7Vm2B1xwH8KpQUSCSLfoa6GAN2grcdQJXQU2ECVKoou2SSnkbdE9NHzkvkmDGGUAe7C3JrRTdMA8rZzAp9LUX",
  "key12": "4ixnnHwfm6XyBig1mUMquMGYpddioivEypdUUgcHoWCezSuvFxJQ7aPSqSybwrctqgn8DLqEHrsgF1JDRfbJiakM",
  "key13": "eDgizLtzc7NvmKY7sKNUZmx4iHFJhJvYUGrmxaN8y7unMrRqHc9h8Wx88pBj1Bag8fSdQwpBt1w4VrJt3KbjTJ1",
  "key14": "5jsQ5JUVmHQA6R8R2XWko7tfuBuzKbDc9V6MCFnY12q51fXt8YpHXx1V3htn3BwQB3HjQPcsMMFCde8Pn5y2io9s",
  "key15": "PGCcmXsVbSZVwcGzJV45u5EQbzZQnocjEZqmRGvxrphHMnnXpBS18URvdzRKhfyMZTnFmh4XM4iACEQY4y5TCNp",
  "key16": "5aADpXKnYgwWoSjd6y2GH6RHqwQ9RZtnZ9saksSfP2uTucj9VKwLsqufKUrkNp4fWsAyh64mR4u259remXMuFAp5",
  "key17": "2toCfuggRv3PV6YySfvKS2PkbHzL74Acx3P3fcbnf4twB2pQTehYDqKJ9MSe8NopcwXLCrmQcuLUqnxz7fNsPjzx",
  "key18": "2RuKU7nJJ725azQDqsg94gPeYFMrLDEazhJVk4mPTSrr3XA8qzFzapQAqPbbqhgGDUR95ivMcbenvtDDy4BAT9id",
  "key19": "mHh6pZfiHZZoetZLr1KgbJAibJ8HhaVRSCJC12sE2ZR1zKqZGD1khgnYq3BQpP4jx53Jk5wiSwKqw3jVbweGDtj",
  "key20": "3TjhiGZKEeQQRnchYRGojKDd8KN5a13JAzcPooaMHXq83dcVagMFGuaWp1CjorZ5br9rfwKdBgyCfBG663JMER9J",
  "key21": "316Mqe3vk8qDKgocEmm1uA9bamkbH27vP1oHqNxiLWFm8V4SxJLcRKAQpKghrQ8kDyASJpSQx7PE6oW1sh8tFxRG",
  "key22": "3UGcbF35QpuSfr3dP7LECHHR4LbyPFT5xupPtF9hqkPWzVXoA1NZU8P4NzBJ59be77DvSjfeVmwTgGTQ794SbG4c",
  "key23": "5KqA482JJUVorQ66wZnTAmPMkcysuf3QqWGmVws3M35UkKnTds9gZv4cbjWNktHz3AKjWvhqjvEbAmbBHfyDTSUP",
  "key24": "rcWjKpvwuu9ZVciA26miqjE3CK9g5dJaBknPZJMN5CCE8WiFA67JFah5CJvEDBrKdwM1hMSqKR3zbojK3Mx1bwa",
  "key25": "2CKfawT9Br2XLWPqEJfwRbMTbk31dtG3h8PTP1PyrwiWeMvpdkKU9y2ecVh9QvrRmTB6R4JrZ72A7pvQEzwtGfq6",
  "key26": "3xUnC22DBGnfJMZZvPmkz2YgLq8LRhzEH6Qy2bDai7KjStDZAAg3H4EDpisCmTkQeVtrDgywPxvhruR1bocETQUq",
  "key27": "3gtx7fMsnKejHH7zxEQ2RgL5Nb9UU1ttkVNZaKUUHU3Tv4h7YP4ukUeuZApDN7Et4tdxh9URwseFeDnmfGKje333",
  "key28": "5WJibnY9uGf2xe6MNC1aTwMSpYnHrMyVXLbdV169JrxaUR1JGbj1wSUTL4ox3XvYBDeQ4wv3S7KFG17gfLSnX9vW",
  "key29": "5wYBuctahsFAznSU9YoxrzYDPxs9bL3k5rzpUcLBg2sepfxEKEbm4MJ1XLveuoMAoHnxNGtXFJ6gHunVZcUEG8da"
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
