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
    "4N7KxxUPjQHcqDWAtsXhEtLUCPFuztSepc1GsqwstEaeMTnBNk28wDEjV6fUavgQT59y8QVQygD85kAbBma8iHFi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51SaaoZrFaqpwDXZ126yvFrc6uhp4ikBrJyVRXnH4Yw9uYV3274ouqCbUmZgmMEBygY894ZbEnqLFY8yrWsE9BMi",
  "key1": "2XXvMWzx89DRKqaazQ1g2om1k5Y4mfRMty1hKfXvvrXhc56uXVtuXyEMaVVH6LoUyLdVyqS8CH2QTqugaDTW6iHu",
  "key2": "DCmoonwyKdr9apMnTUJyCVmT2m8fREdSaEaBYeMqydjfdehUDUjgy7uWKk1P4p5cYaq44qHegsHjC2xfSHPT31S",
  "key3": "m7MZZD8GSWMDSgPBTV5ELKp5gUiAKtqPjLLzAVZMsazwdKvJurdtLpv1H9UcqabRNE3WsEeQSKfhwDMwjxCvy9f",
  "key4": "xz5YEik1sHCuMkMLsso47z3uPh1Jp3nycJ8AkiLeStiLgEFFDpLjcC5c39e7QAsS7uHU3nivq9W48xqRMjk6NyX",
  "key5": "5UYVmxnPMtsyYGSVFLynY9AjQLkaDxLhUXU41whUqBaLBNrqv12rPG2GcKub5QiUmzjHewFYze8h7S7d9gTHnhMV",
  "key6": "3NDXhHV8AhzTsURepeZhb6mbA8LJSZeB7rayftiwwW7bdCLvAoJSaheRAWtNjexRRYNjtPGYXJgiJKqmVspM4ZJS",
  "key7": "4ZqVHd6DQcwGA8DEfrAZNkwPXUHdhwqz8WPaBcmTh42nodK6xs5cFS5jD26z9WkK3c6nT9fidco9XG2KnwjR7xuR",
  "key8": "4h7N3v5afkRovLfT1CPeSXuQoGnNBVPCMDR9kQc464oRMQGMZbhNefaxTT6MPHN4gKygd1aKMuwuEnGMDS3Bt3tg",
  "key9": "439WZmkNQhSfAoqd3z8AwEZpPLUj9sBDLbdXWisCWCSpCdZwgDMmiTaN3LBDF5wiFQNxyR6TJjCGZZGWveYpRU97",
  "key10": "63AmYeFHDA9Ms5wwmvqaFvjCQcqksjRcYTThCyFQJYn2VGrLkLUF6yPa7PvMsGoAAvxBnkVxuWAVWiVVoezbE14x",
  "key11": "51mkMJtnEPT8MpSgZomJiWw319NXcdWPvVYMJrVsBQf8ZXCdcuhryc21Dwf9EP9RMT7CQEy7CqNXsJQHgvjuVst2",
  "key12": "4vueQdrVMzNrFfDm97yCGhnZhtSKVgqrTUcqLksvascf4VvwkFAyjGaFYraX6KtAMZcGp9PonBj6Ti68SSKKNvuJ",
  "key13": "57yBgiso9EEpHgtt1jbbo9H4UE2P1wkQzfwY24GU54tr8NZNwEGDGGyj3aqddCEjcifXQUtp8eVGEY11jBrCG7dA",
  "key14": "23miLfzqWyvY1Fo4rgE7s87mY9HvaFAB1KdomMCb2MyezkDTWPJ9rTf8EgBpw9jPRoZqP4VcWvcsRE8E15jYHY7F",
  "key15": "2uV3u7tX3pYqU9iSrzSoRsmiU1pZJrVxrk56AkHNmyebFsMcNDyvty9FZ7JFLuF2zPedWjCUkZhwue6d9DVD4Yio",
  "key16": "47iFc6VSGMvXTuy25ZPk8kf8R77BEAZqSn3WFxFFnK84PbQzz4zUijhbaPksUBjucvhzApdSKYEY2JBMA48iwucA",
  "key17": "3XYDKnFBawce73dj2PGPTqCgtXyAJsKPt8jnzFTBQzd5AQhbDdyeKadErM9qRJUoHBpADxCuEUQdgynhMkG3ZFQi",
  "key18": "2VA2Sv3CYKozUUxhyVRsac71x9mQHVZyuNJE1ZBzdfaoK3iQqjSHJawzdni4Kj2Z3YA9uZwugodvMcW4ZBYm7t7D",
  "key19": "4CBo4Z3GQE6mKFWpfJBxDSC1w61VQALy5vq7mLWrqGWEYaUMKdVc6TLk2KXLbxwtjtcgJMbGbPBCvonKjuUBsJK9",
  "key20": "3ugfU1v1SeEEGSi1ZPDXpHYGtuH3iMEfc6XoDUNGrWHFdwLJg87fmGvK1AUr4XQWE2EHZ9hE4vhCx2Ni4Xc1eQZ1",
  "key21": "5GqM1j1rEMxuFjSypf8u5L6aie3AHeTmLTMAkwazZegexbvA7SBsN5PBsBKs1vJhhV5G8CdTJDS7DX3yPgqsn2aE",
  "key22": "64UwWJJvGunFeFPPiniz6j1ZUXx1EmDBAU4kRiUFQM36fVfx2KFcWwvbnZe1sEQ9km9bLpVJQHKMCNGsRreSNTj6",
  "key23": "RAPmw1yczih4mdoHCvudJ5xnHGtuwm6xsYSudrJpN1qNVgZCSfD1GNRDXtZoyx9dj6pT2zG8CfUZnYg9j1hRjL2",
  "key24": "4witT2eJR9aAuxfQ68sq5xq2H27rakX8R8WXfdP2XQTWEZgSkkFjkXP61cypPv8ipNDZnBaH3c7h9FK4u2rMu3iu",
  "key25": "4UT2amS5LQfEFGbfFaPqzFqj7KigWWhuKfdQ9AmeasfBxpNJnJ4vAnFVn6r7Tomgyj3jK4RdqBY22JajoZmJyZ7X",
  "key26": "5uwKGbhmACE8374c4uTxXkBJtVNZK3dd453xUGC6WVK9SEkuBcB59PAoYFKa6sYm7kzrtiiTDAyAi21r16JLf3Sv",
  "key27": "2GRV2m99TxM7YResznv4hEAZQYL9LuTGpN2tTFSaUrAx6piLgP3vFRKVbbNMEvJy99rNz1tWjwYmgC8ZhNiVpHgK"
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
