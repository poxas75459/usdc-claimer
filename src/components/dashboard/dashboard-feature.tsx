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
    "zqcT8AbWHS3jPJD6zeqJdhCk9B2tSqn4VPoxNGhRzjbjdCDznNHyeG9Rr2dzJaAW4TUugyndF7maxi7DGvwbMxi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MhJHAauPJeuTxHe8VP5NARQnywLixS29RHTkNAr7heNATUTQtkHQ784iRQDoPbs1x1PygZrXk24Ua4KueBkYnSc",
  "key1": "295dSiVne8LgdXsfdqrxtewckYBDyajXMsQ7c3NRJqpTXT9W1rv7XwvEc4JVm4DGm5ePq6o4HRJQE4ezfzDcDcLn",
  "key2": "jLu8o89HS9BVhxfbRyEGZCyzizKhW3QEzoEhKTx8Dk59Rtr6SRWeBKEpEmFE9srWT2oQPsys1J1REDUMSX3w8ZD",
  "key3": "4ErwXYbJJoefjh9bgYsLnHaKPP2rANBYWXMqRqLsxCPgGqE82Y89xpG4t8nwsvKYpoMQanANptwA8XwFxrvm9bW8",
  "key4": "5nDQN94BcPyMwJbeydAamBqwd2hkY42a8m1cAXTbE8rqviTveUU7djdcerPZuFWbHs1poj1V3hkxYy8AJSyHSzvd",
  "key5": "9jVedg4hPae7LhFjqQWvjSc3muftbNwSXgBM4o6uFXmCspPjNnSmNUu4ejGgC1eoB91cnHuMaBouSqdqBuf3ZRL",
  "key6": "22HCCRb4ebywg17DFVSCkBC9E3dYJGkkTYuZMM8BH4WLgPn6M6Kh3zSKLGTcVteucqAd9EwzM5TwUtvk582Y6WV8",
  "key7": "4iHEHQV3LZ1TwxSDH3m4LBVC8zkXNgfZox85b3729T6JeaiitUw3vMYLW6QtxbLRuYASoCxgR8MeN4Sfu8AgWhC7",
  "key8": "29mXtWPBspcCyLf5TiUFbf5Y6pRwZgHTf5yeGJCd8zc89ZNEEgMoxd23NTmUaY685M3L95H8Q94JyEm8PuVwBqW6",
  "key9": "5JGitAiLqYDZXqy95ZtU17XXSkKEM6QjU3rZZAzrSwjaMrKahfT9FjN7Qhs3XWp3uj4PH5pSSPMf6BmGucs43TRq",
  "key10": "51j1z93s1AxUT1B5somk8Jxk5ekHArGzBgKfEzHXuQoqGYk2upqxzLqszZafMoJBrUbeLdtiHhjLVBWdj9WEmaAR",
  "key11": "2jBUm2oVYRm29nwH6g3vFQM3k4F9wMrxcFQ5Ty5LHisYxstKNaZnKwTVKHitPwGKeL7H6La4JqnCZq4ZUThqiR4C",
  "key12": "2qXuZFDf38ZTg9SxUjQeuruPjDoWzqkhmsAFqkc6KWJ9thPMEDrsG9TAvD6aTTz3vARL9qDg7gDyc5vWK39BMjsB",
  "key13": "643QJ1Z91r8pbEVFMoSBihTxnHYKrAzZB2YHTvTgmPoSgdZwmHCUEz3MN4DLeizhpBE7hUCjYnsqWBMzCjbFoFBQ",
  "key14": "i8CgyRej1c3XtBjVL6LcBr9ZkqFHdC5MpVN6hyhq6eD1AZHa8f1UPSA4e8HnK8U9U6yy3gwmXVPqpzeJsx7EfSF",
  "key15": "5Cmse4o3wou8RE5Sq4KDxXRmZRCSKaEh5juXojWViU7tkSMN7RmwBiL6pdtpjwoSgKc5xJonPi3N47uhpABAathK",
  "key16": "5nZ9YBKYxy1LY6YVTvmEESsMdp9XYxhzQeBSNoyvBniprhFUsTcCdyWWre5RQdzZ3qEY9fx4rHB7rPujV7u1NKym",
  "key17": "4rL6jV4UeJHipSxPems7UaQawTzMJLJ7S5gP7aKBer7hvkvM1CTUbQN79Gtoe8uZwQfuiCqKcVbXYU4b76bfMdmJ",
  "key18": "5caozKd8UYBVL93xyqMFVeCqWz2NsxZQ4MzFCE1SNnbJY2QKNNL16vWTPaVwDDyZQ8U7sPgm5f4cpkJwq3KNvzeM",
  "key19": "2s56xvqUiEELT5tZpLPWMGobkxPyx3Ry5ytxfq87G1Dq6jeGRTgMaxaFERSJtFiwjta7VzjqDJrKxqttQwChrXt9",
  "key20": "5HDvQdGLQueUcR1H2Uu2m49donArjB1EfWUMCwk9vqqnYUh4bPb2dSA8Dgq7nTYEr5AjytQtgH7jgQ2bdwuMVn2E",
  "key21": "3bSz9x7ZZHQTFWHBAkJBp5ZBWTje1o7pYoMXpfjuZk5Mazk6zp29YHWPDev9sVoPK67V2pJp1rXQaLzGUu4vHQxS",
  "key22": "3AzzFEyAdQRY2ducWtnafJ9JMKqka9zPTmPWSDsyrcxTQtcDSa3wJQGZRUihCbuGti1isULJcwRw4UwBy8oBN57r",
  "key23": "4CSYLPWhA5pxcP8nHfGBn53nxnv5buf77z4LUBmbvsyEd2MyvoeHv6LMdSQVRXjetvKJhhKeVo7nh7heeRUzuJAf",
  "key24": "3zTwCkEPKaD1FDgMVd5a6AwTtH4Tqdf9aXVX8VdhGCRA1CQb5xiPjJGutSBVw29SRcsCC1psp8euwcQNMUEVNxcf",
  "key25": "3GAxPJAYjdJw2MhFKyXEDXihnY5gpVQ8h7oMnEKnyw13DVLoxBXyaBx8r4cp2Q8dyu18Ex3DFGw8HDgJxuZtEAAE",
  "key26": "5hfw5Gg2jZgNTu6VbRdhsYzjRdjsSFfwJqTJsMyyMXr6fiLxs1us95Rg678dTvSL9NXhXbsToW66FDKienhDGDW8",
  "key27": "4JJCswT1Ep8gU8aHowbkLD3eRSZVE56Fxm5vjWoTrA6enCVKkZHeC8EQFXZXvSaaPi5D5uJE16eUTPtYm2eWNWh",
  "key28": "39B5vcTTDGfrsmypGonXzw5ny9JLaz8A51eeshkvAbrvL8teyWYJqHCVvhpHiTQT34xVDBCLvfXXWy3RWBeyGGVj",
  "key29": "TBRLum9My7YmuxCRd44ko4ZTG6vphPHf6zWMCnxHhSw1YavsGYz7QGTVfjU4eUz9AyUEVDXYozkEX2ANdQhiFHE"
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
