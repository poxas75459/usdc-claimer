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
    "1nxZz9AGnXFZ2nkkuxrs1YJkC5bPQigf12QM8EcE6Zuq7p4EWw1kXsFT7egEFB3w5zHaY48vwvkrt8PQe8bddJn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4utkkPtqYLEBLLhoRUdMqeDz16uSZDuLoeuRAaJJz8P64ZeGrvSrA63Mz77ap5jRfMcFJBjxyUa6NXYrZaF9ryLJ",
  "key1": "5TXq7UCskzgPJRYdcHcdvTMoQUfJmbMPj6T7aQhVGqDjkUXYJowwe92USube3B9EE7jyxDuVdcikrYXmiuVSq1Nm",
  "key2": "38bZDJSx6eWCKVuCY1fZ9u1o4QCb5L94z8cgeyrnU7qqSKEFH9vMnTCnPTreU6LCc8F3wShadLxygrHMQ8CiYSk6",
  "key3": "3PwwLnqSch44Evy4eVczKNhx5EzCKrZaszX1A3x5Vr4wZGeCefkeKHz5MokQFnYNoPfennjePav5V4SNdxcgz6Yb",
  "key4": "3oyopfm67JgirDPCp4cGiMeU3zyTzBaGNq1xsFmLDUVaZyqyWN9PNSPwyVjjzSewU2LaNRDFNpQHR4M2Cj5kyxeQ",
  "key5": "5bqkUfEUjgs8GyVdUpgyKHjULdCMD2uwmBrXxDmaX8P2MTP2GqisbnYRKbjUNFn5P9wR1PqNoUsng5Cp8BxpuMhQ",
  "key6": "5LX6ZPM2KKjtQksTFRa4HyD2cWHS99US2qZirEKZ9h1C62XqAJXweRoe1uFJgs6qSMzrwKx5C6Q2ZzcxLthifpTv",
  "key7": "4RMM7dg1NVwyQcfftxYJNbJrnfhZviDQtF5ZqBfYoxYwWXPKDtBu2wVc9Qno4fJRi4uzeEhSTU4LPEQ2iQvp2ttc",
  "key8": "fEuTsvJ8Q8BW35uvEDHJcGkQmNHhe449i8vUsyS1XgXKooC6XYr4TQJv9CB1T2EZJiNgLNghN4WKkjSgE2geq2e",
  "key9": "Ch5ma5YYzyu2dKi5x2nLJtR2gJWip7H2kaFSTSME5b7Gx5pZf79Xd1SdDJFqsZLmbZ2JXU96Y6Hk8jLNPL2h5MB",
  "key10": "5FgQ8Gd717auG2VzHdw3vXeKN9JUop8VPossjtakt5fQ3op9zGav9W5YkEprR2dTdFYa3SqvADe4wJo76ea9v4A5",
  "key11": "4fJ6TNzdZtxBSk1QZuVM9RjHCnavhC28XgdsrwSuWHncNduixT88CNTdtWNipLJjCfRHbu4mAdsz1YcL9QKr8Vuj",
  "key12": "2nDUPZ5Cr6CvA7XWHpCJAXNuRBeQU24W7VunBvQ7jxwaYnbjvxqoHsEWWkGvV7NW6h49jofsrVVSK7zt2zBWTQSd",
  "key13": "5u8GC4NKSfEb2hjrWfopNqQ5M6kzD8WYc9jrsauSqywJBaoDucDaCzUkmLEkKfPfYeFap7RNFuatDxTrDE5Ahxqv",
  "key14": "5hGHwSQTv6jCn44srXVgL8uLuSCiahizmpr5WqDagjnRN414nUr6xsmKsDNB9Cr2L7nAdnK7HpWXqpaEaokHRVah",
  "key15": "5nUMRpNC2s94B3jNMQ1SLhvL3to98py5M6wRnTL4u7yu7khSQLB9WGoeHDo3BDfW1hhX9zq9M51srubwSZzSn74C",
  "key16": "3griogUs3ThD4xVVczQx79v6ynCJjH34QvuQxgLVSMwZjo24bhQJbJnfJPVPeraJta7KFzbs8zvad2uatSWiAxXu",
  "key17": "5BngFqhTBA7Dq5DuZRnfa16EVehExLXYtLbrWCBQtm8BMmAh1MVYt2ZggLKwa4XpAzb1Pp5s9BcZv5pFhMMLCTR3",
  "key18": "2RRNrENLUkdaPicLhbvvvAqe7DZzAeTbg17ebJaTTTesxHRqhPnjpUUNkLjrMiK2GP1AV3hpTP8moM2V5kispkUV",
  "key19": "4VV4X1eeEbwkq91cHpJPVBut996CrbygvBRzth2zeGZNEWTc8R4FMto5yM1HReNgHCuAM1jH49AAhixMwyfNFPoW",
  "key20": "CmBxdGAr6bUSJ2GJwrFMPN1pbc6EdRuy2892veyCXC4H9PKLgx1PvK7iVUwWeorGeBFCGFYxjsA8ymUGK483A6v",
  "key21": "3ZPCXkgHwpNjb8Zpk44edAzzbRzvxwMybwcL2xAkzfEb441A3YBSuYuPE26cBTEobbWEnMm5TamRDfbARRSFaYmj",
  "key22": "5PSFWnFNDTkdUUs9KgE6ToHvMWSH73k1ZcHuFebV7t5JSt9oKsusQP8wEsx8V14MYt889cVviF89A41NZQkFuFYf",
  "key23": "2zy7kXZvczqcmFNthpRpdYFfH1EZsYBAr3bnELw5S5RyEcy76DFDquPrfrhq87ABsdHvQq5HLRQ6ZhFntTUNAEbK",
  "key24": "4CMv5fXwXGg23iyTL3bMZTMg6FzFGBgjnwVixU2hScmg3TrhomxDpQ8JydU89XYvuMq4738suZbHzfvJU89fcNih",
  "key25": "4XMpL7ykPQWe9V9fM67RwmV1HmjEWWs6KFhn3sfee1C8QFg4c4vh8gZsKr4FpW97uicECTFBgc7PjRgoqWkGhA7z",
  "key26": "39mTTbEGZJS8x6pxJbgU5C7Qahv5uiThZ4NkhUu6YsLH8At6qAPvuv7C6tD1hQ2gbdAwhKjgcyKvYcNzREgcYaSk",
  "key27": "3VpULna8j8notUAQtT493RZrPSXZrt7PPfcPPEamgqs1jWg4pzM7MbkYLSXGjNHvvFDXrd3UGfPkzQ5evBSVinH2",
  "key28": "4X3GTuKLxgdLNksVAR3qLxBmfVx341VkUUEVJP2Fx5GiPHHfJz5MsDJJd3rCm6SQxYMufepZ7xLpoDMHa4JuRdD",
  "key29": "4Z1c9vWRoLiARgTSmzUPNDuE7qN4rxewvKC1fDDuc91HnuevXzYnGy6KgGffAutK9gHrsHWxBVc9b3LcdpTUxPFX",
  "key30": "3QEKtpAWBV1TEJetfmyEH8A7DrvbTUrTGSRKYyn7MkUUqcCtHqERXYYNyTf3bpm7ec8bsoeZFMzkETLFdoqEFB46",
  "key31": "uSYATfmXVzY5g4d1KLtXcqgWavfWMG4WeZ3K4cEpr1a4bryMxHAg2MUp36wvwXBgYhgDAY19ECuxbdpiNVEuY92",
  "key32": "66yBGYpgq1iurKD96eQFxu6LNbKr4ftgUhQnnPCMuwKTQv7eDzPjFJhQUeged9gvdh87GMuaNupsu1jQw8AeQ3NK",
  "key33": "3UBeGbuDVTPYNZjPeHxckE17HbNHxbn2QNdLfizgQtmp4MDA9dcGSRTfRk9mMrTGzG9NTZL7RZUWujBisJwnuG3c",
  "key34": "4ikYQ4oynKvGPc2rT3JEzw2CcmrbsLH15PYooqcZK888ufGuJTJSxFUdKNhea1NiqQ8pKv3hXc92egs6XTNfiXYo",
  "key35": "5XJ1j5JHMzjgf9PjM9ZR8mCoMGaSH3JyFKAKg21cVm3ec2p1Dxu4qMN1f5DKt8hxwU3NNe56JzbQPdtF3GCouM2k"
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
