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
    "48VeBm9yRTk2icR5FUxxvY6nYHKm9Wp3TKaynoMPMbcWJxK3Npfs9TpBLie8rsGHcpAXsMswoVV1iewWSdP7qa34"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27h2gejXAP6idG4buTYiTeN9gR4Hn2WGG5KCBVtagXMS1Se49FbCD9z7VHeymHEQi8LcA7Ymc8m17ssztRrhrJho",
  "key1": "4oZmPCxsciweyiKV69RgyStAw6x9B5rDoDCTNQX35n5SRYapiqQFv4EfAvTPVfv1jfwuVkti82NjoPG2mhB8ka3d",
  "key2": "4mAwPsrSapqzHoKnVqvAHg6t3eEmoWDLcm56EPjqFgUpojKMynJZu4KANwLMQzdWnQDgb1N5h2sYa4EhqvaVBssV",
  "key3": "3P81Xkk5StPb3SrAQT8FFiswa3gKN3ZMGZ5sRw1UEo5vfi9whQUJf9ZM6LiQPr6fRuqMyLRthqruEZ1jcPZL4Tt1",
  "key4": "2Bm8mmEQiyoR511mp9i9btN87BPVuECBT6pmqbumavGh8omZgxiFwasCEYs97ScgBKMRb2esNEevgrNZJscMauMu",
  "key5": "3GDX2ELwkRTyrrUokxS1qvx8qsFcqfG2H687mNjuG6p2Gf1enHUWTDmkH5f6hh7DnvjoTEWtoCyR4dhjnesFsuEn",
  "key6": "3SzGdve31TjUfnBKPnNTReVxj3CoJBLYoDcku7VBwgT7Nx2nsnrBhexoQk1uv23EYZ6LgnEHRhm6vPkNtWuicrcj",
  "key7": "4y5K3EL7xwpAHnh5n9VY3G9RyaUw1xQP1iUa5jgeom7CKk5iYsPyEwmfAhZygWY5hYHqqMkaeNQMYUngmNjf2nji",
  "key8": "3YAJVdQoToAhQcFc2946WkqSGVoY7oAhyUrTLRYhEAGZffx6Xz3tNbDb1yhT8EewFmguZ6YxgYx67MBhEUGwM6FQ",
  "key9": "3CYTh6s2Mq5XZJtVNGkjB5Zecc6GDqeVEKWpBwy5c5rKFMEyTxMJud3j5bqTh3qBtnaDgqNtRDbmaFPYF6gNZCGy",
  "key10": "3npUV7XKvWkbTsGzaLYwsXBHaaXPZ1oJArXM2Ls5GNmADsTRoh7whnPZ6WNSvzGRwvpKp3XYy85CHiYBCuf4FPjL",
  "key11": "no7wU5bfsyQPViraWZrX9heoAvicWBG2NDYtxdfD9hFF5eTCNgZNhpccdHjUVaqRtJQRSNweVTbuG3AjD5qgd15",
  "key12": "5uY9ohuyj8Jxu2X46Y2JHL4kwtjenqWP6FQsf1MSmq4Y3phEw7QQkpMBmwFmVuYabK9C22bLYePJDsooRjJUFfQb",
  "key13": "5jMK5souhbqtSDP2r6HbdpVG7mrQ3AAfTXvUzEoybyGV7fUN6bqUg4MhY7rSS2nCJKAXSe9wJvEVte8uZWzeMqmk",
  "key14": "2a5ax9n2vcia8ngxHvRaGWjEEi4Hdo1dXXAF29VrYUwkYyHHrDf9L5pbWLAbDr3tKHYZCrf1cs1dQYewNNNtGW8V",
  "key15": "4esqCSpDbcAdDURYL5Voz3TTCfkf7uzquUsp3Prmkq7oLMjmy9UodwsGWPxqxGtJWffRgDisr6vs27RPVB9RdNRi",
  "key16": "45kK7rY3EcE4NjUEQ1S7Pz2pafQvph83R3UxLGxUApzEUDXQGDHA5mqcshDQAjJtn2iJopcHk9Sy44MQ34AMYxmw",
  "key17": "4ekC9M7ihpvEatfKJerwGWNeTQGhZEXocqkf8brrHckEVoEdovTpDpmvhhcnT5cj98LiFaSQSqoREmaTNm9hAwo4",
  "key18": "2oLUQu4RqHFxsB8nEtNufStXx4wPnXTsGxKKYX5RC3frzN8xRYUcw5F3uRxTmc1aQkhqSN29tH9sWXx2J35RRsgp",
  "key19": "5QS5usDipGuMJqHDEJ2bDmCfytYTABr2jKTBek8j6X98VBcim2TneKkJA1YRjRDL5oWcSui58DRN14rShD2VpqjU",
  "key20": "2LmmAsxmEfdNhBRkqGb5uYJLLVwnqhJ4A72cVjxSLB7uBvHtJrYt1H3dspmy6nMmarucf1ZrP6yZMegZXG8ogccG",
  "key21": "3MdU3nhYAuoBJbUUe4e8zTn4aYVBwMGhyXx2ksnzLfWAt18VfJgCjXfYBdNRtJsK7UDTH3GyaUPKP2nrW6LxxHLn",
  "key22": "3iYGrbrMiX9ezyj7hhAKj7V2Yr5P3KcGnesQu9udmHp5BeihJfHsJZLsoTAZPGjrnPmDsKZjcHnZqMqwGWUz53CS",
  "key23": "3f56udEHTz37W1ZFbst7M7Bh6wcuVt2Dkksc7ADwYDv1cLqVnhYY9iTkP4er5CfCyNNg5ESnwou6BSQHSnXXDpbj",
  "key24": "5ue917do1BiUkdEjNnjWA1SYk6efKc7RrHC5YYVmAex6stwuHRtV8V4YDEpjemQHQrkMQ4wpnnDMcmJYo3Zk2uSQ"
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
