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
    "2ZNsMPKr4gPDBxoTxzRhu9A92bmYxssELzvrLsxUbmqRpi7h5PXEoRQbdt3YmJAHvW2A85hUuPZuccTqEmL4HFAP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bSTiUBrfeLUax2zJGu5rGaqjYZHVojMVdFEJ6DwGukTWbFWLx7Jt3CGprqa5w98z54MXfNNDmtVzSHJ2DXtgSx1",
  "key1": "5qBmE5wrUtozSu3fLpXsyPUxBgCT2amLyXMAr4FNWNucCEj5V5u3NYz2MA6SVDiHF7GbNtfajR4NhzT1FWgQGjR5",
  "key2": "5rBxok7zkuGMWEzTxLRa1Di8GgnVQtmPrQoCjiTBS4x6CjC6d54TTbEEqMAauAK4TsWRVvprpDZX9E12BCNk5NyF",
  "key3": "3A264DsBZu59UukiLstrNVBov5hbVWDAEa7fmTc8VZWYdVeSaDexaZ3LyKhuy4q67fjfL8aKZogaYfhLYhag1Wcq",
  "key4": "5RYUrFCNWyvTjps9zgLKNfSAGx5b6qCGVbvyLVa5S8dqVj56JUcqKSCmHVWUCktc5DJ7x72cX4YwKhobfKV5rEFJ",
  "key5": "3YLzhscf1YpvS2sg66saRQZ3ri9wpfysyW59hRT1Wwi77VziRaYZjM6Ee2FwggQMJt35VAq2m86XK1jrErp74Ser",
  "key6": "uvFi9Wf1mGCzc15diRHKyWzQmTX9a7NB4HRDyj7z5TcBYSHbYZGv7ygLbV6p6ph41Druic5MifGVi5gkTU9rXK4",
  "key7": "Bv5AicKX6CvDCainQAoynqpQ1LeYfJ1SUNfKL9ffG2u4Y8635i7NGDAgkgxws8d1ZukJw5SQKDsUtb6chmcYQxt",
  "key8": "5KcAP5qPnaeLReQ39AaHanzC7zq7gWtH1mrbXHEVWyZ34f7nCcQtHfhP3ZrqnshQYVLiG5SGiHNF4FmULJxome2y",
  "key9": "4GzeNReZtCVMGASU1pQ9u5EduLs4rPvBpCme1iPLPMuMUPDAsa567C8Q36wFNnciLT5mLR9sX2UTg46nF7udyj8h",
  "key10": "5Ct1vgrVnnPi1KX2Uq4H8NpwF8UL6AmiB4UycrUa7DuqQi5A3dxK5JDkcbE1AxJGDidzHfNRqYhcbTiU6dsVCaKY",
  "key11": "3qpwpKtJxbZrCWuYx2R8pVyVD4w29hqfTyL6J3cqwzS835TxFBHxLfHuzxCqapDgCbKFXdekR3Tu59NWWo1A5oG1",
  "key12": "28mujmzutQQadgmJK2kPYA33KtudXbrLPVQsoHq7uZ76WW92nWSsSKo3Y2yHEZZVRHPmvFhcxXgkajyVyDuEdK1U",
  "key13": "4Lmd8WQBxX3uDmQ9ufTpbzyzzgZ8Pw6euGtt4iqKQi1nPcvh2moYoqEEUNXCDGnRxktPcaWrzPyTrV9QqiFnX2Vd",
  "key14": "2AeJ35ep4QvLsj4R4XnWPjRwmHtfzNJibB7Cyww6D9qaDdjEyxSASPNgPmBsys5Fd71WJSmGqh9zu6wTsz7vAhAJ",
  "key15": "5Egpiau8yigykTfnwZQtTLdGi8zYrRap8KiR7hFkLQqb9AGpXaAoVGkvwbDmeAjkQU5nM8k29neuHCQT4LDz8F4q",
  "key16": "3mEe8njYJ5maBKbnRGnjGJ8sW4PA9JtWY5fgS8DCsYGpcDZLpYK1kzF7jZHprCMSNy7uGFBigxwtBif9fhWtgxRf",
  "key17": "2s2VpZHcdjWLWXYxZZPAxK1W9NtR2QuusLmcuCQmzNV7LQpo3j4gFa42rfusnXsQDdA9rjbQeXMD3aGi24rETjCx",
  "key18": "2kaKsiiZA2Ni3HXBGu2JGzgH8u8yYLMF2HSHazFy48cfarUwZcjyWxG7avoazjrnYEGmjeizyLoCnvFQ4oAW71cx",
  "key19": "3VCSuHSRUSbVFoVTRX2SQUPMAwKMPG8VFYCkf7z2SKEhypkWsWoPRGX9fDe2HoiwLXwPLJdHqDmWTdLAgDd1LbmJ",
  "key20": "3d398fwZpDS3Jd2VTxjcG9Jrp5FLtMwQnLYP7BFV1BSHJ9SHZu8JAf9JB9NjiSreaVLTf5yUc1gqVNXdTPX7pH82",
  "key21": "5zM3kA42gH3Gw6eVvHepL7Nw4Xmr71sC2znJp6stbniTdtByJHAwL6hZ3PAGYX2ksEefW1GwerSjmpgcqwCsWCvA",
  "key22": "5dmsuExJxEG2buzBuYRMzmaNbKpHBZqwvyMi2dTNX8p8pXt11QwBEyC2AjfjMNW727MTFRxeZ4Ky8zeXP74pnfGj",
  "key23": "2YEDN5C9AdLjTGn33ZvM3KQbWUbHCm4VyjyaEKjYjndY5SpxUxCf3qRx3Gcsucv3f8iUNoTm5z7CGe63GBsxFiW6",
  "key24": "4EyBt66zgdxvVtmLXVH9XEEcm8iBX8fGbXWoqSCb62WPC4ppgswQfEQYgq956tiesFWVgLJyXUwchy9h2GTBFYuo",
  "key25": "26UD9FTSYyTyuPVzBzX9A9mKFhj5UrhHEwYPSesDfYd4X7ZLDqrqiotUXhfUBTnCdRN274xFpCTfVfJsGuPQ3xtr",
  "key26": "4PdCW4mAZCZbzJjt6FShVaDMVhKaArwSxJWPBJahmDs395FEex9xn5nVh4znNaueB6dSUqp818m5xXDAYP7frYDv",
  "key27": "3dBM4ub8YAia8azUNdxbmd6CBFtrHnYy5gU5RjjF3iZeDagWJCYaKmgkdsjU9uNSTfph1NNbvL7SCAfVvetW68sc",
  "key28": "3CzjmPUUWx22EBN51dJYhvBQrVupDMJq9V636RcKyVsjwQJW3Q3q5A7R4fexmaifeHM78Gen89xe6Kk4XURathDi",
  "key29": "3mLHNLjhAFRe4KteWtqt5vDouTkJkm6RpgqzJyEuMMWiJzSu9NyaW9VXmaw9T9qa44Lxr4DM6MqBWEfKDtJyD6pV",
  "key30": "5ixSm4mAdQZurSuBHmreyFeXzkUZnFZAUNFtWPaq3L7PnjtcAfqL7U1zNg51PBZHoqDuDzUnwP7jm9BspnsJGaN2",
  "key31": "483FZVDE9cmMBmUXQNwR7T4KvVxVHyYEmdkjpew2QwWYySrwKfsf2NUpQFXEqRLzSRRruNGRQFFpDcbtJXzKiABv",
  "key32": "3Gk29bfReS52hHzKRH3PdUuJ1FkmXtDBjoqcGuYZTFEDTfVRRveTrHqe6Ffqk8sm2EEYcVSsRHYVmrVVEqCWn4BU",
  "key33": "wKvPTSuNE57w8FpXUtwdgwjbZd9GP35yLYv1AVqXHxdDWfwoBrbnkmGEHvfqJ8EeKruyJCkvJHz9YaTaRDtNb7X",
  "key34": "33HMGdXzSA4x38McL4vCHmBfcSbFmHtf9U9BTRqXVxDfCSFm1JPKuE7mvUqfQ8B8uiizXwRPi5zb7B2xDZu2V6Sr",
  "key35": "5dvdcGvn9yRLn3cQ9bgiMfEZAGB6FxWg7LvLycnYDY4kLZrsFoB42LHi8Mga55s76tCkgLxEJao21ndyzkzmqTjQ",
  "key36": "36WkAC9oSUNN7YS39xx3Dff6zVDRvaTgjandog2BAZjTaTLN4AWaxpGFPjLMeTNaMbhASdBdESM6Ay5nYK37jt1n",
  "key37": "2CKY64ZKhc1eqLgknuKUsEdoSjD7iKsFECCGjGBe394TC4mP9AegN5W5ANHubrTracbeWB3QAYqp49fMZBkrH9Zj",
  "key38": "2vKFshntbLAd9yhxkFDxUBPwjeLXHC1Dp9ZFk6ZncXMBozgwKdNaJtTGXGQAB7W4Huc3BgSZkG75hRmKyb6LqpvN"
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
