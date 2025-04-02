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
    "2oDgHjpu73md4CJyTUAmqP4BxBhvpAJgwDjyXCn51mUKUVkAvrudqmHptkeYsER7ES2skhXWhoNJzFgRhdT8c5Rd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d2freucnPGZpi6suJw3HFFcvtiDLsjq35AWhHpm2mvLJSqFY7fdXarcTVBMSx5FTzxWnZ4u3tRvUybLB59BJz68",
  "key1": "4yoGjMZ9FqeG7BDMJp9qSaZth4xKBtw4RkAYL8K161U8LrdhVmjswScpxLJ9wPjgoXzdBE7tk7EsT1c2pFsAq2xV",
  "key2": "5pi4DxXafH5hH5nktDy8v47h4DCx4EVTwU8BbZ8gCKQBosj1njyf9uGWp3QXQgdcWEH5fjzuHSJxro7oVe1fZBzq",
  "key3": "2vCxBXJuwhrsTjsZ8L8Mzp58x9cCAuQZEVnpdLx5in7b5otNrLYDCTQVwu3zGdTGY75UNDYgiyFY1DeBzb2ymFND",
  "key4": "63zkt9UVRY3tSdqi777XMSd7DEyQjnC5nmVUQ84aLKGJ4nM8vyynoJ5imTu1nBofUfXjgQ7Lf5SH8gcsPWE55NT4",
  "key5": "5eoXor1X47AmF3gxmWA5usHajT3AHKWUQCyT4JTsVHgkZc31bdrdoW2FG3spA8wG1zUcPP9y8pB78dYq3Eet6kV2",
  "key6": "551v7PK8GorB4vHvbbvJa7c8aFdSUSMTXCzEYXMGCSv4E8g8XVvw6jS5xL6Ph1c2NAXPHjuEge3BhfkQmWT9UWjn",
  "key7": "3YQNXxtVvJPvkgZsAfj2CZTaLF4Mecs2N48UEw8YL226oEyjw24JmkhNouA568d83Ac9iaFb2LTyRR9Ga9zqJdkg",
  "key8": "2z1hBMumvqgv6RGEnu4224e1pHYnWyW2w289oW1rveJCzDzBRrjYYM3TAjtrir754cVWJkKsYa8pn86wZfoPGxE3",
  "key9": "4s5C6FoZmRYXU7oPiWgpD4b4564NRRjkQjbkAy4ywjxtqVSNu4YJZQkBM95pBw9qHUQUAiXeNeQXQrbdfBDv2ecU",
  "key10": "D812tGjb7KAWkfNdmiP6pQm5ofvSYws6XJEeBkBiPqgzv8dPx1rLGzdoLWTRChyf4g9HskEbN7DFkatUz2qosoC",
  "key11": "25XH4eFGxkubsEAQQzNihmwPD7kQaekazw17k9bk3ApLKyDuM9oqABMNEWkQEqUypZFCeWVR38YdYpP7K6gNmkw8",
  "key12": "4xSmUD3oWsn62U4v7z737QnNZRFfWsvcrXELRQ6U4As5t1EAcjyMzTkb46UBEJtGfN39XMZKShm3GTjh156hiQrC",
  "key13": "4b9FgMJgTzNsjccTLYz8FGnCJp6vVNm2ZF8xVqNddKx4BZDdT7ULqBvyu9VsTFp7fTktapcP93pdoPVNN7DRMrpK",
  "key14": "5cCaJWxsEnpac2CwHECCZuwL2zrGrrqFJiLuHv4UdKTTsBrEwTkNbarUbQzQ5Te4ShHazrAGTMfUDcm48bhLwCqH",
  "key15": "2FhwAotYXEVfKMiTbUDsQ53HQojfVqKFLC2x3AXFyNorE1E3CEtCBSwxFzQE9ZUWoQvBFsRuY21L5cLY26Tbyw3r",
  "key16": "q1SCpURBLKrE1N4SARCyMXRJg4MLXQVdjHngbHogyLC35pjadXKiXwW4cBwMDaVp8TqbEYeurRn89nMUv4QkBVm",
  "key17": "476mFQCcysf6emAAKKpBTj5WGefivYS82oAUju1M3rB3u5Frsv8NVoaezdSnZQfCYe6dyYPubQGp8uN1b8Ahsbha",
  "key18": "5Xcmxju35gy3925o2dZat9H75KBE1kfCBRGjf71H1dfcLKbs7kW8M5FRMsd5RdHVCav4HPBTe4Q9rHCGQZt4NbGy",
  "key19": "3agV3HncAtxH8GkjqdQ56raL9Bq9HhNWqg3w8b7zbNRB3S4Ysnq1e8Yj6UnT2A9LjVY9JpcVHARo2dgw6RwPqA8S",
  "key20": "2nCTy4eAGyyNSTFfbcoF41L473NKorpVY2rQujkRKiEBaajvuemVTFo1w1XBmuXEeh8tnvKwDWLuVuv2PNRK4gLD",
  "key21": "bTPAmBfSWYNMLedkkNeMwY6nj82jBqGTwnvemmGw3zuDsab57Wf8AW7qQWiXz45neRyYzKyKQ1nunBGKF45aL7C",
  "key22": "VD66qXJFSqW9Lrw9FemZLZBxZK7AfFNsRzptdb9cpfqchgF4EMFH1ZSXHF4MMa4c1CR3rQfPdeSrQconsKD1ZqJ",
  "key23": "2X6EysT4euGnQox3L2KX7rLs7Zv9Q2pJWYcCuAWbN7V7JL3kjuRrHUFr8PMC9RJ4pXqC7RZUmoaVnpPHYx5p2uE4",
  "key24": "53gqc4WwGsw43z3JvWKLNS8s6sb9ctYXxbQUPyuhFMhJ7ycxapNpMtB6xiXRCwxgE4aJAJZjm3jAobnLMW3WvSoh",
  "key25": "3Gzw6avULvpEmc33xYTEJ1PMNzm3a667Scz8fSPqjWktSS5196cEvBUk8Qa7HThAjyc4vjg3hQPxgw9AuCzsX3jN",
  "key26": "4jYdQyG3WTPisKWGwi3mAXGfrE9BvNUYDEc2siBx9cE4ahp5QD1tbcbXc3rXK92mzbbqHP4KJ2czMoXgojMyWwHL",
  "key27": "2uZLGtGVVcFU97gdZ2Wn9Vth6hHFi4BCJxgcz5N5CARMoCT9QYZWKboU59Q9MFJGGFMc9ttu5AADVxhZqnRUcQLD",
  "key28": "2WAKRoPGy8SDMTLQygYiFJJ4UPnHSFkDGh5pF4Aguq2V3AhAUNB2r9v6PavT9qXAuv9n8ZNajZz6K9jG9Qmp2hyU",
  "key29": "2Gm2WVjU6tc42L61g36e41rnhrkoVnhmG2LZ6BESuRXq7MKzsW2Td1BzaVRw8WqYsVg7J2fCgbQro5LqdzWzMBdD",
  "key30": "T9Say41kveUHwp19kYGUegRRT8vmZA19yDiyGTAB6ydZuarHRQXG3mE75Bw3bcqmhtdYby7wsj9iPo6b2jbsddH",
  "key31": "3M4U7GeJpCMyRQ998SJyJGxiD8LugKDyjQhM2pga8kET4BrXAVVLATPLc6uVg7e5wceoRie94NozgYv6fJhF1759",
  "key32": "2uhA7cpTovBi7aSEGTzxPEHRZH1pv72dMEkJe9BZttMPoLMzQQrCBVbE2trfwjgJgAEXGaemqrBS75w2PEzMbdF5",
  "key33": "3KFuhbaXGTGKbzDX8sWZrjHk8ZYnWhyNy3pZwdkjWVoEimiH7bDAEacTJdLkpB7rxMjHxzS7zzhGoFxbLfZq2xVJ",
  "key34": "4nsx8i8WHYd97FZXxqbaCjhSZP3hQAbSRet6ZSkPXAWJQc7ebyPQBVhBy2S3xyQpeuh2FSmEU5PkGvH7yNeAvM8g",
  "key35": "3oN4o7592wruscyqHocMnVYq2UFFntFtZcu6faS1A6JTf46gru8xwo36eG1fEyBkG5R9CAuekUYQsG9PAxU3cu9o",
  "key36": "3AZcNyGHuQcx4w6fSExztkjFv3KK9eYXndgy8sSkkSq2FLMvV5sMx87vzgRXLKK2LMJGdHiBebqvid96pp8bV8qb",
  "key37": "Vm8Sq5QXmBq4CusqnhrDQvkDYMgZkTkz5yjxnRfxavBRk9Whm9K3UxwRkGLhcrDtYbdhpYbu1VzhimMBW6aeNnq"
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
