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
    "yJCnKQn6S8fk8cFZQhBhZXLyhmN6gyh16ARi6xG8EfEA7YgsuXwdG4xpwmjw8LbvGEDZx2QhfzNPF9GqdmfDVCq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DKrVosjpjfWizNa2SGPVvRQpzZ3NjX7oZnF765bwFeJZaVd5WE8yjoE5o3WQG78ptPKxqG5LeeEEfTKKiLgjkst",
  "key1": "5SqfR5x5aHLqb23kZ4qFhv3wpYL6xte4ioMfHvtTNEmgD63BQSa2xvPNzJqXpjzdWuHtGTuskM1zcXy9WH58mFaZ",
  "key2": "5suhAe7BFXSwCACiADHrmGdedVB5BCBCdS4ZK1b7FZx6dwXybtHy2xLrzRf1vMi3DsEnXeQBWD5rkw3mBc8cjnEE",
  "key3": "MiC2LDRMtUWH3nKkZYd3zdcgiXPQ5jUUFeSh5bDQmnVvCKPeqLnzXdLo2L1nfzGaqnY7X1R16WWLp776n4Da2fG",
  "key4": "HRQhZgw1NPd2Mstd2i5kHLnNACdoBYK2QyPPEAA7ZxEQLWt9agX8nqx8RFvXTbr4s1x13S8YxjJeGX8FKFZS6WD",
  "key5": "4cKV7c6qhqotqS5K343qA1qeBdNWUqEKrfhAnrVHVVUL1c4ziCajojmRHGuD2thkCs4GMSxDEW4cM4NvEUM4ShoB",
  "key6": "47aYpBgd5C3BxndGfP6zmri8afbiMh9kp1dfH66142EtRWxPx5ZSxD4gP7swco5yo4rxMFgq8G4j8knaQ3oZ3Rhj",
  "key7": "67oLPQeb7B5PJeQ9EvGJK1eUs5tXrJXGWbNyKYR2vmceDo2zbTVT7r8VbnM51wxXxGHexQdamHiwKgaJcUxzYftw",
  "key8": "2wnW2zWkfU4uTPUuu8A6WGTwoKAwR14K7KeovfyzMkukpkHzc2o1FDzbAZEniDsGSgtD8UejcgHkhJ3FUDm8syko",
  "key9": "4RKmAHQr9TmHgWBbQfJiBpQVDj6rnzaNBb2psCgwV8YjW6e1NKMh1ZjDnKwhZXDptqPuqmR7HgBr8KKNHvqfpj9E",
  "key10": "3NU2fnfphiYgUfukpevsT737Vir7TnB5VefLCigfxFuvJVVrqKe7Hn3uaJoESCyLVBW1dDLt7DU9PcZtmX8mH9no",
  "key11": "vnZLqZdvW15utSXViVNwstj4LxQcG6GHFnvmA2Y4pV1GLom4LH341MKYasb5gz7rUdNvQ3VjjVjudyFU9Hk1yHA",
  "key12": "3NsqWe2t7auAP9MS85V2pwzvBRxe3DVjQLtUJpouUomcZ5J3HnEM5wPHRjWbR1yrPymRXinRKX1KZDih9iUGaa6K",
  "key13": "21ZcCqzkNYGwCAr5dTKGDnXdvhFqHTK8uVK87oX2wRsDXuHemWd2XUih3B9zL1D3hDAwYPoKiYQxDGCLLf1bfJqY",
  "key14": "2JA97HqQm4oTLzCiHb8cPtS84fRYbpaJSs3wkEDKaySMWuktKMPb4Yg6V5iFzYrKhtirYj2Nzq2ATiMGeBAigbJr",
  "key15": "4AJh1BEFZHVce2y2tYcfJma7EjpvZnjPJV7Rp1Jmd3r6QpeJ6E8VMfiiK7yvtBCH6eGRQ6SqPoCaDWHEXHPjscXu",
  "key16": "54HERMo4sUc4R5vJ32DMgjvoaTEtbZiNcp2sixU2vF6BkcVczx1SCpeesxfAwu6GHC79MbMtnmGig9PtNFM46fZV",
  "key17": "3GF5A2B1TTDnBMAtMnuK92fc6YEMXqRJ8TU7JNJQ3P9BJDZ2JT8M6MeLFSMLnf32UB4o84jTQMuhVk3fughQdtCe",
  "key18": "51hL4qVButg4cTZwFnBLdSjT4WYkkUFT5ucfdr9gwnCXr9woX452gzCQ9NY3fHHwBWtiw9ToZcR7i4iQ5JZymBwR",
  "key19": "3fW3opo1WhVKcWrNXmp3SibPqz4cbNoB5dfpVX3xPQwSv6rhxQBeAc1QRyT5WmZgHxp2pQFpqgBpbayPEGQvPtBA",
  "key20": "3U5wQzuq5NMxCGPSMsyMUAVBT15EZ1me825fcEJ2n9EZiVwaZ3ZqS2zeviEY5SP8N3uvCdffjrpw3Mw6FryZnEeH",
  "key21": "YMizh1CwNN7e7nMvU5zH3B3PoTbmGyyX9KYH4XtzZYzZ1uJqKdyagoFH2TGPKk5Kb8AJp6VywJbH6zQC9CXH6DP",
  "key22": "2JMeMwQmJfdmepfauCKMW6kF4XvVxseD938fFTrVHWZMf3s9kj8Hbzbz8w1ABxPgx3XqUVp5Yb6cJevc1McCTg8L",
  "key23": "5f45jNiY83WRBA8U48sKNF3VfvoUgQQ9VcUkPxBs3tbuJitgbGFt2e35CUNejE1QRS7EqGPPh9RByVxuhyT7FBma",
  "key24": "3HwDRnkYqvjrG5G7chwDk72snmrVMCmSbTWe5PhGXGJ4dfrmiNtWUGKaXxLW2uQi6Jffnk4p2DTEKW7uTRyCo91x",
  "key25": "4nrG2YGBVwu2ktMhczWEQ3ZCh1mnuVYtWNtihHuR89MJrgXGr216ACjMD2xpyDFkqqAzwhSZoKVQ3cwjSC9nkAJU",
  "key26": "dth4QVwKGxQJEuPx63wXEPmpuziMiqafceAQegn7VBbedfJkXgMpuCNiC6uaWXZ3uRpiikWZRfjuwyGBJvxAhem",
  "key27": "3GXZMrCvmv5D6xZMjR9NN5JMD68prdjJpJ1dVEwZfcEgqYvZjBuMgVQRVnZyNaqor8RMHrpG88nzho9zadE5p1Jy",
  "key28": "3QU2bp96LKV42HMQKPbF7L8UEyHTMw2XndPQMAPZ8wgi65kegzhzWfDKRHhX8rxWz5quosL2SfptAp7X7yC2i5we",
  "key29": "2upPijSSpCL1wivYjhaMrpJrTHUBH7hvEpBNBuRrjW2tVxhWQGuJq3RuoAM1WYQxEieaUBZmvMsb7zpf91S9tLjs"
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
