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
    "EszEHvJznWvQ7THKCjuHtCY4EZBfKTfzCwNgmZhvNnF1PmKddxbeCz72FGWCmq1hDrXfBdmiN69XgmXqEoVvk7q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yyC53WKCoD2LPhKQYB1EVNPvSmSXuthPCW6HT9gGj3aj4NzSBeYShDocXfc9MpcnnSRMeyJXgtcsHYWtisibHpa",
  "key1": "24SHjTC2He2uRGcqhcru4UPSwXyDrsUtTW4NFbreceP74pvn4csqcf9M3YknNR6ZmntTg3km7NLPQadb8kGrddbF",
  "key2": "ogBXsuprMXnWWZgAm7ceNxjekcBqZjy29dSP4j2BUWRiCzh9kgiZmnDPXUioaYufS8FEWxsabc3oujnNdZgu5rG",
  "key3": "8GANqSsVg5eN1JNEEynP3aC7SL8RtyKoHzhFmDQfKHB9FJVHv5MUB8bmbzzkEJ5GFyXBAP6fvHuknnhv5e9Rr9D",
  "key4": "SRVydA1kCP9G5CYARG9ivxXby5u3SVHRgHqTW2xnk18LaD3KoVWXxPM5qfKagHSpejMaGT6YwKmaDt5KKMqjwdP",
  "key5": "TqQzq2c3kgcACGnjFoZRKVsV4bMiJdeV6Dcb67T9nM91ZvBSm4J3jyTErHVos1DXxV7gHjCuxrFCw4yhC4H8td3",
  "key6": "3pqYVnao6RSgVjHhMwKUPFpfnBn6WB2WABSofufJRhUcjC8yCuC1nuWejFNkQmJg5RJHkiYzFsMabvYmRuZNkTB6",
  "key7": "2qcSHGRqy5UCu2jzeNwfL1f2D6xRxZMqAGknqzQM5wnyxssYaWsH6Gmdga1aJXBdf2z8HDyvTRHfvo8pWy2TVnAB",
  "key8": "59GkarQhWYvbwQJsnuuv3rftMeer2McnTiqZnSgb5U1mAWAEDKCmcHJYKJRAzZd6nUZAwqqNuivwqvEtgd3GaiJB",
  "key9": "4JvDiKZKmj71gBTzVb51Zmnr8dPh1zeLjxZ5KkntYZnSfiH8N4FwNH7AS4hBYUnRw2berbt4E3cfWxvsbh4oSJqS",
  "key10": "2LkjHF2P5rJSznmiu135yYn1h82VJtThccAasbEmZrgH97AGRrfLz6Wwvoty3UBBdJciugo4NC8zL11Uaz6d4nfY",
  "key11": "3F953pPHzg4WV8DyRdXFsU5zPY4NeJmRNWTWdZYDzNdGJvnwdNmjtPp33SxdSRKd7a3nBne7LLcFt9Z8ataZnFC8",
  "key12": "F43Rd3GJ5VMdG4N9WwoGDXMK8U5mdcaS9hsPz4wvQ6LUKoCrWBkydJgeeRCqwM1NYjTVffLpvEcMz1YTuNd39cr",
  "key13": "MHWFoQAQ72ZEhwJTaRsUdtsXhg3uTgHLsFgXqNX7MEEmjoVaFdGA21e657pEp3TmdnmeiJssgrff1ECgVJfnywp",
  "key14": "4AHiiqwTeRBp3SLCABgX3xh8KAjiRUfF1mT9Rn1f1y6kaUYRXe5b9LihL5jcocPVmsKfawWvTmb3rLHscVXuW5dL",
  "key15": "oeTVHtEGmjRAEKbEh9xZYLZ6GGeXa1QUZkRtRgKePqJYbxqqkxfSLkEFyHQaNKi5VwRTpV5Zcjg44ASXwKuCHSF",
  "key16": "5ZBaiYNqCv3FLVKdGx2ycCRr9AqbsdBDLbd7ehMzKaJ5JSvNi9knx7Rv6v2M6ie784g9UhUAusXxJzHKTiVeJhfg",
  "key17": "4hdw3axZsxYiwN6Kb1cS8FyEXwpLYxtWAn6s68HW2uj5Sy1bsKkYoEzVPcvtndNGiF9qteyabUxokVZtFnqVPSqH",
  "key18": "4NjrYwRaFQMqcJQ6bhdtzPXGbwL4qtHYuRcnvgDgg3fsuRrsX6F4LANZj99MJ6jUwC3Lmwy1zC8RtKXyN1p15mC9",
  "key19": "KXq6z4t11tUiZYVPhvXo21ECZdQoDwBCoQxhuHXVeinkAHF41PndBXK7r1qyJ9JG1NMafLoKmq8FFyAp4ecDUJc",
  "key20": "3EJqw6zLRhmcz8iMwS5U7HExncbt1Jy9domLkzZLvCjxHtYxJeM2gyGyMoKTYqZPw1U4fLVHbGdd74VmuZYwTcyG",
  "key21": "4UYuoEg94CV8459vxrVPMDe85Ld5A4yv1sEXPX8VP7qarY62TtM3FWPsD1kw6so13vSYzHXsSiHJHEHNh7QC7hgq",
  "key22": "5gprYMWZp8brtKTfQ9EwVooNX1k2AKwm8RhuLS3n4rZoHVRB6h8ZsEYJ5nBhpGfiKpCtg9MbpxdPFJ24D3AzDBm6",
  "key23": "RwyWZAEaKh5j93JTL6sjkEq6QfYu2qRRMmu3F6eP9TiAZN3TNrnifivyheuafqcKVvLimowH4uuy1Vmgd2vAqUs",
  "key24": "4Z6wkoQYMAfwyevkuj9v62bpdn4CSXUEXq8uNsunPgVeVWF7zPAm2uZUyH86ShKwAEAVW7h1iowuyGuPmMS6JZyk",
  "key25": "RsztAB739oaqJrafgVbdw4qSHQMqEBgn9bupcdC1saJu2kW26N1uk2dwN5NZpVySrUsg12hBD8gTSXEo6V2mWHy"
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
