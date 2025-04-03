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
    "4R34iwvwH1TWq1db135Mv2s5dMX1LPmP3Zh5tcMNsXxjsesTrpKpzjkcmZrgQ9bmSB5JkfnMZnErXTueb5LT3Eb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FszSU75NBk6a78mVy4KZKaG1p8AYQSN7iQE5EeQCDz7FPfDtmKVPU9bZwovm1yfozNaLwPUkif7QJL2ssUZTSwd",
  "key1": "4qfm5dD7txvp7aaZRThvwfgFuocAScxcaBvVq9dCsB26sjEsSrRPtv7K3E2mU7QGMi768XfBUXwLr62pBsZTHcgC",
  "key2": "469YJLNXTqQCjBbiGDQhhuSe74JtNP8Bton2hmx9jYR8riLZ16k4k59Pt29KGahCz6PUyiNW8dQntWY5nGKoZPZ9",
  "key3": "421GXtXFfFFs3WoqLHqtoD2YzCBf42JjAg9SCzegx1JUTTdrNkXMizDiT1mkBqnDmrtstUuoPqgSAwkreNbaSrKz",
  "key4": "5rhjeQwHWd6tYr4ehyVucJGSXoDRdiQ8ZhXpmewTTVJFhJnuNzvhU6Wapnr7xRTxVDpke6NsAv9bHs7mCjRrw8u3",
  "key5": "4H3MgEW6MqAXuwg4Ce8s9DW3EBxukzLtNEJf2i8SUtWojXCkR7fgCAF73njE13Nekco6XX5e6ESx455a5UrW6SLb",
  "key6": "5Q9Mjfx3Pn7EyqM5RsjRstquXZDjKSnoUpXAdjMDpnZsNZZzjgBGnjNy46cn5TPtFpb7mQd8eey2DvJf25rcKczP",
  "key7": "3HbZZwVjysCx7kshi2iNWn6eK7R8ZAGsPCgCoH87tNFZTUwMiTj9ij1bnWsG6YZiKoF6F9KCbaZFdCHxto3p1hGS",
  "key8": "4WFEnLXg7WqPi2QEL3eCTJmX76JYq38NyAyRda25a1NGfxsRDFLHET25ri2YNhaDf42hTfy85XrfNNQMY3ZoHgx2",
  "key9": "22WgKEa7S6YAkVYZGDg2MYTugwDJBehhGERvRxcJpSTVJz5YfroCaecVk2iQD6gS9yjusPMGySGcAj6HZhYS1Jtg",
  "key10": "4GhwzhatQqSSydCGsrzTxHs3CPttyEkbXemg8m1AgktsF5WyT2UuFuHmD5V2vjeudqYWMpmAQTKNFJcQcX6ex7YW",
  "key11": "3Y3eAefE9y3pjDUT8mxXEKGSZ4WRBiS5VcAMd8Cerf7LtJ4dpoDvDi6W73XSGRuzeVfuL6ftsJBfrT4bYkVXq1T3",
  "key12": "5CYXMrEKWJW3GfMEwDtp6k7fBtNGMX2Z5kn6uKtUcoMb1FtmdrqykPrndzL7VnfEqfBsAENj1tc2wViCR2tZsKcB",
  "key13": "4k4phmz139d2kpj5ukkCozFMHDjbKa9bAgVpvYY8yQMMFhr8uLVyHYuuepAYZZCdB5jjRhnQ91MK8NKU4KJhpmAN",
  "key14": "5MXQMsKyyGnuRE5Ujgn7a9cFDxpztBre2wcaAPYy1ZWBm1Phv45EPXnorZFFKopfim3Fbk1hTZAyvFaHG8xZJ5Nh",
  "key15": "4oApe9GjDiPTQNK6KkUk2JGpy8es3TuQjudmbQbsA6YamQ5FXXahd4hxqikbznSgwsHVVDB4gHvHwwuQxSHUNpse",
  "key16": "3B1HMMNkjQm8bfwGkFp9m1CsMo56WgAhD8DFuCrQozpdaXXwMVhc2ziU7Lm4dpCjKEWPRu2TTgPR9EKD6M1JVN7H",
  "key17": "ExPBdyiA8TfCFQbM4MSictjuUurJAZbUkGPLQxfEQaS3uVTTATqameKVJZNUe8dNDFmaCofqMg3Wo4rRMkG77fJ",
  "key18": "2cTfHCkHHEy9gsWwiGVJ5sm9f7PLfdfQ85j4SFnL3kaqLJ39VVjYdK9gCdj5wx4gqVfHwDJcQJyY2Hybcu7ZL755",
  "key19": "4nLw9dMkjVpwzNWLo7GG8rudg6w6BvrPBuyZouXk9ETobFrsYd7x3PWih35CKc2N5ibUEW72U1dEQUVVBFyftERA",
  "key20": "DQDWGc5ya3ppBdE1uU4Mw9oXBc8LmXPm2u22kP3RqWfMYaCpBgmaLToW6h7F5dRVVfM6D5VmDtPPm26dHsnPhWY",
  "key21": "CZ9Ggd5ZLSHjJh78QmnGSQLPc19LQ3uMTw3UuBorCtAqhivDZbVnnHGEsQMdM7y65dTFEtCXC1AuczgF1rywu2r",
  "key22": "4Cgk4yEyUQQNRMN6GFPTpgq9Km3EuhPJXiTSbfajf8gpSfJN5WQj5qgCGN1UsRsRsGBgmPZ4A9Zxh6hYwCS5WE9D",
  "key23": "AnKHbfkykwoy3mLqcVuSf3zYuZx65NsovAPoixiHUy1MZyoqxgHKJx4fkD58p3DJvRzbXcHYPTyGFwkxYjBdHB5",
  "key24": "62X49KCw4PMDrMM5mzQxx46buEpop8tNvyXHpVrWMDZ75KBKnzU7bR8CkTmKKmHn1Zp5QA4FA7xBuUuEra562rz5",
  "key25": "2KzsSksCWmkyYWTkGjhRJwD1btqV7dMm8hYXyV1E6sVocDnXQ9RTpEPoeUPe232WiEhu6TnzMNachMoYeQp1hmsV",
  "key26": "GKvXCpoVJNWdmXm6DpRzyHEgyvDSpqsjNSXasokwXc6MMNeP5zFUQdTuhC9zNQT8z8h6eNx9BXfWTkqcsTEz4YZ",
  "key27": "MmowbRZGoJckrRPpCWJKXLEZfkkdYkL6ovbAjKtKfxmMQa9QLxo5vGhkWWBE5Cg9XS7STABxJGYBUmf3Wr3NNC9",
  "key28": "63h75LEQRYZWtr9yBq3TeGxyfVuFVFKm3xiRr6FUwisuqGoVZMwJ2e9QXCYRNnmZMDcDsEzMNH8Ha1fg8srssJdf",
  "key29": "9FJFKKR2nDuC4Qta4gwbCZadvQebEZ1z5HQ7JjN3wT17mrGceWdXwsXw2XVLMMqZP4qXHMpUAhCRyNJ1pLTz7KA",
  "key30": "5YAcJeLgWA56ANw7irMdRDKTKUirm5q46CaDvCFzwGRhJzipCYX3zqzqgUWJdSfUhPdovZ3P7PhKjMUu8ywLvTLw"
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
