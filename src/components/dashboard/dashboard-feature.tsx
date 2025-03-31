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
    "3LMyvGy6a8gehWdNbQKihBS3AWyD212jP2cxQEhDGXyUmkosKncFpQZKs8Ncou6MVZTAEBHYx8avp2fdxY6vBx69"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uYZNbDthB2Mxdfn36vGTwm9sarakkuBMGeFSJBuRCfrNbveh6qTpfAbpR9CQ6B6LcatsRLyTcnWe8LyBVLTiZ1T",
  "key1": "321Tj6dv15bpVxFKHGxie91YYspKFMi59UG2Q2vmiRkLQ2q4aMVFFe2qpxgDS1btYDWArTZFupnYFbtZhdcvedrw",
  "key2": "34or9iTavsFVsnSwG7GYCzL8nigRbigo1HqTuaAG6mvio6jLdeytM8NksrrjmnXL9F2LWVKSWnDFrJh4d6fAn8YE",
  "key3": "3LAge2MAEBfNaiNNwVgSQfe6n7gDj3Kcb9UrZKVsMcjF4NEe4pgmT6RsVBNz1vTtUZRpzrX9bsWrGXZf8wpcqRYG",
  "key4": "5QX5CKD2tf6YcUQMmHFeQpJDf6TvXP2tLTQbfMXUabGUXKzC2bouMHqKwSHZFvv92KcsC3kQzqXFZwHSQgsJKpRm",
  "key5": "hYtf8jhXWMJ9JbFCwDGWcdbHhBsQhcDUihKf9ZRwRZarjMvPkYsoHuEUiSmZroH8uuPJqxoyEgxikAKdnACkwe1",
  "key6": "32XV8Kiiufv8iZ9DwHrayYfsyH8grXaCvn83frB7i6sUq5zZ4uu9wmPVKzYBj7B95q6YTTtEwLxvovJWEceESaCR",
  "key7": "4Pk9ggxPR163XMFUrRSrmUECEo38Qdc5ZyaK2mtmeTdd52FqT2DrzrV1vRPiqDSGBPa4A8LN7uGox5Snthteo6ra",
  "key8": "4agAXKtaTdnGUVsCc33b55dP7eeabia7qgbYmKa6foD8ErpjHM5qARo8rfvDkLT4JHMcPpXbk2GcHB7hZCYFveAb",
  "key9": "5qNCLW9LUykHTXeBibcoGH4QbcXfdmbTTw8qt9RRjPQewmcWCXx3g4MvDCtDC7syTsgkapiNb2sfCGM3LKzFizRP",
  "key10": "62msDbURg22r1au4K7NrdJHvDE87QRPZfSfRkuRw96TiHFpknJsQxNUuxH7Re1CHNEGmKgLUTnUKLSL28YzTacq2",
  "key11": "22UxJFST1HyUYeuCtKJPUg15pA31fEAnTNKt3RPv4qVc7i7WqnoL3LNMCUbvYMaMzYoncg1JZTt6drFETykTZNFV",
  "key12": "2bhiPBiwFWKFksDUrao24n64RxQkhTicMwNjZthNDMC359gkhHbLxuBd42rBcx7Y32dcVPUeUuC74uxgZ6kKC5Vg",
  "key13": "2cbk4yj3kp3DjsmeUmo4cFAsmVC8huTjeJbaPZPvoiaausk1vAhMu4UQPpLV7cHojAaq6VR1FcUsn7wbaHUHYjug",
  "key14": "5kLgpHjkYbs7a4b4CdQwLh5DVnoHB1WFEnvM2UaeckYbCsSpPw2gsW7eHPK97UjgTkwdzqQHWZar56qVnmNwfuW2",
  "key15": "3hpKQyYWN8eZJdHVDUbnczFYhafpWx6x7FpV5hDUs7LJFx2EBNyGwuVwrKFXQiK6W4C2udM7mr6KdVMZ5mh6uQVY",
  "key16": "62ahGWZbg3EuxznynibFH1Nk4YV1ikCfKYXGr7ALtE2vDf5pjJh4TShpjsj6VeSbtp9d6YhdQAWNQLgxReL6abQA",
  "key17": "5yAwfkUSrSoeNeZWXEFSmj68Eey2f5RtyzS71Zf86JMKHVh47ETqLPxxPG4fbAkRzhBtKHRAAwzcqSB7zF7VEqpt",
  "key18": "28Y5LjvWUQpG5LXyjjQekEymYz43YyVm3yWUmFg3vHz9Wx6M3HQLY1dByUALoNuirpcojkwdj3FyweCx6Pb7Wbvi",
  "key19": "4VTjXAqfJUibYM1Zn8Hz1LURt4qLEJw54S9kDsjLuT7xkYdCsQawq5TJ4Lu3ziYPjDZv5zxSUkFxqvwrZV2Cn9nH",
  "key20": "3PPs2tQNwtGxKvonMmEdyximBezePAGJ8qqRJbjGJND1LYyJBVomGoEK3HXuu7hzqmUtmBtGpHtCfscjWLP7tptL",
  "key21": "5dJrrNS2rsH63MSg3xc6Ux5GzbXjG5atDhrxVBz5Jxsi5FVDkEAfCNmsUKJr1jqRq8y2uBb79ATMAKQDGwJ4ptUy",
  "key22": "ccuznPfqEiK3cQs6Jcf7NaeZGLAJGALBn1codj82ag4xCsXGTeo8ghkHWvyENcsnGm6UXsrvW9Zy6fZG5d7s5G4",
  "key23": "2ZzH7tDdeJ9J9CfhJFRUnhskCUwgGjqLE156eP2rm21pxg8HwVhL339Whi9nQU8Vqzet7fCmG3vpnHVRPGvAcaHA",
  "key24": "54JoxGYRD76ctrfzHBBbvSR4KnmD3zJHTXttvuGSkk28oAyuf4oBLrQ5kSXq4EcVJC2MKd8qZLTKDmxZzkkhUZLN",
  "key25": "5VC2SXnieWPCYi4sRgbRvFDdyxUuQPgv5pwAgLLz5koe9ijePSdJ53wJJvteXqwfvPtWzN9dcmpEez3zj3vyAeWU",
  "key26": "4EC5uEK8yVwg2ueYhZhitJHwDs7vWuhpWtNinA9yzFT7STTqAXSjcrmojvSpQXikBptze4whbKNgBzbqguHsVQyq",
  "key27": "3FbhFZpo6Bcjb2YwqF5U6JdZcGW2c5GJwFKfuoRRQeVjMEeDZyNUEETNCJLNPkqzWvC8T1yZWf7UD1tHMABVe9cu",
  "key28": "41sDUTwC3kizAbHnNRgv7eJdwTyPURovVnYCRfzKpiSq7TfJPQ3SiAbot3pTWrw9mm9MBHwMc6ZxwdVSHMA3PQg3",
  "key29": "4kmMDkzhzeGaiZtuWxg3Shrhc1Uy3KQxZAxinG5Hj1te2Hq3dPeVS5PnHJeU3LgABHGrfZpqRodxYoFt1VuDqAKW",
  "key30": "5meX8JkTf1W1jus4URagpQhrccQ8yWuBUVq6kETah6Dh5yUCXXQP8VAxrqtPoiT5M3MExV1bXA17KRyV7YwQ3JM4",
  "key31": "4oM6reEwNLeT5sZYndGYBwkA7gfNrAH22kmfk4jFEDr6NRnJJiZTxukJ2ZKUvLt1qfWi7oZe7bqfTz3Th6Yrwe6z",
  "key32": "4uTCY77VSjWpqAXa19CxumGGgyvThdHietR9RVGPFvmpfr9uNFgfwSCrQ8rhhgXGHJ8fRwwTU7TZmj4RWcKnr76x",
  "key33": "5KqWftAJdMf5h8t7dm8Kp848o6J9stVa2U8KLLbE2EZnrt61ajgEnn6FKRN6eDh4M6dQaTU9cLtWz98ZQuSHKcEJ",
  "key34": "3feGjMsbh9XZmzQFRzZwmuVmj3MTnSnNUkc1SFawFDrPkH8hWNVnQb5HmM7DcrNhisSwqn92AyNjsfQeMKuNY4ZX",
  "key35": "9vBwqKPCiTn5zim4FP2Mb7w2L6bp3sSPgUTYCzdT1auQhtpSM3xv8NBPY1EuwUr5hSCASDjomdZhBgHZqfiRMKK",
  "key36": "4gtGH98Ekf1BAFA3aUfDGrMXNgbSD4m547exVuM8W4VxmaNwuQeNPo9pXkmtRS5taY3adtxPepQukCYBc9UMRbYY",
  "key37": "dwi4RDKrnuvnhsf1fj7Eb3DCJGVPEcPjc32XirnXz3cWWESqt4yS7BMtJYi4GdswjtQAFxb3pwTJDeNgNmUX4xj",
  "key38": "5vzrKbbZdsAPoA3aFYWhUAM7NTiU9UxU8ZajGySWapuecXGEcLNQRCZtH6NgFTqjdZpphSvWpDbYz9MnUGsMvgXj",
  "key39": "5eYQcrbRBmDJDr9rFhkcVzGXXNmCSVKfuDAud1sStiio5dEKjknbc5JihAAJsGRJZP8r22mr6PPEApdmQJD7rh1u",
  "key40": "2Sh8qwR3bSmAtgcZymEgjVqDyWvtFtGEikFLBp9anWRk3jg7kAx5R7Sim9R9y4f4hM9rDvzkxKgnwLhH6ijM491m",
  "key41": "2wiQ5bsuyaw2XB5Ygcv7vuhqAfvgH5KVdgpekaQ8mkvBS5vE5pEzR7N3JG1fZ2qJvtAujPvo2ymvjYqnggHTc9A6",
  "key42": "rfHBsyQsFq8nK5s6TPb1Sjib3QnMUBLf7fAM9KVrfCAukFPrcpom9vFPvS7PxYg5DgrBixSTNHEsb5MZpuPmjoi",
  "key43": "NLez3RXyE3T2iThi7Aqd6NH46h4JGtYPN6oYut2df35a3P9jPYURxQ8td8fDBV1ZLZj3G2DMyNscwdBH7SF4XeX",
  "key44": "3U13SuixdB6bHK7vXoBsgcy7qRf8h2E4167JmaHTeCAHNa5nrSNKxdX7CjKNqjouegR5bGTa2kw3FP2Ap32iFSHu",
  "key45": "v7F4rwZ1gmU8vt69ykRQYX8jDtfMLz4tbjeFsVA2sXsSpYKSSkX89LriKvmVmibpmduVashT7tVgJevaWkNLxhg",
  "key46": "2kVRVEp6npoJ6CNgUGBCRz9vbEfGmT3JxZ8jQn8dEDZcLQqvwWuHsDFaC2oNJyXeu23GdMrwTsTpLE9MYgUPrGYK"
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
