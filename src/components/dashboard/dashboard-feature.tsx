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
    "5MCij2zEsDKc96ioXkSeB8aXm8GVxVzyFuA1hVqv72G9RUuE6gmBUSr77WeMt7nTSNA2Y9BB69v9RAQxS71Y7Nue"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "522oPGkvNZshK4xri8wNRNnkipy4x9LnJ5yDScciCtdPQLw3gdZ6kw4hp7qpYF2FuyUWC7Fu5jrpQ7yiew7MhcZ",
  "key1": "3pH2RTih2wVkWe1yWFdi9FRt8UZDBioGtoyJUrzHaBYByiBtZ7BQcPW7xZErrDahy3UNtLiSC1aQX4tSDEnw9obe",
  "key2": "33GZqg9qewswA7gYeDmWBCUkbDL64tVJzeG7YCNi4CJ9B6DaQ4hpDcKcRxEcKcm1WbG2kPEKFVZ6KbAvrF8sdBMB",
  "key3": "3sYFmLxS2abX1aYvyMpw9xTV5qukdHS3SqhzUtsLuXGXk4pB6mK5wkNtKnxqbisQRwyHf51Wc6kGvQ6QMjRWyk2s",
  "key4": "4s5NR3aKCULbYC6o124UuaMwCR2XtPXgoLA3NaRXYCEjHjJirjGoD9JHS2ZezaZSNKvKmzaNMSMdjBuvomkcf76Y",
  "key5": "AX3YeQaEVFKcaiREUkzsWgEGTd8qkYZRkejrySWakc9VahT7296bbnDeVpfDp4rsLbeQs6yJwSzBgVQMzrprugV",
  "key6": "hXcPtqotALJghZC6BxoZU69pYCvVejx1edZmhyb5DLP7NfieNNvHPFWM5zypYCAScqJZv8SvahV4SRmDKDWX2iV",
  "key7": "5F2jrVqknwDXm1gp5ApZ6tQbX48FQiBmz6TpQbDvZcqMWnPissYAsUB6eQaGsnzPGiYU32BpmPufV5Mrx8VV5Neh",
  "key8": "5Bx4v5d2H17j5hgzb7oRXJzvRRkkHsqgu6UztL5T8sMnKxWgjcX6ia3EU4RrgShB2gR8ctNEvJWqe7zpB1aCEZGf",
  "key9": "5oHpU1mrekn3TpSFqqXrBAggQdhCA5cdn9QRBbvMzK7tUX3U66szs8vUVjhkVkeCxY9Mfjcguv8Za3qNStSancF3",
  "key10": "5ERPgt8xCiyPyPWjsb9k4Vhf7r8fER6uBc9aohnwYMCg9n5JYFhj8Hmfhp2BEQhmCdD7DgHFWA9fcSsEM7yhCPyw",
  "key11": "5yapReHZuDvSZk9QfHBrR8432jz7RPPstv5ZvLDuxNyf4LikykGtobAX9U8yUpQHDkWP1kktGFoRXTcsg9HVCFTP",
  "key12": "33WkFndcsLPc6ZNUoFUCXXspWwU5ngV9UftGa7wG2Sa2ho362Hcfgue41df4WzGdiNpZcsZAPxKQ19hsgJ1usi24",
  "key13": "2B2BDa2EXupr5kXpqyxqhDzkk6KnpXUvsLSys8mLQoHdUN33q3mmspbH5sHT4kHhYeiu1V6siy3oHK8rYv1WdwNa",
  "key14": "3d6ELKHe7gzpnCasC9qr8dV2rb3Z8xWGfG5Zk9MPXJCrR7md8CcC1Eff7BLxqPJBx2HM7DYv6SmP9CktA7RaDkjk",
  "key15": "3tB5QzMcRA91CSSxKMRAyYoqrBe6LHqbJKR1unmhmJHDkavqRJjmNvergGzgPma3uKqvpgv42MMzS9bmZtAoHWrp",
  "key16": "2BuTMgHgctW7AKkWEVhZkbC3Z15kSscTczjHvm5VZjKD4wXTeUezcQc3yjFkrfg6y9o1SgGoFufEFWMxB2K4JpvT",
  "key17": "gtAppqPi6PDwivo1Mt1PD9Ywh8vPBs2M4hzGVz47dHA5REPDwGT5R8ibdLrFRtZKgnxv99Hswj18ZHRTvnoDhEs",
  "key18": "2w8mQQDgZcsLCtKMMQULYShGUGPPHPCqyN94PDqt1GxHxWFvmaipFFXnY9xF7CUs6rfrVEKgvAZHhDTo2UQjHNW5",
  "key19": "36VWeP1JNKi9S4LJrGBH2xx3LihhdYCWGkLQes1jbtPGBYmEnd3btXGMJBMcwiapcfuLuSiETtgAzaTn3GyVXy5Z",
  "key20": "4x9G7Jz6DdEmJT6qsww4PtNGuMCUCTEeCP7yY2BPCN7bWMUWU548tnydnsnMB8hzvRpX6cuupUfnA14EM43Rdwyj",
  "key21": "4hRrVbhPfmNf9d1kHC4Vsy4cDhbD3j2Vh4ipsXoe2hgeEBMSjCApfQXU7UdPxjih7c7jieW5Lpq6nK8iJZtmM5Af",
  "key22": "3tm9hooFk7ahJ9v7onv1Una6LFMc3AeND9AxxpPXwoqUq71vpGp3LqRVt27RFv7T64f5GNAGm2YhQqtwRZWM5S5B",
  "key23": "3sLy23yRgdLHsZRvhJAUXDA7xNZjdnFEVyCmQgGvFmgkfYXcXLWfjN493iAJiMXFKnEyqwsk4KZkjYbSyjPJUUCF",
  "key24": "4B7AqofFBRkMcfQJudBXnEoNS53ZVRfS79mezABYVZ8QmoQ5PEdhpyaCRDDfxnfiiHG8Q4a6RxzSsCaHAsTfgVf5",
  "key25": "2cGxTBkg1diFzAKbKuXDKAZk5kcV6oDBEYLCriwzHoextoSCkMstupc56aqgAW2agsuVQHqSJyYDzoo4qtznjpMX",
  "key26": "296PPxoVgt17GfVQ7dNzYghpraHsYG2PEtWUCMpsp7ehQfvWWVDJr6W8Mi9d3N9YtHMshg4xwsu3xwXQTAD8NCgS",
  "key27": "483ij4PWkLjVWK6QXD95unWV4xJv8WEPdyYWJPbNnwvoK1Ct2mj8N5atdzZUTdUJdUPimiAVfRnUZixQxWmHbMTW",
  "key28": "2yjgpckk7AxbH4f2a6CCJ8wD3mQ2fiY8FhnjjF9x27kjE3Y8DMJ4CPoJ2BsMumK9iJmiSobMGrGVEtaMYMMM12cG",
  "key29": "4RPBBesSSFrjQpscCTiueE23JU3fHsir1GHvDoeq2MqPhQkjtz49o6JwfRboKEeXKcZDXvFGfH8WRJK9Tm6BaQKK",
  "key30": "26NgcZHi9Df3Dh12t5P31qyZLvQPFMeXgJEe2NQhMVPSBns5gN3aQHd27kEc3UdVhZNfpAnETazWjvpVUDKfUqCs",
  "key31": "2FBgjrP82eQ2EnMneFLCbg97h6UXDL5u6qYztZXfwtkAkfk9kCLWboqU6U3uPs1fKT3XU6mosm8ma9Mx3djTU38m",
  "key32": "neRNEVfbZnw5qgHAUzQ2P62Zbw7LigQunaf1eJoemNmYk4EypSbzmy6e8X439rUaV6jjdQrvhfKWmgmg4Q578m7",
  "key33": "4H2SgLR4JG9AtxMTdjbEPnKYJG8jsp3aw3AdGxArVs4APn5ExZmL8BhGpvpzaMAHiHN1wEKmXnMWzWL5SAsq6sVJ",
  "key34": "4HWsNoqgiCRJ669A5ipAba6DDBe7kPaUmkYqnEsJQxJB9rryFxZ4FNd8EXnSUSZS6ghM5oRGzN31nxfBQDr7Ethn",
  "key35": "VAVJp5MsLKkCtrRQiMpoyAb8E8CbbpnsZLKF1bmctEWARqv6i51oZ2V8p6QbmeDsi6rcrr5dKE3hLHXgd1ZywNi",
  "key36": "JMf5iA9b3jS2DzDPLM9iWiobD8DmeUA2oRZNhLrCikvkzt4oDf8mQn14GNe68NeCa8E4YSy3qwEgJu8Km2ghZfz",
  "key37": "5q5KRAhrZhyYBfxwUKdTG7z3eBJAbJ7qVw4Aj9n43F53SqE1SHabHBxVhuupExMwcBXvjpzCrmSnJmLUdXVRiedp",
  "key38": "4qFnqWkMNGgrchzckVsEivJ9pRfkPuFaNFu67VXAjzh4by2oV6VJbh5JM9AQBKUrHspAtirwnDSTfDfmXBGcyxya",
  "key39": "krMWZfxCt3Y2C8JHkk8Fm1dDTaMZKvDyoAibpgrgySJSzUoSUBqP2HWTYRSbJZvvFetydJZj7A7uEVeYbf4kB5c",
  "key40": "uNTBMvfki97Mwxe2UsR7EA8VFn7DFj1vubuCsHT74hXBVsFr5gTJDECPzvihsZg3wTEnwtfob7bt7iQ1dBuh61E",
  "key41": "5QiVySq7wff8gDYRubWruQa9zoxMCAiEmcwNGWMR3ye58EY6rBXq98SfrGtbrxNwxSbaCpDyz4s7PUoRVnLF5k7w",
  "key42": "4aZZZUAKnAwvsP8oUZpa2451eFV4Fvira4qcz5ixoR1xYUPcN8zk3GMkDvgzXJR8N9einpc9And7FrPq8x4dnknb",
  "key43": "5BTewaXU9TMPEEEASfnP2NvtHruiePjdDJ8Q9pJpuQ54yKQwhzrDZXZ2co4cFpRdVMqbc6YGDJYFidkHSK6QHou5"
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
