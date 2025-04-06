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
    "2NCXQxn3eUoKVxB64hB9Z5uFErpQVJuYpMKPF6SkbXksJERxBYPvm9FKrddoEpZwY8XkJ64hCnUZERj8VtpVQQDg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mhbkxEYkv57WkL49peqtNQHdbCmrButUcWQaCrPgWLFpmtBr5ra2feaZiML9yK7BK4tuxqN11G5Ag9KtCjmKK4Y",
  "key1": "2zx4QoQ38VpHEDRLSUU1dGo9UeKqLHmJvfoAcmVg7S6px5xDYvU91ByESyt4rvhGfpfeDskYgPsLY2LL3DYu8a6n",
  "key2": "2GyViohAFMSCreKufwEtNrnygPHbG4KrzfkLcHkfSAAeA8bg74TH6XL92HeTNgpLtnySmJuSPtdXP38PUrFAmjXr",
  "key3": "3pLoGc94zpw2wdWkJm3ha5HdqsGinLdrfHyV1xZ17xvSC5G1ewahZ31XpdG35gCarkYhzU7WFXHsmLwzwPDqg2ZW",
  "key4": "63RpcAGoesBQEMLspUyJv6Lpd26zM1xi4CanFuFCrb4ZgFu6bHT1zNAhfeGMdutNvzgf1d8uJKBQksBRipHyxAoy",
  "key5": "58x8QGPbeKVNsmvTzLGLWhg1nvVQcMg1qW8sZf1JVN1ZcmmbAXqH4n5wCadXXeYAbAAKJxk3d6Rc8bku319GMgmA",
  "key6": "tsaf5fPYJK7fhddXYRQbUx5hEXLCxi2TfkbyM23w3XSEfeGhPt5MKNiUYhteMZgzXaNK2eHvmXgnMMRNyCMTqh7",
  "key7": "52A4NXykGG1YV92sYAbWWXNawUAcioNKFqRfhoDXGF1hwySSiWWLbtKpfqZUMA4NtD2RQkFdqTanQoopRkRLrdLw",
  "key8": "3sDGpxYYwDdMGWZTy9ToN3JN6ZDR9M1W9WEsat7ERYyULa3BgWeCznBNQuF7CheJBc1eYEtYUwNPhptgraAF2Ms1",
  "key9": "KwWNo4thxmTRCkDP3JJWaQDTEnQ88Gi4wUFpff6a65PCnf368Fn27YB559bkQipL5wwG2jxS5PwSZiSXidqKQYQ",
  "key10": "3xy41kwZRFJLX8XMFZgRkhasYdiQv7Yxs1B5xN2XpsmbGd3ET1ZmV5PE3W1RPmzPY5uBHizbYtQnK3THNnosthhZ",
  "key11": "gESzH8kUgpuZqXQruGT8GW4gHeZS6kcMPSiPYMBSWVLEdxLeaEAsYBetqEoD96Lni3v3uY3PdZtgX6qLVpfhVKi",
  "key12": "4koarGXCHYn7HV5iHRC6Pquuu5cQYuWFCCJ64SNcvUPTcLA8oRDbUEBimg2LzPyftNWwydUYboZ4WSEu1463reX5",
  "key13": "2HSn8xj1oPn7sLtVsfVG5sVr1t3Pky5Rq3S3sqt3TvKqDof3ApvcyHVWzF77kWZLZkojbTievCGVcc9sUmRfGgbB",
  "key14": "4Zs1JYpwXN8aDVD3w9G5QmiHDEFnrSqHbjet3DRkoxx7by19S36SB3Ng8oyJwLstZepDwH3ZcC32ycyfqFuSF1Sw",
  "key15": "5uG9GWpLpM6BWWJMM3s8y6khJ5KZuytwgqXAf6bpF8mm7j5oZjcotwB3tn412uLnkifn7BhgJAViC7WwoPy8RZwz",
  "key16": "2XX3upgC3BCFCaMgRuXpAnjCRHCi85EHFV8DCNCUk8R7Nmbnyc8WagrtgaRY3ttBA7ZycdmfcjFkd35fBJ5GRJUd",
  "key17": "2DTYLuyD2zXJUqbwum4PzuzteNQydM7MPjG6WQFrLfa2cMfc5PS13xWfLhZQ3ho8skxUcYwEzVrmuC2qCfC8qssU",
  "key18": "5JT2iUjyBgAVUbJ74j9U5WoCnH1hR8nNkYwCW2ZFvbBZ8QH4EtK2k3N5KE6UAY76E16wGpyxUi5PbgFmCYhcPuDC",
  "key19": "5uNLw2LoWBjBqrLbohNFJi4ap36mHusU1StfCPwcd3n3fvwbBNBbpcyWL7MnALZeEYDq3qrS64Dn9m7HAswSg9HG",
  "key20": "2vKeYTV9zpduZNHscfQMUWmsMxtGhgAYyE3DxMX3jediBWt6FrghtaeJKdrN9QGFVmzLNZwyagn9uMjxbzaZc4me",
  "key21": "65TBaamLRjQRPtBsj3CystYz7TmmLBGJt4KQrTcJiPypznKTNg5HyE5ee5D5efJ3Qi1se35kqyTYbWyJw7P2GNZJ",
  "key22": "2WLRu1eqDRpbx3eTHTRjHggTFuZGX9FtuDGsB7Ano5ji3dEM98Nidv5pRT9LseCLsnAHJScb8WK8njBQELxTzf7D",
  "key23": "Az9tznbXwyuCmezwsufqEE45Ak64Tiji8esRA8nfVH1Sd4GvCXZvmRxDZXpt1YWwZJXg8ntrzzrv3c7JcqDoEty",
  "key24": "4Hg3CwaawX6YuUEmGPdNHs4nafkUDQh8o7puRf4XQocLnpaFwNcjP9kxAc4YXpWuKykAEq1QJf3qqEKJ84gpsfbQ",
  "key25": "AHeZtXQidBWWAXzWD46Z5XFum3SMbYM3cwtwCN7FXkhhB8pJwnpPgU1cWU6mHMFBCFVkponNaTvAbUfzyCP6o5U",
  "key26": "REPH1Xe5QwrGZquxRF2negkG5XVz8vuT7gMrvuMoLTimyrQkNYRJVx8oE2x2nQYYHGC4X8hZ3QW2sXd7iunpmWV",
  "key27": "55KgyKo4M97DWa8ouyw3giJerKyTk89y18LyNd8tZdoK6QgXnYsEG2RxE8ofZ8kRYBbqVxVunMPy2EZ92w8m72zf",
  "key28": "2DfaYz3BHAa5ahfMZTZFp9PKkn4PXnUUH6URJ1XBPxbU6RVeUgY57JoKAnuhC19WXF4fEuMjKLS39pqp7y9pxvZ1",
  "key29": "5Zy87JEuA7AmFJAovUbNpDNjRYD8SVMSw8vyviBq7Q5HXuYjTfGKbMBshJ5cisEGQ57fWTa7tAqAP7JuJxS5JZoa",
  "key30": "5Gj6bGr2nfH7YWvP3NaW5GpaskssyYRzqvCTyDNJ2CL1yamFDmXKgZQYyiKErLpexP4gUA34sYrt6BheYMf7MbvP",
  "key31": "3Dwve6TUUAvpzwEo1xumuidTHeidekveEpYyxNfFzmBS2BF2cZasT7mMQMBUyUGFS77LEEHNhAwAUyUazt5BmyJE",
  "key32": "MUR7iNpv6WadTR6W3DBN53UP4z8wxP5noT7eNCAZctF9P9MnuMk8uoLoxmkWujT9ACg3T8Wc5W3DTYZBJPb6cdq",
  "key33": "35ro5AtGhyrKubqHcYhwksGTVsroVqtGuWZX7hBPUZqLGY5pxUvvhAQb3j4c5d7dtawP9bXU5tKPF7WNWTXtFxnT",
  "key34": "5E2jFFPNVsUNUt9MisnZsXaHorcgHwUfwnbMH6S5MXzQ1YEzj9ySDcitnLobqhNdfayhDc8rkDyPRo8qMepessqD"
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
