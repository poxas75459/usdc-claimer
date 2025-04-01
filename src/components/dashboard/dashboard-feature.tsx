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
    "RM9hxRXteBZVcfJGuErq2hMcjfsewwEpTasZyZUaR1RSCJYtDNs6pZheqTkWbpThEK8qMVBMgWG4NCsxcGVJTXU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xKKzdfcCqFVPuXspR9qRtawRAsNVRqHvpK7jLd5gQ2qHxYCni7P49yGxSzgugVtHpPuDTHgbSc6SL4tUZWG5PEv",
  "key1": "4KqJbeuXaMmUgwPrGgAaSoowZh6gMnoXGzQ5hRdf9UJm2HZwrdJLcDRhhqfiDC8RaBtLNAWYMja6i1KQRsbua1e2",
  "key2": "5Jum56GAcsDK22eLXY35QSVtZdi6GQuyi5KHotDz3TRasbWXd7kJ19tdWXpSAWyDng1kQzkQySpWenKenb4MuoLW",
  "key3": "3egMm9SCqKx12dD5QjwAs85s9hh2RVzXsmA9wdYsn8ZE4gb3ch4DqFQ7i2Wf9KK8M66y3ktiB2fRKEEA4LXLC6e6",
  "key4": "2tN2iRAGqd54JUmXBLEfY6SKwF6vgQNQFLXvHneJRQ2cHSkNW2q6S5g4V7nFSA3GzZzAjmNKtpfV9pqN5dtcAGgG",
  "key5": "24bpiqBd3mEhtiPPMKkL9dNxda5vi4rCpbShKwD8w1DjbpFVuQ6RuMJBuyKi16VMWN4MuXRyrppriPDHaPs75ZYW",
  "key6": "oNBBAtKV8puNeNJBc7wL66CgVw3ZkzDByuSssxv9VUp4fcS94BBPn2hFsBesw3WosfNRfyCxJJ4Y1kasouW8SEU",
  "key7": "5w1ZWwiv2SBmN2ygtpcWwS9Va7niVGG4TYYC2sGBsUPf4Yekrbj84hGuo3cVut6hFcX6zq6H3jTrPSsa1L5cqERR",
  "key8": "5aT4vEPnhytjEEAWgERQTzdKtK37tuGs4raK7yBRVWXGNLoS62gRzJXbAgdjFz87x68xBBuHw5FmEnD2ipLcEv5m",
  "key9": "56UhLriZ2pnFkshRVRG4AFADowQ3QaSjdiFPJuk9fyRRnzEg8h5URDKUtFn4XeH1hTV24QMmhjFkoJoRGVuP48S8",
  "key10": "3KVYzF57fRZUBu2J3Uw5Zi41E27pbqPue7NR6mXZkr1LpqQ8da4jkBqtacz7xLYQaewjZBCns6d9ULLw7vcJQUgP",
  "key11": "3vSuVprfevQzjJAVKRoQb5t9tcXs5b9UuFPALUGP8rZbxc5qDYXeTNr8dXrW4EZczRWipX4g1jT7FSwjnNupP9ua",
  "key12": "3Csm4mDLNzdTB3DDAiFiLyNDLzyEgZBMHmGF67wFHLvRewca6HjE2woQLDDbibo88MChFv3DHz1p5aAojqmvTE8X",
  "key13": "2aqS3wZD5rxd1KwcVepJQeFigFXi2qeRQBcBrHq35ZomrfGV8wYgkispzyJgGUKX7dNPoxYgidofRTCjv2AyY4Xs",
  "key14": "2n3iHZmiTvin8EAoGTaxNBkb22aeWQk2CcTCEf5gVYdHPxBHBQtBjiToLgcp1ni3cEzUgM8UnYpKWUccZx19RSAh",
  "key15": "3M5Tx7N8LqwiqWoyENSAidnrpaRrEiidTiYGD2vhvd5iK624meYnxFdywwV3zqSJ1dDYid1HV6RHZxtmHWEM8jsA",
  "key16": "3abdViCm2i2WBbCYB5ScCR2uYQVhm83MnSBmncDeQHnS5wBqde5CFcWqdC1HbnPvrcootZxYSAjXy9EmTXTDANkL",
  "key17": "5GkLxkHfNoZbabhoBooYpNFqxbxbg5E5svFwnCpxtYWTFFhE3yWo4hKtsvPbf2R1xYpX3sHFZyiwheTMgpYy1vTc",
  "key18": "3fefrxsES71PBoCoYxgvooKnxoB4jQVdjLrMJ6zKr336hxAhkuShybmm1St7gUANueec5XGXiwG69Pfna8GFpi9e",
  "key19": "2S44maoHvVjQjbpc8VLjJ94h4a1c6oSoiYuvNwUrMNNkCAkWDb9ro6b7G7R1obwET856fhXRzJ71KPdnUs9hp62S",
  "key20": "UrHSHEzKyQWuAeYFq413nXboPucpx5S9ms5K79okKaMaf6DFeLKf9F2fodHycYBmoEdkGKTDbfNmv7oMKE91DFK",
  "key21": "5NA3WvVQyyBnZ9qjB8RbFa4eCgp69PPLKQTwwFC8jg2eWpNbJHU4kpW1hsNiAKwbuKt9X2bw8sJ1TktUnaFh9eqy",
  "key22": "5xd1ugQz3BYqgSQ5h3Fg9KbURGdgx9YLKJzTF2hAxFRhktRtteiqDkWWodQ8iu29mNHMTzvEsdGWpegP8hp2mgH4",
  "key23": "62SyDy9sP5855pDbgEyFNZB2J8ZRukNRQ4NbewFeLbaD2T82t3GiWKm1kndk7DGNBWB73my5dh6Q4a6xhJ3TskkS",
  "key24": "5JQsBRQY2gzpYCmVm6PCSLsnSbrQegd64wiTZSW4TmfD9UFXTNwq7LGkgqNAJqcGicpfP3Cbqeu718v1AGQRe7cs",
  "key25": "3CZuh22L2kmrSfAbG4T1WCHmcdjZaUrKDKZYSfu5AYV4CACFVJLhzzFUUqgu3ijpo32t4m9FvB5pM1WhYq7KEiSF"
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
