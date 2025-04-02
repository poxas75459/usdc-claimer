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
    "L8L4fpYhEgb3hxFdCAJ4wYzzUn5LZdyzv7dddmqStorUmaRB1WHgKoZRfKFnXsCYDqmCafSrVs13CV9KrJp9M6w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27sD6PH5P6p55iR5ckLyhYQBroJP7cUyWk4JX95uttdwTiSYkF1h7UXgJT45Ux9W6oRwE2tTb5kVJQzY29JyeaeS",
  "key1": "ZY3sS6Xw1WQf24cikRnzpT4dKofS9KWHTja4yfNR8VZkMBfRG1fdYirriREA9Cg41Zd9piYzns3ex6o9NsZTA64",
  "key2": "3eGvmF75Ro8avgLQxicxfT2gVPyNQyMVBMXabSPCjkVGA9RSiqBZHbvHucd6pxb5MNzfRkWBHXacYL4N4yRvZ3gH",
  "key3": "2mhY9jpngKoeKN6cHojfwTpWkRaXp7R8fuDFH5RqDniHEM1xxj5PSEivCpLABbSRGY8PtREu4AuJ8yhYrhg2Zfou",
  "key4": "39nKkUmduh5qnayBcHYfzeAqC7qHXHfdi9Q6Xi1fHZEA8XpeT4zoY66obu9gN1prTAodhv2CbyTZVL85DzPUXaW4",
  "key5": "5nv6oH1Hzv2hHLqwH2NP4oiF6DL7SBEVHciCLeWe7AwZjJKDgaEiU6DrC29VDoYVUXJoshYopjsDmy2e7UGNjx7u",
  "key6": "NVC2cCv4m3bh1AsKjVDPYf3jCkQBGnsrjDYAmDizn7cxJkC6nZHNmRAgcW4h6JFP35jHCdScmrv3WL5CYfqxuy3",
  "key7": "qgRTDuh3X1iCzhfVrSBtS8UDtQwnRkP7G2FjhFYcJo8Gbyxw4p7c2MNHb2ZNPYP49BqAg6tg7i1DHPGZBYFEtx9",
  "key8": "3RqjWAjGwo5wtSui175yJmHi4VX1wbSwMJaEXdDXTayLq3sFNgUxzzyc61QWAjd2y46ApaBbCHVCFuFVJuS3fpmT",
  "key9": "63fRXaeraxhFcTEhMdjCX3TBfjR4f9w34ZVYxVBEJ9B5YFbSNQRqXcrfCGzePZbAXvdq7pp9uM6uB65mYbdwwCWM",
  "key10": "4pvw4JwEsJMD8NFRPzNEPJ6aTx74RuX8ifuFbGSwvbJqETqnwSBCC921CBWxLXsDbpV2AURxncSZK5CRcPd1qqeL",
  "key11": "4YHZex5ffnmfMKhP3xSNvPy6TvRYxR5tGqxEgodWxwG9jzcwba96MqrjUvr8ViDLc8UEKruzjWMeBYVhvwNk444M",
  "key12": "2jGnjaKLgFeMMoY7vyYzaWnFjG72VPdepxbwXqNNh7dL9rn3jbCB4k7vRofEkMfuZzYwgNRDZHKoTtsQJRTP5N9o",
  "key13": "4Gm7JdfGvxL4xZWrN7yuvfYeFBjwfj48yDAbMBVErAu9oLLJ1fhqypqtKwpSbEoguVh5mF8hrRpLvGMzq5FqiVhk",
  "key14": "3TFjigujcbytg2q2QgUDMPgDYfJkq9LaErGs1zqsYwSj5PofG3LEtgHgEe6i6CBLJQzisvrBXNcr5f4YG4dyyLtV",
  "key15": "3V7Gg5Lpo3yYUTiSX6pxsDAbEuKCPWwT4xatb5M5G5yrG9ALJ37feKLQnFHtUxuZjg987a1AVdFUx1SiQLXpbWqH",
  "key16": "37v6G71iyzxoKHdPvHQhZwuDmiZKiTLvnqBEsykaLZvrAWPphDp2atB7SV7gAh3NHYzFvrmMamzBsyHzKrAHWb5b",
  "key17": "5cLkgDjRdsAz8QT4kPnZLNrE9s7gYWj2T9iokAgJ9YMhtUmSK7SSW1yzzvorCcynGHKVwL9rbCNCjUcUU24gvPPR",
  "key18": "2iDzcbT79izDi6m7awskRwJD48iRYMn2bXeE3CVSdeT5hYpaZtGj8wfYXMu2zrFgUpkrx3LeXeuMooYBejZcF5aT",
  "key19": "31dQ4SCqBSAv3nGNDU1nNnkHTvPuon5vDRgVoAgNQY36JTot7J4YDQLeg24JvUpTsjnEBbm3ZHGTuR5NHP1wHLXA",
  "key20": "2m2pUCSxQno9o8nA822pDtDkxcnNFT36o3rNTWBS169anrNppz5vqyZ4TaKjNY1tfTdqfLrBXknz7tvXJzLRcs7s",
  "key21": "3sHZiwre45QVQNWS2diakfohfqzbGsw9DHhyUcWASr2cqibquQWgnaxJ2PJxmvd9psd5J36J6KfuADjJgfxg7gwo",
  "key22": "48Nj2fxzWwqvcmNprnRGBcfL4obvAzquKj1Emo4XS57oTBVe7apduFQ82yyeLPG4Mxx6RtNT7BkZq1mdVW5Dw435",
  "key23": "3XosJHePEyiYoMkpUnHCo8DPPyQewxe4r2YqUxkVdbmnfi6Wg4qH9MHAwNGwnYprq8eiEZgcv1Mb2XdbBy3vkiGv",
  "key24": "H6GJw3jCaCWrvu1VCtMK1rMG1snZUxv5nYw2yTXhP3HJzU6nZZBGawPmVxovCe5wxfASJk4qeFqBXeMW1VtPyBE",
  "key25": "2X7E9DquNaDRigo4PgmkBZ46TXuLZt2GkZDE36q28G37zWnt3hTCBC9NCma1QSaCBBs4pnyXxrpKsW4i6SvybDyk",
  "key26": "4xFg183DroWsQFLY1Rk3ov1jZn4H4f5US9CZ3GPeXHgUCFFfuNJvvf44ta2anDLDLByCCNuY3bJhnkUw3FZgp1zu",
  "key27": "2EdjygWRBHY3Vuaiz9sCsiGFV9Nr7rCbksmeJmkycg5J2aC4spiD4WDv7HYS4aPjTsovjKjZnCotJRP53iPWHZSv",
  "key28": "PiRKxWRu9Xde3yVkpWgpS2fxmpawYXfWrB9Jt1oLZMkkBgBMfheevnPaYADUbzxvfCXFPoHkSPp6AdyzQgCiPYS",
  "key29": "5yTUZZUXYrJH44xq25zC71NxbyYhQdJB18yS47vtwZVKy6cnjiAyUwVLiHAV2RmC5Mbvx6YAPArxCxAeYX2tudsi",
  "key30": "2sB6iPfeZbHoVny1fc7QWDnoLjgAGbsZPRC15nACshRPMDSk7KZ2HNqTsMqiyPt7wMHjndqMyVjdk7dnFXmyo7Fs",
  "key31": "5tzudsYgiNmBF6dqgXiFTgKnaChz5WWBTBwmtHahWjmmHqN21HgSoDcPzsEh17s7pQ9CD2vTpiyjeKR7yK2FBgMq",
  "key32": "4vHVev6TGXzcWPZPoeiq3yjzWkYGWrjvGJXn3Wj2oh8fMydgyHGPPhwmafpTZJhDue8LggXp9XLBrhsyb9YsUXbB",
  "key33": "4s3hPq7Px58gotK7qhLtKcj2jDPrJ9LVDXb9uHAGb529CutcgeyTAd6GDwVam5s4oYbP2BtHbsxd2KKiggoTt3v",
  "key34": "656HN2GC4u1J8YJV2JtLxGW3GxwYHFVQz6pKJBduTG4w1qaE2CSFmZNacCDLdUCsALWF6iHHBRnAGcK5HYNcABWB",
  "key35": "27zy5sJobtr1r8wWrZkes6ojEkBMPrGU1Kz5Tk4jR8dRKnfmVRTL6YxmhNFT94ovwMThp9TCbzUbrxVL87ARUSWG",
  "key36": "4kpwD1rsixgw78SFTkTeP5ixmPLEHZA6uiYrs8r631y97LofJyWmabXYXmWknjf55onfQ7ECWi9kaWDdzrQNtYKA",
  "key37": "4YdjLFsjk15eg7cxi6gGYwFS1gR8KPo1VaWX1FBx5n1XuzKJfRfHCDLDyeHZiQxC57viQ2eUrkUnvZBypH5e2hqM",
  "key38": "5TsS7rqEAmcp9tycrMXPVQroTtsrA8fJWvfSfzeZKhTTYXfq1ipd8bJLdp1eUZpKXJpbiV3uAGTL9dnqKnABVYoL"
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
