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
    "nzG3wXZq2akWnDwcBg7tW9w9gBjx7XH6QSbL77hVHosPRF3Cj6VeFXNDBxYbuNjeaQ42Ut7n8vKeGC6A3yCSLBk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QWurtsmv3UUyZqErAF2L5K5LQXrLoUvpZsL8xoH7nLoNPtiz7TeoaEWL5KcgKAZAfbAUmhnafgozC4W3Qykfbus",
  "key1": "36jRyQcvk3M9vGsUqMqWVWRHX83dugnRrTAotbKk2MoXY4e78EeWy6i9Y4T4HNHRpX65mpUVTiEY7k41GRADbt8f",
  "key2": "2Y7DvsaSFZnXYMRS1pD3j3U9Knr8ZXNLfrbSYFSz4BWDBN4VCr8zgtNKm1kXi3FxnBBPXKd7PBgq7bumCBvFosi3",
  "key3": "2fhSCAvCLYvXB6sMHAg5LW3Bc56Zo93VsPy6aaiXaaECPkcBqys5qN5rJSQzrVQgwvgEWUSrxh9SdSgg3hB4sBc7",
  "key4": "vpgzXKN6nw9BLRKFkX1nsrkKN4BzWXYktRJVRUCSk8bdLh8E1mqNbFv9gqNeMc96V173L7ZU1iQ7eaevwN3qhE3",
  "key5": "4ToNTy9NtQQueeD4pUtBXW5udc3k181mntzopbL2vogQynGUgZvzZVjbWPaQ3JXYSeZrFRYTdoyujB6JWVRtrXvY",
  "key6": "TAWBSNfgpibm4pcQNqfpmwAfsToJgyeMaTzAUoF3xTCun6NJahj6A3kSQRZB33PmP386vQ6wWMuhwUcTx2nAVan",
  "key7": "2JDqvRv46xzwfSVKxEduFiCrUQv55gyid1CUpRDrsEfSfX8SL652hY2ymP9rE18BwbqikjoSA5gCsGXTYqAna4qc",
  "key8": "54kbvE2W3w4rRzVgyXLuUKpNca9qGcPeg6MoenspsZqEFYqYsSDuHuczWwnjufYU423TVfbZMaDvjPn4RVC9DcVw",
  "key9": "3LDy8s5ibNRFMi3SrRfiQ6YAXyaJdJQ9ht5rNq9H4m3S51kczg2RLzT2JRFQ4pJohPDNHQvNGLbWztY9fq1gujtt",
  "key10": "4VmUYzRyeAdSFRnyEkXt42dqCnUSURV5kNKXBe3o3bsRATjSfHL11oLg18bYe1GYKVwRN9y1RPwTChKscD1mdsAT",
  "key11": "3kUKr9Pv5sFeUDaTtzF8rVd23E9YfHf3YJnSDQ5iSYjxYD7bBXwHLM1GityXUQso4c3LZxx8VGeuYUSeSCXBHA5q",
  "key12": "c6Ms1yUVxbDeNvbsYt2yPDDXX5pNEzvdGK6d1fYhqHtNbDgCSg7TbsDLfvdYRkXcesBzBCS2zVzdSBJxBVxMgmX",
  "key13": "5pHSxj8FS8aDNqGmtRvifNuatJ1oBBXiESdqcYm94dXctgS4jmBps3For86cQeVxBCt9M5P2f6fi3weVZ5rZhPsY",
  "key14": "4G1H9ef9S6nmEYnXBm32pWsxMqhGUmHyxPwZxXXXaxf2aanMZD6ZhRf4LzZAbgH5JoeZLaNVBiDuHeXAArF5T2sc",
  "key15": "2eqxZjNuTJshnCUH39btAkg2GreJNjmxz1CdCbFTEkkG473xMR9Svco8S2DivUf1xKy45GvceM3Y4wU36bApt4x1",
  "key16": "5DaFvfGtNmyM51F934UQnZZvt5p42iTw5n43DuTEQjzm1EttesZXdCXE8Mi5mYnHHk5LhqCbXfd6G47sv9xB693Z",
  "key17": "W8TkpUfnY7ewjXYYLL39uf1r4uhG8pVwVYFBm6wr2MzP19mQxxyRybsAur3sgTZ711W5ZpEhpSQAo34PSqa2wr5",
  "key18": "3kyVsZna8mqS9tzPBrtnZzcqtkP6Cku3MnxDm1m1Yp3R6ySXY6HCumKPBzvPkkZKyEFKMrK1RqQPdJYYxoAYNweD",
  "key19": "2N7cKRp9S1XdXG9pVRzZyFTkMUuQyQsjmyeUUQdwguc516R9bCpMzS5JydjojiFuRbRjHPM7s4fNGM3eH7dn2Vh6",
  "key20": "61SXuQcRZ5Erg29cDdJtY9haVTu45eoPH9tJfi28fPQcDZFy81Wh3LpvFdwyu8MrKHtoU2Yxdecxjdu9hnrZPMfT",
  "key21": "5jbrCwKfWfeN1v9aduK9TLm5Vfu4H7yYBvmpUw9dDtF22Jv5dngQBwrXS2nSs7C6qMo6xUnNqgAShxkdBk9ynXzi",
  "key22": "3ZHDA7xxxmZm4ZHCZkPj3nMz1taJrXmB5b42SUYUWBYgbwLZu6XjmyqWMheMaXf8zygEmoJ6STHUsgh6dXn33phg",
  "key23": "4TBgSXgXQyHPqdqZdTyffSx9vir8VF4otHniXtUck2GX9mSpXkxwuK2ZNMxAWSz5e217YBjL1gxzKByiYEYyeGXW",
  "key24": "5TWFdd7gthzrwTH2RGqgJGg6Nf8KmAio9DhCZuvZVbHir4JoCNAayJMhjTw3GB3eEdFn1yiDgL2mgJzJwUTofUhT",
  "key25": "5qqoHBpgFu1DiDkVDLT5e2kVPhFmsGhWxWshXNa4cvHPTsJdeEC1ry5xZxEA7ntAMzx1xfRuH393RoDEm3xhoZiQ",
  "key26": "FQyPpzCciv25p6io1uwoUScPuLteDEiFVYf9rtiwvEACQyVgfYFhgUJbu8kL52xLynp4muE1qz9AYMegGiDw8Nm",
  "key27": "EfcvzXywPwwJ8GDZtKptAEmX6d123j12uCZvuMVVK45DnErG1jCgzSJpiro5PCy82nYADsPNX97u7ahJrKgKsMp",
  "key28": "27pUUWpuctCe6LD8UHH6uQFa6kratmKrRB6thAkCDny8V15tXEopdZNwKtd1i53iLJ76HjRdSboLM3gQUbEW7hZz",
  "key29": "cRssi2Na399HR7xtvZ7N1aZYkp1RS3oCHPs48tQKab87uG4drLavPvbC7tF6aCNrHJxBPnh36bWDkcJeU4vvcj5"
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
