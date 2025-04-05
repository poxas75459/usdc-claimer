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
    "24g2wzCKYdHD5L5GHMFU6TCEnBRhH5hFcVCBnceuBsX7mDnPH3zxg4uPgLeAkkvYteykTrCenCuT4J9jKqkKjx8v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Qp3prSn1mGnCRZj5n8BawDTvDwu3AJqErzLzfH24XsuuUnR2vxfRFr6H56KBfEb1PFAswWbSueYGStyrkEZWbzH",
  "key1": "41wk4HgW8Y698UceYfnZV3YUtrmkVYSwdHfuK8x7HCivyrhaSdNxc75oq3pXGDkrLeePFJ57bNUFvcspt1U5w7ie",
  "key2": "5ME8REaUv3cQ74gqQc3jV28Y8hncNN99Sgfu3iobocoJ7E57jaGUmKibdUS3ipkB7dVpT3zZ6mdqvbQqLer6io4A",
  "key3": "4dNYmog3G1rnMZV1R7TCveifuhVLdhRiEET5E53gEZwE8CSp2Lm96GUNRbxD9GMrCLLfL7fXdEZm58BLhe1EPqVd",
  "key4": "3v429ApxPNjbeff7VJJshABK9ormK3n19z38aVwpwBTNUdgx4kmEBex9yBbzUPqXXjEedx4mFpHucwgEHaCqt5no",
  "key5": "3Jiu4PgwH9ZRBrC7HA6DbLRHDWcz4btdRQGo1QAHAFsBbzbyjKmoRFJUpP9AyiFFNmh4rkpbnw59s4f4TXTcv3dE",
  "key6": "LJsAD8EHNUN9cnFS2opiDBkooH9aNBabwjpknReZNA6EPMenadi5Tihe5UQUnNvhPczKoAEkf8BpeWiLNQXKj8Y",
  "key7": "3rTrvN8JhgMn3R8SLc2LfTysStpBWH4DQcwE6KxQFTdo7Wx82cVsSA4jHRUbPqtwVcwUxTyny6Uz4jX8QpLcPRSR",
  "key8": "2gT7T2Pb1cq7kuyDz6ciA2omo6sbMo95W95eCzQXT6iWHLQ1SwVHGuHt7y7CBubjTXWtTAHLCC4RjThBpmJaAyL6",
  "key9": "ELHTxcpjXXL8gihDgwQrZyHQvUvrxM1Dr5AC542MQguXMhVEybySri1pKS62Dxhg1v5nsDopmLE4hn864xWYaWc",
  "key10": "2CVHNMLcHBEzhaMuAAcwoUTvCfizUMS3Ur7TU3fViVgdY9gYnc5edREptwdd6wMDgSPk6uAXkYpYLsk1M5FSQ85E",
  "key11": "3wzArnSKST239VumLHUgZEKSjhQWJrZtVmeprfGoS64kDefVhN63c8JrvTomPVDtUoV193bQxSmHQaRAT8rg4SAo",
  "key12": "5a5Jez61scYHJZgAqo53kpRx6KuXrfKC3GQqa7pFUdErmvyryJUgPVgw91bxY86wz4jFMrwFrN1vN4qjXmPDb2QT",
  "key13": "2BdzT1RFU4B5mmD1KHzihT2ybtLfwYbHZR7ZQvDdj39HZb7P6F3ajLD231X3wUXQgw4xzn2W6EsgS7nVACPpax3Z",
  "key14": "3Ljo1p1NXLgJmPRZUovZqEC7mfFa82h6Q7Q2EKyYTfwy31aaB8Hm2e4BiVMuKwbt8DBpgG4f7ya4jqiDw4kKGuAT",
  "key15": "3NMduF8L76MghyefHY9T91zsDcbdrwX4fG9AjJykzpvTdhsTpUDqV1Pkz5HLHGxQTYf2e9peYzz8pCVXuxp86EWc",
  "key16": "2V3HbRFqGkQCQJcG6kV5zW5Bc6TeCDDBq5SQCgsSqCAErcpmjU9tEL8Z9bkDBpEqj8XHraDffsKpQ2SUc88W8k3U",
  "key17": "3ffkwR3bS43ur1KKKgzYyD5G1cRvFZPj7cF1D6AeMbCYW9XFWv3mWtVNFgam61RzrxHK9cfrTqNAaBxTggrAHVe9",
  "key18": "41dV5fWteK9x2SM4b21aenyvfzghXLQNrcz7reL2kjzGCcXNFfWEd3NW6RBJhdAwmRhBixupViNsdzoVkxdGWwNb",
  "key19": "5RgooceYoxh156XgXmCUBpG5u3JBLnAnPQkR8qAALw7VwmJXk19Hfn2hiuFjt2xpKALeuRfEgBT7Qua1Y6qEBwJP",
  "key20": "5wspWRe2wYEbNWTvrEHuktFVzid75oKkNzi9wuKaDDAtAtMRBHJu2FniLkNqgki7sGAX6UxMV6Be3ApxfWQNkQqC",
  "key21": "5eQgjqtJLZmyXqqrEGBzPoV493Tn4qfG581oGN9MEU79EawnQCBgBgJcjYVuRSTAx1gGZKxtGybx6V8qL3C6pZBi",
  "key22": "B6jmavbiRpYW5ukqNJH7zkp7TdGQntJUBdB5j5af9nECSzF38YagGzpHAUHb18oLVcxpCKNaJvJpf5mTqQ4NzXD",
  "key23": "24ZWaGFaWXDHfRYPWP5QL1V6RM9E2puyPB8cx1ugmJKieny2SYTFKSqSUhFAXncStb3BDydpTixiNT11CjcAY9B2",
  "key24": "2YXcVZdmzsrfoQcoJM9qEk1fqmwaWwdAofEjTX4pSCUngp9aVJkriXHbamW7cvUZN17wUDh63sF4Uq99iMf1EGUA",
  "key25": "5VuTWgKKNvfU7H6fjZByXn881tiNdjjei4NPyqtA3SzMvxwZSQELtM6nfF7oNsViuE5kDgJ1gXHtLnk6vwkmZXc8",
  "key26": "36C93LcFim5cUzhCUCJNpARqqR6owyt3T1iR8PD47FYk9TYF3iHcGDmZdvgmWTzM8cjqPasxhUAtt7euoPpyXqhW"
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
