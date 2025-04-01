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
    "5GacXC44LT4QxbeKNqxfunWBF9sW6iaoXzkjnqfXzT2f1qzZ3QKzVj56uEwG7afPZ9YjNfKn9MoKsuAZtm3xPyeB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nyKCwbgivjivQ9vXgBZvdvyJXpLeLMwLYCNquH3pPLsoGBtVZdzYCQGti5NzuwGHHhp28H7JvW3qskqhvuPYrLs",
  "key1": "5MpTYj7JrhpUwVCNCPv7izoLoNM7FtzNSie5KeomzfDFVFEpYCedxCsUBAHM2sbXToWTYNx136xq6bRcJr9UFLw3",
  "key2": "2yG6dcPePQT17KPBdDcYo6vD44WjcTAtGRBMDp7Cf6JksFaXTv28GMJ46DZJgJ5vfPVCQy4rRdSG7FkYFHJaDgt2",
  "key3": "21sAugxDet3vCqsjP9zJmieYomHpYmKZpxAStHLj5RGFaCcTpnBcQwhSX6X7MPPrSjgXqYyZK3beQVRGPH7Arj9B",
  "key4": "4bifUZdy25Yi3D29j4zXUP9dHFGpUg2C9kUMYSQtfNr4RN7K8TJdjHXUx7F4Xu7d1mneiLhP2jco6FuzyDKGSBxD",
  "key5": "sNgrFSLkDLF9AGMYvRuiJaHo3AAibDyhgSYA6UTcJFzCwXd4XRm1qXQfPnXrS48w5HVgTxCZLwyGYbdxrGUJsfQ",
  "key6": "tZPWTQ5jviwhdoViEMzDRNsLDeBLyr4RGqdySNBVt8KqGyfjUPZNZ5nSti7d68WsfBzJXC769BetgvCRpMGGiUm",
  "key7": "PUHEP5pxrLyR2EKLCo9jZw5ZGUB7J4fcWm5ci1fi4iGfTpxNizAGUZxcYvGjXdDttR8RVbhxjtotvszx3uqcRKA",
  "key8": "5SbF5FavjQhyksc1kfywqDBvyrrk9eruk8nbqH8QbFPsLobFwotb4r6mUMxwkkKCgKhmuqbUuedw9345SqCp3xZZ",
  "key9": "Wnwox9EuqAAxVGwMFhKafkcBRX1suMgtR94CC2oBFkyomwFUB3KBKE3J86ejDo4Q1mCJFxw2SkFLA3kp6QCKgKZ",
  "key10": "5hbN9Werq16JBTLgjrnhqeuBhRJU8zY1ceR2MqMNLPA2Mj3X3vNiNex3wMX65saLrXhRuYGSD7eKR1VdvXRBe7Qd",
  "key11": "3HCZahWoc4ob2ukU1Z9xzbAb8UrzEU7pNZMM9yJkRnLwQHi3PjYvrjFh3BUX15joN1TCvjBnJEPuXEmWBFDsLmr3",
  "key12": "3ztZ9Fzu1PG1CgFAdu7ArzfCkkxvwcjovLBDrgZ7kLp1ymLsDoc2XcsvRu7qviexjx1qudVYuFKNhvRUGgAfEN2e",
  "key13": "2apw4Hd5B9BwjCDwXVwcmWKbGC1GVkEemXptZ7Vy835t7aRgRMEXqgpffi95B9wYYkGH8Gv5CVw3GdMyzseGqpTU",
  "key14": "218swiUynSZ6dMkuLF9eFHPzSE9G8VYAGTRLEFhu7GmpYfnCy2tEdjUHsj6uxySYczHfJqXQE4stjPZAd5u2YHSH",
  "key15": "qVuq5dHDF2MV6woaYJMpQnHfYLGP8AWvD7Wws5XtfQWzwGdPhm31QeoSMLQXHoNsqyav3N5FFPtAJoyyKxkpA3P",
  "key16": "5f6y7Ht5EagmnkzUnKBkrezGUM1qLftYpfaNrBzvUHr51D87gJfUo6t45TSukr8rB1Esbc6LvyHrQSmfo98LoEjn",
  "key17": "5Skg4hmm5X46hD2KWXxzpKnt3SwdqPZGzkVcPBwXWkxtbxdYqN5vLhphj9k1Vau6KxB6MnttMj7nPUNyn9wd8T9",
  "key18": "4aYk7hTz4m7tQ6vXv25DYyvnCiAYNqu5mbgH8DCP99oAJMBKWCZCWiYiVQxEAocpxhtxPzD2pfjmK2SQGnqe6Pp6",
  "key19": "TanKWScCWm7of3BFmb1juhb3P3MGFovywrSKCqyYr6tirWwudKbWS4wMip3NPEDKpPRBvoo96fAsR62HnpiDdi9",
  "key20": "2txfN7tn93rrFtfQzkx29Xb9v1rytwcspUBsiQx4AEmHT9kRi1GmENTvTiMtW3Xzqp3opwYC67F14RLqc6B5NsGz",
  "key21": "3ZqbPqMvMpBK2CunX1eNvMqruR4zGMmTte83FVDVuxigGwhstxgPmANF4YUi8WS7Q4S1LGYf4PXeymxg7rssJG8p",
  "key22": "22sxpJtLCjFzd2FTSoPmXjkaUJX8ksJuKwuFHeeJRHkSoSTk2AWvnkGueKJkWfAy5n1fiiyYUtGVE4voFL5vqYfW",
  "key23": "aRaGzCXNZvXY9KRLYVu1t9KEAo64a2ggTsua1Zc1ucwT2US63nEqN71Ge83dk94vaCAJQotbZ5UBy9gMFsqnWNh",
  "key24": "5he9r4rhENJMBYpVydqMM8YABK87MQ9bYRt2ikaLaQWMQDWyCvciznKvSudeq8WtJUPd8NKVSVpizGTMd9WJjqFN"
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
