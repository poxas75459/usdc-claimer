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
    "47jhAaizfBvWgsnd1EBAWyY7VZidJak4F7gVHDKzUemF2ZDViVMFYjuLKsVrk5yHdg68iPkPbv62VtRJqMfcjR6d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "319nhGe1RyhWThxbbuMCi3Roa8cS8sjqDt61T8a4xBiqG4CnP1NP4QT9dbywhFKYvM1KrWvAtUAHMFVTa84x9jqB",
  "key1": "2GNm9QbJwzt46RiVCfTJLjgN3cVdhy1oj6vQ4ymma4yrQaBV76xFiFwHg8cE3brCRwwZuzq76Kxj7Er14BDb15Np",
  "key2": "ZSfsGULNHwMvfiKpPiggWGd9H5sMK2eYeBKtkpZGPkYahxqwcy9WdtGe64AGHumCKKpsDrkf63EZFvu5ALoYccf",
  "key3": "43oCvkxekTi9T45XnDD3kdXPHiYzmEiXMcU4o4aiWAfK1KjfWnjB9RG8ypwx3Dcq9k1kdT6iPeThXuMqxRGjsgWa",
  "key4": "56crB9jbGAfwGCMZz8Nj3aXLwj9rMEwNmPReKStmXe9ykFKehwTArA8haBQECBAXkJm6V1bTZEwBynCPsu5uzDM",
  "key5": "2eGoLBHiY9dBzhMqFP83RNFNibwryDhZEdr7Vw1zKSeNCFrivCJfBwTAu7rXFcMAgG9iJVe9t5QnkRRY1KMY5yQX",
  "key6": "29jrpA1oFkSH6eTw8JgFpwERdtVXCB678EV6aPraVDyWo6gSc1FdDBBA48Fc6xQM9XmzwT3cRUgBTfYK46tj8B4g",
  "key7": "3aoxgRxfjcE9FSDDC4gQFkjXkeRxDLipy8GnCbQyNUweST7uxGfAhWueoNaEVgr2sXGRYdK2XNV5QV1KoJU6GY5r",
  "key8": "tJhzzkyRGv1zTxCof2ZKYth8x8nrydXVU2XPU3uWRc2anFYzJ3XajA4jZiMvqFHHBQ6SskvsQesE92P9LX61P2S",
  "key9": "4JXofERm8qWw4QqC4TfjMLKJ6m9Dm78xXX2i2sFwE9xHsf7yzfoTv1Uhfc4WcDjTHsuRqDeHpAnGp7YFPwVE1k7",
  "key10": "WSNqokRhRioGpbnYSJrZo3jC1CFQckPWj9XVqbxUDtYgdvLxgo4d9Ej9dLjves88CXfjFHNQHcwH7RRCT859233",
  "key11": "5d7E59Mr3MhH6gxTphZ7enbGLupzYDCjn64JLuuyTwi4Zd6s8nqkXfDYuC7sYsRAmiAYDFZCpVhM6oQXGN9zHMxS",
  "key12": "4cZS54MAmcyJrYHznzqZmHcZQD48i8bKhemTy8dA9gic5bdeWtL4m22wP7JTmfFTXGr1g34deitf5x7yVzCqzC43",
  "key13": "5RjzNyfgxnuDWbzpJf9HDqsxD9evDxeE19V56PnRpTQeFNowQaovAhRABEqQSavue7172CX29fJLKqxGfVLrJdZc",
  "key14": "29c6L1PCkgMvBSaVjjYHTqTerj5ha7NV2x1sEBGkFzijWDFL1GPxGzyRojmzv9u7dJvyARDzBdpXcPg39UNydDZy",
  "key15": "4WhritPLmuWPwoQJU8ZsS3krkd4dvMMrCLzfGBHz73SmxQTDqhgM3SwrgXftD5abNv7ABCr8VZYnwRwKEQ6Tyabx",
  "key16": "5CwgnekRd9pN7jdwvjujMKAEduPysz2MRKr7vLU3mKPHYMiS6U8MCXP8jbXvZjsYJYbZmSYfcQbs9ZRx1Ah5Lefp",
  "key17": "5TuyyiMG7cCm6q7FYrS2Wtr8eqkRE3Lnfb1h2JooJGjS2eMPRmJpgMLpAadFZZAnB59y2gS5Vs57v9uEbNEQr38V",
  "key18": "4uXaVMKbFaNmThb7zLpS9h7Zk7vvx4YaTmK4qwssD5u9Yzfq9XWUszLq5hyBpLcmMkYXSvJcpNczHPvq6khN3HRv",
  "key19": "53JMU7JRFMafF7X5r8DFijR6sU4Nwrp8BMoEajCiwEVv2FpSh8QtUmhfn65Muf1LEih78njF3aqZD9pCFR8csbpj",
  "key20": "5AGvhDFyaLMT2jbZAKj6Yms1ybnuz18bLFmKQsJXxYKmbAm4ggfZzYdDWHxZQdNJomCB9iiGVQE9pXXiNNgxaniD",
  "key21": "3QbqrrB8nmBdzVDsyRJXngXAe6rqzxMwePcTV9fDx51kveW5a2pS6ZcRjyVVXKqiCFCAtAZ2Kw8Zu6D5z8xjbvrK",
  "key22": "4k8p2YiwJ5DPgv2uHTYLSb79HPHtTEB7UTDYdKdXZj7DbBzD2TzxhnPHVqpWM4bcbfWKDVm9AEBM5vvT3XECxed2",
  "key23": "59CaTh1Sg7ZVn1fXeETdqAjEhXJASTQueLWqB19HARx15eftGAJf9bNaYRBgB28jPZ5ao6ChmQqdLi8WL1Qn3NzX",
  "key24": "4HsBAMMh7WqG6EeFEzUHBPhANFbYf7W3my5FkWvoXByAYDNpyjH5aDWdnp1NUQSUMWQYvhfrRBkBvB7qJdR8sP8y",
  "key25": "2C1g7DeiMSqugeaDHfttCMwDPNLSXY5zcWDtX8ddU7xgDH6P9qApr79xSqZMy79ahpy5oMtsweu6jBSPNH6DBx7x",
  "key26": "5RPgbnGQ3mmZfcemTUoPEeM5q3JuES343sTmXxzD9jBwudfwdyQ2efHi1Lf8TGLyHd5LwxWY6J45GAjZmadgaSYY",
  "key27": "9cJFGuDR71qFk5BgMoD47aoH5KXhAQQqWSmqezD24MBWg7L4emE8MS1fQx7ASmcJsuaw8K8DkEmWBp4xbi6aSfN",
  "key28": "56BQPeF43rSuk6uU6L6Q2GDLYz4MMiAoCzbmPe3acE8xnmCgqRExpq3X5kQaNK42r528KJbSxWwoh5vysy17St7e",
  "key29": "5N6MtZaQ2AUNTmsnBkSKL3g854j97qrxudrDYWnDMPix9myMS59DhurjHDZwnMDQ8hDfZbjAtMYUmUmXc5mw3njt",
  "key30": "3KTaqDxbHhvhoQDPS7KBcCVELF6Cpr73QAwcZDHDUieQ6nnK8CyEQTbWB2VjX6RT34xJTaDqTbDYQ6z6ShUF59xT",
  "key31": "5q9diKxWvGV8wDnB1FXckoH9j9ELVntqCG5Q9oF1gSYn6c5fZfbfjniG7ZN4EL61C4uWWGyZULjw3nJ48FmUbDkH",
  "key32": "2fdn12jZfYydjRovMue7JPPCja1U9BMiP989PsFq1r1DRRXSHbyF3SqoGjAwQmiZdbcsAi9VXupdSdwTMrR1UgTK",
  "key33": "yrRoEUsgmcDuXHjz6tX5K6ZRxc7ug1cWvq5JG3AnVJbYzUNLU8Guq3mGzm5hN5aXCb9fQKxikCtSuGN8yP2dBy1",
  "key34": "Yu6wxULMFAfne41VhRsEB9BYrPCPkhSKcBuikE27VGj9SwWq5YL1ZxkBSPagKrBVPrMzmCrsbj7KyqezQxx42n3",
  "key35": "51vNwtf7oFKMAETJFqJkd2CGZET96okiokgRryBLd977nNBpncHf8trAqxnrKa83QhRPRmKHJvZsFcwM7zX9fpf6",
  "key36": "5JCR27pdgUSXWBYAt45R2DYQP4r3ojXQrbYWSXsRfn1me1M8mq57A3NLJ7dHVRhNHYVwe9EKqvG17vzXgFdvQPK9",
  "key37": "5jCoAo9brZq979GS9RyFM4de5W1RPaZbVNHUbnfoc9sTDKtDpi5FGBqjmDVHMFDRdXztN3tPYcnVfrSxPYqqGiUG",
  "key38": "3uvshkEvY1vE8q9QUiWoJjU7WrD8iCpLMhcwrRXRao4DPFAmJ7JHuPSDFaZrKuBbGPFTq32uZ1nQZoakZrUBm1Rg",
  "key39": "3fLWKrch6Z2K9x9bX3vuTFkUnJ4rN2Pe3qy4Y5rquLm4QZRJnMjs9vKdnHFavfw3Hj1Ja8uG9xm64H5vTaxkArFW",
  "key40": "2TaRHWyGyysuzoqL4c66CuRMvX9JehoZDCassLiaKVTkpow9JPC9FmzHGPuUC2Sdos5dcjQ4dK27N75xavwfwbU9",
  "key41": "4iZA4KvR2sVekjkbFP5oPFF2RQWdk3beWAA5HxHxucZ8gX7TgQwMiLJGyFUZgqwYNc6D2jjoTqzXoFjYat3Q5mT",
  "key42": "2gGRD825NCmTbSJBuDkCzKG5bh6HdDLEtDnCGpYMEcUAMGsssDfEge1n2jF1VBy6Tt6oZ1RrthUMz5eBzahg9sYp",
  "key43": "54foXhxydA6sZkxdLuJyG8YAiJt4zvyEw4ShZcsf1rKG36n54oWVqg3uuXJFbPwNmvjYSwz3F5LDW11mtAcwtYT9",
  "key44": "5SjxuUVSQSYpJQyX5QdY2jDKQdRWczcwf39Psi9BVbE8gWFtYKdyQEoXC3Q1CuE8xN2WC66uwVsvQBWMjUUpMHwA",
  "key45": "42KJAPyKGqzzPS62vMgC5sKSYekzWnNg6igKvcwMQv1urz7fvAD8HW8T87otEGfYAPwZj5TY4HKNi1kqTqhS8prm",
  "key46": "6USfCA4zepZUpzZ6fMeGnJHrgmgftTniPjBVMAfxztUxDxu4eptRTLcYsD74JPfvXHNwttCvWsKVL2QDp4vqxFX"
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
