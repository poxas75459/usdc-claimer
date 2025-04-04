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
    "2E4suSZFMoCrba38LhbRZekKyYa19hBpKahsWsBDXLq9Q3Ee5ZEXDrEoBpwXcCvAxBVoC7D7oCbzLk3zxrSykf9K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AF9JmvRwNBNyZghPDR27vwVcqAEbKxccgnJ2QsmuWksfrt24mG4AmhmJjja95tnikLoZZPVtWJa1rURZRuuuewv",
  "key1": "5DhecwHFWPJ4ZwVMJNRvdLCpfLFm1nTPZXa9dChf9ydbLEDZxnCnm925AJGdxEa3ongne5epLN2jFpqjc1FfhoSD",
  "key2": "24zWCmVSVzZ83VgaCyPZp9JHPLCQFcrzo2mX2kbzZ8MuRsRikzD97dR84Jwczo2EnKLHHH5QVDLDvpdPS3zEZ2ns",
  "key3": "YF9PcQEGFft1YD8uxCoAXCwGrAoDyhSfgnQy3CRLZN1StcBQdR3TX1G46hmR49VkWSynJm1MCLFi1RXUJBuQExK",
  "key4": "3tNJnHZRxcGz9LWPkGovJsbWBRUEFBFim9ehpD6d8rMZmgDXRJUsUfMw98B3v8sFCR1iG1RWewUjEanzSsPJekTf",
  "key5": "13jAgA4DnfY2zxxA7cDbuvmPTBZg6PrdcruLK7qrsRoJREMSK9GMd7QKvJfzNk1YRwrGqp7cVxJwedmXjQXB8W6",
  "key6": "5RvQmZfyVgBJTwhr8qLtTT7zH9wPGdkKKRrX57XiaS3zUVj9CrDHhDznW97odt2YjJLRvC6zQRZMoW6ZmxT2niC",
  "key7": "5ZHAWVHic3Crn9ZCsD3ingWaCGmYA4CDnynSbWi1Q4iSDQLEbGmz98fzfiZWPqRD7GW5MB5ZstU9vqMoReRoAXfq",
  "key8": "3MHPujwDaruwE7mNR7o5U1BS6LJ7FZJ3MdtS7QRww2iusAqLmWz46MQgXSkZ4wqae3ZKtA4kZNB7A6dBmUEGvPPJ",
  "key9": "5eLgG3WB1YyXTHoFxQG1DD4FQ3TQHuynT3GecSD9rvdKP67qyfQDFYT6X49s2py8DG9Jwi7uGHF83LgrTNpDG37k",
  "key10": "3zPLy91DdmnDXmYeFM6kRRFt4auzVFRt1iaa5AriBm73Grq2CEWUjPR3b3HRRDgFZiArx9cPR32bRKGK146fLMJu",
  "key11": "282d46GaMb1eCMVR11zNsCNMgnfWY9SYV26toPyNboKuD45tDBxGLuBeVfBWtpxUmvsaNaUVZ5kUFWngZ57hudir",
  "key12": "5uFrU2CVF2qXvvXoTSi88GBJFSTKRfb4cYD4FW83rPCQLg8Px7pUZDfPKcHVUKE6EiLooL9HjCx5Ew1TEywQtGG3",
  "key13": "3n6wFNyFYMfy2s4j64KFsyykB4XqUkrLQyovrGVD8wQNpQL9yyxosPwAcGHKVb6gSUTd96aXrWYLpUxxPDmz3Zyr",
  "key14": "YhXFSUCt83RVc2nJJnps4xqa1cWx5riH2jXLfiLBzoF2rwxCjrrrmjmQvdBZuSkexHWdWwvzAvCy1jgUE146SoQ",
  "key15": "2kMSRuhtGW7bBQqwyRqgGDy4vqyM499XnK7G3vfHLJejwhfoUtqxEMVLoZL19FLntzCinLL1RJAKDiVYVSRzJxug",
  "key16": "3SQHjBswEbeqpBtWJUxUxu98V9PhBL93fKobwB8dxWnCntXQfbH24kM84tx7Qr9y79Nv5vy1cQQ7oCfuyBof9icL",
  "key17": "3gWccrqjTEXV2jqvcAniJoGyu97Z24mXxuGYHGnLFxr9SFZ6q5erMHV6HwZDuyQcSa26Wvx2ssvy5jpbdHmzEweH",
  "key18": "5Ynv2Xc6gXST4BsorDLKBM5Qr6FVu28dDuqtZ1xckAZ71bfWtsw1XWhLKYkK2b9ZKF9CHxv7ddgjh39P8Z5DKPAZ",
  "key19": "27vDLXir7m5YoyUVy1T2HSzE7efSK61rcU52FziQiP1j12jirjXg23T5b9oZESSBzHHuin4j8sasEzbnG2LdEd1x",
  "key20": "25eFdtdYcjMuDLnTvHdea7J1JgcBKt8Y5KAseVW7aoP5Cqna52gnE5GSXZP9Cu6rrgS2qiV9RJsxSBYrTFUEsFp1",
  "key21": "eYEH3Tv9hzH6KnfATxWCvT4MtgzyyoB8adgXWFomvhtArhuJjsVvWANsS1nRv19e6uqYN84m4Xjf1m8WpLdBf89",
  "key22": "ecT436PmigLXy59sA1AVFnBr5kD7SAp2BXuvDm95nmgFiMCGnCwWZpc9XBTCU3AxtEY4sosbRDJke7k6SURGJt4",
  "key23": "2XFvxHZ1jnN4FNC4jo7TDxn6o3eHmXrB9phKqPJe48LoRjRvLAaSd1rY1XtLmSL6cvR4vQW7BMK6iNh2XThMtndK",
  "key24": "4FKr3XRiPXzBFAYvRfqjqR8m7u6e9fDErVnuYjmCkxiRhyzRrXWmDmPhPDBP1YMkdzz9k9RiwujnvdpcTr6aTEBM",
  "key25": "3MsAh9QVTxDsEFUKzYhkovAGJrtHaLDZnPoccBghngUnjPX4mSzXbd2359GxtpNodytd4swzCWqE4pEBxyKdtx7R",
  "key26": "5812PPWQB5No38FYtNnTSd3bfZqvVDhEGzGZg363QSZ32GXSMx11dQmar7BTpzygDRA4gLZGzrgGyWQXpmFMo26t",
  "key27": "2Unj6xtgiSKt9TVxD7AXsAujKVs6nhHL1pzSY8gymXepsXLUiU763NYYySGxyczWoGY4Y65wsRGRPPTuaFjhd1ed",
  "key28": "b6d9Gsg8zckMDqpeehZFAyC6gKbKDLLPVnvuxnLmJa6bGSuxDY6pYWdoqTsCq4CZBvt2enJcSs4J4tfm9bdz9oc",
  "key29": "bPbEwzCnoiF92rucr6qgSHFY6UunJZrC6jTUMGWt39zzfm6gEDT7KFc9zBQy9gHttSMMt5f1YmffXKwBtjUcpZZ",
  "key30": "HtEko3RyFbYsejuEzGEjacyxpnniKohycytsU2SiwrVYhmCWd4gb4NUYKAq6a6vvPBVWDs7bYs16WBsuVJcevQw",
  "key31": "29rKVdZzJDhM4895xfy65jP9dr3f7WhQerQ1JDPeu4umPRfz7QTuDyF7zKU5YMZ9cQKyx9x57tpN1TmpKugyTyMG",
  "key32": "521PkjYNyQpKGkQM9xJMD8AavF9gncDiMFQaHAUFiFpUnH3dWjmEy6zRruxU856fxdcHQ4VWGxo6yTX7bGy1SWAk",
  "key33": "2VNNjcMZVUz2EuwU3aEhVEq6nTnBRZADM74MSfpXGETbNPT6SaPiRJTsNommCFPh6sqopu43i1QZHtfQp8wrgYoo",
  "key34": "3cLLbYukishWJUU28XCATrzvZFAePEnTULgHfU5WrYhNw7TaXKwhVG61EFx3stE1RU8mMkRT5HK72LreTsCjBo2Z",
  "key35": "Eia7AuzaeojNQ8Qbpgo1VZTP4edPWYH5J5RgKTN6qkK4XrQeUzYsad8vGH95aEtqAf2uqkNAyfHAbESLokz6f8E",
  "key36": "erb1qyg42z5gWDZMeF422Fpm1526M8CHDfwDWkYhpVqMSz45yvbQ87Re54BpUKNoDn4CnMveUjA9bYectPJUwJC",
  "key37": "4wBcToYAkdz2rZhG96Yj2GQRo2ZC2rzBeN4wJfUmmjJgUStxNkU854uqK53Cj5CPkkjfeUm4uVrC5RJAcWcZG66b"
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
