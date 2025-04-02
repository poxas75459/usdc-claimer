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
    "5Yo65z8U8v389bYw1j8B1tgJaMqKTqi5ydCHPDbhEx3CShrXECKXHDBhHTZAFoQjz963K6yWg38fA5cPcWcPtqUX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35PtS3kNNnWUAczqGL4kWiTUoD9RvVRMN2hpfZVyC1VyvJyyarkoh3DY2GuJWGVh8XyZqF21qSyywgVPamGQ8LEz",
  "key1": "4mYK1bPcvnYmLSQ7Nd4XNGRa6jM8fk4nbjdfVUfGggEta4F4i7amJPDwoYtMLBfDvbQZKMuqWurMwqkRsFSyEHsG",
  "key2": "4NuWoXNH54UegtKjsrvaDZorNfWpVNrULBQMK6n3dD9M3i9LkVjb311BeG7u3FHwoKyVQwmWwEHpEYP4L43qhawB",
  "key3": "2EmGLrk6QYE8aUuxseq5tiYqt8sdAQShxz9EsLFCpxm3P1ckRYwcuBwjEETvKi1z6Nhh93YMHX6XZmCKoayCG6xv",
  "key4": "2PWW2iTcgQyW9MYG2dx5cHLMFBycS9XXUVXstHfkbUSUbi9r3EyK9msDkejVzSFGqjWjFzKmK9DQMQ4M72cwykH2",
  "key5": "vLRvziesqGN4QYLZDF31yb5eBSbn2An3uBMFWnbrUdBoKcd64L3iCE4AWyzzWciDkcYVDiQRgZ6pQMuXSneqxHD",
  "key6": "22KniovFpLmrzwvAxQm9LGPtcqQXe7NrdqAA258XVWb37HDwV7Ub9qpAxiiEGU2VXxAh4CwzbseBMqZ3PHygMzrB",
  "key7": "531a8isXY879DU1Be7GqTwcDcwdwVAmPpToMJiGrbxUocDijSc61QU2pbqJPZZ9rVDPF23md6rU1ZPwsi4F74VrE",
  "key8": "3TwHcdVzuZenmcBAZu9sF1ihUdKPumXMv9Jus9Hx1F6UE2gXj2JFWUJUwHWMq3c4K5yiUZU1RQoxAnUGyf6h65C4",
  "key9": "2BV2pphjSUMECKRFsBpArx2pMZai2DmWZkdMknzcsgnabLTrX8jWovfKESvKvdvWoztgaGtvp8gXGX6W19FMAGS5",
  "key10": "523AVeVzwefTkfE3vs68T2GeNYyikKqTtUxHbGtr3aM6h6MEvjYU6vQ43UWYpaJWJinFv9yu5rbQrwTDFMxU6Fxm",
  "key11": "3iZsnNtAaf6K2xonwgUuENdnvkNUBCu1nqhzPFfxPmqqGDgSmPpARvsS6PWvurnR7MejUoKUn4ZPdX3iFciG4mcR",
  "key12": "3gvEwss4RgTDTSpGrk7Zt1RCCMSiMLUmabDesdZDgWF2oG5LPZovuCcKWCdZhfuPM2TeJTkrL1U38vLAbfd14mo6",
  "key13": "2BNhhfdGqUoJxpKffDJH2jP8ocFeJZx3TxmqFnuGS54inDSsPKFH2msN7WdbkcAYxR75pKHVsV6Sne41ft3AmHV8",
  "key14": "BLmTM8nRez93wKJae9gUHVobCJxbMgcSZrQiTGzq33mEXAWZa7zSxj82UpyKm6wE6ge5vB6cRAGpHqwXgN7gvp7",
  "key15": "4GZBvo7C31iSsrhg6dZZYiFqsJyzfgX98DcPNZRA8GnWrshRPLsBcjg2hZfxzpLMqkqNVYtGhMXCcPMtsDkEzQbn",
  "key16": "3UHqtkuXmXEssfxGzwgGYCdtWcAyod1KmRU8h31X6kMhXtiLCVVP6i8S59p3XrJaZjATa59cUkyx7eEZCjBTCdXk",
  "key17": "31E1Zrpgs5UFqw6NBbb7yNzpAHokAtSX466pK88UWoCexkkFtaSgVe2bqfzkPtR9mpkH2np5n8EReJKv1Bbi7ZEk",
  "key18": "pf8HjU4TFU6mfhz1ZRjbhjqdaqgn7ErV6Vk82XiJyPHcXT6GyFgagEdqNbRT1YzGDfE8bWScYbLCRC8Td8yoidW",
  "key19": "4euh7Ws169Gsvo8hnSbTosxLoiaxqV5GAns2mGCzeLHh2FPmxMr6W3SrubRWPVQGWEdQGFtUpQrN991MubdhTFJs",
  "key20": "51KQNKENhKW3qJGq21hchqDfJZdeRgy9oLUwJ3zDFxrQkfi84Xv17vt41saiy6N7KhCAK8eFrkLcLa6cMm7Qb3Qs",
  "key21": "4VK2RCcWsKMLpgrHYWsCK18QuiZYhgsBDwj6yv2YY1k5o3vByFQWQoJB9ZFbgQegzRNXonjD5ZNqZTay7x8BV4KG",
  "key22": "E3pGqTH6qdCw6DHL12vocdsMhPxXdEjwjVdrwZQyKmbd3i9JTCnjPup4Mounh9TjyT8gvkqcVgydzGNBCE9oqjR",
  "key23": "3944AJaMa9UTSFVt96F5K9xkTozSQicNubw1ZQ1eQarXoCW9XyPizg3vYJS22J8NMAwV18qGmar74vQGZ7omhGhi",
  "key24": "3FqZE8JiLarmHT6He92A15rC8MMq7YQNckDienP8Qud1VTWjp4Zb1qyrK1nvgsMkodXzXLKq1xGsBqCCjFFjZLuF",
  "key25": "5LH9E6EiTZ6ns8RMkn1Fv7eAUmEfw1WQjCJJ9Paon8GDqBmqJWvSxmZdJ9B3mcktTiTuDLU1Fs4uqFnEQ2j1w2dE",
  "key26": "4wtDTybxktHHSzqabgzw7BDuVzjpvBisiBVxuEcde9mVqxmYWfgdq6oQsQ4AUxjt4DEnty3kRp3XXJ7pNs7Hy7h9",
  "key27": "2fMFCGUyhHwLpHRAcnZSvmWjGkaMoRZFoKMybVFK2GyAGQQrFPiGZFoiyWUCYeBHpmQwD5BxrvMdQWU8VifVWmc8",
  "key28": "2zeYPo4indaA9ChPko8BhJFDcb6RQmJQcQ4hn75XaY3cRhTS5jdETNjTC1hnc3gFGoQMXmFNsMzZfeyYJcPFSpsE",
  "key29": "5NbuTeZgi8WSwtTDyGgwoKuaSdhGhRd7WX4SmzzCRv2W5GpDixCrM6Jdskzda3s1HhKmCKfNa4SPZrxvGRJESfin",
  "key30": "vsA79MaZVBgWjsnAM2eX9gB3iiP95mVuixbGg6hsWJNJfWyrZRMSCLqFuB8neuWNs1uT3XiYL2ftXc5ES9BR1X2",
  "key31": "5FGhC3ZzeCQNQoBfEFAoM4UmLq3wwsKUSJ7EKPVqrTVQwbwbpJkg7poMTFz7VwHnnh1wjKeAKvpExrBnW7a3nEfW",
  "key32": "5ukBhb4fUaJXSKn4jV6MpmbvtJCW4oJunGQEmHHFuw9cezk97wqguJGNpvsFmh5KdYYg9dkQGoggvTYoPxUBhARP",
  "key33": "91EHifXr8tR6afqQjfZckLPk242aM4VWQ2o1818dasrBGFGWrf6gxhety5i1RRbt9npjKZ2SUrBzigX5SzFDJhJ",
  "key34": "5MjgUxFfUAkngAZy3T559jSR6dmMCb4L8YC1319B5ebP1EJC3sxZedFdYM5mU9JZTg1D7Cwc7j1nGU47GHYA1F2N",
  "key35": "5bUSoEES3oZv9k4e3eFCvvHugmiqT8zehf2dUDwFVKZJESH5NhgfTSxNPAXo2eCGzmtC4jAAMjU2wAuLAuLe4NKG",
  "key36": "zsFJfdu1Ucc2oiHNMEZ4rF9kggw4jVXJBAWYT9ePVMc841WUWmDLT5LzGJwn2RxpkYw9wFq5f4qUuJcd6LdY3yf",
  "key37": "3CGZNpfNSExiDhhURWCdkNLkLMoAagRzbugMwL57Djuu4h6oG1y4ViEFk24KSy2JANf2Qd91ERgEA1CieTuXbAMN",
  "key38": "3ZC8dGHcRMLA4sbVULatvkYw9EeS9Du4iPKyAJ2bo2UERMFDAYz4E8VEHThwrTpj4xpwkz1hmaFc7UmDVrRUqo83",
  "key39": "3pYuv2744jLRNSjqcijunrd5fuJYW3TSDhpWcEtKwapem5LLp1sEk7f9vHX7vMCwQzfKAEtByGFbEfCu9YhkrvGu",
  "key40": "5yr2wLHT7LfKMNZZNUJ1mPo9mZjPN31xtCfhTqTKdeFUUqiLdnBymDtQYcYcurZyVShgiwKAn5XQ77ExKo8Ytokn",
  "key41": "3TQRtrWqMeNvDHHN9rxPPnPXrwfLSwXgWmhSDMq1XmD4Vbzp9hUw7vHttgXRuo48c7jKfNBHcRMGkoX3bAqxenZr",
  "key42": "3ogyHr6qaLWQEji46AsDGCWxGpSgxr3gYc67GfrDLDZvbNvpMH5oY4BTynQm1QVTyxdFA1oePGFcW7rdYuYiPBqt"
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
