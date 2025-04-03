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
    "4V75xxCnSJAiDmFSorUoqmLWqEtJgP36LPS99mCQEsuBrFLcfSMSqQTp3rKM1f8KsEj4xus4qYbdWJ3aR67Xycg5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47kYiD8ffUJjiPi4GVo1FCqUmthBNWXCZenfmGjyBxWrC7FJQ6s83P6NLFj8hMWvxd9nH7CTnRVPnF3L2ZQSyNXk",
  "key1": "2emknmCC4W2RwPZW7Z9RRdtuzmFKWdnKEgxrHCknGyKTigTJ3AXBkuMSTJ61dUJKDFsM9LMWWkBauvFyqwsD1Xa4",
  "key2": "2biNvzNX2V4V4D5uFRfRE1i7TFfPC83oaCWzJk6LCguGUpJ8eQViuDxbjbXWzBtLd2dSj6SCGpudm66kdcwiLGnd",
  "key3": "5CY8Rfxqh3erLiWP92E9zBi6L8AwyxUBpvQvXWe9XxW1aAoGLm36GTFnyf5rdXjybNcXL6q1ZDSD8aUZUC6noKbb",
  "key4": "232sqdKS7612GHQJ5fE81mDxvvFWzHbRUZYpLMK5RfDgBwkoSmd5qNBESnwwqnoBBKzXwt93UVJE8UQV7LCTCHkg",
  "key5": "3Z4HSRSXdREMLALSTRxWpPdaR61BcDYHnhurEwvHrFFnTqtYYNcrpvrEzK3FzczZu1omtmwUsHjGniuCYThgVkUn",
  "key6": "4E6qBrZ1QKHH3H19d8pRHxcTcSg7v2GvFQ5SBYG2GNtwXoCigX3sJQv3v9EL3Jp6tAW9BiWA2nGGSipNsbMr8kHa",
  "key7": "4sC2ejJur5QQmRtEG78Dkcz5WkGh9cUoivBuFzLMaNvsP9eS9d6tHVKoKxgi1nXKRM3DbMXeiP1cNxEjHz75JYLN",
  "key8": "fjw6RtV3HCiHwbSMoxGjXympaue1rPx55FQJBSi3ydgkWpUn3GG5NaJ5GHrJmizz79FhGv5VtpUHUQdSrN2js1K",
  "key9": "4mTJF8hAfrFSaGKyFRCjBLPLrFJwUkQwKXxbR8dAQ8NVWgNdD7YFtLTUof2KGMHAYidNS5BDrUDLYZUgKCFy26AW",
  "key10": "3GGHypB8hVBvK6G4CLCBzWPSvCrwFhniPTaVaKK9j8Lu7adQeBo7nmxGcfHany9rp5d5HVNviujDwY3gUoZmSV2T",
  "key11": "5KyVKbqb74k6Mj383fQ2zNaspodoi5GYue8NLEDSjNKSVeX4LFDjmxaKDRuWqMd5qEPHmkzfDK2z5SdUD7o9zrfa",
  "key12": "mXzmyTFxPsBFxaMzxMHBzxdxrjbetgzuAVMSpnLiS8jWTsCXkMCVYomYpievQrknk8NZoiTLTtCYu4vcwBmfVLq",
  "key13": "5LFp4wzYnx94dUxgMGddWw433k5Kdn8EmJhtWybcesAjBwyCDdjHiJ89L1J9sjrYMrAtgM8RNFcEWUbfMWVerDZD",
  "key14": "2yvTUqihS9d6n6J5E7zimXjHc33Y6ygxDjvuFkQjT1xvNNntUuaWu8GvhyxjoAxvKtemjs51a8WaX8PeJfWDTHhj",
  "key15": "4MgcSwmJ97umLCWMjDDcvdsu46AiGqtmiW2FCJnU6bgMxditp2JqffB6LWCaF7zPkfHXybkwhUmobVdYoCnZjGCe",
  "key16": "5F4dYEyzaALtjCj6AMGs3PHBeg4Jx9bHTLjWbzEkHYEc4jqAfSaNFQr9zQbeeUGz9y5hCjpUPRuiY6KP1mwYz5mw",
  "key17": "61B2GYYsopMezBJN9YXfm5igPx5ZCpFGmrLAgEPyzaqEYUvXvsiR5GXpwqSbytsGchFPFSN9DJXzy4CMZdrTLqK2",
  "key18": "4wQkE3n99edCK9A3GH8dXtEhhpHxs6z83cpPm6q7yex7iTnM5VkvJe4jgDvmNFqotDjnJHFLykFRMTFkYvMT1BkS",
  "key19": "42Jp8XkTqCC4hmcpeZj1cS2KSY5MveYtNMELvKwiNDZqcLYAY9jeV459VaZF6zSvUxSvvXZVCzwsXeopNbcGVSr4",
  "key20": "5SupPuCiMTp2pTwntP8EEn8M616bqv8pixj5U6f9ZwfUTpgrG3BRnFJiSFVmrbtMyTAWqoeoi4aLiyggkfyJpMeq",
  "key21": "4H3YkusU1aq5y9YdxKUUDo5MwPCwKnyS7oY4T7ZZMbo1R9fjcZ5sdqN2MQwPMs9KQ18L7nPUgF7f3Xz1kigdQDaL",
  "key22": "4XVjS6QhUiFzt66Pa1VNG1fDSCx8WueADZJN64DP3SwrbVhsVxotHsy1SuT3JyTSVcxUJ7ZV73ZPy3zuX7HsR6M2",
  "key23": "64JtcEAdK3qd5NKE2f7pfFJv89X2KsnpGPUoWQiamTU7CiMaiG7M6VGHb4Usrq7QZKY8dF587wfAe6FWvN35vjz1",
  "key24": "2pgm9KKp7Ne3UzRctARvUgoMGud36XwJR4fMypEN85ETqrwLCKZ48oyq8kCQd5j4sFaaYwuw5bUmkWYFyUcF9nQo",
  "key25": "9k2kULQJpW9ZtV9Bsc75hNR1KmZbnS8YxboGJZcG7A8UwbtxtGsBvpT8XhLjSrN6txjbtLPBpLQ1ehj4APmSuP1",
  "key26": "56mdzTnNx4xVeyNPAht12JpSw5GYCnM97s7VDseMZKVBpXjZS93LVe6VCWMVaMmLb1emTdf5bpZ1vcAXKCBe2hxf",
  "key27": "2hZ7xzjV4M9WaXnNEGaW8LM7VHHTUvKCpQHMWRE5dLURNJVZHFwNFAphE7Rci1W7UZakKKj4UvJsuR89ugkZydie",
  "key28": "4mGu2GGsPNqYJtiLsJrhhgScvYbnnge3CvUWecjkmkdYj1bUEy4p2wmpZ477kqjEVadt1JaDd7MsUC5GnmLwxNbu",
  "key29": "3NhzNPS4QHNiqbp9qYytLCFN3YUxnG1KFEShsyB8NoQKbjLMU2JdQhTomocqRoMBUF97NhKxmd8e7wTTDoqpeMNu",
  "key30": "rP8fVNpZ2sYNAbY5AaqD6yhsjZtKGNmbf4e8VPiEU2JBx8272exTU41wsBWZebxi3icR5jHF9fuD5SfvXEC8xLM",
  "key31": "2h1BoTjAeS8wcpTNCTkzV5A4w3r2dh6wa11KqaDsrtjjtyyokX5cc7uhVowjYAVosZ7dC9d4q7xHJhZAAZp5rJC2",
  "key32": "2wnYCaXqr3XWxUwWKdHnJ9C1viYZtMQBfoF3cDTWfMazr7sqq8MzAmrWgCt3SGrkXkPzEy1x3bz9HDQVPc4GvANS",
  "key33": "3cyiWLmGgrTh1WU8t9smC2KY7NCLpAQXzh13GoNQUjtrjFBtpyG7UuaP58RDfdLBQ1TYNQrf2Jev3f62ZxYwaDyf",
  "key34": "3xK4eir2SmHLoVe2ccfuFP6BKgCo4YUpmdyvtNTX6PLPMdCdPZCrd3KiYJtmgKGzf2tr9r1Gqj9kfsG5oqnyD7ct",
  "key35": "27d5cDAb6adfKPoykFKmUCabjPNBmKGsKuBmWMAeoswtbWV2rH9xvcznFLTj5JUvtNjmbt65DHfeyRoa4Vw6yGKP",
  "key36": "3EGuQdb6CqYAztUHu68guBKV4iAYgp5W2hJ87dUHiPgCGs5gtPeBmHwPnfsgAwnRwCgEEJdv7YNsGuaqbF3z7uTF",
  "key37": "akS5PS2gRm9cKwJgExcWaiRF14yHi9hT7jXVq1MdfsE1YKkCQ1oNyTnBS5hkuMTkAzbfTwW6zEQxPE82x3SW6LR",
  "key38": "2HKJCuTYsUauPgAatTECNYALaygYtscweA7mjtcrnK8sfzj5fKZtgQAXCtXEkRj9Vnkzu8jVmQ2H6ujdqWsAjigz",
  "key39": "26RenXig8PLhYj19NvETQ7WcruTjorF2oQ8X9ft7tGKMcpo7iGE2J95W2tW5qovjq2qrAu7f2FjxDLxemX3k8yqT"
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
