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
    "5rf67yKGpXAgg7TiJCybNaJE9681Cwevnh7VQua9Lqhhd7iLf4VfeFdPzsLtfS3p13cszXERciXdXQVjXiostHpJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hhgZKHjjV7L7tVMonK9ttfXa4DVGSVfvUsSuGGvZUr7WHJGq6yDDrPRdFXimxS2KCttfV82fukPVFSeynw3byKe",
  "key1": "s57wiSfAJdFgq3kAecBdpfwWdKRuSbRBHDTbRoNk2CHyKChTiYKQ8qnGowC4Vme4H1fZEAnSuDDKHJyS7YyJhzD",
  "key2": "2mKaYovymQM53VQqiaftcZMgviiYVjWtZRb6qYQm3YNN41EZdNHshn2xN3nTpX8h9gMnneHZvQ2313yqch8JvuU5",
  "key3": "4oE8seK64Y3c344EqsiSaZtoHxyiVP24mxD4venLYqqU5kTq3qYd7qsqBsKbaKW8tvt2fTzXbSFRYeLM1xzYFTqD",
  "key4": "3wVQdGsC6Gezd6qMSprcS8J1VrzxehmGk4KrxCCFkNU9a5JCN6g5xw5BQyPkFhdsWCao37vwGUFqFqAiP89zjuep",
  "key5": "2X5Nd49AjwwutXry8vq46h8SMsDrr9L2EfQt1jFScktGbh1GLTBF1hfowpeYccHSaHWtDS44y9vffJS7d4HEYzdY",
  "key6": "3uYNVjjuJhZMe6G4T9H66uDTFiweGuKberr6TmUDL85pHpueiiSUcYtNVYkSEBdEpe67VYi8Ri8HU2NcHeyqSXGD",
  "key7": "TEWJBoymswbTRD1kbP8BECQmF4QN3hNYyC6Kn1GzXYBv4mUALmHUirU1FUeBQyU7oikzdfLp41pzvYHxkBZ9qRi",
  "key8": "419xE5TDhGs1PVfsNEip9TnNa8gs9FAzgsU5SHarqpm9kLaCQBhbNQnWYoosK5UAk2ftLa99cACorQNt2d1EGE1q",
  "key9": "4xWipgFyRQifsu7wCHdYrioGkK8hTDLvFSGZaTqUFfc7gtzysM8hFz2Hbm81HRESWHiMesmLbyLeyqydXHjeDB83",
  "key10": "4n1NtgnoRyRvQRuWsUzdgYQMn4ARaG8NRDY5Vbwsb2aF9TZqYJqs872x8uRCitba1Z2H9eVEDAtrPXKtBBpaLXQ",
  "key11": "2iMxD9Qca65byzUiMU19AJPxFcAn34Xn3LB2e18NWq3fM1QbGbp9RP2Kn6DZdgJPPSSQ8DLLSLJG5ayQV3EwvrvR",
  "key12": "4qi1QJ2eqk2ABiFJG8qBgEFxFn5KgTGgg7m6GAkBz2BszWDTNhcaQMVUJv9yXKq3bnLLPcpUXf1x8kxa9Nnvk9E3",
  "key13": "2h2KytoTydYGYSCjqu6fd6k8oKq9WLcYMaPTqSdvwDaeyoNXfKF3u174tirMA8iae1HUBimtor5yijzybDjQh3rG",
  "key14": "4BoD8WDj9xfWjAuYP8aaxShz97sCg19vMMSLRUkKkmCtvV1VU7LRnPV6VRm4QCvk6pmjXEkQK7F1mtosSTieQuEz",
  "key15": "2mNrCmH6yW8skNHu8Z6kJXFMPh7bHxJCbPnnAKsEHcH7jJNLNnanP6mmJSFCSNbo3LrrDLMm3QU4ZzTTLyuwHvHL",
  "key16": "2qF7PdPTTTUJjUzmq69v4dSL2JrnxoriV9WCS7mHHRmGfoeh1WDURtf8J4HcWGPPwfCWQt6n1me6Vrf4wbKgEg9o",
  "key17": "3qsQsktepeDshT2opmVL9rfoR3BgfVWR5ehLdMx7qH4gktZGq5uohW3P3TaPnQpwkU76ErSYPCmUDASPiQvPUr29",
  "key18": "52zi6JF6wRaw7BJhH79HfzB6jdxRxU8deoeL6Ke5CmwLc5vptNGVde6APVREMhSsAj7xY43yczaAqtdjyyV8rCLG",
  "key19": "3aPWkb6wCKNqiPSYtidpbknSTa9P6Zm8C1SNVW6o2RoUQRtoWnNaXVb5ZonJBQVLtPXkWA8PsKvsyoQLKerSBZDJ",
  "key20": "3yXuytgdHCQzqpxmymvX3r93BmUrLxqmFpokxVHRi3WW4AnNLrFWqGhAyHq8wzPqxJqs513UMRBCzB28QZzHVoDQ",
  "key21": "nBG8FJx2Vki13XXnZsLdKJzdYh2iCQVzuwZJq9uDXP8oy5Jj79HhVy5g11PKJ1PpAKWBqEwjVDx7LQmYLH52ZAn",
  "key22": "4FyPdJVJ2r8xTWSMknrNe43oP7DWfRPnM9xXQrPG4Pktj8EKHTTJLRNZq28odjCBHrMvsLCXwzK7dm6YK6yzRdBQ",
  "key23": "d9kMPCPY7QFyzFaktqfH8p8ESDKF9WYDgEXva2ozZuV7UFdABFHzwHU9aJ8Mvbk5YgeteAwDAT2V7yHCPuyx1LF",
  "key24": "4MzA6Uq2fXuxYu7rusotx2rmyhua17pnzQ3akaPXtB6hMz2U9RghGc1a1HzwR2JDQtqL8TZ1hEBdJuGmZ8dyfCjQ",
  "key25": "rHJzL5Fe8dM1hTG7XregWmcZrwp7aFueAPR8njEkAgD7Gc3TcRX7CRwYeJ3sRatZsZYorH9SyC53D5ffjTt2pop",
  "key26": "4LzyJyBojB8K6Y6Dfab2KhNZn19jcMTcaTVQSTo4Q45EM8WdDJwJXtexqPNMpYURk4Se16FmdBTtuPHCjyBqgFje",
  "key27": "2qjNXQimiiMeoqQqnbFParfzhToJfyBaK4Hu1KW9gtVGDTZzBwQ6VWDj3LJteWzctZhGLnmBwrhxc4Yh8kciSvVg",
  "key28": "3MDf4huEzF27BoAidiP9tbridrgwSh2iKVoSh8Eoh6UaLUwrFckDGc6XhJTCx7VQ9G6RPWKWqHY2giiHi6jNfhDp",
  "key29": "2gtzf1KstrtEkfhbENwtuiV5yzcFLxaaRGWXTzYD2ze5RYtfJ5W6GdFnKFKsEGhw9Kbb3jsGRz1Dn1PnfFoy977h",
  "key30": "2mVbjP5mmT4wVtjJbK3fTAZakkHtBj5gw6Z6mSq4uUqDCPUbDLWQceTTF8p76xUjhNyaV1wLmGHpsDVvN65f9wrQ",
  "key31": "3Lmcy6iQGEPxPNc2Yvj6YNXdkBR493vC56tHjuuU187BoNgduRueLvuokqnAzztQcwCRQE66356CYnTbE5JVFJ7Q",
  "key32": "4RxDLjTkBhECrbGRoCFpB9mYrMsSBQtMuwB2ftR4yXpFEtxtmoQRMsvskNNgBPnfavSvFEMsY7iGGqHeTJmBVWXd",
  "key33": "55Mb5JrphkSsnc7m6aHtr9GhZENHTWLAP1RnQtYFcJSQP5j7DZLjPkpqybAte7YzNnpZ9QCUM4UGTCrWVCuRZsu",
  "key34": "2jmLJ5Kv5B2VcLZs2UjB3LkGAFuhx4BX12EQEj8fHg5gQQ3YWBY54BYHDKcQomwT7Y4dEmKAPx5p3zrFbVuQKzg7",
  "key35": "4zwAoj7zbRf7MJEyjXVcXAvaA96No4u68zkAp8qDrh3o2F6Bmt2PK8bYMDNmk4sJaM36VMRbbtMdwb7G2qCcgyap",
  "key36": "4bPhn686aE3nLwjSU869hSmx1kWbFiBwmgYPDso2cLRN9DCderSb7hGfZJhPeb1K84sZvWgQC73bakaeQ7i7TnYb"
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
