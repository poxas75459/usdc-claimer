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
    "67kjRh1Rg8T76BrpbBBH1HCRwnf4PdLExsL5eWpTNE7RfUFV8yFdiX32VFmtnksZtoBt7YTSELzy4kTSDk9nycRx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jNZrxDaV5QRAaUB416JfY7vgjgpCa3eX2adtpj9TYMoVPU8eMjQfp9cKXkRTnBuBCGqo5GcBJDyS9F1hBEBvzC4",
  "key1": "54hGZAJPavg195TmDTVWgzH5aRe1BCGAf1DQzdZvomBbVBnZuTjSRcvVHV8Rzc67UwSQVKuaWjJHniJzYoZ6yWGE",
  "key2": "43zDqYnKaG6JhT2QYvfTgLLfeWeMYM33iKqmjd1DFK7dJpCvShvzqCpxLf5b9N65Boi1BrVNy57S2PZh82QSVVRE",
  "key3": "58BrmPx2Kf4dcYQz9jxoyS5Gk7vqSem1pj61hT23r1mBcjr3tzQXUdmLebS4UX3LyrSSDur5msgJkozG5UpNQx67",
  "key4": "42tDS8nTvFvf7DJC6Q2VqAjjigCGKvB4Sd5mfXtYCh8X7sE13QwJdhejf9SS5RQm2LWoxwFUDjTLmUqw3FoyGkyd",
  "key5": "462KYuyUTFyeuegZcRJqtKQJDXbPk16YSNqQD8VxrBki1kcFe4tmfVMazpb2QT4sSLcQHFxsH7ACnCjGLiutzGkB",
  "key6": "5tQLXWNHwbFP3grTWBZfZvRpCKyEbFdc8wJWMH665YsaUayat9PRYWZYagcQ1Zpo4Sg78BqTNDtwyvTDC5Zk2PVg",
  "key7": "J2y6bwdut3EcfKXkVU32MHsd7dDTXR2mRCS27XrWdM4rMxMQSGXCGYuasgGsg9fK2jDkko3JtDaSnhbJWB3gsnJ",
  "key8": "u5NgeKNsLtianBiWCzx41t5GQpPDeSwkk4tHXwzu5c3tB4HVHHefTXSPYBHvz3vYRKSRLiNbXfHNyw5ra3mvKXm",
  "key9": "4puP9h2hfywgXzDs8GX6XW7AUfeU6k8SjBVhoicpN5mL2diHWJcNgzhauHgaEqc3McoDgweQxzQi66Mik3FWoXp4",
  "key10": "3mnUpsscsbDdztpBWg8FdeMuVogX5oXM7AHfbnjHUejqBuvL8Dzs7hivB2JYx6eLQ9d8vpxMadW6XKtQWrWT55dN",
  "key11": "2GPGRNbKWUeU28sb2FCFqejYuHkn3avc3zAEBSNcfqCRWiaECiAv5jgx7HqFXYSXqNiEcDpXj5XVQC7eUm7ZfyVy",
  "key12": "2THt4tuaBAes3qKUK8ZZjSpPvpED1zXRw9Q8nHLaNQx5XiiuXnw45ffvYijbsV4hbseTvseoBZ9EkpBLsuTwgRFm",
  "key13": "5voeH7p4dvWEof2V1NTquEkwYWLg5EcDRWxEmD3Kjpva9YUKbmZMVyMyVFZ2z9cEq1QAJPBQs36si7kw5bT4kSWR",
  "key14": "4tVoBozVQ51Yp3Cro5fmHRxiK9RgRFzzPyPTUUjoE8qXzM1AQqBwQ612vWRzn4NFngBGKXNi88QUR1Yxv3ekGE3N",
  "key15": "5eSU8vmDVsGfMgRGZR24VLmedSd3V3JfuWcZ5DWXedtqyjCQ7fUaSnciAwAB3qJmFUiBrzsYRomeCg6xj5ss5U9K",
  "key16": "2jXqHQEzQmBGq7orRbNjJzWM3pFRhgmuBkKxK99nPPYCxE4Pbp6nYMK3fVi2Bfc313ncWwsNdZBw2pXZHeiubtwE",
  "key17": "2jeLbKy5WmPrhUv8o6stpWP3Do7idfwbQrbTcKfuFHJz9LW42XpAPjj66zPJqDrzwoDRRUvYRt1pCrkmN31kVRqf",
  "key18": "5yFodSAFoepPx7CYHB5mvBYCjQTXGFv8aCukh5vdD1SbLjMY4yK2uFDiuzDUJbwjjPGT33ey4sNXFrPYRtfdqfp7",
  "key19": "3vJQyVTiBWTQMj8n14mboBc9V8nhrdb2GH9tRXpM48ootEGbxsbhPEaxhBr2A7G4baZYLquzUQGx1SSQ7y1oeoiL",
  "key20": "3sTC3DuhNbVBMTWKcHghMzrTVtkXMB4AHJPTGYmmH88P5PThu6rDeFkhTSixdsBGyHdC6887o1idueV4dbPbUM1z",
  "key21": "4gcge86W8xwzujRn94hfC5GrJoT8FZXiw5yADTTBwc3Kz4czyANQjzmBBtxpUArnXNU9T1atirK4E8xjkRXd9dap",
  "key22": "QxdLCDdhaFpeCCUARsNBQ98mZP3JP5qNz4g2MCUXjcrxEREzdsQz4mS33Uceax7RyRSnvFA5pqfMFiEgxdcM5bU",
  "key23": "sdhejp4KJrApbCYPEAdNEjvqxTvZJyVaWXPn3bHamoduUewVSNyKw5NDLp5xk9E5HWqW8LkR8T5RQ8H7qQvEA5L",
  "key24": "3Gv2Si26eU59ijq3YePXS5iFJwPqRjG74TfzS7fQ2tzkiSHCJ3BC5fDEMwMijMaKWtEborHLhdUicYNrMPLSPxcy",
  "key25": "27WfzfTxdiLQCJ6xhvrgtYF8Sh1soYzSxNu1JRqmVd7YECVzYwzZJov5k23Hb8BJKUCS9YAvS5wNoSxqj8xmtM4D",
  "key26": "2wK8PEA55UayFoJNUdp2Ph95rCfoemZEGhxrBXD8RR4ZCR5GHCiNDRnhWZuc3uxhAsHVnfNdbT7xJ4muwPufmi1q",
  "key27": "3NQyv26AxCjRxa3RRFPDJjA4Mi4QtaySRv8Pjd1gaBYP3vSDjbZNZ18pvDJXDngJ663ZUH4wzCGKcRXumKcmz6Jv",
  "key28": "N5FauhEWYe2ybjgvAKt3yDJFogKhRwwC7iGq5Nn63i5MzCL5EZuWX4pcJ9pnA9ykT3mZ7DuBbh4LpnioAKQwkjE",
  "key29": "32w33336aahoqRTBWpqh2KpRkDHBE9629Jr2edcmwo9kvZQnG41XcT68ogXJAN4VBjs2jZgKFm1XwpUHvXao2hGt"
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
