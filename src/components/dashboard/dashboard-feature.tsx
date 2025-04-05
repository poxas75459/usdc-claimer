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
    "KgHL1uTKXxsajRhFR1UTfEbnw2s5KaJsE8GceVQ7ojpCAUK2Myksds8ZcnvouxzWxDTdyWciPp54JJCWS8NRy6N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HnwjbgwvER27Yf1nWeSzXFngPcxaFD1c1aQvvn56K5h9GGWjzBwGGxbzAB5zDFzPj4P4T3K6Nx6Dh2vhWcTthfC",
  "key1": "4TqAbd8jKKwDPNXzHi1xutoAM3eE94RG437TstWX8AbekUmwQN6BB2dKQXwRiWFB6iWoufdqUHqZohA4znSX6c1N",
  "key2": "m2tuLwvDVQmruMPStwGghT5cUQ3EeV2Q1KqDjZMdZ5JE3KEqHL4ozNJYFsDvoqgc2ea9TmDiJizQvjHu8AXoBJ7",
  "key3": "29NbHokPJTuaoZfyeEJW5M9UVykBLDNp5yYsgTSkQrbuRkUUDWZnH24Ek842aEhJx34nTupmhhz6MwxGkgB6Fyw4",
  "key4": "5N9vHHcKwLcVVRA9qDfGT9yyFckjPiS3XL8rW4qmXuXTShiSjoJhGs8ceXLA5gKStttNgZuR3HVLZu2vsLRvHQi5",
  "key5": "3i1SjJw4G3Sj6LfFwjG6hm55usj4RpU1vWdgaAv2FcpLBoYHbnYu4Jkn5je8xJZvT76ruvzdAAzTywwANcDUcQMi",
  "key6": "3AjxcCH9ZdqSVghwWYQVkkXXmL2k2BiKkwPwnwonkdBfv2gqmESe4y4qAQ9cci4gVsfqNBPXYVTK8UrY1pUC62Gv",
  "key7": "4YfiKq6cKvqrf5PE8zqVCNRY5UhBsADAgkNp6DqckkS4mTS2wio8X9m9DxpWDUyWU3GJ422Ne4ainA6bxyXSTssr",
  "key8": "ww66hM7m5LLgeM7ixdGW7UJfcWTGALqXPTAGM5BCGWp2rhifntm7pQkkmipi1gjQQHQbdQSyu2D2Xg7NfKUy4Ax",
  "key9": "2dJ5MtrdAiKG1PDeTLJcY4RWPiCcSdtU8KpNH7n7P26zLXNGnTUawDZYkAnNfNweAFTyHzeTJSS4MrrVYh8bNCUD",
  "key10": "5S1eviqxzA8nQTR6Z42vodFHBoNBKibycYQU5Fn47U1RHshZTHgyn33kF38c3rYnaftRi6BaF2uQpWSu4u6DU6po",
  "key11": "2bQdqugPC5BMb7fFpMaKqRXrfTCweTUQJ8XzbuRaXGUnDe94Uxip6f7kADxkZfTi1Pq9z92prbMD5Z6r8Z6L2uhY",
  "key12": "2zo4m9N4Mh7n5FqW5xnCFiuQFjZNrsg9MkTts7wZBJPXKJS4Uj1Vek1Zi9Sspi1QyG1VRM1xFYgVkQBrdDAHRB4M",
  "key13": "5feycHFnwR6ErAPVE9zvtChJvBK9nmn3TjF7PKvKjNKPRVqHBd4W7YN57KqJ2VnPVx4hz2BNd9BokpVH2LqBW3DH",
  "key14": "2vMBV9zU9P1tovzYHhmtAxGSAdgsrE8CAPJRqWKadtMV7xFrpVUWnh7Wd8KANSqVhb7Sy2bLXCawq9LjnZgQX3Bc",
  "key15": "2ifPpyRaPLiAmEwGU29w4tzLuSPVVxnGpoSLdvUB2DxkKqRdrzz5Z3UV2vgCVN4oLfgLNFNf3pttMVSXAeD4W14u",
  "key16": "3mThkqQb6irkVHmhUFcBFC9k5UqDrpxhj3Eqz5Vzt1u99eiaaTT4NfBfsCcXm3bBtWWq4MnrX8bZ37S8vAajX56q",
  "key17": "3daujioSasrz6VpZLE9f7ogtXfUsv68C5C2Ww6GFLmF64PRFqi9XekecD3e2AxPYWveoFq25yDg8MdkM623vwGHi",
  "key18": "5TCvgzqgjC1VwRrv7D1eihrxCosyUPJ6G9ZJBCrWvxUk6Zdc5xTRUP6oM9xN6okiRybrCyTU7cnPthrj13uoJZh8",
  "key19": "4ptSGY7Q3tvJwqxS7z1iLADmRk3PLrPEJbh6A8REWBdotdPdskwwct2B3Jvg1pDzjgDjFrBn6xYp1NkQ6L58St5o",
  "key20": "48QzLnbgQVctPNPNTSKauZawzQrmVn9XcZopsUoEDJ61oGfKuK87DsR1yvNRAxhh2Gjpm3KNgRCP5uCA7C5kuWvW",
  "key21": "2smCWUdZitob2LuM2jy9FdhdmJ6xKrUv3oaN3AKCSJ8XbA6QQKj7QEnngVE61JXX592gvzoPSqrYiy81ijhEumpV",
  "key22": "3dNPfsnSgoAFng6Bby5EJj2XxkTDPaiKXxaCityXkomMjLqfnULk6hFwWQF3Rtb12BLeP56qvG33yucKQWXSW3u3",
  "key23": "5to9U5wikpLKiP1LG3VJta7MWBiJkE4quUj8gYwnJsRTSCs9aQwY4VVKPJREc8KWM7rTB1FvAwBn6PMeDujwJE6u",
  "key24": "4bqpjyDdQyHCMm6zHr2PrfzfSxQShkWKVqNSTKpqYPVgeme5ksweSRwxroYtSbd4VjRuUeQUoKCFYYwMjDWf7k3G",
  "key25": "457DtUeY2eY7KyqnsDw9EUs85Xaju2Q16AL5cXzrN4G6JTd7g9eA5gK6vqREhE28xrvHgcidrFv8e2tz64iU4Mps",
  "key26": "3m7b66S4cUXimA7qbppsQiQ9SpAfhbGcyWr5xr3cMuWBJdaPd9f18dp95uT36fn3EuNxCyu86CASmhwgDV1jxutu",
  "key27": "2oL1UaioXXbmW8W88GfHpkSMQTpqj93qq9v7X3CbK9cEr2voHy6GVp2eMsHFucQA8SL571wsyxWhpWpFUH5XUxsh",
  "key28": "3kkSXcQmUR1yxaay7dy68JaeopSugJ6WNKTUKMmma5RvNgTWxXw5TRVdUmHNVxSYFpgRdyjsBoqLvr8qsJtxY8NH",
  "key29": "3rGkmvbp4zeduiQPBdknw595wkXa8WMsXgRYJKQCkaJtVWPqmbEPwuAzjZuhqyaAJ534t4Ym9G2N47CgYffNBVM9",
  "key30": "2onP9Y8XTxfNwsBxsRxUS1yx78y5bB6zxTQ2Ar3t9uA3XuZVRPxhyptTe7V7k6jgm2g7iHfi49WJp13KwkSnee5X",
  "key31": "4ayAHrxn1DN357zokJNpw8Q1HeyK5niZVUZCM3Ln4SG6XDw3RvGJ1FkWEg9gguyGRCUmwAD79YVo1HLVdiEQh9m7",
  "key32": "2DyW2gYrDK35WBioCxbvCgbKknvWkUFu5kzJseGgVYDAXPAb3AdLTEanty8wvJsNuVoLjeC47steQvPpVEoZDo3i",
  "key33": "4WTUq9y53cVFVrBvJsefcZh1o1fRgaacrk1U1ez5GkXQopGLFW72jqoVTi9SH9QeBXyFimXqBEtNGBRjEVCASC2",
  "key34": "4ZoSYXxysW4k6MDM7vsaC3WxxrwfHudBoWDV4DsYyBeyoM8Sa2biGSoZEofwz8hpXppfhHmSopwUMejZ4VwgSV8Z",
  "key35": "3qCsiqEuGmXobjwqtFpAhhHkVJzdR9UUKLL1fcaesysHSvRt4MvEfLdfA7nsnqWCAJHWaeRrjDZT65ArMMnciHMd",
  "key36": "2uhJEzGy8iPZ7Evj1HgCrTk4h27BKiYMefpVyG5TXnq6xSkFFFiHXBczvFMsUgVcPhJ5XxhavAYDjmxodta3KCBE",
  "key37": "53XtwiTfJqGwwBcZ5C7thD5TfbkY8WRqES2vpeB7sjfzxhR9wz7f5rQu2ybkFmsUGg5xBE2aBPuvNYWMpdUjYrKN",
  "key38": "4ooKdyhm2jF2rr3hqeMn7Nrn63PsQ2nwtyFJbTxMfBr6n6XFDMXZMtcPjwtQh3QzySo8P84DZpYAsbfWacD4voZj"
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
