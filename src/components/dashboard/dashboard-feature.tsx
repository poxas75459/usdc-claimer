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
    "5BZGyniMvfjzLUSnMzoKn6ktiActtQYbEuYNPBZnWwpMfiCtz4TQhFHHaStLj5PirQAaBG82JC7tYwyM8AXmn4zP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZfBRbahSHx6NweAdJfuBGTe6wjhp1NPadiTyvyCCQQWwV8PuCaQKhvgUtuLPY8F9s7E2j2xnXpWA3KeaHn5Ey6F",
  "key1": "2L8XihBBZu9BqQd2zDHwFAeBUmakpJxg72FYmVG4h3KSpnpPHiV1BZZs2ThhTrFCT2gydhviddyQRRJRWZUtyLdF",
  "key2": "2zvUF9bTVoQMYoTGbNZivjQwdzuSzSpBKw9uCmtR1jWzwg3329PrgWo1u1LoLhdfGjY3tQfL89Qt918FkDbsHpmt",
  "key3": "3wFmx85xnjKL3YrwbxApw9iUmNFAzXn1AmEKXxoFNyAwp5WUC78RnRaCMrwHUewMobaniTR8L1y25BGFeUarRqwQ",
  "key4": "2GgwAam9DtzJfQUmGyonVdRRvd7f6AcTmJy9qywjEmcjz4EG8C5po7ZmWJ2kPThLMr6MKY9ZF3AwgACSkJR5E5CZ",
  "key5": "2mjFmyKH5ogYbhNgLk1Hp45ztmrwVv5YqDaMAv9k68c7sKKprngXUbe5aw52fVrPkkZmyrxRKtgWsZTYkB5kRAAk",
  "key6": "3oEihoQgnKL4XSBkabmXYnDoNnYWfhi8Mu5RQBuZkzorwKAHZGEeurTcjv5ggKbAMKMmr5sJ61ZA3vsvctaBsbAM",
  "key7": "3gPdmfJk2gexw6fvJ2BssDFXr15sBXHCptWBXKaEDMtzd7z2m4eFANRr2MbwEGtbQM6bsikcVQemev5bbYomf8Xg",
  "key8": "3L5h3a5dK5t4hijonQuHhSq8mWtz11ZCk3NUAAj25EwkhtRXHweKQQzwwaVjQxzDKesnmGmXotyodS2xuZwpzpa4",
  "key9": "24XahbCheoGo37hjnLAJkkv9sZLBwX4WqPksdqC29ZJFkoyD3MSqdRpaTNEyA6kmqMEkyHGPfyXYai2Qz5KSbsMY",
  "key10": "59yBexmfDBvArJvEu9Yk8CVDjzUrRgXHJQQHdbHvx7GFYLoP1r7FAEjqBwTf8Hr8j4q86M7ds3SYRfbjFiGVzFtC",
  "key11": "3Q9JGzg4sbtXKtEN8DvBCxP8kHBHMBk3PiAp5h6KosB77QvZQnfAbeYCcuuGvSGm1niEu54PuPjJzX7UHn4FUgFM",
  "key12": "Gt2SN64gja65cyZZn2K7SKRhbUh5uyf38p1e8f1Hz1WFDFRiej2J2EzTdYFnTwFA1SN9yYN9JmKD7fmCKG2vxM5",
  "key13": "3pHAzPeD1cDvixSCEXTx5ipsTBjrXXxnfasDgnAhD6jwyx3KD1kFYqyWSUFdDAzc7gpzfMkefF5GFNuxpfaQCyFA",
  "key14": "2xb18hrVGJ726caoaLdbFiYWYtsUpJHqUsQuDfptEVEXpsJRGdq3xf941ETS29wJs2pCW6zgXujnBcVjh8HNJ548",
  "key15": "NYFUrcMB1vXVWbagK6Kgc8HEYuv8p2bgdQ6sFvehfL1myehLWXNzwXnhfYg3MhP9aZ1yz7sV6NgpUWiyyHCiCYt",
  "key16": "3Bijgk4vdDbog2SwdDGqJM5U7pf9hoFLWJbXLVmGbpbkwdyBex6BoVKDNLKeVLMfPMYsF9BRjgyzUQmKNA6MX1fg",
  "key17": "2KkLN6tzpubznn3tgF7hUTqdBLwRyTwcBeK53KmRdGqx8etW2usksQAA1x5fa7Wi7nkcJE8zUdrcEzwGD8g8Pbp5",
  "key18": "3UWa6xqQ4cQVg77CEcnPddAkoLZLTEdtjYttKRnjZDfYcnw6LdxSqPtQig9URTwpc4ZnEEcXkH3yQD3orensVGFs",
  "key19": "Y4nDK9akPQAKawzRM4E7AvX3KLNe7cwE8V8k7c2emLBx4FjZZusEYUyycrJEvy7ZQiyVbfrfYWH6is4nG3r6etN",
  "key20": "4PPqsvvMnBucJYdbb5dtoHT1NF6PZ59arbmoivsZAnKyGJDr9JT7NDLo7BJNARhmvbkd572JvgKEHSwpt6uP52WY",
  "key21": "HZr6Pg1636n7WBC2nzKsRZhx3b6jTZYN8Vfg3XQpVRoc3z21et8TUPCpZ47d6iKCqUvBoyPC1V9A3v1Ksa2krky",
  "key22": "2XcNnaiyaNC4gQofcf9mG4PSF2S1KEvPZFNqGPnBS7dhGV4HHojM9E4s3Agn93H9HAECpctTR7rnUUmeQsBuHZvQ",
  "key23": "4WXb35UUn4wdoH9wogR1HNyfpypTs3qjW8BFWxXmFwpjZ6trJAVg82GLv6XF7AdZVFoB9q8usQiJgLTFpqfKPH68",
  "key24": "Xt251gRtSAdzLu8jvnp8UWdRftM3GWq2gaZUJwXTZ8gnkmAguQL8ho1zP6ffQA3sWrTBXviKG8QgfBfooWNxQ9Q",
  "key25": "3omNVfb4gJZN1HJzjKZmgKW8Se1S9r36MMPUpvsmdiRknykcgdZVRTYq8iMizmXNEefreYUzmjp8AuFfHeWitrMx",
  "key26": "2GT7V5zWS2SeRpJsLEnERfHTzQMbkUDS5L1R912Tqd2Pj74qLJE2VW1q7C7MsjSwbyJSwZRZEs2EZgzfacBJEGHF",
  "key27": "2YcURMx3eAEe13Cxb2MDRTkx9Vf7vvnw75sYCCYrupzFJipXX9DuVsk7q1NeRVbZjpf46dvLFUBFz1CEpiGnSj8R",
  "key28": "2Kewqg1eDppApMKWq4nLhRCvtbxiff9ZTTGMNWtzSwRKndjXRFNpRswBGvFaaD4PDTeStqUqq3fBx4mMhovYvcWf",
  "key29": "sDYkJLiTZNAqpJCLesGQB8fansZeo4ts8wWxVMFvADZDDqkefT9rVFjaodmGZPkEPc3sEsbfnnHFrchrTeY7RqM",
  "key30": "2ZHoHzSwFjWGr4mxD8LxPDxC58PU1pmDpamcdAjjTQWmSGPhamZjLZssUen8ZDaHkPuUD7KAmZYiFQdHibmPrTUF",
  "key31": "4Fo1UvMi595g5swDdm8GM85sS8QLPbordq7CReihx7pd1JQuEnMM8s1fLxR3WosExYJQTYjsV97kNsdxmtPuKyX3",
  "key32": "vDSvGN83KE1fpgSi7onQQ3rtp1EKcLnDjE8TbU1VBWK1UKLwQ5uoRKavxUkeYVDJAKkD9AEB9zEDmYj2VjsWiYn",
  "key33": "2eLw2K7h98uTYJ9RGXXvbfi6BbXLZtiymP4tJZoRRtr7PJxKPLLf8zs39LaQL5VtbmmAtjnsTuuHprTYdiwbCtgy"
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
