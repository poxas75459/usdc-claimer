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
    "27KM6EvLHuTWBQna3Gt5q6WKV3fBfRtTj8SYvuAYm7inEkjTf3cfPUwtT4mGob9B9rPL7qTpdFTRpGRmgPocrqjh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NY3EfhihsPZL3h1ZC6yMFLi7sjbrbrAPCSQEJ2sA2xBpq84eiNgMbqUmkyvH3vNG5QeUGCnGNWSh9GevxiH5ZWw",
  "key1": "4nKUfnGVrjGoPEpiS1eQ2PNx7XrvbMmdxYgMNp2ME2qv5J2QbnzyW99waxLrMBMob1XbAA4v9CjfdWAp3VmdokK8",
  "key2": "2fgmPBVAFiBnzsDq5pp2ac1d8j4jr4z6o5t8zExiFBpU4qWWstjTxqbPQAD9HkW4Xh2QnUCZP4zZqxXK36uEjdRd",
  "key3": "MkX2omynvu75Wxx7cCLDHXG9MWUKp7r71UcAGa7Z9kaDW8PSdjF95HWN7EZkXWRUhPTtqQsYGEMdqzWQcGE3qkN",
  "key4": "5tfaCHYh2EiwMLAWYFPpNPQRdkhQr7zzc4Jua2pXgDxuWNXCd6m9hLScTX7BJ2xHmopiE3umCvPtDW5o8WXTaiht",
  "key5": "3QHhuN9ZAaegbprn1fgZLweHtKSnYgjkrzgzuzkkyucdfxjhLNx91j1EzBsbXC9od2N1gWaEYdd3zcrRjAVaFE9M",
  "key6": "2zV4BDKC3CbxC2A9mKpCggNV9y36TSYWtkiMCPEYk7eg36jM1oxPC3v1BsZ1N7XcxherG3uRtMbyMU8eAnpLGDNr",
  "key7": "2mTshQJ6BNsyFr9nKr36AXR8uTCfD5fnkgiKwQytZs8SJdrv7VgLr2oJyMZ41GK5cybfQo4UdizDW81P98KvSzAD",
  "key8": "67pwX5L4pph1w73NKSvwgTk7uwmgb9T31RSer8adGeEWodQ8JsbBQdAys7ADuaNNpCrTMg4eezSXscKCrUgLtvvb",
  "key9": "3Eci6cq3gCBkLabcD7yezoGxkwNLYsD5Qkvha254T4wGR1EZPDVpEGqurmaL5V31j7VyLL8QRxfpyLQQwCHrZM7E",
  "key10": "5XKVYs1WB83szyeKkBt6hXkqttSzYZJmABLCjutzjD7r7cmFF8kuHirhBkT4FHEjuCzo3ZAtistrSCxgq6kDZxRL",
  "key11": "94oMt8L7ag37gf1NMinTf6u5QseXwYDzR44crHZVa86REjEghCiFh6Q5oGBBzDak3x2stnA5wP3usFbfmVnkUGZ",
  "key12": "5psCTrmKK69SNfBzTbRTGeK7go9eNWZv5suqfGbi9m9Ypy6r3TqhNfBng5L4nud8GckxcMqg5cNan4nNMaEpmMYx",
  "key13": "4a2J8x6H6qcvHL2bfhv67vtGfGtdev8h2Uf82CnuAzpndti96xLqSkZE3STVd9BLD8MydrdrzSCEZGxqQw5gdtfE",
  "key14": "289bu8Tamy1qFzdoLFhXQLKRnQh9HyUeW1cT9DvfRYKDEtS3bn5bh5C9Gg2jqRzvud7eUX1E2Jqwun3dDBk5kfke",
  "key15": "5zZRc1xHd9AJXHG3JdXYoQ3AbL3LswCL1g97WkT8MHvhCzx2nTkmsSZ7t4S9VMebn8apYpQxx12ihNxe4Ft7cr8P",
  "key16": "4MyE7fC8CYmcE1MDk4GvYjfYeUoq2i5Qd1vP8QRwx6ntCWkXbc4zcXfy2hsShmpDrNry6kjghDU16gouDuoCbNgJ",
  "key17": "5isr351vcjr6mNqbkWBXJxymqVaT5dr1D6bK8ToMwHtPFt5Y9U1BQrqChnygFhMgDRXsHLLS5n4dyx6YuMwnsg3P",
  "key18": "2V51RWc9noVjmP82yrp9rGsxhtFrEtaukjPDy7cVfj74sdmnUbSHx1Sms6MUMYdL4buEvcVHpbc5cbGNh5M9AxmS",
  "key19": "3XAtERye7RhFipTghoSGbXJnbWCUU4NNyyUVTMCysAf3vCKqUGwTtpeyP3JYhDMvj2iF4jaL2guKUG9b9ngFEZKb",
  "key20": "5HLW81UxuxyYjXgmiu1NCBvgn9nXa8ubUUTpc9bFeL6RNaG5KGD6b6Nw8NnPqYrmxswyD8D4R7idNwCrSABNkASL",
  "key21": "5t55bCDNm7xrQQ1ErrQEcUb3YoeTZzkWedmFMSQdgt6NPYWwdb1ZSCpTrEFXm3HfPJvx2nM8nmG6M4jVT9wBdB1E",
  "key22": "3Q5WoUnE1Y2MjRo9fbfFv8E3eYPgyqHLNnMgBKpEWLwXYZ93nUgwDPrfZafFygZwH8NsFTEAeFhirjPBD5xfvikK",
  "key23": "4gyhRhRE9vrPHTkEcLzJGgAEiTxNbKm1jg5pCFhRByvNPg1MhdPjRSnzN3AomYVKnSFckySn6unT9hfUXxhGcZQg",
  "key24": "3f9TKwvSw1bivnuBoiifB2LJ7ufC2evWTuPo7k6jbgDNhuwnaJTmP7NJSEEPM5d4kefFLkvsJ5PGKMvqqYBRZdv4",
  "key25": "33N4Z221WWTt4du5Z65qubPKov5Qf1X5kRTwrJsxGpNhFoaifihRgMA9QKM2whTDqPfdgMTW78XBPTewhuFm6qaX",
  "key26": "951yTJTrAP3ffSwzkzqUA6ormXkkUY9bKc45mniWLXuxvkQSRo27A8uogACyiXkAFz3GqmfsjPpXnM8C4diwsWq",
  "key27": "4SvdMCNXTUqsQQ986hrfGvvQyErKRjnYi38vYRFfMJQ8xFWA84z3wKrGGsfxKLU6fqm9JQEmBCDmVCmdADx98HFd",
  "key28": "32H7jDhbbZofHTADpvQcNXFMcGiPkMKFV2FFo9Ey7CS3WhqvZXVTrkajZzexjbA5CJFwMqTR1GA5WQiiArqB1hnN",
  "key29": "2HxqomgpCwYQqSKkGwvdPFyAaEPyyyYUYG1fZJBqWcNUtBkRZLZuY2m5bkBPcSiuWuw4Cuwf1pPPGNCXnRtD3pC",
  "key30": "4UBEc2exrcLhMDPov1u6rck74dqcepsQjN1SrZEPr7YYCGHHaZAdgVRz1qapk5BUykDXFgavejvFSq981DsgNvaH",
  "key31": "gPrNNBs4AYPWGY6zbpKis3vynp7wXUvG9A5zAyikM9D1mxrMLtyLMitNuSZ1gKtacucvnwMTQPaei5hmxYKRdB6",
  "key32": "2EpzjnE7TLXPBPBwEYZBkA1b2cXKCtWSqPzgNHk24KKeoA6c443JmDs8a71RALcAiefRVKda68TYVeLd1zyvEkmx",
  "key33": "3D6gYyoiTzYggpcEjCk3GHoFtqSU2iR8L8iLPN93ngjzo8kLoU3aRNgd1iAMSeWaHwyRXYza7h8GjoZcTgU6jWbb",
  "key34": "56y9btQTQ1FcJSCPTasKGgZZYTxAyu9fhBGbtiyNE64kn3L3L4wbWMLVqdrkwA7LL8KE6tS7VrboqEE7UExBhWtm",
  "key35": "5sNtn9eiBRjmvXcR93Yerfga1gducAc681MwKnY9wvrPQeJD5NT6aH9PLz3AfARPmQyUHGKYidun7CWR2cUQwvvn",
  "key36": "3SMLbX8cLMw4fJYEUz6r44RA4aQbccEr4wwQNHEYw3mN68stASPYuDYYPN5AEKppM7LvHuyad78Pbhdh3XkRqxCX",
  "key37": "P61ALP2e8KeyYnC2kSp7L3CJ4i4wV3N2eC6mfP2za8duDqjrorxDcefEUqLwqjBz26z97ZTGq3seeJ7pZbhc1M7",
  "key38": "5VWuF2R8DbR9EmgUBUKCbSE29tqobLJAn6RdCZmK5r3uPmGCM28VnM13Ux4kUDEhJHsW9gHxBP13cyAgvnnwi5kj",
  "key39": "4zqMz5T4WTziRJb8L7P6fs9JuYxYok1RPNbnt2j1XghREftM29SJxWHXY3sGaoxbF8bwhUjfEJtpDX4NcBUWe15n",
  "key40": "4thiUdVr3mQAYGS8WnkzanWqm1vLdN3WbwTGyuvxYNNQTUHsyrzTCUc3FAijBWaXduJ8pm1yzweuNij8RuaLs5vk",
  "key41": "sCGZg4Wv3TYXVQwrFZurKPdFHJKqt6A1CxpkfQbrBqHD98yW6vGRtcRpdXLVQyef6Lsgs4bh9e9iregPcPeYs2i",
  "key42": "4AoRRUoKAXbwNJTU7hfzuhjadTuSgHAWhuSar7929hwrqThFdQ7JWqunHGHNpY8Bzj6LQfxRpUYDjLheFPTbMAyw"
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
