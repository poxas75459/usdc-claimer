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
    "1YDBbNE3asDuhatSsyzP737zGH1xAK9xheVE7KWKroczy9r3TDCQPVDxjs5bT7qM7UwFvT7YXHcVZcjKNqBeYC2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hgncxgEVJAd67qdzeK8onxrdsf9gK3eyosZ4EMBHuBBDwRmRyCK4FxRaiySD5vwKDWJ6erTiGXKwtc2c4vUgwwP",
  "key1": "3JB9pDgSnrVmgFATattsegVKPThto9sXFBhs8vdAoUVpitJieR62Jsuso3B1FtGymUaUpWmxAUaGtYMCBgTrVhBY",
  "key2": "24F5mZBxBGPn3Jbc9Bfco7KKhFLZ62oJWNfZc5r8ZwbqbeyLsdL6vkAas8i6sJHFhezj97Yc7AkgGYBsBNuGSeiS",
  "key3": "5pCmyvEBL9RsQWEJtWprUzKSyz67G6W6P824i28zLvnwuFguwgUinFPcj791ceQEEcpKVHEe5KtnnXqnwiFqTAGV",
  "key4": "mJ1oeUFA7CkxzJH2mhnpVWxv1kzH9w5xzTQVhovZGfzs91NM5wanrwA8U55gv6Pv5ZLkiCXEp6NHmdAcyXLSBfY",
  "key5": "5bhzoF27H2KQSXrTRFqXfptfWofk5MWEywh37QXo49wJePPeBqiPKc5mxTxwoXWwcv2FcaTADc6XagWtvFy1uiaU",
  "key6": "4x8idumAf5r4y9kh3pRo6E4dByTqNoUrPVMnff4WxHrTBrrNwwXfUBBeSLMcjd6pQ3uGyiLe23BinCnEimkCkH17",
  "key7": "4QMcxPgQVMprAArThAYtg5A1magAGEemyYgN5EUBZfGNKnLMgMDN1cfFUyx3g6cDfzahRDd1dkUBHjZbA36T4fmC",
  "key8": "2q7pWPRuQsWS7MjoU6J4ZmoF4c9wZ5d3REmAMopQ3Zijh913iJ5f9jBAsDp7rydrFDjKk3v2UNCvY9qdRisFSaZr",
  "key9": "5Q3zdgTEKPYnTA6SdSYi5M9zKVgqpMeXrDezt4miUBDHLBsXfB8RnxhD3MaNfEZuSCHCBSYoUfA9ep7v3bNj4KR6",
  "key10": "2z1UBbWjrTCPMEJL4W7VAUyAxrWwZQpzysHQ9MgxrLf2J3wHLvuCLiJjR4TRXozHdiJrXossyeYqCNicq6JcXLFp",
  "key11": "26UYdDWkuUT4ud4Xc1SztTR7Rr5GBAp1nnU98hd9Dx4NjnnHoYeoRbwKYPiKRT27CTKU5BuaSGfYPRqdKCrrkuQ8",
  "key12": "55afqusXDdhAvSXcWZ2212UF8kGXPfAScrrbQmkocxn3aTRposVUFgA5jsyh1Y7Uscgnb7AEPFpW71CKtuL6nEbs",
  "key13": "M6DRGXB7afbXbM8rHaknqrXNRGP2na9SriTXhCqX2zagETZ9g2KVC1Ueyx5TLmMScPoER2WTytSW7tjiuUShSKr",
  "key14": "w6GCDbKusfi2D7wi3UiWGGMbtp3Fqpxtp2xiMhfPhnBRDBan7tCFbhwSH6c6GMMtyR5S7rfevD2UYjZWaYR67c8",
  "key15": "4xEWFfrWChUqFfDHiweFwLcmYMGxHM3jfJH7yB94FoL92a87wZWh13o943pXwb7yajqwXcCDpHw5xoMWfC4GF968",
  "key16": "4BPszZXmENRGtzAh9PDM1gD2AQBoxMbjQwM9AQT6Y9oPdvfHTd2FuvX1m4dr1J2c2kQBTTLdhZiWjJs2mY3T5mLH",
  "key17": "4RoJRPi24t7QwYXSEdamj18TWa7YMS9r1tk5MkEWJqfj6HicrtM3quiG5KyAS9rjtvHjiVPpUPi6HUH6iHicMBie",
  "key18": "U8X5N79wUReKM4V1kTYQtF9BRNGjweJ1Su8KuKcx9zftSNsPphSpcxXtMQg6SD51iWFzatzTHWgpiQviVkqJMFD",
  "key19": "31kzmbp1HHCY9EVPEctAAsFKqV1DYDK9PbHMyTvVH5FqTtYTb7zqSJ9t5tJqkVpzcv6tAKAEz6TY3bCgXTUGLhjL",
  "key20": "121p6RQ5CPHhmmrFUVZk2HQcYkS3Z7Mx1qnpJpVNTFEQEMSza85f3F3WUkmNG3WUw7hnjKyTFxJRniFLuXpHdtoJ",
  "key21": "QGuWbT9NoRXiwQ2bmCWNyg6DFPoKVBYVjTWin4TVzKJZZQeGC9J86wXbpropqfB6PzrXiMf8g6kAtJT7bq98aPj",
  "key22": "2DGszDQW8mYaRmbA95k8ZSgPwnnMTHpj9CV8z3Ht6zzVofJKqrG7sDTS9saiNAJdGBMLEhcSbjPYBWHYmgMubef6",
  "key23": "5fbfCTxu6phRN4eMYYjuhz7E7RhSrceLi7ZAArCL9nrffUL8vqUwy6JzwNfMiZNZhjdk43yZe2H4cCAsr5Z2DukH",
  "key24": "4cNdge49yT89ZioSEpT8bcFqdNhpVBQXAmmC2FrgD1ejMkQyCapxc7QfCEMsCZ5kMWJ68euUdA5CfUtKARmRESH4",
  "key25": "4eLrQjb1rMe6JsHsyyMc812DThJxopr6BiWhMH7DmyELdfnFvK4qAu272PitWpXLYYFTwPZLh9ZymbB3JbTj1wZp",
  "key26": "YWrUcasJUcyUAK5xWZAnjrUPpfoHU3RWDq5Loq5aVi6YqavB8rTZYpdo39Wx8SXT8Jh7Q8edKHfwkZLaZgCfSAY",
  "key27": "2BQ2k4ppMHc1b3UqHNqhPhzg3b8uNHnmyd5JhESfXHwX15EPF3NaZ8cmHYDwtc9zZJDM2ez1UscfA6dmz5TAJxVj",
  "key28": "PD3Q3ytLFphfxLJbkcz7mMCxGuDaWGXTkbpxDhu5WEKVFviZDPMMuQDCSBoLAquwoysKD5wPFgEe6kPmosfs7am",
  "key29": "35fXLrYamaDPpuyrNTGPbpvhBNTb3Up1JPDVNNVfAsqQpiqf9d38vpHMKMDzdZ62nnB4kKDS5d7rJXRSa24AK4Tv",
  "key30": "2zjpCLJhzLPoLBxvSeapUqgnKbRPib5wXTUDJjhJHntTdRPtiZUZ55U3aDxNueAKhoJUd82MfTEEZrGbZnoW3WeS"
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
