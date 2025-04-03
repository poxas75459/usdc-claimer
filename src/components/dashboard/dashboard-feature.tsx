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
    "4Zkyb5Di9jr3gdY7cd4vRi4jvWG9GAoQ7ZCMzrjoZsdeBSRyumeiG8ZsYstS7C4Nm1E4FkcwPSMvH9EqGw1MgopP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JrALJSLD2KMW85f8n5L2z5yaes9zm4cJKUwWhJWowXPHRn4D8oUo7NCiXDjekJoUq95WinNzKYw6LSveHtv7DEz",
  "key1": "5WdyrtD1aDjuYPpj97xtKBUiyG44RaGMHmgLKMPNd7uYSgW12oWEMAcCU6RvLPyaB2Ex6tft5gVcmiM2W7vVc1NV",
  "key2": "43TPMjWigVNQnZJ22Azz7SjPfYA8uVyyBNin7kZydc1wnfYP55z5V2ujWPRs1152tRxeSoux9vje1ojERBxDChhr",
  "key3": "3XHMjEmqLWUKQDFAJ5upAwgK3USUQpCVr2WMgxLeWJiUZs3oLNRp4R83Rhzf6u8PWHcURkmoCY1yHKYb8dpYh7c6",
  "key4": "48nrZCMhF589e1cmcP8W3fVfEY4USEewDom1RywX3ggU1Jk1syaioqjvWxWrduZHWTakETja2tWuUeoeHkieYnx6",
  "key5": "2oAgPK7ntajV4G42fC48PuBemNkukzRFuupss2ASdfAt44HCaC4ui9bjxaChh6uvgaa8xkNqRMQcnTPrvoRYhUL",
  "key6": "4ZTU9j2H9LoXm3eXaexrp2NtPkyMuyNpgovNGVU3VRkyLdyoGJyXEwBrPNJLjZ44Nke9b6GRtaQHDRiPGXBMcgiE",
  "key7": "4uCHne53Re5ejZC7H6EmsetBQuzh136uDDdNtanVg5K6Muyc1pVHZ89Q96ywX77fkB5v7UUJEChUsQZWUh53uq5F",
  "key8": "4zwFZB9seKMU3rRQmvgarJoiN2v1F75P1iaTcAPauYGeaYtCiQxX7FHLjX7ZtcpVRbtfmPzS9dFmZqpSpSH69tpX",
  "key9": "3xk9fNfTtt3ZoXARLv9nm1XWMYtpDNNvxBVWWAQfqvXByhz3bebofZcEJYDe9Ff2tEuWDJ7B9ysZ82FSe3PnVgck",
  "key10": "5ANxY1k3SYutcUdN27GzEjyPm7ss5MkhbBCzKVMJyUHytFqZTGHe8sx6s8gEvQj3k5yj6VrXKQV7QC9dAmpgmS6T",
  "key11": "sLqB8h6EpZEkEpteHm54cwAnFEyY3RU7zzKNioFkmV11ixgfqy7MDheXAqAEeRGA3U8wW3QFZbcHbNfgACRkChJ",
  "key12": "5MhSaYF9fxj5gzPbMoSZzETRun84gVUfrotamiDy4AYBRD2HCtWewtk1RKKAA8XSy7mnJZFBYHZoLBAYGKHdksMD",
  "key13": "2DFsRhtuzAGuWuixDHVFKxEhL5h6kXvvW9mskMLjQ37q1TnvX1gLX3pgvDe8a52hV5PdKvU9xha7PX8BmHw3Cgwr",
  "key14": "3vpyj3JJQAKBHsMVKVsSJiBE1MY3bZ8NbMq6BcpxkbRDzRWvtEgZPcuHtLnojmcAhxZWk4swkGF1PG4AJWMbxN49",
  "key15": "5ARBr7yxyzEE2LcVCZRkNCTP1J3waU9vusCnDxduUJcr4cHktzSEGLrUDqVZGo8kgFMwEdcw2uKVhss8AxwJeKV5",
  "key16": "3maUv73rZsjaEysAocFeLBePBaj17tfN7XQdN731AJL5LuYJBFYb5wRZdjEWi2wKfVb3DiokGH5kCS63JedpKkwf",
  "key17": "CyeEkS31qHMLdvcitvjue3GpfjYTQNvrvVje2LGapvYx2aXAoLJbvR6e8hJTeQ8jqDC2AEarN7CoPXJuDWuLoVt",
  "key18": "3rFFUnYt1hTyJXPNuxBQDdLA1XmDkN9YNk7fgFudWVraAjgRGxdufV3KfGSPLhZTC4JMAJR7qKZUyHVXP74DKokr",
  "key19": "QwHG5xUdEKoAmDzx2H4oVbKYuCu3HL7qRa66nGcVDJe4ppBjXxriWuS7BZTyUM1dw72PNuPkzknKTNTsyRYjhZx",
  "key20": "5XygzYNyAEwSheSFW4YtACkt9AWZDzbu9hbfUs9rZzUyV4qmnaroTuiDVdvaNPdme6QVUCSfoc4toV6pdeAkXY7h",
  "key21": "aocvN2MRmTjn2dE2k4zfyZDG7WkqVEePvJuim9gByziwMY2RzjK8sXpPtxPPkZFLSr1CZc26o6yNnw5R44LCux1",
  "key22": "3ZmMNrBUaY5LMCp5TKymq7oJvngZwwpxXWRVQNxczo6BgG2sU6H86YTr6QC2mW17H8PEQxeQE9AbrpXMzX8k8zdA",
  "key23": "4CM1i7t7bd8L1WtAPS9v7HuizADqYkwBq1KNtcLoxAtYn6PQMzXGPywuDsq4kLx59nVQ9WBv8DtzxfXTg2BqnBRJ",
  "key24": "5rLTMQDscntsvAuzhACswMhrambwSWqSecP4dwyR5WdUmZUxRKKNxQusREqhpJ1BNaSVoytCpUuhsXco8bHWp7sQ",
  "key25": "5cSeLjnFEKQYxBA4ixJVYPka49amx7nyTPbda6YTojDH3t1HGv2t7tpk9qJABJUrXqwsZ7JRXBodK1zDGzUY8nEy",
  "key26": "ogJgx4BMpt7dMoF26gnsdoUaiguaV6s4jgomY5wJhMU3CB8pvXbhP9qNReHfyHhE65UsukTcpSNuSiAjDGQFg74",
  "key27": "2Gh4AMSjwyU5zAqHEn16tCdaMyHiLZ2nHvEyfKmJ2tXCi2rBQSBxxFdeWwJdH83rWUbsci2tfx5q7TGsZgejwDSf",
  "key28": "3KgUxA1DGUcM6ZJKPyDPMW7SbwzJnZjcJmnJmCD1waq9j4M5RcHUwyk7JDHU4BU2B9JLp3z4qHYFkszXSWqFcG85",
  "key29": "3hYawLAzLpDH8W8qBdtGHCotQnsHzA5pfXw8VkZnLM5fpPJ7jebS6axRQtoiuzxSRPAaQvRb9RatYTtb2B9bEog3",
  "key30": "3eDYpfpAEyb7Cv5LFME2fc7WTbDGrjE7docv5UZD8nUM8MBPUiBSdBNqEZyZ61ojRSmanXp9KPLMvfoxjibrF5rA",
  "key31": "2DAi4cGUMGudcHDyEMPApz6ahNyu5tMVgf5GRrzYPPQqGqJ64uKFyNCj2yFQ8zpy4ngnvbwdr5CWWUYs7Q1i7Nxa",
  "key32": "2yGuKd2YgV2eKse6Ad57kmz34HWmpDpwdECKTuacYfPomjFiaK3FAwxw8NjZySL2kgfdopYoUTsD9PfEjyMkANq4",
  "key33": "9SePrfFB2cpajVfZSf7bko9oxbbpx8X7GfEZ65iit7hczKty67XSUKRrw79wq2wdtNusVDcW1x2JX3GHwksTi3W",
  "key34": "5StZvTKar5EJzRkfM6xJAgWGyeL18DszkSgh9Xt1VQnw4vHhqQwqtiKZ28iQGeJ72r1wykmsb6VU2Ymsqj5JPoQX",
  "key35": "5XbhLUPLydAWrKkTHksUkf1ndkRVseBLkULXMKZSUB5ScGuEnAo2Wx5tkfw5ZpTbWDUHnJJ8HQdQ4DqG8faM3A3X",
  "key36": "4b84AYtyYWZonLfNP9ek5acbQCRH6kRBuohsjtSuMXxJPBdjuT3cdKan5x5ttbVj4UxvfPZfmXd7YeQNMhYnt9Bw",
  "key37": "VaabfZhtFaum7FVhMbzKAEaVfqeZ9mfq1UhXUvsKAXdSJtTburLjjpRqCxt4KBiQMFN9Xx2UmDNuunUriocLPLL",
  "key38": "4LXDw9UJmtb9tw5xSM4F6bE9E7MfqaNLtPnJnw9RdM189AFe6DBQWNQLsL3h3J4zBqFm8r846tRsX2wJB8E4FM5n",
  "key39": "3JmZGK5BUudBMPoBF7S9m8Z1sfXNNLYAoMKCCbY9JYrNBWooonpG2WtU2wQEPiLfYAXfWsWcWMELDBEqGXB3PRaj",
  "key40": "2jGTscfhdte49xyApjF7e9QPSJyDU7AFmagQ5v4HLM7voSvWoHCnbfu7WfajhiK6wtLHYJbgsw9YvJoaLPqsDzr6"
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
