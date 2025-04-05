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
    "5YmacnJ8ZMUAsPfrWQ8NqwCXFEbeKqPCruS4LiZDVZXrwbAqTXqJvzmvxsenH5LLpHkn4TwVCNV7sKmSW6jxZAyw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T8G4W1UgQa6N7wXmDfR39RHB91kRtvYGFnLw19MA5bB1ug4aMymD7FzkNHGwgBhEB6VKQJpfAa71XKe6tagZCVS",
  "key1": "2W7rTLvrFPUs4dZtYhvvAjRc5yCsfcdbSXTWc9t2aYvzVTCch1rshLf3kJbq3fpv7nMogejtBaJ5ikkp7z1QsGC6",
  "key2": "2cVFvDiugZQQjzWsJfDwc6YvvGToYw4SWES9vBPP4pZKWpxr7hVogn9hnfZyt9mZvbjEfrrDXNofaJae1xHKCKXv",
  "key3": "5TzepeT86va4RYXJaDWQ77yGUaaZysjSSvGiYGofGyddJQ9vZs7TTminRPdLXxfSJT91LNSKtiP53Psrsyb9kVca",
  "key4": "3ycr5xwjuCBcSzYvHD3PwkVgbxgttoAQZHmJecw52R5U1JRweswhGMSKh4Dwh2aHNeSFz1NnMxCBhwpXnMhKAfhk",
  "key5": "5rsSExRS4toxgXW9GRJXxzPQn5dFWvJMXHrSpUeymPWBDVs6PDn4JLYNqyNBCQJZ5qgEeDzKVHuwFUYP46sjFzVN",
  "key6": "5QRgmxLgyMiqotViv52qnTR6z1hh2751Tm36bHNkY7kip1QYcVPbdoCZaCeSuEHwhNyRMsi9LuHudtCwpiHZ9Mbs",
  "key7": "2nbMQp7EC2sJmeR9ECa59Xom49PJE7RvX7F3Dt1WTq3dzBU5dL5uMNWWrrwze2onHvFdzhjvZMyhCDQjPkg5jfrd",
  "key8": "54jig3abdL1QgkuRsGHQeL3CCAjd4A9fMPovueGa5vSpjwpbv7QFZRRvdxw9N61YBQ1Keu142rBnurbZMQf43oAZ",
  "key9": "mbhygpFswrUknYw7dc9LXbNf3KyorPf5RDLXxmqzT73fKZtShezsZy1P4JEFyC4qg1X7Jt61Wfs9JMSJftWnNER",
  "key10": "5uyKnjy2rDXEYdVkmauLe8gr8qvjoziWmoo63xCMQDt8Qwatx8XBNTknSPaH9bewt7yWGECQFtcxtXifzRWguKtW",
  "key11": "5Kvgz8CujdQejZQL5DQykqUh3jhJLXhfdovX27BPVtdxBN4MBCd9RiHXR5ueKTiMvotR4t1XGfRaB69sUFEWK5hR",
  "key12": "tVsrBeshbWPA5H5wDqWZ5Czn8KLymNnovV1kNvPPZGjEBWKMwXnwd295dnR6dMe63SaCnUNkU1UeMw7GJdhk1vw",
  "key13": "3cwQrqrY2utRa33tzreG1PqjJx5mpsd6CDsPGWLr8d2mekpf1ev7opGuWtYZWRe3Zb3JkcAXsGn5EHhNokHwvhvX",
  "key14": "4ga9pMN1Tet5MPzCyUCp4gsD2RAxnQp5iWwzoVjvLsoFvtgpXVraoWvQUNborvVyg63e1Z7XYUxwWieJ7E8FjdEH",
  "key15": "34oZw9GwPmaSBXwbkDH4LQqDtcYVUsShYkhwBNWCUxdmgqwXt2855z8E3USWHqDnGwWDzx1DfLRUHtgmQeTMDCH4",
  "key16": "4jn6Nv2oEU55gTRH55LfQjAyXMnu93VLxtzypVZ4uYDSmqh3YjszPYVFX75bDsFRF4pcXvkzmDeqmfLQXX7vuk55",
  "key17": "2cw9gKd9orr5d8CW8tunj5uqTYRSQc9QnSoLJ4bqf1fTMLaPM2R2tAXEaiXsc611uVNz6uJCyC5wu6wvmcTeBchT",
  "key18": "4sLbANX9sjKURFd5rVCtGJ6i3NSGAB4AR4wX5cC8XMQCZUozjv9MdgUetLexnZoqfRAZLKiVikDPyx5ptfVGuPcs",
  "key19": "3SgtXtPtPW1vigWJtNHNHJJLUhwFqDWpSSQGSBzvxMULVvtUsT7Q2A9RTdSqZbdFjkWCzT8K3kEbvzy24MtnPEsi",
  "key20": "3eepLqN6oPBGMF93D3EUKzZigBtxBxuqb4qK55GPLxo8Y3KHJBew9gwQ3hmsdkUZyYE8khiXQuQP4j7ycCFb9sju",
  "key21": "3t7QQdtctYEKTNGwcqvHZe4wbLDcEZMCaodsz5w5iVVs2N4ifoBNk2S295zXHrnY5GKV4ixZCzdcgiFmPtaD5sc9",
  "key22": "8VcczFY4TUJe29T9vpqzZoqS2ukKPTFvokGTYPp8UkBzm728BEF5hN67EEGYpxp7QhGR2Q7odcDt7JqsETnXfRa",
  "key23": "45zQQv5arkjs7nYbqNmDzpNrPiimTvRXg8P1ksVWLMo8ob3TSh3qeH4A3EmRV9TX3hwFzjEQXxNERMCM6ZDq1oX3",
  "key24": "38tW9RSgiKqy4WosyyK4UnQJ4qLT1dYTm7NnEM3kWHrBAaPfDTY8thfyxYfHJJxo1rV1hR1dczkqsitUNVN9vNKp",
  "key25": "4MacVjeFf29nVrFrH3s1U1FZfgPxJNHzuorsVFXD8T6kgteMwXJmqqML4GY7UVJDTWayTFs2UwXwGr64eBHChquJ",
  "key26": "Q4dn2vbyUwPhg5F7MZZ8g6jqvdFVfgPgJtuXD6rTq4RQe1T3dLCsw8hz7aqvkUPBspBHS1drp3XHNDMneRUuTas",
  "key27": "4JMZguz4aTRzgfnhYTCmPQprfQn6KhcYcTGX5iFrwa2PJTLzZwtzJCpvZBornTcUxgoRZPn8sWvntWz2NfyhUaMz",
  "key28": "5Mrqp2QKe8PSNkmHqtFwbK4xdazSRwNKVwxbQdKpHRYaeW2j1qY76sb2934LsEsKHGUUiyLRPQCdAXiADLQS2eij",
  "key29": "3wKZcB3cX6mv3cQdmCAvUG7dcgaG1FYfXuVyGBpTHCcTzWDgRF8nDDzJRtyxkE29HwCWoPG3kTyaK5RYir1NwC2a",
  "key30": "47z52x3HwevysPX9hG5FdULsdjwz8fbPr4vxKZEDVLGWuKZ6zw1hR9HUohqG6UzYEU4KpH4woztMzTC1dJdo8zRa",
  "key31": "4kpp29a5rwv5ui4tY6yFYgzASLMjVncLy1YFYUga7PBeLosdR6GZnxVKbtnumE4AjNuAz79p86p12Cm3q9YVq8oU",
  "key32": "3Vb2bM9Huz9b3i6zxf1fWjbffuXMrXHfydUN8FZDN7gpbC5eHy2XeEni7naekFKerAXTGhR42Dm6ff9n9Cc7FXhv",
  "key33": "2psvo2SnnNntwxJcPx9JtZCRq6CT2fPiLp3yfrUvnnYp7BbL4dUASfcG98c3RanpH5mysRZJdFJUNpj7KLCnD6Mt",
  "key34": "p4pjrNYmcEYDgb9EFxs7WDRkbv5SBDNH6tYmzmj3fZWfRsmBByDUctkDUyjs8aXrEvTM86y8xve5RRcACtxnqCd"
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
