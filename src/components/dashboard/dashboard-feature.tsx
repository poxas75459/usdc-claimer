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
    "JUySkUAofiGpvBrQew7q23Lirhp5g8D2V6BecnTRyT7yHy7Bn7ktUV9qURJ8m6jDNMcju7TuYBRo3TZBeAXxJku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dbhueSe1nQt9X7xAgXBPyLykZXEaMxkRzEHMjXb3Rv8uyq2pFknXKiwAhjXcTvpWiZWgHzgRbTmUyu34tTXn9wE",
  "key1": "59eKLrRge5JGCDuckDt9VCvsDqur5dGqrXpo2hZ4UgJqindfYF38XRpat1bEDaqeQXPAz6pVaC2YVghQxyrBa5hd",
  "key2": "2GYsoCGK16orHSFsfefaXT7Dh1feGvTSUSEmsnHoF25iNBgxWML4QcDa4v3VYeWr7fzw2HxkAwsog5dNq9k92HnH",
  "key3": "WQo1ZNyt72pJmMhcX46JsZUSuVK1ou6uX8GuTRmR47CMB3ULHJX3L6U2zbS8PivJXCP84N9dbBaNx6LXH4aDFSt",
  "key4": "2gMchv4ycpyRFQaT6izCAxNMnDcFHBNTxkPpMDK7dvz1zU9AAQjdEcHar65ezhuAkZ29Css9vuKNGQKZhJHdH4YV",
  "key5": "2k3kR9XhqprkCwiWfrZK8tXrAztvuLFre3CT7apg9dxP3pc5FANcCv6TA3dqHfESB4ASf35kgEwC5JXfdtAN2FX9",
  "key6": "59Lttu6THWAvo4obexmWGyPnZcTLJuojhuGWMtuXahUHAVYB4Y1KvVR2RGzqYi33jHzEkVpvDdfRgyisU9BhMZpr",
  "key7": "3A5zokpKHSnoR4zKxLmESokLMmgKTE6aE62VaL6DjW788H1q1CkhcfHMufz5Tjz1UkVaHJtQekmW43giPWMyRHcJ",
  "key8": "42DHuRz2osMS4ryA5SSxX7a3YVDWiQwPMiA5GSCycdMx9nSzwGL3oyxhE8tEcrfCyHshHw3HKbhpvzPU25uAB1xB",
  "key9": "2jG6FBqt1ho6DgfgT3DdFFhz7Jpv2B6mQMyjguKzkoHQ9kqCz6w2pnPQjxjyJag7QvCvz3NvokDvL7vLjiEjUgMu",
  "key10": "5eCS8Txd3qYzW3b4NJ1wshcVkAD4r1w9YX4KpyHtab4YFkuz2A9gJncRhsV8DGtDDTnyU24aEDsgfDUgnSZSPUnt",
  "key11": "476JPM6gHuuqcfuaSCuwrePuX2NFZSLn36juvaK67RzEmCXJFiCbLdMUTnCDPTsbEWVdk6MMCQwP6AMNPEwrxLdz",
  "key12": "5ot8b3XfhrqC9jA6YiPyyMGzJyrJ63cfCZ98ADUSC5BFGAMNe2oEC7m8TYA1q5zY8P2GeQsbRvX1p1peBpBvdB7R",
  "key13": "3Fpucx2NehP7iMXPcoQ66se7LbqS2XZTPyK7SUMhKeRpTMQm6GGxCAqwxjC3briMGZxgenVEe89STxQXWQWuLDVC",
  "key14": "ACoZhdTJfFmMhp3gGwFiMuTpJmbjMovaNPEbh2ke4zyVAy1q3ds39Q56M524omAaGYg9nv2ZfPDPNTr6ADFuDXh",
  "key15": "3vnFxfsZVecxEB8JXHxXjjqybiD4UgvzhWxgy1ycHSFLBsoehRmzBqRDEjKUGTjJDhvrk22M7FnCttpgGzSFaBZi",
  "key16": "3WbQaECdBmU3DY6QxjWLMbAbsBrsS3msrNww7ceN6gGunG3uGFcN5wCf3KnLzrvKRonKiGAQG2RZ1biq5CzczR1A",
  "key17": "5Yvm5i7q2Vkg1Pi8BpKndgiTGxhxpxBV3khvGrJRupajFJ9BHFdjJTnPjePgL8A64WWWGES6LqDWoEYV33B71frE",
  "key18": "4W9YNj1TENuVFSQ1fPNH1AXTvuUJY2sk3cdiQFXB3wP1a8B3BQ8McV8mPbjdp25XVxQuKkEiBhxiBjPakjhi2N6D",
  "key19": "CMmXdikgYcy5zNkEMBQL2EJU8TaPysSwnRBHyVHnMF3K6uGE8kK4vggiQ3YkmZPb4FWkr5yytDxb2GQKsyj6RjD",
  "key20": "3WCLmoaa4Lz9E2DR2NNnPjZmL48disqgCecqpQGyJBjRjaVWuzYbV8pe1jtoPoYLK1LQB3rtTE1oSADVCN6KH5sE",
  "key21": "4bZFxk5wWP9A9Y9Z1Gn7WTJAab6BGWYivsfUDXPrQfSeYvJcYiZiXYnVX7osCHrRBBj84q6NdcTtxrLfXACXC1S4",
  "key22": "2oUfeWoxTZmsqFYurrWu1x1GVfPG1Wv9GgotLATjGtT5ZRATM94WWdroDEyNCKFibVatr5NmHFtRQrbramFzBafu",
  "key23": "3SaagEgrnDePNeosnJxNq8nPxN45My8u6e1D9JvAjrH1Sa46ThMtLXCWJ714Kjf2XtNAuvnJa3YDYWDM7MZN4noP",
  "key24": "kgm38s4kcckwtEeTvPBocU9Pyf68q1iNuMSQHuLtSPXyWx34jHmCtZswPP4zT9Ck8gm87n9hA27329YXysCZU2z",
  "key25": "3sHpymapzqmg6tUqAqER53BADx5FRtvMakoimPfSsY6VMe2wvd63NsBz6e3obm5A6jrX4etkLRAtDZZcXek5nSnB",
  "key26": "GSNo1qj2mPVF1PzgunEjTmryGPfMQ8j4oDVX66xYpurR4iUad1Sf9q7CDM5JaNLc4Anoy6r6yf93Xxc5U6bmLpJ",
  "key27": "3QpkAS33N8iazqaXEYP2GDBKYJ3aoEBNkb9Btot6PPubjMSUd7UHomBHVdtzmBuSuTYi5ciCvkMajhnmiFVpQVFz",
  "key28": "3fsqd2R6ZyQSG283v9cqn7UrQYV7MS5Se3K9hXnTDzaA31moNnNup2Nk6wdoYN9dHZmFETnDkx5V2zP8gtcv5k1M",
  "key29": "4BKcx6TFRmUiaZW7jVkE4ykfR3zXPaxCZvNtnZa7dyKG4YDUXcTCUWKxT1XmEeqxRk6tQY1iKXzD4oESPvFk6cW4",
  "key30": "n2NfzUwHjtrUc8YAGPR4qgmMYkyeu7Zc292Moh1BKoXjzBiCKRwFC38WP127JCL7FzXXoVyh5TuPXq3NymEgyMi",
  "key31": "2Z6gK3kpxLgHUejBfWfRZX1TFydLGtFHqQ3NWzEtsbdiQ5RT5PWNHssBggLaQFbYJeSS4G8KwjnF6Mqs3kUYQv4Q",
  "key32": "2kmX2RfSw7DHJuVLSz5t7CheH1sUkud1xLexwJGLv41JAT5QZ1acMxX7FUE7TrRpQbbg8t3RhR89Z5zmz22FStPZ"
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
