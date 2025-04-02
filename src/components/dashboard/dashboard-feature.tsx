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
    "5WSgrC25zQyFpbzm52FRZ5gGoH8BjAKPcRN3Jz4ucVU5nzRs8o8TkE4AhRf75rUyQMEvps94FwDwiyLQ1Fv6cqD8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cw9hQFpHDd5XCZ4Jys2MYCD6fHfkG532NpKmwzuVRcmK7RkcALB3RY9mFB8SHaaM2v4XxvPSYL2vaoVW71NKDqL",
  "key1": "hpi7WNoEUAZURe2S4rDXBkkoCVBB2v4NE1DFib6DrUcmfG4Uxdao1C94cfaLXSr2EEkPFBmAcreA2mHMcAYh7u7",
  "key2": "32JqY2jBf3PuiNvP7SUfEqQMnY2nFZrhnU8r5sUbRYoZ5cytnT4D63334N3gZ6YPA1GapkrKQSBePHKbfd7L9cLp",
  "key3": "3jNcKags7nfMXpQn3WSoGVYTv61gz4aDnNJf1yZENXzJzXBiukqtDB58w3K12GMZ8uhR63ZB4p3KBPf7yWM7Z37P",
  "key4": "4YXedoge3K3MjgbmBH68Mrqc9yvS8qsdPazDqzBxagNZvfYSFpyWca16GkpQKUD3bVXjrjDqCRDd1CVTcDtLohQY",
  "key5": "5q72mKJeT3k373BPWHhYdfvkv1cJUeH4Kvxcy2Lg9NzjyaB7xqSYdJD2h8wiC8axwd6RzWEEVECREhqFk3bkk2w2",
  "key6": "2LJeDPdeYT63EdksR1Z6xWCGr7UBMvAJ9fZp2ziu2EHSuC8AJESJ8eP2PDw3Vub1Kr2ToM1puWkEZbuZ1YYw4nbC",
  "key7": "3kJhqtKBhEkXi6aNMjfoZYfNqA3ery8fmmX1B6z7qpix2ndW9i7WdCCi6ob9a3eP3HckAeQtBU3fZzthGrMwsde3",
  "key8": "4wDPGeTZBxnepp7oWzUa2cy8vXddvenrjWsQT6tdqMvBmr5RXUJWs4iKtghKFr22wvAF57otkXrbYZbqU9Cvcmvb",
  "key9": "2VZL1cZTJBaHG6x1F6JrPXuZVdU3Fas8cvgKjrF4sngWb76Yd7Gs7MdYY6gWYCZ4zsGWMNqaT2DU8YdeJAoRqw9A",
  "key10": "4yjZK1ZsFfP8g7nmcYGGDyrRFLiV998t1dJ6muG7J9hvtz1VGeUhWAuhU5xLbFF9WhQdBcSmXoairgs2S2NyJ9kq",
  "key11": "2Y5Tbzt7fNviq1pNUH8neJCgVSUkucUDnrBWKSsu5PSduYie14Wv1hEC9A1dZWt1yjG8ovSXiiSGmxVDAnSn3U9b",
  "key12": "5frsjbiHzPy7AQ8kpA7wDJ9pwbAHC1dnR9goQGc16hNSHzjuriQCi7EF78ngSPbsPy84bpej6GTvTDSuwyYh3NPV",
  "key13": "5egtjiDm829stBPMebRMgPeJDJfVeDZLEALCD1QNhNbUV5HYy6cthoNud7jXco665F7ZNgue66bJWt7uxtyhSAHv",
  "key14": "63vd61CuGgNCWU8bSeh2wowHcX2XJUcNd5ujXSWRgCYTeFqthD2MWUHuraTMe2aVPs7tZ1YqpncKNSw6j4TWULzG",
  "key15": "4t6n7GreTivwWxgcFepJbkXu2g19nD8vsKYbyQWXad1a3udxbvVMW8E7hDkob67ayck6xWdTcdc7HoZ13VbxCzRs",
  "key16": "3ouvwUWYSEeE85e9L4EzyebpdCvWKUzf66qvz4CC3F6Y3LfisocPNboHEheF41uFN8f4RchuJzZivgL48pbkuz9k",
  "key17": "5zPDCN8K5oCYJ2RSAXqoeepwiwBGKnCMhY8WnM61BonJduYDBzN8GCiosTfuobARve6KLSKxb2YK9JHZ33mVSkcz",
  "key18": "5uAD8yetX6Vvznrfy2T4kW4Rbk4HQwr1KARB6NM8hQn1jSWwjh5kYJ3HUC6WNSNfoNDEHeKnxiQJqwH7o339GgWM",
  "key19": "2oHmQUZT3muvDnaaudYSg7GenY1TECiqLznJL318E9T2bNBw4fmBMdq4r2N46pLBhcFBd4nQJnNFakTqyAaeUnNy",
  "key20": "5QRqCzcns1NaTh3A6GRtLM7Q3UPnV44DsRgtXXhm67XYUinXqV98CSzb1ECt42waQNxSMvvJUoZsFZ31Fej3He3p",
  "key21": "29mNn6Mijj3oi1TmjxC5ecf6tB3b8bA4JXEf6ToJYSHKe14aHk7zSoFt8csgmfJnf1XFgAEw48JtGokDXWhDDv1D",
  "key22": "5oe3Rx3tWeQhv3Ko3QLBMAZQGgJ8FUVmpMmktM8J1ubX1adUvktCvuDwf28xU2NMr2vdRdnSn3HDmfxZSf5Rkcpt",
  "key23": "4H1BhsDfrx6TPYDYWGGNgJFWA2UQR6kJ2aQd2sMZ8ygMHYgVdEfGT1EuxN3J45SZ9DWpkcrJqunR4EaHku8rLHcy",
  "key24": "4fKrn2rJHd1D5kAoAhH45C3bFyzntCBEjH3esBs5EoUSUCFCYkpkVgnCwKJHGs9rRNniQcYHkqDnib2yRWxmCwgQ",
  "key25": "5sGxcs3AaE8ULFkDecvTHTe9PFrrq9xELwZNpEHCrHkjVQZrzJ4JvJxUTy6ibVTaLWadMN4a2jgeyJy46s4curY4",
  "key26": "61tN6aLYY9fQgWy5h9vtXR93rpjvNPXHhNWwcrs5DkfaHbad3uhvSpchWwmi8R9dsZx22kLWZCq4vnPQAPtV6EEf",
  "key27": "2F749PwAoc8jvGZo553DcPFmVGAH2A7Nyt8C91CUrQRmaTXaYfvgQbMuHwjhLBt9R8uhYBT3mzGrF9M6Kq4hUSoP",
  "key28": "5Zz7tV2XWDM7xJPZkUyHrrzq6jC4Mywb5N5iMME3Wire5ocNP4gp78MtAGLT4qALcEYwJMADFjzFKr4NifjkDfRq",
  "key29": "3BMdob4GDd9SyPwRfHnxdpqZNzthCfAURi7h8wHBcWk1yPYCxDKrUR6HmAgXdgH8a1GK1axjsbKQncvArtqJjXVn",
  "key30": "5GBbFbvdMViUs5s8EXYTs8fNtBHT47QMjWghgkUKErpkAqygAyQ1d4dDS5jYfEGAPBgVrziVaYrXrPBCULRBQKz2",
  "key31": "24eno8rWCDEgykK6p9pHwGaDSk3HJFjsMAH2LLe7Z86BQv54XH1bFzJuoFzYdCgQjRr6XsAJenFqTzhcT4FNAoLW",
  "key32": "3F96mJT6rt7jEVmpsqqrLRY1xq4mTPVk2gDEExLoHjHwqBtt2A4YSg8Qhat5fvMejP9DUkVsM7LHKaHSy6pXFnj",
  "key33": "3LLY2eMuXzTbwf47wCQBkcL259rLpuj87yM4KQirgqam1koDB5NfGG8d515pvpXLoqiz3btnpXePbZCVLq4Qmfk1",
  "key34": "2vTiHP3BVwRnCo5oJ5cQKEDts6sihhvoacQbegpVyGkyvXR76wdmy1JxdhSGhWKmHZxNxE3ugK9bDzgxjTobrxFY",
  "key35": "rTvWGRWVVVyDgWSjFmPvLbv6TY9Sz1JTekQ79kGQHHasj2BDBpECKoVQ4dNRipRFxk3GgtK3rgSkRxySb49oCwB",
  "key36": "5oNXxQeFDUyPaKj2hq8YpnH11nYyZGStVNGYBPdijHcGmsYGXJ8QU5RsLgCofFuikWXFUAheNpD3Z1xn6r1TKbtF",
  "key37": "2jp73ciuLeLiJgd35TNB2a9GqhXPN6aA248CE6omZ3Zv7kBjYGq15mrqb334wS49aCQDpjhgCcQBS2CgGnwjUJC7"
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
