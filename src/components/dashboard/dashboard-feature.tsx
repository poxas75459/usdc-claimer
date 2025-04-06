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
    "2ps5D152PZwaYdK6p4uG2pWFULfC91QeR5wShgT6AFecsuimXojSSsDDuSNmYyFKCRMagxu8EgJMZowrRHsVX2RP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xveUPVidKCXLRr5KbAAoQN3FcQwhhegEEKGDUXUsGHEG9SWzDipVnJe8hcH3v9Q2MjZxFibRG3vQzuk6D3Ly4SN",
  "key1": "uYSJcLa6DLAfozciyhZHbT16SySmz33tvoYSJc2Q8FK2Kd7984ZNPmrTNbnTRjGYztY5dfpnjntkypsCAquF3s5",
  "key2": "XYci6djMS5smP4CoVoLme3RfoQ4Vfu8mb38v4G8K7BTFg66q43HSdf8fRzoT9sjnNhgtkDC2oQgtoKUgzgYc5jD",
  "key3": "29nSQ9caTYutZYy2WRPidjaQUdweZDNYqgMAnmsCc1UuqHxYrJaZDxvgLtiUtV7SDLDq5Rco5uLJs6Fu8MoFiyvQ",
  "key4": "3KeqeBCHuR5WVAzgDS5bSCB2ei5XUySiiarEFujnm7WbqKqYU8YhkXkSz4ZeJ5Bdq6vB1fWqbmdYFnMNvop8dEZ7",
  "key5": "2z1zuphgZuyLVSzTXLuH84Pi66ZwbnwGJn8p7BBwfYVn2JmQekvT189zmG8ZEc57rYvNeww6i9ywxc5pSNxZYoou",
  "key6": "26zLkFHiQzRBwEhV3kExyWHLF9PnUfE6nmpqac7N8XGDMAUyGtU9DRRtV8ShActM7sgiitvNoGruKnNoypTZvegv",
  "key7": "5Qbdpk1PAMf2FCWrVQQSFJKMzSNx3xBbcVX4bpNyCMfozNDoodXB3bn66beK2qqfQG2wfh6AG2sjGtowWRdE3Xee",
  "key8": "sJZu1BTKoJUQL8fjc7yuqYq5sZqs8CjcVQ6uy6pG4HZgoZ29ASiZS7hNeEtiCMKJZM1PoCDXHop3NfyXfRmJQvd",
  "key9": "3rRaaTbRooM7GqGrR71yz5PXXnm4qmQfjaVH8QBVfidzCDuHVxfsnV7D71A83KUg2FejHtPPG9qH5ve6yNh7DsGk",
  "key10": "4amnqaPjND5LjgyF86xUbTARWbvAdM1NJZrMuc3SB2E8MKPxv7RcQskvPbqTGkxoYooRRXzPxBzSxak7aGCpkHqA",
  "key11": "24KmqknukcLBMqVQbuie12QRSZjZ5EGh8iXgyAXjFyDbFc4azeD7WRsntZZUntwu6LyM6r6UMNvt5FJvPR1yh8Cd",
  "key12": "5mP28bwX6uvBiyAcrHCwXfbPe1Kk5gJ37iXTb7qQZGfJWrZ6HhRhWrjL72PVAmtLwK9uqxoAuZX48W4QFMspdUGA",
  "key13": "3JKvFcEvumtor5aUMnwGuLts9DjYaQgGcAcj8zPQ8kiUrHN9N7BTdjyF9CaTt7ktwX2V4wDELKjrL4zD4CE76yu9",
  "key14": "4u9syC5idxMzK4Jni7vhdJDLJ8YMad2E75euo3n7NZjrk4CwbLL2zcYZQJzESpZWV1QMdhXPda2kQC623McQxLD6",
  "key15": "TuQcgspsdn9TJ6jRJEzjQqMBmVwEjcBZsTX4iVAAZszqBjMV5hxt8iRPeLuovun9w6N1gGRRDX58HUPtnTfNGby",
  "key16": "3hf6tjmEjZHwVz8wdYetbrSjqLYx3nPRwFC7DxAH6nv753MFZJAnzzCRVNvQJmLj23UYLiyhd7DuWdeACNtom2tp",
  "key17": "4ZuJKYpdkukNGjkp4KectU86xTyi4bnTxvZd6Bmpq7xrpaXakiMT8UcpvWKob2RNasRgaDjHFSipsvqo9BejjMwP",
  "key18": "48tHXrqyZoRqjmJe6Hkbpy7cdV3bAsDqW8yhWhXn6WW2frsadbzj2ztBMytk9ycGX6U8TRrfuroxKvyqaGsttsg6",
  "key19": "4e4ccsNKk679GRF31VQESULxeQAzX7sBqrF7AM1CZpaTUArhKrcUkprSbLxqCmxGJBRG2PZkjx3iLLPE6Ack6z5b",
  "key20": "dPq2cK27UbFp9homiw6rTdibLAnaDtr9nLJgHMofD8DwYQ9HftUAbyqEzfsktCwktia7dvuAEyE1Cut3ARcZB1t",
  "key21": "h7YZ2fNRe66HFxgQ8Q45CTgwGhH18euJMrnjr9ATrzXVX5PmBHcp3Xja9AVoR4CXPARLuofivMqgeg8Qw9oXahx",
  "key22": "3PJchDsn3ppsLRhGGMRt399QB7RUQZy8LXbDtyfpyw4HR8gex2ZFu1xUZ5phnQtdkydysXMD768gWLZMLjSUKRzw",
  "key23": "4PpWJd8fzkn79gSwPmW2Kb6DBmDqCAMhoQDUpvcgxSwYkXupAeawv72ri1Si2PbuhWipnTPUAHyFQafguMRAYah9",
  "key24": "sFmq7w6K5friATn2qRzEv2ibZ4CMXePZDxhz7vqvrS38gv2NUCgES2jXK8y6VqJezZNqv8be3fExr7b46t8iCPv",
  "key25": "2P7jMEzA265BVyfgyuT6JxLz9EPYYJpefTeLgeX1HgvWKPJu9BRMNH4YzzU2PBHQ8p9jhr5voPrVWvTG4gZnig9q",
  "key26": "4cnbBcQmX6Bqj1v8gqko9CUL9ghVR9Wk6egLJiGoCSs9nQgTfoRjmgBXGymjV63uoShZV2wdAuRfHSPiV1mwpnyD",
  "key27": "4pZ2zjzpktk9NtwdQWpVvoCxt2mMSDCxYWbjgUn1PiypjySNMkxwjdRekAWX49ZMB8fLvZmDT2RnoH8aN6x2dDQK",
  "key28": "5dhKPjCSmXbNUh5815AHoPtYZrnsGu78aQWYBY1s5C6He5ZSYJne1ZyScQYSij6a46PVWSZQE2QRCCWDLnUSzmB3",
  "key29": "2s1nrpuwhEJJB7VrMH2YpDKRGtviSZPKiGiw3T1TXzD9BdDfSEVM2HcVABjpbytYxjvzcSSLuEQuLdPCQs5GBrC5",
  "key30": "25vja3YMm3j3YcRCDk3HU3NJ8Jrdg81mLkNPjNthx5UrYHVbdrt1kQ4aTRWKBYXg7u7cJMcZXeFcLxUDWKAd2vDD",
  "key31": "3G5Yg3rvWSncuwKiZuKQLVGU7BjpRKLum6cjHxvVoJpd2xKFzbFKXFSjXzSaPq4L6n7fw3sHfwE9cV63ZmKicuZC",
  "key32": "4wK4dnTRrUmatupwJkWUUTmEu89Ybtr6vrCCze3HkqtVR4MKYBKmn5Z1Wz4PK2twHBUbotJciFDnPkmNZycVMGQF",
  "key33": "25e1QhrEKXTbRNbkf8SmDkEzR4JdgnSHPUA33GvDZ8WqVAVRuSeWyYb2R2ZVkUXRJtJpvKhj5xABPEpfT681M12m",
  "key34": "4H6e4KQCbJyLVHXnRuVaGKeUj9bWVfakc9bAieNdKUjPHHFQXZVzPcPUk8RXiSGNrMFuYJm8cH3BPFQ5vCBEsNf6",
  "key35": "4dLRmt7xwUpAGDFU4LZbfu1GHRs934bb8ZDHbhwpDcG9jWw4NsvKHwEqUs2xQAjoDJWYVSHQAfrcgZkqqukNBXkv"
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
