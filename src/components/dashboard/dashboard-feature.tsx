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
    "3ogFeq1Hf3fRg5xLktvX7cVVubQPaso2MYcu1X8NurXUd8jzd1ZQXjb8zA5WTRsHL1uGCk36fKkbjNHRB2dmKi4h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NstcR8FxE72EXk6X2fo6KUiT6dUHKFzLrfJGtw1VuwRePphotdCdmKJvWan93jPsc6nbAwLG86qRBHsKiu2egbg",
  "key1": "mxN6WEY7u9mmrvYEZHYmudGsqnXaUEhgFUiwokAfqpbRb89JZcnpwgd416JCDHdUHa94rkyiwA4yT85ho6pCqHP",
  "key2": "57Maq5KRwEfUDe4RAwhLzJTsEgRos4Ysjm7sJAtwTngMwgevypqLL7zJZowjnqWsVWZsgpqdTyCuLiJ1Y7VajG64",
  "key3": "zxPYxcnuUeCLhk5YoyXYXenADB5RKNSJS1PqLFxJTwm7u7kGgbkXAWnCsRSR1z3pwqxb4SuoYaZVhr8Zcr3fgND",
  "key4": "31c1Sfa57LBsMf9n7cM3yqyi6nYJNVQG7wFJ4TRccMV2C4zWWMgpoJFv8bv5hntfBpwuqqVi9P69GfwQA43d814D",
  "key5": "5rG1qvpVN4BUY2aC298RcdBieb8PYvQ18fyuHDPByxZBonHq85UeyKjosBMuVbYiFr6PZ4QL7L7B2d9HyNcXZzuN",
  "key6": "5BEAymMqfnBseHxjcGc9WLpM2DLDXrRD5eifeZ45HhhdgAuQxsocoCGApECuqAEpfH7SJjdVdxBWV1jdz8XfHRxm",
  "key7": "252MtivWZ3r7D8A53NyV4TtN58CWsMnoBP1XGKUdUs3kCGe1ThTodKJNXL3TJgtVDNcgkTQp7JhqRNzxvyxzUs41",
  "key8": "7g4NamVP8ghD3GNZaskFAf1Bmv1WTgTU5ZfqYX74EuqjWFw34mHDwwRMJNvt73H8dYBC3LBUwmSNnCNwKXuR466",
  "key9": "Jdsir5JQ5wDSrS4rJUrKSJQXfQUKQYqusSNukov5st1H4rvUbKniwTS5PKN5m6REoxxU9eqwfX2tYWwv7Woyubz",
  "key10": "5YCCqteVNdDJn3W4K29ygAh1wk6PZpYibRDAEy9JtokWyBe7MqRRBy35nuFDa8CEv1soxPpV3VrcAT9as7i3SwLW",
  "key11": "2RKU9CMkVY3GD7eH4y2p1XvvJ4J1xqfRJox2qBjyZmnxGmSd9UdvX9g2zYBEBX3UrCEXLP49jNG2hQeAaDnMgXa4",
  "key12": "2kfvwWNbL5Rkx6FbATTvX4uRmrztfNqcT9JVfstjrN45BAh5fyVGijj5rkERrVo8HT1XHJ9o7S4uwBCkwBd5htza",
  "key13": "F5UxMFVd7GLved1hnQ89gqqeN4QNis71NJNcw2Tk5swtpb87iKWHnau9Muw7NtSfpfW8znjM8jJzQ7bnW7LSjpm",
  "key14": "2M6BzPf2L3xMokPGNyhmYABBWq89rys7UbTYBf321h4w8yNdKY25jPtsJwmR3vejwztLLE8EY31R6295eBN8C2p2",
  "key15": "4yLmq6ENMgrsp75WhM2XD5QNDrembvPs8jnFdS23yYtGveRJ4bQ8Y38axddkQv1GMTgiZGpiE7spcoZXy67tRnXp",
  "key16": "2rwSs7BW5Xnc2yoPybKX7Ff42FCYpsuSjGpX5azk4QjsoKsPg222tVaYZbqXqwi5eyDmDSZoabC9t6vxnqYLD6W3",
  "key17": "FESEGRjeYBnYvyeZHDPTtU8H8pJF5H42Ay5HHGsVhcKnvEQdfJsnHk6avQvpYudgiq9waxi1tBWmAyuVtB7zeoA",
  "key18": "4Czp5g5Gmk4dHVVpTFvKxzhCtiPsEnsj8rRJiXTPuPE3kb1qiw5gGzKWdL63bVQBguHJk1ZPhH77cECm3uuL9BAR",
  "key19": "9jmeYSZhD9V8NnQ3y2rpJqUF9w8aNytsZeJjGiCsDivxsWw9D2NGa8ePLJQC5PR7fSdaJrqAHqosu3NGtWjdGWM",
  "key20": "4VsYbidm1wf6jqWvHt5TiAZ7DiEAu2sWqA8aB634fkF7Hgaj3DS2bzrN19Ggw5cEP3QLn2pLjzqrhsfghUgGEvar",
  "key21": "2cX9ZcJwkmRJwhzdqyh4D3iirCdBPra92NTio5AWAtwmNDZmN78wJfHjdsoGurpF9uXK4eR965k4v4CyHTX4Yi82",
  "key22": "36gNssSGGmFQFV31waUneM8ij2DzfuwayWprJmJmwoXZXu37MahLNpkX2zxRAimHH8f4GRX29XYqHuhuw8dj6WMr",
  "key23": "2iNPp36L8o8e6Q7smRzZpVPecLPJH4Z8bqZuZct2aCftVJWPNb2hjyEFJ38KERAuLq5T3PtsXsp3hAuwqd9M1KaL",
  "key24": "3ezH6FCwzf3BkF6jUUousi4Rk94XkLpTZdHPa61RRuNfbi57thdQqPoENSTdF2KtS6WvwuhLV41ySESd71tyBoXd",
  "key25": "p6kVXJirbiZaat6tdoBSMquYaCxKta4R93RqSCqrVR4eSBPCdcVEDQc6ZgwUizCXCZzyrzVXAs7qVyJQmjgDbDu",
  "key26": "2opKNnup2jtb76myfyEVzJAch18NGkuWqYVj6xC46TqE5gGvTLsEG8NstpCJ6FQUebM5uTtiwedhAh3FQ1RFxNtw",
  "key27": "5tED4UD2C6hQpF3gp8xUq9CtQNBpSCuSFSMT5KkoY862yAh8yAcNYw8rB9Khb9PmfwNXGKJj9i1MATJEZLjtjdiV",
  "key28": "2uR7qKTG4WFwgVgpSPQ1Wbg5RWUmK4933e971cDXbtQsvv14gXvtAJdH9mcSA8Q1NX9gvKvFV844J29dQhci4u4Q",
  "key29": "2WWet4xodaVJ1TKr2iJufDFVY9Sy9tExN3aUHYeKSsSQw432RiRPd1ifUjBnqeZuPxM3ybxYJMVM9yg9dSbunwSk"
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
