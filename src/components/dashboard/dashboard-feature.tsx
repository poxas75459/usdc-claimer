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
    "gah4qrjKnyXWcAMQ9qnZgsXwShysF7rKSzdZLE3fU4MgUv6BPSwKjG1PFTce4DeRKg1h4Pg1fw5HgM66p8S18wc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WkxH4c8KyBWaSgZXNiXNVSZsHiE5sWNvwGWhj16qo8TdXojLMs2F1nFt9r7bYXRzsjifg2No8U5sgTGEcRx9DDK",
  "key1": "3sd976dMvVBswWk4iaac3WFVg17NuxbzfBGFuWY6NvBETwf16hzPFaM9b1igxUh6G7Z4g4ypvNcjAfXYFw4ZW4B7",
  "key2": "4pyfx3YdZSSG2VTRozGxfSfazg26cN8j4SKaxz4TL6MrTy76w2mHNKS2NvttwwVHVS7isijPjwfdA1qT5XDkCgyt",
  "key3": "3UQW2LdNpa7LTv3JHDeqCV62Dey29PX7X7iAHjCzduMUPnSCyCU4dbcAuBXotXZyWDtvZe9he97fcsxkLPAUrhYh",
  "key4": "54W8bLV5FxYPudY4dRtjaevZv4avdNcGpThfK1f3K5EB1WKhXkVzfYziwewuxa8kATXfq5Grdke1KUDvVXgnjm9F",
  "key5": "3DD7CspvyZhoaB14MVjSx4HTVo69zjVxFS14s7qiKBLdKiBvCAednhNB9ojP6idMW2HaRWo4cSnnLyp3f7o8irPj",
  "key6": "468TwWRAba5gA4tV88TXDeZHZT81bCD9Q4aWF3ThpMxWaUJYPAnGGu78w3hPdrgM3i17iJtzLMdEyxEe11WSL6UV",
  "key7": "5WwNuBg5N43YKku9BYULKhUZAyYkhHnHeJ3sVV4W9ynisTvJ3yTmzN8z6HKuLXXctnXoSBkQSC7aSLxTEBqCLoby",
  "key8": "2iA6gfU2gZ63uWH1eZJPyYhWoDZnVy5fjvaaDTUcNaE4HtRNq4pwFYhZxcoRUMHZW8JTgTBCyF49pYRbAxrPTX4k",
  "key9": "2rFihUPSKXX2bPHDJhsvXfHLUecvZomNnrZCUhViCthE9YJcaYnqtiJj4wvXHNuZXpUCHtjGDJhSsxuRU3fZ5rXL",
  "key10": "53CDYi4EuroDJz7KmBvYQAv9xo5CMbFx4pi7uKuFVLzbAc6dWZegMEiU3Euu7HCxAaHDma43Xf6JeWCTDRF2Jkxu",
  "key11": "4j3BZGPMaKxDYJ9sA6KJ6r5Je9mbu2fyEjDswRCJDC3cUkxuLs2FbKxVy9qNADEHT4zsmVvH43q9NxdvoHqYsa1w",
  "key12": "388PoutwhzAvg1ZcWADPYUEKVyWLqqaR8NVgRAcVfxPPoXCVyvzaJDaRsMz6n3m6MuFJRBfS4HGXcUNPmWPA1aUs",
  "key13": "4ABUaG4sTMAFwqxnbApKytYP8ZwbtvxTh8asNrnkPY55FKVcj39C1g9vYGAuszMFzfBpu4vg9SVQ1FwR6Q8gHbnb",
  "key14": "4coEZ5av9SpjmLzXfPYpJRuoJG4DT9cXm1TpibBPaVVmhzRgeJPGLm6ZBKK8bZvtNeWmVMa6ki66jWcTYjm5YjBY",
  "key15": "4Fmomqm9VFuCwtvDAxSVpNb3TzG1tFsQPdFzgVJTPUevKV5hXPJcKhokcmxXkgrzRZEJgwCx6eS51cMn3CpJWRmm",
  "key16": "4JCNbiNHtofV9TeXXmpmddKfoqyuPtunNzmJ3cTE1PcvnomCbi5t2if4uC5sFJUe7xcV6QPdnDuGyQkcx5Z7YY3e",
  "key17": "3jYFKf5Ljfe8zWdidLhNQ8b1wpHo3k8ecPVvVj97LT6nV1TdK4b4XWmzjmjdmGd2ij6yVGEqC1Gz1QsjRxMFkjBz",
  "key18": "4XLB7uavMQ51KiJvvErRewEotqJmEMQDXR7te6PB6FjpHwLEeM1brGFv4VWJ5WgEjKWGDShNfWMv17bzEp3msWdT",
  "key19": "4grcTw7oiPQzWYFyaiZCbungmpNgG2e7oxtBRKnVxEUDv3ydKS8TXrZ4DkRAD7YGQ2JJswN6YHekVK27EngByQSh",
  "key20": "4FKkeE3aoyaSK9nydqPHgvBiQWYKZqnetx8hvDikA3ZeeqUow9wzG5BfxzzLnNp2mpk2M3J5rUukVjum5u9DdoAN",
  "key21": "3HEFT2qukLY1fjW7bpXQfwzwH7Kq8xicFJmwGn3bAXBsFUcxrMomJH5PizTBAYkfrtuaU1sQbhw3DgkVbafTdG3T",
  "key22": "23Cb6N9XiynStYjHYvRZHJAWYoEhPMdVuXooiSVWwrNECXtmUkEZ6FjgjM2EwrJaKCZ2MAabagM6gfRQRaKwkXoQ",
  "key23": "3ZnzNMFeH9nQ7JRHgde6eE3sQX2uZPLmH7He2789Sw9DPHFHkZknidfLqeWx3ZLJyJ1BysMzMBw9y4Gi8LjpWzg4",
  "key24": "eXTkhbDu3o5FQnrjfqvgSgGwX2MW6MzsoVgRtZswV7SHxwUUBT61P4dTrQU3V1BcW4r3AhpjHNsXQyqK6SGXGNW",
  "key25": "3yhvzwVVKCUmk9HQsTAyzN1mMBB2a2TfF4yoBhoNX4zgazpt8DwAzR7oUf1z9iF6DLnGBQqXCtv8EAQkCVmtSbEM",
  "key26": "2c8NzKkzCbnTF7vtZimmgmcGsS8bdSz5kzmQNPzToJUKcdckvixi7vGjs3ZMNxd4PYJc2zxzhVyhuuZxN5wRUap7",
  "key27": "5U1j75ZYrtcxELs7rikpAYfZNrNLsYKf5ecj6Bpr5ZRaVhhtLBnrbsi3BUv24J62zfFpuKtxnDzJEofe12TsjQQC",
  "key28": "2XmTSoFxCHZpzK7EMWN4jH5nK9nuJe5PZwPUcEK5og26MPmV9GCCxAaKeQLMx5k3zUPdmQ8EgyKsXuoaDih42nWL",
  "key29": "669LJ58zsmgDNAPLFyeL9UgXKQHuEdc59qoFf8fgpV2FVuUmgaqbRA5enTC4z9BvT6uViE48d8fMEGpcbMW8PKZt",
  "key30": "3XWfeDUG1Bgq66qCT4gSVMAPtU1W7ZPh2g3kdLQTkVwQ7W6DVQekUct1g7Vuwxomx6FgRBbQipALMCUnenJiSqMC",
  "key31": "3VpQise7y4G3PRm9u2Rd2mPygQa4VQZ6NNk1dhZ4uPgUNR9Vqx8DiQ5sgigE4cZGZuqR4y1dVn4AzJDceozzF9gw",
  "key32": "3B8zRZLSnGCgbBNzQPrhpeaqqBcW889VYerzouJzg6tGqi1R9dxzPqspmvPbfPCLkxN25YbLnywvxRjNP9dfqfSK",
  "key33": "3ZLHEh3uifEKXdbMNxC6AjeCSRLjmDwmhDpv29bSQeU79BYUfcT2j4tmeBRAMA4QmC8nUm6C9KxpDN8TYzSxhdWC",
  "key34": "5nxHmNvANwoqh1yJZr6u6BX24BHTnsjyQHD3YqyB9dNY3gcWfqGx232dZYADDvpkBHMbQJ6bcHPtvd1zJZnL23dD",
  "key35": "2oid5TQVjwGy8YF1ZXAyorYDzoFLyjgia6ZZeXC2gSBFPgBQcnbYc1q3rwXctjaMB9AXrinrU2DJLZdzu9fYbiBF",
  "key36": "4ycH48L6YV2xmghYL3LXARM4EyxSA79wdmRosRRHc2ds9zvt8RXR7RhCLmmCb6WW6eeBjRbU4p2RscsvT4Di8vtX",
  "key37": "3jfFZMQrvJsBtF5WtyQMJte5VGBqom9ZLKDF15j8GJXzvbnxZ3ahDr7RzdqFyS9AQr6fjDxNs4xKqAwBZE6uCEFb",
  "key38": "5mkMC8qiidtA78332MkxwX2CZ8kS89tY6d7rWHUuVVmSQjxGtKyjiuoY6dD6kbkctRssYDjj8iMdpcsVDHLkKDqE",
  "key39": "XuPdRSNroS8zsK7Zo3z9WkvetVbUwva8FpZz1aBX5k157c5s8BMqF6iteGqs634cJNhqS4FbeJ311q3hywwyZew",
  "key40": "2DBUtopgqs3jzwpZPV2nCqnVt7Wr2VXETPTaA2ymzQAbeWD7bYq7deTubtZMbFF1cnNGJFAcmvXkQGsJuNHp6DK8"
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
