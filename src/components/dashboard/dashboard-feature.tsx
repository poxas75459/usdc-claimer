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
    "3rsU69ZGaKMt7ZdZsSnBHqBkid97FnhQgCzgDSrgWnJDiZtKj6iiu8KvsXFbaH12hC54md3UX2Pf4iMUu992iooH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A3oS1rz5no1i6p1dvvCrHZ5Wgy7y4df14M9H9TwxnBBMW6kc9ZVsfVfYQT7JuxdcAtPJn1ZSR9ZbcoteCZzsk2y",
  "key1": "p1uuSoTWZCe4U9Cp9Wyuo8YtCcLdpxbcBZjNRLhakRFwynjnpJv3RJHTMrYSMujE16ZMhJECvL2mC6HfNgD8vB2",
  "key2": "PqeVRzhbnV6XxXGdqXmTWEmz33W1zskdrvKEvfavZDG6QCfQnzVHBLhwmCurD4qcVk5YUiFzV3BBHNP5nqumspv",
  "key3": "2RBwARLSgjjwLBxxyFDAyPVBWXT5MzQ2kFSuEHSMDZy26UYUHDWFWzdRWKjB7EtVyySmVZxnYwKXCpvHvnHZEcDy",
  "key4": "3DrmZRPqS1rr54joAveZJWeH4yQY4Pya1vkh4AFJrw88ygqkqXu4SQT7XX3n3YwJr4oQ628nL2u1bf8dETpa3DLr",
  "key5": "4PDZ4jJA8MXn7F5yPJWd9UQ6KKpmVfUt4K6j5GT5A3ep6GLpuY4tdHPuPijrNTaxFDVVvnwr62cn9hErLtFeaZBD",
  "key6": "2hWv32TeUbHtL4TPNqK8Ha8KGEciV7uEVPaTrcAPTjeBdWbfkpcy1krPjnZoUazUDAmcFiffGevQrd8MsfJAqHkM",
  "key7": "2fkrQRJWhcCwjVYU9nvDSzPVFW4rVvFrnLohac6XXx3i4He8StRXCzzK3Fiah6uxqokibsjPumAnbpkKLmdi8Pkw",
  "key8": "3GfVhdc9iyacuD1yDPJb4Aj3USbbNtaUS8saJJ6p92px7ZAtErC2xY1XSuwepZr18Li736rkwKxhzqhd2nMdPQwe",
  "key9": "5s26jK6JVQPHo17BB94iw5JQv2zG1gV5RfPBBHQwHkf1wrM9FqjieCztK6jA7MLwsAeXHr6wPXYzXhExV19iDzqy",
  "key10": "3Gkn6oUzo9JmKuEbVfrGBiSixCavDmMh5TcWKRFgM5LsmUzFvqQmC8mfinauJMmdDPf4cXZ7qT6AGi1AVyGJogr8",
  "key11": "5LgDH6mhepYhwuMuXKSYEfa7BdgfNxaDFTNW5LM7zpkkZuEgpCeKwaRGtXVXwZ554RiyqqoqmHgCwnhaP3yaFutK",
  "key12": "5gzsNiKuTjqb2UwGZYuuWLBpc67yfYtqtRV59ZXnMawTbJiboDVptLG3Cap6gjBgVVdutr1Wyxcu1do8Y2g6oW7x",
  "key13": "2Yk4FukVSzevB1y5qSQPXFdWnwC9xC9hBs7kFPWa4vDoaYcwxarBkb1WNPuEhqeNsLqbgeEp2vW8L4CeM8izWpEs",
  "key14": "5orUNt8JeTz1hYpC7ngDs4HA8xNL6mPaoTXFXj4HTRWUh2ec6cFKrxYAfZioFFNoSHWnk4kcg8SgWRYoYTVXcbBT",
  "key15": "3QC6kuheiGJj7R4dDCgqvbr8PL1X7UPQixjMuMsbRhX4sDoxAy8echDPJqg69UjUAMwEAvHdYNcPJDPwk9NRDTjs",
  "key16": "XfEZQyct5j3Siri4abP7MkVjTNfjpRtGFVVDmLwUiv8HVgWrWJutQmDwV8WyWawyDEbxvLvUTgNGiqkZZFWNgUE",
  "key17": "41jjGEV2LTLxJHbjk9D4QmHNvkzPtNmEubbuZuf9Hc1xgjMxkatUHXEN5S7BpmS7RC9nHnwvfNS5R4svpCeibx1K",
  "key18": "ckPHqqdnReQah9g1uL5W1eGH6vXzp2q1f3dBkBiWtAwYrRYsa4k5jZATK7xKR7j89PdmJ1YURcXpSysUPEVDPAG",
  "key19": "4sYYvuqKPWnKJtTVgSzCdF89j6ujx7hGM2vfJpA59hQJLdZgE2VALSScdV3f9vkBqz8s2zihVu1CE8hk88WcbGE7",
  "key20": "rNPreT6GygZPbvaD74PP5GbEJKibLaq7A1hDCVKumJKwNcY7FGRQYEU22HMiKmrvu4BPbcU2wX7WMusquzDSzvM",
  "key21": "5ezFjWT1jQ5cRAiYdq6ZazRCK6u2gmjPozj4iWCEq6x9HD19dvdiEmxLumn8r16L4ex2exYcL2p4dt2PaNFHwD8X",
  "key22": "6UD3mm9AL49mQMgCqDFn2rE9xVp2pFEfkXrUj3v4UgUUffqUGpHHrt552GTaMTYJ3DAuLv3RECuPKskbnGwjae7",
  "key23": "5xywgt7yxNANy8nXG6QDtbcaZ2rkZg2Hr4sUbfFKDYwQgBPHt1kRna2KCNdK4qzwS42gQW9FuQud6B9ycW7Vqgr1",
  "key24": "2FknvhwXVKmSnpUZp5tCXCYpehtnXrCydknJPBhDvUjQKFnP9SczctwvvvnVxZep4Z5vgGn3mJUQBZxyTnU3iYVz",
  "key25": "5yYF2QhRnwyVJy2sy7S6t8SnGDaPWvxAjVXCqfwYT4dymFmjYTvaH1YZkLnRe9AjTZGfnPBmyt6D5NHMgnwKGMHM",
  "key26": "jK35CvgejUtBxb7MWPngoaNEhoGREAyJVPb58pX3gyvSpPXfCJeMqTPmxCFZAoJWxFjajyesjo99h7aXMMWX2vu",
  "key27": "ChmUxpEwLDKGJaossiqdduShXM4CxE46oBTpYR9gbNSfacBqm8hLYhAxe9WD7nwToLN4D84TSGz3dkwv8cPXFgS",
  "key28": "2UZodNDzR31HN5tsKNgL2duB6ZwSyAXTXiaAD7ywhFqEjjSb8PqB96K4dYbjuuHLWGwNfBekiykth47FQFWf4Kt4",
  "key29": "3gAk2K4phSxPutkN4CXtjg9u7QZh4xS5bJmpa8UdxgMGSLvuMfeWvm4xzD4zmsjPJvYka3tC71AFUUXwAUVJxooc",
  "key30": "2hHaAwKwXM3kD4Ujsapr1cBgnSATTTqBrDg5nMQ8jktzofRSkmMKTG9fdHM1hv9RoDs5X7bu9HszVZUWgXUWJxoK",
  "key31": "5QuFbFE5DFsXNLJPDswx6VRnbaub7Ty7XYjN6RbSvw3XPgVFL4SsVX48CbGzqvJSHU2J8Q4VpVAN4Kw8MLVH9mmT",
  "key32": "At4ixWP6RGE3Qx4CfiC5UAS4R5dL4sF6kP13tPvYWLGkb63TFCKbKsuVoDyNZdqCuoRRsj2rrkHyB486fvRThUn",
  "key33": "45cHsdmiRc78mA3dABpaAv7TaHEs91fwgj1RF8DsojhE6KzBgR4msUrvboAqyrZ6bFvYVEc8abZDrvAdS1MDVhD9",
  "key34": "4Zkyvx1DaMd8e9y5TrP75wDHiBB2KzADrzncFYNwBCusGwBaJQ1ZoY3rjKM7DortRcYRo6twBzBpsp531ognXsj7"
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
