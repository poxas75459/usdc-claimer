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
    "53Z9uqzqQoM7sBr1jVDd94tiJrEqxn8G1nty9xdeneUveyLrDhkbFBAqr6kasao5SGdeEeAVJFGzGRNEMvn8LtXa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zdTgv2mtWMF4FkmXh4DzAjPigNNk1WvyjRH5gMQsD2BGWG2tNPTcSkQhPRFHkWBUdqwvPHuzQp59fdvX93vxnoB",
  "key1": "33MHukLsx8msungBfaykTrJb7yvC6eWAtshM4yvHGAFNtc4HCbjYSTcLPd1ta7Q5L3s2txWvsacr4nUQ6HQpxEkX",
  "key2": "2zDbwhNb4WbbCFWE4VVi4onWpdpFTP33KVrMrGvB5MZ78DjNBv9dn13FvybghKceKd7jFFcJty8sEeLFHKxgJDaG",
  "key3": "3uNwB2jtrf7YACnzMb4uB4zKuHfufWjpMGEWjrNtunNtpvDKHhDUcQkCXeD3Hg5gkrFTviQKXyNK26B8vPqWy5jg",
  "key4": "3Go7gcjn9rZEWYR4T6FJ7FyPLddixHCPZPXyidV5t6ZRbow7VPZ6NSqPRsbF9GsB8d3yeQXwjY12tcSbfE3MbHHQ",
  "key5": "ub4T5U7F2vXbuc8tHatuKBFYDs8S7g8jitb3wnxjtS3GeK3fLD66f7TMpNBxLLL9MUiVFzJA7daEYQyvLheaBYT",
  "key6": "2jFJAEbiGkFTZWUSV6hafrjyXvsXkub9oTvFrAhs4jJVLHHe9oaA5mFFMW7YBAHPYPLhERDb58dvfQPMr6BkDtkP",
  "key7": "5DjuUKEXLRnVVnUPBoyUGgECQP5qMJXzimabjr8TJJfztJbkec8ywRmAqq673c718UdAyNztS3wwm6PiC6pUFwtE",
  "key8": "4QmdZJyB6X823a3SXQFqsDRNtXSbMeuNLPEqa6DhfgVccJMMukQMUv1sGwph7TZFGLGy9VrNS2G7cLjR9gyfEQ8Y",
  "key9": "3JEzdFkNS7aPCkVD5XU1MXPXPsv4KNrh1sWbgiUQ1s9s2Zpyf5rpeD2UvF68EDjzpYjkn2yYVr4qjZ4GdSuxeW9N",
  "key10": "2Qn3wNvp3E5hc2rdnf3uae8Y6XLJebZhELEFe2F66JpYLS1QuBUTJrrvpbE9pUichSQ5oR1uB3D7XZJfYSqa5noo",
  "key11": "4SykDigPhxHy78rPGNiCMa8D2WXmgWmekS4eAhz34MW9xBaaPhYjtLE2yqPKzUJ2UMcDv2Ye7iuEvRgU3Xyd5Y8W",
  "key12": "kyJX22n42EgLKJp7n9ozqNwnb6n6VkQn4y7qr9YZ3Cdzmom3Ps7DaSpJ4r8Tb5PFxBnQ87xQWPeAHGWWGvZkG7t",
  "key13": "3EVPkR8g8hi1zp4gJCuXseWPEBQaRBa8J2WQXKZzQ8UM73hgo1SP9VphTyywUycpkuEqJzmdErAfiVFtoYddsAPV",
  "key14": "wpG9e6T4PveiBgE8oBVZJ3R7MEKZvY8CtYDEDWcC29jg7y337gF6HUhaka7bsYevbtfZYadf7FDTWGEyEyRUTJp",
  "key15": "5giCKmvRH9SutcVeh3nPyiGKr7LfekHwG9fpU1H2KRYwWWKDABSuDQmCNLUimfWSHssbH8sgrCWLgCRibnSXknjn",
  "key16": "4bCz7pxo1r6VGmdBVNLHDjfRYZFkqzHh36DaaaxnRCRK1XUcj28qt2TvriUxfSYStTVDexGdZzKLH2kVrwHBcUjw",
  "key17": "217z9BRs3oc45kNymGNktB8c87qUXZ8hwc3f7ePEwt8zd7Tq93MrTe4VUjZHNEU5TEncWKWMCGKdkaPn5DPTtNaW",
  "key18": "3enXQPeKbtZ5JNuzYMeS9BzpM2wWmHGWp7Ugx34bqs6qMPSKENfbV4z6QiKyWBkf2KDfSAGx32zfeUTfYpt2W3ZH",
  "key19": "4TecRQsTcmr1r3hJs5q6xHts3ibWkiR2LfkRHTkbcWBurfpBzXbGu7BvYDU3UfH2cyfzo3FGYwDXUA2ugA8oxEf7",
  "key20": "3WKK7rP6NVAxkbFU6EgffsMn1GpXsA1kVtdr9n9s8g2vS99gt1HE6N3yiR441V3jGPq333TLVvo8WTn1ip2cwEC1",
  "key21": "4B6rxanr8pkC4TmhJMRuwu8jZjBooV7UuVNDaPqL2mX4U7oFKTkjryWEwQsRr3psQ7h2Bk5i8pLPjMcAHPaE41vQ",
  "key22": "3dT6qGZyG1v4gUSnu7FKqTXhaRaLm7CzKZiRSzNWkQQEbsVtBg6FxDGPdxdsg8T1LpxSQ9HgrQcd2CHkK4EW9mrP",
  "key23": "5F1nKUZ5LW6s6odgCuoQKACSN1RLokAE5V3mmbZY9ABLPFKNAEYftHX1sjShuDtAo42Yv8W5QMygd1rbyGh6GoNz",
  "key24": "2yNK7pgTACKtidnqseXZoNDVx2LjvTUBpkH4qknfiwfuayNisUsthFUBFNyaCw4TPLH9CbsWtU1UMSFU8UZU2tMv",
  "key25": "5MLeqjgApk41YaZPxSq9Q6cB3rBtZuw6s4BYUvf5mJYU6VvDYiLXb73kzrmBmMAu5Pvr6omkWjNH6Pfh9QiwTrqx",
  "key26": "3tXBDyT8u5ahSP44itoTXxv5BDE8CFBUWzMU15zZ8PEqeqFaX25BJw3J7ggbWsLZYcc8s6ZeJextVJSUhu3n97cP",
  "key27": "44paUSzakKU3dQzKHe2wa7qyBaHdGRgdusP2Eeca2n5rncbA9ZASSy2h2ZWod38Ycb4ggEqM7Xe1p5xUUMCnMHja",
  "key28": "2TYxe6MzKCTxTRfRXkEZ1auZwyVvWDT8uwG2bGqzREtBCNag6o8gNwJHNkxSbmwcUeCEsiYPxugeXS2HKQN8gmXA",
  "key29": "25Hs3TJuj7m1K58MyaxpAGas7BkLQYg9xbjFwaQ9XV5zM3ZfDFgcxCTqCZ39QjQZxM8gdSzWSChyJekUJhDxtfwF",
  "key30": "7R47Ainu1kXwpQo2CSr2U9BkyswVVpcmkBzTsoQu19Q6fTWHWnUhKvYnYMYHCQszo6VosZCM6sravBYay47uZjm",
  "key31": "4gVuow7J6VPh4e2C63dy3hdYcwMNDNnLupoQNrsZ7BRrLMxGjwb4vjTiCUWgNVaniYFK8Qut2uHvQCrmyx3Jd3mq",
  "key32": "2nmjWgbiMQKpGG4ZXXGXvMzU1xcDjtREaqFdimKGYLFshMTvSYyNJ8TUTRWJp1KA85sKfy9X2b72M3p5Ts5sxQMu",
  "key33": "2tt6B7XB8vUmsrtGdZLd7fCtHnPgptZuHngF7hExNR67QbvboNouf6zM7MopqHRVWFrFX49vFw9aLyBymQxAQTpr",
  "key34": "8zZiuyDhxvfnwncMKZPxjy3d9274cbA2nVYnmsNKm9PVK2sZapoSbrffBJSQsAizPQC4cogKXY3mV1dxTvpmMAX",
  "key35": "zYeezFqfRWatRUcm12FAR3subJYKjMZVquVn7rMUecmD5mToXbqvL2nJvrktBKdvFd58KQjTdxkLBrBJ2PZvzhC",
  "key36": "6RBLG1Rb4Nz9j4myQ3hg8LcxtJNJVwNxzVkqNzt9xLdTUcgm9RKrwujHSJwBAJAvxheMk6KCrvZRb1c95Upv7Bu",
  "key37": "wdSbwT5nUvMZsF5TJwrm7PLkTzdX9gyaz4i42o97isBm3C8nZgXLZ91g7r4dr23J9RvANgg4DFc8TkmH47PgPcm",
  "key38": "5gGUEHCw6PwrPPtCotFAWZ2KeTnxJCrHUnETzi3S6qJyMU9cNXcUD6JVU574zXAD8ZFRfc8n76iHqfyJuWqofp5o",
  "key39": "2pcGRRC4QrinNzDWEAVhkW7FmJDQSTfoLaovhrG3x2ofApJaRbShaPWvgPiysYhFz7hCFeBhgRMAYP5UmVhroSQn",
  "key40": "33y5uKkiB7ZkuV4dGwdrhAG59UVJX6bsgiyeBaVnCJ3meZ95spJPZ5UFE4Uu6QBT8o437Hjco3G5J3KEwm1Lvu8r",
  "key41": "WgyVD4oSdAi5FqDY6kagp4apJydUJyZgyBBefMsuFX26cYf4w3sNStw448g8s4jdEbA17uWpeC6VKceF35xMPqZ",
  "key42": "KFdufn9TZ8rvkuvvTh67xJrFFkoMRWk1tPA8BLhJE49yCMMw3KbRS2Rf9VoBDGKNMSaZjMvApgG35cDoufaM39e",
  "key43": "MX56JaBVDBtqi7HrwUZPphYkE9M8GxPpVYtkxsk1wv16iV3B3WSkuPzZqERHFxujW9Ep7bDtWLTaEyEXpyCYPqt",
  "key44": "2vAgbEQvSG9EpLGFXpXSxWNjUh5JssczDkddy9uaykLVAu1TX4bRF5b73dh2R6gJhSfWzMFYwz8NtMPkMLydbd54"
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
