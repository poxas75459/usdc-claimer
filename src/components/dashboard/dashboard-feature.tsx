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
    "3hKxaybTqeNRj143rSfLNq8WGTjMX7AyxmtPhRHjKw6uXLoxR48czhZdn9W78wL6jjka7DLtZ14UoG2nKtDRwDtZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H3NvLzdYQZBApHzA5cWkkJbyWmN4D4XDMbnp2URqJfnWdcPNTwehkYEhFH2aJG2hk4bApsH5BivMWmTwc5KREXM",
  "key1": "2T6NVnf8Qjo7TEGttw3YZuGZduP93rJcRJvTrtfWx5CSprkLk7DCeqhTtT1wu3MME2SYmrXb5jTVhCJPoRpoPwsJ",
  "key2": "3sCmfQPV739x9fFZaQbvggMa7tGGmjGXpNnNGNKaoyyXc5H5F9D5aWLFq4TasXMX8uG78e8sBUh9kDrmAgfVYHHw",
  "key3": "2Et4cRrPYV5AhSbyA7gQUrpDd2rokj7fzDoENVcNTTGzM1BWpDHKZ3Poh5PwchwpAQAn9uKzzo6i4VB5zBja3iFB",
  "key4": "J3FvYGgoCJj8PwHjRLsJ2Gq8oa9yMQC3au2AoscH8hP1YoWuUicffPT7XWokL5dpt77gLcZDwmAbTTzn11fYbxJ",
  "key5": "59biXS9MhdtSH4g8sZ3LyjYMSDrqCWGfF5f4F38w2VSgD1P6ekd6LEEj8kKgnKMBUaYFvi8VtuXLARZCgRXPkT4c",
  "key6": "jthLMNgnxKyQU1QbhCAT6i9UyekmSr7kt2f1CnchkydDv7aTPZjX6VVYVUUyaKgfJiphH8obTSicVZiAo8kcRKD",
  "key7": "UUkJrsQngK9gHvA5qJfQgKF6qdaVioTuwAt3HHGMrVUziDzDGv7QoRpAitF7hyfSkcvbUGkcneNdRWhRw99Qbd2",
  "key8": "3duUgf1CNhPjHzAVSTzFu4J92Q8MDmBaNXHWAPxwf3THaUyyPVQ6EZ17BWTYWeFyHGAMsVseGBA1G6QcucazDW2X",
  "key9": "5ipkTQWYLj7dGzAGsiLzrXSH5iW4hDJxDiqbLADk6RL3zYYsV6knULJwQsAEgUs91YQv9qRoQHkRnhQiRrGHDGg5",
  "key10": "2Cp8EUvzTDqersLU24B84WZeTc8rpkapNfVEYYCWeEsBoVRMTTBpnW3p7rfYeov91KGD8x3cZcTQU5Wnh1QYZkoE",
  "key11": "2NeQCuhLGQ2fcxr5SrzpApT18nkWvQSzLmaNUxkwJGFoPsMe6gkkqmgtTgGcr6Gc7w9voeACFDHe7MLfh5xQs8BS",
  "key12": "2QGRguqguqUZEE1cYf9bTcrWXA449YbCdJWpaexALu7aMAGXLPb8tuozajgkNd26Rkav2wtveGqvxu5UJ7t73cD8",
  "key13": "5t4wAtMhpm2kYM4ZBrQa2fXFQASYC6bt6Vhuq2xDJuKtvopwHQEw3iA5npQBekg3EBFGftPMBSDQm4EgbKB3AvXy",
  "key14": "5jmo919WrZSvCdxU1njrsBatKdvnz7GfQXsp7AMmpLCPSYZhr38xrN8Cbi525MxcFC7WhQ8DUS2WirrzRWScFMR8",
  "key15": "51hU2Vd5kHBKT4KWx3znc8bUu6vrP9u2xZ1Fp99ufEjJ92PD3aCfC1EntarS2mwQVv5cWL53R9h1kAy5t1m5UNSv",
  "key16": "3pnPnJ79agr4JvGtjXoRQTJtCCez5mn3QnLrdRFj25ZSqw3YKPumToykpgKg8juUyZvG1X25CCHvwum7Vj1Awuw9",
  "key17": "2jxtN5L9pMZRUTKUNtVVGsFrXcLeYEWMe18fUm7M2vXyjFu5j4ABJWzZhEuja3QDYWHwoGNtGvZKyiuTVzyGyBTG",
  "key18": "3xKgGTjNxaPJJE3mZ4JzxrWH7GAyeoSZoeuDVR7P7evoozoLX6N4EEEcCdQLW494T6jvFcWZAtFfAWg4RFkasttd",
  "key19": "27LMyJvnosjHsxRDqJMwajjUfUZqWTTiXLpaFiS2JmZTibsyoLSnBJn9U7MDKmxyLL33uYdPnqWi4pXtDoVsr59P",
  "key20": "516JPiZSScLRAcwVkPqN7HkHUxo7CxKNanvdmy5QL5QfYP3jLZKXiLd8b74eZjozMRxw5gkczgkmsy9cQYjGqGHH",
  "key21": "Hyj6AehpaWvWkmwoNte1v1fsnrY7b6tWVFMpVgvMwn33uAZmgD4s1mmR4qSn9R1EQxzsVc33hyYfL7w4Bt3CWwE",
  "key22": "5tbNftd2yyurgfvCWmfB6HbW4PJoCL69cbSn14KqWN1yoyr2yQHxsxsNPJikSiwacdY2iVzEmwPUgozTzUfeDmVD",
  "key23": "Fo47cmpvgGazdy4Po6vMpgz8kY11grFeXz1u1DeNuDZG9WmM3M4MGbeRJex5EG85cxBwx6PGXruFUqHnhkT4teW",
  "key24": "2uwgfXdnGt8fEJPoTh89JeCgrqS5KzXUz1nERoUbbMuWmKDvS3NVXm2JrfNUWpM89NuQn3kBbhGeuxxLBxC39ZTq",
  "key25": "wpcZbpDmzdrX92uSVWqwhcVs49irdsjCir3j8n3NRBEUdWVc4vSQNjX2Y4TYMdUgeUPhEnhmGFQiGXaSD2PWWtb",
  "key26": "618rtjUBKAA2FhQDnP3eMYvhY4KG77GghVCdpRVeAQGTduYvLnR6QSYHpVMknCHgWkiXGY831R9QV2i5EQuJ8jrC",
  "key27": "4YzmrnedreVMwrYuyhFJWFAhYyXSKKikm6kaTvJW9x99GzkAMfBSXsPiHNYnn7SyWkVo53sE9WzLD2P1X9KvdTi3",
  "key28": "67XCcSqzsUML8fLtjrkmedtaraBoru5egmUnov5jdZMJyxWLuNBKcStbttZ9EGpWAZBF1hFmDaD86rkGeQ8FXgCq",
  "key29": "2LDaFRRZZs1tFWWnDsTyT48CRedQGt8jET4DVbUvpaX5mWnfQixEPLbPNXqYzmMe4d5iznJMC49qDcNWZVqEqZXo",
  "key30": "2iLjknU3PFKs2kAsfGaN2pw2WmWZaQ88rj1UQkxcPvCXMhmHY3pNUbA64dwiUJ5ddDsWP1mDHcKoAURXpWhvSNeW",
  "key31": "5edunQzHKmcgADtPxeF4jPGppskkjRUuiYr4T9zLtWJMRJDsQPP8V26EcTLN5WLsB7b7foiJX89LDZBMF7Ng83pZ",
  "key32": "6yLQquybJYSVPaWWan41NTsZ5H3u3dA7eQFuWQgdonXQMJzPggS8QzMs3ojYtpeKaJ84MT67agqk17p6aArvBqe",
  "key33": "47u8MMYpVUbotF44Mst9FvH3URcU9CxxTTwdKphHX1WTSgLEuk5BnwRSXKUEBkMzmddFx6H9gMguAuiCVKz4Fx1A",
  "key34": "2BrujvDwJMECdnUrkeETpDSimTUkK3UaZ3n4dzTt2e2Zdtx8DqSmwvLtMfJ65gcsP5yPi3CSxBYhPRH3cv5fvGNW",
  "key35": "4t7YGZTsXtDTqpVz85VsAR2yFVPRTd1jyPJq5qrNfvTTkjSNJWNh9GvjQsRPxnRsRzkesXVGHnxyoQDFbm6zGXFD",
  "key36": "2EiV6ipoz9N1WQuPW4skt25K8NNsgo42wxXJNW5Y4dUCaw3MfqFwXVTA1iBYzNmKQL8GYUQg3sEs1VFTP1Ke59AH",
  "key37": "2eFbzqkaxmZBZt9KUbdFYmGUbfnmmgni7XoZUqieRbsifgY2nzHFxT5aXbMKBKhHrF23tfk625RuaV9jDemF5Zq4",
  "key38": "mpQR6UZFnqGm265pKAUr2a7sXvcr5swR1MeVoP6mf3qejHrUrdL26vDqbCNdUmNZepgLAY49SPc6CzxQRYRYRWW",
  "key39": "3hQMxZ837qpVcuQqYCdgkeTdF5TQ3tAjA8f2PotKkPD45qyVc957SGQNenXceektJcaRYHYK79U75mVzqyvrWUDj",
  "key40": "46Uw94rNPDCvgxDFvSFogXyFg4xWXdMh6EFKCz7rjaYf6D5zFDBtyWkYf8tcPo2mHRr73FXAry1bWxuiHaborc3R",
  "key41": "4U8NPuScUPZeLWi7wvzx5op7xHdCQVQF9a6qh4TBNKZ3KMfLF8zrLbuAWPuStLD6Bpm8kxvhLFGaetpfEqj3QmgC",
  "key42": "kfvjZx9o8VkPy51KYes3EDNbeeQzZSR6a7aeW1KSVD7Ft5UQRcy8Y2hEE3VB3qpCgosxnrbQ25tXmnLaJV5v9LS",
  "key43": "3ZEGcG3BxNyurvqfM3Ya24zEcEeSsmNu8H7ytPdy4ojJXH8zg3DsAjn8PqxhjqMsU5m913F6d2KrbhvDF3D5PQMP",
  "key44": "3gwonopFG47J3TkEoUFwyXcDcuCZTWra1TW4p2qxgYNUYC5gHE5hVeijRWuB1WEayro7QVxmZsFhsrZFaDcKsmxA"
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
