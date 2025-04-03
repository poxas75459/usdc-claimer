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
    "5imtU4sr5intZtjWwhB6M2Fyt4xFb6CZfM1Hu1iZQEozeCFp2VcnrxNXbDmjxUxHvFQXFk6BnE2UjAW84hVSCfF5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43rjHFPVJ1a5Bvod9w42Q4epFLRWM1kNTRciKP3N3Aw1eykP1SFmF6yRq4SPo7Yi2hvHV4LPF6ivi5igqTLkovrF",
  "key1": "59zCGF6BpyyZBv7rH6NxwiCu8qfnXThW7tptAJYq1BwgoRrJqokg2RYskmnkLUgStUGRABMtxYEbq4eHaA3mD9Nx",
  "key2": "5Lrrbkj3ok4w94aGDKEj2TTjHj2xnkJHRy1pinUu4yvN7ALUqW3de6wnCaukRBLpBgdLwexL1K9ToNFtW71dwxYP",
  "key3": "Tkjp99xX9p8d9NiRJQpmRo3o6N5up3HtPq1aUMPJX879GvJyocwbDztXBKPTmndfgJmZfEXprEgMDiBtd4iBNJ8",
  "key4": "KQrLUT4RpjeLw6mPsjRhKWpphQQVFyZUGEXwRVsSFEc1CCJxpto5mmzy6o6MoJNfsc1ecbXa78Wo3AReFsuPqQQ",
  "key5": "4qFxd9oFaFPKVLEH2LsKggRyqq3FZjY2vFrqtRoyaabiiyNAF2ZEYx69XS2d18LdPFiDrMiWzjpTV1peViNyocAw",
  "key6": "3pptmrWDdvXDeCWdB7LwTEeQ3Fx9BcvfmKXhPP2gA3yWGBiXWWgXwmtP1DUAjNmxVmbEiiFGK7Avupoc9ZDEns1o",
  "key7": "5LzZh5HG3YsPH1b1XtGRDtaaUYFxyoaGzmFhEb1wBwNpXB3GRrbCv6i8Aj4vMJNYcLooxiV3ReEhNh8uCjBTvfj4",
  "key8": "4U7yU3s71gw6dnkq6eBJ29PvJfSQRS3QQEVzt7HS1QUC8jtkV6ukECKjVMjZg1CdKQVN7CJcAPvaiNSp7pv8Qc5D",
  "key9": "4hHJ3mRuWtZ2y5YFPcDAHRrE6aAswrV3kXKQ3aSHN8daSB2Skmmr1xBU3XCMdy2wyZ46FHTPnuuAbW8GbEo1QhkW",
  "key10": "FLacX4qWitkZZkbGB67AAHgLEGzZekAVu3Yazuw7RU7fqqUKUhW239EX2CawPdEWYWmqNfD94hxqJQq6Az5en3n",
  "key11": "2wqj2vman1y5GBELdSFSG6NxP34SsNPow3unue8WbMDfSdUJuuGxMvayMKhyQfHTVP1fRTRgmJZDe9T9nTqgRedP",
  "key12": "3A9mPzSU2hcmN3HfGtLLmfwLBQZGqaL5PHY1YGA8c4rBN884mipeKmDQvjqWThsWEKD5Urn983jHrchXwtG8hxRq",
  "key13": "5SVmj6TxPjtk3y2h6RurDMYZTUNSiE3fY5Dcoqwk6YHfMJPbWupYD8ZsJY5s41u4mUFnkJZPfc6XYf1AkSw1v9tS",
  "key14": "59txkEJQav5PXy9wEurFNjfPK5mVmxszeEJ2knvfMm6YyivV9Can3CKKxe9cy6jrzSVVskkHA4SDSHwrTcFNCTzv",
  "key15": "27ZRKcDBdEPdHreBCWNjNqze4cmbz1WLXAZ8wNiHSPU5U9hJcRdbmWM6bJix9pb8WLYc7AVviGJhdiBrKQKJqKDV",
  "key16": "3F66Q2YaRT5mUMTdM1aDP46LYpLmgDjepuxGR1jkTbK6KWqBQcJNKPzwjQRjqYA6jJZkMwnx6YaP7zK3XJ2EsXRZ",
  "key17": "4b88xX2uFn5n2yAGVU6psqXYbwDKjDupbLbdNvT5j6y1EDm6Dkx53183EvCY31LoS3PMVB7oUMcuTWzqtkkUBqzs",
  "key18": "2RYghQkkv7gMVTY6pPvGfhND6PHhFL48qaX8jKnakC3CmMrBNW9j6xRVz5GEgXHNWwLa8WQ3fY43Grrkc6uD3n3e",
  "key19": "214sC5i7dQSoJ6pVHk5i38XdNDSMAkCLsn5gvaiscTe2o3xHkJiT8Q3cNh8iwJn6WnYjAKmZQYP4uFZQ5C25eMGB",
  "key20": "5AHT3JB5d8nA3uN8V1VEd3sbscZBjRfAHauRLqoE69CeCF7YQ5UFGo4P7C41Ht6VHGVq4rrymiAP3Puh1dRrURUr",
  "key21": "5rdi8yU8sKFvuNEXo7bQvVvWseRZGgKRuHn6MtMwmW6Xm6dqCX4uSCoCcvyHvDorYxkfZp9NjPPADwvyLvtJ3v57",
  "key22": "PY7iAHoc7vQFyq4uKJak9K6DpgF3VdZfbRHhsBGJyFEAke3dxWPT7HkqQEQG9yiHeN2KQ7FHDC5SThB3hohUK6b",
  "key23": "4NhLaKjz1AaTij3qB5EXbrf2asRRiZa3udYvt4hoybcfSe4mBEGqj8Wgt9LpDcEukriFmP1mP9yfN9YHfrnxRSFo",
  "key24": "2G3m3HwJ1ndopTi4Va2k8wL4QbC96gEapYtqBzxvr1a4sXterFgdffexCDsvWnxwFSDwps9H5ZXtechTmseES8fD",
  "key25": "22nuApCsKzkFNq2xwj3RCPX5LaHBtBnjge15Qbhbx35YY7USosSh6XjpmoFUvddtZAPjzgWzqHPAa3qZRpGJoFkE"
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
