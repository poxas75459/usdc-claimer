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
    "4NvtvdddJi7n4cQTA6r7VyLSu1tLT2URsA2pFRrkJJ7HqhrAdc38MJ5SzU94tNUsYVdQkQ2QD8XENasWhasnBLJT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27QdB5WNWFs6nViBDf9PzXHUcPHzQyWbXWC5SiNvcCqu3BJJKDmZM4fLQcZUbsHVVSz7eSs6yrFBjh1f1ECn924D",
  "key1": "4WHcpWW2HxMn4hAc4tCx1s3uCZaN4gLbfjYhUPzD3X9hh3GobCDF6tCwUrUtgtWs8MgS35uSymfx28bHPKa47pSG",
  "key2": "657vMcWTZrdsin8SAwuUn4EhYN4ANGHgMduXNxVmmX5f9penZWKTQL8KMK3bwGgBXJcrAHKm7nPFG5Gw699cTMDn",
  "key3": "2iAF1k5XEFVUKQ4q4j32FBRMTx3K1tpz6M6WtVoAjQkzh6DAawTzVp7KtGK34cFU5eZuJZRs7dKpXkJ1QrQRa4Xz",
  "key4": "wUSRCkwZqG1Kw8it8KbvUTQMMRKC9JMZjgF9697iztHBU12fcFaG3dtWZ8SaHk5FfRHPSLQG7RpC93e9oK7N5Hd",
  "key5": "4X4ZBusK4EV65Q4BcySD2rXQdYcYLmBcYCLwp9ynkHjt3wz9sqNd3aU3VdRNm1EU86rHzkgiCNU9AcrHq4zeq5oS",
  "key6": "2CZn8U3wkas69NDJ54ULQZhfAbyPxaUxnDcHL5qWgVqvu65njwruncDn4HACHiiU8KFLJ4TW7YpwC2KJRCnxFn9V",
  "key7": "3okSFr4PKFTQoeKwD9byyNCn55yHCgCdJT12758DzzNYUxZNjW4SHq9eMSExDuwTfTJ3r9vgV1vdyH5yjKpCxpxQ",
  "key8": "reSFkp4pi9ZmexJJFb8ocT2zubosoRZFQUbrC8ycPLvTX6whYi4QxnQDPzS2r5mq1sWdyb8KbdxxvdaeUKfc3yc",
  "key9": "3gqowpmNKrYgDVJzQvCHG1wHgFx6495zFL24T7e8FTM9D3NdbVP94BTb97vxLEEcoma3m7nDYeRQAaEot2N4EViJ",
  "key10": "5xyuamzoPVGG3zwDBpzQmj9zZCnKsQrD8ovpZ4BP287SBbJnmXu7b8mnUneRfatQFwVKK99bQvJBb6x1r8gArYeC",
  "key11": "2YUP9M8MWt7ANHN8iCCzkG3gCLKREKXFWMkWLptZtLCtbN7cB9GGnJGASY8CcCN6ys9U1ZgFmUGYD1ndDV8eCwpp",
  "key12": "4vNJh77KZtEzYXox6WuRLaqvugyURzzjFFmQ9UJQxg7FJGrKCQy3yGHKFbPyiZN7P4vuBXXxSmDYRDyCDLS91kux",
  "key13": "5n5eNdTZQaMNpXeJh4XTKvd88LoazoyjbtEQrDLuSq7rbYdq8fGfLXVP5DXo6BtaPnhNymvCh3bqVAMgfUQh6rd7",
  "key14": "4UEpfvPHR9WqicwCeHo9ZqofASLRz7cEZC3rXPNLiGiVFtBiuiNEDKcxxWRmhyPYwABKAMUT4MMvDvb6ecq7Lve4",
  "key15": "48mmDBW8dpqagG7MX9QpdzUz143jnTN8EZwTS4y9zHppsZS7QLqNKeWgUHgqJrC1Tiy6By7ZDxXGVEmNNW6zwGP4",
  "key16": "2ZSKh3A8Ww4kgBwd1NAvkMkfVKDHGvjAvxsssZbLxE88KZCaN5frgs7kD5iUPRKkr2PDtSjx7Be51rytcUbNaBWX",
  "key17": "5iR965Frz9y6syYqe5BbYLAFSWuKNCYX3gANL6QsRJkQij82qJgACrW5ri8ujdyTkJ1D2KakbrsqMbw3QYUaAgsF",
  "key18": "2cXE9KVQsX48ym5b7niuCoLsseDNEhK9r9xAj64CBHXRMMpog1o2XdaWdm35yRcWPDMy2tE3twoed1YBTMx9bXHQ",
  "key19": "5VHmE6vunxW9tJxhd3CEs9kCpoMtB6fAcvycjrdJJAT3wPqWkYK7F1rTx8vJMXuYJg4GSfnhVetUpS4oUnLDd3Tg",
  "key20": "4FbyZykDXYm2LRczFfpatD7Xod31KUoBde2BgGFdu3QKmuyh4wtTH9o5m83mhBPG94jgr3VLM1xXE6qwVKmyJXZx",
  "key21": "4RtNrbnhLRuaf7NHaey8YnLfij5mPqTVuP1daeUQNYpbhHhLvLmdbvZtYjRKXUyEcaC9Dta3aQtVQE6ghJGo3Krk",
  "key22": "2nYxrZ5LoKS9yozAcrz1ihLKGyvRUAGWP6eHPnPEGssLEwqBggER3m7bzzmNFE1f9Rh7FazTVCXaYEUp4FTbyWS6",
  "key23": "cmx2Etv5ieL7qPBKhtzyc3Uduzez99pn5TFgwR9TCaRVvAttTSdU169m98JNAC8UM9ZoT4BMpxq3RkqA16xsZY3",
  "key24": "5TDjc9W1NxPha1Luf9DT84mZZ78czY1AnkoT2nFLzunwZN9piFL2PZBhS18CoP9fSb8sJJgrZ3mVjqDW9553oSbW",
  "key25": "4PsuHEziLX332f91yDaRqMgFeZA1hztVF3dYfxop1t4McU1YefzU3wek2iUhoQeiQrZ7aTEkXzcEghxpmHSaq7d4",
  "key26": "3rHaHh1MC294t2hZutJjP1k8MoezKeBT1LhCzXRJAtEfsKqFVyJvbxLg6pSucWMjUseCLE2ozZuXLQkYWP8uZHht",
  "key27": "54FRYwZS2qbeo2cT6GeuEqM8Dx6mbV3fwH8N47pBEfRb6xqBwkqUJA1kKSEEozM2RvJVg8Hm8DtEGukC7RgLPaR9",
  "key28": "4RkkwHLXHLyofvVKn4Q1niv4usBjHNnsKHCF8QrpdZvAgfheVdkZbthCkYTkXejgpoFGuyza6XXe8TXBsWx6LoXG",
  "key29": "2ZN7t3NQSLtWx7bL1JSkENzuHpWp3uME1cXoGXSnH1pC2cFVLpK6w1touu4FeoGBHibKbDvVLZA3H9EZkwMYhaNu",
  "key30": "5nT13dc45KmpXBUec48xS8eNFFoU8WgZFUvPNx42aSBNgGeje6rN27Upb66fHasu6KZ5Uq59K8r3dstHxPcKgyqJ",
  "key31": "3uEug4qwYSwGzk1Vz5aVRCMwxsTfjsrKyvkVr3cKSdbn5bFC7KFL6ZXTN7YHMPDYZSXkW9t1bm9UoT7m8Y6WiWo9",
  "key32": "5RqSFiqYvt77nwL9xZFU36FZXJXAn3BxKv1QHTYDo9ogPZVW7G2yPuUgkALdGrUM3Ngzdysfv2F84FKveokUaKDa",
  "key33": "hTfJTZkroo6hdDXJ6k7Hvk2eDYsXTh7cXEUyDYSRdfm65Lasc3Pc9YcU8T1cTfpbmitzft1RiaUiu3oc8FvmYMs",
  "key34": "5KkLxHCiKYZZx49RNCogzd41Nuyt4s86Zub2Cssqtd98sr3xYpz5GMdvj7K81utCTNFV1vp7AmVTH1t7iXgdaVFc",
  "key35": "3Ydj7rbwyuXmDvuYmYkJP68hUtGbCnAekbzmJ8M4ar2KYQjB6oR2CXeoL9KG9pNL2N4RZgYnPTwiPKotVGmDKyzp",
  "key36": "3cf1w5Bj3it2LyahedeRRaFzHBMNdGRsJ2S74kZt9tK86VtCiBeQFQqaUwTtu1YqLZ7xmwxRgyKRsJpVaXRxwcSs",
  "key37": "5Rj5DTub7jsnwST5giY55tVE7ubBFDKyr9WVsMh26A6ABeGND895qo1NnaGSHagWdu5oWkw5KFvBKmF1ZeEggksS",
  "key38": "4fN9Uu3XKGrq4q2ij3b2Ygw7hoL5zmyj9FjfTPWsZKWRxgyCR78iwCiXrwJepRNJdnXmJSvmhFrXArbmAGtALSAW",
  "key39": "MiBEkiRgbJAGhpXuoPWMmVuEYonA6FBg7e8Q4kf2SPqGPTxw1AW1LSyEY1LG3g5E6UA87Nfa1xb1YxbfDXx52gy",
  "key40": "2gJrvJDZQozZFDMDAnLkB3VpGoLjZads7iDcWRqM5V7YR5Pk5Gh9gUKHg3KeoVa9DgV9RiUP3JtB3Vy6aRaXp27E",
  "key41": "5v3d6cn4wVcU5NuN6ddwu2mKdgb4jceQHX13UvgWv9kG3g2ynD2iqgxX9skNmGdokyY3Z5P1W13GyzEZXZubBuHa",
  "key42": "3oihUoLujWwGmdGp82meFtgPSEAC9492J9MPJ1wVEvbdjkhDmp2yAvw4oi491brFzKv29BEFS8RoFgpTUrvkmhvr",
  "key43": "2yKuF4xMZsfb1bUVV6YokF1oZJMSAjrJ1mswfhWTiQCo2eUaqpfnnSjDzo1pTZFD6CQShSNYrDCr8DyHh7xgxaSK",
  "key44": "3VVwBNu16mVpq7dwK7TuiruWH8Y3SiiSvQk2RWun6sYEa4XBEFzbGM1C1i5WJmtQFeS8CDxUWEaVUbJVE57nxQ47",
  "key45": "3j2mfYNTTEW5NpdgRSpCLzR5NHA7p9zFPKMEJSVwxGs5PwH9kjD3uPR7MvviH3S7SZBwhskwyqN9X7jFFN5TWdoU"
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
