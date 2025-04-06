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
    "eke5nxXUBF9FkktgiJgHkDPYBfCuLZoZc66U6cKrfNG3NeYvoS9qE3wKKt3fSU3WjRdMY6c3uZPvirCyZuFYfdZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WZkPqNiWjyk8zEgRqGEUFHcxKh4CMeSdTA8bx1BWy5PR3dtBwehEvNLXnNmomvdh8KL7vewukv1TdRLd4pfChGh",
  "key1": "45tr8XQ2Qsobqe5pVd3m9ALgwDWcRmpt3jH4YWubLZ7qSGUHnXdZyat9ebvhTLHSLdNLGWGje8jFtkcxcz8BF5XX",
  "key2": "2q6GWVZN33TgGZE26VGkGQx7DiQSqbmQcs4uZaZqwnpNyciXTS5XEck4cAoryoi1EuSUzgfqwLaEqHN2Tn6sKXMu",
  "key3": "sg1GooyBTRw2h911ag9vL5iPzA4ZzAjbmYVhrUnVg6dWWBpqTwbQYdAkNVwSovbZxsV5gA1fdU4sUqZRdByLGd4",
  "key4": "62PzHeee8XcmpQwokwYnovmBcZxQurxM92UGa6SUtDfBVcDpjQmgiPuBQcEbR8fcFaSLCRs4D3WsmwUc8M8SnS7c",
  "key5": "3KbMbHVce5H5wvibyTAphu8PU2tevjq9kZ33KE9XykJ2RFzdtmfEnr4PPChGYMeNX5fkGGrWqEqsGamYUJQyZqCS",
  "key6": "Qprnbn4Bw4yYowXb3bfiFwCGbekv41zJtzQfUco8ihSd5AbCrCod6tUYmoqZcqNJmSvdp1bUfSGvSa92rnRKuSG",
  "key7": "38w6izBzGci4EtHDqWmxrM6e4mkttVe3k2bFcRzybtB1t5y1bgjkBz6gjaimrRFWyTWWSs3SQemnMQVy2nwhC7o5",
  "key8": "34GfhZWZedPqE6vwRhrgwk5UmX5GMw8cx8maYkujH6RQF9N3Ukmd2NVyG6ye8WkqhizeC1yKadbrR2fppkdbf8B",
  "key9": "WVCG9AHpHPwytebc91FnJhvnE1Ru7jrRijn1SHvAkhA6254hHafxgyAYjZHviq8LWMsHEfrE56iLYbZMu2cS14o",
  "key10": "67d3dPS7ePAvE9yLyfaiJve4XLDLiRMADCZKijTkzV8166yNnVfc5AdtbMdfggXDqQKqagpBHMH93fvEomnRe5yZ",
  "key11": "2Pvqscmrpvi4gsozsUivVhwhf2sGehMQzWgU8hp8wa8HJmxZEbxkUXeHW6c4GdRLsSyZ6cmNMSCAooNhh25mQyeV",
  "key12": "4NoVZqryWu3y5modHXgFDpiN2x771qNwb4tU86qMr5sYEk8ofoSrDK81NWtDsEkCu4CdBLTLdHrEjw94BtYk8oxo",
  "key13": "pyXYVZ8buAHzsQEr66UUDxz2kHEQtC3hAjDGcENbREq1CpBCMGUxzsuZkdhjAYJLufQCWZK3Fqk4f5VL4v7ssuy",
  "key14": "3GuvUb1NSbc6FgQbDP9CBgvnMch3Xrq8CM8uHPUQR28C4CJhNNuNFWpu4yCzixs1RGJ7HqWa6QisDoMRJaNpXZ1P",
  "key15": "3K6n9J97K5pG5v4vvo1ESpEpGwDeDvJCb9Upao9TSxHtWouRB8PvHHGjE5vy9cYGAHng2BdAYL6WeGhpDDkrpWEV",
  "key16": "YxQjjs5EUfaUvG8SJXSvac1pY46gXqajixhAiMeEeMf4XTCEAwhocvQQP85eJiu7CU1aex67TNErhprfL6Rr6K7",
  "key17": "5htoiFzgdc2Ei6g6Mnvv3HsL26Lxi2o31xNvaxLmCuh2K9i5gvHtDTonGFqwTFMDP8UFZX9cmxCx11mv4o2Dkhtc",
  "key18": "v5MGKC7RbRPTiWUnF9Q4ADHHUWcEKfb5ntqUCR7Egq2XDC9rqq2WcaxWyW71VoynkzJZh1sSy5WEC3UvTa5rbd7",
  "key19": "4rHBQfd6yZDcF5dt4EuDhhKYMyeEJ7FV5fxZ7G5KPewKXPohC11Vs9HJ5kWw9YeDJrtUi5Ujb1uoBryQdm6Ym717",
  "key20": "2SF7Q3QRBWifEjmgwSErMfRYGwQV4qrMWoK8nrdCRnrZ2iJNmze8KVBZLTfoY4SRTQnu3t8fDb1sgiH3bhxJ98qm",
  "key21": "3nLjMLwXmWwss7K1gMXQDMVE54fhHtoViJAD6mJFJDYjzSwCq3psqaP7Po7v7VUBE352nKFG8Dj9oeoic6r49vxF",
  "key22": "2HcBacnJBAUGu6ZvjaMYceAYigeDNM5fEwrdB4rLA4QQcvGPHYEPgVVJg3zm3caVtgRmbTbAqHm1GqaVK8kKruE2",
  "key23": "4j7eNH9BKaiXE43uYiVgNrN1uqg8byXs9NuDCTC5aM8JAAP3qAbfMWUG7buzNN41Yamr9yWnatFjPiGYSxEbPgUN",
  "key24": "eAoYV8tKLHH12V24YgrLvvHyM4kryinJeAYHRrpjQrRvdbmcbt7Zi8bqHc2Chtu29YKf6GLk35h8Yxs8t7YZZca",
  "key25": "4sk9JMwQ8crkZqvruTkvzyeocP7KMAqQ69sMQJtDs1vWjgxw57xG33eCxd7c8JwzThPQ43EoU5UDv7zr9Uki3hn9"
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
