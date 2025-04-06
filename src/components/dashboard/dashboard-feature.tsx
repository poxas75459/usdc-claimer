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
    "3VQFbVXknG3KuoXwUwV7MzEnuuhPFSJ4FCfpASz4f1XfabNPJNuqZYYhbMLPx2wHY1FYUXcwCcrbHHR5syaJdZzg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bkhkgfipfiMAcqxeUsc2f1uwxASV9zA5R2dUPxfEsM3kTHGPV7UfgxHNBA589UEDfWuuC1q6tdAHcnMTCV3GvLY",
  "key1": "21VrqpoZLyd1SsmW3EQ777B3x6TCLT31oH3gKyAKfbJkYcPSSkWxiWuEj6Pa2pc4iwes92h6ysEbG9GnqmLeaxW7",
  "key2": "2wdxgo5DsQig9V6QgE19fYv6KmU3Gq1fxybW6eLofFYbQuHEXL5tAkPDbeN93HP9MQp5LFJeiELGvgW4TEcVuKEt",
  "key3": "4jTmg1f2HuKaYURVMDq9xJETAt33z9XLGHjewXLvsTmhiEichmggcwiR8k5tCSYmDPdDTmn5JueZ2TTJcmjd2ni2",
  "key4": "3mKWGwq3tNZmoe42rYYzgUQQKBYBzS85i5uhk2u7JvVgPDbA9CQAhA4QTjDfhYKrVZEBZ1CYgNTnXyBft5oMGryE",
  "key5": "3USUJovk1uwwMXencMEKrmiidqPBjYY5cpcUPrdASohCQcX3Q2HjcUowGYCKf4JhiEfr8n1hW78jvpujpd9HpYpP",
  "key6": "4ZfDdBB4XDaWEESpeAcqL7quzRvSNgbNJjYqAB2RcnYnrB6L68fEz9MiGn1Xw9PUZucQKLghMyok2cdAnRz37bQw",
  "key7": "dQbWm7L4cwQnQ518uVyXZRvQNXw3Qg76DzhJEHQ1P2USymbyjo8dppXCdQ7wdTrFyEJVkBjkhxjFhyFLPU6gQsB",
  "key8": "3de1RXCujbchZoRVkrM8jwvx4gVcgWKZCckBoFmA23kZ1XEVFr1trycMufNxfv18DJCzWYZXY9rWWQhKru3nETPy",
  "key9": "3pdFCpoJiMmeyxkiaNB6YUZTpuDsaXiymgs153dzSiPtN4BEYQ2Cgr2akr87nVYcg5sxJBeVMq238BbtWaBZ5Aqz",
  "key10": "5r2diggS4VtnJUZ4NbPfbAANgQcDasCTFkEXFMi5PCNRAzyi6NL3iHhwCuegJnwNhgBQ6ZPxCrTGFm4C2jMxHw7p",
  "key11": "4VYH8nyZzHWTHDP9UaDQ8reNTKfsH9Bw1PQTbdk79T65QkJnq5mB8GvraEpchifiRmcXrmif78zfpHmzoTfYQcJ6",
  "key12": "2u15yir66fGpQvgojgU2cLXMmyWRHV3yVGFh3MDu2QFf5b8g71pqfKP7fZgqJkGTi7iomnbR7mpabyAhHzX6aYvv",
  "key13": "2RsdbbTPoh2ReYknSFXQyx7aukv6MEArPx3UHU8X6FotV5kphERtvexEU4BxFPe81DAiF3ADQwtcCfUkJzQridpK",
  "key14": "4F7JVn54XwzXgyBoDazXYmrm4DdMLiKCcdDbrSri7PViE8vjNM7ScFLTaPr4HZ9KtN3rAiV4WHmDJsYEFsSGGjJE",
  "key15": "CMtCF7PN551obmvuZ44ECe8GdYawuXP1g8pzpfyUAWk4pTJXzK6LG18eYaEJVKf29sTGzxWncbc3RGeMFtNFZKq",
  "key16": "2FG6giXCLSaUBq2gKRH85C7VEeJNG7QfhJhggMek9uyhLCc24z6dRFuUL5FboyATxaZ3BGgk1KHStNNnUMtCcXbV",
  "key17": "gwEQjEXimB18zzgDjHi5RmuTLZLyooWNtdpXFR14YMJfFAVVfbi7RE9G6EYPGsiyAaLi9VqVTLvBkGHFPhsS1HS",
  "key18": "4ma1QQrcnPvuShYmAhMRMxEtX6pUCayRS5cfji8YRYxD2KNq18XXVMxWWSoiKer47nHwPy8p4QaioiPcKk8YNNZJ",
  "key19": "Etz2F1JoL4GtaS37V25Zf2446PoCnxMbR3Kgvu9maKEGXjL9RSZqADrXzTS14s8Bsc1np88wpZwRDbxsQhmvbH8",
  "key20": "5VKTPEeDM3DKCnbkMEdJSDZCQ8xYVTEnDFEuhJ2DcmsbLHqKcD5HarzWxwDDAogNHR4iPHg4TxKu4YdS6mgXUBX5",
  "key21": "4Huu6YSWNi5bQYtEfvuM46TKqDVTgi5hFFrABxVCdmtvsCZJkvi6BGeVzfVV81FFBrTUVRaLNhwtigTUNc5Th85a",
  "key22": "2MwwHn4adrazcVT9uvUDBnrFZsLRbPHfDK2doXXs8wGQDYbDaSbKimMKYEK854FsfsXXsN69QhbPRLekh1uyVgrM",
  "key23": "572Hr43bwghhwuJcCLF2Yrb9kjW8FxKZn9pExnGHPASHh1aXgPhGcRzjESHPBpzrQ8SJnpcksQKEza2yGqLwQHrZ",
  "key24": "5ddyExZN7yBRFAfcGHEfHWJxEJvDQhiDgLMdAfncGpGN7YGT79H8LwXrHW9F5uinVK8b8dDk5MggHRSzDUJ2Cnit",
  "key25": "cXizksSoMwZXH9tVqxZLYLfXnrVPsLzQSK2wQ7Dit1B7DPKNNRZtLb4TwEU7SKveLBHXYYKBY8NH5rwAWrgztKj",
  "key26": "5XTuD2fX4u18EUoxMRYoSPZND6aprkE4F8bdQ6KDVCbMgMXsynDtYpTXNKJhWZhj1w6nNrfV1sut7tyQ8wH3fQvG",
  "key27": "3KXr3bAuchoy8XA4YCxebtYPtzt871uPyxCRndPa4LbGK9zPywgsqdkpddFjohWFEQDweXjjNt8jkXLouaok7UFN",
  "key28": "5YSuNUNMrK9aGXHyXrocS9B52PfAoM8VSFTVzoNYmMZKRM1JAXjpcpeAyXML7vFJS1jv3LR4uZi51QKVnt2C5NnZ",
  "key29": "56fJz2a1hJh6jiDkug3hmRUwZvuvcqrC3xX3uRh7iQfmDP29vQ7kWgp3Lk9sYjxV5shJksjvtJiwGeeoDej8EHcX",
  "key30": "L6zrUHLFGCWinss1ZZZm2dSYisSSrVhY5EodziUGBHY3GbpTKgVbWp178CR6jkQy1qSPp2xzYmnnde6uYG8BCr3",
  "key31": "3KW17LjzH1ccmQUVg4BTuMRz3QQ8yF98ZWaHccFRfnczMKhWDXVsDkbKGy8Q7G4eSkeVzzLAZ7TiSAor4EXHMypn",
  "key32": "4fNNYTeKFVgLmYa2AStHxYBzMUc5Rp1otM4pWhLnpQcwtTSALA1Mg88ogdYm1bhszmnkufNzJ8QdkqT2LfhWHmLx",
  "key33": "4jnVpggNM3xGGJcJnNSyZaig8jGn1fF3Nr5M8p6vgZTY7RedcwruYKXEPWtLvViMb3A7MXxf5eSckW8rraos1pY",
  "key34": "imYyJprocfmZVSdpyaXE7ba2gmUfRTm7zURDL6BXugTa1pPUPxzjwpfK2NdpavxNVHWVcYmRodkA9xJyfKPF1nT",
  "key35": "4ha6BF6Cjpj2DLuxMTe4HieBXcYtt29y8bPV2zo99TPJvnD7SvhwBtaJ3Q3ZTHeyYfv6HQbnb6Tyrz5QTRrwUAFv",
  "key36": "32K48h5VfXywtVsr32g4GRtUjrZHZcX9BUgazGVPB4wFex3rL9fwA4QVCXxfet7gMHBLW6Q7Khng8GV9zUurjkMk",
  "key37": "HrxyxvGY36AWrJeTHs6PKWbiq2NtcHWix8ujrVvZwrqsGchbAtbDRNK6u9JSZe1LoaxhwP5kQTqe3xjRQDwdVuk",
  "key38": "3YJkSc2XGTnAi4WSoBGcdSLoA3RvXXoCCMWcyYQFpGrjcJHCYHJuA3UwvRQRujhL7xh6jyRDvDW4jidmpek1Gk3T",
  "key39": "4uwbwLYj9EMHVQNxvFiSasytzv5MGifr5BGMRMZzveGPznroL436agGFehLEfTfV6fFv2CuxyZSe61szKY8RiyJU",
  "key40": "3i6RLPbdA6R6fVxyyUWj4hVkD2hUh2FopnpUXxunQPSe8eirNrhFL1p4HpfBAFtz8yBi2GuAPtEYvFJmXJgt89K",
  "key41": "2BiUAK2w4xRRbDTVjgwwJqQ9C1UV7SuxbM1RC4iW6AC5jkF9jevQ8fTFdiwKusbaGSKKQqXBXkTa5p9nWDAXdV3T",
  "key42": "51XrvW9WyeoUvBT1a1w4QN6AnGyMiNNbvCoYWHTbpKZyDWPAJ2BM4vdDuVcq9XvWfYzcMxMJu5bsbXJpYrShTMUh",
  "key43": "49T3eG9vKqPZtVRs9bXrMDsR93EDhH7oAaxbLnAr2jL5QHH4bHx9PXyBqdo4gySRfUXxLCgFoYFdMxKXhnafQ1hJ",
  "key44": "5JT7Nn8EY7FfN1k5Cytt3LD7RPngm8R17pWtcC7fsWKxKkfr88raiuk55FXSAPYkFnJ2u2WwGAfVaGhj7J92cDeJ",
  "key45": "4eMhrXqNuKMgZ3JiVpAk8QNj4eNFKsGsKCERMjCiWhTpgGAV5c1RqpDE4o6gG4D1x5g1ojwQX56hfJ7pr6oDUcvN",
  "key46": "2UkC8MeWfX3CQ7jta5BrN98jUJmRYqMNBeMJpRFr3oJoeqAfouhB4vJo1gcGcM7J5DRs4PPBcueUiCNupdcXYVUg"
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
