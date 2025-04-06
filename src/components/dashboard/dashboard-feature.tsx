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
    "4dJWV7CG5kpkP44wDigukN1GtCTtvSP4cSat2zJrNtjf43Qk1DWdUuBmP3hq2LMxie68JVN7sHWBmH7A3fMrYDfD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ci2tx93gF2fnGVNq5vxmY9QVSV4sqbqYd78qYbuvR9heUV9B8QVFAHNj8QWYBQLVuqpgxukC5fERBJu6HL5YvWF",
  "key1": "3qMDUd1F6WUD2gdhESv3KQv7rKLfXTrqG5tiNukQRzxyPzwuP9NSNo7LzXMQiam7hE7BqwCEjjeL8qkvaeMhSuZs",
  "key2": "3Tm8qdCKtNjSjT95eMfBJq87bUASHnbFXGhsFvj1kTbwKCxAVww4VbRK4vuPAYbMtyppEaNi82dWZ5zsyjYZmjqb",
  "key3": "4akWhgekUv7tTrvDAYTmbxmZ9gsMoYGCyCTvd8aK92SDRHVgrnDKyb8vgDg8zjFBL1cwSj37imSnVqFDypeuAco6",
  "key4": "42586GTG4DvMm7C24V4FbcJJQ6oJsx5ki7B634DAsCdcB6WdNKgPUDzchoTV1t6KCRYxqEuKyzxWGxauCTDahuCt",
  "key5": "5FEaHshEu2vt53EEzpLFcQDBmJsfkG1QAHqTz82QBQZcvoSd53ZYfaz7q89vxwCjdQHawMUq8J9HuSThXLPd68Dj",
  "key6": "4dQV55Ay6DXf4ziVp3LpSFqJCU8N2HCiZD8qiMrMbdxoj2GbGyePzKcuUVwHXK1Xzasxk1Q8tqiwKq8fwc2GPNsk",
  "key7": "2MTvFaB5RG9mvzodzc5QWTAh9Gib98BySU4umeXjN8F3dAxkCMwPsL48UevWMGBZr5zCJLB9Y162T7c1aoWuZ9Ny",
  "key8": "cUgt5Mz9p5tUjoUT9dAJixPyX3n9ZcMQaQe9Qv4PievxuW2iur7uX6yBj2BDTnyxFkSDEZM2HWUabV7Qxt1XXp7",
  "key9": "5djkXRS3JzJn7WzAUwaxSRwY5ZfjgPkGFMfV1kMFQnK7SnStrQBmBBLRNoxo94tq8bk4xPjSWFG5qEXNMW3uUYDe",
  "key10": "5A1MVJ4gmxwfXENWij6UpFuWpDqJix385jfcrcUkbz1rZMEXwuUQkHLncWaJqjDz6YMHgkYo9wrCJeVHboqJwMUA",
  "key11": "3qB4niGCa14csg7xBLuvVFggeuuaWtkRzZhRw4UbunxjV1QqkMSokKdqMWU9ti6LSNo6iJ29HqYXnHHU4RPdajk7",
  "key12": "5oTXz4bFPwgnhkaGfo6w33kx3WfXXKuSDH1q8MHNjCjgZebhWXJhLvv3nwCgzMg57phmSs6wtyVJ3FdVcZQrwqPB",
  "key13": "2eLpfLzk8afj7tKpAmANo5DHXULbVdy4PpWVyN7fJXNAALm1gNXx5soC3CDnkrZxnAxvKCwQ8d3b57HDG7HL9sUK",
  "key14": "2FBUE6FBbRv2mLaJ5g8XMB3dUK4pEDoXSeTkT1bWdUon8W8wMJQMk27rYA1j49b8doCjnaQH7vffh8hBe7XLXk2E",
  "key15": "2XLRSvQreQGnaZSazsJEm7xaM6HAEZaoBQUFioR4ewMYeKqRh945CxHAW6a92CKknWGLcJ8Gb9YZn5CqWSxZhkie",
  "key16": "2Sqra89ACqjHjh4Peq1txTJKT2h7vi5KTzczwT8BtmrZZUboChR56QMkD1DcjvMStMCBLNd8G6uQxejVGnH2Ajzj",
  "key17": "7sUUNfrd6bJK2UgeuyGEJkCJvjNMSFZDWaSgQRd9ZLKShjjNaSSLnypuWVpbE2oJwi6Lwse2dUsWF8QAnDKDuse",
  "key18": "5YGP9qKBuyN3yeGkBYdXdtwJUiWaz2ccBC7P4bc2XxxxGwQW9MnHkPXzKcUGtYGCwgG5Z7NDpu9oKgtL5fSR8jDB",
  "key19": "3bJPXebZVihuTsDGsPMGN545At3NWo7kaYzDjy1DgMptfaZVrtjpEh4YcFEHQVMSsqK6ULLiHmLiC7Sb584m6sfc",
  "key20": "2J3EKCzQGcGYKPFhViNRFyh5qPDStMm9Pnyr2XYqAesApNtsoTndvAePWB6Ub9DcQ3nPxXPm6y91BwFpfF5umBv1",
  "key21": "26WhfzcGv2qPo9WbQa875UbsYrbNoHCj9x7TvfN4wBGdz3HCttxoaAcX2fEpV4McL6JMw8SMdW2TapXrUBkiuzcc",
  "key22": "j8KPQJNbgkBpUiHdqtSi8txjzH9KckXZ1sNbNqWyzMd1267EbxQMa3RBpvVumQVeydQC2L1LFkM9Euw811i9MKe",
  "key23": "Gx5GvxF26ZmjCpNCqATgr8d7r4wkVznvWuuRA4GFKpbHDQQm3Ci3WcCknFPaXx6rYpHBVG85Y98SyyrvWZTFddt",
  "key24": "65CGkUoBuKCUv5XkVQsC5xCFBdevNNHrd4BGbvLabGJPbLWqRp1iCYVbCSCUz5XTPwWN281cLGydGn6rYygirLmA",
  "key25": "ix1HJk9Qpuoo4g8rnbXkesJvybbWnamBoLarg5QT4kT6MaiRDjAu1fNoJcLck4QdTetK9NtxnAG16G9aGUfz2Dz",
  "key26": "Zz3NFFgXGPYskBJfP1yTMjPCCv1NgZ3QZkNMox5PCNyM8TJnAtBVBPah2zLT3aK7DskLmx8DgUcDW5MaT6UWGfA",
  "key27": "4BzwLRaqTA8YrFa9tSWAcsGawtmkEQppRx45P4E3eB9fBdpMReLfTvwMrcBmvrTJipRGg56J8Vboex8o4EQuzLkp",
  "key28": "5b9RB5UgrJnmZfyKRbcc48Z38urpfte12vgN8hk2ZJQKqjsKSfyU3rkPCnyxUQrD6w862BfqjjRuRLRg14rMaph5",
  "key29": "4jWiSUgbE9C9CpBxjT7paYrCAEBgFv5AiVxSN8y9JPFCChmjnofkb3md58DhVxi5bdCqW9mSkvRkqcExdDafKBr9",
  "key30": "3AE6dESLKzXRJqLA6ZguKQ6EuTqTK7HJQkJWa39RLtKdoUFjedjkSTCSPx6Y3qVcrysxgVHpcQ8k5dsZ1NeQp7pf",
  "key31": "3JecuY83MwkWtZ8c9wuCDXYaeAHijWe3qPvow7rtB1FizAq7jvZKsFwYv9FLUnM2j2nG5ubA3DDuNCQPHgfjW4dF",
  "key32": "4FSUP5PpwJLD8m5JW8VSCyun6HRfxk7mWLeL38nYEP1FF5WwppAmEMeaTHujuyYt2qRCfV6jeZ59Cv1Vc2V6HMeP",
  "key33": "3T1t2aULwqE1W8NdDLaUixYnhXdkfSfQbKoNs9WtgjD1gxLCHadNPhYY7jK4QbF31s6jbPw7xrcqRx6U7P1fndBL",
  "key34": "2XSX73DVSVxAPQWzcabGt27hdpMCEz218ynS8Yc3abaoiEXRUC89o9svKnAeb2EFkjwDSXY2oS3dzQG54VcijDbT",
  "key35": "3w3DV6XXmrLDh5mi5mFo4dXAfMHF62WJ3zVQ3fesQFyfkgKUUKja6KeKqx23aXrvwxXRc7wXdNWBybydJHzwNEuR",
  "key36": "3y5SBJ7ttrEYeYwLLkcPKVUE9KGc6ci5Nfj1URWMge6QeHGA4jaqSycFJZjeooFZ2T1z3tAMoSB5ifkrfXncgGkq",
  "key37": "3S6Bs7s6tqqUt96WRZ4cd5GnFoGBnJkof7n64QsqJmnZatVNorhU2jdC4oQFQWR9osSQrwfUJfsRdzttDXxYCQyQ",
  "key38": "2rDzCBZU6geoMN4Mq2E4uvofWkgqj88aZyzrF6ruEd7vpXMK24i7kvvMdzsxSXpv5YhWS6CLpqBYoceyqwU3gTbV",
  "key39": "3MQUvnTBe7juCqF92DFVSg8S9X2nSFZTTUHhYGuvYUcP2ungwG4gwP7hP2AVw9gCR6nWTUeSDMLdS6vsBsd2yCFr",
  "key40": "36BucWweLsDofXyPeusRR3gSHTA9PW9H3TVZkU2BzC3d3MEia9xXzNzcsSCCKo7D2ks52DPic7Go2VXui5ummm6E",
  "key41": "2SChefi5QCvhncKMbnurbE9h36dKWtQckirEMSdMd2m1bkmDEneTNb6ukMaBjsr7Ln5xADD7GE8uWjmot57VaoSH",
  "key42": "2BEZ2HbbqfxJAAC75Q2s317XEMtdzMp91i6V5WYfpJAjsashpv3mLZg3M4iAPhFEvKSd9JMHux2hZchAYDLRoaHR",
  "key43": "452pyve77EemFwz9HW1CShoe8PH6jGBd6ssMxRHGkpmHkjkiipe1JkvniGWtQEWVMbEo7w79efY7drwL63sSzUNV",
  "key44": "EQm2qdP6UyL23r2fdirKpUazp8zu3QmL3WeEDhr3oUBAUG4GomfiRcE6J2FKYaYKRb5VRBm3a4XMrVRWBWSXBJB",
  "key45": "2ANs8eg5eSEzURGCJjJBhSUoucB5MLUVWz6qQ43oGdTtKrYKozNxtGSnzbndPudtn7XTE7gEreNL4aiSuc34533X",
  "key46": "5427E5ecc5j4TNKnBVHcgayNh3uyoSNCn9MyRgo2WwSURhdGAj2bqWTE8dmeu2S1TkLniioLqdaVMVJDUEqiqQx",
  "key47": "2Kae7Mtm3kiacmtiXjM1MtkkAFLGV9dp6vfzJWKV2hzwWP4xnPZizYDtyqxShp712z6pUBbr1RNmfstUhYZxoznw"
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
