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
    "3BDHtekekuF61b8oJ26PWzjJxz79sHKHyvc7P8HaahZUMiNYsbkmGBpZqTb6f8ar2HPExapAUpAuhdXgJtv52ZLP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3evYFTEZpfdHFFYXoGMqwE2xT3XEwTG5SjzJwTTdHLSqm2B5vUATbtWjk6rmMVVNVbYMjzreNB5urMQ9XJKCSJto",
  "key1": "4ZAXpELQJThvH8avtsjCHDNdKiuT3jpRHh4KR44xLUJ87gc15zjQrdx2M729qmFv3Vm9FgPYnJYwVZ5WgYGER36",
  "key2": "4v62yWoirpmEWYQJnauWxTd72YsDRzBhJqrC6ZvxkFqic93N9CoxaS1NjVRBjXPWbmtEteSpoW6kWuoTYiD6nZMZ",
  "key3": "3Uhq353KUt6Av6xvk2SeVPVYbK7Mi9KDLDRynctErvTncbh4D9jzu9mnngiT9rkkJe84odNod4BYb8U5hw11oaWf",
  "key4": "386f9onxuLzywKDDnthCYffV5yDQ6CQ39RE9xJsQ71ioVJ1qnJwuN64a2nQLL8932EXj3oX4PZ3C9BdsHRF4q692",
  "key5": "3vhSCk6WVMn2XUyAokawPchCtNMWUsUSGsDboCagGXxjb5grQfmQrD1AzaxApwcR9Yov5BssPnEDH9Cke56vPv3h",
  "key6": "MJ6gL9bcFk9kSgFVq1KJmeXRou7Mw9tMNQTetCVxpqa1dz8Yh4g6t8tg3nUHQw8ZBW2ezRvRHJGfMtgM1jbcHR8",
  "key7": "3HMxs68kF6iQ1bwSy73DdAM2Ci2W8vXPmQaQ9Fb5yB6CKWT12r8UWv6htVtxziqM2CCk67Pd2zuQiJtZgYneSKYq",
  "key8": "4X1NjEJb4oM8hcMYQ1CtoQAXUSKftwXfUdrTwfe73frZtGjqLH5FcWtANM8vPVKwyYPxjZMdgk2MqeW4ByyLhRCr",
  "key9": "3qmxxTyP7DGw9Nq5uPqDKRDcodxcAFWFGefzEgxUfx5ZMoaq34k7UKSMH95HKLNWMKDswV6gutRemPUK2iC5wNro",
  "key10": "4shHVjEkMqSHurYQU9yfUMCCtQMv7TXEupLhtufgLiE3WL6rNkLNpk46VG4kz5GZidbtvPZsWxvbit5A6vjmFazc",
  "key11": "3v1H4ZHxWV6YN6eSj6vUNuU3bMTUAjGo2KTjLUznjud8th3MJGAx8FmwnrS2sv5fESYQj9PFPeSvMnbxrNa4Cyi3",
  "key12": "dxXZWMVvWZCpYA2JVsRZec8dSxBMV3SGqAqd3QckeZRqy3kXAWqL8cHfULSe5YA8GcyNey42tYv4m4EYYvQANvH",
  "key13": "3mdBVqGVevW9KucQ7k4LUiXXJUEZGrknfKVfNBXomeLGgvzgWd9AMDYynNqQBm15FMtri6chZDAJocjbxvcTxdV2",
  "key14": "2VSQqw1rtoXAgwFuzssmaTHfLNHsuaqjKv1MidjDfBqpLCFNcRWKfQAbB9stWFC7SpeYJkmDWpnZrEknzNgy7SUo",
  "key15": "5ov9fKwozfLnbTfTwPAdnW2btptpdrmvbgJDSdz6z4yCFiYcMTMj5VihkvFBNBnWEDhqMjd8vH3u23FahXzkUqqC",
  "key16": "3ZJ5vtMWHnV44sMiWvvhv2MZUS79jSGLRMht1hYuNRdDeixD6HjyNVpWSL4DwLA1mQ4pbKi2nbn9jzNpkyYE5HGr",
  "key17": "49wEc3eoFuAqun5mDHLGqsivTczuvBab38ZDQiHkZXBqpVi92WTCjP32HF1smb8HRzoSx2cLRiWgEbkAuBwsoxeg",
  "key18": "2d4N2JYJRJNRqWGpkEDQgyjxwMFw8g2fBPGXGpjCmerDtJnWnJnZM9nvUGcNxWMz2z1sCDgpsTTB77akDkCBy7R9",
  "key19": "48iyDGUY16dEfgE6AfmnURnJebXXf5P97sLRJedywSr67rxuPAtSX37ssPH9KVYfy54rwoURmU1Yuwa8rvQuyGAj",
  "key20": "3g3cBx9dkKH6X69oYGRA3xBkR2WjZmhjmDpYSYGkrZREi72WzsYdsvPK6JSnbNRJBZRxpwPv5VDDyLBAs2JcnMiP",
  "key21": "5bckMnGFRophyTVK9k9yxbpMKRyukZEk821hLytgzLPYLcuGquzQGtsiKonK8EUNM9dSiKfdj49Nko1sFvZECayL",
  "key22": "5hFwRuKMobZbxqzE4V1NBjhq6mciZaHuLBFP7im5bMXE4s8ghLqGq377r1M67bCshd4qBkBYgkUvAA51wekAyCPZ",
  "key23": "5ahFVccL6vrsXEvPhP2GWnYeL9Ev8gHYHzGj3kxPoJsFw363R783ZYVTYqz3hFZ1ifuB7CfDm63kG6WP7U5buL9",
  "key24": "2zsdSpm9iwDDR6g3wianqAWRyB9uwAaxs58ZT8Wb1GhsVRFSNJD6s3an5MqbyzQssENN6XQzoJVqyWG9kR6msxFZ",
  "key25": "2JiuSTGUPqeZqVLgGaDZxthybzNwiUkditupVYXmAfV5i89r5xug2w6RWQPZEGGA8TUdEEVZtZ74vceszttnp7Do",
  "key26": "2jsfZc3YPNXJQXTPWDgPD8h6SN7ewZJFc6Dpu5ajFVjyT5NGEBbsEC7N2dEsXYRjTPXFfwEGQos6eWifWS9u85d6"
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
