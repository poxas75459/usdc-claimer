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
    "SfVWbzmBcLfLMUfXM7uX9gEozRptW8AAW6pqhXbYmrUZ2DgZRGuwPKbWxwBZXDDpF7Sq3GrNjcqUHvidUJW9chc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RaSJQX9omFT58hAuscQWzV9QSrZqrdefeWwMEY17tHuTTyqBZuULejetawtHez1iKtHa6PaYXvTs1GTyjehA1Z4",
  "key1": "3CobMrvXpdA8HiuspCVBfXHucSEqgRg855axbDRE2pXoJqJt4tXZ2xT7FnAtG5S6CM6UQoEYuWht6tCvB9hiEKW8",
  "key2": "2AHS6Yn9m7KeJEDR9GZ8hz6HZod21mnDyeiNwrX7N9XkSoBSVsNPa1yBmqqujhygESKFLJw6KbfrWKeVdg4JtAnd",
  "key3": "4ZH89yvkrDT7Zx7tPdWFbMbJgTm744FB3a9PcPZ3PVTWwhfWDygEmYpG4oVezmKVqtQDnUKdZBTYfoEvb3YnrBas",
  "key4": "c4HS45bYCKZd5tuRyjHncix7tjhjqeaskxH8ygrUkxBk4TDTrkrTJciwkKAsW23geczjQKxZiR82tmaEEWFXJk5",
  "key5": "3bmVs1VN6rPyRQFLGZr7dDGF3ZNSaTkPts8XwZuCFmkHSuMwcUwYYC1X49HNjjL8hKLS4c3fRrQjFHfdTQ8Q5HE1",
  "key6": "3iqTpt91C5jk6dNEpth8zLVpkjeX61DvZURRdeGcSVn6ERG2pxvArGSYY81Et37vZVx2h5WW4NH9JnyCLwrsaLZn",
  "key7": "4VekBHPGxs5M8Wf5kEBZMxxCWnRCx132YLw7Dmx9Q1ioroEprWrkLprZoo9EiC6xdfkr5jkdnP7A8FmcCqecUFPi",
  "key8": "tjcAcVqb4XjjwqJYG1BgeZoFpx3Gq41yD9ruSijYfRnvp5wdtNi7P6Ly843TvKVcRU1SwZdohxbj6SJM9MJXyGg",
  "key9": "5TXzWSVbVrVVnbSNrYrgesbSyhLLiKijoQHM4YgNwkceSeuX5bse49uPRUwPDGAyRL88rJAy9sG1W6PwK68Y9cTg",
  "key10": "63TRr8zVPMSspHCTAVuggYWZWektz2avhxZcL4SRt5Yis77ixbWTC7Au27vJ3tMXB1fqc4dGmF49B8WxhcgeEo3Q",
  "key11": "4KR1FFH8mVE7F7KPktsHvtPgk9DCGXsumwBhJtKYELopFkxGxTijHBpSeXn7AJD43s9ekKGESK5eTinn4gzULyDS",
  "key12": "3rF8MemHiXPY9xJ6obq97PvXyCTfPM8H6c5KWFQRMMF9b8mAQJhnDR6sUzUmKSAjPFzN64ZVS5biSc4X4qFC2iW",
  "key13": "2r5uDu5ZgCoDWy6gbBr6w6hEZkKUK1SNrvoHWprbtWsbMdprKRdDbaykb8Msbc79g2jXppZamoPYTYp1Udb1UQo8",
  "key14": "42R45dUcedFyZ9fCdkwofWGazahLorEemvoKxmfn88kaoz7Ztx8dUxDckkXBtXpCUMDujcfTbVCQYuSmR87R2u8D",
  "key15": "4D18v5NTZw6ZLeYkjuK1H4TwKGA32zwXKnLMHqiSWYtyzz6FW9PETShc4yVBei1x3WjYMTDUV9n3b7mAnCP3W6YQ",
  "key16": "28GVfcWMLiyHwxjsgcbFWDsNqnsrMW36tikS6XxbAAKkTJLU5ipxqSKaKwffmunYbNUEocqTATC9XJmVqK8ynWPn",
  "key17": "2sWMVcMKJ22WopBTHkDo9J172QcfQSGQcgeMHHi6xEmsebnzKL2CuxYoDwA8tMcktj7wk6hFx2ydxHeepVLmzA1S",
  "key18": "5UBNCF78C9JLKnGtfvdqfnN8pRFthe29u6j6H2dkpXHKjHoehH8X3D1RCJFm7gG572d56f6bzQ6aKSzTabiZxpmE",
  "key19": "48v3FRbibb5nkNS3h7AcSZJMHFyeQWNo7rDgZHK7tCZrAhySoyDd3J4TFHBk95poZej66yLn2gRuk287mFZh5Koj",
  "key20": "3dcF8eetiB4X3vZycAuLEp2Z952uHbHd9Ro2vEFEVPn5Nc6X8p452k81g1AT1QBgPsSYgmsoECpiqnSbhBn56mfm",
  "key21": "QvgM53XegE7j8cp6xb3tXBbsM8vGxr1DTgYkFhaQrRfvY1bjUaUHcfmnk3QZTof13QeKRxUbYP5fLM7Tgs9X6Hd",
  "key22": "5pxvoxeQJQuLRV8Pdu2Qsjpc6jWwSZCqmRn5wY2nfhQ3EogD47FuNjqRsvCk7PwxtLneUepqVd32smFYGt4t3d9e",
  "key23": "4o4nAav7gKACWvQan1Y42i5XwAdBYS8PxfpakHSDeKgXqkTZtZub22aXBQzadVLLfJkk2kbtq5HQd8hk2PsNNTjQ",
  "key24": "4it2G3nspx5orgmc8Lb1W3Q2b7c4PA3fWhACrzboY9a4FeevPXxSTcf1yVtiJpTyhwSVVWrpFWktW6bCt1sNbPzx",
  "key25": "4GVog14JoQgUtLmHZ4cV2zEPoRjah5bMtk42mqxkZRyKYRRMiDZbX7TjWiHEuLnqji4VPsH3YyA553vNKMprvdA1",
  "key26": "5JLJDWDWdb6wXmhMkDvtCWPVDEHMgHVDXp1YCMtjtDPrwoN85eqUNM6PsZ6TSr4hrhmEecUA6xUe9RB32a8cdcB",
  "key27": "2N3y921WazoGx76b7tSZ52yPfTNguL7Pdcui2yfpPMb8Q8hCvUHK9xCC4raGFLvLRCjH5dMSGgsQYkdkd8hkpTej",
  "key28": "65oBjEHZRX8BgSg5njcoRTUeXytp4xYUJ5XrTr2Liauxknei76srrupRfPaV4ZU8J4skxRQE5r3kmYeSYweHTEY4",
  "key29": "2Tn2rSkxKTmj7MUN18U2W6E9t8fDxFq8dApAyhYCi6f2TK1xcNqCsm92wLf3pc8jmyxPAcHgbLqujq8M6UctYunx",
  "key30": "2P4xFLUTnUsG3xBQXdXfFMVEjYjq6gdNip9hvyaf9wnRX5Znnuo2mPQ47S75V3dbUdXjraLqqjwb1cjZZBDYLMhm",
  "key31": "3bCatQEW1CKdJm3tY9D8nHnG1PbULtVRUfX8PTnwGHMhMvHH1sLiApLUBMoHTLa2TqRHDDc5G2rkUjUmWKN9bDHs",
  "key32": "3NicKvVzpQgv9r2VnVmYd8g4F3zQxRw297kzh9dZPPbxfW4bt4rJM5x21KgfrWbthCTEzrudKaTfhLoYptWsXArM",
  "key33": "5cmhcJ7msVpzbn5k1QAZEeF61WhSSBWg7WkdeC6FKUj5qG9meZUXoytYQ8xr2DqREuhyU1s8HfgtMinxfPbJvAHP",
  "key34": "ho6s1yeWxoD3pBr9FAtnvqqxyxGmNpf46igdJAzGrhEpAof2cq2omyPETGDnXoW6SrrGsHVxFcyH6cwZDoHtCVP",
  "key35": "2YgKzs8sAJpj1hkdsnzXRHh1MKNHkZ7LLLq2Kj9vB1j1zswV7WdGB5FxgX95wVB7Q4YCn3a9DptQzHKppJjNLU8w"
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
