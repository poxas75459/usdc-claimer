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
    "3JK1FaZW5PGzWYxfbgHZJGoSjgtwtaS4zZWjsXmLQR7zZp9EPx8mxaJydrhhoPaWjsC1C2aeyGe82vebgWthX6eb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CineWsoF2A5d265RiZSyX31cHhaEqfKL57kg7CTBBdQx9uSKnfk6NR7YNLtnLcrG23CEksDAZB6tNiV6GU4bwBE",
  "key1": "3EjQHD8s4uyCNT8kyxYX45QstJz5qqSK1aLYA1KA7R7wgzZZRkcTeoX4athgn785GtaLDXeq9MZvhYJ6fkzYKS64",
  "key2": "2LUNgPYE9VtwZWcFTi1CFtC2zcygm4teaHr1U56NwyshVzo74EXzxj9347DuHRrCHiCVvQr5hVrD2wFtgmAVqnjV",
  "key3": "2W6MbFtngqoicRj3kJs1ZMFn97xvjzXE9sBDdMVGGPtsfjr3yhSQGZBVZXnuj46Rs3ygvvCq3xj2XgRyN5nAbbku",
  "key4": "5YwVq5g3Ye913GUu7hqMrdzKS3KcN4YwgPmtqYEgBS3Q1pdMoau2XGhh2yCW8RbHxkjXpJS7ekDzoKfRqdVyFtVU",
  "key5": "mXdwYfToZACs8cT93u5wjgmVb3CTeR2CDbxhToiYuxADb59pp9koE5bB44mJ825hm3UHyoBHnK1pq5ApjxAaWbC",
  "key6": "qf3h42zqkSTujMaDRhbkA8x2kANgx6pMnt9MwwRRCGfdduWj3T4kuepc5y25x5ZEsVRKeo7yGyKjqq6z1oVwpR5",
  "key7": "Pgiy3RgiGZFJUEZSRDRvyb6mBHdtnX7MZqocZCqvyZvYcGLAV1aH2A8qcPq6pSqxCn2BazTZpPgPbTaQDSbJKMV",
  "key8": "24kr3Zsp1ih1QZZQePXVHN13ZNytTWCUgqhpY7zZVTFhvq2Ha9jP1z5g5oygV4gidVRNDzzsFodL1T1X3PkwGsnJ",
  "key9": "26xM1Xzm1CM7aDz17aCUhiHj8odekDVvmMoivhfMizLtcRDnoeHouuqAxarAtAtvfxnFi52KJkpB6hJ2RXJXfVLK",
  "key10": "44ruxAHBDs49U8YSRGSefdvkfpyTueGe376huZroJqzBpmYM6dDrcyHCjTzEGFrWCCKdSuFvVj2LZ4R1ngZb9R4H",
  "key11": "4UqULj599joQ573Q8TfsuPhhQhrv55UumuCa9wcEaH75yZzpooTszNVMgL8k7Nmivo5we5ETxyVizBpxkk9QWUTe",
  "key12": "3PKFoiwnEhTpM3xfJ4FB7CZQhEXBZrb4Lq4QoCcSXnbGWThYxPZhB9K8uuUx58VMQcinve2fhnCYTFprvrj3iPGd",
  "key13": "2yZhWhR7C28xMQr9CcXrFkXTYkVDgPfhTDaMas2oa543ZTXYkb1HTfGB4LTrDDhCPmyitNv7VmdKitBfnBMDtMhp",
  "key14": "3AhEdzPzp5PWEC2nQUDKD8KorxBm72cq8ZLV5RCSU7YnCpKEGp8wfS2VTUyPcZDCpyRw2XP6bwpD3XhzwdeRLBew",
  "key15": "3yGC5t38e6QDFX1dyeGLnLrnhwryyzQyWuTLPj44tYNC4Y3zDmaH7AGhDFx2rjPLeUYFpTeXB7e14NmwkemNUFLK",
  "key16": "4pmJqgH67d9mxCbUVeFqvodSrQypEmbAaF54e4A78Uqvazes4F4FG4TgYmBWaFDLVkJKeUQ5EbEihKsax6d9PpXr",
  "key17": "31G8QF4zmXtDmjmx9T58GoBjtscJtwFCJ7G8rti34Z4uoxHfJvyDjyTdcwArdKp6A5DjYpr97Z4H3jR7KFmbXHu3",
  "key18": "5YcycXivgL7z2aVSZfYN2UzU7CPGyfq8APrEqe2RzbsL7LF41fo8xHJ4GfnBfhE6TBva5VGEfsJNJfXZ5HtbCyRB",
  "key19": "25eJiPbCad76TYP3h7xETkyrFS4Mchy2wnzRejzf1mn747Q637PpPzgCGuHEbtHGg6PoUTCvzRvzPDwS8vQBhpWZ",
  "key20": "4AT5TcReffctt5t4XW6r2mqERj8WX6qFtbnATZ9JNxuwrcz2MWD7enZwc99NarFq4RNdMLhm6fnL2LmpLti8hAPG",
  "key21": "VcpYvjYCormFeJj1ccJcvJZi1y54KuEtMLg6RTMMxDsRsFMyjd5nzQzij6FDZSkgUgNs75Gunj45DKULF3m7Tch",
  "key22": "4JHk2o3Mu99n6dk6H9rC8XYkcGYyrn3xZBg18UdTnAdvqtNDr56hXAAjKeuyVNPnzmWANtPYi7WwCoCTX9MNuLBs",
  "key23": "3JQNTgJg2R73LSRaB4aS74DBBDge5uNYiQSweQuC7vsuoQhuqQTpT7cmaV6fCvngUw1dp6zQDzkCcRYAezQv5tcb",
  "key24": "zh3duYm5PVp8Y1GoCwq3Ur6f5sDtpchAWghpXZSMFT6V8ssZ2oe8yZv2r7vpczqkfTbbRejLQqSMoWQfrUyBd7f"
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
