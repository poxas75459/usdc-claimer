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
    "619aCfdcnWbPDqNfc1UGPuyeYrtdbSTPsEWPmjxsm2nuFy7zyUiwTc8tbr1p9jEtyBUh41FZwJ11RUQQt1y4nJCS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XdCGqjf11P4DogYBWiuQLbrLHQieNCD8xveX283gVE8e24Z5bHiToFHrH9f2KvrkGFToocuUVFApqDQM2kKAmAN",
  "key1": "2sqt4pb3KbDDyiYPaD9JnyhP6roG2ZN66Eib2pXi85h2BxtwbbmmKYVVY7Nqfb2ZcVirX5X4BNP3jYEuDXPCQqCx",
  "key2": "2LmBsTga1RNsHYVN9uJoTUtfXta3KxDR86jnyykjqY8GL1HV7EVz1iRX2fAAUfvwyrpjLTfVQKk9J48ceCU7mk9v",
  "key3": "2beH9Ve5ysBWPFDVhcUuiaa2hMwN3SSGXmXQgyySCczLRVrchupB5ybntVZXZbfbavfeGQcibhdyeskcBL3kEZdW",
  "key4": "46e1cqrmPdvAqDrRGMhf2rgbQLxAuvYsQc4sU7RoKniE7Gd9x7zK9PWbww19jtQP2GYEBnGMLZb9BLtav3AdQWC3",
  "key5": "4hJQnG1ZpSg4PTxCegfxR5MPU1GwkeN37NpWiQqKLmvcYguDY1yeYMP75pKaLeWM69XkV6qjfuPeymodPjrYtZpB",
  "key6": "bPMieGBz2ZoxRxKhgtDk8cE5TqFu92Nkp54srRjXLMvAu5Zt4TZRBnn1XLJNZKthJx2sM1jFPDRBYVZ8KTE4vjc",
  "key7": "dc4meXPbQWVKfCcFdJNPzWNxbJdjkMBeN97G3uizoXn2DjzVoxPPbajCLNhg76J9Z28PukbMYHkiWJFakQ8zdBq",
  "key8": "5MvLoRT4Y85cZHQy8h9UANyDkSP3BkNzpD2ngmYBQZtZEuTzGEpCtCNvr2g8H9UTw6S7ZiBb67H93vGcba8zghZi",
  "key9": "3Rp2W51wC8YgcXa15JhFs7J5tnEDhNALgtUWwtkMU6vKwDDtJY8PMRzzuq8kNtivr5eFHYXz8hAMYpdnMnat9dLW",
  "key10": "2kxFTcFSDStzwmA27BAoWSYSboZ9uU2nHpJiABUPZsKBdBoeGBnQSvzPu1zsjjRPF76qT33wvNa7yFEQe1QQDkKZ",
  "key11": "4MV8jrjdehEpZ8G1wDEDGVrZYHjjFJbnazraL13AgrWy9MKKqA8iX9qFiZ7WbZ3eCbpHWhZiSLx9wy44qk5sS2DP",
  "key12": "2jTSr8Nq852UxGYybHr1yULTLMTWnV7zX6t9ey4V3rYMatF6AeUGmCMN5SaFuYTJPYwWuY21AVy8AP7fZni4hrv5",
  "key13": "3GRkWBEWDyNkoVBHzMqvMLmPrWg8DA4Qv6yC7ywHZSgzffqTfbPWuwV5Bn1fukcM4yqAcvcx6XnfnKhRo5BdkTc",
  "key14": "4gAjQKGyFECL7hw8dqt9taYSZaWoo1tmYZbPmoAb6mGT7QHbB4GxLpomxZsqFKWsECeNroRnFfUvvvcHj6FF71ZF",
  "key15": "526d7ooyWkGQ3aC1TRCJT6ewAhrC2QEwRWu32Vn7xayGCiwRHmZJxu888ddXtzmywDMoXGLUu9dX13Xgui5okVUW",
  "key16": "2nPw1DaUuWuhLHaqThDaiG9Gj2vDkNd7p5rQzv3CX29DRxWDNsSfH2p8TSrC6AaNfC3VqDoPW42M7kxRAGQPsuyd",
  "key17": "1uLKP7u6pLVdU9vmx13uZWVx4ee44nq1PTLtrjzzz67GDFRpvpENNiQdgbCTsD8JEWs5okev73bYuWVTmikrnbP",
  "key18": "2X3ijmb6k7ZPLwSQtbr4wnc9e1ATyQLhZmUwQkRPFYM5DnxrQR3mSqgSvmphBHUWBwnvLwbhH3eZuCJk5ABJ2mGf",
  "key19": "eXWQm8fT2jExzDLk272JRoeNTEay5b352HW72gCQv9ju7MxjGkhg6mNXXMnXdCgEnspzyyxq2Gp28b5ZcQNss5J",
  "key20": "29HuQMeqHzKTLA8b7enGJdTJK3n91Pn2RrhdyDvpe9U6frsqwbxnGsJ2pwAzNUzkpCZrxbgEXLJA1qu9d67VbXG6",
  "key21": "5UHJ18qQsJKCc8NV88kq1cxS9mGASoVsQuX6sjecdebPxyTXdLV3n2pAfdsysBojPDZbN3D8MMqtjmpUgF9QrWoj",
  "key22": "3QBBUWBQiYGJaGUZTNnA2NH2CWwqgj7LUAdjPuqVYWu4m1VPMbLQKFkGM6szNhpWLtWjfDYPXRBWRd1qGA7L48Eb",
  "key23": "3V7x4Y98U9Vo2fuxAWDcpiZmuKiFzoymNT2yrWfNdRF9YG8LPRcSEpp95gk6a5RwT8imvNmCqFwn3RfrKyXzVpVY",
  "key24": "AsY27pAvPVD9by1M8weW2vdJYTKVsz19DpdZMWCKFpZY4PaYyt8Nvzt6ZdLHG2RnhQc2HSkgxL9MCxLy7yFRLZ1",
  "key25": "32uGji3Yegt7kgNmhftgZsLTErzyWYNX5tmQ261fC92bwtpT3cqZSZFxLyqWizJ8shmcwEBpqcfvNZkdAXaj8HrE",
  "key26": "2BuuDvrZjjCAk7tduQhYNMs9MimqeMjWHhkXsyUo3ep3vVBcDGFWLizjC8jNzYAXz7xHpVtLSpq9DU8PxtGtei4b",
  "key27": "5fkL9rDbpsvbdbFhTFVLNsNzJBZYoY84kM5skK4HwCrAcpPrMVeHLPv4XdU1SDXvzxfZqPtbYHi5N9cLhGPisQkq",
  "key28": "2YumF5f8Ua2YQw5TYLSTb96UKXQTngky9NBXb4gWi7yrdWHkUNdReaWcScWUM8gbKPUA1DacAB6wHTumdijtk3d5",
  "key29": "3a3YbmgY98CPchSxoHdNCs2SqpB3yXYeq3LunRHRKZbhse8eumWiu4WbJw7qgcGsVJuag83JptcxTbSKkUTnr2DN",
  "key30": "4ExyVgShHgMTZMP6URYXUWxL6jSMEMi7gSZxeuYQb2LNLhcj7riEkdXd97KtadqcaGg9urcwAtdxphbvFKLZ3XMa",
  "key31": "5mD4rt57KVTj3RvV81J5e11ru4Q4MkXQfo6HoVBfYNCR4Tqka1UbpBggrLu9QGBuGjmYg12nHvqNwgvTHbpVoY9",
  "key32": "5LchHSG7ioUUmZKAAMYeYviuiK68AJWnym3x1TjgrmL1CAM3rCzb7mquBaBMyW3TcC2yTaBcNTPv5s95SJtyB6Xj",
  "key33": "4pBqn3dS7X5iGuxVkMxhbYh5hyKfRd4k2mzpZ5nsnAdGBUGaUFvqXrfrhuGFy7tMqkajTiN1Ut6g2Ua3ycszoPB2",
  "key34": "27i5ELCEwM8yzxQ7C6xS5h4GsG2oGMU7n82V9eZxgCKtMY8cgLJY9RnYVvzCUZ6ZkGxMEhCqusTxYVdg7VsYCGHr",
  "key35": "2QxH1YykLrJLR2Z3NA9eLEwAoJiFLFEX5oe3bUF3ZHgRdTmbT5kzDQjq4w6JJLC4DuzUrWRXWHXV3EUzCyTLHDde",
  "key36": "4ymvCov4p1ADo9zXDHJnNXQUt1S2cYsBVMmw7vgoG6uHVCnMBdBS519dAdBnGeFciR4HRSKh6QThPcfMvGmrnXx5",
  "key37": "hEupKxifq329e8AGtqKePVxTrm5oR7w5WPHdFgRazwhKg8cfQrvNva1VvHaG7pjhPdfw8TYaorjaBrak8TuMA1J",
  "key38": "3U4t5TymYQPuCPxFw5GVMSi3vGkMZbbhmh6MUMukXsoij6EEW5NQfXbLKGpKG74QPqSbh2HwDC6jF8RMqh6iNQrv",
  "key39": "CJ3AB2YGmBTiKS2NuqgSg6c7HWjw1rq1qhKrRd6cLssxp1aqHY925XZpCWUYMnJUM8Ay1azHnc4V9GTgjGHywwu",
  "key40": "2E5rJky1o2fngfRid6k7KmmCpNWXXrQZwNXSQ3mpqAgWLqK4fPSKPEri5BY9bVd9uf4yMYGFo2F13y8VhJg33nrc",
  "key41": "3xKtatb9AmnWroNDA66hFYV9FAZW1KehQBjUe4DU4RDzeKU2iqT3r11mnJ7Vrr9VMGtxybte169si52v4W5pHv9j"
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
