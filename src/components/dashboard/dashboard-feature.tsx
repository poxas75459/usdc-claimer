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
    "39BkgHx32an8ZfNqhxi9gsiwqNMCQJQphztemhg4McCSPJztNCsGNDaqvQstTD8cfvzYeye4vBCgRe4DEdjm9w4K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NLNpzKQAe36V6VWShRBVUCmSEdNt7a7Qk8PpJSCRTttn2f88uBApqTN2MZNcbW2odY9QtRhrjQfBa75QacXyPKL",
  "key1": "3aGAGrBbt3SHvGr4jfK3DZVn9eDqLKzyiLSVADYQTKhx6C84hK4wfoccQnvZVJ1Ar76jDtFz9PJsiV4HoK93tFeq",
  "key2": "5MjfS2zkxQwiEJ2RWWX6AaBPRsuqJiPwPQk4cLsEP4zH6QJND1vhPVKZEkjvPE8BaABC5pKfk1U9omXtrdzUbDZ6",
  "key3": "5Pwrt2gRAAwHDuFDE5FEBza8cMJxxbv27NEZBJFwfqXfUf3QBiGkGHMQr7aF18MWcdT3wy6M4Jkq9mityppKNLA2",
  "key4": "3rTifjF1gon3P9yLcrfJvYXLW9cBjNsvabqd3Vue8auDftPef2F18Q4cAsFapGHZMg4kgoGqx8iyeDFr1YD4ZnnW",
  "key5": "4VNgwkGXWGfhBPEDRhNVkR5Y4EYA8dtk9aF9XPTHNDbuF7CYh8natuAdyaLvpyc96n9cw6aSyaGPucyhP5kcousF",
  "key6": "4WuYhSiz3wFUguZtcgyJHuUN4DRkAivahQWB2LEt2cvLTsCRKmusSgbkFE7x2BM8jJ2aXpavMTZsJcwpE4Wymzot",
  "key7": "2T4gyrgJ9dY4hoYudhm3NzJAHvvGBnB83eooLzdjJgRRffQaTeDb2BAvr7dpdgz3kdeA6jnWced3sHpEaTUvev9v",
  "key8": "2opgkQguhoS2eFeVnx9FSAHW1joCM33sqJupJmxWT4EqSBkA3x4KHManiJKw7SDSwcSLBSwGtuKphUqM5L3MAAC1",
  "key9": "3hbuH9WaRpwrgj7G45Xw7EgRDZnCyxxdfAVLvm1eeebSiBxk2tzMpGLPvqaTrfj7RuWMLkjY1WauHvcbMNxMetne",
  "key10": "3W2Sn2kLdVsaqwNi24Y1WzKGp5iLCWnYKvoH54r6UHz6f9v79M1ScWyxBK37kofGLonBBYoMHkCdALdX2XG9cVY2",
  "key11": "xYXjJcjKF3LBtNbjCroTYoDyvCgYHHzwNDH8cZS6syXu9Xy2xVWLJv7euGAYK1msFcqAxoUyAZG65bpxJxa7zqD",
  "key12": "3rqCMNjzrTKRdYHPR1JBzyhJsWyzso6DESVpssYfspeCk9aDLM6Y4dtjxASgLLhzMXcFXkVGJzjjwJyrxfFXMscY",
  "key13": "2QKhR6U2MgRVymvkCMdxYEJf1QFSH5uiamwU6Cn5kNhUC3SjPEm2HDPpGkfwWgL3gTSC2pwaHPM6RWrqnxZ24vDs",
  "key14": "uTX1EqGbmci8FB8gc6P1t1tM9fWuHethFiS9XbY6H6g9xaftZZNdGxnTk96mLkg5jLPyqq8YLz79SekVwaHUBJX",
  "key15": "569gB4BnhtPezgxtDsShsxCUQYfEVaab4tXMQQDzjQ4pf2oE8caZx1B1411T9BiBF8pCZUGZqMtHNs7rq3cB8mtc",
  "key16": "2WiyJhxx86bx49LSe3sVckBjUkixc6VAYf8SFhCFQT4m2MvWmaCWobyKD5s64mxGEfPmpyTKCBH8Q7Dzac37FUZT",
  "key17": "4dXoubkYfugPESkc2CH5zZ1uaTnG16nRN61g4qBx166Dw8RicLAbo1h5RTwJ98KDGWR9qVP2vVj3DejKZnxmkTMe",
  "key18": "4XyM7WttEVCkrKtMyF2XVJ23c5zBPjaYHmTr7YZ32nVGtdZfhtxPGWftk9zuwPRuvNeTEZMB7poF8scQgNH6Va4p",
  "key19": "37gYiW27wYFTF9aGdpAndGysxMf64gffWfqLKKFH7yVPFAV6dzw77y8A4xTeQbWSkoeHtu23qZcpVYFQjeyAg4NJ",
  "key20": "4WUTBvPfuq9c444WnGQ73FJmMyfuXyomyKUG186iAaYjRKGzah2fAGGB8RxzzftWHSucUguLLDD6RDjM7rzSWgjM",
  "key21": "3AJCN2jAHkMgUB8nDpPB5wxy41Vob7ZbtviphgTBmeAxyqUoMJZGtu9sojvyX3YfTuAcuQ7K7qofjDiXLNyxpgv9",
  "key22": "3wkvyeZB8jgYxRA5UYqC2EBRFVZJyRmBD4xtsEGfuP7DyFEYHy1SaWYmPGRqVbCUKgTWiiYKfLch3mjajEYDnTXG",
  "key23": "2cVgWbHLxLn3iccyasFkmZZekiec3JhsyDtMfg6Ep9m7ovZzACzafRikn18rE6Nadf12NgdHDZcPpr2eiL9fvqXq",
  "key24": "NQf1J16hXg1RpdjupPpzomZSQ2ovUBfwQvvnRDkZoEVi7CN5mhysbBVuytwZdn81ceWPUxA8tEstPbXSmxDWGW7"
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
