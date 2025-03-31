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
    "57i178aEyVWv1jCfKdrF8Z5BenAgCmZzeH4t7QPCBTYqSTv2BmVo3fv2TMwckDtKQNH7annYPkvNfq9BjykB3txa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xj3z8WnPytpthHUvnguNUHKmsDWKSDLhWp3WYFp78KkK6k5pKEwRvkZkT919zEPtAS5y7TrjN2n7y2RDaHoieKZ",
  "key1": "4eGeTmuCLRDmwgarYoGvmukYigFxxdEgKoBg566P43d4YHL15k1fejqchCDwUgrGaZgdudrKwXw9eFnVjhe5k7eo",
  "key2": "5kxdegFsabvjFkiFgjCprfXBSeStVVNCimf8kQsPitRP84BhY5e8aZeyqgXJEF6eF6rp3pyRyaV9WS7sbQG8utVa",
  "key3": "5TWEtTKJeXLxJ2pGuaCjcLYeDcty5vCLSsBMCzRni7BLEvvr1QHxyNfgYKpEkah4w2ZSaAGUNtgGE52hYFxmdYfW",
  "key4": "5iA14MXJHHE8M29UgCN59vhyrJiWrGJTHHZh7Xrw6RH25fdMHzT2gJ7tARUAsG8uGiKLogB6rU4jAtVzne1sh6Um",
  "key5": "XFKDoGgV21AukisHfAo6XiRaLZXaZyXipbUAZKTJhfbYGY3yD5EMSGBqDTNhKT6pAC7q9MAEuL8WkdarL4jE6vd",
  "key6": "2r8QB53nggRJAZqmxbG1kvrWzpxjC3wDGw6oHRrGaGpdqEwm8GF3uuri9uEonNwSiKE5YUua2YWnX7Y48QymUVWR",
  "key7": "4M6HYanxmogmjk8g7kTr2jh2NUTZ5WLmfwhDdWt18qjDeUbcKXVGmo4aozHc88kiF53Vi3zmco4j5pg54FWnqftq",
  "key8": "47UUmatuAPHJULQ15EZ5v9uBxV9Z6aLGMrGGq9jF4AQtrLE398L9AsSuWG2CgFJpBo9uHrv1jMma61mtcasvoHUj",
  "key9": "4u4fzaNoQA19RGmJZyFCPbVt9AUpFU9cbUieQsjinnKhFTWzS92MhYHe5R5trFrT3q82QMMXPAJQWQ5cL1etJTk2",
  "key10": "MdaGcz2p4LZNagZbBcZRc6pUrEyYi2T9aPjNkTD8dTGELjomFuR3dgSSiUisnfzUiVE4z9kYacSMF7M2HWVDUZp",
  "key11": "5AFEXTZk8RUuxiVFDDZfswQkbRPvVyAGdn8YbKyevx5o7UX5QhD5hwAgaND6kY68wK97upBLTerHVkwius9VuJFR",
  "key12": "3Kqk2P9wMZXtG3sk9QTEx1mR2stMJ6Enq2zZDYN9Z7NFzTCahdZeNvKZP4n9YRtY5DUt18h79WmPzNrNpsnKnz6u",
  "key13": "25PFNQfj6RrAfwyFyZwEHXbCck2ZU4dQ7ZXQgrapiZjprU4FL9knRAFCKSymXz1YfiWvx6FQyqtNepYRc2DtxkiJ",
  "key14": "2mDUdwctGXgafFn6VZXnYeHs3BjY59piKenA26XhLTsJUvBweqFi8FRY43Ujcm5k5E7vKZn7XTc1TWGpPNgUsHJJ",
  "key15": "5DmgvevrS2psL5r4CbHr2XMFeyYsBmzqVdVxjPdprp2ccP4f8sUCvQJCR327G6uuavhpPFs5VVbf8Ginkpp34qSv",
  "key16": "3bpNaqyHQWbp7bdLbHQCoBvgrZouEyDkjtppGiFSRd8Mowr1C9SYHaTAgd8A39egm9Bm6hyvHwXfoMogknBUikVF",
  "key17": "62nicAoBsTx6FAiCNayMGSBvRHq4jzD9hu95BRv3kovAVwBhqeg8mGNpS3NpCLMci5uxpvyruttpVskqq4vs4DQT",
  "key18": "4UEC4Cchxnmk2eTMdT4wfRUubCitZugpqFoM1XtfRvk3cmANFvG23S31wZ8nQG3HmDks7JpvkgS8PBUtKHrxtts9",
  "key19": "dRPFc4uGPs9PPfRjr99avYaVmtZvX7gHY6tmjSNEBfqBp8CxPKpcU19LVy5sv1Ufb5sUx3PHsXHfq7qpj1MYwzN",
  "key20": "2WV4n5iUqfoRViLtmcgnH3rwe5xSJwpEzcmLFj8X6NFiCfe8sN7VwkV3eJKPPcExjkJobxbXq5BfgUynyiYXwfV2",
  "key21": "5m83GQWS7F6fJds3UyY45XEuESUbLuMqTxoZYqtfpmqLFPzvZfnLHsybYZBYjDWJzzo5mASzCrzfTH5AoayNzFxF",
  "key22": "2CneduMtfPMjYJVsSw761gUKp18PiMMwLEeUbJGu2Ray5JM5uyYLyGozMSTf1GEvJG5iWaLAMpAAwDe4maYNvQtG",
  "key23": "2iq16nbu1KC9Gto4YgfvBPLbK19sU2CkPbZVAy8dLSf3pT8gJBK21dDrEzKGX3fPVYxRL61b53PFaWYA9v9xR5ss",
  "key24": "2WLPnjvX5HgCWvmdaPDYufnSM7MppM6D9jeQf3mvzMpn8j2PfYs5CtfTPE7VmTRQdHpzZuFqL7ZXJXQadzanuPr6",
  "key25": "2TgktyhyQJTiypAkPj1UFk5vby2hoPR7ctbU4CJdsr5sh7NtGMzi8zWMRuPAin57BNuVnFjv1ffPctgA2voLYtu5",
  "key26": "62i7fjHcpaVcHttTuz8gH7DFP9t3ZQ3SapfD5w2qC23Ltf7GXaVRViEVGDoLBNbDgwvsuQGm6ea1M1xFDL9CccmD",
  "key27": "8g8R2UAaTu7RMarfXCBME3pRdo2PtBmzvExqsA439awiwiytnQwvFNDXPsxR8YjJUMVxRLRmotPaJS2zpfdyHaW",
  "key28": "29R6E2MEBRP939arWcgPQ78BSHiSC6Mn54Ja5Ctbn4TbbDtZRQMtitsbzb6Hbc4G92gAizY5GgHLaqSgw4y6ghXU",
  "key29": "3eU2S2ZZet5ZNMoRVBHuM7VhXHWB3hVc5kkUVei21Lh6wFQvV8tpCqaehiB3LdCiHAQLPw5WVMfiP4nReJ7jGtvM",
  "key30": "34YpNK5RAch11moCdFaQveHsWTTsYDXYAmfhiCw53aFBF23kzreDbzWZqmeFrHTDYyTg2DgauTX29eR5TzgSxUaA",
  "key31": "4pfitL5cxuY4LcCfnouzYGp1eJB3VdkWmcgL6w49LUUaJJgK3mVwCjTkzouptrRhoTzaXpJtGxwq7d8BAgdnAZf1",
  "key32": "f9WBBWnCJH7evkzAR6uvgG5ZFEY9SiVhyemZAe6CW9w5oqA9jaDw2tsyEpa54XzeLnCnDNbNDtxwSEQkcrGuvti",
  "key33": "4FCVxMG2duWMaFXEQHP4oM8d6nhwibdqAUvHUonMPxeun2WraSPjhEvm9kvmcb8Q1t2eRjRYWaCu2iYqTCCsYZWn",
  "key34": "H8v8PXcJJ2wwAr9GgLyBREV2tAiKyGsmc8Yq1hBzaHA9DLhctDzb95C2xHFj7g2QhW4ihfeXYTT1FdLYcyAQC2M",
  "key35": "63ZJQBCnQWcQuPjU9h9LhpT8pPVc6XUvTLUQJSHiuTVic391G1QcdVaMv2tWdd2By6LxKFzbn7pxBNbZbNXJSRqR",
  "key36": "2XMiVARp38ZYt61Gpa5U9HceVp26ZYxT6V6cYvhyAD65BV14TVkSKrjbSSrS3VH8qMDeZ1w35rbADbrBoz3jgaZB",
  "key37": "z6PEXno6rzsA7LvGqeXyFB74VASdVZW4PyWGQ7d5g1py4myntgyFgvZqxUTYv5XtJ1NG5ezJE79yTEa6axCpLpG",
  "key38": "2u4Hx3iWpspAPMBiLKWUDrahefuPqCxWTofvBenB2mPLv8FD9wA8wzLU3XdKZAVUdufTC3E587VxDBhWRvBNaKxF",
  "key39": "NyY2ed6eWwPM17RwiXr2R1Y8E9Gq8NimgSh2aMmUjq6ZQvJKdcgpVhXZmCua7hxPC5tMVvXvtCDPgWbFu4AVBVW",
  "key40": "kPfowq6t5PQfb2BGW53N3SdkLeodakrpEWFkeGfWr2YiyA6j7m2wGQ9QB9QK7AfmjtQPnKNTkQY9w9ChgwzzVAp",
  "key41": "PdWjzi6RNaLjiGot3riYuCVLdwKHuK1pveXqFtRhTAoJGzbv1UXJEHZCGnvJaSpbdJ1XL7EWzZURaKKx6ppSF9G"
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
