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
    "3RTNauqHZKVLNU5SSamZsgXD5z7KGBnKoSyMU2kjE7ihgNAJUxZu6fqjMasgFUvnqSHUjuGerTiyFyRJUGvdjDVr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61uztuXjBxpLwEZwJSG3Qcamgqjhep2iEo9X1JX1m4wweiZQsYjqGNZ89i1fcUdT7hdwjYg8jzaSSzuKs1JRTrdq",
  "key1": "gPdxFqkvyKReoaXGA8tjBWfP4Ddp7cZFFeFFQ1dDcXCPYbDqSqb5EfJmTjHzHcULYw6wsE4HmsfLpqKovmma6hq",
  "key2": "4kkX9Ybm9bFCZMKZDjNU7wkxVw87z3oypFMk2SbFZcCef6UFCW9XTs2b6SF4JMczGn7GGTwXNR4ZPYHuGujU7ir9",
  "key3": "4aseM73V4mxvfJamW8pYePMS2sas7MB7j6u5abhvoz3CYVcMX5LxbYf9NBuhrwe5jDpzDgiELQx1wqqysmwAPm5i",
  "key4": "3oeYE6tTRukYBCP677F2zBozB1p1DJK86RznkpDdYm3KkvN8XJzkZDsGpL4EhGjieh9Ft53ZzdQapa2bfGE6k59Y",
  "key5": "2bpwmdDLU5TCwFtaSL9touVPSq7vNEom8GbZtxKcJJhB8Q2ZETdkroPd8bbcBRfmJBUMcwRm788ix8yZ8zj2nbLA",
  "key6": "4WgNKXfJLHxaZDVdoc7vsRBj1TDqhmDJsEEgiJS5wGhCwPPQvWpTmqzKAEsiEjRzMHfKKNxBUfvRSYuhKLd2ShF8",
  "key7": "2R5H4DbRbxFwRb7BJpTp9VWzQxWpyMBYvHmkTnnEwMQMfRnkKpqF7QYw6fMgczfdx6y8TxCQmSsZxTsyTKVYF778",
  "key8": "4bjmebmG3i1EKrdEpdMQEEaxHaAWJpxTy5D18PzbSADEHbAi3knhKVPDNK9jzioAob2LgezGfetmjKseLHprdFzj",
  "key9": "2CDHKvhm2BtN2f5dHEwjXzFXCfMdhFt4RmikvbpF7Zoq86MGt1Ub2dsxQe5HNaCvzG8R7SBYUwfvMaD8svA4yQGb",
  "key10": "4EZL5S89mUobENHvoLQiXLHkouvUiMFPcMLB2tDh4B1uv1vnHH9cvZm22G22vWZ16ivx57fYKEaz91kYi4uCfxJw",
  "key11": "3btxjm5386dYmRe4cAAReQfFJjxYNLsM4wXhLXNC9dA6XvayCUZNYV4Fhra9SudsceWvMXfEFMKKrcSxLoxrZ4Yd",
  "key12": "5P68S8RLRJLaVCAuZJEkpPSwnG6M6qezvvgyKyCK72Y3XRJJHNqGoc84QAgrjeDg8nVeLs5yTAGs7rPxKfUnZaZh",
  "key13": "47FxisUGaPU4gccQCekKQGnwwLzzWjQrhx4RVvPpcnguci6N2RDmSUX16WYfAyDkRoGcKvEv31jgNYQjndtpDfx5",
  "key14": "3fbJ2JNseiSphLxUG5LNScu3zNvFKZkYu3jgriWYx9iS5PCLBVGmf4wYdhG36pyJE3pvQHQLuqggkjtZy9UKeuMm",
  "key15": "2BH62NA5bPCvchYHhArJJc9GSzcgUvDNkxLuxYdue3fwNjL2HiJQhanjiJ9PrEcw3YKBBkT9GzsrJVsPbQNLtvQD",
  "key16": "5jgn2wRRtyd6nHBipP83u82BpSdx2qCshwo2HTSygHxBo6mfA8wvp7DfdKWD7aDDRmKk8xFVanY1iwdxfQNUXRXz",
  "key17": "2JT4Lm2n7tQDZV3MQKs1Z387AuLsVbsTWibefkbvwQpjS9YtfGZbQa2pRaxZps44zqsJJJAjSQhsKgxvwGPbwQtG",
  "key18": "2Jfwe6ZiVm7aE7VdEoDLpB8BPWdswpTkpz3HhNFv26diyksmJKXptKzqSTUJSrYSfSaVgPp5omwBS5qciwxkBT4y",
  "key19": "66Eh4kgvGnLjg2jLv4wdwoECCb5yLbfuQ8fTJgLsbvmi2riQxbKPkmxYpk1AgA6TaGeNb3JpK5x2uB9PL2KPZUXY",
  "key20": "35559SV49YT4rnWJ2Yja6Mhf6diaEU7aQtJ1eHHpguDKPYcwfTaitHV6d9ZYT6m5ZXqp9aTZNSyA78jiNFsBtXuP",
  "key21": "4BwecNyHuZfkbZo8qVWompz8XCqTKn3PvJnfAn18YE8oXTdipvDjGVsrQbBpNTbJDgtLVZCrVcyPQrRmGc6T7K43",
  "key22": "3e3za6Np3GLTUWiDAvu5tg87nfdLPWBMMt5J4hNHStMQLthS8p7QXQh3Lc6MNau9esd4N1hEqUu9Sbh6KSH3pEaX",
  "key23": "5fT8ykDYy1BQEQBHWRxQKa1kDp8PAeoX1wvjmCh1ANM54Bmv9jR1PDtoyvHKQ5kdErrMKSNy5WLxy39CbBPhmqQb",
  "key24": "44RMDyZrcju923xbSynf9WsPpsPMxLivcD4s7VGegRr49BHmVikyNTnHGffauHzW7ekjw4Wb1xXQ9m7NkCpq768k",
  "key25": "cryr2aGxEdHNcRjLoQBVt3keZ8NAEFfCqWurS2Xu1Lxktfo8AjKRXiotfeXQDpK2rXWyb3Pk3XeamVtHabQWQsa",
  "key26": "5rW8e1otj6VvwywcFzheAUmsuS4wMkhwopQCp54DLGrmmM86MBZfjjvs9ZGSrLDeHywZZSPU3k89Pn2E7j54HMnj",
  "key27": "4u7wtbf4N2ktaEAd1eAewWBgb2HCJj5ezpMZT6yFfWfDYWeT8BiLc6VWCj3CwN7HCu61GDMfjQemCr8qwaaihQFZ",
  "key28": "4KD92GA12BdvKjjirrMTMtoqm99FjMm8tKcN456vD2HBVtkJtqZ4WEh2Avg3zDSu7iWrxFDB7Fj1Pw52opf1MJ8c",
  "key29": "3Sy8SrmTyjpmoC4QFX9mY6XSfy7HYZmhQkdaNUvzAffR7RzgnWhNKsrZWzquV2Wv49Bis5LzaDf4vvDYLPm45MtQ",
  "key30": "2rzvGUkSWNVzgZPMXsqXyGUGbiqcK7bUDuRcSjJvePkA1yMRCNCRUxdd65oarsKxkZdo66EtZgEaHZrG2bthjiFj",
  "key31": "62fN3KEJGpLoN6TPtamXZRs9WYhRSXG6N9fqnAEhjDcVApf3TpVEycew9B622asjSAUweXFkvvEH1n5tiZe8mXe2"
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
