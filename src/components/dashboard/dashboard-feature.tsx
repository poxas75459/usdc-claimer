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
    "ECBg3Eob4D8vw5zuMzpqCAKDCR68QjvW1R86P7YmMjDhvXZnQ9YHqNpSk8ZXbjSG4UtE4krnfA8FTjHDTJ9T84u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bXQHxPtPLV72gopVGzs8m8j6dSYcBYTHS9WMG97J8HJEu8M8rsSQdm7hSFdzSHmWtDgYUBKMuRZopyKEDYQoDZv",
  "key1": "3yeptc22QzetqmsGcSrg93bKgdtUsA4SyM1quyr4hDZmNv7A1sGiMexSxUtJvjKQg1sDKscEjNkzPqj2VDjAmhah",
  "key2": "5UShQrL6rfBdAbwvzWJzyjPQKzkKeF96x74o1FeUVU5HRgVBYHDjGpmJj2k9KpjTkMAZpR4zBfrmZoLCW8cLrHSi",
  "key3": "4dpi7PPxFb4XYGZ5KW3UQMT4NJrfu5u8jr9M68NorfrzTvJmviebQmBD6rR59CETpxUG5RczMNFFgaj8EiRUMiLT",
  "key4": "5BGLkuX9QWdCapxxSMiTzvCrVKmRkNNSG9RwBUjaX5arnZtpDvgLdaNNkHRPjGESBLXm45Uk3q7ux4xLiEbbzH34",
  "key5": "43oVRzeLh91XhpkG1uC8eFqJwwLpRgC5dSYRwcuEpr1cMHh8NQTWo49sjSWCQKUKLnXV8W7iJACNzK1xPMKEZjAS",
  "key6": "7QkP7sLURh7Kv7K6ctgZZmAR12ZpkUT6dTzKaHWB2RVNLMuv3ycVuhLG3CMAeHiAsd8y6dG2YbHPDjATMVww3EM",
  "key7": "2zLVJntUnajPJj1wm8LTynxVykms7azrFrfAeogwnPTEy365BJin8d79TNGLg4yFqhKjjvDEfJfvkxPx3fqVauNa",
  "key8": "YAWjGtJ6bTL9cUb6M8MxmyAcEUZhn3mNRdVhowwQ5kb22rUa5WCFSBNseoQfV9XULtDjYitAtxLSpFVSTugctfW",
  "key9": "5AX8TKSqQp2cN5Hv9zgSc9i9JqxmtUa4AnmbsmtvJY4wBACuKatF9uTtVt3xyJnJndqcGj1wmPWViUavLFpf8GtV",
  "key10": "2o7BRN3wCeSbL9DR91nP7tYFQyo64Th68dhRbWcErupictapjYXbjMuL99wh9h8HCifGzVG1uudtKLCj4hjAohMn",
  "key11": "NE2UYomSx7r6gXndfpB7QdNYigHyAhdHwh1sPp4fC7hxXyW8p3QL2B8o61ScGx5yjnNjuVDq4LjQAqXjUqSHxYY",
  "key12": "gVipRcn8XtwKJ36aShqcDbvLP2qKqUtfCcTx4EGPeML7o62SVkoCq6TYdJcwkbMbZLUzmtcF6taNBTp9KsgFhbk",
  "key13": "1mV5SNwCeGHRosYy5A93Ttyno3BJAk45exBBjKtBCoAWMbdqC2uetGkWDzDiVwYCZ7HKsgnMe16yP66CXtExaZP",
  "key14": "4sPYAmY7duWqmtEdUS3NdLFmFEpEgms7LGYFNUH2RTus5c1VVutyoyVajptat9va3in3Z634HxFsMDN5snSmAoTo",
  "key15": "653Fm9vidQmTRTrULEu7yh7xpMYoxF2dadR5f7nZEevp7gmP8RnuCmxaSPPvyKZtdUTwksGsCefAyBTwM9tyxhXw",
  "key16": "3udzrg2rkGyFTYX1GMQAFZviwPzojTSZdwuLCZcEAYWqGu2JQV3vZ1i6yu58NHNRgmd7EpQT1jTD2BLzMEBwSGK5",
  "key17": "uB7nSzZNBHeJXXyt7Zsd9H2m288PjvJqNufbrcs4LVNYfRsda7My6hP83STFRNg9uzUZLy75wojSjgjZH1V6Cvc",
  "key18": "4qv3xEJEn5R7ZyXpJZJb37wmNPZbPshWZoYZPY1chGuL19Ytv89k8RDBEjrXF7mZXzrCj6Pw4xFtdANWjncoHdib",
  "key19": "4YgC9JvUCDTKfTxuxhRtix7y11q6V9zkyNuDr2SS7dFJJ26zxPLRkX8YC6shtS6V9tEK8918uH1tm5ukMSp8phEt",
  "key20": "4HSLQTX2fMcZgFxVzjXh9kX5qhXT6ybGTDoJYZxVbTGmoCWWKkMNhdQHyxE2uyigrD56fLdcMLHgYreZzdWETEdb",
  "key21": "2WHzKmEgWpU921NQiQGHyosPiLRRyPQSpZKQAShcdKGFcWtd1miJWWUcSQy7StJFqGJu6Ah1KKJcq8xTFzoC2ePp",
  "key22": "67AqcFuyPNGB86DR7MNyBcFYQuS5AAirFpYXyAndFpgdHCE7sJdjbHwQtLkZCgufhTTdJHPh1Bdm36rETmZ8cm4L",
  "key23": "5M5WmzxKGSrde74S7Qy4oVKcDnqa7Dd76J6CiYDdE5XoFwVMUmcYhhN1pSXbhr3t3bLSXzetD39C7XkoZPTQmRZS",
  "key24": "3Xo47a5qsNKQtydUzLA1d52aXT3zjWaT63wi8RaRYcydu7eX3w1vvZtjqgCTZNSXAj9sWwuhwPEieZvVhirr9sYe",
  "key25": "5Rur4qL2NedGpCWHxTgF6JQzUfix4nN6Gs8XG289MiV5WYfoNewqbKtUiJoavnwbgBby6gN2xAPoxLk1C65VrUrU",
  "key26": "5dAiS1e1HrCuickAuQDZjpXCsEUVu4He5SU5RAAmjGNSjaT4nieFMUMwKEK3fML1Z8m5kr5TS86Cd5tgdw8cNerE",
  "key27": "3mpGUwybynA6y5tW44HecVMnk1occCh2tyQAW7FdVW3z9j95ywWGz8ixZU1T3Ue2f71PEgdg1Vd4x5aQzL4NRhRo",
  "key28": "4CP1Kru7r8sWa4d9kehNtVfB686AA6RYp3HpL8S8bokyqtDEyG6D2dDAasBLfFJdK8GWQjMtXBLYktfywN77MEjo"
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
