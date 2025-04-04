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
    "kChFzp6QufdjKGVVCRqhqWY2Vfe5GBVFFkNnYf5A8k45W2VJC2J4p6qUHRHntsxUFmdh6JrLezZR4Lt5hvxTKFK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Dtoq6En2p69sgD9eogY5fuw3mLfnKQWTuRE7v2PWNipaKrfsxLVbLhA6RcDabtC3Z6LJWL7nuDVZghaYpbuBxFW",
  "key1": "3MQNNNsWh4dzyuA8cR1m83L7TXSpF1xou9bohQQxBVMVxX9ZPfWXxaMuG1MdcwCP4X9DM9njsZRpkm6cKvNp63xJ",
  "key2": "3ZKt8DVycnq7bPai6E9JLF19BCjdEtZdCDaP4qs3D8pkGGQFAd74qWa4qDTnzMYt9RkDjcxjD4A2ToosmWYKzhjq",
  "key3": "653GXqYjccvChYL6ELyFEACQhhYzDvbgvdwxafXMdQZEmzXCxdpEg1pJra3EEjbeUbUxcJR7qCnDwMLehvn5NNbF",
  "key4": "3j1CCpgrELMQuKGf4qrJTweAKqJCsE2Ewfn2qhxGYMWLXqF3cD71ofqTY3JRFJkASpdUNKBxXdLuMkMKFZUA47sA",
  "key5": "4BWhsCoeWD1Dy4QginTa2xEPgt4iUJro1okUsYygwMNSs5xTMW2BEXAPP5sejpLc3CY7EJsG8PokayPz5hfUSk6Y",
  "key6": "5JkRNhbkQ2vJjbtaUzGqr7PyVMe2iv5bBudkhE4GUUPcPdyzhYRP2UHf6TNVgPyYFkm32tSj4uookTQ7jSu6qMwN",
  "key7": "PRetGWxGnDP5b45RwVaR6yYotjsmzZ3Bu2kDDG7J28pCPyfFo39KryHqwEaScMBQ4YRKh26ZccJ7nYTc9KnWLWx",
  "key8": "4hkhA9CikXs4t8mJXrsgcoP6A1EPtcCxMY165ExwgDMXAUTiHH9VeFCQprnq4Wv7BAPbb1fgbTmRn6AthXUJiGBg",
  "key9": "248XepWQeKmqymZAB5GdJT2JyNs2EAiVxBf6hKWSAr7KbpGX9NcjY5rnKXyqNnr6fnLCbAb4pWmbbaDeJW8kebiT",
  "key10": "4TzmQ94d9upSKxhBhSHEaw1DRT7DSpxH4A5v6nPbp3qkFNNceqD3r8mmuULFXTZ2EMiVPQZ4CtdvfhWDhNvYrJ7T",
  "key11": "4PtWwJWsiYpztr9kFoC6rGs2FmqvQ9fDhHKRMdtpVj6ncb4NXoQen75wankrk8aH5P57D1suLheVz68LfpifWdY",
  "key12": "29Hzg4uCjg4Epm1g9h1XYc6zBVH75VFdC3Uhx98g4zn3h3j85146pbGs9LfUbeiNGseT3urrR8eAxiw8Gjxf6NT5",
  "key13": "CEZ37j2QZBpKTvPaJfqwcFPUqXb9MDXAjm6xnTskCa8RTMGV3N8z3Pix4UhDmZUNMYoWcvnKiFsErtAamsJViiJ",
  "key14": "37ysauy1mfpQMLtwtYm28D7aLfJuqvCpmsEkkPabxZ8BXdV1bLTPQdawhHaFRpywz28Qpdsmfhsxs3JoG1Y6TuHJ",
  "key15": "3s7qC3cPUMRbefE2CR5KZvL1GKKWP15HPtyu6xi5Ppq7JD6U6SsyDNVZMth9PPpF6ctg1ahwQvy7JCCiSzBBzoqa",
  "key16": "5PESkDebVM6RucaB8sebpi5YAj3t5nUoHNxfqmkawBaDhMd8R6rUk64DphJXzPWnmJ7dAS8btGTaKAcvTrsWLi8y",
  "key17": "3HSvFuS9mHRGXBAXpgods3h66V1BJ3nSiZYwCxXUcWXbzbQG3RXmf1LoiXVR71AeMYWDa2kmBSw7XoLJmJqvy7Yk",
  "key18": "dXhR24cq9q1TRQc3hupABy6WS2NbEhNY1WmbJdT3DezMAPbzdUhP2mRcaEBTrDw57Yhj1Mddmrb2sWZM5uXxNGo",
  "key19": "4PZcDvmYKCEttMQVvhmEdsVrhyU23YxEr59yUwBcX4qBtjcQQ9W2y5jPSJ1m6cqDZMzYjKXDhbVpZpLmjDDEZ3wF",
  "key20": "27dd7fLcoCPDq8nHr96rxWiPapqfXFeZoahTvQ5P3KTpnn9563cWCWiw91jEhGq8yWMvbF3b1WQx6WyHiV4AN9Yp",
  "key21": "3tFCaL7pn3iatSNKJhnsmMLAidQ6TFoZuaucba285HZpxUjuzoaSe733ZEpSDU34vQwuXNcoYgBnLkUw5xobyjhY",
  "key22": "5GGhqCVncHn6PSz7ZH3ucuSmbLNXeZVGNfBYQKnzh286vvTu6zpi5gMauTc5U33CENDu3BXqPLJxtMSjTpZfojdi",
  "key23": "5rS6Q5bD62iDTm9TzBZ62P8GtBrtirk4sLqmJNpu3xMcZfGntyuMK8ZV3hDxvdPu42r6mY9LJjNLTnnBpVmndXJ6",
  "key24": "3aqSMA5UYZWgk2UGRhSboNJrbPcCovmpF9qt7YZEVRXzWknvb87FECgFT9QQESX7Fc1jRonXtp5vtDf9wxkHJmkd",
  "key25": "5KFT3erEj7P69yfE1MHVcnzQy9x3wP378y3G9PgyuAxNQvxCbkCRWTQ1coXUS8xDEV2HwLsdzuG1xTXYzXwvnFJs",
  "key26": "oDsGYBoeQbTEebSE67cCRVK5Tmi4VBvb3q2M3qzTgtjBMwR8RJnrwj5vAMHy7epjvjnphPjCDVRWRhckB9gTVjF"
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
