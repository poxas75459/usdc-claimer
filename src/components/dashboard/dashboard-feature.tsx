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
    "5tFsVVX8qHsHRwW7suqRm81sxVkeogAinMP9qKHhGP8xfK6A8yQCHoAmWGqs4jh839yPSxGCq3GPaWZb2RNooGr5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25NnUQhETf59nWGNhTB21sBAMo6UuCnSSsJsqdWrjRgP5LDRw6HZb471GNMZSz3CHqPJ3qwJSrxP4UrgXmbuTmcM",
  "key1": "32sT1TjaWNnDbuwJDwBcVChia3MEqCQw5wusRSp1byh9u3wamPrnXLr8SfW6yARidXLDNngEjR9fywR6PE3ppFig",
  "key2": "32xSGLYe4WQuknqKsLSWBFNqoayyW2zn5PUThEZauUEnwYPLmt5vuWwNpkon58jtesPv2iJGAWA4TgJNaeYSzgyV",
  "key3": "9csysRpC5g2eYd5s4x1Mi4XJPdUws3Un78ZK1nwUFNLxVJVK4kwbvEMqSLKGSNm6YiiWKGJHwKE5jNQnVSyBnc5",
  "key4": "4zK4PvPTFbKjoVbC34X7NfXm5ekZKMyRnXpdpcvBqzkbENNNwDYSaa172JiCtJxj7JgQSYnbJjTswiDnD1JzLL9p",
  "key5": "3qtxL5vgVA1wVETAViJgVBeXzry81f9XWLZW72WbLZMquy7UJNrKvDCHv5xMd5Yx6rxnG8Dhr8E8qrhEGGkRPxYY",
  "key6": "2P8jMH2ypKctmwukhE2TqAi9Y34WUodr9888UrzGQbk8gaacdiD2eBjvWM8Z18kFqvzgpL62nFqWtxiZxxvSmmVM",
  "key7": "3eQi2U4dn66EiMJTLfkDhfczRjQp6D5uNFrtYzKv1RRDMURpa33T632FLG1Xxw3NpfipC63heBwYV7XNhahfKnvm",
  "key8": "4sVgUYcX6f9SVgbu6vrEsuv9tzW9G3KtqRnzPQGc874eihwLap8eYG1wMqd4NQ1gYXC8TD2SHeuEgFcg6m33KTCZ",
  "key9": "2EYHzA7eojWNBH3piAqcVRZ4XhCTcyeYQpgwXPGZUMCzBc2n8aRq8fPsyAAgEtCiSgLP2N6bqqs7UCHyaa7LgJQG",
  "key10": "5scNnW4gECpFL6JRy4jwsr2zMvdJdqzhN7kct8gfXrupPSUhJiSsybzGkgLJNmQvLA6ZMAmYTdUUXN5iHKkxzonD",
  "key11": "4RXrv8jXKBc7XooWGvbg5c9mYryLSSr4s5PRA8AiKoJuXYCvX8TqjeLFkuSTfq44pSJyhcK44rCHQy81Yn23WLsy",
  "key12": "59kn5NqYMp1YF6j4DM14VeKTw3mdXUi7z5ayDGSN9BTQoy8FSMNjQkQVKGWYP37VCwTRv815mg4PBxSU2dHXJgHv",
  "key13": "4nuDek5V6XgjevjMQ41Ch5vk4vGwaufNjKMinhb2TwKkGuFxm2RuMgX7E23UampmwZwPs7Ns1yb5v3aabRUvpQPN",
  "key14": "5pECoZxDTYkPrcdVgV6yyJZJeq6kgJ2KqQ9HVsRwM78aPQQ9ynXQqDqFSXppv4PadcZqZ1jEfhH8bg3CLfHg74CY",
  "key15": "4X62RMfbYq18RdXEZAanyhhW8eTKXKAMQgRt4arkTzZ5CxSLoe9SjqAEKipFfqCEzx7wpiaoCddEzFknzZYBCeED",
  "key16": "JCVCWrEYcUtGH6rfv6yVNp85zYmRVfBhMKBpBFuutLZdht8CUcre8Dz8oJFmXuzxyxMkkZzsorVRou32wAUboYc",
  "key17": "547A8G7vkrFximzf9UQgRdAs7kEjXXKn5KEogmEvUysiCDRwbbigjYWXhBizJKNtzDjiPXfWSqgpshgQknNUiRaD",
  "key18": "3CcstYt7zFGyTqJSDgNe3WYpb7XBNqvMsA2CXWQ9n3rPHsLSNcgFUSwfdTnf2ac84N1KEwRs7EwUbzQr63sCG8EQ",
  "key19": "24uqtCkF5GZiNooGNjDPXYKUFZCmYRZEFaT7StfmcZxF5FTHf4YK7QvssGejrXUWgAm2cPwEdCvXMvCkdneR2sHh",
  "key20": "2LvbYFnu2RVoLrPPnh3BvSr1QqQRhddkeWgUZULmrbFJrvPyQ2pJ2ey7qNAUNeiQL7WNbwLmawkmDspVB7KcJyhC",
  "key21": "2h6b7ju9h53SZQDdHVS4eoQnT4FYdu4P1mrYFyYvFmKNyUVSXJiLsa8ieF83Xme8NWXdheWCPsJz8Ze45131fpt9",
  "key22": "3Kmo7p4kxhUZz8RJMCQpBqxot7rj3X3JuQ9qipXZvhsA6x275ys6RQ7BoXDrNFNpCtgtt76KkYeu4go9cJLxAUXo",
  "key23": "2i9VWkdgKNu1w31UsQPGAE6kNELSprw5ZYhKhL7CSwZcVYGxRQX65jSZWxGGtDEynbXSdzoGojJDXyEy1UmMY3ub",
  "key24": "4PjvDmCZNH9swqxFafcWxHdmsqPVkXozjb7erE9E88VM4MAshyD4sS3awn3k8zPEGJ4JjJDjpWJAqxU68EFe9jhs",
  "key25": "3fKYUMzAmPbc2wECi52pVgipN3SiMTM78aQtajGrr296gkFM7FhU9byx2qGLpLQYUP2b65PCvsYdmS38RPL7zCm6",
  "key26": "3s9obDA5tVQ9ibJF8Udc2S177hiW5yQpt9RJvpLJPycptBNFqneWq3hdGBkNDqLnZ9KESionmbaa9G1mat6YqNbC",
  "key27": "RvS5L3jkocj4sx1W43qPMNyRVmenxMifKViFhd7tKsvVtQBwXtX6SKX8Qx7E7AXdi9Uaq3WjZfjNT1mmCAkoQF2",
  "key28": "34NwXPDN18etGFhDQ4UKqWnfV3QHc6QmQziCzXTaFvCcVRQY77uoVCk7DE9YHg3hxJc3NTdGGEgstSrMVmyTEGFH",
  "key29": "4AuSSzcSLvzhwiy59j5uzz2FeEcwUYFTfRmjqXLe2ziFuENjNyaMnjnNt68oSF1tEFZr7CEb6u4kTiURdHt2HBz4",
  "key30": "2vioevy8nhEsdAfjuXCNYNvjFLYRmPsw538vsCvyydwhb5e9PaDcAbYDbriRZ8wBnf7utB5dUSvckfiGq6QnxZy5",
  "key31": "4jqX1RwNmQ41teF2oyYBQSX3b1MmLs1ZxRVoMH3mPiiwHLmZQxL8H4YUcrDw57bk1Z2QFfkTR516knoH8pgpxJZf",
  "key32": "2UGFgtMAKJf61z2e3X7pL7GR5hmUmwHMQaei7jpLKscPKGkStcPKHnmfLeBGJE6A1W6xxaDH3AVctCC9AkTZQZb7",
  "key33": "eTk5EfJtFvVNLhzVrjgvVXosv2YUPf6ZCfebnCuBf5CUDjY99Nv5G9kAkMdy5eqSpa9E8mimktvxUqLPtr9ZTGV",
  "key34": "4RoCm1vbDd3pubbPrj7tDa3UfvixDesjWUSLP36P3MfmBiitwC3BGK4qhY3nCBQceCSP1wM2UpW9Cj5vpwiqJMJf",
  "key35": "gPunQRLdNZthjxRZude9iSod39i52WEAVUxpYSFAdaM4XGNbdpitchUwwg6jRr5PSxcC5J8eszLKyHpns5FrHP4",
  "key36": "vLPqPQLEZ65EqGf8p9Y7g8cMUzbNTHHtRt1YMpEQhLP6JTYJLfRLs8rXrSTxPCkPzzRx6PSow9L54xQpQWdCAqZ",
  "key37": "2Li1vJEbPGiHa8AWCdXNNQbLw73uNnWTaMmmxL4DHYoFxPjGVXzW6ZydRC4M8Eptp1pg12tRDsXKhs7u2U22aAUZ",
  "key38": "4SMWPhQtnVZ4siiEHpGkAS9d39Ai5khj2VqqETGrckXyuPAuJQmJ9Us6jhxMgFntV1uBWynRcjcreRvxY3ngjph9",
  "key39": "TkrsqtNemPF39c5TmEnv3pztnrbmZcdSxWNkUZjQUcvXUpdWuNbVFNUgHSFsToeyMMBqgHDcbtEuHfaUgbKU3q3",
  "key40": "24V1eT8BTv73UzX6t7xzBnRHsuQgvhStpfuKoK3bJgCjvhp2pBCotCkP58MTf6Peat3XxixxpTqwRDEXnP2t5ciX",
  "key41": "67Fv2LxLPXSyk3YhHoAb63FfYVVNjbpXUMhoXRuuXYT3RQK8eKkAp4GXjf7yQdyfXNp6mxDDx35iJCpeJkdb2fcz",
  "key42": "YsHQ4zMjFm9MgpCv19c6eR1VL6Vv398szJiQAFNjtNbf2HJftfdJyhViziVw8uLUMRgU8t25bSL4tBY5WnJujfp",
  "key43": "2N9vDieyeiiukRWJVZUBeYPznhdJ3t8tgp2MLestoA9TEHex6VZSXkpHxtfDLA4m26Q3ucBpTbujm3iQHGhcrtWW"
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
