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
    "2KygMwwW3W8LvjssFXZi1AjdkiHG9HFgCXjDLThcDwvHeJQfTYX9DVtpKURwvZ285Dw3oHsHTfkfmuyDwLMDVQnX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g2JW7EHdjLFKUjFWVVwM7LHS5aUmXU5UrESuCoqCNcLXHg62xtRRqYv6yARQJzpTyq3SHtPQMwxjbHmiissELFv",
  "key1": "Hn9UJGyHLyybF1JZB4XPrew5t8AWKSCYWa7A78ha57geXr1zyd8AvgvTvDJruzUqDZX32mZULadtFT3GevdtHrz",
  "key2": "4zNaumGq6HDKvajMMBsxyBtMog21PmtdntjLf6yae3QajhwoLJU2JDp8Acn6eBwcwHYX54odm9Y3kZM3c9YtD9qJ",
  "key3": "4tcHYVsRE9aHeaTx2j1vfKgMaS9sszvggd3n18vzPEr7thTk4dKBSiN5UL8PqfV6Bob6WxgiuqyJrFuuuT5TzD8e",
  "key4": "3UbaPuzc93W1SkAkSsRUK1Nv96PDMH9zY8DFy3Zz3tRkVqNaTAmGn2boeWSx6E1AUBF26pjJnnuQsoM1PpUj315x",
  "key5": "5B3VQJxxkWBgEDxQZSgh6GLqFPR883V9aAKygvVuBrQNEHk2wkN5W69CUcFSt6AfYYZTyCjaXAnmmBaRkA5AKncu",
  "key6": "41WLLPyWAtd3tgKxPkHMGtaumPzWsPGzM79LjQane5DeZZqBGpL2xcigX36GsZLezeyZswhtM1PrVGoSLALaDdPt",
  "key7": "2ZX2ZBeTzCUegxhphNzXEVokXAnsLnSyZJ33CkhQni1F4gAzvsH2i6kP3nYmBb7FPGqUXZ7bFXJFjpDukXC3i7r9",
  "key8": "5NJb1rWpFAhbnDPUxtWinqV1qduuwWam16zFTe9n3LeXZq3z6GuRMGq86RqWEs3LmjRZg3mPuwwFkgjYA68hmoKc",
  "key9": "2qE97o6K3MKHVoZmNsjbWfUeqpZzcoiXa4P3FVUjaX98bsm8Dde2SGgVYwH5KSzZRGnUc6tEktaexn3zYvqRnp7C",
  "key10": "3vNtNp6shzdpBxFGEL7MiicWBJSTXQLqfKmBqd44MesGQXRLXQVkXQap5XuB85BWr6ucP3WtU7rnU5HPAqi1FQYR",
  "key11": "47A3ojHmW5tHSRN1Bd125aFzhTCpyJyszmB1vw5oLR2rcnyP75kg5ftz8413nTR7Yt2eaU42sTCvMDRYKj56CRDr",
  "key12": "2866owhNLwsT7KfAnCAeDD3THgprQaxccvXo6YVLbV5havNm966KM4qHk8LZ1zq3sGRyX8o8usTNn51kpP8Vxvce",
  "key13": "2BUvXPza4Eoibq2n4xmfEjrD7RymMDfadEvgonTWeeHMv4fGC36dbTuGt7PSMG13FwbBjMarCjKeuzJMYbLPUaL9",
  "key14": "4NpPwbGQGYkKDya8tKfvhPJS6XkCGQvfTSZy7GX9sbF6DffAMcy37Dw9FYmritKVjZwvKQzb8em3EJpHav1siNV1",
  "key15": "3zdNY4uh3TnotEpuksDaApzztntLVrPHvQTL9pA5oFm1urWWKCVzpCJWmB2J3UJjFyBczUsx53865Es84iV2xUgW",
  "key16": "DpZT1DizErWJw6cDvH7hkdGyT3iMjQ3aTB51444oUnnonThWvy2bTCPnGGVrusV52SNFw99XbMhrepvcgdTqKcQ",
  "key17": "4Q5hhfhLP3S6NNQoCaJdsn3X2s8LjuEmzPpuYLgrzgYGhaNPrahhuxhBDpbh2GHFzJquXbWJWiTGy62HC4qXNYoa",
  "key18": "2pv6LW5SaTVHSPZPS1Q3tnriSy2TRzvZWzKQ7Y24MGaVAKUA53QgubWi6ZPDPWoanMbPrXsZoAwXRv3JnpWDdGCp",
  "key19": "8MfU2L2kz8ageged3QrWgvQuUCaqfugWEkGx8PAhY57hmfWx3xyUhynf8UnhkXyAkQNZdVwo4PhXDR3EcPYEreV",
  "key20": "5jL1AeGugLbnfWoPqBDmqc1EXarepGhvHrJ25LE677nmGxwCUj51ESTqnQTSGPDKikY6xBiP1Vyw4igEPhAnfJeG",
  "key21": "2RwD1oMnWPyGsgUZSt49Zh8XCTWT1J3BiViYX8gcs6AcV5mSSkjX6V2FhY8dPHhivqCZs6vKCkFbg3WqjkTRveZ6",
  "key22": "4F71sKapqYLKUBqG6XT8bvhpub48ZezVyHxFymDdXa44sQFe3CZfh1yJeHy2zg5DVRoXD6hSNxQhHSFGEEyHDfn",
  "key23": "61Vi2vBafSsvBBPt8EagtXqGFphiHAa76UHmGH5WtEhM1QhNN9buHF7xacFMuG5xgJs186CN4MQYo758Tgb2CBZC",
  "key24": "2fB3rjeED3Cb7XBFXFDKX3uQtLKEtXGAieqdHp4rhDc18qmijPzgjnRnAVAxQp4xELnuDd3k6nxk9mbLKyrU3eJx",
  "key25": "79PS6TLW5gLrCYaveXvUDzZPvZC8h88fJc4htUtSDqP1BQP5HUJnDAgsv7jjdR8qUiGccwDUEetqStyo6kB7ErT",
  "key26": "5VCkpjR7bGnstJ6zrqW6xa3dkFdNaC8JessuUhqrw6JM2BQQ7wX88VjDqqPgCeruNArKVVNYhB9cYb3sRHdKMSH7",
  "key27": "2bo1EUYpFa6AXTVn2arpTnEhBvQ7bXjGzwuJnzJb3xhu3Z2gs6BSHXHQfY926r3p2FG7x3ix988b9ytZR58mKuPF",
  "key28": "2GgVyKDxU6YiJ22mVrW8d6xvLQApXDTYaDBikKknYuaMP4NSeinwNoje6gKYpFpzS9S457hmdUS7vUipabqW5aSj",
  "key29": "3XQMvzgExscuhETX11K5cgitfD2JmWXPhxDmG7xgFU3y4JTbZpjCAkadkjU3PJYJnyuKVLfACxfw2TB4Uuin5ETZ",
  "key30": "bMQSeohZjSZn54F9RYBmPbRQmtrZhxBvTLnkdnJubDqhBhYe48aVXX9fxtsv5brEZR4CPuiLHVZ51iG4c6tf52B",
  "key31": "5FvdqpbVLmzMwTm3CKASN4q8JTZtft5BNSqkzuqgQuQGLk2HStegfmjxXxDLuWivA8xnFPz2pkZFnhg3gz9rXmq9",
  "key32": "54h7XTs77FuHAsTfzx3BGUjr1PXpmUBPFuvuKc4cZbm6UeRaE9ej5SYCXUahkfQuC5PvpmkcYfzZckiKuPJZc6qw",
  "key33": "5uE8G9giFJbabqibvmzKoYM4BkNLKGMQTWobPdE3FxC9HiQ7pxeo5d8oWAXn4HP3zDBpogRS6eQg52cDmjhRuzKc",
  "key34": "2FqUDUwsAHw533Ertw7zX7cdidLCsj9wkkJ5QErhpMypZQeYAgJFboPSYmPyurf4RnCr81V4gnKZ42ZTfhGatUVP",
  "key35": "5UubmMuZkay5fAeZvLV3XG4S1L5CW6GriZHJmfhMsteHH44A9KYKFN3QBC3aZEZGY8Th3QP44Mkd3WzHRVgoYg8T",
  "key36": "5US7ZUgJEPnvj68Y8btKHT2pJVrkzChkxKXMNNv1Zr8rEpmL681u6UVaBHBmVykKcrXFQ6FG3qtBQNKo4288yqwp",
  "key37": "5jRYqQmVYSAtXRuz57uRBNcQ79VceWLT3LuXDeTtJ5qq28HwvLTFiVxoH9BhJ1vWAT9cXRSg7qNQHyt9upYR8M4M",
  "key38": "DZkpEhzCJojTCubvT9qs2roqYGU7w1yJEwP4WK7h2opGpbZ6J9x6RyVjstgQEeDwEskEkjQQMxim97Lv5uW6iTt",
  "key39": "3HBTYtCXtfREqLV5A44Kv5hZWvmGiwJe19mUEjjHRjQxs1fnQXpmLb2CPo6qu6Cfr7XCBzPn7Uqam4jv7Zp3MrVh",
  "key40": "3JbZYoiGHsDSjKAqMjyXCSL2cMiv6KvwFxi2tuzCjGFdwCmhkDV58Y7sjHFJzv9pb1Kau1z46ajLZfTsu4B97yoA",
  "key41": "5UyWVNwrkVTW2DXwptq6x2A9h5ghTHvT9Wok5tb9nDE22yfgXSrfAD9d4yosXfM6V1qL61KoyX8tt82jR2cXrP7h",
  "key42": "5v5WNknperh3yRywvq7e6QMsNy2Kc9387Be58psdnfYeS51ycussxZTrB8A2RzsBQ8p3FBfFRZjTJVNpAuUCfRrb",
  "key43": "3YYhTtVdJS2MimijJicStsnwAsjpTBPYfWkcz2adDCeiya9VGPg3J1wMdzFB9jrnB4naf7kVpkgB4FYztBJd97Vx",
  "key44": "PYwp41Hk84LLDyQdPk4KLQAvVDfEWkKAReVBSCNCgUKdp7umJDRMJYU4G51hgKKdBfCVNqPmothbWTFbVZ4WJ4e",
  "key45": "FJoaMTouCRRzBxmrdEhFoX1rwzJqdPhwUFfEVF5NknvThTaaudJgs7qwSG2CDvBz6PxKhCNMzw9RT3S8ZFe63No",
  "key46": "4oEi7QqwCUi8zt2Cg5WeADfJbiYRcZgxpG3WgazKrPj2GSsSrAzEpcgFSacLDncL3czmTtyj54V3gk6mUykKUFN5"
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
