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
    "whwwJ9Vt8A1UWA9KybaUaAx7duFWbTCz1RsuEiDH8JU9svXxLkV6fdVoKsE1u7ahLpCEDFcUsdXvSvCsHaULEhq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6bFZ8CRJMBaLs8pZkBka44oaBeP3mKh2igPGGSTr97gpWzzykm5PcoVfHzNJ9HhCoqGUu4dHkcShGuYmWCmsMDU",
  "key1": "1yHfRzb7q95a1ed6LGQhihXYSQNooXH8dAhWLgjKcrqYugXZtWDhwvZM9TmBZHCtAyNdckbft3VCpzB1JD7J3cV",
  "key2": "5hwnHLVeQEzb34P9RKiNRZWDGct8UtfWU4QTwuaAeQCHzkievL2p325iqRvgQdVkgq8E8i5GddaYRGWXQkNa9DuR",
  "key3": "3ZcmoXbWpXbsFuGeM8mPGjuZVFPqyk4jyr42vN1pjqSF8aKqVUuumwXSiHy9hGaYMNKbmkUTSxa2E4P3xNshoQ6n",
  "key4": "5izC7gjL1tK1egNjP51GVKatfMJKb3xoQ92TEmGVQVuaRPt9JJFKFraESj3sh9YCCmubisDCr3nBPsWU82KPu2Xa",
  "key5": "5D1o5Y42tNJYnNjC3WvHimc4nXvXaCPS5DMnsPHWbmbWcoqRwm2uAcEL7VYjvimd8THjn2Wvt8cTqepYxiU4xke",
  "key6": "rWdszz35aWozmK4bT2rX37G3yKge4GBmxx4ZprqfqCBWQvPEVntnyYYr5SjtD4RtD8EL3DofyYLXZ986hC2Jt7w",
  "key7": "62MyF2HdzT6vedZkYiuXK416xbKJP5M2JEFQBeXZc5acydYPQzD3efTwWKMCNxvfxptGZ9Cj2iLCrQ9Dh2hQGkhW",
  "key8": "Nu5a1Ykz9Yok8m1xByt134HZwFcybMh9LE6xhjnbtLPYxU6uhAWWwyo3BiBm8dh8LpzNssQk3ZjMqCHx8G5QftV",
  "key9": "4b5CYSU3rZHtzpYQCoeNro9JkLW76SN5eAZct4z9z7ZnXiTwyBa1BKuBXnLPSkME6fh6UUQepaDiQqXcLZZpGMQM",
  "key10": "4NXtm1trSQCtg3BWvpKGTp3an98qoEeqgY1vQbpVsisXXHxEXYEipoyhgiMeiLRbMnzGse7CxuBeR3A7PzGHnSr3",
  "key11": "8g1PetK7oidjZfoE5Hxrdy2Xf8cnvsQ8YzTp8j3fQEiBELtYcFhmhptDETGsc3Kcikvv4eEGi2P5oUN4cqwvzn3",
  "key12": "KJ1sjGXJDzgubx44MxLuktvaQJ51R6hgRNTgGvuutG5Me3rHMqNQY9QfDFxXK2wC2o2iLJRQycahp3EpKEP2DoD",
  "key13": "2TjRpa4xdQP5NRaQa54KdDZagoG7FQRkL88CBjjowPG1jC2s2wHEPEbfcohF8dANyc7ibf8r4J1qcK59WLmRtQ4G",
  "key14": "4Ty3eqQF3vvSunhiCPBvNVRADxTmYjyJz37JEBnE1s8Rtr4FPcpQFRxS1MkKuva8spDETFsXogtQsG8QwPJZG438",
  "key15": "VrTZK7JgddnyXXNU4sNzTzgMitL4uRBB6wriaRbW7SkGu56PCSQEP9rCz7rYYbZE2PSQSxKduMssGgxEcLV6rcg",
  "key16": "4LP1UnTP756T3VQn6X4j4jHPTDH8EHgqVMpEAnGtpZFNFqu2iwFnr7pdHKaVoQ49Fk3wVceQ4m9LaMuRbGSNsuD4",
  "key17": "4VcSPZQJi8311qfXKtygsNaDCvRREVYQtpJKzRQoD3gPYdnsLGdgzYXJL9fF9k83oYD9yZxBHuRfPRCbRv7HJFBm",
  "key18": "mfycbiHUTEVPzeKhugdKwckvssPjYL3spRdZLffViqEAkcdHKMRcEH547cd62Exga2Equ3UkBKURBJyBHxyaDco",
  "key19": "2W1mavVuBUtbHeD4NY3DU7wGSDGHqyujJC9EKQ7JaKWk72f2dXxfPmquWeA9gr5Z5KHcSHpX4KPCgzovBHQCdDTy",
  "key20": "4Upriyme6Hd58XqPyeeH2q4roff2jiRth38FDhpfQpEmQvrRrovTHTKuYaH3CiGyqjrEMNynaCNyaPq8iLiFeikT",
  "key21": "3taNXyXapjEXujTgwUNLn6LMdpA8qsie5jQfE8N5nnJw2rqAhh7HY8vokKthMZvNqEedLJUCqAK37bHmhxwi14Yy",
  "key22": "4J3844trCGTp6VW5gG2iQgJn6dGAEZkKDqr7s2UEarJktpQaMyZDcAtbEcfBtpmN6yWXcF6GB8FB9heAZLn1sDZs",
  "key23": "64Zt6icULSmBguQNLt9dRsbagEMSwd4krnRa4Bcsdr7hm4DSPPzSkPLxDQkxokXmWdL39tMYttGKECySuAwoRwDL",
  "key24": "HbmdwYwkeML214C7Wvvo7cWAwKqG9bXSN8PpmzE9PX4GgVBrrNK994hnYKH6wJjqqyXXKLmWXVQNVt2LVCJ2d9R",
  "key25": "49kSsdxGFQhVGhCBHG12hyk7AqgXHQJZEuV8TjdsYo1acEEtawABXWzpREHW68noX7o53dYGHBpymY8f2ubqE6BA",
  "key26": "2VT9bmRZL94rQRpAMpwfqanstbaidZbjGKhKciTDX8Lz44wBQDEEHadSgnBxxSCzm4vJGy5VmKuMREiRzk9x9E6Y"
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
