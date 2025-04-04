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
    "3ucRagswVc2YxCUbdUv5ZPVVkZ3T92tT4P2mCAoJFhK2ZLMHf9cjTzXFfwJKa7vRqRaYW1vVKmDwXHgsHT5LFRs8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QSJs4UtSdogcn83r9YPpUjbHTxwqtgBCymBxDrnkmNHV3QYdCj89EvAx4pHtiSMHsPxCVQBJ5uYEKoKX8dajBoy",
  "key1": "DY6zgm79WqManTw9L5yJHPDhXMYF4Wcvppc1pQYAVd4TzhSPCQK4UYNmsKSFguAQeuueXztv3fqQaxbChAepMy2",
  "key2": "375XXMt6kVVkqvSjbcU2QdtR5PK67YSHTRoc4ejeAjwheLc9tsL9i8fb5XZHmVuFkpzL9NUrRFFbDbaPZSs6vDU3",
  "key3": "47C3sqsRybR1h7hmbz2MSW6aH6y4FKVDL9Z3AuzCir4xehE5LxerZpqvt4LhEQeTSVgy9cCwuutBMZJm9CrkDJyS",
  "key4": "5iDXtDZbVibxSBca9pDaahNgW4oM1GvHza5zigb18w54pzc2Ex9zBtgq2zzcGKwX1LXpgXN3unthyFV82NVuUy5p",
  "key5": "4W7G5BTKsCC3vANQHsbCM2mDKcAgJPoFntsEBYw6QTQkK1FriQuCt4KLed54GAzSdpHnDUge5muPLrSY5bhduqPE",
  "key6": "4niNVw7pFcG6HyNUTyENENUyExGyxFZck5pHybp9Efx85vGtYx3acs6wNzZ89Z2qUQcxBjHFGCTp5wK3ABmv4zYK",
  "key7": "4jj97VzXgyb3HSycB1zgLC6YZgDwXHAH3vY9sCWWK47xvLhDiKDSxs3FUsgJNVtfutFHscnTX2Ss7RDAc5ZGLazc",
  "key8": "2Gtmqbx16bSwDh6NvyNvbRTaS3aRg7fkUPLxevEmPRdDj8nmPHYqzNc4Ets4XggQHxitP73Goc882CTAcPDCgc7X",
  "key9": "5T21xZF3gCkxwHv34HSNocTX4UBh816Bc38xHo6HX9bobMWPEE3zLJR6RaCQECot1m3nUiWi9hshPVDFUaikmmUh",
  "key10": "4mPxt31UQnsExvF2jo1sekXCeig4vMciN8zzaXVsuvXSRbbU5gdo5bZN8BsxmUnJxU33x91rTqY8dCBPStKf2unR",
  "key11": "oGRyQSpkMY9U79H2MAjWw3PbA8JvL7oRyntxDqr43nXx4pAdqACrm4dNALgBqrzEYBo4TLkeNdrqCgRw9HczKbt",
  "key12": "5f684u2hXi7m5uV41osmKWdd7yCvUUftYUSc7isfDi7AEHV7HTkcBvGjPDLLih385xWdHBEmZnP53s99CdVeEUf2",
  "key13": "ecpcWtDr5qTkfxN13vm5MUZ26Pv7EqgDSdUkJdBujWQcEercZbiNsgnNpEGwDej1S9dK7Qfu3fpqeMAuENfswfG",
  "key14": "SJRgT1QgJ5HQrZ3BpBBANUYfUsqrotZKZwPjAiWXyK5DZSXFMVNiZy9KRRRPDfkNgy6XbtemYfDUUmiLUhLeMZb",
  "key15": "5gJNFog17WNibwfnKYuf6Ss1V4U7ZHftBkbjJaaMq1zPMGcXd5iJieYgR8ARED7MddHP9m7hQXxSNm1LgmMakj3E",
  "key16": "2626EZAvpdKx2cx4UVFRPvobNaPzWWTPGTtSxE3uQL2KQ9xyEdgLZ3GSB3PKB5rorKcBehCNyYBgzF1MRXmt2TtT",
  "key17": "5TJAVB9wASJ2hi8TFtAQ5rBKgjF91L2gWvHkFL3NsDk16fGjaD64j5vSuH3jNHYtqbFwhQFPCTT6KH3hds9sBq4U",
  "key18": "5yZrZv2LePrHsZwQh1p9Qpr8yBVZrvjwoUyPGeC6ze7PdSKrmdTepU5nx4BfgCB52D4s8HCLnDX9C5CLDxkg1ibE",
  "key19": "4NMzBMKF3kwHiG8mdhYUrdgW2z61haY7XR5egRiHQMe1GCyfMM5MsL4dmtoh8Q9KEvwVSpeDJVFCry8dDZpp9BTy",
  "key20": "HUuq2Ux4vNVqLQJRvzL8Fxrk9URuLbzcUzDfbnLtY5fpA2gr3vmDkZWrMqHn32DTPxapr6YMcFnATqCwLWcXXNG",
  "key21": "5uBLekYUu5EmPAVT1zy1qfeny8zaCPmAHW7RFSLxxqVbvTgNRP99L5vpbz4WzDzLV7DpgjhNCYAu7Db35x9LSoCn",
  "key22": "4tUgYHBd1Ad4kcpHqqk5NR3fthncev24EVCsmP6pjfbrDZ4fVkXDVXxoKri8qL4YfLY1njYu4NziuT5SFpNaznNz",
  "key23": "3Z4a1LRJy8nDFpSaB7vWL3mmYr69d89RanfAygfJMGDQBcrtx34zt1wkcUuSWgGjisQn1cdvmTWgP9GjHCxkwiFg",
  "key24": "4Y9KMzWvdcaEAwPCGyYVuW67nyp76RNZ86gQjX7xdN5a13yxiMkcSQVSzDYtpwmS9RxczSBevfzujN26Y1euTJqW",
  "key25": "B2LwjfRX2VRBQuqyzda5Sm1ZEum64QNzPoKbdyxN9kET54FEEPyrg4JKDoJwBwfVTYpqLew6iBAtSgnAdP9Zs7G",
  "key26": "ByJTWM2eudSgfpu6fYDPHCs1hjeJJArNGJLiM3y3ZQNNQqaU3nxxiMu6UWBTa8Z6xcJWcP3jEKyn6HUihiNP8pU",
  "key27": "CSdJebCPL9rmsZFfZgJLADXmzMopMauwZanV7PZK9DBL1icW3uW4MHNb1hpi4GUNyNi8jDEoXCJFJMikN72mKxX",
  "key28": "5d71xtGdbLk8Ez3sJ8fETx3GDzcSd6iVqNY2vywqhNmF8XsXE3soVttroaw8fxDmmZsxkgbvAtkZJ7mBG3e1YcUj",
  "key29": "FZ7MeKZZLDC9aY58rkNwYzNFJtdH7MN8TmN2au2jMnpRiVgrKQA7wA7kBTu8aVRP4UARbtSoYbr2CY85p3Tpac3"
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
