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
    "2x8VAcA239yC64GCMgTLykWDRfhwZFH7i6VxST8qZz83w38QpJz1a63s2K8MamRaMfz9WJqc3u6gWA6savGWrGwG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fu55jUP1muDAcW6M78wkAzwJehSxxCHcq78XnnyUcqc97YErFyQJ24ubxGQrriDCxDk16xMZK2jax3iHjqEK4hs",
  "key1": "EJbbShU6uQbUnY5Xwm6K3W2A8gZQRaAbG6kXmSEoQ4WCPZMtX8hEVUb4VoC1rxS838nXXgJoBYx9xYRbc9GYmJr",
  "key2": "bd6aXG9a2KiBMWV9orDCBJUwuk3bitHLWAN4kKPDRw2DfMtBrwv9sjUk6vi6JrBK8vGyCtaCW6FmbJwJgpbTfQz",
  "key3": "X7AKqreuqEmS44MTgekZQmAosmiP2tePYYL8TsqXPA6YZ5qpwEowZ7Ea4Sz4xxhtFWdFJM9KVX6CR9QtaAW6MAq",
  "key4": "4BpCiWguDoyyqW3pLhewuS2pUGpG9EYAwBP2WXQ1d6DegfqoSjUaSj77QK6S2To8j8WqMprFYSijr7UdsyvSr7NW",
  "key5": "ByAmrT9PVf2YM8Wv3R8uKE5VJwgAqRRwq1nPvyaWKB8ZNiPuULaKxKgUkMQpKRt7CkyitWHxBybpbzEXjGvWep9",
  "key6": "5Hwk5ZutMSbgqf4jEG7UyXT4F6V4XBjMdy7jYZZ4kEvKZ92HDubHQ9AiiTafWVNkmrZmF5rkeDaaqBDmCs295nGc",
  "key7": "3r7oYLuwb2HhoTzr7YSjHRYz7rNJZeXpSxqHjrf1ZRkQWpJ9aTMKqn9ruYJ7rd2Sje5j3S4RiFmZ1vrgeSDKPFHT",
  "key8": "2m3K2vRYg2G4jv8kTKYhAMsWEunM3uyRQ3a3MkvBRxLdxhAZMTBbUCsVuGSSHPie6ZrNX1dKPvH5t44XfMMdUt7K",
  "key9": "2kt3k9zRwcN5uJVqrJvQ6K2e6R4VG7TUissUMJM3Qb3uPAULf82Sfbd87wuRYtsG4BkHQK6Uo4PBJLxx28qWHkSe",
  "key10": "3qxgwH2JhSZWRowTQ4RVT4QGJ9Hatq58yMcMbegqMf6AxNnyT4FNGAUGmsrutZ1B4Ep3ZupfvRDACjvwpWqCXgsn",
  "key11": "4BjUT33sPh1yfazCKp6DHVFxx3XDRM5gQxfYetKojFp8hPdDcS2HbYpnpenGTjbkvdfB5J7J7J8M8kMZZGKcBDMq",
  "key12": "56Fzhr9vtu2EWJMBeTHrzUmqge9FkQGe1SYvyrMrVhG7s8nYK4Q4pph1Ra4vArPbFwtA1RUJMSZ5HTNq7V6yEhzC",
  "key13": "3wmR3nyUTndFpQsGuZ6a473gF5u4vqFdmVZiWBTeGnLAe4ca2sEShUYT78UuEdkiDtZqGsptTAxHMzx73ye86axJ",
  "key14": "YMRR8J359mBxzbrKUJJn1mX89Cfz2bcRKxZqBvu8zddUP7xE1tLPqysQEEopJy2L83z6UwYdNf2bEPrYKcPWvU3",
  "key15": "4hmQWTLnBAk4FaCVFLYzcC4urQjCgidZgQbaLnmV2KW6Y5RnTTMYDzT8GZeN4mhXXNnp8Bn3RWPcUHk1DqBUm5qY",
  "key16": "2F4KuQr7N3FMUVH1rJb5rbfjUGjQh4neMiMfYFjEAy4UMnLAL8G4ukp7PM2dF8Xu4zYaizRj1yDv3umbeTRMEkDF",
  "key17": "2mMHF6hwkdxVLJ3tMzNRqkKEFRMMat1UPzpDcREFfVBuL2WbxgaauqJCuffk2JU7X34QvoYrEZ8V9H3J5kgSaewW",
  "key18": "7y4vNq53Gaj3Gt56dKnPduzhvSh8t6CnMyMo4g1Vwy9UU1mBMkro7xfP3NzbujynX4Ef4hokPy6E7R1roJrmCcP",
  "key19": "57H1b9WF5JNq8R3wHj9XqGMJLauDDhJtGztcrS9o164ywHuZ1Tbs5thEZPtJmQGSRJehcKYjuSSrQkkWwniLkT8T",
  "key20": "42Zj8vkHvtdKKvWBiZcYAVxed4fgSDqYgLrHSzzJEbnxK4txRU9HiZDxhFvqUpaPibKxiKzkhWPPey1QUfEY2xub",
  "key21": "27VAP59iqtr7238EYHxaUtkUMFypVWvcVX7nbVbQuYZBuuUf44ESc3Trrybh4YutHbEX9VFqRG9ycBzUmKX9p4Qf",
  "key22": "3eUEgBB641wbQmcysr6vJiih58c2Ub4rfsbmtTsWHYGPgZMERvHRmjxch6Ty8hyKiBaAzNGeAdPZWqTzQo9CfXiP",
  "key23": "4V8fXU1ssYXJoMCMmgtLw38k6h8BWwZv4TwuRr9unSFEZtnC5jNeW2unReTJrTedFuuApzMcxrpjYctjkksDK7Gv",
  "key24": "xiL26z51QBdXT9ugunsMbw7MHP7EKmzD18sGhLKTmHEcJKAx1JREMFo36AxNoQUWxDy8x7FHX5BMRMQ28HF4RUZ",
  "key25": "5mxKVqEmoxv65Y3N3viCysQWPGt4QRj3C9uRWRh4rJw8Nug7qvxD1WUpkMzvSYYsgcfV7WX16okekbt5Ho4Dhy1j",
  "key26": "3xyREMwcZ9zmMYY2DimrsWnbYsqroT2ghTZqUWkZPW39pWsCtjut7mA7u7kP454Yg6dgEPp1fScsjVHr5oRd4w1J"
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
