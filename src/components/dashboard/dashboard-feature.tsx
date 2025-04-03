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
    "5KCQ4xjfkhGkeAN46RXaxvMRvhnoedVgWKEPbFqGsGittoKKYzv2AyeQude9fVaer1yLQ28ZJAB9Va7wYB49orpc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hEgzGMkodQ6uRwmA4nsvdTLeywF2HDF4guqA9t9RAWbkfMC6EaAsJdytH76KjuStASUhHDXCd5tDqUgvzm1wN5P",
  "key1": "4Cm2qgGeXH5RjMf2LKFfK5F6r5Fk1An7PH7itoDywbZtd3B7PNp9oxGzL7uacyzj6B5fijrFt4xZj9Zjyw2fZrUK",
  "key2": "4AqHjWMQMLvCubAkWhAu4ppB99WHKcU97Nj7kTYTszfEt5RiTS8W1E26wczjw7a62DoiWnTdwF9FDYFfz5Aewbkq",
  "key3": "5KnPZ5BXuHq2cuaQDynbLryqMXXc7C7dfCvqNuttv69QhSb5XdeRY7Ua9Yr7Mwv78jxpLHYC1WzjV6zwnnkdbQiy",
  "key4": "4zGZyat9q19idvKpWDoCJrp3RiyWLNYqSa3DyRet6ceBvtoiuccCcxieFxZ4zKvPcgGT6fv7kiahU22JCqqNmbEQ",
  "key5": "4dMoYfUffMcYP1UzgxkKa1t5UizJuhi8aRT7N4Pwn1sFfN4yQNXwC8bCyA7i8jfodx3DxoJAc5c1ga2xtVrTnT3N",
  "key6": "25zMcj7WUPQciHujDuV9bWAv5HK1MwYWK1QpQByEm6XU84ADkduzpP54d4TEYGBJraEYQ5E9xDQaZjWgCX74DZs6",
  "key7": "64VxX4AxnACZUx86Sxs9jPBV3AhNaXs2J1HywFG7oQczU94ph6iacqoF1MAKh8oQqgEi8zzLFpYNsd1VfpCaujio",
  "key8": "dYcwyZKknPH3Dpf6z4MtrneA5P3vYTiS5o7NWfYfNYSMrYMaL25bV4rF6T2Xtk3b7R461Sx6i5Nkjts8vC6Vppb",
  "key9": "4PCY6VzPj7srQujuunqysFQQbPCC9NhR8kS1BqDuBQCH4r4HhnxpRnWV2aJweceE14xhk7cPhW8Q3JFgXpmGXejf",
  "key10": "mwL37WT5LLPk5fwSXrZh45A4rikKyhbc7kY7eLJ9vETEyMKmu93YSqyJNr6y7Hcd7ga5KJCrBPCVKyDmn39J2xK",
  "key11": "spY4YKEqBQSmXqrDnzJAfWqagdCn15rd74PWCDBJMCfKnEjn5edEZ32fFDL32XKTWjrRYgLF1DB1z8fVzTyPejV",
  "key12": "2n8sogbRm8TS8cqWrmw3EGMJtQuARk886L6YNKMCX3FnUF6o6eSY1SzbigoCRoPUo77zYoJDubhRHjDVCT1fDpV",
  "key13": "4EByvAdY4QmLY9w2xj9Q62un7hHJtLK8sd93V7M1teVbqEzhHkTUsZnx1yiHtKQwsHNd1zrDvrvVKFA4jbTxQ1BT",
  "key14": "2ZxkDjFwKiNHvdxNK25yYJUatW6hR2s5mPXAe2wAmZQQ61uCCx3pkSF1xGuzsCxqWA6ojq65UZFrBaZ4w7MwqfqA",
  "key15": "3QjjbAoTDHGomauRkYNSacPA6Q72Y9cDa3AkjaacEaL29SVPNZzvoGatYiagP82LqahCsuEHW5kVLb8vsZPkZaUp",
  "key16": "5jQVPjdehBJyAqPif93WxKWJsX4voAKk5pqsrRSABAzYeLyok5BHVuJ1iASc2D9agb7DwtDaHRksbkmFRQ5LvbXy",
  "key17": "2eegohqG4KSd5Huv6PFPQBTuRsv3Q3WQtdSqMjz6cbmB8BKa9o81ra1v7gpbxzcynyuRkhxJNcg78gR7SJu3mHWp",
  "key18": "xn5CL1Rpc1DPneBUTEa7QMMyypcqgBjuYGZ1MSgzqPiZD8vM1T3AWFuiwYZWgPCQqBc1B3YmxCNau4fa5m21qoB",
  "key19": "2WJ1biy7jPP2VJ9ZFUgNMka41uJgjr86KtZpsh1Q7hHm8pVYkMJgaK6ufomgBuyf6DKYe9R32KGsWpEn2ywSqNFp",
  "key20": "3c8dHcAxXws3A2EGF2oFAmsCRpYzjHJ8vVjSW1Tq4hMbuJPYZk493s6ttKZkw9SwqrwQzGcPtWibBfjaeTykP1YG",
  "key21": "5MRTAKAkxnt9WRQRp4QUBGqPbwwCTbuxU4rkSS5TC29tJ923wjLk1eNn4eApLBc6G3Y1Q54FTMQoN2tHfyyjdQak",
  "key22": "349Uvey5WjCkZAmgbRVjUsUpP2PfaaFaQWc9FgDhDTnCfnpmHuneqpDMySrLerPBp1GTQHLb7NRAM3ufeKgcDToj",
  "key23": "3S9dpjPFSBzeZAzuP56HaCDHVoGKmQ9wTH7TDt4CufKWyoL2DbQTTCPpqFXePyYq7f289pDqcr1fqhWC43QBmQ6P",
  "key24": "zhUCZWz2g14mhMcNYjNeLBLQMAvYFTiAii7Pyr9XqzTWT6mE4688YREucXyHbWngScr15VJNBFVoEF1Er1wFobZ",
  "key25": "4QCMkH7GHFiA2tkPHQnFNUDwrrCvyWiRgChu1Mxor5D7pganEth12qPwSeamWQjnaCef7qMYkEtC859E8BZTGk4H",
  "key26": "2NXnvasuXVQMWc7w6XWSLUuNzqx2rNrrxWmFFNfr681nz17EvxPx1bgdfbGJQSEqSJk2rghkgy5w9zuuB3pQYxuX"
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
