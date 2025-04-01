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
    "2n8Tbh624rBQAZcSx4rmW38dTGyya9xi65M2JicM3uubbZ77xxqCgUBvXwXGN5y8FogsRd7wS8dkjfUA9JoWwyzD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mbbqxUtbhFQr5nRra83XZtwyzcdZzWRHnM3L5RY9FNtq7fRj1bxNUikKAxaSp9rzXRBiZBTK14AHMgTX7it41He",
  "key1": "VEgGWJcW1k1hqKrKJF1Nxt9yKYLhNKPbEPDpBePvYRHpHiDKFWZFBmqs7ccEf4H6Dv1q36mcB4hq9PNDntCBGYA",
  "key2": "vdLuqd2WyAdx53xkXYdRSte15SPipZrXAJ5G7C6NE5MEg85vKBV1qtfzWMRtnoLXsagEGk99wVXvao8mxH4Abpf",
  "key3": "5GB1vALPDBsfUhJVUHcizqdKz7SUJ3yHBom2SoriwoB6dYDSGbB7sXhqoiHnZRcvUihBbHM3mwRrwUJZCjBa8bes",
  "key4": "3o7au3ZoXJxytmUuB5zf2a7dqQyuGLFQefTNYqrVZehGhuWjWkMEHbGYRg1zky8QuaSgm3R7hFJBX9GUf3H4aH2v",
  "key5": "5TwkGFcWW7wedrgjh5bTc56a6yFJtj71VZr4uB3UGkrLm2TuJrtVb7EpsrKzSQZ4ZSje21qwv9wX3P15qgdKpoW3",
  "key6": "43FJB25ZetaRTg6p2dUUdJeFWXy8LSdN1d4MxArF3J5yNTqCAr9wkPkJFtYqi2G5Rogm8Qz9xekCT7ySCeddCxDt",
  "key7": "41uPR7wReckJ49EsG1B2bUAD7vqSZPGDJboicQrJHSxx4mqH3JRSr8rkvoPEQ2qzBqEakjaNUq5U8Ws6SJHuASPh",
  "key8": "rFbQ1wM6gRYd39qxegwuFfQEisePkt24eoV1Y7cZh7BuqxPqtcjchUNW6KB7RcGLFfQC89L4s5CDhUR1rvG8R2b",
  "key9": "56tPstbLkjC92ubSKVw4hYZFN9x5m4zN2KqPTKLxsB55erjQkGvQbix1dKLxoN85fy4ndxHZCv8dtQrisXbdPByQ",
  "key10": "337YiseauX6irGrmxBzisFoajwdTRL7TK3AeuKpzgbXzqxahNMuGP3ZNVvFoGne2SUagxSBFp5WvtJ7sgETNf8bN",
  "key11": "4NfyfdCbhRsMcVNykQ5DVtEy7zqyMhERxKJ7CYnycCt6UF1xd9LxmSYEyT8viVo8VBmdRKCPQg7APYoURTKphaDD",
  "key12": "CVcjBRy2RVE2xBFVqSXuk9xBqhZzg2dXWF3UTcYUFGKiwPWJ5sKAug9SpBQe3BjzQtPGxttVsNhCfGyqBeXtEFw",
  "key13": "UFCMEtPmZNeXXqs9U5wnHWk9VRpcKAPPZKmQxRvyrw5GaAJeY1fY5aDVZwfB6nrEtzY2hMnbRGEc1q46LxHBihC",
  "key14": "5584DD6LoWDzZpR5aFHUAcH9C7RmM4rQ6aTRGzhsTLreECY26ncRCvtSao37Vij7GRXkuJkGDHVM5CNz6afAfeds",
  "key15": "4ifLpq7dqqfgT4KbyCG8E9KgCDZ2jTBKfzoabvMtRaWXKnDS9ftuDPw3S9XVET6xKUnYobMo6J4Db9VGzo6VcaU7",
  "key16": "27KtpZ4Ju2ZnfHeWuuLQnTiUyV9CyQNrH214dk4rHhWDz1n3nBF8tEqhcSPpLwDUz8VL7AxZ3YCVMLQ2TNetuBZ5",
  "key17": "4REdv4RimVyfVCPArGoC9Z5d8jJxocUN6zBkvKtwUdwgiV7Y5DYpt6e5uiGcTdJZJpVtWiJSC4WL4sUdoE6wN5Qc",
  "key18": "4sTpXyRk2rMbVvzfux3SmuZa4p5Tyz7g9GTGepbywpK2jtj8MtFTaK5Ha8nkfFo4BoiPY8qnL5UvbTZ2mcj6ZrNZ",
  "key19": "4DU3FqZJnSUQhmZghookvbz5YpNnxGbZMbpc8v1F3PtRs2Z7h9Mfv4A2E8GTviGfkvBXQc8bgyTp388Wi1ToTJJH",
  "key20": "26neGBCGC4jH23Zif4uWkechtbqhsZb5SEhRv9YtLvCGJgweUxVqUx857MgNNMoDWLd6RNwom9ymUFQUpgS38D7r",
  "key21": "42W3UBJ7th65b5c6dQBnVTKrhPUdtx9JWnuLL83cGovwA1zw9fSztrViNVGs2Zx7av4ioqhCQd6aYxkCw5CrfmiS",
  "key22": "59NuCecFpgWEupSwXiAwcYKsayMWTTvi3KQDrk7fKKs6hz2ia9NkL7J7e1DUhXMbgM4nq42dorE9b5pkm6VBEqir",
  "key23": "xs9Y1jGXvPDnJVx1QRYf1LFQutXXEtYPoSJgeueF69xfanVTePQpn3XAG3Djk8PKAyTfbRzQwDbtUwztLDBhW7J",
  "key24": "ykZ4kH5MMgy9Y79PmMabiyeQEmLTKns8aahGsjTS1XYbaSkyxmUtv9yrdHAikLNVWXLFSNwEcWMMmkx6ajaXRZg",
  "key25": "33dCuQDFUFBvm49DtndntazX4LhbwknpFdcxUgRNonjmeo7CiBqPu5zxc14aboNuf2ELCU4ntTWhtsQqV87TJjKA",
  "key26": "pRFSq98SrRBA5EGi3udhYczrJUWnH67zr5QVk1FWSdjLNMsRkU2RegsFcuCaKdZBbfj331Qy5JR8ENJK9tRFw1K",
  "key27": "2Sc34otw4w4fvoo1iotMoTXCRnicyW8DnqsbCaMG4DjoJpSw2T89LBBw1X2FBQQbo5MSM6gKsofAPjFDHkwhXnoA",
  "key28": "2SyVQXXrdYLCrokCDzVwtVjAfPiezVCMG7FKnrM2mHzZUhnqxxBiQHumrScNdjLSjdoo31vz5So2Fji9CJBTLuEk",
  "key29": "218PY59S7ePNhV2baMsEGYSkTAVp4jA1erEb3y7mcj5tm3yE4KUrHQcxe2QZxQmJZNvzk1TUyUV4QPAoWSzbVdFJ",
  "key30": "kxvVL1rWNUXEwuFFzzyzWnQLNUkZsFJzAvm3w8Uj4gd2iKmNs3RVBuA6pF9oKQGJBXy41JYi2F7AvY4UodZxMDy",
  "key31": "MUavYZ29qg86n4AutTmadQqGgHDgu2zik5rxrELvkNKFno83UpY6acEssyd6hKMJLW8DceSWLT1KPRaMXK5emTX",
  "key32": "cETkGmYQxv2BLBoSp7Yj7RZTdavgF1vzLtxmF3dDaViWoejmkMHRXxZAMe4yar6HKU9qymxftiej25wjEWGeTqC",
  "key33": "2Yp1cf77gMcQMFBDSxyRFhAMBMjRhHgUsRxgnE8qAncptZaEo5mrEbimwWNdb4o1pyBZqUCT5asE2MGTBSysn44",
  "key34": "5yL1V51bGZidChrM4wrz3kgwhbniRqUEckTTcq16p6ErD2DzJn5ZcFxz9wABKdV4PsKtrWqLxpKs1xgWQaxbPZ9f",
  "key35": "36bkRS8Qobsg6PdZzZ8rBYJMAmWPTzDHP3ikzZ1bwn1RUmrtFxpLukL9dennKhsHcASvQ9iiyVFfm8r7xqb51fj2",
  "key36": "hPYzHEPMvuAssfvtepD1WvDxnZYQntJTjjh2uH4jWjfxQtAWEJhRCJvjCPjwXk6jBsdJ51YEPNBFFkpFMMFYqp3"
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
