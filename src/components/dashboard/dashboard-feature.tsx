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
    "5GEfinEFhvD3pcowT37SoKDVe16ntTeoGjU2TEDCpnnsY7jzDCJQDKLK9jsKhvFfdLCfA8gS2dKhKjXaosZ4Ghv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nQYtiLyykaJ353UPEhQ9qpm893M9XEttqKTmpkLLkQppyrfGqnrgcX9snA6rd1gPMz37mFenCAGsLCMqFMXWYmb",
  "key1": "3tCPKXJwfU7XsaSnWqwuat3pEBJTdvietPA8umbWBYUbp6522YfJecuZmUzaZWg8AZRrEfG4YrRnshdhmGBUXV13",
  "key2": "38WTyHe1M6Eqi5RcuLvFhCHoPEnaviQN5rCsLBG7FUiACcBHTX1xBhhnkVs5Bn7nzjjPMVju1Ayie9epuxTbcp1X",
  "key3": "3Me2LxpJEXUH9aBvcPWLStZbVkwXchkedxZ8HvgoGniiwC7pcfhc25w5UCNJTcdkZ2taMWR24TrawAFpYkCi6YrL",
  "key4": "Xv2GvxomtfMisMXW7wz3yAUuNa4cq79nVAofST4tevo4ENNKUMW1sPtE1A8LthVt6ATNMFJKZfoxxAFYJbRzMaF",
  "key5": "5kCjxTc6vudxX7e3ZYuYkgxEJP2MDSU3YToC4zcsPFdsKP76SSggmaED1dJh81EcXdnRAfWHVuxHRdeWiU6LR44P",
  "key6": "3oqxAATYgz7CSiSopMFvBXnTDLazdynRMjkbL7TEmpvCpT2o7oza88ytA6yJdmn6heCFeSBKCaDq3FoVizfNoLc1",
  "key7": "41z6E2MkUouW22zqSATSf2jCf8n6d7QPmwWpGjfgjYBGhwnahMcn2r5Vw4sXhjHo7PAQ17UPwXJs7Z8yCECFq8nn",
  "key8": "4XymhN9SRk2E4xritnu8PSPbiBgJQJ3FZp1ZX5LF6ibeNCUzcBekXQAYSDM6EmAQL3Gc6X9VkAKs9tzA7teBrK9E",
  "key9": "46gAAEQFaSb9ELSTAD3WQ8a78vNpPZknVYvWQpeb8YmEJMyCrrnTyWs82xscnzfBGM6D35KBe2DTXCMxuh5RFtk9",
  "key10": "3rJ6Lf1Z6YvDXT5NN6hH46kvURKtppfD6EDvnPUrePZxiuRHZknZeMybMWywWT5ZDWTZk4wyeQokQxxnWRmyyDN4",
  "key11": "31tiAjMspMZd4dKpx3rEdMoAkQ4DZ1jWKx4BTkmg1KDVcCGYDbpEZAEbxzDGr6DEmsu5jXKjc3Ew82fWp1RGLrpt",
  "key12": "4mZFvYf1KviSt9amGwTv5Qw26rHRPCtyR1Q4exYmbDcpvbWcDcXZz2t4cfhNbEMNWZzQpaAYKUacZk2pefy4phtH",
  "key13": "5CggsPXgB8VJ8Vf8yVyDjarbQ89h63SNjZNjgGTda9GD1Brug4F4bzW8FxjWTtXWLBcv8fz4eriaZW172hs8jZ85",
  "key14": "62XwAnjtKJiry9NAZZxu6LN1AEnQLExLJvTDM5YoWjvLBkSgypKysMNGCGyQQcs21vbDm5zsy2bH4iF9jCWsW9du",
  "key15": "2qpUB7f28zovMDCnenopzAPiniyi6L26Lo5v26BEiSmYaZeyXoC45wUdNNVNzkrDta1teJwbAzKqBJETrrhK6rT5",
  "key16": "4cooAjX8MUSJ45DV1sjoiEz3hAq8MUp9fxCuKkZcNqYeU11uYyqQHkhf3W93XpWKJR2mueov5MmrascTqxqQNePQ",
  "key17": "4dQxeKWPrTae11o5Bm9ngfngFH3JttYyvy6yCPuEBq8moEmfmt8mASwvkt4kUvFkJKhMgfsJDWM1KXf26g7tXNkr",
  "key18": "3ivQYZBFDp3bXWV1qZ7xGhTZyEMHwB7MEAo8g5YiiCkoiofp5e2bFcKyBU4GLF2ZBnX3JELJdE5UHrPHfMxCs83R",
  "key19": "5FsuoCPWxVvyBewtWT9UxoPKgRhqJiX7RDfnHtNLk796f4GzAuS5Rogu4Q6jUEx9qpcq8PBpDMCmzwsfB968jRZA",
  "key20": "KE12FgtvhE9dkrSLAHcXincM2qeLpo7TSJ88XY1DPnLFZE1LTumzDrLLygES7StnDpcUrQJSR5WxtpRu1DPmU9N",
  "key21": "28qni5YydcvwXG42ekHBMo6Y9MRaCUoEZTZC1aMtSo8L8fWMXJ2bfB1cFufvDgfEXts7rtqJLqgCfVaRMSwFUCNy",
  "key22": "5TybGhbZvo3NQEbg6nXZLEn7264VJs784DV8Z4f4SX69ETAoLgJoAFyuKmrgSA2zWNRVDaZHk2iZTWLVmpwidVxD",
  "key23": "4Ccpc8sN7c9dCr2hVebfFTX1VfdnyjjYDLTYgHGu1DENqBZ77SBJJbnkD7JZbieLNoVBHrETATshasfeSJ24JPZG",
  "key24": "4afpD14KznJP3zdbtsmq77U8sWc2VUfDmB3dGqY9H4EZbshq1Y6G6U7898auqCNRMxPoYFnp8t7Hpb42tdhATAE4",
  "key25": "2QNs9tkzUbuTfYb95qeQqg8MxsUmoV6sSnAGGCkaPqZ25TtyxJqjdnK9iGqmvaNdznZrDs825ZtosVYfNve72ibU",
  "key26": "26G5xr7AnRB1XeVhqQzCY2DzrgWiUHtrhNYh86n1wwxSNWArt2jJFzfrRM5x1fHWjHmfgG4Q1K5xGs3nnnB1BbTV",
  "key27": "5EvuecmFDxhYbCZuQUf67SKnULeQfzqrkABvWgEnKziy1ApcgHYNeeqW9JkxaDgZyxu68mGUQrptwiFSJTppQbMQ",
  "key28": "3kD6yuYW9Ra5oAnuhmJiekHdeuoPAqKW1tSX9TDPkj5XjmyRnyjabTZ3zFBVUXbgpVyYz5ZBr74mJJCwd8oeaSuD",
  "key29": "3R32BAr54ihajMWFmr5yYbdfKXbYxwyskgUSnGYggqUxsvf9aeRB7KaybhnMic9RwHnjCHgBxXgnSHL1BTXjMHDg"
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
