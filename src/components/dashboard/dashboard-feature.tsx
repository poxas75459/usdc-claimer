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
    "5KQNJqWibQnrota2C89bZpJuKZGZbuALJeXNBiFCdZNC3uwJfswjm1bPsDWh4DCEm6SVBmNvPntZq1Nw19FnEt5Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u67CeTCLhZkTs7xbJ3E2z8r6Dd3ckjNXb48YXHGw6vPaCPiMLGt13zEqRSKXpairGDJ8XAemXcUdktT6ksL6LgJ",
  "key1": "2PxtLCEAiXXYUWXRkX8DZHEYpAHpo78eb9i5BNk7ym5Ajwz38FWCV3gGt2zm9JFqs4N6Q8BzswUA15gVSy2EBc59",
  "key2": "23VFfnB2pSHH6j2XVpN8ZSnNqvz3aR9qxRfRwFTFhG2ex5C2Z8dVwFDd3MXDf1ESVeEs1v8k1XWFU1UW6gKGoV7W",
  "key3": "5y5SpxW7iEaRk4wGxicmX22cu6MjaZ9LdcwuL5MUHRa3mXCmgekQwgWzPjj93cEKzBAonK5h41b9RvWintBCzU5",
  "key4": "5NBR6ci298UTfoqtFwx33hZcd3R5FUaEcWgAXrTeuAxMFNatz5xcsJx6YXmVukvogTHyVE7Q6atytACTyJGZiUcg",
  "key5": "31ZLKfBLgfaPc8xFY7gu83V7HjVMRm73RPM9RmohLojVWd52sdQz1uXNGAAipw6eFvkTPvEiamnhjNCbRx9RKTc6",
  "key6": "3yeLUcY3gM35P86Dp5fpF7eX5E3nKgLUvRXEHbJRC52wss1hfaKuHbq2StQJWy2g1pXnRJykppCiBS6pMuHFvBGo",
  "key7": "2rjKVoUHHZoThGQ4CVyq6SZf1NJpdB8LeBREt3Qr3Jcj9UwDXsNsr5ZhqVqhSabPvcNW3MWsLjMJHRftkBm5oY64",
  "key8": "3xBe3xePVakraQ7wrYkWh4kTpSpLgDELXUgUDxLCsTZmsU2DMTKLC5Zj1YHsiuXWqZP1yLvZxpoFfjj7dqMWNZyF",
  "key9": "3Y1xvAnj2YCr7sHKdV3MSx5kkJVBAwxMBiyV6UTtRvw3xpjtE4oY3rYgqNNChPLqupTRoZHih3vioywHVJnjPXGS",
  "key10": "5jdoayB6wNcX2S3dLYH3CqrDCfskEtM8bnTqCDtisKH2opteaWV5dbWYUaoucQcUwXbkaSk1nWsKBKTCbr695nGy",
  "key11": "5av9byttwG2ruB9yS2z8viGxVaxkbhxZDoXa8hXeaf5b4c5HH3mcUAoJcTe8L255aHNGKjVSLMXwXEY4y2pMvEX9",
  "key12": "29g4unJcRUVczAqNemnZs9xi7jaMrY8ccp33mT2iPJKTyQLyCcYbQZvFJX4fJvKxterxL5RSma7G2Ki9djuT8fnq",
  "key13": "4E4QGfkYF9zL9SQ5J4RmvG1TKCZvHaY6j9amCigYKWpDg4Gup3F6tLV6osUMMJp8otkf6hZYmL9ibBvKaMvNXsgi",
  "key14": "546aWMFYCsVJxDFPTTfHiSDEaGdgUa43gh8SmY19FcHEUeRMgeqAZysqsHD2T6wU4mqBrPwYbsAFy6w5d7eNt41Z",
  "key15": "2eym5RzNtFNn2FGh8qDx4PRmeTSHx8Xi1MJFAKKFtwhQKti6Tx3KRmNYNAkXX34M9M5ZXyNxpsKKvH13ZnhZPoHi",
  "key16": "K7UHux7ufXPZG3n4CwjEjnvVShGx3E6f2HzdEuBbFvibXLhZVAkEoLdqz3Yd3Sswu5T31eNqWJKamxGCzyKBB6P",
  "key17": "4aN7dP3MEJJSLrz8CvYLJvV7QC9SezCseyWR6PK4ui54kvQ8zUWm1wyzqCvvkPxiD7hQafdGCsu3K9SvFxV4iwmx",
  "key18": "2HkC9tRADhbCQiC2pFxjoJaBzsgXJ4GX13B7qqvLxogzJboix7HGDwrKGvxw9REhenY8RKBXmCDKusb8Y1mrSAtL",
  "key19": "5qkzNrxoJr951U8wkrcGqBhEWQBUwRc9mpZdoT6sRr7X3gQDQP6z94cHV219KSq3iWdLdfksQtUqmnhNb8Afnway",
  "key20": "61zifnSDRxkzqkdYX87BCHaMLs7st2sBsnir3Av2XLtJwNTpCsvcg7bUjKyrwiffTffxkswEs1tpMDKZVMfE9UGa",
  "key21": "5Lt4vjJsYVJic3WXiQ86rCXSGDsgViDdpcft1SuCc9k9etiLchGA28GoN1MiE1S2L3Gher5NZBcZMe8kqqnHqGFh",
  "key22": "LxnyLBypMLhaB9sdW7Pd5HAWinecug8KS9UnPZkTWYtcCBhz3MhGdWq4kXWC9647NcN51JT4pFK8gBErfDLkHVF",
  "key23": "5Uee3qiCmbdaiLGUVpHUGPBmFjwBreDNtJwot46PNxo4QbwLPPYmiKTDtZV4XH3f3bdUs8gYNN8KmCCy6qstTPM2",
  "key24": "3cBFsjTEmo8UYKox1irUr5vvKBBNnMiNMibioHZC3nPRTVjXeXn8YN2jM112v38eQ7sso1NLpHSns6S2sEdaQ4Rk",
  "key25": "354aVbbz7irQVDchBqXUunqh7jAY1RHAdSDFyom9LkHVnndUwuPwTAzJUNBZndQXz5vAZAz3dvZKFhBY11ScEJv",
  "key26": "2f9Btku7SPsWciXCyg8M2J5pYBFBfqUbfUX8ky5XrqC5bWN4pecup7dXQ4q2zSnKxZiuCvX9TSQb52N6PRE8mnBd",
  "key27": "4wRMxoytihaqjeTBT81iiyWb9UxodqYikGZNmaSMCoZZwJzphUBnxEd8Ff6TqRWomk16Mubtkyvq4dgw7kDaCmHL",
  "key28": "9GyAQvrjH19o5dkUX2Dxzd2KXMoJZqA8M1uKXynSzQ4pN1rjXKVCgzfcrfXQKZGjHYfLqsXfyS4cxwSafLyL9TW",
  "key29": "upKzRMMwpDFs9wZeDZbAWrztNZJjXU14sd5LUciht6oeaDhjxusq9X7XTdqmTqZjHVHhvY7rfv7koYxxfsfumWq",
  "key30": "5Dx4VUa1v1b6vddZ3MKbX2kR4h2ausi39v1622W1TRGTxZGy68PHyntghLkgJXDwr7RkBQMo4tZ5DHova5UN31pg",
  "key31": "23PVqurBTNm3vAEhgT5j8t9ZhhFZYzG1yFXLt94a6BuYK4t3qdBvW9SCf77zuFvVQcVCBkRmerYosuFR726k3Kr3",
  "key32": "5N6bBhvi9Mufp7Hvc5A3MTCuCEgcacebstz5RGf13eZYZHhcTeuM9qY8cEu445RcU3DwvtiR7PXDs3WRehDAHp5R",
  "key33": "4q4MXCyS3abjxSK4mME5amcQ7Rdwt6NByUDgHc7aRuuUHQUJjexWpxPqAwcxWqZsHis3itjA13cYaBEZHVpJydWd",
  "key34": "5LxqF78grywwDKkqgvs5re7EbykgLujmo1Sr3D45xiNQE2qusfe3LqY6q5k9tpkRvp37SjCSev5RkN5FY2ASnTA",
  "key35": "5XhUdTnKjgwRc9FCcnHnGfZBEd3iBAQqLQCF5hVvKAQE9krWQv26JopfSDsvLPQmNxkh738e82nKGhhgTnAuXgP2",
  "key36": "36ToZ9ug94d26eAVsYzMCCX64JjZ3a3SYqx57wea7e7txkQ2ZvGSfuQ1kvAyDsVWqQwtXr7Wyh7LToCMyAHmP9ZJ",
  "key37": "4YZcZz1FAQUPWC4X23eF5u3iqc2C9sH1Dxna5m4SzEdo1xo21LRthAvyGTNeHS92mYWmcSRbKhVwgxjDtNAYu4jt",
  "key38": "CWwWUMaUhZEjKYKsj5h5eeHV2MhbvUCr6jsPqm6cbVbRCrfumxjBLsxDmcd7fQC3kQkx97UeXSSR41TW3gj5bQy",
  "key39": "2j2e5dm8LCaUvwUwMvc3regp9VG6hgQ6Q5Uu6GjhAoHoUjaHXJvRo6JWwsd64Udh34Nm6gHkz75vb27XDLyvwCp"
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
