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
    "4p1QFiDCxcnS6V9A4m8FfiYYcU6wF5FdYmnSVBtrkaLVjRfRD32S6HFK89K2RGnazsurMTeAFbXTuXqHHRDMSV5D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qedhwY8d4LYbNTVXBNQX1iGSv4waKHB9RyfpjREFdXyGZhWTsGee2nuZVsWmv9J7fHdDnm9GRbxa2ZbmJzjsLR7",
  "key1": "5s8GkEqfCDnjwe5q3xyGJEUkpeoQ6jCrVSSjjQPXtjU8p2HQTDicmb1HFD9Pf59R3q1RVUY9H2vbqEpSJtQERh7V",
  "key2": "4hhQDvSC8XMZ6LnpNkf98FjkkhVsPxYtkC7w87b3imhemczSoVZa83jLB44b5918cwWjBCyUNB4Y9bEMF2QrcSBD",
  "key3": "36T7d3ScgQzZmxz1N9kFNf5nssBUzjWL3o3UhHupsEmGQLZDf79NQGLUDv7DCUVcK4zgqoJprvmexJ1C1xgSXF1c",
  "key4": "jFn4RXCm7uGjGzpABj4zmGEjm9L3fo8jVhUYujJQz7Eedg7RXRp9NoNiUNZuoyFwYSaBeBCWEGDi2wPuCCqP9Ha",
  "key5": "3iR9ethofhTi9FmKEtgKEEu33o6M1GiAzcJd4y3iLFoGLDEwZR3wyVyekEEYuK5QYrHQfrQk7KtWdWiovLJdv8Pp",
  "key6": "3QYF3HvhvrVfGSq8pqb38hcYYBYkqkGABQscUg19EAK1SGsQXp339vk7vFrJ9fWJ2eZCMfZf3hoybw1keuT8uDZv",
  "key7": "335oViXzgj7QMxWSaRDMzaqsyTLQqc217gvT9k7V87aeeV3BAbWjYqA4jiR5okLtk99jE3cofnycx3ohqd7GGgmG",
  "key8": "LDp8WyKUhQzb37k9WvnWNSXjL5t2JGvi3TrRZdDKc26JdKLqwEyg81i8i3bVdg9EgxccS9i5tb55NBmA8o77Q7f",
  "key9": "45groJtWY3LRqhwhuy5BuDxjJ7Y4RXYpA9HYfzkGDd9sTAkYLSCgTUrFJRoGgg4AABA2SWm1cNJaip9RaikrADg5",
  "key10": "SemBxS4nSAam78Lhjyo3WKYbaWB6ZhfRHyjoRdMNUbnT2f7Ji23MNQUccgBaK4B3WKBYXvnjRDFWMdBr9uHUQx7",
  "key11": "ofwd9h9i5nqMeQm9kBZsK1CTjo43dABjMt6XRVpmKH9EWFG8k9FcFYNJPAYYMSFgAGxegA73TBhjk6uEZBvCJrv",
  "key12": "289A28DWAWwqv5j5nKkQjbsgUR9QYx6PLD7vTrE3E8e5dnjbkio3sFhaU9x2mked9XsvxTJKBcgi3A5Z2aGT3bjx",
  "key13": "34B4tfdUBjvhbXJvxFJ8MB3zkT8oUbHQhBb3AcUCbgCpvqsL7RvG8aC97ezqCSRDqNWUMQhX6zSQnpeKWGjd5AZa",
  "key14": "cGWP4zg2P8QWVSXCzNuAAELyB76AoxVib3Uwis85pK9w5XejMgLsGWKy6rTmiNrQPwmXHM2G4bz4iExjreyB1Ab",
  "key15": "4VpwEJrpXVgcZesT7ZZymuLtbBR8HsAuGyndmqT4QEQygoYTyRWUfyCWXGVCZU7YBSVyXKEsSDTr6bQD3aTvB3zy",
  "key16": "4XftBd2xSuPoEstfBLHsAwVpdRJb4J5v6KbtAvNvCMXUtSQ9ZPzqkUvvhXPMSn8Tuy5h6RVL2Hb5t67v6WR4HJ5G",
  "key17": "4nVPTDgEN3fDA1KeFYWtA7b1AWtxsj3QecAXPYw7XKTCmppBpivVG97vyxoxMgeHm59dc8Dia5b3oHgAWbbKGdks",
  "key18": "PrVGRBNFkPFxSXWVkUCEYUhNfs7Nvo3jUdBm6sMydMbpXXby4u8PQQsrDEbDCsVFm6QQkgHjHNYvgzcUqgiA35T",
  "key19": "4tFc83QGSekKneeqkB5hBiKdzj2UGA7g81aESCyhkQ2rTpXMfsknYbNufoUeTRGGdqnVwK8cPUk78dGdrm2eSfUm",
  "key20": "BKCVLs16XjhzXg3yYq5rUqncbvGMxRBXZjy8Y1BtpZb7Nq6fcUHfQJP73mb8nmJvqNqJRRdutz3QRxwT6FRRyDE",
  "key21": "2Ns9ZCJnExx6s946sxd16B7gdV1hKLvjXrskk7vkcAvrtVPfZRX2LQ3SNk5i1hKzeS7dipT98jXHDh46WXj2h73g",
  "key22": "43e2Q9o83bhmpBgqdb7NDWFni5pXx2F6mSx6QaoVG4Hm6DHTBGk6PxddKywuuXpsRCEJhMm475J5K7LzfbsPjx8o",
  "key23": "3R8NBbymCjcNL5fygQBKjvqJuuTwPArQ2c2qAa9CWMKbv4Y2czSVSgun9ezgw3yvBZ2VEJcQo9Pf2dKY5rwCMy79",
  "key24": "5m5MeaBbzUso5fG6gXHDg8b2K8apzkoySCwNnKb482vduj9JBYuo7EwUYMDGNkuLSURVZw18XmnueaCWPNideDzw",
  "key25": "42sLow7uDNqFjByu3augFbvZYTNJXkNxaX1uywdgcZg5uRXFQjWaJGJGNKKvqG8iV5x95NMBTaKwHLihNBAsr8Na",
  "key26": "5ubNMbmwHcnv2Qt9AUZLNkH6oVPA4N89PMLStcbAJvzQBgjo6g7iGZbpe6jAthLsSVqZuPs9pKeLNnf6sBfkmKfU",
  "key27": "639sJzE1tAr9nE8QCFXjGgPo34tjnxG99DMuArvkcX9yLtTogSt73vMSfsVqoT1RwdMHBvi9rvfEN73BiyWEzWQ2",
  "key28": "27bgBigjEiD4w464g5xp1Q2p2MGiZXainT11qnmqSWHuM2RN2tpqTUCvgwSC1WVVugBBbKUmQLqaME6FUdN1u6xi",
  "key29": "4y5xQaLuY31nuqo9E7dGXMLf92ZY7oJc2MNvboRCsQkk1Myf2nPnjHuETgWMDXBbxqZBziqb1g7hxK8vsiifS9Hp",
  "key30": "2Cv2ZL98dqsCHSfYavDghEbMNzDZHFstSSdf6HGPu1Ro1ng7Bxx1oPcRCw6UnwTvnS1x8vcFLKepZnwSPJ4KRRBW",
  "key31": "5YSEfocVkZTR6ERztXN84Dr4SUy4U5qL3Fc3qK3AsV7fzc8Wbr8UUhRtRcUy8nPEZNRoWR5bAzirvN1GoGiKrDFy",
  "key32": "tBoHNA6gEfvSCfzFwA8CuRMKoDp4h7dmizRDDLUzywHjXz9yypT7jz5ZGUcMw4w8dxcanjUQFreM8bpeCWeutLj",
  "key33": "56y3rZjRckMBTQvNkmaKhNGLnixDMAnKUKp6JqEog23HcmipBCAxXx1RkZC8MzhAHSAEpX8wGheXTz4CsVsgocgP",
  "key34": "218bvhAnjX9SGHtwrTv84Xh6ibDzBHEJB7F5ScSuTkzWNYznKpffQojVTeYMYcL4bqQ99y6WooKWVMhb1fR9AWBq",
  "key35": "64Y1hjdxviHzrho9PjFDUkWbZr6wEVBgQihvvf73muLYz3gVUYN2x1y11KqR8oVuDqmXj29ngxmnp7xQQA4GsBUF",
  "key36": "5Q4TtcFzp78azZ4hoZKci8TPYCV4WTdRTaNLKJ6LqoFVEybGJeQtkUFrWv1u4Ad6JofLz4mC6xqP758HoCaeJ9K2",
  "key37": "mCrvFasm4S5XV8sVUJGhDTMtaXGrcvinxDuds1t8zZufVTroEkiMJCkk1go1qZuXCRJTaQhNW4viF76k9io4phr",
  "key38": "zKsgKP8z65i2PwEQghhkFBdDpbUKLoNHQSYc3trc7WCBrhZagVV5R16KozvURMjBKoLgm1fjopErDHJVnQSG5yt",
  "key39": "VCHaXqbJnbsZvNFJh5az6okGQsvQZ4pwykfDFa63MAKYg94ZTX93viC4qNrVzx2FmfLwWUyt7hcs11dNvMAwdVt",
  "key40": "3BiSyDzpM1Hu6TMRhfdiki4Xiap2bTGPPswXYDzgnJWuuu4zhyatS39dhi4asoHeCqnknNExhwMxgzTqPXQAU5TM"
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
