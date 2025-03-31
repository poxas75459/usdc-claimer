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
    "2DRYexnTA5uG82MpQK6Wy4bE41qqQ1JXLSb55WmfpKmyHvmDZRBcM7GNDFc16njSx9SE3PkWkh1UnddLZeHNB8JL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29FKhGroKDX79XXu3sc3Hpu9CcdG8PRamcJSwG5Qi5cdymNZQvv5SxpHujPrWM5kGPdEvuJqJYhrgB3g56HSoHqF",
  "key1": "4yyjXCtob45GsvhFVKGccgwrsoJJm6B81b73fXwxr6v7RLvHMQoQZg4RYwy1THRAXnqCuUbU6agLWrU9hoqffgCm",
  "key2": "32fLrRuNn61S6HE5anjraFFSU5ijHG72QoJokKQsPK7wQKJTicvsM2pR43DvBwWY1CADmrHedkiTvJNKjZipCSWV",
  "key3": "HBRENTTPzkkfgFzLa3EKRanujGDzhEwR7za38VNYczUjwTA25Ktz3PLLm33hNpbzR4EnfPPbpb52iHQzqs7vAyg",
  "key4": "5qwVhDQKcXGyeY2qLs9PQDsDE1sH4rxfeDewAopCwF41VsWqNGRuaBEqj9VuMKnTmqZS9SZqmsf5WCownGEXGUnp",
  "key5": "2bnBCGWR6YwiPyEWiBkHzDbksQx59Y2MVCTB7q5q7WwhY3EFviiErmRt1Jc3L1gwaUbWusvsxQjhGA5jyD1Tt7Vh",
  "key6": "5HHTUoez3rAT4F7mWRy5C5f489xsTPrNmLC5yy7wAXd3GDhA7RSWspdX5b7RWiJEc6podZTgTRb13d1U6DQSwvNe",
  "key7": "5jqAegp5FxBBN3ndMt7LPAMtH54LbZa87T3GtbZMReZynJQpDUSF1s5MzNdKFF5dpebpFqCg2FTaZPZ3SQwvn5vt",
  "key8": "3aX9ZfWL4pDKe3o6sarScNh2cjPZnAgJjMDTb1Nv13dKUVUrvQhEsdy8bcmtb85J54kkPWjwbiWf2gsfDWuawbZm",
  "key9": "4W1ZGj2hzSyHjTkmABTm2PtTtKqUqiGrsxkrPTwtg7MWzhoNHbMiDFt1XN5b29K8N6g6GjxY77y65HFbSzH9K8ps",
  "key10": "fxvAsRuaYpDzvx3Faym8RJjUxMGZjYgDPtJvPH6toLcXYKicAS7S9tWUNC3vdv1YufHmjxYWgWfq2WUmBHoBTFC",
  "key11": "wDiP2reMDzBfdqwV4gPH2BuxtPd2Ny538SbmiNikyd9tYwttv3efTKZKRK2SoNCbsR3t5gRZV3fum9R2pv3P4ai",
  "key12": "xoWGivkXNVUiD2VoYgdnWPQbNxRSEXqeu6uiVp3i62C3pqtRQdmUNpcnFsoY4Zd6Vf3JFtNBrYmyDm5tYZ2WvN3",
  "key13": "5jComD3ZKtVFemZXvmQowQd1gfYdJxgsMkkeFNafaJfF1qTz5hqyqhkrVFzHeHZC1Cs3PRuc2Ma452eqZNNQZSFc",
  "key14": "4A3ZruBAT8XEBRgKpwygKac1Tg7GU3FoJdN9pLZuDWJLFMqLERVYjakthpHTpR6dUbuwWL7Q59J6w26JmPo2VWtC",
  "key15": "55xUTpDZGzac79DJUGfrStMAtA41Cx8S9ZMh2w4Ftxpj6LiNE9RSx9DYBvxGADW4AezdYVaKbbwqTVJc3uCDcaYY",
  "key16": "2kLvM6iRYDWjbKn6qEPxzAnkNjQyqcSYN6REDF6marroccYNQ9SPzGaEvq6GFzSEhZtgedAwQEkLJpKypqs6egFU",
  "key17": "2XqM41dpPUnkrKQYBeuGn7Fraiwy4ijrM3sGxphyGCUTzzWUUrTLa2avyMNkp7RMhrRLj8PqZcBiAaTRUcefXXJo",
  "key18": "4Wijz6W8QCpgR7QN1AbzcE9m1GnvApuuSsPMdh7VtLwPJ58k1sXCWdgbFPjZy1MS52UktHgiPpHivTFzw7GiQvKN",
  "key19": "5GHvKucorc1HhLeNGbxiditR3P1LR571gx4cQWdc4gws8ahcJFL4xeRDFLgwtKPSa6V24BXMDJ9bVfWPeMr8pKkm",
  "key20": "5buH3WwJVaNFqTx2ecoEPcbmkGCWbCLuoGLiEfzaaZEGCuz38Qh4HLBRrj1Pr32yjWn87pCvWP4f447eqFRBd9re",
  "key21": "2MHQGQNgWpB7bBUb3Fjoi6T6qMt3VnCSF4ka9vJvyvtpvyDny3Yu2t3APL9MmFQDBbtbV3HE66DZTFykeYqGuAAr",
  "key22": "3GvD9VouqjwEAy1DEPr3yb2rFiffkMUMZnDWPLEnD7zXn88QexMHUo7q93Fm3pyaTnYe9pom9c2kypMUNVkUZiwA",
  "key23": "4KoDqEwEo1sxBeWd8RszJxs4miGPnpSvG8YHMz2PmTh9UNtbgUMmuaXmq6chHutk4CVTpDbHMVnJJGGd8acERrKc",
  "key24": "35oxkvGr11iLrzfvt24VqNDySFyRXLWvWoZWgxw8Xi8CKXLAQMghzvXLt2u6JBYZSYW2t6Fj9WHp2C6JZegUpzYc",
  "key25": "47Ha8D848xY8aXfJmU2NTiUb79D85iHBJyraTFWhZYRRB1K5UWDHnTw7y7BKA2KNdY9yWmPNa9zcoeF82jFgGDCo",
  "key26": "2kRZQ3CBjHrrVeEH3QjBT8qgmkikiiHkUvzwCeWLRN4JZpVfMaHLezPxvpv1RhTU8oBAptK4Vq28nSJAzFTr7z17",
  "key27": "5Qg1oJrGmC1JpsUL2rjeY7QE4eQvxVrPfYg4D4ThSvLP45hLY6axeFba3nkRHXSkALmnCTPxeQHFRDPCx2RfLuvH",
  "key28": "5dg8j6A4SEHqxf82GoKqMxpsLYhZotvGUsYZFAgxwhS6J4VYfsx8McMj58xKq24uegah4RYDM5gn7hgj3MgAJHQH"
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
