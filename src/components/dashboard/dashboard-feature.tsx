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
    "4e4k1K3prnj3c5NkDkjsGMX3nuPbvKzNE2XKYvtSL818EPpHnvqprxVQtEKA7aQHarKvMPCKHk9v6JWJ4YJ5ULTX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r4YF9dEfAARCR7ECuWLceR4YBKomfM1EoA6SkAkttFzbbYETfLSDKN1pE6SQbvxHjipRXK5QRp7vbxCui41xeGj",
  "key1": "4HpZ1nCzDcF5Luk8uUn6DcyUqthmbSD8FL8gridc4Y7Akp9RRFViTv9hQoZUHq9aDJ1ogjYaaJp3KQLzcjLFnYec",
  "key2": "5vN9kR7ZjiMfb78Yy2ZqYZiBvwocqMkaaq4dFyLNeH8gaK1qgVfTtYx3FAF5nZrCWoU3QKXU5JebSSPnxWPQhaoY",
  "key3": "3KEz67pHWaHFoHdB8fWY5JbHjZWtQ9chsjs44qQmCkSYzv95ajZom15dyGpJDCuWeBMxcF7EuEoeTBfiKAwfaHp5",
  "key4": "34VT2F7XfbvHMEGepFEmspHTHxUs4Bv8brA9goVbH8NcbGCwEFQctjZ7PxSCaFDp92Ywhwe48ciyw1ncgzQp5h5j",
  "key5": "2xZxMCtqcKKEcqbCgrE5jQZMtju5Cs7xh2msK6PRwgJLP7zrtwMH9xaXr69bvZQDqEbHqvc1KAW8yF7AYDao8dW5",
  "key6": "45TtQ13Ci49uyzKFfCoh7QWojZpV58zSd1XPHtFYfay4sdJ4tqQEvLNn9eS6SLdGKeUhLWaUf3xY6L4cthJVy8Cq",
  "key7": "2d7S5bqrycqdLLEAKGY3JHcjG8iX5tSU4KYB2arxUkJLvSmHANZ6qWkWcR2EZpi3jhVAQaLJdq7fyo3RrT5C5kXH",
  "key8": "3NqoXGXLs3easUaGjHQppUrFdpPoZpzyiUKPthNdMy7Y1A5vUADtE5Gsk4gCbeANx43cfG5ySm9BM9Z3xt6BNumR",
  "key9": "2Zdj9bReggiX6ZQiWDzj1JSZQKVVwvGGmfUJax8qM3YVvRJtkhHnvDW9Z2vi5MU2EFnUbWf3GPzPmyf2sEbLPuVw",
  "key10": "3gxRb7bBCVJCncjX2E1zrZgWMYHEbszRMvjjbF63RgVn1VGjhuoCUdyYuzGfaJ9zipqrpd4UPYU3cGGKDHZboHtb",
  "key11": "61C7pffe9RurtmmPhRPa13mvXUZAReb2nvZreBsUPPPc2xk8BDrT6ya1VtWsAqi7s1XEqnvxQBEttYEAmhdm8DUP",
  "key12": "53o7rBdJmYooqk8N886NFow5v3kVBWFSwHLDcnNsX4skws5wpdY2rgJ5d5bW7Y2PNE4QWqHueuyUSLRfSBgfUTRV",
  "key13": "3QUa8my6miYNPfNQ5vaPNdiBDqoSFrFxhABnjTEJYpMmUWQ2wjbVQq8cZH7ApC7Avgh7vskJbuCd6BS6tTja73Qc",
  "key14": "QSpm6CEKXR4k1ehZmhjf4SuV7mftHHBUuepTeKNC64B8iWxpNU4ighhVBGuCUFYYqNAqiKzkXE58uV5yRmT1yrM",
  "key15": "2v6ivLHBwzy6QxexRoApL2D4zMbUnD1B1V8XL6ABKLgSBUDSCvjTeR1duTLdgWNFL8BDaebMq5AojWx6mqxojHqW",
  "key16": "2eb8pyZkR82p8PNzeUdEW4L1NL5kzR4okUVL8a9Sxs9XbBZzJnvthMGS4nnUcnaZgo3wX7i4dRkv6cWuTSoAtc4s",
  "key17": "4ENaYbjgufwVVykXZ5W2zCNeRY4SJdrMyHmb4g7kU89Rhu587HyjpvqmTjzTD1hdYpWoZ5JzGKiVwpjqDNvUydiJ",
  "key18": "2EdAdSkGFBxAtKMDhq7kcYGRDJiJhWvDUnbwQVwnqrkkSstv2XQ5cTrCa7AJFRnj2z4jum2KGJSJJZZ8iSg4gwuT",
  "key19": "zZQHGt8ajmz4q5oWKrTUR8AaBPwAyMc8fwoMot5uzkzn2CHnR7JrdVjjwrJ36v93a2dGqDdgVAiMnLAp68zRtHp",
  "key20": "JgCb17NdpVeg7g1SiHJsE7wYRPFUaQaRyBEGd8h87NajzFYtwpsXVX1xg3feb97uquagwC4zritmbnMpk1pzXkS",
  "key21": "52YZEn8XnhRTYmQPYEhmM3uabt75za99MjGYAopTU9UWdfX6wxw3TKSRwVr25MrQaDPXadXhwaNZtdmzKwuf3udg",
  "key22": "2qvh86RE2qXhbY6kWzzantBAyHPC35yAcrpfVaFzSy5JJA4XvTVxNUSnEyf6Dne3BnfPw6rHVnLZCafPYKHnr8R8",
  "key23": "2kTqzBozJbTqws1XqJqFsBhFczrenmWAQ9WUmijuFVDrWAfDnpbKjjaFssZeUndaLFYxf41cFiyUbypBa1ZvMwGo",
  "key24": "2p6ezMxA64xMoCuZ8AfXVZ2Rgcf5cFiB7kcb9oQtDn9Kpb9hFDYq38bE1z2EhjRJGHsAGvZYLpEr2vvUmZHJ21c6",
  "key25": "5yuYWxeMFknJCB6XWDzyVyn9KkhzJju2kX6TLdgmZ8pTqnmwoQL29Ki8QM5Sp2m4GKtGb1BscJwJVZ48sKkcLnKA",
  "key26": "2ahkUzdFdDrSiL2RkwSGjYwuR6P71v84rcCXpM56CSSPBUWr4ezzukA8WsjqAZWaXfn1wncbyFTpnGgJnmN3rGbz",
  "key27": "4Qh9UiefBKgkGzWwzPSDWwNEhkMzAn7X3m7d2S8mXAjLJM4yL2fDekmGtWzeBJUR5DV4P3szSELmjgzxx7HYKYZP",
  "key28": "2BExBdhyUf6th9MJuRjGkDwKJdeYn9QbonFwJm2vEJhcWeYJX2jqFbvsk65Nrm3vtBenuy37m4VpMqKrxEDkeKSc",
  "key29": "3CDgArcZ2ffAXmDi6oU7455yduSdPo58LeMjzdpxa1QGRafdbCvg5Gfq5Zjkw7Z743zcZsoDgtmiAGSqt7D1oYEV",
  "key30": "NT2aaYWv38rJpM5SGSEoVcSt34YY7XcFiszMaEgpD1tdUq4YxDmxx9viy8rhSxDEFhbbNzGCaLUdhBYSgH6Xows",
  "key31": "2TPaXP2jtJx75ddd4Sxqfgu3obWyQZ3EsNP1DSUpcn54GATpv5U1haAW2UYiy2oaCpQ1iVSDQMZzW7FNBVwC9Khu",
  "key32": "2zcMa7NLsRh5b6ukkMyaQeniichA84KBswULDmrjRx1UNLPktVeqJn1gPZGBS53rjDMtHYFr8mybi77KDT9CbKEP",
  "key33": "2byFt9KnUxxzXtgsQx7ixiG9UkESQq9kVcUah5m9578n65zK8NuYzGRB6JfWmPQLw1Wd8Wf7sF6y6oQ4E8veAFV",
  "key34": "d5UAotSsE8KUDrsMqNansCH2Xkf9Yo3b7yhydN9FWR7GsvqJQd8awBKvDvGutE8YB5fCcpui2bQZujA1kd3C2TH",
  "key35": "2knD65sbjcEtrzjyPYQm8SdUUxY5TsGG4P8GyXwi2mupcUSMt54tSnfxZWkktWz7eKsz24rSUVzJSb86qrJSd6dg",
  "key36": "3PD4qZNLM3WPKQgEmVtJ4mLRRHoUD8P7mQVKwejictFCHHCEmu1qH5LSipyDVBgLJ4sYS1zA8CyVMsjHVaL14iCc",
  "key37": "4VGYaLXhiNxLk11bQ8d8jxiz2tiPCXSk7oWnqZpAfcvHiWTHFxPbiXuD7PfXzGbqmHhiWSRTfJF2xfcuktboXHBJ",
  "key38": "3onfzA2MQfXziVRG18dqoUKedMw4XKhYZYNd4wN4kRvVr5YSb2AxJRFecZ41L8NS9g9mmkBB4G1upECePUvUULWH",
  "key39": "4NVsaXd9s75Kiv5thrgw7QUHwgSwUtqoHpdzssiGQ9cu7s4jgUEFKVq9wFj1R7a62rheKbCRoRQmbZgukvLut3YJ",
  "key40": "tjfkcg7tqH7Q9iBNjj81zF7DfCCJDaMeE9VwChuV1rXYWqjGgELv7bMmykV27aq9YuQRokygiq9PfaxheQ8LrNn",
  "key41": "5JYKExSwC2V5RPoDzP23WiQXQpX4FYaa2HrQHjDL6SJdXCUjgooCXbATMWVvMcr3ENLqGzVqHTGn4uwEMNj5teCF",
  "key42": "2mowC5DLKSmjZcpn5BD5CtHU3Hcjuo2y6u3B6oi6SGydnt7tWVdLcBTZk7qYVgqPB6WhW7BpvCs2krvRJ4iR9tji",
  "key43": "2Ya9uHX4GJu5ftQcQ6h3Qq1Etd2DbBLLUf19mb9hGde3ZMR5kJfMkXV78Y7ZSdrtVdci8W2KpTnxy3M7q6v2co48",
  "key44": "4C53A4D7EjxjuGtKyahRzsDTwAxM31ofQq3YRWKVLk8VkobLs2raoKBrANU8PeeujUNcHM3YENtWT9TS2PELC8G8",
  "key45": "aCaiw62xL2tfYDkM1MBRGT7i8nTwY63cAWURy8WYtYig81Vbybh5faKVaxSzMazih9PQYvXSp6p3t5DXMsHpmPt",
  "key46": "vkAMY2PjF9bMoY7dEqCkqyy55krNTyW8p2V56CjTUVAYqRbnpHvaVM57iwcE2AFMvvqcyo8rGEhmFQuL2TTGasJ"
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
