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
    "5yoq3QTZWVyEVfm1qxuuwNvVKUnN1WnexTWCMnsCtm6LUiaiXPaiWFda99dr1rBi7Gscmnqus22GfDsAzQVubF4j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c4rCCmsh115fPvH1aYyQR7EhVvHrCLAKNiE52yyumcJ5LyGwhmiF4bnL7uxEVx1tjp43RUinCADafnFWLPJC2px",
  "key1": "2scnUC59QtDkb68QvJLuAebqVE8pQqiYSLUKZhCgc9hqRLm1RVtfe1VHzysyxoQigy4CjVeGnjm8foNaavM4Zgs3",
  "key2": "43CBM6qG8owEysB2Y4ZZTfai312acgAwrnPgg7xFe9o4p1ug7JY9zoG3HzrTmev4hhvSMVBFUaMkuTuAvoL8fqVn",
  "key3": "KoGZK9yudufUhgcYVXdUcmvSBw7ao8xnrvarg9j3L2r2hpubdrfbFvo4hATgr8YRsV7rvEERuesHGDjyK1w9e8F",
  "key4": "5nrvc7vfAaNzyGJ22eym3pzeFZBZDPnscJeqjBgFRPJ32kWSUGrsTrky1XQChreyVY2ZKNQKhQ88yokxrc1EKxUB",
  "key5": "3osaPBjoghrnkMSeu8SukGYN81oNBqx1yB749epx2MW6Yx5M3SXHGoYZ6WNTesDUQ9GF1CAxygPK9WjpJhP29Nxo",
  "key6": "4QfTefPkTTMLLUFnok4hCqZ5ie9MpmAT1nZxYd22QqDu7uUFv44RLRfT8pCx2vTDiVEhsj9iAk3XEn3Ch4UsxxVz",
  "key7": "Bd1zwDHd3BCGAfUBdNV4WZCnar6awbDqykZyYqrr6eR9Gq13LspeFa2i51eMSzART2we4RjmfRDD96t829QGxPb",
  "key8": "4bEnDWrDgqgSiiX9UWD8b9pTwMdKDpNUz2BT9oo8192VQdpEouuMbJ6qjRfM7TLMt83NfnyVPMb3G96vnKvmLqPp",
  "key9": "2ov3QjryT2uTj7njz96QnXh6bKyZbKD9DTtxYfKgkiAhHnoTFhrWLwFjDDv6A9vhFb2NPnejKhXsbQT98F7actR6",
  "key10": "518QRxWTC37AwfWLAr2EZsEPK6x1JSwe7reEKcuvwQGVb2uqqPd11KWSYb3xoy55T4WxmierkAqjf8hFfYFgs6pq",
  "key11": "2rK4pxqW1mBMjRkX4hWLx2cuxDzzwNYzpKaFeq1ou3RSWD8bnPMfDmkgCfWYuorHYrX4PmsngziDBj7Z5h4gvdJ9",
  "key12": "3UhVGARLk75rr8EjH6P5Lx5XDc5UXcfR6N8YtEaD2PUh3oUbpZvfkSuZhMV8sbGDfNsDLijweWRLskao77TrDExR",
  "key13": "LH62mKNnM5KDYgisZDkjU2YcqBv1E1CEeiBfWcLZesEuVqpe5rA9LVmzDPXiuwTsQr1fDBetrtRjmTCAFAgYtJG",
  "key14": "SMBxm8BKYqUwJok5L7yZgtbiLuKRrYRMB2fy4KikCqCskZJZCtzSTbFj17w5B56aHhvEHWN4iZ4GAbqD3KPZ8Sw",
  "key15": "4XU8hibh1PqiM2BYxKUYg4PL2NFgfcX3bk4jqRyKw9nQauDTxTRTVxThirPEZvEgGHfYyFrpsKAKCdSa8Kt5WHRP",
  "key16": "3HWUrf1FFuTRdwLBspeeccAdgewFwMR1DmUne9w1uQBfwXwLWeZhhi9MvwLxgJkXjg94UWcaP7DBbVWssfTNupmz",
  "key17": "a2weBBupi7o1rSjCMvZSmZZPcMZFwTddNJJzr2UUAqaHsqdyu5yiFjqAQpAPf5sh1FJkkoMZdw3shRV4FQtgXtu",
  "key18": "4rsEjoVAfLt8JHdqfXDHj5pKLeg8eS5MjESdSV3sa9awJ2MMZw3trU6U3v431ftsqFwAC6R4fX65dnEHq8DN2fJR",
  "key19": "2dMfFMMxgaGa76o3TDdxAnhUJCm44n7DVMMoyS8uGFmRNevUkYsmbPavnns6ZKacqwmU63Jgmeh3KwN3MCeiwpoH",
  "key20": "AVPUrxkoJPQ6i3cyrgszcm5S7mEofALV7MDKafePpuXFYMoSP2YCsPScr3ApU5tmTDQzsBYwK9VZiQSfwuc93Xo",
  "key21": "32MnFa3ErPPmy9H6qzFjbAUGbZPSzq9eeQmXuf6QC5i5viTpxhQXnY9t9JxSiwhJArfc5TwnUdGhWXPfc2siZDiM",
  "key22": "2pES8e5FF8xZxT1iCYd1hHSfkxfdPfKfpK7FQS4mDZxXPRASZpsCNyhcPXM8y9g8eqjktNANeCtX7P5aFmWqqPnT",
  "key23": "5CUSDoK45LJpRAtVBCEWPsgajNM8QJuVVPwnB97A2EkpTFc5kdByrwqR48Y73frn9tepy9JkQiJDL2ECmsW6tZ5n",
  "key24": "acSRFAhh7oNX3UBz7aqh21CSGZx6SReXf2LAmQ4GjkEv9rQ6gMot8DJPiU3v2uSQJgv7PGDtyWDodrEomq115N8",
  "key25": "3ijpVXUGoeP4sQiKkuFThoVxffefZFLQ3gMtLv7qYczwFk2ponTP1BAKotXH8c3fS27g2EoA6kJVUVzXS2oHbipS",
  "key26": "4KvpTZBbRN8bRsCEiwcsR1n3R996YuxXJVJRbFreHZMjqvowi8QTZ4sVWzNuCQEfTW8j1PWR4mw2mYE1wSeaALpi",
  "key27": "57wzijJS6qWGEU8gvq5LsXMZgLd5AvLJEvPM9UtJPB3HNMuSAt9QV5QBJSgKSwAjCnweWwyspHCTZSVoAV2qF2gh",
  "key28": "45NoqC2co9arNxjAoxoUr5hP6tJcypiCg7wB2Zra4R2PGdfGzFgqBP7cELK7tLWfkKKQbLhWjSmRmsJS8mqmqiHm",
  "key29": "31QUwHBArQX5YfpEiXRXYbsEHcTb7kcKp9QvEF5p1gTMhsjQEiJj38eMxudpMMghh224Sc9VaUwdxFinuH75mmkL",
  "key30": "WXJVZTSvMiLEqGTG66gRZsqUpSg4PRffdgyNSWpJbwjxSWkc1V6P5GdJvrcwsegtzF6LCMN47WZSS3YPxdW9ind",
  "key31": "2maTrDHBFAp71CWMqmx2r4wULbhhzmHsE3Jyomb35TAUVvS9KjJoiqwZd8E2sQb2ukkDsNSuyQmrjrPGTXLMnGDG",
  "key32": "5rGkaRqGxqYjVGtyzT3r1RZc7HngfBsP6jngKxfcALrqxRqUwfQkob2A8uhwjyAvDVTULKUci3PxEZjudsxMWthQ",
  "key33": "3Bq8zLJ9pDZMajrskZ2mkyeoHvdVhH3Bv3re41TXoKQFzGb9idqTCvYmwD8YVDfz8cvWSLZAGUKYVKwCWRf9cKD2",
  "key34": "2rJxS8LFw5kRse9W3M9n84FpDJsUW4kWjbUDeX2DQ6vBsUMTGf51uvBrkvJ5GnXgvNmdm66B6VV9oM3DbTwaNTdp",
  "key35": "1VzSRuDktA2uiHLfNUSEts4S1tdSdt9m875voCoWmacJQy7r9ZKXrcXc2J2W9Y1X2ECQvfzH9vNSX6cpPZ4KL1C",
  "key36": "4UAkKWbesQno9fd8gKXFuHmsMBNQkozvveAH7tjcPDXhLkFBHrdkSt25FJi4EAj9af7zPrzcTYWXNBjJpvL23snB",
  "key37": "2ZbfDaG1uQycQ9HzoNKskzRGX5hNG9WavM8FBTiDYQTArF8g3FjX5hJP1SW5RskFBL7iTfoLJc8dd5ovyYuvadVC",
  "key38": "5qmwFd1RBQ62q9yFeEsxWHrRzFHRLBQ9kZ6i1WmqZNEsaBMzZWfCuCPhzBjVqD9ovfrAWinNjDEN4Xq6mMRBcN9v",
  "key39": "h8PSw4U6kPGBauwFupUxjsTtXM5xs2Mp91KfrwKQ91ydJWN4XBGpHgBDZMNsukxyXCMbtca1fjA5rLQXK6RGD65",
  "key40": "3aAi9xd2CDzdg9Rouh9b6LjBfAq6yJihPxeBPWjSYZoDVUMHduSU3ywQWgQZvM66M46dPF9wWLFxPYbHfE8ARJJr",
  "key41": "2nKZtbjx1mjsUWauZ6LhyBXrN4Hu61FMSobrYzbqe39zYXhG3mtpeVVmYAwnAm7z9MrabuVs3AkAwKCsegTqv74U",
  "key42": "5btFG5qDbjf2rgLLiKkJNGwZdkEc3jzg4TkZBhqZhFec1J936EHS6biixGMi2CYrV1ArHKXAwNyaYfrt2MzdiGs2",
  "key43": "4NG5WyuTM6m3j9GBfCJJAXe5Jq4gzMbqpasbqFHbQdq4xPbf7WN1vJVRhAQShpyu2wfggcw6zbb1WCHFwBBoKSaT",
  "key44": "hHZmmYKUSsoeoXDokXBQwCeWKxmBFSb38kLjAPZySdQudEniJieJgHYZr4MJGrAGyJur1H6p6g7jU9pmUEYJ1Rp",
  "key45": "4M4ECsKnTxhBnhKo8vFpNiFn641AFK3ABD6RUae1it3SPaYt9huvRds7iJx2qpxWUvYB5PF2AZiwJvE97QTiLgtD",
  "key46": "5TMyyq33ge1reZTEhuiLd6ispdonicBbZiDyCpRmYJVuArFx3vLNKSVEGQZfJZvDN2mptpqcuavQD665HkF2qn8V"
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
