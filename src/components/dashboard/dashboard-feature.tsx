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
    "3vYDkExpvhEVaJStxXKrtV7o9UmEwT9nciCYzCPnGJv31CJaxRaYHmGvXMUx2hbZsXgb1ARmmwPjy9Kbw2DLjqYN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EVDgcHmgkRJ9AYZvcQmdQmEVUqSVinFhRKtEjSK1Fpbmm4Dhx7jnYkoMw6n24a8h5UiVNb3SzgujNdPhYphWhwE",
  "key1": "5ZyjPbcMz2xXhqWcu4JNZGZS8mmSoyUzn3V7bcaFBZErCgaCitYuPE5gwKrc1q6jkWUnm7TsP3WbE2RYjU8eRFwr",
  "key2": "4czuZrp2NzWbj22s1f7XVJMdDFz5BwSXWeeQ2xJqNhK5VdGsPd2H3GJYReokiXw1YVag1AVYTKxbEr7r2a47TPgD",
  "key3": "4M85HoV7T1osyu15ZebxTjVfvMnpmnvSnvNfQ1CY4ZuXnkspiuCQNsHMatM8rPgcUaLxjgKUZpFmRtLRdpBTN86j",
  "key4": "2KsAMrJR2FB7V5TvNHPz2FoXYEUBc5zsq4vSFBgHNjWCaBCKyhCf7AqyQMKuYBVtTSTHmStaEHhsambJhS9SDHwB",
  "key5": "2NGh1sVkeFohZqAah7Appizm3paVe7nFGe1CbnwULCETPrxmjHbsBguK3ziPJP7yL9KCFEyP4rR2xcYnjbjQ38ke",
  "key6": "dpg6MKLFZBixQMUr6UAjquyHX3TZCgMzSo9nYXWBtFSF46AipP25dFLxgsTtjF8tenesexyuByMWNZuf8ry5siP",
  "key7": "4GdXC2G3Bd7t9eY6ADhe75idFGGT66EcPpFJTXCBreYV1EK3DR8dUL8PZqGa5WHiyZnJVipTaVyu1G8UgLi9Vw8p",
  "key8": "wiNfxZxnUcY6kq522HtJAf9LQWii9egEjpFfhrPe4J88c1HVY7LC4xC8TWVjGBaWHqpat4WENKvmaZKSh16xLqW",
  "key9": "2sWq3L44ZtH1v4rda4HKBk9izBErWS4Gn91eEtBTDigeEQ8U7fbga1LsSmS5veUGrqmaFWpuEpGxvm8ByG6Jh2Us",
  "key10": "5eyoKivciZc6QiAJz9yzNudPyYSDLAYEuRxSWfY3cLryAEZNvyyezt5UvYywWKJUB1n1pBRt1wbBCW7EJpR6azZ1",
  "key11": "3s3f8BiZ85mW4qNBuedxKNdwnuzLhzu7Zb3etrpqX72KyDLcZVzmxbsCzkK1YVa6cjxcrdWcwfqAVisnrMDxSYjy",
  "key12": "28VXEExqgDXRGUUH2sfymkYFHDyU1Xyfw298cfazGLmejcaPVa2BFVXvDeu3voPKWrdj3vTrXYpnt4ZLNQj6vsvj",
  "key13": "24K8qT3uL8NAU7qMeHaKpEbuRWdu2AzUUQrVzBS5rFwKKUSuDnmA4cYhEzfUoch3VBvJZFkyx6iD3W5MP1CTGRmz",
  "key14": "4Qw6KSD8HC6ponrRthuAA6fPdjUnFVpra9BWTeHXzpTp5qQ82mVRWwErLBjf6VEKJnntLeem4pnBVsaZaZD8N4uY",
  "key15": "3cipEJwbGr2mfWGjn7Y3hH3BGQxkrqWqxzFc97K3sdCgQFKHA9Pvcr4iA16vq47bebMEiitPxoeXqvR5gubzBNq4",
  "key16": "5qP7ZwJRVKt68faGQ4XpxUVM25jeAiWYMjwmiRaCR6wmcYuNE3u1mhcG19Cr6TfpPDBovd7KkdFem5BgNmozhEex",
  "key17": "49ZQSsomY73aTw5xxSgQvK3EsLN1pyXadaAX79XAA4Ze2n1adR4uku8Ly5MuZ614K22WV58UokuRow22CAvcEpnM",
  "key18": "3av7ezPnLnMWXJ3LsgycNfymbzzvWZGjfo5P3jdAqGFvLmEyjhH1cLPbFFnjxFfgJy29v9Au4rMMcuwtQm1ZpTsp",
  "key19": "2drvwSeRtphY4dvNyKYpEScrNrJz2qURvGutKuVSwaidqXaFR4DtiMiHygKFi8rfaR2BWUn2b3bTcac9hY9Skzyv",
  "key20": "5242n6ZancnAnU5HDNwsfbh7nac7MHX2SiuJdrnpumE5dkM2kY6YHhWuwz2iurd48h5QvMLiCF2UZpJBUtA3JUy7",
  "key21": "2eYyijjUTroDoPME592ye4BStDhAGfmyHyN3PCmyNx7SuejB8uHa6oNLWxmFu4MNG9FzqLDjYez7hwJJMmA5jAui",
  "key22": "4v4bpUTF4W98c2vDCXjQ9GVi8dPCjkkPatJ5T8EQKka4s4Rs1k4PnVskaKnnsr2rnRvMhUU3poFEYGkxRm7cUr3n",
  "key23": "2PRFSsh2ML78wKwJbQUAt9r4ch2pxzLpfy1tD5xiLQ4iwpgfhWk5Fq5QKppLjkkmjTPikVjKJF6BvYyRSwmnLNGZ",
  "key24": "2k7CmmQu68iesxKXF5kFLRxgcAQboFrzeJBicZ1e8z1cppU6vR5EN9XXYmxpCwzKDZ42CQ5DuFo8PBx9EhVR4xQj",
  "key25": "TWMmYkK73qgC5BeZCsDbjL3XmucBvNRbSfNX6QevvCYMrJ6Y9Uq8zoRbTjgSwJRPz79J2Uzd9yicznfGfd2HqnB",
  "key26": "5bdnsBMbdNLnce7vNF82RtUU3iUiXKn7nS6nFn9hkiJUrYfTtet1LoRtexRy1QcNEduHbtugLiTEFbeWoRM8SnJp",
  "key27": "4dD7YYTav4o2WEQLULhYW4vB4jbVpUbUVSG4Azmb2qUZu5FaS4eDnQ5P2ffByUWC8dSmqae6aHuqzsesBfr7wEzn",
  "key28": "2b5E44CW3C9yRSfkYWahmXdfVxHGVW8CPrC4qRqg8SU663yvMf7vrdBZ2YWW2MD8T6EASegehaXWp8j5JE2zdWHx",
  "key29": "5g5TFiygLLGcJWUeBpeuboLGeR2XCy1pXfCJmKgGeFBXZqT7Ht1cwPtN1gWntzbko3vH2LDDe3Bd3wYp9My53Ptg",
  "key30": "vtZBNCfXjvdTzV9PQJAhf87EYdyfs3kn18mQvSBidYYnRn5XprHEZTaZfpXXvfkD73BN8DhLL7tEjVWkLrJDnCX",
  "key31": "5QZgtGKnds9w68SXWVkWuJRuxtfPJwkNUTavesh1wzXjLxwrtt9ksx9egG2ao68fadiZqyJz21NrikygS7aR1DRv",
  "key32": "4qediTKYpro7nqRgT9tHs5mS86xXeZYrxZW77jXqTd27ZEa8zJiRyKoN3Y4j3Sryj7EmzZMegpzUCkuQdGMQromr",
  "key33": "37K6kM5oydnS9Gfw4LtYXVDP4pNFy6iJ2WT24V9vM2XfwzESXiJxwpjn8AnvrguWkQc9pCSCYBZ7vdTYqqxm9GZN",
  "key34": "3VBxq5LcSzKwcDtwMnzGn41s1VQt6vn5PmYSfRuuKCSYuT1ME94aYy7eB9fku7fuHyBFREvbFz9Kiz158LhbaCKd",
  "key35": "2w2dPqnFxk2CELmV41McvNYShmE6wB7qufJdk6dJf4wbCsPiADdHKEE5MbLm6dqu3VmPJ4gGvX2AcjeDLVceJZ8h",
  "key36": "SU8fqNTnwbDhkQNfQ9ZJAwFMY154ePWvneCggBSkp542U6kUVZbddhBZaaMZDhSAmm1mtWcnTLpAVwMFMjJrPuY",
  "key37": "hWoG6JPH2ra1DwNaM18te3CBmYfH6haLdRk81JffCp7HVDH1LviXYsQ3hidNipSNjQXt5wmZwbWjEG36TuZruHm",
  "key38": "5wjddp2guYnhMDNu5BdQkEBVHJvS9MCVfQFGHkmdqpANSaVuS6DepEEv37xfuXUPmh1CbLbXVCXwk7HjHbtEm2aQ",
  "key39": "2Bz5GKBK6miTjDfaPoN1FTYMbpDAeVDg75kGRj5oy3WgN9ZYGQqbGKzT4uVnfcoAAHqUgnELEeci6HELFjd1puqo",
  "key40": "2Q19GkDWPzQjddJZV9jhf4zD4vyJi1kDsqXCrvwudfssYvWEzVmXb7Fssp7FyRoYmVbC8RZrjdrR357ZZB1vDNcL",
  "key41": "jWtBepnzSZFifPtfDJWTy1MNNhLYTY3N3YHq1H1aRzS6YireD4wWPRGfdLWRZkjQWeJYbTxjdSrncLkrACctMQ9",
  "key42": "4xSZuqyVDrWb4s42axjfaoq315n2V5ye6E9hypmF3mcBWd6LuFUmjXfwWSduJnniy8fWB5D4GPXaCYdsp1cPwNLm",
  "key43": "5RNMyjeFjRSzbxiBsD2ZQf1menoVkNTCkc24fXhPgFpjcVmksJVGvefvjyY9jyLK6Uyc1L4EQt3wCn4jxrq8SBTV",
  "key44": "5Lb3qCPkBDexZXaH3d8AxHdW1s43EeUTEq1ZJsxUirqcbASKkpZo5tgSb3E4JvynjXeKaaEsyoAFrF7F49Mt5J9N",
  "key45": "2zK5jjWPKFnmEt3CkWuAPzVM8LC3heckMaKLUyiF41RS4w63rY9F8xyXvxU59hCyPA3996RUpsvNZSiFvkCNLw2e"
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
