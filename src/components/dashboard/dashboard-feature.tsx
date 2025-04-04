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
    "2cobQkEp4EmxiqutKyPEaKaL2JJ8f5Yvgzux2VtERQg7J1uAYqcpuQbf3HiMGZqhVfm36UjWJPiMJWgWKzz89c7i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d4ZiUSrdssijVe6tJ9qKyJ1SgiQHWxp1eiPXA5MAbB6XPJS8NVsHY2q3YDD7Hypas4qBMVXDEGb55CNjVrRo3Hi",
  "key1": "4qqPRgFK7a1YRtVx22Scd35TcmFWjFhhvjGQJ5Xsfe8JvCAx5583BRGeNdthfpeZ182NEa3yXm1WvQaeQ826VTbU",
  "key2": "3g9fgtjERursh63KUB2ywLbojTDxJx5nNPovBZuoinCmSDb9qLdtPaD3VhrvazJK1j2As8RMpZnRiJ6JNztpa1Yh",
  "key3": "5FQcDEAHW553yHZ1zohdp8zAc9PQqU68NG99VDz4sPMpoe93NdLaD6YysZJMmdQtr8stPpqdsXDgveV4asAUrmME",
  "key4": "3egjmM9yH8fqPdYf3HJg9KSfenaHmFRnSAWR65idRuPZ9YiEZJFJyv7T7rzZsbNpxoZ7SHUbbJGxT3mcDxVEma6s",
  "key5": "2EZDb5BwV8bKXqepvfxKWPTEfa1H3qNyw8wKr5TUuFqadssjEvMitovN1VtASFeQWPkDHnobhsJQiGbpF5VqsH4K",
  "key6": "fQWH6vuE6zoSX156RwmATd5inYc9dfGikCsLR3fpCr34eGxSz5XrJu9GBcGnGn2dzFGbHPnj5nDeibHJ9k8FBE4",
  "key7": "4Lvq4x15veRgVTdw6s2s2ySs4Wryq9UHeHCGhQEiyj4iNasmNUxzEEjeUDn4YGbGVF1tcjSsFReZPnAr7vpJTRK9",
  "key8": "4N8vbNkSpFmGhEbUS9rgryytnHg8ayCj2hVFM5V3Sj51iR99xBxXkcmyruCSyyZ5VcDtYg33DFVh5b8kXnexjR3j",
  "key9": "3DDiRBU8bYC2eRDv94SUyCakUdt4W8ndEyDdAvUTyEMjFBSW2aLhxfVey5BAVx69fi8bKERPL8W5HjWNfBVuyJW6",
  "key10": "2bd8tNKLJqRk9LfFPG7JJjTomPwnN4NgTH7r6s3GutcVpjJBRQwsnpAAdT4ujum9oTuT2qizM2WnRe4V6jrQprTT",
  "key11": "YXsnSs9hHVSpvVDqpzoZf3Pge9ezVYdK9LXKMDapami7ah3enxUK97RZaefSLQkgGx4SFt87ZnQ5Yyo3HDUz7tS",
  "key12": "5ymuqEvp48k6ct7Mtk5QAohqDQc8MVZ5K6Nvvxc1XfNcEU6TDbWq9EMHik6VKJitnA4DcMMBu1TPBzka4zZ8ZFrk",
  "key13": "SYqFPMddPM93WcVeyeoPW611Cduc257b7V9v1aFH7pq83kpFZdDffoNpdfiVxgwx95gxVorRFV2nV5afUPVxxA7",
  "key14": "TJ84ZGdSZFFEdhTwiyMdrJPvDpPeEFoL7UbjTiXUZThBpZmJN6VuTa7ZwMULz1UGQvHCmfqsJyC7S27YSd9oXmz",
  "key15": "5jg9JTqFeDQPP8oZF3TL11xJryjdDKpGfSroyjohhfXhGGjBGsggsxwrmp4PLz7un2AxjpdmsWBsT8qVw8QRB1qK",
  "key16": "3SoVPGJm97GQvbSifn7c4cSQzSTSEncPC56F37PUpACZzyJmKUzoZ5Pd5MwhyAZmtjSsMcVyY83gJfazbMooMgcb",
  "key17": "5cb2Kj6F4xGNWaNopMHpKCwuHu7gaDurrGxeSsCHuaLotTtXV9NuKs9TQoMzzeEK74ubXimK6zDV4pHpUgxft9Hq",
  "key18": "5FFNTTS4KysmeJg82KzWw51eMor2waAZDzMC4s4qzFFgtDruABL7eyC3Q6MHMCRRE9jDWaU4USYwbJoDm1JeLoGU",
  "key19": "2Q6anGUy6KRL7HGPUTC8R6zpyMPkdzs2jdAHYtfyjGZpT2GJpgVaYrByfSZuZN8Mjv33ZAyHnmhXdQxeyKs195Cz",
  "key20": "P7JShixQgdneBiQYYGUqemeLFnqfxC7EHBvPVYNbKEqwVGTdgnQxnRinNmw7pBK7g3tuqNPjdSxqnYPyb6ELZBN",
  "key21": "2xzJr9DRJkc9imyMBVwM4AAnyGV4byio1nSDv3Xph3hnAnc4tpKLdqMuEX1iwgmDmci4QJo3t2xBdCYTHvtdcMnU",
  "key22": "4vc41K66VjNm15A71MjtZhqkWDbAYUL4X5YkTuQZHDwnGrJRR1k5ULLx9ZubwBW5XvkhCX7tKfb7bHjdktJwCJv9",
  "key23": "4Qp2286yufyzzjrUWzcKqikjPoLxqkditysc9TuZr1uHUTuCDiEKK6UidTVEpALNCiS4AwKAQN14s1oLmo5m4aeh",
  "key24": "5DvwaeEGyPqcic5Z1Tcy7VBmrmqNr9m3VmtwqsHn2GFJmh5VMBMfg1r52DH38FRPKN2ZUKBDufMKZAqqxXV9776m",
  "key25": "24GdkVwUbHk7GDN13L83qpCEfWqp3AUoTJVXdL7H8fjSsuDR8DCPDi5dKA4JL1wyirKi8bw2x4LQCbLcJNWjNQ3k",
  "key26": "5M42qTJCR7dh5nh1fTppNsPuzWpXBVfJ6zcXrMt5Vzp6oL6AktwSDjgEzexLwbKiK3RiXwjd7MhDxga4JmjZvoQD",
  "key27": "ArFYynCmmyjXFEQBNefESm5tiXosU6ZbuQvPZsH53eyG3BsY8obwQDKjHCwX2mgFmkH962zEiMaSzKPf8YYb1bj",
  "key28": "4p7bjyYQYbiSxt5VL28PtixUNKJxYBBgDryymCwZiME8CyAz78R1p7w6pYdSrw8r3P9YCRmxKQjpDrK8W74jNAvo",
  "key29": "3DVxtGUF44YiD6VuQYTj8jraM12E27ciBqa7Cv7Vuj6GKhbxviYXUDanwfCtxnRHEKaDiryjvKG7EBkG9JyQ1YAj",
  "key30": "5DZQEveeeuSyihcFy1xtNN6fHehbReChisVSBUBP6S2NCM5YdbDaDiy5iwqNkFRzgZZmnYngeyN3F1riiC6wbQtf",
  "key31": "eKzqhwKshJJPHPN9ndedKvL2jS2brbBKuSormWTLeE4xonCq8zUpGu7QpPevYStYV4zk6KDzokKbQhvcf7bLj5o",
  "key32": "3t5LGY4dsTFL6cLasG8V5wyCXn1oajraCA1ePk2ZR9HA7vqZmEhuBcva5eaHwovuorki5zZy9MvnsELH8oxM2gnK",
  "key33": "4a3MkzaxGLjMNbRU3HRAFto8j5ZrtW4nB5R48GyGYreN7pyBDHYrKXLDzFH87s1gQG7jW3ktmsmTwPGEvRQ2uBzU"
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
