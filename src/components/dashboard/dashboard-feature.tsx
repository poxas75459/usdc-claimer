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
    "RDxKtneiSjgMP9GBGDXhSqB8arMFB7PVbfyJzDzpcSexL4rST8t6jUhWXKqspW8gtYpjoJnvRXcadSin6ccomtg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rjJ28qp3RPVHSskj88MK8tRDfJqtjRqijjPFdWx5zCrPSGk1JtMpQkQHF3LdSE73D5s2icgp3bUjgcFhChssn4p",
  "key1": "s3KMbr4WgMcDfuqkj6UUYsNNDgLi3X7QR2DNZRdEPnnYQKodjK4U94uAf6kxc7ht4HTT2ugT52Eoj1GMaXkGoiz",
  "key2": "4GkPgAEAUXC2f92yDxn8xo1MwUN4woLMu7SEo4AtXigBhUdvrm7M4VcL1WAhvuovrWhTgLreN3tLZMvrufHqjSap",
  "key3": "2fo3seRuh7YaZtueKFRvtcvgtS12xzBhZiiMbxrKxEGRvi4uMnohMV8MRhACHUcE5Qt7bHHN3X2iDdZ2yXtwFL1E",
  "key4": "5hCBqwvivKgXikxvL3mghfDJn7sT9n5wd6Pi5jmEzwx6e8EHtQm28x1a3SCkTmyro7DLvjdXbWoBVc9JiYnrGjUV",
  "key5": "2xJS2DU3B5hSwCiceXrwBY9icQkSkWVGrEPJFZRAnuVXJVwamng29KrrcRgtgb36qJYzWGvNrM9AABgtGckYtMjY",
  "key6": "2RwqxWXdjmB6sR9NaMVjpU9uRmb7grH9frvitzNCJvUD1ppQKSASAfkhPUDYhVS4f76sY8ki5wkKaTbmm661iioV",
  "key7": "123PNC4VJ5LExuqynq7vXmR4diNi2b1CdEoP9EswZ1xVwxNGcaq7HgusjapAsVm3wgwpxqCaSKvzZYt116DQ7Ans",
  "key8": "4yV73dY9ZzekWn2Tg1DhUejtqF4AdcW1CxjDgohSRv5Hc3xWefkVDGnqPSotvc1PgyrYXjEFf6kxExHyaHBVtkv1",
  "key9": "5bRrZAd69PWSTMZXXNytsXYUHkBaRX8Xswb8qmd7ykeJZS8GJzGe2jc5HtMhrcUTovf3g1YsNY6NF2CrtRDMctDv",
  "key10": "5Rq76qgDBcsVCUEesGwQLEx63AmyRsAQoyPjnYdAQ7yk8Dwx8iJW9Q6TApuTCygX7Tj1Piqyz8dWEs43mfgqrfxd",
  "key11": "Mf6ddGrGQDBxWBNWFrrztVTvARcNQsWzUWdGUGmvhyiMrrjCYzsT8vK7CSs9eTSA8SJaZSG28AVAFAadkyxxNLz",
  "key12": "5apLSnrUE86BuXytEKyU4AcoAsC1bwEL7cL6xtDb3eNPNMiuAXqoSbw27BSMHEvjuUM4M7bJUEZUXStXvDCkgbwE",
  "key13": "2ob3Pnc8TZSigz8ebBzuZnuQ3Gj4jbPSSzt9NwGmoexdUiQqq82BSejsHZ3Bw6qZsUVHoV1Qxytobtxa3n3WfofH",
  "key14": "5Dv4nb1nSvuok5Pnj1dP7sH2PEQghLhhUZwX75oKaL2xN1WH8e4QrAP7AMVZonwzSwHQmS7ByXUojMMv7oyJfmrb",
  "key15": "2fMc2bsjYGQKEbFLMRGfKg5ipi1jkzbSUZhv9WaogUjfgmztmiRYgADYoQuievKByzq5Rode5MNJGZA633QRJUB4",
  "key16": "UznVQnuB66YajzPQS2T3wtwf1g6uGfW3FBSNiH6zsp8Ybq5NxWqEH6tN8EDC1wXprJqRisv6aRqCwpLkAAsEspR",
  "key17": "x79HXyh1SrmNFidbaMLRyz9qZfnpV6AtNGm5TpdAN6cBk7Tset3zw9RVJQGoGSF1hhuUi2hR16WDtn6a2AiDLwk",
  "key18": "34VsSZzr4XR4pZ9ishp2thRkqmPsqaZuii7qTSAsK1wXi5o54hcAQQdqmN8h1ykhDMmZ4Akg4mmw94K7HNwFf6cd",
  "key19": "2KpyQeAmjQqMtU2S74a7qG1GUNPmiSEqrB4ZeoLHapHx2Ei6vjwhFAHaGXo1NkvL1q7MSu81scWhxVUYsX6exw96",
  "key20": "3j1CuX8JD915wxnNEutL44xE5LnPtovH2HqhsFMXbZKFK9pEMtTHhHtuPXivovk3Y9VnUdC6us3xuADEwgB6WDkQ",
  "key21": "4GgjYypP8sFdvAZ9NDpPEsBFum7LzWkSyBTWw6bSnjpaoCA7FrqmYQohf9PzLHKyDggPxH7SrZ6PYPCwP2M9RESZ",
  "key22": "bb56Q7zuF6bxvoE5FjMyinHEn3bVbhE2LJbNWLQant5jiTVf6rTJY62iH5dx9hU6D2CA65bcSDvnjbWgpaT4Von",
  "key23": "361aHaP3TCZ1y2TNeRgNYTedg3huF1Rs1xiXq4ycPpYaPdzhc8XxG7ebAsEGcSBFz1iKNuQLfz64DC1WxaLJr2te",
  "key24": "5YTnLy8AFpy7mx5UTF65tYvSzBYc11ocAwCTEGdvjEMfhN4UTaHYZ1PYxxPVeNG5W2KsFUzg4cxqwA7Dhgx1D6qQ",
  "key25": "2vTK5WdFJqkQebtGceFZFxpFfzgwhvy53sc9YVQZzACLQvarTQfXihCsBmfCETHwFgHPEfTBV9zfvR8afrtv9WAB",
  "key26": "E9xAmGD2LNHdeqL9fB43NdKrfe8hrzbYn7JmzumJ6MTBdqXkYqjkbzdFEquvwuzcqv6KtvWo3iRJxxVGjp94dPy",
  "key27": "2eSxWYixem484fwHdLdzjXrpefPQFkfyw4tHZfzvjuZDe8FbAPL3nxF3UUc72gdzeUZhwh5WfUT2xvL289DisJXT",
  "key28": "5ztjMytmZnhakS28AfWm1fLmAQkucz7pc1WaD7XZfeLS43eyyrMhV8QJQu5cSLkm8w18URA1BiLSguAgMeGGDmAn",
  "key29": "3m1VciszniXwvx942HC5HU19GyNbUAnfryeumhEadVFd5FFyu9hzB5CJp6UUE6vzLWUtEk4pYdLSaaC3si2FSssc",
  "key30": "3a2uZrTj3QcqpXEEw5dNxyVJa1dK5fy9Cj6kNksV7veK6kaT2UyGFXdrqNryPNzXapwQHeREX6k4dq4Lum8uRdwT",
  "key31": "8C7Dt6jT13HJNoyzjNHvMynnb4wiq96RNbLXBjEdSQKWPG9tJ1Ngmh9m6QFq9KxbhdqkGbJhatrwrtqe1G2LNwX",
  "key32": "3mcCYVBxnUJGMRkxsR6aZurioxXXgFNrgMBLvMFFdCDQtcXzSapyngcKfA4GGdGR63AP8dKFZ7gah4zmt4XuC9f2",
  "key33": "4E6SznUtfQqfSpvq89tVjdoUDo317AAedYZPU8gscbbRAbGH2Rygqs1gMJXobRfFQqJyQ8yYThZDCQP6jNdpkMmb",
  "key34": "FSq59DaeJjCdu6vzPAKViBcSLpAJ1zCdA28Lwr6L6wWY811mi9u5kYkgnwhtqeXkiaq9eANhfyJR4PkvW8jcEBB",
  "key35": "4mBnqU81mjong3s7NkG9TSVfDUVygKvTWUHE7VE4jXnhbFRAfReDT8MV1GNkZdYr1r3zVKEMGrMMd5f51CZRSQFP",
  "key36": "42DwBuMg8spfUxqx5z8cxQMVk8WUeJ62eovm5rTBZe46FGL7arTwjDeev9quwd6c3qtbP5zJ7uAvXb9mpY76PP73"
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
