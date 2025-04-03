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
    "35D7uc6rvTYst1BqBCrBeGvQ7EHqqMHap4YNzaN2KdsGxBBmfGokzm6iwJNERGvgX5awvpM1cAbN2wsJn7HwF8Fe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vB9TzVagNg1msF6o97irtGFWmNkeqFPyuwDpc3weAVtUteEcyMxJm1vJbRfeMjxiPpN9HoX86uDurz14ZK1Gc1o",
  "key1": "pVH63GrpqBwWeMNCSsns6NdVcgcd4b6i7HR2Mv8pvVr5UbGg8Ur187QHxzGeL4mf2R4p5FXiCXKaBoWQZwe5NXj",
  "key2": "5kFEcNkejQShgVryeSmvaAxzyiksQL24WMB8nS3JkaqmdKxc2AqYENvQRUWXDaZ2MrYDTE4TaCEQhce6ZxDrTRC5",
  "key3": "2wVt1zUWYUSwHoY2LsjKzhQAxxpywvVNfvQEQ3XjKrNcmxW1wPv8FRVMQd9d6xoNw7iUUsD7cnyJbkTjwuX78JvA",
  "key4": "5NHvutKMBKKiwQNFRxQ9j2wjJYk16JaLn4PmBvrfbovUFxKQo9e7C4JxmdpYQcwGSJicuvAfsYoA7rts6dr5xNc2",
  "key5": "3ytKTRE4hFth2sZ43DxLta7Ehcx17aj4jUYw7XHbdaL6BL6eqef6ZDjoA4aMEXpXEfPgeTVsfJ82mJWGAK4FHuiR",
  "key6": "4NyriwumZW6f3j43YYy7cfhN4rPQP8zXNMPXKR4JKXYBN5nrktxhodHp9juZE1XMwNQSXJnki1KL1ZFaB6HaEZPs",
  "key7": "SAztVqvry29idrhePZgUdK8vgvYPpYhETYkZTNhKdYSu5SnrwmjdpQae34awsECh8ruH41Dhoj7tJRo3BaSS1TW",
  "key8": "2zP9N1qB4QGmCANxr6x1QpjvqQGEWfLDDoLkMRxgSZsUZ6Hn1t5umCxJ4YQhAsgLkGfEBHbrh95jq8EdaaitGp7n",
  "key9": "22iSRmXctpfkBDi8iq2is1TYy9oWvnJFkqp8mvN2hVM1yKZcnQ8A8fVRNhrfCeaDfdWAHh4TTbch6wfZJUgiWVjC",
  "key10": "5mVVXePabpwiuQUhbediF4kEyB55YPHFHtHq8NZSF4vuQedssW9z8CDDPxjagvSStkKB5bewix797FwNpgwUht2n",
  "key11": "1rDVyy75BaMMRMEYynbsav8EcXy4Ar2Axdy3ECCs8HJVTYjVE1rkn1P7vX3tNXpYQjcwQCQZ873u2rBTMmUYgTQ",
  "key12": "3aX6f2qvp9PnaS918hNbDXQ7Ba9DZwtqQYk7kHfqhmNNVK8oHVU5vBEGf8k1mZqoPfYmLDC4NHB9VukTTbc1oHT3",
  "key13": "4HkxbGZfuaMWN9p8zppbotbm1LXFq6v7QfJB2esQgoVEz2hq4Bi3ZhZJesa4P2RqGzrMNLoUsnmycfvwfTUkUrFz",
  "key14": "3pcbhcvWJEanMcUdxh61wjDvz2X6yidUkafzaqNuFEUThBeFQSML2eydne9oYAiY9gMjoW5dxLPcaQtGcau63ur7",
  "key15": "5uy5RbprbR9eHzByTmVhyv2RTU3BwxNBS1ReDqVByWajtuNztEsttLjif7nPTwVTxgDdERVmXVVuVUwZyY7C8Sgr",
  "key16": "4t1rQpaEYorntizoWVEXF9LyWmx3d4U8Asbaq4xPHyJxR1mZLdNsp8Tty9fqAj4ZYTffwZqEY4ESuHt5Z8ZXPjZq",
  "key17": "5DBxh8Bw81Fc31ZE66H1TPpXtoBZNycgkuRFiqiMDHPKVATUQyqwwxbGNEopE3fq7tDtuJPVPSNbmH82JWcDrzTo",
  "key18": "opW5yVqQrCL56TiVNWCbDnJj5nugmBR55M6aWdE58T86tn98JquKzfZGzLGrKaCa7tAStJsSM6EeDCS9FTWqYeN",
  "key19": "5GiV8eRNXR5ahqndTrDaUUpDck3jgBxiYcumK4fY5ZDdZddzGVJJ7sATY2cLeK5vrKpJ9mr5cCQTk4TGinDSGtyr",
  "key20": "56mL7ZVWUUEy2Bfzpe2VvHryMD9P3swMnF6zpbU1AiwNHapTqYor4P5foiHyE3dVeGTxHJu7uv1iJHyQ1r1fGBWg",
  "key21": "3G4odMivrfFMYQr5aj97kEcekX8SG3bSrx18JJkHkEDBic5QkXaer5crRAMzvgVamoNbZ7XcqMJ7Z1tvcW6RYi9C",
  "key22": "3njEsjT7RMWCzjTRUBZiwjsDwT6TddqjJAYYT9hQWqEyztaPmiYdqJzUEBKzUFcV9gtzfxzfUZ5DZbQh9zP1AdRG",
  "key23": "4Kfs8bD6WPH5HfUzyhKVnsRLZaGz8AzV3jPesTSTiuXiyasPeNDvubzMpMXCGUDkw8TLEhUNcRAtFgFLHiE3D29T",
  "key24": "4BLi7izxCePncL9raQiWQKvpv3dEvPbjUxCWzniM1p8fBe7eAnd21icKJZ6srWT3a3TjxnjwCdftJm1uzUVYTCi3",
  "key25": "2EjEs8gwJu74jmRnVNatG8BpKRbGsDCMun83pwomtpZ4bGaGKxSvspkGSayf4FA1AgBkLm8vgh8NB8cdzx7vfjxv",
  "key26": "4ZCxagJYk3NeWmgzsJhxUFdZ7hxpkzQDeg8Vb2PkfEugrZTcZBxKyPobAEp92yMdB53dLVxHymV9iVvq7Jdumokf",
  "key27": "38vUmA5ieECtqJAuxHcZ4WGqkhdiHFV6Z8Uv545TA4rNKjVp9dXACguHMcgKvXDa9pe9zD7C5HhZxv63eeTBQCsR",
  "key28": "QkxzoxJ3SAmejZKVdu2VocQSbSQRJ4yZDvPgCurhDaK7YSUXZgRjJ98KKj6ZHFq7kwvBPLsbugXKhpFJdxcEXUd",
  "key29": "2fWjwvV4acszwfenRNtgvVobnWMhL1BggWFwEPJcM9sh1YJgmCJEpyRvnSfKaUjBYKzGadZQ3ghuEBTj41eAGdmh",
  "key30": "49uPsdC1FuhJNZgudfmytnXX22F3EUfkM2aqSktouNoU6mKeVjDj6QVY5Ag9R8DtiPQX12pA67qzbRgRfuLQ9JL8",
  "key31": "3MxQ52w4pbYT2GTcM9EDnrGjrrcJpugPi5T3ikGeijDf4V6gTcj99s2pGdBXZYs9sFMi848288Pbb1N7zPVYBzBi",
  "key32": "2M1G6D3Y1NKjKBnECzhWHxNGge54zAC5jVMuN7nedJt4p165GjZppPozdxnHPgp9q8MnAdBt8QqHsjfX5ZLL3mCp",
  "key33": "4B7EA6im9ntDWwbf9xjxixSHoAFJ2TDwH2x4GrmKaAZZLeFCHPqQX5WS5hTGFmCnLKmGRSJry6Kjut25FH1qkRqr",
  "key34": "3F7u3p36sfnFhW2oJzsQPdoL8etuE9wmaieSdJvPdmscaSbjc5s3s4byt67XxRQfhyGVbmfXRJE4voKD7EFQTZfH",
  "key35": "3F3tM65yWdKntu7Q9yzTxFVjaC4rGiZePX5Ea1LAZbTr5o1BesPBSkkr8mmhjhEy9N4N5vyr8KGzYfZhUSuEC8nn",
  "key36": "53wXdagU9MSWnCDXZYg7YLT9TcE1zYrqTNHoQwcpbMJX1qEwQfozYThFjV92U5gBp8z5muvTyYwm1QVnpdvonna5",
  "key37": "y8T1qk6Cu98xxVoDDVFdnDK6ZP3spmNpkDTLJGrnNZeTSzp25A61G4R4Q2wAGFLsNoAkG1MUC3YmjhC9mjLftmg",
  "key38": "5VUNCA3gdoSm75om42HD8bkrxz8CqG7HPB8VYZYFPnGHgvqmvevmtm2nPSoKiovLTmde8XqiG8fU1D9Hs7q3si6P",
  "key39": "Der5sQFwYwTvoEG8hchj2fgT6p7Z1MUEVpfc676SRQQoAyDQUSv9e138JK8dKkWinLkUMtcoo73MANuWb3MPNqG",
  "key40": "2J8LzdoyKbzDyHArXYyqs9eXC2F2CQyzqYDm9urfEbGF5DWWv9Qp6VGUTJnaS4XfWdu4bNHcrboNBvodWorNv6WX"
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
