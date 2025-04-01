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
    "4D64cQbgKrVX154iTiHeXPYREsSWUPEzsqXqwj4eYWFJ4UQX6LjanYiyLP3tbAts94LwLr34X8B9cDu7f1qDdphe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wC3jeu8suYxRALzViusTKCG5LEtxuupj2Yz7ddEthRNAQCXdticm37jBRR7Nthwyr1R64MzbSiL1YtZxYpEWfWM",
  "key1": "2vYYCKAPHfuteP4cLYy7YugQgH4HeUASL4zvG5QYMQjPFyWfnnJggurcXkwJRBoeogTmhKSg1bVYxXzMmgsjqMYT",
  "key2": "4N7v2kVrBVYpahL6mcHAF2ni82mC7K5bT64deE6RrQzYcWWPvAECyxsgT4ANpMX5uNPagnTXTgK8BboeXdZVB3je",
  "key3": "34axLSA4oBeduvVhq3LfQ7h2iukwGn3KWb4Ba2DjXHWi5NNGLFRoYedaLKg9mFPg8wBW5EspdPY12uLm9KFYgeMK",
  "key4": "qwAMbCXEC53FkmTC3UhP4waiq4nckdgyZ6FyJTArmnhWUN51X14RtyM2XtE6chJwu7HwfVSr4Ewpz4BpfZwjDZh",
  "key5": "3fkAiPKLfhfNfx41bPgAPeg7N7wX9NmVSRhqwJhZfeTNkkH7NHsxSa46kNo4DoFXB4wi7bSKxBjj2HmEnx8FHRae",
  "key6": "YFhNuRmMQMru5NypiCgzdFt2wAyCyxBWUh5Bntigzr33drdg3HfvM3tXemoZWWWQmSm6fBLzPMaJs3irBkeqGiH",
  "key7": "TYMTCS33LKwY1XZq2aQQpUHPonhpaVzD4n76qokE9YL4BtsCZBMMmgEKG3kEUG1L69g95LE8EXufV6q3eF1xRq8",
  "key8": "2U4vUwKSEF3fQmiGfWavRbm2XthGeMjXsTiBehddRSfu9us7QyJeVALBHT3dcragd1pjdFodqQbF6uvDzsoYYfqr",
  "key9": "5X3vqrsYKZsbjZEQZwzvScqKMbkcWhWAxy6zjJ8khYr92nueP7EGfpLitw3LyLN3M9JX7WA626Ntj9DhmAVizXqx",
  "key10": "RRNx2Gq6kC1GXDhdVJuQ4RGdcJouRnuFtK2HoQsRBmo2QApaVc6kzz7u2VYVKJqrJnGMSqtixhtW3CHco5SBZvE",
  "key11": "5CXq9cpgFNXyNM6MhPdCjqq3Bi6CnSxEgGbTz9rfVPZ94wf3j4nT7gsvpmpBinT7FLbBfpGUsm8LV6z3Qj1ukm5m",
  "key12": "5JDMFs3Bwq6zeHABBJvZySQUJSMG98aKv9TzQJSFBJECZXYBQsJ4hyDti1tkwLsQgiiFaPhRKusVVtZdLNiQbFGc",
  "key13": "4KQo2v2sBELRwA2VkkPyzUuSGyi3xjsLb8oD3bmTuXsojawMXne88rj2yRrvmiGy8ZqxuNt8VzYpHcfMoZ1pHmxt",
  "key14": "3TKFfaSp8sgm3JyrD4eXxh5kpwJ2ERTtmXCwYkZJgfdUaLfe5V6W77aR4EpzARL44fLaXZyeXBYQvFmjKsbSo6BY",
  "key15": "2EyTEAoTpKr8aQkTLt9EeokdyvWz9Xf6jr5PxHB6MF8HrB1Zj1oYWTkYaHc2mssWnNNMHi1nV9p43GBkix3uXqda",
  "key16": "28UNhbguKnKQtjAtgm6ubawcYUmtNs5Uj6nJFT7Yf7uJ5SmsLCHUQxt18EYh5WY9VTKjukGBEVRBXH6UaoUeLsiH",
  "key17": "2kCyiN3a5ayVvsqJreYxfJqi3ExiuTxcsroJaFFGspETEJbCayeNiWpAHa3b6s3cpLoS1hE8XncJ7mChprjvBi54",
  "key18": "4Rofb5riMCBjFjdB4dadDPPAZ8LfHfSVkY6qKxZRYJUHFtb2WWFD33rR5D6dd5JTC18aDRus73a49xjfeLfKTsa5",
  "key19": "5Xrv6AyzeHqxFByQ3EhPGST6azjRbGJ8YUhY2uWfbyjaRewRidH7V3EuiWLiKMtizbTYSDeL7nc85ozohmf8TenJ",
  "key20": "3khX2MHSERV9raoKwZhTYWmDDvfE1ZCZyD7HCH95dNea9n87Y6tVLTBseouW5gADesL7WSkwDVcg6t1YQrv1Fi6X",
  "key21": "4QoEsF7DNhaZnVAt7BXU9yCixKVAGnci7d1MdsPDLAD9iK7Sy7RUAr56sSLs8HZydXtbS3m2oRH2GgCEWqKsDLxe",
  "key22": "QXtoaLndJQSPBt5pYPkkU9BEXD3hRnh34yU9NafSwad1U2eNznCYXHA9sZisKc1351e3tXrcqhEEf8pSfENVVAY",
  "key23": "4uQ2S85GooN7MCBn7qbBNT8pv3JvM293CSYS4XKQ6etvDvATeg4NGu4pPnKLt4KjeqLMuf21aWZEm1WyimPvUWt4",
  "key24": "5fHnouxhAypjyPgHupkxFbyBDjfcpRtoFCUU34YUpSfrMZm7LNFAWs2rpsHnbx1HK7MGeNCGcQB7dFaboog6A6eQ",
  "key25": "5k7kuTxKZjJp57vvTo9iAgrQQkHEhWotcNmGst3UAVxYrLhtF875wCMvapNtU5uihesD6KeHVNmBc4L7bbMeSzrf"
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
