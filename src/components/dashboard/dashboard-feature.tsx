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
    "3sN4Ko7puBo4crDfv358F7j5bQD7bxGj6LqU4XyG51ktDvfL9aurkxHiFDKHMJvkQ9RExruY6ALUkH46A9WbQ1Pk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BLHnugNX2Fnb9DdYTTC3Uuy5DkhKpBEpYRz9NCiS8xFzEo89YgWySHWsBRsGJrqzcQNdvSUTUkcNW2F4g3bsPKo",
  "key1": "4HUXVxiRwcNsexA7P1BAKdpuT96GarHeETKSMLKqXsYXKEgpoQ41pcasV4R7jZEKifNH1QYsie87Xsuj8iE7GPd9",
  "key2": "3RDMQuyioMc2BipfEaBRAh1dtgsBQRzbcwhJmqnFTFGhZyzyYJZ1v9fRQtwZ8EXXfkrnbLsRzk3Wc2QE5j4JXdyK",
  "key3": "22v47sM5QoQqZDRzg1xeEkuvGm32f8g9bS2vcozdfMhqA7gcHA1GRxQnwvhUMG8fZMQnhCDGHjsxZDThmaYAGGDg",
  "key4": "3MEJKYB3MNzjgzG4J1ACt2bnsb7Vijez2u8KGCnyJ8TRkdk3Tu6QBaF8vcg2fVLgEm7Zdc8mYhM5oUZw4e5MCKhU",
  "key5": "5BQ1u42ic9Jnj24E1hTsP79PRJZPGaxm23eJ9sCUXkBk3SW8cbLud1a7XrJwx8KzbHC3XWgpyHkazhPgtNamVZS",
  "key6": "g6SYBviGLksEGAKGXoMs4M1h7cWuBXNcUHuZhV1pUpd4SiAryAdUda1mEBcALHPsAsPZNs4o4v7JDh9aJR27wmB",
  "key7": "8Ch9Zact8V4S8AniJav64zjQ2quE9qyGHEXF6ZtYc2jPUV1mCZXAafEzEmEpoCrtQ9EWLGaLrjM8fXebA8nK2FM",
  "key8": "3soY6NnX5FM7YZtG675i5EcE7VfxmLANcDPnRnDrKdHwJN8aoNor5gpmcvWSaBm7Niw9ZjSc6V7gu5QYoJ4zm1cH",
  "key9": "5eskyYEGbDZmrgWaW1YAwa5UH7odCMCq91cH9gWa2ZeUAYeob6evX6BfquHYrUPVVfLD2LnRfcQFwMJyBpyHy6PZ",
  "key10": "4A1Hnm8Ghv2kp1FYWxRv6gt1qAgx3obJuS8F3U3324BTLwGr38aTaLDCStt5By6teK1S6vWRbWjkUyc3nAZMJQJz",
  "key11": "5wYs8BcBFmb2ygpg2K53gpzgzACFz45w25Q3Mdi48vu1AY1MLBuY1hjDVqF5WEciQDfEapVFsReEXi1Adzqoh4ck",
  "key12": "4quo4na5fvqhu3aYi5dvSDaduvGfYBezvPMikjKAaSzMwXRbr4yUecPU46ZkrLQ8JnvKjK2R7mZYAYUv2o8pkg8L",
  "key13": "5Byd8E3C2pkxfvYPKPdzsHVre2CbNyeg5oXMvosWkwxfXUqAHY4oU8cFq7R15fvgHVjmg1L9eALkYa4gdUkkGtir",
  "key14": "4cGXEjmdSkGnuLsyQ7FsJd3UzmDHb5sciHzwXngabqYdhW9dtwgq4CiQTb3erwtwv1PYSSF8FzkUFB3RHC4EFQJ3",
  "key15": "T56m3TYK6xmwPQAaw594vy4w5bCxorThNFE1L8Baq9yKkhZjL65eyD1XBhf3W6LKXNbaK9f8wDH15MLidGku1eF",
  "key16": "3PYzT1S7v8zQa1D9jcci3A3jFFBzR5hGXHqQFjJuWNw9xBs74f8BvqFXeFFXSPgfn6X5L1UWDezcHpNq4rbeS4jt",
  "key17": "4NhpgJxGSYs3izomxjiWs2zbX1JUyym6sXv49iTTEhfWBBoZZm79PjmaCvxJzz9QbdH6q6CUethVCix3TUWZZSxM",
  "key18": "2VLTTsiE4tF7AZssyFB5xzoGc7p9crwggM2g4rLXLuFYi9imPEhGpNtSUJHb658DwV541ig1xMa1QyBLfttLNzzU",
  "key19": "5YWdeh9JeTFYEKszVGNNyqBJGMxaLPZp222QuFJuk3JQ5u6tosBPcjoNhxVezQ5HUarkckLC3P2843MokVWdkdLV",
  "key20": "3rEzzqWF5jzpXis2vFq32c7NZqZZFx8pQh8ueWcL2xmM5VqtoJAbSjmA9kaV82BKKTgTVVtw2oABAKmHdarZ3fN1",
  "key21": "2ubh9MGiXHqT3yXdWCuRvR1BQV3Ap6f8WuCPrtSJYuuwEL3Z12fCd6aXZP1KWiuZyB8T1ymCEtfPw4QRy53yFauP",
  "key22": "4ixz3hL9iDy47vcpJHVRcjBKHDxdsd3iAuKBJjUuP8Yagw1EXWdFVZUrmjzghAvV8akAjsk8oMRHP7k4a5cfWF6R",
  "key23": "4jsiG46pXTHWZsrNNmcNToEbZvSuL4vjgeCLABzXccthEJdmuFvfSufuhWQpHqHcspg85cMZ7RchD7wFPJres6Xb",
  "key24": "2PZz1bMA2A7jXAScMkw6HgV8cquJkRxmbJrsLnJ8YipeQgeWxsrFrEu5YGph5XZBHQMZYHsJ8S3DsytbHDoxCBM7",
  "key25": "5KbgAjFPgffmQHHZjbaM3X2rws9HKkVwreanPBXWDDGYfHu4iarSv6JUUe4gJrvujmJAk75yvx1AjjQQFTFxKJJy",
  "key26": "54UWgYKXjKJJ4Z4ED7qFT9KsMpZFqoKEBARNRBqKMZFoALgKsDC4GNJNEQkSvJ2U25rJ98d7WWCyfQtuqQByz9T7",
  "key27": "3pmdaPxhaTbW3RXxKtScZn5hoo6QPbRuixMFzvBvP4rwBgiGZe7Jo2rrH6zHRhqYfEHiDQP5tdKG1eiHvDT5m6bJ",
  "key28": "pMdQJZ6JZcPPNxZapxA7KQ95EV9ncqUcpBvGhB9nmqzeSvqV1MzWj2puoJ8N8HFUjvvWTKeAJbjCxBrnWXTvSgq",
  "key29": "2w7oP3X4eJuGaryZ23eLUwUnbc9HrKcSJnNjhxjSwPhwAXDPPR51ZYew3ReRToChbRmExonUvw7pDMyghujXEKnw",
  "key30": "48VPsDDKRhaZtRZjhE1NuNHFaJBBwd3CZL7ho2Egis55mtzJ5FXF2ABms854wzqGK7Q872CWKH3xyVUDrvzNQSSZ",
  "key31": "3Qy3a2sCQJyq816DV1iLU2BStPYrApWMUvXohDGgincv15enSvh35YgM9cqnHa5KoFs6HwrhBbxPdvJr7e2FoXbg",
  "key32": "57VikcNFtpM2MMbYsdRwWddAPfPc3eiTuwrFHX5ZsPB16Qa4Br5e2Vs4m4rSKmw5B8JhRBMUyeToEuXKGWV3NAN",
  "key33": "65xzu1xa6GiPSwwRnAnpnV6q1gNwj71ZguYSz1fyoAsSz3DWg33xYkN4uNSf2VJuaJyMnKkfiqmZhwGYscM4Sa2v",
  "key34": "3Mji3pSgDxvnpVaBzG6evegygndPGm6Tkyj1mgpVTPvXej21J5R5N8ThFzS8tLQwcjGDgPYJ8NEM3khq5KfohDSp",
  "key35": "SmvFHeKztwGis8qzXaZkvbGG1RFw61z1qLcB7psgXVWKe6YAQ7DxCDjDsg1svk324Md3BStrmQLjKYediae8wHG"
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
