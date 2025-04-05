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
    "54uFgEepfeLe5HeQakEAkD7tomgwUurjm4DPAMS9rosqpmkPjxBRmNDXSwN5EAcmVxSdvCWdyNu9FPUYSMKsXwku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AkF4fAUi9YGPjpKjuJ76UUaGvSw1unK3eUao79ZMf8sSRFxhaJWVMEivremT94RQuoSbgFDmyBYJSTmRqc4VPag",
  "key1": "vxtXbVNFPazPjZxBrcbtAanL6eZcWBA5BT7sgxv9AC5nmgC7W7ZrRZjC7EFRHkcDFtsLGsV1vNGuqLhzg76hxYP",
  "key2": "roKEwh6ejtbUDPWWVZLc1Ec8e3TeyM6LBXMGQ24SGxFwY67bQoPHaJSNsE1FsmRynuycLfYQkbT5Z99vvpE7j2q",
  "key3": "4wJwXQ9a5eg4zfUGbrsfXVTLRTKLf6FYaEir8UabsJ4GnhxFUurVTkGnfLpMXrWJV8FLju4SJPDKf3DhBNd4iwhc",
  "key4": "2wQLNSNpCq7XPKscvRhMUbsbkZY1DnDST2SuuosGtErx7gTiocrA56vMSf3RanzjpTW3MvaLGFWt9c8GMf1CWake",
  "key5": "2YauuRSVoL3qEfTwvA5qfU7Zfkjbr4emFoL2TbZxnmXaTK58MBLw1FhynEKvCFdiofUBwFuLb9967aHrGPGV3T2S",
  "key6": "GS9JvP8qMh5m3LNWEDnrDTU43YM5RnnH9xFkrXuWnnhKjgk9woxQvR4JXQzfvbikSP7uhfgJY27dNybZismu6U7",
  "key7": "5pm9H41TPRvbKC6jhFYY5tbWMLXspUjWfoSanDttvzh68Y4dHiwHMp23ji8vcLok2EbLXJ2cuLuhCqtof9aDaCUA",
  "key8": "5XjCyGof5yZYofiGW5VgzaQ3SXw1LBYn1fbR4kYSF6Qg4BXtNNkENvHgYeEVitALupp8X1ASoWexJNWN6BrDLqDr",
  "key9": "2qRcUsYcRdMxxnnNz3WX8huSqcAXMA3UpAagTpsdAwQDGkyVeAeuhSyUW4nEcxs7FTM7m8RceFGGhD6FaMBchmCW",
  "key10": "fy6xEWFh1HkyQo5Sv1YujgPpmtz7tU3nNd7TDBzDPYdWuZ1KW6zCVkAhYu8fWzhA4m5tNHYXqmzpJbPzBKKxiWh",
  "key11": "4HZ2Fe9NBNcTxwKQD9CjDMaD9DSg3ab9is7xexHbHfVUasfwEbX7fmxRwRMVgdwwLwtpi1fbvFUX14SiYzWuHUej",
  "key12": "4vdM5C9FjEfGLQxA3dJ5t2LknP8bU6tpNRcPmAn2LTj18feYLyZoTrCi2CD8uvQs894Kvd1FPvq4iVM2Uquus6qw",
  "key13": "bvEYzQTtQfHispRk2fZgwD52zG5fQbeSnABxXbXogR3kZsf3gP6GYAFaUh6Yk4b69nLrNNfBakLjekPWZXwUraM",
  "key14": "k9a8ELxgZVZFd4aC9M8ebFjyXh1bJtRiJzm6NmRSvJvHp96M817mdZXJFCMhqmi3kUnXcZptvpVmDFGUZH6jtcB",
  "key15": "47fTbFFBmkudkhCVtfe9WRz7KMJYU77K3dFrs4FB7T8WHcFAmzDXUdgNaKFEcWPGjMW4iSzZsrhDQR7XaW45XBEM",
  "key16": "5SwESnMzZPLBKfqQcFaFpNkVBTdkzQCnFv9tga47MjdGHvW4j5pMmusJGNsfsUVx7crshC4zZi3mxzxfDXcXDv1X",
  "key17": "G6TNBWVQZxJnV7yERCh2zb7G2p1YfuCTcvFLX2Fbqgf6kCtV4Zuo1t2Mx1ZWtJGBfuQ2SfzvSJnUZNVLVU69FAV",
  "key18": "5ZQ4MQvb7W7fCS9YpKKMpJx1mSmsXQ8EjC79PTuPJEkhm8JUq5Hw332Rw3ycQyoP5nbSjX3mSmDGnFSA3S5roH4B",
  "key19": "4HKoKLiURTEwjGPCtMWXBh9rSdfXBowSn1YZfpDvL3UWkuWEeg2sLeMYuAVvL11h9xyjVBp3vajkUtb5JEbP7quN",
  "key20": "2GPpzAJMZjEPijTnNAxTZggDA5eBLquwqnEa8FZJDtuhnWa7ALKgNyxvdD6NBV4fS4dXE5w8V878jZNjR88rqA92",
  "key21": "3xJwaV8xVy6h7dNDdsxA2cPGJhXphvsAf9JZESbk6akRWEJhfcDbXeomgPd9J4C5s3FG8KpTNk12EddtmqTJdKPy",
  "key22": "4k2ndYn1CRtrrT7JYn5rxLwnDig8XhAusu8aW22Cx7DV1rygY5JLzqSDfBekuvzk5VSMKUiVcuCFZBGejAaBKWN5",
  "key23": "5SHG11jP6HbWN5gQtbxoSxF7zzkiKhDcDWqr5iThw2QtzHpp15d82p8M8irno5moe8kchMFjMEinrPUSV2FCKmf2",
  "key24": "4VBqX1XEP3jSkNUqJn5f3FW8rtyizh42dYW8kuPmy5JyHMKi7jQGd8AG1pxcHDASjS4DGsTgmUnW1zkGNuJfu32k",
  "key25": "5ETNLgAbRNSsuABsPBrQpaEfdo5oMLjKjLKgSWHZyLdVWNp2BkRvzfBDXgjJTMXErQKQRpTifpXR6A6bkpmjE9LR",
  "key26": "3gjH1upPKRuf7RMa11GRd8kaM5BMCsjebUJNzvc2KP1mkxr4TBSAb164NKHLQRYt76BpPXXHHFzec9Kd8CubuJPA",
  "key27": "ksxgjc4Y4MHaJqErNBBo2RfWv6gngNMBxnbzJysYqornhJ8G8XBQ4L2i4QUqyVvDuJqyktLjnYQaa7nsnkn11QS",
  "key28": "3NQVYXfHdETJSYMiFrMsJvKzPHso3HyFWXfmtkBVwKgkAY3g8aQsfNLgGBLk1TJr3dXLvNzonQkUHgWg8PXMAean",
  "key29": "3Hts9FnD8ePRcYSTbS1XtdsEQLqQWgZUzNgfMjYovGLTVupNudLpF2riHbDKb8guozEqFddxRj6rgL6Mb8vbDNZi",
  "key30": "212NAjcicxCxtCjEWW9tziAPkBLAQbVhHqPXEwGV6GRKxBZ7J6qCe4d5S13fbtjexgVyyTaCikkECHGDQESzPH94",
  "key31": "4DL31X6Jhvzmy6eXitxZmve6QiBdLnbJmYSN8tFo9SxMNjVjZ3ifDGR1Ff48pGiFHimCK8gvN1eAMr6EUcMUJGCG",
  "key32": "2xSmPXHYGexWzQGRuySWc8LsmyEoYkhTmMtM9eSQzhDEUp5K4yZVsF11an7Qcp8Zughv6MwmPEm1KshpR3aFHSR8",
  "key33": "4nUMD3iXjUuNMizqYHtJ1cNDavT3o68vbhMqvy8RLHwXsfL3bkvEw8i1NcpH5KZ5vYtLcntDDaSyHtsGcwbWjsNk",
  "key34": "2hxYdS3ecr2ezMdGx3FdQAfMxCnG4aQEVAsxU6tbSvPg3yp3bfmFDciHUF6CuyoQFEu7UucjA6TE55aYP893qUbL",
  "key35": "29pk5cnxLMSD6zuYksyhn6i8uqxXjsvQjzjHAqpPbH3kNTbrFfX3RWMjPCrwZMrLMM4bHHX8S6MCYLTzf5Z6MGwG",
  "key36": "2dcK5UwwnSUPhi8KPBiP9AzAMMCCNKjzJX18cnHiprTQN3MoKYKK42vnn37hwdUKGHH8vLMSaLX1qSmc7x3u5TBf",
  "key37": "5R2okzJVsgKNYd7M1TRQYHh6ymEUoA6ct7b8Nj1BYXhj3SA98jPwJjsYHq3fwcQJRAosboVtUc8SKoL4uSxLgEe4",
  "key38": "hbPLt5ZNeg28uDFwXRy5bavSkyihLZ3PD4MB9Z3HMAtdHPniz4ULBz626hWXFBuQ2dAqUBNn5VhTdyijJRVu7XD",
  "key39": "doehr88CZg9U63AtMBKbum5YosPkiqu8H6McAhAURNCUUie5MPFwkZDwZCSsLHzgCSsogsHX3SsrTvxLEHgKYH9"
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
