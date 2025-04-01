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
    "2h12BNhkxXZLsLuYWMkCixn2EpEHWLPQz9hhtZvN3UAQyUVcu7r67echvpuSbGBjrcPXHoUdTE48bx8u5R5bfRK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fPzjsfgVeDdaHDfGZq6TTHnaDZxrUcjCW4669GUZxPMCdhaLQkouJZvtNTSyYiJBTu46863wstkaE9KwhRMBoEo",
  "key1": "5JCDfimJxF2jWXxS1hfPwNqTu9xH8t1pJosc2UgfaEWfTYseQ75z8YQPtCDEzYhUkVLtTd9W4AGbUjZDBchiGTxM",
  "key2": "3WY1E18rZHkvjKs86cLHtNT675AoLqNZX14c8XgUbqvKrMDwMK3DSzyFPbFW7iLZGoFwpLqikgdWnczF9x6XDLgM",
  "key3": "4REGSP9GVQkC5HCB9Dfvh14YLRKowciPnsfm7oVsxXJhCTJ7ivKLBQW7ZHV6dxwga6cqwwnxG34gFxuThz6YHyGm",
  "key4": "kyGCo97y7WfKSZSv2K5iaP1xiJvLk4LFoAKuUtprJSCUfN6yeNALH5w5e7oyH27zF1RbsuEuQhnh5bzGsG3F8Dw",
  "key5": "2vTWLrEKDPNrvqrraY1Gwd2unT5SzRFczjw9yMAZotrcYX1bNaCekG5X92YG4otk3gtDTA3WZ58p4dBrsuVcDpNH",
  "key6": "7J6Tj2sugjo12yG9bWEDGB2bLCEFgMgSKRT3CDFVQZQf5z5q4EQXAFmmpfug63QUHTRPFyDCJoiKsn7PwJp1UkN",
  "key7": "S73aBa9QzeZBJucrYppGLEk8EzqRY8cR16z2T5eAJT1vL3bSU6HkdwnySuPanA1yaMdHHU8UJ9JmGqeM91ncJ3M",
  "key8": "4WvtnacbFj4UE1R9nsimPmY6RPRJ1U4geDfXzjBv648rgtwiCLXd51MqsaTWi2b1fth4b9rEXJywqYpYg1bupN9r",
  "key9": "3HUQGTJoWpq17qiLPSNjCAj9ZEVqUaap2Y8bGEaZ5qnCeXFnohgLcH79tm5eivhGiu85xVr3PUU25ri4v6XWi8VP",
  "key10": "5d7Ms1GaKFYkYpWVVhfiEX5s58qz4rBtXT3YcFwQxeuZfXBC3eMWJumh6c5Rtit9WBmeqPcoJfZDe7r9p6eW9twm",
  "key11": "26edpJo2u6gotmYMUp79hApNATNvtMWS353nFh7E16p7snT8eDVftLDzjT3grGRL1TUzyHWWHE38P1uynkAmFNrD",
  "key12": "2cUibKrJeZXtfBigbogXW2yMYdwFNsTeraVtPxa87QF4ghg3RkUHAxCWqv4FarkN2B4HJnD8G5eYXj4iNJYW5bJP",
  "key13": "5nxF3kXJByjy7sPotmwzUdVpJDsNfLNN8m192WVkipXRV5YtbW9ExF6JK3GJ615j8z6WqNwLTW875S3zqgVHzXdu",
  "key14": "26dehB6oSxZAweU71SiPQ43nTCoVtWvDvztSnyJ9ZypxUVQasyXLXRB3gfgM89HwTLAV1xJ237A3KyL5A3s8enyH",
  "key15": "49VHT9HFDvYEmx6r5gNMpWBHDDHn7YoPQmpN6FabCZ9Dir6LpcKMJj8nxthbqPLYrHvWFXXLnr4fZSBYsg7PiL6s",
  "key16": "3vLnyVznyEEvCk2WTug8bKviZiN3kxmbb3PFLRGiirL58WwUXaavHWbwfW4a5yXzSXbuG4x5yHdMxW4ECc1buLgT",
  "key17": "5YNroNuzh1qz3VnLEhKySbJwNknGdvkMN6nezfT9F7TvkCmu9jtUui2FPFwj1vhSTAYoKNQjkk7iyKULC8D3JYP5",
  "key18": "2SH1ECK3BCMCtUoAb7cL4bTLxYQTMcU9kPb7ZDuoTw6FXjtzaF3SnerD9SQJRKjCDuacGR3NgyDpac6eNHoBqpQ3",
  "key19": "3vG2PwxVkHE7Arz1Y9HRrVAwGpWxNqsrLFq16YNT7yurTt9cd9jKCCPuJPBxUWpsYFoaifRiSDofijPuZaMJ1TXf",
  "key20": "diGEQ8n8U74PD692u7fVmsmirE8c5SHnxLhFaU12m5M6uWWed4zi2x4Jsamx3uSWxuqbg6VyfZkv1c4cAoQzp1M",
  "key21": "3vmuBtTEt4PhonyQLMsjANMZ2gc2NdhHuT7LaxqLp2XREfjJMGteFFGPkgjb1h35SxLjbdc9PDJGTMrtT67tknik",
  "key22": "x6P1ChbtEcWpNrbKnvWdt98tqYc7pCWEAmPyEt5ij67MhJuQD1FF4XuzT4YnGUbPEqe7PkrzUxwopz6Raou81cF",
  "key23": "otT6L8CGrt7Bjoz9UFuEphGLBV82f6nkFmhY8PTGTvs8VsnSv7GWcqCX6WKR2JLf3Bh1gPsMx5dRys3YbSXoxsz",
  "key24": "1TP99oQbp8pcRhgKU2zK9DjMzmZtd4dZ8S72CFp2YYWxitBgEbDAkmpSDAcsV9ABe24rYrgs2FThYSXpDxsiTDm",
  "key25": "3KD9Rbn62zbU4YaUBf5ENYPwSRMbDA5CeTHkvGYxWTTrrnWg9Nd3SwM9Zj2QZ5horrrKqDuaTUCxbtyetN98gZQj",
  "key26": "Z4P4CvaPzvDpT6knt5u7HQGqsNCjPXtEvyE8dSay3HKpcCQYQNTgTTxF8Ym3fXXEtMcaFkqHAJ5vpEUo8LqCvVN",
  "key27": "525ej5ogvCoSmT1y3swmnUKQMLHTc6DtRahp3r1uh6gNxQ7qFht42uLD5mpWyBBWuYMS2UYd9QpRMxYrh9W4g8D7",
  "key28": "5R9LfgmVjVqgs98Xi34xk8QaeoXs5cgxsjNK322WTXusqbG1KLdvPrgHeZZLYVUqq3xUfxTcYfEv5XRtJCxvuJnn",
  "key29": "251BjAFmpKnp9WY2jJjRKLRSSuJuXqha1wFaF3cLrxUDoWZwevMNDaz7vVpoBgKE6zf3UgM6cLx4JFbT28Kgt8Xg",
  "key30": "TEngJSg9vaaL9MY4NoNjnPUyY8JxAdhZj9sYt4qf5S9PMFd8hcUx3Xtr8R2tx74AQJhJPiJCY3yRi84xCseRfFM",
  "key31": "nbi8RL36MT7djDCL3UhzVXZBepSrysbHoEPz1FQygAWN8fhkqvzGBQ3bo2SW2FcfqymHXZmjg73Qx9MuTmKF6pS",
  "key32": "3hNjQcj6pq151xvWpP5bz3szECUDF9xSktag2i5TZXVDQzd2GySdA2jDo3gGRJFTAeEWNCULvGreXJ1se1cyB9qU",
  "key33": "2tsAjGDVU1UKKaeC48PS2e85kb1zQ9JK3kzxqt5uFLKWceayFgDjEYsXeYmqE3cwYgbCtXbiWJi4a4S2dfZts5GS",
  "key34": "3Xa8C8J4TkbfGmGt68vRVJ9dMJpDBSFcsHnPuaBRckRXAVJoC9GnLxXUy8KCX7LAuNabSM9E51PZexmTjBzk5jvV",
  "key35": "29pMEhMU5CcdirfJUyRBegnNC17knhCHtmfj542QGFFHx3soE6iGnumwiuNr9rijRyNNvXpayk4jjBR3rXasYhgS",
  "key36": "51c8cwazCih11RyzyS9aq3u7cY5G7g8nCQM5vidoudjN8Tx366sK9xBwya7payYogRvvGz2gp2aFihBt6P3oofhP"
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
