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
    "3su9ZoCNt3m8EUj5dFRYNfPS8M3VZ6FDXoYiYHdR8LmomioaujE1Gn31STwvDiA3aaSSGfqPVr2328KQ8o2r8ah3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33mrEjdP6kS87hdjdk11AX9wWun6NFy5jtzKaYgKYwVsptCQssxTVetcjcYVvoAPLc2AZpakrj82uXXTFbReu2sk",
  "key1": "247tVuLJZtzY4vk8iBsGc5iZmQbmcDFCGjthcV44KSz4VRzeacA7fLfXfN9HZLYPCtKEoJXgSto57Z6idFPTQLEW",
  "key2": "31qjtEsVU8qbFMqr3v8YDyC1ECxiMFbBR2uEBttZuzvrKApeADz3H3qGVW9SkJqJWjpBzy91UuT5XZ8nRQ2vgCqd",
  "key3": "2k13Q1Qy1JTLbnKcxhYNHNyBvxHDq9YDzkgmZjUX9kYkBrRYDrCU94WgMsVa6ckQLAj1cBVhAvcFcy4EcCheV6v7",
  "key4": "3gYM5r579D4cVPvri3UcUFmdHVdWBzHTDSetRRt2m1xrmpnJ18nFZBiSVg2UjhPexGKcJUvGak8bYqxG92oNKKdt",
  "key5": "31cJBfZiqkNVSoMXda361yqKcPjNKqcSEgm17a7hMbdrBhDxW9cacozMPy4RHsTjPyAr5hGhq95WjSYVB1Eg4A2u",
  "key6": "4FrLWuPrZ4y48YnGdFqGUZ2LQArnsfRPcS1Vkeeus72x4v9pQUbCxzVSSUACN3asZ6QZ8XZeVzaiye6AjgD8HnkA",
  "key7": "36XxG3Hb2thSYrRyd634xwq7S2oW6MNCykAVMsmpR32xkPdgSh2Q4bNzmpeWUo1GxogMxN5r7Xz1Dof2oextFjQ6",
  "key8": "499abJkmKiFSbDYfGqgRBtsVNoGfHmrfR3kpV4hrQLHrt7WWdmjdrGvB9wrDCY6dBLKQNYG1Rpbgzk6bX3XLPoJD",
  "key9": "5EdefDJQ2BKJghUfz8EptM2iCHMEKCXSdo5xhTYn3co8oE99TF991VbnrHNU4z4AVvQS1Qi8pnw2oQjds5Bg9ma2",
  "key10": "Eipb4XmyWXnMAYFCRDp2AJKDHPNCGvPChYcY3RG6n5XWRXN3mm6XEPaMp8tmFRD7LWAsogEytyaRaNt7GTcDDSg",
  "key11": "4BnVLf22jDEXAukW3DmuYJpmiPWyYuhLG2xti23ozf2sc5UYJPcip1ardv45b7d1xNHxvfhee7EbV51LzZSy5iwt",
  "key12": "2QNibLRfFGJsHECGFNJgViS8Aq4HWgLcAruKQYMpKWmnV3QA9vMqCFR7C8iwesvYT2kTuDCUSq9d6s69YpV8UAeu",
  "key13": "616Cyi6YHi5nNg6NzciFJhoqHuiseuPs1Sd9bCeNWui7VfbZUQoWgNer87zTR7E4BzY8uBn9dQhu1xF5eVG4YTNY",
  "key14": "4zYM3Yff1ZFk1r3op1Z5n973htxKjVYNRVEGCriqgCHwRP3zX2NDoFpjGpYG5FHrNDWC4edsrJ63J4joibLF9zgz",
  "key15": "343pqiBX9jAKNcQ3t6XUBTundrDj3gBRbBENab3MHjYaYnuVph1ukjsV7Y6J1EXvgNqJ3SZZsTTuU5KahDaDJwno",
  "key16": "4XrGb5nmkbdB38DxNMUjnuxuTNW9cSedKfXSSityuYMtFmKAcnUcUpVAjYPh5xi1pPFpFyoe38mVBFYGbNKWxvq6",
  "key17": "D7N2L446PaJrsva67Vfxn1xDqcPdGxK8PgZ4pdeFwb3SyFAbYAQNrobrhjmsBcPMd9u9Bo1fe2tPUgAyYHPJh8S",
  "key18": "5PUZrgtiEampny4ffuYCBHaB2yk5AEDTVNyJmX3AfMNWsaRyqWMNyqinbA2xGJC9UttXj87f7bWtFS1c9TPPMPhc",
  "key19": "pR6FQXsxnTBr1oSHqng3xqvQ4yNkxA23thjUsBqdMH2iWVS4taT1DAWEHzvr8HJRZmyJbQRZ2reXQYpaJjhtzxE",
  "key20": "52CDEvkaGX8Q6LsX3HGJmTQWZeT5pez57dBGcW8T51AdLn3vXVpdrHusP34ULNERKSJaBHBrZ1STCk5nDGFRw5VK",
  "key21": "5QsfD9ri4NhUkwrAfv2R5n2yBoLtWH4y11JnoyCDLfjwCAYxxc12gNSgJLwgFMtMjpQQZu1S22nvrhENu4p8Y7vv",
  "key22": "28MtaUD7mRpCNn2fFJUceJcZRGqKpUrLxhUzwNZFLukcpvruQY7TaF4Ldq7CygV5Ds3hi7gFTWZt2G15cVYon8mb",
  "key23": "2HdGqVNB6n5JaCbFqbn2389pKfAfe43ZyX8Udh45FPr1B6JTxMBGwtAQZqUDuk2h2NKsvJGTjVQbKnHt2veidT7E",
  "key24": "4Goz3QXEcjW9LbzkMvFQ3CNpygnBuKJnD87Dv7ZXRqNA7bM8u1ZV3ZwVydK3z8rixKZ2rzC79HKVXaLCtLTv1sqJ",
  "key25": "2sMmBJXByJubsLMUwhQseqzfQWk9QajWZRY56WFvamuSARGsoG5jUiDeNJQUnaPSawmYAHX1xs76pcatdiUyQp6f",
  "key26": "63EK4JJHfCkRbLLeSZdh5aLEFwQSdvbYgBkSH6ZJQ3T9roq7JSKKHrEM5HfNpGNbBrVHVGT4dQqZm5wScZS2zJaF",
  "key27": "2cX4p5bmhg4qSk3zQcvxTPuPKyPLTDUm8pVYZ73B6DrSjYYcsizEqGA7TaTE69zzBHj4y2ZqHkczEfBe4s8qEYWc",
  "key28": "5NxffgoZzfFCe756E2UizMdr3gcCzcf9ECK6TUuQwNB4Whygq7qjsyVdF1v78xUa114vkBoit6n66UN3iVoH6eUv",
  "key29": "3QCaW2Gka1idrv2bMk9P2TpiUuurip45ae9eu8jCvmeZv9s3o9JFfmcXp3La1aHaMGBrYePGocDYjVF6y8cMjZVK",
  "key30": "4GyQZMjYzakZ645Qn2mEn1oaQj5huJ6Cv8W2tax6VGsmA1Vi8DR26eoHfBYgqxxWhZZb26vaUYcYyeBMoz7CHesz",
  "key31": "5wHsFRygVuUAhvtNRGW1eXo6scwVwXddyuhkmXXckL6goEgydoUie1LdX33DxZSYErAwEFmQbnKKUx3xkgXoDM6q",
  "key32": "5cihGqPghSGtYeLKH5FLMyfvsWiQhAj3ssFyM5NJEr2HNbpgx8PAZvqwEC8D5Bicutp5544GGsg9t8qvmH1dS4UF",
  "key33": "Sh9auZ2mKmFg55rKtnRSL5J13M6XTJnPXY66iQ1Si7kSkQ64vvr4eStb91WjHatba39BcmWf8xjrUPipw7NpFrM",
  "key34": "3q2WRfvtQNNpM84fYJoneU9NXF79M4f7AYpmJrEGGquE9Gk7gWaFb3ZaH9Sd5oh47WmdjcEJENCZbFV8jZqgPgnp",
  "key35": "5bzaFUn5RvFRMBWmbqPDzMAVjGxnd7WbEuTqGFBKBHY6rywxsXnWiLXyZ2fsdHtdTaXNcyYpn3vivS84GhMgvYPz",
  "key36": "y6KQmsPJR7gmtybPnJUftn3BzWDxTyW1UsPJ3jDH8CqpTwiJo3Q9wMR5CfAcc5FXzx9zWMR5uWqQmTRoYUJ8xio",
  "key37": "mHaZWebkGiGukXoQnQ6wgCAz5Bv2gHKDusJkH5rHc93mMj4m7UgfdhxPS4V9PPpDqtG9L485kzFxQy9mycXDeyJ",
  "key38": "PnkJJ4UqToKRs9AVwqzDCFgZo1bRhRAk6kBGXpvjWvs8bdeEreepWCiS8ii7DwhA32sND2wF7pdkNAJLemxpzkP",
  "key39": "4e191TsyKnR7jieRaFTCALUJwaUeP6CQXvAP9c2xcLHQFW8CFrjpnwDRSymTYyYT4XGfYNzWZRku4iLgjpRLmH4X",
  "key40": "RNnHkazZn4teqEJs9JWJJNqShvtvx1dTY3nX42w2wStg3vJ28CTDmqaoaWSczvMXajC22Cw7HTtAcJW5BiuxPVt",
  "key41": "5U1iSMFHN36YGEq4N31GbSzSbkAtj9Y6r9qw7sdL6KBiNdmsKmmvAqRBH7Y2fX7rw4Y51qasp59fUyjRe77TSVZk",
  "key42": "45CGB61oyF5rV71K2axseJxNSqn1xmmxoxMo684rJWmkDKDjJZSAv9etiph9JkheaSvEEVxHoQ9VvpCyrnKTBReZ",
  "key43": "5FQ1DM1cZwSCwy7Nyf7Ag6yU3ABn28dNyCeEX6aiPErVvcjAWDWZHdd955w1QV6HsoTBdkAKLZJ4iu7bA4zcSN4D",
  "key44": "B6CsJ85RfFXkBmxFQBrYC2XeYpBCeFF2j82UQuZofQVr89Av8fio1FxGrqJz8K3PedEVzDa3ZFhF2AHDDt8ULLS",
  "key45": "2Nw82U33vkkjEBwoU82ALAJ3nsCPC987ZVbmabtm7r9Ydp5duM44VFTfBZW9LcrtwBMmnNqFoPJoxMwin5i4Munk",
  "key46": "4wQue6hhGhGxSR9JM5GGqwDtQ6kaKWRhMzGsecqgia3yA7oGnkqWaSwpJWx4aoH2LdgKZcAEmTKUpWaD4MmhzvAd",
  "key47": "47GuFEm7L4bFDYbbaQhaoWwXfSBqkNkQtjpJyBUY1JGfsktEkXHVPzwArQ8xyJu2D2BHcWb4tF3e6ZsmzZ4bvcww",
  "key48": "39zTqqwWMUmbW1vw1DmEXvMS8LwRATjvuM2xMu9vAmcxB8wS4SWpRQWHbZrwoQYTh8AqFhV6am4GRs6EUHNpXXyn",
  "key49": "TUbjQ3o1qeTo93Qxaobvp5PAfQHt1icmQBjFHYggJTY3MLaPo5uaWUdeSsUQDAQWiYUfo6qzsSvrWtdwaSHS8ZX"
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
