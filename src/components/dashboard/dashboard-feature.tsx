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
    "fGk8H6YbSpM3tzjYLS8okNVRe2eqM9qt9EQFWD4gxYsabuquPR8A7p5qLueytqpAwyCvJ5xai4UytteYMRhAyNF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qubp9CY4L49aKMeXwJF5jVe57xHw3aKA28fuK66ScnuqndAxQF1s1RiaA5Diaqxqbv3RVFXSUSHqpZTjfmKs5qm",
  "key1": "3kH2v3KFvWGreCW6YF2jiXQgs1GqY8Cg2ZGBKhWm1qTzT8f8mskTFc9c8X1S2tiHfjicjbVHr3vBJzkvqeqaAhPn",
  "key2": "3LPr237QWauJYVM63TvqBa1hCWNUhcYNJsNCZU6EQX3Nz8nLDQGkUBCc13HNvB1fejYnn7828Ytd8vEZzWLYzNJG",
  "key3": "UUKN158Ns4S1CFoPDHtVrxE49bB4p4RkbXGjoVrUvEWVpfPoWmoebEBPgT6hBXj7QSnhabA1EM3TAedVaihUy4X",
  "key4": "4oQ5BP8iWY6RzpSfASGhGfmuLikV2GqFcgNyZZ1AXUjV3KSSViUpmihQi4rZP6wsfAYKwDfTfNhMH7MoPtXTCS7y",
  "key5": "3QbcRcq5QmzQ3BzqgNZtdHKZN4kxsCppfE57PHKaCZpZRmCLSnzEXXPaLu79u3ACYvAYoP6bNVePNpsx9PyK11zX",
  "key6": "4F6u4yCLW2zVwMQReJA2Cd323qWzjv2ghso6LNRToEAWecEHsaqpKMYa39Kd9HkTXKWrAZZpvcfeBmLyK7sWr6Ng",
  "key7": "3LgKHc9BMJnJUZMAUzmH94PyNsmpn78R1yJyaSGzLYDkBdxA1E1aJrNVbTg9fdFdJwkLfPeYyiMtfD1r1W4pQwh8",
  "key8": "3gvYSz3YFmiDBH2PepuabzdD8fDFPdrNeKXEdtUaeZJz32FnrLnfD36DJbimByJyf6Zv7Rm37rstN9sEvqhf9tqV",
  "key9": "3sGLcTFLyut2McHaS6WZgm3bZ947FtGCJoa3Whrw6JySHuSgD8SwRT9qqK15hLXJ5pdWL1ury45cCGmotJQmoKtZ",
  "key10": "2eN8fwmuqdCKXYS2N8euS7DwVDmhqr16KF5jUSLz5bJphyHqYRGNgSpYrD7FRh6BtJt7dxv8TAT5QVJHTnMLVXY8",
  "key11": "4rc3WrFrQRo28Ztd6WqZV8Dcx6Pgy3AP5GathHJbgootyAuw1V8SMMwc9ME4EXmLD1Xvo3WVhQptazMPWm913cdD",
  "key12": "5Dqts5UGYLuE8g6tVmGEjUmoSwZPam8BuZV64XozfE2iJ2hRTiedDAjJ3WdCDhR5nnT4EaYovFP14uWAPik3V9v1",
  "key13": "64mUDqYiZjYv4EHNTuEqydAhyd45WcDjxjUUvyURKsE4QQeDPQYUuyrpoyJgAFweoJbJ6DXCgfGa5uNXHUHt5Vwc",
  "key14": "3rohWACP1rK4s5jQknrqYUoosq122QqvvSso6ASS37kPA7t59irJpYnsWufoJnK2bpET24S3Mp3tPFMtKyvjEA8f",
  "key15": "443zZH7yqku76J3ZubT9qGSSLjkDdE5naNBpYza5oVqrbYVCaF5BcCgtLei9kTBa17RdJVpJfVF8Jqtp9XLAq9yu",
  "key16": "1Uw7YVcQhZDnvqFf69GxZLBuNvJW1qUqc6CHTaw1mSAYdrsgCfSM1BSLHdzFA6Eqv5eE9TNwvSeA412zvAmi7ty",
  "key17": "5dvoevvDm2PLgUFMRqVAVjgw7ufGRRHQhNb9ayohUkMGBTGLNobavyJ8ahGxpZ2BWGak7KoMfR78yFrR6gapSJi1",
  "key18": "3Tby7pcBT54i7FMw2ZD7ZwCG2TiE8MqsQqKkMmYftfuEFBtnXi3eckvy4fD3uhxH7TcMfa66JHfQg3BLcD5ruHiw",
  "key19": "DBAqmoDcjpxqX61ccC23wLrMcb6KoMKKfLzKLTEBTkm7ExESEzVu6hzHcvSiqu9ZCBwiudT6a13VHduArg3fdsi",
  "key20": "31ySbJMdXRh5TcbX8ZYzMn6apsJTocREatzMaCH5NH3JZUdyVU76GLT4HAnWriLnLAuahLnHyk2z8SQiNvL6Gs6i",
  "key21": "2poGQxjhg7PpedgpezFmzSz84xz64jubqf9QfqfXJ3GzomHcvmxBYpg4QST1333GgbTgqtQ68uKhFvai6oyE82pV",
  "key22": "mRN1fZeGJj9Yoi8XsRRAeZChopHgbqjZPwDNBCt1UbzfVCNYUqZQp3SS5gdynAmeqbF8gh5TaWUP2PLyagwwoHM",
  "key23": "xpZCpaV2dNeih7Egow3DYggf8mD5p4rwA4friCnTGTaVEw7rLQUukXBkiau5rLoKxhvqAUpsRdbTu3dquZpfuJT",
  "key24": "3LuVXRNDTqeiFTc39dPogvrcakefUtUoWCH6KbN3ZoNfLZ2sBHMcwhMi736yGxyesdsPBFkj8FLhNtxHRJ78xcRb",
  "key25": "KiB91SE9TFuJfdwnESBmjaUKHC9qNky6StpNPZ8Ysy6hNors1pbUj8uRuXdFbjNYJPiotLm63qWwUfgGSuvf3va",
  "key26": "3TgRZGAo6F9CqU5JXkZFDynHhekRRwTN7r9AKprrrR6DbTdUGUB3W6DfQhcvKuPAYEBbNsriGTSJ3vLwGzquwCHQ",
  "key27": "5Vq1tfeTLvn6fz4jLyaeGU3ABvjvShzRan3q6na9KtdB88K5kMSZm5JPDcPGcY7pQXLbqp8trm2PCDC441rpSkqS",
  "key28": "37n4cKpRchqxojkDbgdpaNWA6Xt6qdJvmoScUJ7hc1G2pS3KBXffqVzLz7Bs38iSyg2descJQDAEzHrS3BnT1oYu",
  "key29": "38hE2uHSJF8gRJrTo3KyKDz5NLbso4BM5tf6VkrmCt9upimQ8JnzMVAZP8tKTj5jFR4w748P2Q6byE5KEkm7ABwr",
  "key30": "33EzxGNsN1EHvQzL1tZRimK3Do27ejFBwkMVDtkgZpJeYJ9GBfy1QunKH7QpGTvjDmWNP6XThGj38j8RHDGudcnE"
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
