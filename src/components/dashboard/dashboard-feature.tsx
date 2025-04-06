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
    "4iZRzZUKayvmxsrZTn4WVbHFeVdiqyvUQC4JVEYbKUNVF8xBoBoD7nzLSr4UhT19EMUvtjEi7GwK7fQcgZxkRHbN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BmRysHUkp7gN7cUKEzwNAACW57YhNgx9CzgnNg16KX5Fhj4BbcA9T4mr6na7K21Qjbiq4mxgyXz6fuAQaDSjouW",
  "key1": "58ZJq5YA1S46nrha3khkRkjRbhnQFGGaZ6zdBuFD7PLBMTCgDRDDhCLs7MaCsiAYAiBhYtBgwL1Jq2Jcj9etTBmh",
  "key2": "98Jw8XiNbncF9xBCJoypaxWzmbwAjidPYA6gU5myFYTFbxZj6sYay6BzfcA5CAEgYhJ56vAFsSFY4AwytvQ6Yv4",
  "key3": "2SozweRjPHpxKT1XVL4nJs4L6x8BG2TPnWtkvns5iPZEueVBYPNqB3RbzurqGLKF3MPLH6mqfyfPdTUhBgrNg4W3",
  "key4": "5ZpMedwL7bVUrKA6tAa32t6BVAU4ExGGg5tLrL7AZP5AHA8q3tKJjRgQSxdGXeanG8oTetuT9WUC4NB8ES3SKogx",
  "key5": "5PqayoH24ycmkgL9p6PrLTnHxW4gi2ZeyQHW6BGe7DCTCoeSPyJxiYRGrcnmZXWQbw3k322t411WhmX2ehyTrMfT",
  "key6": "uG1VvPRmJAMw6uTFCwn3RoMy6VFXJ3bcGYfFMmgKhoFwjMQddhzSJ5N8h5VY9wUiW64EYvBRhfoB97EKrN5GPWu",
  "key7": "2nGNEcBgzbbHjzfJPQbkdw6oZ2xTv8NyQkseAiakiechopvbi1XGzyEgNa5tMAMSBtjtTfFPRtm13E8awjTcdn3y",
  "key8": "3fVyJjRC847q6HPC3mcBbdjDQ7T3eTTn3vyYMvpUXaPoHJt1zpARzkQ3eGDahfWoeAZ44pVRYUMVPDD9uDb5FkZx",
  "key9": "27uPxkgTE3e1dF8aUSZGwU8EDdr8iAANVwi9Xsd1uvzadD6B9RNXsYHEq4qqcEnApkyFsaeJA2QfdKFiMD6graH3",
  "key10": "3wRA7QfhksZVxVK9kNxGbjCaJBKfPo9chuqq55iR588w9JHJAXrKBRVc94cu8WCfhRqkTQGy2ckZRwa1Q5sSQc1C",
  "key11": "zE7we3AivvokJTNPeky9NNjPBoCay6mXiQCr7wgaqesZ6B66VCFt2T9MUwPU9MkXZBYwSWmFe21JA5ate2muSzu",
  "key12": "SDpaCKPwH4p6AHMa3QNQBcBmGaMz8iEQ3Lq2Gnf2xnNDFuc7nPxuCDnytTPYnhH9L7aWSUxDaspijiFPAt44358",
  "key13": "3ShUnuzEdUhzDp3vPgR42xTgeLyYUcTyBLsVjiSBHW9GzomqRD8eDmZfFtUcNa6YqHj9ypifRiswqVRvhZizUWXb",
  "key14": "4a6ii8EAyABG83kPYEbmb1PUveTgyJmPUXEC67LqCtfDGdhPEVZpToVF5mr9pi9CFRFWnFW7TznpKduDs3pUzBNk",
  "key15": "Muk793jaLa7p9T94JFhcZqB6ob4mokoXAEHAyS6ihM4UBw2gLbiERyqzjtPwpAZN2N1hVRwhSzQcMjwGNaae6Ze",
  "key16": "4sJhyuojUFaGUapiXN6QSWd3A7fr73fMSLvaFbWGBXqnRLL4aBKL3w9SkGuyoGv1HoHzxbE1XPD55TiCnTMGHYZn",
  "key17": "3Qnp8xVCdJRXy8uxhR6wrHptxhNxM7zJUZ2Rt18ogg4hyeRqQufvH18njz1KyXYvXFdNurrMDhYyBiHyXSLPGi18",
  "key18": "5rmokwpUA3dy7Z8RTDkftXt7i9XA3HuzTwGA8YMCYsK573YGYjfx9tTCybVj5nT49q8PgkfGwKgzBdPtJby7Lacv",
  "key19": "5cV1L2ieg72BRS5HuiDHRptkat5tZZK8EefZ1aGMMnnTQRqudEhhrpKeAsCQmob6BsMnZisSHeejrJ4JbajnZKfG",
  "key20": "21n4xSHX9hEFRtGLkW9SSh9UvGWgbYVTpy7nrAzQjV2Fd4cpXXkTobbp1d4CTDxrogK1EwztMGn6DC7XESEfSEuu",
  "key21": "3Wj6fn7CTT6sjWDcVkH34nGqXjaeFJRNRBRai2GcFodB2ytjAAhAZproWiW8C3sXtZTF5AL1wqxQvnDqUxodUzvY",
  "key22": "4KkZCvFfdc2P1V9yaSHe5aBKF4wmYCVvWdbc8kEzBT3svtjsQ26Z3mHhbHjxgh8czSzMqVVkLEEn68TsQBkko9wK",
  "key23": "5Wwuf1f6zHw4N27uVDdtJbvf9A2SRNpdPfVggptzmwikEcJxfkyP68Bnpp7c5VxCnr26ZTQ8zFfeR4qVzGojp5Zg",
  "key24": "44mq9MZdJjJUtV16tdfKnYCx5m4pzcHWbKMXnYM9rVsZ73YjZv42Pi3UDB2E2D8RQWBN9SBop9csD6q59vcwWbw3"
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
