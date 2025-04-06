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
    "Cm4FH4AUkfbCUMHqwmemEuoVKqgHdV13ZUp3w69f9XvUbGS6JMuWGMzxc2gCYe1NF2ZPmwLy9xGknFhVaLzbczb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7TD7jnoK1cz52W6kRqZ6hu8tZ9gdYzqPu4eZV8VPMqHqiwuqS7VRMJ1FGriQ3eqcW3WkKE3jdiAuA3EbLMCyK47",
  "key1": "36RtA6szVTnoVHfMu1HodrTcH13WUABV4mj9BGbnjoaJwsc3kh98oHnxcer9TgbUQvNuJsEdHbqT9xRrdAywEJQo",
  "key2": "5XjqX8Ww45kbFPzrCWM7998FaGRwQy8y3Udu5wih9kTgs8mAWh8dCiRaHEjk2ptqU9JNpzhNjvMjYSjdi2WvdAcB",
  "key3": "5ynY4xfrqm74sTMSBRCXybhko9tMNabeq4bezgRMCsosnzZFnsu6mAKHq1BEpDLYYo4hNtCHrbdzWr7aECfELmnT",
  "key4": "JY911g1aM2HGPdhs6qUgJ7Pf6KnuWvbbGG2NcTTRXCyG2uvLxVuP3rbnsWvVGjVEPK48zkHoV5RoC8BbeSJDt1s",
  "key5": "4R6rTErKwMKq1pxLoCL2RCb7PGF3e6Ro5KFg7SaHiWvCA2zKcx9GvbL6uviV3o1sDCLScWC3cSc6Nt4MfQ4QnsAB",
  "key6": "4aiY7X3ct4FQ1yFZUgCKTS3wMeRBBdCy9ZaYcubYa1z1atNw1VPfBetSkwj8NT4gB8fPzSYUoGma4dZktR34ndcc",
  "key7": "3YYnEHCKkPsnUHL61k6QVvLxwezKjy4hu5zyjQo2MB4UPcN1ZDH2dZirxPoNAcPhmZRCqTKdGbtVrRh6QD3U3wrv",
  "key8": "5fR51FUGVtx7rZ5qQYosbz3wW93iRrs3rwS2vd6NJC7DTZ8bdfAbybK9XRFMv7u9o7PeAWCRxWStYxvDtRZPzbwW",
  "key9": "5RqeJiUGfJidepDqBgFqvepe8y1vhKWY4cEDkpYZGaptWYYJWw1XhWVprecEhv3uC8UCJrXxz8Dt3dShut1WYjZ2",
  "key10": "ywvwmbfUXB3GLJUhyQnsaHrc48PrJvcJ5anifS7N8dDNBUqvCjmKQQzasyB5XesgK89UeMhVyHy3uvWdZJXGXJj",
  "key11": "2ZpLhx3NxagxBTc9j1cu8X7G7hpspexvXhSnuUEyUSYsXxCTXYGF54iWuqjCD9k54kmtCLvxFrGZ2L4JBHjVSvAr",
  "key12": "3UkTXfQjQNmdTRqEJ7rgQxGeYsgwxwaak6vrvkiLc3rh6CBH5U47cRdxviyJjskH6hZaZkCqVjaP7wnunk5BC83w",
  "key13": "3qfBqPpo1vKLKUBaqj3a6nDUd6ADd8RFJVENFgCJMpng39bvjdPtBZWFf175WyGfkan2pkC52K3q4TvseHHGE5Wy",
  "key14": "5s56RbYUMQPwcDwgW4FCHKYpKCnpvJB2FuVunahBTpz4wbPKhoAthWSzgvi6ogFe8dQvM4vTWyGYFFagNaVS4M6P",
  "key15": "YLE45DXDycLWD9iB3uKutLnmL8VSZJSM1S1SB4G6V8PNaPhHogA1oK8Z59rMPcZeENRPk4V33dmSyqa9yuP5xgK",
  "key16": "2mxU84yMyeSSupEhBFan3kgzaCRRZYSy48un9Zc7tVYf6SLzqyqXUf7DzsbbEyCC6NpWMSMrRMWJfVzAWidKwbrh",
  "key17": "4kdaWCQxue378BLkGx1RMYKN4BWEPc6Wtgasn5XSCLu2xsYsxqXMcW68NAEyhVFPxsJGY9VQMMvuD3adV8VSJNXv",
  "key18": "4tWhY8syvR9rVmHZYqMDWYN6MLxCjjtXyZwLwWAYQo2LrESzAh656k1YKWCZpVXpwERwKYhA9HNdf72ms5dyYgTj",
  "key19": "2Y8UGR7LWnVJ6tnfmFiw1LXGCtowpJm1cKV7je9JBYvveCdW83rxdNix6AFfyp9Vy2RACDTzLhVUtidDHRwZKHuF",
  "key20": "3fnjJoPqvYh36g6gTqBAyimvQ5XHqmZmzEYe9sbaeYDo7k34aCudgceB7v1Znw4fNWcNPMBMAM2JGUweEAHovXM5",
  "key21": "2YwR3MFTxCnCPAqh6PZCKSH3rwmQJ1kien3afhzyyL2cmEeEaLkSBRci7rCLPwwuefBuLjHJFSWxkSG6iKTQxWfe",
  "key22": "5K9EvRfnYLuKENG6LTdbY2QKR5qrex8ukJc9ac7nrqMxUsSrozNuKWTubfkkxuzucMeAwFH7tfG2aCJNexjEdizf",
  "key23": "5c47uCXYStGrmwhM7KuWyT5QwnSU7NLaqkbQFP6TD6X8Y4hLHKmjVqdRTFWtJuZaAeBqChCopLCc49rMs8LQQcZ3",
  "key24": "2WQNDxk24KhfmoCAsdsvxd47Dh1edNhGWFwWEqK9ZtQpg5FEztqW8PQnng9g7XLd8N1XAb7dLiV7MKrqo7AKXrkb",
  "key25": "NByFfQx8723XTUaRjzUFnq7PAzDEL9x1wdbVn7W25Drr6oqz65TUmzikLYjeYDgUq8cJcbyefajL8aeQoP785Q7",
  "key26": "3FUkhhRvMXjyAjBd44oZaZyHapW8gtA45cTcC5MCbEHt1e3YYyFrkXzdDuPnqiJeL7Y7xZds7NWfctSkCpueT7Ck",
  "key27": "3UewRMeHYLdT17v1SqFKL8yKfaGTUNpFuaG28NQmy7NG9sGib1ABKLrwjdJdn8fqx71oQwNUZ36X6LY746vP4MQK",
  "key28": "22MRCwHWDcW6uRH7NYuXFFaSgLVFUdtLAVdysAgUqd7qvUXEjUFDEzJXrcFcQ5Pinr5EVRqABpnj8YRZKEUn2jY5",
  "key29": "2naA7WKv8dEoAKEDqySqFaYEr9sy5YPJiHn4ou2cbJYnoiFrmp1KF7jXN9kyJebcY6utTdkuBzncko7EDWmB2wcA",
  "key30": "5Xdihcweu964DheNZkHNmwMwTp9zq5cyY9FHMC92cCKBZhFC2ZYmqCJnZ16ommnci16YJtiRRTwXsuAUjkXMfLJs"
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
