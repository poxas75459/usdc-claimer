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
    "4aAhtPbkUxiEhwX55aaHd95SMqhUy68ZNN6t17Ndjrfkadz9S1L2xtYuHogN1hQ5Kux63CPnfKGnzeQLtQi52gxw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tVgt4jn6Y5x1n5HqUppenCuijnNg1qVSuLRCDgBk8SycFr7yazeoVQnBpFEpZr2i6XQ5VehzRX1s1vNhTuyGtST",
  "key1": "243djR2GkW24AtqqsJDKeF5sPrxE2mu3Qw6rPfdewKUV7QYRvxbNB23wyFafwtX2K9Qa56JwzCKeG9TQjtokD87A",
  "key2": "2JceSVeWAME2CTU7StYmoXVxcUVihmpWENzuRqsJEhz5V9KjBWSqbxebAKxUaF1gcmesgP9ugDHQCX4ok16oyZgg",
  "key3": "2UAnh41r7J3s7eSESAG1Ee3X2m47WwwHZ8532cUy9pCukztMYTvGMEP8jssfc4pXvZ4PHdTfVAYbwvjJghuxgBYz",
  "key4": "26kWsbh4kNbxaynZL3ftUM7JwZSq3r1YrCtoo6F3wheuxEREFeuD7TmHYFt3sXbLL34Le6yp2JgUFQjuA8fTT14P",
  "key5": "2LMPdpHJ85KtBAWnYozkYRAjNJMYsMKLYqjuKVLo999DoJv1EwfL5uZd6pqZY15gsX5XDLJ5dW8o9pTjNFWc6j2y",
  "key6": "56MQfV4ogHwm8tbLeL1yynTgvXooV7tVHzTSWEqaJ4a7kkdHjr5Wqb57gwDhCCoMg4MzfkpXftHP8kQyS8owjc9n",
  "key7": "3yzpa933Zhi757eGxrGmz4mt4Q1mW3Nk9hNuyjwgKVhV1XYKEL5WwugrwHccjpR2EgZXXjDzpKgQZxjK6cEu9L5r",
  "key8": "jd3QwzsZN9dBYaMoZR5myUP6KjzEUS3Z6g6AA24uPBnd13B3BsGdRykmUradSfd6zHN7dyU7NAJScr9PdwZPHx1",
  "key9": "2DBNSwBFq7Qs4RxKJYDJ3pbcysEnmGFoSYJMgqniqP3oZ3yMmt9ZAPcvHmcaPGYHgXE7YgYzJTpzpjFpsRKuJFGR",
  "key10": "eEgSywfRAPNVLXot9ysaLTibhyhEj9LuTwuuppZrUPczuSZdeD7EziGuxTzXCZQLasmnApJGgNNxr7VxJ47ps3y",
  "key11": "2uTh4WRzVvLaKDamLKzzVRsUSUzvgPTKHPMcQExrUTx8cAYpeGneMpTSx2vi4pYw985YN8Sqnc4htRXTBtwRJ2v9",
  "key12": "2QVsaJG58oG7kqBAkAenqp7zW1b1M83Ea2z4dYAj1QJqMLxqCSD5T2cAHnFgEH2ve2YZndiNqQxNp48L2cBgCW23",
  "key13": "4swnyt9Sdv5xDPdDHEErfQsAvwHp6avhJxLFrkxkdSC2rxTZNgYfE5HDrigvjqRbsYyGHvq1fcmW4Js3HTERGie2",
  "key14": "55kBEfd18U9tRrPJs9YefhtPy3dWJ3ZndsRiSm18EztQZnjRopLHZFL2rXbSCx6t83YPYX1njZEQ8ugS2uXkjXQQ",
  "key15": "31UN722L1MLSMQVB4Ct1GfhWSZp1FvQ6ndFY1v2yivobUVntXJNS5vp8bmYbYyafJohELVRTjjQRGvUxGypFzLhU",
  "key16": "nRMo5qzZ5EkuAHq96fzttoNrk1w5YKQDJz5ztwaDH3uEg4NAxGX95mq7c7WXDrSGyqMJtzNdGA51MbzXZdkS5oE",
  "key17": "44GZjLsWqEfCPAsbhUmsGY4P7ohP2WeS43fAZ32Bc32FshZEH3a7y82dJpnBcJqB6MfP2WzSDm9FHKWEFEFR7ZpN",
  "key18": "3GgeXWz4EvfCE1KX5R7gpj5wtJgdTPybs4b9uivRB9K2xjqCuRepmV2a685AJXnVStCUFrbzS1PYMv8DqNMuZo38",
  "key19": "5wu2UKznstLRxkwCJG1swTtg6NtBWiA8mM9gUAWet32kh5gxsFyXAo1FPhDiL7CB8ZBY5ukHjmdLjHgh5TVUVTW8",
  "key20": "4hBCqjZLrsU3abS9ZK3S2MQKUGLWkzm7wuXSSYmQAXfTWohUKnDJRdYxgNAKbAArzjP1ewXDqaZi9H95k1a1hfN1",
  "key21": "iAbH97Sb8uUesLHwAxJSBR9wxMdg8rWmfcCTTed1mN4CYdL6GLKiQ7utv8deFJ1AnHN4i7gkBAJ98UMPgz3N714",
  "key22": "25Pr4shsSsG8Pudec3FEw3Xfank1cQSL6GTSLnU8rrrsMyKPNJtgENHJQuh1fmMtifjSsExEcgUPWT7631sJgoKF",
  "key23": "kvsaSUjtuonV6k74YHpA8Efrx2cHqT2EaWZES8D9VyEZHFm87BVyWvhpepFDHhjURiL1zrnuG75yM7AVDC2QS2A",
  "key24": "DgRuKJYVGm9yX64MfXfTSFGMX8uiB8Y3CPyxYACb17uxTBQqmE8DMGJM1sTgXNd1397Y45mcFEzL59vX3SaaQYD",
  "key25": "2o3dmy8CV6goWHwbzukBFuBhK1GCvpRR5XckdWQew8uif7AtSVsFU8DZ8BXhXN1CKA7HKNGHi1XSKZcryFiuM9qR",
  "key26": "aFLX7ft1J8cHxX3uJyn7tUXWVcjzExEjK6NTdLAo11ANvBdgK5iAU4dCnyFvWYiZ2jTNBR869Rr7gAoMHPpXZsR",
  "key27": "2N79tyDR3FfTwTH8UUHt1Jt9atUhZBCyHtKShb7CMAJePsLQfpcHUqaux7PYUwQmXjtyRWCwZXZRVSCQTz8sqg5W",
  "key28": "447iZUizS6zM62ufpapbHsGvbzKtGhuGgNzpnzQ7kZ9y4eihhMxgXYioMtUBMUsLVii9dq6hJmcdevsSDuZgHWJW",
  "key29": "41tUdP1ZSaRjG3kB5ocV2pxHzPURKNFZ2NAj7ax3SPvuBe2sNkrTP9PYosnosbdEpPN28hLczaqGcxsk4A9GagzJ",
  "key30": "5vgUFDs9zHhKuL7LeM5GAWFKEmuKdugJ98JQx2AvW6rpCo2mypiRtZK5CjeMQNCjzuVbsbKYDLQQxyHjpDQychqP",
  "key31": "5XdB4j8vQ58HCL72ErBnxu7sX3JjV9VwiRKHcYvjXmWKsSDEPzmDM44rmdBFWUVHDsxdJyNpg3jKYXd8GSi3LXSk",
  "key32": "5UF5RJyYrSUurAFAB3dAKwCJ9gWkpzK3THnHtczRHvDrHy23Sf7pByY5ZZpD8ohHXn93bmECEpWSqCdVep8pVJuB",
  "key33": "2YFBn96T5CjfYnvCVVcLvzhTZe3sCvGU3n3rovHKQkRtE7ym4zJ3JNT3ayGDX1Rni5qymZ1fGGaZZp7xcQ6qY2FX",
  "key34": "32VMcYr6rhMK4H6V4aSSViJ626zu6nJYMN1f3ny7FhCGg4EPcNRh4Xi8XCft9V8p8toSqXZHJw6fwgHD6LceLwKH",
  "key35": "CSpCq6ofDCjhzevScN3BqrgCx7XqcP6cTjS1rrfxhwhkrdKUTdSNxVhgAkKJX1wiR78UnjyWwwmkKccYjD4pSd6",
  "key36": "32fKT3tbZwaVt69DWwdXA61ftjmKTtULmJuncvqQTEWNUssvhWQ7Z9Rg3HxVRcGdvnsYwzVxqrRaMoMXpkgtRgGf",
  "key37": "4Z1HDiSVys6fDntPeiM7VCNGXK7ssQhVMmygdh7XCwyMDv1J9hNuVqfMU4EGej6jfv1XKzsWF5WK4rdVjkpiBC2k",
  "key38": "41R6LBPKNnK3DjD91mkCknxFoCG1Uiefx3jX3VVxvgXmLheauSCaARgNpefvREbv4pLwv5vsv8eRhSRCunMbWR6h",
  "key39": "2uSgLfg53DAsom3X6xhLT28j88srQzLLrPDqa3P6vD5mZgbwvRnERsTqcBxaor3czKdTmawtv9WhRYUu5CxNz4Ns",
  "key40": "5edXLzBCdvhnMuFvwY9SP6AzaTTycGpiqXogtnjT2dxihDqC8o9i9jeH3XYzJeca1WHAieDMJcCXH44xNGNMiqLh",
  "key41": "e1Q7TiLSiPDumxTwPPKECZmEsPKHu3bAm1pHFxCDDFZkBG4tPVhhZzgmuYFqsMBxroHpSFeVsAMd1ougYXBZw5n",
  "key42": "4wje2GQXUdHZv972GewdLEwj2p7X3cFpHkzx9qLx8K9QumaLbktbPhRU1MtsqAouzj9wT4kbpt1UQTjGKS9uza2e",
  "key43": "2EpwakxhwsmVBB7wac8VVa1RW4iDkpP9s6vXT9rv9PzKzifBq8TdrucFvWveaDe7PamzWJAwNo1pNVSKihcYg4UZ",
  "key44": "3LtSzofZvpeYWzCMPp3VH8KteqfQ3EwBu8oFkwCMvBtckdAtP4o5NdKECEEAzaBK6X3DU1AkvpAps2d5Jj5PGJid",
  "key45": "2nr1Gq3sk7eUgWUv8nQZWgpw3aYAAgFDq7EmsZKRS69WpGVDDK6ya57pTC1mL3SLw5MdFkrMQQToYtivedDgey8g",
  "key46": "4Pe1hsrU27dHXxHJq74tf95HLi46gcVF7hgzTWRUK4RHUJoL6JhaGKG95m2oYsn9C35LGHAPcGhhfscPQpuAhD9u",
  "key47": "5eXoqzcrBc257CwVBnEgzQCQzSuC1oPep67df4EGSvoDZoNtRUZneakPRZ85hkvLYFEd6fbvjAbd89CDYUvqCAsB"
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
