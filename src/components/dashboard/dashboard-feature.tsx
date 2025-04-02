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
    "4XF9uScDALfFb9f2jUGdMPFE2pN4fvntgrriuHnXQm6MkJbtCQW1mtu6CZTsFC2n9FQ7Pft34rS1CbQhbzVZYwQi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XgWSByT6xPTQgsDSeT6PjezCYCDn6q8tMa4Kat2CyAmzxMUB8MNAag4kgDjb58aHEDRv8pZsEHwDH5DVQWmZaW6",
  "key1": "oMdVHtnbi8i3wCGoffZDBjwiNgSFtkuTNbQu1WWStxF4f8BCthECtjYYZEECAPUEZCDU1gpFuM64HjKLPVTHEVu",
  "key2": "4VfGEEjvySkpWtp4L46uzC3DxnKGeDaKYLYfemE3x3XDbFR7ePi9m3o587qLWyEPziDEcd3UFkp9811mJjdTSspj",
  "key3": "4oJfRv2krrK14RjNhphEdDCsVPsBLBN1wC6KiFLEvLBzeK6QdG8T9dronw69aNA99e4VY4vMk8q6rXrmecstmzyw",
  "key4": "jPxuPhonEdQbcJhsgYyEjUsRreS4bEhzDyzEcJcmVfeLpnDpP8dPSP8bpNk76yMmKAc3kNAZp3MKd2onco3ehtr",
  "key5": "3fJ4uDXXa4GvQe8wmaqXrxaTYRiJn8UxgvEtCrgu65RafTkNAmNpWedPsNRVcqzLnwPCeRAz3dNFwWc5h3omkGzn",
  "key6": "5GeGmqE5kVG18m4ExEc34ZQhgujPihwHhtYJZ5RMkfknCUrZzsCRRuyTDeVA95qdUA9xRXp1CXnYDsD5A3DXKu2z",
  "key7": "21E9QxtG4kJ6C5SYtrwHYgxXJhc32DJdQ3QeBjZV7yY6hs73rPhqdwcogzrtN2WQY7psB1d9bZXRB2hdrUJifgbk",
  "key8": "5uZVSkGUTgMDW5hCmwiNjcLL5uvAJASVy5Uo2njFyYg5zxKamsZP218cBqZgqYYYBXcrUZvqG9Qkedg4yo3465qJ",
  "key9": "37waFKJbAev5Y5bLVwi74nA7PRvrNvm69vfeqUHz8VQmtKfYbi6iyQmtUE2t5vTswnZs1ukMZdQqcZpVDJM2s92h",
  "key10": "fqLXrUeNhm648hzV3nipYaZ7WGE75kdQ85QVV3LBbJnBMdD6inRmbSWCkySfhohQtSzkfEAovFApPs9UbHqYRtq",
  "key11": "4k4KxppMdbA2tAoCHhBq8Gq8kv365w4VNj2anpsFYbpVGvmngNtGNRJgzkemUQHEF3cX9K1evpjG4qQypnG5pSNv",
  "key12": "5uDPxgt5NXgGUuL2y3MbxKhTJwchTgUov7CgvavcREtScrfNYCzjWrhhDTuWQVhhnVUKJvsgX1D9KUShdTFMDjwW",
  "key13": "3u3oyCbESHZUHHyVKwkHg12uNQdrdpfX9qYXAD1NTj5c9SHV9qq9QjvEzybPqptrs6HFv1JLD1DLEqX8Gbny1iQt",
  "key14": "31siEoBWwg7N27HkTvBh5A6WbvEMRQWwtyUEwnJeLt13LHY3rVLrRGpfh51vXisEsuh9MzgFVYokkw28q1RdNNYT",
  "key15": "4D5D3JC3Q5HSZyQvF9Gec8gvfaKHYnqBN6TJWTCVLFgASFmwm5EwMWEzruSA3mXbs4NwLz8dNLGjkZqvvYM2aVr5",
  "key16": "2RdMQrwTtitpUzNpn2tvambxQRQ2wuBRe6YPNdudUXwFGLR4GSh2mcsJY7ioeLqNECeajK8RFo25DVahrwMteXV8",
  "key17": "5yygJqhkv9AfEtqxScBkJQZ9qB7Ub6ELWzq69ydF7TdnwhLpDmkzEs1gjC7HrreCQXrwQLuA8anQvVJXs1BsLqz2",
  "key18": "4hoLq3UQyinBAFHK4QKckAKsReesAee95UUBHxTG1JVNfob5wnewMDXS66CuWPD49vHB5jorVoTjBeqwKv6coMrL",
  "key19": "C2FRnGortuXV39X284zEMUYPDxUii8GbLfpyBNYK7Sf4cE6NX95stqJyA6mLKYjL1GZnWVRvb7XmJZ62ijMo2V9",
  "key20": "4jDjrgb4NzbgNQ1BdBceRVhqWtrbXF2kQTrD1hH7S9VEXve2TCcmWty4MhXRVmXvhH3rANAQM9CnxJpY3vAXuMC1",
  "key21": "2dhiUb1zkGFPSetaFKNSGuBW4cXsmvYBfpKVKvqB5sJjrfTa2UezTTQAq6aP4R5HHisJmr7deZ9si6kskxKQQKR8",
  "key22": "2jCUEatydS8ZT6H5GpXetnoA3AMNefuw1gFoDNXSEhEtptAxVxmxRcYetSmeHK5UZF3DyBitHnvNbobvWJfr2XSK",
  "key23": "4kTHwRcPJyvDgreYkEWBYkb3kAPTfH2jdhDfUJxMpxqgxqAoR1Hhd4NtxJfcJY68hbYfGPr77o3iMFmRBz1sPrg9",
  "key24": "2W8Yy8yYmCExMXdvB6sxztWteaGMEPXXRrLaTFPKKcfiJ42Z5YJPHSEcUYYA6UJzqmquJPQtD8orD8uQnwKi74E9",
  "key25": "4Hg1Fs8D8E1wJgrK7H3XLciYyihcjvEn454XHFXVwsZ2YMCPgeEQN8k1wVk2wAX8kEVtwVZUaNT2T5nWqfxs6Xuy",
  "key26": "5XxnrHaeCHGVnEqoYcVnXPER2smUavgWgkvyrt6cXEfkTeK8GqMwRKmhVqSWDEVvqJhG8vvygB63K8EzMbMxs2Kn",
  "key27": "4X9nHDDqCjbpSqTkybUhJDbTRLZCxtEUo3jmFjLpEYU6oeNNHXRBfjZY3GFSsjXCWxrszYMjDDgHazMYcTyJGg6u",
  "key28": "2VPgqDAe5yiB6yQxvbWmNrg4vYbJALzDKdY1T5MpgYTJMRyBSVi6MzuKcz42NNhScgL7SnCVrR83hAGS7Woo56re",
  "key29": "5BBnWfReGVdRffxsvzLFGRcC3prFcRghKvcZq1zsaPpcGu7LneSUTPKtvoTtwytFw9bCnu8kLrnqvdYzGrdTRhLD",
  "key30": "3r1R68n7Y383LXsv1NHBpF2NWcpKmetEhiXsUk7cpPFTKS3NMDCWQnhCX7H2YDfqwwFWbPzGqjw7GjbDqusW6Dji",
  "key31": "7veTphEgMTEAHFSg8Yy8Mvjoz3GVgGAAER2Mvqe7y9SwjMane3kp3Xd6Ci6MyYhxY7dVKqu4hs19HH2CEgdbjSW",
  "key32": "bPaSrQo1kLvETWEqxXoNvNbwA8sxs1tP3HSFt3uywX9cDHgUfSkyefsoozbnQnN1vyrQQS9U7GeHqnH3D9ob9Vn",
  "key33": "4xZY6WSm65oaFPxhRpQb7juTE9mhjWGszoSvraWNTgPjM1pPQVieWM7xfUP2uEZjJYcZPU3KB2bTQDArrVcoB3Vb",
  "key34": "3nku9AMg5u95dDwPHHS8nVwn5duGgkCPCspbcEWxgaEwNU9nM4sja6Qnujp9rqccEmJrJR1f8fbCV8gNu3FcgXtP",
  "key35": "3CVn7aZcXvmH5PZMfy3jjf1rkG2Lb1jcpHjnHju8ffM3BCHQSgJcdCtpGH1suvuaFp5kUGL2VhHJAMrboDr4PzFq",
  "key36": "gDKvfY39HQNyTYv2kp5pYtwfdjocV5fZVoscCrrwwiWQ7PPo9KR5bRYg3PhspbAdAcJNBZx9D8SQDJqwaCNa5Jt",
  "key37": "67FhW9KVCamG5sRZk4z8zQAafL4sFwTQbr6JTX9BonKnmzcqYLAWEjNH9QJgv2B8R2SEuQQ2BzVAYgkNfoa18ji4",
  "key38": "69E3wr2xvkVXtEwCA5heesidPW3dqET5UVXHJGEz26jHnwBmBw57vKqSU2RUufWasKcXmDdj3D3p21ad86TwDid",
  "key39": "2TZQrQqp8WQCMbvCxhzDq15PAaqvPAnE9MNZjCEzrGhaiD5bg991Qnfii7yVi399SkVGe3fG8bVQYzHwrpViZS6s",
  "key40": "4hYhNBnXU3x4naYyhXmRGJRDbmcZWZvSTMvL92jybA54XC3Mm8JzMdi7wDzK9M1mGRsFu5CtjYzhUsYWsjLJbnAa",
  "key41": "3tmXkREZcFbcV3E73qdKWKwgA8dc6mady5Kw6nbsGhc2CtCa8YqZBPkrc1Z5urSvR6dRHS9tbitWth1TwcSwsXVx",
  "key42": "4LUSx34TnEU4rpcTKnvawrLpNmh424C3yn8U46iP998p9feg5kSX4Z4CHbmr9oyCvXq2P8CJxxU5228VuFCAfxWW",
  "key43": "4Ubo2kbX3kujBXUWvk2QV5UfWX3QT4zm26Db6W5Xo2ttwSV5CPM7A9Bz3ENSpJLVVRLH99khEoQs8wQhT9aKyeVx",
  "key44": "2Vj7XPeMrJpYh15gZAGK3crnx6zraASNXLGYgghBjm1Drup5vHkR92teEmJJ1YLchzDQdVFXVeMV4tLveLPcFPUf",
  "key45": "2PksWHe9siQpvCHjQrif5aqvsvrw9ydKkNp3PU75kMu5kbRLFsVWXoZ2qBm1DT2Sn6wpzvYCPbJbT2dUw1r2jvzB",
  "key46": "5kUnano1gbRnFJKDB2uNoMN4JN1nEtcEstUPPA9H3UKU5SSEuxkuodXaDgQebYcW15ehSqunVt5ZQsm4NLVxuLwr"
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
