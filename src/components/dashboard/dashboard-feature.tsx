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
    "5dcmX23oYigAp1nkAHVbDJ8f4CdqNzNWPPcBz41KqDz2buGGosA67gNUuFmPDqhxMQp5fH3LvvCVCzoTeTQSgbBj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zfng2orRsnAJ4qRVmAfAXsxsjN7TZteV3z4e5S9vrvGFbw7RXzmfv9xyanU2YtxcNkkzBdxeHSKxcubvBDUE8Yz",
  "key1": "2cGJMYRTMnfSx6YWWXWFZ7hAjxqeQYdkXL3xRihTHjqU9dhdkJYK8mgqzdqY1Gwe7NBEMH6dUuj4AG6THf7FvC5t",
  "key2": "2zCCoTefegdHkHFX3x6EVEHjcUrUrEKnBwhZ3afSXFctA87hfw5KW1x6zHtMaaVv2udAD63U41z9oa8bGas3wur2",
  "key3": "zg36GcMyLxJMPfZFprkDT5t6RP82eZYnAKpdRGCBJDorj3NDxkYbxpWmguVszTMdP7LpRr7NJ9eGspTWzhGz9yZ",
  "key4": "ybBv4hjJmZ3wFnE9GkFMGg9KuFephSvue4xyUzfZezGJU5MdMtQEfFChRoY2aUmVdnrXSHQSmHpL7BRxoenoD7j",
  "key5": "KyquqkhovkjDSyYK9xek7chrJdZWEgzpYisMDJhNewU7qwU3NrD3pnvi7fRctFhQzV5VXAkHMZDGK1hGtWiVEea",
  "key6": "42cHsSuTFvb3qnv8rB3EEPzi1BtE5V2hxeyLxCVTkCKsRKzxPnHKcuKHQUqVVtiP9wQB6cd2mVS4dUPxZSQcZeks",
  "key7": "4YXuHxuJULKeUiWNXJ5GkWTmg79k2nwCGQrk9uUoNrqWRXFK8GMh3vUDieStY6x62QPiQX7gauCy3PXXftAY5CBK",
  "key8": "28sym8NoafMPb7GGx9mTHKwDxrbNz8Sv51FPU3qL1E9Boksna3KZqLwHSF3tc3ewPggiHBBL1WffhaYDaRuPEY8G",
  "key9": "3uE8TaPGMosKTWDojFKeC85s4QHmiQowtfZMWyV34htciZPTSw7PLfHP6dsqggqptkuFjJa9MqWaPfqdfuchrdbZ",
  "key10": "2kXZZHSf2bayrbJYXhqeiH2D7sy9vzH2GpjbHpznH6qZjf1fQqAPwShFjXs3GNdfhPkcu5kv2FnQ5xFzCjvjSjy1",
  "key11": "59BnDSoXMBDoDJNAY1UNA6mFm7JqfbPM5BebfMcr4LtbVj6jkcf7qMnVoDRquRpajnB3VNTpnz5dZQ5JmLiJoahK",
  "key12": "3RcBZfQRE2JHBmFjPtY7q3twxjQ6D7Fo7HnDm4fbeJ2sXLUQHeMt3RYM2z7tVMwG2sm5E1CWCh4vAekYVTTgGp1u",
  "key13": "43Uae7xJy4jktiwi96x4VvxGjdMrfwBkrRPeMXNg1ZnbHuywNvM5p1Yqr3gKQtW3GNguvjrGUTo1TbxPXrNsommn",
  "key14": "4NchZJ48JB9dFAWtvkTRJEtB1FaZvkBDy5xaCSrPsCxWtmwBXJfmQhKtEH4wNpHPnCxot2cRzEFDDjgBh1zGvJe8",
  "key15": "2vY92BP6j4DeGpL5esiAFzYokXeVoxbdz8bx5kxH7GpRbZkEbxbhUMXETTFGns3cxgtQ6ci7ubaopVwUxFwJGrAB",
  "key16": "52tz7KmBoYd8xEXmzcwG2iH4fTSkCrbF2cxwqDLFWf4ZSmn6PXtX9dZ7zGtc34v72jKBMijAdwyEFqQyNeUjMTUV",
  "key17": "4vd7NBfYkC7nPRbfSCb9pprKREzGVunU9Xpq9YtNw1XWYDLgYYNyAakE1F9Bt93q7Cj1rfQXUWccQss3GGuUfimx",
  "key18": "4PyswFd2VRm2iWTBf9GozQPRhUyf4y5CpDyL8u6a1T348ZVMW7oZ3p466XCmZKhVykKN5zvmD9f38zVDmWXpA1cN",
  "key19": "4mQTUaLgXAu4VYd1uBssPQGg4Vay5sb4PCugMUYhfTzzkyHEpBcgTvWyN5qwMz32gxEP9jAPprhAb1T6QUn2UfHt",
  "key20": "2qWxLFqWQ1xa4mZz41wUHYuBMRhminvuCroqGHSr54tdaEttjBqTtR85yLgTMT9mmooabfyzV4jhdQrxWoYTR1a4",
  "key21": "2E43MNxtiyABniRCWAHwrk66WiYXrDyVvqXzz6dgmf3Ptfq9r1MCUB7J5segHjNGWuC351opzeWg3KGxieaQp6ys",
  "key22": "5wtnfBMTK9hri7y1gYTp6drr4B9qxqv91pN2k6BugoGeNNCXgfd6DqBjoPnwsECLr3Tnz5Et9Mn2TQ2pptuGio7h",
  "key23": "3bHy61BuDN99CEnEfDQiKuMaeFS726beNrprAcYdFPmHpuefUbRDXTRhU1BCRDMt33k91sCF2e3w1ZEsPXu5q3dv",
  "key24": "4X6DNS19Xex2sYyq1qCZ8WZEx72BhicrBKUmB1YKdEC9pkVXVUgepX5om25vnyjC8quR8uj8mjvujXTcnQCYa8GV"
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
