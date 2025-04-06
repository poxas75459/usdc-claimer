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
    "2yZCEGvUC1KnM3zmqsu1gMea4Wqh9T15tGbzgwpbUN6fghtygm7N1TUaDNSApRUAH9STMBh6q7LxVD2sLxRaS8tv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CCNL6T3FZAuDkqr69PwVDsLCCi2Wt7KF5ErbfuhJHWUyAr6oTPkqSx3gHG99fUDpoJbVmmEJhQF7uTQcwB5GoRQ",
  "key1": "uRSafYhWs9HciCsBg4sKHCfK5UBRyMGZ9AKQVGfFZfRTqNsHwbZkeAzLCTqN1HmSGg9twA2NZbU22S2ofPRnvbX",
  "key2": "5oJSKm6zsmRvHP2mSocnc4xNLYDVFBFMPyoqvzZG9Pxk76PH6eh5M7A62ks7Fx9YxeNmkUn7Tm1TCqEygnzsjqEi",
  "key3": "5YWH1D3214rKxzQiM2jvS31Znoa7ShLxSBmvaFsJ2HL85e3SRqGHJuCUg9DoUZPiDiAMVK578f4Yih2dcjTHycDH",
  "key4": "3tcwuXEE1cMfr7AMr2tU4Ftc8aGWxYsR3shRwrZWkBPu3cTJMBoAdCNvsSDnW5nPm1D33N7u6umBSUdZh2gBDBm9",
  "key5": "2cmqwBt2Hveu16mW7QjDt1ZYGAf2bkTwvhDCtp8NeFMbdGeSxrWQ59thCNq5UgTLKpji9aKw7RPeMFfN3vSC7AQf",
  "key6": "2xFNB9a1UdfnBPpvKizpgc2Xj29yFSvVhLySLjZ1YNKBMH3z1XtuPcC4zepn3SGYES8LpJsjhCHPKWWqQYFfBUsP",
  "key7": "2ukLZkZf7e4HrzyioLPGnoTHt9E6oRyzdh3gW4hPSzUCVEAC13Z61qpzS7tHnC5CWqywRfzYusRFBPCa7asqr4SV",
  "key8": "39E7Vxeu3Zp2a4pfM8Xhbfy8NqyGCVNXwuYGvtgoaB8Y5sYhkKAn847oMHdZdKvT7XZ1184LSPkiKYE8WkwhFmCo",
  "key9": "5LqbTviuhEdZuefG47kturGGBkXjar2CSaamPaJe3wbzD3Un1GhtUJKB2w58FoA6tAayWkGZQAje6hS7sC5gf2Kg",
  "key10": "5Kt1jBzDFPkxecVygSxvum963gdkPyrRgxMcykjEbaEpk8G197ZEQ4m1tVcdwKikBA38MLYqRyuXR3yyV79ZdwoY",
  "key11": "jAsr1CE6xHGvqv81fnn9tAmUUSJtEsoy6fNdvBgSB3DH6U9H6HFEBzi7KYuyicLSdF2BQceQeFKDW8hDP3XTte1",
  "key12": "1CoKgj3ES3YsxgNNJxwYk4s1PipHEydpkcA1Q3idR1v1aXdG13RYxcMCqHRvrNju5Mk6saYRPc3yL8FeQSUM8R3",
  "key13": "yuK4KV54A1uz6sQjzzS3dj4eNUNJQmnA5U7GVGtgyMSz4g1K98dTeGGiu6v3T3gdBDL88m8QJzmVCqxSnYYaPvA",
  "key14": "qYGeYm2AAjMo1Wm5to4768a3R41EtsEce5SyXwbFEZxkwwsaS4voFAHgu5cbDYFKdr8q1pc8suaqvWwMUaMaKtV",
  "key15": "2wABxkyfZ3wQDK6bdntBH4qEMcZMkauzBF1yx4a98MYreVFnp6ijR4pd3yFjzVCWxhy7KNQ8KnevSp5KvQQdK1LQ",
  "key16": "5PS7LqUmnZpqErHng4AvSs3cRtcXw5nyLaJV7K3PvHmPwdX2UEGFWDC7MpLAtAsBBuRnZTWot2eEPQEWkZrZydUu",
  "key17": "ZCFCHFgKnZ4LdhftiL66jYYk65tcFfrBVgVX5MoSLy1HQUDdLx7ZCdtLsEk416NeDa7x8G4JjTLkb4wAtsHekF9",
  "key18": "4wFnG9FtxrxEsD8MEqXD3iwwr5ojpo32CbD6mu9HVUQXdjCjVDxMZ33kTsbNwA65xPnevQC2vBo6FeCRf7uP9hyr",
  "key19": "da3GrJstWdPyi2P7DfQVS5CdFdu21x3KpHy25bXJxVA3PKgZxLqHuo3KRt8vR1hZeCSw64YZMJRjjjBPVgacaYi",
  "key20": "5c31yFxuYoG2e5Er8jAKz5354YRQXTBKzw6tLCxpX1K73e5vknETk27ypzwAnYi1tbPBkxjqxraqaY5qSmAdHj6",
  "key21": "4mKNZ2qt62uVNWLgW4A5RfoLtMv3bc1Bn5ZK4Cmyh4nokUWwQdQaDFRLmz3yFaRa1ygnGCQyMVFLtGbAcP2uUMt3",
  "key22": "3K1s6pMCYvQMmHWs2TeazFtqSJJfmjPyuSvnfQv6CxREv3EyKzA8dLogQ6GE7SZhAnRYwFZymKmHBZSZhsxrGmwK",
  "key23": "2w3FFeR7nDtJvBanpuArUTU64FpMP168vorsjvPVMJNMRYFtDGueN1TZfGvyhebHapnZyCr9wd4ExtcLVggREpfJ",
  "key24": "3xdwfesNEYDG79ymrnkUqxAR32EW8Xe8k9pX2dup37VLfKsCZ2ZdmZ11jUCyE93LCtQt8htZ6WXJmy8TxHotqr2B",
  "key25": "4B9tKnKrmm7hVLup5k1FnWvyCpwmuY1HLjAJeM6KxE17A4EUdUV3kGAEMi55pfm7EUwgyAsfAjX9ArMpNTwJNTeC",
  "key26": "5Dv4Dp3fdV4ZNQ4agWuQz2Gesfx324gSRCqvX1zbYRWyjtviN29vaTvWCrReKEZYFbXpxMVFZbZYzzwtUaCePVHc",
  "key27": "brvNK6QmSvKov5zMm3a8AUEFdyGbLzyAuuR6AB1szdmar48ZfYub46niaGobB76aRQH2zQi8F2zW6Nz96svtE85",
  "key28": "2sqwk79n1nAoSPY9jY7h1eQcmv99ZS9aqPMfZ5Cmqo4RzD67hUm2vRXZ7Vv3DVgDoeGTg95vQYjQarez9i2NyJ8k",
  "key29": "hzGs7M1HmxXiftSFJ7ji5bE6bz7SW8mqMHsvhQR9L1f48HDjzXWkzcEFwDF8ymKyQeP3e5w3cQwwCC5VrSGRtWk",
  "key30": "2y4jTPWR8XoXYNbtQRdE5hci9pnP1SN8veasErPTATLb4GKbGgcN31cA9ehLPuFhAQU2KzyyNWpzgYsqtdp6vB2H",
  "key31": "4D21hXeQ7VeFS2GYEBr8yD9jqSMQybUvDmhgudSpgT8ujdHAQMQg4Mv988vtwWnTYw4KKuoYZbEZwisREcwBpHeM"
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
