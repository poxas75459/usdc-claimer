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
    "GrDgvuWtHi1tkLeiRNGVNW8tMuweYRjVkHn7pTf1Hyrec28evdX8Xw5BPvizVwANNVRUxfpLtd1YgobdEefgugH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29PurNgq1DEJz3VuF75sfYYWQC9ZNBN6rN8ioXBMEndQeQoj4HW6ojiDgBiceU1jb7UhVu4S6zt3ErzGqGckD2wb",
  "key1": "tKh3uhmfbTR3bdE9awJhWuDJkynWJw2S1DFTpZWbFdAPV8igQ7GNoemjrSFX42MLMZabHPaZQTKjdBLepYsFWB2",
  "key2": "589pakvCr7T8hupaNcXTdWh8kShkV16a5tJduRzDqW2o2ur3TfkvJrrYtXeixZQ1ZnJopNuCiPLhxsYPyWuf8ESn",
  "key3": "4hKRmTR3wBDknNpRJ1WcNEy8msgyyBJGfakEBVWcmHijwePFN1tNonaKeF2bJtrfjTXB8bSdMysFM8u4Uv2Yw97A",
  "key4": "DgdKtsotStLQpCKLBKh8moi4u6UxvtvzxF1f1myHpCsQbhMxNeT2GcQu7JgXFModQqdMMLLhYL45uoiP9fC2e4f",
  "key5": "54v7Y965i1QB9deBrJUBpH6MDdcEwBEGSGSrHMFHVW96xVCBKrzQzjyuFsi7CPyhAyodbVu9k2C882LVGfEUTUXF",
  "key6": "KomzQMLkVrnEkdGnr5zBEWRK7Ei4pGwsXD3sTmAnX3EYFqtuh8Z2R95xTbupavH4BGZxEN87mPoe3wK9soPCAZo",
  "key7": "2hNHEFMFi5sDqBeUkGFg7U6VcAduCHACFUvLhGqSciG8UqmDug3XsYLkRSpfQUjSxYVGMqrgqyYbDCP7CK6ogrZg",
  "key8": "4yDYLhN8A5JQ7okhgE1qfv57qo6MJHNRPzgr5UtzUz7gnq2xAFkQpG1zAfBxZ82Nu1LRnccejWHJniCsA63TzARr",
  "key9": "4H3zza6gAf2z8tP7LP99iWSkLffxMThUpVCAAN32JuT8Z2rQMkukUcCDxAvZBXhbV45gzG5UdHyEuPe7Rm6DMnSF",
  "key10": "4v2hDjdjFBYgNULKzyFShpbJpojbt1XyZLeQg6Jas2c8PC1YTwtUAxEdjtB4y8Rj9rXoD16QDrKndayPg2KUg4Hw",
  "key11": "2QWCxL2d23QMD83vw7NrXmngp5T5JSvS7vwBtQAPTDHd3GU1qbF87PeG6U8ckR11f9sitotyrCb1sBgZemAYy1Dk",
  "key12": "4RCRgsm9TEmWTuvqrJbEPq3xMPxDkx2HuByDmzVQMKf4ZbNrQ7bTNe1KuBnRh4ig2xysC6XVkLKSsKKtfZxgP4mM",
  "key13": "cvj2qnKG7ihr9vpjWDDm3bnLFMNqrKSGqMXUmYBQbfhv4LmK6X3m5ZBCnEvHLMJXNyysBxEkHsaLbT2oiHt6B8L",
  "key14": "3P2aetzunkXFytrQ8qBhxbzWQmX3vRfBneZ9T9iqBojN9KLr5U1QqjpRxc1xajxehnc86ShNh2UqDnjNneVQZZGV",
  "key15": "46k8Mn2B3QvjQKmpzQcXSeZrEtSrermEU3Z6kGCV7UukyRbftijZKriVrii3u4s7wwAjoSp7DwdbNdsYWCJ4GNZ5",
  "key16": "3U5TaHSdJJ5V4vaYEaR7mEn87EyraqA4iAVwjKQQbK5qFZSZjkQFVyQJ6e8aXqYGgfeaRQ6jXro2wnRKVjusGFoG",
  "key17": "C7waK9Prk359xUCefZqSMa4wwhYUdGh6SXY4m7aJKVDXASuDSgdbg9tsVjKgSTr7bzQd24bkjzWucnoNEnDuyBt",
  "key18": "66h7JsHFot82cfXS4EHmr839CqWfY23jotrq8cY3qs42kx5M5kGoujizJHFCfp2vaoQbXsNS9sKxKBM6nuoGcdxv",
  "key19": "2QoyVQYK7cowxh7xLwfXu4HYdWJMeRHJcJh34aS1QfTGnNbzGK1cktw8BL3db75U2pfeM23kc9i3u4Jomf5VGDwZ",
  "key20": "5pV58oNZNvKTgQA4X5omGPJQuDYxCfxXGMuz9ar74rt5bit2yzUagGXMfDfRVAx6fxVSV6sWqcguDD3eaMmCn2hL",
  "key21": "35C5L5kDNXgcendHEj9hGxWnLVCtAJAW3FSiLerQt98JqdvXttaJxFGj3TTiandSymkELc72kqK76V3RGCXxu1xb",
  "key22": "5EHpKCJU9rjJpfgxzrCLkteYkQqdcBsncj78CmxNn6E4fQpqjXZ1vZiyjtxN5i7aqQH2t7kH6VXPnq58GsSV4rVb",
  "key23": "UnBAdEj4AouxWsqqTD7QRUDuHibcyxeovHJnZxKuswsxNUi3zWYf7YkpCSXNMFuTdtfqfbugEDzXzA9tCoxpDf5",
  "key24": "2MGYgPtdLQwujLvpU5CWuWYNsc9mTxxNhdu2Z4R8DUsg5c3jmXkVqLAk89ZQTQ1vtuPCJ47Tx5JobBVsRtgexPZw",
  "key25": "4uezXzUdgdjnqSfvFJQ6bNSAHUvWVKyXURGf5NSQM5CLWXNjFqNk3GemhXm5Fc3Er36F42Rx2YpjUMrxPuUpJXq5",
  "key26": "3z56nmpXHZbhQzWF6pBbwrPrMn6mB1hwwBb4s7P7aya5a5j84FPgs2YbMm5R9Y7B8kZGiXQQtZ6disVVboFgSP74",
  "key27": "3yUVvrJCpLUNMJhrcCjhJb7g4UUCjzT5owyaRaMMunxPUvhGfKh4aRyp597SBcJGn75HobLyummfc58S73MhMMAx",
  "key28": "5yiLkHhijMzt3UTdaPKWHFCF6fMQPsiQeGfvMK5Xsj6DBt9qF5da7CiQqEFjowfu2pv7C14GuifBkXSed9dZjVza",
  "key29": "2CyCYMmsKtBKSjWM8i3dM5ZUrZ7wLMoU31PEac8xz1WA7niiQPAPXLDRDiqsDmY5igCi3YrCs3Mpfr9CwwBhSNxP",
  "key30": "2AJsjgZEEQSdHBt6Fy5Goe6tg1LgFdu29Q4QHPt9ufp9vw8oJ3uwMTb4yc9uCJLLYG94MEZBJHZfjsmvqkMR22Lg",
  "key31": "3ojN4aWaWK5QxJWCjQNU15zteUdA9CVKoGFEUV1dZdHbgtgy7gzUR1Tq6UXRsroLEfW4EEYYtoiGUa1VqbMU9bAf",
  "key32": "4k8uPLhQWhkQBJTVtBsKq2ha21TRrVBoogX8oJY2J9WBe1q21HgaReyZvckBp4R2XAFWGVCGBhTgoSxNxNLu8U2R",
  "key33": "EsyRWQCP4nYfndNSe6NPsEU1nabaKjpfrLjhKPai4w8CSpBPtJd1Tx8Mb9VEHiynH2zBPGdXDbUzJFLyMbLoG6S",
  "key34": "M5xrzeRxnNLgWbAmN3Ani1Xr5Hw23zxSU5kMMYdyLn8em6KSQs6G3uMT1QzmqhwppbBHik8BQRqgChjkKErp15w",
  "key35": "5mSEjBkXZhwb23pbLE5TaTucCHYViniFHZD1Yn6JduZ3NZddwr9Lb7Yx2sx81GX7dCKm7Ae2RJYUoZMF7Gw6CE1X",
  "key36": "51ViHEL9Yu3EL3YDy4wECp1SqzVQ881L7jxuyeG3u74KGt4Q6CZv4QcUTUMqKbYZHgALr252kjEMnzCS2ADmDECp"
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
