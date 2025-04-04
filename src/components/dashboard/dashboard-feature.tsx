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
    "5utNrBmxkKDE9DennRMm3LYVLU9oXs5cuzVnhTWkM27qBopFgv425UMfvg1n8yuSC1vqhhs6RKer3ct8Pe3eEpwN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TUDy5CYBNwkch1dCuNbFGRKGbqbGmYNqsQUUTtjSpZ53GZbsgzHnbGshY4wgt4NSyAcpGpPVje9soX7ZEfWwfju",
  "key1": "3cHRjyZ7ywTd7CCLfTh6hB6otUfwo6AJgd8UU7kgJZRBnzqsAXWdik4255saRUHLZ8uutthNesbFBSWnopSeSmuc",
  "key2": "27V3vyDEg3VhmaA7SjgCefnKiBM58ovZYRriAeAVdFUjLgCXCiHuF4m1pW3XSGS8k8mAougFaUXqvuaCfcKYWjzK",
  "key3": "4kENEeXUqYaYYSNvAtJypn8oGcX96dmLWw3aLA8MzPWSNrpeRHfWeKQ8uWVPzQTGUa3uSpsWebiFJyVZy6gzqd6W",
  "key4": "4adyfViw7PoH9ckMuqA34rn93jA58c8fWxuC1CYQuyBNLY7WVtkjvqz9CBQHJF8BbDrARerjNS6mYzvdDVhJwMrb",
  "key5": "2RtSt6iDaU92oH57gRMkuQYMjbLkcCXSKG5Q7pHsVMDCg4yDg8nCfNpnYdmoh1Qz6r9G5Y1WPxmpsAsorfYq5LmT",
  "key6": "z38ARsVdcGW77zqAS59o9LhjfbPgWj1oV96FAHttYtptzhb7mvti4GhkhtFZhj1BywBqzQddUqo5HWHQYTrgnMj",
  "key7": "5w4QpfzkKzfgzuzMYgE2gdMFSpfbsv2xvrHdNPfffaekfjEQzzdRXUVHnYkMZQJSJJd9B46hbYfvV97mrW5nT4P9",
  "key8": "61BBU3zWbKzTuc9KppfJGoWdtAFw596KsBWY9W388U9DNHtB1Tbba6hpAGTzHCYJSg2qcPkFxghaF7JszqbvL3PU",
  "key9": "4pjY1oFwfBbDJ274wHLz7YHSeFSF8d42grBTzQbsiauAGG83GzS3xG9ECko7hB1wriwa9ZnZ2JnGA8z1HUxRb5EX",
  "key10": "2pJ6PYbGTwigvp5C9PFzveF5cU8u34sgnfpWjaRHWUyryAFtqQJSFnXzB6tFeGJr63o6Ya9Me485BUjgnqzhESfP",
  "key11": "2emnbsdLBHDhSqTS1pRJ1ySHyLRMd41i74hYCLr3SoxQPhq9ifsisdu7JQABiqrmhax8dXbduw3QBuFnFXtdHK5b",
  "key12": "3JKZX5FVX1jLf2nzbRDF1be4C5YGbqyKQ9FdZ4Fi9L4xcSHaSf6Fh42q3RiUd8w9MgMjGexjNXPv4vFZC35szQKt",
  "key13": "2Add5b8Za6w3tbegXRgGRNT7qEZwGfmcDPwumBwiAsW2VudeZWd2zRMYEbJ5hiDdiwHDxQynynk95tTAviPPztz5",
  "key14": "37U6gXRj7eYXpcxZXznFHmdHRBBge7mT4qHWPRWAcyXo6zxXiHNkRom16Go584xTemBRyQUkQYbAF2fpg1gHpAp3",
  "key15": "5B8tayKp32gsTcwXcdYYm8d2S7rZb6n1jq9LAhu6AtTePM417b3TTtbcnpVKojbtJq88kDnTKxF82YhkVNUmhTqD",
  "key16": "2KCuonnNHqXQpjpWNzYDuP93DWfPu6oPWmaPpCViC6pxaKVWjQixjevs2KnRyzzF6CaH2uUWB8xMsVJ7Z5AdxF8c",
  "key17": "VJdDYpDqpZ6Te58yCFGBrBuoKfwzHtRGPT8suJMTV1BjYfZijRCUQcjbXn7eCcd6VT7wwV71HydxDRvRahjGK2c",
  "key18": "5pVbWwRpchJRKUPxtfm2NUYGpMaVvcTpfEJhKYWPKXHGwf3S1zfVUbfXZvektsL3bfKDZHhGfiD7kReGZ3pfYAKE",
  "key19": "2g6xntpGckfu4jejDhWF4qate8yqMNwpP6W6i4hgsS8gvhbEKhiPEFrdrfhahL88c1CnLDS8xg77k7VEcepZ8oVz",
  "key20": "3GNh79MNGXKVTUDGZpqPNvfrL4XXM7b822BVD8QYhzMiTxWSCsM51HqBqkVga21vGSE8CfsTF14aBU7LDXEsyK7E",
  "key21": "3XgMqvawESx6tYLeoqLpPeMFDtiBR3erZRMrw1YA5A7jmbDEyWDEDvsp5i9PuYKdAW9aGF7ZH568pJk9PMrisJom",
  "key22": "4gM39YZpBuZtsGZUCYa82Vgr23b14gCns28FMr8qXRUGCaxhVnYhqoYr2V2gDqhE4MTJLrwUKVKGuQJV5qKSJPi8",
  "key23": "2Nm2SDZufc5KaxWyrKyQuVJ558uy5o6kXFJFn3mg4KeDF2TahhD292PhNEzT3pnMAXa6B4xUifY3VsokTNebH9QQ",
  "key24": "uHsRCFDN2b9F2F6eGEApvDpmgSqFH8fdTeYCwpTV3TiYqERfxQFgzuzb749Fq5vcVoTLnR9TnhvUHWb3aNTJt3S",
  "key25": "5eobg7ruJCgP81LY4upzUu9FDguxs43bzAgEycP1vFJae48o1FJZV52AxDYAvhmMAWLrz8tC42eAdqad55NcPVdm",
  "key26": "5wxoBEJDVT4Cw3M9g9TbZaK1zDFa2czakDkLHhrJLYGhTNavgQ4amQVxz7QF3rRCp3SBf2JaQ3P4snjcrf1Q3ZdM",
  "key27": "5YTNsxgVA1NBcRRzqvE2qoTvFi2jGifVG7AKzvJofpioL5dfzfi2T1cs1XJ6d81hQaUEuGMQsp5c43k9mGPr4osp",
  "key28": "3Yu9UDtF37v49GZXNkQxvSH53yb2JBYSWbkGuHJzoFGUePtSYCbK1sDWcWoaMHNT6BvXxi9a3D72kh2ssj6amUYJ"
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
