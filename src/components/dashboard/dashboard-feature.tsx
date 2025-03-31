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
    "5NAhqjqYk5gEqcdWmMcdKV8kSXfHioKje3neXYz87soKxcc9bvUVYu5AomFP3erBZw99VXhu1JYNaTF8p17BqydB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BANDwHfbAaLxcUotDjY6srzb3oYbsbcyeCFKZZKaYHvPmkDcgYYkds5noJnE5jESiXiKxL2sCLodybtQb65DwJp",
  "key1": "3wE1kWyQBkjGsYBdPoDULd8UHjkt1KmREfcAc7wAt9WtVcLYUBwvnH8yf2wDXSD4HtFZwhRLmWPUFx8pZdQY9phE",
  "key2": "VhZk3rTVY9uzxAtAqKNhrm1KorKFfHJLSArCAeQUuJup5FMcbz5tjDJzpaKSX5khvVqJw19hT86SZs4d93cL1fq",
  "key3": "2RT286YWvVU533Bp5TxdjVut1VWpU8ZE4MP8ybSupeqmZgppYrPRezd1SBuDXe5QzLYzwjBCVEMDuj4j64YniTws",
  "key4": "3mvdAX1WcA6upqKsfdNDu7BT33RGEjtcWLox36WggZVcXpghW7vmuUvBztd1GR9qfoAmif9j5obV5BuG6LcZ64SR",
  "key5": "51iYEFnT41x6yPtJ9e6rDtKWz9kJ2nPsMz85MRoZW41j72NyoCbSbhXcJeKvMcPuGUWU9AeW2dZpBjmncsZwXUGz",
  "key6": "2d1ifTuRT3N5ehYUAnTG9ViyqRmFeQ2fg1R5EsnMzhfiasSiMDF8TaoYLNVZNPYnsQpAL2mjiA4Ja8HfgQkBfbdo",
  "key7": "5PqYvnit3JR9r9XK71uxp7bM1PyP1uu25pLZVfL6hFiDPgrbKS11dVos6CN1LqwiycJWRxA12eM54euZ6uA2Jgpj",
  "key8": "2oQutodCsNVSSywiEfqNvYVjGjVrXFYbRxo2HNxsGeVSjpcUPKEYcQuLZYK1k6KH27hfatJQB4HryTZ8Je1bWeMw",
  "key9": "4FooFwy5JcsPQ1PhikrdakUodWPkALFAG9AJ1RkkHq72YMbxpxYYrYALSgxi5tYMorT23xkfDbiFJhBEusD29i1b",
  "key10": "5gHtDMa3kGYR9GeCutqCWAHqtyrBHhDrCC4zf3y8P9JcXcueywUvR9FwiyJhsS8iWVjh7iGAoiPaW4J4UsYmPS48",
  "key11": "3k1cKqLMpVVHcRtRF7R4J4BPELB9UPHTXioR2GGT58FRR3frAzXGtyp5dTsXQhCnyomG4M1rnskt7D5xTHgrfds6",
  "key12": "5eXKmfDzzUv3ye2Ew14tXabe7ZdHrQQwab6rahcGTv1P63JjHja1ysdYVQThJtxvwSXkFJjX39S8S8DL9o3RdSMB",
  "key13": "2J4ZZCpxdyrFDE6KbfEpc1ynvxPqCZczbAuT2XFrmQvMt5vyUJb8yhApwUqjy3wM6o1Y7yWeRrokcHT49DnbaUV1",
  "key14": "5SUBQbP65JVHbi7T5kBd2dx91KrDBXziVdipmRU1oh2UFwpGVY6yKURicCNmsoiWprbW3WhaFuQX2BDTFFoDUCBT",
  "key15": "dHqySREC1UYTcUnTh1uyfU2CxdcWd8XH2kXJSJ9yZssasbS7XtF6hixxHmd9Dw9jnRf2oUqHKivjDtT8ETwZzLb",
  "key16": "5XMiUZQgxVV3JnPPD4HQ5vX2Z67hmcXp44VpGxSXJq3LHX8kcXNPY1Vu1MeGxD7D1U4CqdHiVJfAnDsgCdc5FoEx",
  "key17": "4qWTjqUAUHaNFCtCuPZ2KFLBNyKk6bXdQyTNgioEUyZQpfGi6yYFf6cvdKMnkonyW5FDs9x8KNUyJR7rhEyZs3ik",
  "key18": "MupgqBA8gCt833mtDMGJ5XWZvwWeBUPUexxUSss46Jw1RqeEQLbb9rSvtQLuzyP5ByxkMDqDuznspzFgNban7H3",
  "key19": "vLLY3ubVyxVEuozLxGASxDvzvPXSZEJJwJoiRRZQM6dWS18s8VVEUVBfxWRgdZX6m21P27BAbHrzbdXuU9sEwzp",
  "key20": "32spBxrbJdJ1ma84MZXnqz1vPYiwMH7gbQyAHeNZ2zFEtUtWH9DBYQcbzCLZpdvQdCsKCUjcWLPZkJN29k3fDr4R",
  "key21": "Wst18zP8FpC3N8ZTwSdrUefk3DjxYyAEyB9uSbaVEuSJuHET1L13LM6gfNsPXnE1fYiZ3r2mnMqvb7futZeZ7mK",
  "key22": "47ifdvBC7dBvhdHnyTcYwwpogp1kKerrwJgrz4LFRM96SPYYMwYpbuHgwZR6fx4fkiyq16jKzkYF7Fku1tQYX6NH",
  "key23": "3A64EYoeLwFzgqKCP4vzSduGY1Hi54XA5aAfXEdmB1pTcBPX48m5xyBCmsbMNeHXRVEzhaDTWP61fTgprrUDacxK",
  "key24": "44tAesxKf3CLbLXUEDMea3HRggMjL1JNWm6qXq7n42jomBwHi29prGQ77sZnFjS3Mpskjwt8nKsXJuWF9DkQHJgb",
  "key25": "5Rt1gXL6QXuiddAuXk69qNvSynFgwYJRkZRQRu1ukz3ZE5LVyDd8sUkpu3FndxHgDo6ZGA2HbjwMzXabHyn4j9iq",
  "key26": "23wjfufYQXLy75SsBmTwR365WwigPuGFYkZtkf1xyWPLAwk6FeGxaxnLiXg7diH7MknBA4dT3zG9ttouwwcpGyF7",
  "key27": "uqgE6AnkBjXTKaeyGJgqTqzDe71oUXYuqeeYRjh3RBk7g56pecTV8gKKWk7zew5qY8YPMR6Z28jZyVsBFMG5daG",
  "key28": "4MiuUaaxyLm2Uz5nuduHXQCVXP5ijmMch73MRNLdjScBmHbEmHuBsLDSm4KLvvTsLw6s9M4uGLYoZx4nrbuxpSfu",
  "key29": "2Wk7HEH2NL54kDfYTEak21uLzFy8Hi49GbWx6riqS9i6hbatEaoUtSRjjBQSmJErpBS2w9GCqXwE2Xu8jx4iNqnS",
  "key30": "3i8Wxm7gmYbC2bN3kbZuY5vNAh7ow6kKXAQvmgQdk5YAMY9LxUv89QosJMAdrvkB44aGfQE7oFoauitekm2zDR82",
  "key31": "5RKbLDcHnTwiwuVDER9PfTFgYsZssVJBbyUULpXcgTmXJJhZewtjRYt7TbFQ5r2zLijSr9h12yzeeT44s4R4PxDQ",
  "key32": "3pqMUK7msBFvX7zfafoPchuAqxr8tx7CoaE3fpdXYQ5RgvoenhBzT8ej7nHmFi53XAzHYpG2uoSrEzGNzJXLiQRc",
  "key33": "pdyTZtaR6poVWHmMJFvU9PLYkLRzUT7scdyejysR3L8bYjQhi4MxnbnEM3zDAsnhwq5gQt5bpTfdKQKQPGdq9Qf",
  "key34": "4MhsgB16xmfxmJrPxdxNeizDFmQEz1GbKpHU4D8S9B5RgyrAAMugRn5R7TG4da1pGR1npba3Qqe1h5K53181ihZC",
  "key35": "2aNMqBPwzWXHAfZxNhH3vdK9bSaFN99oTRHEFBGE5VEjVBCM4LK4ixuw79qdPrnznztoAWA3AGZn1KQijWtjsTB3",
  "key36": "27SLYDzodrMeJ3PFufS12PxR3uLhrPGjHztWM1K7WNfxKgQegy7YHMCCecZ3SvrJcXQxRNvqUsgAdPPSEyNPv8w3",
  "key37": "4Ti2Szp9BQ4HpwAHD3uy58K6YDygfrK2kEjBgzFfsD3Hg38suJ7gavkxvtX8Mho99wonckPVhegE9Pw1uvFTBQw1",
  "key38": "5WXPuRf2iksDm3bMb9TgQ46dsofFpShnxjEuCXd2NotpYYiS4kSVdf8B8aEecJrr4kjW87TVMCcsewJge2hiUi1q",
  "key39": "FRdABLRuUgQaBD1iSN7q7z6gSbGp6mGq7AeXfwpj43kKxPLeZHE91rptLixHRcX2RCdc3WKCY9GY7zxWF2GSDki",
  "key40": "3t2LErH3Q8EPGchLgs7Z9RuwdJ8ui3DdoekESpcmN3FLGMvSqYPBHH97htnaNyTunRKKRLpZQansJqtNa58b55Sg"
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
