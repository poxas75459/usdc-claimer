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
    "3MHi1a9XjW8sWQTxqbqiKmuGBPao8kwK7ZEqNq7HHm1BezLFwM2kBkhsxHyfRRaMSG8p5bFYb2aYD8U4d3SUnU31"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64WSnx7KCCTMRPcB7NUkyyq3ojtc2saNeXajYApRCdkifZegXmoD2CPNgfJQAXhQ1EzrQDgMokVfnowWeQhxUjqv",
  "key1": "5KYxp546syZ9vHKfFFyQUsjqsY5LWYrVNGpWMnLvGhUjgmdEDhkCQ3VsQiSaPpLrGxCDnA83aNBghfDsa9Z1VVnq",
  "key2": "5xR6WhpV3RQ4AYnBbqPNgJJmJS4UcbqfT2DnnohS4kVAXwaCaFeonz5w7nnvzg1Fg8m8zWui8cG8Txso8zfDTagc",
  "key3": "yFaJs1pUKvGdF2i5BfzDv8i3ZsTXyCyEYy9nHeE7v4w4w4fU6WvPZdtnCYph4oowZ3x18LpoZkfzF3xf4J7cMmp",
  "key4": "2PszKRW9w2Z5mXmnFEEiqnbf815RopAaoi2mGKt5NAXAQApQonsEdYGVYT15YkHo8Z38Z2TuYo6uxzoBeAy21Jir",
  "key5": "4ApBVFaATJGPaKKYo6JDzk3tgofCQZBRD3WpqTeePoGLvSputZdatpkdw1DfTxwaMpUGMzewydWhTrZYMeWMkPKo",
  "key6": "5viMVAii14ks1VcnhreZ8YranXD1XkPfd7ZJ1C37oDBxkHMh5D9U3VvEPcv9LUMNCNtRm4rbRWuSim3HEEokTqTU",
  "key7": "36tkqKMi21ENbJs8FyUQSGNvByCvHUAyFXjCkvzfvBjdJ2rbLiYWAKJjiPWjCAsmuQG37aQSao3fmhrGnUTCtufg",
  "key8": "2eimgAQWwMsA9MUMHZoVehEpxH5H9CwUQqxv1xw1QVkWpAxkp8na7x4n7q5yxgK5e6c8UYaHn3XZHbrY5Vzv2Nzq",
  "key9": "4RPWFPMxy9GcVXPKiuCcx7EAP6SKsCU4w2AvWgfXX5sbQjHusADoENirKnUshmpzjKSfBu178uN9wsT3uu1uVLaq",
  "key10": "vWrk2TZzwwvkP1auxSceHcZWYtz1PT3rY6iyQttqWbAbYUBCMajVk97KwzNoJQ6bBCXttK1XDVJnnVtUTFS2gog",
  "key11": "5V29FU1dnsJZc5sNDN9FiM2rAsQ94enmKBqZ6bMGDJzZZ3eHr6F7LWjioRtbFfhTjoTrEkofQJSTL2o8YXHAbdMS",
  "key12": "24ifjkSgRUxGzQgzKFbw7eeYbBJoDmma4Jb78z2ry62XmgdZZJBUfa98mjvcQmf2ouXrrRzanBEBkorhF3vVeSZ7",
  "key13": "5s9TaopMVbE6uxMBauw5M4uzFjBegeikvTiyETvXQmEGor2bJExXDYWjxJGoUqTGYnGgdc9LeY7hgJS7tdkCBSSK",
  "key14": "2qjhuNLLYiJaVTYBmgwUUjCGdYd373qGcNhdL7Z3oaoEhZcgX2MWFFjpPMxXUHeA7xtw2atFtjyPwFRMQtjSAAwF",
  "key15": "3k9EuU9ujyR53hxR4uTucRaxkK7fim5gueyFwKw5JnpTJHYoG4qgVLomKYAnaAdZw4Y1cBfivxvefDq5bpueoKn8",
  "key16": "4WJAqQsEHEzz3FBaYyPTsPFrq3MMAPpNmSg9kCefvAr78sbwVc6jh6uyjikWs9o2pL1fYYYHfHSh6EsPtN4KG9CR",
  "key17": "5Yb3FLMPmNMMpztitS1WUenhzNyP9xL4ir27v1Bw7msF5khw7DCtTKkDjr6LnnvykVBLEknCFKwoNBS1pzxtoCkc",
  "key18": "5KbAjqGqqLHEAfozGw241vu61U9MtHNJKAY6Wd6FNtRTBuQjAQFEaeHChqCoumM6tgU32WvoxDRe3eHkBebqiLf",
  "key19": "64MbLjJmFnt4d1pWsgfz2vuVsqzTJirzMsVcPgh9A3nfA3Uasd98LaFGr4KioHF7H8fvjnDHnvpsUJsWLLBLFQkP",
  "key20": "63f1yi7RXWFfZJunDAaxkBtjFHgmcW7wRUoawwxKPRfhMqiauRfehKvJoVwyPx8NtnGtBaNEujmvWsRvj66Q2WsR",
  "key21": "51FaDtAuPKF1HWyVPEoLKXNQ4Dbj3NWx6nkG2Ty8aw1KVMW2VYqSbNbLAT6wJ8X1zfVoLT4F5AnpNpDAoR6Xsj15",
  "key22": "NbRrA7Z36SHXHcCbGkmB6WviegmnMbYGCeHMr18vMXGEQuGLa8WNAvKKatWwCTSxg9AQddtNabx9zzd4mLpou5N",
  "key23": "23ri6JpqRbyMvvfmxMd4Dk2ye9XiXCH2BhiqnDSEqwPuffC6iUkkp74Y9SENseyk8yk9j2iYP8JxfRc9VGC3jZ6g",
  "key24": "p6gYvDnfkWaENtKJTqCmgg31fUQbHNEtcifGTtjKEVNQqsUoWZd6RChpfXUbT22UNkzUfS4aq3goR9rSZCtjYs6",
  "key25": "4TjGzY8325t4x21uiZPHMvsr7bfrnrKJsS1AP43m8qGoAi5QXP9Ba9WkMU5e973ixBL23KuWZwEuZVKo46iAVHn"
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
