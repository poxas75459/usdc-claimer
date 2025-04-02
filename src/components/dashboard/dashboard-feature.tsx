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
    "vQmkPb7JudB1cFdKjQTonh7PK7pREk7ptRyNhyyWGUGVpg3uVsf1zYnXgFHBpEYCij6RwgbP9u8VA1PZjFo2NBg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hiWXfp2djGShHaR1iT3T8X6DxTKYRK358QAFy2HRMWy9JE8M7EcuFjsQ6e96gFhcjE8PDQfAZVEp1yp5jYHES7t",
  "key1": "33asXuheqyMQ4MoPx3LiLkSP7DdMAyxy7RezaQK6Zi5v1mPXWYJon6Zz2fuWnRiuErFpC2f26qioeb7pGiiTAnGa",
  "key2": "eda9hzJ12ouiBU1x46TRkJTFnVDK2D2gZsr5BMV9s4e4NCyWRAY3wzrbGaDppuWXzkbKYEymWQHczp1Xbeg6tHR",
  "key3": "TfwPNWQRiX6Y4ekHhYyxuvgk3pWhL72qqjmPiBP4TiGZVG52qzwTXhdyMGm6jTLPwsYecwd9dNwiFqPGeEPYLSZ",
  "key4": "5pj3nPNQ1WzvbECFf37nJriVAKjKpxjqDnoVb9AeJxbWsW47a4CREvX3DqSntR14iekfU2HKTegsXnMLrRDwGrSt",
  "key5": "5VWnT9nbBJeMM1V5DomvvuhbV5qDD1zjUMkEEfuEezvTyCo4b2uvj7cNwMxT4y7dqSthEx7sXWQbmpZNyyFhnAgD",
  "key6": "iYN84jCpGkq8UYBbwo7WK4NPEXBjjiYfxa3VNdpYmANf4gD9QmLBsfWNfXJwYJaZTKKDGpDKSx3BYtyFJgFergj",
  "key7": "3huPArvAJDd7rC49Fx6oUm8mCZkWXxrPjVbvZb12BdTD1CaEaWnFfzLQFwnn74LbynYvbF6crDM52J7LdbsD9hWm",
  "key8": "5D4XruDXwBu48Nk5S3BpUBPhFqQkne157jPxMcFsDnTdEEECp9mZzV86nA1xUFBDpBzzRVWe52imS31B7sEb8DmL",
  "key9": "4tafszdbxGD9qA4sQBd2WfZgQUgt28Rsqt7QYCx5dShpDuVfr6ohowpei2w2zzcpYXngtRBvfssHighsdTufMxtW",
  "key10": "UMWTx682oocHberCvMYWSYdPuw9MjVDSxeQQvmL2K8twi2MjMwMuSZkQnhsdev1BerDi2k3Cd7FjQbB5f7c9eK4",
  "key11": "5f5SAfFrEQZP7aUeRGnkHmKTDP5YetMHmG2dbgzahpvqAbnn9mk4kBQxZB9QGwLN18KUfX6TNxeGZAXwHTK393aM",
  "key12": "443Jq8Sig8Tms7xpTWsdzRPQ1xprDGbkw5hUe47r8T23sdht9vKPEptuefggz5nrcpXuHYULWUQYXVPxbX5habiy",
  "key13": "5XkNf27vhVmbk3aBLV5yiUaDVrGpWG2snuTm8mnYCda8Ye3JKiSE2n3g2HisjAwvoxsphjTPsTpxDnC5CpmcoUWj",
  "key14": "51cXYPvgP8VRrYzZLYBGZb1nvLwu5hm3mxPXQFoJjPaNVLP5adxhr2x6kg3CJTDNvzPQ3WR8bE6L63dNigKSqB6o",
  "key15": "9GLWntSYtgWUwCS16hLtb8hMX9R4e4Wcq1AM335zPvFMQ6oqxKZEFF19N2qQCVRx22sW9a2HYTZEY2JoJejwvBs",
  "key16": "sWWwxU7jYeSCWTmcKw7zUHtQgh7Dazu8CKVSj9mfQy8Um4zWEYPP4ruHQqwQtAdgUzZDP29AcRN6mzqA6Udh9is",
  "key17": "2VT52BbHpAqBhQEtZqHD7PUNZvJYq4JTjDFjgsLBLXd5uAknFA1g6hCVvUrEVcaYd16ZBDoDcLYeAMxzt9CSzdbN",
  "key18": "2qLk9jCAiNnHqFggrrDYnv3dF3VTfrK9HGKavmsTKGAziaEez2nQ5Ktzm9DCuuxmSP4DCEJ7S2cZfxq7kSn2rn6a",
  "key19": "5BeuBupgUbFUWCm4tWa7bUyXZmk7Xj3bDcwph96EFtxV7Ui2xZsWFA4PtKkB9XVK9GgPekrJXhtAgLyFmbdMbt2U",
  "key20": "44uv5MStXkFrfwYEbhtZL54W38f4htpbbkKPfBQKWitpty2qxiyMkFUPGrLviv77oiqrswaqbEPvpGepMG5P11Do",
  "key21": "4ZYwNiodmZ6dwP6GHgbydhuLrQ5kjz5qCj2QWq3Z49QFNZBxhEVcBLdgwU79QdM8Cr6NLMzGRnZdqq2jkQUaxCSi",
  "key22": "55NNc7F2KhFY3PipnG5b9U31kFtX81T1jfwCMtbZWt1VySkyECFcFCxnGt6sX3LnFPAzBaXb9NZtiik9eKCN4LJt",
  "key23": "JCH1TNEF8eRUu28YhqvNw9k1Mrmuiv17t96U4UnAtNeT2TCx9dRRcNAgn79UWjivzna6aqaTZLUnwip6PKcAi7f",
  "key24": "xsyk497JFmuKLr2BVAyVPqfHibdQ4hfbJ3k8pkKUyHFsVA6mQzfhz1MijZcCcPdSXJoLZDkxyv43cFtpC7Lo1cb",
  "key25": "tVDW1PvoRugSoAwCyCJsVD3vqDX38YLo1U5QfcqKCwmfd7vQpexqqXnfkQMnKmMrrJMBoteheB2dCMJFfadvyFq",
  "key26": "5mUyqtvuaCKudyTcAca2qdnwWY8PKk9avFN5CWBMZSMSw11EKRCggQLMDD7oqMRyCQUkH7YAFV2FiWoCyVYwKwJR",
  "key27": "2h6jocetKsApVYLnUKpdaknqtZiewspjQ3AgLacnV5pd79v37W9CCSqpwgHWwfvPPRoeCsf9UUxVSZQMTGont1Ck",
  "key28": "2z2cwKz6M1huvjcGxuAoSK9ZZGHyG6nWZjoU6vZRD34e75UrqS6dhh2PQvVDqhyYVxBGr8Ve2L6SHB5iXEpkb6ZD",
  "key29": "3wwpEjnZDzShDc4W8MaS7KJrszXiU1aCx6uJxsXpoHMWLWGSC1kethh8QzusN37oqGsV9kzwKnwFcGbe4WxpVUSY",
  "key30": "25J6rzWjEh7Bmfxdw7Rx9X8eAJFMqE9kVVqrjoFjFUvT1k9qrryLhWKDUUUKDTcXDJefxjmP2Vjxwnw884y7z42F",
  "key31": "2YvjQXSy5559d2ivPdeM1whMNfyXecmogrc7mLvg5NHNkEgGKHAuuFqZyMHmHvJoVzkzZTjCCrfs4TBwHmt7t9iZ",
  "key32": "2gF2cZxtHPNgNLBP4eDHh5xwyXRRE4TiCe9CUcVFoxVhBLYfYW6YsTiu5ZyWayBSL7EKGb6JA3nCFCtBM6Vrby42",
  "key33": "4TknbCiHAy6vMbCMpXQ7goZjGhFEggxMVAU1sN5zBCixqoyggvGaSYJGv7zicbBeTrLYeLBksaYdfthpNTt54h4R",
  "key34": "2vFM8PRtvuRp1UxjFtsV76DHdqWQRu7DJybgr3qNHiydo3Uj3N7ZWzxWK3biBzhSHaJT1X7X3bNrY68QzpbnXy3D",
  "key35": "81MovqwsCoQSp7J8NcQKiTjqPVdqLSLqAQwbe5rSq214a5t8mXMRfMEzRXCmm6yGv2pv9XQ8atQYqeRficZu9Z3",
  "key36": "4PkFVhVkPTkM7gzyKMcif7nbhJfj33iAfDpqBZNrx9nozaxpsQLbSmM6EbHQyhWTPtEU6xtEJxr3MmpmrvgGuFK",
  "key37": "5uwd2h55h2v5bAGgDKRArHbBPJvusBZNhYNjpSjRbdsRMypFpibX4bk49swNBD9ET6Gmgru4chbG6oWQAn9mjMVv",
  "key38": "5hS52DLZCaAq8eXjn1SzLxNYMBAhnXRyvQw8fxiHQ46Q3dH19LDVVH697nTjBpJ2aKBZV7CSQ9tM8FBJ3pcRQbiw",
  "key39": "5PAAEuwvXNZaim5fm8ShCCwjcZz5Sx4XnfJwvQPiUysERqzxmKoW5CboSPhKpXvzrxWjT9MRV9W2WdAHZhequ7PV",
  "key40": "3NR1Tm5KzPqQ4bgcdZcn8htEuLjk4R2mjgUQ6UMWo92muvVFXCeo1bY3g52fFHX67EA74orsbP8sagBv5LgnaMns",
  "key41": "vFEmdz5WP1ePQcgoCZbJSK5YR4GstonDSLRrg6smVHiAVWrrr6QnGKufJZ8ySLcA5DgKgkJYpsGTqLxAbynMPSF",
  "key42": "cWZuaRJdhnap2TT6Q7AAqozz1howrdC88oaeTD93m5droWp54MSoMhDSrLF7ukmXqcmQSK2xDEKLeAo73kaDNXW",
  "key43": "2hUAu6CDyQwZm6SGeWMV4Q7XcjcfQiKvrZwBfHL2Sm8rTEribopQ7yz5DiFGZoRhfGeR1w4S3S1NeHoZLV6T4c44",
  "key44": "2wC96mgK8q2TL6LnugE61KByyS9VLnwG5qmGcCFNJhFUXrD2zSc7SaksU4a2ujTMmgVf8H6RRNi5i2hAJN4o3gKU",
  "key45": "jSyVqbP79KGm3QboWLAbn1ZxBUzEJWH5jxouRUcM4zU9xPwvzp9SpotmgqDv9yUSzj6Cdz83gMXxkwyUAQyjNTX",
  "key46": "3pmnnoyu1hbp8pKw1DaUMmAu6jgCKVYdjff77B6b7MAoNS8chBuupG4aq6KRyGH7rAuoyrWcPEm1uQVbFWaD2bcz",
  "key47": "SJjrRnCKK1ii6mMRnDmBXX2W2goaGdpYdHHL4XWpXD6G6qX7m5Xep6xcreSLCwdTVQHBxa5a7XHzEKLMVYENpvj",
  "key48": "22GJy9QaoZgCYvhwvWLZTfZdduH1knzWr3Z8t243iuLry5AiWPDzqYsqpuPaG598BhW1dktNV8EfWywU1VvjYnuQ"
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
