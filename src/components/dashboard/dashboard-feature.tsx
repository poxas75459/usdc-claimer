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
    "w42G4c6Tuc9KqGVUsLoYe6dESykLkJtrTVyfZTAK5oP87guwpbLroF6bn2QUeXMeEYTcKw9aDPREK4n4vYWas1Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36WZxaFE9dsNfPCRA7mHCoiGAh4WTEcqY4SBbWSoCLT1UTE6eoRgdSEsyWABfGS6GbnLEt56g9hcX1QbAXP5emn4",
  "key1": "4JasbcYq68HEZL47q18oAPCkG2h9z8DrcXsJBL3VvDwnZKjBy6SeTLdXjaCZi5zVH4FFEuvbQ2G7pnQe4qgmJsvt",
  "key2": "kbaEApDqWEcwkDJS8FgLCGdKQc6Na6zfZ5865BeL2URNJEgPoiFJbpNGzLiP32JTQnB9cjwWGvRdntszFjYEaa8",
  "key3": "CEv89mGXqwnZqTPopA5Cyeb5PGJ4rmwkqaea1q18fxSw2qRpHZAUXf8mPt7dsfoBhp7hwJWw6XPZ6vzPE5PKxKY",
  "key4": "2fa9f2t7LKEP5EJN8QMvatUbsUXusZH5i6eCBe6w9T1RnPR1NJVt7SQi1SyQssLVHtfr2GeNdXg1VKH83iRLB8iM",
  "key5": "2XwCsfey4Ls4xJFNTWnQqoFbosSaggpjK1mw3K3Qto6FWREd7N6aa4gZNNARMXi4fAjEKBnhPFddAKa41RiqeJL1",
  "key6": "3dUbtigSr2FgR92D239gR9qZDYh6wfpXxZ9dFViLN3KqJPxfKESLq21LuhU8i9zYqKRBjXZ8gjiSFC3nokdDVPpg",
  "key7": "5KJsShQ8EdBcWf3CqxgByC8VG3RMiFVcTtfPGsQsJNUYZvh8uw6Kgjd4JabKZXDgBm9j2MgyMqjDmkR6Am4eZNCq",
  "key8": "2tqVR3ZUMUjugSJ5mRiUJboZ9CA5sqU5CPYXkj6g57wvqRcNLmEuAJD1RZBB8LYTDffwWcMcxVMXPt7BEu2XMNZ",
  "key9": "31eXyWzEsG6zBHtbYPEsBnyMEAT4bb5xRuWwbcwr9AokNvUScG9froUbrPbNXFbGSUF5iFF4sxPLBERkjn39S5iW",
  "key10": "5b6ai1414Env59dzLWdeYBV2bYsMSeEEyxTW3bmJEoQNRuDV2Cp5aCja6CK18ievZve9W5rRvsWxD1AWXcqEwRAQ",
  "key11": "3BA9C3gu72Zh2UgH1QDWTVq3GxkhHNSqcZc4zUGVrQXsPC81zBsr8u8wqAr9Qu54v2TXyZs8XQpQF56gfkoisGsE",
  "key12": "2R2Vowk3NHNz2aYkgchMdVrr5vhsVrDhgm8t3g5g8cypJsu9LoBdK8jf4dULR2GEzoBqHMyCD7WKkT6psZodaBDE",
  "key13": "5eRzBVPkz535TeeUZttHLFwQtCDJkEB42CneZCNnko9mCP6hxAhYhC94bnxyMhaPV9SCDyZKuHkbKNh8x14yxHru",
  "key14": "2mTyjm1KcM9D5VaZb8GPHh6Sra3f4cFTpMSXevP9R1RnCj661MeKiAozhoMQoQRstp31EwuFGiJNMTXEKzEAk4Pu",
  "key15": "4ALUTXfXwyJLS4WW7D7kCeuNpUsdeoYzvLhJnfdykqaSmWNkRac1k51K4eEcNsHJqLvACApGL2cDBeXR7fW2VP2q",
  "key16": "3Yc2eCBnAjbbGYgVrRQro4Qj4kanoYcbW5kDzR8ry1ANCSu7ZfrX7rFFzMSqoXtRUixAC237J4nJrWPC87vYiQVh",
  "key17": "2Gtcp9DwtRg4x87g8tGTyPEJf6aDvvNCo4qiRFCQkKnnpDdaQjhm8rztjCWpgYzUieyUxFwZmnr9YaxdSJYkCyfE",
  "key18": "eFjc1Q7yRfBMTMhTu6qDQ83azZzgUoV93MohCHEs6uFrKaiaM3Tctn8Mw32LqretKe7Esy1AxcNJVgSj5J82bLs",
  "key19": "3dgkPpB85oi9QuorBjGBHoQ9ZFm4Ndc8HK6bQciaTb2XFFTDH8UdVmHcRkhFxXfTPQJtbp5XL5RvrxRUP9ZEBBrm",
  "key20": "2LFum9JvnonawCuHAnWCAKQkQs172dy859JwC1PestiUVNTBX2D28Qq2hei4G3d8vHaz3phtdt8Xiu3Tgzma1tcc",
  "key21": "49jbLGu3F1H1T3A9cjCuvHXgzk7jXa83rLxAF7uN3VZvB91X7aVquoMuy2fDWE8w2Pbu9Hbo8e27ksYKpT3GxfFx",
  "key22": "312MbgenrHJGYR178fWX1nWrvk7vzU11p8Rr8W3UrAi8ctWhCEWjAVxrJB1NX31b1VMov3fgaQoGpPcKuRghjTJ4",
  "key23": "3nMpAYqpCuDurgRk63KxzYxUjQuDiBsjuMGUFdRB8Ywb4wYHHnM4EuEz227tNDcSNoUPBPZusKEjvyrDFRVrXf68",
  "key24": "2FNDfconEk3tLZC95SEwh1CtXvXX2kBUxR6jpY6wgLj5wQjUn5XaUp2nVHLRvh8o3vwyupFzHirY4F5RD64GHnq8",
  "key25": "31BJqhZL7pgoDfgRj7CH2P9zBD6wcnyXNvQ2AaYYFgvBQPkvsvnDRtFuTAQSrWvJhdjkKTFaE7NqHG66gr5My1JE",
  "key26": "96fQ3MQdsuAy4pngqK9jPJAvVujFc19k39uKXUWnBb8YJDoYoaYD23NvtjG19ATsgpFtnWamz8oewMygKrSbAS6",
  "key27": "3TS5raZ3C8NfsEsRwQvqnfvHYbwbwfZah8FtMBvXVkZ8CGrMPnNxi83s14RseMRpuUkNjyCNYjjHiFLxbMWzrZtQ",
  "key28": "45zbAQBVipXio6dFPqg5gQRzpxtwg6xoN51GQx6bWdc6FdL3jREFg93MrSfi6NqrkAzCNBR6pmbK1HAMaYADFHNX",
  "key29": "2gW1X6wn6DpKaFMEqTGXT5fLcUHDTDwAneizKMm2VmbxAb5qthtLuRW6hVk4QVs2zsGgiCV2w5hWmvnfPaXjEmQf",
  "key30": "4xzwBBmtr3ymL6DXG2svVhSLnUdq3zdSqDpg37cN9tRyDaRGXQNztst9H8F4ifNz7nAjCk3TTPQNgKNxAvcUdqE2",
  "key31": "5CwSHzt34TNRKNU2sFAzwuC6ZQMa5TQxdMn5dYw6MiXmhCpYkyoJ4MbU34JXP52a7MZS9CvXRyUupoCu68rr5oTE",
  "key32": "4jeZE6b9CFqAMWXKg1P5CvB5LhqRTHraP37FNwbZzptNyBtjxtGUnVq5qPEDgTzspaf7f9VhHGkQK795x3RK93w",
  "key33": "ZDLGJ6gzYAc8SWy9ojZBNmcDbWkreg2QsyfpG6ymTXF5dKrptQe3wvTN5ro39UnbZTdJ744i5bjfTbUEnfBEMBj",
  "key34": "eDhHT1g2185zKkR6F7cVGnXcfZ9ubjnkb3psGLKwi44WaKJ14XiwF5RsQzBEpSH8dNAHB41Pwc6sNfXiJnJ9ZNu",
  "key35": "5HTdMJagC39TKaMQZ5F6BH2emah1LCf4T3RLnHTB3ZujoSeptNJBsFca2iqxq6WkUqAxf7bciq4fHdkqeszArrw1",
  "key36": "5BWdNAXi9X4U5Bbh4CxL4AnQTxu3CYuZ6oQvitQekLn44CgjjF3UicMLxhfgQvHe5cjdbqGAFDrb7kxT7BzSDRgS"
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
