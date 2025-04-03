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
    "4mw3Uiuzee9Y6BR4DGt992bhyLYQ4Zf4A7FxB3cDYYkiuuyXUkdZKUgApxybAWaxW6BUrqTmUUGdw9z6kDxSPmQs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DrE75iNDagjxf62Jik1FYGYzWP5oXZs2rBoEtPgVqb3FFxiC1PG67s9aSnZ2RG4XoYxKy9BbAn6Qnf81HFWb6mn",
  "key1": "28amHSFWzZknvytPEpr2A9WPCGyReAe5xJqNVRB3wD2d95epjT2tjtC5r26dcbqkAVspjNaEMLcawfuXqBXkW5q3",
  "key2": "2hH5X373GtAYL7ajhDpQBncZ1acHyTW9PaTwV7PLjjzwHh8AZmECtSg7DqD3SFRF2SD25byA1XVMkYhskV55MH6u",
  "key3": "3A6cHb1UKTw1DVoAL1booBDBj6HMwZ4cn9wtVBm2FsKDFP4dUpHYJz4DWJ1vpaGtsCnuTWNTv9R8KaPVFsX9rDfw",
  "key4": "3tm6mmrKxYL8FX8EHhYNn9yLgpVvBcJfVKcRYPN7UcAa3MBJjU39QaXje8G4kMhv4Q59eyUwwa7bccef2hsC6AZP",
  "key5": "5xrswAQDUNGpbhmijrztWFWgVDiocyvp4sRLJzHLRAqGcYpHKnWWkazbpbCuDZ4uF1CV5QBn3B7fwKVEh1jksQ6P",
  "key6": "61Y7mnvLqYcHtMEPzqJjD8N6QGTxkA9AUpwbvkdPCo4HydzfW1npKr3rPjbQeg4LKWRoVJkhxW6bNxwE5ZFkaS56",
  "key7": "Z3Qj9CtRdi882JeVBdXTMFfp5sH6RVZJTFkZRzouT17TZGBqUfVEC3VSSCKwxNPMxMfaH2WPJvAP8Wveyh3wWGf",
  "key8": "429noZdVeW9Lf7ig13N8BuJ9AqMihXivDSWm7vYn1yvvF7qq3KxAayWauojaL4WFQG4PP1qnhMRTdAPopDHth7RW",
  "key9": "2PFVCgmVnHsXPQ9ecr23SLVFfDJi3SCMNrdvYPNRhpkky3EnTqrhjAcTFoiEpeMEzvdtC5GEkVcPCKw3oB1f1Fu7",
  "key10": "4bWvPiQNMsGzski7xywAwJZtPDb5bomTCZiXwcs657fnMHsFvw5uKBG6C2YM6UTknWrcdvejQWQTforHqCLbRdTr",
  "key11": "2xyfDHHc1cKFex8JUGtamyWUBcTsw926U8DhaAPjeR7fYKMjcKBp4yi3ZGXGFdkGwVyqaz49LrAeue4GGHo9YGm9",
  "key12": "eo2FnHHuZWtgzYEd62hGuXTbjyGqP1sU4kp4g7PdYmAKYpsVa3bcG5NQ8bKCbVxZcooYxgnesuZa4aywwat6Bmw",
  "key13": "UutW5GoJfdsqWaJ6Uoy8x1zumcJZ2zcU95ZHoALG2z8cBAqYioR8wcm55GPF7DJJbKRCc67jHxhiX5xzJRqWSLY",
  "key14": "5K49Mq9KK5x87j6ML89ZAi33pdNmUnpzkjCsJDcgmMLHDcK17eAPW9kKCQHbEdRRRA7gVKoK7hDB3QyQeshk1KuG",
  "key15": "5rFcVM97jbMyd7Nw7pi2yHvUfnMiEYBzPRn2nKqUMK5eu9qpH765nviitaNFik9ceBaNSZGFwsZT92HzjkvZJBZ8",
  "key16": "4PKX2WDuH4tLMmq2q6AhaPiu2z1JdaF7ev9ADMMVxcGf8KM8S5YVpNiZkcSkz7qZjPuGKRQmsPHhd6qiW4CfYuY8",
  "key17": "456GFLfSZf6orGao9fohD5cjzYJC3ndiPpgaHUJGnJADtRmDMxZukD8RCVefS6MJ2JSJfr7k1PX8E6b2GFezfMsa",
  "key18": "567s6fijNsqmEMauxLpWSoy3MtyFTyPyhv51wm1LMKdTfAiBpN8MqMvqHisqf5sKAPn2T2tLuSdZfe5k6aRcGK4n",
  "key19": "35LEegRUp2Ldn5Qfih7a7ym6zTggpQUPxhkNQoJdvVrm4bYEfhooPwWPg9C7csaCqZbXHYa7t3ge4KDmX4XHpWPG",
  "key20": "BDJRp2Zj9HDBp8vRrAdzu61Lj9Cvfq1sGLpwdik6JeQ2NJyActKozez7wD6msb9coa2k1on8fbFrfMPRhG3x2wd",
  "key21": "213dM3uQmqMPgysCz2hALd3qQojVpCs5KNfwCf5EpamW5XgwZa3ZwraDADz3qvWm2GjfYta9KgUJJQxXhznA6H3f",
  "key22": "2enFpP93KKZeVwBzmVFPQGiUnhxaGU6gWxNpGr8dqfuxGCJKVxCPB2zEKqkCKmAs5kc8ZgF2WiuKiXMjwS8i2BvR",
  "key23": "5uJGXDHD9sn9jUcFBViFbZmM68xac1rpeuoiVBBvDMnE8SLv9Sv6SMUgQqe6LAorZeXYqUAZWginDRXt5MUmQq6C",
  "key24": "4M4Mm4uN1UzvBSoJD4hhkMioeYw2ZkoYTPaGbHcrsLe3jrtCkgDPpHJ8uJXZTeYPyKWZDajCeYWipcrMAHJDHjND",
  "key25": "tGqXhqQYbb7sQV4QeeHb53bQ8ToACuZM1bqWU8nA45nk9LAa6qtZMzw59S5yDT6USJyMQrEPABZYvehLYDUR3Fp",
  "key26": "4EjG4SYCPuiRZX2sxW9W2idn4Uv6CR7dXX7fvcQqtMATpToLXANkN2Bg3LGUng3B9cJVhPicMPQkRNY7efwGyStq",
  "key27": "4NyCQeJzxncBEPTJQoBFMURv1a24M53yPU4nsxYRLbTgwNNPDUMNvxHHZxJWHiZ2T73Gv6SBSexDfSGeUyjsJuK7",
  "key28": "4hhepy5DBTvc1t4Moin2pz8yHSUTuHm8T3syQmUW2eZm9qaksYMBhpngF9WREJ5vuHXVB5QkWaFDP2gEnfRZT69T",
  "key29": "2koHvxNuUQZGU5VfTF4qijMU3faMwny1pGxujfZq6Tqq7zNL9uimXFDGWa8HdvtWfSLbAZx8dk6wKLKnLboEt1SQ",
  "key30": "2RXbveKaM31Wqf3towemNvKAYkZRjJDK7xBER8sdAV6c4zwQosBmu2YpmcNQpeKG1NaVkEEerEbf4SGXR1gvu4at",
  "key31": "386v8MczNS8RRJhfscxup4V313Md2Lf9oEVJsE571jps2mFLQaGeBf4GUm8s1UUDuZk8TqZzk8NGBDmDRxNFtzLg",
  "key32": "RTPcZvvWKGRrJ9TQyebTq6SrvVKSMCwAF8JmMrx9Tw4Z3NrXBgj8gswvzCXFyT4rqmbzh43NXg6EiRWF8yud3mF",
  "key33": "55Qdr5LWwvgBNyQfbuKouqALVRCSLDtxsU9fJTQsXVjtX7szqTj3ErVdkeKhxJDs1UevVkZftATz67WavG2w4D7Q"
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
