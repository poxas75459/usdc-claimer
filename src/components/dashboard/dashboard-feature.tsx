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
    "dQz6JUH2izBLe8kbMpEpyiM57PoboWf72MFycMZZLw51MvvfZrbuvZKBK1kys28TFf84eh6LPeJpehcbyCkn6Dv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pVuRdCpHwo8YPWfiN9FJmWwBcx8hYC9BNbUb3tXYsuXSMdEMxV5AnkpCbWaDtSisZU9WZFTfoB44GMGWvAShaUg",
  "key1": "eeptVz2vX2ZemU2T6JzGYAGDFRfZiAyHphsAh7hxHNtZndAkVfcntq2CA2SKnh2QpoNubrkazrVrcXGUfpNt7ZQ",
  "key2": "2uwHGRmktxWuSshnaq1ZYWkg4WmdfuhTcJ3bLAShiALYqg8XonmHeQ9vUWMuEmtunmarzGZ57zo1eCwHB6aCuYZA",
  "key3": "2UmWNBkarVHo8LgNwtgVWAhduocCuFrqNsRRPVEaPgidukVz5k83u49EYAEUKYYtUuYxhzpraHaruVMvFptd9Mxg",
  "key4": "4YfJBoGWyPtTo6qs1uAVWnUor42YZH1gfLLVSFs6Z5hzp8wdcYFSWh8Jbh9ZoRQ72c8F2LfTJvzqxbZTUWJ2neBY",
  "key5": "3b6JdN4Sdz4g6gS2VqYKWkZMgJMsDGUPD5r4gRReDnopgQ5gPDP9A826iSDYMrRSvSTzQiV6taDRCqQQLePywzkd",
  "key6": "2GXgmppf2c7DSRToMJvZiMNDhbwV8TzbNnvrah8VfQ2NoYL6igMM3wvvrdsWGYENyZNpnK3EN1icx5XYQRM3fFgL",
  "key7": "4NbCZsKt5JV3Vggksu3TJSBjR6KRsPTJNv4UhWaSzx2x49XDpevf4nWBXhCKn7yXFVLRuXaY6RkiBbzmvh5aYuoU",
  "key8": "56tUKciBS7Tx3tchhrDaRTH5hzHrcJ932TY2Axn5rpvKFTps261FGdZCR9xHxPpTSXLst5utoEMSUxBZ2YoaLtyZ",
  "key9": "2bCuWx2jbGRWZednf8GonzofCFwyezgMPfcNCbgzUt2igpaGtapNYwRzJGXs73r4sF5QPNVaQrtcV4qPutwK3DZx",
  "key10": "aK6X3nyFpFbd7eHo3jXFSr3aonUoLHyBb9XcPdTEPTr8cyWekCk3taGyLUEDHcz89YSQw1iHjRq4TXLPLvS9vkt",
  "key11": "467SXUrcbkiQGMNmVBbEErSwMFnXWk78Tjd2JyGgqGqTdd28BknB28Yqm4F8vwJWoKxarQLMoxidMY9LM7WfVWKy",
  "key12": "51UxG2na5nMSF6J2TkrtfF5mD6qsbPH2FXngJTnt1CrKgaFJtdsxYTWrjZRt7poRHXXdoQP94hxBYxru5SEjWoTV",
  "key13": "2KBAMKgmMK7H5ZnLGnomkArAwSWjLbReWi8dMVMHMmHL71XMjKB1p2gUVCaWA1XgV87hPNg6xifrLmG7SCoHHpDD",
  "key14": "4eJP4ohzPTXWThm8aReQSatAPcwJ9c88L1x1tXyRmsJg5t293Y4N4KVCF7Z5L9WJ6epgNf3mtQc3JhW35esmU9Ec",
  "key15": "oo3LBydd6NRosxKzKRiDuw2xtTUHXHg8LKN5EccrA948LGwirc9iHr5s2Xu26jLKtp4g2esP8k34iMYfS6BLUxu",
  "key16": "tJS6bbXjcnCfz33XDRZ8iGiNvX6LNHUt2gfzi5MRuCPjfEW9tQdYVjSeCVFW13ZVE437RBhMUbhen269DKw4ovV",
  "key17": "2B8sEvtjkmmjuetQS4ExBJccp4uRpnC3Q1K6JDW35S1nwnjp3VqJYkRHr89PDUGyLkCjTt7WMs1H9pACFJBH13SG",
  "key18": "2cWiPu9QVRwzeV2bq2DNGs4Upyro2sgGb5NfJtz5AcDCibj3jTCHVPBs2wS7BdQnRu4DjaMGuM7Fz83J7MpP7gqK",
  "key19": "5HR7Q6gcW8eNTqZgEBfjiffGkBWxGJKSHidcs2dzh2Z5da5g3M3spp6ZpzAk7p2yr9v5Y4avBrCN4VfoqpFBy2sT",
  "key20": "4E9pRVr9HNUVHwqH8wNkW81kAR9YcRtwQSb8oeLQQ9HFognCMKbnjcrvn6jf67xwu3SiK93k9PyHwKocSaeNnfaG",
  "key21": "49R63vhCVfty4SJBeWyv1u5ioGrosah6XETiCxPCGcgkpcPKfjCgCdk5ikLbddGpezNmoGbQshL4197WES5819N1",
  "key22": "2ouk9o6142j2HnDe3i5m21k3rDYc3uMUPgTbYvwwhvCgwr9iFQkkjURQFPagy8W4cyyWvEt1zGmZ4KnjKqAkcZ4X",
  "key23": "2goNoTVUHUPhxnPGTDVkMTon8HpK1NFBLH7uwnKbxLM7uJ9x33cCVTMZZ72L92PNnE5Lv4fQgnv5eRZ546T1uXNs",
  "key24": "sCNz2UN5wqSUEaNeXEbgkYqaUeqxoxe3ebjwSrazorfVdRAbnw7Equ5oy5Mo1jyEbfwJDJrwCYQiN1CETKFdDoa",
  "key25": "5fzT9sgAxCjGYCbF8dnM2YAZJvBrfHQ6w8gsbCRiD23RtBnt8HFrG89pvgWvvVFncSXJqEkSURS6YY79Ec7f1YcD",
  "key26": "5Gmx8XfV2vGTv4rjdhMArmYG61Jv6xq8CifqjXT3xr8dnb6wW4L867Bx1dYR33oYa8JkSbBGatZHMiLgdmiizyZk",
  "key27": "5XZUyYYNfWfzZoeJ8QHBwZvVvBVjLgRTNriw5NjekDr4p7yGmCShmuoit8zG7qzVSfasaBr6RBKK19xLqvi99X5e",
  "key28": "62iJKG6XDQznDK8sXewHFr1pvFvELZosaesWZTWjkpVz9YrxRcyCLfDrkQ2hJYeqKEEhTESCV8HjaJTPBSyExLr6"
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
