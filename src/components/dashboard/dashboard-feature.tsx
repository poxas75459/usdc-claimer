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
    "3SSUGtwcvvhe5i1heAfqgMVbfVj8Jo8B1c7aNvJhgwUM9yzpWrv5irzCqnjkScecmTiqWhd7WMEwxKK684bc1WR8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bvGYMB7u8SxL9YCDDsPLSQudEyoqHiPvQnxvPJcZwZiFTQpFcTh4Bi4BdvRh9ns9gfJDwt3Dcc5npTwWLmJ7VzL",
  "key1": "5W3XSUiM9o3YiXCDk4NB94ozYgD8EsNnWdo2DpJVjZfVGEEV1RxL1tMuPbm2PPWygcppVBdBEvoesB7zWAnF3HY2",
  "key2": "6779LbMm4MdfcrUJ11XeicSy1Fxx5Akp3cbRo5XZDTs1MXjKD5L4h6iLu4mWPGjvvWggmUCoNxDDc2ZJP9yDtgaW",
  "key3": "DHL4wXgVCRHuo2sCd6VwUgQRSrN7he6ic3Nr9rCAswoYQUAuJewZRX9u7hFn9XAeZZFM8944tJBZ9bPeh23ur67",
  "key4": "3wwjKdQwiR1diEuKrSKUU9oZ2A6ijXy5UyqaMZJK7UCqDvUjUbJgVYqpos7L7XdU63SiUwKQbnBaE1aRzMg2oDFW",
  "key5": "2osjVGJRhJEMqS7K4hwGDhJCSCeNa14iYc15NYnQazAgi7CXD3FJ7kqqc48yRniTVFtWc6wRwQ794jm3BEcCLFyu",
  "key6": "5skMa6QWU3XBrvXZcQiaaqi9R3CkAete6dVcXfbgPmXsSE9JmCqC7f6UGV1wFJj5LrXCJ1YzzZfvHXTwURfJzMPH",
  "key7": "3785GnqFkRnCH936rGGxQgiUDTpUuyxjTo6BM3jk4pRznuFtjhzMJUak4sZaR1xv5FkwCoNCCoGZhVjM2ZEQVmkB",
  "key8": "5mG1au8TBnn6HbYtS9YFvCP6BT5DtnVMtsSHqWbGATSrM9bbXso3vjErsKHRyG3yb2jQxMLroRDNd8AY5D4vWmDM",
  "key9": "EAfXMd4kf6aLcJWaYxKzCm2uUfAR8PzyYA2uTxPsjqyFTsXAH63F4UDms7A6xzoBtZY9PNcRS1fvpFrYWsFUeD6",
  "key10": "4XR8riVRVTED1dCM6qVLBiAvh2VYDsS1PvXggpB1UtDstAH2y5SCBQJQpUVgYMjCjTrMwanBvhwz8mzWyQYemzN",
  "key11": "5WD3egqPcLZGAZiKpNpLUmwYuF298MDUswRzNiYJtQm9cS38Y1hFmtEniu39vp7htynGmBj2GCKhzH5QgQXgcxJ4",
  "key12": "3kDUHBixih1h5M6HgzFcjYTovuuXa82LbVDiR9NBtqRqXxpkpvN8QZw1GZzw1VScTbhB4Mp4d4Nf5msy979VrtBt",
  "key13": "48Y2Z4hA2tPxwibWK3iREwJasKETxD6ehkGoSZnd9yCrUcsMRhKvFpfvS4nGWSiSL2zVkb2fFqG42qEpa8YcdfgX",
  "key14": "29z4hNdfmt9VS2Vc77H55qNkXjCMA4yM7HB8evLjiD9xh1VkHah99ZwzKiZu5Rvd9qe4M3YQXRSNYncumaUQXdf8",
  "key15": "3aEEYp5Qsc12aCGQs5oG3BpaWz9aQN9Pcv4jYga73MVEwfMs2N97jAkC5hpHkBUqRr95TBLZvEHSZeBVymhGmXmx",
  "key16": "ZbxuS9wZvwArjqp5wtWAibiYf7bhP13VtiaEsWgiV5ZwYgTv6YHRnGE3ADgbRn5dz3aKe2UFwkXiCb7x4BmKm9M",
  "key17": "3zBKNiRYCrvaa2YxzWrLSRQkLsMrhfyhEdkHGZG98Uf1vF4arr3AybreiCMeUuV2QjfYACKJucTGmFBc45FyoT3o",
  "key18": "41YnwnK7chzFcuT2eiwu2rWjLhpYpHeb5N7v3mDr7ofrxrZJCc7uY56x1TozeTiZzS2vFrW5FQ5yGPB7wW9JcAV3",
  "key19": "5Q1thWjYKc6zDdxQ2SJsJgkSEfSQbYu3QYK1ju1a3aPBQQiZHWRquFoCKftXA6vDiBDmN5FzENszMuQPu6dBFpL3",
  "key20": "zZn9KmKWBLirfPKCTnXvweKjq8d2XTN3HMf3LwEJ2SGF2fx5w3F1jppDwR3S3hsGQ6HVBP5jbQhAF52KXnyCZGA",
  "key21": "3VUavqAEvhuYB8smD2NK5fG1whjNNHAFRezUGN1i7NaArpBWe4eYLVrX5eZmHUGzF7LUpP8ZQnEcfZGgJ6R4qveK",
  "key22": "3qnqGwYBUpfVUrLdx2bzkCoigGtStaFQ3f4SCxcs6uswxp86oDnYi6ohKfSUfcw5NTS83XeeXox6rzVb64rxCCBN",
  "key23": "4aLwm4S4PFZ5ehRMbZ8Ff83qmGHpLw8gBBvd89CG7jnqhz4viPmPeSsgBrawC1uczGAQ7RmWF1osM8jPRVXYyy3Q",
  "key24": "5VT3PHj8nD71CSdJpUDaVy5DPEzXUWHYtf2brMYKHBDD9xP3XFuqN5B13WU1B4NciNPkb4NsR2Kut4QeSVYGArUU",
  "key25": "4DK572RzbX7Etrn2DKVd4S5c2LeRGCuEfPs4XWfa9n2UwEgR5fhJ45hCqifqVFD5UL1fqFhJ5E7FL25Zi12Jj8Tv",
  "key26": "5kFqXsVgw9S7MmdriTCuMUmcPqqMRrEVp4NXC5QqikAp7KbVjm2M1uAi2jsErSgSc9u2tdzZL6Ri64ADSzDKXbMi",
  "key27": "3BFKXcVpAW6RogCyKMBZHFJVbsV822YBej2SaApiWrwafM9GZJtNDe6uWZAX63uMGdtoh2ZBrEHrqV6qTKV3oTX5",
  "key28": "2nkMQhF8jqJK9S7a4n1FMLBSR8bQRVAM1pn8qdxA2MJdCyRW2eGT8uvcmYBwYivQSZUDXoCpM1nnMLk5p2CwZKqE",
  "key29": "QksRt4u6hS7gyEPXBFeJCtG6p4rh1JUefHZBaJmweXyED1WxhJH86kGxASq9KcHbvGoXoQvNAbjx1dwMmYxy2dJ",
  "key30": "27pLMrB229T9YEVZG96qJzVg5WcPf6DxgHWBNc16cKSUmyftpvToAWxwjg4PhV2ydzg7r8C3VUN1rYUTUBjdKqKa",
  "key31": "4cELBoaUxidaK98HQsAmRWjKaYHeECoSiDw1Ds6oJmz8D6BXLGoqGjagdPbTQPamKtWvQbA5xyLv5ZgA5aXKQRUF",
  "key32": "5rjv8fLvPAkkitwGSpuVRtLsDUybNKNzZRd3Y9S7SHbc9AH5trSzQgm4bBaBgpMhKxmAQLmEMEjmdM8nRMp31Dgo",
  "key33": "5BUSdiDFsP3MHLdkoQbKaKo1AxCyVstiMjkyPpX4hjCNS7xzSeBbWUddgtTdaHscirS9mkr3WuqeEsGzHD7JRmQy",
  "key34": "5uiRotD87BiAuCQXaLzw8a7WQ13ps7W2cwuGufzeiPEJNQVnsK8ydP7xTQynEHDTzUQDddSVaLV8bjqTR2t3PsDk",
  "key35": "9YG4SZGfoFgctyR1KQJVpfQsvEm2nMWtTSn3ZFPfufKMZuMLLJn3Q9mrnVmLrbXcZD2e4RmUuep1zzN64yZ7Zwo",
  "key36": "3FXcxTwFxU3wJqrxdZ3TXTwxqevMHikfqzE7jxb9FYWyPxeFsKD9JKWjycdb28GPkDmj8aVGwyNEqeWtmY1fW3PE",
  "key37": "4ybc4DnC9r8QHmwJNYPnqmpvLDnwsAP52jcqKGs45utYks49PgshwmGf4sXM5CtsnxXrGawR41wuU9BnhfqG3ExV",
  "key38": "31G5qD7meibCfeh1HgQcbFU7RBSTqxoDqDSUr2R5M6gWCrEdt1nd9njSJhgxMRzeBsCVyvtZBrfBv7XMre753Roy",
  "key39": "3hwghjjxWs5Fsd3QBCQCNGzH2Uh7KskKiA1ur1B7a9da5LGEqq5pEF5hnCZEtF2wwEZhnCk7agZ94v3MAQVhqnNs",
  "key40": "4ssXfvjyDjz7c5FPU1peeyjmaV9AYqW3DukFCeEWDwZFckyHxBLHNAtjUv1xz48v1LF5x4BGdHPHmjArtpnWb2VN",
  "key41": "3kRwK4wuS5uWnKrmUT3QewwWktuZCYo4zEdEkFUDcio2uee28rK72wZMf46YMPpZtQUCKQsxHGdwv6VtzAm5cz3X"
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
