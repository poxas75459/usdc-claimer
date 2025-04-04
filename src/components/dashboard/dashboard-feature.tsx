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
    "3N3KPdtHrx5xWmXPvUtCJ7Ts1xGtC2ticf7ozAEYUz1NyVXhPrETwnN3vgEett7LdZ3AEfzCNiC5S2k9GbhZCW19"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K8u4KsthZ2wZ2GZv192D2MAnr7JmkAAhG5A5LCPpALGeX8EyE1CuWUEoX1yUYQkFHi8FUsAvjuCHuW29nxCutNd",
  "key1": "4jQdvFq5jn8MTJgWD8rGdiSAXrjnLgLC6pEAygTD6zGkkPLzHPdWjvFhXZB3FDAYrMus5M85KKsMFSb5ZzMKFBtu",
  "key2": "65h2STxCKaFRiWC4fzmhZNTpgXDYw15b3HGLFSUg7K2oiFWAwCwefV5vkd6yGq8aZAvfMeVwUmQ2vqGCRZhJTmLP",
  "key3": "3coY4N4yiQ19cAmRzYofFSmNsUd6VehnnhFbUiDHpLUS1hDrX5mwoymzeHocQybnjbNUxT4QBMELxVmtWjZZD8R3",
  "key4": "3VUuHXpENnquLHaGP96Fs81VLGEQ221EHhWMxwuqQJHQxBLhj7hPahK6po3QYMTc9Qwj59hzb2B5aDeA8J2FH5Wm",
  "key5": "47pf2Jr4wZVnJmHZiV4cEm6Q44z44PtVVpBtw7cCVZXQhZ4c2hswZYu9S3Y2Wqo7hmHGDU31LJhiKPFe4a2o1MJy",
  "key6": "21YGN3enysAVnXTgt9PKtUaF3ufDX3zL28Y4p7kvRH1YhRESUcqRi4iUt1rutddRUA8RLHJ4TeyjLnuwEWYaCZ3t",
  "key7": "fn9msBWhFvLdYb8wsmYDtk8XSHQshuEpCTGYMWUHEtTGpErXbvJEaNnrU3XzjaSHRsqm5Z1bimMMhZGMDcGfgL1",
  "key8": "622akEzQ976i5boXp29eUrARJu5c6Cyzqi1Dx56eC2jYcLedAKfXgV4rjrUnR7fwHcMUq6qjQPyQtU752xeTDepz",
  "key9": "44REKCjKogPJSV5hUhzk9RBqQPWVP8WxZhHZMGohPzjFMzgJ4SAYLyr4TkkHdev9SsftAjArfsjY3oNJSCKY4qLc",
  "key10": "WZLabVNbgB6CSnijteaGLUQEnv7r5sNtK2X4rZPYgbSAnE5Mq3ZYV5bjniQS1qguC4ywp6SdgzvMFBAcbznrnyo",
  "key11": "iWc2jEyFGBtfbAbubVkrKZHfmix39QKDWkrEigELBxzELqW7aoGJmoCz58CdNpsrr2YBHNCzL7ykFvhZaoXGcJs",
  "key12": "5qXcQpWti8eBmsmANWpNBBTQv4d5BC9xghmabBU7wx9m5RGxAeGkCu6Mvo9tUf76Uo9s3haQGcEatDEHuVYiJr7E",
  "key13": "3XYKXMhjY1afe3Gb8ijysgwMyKgkKFMLhj4igWhoKnsCMUL8PJsRnfgCubRx6AA3ihZYP5KJqYNnyGbVsf7UVMfG",
  "key14": "254HBgCTitvsS7NWzHBf9QRodTWoraJia1DsoAteQ3Cc4Bgbe8x5fvKzwusWxYzk92Ejm1wAZ4N7JPc2H336xRKt",
  "key15": "4qgbJHdrGmTnVA5DLyd8rWth6UdLKZqDYGKymTotbpF3kU4CjdAK7Jm5zMmMZwpF6gEPoPkQcPSSRJXnNnH7APdo",
  "key16": "2wN46aqzBfYYQTgeoEZKMH3U47GfGq3k1tM4fNUBYThFisx7wVvrzqh3xRBE26iGWjzA5vsPPa31XyyrBS5h4Dk5",
  "key17": "tx67s2XfE5ij5x8neZmoehWxAxQBGi6qfj3Pid7XS5ux1P1a9YjWjayGnG2vAk4hDvGroyZSdhMUBYZd32bhVCh",
  "key18": "2AXHEQhRtTqKonserrKvyu7ArgzMM2qYnM7nXfvWnJZM5igXQH3dSCNJhPMjf7aVfaUQmuTdVmzYLp19CuifjXD4",
  "key19": "RRchY6vnxzFYzcwJFcZssD3FN29ukC6Ys5aDvRh4TMm31NX5sL7GYB23dYyKGNknNKGKjdhZgHNT9LCRUWfgTV4",
  "key20": "j6YHFzh7EWp4ezfgmi3eBRzBmWcThb95BFzUSeJW7GHTMjg4eCwL9bP8Za4QVUnC53QC4g6tTUfTycwwLwRTwDr",
  "key21": "2iGzqF5JFHfGR32XHEPQFkp9Y7JV1mtdWRo7yNBMcRooPHPUXLFP6RPL1StxgAydbtBVs2vAKDxpYMZtqpZtXimp",
  "key22": "43jAWrGxSbdTsgSFSQazP5N5RLneHDT97iP6Wkau4tfvNSkRkiCyJiSSC3zs7ayLYWiV91Lqfv7urxG6ikc9XFvy",
  "key23": "5i387XUMYddYWbR4ARQXr6WmZbFDSUfgGs9p3rkg5TxS2f6rwzS2BjWDyrim63K8fW5gn7NQyJyD5Xb67SeWgQw5",
  "key24": "62mDEKz3qnECvdRUuahLF39NKbd1fpwU2KTLxyPD5n2quMdmwLRn5MVm3anJPKckURMAf8puzhnAhPZuFWwEGVAU",
  "key25": "YMLYfzLnzSfnCprU2R5bTfuuX5FHaSTJcv31YipywpJbkjhCg7eX6kSxT9vRGpWpH8CFjd7UurseTVSnpvJhR9g",
  "key26": "3HgmJKcrRm3yPofvfUDGjXdEHqMUhTB5WG6BpedcZWnBCmGDU88v3WUaHJrBTMafkBBe6o2ugCmhMPShQc4HyjLS",
  "key27": "3iTVyZWbJ2M6nY8gAYZbEzA1kRv5RpaBM7Y2tH43tK6aF9veBjpx5JFfK9vJf8RDLRWXsBxtXz8cFVasEjy1p5Ei",
  "key28": "3GPCJNBKUqTSaC6qHYYwry9cNw9rTRc2Ag1AancKhivuSAuEGFkoiSc57YLGQoQT4p35rubWqM5fXryYHY6vANZL",
  "key29": "5XTtTsFujk7MX32QYiH3szXktfaNoc7etv3VUxM4hL5r5S8DXhXxpPGjEXa8XawqU6t5tK4tynsyqpicqFnEobis",
  "key30": "2vJME1bZ9aJ6jztW5J7vhoV8vpxrnGTxUS7LhG2HzdndWCaEJG4wsjczafMh8nsvg3joMKSbFSzfL7V4jKErsdyg",
  "key31": "3WVpTdVCc1F3SAaLzKVTza5KYPX3scnPR16HxFNFyQePogJNRZENLYiH6bba2Re24GicHAPzgY6bJUwzxCpwfvWS",
  "key32": "2oiKh31R1xn9EpKeFh2yrdaVwz9cytmkeXSroH2DswwjnRg5raxcWkJNktkv64vDnwDEuE8TaegnD74KBYcr1ptb",
  "key33": "32BJTvYiJnNBLfVo7BSr88gSK3KnMUjsHeVsHGT2bXXpBbr2GNCb1M2zeXqTvEdfqbMVekBRo85CyYV81375zm79",
  "key34": "4ES4fsLQjroM45feJQXz9qkqZ3FgsvP4RNTuiCXrjQEYnvynHTbeUX3gzJ48XzJxs5Cas8tG3wkkzcm79bcf87NG",
  "key35": "5oeRxjWTkKaLGuLdqiBHJt65PjL5PaYTrRtAQuLsrdhS71BQ1tP5iRtFb7gPTdWS6TN9qyWrrNTE6vKFdgTBukNC",
  "key36": "4Qx87m4WZan7YVQRLimGD72QUQffWwQmxaFTkUP5BvtyUwkicvB798EwgKNcKurisTBo2qb1ryYXnroCTfdW8xwp",
  "key37": "5NoaVeq8WhuuYc7LkRyeJiuW4Bv2vfNeu2i14zjbXxbstkA1SLusV396JSbVAaNgHi9bh7Qy1KWkCRQAAgopaPXU",
  "key38": "3a5m5cMJxBXWWycTcYyjLxHYziRbafbKESGQxwttFhSPJLwYP1Jdg2dJdAyPoWES3qz8MC7VwSbdEnFiUh5sJmTs",
  "key39": "4R7ocnS7AsYwUoh8eo5PmQQ67mEUehjConusAjSMJBsqn8mGaKxjVenDpbFTo7VcVQCHFkuWjPXgxB4XnBLABj6b",
  "key40": "4adP4A83mggJp6mX1tibA2jsSwr4u6hrvYLPJTBqVsysDVQmDpGWG4gmfkVork7uxVkPzSjpzXfsvJZu6xBY7ufb",
  "key41": "3rioueTABDDYf4RHbr19cKv3aKUG6FXM5uFysb1BJEVGtaDAwzLnW85nZF8Qzfnt5EBxizxWx81q7uGM5vBERxMZ",
  "key42": "3cV2nxgayNsnnxjHAXeVU27sTKFF3LNdsDpptf1PvjqdDkLNmC7v2bospomYGzADJhaLAz7fi77MRp3R8fCjum5z"
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
