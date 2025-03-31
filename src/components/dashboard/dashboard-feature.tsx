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
    "44oM58u2VsMcEzB48U8Vb22iXqwvqsDFqDP7LesQMyrLg9NXoqgELXCd6piD8kJx3KoJ4BKXHgzrq6LQLBNJte7R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VfVMiqxuNE3ibE18GyYnNKeYwtet661RBa8Rfscnsuj8F1UEeLij86Wf4YHiwfXV8NdpiGHqUT6JHStefLYgmjb",
  "key1": "5YLzPc88N2Vvs2RmLCqrpLVfrQd939bRSP5XzNgjhaBE2NMVU8D62GcvMDC6D6XiRUPexTe3TAtCw1cVyinkN1L4",
  "key2": "kBAv7GrwEXxyvApr9EhZyVLCrxB2VMph4yuPpKA4aYtbLDSn4FkeycQHjruxBZuDutbdG14qmjhTnzYmaNyT2bG",
  "key3": "3oWApEH2xmBUTWT5HemkwnhajjSZ9DnfEyzgSJdxtX33i58W9zUgDUr1vh6p5Rceja8VtRdT6CRNGYdJfKqTrcTh",
  "key4": "64M6KCKKDiu419WSa4MatWTvvBsYoJuuENbHDcaZdj6tdfJKv5uhVDpMr4qfm2stmCio1H83ySB9eYc3BBkiLpiQ",
  "key5": "27yz4pkudJqSCx8BhQMYP2y6gc7Jvs4nhs9gA4SzgEQcUbrhBTc5Z3NzHBNt6hBsYW1saV5wPVdc5tqiDqDXkZ5h",
  "key6": "5gxW6gKQ6ZhY1KGrCabcHjF9ddy3zBzJhNhLUasbLmNfjLfFfUXxVtYodFb9ECnv3yr6JScHGunjdyVPcRtDymVV",
  "key7": "5TaAYEESHjqHVKRWhYqaDPeEhM1oaothPMae6KnaLJMn8R4wbtjc2TeQJ5DYzv3FeTevCNJvn93qtQ1jbN77rh3y",
  "key8": "4rsKgdxyafuNeCHSTHaTxmMEJFFasaSd7H1WCuSo1bQkeVgzbhjCciCpUsEaMUdqY5imq4Xwvyszk61qvvHr7tNa",
  "key9": "4NK43LZUykUWeJTKoQsiUy9Wda2rLzYNuBKWAME3ayDHonAjehwwv2hX7ANDaBKx3cbDKvNesYgY8ihVFovgBcEA",
  "key10": "4pgZpv9RxhPXsR7Wv2EKFcWc675ng4VNfycQYfpb1SbHXGxkT4CXxZdCAke6jYoMpngdidtG6CXxSovmTgSUL7cE",
  "key11": "2heokjV33MmRe9crDjScVSAFS83ntuQuwRiNhn78ncG9UMT73As3wHSKFYViXuVKtemi8vUyeubm5Lp2r2oqvw1J",
  "key12": "2C69hwbenF1B9oT5vJHTwFrMqgDT8yzEnkm4UutL8r214fQzQSnkCmUfwBx3a15L7jALQg9YBSyfTf28Yarwv77B",
  "key13": "qF5vNpXBv4FWJHCb7oyVGkrntoJ2mG7eM9pmdFa5i86DYA6ZELchVtfm4jMFpavhdoKD2eHepv7DmxzDZz8xGJ6",
  "key14": "3VxPERj8jJQYGscqkf8NDhq2ievKxWGL7qaXTpZqYKRWZiePrKyReAHny3bTeZiF3fP1MKpGjJproQke9HMFjZ4v",
  "key15": "HFpZfZu482NXcVN97FdE7rXArBRWyNcmkvKx5EZ58W4MMgSJ6VEKLaHtnchGuSJ4upRNZKBKfAv9VpeHna413yn",
  "key16": "MYTsQ8L9hQECUC1NbmGh6Hr5vGESGsaeLbUYTRKLxC8XMRXsrKs4iR4jtMx4bLd8THZgGbEPEXEuiAU7gBMGVcn",
  "key17": "5uuRRmC1HK27cf8TUuFioxnXgFbtZnWixVojF6PZXBfAQmR6Z35GyQLj2VqUmSVrBz2NSvxZonLTmtY4JyLhNNS2",
  "key18": "2Ez8L7ZMq8dzs6AfQsjnKp8DL8G7jcwEa6xK2dfhmUgLKPDfrg85efZvGUGM7bvQZZggeK4G8rabFDvhPWGGNL5o",
  "key19": "5dfKXV6XgPQdyMT6ZvSrnajcXDp9DixzEupARgiWdTLJpQXGjQRq4ZWNMLrD8PmYQ3HHX1t9w8AeaypHnaeVSDXQ",
  "key20": "3HaB1ZRmi3oi1C8a9XaX9i2SjoUjLPGM2owumRugsBWXAJExtstS6P1Cb2xkdzxcqVN66B7phuaBxaTEE9LpNvbi",
  "key21": "2vZHvocMhWsTPizozjDgA3B5rw2QF1p3D1NrcoJdvrQHZxw3WhmY56XzrnvxZcdWJxpkg2Qdpvj1umNaAxoUt1Js",
  "key22": "4iFpDPF2Vy4DezasPmrAhuEdQXYicaqrwPoUzBPGFo7aqrcYw11XWFWgMK4K1CjrAAVZKRtCsQ8dMMY6Can15zCi",
  "key23": "Yh3cePotWbRE3v3sUPfPZinxdwiRZMzXYmoZMszUV3mnc45qNVRK1gev5Lb9nQGD6qZfQB36AFkxoMozCX8ut7i",
  "key24": "HmTyJrjQFseGDCpMmhmPNAM8jNNrTqi9tjxP2EQDq11fbDCEgrsAQHSHA2AvXfBdJ7NYa18RteLKGKj6KUD5tTq",
  "key25": "1AzBGp3prbnQLRYVDP42xhSSD1HA4aZU9zU1sFAJGUwzS8nBsbe6yHfRARCY8i36iqMABWpbf6X4KQEsodSnxSW",
  "key26": "3pWKamKHipTnRfmDtQGTEQioJ43E7XFbNVBUmPM3sSjenyU3mZTf9qrcXQ7LRcKsAARFnT2XjpKYnNQV88TfRsNE",
  "key27": "2szS1JtUSi1vvVXwAeLL83SjpYJTQ2yLwEbg77H2G8H2hKLYQNNXuNcD2Ds2gFRbvDohVtuUx54BTBUKM2BaUSzG",
  "key28": "3ENsWk5PEeVqyAZX3ZGpNLJo3bjprtjihGLNDdXuJkBiVcRBL6CDeYejTf2PnTKAaeJwT5ADrbL7uVQ4mBHmVSRw",
  "key29": "3Lixkj1AkBTv8SLfgFNBdDvcWmd68zbvuHkBUJDpv7TkZMJ7kWpk6aUfLGdbgSMGZotmMYx5ZYS3ktoydxo9hHJD",
  "key30": "2RpTD13nig4CDHqA2ZtzGGcmjLfbx5TNLcADhFBnvPFrDBdVMWobov2W8jHxDzPusAq5Enorn8inz8DZvQGjb5Si",
  "key31": "3PnRWPQ7fGdsSd47xtSPktedBTHrS9bxWLVzCTUCqpYTUQLj5TLSEsYqRQ6pyUZ1J1G98VKGUxrTw5L99q1XnD85"
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
