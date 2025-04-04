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
    "2E5uWxGU6HDB3X7AGSbmuaF9n5t3th87JwCVkoKSQ5awu8157xTpmLs7Jg3RvEni1uSisaFU5AFJRoHhZnJZ8RKg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ahjewLfowquES8aBYTvVeB7M8jDcwAkdDneunsZd1kwaZ1mE2E9gHM2ksP1PJVwG1KqNUgs8ZtcafcbDjzHRTLE",
  "key1": "4B2GECL6EBdiw4LYXa5Txqu2U593E6fdNiEHUKexQW1u3eUPKBmSyqxtpc1eSd35YmukALauk81M7GtzoQQbw3be",
  "key2": "486fm86F7xMC26wKFRRonkG6NXzhAPoxRDf7rwuAJ3EeHeSsWL4Fs6saEuiZkrscv9EGwBK82Gqj5JrzKDwMvDXc",
  "key3": "449knpwd1Uim5ELDdTW4wfDWQNdGYZZcL6vvdH8GLCDjkGfgYaAXUVXHxApGBrZeE9wKKqrBTKT3JNew4QwNsueb",
  "key4": "4YgqUoCmrTmWfzZ4JVw74rXh2JAeNo5LSYWmB8W7z6toKNzGSGXFZaea3ZL1qMLZK6e5QzALhrN2BJ7Vz1wi52A1",
  "key5": "2KpcRi17at79aodQapqiZPQjaKr4RE3BjAUhJg6DmhUmJEjuM8ChJe3JhRUkPWnkpQCnzFcmsg8iTxef7uaEdyJB",
  "key6": "28qjNz5Q5Gz69qzGgQr7g2MfrgstNafu2wcrbZfDBFKYPsPH2NYi46cE5oGKriwAkGb35uDF7Nbo3frymx75rsv8",
  "key7": "3Yj1h6KEqovG88qg3QBUYELLGHgEQEQzv9wsnsVq1EP7giFZUxUhuNHXhH1SkoyKRVtZJpyREi8HcgcmeJsByGgV",
  "key8": "182LDBcEswSCKd7LzaN2X3ut4kA2Aiv78noAtQZvBBNUeinEiCUBXuWxvh6nDbTciFXWTeuCyFi24Ms6moTfGa4",
  "key9": "5PF3BjaTpprkKeRYqBxkm9bzYL2uNpxoKnMojaMZ9LyGbyVVvRAtAmHskm8v7A4kEe2GcLJ4YpaTst5x9gPVk5e3",
  "key10": "3X862uvvcATyGWeJCLyo7yiQuc16JkByzki7BXnpe8h1Jk8TnenGW45ywKYcpPjc4A9wSYiipNYjFM4HXwRAFGyQ",
  "key11": "4Gudwt7QPqzrzoeX5S6Vkak1HF9m3rRB6vfcnPHPcU6hkui1oZ9vmh8PLHM4VYJaQTLrDr1SC5Gzsspb9vX5ko9a",
  "key12": "42pviy9RsWVzrNt6Yo7juZSC5Au2NBGWpJkiT1KtNT8hfSdW8wi1spqvygGD7qCNeMFDQXfznSEBFdSrdfLzGcWt",
  "key13": "31RpdKxQRqKHM8xzPTJPkpTH5EW8Z2HhyX9R2xy4Y58dmU5BVDiLVvo7nL8GmEcFxt3atPE8AAt4XSv2wU7kMb7i",
  "key14": "YcBDVdkmYa1kz6QQ17pz5U2tZiL8aKqMRM4Vco5egkAx9jXZUzPfkDzkqXibjRGkjckZEtp39AGkVxjBfasLnBS",
  "key15": "5rtYGguZXTRXLE9MCG9oKYHd4ik2TzXkT4r1gfgwzwsEDLJ1RZJuFoHXxuoJKhPHz9xr8GsqwvWdDTtySV6MVYHW",
  "key16": "5ofE6kQZ6BsZ7HticiWmi4JdfncetZnRroyu8MBPQkyvvxKzDuxvEMTo621E15bi3LhKWHrjkvcbM5B1CwtK8VSf",
  "key17": "2ZHjHs6pZJqEpNdNSfwqN2SPxEzTR57c1mDjo9wRphyboymP6zERJx87yv4q3oeZr7F6KG9w5y6effKtwtqnsuVk",
  "key18": "23hADCnE8FkzmhvyKFHBTNxQVaVwbcgsQvs2kn7tYztXdtcCm8xdY5MA5jY88kuFr71GRaQnr1TLmDsbyihnpipN",
  "key19": "5p5frPPhrUwCWjWqZsGEGABagR6toJnhLsWnEYQ4YQYtCN2bUrtF3qqtC664a5hD6e2htUfvLwnCEQCrrhswyULK",
  "key20": "YfLsEt7vya5JTzqFwRyVFabKjZy4HzecaErxdp2DQa9t6iXKwDFZNmBE1uhVa76S67bH5TbmAY7a6jQtrVXs6GZ",
  "key21": "3KtfgTDF52ac4e8yK7wKN44AJjYznJbZ4h7QkUViyu7qG4QbS15r7b566RynUrBBwfPtCEbyjoNHSFVg61QywFAC",
  "key22": "JDTTnn8Ks1DHFbGyTUSat3NsvV5GMdNrrnL7McR4gxK5W6guigieAvswHnNH6kyYrNkG7buaKZW4btwydZ6rw44",
  "key23": "5zw8vmqwf3esdxz9pHKeTSVkZ2WpSVGTnJ7vWd8Ay4R5Tmehuz8CbNa1L5LypHS4z5SMxFiF9QP7F7sjJkWrb7De",
  "key24": "4fc9EpUihgpwgmgjwTDRG8gRxegJ9XttAdqcuGtdMUpNZvAK59MZYehKLDsfRiU8Hb12JYTLgR9Hy9KsveNhg65F",
  "key25": "tem8L1SD5KmEzWnWxz2Lvoj3m5Z1YXPQNqu6P83PGXt5YjqBSuQiJ99CuWQMLfumYxtFLiDs3Mh2TyB2ZHoTPY2",
  "key26": "5sMkbCY9LYmvtasSBU2kh1AQBpEoiFsuWkZEut3hotPdKgePVwQyqMSej3azBKprKwd5KGVmvpvm1NVf7vHBK5x8",
  "key27": "3Vg5hVhGxFHrSQzQ62hk2h1iGz4XaNmcUfW8rDptcKgnVFjSRvN5pjmNuhM9mWfZWrMRBq8FxLoAS6YCBTEhJcoz",
  "key28": "38ayjDQFAPpMgAv8X6pwwphMccmJBZMW3LSqzBEfqC2dT7Em8yjGpQSABPVGxA7nJdF3UMKwEHPvhVZzQcbXETDY",
  "key29": "4mxLGs9pMuCVLW7UYq8RYvywk8GzcgKpJDEseuSmLtr1AP6TE8nJ7Kf1W59w7nYJdXfLn6BdE1x9khHPG1qyaiXS",
  "key30": "4fcXcR42BqfjHyKoDZeQuPBuQkaWJryYkWh2UViqQ65uD9HaiYnKHCtychudr2T35QHWvpM6hYXapqQ5bc2gpee",
  "key31": "64vNyq7QxZjT5n2sfNYvxFzMSgBNHqTVJb4t2qZAPv8xmsZiRLNhoLSsPZwQ2bJgWKzoQS8XKGFhnB9Uo2ToDPyJ",
  "key32": "4jy21Y4uJHQ2NQgHWF2oh1qzaagAWVeNT3FHgrW94sumWJXuS7YS9nuh214eEoFQ13hN9nEvUNmBkVagHwLKe9nj",
  "key33": "EWMrWFVtaUutnQeuSYthuQk3rJ6xxb9w6ZLe3ptLqtUJ1JJrwxzzQuNvDKteZeHrCtC8gC5wBGqzNTfSpYzWJJX",
  "key34": "2pXysyA2hGXcc8KPYx44U5tCHGb8pXx8Pw4gU8VyH6Dp3XraQ2s9xBqxbFUGjDjjMADzg5SFQBztaBgiNtJhdpvj",
  "key35": "5uhJ9pYGhHwcmPKbxq54CyAbCvhocdcUnVtLfgndqqc3gCUg76tRTe9oovu8g6Suno2wcX1bY9JsS1JLwxaZfRp7",
  "key36": "3YV4jTAYXDrvHtRtyYCKeVg9zCTFPzX1VcnVZ4Y69EY4do4Uk4RFJQLK87V15fC74tcGewywH1V4ev4Eq9AXDqZa",
  "key37": "3pLDyKCAhdXLkqEqQ1KtZCtDtPoDEWcBJch3QVzayb5BzVt79ZHdcTA5AhNjhH2r5VP2EVHNAvfDwxS4nAr1vv4x",
  "key38": "CAJjzpcUvFgNnC8mg7PnzCjsCuxZw68jonMygYkQLtWToiTRCi7c34AvMRHS5gi7fHK5TZUeqbfREGdA6gK8yDL",
  "key39": "3KpJPDs7mzczwCZ5xBL88A86ESmfxQmXt4RHtNzhSmp852rVa5GxiZZwNAaFxHuUoHC4fky95d7Nb63qciDrhyrv",
  "key40": "3oKyeCrkoRgsBM1bE7gU11m56qQ5BjLr4DT3fGb6j8twYxDRa5hKMjWxfbmP55aBCc3WEj4HzVVeW1wXGEUtevgN",
  "key41": "4jB4Vg8jF8DgR4R3PpB7A4sS7cWvHejhc9LMFE7e5oyJ8dPdSz4XEZ44ApZtjSnP3RmyS34u4aCmkPw5Nk3rrGaq",
  "key42": "48QZZ2hXSMFxNMTKd87xvTSP2jozH3R1ETkGoYkUoudUResRYo5MWuS6M6tEjZ7aFyapPiqST6iMLBF1YeEnXmn3",
  "key43": "3au2xnoCSWE6NRTUevVCfGJhHKJ8Rv1P6iRkKTGam38m4VbrtKNLxLkMDq7f6yFrAMX3XGzRThRbyHYUdjcCbeAc",
  "key44": "3uq39v2qf96ucmVcY9KvuQD3yWNJBUbH7y5KCtpLg4SHCcqehmkUbVFYnT6efoMY347p9P1M4GgWQam6HWcLjQpy",
  "key45": "4tBEFjpz3ndbyUp5ubixb3msEjhdDNbq24ebKevDf6wc7cyMir4gkHo3Wq13EA9DmJtJGHEQEZm4832zxmCBDdUJ",
  "key46": "SxU76TJAA5AkDiYmVe7dPbdxzpbTqMuDJmrC56jvHdmxXAJnpHuzMvtPyG5xVtW2VDz8pMJPNu2ZDkEfbHjbwMs",
  "key47": "w4KN2Ciq2sJ32xh5uvn8tBvk8irwgJtYLbj7ABXkmGUDsjK9ggcD1JyaygjSiE8N7D7kjrjYaxkQBvnZYZE91C4"
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
