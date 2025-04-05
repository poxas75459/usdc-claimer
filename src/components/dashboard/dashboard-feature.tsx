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
    "4fjQPEpyWJafEt5kGenanfSbCVyxx9ZTBFuZH7qN45wj8GfgnTFnq5TyXEFNaX9pfSugUxRbnRTS5Z72Bt76mvPN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54C6PjAiyJfT1ybYDvadLdjikUKjjpiuZkhQDDe6rRmDaYeDRmU6wyc3nSgLhfuxtzbDEjErQveRHz9G1fE9r9bA",
  "key1": "rLHifNNyUabteG2PGkM5WvHrcd7S9yGaMxBr5jiVzNq6rpTNAPy3L4QhGS9jeWpnMKa1vEZX9nuW9EV3FHbGNjD",
  "key2": "2vfnLPNX1bpMUCHtwZAjTz6twfZXBK4eCthqa6fuqnHwN8RMKn4CB6LQVVxCe8MyqSqDSRVJbT68iPWthoWNpdn8",
  "key3": "2koqbZ2T8qPd2yAvz71vULaTvKmaL26SX6qyG21Wk6Jc3gcrY8jhvZYy4FiMFmLe6RBeGwBQwNygyQioB6PrVqX8",
  "key4": "5zcnYuSBPwrdj6TChXA1QdnDAR8YCaGFHNW4kpDJ61RMh3mfZf9ULevdfQ82bs9Cz1XFZasMmegxQLHFUUtnPhg6",
  "key5": "2u57c5fHJQuMzphfDSc67yQudmpZ7J6ouSAV1t1W45EstbKD1un6QoQRUD4PtQS72F13NNyuauYem9s5VruM4CSz",
  "key6": "4ZAVpsW9jdp3Lkrvu8CnoE5nYj22YYVtC8rejTwg46126zG4bLagP3fLh6jBmjJngaEng8PJHpo1r84mFcQwtk4b",
  "key7": "2pEhAxS9eSCaZeChCopmk1XZe6zSKeJqg6zEUYZu9pqJ21s3WDrd9QWcNPyZD8hJ5MFJUPXcGdZqo3EPDrHBggsb",
  "key8": "51tfonPdDqsmZfvDLDc18ZLKDW2pSNRLj31j6MEMoPXeFMLYY4uPDWURZWYot8gZFNP95h9PjtPN9hkgACu84WV8",
  "key9": "4exp6EYAw6MBNLkq1XHiEqutdVRxh7RGCksDuD6bSJvpPbXn365rpZzEUGY4LG7RU9yEeaRKJT7WK2AggDQwpQi7",
  "key10": "2ajsgqYPFQ5wCVK2pCFMPWsZqYx3pDgtb1nR7aJVWSb4nNbi37T3TLgpG8gv6U9xWDR72jGn6XLXJVZNfrx1a6nM",
  "key11": "2ed4oGadPrzqK5RPA3ECZQAQ1BvF6VynNzecgpTwb3h39zpfvjFqB9cy2CAidD1QUJyufbjQ47GbfnKaFd2ahvkR",
  "key12": "45k45vMor57u3xAo9bajoqJ5AxTo8feTXM8gVk4t13WHx4NzcjJnz7JA7sDRiait2FxXNRbUJRY8WqkawTzF7JUa",
  "key13": "25d5oUsWxQT8U8We99StaC8Mb5HtrTF8Bco44bd9XY4ZfDw8a8qPNBf2WYD3JS2fgNbEyaMRhwjC9nW2GNBtKByn",
  "key14": "t7hBUdYbQCLGZ2pGHzT798juugty2jcMdMkdJQW2UHDz8AZHsqaucbqefsxnf9YVM2sf7s4mCYNDBrzACVGxXnM",
  "key15": "45FvYaFTGtR4CRYVpeVaG2522ZDHGDLLDeHn32YUsCTbNAAM6qKhmcvyNd9pqQuUKaUYFWGLkPRXmaZQJErEnYhL",
  "key16": "5njE4qnyAmtHoH25PrLC1BjcwomLfwuoCQcRJipzddtWRJs2DU4rqgyDkA335TVombzCWdeHFXotoHbV8Jnk1UT",
  "key17": "5xj4ndwZocfPhUh9QFRRzFpZMovu72yBb8DdLsHcxEYXht2pEq7ZpALAupDa4YHNLzTrHZnypjGPhGVZMupioqya",
  "key18": "4S8W7CXD9m9rLZCKU32uBUiiPKp4mfDAmLEvKVaoqDw6SUXtyV2XkfC3um1rHyCCJfby8tDKWmoV9ZKzf1hUtuU2",
  "key19": "3cr5tqGMNpsRy61XQByNwuSNLS1RrvT591QyptEWjhZfoeqvPMozSSNVfy4NZtRFHcNG5HRxbWXsLXD8mG3udtW8",
  "key20": "JU7Gd97TCeReKNT7nPRWfxyYujS7XemJyuLusdXTfucZm7zXj7KAp4bbGYrXVaQLbivrw73cHTcDD8naeGdfA6T",
  "key21": "2fKLZTv8tL14bfhMJHmcvPcrTTdjRQ1W2kzkMbqD7Wftd4mJQrzDVnCkCP4XLLnZeqMFoe5gkx8Fsn76rQy28a3X",
  "key22": "2y3dNK7gwzCao1WoAXff6bnDUUM98YCwhXgWYx3SYxhpvhSD7WcqQXvRFQTxqwCj3DAw4tcdxMs74UeHjpSzWnXh",
  "key23": "2os7NpdFhBT6YJEtDSQnRwLumXmbpnGBFNA2JyuZZkYc9TgRo4rSsARdicsRDJuBNfzD99ieXhUQKLZm4nDcdwKE",
  "key24": "2n7SyyQPPHooZWAZDH8YH92xbXM37yTm2f1TXLqF8PdkA5AThppVYSN5GCLGGKMN2kinAzJkLyVJ2vJ3NzsHs3DY",
  "key25": "5CgEQMiAPtv286My3ktVCuqZQpnEuvscAeV5dZ9DZP4cfM69Tq2iZA8vEgfqMQ1LbJ1Pj56WEAPKGjQK4kjPLHUK",
  "key26": "4ZZomiqTfMt6vQrEtQLmDpDPqUdSDVvu4p8omMoidwnvacUzFKASYBn9RQXQMbnowadncEv5hrvk7qtbhr7f9J7A",
  "key27": "2t2K23gdaoKwxgq5bm2oVH44HfPoghgWP7atEFktsnugAW4YUGJ2JfgH227LC5eM7uaniZisFELKve1R9AdiRPVZ",
  "key28": "5Y6CHgucuwZeFjAnRM94aexFgtYfUViKukZ6xbaKySxBxM8rWFJsRsSXXadAsnPHrGRmH2w7nd2cNhhnSiGV9MXW",
  "key29": "3JcSaF82x28Sma7C1VVyiwKeCrzv1juniQKLuK7pC5EN9n3Szvj1Bvbi7Xgwh5mrQSKVrkjxYwHxS9DLJ8Xxhvpw",
  "key30": "5dHwYfGKisunb2B1r4ZcYvA9z4dhbEhCy6Wy3UB6S9A58gPjySABDdfZKjTGdSceKPrMRHg6oCPi57rHHyi5dkg2",
  "key31": "o67CLiHtkXeQrRP9YoRJ2QzvCfpzLHzczfFn6ycPML5u5XoemXfEp65yhQwwcY8jM1qZxuCDrW12sLTB3WTvZxc",
  "key32": "2CBdQAhCatAhwuFju4uaMQ3dZ72hiNVHacEvkHs6uSQrGn6bH3HpqyBwgN3dE4cVNMkfB2uSx9NpJzRAffa89YBb",
  "key33": "5qaBXK6jd3MhDQuita2foJLmmAVYFcSf8shx6W5roZEzvVzxXHzCSREfygjcHn6fBRt9kVyJEu6YQERcHtPkWD9K",
  "key34": "3PpkPYrANY5ZLnhUjNuDY5Fgh35GbUkpbivVKjtZYvvjBMLDXr9h2odj9yRbHYoggLutDDtktgVZe89KAejLekWr",
  "key35": "4hbv7CXrn8SrZ4kSRSeoNwYxN4vhjPp9nqcZJD93sDdtgM7iywgEUueFYYTpWfDHk23qsZ5gdxBG17nVdftBm8Sq",
  "key36": "5CqHZkbiypKmotX2yTQ5XxA6oPDDTJsAx5UCnaQT1S7DRe8Fn65Uk5jCUEQCpfu38pNN4wLxqa39mgmWMmC7a8gi",
  "key37": "2yEW6HZ4oQGfgrZrfwhZDvZ2Se4qFrMZykBHdg4FxNw2jxw7976aGppuDs7n7evJAsvGPiDxEyqHtGKryo9dCzr1",
  "key38": "4vqjkyQdsy5XczLinV8o3fyYw4FS56LgNeTCdKjDqv6rWtvCDnrJctH4MeA6AtoL2fzEbVKm7szzKh45vLy1Ep76",
  "key39": "5ZAuNbqgrtU6rwfhygAX8oddpoxUNpioYvBYnMHaLtgBLiLivheBR2Z9FW2TdUknUbfBo65M7esVdoJajXhRrwiJ"
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
