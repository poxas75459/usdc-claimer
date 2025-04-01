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
    "44YWVHWZExbkeiv4LnZkUA2MsLmHJXXzCKDcLy7W5Yw3bnsqWde5iKCzrTXvMYmBtHZGUKcYnU8jb7W9e2N2vT4R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gQeqwhiXb5cVprVpbJehtSBzQzxx8j1LB6UnT96rfRqGbPVYXn8R66MwnjuC5XypVtLEWvLr7udiyhxZMvVznWg",
  "key1": "59Psgn9TTakERhSn8E6CJD8J9KFL58LHmTc8WK1ikGfFzbSXcQCDpc8gE6Uw4xUJ9bxD4sqVpsSgezohfqDdocAH",
  "key2": "3DE8cL2Da67sPw5qsWwAkuQWQ9yJvedUyii2ze6AhHsTS7MFD1bB5RQ97M1GeLqQDTQh5bGfXFE8LjpDFYm6t49c",
  "key3": "kUUhShLw1hM5APNFPLHzT3CQUoXqnQmEsMryiHKDtkWaYfx9bTcFQCHqMJJ8VEs78e5ARZ2N7oZZyAKuVTPBAs6",
  "key4": "yWuet9aem7ZWfQkJEooDdzuB656YphmyUT4uEo8XqiTxdBt8LuV3cXbDbcu91erGxArcA6V5ghTXfxgBCJhRaNV",
  "key5": "kcqr7pbo8dA9pLivWxPdr59z3L223pgzjRLmwQKVPKtzjUTnmaWyz34Gz5GuK6r5cPMuXrFZZomMnpDnTdqecWH",
  "key6": "g3UpEsHnHgjiWLbhviA6E2xqHq18hvRftUMFxu7EUnGrXxDPmknz55pHqvSF4PVputqtp5YHP8LJjwu9naBkEXg",
  "key7": "cM2p1Awe5EGXLHVycPCTjoCgagWWmBc4Pq5q63Ah6dhMWVh82qBgvx4DG5Cuk42adRgMwzR85MyDo3rRqcWBmj4",
  "key8": "5wA4EGeDfhDqabuCX7SNwA3vMx6vTDrjDW85c2chqw4XDjv4oU4gVQqmYWxXbNgR9JL8S8E56B9Gh8edWTG5AT3a",
  "key9": "4vt7PYnXPAsDwy2oBjFch2gmTxAtz3DU4T2yvWnumzSU7CF52CqYcUWB7cxav2JbZavyiQYzqRWQDXKvPr7yw4Vw",
  "key10": "3A76SNRsjHfJ3Z61fd29e3TfhKC5WresysNJ4KdpKSHUHRJsjrCXmr43iJYZSv4qghGuQbsB6KJES3RxJkaJ6YMy",
  "key11": "2ycZvFBt4vmBHBYevV6QUYijhYnhk6buLLQ7vR8ZQbcfC3BpY5tsbbsX6p9L4ZnFZgGeVxxmvnSLgYJ3id44i6tY",
  "key12": "5Q9QBL1Ts5SRgfFxdpH6dqKG14bPuHV3pqxNUUyLTUJPV3TRMoMSyJiSFsSkgnToUAuFRF6cSd4oscGXGZ4a1A55",
  "key13": "4abVcyQ5orCWFSGZZXrzxA1rsnaD6LUxH71YBE22LW3jWZKxjth4KwwADPQ1DBPEYpAYqB2xUvEykDnVW2uCS14H",
  "key14": "43wkEHqWUZdc1FvoF5F8MkQf8tr13caZcSTdrUFzp6ZFG4McUUJozg5pp9Rm9k8pJ2Fd5Ct3W8ZsM1eTgoQS8XoY",
  "key15": "2PYHqmEfi29xKihouQBAA3zj5rwQ8te3mj5Kq1n3uubBTG2T66WgWCmtWikJtz8vKrHUdLuyQ6pqaJjPc7bDdDrc",
  "key16": "3S9mUfzdwaovKtRzcWbPBSLcyuVKyLmLVdf53Yh1JYEec1DuhP9sJUgvwJaZWn14TQzPEJPF3fdhsALWThyi74H6",
  "key17": "DrouTNzspSdPHX8rvuRhjeXTT2v3BzxG3Lcx4JpS7yeKfKTHkvNcdN43BYeww7cbjsY4QV5TLFv8Tpatx262u2Q",
  "key18": "RvycLRYM6bjTHp9zoTC7Us4oYZyUZoTT5BbonDU92aaGoMrB1CwY5nxtXw2y955deZ7ok1MBw9H6FFKaNJyiD3Q",
  "key19": "3g2R2koRcjHAj2KTBRYCMa2BZ7wmvKFS36e4KBeY7HbqYay51M8Rb4nopZVE1SjypfuxKeE3qs3Qy9g4xKB7zPV1",
  "key20": "5RQSxrVm3QLUYRjXmTJA62Hm5WfUgTRogCj2t2zaHyHTxLpEV4BDBP6txq6bi3v2KRuRWd9MhTgzueLa4uZh2Bj2",
  "key21": "3neYqXtkweBqLPbAqsSHokXk3XXLHjGgHZj7GgTctyHTfCX19HLr5hUKAzqjCuzWhbNWm4r2sjFVS36Gd6cj3VaF",
  "key22": "2kUjarvuK9Wr5vH6L6rzgbgfG2pd3TXTn4gCQWq7zyJDCcXcSeMgHsFqWD4f3SLvjtmcJLh1sKZjQ8zk9S3WoiUz",
  "key23": "3gMDfZPjiwEivN4skPQNHgipmLVyd4wVevp1bGFAzeb6gyKcJWEo1Hgr4tEek6Yqr4Wba2kzpe1MqNaHTW161GWF",
  "key24": "f3jMArj2eStja4BMFdCJdwvgTqRERdWewxsCKqAJS7XAwapCFGiiSqPjJJhhHrmc7Swm8bEQbdALjnfS9ZnZHj5",
  "key25": "5dBDxm3hjNnD4TqeqJgGaKNWDHbgoMWnraNBV5zzP5GbcjBYjLHV5tdfqpHJff8nrfsEEjJ7P4uC34wr6Kifb4e2",
  "key26": "4LWX1b2b1PmdDorAJdu1zQ4EVBQQajDBjbrX1seQDDy4E5y6tyYnVgeZjMXKwuvXWyoBUkiJ6f2YYEgW76HTCL6x",
  "key27": "5aACzfWbNuMXNkBWs9k8Z9N6VZLmTj9J78nTEoAYy1g4bKv4Zc3fSqob3f2peoEoaMV7QNamwLKsYaim48bfi4fF",
  "key28": "2d5gBLTqTLwqccGekmon5hMiG6kVC2W7c7Cui7AZ6ByXnjYTjNhzhLHX72ferQzTyQkGQgUrQceF1UEgA3CAjCyF",
  "key29": "39x9wMfbWCyvsAHC7sE25khU7MEM9gtzemhHEt39LBrVmmsz1A6swaNN1CRXP6NySQFbNDBejBMKVEsSToNuYkZi",
  "key30": "WeK8mmiXkxoZ3iXpxUoywFSV7RumSbCT574MaPeKU7zJhiYoTtZ6nNE354Dqze6a8yyWxCu9VBzPc8dEyzmGWRA",
  "key31": "ZgFw6YxUunvK6rWwMFDw9U4H9XfvjZzVLshwdagkbDukfUri3LyjHvKkEhRGHAtxYUVCrWvCnYuTWaNKQoo9Z2A",
  "key32": "3XNeRJsEaH6pFwWiNaLeXDa1KNN3xuGz51xd4pk9A3YVEqcGPnrs7M6CvNKDYFiVh4XtnEppHwu38sz1Hz5oHRd7",
  "key33": "5hYgnsy5DEdAKSTd6sgEdpiGELazqUmFMvhsxSuCqvd1Q1WFefhXKsEaeYiV3xEf1GR6UBCBYWTZw4gVnbFVLujD",
  "key34": "598oz9rZrciPTnctKemNAE2Y78MfFDRyYBbaPaGE6uWaPpmqreEwLojCUnVzpxFtqR4FJwfDxWWaEV9TXGULZBiZ",
  "key35": "4GNjpTkzJmmk78BswmwNfamCGFKENt8nswKA8YfktmztY5EUNEKqdWBx8TCToMXbvbNATJNCTFZB2njkphvonzqk",
  "key36": "5hYMZeyL9VXYmEvNm1LMdkp79BQhNx5QBTRGfHwcK2ZdiEUZMEr2kLNEPjwnWsB41r1zgKVJccRMT7VkEj9wBKN4",
  "key37": "3u2TMooK9umWBH3zRBuUGigGDYZMRFCvqydpU5yNpTaHNrrKiRhZARFKgRj1LGTrW5s6SSq7Y2BbsAwBEi3n4Tcr",
  "key38": "2Ka93G3se24NvRxnJVVyuwdfdAZgDHeHSB9tMfP4ZHQXrEoAotnr6TrQ3hdBTeTNTNxFKVZuTLLghSMrYNrYKdZd",
  "key39": "5JiMaiWyjGZ7SPeqhKvTZox1WE9WYGoz2qTcYLZ7m7PhyBvwFmxU2CdTA1RP7g1dNBfXnpg7Yo99CyCD6c7NpDLo"
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
