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
    "3JNgzn7bXed2Mn1oooE6hfKc2tXKBZhMQiX33ceSMRecxo3Wo9CztH93RDkg3CdyEPaiSCLhVAAJjXw6oKSLZXEE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Wiuot9kntGSeDR3uL19aKZ2EdK8Py1xa63BXCCWVbNZk6z9fcKyc7Fkxp4oEUfNNeXZ6NfweTsNU9WGnzKp1NLL",
  "key1": "4At2QTck7fqXrWXDyfct5MRp4kT52go5rK15Ex3PWAPRtjM5Z4buZsZ8wwR1uF8fVDzxTwEYHTuYfA3Ci61qZqYQ",
  "key2": "5E2zNqgYSQayKuMGWBYWyQEVQDHct6vdHewSbdpSae2AVQqwkvoaaK9Q5HydmV9NxonBCvRBFjMpbukB3VAocwet",
  "key3": "32ZYCFcBJpzB6stKZCWcabDiVk3K5pdoQB6tyFdWrfeJo1ZY84YrZG9RmDmApUmWhCbW8NaFEdHDgcdXmc4CwG3V",
  "key4": "2GHTV6PZp1ouTye4CfvWk9TB4UQ6NtoxCiUbYT6tX9xeRp8BoRU2cvk3LVTdPjQWcK6mhkRRSkyhLpkJiwmt87nM",
  "key5": "24fZRQF9cjpMKAMxkWukwfr3xusj249d9TNUp6UgMsAFCBP5vnAd7je4RNcGdbGGGRgryjZBvbqgjNbqSz7iWcbA",
  "key6": "3VZA5ammk8nk1tHutED66UyWErE5f8GvAFT1TAXGg27PHkqvNyARx8iu3rvYXJiQAJAzFoYmfHqdUYfMeJvqCPH",
  "key7": "2n4FtGtgrHFxz35vkR1mXwB5WQiA6Ndh4J6SnVwDKwXzG2V7TeWu8jN1ULn8goKG522kp8C18Mu5AHSdq51A2NY7",
  "key8": "5P5jEZsqPircRCwx9SpNwcYoBd56qRX3KaYhqoTPkH8Rs9dgUQRr9hbJoxevnpQ4sHt3hHUcrsByNomWCVoNX8fx",
  "key9": "4Ubqw1r97F9ioX4zYp5ydTp6TGFdns4j19vza7GwHywJJeXZNnMtMPuxCwHcrMiufqDGXVupUSJTor2gop9RGhK9",
  "key10": "5ABpWW6zZLqHLE6zJCNTKcecic6SjqpGXXTf2KMKG8AFLiRbVmcrxLr4jkUcv4XDpANVMcHf9YAZYrgQyFwZngS2",
  "key11": "4VngBcXKmmhgZXRvHac5xdixfXa5BCEw6HESb8cuwZeGZ3d6v6MYXL8gkBmA4ptTi5rHKu1miT5WQi9HZuW4jsjV",
  "key12": "5HG6zcqbq7d8AHxCnfWBaNx8KVNsPhotdCBgYuZydyZAy8EiQRPQ6q84xSi32KkAqEPHdpTFuFjwHDdZB1Ga3Y8w",
  "key13": "3HMxx24EFzRzw4tASwS4yRANPnNukbAj9y6CoUFbHksgJQUn4AMRWvgYXvePR3DZzR8yJ6tT3VxvDMxvEcuASYM5",
  "key14": "2p68vcSh37JrktiLiFgK8ej9qA956TR1NxdRHjNF1a9RFKYasvtFaUdnKkitHVGLH5YYnPfD7Hh82qf1G47j4Pna",
  "key15": "qKUfSSpB7jPzqLDJtivi6MeB3jCMj9Vh1CJcpjYVNJKi8RtknZEvK3ayZiBe2Vykau13SJ5m3Qqj6G81ykuoTYC",
  "key16": "5KivTuhsbNCeour7iAjGm5gj4SnDqzFEPN5AWDxz9Go7tCSNyqt3DeWqDnCmZkWNawHAMcL9RQVsq2gMuVJec5ha",
  "key17": "3QCeXfnzfy9B9Gw4GCusK4Cio6JLs5sAyrrvP13QbPQtWpaCamNE6qiZGaKhybpCcCqHrzBCgU8exC25tU92N4qV",
  "key18": "4pQHbUaZ6fE5qqdy3Jz47HooxYedxkLfEqYpFcp5R1oTrUi1NK66BxWuMQA3heqR2GCUCf865GBumFmbF4phQyXG",
  "key19": "z39KzfXAJNjLpNHmKGkw9fKVmbrCKXupgrtSuUwczUx46gXtKbLnyyqxxdFsgiubQv9nQuYfPjUg7bDbpCfBx1u",
  "key20": "oh2LwkGakxkvyWTYaF8NkqLaotskTivrZLshY5cHj8AuQt8Ruqn2dAcf1MjvAy6T9mu5yr3rYZQvidv1f77nQ1f",
  "key21": "CLATPQ8RvfVGHTqqTqXXqRPwa5g28gJN8YZsmsrhkU7MG6bHoRbJjJoGrzeoqBbveWNXgorAFSpcoAMWZyr5uiL",
  "key22": "3F3AkXr6z72e59GBzzyGCTxTvb2DZ2WXRJXB8ywtFNZkim42YJRwM7o3scpAiwPbNLUgvS95gCYie42WnLYJfh2C",
  "key23": "4Gxj12tnezsL3S16ozUyJP1wdpZTwveYsC2FvDFyjM9JxGEmexevExonfdVucR8ZM5HEy3BHjVyykWEjxGxLoBXJ",
  "key24": "2WfEprcdSii6Y8CUvFRgvmu1WHB9q8vKraSwaUHQ2GxZfJ6d5hM5K4n6Q9oXPyQsk6c8HP4rctkupondH4aSe4Nb",
  "key25": "3ZWjsF4hEysa64fVb3R5LnB2yooeD9wk4d8PB4fEo7DQxGiwCg6hrDr8k1ikmMMRaSAtTTQLG2XpebLyPfUiF3az"
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
