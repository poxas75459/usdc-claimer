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
    "3exujEU1zDJS8UJf2vUoLYUswjWWucTJFcvBiPefHexzD2HnKDD78dP5Rxit5rZY63d7TUWJghrgsn3XSbnaqVMN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qP2hth19tbMZTHf4k1bQkp6kLK7qCbBrMjG4ExVLhNChEehrY8ZpBpRDg9bSyiyNAFYSCj47K6PiJ5jwLKj1Jsn",
  "key1": "2o27gZR8kwt2L1YFAQg21xvCgdQYgiQJL4re6PMMEEPnZPcGP9FpNERiiqgoXu7Ck96nU88J2QEoA6Eu2ew344Db",
  "key2": "5bB2ACGNgie7WBhXZfbGgJ2U2X8mupf4w3MUyXPEWJUZN2cPpCnhVtMoAisy5uxpcmjhfHCKRCBuQYCgTZsTgERD",
  "key3": "sCuHWJ4yyKGA3MggiURBG2CRQBD5btC4trpw6eb2c8N9wadQGNFNV5DQG3vFyPVwMK3LG2FtwUaT49xw8bMXChn",
  "key4": "n2FJmmxNUjhbk4Gm7apzr2qKGeqU79JvED47d5mUPRRGs76DwkhFUuZLEfm7CHmK8jCt7vuGfTtc8oe7eSHMii8",
  "key5": "61tAUjUnHwUDw9zk2x1BoVkoHHeCB2op8LtZkCuuD9CKVeTGc7cZ1XrKzPiJfAiya8sEaCdTAzEEtz58Dk1Mnf1u",
  "key6": "2EquJkssrcXfBf423iqs9aWMUNu5pXEdeeMh2HG1JTUkr4YbfLXBjsNXhV1UUzesUSvDB377iv9WTuz3bFhB19pW",
  "key7": "NVaBfWwexBFmfrNRtsxYEKwndmSWqp4EDpGnmRwGshdnpqSwPzvdiFfE8f4ZUtUjQKapFRmiCVZT7pgkr1Qk7v2",
  "key8": "8pmo32KKHNWNN4pS6z5kLrK6yqu7Aj2wwp6wx5w368vbraBVDnbYC6A6Ek78EsvumahzFkx8amPXHBx2wSLpPmP",
  "key9": "2a1KQvrkiC44BXcERKjGpN2P3G5pRRFqvMzXxc3Nt2FFUawedTHFCcnWDta2F1Ezwu1UReLqES11fnJAQQusMn1z",
  "key10": "5nJJB7SSgcgDLkEEgt38Hv2ubRPepQGmJFsQUWm3ZTi4yPdfJLZtKqAiVTrW7eZYJJCcijhk5YKJnd5sfZX2NaCa",
  "key11": "3sxCCbNecD96udfsBtaFaasHDtbt27nraMZY2b4LeHJXfxuuh3VxsKop1dCXmyenKaTjKzocjp19USpd3o8ugALH",
  "key12": "49wn8iBzpCh41aguhAFaodMAf3y5jdMNDrxjUXJa9NnWcNXrzD11XtPsubL4UDmG4K6myHVyHe1j6H4PukQqmqU6",
  "key13": "3m9N2FFfN3LkKuR2E8b9RjCkjFsub8PxwUL9sfmBj2CryAgdeGbFhAPTqC6shL6zF44ewDGD4wAkPPGD8PMx3jmt",
  "key14": "47dugpev1LjmX5tmBoCLh561WXjnQHSdpzUv5cUHNoJLNe9M23dZVkDJqCGVNHrgzcQJCLiSzPgTiRFAB6BQntob",
  "key15": "337AA5x9af35zJX2NkgLzCwT1kewSZLNb5YgZmFwChC6RyziBdBq7vSB5F2Nnp5pMkMc51psqgmHPz8VMex8LTaT",
  "key16": "21unzzBS4yEwGjNg7zDCaYy3ZoAb2YmLpGM92SqDaVPD1sAjxDEKkgv3pg2e3V8yZLG4tWej8iSdjdKzKGWF3cvR",
  "key17": "37Z2A5wZYevuFA395EZELpnbcj4WiGyCM26MJztnYnKrqLdbTAKuBMqpaFVRvVyZu5VhqD4bXb6MvJ2i5RjM4s6D",
  "key18": "23g2eXF1rBKvMxpX815y5dyGJXw4Ywv2aUn9dvw7p5wBQqPK8mhkHY9UMkPVEhKnQYNBj7NHsanP492nz5km9DUg",
  "key19": "3MofdUe7biapQ5fCAxXj6cjZV2qGV8gkNTWDeAsvheq6Bomv2psvB5WoYd1tkHw8CXZczowi8Eq1UxjgH1drW3tU",
  "key20": "5RNtd1nNGH8nGp286g9sEUQpv5WCaFrVUvbWRq513G43kw34G9dj1ZNmZ9wka2wKr58AycNsVf7JSKhSh2CoLgNN",
  "key21": "3PPuinMG3vn4VVfFjf7yZmmc3g5Ly4eoni9XkEFTtUyMuPqxgsExZKK6dfcWKTPXVrp561rXnMzhDB2HSvM3kv3z",
  "key22": "4yWPo2SpMDgYCReza5VBLpeB3tSGiFGqhboQJ2qJHYH7yanXV8kt2eBqWW7PfFhuaLacpDLahiDw1pQEfjKu2C18",
  "key23": "3wSzjq4VuFsi6aaNFZ4nntyfTeyXygL5m9cipz4k8UJvU6c5vfc4asmDUzAQLEV531HKrxQsBDi2UEc4qdYWT4a8",
  "key24": "3eNU8TAGe85P1QxkUdSoP1KD4JYDhLC2T2zrUnHhbfTtPSeZEK9rsKV3BfAdkh9tRhRae6rSNJYH9kVwMhtm2uEb",
  "key25": "3bj21oSUyQth6s59EULuzzegeBGFoFyiYMr2Rr9jabURoGWEFwm8ba6AoPrvUXxKPaWDWwStH2kUqMK2hVQqSCHj",
  "key26": "5fRoMPNrsxYPRfcjEtWZryUDVaTu9neS59xQjRtoWfzPHDAxLDMn8EQYLFP3AtrsW4CWi4p6Fm6uc2VTnkBBuwS2",
  "key27": "RPor5i54HSTQba3CWYxxZuqSDzwZ9ytfR7e6xTUKg268ESj4Fw2jQ53YRd2ofuEcGqq75K4zYM7cqPsqucbNSDq",
  "key28": "5kWkLkeQRjNvtR8GxZNZ1d3npd5VvAUT5pWfur8P4s4JWaLWw2uezjXJGCW9x4GjZu8yQ6iVHWtAZkLSsb9hdQD4",
  "key29": "4b2RzmtF4FU779h7sovxiS7KhALA5tWdZarTFh1xCD3SYjYCTVHrsuhbiVAsdESW7DUGEA3vgLfnNGPDyuE2KnCQ",
  "key30": "44oSDGnxh9Hjqn4DQByH9Nd3AHZ1SsUHkktokdsMZm3tuRKwHUjULZDftDdxvES7wJNZj7CpCSh8N4K8X143JJ1h",
  "key31": "4PQPJxXPuoG1e9R8cNCNw9UdhFVrXEEe1kjq8g5k7iVxEQgrfmJ2CwrxnMyDtUnou1D3AoWKsXYcf79ReQ2Zx9C4",
  "key32": "5yy8JZaNDcvk5LD6eGtZqz4R4W6Z1T9k7vuTYBguDunMazpj7Zh4cKGbEfUxVkub8ioJ3je7mNWMcaE9nxHDqzoR",
  "key33": "41MTPmFW52PixarabmG92UK6YWBfeqUBSP44sSXLtQZ7dMK2TsyzLYa36CueGyk2q1WPTF9RqCPUWjpQsuGghjQF",
  "key34": "3z3yvo4GYmKbb8Td962ZiyCGDy4kbTbiyT3HREpiqWJPNh3d5ozfRCFXnygcxfhYTkGGqAjTbhmivaRpRFhDC1v3",
  "key35": "42ALMKfaoT7ta2FaJwdBRPbxautqXDR6AJs8HET5Sh2CVtfV5ChCe3bgxgaW3aYncjKJhCii5tqE5Rux8B3yXWxb",
  "key36": "5qkXYM53HVrB9N8jXkHughvqd72w4SW3gnDFrp7uMKnBLccWcx7F2tomUjGhYxef14a7EHxfU13yzUXWEAnmbsY6",
  "key37": "4MhhoBbUY553PsvZnqDwbPwkcd3RN6Y9vyfN7Tj46g7qcDiyqSicnRhPaqHGthmx5t2VBSKtkDmzCpZeECSVcAYa",
  "key38": "3pv3jAxyDZkDRQZagRmo9MonVSxryAvsN57WyfmUyPbLPS9yVRCHVrZccr2tLXwPok8DwXD3AShFjua6VHMiZFsC",
  "key39": "SQqBDjvm2yRTAvLkXzSAg2vXQRLm4eLoPHsiECXAMFP6AdoFyxrQX6HNsmG19eGZr9ha4VWHf2SKEehwXFavfq7",
  "key40": "2hTKLpqNbTCch2g5BRMYbPXa6z4zyEhUCz42dRwJPhwHzeA8my1c3WiSks9rVnpV1eNvcPmCLy4q9H4p8kn518oZ",
  "key41": "v9q6oLiW9iGXkQTqkQCLBtPwWBv9a4uVF9GpoxpMsJN9SzYeGQYhw2Yh9jQmp93akcxdSQUxagWAxyVgkidcJNT",
  "key42": "4oeoRSneuiokiyVVbkkc6BAB5zZXfPo9nmQN6ko1VX7JDcWYWheDRSEX5nx32eXMQVwBEKXuAvbSbgyMfgttcvCb",
  "key43": "4yvkEVD4YF6RJdpU1ARJJece22TH5NDXh7UG8ZsH4U8DqMyuHYtHon7gtTtafJG22hupYZyE1faon1nGJ5wcd3aR",
  "key44": "2n9FEup5aXKQfToyUwb1tGkW2dq6BKgWv2E85w4VKrBioC96B4qWBUvNz8xfz4NJeiNRcaAJ75JfYqHuU7K1rEd5",
  "key45": "2NyJsa8Av9nZ7Ja97BaHrdG8XvNhUboUDRrJZN3KJ1UUo9A28hC2rbz8TS1vZet4Dpw7SJgryBPJmmfZXJKV95D5",
  "key46": "swq9Bn8qPorFQXkfoj8wEM8piJmZPhjwC8u7xmuirLEadAcY3ryVtDPE9fUBV44LFL5pefL1enQ7bC7Yc1ewM7k",
  "key47": "CseTuE4W2EcYwZXEp9rfAWxSNG7TBXVmLMAaoA7Zty6bGkn9M8kRuH5guBwd2VEpX2uCq8Euy7Doh3vXvSMbLK8"
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
