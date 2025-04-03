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
    "57dPRKUK7CBTt336R9oosFBL7YAAuSyyytMFmZW32ZazBDmxqMkjn9zZvgNwyEPmQjbAf4VhaY1UKT7xXYjagFBz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DWow7mhRa9h9kCRSbRza8CWVZgzvztxpy9gbaUvB7PuHVvxYMeV4ngYu3Ecayfa528AiZE91crLW2Z6ksCUdxMc",
  "key1": "3oFbXQBKwUp1cpLvEMs8H4ioeaidqtd3YMENbVsgkVbNypuE6qLxu72ndQCRiUvyxvNEHeoEeMmd5Gqg4EjSyPPb",
  "key2": "5aqpyU96tgNjryKerJwqYENSxQVTqe969G3WHU9YokC6q4u92rdLCDfVZzEczJw6AfaNLeU2roJgcREygHTV8LzM",
  "key3": "GSu9mzqmQgTtoKA6e6mRuNFodFMgncZDgy3VuXPVXrPwXZBakVN9W4uTnP3LrmJzZdhdjtvfCgb1tm9ERJ5S3KX",
  "key4": "4ygCu1gHLRBLsxGP9oQP2cXS5gYKiMhaEHHi2zsXxxuxu1JV84c9YfzMGn3Rqgbv5cbrAHUW8NX6wk4PZ6JA74ZH",
  "key5": "25w5wi53623FJ2KQHkHShWZe4YtwrMHZ8td43V8yKRepGqR4vWbbRH74VPrqkVXreDNBgT4ZJHeUyciy8wCMstJ5",
  "key6": "5ybmhKbCkJJssfU6EjJnxbC9YJyTbvbdfivWPoevJ5gmZBersUEiBc56ZxhxgHGaEtpT69JpMsAuZNrX5VU7Esa",
  "key7": "oMj9AoDb9qppPJz6n1kSigec8BR3mBZTeAuNUcuJ2TDwbHGNdudchjqXQs7irp9e1A6LALaa8wUvf8fsudnbMvA",
  "key8": "5scMHcQ9NcL91ktg4HPvKkLAMBD3avkwpnrYT8L7KMdWXpvvnXt6xs93tbKzNxrnDtTNcSeniacVDScrcQwxdxCH",
  "key9": "6DKaRiWW8rXRFtki9NBdDPpBe4FpiakLZMYbxt8LGknAuj89o5ueBJE7nTP31h1LbQemY9EaRhu9cgEesTreQT2",
  "key10": "44B2GZWAwDPbj1XPEFe4L7CDpdNkaYtZ25XF4tSQ9mfuk2MRoHapbFkBhNCXHgptbf4VdGLLxmJ1BkRKTgcUXBp8",
  "key11": "5ATauMp4qJPP2TeWzPNKkPT6HtRzwVZzrRCddHPEq4VNajMbsv3KHsK5UL7MeHZq7tYTGmNyE1CBWPxAaangkiDq",
  "key12": "2RiUGtjeRZKqsvs5j39j1FsZ4C2snWjNye5Q5wn1W2B2dUQva11iZs7RDuNtneABn2mFGfpsT67opDoRMzfbni2u",
  "key13": "2zvcKcgFS2e9Vyb5kNwe6HpCBupJiXtS2odzNcsMLbPYkCozQGWDebsA3PczrSUjpbmWh4UqHNaHisQPgDMxDn8D",
  "key14": "4ANjqAgXAZN3ewAAJWCbnZcWSVisNUySSNoi1si86kqSwRESGt6J7wxf2nUYcpsBbQyNUkLjFQcRYzJrQX42ySzK",
  "key15": "5ZgLf4P5tBAcAjkF57LYcHMxB6GpfxoPnzNRMMwjjF146kL3S9hK8dHnYzVaphQesP8YEmDGk1FRhLfeAUa4Lvgz",
  "key16": "61TPFCVpf5UYwx7Pczb3SuHy8unT1dYqbY9K5J8yjHzGnAS2SQrt76AA4iub2DnbcU2eiZTR2xjPDgJosG8wGBJz",
  "key17": "2FvEShoKTCsjjVwntdo1cQgcWEjkcyFVtUETeDvSnMex95S95zpJHBQPG5m7JkdzxZpF6P8nvpmve6YoUe7mskug",
  "key18": "2eK9DDF76Rw8bCZn6YgoTdrvudmRtQZCgthjmR7G3HTt4v979SX7Grrux2Jhe8HnLUbjLmYTgfyNHG1sdTqoSwLx",
  "key19": "3xiU4FAuhDEAeCtTZHL33mAMqNyHgJmenSZpXfGWSTYjPSGT9AkmDvsG6McvraCq4zofZK7n19LehVnwM8YFKMNZ",
  "key20": "4nH1cimFGBbrj8321Hb5N8pQAMPCwF1jjGx2j9q5GxFYdEkLy6dM5149LQ1aPDHWzo6a8vyPmRWsJxdVD5jbrkCY",
  "key21": "36M7BovX6inLxiSkTWvefrpXzKwFnMC11oeXDFVc3YbqKXBXAUsmMxq1QxwTwN3gQgSxDGFSAdSU1cYhhrwR5YEk",
  "key22": "qZkfekYNGy2RgnviYAE9oGxp5MJwfVDpKFhnY8nPJafmfkLnARkPrH9u5EmdZ5eaXxNE6CPg9GjHWVWqXigWNKr",
  "key23": "2pmq9GX4ocgPC1Q11oa4SK9KUr36LKtBNZ1qyNk7BCXjGyGJ7Xvj1yt6pNVVse8gQud31DNTnByVsDDGXJcR5C1u",
  "key24": "7zodMvRv4wrXCEvzhyoUJX4gFxuzyD7tedPxveBrxHiNQ4QbthWsEL2cdAzSAeZ713xV1a12Dhi245p2QeE8YjZ",
  "key25": "5SiZ8GhCFpZEAfnnCNZkMCoE2NprGiV9DzcFTk4wo4WZgS56p9seJwFcPASoBKo5dH7eL94z3kX2odtwU9R9GKZ1",
  "key26": "26jVEtoYQ62XknzLmoSGsqFFpB2VkRaAPV7b8o6LnoNURHJAmY2HuzhPgCJDBsnVG9hiLJ8XFBRdbfbw23EUhmZN",
  "key27": "KWduoU5e5tBpLQsKc2x5D67T1F4hjmattwFdARvckov3EmZssr9vUGNnFTUFuQoNjNqNMUytYddMtyM9ViuJ6nJ",
  "key28": "5JDPE7JUKctm7bBxRRn8QY5ts6YAKYsS1gHnfwmou5QdyBPLVHrz5Xo1aGALTYfDPqeosRRVLz75ZvDZ8WugxKyW",
  "key29": "3qXVf3TKC9z6z9CWFQxp5LcKVNpzbYo39xZGtvP17czDTQ6QKKe2CzfaiHKGA1xaxiqqLTN2VE12KPNBuhYY1gQF",
  "key30": "54keSAXT4pA7teDQRK2f4X1MrTPVDHaN348Ut2VBiNvxQxrv6y7kYhbJdjPVvE7T3NJ5k9ah4epMbL3TvCwYUzWF",
  "key31": "527Nj4cN7vFbuXRq7maykuvmSi3cYvmyS3So6dekW3o6Yo3rwYWH68DMePC7dQqVPFVf2nASGRtoeEDt2wYSxViA",
  "key32": "59JeBNNezPnubFwRrMdFDGmJLKPgDzi1jRXwkXBuEZ6pKet6oi6Nhg2bedTCHn6zdvZaSZHJLnzZYdYPGC1iPh8z",
  "key33": "4GHYC1K823piHDPr1dw8eD4rUfAZD16cGP3563VgmeGcrks1MffHt7B8bhN1biXewRv3W78u8e1W4NyKq98PdU16",
  "key34": "5w16fk2badUPWn8baU8zstzxzxqiw9ynavkKNSbfEtd8DszaWvrDSxbjGHP1zUMYSZ3EiNZGNmKoe6pi3AakqqSd",
  "key35": "56tJqHRkXT5GW317mhrhT9Sr1h4yC7wYX5eHb95XaRDtaFdWN5AuHjRLSXsEqH9jFYpgvzameDzjb7C6yn7A6fsJ",
  "key36": "5cxCV1hmSZwF8QzZktRwUUvH8XaSSVHYiLnide3ZwD1Vc5aogscNokGFCraYdFETssL81SaaWx8M4vuRkzTeunXE",
  "key37": "qiS9Lur9uuXBMT26i6mAmGVtZpuGe31h5ami8MmaksFxstHBZQRYPzmdF8hkF4PNf9o6QayZu3YYxotACSGAhps",
  "key38": "5idTKv9eNB537cPZwK92ZCjPqMZ9snAize3qAH1p7Vwk67F4CdQKagT1y7WNRDGZ78VMAApa9ru19NKeUcsdhXGf",
  "key39": "2tbqNKWYFNHg8mzmHbn9tmocK6ndiKx9Gm2634JjfKrr6vpZ12WngtJSTfYS9X9ENfydpzysGyFXQWSkRdKiD1J6",
  "key40": "XzJvq5ow6MNa7WwELV6niB4jD3ey2ZXFUwTKm8dtFUKFksRsGoVzmZoY6NLJPqQKagLvut6irUhD2sgTroywha7",
  "key41": "2ssE4ycpaZQWXWVEe34tNAceFtAM46c8S4AsRAJWKjtPuSLWR8JhyjtUzwyQT4xHAEQCt1AgKxTTAQ6GhDxyENw6",
  "key42": "2mrjUxzGVCtUEacjNJYMCY5sgQpesQpXgKRUXYVXohb138QRXTYUnPbtht6qEnmS1h2XKTbtKcTqH5Y6gWqDAtVm",
  "key43": "4SRtPQH59oT6mTNM5DAT4fezGXJiZR6hAFnpFyNDk7rD25oxyLdYuTZZ6JyCsoJgyVCwCYn9Rhvbb7aq1WBSP2Ad",
  "key44": "5ZZDcojpR2g4xnkUPAzFNZSjepsU4mCFJyFaHNN2m98D2u9zi5eL8VvY5juuRryWMSwW3jmkyF9bevv6NtUUqawq",
  "key45": "2QyYSGgwoN5uq2Yg6BJHXEC2r6rFVBxr9eEz62yxEyYazrVddzUajtkDgAfLaT3Bf6yh4JAE18Pg6xLDftHFGUzw",
  "key46": "BN7pNzKP5PHncrVgwEp4ncv74i2pQ1nc6iMogzW72PJeCobaqu6DZsnd7RoETbW5rLZio9pHyyRUGhtZbhCqJN6"
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
