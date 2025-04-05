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
    "5fVQm5E4uKx2uzHLhu5obK9KiT4Wo7DfMZ1BFRkefznZG3KvkY8tuqQh7nHqZdFWxaTjP9DAYx5J6ZbFVb34Q3JB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2efJmdkw4nbZ1nnPYLwnk5nVPEMUodSc8NA7UDnjtbmDYKSW5LWBvajAySyVp81KTGmyM3KKLDzm7aEJFRu5oPpt",
  "key1": "57k6bqFTMpdsf3pZxQphqn4mWjbVr1uM8qXz4vrFV9b9KcTSdMppDVd1MMvz98e1L8MPS6XgqrAYH15Ys6XHv2Jz",
  "key2": "5eJycbLTTAdRX8DTHsFWtkiiYXBoNeVfkdKSFxV39vdayiJJj6hdcjspGC26YFbuBKi2KbbLM1eeuDKkxYfADanG",
  "key3": "3tcbSDK4fHZGaakCGSwtFJTrxcASAdbWy62VmUHTyDNSUxiMdu8GjnVGrxpaSKy2RVCpLsZR1rL9WUgZkUGvKni1",
  "key4": "Qa3FSHWLqui5Ev3VoBaxWGFg512Di6taRDNVQXD9CZpTsuy299s5kcVRvqXrfisWZnTsbF5vEygnWu7vSwc5QQf",
  "key5": "2HCzsF2DBfxMwjLW5cRLoh9eJd2Zrpr7RhyDiKZvLXmTLoShsnaR9bAE6zb37z82h8bVW7JYodim9EHmQXHnA8xx",
  "key6": "VGqz2hXAeWLsSh1PMM8PUexS4DbFdrzj6LT7zcFP6cWzH96tuiSPDcrwx4xF2dDusawtZAVLR9V9YjcWMR2SqNV",
  "key7": "4k2ECRfJnLkgJ9UH5KQeGYhdrzrQcZezmDDSZZHorZ7ThbUSKs9TQuaZM2VNcB6p6ptZW5XC93qVzrG9EYJktNq3",
  "key8": "2xmUxwj531KkyqB4hLCtzGBM38eSJ6kAhNMywQWSkUM56omeUwHfVRLmACnMaDAwL75bcxVWzEjZARwmUFS9uGto",
  "key9": "2d8i3upXJan858L2CMMNd6viZuG1JcYbDhP6UmVzfzVRsH2BcT5VQbzVSdAtRs4sXiqjsqixvciBjTMQM7iCa3nQ",
  "key10": "49iiFnbx548373VCW72GXQVa6tzi7KZVQU9WgdtXgtftb2pp3EEaVy7p2prEb7ZrPhAsazXaatHMynR6eXLXaVQU",
  "key11": "2fay7A4RhMK1TWtJbZDWsBWRNfHcUDKAR27URcnnW7LY2MBiHVGi4N2UDabp1JuqmAC8kgqdscHvbr7hJm5R89VT",
  "key12": "3SeMeaHCmNcKU3UWHKbmCdbWqJDDydvA4AKgT1WwF42F2GJUf7NpVxS9fj6RC6Tp4ptopaeprivKinpXygiJwz6z",
  "key13": "2XzkKD4Mq76nUjMvjH24peciWq9KmeqWai21CajdkUArUo6vXvMFpgqQhMfVtUUc48TCZ8sBSHpAecia9bDXESEZ",
  "key14": "5GDDuPbVr3a3SeBr2Th3vagTxjk1uFSaBsE8UVUCoGt7po7jyo9iT3DAxbV5TTVT3U82sVxdfWHxMfCiu2avkMPY",
  "key15": "3ESPfs5pSG89XZeHFHTKWHF9HchcwWuJXyB3C3jvwRwYEWSzY2MDBW1EmNH8WKrK7YB3zP3iPbbM1fWkA2eybfzX",
  "key16": "sv1XveU4Fzd5Un6jm97dQErpU3D6QxEcGM3RFhgcfoZ6zPzZG8NEGaDmXcr8i5NDiAhdX6HE6Pc8GLmQiu9nAa1",
  "key17": "5hwYTARLf9g7Z8yvoBUR6pMerewjh8MwrHMmBaxg3pQwFUDWpwsLpperr1zeFEL2cDVQZoadcdKmqGa1PB2Ysu4j",
  "key18": "42bsWqXNp8WxKNohXaiMR2Y1fXudMeuXgkwHEEUycd6ZES7r5YDp3CLT9HvNHRoeJj5ngrxfcK3wV1cxawKJxNQz",
  "key19": "Vk8NXkPow2TuTRMpiAfcsCjV7wHuBdZo3oo93WvGoDfJSfjGCMz4faEkLNEoaSfg2jRNdTKrMVZETjx4oY8qDbH",
  "key20": "TC6P3TxGqcfbAiT4uPJnB1LFeod631i1PdhN5onHNvqvmxMxf23j9m98nuh9ySmwH9Cyvy8dK5pHeUFVDds9zSe",
  "key21": "w8kSwwWQYo3gviziFRoJMzniEQH4CL1KARtUiY7YgM4SMCeMDU3BS1s56aymuv3uHtC52x5i7gWGJEsZ3VNwTdQ",
  "key22": "5AZnCzKmVGJAHtUPAZvf8G9nAWAqSey1Y4xWddht7pJPfqmJ1H3uVMruFbcFxftfMMxu9pXkAyRhPHZpRKfJXYH7",
  "key23": "AaKghoAUzbncjvAvZBBte7EuZL1JknhvXefakRQuhXFahN9DvAAHmQy9mWTQCdYxeEFkdrFTL4YLHKpFmZs4TMs",
  "key24": "63uMUcDFftMGkMZvZQGcuwkGeYbYF9dAKEcccKL4vsFrKfH6HGQX5cQYSjuzSzsZD5qTJrVwaxki5A8LdSgRsXNj",
  "key25": "Dj9NPyFdmzvgTt7Gdk6oB1VrFwqcSJUyh7uG6axcTzgNjEcvb9pumkq3ZeLHKMgHxHWG5jtYPYBCgkKwipab5sG",
  "key26": "4YKickJtEzzNcDoPXVj5pmGNTyoPoBM2VmE8fwEJ9b43x6KKQEPF65Bf35Ac8Rp29YEgFZbQxftjw7WGghxdZTp4",
  "key27": "312END6RCCFUxTHKTEkUmwrZayZ4GDULi57LLSh94t8TAYsmDnCDfGqXLj4VFMMjvrZ9XMeeTRajzoeas86HYmEJ",
  "key28": "2WEVcqsb6H1XHEBK9SVptkoSQe3MVM17froxNYMb1KcWVEPKhSBNVwJz3fSYLhGQLUw37NwxHhkVv35cFzpfs5og",
  "key29": "59YFjUKa1cnSH3KA5zbeaEGaA2LX5MKKK6xcjtNJfLwQSUVGGEGQVbQEoxjF5t2PpX865mfmRjRRcXdzpJcajqdg",
  "key30": "57D9pRfoJVfCUmnfFU4ecSpfAVNp1hq3Nx9KBzpDuExbBjECZcL8NG4eWk9uqPPESb5Epct4akJfk3SjGosQVGZN"
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
