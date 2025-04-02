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
    "5EJyATa1G9psAF7nxtVB8v652U3RQHxNHxfNf4HHSLMsZhxuukfFK9NpDHHRfkRRpmXhh4RbpWMfpQ6GR83T1wek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L4bvQ45fMWt1c2rT3A4CY6QaJBxC4sTRoK7xteo7vhbUjVCfJb8kqTs52Qg2PYkCEfKhvCh7QH2xVt1s8rk3FET",
  "key1": "5PZW9gfMYcXYvq6F3s3sFYyDefw1vWjrguYDnnBxsZMxt77d22mBeTKoV2H818yzhk9uffJ4cZoyUpbXwcW4rYs7",
  "key2": "4RsJJkLLHBUMkCWZAL1RrWjBLuQAsK1LsLGfiZfpDrU6TJk8xevA1x2mQiRkCMULXTyFeM9aakTEUEXkZbAC7PyW",
  "key3": "2PxdkgRk76hPs6ZYQvdTMdnpVixgwXQCJf1ECJf79RcTn3fYT4yeXvv9HeYPgACWjrbP1Mv4nYU22LnmP29fV9Fb",
  "key4": "5MDsVTsJZBRjfgKghsrWKu66UnDnMXJjUcsx1tih9HFcjjWwswa4kTN6D9UumTxYGZFyPLZrgzyLLQXhs4isFYPh",
  "key5": "rThE5rNnaaNCwwHQgqseRAGsWonXB2rxXaqVFy9qTDRSsJQ4g2PHQ5k7h6cevWv142RRo7v6VfxPtaHQD2t3Mvf",
  "key6": "2vv7yQpij8jhupoeVJubxaFdkiZuiBLgmfeVMYtPD9uX3WpfCJD7sZ5wnLTdiwYJo4DwgJ79vMV1XXrCeMsmRhEs",
  "key7": "2QMMkh1H8CqHVxjH7U5bgmQiyExm9W9A7DiHJa85fnqnp2AuJJofQpvgHy5S88wJiTJvwdgJS7XPhbDEgTRKCfQf",
  "key8": "3i7piShg6FC6SmXeuKupqEYUefJcY2Yr2mk8LHAExnrVRMSRQg9Y8q6iY42eRMm2TYZ7FBpEwBKoxyTiwzKnnA2J",
  "key9": "3Q4abxkvqzoAAQ7g5ybzbuM9je2vAFXWQ1HFq3BKafSMwv9QZekTLYjkjovWGxG1uN3UrqkPZPwJZBwA3koT9PZj",
  "key10": "3jPtTegshcL1f6ooLk1tbdS1WWgkcFm5Z9rRaiTT5J3sHEhknxdqmTGERUgbMubPiYBwvsguHSz2SAoqxeCkicSa",
  "key11": "46fnaveiDgV7eRYEFyDXaPxjBVAnyeApNMGdKGqk1kHhHrfHXtK1QaeFXb4LaWSMXM8yNqYiKUa1VCLdq1EHoK2M",
  "key12": "sqwF2Yn9jddyYXFPMXYo6B1P6FhAfBTkUm5oEiSAsyBTBioKuFKErNLz1kLeSE2GcR2HMj68rf7it19QNSx3vEj",
  "key13": "4g4gofJrnWDExyhSHWbX2thWaeD5txsvPPrNHxRCUFEEAAu6M8mmKVDz6163tHaB3XcCVkbkFJZpAaY9HPpC1CA9",
  "key14": "2icLtE1Td4CMAdGBxkCmepWoLfvhGrY5LuFZASWqfRVspRv7qAXfFgkw6ZokD8KjXVbA7kBcz1ZGeArDhXvegEjw",
  "key15": "47RfdFkZMdcjwBNtzuzupHPhYtpbpzcmxCuGdcPxZ3R9JEf2BR5Loa4p1HqbbGikF1gbtLq9XMePFrS4ky6jkZLE",
  "key16": "58Zq5RqJ4wSE4pmPsLqxzeqLweYKNA7ySNFLq8espQX5nL5RH7CUtymc6vYi1WpCn6UFg5NinFSZWw8MuXfQmvU4",
  "key17": "3m2DsyHNPe9VBtH9CtQYbKyhTTeJMgA1Ls7gdpMQKKpc2G42HutUudVcXVr9eKpMYJuNRzhy6GLt8Uv6wF7iE5tB",
  "key18": "5Yvh679RyYZSfHFHyKDWAaqkJw81cfHh8ZgJPNuMq1okPGLimWig94Kn9zd8UcFceKP87UARamoPMibaXKEXzgSC",
  "key19": "2UFe9ZcMp5Ajj6chwZspzAhFxRkrnjkv5qGpopBacR5kGHEc91d7kMNCqK5s2dJbh2CTfXYvdaaH6WREmdKywJrv",
  "key20": "3E2WaQ1276dCAQt2fqR7j3dyF4t8eEU2X2MzoZQSCTtt5aifM2pQ5v4PBqEXSzRknHfkNiK3nW4MWnNtipp4uanm",
  "key21": "27vwEyHeuuLHfJWjZmyPGWrPZMMJ8jATVKjE7wsBwdAX4aiETiBUb62R9tRBhpSZeZUTSy9b6eDftk2xhsUgJqS2",
  "key22": "zxcTFJGABdCRSGTjAwf2wqdtD189dtBccGf67Nfafb4ky2qNq78Gp92L8PprhXM5b12kTd9VXNc9bAxgEgDmhcY",
  "key23": "57sqrvTieGWjqVfoiXNK6DfT1gxffoJVr1eJn5aemihZTtSpDQLufpPfYLDF6AjyKz5iMex3raG6C2pcU4mqZazm",
  "key24": "5knBvzXqDqyLWRuNgFbkM3TtiTc23udMzpxLtJ39XREWYjNW8mj41hfUMccFbDD65ENwU5wWqeHpsbcVYpNYrtst",
  "key25": "35EKrCE9GAujoR6jnZXpPhzk75zKpFwgqoU6Ate6EiUbi27y7SzF3YJjtyRfoAfQPE7uNmH1EzJZbKL8cKgMTbtH",
  "key26": "5D2RUmaimd4btngaGCDp5ZXPCUXb46wT86SNMjUNQ1Xod3pWH9Qe83NqqCgVno5kvryPEWYG7ttGnUQHE7gvX5Qa",
  "key27": "3b8XsjrVbY2dun1NhLKoqcp7pTPnkrL1vStdqRivaUMXaTH57owadps6Jyy7EM1zBEHEmBRmD8CCrdpZ5fXrTweT",
  "key28": "3DB4FStjvUDazByTgKy5XN1jSQykvdsEnG7zB1CkBboC14HT1eWfLuKsCqK3UiiTttnaA76HqE4pbUzNK8SHfEQv",
  "key29": "4vgVzhpKmVNNNNNUdeTtiGviGv7NVVtseh8n4GmhGr6qJ5vLJoSq2r5jwBJuKSrik16w1dMQuK1zttwXM7hyhdZw",
  "key30": "mF3X3Mvx4RWJzPbYKQE3HoMyhfPbi1JyKSTAsTrSa7UCMbvvtyzWJb5g4Fx1prTrNTV6rBYW6v9RxUFDk7nnSsW",
  "key31": "57jnAgYdknFG8iCNEin7m3hiZPJ3G3Km8vT17ZCEAsduZKF4262tfLrmfywX8Smizz3tRN8JjLWwNGYg7ywXnmtc",
  "key32": "4dP1ni4itr186Ap5eLhPtjZg5tCp1pyAooknEq7mGZwazShMaDr6vyZj1jats5KfTeSb6vawQfx3gWCwYfpi5Lc1",
  "key33": "4y9VtQfF4YhduUhQhP8D5donnMn5QGaYLYT4SxSSQo94H6snvYuNp3ZWf9FnPWFrqeHf2JUSHHYkF93tyGWBdNgL",
  "key34": "JhJoMTPd3epQCMDCZKd4ama46fzNuFgvKx4nexEpRomX3uLg9R59KxqKfSW9PsKEKfyPiAKbYsFM4C51f12PptT",
  "key35": "63eeCGq64oP9Kj3FEgZyxjfb94AbxgYvM3zXb7Hqt8g2SeWwiwgF9nj1MKk5y3dZqzrTPen6b3pAAgxDFbStNDLR",
  "key36": "5YoL6gP1pfneRpNcCfiW3yNo7okc7nXZKuz5kC8neb7cE4H6Vac6PaAA6H2BBvHwhon6a7qmrGwVbDyVLAqWGEyD",
  "key37": "4NPdFd2nJYy14FjkphRWAgrMjm1Qutb1nvEGzLmmm4dosKL9jL2kp8FRrzFKi7haozCZzzjz3njbPEiJtj5Jpdz4",
  "key38": "5ehoginNNJprhcD3ukpxjMP2NBdRxydcvPLvUBgoFtoCsF2UARCirHpQCHuGguWqR7ttHDxTyyYrSrxPSkHXoRMP",
  "key39": "5UBLP8VJ94Zx3hWboGwadXmesbXBhjh2BxAmZEGQpAx7jrKizF8oF4AuCacjHR3GBYLAH7CbjU7nPE97Lj4zqyLu",
  "key40": "4dPfGYAPwWyfuksJ8gFUoXESpjPiBBaGRyojvmqYuryaFhBUxiVFEem4SzBc1rP7Gc5WiTJer7WUjAVuehPAA9JH",
  "key41": "5BX1wXz4YYQPTjhPTKTN3LfHYeTDzgu9EWQku8FQJtfmJanpqP72AwkXq3LqA9ACY7Srnt9L1yaDhm7bfQ8w9pXT",
  "key42": "4akGsaG85VAPQ8H9n1TpUbZLdHV6LoyvBoMzY8F6fDguP8nJ19wRqdqik2sf9TNovndr2jJzD11EMiwH6y1U6kw7",
  "key43": "E2ZTUWvoGh1aowJby5iWjprd4amCgaLWxuxg2MoGDYWjRuWXKkMRi3wtKtHZWPNT7NWJ8vqEYrweDCvus27uQzZ",
  "key44": "3n86yyG3yn5yZ8Bz9zq4SEioTqii9PLGYfiGzcLoccnYWwPLtkW3QzAmpRM9xuUbGdKeVAqesVeaWfK6ZV94jB7k",
  "key45": "4x73ci7CVB9NQpwWYZihuvFSGc7wUZWE5aWfycpEYH2213gVscB4FuSgCq5WrtB9e1MjjM49ETHfNJrz4ksYTnuY",
  "key46": "43RaLQnHXQbLWgywu2F14MQciMuPAEqzCDeCCUy3vaEBg1FpQvR6DaobdB1XSHmGLza9KVFpwaVRYMvTU78V6qKc",
  "key47": "4wDgPmEArZU2wNRNifFMKxtn3Js5s3KtW7yxNcrH2eYcZ31LJLRz9Pvs77skqPXiVoe1994vGdFKc5DeSgER4iLs",
  "key48": "3FjqT8nmN1z5SbQYEwfxM4GiQg7S9iPBk6i1jWVoPaAsFiWCmu1juXx1fFVPLXBJjUBRnkrcahMkcF6BsEQRoYkA",
  "key49": "4wKvSCgTavxg7eEvrEBXTHy4RapnqMRtXXoZzGY3xotAaQCjmnpUqe2q2NWD1YPBqQ1UzwjRqmzdegrXFmptP131"
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
