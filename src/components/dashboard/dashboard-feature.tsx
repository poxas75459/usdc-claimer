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
    "2tbz5sN2HVcBYkxx9vtBWGS6kSzjSpeU4x6p3NKwZ9341dKn9dYbnX2PPzW11BttvUM5Rh6PPWu4rScaQ3SMBNkY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TWeBDH2ggv16TLVFVRGrtPW4tFGKVLvZs5ojhMBqHTzPdRfxJw8mbQBRX1WcM8oxc7vC4ddgeMxW6KbELLCBKXj",
  "key1": "HaReNQTyHQshbnmnS56WuV4pU7hEz9X7AdFT6hTQfoqjhyek5BBjNX397DeKpga57sk6NtcEdJzndNCMzQjX6eD",
  "key2": "Q2XJEo5QxUhCYuRFXbUmEd9Guo8vKNpUdNPSkGy7UAcvSpbp6MDVjA23CjqzvS9toKv5QvPBDQbS7pDwtZoiTZJ",
  "key3": "41MNpELmeqPmcHtSPcFHys4ta7U6hM9Hdpbt46A46NTEASD7hCyxobz98d4NicNqFNwYyy7oViJPSLm9eX4K7MsL",
  "key4": "5kWZLXop7cxsEAwLmkP3bigUheepFLTsAF9y6pD6H5d6GqjnSBpNPRcESDLfSgr1fSzuuuWPEQ5UEyDpHczeimSj",
  "key5": "2H4nWMFekCA3i8Xwyk18i2QmhtbcGJEDSHXV4qn295Nc4wBD7k7zBtQwsCoFmZZmMwpjiTcdihkgT9mXwdduMRc2",
  "key6": "3xR8JbBUSXNuNeV6kknCZfWLm5a1y1vU62Ajoe1iXjt8X1wX4Q7dzvvYfQhNX5D2pDu7cr2utNE4pTAxXdWG9dX3",
  "key7": "4uhdURjepvorU8ozRTQeeh6yVpKxPRfsgBxKoPiLXFjrMT97MjmViMcaZ96Xu4SjZK69ghA12P35qXMFSJyk1q7H",
  "key8": "4fgq1GbARS4kMsn2LdSzjY3WjwfDsamoQr7QBZQqs6NG6bg3JEEUpdvQ6gUYmc2CUWSmHKvdLuQ2cDHNHQwijTna",
  "key9": "2A6GUzp4zkP5eYFnwRe7PCBUeSEJPnH3HDNmTG6aLy3RDDFVhN4B9y2Np3KH8szWKU8V3Bb725w4GH8gTbZtEiVr",
  "key10": "4nb5QF2rVtqgdqwavZ75qzUjCGkGaRmuyPQnxmA6gGLuj2b3EcFYCWe1a268MyptUpP9qYWuXNmLK7opbVbwABbN",
  "key11": "2WHvzv1ZR84sD3UbkYgNRvoHofRVYwBijb83qhx1jFUkKn77FDWW4myZDW4DbZyxG4UPMJdK8CLBAE8o7kFxf7vr",
  "key12": "3KwdNmRCf9M7xqmatf1kQDQcaX7oQqqbWLPsiLFUioCeDuy62APFXmhUwiipSvyS4d3QPdmw12uQ2wScoxnscrr1",
  "key13": "3R5GkpBscndFrHiLzLEsWVdLioY7ZAFkd99LmcjJj4AqTAwmCKtAMpUpRkTpEknkXBwgzMJoKi4etij2LUqFGSGT",
  "key14": "3v95zSvR7595JLnPe46y9JeazEjTobfEmmwEbobQauAnL3nQJEpJYaSuKX8o25KiRwRtqeycb1uHiTqEKttcmUJk",
  "key15": "4rTZ9qyRwv3XKYubSjne4vsd4fCJgjb69jZaMJqsbz9Zn3TTaE8finFFCzg5C3P3urzeCotyC1NpKugDirB3iafx",
  "key16": "hwySnhNr5NS5zxEATUaHQyH46uLSLG6TLAwnvwRriSdVp4aA8b59BppocjifzTQHAKHyZRUjJwShxoBYWd1DEZF",
  "key17": "2xZxduRPEx5NMEZEJf8pHg75dkbyoV6uPV5eReuP5DSWnQ9Zm6z9LHPF3xLEiiML93QdXT1CoAZqg7jD9QTtiiHr",
  "key18": "5An2vPRtzZL9k7bufQaw5ugAo78hRrs2XgVRPDcnYwx2fjkw8hQYe28AukBPwBKfgnrWw6QJiddANZNStAwHguEv",
  "key19": "sbz3x55T1Uy41P5yu8Mc6jrMWjv7sjTXL1nEVCUkgQ5UA3jdkSdx8dtBWW2a2JUeHBVcTh2YBTpEZk3PrNNgxEr",
  "key20": "pxpNz6o9R5wSZrQwTysJfgpA6tCpr77QFbHzYX627prZnym9SXshmeV4t7tsXL2CZ9mNDTUGu9h6f7d6guWo87Z",
  "key21": "4qkLC3CS9twGKhBoiTL7MjNUwbg7zCtRbhKM9BF2S9WbgXziK4jLgSAkBsg81YkvH5fmD4ArDaTsPa6Jj4CFwBHN",
  "key22": "2YpoizTgU4oWpbkxeQc4m4vN76WKCNyEShD5mqYXqerDakfvVoCbMNfLXXTjUJWGVxwxdwWgKE4K4oegRbmSKkUv",
  "key23": "5K2dcpTjiyL3XfuAbyagWZ1awkgMKmDAB99FyapWBYyZpLkL3absmcPpeMBN9NuCCfAhDXpdEJQTHQLhtQ9Ch3bF",
  "key24": "275jyeBPARPTUjstBW9Rbo49MgvrHZTkPUYd2tKXRo8uSypZ4fdCpd9i67LRkL2u6Sry3gMBDsm3iG6PtNCghYG8",
  "key25": "4Qmcz4n6Rh9G6jcHweGZNzAPAyED79LPmc8jh7Yi9PQWkERxLYNs4xXEFKYF39MpPTDTy3FBFJHg2FwKPJ4EKE7r",
  "key26": "24PFPuj1HkREYszBp76Nn3Bz3pvJZeicCSvsDphouca3Z3D63vtMxs7r2FvAuz6AwpYgKBBEbZwoRTH8U8QUMDwY",
  "key27": "KiSsSLGnv2T2mypVLQnDS7GoUQTPoEvHqhB9ib7qFNcZ3uDha6VhG2hLoiXCQWQkipTmtsomqHDm2UL4vxjjeMK",
  "key28": "2nEgUHknL2dUDSqKrxhpMjERA1PfyqHqqZtVjdiDNRWfbQwtjfyDHyMyDHaV2NYwcQwVpDVq6T87J6QMEZECbJKG",
  "key29": "5EBYUCg3njR3iHTR3bE8LTPbEhwzasi7ZrGDupKrJDzPdSUi8n6zRrBgZedmyQuBbemkZjRu3MbKXRb28kK2yoom",
  "key30": "3WW9gqimQLA1TTHB7sf6aa3vSRLaJexYyCU7AAXfby99w7P3jCG94jR1SjLsBqnygT5Y1fNdJvdPy9eLMNDMAdk7",
  "key31": "3s5F39KP7JFGhYjJQhfeAviZdqTjYp4id8D1ktwRXqr7YRqkRNcjwN7P9TCwJzTGNiZvq7dWcrd4TNcq9m89sJYR",
  "key32": "Re9j2mkSwnPvc9Dd4jymEMGWeLr1Wq9SCqE3Zjp7cmhu6Q7qFez8PVyCutfSmULji4T9d5W5sootq2zzsATbN2B",
  "key33": "3ujBKnRRmbMkFnG5pgyYiG1cHhn2BCLeQtJb5vFWTfEq3crurpCyoZSa88i5ogEuLF39yR5ftLfak91mWPf6KqN5",
  "key34": "5mzv4Ce5gfVJvLZP4WHjogc1GP3FsTPDd9SYeoKzXFX7uRMFunyc4iymuzfGVZsTZhwNg3JjStExeMreirA7LXir",
  "key35": "2vUtkzKTrdKZnnJk1G1ThsbExjWA7q7Mt1yqaGLEkqyk6NDVo7CqXXSNKJboKYbokGg4PUsjgWWXgj64aT5QJj9e",
  "key36": "3B49TxFVn3CKYvziYxW6NAUF4PCMkZnRQkeQbUHLDs9KPkuAegD4A1Mc9f24MDWAkXU8xYrz1GrczRj6hszedfX6",
  "key37": "23o1VmSE8GMhTbYAknmkohbQxbHoFF6sedTwR6Skpr4qucx9tX4Aq32WB2mBAWzwCHhVwP4FvgVhdmdiku8m8diQ",
  "key38": "3AFy64nU4LKHTsgD8Dr7gU9xvVBxsoKS1V3BmpCCbJcUqsRcGxUosWoPsxtJh8TjZgb7NDC4zHY7nFd9gSpTuUTf",
  "key39": "4YPtuf6M2dfLNaEwLdFjMqX9ModVkSMfEqYEgbb9eVnfV6j4J6EyhL9QTYyaiTrqsmZVug5sgsXQBhx39wrnnY5g",
  "key40": "5v62ZHdUkp4kDuYJ3M2d6czi9yCPvEF1zs1S7oqej8Zoic7Ner4f37iqC23VGaGzDWqtHW3hfR6ATiHm4HUq3AxB",
  "key41": "4fQR3MBzCH4UuDmaechEjB7S3cftNGnESqtsxrF8rVTwc6ff1yqF4j3JVVxXYo4AptuwVUnGHke1YiSVkWho365K"
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
