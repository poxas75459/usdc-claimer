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
    "48T3wvxLdofxa19PM5Td13K9yB3KT6X4X9ukDMcRJZhTwhZj9UB5URFrc3NieRW93okYzuzxgcjXg9AbNmWyYY55"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ESRcEYnCXgSwPMpPpKhUbZvnd25mTVe4EwiTTdbePjTuDgxQ1wiPvzKBEAaWYWzovHBeggaF562U7vc9ZhiW6ny",
  "key1": "5ZS9Mtiad8GVnaREbuRjdqrSa7VDuG5axCpPuZykWFQ23fPEv6EGNhzrFrmdC2mR9QxPwdSp8zBtVBdcf4v58Fad",
  "key2": "5uUaBfbs6tqJe2mpzvhnju6ZmJsBdudWwDx3AL4ABDi92d8BwCrS9d362g6zQdHehDjYkBrWRc5q4YTnNhNVz4w4",
  "key3": "3C5xqLGg7dZa9tP8T3d2h32RPcWXNjtj7XuZfVBTyfyz4GZQMwMgua2ZeAjNm5MCmf7AALHmVCtoDgW32mF67HRw",
  "key4": "5gKrCBysCwScmy8YSCXciPNACZ4PebD9FFwxHmdNpCXeKvPd73cHTPr8uz6sh5Crt6CV9uPCDdWhGrWYa32aRnVN",
  "key5": "3GCjj9kmUge9MeEz7q52q9zA5vt3aXwUDvbuuGcXJS17B65oWvBSzyESTSg8KU6ri9r7fhW394xkj1zJ6nGMEU1N",
  "key6": "4HRN4noBDme5Qake4cxBzckE59Z3bm2dWrLK6fZzwQH3qxt4oW9NDH6rJERR5H92BeWGt2gK9B8AQ3WhQF7eaoYp",
  "key7": "cjLYr14nAREoa325L6U66xcbnok3dfdNob8V6AuXLbUPT7kyyjzpS5GSFwhQMJnDuhDvsJb1GEQV8eEzFC2DRQB",
  "key8": "4D7uriW1BwrGdxh2wgRRpzwGJ4tbXRUbsfwJ3rFC25tUpaRpdsEe91EtyhK4e66tdNddwJvMde3WouuEVEQ5hGfm",
  "key9": "2dsJZ1HEUy6kXSNmNFNNYBYEUpgkrVnnRapTzFj7M1T8TUDJvwW1cX8FCFsGugUfMbaH5zSiPCtVqgSiPHjvKGBx",
  "key10": "48iqRa521n8FEyz9XaJyWRS7S3qEBWXtT3yQivCzTWtshHz3N5BM5ga74DiwQLwQwPcGX2q82LANtMf68oEakioi",
  "key11": "5x8KUDRJemhfBrRbX8BgfDkm1Vqp6CHABJfR65wX53ateja3JZg7MKxAqLUMQnUgcKL5UURMUW1F6kDUiHNE5DrL",
  "key12": "37w4wqV4mEzEfdqLSjRTXaWona1woAE6w499HucVPrWJrMrhC9DEW6VJ1rvYzaYCZGTK1JG7xaKWT9H6b2Hh9gZJ",
  "key13": "3fXGkx3b6vL2svAHrbsTjvdRf8tvvB4Yhs1HfCaAnWyqULE8w44M4JwfZVGJSgUHcpPmxFPD4Vz11RiYs9QhQbKK",
  "key14": "sjXUAi9xtqq2SGpK1qcNEGLyzHubFAcbJxqf4jkhicTsVLkniVjAJDXtEqXcM2AuWzbca4PU51nMHYtAmNzpoNB",
  "key15": "5BcLC48wWotgq5vcxQ43GtvZMi342QmMZKheKM5Mk5hAL6e7v6zbTLKFFffybALJP9vnEipxteZThKfaWVP8DWEz",
  "key16": "Jpv1dfSQ4TxpMJGXxZQXhYSx1TMpefPaCJ9vvtK2oK8cfLMcE2hShiVgn3aL2GEpSnj9ySuQNhqW9kSz8EWG6Yz",
  "key17": "2CQYqLGZsCKRW2SrWGwYKwoee3QHQnhXnKJwNWhdMk1a5ZJHZT4PojuCoeh9cr1Rygr8HWjhnjNTwrxSSvma3W1s",
  "key18": "4PJ9NXVHYgcKaTrZ3jhTboVdhUVaFhi3yb2HStmG9Ygznn3TQKrNkvXLwjTKHdjNV391ac1zrQb8W5x1TM3frDG9",
  "key19": "5apxE1FJJfSet2BStfXYTC87psaHMKFyHaP5cF4a3SvasCf8tUfnNeobGpv7HC7ansEm3vh6uGNn8PjMp89tjQCb",
  "key20": "3FmYAPrNUk35p5s766jqFwNBou6cRa4dYCSMkPMJy42FX4XZ3QygYW7NnhePhmnv3jSGYNe3uCtXSjdCFEhtuR2d",
  "key21": "2A8DbbTAxX7oqTjeFdHTLgGzknreknSsUjyXUnhqpkNitBLX35bcWTgicvcsMb7qxE4X5aF4khaCqcGezgFzr1zp",
  "key22": "5cP6rKF8Pu1XD3tbGgzh5SwLsmHe4ESNCSDn28XFJHxCHdnvzC3iMHRP9EJdZg7FZqMTqoYPhS7rRbQo87Dr9Yvv",
  "key23": "29rHZGn7SQmjm6SG7u6tKYFiYM32GqzCxWCZU9AeZRFa6sTPCWJ4tR46LAorB9cnBXmpki96Pp4KKNCMec1FmvqS",
  "key24": "C3n9QwV767uLpw4mgorf3hi7sp4YJLWxNMrjPhkraG3ibWyUKzTS8PiwekhRCbxL2uEHqFCaVEtCZ2NSnMkqyn3",
  "key25": "Ko4bpjxaLh1h6b16yvDptpwMwWMogSPttvHjhj7XhaMwhHothULyAfnGfnd9u4pSVErfKaYxw7vFSFfCcEzREir",
  "key26": "5rrjtsgPRXqVayDTjP2FPQWW6Z8nNvUidAYmJgza6po5nMmW5rjTVnVxzzJu2eoQBJLTnXoJnea7Fs7g39qWsRQz",
  "key27": "3z32Tkn83CutscWBXThuLM6Uz9YaQXkppKneQwZ7K3yhJKyRyQhKANxkuSNa5WWv1HyNqqH3DYZ36tkmdCUu9jgj",
  "key28": "2573Pe3oAgGQgCvomfVv6rtnJATv37Zx3mHzbh9SXbNDnAKQzX1NLxWVLuTwToUPKHve6q9eftEii3vPcq3HShcf",
  "key29": "XZRcFpvvrpoY9iBnZMG7F1947mKSaRKdrfq3uR7N933Cg1jqkN3pjsHs9hY5c4gPmmqReTqdeb1L5HS9C3LiTPL",
  "key30": "5TEcsTx5ZS4tQFyfjsWStqT5pXqpdnDptrV2oQBB7RJVFV2TYGEP8dNhgAq2L4KNrvrBSPc4wz2Dx3M8riECzjV6",
  "key31": "5nAaShCFNihgAZSAhQNybvoy9ZuUMFSrgFzuTMrd3D5UXgBgGp3CTTnJawkRbkXHmRe2nXFF6LNBv2ndk1AqqGu",
  "key32": "3H2MnL8veE7x2PRFnDGpxP2XZLvXsryHmCT7mSYA6oUxyTru7ZshUhC3555KygrVKW4UFYc68zgwioMvzJrMokES",
  "key33": "JzjH1JR2uaNtYZUgvjwUNp1D9FVaTgJULWaRx7GKtzWWWGq5zxVhCh8YdkAYUbCwm8xhDX8f2m6CVmPw497YpLr",
  "key34": "3WThrQnbuFT3zdLRRBbkYcryp9NVCFDAiS1iLRLihNHBqibYqWK9KnbufK6RyuYtDc2Eme7HYrmDoSoFxYzq9qr6",
  "key35": "5p59PKxQ99tYrH5NRcj7giPcC3T5zDcWiwYU44nk9XS944gxnmnjhBJHGiQRRdJj37LrYzM8io7jQavNmyESRWHg",
  "key36": "3jYKi8Kmgvng3bK3mPyTe6BngtbY6pmUAHGaA4H3dfDd77zq3fzJuQSAtG6JLwU5MkpNmZhinrsMSf54wCUTDEuk",
  "key37": "2zdRaga1bAkiKDJaNHWSzEKBdKqxpUP8NsA8kZ6t5RwFkvxWPCJgPWjC9LvsTsdkYTv6zQDd3BbaUeht8U7BBp3h",
  "key38": "2QxFHV3hYZZ6xaDpsoCrTBSxtfXVH6jwm4epMCDUKDpi5v6yG6JL4VXh73iVE2eFE9viCazN6Z2BbMAnSCqb5dia",
  "key39": "5Ye47RYWqnyJykYa63NxYTocDV7t9GSjdCkTuNMFij146A3LhbiAsSaTE2H4MFVUcWNhXmT9GzJWQvt8zbKcutvY",
  "key40": "5grYE16Gru4nDSgbtVXc1Ucuv3UCUcd4xtpHaAVkeWgZsiRxkK72BgkmfHMi7crJJduePrA8VYz2rT3Fy7thT7b6",
  "key41": "3aRnqtNcez8PUjU3cn4fWMKNezJXHm45YtSVvVXv4me4SokiJqUrBaZC1mCGRBWqDTWYgpdXACG615SvNmixjBj4",
  "key42": "3Nrak4tdhhnam79WL5XC2eAkGNZedRnzdv5rJCUvveqan1B3QV8jzXVqiCjQePNXKVDaCcJw5mcHGqbhKP7CF794",
  "key43": "WXtYfdBFb8UGYtN9ucpt5BZ5EbgrUdCn4v1CGZrmT2p5phP9bLx4BAWVKSFD1SRGRhiSyhEWUD6aPoKb74cCu8W"
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
