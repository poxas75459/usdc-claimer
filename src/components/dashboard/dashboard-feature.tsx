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
    "4C7ZVkpJLCd5HTsdTPYiWP8EXNywde3ZGgcBGk4iGMvGfgbUwhVukcxeJSijUKrjF3QiqmxEYs4yaWjdfWkFN4Pk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qUmXFhmSyoBnWShmMEuCakSSJDafPcqwmMT2fo4A7YTuv3pdRQzRWLuQfqVBkLN6JCoea9L3cUeuTE3gZRQPg7r",
  "key1": "56zzUoo5xK3W9Jbn67GhYLU5deyicdBAc5t6Ex3V6YtGwFUqC5NJzBT5bMYcji6u54J1g158EN93uKiwxPzMGWeD",
  "key2": "4aE4DkBLdGBhYLShDgkVXHGGzuFyL6NHWmZfr5sncNmPteUd3azwVb83x7V5Ess2Jp7D2rrLDgnNfFFYvrG12zUE",
  "key3": "4B5EbviX8rP4ee4CF69yANucYh25JsjQaEitgxdTefcxrC6aNXe1uAuwDb49WTCP6etiVVFGAPDnuVLApig5nc9g",
  "key4": "5Lq9KMHwCEPyfUBbvTGPp1LQhMqEuPNGQsBH6Cg1yfDnsUpySW2w8xZV2Sgczjq6P4KihnXCerpQNEXpgh6NaQoL",
  "key5": "4hhHzBn9WfpmVznZEPYv6jPpswcvkGATm3u7z5n7dszzYEwpy3Z2fnsWJMqTrUXZ2YiF6Q3MUyzUTstMgMmWZJYT",
  "key6": "637wn7KQLzF2EpyySdsKEHmLJjfZZTsxYrGQT52g551vgwxTce5fcsBsmSCgncTaJaqupUBNNZhumv7DZhLfAFZo",
  "key7": "5Hp9tUfYBNCp3q6kcjXGSRnjCgSByUfgL5gkA9ATNFf3Q9dnDzHAWg4BCdrAzGQjK6LbhnPA6uce6D4pBuorfbFT",
  "key8": "2ZKFMs7HmCd3xbAjX6fgMhKy1Tp9fMebny5UjL5wvXAvXLkBm2hXsHEhNJXmxqhMxqkrp8Wf4rcYWGotLkS8xL4L",
  "key9": "5fpMU2jxynHR5Tqzeim9BjNZv2Thn3ZjjfdQk5qVgL3o2vUaDi8t7bVhBAniNGMCRXQtoKsDEoXm75HFVDuY3Kth",
  "key10": "c53AuTJeYPgzkcRWe926dVpxLxQKfNLvyuo5fTVTm2kfrcQBT9YvZ2SRthQ21iGJ4UdV8rnJWT5dHKrPmHYh68N",
  "key11": "2fRgV8BTSnkiQ1xcxJ1midrk55Coe4Kd5a9CJZPC7v2AAuFSRboux9oMqxhrfPN1hXLVZJLnmibf5ZCrmhzjpZNZ",
  "key12": "ada2JFayGWpwpf1EVNPC8TQto8AbqJ7WvbkNq3o11kx9ghVd5YkuLZ53EjxbNLc1CdrcrJGxtQRvCxAwYtWrurh",
  "key13": "3pxg8YFQ3HbVudSRd1pKu2U9zs1cNqAcqg9pDAggs9GjJ7gG9qiNStbCbGdRfs8Hf1wPyUoomuhpzcoJcKr95Z5T",
  "key14": "5jUyPunZ7TzuiNMKC1BiisVhyTJYupmC1ATBYAShdJLJZEZxGFbCWUiw8diUgtYfEUL4MXUKmY2sVaiad3uDUrXt",
  "key15": "297VeAwsK6L2CPauDieKPsSrwUdRPP2zWutGAKcXHuax4avir5Q2P6yEGsdvKu16amWs1GGEFaPGuQVZqtn3xQvM",
  "key16": "oCGLAEEntxZCLa4nYtSzubVMb9a4CiZprF1bknRFk83DwqrgSsQ5d6QPRqyThRRBZtLzJnXfMhXh9aiFH15AAPU",
  "key17": "21FyTUQTMmLjb2qtXGSHLY6zUbtj2zKQCRHUULNtMBttfFSFWBGSo8PRuJ5e14wCeDkHLZvgMVu4Ae5widovzxzr",
  "key18": "2D5Wkwkdw69T6a5NyVayw36xD7ePm6rphxf1dYFFyfwKzZWHT5f5S5VWzjcmeRF1NH675vv5Nfk36QeXXud8bgur",
  "key19": "4HNbkVrhahoTVK5AjQZdgsdqqxA5HL7pRiEoNedMJpyngjCQfCitpRrxz4xXYk1KLmDvw4TyoAQdbe8qApYWidDA",
  "key20": "5i1U65bUdn5UYYH3e5nnJaiN97nbLSK8f75nHFFoW26y99JSakcwXksx9oSYs51ktcKNNGZ9ha8epa8efMnmSBek",
  "key21": "wyD6LDfzTXadGpmNgYZSi6kVXfJN11C3nVkwSaya6QKKurVnqwoAPett2VJQxPUoGVxnqSZf3ohvxGNXEiQATPN",
  "key22": "52PWU5vHb7Fy1E262aZbC4vyLogonnuQxENXwJ8GQaPE6hhrVRBppnpDATQb29azBbFantDnGghe8ikDyqE78s9D",
  "key23": "4pVoh5zcrCST9ynUgS27UWNN6RSpP46pGFHndVH1J2d3X9rA9xLXwP3rX6CiZTEWiQxP3y8EpKVagzQhpa5E3Fo",
  "key24": "ssebTA1i52WsbaabdajD3Y87XSbiKKSuz5xgr2w3nDJfcuFyPKXWbnCgaFiCbWTHGtD4EMMZXHpJJp264s7VqZw",
  "key25": "26GEvLz1UxL8exNXxn2iqCyYtF4rp6Qc8tQoZV49NWYYKRdnAc3eCSgbWsNg4ZUSx7th6CTRmdZ3YZ1JCy1V8MmR",
  "key26": "5vyjzUmuZfs7cADN63wPBxCMj4MNAQv3Y4pWjQ5KykEikUYEwfX2No51bvkea3PQhqnePeXV5FbtKZ94z946gSmr",
  "key27": "5Unn5qBYVVCXCRhU1pWKHKUUetqSh8Q2x62PxRd1c2KCxtsDjVmyzLtacNw8xHNVHVsSB3S8V6ytYgY9xYSphaKN",
  "key28": "5eWXqwskaHniATQR9bEEwLoHGZJqdoxKvgbBfGjj9iQ6GgjESSrX7ip6jXNDtrht25SVC1Z7uTPDoghsiLzNHN9s",
  "key29": "2V9q9GLLVgQpZiRzPQHJ1xUfXdtsKFPeCTKaNwtks6zDJeGtupnWhPyi2cVRLRhCqx3erHCJzNxBvboSuZy47e3z",
  "key30": "5kHjxg44mYKVS1iMA7UGy6RQL93gbdUb95b6ZRXX742e1PSKtpQBNwqrnRqCjoW4PiZA4RBw1Y71bvpNaVgyExSt",
  "key31": "3zJm6HhUmbr54cN5FxYxMGouGE3RTuaJwndBeRmPZdZ45rXy4VLAh9BbHWDmhLXDe5i6NpM2txJ4uv5AnqH9gsoa",
  "key32": "5zD71qwhwr4hFoH6TLJGYxB4ng2aHKUvr1tFTPrPJMS9giu7UiYWuYcgVdfZkZcny6cZVDMZn9UqYVQHNYeaFotX",
  "key33": "3yfUdiyWTXNeWnNCG8TZvw5utpLg51eBDaQsgSgpvAGfFBLMXaadBYYX8rR3vBuvStjMHwDBTQF5PRgyzpMqE7zf",
  "key34": "26mYErTkWUe9dD9zLbd44XGtivApCQ5PcQewQzApggczLQLMGs4kEuHqWHvN2ANAzvchhhzqMa2ufjeTMYufQbhJ",
  "key35": "3uTtmk2YnKEiCC5XXim3CzuUzSPfrY8Q8PZLXjfAagzFd2r3ngfeCwkfgBUyGPa8tg7XGeEX8cTh8rYqMQ63xeLG"
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
