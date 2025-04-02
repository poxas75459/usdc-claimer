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
    "5N9wrzvHGXSxuuhawjsYvMsKRSyUxxV7vSe34AzuQ6bJrdm7Lv419cip9WD58ReBWShzDoktURjxJxu8QEPNydy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kWWs8uNBBt9qRdwW12K413t9dfbTTEUJSSVAmtz8cfWZNLJBbLH1PtVRNzTn3Bzxj3KKvS8kq4N6xxk96E9aiZr",
  "key1": "eyhTRddzKgMcCAe8q4Pqt2XrFovLAbFNNLj72KMCWXVrK8LHd8LwoQmqKtZgYQfAJ2iU8zJGhkkULFVpBdRfeRY",
  "key2": "Me2jNucsUP6z31VfXsnxiQguPnyzmwoUdPq6smiwGFAeRT7DmvMk624XC46K9TKQWKwstbQBr6sFJU9X3rPaFof",
  "key3": "2exJsEX9zRSu48T9nx2b8Mqjqi7K58gCWeffpkmLkjCpSnzd4qVi9CeueDkGK77pbh1eNA9VEQZ3D5wKgN8nmVan",
  "key4": "55xRBNGFHfoTQMeLpWKszcv7aLKinZpb5L3RR7pwcJNYKM4dTDXbQDT6jS1j4RfhdMuR18Pu4ZNt3E1SK5iuYsJe",
  "key5": "4ttw9YEv3Hby1AJFu3FNaVRCaKXLh7rBANbcLn3CmE2JxaA2qmFhgQK389qW2aYFexA5f3WYqJKgrz5se1HR8Prd",
  "key6": "4bgSDtmdmRcYDCUAidMjKd8Q8AjjtUEoh65nQDkxSeqhB9nXtevpqfE2B71uoyFrHLMz4zTzD6r2frvCnnWSv6MY",
  "key7": "5heK2eFbZCh6SmFE6WZN67EVdKjev69diigz5FUUEB1T9NVaqLQHQBo3JXQwjCcLN82xJjT4aXLPwMAUkxNH1tiW",
  "key8": "4MWYg78fEWT349QuRPsfgoM2nc5Xhr1qwWd2uRoGVqtqrKQQuaSdnrvkUV3mXs7XgGEzXgy9xid9W6pPmQp37FQN",
  "key9": "YxrqAtUYkdQBi3GifDKFKygVkf9KDGEqbkDt2Js2bhu5BKJiZm7Bxq361u5ZC79qmRz4fMWo6Nudu4uNESNaWVL",
  "key10": "TPLLgxRnyXKq2c5EmH4bspFSxP5VETr31ksFHTgEvyxMr4aDzsUxxRSMrBWWUmRHgsLDikXKVQEYyNRwoVfBs8U",
  "key11": "5sH7M1bQvwgKv8xsBJoH35SXT1LGWBhAKh5uGZ5RkWG4fRaAf75vh8VdbMTqaTFeaVg4hiLGeDUNRfp8Rf12AFcY",
  "key12": "64kN7DzqhrUr9N4LxuVEGKzkPRdJewX56Wq5kKDqLrMqUpQ1ggxEr2UNDuv2mDRV8vwY3gz2CFkNnwbGPx2gKQJ9",
  "key13": "4czqZ4dvtxuT95ftgSjp32CdWd8aQC9bMWT9FKYJ97LRLUpL6g8wiT3RW64FMEg3uZbGhnV4o43zyYtaRAG2oe9j",
  "key14": "61gw2Eu5U2eUs7S7544FPxjjDrkRhmwyk7ar12auMmKgLR3VGN4rhgkTPPmka11JzJ93ug4X8k8mAiox7dEcxuAm",
  "key15": "46QFCtWqtk3mCeA8oYTaCz41ciPNgc3vxELzCJzNoTN6WLzpBf3HjwBfWeHaUf8RxejKysQwsn4NKdndsejx3r2",
  "key16": "2gtqFAKXArknLQm4VVK26GxSQAnK3PLSkbyvWbtN9wGL1LqLvBF4WFZWpHfKUScUWfKJLfzD28E81JLVZi3ajv5L",
  "key17": "5umjTnDbiRBScn7AG3TPjr1n2kDEogcH5kwzTg4563qU4bgdG4S5eyc3HMYkuG9uXopB2xHSKagqhBVoGjMT5rhc",
  "key18": "5dQpdGVyYX4vSwsUANZjb4BU3qf4PupjYtGee8mqxNitzrEVaRwpwSSXRdjN9Zs4kvLrADL7G7cRZtRt9EYX3G1x",
  "key19": "5wUKDNixmAQRFWH7kPVGL4ePRjJp3F6EFNYb88Gm8VMCB5XmtFZM2LXWBKMsCE1ST7FL7ZuyDpPJmXLnjFrryvde",
  "key20": "4NvudPkiFjugWBheikp2AF23oHx55FKEv49iw1FzSsB2m3N22jK92MKYYj8zWjPhPfcUBk9GGfcaeYV34WAJRfqg",
  "key21": "5J3HozG9C13dPrP7Rq2si7SSmjaH6VaXGgZAbQ8vQbB3JYeEBQt8hUZxydxRv52dzHm1nD4BEXLFFfhLvtXdE2ec",
  "key22": "3RSVrbZAbiEiNM9x2BvWLi551bLYX4zwGa4CQQB8Q8uPpJKw8csqtQNQTGPL1frVKETtNZGsqzoZ4NqhDuDT8fjW",
  "key23": "5qZdk4ZEGYjyTxvnhAWL69nThycn9f4TEu4ddMi98zYYEFj3ADsXJkX3BmP3aNwPBYbcVHLGaT624Rt3ZxG1FWSZ",
  "key24": "44aSZi57gq9W5UXh95bxaiyxcFYnW4hy4fsr1BPGRpXFHsqSpYakoHW642pyf8KZHHCVfPSELzr4H3hkhYJf4FkR",
  "key25": "3oVvv4Vg6bLD96fvLhPqKtPjKMfz5DuDTZPKFvnAh7SoYBwC54LpNDCWs2jLY9tuxBroLq4wHPHYeimPmqqXurVv",
  "key26": "3iFYti76B7vBgHS2kraDyZXUTKZpVozqoco6yyHtSVcFM1PMz7FpiFp4mbPBKwLYuJ9AmgrFpCjsKkRvgFT6aT2G",
  "key27": "4gUdY77V34Q45E86hTW1e8ybGLmTrzVNbLrqY2LHDP4wjVV4oSfGp6FKxKGMoE57wkNHyztrm3M772mssoTBBxo3",
  "key28": "4uLMrjaQ6Vjn6gyahrfEhpJ8Eb9P3dMNYY7ZsaxbCcjyik8BhDv7Wy3dWtW9ByHXqRELsGUQH7QzRnpz5tn1MHXq",
  "key29": "3gkhSMTdXdhfXBHjZyXdLyPtFRacqBV7jMPqVQ1Skqhz4A79PjxktSPepaznQrvQPcqBRMmco9XHBcbzguNgjsLC",
  "key30": "ezqQ55TkeyB8CbJjco7wLxCavaZZkwSBvtwyAdAevXEKcQdi6riXJk9cRbB93XtapMSmX5M23W7GNLi4TkWvE7k",
  "key31": "5rfFRStLUgccSccqKXpRTmUcueoT3hPFizkFGUgt7SLRzWpiRjicUhp3dd1xK41pQmgx7vGrYcuB7HgMutANphbV",
  "key32": "bcVkc9d6wyB3EoGasViyZ4Ji8Tseid9UpnsckLmbGAVvaWkdpwM9jcGoyujcTYDQdWne1AWPsfVAF7rdcmhFhaX",
  "key33": "6GxfhDetkAQoxzSwnNqbqcPJ1pEukZRzaQkHu3zrgxJNWe2w6zzyadncFtwEZmbHCMCkpFDzzzMBWs39fAcWxX1",
  "key34": "4VboGPgiBwSaa52UExJpWWxnGrsQXuR7hXGPiiTHkR1rHu3RvYYDGGggqPHe5v4opr7S4tyuP9budBRRX8unCRUx",
  "key35": "Vi7kbWmrd1Jz8kct1wmW6F5jZd6GG2LGGeSnsVXVCBr5GF5B9pCmrSCRPsj41nCxu5dPkmmFFNuvzMQvdFQc7xz",
  "key36": "2MmG782eygMXChdJ7nGqQ5CdMn1aTjNcz45pC96nxjuXNPv4EbFuqBXEtiZgaaYWhxqt6yv6FjbXFrBJxXLAMxCc",
  "key37": "4eN7gDz75GLVuydxhYoHev1F8PrZQd4Q5m3UTMBbeGvZYPAafSGuzMkYnzP8J7Hkw4PRDzfgGH31rfCKSVtnodX9",
  "key38": "2xhNBwFBcYZX47ySiUEhHDkshLEYAAftGtLCAoBzha5o2MGDLrbqa6bcQGww7ZWpszcGgbNuDNPb2bznwW5zzwXu",
  "key39": "34MkvAWREfPLkufVxB2GUfktBKuMgDWX5ASQDXdvBCuJrPdbJNqVYVrPqak8btt9afq6EjTRGnpSXNBXyT26Tc4j",
  "key40": "4WWJVVZKaLT2fe8Ji6SxLsP5Y2V7opudSKYzaB3NtjvLTb5t64nhiSMN23RZbbMW8UYz2D1Tp1MSKLffMasWxFtD"
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
