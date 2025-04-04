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
    "ozYPVR9qgjCtaiMrJq9KkGcGrKDjDmTQD3e7K3wud6fRDpKuqRY3P2hPW3qmFkZQQMzPkNatAD7X4fbvb6s9rJp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qsEBJxxjY9K8hxFX5mQPiYytkgUMZXqKHcCJKLknhnEnMdM6xBP4gz1wRvLEYwADsVe4G9LwwSpj8H91WYLYi1u",
  "key1": "4SGQDku8BZRGpkeuTXnBauSXwzs7mJi17gSosge6RnsAAC6W8r4Tf5GDDuiPxXHQF5V1s5QMfWX623V8hAU2vwKg",
  "key2": "3UcDenefzCbW4PhxZjJN4zFaet6MK7NHJw8op1TGWbSpsf4MDh6z4u5bvPyja1NgPgLAC8c69KZSsQTBbanUdMWa",
  "key3": "5S2znkWUmj7z4Lfs28gqJjeZzoBEi6xLvcTwU9H52CeR3f78hACj2dZc9aLigK8YhngJxBD4gs9RzQ868Xnq6Cdr",
  "key4": "wVZ1qACVw7qRRLQRYS3ajUXZqCEKiF8bUgrZZ4mtmKZZGX9aefA9ducC7U7pHzn7PTw4FbJa1N1QBN6Cw92BSa1",
  "key5": "4NYwxDEvBQXZcoJ7dqGkvAgxUAoQK54vFCTrjjc6mo4e6vq42cHeXCFrQEYpsT97AThcBwty34FZXXvEQGFaZeE5",
  "key6": "677H35bpXsz3XK1UhDChebLQSXeD51XhM8SnbfNgogRnPX7Dj1x5qUKgbrjVj6Z2ugJm66LiXqnxeKeWkpH3CY5m",
  "key7": "54TTQRT58Je8CXpx5WkX6C7uT8mmmLZStnUVfhbNUk567pNzgwJooQV9h1eXpAA6r31GMgVkCzD4HDPsFyAL8TJu",
  "key8": "5s5xEQ3mgGaXqynSPEZ1PXSn72Q3vZPPWtorYKkHaKhCMmD8yn7SLUmMugCLCbicfGtXA9D6s2GfqrhrfwHaABvx",
  "key9": "5ZU9JoqrCikKcVM5Cfc7bweWSZxGVkGXaLH3Yb9XxKjtsfWo7gGRke4UP6gKSpz2yQKmrJB2ETcPrZqiksnMx5QQ",
  "key10": "zRyn6UFCmg5DVBp8yQdWALeWqmefikyLLzz2XbyDUG6KY15CUJ8Dfr3e4NQLkoZjFtDKBGBMaNbymMsqvpjFJvf",
  "key11": "62TfDZ6bvVLzj4Vs6Ebha4v5PseACvnmborEcgbPBZ1xZhQZeHuP2HY9j8Bw5avQFUd3uHmbgkHXKFFmV8feZW2J",
  "key12": "2wJc1QJB82vPQLYcoivdQ1t9wgcoiDnePAJRgsMuVehjFWXWPgYVCt3UHnNYURHTW2KvTfLvfLs2Vxy4wV2Kdtu",
  "key13": "2cKQ7fG1xUTbFGypkgFcsSEPgymkKnELEgn9vkomSvHNFGVd8ab55yMXxC1WeNH9rPxUpxzsgbxENSMSuR48qkh8",
  "key14": "FEhmS98gTNftgGeAAooUwa91xRkeH2GkZcyS9Gj73od1DpSRtyMNyCGex17YGtcTxdLbukZtRbWgsGheimvcnHo",
  "key15": "2RZgAU37HDF2ajg4aLrSc8XgRmfiJHHoZbAs8khncJNYGv1QHgwA3eoutAkFcGSyKvQquFquYFEE9jFowEThDLB6",
  "key16": "2e8iXePvEwam6tLpiA5foZRrodsGoSrr61uQNv6BJRUp3v1Kos1DTZQMPzFEbo4vawdRmo7TAZuVpqWA3sRqkgHJ",
  "key17": "3wj9gWq2AkXvUSsjqXyvbePggpgtwHrDQz425agNn5Q8eCrw84D5hDUFJ4Lc5c9PqadogBqnpYD4ogxMztW1NoR2",
  "key18": "Mf1kPu8AQHxCjnYZ6y5G68MsJkvFbCMC6kh2CSufFtDoc1hejLGmCRoV3seumwLYVnjcEp5pAPp6XGaFQfiD66v",
  "key19": "2nR6iNy29ZQgjLRGyyvvtvJKfSch2bZEHFYo9VKy6WVxwg1hNCdeBFYcMjBcxcBfzNVfNGA7XdMQrSALWMeBPkJ8",
  "key20": "4gxMXQRCPECRXw5tNRLvHeuKtbLubmJuZ5P4QCE1sqNc2savrEDqLmH3DRVMBSqARm819zkm1UV4Kj5vmfmuSFvt",
  "key21": "49C661BhX3LUehAsC77ZWefLYzXwa7a2fJ7T6jyPFasqXRK9k9awtMhZKfKiMcYsNBiJNpsr2aU8AJ9G7VTxjaNY",
  "key22": "5nJasMLDEKQmWPUh6VPS8443XcLSA4EMiRte53zirKtpb8f3KHmYut1TeSRJXwgZvvC82mwaWj3gAjz8jWtq3p4f",
  "key23": "2YmqEUcYpjoDYf1CbQ3vpaVTv5txqrN4c2zSjsr2Avvdfzmuce1RPg7eWoJoxpn7sRKdPzsjcFnkqGb7m8Dd21pe",
  "key24": "5HqHQbXcS61P7B8SaLMEyqt9GfzrYhcqNYTdxYYJwLcDwthbBkLM72ruey8knLiY95QdJrWWNv3vuWqvLT7v4sit",
  "key25": "3XhuiyjBMTTRW4SE9bmiXrUVgk5LbB6UnWHNABuREjg1BVpuWujBJDDDNXNXXR86nASFeYCKBbEzwyLaVRA7CPbJ",
  "key26": "5CCDZkyMx7CAmdB4VwwyEb8kaBPytnxPq9frq1iXd2Mg4JBv7wJXRYAeuQ2Wyd6ZwDZLUNRUuA9Nsj9NvbA8vo2v",
  "key27": "4pqYXneJ9DjHDsg5xeau6M1s1uEzmvxE7bnSFH6NGRiB3q8nPDcSSq8VkRr5aPAzM5VfYDTqPvPjbxshHBGL4A5h",
  "key28": "4drXhDZB6iZsz8HdaqFMYfTTy1r74QFc1artieV5HUyUYvhtsN56Fwa9SE6BRc8A132ggwo3LRBDsKu7sEgyUX86",
  "key29": "5HTRvcRXB722q448riiBeW6J5LDf6dw9AP27xsuuyBdGAWxoFvB5bNS7HnCLMv7rS8i3B5sZgU3wx1TbDBojLor3",
  "key30": "4gqcKSSQpuaqYWYievncUYKCVPUaFkgsrQyjC4MNy6hDy5mkeSuXjZKgq4ngyeAYuernxxJUEjt6F7EXHYL7vDXJ",
  "key31": "3CRsPsxpK1RbxHqAPnkLWZyuQe6QnD3giqrqQdj6fyrax5g3oo3hUL92xn6VbpVQGCwX3e6Zi1tesdN1rWjQKSz6",
  "key32": "2J3oMQppQVa3BqdLeMchBuimzGfEMPT1x9eatnQEtmgdpeynLMHfUbNYhgfmhAAPKQDcUfFu5YJ8arukTCubdZwD",
  "key33": "3esbyKwdWU8V2ef3jmPYfcrSTQMZatfM5P6ZFzZvvZFXqRyEer1mj3jwsfvx4ZA9PJUT6sGbMc65NttLtiXQ6ZZj",
  "key34": "52BVy6dK2G99rDRgMJSvpUeb5mV7m9WzbhQ5KNrnmTko8b6E1u4t4NhkNwmg9pCERUiF14cGzyrLoJRHEt5Peqme",
  "key35": "64AGSYAs1NcC5ErUhxoRosfuEHrpYMscqrpY36Pn6oYbTmFzEHur6H6wd1RKbsFGoprVNRhMJ3VtfiRNqD1ZRkx4",
  "key36": "3jc6mobxHFGcDoJQtfDfgqWNA3pacdHXgNCN3Cq64LE196kaYW1qfoQL6eFKYDaU37LLzBoU23dsuUMzA8dUSBdU",
  "key37": "21pK8pMcSQUsWjAxipry81fFKMqC2G79ih1vaYbTsNC3MKPVuYuzBQzxk2Zj6f6SJmEoPPmCHEutAMGkktKzY6oW",
  "key38": "52TPsJ73E8sgiaTAVStRCtTFPngWRFREQetjQkeAofqBQpeAvbnssJyEuwnnF2hGHWgWWbgQfB2v4ApDUhyEBNwS"
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
