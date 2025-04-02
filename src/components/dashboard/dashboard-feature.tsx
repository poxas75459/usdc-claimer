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
    "36unCaEaJpz4T56AkuWkLj6XWyHW4w5U5toJ917nZWRMZ7fBQstzN4wWiHBCJf3Nc5xti4K7b2UoTfZ88wm3SL98"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zar52BKMNTWVabYkJ3MpN9YTuFMiNJGvUvjpv9iiRRGiBHVeeSZsLb2LfBHTpo6Xi8u1bsVPPNC4DuBJgnUBX2Q",
  "key1": "6MoU2MWLxMsPBKrKChk1E4g2nHoTQo3Vwdoa1qkqKKxZCp95FuL5ojE7J3x7DwWoZwPj5qbYoNqDifaJpx7Zgi5",
  "key2": "2XFrKECQ86ip3hRXU2zwZUm49dZAoMFJYgvZriwKT2uiNnAviap8B15VYvHWP6p1gj8Kn8bUM2n8DHihJJVgQKmn",
  "key3": "3DL7ExNagdwP9BuBQZgLb62S16yzzkT8m1P92ei6raxZiUbN4bbQryJy9i3Gxkj8vmKCpDgrfMqJ1yERcyAyqepp",
  "key4": "5Lga7Pr5sY3jccPWhntLZkr4PRD2HKsDG3z2WZey6Pgc6Nu8JHQ9V6fJ34brJVTce88Xw6vHH5678BTzT4siKpme",
  "key5": "4CXG1GkKFujUK6R4h2jxeqSaT6MwLSzbe6WndYHMKS3D3Hw5t9TcryjVFBFhAcvWv9zzd6ySsYaJJc8L3sYB8kRz",
  "key6": "5sm3iLpNQPk3VvrQJdqvuqGG1kBFh2tiKFL7fNfKmZPSvjir1xyj9r8tAYXZWzQ35GCUGmDQFMTGeYH6x4r6QKbc",
  "key7": "3FUmCv9JLwiBuVe8QF52tjwyMWfNH9pUWTJt7G3KFA8QjYe3af8Vyw4g1iPRJCqr24sn3EskegFZvt2iMZTPXPvU",
  "key8": "eTgEWcntRaNBLJVh3VYMwtFWYkbLLkqGoQy31YmqnW3M87QDqdV5sKLggx3epMcqYyb5ZV6tCPzmLYcLP64b5AT",
  "key9": "VKs8imDzWkr9r91MahyyDHjiFU7W5zKNYNbPc8n7K53RF1jyCRXm5C86EhA7pfT13AVPaEJTWM9ff8rj8iT5rVR",
  "key10": "4Fxzo6ZKn6b9oEcC9evnRFN9Pxc4984z2ySzVhiETE2cUqYPy8bLmWeN5Lt3xjt8mQC2b2s8QwvBc1qPfwi4E9kT",
  "key11": "2mhsdz7wsZi3odoab9hGHPUuVjz9o1g632dwUt18siGdEU7B9Ym8WvQQWXjboGWvSx6KXbgix1tyBcsPhFJcC26f",
  "key12": "2wqBayhg1BmvSbpkXWbRaYX2nGEpjR4MB5sssENKuXSrZuTeu4BYqiAs2JPHSt8U4oNfNjoAYWvJuEnWhmMzhzyT",
  "key13": "3Nd4CVUQ16zuy9LuUMQrZj4J5t6bYL3mg6d26pzmqWdHirEkFULiBBjFJbAdmGGE6sTQBTc7FsYMA5nwfXjM6kf1",
  "key14": "5NfRLfMCdU8oF7s4TuFGLhD9jKVcpNqxxwfLnnUk12Knnb3Xgt6qPGbNFRUy67BmZ3tCAzjduHbrWzJ5uhpbiSFZ",
  "key15": "5zsNvVcQEWfJgPBp4R7LotwmSGkFJj3TCpBhz6HmBNBT7WGACEcz2WUZCTWLPvKT5dD3sbJUNjdnMmyVYXuTRWve",
  "key16": "2hfLGzd2Ujqdt829VMwzhp8nkTYSk8FndqtW2h1nXj14daCttDVghpwWSdf5nh7ai2d1TBin8m4ZY6AYaTzqdYd7",
  "key17": "5W1hBH8jz1u1vPYfdMbqYeSXFTAzPQVM6zARdxrWyQ1Kx6PDPAa3UEE6TV8md6d2FyBvnM6ZDwcP1yLVGxBqL55w",
  "key18": "52wPMvt4fWNAMUYkStVMvmeS593uM1XgtQu43nPdxaGmEescLyF2bPpPTe5QtJadA9P43oibrrMcob4CeWnhrY7k",
  "key19": "ThDu1K3vuMB6p9m7PgHJQnxhEvsAcY1h3Cwgp6yGgjjU5KeaybJ9azQxPG9NT28BgT6UW9KLgvi3pscnTaM1JBn",
  "key20": "2rBD5ZxoDEjdYDCZeMf4DV8N5md2pANyNJUudDipYFTght4tS5ErCNTc4jKFbiuWSpZTBUqXmqZASYdt8Fsh7WPm",
  "key21": "2d96b9hj76KFq2d14bMqH9JkftcafdktLqGAtSpzePYT538o6eq1N6Q7XJcQ7RhcTkj5gCNY3BL7JucrsYjXKqRe",
  "key22": "5qSDsEVA9tBek9eCHhS3fnH853AgT1iSEn4DUKhePWGJB4c514wYrnm33YHRGespSJq69ekkLAMXzjZgrTKXKcrC",
  "key23": "55zkZcaN1SWYgPdZ7qqgUdfCsRJ3Q2EGGhHvKkK3w37QrS4rSmUHa8GKrmjRYP1VPQXJHuUQSXgep47SfJLyXxKN",
  "key24": "S1dYowWDvuZQqt53grSJw4dA7YGJxNgeXNJUkL2uRoCrxBHdYtzxHDFirutRiR4aciZ4sWCESqYtHSz5ZCDmDEM",
  "key25": "RjC6MUHeYtLdJY3TKbmvDrkxrjcJC77nS1pxK3hsEokdisM3PJ5JySUjebyoB8CDRZGztMNy9Ug6W8ssqs9aAqC",
  "key26": "26L46tptS1EkAo5Z7joZQBGuzDxV9cB5a1QXuYm8Rm8iW7v7fnH5PYC3uE7mmP7aroFhvGyHvbugQyKtrLWmezhB",
  "key27": "2qs6BXQrEHQzhVtWMYyvRi2uUCZ5tXQj6Ph5MjdnsERp74MaoEA1KqdvepDzvMiDAHWdXYFKtSk6C9dQcRFNWBhF",
  "key28": "322p99W3VaVeQeJYqiDy9H919anMXZTn2u2tCkkHaA66f2aSMbX56ER68tnNWyj1Vt1wrqX3tQMSnfpHtLC5GZmG",
  "key29": "54iqaKQjnBNJHYRqRgFJJ3aQU2tU5cHkscubhUr4Gi51oGDzra1rzbDJzX9CdnTq2f4aT5aWfdbBKQuDxppLsfk7",
  "key30": "5siGSYb8UB1an6MZ5vUZfYSJHW6TXssi2c5NnhWUcknTQSyeHvv8pZvhhDywpkgDEDqyNaSDatYQ9qSch429LLae",
  "key31": "3WhUg75D8w7hjHco6wwtQFEfwCm7PMndPvBG8fNiPhZvz3gBVgmQkCHjiZa9xKnHE4Pjd99EPK2L7rRA7HXwDcNS",
  "key32": "3zkUkacR4qrWafWWHmDYjhTgg1qPKcyVYpdAen17gvbJhf2m8kPrGCxWpHn72tPj2nFfAR779rbhPHj8GvVDbvKQ",
  "key33": "4DCZwc3bmtdU3CSBu637zUMBnXgx3EygS461KSXx3to96GeQN5me96UJSxQ3JWG9iqjJ1MQ2iikbjpYZPvBDH53Z",
  "key34": "3qV3P69Wq3ENWvSQHjPcUooLWS75PMveroBhF75TsfT6p25H6RHyh7WwZLet8ydgoZER6JkLpXvFdp5LCyzTWUkm",
  "key35": "4pM97tophmbTQv4ApGKYii7UKYE9hAqKLMiCXAsAZkFafTA5GCda9f9Jm4L9RLwH5TuYY5aFHTcikAsFfxgwKPd2",
  "key36": "Ku6tp39eNBGrdui2YwQYCPG4K5cJBewVfEuiYTyDVWSsnBUUx5V9TVXyZ4ySoPi94hzz14zZn2UXpuoJixdS5JV",
  "key37": "4DU8HSmUZbaGndfaNFin6Po9uU7HnekuBu1qBKWamqPC9PguQFXw5YiGEqY23rQKsRaTARaKdQ5MiB6zWgjUsZ5k",
  "key38": "5SJYZA83zBanyzRkPLhDjjk31wczRQDNpL6W25P32tgxRmUWRG8edPehvSmQd18fyh6dpSoc87n34do5jqhHnJa1",
  "key39": "3QcP4DmWRFvpTG9NogrNJqUb2TLmkgLuqmMTVtekfJaZzK1aqZqh5p8QVGBuAGCtejdiNQPMu36btcUo3cjUhTso",
  "key40": "5swCcLhFZkBBz8hXhm3kLwc3XGeAaGoKWAFqR8jQ35qzuiC3EuK9gcxqUTYwKLENfRaqeJTW737jnuhDi2LnJCB2"
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
