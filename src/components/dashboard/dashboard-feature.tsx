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
    "5AqPfjgJ5utaEc2Do4xhZVNbSHzhVuDF5TkGY9D7h78KLiecBitXJdXRV6RnPXxDxDAqdjmYF2oMEEXtphkw14Fc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JQymdfoVxdnzXJm7GGyqfn4QvQFdS5SB74rhNawZE8DqFx4ofX9dcvjtMDxg2YK1mWQR96vwCZ72CDB4gKf3XH1",
  "key1": "jxsbREZd27ADFifyvo4YP6DXr4L2J9utg2sfoyp3wbBfSPeX46rMf7sfimXAdfgM1h1qUmvwaMnzgZEwjVwfeQi",
  "key2": "59RjoxGhZPFz7yoL8dPi6sgVpePmGSEmVvawtQQwznzzx8hqh8db31MLwFhkJx8DmeK6ZAkXGPEY9SkYvMaUxdh1",
  "key3": "5M2ZJJbFJbA5YguSBcKcbYZDznGGVVpS4UU9eTLXRmXARZu237xgnLLs6dBefhUBSFbH5nRoDRX1x8MW1M4sWUhu",
  "key4": "2BcxvPqmCkRpRUniXmSnLGCBCMDLghH9nmmhp6ikH9YYHpihiW6FeB2oKqVFwwkVh3EzYMoGk9dJNrcvRSFQMz2B",
  "key5": "3C2LN4jk7YttP9oSVaaKoYZjDY22GXJJvzJ2jWaWB97PrANh1GTLbr2YpuxQCavoKaV21sJdFFhBdc2UmGY3wXdB",
  "key6": "4LBcgPPSgyEiuMCDcwxrwhCMyjPo6MFhMHrCgzkyh4iUaD6uY8P3GG1vuCjj76iyvcw5YbhcGoyTUkXBsmvdkCat",
  "key7": "3reNarBzCiLFwkizDKNXYU5PznvEUN9g6YAT3khgMoC4PseT3EQc7mGCkCoefcmzvbScPP8rQcHjdbSSYs6hX2up",
  "key8": "4tsNrwnf6ezg2qeS3vgshDme8zVaoGMaeKoE8oYz8dhrtdAX3Td2eRrLWu6MFF5NAFcZyhfU4mm3BRjULXawF5pT",
  "key9": "TpjkvjEEZjeCRtuYizu3GkvXSJgSJreNNGyFNKokSfqkUsog17cDApWw9MgzfzLS1QWBub3cxJZkvb7Pgst2HR1",
  "key10": "3q8BPbXCQ5ZEfiEvZp3b9Bk2vMDdzLeLCNHXyUzZ7GU6t5FoVbPrrsvgcsdEsv7J9r4VVnqM5WprXW1ZecWpMpX1",
  "key11": "5NGZvhXV5q4h2PuUeQodtFa3WN8GAqEeRTjfS3G1xCQhRiq6nwpUxi8BF2Sko6wqMfjAth1i2Ki1ijpkNGP2x8gL",
  "key12": "4p8Y2N8eUp2JbmpyNcLB9wNqf5uoeGqRLVFaDJvBTUbGg97puxV4N4TQ3cJJP3jAMYbccrkTeqjMNziwC3WEL5Fw",
  "key13": "3edkjEy5YM3ap9g3B5qGufUMQs76R5pxhTZVmf5cmmJGPZxYfzWKtqQS8Cz1ygPD42SNzai8VwZdstSkxMwts3WQ",
  "key14": "4s9siWnwduYquuKydyME1UZyZKu4efCCVNfVwdXCG9L1UazUV6fNuY671heW91htub15huP3RPA4DVesWRvubPh2",
  "key15": "4CGvEgM8z5sK9NNA9hTVv2dNjfDkdE38vYCdB5U5DwqWGMge1iwp35CUh56NR1WjBQn8utz2oPVejqLke2qzcYDU",
  "key16": "4d6paohtoppXYcivc1DmL4oCDFBJ8UGS9brWvVrbv8kkgJEFZ3XTZAUHMfAYCZZGucGMuAMwgaHNxT6dZkm4pyy5",
  "key17": "2r4xhRxwPqDgdapqu3GFqqFcXsMoq8AGDpwuKoid4LUNW5afNYGxCtKJLvcHUFiaZhL9XfcKfH2itnEs69zLv24p",
  "key18": "2Z9ugxhCHn8UrQ5zN2wGqi643bXpuUvyJXrLYvtvKDNaoe62UtZeaM7r7uDpUo72PhfKv7FXxYNgYyfgoYJLvyVu",
  "key19": "3zdBXSFDvF78T154UEKtCVkAkZYgE4dE9nXTRkGaZVxgtwGmA1yby9xadm1Z5eq1byFpaz9f2hhjXAxaPZ2U18YU",
  "key20": "5p572eH6c7PCKkokZthsjXVaiqSgardnK15R4WuiuWQiKPjKxsDLWnjs2ANUWibsnFNEu7QTxPtTJz4mwiv8KqZ4",
  "key21": "2CXooFysYVxQUA8xqpPXoyux9h86PsrQfn9ijYuysqmp9Lff8ZUYctMLpVw6yzJrfvvHedfHusG9UZeUNJzy1CBa",
  "key22": "Pdo3AeDg6aQBUN7H9hvsPKbnLL5Wx7DeLjAY4Z2gmmApmWU7FVRAQjS7PjHrrpLQcs8hJWC35J9UK7oVfPxvb8P",
  "key23": "QrdacZS3Q2jorNgjvLH8S3QJedDapaJfDFbmFpZ3y2npt2yT3VPPSvUyAW43qhq4TJEnPRDggrTT89bQnsG3r8X",
  "key24": "5mpxaNPFn49ANVYzeTHZsTeXkq7dzcd8xHgziXbB1c8xdnBsn8PhLFF4NPsLx2AZrxMTaL2nFoqHJdR2kRggV9Rb",
  "key25": "3JnU8VYydYYNzNLHUZDLe58FNEckPHadxxHosQDpEfZx8LkvF1GFxLgSJJ9ijxMRwVmuY4gbygM8MhszVoQMwjfr",
  "key26": "1txgfZP3th2Pye1rNE5n7stuo6EpYzPLrNX8VKzjx5PnbwRSgUe4atEauzoswdoWEriDXoDBMS3HpNVhgZdb8hU",
  "key27": "2imzw7TN6mWFuq4RKXBiDKcc5swcD1HR38Xu4oCaGgCW5jycw6roMDvFTgUFf3iWo9VryA1cq1grRE8K4h97Bh5m",
  "key28": "2gVb55B5ZFa7cpHL49jSb73gkqS6DM7M5w3Erj6GC58GKnGa5Dirjd3f2Y1BcKPfy8VBi7e5qCFvV6Jkxem19qHn",
  "key29": "2vxMWVJcrovQ4wa88GrxfWToUwFW4D3t1C24Z1ZMBZhtmwHp1BS5y2bm1XfGrKamwLbTN28KDZzZhBfX1jf8zLMk",
  "key30": "6VCbvXeGmLukvCrsPJQd4WLgzKt8kyDzc6kwCs3PVozrJoQortVR3jDVYFVySBRwXqHmD31wPeHppLvSw7GkvyE",
  "key31": "5RVtYMKgQdVqbqyjcvRYfsBxHsM4y6aUtrKbdUzUTaWMa1XEQriftcpbfq63bqpBHPcakX9hngkBYhhHpXVfwXcK",
  "key32": "2cd4SEZk2KvdjtmWKCNw7MDkyEmBpooBHqPpH6J6dFtoKVjPJBtpPJMWTQxZrywR3Bt3gWRzcZuWomSbzGatKRbv",
  "key33": "5TYj7jKFMjsDU7gXWdVu6kuccLDysarPs3Q23VA72W62CXcFxeJsy6t6R6Y8T6khg3trTvKNQHoWB4f6UgNa8X9i",
  "key34": "2rw9ixJJdquGAYC1fucgTcip5gj37Sy7yhme4g4LrpFVrAoDPDdVAuar9dtavJ1BEPmfpdMRw4Tzd7Z9pyGXSi4",
  "key35": "iSdMdZsxwVdtSAFPcVS1jDjsrGTMZP7x4ZXWVWrig28mBEzj5kLa1bGdcX3MNWNDHKmSa7wCx6Crb8CfdwPH2tN",
  "key36": "3Zk7FKg81JAyudRCPjQh5ZRjUxxoCPvUJpNF8LLDNa9Mu5Bi1yuyAtb5s6rDkmM6rBeokTENW8khiC8qWXBKP4MM",
  "key37": "5uJm3Ny8Qy5WVYNxEuYQpa9jm2wJv4BPQwEGVooyfgBmy8E9CQQveQAoW4ZJT4d8jRqYX6J78MigC9CEd14ukqYG",
  "key38": "awLC5oXJ5BEc2v8FkPemH9XHe4T166kQH4bs7wmSsrJUByLBW1FQ3k7XwvswJ1tKjPf8WxCQ7Wi7RWkSQFxf2fn",
  "key39": "4aHQSbyeLXCy68cNznt1NFb4pYTNxemKUaqmCburvSNXevUUvXVkCPYoBfZQVT8vQqcUr9XGPmfeA1i4SCKSYLbe",
  "key40": "yEM93wG8LT8hhKxCKbVpBkC2UrttoQZksrs3U4ucxgJnDTnPv7GYg1uxQ26wZ2ysmYddao2DxcgURV2ESkQjKNp",
  "key41": "5KrYbsgejXM5q7HxhUpB3N7YAVH95HqMPnX5wghDT1DXgAt8i6eZDgjktJuFBguqmtBFMvvPMCDx4sG8W6P4QUdK"
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
