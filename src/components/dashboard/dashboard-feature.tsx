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
    "38TbCKCYo23tQJ98kVWKBj5HJHa3MaT1NchjKU1S6JnQgCgipffYHQtgvw7Tyg9n4d1KtX9mtep2LGvVhMUFmyT6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X6J1Woz2YYwniNZ695SqTZhZFcY22jR1kAuFXFzjEcmnkaaFj6ZAFr3gcgne4REdT5wSiPnUMHmjiRX6U13c2pA",
  "key1": "KCQ58QwuHy7NmXcd4iLN3dtMY8dDcFVHetTcziM8RJLuE4cnL1V3GZzyytVMw4GKAXNfbs41UwtsFCCtzp69fu3",
  "key2": "3c9mFcCUBaL4ntAj3JRUiE1kLR3EhrxN21q61jmgtvt1gerosRFUySzX4W4QoVUNTvjMRPLbHY2CGFsmzwrW5xFu",
  "key3": "2KTE2Qt3iam9KbyUafQLerhSgHfaV59CbsQo8jgpLMvFMvaBrX4pjSgDFHXeh3vUQyQzduNw4enDr8tNgBjyZFHB",
  "key4": "yarWn5moVYX4F6T7BHRUWFx7FwBaMRH8qDCcVm3iakSrtxVDDf8mb7iHCk6KZYvZezUbL9gjPt9VRVrixGQBAMB",
  "key5": "yHxriCbWLNR6BZ6KYj9NcurA6eFb43CuYehb95AXx1k7X8h8KtAWGeHKrLPkp7pWbRLk2XFzQYPWM88G7RUQaGa",
  "key6": "67FQ52wXDCzhYDsumD9GyvyXECHsEmuHzjAndi9oPVyUWx6PXtJgEMexsTz4RhWvAWNSN9EjMh3f4xYCRczDronc",
  "key7": "PDd3H2FQThKoQwQdT4pVD8s9D9YcSjsRMTGXhSZDXnZLmJXAs7bG5gG83zDgzerxE2DWT1M5BmV28LytgjmCXHS",
  "key8": "5qzHGVj7yundHinkTpBvbLyx5n3hpwoGSwctin8s9q36wTG1GEs14Wv6yVF4tLQX5hA5kvwLDvAXZtiu7WYSSwuX",
  "key9": "4xf6DtGFAHn8ng4wMqpYDh661xtgZHrVbZ26AozBwgH8jyGGwXSBkp5wiQKcmYEE1uUNLEf2mHk2W9jYVCqa2B12",
  "key10": "5fFLJZC67NUUMoMP7iRK6PaZzkunG7vL4LXGMrMGPGbT8QAceW7Gp6ghWFjt6WHJAojEHc6V9BArWhFevVhELXt4",
  "key11": "2JDabBm2fvcRVQya2CMn2qgRwo5sdjXwmsLdh3j7NY2av49NWQdvU7j3ey86P7UCcyTsH21SYn5RtzinLQax1uNE",
  "key12": "5U8rDCSEaLuYuk8fbvY4gGBuJb4521yfTpFsFznb6cVRVHdemS2KawhJZbxveR7mUw6dYLB5u1MaskxkKdSSvRcm",
  "key13": "2SA7FkfmBKgsDxsMMLAuF6WEFjxDE1rdsFX7L7q3WcL7br8KHxQZqeJC4m2kqbCSZz97xZRHY8RHjyLkU8PwEn7Q",
  "key14": "3vwSQs5btjAFncGb5qkaWPj5xJtwPaAeez4hTZR5RQ5Wo51EforiGHtPU9ELGYqCMcpZNEADMa2p8ZgczLLtKAVf",
  "key15": "3i7zaeN5M8HmmpExYcAW5QqxLCwUrp2nGWXNAy2dbNuSniugT9nDXZadKGLeEas85pZ7zFFTRvyYnTe14Ua7MNGJ",
  "key16": "2EfiXMSj2afs5ZbZGY6HPyffNuQJZrVDvddSrBfU5vukAdCTzgZXrqhwv5BDZWxwSuh4dRUGRFhpTxAxrWH6gBSJ",
  "key17": "59YGMM9unJrMVJkVRyyL3Ygo584mAbLauLmCDzp3p658m5oJMyFtR9M8nmZJn5pZya5pN6aHnbsf92E8njJB5uBa",
  "key18": "5ifXcjep1js4DpG4wu2Ky3Cd9GcmZD7wHJNfBPfYu7DQ4Y8RUUAAgFC6oik1DSWnPFm8n7pYBjDGih6gfPtuhtMx",
  "key19": "4PVaTPTtxzUfSvZ7ZxcVvUY8QnVw5jGGDU5S1giMNXV9SpsTiAvFpKHo9LoFp8Si8Vy5vGdjN1twDxQA81YGT6Nn",
  "key20": "4GGxXuLWU2KJD3x4SNzjD6tz8Q8g4RtWE1TrzwnzoYR91UF4GUUoLmVT7Eawe3UHNMCfoXnj9czN3cRtjWs65pLz",
  "key21": "38jPS9Q84x4NUecj8YBZxWe86MmMj1a6LXTevCLn5dmckiVYKB1Md64CNAhXemz3tU5N4C1HcK92Q2e72vqaYQsK",
  "key22": "2uycV91VE1NqJ1MxZmz31ybU6i7HStMBEPV49NpftiVBNaVSkfzpGPEDc6otiE3AnHhxQWhiFur5gXNR9k6G94WH",
  "key23": "3ypvfGihnUZJA3nX17NTrhbtaCpdeYP3fHsUdJsqzrik4PQJbdAN9BDmTBWqC7wPwrGsqeFBu8p6iBpdr892R1oY",
  "key24": "3gt9z6w3tK23eYYAyKaxmyYNbfPZ23W6Qac2LEhN3JjHwFzQo1w9u4Rr11XsCFyPmLDG2cDyisJKDUZkgZv8uMfc",
  "key25": "2cL6kqWu5U3kWX1U2ZmGZai8NTfokd8ohpaXPG3PVZmeVrpXRuVVThPoWfwvxA2ywMuVcjjM2cqnvx9ZdvJBNQMW",
  "key26": "3Y2eAnErMRLqcmc96Aq8V1GHpo5HVnaHmkhKTThG6S8xcmfFhVD3pQy4fxxEcrm4CL7pJgZgnVUzLgzqfCvgQR3P",
  "key27": "4YgdvvjqorzLaUxtFXUfSRL7hJ52iNsJrL5tgvGz2ykvsjfwHpUN1j6FUBE6osmkofTL1vP5tYhdiRgkYKEvByB3",
  "key28": "2LMyC7yqQwr8dMycgdfHdhzE2bAf7aL6i3jPD1BYRRAFZ4fF8duzqrvzDvCdefz3dCyvhpKi2kPwDTVkXCbPXfRw",
  "key29": "4iTbDi8tQs7qXkgCEyVisd9Hh821cam2CsKMQUqaRi26gyurg7M7ipYEbrHfNSdk8TTd41HnAUGscsgxUABQ11ci",
  "key30": "2uqh31SEcrMBogR4TX26zawd4H7L8MfR3p58LuDHQL22XeGxrmqnCQNm4M3f2S7QZdyN3uyS8P4otPjqKEEYoAve",
  "key31": "2TfjaBuvnFpqzTdHSviE4vfeHBeJnp3spuH6xHLR3MDuCB9xu5TzWFHa6DpUwqPuy1CXLGXaXPWYJ9HBL1MY8dXz",
  "key32": "53kPhgHkdqfR5fhpc7t2Cz24RQHCSa89ivdsdJ35jMHcUXPEa4QxfsZpFY2ySSPJcyZudrXjvdMsrLLjvgd6Cmro",
  "key33": "5qKNS73YCsGv8wA4aG99Pnpfsj8LqYvxx39Qw4BLrhkevBMnHknGBhc5jb1Lf6YREiB8bhoQgCmpzbcN4XKqGF3L",
  "key34": "23kphvipCAa3fjdgxJRKuz1yAverBiXzqJk7EoE3K52B5Nkztg7bVSBbQdkhXtpZ8xrptmrxcvkij2LgZ7pPAkgA",
  "key35": "x3YhYjdJ3ck8FoMjQYWzBjkbwanXbxv7XKcaGz89HLRGvSdx1NtDYBKxEivg2iTbGEDbZRCbLKZCpEsUuM9wym7",
  "key36": "59WV7oswQTunEJY14RP6jkVYnJ26LPYTiavdkdKhGocmEUXCecagjSdPKhLyW8qGiJwwiHm8AfowBwECBQBw9eA7",
  "key37": "5cYHpFNv95CvPmkj7N6Dyuhc86XPGewveyT6ktfyyhtsYjPGa4iva8VaGKCiq8Rr1ZVHoH83nSWkJiH2AuY8QnMb",
  "key38": "3VWQMdM2DbpqdAEhPHgXx8rna5s7H43r9JXULTNFQ1nnV47qhJ5k6tsrSX5yAPuufsXLJfiWdiKpoaN4GGpPoyTC",
  "key39": "j9KFHz3vrMg75EseYqSqzDMFhBAq1zf1JKR7XHq8RC8qTtwkArrVctm9KHygNNoBMEAAG4KcxqiAvaNnzBuXwM7",
  "key40": "481ipyRMyY8N8bZDZcN4pxn97SW3N5L8RQDQ5X8CVFYB5RVL18TATYsJpaZQ8VP5Bf15Ep29Vay3x6Mon7J1hzHP",
  "key41": "5MYowHzj3NUcFsTsiHm8C9XTsP6wc3wMTRPMUqU3rVTh9quZdri6YsT8uCAdqvxTCHKRcYTSnQqbt29eGREAM3Ja"
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
