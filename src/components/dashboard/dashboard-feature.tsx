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
    "2G9BDsuwKAQNYohdMNdLoNcNsfo8S8wK6fj9MhGhvA95mTbkZyfjaafugmrb85xpn5pBeVxpNQUbHaCQZ4kv3pCu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VW7A3W3tZdLJtvXCGVTcYpXZJBUAzSWyMNkCcBQeNm6GtchsJdKbymr3YNuSE8MM5trXpp5TNt1aRQcWBv4QSy4",
  "key1": "23RRUZyjuEgv9pwVBLAgXiQcCFu76HhpobLDHQ3LKovjehrA3ZmUquFfN9HDRQrHLqvXMHYAWrNDNtT24wYT6KtD",
  "key2": "465J1kDsq6aU3f5UuhuEvaSBiP7vBhitfynAVeqfmY5RkrTfNVqM4i9ee7QdXkx78Sh7aUcxuXDeu74YKBbnz9HY",
  "key3": "3HEhCfbXQu5CWjvp7u5b1K14XaBwiDDkeSMWJwD1LB9U9RuHzHCa5j8YzroDfZuT4Ci2ocDi3NkHX4MhNgQp7Zyh",
  "key4": "2m7238TAtReKvo2z7jTVG8PHpZFU89cBMmmJjmURGhDdvSitoXzUxFFV84SwFHVNSsFyoWzrcHRQjfM2edigAzPF",
  "key5": "5vGKzzrqMPkk3Ww5Lu7C2iRouUkWtkfiosPX4DNMuEPJq1tuqTNbSrNfivVaMgkAB5BfFmKogUYnjXjRVgsnRr3C",
  "key6": "5fyjpiDSyFfTMaiXGvf9mzP8U55LATfhwShhZ2aLaMPgrDf8ggHgemsPKP6bFRvvHe1nw1crjTCSMbE5YhQ3XQJX",
  "key7": "KAka7bt7hbGsg1qJ1jY8Kz1GZhAVnjDRi6gNrwUw2JsFKqEasm3W8ghZgfLj3XLRYm9CMF7RMnzq5EwUSBnJVsZ",
  "key8": "3ZHcn7NWrZVwCS9peZKiAamTQq6wp72ihdgE6oQeEjHuV8BA7bEvX9BXW64CTV6FTwxBZUD9zW7jK3gT1KFyNVMQ",
  "key9": "MLav2wra4bDE7fBHzM2PiTKSL74BRAp49fhc4YPPT4XzuABRTSYai2omm4ciA9WjToJq6PwGjwBg59eV9RQQWDs",
  "key10": "41JFQmQuixytZyPw2vEVPgEnrry8mrew4icVJ7LMWwVZRakkBPxhDstCJQfk81uem8ij36i7ZXzQorXwtFiXL8Qf",
  "key11": "57f8XzToHURE9zKAhxb4KakvRANFF8M6QoKsLTu9WhRtvPGrezrH4enHKftgPHfvy3g9a9jLu9VJ3GYzt6C531Gn",
  "key12": "3bd4C7N8ynXcE1asaNMBgzh6LJRSDuPXSamXY1cWtRopEeETXehwpwRPW7USU99jFVGLLDZG71nPn8sHVq64xA8V",
  "key13": "3qBTae4tKWyY5CoT2bBuPPkXYVqBbdY6zAH36GnfkeTPfKCvFHEE7vG5qguuUATSCkP8TYm5TqMYAcAPT2A8yxmn",
  "key14": "2w2yRLhVHFSk2pgKCacjwouYEMMDN8KSX9HdsfNvWTF9dph5K652rNn8C5faKHhhaNREVUPaYfySbXfwzAak7SeC",
  "key15": "4hYYvjJxbhu28cvMfqxEeFqcrmpLYGrhuAjJTk2YRYoCgBhk5vqWuSPJEvpAoT7bdibpWPcpRtUHMA6bAsQ9L7kA",
  "key16": "2d8fDSfBUYNyHJBv1T6KvSrKHBDD4cXcdoZBwKJt9MCGXhT3Txt8nHbwXsBfSfPdCUZvgAGoyrW72E1SaqRsA9Zy",
  "key17": "mTH2WN4iwe3QfVQNrurUbnbM2zaeaUmhkSK5VxwS6wgMd1EexpR8MUoFcxKoyRSRrznjjcXSSzamvUe1WafTFnh",
  "key18": "7RgSyupfkcnQpJwwgVgqwvVPEsYKXDCEtWTv2mZGog43fJvCV9FxrA8ALz67WUuGCBzY4js6tBuZ7QR3nE58eL7",
  "key19": "56i2he8AKh1j6PvSPiPvK9RCWumVcabAhdbTjEMEZS6dMSyVccSN4LxYdR2uvpjA8wEotwPqKcHXn6ZFSdiWf39i",
  "key20": "4BeNKkPSXQjR5tuZf1PU5LXTsVyZX5pGR3Q3HDBjDysh9rChYVcmb9aRgFDoq4r6vXoDARDBbxsnEUcNJ6FJdN98",
  "key21": "5XuTBGYsziaVCcxEfEiDA8EqgUgqZXFrdn7nyUEeg7C9ZDrwkppGEVTuqisq6EFymhndK7r2GfFFVNrv5UmgMKR5",
  "key22": "5CD8LJq67BSGKPXUMQcTaDKGQx2ycuUhuDGDzqaxNFR8PPxsqAwhB45tmp9v6dZhy3vGr6zR6kjwZCowFMGrChhQ",
  "key23": "4P12HrdKaQD7pWk8AvTrqWgq5zTkMXV6kEBJ51eKKGpjtZkPHLCAdx43KpdkBZsFGbm45uGrqruZpyruXfjbTehW",
  "key24": "4gjW5bYNmu8RCpgKp7hnRP6Wi9zew6wn3UGcLAMc8qiFS2M4yeZpKEbNSbv28hEt63GiB3tZSAcFVZeyjwtTgiwm",
  "key25": "3B6tGa8uxArnFuCMMXWbRkka2KsvREFkY4isTsQt69Wqjzdvggr7yKzbS7JLSAqiCHkkV5WLNN4hHPo2yy7V6Jrz",
  "key26": "272cJngLZwiiPcUuVr3h3MzAqf4ysYcnSV3MUeTtFFf33sghufmdkWK2eQr5C8fiDWSXdpWC1bUQ5B4W3DUqhyT5",
  "key27": "5SCph5JHqDSdfGXzE6KxSTERxb4YkPAQEJvs3RZE8hZo5215Gx8goCvGqrn5xWfWKLDDDekQS9Jf7JoRNqmwyDC9",
  "key28": "58PgHPrpcRFnLwuYtLGbgqyHi9DifRBMA7aRgiV2Rv4vjNrLEkP348auih9k82E6CVCcnenJxStTjWKHSP4Emxm4",
  "key29": "5vzut6w16gEYn2LAYM77ZcfMGzoCrucNab6gEc2B6L5aMcSALuemkNUdrQEa5RTT7Lkhu5RepgEDVQPCFQAYihEN",
  "key30": "3tk7XipWAmsMyLtCSkmKhyd6G3f2aFihH7wqpyTQkAKURihU7NRSoSgxntr3Rg9pFxndALzpS1idZZp5ymA1ATtP",
  "key31": "24LCwRzuUwSEniqqdKQJt7k5mxYn15SQae3QjosFgnxGpE9cDo73XvatCsYqKbbtjAENipnVBoaWuUaPBqnJ1dnu",
  "key32": "ErGN7qW9PdifgAqtQi8TF9qzf5LtWj3oMGkgKERF5HrfdXawD2jXKmJuLGeBgD7RUz9jobyUaBj5kt3bfvKkzPG",
  "key33": "5FK3xVTMZgHjRkX91RYqZWEW6n2xredsBeSoqTQnDwHKGyx9g9rGPw3uvxiPULHmqHpzG3geEhjnCxJ4j1H2dx4E",
  "key34": "28KURvh4hg4AKKTsQjZZhzwaKHPX2TD4Cr6HNhinbw716r2wRhMfkGNffMV84U6MatDKgM5atXxQLsSQPbPViuzr",
  "key35": "4y7UFBBGFooqua919xNmuijh5sHnXUeMjDFV3k3AizXcfSymMwdurx5XSvJSi94DU6uue4QsUaPLffM5nHDE7h9X"
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
