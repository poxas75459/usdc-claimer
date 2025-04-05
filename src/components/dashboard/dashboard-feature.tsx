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
    "MfQsHRMXbmfE6Rf32cSoUYw9XvXsQwaxPeZr988Ymy1VJMBwkxc5S1E1zrSeMSrSq8bVvsC8XxF3CDS1dZiRcWv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HkVgoteMD3Pe3CW5cDYa4Hewz4C4RWAzBpJ3GSGLLNX2RaJtBVg21itnc3GLZjS2yPoFbgfxUBezw5WaT9rH1sp",
  "key1": "fMoxZUusKxZnyTiKJ38H96UYbknd6gEgqzD8ekodFYYRgmxHTdiZp2mGjv6rV6asdMMqKRYa2NKBu7Q9DWtytrm",
  "key2": "3CKJ2JfewxLu1e7QQzTZ7hY4kbMmiGhRqRsytyRYDKpm6FY24gZppLsGf7ucYyZvot8zxqP2JDUJekNdjRRZQUQp",
  "key3": "67PhR576yqoCWqaiZKuWo66EJvLaawF3YPvFRXRXjeapctQ2K77XNC1nE3L1xvKjH3yYwXA6QPRhFncGjHx4qG4Z",
  "key4": "3ndyyVz2zaHjyK9oD3PNLanuB2zaceVGEqwtFLRb9AuzTqZ1u2wAmi5y4AtMS5S26qRiPLA2NfqTZBX6VGEHX4z6",
  "key5": "57mMQM5NdBY5LWF7xDf8LguAD9x9WdzojFvjMLNfii2vbC3RWbnXGJiebzFJKXRneesZC9kLtgM9xUcBEEWpohFm",
  "key6": "59PwJmPcYAEtYvv1fQYTsCdpr2DhFvuB2owgt2LWXXSyYgUsfdxfSycDBiW5hoqmf5rQmtTHxDCRaUPrRP7XhYqq",
  "key7": "5mACs34zVvZJkvaJ3Hh3VEKSEiUs8YYgXwFSUJ9usUEuPp6pwc6Wr6cTAwMonDknwZKRxC8A4wm6AfdWpiJRTEJt",
  "key8": "3Z495EzHkiEAdoeddJLh3hUSMbwoXgyrNVzoJkqxai6LiqARYgVykuViQ8ozJouBHP9wMxEgAq2UCQLBEDhhvTF9",
  "key9": "4kuXpZ2S1ThM8wf4n3Er5xVrN3h2mwcAqPrPFsrXfPjhmmssTweT5BcRjzSgRpNPLVuZVLAJmqe9qzfNfFVhemmq",
  "key10": "4jqhciShGTw5jW4NwiB4SJXNvopm5vt8qtuXbLejw25eeQgghUCDu1bnbDMvBNaZkRsSaW5Fqi2w4DocsSH3Ug6F",
  "key11": "3DHFiNcXTt8sAWDykhGE7eYMzECDfwnrkCi7wi4cZh3XaYnGjrL4TvrbKqWfK4psASXjpayfBZPGtJsf5Gadcr46",
  "key12": "2gvdYyags2Hc8GwV3BnNwMt8pCTSGKvcgdm1XrZ1fVbjyHQ9XuF8fnXcVwbopEp2uSyfEzjXMv1xSyYHwKWSnqwQ",
  "key13": "5Bb3TfeNfyyCD6v7JduHzyZAwkKyhAvGyBMgF6rXSc1LW9YNMWgrZFD8jkYxGvkrTqbqur9RQ8zNYg5iEXFhHCuR",
  "key14": "4BpKdg8DYW8JFwzY2ieMM6BgBFLaS8JJHoe4TFbu9CZ6Bv8cuc9t9FsdW3htQDtCoiABVQS5nwnHVxdBDcW33GSV",
  "key15": "5A36eUS2PMTAnWQo81ir63Sgb8y4U9VUmMM8yrenKdeshKSaiv74CqhXs6axcnp3Z5Dm1J5BDsRD3R5KSEkvggDr",
  "key16": "27y9xV1zCXRGm93g8yvZ5EJByegP43jPrwju2dwiAEEXXm7c6e8sENTEoY1ChcDknhTAseatd7AUQ2x4GsMbniKt",
  "key17": "424d5nNKxXcmK6waSuUgRsFosEQRxK6NCghQRjNJvzgLzKsp3BY8WNDijFygrBVUpKzAmKjJwppxaxTNx3vhzDNC",
  "key18": "5dw3cnpSg2CzgMmYoRFqk9ZoyNG1p4U3xo2rPVUcrLdgGPDipEbTD1qYwPR2GvSmpHcxLUzkrM2NE8r41tNeMK5x",
  "key19": "5HJFkF4QoGQ3JLHSchi3pNL8dt8XmsRvZxdo7WnwX7bXWQLXV3E6ysYA5PPcKMWArmZQMTr7rWBom2Np9wPrhff3",
  "key20": "3rTtkjMQWFUNYzEmgG2pXjaNWBDG4m1r1VdNs9VxjWLwWptsLL4vdTiQeFbmHQJSVqMCwLwdbhL2DCTaMAQLvAX4",
  "key21": "2ractfLYEY13HVUT9QqjLKs2G49tuymLe5x49R5k4SgiEe7cnRzNzvxU8j2fhSyYux9uN3C2C3aJAxWvFmkV25Y",
  "key22": "3NkHh8kvLGXpaVRiuxMnvKUJ1C3YAwb9E1sCVB7WSrw7tar4zHvg3Hk846YwdS8MUHBnyYdN6KUbPq9SN6J7ab5n",
  "key23": "5LVfbhufVDR6bdkdKhodp9wsuUFQtAgQJhkZwiJSrUXjoDc15su9oFmz1tGGbJ2DJ7EiTezEKuTvV9ZbEAWMdYsZ",
  "key24": "5Eyg66uiCuQfnt4T2gb2LrPuRGBP6Q6fqG3oZRejgNziVeRYmZU1iHqU7ede6LbghhizR2FibK3jSHf5htGfpE8B",
  "key25": "4UdrQZmjDewcLvvND5SVynaLLpjakztLH3pAmX3RPqGVmoc1HjJL3VP7Yc8AgW9NvQ7Bnu21oyH8XKUS6piLoFtM",
  "key26": "3z1xsre4ZtWFS3GdwioEbQBfYKs1Fp6CmqCWYLeu8uQ3nwMUyZS6dnF1XXB5TbGnA6rHfyZdRwhM4NsHurmJJDF2",
  "key27": "hEVg3SnLzrengFFYAWHCmaHS9rXWZSPcgK1GRLMzUu9AkyFcbgM3HSoakB8kxambThteuhREeJF8yucqMHdfQkT",
  "key28": "4Vt8WooCVsD8RbtUMLiqoCnH3vd7cXbwpoCSGowdbmNCq7g3kK4fA6NWpskdqcYLNBXWZfo67Az1kfHkZJKveMra",
  "key29": "29x3JzxJpjBCUWLfY2u4sNi1pPwUdfZ9kXDQLRTL5ZW5iwAQpvFJDS7ZVkMdN7wqeTg15YzE1BFRtwWf4gsynoxy",
  "key30": "iBB9L4EeqDEENe4ij93yQaQf7G621tcBzdpKYGnA67TTLnudyE46v42AfYKNCxqHZikageTopLoyMYkFokgmUcv",
  "key31": "4LKE29K1DnckdVCLhqkzP7YgZFjkn1inQVbhMMWM3o5JDmPgoMwormC9QKJQ7wQ8EYXDDqdFRdZSZ3bYcj8yLEir",
  "key32": "26zVQd9oreVH8Z58w6ZcNdsWksW5Qy2rsN26iKbuxBXqJQZZBVHs7NhV8oMkzMCHnUwBTAcreUpC1wkqJ17xMFUs",
  "key33": "2g94rhTQdYYtb6b3imVpzPbnRGk96o3JAm2Qs8rbAEq8Q8obYhoxR8RSrLR27YqQzYJU58doU17XNNHYmZmkRHkb",
  "key34": "utDZGsSUs1gH6QEyeoLwmXHJFJePwQsxqcuNpuw6Mi4rEhFt5fSxvmNqTugqfqRfdswShfp21z7eNP2B4DfZqhF",
  "key35": "5aB4m8e31DYw8nTHL5FAWGAiGG9BbAUxDW9d9mG3AGUntiiuTYfSatP2ij3dLgzXNkGm8EAg4iYmANo4xyAUvDTE",
  "key36": "2RwEa1ToCboELeZLQqgq31NpqQZRDpumVkMHxw7xCbpfjxYameso4p1y5xgh9GjXt2NCKPheSqXxozTtFJprPYQ2",
  "key37": "2SYzghmkaYxMFJg9PoqUNWTzz73DqKuD1eEePQC2LZdkKtRXSK92RnA9BgmC6c5uAk9QZhapSuie6FqBr6UYhH9E",
  "key38": "5iYpnYTKsYaNzefWBhpoYqusa7hBUvHphCXb5n356o7jTMxbBfiqaHFE9m6zjwqQ7SxPd3sb6eg8jGFMXnTbuYyk",
  "key39": "4h5SY9Z65JXmdtsNmJYopyE3omiEqn7E15tBiUTzboTWCbct5yC5kimFicqCYXKQnsCmyHGZ5kgbkktkfKyMABLM",
  "key40": "5SoexhCdpoAmXCggSt4ijG3arD8s7Kk6WDK8GhCxFk6W9xqfe56Z3tpzjpcqUacHDRa9mGLexgDTB7PdJBTX5Rg5",
  "key41": "LmPUEyJfFQ5A8QrB27LpYn6HpaLNfAVsCxMfNfNqFgTYUM9XGAK8riAatLgBWhTZaFMKZM8N9JSJWpQknz9NFwE"
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
