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
    "27DDLpAztewBExKj5vZzspMZEwmyN42aAF5dGdggxtoKss4yDQSFKNcPZ48yN7ZypjCorc5q4AvFu4sPCkKToK7t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J4r8k14NvAZVRsAoz8cpEsoZReKsvUt1XP2kTwdL4Mnv6tew1LHnMBsH6bkBKbBX2rWc69Z7jK3Exy7ScHYh3dT",
  "key1": "4eHv3JTfbix5e4T2n3q8Tzgs1FgPkp7RmipmekrFCVgSEubKFmMVZtRTCA7BFmqbVVzQLJ3UELhz8mLpKmHFcb4y",
  "key2": "5dNNUkBK8a9jdX9hUqYwcUiUbpy5p7CK7dTFFWfp11JuC6oxokrdpB61H89Uk38CfJk33iGR8knsHP7wdgVBh1jV",
  "key3": "5zRdtFPBhtrSHYdxNJvyE8LDUxBFEzDUD3Nz1rWV5V9ttDDaoYS4ApF5fbUxQVjCKvurfkiUHZzCPS8hqfCguFCy",
  "key4": "3BEJHrgkTXyoRXMGNJgCWuVcbFw9vn8V8CypEYNS819GQGcRgZjRqcZpoQPBYkE7tvaZDiC9TbFBxxGGKHxNCedU",
  "key5": "4r9KMx66kckZYPQ2hNXgsqhEsxn1WfD6UzGavuEXfypmuPy37anejuq6etnJZjJF97Ueydr7NRYqspegUrYmBEQQ",
  "key6": "2iDuKAzE1g4nw6bA3VgPrADYwA1n8GfJkXDttQpLuF5EFaYJ1riVRtArpK1qUhS3nnXDtRe2ExdvFbSk3k9LQw7y",
  "key7": "3YEYtjCRKd7oi5b4sKvWAqoggxuGmezHSaAjkEagbo263MQLkEvAnRQqLwQTMYhtGSBsnLTqotyX5gBy3wnsB7Z3",
  "key8": "dz55n381irLqzSnJ9Z8hBkBVtBFzmJXCV752NU5HB5ZsqaeJjMQi6xmTmP9azr9zprPJHr3tVK7k1Lc5PxRNjoc",
  "key9": "9C4KVqQD46dZ5mneV8uifG6BFPajteCimLSPBxTbfxfBcfyKwFH1b6ZydXwJhnvvuuaZnkDuH6ZNLdEu9P1C36L",
  "key10": "5P62EkyVc6D6i1NekY5Mmy6RiFHEqt8JaztdVYNFQqGiZrGVyNQvTZSbHxTiuUpjVyitKPMxPxTpdZf3L8Nm2bGs",
  "key11": "2MTXzyGgRXfx74RQ75fiRd38S8TjYZPFyjci6GnXNvNujwetfwiw35mWngs58aerDSc98jrKPkotPUVBufmWLnAg",
  "key12": "2X7ALZdoo3Q1HYhys3uBTbM8ehnDcE43M23SBSEEDENyG23X7y6rmhyLAb2NubQo8u1CJUqGoTkmdgECpcjMFUnw",
  "key13": "2G5diLZ7d44NvpVFNUWjoy1ZmGS7nWnPFjsQaq4mYCc9yBSTptH7U8JkCmyFdQf2nqdNqn4vvTqEqh9qeNZDVpnr",
  "key14": "5KArNk4n1BfYD5Ne2xHw7exLzLKFAmkYaY4b9SdP94ox1g13cH8oE83RZqSt3enCiPUUU26hPGQJopgcjErPLugo",
  "key15": "456CG5x529grce9GPhdGTV6SLnWrqZf8B9r4aasRMcQyzKnEQTriFcC9tAeCUkPKW5EZSHnRNpKsiJG1UzmA1Smj",
  "key16": "2NG3bAMrz4ASPx7sNdBD28PQ2rksufyVFxVaZuFzYb1Zozyr5LKLskE3Eg2UtRarQbrPZdXsnniG4vM8XJA8c9vg",
  "key17": "59zNtG7UJTN49H1FTZ8XrSwfVU2cpxq8S2nyccPqk2UFNB5VFtng63uUTrvD3TkpY2pccpxyRx44LyasKgJXrKcC",
  "key18": "5p6QTUHXFwBxxAKB2GhKyU1Huhct51ccQmxr4QBa8QkPNAuWXBf1Fn4uXM7rMzQFLn6X9QMUegJdHVYUrGtnXGze",
  "key19": "5cKP4TE1gGwsJTpN4PDLDkdtnyrNbEWTduGfEoBMcyFKYn1FNg4ysergyJXLHDbLFUDBEaBDcL97jQwRKVrBS67b",
  "key20": "uN1Tns29jKwDQu71Vqnw95EveRiJhvzW3ECKmKWLakpyfedphDETs3qPcSWFjG61LArJHC3QttW1n1UmA63yHDE",
  "key21": "3kCv982aeTjAibuaLRsNBn2qTTbPzJUvmyZgjhqveJSxwDm6wGj1yrKcbL8riHTD8rcWkbUTCxqhtyzpaczrZtTr",
  "key22": "5g2yXX2YmTrKFMGVfUWAmi1yGmEryem4AjBoDEkUyNsLxZisi9wEPQ9nVAESjqGfaEfuarzvf3LjiAqukaykwpeK",
  "key23": "HHn9Ar4FHzKvTTtWcEUtJvUet5gPhR2VQE3QCurWMhfwcyKK1XFzqx64s21PrvcFeL8PAZ53gKLKGegcheS2XoV",
  "key24": "GpBwGo9bTQnipWDWtkXydTu5bCwiVdfeVkrcD8oxLvdm4kJXd7m7tvePr6NDQTPL15krrtosMC1fBdydxosPVvT",
  "key25": "48BYNtfLZB8dcJ2o374rs48p1rrD4QnwDvX5726cDFs9kyJKp5yCkVMvUDBs6MhGuBPrfs2Dk4pBSLXiQXvvsZJG",
  "key26": "2mSwDA1gGwBA2ntLb7tT9deAuNWh83ZvoaVzWcLxp4eN8ecJcMRCmqZ1VkVihnMtbzhRSYUYq8gEkHNEcxczUFVK",
  "key27": "2MAGdEdDvisZC84UkwtwK9EeBeVvGdwxcfem46Gr986NPNRj2yLoKiSPZR83Uaco1RfoYG5rb1Xb3fHBZjQMUoMu"
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
