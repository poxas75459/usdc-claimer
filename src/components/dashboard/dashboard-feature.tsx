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
    "YWdXjrG38kxDYqa8XkKs2MAfg7ioXbrCzUCmDn4wVkhvLuCqyJfsXQYaJKSidSZ2LP5e1mmq1cboxWm8gexNfJw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gnp9xCjiL7aCv28xZM4oRxfTh1JJDk2R8kNd7H7vLr2U7vkQs1nem9yALdWgJWDJsQeyKS9PoC3VV2A38M6Jjyf",
  "key1": "3HPVYbdNtwFKyrYQRicPcBgqV8EeU84PzDdhbRoDAqEd3KVfAqsPq7U8DHnWRiM6T5Xng2hoFDQYF41Tb7avBvyT",
  "key2": "5xRS92Qc7ph7BQo7GUu7T952BQtmv92ZRLrZ2zYp2bwejs69Jcx1cJXTHAhNMaDgporm1dJCGMUpnoGMovFiFAWH",
  "key3": "Kn63n1B9dVPjV6etwtTmiN7DDtB5QPrDPbJh9CwTkuBDQ432yep51YzZJKGVomxdJDmJyoiG1YsfDkYci1sjFk6",
  "key4": "BAaEXbC81ubutXfRHSG8bVec9fwUssWHMPzSvdkuXR1YP7wZv2xRKeKHkfaUxjsrW6gtYZhNyE9R9jjNqJ2aizf",
  "key5": "4j4VrRQherWkVBo6UXBK78hLaR5S4RqF29jExm7XYsY15eJJdCRFVuEYC4UNUY1BhZJgnGZP3GZ7YtrHHwvpR2Po",
  "key6": "4sPxxGZEZSiqMjTEt8pTprDCXffzabTYkvC58ayiwxgwUKr5hDxjTDcRPipTd4TAC5VH2NF3E1urDwQbDbmZTBcV",
  "key7": "2tHvUHTVHC1N4MDz9p1ybRPB63SbY9RjTpjnGwGduDeawEjeERaKToqfwQaF7FwQZarhbMKd126MYy2pbpNq3mbh",
  "key8": "5gN5rUpZMpHAwgH52vJddmodYRacrxPAs1Pa6J9smFQh3GECVXVpYTr34AH9QYNDc5AYEVN9mbpjWhZAppauKWMs",
  "key9": "38JVbEyNDttwjazYSXwJfco154eZnwNdJcej6z1PYd1GvFHUozr3rDXCSn3bL8jEJ8LqJAdwBdyS8ZsJDvPQurun",
  "key10": "4XKVARoWyqSqaqk8tUykghvX4Jz7JpEh6YyQNm25jL1KdSGS5Pvf2E72zKCiyPmbWriv9DBjLQaKeg5Wh5J3FcaN",
  "key11": "3kVdVtiziteZH6risGdJB1e7f3e2iDKcbfz47LbKhK4PLFSDaV7chyVLLm2rqxXpWYbX6L2gTdeyH45K9JYUGzq2",
  "key12": "5buaQE4PY1otzBAAorQPsq85ZKKmintvqULdCkXXiYqbRg8igBYuk22FJ2zsrA4dsA53E3TTB1mnwgiHFAGTenDh",
  "key13": "22A2B4drkXMbpbSMijbHkL7CdPmDrJfA8SXEk2FpDCVJc3ZLc1tVUc8sCXitBNbedYyre7Dyx5vFidLpMfttNUii",
  "key14": "8L4jWFc97cvPpjYrCcFhnQWVwagyF4YCTphNbm9ePiaTrNyX2hd7uzhvGtySd32YuL2QjkWt7kLYcngB6ZUqYRX",
  "key15": "3gDp3xachBkteJWkhw6Thbg5vVEnoVPFGTZfzKNmzke812oTEsmd6LmgtWv43Gkf9F27ohKTrtwu5C3ZyJmN7ekG",
  "key16": "3TSgLBZuNeSeK6Mwcpe9pdEZm9SxxqwG2FdY81uzinH6bBgFSLACoHr7izXK4qYEfTDiz4urGzpGzkEbh4ex5TYk",
  "key17": "2vLs4qgGAbsFVyq7EwcvVdk8YytKh5uxgabdEg4uZTUqgYp7fGTjik5kqeJBLtxpVfjL8B6DZbiP8RGejsFEbP8q",
  "key18": "4JaAws2f3coc2ei9wAd6dPFYs7xFX3HwQPZihQN2Phs7D58AvoMChCRmpjRLZBL2t72Y8Tjwtg786P84Tru1dpCE",
  "key19": "JsAamcDrCcwSdJhHyyUxqh5PVGs9K115wcPVskyMYXnipAeHWksqVJNc8hc7gkbYreRmodFPpW7G4b1GGDYAsGH",
  "key20": "JwEH7AFjGxQrdhCSUWTnucj8U5TCEV28z7x1R2DMe43gTAjXXdGRKYj5D1kzGVosPr8pqApa9h7CmaDQHgB2SDH",
  "key21": "5BYdehYg7yAQD5qbujCS2zcBAmPUaNkUs4nS9Gn9fSF9Ti5NJGzm2bxyJ1yfBn9XXT7SSHX6SyhzeAd7VTmduDyL",
  "key22": "5H7qfa47icrH9mxk7MK5zhe9f7HgFFXrPfzFvQH47zuPpNNmY7yMgRmnrVmfYjMHcnViRVtPCebgf5KSGf6UthM7",
  "key23": "2gNvPudmSfJvbLSkeHFFFw4Q2Hr742dBQZn7ydimZj7WegqdY4qveiLRaWc78suJtjkJVHkYpFzux8qw37pZ6AhL",
  "key24": "3JLPQApgDVhYF3yzD7Sk1eRMDhcEb4ggSkHQTpqRxP9SYnJsBBDH4FXLpUvsinTdGWKA17ya2tZdgZkrgfsf2LaA",
  "key25": "2eB2a3q35pxZnwLJgtUFy7TmqYmdmDJjaFQJFDy8AwKG6z6QVTqS26uazMUS2rXvDBMDh5HtSy6DPvFNuJDK9Z82",
  "key26": "5GnpR9q25WN7VPGDBcZBdz4qeFW2RKsH55zf8zNCLCUV9zyPK47ZUCDTZ7dfiToHRpUGAeEdwY5WCLM9h5XSU83X",
  "key27": "AbeL6KWZ1Xhashcu6R2XfCG841eUnXRjSmnTbURy6dex4ySa2uhj9wXGvrNwSSZ4EoKfuznAneWNwCzVQFM1jZ3"
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
