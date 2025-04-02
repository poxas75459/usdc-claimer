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
    "5Fa6vMTYgHqXbz2hxVFLpNQ4v8xfeBWKokgDXZqoaf5dGQdnbuHjS36tciFU6BephgWrMWWVB9gZhL6Dvic9qrPK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BMSDaxNR8Ez6VeXQf3BFEunaN6xEx9uhFKydXqTuNb8S9PDQywDW4mUSpvx9qsuzGyZSETdZnLLoqBJPyLqQnEp",
  "key1": "tLSwCnsLyfLnhGRhu3RpYCJfRiBcnhZHfvX8j1go72ekqWtUfnbyCYsLfLT2vy6VRmxmpbhU7DNLnB9cdpCMeFT",
  "key2": "51G6mHjK2DtDDTrwFaEeKnPrHyWzzfzHj31GsqJgBx235QD1GLDysHJzzKDgGg5b2auFbitsxq7BmqiAgn5Xd56h",
  "key3": "4Rd9dLgaBRDLXy9fpbs7J6b4fCmscxyJ2YyJChFRaZUoF31E4qpGHV8Q2iAR9AojDa54JWTVtRvRAZXi7MiPw9iz",
  "key4": "5f4CGFY3YEHxPY4ECNGGCgRwzPuJHi39Zj2J5QZRhjs8pMq7vZFgr87dy2pssMnj66Z6qr2rPxDNDW3QgjkBB5iv",
  "key5": "5PSfDrSgWfEtYjsipLyacwLLWfQUZy747mCJktjvixzYvJ63Tad7dtsPKHZCp8DLqTWUdLPmjH6PC4SYosvD1w9r",
  "key6": "KZkiniR5trpiyiAMgXkdkTJXNjzW21AsZ2Zw58p8ApFb4MWpoPP1q9pf27E6njmGMGLh8irHwp29JUKBJ9dkuYa",
  "key7": "2C6z8EECHxVcV9KArjFeU3WBaebSB7tpzoeuCSWXoNJ4PuUBk4rVyhAffuBZyf7VpJTLwrmvRqBZeYvK9onqUG9w",
  "key8": "2m2z2cs1GWojhratWtjZ6KtNcaP7nWG7jkZeRZ6r4G7z6jwspMGz314sf8LaZNbFQZiLg33L39SoyC854yDW85Xp",
  "key9": "2d8ntRqi6BP7A8vH6goF4PiCd6ShtWqeVsoL4x7oVNNRa3BjTTa7ux2iHFwxgFc4o3Cph9ezA2KcR7Lt9YL42oLS",
  "key10": "48t7nEyrDg91uzCg6PHXvhnQn6LryLe2C7HcCQncKpuGJfghwtADDxdh8wD62pRx12rU1sv7ngVPg2SNhFVttuCx",
  "key11": "4xu61V8PmtQgthBDLcwoBRiRrwfqedZJVn7XaLTfE39EHZJFEubzDsVpof6oBhMYZtJgoJqannFqDBLkte5okDc2",
  "key12": "5tfCMN2iEpoUL5mmtRi6v1ZSQdDmWgsVpajTd9t8stcxuf81UGBVf4KD22VuB3HkhsUtGyRRWEtEMs8GscrsvFgL",
  "key13": "57yVY1ouUFquCR39jNKzF9ghJA3d4oKWxevYA6Wm6nCpTdGVBxUSJU6DXT6GDyj2A4tc9KMYtRTLs5oFzMsSoF77",
  "key14": "5haQUwrzSJgYMW2YLMpqH6JnBqFWd3bprF53FbQpqgJdjW8kMxLXdo1iPEGRWweE2MmyJgmoXubtYYZTT8GmVRx7",
  "key15": "5dFf1K9nAZqHcxekAacfFxCBr82DXsZX2vZ1V5CJN7Dfbwjrc4Kyzw1L5KCSX3Ty8pNMBVKugEkcx5nagP26eebS",
  "key16": "38sMBBfXTdvZds3BPWEXw2qEE8PDyoMoPo6jLZwqdzqGHxBfspB5GXj38PP8FYgLn4iwGdyyk5N6wYpJ9C2GY9Nn",
  "key17": "4cM9De4ZX6KdSFuiAYZEfbk8qC7meL7XM1MtRPaW6JXN3SdUfzrZKNwmjULpy5Kps8iAhNteyGh6EWtdF2c2pLEQ",
  "key18": "2DBsEmv1bK7qb8GCKMbLo2k9SaCw168BPaCWLoT3dWnrK2aRSv4myAjZAiE7gtrjkhccRGenFAjcZmCPwxjZbmFB",
  "key19": "5g3VM2mCRkB7YwSTuo3sPkVCvybUxc6ZqLkpvAgNb2WyKX1ciAaWi6eoGhzHjC5AKEWKyfMexoa6rDQXBbVvpHoy",
  "key20": "4PXvk3qs55GLwSLqVXBuMWuUYN1qNedX2AUMCnNihyoB87k6hKy1My7vVL6mGt7feHW9SqVcNy487t9ZoNvYHXE1",
  "key21": "5WxYxTMcTHKe8f19BNgnNndKmXzJy5qFGBNckL4EM8WxHzARAXFWdoWHyHxQ8VtBw9FRt7dvSZQsA9Aseq61kHHm",
  "key22": "tMdHQULZA5xqg9aNC96nyZMcdkoj121sAcQskrAQHJJS7e1adMwCBzwg17PFTnoTGYzWfEwmX1xDqTQhe73USwg",
  "key23": "5TredawW1bT2hpFt4Lz51bXDeLDNmSkqtAuKvocpjZVsuDLNa9MnuL3Mi8rroZdXTPasc2sbE6ficRzAWo911Hwf",
  "key24": "5USosxHaXtSfRTCP1hBuJapGzg3Ji5N3GB9CRnphjLN7ex5QSd5oYsHxvfWR54aKKhCif8VS82vZZwn7Yf4XedsP",
  "key25": "4PKtTxMxvwiMsWB4nYbZHdjsaWPiaDPMoKQPwD6JMRaaNXKaHwwaYazHT6JCxuaDCpS3ho4xbywi1AaUr31dJeJv",
  "key26": "3QPXmZ6ZztNQL8JMzdcEr3TyXfuvZDviWjzKuKot4dD4Psp3FetxzE2qZLRhBASd2s8BaToj6phY2dhpD5iV4Erz",
  "key27": "65k9ZVJjqxLLVrd8AbLx3vUm6R7KKQD4WdGJFF1z1pKhmmyzM6QMxJtWXnJmEkMCqhrmLERSJag1XHtKjFhbiD1c",
  "key28": "TCHkmVoy65JnNVUoZv9MdTNmzNRXK3EsQprbFi2euiqZNAm7kuVaCi8D4XqaFr5dnEcqy43BfYjEo1cNaiwQYK7",
  "key29": "55t1oKJ4d4vp1CWZzaZ5u65GYHY8CgduSuvTUBZoiTN519TcRvuvRKurQJqEoPy3MEJChAJwBJqrPCsEVcpWCy7M",
  "key30": "5LbtyuBFoPpWD6xW2otqrAbaXmBJ23CWMhkjzHaS6ccyum6L3Kfbj7qUd19Ynp8NiD4iFY54QGaodQ1vXKgvK5Cu",
  "key31": "4xVfwMmQ5Ky3TYDHjcjGmp66R6uHabFfF8Y9H849BSf4kmMhdYHTTc6z5kcgeaWsed1vG3JNNKmZndvQSJ8aDMMZ",
  "key32": "22JwN5BSAgP1rVXoswpnhCqTuThrfHVxS7DmBrm9DxYRqHYrnEjjzFjRAHAKCoSp95KnNXB7pjmJpPiWieMNF5PN",
  "key33": "ro9mabSFqxg8d4vj71giw6vDUSadNKdkSwDKDQ918J7dGTfjDXA7UrqrRRPBsXY2YRTJdKCZ65h4q66JM6Amnsp"
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
