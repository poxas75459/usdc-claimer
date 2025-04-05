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
    "37kCnJdmeKaF2BNBtcFr2KftYz9cFWeXUsSZiNMbHr1e33TX6wmfYheZ7Lxy9wTzBSmuwzBc7dqcnRXkV9aZMpGr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39cxhmFDcr9V3Vw7VwCdtKHLbCUorqEW95f9VFEsSTwtJtvLwLcpB8xJbAKyLxqy87fFQEJ95G6MdD9DvszegwSt",
  "key1": "4XmK8gC9FXXJjUQNPPcJKJpFJzgBGtGTRpp9APf3CustZBfh4ypENKoW5xAFq3jDpo7h3qjWZXfksw7ZdUCHBuh",
  "key2": "3FtwLtHd5ddSmrbedjZbjK7hapjG7HQbQtrFzZmadZ2vfRgV8rtZD9gnvGQfVAu7XCuEwRadgKQj4ofH9nXRXKEt",
  "key3": "5DqDazWNthSPDFLeLdzNd6LrrmUN47ijhKmR3LVjszpMxPUKmCHJeZ9bBAuT13WPG3Ffh7CMBrKAhdKQ4Sc7zUx3",
  "key4": "4Rg1he1Cmvt9N4wafGVFqaRN317ucJf3WbsKhUa65tmuyhXnuPy2HPVJonHebCtW7da29LcxTaTMc4S1icnYz1EL",
  "key5": "4hiB7w6WwqfDtEhTnth6sL79Qp4jQv2M3LmTaQV2KFyeSwv3dWrdQXLQw5cpz81t385tfanZ1khgf2KqsVRQrjum",
  "key6": "5kpVpi189u1WWaN12w8C4hykDQnpk4aMwPF7F2FMTNrSdoNE8NhxWbCCdiGWMZYY5KrKaK2D6QVirxgTT8ujBWhX",
  "key7": "4YbTC4QKSQwUFcCUboLG8sYuuMEzGrABqCaTuX8JYNqDCMPPhvmsBdUyBRHeVAKEVSfPCQNF4qVny1ShuABpULyu",
  "key8": "2Gg6SE4YsBXWF3TPQ3n9XjgznkX2Fu8U8wBT5nWdcRVH5xRYzHRDK8Gn2df5r9Twnpyikdd3XkUZpUUvCUMkBSDb",
  "key9": "2hnkoLEK9qPoVQDQ8BFnv4mHrTafnD5MPbs1t9fqaUgnG4sfeNupYWuPMVZgsubLpwoGz6qRvCoq6qUYv7wjDsTY",
  "key10": "AJ3uA6EAjBwa65fKGtBnrr3oZ9twS3tCtUvr4WnaFSCxWtvBNHAfZ1yp7FWJ4aNFKi3dTr65ms4zD8ykn2rDcLS",
  "key11": "2fJXpGuWxBBnXgMU56gwUfUfDjNDHG5x9eE5T3Tx2Lop9PVx2kjonCMD5rYSgFrKVzrTZpXfF4Ldk1huMQtjn7C9",
  "key12": "2RRtfo2Z8f62Tn5dVbekA6uzfXoyTV3AXKaE24ECAmMfSjxMZobSsa4hr9DBZSj3FSh7R2qaBmQiX3hc4fn6PtgU",
  "key13": "5XbtVyRbTRRygo7BhJiyWArw1NJfUUqwJvLZALNhBCTWzbkLpPxvzH9gLqeEubUe4psZhxP2Sdz1yqUYsEhGDPja",
  "key14": "622tnPrXzdh8D5ZrzVfsETsat9M5XmXW21b4MCUdmBiDjfY7V83mRwFzH92Ke26xbRMbUX4YXCmm6DTQGeXwPdoC",
  "key15": "34pHniVKV1djGKBn7fWfYbSoTCMzGUdrExP7ZczExPLt4MEH4AJJKXvcy8GJ3xHnr3pGdbiPzUAWUNSjaQuYDUZq",
  "key16": "37JLPxpCS1FiAd7xZ1qYZ1GTRFG1pvCoqdENoXi5krN2aGGLUFHSrx52MNpD74Tz1xsBYyHeaZpdWjU6NzMFQ6T4",
  "key17": "52nxBsSfsSMF6yg6PBpPFnxQWeDa7xUVJEodGGTfE4iw8KWQVPpmzbSmA6Lu2LpvrncaEMtxix7J4xqiMYEBSddF",
  "key18": "63xiN2GXmJudBpkQPbebcWmbimWqZAfKx7mLtnfcQrjkeRtJTBcrjzwLupXjd6aW9PveSZngY4p62Yjg7K9JVuri",
  "key19": "5E49V5MyfdyGpFHJtXDDq7arMsUBNeGbtNoMwAzJzVTGX2vr75LBDKdbWeSK8zE8oA99p3nwKXCWYNZubDjguVZS",
  "key20": "5zsMgUeB9Tt5vnEdfU6yiFrEecWUb45ryy4wom6zLR4tecNK5qW9tzCouDWYnDpj4kST9YwDYamApCj47R3gJggu",
  "key21": "466bfBxw5fpNWUz1HzbptsFNkuvPEsbkjZFFzJvknzcD7tKiffhd8LCQeo9o4RxBHZ9ix3FGEqCw31ntcj5dgJTg",
  "key22": "3WxLJwTmDDpeP3CXzh9eSPEHjqHvdCeT22Z4qS7VamX2GtjxpxwBuf124kvKJWx1iwb7Lf7LEPZxhPSNLv8P9m3Y",
  "key23": "2EEAivjVujPggsruNRFJZALhM5nkcLv1cF3iBn5tvBhBUq54kYNayMLutGDmRBbmrUpa4zgkykPcGxR4nrLjdvct",
  "key24": "4itefpRAKRj1Yw29gJ7vWyeimdPz4W1B2SSrs3SaD2HZC525ZaDScPXN8dw76DW92YGCxESAM4n3mzYJnGcqVhHJ",
  "key25": "4N95rtphVwN2ocqiE6AdeSem4B9HRjWMXuhGR5Wr59iqK19hN27r7557mULDz5mgtvEpb7XMV6pmBmxvqgaf5G6M",
  "key26": "P8gwsqhuyiXB6KQK38uF5f5KhiDdqidaVBwNjEqFmkvCJirax5fjNUoyXvB4ACKZ9C5xRj3wJcUt6siZGgeBgpf",
  "key27": "4yg75Q6suonMh5rhwpTdqVCyGWSEcsMYftXKa4Nkj9DymzMv1suKjxXzJ95zWMkJL5nto3oyFqiZhFrpRPEBY9mv",
  "key28": "4AxLMFpX5hzLBYnw1mpk4rddBZ2XpuuYPgYcnMnzkgALcsFYXceVmatMEKPw2eW3XngrPGkgzthbkr8w87ah3rfp",
  "key29": "2Abd6KxKVAYXEWXRea7F1nFHx93c8J4shNbJvrWCVY1JdRmMofuHE7G2fWC7tjVdcd9dK1qZCxDwEDZEjursq7gN",
  "key30": "4B7ravbneYkceoTphmrLGpYUnJzVKL6xS4uWwajQQrzhb27YhumuX28eUjEmZFktD19aPMPjP2W4PgynqPDwt7Xt",
  "key31": "5tc9eXuzGHPTgBABQrnrnkY6ps4Mni54CLW7Lo9HBakkSm25o3rF9VHDELg1FjnDq1u3z5DiSAzNY7ivde5J4HkL",
  "key32": "3ucUH3WwR6jUtMm2fn21RqFw2RfcydDQsd8qZpsL3xVxN2AYsoR6j4hq3EXqEsokteBBPKxMhWa7Syi1sXZzVeYg",
  "key33": "3REk8sdRKxqZnb2r9jAvwoNQTGg5nr7cWYefavZTUdaJjfDqeoxYGdAJwgMyB726hMLYLwdnyRWR3cXX3rQ12B32",
  "key34": "5VX94iiLB2MqHvAkPLVoFEViKSpiqxp9xQZaRhtDPKH8NbM2HXW3SNzQZp3byZ8QmMpMF7TKF8SSTywmSpeLAxV1"
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
