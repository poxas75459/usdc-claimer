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
    "35gZLHNKZ1ozj6ujHuVEWpXBPqeR1SeA2j4Rop4oiVatFfMriStWQ2eemYpPetzrMqr7VTyEyDxNXNBoUHZ5KtT8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oJE676k2YVrVbdQQxW2xvHHL3fa1trvCociYcz4qWrzc8s3PErkPDF8A2fj6NYTUqaHNvD6wPJiRsyGcWvzrf42",
  "key1": "3FcEnkkkN1X7TL4FUCmcojBpjo2uPc15gyL3LK9JQCzKB4mVV9YZhLjBt2KJd5uBMCKPTzSsmpEfH573jt7ZPhed",
  "key2": "2mzSCF1DdjY41FQEza8Ytz9ZLBjKpR7qZMvNMBFsf9fqoNuWes4VSRTdPt4LWBvSyje4vjN3b4fByjQzn8zfdmyY",
  "key3": "3hPM8JEfwXphZz7vpsyf1gvqKVG8dhpGJmdcyJiMhA7XovoF2JB2ByjpqsZb4487eZqEqT7V7nfhV33Nr4kdQRMv",
  "key4": "4pEQyQcvLGcvWSksAwDEeXQjMLdHwtyn6xG1rcijW9dFDRCsAHV13kNBqcZ1TxMRBVBaUxYpRbLQJrkN6Uvmdxsa",
  "key5": "5DXEm2YuUXYTXYFWsXdjbk8CuS5hZia7iZckkmRrD766vyrCHjo1nE7W5dJJ754Kkma4DvktxCVZx5gT7Ngj5FPK",
  "key6": "rXgfRAsPzY9qrHwGmhR49Z157GV3qBG5mkmLzdke585XuSB3s4xRDDJqGZVh9pWcXR8CKuSJhkDW2Hp5Z69pMH6",
  "key7": "4aB3qo2QRmKbj5Q1YPniWygZALjTAC7N3Y3U4gmadNL9oMi77ms1bMe1e31rAnhnVhQzgMCFNr869HERRzyJsYXV",
  "key8": "5k3unBamG8vJwT1FoA7gkavN3zujRB8Cqu8wKmYrFBtWbYtEwFA858GQR5PLWbNwy67YZcewAu2e5G8MUrTyn8tS",
  "key9": "3XidsEvddCSf2jE4WJpWSBPXNQHvm7F2RUDSsPPHzdtoKhAnbVehzXR9KKkWhGLvpWxrRYyJyuTwGvuRhBJzcHku",
  "key10": "P1f4Xzk63MtvJhQBPEq8syGR2UYuQBGZvVcmrjVV6SV41rY2CgL4xRWCXXvRNpE8epnGcGx1sCkAMTkxgxETHDW",
  "key11": "32gZn7iXJQAe4DtC4dP4m3Y6D6A2desJgpz61mGzuCrARSECbBtN4be3rLCLLYSGDqUAMGhJQhwp3EfPcovK8XD4",
  "key12": "VtkeaUY4u67pc253o1ExFFHvthkrYrsKovMyTPUYcK4H4xe2dGVvL1p3qzV1GK3BBcC6hoTJn18WnjUiBJUw5yC",
  "key13": "3gzkwj19dAdAc3dRrHWpa6UZWUxHbnKduVucyMBMS9QyZtkeooScAzh1zQV256LeVj8aXxEUJgfZUfMu4n8sMvhD",
  "key14": "4K1E6e39QKyooHYeNQFymTE4U5WHpSkGuuhRQuvNaYo8SNzbKdn5xJpKaGiAoBAQq8jxP6ZHePvEQUW5rf9sEqho",
  "key15": "517Mu89Kf3HEyiQ7VYmUES7Vp3v6hh8vqu1ZxTzL8MAq77Z5B8mAghio9QkgMK4ut7mB8aezUQUFp7d9iFRCNQH6",
  "key16": "5hQHVvo5Qyg1rJ4SYYyvc4BFWfig1gQwrDqD2aSdcea88amc33F5voSgcdYqTZUMyXvQrjWwD1UyijLH5ngBVJxC",
  "key17": "3R8ZpP7t2H6xzUKoHfSpziYHj5VemudVm5GrLG8ZZHdAEYUWteLnBMJoKdRvet1bBP9aLihTivCJHbRPb1Sex9Kp",
  "key18": "NTx6tcjYQ18MWSQCk42aHTyfUA8amah7uG8VzZiN6ZfpPw2QdjRhrjRGF8x9JbonBLczaEGg7sRtHVTCt4C5QAh",
  "key19": "4C1JdpbVYX3sWLUhZRo1nhhtr9ynzVVnQzdSMmdLNuoozgv4k3CzBXTEm3JCwbJiDEiUS19piBTEkE2CpZD9KDQD",
  "key20": "3AoEQFLZbQEHnq7Z9heLCRdKo3HJGvaqgBkqeGoh5ECyWVBXRodAuNHCqNZKB7dqacYyErSw1ok8ps15aiupuRvn",
  "key21": "3FU3DZtR3cCtqe7WFDMifSdEqHCJg9X5dYP9a1JUSc3SgNmmWXyeA9M7XyJP1qE1nBjKTQkH7dTxjpEHKS8xRv8M",
  "key22": "4NfXg26r259MD638mpmmraHZ7KgHz9adwMWm42jmjUkNKFxTxEc3rkcL8iCpvMnUUUvuK1g1ENg1Un7Qwtjnx7Vn",
  "key23": "5auaDq9Q8PLpoCB36bNhQ6jyaChNN1va67UrAZn6FM2gYWmDq5EqHeiPsq662sxg63sbxyHeZcE29bvYKiw956Kb",
  "key24": "3FEs23rKVSRrvzoZBqYqQhb4ohihgvCBHY7BHhXXdPXB1p47ppisBmHVZB1hd5ywwTK8dM5vLGBZqDTkUnSp6Qc8",
  "key25": "5Rh3sL16rN7PiyroczEggfM9SwPZtEVw2AcVtAoqEn3ujMUPbbpxYzbjB77aiY3dZ2nQQVLdz2k5MqXupgR1WuGc",
  "key26": "4NGdv9noBgpp9iMZjbY5Hk5Eg5ZRZYwVLuCnX5LvsXrH67PBQR7nFkLPvvi8EJFa1h3wWH3a947E9RmcAZJP3CqS",
  "key27": "d3wTsRWQkGKzq1YTNqejRF6ck83C1TqTeSPqjt55fBK3bF5ockYRUNuD5BFxsZK4G1HsaLy3qC9oVkioWPUQaDz",
  "key28": "23aFA2tr5uhSN26NAEJfe7apPxRFJTmpCuRgKWqcgRV7TSko9TS6bA9h8bA9YcwxRVM2WT1QJ6DMpRBsRUFEAJNm",
  "key29": "mbbAWCw4szzYDpiHVSweFjTJe7duRqCHA6bFSQjjoRTHwMkP8mmFXGvVayXrNvt6JiJZKwPScz1dtDqPiWgxLxB",
  "key30": "2YXVzG4cx13qgxe7NEfsAVk5e29pfta5MruYPxDapuBHrpVTxdfUdNJdAxsm8zjNCo2yE35Ri2Lva51mF7cFNu5Q",
  "key31": "2PmSj4wQ7NaTXSQbL6HsBrf2PkFmPzGjabEJxeXXED78kZdWmrruC45FqF1i5SHkWSwChaNRtXdWUFzUbXoRCrHq",
  "key32": "2TWzvKS6fVb2UcVeKH8fuUkkeK1wH3qz3qqp4b48u1FCyppaqa6yEHzrMoB7Y8MnKWQH16dpnqbvCAPnHMvmwQFT",
  "key33": "2sT3PUK6waJ3wnptSq4F6YvEk6AWdn3dgnK4wujeLVsZ9mqBHqJ7NvLntkna9nrbdPZyChKVEUCJAqYG8kCNrA43",
  "key34": "5vSQ8s9smyUG7NrxfxqP6ze3QDVtSEMyqyW7FAYLTfDCyHGirYfugH6NqTKeDDDdJ7Ph7NjFXBWm4twwdA8UijH1"
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
