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
    "4CXfGxGmvfhAVYqa9dtM8qCv8kYsUWLqkvgMmvwHdjrzoH6UPr4s5Hwh6PMx2xMmkqREe49GPt7nXEUtcNwokvWY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K1M5ffYevz7K2NigtCeExfoUAX6dEDqiYbjY7ejBX9WsHRHJCkxp3EWLWb6FTnCVPho5sDTTWCN1cJ1vUgxv7H1",
  "key1": "EFvP1Y9LW2GiDApBbDMTj1qtMiYQgrNDuy3XcRntHqR7B994cvLcDkW6HB5ceWcCmJvXBykZpSCnj4PGSB5n7kV",
  "key2": "283cYtKhCSzALCtWBFu1ZCo5eBX1nEMYcwuJWuwp5s8gFkRoLy9B1v7JNWZPvk3XkgeH27Yo4Uzdx2wGMpsydVyu",
  "key3": "3PEmoo7aPGwDDEjHJbejooT4Wmqr9ywhbNnYcLyMmxyeYdnsgNEaK1mKmAXUWgmnt1XGBDzF9BZQ1C4PDDkMX9SE",
  "key4": "4cqGRbtNzxtnyw2N4BpwEpgR7vyNHWPTypLscnVxD78YNsX42Q3xcNKQfoR88syUsLnuvC18hunxWd4TizZHDK3d",
  "key5": "4fbEMPTxoAbWCuQtV96agaMZcQjxme8AMaHDJJ6bmD4UAQdoD3RG8mrDVCFVmJ7F31c8PrVRXMJim6BiyEZK3CSD",
  "key6": "5TsohYwKyUJjLcNq2JAbuJujREFAitS3469jbVJi9x5jhYrzPUNjfv9Uz1zzuzkdbekewn2p51WypFpHYDAGPtmi",
  "key7": "2YPwZg7BC7UwShgEJtat1xLA97WJ2h86bmTaoJSWhocFSpQsraNkzddF1SjFU73ADiRvmAQqz8DdTW6mMGrnsnjP",
  "key8": "3JVXmuj57snjcLNx4HmSqsb5pWRQmZtBS2937zxrNG1taLFRxsMQ5RQ5E4AeAxnayt1zuN7gow7BPTDFQJBdAHoV",
  "key9": "4N8WYajJDPxWamEnDP7CVFnUP7AEro48XjkfcLSd8PSFnhPGf8i4DWZMcuKfgmYW8qVgEUZtRhcDEAiBGxwmTcJA",
  "key10": "3cDht2dCYq5FyPrpaqJ39GGBDn3P4VqV57eh1iS5mgqEgUiLcCLFWxoSANFbB5tHWzwDvqAo7cDMuYudU6H8M7Gr",
  "key11": "mupBMRxzQjNgR9AzE1YCMh4DBAycVKcEGvuRVPQmP7XHi9Hu9vK4YpPqtX96cKFRcUE7EADdssHR6zwcWqpYvEN",
  "key12": "2D854E5PZqRRAmW1FovEL7GPEWHjLbQgtt9qFn4U6FjoGAk1NVMTyjQqrdu69DNRabm34DMpJ8BDNm8frwjyGBW4",
  "key13": "3dVy5GWksejZYxshCRBsqf8sCHqhcdyRcqNbbqaCiM9JKRVCjpvQ71SNWJsC6VqDpA8sPYqKBso1gRMeTXBkHnC1",
  "key14": "vXRgrKjKXwredc6xySbDKyaEt2uw75xYBBESUQ57TVhHZnywfQQXRCqFcmTaYygbARCUwjLKNPk3T74GAzdPPXJ",
  "key15": "55EtQ7n7voVQrf9Equw8d5oendWJ2HKRVzG11VmghCRMcWJwbRVL4gkc6itAuFLs3xa57b5JjMwpc5tnfbwxGp5b",
  "key16": "2CGhR4qcuL6iCgLUjbFmsiLaNcHnwuV6FXbdPGyFsFEt72ZiggpFSBG2C79DAp3y8fANahy1ydTnJZeaT6GMN8kE",
  "key17": "3ze5vrYzdYcyNPazMZfQGFDcbaLXEGggu6nchvwccKghTRF9PNaRqLRjhupFmfcKfMyDSot93fwiv39DfqtiE8f2",
  "key18": "4yVzVcLgTVbaCeqgDpAjJtV2nafh6pVYi9YTKKZzK3mJvza6aBzUPUFa5xXHgxLTn1p5UUjenEXHh5famBfKb5YL",
  "key19": "z176U7xAkYuif7zucycTYV2cSWuJVSvY5NkzZqaKYJZ21HBdGF8W5LXZ5e1b2j5dwzm53cM7Ar4wpBTh3K92J8e",
  "key20": "soEiB9P97DKnVTKmH15vVkYVVhYn9pfeZxiMNmpkynsUndCDzXEWLChNQvMQ7XUxP7pfJjMYZJPJoPZBpg9cj5P",
  "key21": "4ukKYxisnJ7XUmLocTHHGbPQAgNtoHwAAkZ5LC26R2zVD39CYqQ7sBAUxfjPj7JYFtSeeUzpCxxeksqBVBNm94aH",
  "key22": "4qm6euxioAyk17z5UFmVArgYmj19fCGNx81aj4YGpS5u4zGC6poqc2MyYpLQQ5tBF5S5yiukodbwCkf13LMpzKfo",
  "key23": "4onBhizh6mrf3B5iGLx9fkeLaSVHeuKjRCZbiCT2bqdppsqF3Q1qQrX26n7N1e2J1Dnb3cdcodeG3EhCvjmUU3Lv",
  "key24": "48ZhwV4vvo9Wk6CJjN5mpTaCGEpeCeLGRCQKXzKnSRkoiXGLDoyHSWnhpwxie7VXw9rB8v6P1GeL2LC3TczvDJRu",
  "key25": "2rLuTqf3byLdDP2mGkCFxqtxAuP8AxxsknF8Djb14VoYXea6a4ytFWsL8CwmYbqWedAXrJEnwHf8wTe9fmFQCUWa",
  "key26": "8xKh3bxPgUdxRG28mCK225D8W6HYMAV5obAtEgU4RRSyhJ8eMo871TfA3ErutmoCxKN7EADTk9bwn6ohP56ZCHc",
  "key27": "4ZgnC69vMRT9FsNnUH5cvK8daKWXAq6nHU51KqvFHUPJgBDX3gLQftKEgmc4ZbqeASpzkWpXBhuv4vsKHUFvZ4D4",
  "key28": "5pc6Q1F3R2DJUtYX17vYSAgd9R9rSYRmuezAN9eWFTWSVb6aUamkSqPUxr4jZnQUgXX96wzmisuKhrN72ZL8X6wB"
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
