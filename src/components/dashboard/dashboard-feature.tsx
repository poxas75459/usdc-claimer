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
    "3XNshE5CUwJ8VQHCWwB2ksout8Bn1kJy3Mk5dbqB6CLpP7DSiXci1yAsFm7WdnXWcko4VhzP1NhtCcjYfyWMSvVR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QtgxqVirKjRAZJ6srWJrVQk6UVDnJYqaFLHtefPanMizeK2TiCe9ykZk2s2AGX4FGunPnu1Tmwqt7MoEzHxTejG",
  "key1": "2NsWQq24JpnBUs6mCoZFqCj4opp7GJVAmyrn1s3cCSto5iHxfPr8G3J1v1Ps6fPzUdyjb2VAYmr7La9ZWQtZC5M2",
  "key2": "48tcuGhUgNU1L8YJvNUVeAXqGxnZCnZdvET42C6fqXPtNJGVShbmkv57UDu34n7HD1xTejVthCcTtmq63nF6ZZJm",
  "key3": "5yu4kM2VrXNgRRyMGrhdzhYnasmPmJnCENwNiqd8sZxgP7H9hYamU3BUKhppijwVUoCsAbgVS3bGjz5TS9ggHAag",
  "key4": "229dzaXmnczXuVHj7nRK7R52rpfYA7VqwsXE5ePQizpRxyZ9nSewfYBkFYpFBEBX2Nn1Jbd1LU5LLWaQeS341kek",
  "key5": "26bSuDdan6NUYXJ24orYH6W52bk9PGiJbw86xzYaxUm2TKAaoBhUN153D7MpGY42E4o7qNaJBdwD73eo2qwH5V8a",
  "key6": "2Hx5sMrv3AYMfMRsZb651GBhRY9btrZrfKMhZ2zf5pcAV1YdeeAP1db5K921hLU7Gk6puLMxF3hDRgp8JQZbwow6",
  "key7": "5ozgYTRm5QZTLiL9dACQP6VxHiEoJguHtU2Qh1FLACuTAg2UMcHZtu7LAufViByTKp1tMWeVebrapuVMBm7qUrGj",
  "key8": "Myd1LdCARnUPY3nFh7EbNBVsGMgigHibSL11AS9XUrvTmRWaHPu5t2KYh2AyeLTWTccW64gdh1vHXEY14tjx2un",
  "key9": "53Gwxds8TwMMX19MVSqGnF4W7ut8UsgyLB6LvcpLf3EMwbnT9H1epH5KLu19vWdrtsoVvEX1TvCii85gG1T5R98W",
  "key10": "5Xph7KiDDjJbMAyqgWXcsb5WRzHxKL2DNiWganDveLgKoXF18XVmZ5HdS3Vf4RmHjfgT4DFVDibK5B15KBzJtUjJ",
  "key11": "3z8XATZfenJS19ZigAiEjMW2N64q44HbtJmPBFJwD7LC9PsEGMuhTTuFCktkPdUveyE8ri3jSFZRnk2hqzADtyrE",
  "key12": "FN3mgEgp4Az8j4FYmBHa1K6MjAGxxCh4G1yMpxKVYEw8N6b9J6rHbM64gnVpNGiUcGKNrvEpzJcfC56N3nLzJsA",
  "key13": "2sXDHg5kRqUvjS2RRuX3dS31CWsDKKUQp8ugtvYWxpZsemmys6uphqRcvJqTrhUVzzaEwozDb8XjvCMHT14jvpw3",
  "key14": "5yoPjLhGQeeZvHPXMQhLbQbLCjdvjaEcfzVereLuW8Y21keyWia3xXP5qBk472THpdu9fFRBkqKMpPv2BqZKrSUn",
  "key15": "3iqh8nYxCjGFyWmyDkzaXbWBtoDSEk9abgLvh6UNGJHj2PveydXu6HdvRQ2eoEiHK7hnmVCSe8DVe5kcZxRoupzg",
  "key16": "47wZzTnK3zXCBnt9vKa2TKueW7QbbvbRvo8r7hjZbc9PUTnfehfgwwShFtyjXgturgik8cBDHNfP5VEpBs8HKF8h",
  "key17": "5nwRG19MCf2SBp7L46WFkLf43UwkmhEnNkX1oj2ALsanUPmmWJknLdxXiwaLLyDvMafKUFestsWLspQRkBP2cyUc",
  "key18": "5aFaaMUe3zXi1eA5kq5YKGia8gqnj7m1CEAGnxT36VqzrFA3fkEQqAmXMAZGc69i18UPP3QGeyDmGa1BUHEBsP7d",
  "key19": "42MBYmCxSW8VpEkEBUtAZQnvCnuT7xZbjU9iL2RJzYazMrbw7QGPzWqebAA6ZASoogpPSg4DepxRKVNSSdhNRx4j",
  "key20": "4ju14siR7q7bZwrnEzUTmWHskZAR57k7JnXd4shhNbZFD6g3KeiGCtWwidsZwQ7522ZKQZNESwcArt5WvfvuXUm9",
  "key21": "4VnYHzUjnctNpriighgck6mHCDSn8KmLhaSYftNSzM1DQBBRtUa22dzMv4bttiHrUgu9KgGgPyb11A3GdMCgFzW5",
  "key22": "4g6e5X4VgmavUj7emd2vNo8U1CvWqH5yaEKfJWPw6BzB1fKrQSaznTBuD6xCZ1fY18NDSrEbEbuLGGSQ9u7AqfXw",
  "key23": "5UJMb1y9XP3DacnFvUNwdvGotDHvazCYvk9HgByzFyMicxK2yPLs6eoGo2Cycw86VMUBoAVvtBUJnb1GpahYmyvw",
  "key24": "3i1ngwEvvHyDGDwtFJtUxyC8ufyLU3FZ7rE5pYxNXwSfAZyQvqpovDt6vxUBmJTZcZcHUpP9SUbmuudzzAS9Mubn",
  "key25": "2KcrEAbTHKniEoB9LYu1zjGuA25tuoNyK2Ux2k75KVHPdKSVRD1XgER23eryQX4BbYkDqiiCez5kVLjmuszN531K",
  "key26": "52aVQxNGSajSTxjMLZ6HGp8Movooz5YDRkhZzxQ1GSCY7qBQWLx8rTFK1JyDcgixBfbpm7aYvJRqoPGkzthfveAj",
  "key27": "2muuLiRvLmZdqkQgit6bxZuAFiaGf7oSFLPejHNpoQ1r1nSWixihpGpb2HJuR1eyZaN1y5MEep3uNqZZbvqrhyo",
  "key28": "GFC4tFAqJMD5gySf4WmyfaJ8CkJGSkuJR4c3uW52BRqBNeDJZYg1xbBg1UPNnfdzeXE9JskRPAsXkdNp22nM5rQ",
  "key29": "4UinETapcqyAkem1XdAL43EzwFeqRqEyro4FK2kYrzTfV7HmwdJDUA7VywEq3Z7Ys7EfwRVLRS4Je6xfEffpaDkW",
  "key30": "4xgCvUGkApsF5JU6gd7rvbvc8bQF1TtDdPvMZMhybAqkmtczYvf1AbT5gJFisaMU4hLghaZHZN3EU4B19MZZZY7g",
  "key31": "5u1tH95Qd4LBKtg5ESp2Xg87f7ZPQAAitufJ4x9QdU4kVEgH3dfZr58fxS6nEvZQRyoqVEU92Vr34qFau8pfKBu7",
  "key32": "bCsy1HsMYrtPVNUkatr8Eg2QMUyYisQqDNF5Rbox1TDuPsDwTvsX6JEzYEH2XmEaCcgh7YbFVra9Vi9shu41s8N",
  "key33": "567shcn6Vci4Cj9JTqSfwZAJZqM9K33MniF6HVf1KXZCSCfmNTXTmh8smAJtgG558myTY4D6GPpceAspPy1Vq69e",
  "key34": "3zSMM45NghB6m7fhWwrgo3Gr4jXBBRtTFHSRB1e5ak3xCqCLqKRovDvf5iEZFhmo1mNguZBuwxHHJ43br7dKX7rr"
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
