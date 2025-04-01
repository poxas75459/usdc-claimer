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
    "5twaqtQsFLrdzV8BAggk9pvkCpC7w756ybqTF7PuRtdBB54CaorUhXKE5vaW17iQ7P5MyeCRJFzvuFYNWLb9gpQL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59YmrraqQhYrBUFef8T11Fj79kpxBVngX1WFyK6mXf9hkgKEdDH9gPcPaxyM8umgfFG4E5hDXfdRqemSdoMzcbyo",
  "key1": "qBYd7TAU6tn3Dff37yBxrNswBj3SiedyNeBugrsYwcRwbdKhvP4LwsNmwzz9x12jUFehhyg7Xy2xDHZnpn6ZQc4",
  "key2": "4dg9jyLfoYStdCdTGuBhCnWVZjCyeBTGSE493LmcKxXoY3MZRtMoYwsQ7sTRmUp1DirVu2V5cR5oVEZe9QPqqPDB",
  "key3": "3hEXDJKiMv7dHr9voYC8kw7vamPuiywWGfrxLxjsHwzAHLVPTQnQUc7vzMS5Z7n78sPBSVRn5seCMZHVQZ9xajXq",
  "key4": "4fKJNipPc3s6jLxisP8CJomENVQm3vZoFJpZhesoXtjHjCpGiBbRQpmqDobUNi7RysAkVhZUe4a9rqVuCpPihwdY",
  "key5": "47tUa38zGwLS2cxxiEZTcny63jmPtkvLVwiaUBX56eYJnztWki8KSVEB9sg2w5PZaCrFc7xXy2rxTpDWfrjv2yZs",
  "key6": "2TC3MfQrScoVKc6z68pwjLCiJmQT9RwyTqir7p2yVLFyqFPuSc9aVLonuyHjuuRtuyyABrb8JbeVCz3Er6c9VFV4",
  "key7": "D2YrZC9bw9sq6G5m5ofTnyhV5byePegWA8orE8ZTimq7bSBiCrYZtxXhVnm5NbSgJkhB2Dm7dUf8994WRa4kyK9",
  "key8": "3BRUwaCdUP6XjSyWbGud8HXSoe7eFDMJLE1yeaCK7BB8piiD11DsE9zYUuXWaTNJiydVLkv7ktWnGdiovabsxmdw",
  "key9": "2x4aBmvyY8mHtjDUad9TK2wXq9TdC6ZL4MopRSt6smhyr6tqiaKSee3AuYqHCU4qmLHqY5VVVEwgNQ8ud89C78qV",
  "key10": "5ZSLfb5GyEEme4iAG9p3HR6aTUiy6LbWJf22DAC6Lv3ZTs24k2U5GtV8CbL7k5ihBbhK5daqWogUkRsr9k6P1wxC",
  "key11": "4tC5jAc7C7ystHoW4ixMNDznHyJc5B711aF9depgYRVeA855UzGXAHiMTp6pocC5jVhjDeuFM2q4uVgGxCyPM63Q",
  "key12": "3j7GsJeyhLbJ2hYdwrMeE2uuKp6KYethjQGirxtw4nyYScaAB4TH5ftzCRF39E1ontHw1Sq9eUSjjUyX5uy4w3e4",
  "key13": "2eEo72E1txYXV1E74ZmEerXXXiBgde4WhvWLrbj1FYgAUnjvm3oM4qxytfeWtQchegp3wAa5ESe5hM1RYSPaGM6J",
  "key14": "cD91iYhKw1DgitrEHQ75W2gv7tRBwLFZLLfo8hKSVJmicU23dTMJiBK3MLrJ3V565UWGA29HAu7rhrd34KwYShi",
  "key15": "6G2yW5GpdqcXmYJRyUwXn7WDXxYcFSZFoMXAzmGWghwF1KVDarDmUmBBsjsVTfWYNmD6EbwkDuVBENaasF7rfKq",
  "key16": "2vj84TsgsLnQnRZHQFoZpdpwjcE6SNojm4tCRtq3anpUWYiRVqoN1HkQ5LKmGKDjVpyLHLqNAw7AudLRUmcKnJuC",
  "key17": "4jiGoJRsxfeiAtZ6uMXX3CNH3G8dxYaYuQdP3uc7JRiW6gNkXkJLP6KTxfbS2LMN56CXhZVP4MmPsNg4wKgoYZpE",
  "key18": "25htLqThjDSNATodqWCjPNQShQp8vdeSfj3NYFgGK2fiNVU8FHeedbMrmkUQPPnKxRXcwrfoNxecrNED9i72KuYo",
  "key19": "nhMNQh3MpbBzg7CPYfCBQ7TyACVtQXwDnggVLYXCgnjE1mJSArJxmTQATuQotqMBPwkNzDjjj2YrBRNfn6TrNFv",
  "key20": "7YbvT9rNS3TjzfJSowtxQLVC9QtjWWCVs61E9VZrGwsLrvgmhe1Wi4djhqmHRMvEsWXLnNF4xTfPjPCrNvHhquw",
  "key21": "2hicHKXD7tCNx7K1U4oU1mXuCVuzHUu1ZXnTU3iZPb7Wo9bWN68Fk9jBLiiUiHgBGWexu9yVdah6WEbuVUGuyxWq",
  "key22": "5CMfm7WdCizTgBA4tXde62XwtWCqpNNfMRwc7yJiR6boprq3y4J1bmevBjGbDoEsyupRw4wRNsYk2JPtAYyxabTp",
  "key23": "5mStdZhAs7HB32kyL7p6DBGMFK3SjmmU1mczc5LuZgg9ahQUsfiC5skLsTHv6bBAU2Z3B1n8khToRb8VSH27neNX",
  "key24": "4AzBRKvhyuVwgmhf8EGyrY2UT5zs2WBM5AHypWWYBu3oqtEiSdtH1RSUv3rhNs316Amm6hWfun3QgnuHZ1iTZZhG",
  "key25": "23VDEaJmx1UJhqViJJVdjHts9bWDodmYqqhWJFLTihNZrkBVYnP2EyFn4wMskw2hYix9WRaxeuQSnQZwxJbCK1M7",
  "key26": "2nLuLFuxyvRScAim7PNzkXkLmM1QSoyCHPqPiXKmzf8oLKPZdxnkanB2ccq13QLvR7QNukNVX7czt9Y5B2ysvGtQ",
  "key27": "4B8ij6hbUCsQEcFVR6GpA1ewUFsxbBtZE8gQL5JmM2ZE2jFmkQasxPKv3vq5E3WnmfRmxZ9ZLoipkCiXs3WHi5VP",
  "key28": "2sk4HDThxaJyGan7Ksh1qiMCdbYcJnEd1XjEAADfWXBJeWMncpkNwzdCVjQSBi53JPHhdrQ36bo2XNnfwFaWCWz3",
  "key29": "MNL8z6AwmjSfN6RCWew6MfeieTqHN5LR79kRtsyeEUvLNZSeap8pxDUzyGNB59n4UFR6rGiGkcVbZaUpPypes1a",
  "key30": "doUJ7w89sDwZsbGYSk1waVa1ucdfYKiPyGaE68bnhRb8JkiwuMhy524Zx5ibP3fSd5comXcV85D4CqX1TgNfMw1",
  "key31": "3zaUz8jQ37cmuvDkpnBxn8q6zJkrMRcH5W7cyHXYQAZW1iTm4hHvBDVVVi7KiL4G41VP7r5RY7n1aNqHfqi6BBUo",
  "key32": "4mZ7g9d4StBx8Cd6CfYEtAYtxHt5VdpTiH6tDekY2mpy5Qqv4w9aS1uvBLkdXXpyTq4qw7Viqwn9dgt8NEmfatbA",
  "key33": "3yfuEJyqjEeKXdoDuMvuZTqP3D8waV5tbaJHSzMucZrbbTKTBnXwNr3AujDmhr5erFcmYaTw3VXa9zy7nJcoqRPe",
  "key34": "3G4Hf8CpSKvMiWKv1woMDE8BYHbxJxjM9P6xmUC4eJ3zNxbi3HSwWwyWmE3dyy9r3vgoLFvRfrHxECk7MLKXSVY5",
  "key35": "v2Z1xQcKkSKkexrnrUXNXXRf3PS4TBQTukgxEWoEsW958JCJSPLG9RLX7Gwd9tyEfvLuscCuSp8vK5k6G63LLEU",
  "key36": "81J3GtVkYKyiFDGfmo1myJMRpteMsYdRab2Qd2WzfG73J9AVzrPSt31L7MPRDLcBR8G1SV8CdRTSAHiRE9TqBhj",
  "key37": "5hYAQ2mg9CqPzbzNsxsdxkrjbynmJGfxWAURx5gWFR9ne7cPmKHRWYJug8pmJLiyaGJDgdr94D7Jr54FXpDtjKdi",
  "key38": "4w6vx8TbRHosW1saGbTxqNmAKJaCNLN1ZM4V7dcesY3V32KTwNH9byrZ1Lmfcjrzazzuixf2RJD82vZp6dAD8MS1"
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
