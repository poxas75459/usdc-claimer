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
    "5TRV2JPgTCxNtyEz6XexzdRwYUG8d1WizZLrsMAegdmYc3LF4zc8ynuUuPzVnqGqnxfUHRKbNwS9BF91GzEQ7M6r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YJNoZjpcnqZFHaoB2zqXum4dYvajRyTca6nPeu9g8tHecApQzLMLjvbHfXW4RDNqQHsNa71L4uEsoT8j8yrXvK1",
  "key1": "5fCPfF5mohZCt4f5wEvtnr5N7NGsVxYciHaBFP16dWqKUUN5Mhk7BNVkpkmHwG24Aze1wPZQxwgmXntjpUb8y7qi",
  "key2": "UPjfMrexbqXvGqokNp3gJJwmA1vbvMra72yBQyZHyMDUGhpx9PtvCvrQn7THJMjJvcbCA8eEFghE4efeFaxbppw",
  "key3": "3JjukFe9NRMigr5wi51jpChZDa7zQx7C4cQGYKmxSUbFaUMX9mjHts5wDXu6MJYd2T56yDodXBwWdfWBAaGno5wz",
  "key4": "5CgsEkTaiNMJ3DLUZWK4JDAfMVAqob5ZcKbAvJukUpB3VFpgdh9GFaUTn4Cjp7iDbBJk8HBBc9AbtZr8pZepCCJh",
  "key5": "3vcQJqHLERKDduTgypBsbAqkFLTvLNjhn2FxJgMXApiPUCtHwrTf1yUauvj2jqFytdSXCAskLtR4mUptHoH7H9sj",
  "key6": "tdsUcN28jBRTuwnphyjQUFYzCoJuqMrSY1k9Gb7viJ5rjueUgDPMC4YCnvZEEayEoWe8nGkWi5F8EHa1WZX2iHg",
  "key7": "3A9nPwSmLYNSrawRHcRLpb7dcXpTDnDyqiuWXTe3PU8g2obsinCVge1kb1h6NkKinvAHye3tuVS7PfTRY1gjd2ak",
  "key8": "46NFzNqumwgMXMzTQUn8Lw2syeJcRsXR889tZ1Wqi1xKUgCyV41JhzuW23uKmXkD8GW7Ha2dN93LacbK1YsUQigX",
  "key9": "2uN8VB2q9yYhK47uQF8s75Z42j2N864WUXqBRWuRE6yMjNVWvoD8K7Kj468D4z6vCTujEkbLATxtLmnw7pJsjSYJ",
  "key10": "5NkmmYHDDgKANmnTxowA89FoNZd5UwT5NsFn96iQ7Deg1amBPwRgAGJ37GXfpj3vVsqYChZcE3kK7Eje8wvq3mLd",
  "key11": "25wWckXxRp9RHTPFKjvfbmKap99kmH1Y7WrSmzVSgXntQ895k5Kw44vc5ZfTRSV8Qv8hCAJAfkAz8z6fjf5cwTQZ",
  "key12": "3c81uAkKj8j7JaHf1q4qJBf2GQiEvcPSEbzkzXqzRD4K2Z4P14kWm7niMtu1QVQe4zLNysoCWfjmUDkvxGov4Tad",
  "key13": "R23Gh4FisZxqjy1UHpmdo1EUQmdiEcSr21eCXmByPD2zyvf5M3wurp8FfJ1AbyNpPhR1TUvnC4kSCUXM4WRLE4F",
  "key14": "5LtCZv1zzwWdwTMHL4p6weshY92MbGBQgKRYvR2GV9K3kXs3Fj4U4zC9YEn9QmqKYJ8HqWkd4y9A3cqLg7dNhQEU",
  "key15": "4Rnq9snEVhEciRuJcibhXJXmd9UQz3nxB9YKMew8myZxnFcbXa8dwsbpToYDbc2BNEiSL29bfdbRDNN2Vvy4rpMY",
  "key16": "VyD6BVMEfqM8czfxViGfN7CqZJFi3up9wf2HTHzkfVpSSzYwqfXwZc1mHQ9Ane3cNhUYCVCGpsewU2QjcFYUaxD",
  "key17": "znnDyvmTpCw2bF2kvPxkC6ov5mGTc2RVAPbimBH9XkZY8GmrrJpQVfMrvde8pckA7pAd4AcScS7QoRGs4CzEfwX",
  "key18": "47DWXZ7uDYGdn6gKCZeBW5o3qkdbXUh9GsVtg7n9bsMdYKornWbn7fYTtsnTFvPFP69GKVZmWdje35f8tbyB8ZRX",
  "key19": "2D6AUkBdrxjkN55WLJoTSHLnE6d4wMPaUvrsFGLs6ZCCmJZJ6L4AJWdSdGKqWbtRwLW3H334Bq9rxYp2b9yyyCr4",
  "key20": "4BZ99YhFbz7R3Dx4ESmADThdfxMXjkP2EHdgBGhQ3uj4sPUnWQquGzZt2GhwEfrk5wh1f9KY6ESj5aNR2egoGrVd",
  "key21": "36DS4hUY9jPYGzpZAAF95kLE6nQdkocoYvrk2nBjRwpdK26xRLmuB67zGyM2ATv6bE7ZVkvrucc6EpR9HTueNgQm",
  "key22": "3zFHv5K8jAJUHTJ3tbUvne53DyqCYiCDECTjqNaoV4WcLTpkpGAAueH2CyoVmnKK1phSPq9iLW1eHUpaaxrW1GrF",
  "key23": "4KHHQN747rtWwq54JXjcPcuyzEHd3z9RM2f4QruWpdWVk9siWoC29nEzcBoz6tfzG63N2Bap3jtzevdsLHVkRXtZ",
  "key24": "3kjjdBYmEfCRNwXJFEFLqwXBevmAq7tYTm2KANPuVLs8SMhUptTJnLvc6vaQsHpLJfC8EqgRQ2ko2hSSTdHVNPEA",
  "key25": "3n6cBVrW2czBh1mSPiL4wnHQK9N2yh4qoNFfeWCYqcNefMJt9ua4u5x645NfhNq5MZfDN8TBii7hFDqNwK9SPbTW",
  "key26": "3z7hFBC3FXCuPjbT3bfzpZJuh4L2g3ifs3qNcYoeYSoxKykgMrTdq1KuYsKTtrGouRd7oS3BBUXs5jq2Jf2THbre",
  "key27": "3yhUWPB38Jzs6KpV3EjA3zaUhUFbF8ZpokkE7jZxqBzbBqvxmn6aFEbmfKrgscP4rN1rVcNWfhUjQVjKGM1AAxNs",
  "key28": "Tnn5Z2bKpFuB9uvtbb2XbJsZFrjHzp3CXyyistFy6DmFk5CJxUvcMRquhBfnHXN9Dbauet2jgWQqhwMvPs1UeAR",
  "key29": "2cvqoa9Q9urGUd2nU9FMt6g6F6nkwubtCL6uxEFKBgmJZYfdSYWDAHBarNYCBzU4fp2RSCS3Rh4owCSGSttnrg9e",
  "key30": "3xLj3fwHkaJqYBREhzD2Fk2rk3rR7waaTPJhNwxyCmDYcputfVr4ZeJ7DBpRWqEU7qMFbS6r59jXB81z6FcXPiZL",
  "key31": "2hU3eX26kuXy62wSQwAhk38PUXTJmYgwvVoPWjsyBiajDmCQWd2i1d6oLYQxjSY5qzfRzVkWugusbwLCRddaqndm",
  "key32": "5FG5Yy9ZXt9AmJWbpc9pH1bNSZ7gafx8TJ1e5MdaYniyNzxSxMTgmgSEZPjA8pQnFANbpBwdcwbeB5Fvbz1s4eR9",
  "key33": "65PtwwUahDnVzMj1c8BoAAD2SCYgWvUbANb9mdBJLnXRVYgnLnvPgndP9PPz19H91UN7zHzDwSTgTXA4fMZBYdtM",
  "key34": "3fcTzH4C6fUAWtYzQWnDWBDYzUrgqKtY5oujmZZ6gHDi1Mr14Gdvmj5GfXy1SYtxh1kuwnbD22BDWpSpWE5kd13S",
  "key35": "2Pj4gTXpcG8zgo3Bexc4SLZVMzfsvdK236DGPqfc8udfo765h7TvELD4oa39H83A2RiQ7N3uXz6DyqPTA2eyPcVc",
  "key36": "5NLeTwZaMMGkLw6Cnp4mWfLcRxGxptGX8UhzAbiBsg1exEmVetgBaCo9n6CTYzNEoMHEaeVqZSeQQwPZigjH8A69",
  "key37": "3pyurhJJshTNVsYLtSh9WChrzr3SsR9s1MHxtBFKiLqiapaXPNEcSf6xFZ7cPJKgDujfsnhfFnNCA8yqvCh689PF",
  "key38": "51353Hrs8NsM7FT7WAiUmrNYV4rYT3vmzxLQDZVsSmb5pRib3CTqsgyoRQTXfe2iSyncdwv1xXuqSH9KKuQzt8AU",
  "key39": "FTCMRrsfDEp47YaPu55JbbdoYQqymfP5n33orzdn5DoES3gi2LFvxuYtfaiuHPRoqB6VmpK3vJsYiwyo7RSbHdM",
  "key40": "hpbX6BobwRSgWAfzYiAfmvYteVvSMXiSj4KHmVgnnbyLFRaFGJ8JajSSXHcWRBU5nwdVrmV5RvuQYjsamcXHq4W",
  "key41": "5vS8KKC35WwYg1VLqVfvgWHSPX1enrXZ5cYBFav1vMMiTnNnyxrMPzL1a1na5xwsNxNmoHYgT96pDpMMyhH7PXsJ",
  "key42": "4Jjzw7wFbELzyW1M4aUf8zwASHU2qm5cUWBzo4vzgUzEDAGPUEQnoZY9kJ7prspnGY1HExP1rGpLQQa1vocHhuZ1",
  "key43": "34pzAPMphcw24Mt4UV1ejowhfh4jXJ8jkjjyy47sYu2wA2B4sN3VgaUFYK63deKnzkJpjMYFCCzLYfPUMS6fCkZ6",
  "key44": "5hEF5D8wLttdH5orTV6u4jPDevAJoDcmYPrjKymxxUrV74DUQcMuhEayT9gY2RmL2PaeBRyLYJQ3mtTKAPzSPQKV",
  "key45": "zfrHbRehHpDfDGauFT92gYn1p7LL5vNU6ATMtmGM3Nij7A2dGfsQymyjTePxvjn238njP977vXXVfiyLEbFLw42",
  "key46": "4sTzgxdc9SFZGLUmipTxjhb4YSXfcK1NXgbbUc9D1cxSFr3qxRtAuuX6fhcTsrqsLTfF7EtxF1JXbDTWnVi7MZy5"
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
