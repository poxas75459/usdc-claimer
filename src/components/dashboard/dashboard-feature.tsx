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
    "enkMCYAaYsfNsVHM2UmdTwiteySdsfzeg6MZupU8PfujhKSjcpfKs19CMuvzA9enPhsw9xcEywAzF95wUfojovK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61NYndoHpEyqrNA8kUxRsbMsavBM8VbfLQZkGa9dPFq581t6oSTke3hjd7DCRhwZDAg3vfbCXGisdWGnmXEFGLK1",
  "key1": "3eYzY7F7StsTd2wJ9Ct5cd4mj3V4arpFS8tiuMFY6RS6wrrRsRUbL4Mo5JochoHMLt55ZfjApN3hGHsvmqF64Uum",
  "key2": "5vu7QADFTGF4ifyjdPkRapXFmCNj1vAgTWn3xGNPX7CBrqdYV2CPFRpdY3pG3dHdzXaj9GbEhwPeMQhbQzbYdYU7",
  "key3": "3ta1Lwpi62HA5mgio4Uw6jbMDHzxs7ymwpaiBbQEgrWJhV4TdyAgQBUzGUjA5UTpTJBGXA9DoE4qXdEwwsHGPZTL",
  "key4": "8sBYQ9xT3o6B6HncKCBgJNfdpQawrtVoBTYkiiWcR8Jarg6Fbxj9Cn1UPzHRwk4RySWU6Qra5YBQfSYLh2ssKTc",
  "key5": "5SJUNLc5V2Sxn5xGnHvDgFVVJZsApJ8XKgPKa3Tyo3xb4JhYfK85UAYR4U7CsVX5gUeLPRTynJU81BKxuiYCgrpR",
  "key6": "3A3gFL9hg9i5ZMWgTKsGwzbuLvmCT14SoxRVpQ9WS46pXWLcSVk79F9S3hMhjMhFYtsjY1P2pQbrdtveTU1xDSea",
  "key7": "58D58Lg6f3vJ1XwLTwkimU5ikPiJaCeD9oMofFGQEBrpZ9NobG2EGDFCttdk8qa5eT9711zFuujsvf4u5zrSAGr8",
  "key8": "2wCwetyvxATBfV7XpHvY46R2WFjAbYLeiX9fCsLq5a1eWN8AZ3iudrJfiUku2ULywL1hwWXiwSNYkhj93CTdkerM",
  "key9": "5ga79x5QZBFnPSAFLZjPxGscG1C3NJSGn4VWhr5DcdbqaSop6aGa8d5Y2uuvPHbXKSmnRryavdTUV9gfiJCQwSCM",
  "key10": "5zrjbPdRATCzPNkRLZqcFNXkZCFYXm4hAiFPrDDu3tkj4hA1j6VvEBJmX5NGb92NS7WRrDMK1AuP6LLFiS38ek1o",
  "key11": "4T3SkL9tThEtANvQZ9ZGAv98L3SfWcytYsdqJfZg86faaZ5v47ULU93Rg6FVHHWyRPKzUrn3qLe4xbGZXsfshTTv",
  "key12": "28xzQiUDwkXhFxc3SNFqTepE2JsQHrtzRPD2VPFQZfgzfNCcXD1YJvaKBMWF1ZmQ5njsGo3xJYAaRFSg2V4Dvn2X",
  "key13": "5tJFKeDaBghxW5knZXJqaFD3akfbEHWsaRMeVpf12enHwrcM3h4N7HJMRPFA1L5V2LHgoMMywKpQ1vKXAZXQ2895",
  "key14": "2xvESfU8ij3MAygJwbHxHDcrAdo1WEhC9WyCMus8aHvHZRJRSzPbVhje1zaFz5Jdtf6eWrf4UTTmLePJtMh9SpbL",
  "key15": "2da1K1hBLcWNEpm74DyGPmH9AjyHRs3kivSm6RAnjGkzGchhGwhEUPH8mYsGuGLEuLe1FJ3ZhLks4SzSMB82STfB",
  "key16": "5y2JM4UXghRM51B1tD1kLUJPywofFmvoVcd7XzAALL87VzBVeoj5Vuug7zLhxR145fCAfh6wDK8TiP4rj8GyLRq3",
  "key17": "2GnjkYqdhcFJAKaV2A8pB8bNMvqZgAmtqKMvhXrqo41Yp5rARpHw6N7TgtcfnaPcNqv7sK9ZzJfFN3M6VXrtgQft",
  "key18": "5oP87jhpDDAf6ys4Jyf9MGZo4CZNHz4jGCKycHhwxXvmbW3rby4Lii2s54nVLMSRrrryHBf4hVbszuKPy9s2LK7Y",
  "key19": "4Hk6EUyzpmSvTrHAUe8kLKohVUrKFsxQ5i1ZLHGR18qQKuiBvKrs4Ktwjv5VBLu6SmBwjHgfxtfxFiRMmjmhtdoe",
  "key20": "7gvYd8aY7BtrHPWdBhJoHbzY3vAHJyfnZChHywZC1U3Q4fwZmJxoNDJ5HjmXAkSiXtiAQPAbHRQeAaZm5aX2kot",
  "key21": "3CzKTZA3rx1NcEffrtbG3LTc8wrm3K7mc1UQkeHLpVxfrq79c3v45vYjW9jhXboNyy2LQYcL6VgvTrBgf7pPsEFQ",
  "key22": "3FsZi9ojBYMRBxpGHkpKV3dcd34zUMTEs9mpckvDGm77XVAFfZwAGQMC1K5FGHUvxRRTFPt4d5umP1igyxuRxfWt",
  "key23": "5a3UZnrW5UTL5aK4Y9sDkrymJ4G8zSPYBVG5hkYzDn6wWQcYxDnKvhPgnxACiCE2ATcGGUZ9q2hRUfWaa3iXqYZy",
  "key24": "319PnT51KR6TpkBtDk8bY9s3LCSfkLKY6K3GyRPJNvpQehQemP8qFjeFdMMJ5QYXcBFF4CQmvn2BAAoxjztd4338",
  "key25": "5mvRsFwA2MgpSnwbdDm8e6SbUSUD1DPnHme6Sb7HsoV2XtXGCHz8AAMiyyNZPm4r84cRuMYvHnr5p155X2cFJbT6",
  "key26": "5YGjsjgDjqdSiuRNT4GQRK3L94LtBC31JrpshKFVQVGb2PnaaC9FbMsWewiPtsFnQKnLVx8tmtf8VEWp8wCckryY",
  "key27": "4W8G69XfjYbngPagq6TYzEFffrxFqruwwWiqqQx33LsgPuTY8mPTCK3xr5D7eL3viMQoBacSgEF3BraDC5CWyQYB",
  "key28": "5MQjCawoTofCbdCYwmQoZWeWCCpMoAgWtbEBccHVBNuAinwN9Y9hcrEFvGNYQPHzkx38425QJei5DzUZmrwWNjNt",
  "key29": "2pnjnqP415ujeTHGiUZy165udCwZ6qjdW93DS8nRzX92FMDvWEA8Lc1714n3HdLafsopo8vrgxJJWpnVyf4uW61A",
  "key30": "5ws4YRReWrM5f4wUDUQdMn32mJurJSZ3bG7UyuB1FbSzqJR5ZkMsTZTzfHqRV99q3wXhcLFeqrqJBxexgwG2HM8N",
  "key31": "2v2sc12syUu4UuvH2dFuyYkRSJWPg987F5p82rHCjTbjesQZFUripJ1LDUXnK8i5eZ2A6axarXGN29kkMxRP7c6Q",
  "key32": "WYyb93ArddWDqceScodvicZoqVBryP9Bsbdv3XiceUpxYBuU2sUf9vpzdq8WDbJGADQnjeDfQVZcCAwqF6iji9p",
  "key33": "668P7N3UD3aJQo5DK1338PPhrtDPbuvTT8oxn572jaUknrg1jJrpmNWZKE7pFEhdeUA6eKuKRzAXi11jhDBDK53q",
  "key34": "4Qg95pvkeD8zKes9SkNz1XXu6WxrND94VZZoKshzT682piXwLreK2Cy3YEozUNDuPvkMBrZPa5dgv8xSLo65dJYz"
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
