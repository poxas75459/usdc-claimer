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
    "3puPqdE5utRZv3Px2aZ66C1Z658TsD87ZGZwf8sm79AJAfqgS1G2LCTdEYqzyZCDZpcF6V8DGDRVunB5ncagXniE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zj2y7JYeAVERHTLzu7QR5jatTYzCxf7geAKdZKsL67Abix42P4hxjV9a64AVoAR6pB7SEeqib9j1F3SwBkS4Fzk",
  "key1": "2Y86SBMWrbQrDnUiJJAaAeWyQZpubnhMCXqNpozqGKJF9dEsBtqn2hqKgJGGMuGwkFnrHaVnTPuuvwgsB4CnQosa",
  "key2": "4KP3BkcKSgLCY2uWnbyEBB4A4NmdtPRKTSBLPg29RS9e3fXqtXAhQTyXsmo9ht6KXLBt1qh8JMBcdWv797DjCJtc",
  "key3": "5re4eUTCt14vSx5YZ5ZzZ9r5PDUnZzxdbSBi6MvrqwqybBAWnfuVCy12bRZ6nWn9ZbNa9TAzMUz943uz3X4i9vV",
  "key4": "4wNrPuJQNYNhfAQmBwoLqBcitqVunw1mfxs2XpNmqfwVFo3eL2SMuMPEvYaEsUb8jUaR5fDqxWQAHNN5FFZNczC6",
  "key5": "o4xEfLB9ceRciqyBUvGCeDvij13Fqx4izEoNhuXiSWepCw3vBXeucowB3xKDGT1ajeCGqrnEGwvS4D7YUBSJpYC",
  "key6": "26zdHVum9CPA22UMKDhRUNrSzfrhkrSCj6wvNrkAkPRTWDMwAoJLWeVfbBBDMSN4ELppP3DHLFep9pGM7YyD9JE8",
  "key7": "5vQB5BMrjUCzoZaCwrkzMTegySszSBUw5W32u7xG3zgZFGYVKc5eAAAsNtXfZHN6venAmJzg9unknTX8rCCa3Nr6",
  "key8": "bGSbAmP4JMbPZKtodsYN4Qa95bQ9kwFJdtGmpsuhGjFVCcuXbSWFvQFHrbkAWmXw8cHVq1to5uWF7BSw1YnKRzs",
  "key9": "5ao6LzBWS8u623xVJWDeoZnMi4ddDW7ATx7xzud867xHHLPmtnAsEpa2qu3HALwEMAm6mgpHFBoLbtNMT3WAGJvf",
  "key10": "5CJsFrR1fVxK8V26ZeQfpKFLcqoj8rXr35Tcrir6Wo8PZudBbnsZF7wktKXbnaAuyexZBL2FQA1CTxFSt5WFxtGy",
  "key11": "4rRFeKx3JDYr4d5CjtirZ9HCiphymhSLFsZDQxyr2yedEiJ9KnMgiMU87BYpCWB2MD3GA2DrXPsVnFyCJZg9hSD3",
  "key12": "2DCgsZgPvDHBv2kE6YjRNNgp7TSEUVo4TMj9WNr3AwNVR8SNWRAKAG7tjj9hrA5XPieiBERQssAdxcXnV8rmSNV8",
  "key13": "dqyGARbCeRGVwZw49LVbguqGpKzMFuNaiRx8oiuJKkvmacyfBbUnqJcZvd8AUjC47daNEtPL7onn7vfsxmnrzvU",
  "key14": "55hAnEUFmp24EeuDTcHZScxQzJoMHZmLrpffhnWFo1hnQo75gmX1eg55T4npo7uSrymLTFZANQM494EGk2vk6YUA",
  "key15": "3wNAfJR7XUbcRnoczGxsaU6u4eFQUsGcd5oXBkp3MPiqx52tLDqVgYvHZwsq7w2WASaUBgttuRHitJN7BrTr2Gdx",
  "key16": "4TZKa98brySKV4VLWiZWuhzyJJQmfsHr3vknZoCQMqPCEUvApPm3XLsAXZYEwvoW9A45ankMhjMvfGbha5i9GeSk",
  "key17": "58oVYqQFDkRivvJ9MtS39tyMgiqoCtX4pUQkiJqbk5cnVkDkX6wKvyNxKJDKq1TEtnZgFEgmGCJgcvjyU13qopG8",
  "key18": "2jQy7cj1RpkLRzBfgKDQyViJ4Dq5tNyZ2kDL9ZAgH85VWKiNzDGJf7Eqei3K55qszSUN2mUqRwSmz9j29jSw2xz7",
  "key19": "2RnomUP7puP5EZq7VdToFKTwdm8nBCciMRgZj4sRMJnCGNqytnTgfNvgpg2XkSRQLcC78k8o3S6VvnJ7KA2aAiqT",
  "key20": "4CYGv7zy719KTBaSMajRq6ZuidfodSQXaeMkJy3VViZUpnptnwqaVUype6evFhpnKp9YTrzRt6GMMEimn1gYyXJL",
  "key21": "mdfQgNPZpmywvgrZR8oWZex3GrK4wRTMSqUqvHCknMj9JTE7xTxS9M8KqjMTVdPPYMzLMywRBMaUkKAXG9T8vWV",
  "key22": "r6EU8KvJ8tdC2Phi7Zx678S5caTNyP9Q4qFGee6dwptux7mMLFiLrZTVWndzWaXgAPZv7ets4VhHg6ZicZboPQb",
  "key23": "5GBd6rPsBMhPgz8iTMjqA7v7UDeMYomFrfEBNnTs85pyZkdmUxdnN14SqNG8vdiqb6oWD8ajSbPdoK3SXom1QPs",
  "key24": "cgdBq2mQLcpNLPXb5nWvzQKKU1YZadSfX1Mt2a2AM4LkbTTFYFoiHMK4ZDjFDePuFNKBd3jSbWtC54grge7KyhP",
  "key25": "p6yWtBrHiaYUWDuBQZnoBECVLRJvKaMPx81vWmmdqrWcU7wNzxGW2QfNrCQZ1dsY6WVr5FpazBXi8TiLbr5Z9rj",
  "key26": "4n7zqkej5fVMpsRV2gWCuiMZAa1d8ZtpWyFMG3YVT9ELWAAX5DjH8cSssU2iRBLdDgqytJn89PV8CuQLVVM3r6b8",
  "key27": "suvJM6keXhDmKzBp9AnEWX1tEey3RyJkzRi8a3DyhZxTbQSTWcvHAXn1dvwMFDRCUpQpUcK21RoJytLLpbMNWWR",
  "key28": "4da3aNpH2YrWtV5tAQ6jvss3x8QaRTKuCiGFGvVE9CLyqDuuMUTCpi5aBf8WqXhrokfavcqcmqoKEtEBhtUSeJUe",
  "key29": "4MLcAtXST1zmnD1Bnr7wFELEwkZz9vPzRVP8cbVNo9YXrjdTqv13KyjfXMoHUa8EyndLjbztBtL4FeaHQRKzC5Vk"
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
