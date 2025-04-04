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
    "4Xmt7pFTzWS4ucE1kDzaFsb2anUhLmzaoQLT9sQaYiQYWTxiSaEvd2hJXWmbqroodWrXxWKsicwZG1orCWF7iGB9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5prG39cVHwwpT5ueTimXHEY9z21vwbnFNQ3HEsouGNhNKoZPjECAoGZSrN486XadNgM2EXuQhTorrcKECPziyDQw",
  "key1": "yiYmNEhQEqn523kGwq327RCvHkwVN3SbfXRWHp5daoMpYu8A63MgVd9WAvVrsrPr8BJ6XJJFMtJ7ntYhSes3CL9",
  "key2": "66jEWAPLAWVzjDuiZrFvT7WbAoSWi84NTxoZAnHRAe5iBCBhh4XKwnSA8397vybxu5MThXM4GZMxcv7yCCTD4LPZ",
  "key3": "z8Ja245H6sSvvyLQR4vtGA3pHEB2zGxTfktFmE7mQ3mn4zeNaT6tJuBgVVpkgRVqi2CTNbcQr5SJnCaXxyjXfkz",
  "key4": "3tK7Msoij8gZvGQuir2X8U97cJQ7iY3W7547jS6BXsaLAF24tzMUgwTtoK1ZqNsenXJqKQvZAV9Kiox81fHttATj",
  "key5": "36wYTCuLCij1wT98g7my5suxJLfCfeTVLoTwphHwKstjLnPQkCGyEB9xwNknLbxfbft1APmvgFZ6kkmjBV75gE1T",
  "key6": "GiDYxwKmA5sn4BhybF7eNqDtZKysbiRVH8xMYdmqDsZSDW1Hox97YgFkhH82GrUYNd7eNUwbfXzSkBpSUTteyck",
  "key7": "2ZeZVjxsEm6N2GjAJoTEDTE4LcNHNUyniLPZiQvMinL8jrTByHHFxUdnQVxhW14vP84VET9D1fmL7rB2wQWqcGxa",
  "key8": "5sMiG1fLw2EkDZ7knoQtJ3GKg42FPACna2KPCweiYJPUQa4HuA8ygobAdNa1gd2Cq9Xvjq5fK179Jzg3DRhaHeCp",
  "key9": "5egRAwxEpCud4B2MXTKMRgBaFw6WwzTxhM21hetqPwRKqEnHca6CYYUPsbdqu7SRCtguLJeew8fHu6qZomSc7NXa",
  "key10": "3VsG6jVXxJxTtBdPMVvef2tu1hGjdtWJLeCEPt6AvDCnfB9F4eYfXeH8Dp4RXVE86RKZHxgygTdzMuumnUVZH7ru",
  "key11": "NZrZZWFPamDPqDX59YBpukq6Vhs6tbyVM7G4a1yW3ejVs9wNxm6cAKVQefRvay8xfNtsc2JjTBdYjYSdHSpPvFo",
  "key12": "4vAExVjcFYTA2TicgjE3DY2T5iBxh7cEBtt95tawEzn4FTM2cDVVauS5w9kiT7yjnzqqRkUAeKxvtCQvyPvQe57E",
  "key13": "ucVKL2zKZsa4p7BACeCZ3LxbNMjFoj7QSqFTT4hVzWSQb9Gdj5FKSbJaQaPcXJqgArnwUgWm9gLUcz1CA5CcVUy",
  "key14": "28NgGwGypnvLYig5qhjeb2Qpvu1LSxH1jAo6CoSGAA3xgwbVJsHVXr3m53GaqZMLew4kJhakYkMuL6ryMsmgfXHK",
  "key15": "2NbHgMdBkm9q3YEBh6iumDhAyfCvsopPmEBT3mW9xeZypLFEMw29nMZ23PAb4DfgaxeUNbLQBaHxG8gKvU1GqiHm",
  "key16": "491boFFjqyofyeB9tKhoy4Z6YBbzfT6QU9DnksBRKXt3bG6KQztr5rLpt2WCHzNUqkAmfE68mUxXaRnmizAoJM2P",
  "key17": "2ACUVYNGJEyLLMVJeiuMNvkKCm8YFYEpbW1e2ksiwJohi1vBcJbcDfaZ6x5kg3u44PbUJiFgLCwBA9DiL3gXoPZD",
  "key18": "32FxekcE3ffgNPudEhkyGd2q8wy9nvy13N2dviUEZDGvq9iJodQFozXGjaKjrZvua2RfJbtWUp9eFyhSdGRtdNyP",
  "key19": "4n9Yr7YUZrouGfcaNNmzPTgrp61TXKn9mJh8wNDEKNsK4Jr1TFjTicarDex7Py4s4N1NfKyxRUMNd72vjgmvEuyJ",
  "key20": "KU65WCBeXWWDU5c9bLNdAULHzzj4ZXmFcgVCD69Wr3SmQvmGWNLveXZkbjscnx123whgrpGHCjHGP7gVN4qyrdX",
  "key21": "4JFsrBWzpRGYdsuKSYXXHpCm9sxCuB1G1EFVbE97N7qQJ3yBfx6Rq6oTnmTTpUsNfTdWpCTpMA1wsx64U9mXP53C",
  "key22": "JNYNR5HLnjTfXRfE41diYxKXrTXZFKdVubAvjXV9ZBjdQisqf6MyoVk15JYV55y1MnMRA19rf4aAzQ2wPsu9ict",
  "key23": "4Naq8EcZ7FbA8kMPZXErV9Utp9UpoDFFQa1umN1wttTYeTHxqo5y3PiZeprMH1hhx2PZu7yVudtrNH1YeCGQHzti",
  "key24": "3zgvYftwXk1c9sjTEYU4rQCMdaAzk6rUgpUdT6DyBKyrY873RmQcT6Dwiw6pyj3yUm2wydimWAF8z8p48gNuRW7P",
  "key25": "xkQxPsJmsqQeDsaLqBuS7NY3hVARy3QgjPC8wZGRtHLdFii9o2MFyKS9SLTdfbpdiYZShyJgnGxiazHDR6tCGL7",
  "key26": "2Kmzqnmjt9bm9V1EnuWXZ8DzjBesB7eoCKTWxu2bYiba9i7k11Ku2nFsn89yM1UexHRHAQXEHrvW8iXicQK8NDH1",
  "key27": "2haUFcaBaFZJNXi7WFvxL2AQWL12BBy5FRTkg4wnGMeb9ubVsAgD3C9hBssqhAYxrp22ywrX4WaRB8f4MWd3EApD"
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
