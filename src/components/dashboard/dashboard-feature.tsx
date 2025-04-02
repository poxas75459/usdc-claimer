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
    "5QoB3siTWkf8i42gfp8wXgBc8uTzUFZMSdzuFdnxvmmT5MdFvrKVPpPeoeXW8BUDcpwVXEMgtLJFgACjBgwzRtv8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wUUXx7FFRL6zXXFJt3RMCjZXmAw6FzPJ1d56KDVEyK3dUG3MPrD7sRiShmvuJpQeV6YMBMFANbwMv6aWu9LV3QJ",
  "key1": "2zmtGY9EjrAyBC6XJ9zuYi9xASsbFQyYsK8hje5k59FusSZ54peJEYhyApSS56QW51UW5fj818KSGBoJxdow1vyx",
  "key2": "3LrwQtmcJQVWuhQKMwxDd3wxS9eLQT8JPw9mP51Vh5mPoXsrLqmzN6PnxxdvKmqCGqLcQTJtVMz31DivuQmY6cPt",
  "key3": "3mpNjzpnRgKK6S69JLxMU3xEmSLjFtFdYmVwfSAbfjKAkJWhJ3oTQNbL9vhDPDXTmTxLd6M6NLxoPQoDACQeckGC",
  "key4": "5PASmzqpbQNe2wNP6Dg8N8GLdTYj3VwDr8UZAQs6i8cs8ebuaEnq4wzWMyZYjGeRwjJvjY4nd4UfS5yBawVaDpi5",
  "key5": "oeES57e5Lu5gtCmrpa6dsaULWfbQjWprcB88afGxNjskcWBSQ9iax1bz2dNRRponmuuL6Pd6WnE81UspNTfoVUN",
  "key6": "5L7WYmmN8MFc9KE276nWSmcACBhM6jme4kmogumXqoevPhYRfwk54LfBs1FaDkaDXu5HMREVfEU3SEgH3nJ4N9qV",
  "key7": "uJW7dHfRVKhspDkqbx2DA678bia7PckVNBYndYjEwrmDLPhTVvQtNuwcQ7ZVtzi2M3vapv7MBjneCqUaQmNftEF",
  "key8": "5KcZ8cgYiDCFuiS4gycq6KaM1cYBMYHu6HvEkPbDs3GeCusS1TrKhi9tS4Lu4dtENM5G8VpxwYV5H5bLdoq7XmQt",
  "key9": "2yXGgEXuvdyTt2B9F7YfH19eKiZA4mUFE68aWkZ9UzoczjWzbWBoFy873NqJ78VjLepYY3pcgjrkM4eL3bjWQap5",
  "key10": "3opNNY18N312z8XGu7HAVns1pmqumFVH4M5ewh4Pp2M53DSQbF2kJNmRSNu3E5FQoNdfFm7ZkDL9tHuLSuuEciXB",
  "key11": "3tvWDdPb9jyArXg7tCRwcm1erFBFGmiCzvmieDTS2uAv6EkHadWuFjat3TXYhbVmHYDyrsgoDdxTu4fTUAZNN9JM",
  "key12": "2kkpUQwPJsiYDFL1YntBSp8gnUUKKAHfkNQFvFhtsewcR7cuFBGiv9ZN31E7eGcgm5bt9xWMVkCVspRSYF4Dxr7k",
  "key13": "879D1bTCkqYf3WgpJRYEFiggU5gVoHSB18S9FhaJQjpgrSqiPAscFjw9iCUuE6h1QVky7ZJr6NaY2zbSjZgxd1d",
  "key14": "RJ85X34ykFCAB4xAfHLUsy1Jy5AwAgjrjYLX8oneMcFhLNrufJ8vkHybUf3aL2Vd4TytTkuVnXqUhQuanrjEkHy",
  "key15": "2XrAbTQzmUonxx1oy1jKU3cZGCAdrywehCP9rH1aXwx9sbDk612qsQHfkbUYXKpQW2ixbCgJkYybKFt9KwwnEPU8",
  "key16": "TVQunnv1jaiqa4TDWVnFjaVsWUVrDdjVfyRrvPYouDwGAmSe7NFQN3a4wU7iVskn6KXZ6RaUd6edQzUaGttupxE",
  "key17": "2AGa7A7PZRNctnLfiJ1rB85i9LfkunAcABEDHLarU96giqPjFvMLXnYyjCJtBTGfTpLXDwQb96EsVrTCqhDEqXWb",
  "key18": "5uiHXQzz4RKogo1qzLZJt2SpVFThNh7hfUGLUat9N3JPHMJ5Jb6uuUoBbuZHzGZCNtajQyegqpRKCBQ82MpdQFzR",
  "key19": "4XXLvWqrLsmLiW1d78i9Rkc5kjCw7fRR9v8yYticpLTa9DXwwEFhepmJLtuDaXBPor7KA7NqhozR6Drc8arojsbM",
  "key20": "yugoqXGCs228crum5Am61bjqvRVLtPtxcz4wBk6yE2XjsTabxmsG7A4CBw8LFdfE29k5Rdbi9uQA9tFwL9G5awz",
  "key21": "SLvD1xNs66wmaExZ4x5zE1av6NUsxSPLHBtCSwfz2uPVqMj4fjr71n5nqfmGy9BuWyTrYQ5ezRixNPsoPZnqbMF",
  "key22": "5shtcqDxnUW1CRxA1mvPWVyvQrjBXXvwM9XQpP5fPEyJTsRidmWp3wx4GimENjUbP5VRu5tinQsnPJMDQfCZjcv7",
  "key23": "48gW9NyBWeKwRT47SsGWDyACccGxiE7HUztda7SUoai3pPm3owXvFXcsAGfojyh9b9sBCq5wYPTQgeQtP2EiYH3k",
  "key24": "3Z36V9xN3DyrHW288ADWLW4jL3wWLTFXo2GBP4ZhEcrqQn4jtFgRoGXDYJAqUP3J2ukKyP8U9SzMj3rZ4wyQdByy",
  "key25": "2BMMbv4UuL4us7PZZL5KDjrhXFWzf6wkh3AYfmkBZoK7qyk5yn7eq1CjGyWzF1Si6biHFMuoJqRRR4v7vyVP2TdG",
  "key26": "3pNokPxcc84nY8vgGoLyNjHs8XfSU9atchqRs7xva6LvCFZikvv4gnWfwHwmQSaFhDGTUmz5TEVBpHuR9P7JDRXi",
  "key27": "35HjKTpY4qJWA3ewDTE3hqQ51NgAnwtWwRmyZguC33KJcVPWfkBw7Dj7cSDBeLskvPac2B3g5Ni1aFHktUQ5x8T5",
  "key28": "25VunJxb5b8Z7E5UEoxkHwNSZAEXH5p6hg93Ks2sZPUtaY3v6jitXvi3izG4ppQ5BEUiPryZc2seaju1W6YEHqR4",
  "key29": "4rX2d8Tc6WV5QCGM8tAY53XurF1kxabjNUANnwtNnqUajiN4LrJjCcN4A9FmBEFrvKgf86ZL9Abz1kgKSaYFPDqh",
  "key30": "4KSKFNEdsbfAihjkvdRm2o4jiWMZeLBgxm1AVQJhDjTBTiDzinxwg14nrM4Fha8mTwT29RLX1mqkGzY7LbsqT44N",
  "key31": "5emVychc7JFGYrj64uppy2ryez7MrpmqBGnxB9ydniB2SSgrd5NRRvV2nWMamXW4G6HWJwrCwCd1usPMsSfzCsVF",
  "key32": "2qDbx1rK2a2bDU9k7VttQTueR4QLgrVuCqiGVxMY3edRUsEgvh2wuFJpzVoQzV45UbYU8EDB2bGXA8N4GpBjf28M",
  "key33": "Av8bSuPRRLu9vckrokBwUmxYvuHeevzupCZSkt9SqGQ6gw9uaYWYb5xoXi7h3baxtTJxLqqpbqrX2FCrn9vZVag",
  "key34": "5CbaMA6h32z7g7Fk9QKhm2anbssUuFXgzSbUG3kHAaQsmPHH5B8nnzj521QaUwLXfsZ25bGYr17jU8AmH2jGuW9Q",
  "key35": "4fLQqMgZbH9G7qwoyW8BkDiGBqLqKvA5iWBMkx2kzuWZqRgjyALai6ADSYyVPYZWMAWyQnTTD8pGZYonJRfi4emz",
  "key36": "5MvCo8kQX8RYZqpDYRkj6N66GLWerBZFQqug8jDtuMqCrhExLPvp4Be1cmrcsp3Wk8r7zhd9mARoEpE6YzVfPNKk",
  "key37": "5prAZgjvWZDAEHWDhuoRcJJv79p7foe1rLZ9i5ALy4nykRffsirfWdjTEnhfoaypCUpgFgYAJjcCBqNaVrFuLaeM",
  "key38": "bbc78en1hxvXtcSLRydJb3ZY8svsnd2sYqjL5BsgoRA325tmKtqbdTzdKJ7zBDkLu1bh3kpncLKVAEUH4rHQjjE"
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
