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
    "5xDXKwK5CPvLU3L15zawUFuASM2SDfXBH61kVHoUfUfBBCeMZV6JeVzWda2ybmryG77oNXVkb1xmehTATdpFUsc1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AePbignCM5QWEwyuZbKfifAuqrD6dvaHMvjuq1utqVJX15xNdSZNb72x4xmupUNezrEyvTSUokc9q3ZzKqUN552",
  "key1": "2urwYqZaYwGRGybUtiEAJktAiHmsmVJRQqu63V8npFcQMFjanN4dzNojW3RbjHpD9NqTLLtVJAsmL31ecD1dXrPp",
  "key2": "5yeCEx3KzW6n3dYs1x2nJwJA8aLGF11GijGvvKUfGgMYV8FSH5UDiriTkiQMuESMYarEXu4Lfuz61Lqv7P5bBznk",
  "key3": "4sNtp8rSkXe8qthHGCL3LcyoQsWdWkQ8Miez7tGmbyqfLUexaJq6vV6mttuQVDWf6FQ51BYysEU1YL5y9JFs6B4o",
  "key4": "3ywT525Xnx7F9g8whNUsjTirjGsUHFTykzTC8PN3faZsbD27K2ZyLgnE1BK3on7UC4YEC5GXCZ8Uvc7wrA8gkXRY",
  "key5": "4Tt22WFZrbsqX1sfUJ4AYtF7ZG1BeapqQgHbSeFovMgkk3KsE4mGJTy33DJ1jNBJ2pMnDr1awjkot31ML2pprQqM",
  "key6": "5sAaenXT8pG5QzEkcKFk6qDSnKQzrncTBQpZmK1jJPiyHGgs52bNuZUM4zef6bg6jjgMqP7S8xdaBc8z9KJUfrMF",
  "key7": "4BCkWqpWjiQBE7Po1vncRJ9h6ZUKJdjwPNKBVf1QYAXdrvaXoHJVm1pxcX2Fw3nobdHp5918Bcn4AFkLF7KXUJMS",
  "key8": "2MjZ8vsaWcvg8smFU2pM3kbTrJCmHeF2PVuNc8B4fWgL9gacWnttafpUdm2QzE8VDRbSNK1pN93Se2VQFkUziTUB",
  "key9": "5zTNZSs8ndYGHaeZXzxt9rUH5sVUKDZmHy5cpZY1ssmt42Qmh2cFUYDVthUjpyRSc1x8w4RXPZpH5Us2hjQTNdJ3",
  "key10": "E4ejgy5iPwbAooVKV3erfufWxCwwKBwSzcLxf5gzHpRb7qfYDWLzDkmH9EcUvgCeBhP5KyU1fLtXEpdi83wevTf",
  "key11": "4j5JGuhFNqejY4XDqv9E7TpoDaa5c1vMCwNjpMZVb19KhpVbtnSjrn6vHmXaKAfrLUwkoUJbyNzND6jFTtv948Fy",
  "key12": "3eFpxsMvek6MTbwyzK6f1RYdXSHuwnAwemGisvkEUkXh3MzHnNQstwyhGnBC3jdoQtnLADek1uXwJK47PgSeS4dZ",
  "key13": "6147DE5sFkrDpoyaYn5Qq1ekEEdxGxRG6woJEahN6SYJwaPCaG8JrU7Fg9nWUobwX8ZJ44hRxcxmoHPUArJ7eTfE",
  "key14": "5A2HjTWqUYKVUH3MSKSvZSV7B45Cc1WeXrpa4FUdEgRPDRY4AKswrxkrFMfNPXP6oJxYTmwKyc4PSDcH1cfsDnne",
  "key15": "33G5ZRFVaFzTwEyegBFaAVvdpWWtePH6odiYtvvspzVETrJVBg6WpFjBS5Y3JkfHRZynUoTTf8xtDwD62qkjvec",
  "key16": "2FnVciSTjYY6vZbqf8uzd3aWbjuRu7ZTrb82g2xGTyETL7xE1PK4ubpDjJX8vdi4LjBPDeEFjvwm9uMyShB2RfQA",
  "key17": "4MGBnEpAJ39ABYZdaB4q5m1zwUyBepBJLnnvFw77cwdZFXrKgL6UYrAf2JtPvRCqThBephumcbaxFe3gGhMKGjTb",
  "key18": "fETAdPxTML7ds84sf7zmjzRyfm9nDhFKZ71D57ttFU3Jh21PSvExSPyCY8ySJRxTxtsRzH5VCogNHj3Ta2c68bF",
  "key19": "51jCSnJdEgrn5x8wYXcTgPS2DfJu86qBWSZcyin9tEQP6sJ6x1eXks8Bqy8t9uCYsf7Vxvyu6DNrogHd6yZX3zNa",
  "key20": "635jA4UKw82Sqz1X3Yd1gY78CbuGqivWE2FHyEJP1hPHumnN9y2eLxpVhJJes3WZ21YY4F35zHsokSaVFJocJaB2",
  "key21": "27puCf4K63D8DaRcBJPUvjnGnQnLgniyVdYNheLXTSmUmLMyind7XwTEKi7qnCbErqwDHtqbLiCLYSnygEjfLYTz",
  "key22": "4nzY14QdT5jnVtG9phNZ5cXnDtJY8e9DrJCQqd6A8ZdB51gX9DPPxAtL47X34r4a9P9AYHvJis5iA7GWWMXS9PaD",
  "key23": "2CAUjakuha3HAG2MkgPJvBsZc1zC6HJcPHvwHqAFgoL3PspWLqH8oWTc1dWMHz7xX81gaod27C5fYDYUbztiTsLv",
  "key24": "d8LKZxcYUpE2CQgASWoJ7kA54JLTAgsJw1CzUaGdn3UMdhaJoDjq8Yx9ukd7eE6dGSs5bTaVT7fFB5A1z5G3SFc",
  "key25": "3ZJhEhRr39eVbi3HmezpxpqPc4RZ1WthuZ8FzE7EkHvd1sZdjevFuihjMGEqKj7f6gf73hG6Aiirfk8PHWUmN2Qu",
  "key26": "3sRCimjEcrCEM9PLZLqdA7HZ1r7iAiRydx9aA8K5GFKUjhhHr9SbbStJerBrr23GMwVTUWm2Ho6kCKWBZVR7PiyS",
  "key27": "5Z5QVEVgLm3Y2edWBmEesh32vLNPBaXWtNTJyV1HDx6a9k4PF2hiiiuWg9qpy5hk3P8oV7gme4ajTt1Boxzwk5E4",
  "key28": "AyD6bi8crZpvzuVhS5TZEwKBKzLwCPmthN82u4JFbwtjoGG1RMt1o1fydefJzRcU3fJJQWrQBYn19n9Anab92BZ",
  "key29": "63sb2UpDRkQuVB92cYcLzBPTTfDskV1E4xmi5ESwV7UCKip9hKjwsYCrVCDZTLp9oHkujJZpMxuV89Fm5E1h5xiz",
  "key30": "3rqk2WxXiG1vpvYoQxDoKKMw2iWZSxzwsccudhjV8e6KDSJBcUEKNaPafCZ9pRTnp8FLgCk6tHVyAJd8NrzNseYV",
  "key31": "2hpNabB8TpXaZsNinQAUvcYsD9zWShSP9hTs6m4V9kG53t6JFDxgHMMyK1yu84Dd3cP2XsR6r4kzVvh9V45UzZ1N",
  "key32": "9TpZs1YBbcqkpF5gMuzeuoiCxCtGmFBAbQYL9Rgs84Mcx2T4z15Dy27q8hBYBUoxqYev7ySkddczHbChqkVyYm5",
  "key33": "2x4jj34FLc9cvtbiQKLLhKPig8HgLx53w1KMc3MJ8ScTDPWP1U6fMAhtkj9A6cgwQZWjm5K8z2tHvU4hmokxToJv",
  "key34": "66DVZ8f3of8BByoH2uLvseSEP1RqYFr6pLvgvzLvu2aCKgn9VBzs9XP5THEWK3HVHYcjPqNUrHkECcjkg5sKNGvv",
  "key35": "5NwkDAUfFHVHXV33Mg87e5eiEnyktnhQNSSikiGKH4BfgZeLeHExQ19s33vQ7QWR7V4iuFQmPYRbWHoEXCWizXXu",
  "key36": "624tEWtzw421gVcee9KJ8KXWyrKb8XTwa3ramJL9FWBdBApEaqqvTM8ZeWdvxVuyyTNLZeLu94F7EB5i42FXDufK",
  "key37": "4QABeBhMuAfKqBN5vXsGFEN6uu7CTbPqDK9diwVWD53sLJ6297b2VxjXCGASPXs9beJ2LWwCXJuxE1mUrnJhKYKV"
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
