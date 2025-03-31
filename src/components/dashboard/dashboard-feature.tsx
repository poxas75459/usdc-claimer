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
    "5TpaJWYZjSjWS1H1E29u8fCMxuPCLEnKDQbuWNEgFMn1pn9NScZAap7jMhR9Va629Fwos5ivfoVo9AtL2r5iCkdt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61NfFbbPkeAQ7BfgBu49wXTH7AiDq2oF9zVqhuSmbzyhDXkoPYPrabG5QYyBvU8Gggq1tYvQiWoRpyBXYCMz2N9X",
  "key1": "7qRbBkGMVbBeFoGtTiFVb21PALqxuNkffETL9BhVq6RekjvojAqyPDvcBFH4mTQnWW5tzHpAnLMZz73HzTwgyp4",
  "key2": "EqW4Pp6rnMPK9q1XQKefVd52aGbpAeUMakTcaAcxsgQzAoiwVavqWjQhA89XciZkYgAZkege8134fq4sRGdYwcd",
  "key3": "3yuQmqe5QTcFLkBsyR8NfmbjQqnJBRapadiRbxXzR7PJqbYk8MZq46MwE1GigRPc59u6N8p8KXDFoqWNYN3hq5wd",
  "key4": "2Yc6tKCptvXztzdbVosWEd72n3J64vL2VXdj5u9cUVueX2DqfhpCAqErqZw4MnXw31GdwQui4or9FnFCuM4ysrHG",
  "key5": "275qdFYZzBwxZCYUvk7ZiY98bK6EtR89NYYaC5MyV4TibjBGV3XdvKAg9i9PGzt3QebStx1YsxiL6FCRJvdS6aio",
  "key6": "3YpKEhXkK3xfV1PzjaY1qv8FFrTwjUXptvnZUKtUv9CpByzu9SbruLRJRaiq8u7i8BwKEJdD988LVysL3tScBH6T",
  "key7": "2DH66xjzRf1AsWLuf29z27AZ81ppmAXcFH9EWtf63UaiVvRxLFakhEo3D1az8zePKA2kjH2ueWPM2JDET9r7Dpxq",
  "key8": "3WFkiWdfmgVMQvhxeZ2iuUBzZcB6sVgofbd1SLk19F4mTv5yNFy6YbZRSLnPiBP78QMrQns71XnuKFawhnFYcEjA",
  "key9": "5pQgpvqudYyH1J34xhiHVdHxq4B7rANN8k8et8bqQdKyBEMBibHatZeZDW7ePNVLZTL2Bq8eQBncFP9eknWsF92T",
  "key10": "2zeSu4N1CtHJsiuy9ZxYZCFmLoJbPTT7LXQVi2BoHtkeQ28oj7Sr3Xbk3wSCiNNZXvzZ5tVhQ9jGBj81g9BvZ7pm",
  "key11": "3ejzfhJNMWWd1QAK6WjAB7B1wn4dJRyQYdaj5SRkkYLy9TGr5AiN8ZyT6LVBSqWBX3rNunLu7YKYGYt6KHrTKkhZ",
  "key12": "2BM9z45THmegqA99FhxGRRw3RXDDQAPQBCajXFijxwmMnP6itsrtE58VYCbg7ec3gdLPL8NxqdyJLcrK7utPHFkZ",
  "key13": "3FNadvmXME5sCcoKoeXirRmfo4oZHjq6gHHrCPvHZguK9etbcXa5J28KEg1D9zzSrD98nkPA1ETRBzFwU2MNUZtE",
  "key14": "4K3v8YtNxvGBW3vJ1z5TbVEaRnoPv6aQDWdcKtSuu3mthqzHgSHSj565raYS432VFc8v2wM79X7JKXogTLAf2yZw",
  "key15": "5KBP8cQXKCBkFAFPKvPfg5yuJPHyxEmjz8m8ES7riHb8WzUPG7SnFDxj6qErTMbeAMRScu3HUq3UaYikwFR9VFhc",
  "key16": "2qiLeKUkAfpVQP5NLQc8pm8Kj1u4M3VAb7WmBzi4wDCofuyKnyHfiszLoLhrWwa5L6SRp5XWNsamQnax1ex8Zops",
  "key17": "4feNRaUU3zjTKZgArxvPj1RfhA18q9RZA5exmUPW2XDksLuTVmhCdYude8uyvojNQfCAgkVckGbaVFabg9oP5CWU",
  "key18": "5MdgJXmTUK4pu7KhFC4FDJQrewVkYKBnJtouQcVdssgM3DN1QHZR2YU5dkRPcA46Wib4KvveBQnVXnbBNBt9jeMF",
  "key19": "2uFZg2sbDURHLm2LhTFroviBDYenu6bMiBQS8k38mzwmzXKv47GdUK9YGHLh7qHW2wMYfptJQTHfsMuVFMKhhT6D",
  "key20": "3VRWTpCy24juAa8NF2upva1vMsTF9uY7auc4hPtKAHDoP8gYnSLDnS4yC52zXJcyVdVMdXB4onN4vgpbPtxyBPQZ",
  "key21": "4wd6SWP18kVbDCbEdEatTMVeWnDPxmjW7H1Q6Sb5YJXGamEqZmMjQsG8oXTKb9rmcPmqcGutZr8cs9LADwzQ5Cg1",
  "key22": "57BFDVXadGGqzehZqzZxxPYgXjkWoKH6HnXVjzC4tXBexmDREStupLnqDu9hcSZ16tP74xUg4VppfdbjSxLoudEo",
  "key23": "4wNZF7718RnPx9Kx467MYEFtzudu9K4cmyyR4UfG9KFinCDaTL3g4HGzptm2fHiX7W8SnTDWMwzQt5YUM93qN2Af",
  "key24": "2com4Jt5S3e3yCKc9JidahuVL9kQBceCUfyC4TMNTHmRm9Kf2K98ffBvT1Z5hWCceifLHvYxTgUXbYuNgEghPd5f",
  "key25": "3BhdN4TnV9q9r7eoB8Fub2jiPwgVYXbHwB6Luk2f6U9USuSmWG8SxLTQY5UpncV5w4LfEN4ZWcHLneL83LrBbQ1A",
  "key26": "3SYaJagNHcjGHS9EufMEofWjzzQxjX59vKSTYaG8evwH7CQ787x5Y6LsERM4yrDoQpcgdWnKkysxQpt5smz4cBNH",
  "key27": "5GhpPQvBJTb62EHPJB2qvjF7RKGRjnUfLLbAXzaT99RFEubWzV7FuyS7qn25skG4LzBz6uuMgAyHdCSNNJ2ZW4ow",
  "key28": "t9b6fPvKtyGPd7sQmAetYrYy7GPSMsfxVXb6o8gyL6pUgUQeyxbzYCxmC4x9cT74uaiBRNHtnnruM6T91Qxh36A",
  "key29": "36mFAy1Behsymhp4npifU5E8bGuig9TQcAFZm6Hx3AnCYLKCgJkqwanUuiLhPo3GR6R5b3Ss7HLAbLEVLWneruAQ",
  "key30": "56WThyh6Bawnvv2ozPW9qstENBuyF2Arkrwz5t1va1PPPaY99WyKj6LBiRJGiqSpy1g3bPEjuvVS2J7DATyYPSMR",
  "key31": "5aQ5SNoGJ4xbVxuMHgg2rSkQ1Lbc4UrdAyNudX1uVzztYuBAwx1EkhuN9wkbtLG3B1CpYCRtDcD9LzgJnesPQz9x",
  "key32": "5Y7A8XS8BwiMfdbxRcVWVAedi5kVnpuAE1YMU8SmTa3bnLVPsUp4yGupQrdAQgyNCjRLjJ9CSa4aBKHSyPWmra7D"
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
