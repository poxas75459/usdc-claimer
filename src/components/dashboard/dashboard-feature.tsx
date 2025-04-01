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
    "i3DVUMdBu9sWtodNypxbWACQuPK6QamyfX8pwegYhg4n3N8DEFahG7JffGvjxBXzubQ9Y6s4N8F8xJKTyzf8gNd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z4r2g6MPSsNnJTKCy3rQ8a1fMCBtTfycRXFG6GbWFc3vvCW2e51ADS4fd12VQNRpjhhTPodbCpVQqccYyx5LoF4",
  "key1": "38zD7yS7aDhxxUg9TiZQ6K2vXsrNeYAZSy58hCyUZ2GDJ9wMuV4aGDg75JktnhRgMdr2WFqpiKPEz3KXF4ARyDKF",
  "key2": "gvR96N6PEkFxxe7FJFBavx9iDmdWisSJbHfgkGPi7ranGsSv2iiG43F46d7Ag3xetimGmojepeBeKgMyYCo6Zkf",
  "key3": "5ypUoHFqgsENaDHEz7ad19GvqR6DzwDCHkFWL642hSHR94qbauufbWjNvoEmwfNyghhM2dyXWztQzzq44biWn1Cr",
  "key4": "2wpeUfvGK28XLHKT6DmYQwX3xNrjLPhoAdTJQTKoBJHGNW9N7Uqo9jYr2Vjv1o2z9i5oHfTPyzzYzpUppoThfawq",
  "key5": "4tb3LfbRL6ejuzexFjY2SmM7eVhQqq9dp5BRgb7hA4GiQqWiWVfoNzWtnWDjnBc3H3GZ2HpAR98qmiCQ5Tgh2j96",
  "key6": "4gVqnBHsCk7zdXRQw5LPK8fsa2TWvTGDMnedPz8eo6a2uTsyHPofATMXgiTdzU8e38a1tFaUNmDwxDKPpWdBfd9W",
  "key7": "3Vwqd2EzN6UPspCA7CjhHj3nLmCe2vHP5PEB8FbimQRdWe3umBrYJBVvvTVvA7sXs3ApbFkNETmcUHxN7h92hVav",
  "key8": "2iDxzdrhwwD4zyA24wvNTWUKhaydbY2AKhDUzWM3Ww4ccim3kvCQfWcNSV4h1udDsYGdTpTiami1fAuoND3Vs96V",
  "key9": "3KSakWZKbSo9UZFwgAybAE2HqnXTnzCicncqDHGcGb8LEBmgYiE6sxtmhUiRjt6B91FiwMa9GSx11xpsaXH2PUa1",
  "key10": "233nMoWDWf77MFrpsAF42iN9E4UodTcgSpXJC1Wq2VkPWcZZAXeFC5mHKbzU1tY3tMM1o8Cv8dPC4E3Xs2y3rzbd",
  "key11": "3AfTPcrxQPZ3qt3hyfseTzTFto4UF2ue853VvYnPHTk2Lkufc1Js8cWMSHQZHo9tiv51tbaqmMfnYCuFPdtNTcaG",
  "key12": "3epFgSay78xb2Fe3YJWVLA4VWNygUKm6UUtXUGevXZ8C2UaHc9RoSQJjXvd3eGzz3CsasQHxDxjBN6wVkbwqLnma",
  "key13": "p6H1zkyXrkUY9UhaSbx2H62225K1CUGQBjJVDs6Xycw1QmUtRtWwy9TKPGduWfvDW12Uq7VRyHKaUcbzbHw1Hkx",
  "key14": "5mnNaFtFat9oV7FnAHiHuFW9eaYAYcXfuvZoy69HU76jGu1X92TnnMhQizWiAKup7UuQfHivmVdgs9Kyvz7uDrHG",
  "key15": "32Uv8ATSGUSZmBwcq4qL1gue1nw95xg2sjiPbqaLBdbwqtsGL2xu45fokhmgmj1LD2MUfnKRQC2H6JKuDvm9Tnp6",
  "key16": "5HZJ8TSLwcmN4CZfvfrnHFixpZsjCR1T1r6EH4o9uF4Q4BwhiTPXgBk5MeJva4h8bMr5rAocyMkbqdGMihKjpoUj",
  "key17": "2grJtxVSfeDqLQPtyB9YBE3KZ9FwzzeEiEMVQiCSsKys2yjqcFiSrADAfhLL3yx36TG94i2ChNNwQ24CRnqcurGr",
  "key18": "2aGLySLXi7e2hmDTvvMNHJkfeCUmPH2HPJG6rnRiK1fqUp8EA9VuwVSFJnuz7XQfbWNHLLGK5BwYYiwuGBnNZ3QG",
  "key19": "3LYYuVKcLQ8ycxFfKA4r7yEjzgub7pXrNVirAVN41q7r4LNxvKPajTHU8dcy3gi1R2d99yNqv1ZUnc3gxRbwKVKA",
  "key20": "5nTcwgf1WmgZnGUygUNbvLz9xjf9wPYN1D485iqmAC7aLBxPo3qnqhWEFQjGEFyRMMzRpJUNBHZLAn9bGKL5Kbph",
  "key21": "2KjUgzSADjHJACoR1vQkm35HGJEzDSKrCvcLNAKZRxiki4ja4aqJX455DenRAgJCQLY4nooF2HwcNizCipXfm3on",
  "key22": "24L3ZFJCkwiZEdAzfaMSSR3m5trjiX56X11N47ZZvxPvMCQXKx3ZELjdBprRRHMMz2KWuMcoCuDi5SYqLUoNGh5D",
  "key23": "3v5bhzzmMrZPWY4dKzFg68rqRiDo5ZYJcAwv28EQkQUVdDW3KLddVgHXaZ94VvR32W2KRLjzc3qZqtY2BsY4Fk75",
  "key24": "2r1Bguhf9JR3iKTKQAEBJXz38qtsz68utnuPrGWzYVdsGPrAgeNXK1fDviZKn9jPj9GVsWxJdck5RmUTff5E1y3Q",
  "key25": "potRVwm8MY5LyBC9W7KCWwR8PnWChRvENvnSEoQYRYW1M3hakUC6ghHUse4cVbhyCZQ4HerXw7QskDU2BpUvtqB",
  "key26": "5QRzsoCVXPhVM2d4vDnyFiVWhYCU5ipncRge5kSDfZT8MQ94vAbxwoAF8DH5EgMkK6g4K1tkp4j6kWPkCknSjVLj",
  "key27": "44ExKtyTwsYVBe676gKEYTjZUQg59JahjwX9cqVGaS3ppFWGMzqzLE6AHwhBJNVtDw8Wkd73oUzkWhFtLsh1Dtb8",
  "key28": "4rqxWetnftcBuoDcwFpB3DtvgT16wrVvgGqbGZLwsqkTRQP6FezgyYs6NNwRVS4QdFPeG3eyRMXMRZV8FiPA3rMR",
  "key29": "3e6fEZAAWxsBS1sndyu3MGDNeh5HkfsFdREjaNytGmrnGfte3poDhkghpAc555eqSV9sny2nPGowYvEochdinRKt",
  "key30": "4NrUCuErthcTvwCz798Wn3PMF9xCzGBx9Tadek3CxNYh5BgQqhYykvqoutCgeitf3kQMe6qnDeWy6b9Dm9dDK5EN",
  "key31": "5bqxLW1aLmnUVX7nvNddSuzyPBKpzjwng7VHhBzJxmdDVcuPDDX36MNjZm2dSKj4xgXs2CMy1AAxJHrHTg2YtPXK",
  "key32": "4nVUQkesULEBtyCYDtQgPcHvtucJpu7JGKoaHsVNwnFWKHNxNVo7MYyzHq5zUUQByiuRups6F8K9jectbfSFJs2L",
  "key33": "5iMjyNxiYpSWhTmtnuVmmu9hP2mBCQyXBsTgXSXPE5DzpgJK7chpo2r9kdrWf66FyJTYvvF8tGGaEpV92u5hAxUk",
  "key34": "WCVtiyyJf7eWqumBhPh9pjKTPMYeiYVNyNw8a1DwjyaWDp1h6KmLiYVTEbybKUCXEKc55HjRunE6Ex72uzwATYB",
  "key35": "3HrXDGGqRW4Z6yjXwLiKxzVPaJsd6fWwpkzktTumWpc8biwwQNyypwSgLR5FGeGV5vqEEFKEyqsbWL4kUb4Vb4TV",
  "key36": "3koK92hFsJ6ERp6AicisGJ8ayMUEQH1twJjFPjLjKuukoEvt6qyxi8D9eQo98VQgEia4zoUqkabyyrZCiZQqLxJ4",
  "key37": "3Kg2VT8qa6jEAf54xVb6R3onz5Tt5Bg4wpfV78x56fazsdzaBfJJ81KWyZ9ULLxCpBPNjVaanuhPbXAULHQovbhk",
  "key38": "4AwfLtqtMmNhVHsHDoTsyjZ2uE3tX7nxwZyiPrEMpSpuk2ekNbLt5H5eSZw46FFFtCk5gfxv8FitWRi3NvgJ3AX8",
  "key39": "RBuQuvx7Edum2joprJN3ysNXUAqT6JKkPE7qjx9XqLe7s2adaHvwzr68d69rxVAWaHwLKLHnY2dZ21vTRrak3W7",
  "key40": "498XkigTmatP8ehWzVvPhhdUiVem9yB9MJQWpnKKeStZALUoVW7AJQBtu3G5c2aL4pYA3DgQie3UGbiZ13GELcyb",
  "key41": "oasYV61CHYc1x5BivQhhYyFaFRaWERSMzGZY3C6pXWL1ZsXLeV5pqjyLtkNmodU87EGRTGfAkvZN2D42nfz1cge",
  "key42": "2sQNUzaBPx3HMBaLYvkix2WgN1Y1fZooZZ2P2khQ6dZ1EDgFbfEFfLqDvYVY6KwmVDYDsoCw3NDvEs8o6AC4PH31",
  "key43": "5ZDc5tZwncxd5zpSkjwjwQUAk1VCy515jMB8aAXHUurYCAPfTy8FQhMvjH1YbdrU9vqc3zj74k4f1KR74CR9pFw7",
  "key44": "4VDrzoNhcwiFLnYBTWgFWtfrfSFBHxCb3YD51SyAfdUC8tVkir2QXhxxSMaMDNStMrFCr5m76xcppwoENErxuQ74"
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
