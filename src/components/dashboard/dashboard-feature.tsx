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
    "e5YUqy7Bmn3BvjjnPJQt8QJ51GaCrvGxM5PsftfHcDhej4j9hzXv3cHwfCNg4kMWdQdvmciDF3Ce5GLguUmDiSM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DhJuUgGtWrJYZ8x1rz1ZCTynHY2VAuLprsZ9bT5RLrdDxLSGQHgFVyTXipt4rMDpotqF8qSP2uxGYDdzXA4FMGm",
  "key1": "3ApQdA3XBYZpmu3GVcPcX3Bgschu5Vc2onyCD1dFNXSt74aV5nnceA9eHmA31T6y1nwaJkYFHQ3NAzVoAAUgkcJA",
  "key2": "4PLn1wfzDeaotAZmZ3nk8eVRwzcwcPTdHhvReWq9DiMZQEEFwKB72Tzyxra6NJzLZkkgvd9LZo8CGbmqRih5FV5B",
  "key3": "5kz6wq7VGxqp8WnNUo6ZhKJbmeJw2Rg3eajU56kbmmtQvZ5pW4MF9xJtquXBeabTQ3trHSowUNt8fPBZrzmdZaFJ",
  "key4": "WmydoDNsyddxTPaGM675gRcFK1WVjHpKWMTCQy8ZcVdaJoQ6KfDhGf5Ubv9oEsDJNr9jDsU6m9MSTA1bgiw2pzb",
  "key5": "3s7k82nCiWtfB4QZmUJEMSDYEmf9pJWQoXCcKqH5scd3fZ8wCwCdQB6JAxnfsxuqx3pxY38sd36TZPkpFu7WG63r",
  "key6": "2rxZgJt1SEsRgZNPWNrjww1F5Q4q2uP82g3VUDgJCpKdjKjGXqd4e8uV1jmBCaJbEw4L197BPPrJYyu1ys2nWg5W",
  "key7": "5gke6wSVUt4beZADfDKAfu3r6GSpF5hpKkBCaA73Vi4av8SySrSbC8hDdPXd2Xo8tVsQu6ayrMhBrh5XRubkuDfA",
  "key8": "5uPj5fDEriZdpJgA5fbu2QbP2gvkfpPb4uJcsT1WxUuWdunk57W3ZMQ1WMBcwCzJfGNm9tup9WYspKRadydXKwLi",
  "key9": "64ER5vXEJRwn3ZfUnL9Bx5E4rEUzi2aLdykrvrXcPE63ziHBFnz2F3upF6tMULvguNLAsRMM2eyWat4CVMxKZASw",
  "key10": "4LoD7MVBZ77fR6zo7mZzfHATD6tGNtXpz7j1dzLHqgp3woSjvSZRxu5YxZTYsw2GU9eojMhLU73BYnhNAtYK3vsQ",
  "key11": "4a3ApWs76R8kmEuLe58ggnuvfz8Hm4qbDY8hS9iNm2radiicpzeofuTFJnz1Ca6MtgZ6xwfbCZrbejYq5L9boctH",
  "key12": "5pguWPnX5evmeeF1SfLTg835utDGVFQKKTnR1UfiJdPMfi5CT2nKbWewuWdztZiyCk6vXKFTBVjoEgfhfiqkvwWi",
  "key13": "3ZedZeWLCYbHmxzFXSgFtkRzwCpWhdhLX9hfuMZuWXwfAa26kTTyVdbyS6jFqJMA5RMWbwywXDpLCHGEM6DmLBjd",
  "key14": "2n13mF65pVrQ9kjdMwmzDgc6xMBFjpwxbCneSHKQAnYP69Sf7QgRZ1bkLk8zaewZ6GQMXCjSpjuBiFvPt8Ut3uLM",
  "key15": "hxoPtDcPsc4YP9pbypuGYykaFUtU16fGWnJHWh85CQir6vha5QYKTw4BhaKm7KRav8G6XHKVhxoBKBgxY3dcxtV",
  "key16": "5vN5BunZHGSTreuPJpou7TUBL8858aommorQcTU5BzWiFwetKbKo4kUEyWzBG8Viy2bUrUT94m6RMc5H63YD57K",
  "key17": "3CY5nMD2CGRNda8cTMwe4wkD3br7ELE6oaAHQ8GKhMHza2kAKhz3r2yofhhASMrsCeJk5pUdiwcdDCw3bwJfSm3z",
  "key18": "5xcz8vCLQ89kPetNXffHpbCJvj4Y8rk3hQ3EdZAfqo79k1zaU4iA1SRfu3qSkZX3PWBpAGCjr1PLotRmWKr6oQPy",
  "key19": "5Hzsf75hPGViGf5kb9ZsqcexTk2qpwqCiKy5V7hKpUPbAtsctCYE9GgwoKQtnWMgiEGTLzFzHxLnme7QKZUUyCXf",
  "key20": "3NdrQkWaSqNzHtX5aw4Pe8TyC4uA3qMoHa5cap1Pk2kzpG2nmGHTCc2BNNBDF5WY1HJuV8WgPA6sHLaJBz6ou46R",
  "key21": "3pyPMDMsyakJEgHaHFfdyTfiJZWSjNDYSKezibNgVwjxivz8jsosUxX3DF8cLdAKt4bnvFA5kUWLG4bUbXtT4n9A",
  "key22": "4VHWo7AZyqwKKXg1BQVaDRVZdYQmPy4FkAbK44idDnjwU2A2oesaXbhEZqjtRxLZjSp6gLYJeq8D8xFAHLZFU9fm",
  "key23": "676oKupLNRkkJkL5NZvJdtSq57upJt2wSFURPCT6AhauH4zS6i3fuPohFfY73qG6V6UyKnNbVmy9p269CcKk3KXh",
  "key24": "4EX7XxZDsV8vEAcfRUKqXcjbStAM51HKfrbfnvRhDTc5Mta7sPQgKy2qAXrzii3iJtxnN4XuTfKtvBAQjee16t3J",
  "key25": "3VQqNZFHyKgAV7nNReCfhyYtyXGr9TApaCUwDoFW9dB6BAt1hLA1jjQSF5wUA7UXkJ3ynteVwzhpUKgF3t3Hzj4b",
  "key26": "34ZAbHiwHLbxasPFBgnAY4AnfoHrNYBuT6Rxx5esYaPD9TdB2QSuyjoBBzYtfEh48JvCPciLMNr4FFL6iR1rAkn",
  "key27": "2SWPJ21gD3VCzW8CfvvRA7Wcs8JaS7cV7WBNZhvcx6mWHzKXqT7yCYhkZTSdE2GKrRM2GD5PFR9TAhW6KV26eFzn",
  "key28": "27DDgQHHqQ2QT6WFb5rd1fR6TkRVBYoXyAg9yZFzinMHaT6aYtnqsKFJCBTnUVEocJXfz3dMmeJvVcYgsLon2QAS",
  "key29": "55HxQ2kY1ewenXxLvt3wMUmsxKJtTamnZzFx48SN6Gx89yZepTBN5UxzvNDTUdRa9UsdRoohbEFSzJBGL9SMHrhJ",
  "key30": "42nxkpztp1kg42cHy2mkfZ8v47cLDe9qxYBdSeKaUSFuDpJMMkTYMGxGx4hk6vLbAgAwDpsLJdrSfaeEpkxLPkmu",
  "key31": "5sS74tgHcvhjex9dns9Af1UWNZu4UDaSZ8du4TYsDpC8pTzLYineTJpTDJ1yqxSmn2PiH23Yxj3iZB4A7mjrt5vj",
  "key32": "MRToeDMfDsQPQV5bp76LxVbxwFHTMzmDF8q8qvRi1RrwaJCg2SwZtW5gFhwfCDqrv1RkQkWT8vCLpisiSJVaypo",
  "key33": "4gCQcjZwHLrviskDxY8Eu62UN5yoChJyxuARQ9A9jHiBmHpzcY56g8zpGTF9WJwWNVonyCqjtPt9zTihjMc8SEgk",
  "key34": "4VnyuqP1MbAW3v7ddwavwQNftPKSdwTXYh9KBKUYGr8NyMm6FHnpLDpG8skK83uuiNYitGYsfEPHFDRcLgR5VyZW",
  "key35": "xuQd2JMo6ArUwMveA397YR69VfZuPELeQAFHzhEjYomENmMWdsqWo4GRrMJxyJPVA3Jh5RQYGhzNCLR23oDP6aE",
  "key36": "54m6mV2U4vjHRiekWcmE36fNpMbd8ev44Ubody8CZmxXc1WjjvGD2LSKMo6sDqpUm2DS8UeuJxTzRZCTgycpTKST",
  "key37": "4xxW9TNjaHrZ1AxMeGTF8Gs9ixfofpz2dBwYjtsQnxk12QXnfEuYHK5A5iH6HGUZrbmtjBdUMazQhtA6YcuE9yer",
  "key38": "5K5exWt6BUm7owjuww3gYLG91a8t18gyVSkMHoSViQJwTzzu7Nbcy2P4ZgHjppFSafBp2qDDik2oqoT8v8LCJLvK"
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
