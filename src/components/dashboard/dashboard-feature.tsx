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
    "3AWpbyjJYs8Q3oS1juEsVW3bmZLcAaUYjhLi2ddzwYwPc4mfVreby3YrHNjQVWTfscJBR2evcNSUZTSQj1fqdoYL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LVZGsfgiCVQYZ3YCPTRcW8s9GJXf3PSwvcydGBr7dZThAF4WnLQkpbr8AGUsQ9vV9SZrogrW3exD8FrD77gNbmG",
  "key1": "s36avBQZpSiztXKDz743qyjPsvdkavwWrWZeVvtdmpRREqumX8Q9yda1fpCXtN7jVMgdVY88AQ8JqqFZY9ueYww",
  "key2": "ArpnqeLYtQLkCJEuinppbEzoUWTfqEgGyeehzAZPj5PUCQ7q9vwv3TkGfZUXZCaZXRgHCUjywKwcvjie6cFGYZd",
  "key3": "42AYRpi9xWp7iHwxP41Uka1ya6tEkMDDGcetherHSHkHgQE5ntVVsKvaqPHFJxxmvfBGue519iSiDTTdueP82ewg",
  "key4": "2W94P7oYQ6NK44qvEKcwyPaiYjzMo6goMGYR63iJctHHqfQuJjwLdVdZruw6PuhiUXsBVa3doTm7KranTJHgEaPq",
  "key5": "56NAKLhLr7axTmsh2Njx4AUcHhh4fsX9jxbmtUeJq9TLXcRLLGdbcFv8NfCDUZtaqSNp9u7ywfy9ipEygmQTTzbh",
  "key6": "2bKyvBvZpPUQbrQZMeGCoFQzX8WSbGiwTLSSGhqE4i3idtFfafUuWKPFZCjigA2t227GcKPaHRNqrKigrKWq9xoe",
  "key7": "4m78sotMcZNBE5GcLSuH9nt26SdSxt1VB5tFnC2Zk12ZEVfWSkJ6e5Z5sKK5RUkhr3qDx3xbfw6wGMbhTq497gBq",
  "key8": "3X6bppSjAc8Vu3chHYd9ewX4VLcq2PRdP47E2yVwE6jA4Tn1G2UqcR7C2VE5FDnP2jQw6fknq4krLCrAotmL7KfM",
  "key9": "2nPYyC3QkTy5q7ER5epzVUdmQ278JeRPUWYjiEgztwTGstYXdnXAzdPbM7Gv6odPFsb5YDmZq9SFRWdbHK6wnRih",
  "key10": "5s1JbgRLc8LN3eKG37JsiKtDpLaGY7xe84GuXc4E88zLQErtZycSkhs48zULoP5BYC45iYwW5Z1uXCXcenDiJ7Fc",
  "key11": "23hhLjqahMjwFtu7KTU7Q1TeKgWQPk4vJeF7rSDo1pmHM1fQGXasUFMiBSduYKo6aRy74QRgofhHxaMh2aSgBA1J",
  "key12": "2E1D3n93qubaNZKH9WxCZ3mBaTuwGTaRwcDR5GjqER5vbCLYvkyZ5WBLUYygokjgCjM237pjXuGnvQevJzwAbb5S",
  "key13": "5H1CUNsXbiBpj4y48cErsgxNePahAn4tS1MqSFQFAdDKoJka4nEbvZDdTwgCSL3N6JukidsHESetiZ9FcYXMY6jP",
  "key14": "5xH5heb3Un3x4XvQqEcHz76hGGfdkTqEZYCR9tXm32rtyWBTe8A1SjE6JFyGYo4gB3A9humVvkcfaHkxixkgH1cT",
  "key15": "4bxZSFuFcpWovjbNQp6nH8zziv2yxx4jsFxLm6oAQeGkJ8DdTTi8NeCDmqZpJ4nQJaXoyZiLi7NoE1yNEsFPjt7V",
  "key16": "Xg7z51nsyJUo4uLNpYSdhgYY85hjUsJnERTxZSJMzC2RRDxahuYK3ucs2Z5RXFV4du5LEMnnygFLg6Pt5uc2qxe",
  "key17": "2HLTVgiirqQmN99vKcm974t2C35qokpCq8GbkDFxv6Dvz2UVWmQg9u7MjQgdD3N5iLTD8bdHcXwX2EHPRJopqgyA",
  "key18": "5MTQDzYnRdSCwvZj8RgqDjetZs6b7sMzVA1e8cBYZmYYpFs14m8PYh4upM2mYASetnYvvZVTpzNG1D2opPif9k4U",
  "key19": "XDdEmKwrajgfoircwfEAdEmantMPqD85R31nmyXmT2GnmUcDHapGVKNQuNeAT1mMaaHuENbVLw8zKVfFeNz6dWZ",
  "key20": "5tm3nRTzstFoGY69u5YiKdDcsakJzzmMbA7tw2bvTB5bMquLa43JU5TsDdro75hM6cr1CxZPWtCWxRACCtvFH3hM",
  "key21": "3t1qs698SRWDXGZvB24k6bFo9sih7Bvfg71xXLX4ktSXScvxtHbt9Y17XGTDSoNbUKKTukH2DK54mcjSFaEWB36S",
  "key22": "4SS21UvMJXLWVJhq8J6kJq1yuYvKPftkzDXPUuQ3w8UBE54jg2sN8UGSDoeh2QHD4uZon9WJGZR9yQ7BwTHX4pei",
  "key23": "c9pPZWp53vC5fD9XJ6nicndXdFs9HxbsUDic5iYhGWKrRah8zm3X2tbJ9LcmjQzvhm6MGGZKrAQ49ATXPmJRhjq",
  "key24": "4QgLRmyHKmB2iypZRZNrQ8AcEUCfn4e2sotFnxPTwVg9JPfnVQohJr8MzT1UhwRQymtEbiwJM1f8pBmqeZNSbebY",
  "key25": "4fD1WMzgMJBoHJC8gFPoBpgqDDCyUQzK6NGX1cLyKQP9paBoQQypP64SxDwgVgC8mw8sXGKT2LxNhL3v3nPfw7xk",
  "key26": "38bhKaWFfGkuUEUzEAQiG3N6dpdn3nGsfwxbZCS4r5xLeL5x354pZQX6ELp2VqggVBRaDNzLmHE2ofqJCeCdL1wF",
  "key27": "3G1KMGPrsZxKyCqEMcgeWPr5f8tr6PDaMMS2yap83zr1aw3ju2zoWZrrk2rBZUHzGdWyCdtmMg6n2KzCmv3xkq67",
  "key28": "4daVtFijcHr2KXwfLvC1RDfY9V76Q8svtj4K1hRHskNS9ZNUhJS8LDz7nsAjwggMfiNCRiGkpcyVHpbvN8b5AQWB",
  "key29": "4wpVNc7qVyDzqnkuTYMVH3L66XfwGdmRC4FB6Tt7oKETjzggngE9XQudyCnawgks9LaCUYm1VeAVMMUyQf1SHbGD",
  "key30": "4xrMf4zBnp6wEf2UgTSNHeR66LpT1iKV848ixo357vHSioiEdyx8APaQNnHrDpNhnSEDK1Fk3oBNTfD4WiMm7fah",
  "key31": "4XLwptbJa5GmouPx72eFZnLiDrxJRWmxqPqCSc51PaioxwqWxbDZZtievwzMN7HYVpwCQkEgW8jtt8DiLqUSoFjD",
  "key32": "2po7iTMGP1FyPkkzKRLWctTVGqqYH4c2FFFaAa11dR98W6QjZR7eFArpapU4GjojNn3HV5CsTFA2CVhaPZaFdrje",
  "key33": "fEMr6cNFJNHFnPcHpDFjfM5sr4FumRLZ8C5Rkw1Gsmsh8A7Y2c5xvRVijoUnm1SuSb1BonVrmFx445bjfNrabyx",
  "key34": "3Td1yVVgYUXk9F8nkKDjZXKFWq2V5LJhTKGSWRej4R44MrUKTHn83pEbu5oeEMWv7phT962HjXN6DfEb8yNR2EWD",
  "key35": "3waZ6WVrZacPVtyveYGcuE7eYSP5wHFfMsFzzQQgL7t9QcJJDVGUkNBC7wmwkDCX4dp98qa9fb7RCmzoxvVnXcbN",
  "key36": "2MLNf5EkYgtujxnpEaWRTHhy6vSdgy57DvroYu14FWYFVFkDLu5yQwCDJBfKgPNrUhYhb6URAGoR9T9hiEU7ozzS",
  "key37": "4KcujjSCULwrg9vcXdXzkDGb7kR5DtE8CwioG8yLTqt6Xgaw673YL2jqDM8QnWSWayLVcw5zhoZVwTuy3NsBvRBb",
  "key38": "B851cvzRJnxuFfMzApFwV8wh3pXKi7mcoYFowpuz5ztkhQLSr2g4X3PWKFUS2Smq4XEGj46sRnj1oGF2fR27hZu",
  "key39": "QGE1rbcs2KLYfAJEJeoNC5kY9ujZcZ95aYWjFusZ3Vb3YBH9Aq8ytSyKaymPiWgtKtoeoHJvHG3akVwT61rqb7j",
  "key40": "5sBPUsPdjw8jmG5PTemR1qCnyms6DPWymYwnMcXupwn4ZUEh4D7KBAjZKNgCuwRWua5UtVZoVK5HGYhEMbmxurPw",
  "key41": "5h9LXcUXZRykhSsskqJBdKxEUv6T5uWaNVapkYxLkVf1NDsGXJfMEab7fBsZ54iZ9cSucCjHT6gWNXbHNJJfMqVY",
  "key42": "5z1sEJo6ZxXKtCHZ6MEp8CvxzHsWwsVeyymDjXc8rP5ZDkhvWHcnXUhWar9YGRXrfDUETg4zys8TvE1ZQdSnbAzs",
  "key43": "31G4dXsaufwPB7TukUDy5WKxsbhqt3tubSrib5CnU8DYGdNmuEJ3LdKmsFjHRtFBpWo3CQjwSoyf1FyHjk67rS7w",
  "key44": "35RrBfXLdPSwyfw31RoJjrbx9B5QwzRY8zRfEL5ztqSvYudcNGuy4Y5Jb5cq8oGmtFswZtQ5hAVVNoNPFu22VATw",
  "key45": "3D6Ug1dusFkvcSbHwF2bf92sXb6PGk6ikfDZo9Uhb2TQaawJKjKDB5Co7s4JgB4yUz8FDfkyBD2fQvvQNHTedtua",
  "key46": "3Qnt2YNozrDvMPw4hBdgXF6Dhp5LoBLUqvMeyQGkcfVA7zRcy8bXAR9ExWBQ5MMwrCcA3Yq4s8sPAUo29nmFyrJh",
  "key47": "4CLSxR4AVoqdsEHFp6CbaQ74Wu9RpGBKbcX5PWoqWKYGyX8Nhwdsq3zVoMLz3qQhqmGQRM6jrJxWdfcwpoD7wMNj"
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
