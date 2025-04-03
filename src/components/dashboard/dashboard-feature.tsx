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
    "5PjESX6rRLPHEDEDZ9TxBXaJLvczpEeUkw6vXmJwSYn2vdYJGoPtkyq37dkquYxKim1nrHBAj9jVqpT7W7TgKKBD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dyRhu84JMP7icHVFgVDYLAPidGnAUC2dBkcDqTGBe2Ge54JPMm8MfGD8bLiUKz7GWgb8LyLRgCzEndevBcXZE3q",
  "key1": "MMFu1u4JVc6Q37q2P341ZoRr8eXqoR4rADE25m5YchYVx5e9LArVs8iQpH7hALQR69Nadzjg3tAovsKs1c6v51i",
  "key2": "F92fkYjGyccn6QmQC8sqNoUPDJc3uwauhgPDVJEX54Xf9oB291Pb7PByhbpdHUCmWMHEjQETSU8gWRyp9GXXMPL",
  "key3": "ASnX2VJ2hKQz2Ge4wspjciQoqQ5DmVJZeVD3y9Yw4RVWGwKygzXCfAbrSEkJ2tgxhCmsgJkBiGtkxHbwJEBQfmM",
  "key4": "2oADuUL9Sob757UnJQjfMtz3wahoydEDToQDJ6puSQrmoe1kGRnXzTk4QVQ2tsJoMC87VQnmicivLbGMZ6FF6g86",
  "key5": "jFgDdG4kvYWDYUFaHywwysMcLU7rYjkukzYxtYpBv9ctnqGCJu89bpAhK1bXFtrbLcsEXbsFGAZg5LsQLQhWiks",
  "key6": "2WVTzSFSz6yB2mN9VrSgdZG3YLqaxGDQCWTVQMAZ9d8qJJ54L3maxNzdZ8AzYwpQAJcA7kXsU5PxeQzPDhXF32aa",
  "key7": "62mXp3QmffPnzQj4KYZEqeS2rkwZDfxpCqqebRDqcQy1aSTdD1gQYkPoxcZ969rw2f3dcNHHRHqhNhLDgxyHBMmw",
  "key8": "4dqDhj4D6asatWEyZpsXWSzBFsdUSjWuL4MXB7fF81aZG6QeZUYEz1yYsQBb7rV6EbJywvbsZeFS1ThiVR17cTrP",
  "key9": "25v1gESbm4sLHqkk9HZucmubuyQZwZS2SxSsT2hkFHPQVoVjT9UD863YE6sZD9y9LLmsaBRGE4x6ChFL4oz31fVH",
  "key10": "2RNQQkMT6ke9b55UZqNrq9iUwkEChLXc4ipKEdyzhfjyoe48onQU2QoH5Ewh795NnfZCaTb96qC7tHMLWpxn2SXw",
  "key11": "4EbstaFdpD1Zh56Ck3y3QyYojEPEgr2k88PbkHeGjmLrPPYTVN248BQDpZJDeDCEZBZH3inLZmk556ZRJswnxSac",
  "key12": "5qjgnJhbbCsWzo9wsAgNLRhv1q1Gx1pAQ1SoyUGYxffK1c7yww7BiCQvyz4XiYPWQDo45G8e7srNpVgQ6YpcB3Gg",
  "key13": "5rJ2n4RxzhMVrNbF7g261i9f8DQbWa1Di9CWh42jd8KuXtmk9rL6DnGafcDJGL6qsgesUVZ8CCjtcQqBhwwEFpXg",
  "key14": "gNezAcNTLgxZTqzndVmrHuHNitKFHeyvAQD7uG7M5cJivak9oLPwagU1eyK1tc6wv5QRrcqcneJoZcLmdz337cp",
  "key15": "4avYTdNdyMdyPGcTr8fw73hwb9EmuMfuZXS1DccmEchuwYTe7zJgCVUPykG7tjrKoHQDdXwnQK3KmkwEPwp3woz6",
  "key16": "2g8VDASfos6wY6ZLhctY4RT7uvNkvKPbWnEwN1odhWgVju6r44KPP4dWfrRJwURrmQ3BcP22otzQicVUX7Am5q9",
  "key17": "5QkSA1BdQNWmCWdUC3RKPF3SZmjbwzWyDFfNkXfBc3enAq8qUNLvsvE8sttvugPrP5YSVJhxBpFaEheMZg8e1m6k",
  "key18": "GRG5ytGBYwJDDnDpjcuHjxgHB1yMsetWPjZN1cARowzEV1nuyvEmCuyRxq2jGVehpXsavjz4eYsfqHdXZ89y7TE",
  "key19": "5maWdNWN4WhzzHUN33W8eFWpS3ba6UfwbEPQGvmU4XU2E35P4tME1j44twmEJM2ibbyqpxyx3SusX73X9k2tHYqV",
  "key20": "3d8Q2ecjkvBVEMDGQzVJYZVbg86CzoT8jfzJT5fdL1pTfJduVyu5tJHDZHJYW5kz9vJ5MLWTRyn77Pf1dhQxdNGT",
  "key21": "36QQjTgGQr5u5cdSUaqqciR5VnUdmByG7jWH4y7RRshUjYXUdSQ7YDTKqZDCixzU8AMuj5PdJkEodmptrCGuyHBT",
  "key22": "CqfZmFPTzPjS1K3ZsradiiD7BdYKPJCk14TyPUsvdMgovVZhqSGwxkoa9o98r1i1eiUZ1zxWqQ91gcE4e8FHq6j",
  "key23": "5s5KaTUu8N7M7umMtGcWZhzXM5y4zdnFCzGSHVBJvDKVWnuGqHgArR5L9EiXzGBLah73pWtm2YPCiupTTUM5xTXr",
  "key24": "F4CoG37FS3krbygxKWPicEcHRK5eGy3rPEHQcWnPV47rDkaXX1gVoxUGwnUehyWGzNmLTHwtdaAPbxzZjh4m1zk",
  "key25": "4Uuz1hMDBeMRykGhh1c7wagkB8qhtsEhCb7AFshcD7BGaAQ6PHjU1xDLBp6mKRVZb16M3zJ2N138g5vPQb54HJAm",
  "key26": "2sZgqCr4fZmkQW1Bb9SWRu57yuuCsbzzV2KKdCvjR1MqDNeTKrD3EFXmhnWD3Wjgicb4o519AEc19HTok69Q3uov"
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
