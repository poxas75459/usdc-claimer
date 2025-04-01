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
    "2AwM7fjjsWh3GrgdNmD8BJLTPZY4vGVcVzmNnVUH6xRHCYUWg3XzLJSNLkWGSBfhxm1wg5REwkYXBbLMAk7BCi8k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UVY47rXwEqpoVGkfKKJgB1w7J4H5Vf2aHgmzdqQp9F5VgPcZqFNZVKVs2USe5CWYUgDBcLPgnqYYEQmyyFbfGXo",
  "key1": "1245actd9g82r3h7BdgESbGqjSvoNg7vvR2ww9QvFkRxz4GwqyAu22SHyd9M8JvAYXRPMRFNZ1oGjefToeMH9oPS",
  "key2": "3xfuyQ5mhBX4DagnthqPVPDp2Qs1TzByBjysnGu3swaCqkvrjwE9sTRFWYjVf39MZEWUJMj8RbLRtPmDEMGDna1D",
  "key3": "5snDZAW9BGkKHe3qQ4LRn6zTxWN3WNsH5fxvbT8JQ4v6kesc69x4eAyR1bXgf2oBp7jRuSc7FydvZNGALXMPcJsJ",
  "key4": "4W19u13AX9zHRhwCLgT6iEcTMPz8xV74L5i9VhEXGVGcwoUh3XYo6fQkDvKXqfwLgGKvfqF3Vd6yaTU3zJzJhRi2",
  "key5": "5jeY6XAqvUNXhri8PwGJRzxn86gTGChVFnXLULJU97UMLukAn6HFXRsQA9dTSwsnhzPCntXhoiuJtAwncAwMMDSH",
  "key6": "EMbNSLUnfyWtcqJqfTvgc4jGzVcyQp5r7NVXY6PTgWPzefNtUcoAqq1vDJVabrT7rWYYe2fwt6dMmfwULYgL8iS",
  "key7": "2EerCxHMwwvXxTiyFtYJZiAw3478R92vKneaTLchU61NzhK6mWz6oT5R9h8NSHrQ3MvMAEvdJ8FphQmkPQCf7XcM",
  "key8": "4BEeefyjyixehcyQxmNTR4FgBN17Sdt6J7qJNrjBTtHsW9Htdz6t9Hcf7D6XDjWywgR6iCGj6eJ2f8yFkhNnSS88",
  "key9": "61XRDn2AzixYVfUfke5ZsKnp3sZ4UDfUpZTpfThYUzKp9mGh1Sfx7aqgCKc3iTaWzDNtkwnXAX78yyFPXn7Ei849",
  "key10": "WLkkfa7HDPpgBLANAo1qwDR7UCtHTPJDrDEv7gKoBqVEP6rZq4fArvZFa97Z2GCYVUx6oQibtHVFqDhUygrj9aW",
  "key11": "26jnq83Q9WjrST3uqeTdoZwWZQAUPjtneAuUrh5FWUSHYPKub6LRcyvVb1PiFKA7TBpfe5rSzCvTuzPTLyH7kX6B",
  "key12": "3xLkhmokLuLkHCAMbgPMD692eq7eegzVJJbSeT5Xz48Dv5Z1dwZ5g7Dc4AEUFrqqBP3zQzKto4KqmQZaEmEjVnwt",
  "key13": "qEXVWrprThmSBDUXdFCjBxWWQMTg3bXTAx1XSGa93pfj88yCtet8iFhpXR36eCh2XvzVyjGUDkfTA7RH9EW9E4W",
  "key14": "2zu3shauvyaKw3Ksb9btbCsB3pRguNApx18cYmsyqDQJBKLfw64vDz5w2UZChTiEVDPbT4VLkDhTwksdr8mNsS4M",
  "key15": "3xaTkuaAtST8RnDgNUyeT61rLV4Any9pVrMgsrz9dteauoSUuzxYVKzrX7efkffxSezUMT3eWZHGMQg4W8Ksq56d",
  "key16": "5Pb1hosEiB2esqX89SF3HHT8x1nd4iewVpHeCRJU79N9uRfLe3h6jYBqGBotbgxqUvS71byZbRqGgSxnEF2CUfgB",
  "key17": "49gVXGwT7s5ebYV1d7mJgGuFFmEfHvN8N2H7GAwMjpsd5XC1tsLTHaiAQuwYwkSCDyVGXwdS8Vy4KcECZGpQw7io",
  "key18": "2qJ6AGLeYbpMp47fSHjA34yJxqJrpHzJgkodfd4uJhVEGApFPhsfroqDU6fZmSSJwG7nY1uovdG8Z2foPcFnx5e9",
  "key19": "5nxZvrp117D1EqVUPMuJnbTEu4oZtzn6PjvVHYBDohzbzxNR7kMikKi1i16vAoNRsuDZdeAyRFEuoXwf56D9hCK3",
  "key20": "2nMdJjwU8n7auFhns8267ki5y1DdQLEdMHJMgQdPZRHkFDFvxuDH7Vda8HpHA2P7zyW5BFuTYG83g3hzhwK98JVj",
  "key21": "2GpPsevESVWnnYb5ZvV7rdYdQzGwDMk3Yqn1UNwNF7FP31NcmGFoyshjkFVhU6gXYmYt34wegk44YxTCV6ds3G4y",
  "key22": "5KYtqjaJeCrq94JWRp1D9gZ8o8UTSr2oc4hpyVePuTh6B52HwA3gX4NvmuiCfm4Ha5a5BY94tCqBH5im9jqKN2zm",
  "key23": "2xRovFCAq1NNubt93MeQLZPpY2jJJQVUTaER9NBCLKstziQ9GmwHuEDQbA6YdC3Nnt1jFiDFYr2A8Lvhndowskah",
  "key24": "5JuMNnJTzqh6DW3WvWBbphxNYxX6c1i4PpVZ5b8DAdxvLHYXKVKAFbYtZU4oLEDrUDjYfb1H2cZy8Jbr8Nnw23E2",
  "key25": "4S7cYWenU7bKJH2NJ76gxaJaLazo6hiWKrX4ukqivCwkeuh7kcHcy1U8Ax2ZycjeZNcoYRcmKBZFum8RGe3LB931",
  "key26": "3py4hp7PeKDhmNi9rymCnanVmQi3rLYpRxsKbeKoG1N2ATJvSWrpYLaE3qhXNkBqfHWkjRrP7CKFC2BaLrkwdV6o",
  "key27": "2c2WoFan2afiMudq2ZSRVMhXqk2f3j4CPz36vPkp8geM11h7fzcpZiCQhWoym1VzfnPxBVuUUF5ft94DBvdwGnT4",
  "key28": "2Pfp9roEEZt5FaJahQa95YTKvh3bBRYuEp2PgVrcFLW3bdFzM8EjUZZT5XxuRLStQyCEMoDBcNjDon2aKLDqPPMM",
  "key29": "499L5MCpYj4ox6WW1MDSgSZ2nrW1AiLvGMFw3ASDWxjshortSyZjn4MRn9yc8KcHBcaMfoM2MrxR3KBCXNvMiBqr",
  "key30": "5oEsYEWd98WyLnTdcbznc18b87pqpYVdvmvZX369PU2SJZ9QXtNTPauQjT924DPPmr1nojFNKYP2DE9X7tmm91Qo",
  "key31": "3U88auASeeY4qMpYTDWKozK3qftq2XHdT1X23pbDDoP1QEtBTYbNcQJEQfh19NDZubssUH3DuET5tZU2nFCbCBis",
  "key32": "4q9S7bAoaXikYjwruAfTNBBxRLjnGAeESkzJLtRq4nupMkURvfGgHzJigytGA2d3AHuw4Crm4KEiUzDerVGuBnMF",
  "key33": "3VMQDvf4GTvZ2yPYwTNYVtDXry7DAhG8zTmU5cQjPone3amiRQWmUSKDNnN5fgs9GkUm5kA2uRiYYyR9bJxctZtB",
  "key34": "5mz45bgHj3qm3Bb9XsiDeCxABGBy8mPoEb8k92sBbmttFMAm8DRGcui5NSdX1VTjumYqKdFK44PR8UBQ36BNgspX",
  "key35": "2uEL7BZFx7LVXcNdA8NZXiZiikvajBYMxT7mLh6twKi7WsaPre9MnokRME58BYyJgMSnN3MeV7irAB7wm5pFR6wU",
  "key36": "3AbWsVwz43FR6XPrwY1cmrQoh24JWAaXGyWn3ELmrUYAwPi1QgRQaomKeT5QyhdYHZcaaRravY8JuHBG1REk6tda",
  "key37": "LJ8iTKa6rAmSLTQsayLvFUsztUieFKSFEJRbbcGKF27cHZ5XUVsktvAamyuat9iAGKhZmFVQB7fbQHzFAYDHwmt",
  "key38": "4sRbcv76otfdVQahjqpo4hvzQ8qEDdZs9WuyWTC5ijWqXn4Ci95UNREQq2fmdZjP4EgpAYNZxA2GPo4Pi1ZJ8HPf",
  "key39": "4L5LtKeRr2kcojX62Sei6yrqwRCtpFoNcWUEoem85tCoXgpreLGtWfZjMQJiKkhW4yug3zgmzrGQt9JNCVxzkgDH",
  "key40": "2ReQ5yBZkpGxmskqw9WWsEsLvpz91NN1tGGjuEWx3xpWyEcZwECBMSjSjF9oGYaCGfFLpegtHcZWCkKy1U7gVumX"
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
