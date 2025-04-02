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
    "43hxVkVJF34p83p1PJASzGvZXDD48vf3k7w4uFwkYGeffnv8PKi5UpU8kMYUQ4sonfoYXVCUXVywkGzWABuzpcTh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tpqmv9wBX4rtzoWMqu3nDj62LWms7dwts7qyA6d76qZZXHTpsfihidYMYnjCxVPiu3vWTLhAXrgBsABUTXq9wzw",
  "key1": "5Bn1q3q2bwkGNaehAYvi3WAn9WY5cK6JG5tV6yNeGpz5bE3P51e2LovAAHrdjTvracLGvvN4dme7h5svfQjm9Tse",
  "key2": "2tP6c7b7ZzBNz7NJFvR98DooibUU1hUwgdGTaCRjhefCJkKz3X8hjeAufL9zMdS54PDEH7qY8SaWD679dDdTXNBa",
  "key3": "5vHB8MQp9SB6nn6KggqAK3asGyFrRFLCcnv6U8Kwi3G5jVwesrq1Ue7kBZj3YvPoWrwK8Kp4KWVq7hhjWUGKuVwN",
  "key4": "2EoRe4ZwNCxMMqabZ8GyTUb3zamcvcH3fsAcHkBPfqoxrpoEowhfbVWn9CxNeaNorLyeR6SZtt8ABAUscJnQDhaZ",
  "key5": "21mdMYZqgZz1FVc12kmCq5eP3Y6WD5cyuh6CwFS1PXXAcz4qsgaZLDvSF996LkicjrvVMUc3QDdF78c9qbfQPw6b",
  "key6": "2mQW9ZGtzT6jN8x97x6e1HLc99avzZuMgmRT9c3VQKz9k2C5y4mwc8nxGVLPZU33euyfwmUVjdoCJN2PTbCGye5x",
  "key7": "4Jj8J196958ZkiPGKpTd6bHmTJTJ3QZMBw6zRam7nTuPFK1JDRUTMEaW6Mb3cWbZbxFY8D5FF296EQd79W4xefCv",
  "key8": "35d1ZCRpr9krzyyCXiNghPFx1oaPzRTV2frz59mNsibjV36kepuC2nv53ih8pnpFE5eTWiyqHKk7scyvkJdGYwNi",
  "key9": "6619PX3ZSD8yZJ5akdj6ZP13wxeqpcAEXR5DfnbLt9BfzvWy7KLEmMuDAknvASWGYrZkypho3GFoFkJLZUa8syHS",
  "key10": "44ZgkMNGNFDfGH4UeD2178WhYMMkv73FiqwjVafTaYRfpL7Wt8cB3kVeyCU7dy84eiUfKsMajWYGjjA71t6Lt34v",
  "key11": "3EmJr5YRaXHRv1DpThHKJGgeo3yvfPjR5PQsLkAn3BCCsgH6V9rqYWe3Pwfb3Dr5bJGoiaj19aAKP2MhGNUYLTF3",
  "key12": "57tYiWe44jdBLitcJExjK4Hr9Wb4jLWA9wx3EJAbk2p3e8xMzNjZRRCSEHLKgnAhZSvy7FpWS9Mfc11MFrUrfxx7",
  "key13": "VCzaiF7wcXuq6FLMtRgcbAbwE4FghWA4Wo9qegSCvU92pjm2Msa3YnTEQ9xhLP9WCzcgP3KN2U4cdbLqzu6V6bi",
  "key14": "44SodmdAirHgXHcVHDQV2acXHJDyHjPSmaMyCkmcqeA8KB9bioSTkcXAvEu6QkhKNzrWmrGQYdzQutub1nuZ8xS5",
  "key15": "5CGdtarYVWqazLnHSScTXamxHcEwbvYAjFUmHK3HUzc7fMvhFEM46SkobDQg5nGGyKQxULgk6jLD82nakkEFJeE4",
  "key16": "34Df8M3HyR7GEPUmfTCXdz8QQNgvk1m1eghnbQCKaxvW33nZ1TdTxaJZosKAtgcfgNGJ2mXS8cy4hCcyNuxJG1As",
  "key17": "4gcifTRpXRW3crnTsUFfQ2DFMXtfCVCKWMbyU2pjR3WsgvUdWPBXV8ddXRR3wMaWNDZ8ZiNmYWed43Ez4JeWDpov",
  "key18": "JboQ8z9B2PTjL3ovd6k6YouaD9zy95r2r7F2H5ynu3rVgWJwh2NB53NUWbMa8v67ThyWDPUtyDCTUu6xkFw14vk",
  "key19": "kfYcECc2FNqamsgBK8CsbW5LZV4JVdc2qDyKYZPgxU9jyVBmAunxNNfuixghyjDVpnWpvg6eeZP9AxpLLGCgw7X",
  "key20": "5yXaXDuFwLadBJvmspSqXMn3TAKY7enGgiB8by7xLLQymmRciwaVzviwoATErscb9cenBH2m1hiLReGpobV34woJ",
  "key21": "4dCJRXJiUXx3jF5JPv69deamW6qDfwkLaR9dYnnKWsiPPyxHWbXRp4wHkr48csJYnKMvPQfov23hXCkAdRvp7ZST",
  "key22": "212733EjNQe18pyFz1z26AMrNtftBZXCSU3RUkg35qJVePcwdcmKqBKioVa6keP3dNa3chMcn7CgEGWokuzc4thJ",
  "key23": "4aRNKS2aAd9GoSHFfnhCKMVMo1JbYKBiEW99YbnkVLQxEwpY5zBtQeNW2yBMSgLhMzp3gE497rhUnvDqZbxny8US",
  "key24": "2CDLzsstrUuczmujaPJeek16G3tK3LU3rLz5Rckc3PEmN2sNq82L51GnRb1b5tDofehtKYf96V7HhdfjJ8Czt5hX",
  "key25": "oscTJP1aeGNpYNn8otP2sHuWU6UiGRBQLLrsB6XJ6yJ4cbdPoM3w4DMvNtqLS5rVPubBk2hnPF8DzrNyMfSGXTR",
  "key26": "5CqaJ8Km8yEFPnvb4HxfJy81NvkonfuXyBEA1MSH8nMJE7KVbvdWfTEBEYmyNntbRfT8YGDrPqFjyGQTHh2sCfD6",
  "key27": "2K1oRk1C6G5qsUaJn2w6D6P7vzjjCRAfzKLQ927wiBoT2D6jpPApa66QUYr2pTN7MuUchRMdAWyfgoe1z57S2bPs",
  "key28": "zpFnpuWxztx2WuYRhASVVxEaGR5M5yoDUwNxMTePm2q8pmTQQN91xvMXuCy5uGQG4qFarjaT7MjXQRgxpZ8QU7k",
  "key29": "4svTGXbdDypH4CEy2ZbL5dkjD4H3J8ciSFQxUYWFW2eRuw74QzzxJpoo3HuJUjKpwmLi6r2H1GiHLfMMtdJecapJ",
  "key30": "5Je59zYRUFiswcaa8pjRsbd2HHteDNAzM9Xy2dUXAWfznutPfGoikyugt4Raf2fEqyvhM7yCgH9PomYdKueszM92",
  "key31": "6zavWHgs5b3j6nY6VqTeRv9dJpAFDGGwy22cag1Wn4wDLGCyFg2EG1SD28ac6wUfvMp2RY1rj1sb77vur7vQVER"
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
