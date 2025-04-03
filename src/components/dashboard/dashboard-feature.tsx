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
    "4cNaTyyyscrTGD4CmQWxnTDXDhG5g3TPQCYjFL6mwLRks7h9iTzWVYsRTUj5hk55MdG3y1QKHsyoCvYGmiqRLUwh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57LmsUqX9v54taW2NmyQRpYtnTTsgiweKwPiJe5EkWpYvX7F6PownpDr5b8NAo9RfPzz9wYMLJjD8thRK4apxZp8",
  "key1": "5vFfzjv4UKbkx7rwTU7c7Apsv2SAJEA9e6HHUkVAjYg3dbfWe5CmUs1KoGbice8izscHcRfmWmLKfqrRACUkbJnG",
  "key2": "2JPwJXVyJsiHrpwMqGLEYaK8AsQFJSNgDtH2AHHF6AMQhyVeJ7dJLJAxTtb7upL7ycRv7w22cq2G8VmFirUEFVs5",
  "key3": "tDpCK1NadZvxwMtCgruGrDeURtjYsTVuP5JEbTNvDUyEhVPULjq3HjGTVckQ9ftV2kWhKiECHvTgAEB3GAnASkH",
  "key4": "2jmJEz27xHHGeAg1PW3ng2P7g8Ybp3u4YrmoHLufqyT3wx6gM3mPWkqe7C7Mkvu81Lqu9G8x6EcQQXH3tLA2iN6H",
  "key5": "wX8NcgkitmweVEbTcwhFYPDszEQPGdEsyQXoPcQF3y9tD43tnMggV94Y3F5DFB6TqwU6RK2TVkxAbwuK6yDsJqX",
  "key6": "5cv27HMoaQcBpuT26KLdaZwFEuCDzJKzC3LquiEsaHHqEhURp4nyACnBYHfsNvRenUMXHb4qWCXFY6ymigTyDppm",
  "key7": "ZKC9sFJHfHPpqmo1N5X7syzvpAXGWbRHuFbf9v5WLr9jorMXYKcTfLZgyXeX8HDb9VwXzqbyySX62tTtvGG75ux",
  "key8": "4aG8ezWP3xkxyynfh5k1DS6Xi7TgD96x8VdjWHmBpnU6wPuUtzhDnQgXLFJejRyoXcmfZEdDBHyyADubZA4Tf2VJ",
  "key9": "3HRMdxcFfd48UqeWHJw3w73X5afiyPQGyQw9f2wircZ97b7PJnYXRVJrSYsmvcuLfgN68tL1tNiiY4eMuqUoZUGV",
  "key10": "4VTUfYiTReVgVCWrkjbTCUjeHToQgViYsUHzpp1Jrm2VgvzykfxBfWJRLcY43xuyEE8Jy1ZqGDkWGHZcwDtFBKxS",
  "key11": "2Dr2ewVnCE67M2Mu6gm1VtP3wcWUxK3JWMYREtn6WD4fTv43Fm7wKgpRfF3goyv1CGN5h9jy6So9tBvb9sHU5Frx",
  "key12": "5ZTrK3oJC69WRc2xEVm7CkZCKuw3eDwnaB4b88TXuwRTZFGKE4v7WSR38qopqeJfC5z2T91KAoZQf6fwntnzPkXL",
  "key13": "FLq2JNsdk1cXKTXtXjmLeMqZxGsFXeKxp6hPAyXYHn8LqGMdsttnddeMnCsvefnUmYkJskZ7pCw9m4atmDcK5fd",
  "key14": "27VR39hRT8UzxaYzkCcUHGB2HyAun7Ci4aCFZGixZ1MZhKmtGjt25T1X1KMUE76yqbe7fFrCKkTMYavD5obpLqMe",
  "key15": "6aekPBQSZWc2BbnwXYSHQkWXsPZ28RATiwHfPgZobcarH3UxzmVayAD1TxV5E43hiUiQqg1oS4vFtuKzYBgPGDL",
  "key16": "EYkeffrZEgdXWbGrgtZjHwMjqvz7M1oGjmUh7xffjHGcXsqPCEvX9GBT6dU9awR6svpmJeCuVRcbfeiAUc2mtEE",
  "key17": "4rm5rs3reRDdrES6t2LJxB5ui2dkpPQZBritiQCfy1nyC382yTi9tDE19mpABGzYJULYqnsWh9xjwjaNtB8YurJz",
  "key18": "42oh7CSRfqzyzjt8oFtAPcYBupjHxrgADr2H1cJaizx77224txwKouPgBvcHv4thz2axRYDiaTufNECki5oW6QN7",
  "key19": "3DSsyrLRc75nNy8GrjuDVhjYCrFjbS3D3APw8c14869gTZMmsbcedv2WxvTRkdHZZkQf58hpVsctJ5aLTZKTYAxK",
  "key20": "2X71f5SdunhuF8PeKyjjRKEshA2cWo3YHeRZrcUdcy7MTkzAnfWW3ghRecYjDwHZVnS3TPEqEFfMaC6qss3Fq4su",
  "key21": "27vaWAu4utwBYXc95fLm39EZQJM8beaEC9NZLJ14NcrBqF3oGMGpcsabbiNdyad8nZrbq7PSZnVwjYtwHzFhcsCz",
  "key22": "5rcwgd3akhpx8XL5ep6TtYiCXhsjwv5J2YQvRKbYbduvPpYe7orWSwGgHuUro4JUb1zj8nsZDdgKULCQLoCC24ka",
  "key23": "i6HcKH3YLD6zBnpizTTUBjx9mxYqXAkR6CDUmBnkSJrtHxWCJ3qKwckbBFQuxVgpmyZqopbsAmrbJQtK1eBbzL1",
  "key24": "5GkYMhjFttbGdfbMdYTCqTZR4dyhxWMrH43nJkXAqnWMycudBrLk62ooSUa3or4e6bNb4q1ggrfBsnZ6S493yP4p",
  "key25": "4X72H48KnhDeKChJrtveUmXhag8nB4Hiq4AAigWY5viiM75MKNhzHfgXWPMzagJxxxszXzJ5HmgM8H39rrETe5YK",
  "key26": "5BAR4QRQu6mYz2sjFBjgeUQQRE575cAJf3Dfd9oE3sSsvzeMCA4w8yxUDkDezJ9wwQXLBknSsfSquhVrKuFZREtL",
  "key27": "5bvCwMVBfe9ekx9EQR4dog9E5XWPTgjeChs7turod7S7dXAjqkdvvuHY1KHzxmevSAurG4HixUUmU5ctoATgB1fx",
  "key28": "2Bj3xhL2ny21pAThoJ845r7eiwEMzS81JZ5b84DDQk5m3TXnkew34NGHJUoaysu3cU7MSXBME1a8wTCXtDtKkuCj",
  "key29": "3YpB9wS43C3ZVbXBqnXXX6o1Q45LmuvLTvN4jZ389wMEZYptQLUp41gnVsCmsn8cNCFnX5DGruAQ6ySEaTiEAfkE",
  "key30": "nCAnDGV1K8XfqG4EXpPt2NjniCW7ucHwzeuBvj6r2jLUw8QpLUYUH4WDpkiWbTMHJey8TK3ej2wGgBcLUVABP9q",
  "key31": "3NSAodMhbcqPApcPVwtPvPJztZbj6HW5aouxm861rvyna57eU4WtAHsmy2J9wiqWSWe7Ftq4rAQJiZmsGUqECCp8",
  "key32": "56pges5fBxAb7AKVpEenJALkNPpkPP4E9YhQiShrpy6b3Hxm1FvxBk65j4HMSDq4RJi1f1H6UHuuaKWAB5SZdZEj",
  "key33": "Yw3QymJrfNpnzcsRJLCRpMpRS9rL1WPFyPWmyRZNMuNPAoZmZQUaAQmsckGXpN56N4iZWeiyyydb831eDCyabMC",
  "key34": "2Y1MndTgV1rvS6qSYvB5hxJV7YrDkyKihrfJWKcnwHwyYMTYWJQL32AbneRytYNqBec6dcibDdFh7YqSufXYAyCC",
  "key35": "5ZRDytbKPKMnSXzLVoo21N58m4XcDGusGJwa6K9J61CuwZkXiaK2cL6PeMpCeqyLFk7FbC7UEom2KFtGRu1CGeM3",
  "key36": "4JHkWdhFJXvgf5hkb7royaFd2HYxEi2rkMbDaKG994uLFMJ7EFKZiZ4hVitgkjXnyZPNjvdduobdjxGu8YLGurY1"
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
