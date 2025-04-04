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
    "3SswdQTVAwS73j1AyajLRvobrk1GZDyfXdS3zLQTLMuqYKwVhAojH3kphnBYxdbfuCQMpG72XP3Mh8UCUyiLyGcQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rdXbtbiVrPYxam2sTmiw6k8zKJbuew5ontXHJPQsnPPGNBYVvDRTfWWftrUNZtU4PP66G34PQc55pnC8DuBVMSE",
  "key1": "5oivRpdx37NRMpGYpk6TDwUCpnnod1KjG3yM3Svj2fTzg8BjwJjoguEnbwXUATttqCCiU9b45CvEN1VvV97NXCte",
  "key2": "2XekFeGDHhpS4yn7Qr1A2WHVMBb5ZELzHKRELM5RKZTFaUvFV4zhQ6M2mpsTrhD9NDikJYgxXjs2u6yTbm9yDE4L",
  "key3": "24mHY99d8nKacWvxqMj1rNbXNnGCjak7ohb11a19CvY5RA2ZsA9tm7MwgTCgBuyNjxh18RVss8yZmQHswYNHg5F5",
  "key4": "22jj9Fp3jGeDWZeVEDFbAHGjMQmBRaMAdEKMMc3NqNki9oNDmkqJwJdTan87x14gwDGB79j8jstm5YEBDoMBaz1i",
  "key5": "3TSMxWsFnJs6PwMiFVnu771Af9S9hzfKpdyuFTGA8bnFjBbhV7xXVd6L13im8UL4VcsyQ5wEAsp7ecuSZvgc8DQW",
  "key6": "2yeKPq7dwJP3urPuDMjb7Qc46KakyStc37hTXz2GoozeepB7Ktxycf9UeviQnuTz3otoiscx7RVcKBHhjgxBehq1",
  "key7": "27XDgUiBzrw1X3NGX1uCBnmz1qaPVi7RWmySGCkAFt7riKeL9MbL2rN6dvofGe8iuNnJ6YUakSYztMBJiAwETyLx",
  "key8": "5vBrT6oP32abjz1J8KadkCwz1PJShZ4RY5ZhzjL46fRuMZxA9nZ2zX4xMauBJ9bS6YUPB5vLLTCF5ik7rxyWTkVm",
  "key9": "PMeBmZ63y3HShgHUfs9FNcQTF3ZvEELBJvn47gsY1zSEyMfcAN4ah1MHuidsSbSzhWvn1SC2XjZ5rqPS4n11eWT",
  "key10": "54w7YyXnsWNzxRMeUX7eJkAYZVmLQPRw8dHLe4D2YjzsGRNXry4dnazP4si8CHqpHeJZTmxecF8m314HoCvmDTUb",
  "key11": "4HA67DR7V333HkB7ytqPtkEwYbHdDrHUEY2yVEdPGjxroQws5DfQTFnHcrnFAGH9zLEngYFJbeNUB7xQEnGPq6e2",
  "key12": "4zeK23w3JPJVk13hGQwyTrGo8b1ZbFTqYCGNq8maarJE65P4RKAtJecuDkxu5BnebiTo184Vxtnnqex6SHXgQGog",
  "key13": "3at7th1P2DtqwESnZsMHz9Hd7tFG18mioJHZVawLHoU3t16GSzfFY9uNoHVBqzuUSM2fN2hhQWM9H5U1WGQaUmXQ",
  "key14": "2jbFQsL6mbeViJZeAr6PUWAmRRoTRm8sRuc2RBj3WLGUnFPuJmUVT3cQ61LDfYMFvbz9S5HPK3rQTE4Qu5P37zeq",
  "key15": "M3mTHxLjhfMMQbehK85nbrQpa7EhQUSofQiqVM7gxp5iQCYZKzNNQnxyFUvJARUvuxwD859hRyBZ7nqQcgD2vXk",
  "key16": "598NhwFCdHjurgBoxQEGYkZWVTdYJT4VFqKGyLrk413Kz4BXEZPEzAAHYnbXG3YwTE347mwNi31mLDNsdWZQ9mT3",
  "key17": "283TZ5Lk1spzX6HiFTWp2qmiT95QEajwr2GabSYyx2GYCRdfGzMudx9HEgxNsdRd37cJCbtVLZ5H412aSDrEvAJ8",
  "key18": "4KGnntx4AzgMvwdPLP4b8WH7pLNyeEt2eSBhBzAmaJ5bEZd2CuxmdqY5ngJ337PSzhPVCbByd4rKqETGy5C4mq3M",
  "key19": "4eUYJV1MU1897KRTHK4NnVXJResKWE1ZQ6NfRwV4pwyBCwCQHiZJVp1SjCzi9kScTfzqvqnisfdHefcuuNAjJBuj",
  "key20": "3gmTbtur248DKgRpwVW4sBZaKzuFVuXkVNoUumGAcJbxt9QmQqZ9rjhZ7SFWDQGPhS56KtU5pqZ2UD5WAbZZzhtT",
  "key21": "XpsLDpgL3hPcivCnf1m37dvH3wwBP5xBqt3Zzawrjeq44Pjk1yQDGwQUw8DSSv8q2DWRBFQeXXiumjnuDC1F2Jr",
  "key22": "253udKQDJErkMgnC3g4fJK2kMTZfCiRedixfw6NaKfNy3XsPFYdy4Y5pkBEAiFebcENzG9CgPe2qiTzzzmaPVvhA",
  "key23": "5EPiga8jxRGcQEjPiRxt9Jja81bxkzpCLfsiiyJcgExNUjwJSFUA3ZnRjjqTJKQeFL9DokWA8CGz1Zw9TpZWEkMF",
  "key24": "3JQ6LzXx7V2QguCLJDbbc4pJDiNKd6cjS4h2DH1Cb9amBcZgTHmobQpscnUPcBTY2qyKsD3bt8ckok3ntmJLrjxW",
  "key25": "2u8t9hqGYe9psFeeC36tc7jManeAXq6quTkn3zqBKB7LJTH3XJW48wBsDyPHZnSoQ63AbJMojjE27EKios32xzbG",
  "key26": "3pVRY8A3dcgcNQVJasoscCDNeu5ELxpx1ePHPDaAduYPjZRXcsHReNfeGHCFAsHuAsfFdmBEPgCRmVxUU7DxZS4V",
  "key27": "4xtKdsXpx4h5vJE3eCZXg9sZA5rQWraWSCsan4tojBjXeREMjMpvcEnxQfiXhwPVEWyeVpZqTyw1fHYRUd9DMNj7",
  "key28": "4rHrV3RJXEz78VPKGC8kJYhNiCNB3Bci7mcBHekq7VvyHN8pmgbNHiq6zQuBu7RwSs6SyuKwENcR1gD7qSZpH2ft",
  "key29": "4uZaNdK3qSbEt8gT8HNFC9zdcs4hUMcJJopuK9eMCrjQVPCMdoDx6D4pgPYPm38tzC6UCqinQYSTzjaUz1cRGoMa",
  "key30": "3sBW6pj3C27c9PsAZjdLCDvhi5peNTuC1BWTbAERP4wCJ8Gtyud8dWwDE6Bn51hEnVjMUYFujAeM7Ajo6T74MkTe",
  "key31": "27eAX2mT85TE42xfnKsNM8Qsdk2CsWqfiJ6YvFQS3VWTYsFSwpHG8xPL7ezC745PBVDKTDTeu2iTxLcf2RwSnivo",
  "key32": "4p1RUCRSaw1UceXtDDpt9CgpYysdKTCk6XucNJjB7HDUxFAsBz2yWtbw348dbM5MAdzZhYy11Pzrirt4rasZWHEE",
  "key33": "3okXvq5mAjfAkPJFgphp4tw3RKfHA15cG9SwEiMyWXAugxWcGM7SU8T8R48xnBmiEXfLPCeSGj9krwaCMDirqReP",
  "key34": "4uqzR5La5xMpX2J5iErWbHEmYkPwQtm1uGMerxEkVFYSQ2m5HTi2w3GUWEbTehbis5ppiKbgVg96xN1Uu3ye4a2D",
  "key35": "hPunXopaooukHhcW6CR9wBYatoPB55Spk4WLsmZxAk9zvY6LAPTxDQJxBazNJdbK6LSRKzvnzPj7Uxvy71ppYGy",
  "key36": "4eeGAVg8BaYnfJD1VL8fFsT5ykbJCdqKA42Y93FCa1pTNvAaRrmtScz38qXKcJXLMrQY7otxZukqmLLME7V3AZay",
  "key37": "fzYuaEvxmbFD9FC9znh3TDT4aThhJmEprssHeNxcBtxakxSTvdHCSNmZwki3Hi7dijJ4t1F8bbGxB9SXi8aWDyp",
  "key38": "EQiL73e5RaSTVYC1gWt5k6gMCe2NYmxR9tPbcRwcXquER8UT6g47DA96Xp2EWvRYHi9pmY9F2a1uJ7MobzyKXEq",
  "key39": "3PXm9sXgFhL2hxJXbKJmkhj8MfJWxMmdfNDxNgwhWJE54sHe3JSwUNxSrBdG9zd76d7fyr6d4nZrDBCpvfVvMcpc",
  "key40": "4cHMAKbjdbLazbGdPCm6aqGhy8Mg72xbvdaGNZqxpZdVpPXyhiVuQZJEBmosZwT69pbBJKA5Q4hbSQahgNb5HFsU",
  "key41": "dxYYeyvJ5C1rueAmfwh2qnqoGsZbqV2Z8muyXHzZPcg4SV83HNhZE7f7gKvNuHtFhWsuuLuz9p6fdQUnrBaqoYg"
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
