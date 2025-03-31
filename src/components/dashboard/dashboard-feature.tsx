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
    "22jCVSFhCd3e8p2Zx3wU9H8Eq7nBJubNEybTZ14z75yrQmhoYHJ2rNYJGimzP8kfd3GwobDjUYq8Z7XWA8voF3gK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CvrgQ3Yq3JYp6heiKCPd4UnhpZ7fTsYDvxfgGC3LnUPGeLSjG2j11AXdMHP4gg5QU6qW9S1tCMumnhrJT2VqJRX",
  "key1": "4uM3c82b9QGNZVzNDYQcKHwZn7ayfb44Xnc6sB4eDtKwngD4chuGxHvWUcHS3MqEMvbRbBdVteYrAtChjSihFeDK",
  "key2": "4bsiPYcWWEf2SFYQ41PpEfFTENiVWLPkxRKUnGCQJXmiUCeJ7DVNr8Dydwy7A4hRcxPauk4QPZDVgmDMAoYgb653",
  "key3": "3mvNRpA4NSXBFN9NXAvNZNtFFn3rgbNxJGAr1tvaQc4Yao5NavaL6bMb2gHGeWtQ9XibYXTKSsrmzw55XsR6JEPz",
  "key4": "5P1FsCZsh32z6Nbx9vMmWqfPdduDFgQYY7sojccbSQDVCwBGy62tk9mhK1BmjwkHCMCjSe7qm7Kt5mafPsyng3kx",
  "key5": "46RccVxVnenPMwV2S6xJo2KpP5ogXHbfdzBJ5eXjgpzn9Lzf2nU2zeQisaCugsrEwR8if3iHB3JXqkBwW5ghJj88",
  "key6": "314FwqpDkwiBXGdVLLnLmFeqHmf1yDqZB4kGFTLQehvHEaw82t6Lkd7rAtbGVKBd9TL4C4XejTqabyByDopuaQet",
  "key7": "4E5Y1bcZW6FP4QPYQ1C3SUhbujYHvkcoB43jwSr2M1GzhR5s49UqraQ5yAsaEU9Tm2w5RpEGNaKCVP79D655tKwL",
  "key8": "2Wqa8qNryLRVrxtBpizCAWvTgL67QtDLrixsV2dQpbErMgL32p1kaMx4PhXMMXrhgRZ1mtDyrpXsgh3NnbZyh7N7",
  "key9": "663b6x91CZBPUGyAGFc23avV7MdmCxogaLPprHZ8318YHNnCCtqp7MRjuf3h6UaW4pgNvhj52HP3kEUn4YfwZpEF",
  "key10": "3iV9WJ1rva7pFMqV7GYuJJhrt2aUFHno36R9yqHCnHEVq3g8hnjwz1jgSEfstk3HDtbmBXhoe3T2AxJqdkx5diD8",
  "key11": "4SHtevkfTbLr3MkDDaf9orWRYKF65AwMuKp4aMqcjk72Bv1vK1qEvCHPYiLJYqQ3Y4abJtbyoSCndcMqRxDgY4qh",
  "key12": "kgHvayvEcYx8TFJ8pi6UjTToLf5DH7BcoLC7dvjLmPXqk4j4LVeS5VFU6cwRQv2jWq7eHXat5sU5aWUNyRGC168",
  "key13": "2Fd9B8hKLfcWcfSSquiQyNnDvaw6EV93G9Zqb3koMb9Y8GdbXyaiTwo9at5q7Rb3SAz5vJ3fHFGCr3CMMuKpJX6M",
  "key14": "7DUUiwi6RtEWVf2hsCzUrrj2TGCm8avKkdbdHc7Rp9nMaci2KZFmLBfXi1yiubFoUguPMejXuhxGnD91E426ebu",
  "key15": "3n5FoF3tNSGDhZn4HRLKZPuR7sXs1ih35YxAtPRPXuHV8Cazi85zT29UaSDLFtvSR26dt4nNzkPxZDZGQLiD36tf",
  "key16": "3X59MKsBnKaAEKUDVtpaJTkxp5n6WbBbEkN63wsffE3JWBnVRwsh5RdSgpQ3cBuu8wydcD94tCEBMeNeGsGTrhNf",
  "key17": "2ZrhivzcqubuijgZE4LXvSyyw18HHc7itgq9dh9raeEPdCW3XRZT5BFJ2U8Vbn59ofwpbNAHvdP7or5fyLZZCU6W",
  "key18": "4ZDDswW2qezi99YoLay6GpH4N6TSf6EXr4VkMyUpZy3HybhmUjmPiesN98FYDJ7ys5WEdwG43hNYLGzmR5vpnfWB",
  "key19": "bLiKZagx1Ph4z7zLhgHHgu5zmnwtahfPy8m6Uztd1BScRCZjMn2CQgcjHTw5AxfmcFYpgEtPQ4M98PYMbsEuDBd",
  "key20": "5zpeP3WXMhWvnQW599ZCqrx9LS9ppY7rm1jV35mnQNHRab9iCdBJEU8a7C8My8XdN7o9kHpp7CDVadhKRL4cNw9R",
  "key21": "4FH8kXuCKisFNsnWfKGEydB33oRg6HVugPhUhTF43p911KNkGjduGASVgTdNmjsPen6MyX6TwdvBH1CgwqXK4K47",
  "key22": "3MU3Rqa32wYhH753fToZqpTXkTJvaUoFtJLMHAhfVyks2Dt8s6RDoXNzLd6bV8LbSTsPjLQNWdVC2C1Ku5jSkHnG",
  "key23": "3ZKzF12ueEBoGZUR3sVMBUgywUSMRogXtjGHCjra7qnfDhhNXGeZUQraVmbb2LK4etgFnurSoGv7upmnftDZ3FFw",
  "key24": "3435NDHm6KfaYFiMPC4QddYvR5E5y5eVhTnxnygbh5jBjAgBaaFGPYGBJWxXEHbag5BaMoZf9oyMGudEsabPTBmK",
  "key25": "4cxehNfEXkndoqxoy9nGeHg11FyS5i8KhNzDRxHgem28GHBj8Kn8QunzTTDEXkjJLgHvFj6ThcsrcEFN6AWDPJ67",
  "key26": "3c7TYWEffB9UADBAZE8uT67Ptobjy1s5ris9LGgFjwRTjyFuWXfqofZuzbJtM7YUhXHnTdGVZndV4Qw2E9qqtRd8",
  "key27": "26uDGM4zFxqd2AeRsQiqP6ebvQNfFxtXLV6QztfYt3J4suE2EVquiHJtWx8Np9SvQZtn6gYGSEwbheMey3CePJna",
  "key28": "3GZN5pR5W4yT8DLoaWGETkR8rFqnXErfek7EjoMq81eFGtYLLbUF1Awgx66QgDtZGsjmC7vATdnBrqwjcMk9wLu5",
  "key29": "5fUpNbb2abQibTKb6L9of5qonF6DxqGar3CQGbvypDiRprdxyQiXUimQKcwvpKQ9iJSz431sHkkTfBTqjzVHox2",
  "key30": "5jRYVJUmkjg1h71to3Kz36PdytnJw2mQksVtjUEEKw5cNLMXRzXkFPUxMi2uc4fTAMbG5nwZvjZsCRnHfKfTkNok",
  "key31": "5kjWXW6VpV2hinqs3EAuCAiFUaz3xczB89PSDk4vtMKhpTDnFsxNfa2Jti27A9eZpcBBcn2KsQ7yS6Ld9ZokXxSY",
  "key32": "3Yud8sad8sbcK9JWwszhNb2EXXS8wgedY4fi56aL3qiu5Fg5SbiNp7DPoyU4QUnJ98eUti7nTswZihDweDsziaEL",
  "key33": "4vpyJ8k4YDGFZPr24FSK5AteappeCFE96f7G2zddcgdfEia1SEEF1d3H6v1eoQu3QmCbtRCJiQuSxmnLFMfWeXme",
  "key34": "hqvxmuFhVkfngRJPWGfkaB28ZLd1uNHX1Wvn8sLpZDV7zmvW2mhXG3h3YjbA3Uzh68QuYvvyRfSQ19ZWrWiiiuC",
  "key35": "9V3QP9LJ2kmtcyjb4RPdGjjEqhiD1mtNHVnoXr7SzJDLALwopKsAbZK7MwcViwvEH4ac8J9jP8SaifgkMfqmVxd",
  "key36": "5zt6MPMGLxsCUtGHTRr9MyUiLir13eA1bC7zwhGcMNzi9wFqPyR3fKPkxzJwVfPg9yWu4815aP9ARwiVnNgGfUvz",
  "key37": "42RV2aFGGc1xL7ztBv4zFJiZ273AE7VgnZGpXmk9zhPsH3MGJ5nP5Y9x54i7FovPLtCv3VyCPDQdDL1xRfUK69X3",
  "key38": "4gTxLEF8WiwtfRWzUa85Ykmq4b8gkQHtoNm7rhTEjd1GWrESBGCahETGTeqm3Lbe8n5prBydYVd8o5A8isEehyN3",
  "key39": "CtjMGoy43CtE768KbDoMKRABSjuprcU5Nut8VRsQH5Nbj2xHvQHY545TVeuoGG78HsAaoqG14YtqkGVW6gZjmfE",
  "key40": "NQ4NeqgWxUq1oTP4VKW3YtP9JpSg2w5yCoy5joqrDbb81RrrgmgtuG9HjgUyTU2JC5fEVFfkQcxoGiLvcfmmFLt"
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
