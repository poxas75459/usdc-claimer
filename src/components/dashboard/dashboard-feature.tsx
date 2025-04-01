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
    "5GYSgWpu6ATrRLn46ViHYRVXG6kHQ4MGyksxTcS38KpYN1g9bGPf5fQmn7oQeDR2PrS6BDNmAJVyoyhPATFjNTHi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z5NWTsMMB5yimwmdcMWC79Hv9hL3GQ1CLvr2nMJWev6PZeGukrsU1TwnGxCwgo8U2oatDwQfD6SdGnfvcvsY2sj",
  "key1": "zLYffoJgXaiqEdyS9RByLMF6xp2oNNNYko7hgw3kaBT152vBk7yarB2tk9wcN2WnzQZSS3JobhGBDUrSwKr5X6W",
  "key2": "2FEATQ6LqoAWLc4jih2GWPAXEydXNGexkqq7HET9D3wmxfx6bHJYvK2Z8YxfvZHn6GTwDzwiHt6capZ2RjXA8LM1",
  "key3": "NHKu3E9sQQmbSZ5rb21ynsDD3uuAbGwFVeEavuxqXsJpJUYuJsW3k4mjUR1undgwvcVjHawNp54KLyTVvV2rzew",
  "key4": "3vsVDVHMbhA5nSsBQQKG3TTVoDzd3gAXg9LkjAVYu5QvEaqKmHppXLJMWbGoTnhE519a5CKDmsQakQW2KeeGTWtQ",
  "key5": "3X7q6N4VxXhaDPtXH8d6FfRF8HbQkuwaVJr8PVeqW28DqySw5qNryX8XsiUBcNDzYL1oxUb4ASrnQbDwyVunZL5Y",
  "key6": "2vTLVGkmH5ANnnBAuQZYZGZPgt5Ec4xpJBW5cPVoyisVWwNH5shEGoKQyBtgnE6aFSGBjnsucBnwNCy1yEhS2Caq",
  "key7": "VFpsWbnAnkYYAfpLMUKz4bsLsFwZRAdnxCdQ1ZT2ALBbHrWfKxHLiwdyhgGGAianxLnA43nnRKqxk4UzJvPjcPL",
  "key8": "44pv6SPytfM2oJFkKftdkKW5eQpF1bxJFxCpLkXvd4jEwmGPfF6zQN5LAMFGCPJqTbLm2f7vQN78dgmYbHhR16W1",
  "key9": "6JptdN5UAhkPQAGLpCGUecheGUrNmA9qxbLRrgu6Mb31mq5sQ9qrXpTtrEE8HhG2DsqsnEAQFiVcREwAdQ9nj2T",
  "key10": "3ftYWLim9pdeiisX1tXHgx2iwDoCb8Qk15TmvCuKAJKzbB4P8g73aWEDUFVKj12ZXpN4mLvP4kVmVQFs2gT6KP28",
  "key11": "nrHQeoyYkv4EnxhD39mVKs5TGLWQton2PXx4Zcv6qT1JX1VaGaJBDC3RCWsynyG8dDCQ1juGXJEKYBgFRKHeBmU",
  "key12": "455i37bu9iexX7A4uNfxRbuWxsYYetUKex9c2oVkcX85N3rwyHcG471HEpZe62HXXmEcUxZG1BMTfKXELAEM6TmE",
  "key13": "35HrtBimru7JJbqVqjckDRYSzEu12xBjvcCPJ9bQAchSyfTNvnrWxjaAcFykDh1oH2yFUerwmGti2UcQABWgVHuJ",
  "key14": "5ubNsKYUaVCLGhsThJxhAEtuxkHePg7uN5aJ9kJf2nazDQRV5mTEya42X5LL5Yuob6M4rbKK3fqSJgjao8X7HkKA",
  "key15": "2zRP7jqqgDh6RuDzQy14o6xdXsGBG7z2ta7NdSzSDUBbKZm3aVZQhEEnvGZKZYGqbCEgBgZqHD4j4P6z8Lj7XB9V",
  "key16": "2Gc1YFcxxYgD6cLAmhHNk9HDXQgmu5yrH2F97t49fu7dZ6sweBmbz73apajH9LSVeWUWpKbqEM4BcT1hDjyhBAuq",
  "key17": "5VQpp9YFgS2F5etVVAxMLshQZ7SK9NHvinzs2xUZiFWwqgdqBpYFpbZhTar9MAntD7WYFQz4kiVXnoyvVxfeiHsf",
  "key18": "31kHUMTufrTjB2QV3AfSBoKjv3jvJwtVM7WHBdXQLHinrg7Exu4xsBEpk4gxGi3PTakCg6Rcivttoy7NiLGzv5na",
  "key19": "4N1x5ao9KqPswhXLHXUjKdRyKAauHkUbMUAC5AKrBtkX4jaVAzT5m2F3g6Hbd2N6MR6TMmq5qpr7h4Qe9U1qupWg",
  "key20": "34CtJiSF11q4NgJXXrapthfDTyVHmWHpeAyG7FVHCekcBKiVfpxsNnnD3GVChXuakU2nFLoYnmQ1qJVpBxSurjv8",
  "key21": "31nyYDQCRzK9XjAkWRvVK3iUpHBAwuoX8cnGEM4YshqwhHgG3akMFzM9VJxqVAauncyVGJkUSwzYZdGyH34mF9No",
  "key22": "66jkexnDcQaCJX9Jk7TfswnzvrETeCaHUhMAHCkafrWvDEv5iabVtggaYQcWfxYBnwrfeJgk1gQsKH4vf3WmNQVM",
  "key23": "3m6SwRp4uJuT83umhZFyk3HbucMMLYunvjpV49aKKGoRwEyE1johPkkcXwifjzwDLhLCwjWczgc4h4xCfgzUG6Gh",
  "key24": "5XfZ6wr9qciGj3xbBYf8XcHwazvGJJ5EkRkEMEedRx43ps55M7Wm9tD859bztSwBB3CDcDtFo5sVbC1NYRcwsUWf",
  "key25": "5kSBrdgo989T8BYv8QzK5qeHon2LGuqA221eefqRL89Ue6tFzLoQCXnXd9Bpb4drhei7voRxvLNp9QKXuvRF1qos",
  "key26": "3B3q3K1ztumGdQkhKJro4A1CGDqhEx4mM3rnWjeuAu8Dw4V8oU3mSf5c7Kk84ZsGCnjysTMeTVWs8m8Rbvp9hh1i",
  "key27": "2RRnPX5Vi7KQREz4KiERhwjk7v5DzhhUr65z3YYxxJjMBtsjjuydaneM2G2W3v8J7VquBQRURPMecEoc4hmJxjDm",
  "key28": "4Gp7yDB5v1Xa6JnFguwPCzNUHbva6gB4RVJA44ryq1ccWLUb1nzEYr1S5PUuDu6tFZKHhkD5rJAXPxn3wPndnWPR",
  "key29": "4PwF8MvMo86sMDDBpS6L43tTWhRt1tkh7chTB9kR6HA4ZytNRtdvdA1BewDrHW4E7PBhBon2sGAxxSEWu18n6y5Y",
  "key30": "487y3XBnC7V2a3ZtMYxeZAgfKPbdR28z1Z5CrYPJkXu6BrkegRVY4nbVY4FS7b9MqxYp5wcEfZXhT19WWm2UUc8a",
  "key31": "47RCZvmL8p6hUnaV9ASrW8FwhzSE4rPsNXP9qfvHsyubF8jDpwbhWPqPmre2uCNUDPePb14eF1RoT1Nd5FBofpBe"
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
