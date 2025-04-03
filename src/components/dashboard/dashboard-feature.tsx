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
    "QZskYk19vz7SgaY9brme9URQ4EfoPYBboDaYktCwLoKDqypdiGzHbwUdGLkM2rLN5UJqzxJS2w6GX3bvbEQELGY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HopmMif62Tr6pUAPtHkHrgZehP4Lf6XS9CYVjcnKvfaFEtWYM2MJaia77vtvHvrAYQriEqx19f1EKadeN5doEPK",
  "key1": "3jNtB1vs3mWUbz6ZgUeSmzPs5wa9zNaCLUeKw9GunAyV4Lpz4DAiubtdxTsA52sHaZHuV7Yy5yCw2zuGTB89Fpmv",
  "key2": "3eNcuEx1WyrvPbgTYiwGQNH6S11nsQUDZAby2ULThPu5VitxZTjji2XEi9kRnA9AgzPiF6avZU1arBcTrD2GBkH3",
  "key3": "55bcz7tG4xCdJRFodiiYKGcRrrKyPLT69dsiEypUr4dDtoaNBeS4uVxdtLx8ngKEqjE4eVEmZxSmaUDr8HSKakUk",
  "key4": "3yGjQhgtDPCmdAEfF9C7Sf3RKGTd4sJTf68y7hMqwaj92JX9NpNDu6z2fhWNcCj89BTHrdkzbBr9sN38GAcLk9ef",
  "key5": "3DEYrNzJg3xJk8yVmLWG4YEunBQ3rdFyq53xq5Qs85QHMfGap79FKuzxHKKcoXLAiMLnvmsSUjFmFC8k1SJb4Hsz",
  "key6": "4qZ8Cs2Cb8R328FQmMSF6pDZjAHMowxR2e2ZBKFC31xZLxwEEMHViacSan4hu5D9k5kK49xSXigQ4UYQL1vdppQb",
  "key7": "4LNeTcwAsGhrT4VT6R2UbQwhhb1g6Y2NwqvRPRBAtpVyCvLf5w3doDAt68ZuHY6PDeVgj2qGiHPfaT3hAZFhZ2ED",
  "key8": "3kTrDg5sDbHSfEKsiCMEinYJ2CtHkUSwwGWHCuprLi2ptHd9J3LV9c8JMx1jMHTaoL4L2y7TbpAS2vquicQTrZjt",
  "key9": "3CvYLAaiT7ykSgDiui6dUuSHqYhpLkbc1XxxQoZ9KcqGjiLGQFSeJ84E1NbZnCnWMNpUZ7nG8HWvc3BYuhn3TktT",
  "key10": "oKvHRHyS5MTqcTEf8XNYEJXGZUE5X5yC2H6YkSN982PuKo1xs5SNgWqY2ao3ABLH6Wa3wbScQPU2nEDGkVMfuWr",
  "key11": "eoQpYBBWyjgBbdG1yb32Bs3ZabMF5XiQLvVSvXixYapTWkk1rjfwjnyY6XtHs6wvSWGFy3TA7xXVLJxDR8kXcDm",
  "key12": "4vKHhKPAq6WNhctD5mDoQgeMv7XqiVdmKJ7CdtdC1TzDP4awjaSs5oFEBUnG4Vs8i3tc22dohD3nF2Gvpv7BFi2p",
  "key13": "9JgNoDhbPxQFzfyssxQMcSbiLCdLuFvbK7KrvFdepbBq5Ms9x4M4S8wzSRsvB1bxBT1z888RgCub9utqzCzcBLF",
  "key14": "9521ivY2AUwkrxyZdnMsY3WLBKtrFYfVGGSitRvMU3KE5jpfAhaFe1DBc2exP6YR9CChUBpwoN4X2zzv7gxSeuX",
  "key15": "275mEDi9dwuhvPjEocjMMEn3pGhK7Dv5tcfzqvWp6TjuHkqcJnyUMKL37Lazt2V8MmBdwjBZpktgh3SCjWNstiGL",
  "key16": "4bvNCzaLCpcd8WE5h6qkixoufsxB81nQSbukf3zD2fDyeLjp9wWVpjnSajJzchiaZ9nzU3szJeUEoDeyWHMVDSLQ",
  "key17": "3xo4DVSmEhCeFNfNsi1rbk3edAGLUXvw4q26RWaPndc1rq6u2FbiE978brfqdJchYHCB6ChQu8cvamRAzLy4RPoC",
  "key18": "AHybjCKj7m3RLAZBC2LZVkqiazKXHemnjtJ5boJcumutCYi41kMgDtF2nobzsev9tTKbjrG4rF3EgWUe5nB9EDy",
  "key19": "4HBzvUu8qj2UxjtWs9PnYuSNdkg9PuLAErHgoZGNtxPpwdutfG37RzMSWJ6QahCgSEhkR4kxqeBx1r1PQasT92TQ",
  "key20": "851dAciZqkmjdALeBMpxcro6GRmLjntH6AfeNdo8h79p5iaYgby6ssJn6tYPQMTvc3KpNJ7a6kgUA45v7Y8bhoh",
  "key21": "3NvtKJuBzXdtKBMqP5JK1aptm98jUzXjApTdbHGXd11mbNi7ShgesDarCd1ViezdqfCR5UAcySuZSwf5gKCeEDEU",
  "key22": "3tjKLTG5PVvKthqimzy2Tj94Hxea3DdfVmSrU6fRgHw2jmmWnbPcwYnHra6yT3CvNCXqDpiR3ei9QM6MJojhKVbj",
  "key23": "25wBZT6sfpUZroTepUxD9ZUoHyrS18AAfjYt3RPsQXfaJTk2nzM8jucyPFSbj2kRrBXnjDpKY4bVJXx7RxPpFufJ",
  "key24": "3RiQ8RyKcSagMSSDytBcbhc32KtteWhYtrvhb91ZGJpsVcTAB6KPdDMXFQZeff8L1c1gjMxy4nXgjmc7KEWhpJvs",
  "key25": "Qb67bi1AQirLDaiwM2zpfqDjKsTCTrbwawuSCZX8d7MakLd8pJWUk39Fb3CAPmdoYcgzzMYW123XX2mHfnob7uh",
  "key26": "3BoDL4cEg2sSwbDXu8xutsZJNneLtRMbp5mkapFTeT5anS6nkZxmz5roP2bKNY7dFfmmUEKs1ym8Nks8ahMLorPo",
  "key27": "2eYkTPTJSo35Zd7TYs4iCCZvZa3GqMPdL7XiQ5w2CamCK5Z33sHmN9FybV4LL8vmwjdy7dWQrt4EZWoSsKXbPC1f",
  "key28": "55RTz5cAXA8ceVdJMm4DMdE6ts3Mc8Aq1vxyvyYzFwr1BaCTy2b3CnKBUWAvBQV7zJHyK91FUX7PWc5gXWM4eSKo",
  "key29": "2x1q6oq1nRuf2dWhsuJJq6q8e9VEPKiMsRRNwAcud2y9nXTcLfu1AMyHakiqaSa3qpP7ZsuH1DXeG4qBzugPXV2b",
  "key30": "5BscHzz6H8wjYzioS3XwfU92bsndE8SNKnZ6YZmk26UvBbBjWZnqpwa8wSNEmQDuWsoXKJYWPnmtes8LAWsnVjHN",
  "key31": "5BRGyrkJoLdW18FbodZE6CGs2fwuuSyGfCWApooTkNskKDUP1hAkPHyEXPaJaLwqQKZFHjTNkFy6CJtG4WhMEadv",
  "key32": "1ZANdgp2QY6i7HVsR4mPNgtj2fNW1udoB7pF2RJJcbxy6YtDcZ4BnEoUQjWmQgGoGMqtSASkKE2dYqnMrFwPMLf",
  "key33": "2dqwFDwb2aBfB2CpRuqFxaht7uS9yd1oguJ7mWroNEXGTKFhQh4vcv3qXX2ZJz6gmkLCe8Md1sbELKBVq4deTyMR",
  "key34": "4p56pLX1zwDq5TjApdQ46tjz6HJTbyDw5x28tnomyLGE7td6LaJygGPoGCxU8aPGrnjvV8zMf9hcmXogdeyKx2tp",
  "key35": "2yavcZQkbeRPApK5tgVsHxCH6oQ8UK75XMyUFiB32N91s7TssGEVyDcCDiAHyX3ba7k9tUhdw7A4qvc9AFtMnEVE",
  "key36": "42EN4mjPXxixiaoL3WzbiSZESr39KJZbLEC7duYQkegjeWH7ioV2eYJyHSS9kNqcnA9MK6yz5RjJnXUShBhZwcm9",
  "key37": "3tAUD3rcJ5sfD4c2zU7oPWCkiav5jargKBxz7RmdD4nkWexaBgre23f3C6z4mpneZYtqG2UFAGDFkciRgKFqrqEz",
  "key38": "2pz52i9esHVboDx2sVz64AkkPLJ9TpDZM995h3jNJPfDt2BLz2L57XU3x7LGimU62ysdQVA8TFp5sECK6AnqyrsK",
  "key39": "Kvj5nRg2hEApfn1rM3pRSapus11tH1Qh9wPD7U56pL6Bbi37yAygwSn4owtU8UmR4QtdHxvgynxaDcoSqpc24mb",
  "key40": "2qM3YGn1BzLFEcGyq2BhnNGom4irvDakHgNsMhBxDyykWbBqhaiqg5ibYLzGcZvrS35ogh4S3aFVXTRyoGpeZW9A",
  "key41": "3LEB17HzyU6Q4DJjheSpH5cLitTTLsv7HBdyU3H9rXK7ktNZ2vdnWYipyXgSepjEixNVvdyi7AvGT96SZRV5Adhv",
  "key42": "2NFUR1fxJk76tzotFXAtbMoBAsZHeAmXDswp5qumJdAzW6XvQc5Kfdo9qoz8wCe3YJdiGGNRaXB1nnzKpzTwUPMY",
  "key43": "3duZFeeiTKfdWBbiCzGcpVWg8Y4e2tsAumddaFDh5XqEVLWSoJiLYpfUQhkxwv6g16cJRpxYbjzrTcqKSchZKmZd",
  "key44": "62r4fLpUjaLzDNqGiy5D99PjRpohrfigVv55CBsFYQ78WyLWPzEG6ZSbSVF21hx2E77tCXynYowWsBL3DvtWhCXT",
  "key45": "22b8gYpUHgR6L44YwNucCyp8hiyCqLBwB1wpppfE8DZ5NK8cdTFqxQcxBvCJoHvaGGxTwZpDtjT8NPezM6c1QHTd",
  "key46": "WvStMxaUJoMhCav5tYrTEep4zT7q9ggdkxLX7pgCN1eLEg2sCBUGVvyZcn2AurqNor5eVkNNjEGjZhkXp8H94Nm",
  "key47": "upyhGcVfmgNFhj8KaVnCo6KwRh4GCYo1azP8dmEwPzRMcCJaNZfZrEMUzfK39dDSttCr8Uy164UU7gTtpJhMyUH",
  "key48": "4KfZ5ohtP26g12vF5sip9r4MQHfrWzaURiPniEU6963eAM3o46eX9MRk7a2uoChKc6kAjBNuNx8LeucdTpN5TYWG",
  "key49": "5Kt1k2ce9zuTGCqGv55dbQuU7x4cMzsGcqGzPJ8zYcTPkUZe6yVNPJZbrLAp3jXSmbpHaSdQSNE4cL977ngamg6f"
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
