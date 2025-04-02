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
    "3prsjSpbqYzQqxzrc2XVye7UkCH8zjSEJUdCcEQj7Phq1eiP5M5qsCXuzMG5zpnYUTUjPn479ZEJBhRbRMr14v5V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K7eiDBD9zcZE118VfsFYHitEw7euFYsdZvGSvsGJHThTvYbQHtRqEPtchdkwAc3Ldr5PCfdKVLS3U3xX9Wt2A9x",
  "key1": "5tmqLmfrVMQdVawkoU1YFifE3ju5FnKazL83M313v3bGw1y1DmQgqRoK6kSJihLKFRfwLBC2Wtpanf4TMRUrXSMc",
  "key2": "4VfgTRa9NmHnS4GydNhkSDE5bswrbjtNCezMJ6jk61mgYDPgLwhU8CKqdEUyZdqw7LQQXKWVVRo2BZ2RE1ksPT3E",
  "key3": "4u7LztzaedhTuj7ZhE23mnr8EVCiqbaMFLbwAgfSZHGt9bRhWQhkzQNXG7UKTgCy9gt7uHsgkdiRFhq7hjfnMBr4",
  "key4": "3U5hNyqiunV88q7JgYm66m1qsHUFYjNSiLakZokcdAHkRqHd9ESUftFKjDvaTWzdqyfMeAiuRaS9kaPsnswncFGX",
  "key5": "2adsLr5AdY4y6D3DMUaGgjcVRCYgEv5qHFHGVM1L3Yn55FLtZMquRVfHtiHZSMTUcnG2zSFUDoTevsEfombzUn6u",
  "key6": "5Nc2Va6mR1rgSDHgwTLbRe4SyHbWgczAxQdYMD3bTc7QeXwpfh9nfnyjvPmM8cGA6NQ53oj5n1BkCiRnN3iTcdMC",
  "key7": "5D7cyFWyVw5Sfi59UXdsV8FjHE5Kq7sWXNSky12GYvLDzG4mevFfLNwxmskgVt3RDCns8nnRANQeBufpoHhh3PKu",
  "key8": "3CMgg4NdD9m8VTQYXivTTtomVdhUQoWk1sncdz7yNsfnoaUpUmWNGhSCLfDrt7QYUVLWWeS8MiM28c2KJdcKZK1C",
  "key9": "xbZVSf92f45p4asP6AVkquvEAvBUbFia14FX3zhuEauB51E7WGV83GWZruQGwHB1Mkv69SP9JmhSdgcnsp9Etpb",
  "key10": "mQ4L7mH6APfoNz81TZFdvYCDMMBaY8b51VAie2bwDzp7QvLDbXz9f2VSbCvPECJ7xZzaSJYW5fmKC5571umGzTf",
  "key11": "2LW1R6WdecHoxxFfsLQApt3ctifvPZVu7cTD3eta9uCivTnxiz6R1yy4FzfQ9bYbbBEFncwsEHmJQBTgX8V5Pmb",
  "key12": "4ocdf9eH187Zn5SihU7zmLS1iuDwLFmH9jHnWyAiP2mYJ1szAhtVLrwVCtfCxAiS4ftJAdAoNDqs1VBGrwKmLPSm",
  "key13": "H86vqhtSLJmWyjAappDHm6Y37C2Vvij8EmzxugeyAJJAtpKC9fEEFPcQE98JCVGCwe2SUTjGP66pcbY3J2WngUg",
  "key14": "4SdvrQxXju9otT8hnJsEJK1jFx8zsyo6y7dntGz59sfPrDppuAWTw59MA4H2W2ux6ReWfj7QxPrE3CvM6WVMHiEe",
  "key15": "wmQJi9WyfW8Yz5ixYrJQeQjwZpx3UWNYmTUvUG5P3DDwbY6YjXHkuk6gPzx8uW58M4Hi9PJY1tkW7MHHxSJPrY8",
  "key16": "3HNkxaAT9USPivcFpSGWi3vVTniAGdBH5ihN4S9mbYd12d5LgTbumQZnw7MREemrycZWiYyXHenViaJeytCePjF",
  "key17": "2kYQbd6cY2UtYy4gjfaYwTAePVS5Fr14Tuu99CEoEewLWC1XzCfRLdEuGe4cNXUux9ktdh3xif8JW8oSnKGyanwi",
  "key18": "4fW7G7GCVzsiQedAhsE3SJR8go7waGzueyzd9yeszqnk9vY7yE89owgBx3TUjddzdnZcNWrBmDj9aeQT2zDCTGU2",
  "key19": "fjjHU4xDsa9HKp9hRERsEFk8HWxwxrhtUad1sXfCHRk22jPK9HKTDK3X678qmNAQgJSzdpwJddbMDfi143Yrxqz",
  "key20": "5zSJhxnTKUnt7ztijTLm1TZJBvpN4hrT7uJXopJoKvDhF11rrXTe9cGJCf8sb2H4TRzSe4HJJkPbFoqiPwHtJcbH",
  "key21": "3b58LyBbus6E3hPfakXw1J5yX8NExRMG8siEHSybL1oYj2iqLTFkQf3DngC5gcXs2qFQo6v2QvEP27sUFQYXFLE",
  "key22": "5fVTJT6Batn7QCT1V2z4gZCRJGL6B33k11fGcPxkZwWLogemwvdKnw7x1VmTuy8qdYNXcCoAeVrLgurmAx1BcgY7",
  "key23": "3tqSYpRNpoYCnvkgqTbEP9WvbLUHSsf4SPPMCR6N2C1TNQ5DJQzHYVryhMhmPhZ42ZUfmoFdsmJTyyaWGxkMZ4CF",
  "key24": "4DvzULWdX54YyXiovp3tQpZGekypbQSjGsWzhxcALhd3fcox48UtH48FDgK6h2TjnKzJpet1c2J3SfhuR8wq7Ag6",
  "key25": "42gUXciym22SZv3XmTATLLjUUEhfUwhoJY2oCpkdedf7a9wSv3Quy4D1EVyVnAw98ESXVMLbsqLDBSkRw1VyWQrj"
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
