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
    "3zRGFSF78HyVGufFpN4MRCkJt2ah69qrhb8YGtoBQ7Xby6uSQ2EHuRvsXtVik4iStQ4kkcdsBTvsNZifmNBRoBjY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dj6pBv8CC3A96zsCbujyLAT3oo8r9Aybk5XYNLUD1bxdPUagsv9zmqMFLR3a1mz3JpvE8Qh53BYX1MZZVbijGeg",
  "key1": "5BswmMg13SohxazpQK71iCVyGz8NWLZdk79WG9dDGERnDAzj5YufkAK7zuiQ92q2LagGhjET64pEkQRLBGKUvu24",
  "key2": "3jk1jQgC1MobcxcpNhMQSYAiUZZ1La4B5VHXfkvxyBQs7n6ccqskHtJ6YnGa5zmRKRxA3VWMiBhKcra3AfTb9BRt",
  "key3": "3pLczWeidByYuzTcuG8Z9DwJwsBPFohmdfgdT1FmP3hdtvryzK7jV3B8BfYmgwM7e6jWrUYB17UasF3DGX2vMpzk",
  "key4": "3Q9K2qtNHsL6uDMkA3ZHqn4jfmVR738gf6kzGvQ71pwAvWAWwRxPTXhSKjQ45xSAnvJZS7keSXWmcLXE87zNvyRZ",
  "key5": "2PfnYiywtPVUHE2E6XaEYA3qpRygUHWd3H2jES6wsrrXenFQtrcVGNDT59kmZ1NpTsf3ogQNhZvv3xkK1hXBWX8M",
  "key6": "4CWuM1FMwMt6zjn5jEw2fVD4JJUESSQvXBUV48oNJPbYUM2VAthw83fVdXxyYGSLp4YtM9DeVfgYcLeu7Kez1Uvf",
  "key7": "2fQW5SXXbQLSSeYgWNAEpgvj5zef8h25Ut8vGkRs8uLcNCaonVXMuYy8Y9feThxohzQ6F64Z3QotouueiAgR8iQF",
  "key8": "5ydrATz8B6Jxzkri2n7iwi3HXYxNvR8XDz1MYHpSNXhePNVBuwG5TiWc7GBure1JMGNcP61Gzw75DqMx4z5Dxiw9",
  "key9": "23KjdvQKMJG3AEcs5zMGrsptUSU8TzW1NcGgTtfYJ1J3NmuMxkwGJWuFrrKzMUJ4of1XPriMNVNFpAMvpYCRtga7",
  "key10": "4RbJEJUDG5ApvUJ5Wj7f2nt47aztQuwWA7QSA2geGim2tTt6ugqLA9vrPMmRUcpBK4RZwJKfSeJj6AY5BWYvQsDT",
  "key11": "4Nxd48uY5qyuYyUwpzQG3pWEvRPckrcAYfk75vXkrEdBsncYThefZeBVYf5Pb8KMb7pqSQTBrbmoBm6FaL1gDLDg",
  "key12": "2LGmbmQxEFvfgQpoq8yYGM3v3YwAjRy1JBv3FESnYkysUski4Y6CDYy4s1pGJ9WUH3AXR4CBpnZzbQ3PQGuYBQsS",
  "key13": "4uQkPD9PKDU9Yn1wx8Sim7DM3jRLVWbQSUhwE8AbSKdwx6TCaaCowrJkXY6i9U8XeTnsmthYxKRqMaSSkSQQn5no",
  "key14": "4URxTKcnuSNkpqEtkmLbTBFDz5vZvsHQ3CszVnC8E3L5F6w5wgx3MA2R2oExMVNir8UadQ1mfHeu9xguBjUsdzLj",
  "key15": "5K3771kSkr7tCLS6Vitriern8uvpi6a5bFr6AuDPvCXxo5jQMqKU2PiMXhyqyN6UGcGqcxFzLsiVnr6afq5j6LQ9",
  "key16": "BWwHqirKoid2wCMaYixr4uXdEDtR9MD2SMYWADgkkqtr5hSpZauRmvo1dEb8QKDzGZa3bCjVp3a9T2HXvFKmNSM",
  "key17": "2vTEhrC9pWWsRS7HPbMxJfbvYsuTSqRVSEKu25kYzQTr8QjbXSAmYM6qmb2tCoDeUzvqwMqeUU9nNX4wFMcYGkN",
  "key18": "35PY8QTYatS4gYvtbTRx6wiqatRUpeE7Kjb4UaLUiVAzQPuVyPCXLfQabooAaGm24jguF4QGHDpnQcAvVsqkbTZa",
  "key19": "51rvvjN4yECKyDMViRjD9BaPhuoLUvruKKu5Xq4Pdv5XzdAnim7D4dY4WRcVkyPvKHyELac6gxrFVfy26esLS7Ks",
  "key20": "5U8erWxdVoJUbCycY1jSTRFFuCwxeS238DUSCwL8geMkJk1c4qjSjARTHh9hppJdxpyVWFjym9CPtGSae2whBSgw",
  "key21": "3iwFVjG7VaqtV64NimajkKY4GQZ65CQ5WVJa8uHVEvGkRLubHr7drzJDCMvUW91NqMP8qPRN5r5tiAVVbboTfKsB",
  "key22": "4Htom1yfN7wVGmqBztYGkL3HieDr1q2GfYyapYQjR7xjXsBguzxkLMRhDNTtZnm3F6ys8krwwGvgx1qkQtNk2YPK",
  "key23": "3rHqTPAs6twZMAc3yrRsAUmaFCoB6PVrxjJhEq8DmLcWphmJksdwRczGc3ejQ4ZuAKqS7tFdnvg8xcj5GM8c6uCp",
  "key24": "4VQv8EEy4KNZfLchyAPLdZR3ic9rind6L73CQ2ZJu4cZvgcKJmwEbpNfUZsfzTVjGyFPuyTsPgyLG2KBQhq1MJ48",
  "key25": "Xtd7ZpbpoP1cwbuosmWTaMGGUFjPuNL9H5H6bUuRgUp98HVPstg7JbvGCTVM8d3X45DPXFzWonkgemK8wkeE4qV",
  "key26": "3bu5UwkWQR2uHzDo3mLYLB9esCHRWpZMuJRpVuJaSDLLefmTmJ5p758ULbTmARcV1vmnK3nhNoFS6w7DsCaoqAWS",
  "key27": "3wLvaCYprPGKqE2KEFgyMuYS3kyb6PmmSbFqUngfnGBsZoV4pGtuThQ8BFSozkfXyQFVsxvDeisE1btJYd7vY3hR",
  "key28": "2VWgs4Ra4BCz6BaSg3gHQB7NtNyoqqiFdGJ5v9ZBpRSrwyz3uixVwcmR7yMcNEqTYZdkF6YUzDRv71uHgNX8dqtJ",
  "key29": "2Q1CcxYzgPPZRTzEhoKsbQ3MWCwbDQXRgxooKGDFywLmjBuGatnhWvPKBBZuHq2uHWmDPn1BbdVVSHqiqpTnKNZR",
  "key30": "4h68RyMKbsRKgcdNy1RyoG47A41Q4qBqzBXzReNjWkWJHJYnXgQBza5A2VKHyLYLz4Q1YhKrmV5gHsuvQkPVU4if",
  "key31": "52SatggBAmkUJuq18yCDpiJvxRJuTZJj9mTb9BAfcSt3gx756EfUpsGYwwHJnsMcZBCfmiiLek4YGeAkagUDBCLR",
  "key32": "CMo7T8sucP8Bm7Hqfh1YXKdVRX6DyV25gUJTLcMSvQmih5yYJzovzKeQ9RvwChxJLFh6buee3hBHrX1vM5piy7z",
  "key33": "3pAa42p1kvxrGUVBT6fjxW9wudNqgiQQV9ric3jAt64ibkQ3Gzi1woTgpQVTNWA5M4ETXyM6pqNQTmk7i52qWrsg",
  "key34": "cv5qUk5dWqJQW41XXgB7cR554kKVK6FsJGToXfTxzXHmm5JM927fo8VTLqWfp4jDETgDtvzozDGfoMBhoasJqFS",
  "key35": "3uXdqCrVK7PzMDjKt81UZ1WNtExV4sYJRgEpz62ygLXsPNggtv7riCirM4qNAZ3cW45mFy1VFCSN5xUjQzxgRiDG",
  "key36": "BpdvfBgvUTbBmHKAZVDtTpukZ6nVfCz6w95CCLkUgPyZHAqAVABjsCrGv3HL1xAsoieScDNVmnXMGhFTq4mBCkR",
  "key37": "2FitDVoahKejXissvy2GZqHiRAEzUT9cP6RXk6EA7QyTii8fVsuTr5EbRR4KtqJ8sNr44JNUjaqa7K5jcCAm5Bbx",
  "key38": "5RXb3ggGwdWGLGaZCma5pWXUFdWAnNwgd55HAi7Yxh5S71ANv97GXvhxEpSQeLMexkRysKJMUfhn37sDUMj5rn5w",
  "key39": "638zrPxQSvcQfd2XbPFHfvKifB3qw8b8PEABpxZpuLYN7fpCMwjMPkvxuQsYPf5Ke71qvkdDMKej9wkgLSDWyUVK",
  "key40": "4V9knF3JzU4oZPLYtCJ39S86zdtJPyEWEYMWLT7KgXPP989XDgg26EL2R9AgqoG1uBzR2xhV8fespSw3Ht6fCebv",
  "key41": "FtkPGTTA7ymqSemh4do9aB6mBt21xLPdnK2NpKQQ1TJ7awazFkx7HXmZkdbBEF5C5EZaVZJ5cSUMoLu3nfBniwN",
  "key42": "4m9rGnDoFgQdxCDTiPk68kyW2j2ymFsvf6B88QgyQ4NpZGz5GBL8PsYbKTUB4LS5TmQk8MrHHiRHPz1dNFcjGLuX",
  "key43": "4NtrMFTiDpe8Nov1KJnipFbR62CxcNEyXce5QjkuW31X2K2hDV889Psc5eV8H3hLoH9qUKHPUNRq5b9oss2pzToM",
  "key44": "5aejVydc43LDxvRdvaiJDEsqhTwr73aNbtuJeiwAAbxCwSpMst26oJcMZYYintp4R6k7H3dtn8XqoLPx2S1hLhUw",
  "key45": "4utPuqRnVUyXXJoYQiNG7vJHYNhcuDaKteCN3FnGTB6qPSHjrgB3Zfqowz9vRxPwwGasAtwC1jZSTtQCeP3UYNe9"
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
