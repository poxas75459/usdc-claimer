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
    "2HrNgwDz3jSWWPkW5vZK4WAUVtADFBbPzFXbD8WygUPLMANLH5uddvuQvBQNUYaS7XRgnis8mkVUHaGgc2tyG6U6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G1c8KEHaAmPM8X9QSV7Y31g2HBLXViMBfpaQAVTjTe9zL3rjsdb22K2VQEgxvDBEjxJsuoc4PiPmetdoJf8L1ic",
  "key1": "5NcnQ4SjDVHGLgMnZDyaF26r41FGp4t32r6gTn927PCyFd8zFXVdAYyHzjkRAP6XR3xGJk8nVAHHCd5t5vADWug9",
  "key2": "3sz5sYs54jQrw4gmrfp64AjBgKhvpokVSAYsaYDRfHKLQB88R4DqUaQwqk4cgoHeiAGhA7VWdMorAQdKKruX3TE6",
  "key3": "3GBDu59VHEZJbGSBEVJrht3u4euxgCpdEg4BimLXR3d9SUTFu91JWbmLjnA6qoScWvpMgsNoVV44e9sTqds8MAXM",
  "key4": "34ZJMMpqJsD2gMUfaKrK7ZUnEvv33bmEBWMVLjVArMiFbbfZJpUP59zAQkAaXfYQxXx2qyZH6sHm8Qct2qxPRdBg",
  "key5": "4Z4FaLVQcfwveuTa9K2ata8GniD5UNHfEjHiph73B77m72Kdx1KvCeEZ55kGhEbtk6dCwB5md17XyjeqMBCa5YC3",
  "key6": "4VVwSj7KxRsQgqBMwGrMjS1CqBDQLdBPuMBuhcDXiFVUzfePbdpKS5AduakfYk9JT1akB2pxq4acttG2dC85GPF6",
  "key7": "4vhhvBgtDhKjAtLRJZkuD3mvsD5y4VxRpySJkPMwACNosUff1CScBrLmZCXTRepUoqyb3dYt5WtS2Wrc4A72cjNV",
  "key8": "3znuwsoyjxxvX1mdpsJ7EU7yCtE6THcUoj2fdQbeBCmqsqFjLtHRRvjxTb14UmGefuV7oWjjSofSQk41oBicJDPN",
  "key9": "2RYCoM2Kbj9QesBceeGxUhuw4JEuRmnzjRRM5xu4zBTRNkopBwHBuA1KUpTFcahd8AdMJycmg5GoozvKdwWy1kiF",
  "key10": "3x9g8Y3yYcPyJE6wAyYduTxr36uiB2L7VwFpd54EQ8TQk9sjGCfxKSh5DvFYswVcDB1f1ciSAvP9sJWWgieWjc1y",
  "key11": "3bNoFCuv3kD943MLn817XXXgCVyfX4XUKv9RYdQXGnFMUg8zHNSpxaC8jpuXnge9Ssu419ZE6XzSH9PJM4zE99Sq",
  "key12": "3jgVsicBX5kSDSXYuJiyiZRT96DgzPhXYgkfnrcL8fzbirJicjFf6wneJEWoxpKP1VFo3yK9jbMKp42dj8G4hmYv",
  "key13": "2uxnGww8VNMiHNqCWRUZQmNJrt8E5UtUcioUcKhK8j4dR9fREPBLqopZmuLiDin1q2XMUWtPFPax3uKCYZpWufWo",
  "key14": "4c1sti14pf5cz3HgTxWFdby7AdX3gv42Amwh4TgeYZRbpt6y6WNxoc7K4xE2BiKgKzWXs3EYWax1J9hx3hGxVi2e",
  "key15": "4efZ1PyAbTC7sivWaRaox4QLgGLwyuz5uGfyyKe5m9STpLSY3PKrhqFQH97DGuR6okrBYSybu4H8oLPyc4Q3iGgS",
  "key16": "25QR1VH8pk5v3FoLLy5SZ3YkkX3Y3i6CVqqNhMsUn1W5nX6ZWDzZatKuA3wpypXE8xnrNatpnZLnjjwYn3F65p6F",
  "key17": "3wnM9QPWUMq3BYfRShh9Xpzo3yCkAVWVua31bt5LPpHxYB9WgrfMhFjr557jyfYU6Ym3kBLHSaZUWdhaBZqmo4Sr",
  "key18": "4GsgC9QCNdbf7QzXrZCxa1VaJzVsmtDQZGzzkn6SFusXpvqMAudo2uQetJxApr9XopNYS7sLT53EfcSrve1nZGLa",
  "key19": "35djYiHaQwbHeFz1nsKUouYanm1QC4MyqEweP617o9o2LgTbi5q9FNpt7ZGmfTGGkdR2mrQzWktGgmMXRe3EeNax",
  "key20": "5xpqqfhrFinnWLzy7UKKCB6p9h46CV5DhZ2F2ck7sVPvxogNjmTV1cKhL6KHKJLiCAXyGGbteVVWGLZZoHMKvHV9",
  "key21": "5wkvZUsbs4SXH2z52nacq8bVN5FPcrxUUrCbfL17Uyz9JiEjD9mGE7KieERFotPwEVhwZ8vfYv2GrES7i4zzioMJ",
  "key22": "5CdKjfyxMaT37wfUuypy3obXS3kiQu7sa6rWULdQVpceQrNqnjsatyHwT3wDGYjmesfSzcgbFpE3qiDhCUvUjUdF",
  "key23": "5ve778sbYKcRx5KE2utMr569wj79oWU7h6fjUd6P15uRUYjk1KMybu57233ep2Eb2GyCgy79QoavRfYZUJ4MSUZc",
  "key24": "5y5oofoRKH8AwZvErTNMiwBiCpRx2MevEmYAzyaG2swi8ickMT2kRd8x8bzunZxXXdbeHwiQsASiFFR1pxks3iHP",
  "key25": "3pStdrFqEgYmPzb1HrVPATJobxvdNtTfmtmqdocABgcSpayahWPxULRBmf5RgLQrsj97ij8PUYtoXFoESYju8STD",
  "key26": "311Sr95xEkLzzzT59F8AxXejL4NuCfQZHf1qvjqYsykMwTMDWyugDoGX7e4bbm8x2zooHD1VHJoNBXd28Pp3i88H",
  "key27": "2wmb62rJM5dbBsgMg8AC9gUbFQt75uE8rM1JjRbE2TYPN3FS36NyTtHXRKBKxwc7ZParCd5jjjHuofPX7jCFCXZb",
  "key28": "bR9aoqFFZogXQ6GgfViWgj1maJNHiueDCFZnizcsp4pEeCvgSXVy9ngioruirE4jnLZvCGw2QvjWYMHWMz7ScRz",
  "key29": "4GVHt7naezZ7WPcAVNQsWtok53AqB1yjtXTUbZssJu3q9UUDADP2JMfG2q25rJtSC87DcFqm4yLvMvZ6RGz4ronX",
  "key30": "4h2gDNUH6QqqHhWijAwbesh3ovgcrgEAXmqsu6xwHBZztwTsoLnfqEie78mtUmsv6oJvVysGFJfWtejXxMdTwTMp",
  "key31": "oF8YRbpQbE3e5rKeD6mvtoz9FijNKyG5JFLGcCzVPiMU5G5TJi16AkUxMvf3AJ3PNxGJJLJK7m1CPr3ZCcLe7j2",
  "key32": "2V6maQi6RkjqWUcaBif9oQu1rnRRDUaWP3LtsbVUtNQcyFgV4rPtQFPRi7S2B15ygQz3nXqxMArYVoWF6zD3tdhR",
  "key33": "LsUFKLGssPANfGhbW2j3UkeFtFqSKjQSu9M7Nivxs54BZoHAVLN5utteiRfa9Ss9FPWYsZFDpskCmPqA9R6ieAU",
  "key34": "4cg1RewxTj25Bv32Vc1t8vhGgKew98dpFmiqBqeikdLivxjMj1EKJSiDF142CpqZy2RhX6di2R6hFDXesNwFHzvZ",
  "key35": "2XYZmF3cUUvWzu27DGoAR6cBWTmGWNq6wUNfkdBLCSUCwmZh6cqji9TbV6kC8q2K2KcLyXvw5cRPQerJ9aUjFLbC",
  "key36": "4jtD1stStjWrUdgEcyir82UnLVg723CXi33SrKTm2kUa2WoWMFotkRQn6dknqgyYhxEvKXPQvV3oSs4dSgYkZ47T",
  "key37": "5wCp1LmgpCANyCvcFMzmEccYWyLVvQWGX6QmFJYz4ybLAXAzfvHhvwyYkmq4uiwoAh5aTGVJLdpmvZXtEqzPgt15",
  "key38": "5ZXZMb9ZZ7rj8PKc4TZYnPZDTWT9XWj97QVDapeGquiebWHseD4vJCcdbAeNpdfPKhcEC5mDWexENTUGLmMyHwq",
  "key39": "3wy4LJVjZ2QVFhrbp1JD6qHRNjMW75Di149BQ7xrJwuupfTf5B5itu9yYRTsjktJFtaVLzuPnWQeG5Qc7D2VJ8EY",
  "key40": "5tWrcL4q7sMcWbZ4z8sV4zUMFuDtxovdd8bWZNnw4y3jyAq4BBiu22Hsu9JvSeDrEHCjwb9hxsw91SYAhKshnugJ",
  "key41": "3bZUQTf1vr8zKb5xuidUd7jKVUCv1VMCznLSYvjCLAUaXsFBRMfJfbYpWbUdeXTFM8LFAn5atqX7K4yN7Evjb9LW",
  "key42": "jhmWjz1jgozuSVWtqSMWQjB8xfthot7W4F2a5yBeXEcnDxmoo61h5XGJBsAB27YKgKCNWdQEc7GWmY7BQYHF3vU",
  "key43": "5YEXJ4GW3q8wL4i73K2H3T8frumiMFfhWeZEunGL34jwf9mBSH6GxFvuSVByksxB8iZzqFsBc713wfVKQXhLS7wU",
  "key44": "55hAgKWaMrguCq21EJhWRmbpTt1BttNrCqxbaoZ6jQt5k5tjuyEmUfaiCWJE7vqu6ABzotUmApCbfU4wfgJUkNrn",
  "key45": "2Ew64citaow4pVHxACQjXqP3PBbLVvSzfomePqVpJELPimbESYY2qusUJZmtd72RnkjyT3BpFJBv11B8BLYZunSG",
  "key46": "4pR8PaNoTYhGHKuFweB7krvW67ueYckH6wtdCygCiJGnWkFTcM4cZ6TYefCoQTmQbDUpEwq9CTZLsHFA5N8eBDNX",
  "key47": "2wmqfeKuhkDs1HZtfRRtSa1tZedneX7LoX6Bxz1f9HaLwZMDs7vHZsMj5jBKuQPzCseNf7Dzne7DhVYAxJxkECfF",
  "key48": "4LY2TWxCqEJ1LRG9oZ1385cLAGMFgrpqHDdgLiTx9jiQQYYEUbU14n6XwAJmZkSexwf8yKjAX4sMo3zi5rsfCUG8"
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
