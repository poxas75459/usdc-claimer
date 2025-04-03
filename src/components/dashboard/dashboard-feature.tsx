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
    "7dexJdnQyKpswLKwbegm5yafMJE6JfFVrEF2G4rKfKduao75fuirvJ1WdkPESkp2TTbEJk6syBRdD6mcroq4Gj7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a47w4wmhKrJREjY3vvL46iVq6zEdYZzLZGuF6qmjr3HgAXqjqkiTXFcei6qYsRequgdqk6n9DT27jTP793FvFLA",
  "key1": "5A4rRgjMuGny2qg7ZMvjq3LpvQkWAAJryro6WYdUv92bk2TuPFV2dJurFZdCSmvsja7jHh22EQsD9pFZhqK3ykwN",
  "key2": "4q45TGZvi3Rk1gtvV6X7z819ZzyTLTsSugDKMUSFRbhVzNdfc9iN1ZxJaWDgfLeNkyiVhKEuAf4jELdvrZmp5XNS",
  "key3": "2A9CFWbHsrtzxfL71pJE18pu2JLXQMRCuJ33CPghwMa1VH9XvUY6inZPnX5nCLVXLwGkXJb2tuPTF7PbXVVbh8Di",
  "key4": "4zqgkEUJDCMGFVw16JHxkeE464JSQ8tQBzPWKZfxFYMAuJJeANsQSMwegBvnCYvVCdKsRSDzYh3LkfDfhpWa2nyq",
  "key5": "jXh7mfSAScyarw77f2nEeMaeP3dwQVLPUmaphcnghDHfurqYgeJiLjW4YVqDbJJVF9H88tvVMTKQFzhKJtfj6sm",
  "key6": "5BMq6QH9wUGK2P4LSg2pFJdcNU93m5vy7vDXAiLKCsWiVepE1NRsY2BPxDz8sKC6J1h8GJNe8QbKgLni9hyKUKPw",
  "key7": "4esFznP5CnejSwsRwKndgwHeRPHb3xXJCbZ6woKHaLCEncM5F78KUxMzYkS77yda3QK9XKbZQ5uaJKEgS2CuUEoo",
  "key8": "5xXWLJGjudWfWXTK7TdLXwCQSfiAvX9EWMtMNAv8z2nV96tqbmS4CUpcdQDut2SfyF5DYhzn5MFeVHNgafkTSHGg",
  "key9": "3LGAETgPMvtEpJfF4BMYb5G6ZSRXjJr7itBWwtkWM6QeXvcgU4GmBFzyYus96xRhCDTRMBNfzTdNW5u2TowjiBk",
  "key10": "3jAXxYyQwKzWL84SDH9ftsLHvXosuLsP1rVAbdLvatAqXusYDPqZont1mFxtf6k9V5TMnXkT4Twc7vkVZeZsRERw",
  "key11": "4smkNo8z9RKE7coqCoAn8gHCv5hkytayCkkDy4tBGBXFMxLCT7Pq34f1f48JhjD842nNyJ3vghxPCCbodxcbeTwt",
  "key12": "2qRNcGoJn5mn158j28AaHWTmfhCjad3pU5gKh7FakGij2DbT5bQcxyJisbzkUZF5x4pQSjmhxuTo2RmgEs1mU1gh",
  "key13": "2ACyV9uvJBcyBKnC8kri3je5ijuNgjuxwmy1GSuZDmEgWJMF6z52qoH9TCpVvhtV7T9Si314zpiXmc3KHyGYBa7C",
  "key14": "2LTwYKMr1PN9cT4Z9YqhqY9sKZUR7jaHAWxDZWa54m2F45LEhaqNEYaxvpKuttknkFuUcq5oTKap4LPXiBzR1KkS",
  "key15": "25hkb9pg1og3VzeZ2HuE72H3Jbxx8WgBBT7yXsb8AYvJ9PKieN4iH9RGHrcy9BkUNHXo27T5J72kDKLuM5Z9MeE4",
  "key16": "7pueggEbucmC6Mv22ygcpfoZFvtCRFnKQxxgEfumiTLrZSqS64DN7dFUEHDMy8wMhPSJQEFi5xPLPf1o8Yv3dHw",
  "key17": "2uCGqEV8PeiEK5QqQcZgyjF9h224mWzFXY6d8CNeLfrndijBdZKcTATKAMGoU5KRApsBJqpUAPBF1KFinvzzcRuA",
  "key18": "4Mci3j8aneqPZ64Rfj5M9JWUkFf6QX9ASRw2ZoGK9KvwHs3JgdsNjukkAjBu1Y5fr35EB72c3UWZ25CZNtLyXfua",
  "key19": "4gTMMdxRh3HZ73rxLb8CwWNMcUZCCZzGFy7z7JD1eA2G9ykmWiMk65RhVwbWHhPsyuLWRRpHZunYUxNXk4MiXWM2",
  "key20": "4U9mR42YgMZxjAYFzXMWsYoXxMYp36xJjMMea4vrg2a3q2PDZoDFtVLMKP4SiqA1scsy5SGPiH5ehkWwhvqzQMzo",
  "key21": "4rZ3iaj94hvncWUG6j7974MJ6bxuvBXWHUFjG22VwCVV37HhcTydwzxX39fGDt8rYWLZU1bs5uELJUwHtESjE68h",
  "key22": "4uzsRUTGbRcBhW4FfQi8YEdNaasfmyxGgBDYMZosTUjWZJuJ8pb99WWxcEAUKKzLfQijgLQFhkoBTabrmxJviHp3",
  "key23": "ijxFDpJpUC6HN3CxV3nFsZH6eFw5oTHsRC8uq1tvA6fbHJEmmWsbuDdkZY1BYK5DuKga8sWMTCtLSDv6rUq2k8R",
  "key24": "f3k1YKRbnia3QK1BRRQc7pykTMEnH5oBYijXH9DLLMe8BwPcpFeuDfeQPzXsrSAZUduRTnurZ4GdQkxxhw1rZXp",
  "key25": "5gHwx6jsJWrrM3RW9HwxetncxyoqAFtA7AXhgeEHDmm4tYGFQF2rvDQDE4CCx4kaU59jhgExcVByndUH95DCsn7U",
  "key26": "3a5qGaEDpDbg4jDg6RrXqZzEaM2yv8C2nHeGrWaorQtAUV891mf7LYViiqLrpcKU3Dkjnb94kehzPb3ugtzdJhir",
  "key27": "4hFCeajptgW6i3vFduwqtEd8GUpAPnXJoNLzanCs51TCpXXVvtdsxyc9Xmm6eX8ZyAKUoADWiFeMg2ak6vT6eVSi",
  "key28": "4mBTJ7oo6QZgtwbjQb2dubAEExGCbKp3vqAwSF8Gw55MuG5ii4KNv3pVq6oLbAgHL95q367eeF1NzdQZCcCkc6bu",
  "key29": "2Ks6yNXBmcDujvGwUJ9CB53etkZfdZ83GhDnPbVu15aSXACvTQHuW8cssc4KjdeA9tvcbJVahfxEiPD7pD78yCC3",
  "key30": "Pz9aC5fUFmuYg8tYQ1DCgBRuwnbYjyYc8B77ZuQn2UeFqcsCKoTjPcPPVKSZLDueugt6LxpwhEvTiUK2ew41hKS",
  "key31": "4TPtzW685vKuRxSie7xUm9sucqwXAUgAZzkkd8vRCoRVbQyS6NcyWMyLoRBHifHS5GuRaRNCNedphfLo4iNzirtZ",
  "key32": "22SF4n3Gi6i5itDkkZLhdeUKgbQBdBTTXdehev547JgWLK97koLSFgDDToAVk9MEwLYNQhhuSfqh3zJ6rLLTD9u8",
  "key33": "5JTh8VXpdJHrP7vrGSAWTfo97TWtvo9L4qT7zbVen1WiXy626rLNpYXkWUAqW1iiuNGXt4QtXaGpVa27MV3wyLzu",
  "key34": "3A8ayS2L18iHZoQJfr4PVn9g2PComd9uy72kYPDdM9bbzqgKvMZUgEpAjbEATxFcg5xv1g2mBcHrFosGcLzexyqA",
  "key35": "2rNnAYYgQbdNvw2B6MRwkDZfjdrpXFGVHvbgTwpVamZJ6dmRdRXLYFtwKLAqhgtX8weBfEvk9yuBnYyvTNpLABPR",
  "key36": "3aMHzhoH9HPJVDuuLojMmWxrGnLcYordmxzQJ8W12ZMavDcQfxvjaEHMsW575FxWmduACqWQiTs6JRtcbnRJscw7",
  "key37": "3tc8uqsN6A2GikhWJpoWMXBi6AqFYY3ngrTgzXhQ3EPQW9iX8Gxhzo6odgJ2Pi7YN4R7ZuztWkGC8tpuZNk7qp2W",
  "key38": "2P4hgMkkQacEXyrFoxxGppT7pt8izz5TYUtJLBcc4s4URpouZUoxGbNe52UKW5LjVa6No6zNhKf1w56DBu9WfaH7"
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
