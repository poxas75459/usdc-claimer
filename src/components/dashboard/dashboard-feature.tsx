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
    "B6C4DbvQrHGCfR6EgUcv5B7G1tQhmaWi5aSAkzTa9RRvZzZbBkpQxD7ufDcZTH33HXtK6WtYHodCof58ipt9FtA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U3Su4UmeMn8VcbrefLJ8gdsxdrTc7paaGCmnq5jmfsHHM4VU6dRoSDwccN72iuXixSy3T2GP2SYoV1bVEsvdyuD",
  "key1": "572gQPfgh8drgkEbSxKA9hFSgX6iBNCRMJqtVjioLzK6o83Qvom23DuwxdEbt4bNMrBVnMp4HPEXXirxLP1CA9Zu",
  "key2": "pUN5dJSDbg1FaPFUuSo7Nxa2WwxrfGf5EQtwRTFDcNVrcHs1n9ZEk78pCSLY7rQSft7CQdqRiF9ybw9qmKkyPdo",
  "key3": "5dmFR2tcBfG7AtzrdVo9JC5jWgfcwpgqSLdzAy95kHPY9SR7LG5YEXZA8WfEfJKoG9btUUP8gN9Lp3WY6EkCh4Qk",
  "key4": "odksmnNEUAVWdgERQNdmqobTNVmhRT6MfqnETTuSQkr19C3cXYUZmqc6jnGxTsYkUXPtW9eraqeEfafizg4wFrw",
  "key5": "3iVKXnH9p5wKgFLE5dNweiYXbEJjKPEN2odsqjZb8eL8MaRTtiHEUgMS3pH1SRiDZeAQHHaLzZ3hf2QjBwRtdhqJ",
  "key6": "4tT7C9ggRbpJTMbdmYSRaEigYjfLp5knr9XwR8AJwXB7cPhzxRyj741GYGFb5etY2yCJaLSJArjGkqzt1De94was",
  "key7": "5hMVFHzzj5iChbUtpZhHGbUBDt7eGaiwUYj6Rug7FBZuyD46x6E9qZJXEEtT4A1FwsE16DfEejQSDTTr7mbjryQ7",
  "key8": "3VyFSJBRi6EFLFZRCiVDqB8TKFW7QJmn6Nzdzeu5MHzeXjNroDkR6f2EAFBFRfJdNT2TtM5daCW6ovGzHrz5Ba5Z",
  "key9": "468141HCfTwDSSZuo12rEe4U9pnj58FdWvBhkG6njXzLFvu8pK6x13f65iwFeVgLkm5PvMZK7ty5w7T8TjtQVKof",
  "key10": "4aLVt2x9HrNvm4XqTag2uSqQs5aFHUKBrJV6NPGmnJLMtm8CKVzCmHNU5nVCRap6kZD2CVx2Nvsqn7bCsRALpkWz",
  "key11": "3DdCJbSEHnU5pLtoL16gsRPuqZ5VBnVUxsYZ8LKubhAqxoQY9N2ABt2qCugkq1aR8TKR4S5hwwtS4m1o99i5e4LW",
  "key12": "3eb57iXNtEdaUCHTZMDMG6hAHKroViH5sh4GbHeXHvDHS8AiecGL94CCu7qcuuo2J85qYaEhswrqCLMqDwiZv8Qu",
  "key13": "5tNPmJRhSRwwpwroMaUE3WEJ8dqVB9YWyLXaFLUHbgfKbBuMf6Ti1ZcgMTjGtatwPiVMVimj2wBb8UcT3EqRHyq4",
  "key14": "5YQ34XBDZJuv8jJbdgowB61fggQ5XvtZVssNZMcmMBqTSpaqmvEKQmayVgLttJqauq8qwoMZvVecVA9qfiPU6SJ6",
  "key15": "5S1jP3hV5Toguqf3SRrpZ8JY9VMN9GDBw6EXdQbmrA5vERrtV8w1EBrGHNcYQYQc7wYSdwjdpyig4y4uBy3KNKFk",
  "key16": "9kSD4apGFgWZso65YBuD3q5i2QnVZ9d6UH5LoHZsGe4ZgPKeoZYKr9ssW4QDUhXwzcCLgcPCgXdMBEMZWHVgpwD",
  "key17": "Ncv8Zj9wiaH3vk196jeYJn2zDBt1cBoATprKkMMmV5qcPAUevZ8ePkU4nVRhFkUVZ5KkNDUJJPpfGw3e18S4RHC",
  "key18": "oCr9i5f5ecyMqMAp1tASzWQoth1yBQiuPvT3Y6dcFyrNQYzzWHqUNSi17wPke6mvsg74NAiZvSraSU4s4nrW6Uy",
  "key19": "4Ji91jcxpuJQt5nfnfniYBarHVUpz2cYFfpvmnziXUURkCswdei7Vf28EUrSXVUipNX1RnFPVoSzdSGFWhoGFhJR",
  "key20": "4sUXjBpjU2NKKG8BFCNa8ZJF638fynSSL3R4VDFZK8riJnEDGmpQ3F1NCcE8EnQBko2XxSGwsHLA7zitn6zDhBx2",
  "key21": "Dbep6zUa34VmMcY11HKFW3kXmwQsX8d5bXzp9xDGoXbgbgL1Eemw7vbhdJPqxWCNTuo6np3utrYSkkBwddruVCc",
  "key22": "3NgZwvRzebChtQBoWVQUdwxmYtbHin6ABmsdHkG3W94nz8iKQAoapLKZ5HJhU2mwUWxKh6CVwqH7ioZfrr2RKrbF",
  "key23": "kinWTk3PUAJDA5ctjKPuuKdsAShvTKHkB5fqHEZaRFUZh3TKDgjXx2CUZ4yE25FHmSmZCrD3Una1kCD4FLgRXxH",
  "key24": "5h8CfAdqhVdShiZwrHXJP74AhZTcVfS4au17XWduTMgxJbAho6AJpn5Bkc7oPufxADqZWcmYJgYk6P3GPAxoQ4rT",
  "key25": "5nrMULUKRzWvM1a9J76kimK4mywX3j3K7LhYHU2jdQRre53ntsCeaRfiS36z9E8GoJViGYiycEujv2oL1jNthvNX",
  "key26": "4hSCBAAdjUCfPnZmh42fQrz6BCqKqBafojA4kCsV2Gbq4pt2dgkqtL5Kn2dn5JHYrPNnpS3Fbj4QSonTgMbpCq2y",
  "key27": "4qW2Vnj7sh1bfTkS4gjre6WT944p7k63By835Lim4DWtTF3rchU6f7bxdZCa363SbxWJ3HaBwSbwzmN6bLUJCFvh",
  "key28": "5xRW1i9FJDaYT7kciwmmVSsS2ZhRVpF66bE8gYpDoBMcJ2G3ASY7EywQu3j8BgfY4V2DnazTJph3XSEPDPgCvsqi",
  "key29": "5A22oioqa8XtSWBms7kGtN7Gcc4ExtqcsfF2qmvPPymhXd9VXC7yaWuWzzfspxxKX5JrnR4ULrnSoXyDPtywQc1Y",
  "key30": "4GKmAdNVS6BDfEhUEnmGiLRqHtUV7kXQULGZKwcP7CqUbXhKkMXgRHgkaQmB4mGMpD9qv5P2nA1r78HVYeezh1HF"
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
