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
    "4zFLhAckA63mCzYhMES6NfSgdgeA42KETfqp3wvNchdwkkayszYPm1YxtycBKp14uywbZm7CEp1ky4Ym3GC69zaw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yb1oEEfEJGEfYcKUcgQ8DWJgd6RLnaWBrzc7c4YkRjiwefaFHC3fUoBzUEkddz6ptw5egV7x9cQVT9ZanfLRCQK",
  "key1": "3A2xNqM6mipqbKZwbdD5sCa2gRMJB145FoFCGT8APmsqqEoWkqxfY6cdDFzRk23ZBUtnzzkKEiDRg7GDWixHcWBZ",
  "key2": "5ZX4b7FRj6tDGVvTE4xc6dYyUsWbiAGqj8tQWHSctGi1vYfsitDuFmC94dHe1FwVbdtmTeyhQncXN7CD2QENguYd",
  "key3": "4yUW6Eaxy3XrwdvV1xcWM5YuvHg7uJPz3RnuzxJTanPQMFKYxNHaaw8dutLx9JgKAYSqnoGyQtdXNEdpxS8rK2ik",
  "key4": "4Vu6BA4gKu6XGn5TxY8qh8t69rvgM2umdwrY6Z6sDyyz3FPR23fypQezTPgywyAttYygUL8RHuEKUf79sxFLMrWV",
  "key5": "3dQhwccdZjGeWoZ3MYRbrgSMCviogbcECzRRAT1KGCjQ34kACy84Nqqi9bEANUxPMzRHo23HYPaaWGUv2JuDgHGs",
  "key6": "3GHf8VyWKv6byMJt2PWFGDYxzgqJDkECCsDcUPT4QSyVaMcHGJ33bDNnduS4yFvDbi1sebzyDEvNoUFjSiGwauu4",
  "key7": "5YKDMry7vwENkkN2kER8vyDMB6XzrH4dsSYQq6PxBAK9u7CSpPgaDtLy3XXM28CxegiHjiThiyyHTKsYEgAypmbw",
  "key8": "51VqXhPzoaeSr3ct6EWcNYt9vL5xHvq9H9eY9fzqFjpJ9xSo6npC1LbfFhCpHdgTxpzansMmvFoFLvsw3158Lenb",
  "key9": "46qQPLwcCrcysmvjUdT1JbWLeFTPLLLWip9z83owEdqrBz2tuBJ9PQUgYWtJFD9LDiHXvwNEe8nLGZGfoxBrsRra",
  "key10": "4e6naUC3Sm7VtL6A1kqzHezf41mFpouGujbyLGefubBKuU8hGtybGQrLKJXMjVJfk6HUdC2APhNdXEY2njAv6PJS",
  "key11": "2ypVVHPufihguGDDUqVpqEqYaveQoAGjZfXchwAwKQbENJatKMVdE9yH927g3rfbv5DD7PMHX7W3MJ1PMFqeVRkp",
  "key12": "5j3UqnRu7s1F5dEbkjujeAxJVUqwooxaCnk43tSDrxo1EVxhixnXvL9mx6jXtDHfTyirbX861ooADnjZLqY9FdRH",
  "key13": "7TqxiyC9zup1eLAdrXx4mJTxMWknpQ8KDXz79MwKMpjtpyqCE3SgNjJdRoqRyTYrrs6FTjvyVmRSUvrZa2hawFo",
  "key14": "3DYG6cP7DACXXy1bnw5XbZwEmGDh7ktACUJui2kb6yG5Codn4LKCynJTno7P3VPzN9XrKq6nqCFVF8vvQ9SYaJ4v",
  "key15": "UBM6NyZv8Z4cXsWTeBojhCjaCpiEWYvbHQgdnoiwbJ1XWcwXE8LzULyDTRrf1ajKuY6HARaayMAvq78e5mGii7R",
  "key16": "5v9TpbUW1i8gm7D267T8eVwhEfmgBQees7cYTsF6wP2LYzKbwvfrnsn3eUJ486HmSbfgqfz9xV5D6PeiGXnDeE8Y",
  "key17": "YVDDqnKxE72H8mBuaQFwPqxGtn4h4x8tNYqX6gT2yoKz6ThbyDEq6yaWX3pcxvDiLkaS5nhyhHYqQdNrdn83XSy",
  "key18": "358soeytVghTUHjLiiqabQyrDdsba5DeL1cjVJbrDpyAsjxuw8katstfNsdUixcxLnhZADPVe7PB2gUjGkacdAEw",
  "key19": "gDNQZ6kDMAuzAw1tMGQBcERtZQJeLXnNcgf4wFT3Wkvj72oAmENvqBcxptbrbwSS5DUU8WZRyAyup1F6SaVbQxv",
  "key20": "3odSqz1A1PuAB8TmVLDZorA7NToq8VTpejrCrxAmLXM54tzb2RWvvhcKUV9bmTGfupmDxHxBtA1p4R9LRF9ThpmY",
  "key21": "5L2CrXQiyaVwQaxyYWa3RCjD4bU6ysNqpAD7ydvxdv89DpcJQ8Bf6fjby5jUPPEzp2FVQbs8pnE2tttozT29Ha83",
  "key22": "2iVhgSe994eooopsnqS6YTJdNnaRznk9iQLgFh24j8fjvsKEgDeFMjuk4Z8MZvLkbdrv7UjeBHRqAi9RETEsUKvx",
  "key23": "5CN4spNFcVwNDuvSx8uYEHGnCqNr5YmVRuELDkSWnH7Q31ze9ePmv5jD2Yzi5RCqSit93gRpB54Kb9tKEZDLjUTj",
  "key24": "F5p7Ha2XkaYThiwZgQRh3NYvwt1wR6iFqUKwtpB4v7a8cpB5zxzkG2PB68FjCXj6xMhajx5R7Fv2tEsuqugAiRr",
  "key25": "5eotFuhn2n7MM4e2zBTQ5iUrRE7aTJRGvn1V925fKK69hC3nLMiQDQ1vJ9baimrKe2chjswCL9TyfqdKqsjFrjdF",
  "key26": "5g1yVK9Sj3Vww471HyFGGXtWHdEMfEwyc9CLbaPvHJzvbczgfYJDudqEZ5k9GqqBdP84UF5ZfA1xWjEVpsk2KqnN",
  "key27": "3GVbBwjEeGXE2CX8eLDtioBnBM3Aycg6Ecm7GsUtzdCyKzNsKHPaSrKM8jW6TR1nFsM91Mmu6hWhNFEmCmS3v8ph",
  "key28": "5FknCtmJztjPu3gJks9RWLxRp5Rf4LTTFJC6gQTjx8sLgaiMrh6n9cEj5TLZ6FcE6H8Qq5NUAf8mg8GHZt1Sxsbk",
  "key29": "3DojydF3o5xxG2Y6tRRAcwZkgGdmcVQJCeb7oY1XBFHL7X4C2Z62GaYVQJ1esKqo8BMGSu6XKrTzLVcivLsL4sWW"
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
