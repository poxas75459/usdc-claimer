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
    "5NZgLSwPK1h3PKz3X69RBhffHWYp5FHS5Ty63tQdrMNrCL8sSyY4USzDnggKJE5KKWVjJpnL7fTJYdUiCcn6QCdS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "167drruaojWe4arzNiEHnZ3hBUVxRx7Qgn7cQYpfbTrSJ5PSzB25z1j6VKmk573bAF7qQeNqE4Xd7SJMoFGKde4",
  "key1": "2eVVsE5wdmQKTQB5Be6KCezHqSS4cCRHU4igKbmh1yfnKBsHdCtL5zqRAwLkqLQdhbUNZQa8RaYVLjRcQHEEWnWz",
  "key2": "3CHn931Ltf6TGfYB2MroTBnWqPa6WzAC8GTw9Yxu19Wv1QFG4YvXkRUSXZnHRMHWLnaWE5ny4nyGgGaxE7orKWYq",
  "key3": "2coBjU4m9oosQprMETSBZ62rMBmB1zy8bWUmJsuNXntNZfYpzFYTiaH8UDa1yTpUE2e39mh8htCuB8ygrHBFyskN",
  "key4": "qsV2DPfjYBamJ3BFxwqrPkzwkGiuHYpQGVBbMyCcvXcTurLzQERMfD8z3ubadXR5rLduAXv1BRwopM7NGguCVCH",
  "key5": "54xd1CHsuoMm7J7eeTUzrW1bJwGGfjd23g4A2Xcizt2wWi3f1EwzdMqA1oCQGxDJjDeQL7UQVNA83qoKhFgmkwrZ",
  "key6": "RvcwWdyXQ3YnBGLDEk2QptoQfZqBKWyuwQdoNNw1tAFSxb93Pec7N5SSujDcQSyksqCvKgbkaR1r5TnQz31Yx8s",
  "key7": "3oHwAtnNUpG1LzjTDL7m373JZZgSRrW3sqhKGq5SHfbkd2J4gQgCTCakuMtKJGHqkJttLNVHu2URmq7XL28GHuoP",
  "key8": "38ni3gTaXY2L2tJF4KpxjrjdCLsqyLwCJHmcciQNqw8Y9ZcKM59rBHjdfzfxx1URScRsAT2nzKg4jQ2oFzbaAeuW",
  "key9": "ok7Po92qfaL9o9i6ZQifMQn3AFFau9nePLHR8eAmkUMLcRaZrNNGvXTW2n8Axz8YyTE9aEogrtagLpDwcnQ65hQ",
  "key10": "4Tdc9hFWuPcdfWFLEg7iWS83mQXQKAmEFdEKPd5qyCfwVEUKQhE8wsEAQaAfheKym9CcjyCZ75ynKfY1CAyzPwHi",
  "key11": "uL1XYfS2Yr2xjVLrkG4jwNxWmzoFdu4igBaYx4qKYLBra5oeBW9zvpcvKWhm4oWZFxgqs2XUPieQzqwLkv7zVSE",
  "key12": "Ueu94k9aj4KBdqrbTDVKYiNrZssAFyzysA3jhWt9AuXRFmRe9yujVDNf9HvWD83sAvjnytdr1LWTjj5NJynoWh2",
  "key13": "5X75foFd1i6vjmcT2WCiGekPBxCcg4naR4Cp3RiC8Sv7T8cCWyAhP7tRM9cdTt9CpKvo5wPuWjiYZWgomcTVR5UR",
  "key14": "4DU74Y8ZZD5CkDoe5Qg6dh4ioHw5v3LLyqAi4CEJX1FWtkogN47mQBMCXgZKR2SW1DobKSpe52TMviPtMwLEuhFw",
  "key15": "6SjM8NFTrHe7bFLX3gV1qGmKTfHwudoFbaNwktn78fp9BZknrZykL3Ds6BV3zetiD9swcQcJgevqhdrNvRtSHqK",
  "key16": "62URa1Mexhip2N782cqX9h47YGzeNUxw9oNmh9aW8W99spvbxuTQ6LLJuqKoEH8wPCgTyVbqe4Goz3t6zvqpsxQe",
  "key17": "3pp6BKnXrb9isf6oLvMbQwyi2EHmohgVZvXdDqTRHu7Maeexkx8dJA8ziCM11NcLnuqezgm3orUzVX1QbjxrvNzj",
  "key18": "23QfxmPyWnu7dGDyCjWEvmZKeEDJNJ6G1sRNYuuqCH6W9Priec85ztSPEFeM2DDu1WY1AjAJ3KFfvfmeEKGj1KUg",
  "key19": "ES1APaofWWgyF1QXU8DAF2rtxdJn412NvoAGgQNj9TxPKvzA5VWkeWBtYAjV89Pp37RvtEkwwUhkYzKRxBo2Uf6",
  "key20": "ssTCQbiENwBUKdEuaBEK97M9Av5wJKxY8SzGDQKVYHnyioibhXuqGNsKmLF4b1q5LBQigAT7ASCRuCu7GtrLjQE",
  "key21": "VeRXYd3Vy1PqePpDzos5H8afCn745vBFr9YEX6pUAsKBBKrkeybqULm1Svdve1ryLpPCUyWdaGZmmk28MjAQNqb",
  "key22": "5V67aZ8ToeXjTXpC8PWAW7WQamkec5vNGskLXEvhrbokf5nxQA637sT3Ezaz5gojGvX1X9mWby25Thg5VLpc41vp",
  "key23": "371FH9H8wuB5f9aMydD1hmvYpTDwmWKdYH4ivZrzQe2tYzyRFJtXdeiQa3HtHx5sRE7PNhPjG4xpZnNRqusoQfty",
  "key24": "43cTrUFENVMNFtCkyUa4LSQT8ToeLWCVjjgHxnJiAGEcLPReLKhwJktoa9jifrXL2SeiFG5LbjHeXPjMS5dss4AG",
  "key25": "4dzkjcNk5koVhF6SYyokCyAx76T1Rc2HEYXTvGY1u1K9bWY1ZArk639vihwipCRwRRWXUvDokHcriX7nbHNz8qJD",
  "key26": "4ApmAvTjGyNutHQ8W4ii9KQy2QjuoqyXjpPyb4hoerGFR2hnNKypGNAYsKejigvGfKmsSbukqVuoxMfSivvMsxSq",
  "key27": "47uaSoPSGzeHXA196v1qoGMHZSHHhs4XJEmYdg76K1zjDwvyqH1MCoLr3TLenXxdVJ4PaqYUeTbWfEror22ULFhy",
  "key28": "5BbfnjBZMiUnvGmBCgmXKWCgUuMuS1dnuX2S1eazP6ppwMbirwxsf988Bm379sNq17rCM8VutQkdsXPht4AisCQk"
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
