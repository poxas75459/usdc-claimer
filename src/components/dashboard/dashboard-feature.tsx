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
    "5FevMiUJzyr9du5ur7go2SwngGhZkabgnY7ULrFU3an3132HR9K6ocEgShdBck734u1PJP1ZBsTXASYMARNdexA2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M16AXo6xn5ajgBkZijMKbfS8geDiTwptoDrEuiwsC8JePcm22hAv3oe1TaBqXqd4tfjNWfQHfSKDNvVzsiRff8D",
  "key1": "3t7v93mfLJYQF5aGbjWdnKBUH57oerSg29uT137WeM17Y7NRcWHtVjeMw46EN9k1euzqihTaRgWRjYHxFVBSn9kX",
  "key2": "3GeSavXCUpDhynftx4zmkbWHDMq31HPvA3vmcpQAcLuEDorV9ZTmUSVWN6dkc1MEWU4XBko1rDfQjS2R9Z4xU2wE",
  "key3": "22cMg7uwX9txGVcDd93husT3HozDqtGQLap5gB3CouQLbgeJ1hfHqRBEjfTdJbrXpTVnxqUKqiuGPTHzVpVSJzSc",
  "key4": "8MF5k7jWhRqEh7yfuEuxWqtLpCA85xoNLWRs2zbW23Nfida4v4ajVLpont2PmBTGjnaPCm8i9RzD4HPLxM9b7b6",
  "key5": "5XNkzmLQp1oKYoNHAAQk8i2HvaaRM5EG5hnDok1XBanZuptYiC37o3wGRTcJr7W5TqY87dsJ1hd2NjRcTNJHn9mH",
  "key6": "4XtnmqGTmM8dJoTnfru3npzUCD3W9a3mn3X26jmwnqTgBs9LjG8WPk7zrS8YWDAUWGyyeZgrFez49x85YsxzZpcy",
  "key7": "3D4gE1bDkaMKjohJVyLSWLYnirZ5ZvEFmPgN5X3XmkC8hipSJzsjcyvtovu82wqivWcnp7bFm98DWhi1c3DVhBLD",
  "key8": "33XHpZfckFkni2nAS5Se442yPRFwtRgPU8YRoQAGmCjmLM85KQQcGgEeAY75dTyduJGZ5DCLpb1mqBcozXw2WyDy",
  "key9": "5Vy1Ys5gyRkKsxtV66kurW6fJ2rWXWACTtyKwJ716RCczENVpMjQQp2ANUmgocvDC8LB2fjxB4hnnUKaSbHbjW5m",
  "key10": "3QsbpWjEkhN4JtiLU2vYYQBcmDcWmoX5iqHQ7fFbLMWL6h15NkcVmKMNjJg48mh7s2Gt9BYsHLo3gRDejMNLRpjV",
  "key11": "46x9eFybTwNXnVNzn4wtZcnehc7wTuspNwFqHvPvra1gvpTmoj3K3rAuvniNUYhKjsAoFzJ39jD3ArN7nhFRAmAS",
  "key12": "L9CDkVMh4E69y6Jzimkcm9bkS1oarE7nucnTPzn7VbffyKa9ivNjQgSfLmq6WtPt1UeLFFF4RCS9rW2y1G3xPFN",
  "key13": "4Kms8xVYjipzozuVcaquMuMHU9H8EnhhJw8gV23eNtRSuVv2XyB1HtpPAyW999im9hRHVFgnPYSw9zuaMTvv3mb6",
  "key14": "67eKJ4TjuE2hF6w5HFXtWsL2TkrWfTbXqk96NTTapS2rcXQpcQRCnCiz9hd558oEyHBgZuC6RQAnGfDAf8aVz1xS",
  "key15": "25frDTLUiUuPsoZUML21QRmdJPmYqDNHLREF7fHzf7txtWQ9Hbg7iEPbco3yGiKj3P61xWddxV7EgBCwxbNNy4g1",
  "key16": "3F5V8anNUyCuxYRV2BKCaENchSYuZvLDMJDKX7soBfhbh8FwAhgKB3Cwdd71cornEmskcCbkVLFFWscZC2zvUzvH",
  "key17": "2aNoN1uRH3bkfKHbctkyUqL1MyM7Q6NsvzKsF919b32MHFMaVV5bUJT7s1F5QK9p3ty6RCCKMmqrKwmbZWCcj5zQ",
  "key18": "2waYA2snkTMacRHFHnc7oAL3VWhWfz95nAnh3PDpLG916gQgtzmu3Jo5inHCHeGQgB9hRKGCSZpSVDFfgUY1VgXv",
  "key19": "5Q5H7sc3Cimp64nTjBG6mbAHx7XmZXESQokQgaikKHNNAuRtfRkbhkBJ8axHdD9zuuH6EuuZTZPwS2rRm8NB7Gtn",
  "key20": "3nYCzVYm1y4NSMDa1CgeJDVdWbHYmxpfCZx1GcGCTPbrGNqAa5EUNMMPdvJvsRzwH3eodN4To15SbSCaGUqzzCtb",
  "key21": "4uCecQNHXFNVe8L3FwDez1Tdv8Wx7GKi121kUcCm87RAgx2zoYqokMdXZEKeW8AG6ZWTXBXk4rrXbckiLWJchvvr",
  "key22": "4iRbj8U6Unq8Bv5scpJvUL8N9dhHNrLmV9QabNtDvkeqrmEWeevxgvRQXxQ2U1gUCnJWrj6n4ZiCWaZwd8omikgu",
  "key23": "67o884v5VzLURA7A43DdTR63caM4VtqAQ9o66nLMk3UqzXBsgMZWxChxDUJLBvrnew2ZzHHwscUD6mcrQQz5adak",
  "key24": "5Vy2TebmYZmNvQMhCL7XNdy8c4aoycYt4v1F1RytQdSXF4NQbUBYKJmXSQJmbA5vL3JL5nbQ7qh3jS1gcTuMVyWi",
  "key25": "8AwWt6cJT6YFa7KA1oDJo9KaB2hfp1ZwqSg4VdmneFNww3Cw3h4BnDNQJNohzGu6p3JkdGfikMP8AfiQgEhg3ya",
  "key26": "4jrHiCTdTKUFtzhtQEFgxWgYHKeRUj3bZS8AQeZst4NTLQY2KmqDM7kRKbziWLkLUbQAjVU64vL9SVNrGYP33bMX",
  "key27": "4vbPsMJG14CbU4GkxmoMMmQ85UxtG3faxPExs9FmT4LP5L8bKHjV3mq5wNzoAZVPMg89QkBu8RsvCUDYfxhmmLgG",
  "key28": "41ozTJ7AeiLE4TTYRoyf1U3Gi2PCkiLXmTPCbTR2zkhHLMTdHnujsPsvAgforzMAUe3jL25bSyuRykqdvAv88ZTt"
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
