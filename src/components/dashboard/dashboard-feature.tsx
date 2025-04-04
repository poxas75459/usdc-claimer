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
    "5XczmPFw83DL2CtDBdvQzKWdxQsXmdR26J91cS2UKx1fiziF4FSNqBqknLPkt7h9K7kYVKdXQyTGkBUmQKewh2um"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wZaVeGh7pCxkEMrwL3dFULkBoAr8h7jRAfviaLeyYxTKEd5TTgG8WiNfBcmNBN8KQnTBcsrCvf4gRbnYmBoczbV",
  "key1": "3BULrDCsNGKP3bWsezshJ5k6tuVWSLEzu63WpW6ib7KAMbT5WQinRWCDRe1mV23WgsRgVSJyEAoxJr2Dq43uKkCH",
  "key2": "34b5M6jaJQ3HTVanrvr8tuGDAtd277AZkBD2oMecwMMyhrmA5QYa57tWHngqUXpAJsLNZYam2rBwTBMEvkTf76AF",
  "key3": "4tKYBeRqgpgx3iH8BbPQwb6D4qZn2hBqCX1txCp3J2ecPYZr1hU5kXkWGcV8pHCYvvUrpnPy3bNoSqfjtbk9hkab",
  "key4": "ANR2E4rcis9LHSzmwtgiGHyFcVmqkgG9dhuQCDHpzDmEz9J8E4RqQCut6ETHz3mYHfhLHiS7RYfBo4M4cBcjdVn",
  "key5": "4cEqu3wt3f6ZmkmwxoQz4ZnhEGbZpeuCQbscKvJsMtzQaNTEY1BEFcoky3Gez7gLt6viXpxAmnbFKn8CzLuxJUqX",
  "key6": "393cSL1KYejMLouQ3RdGCG3ENc6nBkXhF46qGTMG676bGpcuypZvhuoherHeM53YaaURX9wMhCAEmakh7xTDAWqX",
  "key7": "38h2RSRWtah1adeXhPoEurViZxfZuCqtBxDnCqJk5rDxdjSDx8QDsmW9Bx3Gg1gx4caCs3Mi1rpcuQcfGeBgatK",
  "key8": "HA978LEJnKBGYPneRTPzuDHCTnRNfJDAhnHAfuxDnmdfjFBfXJHShXe429CvfRa39jSXdRmmvmjfzVPToG7QPAh",
  "key9": "X1xeTYRhF6FJJAerjaYMg7RM7AufzH67xQTU4TAfSS7nnpYRFP4Xt2VMWeCERhgqsVcERCfeD2TAMEbR8NoY8fb",
  "key10": "3ZF3srr5YtKNEFe1UngPoggZEKiNmXdpkK3uiQhRXQovRE8puHufuh1b8Ewr79B4T3zPKuVHG6sunD8ZECeLhCEV",
  "key11": "5X87pMpSgmzZXMu6a3xsEvByP61A8k7tp6XNvV3ASADRnWeyGqW1ufqqZQbiDiU1NEoFAuyvf6E7HEKZNbKWiqQ8",
  "key12": "4gjcNBKzWWNK9H5oWTScsfLqQaySBi29HzNJMcnNzdpATcMLCBRAUhhGZSTabQVC3Wf37o7U7drtDdCvwfKKojJJ",
  "key13": "4id4GL82KQWm718Lthhh6bvCvyxv1zXyt11pCCmAGxPHZVXktZWUMcM5PEh1Wz34FeAY7VLLUfMbHzLyZJaJHZX6",
  "key14": "4CGpRnwxqAqWB3cEQaLg4VM4N6NahEgHkosVtt1NeebKHsiUJBnMgYuS62uHB7YHHz85XbT5qoFhSd363Sx7Bgf6",
  "key15": "5XUjYbdaj93bkGXkrNPMMdTWQDK97aDJG1q4j1axEjeqfXAEFNjZSZi3YMjvbrAjixKiujDfJsXAwf5Kd2w1QeqZ",
  "key16": "5uWPiW2NriSzC9tF2h1q39inK8324sc4uW9Ub566SissdYdPipnt6kkZ1kciQXjqRks7T1XkhN2xQXAi8fTUh2n3",
  "key17": "3MHdZxrFcGqi6rkKiNpcLfMkUaqCY3CpENNkuCtL5v6QxrM6QbY2qGuVsBdbm6w1FtDNSwv1yzhGmj4XaGQV5Ehq",
  "key18": "63wWQLcZEtpprweZPAvBzk3RjLnNf5AnEhVtT2CvLcbPCTfzTX8yqe7YGyYfKWytLRKKpomhVbnHdy6rBuBFS5mX",
  "key19": "2fT3ozcsnmM3C1CkP5Ddn1kqrY525hb2mje4YUc6PazodyMhF2i36P9xHB8Nie9wHsbWD6mfxumiSNKpNx1W3KmN",
  "key20": "21BajUzvT9hZwBfE5Wz6Kd1rKbNtuCfqoMiY7PZcM3GDZgBn6d89ThptgAFuovddFE6kHVgDBPXcTGjTj4A6fNAN",
  "key21": "313TJcVLzUgMLeMGdzTEnuNN9LRP3bMa9L7iRHAVSQFhmWx2g8KC6BgTNN5gVFsEaZczBXR9DnRke7s5RdhvNCyG",
  "key22": "HkRGKfRFtwANEf8Uy2bdHoiqGLodfb1M6dMpdjzNQgi8TmiZnns3K9J5XVzKWFhTi3CtF9HTtaKW43vZ1HjAVqS",
  "key23": "2XtWrCLzgmFaugeEaruMtWnFS2APFJENWswK7rngFtL8WZrapfTGbeRv57n1s8pAfEAdko3nTwXTSRD9o1k78kq5",
  "key24": "3ugnSB9HEFGV98JdUKjKhjKK8GcJmKMQ8XTyKe1GCm4UJ1MieCjn478ESkEsnBauJb5aj9JDc1Eu6jq1b9avzJZH",
  "key25": "35EHzeT6yFkCnEmgK3jVjSGdRhxZ5naHPjczQssqEXcW5iUdx1aW82L1dCD6jYbuHKhqLg4J3CJBxizwuUdTAdPb",
  "key26": "3VcTN36rWLTMd83h88uHzCjS5KemmBS9D5SgR7GbjTCYWXS4Eys6xvE42bfekzTbmYGhZiEo2krCsQVTHAF8USGJ",
  "key27": "4YPqfGB6zJhH1GY8vAPKos5K5KTavc4SSVF2AuUuUPmT7QcaDVFxRK8ZT4h8oX7Fn5XcAQ1tgwY6SeCfg99JcskP",
  "key28": "EwpHahUb8Kkco4zyzJkNNvfBa5xDJ4VHBohfSpSxCCMZx1s1YNFDAFe75YmQh4LhVqPM7MYxm6EWHudJRcMThG3",
  "key29": "bNFdMv7HX1GUeBz7AEB8HLdqvdz4RdnXKgS4D18jJtaqfW6NeQfyXssc8zCyu2agWQFESCdTLMMAqvC68casjFL",
  "key30": "udo8AiTYDNEjWHskcwMMUfHS4HJeBfiRvAybAe5Qt2RmZ4ByQZZ6Wov36QpvoVaTtVQj8Sg2Jv6WV3oYhnGRYaw",
  "key31": "2NXjoP8eM28msKEt5FWxhnGsdD1cY7KTYszo1tJMbf1xi7Rt4k4pN99iYt4tWTRn27P6GXfwWrELUmmm6FyC2gKN",
  "key32": "4b13MGJ9sJSSA2EAyUS3fcLKGP6V8jPtHsBgNqC9MNvunFxdTXez2p1u1PB4RxDVuo4kBf9QMd2yGa7zJ3PWcEf",
  "key33": "2SjaajqMGLGw2FPZAujKFadBfQvqBhd7jzrSWRgEEMwXDKoFk99DMqhVv4bByQ7AVL7g9jVKypjZMUArorEK1bQx",
  "key34": "2aCoFeeS5RGxzf5xwWVYBf1wH4YdCKrnXc7b7j6P4vczePsYh8AjYy6BK3uf4RmEcQbbTyiBvzT8DuiYds7e5CkB",
  "key35": "5J3wQoXK1o7bfu2B8ZNrggCwme3Djho8AzERg5fg5aMf2KKYc94LGyEYD6JMB6KV6Xse1g2F8hCXLvWawg5nh4aD",
  "key36": "4sRQU6zJo3WyorbqtBE9VhuvLGJJg4BQiSZ2GcmLGAUvrzVENWAE3QW2r6K7j1q7cJr6Xn2DhpSZyqtckXtF6GEW"
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
