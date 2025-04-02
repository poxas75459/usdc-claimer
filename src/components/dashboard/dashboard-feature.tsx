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
    "28hWcQEm4Gq29aw2wWRZVVUmKbYfbbtLHFAsRMgoCT4QWXgnxM7rcCSSJ7oUd7woxU7nUWrtLeakXzKfxi1a5Vkt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AdrYcgauv8nYKac9a8BT33HzMsV1BNqUgCbDMHFARMi1GuJmoJWPJxi8qGnZPgoi8L9wDSNbmcX3c6U7fwaUTV7",
  "key1": "2koam4SGmh66esRPWLAdGMoyvETsoZSZR7SYG9hyeTKeyWroaMtxuQ36fcyyngPCFQfAagXfMZRhFZtvLf8obx4k",
  "key2": "QGxVqcjRddupEzU2EbzPXbpjJe9ejTE7cZzVQ3A1xm14boP7A7Ufv814m4GaD21Go1b3WD9PBWLmFpxBcfyXYAY",
  "key3": "4dWmoM8rp8RW14TjFJMKNk387V6t6ib2wxC6i48Q1zEaNo2GS8UEQK4HPGCFTgmU2aSqTWc2MZXYuaK29F8MCVHw",
  "key4": "3nLw8jpSnCL3Z4r1GQQAsZT4C1MFN5MuGofddes86xaczMjESBiSken6Q7y4kWepo5fWe1LfLatc9RtWoGSEF2dv",
  "key5": "28gFKoVj2n5zY5m6c5sC1RHeGqRz5CHMButXQ5n2Hni4tcu6JCEEbHoL6jwQEUmcrSiwHER2UMDByqfWi4D5Cvop",
  "key6": "5BTM2Q5RaVmq9HMocvnNT9cAXwohmkqD9BYh3j99ZEizj1zkHz59LEqwLPmk6NdkAbRXSAvU5QshrA7vaBDzPQAR",
  "key7": "CKgCc31qake4ooLkiPanqT8e4gsdhukz314fNkHd1XVoJCprw2dfGFCMhPAydNv9r1zf3iGKFekabT6GHaE15Us",
  "key8": "QWuKq9xg27fCYobsbhn57RbtEFEVESyfCZSH1b77J6Y5L46CcAK3PQ7Myi1vqYio2W3QWMZY7BRqqd1JUK6LUus",
  "key9": "2DCQoXGMQwFPGazcg3jE4dBYM5qbQL7rov83YsX7rzuMptZFw9fsWtueXZFNS9XbWfVmjYeixjdscQjAMn1EwWP8",
  "key10": "BwvQXrYAvMCEWyFdg41taMwfJEHPm56Nankw5wCgtBz8ReLh3Kgb64iGRamwdKQgrVPPX7sKMao3m33c11VAPig",
  "key11": "3w8xb5NhJBPEujFhyJCQH82kqcYVtEGAe3yWrm8Pjder6ejGk2YrkNMmGyBkvTgSSTx8ub1V55c6FQSo8eUAGEKZ",
  "key12": "5q8vQCeea4GuUhWw27uxvEC1aYJ9jfDgbEG6i7DKi9BAhQgFJTZLRRV92ygfrRdYRA28Lya2khgyrZcCFkYU2eHr",
  "key13": "4V7R1kK9d7nHPz5dpL9Bf2CmgZpLhvr1GVSVRaw5v3MnxkuYxEazfYyY4MQ3r39s4hQM3ZHBtQN7UWatD8FdMd4F",
  "key14": "4RiybDSwoL6qeodQfoAAcyS8oNTKdvKkUkSLy2spLZg4RGQVrwh9Bz6FjvgS3brpt6QfDibjcoZiuyQqxeM4NiMy",
  "key15": "4DxDdgnsorAo8jTXWcg3cjxNybpdV7YjyhNxnAVnph8Qe7Hys6vuLJFBf563fVBTTLzkzxJ9HynuL3RJkGxoqhwz",
  "key16": "3AcGcNmLeq3rYy1Zx2qDKJxaXtPU67VeejE2g3sCBtSijnCf5GD1AMuHckSsQcsW5YXbKfTdbQ1BzFqdjaxaEPfW",
  "key17": "4bnTkkiUWXSmkCSsYtsbSgSY4MSBhwXdTMmKmbPAYfmhoFvRzbatftfiFT3AJbbkyEiRNXr2h2wZKMR26q1kDRUS",
  "key18": "3MxsxL3msHcyPbtDAbqV6ZihA77hhbg5LsQBTsZb7PD8Wx8FvvkfkwMw9Q9P2TvWksMJL2E7vpcfcU26sDHsVG1j",
  "key19": "Y6C7nQ3YBpB7iThQ2DrCxZ3x1qx7QBs2iyTWCYLk1rKVctY2baHKGm1PNwZRVNvsPfqHieVKuHC4EHaMsUnTACq",
  "key20": "Dra5CvBeyFjUd2UUJwKcf1gRo1KQXS4xLkqZu4ncEpckVer25hwBSev6gV3VFX1ovznY6JvCkpov7ufcmUcSYXn",
  "key21": "5Zg2roTR2Uf8pBodYE9Td5BzYzTkqcDNzwxdu6ZwSs4iEkC3A6UFJPHn8Shmx3JGk5UH75jTuTq4Z1CVbHzPk46x",
  "key22": "5LsoVTKXxvbJkHcEx9Z8zBSfZFmppktvzTSvq8q7ZBngy2hwLQ6qtECCNMcU7ynmuzFgJVeFuQSu7RgoJsqZUu4T",
  "key23": "5UfWGRjrZteHcHsg1j1XA2PXJqJUGRRYXzpsxRGVTsrrFhidQMwpddac2fri9PTUCJJLYLsMQjdKAK2p6UCSDaiL",
  "key24": "3D2CtxCb5oV62G1jrBLof6dVr13y8LXqU1qfSK6TNKtvZWD2zCKs9fuTY2qPmayvP6NqYWspK6zYEGbFgYC1L7aN",
  "key25": "2Larm9FHgJxHXLMkEekkNivzfWTN98AF6sVtXoq3zexiMhyZ4U5pZdQ5XzKvxMa63XDzLkgMRKJRZAnxtq8V2zJB",
  "key26": "2HAqsZep9W6s18MWCHeFz8su41Tez9oNUfaEvxb3adWHsxmMvWncfds3X2aRG6grbLqAGfADyQnsFbdQq1vSdEgq",
  "key27": "5nJ92GCMkgKdm95oA7oHwaLLaufWceyGShJHNpSKWigCCV4dwNZdjemXyBQa2fC2ALB4v1WtX5rFUPr4SKfesCCh",
  "key28": "59z19yLA9StaHEoidMZsY4bKinUksTfUH62wPxm7va4yzRCNgvLiYpSyuhcX2avNNVstU13U7HUFNjuSuBnPnMrs",
  "key29": "4AyhXgQPfLszSczLTFDgRmHJNaxtZAGn2NGaLcZoouUTjwKNbChM8bejCxhjrhjvJDNTjyKGt6M1z23BPcpAibyY",
  "key30": "38xhB8bvFi6nmtW2g42pmhFpoSnULhr5NFwg6fiXGZ695tzutCiSg5uTYqqLLsfTKSdhbhEmrkpmvWNuG7jwK99B",
  "key31": "4YGbXmkexNuMMnWU2arpiSemcsCBuZi8tFcuY8YxjZJP44znL4unTpGJNn4g7VAWEp2FpszDoyboei5JH4Jipxfx",
  "key32": "424koaTocV5tHq3jJDda9M7b5jnyfnWKLAkLYrbVWmbRLHNR1dGe3mdHGkq1rL4M7EKubvPGyZEz3edfYQhMDQMF",
  "key33": "61NmWSitrCs3wDCB3dHMr9LmjDn4LU4wej7C184V1gvFUum8gTDfUBKa3hNZsq5cqMCeRzjiUSJmyvRH7crZdSQp",
  "key34": "5pXWRmxsS9kzCcJuxRYLjdJMB6Dsihi584V1cmzHNicxhbctCcG3NWiCLi5uxtDWJX7ScTw4jzCsfwS8T2NmUr4c",
  "key35": "3Ahzrxe9AFupwtERQpj3s7PMYDdTdYAy8ozNgEooUCoSMpQNocAxahMwYJkJg3oHLansgNfiZ6Hdu7fGCeLEpaHo",
  "key36": "3tu69BopotJcSzjs4wJh5U8JKj4LbzeDQRxejkDSzDcDTnZMK2VXoUwfgmFhbfqnywdYPuFpQCQEzEYYtwSwmqaS",
  "key37": "5vdivN7AMq1wGGjS1vsHJtkbJ8zvtVQ4T8BPYDfaUu57dsH5hV4rD1yS9rbRJaxPHJkst5QJPLhXLcUn6cseL5vB",
  "key38": "4ajn4ZTfeoSxzL7j6kMpmMPgcF2WsGUFpd9TErTaLyZf25BWcf2tggTWZhtDevxQd7xyuHtQvEvXKF9MCphqu5ig"
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
