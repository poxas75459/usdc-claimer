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
    "q8inFhJ7ZTmC8rY1Rhkbb4CRJwbNFXtHuL9ogsA8gj5uAWQW1rPzuh1UqCB5C73FyUZKBLMvJz9bz65e4DUmjJY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TjJKaVDViDie8E8DsBA6B7ybFqyD1E54cytp2hwSTdPfQNNqS8n7gCCymAra1JoZRSh8uzLkzXdev5NmenFh9bA",
  "key1": "43xLXHAx1fYrVrpt8S79GYUxGDNjt25PcbXq2dokmBUduWyUDCrtTc7Pivti318S2naxQ4UbDEDicYKoWCzGyeM5",
  "key2": "5NGzQSiLkbp2dc2jwL9ohMiRTL8h4HTXaoa62Pp3XvpQ83BMtaQuHbdZX92RvuXXPv7W2hBQu2AiAsMBHQfxWwwu",
  "key3": "298hfzsVs3aEAQTtDUHfqu3mGaYEVHV19zZxUzA7ihqJ6ynkvCipsqJK3RHMBCgxT5DGPbCr7gE6qX1n9TecYpvm",
  "key4": "4HW8PoFYeP3WkdSUCCKtjXK9TAhKoMctonKJkEJtmDfTJb2puKZKQUqD4uFzKRC7Qs2hmeZwBiUXPziR45aHSbgE",
  "key5": "4opVUpebCrUJPq3Yignc4JxZnnyHJdkCQMcegrxzn7tMXxiY8FmGt4ibpBfmRhVqTLKDLCVRFFngqJtMVPbBRSd4",
  "key6": "pPWvzW34MxBSUFbiWsU4QATfUKrNzcvdqyYcF2hNKN8CPSuEpRNmvWebBThpcHYyy4XvsS3LpRABdhyfMwoLbsC",
  "key7": "4mSriCvCvhR7jyj5r4o3d3C9Tsk1BpfuvAK9HTLfaBL5kR4LRgRcJm2erGTqCwsZt3qtGf3Jux6YCRVrXmNsLvHS",
  "key8": "4QnR14kv85T4DF94z8LXYftc7BCLiTxTDfHdM4uu5wajGuZHwTh4q79PaS5PPdtxz2Ehsxy5qF9te4RTS9kQ6gak",
  "key9": "4xhgXSBeHu2jJcDZEBcsu6WM63YdVA9yCsHuPs6jLCHSQgXAiBgZAE2p1PCWNsME74H3LHRRB14yas2aPMDtEpxj",
  "key10": "2anFqqZsBbpMWuM6pxMFS5im5PhxEBrzSo9xhsmKpgzPHrDx14LoThXZbQgLVd6PfxManwWmTjNSGVtwbEhdKaLV",
  "key11": "5SDyaD9a4Un6rK3u7xxbDn9KKjAnnvAgxQoN37wTrw5AUnCaDK2tgKfx8uYG7ku8j4r9JudXig8B6CtVeFbYs1HG",
  "key12": "3MCJXARwPifYUeDS3EVRBGTjKKQn7u2Bf7jEbAPzg7HwvVsJA1yA86fncNuUyHWCRUyQ18ACFmR3KMqZrKiXpLbn",
  "key13": "314TP6S8JFrrNc2St1dPmFNn3DeoTJaXpwCkdsHWzCVjMv2DuN5yhuvphJ2UDCuxwe4FDEPEhNP98fGu1o2ZyVKM",
  "key14": "2umq8jdv88ph5GJ3rgxNeYBEc8SDCk4Fk1v6onPYPh9xzLbnF71PkMZNLhvFyvqaeVwe8P6KjcD6ZsW5NdN5G6xu",
  "key15": "3H7kjUc9AGuwZyJjpwQExoT48npx1KNWa3SQPdg9E2jaxRAeTFFjaJCXSSGpPprRukykuKR6SPHcvAVH7wEbECKS",
  "key16": "5sj5tbAqzNsc9RUVVyXME8AdmgjHBHMEbpkLvxduiQuaCzM2CuUJn3pSU6ocjHBUEawFwUgRaNhJB8sJarrmWESD",
  "key17": "4ed65sEHPZv6tdaogUdQAiqXUzqyEQHwFj2Krua1JVALeRiZP82zAP7QmFQUwF2E4WAg5U2LpWquUtTezsxWPCbm",
  "key18": "bj2PurMUg9MqjpzLURDLySjyuCN32bp1qdkCQh8fvENSyWHWZayxWA1KyZsyiYjdVo5RoYbBH16burjECyL9K9k",
  "key19": "AQVed6dejXCyAyxrwrLqWHPYEB66KfPm9tt2FQfmEvEa5PZaNMat9VToivSm6gkRBM3ZFAk2oaBYoUfv9P678Md",
  "key20": "28y8rZH4AdNokW2JGXFJDckwuRN72tjWTPxUFXiQxQNoGd1xedfXAadQFHjZE6pJZ6rVfvEsGvrJXUQz6Z2ovfLv",
  "key21": "3H5T1VsT5J7cggME6sjiMmWEawRgsBxciyUAbKM2h6PTBE1b2BJCoLi47Gxsabzf3Wuuss5zTJKimD5FpWi3Rmkc",
  "key22": "4XrAfSksK2xTBBM1BcVgzrVEUrGQkTw9x2KuVQxTFwXVinZkPMhh1zG56h9GCpiPg66FxpGztsJcm9XY4buCQjHx",
  "key23": "5g1xnNGUMBGLByy9xYFAZtr4zzGm7e8Eo8FKKpwzciYzwmgta56yHeSc9Txi8RzogmT7noE3ZisgcmTvTcqratPx",
  "key24": "25hQ8YGxPNiSHbtcDip2CpfpVBVKqAZk338C4zzyJSNHPCBrjMPrE2ttqiyUiKjNsyLXx46Uj31AdjdBDRRcU5bD",
  "key25": "4YfahDtfVv9rcEpHUKw1fCV3AZ93oMVDC5W2rF3SFiv7zUkhGV3XL3uRynWuaQC21oDrQEWk57uQzic9qKkvjSn8",
  "key26": "4bSf9N6BNn6thq76yMVQBmwf4NfDbxZTUcdCbbAwXadhRbWSG6opE5Nysaw2gSrfVFvYV8ojGwpJ5Gg21Upo3AUA",
  "key27": "2itaTyCFSC8vHVkZhpexJG2ibGGNSweMUeDWiwu6kBFCAaasEfMKczB5tXd7c19JJ54vSegymMn8GNjBDDkd6v2p",
  "key28": "3g5WLoKuL1AGXPkjNixcU2955EzeUtmNLu3qVxDSAwSHVKpawvm4RcK2Vq3BrMJkVCQVUmmqR2ZtzEeDLKThpW7L",
  "key29": "4b6xP9nP1ckuchYS4wG13wVYhLXiu7eAhEKqLziAVNEncbpSvNWTQstz4gJ7h2E6eZ4zjtQFHTnncKW7X5AR5rEY",
  "key30": "5qj7H1STaa4ncbkfdLjB9RfFDPk5BkfnRQsKkNXJkDuEwnXToRKnCQhwsGdBa6FVefKDdeLtzGX2GyDpPfdLBFXS",
  "key31": "4yf1M7X5gq3sRHigM51ybQSaWqvo3AchxCLx4MFJeRNKaxCL8CCjZG7m7agmvNtMNaG3LCbNw6PiXcTyXgWUMa3h",
  "key32": "3pVErchw5GnivkAAA8QSqQ3aF1wWmoysNT9KwVDcztXBAbySohVsva3QU5tz2yc3ecNpGVemKWJedbH1p5jUKGgF",
  "key33": "593CPpbnzDnpZBhywc49FXm5Cu8zqsRKYjzHq9YxjzX3Z7fJnHKXPsxS8PkBfi5y6UDmhQft6tPL7ErVf4UV4uDs",
  "key34": "4otJKLLxfs1i8w1m4sdGDxP5H6bLPPx165BSjyFFBhqpneFv9qxkw2o9itM2VNr4pDXCRonf1od4tty4Mhz4T2jD",
  "key35": "3pCHn9yUEd4yc3Q4a5ybPVU8iL3jzVXg7YobpyxuB9pC1HjqBv4J4B8PSvuZTvjACfQPLujPW1RX58FhFaihtFAu",
  "key36": "5pt2Ky7XgWYENdMjTtexUbDk4or2cj4okA4nnkG7XZPXQuALKxYXMuq3jfMe8iRj66RM8Ae8bezuEsjWaM7iYppy",
  "key37": "vUZrfQbPVuKBp9j6sNDUUPCNgf5ScT4jpXkXrLPGPy53GWu2sJMY2Htw6ped8u87APasKre5s66nbRgLoctQrEs",
  "key38": "4EfB9aF7MFafYfvJRycQTVhTPf44rBKd73hQEQWRVDF2SPzfwrnjLF9AqSvsTacpFddGMqd49iJDqeHb89ii1fyz",
  "key39": "62HgnbtYgjd81haAAyMwGgiUzSqBVYgr32CXFM4fynKygy4oKQaiqFitbAj4SgNs5F3Epx8KQBALbCfKYVczuYEz",
  "key40": "zVRopCTQy3oimgJwFwXAUMjRA3fuFquCLDvx8Yv8zA7DSijZ2bpJe8kY6yYfaQaeWSXFRzuZ2cLhQ4SPbacj61k",
  "key41": "65E6ybooLtVZyzxPcLXqJbZLSng2m128ssA8DQ6zJL6wtkhdfkndVitd94mh6MsYcQgjGFUsomJh2RJ7iKHiYAWj",
  "key42": "4h4YUqE66b8J2Y5MXrf8e5Pgb69uDAdpiYGcLdVH2TD2aDb5bihodKvCXxfoC5yCdsXTgMMZBBrKDtPAwh8BRjdu",
  "key43": "3KJgrnyFa5hWs7JRFnfYAVmiSMswwmUthxff2Nwv8rfWndsPBebj4vDKbrqJULH3kRU6gjJLKEYMUpEM9Km3mWBJ",
  "key44": "3iPtA3KVKTzPJbKC8Tvz3DmmLTkK6KCPhB11ppmME3fh4RLw8U2jeVnzfecNHsTnsCS6p2ac4AdnqavAsJ3juxf1",
  "key45": "4FaUx6GLi64d5VAptQTq3Awk2XmhcvWm9miyEjQa5dm9BP9y9jtXVshV5Vuxa1zmkDyKye2RuPJRo3AeBQkh1zGG",
  "key46": "2uGn5bRd5w2J4XG8ipU37wvLWDAzjf7NEpqxrub7bcCvU9W9WkHpS8zU2VmiyYdvLi2taGzNae9CKkUKZFY67xUQ",
  "key47": "ta91vCkLQUj6Mn9kfKzGLxTfi7dEXZxRCQ68EzCHKAWD4SVRBV5vaSRHTdwCWHTWgupuDf9Luc1pyWKWEZtNQC7"
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
