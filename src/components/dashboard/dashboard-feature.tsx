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
    "42w4yJshciNnr7LeKW3zBy9PZhA2gW944xCwE7VaiPPyU7HJY2rZQh6tx7hm8xDrr16NTowDJxbn5neek9okCTdN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E8HACgg7PKnsrn8dUn3YwWWrNMfiLHVDNQH65Q21ujntPazYDUToj7fMAWveeeQcSHfVRD9qzZq96e34yfAGGUq",
  "key1": "3kx2vbFtaKaFT2apxMZFzYou6PtvbuP3Sr1psLaD5idmevKGc7JMZc8Njqkqkv8RzfMNrB6jhy6yeWobdMgQLATL",
  "key2": "4YupFsh8MP9DMYQKCtHme2A5LLFaumLK3ZrnKNSEAHb4YDKTR4rSjHm5pY6YhsfzznEXWQTYWTqJdGBkB1REeLcN",
  "key3": "bdtQNWKu85gBeiQfThaZCQzxEZ5h356mEV5zSdRHeQcUbWp6hKfWub6zFfvz5oXN3dZ7GDTrCDpQn5qezgust5R",
  "key4": "5jeKq2hip1iRvTHLV8WUEU1QSaMJmscNP59YmWj6ozCA23HJomT3JgMptbUkTBcrXtDJctW8fbatWmSzak8doGaB",
  "key5": "4EFnyFbKgYzNbLMgu62p8et1ZuQm8dMdSEiAJPTt5ymwUy1dvRTnkZ1PEU2Ax3RKhu1AhP9SwXZ1Q4oNWWQYfkwR",
  "key6": "2EALvaWbYV7yX8vbsuyWi62RJGsWpdiHUFwmgiaUEtw7AMvDus7WeqLza7KPic1wRGScG3wgGseKhRo5CkF61FPW",
  "key7": "4qohjFeRPCtGpCCCRHa1udtfo2R79d7xLjMPcNFmtzyA7oeSxTgTBo5E5GaEcApd5TjF1ruSNUbN3SnvUrF7Das7",
  "key8": "atQ2qbFpdJcLVnD5ehDvYLsMKkhyZ2efg1D4iAiqyFFNTgt1qBa8wKKAHSFndFoAKrL8ojr44RsyKQ91fCiwG5e",
  "key9": "EJGL49QYkQ752P4Hc8ThqHMmCbRgH344zedKJDfmrxNLwF8SUoZjS7vBPNwRx5nFHtQvmocwGkQjjUVucGUzeNt",
  "key10": "61RZqgmujPmSXpeLsxqesJFn3DyMRYdsTFY2qBwywDvTErnPobyxzaBbghzQrDQB4iXMcBxzaoLGXQqAKMsQ3NBH",
  "key11": "7K6AAmaGnJU4ac4iF1oqTKZmtpw2Np63GQhED7L66ZHrCU2RoDygW9dcVXUmxTHuuV8j53rnbiiLDxDwuCyWVqS",
  "key12": "5LAY3poiZXUPiDA8ab8sj4WHp76yNBPMLf4Ro7r4ujR3vqPd6JiuPfuLraCLLwUVhTrbQnsyZRhEJvbNaBRJHDa7",
  "key13": "4eWmM6ap8C1riFUjAitAz4AFD8DhdGpdfYFA6eqV2cmmQyAa1pKqTybT7LhRsp19TJfaRobpLiPSquGhuKinDCz3",
  "key14": "4LwkWF3J2M47eHqu4v1X7HNL7RZqg49L5YdqxRv3m4eStB6j48L4hdpicX3MR7UhHguFn8REHgqoHEoHG1ygQcCP",
  "key15": "5Qgo2UmLJFbJTeNpertzhFcMMYDFXvdMZRShQvVFq4nnqc29QA3MSyAV1WLw7wBySFf7o9VoK3ka9SybfT6WS5Zp",
  "key16": "51PFEXwbaFuv43gxbHihG75ABpTuhvUDDXfC3KGAu2Gfv85eztUZQqBQLzKiSv47KMgYhj2Vvwe33mhUfbXCC55Z",
  "key17": "8dKM7sQrQL26w5mR7HWako6FmgsmkZEcTW8pt6R8k9ezv8MH6AGM5mRcvH255caxfqqkNTMrDzLjGygYihXWqzL",
  "key18": "5y7vZTnnWh7RYBnua7g3eHFyjWvG5c1Vb7JgfduiozdcLm7P7nFPxYZJ6AnBLgwGNpZFe7jpejqLneYgvfz9M59u",
  "key19": "416S1ShFNUmVkBxrTbGyJuni7R526dkar7w3715zGVvRke4SJMVQtFi9qNBBcHdSHZYE2TYwko9LWYWzfPe6YG4S",
  "key20": "3jzvQBu5BvWJU5TAgBErSTXZUes1cz1fVu3aUCqpcWjUyrtBbgmoUReqGtPsrtYzhTT8oEGKZSctmEQup9JWY9pC",
  "key21": "5K5GB6Ek3mdHvnSMwpA8mdsRUkuVj3HiymtgN51w3jbrcEQ8xDZhDL8Bcb9AXsqF81aYAs1pf4PiRBNit2cCk1kf",
  "key22": "3kNYqoSvqBYY9dJdcHq1nhqfgdPfXGjW5CVM7rEiGyE5KyWAk1GRv9RZ8m9pUj427TCrATSNf2DHVrTQXdcejuK4",
  "key23": "51T2hnVphGrtKHHhWjvbCYV36ieBr7zZLRDbwApBmyUEeDXYsE2z9mScSyDFFwegdof2wvHJNcWBqjercfP5u9Mg",
  "key24": "4AWatEu2i7VS3PmhkZ3CUYhTKDJCoiyeZm9Z2XxNzSmV1VTrvKGQc2ruqZYvvtVYfTUjeGTGWnybJ745ZWKw3g9L",
  "key25": "5C1o4KLXo1rPoabwrWRJCUnnrmeS9GkjYL9bfgk4nv3C2Ec1aj2yPqBnbK2gZtn6j7d3sGc6j2uBdTqLyDCyyw7o",
  "key26": "2WozG9E2DqxLWzuDjGvjtwQkGytczE64GXEF96X7UgY4Sh9oPVQZxJ5EN8L92DA2z7NroxW6TY5EaJxmH2DUzmjV",
  "key27": "4xgKszoxvm84JkznyCC8cMdh14xwwCRwxtJmTmFR2GhcN22ed1HskXB7aZxrT4uqWHfWqqXHtmWV5D8Ki8xTcP8j",
  "key28": "CF1WCPKyAeFdJ8ZJkio51mQTN2het1CCLxVNk4dzRfo3nYajTK59JCKb1DGYv2mRLgsmAc7zLkFeQ7CC1RU1UpQ",
  "key29": "2GCAUR8W4G3Ceo5qe7cswNp2kx7Ke3B383Sz2bWfGDysUakudJWcFkowWAxmMvDcfESvC59V2gxSJ8rGT8s5Zfg1",
  "key30": "295JxEyxbeZDvvmAaoTaFriwH1Z5MX6dxxyKZqAC3W9yr3dGkVPwCsisxULwipv3eNLxt7gTEsi2VriVDcERgQdB",
  "key31": "5GU2HravFYFVwYy1CZ4WwWsAsTDmHM88EHY15LH9cyaHisSu5PEW3MUqu37EYTCubRhbJFyB7E4PAFsUD6Bv5NFG",
  "key32": "31hm9cSj1KWNxXL716eC82n6LvyktvWv6xKVmAWVpmVz7SCbKf8ZeoKi4kXgyykxH8okNGurhzVJD3hasVMLV7WT",
  "key33": "46PMCKraAfuKLpqnXDL6u6bWyMYyYn97bRpxJWSxmYLcukaYnsPqw2hotSt8RYGX5HsYCF7HxPeNUtP7hPSo1ED",
  "key34": "32j1VAD3PwK95z29TeUfDuk55BwKvoqCHC3MK5iog3skyP4QmyWN86TRXxsqxeTPgbQgBG71Zk9waT6Tb1gF45se",
  "key35": "2TBhBmtjvK3My4AHtsCdXaCvG1ggZHRnQUgYTVQfzczbwkn58R8zzkBQ4ANk9bq3iE1QFwdH5PWzUAUESgpz4iMq",
  "key36": "4u7dnV3wCGsrPyeEuuhB5CW9VseBhzgexftxh584teSmbqcbr2Pr1obfHu24k6EDHhRf9T648M1HgYvoQ1GxScKs",
  "key37": "2Xj3fWYys8oh4WuyNXsoQbnXVXTSySnQbEFdCHVvaFMxQrgEaUak9Dd1nTzrhoqTQhygkyZCMnWebwEgorzV7FSs",
  "key38": "2RAqSXh4if6fxu6mnNhSWXpSXraBEMNeKc6iTzqv3uS6fNWtdvnRxKrMfNbToXyA2cfEt9KeU7P13YJfJf54q3kM",
  "key39": "QMXDiVPiRbbjPS41m9zP9jac1wRSagcjnvrXuRW6HvCJLLLDi6cNcEwCQhXCnDRsiPrcJ7xBheHFiHuHmCtjsWS",
  "key40": "2oX1dxnYZvS3Cpr9un7ZHrF6t6SYL72HdCwDF7fPMiWGjRzJjdqwxVzPE4qZhd3s5pBFxdJkoLLGCU2ApDUQ6VmU",
  "key41": "4G9fbNHKGJWEFzC7J4joMSpMfWji28K13YLJmWjoi1UCce5prfETv4evoEgNqerLrVNcg1vb8Da4PtwjTMVtHLKv",
  "key42": "4AjXTUfBKuQsi2Qt5wpggBLsNnLcc6Tdf4iNWAy3kb9ED6XN7uLeuvGqX5bCLuUM3xgohNEt4ACzTUPgS6nUf8cQ",
  "key43": "TsaYwfoC9ZZopTepJBoEZVZVnHcdV1tgzfyPERzUcZfJShEWCFJJTouRaeG8Qyma1rVdkcvobP7xf71a1sDxrBY",
  "key44": "2tUxFwHFywiaeBjpukfAhoBURGp3B5RzUgts1YYzanHEYA3xMa3fEzTjZvVeuniDR3A7gLgJb68ybxyc7WWWFbrj",
  "key45": "zVZUsNeSP7gWBzVLEiMYfTnvuKe73aDPBmonkwKSPUn5CqeEnQSsfd1RNUakYiR3hUEAVjFB7qyGvZernWQVnf2"
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
