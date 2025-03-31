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
    "4bzPL3hLabgVwLiqcF7B3nMT5dUMof3qWrcvkt4592jZ35dbF44mCR36Xgn5qtMjtp6M3hYVWZ7dts4nnEbXuTEB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wX8eacoyNEBXcBTbe9nZcW5eUiTLiRdNCrhbuDDBDkkEttV4rxSS5fq4XW1MMcW7SmmWoSzLLRuk1ZnJjTQBxW1",
  "key1": "4YbNsNfimnoprXqV86zUzm89fxytBprUy33UnNr8WpZgzUsTNBio96QUczddf2kTteCg9zTVXHkjz28j6ayAp6oh",
  "key2": "5uGhTjPB4tKHWcB5oifPYEQ5JphNvCSDfKG3RVPXGCnPD1LSTi88wAGfeiDSXn5YKr3FAeBJvNQQyg3Hxd26yn5H",
  "key3": "5iADR8G3bnwtM8cqicX6VJRkWPhcj1ULvQJuvYo9tWGQtyGhfiWgd78eNGTxyEq982WG7iPXFjUu9GcbTmKZLZZn",
  "key4": "4EKfdjfAzxBTkSUaQzaT5Hd3fvpJPC9bJrJNwK9irsTwnyazKqpXY25sRWL78AH2dbTxeAmSuF9f1X6cfLzzUAg",
  "key5": "2HE4xU8aBayxLnDCuXnMDk5ibhwrkGjhoCsdgoiyS6cvHpaXnKvYvQ9rqMPxRz4orEk2G3JoETksinp9MK7pRZkX",
  "key6": "2yqmMKxEDgQFp4ud3qm6h51Qa2Dq6GJtSZqynhkDD3KaK1HJ5LkgWvPrvkYDQA69HxVMbYgnCYfnzYcXTT4qA5t4",
  "key7": "23LAPEJ9uYxyjw3jU8K2DzMMoKXRm9D229vHV8tDf2zcj7r4jtWb3paqrmqGW9vkdfpCs4uF47hQJtHt4Q3z7yx7",
  "key8": "37B1tPEg7mBU5xvU2gtHsvDE34kxHLbkBp59w28kkeoVWuyeRRqBjE8T5nSBewaTGea5irNiZfQdCzK5BvjMVtb8",
  "key9": "5bnuXxMxrxmgXDioezu4UWaKYtp74UfWfP74pG47h1TPzHBgrrUWiY9ay36HDjjY3McUEdUytgf4L9gRfCsDrK71",
  "key10": "Bu18FfWqGaKT45oL4ENwNP9737xHkrB4UNokUVSi3di4d7xmzoo8w6TsecwNwVuWQf3jsHRKTP8nwUyYM9HcBgo",
  "key11": "4k7gvGynFZdUXYDygsjW4UTqdmYTRGvhNXFiF8fxTx2zgr2N21sVcPbuvLHPLNroTHDgwq5Bc1xwMhktEiKEx6Pg",
  "key12": "3JtyKMe5YQUnnYW6sEofrtkgtBc6ifzKC4guKSvNAPMvbiYdgRwNYoDUHz9VJNo1MbAXXqnMmf2ekmF28WoZhnri",
  "key13": "65AGMpPv3kpS8QygLnyY9evtwvYCDnCVi9be1xdvYGC381pPzpEymPJkg1X4Kba3p85BHs5MYMNgPepquXin6u8t",
  "key14": "5TSEzsqFBJXZkGAerBiwD24y3TmfPPFDCUnSSgdQsYERmwrjoddixU91RKuRhvtPN11be3NMsRdzUPh4mp9iqwDa",
  "key15": "3Qf38B1K2GB8VZxKjnYkEbYoon5jFuP1QhUHqZBw1wHZoFzWXBzaMeKvAs45DLLwRiQhfLecktd5wyFH3PQ4oVcs",
  "key16": "38nU4x733uLjacGdmfV2pQYLVShDJqKCvjwENeeg6Zaafxpjdu474hZreawGsdRk758vSYm6bXRQjzZYBrycwsPW",
  "key17": "5gRmarFrFR3sQG2yJLkSVwX412v4zG8ZLZH9Bvk1pCr26dujPSGVPtLxK8pEyECHeMsYcbzY1WDLTH9kYEn6kNRE",
  "key18": "yiQNpoqr2mxgExocbnxjc8nCDBALsGkNi7oe2Jh4AYYRfm8khT8fjnUMtYESwUL5tzN8JgaPHA57LjzWGgtr82n",
  "key19": "3jV3WAzu5JXCJPc17BKFMbm1aLdq8CYEbMn7rpHgYsuHRD34fT9KoNvgzWxXJ3C94bkfcGvpZhuRfgsouAEfMeYA",
  "key20": "2gxcG9ywDYsrRCPbuuUfgWp48GSLDbqtnK82r4qC8AUU73vCd55B885o1mqLs3We2Vr9uZne4ozLr662XngzivXm",
  "key21": "2XXv1pt1e7iBi2VVFAKTsVGQtH3p9dwrp4x8hYje1DYe5bhzoFXrv7EfTXt8YddW3Uz6X3n8YXY4nNYrVFM25E2q",
  "key22": "2QbBoHU513V2YBsWscy4Rzitknp5Jsn3DEe2heTYweZAHVsooXYPWHtnTTi49aX8vxgPu51McJNX97d4ESQfJF28",
  "key23": "2F2YNb1Z4ess5WPkNxufhZTVFzp7Nzr8zdyG7yX71XKq4xBy54C6H2yTLHXtrRX6pZUCdKtoiLY1pXDZhqYB3ViA",
  "key24": "3gEB3rpVTJBKSjR9M8pW5DREtCLYXWxFJqrYQVHqqNUvfgrKn2LHBGgatqHePsFQMiBFp6ARwfXHMmeJgXDnJmR8",
  "key25": "4xUXPJWawhxSrmWxXhAqGwisdzbjckeZh4jZkJXnU5h5fdYBz71Z3H7aKwHmmWnVUs8rLKMi2GxfhqjRwDqYssZN",
  "key26": "2g8CGv7e5sCTbZ2qq9q3i7Q5W3oRVPZbNRYGsymTRyHv28q74zJfTKfcBpaGyosjNZbyWC4HzEvXeZpDcjiUFAZg",
  "key27": "3h14qogExeGHkhixcRkFiDdcGKm9YQqiym6srJCL5Sck2CTbeHcfTMepu2Ygw1bLejtC1vPYfggN2g46RBK1Djg9",
  "key28": "5TM7r6kReTcKU5vpXCSBDeEQco82d4QxWDYZPWNkBY6ekwPeY9QQtz2QxWf62h1TRJEHKYWBDHdiekVZFjxbB6go",
  "key29": "3NZ4Xxtg3fvtsFqqHCziTTyEAsB5Whsd3FP94VhK8MdNsjTsz8CxK9Gmb4gAd24REysGQrbQMLBozvpxaYb6LViv",
  "key30": "5UVKHNkPmzvDh1QuKwCxxYpfxJaWrE6FUvxrdqucnLDbiTH5asnPdbhKW4AMbJJS4yweYjuY6KSFMkjLm6AYrBr7",
  "key31": "56KrmgAL1MJqYxHmkBsvnim3Ek1aksPrdrF6vU8jNs231p5Fi17cq6HW2W9Ux4K6LuVApqLYRBrpAGvogVJsfnqR",
  "key32": "279jm5oaRXSQVaG6ecCfAWb9fhUQByhqTk42E35RFyKfaZdgrpE5TLmYiLszeDbXaEfK8Jh7RdifHY5meSz3XoYs",
  "key33": "5PPNzJU4WHLRwZA1n8BBiPhHy5cy3y68MJcVXa7ouqKRQCYBomCocb5anRGGLSgQ4xBVCXwRQZuJhQzM7RGWFwDj",
  "key34": "5CVyLk6MsXqYRvA3LFsTkgQoDMvGh9zoYN74jHNCYAhF6pTDw1bTYQ2i5xNSp3KNsy1XBGG7u8wajZLdYy6ffErY",
  "key35": "Ea17jNA6i5SkgWVku71kz1KKttKHHHKfprtGmVWFnKnRfa445HrrwwpgX3DDMg3pa4gRHUqUDC86amiLWVyAZvT",
  "key36": "2sUGKA2PY9XH1TeiPsBpmJ3faTiLZG2dYTNYWsYBX1ucoWoR4QVJHKe1FU4ST43VKHaBLj3ZchnASp9u14PdcjhC",
  "key37": "4UjRGWKenwtaj9kG66VJD8nLy51Jwu94oqcrg5M5Xwxnkg5QdGTcGYpcR4tjTVqh7z2L6p7WaW2SxK8vhpKoA7at",
  "key38": "3WzTf9ePDiD5Y7epbwSSrHAgPJDR5VLJmq5RUWyoDWvopZr5LonA4BMDtReyK3FigvKx4cYqUWd3hjmKoaEDcHeL",
  "key39": "2rXMfB4DXjWSizDxk7cmSWgfqAUTTG8wm4XvHrwzX3YrAff28QR7CKGa61sMNHs8iQHy6G8appenJpDqgb4ZpfGn",
  "key40": "3mHPSno3gfvr2zDvMB18hrV8kUY4FUdJoAcYuYD7q2Ln8KNXPgbEr4ipSwuNSFGHJa8H1sELDyaTfC4Vgidk4fSL",
  "key41": "21TiyRXdihgsBxSF3HXSZSRnvocC38CpnGDLmW54MdCE5se1c8nmxkxdyokiHBtWD4jVdhjXYkrrNSkJYbPSmTzp",
  "key42": "3EYegmwA3yAiBY2GfwFeMjiasq1mhbAKP8Wc8CShotjSvugh6eBpYLb1TWYq7iiKNz2qct86EabKUCbd5vkDtCy2",
  "key43": "4nCTvvr2MTPTptMnmm3awYNyPannDUfFAm2jGzMGGsVxdV72esM6e4h8RUx9ZdwMVAUBnPtiitvryFm9esxMcbec",
  "key44": "buC79Ldsm58LjkV3JpPbZmF24eBWaeuAzYF4Bfd9GAjuPxehB9caZP1dgp4maaYLveTa3yiKLncNkJDppiEaNXE"
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
