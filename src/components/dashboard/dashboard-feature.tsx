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
    "KchojdrwEoErkuXF2z2k1TeqN38sB1dXsk2vGdYup4aiNrhY5rey3ef7gEWN5jKyx3FDThaaSpSZMnW8gXydZC3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DpAf3kqJh9ygZvDvRPKXSSCc6JPFJ8gGeR9vcLYMqAR3K9ed5uqVByfRv9GeQGUiNm2fFSKrHiJiiTzZJ6Li5ct",
  "key1": "4wAYDCidn3DvCma16NDu7EWAq9Sv9AJPV4oYEZmzbLqcMALzYKRRmE77vhaLVWxN7Ee6N56ANPzYd8zoiKpYtvJj",
  "key2": "42KM4nGd8h5RiupJRTZuppMGrJjptJ21nktv5oDDWbhowfDUCQPDtzk3niiURKrGMcf92u9qfdzXYGYJErFDqXSx",
  "key3": "66XExNrVzoaATiMNq84iSEHKQL21j8kCBJa1auWUHARnZUbRc1qMiJjXKGQkGM3yWTFKoJ8zzd4rdjnVNTZrhMCH",
  "key4": "3EPAQfu74ncB4zMgUvDpwShjfyYxUzG1hUytH1mBUqQPNUyvCgaGzBdasv41YRs4qZZVxoMApa6x9cSKzFeFvYJ2",
  "key5": "3CKPuvU2CdPyVEKbyVJzvmv2VFUu2k96SqFZP7KJC5HHvqCqNWXiF2qGyZEu6jUAv6s87RE3PZ7VokE7xWsPDM7L",
  "key6": "4zNqQd8CMCRG2kpNAcYhanGrjGzX1wmtV4Ht1sqQtDoyb37P6tEktcoACfJzihXbARCeFpAN8MFdCNLzZcqGWf1Y",
  "key7": "2yKipCio8oD5gtQPsouvfnEjMwmnRXRTFmU1TUmwGDrdmA8WzGBHykdxpobxTog1Qj55nVeSbcYhDTywL8ZrxduJ",
  "key8": "CjEStgCiYFC2XspXTkFqjSHLSUsyajjo9uXK7o8GvRPJ32xQYuexY5dKPbx5drdhxx5VshTekjof3zzB3hry6MG",
  "key9": "5QgugZFrJUt5Nw9oKPjS16k2y2aa9qkEaYxKgPGWTbKLnUmq4X7Yv9yPUYpK8jsC2s1vEinrNLTyWpZpwsbC5rY7",
  "key10": "3DZbDtux1pHYuPcz5vqhWdeEiusbM9sqN2b3hrVwks8rUM6wyN4H7tcKFMeimZLmuqhNEmLAfRtEpoxdkMjcLTcP",
  "key11": "5mGBz2CoV5neL4Qr234HkygApDvTLoFxX55Yiq7LSehQeNF7HHgSmJt7TxLXW6MhZvj8oPeNzpYKnvY5wT96QLtZ",
  "key12": "4dXBjub9eXCkwe2oWhqSf7rv24i3PZDL4we5ax8centexcfVTsDoNGWgPowss8UQacWePJ7KxdMwSSXNB3FB4FoR",
  "key13": "iPZABeJFo5fUMj23EnAPHvQpJCP1PFojXwcLhKtxEWom43Nmqi4pC3agyiiAYPTSQasfEWXwkXQpnr6F1dwiXHw",
  "key14": "yB1d9a1GKAxUdBA7tD5xVb8ihQJZcx3RZkns8FZ86cQA8YnLLSPY8o1s1XRBQJEyfK6Fh7XEc1k98DfoCznpyxf",
  "key15": "2Rf6nLLnu42GHhNCMuZ9p9U9VBk1XQBRu9pausAEgXnjZMi495ySic3PpraifcaLnVwR26tcqhJRxge9W4PibdLz",
  "key16": "3W7vaUWA2MvQcpg6rHXXserscogGhPMvhq1XSLFS88eDfUKzPSZ6br8YQDqvQVyeN4mURUGd3GXnDTDNbHWmUoCU",
  "key17": "7GzcF5xJ8U7aYJKmozwJR4ANahp6p5WFwYfbvLrZFdx19rUzXaGabsTE8divAPx37wm2udXktYgMEZHrN7V38SB",
  "key18": "QzFr9ZxyFykmShL4tVnXkbdmLDBqhyH7gxL4WDyyCD46TKgbmHdjM3Pmh2sTb3hKT53vLEdbHgUodDbUHuA9cUD",
  "key19": "2UksSNPnQuAbRQZcg5M845yy99Fnn18bLkRLESVkGnBoJGVW57Hnu8fHnzmBipzGFEBsUa9Bat6m9oL9Dhywkpdx",
  "key20": "3cEeuHsSc2vJSfLLhq4inte6trcxw3CtWoEKB4rvPVqTR4zFcepFJy8SshgaVWrn9TYXqfy6xUy8gKws497jaZ5m",
  "key21": "39qfgx5VTzC6iqjthqv5WKb47E38weCTGEw4gsJBmhCYYzCFdcAPzyuMirfBMjSVVbQWp5yKiySUvoTCjUcDJp4Z",
  "key22": "4njZWEbG3ocSVVnJnK7PNLtvaRJeAprtnwEAHizhfKFeCTHE6jKhLNe4huu8Hywf8wSKo8SCQnzzoij4G8Toq8jp",
  "key23": "66mzoSWYofkKxGJpKYM8tpA1rbJcfVfkJc5QbucZ5YtaFjLb2aw5y4y8LJjsvCB6yo2BRs3ocQNbAzY3b5TYVUu6",
  "key24": "58P3vWLAnDqC2xAi5kVn5kzZM6P7GnAGhphFPNZj6ZJGjKWHPBSQASWN8xTVBARJZmHnTmwEa9tgiv1q1pYnabJg",
  "key25": "aWYMMBFxnvcwRDsYPzvsXrvhMZippxVSCZLA9cGM37MN6NwRMJs6hKLGexCuPxXh75k5kYhkTM6ifzpFvTedbAd",
  "key26": "2wx45Zat4CjLUCQ6Rt7jDnzPE3om7t5fHFWkHkqzGTUkmVAEP194KCVekF5jcLHoQ8TG4pBvNUPt9wvwoYU1dath",
  "key27": "5sQH2kbn7j4e893qZYokPtFJuvgRhhsBtoTUdrSf7JvpPJS3neoFksKNrDg1s8TS8kBT1kg55kqxRF86Y8aziKFK",
  "key28": "31LRJP9SWYiXj6E7UCRrbx7Q5agxi6AzPw9NrhH7hHjL5bspyeLv91qi8eDs3qj417frfo4mfxN1ft85jHYvzVeB",
  "key29": "3mRdz21ud8aaygYs9y185mszQfG4YubcsQnZn92LvSgvriA59My2cHXCeJsFBZeEave4mHUWgPRXDaJsawTy7hJW",
  "key30": "4pAEa5A9n6BEjgNt7AxumYd9xGdqFexGarYvMWzPU1EEfKsxHnK5GNp1nQqiaxtE2GbCtLBwjgoWVmsBDQ27vH9P",
  "key31": "5xB8udMK594SKLbLMUNfJV7fEi7ZMi6ZescfzwAdxtpC739ScXQ1tTzWDGUvAQv6dyCu8FEdJ1XBYMJP5jeQGS7J",
  "key32": "n4FTso9sgUHXNE54JuSY1PPmBrm4Ht868ykYdZbjmbnA4uQefamokS8EwsK3PZjubUTfPbwUzj5yYPLaCgiQGAD",
  "key33": "5Q6H9dehDhP7KgFWywJb2w3ZqwKjetKXhnwnbczrcopxB8AKTy9jv8eb2Tf5tZxKDXvDPXPzbt1hSUYksC57UbSf"
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
