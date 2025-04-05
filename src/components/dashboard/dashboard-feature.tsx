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
    "4tYAVHFwJWQZ12mdbNqcEfh8uyNxcDYudBhtkhTsCmY2tbtdJvzpkm4HXjAUEAYEBbcNcVKE9D7WSDfrXBwN53ey"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V9ZKYT1KZ7k1gxQJmDaw4dazsJ6Qd3o2ybT42Ccdq3nqxShqLp2TTD73zY18qFmsAWHF5HUazxKUsqBg4MJgvtM",
  "key1": "2ovLH76eJzh9FJfjLtD14FEdcetwHKT16jfugqAbJjhzsSUvE8UyixTV4QMk21PtW9p3YKGUqUtvq3YgiLR4TmV6",
  "key2": "59xFERV2ce3HRcwApx4Q79PJVuKXfeyAZgdQ4QxxAXsipCTWSbAqobpiRE5h6QbMMNDEpvgNviYizvbNqnHExbHK",
  "key3": "4kXJ6E6WGWGbboxtNb2np8DWVG1Wj1HgdeqLJpP6X3PCTbWLuYAhrnjt3EyiJSh1cyAZte8m6n4NGzTkScotSu6J",
  "key4": "3eyFdrDhU23AwtQZTqqguaFAc4KW2AerVhpugVqqSkMmXK7TMs18fvMgFAkXbUK169v8z2qtsx2P73YHwQaPQaTU",
  "key5": "4nPJctgsTHqZDrzqrJVMKiBTMtkcvCSMiDvVVa13VUQ8PCfsAwdehrfTccqqomuwtaEWHc8gMDs83WfeDBBN7nJE",
  "key6": "577eFUT3jUUSJvgTk5yaJra9Rr3ZJtdsYv736mr9FHRatDLjhuTSVmDZjn62bvMscFqg6p3mLAEM5hMDTf4UCsp1",
  "key7": "5npmUQGy18oBGLMzmNQJXnVMpJg6QqMGp7zx6pVa5vuFRkFLoM9uD2CC2AviXgWiG1C3RwkCfjYaJ7J2WYYZro6a",
  "key8": "3T7Wp5xBGLG8eWnEt8jpwcq9ztkVnM1Tt3gbieSYd1RmfhVMWzD4PZXmRjt1DSoLobn5TupCYUYbLEFiMqpVWNft",
  "key9": "y2BooomSe4hC9rMoP3R15C3yXAkCQ3xkf6WU4PMQpqcr3peJMybdGvrybzksAtgb4hH7Lqr9rSXjpfWdwV8qJ7G",
  "key10": "3YomHj1FCU21TKnoVtcEcs1bJjWou9DfKCjeejrEMLmmgdHjwXysoRKH3ev5JogXv7EJeUkrrm27tzW7JDWFJgkJ",
  "key11": "3bb2rt81JMdbDyR3JFsR83vxRd8vjhGEnFd77UnMJWpZvLKHZVo4qcKjTahoWgfy1HoFBzmv7Ru4ZbjqFppoiCXw",
  "key12": "5PmioMnrQByCoueq5MCCdrctR1TPyWqYeRdD4MekhPPWa8f3gaUbbDeGgSEoG5ZNCjtMvyzfnPbLAcz8FhaqNWs8",
  "key13": "4Xen9anTp8FBS2okVX9GSrUrzT2M9qkPkDxUXpcBUxNH5medrfDT3iSTyo77qJibEVs8iTAA6d5AwE5LPLwjegTZ",
  "key14": "3u7j8XBBNiiP9RdFSsNoMDEhRnux6ALjDYtvpzbw9WfbLDjEHNwRnXySgSCPhUfpRssdvWF6wXuK1hKnM2c5BhdP",
  "key15": "3P7xW4gBcKmrKXecsgBNimsN8PbXStm51dt58tvrA8HsCxFdKQsgNZbMF5fcWQUzybFQVMukjmViW4XSPFH2sM4w",
  "key16": "5xZF42HjebrewXSeWt6WMd8T1FLmeDuD6NnCuSiggQtnxB4dFzrNUzXNCU3yzvUQw8sG3oyxL5Zw7xxCdzU9mGtm",
  "key17": "xw8gA1g4CHiZKA1CsmRc3VoctLtYT2v2Rexoko1MSjPmGFjXoAhATuCanPFa1XQZ2CfcojmfTwQWVANCGzrErW7",
  "key18": "3k4YnBcGkfetANixQzsk7usfsn2cJ2pfVcQHtxBxBJRrG8DRdDSQtooVt97v4DyB5UeuYWcMSXxUXj2GtgyDTzu6",
  "key19": "2ZiYk9qcFuyPFSbgGfL8Mn9qZYJ5J7pYgE34DcLBqoDUpqjpV5pzoumFU1hHngyMqP9RN9UKuKuXRuLstvuAezsL",
  "key20": "3jMUASHNym7pa6NnsyMR7txYhC4KKwQyTWFJ1n93Kux6XexyNw5D5TperJD6BWLx3cdpKDkpJL4byz6HnrxtrdZV",
  "key21": "25gLWGvFRAd28Au9TD2wXT5Hupxu2BvstwZm8D6eNeHbhhRYGucuzhup7jtSWgRaxij6dUiq1xRA5eW8HhLApsCK",
  "key22": "YdvfQXuJt6LiwME1aBHafM9jYCxrKRCeK7DSfep3v62HpcATwYype9Xfvs4ZLQs44BqiBAqCpyGCPWCLBnyKW2f",
  "key23": "635WsU5mfeGLTdZ3pGSkq8a3L99ukcURszYKC5GZyecy7uJ4y7GeuABUjr4VRZZp2Gk33os5eqUHir3akgW123nN",
  "key24": "2L47JrrQDAXDS21x7X3hYLHHoa9xLsL9PLFYQyGzD9csn6uu8nr14jSGwouTzw5DEFR3ZXwqBBv6hGp97u38iBQ2",
  "key25": "2vvKvg8wuL5NkgAH5medYBQvH3JruANxsbSCfpYmzzv3QvrKAA9rMaPr76tk9FmmxXT8zhzNJazYa7L4qfXjjEUs",
  "key26": "5Eg2H6vUU6P6dcSxi19ShvEVLSTZQM1NMpcJqjkHtPT4covVYYKvVpxpD1yg9t2jH2rZRghQPsJJwAZuceBkmbT7",
  "key27": "4jD1iYw8PZyoJLRJZpS3JD92aGN7o4o9FCoGv6PKNYmSc31KSxx7Wg3JGHq8UywK4V18JRLeGznXn2Nwu8nQpBEC",
  "key28": "2Fa1N9V2YFwkNZRRHJ8QLvtcate8DhVRy8pqKuigEdwv6jRYVaqQGRzUAwG5R2TsQqnCDrTNyx5q9uWUhnBsd6cm",
  "key29": "635iQkD3R2RzTcJ7nGu2sZn3W3GDc3hX2ZMjfKuTwexeykbzAZ1npw4jFzdeYf6EaCkU3osAsyC7ZTYVNAW4HUYx",
  "key30": "2kqMv3yP6LWoGUCyMZg6v4rLx57GKoJRWaFKc3ywT581kytZ9hoE2Rpmk4v3X3kNdZjL5qU1RYm7UFg7dASLXf3d",
  "key31": "3yqtrGePhsJLEYChKWb5UdgmUFHt26wBw7kCEGTvEKqYTFTcwvDkDgQ9uu7eP1tZXo7CReoDtF7SHsqVcpxZ76T9",
  "key32": "2w9J4LyW7GoBHC38RRFkPnXmbCevdXt5CwH5n7zgYAJfWCiEsbnByhXjdpiYNU5EEt9b3YWzvqLdTmMWXLLP3e7h",
  "key33": "48WkFhMeCLKx1WBqoubEd7yE5XYCiontH6ZJwJumhEe6GSZAfnbdWuwD8MgHAejXtqUXDA8Xk4W2aU8goRm16WVH",
  "key34": "4VXNXAQ2JYgzHX9PXG5fFMgyHPo6bfnsjycCvS7TwKAD3XJNRLgZhuFapn9xqFUtWBCd2LfUiycDZkqhzJH9hpNL",
  "key35": "5Anie45kUYnChGjFeSq1RPkhfGE4YjVVBerZaBgAtoHdfDeDiiWfvyJ2rkzAgzAYanNviGjpuGRP59VBNcjdnQWt",
  "key36": "5RcfMvkYmHamrzthahskzAWiGsYCWypoYkjVKCiAM2MsDMp6QeQNn3cPGWCrEYbb8CpcgXRN4yHRGX56umQ6tt3P",
  "key37": "5h8fBjX1t1NsWPvAJoAMTvrMeURqn56wGBSQzgvE9wnRWpNTcruXWKLgJS9m6WeZaXAHMnkrin6RuLBTCx9eiJex"
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
