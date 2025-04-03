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
    "yecyvdL3L9TePmjQSA7wMaRSAhdktoKv6AbMnJoNiDhLdtrwdS873cH7Naar74AXYQTU3uUeREcTCXeomRgEHwm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vUAxKxt2jHZQX1ELjcXCUoAxxUv2MVaxTxVvNugJqgTbG2hWiyzWduK6braLRa8neQVno8M2goxqFkcaTLGqRMZ",
  "key1": "PVrxN8WtW41FQgJEyHipp3WRRj5HyPdaK4aGRWxaCvJPUX2X6dVDDoZxoL7ArNitPybtLwxFMCEM7ZSf7555EV6",
  "key2": "a4yrxHRCZaABrUJjV22Rtue6z8MLnzJBPNK6Kuw1A5tbNvMNBd95oKZqtLt2qU5pfoiKYApvBi3MN8t4Wfgr1vC",
  "key3": "2SQrdX6jfoqwZPbRamHjiARSnxJtJXSxm1cTE79BAKtNEkpTh47nsnCGasFK13BaePXPqmG7N9TCVPPXDUfeLjES",
  "key4": "4wks4tYKBqregRKncgKsGe92q2qYEjRbCfKByb5a5amXULCq5gFS5uzqt4oHZu1Qr662uNn4qjUUT57t2c1Vyh82",
  "key5": "4D3SNKucrrVH2TmcSWdJvbeRwTNtBcwAz8gHomGT62AD848ANaoKmGLS54fh8oPzFTAFunzcu1Wy8bCybhPEf6fy",
  "key6": "T17Q1aP8nZYzjPFS8HaGQZbqBAvbLLk45j3XqiPgZtU9n25LmbzY9DsCXGPtskCiVAUZxsjp6Yr6ZLmN4gfsKBz",
  "key7": "5ATGK2LD7E6f6Ao1FQdQ5sLFGLJN6nxFKEvXsK5ME272tKxyq8BsCjaHfFYWHpaSKZ7cL9mXSsCsJnwz1fTg2iW8",
  "key8": "62r6gYcHpMdSKF3vKCUEd6gb4xbThHdTL8tr7f74mtEXSBPjhFJMGoAimMULARD7JipsHWtB13u9VdKQJVtPoGid",
  "key9": "z6f8X3jLLWDdihep5PGBfgVnSHGyvbvYCM2D5r4DS5ACYrEu1kYHj5RB3Sn6zXXzWpcoaAKRyGx5MYSWRaCXVAu",
  "key10": "4Wt4N345mb1zbmPSYdLQq4Eqxm7JFGVrfhRiroN6estewku61bjh5kcwCngkK5Fm2tXvcDWXaN3JXTHoMgNbUvuC",
  "key11": "3GhxzG7baiQrLUtmVVG459EWEY4gAMXk37q4UQXHVnEqn8TijbNxRC25AuZbu8ePAq8u1Ei36EKw6gybNWSk9Pzf",
  "key12": "2AEh6y7Fdy4M4D8EvT6bG22hZv291ViVCxrmEAv27KMTuZDnQHyU7SH8AbuWLYdnbyxTbKKmPHfGYo3TnkNRUf97",
  "key13": "57d36utK59NCib8djS9th77CxQ7XjkuibGK8H7h96u87CAgzKghWGDfdojBEkgBBoeT7K7kq9WL5M3xLegF4vTjZ",
  "key14": "5qbDXDtH7xcGC9N4FV4Pnh9enFQcREMvpPYsUYYwdVuGc29pVmKskZ3if18GetpeFCYi5bayG5sMJG9mnr56Pdbi",
  "key15": "2GnEYNB4VnQZsSBeKVMKQyuNYpSPyUmgDo9Ff8sPnbYg1MrreoJuNmz73Z74qbe1f5gSZvCvtJidYg6j73R4uUsg",
  "key16": "2pth2A1aot6WGbDDY8Th9oaRoHzGh8XQtjAQunZ8EwwRx5gosi2DvBY9u4FnQsyorD1aTHmWuUup8d1JhAgeHEND",
  "key17": "4dQgrB4kki1seqEjqP3QYDRuUWcV4L6z85YrPkGWWr1NeT97QRf2h4npCZatbeeCBZKZkJAfhW9Hp2RgbVcytVCN",
  "key18": "4M4RPJDsN48SgqRu76uu3gzqqoUWLoCGuePdjE2tBRcX9piRC3UVfjDedhZtsBAcWtaNn1cQnuNF7Ng8D9nLMzni",
  "key19": "Sg39LtTg9UxjDcn4ktxHqVpWQzC4KKADx4ZoeZM5X9tCPzHxvMcR2rVSFEviugktJHqezuctaRTxiEsCwQs3Wte",
  "key20": "3zRypw48QyP2g3qSEmo5KLpgDayB6ExrzVWXEZTEeS2RgnKKzG7P7pQxw7UzamQwHvZ3LQf2Xwn4WwM8pJWXap4n",
  "key21": "2qdaqmBGRT2zrE7PBn9Nmj4ujUvUtN2kdckcuYcTHNSkdRqB4He1BcZ15fQgZgYwzenVURMBUQdQs85SZV6BpftS",
  "key22": "2yW27pNQT9cNa1SSamXyKdhmEVW1m5wLAsBnvbANrwpVJcjjE3pzCErLp86oLnRdkDHVFc8iYmtqNtCFu4AS1SeG",
  "key23": "4KGggNnPinq8GUwCFuLkWkjrUyBAnYr8kx8QzzDr4qoh9U98CwZg69Rmn7wgKgWFZmSByoz2p9bbuRuJwNp12KXQ",
  "key24": "3CNJc4xN2S8FWH8KPXMSDZHsNPnAQKeW3c2nSXB97D85TXpjfixDg4fdLjutUmo2PEVYKdnBG5vWiKhU3w4NeMxN",
  "key25": "UUPSxXm6z19VD2ccsWQyas7XjtCv8TBxnvUYsFAX9vcbo72HrzRwAqfhJE5RX3TEyms6xnwC8uEHaRK1TEzrdEi",
  "key26": "kQyuDLpYe7yvpAqzNVPg8u3H9wVwGT7wo855A76wTd9su65dafW42v15rNWTmfrHPnX5k9yMVefBf8kxZNWQxxc",
  "key27": "pR9Zm4tz1HrrH4Vca2Ax3SkfuYxUbdWR5Ypj5wxAc7VWv7R9SdVayijJrZTTQBtm7brz5wYqKEAfymPnmvpPF44",
  "key28": "NHTPnCcVdpu425u9G9hzkgxyrFzSt2RdhsPcANzZUWZYkX2o3U9DJF8deihckeNy1rYCzHvY39qtjfSdtBVDQ4K",
  "key29": "2h6GusHakL4YeKtsm7cejuJpbgjn752aw5Nr5GAEDxaL9UKs5bxqR68j9KcXSToXiFtJWpT93GdbzayENuZd46Lz",
  "key30": "25dNcWFfjguM9rRq9EMHA8ZKbuff6mLXKwpNa8zo6WSn9UpNQkVx8EbYbHvV3pw6wecF8ismfXvxoViJ2TQJWH2G",
  "key31": "2vKgA4CjhXHnVJx6i7xEBnssniDcD3ewvvWCTtdpoe3mNM1wpQT1VAujwimRcjRaUkPaMoedDY1Ng2k12HMAN4ZQ",
  "key32": "4gvdWTCMphtWQDEKibNoDQ7g2MphaJVje9dXuGkp8HEAWv7oHTJXZCVp7RDxYXCtBi1zLWxF4dEcS4zJKuoCFCX7",
  "key33": "3hQUCCaCfJbEf8JtLdXfg741Bp8fdmW7ZZ9yRq7EgJRanuZbbcr5gdwrspfGniDb2uiPgNtJULPpuL53gvWAo1fd",
  "key34": "4S2eJWRp4912xKTVmpAJ1jaJiU9f12MBHUVmXozFK4oS74qmNuqvUwXY8P5axNZsYyiqYSrSFk9JsdHtDeWAsFWm"
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
