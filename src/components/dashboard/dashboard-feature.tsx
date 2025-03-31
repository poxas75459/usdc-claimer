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
    "2s1Pi4TyP1HGFGkytqUrHUa4RUDSL8LJ9HVfL1oTiLPRibNQXRWWffFqtPUtgRevvmmA6JZorD8BGqawZbuadBAp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dMMFJCYj9hPJ4DZ1gh2VWC3yt3TNxckuvUGWmpZihsPd2RCSH1cUuwKQDGeFcMUUokHhvbEjVEG4xBkE1rLAU6t",
  "key1": "6Adm5MgHt5ssArFJdJkwRNihXG1wMiwfvA28x5afEMaMcfndDVZ6CSx4W5ZJdMojUbAzPDhqEa6D4jr99q5B8oQ",
  "key2": "348mkFEkEGC2GDcnVAzWafZKQvQCbQ9pvqKsMmNLZWS6DBt5dA49MhUzucbPFPgEhz8yVKHWKrbviWbYBPpa5dkq",
  "key3": "CWpmMvpKVxbYAXcrAv48P5VWChE1jUCVnKbrMgoe1xLr438SpFS1acuFW9cBaAThjytVZVsfNXnJyxf54af8kYb",
  "key4": "4H6bxw9r9BkA6XdHUMYRWbiRTuMuK51Ym5HwnZjj9cJQayWafWHda7saxwRPaErnSeZMwmxM3NV5E7UwjsyQpYBD",
  "key5": "5CrDF9qbqbXES1Mc4iVhPrJGvgjNcQFKoMkJh95X93A9K4L5V5QBJDeUVyGsmXEDKR43R3uVp6MmePyDCWpkxN4c",
  "key6": "2UHYjvtXvxDkdRju7bS5LECHDuMSxjyVK3sV19P2JZ5dXPaYhcpkJmpCBA1YJrCTT9UrULcTZy7fioUk4vsWjEbi",
  "key7": "5BQ7f5Y1WngJbiPd8TLAbH3rfeFYita2nweAohHdoer9Rbgde3fEUHGN6N3RVxXXWp1msdDXZRLVAiBbZ5T7vvVE",
  "key8": "g58UPmc5j89baqB2yQxV3jbeevu4ziif8w7oMVvLMXyKU1CeGtuBcuAAyoNFnPA64UV1HVER6r724nsjjfdocAe",
  "key9": "3Aomc244JCvsQuEnXBtzg2RhUJh4HGcrT8fS92CyNjrNTgy7zwvFrMTPz4AD7e9UtgLqwYa4kvH1AfCMDXm5G5jB",
  "key10": "HqQNxUd1n8qnJihCjnXRNYdsbTTwH9Rw88sQgiK63AYkB3XjqGzVYxTqXc5nsnsC52WHPzz27iUJhN4qen5fwgT",
  "key11": "4f1sWMCoPAYBw4hdwuYywYCazH2BdE6gYgy4k1A38C5pMiEDhtGiQ5xX86muZQE7sZe5Z71pDvFkzeB7rSNPtYm7",
  "key12": "4c4SvEnBUPVvieh6YESwrQaqGhmjMSKyN62Kepg7vJx3PVLko7yc3jzyxHkGLrv5afVWf6RUSibFDTM5CGUbRF52",
  "key13": "5NzUpY9dLnRnfzPF7cBzscm1MkCFsomLijAhVGX94qKLvXRkRsMippsJjMvJNZME4ZwrcUYfy1btaKiDC7LK8xea",
  "key14": "3ykpj5NQTqxrzT3XZEaS2nKaPQHXusHniTnpY6uGwwW8Wciy7HSTLJUGwFh9CAcvVCswt2sBohRXJ8qg2AXi2Ati",
  "key15": "6PRpmdUc8hKZ2g8w2YZ6qqpY6bQCRJ38X3dK7GpwquT4W17SuW6GbhJZ3nFLTBsq9jGxeJNSsHkT32GAdFLLmVG",
  "key16": "d53gJEu5XrGdtzipgbrR7AmWxjVU8YpWLrZFzLFmNWAtRSdANtKerMarmorH4vDwxiHZsbVgitHYeHdgWKosBXF",
  "key17": "35HKP3qPkJuuCC7HgFk5mr2WtzbSK9whDPFZ9DJqKB3Jy8DUx26xx4vKaggCXUodQggLS3TR6wo9d81PSU5PQE45",
  "key18": "2xvSKtnyPzPrR54uxeTag9brYcnqJCDTnPkeRcsFee727kKUNUDFNA3arU5CXzCsAYt5qyGukmfzmSRjioxvMLwn",
  "key19": "223ebdmCijfqDcDBatrhnftqPnqSbkmKikxEdSy33ryUSUB6hKrEaftYqJTM7oDcWdSRCn8shiyztgzP64M5tFWg",
  "key20": "3LDAX6qpjJSPmJRpiEPLfoo2mwMjqni2DZZDPspu4aVoMZAesAnpKCDWg4vECTgbsMi39f3Bzd16udYSX9Cjg3eP",
  "key21": "5XW447o3akfvij56KTtExVG17z3hDMN9hqdDQfM6FwLc5J2P6Num5cwpVpsCz3M6t1PYG1kMm6zPGHhHi32gmWJ8",
  "key22": "56Dme1e1XrmYYfaXRhKCm3fM7kGu6iwE5mXoChhbyyeGEqWGxXnkAkWgDaWA3KM8RzYRkKERLj7UPbdLHUEcdwNd",
  "key23": "4ekJpSHbEhHR5ox1KTwKje4325pgwGLozyLVr7HbcDKAbvqp4RhzDqbkUfWtTWTzL4qo4fJPnMksFt8LUWKzCD7G",
  "key24": "iM3VZgMaCFt3GwZESE3KAMfGwgQSRn17xyTcjTD7Z6w2QLtLpEBqzNxQfW6Wvdf1uWX5vAnC8W9PB8Z5cwXHJQu",
  "key25": "QLZFJFHDH1LiqQbK5rwQ8TmbRJdn4txZ7QENnNTNs5tUN7orhFyfNV3btnsnEBsg3ZTF2p8Wn7EMUCBzgBoBMf3",
  "key26": "5TRVgMPUBxo5YtyWTQeycmR2KKxXpMAR4B1qqWfRpwgQbRo2TKjfNoTPbdaHRDJWghek4aMciQb2gTCwq9zNcnz4",
  "key27": "4nbET3tdRjDnvn4XDWFJj7PKkHaUXPGT9B9DmvZ5wRRENAPzWqKhNusV28DJ1qv8QMfDv9JatBJ6KQap4orAaoFf",
  "key28": "2mhWp5tMQS5u4QGCv7SgdpfrJ3BYQNtuajhrdk35LmeaFHtB3kH1H6EyU4uXrwdF7ns2j6iwBULqUDEDSaWZVGXC",
  "key29": "2s2xrBCu2DbhMryd66cxespnMzgpugD8LC27TdzqDFPS4W1nWqLu8Ys66djnYHYfeXxhYPfGALNdouaq86ATsPJK",
  "key30": "3EA3iVtfmg1HJp48Zc8QbsCxUoSu96SLuJs7mFFBuGgBzGumPz8U2cZk7RkjxKPttPEM8uwCAwm9fERSo2uSAnmY",
  "key31": "3LMmiNo4P1vEfkt8vnrUKKrncL1VaStkfoLKwYuBdkRtvwgX81HFyH9MU79RN5mQfTY3ZMfsbBYsBQvLnbkoGnWw",
  "key32": "2YtZMnFYzwCP5jDB6EdtLNsLuFVQz33YdUBxoLY5m3xEbEqbDEAUd3TFz9iAWCT3qzhdKvTzFLUCKEKKYdoSXDsy",
  "key33": "1ftcfjANRn5dtPG88vErGoaa4GFG2kkRKzvFGnWpVA5BBHHZje6qjXW2bqXXFZc7rRzSzdmUfjv98up8eepZfap",
  "key34": "4uDCbiCQARkJzC2tNtT8Kva4kMcqbT3UJdhx2PmtjPiHZf4P2mMYYcoM6iPymVoHn44hFHd7DYNHjdwbXkyteB3c",
  "key35": "TxZ7WyKJAhUvhtxojcw6KseKU3bFper7qYNGxSJs4rdXBxNmMQpq1USDAMH27pbGom9NTZSRQEd1CPrTnRDFwAM",
  "key36": "2FjEhMBGSn6BUSTKDjRahewyevBoUvkddnXVjWsfcK728Hee4KgCLtKwDnaNrk1mjXb5qv9eZpdCkxKUeodyMUKH",
  "key37": "5KXAbrw4v1G2jD6oPYSNQAu45omepqSEcRRMakm3VQc4FmrQeeg9RkNN9Y6Y2Rnnm9D14ec6Kw7jqktAVEf8Qcgg",
  "key38": "8RCdvgS4tfgUzL7D3PzMZM3A2HJ14VNbF6ETEj5AvqHnv4tTU6C8TuArkdKyZMsu1YDkU9LT7Sb4zYSow38RmPJ",
  "key39": "AAAWFwMLYs9YdENYZi9eTUVScWBKwqpFjUBUhwAUjjnMf68E7ESuPDfjPecQPQvJTMWKx3hmz3Vv6PkhqUag2N3",
  "key40": "3G6pybSdpak4Nf4V4K93JjepZXVtf8sdXtmHhK9nndtqsQ39b9r6VrHHiRqbZ5waNRPbEKqWW8XdCdqD9z9QLHhv",
  "key41": "fbZBM5CEbNw6wzwA2QRmBtjjxeGLnHYQ3uuhQFpet5BBzvhw9S8e9hHBNk5xCeAY2a4pZaCut93jQQTFhWQxPq1",
  "key42": "4U4esV9Sy5dP8XZu2WQkfpYyMYxwx3Zmh1RYinAkaDAQSCpfNNRXyRxQy6LFiBQ4fFU71RkqafiDX3agYzqT8Uyj",
  "key43": "3xrDuVTfN8HxxqSpy2tHhWp5Vc4HDGSyR3Fq5gkCmn5Qn1Pw8ZwvRgMCAFzvx8vcyXUysVoQw5Xp94PMSNzvPpoi"
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
