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
    "32aLScCmiDnhUns1r2ZBmvzLRTyzS4wGDtniFmk2gPDDm9NCSeyjod57qYabcHKLD9bYP66CxPXawCU5qciGcQeH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BYtgvS1gK8RzH8HnGf13BWnw2ACvb73RGJgjKttTfa9kcJ2ki4uL6TNynpobJTK1KfH4YyYPqdw4AQwadweg9XM",
  "key1": "2eePiYKxKHzwD6eM9jahUTKBbF6ZwZXUcGmLbT265qttQAFzxfb8jA93x5uTUzUp7iqjVjrgWEMStEwFLJxoiXBj",
  "key2": "5DzHKQrpL69cTbCfuKnecgrx7hDS6UsLE47AuC5tfZNVE3DUXg6qUCX5ejb6EV5NoihQAEUJKCmZbQqnzUSw25kM",
  "key3": "2HFwhfGP7AZpQLgJcRf5Su2Ar58mJYo7YQv7Yn8R2CnN6DHL9WJi62RPh9gbAR7jE2Nj9NgzkuSc5TwaeMECkFoU",
  "key4": "4A4Xmnm1HcGdea7kAkeR7RzHJxumKk2Ngv897x5qivZdWRGptnRc7eY39gUtfd8UqEYb4255LKG5wbQvovnHZz2n",
  "key5": "43Jg34BceE5YKr4Zpi4LSiSKxLph4vcdyMFP8Bn1WpCpiBC5CoX78LgmdbnzkirBN9ruxeR2ifFta6ppw75xZ6T2",
  "key6": "4UEYsUmVuwaWERwbztBnbLvGzeC7oV2sKGg5csUzhuR9Zynkmdjo441yrUiSEQdzawDgog9Rh3hpVULotV69DmZY",
  "key7": "23KrB22jFPZvkchzeYzpNgWSJv7Jsie7BboJxB8pnRyeQFYLQTfSV39V3kbPQa49FerKTvmafwQvd7oYHStFtqCP",
  "key8": "34puksKFBNR4Zsck7JEPTQrCz1zdogKFwVsofWKoxgTp8Fi3mPLgBe5wN9TQhtBPZvXapYqtuWVbJMst13SWkiyh",
  "key9": "RnFgWjjmEvkHGUjCaWPmqdsmbpfHgwJkJ52CTPQPLbXbKtaKLgmwJkfwkmeajN64xLKFaVLpDPo4XmCjHmS57ma",
  "key10": "5wSVFXDhwBJrWtun7XrV7EHp3yP7fQi4ES4PeCC4bvbQgQ8qBVtcoMdQD21XfQvx28rgNP13CnPKbiYmrPY9JBpY",
  "key11": "2YTAoL9x2BVu5vy2AHMitivCtLX3c758okgRUoUVhXfRZZU3C4BqwxY8bsBqEVV6PrXVR1oLadPwN4XkhC1R3LhZ",
  "key12": "472qraPXg5vdUTS2UeLyuL5oRr6pU7LukxuXFi1sc3RrRFh6L3QkHovbGZBKHbaEsJ1JABMmMNR25GNmzE6daJ4X",
  "key13": "3xeuVUVpymP83X3tHVzKXYdeGZKnpFv53mayvCmR77adn9YggjnVUYDqfBcUifvmVWdX3CRU1YBejYhcCMgenqWD",
  "key14": "6b6bmu8ewT4k8foNxX6NxhSDJiMTkPu8XfTzcMtmkjRcAep5p4cnWwAj5qEjrKUqEvwebyvawvB5vSgy99pZmFS",
  "key15": "4YFLfQ3peYJyPRPWTMAsyB7QunjneQ1LPfRHjHsg42gP1jT4qHxX8uCXXDieJFHs9RmsrNHb9DmtHBGMdaRFnFJ4",
  "key16": "2yTSYL4TSFQnmkzqAw7arHynebfvFm3eeBEhFDkE42ubnuystojowrWRVF5ZFPGFMVHhf5C951z2FsZDEfh8tKMn",
  "key17": "d2LDC7RNEoyNzp9UMVkeeW2gTLzUrQttyup1w5VvSQbX7VYDQtTAB6W45j3zRqkh7Vg93w6bVZ4u3M66tEJyY2E",
  "key18": "3gLYzY1tddYBboet9KoPi1NzZTMhxEAdfd2XpLKU8ATUpKEQB7CiGY4x9VCyv5rwiFotG4KJofQBrscKxuWc2Fg9",
  "key19": "3RKoJ8S8SAnpk2XKgL7Hbyg8DhWMs2xHyARwdUPNtavyrQkEHib5XB9UfiF4KgJHnDb5oYGZ3hYHcCkYA16Ry6gd",
  "key20": "4x2EGSMa9DNqtKSTdhiUijJEtGmcgC3U7X52iLxApqPt9zM43P1YTECG7oe91JB7gCgV4QQzQGvJ7QjRu4JpjVzE",
  "key21": "2g51qE4bUzriFDC34vpAFXAhYHvX8uieVbtGcSr319PDZT2qusHhn3wY4ofuv3386pxg3KdV3x1PneQQg2DM2bf2",
  "key22": "5zfZBeZyT1Phja6YBuTTVUpenFVsfxPDRc1i3CvFffqBDSCqAs5ZpJPU1FdAkALpZz21p91pqRhSrdbhZZgcQSas",
  "key23": "5gMTxRVArMtGwFEGePczNSsRTb1UFG18FBqBCLq3wjcdQwHHgYuLja8h8Wt5jk6SVL5HRz9y965A2CQiqcK5keTp",
  "key24": "4xvAni4DdM7CWx5wBfDqw6S1zsvjYeFMDN4CxtVgAVScGntfq3E4R2ZGUywAankxbLyWXfHx3yW2Px8qesLAPQNd",
  "key25": "5EGLePpgo5Sa47unv9CYyAoZXEUbN79pir81xH9zg1DtUr9gamA7Aykz7d4yK9q9VLEvVfrwH8greSrBiMMqK8qc",
  "key26": "P1ThjZZzRCPKzHA95YdoSx8Go6x2W1rEVPLxuv4fMti8TB5esMFxJwVJdXUcFnmAVyufY1DA4YeEeZHcobpELZk",
  "key27": "3DoXgJfQzCGrpjRBSuDeNNE4Yko8yCD4Ban1NkVpNwGrse8omSSqTKSwCdVDizft6Q8hgAfbsm12Cs2KtqFjKaT2",
  "key28": "3cNsZpygaT4MopbzWKVpf9nnAk8vcM5HUwSqMaRrCu297dsfEBxEpAMCDictq4dcdFmLfGf41bK81wT3Fg8exjSX",
  "key29": "4Ej9rJqoBGhau2XfGvFdZCyqHR21fdsnqwnJqf9x7R6AXituWDkGz7WxGHPHv9Gfha6x7otV5ULhhum66jzunNzc",
  "key30": "4E7Qf2HmxWHCnXWDQFYv9yuRBEqQeudNvYTwZhwfncoTSwi4HFc83n3Rm2qtC3V5UpLpUPuRC5DHSt41LiYqnrX6",
  "key31": "5oYkSAXp78imNXEoQNVyQu1Ep11642DgWwmmc8VLaxvZJuqKUVqQKZtbmtvTocM1xGktoQzQ1U8wBAY55XWmrFzy",
  "key32": "4oW7RwuNUB6Uq7dPP7iV5HhTYfU4kcFoxWfSQnG2D2YPUdPpEgWT9ro3Wm4qr7c7EqRzD6SXoYTXgETrs6yK2xmG",
  "key33": "6AqU937z2q79hnv3j57F9Vy1ibxHocdYZDqhPrKRzcvi4MVAKq5S9ycChRTf5htpdbow1LxwXK61GSqjkZCH2Ay",
  "key34": "43FNVWNKVrzYDV9HmEh3ozEhxZWDQhGr7wfTvaCXF4FXL9ZoBDgeik3aPH1TVtp1KY5aCSw9Dyq1oPGqJrr4Excn",
  "key35": "5c8jFTJeEX88wCCfiy9VR7pFRLhTF821ki9BYns4CHaUQVeZZnGkjGXwktG96u6ATTrydkdyB3ASKVkJR2WjkTCF"
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
