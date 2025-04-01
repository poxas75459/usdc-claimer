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
    "21sShyGujuVCH2Fi4ipSYNLgX836h2qUgTKDUCWQ2Wcfzp76NoJc2BsnsUZtC7JA9iTcd7HrTWx4ckwKVs9maMCL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51ZY1veyN8tAgVJJFNW8c4NfTiRnH7UHP4ULALosxeSfnhbwrwzApXqjiRAAzDSNciHvJH9ffTLu3mikCAYqCCgr",
  "key1": "3sJjo1WkKsKr2QC6AbZtX8nZ6KnRmbBqiNEya7fW69K3zPSkrtT3emFxpmafLdFkGXsaeoFsDxnvpREA9ffF8sW2",
  "key2": "2XRyTpVHvhjg4S8gJsuZNvWYaLGCRq8xqPc76Fe9f8m2npMHHKa8by5pcdheQgcaEH2nZuh7MqAyyjguADYtRHJH",
  "key3": "46BSLpLw3gHvdWKQFsMQFYYioHw51v1oBpYk3TL3hPtQrZaqBivg6Ddu2ALfEXQfLbBj7khxa5NRdhxULf3gasCw",
  "key4": "G1bnrSGCVWGfZP4KHgfXkfzirgx1WrxcZVwb7sMMpGCLRBKSoGR6yuQio7rTLczF8x8qEUEDXYMkBB1MziiRuPz",
  "key5": "4ZkRkZVhnkiWwwmbrmwYUcRHP2zZYsuEB5kBZnxcSZGfxRvTeDDPxkjsGGfrgAaQbKfJT6q5RkXYZmwcRp2ALuBU",
  "key6": "2zGvt81J2AerHF2AoSxapia3Kh6WHmvRypYBEJCCByLB73Ra1u6JMWg7E9w9DpaSMyEoF2R1ewggxb27FgvxjUfv",
  "key7": "5ab9jicgBndx7n6W8Xb7w3EUuFudHwYorSyPcFEQRoYcpYMGUNb3mkCXdQWFC5PVFbfjrTinT6RymJrTXwvRSjGE",
  "key8": "4XgzE8JYSTh5aM5ypUNgR2oNgiKyd5oEgCMjvF3TnuAvAeWbcybnurJ8naRfBd3YaY5NFxbQu38FmoysVqFbXzAN",
  "key9": "66s5FzS2i8bkV1nze5deivw5WsGJ1f58CSDvtFa69b5DDbCuFphfjBV2C91ZUe8Q4rW5EhZHimTce8tCcYy9KCez",
  "key10": "3Dbs4ckc8q7VKMW23We9MXp43FDuawJeQr5kfmwWZHCcsqxaJXWCPu1zBtmdBsfSVVbrKFDsYFjTsoV25SX4vEuZ",
  "key11": "2CoggFvhiT3uA3vyQ5pcc5NRS3nAutSKs5g8pouvCyZ1NSUcFdteowCf8nAWYyWTjjpJF4tYCqfhYCyfMaECG4f5",
  "key12": "46Suvj7nqqB5ZTRWK3Jjyp2Up3fD3qrpasUW169KbCpb98g8SXQwHJacDgqkztLfLZhqiYtc6keEW3WFmndax639",
  "key13": "AXuoEkaZ2Dkgf48xZPK6ms9ssTgd1VmZBCN7SJFU1Sdijx1F61DwXwmsDSU7HGXDVbMDe7MFJSNsNppGKXCkXSK",
  "key14": "4NuAFGkhCPUTQc1vWRRereRt7X9BKSQGDckt14QndAFjrZDu64pPRditaq7TxSDfHEsECBMhhsBGkvu5jy4tKUVL",
  "key15": "MszTpMTLduBHgNpQQV9pXBU3XVaSbYpS8k5XgP1Q3xyaNRcwgBMn86ayFEY3Tk9ZrycQqNscf281v74oEyBvbUQ",
  "key16": "2EAagDZSjc15VBH6ABM6MnaM1viQ72KL6jR8kMzpAUxgmgvucfwuzwnjVatweatgCTDw8MkpzS72wjG5gj5S3MUL",
  "key17": "5XYDtS7EL7rFBY6nYeeBunxoK2uwYxnNjBRFyBbsogjbuKZNUWiJCRyEFW7w747tzJuDgvsg2NHP5hgRyAZzcDXe",
  "key18": "FbEBN134nBWfVcyKJXLqTJfrpuu96zL7DRsQthZ1suCqVZNQMkurtLgQKqAQw5KPQmaNkdUMYYe3ZDpvD4bVTzq",
  "key19": "2euU9q2iQmvDU4mueC7bdTCoCfShWrY3sP1dxicCAyd6wHmXPX4H6CCi7ar9FJiNufgySkZww6La1z7xh97X73LB",
  "key20": "5WK8S4qteG9avcxc26vqeYXuXsT9zRwJH8UyNR58afi7v3qBnf5r7CYkYNGehSiFWFFXwTSyVsswGeXHJ2Vtb7Z4",
  "key21": "3PiGR56knJvoJnFXnko4SgM9eptLtPabJf8pzVjMWVRHxxg97sjWPB35PVKcSCVuTVXK6p7K2iK6PkPFi2EBqiMg",
  "key22": "bJNk3Kp2poK6nKq9Luu3fpFNPwUt285ivcqHQ9XHt1xwMuf943QCydCiS138hr21M29SY8R7eB7Ykg5fW8YnnHp",
  "key23": "5ZzqDtQLMhY43EDcmGxnWZMLMpAUqdpdCUxsW4z1kEd52UnVZr8KPHHQ3pPYAzVF9esZrFDYxB9CgTD3XY5izKBs",
  "key24": "3JbkgHEgzmJMTB74GHip4RZfDEzqBbvi7mi61NASo2nxPTrRXR2e7pdnS6VZNPyTUfPEid2nq8qzonrAw4PDcnZw",
  "key25": "tkAKASErZw7HkBEXPJWDmijjtP5bWoyXaXy56ye11C3idNsoToGVH5FHKLsz7XqZK3N4oP5RMagUB2BnZvyytEF",
  "key26": "5LEFTUhZAXMr3rPJsXQTEJ9JZ8i7PRFfKjH4zL7ts1ccnSZYiPhUiyL6ugPMorv23RZEpaHRfhgETyivbdhYT9vu",
  "key27": "PpgbnhG7guAbx775PkzPyKbXqNdu4PfagGwy9D5Xt5qorMDjNPCYpVQkM2XfDfSPqxgtWDsbaz8cFsokNyDQiLW",
  "key28": "3iNNSX939LoY4sVvBrNodVhked8dwnS563MettyXy5qxTTvKWg4YbqSS3HkwncRLgKNeQNivrH331cKrCYtctTjk",
  "key29": "44Th54pAZxxfB2beECPfnLtXBEHvYxA8tqxh4MULLbLbvT1REnqXpMW6ZQPLZ4NJWrSdEqD1enfKLsZSaiUcHgKo",
  "key30": "3GJs8fZrHFgwLKPyojAq4kbesPeJ2eK9HWZzD9paLab9BcKCGPJXZftPm9zK9J7tZhCY95mUXVvwvfVfUJuEr4Ph",
  "key31": "2FtHnVVULUfmQi3XQEz35VcUBjav55rfb7v8DMFg8Kb695RKSTpjZbk3MfTAmBQFhtMW5AfftwUYyWT92xpKUpZu",
  "key32": "3kHECuU75PJyd36jFABkZJWbbmzFYjG5nQYVmqR1gs6dg19Us4dAMYPHwBio42C2rLqEUMh18yKY2LcXY36UYYJJ",
  "key33": "3YwS1R5k3QPz6gWGBztD4HFovA1GefCxYQEeQtmjzMWypKuUeinJpqCcBVXjHd55eZCVUAymrH4yY1VtF4EueEyi",
  "key34": "52sevYM8ZMfLTb3imTvKfhz3rMhc797CkGtQEEAKdCJpM9reYE8xnw6wkVBKFijnUWB6gMiDUq1xipjJXqav2vzS",
  "key35": "52nY9xrgUPpcYSVyV22zJiud3JPqcbbj9hzmYJKi3sc7GyTrUVVSnWc29CH6EoMTwHps5TyLNZUiM3ReMUVd1sUL",
  "key36": "2dqD8L9T2L3Z3uBGECvYG7GfhpxhzWshG6WWqfMr3Vhda4VK7HVTit3raX9sAHMQVgHC82agyc9b14Kc979xfqHd",
  "key37": "4HjsRtPt7Xwp1HMtPKkEpiBBkEjQq2sDzaXSRLy4EUmLzoWgWY8p5Cft2MZJ8V1rFUcNRQK4fGuY7SDtSZfAN24H",
  "key38": "679qeqU2NiT1KKYRE1sHGb3DdLkvXHmKhBb4TNnWGVDGKg9NHK15XiYuiYHf7e7uSjjXXn5jhNE52K2c87m7EXkr"
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
