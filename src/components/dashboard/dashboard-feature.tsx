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
    "34Y3WjoPaBdoMphx37p5qJg1uVyKgRPWCJZKNUysTo8i9GLM17JNewuQnN8QXDmLv9YieCjTrX1fFaJ26AaVGsoK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VfF5pC3k3Cd4qgdMJXkvTKgHw9k1ks6GUCuJAev6ufqDHtB72rLoRXzmL5MvAv7yAczku7EyvT9QDSpUngDHu9F",
  "key1": "4s8RYAEwGPvvEMSe9FwfkhCe1jdVh7VN3qKqys6cwSFxatBS6fS3id3M2dCaDo4fpfxyJQ12VVBGs4nibxCuXjEp",
  "key2": "479zZstcE6vyWo2PVzYWEDSgMNnLpsFCR1cMkVbbzQisrNSFhnHmQ4hxLw7S4QKHrojyujR55WotwWYZhSSx8vtf",
  "key3": "5GvdK47ZpNHkAV5yEFyvtoV346MNFcPcSRYFAkEKnsxuScK6qEZ3GBiBMdYdhNjCD3bj9Ed1btcqtrW1h7uD31yp",
  "key4": "3zcUqN5vKDrB3S9954esozAeoGYvSCcwGLTkYyVvG5M72du8Gx5qti4qL3P9nseVY3JJvb2xksk4gqae3zXniYjD",
  "key5": "2pV3GiU7fL2HeJo11FDhRPfHBjCA6fKHfoGDMvvfVw3DLBo4NDq1qVRza4TtKAW6RkZyXhEcYXoNEB1fz4ji3Cmp",
  "key6": "4owz9Ku8nmnYbxCdcUEqcCZJd5rsbz6PXMFBurC6gA7vjFCnDrb42LyrnxjFxkKsNnFczBvTcKSGCusgmy8RGEzD",
  "key7": "3KUEECckzVhLLFydpKBJuXzx9JQiTKeGvHEBg7wP7tzkGbfBQcq2hVp3JR9zF74cKfV47CAVyAj85DkzT4TMDUn7",
  "key8": "xYmrEQcpNpruXiyxordX2EKbiSve5rA4M3b75KAebSSCB7u3RXxyup8eSxWP61Wimd3JaphLS3zErderEHqEcQP",
  "key9": "3Y42igawnuHdViFUkrcNKCua9ifQwm4irFCoX8vcQhgY19CjghizcqfzWZU7ro99oCB7WZF9HjLn2mMCfTX96qBi",
  "key10": "4UXYx8jFi731SHL4Ngg9RPtMZ22248rSBhYCCk1ATkCTGqbAUZxPFM6aDmrYs6Qnv3vS7sbh5HsNAyiDKe1H6JNU",
  "key11": "5AM1pPZ9f8PBzBgf3V5A1bXKFo7sTQZzSxq5YB8rNgq4tBz8F7C5ys6b3pjqhmZLFPRDW86C2sJ4S1zU3mpRbuZa",
  "key12": "662xLMC4r2Ba4fYF9Ba8RsTpVpTxmtFMXKq2yocikzA2migkyRNyvVzfYWmriAXJQQeLepNpdHrMfgp5vVqvZ7Ca",
  "key13": "yurcEnbP1XFmvr1hbqcEQwxWHvUaJj28idMaoAZYcCA1xyMYsDZxrv4Kf5Ho4qfwjC5aFS4u6wDuopsbbCh3aaT",
  "key14": "5mmV4qEnz1pRccjM5MaJXWuUaMCetmdG9cJtNoXLiKa6ap9uoVbYNLMznBDHkwboqGcHQGFkcz1NSHJUUx16fATp",
  "key15": "2gqbR5AmJTYHosgZ4MJZQF6jcTPxRJGFHA1FStmJ5rj88cHkcWwWfzLWMqgCR4mh7TWhWRxBTYKCePChpNZN7FQu",
  "key16": "3cztNfB8XpuFhtR7X8o3GQrVozPx28L7NBJK8fi2dnyUU2rZgKet8uTrKonoUjx782BypGAcNMaLFwvVGELzssQK",
  "key17": "YkJsEreik5gKuBT3omL4kBrNNQVT6hKZu9Cjyof69riEZDwWa5MMWy8TVo8RQFrdrsotk82rQ5sCvhL4B9GHy8r",
  "key18": "5FUmNw4hNoPA4Vih37ygJRp6MsV5H8DHZ4y6b2CH5jZjw1jMtYEhvuKsfXnsycpB4Ws1i8GCJnMkXigx7bv37YMP",
  "key19": "4zhaJq8dnz2YEQnZVSQdqVxUzztfZHg6xgMPmfnuVzqKUV1kw8Zcyvp4PcTpMHNc2m2NcHVvNRdDwDc9QYe4r7Bo",
  "key20": "BVjAztRBMX8dVKQvWHtc68bUxncKofmdCPrMvfRCuoiuZMouGiti5S6r6WAWiXJjDWM9JvBTo9fdTCmAFu8GYw9",
  "key21": "5Ds9edm3DypS1dTJNsc4dybGJMYNkmwZRH6Nz6F16wMfpEFKVwiHn3BXyw39Y8enQWMSFdySC5ssxKg2De18QCdj",
  "key22": "2B3gHro8EqhdD4nyWVCM2rjurrsHt8eHg7Q1ijwrFAwrkT6kV28wCqNNhPbVfPuyFqxmXBRa8rSRnRzApTPHCFLn",
  "key23": "4m3qujEofrNFR1MvELfuyJsR7QGduzvbrmNfeaYf7ti9Zc2d6K13Cwb1J4pnFNfo3vWgoCZke5NhRakBYdAsk2zq",
  "key24": "bTEZhoY54fahmzBydD6Tb62RJcDxbvguvFAFEmChjGGVkdTkV8QqM1NZSic6vEAgzsCHMy7nj9aFMimyj4rnkUT",
  "key25": "4mtsLsx5VExePE84Mt4U7yUfvd4zJYkeCTQsJZxTioNqji38Fn98Akhb4oo5uXtqDv2bSCpPCki9GNN16qZxXTv3"
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
