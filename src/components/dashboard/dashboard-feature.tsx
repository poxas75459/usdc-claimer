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
    "5enJgSErVLg45zLJuve7zXggKACW7pmaKWa8YcNnzBbZNK8v371oRBJUSaKm6n2BkWX2i8FFgWTBLHj7cv6m22p4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "259cbBjk43kzBNpy8PnZ1yYWfpxco1QgEMwvLvWCpCymeMfkuHDnHBwzzRLg8ZhNY1rmLLd3ki97pp8Rt4FJVm4r",
  "key1": "CUGEZGnNEVhPQmoWPGWa4yX7gABWMhoime9W4jySWueyaoEnybhVGoyAn9eZkJjTMbwUzctW2DWHgKSSoDtopJK",
  "key2": "5irawsBjTRgUKyeRFCLhEA5P5e8rqoSEsSRAd3mUndzDDUqc9eRJCRzCoz1rUEKxHU4FyWmHxV3ZkXMypoQGQzbQ",
  "key3": "53ojS9UXjw3jaTF1wANrbsbedJTMFzoGc6uzMqJcrb9vA1B9rZc1S2qU6sefQJ66SgNe548XcHvR5SAZrYMqQvNX",
  "key4": "binh9avpFSd6L3rXBEwXHBz8LBJBGfUsyvj663ibQFNGNwo3Nkbq4pr9oe9JAaio93dwRoKGw39KbKQQZViFGBm",
  "key5": "3vp7dEasq1JeT5CsysSu5bcLr4UdwyhpLtidoGYza1vsyiW5LGGfMErfeVVtDKGknQAFgo4AYyBAKK5tQfcJQezj",
  "key6": "27RzUXNJb2tNJTsdBFkxoVcVdBQk729pH4jPNWcjEsge7vbh6rQZzokumZFY1T3V5jj8jKsSNFSKZEVgUbr5esnP",
  "key7": "3jXCLsMUVfCfWnVoCLFsQo5eHn2ffuBJLmxCJvxVVQqc7f6doGntcFkBn1N6R6wbDZkyLzmjG1dvg144z2mq7xDw",
  "key8": "5ADXmK4GCfWWE5m7VhfkvtYCPjPmbwAusFHZMseTS7R46iUdYJuifKHuztHPc4waEXNCMNyTBXDnTJkbyyP1AuDr",
  "key9": "VCLNiYdwFW8y72MQe6UXLwredNJQRdmZUprhjtQDKdfdyiCmqeS6WHdNB31r8a2VYxMenLhX8QBLhn4Mf5JfFiF",
  "key10": "2dSpQ4fUefunYgzVF6oUMNgYA8xzsgNUGL3ajSx7SB2FcPHawepEZNQ66muBNC6YN5khJjVHnwLcqTn1P1FNiNNj",
  "key11": "515nPrxJXtJuAp5qTkPraxJDNA9PM7kwx47CwztXehGeuhA7iDwRJZE3NezBz6MP6viudLd1ahBjncWGWmTcmi1w",
  "key12": "3iKVzSFYQSMxGMVqkwQ5pEEHiDod5VAAiwgwFHwKRZtVDpNoXJje5SUPj7UfSgqao2CCDqnKnw8aCZu57uZ3NVxM",
  "key13": "3XMJ7UejrEA9PC93FafMeGatdtZnXwYCMRrUGrZW1fWtbRrt1YampcEu8EnPVa6MH6oFNVVyoqjNrMDRaEJe673w",
  "key14": "2BPYReLpGo8DwiFsb1V7H88rEtitUdq22Sj5Q13nvLNW2KAxereYEXJTFFYV617F8ksffZDhANLWVB5z27LeaTL2",
  "key15": "5d6qobTayZw6d8cRp8WvvfKNsCRjX6222zN7r9quNT6uJ4mFZJS3S1Skd2622Q1iJ5NBdZ3oJPyvbBCZ1xDK8ZpC",
  "key16": "5TRUGHduRWpVRtGM6bDRotLjGdtCn2YvCmX3u6Rc2SU2G7BqDCxMd4E6XYabGoWxmDc5eVEXzf7mwpSm7eN75xik",
  "key17": "4zLx85aKj455dznCB9PKvyQQ4Sr2iAwimcwgCef5tQmmMDfiHcUaJvKkarYK5T7x4xd7skU98W2LtiniG4b6VN7a",
  "key18": "oqHZiyZjbXUXuEfvb1gmKKei3bF8cMgxPhB4Nnay16CTbb2SPdb37MvL6DjRBYMnhvVaaBsYkpny1iNuD724k24",
  "key19": "5FHjqNPq8x4zUp8L9cFLt4nWoxg8akDVZmmWbWT7MBxEaCsi5h4J7zs8JsKRNNGapX3VLZW24sw7b34Ay1GytduR",
  "key20": "24PXUwnrB8UKoG2R7QrLgo9GPrrLJq5gdkoQHzMDayi77KQF2GL1ZzKDt1tw9JUZ9Q3sr2cMt8DykRNdk1hWyVW3",
  "key21": "2xpzQeXJfo1jSFSbguj6CgzHmQEnWxsUCAguNUhbXrFtgevQkXDyHLt5CC2vvhDHWQaXG7i8DNedmNV3L3Jd4eUe",
  "key22": "4yt5kjyUPfaFfpcokwsVe46omdmWdyS2w6vgspGs7YWUw48ESdHHBdQAvD5KnV3fbuQbTUkWQQ6kjMWF7h9hh472",
  "key23": "3YHHcagwxDyaPcoT1zMupF4mSypz2rCwzVDnPBbA5C1RiRE2YAKdQBMWvRnie1AheMjQf1KxteKMcUD28pPLosPL",
  "key24": "5FDnYcZGjK5KRMMoZL3Fc3xJ5PxM2LiBjmbze2ccKMYMi6CKG9d22T3AHVdtSx5pNmdrPSiydVqCUrG5u7iNupgz",
  "key25": "2qCY2DkNmB7TJckWKp4CBEZfNmDBMv836XNiLTHuJKhELK3qqrubuEisRrt58WjPxQ2EZutxHU8R38jUHotcSTJ",
  "key26": "3yUxzQDK95RRBibDWYVYhZfYkvZmzCWDxibddLooF17sFzVtwoDi2CJvJJ2WWjBWt5EA5eoCrV4xqLWyhQXJR9eG",
  "key27": "Hbiatt2F9ErwaiPBnmagLfKe5s64zXojCWSemtdVELt4dZ6jRyAhNE9PVK92GAAqTyaqDCNdiFidJ5bgHASNvai",
  "key28": "4AM7fSXuBsSat3RpwVcXaWg8XY9kUfGz8X1g4PirziMPBuCbyY3RJZfrQRJW7aJSCbjSEVbHNrVhRexn1xxMccju",
  "key29": "2onw6eBeSBwN9wW9ne8qjYPvacbCMnB72sqe155XRHiwuQTTcWjwUBUVWA8bpBQGe4qCWJmD2qjKRfWmVQuUzJbE",
  "key30": "NYds1FkxJtMKBStmrmhztAtzqwhB92U8PMJVVxWpkrBZ5AeN8DrxGxQRKydrSfnbmpg5EoctAhJ9mTn18mQV8V2",
  "key31": "4azupuXVdGGLsS3zVpSciv3kfuhnWY5rmbTe37c1hVRJe4WV1SueD9yzGWfssEtaB5t4p4FATtj2U7ccJD1659fg",
  "key32": "RVnfp4bjQAfcgx8MsYnWNm7Ac2x5QCQed7xKGXiLwtjzUau2bms9ut77KeekFc1N6e7PLqnbUR8MA27YiBEEfPo",
  "key33": "4X28fSprnpNJaMbJ2Fgc6w5e4NPGrfkQwxjaKtPRnPV52NKZKdY9gdwjJd2vGeVGNi7RuHPQTw2YEhNPtakGjexz",
  "key34": "4Yh6zpLQ415p81abqoA4QvsPNnLh4Y5TLfQiZ6kW5mttgJYm9zxG9kNxDEdVMrFyMkjay9NBfB3oApiZi38E7XsN",
  "key35": "2jJbfuGU4bLNNFimQnF74sTDruu6PEBqc2i9KG9Z4RcQwStPUvn1XKC3HGWcCTy7iNFmpmoqk2RyiUxG4tGrZsJb",
  "key36": "2fdYSk7NFk8cfWW5CAC466hrg85KeZtubwYsP2sg4zXnAfdiHj3NR642iDPTopjWZKNocXa3F9SeLsEfsRcnZ33m",
  "key37": "428f79owaPvxY4aPhN5iZgRE4hfzpv9x1QhEht9p33ziKxNR3puFQDtbqT2zNAzyqgvvBHfLeU89Es6dzqEpDCXv",
  "key38": "4FZJzMbhuk2Z4SrWmdaqury3hgPJcWy5eH8ZoGVjYfvmnGvwaqdu4RQkpR3MG9hLir89ex6s8gWKectx51Vonjuc",
  "key39": "2bwvyYdf2XsTADcCQFaEgerSDesoxt8wDA6zMHgrxCEAv9fJbvJThTAikBdp2EDRUTTjSdaf9SXcsZSgTQdVv1Vk"
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
