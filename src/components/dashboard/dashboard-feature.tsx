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
    "9eTGB9U8ActrAU3mDLUoXfw7yM7ekeBpHrukfRJJxW1mrmpMUfkn8EQsYeUCnmUoETDKZwU9nVu7TdfQHPrBx97"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hR4b45xfLwQifF4x9pJtKafXDg98JDcBVHVcDYMP48LRyhChL8PXTL2pyfWMKt2BMzkrECRHVCZhEm3eu79S17d",
  "key1": "2XoBFNxNzXPJd9hhfhhvqb6AosasY4Qx8CPo5Qa3woHanhdQWbXGeWCDVpihuzHzbGFEaq8766J3JDyeFPykWTKP",
  "key2": "2RmY2qJv1nninp4uE31p7Wop1fPpfum7W6nYvf1ohSXSzHCjBPfw9WviqjnQs3B61NG9MHPkBNp6AEQ1skiDLRMU",
  "key3": "5RJTKPFdqywuiVuD1U2jiXywtnkh3W2QWsvNKkNoPNT4AsvGeMBvXTLvXnMruiw3dFo96xTBVoQkut4DKMRcW9i",
  "key4": "2vU1vZYZRoFHg1MitGowp194xWVCs3Tcxmx1gpFWw2Gi25D3F4R4i3z6rWesXY38vyzBZfwGMcFdFX7sgCqLv5jr",
  "key5": "5bDQfzUgX53BNFyCt4BZW3qnnrzTeVPBacyVjCpPcLmCChw2BeqgSQtWCKNuRvwM3TrJkMCqQdRKHkceA5fvmrC3",
  "key6": "3XwqBC8k8UtzAby2VQk8wVezQxt2J9JESwZbfdp6inSbY3sneFf8opV35uAe5ui9iWQ4rfXiavyR8w7KisMQDg3f",
  "key7": "2rAaGQnTJkjbzd3z96pchHKD4tZr6QCuvm2B6P21uWkB3SPemBowcWE12uwAPb1R3VRq6yHPJb7Z4qRUh3N4KN6h",
  "key8": "iUaa2vmtwd6vfszfdWJdTCkyLRPXnPkbmLqdETPusxmjBQoy7CH54gXosX1fRr6e5FQwgB2kMGLtXYYyWD85cUc",
  "key9": "2ZZv2AdEjeMR4z8QDdP4uyiFG9oXrzdQsu6Z3VWk8i4qCae3BiNR349Cjc92dSFTaf5s2THffwSJS2jHg1XWg1jw",
  "key10": "53ipyr5qwAT73pWH558Kof48rTaDHBabzginttuWbfSS7SeLvygajmH8j59kijFcFFz5DnEiYv77WBkJTNcWj3ue",
  "key11": "2qVxfpuojRDPjnokMEwDpE5m97aSUR5F8vaJo5KVbZSArwKZKCs82jgDbYFJMLfgMdb6RZvBiCXPzQojitCh898g",
  "key12": "29bZBEJzutUN65QzJeEWQmnnpEDhqE9kPhNpHKByi7vbWHL8MUokVosBp4a7F8mDRkdPRYBdjkmMoSSNGKeXxkgE",
  "key13": "3XG4kHV12UKbx4TiZjRfkfKEyiipFYvKSeDvspf1uFMUuZkNS3XpYeaCaYBjXUR5AMvztPyEdrbvSuDaaRtfnN7m",
  "key14": "DMqGszS1hpTkGqBJh1xDWyRKvQQ97tVaXSyzF7ZzHsBHLFUJfSc3kUkVYkXwrsp4U6bgGHcAnLGpgzmew8R2t4W",
  "key15": "dyPJYotyTt4M5ieW9AdmVHxmXzbCsbNoCqoSPmG2DtGDv5toV1pTuyXK7oKQLuN3iPt4f9J2Khe4TPTMejRFTGT",
  "key16": "4vChNK9FX2F99n8NHpbfChUuzzzn9AdZWhgbJ4Jfd9zpoqegYjYPc4mfPUnezPFdzcrZkvLePBXMHHJ7d3yAbGm",
  "key17": "5a45pzLuPyQpUBdetAcqo9vMzwkkm2BpC1g1TYXzPyZgX6Tb8iXcg1tN1rxSfzbbmZdBKjy7GD6YKtuSikGnVAzG",
  "key18": "4BELJGfhuc4FZ21Xxrs8Wdc1ZzHZoy9j52RPbVsYCDQAcFLo8HBYQx9y4L3DzeS5fu1ZrfdkT6Fnq1jde1BQFr7D",
  "key19": "5tEzC7EUDdhz7PKf1x9RYfukAfqAF5i2m4r8fzBnLYXQL6uxmPtEfCjsuambkec8yQ1knFhsgRspEpyYmvUbdHjS",
  "key20": "2VqWeWk8XQ3nErdSjr154x2ayBt1KAYedGrz7W6Ap5sG6WnECCJ3MdPWbgQHvfguk9jRyBMqi7GgwNuEuukpg32p",
  "key21": "5SAdd1gtwxafgDCVBehdRPBouA1ZngNktBMRsaSXG7FSBh3UwifzeF5YiGKtsHDyCNh79uYQkyVubiPadYtPC7nv",
  "key22": "4ZDJCzD3rnHioNsxpTKxs2zKDE1g3vd7b1C4RTUtmrc4Sv7hLQaa9dPQVYWQ4jQfXcAQAGy2i8sW5H1u8wbiYDoP",
  "key23": "5yJnZP2GyMbiXiRdExQUhpfBSX9MHz8vE8z9JsULZowyRQaSMSwPVP8kWRJTqh3RCAFsasDF3BPcnpwyAEimywee",
  "key24": "3eUBzrE23bvSxQWMVR2KRPyMifnQMZpzUBcDLJQoxToz4X8rKfhcdKotCbbw935wy5aAJHBfXHD2DUuS7747QN5R",
  "key25": "j3vk6gNqRnr3JvZSz77HgFgJxK9BgwC3HTosm2ajeKfWGvxS79vW17gHnH6D2dSvQCd8mCXdmNjswLWhSXT7FHJ",
  "key26": "2MYe3ouUCELajAqdh1sMzHgCVKtzf9rJpBRJDf11U4bX7zzGx34vDd3V7p74gigJBPoYBZHZ8igFdvRZD6wWy7vJ",
  "key27": "LAMqE26HGHLzg6yC57x55YycRFuEoLqCm9LJW1FDcLzeWKxzsCNwTTX4tgLstv27yRqXg4XQG5agdMuRpA1smvA",
  "key28": "5S8WAJawXQMvQB3e8vrM67dUVMqzhDojuTRBMok2q6UiEFpJ77iD65RWxMmxi6jkgwJMU4imT1KWqjQDtaRrBgHq",
  "key29": "MmLZApbeWr2uUQZB4fxJHPGq1jfq6mffQpibkwftkMpsHQh8Ri1VRwsjf9rmPkjMn9MSAM8uXnoSPMeqaWN6XSv",
  "key30": "5w7iE3sBLysY3NgTzP1L85kpsf236psiHdiq1dr13BS69xWDNRm5WCrKXXnR4KMx5beDpNNRdTsEcBZHGtRhjs3K",
  "key31": "2xKgMDBSEuHP8nCQCN38B8d7TkeZk1KswwHWVrsvnn5MzusUftV9iNJ6VbUfJm9m8ncsUSNB9dizBVx3E1ge1r3c",
  "key32": "2A35uBvTJmNLBX6cyMqaQzyqfZNtX8eRjqto4AGSbc6hMifgKqtMtYN5z8kb3nJGCiBY6TB69kBRcPTaVFgkiXuu",
  "key33": "4z5zTf5cUdk1ib9wfyWtsKM6MudDgEz5LWsxyx61No2VywgzdabZQ4jx2o6jLjmarsaosuYNQQEzANBEN1uBEnZd",
  "key34": "57baaf2e4AUuHLgVv1ydMimYdhkqzZhfDrazJAu3YxHJsq8DkJq4u4SwvaYMV8ZB4GN45PghxiCyYndJHxBXziCv",
  "key35": "2PTRqPrTMKYDkcXZbCpzBqwM2bL3r5xsq9eu64gifuancgnUs1oeaBxEHaBzUW17JaXvpAfmBDPyV2VEvszuthkv",
  "key36": "5HGaXfjoNFmduGBbwzztsuZb719Mw62GmR1fRWZuUF3YxU7hPb69NDeTSh52KKip5q4MtmfVr35JoUt6hxJ1LaKt"
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
