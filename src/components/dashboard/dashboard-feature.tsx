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
    "397U4DxG7h286VLzFkNHLRqvaGfCHiVgbmyaXEKYcCbXu47opBTmJ7v4GuNKcZAFRZuoqBcfuiwWhTpNowm7afgW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WMUQuBvzGvvGnhcGuenfykJBVMpzBTEuknPrfHXbmj4dGUUSJv41g3FuySgPBLPrnNp6Tthpduu6vMiXNYWQXEZ",
  "key1": "5eDkWMNj3vgn1WbbtzKCc86nZuXLTgZjirwtrH5Gi8iFpQLkoBtG1nrSS3Ji648PLKgrZw3wtXFvQuxejAFzaeto",
  "key2": "Kef8DcWQzuAVSmMS9WUhFBEDPg5U7FYbu8AiaBDCw4wANtL4VQKbktPCF2uvRCeM8bE5tgW8UsoYW3q4i9DdmUq",
  "key3": "2gJ6KA9MeZhf4o9VQngTfNyJxbCLVyL8aspx3WFrU5WHFd8RbQxzqYKwdkdw1KqjtaJvdWH7hc85SLtDzdrTBvYm",
  "key4": "rVPG8aRGB2NLQjgxtHicaHh2gaTuDXU41N5oRdcDCBonGFn9qRUa12JWH8GxCwQiJjkZ4VbFU68fPnRAgPPRPAc",
  "key5": "3bw7unvVajRCW23yGGcRWSw3oqkPczdDfAqSkXLLtQ1P8DjQD6avJk1QuebbPnxXG3EN2srWge73M2A8YDNvPRuN",
  "key6": "2k2aHfpwJduKTJvbpdcxc2dRuqAqP2P9GpctJF4x9VDBJczfyE2WAhm4AXs6QkPpCrbKtn1uBsdUr9yhBomPV43D",
  "key7": "65oeCGnqz1VKCiAcybWcn66U7kiHX8FPDqDrmd1xrcHepqPQKqRVNiqxeckwB2wDuMWzPyVtL8c2LuPZyVYe2ycM",
  "key8": "2wCjhA7CnBytR6krjJ11Zpb8HdsrHYwkZGzkSmcTgQHtxHCRvrghZhsg2Bu7nSs75Y2Ypq2zcXwPGKz3JDG5umGr",
  "key9": "5gVdbJua2P58ZxAjAWJQrriBHAP8hjfV9yRPCR16817m8mDrtQT5SdYYnSApCNWeysHUCqYUjM38kCtd7mXhdnGh",
  "key10": "yoL3P5S8VEz11K6cGBKEKvcf6JcSx1v875ALH4ZduJTmsUvFpbRsQsv4vLX45BmiFwC4c2zFGnEEyRsgkuhENGj",
  "key11": "44yPXDVMEA38iAthTNPbiEUULSKeyeVtqcgwwt6FBFPdnsnYwNbxQvGjYGL1uCRzvMzq7aw3G5fzVzCP1PE1VM1g",
  "key12": "5KKemwv9c2NJeVoVbUt9Mc1q61aZgJTVhF83JDHbbGp3shnxfjH943ctCLvKVQAPdsjjd2UparWb2BzLkrHWHmN7",
  "key13": "3GEdy5HN2dNBwx6YUfaX4S4VxfgPUpzt3jFCGmXZGyJnKG2hd9kJkfTRvERDxrzJSnuB3n5rxfdWW1o6ZoftQR6u",
  "key14": "8y7YHbX3RFBgMt64QjsGN5TRMYfZ6Tga15UFAV61BmfYHpQiTxBHgWCusEr8cNosbgcmaJAuLrZL9wfRQSJpmpc",
  "key15": "xhWG1qCC8VD36hvxux4XxGiSWAWzGYpjFaAjgQHWSBWJ2jEXPGNS4NexLCW2qdruccMJHvGfUrJQyzPyL6YaCxU",
  "key16": "3NgAiTqHUJAR8p7iqXGaZv8uyKDqubBCPUf3fLy2b9T42Ef7hjfsuPSsSdxggCSqUANVuMTjyXJD9zdpYBVYm37C",
  "key17": "hgWFBV42KRkVczqZVZHVkpiXjWAcz2LU37x95JX5qwtUFzcKyxpzXkFQP8s5ggvpLrisVG6aLLApZZkDsMYjCLH",
  "key18": "ezCFkjfiPzmzynBxjyJtGhhjuhhcT1jHi3q5Pnc4hDy1cJBoE72rhWsDUQXREbtmhYTBGJ3fmWciciTf9mJpDWp",
  "key19": "64DkZNmkBgXiF9LPUMVDtzgo2MDCDSJZK7whD5d6izr92poUHQi2z4WiepNwWrNzcrJWEUGK9UN1SMxCna49tKpW",
  "key20": "64dU5kWkQ3mg9YmWbbuRWQGRvV6JpTe5Y3Wk1xG5fvWQG238XZ4WxoeDkX4ojkVmygbjeWnErcn2V9rg747uNoKY",
  "key21": "KW3hT8ibRXwJCEEXroRpRU3Y2MFKj7jTpAgW8kS1mkSgZv5hi1aEgUZKNNP7dTx1e9vpdvR3rSZZ6Y27PTrGRDK",
  "key22": "4tdxQSEBu61pJDV8Z3BxdZPrRGxWwdWdByWuhmpA4L36rpEPE5YzmYuTMwiXUTsmsqbQCzeUvdw3FAgajxLDdC2q",
  "key23": "2S5M3fNkSfPQyCvSspDB7dGXcHxtqyfa8SVz6zH2xMULdGzPEhShCnhCL2DM1M4AcZ3hfz1yQjeFFYbiwVhsg8eZ",
  "key24": "5qft3qumdNm1xKdJ9RsYJfDovzs91nj58ksb4dABT9h6dsPTwc8vJy1RHdANFa9i9CSaosD7pEoWhfSCyBd1qvdT",
  "key25": "FmmatXATGZBmSWRyHJSbjkd1fi2gnAmW9bxqeLhRc3rCwdnvfyX2K6nZQsaGdjBMiNzxkqHvJhfcm985czvVEvF",
  "key26": "2ztXkKSSsNRZK3C1P72wqmtc5pHxVxQxUygvhakEBTsGyqg4jtiF19TSrQDUXUEoUfBoAER6WQh6Y7WqmByFzMg",
  "key27": "2Tirwwu31t2nh65Spm1r6P86NYBsTV4kzPzvgVUJLXPxiiehrBdvkLz4Wt2Rcsz71vizLy3ErA762aSZCmRL6tC",
  "key28": "4ZXFG3fr2pFLCC2svcQKKac7bxVPcFZJJAPqiQSLrX6VD6jGbSYwZiWK2B9fyz59BKHsXhjoTdj3BgpyjdWkWD9r",
  "key29": "2pCmQeomhSvxxJQ3iYdnxwwbNBxB17HpMAcXnWTVezLwyEfxf8wutMD9Rp9w7nppXxTY5t4n8hJw8LYz77kqYKAB",
  "key30": "5C7t2ak3SwDwVrNggiJYemwLEJ8zdeLQRqJoaqsPkMvBx5jAsFN1DHCFqwHpKgdYb9LERQH4m9HCi4zg3B83thE",
  "key31": "yPtpoH1y5MM5yEtwiF2hcZCXQdeTRYDZ9fHCGTMTQK42VTp1WEDkiA7dziPnNt1scQHGodSypzWB3z27ehYWt8T",
  "key32": "2VGXijJn9s3k9m5iRw6bzYRr9G2WCyeNY1TenCiZkRGeeHdGyX7RUccRp1A59b6hSTbGJoiHvGvKUVXy2jZ8tmgV",
  "key33": "v8VvG5WNiRBTP4W34VWeauxLqz1xJtkzKoDcweR2a1SC75zYtmRtXNQukN2YSsZjAwdgoZp7WgWyKohqt2F35do",
  "key34": "5JtM73drnhqkXyfe8u4DTf35c7TyZ3RKPoMGseyYRsCqX7Q8q2bfDnnb2U23R9kfZSTRJDKtXEUYeEKTzmDi3KK4"
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
