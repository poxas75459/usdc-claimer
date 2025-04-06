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
    "pSJh6ZztcYtgmvNex4gtFMUAGt7G7GVNF9c2pZUyVK5vmfEjYHKnJELUg458htZFiAcRmB5LN6E3pgJs7ikaEX2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t6pKcWjnxdWHN66ATu8yAuMZLL364BrPXDm7F3bgCoA4AD252VXjzAGdfbyBx7BMH65RfAahLBZi5BR7hqPvjTS",
  "key1": "2gmz72FXckAjPHkCWMVE27HdHweacBeY9gnDPoqXgRei4y8UDBxzMrZ7BTnPKt9XfQZvrKffiPEcErffmjzW71ND",
  "key2": "2DLxfsAepN7jtp4BoucFbwFBZ2Q84pHar4LecFQs35YJz9vkGgLgkmuSLabXuuVwLtPWFW9t9maycwY45NrvdTEp",
  "key3": "3EqL3HfERVUpQn2bn4AsLDPJkmNMSc29idNhzELM2Z1TsiJVfG8SRswZsyV3hcJf8uRFk88guYEwiCWExUPsLJyB",
  "key4": "3EmRV7WbR4H9snFyvJCfSDTKCiS98zCX5kVxXba8PXMfGYtR236rkJABbkmPctH6nxnaWFRYV3EZMUdZi5a5Xkey",
  "key5": "4hb3t93JSqMmqyZY6tBGRUfNAG7hfYQvXEKS81U14XWJgNM6AvMvvFjk8JGYKPM5h2Pyy1aRqLW1h3Szo9aa5jiH",
  "key6": "4zH6mGcPd5aH82Y7qdcqzyrqoBc5K14VCo53Jz9mNxyu3XbrVJ1CML3MXsEKucrdG5pPwXtewwWkvqG1tHY2cCWL",
  "key7": "3ZQdS9kAH4qos278kvxksVVAD2akebVi6ZFfMMkmCK4JKr1m4F9y6fQDgkxUXaNLhmqvh15U9hYv7UTRnAN7yxkh",
  "key8": "4W8wXbgXrPhQscrAJ6kD8kUN28KkH9bfPGiwdKgtBUCQKnkbuH2FjNUYA38SmqGFHvQBAoc8gHTJLsXFqcqktDfC",
  "key9": "g4Jw8SsVNZKNg3EUiuh727Pc7tjXAfHrZS2ZBufLAYNTpjXLjr5hM1EUbbmQcp1pTx8zgqszjbE58zmzRkrdWyw",
  "key10": "2d2qbPUGnLkrK55rKBcqPkPmcs4YBTJM9q3SoJBViwsre9aDJPzmYzFRu7eDj2CPwtNkBbEdSTzxzdRDXxja8mdz",
  "key11": "3zUtSh1o1TbP8BHCJuPjzAkQfNWY8oEJj68hYYnhxYbofrvbJTJXELsWzVXcaHe4Tu56r33KwoeasuiER92P1m7v",
  "key12": "23T9dCwmrZDzqhPjGDtsUq5sYtYBPyHWQVfrRwkEyMx1MeWWTfQXKGjUArig1JAYTcZKyAYjbJcAsGbyyiDExtxt",
  "key13": "2BHUnX5Gp2d66A9RMVECvjbKWZXjZxe4sigR1oLoHSKYmA4JYCMmLSyG6gh3C7JafgbHjUgsC9aAr8JJcFzCBSKz",
  "key14": "3AMHp1oRPvj3iAbcccAsjxiUPGPZNmiQJtLBoL6fm5zwJC3WKiPCEyCwCy4X7ed4xYb158E5hpauMRB9rHjGPtu7",
  "key15": "5fg3AfoZbG11sRoBdSuTyuFPqojGFA6tww4tsvHNCrSzPjAqP7nRkC7pNyK5MjNwmbXgqWbq9hcbqnhxWbCg2TqL",
  "key16": "3Dwbe5EmBYTKm7kV7KfpDTJBaDCDeReh7kY17Sk5fUWrNsXyPWE2XVhdZRQAWJZWMVQ2Y9QsxyQZm61EduRH9GBz",
  "key17": "2NMoF6kunBVHzDNgVmKyJiagP9xnhAVLmLj1GDKEonw8PaekThC9utpsgeAN2W9PoYSoxe5cy8t2ytWm3JFJrCSd",
  "key18": "5XhaDjqYmkeS851RhH3eNGcngM1WdsEfiGFs3VY6hxCbdC3b3ENNa3HGxmJMyjBc9ynCsnhEGR33jheUYEEigcZq",
  "key19": "9mX3CkDjqHWAkbD79UD3D13sg3Drpzg4eB6d5CH4NqjLUSuv5W9kJck9WHH4c6KUy9e8ZjATMAtEt35QWzyQDxQ",
  "key20": "4GFSHPJxQxJhyrtcNFnZpaEjuWu2bVyufJrJNSbtgr7Q37kPhvcFxR4PopsYCX66VstCMTScXN25GokE4doEXoR3",
  "key21": "5ponfYbbcRNio9X5M3vMG7zJoTBnn5zAEXycM8g7zNyoqrB3beLbNbVAKXErvkRq2G3y4ZpJnmWNvZrMyAHtD3qt",
  "key22": "81WpH76Er7ULv8fsU8DZ4VpqfNPQoMpeSjYLFgeeUaovcanoJK3RzNG3EcdSnh5tegGLMvuzdAkQyX5XrcaE1Ak",
  "key23": "5ggX4FtddwFBstttCjmtvA5Bn35df2HRn6BQU8itBExhvdubNaGjJqCQhofJqBWpsU1c5xAVquM3tXXK4GLsviLt",
  "key24": "FHuB1FYGaDRJZLxKj2HSM31YPsnuGJ7Y7zDtAcw1e9prQiryU4icwnJvDytWya96Uw87qHYT5p8kfZuGY7gWaWh",
  "key25": "4KxBiztfCmXZggBnmTWDTgidoPGpGygECpC2zb1hYJUgPmb5QcaidtE3bj5sjs5uABpM1L8PKZjhvHB3775fMEMq",
  "key26": "624uLG7ELtX4XN5pLpK3h9JVHQARstHfKeV5LzMXzW7edFPZuaUqV2cFhwLf7PbeQ2ksBMPz1KsaEjdxms77nRqA",
  "key27": "tpmAvoVYxwvMEAPNkQ8uWQqq1fEuzvSqBgDqr6E4E3NkhrV3kjNGwfrrLLatCd335rpWku4pEXrnVmoQYQ8MYJd",
  "key28": "2oxAJd9eqFUCC72w3FeVPC1BcPGE2k9FkmSan4DqQC7EfZQQx61xg2N8o7w4sFM67pC6mXjXyPM8qLP1oiwj5QU2",
  "key29": "4UJJvG2BxibQmundHge5UURNqgtioY1dGpceTEBGd6W7jFaxXX98JFNRoJeiGaYypLicsavkPQLgDf2eRiaK7AkX"
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
