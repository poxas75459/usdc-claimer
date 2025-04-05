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
    "5nb7S41zuHwUjYxQoEHBU4MbwGA2cShu8ykxJuY6qZyCFzAacbZRPE7UbPmUEwnQ4AiC66K2U1smSrc1PJpnz1fx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f6UdYraRV1pe4TjkCR2QmoLa7yXixMyxHAk4imvXmNr571izq512sfM1gCxNJKvMzu4TxsqVDUc7twjxHhBU5i7",
  "key1": "2q343i7ZpbSqtN4wzoZNRLt6NtfDiFU2JToUKzxtXpNKpJDUnTZsTzCdMKaRc8si4iGfoWKGKMcCvTMPDhskz6x1",
  "key2": "38jn7gmTqrd8sQdep9qLYcGTWNtp59WZ3fiXEWdmNHy8EXxiSAnaJbQVPkRs8f2kiobHx2r1dYFWqxBZFYCAnDUi",
  "key3": "2UM3EXEWzvsbqa4zsMefUBPbpgPxaKAUbGaEoLqj2918QSxuusbEnt1JsrMG6JSakyka25XcaaWbJsAhh4t1CmJF",
  "key4": "3fLGET4a63UzNBatKEcer5ocRTWLbzqrpanckvysvwo9jPQBXXiQRhDi8w9mEutkfCUaAYcrC92sxUoY8U6qcxdK",
  "key5": "2F2i7bC2nwXkGZ31JvfZKSqCsj84aASL5rPgCeQc98afz4SggKuo5o6otFV3KbCMf9JxKfHeiDqjPNa5QhAs68vp",
  "key6": "5mF3Ds76FQ3rH2ZZx9KnHHxcFYiuWmCivrKPBFEB7HV3RvJe7k1fpS1UgsRnriaqeX3iZ1BaTjj8xRP9pnNkRbCy",
  "key7": "Jxve8aW7dtDuie7oJhVYSJ2kDcL2TLKQgKZXE2KWsp35E8p5g2X8xqcZoumjdptiqAeSpssPA2fcSVQAUHaM7ww",
  "key8": "54Nkf2yqsPkQNmxspL56xZe1kKUSJUg9dGL4dBGXaCb2yxNaEYW1W3XpfwvkVyCLt7M6MibSGtEAG5RCLFs6MDo4",
  "key9": "4rtkoR6Xr1E2STX3gAZ5iMg93xCaa9MQSvxkyfpdrPfe5b2odvEedooad8cemY3TGi3LGbkSwnBwFtN8hug2KmtJ",
  "key10": "wD1NTuoe7r1bnSgRPViGmWhSbsQAwjE8CHSVfbkAAymBRpQEYGTYN2Vj8FU21eZfYLN6boQHQW1ipjGVJ29Gbgh",
  "key11": "29cPdcWB4DendXzTS6XetiyhTWoEkha19eQEnieTnHCMsopJVHmZS8AQwt3u5o9yyfu9w1MJEYLYtz75H59MQwqE",
  "key12": "47i17drAV57zWeJuhgCay9UWSGkqsBR3MQy7RXcdmzPkPf6AsgfEsNAe2zRh2GeZH7YoUEa8BDqKUsVMv5caSFRn",
  "key13": "2tcF7Gtp4VfU5hfkSyL1b3TMyn9UEtC9vMndMvsBGgT46MtLA3453F4HRXAc3E6BQWoXQzh5iBeWV7oLc7W7NkaZ",
  "key14": "uTwbzWii8DFN5xaV3WQieNQyqSRz8A9zsDQAhFyfL7Z8faxgCV5hQ6khs3N8pboHdvKSPZma1VDvN4BR56AnyeY",
  "key15": "CefpUgyadYsMywmoQCYQrBMcZPWspo1kQ1Dd1ktsTU644oNKKAwkjx1cG3BNKwQ1jFScFy2ErfaaxfJtHsymupR",
  "key16": "2msMpNatnhTFWBu8pnU8KpJsKhM43YQv6AUiHK2WLVvTwVZPAvPo5diNz62YVwwTjQouHzwY2oAobCJzarFZq38D",
  "key17": "4N3EFC72XMjFXKao23mD4Ch5LLECK9RKsq3Jh3WFTJq1jwRsbkAz54uY4cxJtvgLUY9pZru2H9bcu7eZbCkJVGm2",
  "key18": "2a53zuhovE5mPUhWk5tGYTYDGkzmVbhiXj9pSdrpLRfzJFSn9ZLwgsXaf37eskAhGpnWiSnbArNDz5fYG9PXzjED",
  "key19": "2s6ENFCFR9m5B4QAENHGAB3ZyYD5wAUfyf35uUGoepCZcrtXoieQzdvMXHRKjWZKqiyHSmqUkmozM3kM7GGKJ4HH",
  "key20": "2wjKwMcsBBKAbm3Wv3xkcw2CCre1z78DJ3h6Pi4ygPsobRkbUmZHkVF3taphSYiXup3gKpEjjVRYB8uccJHM44wL",
  "key21": "2wH38fz5fgigfMMW5BJ4XSChAruXTmC5aYLRnQ2fmiZZahUxc3H8PXKffBCXWhSxKagswg6Z939HWC3NNN5Vz4Vs",
  "key22": "Esq4W7Pfq3X2mDCwkinZrLNwX3JKCGTHSZBwEANTG3PWToexpxUWcaUdmhBjtsmmEqJ9VHevxhysoP7KL3cXMxg",
  "key23": "5sFRz8jdbqdvAXcPKCWwWPQpeNswj4rtAwj1bdZpsjupjksYpctB5TBWZVWhcJojYbTneVJsTmqEB5d5WQX3AfTR",
  "key24": "5A6Fj3YHH64aRUD6HgG2T91UeXdDQP29VJBwi5AQN58NBZs1jQ9ge1UTHQsYTk6uzh2SEPz1dDG52H5k8YcMJMZz",
  "key25": "4BQDh23BEaS3mmT1yD5tXVHLB1w7sQkFuV7YFYhmebmzThNmNfT4kNJqrfWCUDnGsCYJim9QRKwPrJ4iDRJaDxZL",
  "key26": "shuQwb5hgpVpsX7NXJ75cqnAi7hUun9HzELV2QV11j7iYjir2TXbUovNnJnMyrwHzR53VqRxJXKrr2zZiqJy1S1",
  "key27": "2KACVc4yKdYDp6urpqMFzWQNXDiHQeW79GidsFTUxqsoWbaSoRrXb5Ei8eH8hPeNqcibHGCgkxfUTrXw4BRLwCNT",
  "key28": "4SfsWLW37GGBiuMwEiizfVuN2JshibMxCBX7hJQYw1E4DRdQRv1zv2kGmwLabdasiSRxSNF45dHCLXrUfFyk3Mtn",
  "key29": "zfuYEAqCzXvANyBU33UMFmYppG3wC7jQuGjbHbHWfBEofHFZTXUTPincpU2FemocgRMYrU4LxR1K83AqWfcD9UZ",
  "key30": "pehngSQvHriYEbeVTVMNsyUfJy4gipCXD5tRYW5o3sbTVnT3rz6cMsT7opS3jHndKZNuFH918ArXGTVT7PcHnyM",
  "key31": "5HEa7TCAQcAAsK7FXhdGmWozRBusHzFa6KGhJcjjtssjU6PLkTNwLL5hcZ2yNNmjepQhFuvn275db1KKbURnB8dB",
  "key32": "3gudMDUGnonG4eWLWKrYd7hunuH7hUhj7icTXJC9NEcWHamLkYFmr7mRtKcHNzY3zw3EFCKnbZtVrTMH6Fj5vrjd",
  "key33": "5AGHPWpBUWhebkuF9CBJB6cvSw6V7pDpR1hxsJjCRmU4GuD9pCyziew9ZPwAauAFskUC48hWUYTcvFzdpCGNLYs2",
  "key34": "z8qCDGHizXEkwwH3Y5NzDkCH9YeeYqBH31mr6UKrXpyKuGCXLsBqbj3PaKk4F4MjotJQVkmoiUsCvd4HUcyZinB",
  "key35": "3X1aK7Ufi46zHyQxy1MuiPVb5qfyinRpWwyZ9Roj1qP815ScqANGGthqwt5MmPDkRdrgM4zk28qc7XzCj63EvyA5",
  "key36": "2HhEaECH2gLyj2yMJjah6M4UXgADUu1npjChBuV4SFPv8gfav5FmErSZ97BqaDjcxpPapwngMS1bJsPndasA41HN",
  "key37": "5yYUTnyRhkwcAtQe7nAckK6desTcBRTaHrtu1tYeDFpJctAW47ypG8rxhKWfucrU9UeZjJ7oxpXyTjT5fe7cXkcC"
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
