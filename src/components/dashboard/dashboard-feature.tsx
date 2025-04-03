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
    "nEQ22iCTERddEX4gUPqjJAJsTg2zHSzXzu2RiRjeVqGxHJHFXhSAKeW1dCkaUBw8hK4K54syaZkmaZaUNMGSN22"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4whURW2sDdDGFdc8CMmWU9vBZfTazN1CTQtTSUQvSq3WjV1qdnHgJRvF4sWb4bucvm2LE34qMyFyWhjyr5ccEPZ2",
  "key1": "3XrLrjAxTKAqrbtCSiBcWyLJSp7v9Pbxypy9dteTdGED4E9ys6zZny6wD1Q1Ya1VaeRghPJ852Dzizgxe4jbJFR2",
  "key2": "3ZmUJnREYd3SX3PhuNF3qCpEyeGkJNzShY2R4pGpCghvxhRMVxm7JxJQJe5j3wbYAuttofVKDidRQowMuofNRFXD",
  "key3": "4zzUq47rzbhN4gDotX3qMSzyWTLW2N3Bg2EAizhrwvPpQZxHvvLvX7xCYeZudrVZeNdLSkxqcoeLxqXeCkFTxg46",
  "key4": "4y75GxZ5AQHenpftfiEyQHAmXJnzc4y2HnYrpFY26BiRMRMFvRvA7FQb87JLHFivmbCkUzSaodnx3n389BHmwz8G",
  "key5": "3baxsnSFJttQB7Li6EeLVREhQwySki4sxWsGG7iUyYKKLNSHwnpCfav9ND4hZuUZ6q93G9whYcj5mGRabgZQ8SKj",
  "key6": "5LfhUEbgaEDXqECcgoZ6vUvGWmwapjcPBJii6Yqn87qss4pFGWc84xQfkjwfrNWqcBsgY19xQ2yoLjQX7tKU5Hr1",
  "key7": "24wRFD5f1wS9wDwhaHCGESchU22CaezM9vPfK4rCdKG1HzJEPjtn5nVuZghSNKiEXbq9WYgEdEZh3F7bim4ErCxr",
  "key8": "3smEornnzLMhK3qrUMXFrqnZMsVsyMNhn5Aon3f4X3hDYkpyCFHrRUbrxjeE2XahV3pJ6K9bYConsrtMZWbrRRxm",
  "key9": "5caq47mNFcR76WbBs8p97fyYnHqiQBYFeJgvGFDbJWJLAMbx6nA9T9AU3kAEYpyca3b6akJXa6uXG2nqToh55cBg",
  "key10": "4bCCu8yviRSqPPzeyBv3fNEENjwRi65Jq3oEtRqzfFvr2XEzWWms1EUDuJM2FDm1gj6DTd1SvK1Xg8zQvSNXJJTC",
  "key11": "zCfc8nxgJjKUGcZY2wJCp6Hd8wSAK4DWze8Bs4cmnCdxdJFcmVaZhYLfhGqXid4vLrzaHBuKDMoJzCkyWZZxAfy",
  "key12": "uxSVbC33C4RWGc9wUVFADbXH6TEfb94s4YBBLYShENf3LQL5ZnVcYwhM6SBsDcJrvBZU1M8uwnBhEH9XvDrVK1b",
  "key13": "2D87zWZ73WsNwN2a2PGyrzgSj5y2BNqxLnhUd9oG9ECHgaQRBXSghEN6LZzpJAtRijitpmPHhUhBXsRyBu62AgJQ",
  "key14": "WeUEEC2XKqCsEBUKpgom423Bcrz3Eh3rN61B3stH95gb1a2oJf4KvCFwoahxmbao2g8B5c6Y5wGdbHrQeQNiQCu",
  "key15": "2QcCorH7fgrtMH2DKvUq93tuVAzCq5SSg3cdipqkdD1vgjfhWQ6mnswujWp6uikwxYgSkBxCwcj6mXhf4udtZ8pV",
  "key16": "njeX3SqyQVCEuhaaPhPL9Xz5bRQDdeqzJJXjpESjb9Jd72B4TgRFQGFxxX5a98ZuT779La6etJogbk7BdP8cH2g",
  "key17": "66x8UmfV7ouDyguuvzCE7TeWTKADzMDFM6hMuZxWL5pbj7sqKGtqS47eTtP5zvRKy7aJisVKb2YoRzWJkWbXrp8Z",
  "key18": "5MkGZKY7PRWEXMWEdrGWd9yiVeKNUj4sopViT6QtF1ESdJ4RuZXWd5NoiLsZCxa6o3r9Sc3i6JjGq1KugZeB3ARa",
  "key19": "55taLeYLNck74sAJejUzEeRq2Xw1WG15nsyN7qMaQyGt3pUzXtB61AkbQFjULd1VmKDcBmNA1KDDPy4fyvq4Rcr",
  "key20": "5Px6hwqueNBsWpDjpbkg77VU89h8B4kfsFfn1bvCfJSWCivKckjpNVrzyDjhMnsHeAYPhKmD6cxs1Z2PjkVNu3Ru",
  "key21": "5CvN5F8qrqhUv61wb9VT9SbpAyxDSQQxAUTeFpC7EATdz5MDEqaHir8Cy619kwop4VXNoDHd9qyC8TiNMHmD48RK",
  "key22": "Gha71BvD7HmoUQupy3mF1bxHHLCTKswMBgtAme7usmybEFK562KeKzxayA5M4vhks4ZVYTbZwNasX9az7E1HieV",
  "key23": "2XDG9oTqD43Dc3YLiK2KKMc8gbFtT5XEFsmS3npYPtjaviY1kQadv8xeSQVVpv8pvWXtYrh9vgxyXLwnnwF7EcfC",
  "key24": "5VE9uYiqyBzXDxXkn6ypemz1qfLn376f5wi8Rb69KLGFnHuqLjZXcCTCfNJWmJH4bLQNVsVKbAefEwsQN6mfhmkc",
  "key25": "36f2PXa3rVUZgE9349a9CfSnvC75if5LMxv8y69nsagaY9xWV7ipx1M8rWPm5qTsy7xR5yrgnAd2VxyfFBm3mZWt",
  "key26": "44a7Z2ihAVpYGr7YHwm7yT6EXpVwMuR1ZWVA7gwRUp6rgvKBKcUAFuXQUP5KbGUHrDNiDGyNwmW3xqN4zSQmmeAr",
  "key27": "2uQT9SaXYutvVPLodW95sW3C2awa9rzQgMHqJygW11wxzJBPv1odPdzXYH69StKpbmJxfe2iw551StoMvvvoRsS9",
  "key28": "4r6LoFHDw1t1wZ6gJgx7G645tk6ria2MjeZYuJo7fAuacn7cnPkqoRhaJ8vhBnytGMLTE7LiU1NPcPNpwk7bTgrY"
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
