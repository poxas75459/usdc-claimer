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
    "5kwL6FSfKkGNry5mK7uY7J1qFXr3qrk8khzDGoLHaBw8BTvypmn4VrSwNKR91XjS3FAxFt8UbugrQwUfh1M5tCFL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P8awhobPbqSpCNJ2aq63eoMHbAewboo457Xw9W6SMeuQXgsTtK87ZxnM5iuWLCfwryJMoL2aXLXkWW5DSd2GKJT",
  "key1": "3pNGLXK3nVE1XLaRRFb8RxjooQpp8XZpTrr4fEMoF8FcGbkYTPWRrhQz2fB78kiqZvYVskr3XVVFqzv2PRzXHHbJ",
  "key2": "3j77vGoqJJTCz4bavT6daCvdave1oWW17xreqkrdfcfsbkguzdeU6GpiASamb2WZTmPTEzdL1CoZ9ubtbfcdzDh7",
  "key3": "2YrGSEV4MVcrqH5ty3q4HLVnstc4bqxJgg3EhAXtwMZFMA316dgVGVhLyRA2guAej7S9fKPiwpJL6zyDtVBDZUFQ",
  "key4": "52vrZnCD7kbgse87AUDam2HsxhUBZV1YQqow4YQxYgigMbJwXnbeEC1CrcDe5K1MbAxGxmN4scgv1tTAtJTPKcKv",
  "key5": "3VanwimWg14Vq1SffCx3ba2gW9aBEmjKbkGtg4bkbTJBYLCaXkM9evYLppgkU5dg2eskhxqXzrLUgdNw8K9Wv7gz",
  "key6": "WDtaXvpiBYZ9tPH4AsZAQ9jqyTjubhsURRa3g78DGmeiP9jLgo6U9qucNK77rzKxLM6WaskAhV5SnfHKUUdEg9t",
  "key7": "PtktYdLuPEeyFvR158cnwpspYwxmLzhU3oyvwmHByZ8PoohG17Q25SpKatbEGD3qzDdS3NCq2QB4rV6Rc2BLAht",
  "key8": "29q9u2BzJ1HJMkCEwPWaPq3oMkKzrqcfZTXSyVAnc2ECVJHwu1tcXXFdr4SySZG6WX4g8q7svmuUk2eibsRCGq8v",
  "key9": "5sg7FruUfu9LjuyRqzgDgUHi7k1TVpGDFSuMdJBszxC4dJYTY8GTD8y2S1notsf7bGgXCDKxGX7pjjaaAweZbjxk",
  "key10": "5oqiKygihsaQat8PiT8SzmRM2jV21tsbSDkTexsXVZu2KrWaAJWfM4muX9nPziAEbTA85UKzWJMddGmbCQug6Xrw",
  "key11": "o2ruaST5DLiUqR57setez2WsYdczirsaLZyoBXCh946HKNi4YSqkdnm9iEUhGJGYML9rno7wSLvJYQEP8QRkbam",
  "key12": "5xLPHEeq1VGgf71DVMCX33s5rM9yddo6ukCqn5xqkRk88SFW9bSJAMTN7bQhfvfcYbHu381EYjKj9ShPjinEzChX",
  "key13": "2UriSX4oS9AXyY5cAa65XbThQsUrqxxCgSsQ4kn2GC51JzrD4aUDsefQtS8GRNkZYY5Hu3w5WaDX6RWCz2KnVBd1",
  "key14": "DYoKMy9xwfGkSHYsBwNLbu28kuoB3SmA4bMmf2rP54xBkRYBqe5WAZxVmhrchF7PFbSGToocLLipA68PLujQ2yG",
  "key15": "kpX37u1S1M479o58xMPKibPJ4kXtfmQp1PBaU1mAeNDgRb7U1WmF14A2onmjEsiYErXxn3a5Htiuk2vhgTkyBwW",
  "key16": "mB284nphAYQHwMkCiEVYeKiVNa1pixXpKX2aQUBiYerqr1Lh1UETLFKrn8RYLZpjhzbsSeAgJWKVsQcXpSejAMt",
  "key17": "252rCnonYNTZ9QM8YAynxFWPMh342waciWijDK4CsHazeE4hDX3YeR7CvHEHJBar9ftnRqLrbfzrMpGFaWC9W9Mc",
  "key18": "3VRF9FgNMpuwjxygoN8SmrdJTtUi5w6bgVcJqrTrbcsA6s2hjXk5PyoAEqzWDCLppq6BBVHaYnx1kkgkn6TJCWoz",
  "key19": "2cj4jZPi2t9gRK2FNPoBZYpLvr31cSdU3sRz9NGcEiLPfJ4Qjckjvu6eCP7vuxtfBbWEun9jQ88MRPtDG7ei9VrP",
  "key20": "4ib9uygho2VA5wgxuJBubjSJmQ2Ata17MejcED81DgprRmTQRynXfRrg5vEMgp44KXdXDeZYFZEscncqHqwm9vdH",
  "key21": "2rN6nyad3Nru37Vcbn2StXBZgdizPaK5P25e3ys9UB7ixLnzYLThmG5PkDD3LXd5KJX2Hqbiz6MytDUqZKRffqG6",
  "key22": "2mgxF8EBYgLQUuLv1Kniusnx97WQpruR41YuYNKwhawFHWJ3B46fDYPUo3AJNjarUK2VHweBBNnQzE2w5DKezWaP",
  "key23": "2cmAsXPgYvkeu82arJXH9BEvxoZgp5yJX3MLQuRex7dJCKSKGSFMoVpxPnoseEnvTY3xAt1hY7i2XanjiqrvATqX",
  "key24": "2mNvRNvvXSEaKuUVJ7PTXZdDPGxZovnFdVvfAiqLWrf1KMMWr77hQrGjqntwWVeHNbGnFgkuTtAffzgtSFv57VcQ",
  "key25": "5ukqWaWskVSmiWU33WKj2p5oYneMSMKXSdr3RyTTFLQ1HeYD3ookkgxRRxbm2XmHKHy1HxBhVhrdKVkMapbDHu12",
  "key26": "64yMxGzGxdsqX9ENM2EhnM76Ynmrc59DswgnMjtRDrQs1r3ZkhfqXXJrQ5vnaEiAXjnX2P9HwmvaWuoinHE9YWDj",
  "key27": "2SYkeajaJAdafhVd2iqr2HymajpVef7gSRcjxKSYvAvYVh52ZXmZ1XQcfe6KYgZj6zMidHSW8rtaXeJQBKyUMRuY",
  "key28": "jvCpV3ARvPVZG9hVd1rspt56f5ZhXwJevEm9E8YrPSoPwydcpZmnrW8WygoVwwg8BBwGi1qmevqLULecnA4B8zQ",
  "key29": "2K1gD4LbQxbdtuD4wmnrdev5b23eBbMPfEuSMQJcDnPw8zSw4Wd72Sx7PNsYVUz3DqvqQC3gcNvuuGmivY9fzmoo",
  "key30": "3wfZYA4qoZ2RQKSyxHyxcQiXryHHcbVF7u1K3JsafCFYxqEzcEkh9PqYzggsHaunaE3Y2i1CUHswb3xc17NKKPjQ",
  "key31": "2xKnUk8w7QXvh8GLh8fQoxaJDWuhuBEUnwk1nfVBnCBBBPXGWJS6fWtWFrn846CdgHJ4RxiCL6UwK1aEpPg5mhPq",
  "key32": "4WGoQNCyWy9xEqgULXytnkiDk42wfE1LnNFP2cfrZEWLVcFfQYerXKJfhxxU9KGoUDxkZ1QfqvuFPooJiUKesv6M",
  "key33": "4qn8jzu1KGp5mmvv91Dj1WsDuk5YGtysEBtMNMezePUApaMqWWyPb6qBbtknZfBAEyCg9Kcj3kuMfAbyEzS2Ur49",
  "key34": "W3bQjZtGi6omdAX1TN99Z5Y9P2j9mt9tcDMJxbtpzvew8BzY2wTSnVx4QVUxKK1j7M6rTqymNawG78sW8p6EyfE",
  "key35": "41aVGsLbsCKHzU1f4nmt3BDvM5fi8PU4dsGJweCb8jinqKzLphUBXxLChr2qUL1EV93Snohauc1EzoumSy4bcvby",
  "key36": "4ZZHkj1cuisusE73caGGYy66hMsRNVha9TvTnJ2FYgNG7ACVL2EmvzUtqmJ18mFcSML8obcDCmK2wsPe2GeQwzrd"
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
