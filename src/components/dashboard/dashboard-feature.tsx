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
    "4iBC4KioeUYeg7wM8ru99i1bUj1W6rZMUvrczYABFaybjNvUSZ4ZqDK9GqnCLes3ovo3RMXqQyBsgJeWR8nYbggT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PkqPeYS3kLCxk9evUWar3xJmSVJj6qT1ZQEBCgoA3Xv8S3zj5eUugLrzp8N3XCGba8ipUDnh7eFmgKT7nvr6ZQy",
  "key1": "4oQjdsXVb147tVyJHePmrnvW7wt1GaXViZ398QDri7cDoj8EydHmQdiBaacFBjdjS1AiKWkbb9piMDT91dGxQMSX",
  "key2": "5hTmd6ghPY1veVN4F7gQYhNBpibZb77xYv4CHsGxwmvhkuknpr2MEuAjW4YwT5QJWGZp91k2nf4Fy4898p1HghiZ",
  "key3": "4e3HwZLQCE2xLFo7LRqse99kp6BCCK81RWCK3r8EdrUpekPq8NY1Tn9hi6s2azXEJMs3B6mjmBzR4UbawP8DTDZE",
  "key4": "39yAdPwDcTZ83bYmwiP873j3FVjZn1KKaK6tBpCURMdoVJmqaxd9ZZcnw5WCAoWEsW2AFkmnqFr2dczYgHnuCCLS",
  "key5": "ZnEkkLWNxm9oY1EXT4TheoKEF5yNLtkLo7KLaHGSS6wEjEYGGBYTU5YFfbz156K6246yamdtHYX91LB2RK1zJCH",
  "key6": "4jnbiUMyszhHo4FFpPVFr6aTEkdAsJqRkVAABYkMR6NdZD4wCTRkcG682AaHMLYTJ4AacxRcfRctfVaLVyj46GJN",
  "key7": "3gfnVr6VCuwuVapcJ4GxJmT8uqLSfzY9oR5fpQiWGXgu3wmPo2xmgs8xQovQXLU85JjYqEnkHRJBLKh2ArQphDqa",
  "key8": "2abVm4zeWFmhs66522AXqhxH5s3hiW72tDPmXTDpp5E7gE8KYnc3qbEUnXcMBDsnePyJNwavg2Y9L4TSTG8n5ouM",
  "key9": "2CzVRpPLqfHzst3bwAzXRWoBdSLG1iQGidtMj2GujkGLKNYuqktpKyac5TQzeFdyBGhuGT54XcV1vr38jbuksNRz",
  "key10": "4oEaQ2gwdqsdFqYBQRys8jZz7uRfDvd4DhhVFxW3frJG2jN9oUo5CmcmQGfNozsQLECLrVhHsbARco2GaEKh2KeW",
  "key11": "5m3DSCr5cboZskFXaZbvmGm4rcnCBc7bCgJnWEbhLukwsh3yt5naeScMp5FvFAGZctFzBvMiofNWi7SBYVbFmmVm",
  "key12": "2Kt571xwPZUMGEX45Yhh8JG9qJyxN2YkvYTQjuix7baSZtRsF5FKnjgpahvi6xoH12NvyiZ2dWAChUxqpoQYJ9PQ",
  "key13": "4MBjYox4F7cTe6mYQXt7fxsds6my24uokq7TPuXAGDkJFS4t5KtiTFtbT5CGqyf6pRjMi3MD5pxEa4ouVqoGGt9D",
  "key14": "3Hcv4ErqwWykX2FE9SqKKGT2D28Ds7AiBTpQHDvTWSDQAcx4rgG9abNJV3t2wTZT9wPFf96TZ3THSaBhFf9ssWB9",
  "key15": "QbYE41GY4HGUiVL3MTYozG3p8VcAFd8168GEFnKniRtCSmY4CJoXtZP9nuPecKTXcW8dd4Nxp7sCfr7KqTwBukw",
  "key16": "2iucSXnP3oanJNHDf1gHSWRZAbUBE68xyWEaFjnxVAsSeQ2Q7zTaBYBBqwg2fN5U2oE8Li5FM76ry6CCWqH8fUDB",
  "key17": "63AdydqCgBz63nrGnqojP1HEPLRoetuooSA4URDKpx6EiB8eT5dsMbRhqDTCH2jqbPVoKwvudYaf4Q8A6Nq3BTtf",
  "key18": "3HCqbRDZxLG4KeZAxXUQUAhpzYJTux15Sn4hdt11icdUfJhzxr56PiRzLUwVSDoaXp7dczgC33PJGsXYYUhsY5Jz",
  "key19": "2PJSvyfDmFdosWYc1DL9cEUZFv9dF2a5duqUnkQMSgaeDFmgGKh9iE2T5eDwowboA3mj9czjLwwa6eAVykk9kd3x",
  "key20": "4pe2dzm2GYPZWAK3Lf5nq5C8Qi7bG6VduPniCDjtuMNessUe9VD6DkJ7PWXmtEyEJ2AS3n8U46S9Z6rVmSUHC9tJ",
  "key21": "5tyj6o4JJaLSA8DPWfcDHMvYrNtqo2JeFEW1x1mLvoh53B8LcfW1DWVtPkHWZn6qdhTwYz2Pa3KRHiDSRXrsssfv",
  "key22": "3pF54saJJZNMLAk8nTMdhqSVQv2GG3hDVuoFkvGTkDdJBFkytV1BZK4PtQVBxfPyhgbU5a1RnDPAXraF3kVKKRCv",
  "key23": "3go9jfBYyEQ52UNfBSzvD7HKCTkDufgQjLzBp5M8b8J6yWKpyKYUWDXEu3PTfSLwqtYBpJwKSDkhWhZShCRonWHb",
  "key24": "2tHhXoEcN6334rBkAq3ABvZxFRLtufj2v9S9Bdue15Zu4X5xPfLDSJMaqEfTWHkizSC1iAsREiAk6uP6DMbfJeXN",
  "key25": "255gWRWTM4fbcGAPZovYK1HbHe4zpFFMZsAxAbiQSoDDeo6KRoeaMS4GxV9mFbAk2HibrikhT2GfBXorASuczdLT",
  "key26": "aWCsKsGcB5YsvtGaS2GSNMGdjvkr2Jfh7zWNYJUMBThLRLmrPb8Cf7khWaB7Aik2eCaNhkmarY6oEmFQJTfh7kp",
  "key27": "56yfTHEFB4JGT8mqLgn4NHye2AFTwk1FK8VGMGEKEfECV6Yee4A6QGU8siLtK7cLXBJ5Wra9WL7wu8CQMJo6EWD7",
  "key28": "2iNHrxYd6bupB1CZbyTbkPtuqfFZx1RKNQggx18acqFB9j8W5kydgv5bL4jqUtgHSE1zpdg6WX2yVkU7MA9Pay5p",
  "key29": "BUxTRHHLFu3zSf71vPPn6DAL9CwnoL4dtFaBW9PgKauYK7C5VNh2yAJ4LbJaa5ps7Faw5jPw9URtwdDZRxoDM5n",
  "key30": "5ue5WNStCukwYz54b87ywSixVqRxxx1b3hheRfRBFYn2nT4FBhmeaYcn5vjB74wVV8hJ9x5c2SbQwX4x7Q9M4Zmx",
  "key31": "24MCEBY3EVyEsEWisns2saYE7mzjAvmC8JKgg7DjcdWokCF9XuYZJVS7qy22CNi67mrLfwhnoNDXbN85eHCK99rf",
  "key32": "2ZunSnbZCwwGAkQPADd1XhRWf4RQqmprJjyNYs5UvKqMMcNpShsRWwLS77WJ7Ais5pwnYC2EBin2W92jfgmqgqXS",
  "key33": "2PuaA5u3KodTFGZqtkW3aKzhj3WZ3d7eZPKpHrWQW7oVLpn8m2F48rSV8mkkJ2Efkf24aonL4EQFxTj9Qr1ukmYh",
  "key34": "4MS9JrADoTStEf1cc291QzhNWeJcU257rKW7ZGmeW784fgyQzAHyK7BHFie7uTXRSzS7oir7QNoddwc7ktUHvZ5Y",
  "key35": "58VR85ef82iBXfqav2vCXcFp7jvwPs7qtDFH3sNMeJvdydxLRyT1w5GopvXb1Z2wTLah6wvAPApyXkGd9FXdHP8W",
  "key36": "5BbHEHWW3fph6qGq14ExnpheDWoJrWq1pTGd15iPSWyhCdc78685rVkCNxFdMU5yJGSexdYSvptzyn9qoz1BnQsF"
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
