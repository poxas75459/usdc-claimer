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
    "2irdu8eZQjbz5zh9Aoh3nApisF6z92JZbCD97JXPc3Sq5U3KKy6BBgga1ttFTpAyvJAxgZ5omjyVQvkfFj8ds5P1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kVx68BMZU2waayxyzDMii4Sx92RtKmLMTXC4zmqbe2NPzzVZZNYHwHqNnnNa6hTRVQrzfjzgwGByZcT6AqXN2kU",
  "key1": "3nJ1f351gtNLfr74A9MeiTttCpdwCHxUjWELbtGjM74qWzENm5S78a4L5oM7igCAdin3VFyNsEDaLRaHjJdfNvgH",
  "key2": "4TKYuLVrbx6XvMVyUZRRHEokf1SNSZ8eadtGX2PgLDpEL3U6oK9qrZX1myK1udMeaUeSKG3NryDDDq6qAPTYkfSi",
  "key3": "4KiQgTgC4R3wFPje77ZfE4D8BttTV794bFLMEvuWW3HLHjcnWe8HDq7XnNBGQ6omq7QhcNeC9zb2w861uof3q8r5",
  "key4": "3ondv2aGdVGs2Z3iSnUmjAYh28EK1cPTS81QrPMHGcdTWFS6raRRFfBh21T1cQ94G43TAAjBNER29FQxT5ZkcHgJ",
  "key5": "4ZYVqRb2vAj1Z1JLR7drQ9SDkbVsaGkv6rUvPP9fhXvi9aRbUG95xvUnfgs1XJ4mb82aswZUvap5YMhsEJgHSekY",
  "key6": "3gUxn4C26QB2EGxitcEYvYqGpbXWnshczxQvCvEhhsP1fxeTbavDwG7NXxvPme6p2VE2Eq5eJERUTMVfiCSbv6XL",
  "key7": "gmneVP38WTcgrVRhmTA3knMpgWkxEew4t2gKFShYERujyrkCQvFYYXedNu23HCwk7bwKQyhAkw6Lb1G7SkRXYfH",
  "key8": "1d68ya3PjUciy5ocmxk9HyNNQFTqRUrNTWhXFEor4txrKfkZJsPDNfUnWFNiydNjK395dmP64tgHp1G2iCDVePx",
  "key9": "bCP28XUDFU9NkMZNbQdcj1kr9AmBd4c6GakkMyirUrfANFryWAXVX5qudPaR4wGC5BY6NVgdTU2qLNcNKSNZrsh",
  "key10": "56kpovfxfP5BMWBuEnefjQBXZ1a7XMwbws6svt9iUBRrZzEZz6Jb63BtKkYF9etB8SmaZHmKpUsnEG61jB4Bkoy2",
  "key11": "5vThK91tUX7vYTbfX37uCmkWi3WFYjA8EEjQ68vL4u6M8z2prtVUzUgwFE5B7grZNUD7MdpG1NkoVeS9fmCQ8H4P",
  "key12": "EFsFx2LfCPCRYiN7B3p8upgNiCXby9jEWKrn3Cou43yWfR55866HNf96bep1XgKVab6eWJbR1bnbtgZmeHzvQ9i",
  "key13": "5TYRxmpEPJH87pa9fearJjNBRXXUg9GanALxmm6qAAWjyHp7jG3j3DKrf4VK8rGMwdES8dhZ8KmpDG4ot3VyNHvJ",
  "key14": "3snGz5SmjgLQWmNG4RDoywogDmCQ7iR1RGHrkTaMwYCXQLR2Wz124Hy9j1sbGH3n9nnkSM4XtgdbuZ8yxqRwL6fV",
  "key15": "2oUi4XwVUoDiHiY4KqT5vQzhdQyXNGUcCkEKNyg4ruy7E9ncTyuhjgtyozVRTZbgxougtMrS7ZMqiUABJg6w9LC",
  "key16": "3uQtkchGg32FTydgbLP3LWzPNmey7VyEtrKDHssS6C8PpVEHeDdrKQUWgoYrkm1FdmqpanQdumUZKZz7M7mqb6YA",
  "key17": "55BnxWsjfB9Ch2tanZzoVRWsoz1WH943A5QUAzCf3qCwqLf1wF5dg89hpjRGWkM5EaqYSfRmafBtbVJryLZPCSBX",
  "key18": "4EWxx5nsJsDzBm3f1aiBdWPS1tfuQm7Ya4JVySdjwjXosEafB4ZErgxyt9R13qkuH7pB1sT5hAFTDupV4DJG3CDQ",
  "key19": "NRmP7E9t3tZm1rNxoV6E95xkANyHq5kozZmKTSDH6wKtvBDRDFop4X9TC2qPGtGKuS5FqGzXv76q3R5VPeReYNT",
  "key20": "5d3T3Akj7aNbHdhiWN9EPqoD993UV7r88qYUZ7vBP7VDPr6qRWzJ6TGV35cXvu4FSAb1TSZo9QmEmByNvA8JcFxX",
  "key21": "Db5pPMSFpmP4dPC6reF5ctrzqKVDaWH1QwBBz7CLFEniUbUsXvQnzvp8YdYg8LNZq8PiH1f2Bo18ZeDDp1q11Ht",
  "key22": "pCuTnsdbu61hPGr1y68ou1sen2kCzTwrhvtMDqsR8QfoqYtjvRzkUpWDzF9M3nyNZjckPZQ76bSAX7HowSkLQ91",
  "key23": "YDpU9PDdydPE36zsuTVdNvVa7VWyrhvdDV9R6M6Asb1LP1biDqDhGdjthCbZWxuncyv8iAc1N5CJSuDC76sMCp6",
  "key24": "J6qJoidis8r7aFYAwcjXAEW9PdNjXcr87jJCvPwWjHiLm9iwZkXQb24RoFWuAm8GBSjyjwoosVnDRzdY1y5zC23",
  "key25": "QCHMhHhFUMWrfaoS8JcR2VgUU4NbeucdweKNG68zt8orXaSbtXHS1LfhdJeLsYezZi8wTdAYuSBqAbeosYibopY",
  "key26": "4T56or3d4gm5chnKuYvMDux8gpGq17WJKB9tGFnpqGtqt1AM6PiZAaJfizNCvRPcsgFRJz6Parjb4sGiqEzbYCmn",
  "key27": "Nfa8JgAQSHKYKoaVca8Hi9g4xPBysQwi7quEYeWf7Ex1AA7bHW1LDRZgfsaomtEC6PEpRW48EDizb1QNTBdpBbA",
  "key28": "MxBJVPcLF6DTeLX9JG8Z232NQNRsZ4VS2SgYr1cmkTisHzt7comm7hjgjFBpLYFmkeAB7yMzL5EHeva7A8T3MEG",
  "key29": "2K6gKobPJYTbX1jruaUaiEnRLgyaSQh7eGdcrgePk26X9a3oat4f9apdd3W6Vrt7SZqcwQ1t9oNP1uRbQiEbyCvT",
  "key30": "3p6SZtqLSaWbAXJi6JA3ESf8LoBLrL44xkv38zUpXhgebyc6yK57L795pAqdkcW45AdwHiF3N4yJ467dh8E335Y5",
  "key31": "3RAgQtXp8k2YaRqiMmuTRvHGbqjAxk5bMZKkdSiZXmocowJe2xuTeaRC3G5zANktaKjxCimpfwz7AJxzt285dCcc",
  "key32": "5Vz2iciZXy63zFoeYfa6Dpoq6SqAZkGe33d7EvifzjBacEkHicm1BpjGcq8R6KphvGvUWBPEyb4KMghpkm68chKA",
  "key33": "3aHDhN1iUrATtMcaK1Mt6czA3ZeM59wbQpaHVmVo5PMNivqBk1U7dMRw7dYNZUFssgcntz43qNu41Ua9nvsR6M1Y",
  "key34": "4izFS2k5Qn6Mfop18fhonAemoR5p16gqU889cZFEfMebJRJ5Fcv2e3ZsquTAFFURtr1aF1HjUsj1hQzDHxi76xMb",
  "key35": "5YxRxgZUqeBWAKgRzgvVNsGeVyVNin4t2ai7Mk3KawaModgPwvUYuZeTqGowFg6nGUTZ7vzVegubMPyko1Q8rfqQ",
  "key36": "3MbQSsDLzKR88U4HFXmhqvDQadaabUUbVanS1iCSZh8NYwqQ5SMm1CE1aAyGPjWSSofyStWCs6qB8AntTG2XmHWW",
  "key37": "2A6iMRw6cDB6GUJY9twkzLg46rYmpBDBP3FfzwYrnZ8NwcE8Utw6pSgP1fSJRSsyYrPpGDo4fxSaRMRFpSAxs3h1",
  "key38": "5ogbCpaw6rHa3FKGMe7rrHRuUYvs5CwSduEwtotuD1D4hRf422nizkQDTFJhMcwwsA8qiD2MmfXZquh3ZHbGfbrq",
  "key39": "35q7QSkvf4s4pQiQUYuf4Lb5RjxJveGRhqAw6pCBhCECPowL1U5gCKdjiNjbvsrxFCqcUgVtXJ136UdNJ2ABVkmE",
  "key40": "3SZ7zbuU9QQd7DLUZoTNzUxjuZ2ZxXszRjJm9WHWUkCDZ59XJ6LgojibkinHNQyhERjbxZhKfEfQGi2efUeekhXq",
  "key41": "3MBdDK3Mp9vsiVUsNdoa4K6ex1RT9umtHjUFU4zMUVaAwsxsn7voP4VDxTfRzV7KwQZJMsoiLMrZDh4b1mccrAZA",
  "key42": "26rnXLBsC9ryPedFop7i8NAn4JsWJSg1B6do8hM1uiA8XuCmrEr3CrB2ifkmnJrUqSBvEQovTnJR7s6SYKrZdjC9"
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
