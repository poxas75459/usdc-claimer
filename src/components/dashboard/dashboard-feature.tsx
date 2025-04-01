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
    "FAEQ6EKNSakQ5GnEV7Cbvhqk6P8XYDFudUfpSFX95Mw5XdMbjLdtwgttAGBhPjapWFzYYzBhpDH81jMQpKa2iGb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uCDwc7Sh5p5g43VqkeeHoTSKHQevWhGNR4yn4aWAuXTohmfbvJqrxxdgBpZijZp9KutJBkqUGKk2vKYB7U1JFhV",
  "key1": "3UTQZQQTyEUgjh3oMCMmSRePqLv93GmS8PE4U4uWXzEzkrn8C4MpVYoaxj3ptV9YD8PhYp2s3Kx8TBF3nzZKcDF6",
  "key2": "2r6jwkZrsP8m878YJhWWgpurPWHkjz3pWay24BusHoRpVV4km2DZitjaqU9rpkR3N5wT8XDAmhfZ1VJXPaAbWR8D",
  "key3": "kaNyhcB9nZALQdeiaNLPcmCnLnTJiuTwo2heib1j2CAPz9mQa7Cb7WoqoePXfZ4BNmAGyqJ3gbSL9Vt9LeEekez",
  "key4": "4wUankZs9GsQfMK3QPQAS5LUJXu1qXdmZN7RCcpVJUfuXbwigp4wbuVxDqzJqGmm7UTHbiS6vdXwTpRjUB7vDjyS",
  "key5": "59PDC8apQhjVnR6VMRM7CDHsp2qaTF2u2guLhyFBgYFfEzacB8YzZV3S2YtZpJxbkmA8rGEsY7YUL5z5JYBHFim1",
  "key6": "2kBChHwaZvAePgujcjW1HTixuub1SEbaVJvDymKNviaFJd5saaYngHxiXN5CpcZwnaXw56ab1nKqF94jz2pHoRpa",
  "key7": "5rZ75bXgAv6Z6HmY4284ZccAyrUb6RbdyK3v9s7ezwH5bicz47VhzGZBBUQAZBwR9KpC3K6Fu8GirEK1GF2b4GVr",
  "key8": "2VLR4xRYc4MFGD9bgtt1kBiuXdM5QS7XgZGHU8uoFuCgjBnrbaWKySjcwdwkit1K2MjW7X2so7t66THrB4ZyTpZi",
  "key9": "37fR4x4LhVsyTxes5NJPkibnhnqQGKFVBfRjkgysyYqL9R2PmJFh6sjE2dWAuDECL1vqojiry3wTYxtBwjtozfs4",
  "key10": "5P9aWYeuJbbVV3CBysGUmo7uDj9obTF4HvZ3YF4QZch4VQgUjUABGM748ukKgqYqaQYWiGv9bKq1jCSYNtHb8aV4",
  "key11": "2dz42mFMXtNQYubVbx9ibLsziAdZ32NSz76GKUsjuDBfspLefpXHbTvNF9fCuC35d5QN9ACfecCGMR3mwtBekXko",
  "key12": "2dGLd1pYnNygr1pBZgR4WZfXpJK1atNvpfkgnXgmoAhy4xYJ7DWAUMUKat9j49iXdC8jfza2t62f85UEvkwWeMev",
  "key13": "3yGoDRoyHc3JEzZy8dUP5KL9rUTtxqc1Be9hSQZ3kzYyPzw5Rx1XNYEaJT8ZhmDzJbfKuV3oyR7aGojZDAkBfPrz",
  "key14": "8XjVdcnsdnuintJjZofSRsKniyp1xSvB23gqCmLG7dWw739ZJHQ7T1zYmv4TiSwFefN2bVzicUVGNpebfGPMVuu",
  "key15": "3hic7CcZLtmWVhAjLJaq4Cbrssu1Tvggh1rgm1YqJBJgSwRp29pTgmgDdYoX3XZtF83gQGhxaNgiH3Stgu2cWege",
  "key16": "3TqErGprgiVJ6A1LMqszeCMj2Xt1swXJYLTrc56jmdVMm54fikeFmeFdusTiWLA5X8Bjygu9sK868bP9paU1sGJz",
  "key17": "53tH4Wpp38Kbzp2YpyzR8GiJYLRaMLakiJzx1SAAm71L5xo23pAqfuzhcuAJqF7aCD3ZVm3USwZGA4r4EMYxLiC6",
  "key18": "5Di5uviJSNfWkenE2hpqwURCCvEVr5h9jNGQgrGRTNd6f1iCSBBvp99K93N2DGxu7NML5tCWfNVWkYiPBqpLrd2h",
  "key19": "2q9t2HXmDruCUXWuTUJ18KiHCop5sJh27Mh8W2rp25hruhXMoSS4wnJHY9PThDo7YnyWFePzi4PoNg5FcinHzV28",
  "key20": "52dty9WHB4aMThiFjXTTx5bdiUzF6mkbDJA2zy5A8pXbQ6tnJEhzix2g3cE1CMcEwQxjZTZXrQqe7CTKnYZLBKQT",
  "key21": "5GC4b3vEwcWeFyoaUzFJvztrsWLad5n6rv2Rs4a2XGrZdP72hfGXNgAAtLWttvBerKAQfCditbuzBjac7QZNAMbj",
  "key22": "5gPH3giMXjmTjscMXfRyMuPF8Vf4gphvgWBMDze5DqHoHRYEDG7soWcmF9Wv5qdDoAuEHFJ3Jdq6vT23YeBdwnUZ",
  "key23": "UvSxdkUivRCirrDQUzddD6SRCreVNvbmKtnUSFJBEo2Hivccr4FGq33tZ4SWwezk58kzXMyNkFPWQTFwphuqC15",
  "key24": "ESmgsA8kpag9WN45jofUEEGBBuERjm6BRB8xWx3ZsedEW1WUC38EjVQCUYPnwTPkVicwvMLfty9tm8PxdUQG9Fj",
  "key25": "3SSxZRep4ABM9T3BrPPGkAjL14Lzc3yZBnPcmZUZJxDsKMeyhChCh6bQ2dfah7zSyQFwcztWFNCoCdoJ2maAnJvn",
  "key26": "4tQB8T4NevpaBMJKvbNeDWKtvANhqnZa6GwKmP1BG9g8ynp7f3QMKZP8rCM7ViTWBMgLmL5Ar428N1iJuJbPdLoP",
  "key27": "pJRYALiG1MfDTmdSxSnRBsKbKJUv7uqRjm8Z4feuUrwH1PQ3pKybTMjfqitnte56ZH8epsv7XpX4QmUwQkiR7Bv",
  "key28": "m3K5HQNrp9u9NzJyzmw7p77vGmqwv6Q9f7yQ8gnHwvxGjMKByaizmdz9zuEvwxjFyUxVHWc3LKBsdSCaon7QK19",
  "key29": "25g69MEk3RXhravEJp5t7h5jCeRF4C7MLmvXsHsr28trEGRUxuEpPvNfPuDFP4mFLjUbTDWLxPVVba1hqZsmoyDD",
  "key30": "4tPMXE1QhJpFkKqwxG8diZvzjL8rCLnDARLWU5Za2p1m64ahSVT58M7C6zoVNrGhLf8wH17EgJuWadhSFWJ76RvJ",
  "key31": "3kB1WT88RzSuPPyMaaTLzMeiYoXMtypYX72CQdDTMn9SeNUyANXh18EGGwtS9PMnGRAJerVQjVe5U2WYRseWcLa7",
  "key32": "5TMjcdCLx4F24G3tYSZY957sPYj9pBLf824aaV76th7CGiJMEvuJkQD53b2dm9Xho7WG7prg8Tb2T4xaLRYYtzx4",
  "key33": "5C9TwQv1r2gChXLFu5UXHc58RiPnMn5V4FAcybPU4BAwF46cWCpcw6NkZKtbzR9C5XNcBik7ReZq9LvtFLdYzgmJ",
  "key34": "4bv7DypkHGZGgHLu3ScJV8kNLEeaQyUmKJPkq51sNyaBVU4SckoJc4JBC6E8EP3jPWmMKXZGKbSAivhaMpGgGNL6",
  "key35": "25K4zwSwa6BabNcuRK3sGsS7k6GHVrK3VT3oGKD27oZ6MDREu8Qz4DzRbTMXELib8z7h3V8oAkGVafZbqtFrprD1",
  "key36": "k3Ek4ZcMcr1YxnjEDu8bUWbQdAYdSijwtt2CByFuozmJLN5XhvdzU3g9R1396TpbSGV8ov7Lrf33L2WGr6YefeD",
  "key37": "C96U9xNKZVPHynawnaZwtGZCBuyBTA8ai1jd6PwDvtfSgn9jSrNSjfXqJ6RnJXQcY5K5S4QJ3zYV5WMfNVX9yPG",
  "key38": "548Y1o2VhpdYpTviqJWuUnzy8sJjjf13z2LmLiMtAd2DWgBzbQTriNUZtq7DMsaZ4yx4XYnZdSrKvoLEhWw1Zi24",
  "key39": "2mhazTNsrNXDBp8hsmacc8p5YEJW8yUq4XGNeiJJGks3tX2gaT8Vkg2cBZ7FH2G2z3noyDwGgFkjMocLgg8CEmt",
  "key40": "23MrCpaWCSeQyEHgBY6dvxvgTpNonH23dgj4qg1TAiP3GAMVQV2nsCGR4udE68ddD2o3kg1GycFK1kdZrrEkBEN4",
  "key41": "wPZ9jQ6vZH2XQrSAyWYsUox9ukgPJybnYL4Wj7oQ3MAbNBjZ6j1ZpieoWmG4WwWRSCbUiywRcPGgXw9vuKL8j4J"
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
