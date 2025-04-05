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
    "FcRzfCUsJaHN8sj3Yt7rEQeTvqu8wsLdEezhPCUrFepCaXYX11nRs63iaZw4GC6DC6HXgQwsGe4rCfNPmUJRbrz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "432MncP3k1kcoVzFBzymaicxH3YL931uKWP7v42Ctu8QzySZCpJm8FHWYXrNnZ4TbPQsQaAkZFZ5ZWv2qxZ1jazb",
  "key1": "51vDF7S4BB2sjx8f2wAkRBgQnXuXAZGvFH8W6nkmRYWXA8sJqgC1o8M1CkW6CdG8fS2CPDY3vJzWkSoabpRWGued",
  "key2": "28YdaQT8XFHS4AAEp9fYr7dVHeDfmUksP3P74SW9FRyQ72NuU8iVGE1AK5NALFQBK9HdWy95NNn9YJg1hCub8HTm",
  "key3": "wPvJWqytrDRFCy3EfWaA2Qs4mUfwbDWuUxYmYaHZc6my8uEg1j9pbUyA4YTtQZiLCyTkZ5TBMdi2mvGQjJ8Csby",
  "key4": "jwx46pmSnXdUPwESwNc5o7YZhXCzvioTajpEbExGFB22FtzUsDrNKkirk1qP7TX6Tx5XB2md3YCaXPCHyNqHB4d",
  "key5": "5QRcgN2gYBkNTNqKh6Rwtj34e8BPGHYh7p92YTD8eX9zrD9fJWvavJHJ5ZvpZxzPX9wm9825wLhWbiDKssPZDKeH",
  "key6": "623QJTXUWjDiNz5SkvJFkZ8aGcQwjdW9g7Wo5HraWeVpqA6Z2GpfHVJCBm5YqP88ftXTe7Bj5T5hiv7DMLqodz8T",
  "key7": "3a8J4VcCtiyJDH5reojUQV4exm4ze3gZMQHGFuGihvkyv1NieYZfTGmhXYRmF5EA1yhvMqCdinK3pJS68ZHyh5ta",
  "key8": "2H7hGMqpNQgAgCw8JPk2TNoDE4bydwivSPDQuAe2PSx5EMK9nqjiQsN7iZqV8tcgGHmRktDLMgEdXzxJxdyBpMKk",
  "key9": "2xEJbwnCXtjDhuebpJGbGrCNXdnnn6mp4e7sZifDWUhgMPRupBgdxMjKd5BJjAuvz4m9NHSgDqCdzy5Wo8kTHdU1",
  "key10": "2eGytCCjgxVfsmmisef9F8V2G7gEYDT46JC86RdLqWBjgPeuv97YTmt5upqx1pwaeQ75acV8haYWmTvRYnZPf6LN",
  "key11": "2hXHcdQm5jAQcoeyRZtSprJhQ2jJ42WDKqEJSnNntknSW6Z23YUvouYZ2oPQjwRdcfRB8Udp76P3MfAmxdmnVHDi",
  "key12": "W7GsTGNy39EcjsjzCQKqqQ1VyC6jVnW2JzhcM21rfFwXyV9diTgqXzdA95taaiQuQnbtMUCBVbPBMDeMgshQ3eW",
  "key13": "2hVwvPbwHf8nzV5jFVkt35h77SQE1LVeZY62URR8beAkCVZKAaWZZhCLN5UvVEUqX23rkWucs62ES7dUvuMH1jZH",
  "key14": "3thiVwpikvTSCrCb4xjQKLsZCvGuvjs8C4tMGj2KgC3WM5T6PJAwrzxWh5J3G46TC2moC9vQ1UJA3qMLJhJkdD9J",
  "key15": "UgfDWjqcVEvrvxrfwk79PnGEMT9YmCATrGW9USHYP6cMEkLx3xAS1Zx5mBeVyHKy9Urk7QVhFVnkSLyhhkZJLso",
  "key16": "3RQBpVK3Muy4Bv77dfpugNsquhCST74ToC5t9gNsjYhnxvTdfdbji4smnmMHatvcknCocLC7CZ9r2Ehdc6ps6sHF",
  "key17": "4x2dZA238XTf7xtAyGJDVYoWkGaJY3esXukzMc51q1svopSgvLLiLd2h29PyGEBaoSejuWn2g9UUGr2LwAK2y4Rt",
  "key18": "h5XizxwDWUh5DKX1QiMD44KWD8oT4PZ6Y5MzzDmoPSrUiMYeh6vdbtusspSrBk5LkRCCRy4A7yLGJom2ALdCB5e",
  "key19": "4nDoarotAo8mkA8irHnJfQNSYg4hp2VQ6Uhbk6kNuqNyrxF7TxyhRwHfRbYpiWb1imNPvmgeWJZxmWSggqmsU8jn",
  "key20": "4tbvFnKLKrMkCHNv3wgDkUa2fSLjXBUck8hGvsyT7fK1jH9Ty82zkEKMRqkTiYZMG9QsP1Z5YAVMbZGJpxaGj5CJ",
  "key21": "4wwJQ2Dcs1M7QvDubmzrv2hDtshsueXKcxnNVoTUXwpj3bY5S3XJNwFcLb3S54s3XMP4bCrq5K6SMUHQRSNUMkfZ",
  "key22": "2RA7SahrUuXSzGKyFpJQWy6dukiG2ewVrqd2CTKiRYvy4P4DYPiqmMeTpWovs8b4TytGe9WffBMz1MPwJky3V42a",
  "key23": "3DexcVt4JEDu2gi382FQvMEx3CNzCoGQXni6sdeHxztPCa5WABs6Eoq4PzbwRNJ3FqTuzKTJZW34WsUQptXLpPy5",
  "key24": "52Fdvrxw9ZkhDda2GPedVFt7iuAop8bMgRgbYWUAeBjxSvYj3otFaWHNCfvvAPY9Q3D79dPAq3ioYcYzmYWTpMzp",
  "key25": "3yrombWpfk8qsiYgA4wjRtLGuD3qySc3jKaDNGyNh7p6NYsUXLiGh7ARCEbbaJuVkkhdtpYGjXQ7Cti5gCFpojNJ",
  "key26": "4Rc3QeKQCb7AxKmEVqTbAuLycDeC8iAE4j2r816uqXMFDZFcL92Zr8iYutzpk1ePeDPkUwTXRSFpsFvz7FojbnEW",
  "key27": "2bkyDR3fEXBobyxFpMea7QFijPpEhdFXpzcnVJzmtG97Syne5BrqyCx469pBdpzebhdpFzUR1TJceXVNFCivzmVe",
  "key28": "66VMSyPuNbZpXjD9XtKYLk5wCDLhBcgrWcahR92EkqeobzGPtP5WykBoqwovq9VZsHgVjDLZsWUEibs717Nj77Qc",
  "key29": "4mSAYGctWBHQNxPjHZzeHMvkuY111NYYDU7YgresmprozdYLF83xGoBjL6YJrSztMxSppcnTFyKu5dJEN2By83m2",
  "key30": "5Wr1c9nayfz1o6T5YrXEY6ikEKjqCEbt2a2RvaZ1czXN4CQy3yQvEJLWZH2rzz1hUsXUy5JTYmeCUKf3uaZuqjRn",
  "key31": "5JyZf8CXY3tSNDgnn1u9rtJ9NwYBVCFf3AAMq4shd2Vz74ADiDXEVbP7788Kz8DKffgpDGhNVd7sZiDuvpjGQycK",
  "key32": "4Vnvn5uAGNUc4JQAzG8z5bZ9Se2G81X8kzGxytuH9czTHDCvoyQmUsUjQEPVf9ZGBsaq7pz5VNKkziU5LgD2Unxs",
  "key33": "3YS6n8RvFi5sBTT57LCQfwNaHUoEqcFWyesHEcbiQ42gJ5erZBryCVLcEjAXdH61QAFyjund46a3FrEXnpeuozHh",
  "key34": "5khTXPZSCxS7wGevJ9N9yUnLeWW2FMyuAtHoTTfhDZZRD3P6LzmYnZfkKuqY4LyMmhGCNb9CLdZ2nj5ExNvVPxW5",
  "key35": "Heen3bXP4Joikafezfm9k7oAXhPUgLgFMWeGTFd6NHs4KBL2FMgWvzcjgb2vdyVqChDzid6a6anncbMd3SDFWSc",
  "key36": "3EFNisyfxw9ftFz8VATM4JXoVEWPFDeoCbsnjMvMWVWQSdRHaLYKbXwREsmdsBhq8bt1hdb9S74bbqhAu4yYN4tE",
  "key37": "2s4oW7YopqLVLp7n8JA7KzzxgCqjPVccj4eyGEGPNXjBWx7E5cvnvvKe8NSnSYdqcU1a7EGc5z5M4EGbQNcobShL",
  "key38": "615BhRJ7djCQvfvreZnbjERYmy4SfqQXcqjNMY7omaojET5UacbrX3AFfJpMjtcorBe1u2yd7Fvh59pSxGZzJh49"
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
