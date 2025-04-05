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
    "8jhWAEPTY4JvLXjwtEE7PW7L93SStG3C1pcAddebFfm7bCtZYcLeRJYj7xnPWf32e7UcsRbcqN3zrDDjr14dt4t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cYeioNRj8VHqvjc1rtBgp1RERMRr7MrDBhcy4DAPaB2puB7kofKb7tQyeCekkoXvtbeSAU1uFsyBMtXLESsQrWi",
  "key1": "2gcsE9ZavaBewDUEdKCFGuS1aM1DndMaiiDQXfvWFa5mdoyhG2rWmYc5RiV81xwdS1vropi3o7Ya7xcC9hnbWGPA",
  "key2": "5AzDAk8dMQ6GqJcJDNTVtJZ9znip3FYkSfwomgTq6wheYv21cd7vRVsEtnox7uNWiRYYbyfLUCPXdpM5kN7kcpAf",
  "key3": "4gvD5WKirgLgWxfEt2Kk1wRWEPFD87ue6WQrb58XjfZHJBynA74bkoQW1KQvgJG8NYKLBnt21maxZ2VYuqggoSvX",
  "key4": "o5AcH5NpFCpjv2rQBpz3ChVzWXEbgW7ivSRq9JfhAdqwe9SEzRh4U7P88wbYtFFQz56C7TXrApeSJiXxktUPVpd",
  "key5": "2WUwTGUrSeD2qVRninZhyexGEmUmUhU9dKkqRLgeNaavJKV3oHCx8zPrPHSTz3nVSuf4uQcb6c7k1uuZ8Gp9hfqv",
  "key6": "5QjwhgJgLcZaRx8ehJRNj7pWsWzcHcjpaw3qXKwkom3iHqNxtFjeRusNmT59ADGQkCTwm6beiqC77AC11nGfhmb7",
  "key7": "4ToMm55rqYCE5eHXH8393jKzb4c6FGHCQNQW6x1nJrv64x7bEuAciZUBHwtq1ahhWuZpfwpqLfbsppwBEuK89jsY",
  "key8": "L2fpwjLmRt7CmjqE4LVfj9VaBqhpD9cCnPeG1UzEBKzXmaaTnLEey5BNH6XJmNBUTzhBajSmR4vqRMuvtJZ8Z9T",
  "key9": "5G69eX3CLVN1juVmMPvVtvQBGUrXPevoE8w9LaDsve84DNsCfTVGsy7bFHy3G5PnBis2UTeBJ4RhjHED5rLy6Kta",
  "key10": "5vPXYtS3PLDfLvRUPLNXR7MECfbZzmTphiP1SYKJ3MtMADxk4bMhvU95L3cUsKABQeF6YdbLKAyNJvbcgtNBUypS",
  "key11": "4NKfMgxww1Zhvxqzzz53wabmJ6CNe5VyGVDGsXXpM1tDaZy4YjAmwyWfBorZQLcRi12FB4bjhERx2dGqMuKrRZKH",
  "key12": "nWNi3ybqGEijFf5n5XPekmEfZUTbN7fCXWePB16y5RMdVWEi4iZNcBBCh8cJ47ENS6Si3brLebC5x9QkojLdkrX",
  "key13": "wx9vtfjjfeF2MTLHxDWjveRXwGjoCN8sBmzsvK2PGpShECnfFdzoo5jWh1b8iZMmi9s7pFv42rCUA5KuLqDRi9L",
  "key14": "2sVMdKrykkdzmHySQuX7G2AooXjttqBGToegVbymkH3qervdvGypBQ9t1hYHgwwve8gCvJQRhzFzw799nuanUH81",
  "key15": "5YzjrsUgy9bBec8Uc6L7MPcE9SGk8yr5kX3UFHLLW1AVS31LEHT94S7mnsbVjzmYBu5CbU3AyFQRZnmu5bma12Gq",
  "key16": "4HNuC9V8rtdPgpDyA2cct1UffH1g6DJbSdGz7rzJaRnbFDvwEoZanFMBfJiCzpM6ywciXCvGpU9RcfbYdj6vKdf1",
  "key17": "Xi1uwPKYad1rnYcwjsTTtyKviH5QcSEBheUiET6u2PDCmNVumcnN9Hc3ck77cZZ3ch7y6cxDZS24GCkoJaM91WK",
  "key18": "4rmSkCLcGzAmkQqyVgtHj2z4URTA3BE7myHM2nxWguFc5dM9wBDNyJKXtnNnh111ZZNsCZEHXsjSKJJt1sBKvHCi",
  "key19": "Xr6YHftPCqru1WeGu6nQtKXSU7c1L72JzkgryqoZAMuoeF6beBgycjrEyJK5ZfhcBTUUegMYdVvqpnbhdNzAYAF",
  "key20": "5JBeVAeQNhqMPLKYpiFLmFoem6pYXnKqUbobzjZNdfkgm2P2JXGSGoP7EYCqn3DaB9ZuCNMPoVv1peaciBEZZo67",
  "key21": "3JapxcWFEG3PEs8RCxyv5KiYRByewYB7fc89cYdC1ZsZPub2RvKuqL2FCPaJZQG2c1zey5cThwH5HqLyTmtFNqXm",
  "key22": "5aGD8XcmEHytx9bceqb16q7VJYs44gYv7RjgsBZR5ELc85UoGqa2HeDPcN7Rijn1pLuf8mbyM4rUSN5xSeqQ9vJR",
  "key23": "4LXzAXaHvZ8aNdQWqWDFoGjc53LXYkn9iYHjajswhvLbBK1MMBF2p4FKAwiEnJpLsrMWN8DssvqaurrKAnjnTJfN",
  "key24": "2BTWwh55HLFczbSvHw2gRdABuKkwMZwLVbRh1dfPdVw19R11ZX8kAiY3ibFNUJgzXTYnemyrPiV3EyKNFny7yydw",
  "key25": "5u2XZ5HBT6eCrtZNYXpSWuL3csRB8yRnZcAwhp3FW9Ak3GmpjAMmqTZDfy3DnkuJMWAgtovY6F28Ds2Xx3szJFLQ",
  "key26": "mckCFfySKLjTAYtdBj48yBWVtURnHyEso9JqzwwQwfUGEwc9c7n1RKQ7J1jkMsNZffQpFFskftayoV2XpxE6PXQ"
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
