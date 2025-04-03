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
    "4iNpWvHPihya5nfGh8WuBSTYBZXFTbVoTQ44EJRDsckVgkndw9DmhLmxKg7H5StE7bbk43y6w1RENKVUjNQPzTX8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48ZHj6QLYEcPvVFbDS5NsPJmUtBv7s1fPiSwPcF6VDXzRypBnCkbakGRBXzcNBJZYqia2FVUyZFCDJAN8hovJsgk",
  "key1": "4Z7vCk4tHHw6iuNBXkRqopgRUKCQwTgijm2CVeQyUYNkfd3XhFDDyrgxowLJCQTASZoC4UrzVHazamMJGS3dwUkF",
  "key2": "2qf5ifXVYDogp98cj9GeMkT6iFFP7xU5jFS7M6rANNoRgdm3c8buA5K9StaAgCwBQ5nD3CQGmDnMk3JmWaKqWpsT",
  "key3": "4RD5thm1a6KEiyUhqMGEdjGUsj3B94uLtV357oiDoborrnE1CWprzYyJZsrepwgPKHCTQfAwaLM1u7skjmp9GqHX",
  "key4": "57c1PGPo6HrMUrJMba3K9Rksdqysuu47WszncgDSmHehWuYjVsjF21LkATxW6nbaccqGR3QFwPxMn9JmZUmGB1rk",
  "key5": "2PcZi5cEE9cZ8KmvNUKJZTvzg5KBWN5HUY3dy5ig6zMoMmb8Am8EojG8y9mRAZf6bCvi2cgZxGFhGBD83fp3r6PP",
  "key6": "5J23R65u4sKXXkDLHjRm9QP9veZN1rKEPAvWEbUz6UJheKmfFf1ZxAnyfVF25uc9J3VjoZwTvVQWJUZLrnB5bJWU",
  "key7": "qLVbUA7vwvQa7WY24sMMWWSFeWWtoCqj6QDcdPexSDNCsYg8aGhLzY5mH6U1UeCQLYCJUQaqPdKB1QyWJKWDpRm",
  "key8": "5HsqZHJPBoTXC8p72ATkPoE8pJDZHVBunFgEBFpLcREhqXngAHGRUn9t2w2EuiL7yUhx6Y3Yi9y7Tehd9CbCmxMQ",
  "key9": "3QgFTUR9wk5LJsdZ22SxRZPDFdVK1tYSH1X596LFNuppbPC9kvUBmfNDrLEUa87AvyfkEWxBQRMmBJqoT1SRdhL8",
  "key10": "5QEWtddRntzWmhRcihVVnEX7obhPs5iV1V5dbKuiGF5m1zUFyxmSwXivRT5QuTLVNkWU57mur6PpWBmC9bPxwSYu",
  "key11": "2XHvciXfy6mVRH1SVVJZLenkBWaR5ze8taDqzKhdqjAjeYXqJiSjKuhxGXtWsbJNgQw1J6Ctk3T3iH73N4mJU3gB",
  "key12": "2cmb374X7PGtdTA58WZT3FuvBtyZBtGXwJfbwFERu91Gj1e9MSkyoWGSLFoxV4TyLstscY33xkYQQ4KNEn1JpRf7",
  "key13": "4cLpVYP1JNgcf9KKHkAZLPJLs87Z98sH3KFaPBq8sRCCq3zuyAFngN1vJeoP1AtT467sdCcaMEwyUeEEMEpxu1Xv",
  "key14": "tu4k8teP9aZxRa1F9S77Q2F4Xn95mKTCtaPFDKWeTEH9jd2N6vi8qahB3t5omKVd5HWvv4xaUuAs1GTkNJMyHuk",
  "key15": "5fVaDKLy1QetjrhCQJNrjQfZFtTEVeWjFnbBzGmLcwyU1Y1AP6MzEVfuurtdo1ufYA3rVuAUowyTteqaSoE5BWLR",
  "key16": "7wY3CP8TicmMYp1KyXDvwjneF31oe3mN4n4CTtwbsBcsZp3h4idLNs7wqvyJLp2MYQyADxZ7LWec3yrpWF9y3x9",
  "key17": "3dNqWm595VKPZVLLC9khNwudTQe53EfAiDfcBepycTymbM2hu6rMacsCLSFpLALQeK416p5Ezi7f4QxtoFMJTS2B",
  "key18": "122HouRaNr2RUbqPz8iF3JP1QWoUVHhYuxJoC4FsZnUqXvQbBUwqqFMqjjbzKxnscpwuSmjhtgdcBzXoKXz2pS28",
  "key19": "yvmLDo3FYGhPfWmkQxDy6HQtskKuSSx79uZ1Ne4W2LfMbneQrcaUq59ashv5NpYDbshtwdYveNM9AedUiXtGxa8",
  "key20": "2vf3x9v83HusLG8MDz23mYuF9g49MzwNo326aPkrwffTMwE1XQQ7a8Fo3JsV4eE8n5guX1QSmcJhup3RWeEL9jiG",
  "key21": "2ZM6PW6hC5kRdHaZSz1QkNVK2uLhhGfUfmx6gMJoznkpbGvhxbsomrMsdrnrp5A1gj4gA4TZbMWWPNRF7fs9XWsM",
  "key22": "32jZRbqR8Mw5nY9emyQQQuzMbQ6prFwjNWYmzn8SXnMrS7Znqezq55RK1xtmrWhuzwRMA5G8JuR8wFruspCAzu3h",
  "key23": "2urh2nBjEuhTu9fPTQdbzvTMjPPiW7yR9fGTpeD3bZq7S6ddM9KFSzCSXFgy52PxnoZuaezSSbVrT4a2jf1usnmj",
  "key24": "48Epa8CYLnH1B2C1oouZT727KdDroC9G85JwdUbYYPXG74EwtMcg6vUpQAqhmRZJEFfbgwjHveUnf6QXA3SBJvRX",
  "key25": "Rp21Gs3WLpf9wfrmmQG2xQxnk2DnoPLgLRURSaveW122k9j7Hy21C9NCmRVYHQa4tAPxPCucMS2keqLW8ntr8Y6"
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
