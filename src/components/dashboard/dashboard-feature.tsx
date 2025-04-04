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
    "3wnm2CgjBjwgqpo3YYVy5Goja8tQG9JecdKgo7uiHCYQxyWKfJxdpur4sAR7nJHHksJi5yv77mjZMHzivPSTb2Hw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62MD7pG38rHgFrRGZKeUmDY5zawsJH8XSVcKQHUW8amQZvqKAF9znSxHmEDf1FZAHsTcyD3f5u7iqbuBc7LAYLNg",
  "key1": "3gReSrc6q6dDhnSQJfY4uwG1tw4t5Prnnb6T8gyy361j4hPwV2SwukymqpYoXnjeLJ7aXghjnCoJ9dGcQJHiNbyb",
  "key2": "5pDfe7eS6GnAvhXoi4hzSsRTsasw7T5eVJ26W6WmhR6SqQQtnzC1pgHJk5kkohE1RdEhtWQa3uBjFWo2hJYTFmnN",
  "key3": "5g9vzK23Z2NTjgz8U5gpdXHvjsXxgsWHgV7WJ9j9Hg9kP7yXv4ibZSA9tnDfiRu866NxdN3oP1cx4i2eKq2zo5zq",
  "key4": "3L3eAgsVYbBqzm5FR9KmvJ8hrHaGyKj9FBKsGxNiSTLdfpQAWUZMTho8az3fZDndLawBES7ZcXDYDMDMouwpng4K",
  "key5": "4LUoEiQuuHXcfvUDhEHrXd6LkqPisFsCNre1oGodoHKjCUUrZ2jo1F1Hw4TzDsThmrPKYK8Edy7pcRmhaY65GFHx",
  "key6": "2sa53G12BF8VawRd1DnqmqzzSsqxfJRpQ3a9yK2oDB6LasM9MNyY3UDeg647Jt9PBz51J1dgHZ2qBTJGaExndjvH",
  "key7": "UpGd1KGd3UoWByujWGxEgPSsutWvBeQ3nSbtnvWYCVdHRCd5UmBrghWWUPjkyYqUxE31uxGiF6KJqJij4hcPG8b",
  "key8": "ztCSRvw1fNpBHj7gyoDtiSFvrPWebctp2QTBuioTU1KNLRrCNGEwKArpZCtW8uuq4msfwxFLRKM3oCvxr5bY7g3",
  "key9": "3A1pni9c7qBUYD4LsCrWty8r9zdWqwdtRfAxBDHczUkyx9FGUoPetcDsM348BtFkjYqXnTNZ2cQDWhGMtEwqW7Zt",
  "key10": "qA4JuF2wZGF5mi7z8ZUdSiUEx1Bm1FLDr9cByLFNcFCmKbDHksr8Q6MVCD4hmZ6z4dx9AfwCUs11zS6mUJCGW3q",
  "key11": "ok5Ypk9aiFNh3jaBRRQfArpKKyCMMCchzRAmUbsEUxgiwpsPQLvfXByJuj63XXRQqpXEf51zpUsDcUr9T9jcjqc",
  "key12": "3Uwpzo3QmRKmHi2ywjPyJC3qHT2pYPo9a2SutnGs1CJeRuQqDGBiyranp3cFQvcPaGuQiCDaVH7CoX6RmHMJb47D",
  "key13": "3PZo2UJEWVYgcEQRUWrHvdJ17cuvvrkYnTsR15fuH4i8981FXGqxfbWMrdXHbVTLsZpEEsJ5M1Eow2nyN9ffiHn",
  "key14": "3xb8YsiQXv1CF3kCvZgz9AdkSbyQN5XyBCM8sby9JiwVMe7mmc2PYxD3LrofvZBPGVS6NYW9u3vXFuP7MEg2BsPq",
  "key15": "5cf9kSa8KzhpsX1KiECP4HKYXUkkFq3Vak7mMJ52FJWMqDxk3UH9eKyeZdgBBmWNhBeNNsAHXzzsPAsgu4YpfCX4",
  "key16": "5tNs3ShGj1fuuD6C7PG1tFQCzqYd2JBV5M5U36VpdQ8iT3HfiqTLuFQwM7B95wU8ivgkvFHbtVtufE6UpFivJm4K",
  "key17": "4REKZE3WgJCuwtXTaEiSEY6SSkwtjgmpG1rLxA89soq1v92iqhHkKQV5SQDTXoivJETxNuYcZLbnDg186H6BwR6f",
  "key18": "4ekU2JiwfxSXRLb8kzB92ZekcNLebHg4hudbW6Z3ETcASfEfPn4WUd5ByMzLQw3NeqbTB5w9XdcxVZ1UpmACEQwv",
  "key19": "8Kem6Uuqy7Vg39153USFyZojxvkwvfPTgL6n1es688CcHWGYFQzuPT9RRUU7E7GB8EuDK73JvfV4wUEE94JzwX6",
  "key20": "5r9G81sigZjqs1BxbZufZeWeTZwUVaqrrbNiuMeNqxdrz9HexEb1SQkRBmwiGCuhYM94HUcL7FUf8D85fQEM7dCg",
  "key21": "43mFLHf3oRKvCQwC1khvP8tYwDzf4RwmeF8QEQoNiKAUgPT968cBgrSdPqktvGttRPY2qjYTr9a3zbjeVAj1AS6y",
  "key22": "35zUvc2pdUH9nMeeXpVEqjxs7hW7pcdutmWy3VDyR8ksji8QT9GX36ebYNrgma5uejcu7UoVVS93izBQC42hUUNt",
  "key23": "WVtpRT9T3PpCZJdroramANKE62kRSL3fVMF8uJRBemAdUSDvPZPKSDKNax4HYhtNp2VwHzWhHXdBgWk5wVrhCiR",
  "key24": "2UQDCsExSyAkWmADhnzj9aft1PH6x7s439azh8F7ESLwHQ176A4Pcqk4DYhK1TtQnRUQYXdEridJDhjCaSTkDMxy",
  "key25": "4gdPnx11cQzNJFQesNJCEbyGN7fQAcqJYQTfM59iipVEd5rn4tKaHKXPPorGJHcKZUuT2o1UHU7XNnQk6U7bJYS1",
  "key26": "42VyYZDVsPjGEPLoKQjwnBMtjxWPTtSzCKR7xNscWrMSfZcWrGQyTaBidaL82hDHzZU6VtvxmcWds2pYT5YoK2au",
  "key27": "2NmQKi4mz7bnGWbYS9sM2BuCsBZZcBL6DAn2ocasjmLVK4MqViFrEu3X56oPdbwb5nrreMxvc4WWGELjDFLiAWrs",
  "key28": "5Yy9NNoLY7EVReDDmDgA2awLGLwdkv9eHCJW2KwHsP2iEzWEEGqEnv7NbPgngJVMCckf7Yci6yP3NwDnHa6r3c1D",
  "key29": "4VCLL8puMhZ5G7bZfJAn2CerKctamDfjGURQ19BEdgotxx5KJxKwmrTHwCzVLFiMzTPGYQQMPfsmpNRNU9CWhimJ",
  "key30": "2YrRZxW6ePNEEqHPa1QuBvSszAu7TvbrbhqweZumSGgATivtsqCcmoVMAcEhWZ9Def1Pg5zQ9Hf4rG4gwjepkAcX",
  "key31": "669ezcrsVnZhKrtwvdGM6SFqzF3mJW1jgPzXX9UPnYZoS8fATFmbKCX8XpJDY5JEcoKMLdn9nEZboTcyp1ujzmvh",
  "key32": "qxfvTWBTHaFtcfSQoyHpMyvpLqbiGM1Cs4pQqPmi3H3JHJTSXrthThYrioQ6e1ygxACw7Mbs3QTsahiQgcCnDLV",
  "key33": "349VpsXeocRYdeEJmsEwkAkCoYXa63HAEFmvDvN7feUk8xcSPdrnm1FMoqvrdd1rx1r6uQENEFwkCQrQkCHwPtHr",
  "key34": "3MFyXRESwdwAwAkhW5joKAb4iQ8farJt3BSLpYQgi84f7TqtjG9KyFX8jNU1B8KC6cpmqjFsbumKQTstrJBeYPRg",
  "key35": "4ibuf4zkRFEGJyeDFmeA8A8kgWVR6qhEeidZLMbzt2ZxouTnrZGb5RgJBxJjVKxvPrzsfhTS5zpnLT1hCavZmmBz",
  "key36": "3Z8RsFZmPVYbErCVZLcXBoP252g8EU5Rx28wXtQvsgVKqQwJwG1gS5B5JmBpFJQaAE8U4WxKss6ixhwVVUbqSoXh",
  "key37": "36urQX7dUH2yRzwFMyT4bMgjwgFcmyxLxF8mMNnHs5rgG6zz6ZDtDh9iMyxpRScnQNrMC8xAwCwo8vUR6um3CBXT",
  "key38": "4MNLL9Rcp5KPyweWJHS66mAzDoXZQ4TV8E5AiocQPAYz1ANofDeHNctvP7nx7CoWGCCX645hBgyqwHtw8Vx9wNg5",
  "key39": "46g8UjUREo5Q5G8bto3oSaGt5kqWm9vwc8Q4uFHWwe2zKD4m9R9qkLtN262SCDVZvgQkUouTiZZHnF1SESx7bepv",
  "key40": "3DnxnZkLQRNr43sXxknXdo2xS4zZdCsvL6oKcjbJTTcFi8Nb9u3sdRecyC5Z2AUue2hh3HwoDxWPdK6M84zhnjrK",
  "key41": "2FKdwYcae6LGZzKuzDrhxPXjuHr7aLVeQLJBUGqiwN9Rao8z9yPegXS7MaMTEBMtWd8xaVtcMtuLGSNDsrnruHwE",
  "key42": "5Lt8raS8er8tsqwWCkNgsECzZmc1Htn6ytfScFUipLcS7Q8PUFrm36Kwa6k5vvhFgL2o7Vj5t25326oFPx6kyMd3",
  "key43": "32mSfefVTYtnHFe2RS3cVNdnwBWJRMtgHKnSshbv9rXneoPX3mqBBBUryVfFarTS2cVqqCDBZARfArz5ir1BqSrg",
  "key44": "3J5omQmwvWHm6j4HeL7XhrkCZfp5vQmhuWMBYQ5kz2YxNqTVDay5EvxmpF35fHh3GUAUpHUZ5u6vLZNQ9mJuP1UM"
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
