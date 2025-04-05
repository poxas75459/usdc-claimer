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
    "2QUFgzQUSUq4f1ZkYNVjbX9ja6CdEbehDrmfYrMw438R5LkbGU41YQ8fkd1KxQ85mZNh64SPcbdbc67tM85P6dLd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rF69xZPpMr5fuKTxpg5Tvr8H7Dvdf2NFCpWVtfwYEFQapWLaVa1d9E3w7eU2gsmVLBv66CX4Cxmt8aE5FTBTGVc",
  "key1": "3yjpfqsA3aFsCimBttQ9wZ5tJ4CSkDNGviTgYLftGsHRYjghzECNbuP1kB2a8GFFc15brkcJdSXEUxUZ1mMhQQi1",
  "key2": "2yAiXAB8Upu4KePG79XkR1Gd2qeQbMqbhcmEJBFAmZKHKwFcjQiMi9MQCiXU2XnLuG4iW8GUkSXMMwoNSPW9VahV",
  "key3": "2aFiLfbg3sGVzqGRvjtiUDU1aMMthEoS5n3zixs7CN4T4RyMjP7SDexq2UqoDcebfkfVkFkHWM6V7bs6WvWkzBSs",
  "key4": "BgMQfgQ9hoRqg29i8jSCmYQ63cJ5kyZu7ZX7XKXqQ2cZjnY7s8TzRvvX27FjA1NUshyvHqjuYrHQg81C9NP3wTp",
  "key5": "51jFQnFhZjuPDu6xRAFCkMxPUF7dFLHbaxRQGR26JevAbRKr8aX6ZRtD8e6x7bDh3qVypFzkhmmMwBQDD7f81je9",
  "key6": "4ng3e2PAujDk34Kr76ktE5D27JrfYXyByLeJG5bHWB3tFqHCkmGfajsHa7dAUiWzNFjSLhxxWxcRk2Xdmp9dY2v4",
  "key7": "2GTDWrxrv2uf566Y3TdRAoHGTjdGgdwKKh9dG3QM4kYwAcZpaHMznjEe7d5MgRu4C7WhJxAD9KqMR5Co2ZZyRhYr",
  "key8": "2FXTppQAn1PppNLeKiF9KAPmX4mM3WQzuZrUF31vqrELq7MWZoaw9kd9RLXodVutFogYsGTnBkMaA1HDDjZjRZvM",
  "key9": "3EaKGRRg1oggW3LrWPaEd6zFZQrBAnDoRqpoEjurSLWpt5DeXedRbkSkp3SoXvb3NuMnD1Q8Fbg9LwibZyhE9xT9",
  "key10": "4ZCnsNav4SNvFoDSJY8pYew1BKvoGKgjZAFPzBjwJQPVzhVKrKnbRnMcnyhj7Sxma9dRux2JDa51GrP9GZXwVBKs",
  "key11": "3rNoA5M9DrC1KFcqDa6jWJSnnnsBLyPue6iApdaqsQTTSs1xPwgM8pQ8wNvhrnEHWcnyDR1DDQ2ZkNctZbuWNY9k",
  "key12": "4Bq8XQDuyYnd8PJNE7tEGEHBJc5bLx9NNZYKPdrrGHp7RctSBiqY9AwPmyZHTMFkcVWcCwNRc9n3YNK7f8hpfjTf",
  "key13": "5EyC8GLmsDqxNT3qyhyUXfqwp11burD4t3BthJzrFCBu9qRGuBN3KL7Kqo6yoexUVZiaMrNgu4fHdX6c2hTHd1yU",
  "key14": "5fDnvXNT1E7jcEndRN1V6hibrLcFrYoVCQbAMFZMaWyWpUaVXpAwdnQK5gk4EBE6F9BkUJVGpu7vTZZU1wi5pgdj",
  "key15": "2BN3xwfv2EZFtAVSGP65S5uX7uMNiHDjYZczhGUYMdd57sv1DwUCgoFS3hBjHRdmQijrNcz4syuuKRLj6gPekouE",
  "key16": "3TrY8UM8CpqrP1SDFjQ76553wt126wD55G8ZDGnfKje9rtZoACE5hPxZuVGU9jHTBP1QyoGgbQVT6vDMCfQxQDKs",
  "key17": "2R48D93rWR7wHTKQ9xSWp5sDphTZFnwGYq9cMfiZonkPj2gPUMgPSmv9mxsW7e6zwKeC9mX5NhKHivWQ43QWbpFf",
  "key18": "4SrjD9rXbe3tzYcMhZqPQdLcWckBawRyEJFThhez1AsxtXtTHce7YdrJ2SZgeSCD7EsFCaeCaYu5nc6NEAwENT48",
  "key19": "5baJ5ofetNEDchGFJVBdRXFaHKAxdU72by8rTDw3pq4Es1FcKNYvYADUS95ZGW9sQXz99EBuWRjsnyW3YA6hViVR",
  "key20": "619nHVRjMp7MCMHi6RdV4du4V9kxc3LbGrPJRG6btDnaMqR21QPK4zuHyiiXbjmCDo7cMBrY1P9fjo1kxPWRx5Fh",
  "key21": "3MbzNNP5CjomWSDvVBTqEDSwHtpEoxkLmr85Dr4Jz38Hh1X4P1YQ5BYjYgg9XmFaxpZWcnsqr5ywK9VfL4UTre9G",
  "key22": "5H9mHoSRXtyZyN2oRsab4BsZ5xP9e9Rkmn4usp9yhbZ1mmG2CURxHv1S7PTyyTzsoAC3NkggPpsP271Au6PRbqNF",
  "key23": "26DTUqtNnBEiZhAdj1fh47zreg5beWVCqUfof8F34eCqVjchJeAiqrXR4fYUaECYdbVsCxC6YgVaRFaFMmf61ohR",
  "key24": "5k2XymbipCqhkRUeM1M2EP9aCmHAHcgnULnfrZw432jYJ7wFLzonp3EHXMYUYLmDCPxiYKRoNfrXw2JkVm5Ty29E",
  "key25": "3stMQ71XUEchd58GV1bPQWFDVGgaRtRdzkSrTNZwr9b4BHqf8yCHgYJ12TFKFr3pqev3BqaYwAYjYEsaZaS98sLh",
  "key26": "CNq7XE9GnX3UxaPYdkYmifd7CtFbTTYHoqSDJEmJd86GKo5oBLKPxSTsGxAkR79JRwKurAdLmZXXSY4EZZMSTLj",
  "key27": "3zGMryyNLs9vyYexyLZhoM9FF6949rVvRXgjfdtxmMV8pTySFe7KSkdXZWK4bZFBGXrG9d67pfbK2ZbYYv4agkrW",
  "key28": "4U6Zh3KWibhwocgufxUaJYfWgJbaKgc7NT7kmX8WW13bDGuu2MSpjxhTZqGBgbmiydisQtP6kbmA7kBPrGGX9JKE",
  "key29": "2wJYWQryiuXgwHimmrpkCYtkXpHiewic32hssNTeZvDV95ZhbZQJWZoBG7BKM9URRMAh53mLNANAY5GyRzJ6VGnR",
  "key30": "2MzeGE7ckrkMB2zt3p92pQhEoZecJxSGP4tib5q1scBMthzDwpgpdnkNdc8FRK75X9GCBALLEW8kRReHq3rt6j8V",
  "key31": "4pAEvyDhmm9MDhU9vaN4V6RLBMz9UpbJzhy93ZTzu5mky7eYsMt5y4KVfwJhBTpkPez1PDSG1sTKrwALTYLU8q96",
  "key32": "2rMH1XyWRSw8UigDL8DbhXBHxVRXdiCk9znna7qCmqg1ksdGckgzHjWqhGEAsD973gTb8kscPq8q9Z3nmRExZQNG",
  "key33": "4qBdcknDfAKAkjcs5JQ1MgArfh4yRgdGja29a1Gbmot1sJhNCroiQ2b7h7mpQa6jdtZUE2hSZWaAnS1bw63mWU3Q"
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
