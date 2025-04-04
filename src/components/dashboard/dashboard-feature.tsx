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
    "3txsm92TrDP5LApca1X127UA2fcyb3zhFsF9PsHkbQRaNE6kzKzrS5CMVKddEpHhT42NjJaGmyWD7iWvvSfbaLHT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FEvA927ftW8LjC41HtQzHyjaF49PmcHA8JFunCn8RUkNE9Md1nqFbxbxqvgwDCswdNhezznqHCKFQYZXamMtb56",
  "key1": "2tpPUqwkPc36hk7uppZiU8nLioXWiYbY8nHqacqv36mFucq2uDaaBokzEn7P8rxWuktvWRk8Qi66hbV4PKdwSgKQ",
  "key2": "4Js5aj6zuXT4feLVumZidJXjELxWDXRYjoCadAmsPbN7A1UzDcwPJJF8i7YhBjf1h99QiCnpKZTea1XDZZoUBLDa",
  "key3": "4zgBjLLNAYbsHKt2GuSnp3pNHHEBwrxCtAB5TBQgVCaGBr3kjtAJGEjHv2SMaKj4bRZUzHv4RWsQ43ETu21Sjr3g",
  "key4": "2KVXL8oknUc5T4vTwGHGLzUHAFe4sjhgq5aPJDh8WWQPUgCZXkdDFhQArwDkVLZRbJrJsuz77Ez8KmwJ5FZh7GtY",
  "key5": "xmxUnMeDLcg2t9e7yXTuzJsZxymGe4TWGCLy3AsGkVBkjJ6RA3Zco8od1SZWY77iqkScgshVUGgpX2XeyDnwm3c",
  "key6": "5rqD2yjw4m6J2ZTrSLiHfFB2pdqV3cQn1iXeBGds3ertKfKEs63sbd2fQo4zSz4GxeMzMMDT3gX7YseNmN2vAAUx",
  "key7": "4nDqS6KTjzAGn8ND93Cewa1j9p23wYnrYQS4gcXyqAC4G4gY5xy55qKy6nnphWd4v5iLRWNeb5N6AC5QLuk162ez",
  "key8": "U4KZ44tNyxg13nwP9RjWZQYppHTea41zGRC5yukMfFywwtJ2GDwxoGFHbojiRQ8BjRtfp5XPSH2SSYTe5byTQRm",
  "key9": "3UzhpzUAAu2a4Q1uu9esQ9wwiSd5brLXdMD4ukc1JPeXv4gSEpDNDpWh7QznKziGUZF1WRwKCCW44AyLS6ZExu6e",
  "key10": "5ZqXUa5TZGCKvu1AJRyXRPBQNfkW3LtT63tFhMWNYeh8vm2zFaASrYYNHGvBGDFi3USvfv2skskGSu2qgTeBUs1w",
  "key11": "63imtLiPmSkaZxvrSGZjwyVhnCbebwG99sqFaePcBJ9wvxKZMdEKQ9gLqKv6Coy8AfPiqc3FNuZEccz7denrzMuC",
  "key12": "2zAJy8iykf1xWBVdsxwuH4XDki9MqX2CqCDpR2xWUGwTqK81UXYcwV993YsY8hU2PSpBYYjXaCXfwLgDfwQpkPXn",
  "key13": "4epTmhyW5uicYMLeFxxeXfiEziaHXD63SzhQLNkJ6tqrhzNuA9GbfckYUKzCfxRE4gbCtXaUC4H1jVo7ETq6toni",
  "key14": "56WzvtkfmnU5tvFpnPPriY26aeB8NMyoYr9Fvjznzz41BhJKUEszrWMrS8R1AJ59K5CPU8NP3nojoiZMiPBxtevo",
  "key15": "2XmZYiaacf27QNBTVcybTRXaR2bivZHefsSaRoZeQQH7AF1BDJRdR2ojCxTqqCYUzACN2jFDSEHgPA3TPVfwGtKB",
  "key16": "22Dfmd2XvJ1XxgeRSPe6hqRZx3ZmWz1ipcPnJyDiyhMcfhh822tu4WwH5pqiTKGKaAjNyM3CENoPWxpGbk5Xp4nP",
  "key17": "qihciSQtATsDSy59n4borXW7CtYWv2o61haq1hPYD9ifXPWSkAStQAEyUjcTKhPqu9DqV6ik5a3Y7LBTzQmcNBE",
  "key18": "4gkJwpiKCYoyY5RptpodbxaHWqKt7ihRB3EtbyfVActAutnAawAQNBJk1kU4yB2ubKA4f3DSDQsQJNKigGuxg5NK",
  "key19": "2asuqAURWEAz49dTcC6YFYwh76L8ZbJWsbpk4mUDveznm7XCoAEjyt7YmzK77YPitN4xMxs1NcV36FCtCpArVM33",
  "key20": "5Z55PCJBReGzfzVJCrzguw5VvGrPTJ1rcSftroGoSaBYU6QRhuFFuz71oGfEAPaUf3TiKV3GsWZpj5isMx8eA9kd",
  "key21": "5kmNt2BNKBFUsosp8aEDrVXnWDNcwRWwGCUdPQ7MmitNhJQAQCKdjYdiQ2f217iA97QETPQE3ZNCQVWgCbGL6AQz",
  "key22": "5CtTafN7E9m1wN56x2KqsqYWPuDZPLF9y5dQTf76ndYoQrPY94oPeXxCnDmrRJyK371siHcTqCDVRSeePnW2dNTv",
  "key23": "4gy8xfLHtuXHXhxBL8RSTvMz2B4f5cRCnbrYM5deZjbKXnRmd7RiWWckNMp5VyN1JK9Y4SFJA5ym9uS96y4pwb8q",
  "key24": "3MuPF1abGSmk221xFvCP5zCbeYXSzZeGwrxuZbK9qavqHjTAVCZhhECVGVBJJkZPvWQhpJsZktKrupVzP8FCrWv5",
  "key25": "czMExSCJwnJ1iJYZSrJhbS2yNwRGUX3hgHSrNXwNCMuE732rBRRfEuP9nnopyGvJSwKibGxMB53DenJhMNrRSLP",
  "key26": "3XyrudveiDHGB6Jof6UxL9eeYxFBvmp9TGoX7Hbg639QRRwZYMnWxPG1g4KC3LJEBh3n6zZospQFvw1CJANDami3",
  "key27": "3b1359mid5ZrttEU2Xs9yPjiBc8VrFTsQc234d7kAhWyHDy2RQkQeRcXKKk4GyBSJq83u5cGXQa7mfh5Thxw3XG4"
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
