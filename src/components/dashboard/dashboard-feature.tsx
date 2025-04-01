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
    "4cFmtqa9AMpdZbhAapGKTD1XuDD6okeeBaZ3AhUbmpthUsSB2Wf7eu3rRQxMBaaKS4zQVzPcmhvvGUbugjsiehM5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gr295vATxkRciM1xtQ8Ge5ngmLQXuAKpD1obbHuFw4u4ohUbNyx6WkQoT61Dt2x7gYfcjDiNZPoF79yqAc7YtrJ",
  "key1": "3FhJbVYPsZMpAfRKpJqFKgmvZaB1HU3VjMnM3JNs8wxgmLQH681UsBiagDSm67Hegz77E1FR1KhPP9U7ZtrNxyYb",
  "key2": "2DGBJHpHvnwukaKRUGbcAxdY3rkzDuXdxiZC6FWcgMNiugA1HJ8nEsL3UQfhUSFPaNFXmw2YMisNczjonTFCbM1D",
  "key3": "2CUFCprcpsc5VFp4YEZ68GT67a3W1f4X6R5yEpSVnmkybdUp3cbmATTo7ViDCoZLNGtEL2wZgWPyaYaQD85QfNZY",
  "key4": "2McPv2n4HBfUFwXsNvve3QXgErgpfkgd5DsUdxeqJPLU9rwRmsCemyN9TDBSbwAywp5mAetBt6NepGwrLj7VMppG",
  "key5": "2bCa3CepSCxq7dYkj4zSPFqRDqt9DRv74FZS5AyX5snMcR96evUFfkS94KFZXm3WnnkXmNcdtB5MDzcHKZ9RHyxm",
  "key6": "32fDjQnr65skiS8qTVQ1Bi9LAoTV4i3qFJUQX3duVCpDPKyBpYvBWubnvJfqiaVTrMxHY8Cmu2Lj8HRU2vDK9wRL",
  "key7": "4i4TJWDY9FkRrUg2UGVfMWDk4B4YQYn27Kz8r1PfpzRrYnLUHWYv5D4rXUnrgceMzm2iX3drXKtyg28yNLrQV2jj",
  "key8": "3ye8k3XMJLza2rupLock69KqNvEHsL3WAxtFVLVhvBnCQFdrqfD4p7fevQoCnAKFEmsTURSZwFu7RZSnpgiesBe9",
  "key9": "4EFYkdsWTsv27wy6BgnYiHySbnPZadgefzAQYawGu5YfeDAMFim9nmkMD8gYdZk6ayg1zCifXRRPACj64B9K6zeC",
  "key10": "5JFWaKdZWr531C7dCXo84tmdibY59ufif9GJBec65Twveivj5k9g9DSBd9A3m2YsML5FNbjnVCZYc6Q9cTrrMBTC",
  "key11": "sBq7jLh35TCNLMK8icJZjBV4ZCjhgET7ipQKAFYg4Q1XYnHJ5gL8y2KPsUDU63gqGg4HJ6Vc6LRBYat4HJLYkLv",
  "key12": "5bn9mvqxSsWFXdB5MWfcufu8ZoccLRNr4BicHNV45AZQpRMs71vvKkF8PuoEZP9EC89mq5BoFjFH3hXvztSZtpeA",
  "key13": "3Q6zgHMsZgcpqQxxRcCrNbFRd5XVCvgrseaZvP6aJM7LULsGGwJE2qLw9s3PPSZeM9s1jdUTf7gRKz2njUerS61J",
  "key14": "2NLsV7ViEq8fmtPwBRfDjQMTJitbcd8LLqdWwWq2pAaMP6opRcboTTuvoCsD5r336ZXDVyBJttHS5aHkrwdVh6L3",
  "key15": "65ZYZ7QVB6PC1oMQfKHnXqUVCUb8Fud7C9c8GpqyjreKZYW3M4R5Z7ZXehAFmVJjg2kyTSXXmtcq2PESet8hwGTx",
  "key16": "XABahNoJu6xjrbQdFPPZau8E37qWCyAWPyQspy636g4uRj6CmeRNWuTXFhzDdzPYTEcd3kJv75Gf2s9Bhd61wkQ",
  "key17": "3vfFxgovnca4nbgs5j1Da8STQsvWA9qexT8EoHfwGQjtD4i3zdiGemET3XfPQAg6AKVWnnZU1Kh9dnLRp3ewXCnC",
  "key18": "R4oTSMZukKyHFnwqnWZxo7asmKw9QNnf8N7QQLafZhV71GCc7bEXD7qFmyF3RwfmuBcNx2256Yd89dakzJgmY6V",
  "key19": "2wGzahChgPaZqemzGAM2g4Qxj2xPJF9A47t6x5er73iqzbNyaFfqoXrFn5FDkcaQCnMuhvqcebvDuxCpyuiuxxaT",
  "key20": "3QAKbYp7ChXR5pQ72KuqoX88h5poAWpiUgtT26cDQQjedozgFZAVQVBjbkUD92b2zv2CxNeXNtfPQzbUTrDkBsqP",
  "key21": "3XefLRoFkzpKctRAi5g1bdg9vtwsR3C6rBE1gDcHmvsDhM5sg1Sae1SLs8qG9HXCLHzvUh2ujsRywrgMQLg5XP8e",
  "key22": "7RYA6TcnKeBYUNWNcoVfLGNVFuRWgJ4uaktRpdcxJEPDgT1oNPwTaQKnKp7Qp1Y4dw2Y3gKjAKHZhGBZUiHJsY6",
  "key23": "3r9Uo963vdprb5TVzBCFrAaTfECKtqAWiBMwpgpqn58mSHurQmdYRhpeJGxXHHmZyKU6gedF486zgsq4PiQMYxWz",
  "key24": "xpkoCmY5DDAiWb7Bne1PShKG76o2dZrKYmBmMJzg3NqAByATkkdUrThVvysuqsvDS2sHWMmoVkm4J1pWqrh6cJm",
  "key25": "3RC1CN6nB3p3f18kLtMHDUGi781hVCmnsAu4LAS9CFcjWiKKVbt1rCH9MS9qA9d8jZc99zAQgsVGHZoQ728GZvag"
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
