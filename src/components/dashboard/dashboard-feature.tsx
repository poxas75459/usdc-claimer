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
    "4ycWzcphDNXSMnVJfnmUc3MSjL763xQcR1SYScHwjrRtiSYQ5gBDUYsCCPMXVZcPwmi4dZRGN1btQnhvD2UZ1oSi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eJCqtwDdeXkRjd9ZesHc8NFzGMfXe6jx79NjnYpZNB6WVcihtRZU73EAboboPCJXrwb4TFvFnDngHyEb2U9aR9C",
  "key1": "3mLDwP71mKQaWaD4Rz2iDsQHNdZ33vbum24wDv4xqLoXxkX1fjfqdvdfzJzWNkpLntaGZy261wzJLtu5BC7BXRW3",
  "key2": "5Qpcuxq8th95hLhxTz7x3ZdTSieYBwNX4zjbeNFPKomPAD8pGoW82hsHdCQ3tASu7q3hWx1NDbD16SB5XJD9EWNj",
  "key3": "5aLJUUZtBHqH5KJDUPHW9AwTSEMUEkiwUu3cGVQKfxswBVBtZ23RA9vVmaCZcDbjfxUrSN164uDvAo8PXkLLBfTQ",
  "key4": "2rBwwLRCCEJNyEY9k6MRz1fd67vALY8iNXiDd8Ci9xf77yu3DQj87tEVr42zZhZoJzWh616qfLeGNbozqFipBEv9",
  "key5": "K33C8PNtzFptbbrEyDXa1E3bqPha4dQ2H7wQZci9qu9cvPiXKfc6yVsFoxF2eo8UPDGrun79ecSkY39Rmb8gSpu",
  "key6": "4YS4yc9dMj9E9aYe8B4qpR8TBE4pVxVt9kmLAeJuR8sJLL82J7xrTpp9zVajTAbnzH6bFJzwhy2h4p9HypRrCnGm",
  "key7": "4Audk9cEUU4McTmEpAjbaDuvkDBfeLiSiPY2yzkp2ZKNDEqWxdtdYywbEFg3bBLpZe1vjtvgcexgTtjUmsngJWCf",
  "key8": "4r9D3skHtWnxv4BXXQ5kSi5EZaTV72KgxfrbGRCZukuF5yfCyx4e6ATgXjC4d21JoZcrxBgLoKRSrqwwr77xvSGS",
  "key9": "4K899a921rNa7bC7DL4xbxDtGwsBoChifxJUWRWE4fa9u6xQCSifcYR6XPpfDCgtZQ9EoDEqZGCqG3eQ3AxM9oEJ",
  "key10": "3HERyvJ7SzjtUpPnyuqNV5wCxqDPThxXt8ZcPJKKh5mvMgcLgiCSsct4VUMZEbuy4qd5SLWgny1iV7LL8xmbtLpS",
  "key11": "3ReBEnYKFCKVymiCBTGRNvagKN2H9feYjH1V8638btAWNrHpvGcjR1tLttnSm8tt8xznNzz6fNMy3xZzVhWwNHWP",
  "key12": "BGF2Mf1bz4UfmYx4i1n4LzNaT58sK5gyAtHK2omixfnhzCXa1D9RKh9dA91FT88zL98aiA9bzf7tGfGUf4mbCfb",
  "key13": "WKiEean7Czx7UQiXtHWzB4bjNsuQrY13pGNHW9p3Dr8vCVUV2i4Amsoas31sHfMjmnPQauHuFrYThST8KoME5r7",
  "key14": "4Yam5eiR9QsAyLTR2k12bzcHjATTNvKt4pGJa89yVzgyEdGz8rftpSvY6JksGhxNwoEbC1S2AMkrcUmCM5yow4A3",
  "key15": "4KtPXFvGheaFq6FNWWTu1LbWjKLDwqCJC9P5C3LfT6YiXLNbaZHHKnHZ1qFuagS4Qs3VrS9tiT5S2ofD8yGTUJBz",
  "key16": "3jZ3z6wWKTbzgm9a382thkK9SUur8nB2e4LSDA9o8BHjWRWDbkP797Xajf8xgEwfSvacLmvkASiSFhoY9pyGUGbg",
  "key17": "3pLCtC5p25knR9QDRHVkzYsEhiZFmgHKvuxXfv6g29b6mZZfRoALDTFcqcz9YM9xJFnVJiTs1dMjvLiT4XmJmL2",
  "key18": "MCPqnku2ZG6Ry8MQ9doGjSrNcLdxmVBGWbfkz5Y8byaWy5i9zqQgcPgW8MZ2X2HTXKUjoqPHW6bgAp8gL1GhC5M",
  "key19": "2VoGi2SRoy2SNdzpZ8pwDss1Rog2huT5MN6rQT6CrrLJ4fPxuPcVCAh2A2q97i1PacogAiBbVpyWEp8XW6UxAQ4y",
  "key20": "37nsTcjBbR8NmsWNPcpCM8i8rt8SdSbxXeNez89VHCh34bUAjfWoUmrpSqRrVHiBFohbB5iYtFcCtvGPQeqSkWbX",
  "key21": "aXjV2YwKguJV8CdrD1p72e6f8x3CUwTQzuzf32WftLJhPSiNVdKy26SFuhVhp1CgZpFoMpo7prMSSeKNxYbRbfL",
  "key22": "4vNgxckNXxzsC16y7QoM6QUgwHJDBsAX2jLHTze7gWyXxWFFPj62tUxciBupR8knFimZrouVAcgNDqQJtT2Wr4LU",
  "key23": "4q59puBZVtcHTv5Y9LwvJGkK1Ne97A8jDArDTJNQfxmgDhgxpnoSW9nAVcBGjRMPQY4BsL7d5bPDW19GEoxEDUXJ",
  "key24": "2aeyza9ghhTxGk8kchyXCg5ggX6F3BANvBhWBKt6HgUVtow88yvFqo685yUBNEHTsmaXBjahAKcBDquGjzPJ5Szt",
  "key25": "4GyCT6xYCCLhguNJ7ferBTKkRerzAe3ZqxYGacuxHZjQnsvbkhzQeFq1eBsvBisP1tqkWMqVk6CfXTqrzALKQzn8",
  "key26": "3xkYHBJFmPDaJbBe4QFaeqK8aKwiLXy7ydToMKhjfJCDMWdEoymaUgWAbfFPAgAM4TVmRSydxUAo4jodUfzWHUd3",
  "key27": "2kemyorJtXpJbRUQsqEuQdKf5g2zamL3prsEt9HUMRm8hkSDBwTu3AYJFDHo5Bfq6yXfTxkqz57iH2SYWRaPf9Ci",
  "key28": "28vL8rjniCiQfGXvjNWJVk8VtnRJSapaMvnFDq1a8hUjAgWH6Js8riUiJAKTnz6MU7pfzkcFQooVgjUBbPjEw5XA",
  "key29": "6xnXwHLE2Z1UY3qsBK3GrxvcrsbXCCCeMVhgBRfzgajDTadzJEPpWWvbKUgiHg4CiKAk4qHvfSUpXcViGUL7Znm",
  "key30": "5vdS4vbbUu7HjwMn1RPJtnmgJEAgdgtVYheoJjgpN5kd5cb6C7bLDKV4MkaiMhn6dYvNqGkF8pjpvpkToU74jZgn",
  "key31": "fu7W2cxkbhgMcoMYvhjxhN2uRgvzbPox8bmGYN6nQfsnPpwPhT9713JQLPR3RrPHvWWyYnqHggR8aVmritLiMJr",
  "key32": "3eycEMADu12ZpG9Bwuk6KNYkbjAEhxccqPs1DhnxfDwtkCFk6iRtic5eG5N1hKdc92aSv6CB4qL5TAmKmdvVEXkB",
  "key33": "3v2xM8XF5QKaHqVrPbg8JXhnyGmpwPrHJBSuStCihPGLm4uq2XEBA3ipLECe2Mk4ojc93pwuco9NSWCpYhQEbtrX",
  "key34": "4YbkdwJEsu97J7fv6n2UmdY5AXG8uTNcRoetp4Wy5tNy2W9Cs6kCmnCM3tPguGDxkioS91eX6Y2azNNCCnsbU1uZ",
  "key35": "35sWkpw7ZN4DPXsit6pohVDfNC6G868dKoibGPW8kU9hWyNQVNFLRQKqpEERksbAxNh2J9rc2WKnVMnvtCnzHKZ8",
  "key36": "5rTePxAykXMyuWo3SdLXSBbCqERj8xSJrN5JQCsT51aFLkaVYNLhS7btWYKhpyQjLSWsspSzhPWLWQR7V4TFwkKr",
  "key37": "2orNRK8AqzU3wotdcjjczjjAz9EJQ2ivqzvSGLNuHL4UNS5Mnk6ALTQX6de9vU6sfUvhjuEznPB36zpguJQLBXxo"
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
