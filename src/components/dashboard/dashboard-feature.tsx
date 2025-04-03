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
    "2GrNBRFuwU9cyKsQCKtDpwqCm6Sd1dvjVuezn23fK9BkYtci2krXPTrmAKfsM9XTQAz6C5C5Yf2mus91cZsYasRJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Cs2nnseodrhRD1wXdy2SBXxi9Qmg6VcUwgVfMhgc5NdtuNSA2GTUeAjNacLAnFioAaWRvD2boY3Q7drViRHrUJZ",
  "key1": "7PDQ7Grg3wfTuwSp9LXKhD4r9SGJXbtL2fhpxfyDjMQoF73KfiHbHxYGsMUfeSLtS5QgT7P4hQrBxTLc99BHWLw",
  "key2": "29C5VQTfKeUxwXpJfnrG8gc3XJja8C2m5PmBKd7A94FwZWUJWN9jzWqihJhL5NCewmUsRdbD6e3NxEVMmyVTwgSJ",
  "key3": "o8vEmwWWJfzSoyvVnNXdGo9vspV2ytGzMCosKvFeaGbDVJWHyiYrGr3GdDRwHeKMTyZN83NJ37toW2m7AmMMfZP",
  "key4": "4JuLfTg1xsQT4jAxYBDqoY36Xnrjj1ZVTLzdggqKspK3TZyUMV78zSP7LMjH4wKnXDcUimoow7hFztCca4BdycNM",
  "key5": "2qK3Qn6FBR37NRkm8nrdaQy9p6jSqPXX99EkDVCPswrchACaEYKP7rt5nBHyTTjSqYwtZt4jF21YVAndsMsr42MV",
  "key6": "5ufzqV9nCzrJYwJdZic7LW9Umkp29ag6gQYjvq7F6BW55LziXVXEakzeFyDTFsDdpwc1J8K4NoJPYSnapGr9Adug",
  "key7": "5RWzV92HG5J5hq6Js5957xwE6mPYxFw6JYeypDbjM3Xh9TyqbxQydQSZRuPRfFZmLmiSgBCqf2gnR8PYukPsvudd",
  "key8": "zdbre1aZLAvEbVs24NXVjQL3ubXLvWTBjqnRiS1X2iVS4yTDKudEJSmEMVvQu5h66ue29jqM4sDiFUXs6wGtCxR",
  "key9": "3r2Eqbi9E21cDbtUKz64sfbLA2GFQWJVqwXgJTB5nNu1Mfyj9hCZdQZcGCx2Va2fzc7J2ca7vzWKDs6ZQvzJnRBc",
  "key10": "2hDFDqhBEVoKSCkbeeowmKuGiHsFEyhjLqKDKt4ygz2zZNP36EBkuuRtf4NYFTZrAWypazqXPCv4fVCHhZvwPE1F",
  "key11": "4VFT36ff58y9qAYtw6aHMKgjap6rCdxh2NcCRi34myD63xn9Fy4uLjMwwBjXMx8izh3BTu2bqnEKYnJmwnLsbFJV",
  "key12": "4Bj77cot4p7TwdMuzVqQXSSUgyXYcfPZgpCoPSqUcGgukGVCwwjSJcvX7ZjrxMt55yGBTdtzeBbAtjTWkNuSxhqL",
  "key13": "5hXnrVDw8Cp1tscNujSeZa78jNs84M5Rt52N5QGBM4qPuQ4f1pfzGuSw9bXPhBHvsKL5xjDkSJbKSZx3JBJURMSx",
  "key14": "2pxL2LZzpXjPneRLKu5m7rSxneHEPzWKVDU1AgK67jTiSTg7sfHPyegtYSAiLegv9r8xAqhP7YB1a56Xw2AHYRvF",
  "key15": "4q3Yc3ZnnRkm2aHJqP3RGyF9fWMViRExsw4xZMsAPUPw6sd8MHRjc8mmCo2dugdq6PGr9tYv9f8xhVQWV87cP1Tu",
  "key16": "4LNeiBscqJdXhZBbuiEoByL8jVB8YCMXhgwtpZ9Sdb7dDcsHnqmUpvNMgtqZESuMPeh3gFBb4wm3xaWWAoUPr5Ya",
  "key17": "5Xc8xGQ43Zf8p4pyJBG9vG2zeyRcLxLsojV936iapZLFQRotzk5YCG3ZpUvvibsiAcyLgsqPgPNhTamDcDDSj4nL",
  "key18": "5BXUKHtenG8YErakXZKxCcjQ7CpJRJr4PvaGPLyCdP2oVUoQEosuarrNbJp6HYrXbaeXb3uzRAzbRQzvWPUUy3GV",
  "key19": "BtUMJSZkbAoNKSjPCgLLMnLA8vfymQBmUv8HjLmTMZY6PHDp3YD9DobSuACJW3Z3ZACJsjifar5KHeV2SpnhaHk",
  "key20": "5R9ucP36LJXZA5LMHEKsMCrN2eRZCF6ssmfN8iZoCy8cVwXoqgZtMHibEBigecGNvPApksCz8SGFqEWjn1PKT5rX",
  "key21": "4CY9LzwXcmqWTqgPk3JwjyLgFuQJA6dgtqCq1usWHnUsBLpnmcdxm6Rcz4GNx1rVUsV1aKYLvnegH1BQKyChMGM7",
  "key22": "5wwRMtu2TByFYf5mkCR63yyzC8iMLR4KHwwLLvtDYxMgWaHvkW9EMF4kb9zkTw7yEbci6tK9vrWR27HpTbdtbeuy",
  "key23": "5qVKU36ssxQXJRrhYWX1hXe66zCkQH25J3vEpfW1eZNjiRrHVQ7x3YZXQYctohUZxeUMf5pgXBjKJuUtFyx7ZJ2N",
  "key24": "kiojhCGFfMtkxzas9uBHMCvq4bmaxschYxEWWcftS1ne2kKMCKiRKQr1sKsjXkU3AdBqQVfAZHaVKLyG1xopDGQ",
  "key25": "2QBEnzUw2tdXJEQEvnQR9cFj8LHYngg6cEu9vn2p8L12BuPHPU6P3mjAgj1tzXN5vgzFhVJCVfZ97JKaFXK2qMfZ",
  "key26": "2fo6CKxAaGY2PYvyAKwJ9zNEhx9k9iPaXrsWV2m5xjCKCwmt4irfLwFLxLpQAEJPeXNso7MqumbWQo4EJFr6iDxC",
  "key27": "2QBHqR4izbU2Phjaed5EnLGtAxZLXxpt9Q4zphTLdEhTRrbALebDssXge6qgY9aRJJtqEfDzinXLxx6pjzuY6EPH",
  "key28": "8RaeEaddgiXfG3Yz4fYAbJcNZngZSMG25rpRTDuxq3R8gScbHMkFq5XrNWnrSrAUgj29tBXwp6Bmdtm8oDUU4LR"
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
