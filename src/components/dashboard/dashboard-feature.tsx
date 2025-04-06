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
    "2qFftnfYkicQ8sizgE7G95xyr6euubVo4uheCWsFdFsCHHgkLwKat7ihN1ERzBkJHT5pehvjm8zuPvKV1seu6Byg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CZvGNnXGBy9jebPWgzQkkK3V9vBnvJwixTB5CG21fdahHwo7w77h2S1y6vJAwzhyshFMkrhdDhurWk9RoZHbLwX",
  "key1": "nrTqeV8L8wSN8pWur82ep8iUhnt19tRaGoHC9DU4QA4Rmp1tznoYRY9bjzP3wKXGiNSKiP62UqxUygVVbbR1zea",
  "key2": "5BZRe7xso7EX1262WrFNAdCZES21XWxVF4xJXRzgsahMuZePB77cspsgD7ZWpShZtLS6qS3t8JxcMcFDUxK5AvCK",
  "key3": "3g3fXd5WecwkUcAEtNEHVvvTVawyHdxWbKJmMNevmBTJJzqVK3sL14hKvyi7KUgvwzaw6JhftFiKuNpa3ekag659",
  "key4": "tdVLdL1SRkFMx2YcrLJNENuqiASrDuqzd8bXjNZ5HX5aLv96HUxis8KjCRgB5S3VzCUdyuHwnEbWoW1WArWN3jp",
  "key5": "3xqxeoHA4PMDXWGMusJecxEBrv5iNf4Mz9K1Y4vw6Y7y4UF75htDy2uF62zMD2snNwaXUBaMj71XFYfAM8k5AFP",
  "key6": "4ZSjy2nHf2HPMnmwcnod8GECBnHHXHWvAqtZAp3YCG4aLyLQuAQRjZJ2p9yBN6f991rTm18uEEvijrgnqVByZwXA",
  "key7": "5rcf97ZmGEUux8BTsvsp9mHUJmWPXvHH4D7ZL3dT93sgvToeJiUSwUoxtT81rxPqFMHrhQyLFZpdfBRWCDgAtL5g",
  "key8": "2WzHawWoU44Ze8qJqhfneifiAchXvxnfHR9vP56eHqf9pYXkgYWExphVsgzqgWqiiHMVKayTMFycczgzPoqBgekP",
  "key9": "4mz9SdvfHGJvqQtyQuJE9BxRvbgsH6Qp6FF4LWDMBMLuMQF9MjspNSKXm7owjt9vfgbRmmXJJM1Qsse4DRV4ceaf",
  "key10": "rbj2TLeNXjupptaqeRyjPfdCcqQo8ZGSDC3i9mUfacGHNFQYq6JvkFr8iBB6zNKJjyouDmtJ4Lta5XBLZKscsKq",
  "key11": "2VimLeuaCmMstxr6GzoYQfiuAC39JjqbBDXHdJNjhFoEpnizBqR9mfpjqDWPsBA56oxbUjdKAhFDKCEHeFZmTDSP",
  "key12": "4QNhTxccDJLE6QqgR1PApYnaVMnrrnZuyMK4GKpFa9KwvohdxB8C2s4pnSsEEXa3J8QpHvbMXoGAQkgJYnh91jWV",
  "key13": "28fJpxsGzH7Q3K6NfUGofZjQTNo2eTaSha1VNgY5TnEw93fXF8CV3avBw4RQdeFZK7cFYgSBv1txiogk8uw4HfR8",
  "key14": "2WyvZpperyRLLjiA8F2H4rDXXPn2VYgX5KwqKy9WLXLupwrFQJeC8ufuG3hy4t3XaD8Zb3ZY6QBTivuZ3eNcDyu9",
  "key15": "46mfSvwL5BiPJbpAZoTCXbuxuSVjGSTJRTQKMXo8xeS16RED7873uCUYPcEh8J5ogezZVDUpRCJtnpq5VFDqA4Hd",
  "key16": "263Z3sfLvJxKuDaDDhV9sxhbAktWba77L7nbSxmdPx4KeDR17ELqfme5sXtjon2zfd537oGp6Vufn3EcRBvELJec",
  "key17": "49Ns9tvk1L8Stggcg6guo9Cyx6WVU6hmV9yG14iM5xQp8RRewBy4wX5M85Hxdfcdsq64dHbGLWeJcmXo3wPeVjsN",
  "key18": "2yn37VbwVmHCVvZsV2HtNPzoZHSAfhEeoAiCVnDN8GeBgsrQRxusnmdek1KAjkKcqgMFsNSJWFHUXmMAHvTUWKkd",
  "key19": "M5PJcyqxDSiAXuVo95aUjKWBYbY89Gtqo854n1K7iroLZ5SuxM26B8HX1JwCRk3d5AgmyrZC1E1MpuiYSkmruuz",
  "key20": "2RhNw1dQAQcLhBs4oMPvs7gds1AdfKjNL4CT7xXqRppZYBG4RCSwJdXtuokVmyjyMgwGmLbwWjB1861hpw2A2oG",
  "key21": "4E6adeVZftwVPCXpVcauYc4yzwr9UV192ZPUDYXKfa4VassBNkDXtz61gbGDZs6jwD52QokEMyH8PzJbCq8DA83h",
  "key22": "4XPiWJr5a3aSxMmdp6inFhJUwrRsgjQAYdPEoN4b3GxVobBCfNHPARpj8radHYhLaxs2t1AAmPcH3b5AzvhrcULy",
  "key23": "3dwXeYqNg8p285v56sZSCYfu5fGYqXbVcGM8z5iWgwT51ap54Zs4uXUFzb7PtPjLFtxdNenJZ4sXRHKzNcs36jjz",
  "key24": "3dJfuUnj1KeB6QQsX2Tdit7kExS5miWAqFjYEvuRcYP98vYc6YAnZrDHZrNwbkj45k9ZtVFjYcU4RaL6tBtNGWt",
  "key25": "5PV1Jw7WFRG6njR8etoBstfv5f7cgSDW2DWmDs12CWVapRMSNMzZFbry6prtXgLugD48UgXyjU4m86pTbuQttStr",
  "key26": "2WpZ3MvFNe5GNgocuovLcRkPCaxTRQsGSJh8d6wZvRV4pPkjXdER6Lxk693Nrk2ZLsJvW8pnruVAiMEF5VKDpnoi",
  "key27": "35LE5GRrqyWPkYyYGafWwWWJPWrVQZcgWKAmms1V1Btzr8B5YRPhnargEBj6JiiJyu4Fb7UuoaQsYHVRs3AXfmMt",
  "key28": "jdZWcwtFKfWjptkDoNXHs69NV4v3XWGZQcjQx17C6ANJb4Fk5BoDmURcptkzq7nnC9Z8zHYY78o56pLiax2yGNa",
  "key29": "MhS6Mr6B8Weav57RUagtqLU9rm6d3xYu2k6QxQEhgE6VxpwRXG64WCeATzfMteAwKCiEmC1LW6DvNDYESkqKvpH",
  "key30": "2kqNeTAN8HfUhxiZgd3Eg7V4b4WWMNdWzFj3tM7VebH3xcDTMWDTkai48Z77RHyGybLwLTF72bdxKx6aFb82wGpB",
  "key31": "3BCDPeVYp54or4h25SkH5DizJy4kf3vLV8BNDXx6ribuVpZUi785PCJsxp5qcndqJqJy74UBRxCwqnrWHHgFG6ic",
  "key32": "52LDGSFdLdK7jLS8G4pAPAnPpDJDqaMyGdPCHhFwmjtSna6uaFqXnYrQbNMwirdHsaz2Myu9twMBqeMxL5A3rstp",
  "key33": "4ZG68aA5FqmTVB1L4KaYGV2Y8cPSjAcrq5mJp6fTCdieYRr3H2gpaGdXSWZHo7diREv7AMjvqp6eLJMf2Jb1G4FT",
  "key34": "3cSe9d9jKotXQbU5bavzvvDhnb6svQAavnsJ9ZWJUtTSbNPwC7UdkfcaRrFvx3EyVTLmPh1tLFW7bx8gPnFkzqL4",
  "key35": "5cbzwZqWSaNXp8p4QoS6gFGL37zjUovBtb3YFJYEswEqHLTD7zzpa5uUa34i6vPA5fghXwsN5HWvfF3o6yPR4CPo",
  "key36": "4U2M7CxD4aEq5QBYhf8154UGKQm46gkzmXRDqFYEZLrMnB3US53uYghBSfEVA1KzYja3Gbbm22E6W3yRSDkRa8bT",
  "key37": "3iSQh8eghHf7gioyxiPTz4cQz9CCt3Xeuqbh3Wjb3cwzK7edoM35dgUyQRAaVTuAV9xPhUyFBvxMYzoRdSYuQnLZ",
  "key38": "5kH2e7KPpQvYBAWRZgPfYnDc4yixrAkgtSZRUjAum6q5WMHns1j4oZcSpFZWq42F2kow6xi2iCh6yp58NjA5tH7Z",
  "key39": "4Rng1bg3SHrthLSriG4ce2guCepLg64EH7ECPXmp9pPtrySYAK2DGLrsrsY9jK5aPHV2xfmK6SngMDuxsecawacs",
  "key40": "4iazWUctcZravxZfuLpGWerkmjmwEWTbzJmgfSvVGDb1is6EBqNwJdH8ykXqPpy2kMibj7QvWdqEH5rZwn4wYFXB",
  "key41": "7Rt6ABGWGWeJWZuQozPTZZzxeEXSFfkA4QJzqKhSPdwZQkwsULYoUM8c5hnZBVGyhkBWZmZWVLT8EpKDnk462uA",
  "key42": "2v2Acp2uUifi9rWHrEJzNBdeT5yxFKdsqdWT9wyRT3aUiYNXZwr2SSVUNWwibpUJ8tw6SSqxXG6uVQs2vrCWhFJT",
  "key43": "4pMsq7rUd5mXvQNDF9NDqP3C9CZM7vRyRXRo8kLSkb6b26zAqMWeHyfAqCkKQ9V1SCVzuvsVMDNTm5bWFKv1vJcN",
  "key44": "4XGEuPgmgm8SD36xBKzkeZY4v8rNAmfYQjVwjEX8Cwh9KyosaAAeuGu13F9iNQW1mJeGpJM7cGV5W2BD8nBPdnwF",
  "key45": "2US5KxwqupSYnaLiM7SyhkfrkCD27Q2Zq98UCYJ5XUuxfU5i5jmCvkXXrnSV9yFptBwSpJ9p8FuSBfhGGyZVpTSb",
  "key46": "EahJPYypuXxUNeC66WsujFGFbYAKeUksLvWiZEKH5TDMsUgStKMwLXaxvR7PokbAUssX3q8renLUZwECgzGbHEx",
  "key47": "211Jci2d8PVtcJoRQ3trK34BPTYy6xqUS5Cs9wfrehuq2ZX2eqwb1uShEVeUKNgu8G1kL9BLRBiEwPDWLBqRDXAX"
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
