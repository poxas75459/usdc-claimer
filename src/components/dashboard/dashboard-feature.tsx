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
    "44mewf8BxhaRZKZ49Vcuf3q1zgcbmxVszv71cVWGjUREtYmFqo5EDw5k6etn4Fx9co97KRvzsf5HBMFvVf1EM5w3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n526zoj5vTy7QpEog3B6jGfPmXxgYNPxne1hudb6FPLhm7U3uFwZX47WK6Px1euWkSBzq6omgDh3XfwoPdLkarq",
  "key1": "5BnfnfJynMjBiQVwAMZmx33j88jXc2czFV6nGdFK9D7zv52d3Pwn6r82QXWwMTBbg9S9e33VNkmQg8Cj2b9Rbj1C",
  "key2": "RuW3UqJ1XP9UU4rns4rXMkZRpegBiBg4fAXnNpZv6xwuLEuZH3Jp7TZzxW6J1nThkms1NkWC235nLJapuxN6Yno",
  "key3": "4PkQYw9afKJWtMtMPAC1K5jEt3HWgfGxBXTeCbFoHsmjvKkaHZwboTAixeQFBjwLqC8n8VwVWm68UW8AVoFm2hxn",
  "key4": "4m7tHVpYXVTDnsJx4iLMmWjmxccFRLSP14NL78PiTkc4zZN4hkVQzWzUAXjDTZjvQZ1WXaptWqCxVzFfKGih7Vzv",
  "key5": "4WVmanRfUTHYrdFoa7eEubiZjod9pFbm1agj8oLxrwRwgFKMR5tqk83XeptY7hfTCiW8PydsnyE2yrtrWcR7B2wj",
  "key6": "3ba511KRrCXqZiMso7hVk4zuWBpsLx36MUHpf8Pv19YdW1Mn5f4qo1vBzViqsbuiWWgUstbLhxbmge4ph8ByBFxV",
  "key7": "3zQLQL8DCDWr368f31QrmxoAMzkGka7qzYbvJ1UQSQp5jMf7NZwDfgRSt4T6peRsbigGp3GQTbbNb4TtbCPcBUn2",
  "key8": "bZeM6VoviHKeaCTATMBWApuGuTBWCaJK6EM3vnEqJxdjyuo1EyQaUH7MRyTjRP1tSEUSu8bnZASufsbeRKgY9aX",
  "key9": "5j2NVrGeofzpiiGBp6wLztVLy1twJXjAKAAsEZrx46EZYyPzMHfA7pCqznN9uv8wJ1Dx4pTeFRAfSdDJhTf6hSVT",
  "key10": "42VZjQdEAbhsuzJ3KQNNvn4b3huQWb1DhTq7UpET2scxmqtodsUCCedjGchgKpMdcRj4dLtM549WZ6b4h4PwfxpK",
  "key11": "5dLrAcduYkKHgQ1kSJuyvYocdtNNA1DhcgK16bmRYWXviHVHd1qEGWqpmZwy9u4anXuFhKurxW19zTBwLfUCMJXk",
  "key12": "4XVq4MSVvicLkxneTkATt7dkr12ZSeTLEvXLvWiXn6mfGrZdCe9RAUAuukVZ37zWPQSyuYeZQKfHZvKpKnkrWkwq",
  "key13": "4dfGmyhbUNjZSJPnL5R3UuqAztnSEmSDHVn8eHTzimJzkwzRGK6dwF8AsSyWYuL61vErxJws8jxEFFLKmdAP6wmZ",
  "key14": "4yBPm6EDvJCDiJTsAaJ2ZH33Pb9WxBJ49pvXyVKkhu3ibm4ubq4LWsJ41u4jgSFq5skJhvfiUX8jwotCUdKbkrbQ",
  "key15": "5NJda8ibtkud1SvyRduEpV3cpNbSpbmYeUAWXdXXMEXtn1mFNw3T2p2gGqzM7x9NvJ4cC5DC18qj7pwGDJ57aa1S",
  "key16": "W6bbqyJ442B2Kn5qPNqSp7jBoYhUcLQcR9WArTniG6G3pFewicgrdfSqiBUfnoRywVRCGNAeHBnQcnrDehxW4i5",
  "key17": "4tsYtDDc3cGqfNinJTSnNSxyeR6bGBvvEmoVrzHfBpVLJz5fUKkVq92fRXRB8v2xw9SozzqRXBgFv1psKydqXF7j",
  "key18": "4PuG14Xd9fKWtp2ZmXKbo3xu7pUK7kypRNuKLJvebyP3LJveNE1fX8NxW4bcBuC65di1j1b6WnUTcKqyo9vu5mXf",
  "key19": "5ZWted3vWtip6E4R3N3yjmymknpdEQgSMe5hUmV8eo7pD3fvZiL5qKJCWFxQy1pH9XvauYufv2UoNf8mfpmLSidg",
  "key20": "646pMBQ3DX9psuiXkR9sCP6oQiGK6S3fURhNzE9oMf85XP9FXmpqALUPg3HEEzJLzcR7AXgLHi8DdVFG5Q6a33U6",
  "key21": "5qaPECG6UYnoErUazo1UkPfW7q7kBPYoJAfHCGR1zxfEjy1P2nb5AkJbdWgiRR8jZVKmTiMfjdmxNWTtWzRVfBbe",
  "key22": "3SVv8jshpotqqt2ZBHNfHsp3V4bndJ1QrL7vYNvdRnQJ7pa7Zm2JToYjD6sJAfXHJbPCAbbCS7MewgcmoRT4Tj2M",
  "key23": "4UnUegnRV5qhDmuyoKt32HtEjkscPuX5CaRMXoyWVBdgRgJS7g3bL7EZyXr13XTcaDYfoqrUttJhP8GSH2ZEbH12",
  "key24": "5UWm4divd6DghXFNsEdFfYA8S6xbmuaH2STHLeNATSW3tppr4ymFkudmiEaZaVNHNLTU8CujkFyqubwo69wwuWWB",
  "key25": "5nSc5ranwSbtzi4NU7b9hB8iGEgp3uhhGWtimK3NmMZCWymgaCHfRAQDadcPBrpvatThzw63cL9GuUf6R8RWmDJT",
  "key26": "2StUbmfhdXD6zKbZNzuK2tDiqpetvxeNFPpCqSWQqVvxqZY47Xi1sU5KmXhrNgEFYuM7AxR8ox3T5Cn5tAEifhjx",
  "key27": "3oqaJKZRz9Z3Vxu88RwWr9mkoCkLSodDeFust333gP7RXS2pPYyEXpQxDMmQk6uWjAJxRF9t9cKCVngy794T2Qk",
  "key28": "5cfJgzWxY97WATJ7Y3sZAAGoZqr3gsSR4P3GsvJdNuRU63wuWSWgKBsgDFUujEESGSYYwMDYGLgNMxoLsTArBf3u",
  "key29": "5qqWWUpPFgTRjRsfunKConFBMndJDAfiQnSPSAcC3Fs2Z9WBW3U1RYszRv3nj3qqutRJ87Ltm3bDpnUckb3LVbQB",
  "key30": "3NGYg2Tu5ovEomVUJs4D26SsUwxCMSTQMeNebmuPWdugwbQQytvf569pyJ5WccQrQZLVnPASS6FAQAfBHB5iyDs3",
  "key31": "U9aFprpNxYYXq7vUHUerSUSrjCfSgp3jAALYnDBYwcRhaYw4NXa11chgV1og69RD4u82XcKJaH8twoA9YSdZtqZ",
  "key32": "B3PwuZN6XmHhaMv9jVp1upAevZbqwsdMbQ9nf5HJRzRRxafBSgFxAAd8iBpFsBqebzS5HGzA5ULEk5ntPYQ9eb7",
  "key33": "3CevdyYXnQUfQjsQtQEunaGTodYBFGZGGxUgdNW5gzxCNvHRj8ffrPLEdDHX2H9YgknEqsdVzizjedw12V3YMZ3b",
  "key34": "3qmR3HEGMYsTjSbezmd36WFjqNzHdPV57YZ67dw1t7vPV57LmkSufWkAbqabUFKdW4woYr2uNewwRnedAuJTwhBh",
  "key35": "5FpuSsB1ahnEkr1F8666W3zJdEuPv4Na3fz4We4nU6ZNdCwQHM14Gw6kpi5KXn412d2Cryg9q5D4C1UDYYqRFPKY",
  "key36": "3unmVU1naeaPi6ndaU3DNQRHinKo1YoM5Xre9jArX9HMQzmtLMm3kY54WFzd9kvKGJFD6DTFKDGZE9mvKPMCDgyG",
  "key37": "5fiJ3eSNQVfjwo22bw3eByX5V4WaXUwwqcEt4pGRTen1ogjST5cvTok117WTDcTTbwRqkesCWeuqDTfVPC4hZSp3",
  "key38": "4UXdzuQ4tfENsoWCHPNi6BArVDF4bvo2CD4eoyd43gZq3fRCL4tToVqFBpVzsV5ffHetD54Qd1nw9qDSunEBQbfR",
  "key39": "3JzuSaxz9QCNdyPvstb6uNXp18VvEcP6vEWCo11xEggzwyFdgbeWAB9UVsgp9mguZpHwqHUd8HYr2RH3DLjtgY1d",
  "key40": "3645hmgwiWHotoorJTeuiqJZHG7FCzwahkywpk4V6cJEiURGtJp5xmhdRzyh6fd8LgwL8ATAnWWm94u3DnmthSdy",
  "key41": "3eHy8A4xGhiG3GPy4BBG6wnANRhVvhfK7pUKUT9sccQ7nFY3eW6oPPwdiERpcwUVcSssr3yUxayZ1kzFnqo3hNDa"
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
