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
    "3mMiZyYHNqhmP9DC1KUQWKcg6E4XLWUatKJ9jT8GqCBF9aEezD7obVRqY7HtryMcqqN3Pb9mWyihwfL1DjyxfSDu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EPieL33rXGZNtWcxWbpubCK5qMVMjCadvp22EceyLX9KNp2VEiyxswQyJXpx1REhC8taL2Avebf3Qpznb8mxFS",
  "key1": "NoJ93MLbvyD2UTAQuwcXVz9GQJUSSX7xLRH4J2wFfysfh1w18qGax94w1HumK2L1z1ULneLBQpk9g4s4tn8sRMR",
  "key2": "2RnvkUcLwK1o2VcA5wVoxeu3j5HBTvHJh1PuxyzN9yngYkDVK4siKyPheo8bWzFG1h8tkS5wWj3MwCnHu6t1GxDa",
  "key3": "5GRugKCKsG1jytZHDfFo48eujefYiPvpZkMZkN6iNSFz4FExJEtm2yfmte6AzLA1w421cUPWreeEJqYrLZYLfm3z",
  "key4": "4fpgcudastdTJRKEfW1HTy5EPQMEvM99g9V2abg2pJpnscAoD4aPAPdAjCvSM7WkZgwvd3ReaBSUh2YZUBNpvRJ4",
  "key5": "5ueXSUFL7pFtRW883LSnKYeFYR5iT64Rx334isqJHZnysYscnt1bLYLEqrbr3S25yDEHc5WYX4C6Z4avzuLAkDx7",
  "key6": "28eiaJJyvpapuybcLkDFaUZmjqmbC1TawJ9ruycwKvXKVRGFqBoUJ4RtENENC75gwcYdeEGkq6PWUMHpgNmQP5B6",
  "key7": "2euz8GWuuqUnUQXgqBam7z4x2mQ6vMDDq697tbmeiFkx1USPcHiebz5Ynn6ZaWbxH1f1TviVzhMLygpKey1oW3Th",
  "key8": "34TUyx22vVkFcw64p6p7pFwDgA2JaJsegZFFfYQyW89m73feUcUdM8tT5faG1VYKNi87ZizrvTkjiGHUFoqHtnPm",
  "key9": "4MEk6F8LA7fhYdo4Dka7fsvSkxEFTY3Z1jkxK8XNczqgGtMFXsAL77yfTLS7JC552rwwM3AbUSDRPdVFfBNYpYtz",
  "key10": "u3n4ZwXXhYywrbqBZz8iE8visbLYBnCXvbQJz8tzdTfj8BeQd3dBmzxwEQS89mza5HVxskCBsLJPuA4BW9pSTE7",
  "key11": "5EiiFSGxVTBRn3STGgRypx52D2TAAJT9DoLaZBuCkriRRkk75wTFMDRwdjb8Qw5tcJs9HPyS5Eu75XzHUHirFh6c",
  "key12": "33mdAKX9upuHBDGzhiRxCJyrhMeQCuwPMFzUqKHrHWmzihdB8pnZzLvjaoEPQKMHA82NFg1mCJms2XTsVz5RXNGX",
  "key13": "4Hzhj4VZQFAaKau14p9TqhNms4zMvK9ibHeqG9rDBfJLzcXpzwHVL5epZGKVwoFoKyPhrrorKJGyEbdsqzkUYdbN",
  "key14": "2BhQFbEW7jyZdUKNKiYfB6FuMqRbk838XXgL3mYRQ49yrTRp7WPdx34DLANK3RCjxvKfJe6k8ueSKJ2JFmQA7vov",
  "key15": "64LjhaWCfsKHBdhk8tCWECifgejsVGdudxaN4yMGkVAC6228zMUrNTvFCirdN4JgTz8fVbTgY9GXBtfwmYNxNE95",
  "key16": "5dbsnLoi3FfyarfsekNvugXiMR2YF9MkviKjTiGXTkJV4jkUkZPtrNq3Z1oRJKM24Yq6cpzkEEvUtY2CNVmdLmyR",
  "key17": "5P86vTFcyz7j2iay14SZxxUUw7FCAYU4AeHnUmKY1Dvg5wHWDoyDJrdyPhxZPyjmTWZ4yhjAD2j3kUk1ryRjqkNG",
  "key18": "4aTn5sLZSRm8GJUH1xnus5S2sxmTDb71tV9pH8PN9YTU9B7KDYLju3cf66zvzJGLJoFFWM1A6c2Nmk1ppRkRM3Lp",
  "key19": "pLApHDYh6rdMDX1Y5fT4Q5Up67afCKnQziF1b9kLp3GQrU9ML2HjV1NFtf1yt65NVuzLuWd5e5TN5yQdfU4i2pa",
  "key20": "4LDqzN4euQSSYYvZaNFz2eneqnTcRQXSQwqQRfTrVfLPNXeEryDqy88PT2JHd1FRT4Ra3RedELj4xG9RJiuyxbJw",
  "key21": "5GzAzpWr9A2B2RvgWeWKJSfLa5DCt9GhPgyAyhKNQUYXjp8WmqyHcn5Y7bhCbZEVFjfBQJ1tLMAY5gE6UsPk4ech",
  "key22": "65QvYH1ishMgeWgJueSNzty5TeBrrCNEQySN9Rn77sLpTAL24VvRbHYu36cFgj3wyCPpqy6gbPLno7quXtseVHpU",
  "key23": "2D8rJBxpLTxeBBGCknLEipoJLh6Sj2jGpa6xRn8MZDRS4BLP4cf7F4fKZihQbb8VsQ2Vuro9eYjuBLvz5NFsVQsY",
  "key24": "oLS1s1eQWqgKEPTg7jyW4JMF7E14nGDvG4xzG1aiZN9LUbCqoQ1LdcryrSNsBZH41iegGFS4iBBS2SbjZ2khESK",
  "key25": "2qRKc6ntP72BXV7wnp8LLwfod64buRB3CqRbKBF6fDWBak33EkaGzawbCMxTXEzZZLaFkSqk9vepS82HB6U1fiCj",
  "key26": "3eVa1F1C2Q1byyaoidJPwQ9nCi2qHzv1KUcn1Escy5XFTFZe2aRUGCkDfS4AejS5TL9LhEdovTbKTDmrLwhmMRhy",
  "key27": "41CDcanvJSXtWvMvrJcdYop4metZa8BTrGwfCQzrXwFUJHUjuKr3DgvYB8oNQfeM1t9ZA6Lrh3mtnpVpw63rzKng",
  "key28": "CaYQBv2MTFTKbeFJAiHqKNT1nnMUiYgTPkKd741GuvhYE463LKndAdNq8v75JrSL3fACF9Uq2Ytixm5457z1mti",
  "key29": "63TjtGBY4UqGgjRHPASP3BfFQ9TEiv1HbALsUMCbEuP2CG3htJ9yMnKMaUVGJaaVs13dTfLWYBDt4XDN7VFNuEpf"
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
