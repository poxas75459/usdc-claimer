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
    "3LwgNDJ6qS7HShCcEEeDBXsSwsHK8v3kXzCgTrFab65g1bWKQTszbiGSD3B2yfYhih54NFwLHSGWvv3Kt6yat26Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27HZUphqRxGvkjRy1yHiAhsgxBEZZktR9FFCv3gJptokUi5YXKDGE7drmfwxxxRBo6BApouMtE6ry5sN5TauBisS",
  "key1": "4gnJfTrBuwDQyRWNUcwskkHiTtaceAWxDjzNdiZ6p1dthR6P6myrMtDCnDK3gYPjmfxCTZwPqiAqpkXboX9caMdj",
  "key2": "5tNEXqTA12LYjmSHUjNDG295uT9UYNzVvztNJr61VubaZ46AjtiG4zfGxgWyjrm7kPhS5fTyB2DU3CJ5cFHdmFt8",
  "key3": "4fef6yTB3F5BefrThu2KHasw3TSTqHyfM79d1QmpkhRZbQB8iHpDZErrf76uEEgbvhT2xperyPZ2WcRT9Wn2ieJx",
  "key4": "5B8xMLZ5uKYfKqKSX34ZgWzxVFaqhBBhuvS77p7tL3DrBqNgusTEe15oxDLXtqEQg7oZjoXCMct8DQLbz65L9SEW",
  "key5": "53Uus9u2e4HqjGRk8opBq88jTt7sBUzntmgrdQHDQNputCdDUt3RfRBv46D29eXbCaw21QPHb2XZYmpPRZDfprG2",
  "key6": "21atMY9vzQSo2nQj99HYRvV8ZmS3vmAJLWbRggeQneme1vrCZAAkQYBqJUUq5U94aeYubkQhgHc37KbGyBPesyos",
  "key7": "5nVKHwVhvAM5Fw75YNnngFnt2QZYJ8yx9hpv5RR24BATsS5PnbfVuKPCDGYgdJpvPGuESDxvg99KqY58k4Nw3nJS",
  "key8": "4S4RqsANZmhhWiGMVwyRCU32ye1yrBHctQh7RkNHW3SFT9pbxvBPXxfTBXLsG5iXLpUhgYLufjvPm2BUFwamoLCq",
  "key9": "5MyTfsakmiXsrQq2Ummcmso2hjZfNAaWeLJq5EV7esUfsVZNMGq1AqJ7vHpnVVNhvzBYruRnTMHCEtDdMTY8vAy1",
  "key10": "2CRg1rb6wjiHbCVvmNWWjBM2KJZgPRKHg2qmgWQzEc8rRwgugj5ZvQ1fMSj8TCVUuQQJZFVqyLZe1v4PNPhsRmRw",
  "key11": "5XBhcukRJ8wAvvhMV3rcDfVpRNiCurAkV2qGge4392JAKfDwB43C5Twg86dbckRxntzUKeLZsBz6DHasAwm1WAm4",
  "key12": "4MMCBJmp2CdMuBokTz44oZ7MhnynaKUfPM1EP471rMmWWqdWszY4kiVJGBLfz5uRHQBJFQwKLPgZd9RfB7Ejr32K",
  "key13": "589oTDDe7bUatCSV1bbFVBcQZSZP7tP5dqQqFRL9oGs2YXnFhVivikF2Rz9U15RHbikofhGQewm3gJXzKL6AzzAM",
  "key14": "4KrFhGeKu1xoD4UaWig3o3pBuEEyjDMnSHci3uuswSDRkCZ1ab5jVLMDW1LsQbMQSzSK2czLH1u34DRUpQnqbJsV",
  "key15": "3WVGowfCLPbsKzixyRP3uWecorFE5j7s25wCDZyhRhxCsb9W2HKt2xkMMPucSCbYfBV3gK1s4aFN8wJCgc8x642i",
  "key16": "3t5mD3nKPCiCzNTwKe7w5gzYkjQPa96VtLKS3eDGAzoaH4m9qmVYqB4b7UzGYHyxjG2MHfG2t7FF4oRdobR6qMTa",
  "key17": "3mMngKafcY4rBrftDNKJJrSYBew9ngD426oPUqdfKhimtXRhuo9EcSmJva3mgD57zsJsTwkvVhYtw4t5ETYwnDnV",
  "key18": "2NEr95SxfXmYaDoNYyPsycYaomsiHybDeZBgBjmTRthQAtxnkwTRM1FQRjuoHZBRhAcu2DX5o8RAhwsdj3zfNtp6",
  "key19": "397A82a1BL5MKQpQcQvTw4NNbCmBrKfkW7iTiTRyMTfK8YwXiPg2vjciyDuhUcpPF2xSSe28bvqgCV3FGuHfbiFt",
  "key20": "E8W1M8veRPJkrPkSogGh2vzAPuzFXgcGbAMR5ZcDpLwsuFzAFZHUaXpho8EUtgR1DxnVQX65PYCBanfjRNw8Vne",
  "key21": "353nKHdXhvgbQoT7jo57NNxFmXowzVdJKAXVr5U9KucqbcKMcX8PvkgUxdmeMAn3ZcrgW6gFTFduaRKYmY7N27f6",
  "key22": "5JgAfkzTVtB3ZCRcGcatoigo4DsHSx2rCrKyNiNFMbqr5QcuQEmxicKiXUbiUZxgHXVujpWRvdxZ42eNesJhSttG",
  "key23": "42Eks2y43WpcBoZcS4e4uPFxMUdgBMkcYf1RLjmpVnWYKyZ4SGLxpYC8CPAjwKGWU97YeABjXS3VfZc6aLDTNgBE",
  "key24": "5kLdRNjA2a28jKR4rCay7h1F7GgDiSKGadKKJjWfRansTjyjmt7EZC7muF9XGfygUtrXsdR13HUM4dcPRQmcvgj2",
  "key25": "2kjCG5tdSTEq5hQ7GQjgBu4BxNuAB5oZFPbfoK4NdgBQCJGNri6W3DC9MuSg2GmzjQm2Kh1rk2ad2VM7bshwyYiN",
  "key26": "2QSHMDXUKN2sYSGEtnGgdGC1jFXmiTtzeg4mmaUwKBYbLcUPC4E4vh6b1qb3Jq4p2LJKB8MggC1zBPNPRfoMFS56",
  "key27": "DrqGHbezP6ARHu8jw4iRemyMnHRWoPSxz1dwp9mCWZ3fcqyKR3ACEbvy2XiLTUgvrxaAjaSxeGstE2ye8EF3RYL",
  "key28": "4T3xiNGmyGR2YeWwE7xXgWZqgTRprXXEt3HcBo4Aj2bD9PE8F1cQnu8ycvpqFdP4FXrxV1UwPMPwk1uPwfRqrjqQ"
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
