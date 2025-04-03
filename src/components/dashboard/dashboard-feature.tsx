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
    "42J3wQH4e8A4DhwCWkJFXfmH5sZgzW2dyg7ULdwGgCrErKPih4UMWPziub6V7hrbUcPhpHMSWwiLAfH5kign3hEk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zZRDNfMEKyCcyzzRj4Wb1MFzo9p85qeE8SJj6qxXojWQz1JALLUihiRBZeUdKWpqunJhNCexeTooBCNGpD4ATE",
  "key1": "3bFCsZzrbfj6Ti787HWjh3Ko7VpfusKZSqtDqCsA7PYJiAyWSUhvns6ccNBtMKFsQrPsMiuSmzt8zeKWfLmjPPit",
  "key2": "5uP5nB8ZZFBsddabsbVzMM39a2QLfCVb1ZDH87kuDxFmBG5wZSpCjynk6Qq2BEKyiajcAQXGvE1nnqgKsPGTMwZh",
  "key3": "4PqHmk221BNGgWbBeT3z13boxYCMoQt75acdXF3UD5d4KczRoXgdyaHuNgo8aKmQhPetPRuwE6kYQCGLkP8jL3Dp",
  "key4": "wgvfQoGTrw2q9bCANxyVfUJmGg8pfbkndPjUY6fVuJcdMxFBqkiwzYPcH2tM7sKYhJvCqopyu3qmRFETV1FH49y",
  "key5": "5Btq6RfZwu7yKtQwc4iUXmwyFMJ1QTxfDN1BJq7pKNb4SdgqgfkQgr3Lsf3icpARyhxvW1kYX9LNdbGJkD2dkdn4",
  "key6": "ArwVPDuxbceVivAFyNGmAqSb7vQ6xhSrE5A2XeUkyaJqbVrvs2B9bkLFzCHicmuHJmZCJA9VmuqvH6tUcKfF1W7",
  "key7": "48jb4N5RYxceEJTAM9sAPoh58848TBw5HS9sWuf7SovAgkLjqzijuxb1x2nTGzDV9GCdiF6KCB1vUYMws6wBXGvR",
  "key8": "qpnzaJs8P4pRybqvimis1B2dsmxB6kaPq2ojfVZ2WQ4UCD2CaXDVyA2jhCRWMxm9FkbSsXCdrsjVzJC9iiqvC5N",
  "key9": "272939AFeDVyGJsd17q8j1chyeWrrXqfxuM65n812TuPTjEFYR1WE4vTTyn38E9hWwaUqUw9V1LpEQnp6mXWZhQL",
  "key10": "47mNbY6UcJjDfJQMMCP94fARsVtQ9arQsmsJaWxqJ4b6PAN3yPZseYchJuCiFBGh6VYsRFnrdxMXGwMskjo2CBKD",
  "key11": "5Dg1C74aGYAGHvfBGz4EtaQXaZuhMBCUz4PteuttoAoBhyAmWwi3ucXWTpBwYPUx61r2EXYurKSnNCBLhq2sX3oi",
  "key12": "611BsEGM8dAPHo3LHbvxvcTe33o9FABZ7ew8UVL6HFfePK6TZ8tLuBSWNbLt4a8jWbpbPrvCfhmhGFev8U178XKD",
  "key13": "5GLB46ZKBiDef2NLndu9F2jmCGL5dmz4TyUh391yAQ6guEQUwJSEixgyxLUu7ByNetcA46JBGnfXefyjyBwgdgCZ",
  "key14": "nMAZU7U4Y7Ae4RjBUM4X6ud4yRxPFJVBr8bxY4b4UwpLqyLGrLdS7bG51pAvPLwpWTxhXRT2AFzzeEEvtV5KHxU",
  "key15": "2DANyQfKfgfceq9tK29xqu1tewxAmoe8AyVbZiLhQHW7ExE3A89xGKsHCLyLk7rV35iqaa62un5xiicM8RUg68UG",
  "key16": "42G544QrKVAkFnSrec63FqDveBNuvi77Ke2PgiKuYYkDPrtiEU9nXJ3S1H8J9kTsxPbWvR6dAYuKsXj26K3szJwR",
  "key17": "5HyeZ6MD1vdhPcLtvfgmn1b8tXHdoCXCruEhk9jHMf1gnWnxKAaoydcWwnz79vys75aTz7DHyR5srjehgreeLFP8",
  "key18": "WBwSMTZVSh7YhaSWFUugfVBqLagYJkrFomSjXnQbJUHVubUAwSHw8aD7bGPmZZEHBc18SMAMpULgSS3TckbwHPC",
  "key19": "3pK1QwKZgB6b7jyvkv89iZn2AJJdqejP968HvzAfhFZqhgRSsZ2qTZLL7BPEynZGUjKWZCsbogfK5ZD1iXArNgSv",
  "key20": "FNRcwiqToHiZ5zZCRFHwnqYGeAKDF42hveRZTWNZeWzyMX1UAQ2mAEEQEAdPxUjFN1G1T8VRHedoVbV7X4cDfho",
  "key21": "2BipMEekoG4etY1pL4NTGg6i5ZbhMLLVy1H3EWrSWGz6d876E1vn9ZpdxX6MQEx38TmY5oehCMQ2jw4ZPg9XjVbU",
  "key22": "2Nn6btwtinfucogjPmgvVGV1pfAU4QFU13W2utzrikCTVcFMWLdEmteZrpqsztkSGvsi8BTxnbn5Hg7ZiZM68txa",
  "key23": "4FF85xpRe7uNCZ4YLHN5EaFCR199XDkdRqqN87Yv2f4sDnujBykxioRAj6mrjKKCrqVN1RxtNRcVin1XAki4MLxt",
  "key24": "8hCGXdebwHxW3vCxQ3dJKC1QtczcUvK4u5SFBv9rwc9Hw5H4ov2iesdG9UkhPsXFHezP3fHwLofQ5LfpqygC1xK",
  "key25": "58Lna18VzqnKDGT8m8mVHDpPUj6ADHgJm8vUSJXkjdzrtmPjFyCutJz9Pc6LtSxDYzBj7wHXhaWbB2hKRi1WYtAo",
  "key26": "2NLrPU9hChS3VRdHpwkgHuj2PGqwaBBhkTGFXss1Fh92jNrwSR3EXE8rSFTL6w3i2xBjghKTcVDMEskYN4GqpFRh",
  "key27": "2sL9UXE8VLcVpZVQjpHXGsrgYsFp7XmdTgykX8Gki68vuPsvb5TCoyvKCvf7t6YrAfBFJdcpZDYbgUXDrv4sqKd6",
  "key28": "5AavvBtvq1p8UNuqGFxCcptUMr9B8zWLQLJ98Z8cwAUdDDovC6EuzAwVYfAVF9Zf4nyqG8tWGw1mepGQUMazXRkc",
  "key29": "3JBXTfRDrkR5CkXsdvf1TBSG5QSeohVFxe5cVy1aMRUysMGQAP4gxLrjHbedY698RYxiMnBcHWH9M2XpiSnzEyhH",
  "key30": "4LcgWANYvRZy5gUWQMe8pMtvzqN3aCPp2qVLggEU3sv8PwRhDGDfBx3oZSS9MF8J5tC83DqoX43LnkuTCiimX7HU",
  "key31": "4cMFs6YhmEJMLxi3XUvwmvWFdpBSH4BPYWexDbYMj31og4yveZf999ZrWRFSERRBCJqY2BjkgH7jQVsmndxCU8nQ",
  "key32": "2oMcwgH7BUarKDci3XmfDtY2HfnVyE64UpyyeU9RmYUvaf6jUV5HzxNAp2iJNh1Kfq6ds7n2q94PC9hdanmaB8ZF",
  "key33": "24aAH7S5UGcqk1kTzSqm3ssWFa7rQvUTgmDkC1tYQogPeAWhXhzkFVCyKGdphT24mtHxfaRPu1TgB9n1jedETVWU",
  "key34": "oKBtF8gzrtPUtH2aW9JFnQ28Me99VDZjQaai3XJ3PcbMut9GGMQfHTggnb1utNgUezAJhwjeLoV7AHr31KERtiT",
  "key35": "2D9JwKKwgWTELWkAPQW8ikojMf73V2FAirBn8HSBQUj2bAn4M1w3zBU3Cc7XAXMqaiVF61ceAZ6gEqzmBnfA3SjQ"
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
