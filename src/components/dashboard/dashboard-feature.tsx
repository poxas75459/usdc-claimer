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
    "4NjgfkM39Ca3LMoPYN6w25vVLnoza5pXsWDPZLXrexUxLwdzMV8ht5tbsDTMkFqMAgRDr44uBHrSzG9XyUg5vaDe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kWN9Gw1cYFdQXMoF4EptVSDoAoUtiNsSH2W4MXkUmvgoeikZ9yMdFaz5sS5MFxmq3h2JvKLEUXhsubUQSm1UEUk",
  "key1": "5Uk4fxQGV1copKXNKT5pSw1KR6o5Hf1RCMNc6qV8JjXpLpeSf7kcybeMqnWPUT44BW388qSxzb6XNRhXcAnnHvkz",
  "key2": "DpqoZ3k9Q8JV3QCQmHzHGbqEGBdqQAnCCW3HrrD7zJR2z7UWGv9RKFUHrysv7tM9kzixJWyjENR4CMXTVwjpbmp",
  "key3": "3QfrispJd17CteUop5iYpFc6j8GG8HjadizqBzSpCvmks4Z3aAqrWZCnamTC7VsPycteQ1zPsqWfStvsJhCn95bB",
  "key4": "eq886J1bhvWxTwsAjra4kJ4eQ2z3Y8Wfr8HaFUpNz8XaKgpXKyAjEXyzcVVgX3FFQg71RN4Kk4WooPmBbBow3k5",
  "key5": "41HFYM9HwwjyuqscFgR6spqm2aQgXb7qfJEXYkoGa36acVbCz3HcVS11bjiEU9aFtydg83S2mDBP4EBE6bo5HBut",
  "key6": "29xJYGsc5GN5an7gmg8N6BJ91QgEYu5xw27ajHy9RddQLMmvzgJiF94jg6BV6JgxjsGe9ADaKu5yDSHs1EjG3L3m",
  "key7": "fteRTyQvwB88W2iHAbDqtPYXArCbxDiE5Js8uYmB75D3BfqUiQF1H9nWdS1McrvgrggY4Tsdih8P4btnsxdAP8k",
  "key8": "3Lcp3Jj22BxHxGKfyepKaaf2XaXS63mFGnvzTDPSteVjar1ZPvAMYuKr4o1W1cCtnxFtZzGFscxmo42ft3ZWGbsm",
  "key9": "cTTAnYBSymeRhRuGNLcWwBHisRbK6Lm4cAeVy8e8gwbqP9Pe1YtUyoeWQRDKtkg2prheLC7dNBc96CNaFNntFZQ",
  "key10": "3cRL7jaq7LtFVQXDFAVH62AcM953Xa8c25r2cF5smmrhvmFyi1n8xfb82yE6uE2zxbrqnv3nm24LsUXd6jQMfo4q",
  "key11": "5ZESn2Dugf36S51VENSnW14dg3YM9Sn1zcBb34Vjg3UCafPsohmBFad7nZW8tYkvbjRJzJwjUtPxc1UNhsX2C1sh",
  "key12": "5eQaoESCqBJLyp3FVzd4MYAHNicFk5a6kHckzZkrbjYamy2uM2QqBWDGdko2p325e98pkEfPy5BW2LMc14wc385R",
  "key13": "4FF1bXaEek9uh6zJeLZmiSFxLyqi3Zpsf8enEgpBcDRPZQ4E6d1K139h42rwCRNab7GCABS6VJAUgjo1CWTFRm9k",
  "key14": "3hmEiHq6zWa7aQSRgxKczSgZJ9dFR2jFmrC2kVknHTYMsUDXXQRBvt2SnAYXitMZEep9DwUyKeZK42LXdHFrq2wd",
  "key15": "5usC2ctRXubSSw8v8UXRmTBmggcUt8eji8uk9LEnUWXU5cEwrsM2zkfnvYTUKX2sx7SAbg2HdTpywak73VWunBPb",
  "key16": "5fpz7tUdcrMUxvFwZ9ffwAuhKkYojJNGB4rhEukNYe2jrKLNMhZQjJu9aDU7YHZmi5oTVVjAYfvcLMZArpgNrSfb",
  "key17": "27Cyc2aWREvpagTDfiWpAaayAAijmrBaBUjEtfoRDvYbWZJPtj5w7iuoannqagejr7oCyNb86JLQg2vJWampjmfv",
  "key18": "2p4nuB4xdDewQ11WcdQeGTA4oKKfWcoMMsbxUxKpA1qvq8FWaZHW6VJWyx4LRzYgvwR3s7DwP3CtRB3nFxCdnWe5",
  "key19": "EnMRNcsPuknpxUDU2UVpmFTtciVJjFFdnvHH9zp3imiJNwWHPyGfVMpyasNZNkcksUL8rgWXAmRvmijAKSvbZhE",
  "key20": "124RPWFVEvTviUf1XM1JSaBm9g33peTKyZ2f9iLwtp1oXrbFtBEQEF1PT1NbjCcnGeETxKzpZkJq2B1fpLY4UAj9",
  "key21": "2LVkrKVNfr2ZibxfEsBg29cYh1JTKLZEiM8HTpt16iRTYEhQCRrMb4TFtu78n1E6udhYWNnDs5bCMrS21qVESuWj",
  "key22": "4Kjgi4rUAhdjWQxAckkVNL9oujwmgDaawwt1DKvQ84KS9YWmWsmgx1vM7PJ6t5HJu8Mpm7chKFWhc7mD5BQRbihR",
  "key23": "4FMNkwqEeCcgp29uKrnEYFLa5r38pXQQZMMwiDqa2WibRpQnb2WvDDiYdZ9ng3ELC4rpGudN6Grt2ufzfyEx8nv",
  "key24": "3pWsWT4u23qh1LhJRzC2iFK8ZcMG5gGu95dkMVRu3ZH6x6FqXMBhxtAW2KVvZeVtTbUj3NDrs7pLEqBWTk69w3Sk",
  "key25": "2EQPEfyRJxrLsx7y2bD1FCiQNtULkjKUQ9HHWXuAvQwdodZLjCQvZa7iMNsVs9xbeLDCJQuc9uPUXrUS8L1kVrmF",
  "key26": "2MvzgAYC4r9VyDvAMJFWMnWTVTifvAzedjG5dqjqHx8tVTcFLYAoYxaZ1JUAhsR86u6jU73fycwj1QCH996eWKF",
  "key27": "62829ZAPGZmC9tSkf2fHLWvjx7F8jnGPxTv544vzsXBAj8sJiWxrNANotVQq8Fp7GYEeVtkapvWNA4i9T1xQeAyd",
  "key28": "5BPMboABd9MjKLFPTGaZZdyz67QEGCy93xUhR4kqvYbUw91ybhvS3zMmcXXawYfF5H5BxsMBzUpj8JStVyYFjLsq",
  "key29": "FsaT2o35GJsqUxw15Cxs81BBssk2xKh8EHvJ72r8vhpkZSBTSNBeFPSNWny94Wo3jsqh9Yi6EQHAmv2fSaqtKec",
  "key30": "3L4cvctZUXRyLPE7RQhm4jY5rRXsmcDN9CKmPMut5k4aYgQ4NmsBVjULRnrf1fmrrQpBtxk464QwaDV43rumzjwr",
  "key31": "59BP4dGyjNNMpQkhQW4chKdkvfwbryejHpTd69NfYgEBzYw3ZbvVX1X8ofNTSpmaGMKpz7GXQyQ8H5W5auTbfRMd",
  "key32": "5jjG7rCXjojj9Yy9cF5SYBPPwjVpc1k7YbB2WDdpa7eWCng2VQYSwZXrBzQEhD8PxRzw38VXQhRNznwbcn2ApoQp",
  "key33": "hqbkqYYrpPFWnz4niSb3EvLaQZyqk27UjxkCB6Zb7MCeU5E1tsw8cT7d4RvoJZvzSyR6x6aq5rpP4ARCrtv8soN"
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
