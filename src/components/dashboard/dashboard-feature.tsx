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
    "3z9FFAiY8tKYY5Ni86DicBoaGfNNsVMWRNXVWpztrxi1dN4g8tdwg26r1QAkDXPffAfojggojFEqHKARwnaruiGQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HH3kXAGQXEeaTrDxkRyXvK5XgUQrXh9XggdYKjqFAh5z7rtV5RqhXwrSHEXpRAaweFPF3inKJY4FaQ4CxpWFzaZ",
  "key1": "SGEyC7VKzrcjcMTeNC15FqbJZeSFzXDT5X3dH75LVUQHvZZjmYFwNf35s8VJmjSLzHx8ikLiWKKcaWkzLD1UNGg",
  "key2": "5Ry6MKLVbgTZhr9NVbmVNXvyStBh1Axu37k8XWzWyAFFHko7hZBcN7o8UbTPJa5BZDdj6ZipbVYVpV3YYJTjGsud",
  "key3": "5aMvzsMZ7ss8oiNNyynJUy7Gs6ToXEiy5xTGwL4JSY6hNcudci2LXat5qHKZMUwEVLgaykWdpBQw23JdnR5mcsMc",
  "key4": "5s4Aj7ELinc2kGD9JkVhrgszJYC4gw29xVsGqPppXruLLDJBQg4QpWR5wKkFH8GaWJxkAuraFgxB83dxsmARGe2r",
  "key5": "5hfZhxgh2LLeGcfkx6SHxxhc5GDVFZfkpNCEjzNaSeMXuUGVjwtwQvrFBYySi9y2yP3Nh7jEtfKYWpdBYEzUT42P",
  "key6": "5pdh3BEQEad7tN5mo7aHZ61itC1JQNNP34n1B93hEFKXEWWfvTf7GP4dkUsvBVZApXm9vS3avTnKiTgoCAchL2Vd",
  "key7": "3vVNpERbcXPQE6EGc6dUg81yeHuCREmPt5NA8LmQYhysGNSQHd71DUxwsXsuHDhMXD7puJwB2R99gDqoyTyK5WDk",
  "key8": "79A6xZ96aueP7zGJnzoSEpSXUBZ7phjoodFAvtY5cYt13kheiq1iXWC3Utd3mHkSob6iPcuAg15UwSoxECD6ERm",
  "key9": "5uxh9U1ighp2NptXj7W7cepz36sTUmpp1HZ6WDEiKZbjhdshpyNVAHYtSfcdwZtnjgiN2nRGdHEFSdvawLh3sjE4",
  "key10": "5B44VE5VFjRBGsn8tiWKKSV8g5aMW2ZWJmXz56c5QDvpsgYAWDpcw35QCAz9wqKvoAQGS47zVhXrHoCyFsnYmtvs",
  "key11": "w8WTyQMUxFr7eRzm1UeJxzcc1gLvY8cqjtTvR6jMx3Z2Ltf9DknpW9eEbJphNMPpNpBvWJKTUfbMqAA1KMSopNB",
  "key12": "oWXmqkXgh7Mwu7DppPp87QvWj2CjMRt6FrVdkX7F5xW94uiKLvy5U2BT19BEzm1EgaKoKtjfwVroK9qF82vNVs7",
  "key13": "5BZdbUQGX72ehdH5WQYPnahUPyit7eM8VNwRvhgbo4cCFgk6cm3Bj2CLmQGZorgUV6SMGJPpvjtzoNdXkt7KF8Qj",
  "key14": "5h6KycEiVz6DUGLEbk6Eatw5n1471EmLW4gBywmFrmzkpxjcvxPLZ9s4BH1SF5KbFqJHJzUJudK3RUnLNuTm7hBQ",
  "key15": "3Xn2ZkNKUQ164Xxrs4khL5XNjirWZp748QGDoCwt4YTz1duEAhF9EhyvWNVgLaAxLFMVGSkcpDCXePmSpEAQVxuY",
  "key16": "56qNd4WButDfxiB7gMRVWnpwt4kpogWjS2B2pgzAwZz9SgpGZdD4p9vbpmqVLSfAsagMrw9vX13YsPfttEJ1rNf3",
  "key17": "PYXsLG5eVB6KT16udUp2g4N8io8vp9zqNCN9Vd8czZSHAtkMf9NMV82WpgHYTvhCB7KXFp1cf99USWZ3Q5zbgSc",
  "key18": "4aXREuWRvPusrDhzdaFUJ25HgH3G1YpkLq5nqWnZYRWJTwnWkxLaeiw87SP3e5wbdYFZf2PmczFV3kE5Sh43ikoj",
  "key19": "5RshpfY6M3VbYjj5y4wyV2uZrnUoyfHEuNorzxwDtBfVa224GGhtuPZnmQMXga5rpBCzs7myD1ZmXD3d78vBkbet",
  "key20": "66vhQdNSv9hr3HbM93W3zTX7GevXohf9uhWuW9ndDbvo2b97WZc8oPwCmtAbLS5FHAoRW1fxwot89qLpfos5gREE",
  "key21": "58KmXCgJ66RD6UiRe9Pjm43MYBfjErma3minUhHUPgWQQ9HBhWukGHx66ZMFA1iSgUQHEA58w3YJvYPxG28v76uy",
  "key22": "2LvK4vRsASZeL7JoC2LpAAradTPGaPD7sjZV3SNJXnP1Ksh3a4p3xoGJmu4NaDf2S3KhUEQ3TqnZ5nLxsn9xbxcy",
  "key23": "58gyapFWv4BV8ZGwxvC7eyFZpUpo3mDAwVY4MdhDayWX1dfnsZbv3rZK2roJ9spqXHdq41iNbC3ea5S2DwhMtXfi",
  "key24": "3FkYeyUPUgMVfneY4MBVBZwjBKmhztvCsbAZHTE3EJGyM6DER4NidSGywSf4sVkLsKQbcA68Mk1E8rh4kY8EjJYC",
  "key25": "4NYtwXZsh6xNm3nkgy41JAyh8gGfEqUpaptNQK1DBc4m2Uz8G4Zpo3xdbpsouRfd8xWnMsLfAkSxKCA4cnB89WMy"
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
