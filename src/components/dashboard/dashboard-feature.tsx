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
    "23sCxMdutPQ7YfxejbR6ifBE2knyXLubPAQoCEnq9VobXjgufAYYgYPJqviPH3cgsbztLaYxYYBgTQgQYHMh3j3D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R6wP6UGCTHCXSgrMmw6QMbPxoi5vpWchx9P9HDVgb5LF4ryywuLQAQc9dUPSUMqZfLdqgKhM8uNstxQiDvBzCLq",
  "key1": "3EsjqbdE6KU8AfPuypoNuP5UeRe5B3FQ7odutcamZhL2wG5VfjMToWSmJjUh9frBcetW75gM378sHtdefdfTiBJC",
  "key2": "4oJ3KerzpQFYtpg3bUHYD9dcPzxBtUpY3f2iQWqku6E9qPq2L2kjYDmoHCHrhErZq3JGmaQymZj5KnKcVk4ZXTa3",
  "key3": "2qjaCEw66axzzfymufhC4n6639Px9L2S4HcoEQWr7PbidG8XsWkneEA5cFXGFLTSC9PuMXqG1gkPdHhR7PKaVGFo",
  "key4": "5uYsWY9VPZGpwjjmRs3EbqTfwrbw5cTk4akNNepXcqVyCRjEAwe2oeoq4HV9UyC4exYaWjLhkmepGLuW1XPsRanW",
  "key5": "K5fM6yLc7nb1Bss6er3KSRX9S75pUNGoZ9P1BWRELnXQkPN5UEonJxrnxjvG9p7YRQrXNXJhphkF8mSNUpaDZEp",
  "key6": "5FPXwbW189j6NwoPeRKgxXsqkQ7jJpQZnhA7aFLkuppR15DqjtDg5nfdUSP732k9xz8Z4XuwJfHKWyPHHRMxQNRv",
  "key7": "2af4CkubMAXYSGqnkvKb9XsEzLWStw2ziGAL5hDtZSS1pBsRuht8zGJcFUupyeAxo5Y2t1GkEyoFd9JeBzhSZ1Xc",
  "key8": "UBTEhXfjZoRMZ4Zm7awLHknjWvVKng3n6pNfwEtRrebG4yuFPRQYgqy7bAjici4VFG2AczGzNofpPUHKT7wdMqS",
  "key9": "3LBLWNoZKuaV1HRLFHx6PQLvheKqgHJc6YiSPYc8i86kURREySWK3iHdpcBRR92NRVEBxFXsNMDLFycctnvJGN9K",
  "key10": "4knXc6oxGFoS6kPfYj5ctPH8xhRRevVgqUmuDGF8R4Rd8mkThshxMTouxnSGoPZ1Q1UqbdgQZdoov9W4WURadBGK",
  "key11": "5rvtEpZqU5sswcYqDrRQtxCGsqmJ19uzjH7xoWMP4K8b6LK5M355u1JAcDMSbbNBLeVU6QCbai4JYLDs2hHqcjew",
  "key12": "5ZQSq8ABPrUybc61Ek4b2N44nvmAsr7gxXLuJUq7hQF354ZrSTc6fxLWVJdGswy5JMF1rXnCu7sq9QKyD5agnJDd",
  "key13": "4KJtvA8i3DRsnyNeCB6i7KiccDk7ysdm1SMFSqQYZEnpUpg5LX9fCovydFhiwE5kTeSqyg57mMw4DmJ6XyEg4pBm",
  "key14": "25XoxPA2fVkDhxRNpPErXnnppMw3z8kzgPCvVdTvii39KwfAVPVb59N9LaXTs8MxReFbDJ8CPrh816L8fhGcK4Qk",
  "key15": "3v9ZoGziYnvmZaJskFR8kwYYkGJPdT412gNESn5ZWR7JyUc23wTaUXWAxLn28nL82jdgym7t4SzDDXWYx6jpp9aD",
  "key16": "3gzL4XwidCjkfFBaAKXbbXtwwve3mcV5PS6cS5aiBWfm4vVwy5mJtidVnzSV7BwbzxQeUbXd76Mc9Dsg48ShtZVF",
  "key17": "5MbRSzehTFsXYT6qpHtyxF9dRomQDd4qB7qhrZYvxwLnQAjFvwKJiN5HwkXRYQ6Mw8dpZJarvvFxmT6bCeP48pyW",
  "key18": "5uUxZAym2vrCCmA688DyLWjXbeJbhZs8uqHBdcijrW37uKCcsGTv8NaRvJdxhteQLTE1CUqaL4iXLGaJpxnBrsWL",
  "key19": "5GDrHZt19eSnnjLya6kTgUJFXHxhhEZuF8KFRpFKoiJQT2J9SQZ9r9Cv8gydrnPdY4gWYHFUANEEzaDqt9cm2wgK",
  "key20": "mQyB7vDJoBq1xPGUh5S5GBeVbGuQ3jtAXK4ofTsZ6K3YNa5at3Gdgynu3vy85QP7iPJDzaFEd5J3KQGAZ3rNRxw",
  "key21": "2o9TqiemsHZdZcqEQ66kahZzAhAsb8Z4AWhhJ3uuco9VgxRf4AJvNGdziPQsEBD51WJUGqnmzE9p3zxSrCkLSpDf",
  "key22": "5zmL2fYoswXzk8RMzbsWc7sDfofUbmLwNdNPgK2FjKhHTqGnBUqCZSbMiEHDuwGPcdCiyh9p4Js42Ya31kpBfsmG",
  "key23": "4eNxTx44yCaLYvrJw7V8exmn72bY9jaYgoNCmMsqw5Bhrfw2LUPcazQK4FwF57F5tx9FP5miqZHxBJZedxrzzSa3",
  "key24": "3tZPpPm1p8RJYguwydgrcaTEgVfdE8P83EebJWSwwEAZH5kgmAw4weGEee7S5u8zR9veRtX4aT2ZJwtH3K2HQZSv",
  "key25": "2DsqNf2D1kPFWH3vs8y9qSek4TSZWfz4wSuLkbXFL8oPCXWmaUkzLbabtDQWSFEngWv9AwVqoQoLU7kmQLkCti3A",
  "key26": "4aJ6zjAwU4a6wopRwFoh1YikR6k7v2XeUTjchCG7AMxeNTXb6g8E8ZujbgKK4SF5tKTVzkrto7wVz6FiP8Kx9s3i",
  "key27": "3u2Yv3LY39Ks3gY55jNX4qiwhoY9iK6fXmKR4Pcj4ELphTDs4eHqLAvewsE59Lcck3eKNrignN5AKWsQ4HVacE5H",
  "key28": "4RUiSoxe2irT4bjcikJgCs6SFW7wqFQxSXzSREgcrKotw8UUrLwwoUD3yz3FBMeKSUz629TRAqUAaqq11pfdhV1p"
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
