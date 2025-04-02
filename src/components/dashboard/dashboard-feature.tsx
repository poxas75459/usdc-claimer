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
    "3qR6vRwALxps6qubZB9RpvoeXB8WPcU3M4oFDt6aWLM5ThoeiGx9Wzu9kL2ExRWpKayRhmM3CgJXKWREUy2AVz3W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cozFY7EtiR91dsviZmNyQrwkhyeNkarwdLPBqXpzbdZxe1apioXmgVCwpqX14DsMtur1kK9mbq3tyJBHZikFq5Q",
  "key1": "5ZzvzgfiedNAh1dSLjWu93T5H6PJxvyFL3FpxHZmdHCfZhszg5dELLsSr92QMdW5BqBsRhR57fTMMqrvdF91xhdT",
  "key2": "3bE4QtTzyLZAFFsXqFyMqDz4cck6ap51kTXqX83kGi45KeCqiTpNuyiFYqMrxaVNms6J5sknSaDLhbjvpvFioKas",
  "key3": "2RLRGbPc6VeMaWHWBoTHQ8KkAnfJ38FNCAxzawNob2XJdQ6ubo6bbYy69NdwZWu6UpxRsXb2dZdqcPnXvQYXPxdL",
  "key4": "5djPhttEfwJ4kEHMbBwtnQUV797o7YHRknc9RSRhAQD7U6UR1vNXpRuYP2qhhsHbWTL8RNuh9wKvAjCuMWUucjR5",
  "key5": "5sWDsjhHRbCDcuzHBVujXHqYC2a8Z4CCxKmd56HbkZhyrPiZJ8GtAknB6bLENGUFRSdcnA8k1RMGbY45tHNrBqbq",
  "key6": "Y4z1xvViMvni1VaH3GL5AmVHSGC5oieoDRywB25dfvMwYSdiVLNpYfWHDqsDvJsoM5vcNeE2UwAGqBmhs7yqG2X",
  "key7": "rRF4dDx3arc5tcLsvK6PuYUo1g38oDoMzHk9V7gssmheCyA4YcDJZjPtCkFwBdoDMMP2wv2ECeYyqZ3p5dEe7yu",
  "key8": "2mDbjrjJyqYCbeK2Qo7LSxHic6mW1NUhRdDEqrNj3VWKhKmcxGYFauidgtFiXfjsVRfQfDRwRP5F1dCfBwG5z9KG",
  "key9": "4vdAhmYaewVPpdMtevR5vUF4oMNg4TNG4rLW4Lakz3eRDpL5cyNbbdSCovTYkB6zP7zsV5dietGRUBgCWKubrzgf",
  "key10": "RU4dV3XnwSUukbgV762QWDmt95FZgZq5gsbEuieRfNMF33FDJWDyB9z1ttr6U9c1Z9pg97iVr4vjZwLh95ZNDba",
  "key11": "5ns8a64QEm39CXdN5Nx7JtLSKwwcKXVQZCbp7WbwDkMCnfyGfZqtqJrdimeayKpVGetFcNjy3zpbeQFcZZqgYdTA",
  "key12": "x6YBojXvp8MVX3vZJB2pL79J4dt8uaPGPGfoSRkNgGmHeT29nx533XrS2JUrpy7wKKKh99F36cwJva1Epijrg17",
  "key13": "2da4r2Y3pAW6QGe9LmAvGvHsNtC6g861yrtoFnXwnjR1WXMUDhJpYfUV7PYhLVmRufcibG91tBnrZqSVJA8bR1h1",
  "key14": "3ebmEujEe1YXvhmvAzSHcLC9A6QkCuYoUKig3N3dpHyDWBLYSYpozJJW4iLtKsPpyKqypLdeJieTZumCiiNvep2s",
  "key15": "3hccgHBbX9bphEpe5eBd9UJEgo7WbxeQqxZixq2dVMY6EdjF4gAiMXZk1qtb97smXn4qh7xhhKdbV14TspJG87p7",
  "key16": "65hyEtQN18nHaNwvg7hQR7UmnYwQAUWiK92rqoonbaAySPzEsBmSoZt4JnmnjVSaUaCboWCWV1wb9jYChYRjBXcU",
  "key17": "2rJ8NH2LAsCo9fx4ZY5YKuBWS5j1yzs8q8S4Q7xxuTc9bn4qxPKRWdJrHN8ggWRGyQU1pP47vBVq1mkXZpenqrEu",
  "key18": "2uYjCFdhEcRReM8YT9nxKzvdkERkDW3fCMx4YDzNco2j27HwckSsmsazWGqUVguNvAMBb47pKXdepFomnLDANsgS",
  "key19": "3mQGfssnsq18ftdDCcnX2JPiC2xhhn6z6yWBLVS2FL2DuxFqQeMrNuMgEKyVtG2VvxbeCJ2iEmsxLPVqEMvb4TY1",
  "key20": "2UQp49SiTNdBBicHeDrtXCTBcYF6Rz7tRsLbXQkdYTckBziYoF6nHbbp3YPig12TyukpLFurMfqeb8PJfxmvUWSZ",
  "key21": "3vPmPJWyqKtfjioNtjGMcQWb23EAK53pa6X2NqT7icQ7X5KrTU9mqg83oxiWJJZ9SdEMgr5iBjCTfvyxasmMEkn9",
  "key22": "2M65TVrcw2T8iY5XEtYfhZDZdy5G28ZK4KJ3kUJWYm7SKcuXY8PY82aAMHpeLmG33bo3aNeu23kKdtbh1Bb9RvXC",
  "key23": "4kpnCUMr4RSVAeioue2kchXGdxfMA5S5dvUARhxHJC2VZpW1Noh3qVNdrnB3ia2P7g5S1sekNaA2YeXoyKw3mWFn",
  "key24": "tJvHAQW4QrVSTCRKFTfgtUVjenhM85d84x1sUSv3zWCfSUWtBpHzjQuEQUciZZguHaZ38DkSPoHzG5szKH1neKb",
  "key25": "2gxxLnxLVZrR6UzEv8D6UvGSeczX4m6DYrFXjagbYdfhu4uAbM6wgh96ScqUNhStRcs8NN1FpbmGTa512BfA5m4D",
  "key26": "uLgWKBha2eoVshDYRaBCcSpW4ZWCZmq1UutRvLqKVHi6xzCbBKg77HpzePnJBH4qNLm4p4avb3USweBSjxQMoyw",
  "key27": "H1f9eui4HkHWjDRyyB5vSxpDKsaSnpmDu4DtnkyPNkwMHTRYCFRJWT7BvtuuqNaLtXQXZiX9aHVdUa8W9kZYewd",
  "key28": "2qntGPShNox6bwmeP7GQyK1mSGj7QKUqV9LHYq5rzUvHJ6FxsWHma8m7TgCjTmTrcCPyo1mSi5HY9bVhfx44oPEm",
  "key29": "3tf1qxGjbJDk9zDVpJkRXfgdHNJPvod7ygDbVus372mShHsW4ZSy2DSyknKEbeyF4CDSrz9w4xc4atM2Ti2HW5Nc",
  "key30": "47i6fyhZsPdcqCLNzYRMNBsUKRn4LAaqteDVGKS3vp6XVV425itpg8FrNkhv9GBwesYHSFckX3P7LjGq523jZFKW",
  "key31": "fu9GH6cWo3bw29UxT4Hc31CB37dNoi5ewAZkXCx4Tur9WiAgnRuE2MkHsTNKnJtbQrzTrpnmb5jFG8wyF5uLfFD",
  "key32": "64YLb3d4LUtV4bNvvSX5YzPAux7ukiPfN7PtH1y6ctsXPUXUuuALiKZ1gBDGwaywXE8NU2ZtfXRuQjjQiM6G64vN",
  "key33": "4ziN19427t26zK3ip9Nm2mvDJHnkGSZTpvWMxG9kSmGLie5nbmgxC4c5nRsmaZNKKmzP1taigptEWNvT6bS9tzA1",
  "key34": "qdb9Z7WJy513WJubrZZmmx5E255vULGuqGRzAU4NGxpgbgHT7s4YTjE2bHTSdNRLZcApsGr1TCgzngXapDLNB93",
  "key35": "3GL1d1jRSdaoFTr16dGXxd8cfxsFW2UaG2iXGQ1L5D4kkUu4RDdu63svUqG8V9gQhsv5nfs7ani2uT5KKNsYPPtL",
  "key36": "2iZ7aYgbJNdeadVY8xKzAktb5t5nYECX1K3Tkwqh2DGAUNZkLftfyRJjvtuWZQiApXUA9qq1WR4t4L944SmkgK4z",
  "key37": "2SCatzx9BpNMML96sQsUrpEChYTe4zZtADp8w1PNuwGhpJSc3GxB4P4jwudMfdtQGfhfr6WQH1VT57cs6ZnSmV6d",
  "key38": "4eZ2UpkamhD5gdzt8CQ9fw1YZCivCfHGWyGeCPSz5D8hk4oxAGizJhoqDhXg7APuB2DTCwVMU5vep8BfGLCWkiAP"
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
