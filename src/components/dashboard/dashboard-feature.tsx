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
    "J8uKs7YneuS5MjMKjVLEsMwt3A8wxQGdVBvQngo9ybbragoJGgFBrmL1p5TQ7EQY169bUnhdJr2LpBnnHGo6fx6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P8pS3DKi18Mrf73ftqubzCt8BCiGMxK8aR9qvFjNc5QsB6rU8mFz8XLc1mW14q7wbwGusmAAYTF4YzXdA7hRcrB",
  "key1": "3XMHTmhNb7w5gsHyRKWJJmMS3z9ZBqKFFvZ2iNeY8gC43btjzUoGxQqzrveQQbZPWiyPDwGqBvUvktL4uWnAvdde",
  "key2": "2VDmf2eJ6oZ4iJaJ84WXLGLAjQVg9spuRHxWCqkcBDjzciK4u5azBUeP9gyx81aQR9LHiiYPZhZ3ZRXKJuw1uQM7",
  "key3": "itgGQmvF4VS9PEDQ46t6LdxXXPJuM6NU28gZzpZzZgP7jNReJiZaND3dLcDpRmZe6tX4UxPMqRqnR1oF5pJW45k",
  "key4": "4ddybheCPvatFipysgfcLTtL8hW1Tzkkn5YWmVZBUUKXkUbJGJTjFKfgvffkB4uwzEukfXXkVg1YVFV8cXvpUv3q",
  "key5": "3ZmG2x2oBqgrFnpRLMU4SR3L9qHAwnec4Xkp5A8yUb29gbRQMgDPayBdPQpwqrL9Nks3jwWisTYneX1sb3uHou72",
  "key6": "5eWdk8G41EuifGseRq2UPYTRZ4bKSbWBTkY1oWPXUuaPKYT5c1NbAhZ5Ad6WWVvZ7vn5gnPH6v4ZykEeEvcTNNXU",
  "key7": "4qmGFgdgzDa1GWMU45iMBL996p8GH2iyuFftSuKczsvK3q8NX45buT2975QGK6GftJXZAnn1Yoz7R4sXq8MhXh78",
  "key8": "NSZyMZcFfwuCM3Joj6SiSYBKn97wwLVGzeaZ3JnNp9ULRuC1tg5LBzrGkiujBaXEHiaHnZhf3JL4AYmmYcB2CCs",
  "key9": "5nyfVuky7WV4UrHqxomZFQjYth6nXWCV6CjDriL73JAiBvbWKMFdyDca6MpAN36MqwJFk37cySL85JUdb7DuD3Fe",
  "key10": "5FsuVp1pkE1uhZSWzPeLckdy47mNHTBU3LXCNYboFAj3CCLAhVBNJtVdU6ZUkW8WT71pHWVyhx1atBHFCUx7x6RE",
  "key11": "tmxEnztdU8Q221ySFuT7n9UTMLDC5FHdbVGPn8r3xy1stfuDXsAmSS14SJrqJz4NnQaGzpY2u6X4SQyBXBunVXt",
  "key12": "5uskVbd7NqYQyivpjcXi5a3vmTRKYPxBw5HhUuodTtUk1r7w2tbHBe376evExC7MoJ9ppKE7wzEzXGtdcqsUHyG7",
  "key13": "2bhvDtAwWY8KZTo3bTotYWCUJMX7pJKQ397UDigu7rK6x65AqJgu53B8bT9z3S9gAuM84aUjcFZmAZgugAkq8xCK",
  "key14": "4zXoAqJXvWzYusJ9GC6NVrzuVQ98KKEksDN7LnsVxtziSwYbrhtUzjG4b6hLULor2UceCVMELPhrH5uF4CbmKzRU",
  "key15": "pvxbDJi5rRNQtHnMb1CEsSPromFkLGkSEGswdVMziYZjbPwT1UHVVUREDVA6mU4jGsC8yKrzWfCJ5CAhLpacFox",
  "key16": "63Zg14PY3FudTNB2umKEMsXFNNudAV2h8wYKwhd5Fsrb6zL2onrXs4D6bdgLeRF1czPqH85v3xpGzMHAi7av5dwN",
  "key17": "2cFLzmqwvAAjMY5XK4iKz2h1RLvAAniMAWKDGhpN444ckRYpsCNseB5gvLbpjGp27XNYLb7Y3ttBG2vGBSeu4Tfm",
  "key18": "4sjPNyBWuKWbFUncTSh6ATr15i8XNxv1Y8npeno2TSbDkqv2LRbAFR1fNjuWKuoy3tsPN5fsUhTLwUS4MjdhWx93",
  "key19": "2ceiHmMjXRkUch7LT7Nr9T7NGqSi1i9cfYsGRv97asEDFXFWhrArEUJDd14urhb9ZGk4gUyk3VS1AANx1bQALjv9",
  "key20": "3Eo2JVZUhYkGGeHMG3KQ9nhiFsQpF5QSc2S67BueXmTDUR7dH9SNVXTB2niYCJD5ngTK2gwnZuwGvZzH2W1jfeS2",
  "key21": "2TASNt9zLfj1PCt7cC73yZzX64Tpg9EbT3QrYMdbzPA8vmW2MKbQJ9nE8ExZaXNY2jFzsbDi3DfdnMnP6hh8FivB",
  "key22": "3w8PbZykA3sBvM1QgahxHVkf3fMczzjMq6vHCYcoav3UzJqgT4AetSz5n2RVMvjwarPF2pjAG8gwQedhhbR8GBD9",
  "key23": "5VwfQAdMSCxveDmYaodsvGFRM1c231WGr67FmiNZg5RFQvVHvHH7mGUqfRJLP6vjZsWpubF7SLefwQdGxtjEUxeD",
  "key24": "2r46TvQLP1krTHwzeHChhxJCWKmeqeuLM5bYUUC5YfqWZTSq3WVFrFqN2yJDHXGoFw1kkvHmHs9nFUzg449pV7Ur",
  "key25": "FgbnnKAUHavth2Y28EK4CzPv5vtmdaNS97AgX1NErfjv5z1QzYqNXfu46X3pYyu2teTN55dxTmWfmksKzYfyi3V",
  "key26": "Jva9YekaToSKv8e9yyWuSGc7uSqyWKnEgAYXB5EyyFoeqgEvoDZQVKY5yXYwVTekUMicNuGSwXQzgCGWq9iv2ET",
  "key27": "4TNh73fZJ9HhM48E2k33YypqwNUd9sRpbUThDVavVx33B8Sj55HpmUc6XHqgNAXWQQEFK92KbVBu8FojNFF917n9",
  "key28": "5QhXA4roA5gkMJPD5HtKBPTKbHMDjyoHaiRPiPcgo9U62jYjw9brD4MR3ghxdU1zyQNsjcWvFC7c3wRbQmW7vTSE",
  "key29": "4ipbVrDdrxD1qsxkJLGVgWaKDvUapSASR1t1C9BCx4UqfAfwTRB5iwNGLd9F4eKKoFDaHCcVS65bX1DvGK4Ckf2W",
  "key30": "2SZ4n9No1qFttmYUGrkMovaypyyV3Bx4g2YAJSVLvrVoAKyvFNrKQ55orRgXuzifjiS3mPtMFpkzETJtiqd7rAqb",
  "key31": "vWAU68jcwp4qgDFZeo6P9RNR1GwPdsBV4ecasWfRkiEvhbH4hZkPUVPYA72cNVJMS3As6YxHJPDat5qLjnpwr9T",
  "key32": "4ZvB11yNeY9HAfpxELduz7Qk9FDFdJfJM42YV7dnrC2PHXoSxir7EK2yNaQvmLPmzXzzbAT6q5baUaxwE4fXKoW7",
  "key33": "2ZPjyYS8M4eNBDZjuBMo3tSuX46m1eJ9qigmHoBQj2jeGYkss1A8Ljjzga6JgEzvN6xfQs3JRoUcgTCtdoLk5rJG"
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
