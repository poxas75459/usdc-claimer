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
    "5mUjU7qkXHeyYEoBWJFkZfYTSXuFMrj7nJbEpvxLv3EdruoxBRQ8Xxmd58CRxneSx8VcQBAFBkUXJrKumdoB77rC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LrfNgEL96s4oXzJEz3agMpLS26mAVuoTL8mpKGWTfRVw1nethr1VioKp4zjkdxcqUnERS6jCEi8sEkbkrEgnszS",
  "key1": "2eQUFXsiLE9cJ5ymjcjnG1inHkvtkqimAaTJ2ucFM3BXMFkApJbMeae6JqvzXX1wnFR4sorUZw2bu1YWsPtZUPYq",
  "key2": "5evYnCDsc9kNFCwGJPbgQNBoDJPGjakcqJ9fJAcan1eqetq8CH5FThJBnR4QyUuCmskNMniYQpDJPN3xfPy1kqF3",
  "key3": "44wS9anzXc2Du9p1ssxRJus3QzZYJaU3pDnBGxH4gER6rWAFv4NukFLgpW89dWnGsCZz1MWQEzPKkphoBapwPR9r",
  "key4": "4TAE39HMC1JK6SEPB5uzkh6WRHzLTVnU4xkVL4ZQimWNviCwcKxQqKc3Wwyk5hHipeeddKWWamdgs667cjxaTg6N",
  "key5": "2tNvXnVQzKm3k2pSjMrPEi9cf92FCx5EG7T7Ux6JgQYC5bhLxtD7oq2Y45kRKi5qqFbmgmAu9Zo8jjD1b3Fa2fe4",
  "key6": "4DhHwJcsZsEqJDuPYzodrppA7TUkksuF7oDvBqvKN8j7rNENcxFtK8tgx6ypJc96ypTJrzKWFGxrLShhxEsoavRu",
  "key7": "2k4KyyuJghsLAYBT7wnagoY7wJq8ZcVD2U27F2UgZ6EruzQrWwUxsUxrc272BxZr3T7CCSEAEapkHT7hvNe37zUL",
  "key8": "3EQtMYJUw9PN4o8rdnmnzLsZ5BENbVGWsn7XhpNZaFxtGi83bkrBbrZWq2AZMmqRZwxbD6N6SXURBv7de88bsz4G",
  "key9": "RrPQhJBD1Y61Dv38vxtLCMhMVzvwmYbkZ4dd8Y7ztgUdBhqdGXm7eDi3chqN2PPM1EgHQL3RDVw24CQAmLSEGL5",
  "key10": "42DrSY8xAfD9oMbsfTrufmLMTV3A5MJwLiZhGh872Vp6e9SpBPkN78S2vsXeZRWJqLExMczjVhDrAdJLR1qYBbaG",
  "key11": "5MDB9DUKN35Dc7YgQ8VZZFQEudaUBXMV7vG5uJARkQ3HEc4p5vQBJJHp3gze4FNVkknZtEKcxoBgxg5LZfkuuFAH",
  "key12": "5v9BuX5BmDuoGfXZ4eTxHepecoF3YLVBMTcaDyEBs8HWd48AnbwfRNmLmRZ1EvnswPvoEA59trC4tfWffPvUC2eu",
  "key13": "2Tp9GEwKZWUbHfe3JwAzcgkwgmk8nXnMeYj3huTiS6Y88rc8drtsRRLhpUiY1LA94hiqyC64UznJ4biG7CKaWBH9",
  "key14": "61V2qwcSBL68CciNZk5ktBfeTGM2TEtazDiTdf8pUoRmfw7CxzTc5frpTPxo5PRBBYPuBRcnkMfoWHEgGdUuizFb",
  "key15": "7ktqMZe5TjpJB2WcJoLnFD5J4meArsrvjbtWzRYUWFWymboG2PTWXJg2FXJRnTuTmFAEwuHWU7hPD6jfpXFPoSw",
  "key16": "5tLn1aAZCe3WcCm79fLftr99M2mwq5V1HPFbejseiRoZVfS2BaeV2PBrAgMvGkK8EWzyRw3JH6mAnJwft2e3ssvw",
  "key17": "293aFZ2ssgaFNmNz7HGdVVt2sPekEzA6mkh1gNBdE5joqymGWuRnqbJYCtbmh1DJKAVY4J25uB2FLVT4N1Pujv5U",
  "key18": "2Tth2paCcYHoCKJm6ffQGAxt85iG2QoV7KN3KjQFr1FM4xwX9uKjVaCoyoKTrzM6eG8YNtgAJ62mY8p5c5ZCgxiE",
  "key19": "2BCGGNNtjx3DaQF2sfcxfjvbwM45ED8HMaisfcbppUh4bVZndzgMMZLsVj3PNvfauDu4CivH9AjeJnu22mnHTRqh",
  "key20": "GWwYeenXEjVTdB3GyQ1RGenrrKDb9v5ExBaK2LTksfU3tc9c3MQ7xAJJ1ZuivkckyyT2P61zHf2JE6gdDo62QQW",
  "key21": "4M8AW6CL1enT9HpjHJwDWQeB5zo3AyCExKyP3QQqqQBYKrTsFVihBmuLxgEhm47v3myu3onL7pfmjGa18FmUHhuC",
  "key22": "KBB9yHCnZAdkaATcA3mYHJrzCN3dD9JPBr9z9Ktf3WCV1w23UGhGfwPDoxjC6WVmKzpjVpMz84Usn4EmeNywMhZ",
  "key23": "5LgTGaha6xR4q5gkdAbC7HFdTjW4fb271D1SjtAYiZFMga7djpCp2ynxa3yjuoxUbPUpfod3HSpbsJTS7vsJbTLA",
  "key24": "5iwAPLRFfKmxgBKaV6Rn8R3VwoRAqcXwUz7zeoSbsXNfoqkwZrvE2Zm4EzSKdhYLB4frPXqsYJckfhujLo3t28bd",
  "key25": "56VdquofT3dq9GQ7pjk9jaR5YEFSAscgXQaPyYyEB9niVNM2oqem2bfyZCGhVxeXcD5S4BLAdPFj5hc94CAXzGev"
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
