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
    "2tLeLb3JfmRmjKxE7MGTp8qZ99ubBqwXckQu8344f1RGH8fB1StcMBaXzYURLSUDT6q4EBS4WTaDHbLdsAcEqmNa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r8UpBB269g3AyYbokMW3wem5QfUe9Da5QdATAPs5cBnYDHh2NWF92h7tTAeGkBGUPRriX8UdADHqmw28kVwFkf5",
  "key1": "5oMFNjLqHbuf48pcyZRtsqQX7Uu7jL731s6Q7sadjfe1wqxnGFcy4XTiwqPbdNkV1hak6pSUkDD5JKfXpAUgPAWV",
  "key2": "57dysD4kPkjgSmE5M1psMr6mxPsoZ9FZnjMtmdXQgZWthP6WypSPXvtZrJdZ2WSqZNXer4pt36zncPUYHWNCxzAQ",
  "key3": "4xMD5U9nhaRB2bv3ZWjbGBpNHwuF2pWXbKiy4o2Jw8UHZLMUwsHgHLwNfDYkCgg2b9127KLvaLtBgZaz2gWvgdSo",
  "key4": "28SdjZzFkxtunuwunjL2yz9bHLWDeGwmMM2gpyb29QYRGD1onYqkQh7pxUUoGpocnMxDnL9pTGvTZ9MsrqYxPuR9",
  "key5": "4byGgWeEv6m7R19m3wcAAJi22FmHHwMbFfbuycu93Qzf3wBUzEESkx4w9ZbDRToG1HJNzMcYwmQ65akJF1Z8khQZ",
  "key6": "2b31n3eGZ1o8aamvZD6v9BWHG9oUkhoGpD75H2pkUXxhjvsGhTtZPZFiRhTpTkkwvgJ7AUHSGCEnNFhAFbUgjgg1",
  "key7": "2zJQUsTfapEqaY6y5xD2zfWvtPsoQJd66HbTU4urHxPPEAMr8ofrqksaVnxon5dRM1H8Djho14i9hTSF2VCCDJCe",
  "key8": "Xcqny4m5rvgai7Evd1mcxo1K2TRAmtxEV85BLFDumjvNy2nXnXEAzXf3923JdJuCjMLgcXBS7brSmEWHD8PphKV",
  "key9": "53KHTsfdRK3V4z28L3LPFNqcHLbW7Fy3HS4FnDBwbDy1LMZXKdCBN3Y7Wz6xnLryBMr7pzk6Cjj725K4C855rHPK",
  "key10": "57SxxUC2VpvkWhA6G6uGsgB7B2Pes7FiTU8ynPBfUKyp88riYPhvNByskgXWQfLRWDeY1FDAtpUz3QKHX8A95uVT",
  "key11": "4YASTxqusQEZNijKyKuw3bXuciBtcVzeuTpFwySc8iX7bupBkpcMAE8ggRZGZX8quFutd4F5yVLN5AmPJNtZVvT6",
  "key12": "3qtNzSYPjQ99BDbi7UNdKFPbDretgDvZht13Uqv2KcptqdJ1G6SnqQkfFXTisM5eYZm8Z68u6VFnn88GEDT3Uus2",
  "key13": "3MpsZ31svxwEN4dK8jG3Cutz634CFnaDWtQx2ZNXQeb4cGtj1Rr7VYXTHeJSAoE95wvjv4ApHET69wayMEPcxRVt",
  "key14": "Wxv3q9hYDRX4PfuoARFJjQEYuHLSnvEKMWHymSXAS39FfteJj3HCfFvGJupe65EKRnh94m89g1uWvenevi5JLVT",
  "key15": "2WSbtgNKfJbfGLQheMbPG1v8nG3AoPvUfaEHzH41PVyu5YhczuNxqxuuAVMgC4i8WXM5uTqkRPAv4GFHJGd29QRL",
  "key16": "4gE7ybJuB79HTtUKjPYJpTUk2iwBqSY5w3gvgZ5bxV6jzqE9vDCCYFoyjR2WcCvW7d7Tcqqaodb39DrEJDKfmdm4",
  "key17": "46NGjoFpGKAGwY6woCDFUeangDYxpuGjWRyMTdEYsRJtfz4exkfTWT7Mh4cZVskx2awyLVTY7aXB4NF2fd4aiia4",
  "key18": "5Qwb1JYspbuxVQ5F4NmvLesoXAXFvrvHJaUENMNSoWwrmH8GhXiSNriMrGvnfkJ9CdHdMphjxypFbZkkrEYyx161",
  "key19": "3VZG2a5pwRsudSFs5ahMmBiHT1PYcUFBZSjbNTUhQAg4CDd2RtTaEMzvJso1DVuEPzR6iAv3eEDLAoW7z42ug26p",
  "key20": "2SL394H9SSijycB4nBU29RQxHxAW73fWDCJZRe1eM6uh6jmK6JHubJAxsxbHxoykFfp8Xfo2Lh2UNRC6oTY1b3E1",
  "key21": "4TbzoLFuFJsnh1YnJgx9ZeUhHApiojHRKD6XyHNzVgoieB6t3f1FpP4dsjPCnQQYwq2CbnodFQVohWQuJUhwH3gB",
  "key22": "T3xyp25Xxp9W8hurm2NvAD7fep9mw1qysSSw3r8PqW3Jkpdwdoz7KRK5GVfDNRdhBACZahR87MrvqQYx9eHgiiM",
  "key23": "5YHY7i3sfq7XyUeT6BUdGGEyhY1yrCwt5Sms9ccZjLvuYTJjDXhrLn13tQvN3Baq7qegp4EBtN11tii1bF52mSsL",
  "key24": "5r1NmRHm7AV4iPRHVBqfPbGiZbhaBWLqAvt8dj5JrsvUzXvkGGF37gSFvDQMdxbG5H97woTxthC1xg7USjtae8VF",
  "key25": "5j1EL7xQXAa6RmtLJhwqprJeztZBpWVNohg5WgwF2tNETZDUpdyDbGU8d3HRFh4jB6HrSJon86ESr8xXYWWi7rDj",
  "key26": "2kHK8NUPxQ6qaYyaHzDV14jbiMKZjGfPa8wCqNknFAvsdB1gXJAEX18GbPpAr8Vkb73hHZqkASLdN72DRXxGaEFJ",
  "key27": "2b4TQmX2czfVmbGForUHeVDDsiFfE3Zcdzua3RqF5iAGnJjJmKhToiyHKLMWP6p6PjuY272RAtU8Rp8NojGSc4GT",
  "key28": "5e7rDp3mvK8wAiDZQiCmArTLiruzfnaUJvurFFB8mD3gdFqcvLNQnVUBZiynuZt15kH156ee9BTi83W2hZQyTJ5T",
  "key29": "4LNiSUSsn6fgYgxcyufuNg6CyE78wPY8jRXPtrhnyxJ9a2d8rSo7k1tSkUDgF6Aza3MsaLUke3xQxN7r3X6DQmwb",
  "key30": "4ZSoer5W5t43gtnAMP5wd7iWupbeh7R9xVEjGuQCHBijkQstH19F1zZc5VLSyAjAM26d1DD7ptGHWorZwPKdqX7F"
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
