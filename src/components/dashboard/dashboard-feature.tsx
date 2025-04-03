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
    "NVWFq5yDGwTonQ5Jgkur9fkY248sxjXPsxRPDv7YpCnJn5Ri9Tp5ueBDmkWjV2ac3TiM4pqJ6kcs6eFpXPMfSMV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NwooJ666spTeGhAsGMefaUsumgwgucx97dDFFcDs7VZfTjTDfjbZPQp1iTnadrYHZYWJDBr39eym47FBieKZaJC",
  "key1": "3v8RWfdoKeLTSfDXotCCwQ6dyUrk5rDgZCCpzKmHbWPm91xjxw6XS9VN1eqyHNYrcA1v9PeGQT1iE47yMpGQV3LU",
  "key2": "vJWyHhuQQeSufVq2FVrSGR9SoMeiyiw2A2DrPxMhjWVWpaZUyc6orv1f2qSNj1SMWrhR494fSwmuUMaVzJ524Jq",
  "key3": "dphtMy3yMnwFV2NFb2nhHoncjc4efLhrppEmdGwcG5nUvHqGYp4gfU5MEMV9LpPyfMSKrKuP8tvj91kjPBEmzXe",
  "key4": "3KtpBgVBsQ222NE6pcAz2C44wbrykMXBP2Nj5SgPyrEbyYgsmfCC7mcfZVpAmN3YGx9LoVG9a6UUjjmPVjDriRhT",
  "key5": "2C1JnKcUSmBCaQVLPkAEQ5MZLZYtjznuqNXF6tzy2vvi6yhUqxqFDkehxPgq327ETqwJshyMwAC78ba9BT9P2gLB",
  "key6": "N291mYY9Pxe1aNw19byGoPQUSHY9F5t4NLC94tcNQ5GYY49tJqnMR665AKo7aRbjT8kh3FV8Kc678tSsotaja92",
  "key7": "2X97CodDYuAhvAMJZjqBuBTcqGQUepshLrNE8AGooKM52rGwgdjWZL9a7bQX2icZAFZQ3wKSihTLpKLaVwMTRtn2",
  "key8": "3HzFGF3Mw5CpiVLXXc5AHg6JGL99tFHsaNsf1HkaPke7EiiHbZhmNZwuYvJdSYyfNeEmeYDsV51QczWK41SRLMaz",
  "key9": "4rDy1sa4CuWTVsqhBftwxWywmM8HHnbjXyohaaWSW6ZzHhxZbYdAnFh5kbE5U2PLd1iiHSLJLfJZSAoUqxwi7Ngk",
  "key10": "2aj5LEh6rUkcBVHY9yAW6n49nuoY6fBaKTFwC82FSpEBJedJfZTGWRxALHKpuNSi5UwmnokfzXHaC8JCgMDkRk8s",
  "key11": "2Zq8jJ9GyBm7tz4G4EJdz78HqtCie1DjGWvYoS7Ht4NFKr6Q9H7t7tv5KudZJFB7baqpJJuDQiUwfD7wG9uXL8JA",
  "key12": "3yodUeX8wzc6Ga7djKzKSQqapywc3cCJoSWMzgkjXuvu9RRsicJzmR55S3XeURTBA1UWrk7nyk4hrtH3yMQhiE4N",
  "key13": "m68iBxU9t4pxkGo9akqopPnFr9HM3uck4fArkQwzijmvDAo3eYVncRAunAiNqw1A97CrEE6WZ82QgLnj9hcuiry",
  "key14": "2rrivbfiC2hrLaXk7HPnuKWr4nf9hw3YSVE3nvYZVmf9AEobMYzDvR4sdmKcLyEozitxfsJq8NWRL7Vw71Z9rH2N",
  "key15": "23nyc2kssVjzmj9TBFejV4dt1nrnox7npnh1ghUtwNy2Sxq2uWmkWLXbY2SE4YQypSxGQMfXt2H95YtGyCWC53Wg",
  "key16": "2zsAdZWLKiWnHXPoHHCHSEFukntexMBuDBnbFSZe5XgM6JQmEjEgVn6tfqaCo67dwVifWHobAzDnpXKWxngWAp3R",
  "key17": "qhBmQqAepKjpjJK41K5zaxSQXWXMVEKXp2TdU2jDHNDTvsvNyEfRkb7ApVP27jZYZFFYNeEAZnBL9drL6tUig4d",
  "key18": "4b5R5UUPrQGphERd3AFEc7KmpcGL4AyMMSDwViS9GfwyfgBqDTtpyoDbQwEDP5kQ3hAPGtXGm4zGkSrwz2AS5v7D",
  "key19": "27HFfN98mUHhbsBFGoQuezqkNoovFeL3mFN5par5GtNRc4YSSJppBNp5NEMNoSUejYmsmVuq9xBFt5oJ7fanPhKx",
  "key20": "2wsEqAqrtGcKmcCZ38VoFLNkqpvUGhxa8ff35ePxkJBzU6nNzgTLULZMxco9puARAvSLZW6wtatwvmHEeRRYkVXp",
  "key21": "2Z52wNgWaGbbDYh833R6hRAc6Rd1eeQgyrKA1ogr7hkC1aNSgHqj92L7vmcXNKFAaxFzxCpYQuZ8CKRkbyhXbpD7",
  "key22": "gv8s195Kio8XpSurt85usxaxDMgaVEffgneVW47AXVV8gCjzkNawZ4XXL25dFBMmfbJqqRecTT4ALoqPyF7yxSt",
  "key23": "2R72wKzSfwiTN9FQHY1PsQ5nahdAn12tMfky7eskCCajeg9JrJeqQ5y1DWqYJa5N6Yz2jYuq5Sa8bJFYi5uBZXvh",
  "key24": "PH46XumgEdZNZoQ7Tv2Cxb66SAgvhveX4S5aZtUqQkKsgZqbQne9ovKCuWkFy7eB8vUfoyRXAhvj5o4dUidtfyx",
  "key25": "4C1Tg8rE2X5vTN9k7RKDFXwonvCPFzMj7Yg8PJVRausEGULM8mJZ1kGbiomUMmNMuAfM8t3oxnGPWqeCsEB6nWk5",
  "key26": "3TK9smGu7xCA22X6AstxEHUTaEqTUU1CcNuJSH8uvrqXxpiQtytQWe73td8DPJj9mW1L2TNhmG7fUu3JsS5gsEED",
  "key27": "566doekgG5Xus7LNpvpHfPfBSpHPU9mpJewpUnWjBV6oM6i9jMJsyejEY6HDHQrsMymhQU5Pkpf8oycVUMoTJpen",
  "key28": "4QG1DsU5wpq6akKgx7ZhesLRMkP3mpXV6UWe5VstQ43qivK8Fwbn7DkHX715fHr4Eie7pHcWPafhTyBL3Jyu215x",
  "key29": "373tzgAdDpZ72rXSFv49onMDMtsFiMRRPk3AVA7X3g89nxUvpQTPhaCZieEjD44uFUG48X3oEguJRHTbiHE1NvQs",
  "key30": "4KB96zbhztcgFxaXSZU3JteQBJ7WnS9zpJDoA3MkKYuNyR7MMBn8WJ53HyP58bjezg4NgHVKbSmhKtado3p7qxzV",
  "key31": "5wYRPw7ZKHYfZjUbknyzsZjv9cGbhLw1qH3hKd7kMCzJSXpu1LzYiYkyTT6uUvcEQbtmGtqVtayEZTyZYTbCJsi2"
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
