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
    "4bQTNuuGZjrQQtV8WM7zH9j74DeA5QD4EvPkx5vUG8RNgzLvr7eNKfQvvUoPHsEcLAEmkDS2LaKFowfANV2C7AmP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Seey4ThFsrHjQpmvGoBhbWKMmKJwnUPHdCuLveJHLVrir2iCL9AzAMMyVo7hjpieSgq79AbZNgL3TSyY9FiTWGg",
  "key1": "3vcnAYsdpZzAadF5w4us5QdE7aaTN14x6ajoLVQJkVLNaFjCMA93oDpfnfhPumNTgNQ3tMctZuEZdJinqiUywpYh",
  "key2": "4ZdwW4Nji9GJNMCxK62xj6VjhhdsjUP8qVB55YisMRwTmDSWBntF2yBoMf1yAhDEWYtBHnJzhgg8b5sM1c3VMW2B",
  "key3": "5qqxJKwsdFVwouJKgYpEGEmiRo3XpWebiuF69uUmaQ7McKgXtk7NzdKQp6UB1NC5SpHZvtdns3cetRkKYfbbE8sf",
  "key4": "4wYNqEFwL5yu4yBXvM2VXB8AKzJ153MX8jaKr4WrMH7Kr3ctGaFUJyvH2gqyGKCh3MwWEmPAAfuACJL7m4eqpvkb",
  "key5": "5CnUnpdAWJmkEk4CvWPf78zke6YqFGZLBqZSMQfabzGYNaEDVyhssMkrbYTbwJb8yWqQ2FLWnCJB1z2BrgDvnGxx",
  "key6": "37SK5zj59DvC54WJsJQ8oK2jDR43pgbCvMgLHYALWbcCjXjLkcFpemK4Sofdn5CXkCH3Q4btUnJJLj2RRc1Bpyz9",
  "key7": "4JwWPE24HAqxoAWqdgGWACohtAmtTbv5YpvsuALebM4VzFK1pG9Ww7chRBBho4Uk3UrndKd9QH4YDKn4F85nRDE7",
  "key8": "2USUUWEdjAPZ6tuvFe32nC2KmgnT3tYL47rRYbmG2v5gPmbN7ox2SfMad8KZR77sDMD9nUNJFEL4odcLM5ePCHTs",
  "key9": "2t5r4VGh7XBpxZHc5i3HTXjiJzH7McnxsQE3YjF96Rr4hsdcxn5Ls6gp1LP8fxnpKiKE31mQtqNqCgBvKiEmgU1H",
  "key10": "3ze78CNwKZXDXuEQ3DRfVToD3sxJXXRPfN6nszJVXyVj2JojfyykqMUFUQaGvxvMLnWhjKeLnNsCCNzQSzVVceJm",
  "key11": "28HmumjahmFoWsvTneeYYy5YbrzzAA7undCSYtB1QCju9NevaR8dZ7sK3nkkJpt1kR4pe7R4jLeQ21GXVUCgriqV",
  "key12": "2igoyuD7vY62hu9sGVBmUx71563nhz6aEjhxTtsDvGb95crzosrRc8N8dc3B7ouzheSedqsj6ewChM2iZpNXx8ys",
  "key13": "4Nm2sYHBRR5r8UFhNDCgai5P51QCuKXUMeVSxrzr9vf2tv7TBqGTgiW6z78d1XHFbDFVqdiDE7BnkvKESHE9WP5R",
  "key14": "tXntqFRYibfhutn6fddEkJ3JaARTx1YSCQUkC7oEorK3ZqApMS3bHEcbk2RusxveE8bSJ6szjdUUKR1HnPB15q7",
  "key15": "3DvU4z7Xy76KneceFHZq69ima748RwUrW1bMGSvqk8mF2K1XJUWGXm1rzWUPaEufPnT9caGvpqH5s3hCgRyXgkPM",
  "key16": "2mvsskfcH5cCsaLA3fDrNoTJRWsUadbAHcxZdTN1y2Z6qznh1xGgXkaFBKTvtvmRE8QUda3QuzJm1rPCKF7PiGeR",
  "key17": "4GtMJm4CvSHmwx2vKp7ZmxRN4ebTHBQSpLrci2TcX66jeh6D2WLVMkykCLdJbXNzpNkCd3ZSqXsqjcwZzcs8xdZx",
  "key18": "2ifUmvsnTngbVGZcFwC9UEY1BroAd4ppsESwDYP3ExGqwjLCHiEKmHa3jEPNYCQ4vSS99jhZxzQ8BfM8BCVnyG4i",
  "key19": "4fihvzL7rAounpVv2tXMSNzy9hrFRtGvmd3u1UQKyJXVMxeCH5ccp8oVA46kJyYa73zfsh2BmA5GziAeLUSc5qZ8",
  "key20": "54QwJLxBRZ2d4PhGnQFaodbGUckXQ7Kc5zhX8dLhGjuCtMrdPzuEZGYwb2ohj3VPKzstLn2nWD6XkXbSKoDhpNic",
  "key21": "2YXFYBYpoFvS4uJvQq4Tnhyk3GgAzj2mu4xjEGirp4edsU36qbTANFnLfTQjXQDwdSiZQ4VMhfKJvjnirpd4mRw2",
  "key22": "3N2w26Lwc91T29JqyuvWVtzkzStMbAxq5NF9rSLr6AwbxqhTzN1KPWjJrGmRTW8fmguYLxcrYBv4NTwnw7akDJxF",
  "key23": "2f829y1jAz6BcmZqeTw2Y8bPL4qrNabUuGgafYcpCQw3odzRFHEYKbMQ1yU1gYLjeYU3grbzDNM5FFhrJpXet7UW",
  "key24": "4FhyKoSotD5JWCzh7MDCGj6h7oFz4vSos8U78FTBSn9Qex8VnkvwHGaUDP3XwZKKkdoSEiVSCkjE5haSvMH3L9qr",
  "key25": "5XPHeMkct7tP4iWpktocsujwpjGCgtV9c6eozBmGu3poyxcZECw3mfg6EBSLvbi49YJuPLV6idHWu9hUuAns43gz",
  "key26": "42kbvR8Y5m4ZkU5h2FRVYuVaAWD1PRsFWHdVFR7cEF3TcFfMVsdXT68Yfev6Zkuut6FHGaHD9Zw7d8GGBXZxFT5Q",
  "key27": "2RbiRCekHNpijXwYvYbtcLSAtFBj2sT3eZL63JHVLiCGm5qpYX8DRrjU9Yf4dLYLriRAAp3nYL4psVyCBKqGx9VN",
  "key28": "34LFuAgfDFrFnAjM9Lc7NbMmPpEKRcdn1w5Zu22143F5sUpraYki9aePpLApcYpGSRLfFmr99TGDKg4QFuj3YfpQ",
  "key29": "2ut38Srnt8RDED4NZMqxWyPRSZ19kgJfb1Ji7jsHsErcM63tj6sPkAKWYzFd7PD1fByuNmhYvurhtfyLmXPFz5Vw",
  "key30": "4kaisw44xzVuNDc7sPUX285PZDLMR8jfGD68tL22uj2JfKptVYUMEc47H4L2M8q71Qmis18HbAwNX3XUD2C1kWc6",
  "key31": "2KKwF8sKetgobAmW21R3QuCtRhBGEYjCn6Q8AVYbuzFssqtNGXgWnhFCAFxcH8pCT5ajUUuB1LnhhRqVS7qVV9fH",
  "key32": "3tEDT9REq3cVkZWyiZ1dDWhqH9WUHDnyApxEvGsLwQnXLVTGuY8MMGvZ28wJEmwChJvrXbSL9kMUwKqYdtaMvkHF",
  "key33": "3xNhFdePs3PSTrDpcKqnrskLKhKursAY9b619gXg8WT33RNC4N8Q8iZ4CsWVVFdE6NRYWJsfDN4RkKHrC2sot5fj",
  "key34": "xwDWsXLKURdZhkdwPmg4kKqirz1xizPjMPLa7Esq1J3DEMyt1DqweGcip7AyGjAoB6Gezxiayo8KJgMDJj7Pr4N",
  "key35": "5anCUeCWpkde99rEZsgdBB3yXgcWc1v4qy2SrqTQsyPouaoKZDqJx1zVmCCtRgWGKwjPqQcCjmruVVnZRP3PTdhS",
  "key36": "57rBMrhLxD7mfpfPubVkPbs6VsjL6SJTghn82EfhoePAdq4hy7NRSXGya3Xw37WvPjPHoNk2T65KWkHnbPydtnf1",
  "key37": "hcxbew9vTwdVqEwtJos71y983S7RD3TFprsLo5PMmqxyF4nPnbx9wxGiGwqvpSwVLUXw6TWAozA2h5gEBJBBTUW",
  "key38": "4RFcWfXY7rL5nwhRc2y3di1FovSSPxamCpMtMPnC1f4fj8rcWgHcmXTdW2qDpFCzfgZUFwB91ir3jAN4TwSsoBh5",
  "key39": "2r1h5f7vDEtnX5Y2JhqmeF656qACVEi1uwjNAnu9ykHsBmfRFd3LR3QS7jUHkeyBAqbqV4bRLL32p82JsPNetwZF",
  "key40": "5wFG5DNbEpA1oXpU3gqAKPVFVxSmudgTtgJhxmVkAfXeAYJpgkxvRh7j8WzwqHMaFGcTAfugQwnNH5nbB6sJMrDu",
  "key41": "3p5j81RpAWLJchFQpuvNnQv7yBodmxAJCncj41DsLCSp9Wrg5oMgDqF7ZLMtdTGwksvhLhn2LnBJKi5yWDxuzcSF",
  "key42": "4QQzxeUGVVh4TJ7jmLinkucQXKLMe7L5XxY5x8QfyXkpCoQZeafeajRM7dmocUKCGqZ3NVTR23zde3L7dbPoaarw",
  "key43": "5V6DWPispmdtxfEgmNKbBUHiiCauej195FrMDEWjpbBnDhMbSzuXYH8y1jeujrreV5BXSFQNz6ZRMsBVkfpRQc2M",
  "key44": "3WAz2xxivwAW7WkbL7tfKDgW9Fm1Zbs3hQxRnpwxSPpRiLfdHzqNHARDPZEppjAMmhtSH6Bh5SZ2bFnHmiPUrjtY",
  "key45": "24qqCXMv9GT5R3smuZMFeRpofqxbb2qrvYWPtcoEhWbSuza2TB51Wv1B45R7Zg2QfogcBBRWm5phvoc8jcnKBahS",
  "key46": "2EYZG6HkCGBWxvFkKDuu5kwxkG6A4YGpeYBMDipJdFjyzCm1md99JrFTP4uzJX3TishiR52GmvDfaRSkXFTsCYys"
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
