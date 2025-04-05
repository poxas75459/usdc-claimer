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
    "19juUSXnauT4tEQj1jzwjcsuBcGNrme6jAufGmrXHY6gg19AqqCrLjF7otEdchQB2E2mVsputH9KCubxkmiubgt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f11jqhSYf53ZCxfXNFXeEGaKggJUBcENZ3h4ZbrXaDBtUCRNhqSmjoaK58rg6GzYKz1KwoVzZZ8sjtqVepXnqN9",
  "key1": "5bA2dN7hpVVWwt5u4FsWYHPE4p7DxBr2eKaANL8qpBNzHQBfJvDcss8jS9twSsUvoeLuYRqaA4hVrnL45zox2FuW",
  "key2": "yRuPvoRQTxEUpcV5vtGTK38CocpUB2vjGVXmSqLtpKdEdukshbUPRT82VeTAFjagE7vewQYg9R8TYhzzcdeVDDy",
  "key3": "36nKATFwQoDpaBLBUsReN6E7esBp3AGZbk5jTxNk5fTPDzUAHto1VTT39QjfDnbdHAZCCg2nvoVEuKH4KpiYzba3",
  "key4": "5WG8gPyqsF2uSDY9Pb4KpcbdgLtQq4mksBzG6GgCnVdir3UoqJMfUsru5d3BaPS5j1Y2GALYYBuJfUT3yVth47oU",
  "key5": "5L7gwN9dyqCDLhptb89PWbKZPvV5YWW8LNPdyhyAneazYuNZGraZjLjS6mfZXazxmPPbsm28J4bcJxkE8DcxErF1",
  "key6": "2jWVFd5C9gvH8BXcKQCGBNDcvr8YVh8Hpeav5FJrTJvWei7qR5JsiCgQwbGk9XbfWQvnXWjorLNWSYyX4XppT671",
  "key7": "3TbBLahecwhM3iuP6xakXLhBzbDKYjLekwhNkzsQQF6Y26zFxtBbNYtzzPbJJwWcS1EWz7pUGxqbHGQcEWbgURbb",
  "key8": "2VAd882afMR8BYoFHPwPFdEgd64S9JfvyQ3aAYTcXR9m3XXbNVBNx2mEoGE887q7YGdrAazDc67j4e9neofLsooo",
  "key9": "3tdBPnFS32ZwH3CvYeH19nQLm1k6kcr6Z7juAmCAgmzvnGGfMZWSai7QpexsmrPAxQkywvWowRsLowKiqJ7dLZKo",
  "key10": "2ADriJEuh51zyWWZv6cWgudMt3TbUw4r2byr3bkPq7WiLiPFNZcPAg4jKeunnJCyhRoLfK6oFyPVMYoZxCbJwJiC",
  "key11": "4FED4BsFZJQoqMsvBBdNi8mJvqkef5s6QGz1e4xQPsKYeYeuqBnaZnFoGFe92wUSeAEkDqBmd9AD1hymARskBccF",
  "key12": "5vMffXSAdfaCjL2k3zzUn3oYCstTWsMohE92J8F5aTe2qE7xTV6yehSFoo91A3H2QFzZJiagjexfsGeN5hnN9x4p",
  "key13": "3azsMqc6zNiuA43E6hUu2uo24NaAQvtSiGk6r79xw6hyHLsUoyYx6Rk7gyE16khakL4Nr2Bjq8g4kjcdVMtd2ATU",
  "key14": "4woMgQTSRkF94gKcrWG4hAsNhKxKL3QSpuvN99j37wyVL5QJ4Vqe8o1MJNQqiwdWvEC8QoqjLzSN8Tf6fibMpBLW",
  "key15": "5AAmUk4qaNL5xBH5EmzVnzshXwbHzgEkA25Gs8HyvVXT4WXK8qYCoWPqSWCT4ieK4wMyxCmfcW7P19c8BzwMm39W",
  "key16": "pYAXR21XZXjpu6e9zKaznPGpExdtPt9Hmo9iuAsmdH5htFU2NK3xbwb2U3NT6hBMwfAceguiFpZ1aRwJErBTbyR",
  "key17": "qbTmS6AQaix3HJbB5cG4j4pLonRL9GPShtK7PmuDAYn2nEvf769Z3yyYu2iNALLHhNj7tf2f7VLHgBCkLPTQZBd",
  "key18": "2N9kQ8AhSVaKvYk3EgD9khTFVy2nzSfD6857BRGUCA7GZHHFQdeBHUAvsWbsa1LuLPwBboNsZ3ADStLimakSvz34",
  "key19": "4TBkYt4zpkBXkwUXHkLvw1spQZ8nk3FKkLatUAp6QPcK7SMJs89WRKF2s9pVaRFDfPrnJpCqYJQ8HHdGjBNfZUW9",
  "key20": "3dmSFkjj4pS8tjno7wzmhURwctZG6b2cYdAQbpyDkMaJN8Uxc7xeSAGSojGGRxTWzgUUdbxuf6Th6nULjZqsGfoZ",
  "key21": "RgwGNzMiWYAFJXSefFneNehTtt9dxrnaMkVTKoymmqxYEFdr94HDDjiZAbSd48EGEBV9xqBLSYLdHTuFcLkxPr5",
  "key22": "3zQRTDd3mD3XkTaT5fg7SohxihXKwYp4Yx5c8vMSvcXvAnq74UbWCuiFSKRXot9pXVLZkFPy7N4w6FqqijDTQrpu",
  "key23": "2idGsMc3krvq4UDiCrEpe67R3t8Caum3MaqGt18DrqVjGQkRXaf2DTQotE42e1TpvdQaTyZaRvjzpQQpExffuXZm",
  "key24": "52tLmbEhEoR2bf7JWRGrSsarsUSfKxFDcLSSXrv6Umuft2AVr8srYPuDotd6VdKjGHoWgY6uwfZYrKQiqdeQRd1M",
  "key25": "4rWd7z9pZSP3J3GfH6GQxvyQJ4RCb9zKF8FWMyRt7Sf6fRTA28RgtsZZSMWNL24QWPU4xdPCXH4TRztye2SbDTQ1",
  "key26": "RVAAE8tM5PZTSunfDBD3u9fhGdqUdwJ5QGVSnXH5i16e8bXunCMJW6gNTzifeRR6t3PENd4E4EiPuRLFdUxhDUi",
  "key27": "4vqzXR7rWvnHVQmtLLBFKeBzGnem9hPfNoUt5fDTv8QHNwGH7XFDmHY1CspK6UYRDFd5BsCSiWvJNussmR97pUoy",
  "key28": "23jqfbL6nCRx5mZuRu6fmbHbUoG2Pw4E6Hy1FNxd9QfGbXReh8QJg7gJrbCP71Fkjux8yz7JXwepzdwWkVZeByY2",
  "key29": "d8bXDR9b9WkXGkjbCSgk7A6DcyFsskvT8EXWkPmoqTAHvBzvkry2YjziQKc4dkS76tvJcwubfV5JJRT4BUE85iG",
  "key30": "5a8MbM235P9QQ51uwj665jYds75LzpuArVbfH7LHSvJv385Rwhvu5Dz7RYWXxWttYnDjNT9i2V1rD66DqJ32uY3L",
  "key31": "2YpP52ZC1YfDY4m45L3X7kZuYGoUjJcZn8VKhHTXmzvqMqEVmj5D1wTHRRBt48wsoPNF8EFxFiy1W8UVg7wh5uNh",
  "key32": "5EG2Djf3aUgrXUz7U5Ksuu7tGqosPJShx3Fz8oxDS4aRbibdnVYn1o9FpQ5ucc4PazyEL3aA3QGQNGTm1Ee1JLEL",
  "key33": "57E24YJtb8Ed1aUQRAQ3THwFioFfAzkcMRkqxsujCuztAF8AQQuzZX1sKT7wsscTzBawTenAe7p8Re4sfqXPF4wG",
  "key34": "4cK1LGGRU6GHJ1YFDwCZJBPVivTagsPMMxg9evizNTH6ZoFpPQfid7HoSE7kySdjdxWXyHNnawbzJ75vAVMiqzhz",
  "key35": "4eif1PsAv3uR24g3RCHyDnEmXaTCRZriedwnREfpMeg9hzJKwe2hRN1aP4QPEgjfbMZbo6sqMCe8LsyMGxJdFcW3",
  "key36": "37qEpK3SVsxDJuHrr94EAHN52VK7YJyALhbrCywrVLpGKhHFSmAKtraGiqYB24s6GwEvxXLCJE1ryFrZsX4UP6oD",
  "key37": "J57P6d42KR5RGS2VUSMMNE8DsUpsJCxk2JL3Ht7SP9gk1VnMQPXZE5jRuph9aXD1JApvVEbzAgTxzY4LtT9Dg7y",
  "key38": "azPUEiHQokVHgyVN5UuYGAxrHnfZQSrfa2oov8DKbBSgZRzm1c9hGuuNxx4q3y3Ex2DJQs97LPKRwrep67GpcoJ",
  "key39": "5sxhyidLq4Rhra2UQSyeh8CSoabZH8weaLxSKNvuQoD5DFLHaBzmoFYBy9uShWEaeW61wuprFxRVKSbcjjLxDFXR"
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
