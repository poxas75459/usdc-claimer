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
    "5W4v6R7qBjvBPJHF6hZ9tvbU6LwzpYL4E2smMeVKk7reAE8MdNyiVzWU1Aqrb47NzXW76x7JB9KepVvJjg7e2YzQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c3i6yDQL6CRCqBXJzChixaxxs2LsRZwVjc8a1SYQGtghBPhFbsvinNMqXzDtTuRC4G3Q6WKKeAqNHAfekGQNYnL",
  "key1": "5qWQG6TwQ6oWWoKbYtJRdyxTgp7N1z8XgkSRXDzQCgs7dgARaEsMnjuR5uz6ZbD9HHS9z5bF8f81RzwAvKtSFsdg",
  "key2": "3zYg9LgamF8jN97qpUCH3hiN8FNtwozAuUep8BRZrcwUCrZHiMWwDfas79FPxSHha26vx21jCZYVQRMyYwA7RmhA",
  "key3": "6541SvxdYgTF764K1Tcgn8iMiYihyWSqS1spERp658S5qAJURc2ME6uFzdCoADGFfwERU6DGdZAC1qjm9a624Urp",
  "key4": "5WyN5ZMTfCdwpuvNpBfAfGRUzuN9TATy7s3XAdciLrxRexYfbToCeskn8LEKSGaW7f5mq9EhybMvqYMSDEkURav",
  "key5": "5Ma6vx7ByhJD8trefNQoS3Q3ZxqonwpB1R4cyNC4r6HPxoTSksdVUvcP62TUJwqNDvMsHQME5EVCG4eRi6CgfaFR",
  "key6": "2RdLwL64RZ8MVJp6ibF5AWP2S28R9s2Ady5swksnXe1muVZxtf94uDnabKSzViChCnFpbYujGKHwwJY4EQYxTBjv",
  "key7": "5U93efra46cUTM1jiAYs8a2KsTLr4WD3nU48Pd9nMTT5dHpcXrRTuXz9MQCbqZ7xWmXXBWPvuBgFWC3aVYxPgGgr",
  "key8": "3r2RQJ9joiDop26vwNKdMX5F3uagzgxRG743syBSjNp37fGiSSuPRNokxqwwLrrx8AmvGHB6Zp9X6dtm7ERmcVic",
  "key9": "42CRFpUzWuEb7kHc2T2JcDJiipMSsHN5CgZu3mn7xw8Tn8K4mB9gVq7DrL6itKKn8GG6qLNnDoBGksLUj1kGVM9j",
  "key10": "4AMjb1u5HZCnELH5ooezdTQus9gBv52r1jPDZfkSYDaJutZg789QJYsHE4bRv9MFsgDAeyThffA2mzuuWdLcy4yA",
  "key11": "229SAQkENTo8nSFcDiTZamVVMvpKqUcubkkkZYC9VeehLgSwh5BmkEPHJ4S8JKq6Q2EnoBaCoArjJ3PoKzPa2krz",
  "key12": "535Mbd2EYT2xVthzgeLShT2bx8rHEg32vTmrUfZMyzoRR4mZiacxRuy6fJbSrYi9GvSbj75UeWbBYh2iBaW2fof6",
  "key13": "53XRz4vy1YbLMatCeuM2rMvwP5UgSQ2YwqTvw2xhevjKKW4RTDcwq57QZbWgsPGniTwsnEsRbHexkRiKbhQGCxxw",
  "key14": "2AVdtiV45fmW7HMRKNCUo2pVhi741FnNK7YTg741wcMBMXLGaK1oAjJLmWTpkAzootPPi6FaefgT9N1mEBBbcLX9",
  "key15": "4eDQrZYYVLVoQmGZqPCwsa1Uze5r9iRC6EwP3Sh4Uz38pX4KTKTn9MXvvZAJcWsYAvZo9NDrWawCpWkfBQLcPyAb",
  "key16": "3QtbNHgBZMZh5hLMes1aXoBAgyuUdEeabHZ9fsktCAac1NFgEoEDVdijxDFbGDFkNPXdWsWysH4CGDJ4YEqHQeFh",
  "key17": "3jFrbJvMpUFCzkUPxULzrBmXmGyNohgD1ASzR7b3r2BCRE75nmd1grcmjpqPqpnHyeboxsoXD33HEv4ho8Mc3MeY",
  "key18": "2FSBXp5GnBeQKnJHGW8SxRCoQThY28aQmWg7Ja2FdK8Bt8xQ5VPWWmcFgNnzvJxGNWN4Ct9PEEGxTnSMRPA4mDF9",
  "key19": "5gdAKUYLVGXg9vnjxMLevG5SG9iem3GSYdDmErioBeYFq8fHz9y9Mi1sW3Yd46QRjcA1p839KWm6DssLUrzLEqRj",
  "key20": "5eTxv4RvnBwywbx7Gi3VsksbP1NwL2fhW5b1CuqGTeqPYPzzeQ8acgyvC4KPmnSt4M8w548tsQ8ATC3LrUEMvoJ9",
  "key21": "4hnvhPd23cy3usRHeshKPKC2izizoasUwEpQEBFXBq4VbsbB3R1caf3sBDwP15RpXkLf33rE1QJ6GWE9x8C6ztqD",
  "key22": "4UVgQaQoMEgrCLbMCsbYA7fLhCV1vGmAFFWeBKSCmYmN2C5t1qr54jApNEiTem8JPT5Wr7eG6Fa1v3USRn1UNXeo",
  "key23": "NWq3fWHKScGrE21kWzeCAP3Ncms8XNJHWdNhkAzMQStz8o3CZmwmZLHy4XmsSoyeTJj7ovTUP2hUnaM1E9Jg6sM",
  "key24": "4R8LeiQ7Eb8Jk5biXZX2RPm4jnGEjCdmA5hLHNSb4oH5JGpHHddKBMCxccKdZwezACvLou1m2vABJKr9R2cJCe3v",
  "key25": "55EGZYPcRLnduV1ksQXqQNThTAFMeFEeR5myr6JryfRNgX3ASrJdbpuLMkGhDM4bVtpVCZeKCp4YrmVT5HH35HDk",
  "key26": "3hAZm6HrowpnZH4uJf47r6DXQgVBH8xypkmp41UQNE4KhEMpkwtGiVBNVDLw8ZMZzkQbihgTH6BHYVUhkJsCSzJJ"
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
