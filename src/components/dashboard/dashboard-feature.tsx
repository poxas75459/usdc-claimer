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
    "3EvgRRCL7JMahB8FdUbEfrDZsRkm5oq4XHvuNnW8ZVJWSq8igMByxVKj5NPYJ93fHMaLbfLEbtm5nfzD2xikC88y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bZSr28L5GTJKTJ6n4MN59oUSyCH7skyWsUCsBMCuzHpp8XjSc3jbRgKau16pp5m4LMbZm4FXwHzoxR3DDaDJ5Do",
  "key1": "2SnVq53trwGJCg58mtRwAKXK8eLD1g4r8EG3BJdCYRB4KsQ6yf4ttKCbr67kGKEerx27QRpq3RgcYHX6ba9jgxvB",
  "key2": "2TQ84vmno4WqcTNbHwxrhHsPAquHKNu9yMMpaphZcayFHMYxqj7pWskk7BqqC9Z9USXq5QjQnkoEUaANhDy5fJwP",
  "key3": "4rkUc59f3u8RGXYtEiXibjQ1X7Fdj62xtyivcusHfW5oBxbggdBKpSJmFQbjjkMWv72z1tDQc8ciRGcB2ayUubCU",
  "key4": "QfVwzBnsnHLgF5h7WumtgbmDK9N1gNFiSxLvjBstxdX34YFVhrFhw1Qn6xmSqdkfb7WeemcnJKjsWn2vR5BfUyd",
  "key5": "5LVDK7mPr5iFBHvTyHrfqcXpBJu5FHUgfUfQEc6s33FT7YULftkVeRkgTar68uzFkHxixgmdj7eJ4G67CLjM7hen",
  "key6": "352B3Ha3Mxu3GEWhVYBtAeiP8WrQn4bXqCr8SrKkY8YEEEXLRgcszpnMQXSvEvYNNdmkeFMfbh9ybWAS8ZppJ2FZ",
  "key7": "4BDBax7Ne48XhXzdLcSs7LxapW4tFLcZu8nY9yqbZ9xB1n1Gj1GmgQ5NuYHDJWrn37igso1QKewzzpBb5izGAWGW",
  "key8": "4NHLQns22x2yD8xMwyKkNf5sZvKumNygxraE1HdKrAo3UcD8xsiT7839hjJ4QAfT8Ab9m2FLYx8RPZh2q2m49W6y",
  "key9": "Cd8PngoyKAZX3Gz8Trxs9Gfu2zczTJxTyZh1UKDqMnqK515vcfthYBRPKyvmm31CBCiFFsCn62vjEcXhhwwJrAr",
  "key10": "2v3BDnLQLSeTZJb1q1UQxzNqPf5AyLiL1jZTMWZA4tAr8Z8qDZEe51sKc5bQ55zx19VkzmxuXWQstovLndHm63rt",
  "key11": "2CbjXkaL4LWCWptMsnCGbzNug3vuWekpqPnwErgQu6hKCHcTj1teEfKYzQhqDSQthe1RLoYi6ALX5RPFjaguv9kx",
  "key12": "5M3NqhB3drm7dEkmBtJVwU8TQqUdMJHX1jwCxzgdYQ83exnqyodDMwvro4jmoE1DejSEGjbQWEqgWJoYrnreubh4",
  "key13": "3v7N5sfMj72D1aesuG7mXro7Y7MbyuHVZ5J3vdEDoZq4SyQNYVxyxYdbw3czjU3c7VxBtEkdxKFWNg4pENNQF65d",
  "key14": "3n8uZkhQdRPyKJDZ9umDopxHaE8ZdmGrrwFogm5eSz6VmKG2GgPbrLVcGSEWgqRLzLrZFJEUkt1obdg5gx1yKqUf",
  "key15": "4yEX6NX5iKm3XcJ3Sj7HddHAfFYi1xzgT7j2AfbZ6RByE3R921okVD1jcUrPy4juiKxwZ2Mad8mRPbEw15aCq6Ld",
  "key16": "4LcUc8qzkM4WaJwwdLsBzs5VrX4SHKgntiq7FzBESqvjCQneGRedMBigMsBzUpAFXioKpGAT6J6s5VUt4vThVh9V",
  "key17": "akWcyJ5euNqHRcJ85xsNoyg82wHRuhD767sK3LjGfvCekdrtioZFrw9ppB3Zz1hEgjwXvSGqdUkqZ65UoyiY9Ju",
  "key18": "5uvZhQ4WKyDqL6hMwBJ1WfWJ5qUUjiKfUPkBDsv6Uj19J9K3bvrjuyRJmGNPez4yHrqje8jFzJHpztkLgFc37PET",
  "key19": "5eCMXoXv7AT9EARUfy9dMsErDqeDGvtevuLHxMRMygkTSGDnqhrmnvngAG2xPVDh4UsBFihKNTVkwDX4JQsWGPVd",
  "key20": "2dfhd1CTXicimDopuHc2qN6JpjaJUvvGJbztVwSvgAy1K9bwwktn7AVFWAJH6cs1KwgbyD255PHMtwU9mfWCpLQ2",
  "key21": "4o8Mm5Jq3FUxfX79PcC5NA4zVjiLA9mVgmvTem3rvNBZgqsmWKwV22ov5KR99qsWGagAzc9rwdbQGhbGbg4f4tTu",
  "key22": "2mV8h1Rp4aGbA8C9dr9uezi63pZFQA8UcnekcRagapdZZiPFb7GHnxhG9AxskFFr6dZzDdGEYruUAww7jgvXUBHw",
  "key23": "3C8FzQtgXWuRF62wPaTaRLZNzYozF5YPCMjWGaiGxbJ2xAwftumwhBEVrRenLT7m8Ur3ib4587XieBSzCgzpHfCS",
  "key24": "4YaiiDmSZGET1yWm8x24kjKqJwWHYrzv7Jhp4wneF97Uhu9zZTS26qUmQFuE82yMaSowPwxseKRMuEGcL2MCK3y6",
  "key25": "4jgyA6uhUa4Um5VwYBXxhpw7TG71joCoimjBENBUvgjMexK9tVKnmGwvBvuAquZJnryopNnaHgzqDR6ouT3Ck1Jh",
  "key26": "3vkM78DKSNB6UzzVAhEuh48yvnQModbRgDeJpBVc72BuwR2ppGf1GFVVwLeAtrGRRRNbxCjhASibhBZmkvUxHaT4",
  "key27": "53G7Qz7FSAtLowNs4gnJwUfyFQxReCLSa5jxX8ST7rJZ2J4m1t7BdMdNFqJtUvjwNJFfipWuX9wpvgYqTZMHTLgb",
  "key28": "3u68BTHks987mhBX98gJmekq868FruxfH98kXiUpghfTuHKar5HXMwEgdy8z2AUktv1X3UAy8v64Nnq94F6zKdpU",
  "key29": "2j7nwhTYAbMBMWA7deatWpx2Jxn8XgDAYhuhMguYaL9bDvajEa3eepFzKSG8rzy7u5y6pUeaLEHBZZkRkDLCAvEN",
  "key30": "496zcqe4xkDnt1RenuVpHjR9p3vdtLUYTZEBXxmtUUkbor3VRk1mKKgcNN679cUMcTdCRkvaahz53im9QuMnUzvD",
  "key31": "2voXTKV73ee7L7vzLT1BTXdadYfsPcXCy9ZAxMDc2Dv9eDjLujCvuQGU3LoJRotNKvesAWgr3kgmwuwMq3KUxe4G",
  "key32": "34gVWq4Y8MkdAGD6HXyPi6B9KGe28WyREbJGn1RHySNvNoxng6pphCR1EfpiSirh9eDQKWCMw2V4YK96C862dBTX",
  "key33": "o6ytAe6jiauQYH9QvkmX9pAEBCTtMcjK3CK6b9tRUFdf4PuFS6cNPriJPhxomHx6Gyb7WWpkoSFiH94a4Qdiij4",
  "key34": "uYRLKghFRzJYJkwwX2j8GwQCPSRpGXvY1J2LgRgjQfEam45znghfna4gYvLKKgRTLCZ87qRahAGu74qXG9XtE7u",
  "key35": "4EfJKPDq26rhuw4ENJYDsXwp2EHEpY5HzLFiYbCyRatiWMoJqpPoWfqFMC1aUvy1y5Nw172up4rfLREeTkGqS7Mg",
  "key36": "5E5vhY8CQiwXb6ghVLK7KULcfX2Ck5DA8B5R3LC3ivqgfHUdJzEZUKHoDeH2nTC5XoBBvHcsdxraS5bskjr9DTjr"
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
