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
    "BCyska3Bfixz9WZeCPakQAU191Zppf9YHWnkHTvBDEjtA1AqjCF8auB1Dvx1RtB4g5hCutcpeKbYy9HcFKpr9p2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zuibAbpwPfYfkwG5tiaCz4p5E8NfRN8Jfbbnno9T98HXHQLgFLReV3mgQRcFGyqEkR2Ktfcq9p8WgevHSVf3TEt",
  "key1": "xYa39h2tJJ46TRegcwxCDkEMCzbV6e5VSqLsrmLCJEkzRX8vtBLMihkZG5J3aua1EjKsEoNTwJMuNYAAoDRxiWj",
  "key2": "4Hb21uWLdpnt66CCeQihQ1dRU8dNNSk45MJQQtLWUUkwawgjrta4Qon3FtNcUrSwvHM8fUSAbpFqpwPpjx6rWBmA",
  "key3": "5nM66AVzrkis4wyf9rCdgySfQ2T1tGDM1sweoqvdvbzB81wUSnWjfirtJr7NEv2bFWpW9GXVCBxb1Za5XqQPaBwr",
  "key4": "2qfrBoCtmjU43ouX1t1iLx63f81kpUaXiQw174eofaR32pKFzFhr7BD7hSuRiV5Px5LdmodZYthRQ9SJPXfANoVU",
  "key5": "ZagacCa7mbR3eyRL4XRQAa6FcFakT7FVCtjoMcUcVwz9NfiPqCpmTxuUL4qqHNKkTJZBmnfn1aA9ShK37CALi8k",
  "key6": "2TmcLzZWFAG3wectm39CEKSoMZEi5javHdfwhJ4xsbvgXFzD7Mahv48bTzQ3PydmG3As3gt4BtzfrSaDWxL2ae9d",
  "key7": "AGk5EYxgBsm74sgDrDV3MuyFpcdcLNFE8BB7gYWyszpwrAZU4mWi3ppkPg7DDDAFd71p7r54eDXGE6SXTwQrCn2",
  "key8": "3mzN5f8LuDzPnvJY82UQGyvLTrFHfFg9F8tbkda1Rxwx4LUxYHvwgSZetxpuwqSAjN5euBU41oskdANBLpHNp6a2",
  "key9": "EX2DtZ1jD7Qmb6sdSR1eHwmuJeKoHjuXJavLbJ1ZPSeQyEViDtuVkdkqK9GSkoANiB2Czm9pUzR7MtH5Vxn6j9Q",
  "key10": "4inphzB8yJ3JxWTFg8g4GdazNPRaepbHRXYZEBEMGjQC9HJ7awT2B8SvJ1jjwLQkjMTCyyVeLgYXjFPdPwq8W5gN",
  "key11": "3keKDgapay8ooVfN9Z6vFqyFKJyhuXnKgewB1B2uWMhDbeUNLePA2JRaPVv8HgKf6PAqq2Q74aGj5pk8yki3ZiC3",
  "key12": "2tvG2hGdsqbsJKPo5aCHLwQJJMigtE8CVBr35u6PaTHHNgxK5QZB7bkVrSomarhtKHSGHWJRtsUz9fg6Cnx4WFZv",
  "key13": "2Vq8sK9ztPh757TjMRZhnpLRBwFjQcP8mC9VgYSnouidXcDK9yhbzTFqzoA1ZLvuaZyobfR3DRzEoh4QPYiJZK6",
  "key14": "4zV6vAyXdo654tToLDisNM6kBQpUuccTAv8bDFPpwCUWGA5qEUKMnWPcosRAgLM1QMzWqGuzvknm1smLQoKL6dfd",
  "key15": "3mWTMd913bbWdD6H7hawi1wfLycSAbE7jLBDn7jxrNtViRYgA6KtCA428GyBYt2hHQoF6yNjKCdhRLT9WhdAqYaS",
  "key16": "3pyH7Q1jAmj7zfweuCe36492hZgnx9ZN5HB6nsW7tJZPTfLivqmuC7BbCcviHtu4L31dM8Z7Wn6mPhahjWN56CiQ",
  "key17": "d64qNawfqzaC5GJ73j6ftfDnfRuW9h8ikDpwijukCWFpmRpXXY6xB5tRDMbCNQZP7FzXZmARZGyGUYXjfLaRwCi",
  "key18": "2w9jabNcY6djWSxBvqFXTa5tTWWE5j1Yq4we9BY9W93uMQFT2VjkSHc941Y8aGjR1BSHs1UYbbD8ERLJjf3UTaWx",
  "key19": "58AuSw3csqrFeJhLmbQ6mhF6coK7WniCY93WSmZRihvt7iWg8UxeWEm18GHuJHSgeJSgRdfN8mNH73MMgikbFJRj",
  "key20": "2dntvKL8wTwLzzRxPSWm47HDQtyB24NiMoY2rdXWiaP1hVwSd4X8Mdf6iqDMwrGNf5vFmChVMqvixXk3nSBQr2oc",
  "key21": "42Noo4Tud122MosKBgnMzMmbguQdsu7ywYsvpmm1Q9m62Zv3g5JN3FFL3FFPLmEdgtYiabfJrBnZuKJRZBC5QTnk",
  "key22": "47DfePFWmksZLqDoGpKdHjQXh9gofRmcuYj2pLFnRNKVoDb7EmYYWEjHfN2FScXwFV7pQxTnG9bZuaqBaUbQMdXs",
  "key23": "4tBKSVp29kpT5U9kjsXGUqPgGucfuSneygY29nbV38VFmYNtW4vqmz6itazvf5HqFNnEAuZe89FJHjnxGD1FnUaQ",
  "key24": "4p8uqXMoDrmbAJ46HwPepMiKypBDoX9MKHCR9CWh4waUskKboYoPYXMJ9m3ginh3G2zj6bebwz5JcW3hMMhCNEK3",
  "key25": "4YV53iXpb4xhFL7NBhbmLoR2zKagRJGuK9hUkM2xcN877mjiWJTFqK3GmVnJ5M2Uhzktq3v5DU92XQjUXo3NGV6a",
  "key26": "2QyZJLoNkCvxTDryCqNyjjAiXGAnM6HbUydjzJYqkMrsUgDWzsvyDNr6LaJfR5b6Ki1jFZiV1eVvfFpXSRtdEvFV",
  "key27": "3Gmm86batVmrFVnM9fq98BY2wq36TwPqc2QwSeWgxriKmstej5c5aAdi2ZYJpVN4AT9QHTd9kdD5B9WbMkR2WZk7",
  "key28": "66Uyct61j1KVUztAjjAnm1tFx5yCUX9UiaX8GjrS5vh3cx8pLrE8t7dBovntik8KE6Q8XxZnA93AMszpAbA9cVYa",
  "key29": "2H2TXbSquoLKXRcRhvi2owuDe533NHJji6MPQ4J43vQSd4xLrRHGgMg8T6Scn8e4EzVxioioWn9PQ5gAYZeSYc8Y",
  "key30": "3ETrgEB4ryfQ4qsbt1n4RBLat1mkM9D8moS8z1JvrZ44KF5TqxxjpMD9WMhnR9X8Lw9hFV2UStedfcHT9pMMYh8v",
  "key31": "5q1THio6EU7ANmYSnS447wk8GKdAUnsAQ57GN3Ri8pxSboc6FHVdBzJR1WKBDmGNo1sB2YFzM6y4Wc6SwA87dXcQ",
  "key32": "5bAvC8nsoboDNwajJG1jTv69M5ypupzd2W7PaPyZApeuZy7guJUAgHJoLr5pEFrq5rZzUHY6usM8nPMFh2hgw5U5",
  "key33": "2tFnc4beDLDpc4BCZSPfGTa5UPfF3VoRBKTmR22h5KiWBJSYkyxpzakG7Ed6bcDsPuxtAvfWnSEifp9mCyViwqGy",
  "key34": "3AmwM3LCWhvdM4dPCr9u11STQuqLtoPVyKfLTNn3f7F7xubCjkSrM1hjGoRsZQU4mcBi18Wd8GLdMpyW8UuJDKhY",
  "key35": "56gj4d7y6BDYCtYLPhFqWVa17qHutnqZjRgF1m3i4ybNgmBR3sdpUF7ddpk4kcFcSZ4HGe4RKoWxJyHqWQoGnzvE",
  "key36": "5ky7jPxJt8U1SGMVExtiwSiHAneBJj1j8dr7Xorr4T8oFdvHia9v2gubX2WRsfbZvzE7ninhkP6sPJ1ssQHXoMXt",
  "key37": "Ef1UjXtSfcpxPkrtWrmpXacS2Kov1w1P8WusUeSD4Tw1Z2CgYaGGkn3fsDsABkEJ1pYYXvtCH1BTd9bxn7maep8",
  "key38": "iqCHKwFgK3EaXeNSq3iroGbvF54qYEeXrNk1RrLfGk2yB48EgKDanXwWRx4cbyLysPDktj38pWmdAUT3QpUZ5NW",
  "key39": "57sPpiEcTKB2KEWXzPSNzRQnj42wZTNtb15h6sqgALc1NvxYiEh2WeiHxeafKn9GFi8Uuk862L8keau47xR3dK7m",
  "key40": "5csGm2SFsGSH1WmA1LzGoX7WLYwFRJoYpfQK28pvnsMbMdNGksz6VaVLSw7UUS92pyPXoKNX5jwKmocoeqrKjv6D",
  "key41": "2BXencDNfxY3XDJGuk5xTLZfjrWP2P1qyb3jkQ95U3NxXKFMmE5KQ9aBoPNMFqpwDkt9odigWRf1YwoCkdYaJRK4",
  "key42": "5UTPdQiEWK4usvQZ6SPak8LA635z7Z9Xh7HtPuNzoXMifBzP5M9YMUuHPqxzGwmd5o4hX79V3VHc8BKj84iyddS4",
  "key43": "2uEV93Af4AFJkNfoxazqAi4HWNyK12ZecRq4qsdUwph9kjxj2sHMybPggNaSwoUw6QE8JGeCNtK2MGrMQi2cJSJs",
  "key44": "3kkQ7BWu5Ns1JC4TqcD28vRNqQbdxeApwh4URv41kutYhbudYZ2rPYUBZCiD6A4ijpPbEvCCUDNKktWVsqwBnafy",
  "key45": "2fAnLVJhAJo7euP8CKBX851CmzERt1riq9FTyeYGf1pATgd736izJHf7bLGGmRHHvjdqxMRkpwXD8N46FH7ya9XG",
  "key46": "2hHB2fKgCZC6Ak1Z2L359UB9zVecA88cWB1sSeZ6EpHu6AAwWT3j1HvfsEgJ9ZUJTKcM84PssP9FjTvq2KHNBSnM",
  "key47": "4yDckDbphYXjHG1SugdKfRud9xNvNnVZqdWXL9jS9Pzyn1kbJFeyG17dKdJJhTT3Er5bVRTArBmkgARRo25JFoMY"
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
