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
    "3RHFzf4SDKKxSTpFW3rVzCHx5EsBTZykURLagfUGEnYLo6SenvM6nHqRwqkoXbBBaaXav4jivUhJwPMDVjZHZnWV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dPfeQoJ7wnnHqxuofpKoFmaruVbxHBCy2VYfnvGe3qjZwrPDHhgfGKFCMxDmQREojxa8wHHbEgknbWed3VZokr8",
  "key1": "4asUjsbheKsRuRw7DbSTVxcL7ybW1sXkCvNMkkhmyQAMTxAo6vdiArJTQJrrTk6dwcEaL4FQFfD2R7jaAFvWDKEh",
  "key2": "jafhtmzio4ctPaDxjSAjrhV1botXcVJpf1BLfEhPMKsdWkMtP4EGEGpvzWpF3t1GMSwiHN3ep9JETWZW7NdCjcx",
  "key3": "NMTBEkGkANfnACNKki6RUDHorcyf7eg13svTCG8HwS94EdV3jsKHhKYDpBzHzpMe3TbpKpqS5jbHxPz4gkFDDfV",
  "key4": "2ShgszZtBVb4njwwg3kDNo9LXWDE8a6TZtyCBZZkEm7xgVcWAUGwFrGf4sisYg6rBQ128QmcwTseg9B2GQaJrE7h",
  "key5": "4QWGP8pw4EF4mdkUAzNrQUtsDf4aqhKxmK7jQwxf4aZJmCfcCMSJmnD56NRV4E4RpwFZnFfQKHZ8PaT8eibmuAXB",
  "key6": "mBmAvHPXFjfCwHmx2VW9XoDconELoWZLAUbKwpRmCjzHMQa5nxDEuUeoRDwRUU6QocKnT7uDwS4ut7HveqMu9Lt",
  "key7": "5AdAXhdhjkwjFbziyRRegKrDW6cUamReFAEnn8T9GdQwtxEhEwp44WbjVZ5kBYzejgsWjedhbrYcS4VkweLRRGHc",
  "key8": "4XUNFWJpuUnjtQgyyj9eDYZr7cv9QdwbHWqGcmsB5QBcBG5xhMuUtWqQT7kZbN9GYT7yjY7xKVeVGLgAuoZDiq9L",
  "key9": "bCQJs9nw1HhqMFQSDK3JdXzkBu8qW8gBvnmr99mgZ8f7AxL4qgJDwkSRjNfzGENRBRADUB2WxcnHqkw82CY4zub",
  "key10": "4iNj1ki79Qn2zV4pL5KJRkZh4vZfrcNpKk59yrVcAJon674wPDrcnwuqVFJ4qepi4rtavvrLK4mktwuxVoGzsR7a",
  "key11": "2EMf24NHiUFj3XcCapuGYXekAkGzyMp9xek3oZJ61fsvFTKdMPYXpd356xdn5hWAfk2V7ftRaSDVHNQKn96phDNe",
  "key12": "5xKZpHsxyB2hzitiHjVYZaZ1EdKzcwFCfGjosY9NK3QgJUFvaJJHaFXnwzN8cokkHrTUZw82eVZKHtWZ823bqDix",
  "key13": "2mgWLAbkq5UDu4GrrmtdooNJQExHjNiymZcBBV6ngRVkfQBow9LtxfviMRH4y68pnJTAdU1j7bfxPJicRawrLmZo",
  "key14": "215UjoFcieCVCKEHYbpw7EShuJCivn7qjtYeujk86qiRExUvEptX5hh3ZgB4z8K9wcBQNrnEu2VxQV8RRsfFZXCg",
  "key15": "czySodUyY7ruWKz68PkbXPPT6qa93dqELhY3osJgXirtrhByPCTm6ddnV8mmaMsRkmkxuySSmsJQUBtZwgpX6TV",
  "key16": "26TQuQ5Cx67UeogG4ffewcCbwnx64VLMVpLNjJN1RCF3WUyBVNt6w7PdiHETghw5HbHnRBgDnVkRgfJKz4KrhZYP",
  "key17": "6Ahegr89tMP3LmjkQyvxKBKmSJBVAKys4qDq1DdfAvKMaViaHMxPRFDNTLdVFF1wGzCKctRqugSCqGiQr2ragiZ",
  "key18": "DFDNBi94ws2Ji47eoHPEK69waribbXbSms3dsqqS7SWxLpuyfCRFL6XdKtX8wFTjspEGQKFTKbfoJ2sgv4W2cJY",
  "key19": "5nyoGGDpN1Un4ZUDotYNNcRVBaeQGsbDSyk3zWYTdN5CnjiHWAD1KFbJPz77qt9ifnsrHZb9XF1nnE7LK2LKrxnx",
  "key20": "rjMwBCfchqNPd3dgeFoA3Umd2dATgFPeTFvk6iPK7kMarszWYE5idiXJpcWVfRKUReTWov1JaJZrTNuwa4eq8t9",
  "key21": "3mVc8UMNfBpswv3ipxLeuRx8L1denHRcRjowBQkMWis6Vzd5GvqNEaZAf7AhfSksXLoKLGgZCxAPvvcEx83Hm6rM",
  "key22": "5ERhYNiJY8bvgTqH5srm5BqMK1qeLZHfF2aXihSgMe5pXNfxyHSpKfypaVA3FahLWcYzM8NxWMdYViNxpKdaLocr",
  "key23": "2dtTbPkie1E8JESxoYgbjk9eA9H6jQiX5nsZDtsXyhYtJFx8GKP3zAPs3jyr2Lk2rsRntxt2oUnfjRHDoCU9mSYN",
  "key24": "CS9Yy51nrhhJpqQtHWFubwdb7d36S4K4YJ56Mo17aj7GkkBtiENeNtDcpZhh7UngHffCYhNArHtYtqKZehUBNf5",
  "key25": "3nM8yRHKFozHp8bGvx9Vp2CNfwXtpSTSQ3ZEEqNRimK42g5g5v29mFaLf8RMc4EKdPKHhy8kx6EEMNPWTAhhGjDM",
  "key26": "a8GTCYG5NXM75j84sRPV5d5B4gWc3WJNPVJiMfQeqCHir1NJRN5QVfBXLb18T1bYiCopgDYDmsSCpTyJUpcLUwP",
  "key27": "4hYkRZth6oitCqz4r2uRFWbMBVwtXTktx46gV8GeB4dQoij14iq3C4B9PuKWEbRL6WFXy9H4MN4vxgwscuZ7mirn",
  "key28": "2a1zg2ed4r6jVDvnNDG5oTMyniDTdXbzzc7rmZ55s84ScoMwQM91ceNhxwijbBnsfa5ELLYpj99ZppfvJSwjAjJm",
  "key29": "2oz7BMujvSZFuYverBP4JEYjPBV4oMc6F5jhps2APYLSPJA6CLYfQGY9rrcAN51LEYSY5YFxjr7ahk7QgPiC7rBL",
  "key30": "2HrFv7JrB4a2Bw92f2qohs75wF5Apn3HLpTExzV4evSD4HKZHPhVtTnAuGV6qKieCjNg6cxim5KSjvc3Ahqg6Ho3",
  "key31": "3X4ANEAMDyqXTDZhYi3LHjx8EtB5k9ikgMDvqr5HGpAKdTUT9irxb5tmzJKUqUDMMziNCPHTkh2Y8sWsh7dtPy1q",
  "key32": "87RNnGxm3kA7vCTk9HJHvEDVK44eLR1PKF9EqCkD3s8gLHmMEbmRvJ4HWSB5K64dBENRcarcswneLEVKd9YvFsq",
  "key33": "3rU4hVdrV1vcrHLqZNyTS3eBaSTyekrJmVXudaMGsEF43CaKx8VuAJW9bCWj5MUu3HDNePSbLdeMEPNav8eM28T6",
  "key34": "53E85dBcf3dTVEZGZG62PzRbPk2Ze3nYcy7XDXFwzS5vZKBwU9V1TCL8kAEjZGgJJiSCbmqEcvjmVJwMSitywVRx",
  "key35": "4RSWQBFttM2qydeSWAScGn4YtLQquHyBiaDThefgK8U5QSPs3Vy9Qj52zv8FBkPcyxp1ypiGgKqqWXAr9FMkhf5s",
  "key36": "ujF2sSwBpgwvCFnzmHhTUnp4h2puK9A7sfWMAcAUQiwBNtXyaQ5ZhzA8n17wKFy6f5EJuFFR7H1sWE2GdJB2Ftv",
  "key37": "ovn45hsU6A6ayYty7MYm6WQoQkpnJcbmNkoVkCeLtsAoBsXGaygiYM8Wswb2i3syu5tdJ865xswkpe6ZhXjdEDx",
  "key38": "GRoMW6snRXYBDKrAdGoxscJM7gckEnh8VgWERVTbuW5mAkm7CzMcWeexwWuQoAjJWTxPmZHvftPAe1cerLYKfhW",
  "key39": "5TwbhmmF654BCzAZKVDhVC4RfiT46pvKXke9DHGhX39sXrVFn1W7pQWeeUrRAMLh4G8VtGduvoZBB5tFYKj2dudJ",
  "key40": "2wD5fCe9Dp2j8xApuLuHALUiBo2JmXB4V3hp2fxNZEb8puuWNkSFW3e7YkKTFB8nvGsRXH17H5BqwccdvRiEAxNX",
  "key41": "3wiuNQtms2FAm8ngroTCZcQXg3PJ5nqdLL9hAPgsZmQnjp38gPpvVRB3nVzJ9JsrYsAHrRgDZaiEYv6zk8KMGq7e",
  "key42": "4WAKdSKJZ8takqVhBzncWuey5wSDKu67B4iBCY96C1PbzBcNfn7qoMxy67G3khMKUW9v3Yx4GEKKpmxKQpD1n7He",
  "key43": "36fHok9dsHfQJnXQScK7a8bbAnBqLNNck1fc1Q9Ssi2uMnmNJNxCfSBxe5VKfgF7Vkmvv9XDSr57peiNvqvoa5nP",
  "key44": "46HwKC9dnsaDWqjrn7vYZ4jfkbooGbbj381xanX2udFpteKQ9JTiQiN9URyZfvKvgN1a8AxWMDDyEzuMdK1svTbG",
  "key45": "3R5C8ZwQasY1evUvJAqHwpfyw7bDFNc7zXKudqewffFWHfd96egJaJsdYjHRn6rRV4tCUCQD4H7XqSohmMFoHUBC",
  "key46": "4TqGPj3nkrnSt5wQJ1VddNfKowUqo4ewJbnLnd5EUafRZ3oAsLcGwrMhpAk7eEsJxAoxY7D8m9jweAPGqYiyeuZR",
  "key47": "347mjePX3DN3wqW21B61cKdHu3UPQ33Jvw1uSLFG9p5p6dFFpn3cpoypWsGWgCcbdKgL4se8KpjR3vTq9RtB42gg",
  "key48": "2AwCQyxQZHwrWx3662GR9f53qRzK2FE2YJg696N7nHN4dkNmBrAHEdcKCTqE1cJwXBfmpmhTRMJ99M1HijUgGCUA",
  "key49": "2bFavSqT67oehQLkeJNqsFUfCSBWuqovt4i8X4QuvWPVX7FY3zp3Cqs1xCrL2KZgKuoqxQwC1oLtvF5g1bLYRt9"
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
