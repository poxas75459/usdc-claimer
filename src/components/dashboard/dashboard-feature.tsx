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
    "5i858BzE9tXc5MkhmmRoKMC2gZRtPJo8Mw1JBVgLmCHJGrD3G71TqpV1XBt8wZkQeZYGVoXei6vA6pjianpAukyh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dKEoJdEKimDTNy9TAjRj78K6VCoXDtBarH8UHRebK2ZtGuwvK1EDpvwXsGQHrABPnGRnvVrYjyMKzuKZg8LTPsG",
  "key1": "2pYyVrHAhQofgxrbtW35twNxH2dvYD7EENrRNXsxHLtB7WuFg8iqeGnryB6PJvC1NmvZGar1EKkiBfo65DuUw5VT",
  "key2": "3kGzMzmohQGffW4XgRFWn2UmS9huUZSWRkJBGrHnYBGhe3pnCPPVw3hdkTaQwkMgsS4vqnQXpkQaDF9ptbJ1ei8z",
  "key3": "2iwDj3Mvu4Qo2sdwpaLS5jhC7u5yPrUMtCKhSsgf3m2GJYowzxQZof7KBkNLhohL72R3yB2atMSpag4H2ZgAxTuP",
  "key4": "63g5nKtDDvcFq61pbZDLvxjRaFCX2R7eWtKE8EsCXyD4TrhQvChsFapNwkFtMjSxAPeE1bmfgCqj3pfgSwrMscUz",
  "key5": "3cphgU7GR8zB27F38DgbShm79rd2gNtG6Ke41gYBuKW3SnVdNBJtYvv3Nzx1fy7bfhKtCHy2kd9ZkPNxZErpoSn7",
  "key6": "4FgqNaLWSp7Yat5jBM8hxiU97KKNFLsi7bVm6rtuYgkjR9qcSmtcfv1UWNtukbqdNY3coM14Uk3pBdjST5w73yNv",
  "key7": "5zWTddgwDVaHG3DpPSa5xy7grPztEix2xgAmhyyYSR2ha3WQGLti2zQ8gs2Er5kGSYdeQhWV59soFrGDrUQb2t5c",
  "key8": "nLgdkP6NKzjU77HbUHveZe54hPgSbu2CwnCH3GoTad6SLWBHoMn4rVz6VC6mxcfhWMgWwFALZZiouK8DUwyacvM",
  "key9": "2HaaZM7tA2attaShA4jQaGHHQu1JZ5ByRhHLuQC6vjmn3P75BivMkHi7hC3sJBPFKjch2wTu687Vr2Hwd5gfxHm3",
  "key10": "fWGw9EMh43DxbTxtDF1Stn6NSBMpYVqn1QqzpFMEZBHZPE3dtdE6byB6BGXooDhHA51aQRx4KPbqqqnq4XYW63K",
  "key11": "4xkKkyxjUYgGYeQuZbmppC1CCsQArYDqXyGuCGuRFqy4P4XuNJrcArzhMM5FEQYPC3RzoobXoqBrQAZ3Nntbk5Y",
  "key12": "3eoGfgMWXoLXLbQfEX21k8pQ752vaUMdVVoj3EFjFjqxAH83R3Xzgw2vh1fqYrahHTMwuuwsNYv6jJjq2cTK6Qjq",
  "key13": "4nmjXVLRTr9BDUPbhidW3gBJeNZwvEYZ6xnH4dGgqxXCQrgkcdvmcicwUqKJVkxmHeXhSuvwN9ZLkbmuuqzYJ7oW",
  "key14": "3oQABgBr8N7L3iWPBFFJG9opHdoXm3avGLU7diQj2GpDYKMAnP7vGi1Gg4zPMv7BLigKgyoZnZDCdCdYxq6YPQqR",
  "key15": "42kuB2RwwiYgYGbBDSB7wMAnfY3s6ppeazGtyqw6UZ9CE6Mq5m4doxAB7WfYrAP5X6UUExqZhV1C1WKWmoSj9use",
  "key16": "4w7LmvBjidsTUj6FmQvRrnMnjSBJ5zgZpTdyW5evCpbKYto7XMnduYwFsBPmqhCpyW67FA4HzKh5iYqHgexjh6EM",
  "key17": "2RUuzcHMLZ7quFgwtXBD7BAEXUQ5itUEQXcp8RctT6sfrS2rcWm8ThpfUdp8yegrFdXa7Hxnn6cEJ7cpMNBw9YFH",
  "key18": "2JbWmicVM5j8mu49VJFySqV3b3sp9MvRe6UtrFMyNdGpsdWeesNZLcHcwXFrk1NWxzpiefUQeHQRbEqHLvBn3SEP",
  "key19": "3H1j9gRGEEeyJ1nEAvhyn5CVd7osCwjQfL15sSS4Y74BWiAE21NNLCppcH49G94H1A7DDiVPLb9JiR5or5AcgnLF",
  "key20": "33eawMAkHtrX4e8vasZjpeZEJb2Z1QNg4cDj2zm36Q7a1eB9kgDiu9NQNHqPZo3KAjz1UfznBhJpV9oE8qekQNJg",
  "key21": "2TeL1VUMw7Zj6T5bonntYcTuP4QKAPNQavBuhTuqRs3Xq9iDvZgneXLiDfrSm6dwCazoHqacKSYXB1GVRgVRZKZX",
  "key22": "3vVDuUCqivu1wb25iDJvR1DULSJ35AF9EXmVF42QwzbyaoAzvYfzYZiBwa3gZDNCm5J4eMEf4Job65CjWr2bWvtB",
  "key23": "4c4aG5Q3iWUz82N4PemYMuJDoXmt9bvpTt8L6835ZppnSjPkjon38bN8n43j6xfFHpnr6k5YjowCsj7bSRLUjFZx",
  "key24": "3CE8peRzG5Mt8rbChwriKiwN2ZHSX2tnDPGmFf88NNPsUEXGzmgwerq5QXggwZSrrRDxWh7QWGmt5aFwFvVqhQqa",
  "key25": "5dqe5xBxfmGUeUTSE8HK7EoucF4MhVJzdUTU7ryMArzAY4edrrGtJTNySV8sK7EhgjHvD32nwv8LJQzJXX1fGCKP",
  "key26": "32P6pvx3K74rXRMuzbGg1h6esjftuXEACud37Q4aoTgppQCd3XmbpgZcDUdSaJz2EemMytSnhiq9iY6QKknZDRJe",
  "key27": "s1D4YfoiFxw6dMiRYx2pGmuChYZPXP4emhQVeCdhZxqtGQDRbu3Uby59ZScdyA6id6kNjeC1zVan9DEWoxKaVLR",
  "key28": "58ym3Wky1TgXLFA1yTmSTPxvKGTh3TLJ6QYcjpxHdrVNtSo3hfS5vkeBBZRQQZXcpSvZRksomxaiAJF32xUD2FZ6",
  "key29": "3wmE6Q2JBtxcryMWVTrGRY7k8Luep8Ckg1bMs8p8xr9jxJGwZYKcahieApGvRu65EBv5LLvKPUvSoK6nyrDkUT3R",
  "key30": "5revAtp4zZxC7A9va5bdT91yTWcZpMSXcgeJDMdw4ZCieCqS7GJwpaRAQ4aR1uDuA1L1ZYgDtwfShmeaHCbUML7",
  "key31": "5QKEYyTTuXEDV8pntqFaj9R4V3BLZ5c3xpnfmtyojfqmeEc3GUuGusuABYnNnz4RjYZu5AEJALUY3KhEVaFXYi8n",
  "key32": "2WBSoW9ePFzoMcsSPMF2Gqmrs3CEiwZ8YceuXRhgRZuMWSuKJQSL3G2vJvZTft99UGmdQ1xBW6P4BygYWfMpGLod",
  "key33": "26HmYCsnahsfwBtfWgSkgphYtCa4TXZTGBAh3HTVynyPUwXAGoh338HvagRZahZMjKLQR7WPVftfMMt6Vys39vGE",
  "key34": "TCXf5rCLfJF3eQrkQ32db52FMkxSnUKLjMpWwbyTyPUps7pgGyTwiwoQsBppuRY1SRj6J7VXbDpcWjzEfGydiDc",
  "key35": "uYs3Dq2rtusupiWXmoY6H79x7cwTaaaERg2Y1Khon3t1iLtB4T8u7gvu1GEs3ZNd9KuvHa5XLJqPrPeryhQr4xd",
  "key36": "63yu2yCaAKDc6i9w11JZAaFfwWF6LcXrb7ZPJxGUhDFGdn1ZBDYkECJKbV4GGujmh4k9oZzmSK5hSyAvciYtGXsD",
  "key37": "3HBQNGmBAnSsPsb9KREtcuZMgB7vpHuwKAMgMEbFMTLdvusbenSYZNMYFX2iAmPThjSnh8m1viR8Wjqdr9i2hF7b",
  "key38": "3H5ZG4igbgxaqGZosDJsZ7J9TpDXFoaigtZXkZ1aLvArCLs72SZRtvLVUZNBtHZCfavfLWa55RXi6a94pLPQP6pr",
  "key39": "4BBKPDBuiqEuUdHF4bkqmnDvNZx5TKEiJvqY4RF7KZfDEsJVweB3tqq54TTmEkL8e9PPpxjnQSCy53hvb7fUyARx",
  "key40": "5D5vzLTnN7bRh7oGxsLwhbBD5EV1LSE89Z1vKYhqhbhkjrRE2jtm7UgTho1LUU4sWD3U5bFbZmj4Q2KiJMedxwjF",
  "key41": "VzYxLmPrLBuabUgnfFtKUEwA5aHavb3ioQM55FYMAdRQPeqMQ9fQwXXM1d2JzaFdnsBC1bynZ2sAkaRBUco2AAn",
  "key42": "3TJtwWwWa4bzDWUR9sqtV8mAh8rg9t3zxMS13jjF9R5Eex31XccffD9An2udesrTNQhSUVHuzkDZJfRep5nXoMmv",
  "key43": "65Z3XqqhWqrnxLm5Efs4kox6Ewa12NLHgPwzQq6L74rW9mPdvixJiEUvbGiXfooP7MLwhurrJfaCFEkBQhGoB2N6",
  "key44": "2kAerKCnqa8JKvrWMrhycCxhHeaLy4mn3rXCBDHTBvY3Shm4BZryNqAZ8riCXrchcPU6uvAyej4UPxax6QCZBsy4",
  "key45": "cG9QW8qZ43Kd6zP7XBJGkudCw5XT8FVB6ppSTboCGZ6ZotACwPkFk2s6EY5PQzCvmoUWZM5ro91hwq1m68DW5fh"
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
