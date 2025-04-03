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
    "2uAULWgXmyZzEeGWm7sedAeshXQY7KjDwhYLsjP5uHk7GETbzKFHNvbFD6v1bTxgYXMzMk1y6KPJVjEANfvexyXc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nXW2B9p68fWYaPS4QEQFM4vwnsaTmGkpxG8z3vk1MBcJG3KcAkDR5DewDBnvEgdGTqXzdkJUbueyCRYf3MvCrZE",
  "key1": "4C73TSXhj9KazHMsktqSznei5UTw8nRgByF7hvzwNDVYp9B51R8Pgkpbxc9s2RvwiAcHdwHQSJ3B53qdFboev1mv",
  "key2": "5VbwZurhBDynnpCMNnGSf73Eq5Xh2nVtkr367RgFmwue9c1tTYdmMwtEspTazZ9NN8HSygTAzK6n23fAqpdae1K7",
  "key3": "442FgCEyj948rzJXiN4GMAZRbSCpyz1CNepRmB4vqGZmzH6cZG8fdeU9S5zdXeVbyZpfNccAhhihs67e1c9rA7B1",
  "key4": "4nCVXMFvJiMqKAc2eTL9QD3zsDtRjjWobVm4wrXbZg7jLhsYrG3BgJD8WkjwaNjaY5SJYPXz2rZKw6C1m5ukmwXH",
  "key5": "27yoegCtijVDgMrTsFuPF6jbHPXJQeY34jhPRsidHjQYBkeMwNuxdHx2UZQ5hVbiRi3NxHh9ZMQvxN2WjFp5t8iv",
  "key6": "Vdth9tpoJuQYewH4RaVzAQwPDSywuN3SUuRc9fHuoohEvzUQRtNj5j2s7ZRdQiZWTvZk25D9dpxHmPoacNY6mcZ",
  "key7": "4Yngx7HnbAPCtcYm6RWKTmV48nmb12c7ZEaGjv7bscFsTJVgZXQXFTBU1HnX8FJGXCFfvMBi8ib7DECFoQbqtbCT",
  "key8": "4QwX1dTzFUTfz68miwrihQJzdDS15DxdhWJbaNwf5QimxFRcFtYpVGqYRJB3g9Zea1n4SyHJmKJJEXv3KJhAiZmn",
  "key9": "4jK8AuNYQRA4wWsQzvAtGVxPEq4sG7pZMPfxmyFgmyQD9RP5W5u5evCH8uhbj897c17KYBAtup6MYC49hVwWY4u9",
  "key10": "2y3SKgFZbwr47nzJajj7doPjSat8Bs5vzqmGAeSzKjwdjZZYuu5mH1PEqGuyQTdpLRYtcFGiy2ddvU9ChVPiwxAM",
  "key11": "2yn5EWrLViYYqDKyaUnMYBFWkZh4d8Eh9QqNAjsA3HvRG3qAg97kcqFHJeKffBPq1LTAJboQntzh5JYSRmQxsigx",
  "key12": "3pY5ySDJMSbiWqTadEGcE3mNx6eSURWDUHhYbAkQJdojgv5DRkVBYFTYeXFnRRV4d2kxed1v28QQfrNa5Hufr4Zx",
  "key13": "faYQhpiakSGzJqJSYnaju4oSpCE6JUzYxRNeNVNYNSj2zAzo9smsWffdCnMJVJ9zEoTPNxz7tv89wQ68RJZbqZv",
  "key14": "4p8YNvnq4F7GDGEstHgZF4U7i6Vw7DgKXoome77bvrCV1JNnq8FLfd3pAoiL6JiR9WuWBU6EEg2yUH46frQ1NC5x",
  "key15": "Fmuxp4vysun61unqX2zp7NJi9RkZ24ZkhQaeZEvbPa7XrPqRihpH5Zkk2GiPVQwm2KzPN2PJ1tWaYSfwZoZjsX1",
  "key16": "42c5DGnoexCE64BdcSRqwwXFjKWherqBUuCjVbt6rbVVKjsiHqfxiDYeXXGCVLiVY3kACStNDCfQCjyofMvrt6xA",
  "key17": "5KwU1MCgzidLHgTbKLn5S2ac9RUMbbUU1CjJVY5gZRqbijyjuJy4NyhGUpmwKT1D14i1FekC4w7ZFGCZMJarca6G",
  "key18": "2E4JR8R6dbjh8w6wiXg4yYyFbXyJt8SVQqvg8gUwQ2o5MWLJRa3KiTsDtBFpK6hpVgNmwwCtQe4Eke84uKygmozU",
  "key19": "2uCtLEtaDcf8Y4w8JonQrJBEqU2FwQ4YvBCE43KrvhoXr6DH5dvQPSEPUvgioSdLDPNXRQwiWZy4rmn9DGV6JA1z",
  "key20": "2ffzYfn8Eat9KKm8SbuJqGTPgqbouvcWsLGUeudUqvqTTP6fyG3ApJZfXEqatTBV948bPNUZVzNzGxAcN5qExfi7",
  "key21": "3rLFirAqqMoofnBGvUvb1ddWhQrjPgPG8z4uBMAV9GLpsP6tw7r8u1TP8gYtukJ6NBbQ1mWWMAaXrMEtjVcKBh3j",
  "key22": "5PRznhkiSWQubBGwEgG8HN52YcMmedoLsEUtdE4vKZrHeq2r2pdk51zcb5pFZwGCeY66W3VnfiLa1mEKSENK2NYj",
  "key23": "3xL1xokFsfKKieuQ666wfrojPRfwYYqPYwdS4yNi6YUPYgRX5vrsRHAauFfSyJbMPQpPWLoz813HVcfiv8VG25mV",
  "key24": "sBXXxxLkAXNEuUKnayoMo2WbDmtADPtz1Adk8B8DmyZf41R5bNGPTdShFvqs6xBPyd9jMmJcM6uPfiwJqxc7XKM",
  "key25": "YNHtHd2mRLfQqtYSNcc9ykjt5CUisfrdC7Fx8DR62vYz6gXnqB7E462vijVTbKNDkS9xiPg2fbcQ8HthNgYtyCX",
  "key26": "3bMex74Uk9NSAwnbRL9vCuTPV1m4apheqT22DwpastBH7RudT3kyaLdJf6qSQaVcHYTKRkbrkXDPRydNdvhbVjCq",
  "key27": "5AbGwGSpBcF2fGfxnT7unBjqx9dHWhpZVLa91jQ3JiufhLc4LGqbe6yh1cRmviR7NvdfgT49JsiftQ11UXKFjeMc",
  "key28": "2DPRVWGccv6XfzLxYYNh3eo89iMMXawkdUSsd6kNxrr1rT7Dzb8bQEL1U4pBztrqvSQFTosn1HAdFv2BtdFdUtqR",
  "key29": "2KYRpjNnf3hbQGoPvcSVhiNowFN9uxdR3EBuzL7fH9SMUf4ibkdfk1fKA4bSGnFJKuekWmuKv1YbgBTeMVGevcRZ",
  "key30": "3LsnX7G31r6NubEja1JP5yoTbK6v6jsfifxefuktWtvcLAz9wCMiwgZGq6LSJBuoJzufYcgEtMFH8bmEtDfQSZpo",
  "key31": "ETyTfiWmWwzgp8VTcmxmRM4TJvsUr3jnzjLngQViDp1h5jpvH1PqJbegyA4nuQZGtfYjbZ42kw4rHwWpht5usef",
  "key32": "3Td482j33qNk2emxAuhi3yYXsiSKBTjJfUkWr63uXMZ7DYqkDyML9AiHfw6Q8jKyuFeppQgvcQqiFkrnkZ3CUuP8",
  "key33": "2tHEur29SuPMi83be2LgMPufd4i2ZCAnSgjNYxW5cUQUtwHzfs9DKcgHeqdbuoVuPZ65278u2XFnZ82tTp4dLrkz",
  "key34": "3w7gLCRfLWSaZw8wJJmBQPPy2QAXwYkVEASTvEByFPhJjp55LKwt3FceBJisAVjQGTorH4LHJHZqX2471coZA2r1"
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
