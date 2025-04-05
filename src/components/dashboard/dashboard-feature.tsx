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
    "5bPfYQYZVLoeUgnkpY4uSeRA91CzzZVPCUp2maojuPX4ff5o3ZLkpVFgvqf1JfEa6CJN9yHJiLMzguQ72JR5JHm3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K3bosDfu8siURY2Po3UaDCCoZ7CyWqtjhDDPTTmc36Lpxgj97xyQet8BEHfitRTkLB7UppTjkqFg7EvkFRs7G2Y",
  "key1": "w7ktjQGUEdrxSnAWYaoQKPVNxiK33BQPj98oo9skvGYkxdqo2U4AMPQv1GK1mvwkEyGKaqoFH3PcvY1Aqv9FVXL",
  "key2": "dCXt1RK7wi6s5gnCEpxZ67gcuG8DbH9Fv1KgiMqrntvZz3JfiVJr6bKiiJbhXthK76oQawcN6EZLrMQ2dDu4LTK",
  "key3": "85g8KaxsMn88K4HidtotqambVok5HosDN7gn2fJA7uTcectGRYk5K4xCovRoQ9UVT9cR9ekcMcPAPhWQxw4fEbE",
  "key4": "5iAj8krwRL1rLLU2H8pKxuWq2UxAPWrzeiEUyzba2BUd2CbgfUZ9ntPsD3waoLcjSErNk9YurwToKqgjQwhUBpQe",
  "key5": "2sfeCKZQ5bu9f1DnbvfgKermCr4GWtEiQPsCRmpoBbzNKb2bHJswWQn2SyW9ksEeuqJ7cKNcNQRxy82J9rBDwA2X",
  "key6": "2JA3TPovBVKW6cFFv61ufbhwPkpbyrQJXR23aVXg5Xm92LB7ny3c3zJpQiZjVoMLnaw4xJmk4mjy8wWVWcdmJYgv",
  "key7": "2ZGWyJ5uVBimptEK5z22dKi5XZCL5eLACDPd8xRYJns6FJUDhwvRaFyXiX7nfCmQEreDThS9QCLdu147fVXztatq",
  "key8": "3YeopfR5bUT2U6p7H4wyooruzg7xDbRsTRQFjFnbLZbUVjpgmcixLAkjzWnhTP8sCV9ncAoRbaZLkVGgNxhnZZ88",
  "key9": "5F8zK4QjfPRB1usnwgiZGZDTksp4ayEzyvbweygproz6LBN5GEFtfY3sayyGkgHXbquv5Ah2zJwV8cYRhyHnFLyj",
  "key10": "2ntkjZCrNmLAngLMs9ptX6XvxRhjxyrdRu51xWrJW66tQnDNN26K5nfgbzKmmB5iCwRNWAKXPN9p3NNaruQaLS1",
  "key11": "221cDTjUbgeb6AUBc3rZUCeRCe5zUspmf29gcwhSxF7XRKA1sGSmqaQLAhDMfbSpYVCnCeQt7NCfnoAN8VY5roiB",
  "key12": "2HxNTEuJQxSUWyZwMEYvav6XTBWuEGWSxTKJxrLg5QUVDzmTa95QCktzY3hMzdgBYyuDek1crTCwts25Dc6sb3ba",
  "key13": "2HP19uzy1LHLipLBVq4iUWeNFMVgQvZWoSwiUWTtbAYHcpuuV2QUkUvNR3N6XsXxteKL7Gxpkrnf8CbmFSYH7uKw",
  "key14": "3ARXGmb2oJntUDU8nTa5eUbXhJ2KtPvYcSGm8CbB2QKTffv5dGc1UhrSK1gq6UMcYV5PMSZTNVu2eYbm6kDG869j",
  "key15": "4vwdC24Yx5qmMkzP4JfYggsFahBLzy3B8SjmhfDJE618vz7sisZtdt2Ewtd3gwN4GHWeGRfjfsZj5afQRLPVPM4e",
  "key16": "48QYTj3Xp2BBL4QAmt1dGMG9b6RY4p2SzhZgQ1spWCSmexM3MnUtJfoPCU8fF872UdVAvJetjeB2K2oVzCwdc26c",
  "key17": "3i6pX234EzGzmifsE3zrBU4CV3J4kHXvtstxKeFR2yk9PmgyNRwn9YfHENuY8DqCH133j6JZn69yMCfWZsJWaLzR",
  "key18": "4CNABGAPrzkjSfsSXmPpsVdFjwoGVMjDeVwpUCpiH1tDvaX5iV8ucS3KT1647koiQkpC4GHg7vJbZy5a8Er2w67P",
  "key19": "5Md3RrVZCAX7LBgb3zRpDL3CRhDrNPDX5xHHt7ZmJrePHxS3Jq5eKjVntjWjmZzG7jdpZNd3v4iJksCCa8TBGwHU",
  "key20": "45io52SM15h5PCwyKpvo4FmrFqoKiAfZbfueRhgnmqsD8jK3vni7iFBFP6YKKSQebJsb1PbVMh1DBKBDDux3RaoJ",
  "key21": "2g6JUbaNXhzGn8jpRLxLSq5opfX2sWsdq8Z5e4B5pyxSNoMhNTo4p43KedsUQTDSFHfbsZa2sAD56V5eMxHb4kVE",
  "key22": "4EupV45GyY8UW5WP5PPQz98SgUFTYnfPMFquXLMLySGNVLcojtCyNRGrn2HjgqvLSnt7cMJMsQ63xgUKcsQa7K82",
  "key23": "28EM1MzuyLxTjQuBHsW3Qzk24B4Zk6kNqkKeEVouy55KKCPf7G96jJ65rs1XnWcU8mjjovhrqPy8ho7zgTfZXJMT",
  "key24": "4BoeokoZ6tESRZUDKAMMtPCXud1jhzcSpUHts2ViAcuLEACLCuRSHXtzd63GPqMigeWUn5BKs2UWVQKRf6NicxHB",
  "key25": "3SasqVhYKyHNQnuzEPn1ywxQeokPWbRdGSUFPkcNCzCXjm3qesGrZ9jEFDQAR26kUtpuCsvyD2zUQvkuEPUnE8A8",
  "key26": "612TzMB3rg1fYw4BPEZE4y5cDF1WLXrzHRoqsUPMs3x4uQvbC5irx1GVdMkEvitk1p17FRg8HqafVvBm2GSnv9bQ",
  "key27": "4c2ABKXHCc8q7uoKEci7QZGS7a7P6fxpdt6yz9n6NbWezu9VeXVcNWvEMik1dh9CBorjyYfADjWGB5TqzivLaeEx",
  "key28": "3c34yhJ66abC7qpMTqJrHBdiSfkRLXgRRVTiHSMfJncTXhq1wT9eXaLafYTd8ZjjYijAkC2ZwU6KbCqHxf5iWEN5"
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
