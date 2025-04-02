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
    "2DRviJBoRiBYCSmZ2WEDSPAHbgfwPZZ1ykn355LyuyzMYQstidNw4P5WAK4mCKxZwPC1imx8XgKf4cwbLMGeY6WR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bs2CD56cCTvt2UNLk3XWdgPDdE2qmM79J2R8Q6YTMXVBii3NPEc9za4grhsdeCfEiJ2KSrbqcf9GJ3vL2F9D3mF",
  "key1": "ecmqZL8DDbkvdVCXMmcaDQRQy5EnbBwac6dK9Mr6GpT4KHjEjVbUhM6s5bzCt8t3HPzSgrP13KSjCVioSyFjSdi",
  "key2": "mjErza4MUTaQf5oNnkKnpRyzRRudCdVA2fsRLfNSjEnotkEPwjw84sitoZCX5RPGWCLbhp9Jjrhdy4kLF9bLue3",
  "key3": "xmkbhzdUbXwwLQAF37xQijQ98f9ctkhhk2CkURhV1tqopjF6QS5oyJevvkYhE2DVSDkAFpuR67Y7Mc81uxAz3yM",
  "key4": "3nSqNcE1Zb6dGQzHmtNKuStvXkfUqGXESVNgjVuGGbRNBbcSZV2QQtoQzon95f2vgxJhU7gTzZX72gPntmBTaYfh",
  "key5": "5sXLZWkZ8wimmi3jS8GDG9ftXdxWyEvrVGe8tKHPbPEo2EnqdU7HR3U9mmS2k7E6zbBS8Ap8Ds8VGynRdPkBnGma",
  "key6": "4wYKGejB4x4TNvfHbdZ7RWY75koXch1uzEAs3QNvW9byNEUx5fPHDpnthi4G2QKrr1UtC9g6HYDmxwDo92i6nX2n",
  "key7": "5xhGtdqXi6u88Y2nvP47QdCn8RTnWvmiSp8KQQG7wpLbocAexdD6dHxXkYFKQgGwgDkbiFQ3twptXWC2NahgP4LG",
  "key8": "4ssd7GBPYYVCXcgX12QAWWSGtKNSiZtrQ3d5Cj9kgaowNcNXHW9JqKFmRBgJh7hWwQCGn9ygsa76SAkNN4XWX91D",
  "key9": "4zXfLQvaHz8bqnz9qzWB9DU56Qu9dp7hnyWmWYkRR5KRDhfgd7e5Yya3Lv1a8ioL2RCXyPd2VRHVoZHmA1kaCmAK",
  "key10": "YmzZm8658e5DnRrxXebqrQuskiSeaQuYMvb3v5pwwsFVRW3q1L8bk7CTZ6rioDSyo322bsXVKJmzyHq67Pz1UQU",
  "key11": "4kErqNK6m1vPkV96muouJyREH3Wi3z4jzf43F1GfgTggadxTW7QvW9xoTCrWmuL95sMBSB4Lc5ButBXi9Vgt87HY",
  "key12": "5gJ9RecZoyqUdsgpdvonWG7mDjcmYqKAWcxvLjYHvMhccgaKmDf6brCLTtQ62m167xMYtxXpyN25GLBrmvSSerzq",
  "key13": "65QNytmBUW62tdA2b6awpnKpkbsMMJEbHmL9knBVu1dXsydXj11KFiWdAKZxVP4ZuM6r82MVAd9X9pDfMtJ2h3Bx",
  "key14": "Hin9MmaTxDrgkUvJHbUkPagnjeDidYSSAk7TjCqysHpYMb3QbQ4kiKBAK4BfJrGcX6PiAGe3PQqJz9Xjq4rtv9j",
  "key15": "3WJFMPpe263U7w2nZoCQ1oRPoW9EAxRuxQ5SLT85azan6DDwywRFXNncKEV8Nyiu4dzv627pNYgvJGUjWj7yfJk6",
  "key16": "2VhEyXDdmFQEh8deoNXPjtSVbYUN6VGRwXwh2RYq2kPcJN1xhzmVaeN3bmzDZiLRA33GyagndcvqiMHBJUvayDev",
  "key17": "4qseATpuhj9qVyzPzziLexW6ERq4oVCGivCBknpdutr8g4zjU7QpEDszxe8HBDT87cGM69C18r46V5Qr2J6BDfLW",
  "key18": "5aiSDSMZbBhy3cHGL1BV2QswkFD3UsKnNC5Jh4Tw4NcDn8atCBNRzpCfwpHkYKfM17xa8DjZRNhZjabTUhWenRBv",
  "key19": "2rtfKSS9hY8VWhp4cT3fs4qNJBJ44ArsLNM2coQXNbfbGH1snXZZj79ZoyRXzhjGh2oapRPJqyCV8H5N6SWCrkGm",
  "key20": "4c8FXtAoV9JuyMorhJZrwTSU2iQEE1ii51wXnyaF9d5qmXwLYj2Azay1jX7fswddN7NXkBK84PXLzpnDD411gSrd",
  "key21": "LAbDwSDTrn6aSb5pagHvqQjxydU85wkuPLw9fbKXBxqQVXotk2SfgrtEev9gZ8Q6KfsfQZrk8QJdTyk84wWc8LR",
  "key22": "5hGzsbTGpfseUnayFxu3WWcjfRzgqig7C7E7DrjKMPZdibVA2WbwQihv5vvRQwc1zRHbEXE1gAXzQDTXJqAsKVe1",
  "key23": "3Fho28886mFo6uDUWFX6xv8VcZkBCRzEebqfLi83qJrr4x2J9Eh9LiS2kNKFzJuhrDF2iBreYbU9FNgS3JDJvkFi",
  "key24": "4QUkY8SPKKa6gjcGCMS9ANoXYkee92njgModLzLjVQ8mN6mv13GTRrJxerAziYovT9ZrEkcmQQdPpdwknRYnfVHN",
  "key25": "2DhMLZ5WBERCr6wCPbQ5s4ARgBsfUCgntSkGiToxJudsCJoHSVdjfYUAWmzM5MtkybNB2z2JzRHvT61TfAhsxjuZ",
  "key26": "3mCW5rZZgdhvTTehtAHpUqtdpkwfa3EaBT8yAMCx2K2znyDTK5p4YAeQBzkwxiMJ9u4yTJqfnP9cdszyhGZCqXoZ",
  "key27": "2vjpEZ5sA5k9fWKq9QCSxScwtFg2uG87X5Rv5x3qtemZokt2Y5QT5Gjotjs3bPKG6LFiUHLTTgsaTxfoYYWAEq9i",
  "key28": "5Qjj1hBNGGSJuKqNTzZhJTULv3FRSmDhRY74cx3oL2CQLRNiesGqBaKMFn8V6Qv6SR4pcmM94zABVq9ziEhcSPxD",
  "key29": "27q3JiJWKZmk4rWX8fYvpUuoR7vRiaXZVBm9rxDa4dQfoHtrodYDcr5rnDn3ixpawudjb8nhT8QGFkBthonnfZMJ",
  "key30": "2NcMeaWAsZCRUs3WxpdNN15xjRHDC7Nc5V86bQov995nkUUaTv5Fr6HRH2aZXbvRhmai4PbbCPJJZiBDXFq6Wmik",
  "key31": "2ezyKQom2iKxodr3pYNDvK1skyfi2ZFFAeXVCor3hYZvJayWpLaCSNxEAq56TJDjt9NTMCAPf5QLBozZ3Z5ew5JT",
  "key32": "2fjn7CAo2pVfrefzzdjEvctjNC2ujrFFx7iedhfXfjPhjYh3aBfxVaDoq4EvSyC7gE2J9aquUtD2tpvoRczgsZ2u",
  "key33": "dFuAfJmk5dio5QPLBzd8raXpFyUWqesRjJLDgrVr6wuvZMFeRMKk6fMnanuyLBF3X83CTLU7PNFjH1JSNUD92hG",
  "key34": "zNq24QbnRdni7nS1KRWsGLpuTkp3sp95SsBNQmChEpCmY4EGLuxwVw4gg3z9cVbNfiworC8N1MnfpAanVDVxwar",
  "key35": "52YcttPgo64CKyuPdnjBChE7WQm8UxUAXy8NbbpmbGZ3L8JyAwkmxAhJTGydGkAt6a5Xp2iTARgmLfhxPiYs4oiN",
  "key36": "3juw7gZMJXmK6PbiaqAeX8Wg3S8KWfgbR76aHx7e4ifwDcDZr8yD2YngXcbL1i69UfcSgDgnTtVSv6rLEAMBphxA",
  "key37": "3Xrpwvv4YJyhWPo6SM83wheTCujUioK6qekTYzc3Qib3ysdC7Hf6o7xAWA6UgDCgVE2vLZGetP1aKph44k8jb9Po",
  "key38": "32rP9GtT3himYVRazxfUYSAJg2WVjV4h466YWHgd8owdha77se3Yk2MGWPSc7MWess3SaAQdZ6Tv4PCL1qEWKNx5",
  "key39": "2FKnAZA5M6d5gfvu3sCZePgcQXVfKGWPRqkb3t6ZQi5R16DZjQPpjLAyCnAo6xg6qWfeC9vmwq2Db7WmxsBjhDRD",
  "key40": "2LvaEdynS1LDtMBncFmYwvvsCvZQRq9amMHwDdUbCRRVU6DrtNNzVfv9RwW3FPkRxVaix4qC5MxPg7H2pfYUZGpx",
  "key41": "VTWZyDmHsgLMt23vibWuDTJ9Vi8bTsJ4rwhFgUiCa8R9tjNF8BPrFwqMnosvSwt9V8rru59wH9d4qCrtFXMRXPA",
  "key42": "65L9MHPsv32y7z7YooJCFCqkqfQxEmxFqWmzzM77TisL1Ya7WpbskFEQVuSt96nPapakRF3yYsfkUmz9Nt4YmJqw",
  "key43": "4AMHc7Xq9UFeAUMVv6m8rKfPfYW1oTQyh8Lebhh6T3u4ymXMZ72tGLX2V1CTuHgt8UgbnzCiXXpxWbbL3fjgT1hL",
  "key44": "2wDVSYswR1xq3k23W9acvPKr4pg63QybWoMrk38aCiRhefxGrfce6hoVh7LHt5vCcb9Chkp7iNXWFQ9g1TmhWZV4",
  "key45": "3WbEUBmCjZ8GdQtP9XzCbvEa3VjiChJjGJTUsKXfb4jYj3V89p9g6RKyKBpM4WCwSKFHKgxzYXntUBPsQYuhK8BP",
  "key46": "5Smx7qkCNfc8HJadPMMCF5E9KZXit7EBJV9TsJQCvPxZCDPBor2p9A6JwF5HVRsTY5zZJB4tagrYFDF7bm38ULvs",
  "key47": "35J69gYvbdb32M6BRr2w2ddjJo7G5ayzLmuwepqDUWKty3Y4PD1bimyBFUtck7TNF7fcEqcNgoXo8gK2GSV4REj5"
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
