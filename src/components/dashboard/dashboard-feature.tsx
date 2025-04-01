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
    "2FxEHcQaQmL7YXWYqTNF3rrY9SVAbeifAJxcVW5qPDhzcxyyBxYKigEro4kEzNHgdDAore2QRELt2uZ5HYgyrR2N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pMuv2SPbaBvfLcHhVXx77uhfsmVCQcC517WNMgQwv69XMuG3JbdMVXiMuc38DDAwVJbiW92MAxvtRARh4FB69Ma",
  "key1": "3sm3MZWmmNDCxGjPcuVwG2C1kw2fTeYbTyroj8q3pombNRPw1vSVX8qooETP3Mv5FhoDW4Zmi2gvsrAswm7aBhDc",
  "key2": "39gcawryS3vaSSdXFhNYU3QmaYcsL8p1pVyYsQdatNLos1cxH1b93JUybkh5zXEhf1PVC8thvrXshHaRN46SeMeL",
  "key3": "5HD5mMbpcxRJdQiSoJ5iQPW6sYVjmHWAw4BEyRNLsXkW8xZmNpZZ1SR91uLgqkMDDo8k5yN4phnj5JKfUhAXktbR",
  "key4": "2AJASLPS2TKVwZaQpAG7H5XszhUtDJvFDQHQucC6GuXoZN5ZzKodL4MU2uiak6h2Bw6M6mXwebejGBBbAcbQVByL",
  "key5": "4Dr4Z7d7bqdCoqiGy8Bu4VQ6oy1k4CzA1We1HdcWdTFGWYjDcB9dBDGhxFks8WHJGGMpJp6HaVPCq76EsYXbdWss",
  "key6": "44rjNWHB4weawGJdHhgWLAxRywP3reRKaWeTudzQaCGVBkWrtQULxmmoczXFAfSyHRGnfUPMKagemBKP72ZjaUBJ",
  "key7": "3dQive1k1Q2zEYNyKQG4x7H6ZxNm3H6cC3h8jfxt26VBAxpkZNyMq3RTdFbydTsew1jbitzYvXZEWNX1YeiLQ9V9",
  "key8": "5hrgfzNaN8U1JFS5UvhhTyB6J8q4D6TfbsDw3Yst8utZV5QEv39nGntK5huT286tUvT3UfC8WKB59wV8VBkmqcVQ",
  "key9": "5Ta3xCAAufNTbt4WWFUMs1vDXQH2EK8e2e6RfAh8kuHbzqJKCzEgThAaMfxQUR94854jT7YhBjsEhntytiH6riQt",
  "key10": "5BfUuGk42ZBM5Wde1v4e9Hzj33q9XroZ1uAGeY54aT4SPPYm8CVdNwJFCGsFSZwUTsg3xfGqz3CpSqrNobWrP47u",
  "key11": "4rUrxHYK3Z7ovCat8hD9a6ZbnxwGNdKaarMBnLYVoqbSBuUz7oLcYFhtuEkZZKqX54fvBekMpUDVBAS6TqgM73xr",
  "key12": "5DFYPhH4nPmEJxacPW5mzYQz6fsEPbCuWULcoJ8w5i7d4SUyQAg282cWx77fV8T1D9Ubwex3Y9rRER7Zg7gqfDrK",
  "key13": "dYCKpTL2qT9BeS3AvZBcQ8VJ4Z5k1hkR1oDqkquoSuZiAUzHbPHL7AsasuDLm4hCuZFmYFy1KYoFMjGyJ1Uig1F",
  "key14": "2DEVh5dWYDLUiVctg5azSWskDW3BLaFRLsnDpRzrjoCxkvDSWmv8C6gMcQ8CwTePq5PVMPgquPXyr1cZYVZwsJ3D",
  "key15": "3Gbs64k48ykbgfC7NVFim2TeHxJKmEaHaUXyQQjJ9VYVsc3KzHFeQftAJxVvVbN7MiE1R1D3Vg1Q3F3iCjbkpNgW",
  "key16": "QJi933uEPxz6ZhtkJ7Spb49Ye9MLdYXhs1eKvW8ZAWQvHEdJKmb1t7rHF2fvmcMHAtr82E7kR67JvfBGRBvysMa",
  "key17": "2f1kBGc4yN19Lc8bm31FMTbsuZfuFs9vb7RkoPD5D16ENH6nmdtFc4HEmhCnhqTPF2VxcjgpfnvwVr1QpJKq7RZd",
  "key18": "62rKTQ8onFrNVRFaPdPKLJKk9BmwG8kBwG3oFZ6cqeji8g9DUPEtJVnLkvArcv7UmyRq1LkfMrHc1eeiEMkY1gnD",
  "key19": "BCgY9vV8Cy61cZU1fYiieX3hUEYxz92pcKcWcKgb61hX4BqZT6wxaBrHY16HZH9YUa1U84QfKhkYHa5Rot9EJZi",
  "key20": "3UBWega1QSrnviPdZai8FkzBUptLDJMRgLBWowAE2cZSk1szPkMvoEA8KqyHCR6Z9g2LYTPA7KR1nNXST9n2Bwso",
  "key21": "3wM7bMojpK31Mh6YaRgRy1jGnMzHXV4rjcsZkFkg2CrfQ3ByFPymM1b8Sge7gpLHtPq1YNd93ii5kfB8iGzScaVK",
  "key22": "4FWanFDMkfyTm4MEicHFP2GCSq4sL5gkbv4iwSvEmbWgh5AVp9foZjdoSZrxs28KKSbWzf2pvTHdVxhdy782zy8V",
  "key23": "4jRv21M52a7zfELjqU5P1D7g3bBufMb9Bv44xVLLfBiTHUfGRTo4ANFRB99kqLjX678qGDJatiUPi9Dw6uuUKhBb",
  "key24": "5hQNzBb166gfVfbqfgtUpCrkpWbwRsh9jx4sAme2YY6YpzPHVzJ4ts5DTgWBYWhKy8wXzcqXLrhPvg3XW3A6kKyZ",
  "key25": "4AYKVuBzrsMKTY8SHrMGrWt1A3muv84rRwgwGTZHecssQgieYJAXFsyC3HYgZyGaEWmp68RsygX5w2iEqPUpE2fi",
  "key26": "2ChkHCZ3inqBNtpRotADZytoZktKDJqMGQn8Bf3MAfbN2jjCbhatD8v37UhvmhSK3mN8Vawh9mXYguWXqaJNdW4Q",
  "key27": "NY8KKYXsP7BBU455wJbRJi5jQLmv6s8ihFfGS3pavWWsBH5UrbrqT5akdQw6iC5b9ktggs4i31JTZgsu3rtmADV",
  "key28": "4W7eSRvthh3WuLWNovFDjjm8To3bKj8Q8d1qyh2ZztBpgUi1y5Ma1zJzBttWqFB6uiJWu7kQ3EidnWMPiJNSLjSH",
  "key29": "3ZfUqNhP5A8F2iYv6svCe3Uv9TfFeYeFNcMiGwp5gws5XCyneH7DiZJXVVkLJnasWFCrbFysczEHKpz3fP6pN6L6",
  "key30": "3Z1LB6JgA2qYysp8pgNdWLGbuwStm9Vxeo8BVe8PDZdr3n2XEUnL5k7epW3DfBaWTsbDcnCWB8f9ui6TBjfY8YmJ",
  "key31": "2RHQcXS34pshNSyk1hK5MHiFxWvrfeMjKJ1kVux39MEQSYuqm8Q1BxLLLQPkLEJvPXsERzQoGXUyKDCVQCK5uQZP",
  "key32": "3rRMMnAygdA8DS9cFsSaNxysm8nELvPkyipGT3FVpumTsgRinsb49dQEF3qrEJZGBkrNLvqZjQUs58sZH7JNawS5",
  "key33": "46bfKooBM32iVeoLzxmLRCxu4MJzuCYVjGt7yjfAKEAemY8QjJkRG98LxqHT6wVNHsFwT8sNRS5UNwLsjv4sHFXp",
  "key34": "5jnyiMThbRK6newxTsj4Knd6eVJ3QnJRb7qtWtJbqADztZMx4wTomypiTs2kK5YPmkfMGvj87WH4QUWvWCoExJth",
  "key35": "24GGZZgcr7yxBNU9dR9nDmtKFGLuRemcUjtPXJBts8k5KUPK1uCKhjU99GWKeV2coAUekhrY8Vpv4n9tX3ZVyLm2",
  "key36": "2DAfu9he2Rt9VawZ9a6H6PDUR6A1aG46w7WLLHneXHugthCkQfBYNxzSmphkiBJS1PFpQEfYwEQ4xSDC2x9SJ8NA",
  "key37": "3NPTJTGXYucwQvLHnTVPzv5jRZncRLZZehMvA3iFBzhraB84BdvD8ZHWNivHMAYCixNW7vgkf6vwSsCECHThRiw5",
  "key38": "MRTGVTbYM62fjVkeZsLT959qhzyGbVk5tHi7PGaPzD2q8NUZiC9D2tSCpbfpM17JBCnCZnLhRmMCTSFncS2UcaY",
  "key39": "5KGRWg9gbYsSvCX5S3HdMsa6mo48yoGVoA9CYTRDDAuWwhVEDParFtr46QtJpZaWTekr6xjBWkfLNBhx5d9x59Wh",
  "key40": "5jQrHz5JWvDB12AAPmW71Gz3NAKCmx1ToSSeWxhUowGfbwexvEDBYsuVK42ri9VnxgiwSUJZobS5ZFwu8r3o1yMR",
  "key41": "QUARPErQH3uh3ziiqyHTJkD9uW4CzexDy3saS64kuBAoFkRiRss2wXY1nDywzvHs2zEbREsHPj6Ppy6CU6WikRu",
  "key42": "3K2ZBcy9NDarXXJ4urFk3rNmmTVRFXXqiVTD8cEQ3NFesNt4JM9BcftVXfzCN8HZjKZ9CfZnqe262wwRwuDTXxfy"
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
