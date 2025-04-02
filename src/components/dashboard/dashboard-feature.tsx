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
    "jqjYPguaVkFDrKimijmTHRNZPFkfb4AGpiSMDjSr95aoX7RLoPXDJMPyYGxZ7S7BmWwLCGNQYuzkrd4GDnV93An"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N8mh3SZW3uzHBj4AZJktTWoiLNcGcRKtQGFKUWFmtvDvqHXBmXapF6JS1XdFUtie8hBra1m7C4SVWgPiz6pr5Sy",
  "key1": "61u7qUbRbYLWkkUNWFCx9HgC8xFbd6TYL9qM8xjWWX4GdGrR5tFavJWZitYsCR1os5bjfS2Tpx4E8rzAw1SbF9k7",
  "key2": "2DppmMYqbXMXGD7WHs3DLeE5D1cGSueocj5SicSeNDUwgCdJH7tgmX38X51efkKbHbgu6sZfExyXX5pW12SyNUmK",
  "key3": "3J2s6kVmsCiYr64Bsj3FMgThjR2Yc7WJ3gdSrGq1i3fA9LmNKtDSRXKP8W8b1DGEaKTRoaKrZBAcmYq9xTsQmKyN",
  "key4": "4m9k5fVCXc3hUXUbKHVAj6kAxgEGEtosQKdyVbfZsBAdMDAGfutr3X3bPdUuzGfhQLX95AmDLm9t2DMZrQq9Tfbc",
  "key5": "fbhMKXYcELJJrvHDHusvPnG4x6qHMiaSaMwBGxK9DWYZdnP9VtTSn6h9iPuFiJkicbUTunLiomD71AhUJYQk2Fx",
  "key6": "22FSY26aH9o2DyaZYw7S8aQb9tLwSa1qw7WAHZmpx3Dejjy5fVC3w8mT9PoeJquZJwHQ6b1RcvUD15zxA87vHoRF",
  "key7": "2mqTwBfcr9aJRersXwojBdqmoiZJeWrWkZXc46YVFstXBGwF5h1SUNLFkH4hPdiuzonEtL2bNt3ffsGs8uhDfJgE",
  "key8": "3K3Q9TPx8VuhSC2QJhkwcT7UKLsF4pQRsfkMnRKPeWxM39hVYGvJ5268NLTF9BicEjRW43gZYVsJyHxPqjwW53A4",
  "key9": "3imVtNnmWftyBYiAh3xbUGDqCgU6thXEvJxw1xPGb1uY8oBAnc1nDSbNunwrA6kvN3ZhnHWCgHpLRru41xdLiDZh",
  "key10": "26qfpHzeR4xW68PDSTZpqBda5Wua65CLBJhfsgmaRyF8BaDQ6cHyYmAEJQ58gRuLnjGXkt57XNvu6z6NeACpSwcU",
  "key11": "2XBtU1Qi4VW5Kwb5FZ1kfPUFebqgQ3yZfirkAYCfrXAyo8iJ8fvCqSoYxst33GtAdMmDmSWeUXtoePc7MQu3tgyP",
  "key12": "3kn1VcMX2tBWvsfCyMUTNFsTkDWpyHymz72jaKHkPjj3nqnPsty8qNg8Y6kYpFT6osDpSesZR2eDYHx7BrLZ8U89",
  "key13": "57Km5Ho4ahLawCaQzzKbQepcWcDf3UzqbfhE8JWygWU5uEha8JtVMUcKjv8uxJvN3jvWiWXa7nbtAJzwjLdvgmGu",
  "key14": "2VN3nS63gA3Y1QmdLA2U6SiYUatUxW5HbCM5Wkka27XRTtoXwNvDifBbvvm87GvCJpdQ2RauQWJobZ3xDVgupJSR",
  "key15": "3PLpMaAEsGkNfj6yiyjPXU84uHeJf54r8vnz5SXeX3iWXnXGMRKCyJSz1q6oxxTpmoVzZrGCxDz3LqFuPNLwekWp",
  "key16": "5rxGxnWGfE5iNQxqNXBnvW7Y6PaLb4uPHfBRDJHVvaDuYiawVKbviMPnr524yYnVRnNXC59RA76DEr5r1ZkFvpeQ",
  "key17": "5h7BVvsTwPnpqqQpNC36jiw5nQHPq9fSMwY6D1TV1ZyekENgHTqqRNqdXa2YKYVZ6zn4FqVpS3cZJcQEihb2aoWv",
  "key18": "55ybUJ7yBRHPSZ3tWNuneb6bEXBdtjHoF3qR3heFk64VCfW5Wu8awLvvc19T75Yc3X8EudrqE5x3GLaSj84P5gM2",
  "key19": "5sLTz6TPV19z85n62ALSZq8Yt8XH9wkS8Ypk7gqpwDjouB1BTRiHMjtPJEoba3eW3RiemtDYkpXDASJmPdrYvKcW",
  "key20": "ZLXBinUcxGV7dQ5YuTXx9AzxK6H45EaChChBruFp6pTcH7JTeiHzz8LaBBivk4JRwSWYFHebKzdCDqwERZLs6Lw",
  "key21": "t5EaEi1cFKkFnoHo2ftvcuA46Ri983PpVsSgnri4gkaDUFEHp8YhN1YbJefd8TvczUmCgzWSis8a7ShYsKTjy6V",
  "key22": "66KTsPnXsvL1P19kQo4hjiTneic7FommtysWAH5Bm7eJ7iakdeoFjNQjtHQx5tz1QujZirtGq6duGWQmM2xvbd19",
  "key23": "4zuQe6ezg5tz39TFVFmnoAx9HC3H3nboYQg9Svj5UMNzWqAwNhAodyweiS9GJoa8QfgCdQWPqaTVYAY8hZTy1qXG",
  "key24": "66hBMxukbu2EMrohuXimqXAf3fupSUi71UFxUxFCMqKQKpxNbpeXUohvuwxPyqZqCNx6mDVqimrkiqPvCzAJeG9S",
  "key25": "3qBNgy7FeqHwUzXjWgcjdBien9fx6Tuk2LEiCPGfYjFz8px8JyMhHeYtmHEPk5d51PfV4Mu1WPD1L4wEfunmN543",
  "key26": "5ioRUXt31XPUJkQ3mynrqa3krYiwoi5up4pUZYFeqAKjcBx6H9sJZe37kfDpi2U4tfPKVkNWi6a7ALzoFWbWsVSJ",
  "key27": "2oLwQMJFSz8AKGJaX85H95FXaX3nHrQLR1AqVyFRGEyn2G63VJ4QfVVsAZQVBMfoAQrj3o3iJvSXAwGSZFZbEe8s",
  "key28": "2RzSBMuCavpzShHzUWVtLZWdG72iodhecaUkK2pByf5owD6nrKsUb5KBbdB3GknheBxLVQGheVpbJGkQgMEjVYm6",
  "key29": "4smFh246mPfPomrWPrh8P3qAPZthB2jk1Xqb8XxbVZWs7ZYhd7ZV9fSzf6Jt7mezPhghQoxqvsYcwaVnnk6TJFdF",
  "key30": "4ictqeKMYW8Mt6MSh9pFTkDTeTgX1SfQNWpTxPWLsFgAsQHokaVApmHbYXjPPyVcLYshUuaqXfB8a8RjqPqsDL6H",
  "key31": "3sqWVR8sm9ybao2NaRVTCuk64akfyKAW69iApQFuwzAQLKe4XZCVkHPo2xtGDuKHZ9wys8ozhyb8tyoKWNCgibGi",
  "key32": "foZdCncCRd8YcDLysRnRuiDbWo3WweNJWFC39E1mhvsJzi5YcQsamRQr5FqAgCN6uLYShScWp9BUbn5Y98sud8S",
  "key33": "2FFbrD7XRCYe76aBQVPG12yj4u4BKUYNejxjU4WcksV1BWbAGcCzzboEEcH2PEYvakZCpup3JzUszN8VESD5aUyK",
  "key34": "MtMbBTU3qeDCHnDdyu26MLfPsV9erQM52qrF7RJAMMFNbQWUZ3dn8WBXAw586GKZ8zrz2S5UYT3Mc1k7gN2KJh7",
  "key35": "1mgXNW2Z3LiXWxLxt6k6iobK34LEew6shzfYXDrUh5w1JGPF4bSd4LiqZLECLSS7RdzY9ADbDmrDJ6c1oC3Xqhj",
  "key36": "4SuwTSTVpsaUuiZDP96XDNvsk9J9ZoyrKA6DPpbrScFctMuLdmC3wL71p5LUSRg3xYJQoHmioCV5JmXjUTv8nmYk",
  "key37": "362t9GXXA1PWb4V7ZJKPDMtYof5xrFanASzEtA8zorJ6n7dR1JxqtviSdo2itW6p86JxsueEbRAgMrp6v89t3HMY",
  "key38": "2mGpFXEK2AFNRkhkiMjCwaK1gkkfkv84sFpYQB69PY5TkNYTdm1xmfhxrAk473EtqanKNdvRHDtgz3JLDa5DWr5E",
  "key39": "2xp411WRN2iaN1TXHy3HErTj3zF1jiy7xwrfMZWmrRmEhQwF3nYYHvBkYfAGymGSmBbtbsUM3WCtb13pbdGPyUNK",
  "key40": "5PMckpmQEH9U2RqL9iajZvC3mXJcrjwJz6nqAgwk6XHBTdQz9GFX8uBWuUMzcJYqft7k6o5SLx2ETCqYFRsXZ51X",
  "key41": "3yJJkMkowF6qUsFubCbE3G4dTbob9wQDGZCA2s3cCbQ6TRg6D9jxFEDhmpjQFwUGCP1o5r1e9hK1HGfvsvgyLU8g",
  "key42": "5A3hURRo8pKzhTxXTJfi4qdvG8TysLpwQeNnjNty6xnDxBMUoDL7GAFmhAGrJkpKBth2ewMtKaXycsxc1PEGjsA9",
  "key43": "51ngf3kqqqxnAGCcoVDW9Bk7sMCK1Q5g9gpZVqTaeaddZGcXx9pxNrZNhhSXjPxekTJuFWuiQhewwqQiTxk3iUpq",
  "key44": "5SJbzbvoKprvzXgMy3mqo8XS2VkEx6rB75d4VKMrccwY2vyVXkVqa64C8BHQtrNn3fiAsT81qmRgzgyXHsvbo77U",
  "key45": "hFSrVYJvP3pvz1eM8yTTPKRtCYpKA9Ft2kw2C1JDJ6fvt6CDcnZYMk4Ue6HMmmgNKFrkB6U6ZYzPPfV2dAPrLfm"
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
