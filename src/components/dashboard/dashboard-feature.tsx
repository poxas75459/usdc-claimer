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
    "2Ko15geJhcrShJGYrKtHwvmYPsJAZjY6hphAN4WzNfdRXQN3RpoR94bmAHmSDXiT5X32dyxgUmeA6jeczeGp45p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uFKC3itsg3f7Q4L4QbuSUZcKAYEXzCYe2PV12ULBCU4jNrieNPtb3UovvJ2ecA5PvKKLYNFBuzPXMUEsmYnQeQv",
  "key1": "3BzbYy7jbsbvE1vkCkYMkcUg7BwmbphQEiBcdMVA9Sppoh5HKe6boGjPund8y5V5gm7WoyZ2Nr1NU66B63wGGJjC",
  "key2": "5bkwVFXoFmMnsM3ZGVPh8NEbpeG14ZjLm4HHcrTMbidfBqRZrwcARUrhZT8i6xCJaT9mSBHRonJcCzSHv6vgRhw2",
  "key3": "3wpnKniCzGfArDhfjFAxaVs43Jt6cnV2FQKwsC7nDjMZLzbK7MR9fFm2WNzQvbc9coD8Wwj8bcNHWoQVRBfkoX1y",
  "key4": "3J7YTYhRevHon5uTck3ZTvgFmc9SBsttN3dx635v9XTdoZpH5bdMZNE6TYSm27fJXiUnyZT3TZ9ytfpXR2jpN7Q8",
  "key5": "2THhsqMQMn8d1tTHjQwtNEuBxjpRrhPBmJHsQpT7kMC2aTLE9DV4ger8nYcZh3jDQEyMbxDbDBejgokT273PZfhT",
  "key6": "bEvhJoGL95F5HEyBKJUUVmUjmdx2TGshbbwwx5CiPvGrsFsJFKBwAHtT3eaJhXpmiASeGNiwMSPVWBVUcHgG8Zh",
  "key7": "5mt2a3sJrhArjvgPnvh2ZtTKGaK2spkwYKQdrRr6yiJu82rsPqrEeAKSpkdFZ5kY61cjjfLxU9VKYT7mE9SUddA3",
  "key8": "5GMfWvuZEVcjSVodAnNUxZYk32nyHD6rqceFHoZ83M6oFFKhc62rSnjM3UKBQGQdD7mFkto2GRLKfVAK9ndsJdmq",
  "key9": "4UqHfeqX277MT1MuL1hrzKGX61Cr2rqdd2kw38cVvqY32UQqk4NF4xaAChK6MJjm63ZRiJh1BptmT9HK4CDZS1f",
  "key10": "5YTCcDWJTUaHN9tcrxTp78MjVcokJiqqMVoMJWK7nUS9FhQp2H6wwFcLopm15DH53L8yTVeKr3zaHdaduYPY789w",
  "key11": "SraR3sSCyM2bArdbBKbLLt3ZmLQRFoE4kjt8re8QkwUtbZ4e9MWs1TJKrRYAVB3DnZgkgYgNy1ieNTXjUjuPV9G",
  "key12": "4WCqWrtfHGqKMCAeMdMi9ZZbcYiPfnSanR8HHBwxYJQPdS71hjYY7smNG82TQxfcz1T4U4mrHcjeWqsjiioqPgkP",
  "key13": "3A3DWgqXx42VqFv8DzBtkN9EHF1Vh228TqD4n7m3Q6PNsyTvpvWowgMYmHn94L893Yu4Zk8xYUWnLYjMf5tdhSAv",
  "key14": "5vLVugwEk9Gz7z6ingN4g79BpAb42UxJGSfPnXdgUMyPW2QxbVQMAgQSCQWAA8zWhBLWJEU2rj3HC7YiTBfJRUoY",
  "key15": "476usVWdWKt8dhR1wuLeQh5HQnLaArifJ5HqUDqbk3u7HTWsoG3JMENGEDrdv98DssmLRj83QrjQHPcxyRt6VXhK",
  "key16": "TPqNmHEyXUuLsiTvAg3dFfyLMU6qjdeY249pQL97XTyaqZDC5eqpJiNHv4dnMMg9cCLi4PtZ6KB7Jzjo445DP4H",
  "key17": "3mpfeqnAFqUhygPUgzY88srBVBhvkhnvnkhHuT6UqDMfWoWPJG6XN6dKqCkWsWLYkLrHxUZjjvYwxJHikQ81PJPG",
  "key18": "zPBHRN4aRPER5vHqhf7whrNfQgxb2htoz6U4moqUYyvvhAdeyhQH5BfwiD5s99KLBThJk4s5GpfXydPhPiE2B7C",
  "key19": "2SYG8xqxxXFDCTJWfYn79q1C7qYoybgsTLTZQFNRvR3LiEjMRmA85AcEDVACkbSR4MprVJ3J7FZkMcKcoQTCdwsE",
  "key20": "2qu1NweZL2Y6oxmu14YsffzDXCLNQG8Cy9sj6EF9dB57PA8nT8gw7KUq9X5n99RdYMVXMSyrdrKg3iuG2Ca2yuWr",
  "key21": "X4GiLkF3aSwRiyT5jdhZS4C7v59ww5E24HrK1FWsDEhx9nKYYjqBVRo39Tp4u7Bjq6w5S9KNknTmMs4mV84TzfS",
  "key22": "5ykG2PpXehQvERR2sWLjE6J6MsQJ88DifD9W4puK5qJxqk91aLuFJs4rK9zyhxXX3dcdQMz5G7Wf6DmS7Xf5okj5",
  "key23": "2FAjowrSkAPSLTew6MaqN6T3rBKdsfdEXeZ3oDCusSNSsZEL5bm2NaXKR4BqzHLAvzAHTEexnZmTjRK6kcPGDtod",
  "key24": "5PvPYt2rCs1WTvjK4N8jBPSveKxJLVQ6U7eAQQKHHzSW9Ds4bFgBqJwaMitTsTboYWNmsnqUfZHJUaZHDYncMNuZ",
  "key25": "5LUSFEHDJ1BUNUeCTg8CJMAFaWG6kTuCU1152Hn4uE1G85j8kMdPxEyUGsba3Qp6XAsYbeJtn88DHqzEx4XkNXXj",
  "key26": "2NsUTWjqbyKC7BCqxDe6VKjLPqgEAoi1iKJFByVJRsKzzZTYXEUeZAHYLmwh6Vh5YyarYUjek7QVCU9ZMsBpvr2U",
  "key27": "2VsBFbkvmNA67bfdAFtRS1qUYLVxf1v248KdjxjALdVsVvmZgfk9cD6jqQwETUcMNggwn5tXfjU5xiTj5vXqC7qS",
  "key28": "3E4YDCry714gZgiFSwXqtxjpRJe1kXbnz5jyv6VtL4JuURwaYJZU3Eu8fiVLf9zRdEf84QFq39BkEQixd8uPc4yi",
  "key29": "3KyAnSiL8uFZqp3KcsmyKWznuS6jkxMAGtL1nxKVLNyHzSuf5tqkD22wmvGUN8VfRSEYUbi1sBvz31ooyLpuQ4U9",
  "key30": "3RruyEQAGVqFUocgCgFoKUbpETvxv9Ws2MnisNMoiHuDujob8EVmxc3S7aAkBCAgqVUUi1LakCgjD38VRBHae5yr",
  "key31": "PtMReBvwBWCJkH9DFaL8kSSmHvHCZrU13ZpUQXJeFt3iqmm52vB4BbCkLXuUXXqVDWQ1EiPr2n1xbfQ7fQzTZva",
  "key32": "2K6A2WkVZ2Ay5c238fD6Khc4zy4dxvtgkE66o7fG4uRp6GUK6SS5dKoA2amMxRHTv5FFnwSjAEfjr71iKaBBM1ke",
  "key33": "5txCPXXtLa9qKddcGvJwhxxnNLwvrfZSYB4mvJDERJUgRn3sz6uibqzBxr1xrAzaGabq7qNnoeDw3cHtqfVdGv6V",
  "key34": "Fu8FqwxBb2MXctbRpm4mR52rDdgwDRTUtWGRqB8YGnwWsNFGzkrK4Yj2gjyX16ta9dhcSLebXisXZsAJh51F1qo",
  "key35": "4aLdKtHUJPbtB6Wz2ViacA1nKq5EKpTkts3kgPYreT5kDv3ZHaKMGJaM78KjXKa9igYxKBv1fczKVn3GarWwsmtA",
  "key36": "2JX39GgPCJhaxDU97jZ81YKW5tHyukTYkAiNeMtDXGhvVxEDisv2N1fDWuhDgKoheVWrHqu4hhq6DapP1AxyVcH9",
  "key37": "5fJczLWjx95W1zKma3xExxtfmz9DLVPrfDXMfJvEo7oE7CQawWqkEtYhj55o4HqjzBJGSTAWtkUDNTkzBvRkitnr",
  "key38": "4aZRe16oeFHTGZpbZUKR37cE2B2FQYHGyf9PWp3sDCUSDeGxAnsNtKKTcFc7wcUJswRicbhWCMeBtZpP6hXczvqb",
  "key39": "5BiddcwniViHaBoYWJExy2nSgvdcPhLDunEdApHLKXDLnsJQ7bXWzrzaC9bBcsF2wPQa9s5qdAMd6LDUdf34jpcv",
  "key40": "7zkoNp4GsTb9f43FoWip8vrCGjuCEweaykvcH1x4GQ1s9qTcbxxFEPMm59WMjH8JULnfGpN3cc6j3ifY1KPb9UQ",
  "key41": "4Px27Leb9FJfdprHFBVNdZbqtLYWYEKZCoH7UNUwU9DToFYKpjS53efQdn9zoX9jvFwRdiD52vmQbn2mM7f2ME1t",
  "key42": "5BVVMCGU8wMykNuYe8hxsNgTcG3ujJJkm6BmQF9zkeXiPnyirQPWbnQG3sPLdyLg8KXKnhHHKvhX7eAyfxjQ2BvE"
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
