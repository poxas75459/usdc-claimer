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
    "2Kq3i2ZKG89F36ahaNWZDajd23AKR387sNxbz9CfGxvM7a6VytY55BVTALpsA8RShjmsRmepCXiYWgxWBM1gzVQt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31W5uCmSHs82KaXPiTkNN9x318mbVZGNuX7G5LUQei68TXcsJoCLU2dxR8w3c5wQpgLnh8QWZjKdF8WfueqXkFNP",
  "key1": "dk72HWVeuEKnRGtG156e9hPboFSkY4AaCFF62HvGsTRdHG4CYgjdUGKEUEVVhD1kYDFMMeeSHGuA4VptmCtLHJN",
  "key2": "BUeJmD8iXpUr17x8Wcj8zhVTQz1qMLHPnKdb628HWbP6EoVLL4EA1djYRZsUDge8PizeXFZX9V7heKQ1JnZWQAd",
  "key3": "5QU7apN576F5aw3rCvqQ1FAkfBfQY7drQ243eQD6AbyPhp9nf6DcqWpjYi7X4ambNev3Ykn3hgqAAcwQR5pqHGZ5",
  "key4": "49JN7KyiNyJjbB735YW3WfhbjkejkXQDzmtLSHmwLTkCQVHcYVNdN2PRWuiSH4QJFjgmk2Q66mynz8WRxeHytigF",
  "key5": "3unf8knd2bSoeK5C3zQEw6NSoZg6Hc7yiRMVSPg3xM4bBWvPfcp6BNfitvtyPcRTbgUyYjG4CNuQtfGwWDNkwQTY",
  "key6": "5RfJuAMNb1TCTmkrhWPaox6Jr4y8JfkbrBm3sf6hxkFS9NwKKbUjmG5VCKttY5fB4nY4CwUUAakuV2WJLYc5rU1h",
  "key7": "2NQXYHuJijJGFdjDPKN1fs1Vox7f3ATGinexU9cHK894LWVtaZcKWoCRZdtaQgML4jMi9YqkwuJBKPfvfinVYx8c",
  "key8": "5zuksSZ9P8vv9gwfeKXJRbozZ3wdt3ELQ81UzVnnHzJBcncAPbeMTy41nPino5fmA7vkN2qUCZrw7bEckrZbwCHM",
  "key9": "tvkWZDoD4x3nFp9CNmzkrGyLUrVxrHjzBfRn68qCEYkK3VNpVP4EvnY8iwTKEucZmLXRMmdCxZgnhhaNUVYxhcK",
  "key10": "DYZYgaG3YtJqngzS7CtRD8mHLECe1m1sP7V8ztgBxQgveCfZfG66HttustkMJj8w7BPVPTmBNWwQ84oJ4poXZdS",
  "key11": "2UkEJd4NeeGeSmQJqvHjEK8VG5x4cpbDTqzwfTuWA5UXdYnB6YTqWJKkwLpHqRwhbVfJvptzSn1ksny5BGr6TtJL",
  "key12": "5eYJBeU9HFwxA8mozbFyTr29GWrVDGbabo4HZ3VaRTa5SaExhiLZ7SzWasay5QUXvunQv4jeyTzdkj4ubqYQbpFt",
  "key13": "5T4jS524gowqV7pNBN9zkVkpuYgXqsQ8CGm9jM81NCih7qb3UYMTgZrz2FieqS5LWH2iiDfRBzWTu1KDPnjW77dY",
  "key14": "dyQyfWadgnhxypo5QD6D9857p2QNwYbBy8CWVmBN79EM8qqit3MhzViNP4t6yvx88f3RRLFwe1hLADevpXkUM6W",
  "key15": "3eLgb2eg5RozaiUn4UAmYzn8qYauMmakY1xcWozqBEz7C63VoibTaApvFKABczDJQkVi2M3pmUdEsu1ng1VwdyGB",
  "key16": "65ZkmycojBnV9CjdEL3zDQwXz1WgZBVCVhZ67oyjTQKEKDAPY5LwVFLnqhPdeSPYmYUJ4ZSSxmoWD1hSUufSBD4u",
  "key17": "4hWJhEedjRnETYrK2s7nDQfgixLcyma4uMDJepMvhSufRHHK2VVhjmrz6gubj5AMGW84s4GBiDsRz4X2HzB1bqv",
  "key18": "4rLMUEVHnVYPAhwDSnDxF5hW2yioMKTuNKRnyzgqAbauqgy8SFnqgN5Ve2vpzLjdhbYVPKoyfYrLX5doSuqPKWYf",
  "key19": "Tmpbg7ZcrHC1pcGWZD8fJRwPtC873XYBd781RhvWXJkSzc5kxECMeQrE269LrV9e9jiPsK6NbbqnbrHD17yrYRw",
  "key20": "9R6u7Je8wcWNwYtg2kfXrM4bPQHrDj8QLAtdv186SCVNyqhm9CLzfVHYE5AALqVKZ37oK71NfSgXyaWGi5qQ3cN",
  "key21": "3uGsozFYABadi3JHvdWaQ1grJDmh53Ybw1C8b1eC88x59t2TREu6H1Qm878ePym64WpX8cGs3SSPCmqTMijfyPpY",
  "key22": "6WHHNeYT5paHZkkdCa6hj5ZsyMibWNYbNVFB3HZ4x3em7yfCgZm6c4CzBRgiNrCLap6VDhqU3vam3cXSeASUZnn",
  "key23": "4sCMoEwDUysCmfyfq2UhibucCtqYeW4uDuXb1w6jFrkMkBpcowitWs3idKrFYCcEJx9vzBVEDFJ4rBqFeP6WztCX",
  "key24": "wFvmzLQz6kofr4SSDicRqHcktt3EpBhkwV82PMFrdGoNoaS4hBwu9VFdmjssv4i2UnuGrHpCcejguzZCitCLMj8",
  "key25": "5AK3pUcbGUAGpURPRFx26uwNYCaq4UQZFaWA1BCrJ28ddPWyuYaADaJdxVsz3o3jZkrC4vJ1fjoozKWbaEkpxAPC",
  "key26": "gfhLqNfPPQwVQSiKQ4eMxo5nacej7TQCZFQEjnmcou7KbTNqweE9214iSs3VPuSzcy9ZJ1XeSnhAm4Eut4WcyQZ",
  "key27": "5LFfWfy3ooYQoiu8VRqpPQDf2ANw9oxTMj92Ho2JcFJ2QkkTckFrpxvwRo2cD1qNZa3LG2ZjNc5NDzzePutXrC7F",
  "key28": "21jy8pRAzHwiu57LoA8WEByZzPZtAnkRyfBfGzrxopJgD4NVuhaRoRxbGZ7LfiHYuvAXAJj2T3bHMYS6cRrdwwWL",
  "key29": "5Dos4stqwdWKgBkxRExCCtmmBdmWk4L5BXg9TCbEjf3pTVT1gAxAw3cQRL9jqvhNbAun9pAUPxHFfeaBgEsqvhQ9",
  "key30": "4fP7AXY1fYPZJ1Zk7LNVFvY6LNYPm9ipWxzeNSj9PyusRtocxij1LCUPZwGsPpAXgZmjv6JMjvAj3UbiB1sLomJJ",
  "key31": "24nWeA3Qmx9SnMZiWXDvwKLNEqB6Hf2k5Bw8xUbHD3smyPgeuzonZ9L4HHSSq4eMw6ysgh3cFZH9tAR2LJSfrNyP",
  "key32": "4KZbZV6gFfyPMymg5zPRVeLr7RUwHZJxpnh1hH97Kw7u75PWsibZZ3YHxFP1cJZNMzoWF4AXXn7MHEW6NHS3kadh",
  "key33": "4pWfHDjNRRBtuQWZiPVHgmTMN7NFGrxeKU3Uydq52r8HFSrzMmEG6w19HV1efTuVvVEUsecy6WKH1vJQYiQupGAy",
  "key34": "5mWXJhgAaRMfCqR56gkXh2nkNo5FPBGXK3UzRfTRpNadG5yuvZ7E44gtHrrJVn7T4sdm5FcJojz41wEmedmur759",
  "key35": "4Nr3qa66Zbim9SnVxXaZf6yp4ngj4auXtbv5AwnWfR7aG5Ry6KuRdhzFfeFnhGtp5X5FqZrkLZBVpEcBb3S9Rfvp",
  "key36": "kKwenM9RXVFR569dWmK6qaKkrSWwYAm3eeCh8DL5HGZxiH6yMShjUnH1Sg1Jw2yyh8613VxdGbizLyDj1QVarMf",
  "key37": "3U2TtUGPdVsonFHQgYP2fiwswRftjEcXqgi8rvwwBq8k2WdK8Zp5saARECCbiak7Nrw64JgqAkU2TyQgMKMsTcch",
  "key38": "5CQvQNbrUiw9LiruTj1deCsTy31qRM2iRLac6eTZz5i8JtJUBA7etrR9NzEcDUvnynTSXeFygREypsdLV71252Ez",
  "key39": "4ggWR2aWGgBeTVLeTPkE9SnGLmxNDJTT7sv3P28i1o48MCnxh88W6C8GUGPikNKjoD8MPRcrevTaESTnEctiBauq",
  "key40": "3p3TzvLS16J58JVrZX9XKUmWw63nP4GHo3zsGRefS4PfjoMQaANcLMztZAZPDkarmZV3p8DM55VWzjkcFVZALgY3",
  "key41": "3y7C5tQxE6YfuRu2fY5fZ6rghHZRp3vEvqScf7dw1o6rxSwZSC7FdQEfTACYoTKCSTnZ4xSN3FZYUE2a4k3dSFd6",
  "key42": "3fFMSaFEyb5fKPHQM3Yot8cuMY4fkK4JuGwN7c4cYtt4uVud9rjE1u1o6swaVhF4zzfUfyJ1scAABKneZKsm6frn",
  "key43": "wW4Rc2nPLsADJoX4NbMCBKUsz3daHZas3iyT8bEHPxEJxWN1M2M6uDmKvRLfQe6aiiBwTjsscgjX4z7btwwbehN",
  "key44": "3on7nVb14kndr71H2RJQuUCLSiiACHSpGsGVC7huJskeQrFiNmfJ2ywSXF8kc6a5PnNq3pB1rbWhRe8BuJbWKhVh",
  "key45": "5u7PQdwxiKoCpQe6u85P6E41K6gxM52vNjM1fiCrveW5yvAnsk2iEhRkhFgH73TWGioAaAjtquafaBJNuGx5Kgtg",
  "key46": "66YDASfca9PhnZ2aa29o5RC3ejWYAXL3XgRKS3Qi1KoqdGZXMCXPehwmR6VAcrYH3qb4hq4QoKYurwU2ZmPCQ8ZB",
  "key47": "61bvGgYM3tzVvECYEjuh7q6jrwm6Qg56wY6vcs1uLgi7Dhuow2djEfMzwwk95Q27uj5urs8pSj5zxcHJeuQCXdWo",
  "key48": "4Pngb5ajrhqtaeCDNb4vhbvz8sAFrXveN6Y4dWQt16iNCcdQ2oR2jBriygjotki71hfe6gDDtWJs95v9yZCpvzFx",
  "key49": "56aCxsPKsBwPgzns3iYRzCAMNXYcUYcn6tn4k7DHJMRME2vRSS2BjNjTrcgQzsz4smfCuSeohzUM9Mn85j4V36hr"
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
