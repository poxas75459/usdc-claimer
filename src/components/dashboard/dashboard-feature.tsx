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
    "47Np3ueXhRxpPEwDfJYQ9urjQLuHmhTScjutJjiT6LbnJrmYHGLH67gbfcR4bLecZYg5wHd12vwD8NBfX6UQNTDC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ytC3PFTqsUZgcawXM6UVyj7gfBuZGXwbeUphTKPJjRwAvbD57Z2nu9noeZUpTee93HQPk1dd5BkvnuNWnoxAAbV",
  "key1": "5ZUqtRgjf7mZX7MLxJgtWJgMcQv4u8aAzLFZDm5e89s1go9wU7H4rad62ujs1TnL9vsGdV9pztNA67n32WGPDAZb",
  "key2": "zh1aecBzZmqcafRmnU83quanrfnuz2EBnjatX3D8zauVMivPpCKctxfkGxJ4Rn6r61iSSaDtMiZxzjHHTuxFWZh",
  "key3": "4rNoLu7c2T7VXVeu53rNHJhVp4pS1aYYc32bPzgPEpiuyNNrXEV5rjywQ2FuS6C9XP8QppyPP8RppD442Yhe9vWU",
  "key4": "3s1nW9kNbHrqZVtbovg9WyrtHSMoRPLDQL1riCki1yrMk2dTEdn64xx6Z9AuHWyZJsMK42fJR9GkUZXK8qK1meSD",
  "key5": "5VMHSEHnSbugDKDwAZ7jgdtxo8gcvfn1MJ4iDsmSPNYvFLA1skZq2MTL9Ro4PF2VLXWLzeFbtuyeUSUFg1S6nU7b",
  "key6": "3rzA8tsJgqS53N1auJ3qGMf1piovUiR54ziJWAv5aG924PjasG1ei1Ewb3yrdMWh2yNXbv9FEDbVtEeXimfuHkQ7",
  "key7": "azt82SXENvcM4Tz8M34QMFD4Q2H594GVdy3g4327MYsqw5RTZNg8JU9tZayzv19F4yxtRZoujnut3gDotegGzvu",
  "key8": "5jGqo6ey6dfQGGYZbHsYB83ghkV2BrGLetxqL5rQoLQaaL9hgLMEvD1hFoJCGHBWVZYshr7qPADrDKvixRsJRe8r",
  "key9": "39mBGmqKzfTyUR4Vh9se2sjsyKrfqHzEBHAjsKiHBiHyAVAguhcYniFyxanczdgCLDKCqiE4gVanr8E2iKefkuhU",
  "key10": "4TikQRr68aCdd9Z7a6gkMztq9LRG5pKCtYm7D8qZwUqz2t5rfn5vwMnAtaYu7pQMEJU1TSU68AgjPz2TmhpvbK4J",
  "key11": "344cxuiZeG4zbsLnMGfUV1bfk4KxoFTvxr5UbNLPdZTiQJQmx3HA6bzY96CDWQqeVAexwpB4NcfCFNRsbSC5T8jc",
  "key12": "4iE2eq1mKDmeRwKNzmcB9E4Hh2xKwnVS3F2oJiBBekN28EZkRHmBqdjbr6gRQ6dXrW3zApDzJZigmdJ8hmnZxNhL",
  "key13": "4TXNLkfWTQiHGoEBnez1eLtb9hK2Rg9ZDqAM6knpzpV86AooSvj85CRjU2qD1f2n64WNqw7WfkN2r4gdn4Khojbh",
  "key14": "67WQAENBTEVLUAGYAabBkRNtjWQZP5wzWezVpeQXrL4qy6NuBbnk6fY9XXLXwXfyHYSd3NasEaBQuXX29dUQuz1w",
  "key15": "MSdhGWmWEzpTYeNxm6rbatvHpRwp6fTQTiJfkGk9Hcq7XU5iaZW3oJZ6LfFegPG1wA87bH5P3dfsXq1m6US3VTu",
  "key16": "rE31mbKFGcvtBdoVTe77bvxxGJTbbGYoseyn4nDnYA5YXTte7756L5ZFbhFTfcaj3iJiX1CrCBodNY7qp3rgz34",
  "key17": "2W6eoD6q9UaVrPepSutRBANFnMwHvZesPBuKTNzXmL7ctqKA7uLSXLzbgKF2YFsC3SK7E76hp34qJ6M3CvyyF3x2",
  "key18": "N6biYvzpNnGPUTLvSKfVXKB9gYB2SwtBPq1CdG2fmhXz2B8DE6N2DWHDUkGXuP8n6wVaTPN3ikH4mXeQhXRMyJt",
  "key19": "39NfSYscVkgWAJt7fuoHFGj9rRxDp43nM45LcZJ4iARVXc8QzufYFGFtBbh8bTk52LQ7efMnudhxSdTHcJtVKEp5",
  "key20": "52pfL4tC9rEs3o5e9kEGNHCFhGQXUPi1GFCrLBQy52eSYuuqhgB9VN4E7HGXAjUU2WYiNANh6ubUvgnU4mcgnNkD",
  "key21": "4QmetJE35EYTAmnK2N3w6bJ8JAQ46GffdETQWWqgisuUMBKGnEzBceiVN91izMan2Yfznqi7tHRyZAD9hRxmcD5N",
  "key22": "59nR5VV67run5xX1qgMSwGbDRJzyunUM7gLow5xbeEwJP6ypDpUcaytK6esQEwqb48Xpq1QZgg7zMnq6Ke4E7izu",
  "key23": "mSnmEKJvNApqs7VVTF6fNJRZUrq6WEi3tdMGkjVP8cnFbL64JNiYhhgRqzb68nBTc46HJgZvD2akG96yiguf63Q",
  "key24": "r8dPsMsaNnzgr7RqBEb2gVTpZBm3dy8e9xkG4muLznmtgE98e5FNefKDdM9XEYRQtVFmePJ5nhVhc89MjwM3Gfz"
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
