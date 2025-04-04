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
    "3ywDRyciULfN4ib8opNkG4tzMZAwHmzVXC6ThZJ5UqXuau7u2YMqvoMmTkcU18yhofXF5LevAUWt5gnAmJwLkaAZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xXrVSJ29qMz1sLuQQyC4hmZMnQfCSPtpumvBhARV23eL1LoTSsFozY9M5qCwKAPq21o8AfnzW6o8AJ44LLF59Ro",
  "key1": "mCHUWugAh12r3DwoUz1o3E3ZeTiwtX8M4UFkKNDT3dBYmUiV23mJKLhdrmQzhwm9CZHkWhS98akwpToAtQtbRSJ",
  "key2": "iSqRDd34YtYEKytBAuof5UvYU5ULr1VHQyszEoZtMBMVqGf4NyTFbE9RrPuaX52z9pkeKUWz4SDQLxWDNtFjfqS",
  "key3": "2oAxcNL9B8Hr6ZSzVJRx9MaxaWQh2RCe1ttAYMRZqWmokMyNaAm3JmpHEsKXzqoVscY641fBWGQcqCNzFisTrTAW",
  "key4": "EXzFvKqKtpCFSmckVu2NyJ9Dmp1cvQJGcowbdqW4XRCq5P5HPmvxP7uzDUz7xNELw4oBnFMydh6GibQwjvGzxbb",
  "key5": "4D29fSwSvbuemzkeEczdaHyHAXjBzbSmYm2VXHQpXeQNFbP16hGKZ69iQNscJHwABoXLn83ZY8aSCxP2ehHtds2e",
  "key6": "29PUT6WHVgP9UwQwfvZyshqUgvQ2Enipt9bfyXYF6Ffj3oc6t2uzUxAB2GbYXXRJAmpWk1mwoJV6Bj1DFHFoZSkQ",
  "key7": "4mZskZx4thwgraKGkxxdozmvs2ph9amUTrwAbTFjaj63sU4vCHSorwyKqa6gi8HhosHLR4JkN9N3qWM8wyHEJTVV",
  "key8": "4E8KvF7zvr5DvBabyHwWy5kZs5kJjHeSvsMLz9jT6nTA7r2XpzHTSgcTPcw8rXNaD7vD7TcSLgcjDxkH11Z2zbvn",
  "key9": "43mPiQqprzMnxq5ja2oRFDbux8fXTnfaRWZDdYpovVSG8Q51Kory81NHh5nyhFcGmBiejwM7LZTsahftbUZrFdse",
  "key10": "vZWTrCFkFnEPRm7svt9j99D41BuzzV5ewxPW3wgQws5yyP5MhtXLMKGFUxsZ2X47dE57UxAD7nkhJ7LGy1WKAzm",
  "key11": "3FoJGb27HGYwBRaxvAUkHRQQFRC4AcHHowigC822NM2h1PJhRPEcQKYT5SjHeG2Tvdiw9W6y6L63Rmj5hugResav",
  "key12": "pYRBW17tsLCvDG9eHet9z4JEVc3G4HtLuV36vStuwMMfZNPr847gpmgZwJbY187K4Avmz8ZfUanPx6JP52hBnmn",
  "key13": "5UWJjbYM2GPJyWouAtPBzEGRPoVwH5Ka3osYQ9N4t25dgprRRw5P1MDPwRLHCU1HbqGf2UCJaT4f6xC7SV5vUsAM",
  "key14": "5dvMvoxDNaX7cn5bnEayVjykxkoyZYuvJ3CzrkaSAzY4ATEBge3q4Kb1GYL63qLWQuapVrtdwK7GodSWg2auvHr7",
  "key15": "5zdXnDwMhPmAK8tsyagyDQBkqevJf847Z56Kh4pL6dEpExmPaga4DqmPvjFp2qoqPAQM5otKjFg2DzgeTMqhLjNc",
  "key16": "2KjT9tLHZ1s1J6sg4HTGUSQLvR4sVBhP4rp9hbfvJuEYZySspfFdfQySJXJfhcsi1e77h6WrS6wexMSWb3sV3apb",
  "key17": "3mHt4gso97VLwcR1aBrsg8rUjkBhm96Z42ZKJNscvzekG5hAUdDmqS3Eb1u1UEr2FMpKvFVHU4faPYbATes3gVNn",
  "key18": "4a3k9sCpZbEomKTz6QDWDyfA6HoFUkDoWPeqeHqJwmwMD6Qt72gryq9kH1BKrvQsZusopLDuXQBWsmmGWtPRSb6x",
  "key19": "3gyB72gnQnJoWFVFBWYVrgP4nD5SC4nzdkQqyDLfFCZLWfuwm33722qBe1QfmhLQBMVA4aawudA4XMoFaFHbwR9M",
  "key20": "5R5jToHtcgmJ6THJYhMUTqjbrnhgsJYCCKRq48exnP3ejvtcmCAgg7yvRSqR92Ve3PyH681cnYnkFEhzj18mniw5",
  "key21": "4fVquP6X6XqWkSCbt4iRvXpz29DuVsyrZ9ar95bTpRMbHqSk6ovBvdGS14Lro6dExXcHkpaakGD6rpzu47Fw3wsv",
  "key22": "9n1nciAfe2i8UtrUuiuHPGviCyVmuKQpUYvnvHLrq46VhpSfTFjzFhLDRasByVCdVYxcUfDwCbQqYRxswPvzVbD",
  "key23": "5RJEraei4cVGehmCoCaYfp9i2ADtpqxbzoYRjeTZATU9wX3KMnchCyGJ1Zc2qeTvQxy2AXN6G51AQqHh2gtsvx5Y",
  "key24": "4ZKJSnj39kRaGqiRGsWRYah784KhVvwAdfwYwdBidU1J2u5AeAcxJKiwkzzqhNezovzFrfKn5YnEZy2thxmPhxxU",
  "key25": "BdgW2cNQK2Xbh2795TsNizns7X8Vr2AFPhKMBHQ8Abae2zavopwBjRQ75XYSd9RqYyavvxmxfxdT6XVbSL6F4E5",
  "key26": "3V5VGZdBnAvRieJZBMJ6Kzu1QefVFpKguvRuDDdWQoLEyQHs1ZRM9iWRV6UYjkE2iQmCzWbig5XJUhtRLYhzoYYR",
  "key27": "4mZqatALe5vB7sLAnVHcN85v6KPx1Fk4pjs5ekjwJbWUGx6V9Hoc5G2A2ESrE4aFv5DhTm9X6rvyk9vLMoszWcF",
  "key28": "5AhfRVgveuE1K7ou8QqoPNoydyb2wPsa829YUNeC1dQFciEzPaLx5Mh6o36J6mk1SndPjoZ2qedfh6NkrBuvF9fx",
  "key29": "4jYsxasF2jtuDiS5PAo5JAsRQLx44jNuQCbPMzn3Pm5ubHAEnk7aHgZLRTESBBX5tcBgKP8TC4nPh6r2jydKYsGd",
  "key30": "5y7ES3SyUKwABMeV7CmNJQQs3WhtuJAYzifhGoVP7cnpaPsf1bLVaQ9vjMBiGMU9WDA1MZZ2c6S7aQ4hg6CpQVHi",
  "key31": "4SV7wT11QSEyMW6P32gmCD3FrNLAgNWRTBgsnB385uSa9W6vgMi73EsHk9yNCUMXJFQPso7RWnYjXDPufchjSdne",
  "key32": "3n3DP9pndAxRzJZFzpgezidxpYBxmFckWTvgioG9RzL7DvQR84JSpT6nYfM5uDUZQxQgPQj6EGzHRdabzW4TZabe",
  "key33": "66H9AQkLgJ6DXY3qbAuC8KqdDxWqMqTPMhkvnXeRf5UVCFU8ZNegtCqAg3qzNooqzutzz7oezxCLw9fZoqczgmQD",
  "key34": "3SKcy5XvVuWegHHWBHS5mZYqcVdtYe5a5a1YyZnmZAj1gr4hZmpn78waWrEV3tDjd6SLapRGH5rZ7515MHiQ5ps2",
  "key35": "4ShHQxbiAc7vSL7a2F5nyM7KDTnsNEMvg6PZ15WZXasmBzYz2UTNHBJTeWExxojYSdjCJtSwjG2L6phVXPK7rFUH",
  "key36": "5TdYsDU3SJqMrcXQuqqtf9KhVxeywPDQhTJfmK4KAGspR5LtGvmAuFf1shDjrvX3p87RzkZ3bhTQ7NWrseRYRKRb",
  "key37": "21XrN1Yd4zr9tbfrqHvs2A8WWoTynP4ekun8Q8d86ZgJmofwMZgtGrknwkep5mvzgNoZ42hcSNPvjpC9jLgt9oky",
  "key38": "ezxmuEj2cwxB2KqbKmf4AvHpmVY2rR1UVu3Bccf5fgrsagT5ot1exMiMrziXEkrio4g854R3EWFXmn2WLxDFM2S"
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
