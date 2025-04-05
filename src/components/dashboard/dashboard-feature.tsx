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
    "5LbFJ4KP4rpLUk4z5i86AGyDAEQoPbVzhLdLnHQD8Yh6Pxbtym5ERUeouZKJ2x25YUxVsUoM9CggAPEVBN7ZvBfR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g5rEJBSPbh4S9RCMHoNCYrj1L6s8WMD2CoCvntsgT924M3CzrE9KeioBNku6AKqsZt542eAro8hJgb1NDzJg76V",
  "key1": "2aCFqaYqziMjK9QA4bcTNzkQmXNDrykRMZtBV8jDgvLQRFK1RUcbW6nBKyy3FmjyGUMg6f5WJEGp34zLJxkkL5YM",
  "key2": "5N2KsZ6YjaCoVefLPk3dZUZiFSdxe7m9W56yEdgvaMS5G16JNd9yhCL8C14QRvwu23SBwjH4CKJxQUxEYYz3sWb4",
  "key3": "4fYp8p7CFjQxHi9HXYkoRppHHGPxJ7DZdo6KZexnZicYkDbTRyAimmYC5so4evqD4ph1DUknMnViCgoZtFg7ZBvR",
  "key4": "3bWYCM3PzMXsJzVDabsh8QFR1W8XsARhCoBi6QgHJtVwMJEAof2MpQgLe1aA9Z9mJaswoLAWMP7yo2axiq3dS97r",
  "key5": "5tLzHqdWyWZGN68WbpfWsbNGntep4UQSyiNxB4geNU81keCKAfs6dkNiCpuKmm2rtFiZVr8gdCtRFZrBaQLNQYbd",
  "key6": "2Ksmgxu3MYRAAwVYRtCdmffZNegEbdTXnmKfU9zEtD2egGYvqDwLG8FaEgBycoGJqjbcUudm2QqdEobTnyEJ1r3a",
  "key7": "3RBW1ryeNanDk95PCmowHRDjHE1Uj59ETF8HyyFJPLLgVbNrAKvXv3b4ZsNRVVDYi6vg8wWN4MhvMc2PRYVxc1E",
  "key8": "23whVNkPvFc4azo5iBj1HkaThCiAy61vRL5oiTHtaeAVVZKFgrivdsvJdmoMviDVB4WnVAA1cuqqbRhnYQ2M9T8Z",
  "key9": "5CeFGrRCK14DAZVkGXFYQK9DscwH67SFubmaJVgcnpjgMSa9yCUNDT9g5Aj1yM5168GEwCXHoE4SbjCZM95VLS13",
  "key10": "5QBeqasHVmLhS8eWuHHYk9uLvmV77oyexwfokvGQMsup34Gv1SE3yxNVxgjGMLTPG4cyoGfdVf4uNjqv2hPsaqTC",
  "key11": "5v7C1T28oaZ7J1T2HUVWXY1sPnTeY3earLXWuXuihyMh9WkP1FQZyqv2UWcXL363EY9pbPbPEkAm8NLi32jUSjA9",
  "key12": "1EwE2s79esfmubNBGpPvpoDtpD7hDQgSpypy7cYn2whiBpCG6s8oKozL3ycZNhdSguc7rsiFr63tpKExJ4XzbmH",
  "key13": "29s64iiGcWpz9DUQe7cviEQCd5o3Lho82AHdkexTY1K7js7jAyGB5XN1qEniUFbAUyypFaXuNEJngJ2wQjAmD66m",
  "key14": "5MgzdkbAqhRZygqTNSkJmPCstWUwRd9C4MSzQ867vso9Szu5qFExCxCT8MNu5JjWRroZQj7DVW2mkkoYreQZHmUH",
  "key15": "2iUDv9piMMjHpPX5aEnioz5yz42SFjbFJ9McUH67pSHcHqSGfRYg4zjVdSTf3P9VW1y6Y1oghQfnqwUQevwVy6Jr",
  "key16": "5FERqgaa1iNi8fCnvmePJyfcGUQZ28ByriX4avEn8yzzudCo6LFAEgiGj4DKDBtrfWDGbzn49ovptXwke3xQmNXH",
  "key17": "WYjqfNKgiqSynAf5LDAbKmMfHiAhxT3vjbEsV5omoxu17QpDTziqMFAujQNabgkfM5srjKMVE8G4LMthe5kn6Xx",
  "key18": "4dEhbN2aGFK25kBdcAXPUELJUKRwS1H2jdWZGccEURDBuDKdTnECNPQDa42yC3wmKSNrfwR5rsFbEBvKLU49dazA",
  "key19": "VM8Wk3BPKphAvNo8rJuVYK54AFukkcipHRM24a913PnNkSH9btvwKuQz5MfyPXdMdtyirJ2o8nBHem1mS5pRB89",
  "key20": "2upcrLZzb43obVaSQuCicj76EQdvmf8FvR1vZ96dxbft8acAkx5f2HJ3pwEw8eiisAiDFuYbAfeyczkBXyuHfTAp",
  "key21": "3wxUTRYPfGtTxyGXwqVe8r64p9BPF1y86GXVB8dRTKoB2EK1XTzeuy1uFLkygAv9i3qFW2rX79ZZ1CohVHGQtrqD",
  "key22": "3Q5LRyYo1mSrx9qX7CUMNhisXeE4s69DEt5e2xzvmtKVU2cnbmZhjgnzTRoHSRvUu3k4Le1S4SFUHotmUpjG9gPG",
  "key23": "2ccm54uMU3tFaw1x6b8kfq2QZnd7ksP3ybQeQZpf3LpimvFHuWHfLfZTqcHXudDWdXar8EVBWj8s2FWrZDSf3YXV",
  "key24": "2x5KXdMBcUSk7EFqMQYQVJuNhaNFitFTCB2bt4VRbN6EBeJqdny4fdjGv7QBkKCVYeFvzJeBN7sgZrSqvKqzZvyb",
  "key25": "bmoWCR6yCFgedk1uayQaZGg5KS7PZrRFRXnHjfqumkxFV5hfEdzkLBJMsikGS9fEf4HhQ7JKhkkCcHqJQhJ7tkF",
  "key26": "5RheXzZVaRZG3g5sDw8BDLHe9FeHB3TeqzZyo53WMvYxKEzUS1C2jGBEmAQyfebNbphiagW4Yu1dXiknh5VWXmmT",
  "key27": "5gVMPrhXQCsah1TEWumKrwqc3UfSMETQXU4ACHJsbyif3Ai6segUNqontfgyeKzPcV16dDvbimRdtgWFpk9CowsJ",
  "key28": "62C3ZwAUbTWRHA1vFHrZePH6ffQpAq1RAcuCVaSfa185EPnZtVUHYzbzVAyGwrGMnJVNk7ndJfvYobM7PJixoTnf",
  "key29": "3WLY7FJmXF78Rqbo8A9kgfDNrtpyeQdjhdPMapW6DUSfAkTXs2PLwZceic7eLfoLWUsSg2nrovh9aMveZkwaLDKk",
  "key30": "4P6PkDtw7gsZKGpGNU5PhsoJXhwcBi3Jwnjp8u8YUgg3NmXBDFfoWyv5CtDxpqx3Xzeht3aQuncH7pk9jgd6yg5S",
  "key31": "uJDrfbZ1Ci7BAiwSTGcyfKEHWDPin2ZzXDSwXU3jU2jyDFvyc2tJchoy8ZeYCh61175sx63mfTpiAThzQR88aE1",
  "key32": "5eaS5jeiHMrp6EMGwFc8hNd1Bk3RZLqxtDHrNsve5vR8JrQ9hozbvvAgZgnb1DkhqmBYYkrTU3VeU6kfBxXYCzMn"
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
