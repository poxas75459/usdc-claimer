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
    "4AwpTi1cS3VmpumQ82sQnSLAekMnxDWhmkfV7jxT6wT9bQGTdkvVn3tEFwydYzz494sgEkes86f1UnxfPVvMZ43G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WmeWhAPGuxNQKRxi3ugHh8WGaqVRwtxZRAj8PyyxS7xRZnVnx8SVCZxwJ5UiTpK5quEcaWjMjGgPbbNRJwp83Kj",
  "key1": "GsiT75weR6AyyhaJiyCzWv2NrP683rYXokT7tuduuMSzPaBjZ3qDdhheBd7MZ7S5PyafG1VZoXG5fZH7aDDsjsX",
  "key2": "5KNoiyv2QWQMPDTuGBBwWXeUTYfDrruLJpXSs8myFfrgLJxXbG5TB5doWAN4svscz2LS3RDRXxWRu6r3ePoRenDz",
  "key3": "22sc3rKgnhQQW3LZ9S4gpcXYwjNkZJNkSFxYN3RZADaaTb3SFuqeieUv2Pic1BieXfHUftwGiSe25n7tZYmjURCi",
  "key4": "4SSormGMm474gkkSirVAudZtNyjnsa3FF7GUfRxaEu3zujNLSL9S2HdSjM4paC5nRC9WAAjxEQxxrcknJDHBifSp",
  "key5": "4c4So9YwzZqfNEj94dqYvCFr2BN6bWDuhh6rQiE56zaAdLR7ZoiSEpUgZNQ5PBEgkBdxcVumYcocjVDhbwRgJELB",
  "key6": "4TaQTCasBL6yTCyv6uNPYihNgLCXWp5c9JhJjfvSLYyhuTp3hLUdxWzVffMGKmXEMBTRYLzvUsEducFu7w4nv1hy",
  "key7": "3QJb988gP1pRjcNS5t1Z8NC1YP5ZjK9RyiVyWAxWHqKXvGV5N1mc72xJvjHVkqHsEpPqN9LLoq5QWemELGbFdBcN",
  "key8": "2ugqWoCvkpMZNRjWDqbZdG5tG5JxfnLBxzrRfSC42c5G44bXqfLdU5j7QtR1Sq3TVmyhvfmH9jwG65y8JW6znmJ7",
  "key9": "3CGZkM3sCRKeCamuwgQSzZRbn6K3DmMBQqwmqfj6GSTBET3GmpwbHsuk2R1mB2deNQKPqc4UvUfn8EnMvXkoNCym",
  "key10": "4RNo5iurHas7inwpsvs2zTpzJnHYxq8Fj345RHEg832MWmzdu4BF9UUbGkYQ4D5a8XYxGL9rN153EAvjYsiLDXSt",
  "key11": "tMCJwNHzVGYjZHTdV8YexoofRBV4tsvNESy5ieHid1JHQhsWbP82MzuSnbfa63BjE2yMefUoQoD5eLzVFk8kAMc",
  "key12": "3Bfp8q1RHfvxNCMNYjisC7rP3T3Wkwt6mULHrYfKA6Po1hmgQxyTrZ7RjH2daJfZvMqKYWUTsiEGiUtgXfvb6Xjy",
  "key13": "eK73B1Q772UxHFHaWcSEgYftc5GpH5airsRtYBQhM2w9E4N4b8DcgBnXBa2EzXd4ZPSjNipUyzRKtaoxUUcccj2",
  "key14": "5gojssU2Yt2FifAqcWgpwhGSS1a4oYBwafsptEYiwxz5xaydyTg2x3fCyEie665BMDMawxtkkD5oKat4fyfx7f55",
  "key15": "4agy2XC3PpsaJmtuvPRLnUCZ7t2UWCXZ6zKw2pEbaYL6QGcUNSbAFbcxLRNsmbDQfbddjUGaQ3M2XG2xbWV7NCc7",
  "key16": "3KVcxtNyq3Rdp9svY6Adt3RrGLB8RxwEx27LnJc5nipWZziTdRirVYgaZinNKJuxgjahZXeQihUWoMyiU3zfvFEj",
  "key17": "oc2dp6nRCk5synsnwBj2wEzJPopenVQHi6xT1MUdjbWNzaK9gz5TU4hRNrQoWHNhNbajUyaperwX17FwGWtGrB8",
  "key18": "8qhJnyvCLphEAfNrjquRLAcg6Z7v5WvzfUqT2x4Px8v1xY6krP2tbHTi6YyDNxJAxtXerPACRKtVsrkwSTmJMZp",
  "key19": "5pdH1Ee9E1TiEq4sxMuPZ8ouTv4A2w2dgQzajtpG6tMFmdym7k23hRQPtY3VdDx49AhbVrD6VVyALCHDaZJ4zhz9",
  "key20": "2VYH5beF9So5j2en9VirpGdgSSiupBmf7YP4DPUdQdWUD4h3UrecnxrZF1TZa9tn8J3Ub5HAtk9iXYZkeHSyVCR3",
  "key21": "xZzfPMWsCNTY7A1peWyJJEqchciCqDLtpmDiroMFxKejiZZ2F6qLzppaPJPDBKuWQfSfvYMVhz9epV32Ta2DFyg",
  "key22": "54jXXk4qeJsvtfkt4QJMTRZgKTqiPFZkd9ysWtY9qM4heoGP2YM8DnWCNcj2GJThNcZKshCc9sYdJSFpDWUuknpc",
  "key23": "3W8iEtJjy8PrT1HkiQqYPHmHjLvbthat643HkmVGdNiZhovczHb13CYvHaGuUfgpozsTjGU6MPxNHxc19sx76cU8",
  "key24": "NufhMkq4zVsv4D5ZBmoi4aCULXwkFBi2trsxcpBejMTC92oBgn6NwZwBYoprSb36r3tGPmbGAPLXgUgZjNQmTg2",
  "key25": "4RvTG6Gx4wxqkadFUvGfmfKLcuaJJWZkKr2VJX6PUmDx1T1JuNvhj5SdTDMk9PhskjRAmLd4Pyf9gXsdUxWYtjBt",
  "key26": "5z1JXryMoyaEhANLxVMcmVfuVwPdAcZae3QUukiWAdpK8ixWfbo2qg1QyXDhh68r1GKvSMqCcBwWpczi6SdR5PaT",
  "key27": "5BrnvqqfWYrtAsuC5Pb2ciQ3ptvXVGTpKWmTKK733d551e47SSqd4namm1VSmvD9DUmLnXjBCWD1QbswRWHMifMM",
  "key28": "34oN3ueBF38D3MD5yaT5MjpmcUtVUdcJks4xsXCeBN7gY9HRMXcvz7og8PwHD3uEgPW1JrMfzaXbzE1xNGtGTdPN",
  "key29": "9DEC7yt7YNDhrpmMCCmfHBYTrHeLrrkUeYhWYrmJ8qbqgGsaRvXTKCFgCB6XCNCX6kvNXDf6CTHXno3nRev3SbF",
  "key30": "Px4Wcz5Mw9fNLbJ4wF8GoxuddiparquRRSzmtaCaDMZQ9Fi6rF7164Y9rbQgHYHkeSnaMaNsCJc1KhqLwe6G5CE",
  "key31": "2u1vt7eHgvbPz4d36n9vibMd7kHU4tQY4zqPoWTPB5EdkJcY55MPrUgzCbeyxCcg4RBqMiVWaEhFjUQppZVtdKC9",
  "key32": "safcfLox7XJhe339ZbGiju7LPi61QfNzXPDdi6z4RthFZfwEFHRkN392uVivmokhSHcLvEZ3m2Etya6Z65RNxb1",
  "key33": "4LkqwBAcV5rdXaZthmoXsn9MgG93aSyueWompaio34f9NW4ciShQ6o8i3t9pxkGkF6VFBRKFb7cb9U8VtTeJvKqW",
  "key34": "vgx379XUwCmxK6QAWzL3b4AW2N9MBkfhQExh9wNGDWDxuNhUuCPiqAYJhDYb9bLkumb4JkgMMVUVZ8ayhjy57sa",
  "key35": "3ezSZSFW6Mk2FJvGGed3smiW88JQdcgmxYfAn4SDMHfaaX3sSsZSPXo7b885g5tmuFx3Y3ngYMnT7zwH2dYJFha8"
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
