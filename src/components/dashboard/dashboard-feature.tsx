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
    "2BVoG5y5tHiFdsVDfpYgQvhUuaRQ8JhtkkbTigRp5VzTa3XuLjFFdzFzSwB6A4mjjqAB6UAYGri8nXbvLpm2QPbd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z9jyxbu5PnHhMBc8CxpjGLNiBkdBiXBVqVDgn6bnNXybjmK6XcYsQo5Q4qPJyB6JASGELnBa8bktSnx46ZsjV1m",
  "key1": "4fJa1htX4YEPMvchPcwZjRjpb6nf9nKQVg6XcZozjseJqRNdYhkAQGWABhnjFPhXcJNQQD4bHHApa96ajQw1NVZp",
  "key2": "5LjmWxfCY6naFZpFjQsvmjyVNx4tYtUjEEpmAr8VzvgZzzd4g4foz9sEYffxZ4dqBitQ4SNU5qBGq9njPFMEE9Yh",
  "key3": "uRccQqELHV938QXPZNcdUeDsJJfRbTib2bckQ33FRbyw8am9DcHYKKqPqNMMuDhGQoEexAtnEtsiMiUNSXFr9z4",
  "key4": "2hANyGSPZuneTz4CMr6XkxSU5nWrme8b13N2i6r2uLjmhd8sH34NhhYi6nFugSbBuQ2xoDSHqFTdxzYspiQygVdn",
  "key5": "4xnfkyhNFEauLfEGHPxtz3EsU5LTUaEpRkKeBrQYqpKk1i5RFRC6oCSJXYv1KpV4u9Ltac4Z6LynjekUG33hAg6s",
  "key6": "2stncvDfhxCcJCiABzLaAZ5YWZ1U2UrgK9V7VebY7fzu2BisekktswkcxNmobeaSktH9NHbiJWifjCkUC7d71Fe1",
  "key7": "5jXGoxF1muWwr3m78gqMtE41XWCg1Dg1t8SwfvZiG9Ceox5WPho8bjFaHQpdMdNjTEw2MLmpZTeauNGcgZTc2LHi",
  "key8": "wVZetKZKKpXgMckeFw5Ad79wyyXsAPmCkGPcNMMRv7W7mfAyicheLGZbkVLXq3M3bvLcUMVFAMedhuXLZ8E4EBu",
  "key9": "3aCAF6p86boJFAqJdtQGSn8uGHbDkFcxD4JF6axNKyifT5q47grSaFRB8UnjYYo3AqvHBKRjPjFoKE1U8JhQSfoG",
  "key10": "zWQUFzpAuqi8WfDBvSyPhFs3HcHKvpU4y1SXhctqLbePNjvoM4QANa9jH324SzYvrkb8qtymXNmYDLCJSVnKUSJ",
  "key11": "3qFFGq8jaw7ccx6pkVXyWzsNx8ejfLKJMTXhLzkHPP39d96ufQCojfK4t9A6NKVSewqD4uA599anqvNMAfSJz7tZ",
  "key12": "3W6u4y5KcPB2ZHANVPTLhv7dpmtL5LvkcJ5QJEvUdwoVfZEtB7xTtTmGs362nuJJRezZH16KeDoiW8DLdCvyhYVp",
  "key13": "XsvDTfs4J39qmDQvmf2zx2ZkWRe5XKM2oQJ8VZqUBVPrmYrNE37W8VZjdBKXk7x6rJruTFfi9M1BvAPfjXHgVJN",
  "key14": "5mAaEx4anGDnuE6bCAvFrFhJSDqSU8q7271NbzKhDPHydQZ7HGdW9N5THJDbmPj6g9Mkj5yyz7pEoeC46SbutY1D",
  "key15": "5yFcfGLJsK6eA9tBwwBCQa5qnZfZghpzuvj2GA37HJ7U2tGYeWJpKNKh8VQqMRzGbqrY6wCetLgzXxrVS8a1wudt",
  "key16": "5SnP2o5NyDvxCh8eZLiNS8ZMb83JwKwjBABDVPkCPk99pamf6Y72NKtYmhHvfZkA9eNnhHys45WPzSExsD84xfF",
  "key17": "3s8dECG72ibGWF29HSD1hY87pNDtd6KujB2rEPCErDSRikKAzrrmToHwCGg3feQo9HDjBc2XNtJGPGVtmQQ3fKKf",
  "key18": "2q9EDLJweifU3QT1492rVBw5r7JkcUVoXjUPqw7wru7zDJx4TQNBn5JunpVU2Gzn7CBcE29qX8a6mDSv3i68KcyM",
  "key19": "57w82ZCGRNGN4Eo2srjZvsQ8GpN4uPnr4e78zmMk7q82P3c3bPGVjayMhrJkZiLfTqRTDAQiTokSrJvvm2qHymFy",
  "key20": "5m4djSDMAKxoEBdiaVi85EnmAMcnpZgT7d46nvhWKjG7joueto2gj7g4nMV1Wbp7jDWuAebyUxnZrMM8wqSNTzCR",
  "key21": "4fV1MHSVkghjmrztN1NT4Hwxfe4SLemNhmJ8fnA9NWNDk8T2JNDfM34aaLyEtCQcgH6Bin1L2egFT8bdr3Jg6SSe",
  "key22": "zLBxosUJ3Li2NmvTmPEF2V7cnSRbzMV4Zhes1FU8CkqGtS5nDj4EaZoe9k1fBjszhHbsiFqnKbDfFsBxAAbEU7o",
  "key23": "2VXGqJoaVtdxZfZfkmnJgFW5f5vwaRs89EPjgkWyHc3mE4i3Qh1QcfHTtTQeCHkaLGwQLFXA4wGs9EqiSzXrfkct",
  "key24": "33S3NVgkRTdWfqrVojqSvS19KYHj33tMR2QvAiQJMnMgw9Ld9YQgyVgiWa2jz75o97L6MaG9g3bvLfeJ7gkHBfac",
  "key25": "LiHUVpDBQKpEySzLea74PnJCChFkWNruZ7atP3sgpcKbzKyroTPtn9bpmNhUvPmBwn1qnrcCimdDkBWJbC1Eq7g",
  "key26": "4Y1CdLBT7fngX9eoSfpnP2BMj2o9sYeRhCf7aLLpiDe8Mcb5PxHAhF4MBXLgTts9nCHLy1tAeLSk7GkoavqrRaRb",
  "key27": "7t7pKMecG98kLDugcViseBzi6cxEwVK58yPkpHrEDMuDAvN1EyR5Uv7V4Jg7svDbZogT9DXZrAQX4GMGpGdk9JB",
  "key28": "aMtb3Cf2YPiM711MaH4N4jBNda9QNq8pPtYx96bzcEtVkAPfVKjoQtnAbxxJ5z1LpvocN4mvPF8Yt6P7mTiBtz5"
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
