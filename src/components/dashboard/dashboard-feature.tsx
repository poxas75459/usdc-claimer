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
    "5GSAmEeeKzD7ysFPsNZwCqAXkXA5hmTP42suSFHuvGupmNdEHFECzM7eKijQ8xd4a8wR3h5jADwnSoGanvSsjDpB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AqZ3wwhscxrHDGqxLc64RvRBQeaFm3K53Zvy29b3vUZr9DF9ZfcpYgG6xry2VGKyaeq32C4JoQWe4znRyxHcR2f",
  "key1": "tUicRzUe9v89z8oEuTMGJiGrjrVbjtytGa4Hmxb6tsWuSqgeUknPNcVeRikb9Dwe8LaVNzogLhZnrFmoU4c376j",
  "key2": "3xFEh57Vqgop8ZZSwzDrxQcU3qE7XdaN2BvkSQDdPQSLsN3KgzWYX3RuTN48LtR9EbnLLrVcqEAsjJRVJEBNpGd5",
  "key3": "XnCyjyJUuw6yVH82xdEXFVanu6tpGSiypZ369xxJBn5m3xYC3ZtY4FKCq7DkPwxSvePoYRei1EtkRsrMVWn5h8e",
  "key4": "3UruVsCT9jamT8YuFYbgYse66WE7HBzk9rHKBUiNvYJEVKC4g3W6pAuqMFAqiPnHwzKLoRUVrJxsggfqAi27xYgw",
  "key5": "5Dj5sAWGiFMm1T5dYqQ2GvPUqPzu19QdHbD94eQYJnj9VVGvbPbuVDiEVEHbAsEqhf6wX7i6rsimGaQMeTKpSV8n",
  "key6": "CvXPwrkoGeAXKWzgPM1JCQc9GtjMdQxieRihwz5ruuhMMigqbwToG8Vjdz6Q98d36nuV7xS3Ga8BfXKtwhWMQQH",
  "key7": "61NMCPYkS68xxfTD4dtT7SqhHG6YtY7dq7SjvHV8TnGSwJEwShVD9hTGT8hYQYCq2zSQzAaegRGbRhANk1x4SanV",
  "key8": "5uQ64xx9UQFLtqAXvW8dTg2cdA2kgiUuRKHmxio4PNDoFX1UeUnSZNMR8QCSwj7MLpwNZvRB1xoZf3MEeC6YsoCH",
  "key9": "4CstciPbcZCTcDAtC5vuiQ1yW5C7zJ2kHBqjnnk5fpr9JZCTjDwSCwyyJESgLr9FvPR5oytfgs53pCWXwmfMfTjc",
  "key10": "3eXsrGfFRTQbuctaXTH4SxXejnHsULSew9PUNUz9RzueQhVBXwUxQgh1UmSeAszKKS4AQv5kkhPirN84ibZ2Je1T",
  "key11": "m8hPWunJy7UGkJRvjQ8ZdTqFTNV2eo7nBWBEY1eVNk8L7ApVrBnfSj2tdUSuTKrPKuMkJVKxKDAZdsSLatYDWC8",
  "key12": "4yMrZEcnHJHfwRzj3FShSuWmLwy3oir9EpBXUPLNkmQEbh7HuwoHV9LML46sdAnzba7CaBtf8hA4pCocihzZUuuC",
  "key13": "5hvcPTgdLjwRra2mBYa2hRWP1NZyjfcvdoMwmbU4qAhjojgsz2tjaew5uxxezM7X6AVxZZFdGsa3jgpW4oDrJJwR",
  "key14": "vUMUMFNoK75QCKSmQ4Aqix3FwGLUufWRCv6Z628iQ4VCmySSmhMyGdNMkejbCKCitrCAd4WQ9KGpZNWRbDMv6C7",
  "key15": "XaYSCaRsgjNUu5D6efz5ioMn1QAiMv9oqiwoG9eyntQwdAPD9U8rb36bLQuG97NvRp36doqzthMnsrcRaRr9nK6",
  "key16": "2mTGs4wLpWHx4Tv4txx9CDe54UL7atcCi23mVuQjkSTA9wxhmDEzC9BdL63kpf72SKbHuzQ1pEi4Gm7gKakRpr8a",
  "key17": "2a2bNvKSJt6V6JBqgGmVRYdJWF6U6Um77c9GS8PKAB7vB9C4YCD5gDKKZLYNHhRt7EFp5BjG5erH1sNLMZRo6y3s",
  "key18": "4CXRR99a4kKcdx8g93LGTAiizvZxBqbNsQ1a5ojmsEYyunHPtMWxbQ3joQu3SY3sfBUkU9LDTJ6upUxsqwch5etR",
  "key19": "3NQGmhFuN2MW5QYDtwDYzDBc11DE68R6g6i9DNtjFRoEjPABrbdEzVKTuqThyBRVezwKSMJffu7XpeL2nV9stwkh",
  "key20": "9nb9yfVHiaKuijHBa3EeaV6XakPGbMiwepX4n6iMgFmBUEKeFXoygGCRui8gCkHywFnhdegzy41rYSacmgC5RCd",
  "key21": "3bQwcmL4d6XKkBRpTCe4g1LJHj4SX4qAV2rMXTeDK7WF9vqaRaebXPwj8utmkRAZkcTYX1jhpVJhM7CUw1eSVFcB",
  "key22": "3uUNviC22ya5uoxcbrxqU7hy2S8REWGLyVQ5ocnEgHcXnWrZ5UdQ72JxKjHyEyxKC6z4hGj7U8U9dqVA8XwJ17qn",
  "key23": "zsMFhZkPEFRaoYsquQdPvLaoSUSfNp3Bu2q26ZwVh2oJhZVBNwQdAFtUiimUPDoT18TEgvQFruH4DDkswRkiDiW",
  "key24": "356NdedqnutvnmBwToGyP3ML8XEwMmNMbWzppGAsRmyExUvxBVzfwsT7R8E5HJkf3mzyFoVHVaTWTZrQvzt71WhT",
  "key25": "3H4z7gNMne2diEhQopmAjKDZZcBTdPYGsva9efNGaXhi15ZG7drJ8RwxXXx26XZMVUG8HDqmn2uU2RcmKBDUPPDR",
  "key26": "41miviSt1Hok834b3w5MVzoka13oU6gvW72CTuX9be4wkdNiuP9qY4Jbp1Q73BD6wnv1g8KZtLicQ23qMhWVckwQ",
  "key27": "39AQ9eb8D2GmoHJdrCBZ6yEu22bNTjDCbwWUf2SbG3rWFH3EMcDnWEKe6AULr5ctrUG7eyF1LsebTchZhcxZrs5x",
  "key28": "4V32bmZhRsVGvC8LjEHfqyBQXNNLzzf4KRQENtpzDjsVLkbhmPnSjX2JeUW9hAWFKkfbehBhi3Uow9Mc8AV8JBSz",
  "key29": "3kYh6xFSPWUprK9jCuqh889Ye3annZLGsxsLGxmsAYVAr7ebGu2Vu8iiGUZuMM8agwjTCzU1LrAWwvAuK1PggbwW",
  "key30": "2Rj6zyY885i3DYuwcm6JeMGLNXSLur1HDk1cLe45nw14q66qAjcsic6eX49i9RapsygC7dPNmTaiZpngXnFHCB4C",
  "key31": "2oZfzkvW3jtVSvLUNGpgrvgna8qDfGbEfzwUok3PoQ4ti6uUK1eaCcgbcumqARaeQtnTQTbgkcBtzodUrDD7qh4B",
  "key32": "35zymT2RLgrFtwgJXDYbJhCX3mi8qYsxxeHqqR4iPc9gTJNuj5Dh8RFZJgM7Azxnk8S8pLBpV5vai5Y1my24YvE6",
  "key33": "4gyMif7Kr7d3HjzdfcrYHubanmLoskdhuQGzW6nrBXVyYmt7bGu9BCGvsWsDLaEutf5NAqRm7AGr8soExkSzPqqM",
  "key34": "4teHWUBmGPDoVjcMk2DJCc2CqSc7CbAz7Ms6Fj27dSSBLKPi6gfDwLFe3ZR99MHaGvRxvGT6Mv94FxGBRkUdo2v8",
  "key35": "3zbSgqwWT6gGcsBtRx82R97wfxvYeS6QJQG4EZ4Jyqv9NpFzs8R3B1msqP4S7arLnxeJBsGQctP9qM3X3FCfVouy",
  "key36": "26QYtwKorqMP3Vj9XLGGPtjNiZHXx9iASoas927aPDSYLbdpG1jq2XuhXq46KGVw5t1P7mitScG4YgK7WSKtpmPk",
  "key37": "4KwmeAHGEBUTNPCZGgcKLd5FWzewqX4ouDaUX5Uhby2yqtyhd5kJLuApUdoyXF4JLhi7A3cTvNcsZNKwd2KS2LxB",
  "key38": "ahCG6utk9hxc3mtF8VWyufbis7YqBaLUWBW3uw1A1knK4tYiWyavESEaZFRA1nUG9kMYPYKHjs9LtK3vXuc9NXD",
  "key39": "hof5oiUkjfSSK4pyofCZsSmdsDnfY7wR5WvTsZhEXoAW86uhhdZPj8stEXTAvuHBJEP6TBPXw95KeWxEEpjEHVH",
  "key40": "3LcWwRL7f1AbRZtkVJfqyXwhN7ukh2n5jHLjTsVuLTK76Vye4iS8hWiF2xdvEJg9v7RwjDnfMUmsvFBtTHAQhbGx",
  "key41": "zodmRu22KqVuL9UZYcyo22bhLbM5UgWLaVcTTzwkAoEuxvnLYY4BvFyNpBxTPujxTKmXwAB9xvhQxrn31y9Zk1v",
  "key42": "DmmuRgEJ4XntstRwgpcTWPeQHvgAgJonVefD9Kw4dpA2uZusE7zasHh9oHqanwgDk1iC9yB5zAcKMpRutb6vZ76",
  "key43": "5rqL2ibg5wNnadHETt6qcrVNJqQXTDZgvx7PoT6ujnrqfR2yWvKyo1ZGTSfVPf9wknqpZZ7iQgoywLikAAF4rQYn",
  "key44": "38iYvTkBNW3Mxuq4YqHSQ6mjmZTenGsujUbc1Mfch6TEgnPhrZbRALNyt2XELatXGeiUoXLGHjeFcUQfW3ZQmt4A",
  "key45": "3BU6cASxVatTJmsKvoyH6bXYgkzaskEk2ee4MtqUrA1tYuP7CwAQA239GUFPRx8vJu3yngRqargVqm1b17kDaMU2",
  "key46": "uWt6bcxLumriob9TBx7whbaGKskevcuznDzsLwNzbGUKFP5MA8HnJGhJy1Q5iQUM8S4usz5Hzi8HiovhkTm2mgj"
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
