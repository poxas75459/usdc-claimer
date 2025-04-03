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
    "2HxMN32Sx2nuyQvrqAMD1UimMC1pxJtmfSmhQVzjcrQKtnuj3AwWbfzLgnacQCwLrvWayiR6VtL4SCLStzvG1Upd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xargiXQdr2NSveWPmqJcdsdYdmVpiZXgQ6LJmFhRFbabgVjnSwkXzAwWSbK3Jmcgvt1AvpoFpidte95rSA2FeXe",
  "key1": "2rUW5KEdiqKdmtGpCUT4vgDnKGF7iCHKgQnWXpMrCb2KXqo7VajezUT3k9Cvadof8YBsQqAKtuM9XhJ1LBoS98bd",
  "key2": "5NQxBtiCyzi8rgh8k1CeZvwK2imv918ULRRr6fkTyCgZbHAAFcQ7U7aVrQEWXds5voSoSEymWYeBbYNjtqcpHvir",
  "key3": "3218FwLJwPHL1kWcLLExa4nJeo5N7QFobpyTbvf1R8ALZUfEp7A81LhEkjjJaJTa4Cz1K5NAMTNb3fy2G4L9c8YP",
  "key4": "4JvVzwjGd9VpfbH3kzuS5RoJjjxQPG5gYDETkkeeZo9YDXvesoD2xMC3qtEJvCE9ZvPS8KEAdcMGzeJwTbvh3ygh",
  "key5": "4bPJEqU6pVVxqXu7zeiLAYom86S4rFDxHZxk92CJdGKQ3SANbmfcRfeyz7dY6EMbm8bt7Uwygt4LhZMCjWYFkARN",
  "key6": "3ZCjT1URNfJF4KY5CkzhCBLFhaQccHU8NrQpUXW5r4dLNZy44XRGN2Mr7njLf448Ry8R2hUmv6FcYAqT5gCBv1wW",
  "key7": "3GF7AiShyhQwLuAC4EBAAqRg2Bcsa5ZiCwSkxf649xEJFiDfvCsKDQvK1ebGTXWvgpKrRQcsyCK2eR8gE97STAsf",
  "key8": "66kW55rrzCLhgKAhrvi8qMd943NnZ9wCGKaAjASpPow7C8hXqJ4zhxgj8V1gRTSKZtkM2mnynPCZKXc3wacBkqGB",
  "key9": "3yAbx6eXg9YbBLAEp29RxMsTJEsJjXNnJTfLFEGkpy33riSqUsoFnyezAxW77tXY28bCDD7A1icCtbnS5BERTmoK",
  "key10": "21aidmHJWrFX6hximkW8PX3iF3vErMRA9VZHqS9FDaWmihLVaLYchMJysCmyz9jUnTNTpX2gGng7NCoBqgV6b7fN",
  "key11": "4cGJ97o9ULSqgKLtUW9mAygqvnrkZkyJiBC7MNEhRirTuwY4twfPws9ueYPeuzMqthfuSZgWJ8xsUxnbBtZoiA6Q",
  "key12": "UZhdh6VHkrLxEEwBS1xZwVuokF4KxpJnKhJfMsVcGyHvsrjR8n8XYThy8Q9Uq1AJVS8G64GrQ28i99NNs41faKW",
  "key13": "5YRjG4YxMetxfJWkChJGreMv11kE7JehiX5CBoW9a6uVJwroYkw1sA3Pn3opsGfoxp3XYLmAHGDMdPWmTejqXg7g",
  "key14": "5AJB6acwAEAmQpFxnmhBNWzdVdryp7D16DXUFXDyy5aGdBX1Mbm3HtCeke8R1PXm7M4k4DftiaWftUy2mGCQKZyx",
  "key15": "5HJ6WYV85ye365e6QdEmT4m1AGvQ87R566CY6jN1wY5NWcCD6xrWiHGuU88ae28P6GsCPAaCkYae7qJS1MCo3uVK",
  "key16": "4h9dk2vXb1UHxn29H9giW1sg4hNomPgisq11h4xjReQLuSkDKAiD5BNCeF7k5EF8MjaxAnonFgRkgYMdsw4ezXLP",
  "key17": "xpAt2ThnqiKpbGvGmrEJtjgXMGBueE5vLcmgHNT45U2kfHnGKhosDfPZqBe7gLttkh6GTG6sCnoXbsC7FSv6X1L",
  "key18": "45hvei7rfWc7tRSrN7VrxA9peEZQAjgAwgTStfLo1aK11MziFFGFD9dPxswKxQVdY4qNq2hqefVx6ygzWT3N3mZC",
  "key19": "cGsY1fDyizQtwFKVasp3Srpxij5VAK9RmT2xa6haEinFTfpCJQaoNX2pbQ3hvnDMadrgWkrf73MRrmhD1gNQS39",
  "key20": "4SLsxC4vEZc2rjqsG2mfBnqhDnErWppfUb4s3g3KJRBk78mAHATuxfeGzWnu9sJdqTZ18D5Ett5kWWPUBPAEtyfc",
  "key21": "5mk2QLAFqSYbuVNfHdWandKKSCHkNjnJf8vAsVTytsbVEb8yWZDpsvy81oekF9BwkyBUkM8nhX6GGBwCjw4qwxjG",
  "key22": "4EK6m33PhXktUGFGV1D9hTbLF8MQjA822JQyRTyXqHydHqkQ93ByV56fGf2vh9THXZFM1EfvjE8ML72PEA3uZwda",
  "key23": "519bLwVj7hsXziJnKv2X8NqgA6TpiS2SQDmQ7xBxnTrMN4SWVgB6GUk2D41iduF14AaPKv4MvtJ9QPeDpnzWL1Vc",
  "key24": "9kTfwTgE2xnW3P8x8BwBmcDCxQhiPfxbx1pUjRNR3xPoFUtfKcTBJQQEMBiiBHxBzhkCWRfdLHWGYUXWwxHQC73"
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
