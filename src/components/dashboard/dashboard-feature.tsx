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
    "2WGErV1jNRzmJVBsiRRmBkvGTXXhsw6fBzjBcGGxJ9gKMqF3u85DGLRk7qTfUnXRs4ssfeWuem3cAi72PCdupCmf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22rKXahETZdFhDPAPPKxqUnT8f2YTrkrcRFEWSARRCxciffkRbtvwaQTfBDZgVqsVoKbAca8rTuWJY1iSVzBJb4f",
  "key1": "5ukTWkazspYQoiPx3PGfFg9Gq6S3mKdtwBYoutDrvo52jKKx4EvY5nyNPMcN7abL9bRfYGwJuDCsYwj3hhaxMvmU",
  "key2": "54N9gbErE8KMpeTFbLddZUoAry5d96AxXiHeLZVanaPrpSvnuiAH2vKue6VxeyGsMATf1svNLBAagNHLkxngKDsz",
  "key3": "5eP9YWKAh4zc5pfhfbkyUFycAyCLkxDbviP8oJUks71QotWXHwPbfPXTSDe4F5curGGqUHwbVsyvDXM6EpZiVgVg",
  "key4": "25egYheQxHDrw6Rj2M6TPUyGhZK4wT1ec6C9SWueJCDZxjtm341K3qJSYR5pCKoArHsi3kqbJ952jPEeFqsqKzmT",
  "key5": "3ST41HTCYpdvUs2yNRyca13ScF1o5AvFRQKuzuBT3SQMU5xVcuq4QpBAJzdTKZNrjTtPWDnP1rD9YyjA6zBtQ6J5",
  "key6": "2ZaFFJ3Jfyoc7bYpUQ1MpvRg5YSoFs3Hk81eCt5HQxnZpjr2eoRjDJ3TJXcsduSwHdQT6RpxxY4E5P5woi8kP5V5",
  "key7": "39Cer24BxRayNGFG3X81GDPu3JGvSS2eVCdBKdDRkSUDQvSow39ymSSRLThiNs1oX7o18TrfAoFDiJc5X2ZiwoJx",
  "key8": "cDBRxYetRust9cye5WkEgXiDZxfQ3zYEx2n4xJhLsV5thfz6VyqaFtiXDp6N8SdQ8MQvNrzf3FqbYQmUqhNfw89",
  "key9": "5eWkEWx6dznJMVnQX7VtsbBd7wngJWnVzgFANNFhnere1K8qe9wxm2e8XVjtxY7fKBF8fUKUDt2T6VCCxZ5SqNHF",
  "key10": "5rKytDixvPstbYTgKjVxgGnXz9HSCSWYtP69bWo1mKAiGhR37y5yoiySxfcBmMh196a4frJ3YvcqAMXKM79w5xzp",
  "key11": "38DdEgvVdugSeBW8j37CqvcSAzCJ6VdDtpzfiWUhEPTD2osoi8MtQydDfJn1eh7Wks8NdY9VPE4HsxW74eotfEmq",
  "key12": "49nGzjqhRLRdaG937LRFzxsbtZ12EBp47Bnz5WLuzoc8KN64t7dafaG8kbyWHGWMWxSxmCJwrjwkmEDMjKMd4Dzu",
  "key13": "2TgRdebBg4fu2DGj9u78t8nVKAHDCatiDr58krZjW6rBV6qSiwGuspLWTNtkW7mvvv4SMt1YivWS7VP4tuqa8qvz",
  "key14": "3DEBtALBi5RtpjEwbaTnANeJGXA9wfxenvAmA4WJy3evGDePpXnbeVBzAr4apicUucLPpg5axyo6GgQ8HgExMHTa",
  "key15": "kgb8U5btY1Gb5axJR75NusqBVBifCb5ubbsDgvbhnAPMcfa2CQJTzbxqm6Z3BdHWxzhRv7X75qHGdYtEUHeNZHN",
  "key16": "3Zz14dx1Wz7aA4aHmNAZWNDCZtxcmBpqXBZ79mECRjtHWnCqnYFD4HpX7wjNMDrNn3s21hdCtrCxc2Tqayf1BgvE",
  "key17": "33Ywy1EaZWnFWrnRHdAQRU8Mtyo25yxmApytpXfNPwoUu8QBC4k9BJdWn1HskRSSUSNPcNN5ivmwp3zhovd3o7qs",
  "key18": "K2frZ3VFm5asi6bQWF8tJoLY8uCwA4xpUmRcEjhDRf3mjoBq45goXq6RXFCwVtpxwh1YDzFQ93o1cgxf5E5tZgJ",
  "key19": "5DgnXWQRZ3oBYLW2MgyN4bUJYbCpnSyxPuAzFHk6kTYKGEcZRBc6GG4H9b3Lw6GXacmCPDhsDaGH8uCFbNLPvE6g",
  "key20": "2BRFHmKe1rHsVUxxgCMXqyRyh12BkJbMNCgucAVgm8qFQKjSHeHbgv3wvf72ZC59VmSLN171gno39Q1LVVW9fA1H",
  "key21": "SfAXn1mNL2CccP9nk8g42d7p4C6Y2SQac4KEvD3prN3oYjifJcmZBajZ5T5NHudhhWV35dAxcwWDSWJD1Zojbun",
  "key22": "mv3tLNUsNcDgT8WfB5RPp7ZrX1WxodTouTyzhY97rY3dCUoF9rz1SAQeuu5MwxGBWcb8iwpiihscNUB9oBikmZT",
  "key23": "2EPRj8JovAAsX13d8Yizk1aEpeWz4JACbiGxuC3CiCUiuajWSVR6aBaLZX8bUekSt3RmfAyft8SEwkEiLt792UEm",
  "key24": "2Z4q3LVQRG1jEGTE2bkjGgNHzAjxdUc7LGY7pyG7TvPcATs4fj5vziH1VdreYFyYesPLEjGeracMeMWqcDnqc6XP",
  "key25": "2cLJ7NYs3LGFssRPbHMpDgTvSLA9S2tNERXryKHevBCV3d4N59irsPtVceMdFXt72sm6f8y9J1GBWNgdscaTQwC",
  "key26": "5hXi4akqEDRs3HVf51Cis95Eo2myrUdLGF7g3VPyS6TYcEgDRgntEHxTidToB27FAa99BegDC2fL4hfCy4wjpZ9t",
  "key27": "2hJkjFZoSNw7ZsqTm9dNQyvt7Y92kanacNEmbhxnwgo9GpR3FfSq3tAn76xMFkkenPDPUKnHpRw3sjuX7KzNqzNA",
  "key28": "guWRe1vWDRoEwyorTcMUNYTa36vU3jfxseDYU9Pw4EseHDQoRxHH4y3dP6xa3w4DYsw8VSLeMUz6GFuhC4z54qS",
  "key29": "2fYv1jiJ71KM4MADvAPWTbVUFQTyGCkkWGPibaboyuQYqow5AdjbG8ifWqgYjCQcrjuXFXAEQbqKrx1u6qCmNf7q",
  "key30": "3phYnArCdN1PZm1TQ8a2G5faFvm5U23ZraChjiw4sJF82yUN2VA6yKYC7xJ3bnQRvEomvAWzAQyiDJ1hG7tY8Sbu",
  "key31": "2qsaYPrZZ2msakphM2kCdKk66EwbnpmvFdh6pUwJ7PDjVji88dmqM3Gngz8AoBhNxkvKvE6WoJNrHWoaG6kLmhyY",
  "key32": "2sHHN7KTtZsxxiJ2vKR6Eo2iw9QX9zVyrpXvgKeHnTZFMwtau26UK2UjoRs86vrzRhSBr3BmaD14vx7ShUjpzkJg",
  "key33": "56imRLdJQEmeez5CoMNaof4MCfHzdbqq7eeT1xfoXTnsjQmzZLaN9eiYJG9euA7vk3NHWPzi1NyFDPHAiFocVYjT",
  "key34": "5yMFQT5PqXBJCoccGhSQ58CihKq1hkbjaPZxcyhguZ42c4ETpFpH6FijNoXpL2RUFADnUA5FhzLSmRtYSeehj2qx",
  "key35": "3By7M9iDxybYLgPrBHGStmmGLrkVzWbRvrYShwLu8WQWNippCyqtUb3FNic8DDmGXEutVrPqr3DWiGLWeUMSAa8n",
  "key36": "5tTNXeqPuajTuQaE94tYbpiyKiBEHJRYTg3Ekhgt9iMb5Q3GpaLpbshoRnJHgDtEtiRakTvKUHY2Er3cVxTvUfkK",
  "key37": "HLfDtYQUxrkZDiBgdtiMXPQcMqC45vXnSA3gpTW2ym5EcKGG2u5mMx4Eir24f7e1aqQtMhvztm6JDs9Pa1389t9",
  "key38": "2ab72aU1RVgBcnFZJQGf33i7mbd7F14wY9sDBKUUNFHzTgs7CYVZtW7FST8tN1sTqftG5Yk8razxqxYU9ks5Vybe",
  "key39": "3aXyXqbsDxyx95dbmbJ6E42fS7dVGFJhvtYeBsQcGsVNvSA1hCERasB3ajvsLP6bS7faXHZEg96M4o8Db8TewPqv",
  "key40": "4RcvhZFE1cEcCX6ujy8q3mWNf7nSvtWvW267uxj1hzqHvLZJfYJQ64bjxXEVQHUE7njaUqpNWotjEfQcZME7wvCJ",
  "key41": "19g4QMmdwcTYTMzaTnP76a5eHr7QQrDnCsHta25Ksngm67RhDiEdfdNZUYa75gtbsh3prg1UjKUPFBjvs4P4ASt",
  "key42": "5fok31L4hzDgA2o8RM62NPYAPf9Yvk1FANsWJCJFkUC9bpdgPPskkxNEDkpiLYa2Mc19ExGZ7ycpFemwTrw232gC",
  "key43": "42KXRTXcdr4X3kGRzfnd8NHbvmrebKPaE1EKi8CnnSVTaroaNV2KDUBDnT6eTdQaxxqjx3xmgNaeqeBKgsTdU3G7",
  "key44": "61iGFVzWpAcdVMik1KtZhuJFfRPDp8WCQF3X73DWhMvbzzvTaXekt1pyCDGnZbbSRmoJiA7EJcNvhEMGm58PobYc",
  "key45": "2ggJKs2fEvnbQqAJYWJnu3M1hN7NdHQPH2s6C4T27Pn5LzGps1J6z2N29u7a1JG1EJ4PfJwSbQsojAQ9GAjBv9Ed"
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
