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
    "61KmtB6wV6eCQtoaVwU7B1nTFnriEu6EaqS5Sr2USum6viFZyfMiG1sRAHy7KhhBXMABYJh5oDDJRQvU5ovbMzEs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LvrMgBVhcYFdtNUVXNV7RwDA34YpqMLE77Bexr1hBz371Aw9LAHQwjD8DdzvpyuHNuqAAZPZhJwkYvGASgv9zzF",
  "key1": "5nZ8aimDqXy4mkmvF9wUcoV1yUcnM6gPYVVNXENhWPqxc2RSrJjMB4wBYEYpEoDcFiyWsC1RiTZeBMCZgKuVYqiL",
  "key2": "4dt5vRhExqr52kAmy9LdBvXsu7vRWcVCg8Gr397QpSXeaeFo89xeB5MMFLZhSuGs3k1EuoWWTSDb5kCWP78KxKMu",
  "key3": "4mciy22CMwj8E6WQWPdxKUg3TzbjkBxGgb1sbueam2tyj1gPpkR29zguQLZtsmuQ26S3EM4X3KJZVjoQbicdMm7o",
  "key4": "2rr6pbnFDX9xgk9Lx7wrTyhWagzwdNkNmEGCqH3juPRQfQ5jiAvBpLBiXRUqNARzAnjHfbaiJgKgTuF7N4BAnvvv",
  "key5": "14YkaTGyogowyj5NLEpbUbpKSFkgfrJ2QqSD1yEqpPYU3MJi6xibnnVv2sRWtjt7VMDsLm2iQnzHA5zA7GH5WyM",
  "key6": "5LjogyEc1vau4L9DSbMnu91Mxc6MfKPoeG143sEHAx764DJUqvXJgA64GrHw4FceFo81S6uuzNK5ajLHX8peX1Zv",
  "key7": "53LC61uQXKE8ZFJi9nUULbCjEs3id4TnKjZMaVbg6tbQKucKtsSj8urf9J2j86gKrhScY26Q1ZXbgkVKqg6195jh",
  "key8": "2X7YoDWFQFnX4hQPr3Frpvbh6Jwig7v12AeHPQEmxPfcDjGvdVA2BpVKaz42BCaZt1SJMZHjsEFP3e3LJREczYTK",
  "key9": "gGwmqQWFtqTgZv8wb1hqVWEzbh3syy7qhBCmbNBtVS2Evawg9QgaxTz2UKfdBm5J2BfwQ9R7YWHyfb1nQ6t9Nez",
  "key10": "4Buu6Lp1qw2TKXnpirMTLAMFGn1vaf8brycmCTvtRCYYRRg7Ms2K45ANai5jACisZ4aKcmFNn6futwLi6shDHRYq",
  "key11": "4tVRDigmVCAhEmkPeX6Kywirf2aNSZnL6ppcyooL9qygv6HzkYwiPinkcJiNJP5oYACdvGGSV5fGMqfKnD4jidcM",
  "key12": "4SMhMqyrwHYRTrFoTNJ4AJhp1beUQKKzontmJLGGPB9CVS82qKUsGeowvucGQXUrXcXfsRgyvFEwXRho6vWeCb4X",
  "key13": "4qTRsS3WbPmYFEDavS7EBdNSMJW5E8hriHerGmNm8JPHPuBY7SMeAKEu1xi7dE9wS56i79tTyVE7xEVwCiTVpWD",
  "key14": "5NvakobwbdA5bn6nFTs7qq2PQdgAfexMUQYzbtb7Dg55cFeJYPs2QT8TzTqSdYAH4aWWtsdxxG3neiGLtYccqjhG",
  "key15": "395UPfL8gxyw3EkkFkWURkMKwfQdyoL73eDjExX11Z5CVeNWHeDRmXcGJmrkTKqkPGXWpoMmVuf6K8q4R4bbpSqE",
  "key16": "2cUMxjZsw9cY5LrVURS96Q6wiocENHFUX3FHpxDuRtTCevVRbAPSqRU7HMUSBinZzA5r91hKounCRxMojgBzdqfx",
  "key17": "2rTvMhxBviAJTLfXyQKHzfT8NUZdjnmZYKXTNyB2EtoBTnpXRmzec5V6h2ZD4A14aRcZxTxJhrKjJX5De2cgfCyB",
  "key18": "2cXokqPdbxitNxWJSmN37CZbjQj7RQ69Y7Pz33mtRzt51quhb8pVyX6tn8sD14EnfesHeLg25omWpn7sn4JTfDMV",
  "key19": "hEt51gXZipdUFRGw5egZCXWgwF4fBRV8uuVPx8QuB5b3NJbzE6xkX3EeEZK19wWNfRe6vZdUAcYi9u78riuDk7p",
  "key20": "5EN3gxHiPsFxEEJP9rxCZEJ5xb2eXsStVM8WSQg55kSNysDW1wySMQUi8LsSVtV3sz8vEVXxSp2LXHD7bvZCUY2U",
  "key21": "2zbQaDvMLMhguwQTwUVhVheVEgvxLCXPnTyyuVUjs71doWENAgmjXsbNpkVhT6jxruuP97aWRMtgBficSktRrCGK",
  "key22": "2H5Dcf1Uv5nLmQ5DRWLgo9XtZvr6WbYLDD6KHR1pp7YYyiVjE3r7b2H5CceBx4D8EgQnCsevVQK7UtqqGfBXXH22",
  "key23": "ns64G1oe9PEJPrr6H18nKc8UXEQr2PYUA6WSodxxqw6ya5MeEw1abxvQbJB3BdNTdtNYBewUghuBoJFqnpEDFEk",
  "key24": "3g721Gi9p8MyDZUnfGEctS7YUiMiJbsRPZo44ikf92h2FktciUZEwn2mGR6b17mfZjaftWD94DRXEfHpnpLyLXAw",
  "key25": "4XojhecXKPgggRsMnVrxCm1vMUxP8o7oQmmbTKVsuQ9z2uWSRZPd8JAoLV4tpnkg2JuvRNApkptoSGUMCrEFHis2",
  "key26": "5sZLpQRXSXsJrNamaeBjKSbeLtycV3WpHbdTt5Z5e23MWzpUsGLGD4cHrjEzbeD72W27wzJygHceZRL2ohDHUyJP",
  "key27": "5rWkYa7G7QxdwbRJWYEeCWH7eWzJ7ftRf5UKbHv1Yu8hPr3bXK7phHXAHssBjanwrEom7aRNYupfJZNF7w1rUuR6",
  "key28": "4knp652o1LegFqyAh9LdP6kNBDJU3UsVn61ihB3TyA9j3EDUaviF96J6M8HsU7ZDsGdrzxMALJrqUid7pBocZJRi",
  "key29": "5vg8fK4NAKcm8mxqGsFmNyVwyUHzNSYmyDuXSB9mbCwM7eAELAzfzaS8cGqcBVhUQwbf9Tm8Q56pzsqkVQMEJJh4",
  "key30": "63UYUGNCHrwTsuMmboALzqHBFWyFJ7RMrKCdxqphiUNYBEyUh8FS6Xa3RVKXY8cp1da4YmmQZVMNqi5HYxxtLQMW",
  "key31": "33oyzyirC6SDssZXCN4XvTFSgWYg8sDTTu2ZJQqyBNKn4YQspDSyH8EgffQPFxi48dkZnDbg8dgdxjpdTWn8pMSL",
  "key32": "rdqwf6USWCGu5zL4H6oyAvrvkRW4U1b4UayNYYt5ef84uMMjfCtGXg5UvyiKedxDGExTRxBGK1uKCbzW2eSpFtx",
  "key33": "3FfKij3nAixUhmJUcDJw4PkuyoWAuU7pnWL7orq6NxMRbMChxrMAuKfZH5vnXdp3fdWkehW5sWzK7NZB9cZRXGR6",
  "key34": "1GbCfvtRVUPbjDGAWL5cJL7hXfrycrpPx6mzowtiCp7AxeXGTpq5j5s4ky16D1M7mkJQNGSxe8rE6NmMR9eAFyT",
  "key35": "3uswSwadg9K3ERcvH7NSAJcMSQ2CmRt8kGSJuPuKL8oBURKZUCsMEXuHx5yipqKu4y1EV7vRQmKa3kLYd6PUCsvM",
  "key36": "5D7XfeJdk8UzLYi2dtA33iW7fvSQy7H7VyuVt5GFU6SNwipzqiqFvZ5fAEAQF1sa8ReA45An7VM2oMoGHsWXKCTq",
  "key37": "3tsDiZBZ3gFFb5dByCrvp5Q8uxSKmMBpDK9Tjc9UNimWmz6kEUK9zAaHZeXgvVDTpL1iLSsbRR1b6uBLX6T4Be5R",
  "key38": "2vFhHTtkXE33yZy2YEq2a74CEhvrMUyGB1suibvm2VHTdcXgSavZuAt8eLxy5WWdR1TjLvi3mknJGDVsuegA8o9D",
  "key39": "3LcaGmpooZC5C1QhavgSwyHhGdSnn3gbitQBzvhzFWHsprHfZTFy6EyX9LUroEQz2xyE9xJ9tPhKnjD4jZQ7TU7v",
  "key40": "zDSgs963trW7Xxb77XcEkq7DxD4M2wqQUMHfdkj1NEaeMRmswMHwUjHWSF521sbjoCkmckPLPVGSPsGyqVuGmv4",
  "key41": "3m6hVNoE4GyBAoS6JFm5b7W5a5bZurbwTEesrdkamK9pWosYDfWRqu4oCH7QJJUPrEXUWcx52B6BVo3iaECVz3XZ",
  "key42": "3Fj2WcqjTG7CV67jwNSjefrZ8GvSZNEXkVGpTD6Kpht2gckwWe6Ptr2onJr2VF2Gr3BRksVPZif49WEy1HVVSgh4",
  "key43": "53cudc8wTH2hHzZEfwh2HSZ24X7hoAGXS2Ri2pKRrFCffVAo3R5mx3PnBEUCk5inRPG6FpKcRWemUHzzypwxsm4n",
  "key44": "2q7njJ5WFGLr1tSdQeQcLGyvoLUCTvxLMoNwRtsM16bmBbqRe694gee3FcvZoJ5jHkjEpteBYi69ATtj6cnMPPoB",
  "key45": "5eKuapCpSznAbrzWJpCfUKemYihWwykS3KBcmhjpJhiTx982ApaLQE8zjLVoKeiAjMzvo23mf1n4CVZh1uNZs7ck",
  "key46": "W4efUTbuUpW7azSmA28PbWLPjtiPmRPGPaXHDLxx3rbtCTMBE8YcfAZXVdH7Ux1T34UumEUhWenCRpnX1tJXgXt",
  "key47": "4gRYniRskBMcEg6Y7GnPUFLRTqtnNKDTubbXrGRWFf4XB7tkBB6Ffm98L1Kg5xKE3ZuxYJeSRS5bjuMtTuKum3uN",
  "key48": "5dvnxT58LDxp7YSMKFvAkp9EWVDnD35AixDkcz8QnFcBfwhbxTHQetA2XpYPokKBchFsqdygvpDZXDK6kXLrzeGm",
  "key49": "4TwDdN5pYboyUT8EWxk7e6wUkxXEpns9LtUui9mzXtRmHv6E8P6o1gUfTBWuyYvbCma1YVAKt2VM73TKTdVYcm9s"
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
