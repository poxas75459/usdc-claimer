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
    "4BjvYKhZq4maTTgQ4Jjer87R1hnDgCEsSxLJ25c5GBzKhZCe3YZ3RAybeMdaJWZhT1meifTFFgk9G1sBnvX1jcn5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46pg2qhyReUdNJqJxxFAQ3D26UMdhEdgpnjd7Z9vYHL7dtbjR1N8dpECikZoTVZkrCvbW6cgSsry1NmZK4qANfL4",
  "key1": "WocTamvDJPg9zpURXLvTexfkn53BMrRtVvYKUBnJxbarQCexduWm5eVUpEdUW71YC2vya3RTJ65quWrGBuLmpg8",
  "key2": "4v1GXaiK81nnwvbnLVKqVYjGthyTNvmx7DSvH5e9TBCcQdEkD2YjERdox6fJcvfd3yhhTNdvhA5HqxJQHcTN8yx6",
  "key3": "3ZfPqbcSVgpveU1R6FrDP8gDVoFdudGWAWe4q2zHvSZxBEFeBxh2nXh4jg2agQfdtDAN96UdMuczPNnN7Yqmvpc6",
  "key4": "4YAY6nuZXsQDyEie22pRKP45JY6ynWvBqUfR6Uu5YFXtEHEpVDWJYN6UrtVJmNfRui3eC2r27Kb6pw1uVmXu1NPq",
  "key5": "2uvhhY598KcpE3AovnvknerU8mP1mKGPe69STuh9iakj6JJnNmEXU9Tui6NbkS6MPcH6JdbhcgQG759fohCdMTA7",
  "key6": "37M5qecgPKS6LEmEbZbbz41JobUhikrKNUoGxK18nkpsystd7NMa6buDeo9mBKKK7T5c69ANWAJL5rMkJppiLxMX",
  "key7": "5h3TuPgrhFiVzVhNrbCF9fbwTK1kH1yXJ8kY4SBWYfF86RZXjekTNttd3GKczSFnjNs8dbZRPYGV99UVNgGLBPmE",
  "key8": "4GtNLKQJzpKr8n7LaFLTdxxuUSF4gGEghydp9LgMP9oR6d1x3tz1hkWW5E11xpzaFBsxXLCcx74yKHrGrMx3wBed",
  "key9": "3wkWQ2WwTWQSVZHp5zYKpwBMgYSiW7PCN1mMQzgrvqnt87thqzeBgLKZgUAErr6AzJyTshy278Pci8qVE8FabfYt",
  "key10": "4e5BGtCJe5wM7L8Wm346Bb7NfAArqBmSTMxbXhYUutvKRzQkwfPa2edxjw9Xv1d23pbL9YozARczwvZA7fiSUsDC",
  "key11": "5gEjSquYsYoQ4TvMU2vPnsAEwsqtvtKPCkhkFGwdzYdKw1bxBByG4jXF4p8Ee9RApvSjBcFa9qE8sUrMvhhw6a7W",
  "key12": "2JEXVFKoLFqSyxBApL6rRuCUsm1Az11dFrudAULRgBZHmWNNoCiuGf6W3nyE84CY9uPMc3pEhKy8wdnn78MTmpnt",
  "key13": "5C7pSA9DqhQQqfKEWivRkYLaTQWskWK18Ca2Y9YKfPtkeiyrCzFvY7kLzqL1uyV28hQisna8kRNGRhXCkrwCrRqb",
  "key14": "2TACteKbM7bBwCsY55iSTkZ6sczbDc5ryAwzswjo7PXnSwELRcyLDfKsQaSYnebZwyXkvqnJJsw1pmJrWdq96KgS",
  "key15": "baBHyFoS2MqjRU7yACPmFUDcWLsv5GP72fUvioRDi73PrFqSS8zk7Z6EeLFMMNhajnpm2UNLFSpxEjvQuAf25Vk",
  "key16": "5XQjR1QPFhTvKrqwKpRYrSCJtwdb5XLpimMWRSkGvDdRyxccfhbwZs5pFiPRmDXKJuy9TzEs2YoTM8co2eecoTG9",
  "key17": "4pofzyUXpQJMo8HSwEqsEFHrwJ2R4369yRk5G5SzniqudhjodWGmrKqRa5z4iGKi2p8AbRz6Q4qJqbCHnidMZKpX",
  "key18": "5a78mxCTcZ5Hf9vTeSeZprvAbuqDsEtL4YmeRpm9zEaBr9GJAodxrEJaRV4WXCzJqGtZp2YkMeAw1eqR2UfeTD9Y",
  "key19": "1qnPXUBDaRADhA4fCLeMnTL6sG8cNWP6GpEWX3AEC2hRMccWmsNRG1ufXk2GZEtktJRTFh9qeY9ugzaPbyCdj4r",
  "key20": "5wJF6ikZXknYBwJ6diaZNzs4SXCJ5L3AKNhbTNit2RGKBrwon4NvkMhZvAewSY6PAY9Lna6ooV36BG5qvTAP8vH",
  "key21": "4zq2iGhgkEAhU3ERfZ8C7YxwHynWMYEAJawvY3G9WnCQeeSDboaNK1BB6CjunhdfsFuuRwoTiCJZCxeiWL2qtCHH",
  "key22": "TBPNxz6xQtP9G1aqKVhiquJ43LBgFNggpk1vRSQBrhB9JVcLwNSsj8ybj3qmyhyTB2optCZzM3TvnjAy4n8CgRd",
  "key23": "4RK8LjmuhAkY7gtK5o7Rjjmq3tu6ruFx2DrFeTqd5bWAMVhEZvrAt5o5Vhdd16sQkqyUUzLYER3Zh2uBDxvCYV1k",
  "key24": "t11wf4i6Yw9qsKX35sHbSJJW5QA9HJuBWtEXs9N8jDaWFoskWKgHkLfutQbqNvu66JEYYkSg8Lv6zYXP6wys38Y",
  "key25": "MzQYUVpu3d56t8XiNNjnkHprWaH8X1PzGsDJvuNiPLYRKhWz7brjv7SZ8YqoX4NbzUVczwPZuBDzrwmyaQHGWsG",
  "key26": "4UiYVmQpYyUhVsFbz3YHJwVwM7EJgzi9kr27dHk9vNVVXMPSgtzrty9DRK9vfvrRyXraoBeftM1AHJjv7RZLbuQk",
  "key27": "svc2D7j84QWdC4rMz8EHYZTLhqFe8iCVeP2aqLiMFenvS3TkV4vLJ5d7MR2XWkqpmCBRSkPYazvx4nJVDJgSSFV",
  "key28": "5aeuMSwZJbMV3LdLYjCMABgT73XoVtTVcTtuaEx8DAssMnV1ri1LSsMZ6Xp3CLTSdSBgAZVRVdVyFo1CskM5L7UP",
  "key29": "5iQhztRa96XVpWuoRyLobmio1hUzUveDNkUtpKhjgVATKY7wNy8TDJERr14jBMXkfqP6yUs7Cq1mt7uZECiM6jGr",
  "key30": "2HfsCpjMqKAr3rau5L3GkaRUcazoocsjQqZbX7V5tnLcktqgeKCx6mCVkdixBw2BhAZiQba45qd1w6q8YkY5cxqF",
  "key31": "28ZV42hz3mpW36DREfEWtr6H9CErSE96HLAmvmdyAMRy3pTTEyVHb6DxRsYqDTTvNLd9eZrx6tBkX3uDjwRwday8",
  "key32": "3yrPwbEuxB668s4etcZcXkvGuXJ3s78gkHSQFijQvfFTAwHtH5aavjQfrDE27B5z4BFXCbJy5asvSoNEh4jX5f15",
  "key33": "56Q3BuVhMyRawmiozc7BcumsXtapAa1eoaPDfgkiYpNnXFW2W6Cc5YyqYEfYb4wkjp8yLd8gocK7ZMizVcq4YpQj",
  "key34": "3Pz5B2P2PTo79MUVawbjAcpT1sEZzj3tuLFS84spdwJuWSMEnTNpiFJABR3aUV8jQrrwEHhUh2yJouiLPTQf8siE",
  "key35": "5Ekc86HfDktssjeQPc7zTRGFP8Sx8qeGnLNYjDoRgg1YoKddkmR2cwc1ruup8DPZZtLTBuvLNTaLmrkrQjeHrnjs",
  "key36": "4KCNWnxQbgXtAr3DA4mn2qQFbh6hNRZgqwyijhYtMGsXSDcPZjM3Gb5yMXwz6iQHLHF1RLhHvWuwgLHFLpAWpPnh",
  "key37": "fsQNt3dXpqnRUsUh687iA17DJjEWYKsYbWJ5ZuagPe5a12Rdt1GwUTPcyb73L1hgTeAbYVB3DanshSf1TGBNso5",
  "key38": "ZFH8ALycNtT2TzwKuE1PAdCQuu3HzPeMGSoZvCCCQF5ev6CVuRxpqUiw53sHJi3a9F2fNJjiJfwoYS9hwbTbszE",
  "key39": "5GEyJq79zKvPHjJaduUTukRmcYn51ZJYWKmE7xLQDgpbhMhNZXHR6cw4hL3GGBAnXzqGatNuMVVcs7vSdYvTZVZH",
  "key40": "cBeSi8jBebVuMXcdVXBWXrNpFoKun1JNrMbweGGkdToaJqT4Mz8wdq2mvzDQhR5YTkS2NADQLsVvWApCivMXV2c",
  "key41": "RAMe5XGy9dtJXg9bDuDpgqCorcC8gVzrj4sGh9dS1VuXVNLcNwvUbGTYBwiQkcg3bc2nbsm1zxqq2EHsenvzSvR",
  "key42": "3J2AkimEGLowg9UVoHkF4vf2BBpBErEPTEtJJ9MCdVhFrFUsUrzY7HSEjrkTLr13ZnzXpiadB7kFo8M9pp5Mv4MA",
  "key43": "3hgFhRcv4pFZ4vxvhGHMrSbGjECCEQDeimj4TjDP3nQ1w6hzx5jBg9Er8shJtEN3hK2853THdqzAxXgVHWBR9wEK",
  "key44": "3Ci8zTgGLfAx8s4UvxYcZACndFLN7XiQ5t8c1PuTjtFG3J52ooLoxZFXi8CphEkFxmzNQMdzbrBvT1ycFGbgbrNZ",
  "key45": "pJkczmUfapJY4My4c6sEcD7gLQKFxacYMXRSmKGXRHYEbyJaUvuZeLccgLvE7TpY1ReiyhCNavGmbuGyZEoQdNk",
  "key46": "5xyprwo2w65m3vkG7LhqNDEKL5W4GyadyGcHhJetiNTkhioGrz89UWZ2A1zT7V56EQYLu35x4WaxFudpkjGCXfoP",
  "key47": "4JzN5KmhzYrzg1YY3cS2pXACNoW5cxVWwJTyZLKsi5KbHdVSX1dyaTkZWKmncrvoAVd1MrxKcPxYJZH9HbHCK4ZD"
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
