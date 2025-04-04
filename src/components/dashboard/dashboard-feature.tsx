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
    "5kPhV5AvcXR4ztzN396xx8XrSwWrBTx8PGVhyyW9vNPxyhoLtr6WTsUM48k7v6CG2Lq6cRdCTLnJn6oKWBSt4UZH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gS4fWSfMytHQByM1qsbWgPq9GN5EFf7L7xA3v4XnkMToNJfPEsxopW2citqboo3dZS8awXpPiob3JLeSUTBGJ1d",
  "key1": "4uue2WZGeEEHt2LL31LjymztHt2Y2uau5SHqpebzscSJNmC5BoQKbQvitpsL8mcWqeYaro8wsuwyDdJw21aF2nMe",
  "key2": "5JmMxJuLMABPUkFBnYLxY3XhNtwvvgjCeTRk4emstoXmButRHf5REcTB8oq77J5yDAGyrjkTPTWoZ6qNn2dtMeMk",
  "key3": "5Md6ev4uXFS3uqeZ3EM4Z1bM96KT21oRysriyc8sbfAkAZ6NwozKm7syUBV3gmZRDBDrrd8upctqWWW5DLauLVnt",
  "key4": "4YMUA393o3ec4ziPkG7ztkKrDuQ5wkzarBPgzdHKVtooSTsgoEhrTtgtmoJiFBXokWrBdGY34KgxSvYrWqm3Sj7e",
  "key5": "2hg3KyRj9L5VPFnBma3ZCdViCYMayWkJWdf8jiivmCpi8UwWDGBeieh1x1DZW4Serok5w33YJyyTrPjTm7zajxN8",
  "key6": "3tt77ADBsM7iWN7hWEWWRKz4jYgZmrTcVL1J2AGtBridU2285pMvMGon86PwLgMk7r9CuVxAP4JaJuJDVC39rqt4",
  "key7": "2rEoH5wsna9imTHJAbp9QGP55CzW4rKNdJ1pvi7KWAScK5wYm6NYQqJaqHNRi7HJQS3zipcPFAg5ZjwQC8MCHk7S",
  "key8": "5PivGDFPKFVS1hSiYD6faPskEqXp1sjRLzgGwuL6UWk1VSdpRqn19nt7qLSJU2UbrADpA2kwKmBtCk9bUPXKmgrU",
  "key9": "4r217BD83vYg1iajTMEeqHgAsvoUcM1aARUrHysf3LHuzn4XnPBZw2ZjATu9BmQitJuc5DAeQsyNvFafyryDp3XX",
  "key10": "2xcoypziVgyCxSh7vZGLL3gZ2gWL4Tsn2Fhcy6kezESNfC4DAmEHTVWWhfuJn7mkdQ4MWbMC12w2p1EDGnABZDu8",
  "key11": "4JGmDqJ6qBwmyMHXgoNn8ybcKdPT8MbEy5Pec24TJVYPvVjndEXjkkaoY9bpxf4cbnriqSLV47QwdrFfRBBWZCMU",
  "key12": "5VjMrvXFik84rvmG8JP5AuesjZXzqi4t1XY76QiTQ3v3tE9UVWpfP4WJcDkJAqbwK2Ji6tr1tQBavGWtL5Zkirkn",
  "key13": "64m6yMnvuMpDdQLbRFST48pDugQorjuJskTc5eX8FCjERkDrchbcpkTdDE5V5ffyBDanprdynZcPv9vDQXipwbMF",
  "key14": "46dK2ag7wyV62dVNq6ydVSsX9EMai66NNkJeTHFAzKoDYuwE4xU1ZLh8XVPx1Y9M3dmypgr3BjXogtJ4NgRzrB1W",
  "key15": "3Ghxx9Erzb5SmsUJ861y49gZeWYkZw5J3ArxEnSqS3JE5VDPKBQNKuaAfvmLzYhtHRCNCZdsWBriDjBdyBUG28WS",
  "key16": "yPjXik2UdvQBKiciwhTQBSYeB9EmGaPTHTvXDCnbrzTFirM8LRDpmViKM9B3ASpUjGb6cefAZ9np4PvVHGAoHhz",
  "key17": "4QFXTefw7x3nd79ULc1fpiV211xBS9DbrNzBCCWSs1Zv7o7FNL99xp3R348hdHLixiXQ6DgJzr1wNFKwS4VACAuc",
  "key18": "5EpxoEQ5xXe4sQJ3xhSzxKKXfhkMeivvKkvqmgyC6Yhp6R4H1Z7i5J9geAeANoAdqNqnCWNoWKAPE6EwDGt3qF1E",
  "key19": "3s2XWJYFvp3xfdrKLPzidZQqd7fnwnrJdy89yvQrpvtSzv5gor5KZovcWxVyXfQ7DtyqsyHcunremSMbfVQNsUzv",
  "key20": "EdJw2W5hJ6izHmXzispXDc73cmWvg2YiZyqQsRuLB4LE7XZcfNdZ1mSuKjUncGAHXLuRyiwZBc6a7pXNy915AYN",
  "key21": "2JazrX8XhLYEfnRP6BwTxv7cinukqeQw8XPLgTwBdE4qoqYGEurd7nyfg7RgTBUGMP5RURJpfFKofWSXFKNg4KHh",
  "key22": "36EiotgYyTYuneywkPr8HbDGBMTYhea1HdFGDymXMCV2cXQx7BWFm9HkrgsNwVyqCYAwvfT4aRavwxYKiJbEG8h8",
  "key23": "2GBtFwtfJEpMwMxsByCND6JMjiS2aXCcP7oj5H1P9Rekb68HPGd3gFaMh7VTSwE15Z6mgexdsCaErwmPz9oobjLk",
  "key24": "4A1W3mN8ieNWEqaTZ1Aa8k61btfqJMiqLqpmAZsmRAAyadVjBopigMoMxVHCe9UV6seZN7eGiNgTfGuusL3AJZ12",
  "key25": "3asEE3UCGuaf6g8jgnhXDG9eE1fGWac34aNZkyuNysiE26cT4dJEQGnJoEJWtynoAJYTUV5FfD6jjittgdaHGXWp",
  "key26": "46qGEz4MnH3pm61Yn4Pj6qCSQ9S9cWFFBr8AkgGf7SSb2kBDpmoVPUmQmFuTADMc3R6rCrefuRQc8e5LDBAhb37Q",
  "key27": "3mS3vtXrUBSDPZvXRiXvQrpPZe9A8q4Yb5zDvddteoL4ygCeXG9XYtLZaGHnvYAJE5fgGV8HbZ3Stk9FBW3VhATG",
  "key28": "5SLL3Ae3C1VjeQx5z45h6iSdzDFUPphsqWFL1AhwNXa4CuCN5cvuxqsYobBh9ea8Fk6VkdK5xFk4Yy9oSRwLqF3Q",
  "key29": "5YVJoCFHyNGV8jnyPqTASE53ks3C1mc6NSxnbc9x5CqWSRzjQYGWBrNn73HrAqngyzTgoiKMxAsbT81k9sMVu4xU",
  "key30": "2u7gFZCh15opnZWMbRKxSjn4VapgpRKifq6Gu1tB5z67E6i6nyKbnkU9yCNdDL8egE4uCeortLH4CZZNCYj4YY75",
  "key31": "BDpWJPUjNryujygGgs8xtvtUD51WqhSvfzn9TiFsGzZrXJGaWthQxXPqqYFVSncTgVtYK1mWxvaFGn9cMbRdu9k",
  "key32": "3ukVFnqTfWxpBS7YjSjF3bgsGqayeTEyt2u2Wr3oofJGNhYSaErjxNfwDGBngLQD9f8RXeZ5K5pyghxQbHCRZ3vB",
  "key33": "gPi242rDDhFDmcWTkRSxfjMqopx28r8t15kBayFpM4fT9ULbujKszgpbeHAeubPevKYfECtj9f3NKrTceQ3WLan",
  "key34": "53yr7cAjvhWeeehkfL3a2bbuvJXJpXBXFaYUHkmVJ9Pp6B7WNy8UiL3eYBbAvPVjGw55mjLAsVsZicd92QC8JEMa",
  "key35": "3MUyEo8vViBAqE6pekhgrGGUqdxWPqwFFJyY7eiaqfj3pkgkmdeLzn4pY9BhRaEkXpZEsPQR81wSn5oKHpC7FZbX",
  "key36": "2Twn4SzwZ3UxoWSvXWL3R9jGfPadYxM3MMFBVzfCQi8KJJbuQCG7jyXsFXgVdNuKSj3oPc22NhsGVQHfKxHwhxhY",
  "key37": "55LaPFHPbgF8AJY5e488LX2MmrMKhZS3GCp8HddXT33AvtWFcPRWYN4hDDXPvpiUgAi3zs49mVN5yPPPyuCoDRRK",
  "key38": "5k2PCT4VXjResGxSRvxd48LSdtCX2HMBHNLwTzfdeBtJ9Bzcss7Dj7G58mFxUNiFyEhJ4Q7P5wjfcRvLuzBYYTQC",
  "key39": "2GCt77S5UUB8fVNJ1EA8jnPucNNsTp16oq8pB9vzdsFDJ7UFQ9gQU9swBtJ4QZvrXRHeJzcLTeZGrm8XCpH4cZSR",
  "key40": "5nUt8p1g7fDnyaWUYvp5XVBX9kTLJcJvuVJFCiZnersoeLX8HqjexjTL7mdc6x7t2ReotpDQ84UzVrZPYiUaarLk",
  "key41": "2bbfG9A6ciKd8NWCQsxRihFWG9y77vTVmqK6VtDYrNBFXBX1HksJPyx5z9EbGCFW64ZAcR6VJV4D1Don1eP7SHYJ",
  "key42": "4RMx7W2B3tbogLPuvrknv9ZwBbeZ5ZzcgJzp2zfc2JLP6P9yFFKNXzNE4HHFgEC3vE6h5mbp5fF8vvMwsDbaMcVJ",
  "key43": "UnDAaoUaKEMNo7tcZyu9xzrLowj7vCfdcqTyzv3b915F3QkdZJBdK2Zk2EhNHeTfkA3VRpRqQAeCKc6kwjQDr8s",
  "key44": "5T9q1jKgFHtihXs6rc5EVByzG85JEwZttibxoRfWPaSeL2AB9c3DSQR7X56aV1yMaEuySRWQ6tSYnRwuD8nu4T4P",
  "key45": "qeuXWhScerMM9LRJp8UyDTaxWXKkBLy4MSQuoTWVqgsmZHK7gE4PybhKYstEvnkV8NB4t874F7WSXCCA77mkDGw",
  "key46": "3X7bBBHH3KRbZspyRdeix6C9QJSaxPYQv5gCRzYGigj4fpojfp3jBdLhv63Uypx7EsihScvYWBB5PXQkN9PTcRzj",
  "key47": "5ZYs7Nfg1P1eAroTBDgpBX9yYERC1GikLD6ap5XHdBF9FiWfFHCi2CdtjXRafEM4M6yRAKyQqYoevebkDSrFS2Xm"
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
