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
    "4LW1ttvFFq7e4YqFF1Ca7SHhiJPo48PBZGdV71LRZ98S4dWxCiu5vRdSXaHo5NZz9SrC2Xb1sHViRwyizEkHPZSr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G7fLLDjXpn19pxhuRVsdeuHMm8cRRgXHzZgnc24FS7A9bEk7X4HNKyupXYYmHpQYGgMy5oSg2sk9mrAuwf7G2GV",
  "key1": "icFjvF2zpuQvnUSdAhWV56rZUCSrewZ5MJQYdhEbhtouPmWWBSwuzExUXipekEiuX4f4XriwWWoKcVSWcYv5nPD",
  "key2": "3sNvyjaGJ7Ra5ya9kCPsHbvbJ7HLLSpw5V1V1Y9icLLKrCBy1obigGCPx1RLxfFupXWvqigJDZTcWd6Y1CUdMb5g",
  "key3": "3EHKURVC492bar3z6v8cRpiTAWiYijJpnFTBvBVJcJxvLS5kkn28kq7Ziyeo7joqP5RrjQsDpWawn75AsitwuEod",
  "key4": "28M27Guh3aWm83tGdP8FPTHZWNRmEtvcX1n6LzFM8cNskemZYZDY8SL9fvvqXdi8emefkFmYouLz4DhWxzNg7Cbt",
  "key5": "3ssM5TiLLHMzSmLCHXpvT79fvQsvCLa3FNheD9vWWDL5Y1jiMHV2nVEfsvSepqNwLYgsdYZpqQXL4yf7q413nAHv",
  "key6": "4uWYNBhGa3fQgyMDtp2DLoUWyJkuzWtWbQe96Ge9wum3wJJqWcoDmbwecELS16GjsXoNGL1VU4dgb1zCxJTrrgxu",
  "key7": "NwvmNkxQrudHzzX1n1UAhfydahtEjJcA5ACq3oHQ8JcFHBDdqzWcc85BfsDL1FjE1GTUfYdbCzfmsJqc96KVbEq",
  "key8": "5uCmVTNpNkXwXgcoU3BkyDyubt7TxVEEEeiTV5TMcKJ4iftgyy9T9Tj3cJvgdsrA6N8o6dDxA4NqaQgboEX3QJVf",
  "key9": "5xqXSQrAX4kNsQ7MEx1CJEfRcECNvX3k1XJojjXkuVH5bxLp9NV59ijFGZFPjeCbyEu6swEKqRitUN6CDKotTsrs",
  "key10": "3RfuWcbfr5TH57xMnhdWezfbYsqZmcJGBnsJgjLXExXcmJdMJSqpyDCMagLK5PirPikxL8G7CF5Qto8GJyLVSKuW",
  "key11": "3MqqNQ7QMgi2amVHj4ED2Fn5C2coUMLc7x3sJTTfy44CuFWF5EjbJWy5HiiLNLb6K4GwtHdh5dT35zApGeSawjwA",
  "key12": "4rKwbFShYkiJyGXe38kbWXXKn5Xs5QCyxCsiyDVvdyiew9KMxkudesofRxCAQUtGLgeAAiZF6brqvx4kkNYFT9pM",
  "key13": "3T36b1HZhpKNLewYY2qwWArB6zKJq48HKkxTP6pzrmFRMWzCVbNMdhvWkKk19ku4aNQiep9C9k7bjvBAPJZv8ywq",
  "key14": "51U1PN1hx7HKLy1D7mtKp1ndT6ykLTha6ycYPgJ75NgHE9K4PYeWGxD75B8VfNA6uZDpSBm8oAbsckbTbGcKqUdV",
  "key15": "4jC8Tki4ixkPSruSYX4mYCtbsTrfF5c3z5xsJmMB7ukTba8jofBoGWmULhHPRfapzCfpMK3o9Hzq7jzBfxoE6D2b",
  "key16": "2BVMZKrugD1EKoTKJRJu6Byw3capntqmvN9Q9hRWibxhthonjbVcWNEmb3NK7MuoitJNBtgHe7sDSNjb3MUxX4dv",
  "key17": "5CxKmimByZbb29jfnDatjXqrmviE34sXQVY3i53ywstNuyoxrcgWa2xMoMhXPBWZkgGDuFfXSmP9mAwW1sehQzjx",
  "key18": "4TP68T69pVo7W6up7Pqxh1UwawCgchk3keUWprgZvMiewpMtExNzsG4TT4QbpzQ7TpkHZPbtHcVorj7Ys7kZu7ZQ",
  "key19": "BasycrUqtA5WrY3vNeMCXuXDKUh74D1iA1mAs6X3icpWrAXwmNvtgqqTauKsRyocTrvuNjTkPfcSTWDZ5RnrCnm",
  "key20": "KmtqddoEoW6MWLBPybYHGmtdeiPSwTXoYk2ev33whXRxjAczmGwj4prirfL1gUFdW1KZjEg2m8oaVgLNXUPXu1P",
  "key21": "61kGB7p1E6NgzcurDSdX644rBMRFc3CZ9pGxF8LMuVUMyCXLXT7GZnuHcm3rE1sLnRoGoyunaWPh2iPjzwzE5rcQ",
  "key22": "2y1bhyD6p8SPC47mgej8GB4VVaeULAE5Nkg53t3FsUnkRZTR8eTSqrfGrHGSjjxnH1apWtHQzMaJYVC7Cp6k7PYA",
  "key23": "5D5VUq4iykim8eMTScJiSp8v15pad3yrPJwVx3hLLDEyFzyN2BpLwSHAV7xQ7xLTkTzGyUxDA8gixAkSNxtY9x3f",
  "key24": "5GeiPUDcL2geEXnpkDebAnddjPVgcToBjoudqMrgmaNcnJaWgdV3ZC9hhaJeZ7vYtzRBN4giUfQB6mGj7CHJWBTd",
  "key25": "x2pLLWdC8Dy5taci795h6PGTNXshpX1X7ApRnKXuckgRQtqwQgoyNeqt9rM9SHNB9L7MdxbR6RuVrQd4woenbdJ",
  "key26": "21QanhPamkvbBJE7Gj8XnkSi1zQqVT1WJm1KaqALfxcSxa6upnKRdM9QPX33MPmoFg3eqBz8qLYSbYebZTYE2Xug",
  "key27": "2vXcBCsdo7PA2MsirJfcwNYQ8dyAFBCwW86XQWLPhUe3LvrQiGZ9xhGz8RiRuFQhJxJBnzFfkArMMgCWsNEQFCcs"
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
