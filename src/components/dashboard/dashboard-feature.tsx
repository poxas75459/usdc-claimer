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
    "2PPnXxpzZa6NUTVNexfnuv7A3CayJHxPiy2b2jdJy9YK1LwqxSaD59ZsjVtwj5jMDur5JyzxZiNtoUh8vcsa5Rcd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hKpNFF8ct2Xpae4q8F4EZ1pzzH8uz8QnGSAQF88nK3mEBSJxShWA3XACzsMLnEKDui7R8PhwhY8SKf8BvqQYDge",
  "key1": "3p9NYkhdKLVsTeQGJhde68nytRH1QXDfc77Lq2VMf6sU6nfAy1bijCkB6c2CppkzaLKyFRvqi1VyGm78Nu59N5XB",
  "key2": "55ykNvAHigpfdxZ9m8cVRHEUJesp8wVGQ5TJGKt9N3KWk9GbjPGxKw46WkuK7foygGHP9b9degFtdcxdQML9Uvxf",
  "key3": "5B6eJHoisFp2PWeS48xU39rAFVWDpx8x6jAwXW8Atq6zDAh1BjEeDz6QJsqwqfiSqAwm4KB6Y6wgk9sh9e3Kw1nc",
  "key4": "5Hm5zr21pvr4DFv4Y1vVtrNoUpEFCensfyRG81i7AMhy2uVPAqGY28JrBiyrVpbU9BNfeUKcq7ewixHMwJ9KHLGn",
  "key5": "3HjWEkNhVvYY9atMvvUiyVpZs351ELa2u3bB6e3QBfdh4ttyn1etntrMhFzBXmKpPr9WR8kzUMxajRmSeJmp1kdN",
  "key6": "2XaTJyFWNafQLjf9DvmiGpa3Hq4v7s4Eqsvfku5QSLBRjmJyHTsYB2z4y2ygdQZ6nZBxjZDLgVgFYxV61NxnMNUU",
  "key7": "2YBzat35LNS9Tykw4LAwd8qTm1kLK1aY8ymR9pW2xwe9SeXa18eJJuVL18TF9PYwR4T7fSZW6JuNv7uTL7GPxaJ3",
  "key8": "51PpGDcn85YeJvB4MVZdiKC6YNf3558t8Vtx5yicXsAh39MNY15XNk71K49mFQ8aJkrryE7V56Y2Nv1FsL6ysEk2",
  "key9": "pjxGrmzvv92Uk59oy4DFC2fLTA1LRZKXiYAkpXF7SwLCtM5Fkh4f65RgLoM6u5c5H6Qpi3anTskiYxsRNBcoBCQ",
  "key10": "tiTGvsv4TpRwzvD7UHou76fPhXEgGYioLpsTHUrVAgWb9QLGUMwSFnLhcnBQh91M4i2cbXCng9Zf2ZNdJoBAC2Z",
  "key11": "2c7WxxPM88qLR7Tix8Jh3ETyLfCksVimGGJUNXosXN7qGHVdt3WGnFt5CQVsMEXNLKV1fjAQYVKBab9HaZ2WG3Re",
  "key12": "3ZgC2oeXc88BSYPnUx9TgPshtT6csLqFc8zvPYSpjK6w4HBtWknTby5ziSgQkpJ88NxB4jsjVV2Z8C3DEjjKe2id",
  "key13": "26wsZyvifmoYLGxRxjpqbwwQobtGMsuXjePQtXUbtQMrwVucD6H5QAD1qXaJJdjsNjV1Q6YXR4z1nKcfXETpPyrW",
  "key14": "5KyP8CyqwmfJGSDorWS8nLSp78AoZRVxNfG26E7JpQ5X4cLvJXoHoHFycwwg6RLmSccrAJKdeGZfqfLzF5zH9HN4",
  "key15": "5qXXiar7pAwSxq9UKGeNdw1H9hwYSaCa4MKcgkmG7xFBb4RJd2r3gDtARdfEq2VnVnvqFv8eTzCdPvY5Q2HFWjez",
  "key16": "DKsvDcqnjjKJRyMticBHGHHy9pSe5wCoKZRKdP469US514HR95Yk5T9WEnzVAop9j7ifm9bw5aBVU2mwrSNqWn2",
  "key17": "2QWnzgdBRWMghgab3PayMMxrvvN16AjTmTuEBaff6fh5sJGjYR91xRsTdVj7u99oGf26XvFnuqw1vgfQcUaaFTtq",
  "key18": "2iik4me3GqNxetoX5eoaHuuic6xGbioLEgwHDsJGDZk8G7wt5ZV62p4Ec9FM5cLga1ZMeFKRDjfzVDoNj9SNnUVF",
  "key19": "3ZYAjZ5w8NmS15huiLB86Ga2z8iNtcXdK8WndsH1P3GkDAQfViYGMezU4nsvLSG27F7FMjUt2NTeM4fsi4GZFvzE",
  "key20": "jM5fW43qQqeWNxbo3RH5pmUqG69fiFoQZFQP2J355VV91QhkoidTHca3DV4iLtFKSBzNZz9uh2wA1PNuKpCCsnX",
  "key21": "4EamjZsrh17LCNuQMjvQdMbRHmcKgzjETkPtQxTEMGDBk6nBnETsNo5NSVoLKkfRffhJX1NrpinUsZaFazzdjk4D",
  "key22": "4VcJWhpfc7pb2UVMd9c4K9gmv7BqLrhFScvjK8fHjpQYFD39KTiK23m2YyHVXLaL5yyvrnri1p3j3zWMNzezXXe5",
  "key23": "3xrMCqV2w1orjVaCh4xFpR3a4Rwutn9roFtWnckfDsSDQFFL6LTAGkhpgwhE8CVx685sj5anFauH4hZRf2AiDZCh",
  "key24": "25LQEGxFQvFcGeRYfAPbH9AJLUtZtN3oTv14PWYN9rDSBM9sgieXtn71j5NV6BM1LJoL5b9B446VS9qqGTjZn4aZ",
  "key25": "56pAwSs2aC18GL2QxLyRmFgWrzCx49gNEahbpuULiPDyoGUi5QQ7Bf9fLVHPQd5RJiVwrCm7NrDLhzcBWa8bfG6C",
  "key26": "2wpJqj4N3tqYDCfokNQmQ5VfWGEnC4kzQNTjoY9JEmKYbtywJgLyGzkRwKUX3YVgeDQGhMqkZ4R8Bg18RcpNjkmu",
  "key27": "23WXdJjAKjhQnnDF9ZeVgY21XDWeZoeFLqx4Zhqra8n9kEMpxCknUMRui9cAroBA45ghwCtXzUeQvPxfKFf9yWwJ",
  "key28": "37LZFPnkLKkZCyoQMeHogLxSCePm7e2vUrC767auUYuPMwsSdQLywHTqNr4hYV9L3Enio1YiDAis6s83CFZeCAo6",
  "key29": "n8Qv4eKtocQmHjnMrm4iPWBsGcWmaoYE3Le9QQwx1gGdPr7wefTkcfz5ZWBBF5u7HeoosoqCU2oxkwdBeF5jXM2",
  "key30": "2noCgQEoRb7WHyVGRAsnezoFhJPxWt3kU3T5g5jJjpQ6uU7u3nr4j68eBYgdwqRrJ6hB7aMwzRgLfvvH7BU9mosj",
  "key31": "589jPyhUvvSZGYbZWLgbYRFJSmiPDpVUb6hWLbFpVYf9emTUsecHor5RJ8V8qmc4cHvjhdTHha8ePqZ2c1HM663j",
  "key32": "4C9suJ2swGn1CNcuSwh7KHYuq9tkPow9kydqUQJpcWtfiDksWSoLnQ7s3vdZJTeXbJL7yyFocvJWFsE81AQCowAY",
  "key33": "5J4VzTHyMxtfusbzj4ui4P34oDLuGUtmp2K4W61bLHHRJK1CJREdjnqu1P9YEJaio3qT6tH4PuCu8YAuTpcKuet3",
  "key34": "5qtZ16tt6wvWhGu2LfijMpniQ2jfCsQoG1vkMC2jGbt9f1U7HeaMSvgVWFm25CDMbCjLdKQzRLBJDkagUV3jQMrN",
  "key35": "4FDXW9UJ392UxcQyY6w9HeMRFbBpWLBUV6eLDkAkBrZR5iX39q11M8rYQJEFkBBDQBmPqjApYtF3TyqZKbSPaxqR",
  "key36": "2py9ngFUL57Mht1itEppeLqQ2PUasU5BTRLfaFetrDAkwvZtMYGXgrdWW2VzWi8uotfsLtdUCpL4uyzTCFDuNVBU",
  "key37": "3UfBJQkeCppurQvnaWkmdKbzZbRMKdLDxC39p2CGF8Ka9Hez2Dfsb52MQ58r9UCqY3N73xdd2Acf4gqhqxwqBENY",
  "key38": "21ypCJDtn8gU5pW8SoHfVGdfXFRtJJmhhncg1ZXpQERLbvSLmgdqAkPtbtk3MdhT2kTP1paw4kqBZoCkP7Xr3HCo",
  "key39": "3WwZm9jGst6KADb7zNZABVQKgF61UJuvmDW86tkVdBpRYXRhBiCuxZf1fXchpAUMpmMiG2D3Y4K31ahfqgZhUjMg",
  "key40": "5pjdeF51dTVR3SFs49xeJ5KZ6UNCCBLwBGuMUZjMpnLoqmXH9WPS8FbCJxZSdQxvgMZNtqHxwtaHih3wuqaTVD3F",
  "key41": "49v8T5ozEjSh4rzd2EFRRuM65W18FuzoTJDiMwBqbNb1gQQnv84Kg7RCMV3MmCZTQb8BKw2n9HYnX5ux1uW7bby8",
  "key42": "2Qb5fwAPnsVKqJGWnwAd78ijdp1iHhwLzrLRXTfPDqqerP3BX6gNDmBiWwUtN2ZmHHEAkgbAu2PNc6Dq7t7K8pkS",
  "key43": "2dAw2BTJ4TEQhSHka84shiSM3CYGThQdzB9k6ZwsprmPkErLg1t9TEx12UG1wtEdX5FtkAx7oRcNPA6bEygN26BT",
  "key44": "5oLEAyyMrbfBk2LbjZnAFycRVFn6gBg43MperkrVnc1TB7D9ErRWzxjHVMWXL2WGXBjnrZdNAs9sazi8oiMmQ3NU",
  "key45": "3sKPddDSverzLzHPSfTkMRrp5Z642sZybEqyZL9APTqDsjB1kp3A7T7XiVNtdqnmeH4nzqj4D9o2o7ATVwfdR5pK",
  "key46": "5cMgeucqvJT36piRW22j69tGSqsag76yTiygZunvkaV9FmxHs1Xvrgc15EscFZZnKJ1GarRkN8wHaVqDQgjXV3dP",
  "key47": "aCnMBawzAoqpCRPWQBbfGuxkkEtbhu9zqcMvFkQ7te4X3oUECkJwfPgQbESbeEp3DwYjv4ok2bBaymdSWGGer4e"
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
