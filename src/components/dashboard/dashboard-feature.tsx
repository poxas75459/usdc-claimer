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
    "4epcjc9Jt6DamVHm6SSpaegSEANoq89Pj1aoNiWa4N5bsb5YrjZs6A6pyewrJtuQMZVfBjMVN1DZAH8uqtVMLPtW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q8d9dfFej5fHwnM6ao49M1XAvKc6JKgZHWK2XE97thXWtjT9t4VrFsVnyGMuFKXg543AktzWPVTjwtDYmZRDc8Z",
  "key1": "p4AnT18GvSYrjK8gzsRgiV74ungPqMpvybtyxpXwq2C5ZesKErNdfH6x17Q8WBdfNMTJi2n16Qz7wjorEsEin3Z",
  "key2": "46NAXPcJBwF4pfJxkZmCThq3BtkqcF7EyoK91RWaKpU5YAXpch5QNg4aFJy1mzHBwZRMJ473K6Q9ixDxzrWzcCQn",
  "key3": "5HZ8w4tG3JXp3ijUZd7CfF6YpneHM1pvyZ72ERtVQczzfgCxMZUGvA4p7egpqBHn3959Tegm7FTKj9wXgL6tWUvH",
  "key4": "41WGKjs3ERvzKXro2dou56k3EvKBw6NYYWMvsigrSiUyoH8AczTQ4dc265SAArcbvGL852Fd1wugYKSSUwxRe8vp",
  "key5": "26u4oRrU5XspLMrgATUezGNViUHGmC5ahsPqehyKoDdwvAWUpxkiGmNKnzzidPus35GnVsbCM4dDoojVNcQ3PimM",
  "key6": "2eGVsNvE1xiSezApoefKwrNky8EcY9x4EFZWSd3KMTUaXC6rtcrMhVGTKqEsrwEoJv35gVm7p1YgoukwLA9FowPm",
  "key7": "3vJfZbX94PM5UH5Ps32LntLeagi5vX79KWBnqsnR6rkRMGKodDgqNTd9szMU9n91ZjKBkb3hJnVAnPn31uesscfv",
  "key8": "5Die5WDWHHRfjKVMvwb17YH1LkPPHRJ8KmMmgkddVmNx4prrk2E9tvtYCJGHdhAaz3kebEoRA6Vz5y93GkyGTdT8",
  "key9": "44xEPZGG2CyeSwAWNJMjZyqtKWHtfFEjJ7yRH9V3iuD4BynePFLab7iDLSsds9X26sgQ6UzbyKPdu9YS37hNiCKs",
  "key10": "2A9AwLBxTfYHFFNxkKfqXATUwtxcdRBou2d5PAcUKPEZpKEkw7aNEAgnqXNYewC5mE9JLpBBtsAT5nCu9SjbWh4q",
  "key11": "2hvYdMjjwofMaTiRt25f1JkfHuc4qP71eFCB8XQfyLMVBmv7apcD1q3nbJqw8eLeLtK4cEeFH4oyQw11PRXVc5P2",
  "key12": "2FpxeJyAojX7f53fjNQZgdJLfT7QUHy6MWPeC3ja8uqv7cdpRNRYg2eEKELxiDwGLTvZZZPoea5tZg5Prj6dH3nm",
  "key13": "5cnLxFBNzt7c6j6x3BEKegRkyyk1WwR6piv6fmRM2XXJ4XRqasTf2refCdXpW5kN3QcHphzwSvF4PPCnHAhE8Goe",
  "key14": "49kDPMmd7jSoFuTwARY1B9KkYDbdtgPgEHUQ4UpBhgty4mFGZaiKB4TbiKw42coLZgcZ2HMERVtaDC1RekWbSMwZ",
  "key15": "3sPc1YTCaK1dApshskNZbe4FrBFrHNhdgGs4NMakx5nGKdD95xTm81NjRFQ7fFQ35ktFVKqvKcowNiSaFjJUAV4x",
  "key16": "3KAqKwSMeRc3jC1gxhBoknWRphy1TYWvATN91231GnZjnazr5F9mC6gTqqcM3fE3TCughaGaQBrDoMjj5exogM5z",
  "key17": "5fbJxdxRVC67XWA95nuRVg4ajbXTbmLq1w1ToHkJAgMKgT7bFdMZk6ZaqsSkRVcjm6aeJgMb7ydtekiRE1JFqr3Q",
  "key18": "3w5TeevRmRUYSM6pWYapTLHuxMdRzq2Kucu55ziFDq4YcF2uhZ9E8mTLzesuAg5amG5WYf8YXNMN5qyEgL1t1wN9",
  "key19": "126JzmWpdDHRxfayCts5xkpZPrMdB9xj8qKaBP7JyPc1Vj1aHS3UhWbJhxmjAwkKN4xLtWu5coFeLgWjoVjk5P7H",
  "key20": "5spg8UMzPgPYev2wXDTEkXeNcGgZcheMGUQCLHPVuHGb4okZQLMHfQJ615WS6wVH8ZZ6mWNRtBeGBTd2WCT4f84B",
  "key21": "4T1cktmMS1PtQFvuAUYiS69e6Qc4Lmf9voCB6xc6xwDSy5RLPNnpazgmTSrX942Z9dLkFyJkGDHSZwpnfR4BhDcb",
  "key22": "5BJ4YqiahTj4ASHVhC5t7533o8tQPMfGP431SXh3nmA748SCthPJavkMhuasqZT8umXZdKztGMgcHqF9hK8NxGpX",
  "key23": "pimZYUggCNqvRJTPYMo7r9ZtMLXpaACB2ETDgiwLqCgLVnTnW3ij2QKrMD1ADrL4uwb2jiETMdrTaeWZCkLM6eB",
  "key24": "2HzrhtQESdraExbvJebRLn1qyyypXzkvHQhamJ3Z77Jg1rTwTQ3bpeifcby921S5wud6tNHtWA4b359QB7ibSkiu",
  "key25": "4MuUEpoJfDB3s68KT76sV8JMwFdWEyn1fx9ZFgtfzeFXzQBHCB969PY8n4vonUNhVF6QtriugjUa9XsuvCTdPLTg",
  "key26": "3VPbMUybU6S7KX26LTBV7ox5ZbGpf7PwcK976UpwuWgzsFHBhum4ZpfdBfrTihdJsHLNBWZnb6NovUKh2xDViNiw",
  "key27": "5D5HE8Gbz4ZrQmKJunQXeNmki4o76oW65BNjHYfmZGW1JQo83tqGJgCkK8a8UN1AzwWNfHWm9HHJow85kvLn41Ud",
  "key28": "369hN2skdQW7GDQftdMvukAggA4JYW85bWJz6DDD5FcPjKSpUWDmis8QKg5gBQJxZXUf2fF53sBVPHfh36MhwNBL",
  "key29": "4d1joGe8cgMLsbzsFY2dYg2nRhDLFSEZdqAY921Q9e18HkUejdYEhJUyRYo2axX4cRJaDbzRY2H4us3wewApeg9H",
  "key30": "2VB6KNjCeN2GbxkHbcFk6QpZ79XfCeLj7rKuP8wmxKi6PXuTDtTJvJnyJDFfjPDiZCYbFr1SuQy1aHesyPbREVFy",
  "key31": "LDSFR8FRdNGNDM7YBTt6taRuLt73GefPgwfuRC5yrfGNoF55417ZY6d8HfxtqtrH6ytBCUUoSfezr2BHJ7stq9c",
  "key32": "2WxScHNNEAHvynkuSkFYT7xiR6VufUczU2rvGCXVV86qwhavLzD8W5Bs9Fn8JFFmZHQpezy6Mdqa8NXFaxeUr1Qr",
  "key33": "4Fx8495144GkvPmiMr1Mk6Dd9xLBv1b5NqGn71GuMDRrTn7euLm9f6SqoxUKrrpEUSU1LfEZW3HJ4drSrNeFVNwN",
  "key34": "PfKJBQsxNLMwDAy32Q8sU5FcS58X8wP1th6XZZAL544nAtWA39qmanz52XcqHZcJMgL5ukuyknwg4324LtfFPWa",
  "key35": "2V9RfbW8c13ZQ57BFr7xpLr8CenH5ZF2eXJvx6xSTTCZh3VTJwNZL3nwDMyXG3hSU8UcoM76JLhdSvRnDEtmpXGE",
  "key36": "2LiZ8u4StMpJpga3boGvMmGHZcBHwWAveLbruxutNGYKE8X1hLbaUk2ydqRRwTfA4mLBU4eYAR6VHixJagaWNzBN"
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
