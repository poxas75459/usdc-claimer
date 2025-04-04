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
    "5zzyfjNxUukkp6xcUR72mzcpdayjUQCt3sQF5xrzkEPvBo3Wv6xyAwtUvLQoxnfiDJGcDZ3Lb5YrDqJF8rGuR4hm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v1hJMsQ1ysfYk9JG2HvXZ1553DBfdaPYBrtiH4Aspo7G6DCRVbdxfLaeJnBkvg2SoUTV9vs7WBo5N3RkQkcwN49",
  "key1": "5imfhQAzErCdAxYkghQUWjphggdzdcYKg58UMy85pX76Gngui6mw9mGtdkAMwkKgRRFvCrRi3eWnJeVcfqmXphVm",
  "key2": "H3uGRiRDXkwANY7MvCGSsv8G67J4L9yAdH2MPUsHHn84crk5c4tfNh9CTVDEDgqxbBMmfGLg1FjfcGwvBDfohLM",
  "key3": "ipN5rfsefE5AJPFTEBosDC6BpfQsKoQn7irKVqmuNc7HGMX3CTtDrUVGwxBLd5tSSi74ALnPaXX4QKrzXcLGpCN",
  "key4": "woteBUc1qoG1CNwK9ZEJbF3WYVEwZXAuhQVFxNxSLys4PmMECWFFUD8cVFKUMjYfTMtKctxoMee1hhQjA8aTtcA",
  "key5": "2psqRTaHM29nwDtVeDud9BLmQFWb7kfAKm9Rc7J1gQNdUmgZkZtZcCjTZdaMihFWS8CGvonJrDyE1hsnJ2bG8yE8",
  "key6": "4rsqEZs1ZhDW4mZzrsSbooZddvKvL35SBjz1DzGg9wbC9cLU4cgxjwjdSmtR61VEpqjgHgnUrxqtsH9hhdGsRbyv",
  "key7": "5zbz1vUQnJWi97UofQcnuHiz1oMv9GNEHcThtytpqaa3cLEjrZXCh3EC1M9kLmSFRDpDfiZo52sR1dwJjJUQfZKh",
  "key8": "DgiAqP4oTqeXPjiZQ7yE2vF7BGYDg2R4wRScPnRTpVLtfsNRitkvQLKMK2MCYk3wDo7MK7YB2xHNsiFhoBZhrhU",
  "key9": "x8Pfzken7gjW4bwpUbNcifuCKm4rk4qfDVRJJPnQN5LwEAZZm2RuNTMgR54hPfxGgzkG5e1hoeoVtm4XqBH8Wu7",
  "key10": "35vTUnat4LnxeLsLuBTUYP4CmKpUexGGdwHcJxytWCPy7q3nPFivz7QGAAfrf3mPMjg1eNh43hXk4YYxCvfpv25B",
  "key11": "3QYeTafskyrS1nEFcJ1jrowpPdkCH31tuYs3eae9ce6uGqoqmLotcUJkSyUnNkXwU9FL3YstkFf3K6MXJ9YbZ32y",
  "key12": "33jCTJ9hiBbjehEb2vuHKrXu3BoCQC1eTtdPHQ7TTDUZ3tLJVbbmnKidFzqRiCEs8hH6n3LVPdkKFN8y6uNsbTPH",
  "key13": "4xGrc5cix6cmDoE2dwzMneCkbctagRjmqDNW7BVp9W5QZphS6gbDPGnNuXfUFomyy1aKLyWSKZnzzZeLijgGnyj9",
  "key14": "54o95GpJp2t2nCSUZwPiHKDgEV51q5t8Ckb9DYcRimfLSuGW4eRkKdF2h7SNMXUZ64HGQjJPcpiRE9F6p4pf92W3",
  "key15": "216MdDdn2dtrK8knuGtJUqzkDWfZcs4W8198L5eqspjbF3PLSobNrBzPKfVFN9WY1iwxc7MJuBMbRtMR4PYriXMs",
  "key16": "5CTsUiTnr2GL8C1DjS3i72TydacgrFJb4UedioGrwU4tP7dfSuSqcJFBJFGtzDcPEa8A9VqjpKuR4M2QXygUqJQU",
  "key17": "2K6hgwn7Yx98bGJffzv1M9oVogTpqhzUVbXN1fQh6EezNRzYTwmWadY8EGRy8mrNQko8ar4kCtd3brEtXXK3WQC5",
  "key18": "2AEHcQTWYUrvQkxPJXRvotUFZHnunaA2KBxc78fSCfGUqSGXc1k7T1jefap8RrnbmJWKdsndXbmTbor8g6ZhM4cw",
  "key19": "5QtEF8azrcFay6mRnPtbZmURZAr64UQ3NNZw4PjXJFq6rKGg5pFgVu5gV2a96MNQLHqJC11e3voV9PskCSXC1fxE",
  "key20": "sXbsBn3EwBWtwFcN9wmge6acNcftwGgCnZNuxKS8h7akG1S5eVDWeG1QwZAap6aMFf7LXy9J6CJEi2nkSEBjV8V",
  "key21": "3FNw22moGSEFAQSBqVTLS7uyNq8DDLH9JoBKbpcbY29fhy1RvSYfzoG6nvifZv3KPHLg22sXUz9BKAC2fWtUmUWS",
  "key22": "5D6aeaSUb4mo7BEjLEkMWDVQ2r2JbzfGZVMZBqdcztJ7Q1MtRRiaHGnN1HnWw7QTBptQ4WVX9QRGy2c5hUsHmHx6",
  "key23": "56ZLbYrFUgk8ArV26o5xdx6ySxKywjZCbuRs7UZJfgp9tT3yHdENKypHGdXqph6GsoicWQ9JmDM1DiCF41GeHVf8",
  "key24": "4ReRcz64YGCzTgtUXaSPfNVfccZTLJaX4Q459aq29ZPw15H258Hwt8tbDk2d9Mc2TvQsEEG2SNMS41V81c7raBMG",
  "key25": "5GfxHK57xBjtk1SfPCNW2Vo8HmSERL4VHK6F4GXQdPvrg22gmH3am7DDDuFzzrtCyMnhiK41DzbphXza3rGyHuys",
  "key26": "4BhJFFKPVac1dDuBwJnoVtifTwDsj9NmdXuTPBUNrwRKLGXYZESyHQfCAcio1CJzMwjqnJX9wuoudXgwcYXKDF67"
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
