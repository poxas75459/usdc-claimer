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
    "3CdXBiD5RiQszsnWGbb6qNb5aw6sJeGWN3ZrMNbcoRRLLCrm26yM2uENiN5igLsu2HGFGqysmwiqYwUCo8cZCyiA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E2YX9ZD4ekhW8U4ohv1rQT2F6Z8fusdXaFXmrQapJpfJPFFBtVq9Sdk2LNGMSr3wb1pK4U6dudV1gWtpTVQz7DQ",
  "key1": "4QnDpRDxHipD2Rh9WP9sw6WYJ14fb2sgoZwon7KaeorY5PmgnakCU179otdwEWUm885HdyAH8UME8XwTwxH7N34S",
  "key2": "4gYEvYxekD16GrLUVHgwYQy2xhHzLWkbfXfDb4ptsokWJg2v1UDLc3GDZbVoVE7pu6dVUYvu1NRzhncS5nvvmm4W",
  "key3": "ZENhsdApc3qTfm73eQJKdUBh1PtJKTgUXmrKj3VWs1vCEbjwAEAC4myy8ejhGBCapbpvbGNSV8maasj1XfeMB5G",
  "key4": "2iFiAAj82GBGP6RnzNBKLTwUKMAnus9GSmW51gNWfRqj6Ha7bYmyCiD8Fe5VVr6vKH2d2uUJg91Vfhtgfi2z7qyy",
  "key5": "5oHfqrbzVreXGde56C6y4vigTe9q91wHkjpTJeZJSh4SFPaepnVBZsWtar4QJtVVYexu1tQi5j7ckiq4nhCksZo3",
  "key6": "598z54Y5X2zHUcNbydKEbEgQ5rr8FmTjkdt6nBTS3BtT3PvcZrnmawUgZkFV539hu6zGY8n5YzNvtYDm6E8CYAuv",
  "key7": "5gcZKiskuemk37DmU4287iAb495dzBFxVXKQ7eUksv3R9LwN68LxYmyzz73jApcQgv1rFsqV66X8K3QU37Mwi5WB",
  "key8": "3tgGDjddGfaMtPMuxoMqdpFnnAtDLfaX1JADxENejrS8mzgWAzDu7zakCGLQ95T4ixwcoaokz1NE76jeM4vGubsR",
  "key9": "2WHmLzEmkLxtt5t5DxgDztA11C8gzb4odSxW4AXpSLoAoPjLBFr3v28CpA2hAfNgr4fwVV7g5C47rTN57LuXmYZF",
  "key10": "fe4Gj6aYaNhNuFs3SMy6oUasFgk42N4Q56BHKvQgw6LBXbcf1mahLFmEjKmQW7KcfvgNCfQ5qVww9XpS1SqGrRz",
  "key11": "3YYWSKzPaZsSSpVLfRPbQDo3BLFtRzn6MxSH6eRpP5mdj8ZHFZePpLDnkX3WpwhsoBe5ETBkRaJNnwVz59isJ1pc",
  "key12": "4eh7ssj8RoQAC2KwmN3PbuqrL8MFx3N9cUfuAvbqNCgawvCNGuMqaQf9pEpMVoAdWecjawPeyXzL3RqWXWSeeyTC",
  "key13": "21uiXjZheytaxT2cgXHyayA8fKbdYakGbTEW2TQ1x74u5tMM8SfT2Jyg4GPG3ayovUmzkb97pv2VLf2sV9DjEVoC",
  "key14": "32tTxhXpfksN1MredzukoGJcZo41RFMfovfarLfoXdT4nhWnow6doBsXGW3H1csmNJ48tPBZdcCFGb2CSa47VH19",
  "key15": "2ofvNTSPRfXX7YH9BWZ2ovasNh3WxRP3YvR4tQB72oTguWHHfAb2VV4xEbhSQBVXuE2JPJCE5JYvsHZqsFQYkbVw",
  "key16": "315CcMjGPZr2DbLEF2y5voVFKuEPisKhsS4dUATUTMk3H2BHWjyUQ7uEFYDdsxqRZ1t2dJNNcApC4JSk2iLX1ZXn",
  "key17": "5nHhKispY8Dbu2zTemUbsGyAXpkGheeHBP34VXGWqnt6qdymQGEyJCp8Bs6SKjYs7w2p2hNjCFmNZJaR3DjiUL5C",
  "key18": "XufrcVStjuw4roEZdUuUKZjvL1Ghm8r6aHxq9ZDArTSWdPZb3DHTAaLhH9Lvks42XrEwvQqqEJVV59aBL7jKZuG",
  "key19": "3S84SSN1qK4SNdcuAkLtvMqhMh87McCHzKp9vmUbjCcHAX51ioVdz8tcFTBB9gmTyH39hrtfUMbKiV5iqubrgwve",
  "key20": "EcUgaq7wMync2QftY2dvegrp9CVhjBZ8YwLMwBxwvPnvCtw5JuoRxCBGVcuJrT33nif7uKVUFrpMJdXvU6ePk7K",
  "key21": "3XfAtsjoGxCJcDnavXxswTFzPVFKghW4VMf4VeNZw4XDWBM8TDLAmaiuhwdvXAy6S6e9omKMfwEysjgJ8cLkPQXL",
  "key22": "DabhdLJod1PVsNG1oG6hQJBvhoPedf6EnAyaarQkxs65gASoJmL5SteGmpgeDAZCpfQhrQeB4ZUZVT3BURrWg4Y",
  "key23": "2doDcw6U6P5sH34t6NTG2WatLAaCQBYuW5NTdsvuw4msXNyDfbxTFan33uXWwHeFDy5w7M2jk29yV73HaFBcMAiH",
  "key24": "2vCe1BxApsrw19Ar3Ru67VZiu5dYc2nUhaY38jXgAPyjDn25tgCz2cowcrRZ2yF6Y4t5RnHH2VQFpTfqs7gRRbfU",
  "key25": "rrjBZ9jRvjMPqmjsqwFE7vPweyekeNjyfV1vHVRFkUPwEti7yEP8kBb1EZXQHz4YTwjzUMFG3GdwfaQhh6Vqvfp",
  "key26": "2kUu5oD85uwpfSLs5JxLhm4Nmk6kWsN9pAWFT3BiDDwcwhdc8djYN4qaJNgize4fW6czW8hQBE5Tr168Ao5zg9n7",
  "key27": "5hDgdDctBqZwnf3iQSsTigQXx5LQHKVm9QY2mLjUXJbw9kSHYRGC6ZKsfdDtLaDKLo2eWmnsVKnYbpvqrnTqxTf3",
  "key28": "zptJqfr3Wm2MuE6eHZDTwtPtJUeyMAnvy7bD832bCosyhWDcQ3YkW4deAvFkeQ6etLMcCJ9JFTXy26W5u7Z91nW",
  "key29": "5vGB98h7pTckQq4VQM8rbPthkcYA51RopesMT1bUp3rEezC46R6dJBTdPCCeLoc5a8kjxQZ4ntENnJyz3aec3zws",
  "key30": "43JDFgQLRuvBSGvMT2RcG8YLz4U78ajfnpekXyXWf59eCep7tDLLmfCikDb82NYZJraMSnfky2tTzmTLDvYRNPHg",
  "key31": "3EvtgNrKvZEeCEzRmjH3fZHywUnGxVd7EVAsNe6hCgF77VVwkYDBCXaLn5MkMsG2YhWjv62nbd3b6VimwQgJTrj5",
  "key32": "5UC6ZuSdivjP8kvVN3DU81dvrJMp1NXgr1qQeStxZrtPW2p1NX7EM5mohYvdywgbzLF19TYiH9UtN1ohtPd2Wz1g",
  "key33": "2AfX8N3g9y9cVMbFceaQiiHKZNrV97aTWiUbEBBNy1Q1hdxgDKYdi5gtPCc89RDGugeegivMWSyvtpsP5z2fNjBU",
  "key34": "5M1rm61W5HGTKJ5ULi9Su8RMQBi5c15aprgiUvpk7x5NXKPx5ZeWpFydm4KoQVKttc2tsY6FnRnmeYdRhqnT8RcU",
  "key35": "4jtJsjaA6itK9xYcAs77KEHtmbChHBRsrvHuUD7qrHFKEErhZcHFb1Tkoq3uEJGv5irV3gEuPxxkjvZNn74v821j"
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
