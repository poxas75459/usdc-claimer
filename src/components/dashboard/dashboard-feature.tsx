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
    "5RQz9WkuaGwKnJzgKJPGyshcMMowJWaMxyXsiz8mFU5c89KAzKvWJSgWZ4Jtg8avoHdUSoDnGDSq9hMM85Edr8kY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kWNcioyiFbARZaCAfBszPgUejoFTDonyuKJSvCiqsYPgy4DdKvnuYP4WqRtYgqEcRQmWW82Av1rN1qYSq7WGVyq",
  "key1": "5JBR4V4syNwkRFTYQ1x2KDoEe8qj9Z1yukb7gjwFamQ8WXvXvGaGGRgW7buS81BuWrRzvNmkpH3LdbYkSDEKshKu",
  "key2": "4JAi3RCe9sDcooNjMrMy42kS886HvBvvQxn2wFW1B8v9sdzVWHuVSKbvMANHQS24HTYF3BjZEHbZAyHtEUp7Eb6a",
  "key3": "k9jF4visyRj7CjwBQjCJdYgUJFfDaf4M1jzUEcyMH99AkqE1fabfd5aMGsVfSZ33m2cHidgcgGmpodUvadTR9J3",
  "key4": "5nb7ZKR2K7EESHBTrFhyt2wPZE1i1zUm11TQqNuCcXDbayvp7xXj1mcPcrTDvrxmFWqce7YwCGoXerWSBom4H9C",
  "key5": "2ihypS2cK4oSfrTeyiktiynVvQzrMyhDiJZs31D3asBSusSKtnXXmrGun2otAeBjKfNaAtUULWZP6Rpt6aYwbSJf",
  "key6": "3Ya91Y9yqLv2zadrykw2fkXAEHm8tdFD1FHh3p75bo2YJsnBK4S4uR8jkUX6ggE1nsCcB5Y4JNKEc441Qm7uyssb",
  "key7": "4pv338xiy9xZXFqMm6YtZ7K3bRvGaP44Bs3Xy2fhB2wvdkcahqQ5TUj3ghGL8fXbyBVMWXRLch6C3yMpySGQBdQV",
  "key8": "2YoL2RbeyWNiEnYmsGdbzYaBci5GiateaHj89LA7XBj1wBgjJqat5VbEw6W9X3HmT7AoSsXaiHXTm5YpNCaapQ7v",
  "key9": "3teuMu2g2nkQErpPX2shn3LTTKt1nqDuMJjdXEB9VF4cWVJSn2kgsMarr4WGxu7Qx5BvZ2Knbm1zC7LFRFNKMJff",
  "key10": "3aECiukQHWRWJQLv4YgwjTwLaW6Eo2PtNkFtgRxJyQ6f8eVQnEz5y7eaoyFMxcTJAU1zRLyUB9W3KX1sHj7VFikG",
  "key11": "4AtmcUY9XmEV3f9MGUTGH2KmymWitTydrmZd9ZGJae32XvPSt9NFfd375eUuNWULoSCBHMzyp54mz4QtLP51zRFi",
  "key12": "5DkvNiU765sSn1JseVHvLa8uwZsrkFhwdUzjgucBRijbWHYCVtN1idCS6tYvh7yQFvQecfBFVJ2i4xXzcaXA1mpy",
  "key13": "123PHTM9hZwNekbsaH9QY8x7bbnDaiMuKYuikxPfMjaru4VgBAJWFWUwrH3pVdtmEh6fRuzJjXb8wNetUGJY6qgC",
  "key14": "38HJFWmHdpe4crdrqbhsmsKiy819sm1vhAHQtPGbz1V39YpM6W4zvcgQuhXcLAGPie24LUmbBPG4swgop1LTBu7C",
  "key15": "4Xw3mgPxMaFARYSjGwoSUgFJfLBopL5GYqYC7F6T2o3ivaXLGXybbiw1URhNAXHx4CJKjARU9cL6NgZsCdhja3ur",
  "key16": "25YCdReYmj8vhCJNyg3bvzGL1GZCVo7DmAX74DXtqCwG6EuynEJfQ65nKZhPLzCdCnsKVCPAn2HM6YDLrkaUdAJ2",
  "key17": "kVh5nML4RKkQXkJHpbi1h2D6skFdF8c9da84CC6JbWB13c4EA2tfTuLzGLQzRofujGqokjHiMa3GDsjcZW8FL15",
  "key18": "22RajKBx8Zf1C2JiYzjH4FLVv8o5xEKe2a6c5vVPRxqoLuZxM9e7L8PKNodyjUBYUPnCLTwyvxyDUGQsFU7wAzky",
  "key19": "64kucnR9hgmaG7ctGNPfg62yNWQwDMtso9RveDQMoX3zYeAgyUSqNW2oa6UKjUpVxstcNAjd6PX3dLMMPMLm43hi",
  "key20": "5icR2h6WazLfXYZJySMKbDWZ64EWv7jYa66HYQCx3XdMRrJHQ8m8XQ8iKpGM7n5HZgmCL3pEnT6ReB17pAz1fLCW",
  "key21": "21f9auDmaWM4ktgqR9MK1TWXifGadj9WHecTTu86kndM1vJScW7Dbbux1CnE4qCGA1ysL18t6E1uGKaKBmsGKG2X",
  "key22": "4MqXqjBHmnLHxA5htrXyp8FhtNcpg3DKNeSQK3CzFYQNdSCnZ7g85EZsMDn1fBH9LJQeQo5VdfuxZFuYUx3sjJsK",
  "key23": "47oKfkZqXmKycixgAXFRkj5BwZ164GtZZr2MzXqTTrSaZdrZpukTCWakwH8LCcsbNB1FS35NdxMyqdKVeZeMrFwX",
  "key24": "5dchz5q11Weg8F9NyWi961dgymiuAZfPcD5KLYwDH4pA2DVBwi5boxmQvHWcETjmN8zXt5mwUyayamBABnuMExTw"
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
