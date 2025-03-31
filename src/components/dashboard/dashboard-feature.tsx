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
    "3ptZG6GKiwocjLgHFnqwomE5PVmE9eCbRqz8QgrCWF4rakm2fVFfhZyEspPKjMy15eHF9Q7mdqhnLgDcDzpGKiGN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W6bEjFxoK8y6KkPpZvb7mGBSgiTMaq1tXU3ynqcLNZiipWcLCKjEtW3pT53WPtp83iEQxPXkUtjnRoW6L3xPX7s",
  "key1": "29gUkGUWyXapDYLpE1WRj3npePBdj3yCwc1vcBY27EAbMvAijaK2wwYJee6AdWom1qEZDRk7zdudc2Ks9svn8QJM",
  "key2": "3KSt52dcH3uaxpZDrjBYAqcP6z4t41XhE6bkjgYaJdC14Hk9QQ9TzMEyW1MGrwzKEKXNPmJxMMTPp6pset9mofPu",
  "key3": "2G6tGjTQMm8PPpa5vUTC6SWCw8XxPxZnrUmHKTsNQNBzd1Khh7DosPjVBMPpCasSSx4u9C6XrchnLha7MfXxj4yy",
  "key4": "5vrh3q4fKy2MaxhU6nSV7VU2sBMv2WBHgr8L963AsGtn5VBqjQEPC9pX22uQGnr8nZxEMCVFT4UWs5V4SdMfZELF",
  "key5": "4CxkPmgcRVdfipBfFugjjceeRxxhwjQfM2DRGfwG53KCegkxYG14TshNFkNxnu1jEuJj7dcJyoi4B9RFhLHdmPBx",
  "key6": "w2FBJmVMivtqBL3dFqyRtjJppDGE5x93N7wzPpvG4xuBJF363LKM3uFwbFbwaUGMEvxNqp5tfYs1eQQKpTM8pjJ",
  "key7": "4XGQaf535xY8XiFKa7FKc9vAw6wzct13EGxMPSvYBcZPpk6VZCnFPQ4LfxzjsMRLPjwTAzgn9YHnJLySaQgC1W7G",
  "key8": "62PZ2PKazQ4T9osJzSCHXppWx4dqXRTape8AR736e1wk5dD8nXujFczjYqbhcX5VzEHPKhR1KbsghiE1CcaFtAj5",
  "key9": "5s9LFmiMrxSw684GVAPesQiEqZt9QBceBJZGAZo5Ce5a8Nwi3haFp5HSKNy1qhScK3bS36CaoyrhhkfZL2gtkR8Q",
  "key10": "2J5nYatM8cucmric5QepLZovnCao6EcPw4wLZ6ssbg5pajKgfBCwD8uyNKZs3UVhE5dhKrgQQgbEdWqrxJtCyCHS",
  "key11": "6jgZf4Fm9NbqLTUS7kVtV6Q6LjYLChqSXeosSvmFoEr78s9uSZA2238En1Gho9Lgv2TFSJQXanZUdDrwZZrEZx8",
  "key12": "5DoLJbFn5Gua13YozBUzPY3mXZpitW46ytoUcFiuoQgx45XrhpjwU4vudMVAZoEAMhGDw6o6dQ8DVg7DQYhU2SZ4",
  "key13": "4XwjbJphtx3CqZdBzjepV1bjLjM8nCeDuMNLsBsSV455kksCuEFXAsnfc2Bm5VWak2cioumYzzH6nagfWrsjShk3",
  "key14": "BJuqA9iE8xnryS6kMtyViXCXHGwoQU2npBH5Rypijjzrundct79Q3j4aiera8HY3WFZ7WPQoeS2rYu6vtzSGqt3",
  "key15": "4r2kekakaUJmD9gGRvYaiGs6ruhohTMYkruQTUMNe9mk79TnEzA3uoUDATvmrXcRoP45KoxNkd5eDZKuqsR2FLFB",
  "key16": "3cfaZFFLy1PTdwKjc7dWXjkwFvrYZG5Esmtb2inXp75MdfVhfDNTXPowCFpz7zjB6ZSAtCUTZbfP1jVzgtHFa2Ng",
  "key17": "5sV8NbqKE6r3mpCTPoNVNQ67CJWDJ3SUWXt1xW3xVLCEuD8DHJ3ipv7FkLQT9YNQERuVkTQi9GmSMpHASJXKXHkk",
  "key18": "5MSrEbtTLfSD2MmeSr8jxruqNFR9NFANp6rEkvA1hRiKedgJrG28bwkd5bz4XFzs55PPf3rqpJFxeJHzLtQNA42m",
  "key19": "5muE6bqqkLr2jmyQeqknkb1wTBEkbcsh5Fo6UyHK1QdZePECNRxnCmxd37QYWuiN1eTtqM8Dgk8AA5WD8RCFNR8N",
  "key20": "29LLAxzVDEMFGHf5xU86hXVS9Pk4FYX76cpT4NSRmRi5ed9ixEGzXmjU3vHdwxGy3VhHfmc9D2FydCH2aC2sNToS",
  "key21": "2Etp41gPmWgQRNB9wsVr2kVnFSFkJEjf4X3yVAtR284E5sFGkncR7CD6dQ2T3LzeJSghLGBP5SvS6bwUqJMtsQns",
  "key22": "2kP4V4xm7NjP6RCzbbHPU6Jiqft8DAThxH7up9UVSj16RnK8h1kXAf8wZrQwpjmKYr1VWyh4cvEtWZpvMfuXwDav",
  "key23": "5fxcuQmRKxNrazWyZhHFViVfuGBNsiqfQEaokJRbPmiGcG14aj9R7a9Disg5jSeHk7KKBt6r81yDtkpeUfeGEbU5",
  "key24": "ENm3efjrTPS1fdT11enMAzfXN5PURsBrbjL7DibknEqCavuGyX36JvjJsjn9GKXbbKVRY1xbtXEShkfNoC1HAp2",
  "key25": "2UQCfWAmswuJDReWs8jroP11uJS1xuwnkbQ5UQbnEnGuSgiCcnNGghgHu6cFVM2hpucf6ZNL2cjubLpn19DD9L2L"
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
