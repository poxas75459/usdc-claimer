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
    "2kusFq5f9BbXmojPohgbhDf4MQNzbY5QdisYxfzpi9y9nA5hC6L8GnoWW8ZhnV2dzfvQiynp6QwKXgP5NjQbqhYY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KaGNYV9u17E5Gxb3TwRLqkdMUEGiWfaMuY877evFhVXpZP9WhZz8QZJf6imgNjU8UrkcKaxV7xboEP78onTo6kj",
  "key1": "2kgkpgV8RCwdzS26pHt2PaK8pjvZgiszTZfPawuEd6yymxe3QK67vMtABdo1WheoXWUb1VrUfpQKbScuUYwAH8Z2",
  "key2": "2YmwPpsoBMdt4TRNP1pLmBdm5uHwFbeKqu8oHTah39Dvn9GbZQi4vPs3bWKXDViWbRM4KsyY4jcMnHjMsHsL5bNv",
  "key3": "5GjbTMCz9U7XDe8XA4vLAeJV7XZ3yzY2WCiCUppxmKtQmfuVWB1vWH8gJEcxazdJ551ypZn32ucMDy1wseNrL3NG",
  "key4": "5ZabhYSKkNNyATAMcnuPRFnKa3bRrT6RTwPKrwoMYx9oowwqr6KUJbx2ad9pURs1Wu5HDaLTqP8iaFveHXmuc3mf",
  "key5": "4uHSnk7i6yVEA8xBxGYzboA3ZJVAMYPrfcht78asF7tzPJY3pt7MYJHBdfMiFXg11xrau28KT8Nemq5Sef7cjV4w",
  "key6": "38fSPLeupyeddooCy8sSZytLgwVuJUPvP7SBM6KaYRVrK3m5vqhpsnRywQ7WuPUx7UDs98Y7C2z73VfMyqRgB3pH",
  "key7": "5H2NLEns4xZsntA2NyUjDdo5zHEdKWkup12FAWumjwf6gMgBR1vLRGyJb8B69e2TwiahVGHuxLq8ebGoAuaW3j9c",
  "key8": "4YoKMe4LUdnHzX1gJC2sXr8s9vrcgM3rhojmEYTjdgi24GCzYtSU8DvzfCc6dP91KmVcLTEJoZHkudMK9nir3pz7",
  "key9": "5f3bKKhTFmoekQQcHFxeMNSfZsjjSct7ocoQS8nMdhuhkgqwKAu6rhoeEkWJSHjCgChJj8LTmYj8qra4wy7oVXUp",
  "key10": "5sbUy6cMTxcMqpP4yEuNN14cnsUZP6dXtuhXDSgaf6MkUN1H72mRYpzhQJk2c1hEjdrYLZM7xR3Re6o4rWtMy1ur",
  "key11": "2kar7BuUpRzav33ZxEdP3zoKv7Uh8v7kGMMEW7cgH52y3vPAyEaR9LenFt8CruPxHVjJTyKokNDkL9uFKDn5WKyt",
  "key12": "2KtDciGgyrGoixFycmLpexQTwA2QEhDaf7Y2x8fqVi85qA1DGYWqLENWWrvTWgMBEKQqQ76iEc6LhJvtvRD8FjRQ",
  "key13": "2ZGniYFZhJTeRRf6cQhPFoqHGhfuwbWG7sbTj8asSetRUQj6dNZLL1FexVTe4S3j6bDxTzRYuqjnaS29SVyXMs9H",
  "key14": "ggwKLAySYDsKxmyT5NsYYX7W1JuAr38A5L3C9TphBfntSF5gBfDgJvhShLbjJdiGkGWPGCmN5DokLSiXWasYZpR",
  "key15": "3aMKXbsrfBAGFJPpJrED88NdtHb3tRmJWAuves5emnrxU5NAmNNgYyj6wy5XFc5t4ZAza1UgxD8aPwLVQhMeodj2",
  "key16": "2trqxqaWEptm6nXgfdiCWP9BJRKXwxKzqpKbk4wDJZajg5qgj2KJ8wei4LcaH499qh6GFWQbsaZJRDGZHrzW2mcF",
  "key17": "2Wt9SPo1JReGbBoQThUvz9rpPmr2sNa8J9fHa4tSEN1QzcLcmqpEJoVpSBvTaLqCkWR6tSVjmfnvTPRCgBAhirV9",
  "key18": "2fnvWVZfQe1ERBkaHwSnMY9jJCk4ncu4JjP1QezEqNtFMKFSfbmp9YMmpDWf99Ae7XrCt7hDeccoex4m4T1dJpne",
  "key19": "4vykofnp7WLmAtmoxqBixGN3AveJypRRa7JudUP2v6g7WweZcK5Ddu96eoXjyWTduSoRejAvkurktRcj2CkvfESD",
  "key20": "3Bs1hcVjg7hejD8wsASnm5hiLhCNEbsPCjwcoQB5kmJ6UKf35ZTt2rxwchZBLeKfKBoiEryCa9QFSiH9xTxtMyDW",
  "key21": "3cv2LK3wLU8FJCFkGWY7iEwo6sfZjDdnr9ZEfeV4agKky1h5Vyb27htTs1eEB8ScqssQuoozCsSbur3Xme6hwCGX",
  "key22": "4uxZuEBQM9Vk9xtQanRP5Jnto4zeQCuSyHoAbF2JWQGdqAma8p5hWVRFabhni9Xq3uu5thZKnt951xA7Do6gEhhN",
  "key23": "2u3E1pNvJaDtr2pevVuLPTKbz7M6uM8ifdFhiZVzc1EwVdV3B931Bv9Dp1kYzytFYHuDP1PYnZWFq1yMXxfiYpLW",
  "key24": "5Qg1gWkjWeuA8MjzVtQGWZPZFcj2pdVU5z7okW6Fch3VeQQHHgFHsfh2aowkRYAS5rwzBJ8BaZyMjQi6Z7BtsRhK",
  "key25": "283R3qKYB3dLAAGtwW3Eym5xG8nmcEktQu7xKhHf7hiay3tofPuV3LCqVwyMo173NuxNf7rDUuz4XcFhovZzQSaQ",
  "key26": "21xsMuHiiPE1vZsniHvmbRBQzWTZpGkkveZxpJ14WS91ryhXtNH1jA3mkBnC5QALu9ScdNDrtNBG9n76st9Ku95c",
  "key27": "4hBjg2iheUS4GKaENzBHmUqUNmJXrVt2hhWoB8f5ihgiGsVzrJ8kq3VReaZzbcLAZQZNdBQw43sxzrdq9hLhbPJ2",
  "key28": "qdALQxPwS4WoMvaLzjziY4z3KevmhLh87JeuwyJwst6WwDE16SCgSsxjHjVJbKBe8VxvnxM6o7gaZQbahN5iCVM",
  "key29": "4Sa6FVpbWMY6jCgxQrEYNDKAS5kYf1omLEpFFpq2ZMwboTsY2eViXfgXcoV5CaeHLp3zxkJozWnDV3BsdC6YyiJc",
  "key30": "2N4dh3KhxojwLA2ZX3BBmoyYvfJZkUEmxu9yTpsm1jX5erZHYJWnvhHVr1CyEthprkuxWSQsAHAMCh5GnuEc6X91",
  "key31": "bWPCBPVKALxwYRm7xrRfoPdNuY1dLTHpuCwSZ1rVHR5fzbu9qGoyRyzg8AFTvDWPhDDD4cUX94oGeGR45e5wtCU",
  "key32": "44kSqMxjpDn6CJTCKVyHJYxqg1wARM4Wfm7WF38Ab5bQA7cAdQeKUEyD3Byihmoo3iZusGsQvngGzVQhUNYDdMrt",
  "key33": "5ZJF1HnCvFutdXmgt6TeGfiGbyoNwVQABCKxN5Fc6CG524YfnPQbyZT9oNtPFd8kxNRsHvP4ddzimDeUjG2uirKB",
  "key34": "3aBUanH3WBe7dNjXTXqC2bnLcW1zkWG52UyHKbLu6Tegr3bfgpKkVoqXJAwCToP4DeN3S4iQNXMWqiu9CZNbJdU8",
  "key35": "RtbZioc3kqKRLLze1ZAsyqp36fcW8hAJChW9eoC5w3RQJVbiXPxEMa2ENgqE4Jv5fH5k5ur9McugcK2RWA6JWUR",
  "key36": "4ejYMd1KpKu1jKZjFggtDniaJ2kwTGva3xZWbqCnwk7z4sRmj6jXh4hiK1LTn98eh7yWcWQArysw6YPcNudQwvCM",
  "key37": "2qMGuXNK4umSAySqRuVHR2jEujHNceNnXLqqrgMttZPmmTowNUqG9B24Dz5PM9cLBeb3KKe67coW7vaedFHN59Wi",
  "key38": "4gRwGxNe3mwsbNs9re2CCKdfALTa3hoiMqJUmnPceVHyJ3KjaJUvSEFTmWS7iJfxrJmhM4cBzTNAminBCWSoRtfz",
  "key39": "35ryuhvt59TPiwZCoiXJQLPesncz87SdEB1HVAy9J66mxLxBNpf7XzBceWqYevgcZ8RP77TY1bmgoohzyXVH6xgP",
  "key40": "3RwosUougas3Jpi5mUrh1gzsYdfkwLHfzqdU2D33iZJt8vjZH6GB1qH5niU2UMFwbw7gnXhoCRDRY8uBjPpHzcaK",
  "key41": "4gXfoy22tRc7EK7N4x3ERAijd1DwKPu14u38wn5QeMxxVwHX6jH6EzVHCwyfDeXTKQkh53RmeZPH7C7MMKMeoZCy",
  "key42": "2Qrgs1UX3zs4mRWc8HjsbgBBZy8P6tKgowQ27auicyrNcbheMB472Sf2paskQCruXicFPNkXM6j15sdc1X57g3Eb"
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
