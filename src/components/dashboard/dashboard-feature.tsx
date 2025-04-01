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
    "2XLZnb4S4ogRu33yTEmeRHJqePGzwc812BG9bXVVMu9Soj1D9JSNb8V7oxVB19qMSWpQQf4hkH4Rg2tL2dBKppPC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JTdZ6uaAkgweNk3USquWypGHX4qgVun5JqJAC3nv5DAnwTekrd2j4JSCmuYxRBmhJ8cFnYoSgiEau5auZQgDyYA",
  "key1": "5cLgekd9sft4vHfGJ4akjkxcBn2TKUDnEnhsfj8NvjFVX7brjJhsrBH93ecW1CNLubMWJJrrdNx3QCo9Mc1PCM79",
  "key2": "5Qr4Q4GbbjngDFQUei9xXCCwsdirnD4WTFqgUu35wyTC4YgvSPkG7ub5GV3cRUrnKdy5q7ZDkEWLu118TLajNkgZ",
  "key3": "KXE58TcEM5ALUHjTx3rNFTM2mb1xLYeckS3tJrCAuiq4mqwneAgn8i9Tbm8LCW7tE3WH3YbfwrmCFue2YV1cRrP",
  "key4": "5an2vKUyzgs2nirW12zPmtqGvD6REF8Z7LsMr69xL7RMbQFkas9hjzSbApq7eZRTzRccjLAuujHsbZJZFE8Evhxz",
  "key5": "3KyWKRd2wjjTHe1QSGN2Ef1LX4wtsKGGFJHouAE7P3vrrkQovxqaz11nQao8TWgGtDv4uVttYLauLnDtwEqyQ4uw",
  "key6": "5p9TsYdbQvvGNYHojZ2gTUMofSQ39U6ZFKWu3JwgRLiZG1uwc37B6H4qBXzyonZDGF8nkRyPZAxhWGHxDNZvW3Z2",
  "key7": "2A5GDWnMUksk43Nv9uHqRdbuxKWfSX27cPDXYFCBHrGxaB9k6MrTFPHuh1y9FdYCdHayavRm7oT6oChybsed4Nop",
  "key8": "moMYhAWKdhWXgDZ5kidp8bLfGqg973MDBQWXYRC4zVoithgdMNsu3d9dc5pb861Nh4ZhHmKj772zST3J6PCTdNd",
  "key9": "3WiMMBcjGkn1hsWiAuqv3rVrBQXYKQJQFFQ2UFcDJm6p1eUCv3prfea6nA8VZEkTyzh2YCDrvf2SfhdEYV7A9egi",
  "key10": "4fvMoHPeQzTai5MWcX39it9YH867D9urQvPTpqTqUwz1asL184NS1uVegMrCqrDNs8WLEH65eMt83d4f5cinXqDx",
  "key11": "44MXxSmATEbNFF8DuQbxjMCgdfazZo68wTkV1oo3azrLreg5z2tko4LZLeB1HdL5L92HBa4a6Vb3jNVQns9CjmiC",
  "key12": "292cF2x3Wsx119Zy3s2uEGFfyQEJJLwsE8hHYrUbuJoVqTge1KH2h7PSPNpq8Ze2ewT4SzcwfNwneJ6KWJoQFtLi",
  "key13": "2WxdwVUSAEoTJnLHzVbEkTFFqUNNVNUNR8AHFMLgCKPzx5oQKGZVhUdWjonXK6GCTkYSLeZunDpCve87trAjb9kE",
  "key14": "2sCX8Z22DEja8xwAmAMuH6NqibUfmAHjQQ2CnXP8qA3BcoJxFaLBwcpoH3PaY4p69NPxGApD5XLkJDZfyBu4VAxp",
  "key15": "3FFcH9DMRGcr6vzRTRvxA1td2Eh115cu86ELExkUGasPvEg4uP6h4CKCjRDopWvokqRpv9jx2JDqALPcAvsXvko",
  "key16": "5ZKGvDihNTbbSVLJS6np5dA26YXhtgVzKifxFC1iiugyJcvTSve28Ef6r5ysoQcVD9NnD5qBEW1UknaXG4V8MUUc",
  "key17": "2mdrAdgi2wvDW5j1Jkibh8RTz4rr6FEaqqBcVLrZiiDUmMsU4Jyc1RP8teBhtD9bTJAuW5bkYsBZFNTCWUdnsoWd",
  "key18": "4W7mTywVQRaoJhKPfu3oJagZkJNd1E8gtXHfShd7KBLJmkcnBceA38F3A8So345Qh2BkDyzBnopaySs2At828Hvn",
  "key19": "5cW6QEVjnM9ySuFo3DzQgMjPUzBUjg5fvpPvYZUT5Dvh6uvKCHf7qtyz6ZMmSQmUewT7Y4HHjdjEu5CGukMY4RML",
  "key20": "5Wy2qhRGoyhujLRRfHzYHFSNHoMjMkTqERAqDfkAXq6RsHUWZjkyDJPyLqyfmph6uqBdHv91ZRULqdo1EpAFMHac",
  "key21": "UQsMhFrGNbkzCCGXHFUSUSB62arFDACxTMeeH3VUr9iQSaKNMx78rtNkbYkAFN2xD9KUDWngaHbHKYEDf1BJSXm",
  "key22": "4fn2HvwwhzzyAr9Cc9RLtrK8DDrZbRg5VRgawdReWCNc8PVU24XWR96SGduPeZ3eGzSmrqRcpvzqMSvGLCi2V9fh",
  "key23": "5XWScAwmjpq6FChnMPStw1ushG7kvoX9QQr2G1JtndgmnK2mXVDbfFhRPfkHjCgjYJHT69efWJGhBocpKobmfaLt",
  "key24": "5km5zYePUGkyzdA9kpr9ffGhshaGWxg29XBKuh9YWwjLVmQmgLYNg2TXDSXKpXEzanYidEgfecu5DQojEmesKPVf",
  "key25": "59DZ4wHitLwfDN68QEr9y947HyHJuoowRQVQ6FAMbwGmj3aWgaKToY1t7QkM9zVtD43EF4fSZoz7RbECVFsnGrAT",
  "key26": "4vqDtHcfEx9hqmosHLRQ7GLvZa77YwEse7386QTULc8FBRFMcVWSZnvQ7XjyAygYovDGyu1HEkuNwouayrkywzij",
  "key27": "kqZSN63h7oQshKpqD4bGnkUSJ7Wa4a7jDNHvSJfCM8fzzdftq8Vr5qkcwvwnAEQy8M5yEqfjukv4mfFcCgcPWQU",
  "key28": "fZewLraPghtN9NBzC9K7139AZkMCmaqZnvDUfepkio4t9pqm9QXWcpuR2PX9a6Fzy2yPqLarh1mR1MKQRMqcAHC",
  "key29": "4xdyzuXtUhdctbUUqe1BBcg1cRMHDkx28d3Vsap9PUGehrXkPYSdBEPvmGMYGL2jpwJtz1YcN41XfjqX3WmHRLAX",
  "key30": "5ArQ91bdBtnLx7kzxkEjGfCuuUvCKkHjsKpYqwP5yVgu2NZbn3UC1vP5ADEPEzLbNRL7w34bdBo65YKZEULs6WQu",
  "key31": "3RC9fFDzyVexWSN5dQWRha9B14NZFWucuYkpW3LYgKq8acg3PxhTx2S5Zpy9W1XuRBrGsuVsbjABhERQWDxy9k5D",
  "key32": "2uqNqDRpfsDAVGS8AHwkw35vo1ir4D1V7H4DHRakShxd2YZd1ckdWfUJo9T6ZaBxKKbpkwnu51VWWTStPFrJFmzC",
  "key33": "425d4UybJnn56Vjb3Zx5QEJERdgbtJua5r8jg84XHRTc2TaGqTgwxkskH4i7yPbwSJDi3JrjW4JLEPwgjPva64KC",
  "key34": "2XFmCeMLRD1tQT8fLoW1SPwX5VTNkjFitR435WLvEYu4YuSvoM5Dt3cVrSpZX7uHSZ1hpEgTx5A9Y5GEFTwDBNcN",
  "key35": "uHd5mZaTAcrUgFGrYw9GzYE2MEVhB5XZuFegeeE2hA4h1tvbnEoJuCDAAPtPsS3uizZ68QC7TPL3ns9qk4RoZJk",
  "key36": "3VBpYQitYKx8aQFnezrhQSU4MxUcYxZqUR26Zf8vB7LkkEgHhHreJ3FN5YToK5EYn32Azfk6fnW4PtHjSoULcwm",
  "key37": "3WKHVKAjaF1cxDKvjmRyB6MV5rWdiXnzRa2PRJJBjLv7C3j4TUW5vvFEY98nxBCXK54WeK5KeuuqZ69efJihzNQX",
  "key38": "4HHZHuVXUgDiySMc5PQeVBXSA3zZDxKvfTNz9bkpjMrjZJpgcBF2T11nNru9ku5JhhVhbzP1dyQCsBMXftW61bpa",
  "key39": "3KNMyXDVfkoeJAdDhEJUpE3xBxhza5b96z7DaaaF5rAYDBFYNWBgYWPDGGbraD57H66XzpmPwbD5zXX8n7tLz5Jo",
  "key40": "3WcHAWEFmNQErcaoRyFXWYq5ge71qFgbTy5xbcmn7qNJc2xWr6fUGwFsEQV89dzhHC11ZMqfr1yxXdDuoJQySsj3",
  "key41": "4UxVfGvgCjyEcdBJHzWj7fhgtuhpFdF4Pg6a8PXVCWv4G6CPKQZ3DZ5wATGqdgE9eikhnkrZvw4XMxCWSG1rH1Gp",
  "key42": "58a8doCDUmv8L7TU7x2voQQfD1drT2JnpWT78gKKiK4KPqz27eifVTzFUuYqHTFETzW3nbSz6YGQXXNVJj15rWqg",
  "key43": "5c8azme9RRjFTFCogkyJaeJeURqaLM3o7KEBH5nuGFPwQrRjeSicWXAtUy1HqLziPcG1hnpBEZh3U4F23HJQcZcj",
  "key44": "3k5yja1WGoknYD979akVgEMauAmkkkSWev5rJEr6Dk9SwryE4z1gt6RE8zxf9Q6LWUtW9amoSAG4vgoBy13XdatA",
  "key45": "YTdcnUXpgB5aR1ytZr8Fw73vFPrhG57MgWujLbqwPAhehcpo34S7BhMp1RMuKWgdYnbr7fS6nfvajs4t2XE8jMR",
  "key46": "28SRQJQAbrVjN864VYNe7qw1EStyTLSTAEPE88nxByEJ5gFBv9Phpf6gxZaS8Tp14jFL5kSNbzv1Vzet36AC6H1a",
  "key47": "2esH6pvq7DkzrHHHKbZDPnd2MGUFtdyCnPDWx9vaPSLf9vEiBuGDcgQrjRMqE8NkkZmZj12zoqzHeXd4YMRoENX4",
  "key48": "3uwaLY9vJsPwbACT5QWorn2qjx6uuZ6419tewtNrazm31V9UZfJLePpjYP1N4jVhEB6XintE3vRLJmAKu2X7ajTC"
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
