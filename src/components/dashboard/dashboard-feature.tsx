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
    "3T7URXVgBURdBuhJkUsxtBnvMdFzLTQPyygMmGC1mLV14ZMMVAaS678KZ2fqb3mt2eD2q2yzgCJTSx6j3cTGen1u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F9eBW6jV3ZJSmiQVHLetLfydo8isJZSkfiN1nJvKxhgJ9nwr2Lw5wc2bLw575MJEsUR1mTbGKPHoZLGoZv8EZKJ",
  "key1": "84LPHWjb4dZUriNtvQn5LDqtU1LrKdRCEQF3URmAaFMXNr55oQ1R5Pt78N9Rt32nuu2xKKsm7rkF73NkecypoXU",
  "key2": "3ssLtjB37rVgGwosSGuNdr5GwUkhAy8DTLrR5iAQXRp27C1inX9UjNUWKmX1xXSCDChRYoXBH7uFbnR68W86Tqkq",
  "key3": "27EfVNXPYMU4gPocEs18CTCk4iExFC6BGxh4HyzCXnN7Vsou2b2uQKou9Q3SqRbzG1qBVgJ3kRHwLbBHpWJSP3aY",
  "key4": "4nNvoLeAAkKo4MyCtfeoHAtsbURrgc1H4Kk5fFafYHK4D1sQ6oWpcoWNweJghgb75fPXupAWeidVM5yooR84SjZu",
  "key5": "61yFuDg9UZQawc7DQRuZ6iRYkkhuv3ps7qnfgfrkNURdJYcaiEVoJx7YC2tTsYT667j5FB2Q3CQZCEi61dqiivos",
  "key6": "4tn1NEfnt67qJm5urdukKUagsTEg7YkpE8t23DEPL7yyU4uP3SjxLeE7ngcmnKzVxqcEDnMVvoXbK2JYnzpHWfNU",
  "key7": "3YoGRYJnCJs9fuA6KPFeK6MGPhKwrJXBEvGmumbedaBvceHFJwCgHbfwYTTEBQmNwumbNNMuxFBQoXKUrZmQjSV5",
  "key8": "GnUioHFmopWZnfxVTEZ2WTL8quhXrRAHJBF892C185ESxxPnMByTKZUXWEJ5WB1BL6eJWXjQ7HQrgrAi59Pn95K",
  "key9": "24Hneou4qHKsoSk5mbKim7DufwvTRe1nwQYYMmeXY9xMqeV8MRCG69nAs1tGs7SNStbNdEyUNJyz4r46EHVHNZQQ",
  "key10": "4A8hzsfxFmSdSArz1gb7jU8nd2SbFwr2YnYHTykSPB7ydmpWdDmwb8raQP45WD31XBgL6oQsAGYcDPBm9PSgSPcd",
  "key11": "3e7h2puM4eSVcxvBMjLZiiLAxPUQq3SDQi5HRYNwbLAsouD1eMXV6Qfe9RG6U3iG818sWcGTtDzBZ2uiMj1B1DJG",
  "key12": "5NEEuJ3jtPEGAd2JS8JthXFXw7LE6MwyAiBC9AHAYnRe6ou2XKGcyAmLnF1xHCUxGfdD3MhZuTh5hFWUuijAgePV",
  "key13": "FmkaDTca6pWFuywAuthHqNWo6KiJamBKkKi4HxQVVfYKX7Tv5Ecv8wnREo7B3tkbmRSHB3CAz9hcp2kkngG1T6D",
  "key14": "Sj2ZzdtHqDpGCbzE1S5HKRdSdAH9xxUVGE7pgU5S2AaiAA5xz1EAVHsfghcDoXCB1XUKhCDYpDz5sFGkysBMsVe",
  "key15": "4TfhmpNky1hETD67jdtpGFVmbY3kFshcxcZa2eZYpxLVWvSSWmmV98rv1brArgYDAivpdnLNVWsVcVbpBcEonLws",
  "key16": "36YjvJ1tRDkYnsiEezYMvtWAKMv1iVLFmtwmzGqagjevYQPs19ajgP5udakgjYfUVzA7sNz7qnqv7cvjQSx4EAK9",
  "key17": "3jooQKgU6NAnLXYw3LLftYzPNzRtgwvLuKUyxoabD4dhq8TEUHnBxwKeHsmX9bqnGmuBLVGm5kZyDhNFJVrYfjzS",
  "key18": "2dgYnarPxk1atBpLZQuVdsjGcyBYCqBn4nZxG9K7B9XtN6FymxmiifPrf8eRRzLdqJdJdghQWNPEhotCHZr4H9aM",
  "key19": "3dnTmiiGaM4ZZnRQmbiEYYQBBgGvaRUrhU4dkhzHuZWyNV8ogpDKWyZs7kRGhHHjvX8docuYKKeVJfWB8hNneozu",
  "key20": "5pjV5GCaKgtxXyVdkQaaVHueaa1gzXrVTkZDm49k1vbspH7tJJ73x19GbqXpSGsrB2q6uKvpVUNX1pirfdXJw1DH",
  "key21": "4NetYiJ3f2WVvbdTbX1pKhCuSPAAfj6bvTrVVftiLQWTKBngRnJSYsftV7M5B7mmrth2QREPDdGKNTn5Au59E2Kw",
  "key22": "4PZkTeSDMT2FxYsFvGbqdaB4TzSYGzMxTjEVs2XQBm6QDPkihCK5fhHAcgTJtdHGvGBDUc3W8XoYHfA1bktJ5Gzp",
  "key23": "57Tjpg763ATp1wN5erJxLKKWsoWxd8wpN7xxYd5Kb6jfsipkZrkQSQJR5VZireYThj93Dr9MG3D7fBn5gwQmbPFr",
  "key24": "4bSZwexnqrCSJnJGtNoN7xG6yT7X3kGk4k1iVNzbqpQ1CwbHMm1yrTwTweovKrfYjaN4FK9WrFFhigzBphDe46yp",
  "key25": "z2YeTzJRrjfGRjHbFR53dtfCyv12RcYffc5Wt1h7X82jHF7ppFqY93wKoP4fSjWpZWgaHc8gqTP5ZCcvURoM9Xt",
  "key26": "9ppphZMKrtACSvXWh46qWZmJyHbucwwNyMs3VFddWnD3T62RzAdAZF6t4UGB3AFYkK577uQ9xo8fuccR1NBq6fp",
  "key27": "4TqYi7oSnMRWoJcqc9i2TLMUH6TSfFUvpcADU5YKVjoXhStqKD1yaioZLYSquFTVmutndBpyzg7jZAz4VJ9sdiUq",
  "key28": "oSe8RWxUUFJ4z1AsQSEYrJJg5xnApvrjeDsJkuUDCAC5zXyPC7vgBfk4GT6qo92Fggsk6JYaBWh7ktF5HkhG3yM",
  "key29": "2H79GEgj4MYuH6xCmXuhpxSyGx4ts1tVpt66uFX2WxzaZvCx3DpVWcUjfRDg5GLem75K3Z5GEW6oyzNjsdpZ9f1t"
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
