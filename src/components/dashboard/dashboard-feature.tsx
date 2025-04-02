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
    "hHbjMQr6BYEw3SxQBctVivsX8zfr2SSbsFRaqKZ4igafSNDv2xqBEng4NaB7x33deN9i7aXWJexjdQtfuvT1QhE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GkDZhKhqnqubbaaKJHAmP3nKQLgMVUPvF2cC2ArpeamtxT9cuLX6aZDiY68b3BJejKPmC8eRKpicGS4BAQ8bYMF",
  "key1": "4tprcZewZ6587YGUo3ZBhN4H7VWhVzkDs7kJ24eCuuJGuypFJFTSHJ1G8DsCDmTNjhrQsoj6D2aw5JQSyHXuHxgk",
  "key2": "4E5BceKQviTiHMHEaPhmXTFZxL1C24tVzU5wGAEX4v1o4UGuMZipD7as2XM2p1VofptKMJUpAocc5QcL6RSm3ZEB",
  "key3": "ZVZAUS1EYjv5BfNi2k9TknXPzLDrG42hZ47kdPb7PhnG9z3rBhJKzBT287sfEorKt2H3C34YGkwSVdftdBkwADS",
  "key4": "3y4EQQuL3fWNapsSY4At1JuF4ft445hDRdwnompiM5Q25FuybCHWTafSvekULESvAmbzQaN8muGBoTs8ATgRBLh5",
  "key5": "2pxM8DCnQtrCrNLYvZrsg66JejTy7jKQpoaxgFyR9x4TpmoPeZmRJjzofEXmcivFJUXx6m7xDKoPBnPxKZ2xTmDx",
  "key6": "h9isjRwHasihShiwt1gXYkgHcdaCNmWXcaLBpiaVKeDr5mLrxbGo3QuwJWXLGbwfeyWZaXT8tEiaKMQXaTVoAnw",
  "key7": "2DaM7bxwUnRwagvAgaBZ8kKcGz3tGHWfHq8Cncix6bfGWsME5qXUef9jFXcyfRvwnGYrdjHxvVsvXqipiDoS6K6S",
  "key8": "4DCkKaX9bQ4FhnC2jbnwuTbZCNbDmkFYWwZSZrx2SBhYWQJLxb1GAcXhBsAk1zLV8xEUMRn3iT9L7tzRu8yQCK4z",
  "key9": "4NFhYdjEih67yWJSAysFE8WBTvpnAMwvx3ansK33362vGzN8HQ4tZkVwPLwo8vVzM5UdcqtH5M1Fkn4BWUrKCwNT",
  "key10": "4Yty6z7vT76yrhVe6gUm2piWgptPyebcko4hmkrqooovjZptShGMZk3Rdk1LEcimwkfpKwtPT1CpHxgy5td4xbe5",
  "key11": "67eCor3CuoGTonyBxovsCRGGUMiPJGmTbSsb2YpH6AXUDW7ZVwztLeebkQD8wigDwNfLwHn4Sip9vyLyLR3ByNmz",
  "key12": "ptmJqL3SNXRE5ahBHPfSZyLWXG4ukLWVg3n1GjE27xPYexGTYzT3gjUD5cY45nWCUUGYkpQoTYbZWRbmC6FRQqt",
  "key13": "rqGXKiepvXiNjhCNfodyHVLtxmq9NJeyVSn39m67924Z7xarJo5anCFyQMoTRC8ZJfKJK43uFFWDjJCeR8CLL9F",
  "key14": "4BmGCoyKq6hsj5N8THa5Xu632rqGwfT7fpzYb46oDS8591stoPd6mPcBsSi19gRGNCWypHQugNkFQr35JuYLzvCX",
  "key15": "3yGJGPsSeoLRQud94AdPTJBKaQxMf358ES9t1CR2Wb7s9kjWdszop6mKi8f8vF6WCdsVwa19FtFt2fFMAAhFDVmk",
  "key16": "39vLy6nH6dUsrxdwAWJkJbXGQP3qM3yWamH6eaogjFons4qYhMQjv8kuAKJXbja7qGnvazgNTvKw8Wq2uqEfUTvM",
  "key17": "2mCrWSAB838VsU7ME51DkbYJ7ptbjBvQG6so5kPPZWgCL264KZNZiY1M9zEP8STJnhY7yab3FuqKXbA4ZqoWVZ4P",
  "key18": "3mthodxHFkHYtEUKT3sbw1kPxUDK5JFCqGgW6KSxH1XxsugeQYLFXNToU8Jt2K4tQUR7z4Be2vfXrJLTV2JqMFUa",
  "key19": "49e1PPaiVWqnpSdyHdqb2oXDT7YDey4nLRrvS1BWudE4qAq2iaHPniM69AehuWCGq1JieYpx1t7uYPUi4u4LGTmr",
  "key20": "tFhVQKhhujcx65pHPE8uSHEfU7ZHCXf7ma3ubYXXm48ntRvLQCitotBgebNE3EDdtuhsjnGKHmo5Gy9n6HtQzjn",
  "key21": "5T3iH3rJ6Ldze7hLsBytpezs8tYHTDA5MKe5fno1xgmVwLYEXLE5SYmJD7uEG8YqxX1WJH6c16FKmECUwW9swfRC",
  "key22": "5pH5ac8rbz9qCeFGuNBe52SZ9UzQi8ig4Zc7xbzk6hgMmKRWTNGtDp3qYGjLjAPrEMssoUMLiZ4DRa1cdzh4MDsS",
  "key23": "52Ds7De3jHznNiyVhDGUw2iDu4ntJ4K3Mh1Q8Fayy1g2QixJ5TVU7tCvqEvb16ccQbdkfRkXaa3RGx6ujsMRCYGd",
  "key24": "XSxD1AZWNEyAsefv6oUPPxxDrXUM5sbiDkFN6TjDQVdgffQQMPxrZXW6YcScNbsftGbcQnvgBeuVagTQsg7uLzx",
  "key25": "29ocAX4GDkVvqBrCSuTXdY21N6tC1B4N4Hp2VT97fzrwPWmVmhuURGJfGRNtqE9P1JhWHNYmSwJMYfupfHdCQavG",
  "key26": "yQZjMWkAoUm5efcAwZ7ckEZLjB2eF92NzHwB9TuNKQRNikjFvD7G3adqT24Mgvo5HCjSj8vM2vjZUoMEgwV37no",
  "key27": "4pG2FEzPfsfNg81RR1cKf1BtPA46KGVkuZoTYT8zHzd5ZTkSE3TEEoZx5ZBKcfigkDmvJGfb14KmNxhPgin5GqNk",
  "key28": "TYTWQ9K4kRiB8HhCim53Tydtg3kMHqQni9xi7BxtoMxfjotDKpA2XV1DvTmGTxd4eGBYh2oPqxbBGndAjNMVWGi",
  "key29": "2ZG9eCCAkZj2NENdpvzn2SfARvgeiGqbTSvnhv1qaBzeFYnUax7msVU4ihoSdhLgLH8M2scVX43corHym16Be6Ue",
  "key30": "3PyMH77mCw5SaJc3T74yLmvfGPCAYMV9hKbs15ukzmxfVMqQ2eFxEdpZjSxMVNygQhvh6wmya2egk7gMPQxx3xRQ",
  "key31": "GEiP4bZx6rfLhrp2E25M546wGgcVy3cRy8ot8XRa6nERFHRFxCE8EUTpbnGmtQebapkiDPT77JKto4QjGv63ugm",
  "key32": "4WpcCb5AAvDu32wzbSnx5btbf4xdWYTzpVsPAFK3hKrcoNt4spF1n6GP2tp5cTrE61e2TAUsdafrB5YDsJ58dodW",
  "key33": "5W3g8rYczArweNaaAztncXVYX9N3WxMjdhtbd9ZQrzWfS9waVPFTPiVksUW2XVp9ZXYqtrZ47DhkEnPKsSNFXdaT",
  "key34": "g3VAVZwEcHFw4K3HkZ9Sf179LhBe3QtvBdNRWjBgTfjCCu3HyyDaLuxfMgBWrytRuofSUsh8Z1FVKYbbMVbVhfJ",
  "key35": "SCnvmKXY43u36FxrrynTueP1YaoYqBUdeBiLVLv8wEmofxDkpgSg7SfFrQ1um9Z9eerBBkDeF5RrLkhUX14w3wU",
  "key36": "3thcJCFX1CbFzVvDShNeYnSogUFvgrKFoMBW9pnzFPBdsHT6mg9BUCtTzYhvLau1QitN4LRauyJq5G3QUPmtKmRB",
  "key37": "4RwcNf3S98KdTVNhwh5bhQPZbfGU1cjRzEe9ykhd5rzPY9gG4MA1fJ62TtGXqpSh77vBiEDAoqmKdqdmnszeajVG",
  "key38": "4RmnsN7MK1oucAsZoGqHZEShY5GzpEY4D7hP9FE2psxnYj6psqSfzdxk4cKDAU3x4uLxxE7stURZ5wrbiaQu4Tjy",
  "key39": "YFUjN6LQCiUTX9pBqxqsUp58B7P8ic2TfVHaQcH6GPZzb7yCf8MtpD4FvuyvPWHAy1KSKpDPw6NHrhwpU7t9zeR",
  "key40": "5uQ9Ci8QgeRp6aEBh4oV62u511vrv776Q8c2VU36upJB99N67ZhU6X4BkvHLYdxosUYcLwsCR67TWtR3NBZbTZe7",
  "key41": "z9dRPoKqbsxzYrbH8o47Jhb7cbr6i119LEuQoxYf2V4FtaUh4Bkvw3Mzy98g23TSfmCxgfiRtR8s5iXj2WcVUZJ",
  "key42": "5jH1sCpJiKKGvBYqXJxaGZZETiFQ8RshsQxYywyD36yGeTtn2WkiWwfjy83pWSsZoCUpUqZ1BfUZvASV5MetMcmX",
  "key43": "4XVTnc69SoXuLFhi2TcWvdHMnpB9zVy8fc9fjHU3AkNp9275AV6XqSZr5QGj5vHxCeTPU9MK6aL9jY4Zp3rV3T8H",
  "key44": "3mCWr3EZeucjfprBb2gvoCJRG6ibLsHpSYtymw6rNfZKZ1BgSyA78J9eq7oh9GPRHDAqAoisjHrXzf5QkUdy8VyJ",
  "key45": "5PXQLEBrNySorHJn96pz9Mrxn8Edyqrd9QCJ2k2xyYp2ie7uVdz6uqbwd7TtRYNNnjxAydfZjpqE98LZTRYHLMmU",
  "key46": "4SJW45gZJ7pYjr9ZcZRz7ngeNwDF1dknwBbESC2U5Yh5HtDzbVSXe6dpeH9dQavvf3FMGcXy8pR5e9RimTtpeDCW"
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
