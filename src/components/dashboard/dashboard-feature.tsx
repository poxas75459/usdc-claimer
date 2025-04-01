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
    "fhyjWfWSiyDY48SUNhgJBsakoiVnferBCej92kpXowyN423DHqEPedqryTRuZNjgRaT8fd65drxZYcb4aJgmJ2V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B1TKWyZvKLmeNxBEwJcLYzFUHEahpTkTwezMo89Mvbqznps9FVPDm4JjckwMY62XrUioKAMD7jD2d74sy91aPiW",
  "key1": "wVaoSoUPwKVujqiBc2sHNTtXRaRbM4aNEXQBZ3dgfSqkV5v45Uahn9vGXWHp6qhg17jpnWCLFJQxKkzVa5srX8T",
  "key2": "2uHQ7Dva7wUBFgt3Bcc8gK7TN5LvBjiPbYNdD5mbvVeB7qAaiKmXCmx6q53oLogjwufPxxcZgU35y2Y8GZu38T5G",
  "key3": "5Mj9VcJNwPQkDa6jYkEJgGtCdpQ8ah9e36Kg5YGJ4vWYyWeuUoLuETuewuLcdCjMrybuCT6bHhLd66Nk9KYNW4FF",
  "key4": "4x5BNtUdNGQYwpfZxNkyYTjua8AsU6XeaMmmbxQB2wguSbCPPecY4qkputinWR7h5TPAGaEvwkmU4tSHmc2V1wAg",
  "key5": "2qV8UXpiswK9nPihnqjFPQ57xyKycVLZ298GzSwKNgfduyujGm64AHPoYHEQpqZAEnrXLRHe1LoQHFzuY6gHWrNM",
  "key6": "5bSpqbGzNAb8YocQicYpAdcP2xCKMm1KtEnoCV2BeRA8HoTVwyZHxC4qaSKfhxBrP14Q2n8vML3KQNEqQb4gttH4",
  "key7": "2zz2NtDsRtfATtwu8dHNPBuh3AbtatosZ2ufLGM45ohvQ6A7zkWeafVSXfLqKZnf8qYF6KA4FWPWobpHS6RA9bo4",
  "key8": "3MtFpsk6JSXihP1RgZKmp2vAs3mwzGfG8w5QJsYsHQV2ySJnA499PiBo62WsBXBVA69wNQgq4KT5zCK2kCk1KZtu",
  "key9": "2Tre5kb9wxAxEhJEB1yFD9bijZ2aKsUQGNi22rpHfcWxjguhrdEvirdeo6mkBF7v3fD5PD6t3pSmJZAyM9C8LVbX",
  "key10": "33XQbXZU4sTwgNAEiQnBayiEJfyRBASyHxBNJX9XWEL4RqzD6NdbYULxxEte7bGTC3Uhjs4jJfbasfoEQvDdWPnS",
  "key11": "31CRTT2x6s1zCxe4UXG8eCrMCFR7XwCAndrKyH2QwFqTFWW2Bu65c5Z9o1N5tMcqQQCBTnWVXSD3wXFpKfb3oCLk",
  "key12": "4BKo1ZczjRoXNhhAx9duR8gDKsHT1ZeDL1sAC9dtFW2ZQaig3XCNcdGyXjkbhND3KzbiNtcuqFR8yQgDyh4UVn9D",
  "key13": "25JHVo2tCAqH6D7PSg2rURENRqQ39p4hj2g9iCmBGMkzzsXa3PpeDsLoHco5MhDdkkngejeoLbFi4YfT9x4ngCZA",
  "key14": "5roZ4dspuJQ1zE6ow9XtUfQJEreTSbn71g9NHhbBhPtHhMw2GPJDERFW87XdrrSbuLrjiWztYyLnwePf2oGdoKcQ",
  "key15": "2vCrYNH8PCrJmqT7EHfpvLWN48NuuxajjfVyvJNKBW6jHvWbB8CCSaHyShc1EcibF9NoJHg1953gq3z1oELms5q8",
  "key16": "4pnvy8SBYu5E7KG7Lu58KVrfYc9EnmTLzyq87schXzeJ3kYeBe3gceZBLYX73J3Ys8JG583q7YgMieHZ4Ei72NyQ",
  "key17": "3AMw15iNpNiX68HEKPithbcEvJW6YVCSiu9sZ5GYRs9qapE86BDotPFguFyC4puHFybv9yJuKVLPDE2o1JAYEhP7",
  "key18": "39Uo2dCxCgDXckDTVYdJgQuMxrTN3FouqwisQTJG2CzRMFPxffM5XARsaU47CzAJUx8FAnvXRBeiPQtDMDpaL8gJ",
  "key19": "qWN7mTaG6VjEDfjE1estnXnxPRKZmP3qSpGc7EkZudsCS59j2pUhCGpm9qJyCCvhF2jEYSKcGBMbTaj2GQBQCoA",
  "key20": "32Vm4KXonsHG37e5ninitoBC8RaHroZzpSXfngKLUyCtrQ3hSNeL6KqcSV1R5VhBxPqW5LTnsogQ6PSjFMWJJXqp",
  "key21": "64L3aZeNKUNx2yqxCDerEKdbmVk1uKjtAH1suaS1B6XgmLUmtTbrvuVDFkxZDbZFoGMbDoWVE5i3JWQjzndof1i7",
  "key22": "2xmp2PB4A2GvPku2Jv5Txgu8ywnP6EsT7fkTGohVAKAiYsQRegsVnaDDsCARQAXQoQnniJkR261YWq8qAWCpEvzM",
  "key23": "28TUXRvH73ZRu2UpiPQAjFZN6SqSkEd3UXH4APpnnfNAaAPF6EMUpA95uiQaoGFhyfHVzSJimH9UvoiRhbSSb3ez",
  "key24": "f97fWH7A4RLVnFYcTZeqCqmXT6PWN7xf71cysUvQxdkMVeGa5Y2tUKiqFiNj7Nj8tATW7HaYni44djzb4sf3MkX",
  "key25": "4j9LHmyZCiLiWV35xpnnK1sMK1UoecfASasttNhoG4t6V2FEyqYadVbdaKG5czG2RcqgFfbScJmYGAR6AAibyeZk",
  "key26": "5fSDZeHXbLYo5XdeAftdqoYq8D247FeScjnk9gHReuoVcwSRdJBkMb8FAkF4aGD5yKu3C1En1ntbiX3bYCyKGXfG",
  "key27": "RTrx7jJQLZDJkp7xFKSrZp6WwXdSvTDod4wkE59T4ahdHTQpKKSMZr9rXFAAwgdUN5qTmx9v2VTbZRPSY9xhWFd",
  "key28": "7UvMo8J3DHWa5QhEVwM3hfgPhPBnm9VhweEfoE2tebCqMtSKinStaPk427ccVbM5TwzX72jJKghVVL2LG7TpfKG",
  "key29": "5JvSFK4D1xMEDx3pLwXXZwNJCpQnmfpf3dsY1SEdfZJsRXoqwiQVxFfsnws2zK2qfYHRFpqUi25qPRxqM7zFTtqM",
  "key30": "3u25KNJbkHwWF64RZYBgmgykeJe9Hbcvhbo6FTBwhLDkK5L4XEFyGDiyJgekWZPKoLh9R1jArTFeEMjydLJSJWLt",
  "key31": "5GrqUdG97Ghi5x5a2RgDefPqnY1CMCNJx7b7hHKXqYRhHWgot3krNW6XbaPVzcxvpgrR8VJs4dAyteLJnQQiXPqV",
  "key32": "62Pyf6HPAwBp7sMKjET7PQU8XMtcWx4TdQLmXDJfqPesTPZMwUAvws5iV5XmBFRFsPP1L1CL6AhTYHFLc4EQBWCh",
  "key33": "2Q7HAWELLLsBNW1xCbgThcu8dsZfw7QBn9bkwsdkrpWokZP3DDpwfaMGCGz3mAwZ8mYGnxXsXv2Ud2jBdDKDUkzj",
  "key34": "4wPELnD12UXwPRG9rtwQZ6RZVeNpqhWxxCfQ8yAuAUx48ujPvtfxeqkrkTRKjmo6eTCRLbC8ww2jbw3h3QybNEcV",
  "key35": "2a4Lw8arEij6owCvcrgmLgwGBx9p7wsuwMy8WU7Kcxw4nCx9JmLepXPzE5CXdQmJmU1r7V4DMJZ9zMiPP9dLhBWD",
  "key36": "kj5VAu8tPzEqTbUeQzGCYGSTF5PEE8srqDbqnmiKWYgZFGyfzCuS9TuXLLzRZgr4xMVqDZu8DsKz5RsT9hFfwAo",
  "key37": "y2hAYNqhAGLMAgX2xyALqK3bP8wFceDdW3a8YgdJixybQXbFQPudTnpcfhxFwW1VEpuSpXWdJjvMZ6CySgBXr1B",
  "key38": "5Qi8i2RNJMEUz7gx8a6hZqNfMFzrbggzqWXneJZBe38H9w1WvZ7dvWYsCYai42osWj8dPszn15Z5Y8jJKkDgF4kT",
  "key39": "61SYWnsk8ju4kS5jWfjtSUEpNFndg1SprmtsVaJPA4odifAhZ4G4Q5sybKQBCdZk7v7wH6CPbdde7iubFSUmJKH9",
  "key40": "4dyamPbXL6NUH3CKCqh8tw8zEjpKA4MdcnmW4pgkozSGhkeU1VLSGb5PR9pP57oYcPeLZMYcy57GuEgiC2FnhuMj",
  "key41": "2PRTFpqRhrS6qZYBo8jXLspPJZjM3J4y1juheD6F7kbneunN5z2iAJGFdpbYuRS1J4ev4uLBPh5yNHnjXX8n2i9",
  "key42": "3x4hyUUdhq8reuJFVF8KsJHXJxxKRgHFUGnSWdEXeDHtWH9vTyNiANqiBK897F2UNoCP1s4xbNV6yj3M8kMkRxrs",
  "key43": "3q6f4XiZZbESK8SjPop2a6ub4KBdSS6WSGDZVzoLyYzJrUyMeiFbotT675cgiBkT9dHNT2jqw3cUxVLKEAzdM2uy",
  "key44": "3putze5xbWuNR48EZ2Y9aNCoLMJg8wwTf6Ch8rtNkTg37EHrFxwDydMfU9cCwC4CHgG1EE53vTRKGPu27zL7JEL2",
  "key45": "4aJiSGaDfhG2TXt3A3B7gKpr5nDPBAi7kAYB4R1TXMbhNQFPwGimFYAQgJWRqoGtavFYBryjTcKGFpx64v1LDrMk",
  "key46": "4eJmEHnZGThdndgMx8966oAsDgC1asyxuTM6mwqtUjmqGhKQWVyr37o8m37GsBFecVCz1ERPqbGsZf82aTkpeXtG",
  "key47": "4D3EbFAxDuoZXH49BzYJ1RkPRAnV21Ugi2eaXgPfpBBa6TV4uk3x7FcruEwf96aLFXFmUGo3R6Q3U5vMyByBnKCu",
  "key48": "4hLAWR24GPzVt4buXoxPgZBav7jTr6eC8MTfAwFtSyDzNSZe7ciCkW62gyVu5erjAgVgArqhsqPycqRtXPeXMUJW"
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
