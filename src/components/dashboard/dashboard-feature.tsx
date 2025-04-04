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
    "5gBJ6BVYKNzU6EPopaecBCrV8b7VEG98DV4UYss1VaGwvuiNzRYMfuihGpSgy5RhbHRnK1AUR9smoBRbsPNF2ScK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PojhXaL5oqx1aep3Qp94LGcs2KKeRUP6r7MsRkwdhgehjFAC2zogFcMxZrHGe6qNkpFFxjB7sNhfUYsFvgdiWvK",
  "key1": "3o8ufHhDp4Ce9nNaRgruvc1wMoaRM7t1HZvmsy5Ru6hRvQ7CaFLc55Edw6HrooZsnhSj6PFDx2PKsSFLW5KeBKyH",
  "key2": "38AFog5Q1WG6BFdq1KpfxFonVUQx1ZjoEL2dd6bFaMzQTWc7DM5J8D4BCiASzWcnCvKcJYsEWQM4tcrpyu5S1QxS",
  "key3": "CWuPqe2F5zxYodW2SN5hCWvKF8eULHT5d7YSfr33A3bXCgsMQPMNiC3147wc2HX4pZdqyCvHrTUmwkowr6ZXpPV",
  "key4": "26ya78unFkMQsdiQ8SBem7CfDhnDiUTgyFxi9HbLcTsjB2HpaWZH7SY9g2nR7hzyZXaUdAnqduzwxfjF6r2A8tSS",
  "key5": "2fz6mzhcQ2LymVnESiwc6cayuGtPAUBXY91Ts63FNd9BZhLAUMaBwwKQZmrtuXqhYXyX9pyhGyTzBxnvLuAxYZKe",
  "key6": "5Z331EemK31yfZKzDQxXeynwgKZSGURZ8yVg3KVx35K5pLazBHAma5AHEs4La59gNfgyanYWDbXt28xvFi3kdxSm",
  "key7": "waD3WyN39Esp27UeXxavgTi4mSUvwVdkLWhR8KxUWALQr7mZ7GKLLKTiu5DsvdLwm22A62xPf5qbd4X1nJuhFa7",
  "key8": "4Bw7GuA6wUUsuRBz5zHT9fUoVETmac1VkYnAR76xS5LSrAHXRF1sZgU9cCZhRNsntXdWGZyfkAWb6Rty24GUA22m",
  "key9": "4ve1Ho9BWvqbSh9fLE5rdhitSXMMjD9Yj7B471hVWjEcdzvxP1nxtE1Ms2UejtBDKstJnmrPSdsf28K6F8HUd6Xm",
  "key10": "3Kn4V2CDLVGv9Gv5nSqxL4TS9TXUizouKvrvSuUENmLxdoZuUyWnBBjvJbFtQeQafGdPQuPbke2eekake78gzRm6",
  "key11": "d5TgrXHjTwfoG4311xreqjMCUBbgGasnYCPF9fU7LS5N7PRkgVp66uMhSUdhnQ5u7oAYgn1SUPsw3NuvTWBy6Rw",
  "key12": "r559GARcjKVfwshgGXzh8G9sVnspqZABMoyyQywAezWGm74ZTwoTi2v3cmpc8hqZqSVCcF7PMdy5ZTuPN9huj1G",
  "key13": "4Wf6jBKcS6TtBqJ66thMUFmiG4BB5Va8o86fZE5FosVYpxVpTnifL2BRVkiobXvWPvczgkkcqeWUMt72P7FHBSvy",
  "key14": "PcMfVoVoBSLAFfK1nGMvighaozQ2knP8PT4WAM3eku5r4u3i52s7eyKqgheni3DZffvbJ8vZ3h2eJkjscmxD1sW",
  "key15": "VymiUKPKLhzssn4YpYoXecff56Btnf8iR4SH4MERRj5CuC5TH8qVJHJV6gZiShf8z8K64fvH8VZr5gNFN2LJjb1",
  "key16": "aS9GD9dYin8fDrMHQhze3LqDSvT1Pkk5Eo15ucQyYKRKBVTKJwHnahdzvQGi2m24ghwrDnwhkU7yLQKw1Sdbx2t",
  "key17": "4BFqWLdutv25YzriuucQEDpYim9bLoLh2Sjuu6e9HYdxWrYX7CDyQaJPasBCK2Br9pvcNXkNiiddJH78A3WA9q6j",
  "key18": "3Akqv45afqefmjjKDgCc6LdqTjy1QyRE9kEp3Y2QqVZxvdHZADehHe6wXGhTHW2fqEq1HtrfqtLvFpAKHp7GHS6v",
  "key19": "5BAwF9DpCqYUq7ghtacaqUFoP5eHAQ5fLsdbvbwJ585YLLNSSjDyJS3qFq1AFgLiVezwhveyxCLSYyujxQnnJYKn",
  "key20": "kgGqxX8Zep6gCqbhvDQeMNm3fkK9REQUQ7LrUFat6wpxd4F9KdPugujjjQFjyrx5DLCV7SAtHQ9NJaK1F7Ut6Ku",
  "key21": "2RG7sZJfy7GNs19NivwoCRJEXo7hu5ExECkUXLGTEtPS3Phby77A4YQhXCXpjau8ibTbmTBAwzNkwCsy1PJMAoU",
  "key22": "61vQ5NHQeqncG4FCtuNEKe6qW2HLShJrBGDbzpC5fnyCT8UfhLZ8dTkVjobWJMutoSRASjxeN2f7WgCkwL3CH9Fh",
  "key23": "2NhoGeBtxDY1nkaqPcHdP3iERp2gsGH1hmUa4HuRAdAAtAtSBtVbQp4igzhzarJ1VB6v2DYbJhApM84SJjybBQLp",
  "key24": "4gis6GabgidKaRuC4JWKrxWqVKoCEn53TLweZswCCw9ktegRACLAfryP7ghXQNEUHs7SdR2yKGwFphiBFw4Wk7kF",
  "key25": "5wTHSowkc8eW6BqRyTKLJQjcgM7fo5j7DLsLdrNZH8i8DWTWeTs97R3wFpMuaTQUGNEQwdsu5cBUvzzR722h7p9F",
  "key26": "2P552BBFmzzTsqU4b8eSRQJe3nvAcmKoC4AadL4j47q2wV6qtCcikjgT8Pw23yoqT55WZ8SyAvd864oGTtmNPV42",
  "key27": "21F6FyC77fUoJQtyXCp7YH4An6NxB8ccCRqV4px3hM6ww9jfpQTGWFcEta6rYCepSZHWMrz4xgCQdMWvRUWjRXgq",
  "key28": "3jD5V7iNAD4U27D1fxDoKNoGPYTunhL2uvW5MDhFn77UYgutjgzKVQjoMMjMxkH2akV1nDhfqTubg6vj28H8Gm2W",
  "key29": "5U95w6kH1SnpMkcVkFZ9ftUkCDwGMSXc4yNwC9U653j8hWU6yUScTytWtdD3xP5zNP1Tye6WBNReTL4PMxSkxuPD",
  "key30": "3S2phSgAW6oA1kR5hd1328SwXd8inzH5HJ1kBMSPkeAs5W98QVi8h5RGR6Jhv8NgDEpDspHcuUcrz9kaobnzxCRr",
  "key31": "4xgY7fhBFzaEmkCVHhZvvFvJ26ikV16FVSqTXgMcYTngVAqMFeWVpN1s4bzsYLRPysp7MSuijhu7hTdKeveEnNnC",
  "key32": "2Vtbs47Sp3Fe43qrUibs99ZHZkoTS5kMDGkeVPyfBfVKuBFXWD3iNYXXeFe4kZPA5tharUa3Suj9dEzFNhFhVRYf",
  "key33": "49JcZLEBnyDt4MHcp6aEdXd4ZXcYW1c7vbpQHRhNdHKbiVGjuRBeD3vDx3kPQfMByZarJ69qCQRuWb1gt9y1CanF",
  "key34": "5q3iSvfjznUvesNkNCaenE9f8Ter7F8H2GTJ2kiQ9zF1nuXL8khHY5bJiGXLb6wEVCLKW3ZD6nQLNoPe3RD7gNx9",
  "key35": "658LJsNFVgr3cErDL5mCoh5V33Eo4HbFdmNmSdUxyjzwfMfG9hBA1VguqoWufpFETf5Xn2o42v5YAMbBRzzft8Ec",
  "key36": "316CEJztkxAQnUmn3bzrcVaYUecQaBB6xVHD2qvFAXFXk3kXwGrE9gU9KqcMuFy9CFbDhgujZndS1nGsmBFM2Ys4",
  "key37": "B2jrhDr2AFWZidCrFUGxpwZUbN9p8ZXS269FBa5ZTYG83dnZnrcKbaERF4xxdfggb4nMEq4jekUPz5N34tcxMtb",
  "key38": "EVTqMu6ZixWDVMzHJhQyovoBtiFa16rR4ikePjUnyc9fzdAaSU6x4tSSsVWS1fwXwjBdCZVqLM3VHANSUS5EeCq",
  "key39": "2wGynLvShEKAHSjqiwLungZUComm2BK91AHCiHyisijCEbiMFk97nj5oBHKaDrKjZR57SKan7Qou294srBeR56Vk",
  "key40": "4UNF94TXkebQoPAQc5RiMg1m2Fg6S3aCs5UqqLiogPkj6deLSQQfXk247WKVh79AGx8QhxG8x8JXNiKTWrhZSw9G",
  "key41": "55jVbGLH5V4r7XqVc37Q2qoQqa7DFEN8qgKaMZHS51shE2g21t5XeEwvpRmu1QayXKTCZ3MGJzERWqkJzVMhRg4b",
  "key42": "3Der6tcbygEw9e5evArL9y3R8sN4ujeD67NfJhcoyjMADJkMvbkzbMvxMkBoujyxwGe4C4KqTQa59UWYAqXA2bo3",
  "key43": "2DJ5KcenVy7EBAXyQyKgUeKn6m1x5VC4QBaBC7rRzyXkHRxtVsJhYR2ZmrMYyLVD3Vzg5KqSgpJeTyAovySKAGFp",
  "key44": "3TEYX6apS8UgFAhsGoRs5Eq5qvxtMAd5ybhwi3A5yugQbRbxaEZ6MQZ4YtKnU7mG3pdRRvWie5DxiggN4oUQh8VM",
  "key45": "xbz6dXhh4m7E8neQkXnDaP6MWwAwwNyVNHvWJadu2JiUTtuVjVi64pr8ieax3DvYJepxXFGR1DBNbsRNrVN6WRW",
  "key46": "5ToxgMRrS36F2AS6VhwuwobLUP6fjHR6U4d8HYtRzDdnnChQ2MoGsTmr7WxFBdBxyFCc7rdQ8EpHmzbCXCbwW3kn",
  "key47": "2AobEh4mhPHojszzBPmLZisqXgACQmcbcoqUZawB5nrwe82EvTbYtkKnr1b9ic1BhesxarFReceKuuY9a1pL7jRC",
  "key48": "4BPoQqGc3WHZediFzfxMqJ4YeHaVYtYQbDmroZ1UPk8wAcHCaYgMmAJGxKseZGZ4hdDq84FTb3zDqTt6Wq2CmNTf"
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
