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
    "22R6vbjJXescJqXMdbvh1jgxcWPrtAUrXsaDBYZvFgR3CPTYvTddzvrjCXX9JNhcMrCjogPmCABX79aNt38CNnsK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yLfsi15AcLrA5ud44yrFS9gPBhqBCkjbEkWwqwPdFX6vQXdxeUBke9CVVj8NvzTHYwr4tqGqLs3txoa25AptXWf",
  "key1": "4JW5X5faAD4rW4JQangWiyKTXMu4ArNeGpUs69K32vjvrPnXP3Xx9cJZnf2T6qVwJcMJFDBMcqa65t2Lgjq77R3Y",
  "key2": "MMUzQJqoWbz6kTEtwJSMERMHyjGpxia9zMJDh3S2yqD41JzXGNvbkzcCYdRPxcQBqHGxxucM3grxLG9rdaXSAaP",
  "key3": "5D7HrwprvyGju6ZyZ6GrxE6qtjhKqgQ1qoTvyzJekRZJYqZafqno5tFEnLBYFvxvuR2o8EZcJ6Mrwm1JmgTnRpbn",
  "key4": "5ygcpg98cSoJCSTNgktGAwWzhYDDd49GaZTfwKn2uQ1hZA1rZaaX6Ckb78fZoVWwCiKgJ7wiyUCs8iz5ZwfHeYVX",
  "key5": "5rcwS6KExfa9Smkgnh4RGZ8fWagQE1f1o7puzwte9MXF3gKUid61fxTk69LpzM5Dz8NVsLnCj6zBEs6RuwJkvTZU",
  "key6": "5piEzpaFvJTxUmPM89faDAsV8qRZ73u6VkJN2vPxi2zG21Dunn9LG6TZEkZk17YJzPyuiEZCCzZpqQLnwXXeTSij",
  "key7": "QdyfAHEDy2hSvqMg5vujUHZYyRTQYtQif3icDJMRzUAu4UsvQ8GuD3LEySM3QnYNWRibRErJxGGRjnWmTHHau1v",
  "key8": "28XWirN8y3uPKxF4Ve7zM7TCwPoWVwKVVweWzeZywYpfssGzAYQzyU8Cpp9pE6DELCTBWc9LbqcVFyzGCz51J5kF",
  "key9": "3uKDJHqBhW1owkoqTy6BTtNDxG3JUP7S56A5JweomFmHf5mbu1qpsm7hxVxWm4ramsdfFERTEBgc19hcwUcsDXZn",
  "key10": "2pdTw4JVzzsZmAZvuWcj7sE4FeYb15PcDKwiJLYjkamG2njQcY5x2ABhiyxPbzbU9GJrFKrbqpFjhpB4xCYnnM1f",
  "key11": "3wB4ge1zLuGYfeMeQG5rGsGE5Ucnu1f2eVRshpfR7Z8u7P5wstWEVa4oYvAidwqsxQjzQhhQz8YfAnyWZN7QHAgi",
  "key12": "Y7h5dwqa6HjYMR9WvKr7ee991R7yhnBFwU6beQuYy2yA9v9GyQokTMbCsqXuqRA8cBiD7EbyaSmCxCw47mMLhfo",
  "key13": "62dsGaiHLAmei9hA5jauYmuGMcAqwoKspkCn4W1ejJs1SE4EZkcwQLMu3fsUL9b3s3xcftbJE5cBYB8TgN1gdiKu",
  "key14": "53riAcQsG91mKb7mSdcH4Q29rHUovbEekxH6F8k1NSEUoEEJR7Hk6NJjgzx4YpWeV8gxb3y7z85Lz9qccXTGAEYv",
  "key15": "481XPpWPzgLQKgavNdowGVSXL9fYVUTvE5jNkAVKnMPeUWQTWBVhdPVq6ijRDPuuujdXHoDCvsM4WsxpggLnc1vw",
  "key16": "3tRJcfjXgSCfKFhPaHnhW2PCZDvTS3SzgJBiPSavPHkW1dN5BULjnZfAx8UZy4Tunn8Q7rU8Ym11WGgA8MXfm6BF",
  "key17": "3eoE9v5HmNgoLnXELYQQHfva8UCL1aR1sKvKbtWpaX2WtiXuqrqLqKFrYR6eoKgVZUFbLDHNeB495PEKzaXQW5wc",
  "key18": "wWXWBBidssmZ9htghDNv5RXh8FNHUn2ia4unfUiboSqtrhAcSUA5GHU3ZZ6ziN3rXFv7GXP75XJmiE2WKpzqZyE",
  "key19": "3uPMtRq2D98ATbrdNnErU9YKkgemLNG3juMAwPqTDhJK335PE5RTiXB2kiiJgwv8atJtbSzZ8zY7p4JtJiqaFv9m",
  "key20": "5RA6TCbABmd3vWdM5sxSpJFCekAWbgzgDCX1R77Dw8WaLZkLtsc6DXHDZjFEWnLiyRKWJbMhNzPTcrnkNZR7RrLA",
  "key21": "2rYDCDLrTkEyzjxnPy7FMq2qzrvGzjY5WoPHUWt4UYoNHu55vC579oYq76TiQVtYZGHEngZeKQhH4ZUi7fTwtb2j",
  "key22": "3GzHNrQjw8oFZB9ETxwGiL1SaykSMbAd6vU8Ym2QQ8dWd1gmoMwt33b2cRYSqYHrM4JvoRUsNBUKKnNjH3r1JipP",
  "key23": "4d4dSF3ke27V8potkcrzUWdG8H4XmJaxGJ1Mf5nAiLLzkEooWWoixe8bZYwD8dDPNjN5i6Ni13eCR3Yvo94tqZo",
  "key24": "4cehsVKNCNaj8P7a3UQ9VerHvodaTftiH5iAxzJwRThnkgLZ1CZtBWbNtyjqAtE4ha6CUeh2oUk4dEaWXLxhk2ey",
  "key25": "27sNeA3dmETuLqYYEFhBzRURHitZ3tBUDKAmj9XxLtXkPLvts8xu2v5E9UqKYA3T9t5wgTQd9zrzccFTjTw6216Z",
  "key26": "3i51A9oBgimFYCVu5hnGhSTE7jBHYxVf1jqEyhJEvLhxA2qCGUyFfwq4NBpHT5a2zjCcA4h9faCfXYJMXcDauHb9",
  "key27": "3VsJCLhNWejRBCJmwmFMy3a97MQkvir9SEUwnrf5QUqkXbBiJe41k114f4oRcp6sdPobQKLZ3P3dGhfwkYQ1RK6Z",
  "key28": "4mq3C7oTLG9FLE9wzj1STuJeuBu64V6buz9EanMSua7WWWnWijyiyawe5k1zagxfYuVm2htRGpmsZo8MifGMeoJs",
  "key29": "2gy8dmHfXvFtnDMFkF7ZksRYEzvBZMkoGF8X4Z8h7ZkvKhhB3kFTMAnogBGmVYTZmMxfCFT9SMoxTYrzRApaZBMZ",
  "key30": "LiWhLwafbZZnxfQC3MAT7SP5RHq2B2BJaXrArWaeoGidZTBMLJKsccgA2sNmf6twAZV6JDPaxTrmMNNEvx5pRSb"
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
