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
    "4DakSneshdN8etKuxaExJ1CowzGz2g2XwpkVTSWj3fo4GNWTEgoGKFE3iDevE3GW1b7w92ssX7sN1dnFvj1c7CkT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ox2r6S8tfnRA7WqBqTgfKmzavr3cTf5VvuWvfXzVjmMkGydEW1ZyiSsWx2JZvbh5LRiFovCHHE3wVqq2C7WNEiS",
  "key1": "3UjDZankCuUQ6naeNby55SKeW2zEJzSF7CxjTkLfAKNKXhBKqPFpfoZJpCceej7WkxKd3eysnVG7ibGoEBCTsd5q",
  "key2": "2bK2iLzMN1cYuep3wjWiDNktgiACRbzmr1LZ98ir9rKeRNg6RtoC6UVwZ4Gfc6pSipD9Y2dvKC9g34LHCJM7o1qT",
  "key3": "TM6wCPYm2iQea5WPjcqUpkVrB7W6CGhBqJ5gnd7o6KkPK9HXkY1z6dGYuYDqZTp6XAWW9MQi3vV4mJaMa3kwkVZ",
  "key4": "4apHSKu8EMsk7VHZf9sxSfnFEoDriEZAQyp35t6QjJcJGpRzEUgTz6zBx5ZptfE9sSUefK6E73vqtXv9FwbSuvar",
  "key5": "2M2ydfppMh6AuUvR29nYnRXk5pLw4M7uaTs5dN4wgEBHHZP233sG5w9AVQMeDsyqgvWAniteigGg7JKNfd3khZko",
  "key6": "3dN7aZp7DYWy1xPFTzvbyESGVjvPyZmCfTpZF56GByQDribbGJNtajHG4XHSH8qnopjtsSS5w7yeWwsizsStbcwG",
  "key7": "5q5kAQXS36cgtLijoVWx1pMbHxAXFNGP2yZnmzCUoyyeapf8MfmxhniuisPdZXP35kbXZ2bReKMjGQVY56JfFwcp",
  "key8": "5G39imgEAyVQ8zNRF3DsetX4Vu9vg2VWGrpunxNi5JkUF7pN5wJdQKdygkz3Jn7GdDuoxgwut55zAyAUmtH7FxPJ",
  "key9": "qVtC3E6BReDhEaSH2yYkwhb7YWMYsVE7F37CZKrZnK5ae84ycKRFr3DV9bCBrfJoWgWUQAEQeDT9DavwPUszcaG",
  "key10": "5jjmYcPTq9unzV45YS2J4uj3zaTGnzcMuBpxK6cYfXQKaARUL5M2Czw9NH6sGSKN5t78VYtnB3GWKeTPF4im6kJM",
  "key11": "ftrXauJ92TGS8YLEfpMT3YxMUssxmKhyM6vQnJV5wLFnHbRSanX4Xws9FNwdhQSk8jCNbUG1DuePFy6KQ3P9KTm",
  "key12": "jMYcYUyGZHtxUK1TcNGyzYddMjhpYwpprGBJNTPiq1Ucsc2AztgkFJzUxyxoHqXG48JagotpnaiezRwHkg4pouF",
  "key13": "3gWPMzabb7DPxtniHdnh1mYC1LYQfoDDNmCeiFJ1p5u1XfFtknzeF2SDD92FcxuhzMu8n2gDzK5nfD9yy15kHCoz",
  "key14": "3de2myCng7it9WpE7iq247ZPa4qTGdWUFCGE56xnaxTGR2W8p9toQVpR5Ldfk8KbQsk6BLUnLeE6PRCg4tqS1eQa",
  "key15": "4y9JnWkfWZ49KpXrEvDpkL5tC17DFn7zf5HgDuW6648UXdtPneWMRjcEzEufW82pMY9FybigWPL6gUx1zQnbYK7b",
  "key16": "5EAD7JKGcRaW12fTmzAAASGxWw7gGFXrUH4zs6buXp3G5KshLrez9aJ6QMqHBdYjmWLuSHMUBCJ4rbNecpxnh62u",
  "key17": "5AHcJqSEYtb26cR7xNVUuEppGsSREcnXt2jEnDEtFxxYdzdZoiBfzijtYkUEKPDZMUt3sS8ckdW2cbey6vqbA26",
  "key18": "k1BoK6aq55YBSD6TZZmwX2XmoaVwe5WDQnKuA3EE4Q6xqiAxspyMsMoEAuPRVHfmvRWdVJz2Y5PbjPQ5Npcze93",
  "key19": "4kjXWXUBRSppMExwaFNSBhbiFKo6RSuFbbE9yaSpo8e46paabe7L5tAtoK17pxy4EoigZ7958UTFqVwG6k9T6xXn",
  "key20": "2eucjsQJ3qdr82Td736eRRHudtETpfVhyRYVRvobxxBUEiJ8UWA3cM54Tb4G15C45PHNyw3d2up8eYyuKVesf7tY",
  "key21": "3MhK4Zxp3y1aKJv9BSZ4uWRHboC3UrJ1Rwfi99TmjLq5jRFrnFHCuUJQtdo3iutnDosdk5xqPPjT3MW7stNMNJgL",
  "key22": "JYV8NRp18HN4zpVAvmy99ytYBX4AGr1LLzNDYV8uVD1eQSAcW8dwKcmB1Jr5LcHN5K9S1GbswisjS59oWpqXLVU",
  "key23": "3PzEVF4vF4DrXwor1yW2k3SgFrg5ZBXwTrp3DPwCnHREhoqH9ohX29J1btCWF8u5oCoiyKbcvV88mB6AHSuHTKpt",
  "key24": "7ZPkhdZXzEFXBDzkbcQjRUga6UZFLhhNdNGtjqfbiGok4H1HwHiamyrDnEWPPwdkzzDELmc5PSaTF1iw4d1ma3f",
  "key25": "56VuW99UTwZXjHePo813RPG6DmUQ33PPF2BJZXK7tCjZcAxpgFkmSf98G6ZCyWNU9EktUBMesY6Jf3boVhQniSvT",
  "key26": "29byknyzC8KnnHaz6L8YqjHQEvo8kMk19KXgDCYucsHd5NMhtqqMNjyS7a4M4bEELWUxj27y9LmL887r64SCRNN9",
  "key27": "2QETovujkVKsGbAYhXWAfTSm7QRzx8u67NyEmsZ3Bb88D6h2m8dWVs2W5LLdY9ecutu9H28uU3MAJS4cr7RoPp2G",
  "key28": "4phJEvR94qghQbyxSjvnHLnjW9j4snSeHztVXZ1UtoZS7V7TtVzv4ZjgA8BzhaJGNV61s3EjroUYdBG9HfhcoNNF",
  "key29": "42nntwUDTvAwxjFuzXV47YUysdFGdG8V11zTCrzirC5Sg5Nd39Bz7vADFXLPAd1CGHJ6deb9A2T9wD7QPXVRup4R",
  "key30": "3fKALh4HzdugP4ecQ8rYj3W1UNEYM1d247khQZWMeSrGfYfGjAY3ePM8AUQZhj9zgRdaBesd1CdeoLA8oH5esZ2",
  "key31": "JDQpsNvbNmxhPmi4XPbyAyJvAsXHH37yAFJTZ5pFwFzfHcehfwxTePsMmEbL7NrYkfp7Vg6aNsVyKTxGLPtXuDb",
  "key32": "2C59X2yQd3bu88GzmoxmGVVLiBkpBPWCM6xjYMxSaqA2ueJFGj4Y7ogChmwNs21n3nEmRztgUcUkNmKuD98FwTWJ",
  "key33": "2MXnq53tjR7ztjWcpzy4Ba4R1NSmWQziBqMzpzbWEvop8uVCR9vxpcP342ZkMC5HDnYrmQYtbodrAuGw7iR7ozuz"
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
