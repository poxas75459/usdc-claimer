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
    "3b22M1tUCTvp5rkW8Y1z2vg6N7VfCAFn9D4j8vPxca6X8wqkwvFEEnnzhhe7zZVYkxFzufU5LJPGcpmSYuBWBmNP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AXsjnHZWe37nZ4M4GVr9bL6dCZAxQ245LMZEaFbMwKHmK2PvLk6TgBqm2eVg3eN1jB2uRCvVykgYVXV7vt6j4dT",
  "key1": "5jJJhKS3f4hGEEVeeHJ7JA9N3H1SJRNm38d5FDmxWUkC5CeaYKHLc8nBWpK4nLx1EKRFcbSnwUkw8842dYwqB4WG",
  "key2": "54qZbbJGs3f85hzLAiArKStJGrvyQCBaKBHES7aK9me5wWjoiGysfUL5sSd7SntG6DryFHbZR3CjtQX8QBKSTT7Q",
  "key3": "5CNNCjrtTswYsBzDfBuQbDbMURMUG3qcwtDyhL9ZcvFkDpAU5un1ZLjoF4qmfH7976p4n4qeJfP2EfFYZXL5Dz1i",
  "key4": "3uzxbGcoUGNskzP4WoJQ6Mo65fq5LpZFWVQTNSj84WGi5XvevorJA2CqjkQ5ngbHBxy2V4ShSLS43qs4ZNenCZpd",
  "key5": "5Egke1czf6hBXsxzXaoqpghxa8eEh4zKi6kSTPsazCVt3G76GWg5AUzNhv37va8TZAqGEuZ9aVp6NBbFwHpEaZKp",
  "key6": "4Jiam9hixe2gap242KMhWShTsbE6pFCL6x3Q7oTQvfwAJ8g1sHPSNAbHjMT5ebfRprbdiDxvGVNAUgy2ogRRsgWh",
  "key7": "vpVATsbzJQFq3KFo96mMGqo4S32adRQ1he5JXApjJ9zRCmtiwmL6LR81HpokjjXyfgwK5M2ZSxRhbBm62PRzrFy",
  "key8": "2eSUeLAU2vYiahvx4n14EUDJWesWV8P4SEtWryVpJ2wzaZwCFYJnC8k3RYSFqirG4ZRdvzFsK9HdhEnZAPuACJyo",
  "key9": "3rLdxwdSwYLKQV2SVrfwsEkZbSHXZh42urcr4jp4AfDXH7egAbFHx3XQALHuc2R5pmSWvi59ADw6tSDmW6XxDg4U",
  "key10": "5iUUXTDiUA9zrJcpjLLafMJfFBX5RFRUqTEsTixKJAukFmpBZ2P6e7skfL66Mgw1zqzKWNSCjcayqJ3wmGu5u8m",
  "key11": "4CuMV3A8FPD6kqEFytZsKDooUjWMbRzRLdb9kpX6eCwc7MNzCHmVposwDi4NaYEhy16eScFFtWwLbjeSh9oZEWSC",
  "key12": "5qEzEB9TKyMSBRqf4Fd5dfFyMDTdYqbAW9E7brs7aXBCyBjEcPp7kyjYEsa3QqhbRmmWCGSu5w3Ah11RrUkggNBj",
  "key13": "2x85YLgNCDR3iasnqz6fAXYRwXNbnhTqpvFYdbe5tcYmeEdmrGEvbQbtNKEEuQNeg1zdXt9UGsKLivQSZ3UyfHCV",
  "key14": "5WyCvbrjmoKPUxrTUmPE7qTE1Rqh1k6TyckZUrHHP58S98k34myMXvpUmqPLBpjkcdAq5GjEhKqa7YyJ57YiwJDE",
  "key15": "2pmda4fLw881V3C3DKiuY7XptcZqsKTjDja1R74DRz8ZxrsU1C4QiZMruTR1Pt4Pg8LdCdYJz1emJHun9ZBRBMbJ",
  "key16": "2XnypCoFSJtAuq2uSBiZHwQX1Dz7pBgZFDh3HtfqWgkqxf7DQkxLpGQWGh4t6WUZxmwj6s9EibBW41942dog9tL",
  "key17": "BYSmYizv1LQqigbdgwi8nCFpuFzp7fYNfYLfk8GR7TtHMZg5e1f5XLnCFNoKkff6fdtAsa8geQpFhs3s5YQV3SW",
  "key18": "4PoTZAwaGK8HArxpvJ9PrpuVgBJmHd4V2JPehwZoCAeYHestfceJ4XM31wp3YD959ssQvgR1FfPV41h4xzFKXWmP",
  "key19": "2dovo3JtgU6GGtomBGopsbNFxdoDJmx1rw5aG5a7EXtSWFUriFpB5bczkGqZA1ogZpUKMUTVqwtY5U5qAS8ZFHha",
  "key20": "3gjZDqEQJToKcPhrPXvTyyPeUzwsEPQGkx2jF5wdbywpziM9Vh4VadSxuppPWYma86vxKB8nzkJT1ZRSs5Zrhfgt",
  "key21": "61GrrRL2rU6HdqJuRYNZV2QvCRCeSQZtUTAw8jf92cuatXRsvpPmaRCYTQxUkNjCFu56NzrCUgYRvvpb4yRdQx8S",
  "key22": "oMfrxFdzktafsgSyaLtC2vxhdwukGkV5Msixj9YCfBdwgoUZDhjhM4xJRyekyNctY8SnBYeiK3oopMPT9HshK3u",
  "key23": "469e8xQqbQY6Zor3XxP1H145JB42cTt4HivMuKduoEBFq1fGgsgeeAAjsGQsBv8hMekB2yMryRZe7eMumVTuigS2",
  "key24": "2PyHjrePy3Hkw5PTW75zNPoUdnp4AzLArgaVNKYFV6davpysBfsMLHQDebzLdm9hKnYtaQJZ5zcT7EU54wj8juDy",
  "key25": "3xuN52gyVRuEB8UHaaUnCKok52eeiTeiTFBWncSb9DFjZ7gkStBQCNRycbcgZjQrVzAMKf7CCdrbLJXARvLx6piq",
  "key26": "5mBLsRLQK6LFu8pcXEPB1upKv2gfGzaJJXvZyDrvv9nZaWbLkwXyQEy4FudYvLYkwzTsKzGFjh71M3vAjWBRoSnY",
  "key27": "2bvr8LeGnEKQBT2vKGVeEssjhQki2YNQ66s1L3RpcrRg2cpX1T9rAbLyXptNTh5Qw7TWCDt1nXzt7XNtyJPCSBVr",
  "key28": "54Cs8rVC2srrE41nm8MG6h41QnkvtTZptEyhy1qzvnvLcaTBzcXhNf6z6FaQGYnATxWpeN8CqcQB7MrAiRXGvBvb",
  "key29": "xQJSmbrENzAs6JwhJS2iYtNuNZnWPhntXcEUbhfeJezt1vmhL767GpRdDmeejMtFbnYUozzsWPe65M2iL69yhTA",
  "key30": "3yD1gNgVUvPdUshmZ2EpWypyxC8NAj5MuAQTqiiSCsTV2Kt1rtvUbJSv55w2LZoaXHNawHYpEup1PASHjkRkNm48",
  "key31": "5dKH2KZqPhPzaWnZDi79Gk8MSS21gmQWFb81WP8dAyrMvuuqdhXdBeWdYDKim9S6pMqCNAaLSfcmmvaU5JMFkVsp",
  "key32": "62hgR1QxuFPgCZGa86gXws4ST8pJMEQrTYaiLuCuugXdzZKPHRT4E9bxYq3iQ71c6zLbb9nw2sGQjhDRayZULocr",
  "key33": "5qwM7omrunGGxcVcNGb2n94nStCb6NnA9RNCwL51vuoMwvSyqwvZJpptUMbQDFGZne51kDzUTaCmwNWST8AaY16z",
  "key34": "41h693SzUw9du4kaNcjBFPyAG5JnFyzfrjPrg9gURy9kjSCZPRMsE2a51WwxE4Dqi9qbAafvU6QftXgzYDjSfPpo",
  "key35": "4zjfF5bePqQStL5McAdCu6kebWrvTeCC41WgRv6YsSDECoy5U7Sfvx1mLjLmyP6BLzEp7cKLM5eGLQN1KXtsiLQg",
  "key36": "DLBzpdCyw1YyyAEhBsemfUdch4Zar8hSEmmBy8iZdJ8mNpw1w6qpm5f9rYmjygMoxwtp7ngcMjesECuCTdjmEDQ",
  "key37": "3vnxrM8dNbjwL4W61WyzuD4YbA8C5QtsmVfUD6QVseSuwgn5kgXiZpDVv8DU6pMYccKikvSF56NzZpgjn3bxfupE",
  "key38": "2Xz13nB1uCMfmxx93M13foFGZddG8pivsVwHMGaF8vZECyrxbk7Djqkx79ZZMHLsoMqd1WqmCQFYR67LdEEoXAMY",
  "key39": "xqZc9AgKJ8DLHBX8uvzebAZnq4TCyxjqxa2FvRmeVdzwpnZWsKNskwyHEkfHyfgePn5fpx6YxvoRFyVN5eAqYLd",
  "key40": "4zg7A4MDVedBF6SQXizSbZ6GU12XqMJPfkraKZ9eooz6aTGE8Up9cTW2VKfZQEsdR7Fz3vracRZUnBtPBnoJarcM"
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
