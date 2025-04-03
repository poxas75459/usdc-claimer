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
    "5DuZiQSzXerBykohLJTjuACf9pXWfYaZd9n37VJgkx72EKtssfv2RomTXkFv7eM5XMD5t5nvGVF38FG89cyP7C4G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DRpuZXMFFX62RZL1o96fwgsxsf6fqTaEwZ17L5xQghiD6vhaDCDZwuVp9n8y5NHKekNdrcZn6CwceXhRLCtKba5",
  "key1": "2Hz4U4ncqsAP7P15PZRSkW5Aj3CYvx9j2ruchEgBNHMjruv7MMX3DZD5RUWjbrMoxCcP6qKBPHX4tXb6qnJJkr9o",
  "key2": "5sMRoJJMCn7VS1oFFzb9qzmsDxpqFarSKfzugbs6NYd7LaA6F655wacEnT2NxN9VbLztq17HVACUq2rv7BE8q9em",
  "key3": "rqXYfYoCbsQbRKLnnssoRLYeeaWZtbmjKgjDQMjjM8n2DbSSRdA2TeRsn7g4L31p7CMDHoC2dNQFYp5Yi1JqL7P",
  "key4": "2o5ucGh1w6fJWDEosHhMZj3QQx1ibcD8BYyjqgrdyYM85m6YtyZ6gzUPGA2KkNqcVTs3R97avuonkyaGan3tQqKH",
  "key5": "4cCkmxWqy1NLD5oC3K33GsEq7AroGUJX93gNdDirpn6LHYknRsFz5JC9YvQWuSSy1CKSKHYJjfk72G1veXpLqYsh",
  "key6": "RNhvC9ZPKSn4GxZUacFZYYr9ZCu8e1RMx2pTFbAt7yTT1thZ7wERQfnsGunqLQgPyiomksoqbJFxYjrhXfQM2mz",
  "key7": "3xmLBrBwaf4xhxfPBd2ExRTc7AsGEwM7ciTp61YHH1CFoaJ6A6rvM3Bgjpy1F5RqdmGj6Tk4925u7ZWcsPiy9DDT",
  "key8": "2rQaF24hxAhoYZpLZR7wp7YE7DuDaHfLBo5wng22YcqK6JVGdhWesJmw5HXteUfhgHhoHCHxxxC65vPfbYR4255y",
  "key9": "4sPiKEDRWyJL6rjv61WPo6ZwxfcrqFX6iCXSP5nkHXbrMXKrUywhpz872WkgCEYsLAviEpRt6RnpmW9vsFNasTJy",
  "key10": "3a8QKsNrDFTBxbmKt2g4cgqtwLB8H6xkwXkKPAeEodi8MVZLrdADM5Hpt5nYF8NbkixQqh3Q1ALXFd1AYdghyizr",
  "key11": "2R6U6umm4DgYxdPhmEBdWqGAMWGo6u5BB4yiVj2w29yxtH88ocMfmMF2gHJrdTzrZRLRizJUdCTUomxhPkUrdae1",
  "key12": "3s9LrYVHxnGK52HYujffQuNSZKTfFocuUwmmZ2Ah7Xg3DsfNgLaX5gwYd1vRoAMFsJxwgkmQLamHzjvurn1gLs5L",
  "key13": "4nKJcp9XSabKtFYgczr1Eyzw9rUSq69JpG2C8as6Zoux2RRuE2t7m79xheEgYoDRPBPiJ97vJjCUKyoE5dH9Qq4U",
  "key14": "gQcfoq5d4NHcct8sNb3zsuLZtKQKAVmM1tPbjnMAuyGGJYsAk9imxXPCARLNaa8Xg8urwcrhB6bZtpw5hLEwmeh",
  "key15": "3qbb3Fy48fiQPTXhp7ZD9JmPbpUHFZCrL6RGF4o7wEpcG6vUj29jKPrA61ZmatUG22D6yhGvw9tzTUCYRGSrBhHi",
  "key16": "2SDyvZbeEFase3t4c41WNrKyZL6QLNMKbv9d7pbgw4k9ZFKeNz44mcmzMUvnt9h49nH2RprAHZxvVGTeE4Cv9hic",
  "key17": "5V1An3si51i9vFvyFsz3XGgNsEd3B5HciCWmw9Nyb2fzFFLdPhKFWSuVw7ELSUdLW4GbHGgbvvYfAsYwauBskQyh",
  "key18": "GT5PYcUwpFDbjsYNjP92vZWiKCh4DkiXob2igFugLFg9vzimR5ShGnURgTigB23T8tTQ1T5V4TQyj1rBzXxmC9D",
  "key19": "3cioz4vnc4pKRHCwBVB5bVvWnaRrk6CELNiXW9ch7cdmYH2ndUKEDFa58AibTPC2sZVNo1d34KVteVCzMEbLnSTK",
  "key20": "3AmTvYeUSAi2riVxv38nvAKeBXxLWbmXKdg1Axb6cz4YqPkzFUBRdNkg7S4imWTtjJZuEjQ3fUf3s6zhh1HB6Pi5",
  "key21": "5DfFijJCp5vjZ6ueEMzroDYvJMK8rYry6GKAdHXK6UQfWkVnV8q22Acy7cBcjH6yPohUYgvdpgkJ1gpzEvfk7duP",
  "key22": "43onsm2ByZMJhpmihFHpdUXg8brnNzhVb1qHsu2aFw2orwfnrYerT2G31pmE6X7pCGt4sHzYfQiFWz3X4KKHubMN",
  "key23": "2UKWKsJ3QSuqeiFRo79jJss3dtcq77GhXjtxw5epCTtSbuduGnjGDyoovZYWjdMsfQLvmochoWDYj5CaVraq2EWv",
  "key24": "56hZcxobwA8BqH2yYv4Pah3AFKurKwKhooXE2QetQgzBbcYZjx3HseEdTDLU5G56C3WfSYvfMxfoZY2cKEWTttrN",
  "key25": "bd7nvx1oLkMbTfu8SztbsZJCqGGCaNoD2MzuAWXAK72AehCgjZBxuR1WJVFMSyYnHt5Db14vQZYZoG3FTrLprV5",
  "key26": "PbdZ4wb9j3SiGUoy2yNLi1fWwD4TH7EMSXhknEfmNGaoiHqzMLNUHFdbbDw2VXhCd9SoXpncqRxRgKqG1ap1jDf",
  "key27": "mBf2wtNkrJrtmpKx3hBRkMWMrFiHwKU7z9gcr3UGbGLainMS7SSzHPPytfTuAghLinAxH89E46pb6fETc6WeMBy",
  "key28": "4wZ1Yfcvkjm2w6DxsPrq5t8cigFcSocKH7otM247BBuGk5UUxVnQgx9dnQr1kcs46adRNvhzjYzS2ZJTWNMAozwN",
  "key29": "46AbsZgaH3yVAh49xFgkHrSDEGQx2DvW5VSdgvq4VxG7FGZEbcsucV2zQhXjpmHRwmSMEwgHt98MYduN6Ueu979z",
  "key30": "5JrBsWH1Hskshb1givXjHKcq43LFFnqrS5gFv9vGqjB3zdd5oawMqwo1HrMMLnF5mvx1M7b91DvbXgFLYq8vxU3X",
  "key31": "49Ui5eBVTNeCB5o6Pn4bdMQyr5YNQE5Zh1L9FWR68pTG3vAheujjD9EEm8FLHSVRQf8aYcixWFfW4A7PXNJuvnaX",
  "key32": "29MkRuRk4QFCvBvY5bXW5eUwpZeAEjmDZpRcFCuhLNnUehg1RDLojuUpgHa4RcFB3DdAcYBKwdceuAFz5NgbM2rM",
  "key33": "63jqtk8uWG9CQhyecfGTeeNvk1ZGaG9jPbhHuUoVpi9UtozFGMA1nM9F45Uvn5zdugr3CqVNezEea5eWWBrKHKS3"
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
