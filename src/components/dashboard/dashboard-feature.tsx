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
    "Au4oDQXepYf4u2Hw3QbyjgDD2AXSn5Dk259preoKVd7xuRkobd3vSggyRRG61aL7uUmFJWJjBUADWeAy6YBmEua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2424sunhhwYC697YZ1yXUDkMxQSWJTR7iReqVwyefDZW6rncx8D7PzxUNGPLKqoqpiaXV4VZdxQHpAnVHZzPyXP4",
  "key1": "3z7fcy764gWhkc3SF185dhwDC2pa69dE5sriVwDMFwttXz2zrofXdftFQfkMud5aB5P8HpyesJKrRoyNy5Z3yxmq",
  "key2": "RMZs4sAPduuqQJrAdtP9t7vTD3xPozMUYqLL7hb6RGqkn7T6mYyUhRbepwdFewd5GAVT6bZ4Bmjk3WwCuSZKgUM",
  "key3": "3FjTAqxaUhyZN3UjeKLiiUZcndZhF1RVjjRbmbmqRehKWLXwyDXXmju3wzy8Ae9ErwVbXg8u2mVr2AXZgUJ3cZt2",
  "key4": "J4YRkAhNi4RdZeHHY1CEnsSJ4E5dSCxehKUS8BtpEdBMHRDGhLraQLMpcn7A83dSs9B1X6fg5hsiKkUvxjjiWvp",
  "key5": "3Ew9xYZqqHpF7YuxJXwe8eH7D8XwgghrKN6qv3b9xeKJcKSQBsr15b7ocHc3GdjELpNdRKdnw3Ezu1LofyEbCNNJ",
  "key6": "2tpU8nYAEVPf8Qz7NrGh499HEdmKApckhnT2xzKJTVaUhwS94RboBSW6jyJX6ediB2tmasgg9EE4Bx6DpV1vez2Y",
  "key7": "2Ev7ydeo6YRfHuir9ukcWcZzUGvrPvk5xNXZEdFZnsvSYuCWhTMBhA6mJhkQm5RV23biLsjK1yAPrmpWvZdkfKdR",
  "key8": "3UGU8ybMDjnx893jZVKiZ6U42qEduS3wwMA7eL69qGhcEqVCdNKm2kdSg3wBusoUR616vie3PKrFafYmG1S3AdQ4",
  "key9": "2LAfKDqLuHbEFySfrspBNDdMp5hQ8mjZP62jNF7CZR37Topo4RLw5eL2NHU41PzHYXApZ9BxxnkMzTXnqxjFhx2P",
  "key10": "2c8pt5ZUBrS5ugpXxg8quBcUz5EKXKEoPidMe1wsa9QcnHVk7JWBs6izR8cfsLtXW8dQhMNwcF73WJH7KuFnAw1K",
  "key11": "62wv82wFDgFsKTBpcvVxtbjeBCCpNqMfGURTj9z2FjYTC71vwWAP7USfVbxNdthapuLXNSdhSze4THmm3nRJfVMe",
  "key12": "5sMQunHxWmHpLemyjePok8NYL7UHtFZ6C8rqi8emFSv2JVh4bcfoZHz3NrfaqgpBbkB2qkSLS3ttJhPN5o73WQyt",
  "key13": "AU7DQrnKLtLSC5gk2vGVuVoyoeQQEGVf82g3A26BzcndLEGZP51fe9ZP47DcAfpkNJgqq9YaYz4ouZrzFQEjs3A",
  "key14": "3DFW9pXcxTfinXAL3we6ejQb7TTsMHqu7ae9uxa5kAC2sZzzXfjUzim2RmFm4YAjDLzpTZuT9Fro6rdHbCG1dKVt",
  "key15": "549MCjniaGMKnRTWoktutKfV3ugYgyLqdLbAAwWhRFSSxp2p3mmWyCG5ymQb7p7q2DfQRAiGAMLWvTKqbYRhcrLY",
  "key16": "hvDteLgnHnfAvfrPD4ZYR3SQbzDPR1bVBaQ81AB5vo9Ddgc91MjJzijPztoCDTxcGgbEy18azWU8dPrugSMywQU",
  "key17": "5jVNbe7LzSfcfGHw1B3FSPVsAYSiRr3paSswxJ7wP82ap8A3dt4LtswHW6b9c37DRzGXjBydjR4GxoPGyRs4vtVF",
  "key18": "3NZs7WNf5XcwZf7YkXqBZduTPCfjMNxRDE8NLPKyZKz8WtD8NoeTWRUeEvSS4EWspLNnz8mYQyibKfyQ3W8VxKL2",
  "key19": "4RxaW2gpvdiympX23DhHtJAUWCbskZTWL3vgJ1G3Z1banK1ph717iG8NHeowBMDv7K2b4J4CEWBdqrxYYkSyzvcG",
  "key20": "TCMzDUjgCsayyDBEagNuBfUU1HKkceBRtZxpDfYdDMCMFtaxi6tof8RSvGVixv6kzcy37Teswd4ujACXCBYgjD7",
  "key21": "1LqPTu8nUuGzoLNnTdndN1GqS4qkF4DGMCDZT6iLN1vyqyXVgJDdw35gpER816H4aRKCGigJktQRyTh1SBBT8rk",
  "key22": "3iX35H4YzzMM9yV1aBaVHbESbGsXg27GCuPFsXgp9dvub7mcr2tY4ydDdk8ZWqsDPJ7tzH1ww8vFyyS5NcyM6cSY",
  "key23": "5B41xXD9VryYUsc9Hq575ide9zuxMnN3da8rX3Y1dx6kZjNonzTxQAUwJDwvB9Y7rBRVvyPXWUztfqUW7ahfnq7N",
  "key24": "33W99QC7FgGAJbbG5HMQ9LXj4wxExhejhBnd2Lqu9cAk6BPaYiT6UbKWwHAzNhc8onkNmDDGtC9Pyh8sEkreuEVi",
  "key25": "2eP3p3L28yEYyoEuL7qbZZ9fpGZvRQyVB8FF67UUNbQHe9XjQ7U9Ydyr2Nz9xykkzUhnGD6xZLX7D3yUYvDKeFEE",
  "key26": "3BmD8hyHCTbxssvtJHMS6W6RwsgCmWfgzegg5GXcQyyXhb1j8vA512wdPEcB1yUYCv2hzxuEVJR5T4UC9yi7xP3R",
  "key27": "5nGZasoSTDcfxCrpke8BEMZWTdzhUj9zNTGmmTU66NAHbYyYCPcd79YBU84gARRZ8aTGpbgsFYKeVnfUZMc29kpo",
  "key28": "5fKUqQpv64GkD4ij9rnWoEiVJwbBYLCdqwaFN2VLsKuMYqrXt6dLyMtisPpGJZCpDU3dSWhSBDGJzAgocHJFkg8g",
  "key29": "23TJTcS5Xx5G3ddNsippM792NPNTfC2F1SaG1WooW9KesCXJv6Fad9VtPkTM4hFyWxfhnmfTfwr4KrJVGSPeFZkQ",
  "key30": "9A9HqwDQD6fhmR7bH4U4fkkaR7mkJJ8gVX8Lyoh9M1hGAepoijBxTc4y59DUrRNoC7d2QcfJM1jrFjUJULgrNHw",
  "key31": "5oMg6m7Shyb39zxYatvmKQ5xhiPxgS6hYf1Shvreji2ASUqY6CSBpaHek9aX1SqGFdukjuopG1xQAMkomzBLebPy",
  "key32": "5veCg2kdyeKQF9Jm1QE1XPvnPu2YtEVTFYtaUGF3AsK6NDe8jEbHe3bQVK4dChBNQie3cpR2WWHcTNUgnZhVffog",
  "key33": "4Kyi319QHmZHexYnBgP2aNxFEugr3ugd2LhGX6nExZrqFwgmHELrvRqV2kY43NpfSz1ZLwedDx7ms6Xqof45VaHp",
  "key34": "5xXgzBtasba6V69VYVkB8rhdcFNb8Ya6wT48hSx9WPYYqTqreQaVrnF2XxEgTYZ15hBZ3SWjHbpbA1zngTBmMxPH",
  "key35": "4mpffMKcurcaEc3cAvznU4PqkSTDQ5vkJ5PPuczpZJ56BKDxyFGEQchrymFLdMtfjSLuVU5ij1A8FNHRkcmTANqr",
  "key36": "29suZcAakfEfa6cGTs8VFpZcKVURSfAhM4GPiDTMhLXx3wVugBqwjFRbnoFqkjBqHiSmPw7sa4K6qAf5zvX2RRv2"
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
