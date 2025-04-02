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
    "d6N5ywAd2Wdggx5FcZtAvbNkshpzm7DikDuUaEzs85LPCPD9sxwfmNyEPPivgV8bS13Z291R4mdugUnj7UJfhhc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gU9kVGdBneCg3ddHgkrA2bp27Tz9sfZwrsjYSqf7xwQG5jromeq62ePLLFQGTpnCNU7tq9LELnc1dgPBm7SNzsB",
  "key1": "5kDcpL1gPYkdjstnZvzFt6m6frRzDiWYqinW1qr18R3N4goRWFTeRZvRoQFUHye9Z2HXeewn6nuzsjrthZYqknAB",
  "key2": "4QDaRamWzLKuzjf5Y4WXQoymBHa2WWHRHp97Ck9sBz4KmW4BSnyzdJ3FhrFvcodyLjBsHufx9jpZCYMvbTnCY2aC",
  "key3": "2AYMUVtngSphsz5FCK244unfNByhx7kc76XTdY58zVQvC71ojj5ySUphTXyUxbnEG76SkxuoKg1hYw3UBvhHzFvX",
  "key4": "AtQiakffPWF4Grknm4MpoUvLgRtWUoiwNTQgyrdqHNJ8dBC8G5hRr1XH41BBEwMCj4WEymjZoG2gSic9yurGrhC",
  "key5": "3doK3nADhDWLPqRU46qiEmoSEScXwC65HCCcrVdBCzN1R4Zj6shK15Uxx6Hvh38Fyy2g6i7JBY2WvgSsM3CJ1j8p",
  "key6": "4eWohWyvo6jqmEbDAb9F55ZCuaMCwamnpZfR2HvMKvuiZrmyiPZpnHM7jFCdEPScY8ZCkxMQNGUJyUyX3tPzXFxL",
  "key7": "2dV8n5EctgufhQb3cjaCACXh3R57NuqALTYpDzoGF8mbsGKmz5BQ71H9H3C87PKKtFiw3n3ZvFxsGZQKQPJYJrSd",
  "key8": "3uCZNKkA8mfW1cSrUby3gyPXMmXAdxVyQTu5216T8aY49HydHUAyfa3mUsQtFiGaV2jgbd7LVHUS8YL2E4teZnhq",
  "key9": "6oC57mhBhFbsLw8ikW2R2sNxrW4zFqzmhbcyiEtu2t8y7W3cD5apAzazLPQeCf1MjV6CNAUEwbkyC6EPqwaD6gK",
  "key10": "5Z1VZQue9GspsXDxfqRYqU2V5e8rVKnQ9cVJiQnHyWrL2zyAVh6Zado72TpYHUxAP3aUsPSatjQyQuQGBpF84T69",
  "key11": "wfRvhyGEnmGfc1T4SJfZeTXjSGBg3grWzpxfEVVU3EFQs8Gwcg32584ThUR6CB5cYJc1wJHQMvPeSYj2Vd5i1Ei",
  "key12": "3cDDjaD3o44yuLu4oB65azExNJbjcw9BbVPYb3uzonHDBMDGF5VB8kfT6gDQ4V6a9KcTaFhZNNsq5uhH3xNFxCfo",
  "key13": "57vUfcKqUpbiwEyKTPkcx12fVJz61QbrxdLsmXwkDHsvQPdeFBqaBY4X1qwz6EfVJ6u4i3g2Evwtk1NAxFLhi3qX",
  "key14": "mQfmUFYmSzPrmhP9Yd14YsQjL1EuQmyuK1XQHMVDDsTXp89wT3dts9CUbGDvxikJ52Q4dYCUZ5dW2fEewYkgdLj",
  "key15": "3PQk9koYNb4ZiFYYUo7mEh7Y7XAMir23Qc2sd17tQLHHmApvDMVTtiTYcFaPpTBUruh7Gst7oWijYyyPBkivyWYQ",
  "key16": "65RtukGJdDSg6vUcstvvCv2W8fmYXR6LRhsx9A9TX4UsSvM9daJg18BGkUXE6o1SSKAmA4NDNbMvHS8JVz8gCXq9",
  "key17": "4NCfuzjkMFTkwnmomGyYakR1EjYkJmpTwfmEQRPSJzTomXa641b6d8635Y73kyr3LL1Xpwdf4UTkbqfLkviYSwLd",
  "key18": "UNFvCZANL1Y51W4JWBU2HRtC9x9puHKptEtWUMhkw1JvrJwnfoJQGrRNaj3ev5YQ8BYqBmv8yaJeUgB9VprXsvn",
  "key19": "rDusgb7srSRnojASwBut7DXVmLHAgPVh3hmPZammC7qfwZeGoAmf8mukqXrHUQcuoxcm5uDY3UQYkh8Dbupga9D",
  "key20": "vdWVDQGDDs94rALevuovB778SSj6Yct3Q5PjA3JmwUx4dW8xZP4vFQpEwqJ36SteMkaAe3dHEYmT6YVwpgSPYVB",
  "key21": "3woHvdZq5MYoFYqxFHcGjpxfLTvZFoRqfDPXiTk4z42ZqhK8saxfCWq9ZpEurqx2B8yNYbWv1eJrWq783zjuDJgw",
  "key22": "4H4ffJHAPzhTzMjzmhK1z3xGAggdeFgRejhwULieizP4d71kL6Kinf3KPdx42ozxwoJnU6MAUDCjZYZXpr5zEnLm",
  "key23": "3Z4PifkaADQyg7bSz42VntgFa4EYtKYZYzY7K1AzBL2g3wDsbDTva6qZTQxDTvwT1uxkmcX161H5pq8rYZFgfdm5",
  "key24": "4Ze4xDbsXzQz2reLoydaWm6S5ZaGf6m9dJmfH7PsYukZHgkEQSbvdq1N2vLtpCLGWFtTKFfjrgrTdcTW33Fx3Cwx",
  "key25": "o78LTAaAQQpGuJqCvPYrgLcXzeieojBMizKviAimWacqYUgc9sSSehcdDrg9CAzKjakXUMckxGj6twA312jG1Rn",
  "key26": "5ZxPJQKfiMbzyMV5cN3XDUcg2yEhwVWY73WDmLh2StR4M8wj545U1MpMWWLGBjrWYdQGMSuV8x6kYRH7sC82X3UX",
  "key27": "2aF6BdCAohDTm9EaRM41txkeaWfPbZwLhRi3ayajiGcb19nVjmy6A4cAmqWSTepJ2RPgWDG6FMxadA6k4vhkuMuP",
  "key28": "23v2WN3Jvq2XZxxdBMnmoqnMCqzve71pb1jptXgiXVHY9PLkQ5KS1UC5g8UmCn9Yc8St8E2vBufzjYR6nYoC13ik",
  "key29": "C6AqG1R3fyoU99cCkg3UfJDtG3Xah1egvNRFBdNwe7Qhx86oSSrUJeZ2WthaG6u7NLXRcbhGCdjzSRtJdP8eDEz",
  "key30": "5aMoaBV88StuAeaRMujuc5jQ9Mas67xcMCRFDhe8MkkFCWKom55uxhccfwWtwkSHPufUzPt3H9usHYJzsTv9SAFZ",
  "key31": "5cojUpT5aEVu3saeKU9hNNvzyXwkKSvkuGwMteZFPqizHHJXxEGEHQ6XEAAG4eJtTC2wjNKYcEcnyBVcBEearwcY",
  "key32": "vkKGVYJ3WzyUo3YjCb7WYRwH5Hphe8QcuxpuXsftMPFZaWy7CE71E3wgqCfeo3d8KCsGseR76MG8592u1538pZL",
  "key33": "5FZViULs15QPVfPzUgn6gu5jz9uZWBFJi1hQ8VtGBAT72ytYsNora15rEgWHToptMrjH8TtnbDofHroV7Lqh7QDd",
  "key34": "RJEA9XmbQaCucGejutauJaC6EaKfkBoQFt8qJh1uNTRzSyQCt3Yat2waTM37YFZJAsWpNnTUewE8pAUJNxKqczd",
  "key35": "2oX6KcD4cEFFwwPpXf6SpaZWib2fVyzVYZyNdNmczi23RqxQpGxnbj25HN9h4eYdTaErnrz9qpXbtBgioRsxxq72",
  "key36": "2WeQ9FEuzQqAnnuSU95kHBMJtk1RRLBA15LJsCvryYW1QcxKhmS13oCukgTXA8C1NwFCczRyFf79hPfmyygsFW23",
  "key37": "2dAE4d1oTbvTxhLGaWRH5yQGWn6NjraPXdtMEtzhWCZEdTfq8iRGDJYquyoLKR3v42K8GQkWhKkS33i9n5x1RBFA",
  "key38": "5Xx3i6rS6oophHoWqMgRt8JLwq2PxtVZzeqZVZpWg2UXUpXeFjnQe6fqkr7eZ8FYcj3SSLAGSiHkDEF3DdZU6Gor",
  "key39": "2FCCNfTBDzD3QvSZHPMXCwewa8qy6KwjgQ735LSs4ZvkZokFgiYAsZukhV1nCzRngppmD6MmDamMsSCvn4JrqiER",
  "key40": "2Fvr4yvPdwLVn1brFoGzYF35cPGT1Ctv4tvFA3XmaRq2u9iQ6oCnjSJvm78QYVevQ2sf7vsRKnJcYTKwZ2vynGU9",
  "key41": "5a1SseAeKP7bSz9yitj4jQjSzSXoWBgKwPPyFhG17fHRvivjBnnDXvpi3JDpQvB2RHPKqG8W4q1fJfLYQfsyVGsu",
  "key42": "2JHrfW6v8oT9HeYCrUFDLK9ByZN3naoAm7yQuVta7mpcFoNAiJNK1a2a4bcJGQLyQBzFiPojP7i6DqU3GaKjabJf",
  "key43": "d9aVkpzYgW9eGPjQQjXB7mmG5BGBPuSoxHmqDmWe4vkzHbvktnMUW636rwu51HWX9zLeApH1wS8Yd6PfemDGEbH",
  "key44": "5J9KPwGRXwpRE9EThp71qHSFgi4ExDnt44Rhc8oXxvqAepgeDPxjpYeqsyq5bH8NYuVTHX465aDVRE5azvhuTjk1",
  "key45": "2FxnXTjjsPqWE8wMp5be5BWxHKs6TRBPmUrq52GY244aGaEtNav2wKb2rxN9bp4UwsFwSUhFj9DERgtEPojstS5R",
  "key46": "2SsKMzRoBs5HaMMmsgpiRGBVz22F73vexsp7sA8ss1z6XVVkdoTrHZT6WgJgsqgBtLrKviPA9WuNX7671rVe6RP1",
  "key47": "4oBnQyFVwo22EGUAcno7TtKL6jL3kqBN86M5AHKbJP5j73nRt8W6Yqk3zfQ9QRRu1Me3m2biiTiMXAn5e5uVF8GH"
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
