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
    "2QdTGvWFcErtXSDqVkMUBbzsStUKNKYznjGjmwSzH9oFWV1GRSjLhJjF2tAAbFNAUW97LB2jZH1UEg65ZPG8ZP9Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x9LRYC3QXQ6srJK56XR1bhqVT5QBKVshioGpD8mCgQd3U8Z3yDQUFboG7Nm3BwAJUvpAQkse6LCzh1PsPrMddT3",
  "key1": "3DiyZd6jgJxWar2B2VNpk87YzTNo2kwSuDSW66ExKboDXHc7CZNBnovUiQyxishEiESiGN7cMaBtwWHmxvghe9dk",
  "key2": "3m4iDW4Xz6D8NsML8A1wxBwuKwmDQ9QG3h3JYVy4fp6MRftxUWrAgx8Q91TGMcRHBwWr9wsVX3v7gPkK4HJQr3YH",
  "key3": "2fjH12zDzt9ebKRMKNYoWVnCb6JibaueXyqJbctDXiWMrhodViKxB2iDHyvdym8S1RkRLTwJpgT184EH6hAv8aQa",
  "key4": "2Qu1ErH93E2zJEmZsyYiqVLEzre8CDVntWTKz1s1yXatpfSep2k5eC8DiL8hUni6vbAdpqAioeGREWhjcQiouBBS",
  "key5": "jKyY4UpG3RqP4uVveAgkCDkf9ZBFoBuhnCMzK5L8qFEz7GDKtYuf3zpkv39zizSAW355qWoGxhXtn1N4PXF7ckC",
  "key6": "qTUfxVwgV2kDtXVkRuG5euCeMT3XJyRsogpnvo2C8HuvUjAWVsPujmGnmJdc5qnPZdfKgHY8Sekg8xrd6seDq9G",
  "key7": "4vWTH8oSEkd1qN8xitayMautiEwQJyNtyZhLzzkfJMDPUZpdiCuWXmA1EsJXiMRrtrVGwzViYPP7NKz3NnfgZoMj",
  "key8": "9mWK5c6cU9tWAKVZ7XuhrwaZ82BYrwEEpmcPoWoucWVNoyMwRM48X31zx3CkZVDiznt9T4wMZnxSgWCZoQ3k12b",
  "key9": "4tg3Cpn2EsjmaVbfdXKjBpjpYLziWkyTjqExPYksNFBmgVxzZJYjQT7jgZUg1a3Q4Q5PmQzd1ror7rPu3TxTcoQY",
  "key10": "Nv9vLjxD8LJ7XjcSHjcWSXq4p1Y8uwhtq4UUKeZVjfWWDjDTeYGgKFxTfqoWQNKWST3b7nGxttNMwxqLGFprkkn",
  "key11": "5P6sUV4dK275eAJCaNAKhfFicMMtts9VtwhiABb6J2eNrk7BLjgAwWvSimWAHATDZYJ9ZNqKKGhHc9utE5R1DfPg",
  "key12": "TCyFC1iUtPin2pQS3sFbV2ww2ZiVSDbDGhXX33aactFq8mSYM1wo25wd6RkefevyAyr1f8nju92LS2tP3RLBFud",
  "key13": "32B7ukcszUgEgxfD3FTpk8SVNMWNT7qz4Xnaro9UX4gz1up6U5QceHT7Xb7agXA3LDWVDFQ45pbYqqLR3Rx1kptT",
  "key14": "67J1b18ENccZCz2xosMjsk2vpd3Kjfja3cFuJwBUyW2LfaeZkszQ9rZcdMJ7oEkswat8hUaAVnASyC5fLqUwWEZ",
  "key15": "EHQ8u2zAkrqSi3eGri5GBtS3pe2zNVkmDSuNpLtrM5ZdYYPWAh8LZFco6e9G1m2e1ik1ECiTQamx31meB9gsdQu",
  "key16": "2CwKjv8vZiPaZ2tbvFTAAAr8Rxpya5yBSbKPXNM2qdG5EdgWHD7uNaUoVsMBUJV5gdoEvuGhauriYDLHNq2EsMvB",
  "key17": "4jzb1NNNHNYj77kVVeorVizqU5mo45y5DmeJo8CShrzmyrjJqX8oL13NMzTsMiBwnN3eVsqJ5qXPFBjZaJZnkbBx",
  "key18": "4abEyjPk44pwwzSg3pv1S1M3innU7awaVdz4rVTACw7nznMvDbyJuLJh2bJXSegWdyhMhETiz7wGgkhYUuqmPcKk",
  "key19": "5NT929uqf2MuBUBjgxNs4rBCNWvq4XznUdW1Pz4FuVhP4sm79cvpqgjdVJy5hmnxcTTsUgexdjjztbpo6WghmxRi",
  "key20": "439sbuhMxANzm52nmgWkp7GMG3HRsHTq25HGPxBCRriHuZUGjtogWNoGNM6RRbsteDiyqCVKyv42WgiT7oDcBzFf",
  "key21": "3G5WPHGx84pDfpxFbt4GVFtiySwqi3UZPbnwiavrhzNBjQuWAnyzvAZgfCYRj8RMbGg82bWF3ZfNfzDRS6qPbZ4a",
  "key22": "3mZQqdFPuTiRUwWML7NCYsnJDC8nTgPJ8QWdaSYdu4ciPuLsCTLVbNMuUfXqPvqMhoJE2fvDnphmrfLLoymPv3C4",
  "key23": "5s9Di62JuwS4FSo5feVvVwWTXdXQ8fKfwNaMrwCkqJrZ8mdpVavFXqdvpFGaFcppngJhE2mnccNfLVtKRQX4Z1CX",
  "key24": "4MxuVZe9DpofN8BsiTbVbKr5Gyqj2R1Hvufx6GHr5B7En5hun5bxn9SdbrcUjxSutDMDXD1Dj2hfuuQgF7jRK7At",
  "key25": "3vezShQ9XTR7wkPLM8FfTDKydeHafV1ajqBSuhRtFEsyau2xv817MD9L5d2pQSFLSLTNoCGsskqkqhUikViMuUBQ",
  "key26": "127GTNZ5hhXvyqTowSJFjp2A1krLyxxB9ZpgrcvyGxzNEwnWgsZffStesNeSHqf1zNEXC6pKwD97QkyMZY2LCoGB",
  "key27": "3TdxKdwfUonCLLadpMoi6DCyqrawrEnhNR2LdCbi8DdWaN67ei7Rk33V5K79QtPo8uHZTLTKanhPVkBWENE7cXZs",
  "key28": "4UHX6JbNdeTGUL5vxk8k6MBqG2RMtBne1vAUUY5hRYuHvW2SG9QRZwt6vAFXnq3a48xqE5V2y1d4qybGY3jN29Ax",
  "key29": "3ABX7zBJ4P7jXZ3JP52pbGYRj8T1rT7PxZfRAGLTaxHYus7owN3bwVi2Gkxeo465Jd9nYBYWbBTX7Y9v7iDsyPun",
  "key30": "5mLPKP7zF49bqJi4NSaZwcqCzJB5xkaQunxErLkzpnPftJHKtczbCWV736Bh7EFZP2nCq6msv1Fnda6iZQJ8Ey6Z",
  "key31": "y7E8JE9hZDFDjPnQcLDZoqPiydSuomSjLdPrtLPakSyW6MtMvzq2uAXwtTcGhsGWuKkshDLK3g2LkHXYUtPiGaa",
  "key32": "2BKtDL6Wgrmafwi4iyyhpupVHDRqFUWZbha4xTcVg1xTFMboQGjVShqzVr8ohSaYAfR5kxmy4Py4NC5VY8XQ1Da7",
  "key33": "49uWXEPFxxBq24kVy3nvX1ZvWsTWnRtSjnJoN4AqmHHwbocoPERwmaqu4yGwDP3ZH8nw19YpCby53ojcujESUEmA",
  "key34": "mu6bAoEehZGLaARQVR3bPw7bizqshPrLn1NBZ19RvjcTYjZxpmgLcsFcFascAuXNw6HgnD1rK3XkBXDcyt9qAtG",
  "key35": "3WrBoi1wUXvmcndQ6SgHrVmq1nRtnaB3FTD6j9DH3k8oCfbhaPuTVCY8UJnHutW1E36aSZxqH4X8pLUtKfj27ysj",
  "key36": "S3LxugWaLexikxRJhRBvx5Ki7Q6MRSMPye6dsm6Haoyb5pJuPXaE9D5T14Dxog4MsrDTsYzvvdksPoJdKaWFDtW",
  "key37": "3arNrLBXGKoy3m28d2fKqU5f6pfxYfwmxx1VJaZJwTwQSRj18mLLAMdNF8AWBcM5zXViCUNqDGCLYZYKNaqr32e8",
  "key38": "4mTP4Q29X2biJpJEHws6QNa4kBFoXiYzmVpiyf6JriogHiRirQPoU9Q6bsvj5fnNbNvtLesJW3QVq2GeCkKQLjqv",
  "key39": "LJBDJwjYwcXJuAJUhtXVxUhUoncUeExjNC491dhXbbGgSyeXawqRYHnYdEq1wfkfQmyvhhKpaLCSfgTVXaxuVK1",
  "key40": "62obwECFM85dwRN6v6riYHXGYM14wHASHvcdVchm322CwVRFDCdNDUh1gbWGe7pZv548tqtJxC5C1bnbRLtgT9t",
  "key41": "5JWQDNx5XunHWm9Ayzq3QBK62YUXLWxuCUqaHbCYkvp1g8nRWofVAjkCVqjfxWTQnmvk1u5KbvbyS4vW1rTVFy6F",
  "key42": "4wcmDaPCiH9UCmthJgw2wuNAMRZ19ac3gPqp4cu7WQ5HT3cAdwu2NdT7qdr5fbQymwLoZC6TeDWQJNmdfS1vbasy",
  "key43": "5jGvXpYyHqN3QhiFF9DP2vkZCEKDx7WgfybDKy6KvVc6LysCN7zNakYuJPbbex4Xmhi8ARE8nZVCXpsV8B8o85Pu",
  "key44": "ZMN9DV8nQk2xGadpwBgtrKUNzjg7mZ3MFVZG8B5ztRV7LfisnupxDS9WL5y8zcW1xnw4JsMuw3zrwoBZVP1fJdZ"
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
