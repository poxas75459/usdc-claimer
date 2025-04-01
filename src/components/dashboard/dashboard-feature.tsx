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
    "cCJZ1oDKAWA2zu7F8q4kSYRifp7BgGjS9RLNH6GYcevzF4sopp7f5yHYzVYYWJspLFiq6UZ4o2pZxdbuMuguP4V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B3WYKMFqshrwY5oEywpAA2bj41GwDf5mbsW4shuv4oeEKyYnjRoCyFKwdTM43h6WsY7MMjHh8mnnVUvhvWMGjWL",
  "key1": "2samqbEDMAVYUJZsEPB2z9vUxNBk6ivq42ygVLkUvLheXSWPM3kuS4xb8dJm8B4fWf9DDz2oAR7gUfLKboD7E6Ga",
  "key2": "FG23LvzCCnGk8HxGV2VJV6c6EHPAYVKoPk2z922XiF4ktMAWhJe18EymDTZZqFnjXLnxkL4i84ANcTqbBq4BMrW",
  "key3": "3msGbGcomd4zW2z5xi7Q1zvJwqHUsWbMsywn278WVPN3VqL4ZDd7kdZYt3XVwsCWdfkF8f9ySJJ8BuS6o5artJ4f",
  "key4": "fhawvfxLFNNKVY2NAUH621t5jTii1jniwCUNc9EbK3bxtK1rAUii6XcDCjUbhzL4qbRt6wPSyVw9wLdRUVDjTy9",
  "key5": "2UeG6ochngEKvHP96ok16knpQva85nDam6NQtcsvVi1K6w6R2EH3HmaqTAPxtPbC29vCJYJEJyrPU9iSRP6GapPy",
  "key6": "KsVVhpiQeA2jSJEFaKrAHh8itSjEgzWVe8yZnzEu3oAyr5j2jDWxmzGGDZLRPNWz7mgvQyuMwub5kwc9J9JdHMH",
  "key7": "3Q79aZhDtRKCYbzVAZDDxz79N6S3npgK4WqBBTcKPfkYx5TSjxtojs4kN6L3pqXUSy44ipT3QVLB5V3WZtPFs4HX",
  "key8": "2oHChvHBhS5dZQgVmmA7gXvrZ4BbJUZeWb9LV1gjhRm5duPxBp5MkvvQrTzi2BPmYKo6Dzi2VvCBt3JbUaHc3yGE",
  "key9": "z7VuQRkNESqiKSWQJ2oaXowApkxwnjDk3syyN47zJN3uv3RRnUyyDFHUHLXRJRsVdTDqyjD5tGdHNUcJ4oXuqCC",
  "key10": "45csAQgzLxnwY5hSwuxUeBPHGeUV3mpzgunzV6UFPjPUTX6xVvbnrvxKTRqZKxeXgzXZHhetoEs9KGeQpSA6yGdg",
  "key11": "2ojpSekyQMin8qBfBYa1dGjv3qoZjei9qVmdRqJzkogw4AQcfvsNZW3HTt4jDvSrctWm93rFyXW9LW2RQ9kYqspH",
  "key12": "23ZKdypFRcW6hCzx4CtxRsx8WcwPESUdjJ4yacnEVNVL6Ejc9KdbxbdtbzTQuzR1Je6RqZ163qz8mdH8groKRy2c",
  "key13": "5qShM8P3oYaWCoMt4Y1qwstNt84uepUSRqZ82Xq7bB2CJoLAYXU4PKP7YA2LtzZYhJKcD6wcbr8qH9hwf8VoN4r4",
  "key14": "5C8RcYknJ2ZHzx3V6Evk67W2rpDk6g7sDdye3DeK6x5EjJhhpqWr4ipx5NZRFBu4JcPyLtjE4CTjzt3S98YN47B5",
  "key15": "2jcuprZ6pbRBmYfZZSPRpsdBexy6p1PS2qZqcdtjgxthRQiwGbgw7Q5XKsVsYFaP7duz7FUFQMgYMaRie3UQrxbB",
  "key16": "3Dr6uSfp8oihneBSxYAo9mtvqwg4pZNZgAzhKKbU2XTX4QZzjE3prKk3BoadCpgLtMnFdaujdZ9kwBo2ea3T1ntq",
  "key17": "2GrQ6TDy3Nt81kbaJgpU3oJTDwy5rQemmH3S5MzwKRFjcfTnHm7mXZ3tSJwpziBbonNRH8PsBkdFiaQvpDsKjwux",
  "key18": "ULSZ7pj7A1jwPPBwsuwxMtiirLyPMrfxdwQTAc4dQSG8jztjwqFEktauFJ7kwBQyG4hae5fqtpunBfRYp5gqkM9",
  "key19": "4ZryXGtJSoPBkRGzPYv5QVc4DGGqGhyGnMQjUKYGSeqJjN29LF7mtRTpBVUn79evh63ubKBSX8xP9hVXL3XJ2dsE",
  "key20": "3FwjG7EqUtCFHWJYTFMx4CANzh4St27ofatHD6iZZF1i7ataHaaFMY4rxyRuVrefN9btHHe2Mpmwe8jUnJFjZvkU",
  "key21": "4MLyFmYXtX1SR3PkSQfRrGiPLTzCmtod6M4fLk2Kj69Hgi1QL9ZVrmZCK3kgoxtRDtNSe7L8EehpytAkcRWRFHh2",
  "key22": "8zk3FQU3Ydmh3hiRMcMWuXNcdq64rdaufXzQc4QM6LjYVM2WjhApVHHUoPuZV6n65iy5GJtQnxPyYJCLQojL3j6",
  "key23": "3DmpM2YqagEhFDsMDPRgXv3zD1Mw4uJgcELahWH2FmEwco2fBYFw1QFzZdwShMgq48PvDaHd4k42WoKTRLscEmSF",
  "key24": "4oSPyyQy53sEskkJ5wyeDVXctZR6pkvQnDLKtLenGFyPtMqX792g5trnV4os5T6eQPgUYUAqngLfHgDRyRYHs6HQ",
  "key25": "42Q7iVTgb7XbK2rsPcshcj8EawhScwG4M3pNSbu9wDwtT9LtGEprionBho78QH3cowcY2fBmLGFt7uit3qfpfmax",
  "key26": "2sanWVmy25SWzNNgP9jiYzej7rLXt4d6m6C2PMUXckT4pA3QjHnVhtsgSgHfwnLyHhZ7UFfXJA6DXj66Z6BVWMTE",
  "key27": "5UwgjkrrqerRCVWKSnURed1xa8PJtsv1L1V9z62KpiveCnhJSQx5CAZ7R8FLQb5ZgsJ9P3ss94ThqJ7JxEgqaThN",
  "key28": "bFwFsDp2E3R9QaErpKfBSQpzE5fchBTGg4sn1CeqGdjkAGvJ9kKVfLioSZVw92YHR89qKxhgX7Fz12PVQVScCre",
  "key29": "2fxRUWPovD6xjVvGpWkQWqWbeEBuzu7CjhBDSFQhsPJJmZPCcf3TYch1adaRK24jJqtfrFqr7V89pSmevk2QzKsV",
  "key30": "3pc3ePqjNT9Dvu4YCrPsyXLc81o9fPdxt7dgs5aLaAeoTmQEdFcZAbrTggygJunxzuzbpxtRUmPAasj5ey6pP4SS",
  "key31": "5H4xRdLib3BWevi1L8W4Y5XHgsybvKHFVYjfeBG8zNecubxjEBNXjJYxL7AowyfgurU4qa7dtzWzNMP8mRxZG3pE",
  "key32": "Bo7p5cfafQHYFkfrP5YBgHfj4kzUx16UfjZqyj3D39NW9DnoSKqFWHpkPHMkA6yLciLcPcPAZSWouRFHeh8jshb",
  "key33": "4uVdxuJT5pM1fCbHW1XHmbGRSZe5D4zcAZTBfeeMHXoj2HBHWAuJbXqDgx6rBq3f8a6ovgxe3jtnw7K5aQ8GkW23",
  "key34": "3FhM1MNJnstn3VRw9L2775UG8sxRJG8Yi2nVwochCix7MEcKczYsmJbHLrh3hHhWuZ9LSoZgNKUjABpnHnTUbi7r",
  "key35": "ppT4PJvUoyNbVWNM4zjJRJTkaPbmDmWSwrhCwvykBYc6hh5PbmSXPBG7wZJdFE77gpyQPTa4nTpaKwu2D6WSj9c",
  "key36": "4osoBAECh2KS9tAUSL4Le3XWCfNFEGrz6yQpLewYoMMtA7UZJaoT6w4EL9MuEC7RjNAqZnZnTdbAK5gGN4jUL1QA",
  "key37": "4sjhMCcqpmrvCuJ83mauj9eC86GrWLoA345Cv488b5Uf4emBhYS29yydJUH61hFRNBb6pEi8twJu96v6kktmMUd5"
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
