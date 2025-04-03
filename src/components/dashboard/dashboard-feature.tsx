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
    "54TqCBtLmwKJpBGzZ4BQ47YXjfzGDLo19v9kH6kaFUuyUMCRtq5wgM9jDdD26KqSkdDQGvtpkXETxPdKZ6PY1gEj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RerNjgzzdq8D3wYsZbTyNHA59XYEMTGfEJfP5mkcdpVFmXA5rnYWBuwXvvg4HqqRwB3Dw8rHH9bcZX9kXbJAD6X",
  "key1": "4v5mFCzYecEA3cPuV4BWuYkbCWSVp4vHH41Qx7fc8czXqpvaevrjJLTjFy4pt7TJMAgFLRp1o12HUaNn8vci1AMT",
  "key2": "w3CLJ9kEiugXAkwfR4b11wj8xYwpMwA2vvrkhg55VALEuo6tgnmQgdf4WXZvEDBtViYW4R9Rk7LzoZxP1tMvXsX",
  "key3": "5ogMvY24KucLWFiwurtHUnvGBicRVmjPYM1AsLLW6DHeshgNCpj8DN2wZwdTPUxkmuemH34VY8DWLwx4Fiynyzuv",
  "key4": "2sBakaU1pifjyK62SXK8ppAtfriGqTUsXnwyS8UCkT77WKgHnWsXtiB33RfARAAmDmzdpwTxtQEr9AnJHp8BhgjA",
  "key5": "nK2HyTdj6YxY1iK6PmLqKc895T12jfTXcuGv6997AWBMM5HGNQnnaHkD12yPBhYoDVEDpgbv29GcN87zWJfw8aL",
  "key6": "34PKjWjD4xJukiwz6DpcQiGguV4rAHtyjvP1K4AqpvYQh5XZzzoW4FRs1Vb6cMDMHJ9BwA5oKgqfGgAM3Bv4Gj2q",
  "key7": "HCb1j9G3RipoEo29YiwEPa8DkyA3w8mZxbWEZ7yz4Y3t4EU9SzTFxxE1N14AwrD6U8ntFGu1fLnfC3U29cb2aHs",
  "key8": "1yYjPSc3c9diW8HQuURBnx3HNkuDpDcDTmBYC7txvfvLyjiW4kKPYLWhfFjWdn9vWJfRJo1mzMQZvMdKRzkiyfG",
  "key9": "5oK3m1PdFDzsWm2G6oaJVrL72gf5mSw3mpMeoqwkEEKBvgsNw6xVurUKdM5cWk6ByX6nAAHumuqaHS34xWzrQupz",
  "key10": "4v9YE7vjqocyoSbPBstenQ8uWeCwVTFXujNktEwkKwWWNnLJ16ufhW6fDiL7aeEKZQjUNKt5zKUZM1jUv1qPUdAY",
  "key11": "41DwDY7vqo5YhfPUK53r7mpe5zHvzDYpCt9qBqUjAqQeJvpeVtgAATSb3Wvn7LGLiE2EozyNymXnYkuKpPyPmgUN",
  "key12": "3mFqmzxsHzUFAK9mTAJnas3BuG6spEUEz41xnpcjyzRLezkq4ivBysk5cZrSYNoUCiQVLf6ga7dQK8evXo14FDnb",
  "key13": "3iS6banHw8CTXcN9ZVkYSmKBobuK6NWqvaES18779TjAH7hZ8AMBqH8zH6KfeKTmQmknvNyCHgjXxZHnMYEyZRhU",
  "key14": "MLajYA3e7RYikkZX2wwfvUCTRWLifRjC2fL4VFfZNTrQFvqRoGduf3VYsUsZdMLpDpQ1uJggNqhypPr358GzZ5M",
  "key15": "acDBRxh7ctiqWwAjtipxmFHEyJzGtfQ38pxjuGvEeiiA1epnvZ2dadqtK6S2Jmvt9jUWhnDMLZ1NsiaScubKHiV",
  "key16": "51L8tmVk2sKV29LUKCUgbTx45mFcZUtnaKmbLf4aWGyfBM9XCppyYFnyiDBVvtLp3tKqmjwhDySJywAMdqwDYjPr",
  "key17": "W6xLK42s9isCbsahUGkkj8NGiU5BcdVQSM7U6rMxGGnqzDVhsF67BtPJ5QRby6ZNUXK2jDsh71BUFqfABn3JunN",
  "key18": "9d9gAEQdhmbRAJbjVvHNt3weFTWqijx4f1pxpfBoJ6MghSjoP9VNvEbzxfcyPpwsqbwJ3sexGXQD8hsJPXrY1VE",
  "key19": "3B1oMeVMs5Qvkxz7mXNC3d2FzvsrmTScAyyHMboHX5UYA78LyCK6idcPAXc2grXaD3Jv3e22wJnEiaGthaW3WB44",
  "key20": "p8xexYPtSjw1zVTc74h7tXRvEHWGpQjUBc8phPfGKRaU59Ej22TewPyE1W5kAnzdwayb7ezt77KWfMZ6FvgM2U6",
  "key21": "2Prdh5bWn979LVHphZ91TMAMUn5iknwSfMkTGVJt2NgxBt81tRXCZry9YpKN3jK7C4mnHSfQQoUb6DXY8srJAyE6",
  "key22": "4SSgLHVnPpeTgei5qQKmBKwWRPjuQm4hMAQw6tGAKtRUKohvjG3GgPB31vhUNDmUrQ2ipF26JUCSbNXma3Lmzyrn",
  "key23": "namvQWxPGdMViGEezwurrT2nM9MySokC2bDbWiXZ35YUJXR5qa74eDgUDqntVbSxf9BY2a3UPr2oGRuJk7eE5Zo",
  "key24": "2ExnHaYVAz9PxTpGaARxsF1VN45btPXiDjazBetHveU92ririei6WHFtcY6bGU1jfmz45UuLaTuHzhJ24v1o2TXh",
  "key25": "5jboZi94C6HBmqi9afUKocmFRxtrZnaZvUnwHXWZ9oPLjqxVd7EnafZxebSQw378bx9F3hWCYxczxX7ehCdzng1p",
  "key26": "3sRT3BhELGjAUgNoHMSNVs4JKSpTWgwF7WfqiSiDrjrHXPRXpWtPpBkpuxtvJeuQHEdykQVPj2V2T7pijorf4Zis",
  "key27": "fGeeEWmQoFT27w3MNn6UN5rqzab3Ec93GXZ4Q4jYfMHnmh4cxgJFCeXN4waNtauoa4BtY63M2Bfck1ZsHTB6xwF",
  "key28": "4htJnAxgJGhHBB4DWTRP7eyDEXv1oB6jAv3cVEy3bDoqkPis9Rd2vZMAvbMjeS7Htrj6FqbNmUsZ7H4Eco74moY4",
  "key29": "2gThih115LLE5LRsbW3pK5yc9ZLiEC8qebNDDzKY5gGR2Ny3by6buuhHjkxR1ZpPhY5aRPzzmn9Goenfby6ekxZD",
  "key30": "4869AvKEwPswetFL3TR3Kd7Bjt7Y5eJoQJ4TzkeGmjwLjSVekj6ENVRihJtCpHMUqWfmGutLv2qMJzH4hiAfar2m",
  "key31": "W3JaYpCQWnrcbjNiXSywUJYLgBtZjVdqtmetHy26ZMcvz32U3CSKLPfG3tFqtRbbdyK6VzJdjeVkrf3RfMLLtRP",
  "key32": "5nBMdzyNEGLWNKL9KNpqxGuySb9RMFWnYd1o28wx6Hr8zvdSVATwJobHiMURiGwA3n9k2YnM8Yo37T15XWVH1sbo",
  "key33": "2Qyi2V5xLYTaNgGiJkpL7kcwSUAup6KBF7daV2CL7CtzGRgSYWDxjsYZjZDeuDY7uJk4PHjGFT7ezha6dXmimase",
  "key34": "61GbDo4bZTfL3TRdbfFchG9stsM18WpfT6E8g25zqJPgWDPQ62C8xMBMA2To1PzJd1D7kGhprs9BewJDTqcrf8jg",
  "key35": "56JYKn7ritZdPYbomVWgtRFs9E7aUFRCN9d6K37yg3KrwwpSNaABhYSRJPNpmpAreby4Wf5q6ToRoX6eGyBCyLSj",
  "key36": "3NL6XGL5ZxhCEFWXnecxRDqhq9bV717YgxyXQYJVD2vEib62vrX9znJx717Qdm33HVkYsKp1g6QCMGqe14smme1j",
  "key37": "45Fq97UvRa8iahQ691SnyfsKQQTYojV96o2Dd2fqbZxtgqeSZdW4TqBup5h2EKMuX2m46Ju71EbACBbkRYLcEF4Z"
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
