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
    "5AWt8nPncMD37wqyZ1szAHei4C9borK6sYtquhFxmBwQHsrsTdy2WnbqHKUtnkTU2KMvhqBN4yYFJrLseurqnqiX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xQ2utMuWdaiw8wUpTxMx6ezynvJkgR4A8s2kX9hyz797NKD9UPnZ7Lp3qPQHC9EJFt3WRTp5tBS6caUpzXwAhfb",
  "key1": "2BUWnGBVzqgSxBKhPmjiF5K4UMadg1zvE4y6YQjsXoSpDvR2x1hcfs4gmhAeJPsUTVcorPcrnE4Jmz9vm2rSEJ3b",
  "key2": "4mTLmhthyE2uw1JAhqnYrmh9mWhXUQpxpBVB4N8msJFfhs5EoEEt6Fb4KD7CQqZhsoGNVScVuBgW9ttyD1EreVXc",
  "key3": "3wNPuTfpv9FeiuyB1bX2vjKG2SVC7RXrFFZS9yXdQd4FVUKCFQ4PZbxp2zjEC7e157Sox1VFpRybx2JEY5u4jJir",
  "key4": "KESn5WRvYDLKvFwa4CUaci8JCQZcqFCoW8V9G6PYFgbjQi4iYpcrNMme5j7i2p5rUoL9zG3ub4oSPBdzicygJGs",
  "key5": "2uApinvChgcfPWWzcmLN5uGw7L9YQuhAmRC5u6ZHrRyg5Qr6E9fuYHahysX2mL7Z3j5MCyCtJQsSFDyqrPVLNLg6",
  "key6": "3RxY9WAqwKZcTZNN2GoaTNWL39H1qZMLe2rhmdx33DxcEYaGTLfd25zQLuRGDiedG3Ftpma6qZshZS7TqEcStRig",
  "key7": "2hC8i61hysL817jV6LhRJ3ndJTvw3EE2BjS6MessWeruNX2fjC3EkdhpaCUJuZfxtyn96jELJc1xJUPK2bRCrBTR",
  "key8": "5QRpwaNV5TB53hKRgHbGbHNr4P6PW8NPFPJ6m2c1BdVeej47Q2GdiixkYYN3mwsoJJZi1VeCcREmNQ99SgMLvw5f",
  "key9": "4SEJAvLiXs3KY8CgarLTi7D3tsfjJwvX6TvjUsfefAs16UUUj1o96QQgiPafN6YnscpQUyDZvotQLPW37xizef5o",
  "key10": "wJFNwBvB4Ms342huAGryRAtSisapnqu6km4XrWB6WbvpcVVfPHtELbpBddheB7WeSgr2uNp2pVja2f7xTxft9Mq",
  "key11": "sWrsdjG68V7rVQSYPN6RGdHtq1CnyLiRCsZ8htksMBNzzBxAMA2fC2cYwDuCntqriAq7idqWbtiF6TzrZ7scEi9",
  "key12": "5V7CS5rhQ4xJdQxSbU6zLuDAcWdz9FwojLjH1UQHjMfNQCPV8cPhJXHqAEwmQFPWHjx2C1AE4vukCe9b4CEFj55E",
  "key13": "3YsmB9cv8ZKDEaxxGTbCUTjvqzubmMj88GjLZGHDtuT19C76QTsqGVaZyRNYTpwcwY85FUjCSj8uW2H5gW8RBH9U",
  "key14": "278L7UHpaGL23hFxdH7GoSnr4HU2FZjAmfWh68NSWTUVXzMfokpNa6wP4NFvXzanHv2DDgQoXpTij6ru863YJJLR",
  "key15": "2rbiMdB1Uf27xcBK1M5DFgoXYZPGGdFTjCyKZFvupqsK8mXa1Hp4ddbpg3QSi58ktBpEX2CnREnLJQjxBFSr2HpZ",
  "key16": "WSn2FmuFqfL9KNeB5ULJT8UES6oKo853ja6mP99mNPFLJrtgvGKeMm7TsXcwmbGDZrQDH18QPmwfivF9TBDGQe3",
  "key17": "4YPKDaE4JU9QeEpfcPek29uVZ4cun4BzaMREP1VYy9PwdgkKdHHis6aMC8HMHaX5BbSxrukq5aZmb5eR8ZJLDvv3",
  "key18": "2QN3GRR4st7kZ1D4W8FmJS6UbN5istNcs45DELnwMsEktzWd27uRuNaP6W2919nShanKW6JxXVKxzYrHvUo5ZmVG",
  "key19": "5qvsA4HkK5VyH4nyf7ucPkqQmvHVbnVhbugR8A1y3NTKGM7oLXm3LN1e1V66HzhG4Db2c5oUQPTdEg15t2t5oY5d",
  "key20": "zfbEHsxbkgyP7RysStibNP7uUEC8xYL3k5LWY6mJYdepAh56dJFFcTDeFyygs7mHmptdDd25fXphKF6CYdsnYih",
  "key21": "4MSn6sv8A42qFwefUEUD4Uww6oVMLbtXvBVDPfGvDpks32j6hD9FNMWsJognQUNKeCgcyWGLkNkw2bCDbuiY1Bk8",
  "key22": "2FrfN9NbibJviJASkzMFAEgA5ysASh1bsjvyGdMpcztnAd255aBZVcJZB3iD66havTrHK4MjQYZYLtSj86amb67V",
  "key23": "yjUt9gCFJVzbp97P9osFYkWA3oZmNYZiuAdKW1X6BLF9dBXmg8gWkygzyffo1wbxh1ChbUM6HGnPUwv44BcVRSq",
  "key24": "5obspu92DXFqjt9WV8A7R32uLoCFzFSSj6pd3eVhqWX1yMujvfc5iirxMF74MKBMNso6Dpy33nZZXYkDUCuhSJtS",
  "key25": "MoVQhhGcdaNtSnWEnSfNkgGjTXfwQHsmWFY3zAaNQHG45b8HapEkQqkvo1h6gpMaQtp27S8pKofcgedWgPqJGhE",
  "key26": "23UxBWZ8BdpRQ7wFavRsPDWFb6z7QLRnkgTQMWktrtEfgDLqLUMSG95FP372RisPvsCTouvBEudqYgNGk6vCkAgF",
  "key27": "wJyhpHSQ1gyHQXqRm9kT28FmdbVaosbKAqCoC6uuS1owmQtNQpGPX7SHf8fEPeUC1Fen86xXSKD26sdUGfpH3cn",
  "key28": "3fzQTtHa3oENFbdahh8oemy9UANE9g23XsHjQtNt9rkWPqJveJ4mTWhBPEoGinESW1ogvkB5MExtjNjvQUDAzr8d",
  "key29": "AFREkWhXvRYjwE8ZBpHATGoLr5wgJhM2AuE1fxJ7zwXt76CLX6tYBrj5GnJeFtYnu3bmDJeCa6CTYLhcFqzF7qR"
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
