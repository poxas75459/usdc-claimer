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
    "2uj5f17maHYX5vaELSW2rQUUMNkRGC4hbU7ts5jNQtCkbNAcVdaCBqt3Y4273sE8bJb3wbFwxLzw1ALYiH5B4XDv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JqdFrKyGoTbW2KY1ZcfEYZKXqfooQArnoZfEQaXL3axTQKPGdPiZJSxDRypVXriZLREh5BWkKX2W6NgWrUDkfoe",
  "key1": "4r9uuXfMXoiQYiqWsKdG8Dp85BPVEi3VMVFPfzXrxB2s36p2hNJhGoHeXcJmkJ79LLAnyQoY8qYRz6VFoBYAsAo5",
  "key2": "2gaXBa7zDekbLDgUAAyAiBqiNW1tH5rAYUeygf1j7rc4zDupATU5xChU7FdPtTHwrXj3sixb4UXCwQkBpS12aPbm",
  "key3": "2zDZRZxbNtfxNwKLLaxt1HEgMAHuNHqxJR1nQbcJjFbwogRWs535ijgh13B9uYKQ7Yt51qw4XWryjdQXrRvhWsm3",
  "key4": "SPH2voBTLMum5ou7wG2mJ3Ysf8XsAvZ3p5aHsYReDcEe6jcsfr9wwPJ7XNT6sjeyKPnFFAnZwv2JCHNCsC5BwRV",
  "key5": "5WdDf3m7Ag77KumT9uUisU3rpZtaCfqQsdbKTwzyvFqn9q1RwezDEVUR6GZE2Rwk3G18cNMSycq9iDjmBx5iuXjr",
  "key6": "52iVHLzgfQpRmom9HEE2HL5FYgks6grtFY46jLmgUtj8vATaPSrk6Vfq7BuPGLngf5EjbujypK5665VK2UPNwQvZ",
  "key7": "2u9qhFsQFCcpiEM76fmVtNKSU9Et71LWvxiYnZFaC6adkkz93gjBWpBxdr7PWT6JcLCL3GjgufNbNxDCsrJFrq9T",
  "key8": "6WmaDY2K14gDkkBFq4mC7k2JVRg5KDqEjPMgV9oZKQmDs9gytQdPyxacD3Cw3M72WsgnxkdHHwnRFckdSDCuN1L",
  "key9": "3DxBRL7uT8RYjGorFpq3Mpdc3uwiTM6WNduvjCWxvfvf7SWqCeqhMUTCYc9a9x8wjasYy3k3YaPxGnmzDkvcmkVz",
  "key10": "zKjSC6cBnK6Kg8c2AuMDbq3CPdoFjRs7sB4JcT93YLiKs5PYyQz8QQtSmFfhspoQrtApYdMc436SGsHshqkmWTV",
  "key11": "27x7pQQC4QwQVpjnBci44R4RL2YRrQDMkRG7pv8WZHMYVXecZCJoe4GbG4EtcTDKaoRUAaPZfsrWq4ph9ync7QfX",
  "key12": "3tz2eLbbxwBY5N2KfU6GcFu4Wx6E3dFPvAv1sD6RNfeHagqdXYiojYDXLG4SyfNy7rW4ec7b3wh4SzeL8hVxGaH2",
  "key13": "3nnTA2CWXpPzeZM7pNfUPprrWE1wwMprgXvc6g5YSFzwHeWaxfNfqyrg51HtUVD4yYUsevAbVvWQzjRuCzxJooK4",
  "key14": "3QbTMrmiX8WKK3y3pwZEjRU7xLq2YRCEySBXQjowC4V2YdFRcH42cqysTkCyjAW1aZDuhanoo6b5PX9g9HuSSbtg",
  "key15": "2H639z3En4yy5RoL7gTHnEikLWuqLsKSADGjwCuhRvDkTADQsc8X8Qe3911V4eTptRtoi5UUJKCe6AdsrfVWiZXy",
  "key16": "5WLeS3uVVh5c8gvHGdCQZ8h9bSFZH7gJ8bTzVub82oeG34eEdK3bCK3ya7jLY972H9zeWTGVp473cEGoGeAVF95B",
  "key17": "2w7PmVvzDSvTe1YgaPgdpQFa1VJS5Vmt7KEnixnpT6EPBA31jgyonkHcAHCZxgtH88XLvQP718Gc3o29TFaNNHCH",
  "key18": "2BKpc3ZW7QsvLqxxuN2CRUsxd2GjAzL3hBMwqCPuHqNTyzM9XEhUJh8Xpq2edsbrSziDoZFG1uBD94u2br5FWLNj",
  "key19": "4hYJpUQfP4vyeMFRnQYibsTmp7p6Aqiigy16HYqFayGCcrSkz5jj1g9RXSP1ucNMLL2jNW7dRAvTqv24TKKK2Y8Z",
  "key20": "5cHkL5r6N1xrd1BdNEofJAj1qRQ98gqWQJsEnXkGTfPTKCRurVduFndDPX5uuBzZML2mG3RN1K4rrbqMrfPEbAhj",
  "key21": "5SfC7rCvgTXiAJBfc8CzbQhMHfGRPmW4M8hXqiBSvwz77Br4eckXWDNpwp5bY77fvKm7gs8TSjC7a1fv5KvL1J1L",
  "key22": "Z7GDpeKbvQWjBW5KETkATpNd9XDzH8czi6ySMy5pDgkkuJo6JaydcVjpBgQEK3yi66PrMH92z4M2mAwrmVLybjb",
  "key23": "2dM5q4JZLZENrJy8AwhQ7niBTJZiBPcF9byq8Fn9cmGWnzQxFDXuyjnKbshv8GpAPsvEx9JSQShDFo9Zchc1mPnH",
  "key24": "2XwYXxvJA2arH9CQDZrFcVZpCafDDW9xtekLMkh4zZwC8iasjSEgZw4YhysqSnwUR14rmjpC5w2P47myga3GdQ6m",
  "key25": "2Q6R8Fhk8svHKKNzCbznXZFQf99oAZuMjuZod4o4HNVJ38p9RWvu9oZaHWWsCADhEkV1ut3vcxBQAb91a3gv2nN8",
  "key26": "4VKEeP3ef4VgtMem1b9YskDihnMCTVB6CNiVMkJRZxhnBH57qJidUmYRXebVnw35stA29NAh8PHkeLjzgCEXFirT",
  "key27": "4Ng856wAvC8a3edTiZtdkxCUUxWYyqUa5FQ2FRzJH8RVT3M9VjftvTAqyuosPQsdrQezMPRYDUNpUKYf9A3j5Wjz",
  "key28": "4BWsQuGdSot8tooHzTpcqGwmRB8DHwzkseBJvrZyqoPeBnFpUDr6NFhVN2kcnnocMVx7KqCAmEsvczotBsWuYnoG",
  "key29": "4r4XVdTBDhGoK1pdKG4vcB5FrYGTH5FfbJEgDBRJJCgHjgbgQnUfLY3PViL8wBDiYaHGLHzGynU5AV9RLtCe7zdg",
  "key30": "2geTTiCHseAQRxK15BViM93fcUswwxF34T1xygY7T3T5vSj3oYj8U3ByKpkfVrWN1CgXdnE1N8b9rUCWDg9ywaUH",
  "key31": "5ZXrduBDGaiuy4uti13ktVnyaGt5H7EDeHjAMLVD3sgnSStGXBbTLWqW9rXXqh2mKDaiYGAfPedJVm7zxsAHW84g",
  "key32": "2gkrUTaeUFxBfnjvg5Yp4NgvNDeJAEqzNgkN3dNBdHwxFWaLvccBmyvdkQK1qt9LkNgK6g1JmDAxBRGmUSJ3Tx3z",
  "key33": "5tk6FweLYWLgGpHz69uWbMx7MTEtZ1nnhqowKHKm6JzkPXEZjHuJPU9uNezGydpRjeqWuTEzJEjACgvRqeHRn7QH",
  "key34": "3ze9yrqu3oJSWHN4gNcE5SFeHWN45kUHARzwoXQPmbqwzRGUbhUXTSEbc6VPpYfZTRpgK4GxE2S4hPr4iPqZFeoa",
  "key35": "5zSWzhfP6dx2mvAfPriZDo6Bv6N9vhHh9XJYajPKE7WDqv79xAi3HBHD8CHb4H6QqbiDCMivnj7eN4XQwZVmsqkd",
  "key36": "4dwgqvv4B4BgadFCJs6851Q4y5qtNqqqGLfoD1jYpMUm4vHhd3iYmWupAitvQLDHJaAjdjiNyjSbqq4DfcxxYash",
  "key37": "3TiX77G6J1jKUNKtDbrJSECjYSVXPLSVhykgrB8B3C8xVkC2qy3PKSpffHryAcqTU2VCkYxGkUYxwadcxPKCEePQ",
  "key38": "3MYkiHUbgT14WL5qaTiUCHWyNTwAztV8HXrhmxvs75td8PJD2r7YGoi1BDohR6wDNtW8GPERR9xZrndWnSFnQQee",
  "key39": "3aA3B6bctTfmqE9iV3NPfmbi6PkHQnYX1xsPnzbsAcB5zWZiUxTQkLAJdtkBRjJNzACUdx2N4nQiuMjjiPgdkjw5",
  "key40": "fXfJeRXh3k2VgmBKnv6qMsFU4HBCTLpn99PPfBX226DKonCNvUB2Yuy3RSrE7N8yXoMVfNwgJe7QCcdBVxWvLjK",
  "key41": "NzkhgsajorvUoqGg5kff9hbw9d5MCe9mDPcirfoo9Adfz49GtCtPc1Gi9DWwgvp88fo6FTvU8GNS7dAQyAJKv5C",
  "key42": "5NQAjPPUNBBUWG95fNJUhEB7CzxELgddkwPPTKctXoMKEh9SR3Fsc9CPmTan6VMnpKFgbdy1oTxhou8WiRnVpizU",
  "key43": "5nNASrKJMRSoVXr7N3n83TGRXCqU6r475d6KS99k7McHDEX49xeMtbHr4wXMgfuDg61wT7itZ8WtwYCqxDVunBhL",
  "key44": "2TeCGwUYT1Cpr1og97AcU5MtHaWws4wnCux5ZX6RhFJJH5TvpXEPnEctUCPXqyms2AaUrtfmJN3F6iRC9Ng743hp",
  "key45": "3zhe4nNEtDReyPwSPuC9e7BMEK6HdiBLragU44iFTVwZzugr6j6Ct1m7C4pNwjppzhzrLNnnGsXvwFaB4Vp455RZ",
  "key46": "3CDvdaJB9TBRXrN6e8KboPjGMafvzBchPLQ5B8pUNdnyK2WNAFNuzKyJ5TUEiK4p4LE6ezYqXfSBCsdZGH7t9yAD"
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
