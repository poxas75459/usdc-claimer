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
    "3s2RnvvW3Hn9dZZ1QxK9ehcdLfeaVmAZKt72GQgDpGbHgD9hkypM8NZ1wNTCc3YAishgYUpVgMUHenu1hcJjDvar"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BQAxZV9KyHJuhqES4e5PJHRUwTPfi1oqsa2raa9fuNTVUcWjw3f4pUHAeMXzzn7JwZatPGYXcqFT4wVdhQqF5aE",
  "key1": "3JvuZMMng2fpmxdVf7JhWggnLDdzvM47XiUpvSJns7mN1aYKj5uFJY85A7yVSvL2RaBT52v1MmXzFekoasM829fL",
  "key2": "2NDSRi4Vvv1ar9z3KGBCzhA2UtzeAmNNUNdTcx8gXfSbtZaQ5r3PGQgkFjwvPFvMYwTijDsrcAoCmENxCpwy2gby",
  "key3": "4b8a18yrYYA8nnLq9fVPLqMgjJT9iq8KvomXFRmQPJf68ch38ZWBQ72i367Nd1vU9vnHCwwAKhEzkyiNDahLFben",
  "key4": "222NF6H85a4PWPYfCr2HYpHoadeacCxa1wiDT8GnDcExstMjoL4DjFRTM4dctMiWbnW144YqtuNLqn1Ek77uSBfH",
  "key5": "4R4YmTsqviTgq5DaSnfGhyokJKdas7FXDnvErCZai5keAtuu7nVUv9ghpScHhEaRFE9vhhCkPNug9XxnBDFpoNyk",
  "key6": "4cqiaDuRckjY2Gv2trAXLouFRb3JmcpUQuT1nsDoyCH1JBQHsJAUwunHXhtN1xsoaXr74qNpUPrS2NqEke7LDrxw",
  "key7": "5B9JuP3JgEHsygDZDbYphSMjyx4rq4KpvCGbf6Y4HHV3QHgEtbwB8R6eKVC33wo9xa5v2mZ29jQviY1syieJdp4v",
  "key8": "35VtSiR7Hky1aoxWVkUSPS6VDWr15BivCUVhiEpxAX7b8aQURYjaSS58xXdDZZWYGFmLY6gPQeJYEBCCJ3ptvvBa",
  "key9": "5mzR2LKHdCFVZbxsDT65aKGhuJ2iHiyNSwx7chV67MzdfH5TRPd6grKExLn3XaudAzXqsGUhGQgs3voYYemLsW2Z",
  "key10": "3wDre73fz151sD2bfHSNwqyzVihNGd7WqvirDEiQbBmHHXrF9PVNo7c4CxSVT1VsSh771Yi1KP6bknHmLCYybArN",
  "key11": "5ApVJ1fznTuViT56sYZN28Wp84GJfRGDJsf55CKNaaaYP32MNtMu5v9gW31jQJ6eZTmq8tPD9cn6RGmfewP6Q1tZ",
  "key12": "4iNjS3qyxmJmsXPSQntmypUV3a4KBXimgeoFYwLrPSeRAVmeK3yWZZV1WsiAtDW6eRPx7rHZqhyNNc2iaq1eDeWZ",
  "key13": "mkc4EfqFmPTnoaofA6MefjbBNS59VjsS3rNbTeQiqj1hY9iWWyVpPL5NmzRDQmw9vZdCCxYGZynsTt7kGsuDnEo",
  "key14": "3VTbA6PTpGgAxaonEDPocqWEtRyqtvBXfaeh6yDyJkEcVrgR3TUWcpqJMrZjzWzTYG23XziUz35i73UQVY76xpXL",
  "key15": "2h5Ja9k5bVEz5rzajRjri4ugGHdfM97EzNtosq3VmZ7FHkAHKrM4yiWCWpJ1B6uwJFKWAP2abKifs8pz8SaFab9r",
  "key16": "38iTVDUTT6LN4iwgka4sD8WBQdkUgFEjrFdG8x3GLYdRLe5fozwP3e38YEVn1yh8cAZtnmiz9S7NfeLo5jvHBf8m",
  "key17": "2u3h7TrxnKynca8MYwEbM7WifywDVyaWL6erMrYRmc8H3xb9EehKt98Wy5f9B2jHQFJQrngqgDeN6KTLPcmeyLsp",
  "key18": "56noMQ8k146eFZR1efjNd9sBGsGKgp57xk9YDNnaR7nkyuvAw27T1kEVzRNCmHxURzWPx6z9h1Mhzy1LFNqsJewh",
  "key19": "5Pv4zkHgXBFYfA4hvqgByRyY8oBneiW8Trsokt3SUPsvRmo3UB2Dhd8HVrANmT1qfJCLKbrJiuKU2te7KQJ66NiP",
  "key20": "5YW2NxZXBR8raXJysp43NkU2Xff4RdfHVgbYP4XkHuNHwyKuuPBC4xMYF8goJ6TPGSkkpUFcVbbCafcbTWdoYH2n",
  "key21": "21Lbt9Tt1BQsYNwuMPa68idnynmE5GYJrakVCt96Rp7FJbw4Uk4LTBXCKV8Lo6VhmzK4CsyqtLpky5ib5nnDWNpu",
  "key22": "aSDCX5VYgC6JY7MGVoh8FsRTt5J9h1Ybe43NJhtEkuv3SxushtN4JQRnBEWRNTAQy5kuw2XnRx3Vf3SU2vCmGAy",
  "key23": "9z7nfdF9PeHkZeZTKUVWUxRx64BQ8RUqhhyGRusJwodG2Qiix23h17A3VzPF9XFpb5MUsSDBQZXaboqabT3xgWk",
  "key24": "3s9ZTvWnZwsWPEVCTU2kZWacb1cW81Lj77wB4LdBbdYXSqFc9Fp2pAJCC64G6hxcwMeueCFoXHP1AQf9inE4fsyz",
  "key25": "5V21jGpPYTsr1bPckDppGh7ipdAGQEvqrwP5HYUyChbfuLnScf2Ev85hnNqNmNfAmrhEPUoJJgbafCsT4xwuhZxU",
  "key26": "4EwLA2o2NzRjQgTXQswe6a8gw61TWfWajwX5SXQmfaT74JzYGSQWTHXzoSLd5eKfsfYq5UQrQn1ZDnH4nLxR8UhH",
  "key27": "wzoM46MzCraMsn9dtjXeJF2fKLBYroDHYDFSkVn6NfnWAsK2PWtDGAbzvYMYDMnFJyg3eVMTrY2X4tcBgp3nwat",
  "key28": "56xiXdzRL3WqJAuRv7H1q1rtJWUtQmEaB45PxDoWYAMhRSeB41tZZTKi4cTBZrt9YStsP8nLApzhbpYXvrhgdqaW",
  "key29": "2tt44Szy14bUVZ8JFMsycNgP6mP1un39FQL1U5bXGKxWKDvH4V5QbeBwf2hweKjtKijpq6aFSF2bPwUS5NR3GxhE",
  "key30": "NX2NFRdeT7u7NuVkncqdPdoW1Cte72KAcXuaAzzFmSJLuFZDX6hwBVWHWBLJx9BrQ1bgENEY2AzvJdfMastpva7",
  "key31": "47MS1aRM6vtZDLJ9hPyutXquFndW6pb8oYt3ng9WFM4yBQ9vxVZDE8uJvKfa9qbbZMLF2veeFyyeNDcr4S9LhfSh",
  "key32": "641DBR7Gw77VUKYC8xA7dHEhzaQLL9pdUzpHs8ZzB8kA68rhS5nGdZHT8NNDbtLSNHJRhQMtK32uZxVhudjQCkgr",
  "key33": "YYjuZY8Myfe6tMEU7nYjqUuG585pAcmX7za2KWgKDVH6sdiZqsP8cncZVw62pDEv8Nw5zMwoWMSh1ZifnFK84bm",
  "key34": "2HfuNesGcAkM9GjbLFofPYg15f5pQLGzvGykDbokDPdGxWv5FsFhk5zHhFMvPEESv6AvUbnRnUSDB1oEniUWV9BH",
  "key35": "MMzy3yggNLrMRkb2T2inUrDFcBn548HeDjeBpRSWeU7mknvgXkgmSbhmHVFsZfE7kRwbqFGj8bshcqBG11iwqR9",
  "key36": "3n9Ls7zH8YajN6ksynZYT1AEPybMPknvbfMWcdwQWv8nAvNFyoWahcHfr7BvL2icjALAzQaLo2z3vw36jfCgcAn9",
  "key37": "2DaFNobmxHwKuu2HinKVTYbMaJMmsWCkJfDg56U4KoY21FbJ4FWKQAECUpqiDpX4oGeseabLu74TnYEDeSM8FDwf",
  "key38": "2fofuLwMrg1Rp4ntsKn7uyrVgu6dypZTngphQwZmC2A9kiUCkY8ngH5QNbsyA1wCDwAfFwvKBUTMwyTP4wuM8EqC",
  "key39": "3PA2UMCzcoHSxyYtSjK6QNJjAxq7NRBnBzUTUEBNk6NrF8gBYxD8ssDDb9jbeejjG4bNVKXGyd6D4FAQkAVLhCs7",
  "key40": "2r4Zzq3Vg1QYm7TTtukpBUVKVHYq9ywbdp4jWN6BNSkA7xjuTjPTpm13uMnouFkkiwuxHmppKYbVQdumKE1D7ddf",
  "key41": "4dkcpCdJfsAEQBFBjDgd4JHvJMbEhwcwygJ7fzQ7pVG6QFLEW2Tsj2GSc2eE4BqroD46Y1VZYXbfW2Cwp3e1Sp77",
  "key42": "4ifNzCsSUGGM7Pyx1acYS2bejDAQN2u7oMcNpqcjKiSyMZG8BJwcPbvVg8yxsLiv9BxR3JAKX8hxm7YptqFiLGn8",
  "key43": "3DtLAxtozab9Uqw63enK8mNoFBz4HVnUy9rKoULwNdeCYCHvm5dRe5NzF2ZJVpSNJkKFfoYEEGUkXgD4hnSPByCe",
  "key44": "3U3cFotmebwdw5AVbGBwVwRGqutGDQ9iT4xZWt4uoTe8YWmaPgpQo3uKkmH7ALmZ7wYH4uGFnyoRECMFQvpuP21R",
  "key45": "41pkhwFrrpmNAMicV1qtkQKfxjP93SkNudoVhM9G1zpZPXqSNyruW3CY6igf9Nhnb6o4ET5sSLvaM9jxnM3a2Q11",
  "key46": "5g8MkLdvp3Zf2HaJoMZE5ZFBUBjomsLGq33nQxLjMkBfqGgDZRNCMpozHUTEXBK83fkVgfZfzy54rXqPxvxBuKW8"
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
