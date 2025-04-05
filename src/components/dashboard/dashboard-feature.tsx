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
    "2U8RfZFtRHRYYp8a2F6qjqwUqwWU8ZJ8dCJ8AF1Dvtxf9PRf7W3TD4Q6UDnsqyL71xvvm8dMeHoiiZmU4WgEp2W8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kM5v1JKuMyVga4k8gE9NCjsdbKLxmnRYrBconn9K4PbtDx4BGtzs5Zed3Muj1HXr1UqwXjN6hKrH3TkkM1nr1Fv",
  "key1": "61H5mNUhr6Y1j1r5V4JP7H77ybYoQh8ut7i32eSronSoDrD6JF45nBh4Vy2dfHTSpVgsyKqw1omozodWwNwjDuWh",
  "key2": "2eZTWHcYjCzgHDe5BW36T5AcATo7V8QcHPj6UmM4PdVpVT8JiNg8XTg2qmkXTVnVqznVUxNbsSLzpEeG6S1jRNeK",
  "key3": "RpTLyPQqSHEe1HwUfxgK7jVS59zT48msG9ncihEQvFkkCKCK1WgdFSnfTxZpJcujg46EzdikFThvfAc9pyUrWe6",
  "key4": "3EEJekXj7GcrW5pMEBMdtGguovrLB6S5J6T6dsJJ5F6Ewy7xrEHH6eDH5TTMv8kBKrn77vowPfm9oKWzG4CEu1wb",
  "key5": "4UL67HnJrPwAFzQPaAKDHUSLkPFSr1vEH51PdxydhEoC9wkYw6nkraNYxksdX3r9egTwo3wC1oDWZXEpuYHnytkC",
  "key6": "3GpDwZUZF9iYcoizcopETftyY8931ZfMeWGJqJ9M7mUXULradrgJXG8EZcqFiktx4K2q333mhH9QZoX2d641ZRLP",
  "key7": "q1NB3Pj68HbGzRbgGh4HD8c2gCmcdphZ11WZwbjeUGtP5bhkbpvvm48nrJJn8zJUX2QNmR7PDYqgW8d8wVbhfCp",
  "key8": "3erqigix6LahPVDzDVr9CkqVCpPyKBm8wr1SY5ARpmH4sbbgBTzypmTnoG2uQz1f3G2yEAVFciBE6WRpwXzN1Hvm",
  "key9": "24BGphFa7BpHBPDvV13bHpUJTMqgNf5eajYGiwMA3eu2X9B4TAmXMoq6g7k9HHavdcJWVEhXJsxvgo2qLJbMQLEp",
  "key10": "5f8dfLLSFCetTcwryrYvWX5vB6bk9VdMd3LU7H1cPJFZ5fhqcSvaXrvhveJBqEguTNPKNvT4cYcKdDuj9BzSzzq4",
  "key11": "61qg3qhLh9Hoz6snL2aaCaJi3xHXVtnrmwP8MTVNZsKW6DKM4ZvtSxtxboiTfv17xzNWHm5KXj39wdbiBryrAMMV",
  "key12": "21oy8onhWDWdXLCKQuw7BqDGx5MU1GLnTgjHrjbn5bbzz12id37Y9542kXh7MMLyXC6mGKKjWUKZFjLaZwMQNwZq",
  "key13": "2bUeT3HpBgkEsnGyCkm5p81PSfsrNiqe3h5xn83UhUnwiNZXJE5AD8MkAmKawKoi6eBffKh7LJEXdRQuiS5DkWej",
  "key14": "2aSreVwtvneb8aZBLaWU3u1owWtyU3cAZtn3ywDh4G6kZZ6GwVYVJmY5g9tWSRw29976ZxMaRJy6jxedM7L3Wygg",
  "key15": "2W476sNheo6ixmvqvd5hkNCo5ScW4Ayp231rTqokAfWDdDuXBAcEfmdtSnWtVkh2H4FGNcZVA9UMQKgURbj3z1gJ",
  "key16": "32DCh1hVceXN4XgTH7fpbXQcgUpx7XGEcAsnrVevtyL3qFRE7PemP6N1owziWCN5Ux9Zm89eZoVEmEzaBqWzL2zP",
  "key17": "32vDxguREDvbZfrvpBQ44igQTkizzmhKz885iMWRT4b1mDcGUbGVjfUCHxfxV6mScL3yesabroJ6gJJZ1WwDn6CB",
  "key18": "5eUimroYJNsiMx9sntxu4ReMXmohHUNxioSMr9WWyjvbLznvrxzBGwVYvSJDGkMVpbk8TLWyYGyrj9o7Ug38WgvU",
  "key19": "29z6ux7Rfv3p7ku5RJ2cErnKTdaABBirqVJ8oZKSzdbgXpP1guNdrb3JjzAM98N3nv4bD9FRZeiHuENXSboRmv99",
  "key20": "3Ap8M7vyHBSeNLKpktfcyi5auTjbdPzE723yKLfJpa44AXGXM4rATFv2hyvUBMhWEE8rr5xsJN6BhnYCEfM872ZS",
  "key21": "5JCWYZg75hmeQFyHoRwkfDt6YdVZgVzWz2PeFMeynB5g2HB5p2Ws9H6fXsGHLZwFoE5z23LUtrNmxaCH3Yv633yH",
  "key22": "4UAbjU2tB78yhUqi4qTZ1qh4pibsbc8ocRUDZ7ni4zTrDh1HpnFVjEG2oGgYVpoNhc5oMMnJC2BbUGqwpvNcLfVg",
  "key23": "JYb8W3Pxey5wp7uSDJGkV3KGNFhRfxfG4RJqsQeytJCTf2fXrCDyGMTQWnPqiP46jqem6vyAb5FiATuYhWV18rX",
  "key24": "5Nt22mgwF4ErB3w2tGzyNToobdbFKoLGTkdnxptScvqopypFrueZfgJmQ7kB2X1LeBMY2do5Y2DcfNnHoriCgojX",
  "key25": "2YWt8Pfv8hs1x5gLxM8JfsCoxUfwH6M4ijDSB7zZAM94K6LXbM3FncmVHAh47h7TRndGJUQfJQtqBqCPSNTFvz9A",
  "key26": "3dd8yfV2EkXhyXnwgHTBahfj1yf3iW4E4RBKzembeZAMAWvoeRJJhLomyAaEo6idbEdTrqaUpbVmNt2nX2sZnPpV",
  "key27": "3EzbheDLHLii39tzyoZgnYVye6j2hs5NFUYRZW3YM2mFm6Jsg4iFQKfpoYV8CEgUctEpKaJTnP1G7gwuBCpkywqN",
  "key28": "hwn556s71xejCYNnXVo5ar9z67dKY4vPS5Uee4hhtCKF1sY8qKTnScrawHzwkiwgt3zk7G17w5HfrFpiV1zofza",
  "key29": "3yE889uCPAEVoUb1AiHXMjkcyBiXbkpQjaV5HwNaCwX4JNSkeUyesTnLM5nL6Wob5qQG7EmKtRv5bnWsgYmCgKLM",
  "key30": "4pJWvkSs6YidJodsiLHTD1L7PDCbekRLqf3fjg9AbJArWEePWX2zXEDVwm6HkATnLfHcffXSZijSW3TcCPEx1SBN",
  "key31": "VxETPRNgBeamVtoz8Q44zaSNEqm3tbuvd5VVoTPfWxg6wUfJKWQqivLAoUGLiYvet3TK6WFScdRvXyyBgFf3HeW",
  "key32": "6164jQ7TLqdZk73R9d3wxeB4EQd3T7fgJBzTyqPuPCPavmbNAyzYmjX2vbedJv6sxb4Pzgd2FBKqn6WLTg2DTyU2",
  "key33": "3w9m3nrkrSD4STS97GELHiJuvmvP5SzFCFTNcQ9W5R1o7cE3JMs2dYmt8oX75S7kMN7LakoCFA9N6QKeyZywz8aZ",
  "key34": "675znF6rujGW5R7LeTCX84C2QLdLjF55prLEK9591JdMwtNRMMrDpoixoiYexPbHT2hVQQgLZaft39UY5E9hfofS",
  "key35": "4LFeRTRSrrGQ7LtqnrjhVEiDJJDesPEY277J7ek5r6yKoCuLCyHhEHbLSvXARdZWs4xyxwU2QiXNHKyBE3LU6DXd",
  "key36": "42nVv4GZWpa3bVF6uaXftG7qR9EgAogPbx2y12GwSknpjYuEyfXNmBgxp1WtL93ycLb9K3cv4ohmYffPTxE5SZED",
  "key37": "3Mk6zvr4Kpwnba6Kx6b6LiF73i5bAxQcsXa577FScoorEEhSY1VtDpdubB5HgqDGJTqqmwE73CMBczWCUxrnhWbE"
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
