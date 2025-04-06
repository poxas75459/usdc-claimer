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
    "4bj2zHACvMs183s5RcAiuSmuYKGFcHkZ9kAmztsdqDZ6ui75ouat7DuACu2VR22nTQG6gDLUXP7L5Dx3AHTtdkGX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NKkKvBWzs1pzvFELtGbffcdwB7ggLnTVLitCZbbmShLAadyb3NE3jSGEgpaPqSZr6iGJbEFhCc48MnjPVp196k5",
  "key1": "Jxb5TcWAFVWNF6h3bTfSdVuxpdTgDGYkFGS973zUncKQBSFyG17KrUwpryPZyKyhHYVFN6oSx1dix2pR85qrAcn",
  "key2": "4L9JQ8mJauDmFaFXifdrLNrt37fYSen16urjoz9CZDkqu4RDDAsajTCtSmvfKXCVCi9NfxamXvWjrp6sTcCyriNs",
  "key3": "HqUUhYsiTmz1hx1H7yiWdoVPgujaVLtwFVdPifeRZYTTDBQ8eWTymCjGQjAeRx19y3VtwjqB4GiXbKtWoT4tUeL",
  "key4": "3akaMCBU2uZtuF1JygNV2ioW1khDznDrZFmtVpCH83MjyjbfyMWMqL31ciqJkVk81CfcEvKBAwZcuTvhFyK3DGSS",
  "key5": "2s1mceFUHPSRQ3efnm2BUjT5YG3aWqALAqHqrKVcy7qC152qwA4nnJBzhTK4q1zwKUxXVWCS2S2jZ2yFuU448RYJ",
  "key6": "2iJkGECJkXGK34UCMANgQQiMUSbyNbLBGuSdsiw2WztUHhbophPeytcMMuBf8t3CaS4Bph3S25cwUzvhzaj934wx",
  "key7": "m6yNL4SJTpZjFuk3NzxtRXza2Wrby9q6Yk6skd12XJwbCRBNECTKkU4gJoEjPxDdkBRnyAfzAhNTmzp8UJNaqF3",
  "key8": "2vv27S7hHcs67LFoMsPV6uUEcdAvxzEqhCVDBcF77JTPgcG17dySSX6djwMDyjDSE8MBVaxQoPbQcytzAU1fE2AW",
  "key9": "hshNY644sQHQo9QD4TjhE7Xr1nvEmAxYesoLmkruX9wkGcQ1Rfx8PHiZngzrijz3tH2SKj8BDehyDcYPckdwiz4",
  "key10": "5oqUsyncjzwifJh5KihCe5BWhNeFaM26UNVKoSfiKZExDjSUrDpzzwvywGsKKDt13Ssg4FzHer5Ar19z5XBHaZ4Z",
  "key11": "46uB6y3gS9QB4pt29o8ox9agYAdDGJM7djaxiHHD5EH3ArSUE8d5SnCo91QgzAQvsCfAjnbdU8HZ8KKAgRPLTbjD",
  "key12": "2Uzu1mEc8FA7xbqb3TNG8PQPbdkza4RbjBghqJYYJ3ubT7uF5HJ977VFHpaRxiJzzhvztxc48axTnFKFVGCzRYjm",
  "key13": "5i3Dnhv6PMwa4KXyo7FnJrhjqQ9DY52F1Yss3C2JYDqwF44ipy7dsnq1ZgfWEnpt61y9YL1uye2vcvw22DNcADy4",
  "key14": "4Nqwp7AQ2CbSRqsjf5YrbAjub3xBLeLdyWAfTWhKwvQu3FYn651gZx4mrQJVtmjsSLNFmpQEjd9KeEAkCbjL89Jb",
  "key15": "3GxsqUrFSqgi2v2DbjCtTg5NwYXjyC8PGaNKsLEV32kQ6evWLKmbnDsQRgX4Rrm33PDrJS1s2GkoC4oW3DfoeefD",
  "key16": "4g2oL5jdfR2Es83i67tUbzRRWoFPdWzwYRx1CmLC67FdMj3mp2wnciukgEB7zkbJXwrR1gKQHAKaUYPWNEpXqvZM",
  "key17": "2XGrQffS6nZCbN9aquMJ62XJNmrwdo1uQq8WLhiqJyGkkWyDKPgg1fnBoHyFvPeJdFwyGKHKBWf4DDwjjVh7xGwj",
  "key18": "5ZFFrDpLZ5aoVWziCZLc1gKaJN6HhKgPJ4Vx3kHRX5x7mc3rFPPEzdSPkJDQVxn3xzuWbusVZfTJe5YfSMQToQ5a",
  "key19": "4LfkFm2ym61e7M65xy97fqFY1okqaRVT6WVZN2ZSc5rHAQQVeHbfnPfmfjaNKSsGDyoLSiLaMvYWQmJ61RAEetH6",
  "key20": "2aNEHYLGXNQcpq2UhwNJk8jfhijqXV6QbCA9nyAmFYsuPgPn25Jss2Dzg6EB8Yv9fcPSifbhsN5rqRUQXpojfpgM",
  "key21": "5xcWH968xkB1GUCKgmMYNw7Z5Rd3KEnzRmqQkmj8jWcn2YWnKYrx8HhEWCEUjiHAeUH2w6QE3w7JzMCdv1kXepAe",
  "key22": "ghn2Cwmc9BfU6tB4Q8jwWowVntdghwndiLPcJ5s7h8bt2akuGLXiuDkPhfHiTXgXciCSTtJGDo89JBQoa2C4r7u",
  "key23": "2qkASmdtBeDL3MfqT8jF6MJKkUrLvE88z2Y8ZTW5ux1divV4piXKeJY2Rrim3DKCcRy8Yniin7kaZft7motfHnNf",
  "key24": "56cUnaXXnxw6ay73sLpX9njLfg2BzPfXyVmUKPVSzWLKZqSP588wvzV98v7VeKsQkcEEsFeHWwts4VoSj8idXRZE"
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
