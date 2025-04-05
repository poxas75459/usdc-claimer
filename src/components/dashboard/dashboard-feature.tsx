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
    "dE448X6YCYWLQuSK1XK8swgZgYs78ztK4ThPDoQK1aTtAoMrc41Ch7fp9grED4EHfQjaFnPqSLa8vUgPPo6VdL7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ARycTzN7tASeXMedGEN9h4cFhHmMXHdSCYDkG2kusvRYJV7tLyAY2kffa4hRkq7BKoGby2EMkMAFFbHmyKYVbRD",
  "key1": "2MiMpNR3xFPxmVY9nHmfMsSTGajzP7vH2eppZzKrfHG5ihJaEtWFMWQ7XPnWFDrcPJ6r1tZRekhGTMUMbSEJvTUy",
  "key2": "1zNLui21psE7grUQ7FAA36Vqh4XdkNdLDgG5ndi7b2EpGukPsKW46FqCCakoEd6Zb1yN5mgU32REgSQVw9B91TV",
  "key3": "cMsoy7HoMArdzRVbkCZjmQZ8JHyLss4SHC25HFU3AzNjpFi2ZRG4uuR9Emv8gZft5gAnDktabjMKpmH38DeerJ1",
  "key4": "65e4fe72QxjePwF4KZEZk7tqQbT3fPpU7a1eFBfGw3Cua2yLTqadsEPuwb4vhup64fQ4PiY53NMfkmiXQxZWkPJM",
  "key5": "54DojyPygT8KWjoVFjwoEAr1aWaKNbSfBwmKqxMthTbshvBG54mYsBL7TUuSyuMLucJ3TQr1xWX6WLAWfhiKxPDE",
  "key6": "3HqE8NAWQjqvZpxymJRPSWPd5nopquiDdQd16UCCY3fJNyd14BNBghtK7wvgpkqh9vDBANGjxyjFvJPyQE3a25UM",
  "key7": "2GrmCufRPd3bfxPGrw7aJ3KFxtdtEHmzniZKU1vGq29jizCNVhJNEwYY3mxGqwQDoDjvzra7aK51qwHvA455TazB",
  "key8": "28VJBxfhkG9ZHVXpKpAc9viM3tHgCp429Lm8nseBzn4a3ja9dppaQgBDwpMYzJ4tQythD4nruVUacVFea5a5GM9N",
  "key9": "9JujvPnykgF1HWiQ1Jwx9JPib6nmggX56r6MkkJ92qUE3zQuMZTK9cBTVsCFVpfKMoByzVWhzJ1Hf8fSPmBXVZk",
  "key10": "4ueMQiHWyytnupYigppCxTsLQtNNqQXzouK22y9yNfi4UKbyuYBLMVHkwhr54Ek6JSkXw1TmmWZWGYKPzYgfxJYu",
  "key11": "5v6HxPZXmB2QgEW9Ubp4o1r2p9qDeoB39B1dFCUw7syhRes5CVUe6AcAeS3pEVTQTJgVcVtfJoDiMUeKCXY8g3uD",
  "key12": "3wY3Hh9p8v6bW8SQFWJnEF39QxuasVt5W35Zo4HfCaSUNhce76drGzgRgu3jCKBHqBBKWPudPZdG3FH9ff8Yzban",
  "key13": "SCCPYwPEehst6mkFhYZYiBMtzaF8M696VyS744am3xGxEfWSmti7msnNBTzSrcN5kRKmZp3ogg66fChcYyCtE28",
  "key14": "cYeSYHk4YDUZ9ecE43U4C3QmJsep9QzCbzH7Yky1fCg1L7vdxiLfrdSiKxRALeqrzKpQTfC71eZ16vHS8Fkzvgo",
  "key15": "7dymiwQYWHkQmpLwhyHx6BZkqmacj6TCH7gdAwRa7YJk7MGMxL8ytzRem5qUwPx8TuAUxkM1FFjNBxfNm9KiEd5",
  "key16": "54Z2HDDrtEfdnAd2x59j5tVrGv6PzEmxAudFauSqH9XyzuqyCu6jcNMKo7PsxFakk6mPUq6aUvkbydyiqREqLGMo",
  "key17": "32oyKosp7QAan8h4Fn9U7yeCmZUmHQE5hNdNt6qD1vGGbouKZLYQTQ6cEEHs5vieKpzUCb8vt1WnCkLYr3GjcUB1",
  "key18": "4mcRu7VzaJE9QabfaFNAgwhn3GzYGsCSGNqFgDTTbACezCfY9eYeGfor2XPR2XfJJJZKV6sMG4cKSU24Wh8ZH9md",
  "key19": "2p6CcWgiXSYTt8V6LtPGdogUkBfeQRSuKXdEbxA52Bq25GwM4Em82yrURcwgoNvm4SpdDMcGsYjjoNoX5eP2aiuy",
  "key20": "owg9TH1q8LyyFVe4mYyXrz8R7EWvxjDac5h9YFFxbb4i9jJCaGyaXjpRx2x7UTs2PedAW6SjP2nYcriQ4HWqWg5",
  "key21": "2o3ENC6R5dzkvj1eMhZVQzgiHvK5DbhWvqtbXfc5whr5jYG3YAd5KJNYYdDGYrE3qqY5TgYqVvDEBhAk8oKAPVQz",
  "key22": "4mkVCJ26PTpHZBk5ztvPgqxocNhyKLzUs2nMpr7zwoMb4W2hJZ6kMPMkXrUGCSv2KhHPd3WwRjRRjXcwAhN5Y7Lp",
  "key23": "2hhp2oafasTU4Yur3C8XmM3uT9hbd8m5XVRfeYs2Hazgr5o3xjMxTFX6qy4WUTjX6CAf9NTts3ecBxrBjifTVHLj",
  "key24": "yCmCSHGNjPhxNhCZcQMoufoVtWTmAxHzzgBCQoREV6Nf7xepccPRWUzoFRG1XSSCFeVS9sVr9WcF2a4ZTYkqT89",
  "key25": "3vnWMusTD2fquW3bcG6wcemBiY9fak6afMZP2qCFZzuMGLsQFh8EVSRXVu1mseFZrQ84NqzDQHb3t2BUHKYzaLGd",
  "key26": "2fKyHmFrd78hQDeGk6Gni94E6sqiXhnNAUcNGiMdSaBYeUzq9sGcEsbt25CG2bD2Tx4dEJnxScJF2kev4Lez3DMQ",
  "key27": "3KeHRdn7exGDS3JVnSgwoL5QW4BLR8sjaSnVTxXfaA3B9Q2P5JQcS45jc2W4oX7YvBWXTWA6eLiqAfgopPdAAubb",
  "key28": "2bodTe7uzPwgveRznaPYWxy1hF8W4P3nLVyBAhJVP8ozj72PbnV958EwsrqWvHpUNT9zN5fVEsEQwcfSKdxhXd7D",
  "key29": "48d2fBdtwLdYFX8rXMdYWt1SizK49eDy3p9j8REzApWwt7MwoQxLapnFsYE5R1opg15XhrXyDNKc8bQ7nD2ZjZ6F",
  "key30": "5GMJzjpFzw5wYRpbAbyMB7bHLbkBgGYWkKhpMjASMPrJ4MhXytHWbQPSyzb66qMmrz4KmLCRMw7SzG2Yz69Wof2y",
  "key31": "29yNYRaMNi4WUkiKL7XAXji86eCukpSVmbfExCHHc9jmH2HV3TZsUbwuTyKehZmPgcQ3P6aFWsLkaFTdgVavCBG8",
  "key32": "3gdgoAhELDw7hbgtFNxVQRgDc4CoPg9GQAWXxwK8bi8estCH2wmdLYvzJnJCYnKDGQyBsUFwver1YhmgcgKhDC2j",
  "key33": "5gYHz2K3kQtzzMwCKJoAq2Bt4YeYdAHexht4vQGNZSuvKt5kEboLiRj8AD68J5kmjkJU1d3uQSEgsF26mRY5dBhX",
  "key34": "4na1H8xbfabmCX6LgQrxVJacgS2u2NBAKkxdikUvc2rfhcwDXeGL5eMfbC3aT62XNk3Ds8UBBm6QbjtANBaFvnjm",
  "key35": "4k2ysBNkjRraDLYnRLsm2Pi7wsb8MK3LZvah8V66Sk1ksETp77VvYbfYcpy15dsFtQZtPKAFq9gdjwsXh7Yb8aJL",
  "key36": "4Je8pYvEGpfuzkETaMcbTAQ8PU1zgghof2EA2ewvVTL6bsNrQQXMZEfCJjZd7He3V4eyPQGeFJAzkmY5EJEXTivm",
  "key37": "ACUhCTgLq4ZW8fLxnUZNwqFrmFHajrLvPm8oEt44HeTjfYibtEgvkmHt9NuDAyr8E81kRgGF58yUFPdWdL2M6uM",
  "key38": "4hK39basaQZfMnszEAfnGik13Z1kJzpcughDFKSUNwwqPYH2x6MvUGFz2oouQknipHGXkY1cSqmEuGVD2uW7wnvQ",
  "key39": "4Nhv1rXbDbDUmd1AaiyP5PYwfteRjtUvvwLqRX8YsQaMP7r6xkjYDjgp5DnVtweg2zAY7uNZFZZUkq8K5CgZyJGB"
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
