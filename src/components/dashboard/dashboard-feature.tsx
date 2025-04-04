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
    "4hDaAobquaVztUTtRkq1enxk2ANJt4Gb8wSn374j8AL237tNwcAompCvrbK5VsXS7Va4oXyMyRTgWuQo1EQqxMYp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bS3JWXkMww2C82kxLEdomUJvxG2qDUTxuYmnW34y2utWoUxWHYyMkVD75buM2B3sw9814nua8kRGXZ8dBnwjdim",
  "key1": "3fSdELpNPfWQmLDBanjYLauHVamqK373x7P8HFNYQnUcBN3n4vtVdH6yoqnyM116jJk8cSWL6vYKJcNth7e35FSj",
  "key2": "4c4rEwGBsRLXdGkNsabNtshit18BjPVEkna87qjEgLUoEJkLM3ZRSt7GhKVVzy2Zns2NyF6zcnvrdqUTwPth1t2A",
  "key3": "5Un4sQjVzf71KmjEmpoxH7HLj4xFuxeaPbrf76JwgY5zKZWuG3s159WfTBCPCbcyb88epjt9AGnaVLMZHfaPp6oR",
  "key4": "4GeenaqyupKmD72tBj4fG8HvUq8a29qZ6XhK9JNTiEpFBehmPMpaNfpbkxnnhQiwM7GtXvSErpwWXG8bhkjjLTeZ",
  "key5": "5iACxxkXvBkzBXdLHPiLkjwNrUcJnvZ1z4U7hRLekw8efani5n5VHeHDYP5C1X5NvwiCtZirpR3bhBVTqHVhriER",
  "key6": "5s4Wrz6hBX4ap5HDMrJa7zoUpeJ2nfShg8B3ffPoXkM9QZgMCFuD95ZtryAiFaCbGETzA6BM4MKauvc5K57UCDzw",
  "key7": "6jB7rTzzL6ouTGBg3JVz7AJTftWGP2hwHCHwXmrxZNFZ3r2ZzXfWSGfKa3RTP33rU6WM4PoQNSWbx4vHPAhwoVb",
  "key8": "4E8rJmuVdnhEWF54R7JkWjccNTqNyo9CwwZVJnMQcM9pWByxSQSWni7Wy9pPjvBhBmMKT1bBBG6Jswaz3gSRafpw",
  "key9": "38rHZPJmdVjG6Sn7hG9a2NdvC8yXZdh2HYfAaFtuXXqz72QB3iWGvNEjQMypGoNnXUT1RnspFxxRTHFSpfXm8wTG",
  "key10": "533ykkJvokh5e7Mg5HEto2eWcPkLc2ZeUSfyTe8L9kP43R62ynkoEJXVrYUkFKS1NceT5T1iPmmGHziJ4eE3M387",
  "key11": "2its6gzPdhxhmLqN5bFaNqinXoHLrKgkimf3GAep5G4SMqATDH4Lw6n3cvt1zvw8rYBSwTzfg6WSAcQwK5dN4EjP",
  "key12": "3obDbWGUErkRRjRLpRjA2MX4UA6doxqFDcfeYtKPGYBmyt4XDyinrtSwnEC7yfAc9JrxXe4hskegaenmqXZH9gW8",
  "key13": "SitZx2e8FcCmRT4HKFJygDQh19xg3hdv2hXpZruj5bao4gD7XXtsn4HpuHcikZ2y7PjgmsZB5uM4xPVHeX9dDbd",
  "key14": "4YT2hkbSC33nuqAsetByBGTbQD7D6BH6oCxxC46LdKNVE2CJqEqTizpoTwyDrFyHJVLLa211KvXzH1McQF6G9U2A",
  "key15": "PEh7x5fscnmS6Ug5kKjuuxeswp2Bv69Q5vBPpEzSwMyFzdV2f58UpC68EBG3gn8zhfVvoEqytcaP5h5ee3C1w5n",
  "key16": "2e3m7y6MpQK6SbQSnPVfCMQdWugHvsoRNXac3caqKSiMDBKTvyuQu8ndjhtm6UhvirAyDsvXaSsBfLvVbrK7MWo1",
  "key17": "5zsDw4q6MLi8uMfAqBbecgaxoUkVPwknyN63fSbmovdALwMdGzgVRDMcwtFr3ckYpLMoCv9uHAjVGZcYxQBw5P8x",
  "key18": "hkcvFNsRsPGfiEU4Qm1JpQkTBuSR9rgZ3D5cXt2yxMcpfTamkAresfFVy2wVTnxKfzfXxY1p8f5D7uLZzfBs8tk",
  "key19": "46xUMc6mTK5cAWrinaPZvtcXgikanfrys5LU5HW6YTawBfCeLpnKdco7Nw6tA3ZFDvDM74jFAwhATKeXg6PZQCvt",
  "key20": "4kDJ8LYCBmRPNpxSybhHTiYEkQrFq7MuCTF5ZcYkp3VptcxJxvEosSjky8T8iR5SPihXyVsLbSKrL5593WgPuByS",
  "key21": "64EmnmUThuVxUv59X1QpNUw7fF8DSBFyB9XWMrjRvVE33Jn18AkFA6pBfyGXoLr6HfNxhEEiCMV2hqzQ2mVoXxtA",
  "key22": "2hSfhpp6Xhh6LaJqUYTHJ6SGWD4x3ZRNGaVnhz8Tba7mvzsuLufk5hMimAgFtbbFUZRBqfSMJNsyUhKYsUtGLS7L",
  "key23": "3Sm7PXjNz4ppmoP6SJ9gysVCebGWKH4vrifJq64qVK3XC9pAsiJwwA2j44sVwMFFeqPyRNg2wQcbG5aT8pVz8fPR",
  "key24": "4UF5AUcjaxZCbSYHnqJShM4Vpagi7VbpPCkfF3wWU24FotQDb5RcoYycXm1nkAhx6fbrTX8ER9KzDuy1Ka9jq58r",
  "key25": "2yaNZzdcxQzZHHPA23q3ztUrSCU78cUiaTMRaht2ePQ2RZ3qxofGAkUjb7u25y8qtRMVYMDFovfKGVm8mfaCeFvT",
  "key26": "4F3g6tGXuDwpibPzXXWi3v6rCBTNrMjerVQNL43oauWyXHE3MQm7iUU9o4GVqRYUvff4QixDi46fmLcAjaNPmF8",
  "key27": "4q7BpaUk3BhDjv3jL3srivuqvEiFJGmx3o5aa9m9CAfdKoG5kKGxxMMmLJ1UGBAR1bVuvzT4UeUj86ZwsmdwLqV6",
  "key28": "3YirWk4V9Bgku5WpKBPE9pwh46mAgWwZ2nc9gp3dNqKGdoREYXFENsZ75wUrc82Bfr1gmEHma4hPrWo82JUhcTZ2",
  "key29": "5oeT82CifgYUbvG1LHedQn3AE8rx3vHyEVL23JvVvWDDYqV2n1Q6S6WULxAYhbmUzJn9cMCDhHFUetz1rEcFbfyY",
  "key30": "4ijNiqTPKZQnRBmAUpwGuAQcYgt2kV8NFEBpSv3gihMGgD6tYYGHJoJspvpAJRqGDx7HvzWhvRre21VRJ7jvPq9v",
  "key31": "4p3C26jtZzXkk4qcncZPKKBsqCoPNyirc1pLeUfN1uhq7LeCgC6ya5qrU7yyiMySX7eQDLtHh5HyhTgo5yA4btjh"
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
