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
    "2AHhprM6JwjVfsTtBiQSnQkfZ8WYoyLNxMrfMG4EszkDab4pUdqNuXfWk3jkwUydCYZ8Lv3bEPobXZr8oEf2vbbb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JFnbjZgUn6kuwYZancCv9xLz2kbQZ3NZkFc7TD81c2VxNyNmzf9pBsie1gFrVrajyPKQFRFn8KRSC97jirM8i2V",
  "key1": "4P9LV87kR2yJbaQiYhWZPz9sVN5aXdWXjUx4DJ8Hsr2tDJrdYVmrMrzHZJ9HdwHwA7XM59Wj5b6CxRABrS46Z1iN",
  "key2": "4tihsz84dQqk1bh9EWwjtf5tAHvHRKmy7mvCa5cVHqQn2Dk8th6d92aYT6DWPsy6kGCks5RBisQKFLrdGtgUgdeY",
  "key3": "2iLhWTDAAUbReVkm73ZNtm15ZsP6SeciSoudCxheF1ve6n4oc79ii5TcRcxpRvWBwNarmJ6nEyny93U7XeG9WBU2",
  "key4": "426yRnWtvkVkcjuXUXxsEETuB9UWApwkXpK4qAWkYG7dTKsvwtJAc8C84fkjJhgp3WSwvGjngLRrRMcvi8BREB2d",
  "key5": "3UhKrDqdySFxw5aB3aTEvbXkfE416G2etSQyUFh7N4dpxWdnn6bSphXk6gG243iVKKz8EhURc2BvVEumpNuV2dKf",
  "key6": "2rrbW6nxN6pKXakpKpCUGQYfYN996XvHHmcpZ5YczEg3wQBN35ekSmv3ar8XYCTiUGPfFvwP98iqwWYXXWcB34Jg",
  "key7": "4GwycE15zK9PnUvEcnxZ9fhQyfbuA2MtTKRHPBfMBSKQuJfc83DfWsAjs8WZPo8QGWTATBrZwH7NczCdWwx9K5kF",
  "key8": "5hhEyC5NvjvxMHQLqqVSpVXR2p7w8Tben5UyGLM2frYLC7BTZnNbeE6wvctwj4sgt7Zkd4MnhcwkYv8bskZeMwmT",
  "key9": "5c9k4QLp6qfKsDM7ky5gqQ2tpFJ3WZdrPCdSWFQusSZSEjPJbc6E7wFKLJBhxDYwCuEDbYF3WaUTMovdDcRisrFH",
  "key10": "5P5ahypdHCreBwqikxoBBfs7WPo6tLEvkiAr7M1aPQwcufPqSwY7Q5QxpyYTMFq7v5LCc821kro2a5prJQ4ivwxS",
  "key11": "S3W3jKqwdy41AqAmLenYK4rLyhPaq8YxbhvAZ2YYJYDqo8Fr6YUpD9vNks4Q6QxbtsnAE5oTkrDg1vL8xDnLVhA",
  "key12": "5Mf3BMVRmegFVPdkJFoJGkCAGYmWzALXofpb9Ej9V4ndLZqujeEma2qBZ3T6GP64EuuwK7EBWWAfR2VqgptLjopN",
  "key13": "YFLFBrrXR4XXGor1E3HLgKrs8MeHmUHTSKBHLcibY5SPUe4B7DVeAodaNToKDjGF3x87p4o9ciaoeQ7bTgR99fS",
  "key14": "49QfPyTNMkwQP84F9EpLLd8tdzh5tGnqS3MbvfwkbTpRWv8uGk2dJz3s5qpWHiwFQCbh9W3cx4d9S5ZhbqgySmpr",
  "key15": "2D7mifEg9ReSUgATQMu5ksSMQXrMjshnSKiJnqbsPyfLGYcd5uBh4YscHBZVG2ewcmhs7Y8yrm4ViyVDvtkWsWCK",
  "key16": "hRiR3eMsMgz1eeY7ZEoMBLtSxCpj9LxLwPLwz3nNzWzbAA2BVd824XtbRz8MUcBepkdzUR7XiXRAGDXosbgA5oW",
  "key17": "5Q9hg8TAZJtznXKZMd3xxHJZUHYyLG24EPfaT97Ef2KdWjcZiFd2wn7eUfbWn1nG9rnSygUnv5p9Xp1GRZg3eNZy",
  "key18": "5ufHJsRzPM33YgH82RgiE8VNEZ519wvX11YitXbpuZY4dkqdCjboa66RdZYGodQ28GJtoNNzSKd3i7RiQkKE17pj",
  "key19": "5WW7m552YdeQ7iYaHNDAcbTtC5bW812v28YMLtBfLmrLHQMwPwqEsBtjArKEC6dK3iZbpcX3dCkUv3izSyiFc6hY",
  "key20": "2wtgMnxAPs3HMJEEB6Y4rjtTinJjGJNdYQ5Y35TqYpAtuSJiy9u4zAQrryLX41nHLdHb9fY8dVWzJuVjbsNR6bfn",
  "key21": "4TL7kgwUZ3BMvtKVroUpkiAGprSUBkTD4QhjWCQFgRjSYA2np2w7iCt4uMmSYMUYiJsVdCvmTzSRewYMz5YLmVEV",
  "key22": "44F5pQHCGfBrbYrVqyLN3RadBndpjhG3oqoC5C33iBXxFK8Hf481YvoQ6LwJyx4iohnwWQe5F5FjGFnGsBcoiCcC",
  "key23": "5o4EQ7HwC59sZDGBc4NZCNhjyHX2EMqwk5BwmQ6NpbquaSWyJ5zZa82aiCXPPhx1EEnAbtgEMgQKnbJETBbzhW9D",
  "key24": "2maSuXHAD4qzWnCXBu6G8Bq7oRiXKmyvsvH1XKFzMgcaHhfZrvMhp1AdK6PXKG1yW6r95dCo5LeDcB9KdsoGmxN6",
  "key25": "fE4SXnDfpLxeu2BcU9Z9TZhop59EAcMYDsmvhi2YtoNcSh8GDECRw6u3woYiT3ALmzY1YDjVk48yU4GiEMjY5HQ",
  "key26": "C4k1hewEh2Zqqx1kN6geZmzWJ1CA5iUQPk62Z1LYeMd7jA3N3cquv3teMNYh1Pxg6hivjqNNNVySbU1bnsSQJgz",
  "key27": "2euGHpqMgrQsPGGMnTQCpDzjxCWWVnc1ScsoXNdjJG6jSCSwZmr3zHWmv2R7k9KnjTH6KkE6hZNU1eMmGy8aN9Ts",
  "key28": "4UEqouQsHNPZH5zP7L48q5aimF6upQQpTmzgnKeTmTL8xkWHo9rHqXzJSDLJc4EZKjSc8ewUQp5hSeozxCR5BE1R",
  "key29": "3RQf41BXNcEfxcsMxk7X7zoYKEmT1mf89TfuxLd4QgkSyhr2e2G954exwbXJDFSTE4oSvX5LXdhLJ2FnVRKn1gcB",
  "key30": "2WKvh72AzDaeCyuu9uwY5LwTwjN6t9KodczQdAm3Rv4GHfeA4ekWxYzDNQz2MmLdBw78GVaBNF4ZYNt1aN5aiHwd",
  "key31": "S12vXU4KrjdEuBjMrQpykf5v5SSoCrdDakJ4w5wYNSJbJ9zkFcgo1CinULYEbJnrnH9xPEwhVRj9JoqWSCdbHqk",
  "key32": "fva8JrtQYSpnBDmjfiGvVSgX7cBESLrdc7pVWocCuJkzcUYBGPGzGNU5SQxf5mPdXKUCrDajK4aMjPUuXCJRQWg",
  "key33": "22FpVuK7PXQUg6jBE6RmGtPUZAg7rnVNY1CxG4TAJivZVTfttBCcmhrgcR2PSishoTHcpaaiAAgJgRKDvw7VB3Ri",
  "key34": "5bFv3vZRWL4e6Kvz6HgNvEksPfnWVTUkaW69tYwknCfMjmqKJBphnjJWe1jf3hEd2oxqwmSqHFoS4hP1jcaGaSMB",
  "key35": "28MRtGU1PHDPZdJZe3JB5RguWsvJicFuQhPRkuaRMEHp45yCofTjEccxjU7n119EKRaZayBE6BoQjtBbfiJf3R5a",
  "key36": "5qP8jbGSYacWWbmzXvGhjhsmk4BV1AutnR3uhRQiDMyoZYtPXZ5NYBJN8rcwSLCoQyM5Z1tx1Wmaeri1moyKmjuJ",
  "key37": "2NW3Hg9j826Qfj5TfRo8aVs5pKPUBLHdh7YoS5oFFPzCCFEXecdduEs6eF5rtfJ3XesVQxH4qrhMG8ZgKRBhgwg3",
  "key38": "2FYrxSCAwoPkaa175y3nFJyqeQaYnKk1jxtiJs1vTgzub2bHkwU89S1puqX8GDXLy1juS6RJzMs9rwsNu2MLgTBK",
  "key39": "2pGDAxav9Xzj8Te5WKsqHT8zpvvDH4USzaYzgmtdCfVdK1aUUwgurTNJJcdpLYfyPv2hP7JnpKdqiFu4KSncyjoq",
  "key40": "4PM71tMKoJpMc63Y1Tqaq6wkTF6Bdg4yCgHi41FwAkYuctZYSN1r2XVFbCLbeJ6N4YgCwSR793T7qptXBmjoQ7Ko",
  "key41": "5D2QzjW1VafRyLcyKmas5xbku1M6YFAgeKRSbKZatCdiXHdnnh5Mh9Thugnjt8TcQ9vpNhshr11kSekfSUaaV28S",
  "key42": "4mFgVDjQkmNqmJDcoVp3qLfctsoArAX7sxTufjMPVq9qv2oYFCEXmHbcS2aTVkYCtDD1sL5zNEoyYvGMz3M1V6Ak",
  "key43": "5p4doiVsJpiPNH9LoAtgE93kxncs9H1Q6Zqus2FM6XHQksacVK8Mm7KWu9gbWER7VERynBjM8siC1VKQNReYkKxN"
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
