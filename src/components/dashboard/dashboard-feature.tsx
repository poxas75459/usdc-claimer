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
    "46zjRPiCTofWsVyezXb7VJ67ptzeTwmqMjyYEfQLtgavbXDRaD3C5XSW4ccHcyatDHnSf6jxNdzmwbGi545Kaxhk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MEvsuwuBX2ry68LfH2zjbiSHrhCiqv6eAi1QgUVDvfQCiiA9bdafke4AhfBesVdX183WRQbXw6FNuLsiX78Vbjd",
  "key1": "2QPzaKxxTcPy9HPPdYxzfNLRVV3vuaMAUy3CAom21t9BAHj9WRuPkepSE1Mrx68bWFFMQwSG97HNHGPowf1Nkgbt",
  "key2": "4N9SaiosmUeG81hE2z7CDWRxi4jkjdCdYoHDoSbCgwsKhWkq2UKQM2kRBVRhSSieVs6NMBaDpqiT3FjehvtpvWq1",
  "key3": "4BT3PVXbUAF9xQ13od9X2EEqwSLMaSQHaMq93i7Hq28SiGYvuWSwyRpUSVJTr4tR6mJfn5hwG82SoPDT5CoBD4uT",
  "key4": "5ZUm5VUooyPaxxUV5UHnjegsxUKD3GRndGBDP6MbMR9sbnwzbksw5UBkTjeBjMFBEQbaz77EA7gc3ua54AxwWSeo",
  "key5": "5DtFTBVyf1zzhP14xMdUStrBhhRqz11S5TSPY7g6zKaPEWTiBbx4FuDoFUQXog8keYhgHw32SW8n5dUtsaMo571Q",
  "key6": "3oHQXyon41ZmGCsRq2oQ6Cj6sF6jeRtSPNVRfvKXAyuRELFaP4UPw85CLCLrNQXC3EJX3wUj1rWLxp6NRMJCPxFR",
  "key7": "2nxscthfSKFgoizPYfg7tY7Yr8xGXnRgfZPoX9tvoEWDsQ36Gsp7u9AFEvVqcJb3rgpXNaobWpQrqA3KzhFrggqc",
  "key8": "2VgT1ZMcD3QjKqxLAFT9p6JDTQWjKzYe8EhY6Jn9ARJ8EZH8Xg8A93M4uCcRU1WQprSjmRswVC94v9NoZwoMR9jh",
  "key9": "JwwqcxCE3tWh9iLbNSC9Aygcc28ca4SwMTkj3zpAbYDv4raanmNdN25Q2NtCtUdbkb2tHmv9DNNxF9Jg5N4fF5A",
  "key10": "3Be6HZrjuQqNUBLPUB7eu8VtEH6gQf4m8urFoKLvTQKUXDMf1iTU4DPf1BZiz4senmsgYpnfktjFfXXnn5yB5ei5",
  "key11": "b9bazogwTihMvzYE95Z8icwBKDnbWk12uRNXqg5CpEkFejzQpXRJxsAcreoSGbC7z4i4ADcXvbfX5Y2oc3vKw1Z",
  "key12": "3iBN7kds3kMrQygdkQUUAdWCR3DQpW7cUWM9qf9WayH6MPxsjBxd5CsH9LbYnaj4VDe4vJkbDkzAya6aMxmyuHKm",
  "key13": "5afRRMYGxSjspt9z1rQQM3XxCFoyuBxDm6zqYcJbo8niuq9rg7yqDgJ1DfiJYBSyBvY3Z36mCT3CxfJFiFvakrU5",
  "key14": "4g2CMdnuAdKYfZhHbUDbSzzmAAF8EUFugmA34jUmbgFx7jygEmB5wgvP5Aa8gDdK2g4Tz2tBG2E1zcsSeWhU8Wa4",
  "key15": "5dZqoMoYZJpy7oUkcP3w54QJuvfX7i7Eq4yY9p5NS3jDDzGdRYApdtUJYzNX6wAwrwGyGQQvMbCxu5pJPQ21K3XL",
  "key16": "3Xtpj2syFZ6sYrfx8p4A7XY3Uu2wdiwmGA67HA9xdnQFDwB7P1LSsatdqEDbSCkzKoCddpJbNKZFMupvoUDs7etV",
  "key17": "2iVVh3Js6FkjNQjUjXDfZzCtKruchaYfjcG9yFYb16tf57a2LtkfecvoYwjoWSp3duA5b5AWPs24AiR31k3hfBHf",
  "key18": "QzsqeZZKWZREDeHYeyjikup1cDrotzayecbx5cbFt4fGdfQqwQhDU7J6o5hhEnjWPERcZstZc79yqzTRjNnik16",
  "key19": "3mrKseBsMM353qhmXZCrmMiA63UJLqDkPX3SDTdHNgmwUTgoQU4c4QrLUogQm7Ac4bPmRUHkuoBTWWenoAmGrrmp",
  "key20": "5feAixfuthrdeTQctN8eg6peo7iCowpgUVQDKSxmyubjbawwe62s98P9CuqBzMvnh4jnaSqScRgVWt3d2x2V1KNt",
  "key21": "5XpXieNfsBHQyB32DSRkYYhpEbsnxtSktVmGc2rx2YtaowaaFzTtiRW5h2ND4EKxbGFZYUamFrR6HUG4qxMpjJVx",
  "key22": "a6ZZrKUK5Btin7VvfgqrfzhQ6Exj9Pq7RAYjYUuebbD1V3WmauU2Wu5JXVMDsbrpAguZC8AzzNzDX7kmmLkc5uS",
  "key23": "edaSAJhdpPZH8opuxvFLj7c7z3UK1f9gWW65y4uGz5UHjrEmN6Ht869k3wxgoqsskKqCaBq5iNyrRaNUkULvoWj",
  "key24": "27dy3RaJj5EVPA72W7gxgsiqbJvkV6aSRSuDF4ZefHjA7HpxfdEma6GG3kacub5K8Fjty7vYw9nqDwHYcL2gS6Ga",
  "key25": "4o478ENYbgU424g3vF3tU1Crv8kTCbXgGJ9z4ezUQ5hTfPn2mPx9zxDAWoHDKsN7wGTygJptpunjJHuJkUYw7RBL",
  "key26": "4Cc77FaPKKm94W1p3eeki2BKca6sdYMM9vTSBRriCAfuL5DjS948F73yCV4fpQ5MmUpN6MdSqXWL5FYi9aiP8W2Z",
  "key27": "3ZRPcDDanugtbXnAiRUmowR64xpSTXaewxTmEEWLKsqrnQ7iumL8kadeEhzj5Zjax9rqZKb5wAhSmhBXLKHD1LmC",
  "key28": "4acq9ueWB4NWpB25oZNrCir7Bq1a4Z2obaoAZBXUH5uz4eaMpCMJWLaNGG5AykePU1B2w77ujUb5XTs2BwiRXTdB",
  "key29": "2ee6dDHrb5zMRq7JgvRC5eDGSLLrmWts1y2BjPyXcps5dtcFDVNXa8E1ZbyBznMQCgCmN6jUaNBMoYD5aGr35kaX",
  "key30": "2xQXUmrsqjdAGvC9Dthz95Kae1yc2gJFjx5a3QbUYBjVNTHkJQDuNsjdbCwp6Laz7evLtKmMiUQYBjnKm6LassE6",
  "key31": "7Un5LviEL3gHJBAcTKBd5S2mBi3rqnm6PpCuuydGRn6mp4Yz4fhfGNwy1L9gCZ4TuFPtaEJuGcA5Andvfy6EWss",
  "key32": "2AkuKRaYhz4z6QfvDp9KQDJ5PKMuG3N7BnphY3xN1pJoGepdQNWsE7gLuXmuLHqvBDboANHbLsCbmKjxsXPCoEwJ",
  "key33": "3VZMFrVNgua8fRiriRJNR8xy6e7kCcPSecuE653eHZtmLYrwtT4HK2JikYKZmV5qcvYvtFaFR6tMzveJSQwZJn3i",
  "key34": "5xcWqE6cQAMSF5B2RevUFEagYDLKkhfS24tkyNGFHdv3ffR4FTZq3A4GSJzfBXwRmbKpAi1WSBAwg7jtHeimmAmw",
  "key35": "3JM6NdedLZ66hooQnu3XJDaXWN1hNSJvzM6i1a5kLJ1hyBkJGUVtUQkUwdGaZfZ3Qraw7a5vMgWWBxUZX5VjRPS9",
  "key36": "3MVLsCmXHA7Hs7zZYYby4J3Nidj5rA2e1ZZrM2TpWgv4F64thbn9KqEtro5goPjY3qWVB2tURRiVgnELhnHmf4Z2",
  "key37": "53UNvXPb4LoWkFdkk1pxKaEFY6SnsoWWvyvQ9EdNAVae9uqvr2J8WoXC2U1M9mGN8vkJG7aXWaV8KfiPmWzZtNTC",
  "key38": "3H6pbJQGABxbeKzj6aigG6TMK6b1UmB5uYuywaH5qAn3ptDHkS4PrLDR5AAaeiT2J1mA2uzVsx4VqrShWCC8QdCf",
  "key39": "5Cv3gwgnrB2euVioaCxeP9Xu9zw6AuhFVGme1eSAQwXXurmeM8Wyy4SZ1akEBTbUURVd5Wjh6St7As94YkDAvkWy",
  "key40": "2JsjK9rPaSqZU3gvrojzDGiCWmXpn2FM97BEoruiZoAPt4nXCq8gekP8btMCeDEx2g7F45Hw4wow63DSvmrdW1GG",
  "key41": "5krPyMmZiG3XU4AqFCHmWXWexPM61un7ncDhHahSUm6m5mpLfwNFnUXEsjH8BkrfS7sQ2UrvjpiaHSTLV3NCjbu3",
  "key42": "4prpC2YcHaV5kGEhMzrV5diV7zrzDmGETNMZRvLbF3fKUy5eLiK46XPvfCFanRNEtFVQQS6UtMDriTvMmfQCeuDJ"
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
