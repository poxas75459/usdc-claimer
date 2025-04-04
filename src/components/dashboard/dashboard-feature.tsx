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
    "4wQLNirGADVgBh6wNDyQLx2FEeCwv9pCKJK4mEF4nLhY7UACxKgXQg2E35kjyQg1D82koc4N9zXVLvxH1dswwYr4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u76QncdPsXaWi97sDKhyVrJxCjkV1CxYF13LWFazA8VJLGFLqxZWfoLA4C95Gdw1s3wxuoxMh7dttU18k4N9hL",
  "key1": "75LRQm4fukU6y28iKBzHj7iD9CiGGJqWWbUhX11BmL37MBREM5QS34yas46M7o8Fe3ZY57ngVqhoy9VPvUEbJzY",
  "key2": "PyPPFGaeaCuPbrsHEXjSbZUF9JJXJ6xxRxzqdkemSqD1mbHRDpNghYaEMHg6HNxeXicKCtcU1HC8Ji2dhmmrBcN",
  "key3": "2oNnSiawtvq398VpUzf61eSni6aDKgDzEoCivUHLtX5F2wQBHYd8ZgQ3GGwwsXfjRuYhH53PNZmRogieWv6ZsgmZ",
  "key4": "3wHA3qo6vDer7DVCDPJTmhQ7914HP4TfVgCedH3EH7CidY3h4akJiQ2QPLKqsakmUXRWvFBHCRjpqZ2WbGgjKWZb",
  "key5": "2GUXsaNbvE3AbMwFjqSV3rXgtQnWwSSxTeGKD37kG3EPyKtqnRNiUG5NGPipmGYoyJnS2sQdAvVV2LfRigTAbYpN",
  "key6": "V6bnrBcTFxuaDU8Ns7rBWsM4uztexHTfB7mURpRMvwxv7rAeoYJZhrH5mYdqgL4tdgSVdQ4pijVBD9E8qo6SeMw",
  "key7": "1M1ThWpCGWdfXu145Pyh6xtHUs3Xwyuyr9MeEqS2ZNcpATaT3yxwxhuocaCavBhW5it7HjWAkkdeQkSmw356zcX",
  "key8": "2qz6chkFFesuFSDvafk5CNz1XM12LtYfZLW95isAjwkHwHDtiGV9o1nbnqaEKeuaLs2LSkQHj2ahK3YUzVhpvfYs",
  "key9": "hY2xqpLnmr3XD6PoF2GnvKFTUdvgJJnYKUkaz3gd5L1W63sKDA3i5qrY5hY9oRLPcrwgYycy1217jDqk811TH6L",
  "key10": "3zPxTwyHR6Z4iD4FXeB6LTAmzqtEjYQNjVgNEDymMfuj6s4Q2EX54rhoYW4fmGMb6PwgXuj36ewwjo9LxQJ96zFg",
  "key11": "52z93CMLrTCE1QSfr8WT8149Ws7EibyBBj26AuFddWooCJBKZQF7xZVqjGpgfmJseTwmuU3PER2HQ18PZiJ7Bhcx",
  "key12": "4iGSJ7bzB1kWQDWiGQHoYhzdchKaB1FRP8V4vzkpfDeDLLTc9fhmQFt78Kh8XdtimxBwjQWpWu8Sf1HNnLPcFmbm",
  "key13": "4a4ZZVjK9ekMET48NcFUPg46fLWB14byz7H88x9Ef2tdD8cgnzTRf4FVgsKVmDUPEcrpnAewmX7N9jGwyVJZd5FZ",
  "key14": "2qGhGxsxFUDqTJwtMDuUKhrqLMi7WBYtHz3bT1VVnkkNtvsrgjqd5eZhrGPUG7qcqzcbAdkmzgh73v13BivunSc7",
  "key15": "3kgqcK99HE4XiWfwhcJWaREb8yfKVrjkUyP5EMvFpSfJcer3KW8CqoGn3cX3U3vBWyBBA9qbbXvMqdevLNbJpq7B",
  "key16": "H4QDQwkP76721DD9vrMZyxTtJf5Fjkn2jq3MRgQm3tXyzrQLAV8tQCEMyRKnheZsTyLZU8b34fSk6fW9eNDjbp2",
  "key17": "3B6MihfK5sH14i69ExSEkGhd9JhCHCmS55DxJXmLL71oizph8m9eucLWev6mFCxkX5V9frsAdxst2DbLzNukgs4y",
  "key18": "5Xsf8C8c4HAYU8UvXhqyXp3rzTqThb1PmVve9ure8xHnYvgPmnww5AQoLgZrjVvVGX12S1NevnfedqU4Y3Yge9Kv",
  "key19": "51bB33B3Vi2PTwMrfBtEryHAsuEHg4mpboxSTXeDMSsGPsWVidYKcpj2uaJp4bsaujv5W21Y6rCJgQ2gpoQwfRr7",
  "key20": "5QYxkVaRW3LaGdHPgzmiLyRQU4uN9J4NdSn5cutoYoyYgN5V4RunitqwUEuEFMisQp8SQK9eTLiHUkNVUss1c6GE",
  "key21": "2F7dAEPgW8LimG3qJgkRXYEXntHrZ2nZt4nwQ33RydQaWxh6ZLCypBhRhouHiv2QMK8XFmpRBrXfGLaQEZG5MyJY",
  "key22": "t5Ng6jEnZfFcNPWBZ4RfE9Kfk6svRADV3sff9xHZvD3exr1yVVu2anaGJAsgo9d1JBorgMqjbYT3B93oAxgYY95",
  "key23": "2FWK3hov5RqB15d3AscRiDzXU9sr2W3Pv3KGDWiB5wwjCkp46XTJ61ZqwgsYte3AvpSzcyd4mtpRXeZ2c6GTZ3Ka",
  "key24": "129whT4RtVVQmzT18PjESQWoZW4ezNffP97PKx14K6SF9XDzBVKiHuMgEK9KcswGF4u4o3WkniDf3AQtPmyDwHEk",
  "key25": "SBZNdHG4yYUitrwWdoZVwuTYoJEk6xWmjbA51xpyHz8XnsUFca2u9P1aUxnYbamatzgJsZtgRmcLSL1aEYtjLGK",
  "key26": "cmrAbBfCnh9zUQRGErmuRV2SWRy5Z22PCESnaH5MboZbiwS6kFMqTwbVXVASvoHdFCD3KCP7qcvZhKgnn3FF7N7",
  "key27": "4Hqk6UiDuZaufN5zPm941t2jHg4NDq12NE5azKNVxtcxjdELUpDyYxsXXXs2hoykWbqYbqf69UFdC9RtwU86ZPfv",
  "key28": "4JoFqj9YYBe6VVZboETJKfaLyfTkpjzr6AbDbYHThZ3kdEXnWXvqeHp6yacp9VuDjfF2PJ3d88CsPtAqCchaXYFn",
  "key29": "37MzyxfK9B9MsP3K8mM6WuF68dGHrKMFkkR5zCcYbHL6ZrJRG6FV4sKRfkWvLKaABUm6kbVmrcj2yomJC6dzgyC2",
  "key30": "3PQ9hMntr5LeFMMyqcUw8ZcS7BH5vTbeKwnX5DqK8gaZKZNtnmn85SGkWkRuN1xfBTqUx9biBTw9VT7bkNLCaCPU",
  "key31": "3jGJfww3UiWNCW7tx6zLk1bCcig7Ht2yyVUz5pWsJkzXG4KMgrXWyEiuxSyK9EvLQ1qjPdcszejM3MBK3XbrMYN7",
  "key32": "4HryuNxdwiBEKWtEjHqgWi912Mok1mnBxGQ7DJHL4bPHnxsb3trEFeyXaz22NViZ77dsxdDX2Q6ULLAeVmox8axE",
  "key33": "4W22KLEXMY7ACcKKoa7psbAYenLFEjwCALgV3YGmLboQoKRD3NYBD1q4YVP7gvKvdpQcSNHaboSfScvtqvNdTS8y",
  "key34": "5e9hRy4aP5iwjetCptxbrHq1twSezTLcvT28LnHCi3DuKwAzLqNquh1CpARAbBAd7BUE6HeM9vzE3c7hiC6MGJAT",
  "key35": "3j4CGFZMMS6VDUnwrJprPKtNCuUy2e4Df5MgVVb3dWN8mzvfhehXi8926T67wotVQMNkLGybeno3pFmMseyiJVHW",
  "key36": "548ZsTWtgY3CGRfBnHwjQQmoMqb9yQ57dU7aNZDQW3hiPz2HdqcY3YMHKmShx3LPhEwfYAQs5c6dMDD4ddnc2f4r",
  "key37": "Gd9X5TPcGkn49ATtTTti1quRR256oqh3GzqFjsXo7KpYACGdkzUVK4jVETyaPwZG9FhvSNG74FJP2eoAc5HBYmk",
  "key38": "2KWav9pn1uniyhDHBoMKhRQdWSxRK5d6tuUptWLMigTQsr4BXuErKAgjbBH2b2QviJfEH1mpVVQH6fZvBBz5omM9",
  "key39": "5wnC4TFgz8wiQTYxjTzjjueH7Jfydzdy4dSyGib1zEpD9GNQjtFuajYSsf6Mmd23g5b8EFzwrcm2cMbmMN4oMJcL",
  "key40": "2qPraSf4vmBR8kfJ3D6bYLccmUD44wDgirgkwxof1i9FqPxtDq3zHjr1RVKiS8kHMn9ob174xC2yjSAiPVhM9U1s",
  "key41": "5Hf9JL9UA8kqguunk8mNcsEx3vUYF5Ep776GEckbXkgWQfWEAPYJHotewofRNFQGdd1UbSaJdkpE9PJdy2wKmvBJ",
  "key42": "5HUZYVCSsoAe8TBJQeqG3pfN2c7tJCoEBDkrQfdBydT66kiSLhTHeSHeZUkzeQDkktzv4SCK3FNxvWacPXKSKdoq",
  "key43": "2UX63wuuCaUEix6i7aepEojNcj6pa5i17e1WmSdZ7j2efdNRvNSbRTZ6kikiEpbQ8xeBXiBWHcs9vAsfeEUsANkv"
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
