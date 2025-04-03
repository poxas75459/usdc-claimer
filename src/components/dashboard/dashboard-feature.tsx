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
    "YVZie5Jwy4562imYXgTwLaonmnzEXcms3DYn32tmD7SA5DUf3T7Fm7bzBTu7sgCMn5cU7e8LB8jPpA6d3T7Gu31"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iAooEWftUgbg4CbYRdVwwcNbJfbuebB2RBLbDXuMu5wyd23tVgtBiiDrWxMHDxyakwmZtqJKxRvvoJFzi4NP9cU",
  "key1": "3SLvtSpsTuSFQijcCS8wMqzfhBe6oHfbHnHuTZ5w76zCjtbQiMXmc5Mbe5wufaAoQGEqQAGVK9KyatfPfqf6XAsc",
  "key2": "4fkXsszPZtBP7jWHkchfVdzwXi4bE3qABBym1pC74g5VcYmnGD8EMgjeXZ45bQssGDJFQaRzNX2HnJAyJriT6kQG",
  "key3": "59U3uq9ZY2X1KDWT2o5RfKW6RhVvPMp18hBJ6LrzWsYMUnKMQMetcNMtEPkDzEFDCVLf7U5FCzfQNBM4EUqnXAzt",
  "key4": "YajWQbu8qGyPzSwnxLvVxDskfpScLujo6TKVFTHcxLavqiAvpHNTmRJmig6utdYrAgetPDbvQyi7qrrtq4jtMR2",
  "key5": "sumBuEBWecxDZ3PSMCCmrdYSCGEt9PogJRTgJ858ay2aPyZMjnteCyb1TW1wHdFR9xW4GfzDFwnFTvEcsmqzP7n",
  "key6": "31coHUwqRyMNLQh48XyLpDLECDWPXpRRtCFAd2Htteg87rdD5cd2CffJEyxL7PSfW8btF4d3rBgFAVU6XJNL3sFt",
  "key7": "3GvRyj8DnqsftM8jYymQfwj89YfoH6iBBK8MdZU7XRm7v7YJxyFJSyFNbcE1sgUox5NG2yu49iWVrHjAaousLYR3",
  "key8": "4z8SdmoYz4PuUDnhQLYSJEdMvhj8zKQk8bGt4BrCKXFraCLQBzetj6NKJzAhJ1mG8KxL2R7ogEX2EirrEtxGmzH",
  "key9": "koLjq121M5S5roxHi8THKWzeCXGcGhUoWoBdRR2XDaE3hfykjDGqoKZMdAHttFvECuc29iuHygFck4RSZVBvwHR",
  "key10": "3mpTKu5VvzHJStDNwkRJVQ4sWVta7xDXeZfTYA6JsCkfBin5A4Pmq7d1fjbNaAJtgVbx5fJMQiEvpk7TMsJv2Qdj",
  "key11": "2QcPNZA9qs1CAiFdTpcPKxnWasKkS7exAdSeKPHc1Nk9i9E1BuFwNAyV73ff1uxTr7UqkCQGAvQcQhmXHBEZ4EMF",
  "key12": "47cLPj5EubU1UYUyDefiFQwkPhtfTSE2RDYYsLdCsdNLeT1bGgCg1DpiiaUvVFFEkySFQhWQhXSs9m4YtNtdEhSL",
  "key13": "3vWJrk8pCBoWyn5oUVFZJ6FWA49XVV8ZoQ9phw1Sfrc7qXAQEbvU7ZqkjzCfzH6fg2RktVyBdZ4hazrdoKSLTaD7",
  "key14": "2hyARio129D8NqLZTsWNwrzgcEDwSv28KhLFV37DL6qJywZnxDYuqaXoexx5NEYEsb2nBuThPKF8daJ5PA7pn7kT",
  "key15": "5SgWaA3qiQBJGhWeoqcEmgH8k5CcCDbBXrNcmGwvM4CGCB4ExfuSttEcGuK3MVKKWSsN2uf76U6TeqCAWifnvD82",
  "key16": "3PcxGEfrCT4JN88NzidjMnJx8QFFcHZXX1GPwfUaNkzmkxUSDDpWw5ab8zqArXNuufqHqYV9VFcF1aYYV86eVGBo",
  "key17": "aJqnmrpDbLoWyj3j8EvuhhvUjMXMcLD7aeMuZQJDvSmnYrcM1SPz4npZPgQ9EDqSW85Azmfs4RbDup2Er5j5dWo",
  "key18": "5GRrmgRubmrGCXyGfAeDs8KioRTM3XKuxKhnmoxPQ5t71gWr5W21PnTE4KzDtbGnVM9pNwzzrrBRzceymptBC7CA",
  "key19": "5Z81hqZT2WsPcUtos2QcoJnXBtZhgyGzSzLczzroaKBWU2FqfJHvg8BNhyji3g8oFZrrhFZNtbGr2m6jSH4u2oGm",
  "key20": "4p5aL2WqmPsuhsJa8T8w37VjRqvESWKdNjEtX3dLUc7M8m2aXToDe2RWNAFp8SzAYsVsMJuodNK473EDyrRS4qTt",
  "key21": "uaGx9y21Cz6ErUnJQHWASdRo6NGzQC6Q7iARw5Jixiuh4wg4KKqZykAuodRLjK7iRdRqFruSu2pFJbZmcVksmBd",
  "key22": "24ee11wbwtSuedHohzhKew6MfsGNdAHzoKw94Wei4HbzMeWPH5rHexctrRR9V4ZXxAYFGjjK7S1T5o8USyJ1x15R",
  "key23": "4bh1TrvU7k8FJQmHXdL2NoubEtw76gTWtvAPjaFxSzAgTgvUypft6pZFUDkDjTwNZQLMkxjFtpWev7qCkmfwB7bK",
  "key24": "45ydgc67PhcuyziA8mcRKWycQety8NgissFxKyth1pgE2z7nQyf8UV65NzJBNM5w1p4BRsjEWY3CT3LARrYZ4Y8R",
  "key25": "3CTygrqJpYiJDFZCyGeadroBQqVuTc4dAcMJx66dGu3a6kqsLcavyVe2av9NysGoxzUYSbXcrjUzhMmNA2qqXMPZ",
  "key26": "36VtQGTNsgAiwKE6hLRmAeAMBnFr8uGWBZAqNuMSwSNpXKcYdKwsFpWeaXC1pVMU9WZvr5tWkCLBysKhquD5bk8V",
  "key27": "3AnWoYEgppkKDqAk82pivKbCMvSMDqMbUG3w7LxAC14tGmoCzFfmr8XChm4CEFMFqW92EvgG9RQZ6HsoqNCHT1zd",
  "key28": "3xvBmz2DuACcq3CMUobdZWr2tH5YUgqqQ433YPNcCKberfNfbnGq8YxY9awhNhEZQpbTnaoiKForDVjkhSyJvJjV",
  "key29": "4EXe721aJYrt6zK8BHhUQ3sb8is77tt2iXL9znpH3LnAkeskXcdNfy34qwx1GNJ7VVVAcpmXzWdT5AZ5TREDFrm3",
  "key30": "5CJ5ztANtiEF1Z1hMXhUgSitEuGWftuF3h6W7iWuR8mrQsauR3duxDdsxkcfjT2iaMSpz6K8bcU6uTNtptzDXwcA",
  "key31": "3i3oA9CSuTQxejYp7PNLNQZBPGQCg2SEXqoNY799NWjoo8qKoTretcU4ChRxmyotmj8PmU7bRmyKjR12WSsWJfSW",
  "key32": "KPwpYj1rpDGuSaKr4C7crBbDCpBJNYehtjPFCQSsZdne5PBW6x8YnUe8viCoXqpE9sxo7BNyg5RUJweEMxqcmdb",
  "key33": "4YcdgGRRrUa5TDNznXpq9B1PUYKo3MLnBrvcjkHA2q9MxujyHk9PkZydSUXevE4vvJiiBDAB7nCLtNfHZuUiVgCQ",
  "key34": "5BzsBA88ZzpK657hnPGw5zteDV8YTrizrZryuf1YjNdW7BQRqd4s2EUiUdBGqD7QbstaAUdqftAG7cxFnyd7cmAS",
  "key35": "3KimwhzbF85tDcHzNyo6b2CH8HoBYZBYrn2wnHWxCXkndWohB3CZhm7MuUL9fRxyyt4NpmL3QawS7CQiP4Nkte1N",
  "key36": "ak9FxMJxd5Ythw7Xe3aF2jwGaVraUvfv1YYUSD1yZnz4F2G4qbMX97S1cYMhqTeJTtSKCpfbF1FYzqPyus1t2yD",
  "key37": "64Xm6t5rDbFgP73fGt5MuXeY4WPLzfBeZQKH5htTfZzfnc6XDv1J2Av7GnVqkZtThQKJoHn8pcJcG2xoq4iQxM4B",
  "key38": "44i7Y8vfwrGQScd6QJ5EK6P4eq53LPTxLJ3PT6hkzaowssmN2PXEY4UcvjA4DwSv1FZhHhUD8jcRN9pPH5Rs1ZSg",
  "key39": "KHJthGPNpATBRvuFndeDUBRZG1ks2c2y32yWz1LS68k8cT4GTbaZHjm9h8nkD9x9qbHbPcDG3R66XocrS8GJmuC",
  "key40": "5FEEmVaRGLDzzAQc5Wv4uv7nxgehd6AH8a3ZKRDn1Ncch5WBHYYV66iiME9MXdpGYWkkb9dnb71KaKW4VRrbhuuu",
  "key41": "8ofAZEHsEQT6yP87QHuWL89aEvMfgYYJ5eCMb47cTqS2BZNnry8F7aqNdQBDv2SDF4MkkuyEVpsybrxn9BTKa5M"
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
