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
    "Lc5MY3nENS5e5MJp14m7eW3HKgCyLedKQNVpVrFiX8cJTEBgpy89V9sJC8oJHf2YWu8B78yLfawRNPm6oNoAJUx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JFquywcoX6jYB61LUYSM98BzWWhwdARKL1VUPCaHgPQJmEURdhcNVfnVqvB4TaniZnHpUkPqk2FRCs5PNn41i8X",
  "key1": "3bgNdaTAGK48oGim7j1jfY9JhC3iByAR4EBc2xeu28YPPQoUH2QRqtJEWgjFbSXdJ5sCNyzsUZvyfkfUC6ZKFjQz",
  "key2": "2Z6WAD3D6cwSXitideFvxdBikafniTDqKjtgFiuTkcHbv88KyT8NvEKA2hdUvFVVRgs8XcVcvMMb6Q6be3VN7f4R",
  "key3": "2N5SDLXRaD6Gkb3ftFH9cqS9wFajsazB33cAiDMtkS5bUpTwg28CDbRtiemLAV9gmFBcRaj6cVdxiYZYrBPcVfNs",
  "key4": "4jn9NvftzpWRzc4BkBGAfwK9dC4SKz5E6m8mwjzhYCgvkSWREZxLmxENZHSiCkrknaDCx7eoTMdGFe53tPc8mdLw",
  "key5": "5wCsBvKB93zkfGQUSDwkKpsQiyEiNT4CbmjAqQwUczCqjmpWcWe9G16Ri5R6LwSu3WQ19dpGPiGGBc6aMGLQEQpW",
  "key6": "2QsR2UK8Y3hzPKawDRfhUtWtTYEXXLmtJBP5bPdiCrsM6AZaxP2wMXMnvmmsmoHXG9FdYxDuERg9nquPAVM7NTV7",
  "key7": "2Qr9CGcTTjJmrSquuMfL323QgyQFat2zT26UKZSAAUDBQLLo2qzQghNZ8jp8tJWcBqFANkm6nxDKoDt6X8g9EULu",
  "key8": "35js2Z4XCveLQVeMrUYZ8hq3JFd6aiW1aYL6iwQrfxHUhNv3oGrfwvBPxej35edpWKESQ4F6VitXsrnfC8pSRaft",
  "key9": "g1gTt2StVzRjA47au4H1ECsYqPB3z6HWkLNCKrmUtXVcpG56gg8rQykTzC5hEN2Ffh19Qv1LiFm6T5fkMCvN9u4",
  "key10": "5UafhW91FZayL4YfQfjs3q7sUn2SGpo4mQ9mPKnA5v8RDwRqBYxYMhrzVaYe49RnhdZeJXEtT3wUo3JdEUEW4j22",
  "key11": "5qLPWbjcc3zpdW4vxJNYSzwQCtQ369FnKEBdyTMhpqZJeJvtdzrDKinU4CVyaEgPLmjSyzqSxPFwaRQEpTRdpqqn",
  "key12": "4BxVvgEtgQcXPaiFzErSHENXgmZkXQDcq6cGTxLFdBwH25rtiUahBcKnPeAMDRGpJbjtT2pUjCBtd2Y9UTC7vK8h",
  "key13": "2v3yAinsC7NUphFUz128QL8rHxdkuyPQUtFMopSA8yi8tycnyvjNM22sj4JtnHc9ydkQQHYKTxKdKG75SEEsYgmN",
  "key14": "47jUh4yJxunfep2X2JY8cSHDpqUbsmiKh3qtMABnHAPUkjGx5F4fPmecUzTYRibuZtJNGkq528NB6CviiXveugHR",
  "key15": "217PkRjT76HfJXAkCAEEDRaPnH2kdavzxffyNnirSpgX4mpoXQsLbthHC5AV29AGmzj2A37pz8yv22iqiZSi4Nt6",
  "key16": "5jP9y352vYNbmSqTuDiwstFrKLTrijzyqKQeZVuHi4EdhbybjLguSQkUTGg8To7nDHf8VszG7UU3gqvfYc7T6PRG",
  "key17": "n99NpfCi7s8HhAxcGPdcL2Yyf3GHjFZSEYr7Mh8Q3PaSerzeE3qVzRX9yVMHWHUcaJ8bHyo3KWrjKvZQSDV8gre",
  "key18": "59NMGFGnhWxrRgLyhSouEeTvZDpXU1AwWJ5qKj71jRCoKWSmXFqunBjDRoVyu5WDCMEi5L1ZsKFCdjvbwK3yqzfR",
  "key19": "323EjxeuzmhVcjcJVD7Fb9B3SxZVmyjQLVe8MQD8KPnruv1rFo3UZnL9BtLrGTtghSSGxSfyj73Nr9bKitfjmKKd",
  "key20": "3t541kdAFxRnAAP8mjA8JthMcx3VPCU63nW8p4dZy7EFbcPBdsNmZgCWGEqDLkFcgYP9ocR1ebL4wYRaomTwHrmF",
  "key21": "4NF154DC4vTjnAC39VYcvgLMpAWj4wXCrd7iKaaujivNGaDawa4JS5DVqq3n3z8rvy4mJimDPccH2yu4NkHKuFiF",
  "key22": "H7geeGRLDRTLr4eSbvRS6zYLkiMEz2SwAbYmWGZnGK4NBKRUgFN7eUeR3RbLXGehJs8fE1GJobgELzVfjhx2di6",
  "key23": "uKKLVe9TwdKRquCJUFuKn2nioL3RcdE1FQGyxwCFBVKnXHqqKoMckUqfvT3z2UswkyMJGuumAJSRqBbQ2UpzEF8",
  "key24": "2JfrgzNHuBk8PvAxhUy2F9BXPaCnpEVaCSx37sisXLqrAV1z6h9fcFQ1s5R1Q8Wu8aVJaj4FxngJNjegRjbS1Evf",
  "key25": "2eSdxE6yhJ7ALNumsk5xAWGsdygouYeQDYyz86WJ3VJJejuybEeqrGM4RQ4Cjjgu92HfdxhBcxR7yp2wrFGLckyj",
  "key26": "7uzLgnPng1dJ9TKzbKVSgrdwTx2Ah8q3Fn8SptbRwLiWGs3qe1UACtuuneeXJDYM5aKJGhv6RF9afHJc1dd6c4W",
  "key27": "4hGAQVb4RaHo5BQvcdFzi6E7fb71VhT33YHwx2eqzLbqSxcxFdwfCzynMgUywzNif435vLF35JdsZJs4Sy2eJynt",
  "key28": "2uQVsUHoWt5LSMH2yzJ36DiXZQkfK3e7tCzbjVcKMNrVwzHeFR8txyJpVvkXT4tFVWuxFPzxR5w8yiht2JXuJo6q",
  "key29": "4DLKW4G1UCbwVBc1v2Jq7SQmodRnmGCnCarZ4XNyPrpALMNDJ2jPX3ti28QjULS8F1W8HZm5cP7SeLpPPfFtx6qv",
  "key30": "2dmdfoeFaBCJhswPAt3GPNDB9SkxjjonpaD69WmoMwG4PYte4YP1JqrCj7B7emxY5YJRLXYQ9KeRv235mFmLCeJV",
  "key31": "SbrHnxYVEsVWjJCcE4QXYgTktjVgNEuMyCvPrZCiHThbmEgbahENqQswwQJtmKPN4nFGYeGHjzgjh9W2rEMvNaF",
  "key32": "5EnbyyVoygsa1BF6pU4Rxprrspt3ZXXeY5iyCdVea8ojuy8SDTrbihZj33XoUp8dC84Q9QY32QgYLQsqP8vDoQsH",
  "key33": "2ZTKLKX22MGtrZAeYtpr4eMefWEgYZ7ENPMzcXxtokXfGduv7LB9i5sPEMxBSvbj1K7eNnKT2QuUAqUSV8eNGX7B",
  "key34": "qigsQPgCSkTMZidKamxjvY1neMr1vwVTJrxnqyNWoUKPKPDq63Nk4ixeDJiRd4kzCEzuGBtqf4thR3V5Dj4Dd7p",
  "key35": "4VqpsWui6Hgf6P282DcXPJBD7PexVKqht4M53xfWyDaYTUuvuTtvVtvEGMeYb6kqeYcdkcpsodU6EGTXL89netUQ",
  "key36": "3bDBPDUUwRFWVzsojnBdJUF1yvizq6z9uxRYDg4PoYaUNYNZdKR76NN67ASuUfzX4Ma13VcqmzUUgqG1RG8y7XxF",
  "key37": "5HXLRVTo4MV1NoKfAkp8JtbQoo7EaM5P5d1BRB8o58cWt1nz5Uaiv8pvbjM84KUg1Yian1BTcTo3gseCkDCYbMc6",
  "key38": "4ezSC2tsoH61VvZuMYtcPa9G74LuPBFAzU61nHbpucbVtZ2XXpFsMTKnTKtveEXax4ZMLQArTgbXE2VfQyTLcwFR"
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
