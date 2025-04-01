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
    "58iUnk9G5eqnsvzJoERuyM9LVUyYGDkL53BNbvxYPv3bevsaHWBXpi2GToHv4vadyGmX7ZPHV1N85RrpnzhF6u6k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dq8U12qrMy2dQnQePYHa7oBTZBB18gW8AVxUeztj71iMJU4NhQhtoZ6uJqnoSsDRiaaMwTEZF9sTX7SMJD2vu2u",
  "key1": "5aGCAu5Bn5gjdMgwdCtMc9a4T3RcBgLyETgvDuFJ8wNtJ5VsNShzb5R9WA767b9uuzr5r1HKkNZJkQy3HDEbZZSv",
  "key2": "66gYhVB6m7aL8ituzgLM5b1NGkwkfH4kgnzkGRgqzDxvxt43pByniuqH3wvHHxhoRycFdmCJ2QZkRDX6gJgLwypE",
  "key3": "DBWff1jCKRM74vZtCqXwdCiHNQRZcFeRDAEq3GoKyoVam3kuBhwUQkM1SBk3qWvLj459P6us4RymFxvsnp1aBAr",
  "key4": "4xTPQwGVuDnJ4e7d7VGgVEjmjUnkz637S9adrdQSw9FQgA3tPrB8xroXhMsc3rKz71RQkN8BWCNZ2RLHTACmTPm8",
  "key5": "64cQxkTPFCfH29G5k4qgn2X2XoKGNAe653afVwx3BNXLpBVQ4jUdZAGXA5EtCzq9BW33ZWjUN5MnCCXyJgADq86L",
  "key6": "5dei113bLpLKcuZwKLn5XT2BgQsZRiK8BGG14cumw38AJ7H1QssKQnDV5snH2PVooeNheahbPC14JtvkerhaWXTo",
  "key7": "JWZBy5dJkrrk1vNb64Zx5Ee8WrskCykDREcZyvx2DeotJr2JCyPczNvYoa67d4c82iEmEQDJ2BVCrSFXpY47Sdk",
  "key8": "2BdUEEBnEhN95ycA4T3ixKozHXnCZa428u9wsXiJTxBAkqvgb8i9DLss5Rm36yk4Vo118gQQKTVC5pFkifP1UnNn",
  "key9": "4e3Cf3AMbGQP4fpiuZU1EwRzDCvw113L8Up8LBhPnkJvyZsW1ofRfGV4oBBXvoSNX8o4C9RmfcS3AvJGc6qqAtbJ",
  "key10": "2kJ1q86QXRPTRisC9MWf5FoE5cf9sWNc4MARcyKvGuQsfQL8vxwcPFFqgvMqAD31d5qxKF61RD5MQ3KYVTMecuqq",
  "key11": "3JvPdXBXotrTCLBsbAn4HpdMyQu9DiHcYFQCTjdK4pz6eJsCd7i3jgcoTe1CJQMikopTuBz8sDb5gHpCyRgyCo33",
  "key12": "5T2itWhShd3Lyz42RxvWnEmYgDKNQ6L9TkTgBtzXspdpmkG47jGBG63zSn5r6fQ9X9XhZdjj66rW6YXfzMNZoqFF",
  "key13": "2eDy8GKNT1zTwb4xCymYZWwpgVLvRqB2Foef2MpYJFaEkjhuawM5iKSJAvZA3JsZLBU3FZcXYxxifkXm6iv45APe",
  "key14": "2sqV4b8GUPY9knoY3dcqTFgg7EgJGhyp1Pju1f3bxRjM3b6TpDJWWCqscvvZyc9BXWF5nd2ufqYYGAe8yYz64KyH",
  "key15": "CBtjmK3SW5HXKFx3aKrUwJCYWp47kjLZzth7DYL9Gykr2xXcypZeVUxFPshvR9jKBdZdJtML6kKij1HVU5MFSNC",
  "key16": "2d77SFdp78iDGtZcCzm7wP5rhCsBT9YDKhaKGud4djXFWAYv6B6i42e2sV1uZbbtoRsvQRdR6ZKuS9C4CbYorK4",
  "key17": "2QA2udw8oQCZFGq3SsPkzXDeXonvMGgYN8HQ9x1qs5ep4Hi64oxGetoHkJ3pETZHXjrf9x7s16btEr4Pp6JWfnuo",
  "key18": "2Qv1sP6fH4XvHt4wXB9WTkRhRwEHvu7Wxu8CE4h3BjCN8oK4CFdNHyKZmz99WvCHur1KdnKbVarTKtw2a2iw3ca2",
  "key19": "CKWLdV1V2JaRZiUniMBkiNS6gCoAhCgaNJVQn1YVh16hHvAsLjzgJMzNW6uvVUgSH1BD5X4Ua2aVC98aMAgReVQ",
  "key20": "62YRJjPzPFjdr11ACxM45qxie8QZ7QpEt3g977M8BJXY2YPjzd2sjbJrQvmGQ1QgUmjHGNLFwRRxnKuJ7N4eX7yu",
  "key21": "671SnUvdaSCB4xqFsP1gZYbqJYBLy5cweuyPGDwSXqsVRh4C371noBoyTLz8mA9nrG1v1ozUTL8HA7FffpqUdC4i",
  "key22": "44Q7zELgwWsn9tJWZZfb5zsxeZzAGJVqiqQwTdyP36TogCADNDrNgNnwN75qUyRaa3zErHpWxXwwNYgV21dP6JfG",
  "key23": "5twFkKtXq5eaiQpgjHzwh2YQpzNegWkMaRMDM5r5nU2radCXntmRXS9RmJAssYfMdCr8ACF669uPtN915UfkhRSE",
  "key24": "4456Kzw1ZrmMjxz6GkBC6Nfg1cWYR4Hk6d8ArqzyErftZmWfo9jaeXC5pfbgQceK52Ls1Vysji92oXGtj6gEdi5K",
  "key25": "27547qK7qBExHD7eQb1wRvikEWeXDXjRGR3J9ZMuxMRVdz1bHpP29nXYSkMhh2aABQotamZ2L6eQWZrKT1RFPHzh",
  "key26": "49iGowNLSZiQWQupM8eksV4JxyoGLckKuMsVKA8JZGGeKmBgxaXZ45uWhimb1XYTLiroZzhdeHkbue5WMFAbxRAr",
  "key27": "ttEpdDhsC5L4mDmynMoBo79cmEWDW9USyt7Ue12keTXJarZgX1rW82LW8tHe1oFF6bXmSdvgovjZfx4RsZKe8jL"
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
