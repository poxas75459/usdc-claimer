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
    "5CdVTb65suk78P9xAHZo3tdqGzha45SSEfEtfGS2r7FzemxeERHdeK6oWy1tsmQu7qPa8e2yh9cNvyDsmPkeAXun"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oAG8e1MhrWUVmkPNtoj7SYrKcDRR3tUaGSrLwA9DoGZujcGVkC81roRi1krW3SX93FfBR3WSetsejVRH6GBWu2Q",
  "key1": "BxVpACNVQ2ChiZWsiSMyKE1dE7UN9TYAqj2QsSN3jcDGUBeyhmZb12W6gxxrW6ahRNPRwgLbJQ6mHVFmojTCtwW",
  "key2": "9gcwRjkfyVNQvyo5KaXZTTUNejnTivCUF1BHwrLpPhM46SngCwwTAJRSupLme7Ssw4WM3MkigRMREbDSYQA95zG",
  "key3": "5HBtvG5V61rxr5Y7uTcRm1SVBSh5PxDuiy4mLDazQcb2szS1WZJghNxwSb8uJGT3jY5P2KBZ1tVtT8LjSPEbCDSV",
  "key4": "3P42WS1Co1biEie9rPrFgQntrEPUxZqP1xHL1zhzrMA6ibKx3RqrWZnkxqbDZYhuyqSVYtgCMBJ1bi8XLtHUVhjt",
  "key5": "25LarRXZYrF4nK8hwZH1fwETcqm18Ya3JPEAt5p29Tm1uLZBcPN5GXMHaT7ESuQk6mtZqfn7uLCELwGkbLcsqtSj",
  "key6": "3DUPuULb48S1gttgJQF22qFucnm3KghtuPZMAPh5DqLrDqw5eq43vXD6TgkPy4P9NbTeGQEGGKr1qLABrpqTuhZt",
  "key7": "3CcUF7PPieZpxJnYjkFgVL7NvjWytrrAjWb2NV4WViHe66ZgLVQptfsAR46v7jYU6x2qAhWvYxWb2JPVPfRFXYyr",
  "key8": "2D21JfAkoPm6sLKe5P1zzNWEmFtrFVkgmedLRFj7CgH3hCBtfab5MfGbQMfJNC9nConFHwXXym82sFYEpXV7X4gQ",
  "key9": "4RDpKuU7cbCABGVhtHd7xAN7FBDxEuYnTxE7gdSTpuS8hVYRoz5aJuWpLf8BfeRUbAJw6kJRL6HZJrLHm4Hwbw95",
  "key10": "4pMkUCzLxomCGTcpEkmzFvvGbGaGBwMgu6DvjuZkEacjg98AzfY4JiomocNVoe7gaiwUnb7K6Vyzfv6fEP7MA3jt",
  "key11": "5vxo8JX96M1o34efwgCxyMsq8jF87Ly2uoFYtEcS7fCUy3xmXJemFkH19xoapvx7tXLZyVTDM9HxwzHn2G393kCT",
  "key12": "4Vtiygi6mU6PnXg7T3c8o7NV3DB6F1YDWMqvqVSYoS6sdY1VSAafrFqELUwGVG77L11H849yCGhnT9dqa4GcKXLf",
  "key13": "3sAUm2iY3bh95snrGEfpyxo5vh7gRzwL7wn12b3pS5JdkLu2stMLf96iTTRvEVv8agmvfNz1UoPgTeauW2kbMouh",
  "key14": "5JQSUYpLWkxHNtxAg2GidwPoaSFbGLegMWQdFusKwQuTCmn9nzrpdtnV45Jcbdf33EhK9XY4JHCLUdweHMHa5kvX",
  "key15": "54KRS87Zd6BEsCpexZHTbghtYjCbFrTpKMxBmuy9xoKPLbu8J3DMi9ntPZDyUtaU6nag9i9aqcrbtcVd2RprhM2m",
  "key16": "3BWrRofQQv3Hf16Rwc1c8Tt6Avc4uvVXKVggiqWxK1uWXUh3bYzkWnNbPrizrThezwahdEmMxdEtUiGkQS7f1hoM",
  "key17": "3Mh6neXuE7PeT7o74BYvX2yP5nV5CwqS7QY7AXmG8ewuH2z4mBWgb43S2ZZLufSiNtqRQUZwLy5APN1cbnzhoaUA",
  "key18": "5h4fdoMxCQkHrks5JJF5d9t1VVQQxnyGBJWfQ2eqBqUouc1RKNfHGKEg1d6aLBvyAg4DkK6SE72mThLgeh9uKnFD",
  "key19": "27Wu4ifRA4L4HwLebM69BJkhq6vD8iDG5fk2duqy8Wzd2CKbV51ih1T2vXvmsQuQLR8Fs4cHEKsZAnKaWJa333zT",
  "key20": "3cJx9mgNM2T3yhxzfQjFDDF6qQq1yRJDjupiKnzHf3DjFJvTRhP3nzHEfQtEFxJ8iUetmcoQQN8vxdTerKV8gjqj",
  "key21": "PCYKvydC1MFgzgnhZe1ToRYmYkzMTBMJ82PHpfJ8qDoDimQFoWJSt6k3JRHBPWdseUAh4PTJTXsME7m6yTRrANB",
  "key22": "3BERg2VBGNKcMZJASHEemL1LNoNQXEweEUcmj1m5qm4uSh9FAyuZTaqnAbZ3aFjNqtrV5vg5rY4HUK9NcHuTNB2T",
  "key23": "3hM18SZZa7yStdNcGkN8cA3gAejTruVSvdjyZY4FqfWfL1U1RSKsiWAC7o3uvkNGHdgAyu6npph6AshbyfA1v4wY",
  "key24": "2ny3zdiRJLqcadTVQeS7Xxoppnap4um5cm48VSmUkepU8PP5GbTncv5SHkkkmFfzDFNxtzxX7nGui2EyMaZozQq3",
  "key25": "3vj9VF2FtFuTowE8FUEEm1VPn4YvKbjzhJcvvcQ5C8Vxuxg8p14ERqf53KtqMfu9jRmX1pAdgZoPaBeYLLdNC6JW",
  "key26": "5yp5n8r53nMjyRhqXix9z1WgHjY9JazbfYCxmN9NVNQ4UBQf4SEGVeVzeXWfJt38vawWdhTytPmegNKRjC5DaEv6",
  "key27": "47yHXMSnmVCXmW29nhNV99YM9kPiY86Ebxm7drqUgqK8HkVEZuD3fvhYmMtMBsybDZbCRWzP6SRX4tF2TSGwV1FT"
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
