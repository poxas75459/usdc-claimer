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
    "jte5FWgS9XxLEUrEty3q3b4U9NC8ANN9ZHenm9iornBVpUu6PABNozpwnGsTn1EtdPBZqSrBA4DdQ6FrNLykJ4K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CcuQXzBMTDHENcn4yzPgx7CU274peKFKeawKLpNgEJNM9zRDoWpJraNbQKHrmkUZXx2CbD8dQi1U9NzbnqHfHkT",
  "key1": "3wmFm7mvAFWGnz6Xei7qZL4UFGBczLG5dK58L1eW7q6EYuNZB3fFQ7W8gGzgAC7f3RNcz5jpSSFCYqrhgoJw2x8b",
  "key2": "2HGL2esWfW1Wpnhq44mYuhooY9U8UKggkoRwq6LPmu5issytGPzyjJr6UroUNy92ACU1zMGudpbFW19cSg9D6MUt",
  "key3": "44twF7FnToiWTBb1bErYTXYdxyrSpi9uW4W8eTUWoJZnyqpxWekqN7xLQkbnoHoCvXdbR6xK2PcUeLPeGj4S2URV",
  "key4": "5Uwb3B4hTbYnCoJsaAGes3bhLtbkpTQD5SU2QRXcsZLo3PgsgwreLDGbbiq9kaU39yDGh1hRAPAyvVLJF5Hbk9nr",
  "key5": "Cuq7A8yeesPW4oEarvttQrF59iAHG5HKA4sMWgaj98VnoQXed1XNuroUZTic4XPbFtAkJcHVy8VjeczUziguT15",
  "key6": "8Y7hKEDGym94iXxvDCECmxWGZFyGE2cCsJRP9cEYwwKSVnMbdnKs9yDW2MpVc2RNgTR6RXio9CR1c1MaAr47U6k",
  "key7": "4p1uoEL5sHZy13aVDqCigzma8r9ghCS5yVjfewpsagcMqLACSprFCDoHhCwwGi2C1X5KYtSmVCvC7BfLX9WTCW5u",
  "key8": "3f3WCUX7TTnnCCHLxRoJhj18JKCsPcuMXYWZw3UavdXQTebjMU4P65thehdUuLF8bkJngMwxjEYJBEksae2U6ZD3",
  "key9": "2n23CMYUFWUuGUqPVzmxdVzFQXc8pdEhmKAs3MkQ9duEMwzvYCR4Fh5SSM8QVWuQ99CrsJwuLMMaNEynZPqyMAUJ",
  "key10": "4FnxSeZdiJx8TVqSNsM9KUtwasQ3ksjxnvp5G2U3SpYLNqVmeGnAEHYDvzfUSSonfSCdRpsgCV9aruUYVjvjiq3L",
  "key11": "3x7sNR4UmcVRxGMAEwpQho2xJKTYnh4eZVotES5APQFjgLk8aeVr11LECmJVTAfbVgEko8963zEzYWTNuFHqqcHt",
  "key12": "WcK3kkndnXD72UknFRUo9MyCtn6TMBGR9tEBuq2vV4aURibxdhNqw4rhja34co85LhFwVTS4bHKENS3pnpZfhKB",
  "key13": "25kb9k73od781JP7SNbSVcNVzGyUDprweWUHJ3Ljp8mAbt5Ax7P7zYSa9qx6Yjhkt91knF8pWUt1S2Z1PbRD3yV2",
  "key14": "4722KNDeCN9o6MyPVvW8aZ1Vh5mw3XQCQBezGqW9eMgbxTBwKQ9gPo8t1nX5j8CbpXPaZoeSYbR2qmMSMQxXmKLp",
  "key15": "56cionya4scMRqGsbuAScg8eZxrY5dHJK2oXE9q3urWuNGDrVMPapbPGhEssuuKWott2YNsUjRDCCrZdZBCJSrDE",
  "key16": "37g4VvqL7fNnbrh2grVi62CVxkFuxQACZUctc5NmFEFkTXYYgcnh7ZtjGVHWzBSTzmv9y8WbveahbvXk5v4w45gS",
  "key17": "5rK7gLZ7wfDQHNtL1QbEtfBat8Go88kjTkA1McTbeeyqDatwLWUgQ1eoKgdepBHerKsv6PPuMVw7RwiP3Ts4PYnE",
  "key18": "LmpPb6476L1AY4Sk7k1w234fnSb6MqMtLiCgqUinoPtNxUUwEzopt9hqHTrmkz8UCNKHw4qfa1oUc4ZboYWHh4Y",
  "key19": "38gQ6UaDfF9rd15L8iDPjcDaMyQ3LUGxvYBFLRDnLCvajMDdnHFaCdMCPDkCVzD89q5dwizCrLxKt5bdrm34wsbS",
  "key20": "4qhbx9tfVgq86hcCk7D9ux5A36MYHcSK1n46hTNdpk6pxHnyXfnourJTCQcfVYV8gvijtzQPCDYirEBKCroC1LHF",
  "key21": "zXpmPDpgF9m7zFsVtXLN6PcMFMRCEEZWJckYPj5axPN9frjtj6tY8ufBipn7KkPcoh5r9FenamuMgkVn5YLNBjG",
  "key22": "2QxyaBL17qbpS4dFPeVWXkqyFDFd6aqpBxBCRrzR7Muc35AzYRgvh5DqdmfXTqTmwepMp9D3jqdab76kVoq3byu6",
  "key23": "3owbdpMRN1L1n2RSxCoKpSE4WrM4Ru46VKj2MJKXV1ptLXR2jjV6tYrrvY3j6Ss7y4bJiPeGu6fs73aVtfHGo2XW",
  "key24": "59aYBRtzbXiFHKM1nkbjmQUwW8gU1m15gTTPtGPTYnrgWpAqZuojjDK72B7QXXwhKzop6Uifx7g7SSsusT93Psaj",
  "key25": "2AAmDeVSXdC3av56ULSo2uNVWyaFRNTJa1uopXEa7piRgNVMJVK3w7t3vGva7Us1ishnGNcRGB2g9YoMuUzwuzRG",
  "key26": "5E97S42t6pwUQPuQAKzGyxxkcPnDpzZv44DvK64vef7jFApif1qTYwsxYF7qfmssJbwpc25Ggz55i3EELfHSDeqg",
  "key27": "53hvyJjC32jzZwdCEgvtzcwXvCE6pEfSkqgPmeYgEQqNihyitsHoobcdDJW6LbPssJFsUzJbBCm7r8ToUTMGsQZa",
  "key28": "2jFbUtjjjJgyBvZiYR9Q5dWq3BGf6kgJXFkN4Dxyiq4p2mumBHTap16xkqEQsZYQhG3MP2zDd7TkVc5qZNf1xeNS",
  "key29": "29UGpaxd7pKRbBqRE1Gd4TjqqVpSxAz2W3yvKdsBnnmqPfD93mqyRy3e8dJYmftfcpuQ6h57qkcHhWiResurQsoU",
  "key30": "22mYn9y5NnLPqXnampLp4iZAQTTwjTd2RCwFuLwZfrQFmNXnR1rzMfN4yHvPvMiiemenp77NcRx41HvDiDRg92ug",
  "key31": "41tC8DXDXd9wnHq1KpdH1scUxDD1ALWvJUpyxNS6rdnYCRgP9LGLWayHjQAaptpYdKwidkYkkwUB3NWLoyM2sbwK",
  "key32": "2NFRFEnyAMAcPUVGnctbE9dc34gMj77qdKSYvhh11vCFEtynoiK6hshtW9hFeMHk9THWfXf9pu4nzmsN9awDeXFg",
  "key33": "452zS5c8pUgPvfsGoCkCqc24fpSp7MCpBVGMozuZUpn2aw1Wf1cVSWCikkoEtTE7b6xtdDCnniksEj9ixEQxrJ4V"
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
