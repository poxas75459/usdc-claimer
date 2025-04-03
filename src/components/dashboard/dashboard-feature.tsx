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
    "5NUmRBpeQRBKNatb9w8Xy2Xv9273E3R7yk8GkvVRAhqcE3GWaSuWXJ1AqSqqR1JuyV9gCwyEzrSoSoGKa9gzvLC7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GYkFQxm9jtHagq89nihKRYNHsrqZK48QtNiGF5WkFkb2qmXXcQ3Bo2K33KAhuYpFdjnUEmwVUTUdAvkwEfhuJLj",
  "key1": "2Ze6CbqsNpqkMPTmHv8dat5ZS7wzu8pFeNLDPaisRcfshQWFJSodPT11M9JAa9BYZzBht72FeXzdHcXebSXRAaRR",
  "key2": "4Z7dvpyVwg7aAuP8VL1efLYvbQpXQjjgHjBiSV2wJzURRcqxBXUiTKKaaeqPuH5wqw2URN97rCuCHrYFofVKrrrs",
  "key3": "jph7S6wciZKb4dh6M5gcTS36BRTXpee5TonWZUnMUYjYio6R8Q9eP2KxVy92EJmsqkMtkPkASsqMmAKsiRNvhtS",
  "key4": "3QYptUMzvf55rR75HSrGayV8FtK8iqqkDJfk6kYXveF2hMoatKeWMYSHTS5CDLmzh82Rkv2SMxbCznoXkejTRDh7",
  "key5": "3aEqj5cuXHL7M1KiS7RLmtgacbRGLm8zJVEwdEwzBgppRkufXaRf86yRsHhFHZkh3UqKtqkBKL5r5iko8PrFeiiK",
  "key6": "gZvS91VwCG94jkq2CDmkb9ZEp8G9nQ6qTtGuL1gSdLVXKKA4aKyyNUGGXP3vECSoXYv8q4MfHzcQPjq8j9rotPn",
  "key7": "2CBnPBmZsiwdJzhfSBfQCdBQWazKi3WCA45SYedM4zdBdN5Dw4gjjYAYvG4x3Vqxg8SyxrUEB85DSxQbd7pEAJ8W",
  "key8": "29HAByksydZMaaHCV433hdtyUY9VZpHbXrJDnHwMW8YmuJ1w7KaijmniBhdoaYT6Rtp6K5cCYvsx6LU6JvqfXcik",
  "key9": "29Np9axWYSGTo1396BrzWXY4oZ88y6yiHKaCZWSyurDLqVSj1MHD3m2uuJyUGosydRPhRk5Q2Futa5V3K8bPTJNJ",
  "key10": "hwt33h8ynfFbWvJorQsNmUXeATC4gfSNpqbdiU8TXw8pdCJmtr5syKQajFHQjztjWcx5BUC1ZYuyn3sZSXmde8a",
  "key11": "5ejEhaYk1Pqy6aqf7WejyXAuwoBNC1kCgf8BeVDwYihHNEYQF5DE7RWNutwS34Uhx88FJn3345SdHitZY4buhT93",
  "key12": "3cbLnG5qhHh9QjYnP4yVja9LXYBtUbiKGnyipw1WcKwNBfqyvgzHCj1kLumonXpxwMgR7S19hEWvxXrPRyZLYqpS",
  "key13": "3KyYVy6C7v2TPd2pFMExzVpQLHbbMkeoR44fy7TAzZDPjtU6AighsyaGwPLYZ9hvzCKYKy3yoLjLXNCASqA7zQE4",
  "key14": "2iEXU6LaWTyWPsh1nbBg9tWdn3c2QYQ24yPFNPQpVS6rscCA6bw9rPHPr3vqeH3t9KeJSnyXaPjGaAybhXqUWbVn",
  "key15": "2koDFRJHTcB3f9jVzjjN7QHULxPD7wLwLrWB7RwKeVXwcxCW79wMWFAcsE1KKbDFceMa189SjQH7vJ17aoa87hee",
  "key16": "5gUBnJUX88LiFwr4Xm1K7ixgkxLxNaJ1nrhazaxuBDWYAwvuuqZkdT1EnjJtZAv6WnsvscNpcUVaUzpHpuqAwoRM",
  "key17": "2qDWhBdYDq8hzVaHzM31YFWRqAwbbUKv5bS5QHzarXPEZaBEdF7NSLoALbtBAnMM4cNLASxmMuAb3tqtGwqMxsni",
  "key18": "2JhAeUYRBeS9TzuLcgshCvVcUQ7W3gmETJLN3iv7UbnCyY4DcBZuEzsTRL9P4onXKWacvMGp1vtQUjYE2ZDLC4mj",
  "key19": "8XqxMPrZTjPZ5fLGLjDZ16QQPehmVjo8r7PxXxcWqEEYVyL7B7JDyU74WzviB5utN1kpk9yV883nJHsp5RimV3f",
  "key20": "2hEUbxqY83Kub5xLuEtRYLp3zctySZzfkpHNiW1k4WRk5syWzQdcP1QCV3CkHbtLTRVZvsMhje7U7okiqTZHWncH",
  "key21": "4b55SRNBpuiA2rt9AtydYZTuFGnsZQMRkB57YQ3ZCjc6VsyQs4oYH3VKjEmYNUEzsh8NiVLoxthy1QKvdVdbgehA",
  "key22": "b6ur6DUaGdehQPNK6UrZGRyenWgsjftj7ktLAxLtSi1kwUhcQwGcFeiFHMCeE36Qn1gykVahpcNcDdn7EfSCotP",
  "key23": "5PFJExoRx4n2tRQagNCMybjrFbJg7DYGwz7WcwFfJuUGXWK4N6U2FQgxfY2cbNjnnMebQ9ENw25MYkfXygRj6WWS",
  "key24": "41F59VL7RCM5FuwtiimYpYmoQE6bS8j2KqjyAjaAjvW7smzNed8ovfcYzS2MapmdPeiWsszgvwNkoXW2Ag7mV6vf",
  "key25": "4LrCHXbWCTXszn3B6Gf6Zwynqa83wUZXYezNeRaoA845AjXzaAryf1oXwsN99S8bPg47XJPbTLxDAarDS3CPU95D",
  "key26": "AQRJGv4HLPDLfVqJQifT1NzpQGdLwHwJTccs5h5QpyjGkMBS8qDs3YGKS8tCUePrs1xSLnsPdsuEdDotPzbu3iZ",
  "key27": "3d1SqeyfDrBYwb9HFWYkW59hNQoKqSJ7yUMYXTS2m3EmZMeg8DRJ9tW177rqnVvwXhLAvZG1Q1wXEb8zzsi8osRZ",
  "key28": "2ezqSxGQvvS7Dzx4i6k7z1CJDSRWs9HCtQZF8Vs69bQkuANNKLjxrEfgMBH273aMmVJ5Z4BdTKvJXNM4gmPvSy5d",
  "key29": "qvTjRR6YC92FCxCgVU1qr4yVLQHSeXwDd8BfxVceeGmUF1yzQA9WTzeL3hKuGYxEBbv7BfBK74UUNDn8kCjmHGp",
  "key30": "4PPjnNj6CrBaiccfouzxQtFkMWeRwaN5qFNJPNq5MAX5snBoqiXB9TJHcjY37kLHxCz9868K5AWHzrBQmEc1bdKR"
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
