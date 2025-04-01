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
    "2k9QB4ddJ24xHdGNQEyrsgV3WsPWnBSQkErFaeipn7FwQ1jVP8mGbXrnwgManN22GiDKeeePbmiejUXAZoCcCToW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2euJEY36FYphQuFD2bnEU4cGAmt8vrNLeFWM6UYcxULuwRUWQdjaDbKNpLYgFiRp7URVdwyh56okvJXeyvknUQZM",
  "key1": "34g4jSNPGkpFbQDKDsp8knAztMpg7CBrzDR4Jpqu4zxgWTANH7HaQAVfV3BoHCrzzBMSspEEEn7iCtS8a21AjS4Z",
  "key2": "5KWiP3xiFEgAXiD42hxPxuhUHFLZJNB9kjiQ7KF1Bp5RJQCFiEukdkS6VYbiaa1MpfvdRD5rkjHAo7Ho7T78Xdwo",
  "key3": "64Aud8k5K3E1RZuKSwwocgEQC96fbrUbhF81FttJAFUtorPcN4YTFw7GdKCEp1mC4MeveUfY9zyEi3UYh2EnEb8B",
  "key4": "2vzsTN1NmASmF53e3YwFk67SopNuxx29jek5Ypi37ryEofAExxQRm7f8SduJjzCmPWHUaMZSXRSVqiHgVsjpyktf",
  "key5": "4dK2QrK9gYD3PQH4TGPNBMEtfNw6K3vSG4oy5zX5UucTtp4LFAPxtn5GdNca6XHz16txukvmxJU11wy4WrKwRx4Z",
  "key6": "2UdZF9vszjB8uSqgcbMF1iTPg3fDm8bJsNTgbD2shU3WMRbieR7ZWHrFqiEs1twqmcAYmhBpDmBQn8J6LfyYwFBF",
  "key7": "4xdURnMK4Wt44jcryCDmCWqotRDw4deapH8aEHbuuAR34jyokg92aUaeC2ayjDxUDQCurtJtCEPFhsRoZ1mY7bfn",
  "key8": "fcExAEad6eHCX4Cw7idXsZA81PDt5XrJLDxbpyW2LpQ5VouuA56fRgUA5u57toj3RBZR6VTr95e3CTpMP4Y8nw4",
  "key9": "3zQrVKeD2V4WHC4SyQxvWz7HHk4LjTw6TnE9BQSoM345UaQgUuEpi5c6uCgUQZRa6mvYvhScQAsHcCmmgHDu3QBJ",
  "key10": "3ZczEY12A6hGAk6MEiYBNAiSWGmEssTmDDmZr61z4Hd7Bjz1cf5rjnLVUteo1RqY1K1w1GC5cZxa836CA6v7w9uJ",
  "key11": "YPzuDuh6rsfg4eoDtXXCicMkg9Dj3LKMF5GVzGa9GRiywHEosUBzNvY7sHicdSykSuTQG68EF4V8owwAxc76bLA",
  "key12": "5ZdSGx3KsTRSXLrYAQGGc5PfAZVVtR79xzKbat6esJr1yNhh8dY91QxvB5pDMU2A4guMdt6LaaNNqwdSnXpGZiNu",
  "key13": "56jPCs5oY6ceMSYCjpzDtcHUAK94vZut6VwjRzkaWe9EG6Gehiapra2mWNWfYJvr9Zjig3Yzk4PY6ZybTwabeKdq",
  "key14": "3i7HTQjS59YUKnbQhXitjL1tiYBWfDFBsv4MmjKjGabP9T4NXYLFqsFhc3c7gQ5oe62T55tCku8UEmkyYSAwqd2S",
  "key15": "kT1hU2fXHYbVJGNdfEsNsPMNvzgviXvDfGaEj1YUnsZpeKsBCqPPvwgrSTpFztjaPBwksjX7DoJ4Zm5B8E82p5d",
  "key16": "5WswqrK61k65LKrJuHH8B8Aa8PfCR3HFrMXPBEJreyNEZt9hSohPWsT9KJ8vwDFatBv9tUo62U4XzFPn4Zo3h8M4",
  "key17": "4Yw4LCV8ZiDz68NyQSQqLtr38c3Ps3GR45VtnRHgDoKLGJMdg66zqx8SksXYDFTYR9RvvrkXagq5f5dsFupvxXpA",
  "key18": "5rNFMpyj3QM6kZDFboRDkM3p19WBwprFfTE9H6nEFPY5Z4a57TLnHhhFstRBBuM8wbiNizZ2bQLET4Hd2qCiyNku",
  "key19": "2ArLoN9i7kLqyNCC8cZtLDkFVHKfm18iVTrxPcBxGfEbSooJ8uorzVVcdNNqZ8pHRbR9GPvJwQSxvNEKfERUWc9R",
  "key20": "2fPco1cnNz6sCA3GWhpE1Qv1NDA28AZaeKc2fdFEJqYmbPxA1465hFxiYJmmJ3TTCi3LvhmbjpweN7jWJa8bapXM",
  "key21": "4BeGALqR3TLPJiTo5DpjA5We39Kji4yUzP3hydDeUXkrde7TFRwAStEFkzjybnQHgo1NuSu4defCZL3Pn6yvAPGZ",
  "key22": "pYhrDDbuQytMtdJfebu43NxkuBjargiDUzJE13VLHVL43yLhC8kCcDXcdLFe7E5dUe1MgT6URkRKpr4rtkL7PuH",
  "key23": "5tLbWyUWwUFYJSdZm2DJgAXa1uUuernZiBR5gAcijYM2tTYKBwHk3r1RNVED44Ae7rjzbT7uzV5FtfGGqbHdNZrZ",
  "key24": "3tPm2LHBJFKSTQoovpPQL4Lq6EMsaW2WacjrkqaRRS3aMqxCeZfmYCDJnytRwV32zF5Ufq9vkbVHF8P146MZNtns",
  "key25": "2ktHhArPBQoMK7bDHoxa79j8utyCXrW5N9Y56J2mCqrfKu8FcGjqzzNYiPnjP3wgQT4sekbFDBjSJKr96UWCvhrT",
  "key26": "46bf6Y48owX2Jm4bmkFVmgrvhrkwk5kGjStD2k7C9HVM6jHZX9yaNeaPAuykHK4AHf4rcf5RJg7wiyAV8VSXE5Ez",
  "key27": "3VdnWFFLq3PaDf95M1uKXWJS3wTG8wm9QqWfcjivQnwd72DJudnfwgahZjA3xPavNKBCiUDhvNs32qopTSuedr2m",
  "key28": "22rHzzsJxJUbyBEZJHiUNmwy1T1Fiph8ZYZpnwxJwkbHeCuTaAgrzHiJhEGn1Sb4MtqrvdWAe5giun17YJ63SdfR",
  "key29": "2NfSLrGXVEB2sreF9cnxuNj4wctcws3r5uist6bvySoXeQTWS9jTgzfc4tN28mvb4sep5sxZKDQFTXBqmDLRYmvB",
  "key30": "39qr3nvbuHmMgu1Cj3k9T4zdWYfPFNy5geD4u5xmsSeS8G2WVswdBE5VAh3NigiKmTAAJbsb6HjxA6ZhszXg8vtE",
  "key31": "2x4Tw1Sr2p5eBmTgUAHR4iTh5Y9CDWhEi3sF1nQUckQwrLajKSZRGwJxqk8gYV97nnaQv5mPAhrnzqjRXb5ZQ98",
  "key32": "5jEm9cmLMvJBpBPJzMASq8ovB9fHUcvSTUeK3dyJe6XyguXwGXaGJDQvwwftY3WG8VV3BhXrWXqh1LKGEokjno57",
  "key33": "3Ch5HQ86pgcU1spfJ3CCeV3ed97aAS312PSK9CymxCed2Kj3WDK1oELdKyA8o3beH96BnVsW147AnFTx2FzNESsY",
  "key34": "2aPmwCzQH1Q62aDWrmychHeNZpvP4mjzakBv5Gp3qKpbVUUSRM1Fn7JAbX4pYfUBwVnH1J5qao7ZxaSeQ1azzyDo",
  "key35": "NNChBJUZRhAmBgWEyP672kNqWuyko4YTaebsHhKLHWDmNfyxzezfrQEkz5rviEZFBKeBEZwwnh1eRVFjMJU2dtj",
  "key36": "3GcX4WfGyfQrkARpDzhvCETqiB6ZjWTV67AEkiZdP8zx6prfGRf5CCLrg4kRhzy2mquoyKG24K8i5mrzmQfNvCA2",
  "key37": "4QwZTcXmxXdwC5pAxUBjp2ncs5trGmUj7JifFHBpDRoBf2aMPJVyU32mbNc6wGKFsEubX6P1uffZYBWhvPjc1sB9"
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
