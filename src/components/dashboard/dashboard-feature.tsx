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
    "2bmKYiGunRGgmPpTJRjMhsCTEP9uHaDPG46nWkF7qfe432EEicadwydwagy9UnogH6P3PsKWNgMfKPRdqU5mM4Sr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TgBAyWdTiaAvWWrv3LrS5th59xkUjPY9vMemc7qbheiHrvVYMzdTUfdyCjdWVBRfnbeuAsUEZj9PxuEP1VkaWmw",
  "key1": "2JBjEjcetEFrU7p9iK8Gkcz9ySCGdmB9SiE1FR8oxdfzgfhHB6VwmCBussqpvsKxTJHtPNDcjV7QXkxeaAEaCbAS",
  "key2": "5cbsWXiXPiL44UuAbsbiK2FHYuTWdzoL4dqq1u2jqpshPPvNQDqGytFgG9zcoDAJhy6QC2B5xvSV2jSPT9yCHZwe",
  "key3": "2yTTFpqK5vp5oVPoYrG7iF3BHZvTZ4xDvhfErnb2WXtgNUGX6AnwcbgTTh9Tr6qDRBcHRUKpW9xfhiBAwKYiBit9",
  "key4": "4qCKkh1P9eeJxD2peQcwpgGJTGfE7GmZZ2fH9akHMpCJFx56WsgivXwMPSG4PPK2GtLJVRNwbEQTtYXf3bqMVbzy",
  "key5": "5EF1EC9iy1jp2ERYcwigCuoUp6S26RCkBzt9T1CqiA4wMETWfp7PZxrzitruh7aKJo9656HdoX4vtiKQchmtEB2j",
  "key6": "AfRZShMtL2hF2jUmZ8y1sPB4bqB3m41y8qwr9k3XrwitCgxxo4Dn5kc2r3uxdmvyXmEu6LRD8ecuFZbaHQGBRYU",
  "key7": "3UESNyQu2xgAPuxDUm3u1Wry3P8AoRY8zeWjoMxdnTaQVrKQrt1jY3kYC1zNZZT82m5KBxGiNMwLZQwVisAAVe7W",
  "key8": "c7AiyB1EKgnpczpukPpmUiDkqPAAKvCsjp9JPmTuGQWH7uW3RT18wwDTAPT8aoh9JHxmcEPAV59hnCeQjSDWp8H",
  "key9": "35U6snq81yvjhcbtAogZR3ygc9mR1fHD5xK6vgY2cJFMvPnD4TTq4ZTfbXLzjerT4zmo8PYnJrn51y2FdG8QrKTh",
  "key10": "2jw3GY2TZxzBv3mgRtSdQ7jSY4Drg2dwHU1XnFCyV2NC9wvkwuduQ4RudHg3KXiH8K2rmYcd2PocWfRWPrWbbVBs",
  "key11": "g42WQ5qaRJ47VgmsRVex2SYwoXvo2UpoVkA6RvfjBy7HYZ3cmEDSLRrFCpXSaDF4LqeGiQ78DCqCo2ig83imNyM",
  "key12": "3HTahE7ap6aN7f6NPss59ZPveEaMq5EAQvMc8uHnYNTy1MsFfz7kLdDRjEuWMPxZcaQNbQZXYDg1v18YfwPXzBNe",
  "key13": "5Vb7CijCJu6j2VTJo4VXCJ9iKqFmJCmpU7b8stkDednPTXJFhUTUe32mQJ1WK85ZqmAA8tDPQgvZ8Cx1X3hSSSp9",
  "key14": "3GDTn7YnuTfZx1wFvnyaMnYDchtYvLL6qVDXeRm7GLhXJuyGSHs4e2g5XyM7KTpMiSShMFdVqQWVY2eZMUXHfQBR",
  "key15": "3evF4TXfivobfg9dBGPzj4bRTTj26Ur5AfLdo1wjeXzpxY4gviUhLUxk8WEabqJxjb4A3XAqiGEx38WXJrMqDVHX",
  "key16": "2N6DaEXUnvjmoENQfKjpBfuqNNy2TKdTYkrCYQvemTTzHC6rfD2KUGuEc3Rj9ebkeL2Bri51eWiE1PZduj9A7nGi",
  "key17": "3BL6HqPuJmXYJuZ1m8gaBPqQTh4CHnUKpjFwNc4iswMKfg7PP695xMDnvJT9s9kQNfbmmDvpkz8vHf6SpEmR2ffp",
  "key18": "2GdqZuZHJEV7M22in9KbGoVmsgP741iWWGx4S9irw9d7SjJxLrUzRcARj5ZKiwLGUaz5aBi6aMdqDGgm3LRfm1ZP",
  "key19": "3B8SpWstFrckNowvp1QGUpWD5TpevABQ4u2gnrqwrBqF9KX1T8Qt8yXYvTWJiBQeDTEKz88i1D1RjzasCRYDd2FH",
  "key20": "2aVVSGasRR41cBBUhe8dBRRQXVM8MPzR1MYHSXb1PifcA4m41QvmNBoetSoq3yEN3pXr94n2aKsfYEScSJpeckKY",
  "key21": "ZJuNnDHZW5iqC6hiW5Jd1pscByS7dMgU3mNLTRBgufmqFya6DS6kUxEXLsELXpRcKoEoDJXcvMg81yZoE3BmzTR",
  "key22": "mdvFPDQw3GDvGt6GHGmYEisUd9CyMguoGuKdAFrwFMMANkiy13beD2zyGA6aMyBw6NvRYCxVpD4UtoPVCbSybCe",
  "key23": "2hW7njqXCc7mjDewKArFS5YJGFkXZpRYBHVr36dFzzepFUMDzS7dBfoidTA7DvKuNDGefDbVhUkMmLWuKpfC3Zz3",
  "key24": "3tBGT1CsWuC1TkKUdEYLoYE1WSCv9y278ZJWQaiM9GVHpcbMyQG2r8XfdGqWXixB4qSeboN17JaJcAv4UMNca33j",
  "key25": "oTNoYunWkP2VAvU921DnnbDWUow1q2i7cBY7sQhEeDf5gkmR4wu4SMwCWwL1qDFRBdc7y3DxDM5WNyVdWdkPTtd",
  "key26": "2Fd3ScUEUUJdRRjUzAVxSiZwCyTfLX3pNpLcVNDwxaxDBnS9Xd5s4N2oWuNAovsDrv2gW97HTbXuGicmqCQwpLty",
  "key27": "5H6HDWeut2kZrJ5i2vL5o3UM9ur8oftkyUG5i4qpbjtY9uMggp5R1dwVeJ1ZbQiVQ3qcYeZZ3rczaQgZh2V9JD6Z",
  "key28": "63iXDUoKKDNnGeCCaFgVe39aJhSMFRnkgyrpeMrv8mooBehTWwz5zLrh9xSiF5GKFE7XN6HQFchuuS4wEmKaYRLG",
  "key29": "4H8eXRn3tohAo12Zzs3bGiZ5rBht3LbakxJzRTbpC5pXSus4oQakPZTfsAY3EWegzNKpc3U6JFPKgrbfPPYCLUmP",
  "key30": "2WHs8xtqTN55sPnXLPK38q6y1FXcMVCzSJ7wnQv9Dd36nMZyXyJ32M5hH443crJ4s5M4mAFkZwFwBe5SPQuz2ZMB",
  "key31": "539338S3GWRpAeH6WwniHA9jEjwoRbQvUbZPfnCv7jH23jzY1wv2mevEJPZFRrBtMTzaBr1usbjY4jBo5MDj5si9",
  "key32": "2viviw1rUtJr4voyvminfyvYNziJfYq8SKhabt3iuVGtG2x8x5FNxP8hPJzXtYqhpVwUZVoxLQrY9ncWDgsaJzrA",
  "key33": "5T7s6T8vSHtygpeksd8o1sjEt2fR1cXWSRGQp1RcZxU5PTfS18YL4oSU1nk2FTBgwVit3M2RDNPY6DzSBt7vmvCZ",
  "key34": "2w2dNgsJBbz8VeujjK4q9HSHSedpavzUg1Aeg3jbG8cU2mWuiA9Ecr9yCyosCRvNj62NAp9wzxooobYGRqxpErNP"
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
