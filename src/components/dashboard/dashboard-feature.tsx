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
    "39rZMFyLA2JRi32veVY2BfJ8V4bj1v5PhhZCGAyRXRRmMp8EzSg4y87QvztgfEd4LKfEc4v8pGdeN8QVhudKVvxx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vrvMsTzerJ2WA5fAGYYwTGJiHtZeYP3Jk9hfgyzQmzX4aqbY5tbxz1dCQNPAzuv1uafrpAq3WXyJsUTD3uu7HCr",
  "key1": "2aphZWVTc4vBLdQmgJxdtNfZSi9Xg35hkQH6hDLvAsnKvp8b3n7Sn7JEay6EEBN2Sn6dS9iLbwcycsaTFFFfHpbQ",
  "key2": "2UyrrQpdU2cqtXvKMrR31gaBPMJL4XDBB1cgnhX49NoTaSrQM5LrFwM451ZurPUeiXZpaRQ8fXPugmHLogiYjckz",
  "key3": "5ephHbHdssgMPASkyCtH8Jds74tqjGPz3XpnUGs1ozTf9f7yWPokRJq6nCTw5fAYseQDV3EsGvxrh5FjEnsHdpzP",
  "key4": "2bRHvYVCwsxZHe2vb3PRE3S8DHpfbxzqcRmCXYCAJzwXD22W3Szc6VF9VA66RGrWku9QpkpSRPAhbG5TcD12vnpQ",
  "key5": "3ZdETnDqhZmkG5CtwmSdcvS3i6GffxpqUGzEXEf3VaQThPgCFBRm3wzge46Sjy18xn1gmcFWoNqczw2jfNgEdz8V",
  "key6": "2UjczVjQjhgjMDVrKahkEH2b9ZsbuMZB77BQoNBP8ULAi4pFqZdAEuEHFQViFRw993CbW3dW2NgRNnCDhEVqfQQM",
  "key7": "366xnNQ7bopGWoKCmaJm2tj5uKUuSjqoGqE1TMcUZvnLnaX56pLrMLnJehaMY8G2cDchjRpQxfBENSq9aCmzSRyU",
  "key8": "624CugRuM9tvWDzCb5GgjDSUZDdjN4S7nZukU3Po2GghgG1C86NQ5MWfxtENdpfqKTjtx17cqxJ3sXF5jD1X4nqY",
  "key9": "2L2ZJXJ9sQvrTP7Nf5XWBSPvBSoJa4pZaqDoj6x3vufVz4mcYY7jR5vp57JWm53jD3X7rcfK1VWfm3zdZ8NVG2Ac",
  "key10": "5TtDSfgrxjU5Uu2xVf7XTP74JSeam2G9xNPS1yiprrp4bybvRaUejnHoSPrBEjfqPGarBKBWfiXCD2U4PNKQkZMN",
  "key11": "2DFCeifCTpvurNtukY7g87NG738kTig4pQJAuwoq4nTC41HpJYCkmWHbyH9UHRNLNQMLWRyS54jJ1qrmqmZnNbkW",
  "key12": "4iuQ6cwEo2GC4wHsuCThnqoRmkFSi8KyAgeEjtTi9XVRriUqwUgF9kc62tzqN8T8oaEJQYS4MpwMSFjMHp5wXFQA",
  "key13": "65aEUEGtNLwdgS6pjAQwQtSeeEd5rreDxbWUkgw9tAvPKqypQ8AZjDegJdRdCKDktjHbp6Ti9jePR52SasNW6PGZ",
  "key14": "48W3bHEKtLSG9fEjD4tCgt4s1gLuXBhJBs9zLbd7HpZErwhPHJT8KQK3YY7884YYNE3UiuUiK8QHvTLfB9MuPDy4",
  "key15": "2y5JXEP587sJhEvZyPhE6m4LY9MvoexhgcoBkVgxfZooyc83ycV1yvtGZNzL56WiyUSh92FnqzTbrfAWsHLZgqDt",
  "key16": "5hdV9khFufSsEkB6XgPM9immTcULa481X91xJucWmibKhez831VvVTRTfbEQhqJbBkh3X93JXovBtfnjwyfoGznb",
  "key17": "44ES19J6g5maaHNzmFppPnuzvvDXktnHK9WZWAbwijXeAX8VDoL8fFAQqgWVBSLSgUab9P2pYqAXb5Akjmzw8UYA",
  "key18": "2jt9giMGj4CXC94b2MGiUVqEYPMNkvsQEV9VMPUDsVpd5yvtR6eM8HzTqarWGqbfXWPkx39ak2upGVMgsfoX14Ku",
  "key19": "3TcKoBADdTJTk3dz2PcUh2Ctq66SvXT8tNvQr3927USjJqkEC9k8fbEuEYhp8814EJmkCgcLorM2jv7vExEeDYe2",
  "key20": "3QTeoMfJKCjxFiW4f1sWkAjyUxxpnrCP9764hadH9WMJUrV9Rdog8nzYFj3GoxEUJAqbrohYrPsWP7eEZPGE6MBU",
  "key21": "5VtebEJFGGWC4fALtffjDM5UyRwPYmZuvaWLnba1aNPocX7w9NQvwBPYb5TaiA2Y7nWzpuTwCwz1ekg4n18Vvyn5",
  "key22": "j4vbaKugm5onwssbmJGmRMjkt1CmEAMqJEgcMFst5ZW186hiB2jyo8ggm9mkwYHp84m78fAsBuRZrX5rLTr1gvm",
  "key23": "2iZ8jrREcCMMbXneEihhyrFRatbk6xR5or6EeB9ojKQEyTUPBznGb3H225xczX456KoG1Cg1JDcmbRoM4Adn1rH9",
  "key24": "5aPHwJ4wsNuaGWY56PyxcAK1gRRQptjRhipjYKG5xP2ReKTT6m79PGV7wbfg275xcX1v67LWQoSco36k6itN9kSG",
  "key25": "3T1gLUCgzr5xRikgENeEsVdCUepqi3GwCqTwjrtkA3mnZoyyu8C6epnq3tyofmS8EP9iHNd1yf4B97XGWmBo67tA",
  "key26": "3X2gjXVpHyaR6WV56PAyUWZEpvKkkHR5biDNbyPidMDuEofeYLwMSuksguQ2wvJ2FKxUQwaXV3gauGRheSdLgRER",
  "key27": "2Xiri6xN4QYFzxVDpQPC2TMyaPtE4uUwuzomcdE3svhUYYVGH65sP9WvQfdEYd34KV5zuiJ5qEeSBFUP9a7EGP7C",
  "key28": "3MWmQDPHRQ5qvkDpUScJ3JLWiN9FrN6CrzeBaQ8TQugKiNi4hQ5pHsozRG8khTFDQaj5Ry19mhQZv6agF922XGQ5",
  "key29": "3kewUBt1HuEauc2jdMSbksBxtobK2ufdRntG84tsx3BAf5ZYh8JPdHE1tV6A8PfXA1Z9Ve4fKqSEQZN3mDuR3Krb",
  "key30": "2b2QxZGTiMLFTDZrVXRxKMY6YatYVHGK6B5LTTzbSbB8bUg8wJYEis3ShnBtVUyud7gc2BeWdafnCfkbhS11qY7W",
  "key31": "3Kg7Bc9YjE7hNSPJmpQASUx5mvAnq9GemL9oX6zF9F85esPHtUCLEuraTQDN2YqQtvCh28LvzeTinozAcEeXickR",
  "key32": "T9EdoCgqt62q8ec51sLa4H9GgCSskDD2UtBgAwjgUBiDXythua6fCcWHwxBDwVT922wpHS63yGHb9gzxuUGSspT",
  "key33": "5mpr1q5ZkBYYcwX4Be9kPPQB2uGP8UrmUC3E5m5btkUTCzQHVxRXuxYbzRBxbdhcUTCLEfihDK4HaMgXXEFeHrNc",
  "key34": "4dz2HzupgYHVChEBWatTi5ZgNWeoQvp8mgx3eHxYQ1vzfYNxPLgEbGPumJmZVN8Gh8YftJmTCqKKgHYa93HDMjsf",
  "key35": "26S7h53K9ssQ7EyNppzVYbT4pCABdV7n6K641kWNaErTDY16wqhWpr8Jv6XBtWAjM6qbVyWtq3V4n5VQXuoWd7d1",
  "key36": "v4fYdytovP23GuYCmaKjuiuDheLtarSRnMewXfQTJGoxW7qCohWtwxoNm6F2KMqPk5A6JGxZrXufkQSajcLspwn",
  "key37": "32R3jeHQAG9GfdoLwyAhku1X6jJYrkJyVTBhNqMtCqQymhp7VUotUR3rgkFtjbcxmzahTyjfGQ3117gEgjtydLp2",
  "key38": "4dVR7QTiZg63m14GqZ71YfriQzpEeDEJ9H1MR8Q65GimFEQ8Lk4MoQCTeWpNxCB9Ab73raMj29RRSAH2HwgE7ka1"
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
