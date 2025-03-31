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
    "3kqoS6F6Q1VPF257cQ4HtgipEaArMiRCexbdfQzTTBqAYSYo89E2VjQXWYK2JkE2UWLuQFz1sAoMxQHcra5sqCqM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NdBqBfa7iyoQVtgH5r1dkgmtYneBVeqdSbzvSSg9PDxxcx9F6UaXTYgv7LWmCuJHgPQ8niU2oUKnb42iiBA8Wgs",
  "key1": "h1PzkvaRtngGNsxKn4ZCsk2uLB7Thxetso4BU43ePHJ6mBjTUAEY2Em6JJqm39Zs4NrSHfn5XScLy1J1bjGBByY",
  "key2": "4CuQDYCSrKUU3UFCxEQQvZYHMYshSTenovZ11BZLew2GLVVou1n1uxTzSFNTAW4DVX1qK2ps8dbaZVfXqL69h4nM",
  "key3": "3391dKofS1Am7yjphJ4a9uRgKhjwCexfCE4k6zBEBcNpS2EZiE21w5nuKSYGTtsyxTjXoE4F1Z4C38gJza6US4M2",
  "key4": "2CV9ML9b5tJjVyDe7scSHmVcPUByGPCrrtKXYV1txMmFZwAgZStF6AhRH6DZGArEyTnUAXYnEgkmEHQGTnz23e2M",
  "key5": "YAnNNY5fRqNQuHVH6c2YjQzQguL6QXtkNDoqKu4xrokMRXrEiQSbLohsEsyXZ6QSSUfGswAA4qQdw78kBfQXhZk",
  "key6": "5x6EdpkuKxShg8V7Wv7CPXF9vFQxpRm3xjiHgkLfpVZuXnAtTVgDuE7HgxaJPe7d1BRD8X7VnL1tSn2jKZGcYVip",
  "key7": "3gDaRm5C8UZgzgvGma7bzCdhmRLE7BAsn3JpAEyxmQDLe7G1qafK4H7WNLFdagLxi1KDkXESuDQKrzhzkSWJzzLi",
  "key8": "2h3mZSWxQEEw1uYP355tg7fABtBHG7u4XSS8z7DTitQ8JXWyhhm4BKBMzRprSixbjiQfckinhTER4HcGqQoYKXQ9",
  "key9": "5nccPZCsfdRiHPeV42fbMaJeseX5gmevzs7UjP1eVU3W2AS9hecjF1eiW36qV7NPMKV1SDcTo5SCd1DKoyCrZiuw",
  "key10": "2qhfz2xZfLSzbGmRxCzEH4PppfDUQ6DskTMb9iooJF9HmD1LREhK612GTK76Ne6Kt3gXdJKyaieQJVyq37voDsuG",
  "key11": "3W3WmqH7mwTXXumv56CyFcLf3eamTZ2jkd78pFamShvvavW8w6cs4tHMNYDP7jLLeH5CBA3UWxDhe4gXokQmiQdA",
  "key12": "DxcHXm1k9J6DUwQ4A7cg2zHtcERtHvW2UBds4cPKpsCZ8uqfowVKLSKK9XpNcirzuD5KgE6mSyHCpPok82EzG1a",
  "key13": "3T32aRrUpBdVEqyGNTtZuDhLiuAWsrWyBGGQfA5FwwEiDASydZ8JSiWRh6TbKQy7UMNmXA2NbFySb7CADRVjpZbN",
  "key14": "4XTW9pEi8JGDD42A3rDo7HJWQXUM7s1P7qbn1bsiP2VHeBCkfZVC93EwU8teaomVE29JYp6zh67wNi8aQXkC5ULs",
  "key15": "3KHmMBAeidjqEjs2d4gLbrmLSVPF4Z9omc12JRu1d5nn69p8xuqLtTobnDTcQCWPjNh7TWSYZht9Q8GofWg8FfDR",
  "key16": "44TdaMd9DmUuoLsYxq36VFt11FKfuRfrNPZRoSgK8pgkt5XGjN4CYuTenSmUXdzWdQAcoLfZDy9SkaaGzvysQ9ca",
  "key17": "DHJxDAdvUexG6TkJDogk8HZhDKaHyemJsZtYgBPgPyLPhL7nUcQ4f7w3nikgh6zTXPi1S1TXxpNzxADGPnRN117",
  "key18": "GyGr1Ba2GQcdc6AaJuuM8K7DjK6gMME53hPFSSYjeYp7WhMArYVKm2iQNkZtbEMdK6SuUxRjs3KFAgBtLmtdLxQ",
  "key19": "4yBA8L3aHCmzw8zqnr4DCa7nuk8Uag8PPAYegoBd8NrAWyecJWfUVqVwDQqUtJhttiWUenvDCJHA7pLAyN7XAA2s",
  "key20": "5CcamDovUiAovuvndT7wbii3sQ3utwaFKChVnrQPFeAzWkNn2j5v9pi7ZhqBiN9KULbFDrSYu2rWbCNmndhG1vAV",
  "key21": "3GYG4NhSeofM2mbaH6ZtyHHbudesHYxme7MaReN5YNJkJgz55217x1qXo7WKYDsUmhfroEEcun3potdTrF6EVGFv",
  "key22": "38TGwBZjxwpa18fhPYLXYMAdjjWNKha3y3WE8c5SajRyzUZev91gAiwzW3fkKcRJVfUFt1UfAmgDyNyuhjmFj4h5",
  "key23": "44z2R6WNpaj6zpH2WZiGjSCpBW5B2rLJqN6Q7hjNWPBdNaYPSDMHo8yXieG6ALQawnezvkKVSds6LtjLxMv6Kjn3",
  "key24": "HLZwWLLdNJBsEydGfVG68qisHNNRkF2tRL8LQW6as1sKTkmdgyTw7qwzAHFWSVVyBFPLjiGjjLaihW3SMwn8Fbw",
  "key25": "eVMyvTn41opt6pBiUSPa6qGZ8mJUduvqBHZRk8PxE95tYLUQcX6KCfymmUEyMKCTorSEwttU79JgFBu5k9HQsNm",
  "key26": "64xQHB16UK6629qdPEwx5BcEmnjKuXsdYaDTSx3DroiS195ggADh1zmYGeT7rsfNuYU2x6REtKNk9QvpJFpbgD3D",
  "key27": "2nMuYKhrJUW6PsVjEgYzmWchG6HReGbFyCVVqzj7EwEGtAqQfScHYEi95Xb2jgMeuVLF3x2Sa5V41zDKkLc1rPAa",
  "key28": "4eu98qgUEBmbAmgC5GRBL4gVkaLtsadh8NkHE8p5QN81r8oMpcxXFs8hdTf35RG27sEYPUgc8Gw8hSAw1AwJhmDk",
  "key29": "2dBssQe9qC4VbjrtBsETrnpsx2aPavy9jLUpwiDE2YaYiyXvLX9ZJwGE7R2KiofqB3x3onEFBAqStDhQuvPRQbLs",
  "key30": "RHWDS2zfUrJKFYws741FdtTHLR8Gsrq3GDwU3DNg2HVrucBj7v4sLzeuq5oq9qbuuDvrXrVzVAejYCWoTiKut5Y"
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
