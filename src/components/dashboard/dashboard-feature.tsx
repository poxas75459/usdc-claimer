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
    "39jTG3zbiuezsG3fv3LZku8RU85yf8cLarrFiE5mhZiRcd6RxbuY7ij76UP9WHkAPHm12zRjK57tDPFoGaPCJSMN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T687osePwUtjbiw4zsUajNdjBCcCd8c8wUFbpxuxSHstkxPWi9GxCbTAfo83zw6UDjqTTNNB56PmPD1hGfeapag",
  "key1": "E7MMnztX6CfNp37RBVd5LMkVBTT9uCaC8QNtgH89vsn7uZjhmdU6srLuaJwpnageoTcemQWvtbBs7GGpZ77mL84",
  "key2": "4Ckp66oD7JkXVVQzadvM9JX6MSFCaaEMZW6qGWguQV33WaHJmFK7ChC6LUDKnSvbs7y56APf6P7PU2saTPxB9YMP",
  "key3": "v4oc5M2uokH7rYoDAkWVzE26Nerk9y3dXHT1GPgjxVkfChxvADwogDpLWaY2aktsaLJY1ipCMAQpNubs6uUtJ4b",
  "key4": "GuMqgRXv67bHq8y8skfbtCsZ69AX4cjRgKqYBzCcKsEp8xTJeGnoUMLfkmcmwPcMMUiW97RpXmPcGjw1sYNqbJC",
  "key5": "67dBe9rmWmP8WuxvikavzULvHVurmtFUwHrSV7HwWyMWMgUerygoLx3sEdEoQcWRhnK5c5KegtcFmHnA5cHzSTBL",
  "key6": "i4ZMp3tJo2rVufkWjrPjGTGz6NiSCtZ31akCjyfYLziztrPrrkiHaoaWRZLC1nbRKhMYqbgAXixkm7PQJvGs1G3",
  "key7": "5XmXTXeuj6kMMhmhKQXRf8Zfi4skYExmkfpDqLu6QQyLuzdHsUkM7A4Uv3GyKh8JXuDDysE7A4YZnagkx2q6QPxJ",
  "key8": "26k1QXFyWa38Ns58MguyE6Wmk3paKYTcLTHiiZYUV25eJqRAaKGz8RrddShizoavNNEasu8XMbpAtspG5iYnPnG1",
  "key9": "3ttcH9nkszECAjg7P8W7Y9DKPepMn74iSmzEQVc31Z7KFfCCs7D1SdDBi9Lvjhgd8MJcW3pgZzyCUk7udWapaE1h",
  "key10": "sF8H4pZcsoBsihV6YiCNU5DSgRmCAGaoXrPTZ34RMTrP6caUSy6Eb8d1pVtMjjskY16yC2tWZEd3hVKLVPNCDEB",
  "key11": "35a3RkPueD8kVtnMEmNznjd7ZS2u86AngAeKVy4y1SkRLwyJtk9fX7quvRUbY4Ym6uRD7zQv34Xs2cy7nMWjumjF",
  "key12": "248TDUmfcmKzJAbE96g6VxMmuofBtEARE1c7tXihX7nNvmBdDvSdpQff51FLvrxYb6SHiMwXcsvEghPAUKLyTDDk",
  "key13": "3usudytWcx3wbvJoAbYDoQ1Yt1azdS1WQQ4oG29b1cJAJbNSJjCoJoXmcH3v6jaew6EYzpwUzyW84h6Z3Vpt4UCT",
  "key14": "5jkaATEr84Pvm6sjRtbj2WWYTHr7nAs22krdgXzeSveBQdo1VK9tLBGYTkb4B4UR3LjNoo76FaJjTPdSZLC2Lspr",
  "key15": "2tyjRq333yv5v1J3CwTMJfcPCs2MJKSuGsrGRRRwUmctWS8ez983itGsqrHW8iFbksDjNQR8TKUWEdKf1uWmgiuj",
  "key16": "3DLKisqadEccQLQAUtbwjx1PT9o3LVpScV1CQyZZX5nL9shEcpXcntqaMwb1PRjgHPpsxCZDg5i6uw1BjA6jUeq1",
  "key17": "49dwZ4UG7AfX3FMWHVTvw5JtLwWUdtyjkn6HNJYwjsrdBWT8rKXNfSAit3QUMUjCdAdaFp7GPCemHNR4PhEJKHW1",
  "key18": "4ZgYTxr9CySQFLcxicnvoynk7g8YeApZwGkxSHnjSadqkTQ1qBxpg71PeccY5K7gDqjBo3VUMrQp4P7V5gPoKEUx",
  "key19": "3qhDopNbh2LywXAb2MaR6XZDRRAJ4SwvPKmRQddL52ooJdPchA3YNTzskYZrtpWbWArQ7mx2r7MuLopLeUUaECgA",
  "key20": "49csr1pTZJpk1JS6gQctiMKfbABHVb8VHnN7FGc8it3dotEsywyiabFfTHZVZ7sTCNW8QJuVr5EkUsH7yEvTfNS1",
  "key21": "5MdxNRELm97hh1oXwWu9fcxxNZqtyb9JqtPzg6bGUZgxU3TVKN1pJqWjokq8zM1W1y24cLuvrqW7tyiCnH73njQo",
  "key22": "4xnbpVbbk3H4hk7Gd1VX5rzHsMtCC7TGgvRzD5fMsqds1U3av1jvMyAfssdKyodSXZBtaFCnEpDVqxzoLxij2DFZ",
  "key23": "5NQMQPg2n3RTTbGi2ymePSNdr7NkVTzAiiwMzSe7Ufqte1APayabCSCzsrYBZcNZMQBRUAaj3Bv5YPA5gG3xN7sY",
  "key24": "5sE37r1e2a1w6H4St1hdVL7Q1UrDy1kuB2k4iQxmQLk8tQ9GRuA1MwQdq2SVszk2RSPxJ9xcoBWv8RU8pXsEfvYG",
  "key25": "2LBJDvURgxLrvbqgCAxDDhd9p6Q8bWYwgLChM9ehaUx1V4qaD9MFKhZw6YqJbFCzH3Z1mYgKW6KLQhVu3gXBS81Q",
  "key26": "27v4C8YqZ1R9XTstWXnXjSK6bkqBvszAFtpCw9CaR5tmMsc2rcEJihPsAKgUFYNyt22tZZTUqKK3YpEKoCXV6BNV",
  "key27": "2xJudcTVfWYpEE34NZ8QdtvUvfbBE9xsgqft4WmKFxNsxohj7bdxtMEksWDHRcTy4x6PFGdxjSV5HMujaALnwos9",
  "key28": "2LBRH6asJjgQfvWAKsakR5etnxKr5wxm6sPmWSRVTy19zQtJXCmLF38GhqLdYvTM22oTQ1KQCa5Qqysy8NrgwQsK",
  "key29": "5k6p5xwQFtSocmNppRy1AThTt5dcNXG5DnaCKxbAVHFPotJUq4A1gqbLttKpM7uZ4UBQ58Px6h3zFCNbuPZttH4r",
  "key30": "4uWkPSokXKmakC7VfxGi943fXXxSczqfj4tLvAC6ZRdgDUW6rnTcckrJgiVsRyAwAhofWR2yHtU9Xofp1jLSj3jw",
  "key31": "Y4vkwLdQDoqUL6MJUHykuuWMpNsn6NU332PqYoZKX4UwyVPuAZ8ESCAGc5g1Le1nh2rE1MBCppZ4V1xFuTJqFxD",
  "key32": "2As1nNHXhk9GpmnfofvbzMeeT8xNn8jDQ6xqU35aQ39fq7fEqs58aLpUZ7tYFEU86VwpJrkxAK9iyYBQXfRVbLkY",
  "key33": "3kkxGWodFux28Qu3XK6CzKdgTxdQMnchF6EP6sAdwCwhGUDU7gSeL7SXckmmWABtLHHdBo5DHiw5KtA6AEegQJiz",
  "key34": "2KKDDMGBZxDSj1ZCKFiTpAX7e1Lxhtrwr9wxjTcZT1k8RFZqVumBSE5vfLcP9bs8eEuKAicXeKtBdNDwUJ4kfhKo",
  "key35": "4cSGZ1kAAjUWxLUDbH5S42iGRr8WfuobUV42eiX3MtxjtqHVLjG1cwkHU1Yb8wnRFUxxHCWM2FhKWDMNDMQgsYdD",
  "key36": "3m8dn9UXauLdGx4j61tbKgTwj2pvbe3oFwmyUruyyA2Uiree77a3YenLQRoSQUsB2hdbuEwoTrT5Y5JNWauQFaRN",
  "key37": "4j5BkVgsnKyjt9pkcBrNy5JRkUm5dNAWcoaQ2W9p1YKkmaVxpZUH8FXJn3i96XHVVzuuH3GcYuHftnpN2wR5csyF",
  "key38": "pkzHADxwb9FDJ77xEXu4TPgin8VcRyzYqBVgJf5qYb2t5xyGs3m37TymrtxoyW2GiqFizrdP3mSXqdakPAcwpka",
  "key39": "37oRdWriyuPD5sM9aKWx2wLGtFCD2xJGvbLdJMMyZrKWdpysK2tGntFbNMf8cjxsKzgPNyvXKgAXpgoWBocAcUiF",
  "key40": "55YkqCxZQKtJhU5NZdbBgM9jN3q6Qk2atcXmQca4tvTvzddaf6CAra7ETdgnJnev16AaU46yfHEqZh69tH3C9mh6",
  "key41": "4eqfMvkmKfJPp8qW86mCCzrBgSbN33tVAyg7VhPHYUuMN3ujnuNrMyLhUwiVEuWTKExheZQsfQFA94M3WQAN69YT",
  "key42": "57B4phmLoQ9xc2B8Ecryq7gdcqcM9bDjjeYLxhoN6KEjaFZJg2eCvkzc3hs7ujuRysTEuVKyhMe4PfMrbrce4Dq9"
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
