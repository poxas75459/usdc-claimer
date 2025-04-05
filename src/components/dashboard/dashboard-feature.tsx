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
    "3ZjFM7PAnQNKeNBc8cvvAKycBtPJtkzWXLfVqjsBJCSAShAzwXk9zRpwbF1FbyLya8nt3Nuuw3FugdxFDiKo2TaE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YKWmKUij6oGzafhepL5EyGvXMDsfY2PmXoAHpAAffik5N9vt9MFD9G6WgwzXvnmrDTpHZD5eDXJpBDz31tTzJVH",
  "key1": "2G6uagyXepJHqt7dFXPtR5uauu6bHi2eFw32mf1UAAa67HwbEod9nd8VjHetDUUf4d24Jc3FYaG5LmCK8V2cnd3U",
  "key2": "41ijMjBspjNhe5vMYyemH8aUPadeTFBSzN7nfspZzmwgX1krEgxsBdQhtZAi98GsYyWdXmkQsuTTczBh5KBRVePX",
  "key3": "3KP9hvo6Ni4HXjcAx7soWVAorYXmGbffUjqm6mPe5jDU34nAqNAJSYX4ruERjAuZhAzGHGAgBACsmePAwkRSoAQk",
  "key4": "EZUGDxHpZaBz4buPZMGKWWmiE2CHTuYuiyXgoP2D23UwiSeamGpkrt9rGqkuzL9nFneTmuq4sqZ7EnmHS6kZkwX",
  "key5": "jgbxxsxwG2YQjTnm7W6t5teHHXFE5HUQ5BW7HFZd86PCt7X5M6vFdNWkfa6DCz4jH2Fz5XXH7Gg2WVvcJMJ1jc2",
  "key6": "8c9AyKc1QGrPT5SoquQuwoPLcHVUc5hTaBRisffa4rGtCCetNCykX3utNqeqYtEqbN7NGMUzDMLTin43wDgvDnZ",
  "key7": "4EufRrsSYpx4nhHhtg1z7TYheNCJNBXsp156BN3nMA1VGVGQaBZBKCt4z4byGs69itKkXBv5CdapHMEGoSyFKSZz",
  "key8": "31jxiCjULi5cvaWhJzaYkvMiSPKJzo5dxAs2b4bdas33Pfx7LDQS3UA67xA6nE9K5PAzbX32AgH7foCEo6CfXcnm",
  "key9": "4qEP3MZL5TrkXeNxigiy3H6bW4ancDwgDDEb4SaY9zGFmGTrgRzsXSQYrrwVg9AamZqp8DeBV4i8cbcAwLYq79Rv",
  "key10": "5FD5N6A8Tx5NrDPaqVXdipK512USJPb91JKc2rDpmeYVJMRj1d1RGEEbDsDBp4aFw7a2RzLSeaNxvmebMJ7uHVN9",
  "key11": "3n9DMLtaYjSEw1bcBRp2LCPTP3PnyQSfBicpBNvtzQ68DPHTmpUp1RbxAhZjiWr8RYgK4TBFmuaphGEQGJCpBgp",
  "key12": "51e9Sp2NZ4R8HbmpqZxV5m9qQ2GJiCrS1X9fQa5WMLYjZhNVdn6TmyTsRcP2QX6GhLhq8io5KzNE3f2mFyBmayoK",
  "key13": "47xFpkKgp1xx2KGT1oGAhT7KYNaM7jTFwxbk6CXYSFpPckYt5jJoHpiqaFTJckWkdaURsmHrVyT9o7f6aS7UDK6x",
  "key14": "4VxUrMKRLVN1BCQmWBrXQ6QWCd5dGrqYdafoygBE99y1HEE1Y3Jo2nmMN3u65NAmGNmMVjZMycpmRg17GD92UQaE",
  "key15": "2aeu9RLJhr3eCqmRoqaiyEfVxvacr3x5mGA47Dp3n3zJjt768CoeKsyeMLB3jBkVPGyNy63pZYVimRM5bWA6yoDd",
  "key16": "3mNaKAUUiGizdsaUaEFUpauaP2qvhmTpkU6paE4uzDGEPpX8tdkS4mHxmntCM1BFrCxhPKrPVs5TzRCaWxUNvs94",
  "key17": "55ob3kqfGRMV5nRQqSJ1H3aFGrJrn23A2ieeYc3mJ9BMsqhJ3C7e8sLd956a9dhgDtXZ4J2TLM3JnqWfFRJT46Ge",
  "key18": "5X3nSm82cw5W74aAXzxSexvHK2mpWcBtWMZscHgpwrqzaCseXJZSPNK4rH3zZeMuD6ov2TBDCUDYskDN1buww7Nz",
  "key19": "5dAQ9SXUdETJZ9dYKFwhH4ZZ9L91HGbZ8LfcoJ7Wn6Qu48tvcGz9RcdTPtuG6HL3tmMwXjqZTZhrCXPz3QADm7qu",
  "key20": "2y561avEdLhFxtNZRndCtmoD5YZTvwxsaSUvePHbT6uhfu32m2soqJgpPNWjN6S5UWN5AP33UPWnkrxyWsWp9ouz",
  "key21": "5vRiP6X2kfBTwKQjtQ58o4yKv9fpPzCMEiB3CyGXq7MjRHXNBiEGeMb6K3Raa1LumRCbi9MXq9Xmq2bUdAa3Kt2t",
  "key22": "3vErdvqwy79ADUKjWa4eqPDZeNEE3PiS3AM5geUvwh11jLsh2nd1sUFxFNqqZXXZb9QxqMeVad5o5fYvDEU3Zshi",
  "key23": "3dQwcwXEzZJV8JejHxu8Sg1Yu2xWpFMfAAWnXAPiDELtpFXmevPECCnvbq7g7bGwujngQA26rjvefcWW1LJJKvbR",
  "key24": "3XEZDRnWjPcsjsncWMMtGfkSwcjKhtYeKT2v8XZuJV6U3GWova4rHoUAK3VMSN76XHdZ2jqqqHz6u7XB42DDRwGg",
  "key25": "5KZmRB9k6eD4gws7RwYDm826U7N9Ks5AF68GUPX4HBfaFmCrP7NG5BgussWU5UCS4NwKHifMwxf763vQM59V5WPQ",
  "key26": "5W8f263cHEakuRXyDZvw4nfQQoRYzJYJvd4L8u98PwjgjCNWgQyqMip9VjaHVAe8YJaQNhHXbJUe2DxaqH8Z6QY8",
  "key27": "5WUfCxPSwWFuQHKQwpTTxp4id1PzpYL73Pd1ADgUf5PnrSfgx63XYphVw42iaD6Q8JGCUWoi2DSRHvsYenz8YYWA",
  "key28": "acuL3Vzmoje6tyDc1mibTTVZYMXPHeKMUh3nRhkPenY3bhftHz4Frch4WdDPQHqrbBaQrQMdw3XrWPNGzK2j3QW",
  "key29": "2gxPzxLBUCh5uM6yjkoAgPDehbTdPvNJpFZ3rdd1maMKnkeD4N9J1mjMidWeNYHzFnSE9rjE3bfwmvScL9YfyndR",
  "key30": "2giVwVWiXoHtusks7Xobu1LvXgcqt8GJUCDFZE9Uj3fecHfwfphj84rzY2vLUHPzEArAXf4wftR6MCxY87C6hJ73",
  "key31": "4JcgX3mTpWvUR9CneWZwWsggxqjrDx8h2mbhCyiA54B9iWnRDCDNo8KVpqFiDyhNd5AeYFnXLgwDNQqjbjrVzoMK",
  "key32": "54VnwNrnGLAhy8MwQexVN3HH58mgeUMiCs8vhWGei3t6AGCSUoeutqQKxkBpCYsGwhNNYp1i9UMq2YStpodP6uAa",
  "key33": "q5T4qz3iQbm4v6joVVHZXn1ZCFXiUzcyyHe4tfKWbd3UsFEcHvbAb3ikB9DVVbUutKnmdeGfTgTmeRC1LnYWtvu",
  "key34": "2LCgqzZnm81j7PGnNbriGGhntLj5AVEDWZqo3xh8s2AtMTtnkHuoJybMKpwVBwsTESQwRTtHsdgQxBefMV4zJcyA",
  "key35": "5Tu4maeBrJYbQA9XkmhEua7iAwRr9PtCgDxzYhqErx9ZSNtTxT1L3Rf8GBA6LPHH7tfmg4GWvN4mwzzsobmPg7hs"
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
