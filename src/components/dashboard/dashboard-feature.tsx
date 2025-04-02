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
    "5PFSw2baUda7zoCaWiibc8dNfuZ7f82wizPrR9S27qkVBPvZ9cieQyiRhPfQCbS7EuCRDj2w3fWJAUWhtBpboNqC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K38A9XvWzLYFW2cau8tq4yX1df3ZSwHh7SHs4NMBDcZaBTa5S1XvLEweR1aeEommEqd1i79dSwTGtBbRT71wjZN",
  "key1": "TCEZoGWRC9r95LUbYxsC4skHeqVsrMtUwF9U7fEbmP5kAHqtjUS3PsTMTgpZAWbN5iX3k8accMNkTGZ7P6jRq6V",
  "key2": "3YRHsytM8p8YFbMNanrVfsrcmETS6s1DRv5m7j3zYg6AruT521f9vW3J3A9XFZ88CN3nWX3eCqdHYf68iUDjEudR",
  "key3": "3Lhtt85jLGk1LS66NxE2U8hyGMNfbkevUHAQesenr4cuf9BozQH4yBaT3RTjkqbUUWD5oDPdsiqZR3Z2UAhWv2c1",
  "key4": "2UgnZofPaxSWc7kjzm1EbeC7QiHN2y5YMjTsfxGirMJmQ3mYMKYvPJjUgYJrvEVokFqgSbfdCUprcQznwSgUK9Ti",
  "key5": "4bgx75VWx16kEfxHTmq6CEHqUQnYCFEGxrGtht6uUJv4SMHD4LtjtpGpPi82YF2hroLnoFYvXiKBxrSHxzsK8dw5",
  "key6": "SZubx3xrzAJEihVdbT56NLJXpkF9YQRzt8Ce1m5Ke6cPrNstaNRGMuf7JsesFtEPknLWCY1WduiXNtE77EQxuKB",
  "key7": "H3NYDdpxe1pBx4smdmGyq3T6yA5ao1A61gpnXPTpEtRyYZXkjVzh2diL71u88DPuaf8RnZa2EYRDBngKez4BjNB",
  "key8": "CvAbZq8KfWku6B1MUz2jGoZ4sN55NUdt4u7LbrdMJ5aNRkbyvBeq5DvsTEWh2wdtwAS5VtGrx24auHEnbkb95qV",
  "key9": "83EscgAUGBEY2FtAb42Ho3fDhEazcZE4J5XjgBhdJoYg6Nx3GJ43hCZmuiP8zKBi8UgGi9Ar3ZSbjJMGnzLtc7z",
  "key10": "2fREistweEvMZuv6UDPHe6FxhgaWqBUJRomtcEfJacqFei5JKQQy6Ld93izKBLMfu2188YL2cT6c1J7DybDrRXdh",
  "key11": "2Nkp6eHCK2HjF6LqjtCCNDFLKWXw7JouDfPfUP112jY1VWbBxo6nnmFYNcEXjwCp66PETbgrvtwJbSVZoT9q14rF",
  "key12": "2LZHnr6zNtzvSndDA6BUKL9T2RM4mzSCnTSrW5ADc6xh6CDoGj3EjjdozZ3nWRieRiWi46HY2eYxkaLZ3fSUqZ4N",
  "key13": "Qty86SxrvyMxi541YFchctUSYu2RDDuwuh48CZYTnHNR54pUmzGKm4YT7Qi1Sr8bodQjbsKuwgbmxYW2ekeupa7",
  "key14": "2XqKntgxfDpe8bLEViejDx41zHnfe67jCc3pWrGX1RiAYtn3vJDLqBva7jQXdfdjj7rM3ahqZqx7UTKmRkaVw25Y",
  "key15": "2xEdosgnUCjkwfsdatapHu6AvbNdvzBgmRzsxGk7bHXS9e3fzG7QwnKBsHAy4A2Y4ahg1XBeyHSQBXxML7GfFKxZ",
  "key16": "2V9fUVav2vvu9pHAGacrbw2TU3hfirCszMS9CW3g4mxhxtCsvLRzwDRg1TYd2dv4L43eEQwgFDYBKPrXrpJ8pGFq",
  "key17": "3XB3wZyuaXWTNSjQqNwoH5KxSVthZeYQYkrUbx2JGBP5aX9YXNVSTNQTWH5fbret6pMKicyMSzWMotCBD187xRT8",
  "key18": "5MCC5mDS2dTv4UDeJE2Ctc2AXyFA3J9CL9Ck9Ng1QFX7Ck68bd5veNQRFbhh6b2eu9VQqKNoJmzmAemHppgvqSRu",
  "key19": "mhD1DvWJWrnhefA9LMUEQR253BPQNnkPteRZQ8REV3g43TFfuhMqBXCzjaaTdaPjSQ3162fRJ88c95NWHHDQDaF",
  "key20": "63rPq9hSYPkXqnTjR3PshWvWtHsWn6zZxbz4ba9anQHGGf45oQAPn6iRoe5gzSWKzob4tfjpZuaNcE7KJ69s14bv",
  "key21": "oS85Jisd4kNokjd1AVEG3VKvYmVpJti1HHEiu8HdyeLLBJTZ8LHMFhD6amNVNw4AmC5hJXFmpZSKo3fqgbqtY7M",
  "key22": "Wmard5mXYv42E8KjLxuuJ4Wh63pUtYbNPpdtzDMhTySXj6vK84ej9YxNXH2u7XfJFMbsBo2Yos6nZ7395EixPyo",
  "key23": "293qDF8e7XC4kRmzr1bfM9BWTDM2222ZKHBdsjuee8i88eRax6dx2KHwNBwSNZH8YCNnTCz9GLgzZNrqxyu5CgzQ",
  "key24": "4mygWi7C7rRdzmZfnzm2DnQtyUHEogJEP5HL6F76bNdL6wecxM6XhSX6UFwDFUYPagSTvVpY8s4v6hFbgjTtG7kJ",
  "key25": "2cFi2GdKq7G4zzuXyzmpcmkTQRXfBtXY4AaLHtwFYX9GqeKmKwzdq9TBB44VueSyB15UPCAMAn1y1MMbjVQ4bPtR",
  "key26": "2RM1pAAkWjQVs57kaUn6W9qcFntefigX9J6kVUiQ3XCKeFvac3kiQaaMSfahzWghTLeY7ao4K1vRck5FsARaNBex",
  "key27": "6v6QvVZkKXwHAhdhqa4wVZFX4sqdtGcgdxpzi26JpigpA3qFji8CvYHPbwFeuGGgXvBD2oLZEW2mo78AuLv843j",
  "key28": "4VSJe9f6ijxVr7AQ3MKpUZbGtF36Vs4wDkjQomwcwG2BNtgLQGAVjtbteTTmgAHemoCJ1MWEAvZ65yWURZLoTqY4",
  "key29": "4ui64SbiFzBvTFFuXEtjbiJF2A4WBkP16NsDW3bxMvhomRQkxPUiRsqPSY6CPQb3BPUFmSi5ffdmGvzEoF9tfhHo",
  "key30": "4R2527orrrRKUgrDZSNPZiAaVbS6USXFMhC2wFUzZCLBRfVGNwQaVjiJvGDrC6nVMzdXmgUXghmW5PPitBVRKHSt",
  "key31": "2c7wBCkC5SxUEQpSUNziicjfaoYN9Vt9dRutvCNXApphGw3JuG18aZbwP8VE6Cd6gSMKYfMDLG8j85HyYXKRR4G",
  "key32": "5WNACY51KrMbuMn4ZAJgsHZ9PS5G4TqwsW6gX9p27XXjEKFMD53pLYNZeBAvpgHeVr4EueWSJW6e76vw1HGtzNV7",
  "key33": "4hWw4uaJ2Xn1VsGzgJfCg64hVMor2ZPQGDqJiLpSU7HusJRwXHWDiBwycvHSz2hHvgXkeM7YyyATkpefb4oXuDQB",
  "key34": "3bobdiSAnAuWcTQDdJpmHpNz6jxfKg6KihJ4Tqk9RACp45UhU84SXeu2Y9VLqj4X3v4k6ZMQoMYp8RYDEPmLa4az",
  "key35": "417jG8QB5hUAehFA4xjTYg3MszZh2H2nKJG8VDtaj24qQt898NCZdhVBmJQHEkdEHVKcY8ud4nUJHCVGRC81Zg7v",
  "key36": "3mGiiqhsh5TZCGXR2jAWJLaTf6bEgHouh1noePL3m6qim3ggsxiz3AMwGrV1UDMPcFR3p6689Z8MBG2otRcbeYS5",
  "key37": "LzyhSFwRoyH6wM3xufQHpv3xqZAVYiWPMmJEHik37PsWQkAqpDd3bikCgkgzqnByVYmsaGq2oyozxR25JGWAuUm",
  "key38": "3LRWGCM8nLhCLcjercjpMr2ofPuRqDToT2wMvUvnsUR6Z7zCDcXZPXHQ3ggP1qZqmQ7XDLofpfJgxD9fcPvF2pmw",
  "key39": "ZqkhpveuEqXTyNMGR62AdU2sLncDJ1GVedBy2iUK75n2M7JMLNaUAc9mjejfcJbQ9gq19gDPbo1kzJ2oBCojtrM",
  "key40": "3xZRc6XmShyTFNoeP1nnpC7yDNix3Bj477o5imXtvaBtjWtbfrgAgmukYLG6WB6ehJ7ZbMAkUxAPz6pwCAUzg6SM"
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
