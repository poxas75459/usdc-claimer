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
    "4qWiamYSsjqTiNK6aXAe9uvpZd9Q32zwx27vwKNhuUXUXs5kfFN2KGt4z65bTWBtVjYt7mg89B4u9YydEynCXFza"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ubvpz79fcJTAxY3QKLsRdzfHk4GgoRRSrEaJNGiCWc2XtzvMLkPubB9tfcgVBEwjEKgMLbfy4QxzZ2ai1tiMAF3",
  "key1": "2pocJUWUtAqig5BeHq6V3HiPthudtwvBhi1WXSrikG68kZG9DcUz1GzDDd4tC7q5fGKeAQvS5dWKx93z8RjDbBCw",
  "key2": "EM8vAtrrMUrSEggF1PkRTUA4MU93RmNqBiJuQWBK8VcxNVkHaA8jFe1SXUcfwy2xeeMNm1XjJh68FpY9gEASMp5",
  "key3": "9iQYYRG4C5dJAXqxQpUGMQYNydcAa3r4168BALvTWpuX2TaB93C7gEczbW36UqQX2Pt5nZ66rSYD6wV1gPg59Qq",
  "key4": "2BgRzCSkvgrec1oAUMRw2xRrYFxotWoiL6g3ucfRurxXnZH59kTLtactwGYS5Bp8LqYECiQi8btRfv3iJmCWnQZW",
  "key5": "2w9d4vFvimxbgvonznDyNqG4u6hLpJTAmUPKQm2DsboqFZuA4e6jKq4VU1s1avRrr1G5W7Cc8ohGbotDZvK28p72",
  "key6": "3E7Xv5DznWQB4K6GgDEBy2r3tAxz2irMr6jETvNwFHemh9x9YMEPSe1LJoFpX39wzbyK7AGLjqXHY6Cfs7ZGAvka",
  "key7": "2AX5SjgMQyj39KPVKHkELW8JCFzdVkXsELsNnzuctUHvy3iWVi52XxUR3s2MeLYxZmkRqY7tcb2VgEWjR2wiDBxQ",
  "key8": "3DAN4dyXpkSvaDmbD8WK3hQaxPBAFdfrjZJ3BjHREXds9vYLAYFtdr8jqQuKbSLifHwXsjAVsj2anm9Gcso9QEY5",
  "key9": "4BTX2P24XKoGopcF2GNSnghEwuSWehyMiEWyA4wSxaFdLH9KjAQ5QQoT9rr2QgMT3jwFNkGs8cXt3dpzxoF9QzPH",
  "key10": "GrT4SQzF7sWNFS2dN5FtiSciQE53HevmftoaZPkbAJ95jUKD6GdCKkUW8bHpRzqFB5Qmn5SSNf1WbtTsnVUKxZX",
  "key11": "A1ZxtuS7G4bPB4uBtHtn3qLK8Jx9BpmtJ126oHBaXAqTCjz1QMccXVuduJgziKsRNe8dWJjjCC5X2jrYta9zjSf",
  "key12": "3aexbDspg5HeVc6AQXP8wd6SbHzDbE6tJVPZVGhLTALaCumLKbyYTrPceRBGXkVRL1UL94Rs5U7PfSPiz8Gx1yz7",
  "key13": "2zFbsDhMgQDu9byRM97Ck3poPaTw8Vm6bWfYYEtZrwgYvSyDXBUZtvUdt53yd7zst7MXr6DTnvqKUc8ZA6uGRY8u",
  "key14": "3bDd9N6qVWgRdukLdpfGRrnAVcnVTLFNdCtn5B5BwnQhtmYJtV74Z3GMm5AS5qn9jk5sE8Cx56gnQrZa6VBDm43G",
  "key15": "5ftN3NY7Biz5awVWUeL2X1BrkMwvwGyvMnRwfzseA6iNRnvw7tSbHePCrNDHwtuhXkWfkLNiFqEeferHN85dR6Yh",
  "key16": "3vqGMK8oKGbX4nnLTTGCdhfkMjP1TGwJoMjjfxDrNYRbnJ4wxiEUikGKZNCPMoHSXiF5LELxmddzkm27W2RtXiis",
  "key17": "3QQWeBqYwCECFmtx1Kbxkn7NXwa8HuxPWQ5M49xLJpWXiaCjMrC2sCPPEnUwcqCVaqDPq7nSLyj3hV8ZQ8WZGkps",
  "key18": "YpS8EJiNpJXrq5caikLkLpTwE5FMCumyfBvzhoSixCyWnXLrb8rEuLdkxMUwxyoJqG3KzbDjCEBHGuz29ysr5wJ",
  "key19": "wzMKoP5NHU8ZhqzD9tKwRZzjLS8fHsMwxzYdFPSUUAfyukBwip2sEhiEsubfz3dJVKdrGe1XHLqv4YrgjXSJojG",
  "key20": "5gt4A5y1yph7a3mxpPkJUT8JLdL4hCASspuf2ziR7BAb4AJbNWP1tXsL4KRz9w4bW61abxtHurRLohJkKCi5t8qT",
  "key21": "5XDEcnqu3kdYpqanrcSj6GDATAAopuNND8U3n5b184Le98DsR8YZsN75efWwgvJoJ5YJnuSG18RHDTxWRdgeZJKe",
  "key22": "21TGcEeYs5mydELSadFYsrPk5wn6dxdTFEzbVJoVf5Wjkbd4Ea3dJBFzq7zKKj7Bzzvq6McnpVg3oqEB6hg4y1p9",
  "key23": "3et8JwPV4GGU52aZzSnXAZAfyKgjkBtC8H6L6aAx9n74srtTjE6uUAXN9a4ET3h2SUdfiP34Tm9cZCaTXzMRQv4Z",
  "key24": "4R7yGw2WvcgN9XHCtbg49TQhpLuoQxFrFc46igSpLL5ABcomxoTZwi5D3Rywh7phx1BPb35KhqjxBZDd3zKy9Zr1",
  "key25": "2ZJcB2G3d5VV2xfYHEiz8FE6AvUCU5aREXrLtwr1p4KhV5XeUtp96XfNdVn4jLHoLrdfUagwKxZyyr3rKFaWGxnD",
  "key26": "2LSm7Uc8uf5gt2brZQCQHbvdiFWtfA1a5EosroavxHU6UxLhTi3bcRgagwgLNSSK7Vjdj9Jk91ec1KepsFce8Ee4",
  "key27": "4q3HaFcM8PoX9rMB2URx24N41JhXSLAN3LWzh9uXS6VBN77iLF36cZK7a8MZwobcbfYM17wqcD4BV7CNCZoYEw7j",
  "key28": "5rV22mmUyYnQ2miphvBEyxND2ExnLYi5tELjg1M5DHoRU4P7DcDGeLKsR6Kac96C7agXAQkJ1cpQ95bujw3pHd9b",
  "key29": "4fWsHMNkY7Nq6WnG2qy8thGJy77ZZGQpbB9Y84wzCrUdcuhJWFnBe8nENrPsv61Ae5RzK9uoNHaV1wWbsdDgDzxS",
  "key30": "4yiY6cUSjUsK2rpuHbBAQE42D1DVeeBGsimP1pQmnzhFPWV3Fspmi3scnZMVvMWdvVtP7Yb2TLZ7M6mgWaNqH8oH",
  "key31": "3yMAkr9Gq8DEhGURHbjP9qgNqp24vZrT9g87GPptJ6zASjDRdLPVTieQ19GACEPsayygrQ91gNRAEymbcHACgMJX",
  "key32": "2VyQ1igqV4sWyJHYEwo1zwFh7atHDCRhSnB9qyCKBMEnXVQp6GsGANdRw46PJrppzxCHbfTLuDoACNY6dMSWjnze",
  "key33": "Ncr3AtFnMAqkf9i1guNtVbdYpKi5rjDmaQfpKCdvnmBJULz7R2qA6U5HbbyiRNsvTCjLsvs9rKN2dPWiy2ba6am",
  "key34": "4GBWeTAyumztqAj3DxV8i6qgLcLS4BjiSMYqZkFE3dcAKCF3rFUG3kDcjdSHDm7NFmVK9P5vEow1KSaygq4Vvw3M",
  "key35": "xXMW38Ytmhq2etL45bUF1RvP8o2q99LmUjYFFkefYhhMSV7J1sMzoUi2ZwXR6hbJSHgCkjLriyaUGNqArZ95fGG",
  "key36": "4xx51d3QaBJiab6offqveVfQKb5czXQSSc1JKytmSbtpK34nczqGrLkLoS7pJMKwVPaTzrdUFFbYHnoXzLhpp6up",
  "key37": "5U1yH6Jky6oUApPQGXigBxCpnVicTPnuwznrS9ebqQJ5KiqL77xwgn2c1Y4ruE1KSAwURLzqLDfsJWqMUZvMQ4X9",
  "key38": "cLm7qDRYVLpYvycRPfL5qBCvodksnwEsdYcYLseN2jiW1b4pcotk85hka7tc8LttoQmq1a4xwQSe64863QmSwWy",
  "key39": "29rMQXhGXoDiU38wxCk3R3BgKrTULEHUaspwwEi8rwKLa3BAtoMhDV2ntEUng8JuPpot5H8rEVxgMY7BDska6Aau",
  "key40": "wqrFaKUY6hzAv9o6srvbGEKZ55N7LSVFNbfY4AKpfFoYkRDwUT87sbEgtJhuapPUtJh5nAUVKq8PHoXeqrBqqsb"
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
