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
    "3NDgGfVEJognM7qv4FjEkQ98jRwuaNy8PAMxZVhFfMS3qba1AJoqD4bAEGA2aCGpEANsKthR8GFPTyjiRMiExXcU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RYCuyCvp4krmZcoL5ahKZRiVc3ZsQb5SFHxBpqx3TzTnz1tQi3UmU35XJ1MFaH3NmjGofPSpUiuWYGFw7XKXhUk",
  "key1": "4V1AxppZdD6RW3TBWehQeNvwkHasWrnewcg2MuLWf3xoejjp9L1m4PTamEhk4GVTzdbqf9wKn7pZRVYY1W36NTxX",
  "key2": "6gcNqeBeWmZ7yamVuhnfnmWCaFkAvRAPUgKwLELBQrugMb9HuZ5k8BPS6bq1MxMgUTovkoDDhL2JbA4WKU3RxSw",
  "key3": "yH7v4U1d5LdPoMz5LXJJjJYxVoQ6UoRhJei7rrWcWnu6nC3R4FBvQAoRUPx9LcF5KQ1mQvRkZkqWm6ZXmLPmygx",
  "key4": "38oSCJegtk55iMSemY8Si2iW5i9x1LihyiB111XaTrKpvcxzHdp78CbWPyDt9PBzUBbEGUp2KFgaBspU7kDwtqYh",
  "key5": "xNEPHrQfvpxzEFXuxriazy5SBt4q8U9bDAw2n8wQ86Q4MP8UD5c4WftBQk6XFCjapHjbkaQxn68pNbakChuhbZD",
  "key6": "zem9h2LakEyJnKzFBFBH3qurxWdgEVhmnzFBs5ERbxUxMFqvdUkHe8qMDZXpSCW35TnGP3mkm5FzVWU2qA1UCTo",
  "key7": "3GLB3FZfrbSikSnWGHuoxajjL5ueAGNmhTRER3iMAMEH5RGKabFsmFtWa2KieZJA4HzzSNchEM8gZtFsbnp8wJsr",
  "key8": "4tnMU6aAet15QsuAsDMZw2y6yyzXbkh8sHnEkff99ThFLuKPPYScv1qWgTi9aX6e8ihVy7MNEYjSzCFKqVBhMEMS",
  "key9": "4sMCRNJrqtN3WocaAmm2osZFJZYu19V4RFsSFSMA2BdTPMT2H57LF5Upo4YzdxuougJDpBc55VVMVtmWEoGJ4zh1",
  "key10": "aFMKEF3MLq7swrRz4Btrx3wUry8HNZbj7fpTudWY9bM8iiqEAcs8SrVeQ4XYMXsykTTCp2BiQcyP5C35wJDgTRY",
  "key11": "2gPBQA2Rv61p5dwUBgCZCwXqPQRRMvSdTCyMiryoiCw7VztC8hhT18eqcmrzC3zsBc33dsuHw4xZoc9uTsWtaSWh",
  "key12": "3Rj8XNUaxhRJZH65N5aEas12Hujbzm7eXoidWg8x2ckaQu7NJF4dzvCL9F2zJyqAKZV1Yh4EFacYv45bhFBBtZZA",
  "key13": "3YtP9PV2UxBBia2MNtYZABv4UZ5JW4EkDx26FJP4pCK9Mgpr1Hv8sed8bp4DgU4qkg9MzYSfXDUJumhMffBFGLDT",
  "key14": "5RJ3SD2oCJEsHNi4MX5RnrXtgMyp1L25soMghuYGLLfErAtnQpKreJLJy2F9YfiktYZYgGHUCav1Q4k1vsFE5KCt",
  "key15": "2uXjLEdx7AtJYqav8ucXLKeZZsLkt1VrYYhWmGUr9t6SoQEPtsQW5rbrpsk2dFHTETQdu66BM2kfavcVoACTXPVM",
  "key16": "UyrpWRwUe26FJU8yCaKXaRvUsHntvC3KzdWvP2MfHxBNdQjqmQzwxRtDEUWL8kYF15to2AaESkrEYqyspzMPyUD",
  "key17": "TRssRTmv74UHFv7bFZfyaovzNGMFqutaqrr4NEsC48KyJLCAEXCEC7NMUfcGxtRUbq1pyTUpYE4TsrV6JzAqgEr",
  "key18": "66EiT5SHkfW9RLvUry6htaGriTe9seD1QhDhs1MdjawUz15j333i6JRVQDP2BZBVL8qfjRMBPfqAG135fQL6digC",
  "key19": "XVuppnEMatkpmQx9qHskaN7JitWTR7j86irBV6UnCSGgS9c461t8uz6kBiWWvwvKeatebVYBQA6DcwRSvUatQQ4",
  "key20": "54LNUx2MZahZRTE4Nr5u9a7fsCHGMUFtyzutYvJaxkctU8sLLWneHehrR3p5XuHkrw7MHDVgkeFq349ddPmNjRUm",
  "key21": "5iYnfDhxRKN4LRZQQNJyQ6yEMUc2wS82t35RSTQHKQe27xVaQ37aQUQ9ddNzdWNttYvpGzTyDEBKoyABwvyZFyUc",
  "key22": "5zf523moxdwWZNWLGpscZ9suh1w2iStiGgBr2p9MQPyQD1yvWVirffo7TfGMeFZQW8kyww96VKrLZtuTgEtinCUS",
  "key23": "2Cji3tcQsaWhbqGrMhMC1mFgwXCLT2fKZNBZXjGZMgbmLShu2sSyra133GDi3qeg3MivWmG3nEL5jNJFXGoB6Z3V",
  "key24": "2sF9TGpwDoMM2ABoGAmKh3Bwi7fdCMgupTkY6X8DbgoKTRb2RWWiadwcTcxCSf42P42uPJNU7zqZBnVH9cpRh8BU",
  "key25": "2BA5r2GDkRsB8Sv95zMuwxa8KHoRLD3qSm4DRXEz5EFZj7t1pufggN1MRHBnjXeu44dhwzUKQnKFx6fnLPiTdAZq",
  "key26": "pgm7RHeS3jKFSxkqUF13jNRxY76AW8nAqXsoQYeooDnCwamiojE41qonivSPrgBC6BpuwrBqvphUeEqEHRZh5a6",
  "key27": "5qJnwM8aJtGRBc3Zc28tPxChnaZGDcbbRy1a1U9RjQ3N2YkykLRkFhX6iQF2NdEYiNM5eiu15D3bHF9kjwVx6eAF",
  "key28": "59HJq4E7n8dWfs8VKdoUqBvvjPQ8f58Z9ALAEuJuRWjgxg8xxexaxB9nCZRe1mewMDyHwFWFaru9wyzbbcTP6MmN",
  "key29": "afr8LpxDrJXEX315h5DHaDzcjNHc2q4Hz4WiDRFpsCrrRQsYuvExPTBDsH5qatobL3aXRyogHnZUtt3y67w2yYn",
  "key30": "4FjqmrjtVk3wBpZarJUGhPo1YHKTCELoQK4AGboXpCWgNRK1yV9aD1zVTbwE444ovECcyT32SX3nBjSXVkecAUEN",
  "key31": "d6FBDHftmMPy8AfWVFpod8yD9XfkCsh8orQoWgVxt3dU9i8goNdNrZ1Yx8iVoXaYe3m7mfKYz9VWJiQdNpioxBM",
  "key32": "3zvU6MRup2nuTcMiB8rH8QDRGDGiSQxKfM9B6nHu1NCJk6rQqe8GG3W78Ve4mHnWYDWrJBfn6cnhbRMcx4yZA9ue",
  "key33": "4dZBCbFKFrazKupJV71BoFPjQMsrXT6dHa4nR8hA5KGeudQjSeKWEwphtQe2E39RznnLSVe3SxRQcFtv87qoUJSm",
  "key34": "55UkVJuYXN9Btm3cXSGeQtGzvErzSmj3oA3Vh3wn3MWdfmDvRP3Duh2XpE8rJezpejjBQCqNotFG4QnESJhhpuE5",
  "key35": "3UgikSUmm8LiGC9HsTcMd4kj4JitpafhmLtDCKsT2RVdPQ7msm5vJJaiB4dU6CBk2n67ibmJU2MhUvZd1cCzPAR8",
  "key36": "3vGAa3i8cPf9q5N6y3kxYkfduo9agaTNwLKcNVJZdqRAunPufUxkpMP23nhDuc5C1FPiG8ftRtACe4jV6EXaoJQY",
  "key37": "42h5DtYZ6YUUUArzAML5RCXGWBXiXHgJ8sdRXyPNNKm4YFYsePQ9YbPCUFFcyQP2fJrv8jwGNrjuCJaujLMKsGnf",
  "key38": "4AvReDEb8Pxie7uYdv61p44bNvrk5AxacjzU5Zcmmggughh6yANXQKUP4dSjZ6TY1ao1Gv6qe51YfJ6PdPBkJW2L",
  "key39": "4oBmHVGJQc2tsGKjH799zffm8phEZP3SHjJYqRC7FyasyZbNgibdPoP3jW3GahaimqitkrGoYV1NuwL8E3vymx6o",
  "key40": "43Rdaw1BUW2uukX2E2JaLBA8faZnHD8CR3qWRRdM3nzFLzQ399CAux7MxwxLV9MzgRyNdjMtMSBHT7ugVWgtL98F",
  "key41": "5Tmftxq5JuWqt7cTn3TsRQMqxs9QDLh9JRFiAU3iV67Cz4G24yGeGZ7fhoZdfhBpkwnciNvDgStmRxYu4kwBVyLh",
  "key42": "3ueoks8PFnD23ZL7B8CR1XGmKu3s2Wy8u7XWbUEgXK3iKJFWCun1SL9DovoJx9uk7THrZvAGvgvbEWnPocKVhLUM"
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
