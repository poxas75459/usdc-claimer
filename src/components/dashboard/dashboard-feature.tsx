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
    "5dU8KzrrnBtibdfxBh16UpzPJuSaQH6knirCWJGa7r3UqMZ9Lu89YHXREHsd9uecyzB7sFYVfHX5KuLsa2shr2vC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bGEZjyYTmVv3zBBttL2jVMRFafqVWsYmvx1ogkDBda7oX3ojwCauQ55wLRoqVwxzcNmxwtGJeTeg2F9WZgSYoBt",
  "key1": "4uWRQdNKtd2xeWkw3VXr4X9fSXAz8skhbiaLrkcycvCuzu62xJtdP1gfHQA6JoRhrruAMLf8HEtJJxUb2f9sbTqb",
  "key2": "4uY1TExzj83LUR1ditf8s82dmELbKi3XLQBs3y87KE7MnZNhPMuginkGu9gzc1dEvJpfqFAUds4Emf44kJsxZjZN",
  "key3": "rLKQWcQtkzYnTjfrspbBPzGN9Y6hTv4fpuHqAMTzJRe2FNbbXNhRwibLrL9wxnCeUaZ1eKHZBte4hNmiW9dTZsy",
  "key4": "452YjDm8evtU2FqvqfKCpFa3mPGQ7VU6anmXG3j6paZM3LM2CWuGfVfmGS7tckKR2i9f15vPF6wtDwL12UcCosbq",
  "key5": "4oEF5qjwgLWteaBAvyf2HMo9Y61BWnxNzQktCg1wRcZ3ggP6s2cs4NgBqdaeTJueSveGE4FUfMV8LPoeNbmNWAzt",
  "key6": "5T3BXkdY4YLCvPUHJHtHQezuhFF8iuCXMfotqnL6oVgoNYLXkh6i1inCoSLXmYiVnMCmNzeC4H5teG6EB4dGc791",
  "key7": "2ryAhL2SxHdRpy6DnDGmCUSZVC26KTRA7FwFar5eSZRdNVUXjNPGg8JehPdNxMB3gBgDgZoi9zGrZNXBmhqZ2inK",
  "key8": "4CvSRNqHXAE7fNDmsS7RBNL8sQfkJyGv2AhguFXLaKyaGfX3G2W3CWEe1mKs8VmYeTCcJZfm3KdChzvYeVvhMtDn",
  "key9": "5pnHg3bLn59RbP2BWBfQicwJqxYJs5XafopeTBrHhTUvj5N9oSEJ9WiKgFRkmoS5o2hB9F2eCzqwyLPZnjJ3UoBN",
  "key10": "3smoMiDKuHfDwnoUCjyjnwkhTVpciq1wQDVxdnEnW33gxPMWuAJ8H6XvCcLXne75HXpG25MzvMvPqaMoJJ1yXmLa",
  "key11": "4th3mYXQRHNAAPPSzzYVzzzywSyHCHCfSmsEAFF7WWctCSJshqQn3SAJuFwbtvXhg6xAg2bcUpvgEkRnymJ7TRWg",
  "key12": "4VFmLDgwMiBRwZ9eZnGfaZZdGLwHALSxnDZi1J9fUDUaZc51eJsoSWh6HC3hUapZGGtFHKyGaU4q5CzsGfhWKoBi",
  "key13": "5V4s9NakwuHsBBtR4mW7YV2ijkDqi32HjX1wxZskkj9znHtPnj3zCp8TuPZyrs9ywAxQk2TXgTsPv2awnMzphYze",
  "key14": "3HEx1zM82Rp26ysoJesSyuYq7dynx6DrQ1ayAmuqkmaf4ar1ep7QEBZtnhoe5HTEJGNBCf4iBgrUPSHsns7bHbrm",
  "key15": "56vA9Jv9ZMmJHydjFxj9TkR5g8zJXRrRan9YbPgeuicWwj75ndUjg9ChVkrno6kASE1n3VMamKPFacCNS6ZW8bgJ",
  "key16": "3nAsy9VicrCBDDaaSQuuFemoTEZjaGzSQUzuPQyTqZgfnKCLtM23aZrrHjFM2NGTPq3FETy6Kcdrjj4qwxffL9iN",
  "key17": "52CHmbbbxdninscRW8XQdU5m94YRcgZZm8xoU1jg6xD5EXzjLCLn23bzZQprnuFnRXdZLSmM8diCwRibpUWJKsnd",
  "key18": "pjZf83ecVt9W3mia1ZUHiscoJ2TVJySbzWSKEDBFdoQsKwBYqHB2QdeVtyAnphp1Wpy9q8AbeXrnejq1yTfPUF4",
  "key19": "5Y6FdsnCZwgfhdjbm7tSHtPppQGVBZ57xHZUja3TV1Kht1tG1ZQqF1LyLXmKF8k46SCF1bAho8uCPULbupeCuWsp",
  "key20": "2uVYAcnqDESFWyjBsnYj5Wead8wMAc2TSFiDaYdfWLJHRDYF9UnVMyavAuRZtJ7ZxSqaXqLvg5QvFjVLA9TzgDqz",
  "key21": "5xtKrftvmNTgkNUhTAzve94hbFzPg5nYxTrbjVkcPUwPpyjP1dEJu5NiQjYr9Kv4FrbcYmocyaYM2rPiXYX1LDEf",
  "key22": "4BQz5X8UdCZsrF7syPs4ykFgmBEk7Vw9aoWvTVxdfKppaTmywjeE5B2xGwnbj69CCJJx531WGi8Eb1B91yUA9CiC",
  "key23": "2FiZuw8YXLbzrrEXCGx5hqioyDH3G7PYHLCJC1qPutFEqVQdJMqE6Z3MwYpcUdPweXqQRUkc7Ea51Vr4w4iDdABg",
  "key24": "4KqKMaJ83qaNfArFSHVBYEKaK9v1wpGrGiMphdChp6h33ZdhiWAiC2n3WzwKR6dWHyRz7iGmLihEknZtw5tg8kAv",
  "key25": "4KAfn5aaUydCppvEH7GkWuHNiM6erGHDAZmVg7aNBuAKsv5WT78uh2n6GpimjAQFXpeHn7MnL7qwMwWQzTFvLgBf",
  "key26": "5CsB4zryLB8mcBmUzNg6cAsZdLBS88gz1nUs5FQGQ5BmpAqH17SY49ep6VjG1XBLPN51WRpFSNWRpNoXWpivaUwv",
  "key27": "4BE9teEQWUjENJheVDxoZnJQrUvB3SzoQTMdErarZi5ZATTu44C4qwMmYuQcD3zv2S8FYzSD63Z5CXny5CCUexLS",
  "key28": "5vs1Su5aYA84tcTDaNCAskL8c4j65DRgNHsFNXFzaznc75E5iRunGuSaQc7XCKnJ9HVyxgresXx8yvkeVpYX7vVq",
  "key29": "4B7HzGpybbXrCZ9mriRLjB1jryL8NhgrCu5KNMX6Q9snXLffzM5kSXxEyAcDrxs5KVakiaTW8acmV12dF1hvRTuj",
  "key30": "wD3uNYoLFD42hnKmgDtL8vs2JAybrEccwCuN9NEG767dE7tarK97mB4qkvihhK5vfKeeinEPmhatrWufBaNywXy",
  "key31": "jUMgVMsVjVCxUvCuLANF25NtHSaUKgSsF3daUySgaW6YGp7jzuyhaTxnWTWMWxUkYCESamDR22n3Cd1R67HLmfk",
  "key32": "4imcM6qTuibt12aP9vdWgQ7DGh4Rqy1d2xcXmCdXy92baW9CVFpzLQnkFxCbBC4Vqcx53zur1qaY3aNLgrnihASy",
  "key33": "2kJcAp9xQ3bZY1cDxigBhcWEgGqpHkUwE4Yv4EeDN3ywFiikkC4e8A9LAy2m2hvA2hKosNDA5CM4nTekGXQbSpcB",
  "key34": "35WEJ3gXWLozX8p8NhkPbVPajrumo8TGnfLMg9vuC68h65sU8AfxoJ5sDSRCY6bS8pWh6BrHFWGqVsEvJTa4swxD",
  "key35": "2wiE6ZTxra4dc31YTEfDNjVyXsqVQXnhhEFD17XkUG3bvdKWg7fhWAYEitNjhwsb5RPt24bgusg28BxcTtRxoSX5",
  "key36": "5M34FLVLepSykpyiHewAwVUH9yyqXSXvqnapvtBB8chCvRtVWG8mBbjrhM6GiZfHcYrXoAVXgSHoNP3aDpZTUkoo",
  "key37": "4j4nxte92NmpN1Zus7smNf387u7rmp6yom2zzENUsiSqCxbVYefnYWnGCADZcv8D51ogfnanDwfbbEh3vCeAwTkK",
  "key38": "2pkCcgv3QWutqg9Yf9Vj4NKZqfYUFA8uyjjKdJbshrvR8CD9ZSgzrmftjN2poRJp3owKgdJxcCgVRwcAECZVfquX",
  "key39": "4hd826pDYCCSeQvxheB24vY6NT558Sky3GQS9PPj4MkcfU8fgEzqTtTNUzGzxabtQkRPKApJ22eBaXkbVzHo2n3M",
  "key40": "63ULQ1S34uZxFTzBfVDfdJPJqKaxABTXAg9zLdyNGnjivya3Y2Ba6oH88MqgajjYSg7xfoZNTT5BUZmVmQ4dUehx",
  "key41": "4kaNKyuW7kSW7zF9j4LDyUkwPFh2g7RxWZa4FEZmvm9qtKdfhkr8FHWxXoTmwVkqKzw7dkpbGr9qEbaykKL1BsBU",
  "key42": "36SetHqDKTpAyTtGEn72DQdbkKfEsKnwv3TV4M6SoaYB9o9S6wubMNdnEzUxoGJSMwNrJFFTesj6R6xg1NEDH7w",
  "key43": "wWoPWMQn9H549sivjv7mWocZJuPLQixowX3qYE2oqYoQCW4rY7Kg3rSxBbz1ajBFaM9xvp6Z1sixg7nPtw4dHk5",
  "key44": "3gieHjJPMeYQCWDmBmrDSKaHyPWNUgnT3g9aMCRGkrvYrWFjN5AF5FLQzk29MoTsqft5WcQALHDxSvNhoRZHisV7",
  "key45": "3YKuH3hvQDMUD1mQVTQXNkuhEdnKoymTLzTrrajqKAuraw2KPVNhKfAMYGmZTmDaWe3nDtSpQrPYrB2pn3ojAJDq",
  "key46": "28MfK3BLsgWZbmLwe5db6D4DvZbPKwcTUmqbFdE7fwyRvkN3NCsRWyKKEURJdZgXv2sh5ovn3sfemUkwrNTxxxU1"
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
