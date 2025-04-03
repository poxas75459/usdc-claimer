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
    "3TkYgHaRT5zsNjkgSRTBr2YkwEpp17NZoC1eP51jM7sMnUXspxA59MihGesoRJ7PvrhNhHsSLHdh9zfiU55Ny8HE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WtTo6e6P4WFKFEHdsTiDMqoW4XcxFcxzfwRK2XhmKFYaRjJTai5JYedRNXUHpBfXV31nDDVqUYcfWxg76c4MsL1",
  "key1": "43NDjQPuZppKhBNBYdeS5V1jPJCBjVPVbdfHujFRWFx7Q6Z9kzsRJz9ipHyMqEG9X88aC2rHRudcAua7TcBYGUEr",
  "key2": "4KrFhtGdR7qRTYZ22XaUzYP2dWUQAF9Pivp1ngLHvHMXFKduVrRDAhkLFgqyp9tFEfXtNif8ad8pkBaafp3XaQmX",
  "key3": "2QzXH3avVJNVaUmUveiD1iyfn4F9spuxtE7F1w2xg6igUFfdT5CGkpbtx9L47TjUtkG312BUE21fqUPQPfH1Md2Z",
  "key4": "4ApJZvDqRHqnysjoQFQACfqiMavHXLv4yizJ8j93LuCRuS92U6ofRYDHdbVf9S5oKt3uzdCFWRyF9Zfpc4KKxBQ4",
  "key5": "2PUWknR6Hvp6hK3BoBhTSoviyKHVXyPqpgt7dQ7d9S4bNQKDCpdZphhjYP5F85U6RRpzZBU8YsdwvXxQJCuCQ5T6",
  "key6": "644GWY9aKXEQYDxNskoAZt8Pvno8Dgx9XYGZZHAFMARy2QpzJjATPgSfCStuhjmdLMnQyNAaogGqRXyddRoMViqb",
  "key7": "5oq2x3TXUcWnmcZqPTL3LociWGZBXZ5tmDWA2jwRk1BynPhgDSE27xoxSFaD7uYTezrSqgHjSkWpzMmXxFrecw4k",
  "key8": "4s7qSaATXzgTHf5yroM6bibBi72WsQTTWS58xqpusqbom9LcHu817xn6egEuqxdCWcsGrFkpziFDiTeaTBbdZWTV",
  "key9": "31iMkrYU574hnGb6DJ5qRFFtsAbc6WjWNawZQcj9egFC3HarE8Cj6aAv8hBNoosskJsEtqMZfwhK5JNt2vqup97m",
  "key10": "4PKNvNdJmJRMPzYoCB3JNAMCS8ms1MbxN9BAyDDS1j8vi6p9Rias2g5kXLgHswCvokL6DVY65bYG7U66gAQcD5XH",
  "key11": "3cvamkPjz7pBuWnAxvYBPN3pnAzojtRXT6vANvU5K9xPdobRuncF8to2yDFCwAtXRGGMGZZHcZigodc9gzji2nzc",
  "key12": "4JVmPfLw4wCQLrbdeMCSvbVA3LP94cALh8EF7CT2XtFjpJGbqWL6cTRF5iKsJAb2m8ha1FNjf7uibSDhRsKr56Zq",
  "key13": "5SeCmNxRCMcxtbEx7KC5c3PEcWvAGVXHVEbhWJRB6JzW6iuchYFLq2mci4eNW668P9uKmtfbk2rLPPXewEdHsDnh",
  "key14": "PcRTG11vi843CFpB5bZbwUzgFsoVTocpvfaNeGwNLFLTCT6nGgE7TsvCnVmMMpaT7Zi8UzbHdt8RbQphY8MnfxT",
  "key15": "389k46kd8yWpfbdzYq9MeYhUyuSPTc5auB8WsKqgECqru1VZ927nHWe9yE2raC1Uc7uG6izxhatXakycvGffdN6S",
  "key16": "3Cc9iE9yZggQgd6Aw6dBdfPLWVcxC149zjQ6hGmRwSkUf3ff28FqEWpnpmLw1rUsAXpS8x1S6joFVhPskAh72ECX",
  "key17": "62bmuGgQYepy3z9c3bPkTkp1s3tukog8y97bBg9wz3xBey7sWQu3vLrw1QAxebVHx8ede1QtdMgbpxgmiJDDaRiA",
  "key18": "VfVBUmGaWdVGfvaxnZE6pKAoiXhxqH5K72L3zFs5Jwkt4iks2Lz4ehAJHEs1gRkiNv5y6z3VLx7cDaVrk77RQxP",
  "key19": "3hhWuNYjqVxU7zR4MseE3Pjg6LcaPefMQbCywHp3pG4vLwMi1mzK71ogWTRhUQRrvXyE76CNyFgAA1sy64WKEnAu",
  "key20": "eU7iBvkN29hkPDXAneAVw98ABoqFEGy1GcgrsHXBnaBYMT5ZCaqN2jfoDN6TfQPWXYjoWUhtFxCDg4uJofAxR1Y",
  "key21": "5kDRJdF6pybrG4mMqTrGSCe4zvri8Lqg3XgFkHjatvnAMZR3EoR7pq9MoqPHbutUSzBhRSk9Gp3TdhFqzzBoeJPK",
  "key22": "bVocNj4JVsS1MhhmqXhyDbVnCgHjXMZ2fNx5ScBeiw5bN5wtf8nF8rCC1D8peFt1eb8y3rPZLJb1aV7p4YNKas7",
  "key23": "kuahZEJ93eTerNeiq1sWnvssdHp3KjtBCPFxuhbM9HSo5JahzqRAkfLrajJUn5UHpG55pb63PkwqdzuH2vPhqHa",
  "key24": "5VvrXx7cLH445DMeawkR4GzArhyzr1oJVHunFgxam55XEpV7D4DU3vrmE7Nw2v3EmTYSUZfKrvXDs466f731esu1",
  "key25": "4te6LNCfcakABZzfTmxtvSskmW6dFCdfpaWHWryCFUhkzWZefeWRuMtDm3TMnwoGcWt3i8SCy73yWrKqoLMUPGHB",
  "key26": "5c8HFmopfZdE6grCB7Qx2yCNt74FU44JLTHRJi1KsZtmVjH5H8H5UKRxN5yQgAo7atiLdnFkhu6wgGRVcn7bVdSB",
  "key27": "5xqjESE1yFevWsSNygg2Vwqsfq9jgBWE33fWd6AJsovA5BDwafjmXxgn5svCDBri84MWbEj6FN3jDAvH28L4eKzs",
  "key28": "2DU3TacuSsG5Qcwcz4iDkn9QTN5VpGqBRdKgFTq1ED1BUoq8Jb4e2XdxUcsLyF46RnSuK8kX1zJFHPRcw2rTh23D",
  "key29": "2WnUigenNnhDyXFvA4SaQ3n4uHXeD9ndHVYAdz6iJfRtngp8QLcfgPL74FAZJEHwcK8uBkeX6YX1CGBCq2h5cpef",
  "key30": "1qnZdNfNioDi7nZPnej8d1r94MkqFPmAo46b2FDLgUAVX9Rmy3ddHiHsNyp841oPv4itNSr5VgTAVj48SZZRqRQ",
  "key31": "41uosiuhP8UxvCMU4geFNQphVdEcXtiNoA6iq2PJBpsBw8htQqHnquWtjq9izhTePVjEFH8ozVfY3Ge8UDrxWQTn",
  "key32": "5rTNTERtZXgbPYYbQrmcV3LoAMeT5icoTevfNq6v3Kg1ZacsJQELndSSBSLdDoW1TWXHmvpypTNrDuzWoFSYPzrf",
  "key33": "4enFwuP7DX5teh8MHGbnbRNWyuw2qfRTV6WebSgNCCbyEW5G1PW4kHJJLoH6HB9ZB7f1CDeX4ijP8jCWGjDHSHGh",
  "key34": "3zgubmJGecjeaTTMTAFMSGTFdC3WbadSXTdLukCqG27yS8N6jJYjrKEv3wxwCd2wZVrjq7EQ99YzofGGbayGqgHt",
  "key35": "3KBnuvXtcbn3QkKJZYuZwXr2Z22wLJBtefCuu8hv5W5JnVk4JfQrhMUhWPsFFpdastrbjrP2TpmzkwwmkANj57Wu",
  "key36": "3mjLLd2td4yfTmXCKor5VAVBhNTcC2s2uEuqcYHo8UmVem8Rp8asqBzjpDZRRCcJW6QmjZqPA6qXX19kHQZk9CP4",
  "key37": "4WSsiji9E4dqELcyaqbRxUnr6G1dUrX67H1e2BY3Sg7dytxRFgWbbr8wpkRRr89y9RtQa74nEXKF5UsYAZs1eZzw",
  "key38": "4NvGSb5pXFrnKFHnXbwRFhSeKt3LEAvcGTpj8XTbfCr9n6J1HPcyYt95AUBVgUu7ysSq4b3txbrXcqWG75qtkj4V",
  "key39": "3cPGS8PuvKu5er8hF3CPJY5PWETyXdPzuaV4u7gbCr9gtSpwTb1cWgxbHtUydxnE5WbQVKVmWWnJaXmZBa6UXQn7",
  "key40": "5oupfvpEdf2ipnXLtN7EgRjGbL5AsEnVauuAg3rYLP6yUiG3MtAgGVswSGuYBHLDz9YJnex3LqXvaJoX5u9zkJwn",
  "key41": "41DvnHZCtKsJM2Ktq2coMrhoNAezCrZsBcTnpyt1sBxXPHdnGsFhyLbdLWTXrKGLmaERqXwg8Q3EkddCB2zyWuY7",
  "key42": "6J4TctwMRaHFv1nz7KWvBA89Nbo6VgSvJmZN6n6AfPAyUs68mRCbLRBPTPxzmj9R4qShdn7ez3E5kjNP8bRTqAX",
  "key43": "4mwt6CeYBg3D4u4yeayy6rTfV9wteamdFJeFU87yksHH4moftnLHDGYpA1RPsPXamiy7Gxyb8G4jGA4bjVkzmz2o"
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
