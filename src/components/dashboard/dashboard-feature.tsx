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
    "KhLiLRsE3tkeuENAtyV6n8qV8uZVtAznMhQyY6x2jKzZeYtKe22EGY9DLa21kzT183f4doMqmADjwbhjS1Wjdgy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qwZ6weXfJtt28j3q58TLbGEx5bwyA72odZrrPStG9CUuwmT7jQwV3zLw7tzLrgP3iAojutVgj9P9718WtA4PzFr",
  "key1": "4ruRLQabjkmxzemLDRQKqy76BJVaYoBszBEVy1tAkyLDJtpGyG9qZyzKp9MCFYPVzkkVqtUrMJmEx1Unr1Qv9Hcn",
  "key2": "2dWU6o7Pt3oc6NKHQLSWw3xakUpoVzq24iakQhB6opPAiTtvAP46QT7gLv5dCrj3eUZjk2DwGF92TCVPQtMqj8T",
  "key3": "4jt6uxH1EfPRhFKoHtt9xFBtzRkWR3shNbtszFToKykRrwfmBy3NHm5aH31mzFDFzUu66LN54y4wm5rBaktApJQf",
  "key4": "33S24qa4XCnJLn843aUuYvp9y4n3g8HvkQ8bPmezEkdkSX6g5SYCFUK6s4RycztN1PekbQM9rJu7weAcsGUoqSuh",
  "key5": "5Zq2LHFHQT6ra7kcTmxASywJzjCsTRgPur8xBDDc7LVBwjeLqyRwsCY3Etm5vYy5ikbXCdFr73Rke8pmr5hHR1dX",
  "key6": "42WdzdFJukA64JNJjZ9TB4qfkMH9ZmNCUpxLG5G42TrDRMUft5Ty9wGXSrNtZaZZC2XNKksQgzVS3jrF2ThuncSx",
  "key7": "4x4Pxgpkp7miQyMGiMU6eS1FuD2ehvuSLBUbdabSKzq8dtPhZrioNVPaK2AGn82M6XBoSE3Bw24RDSn4KzNGn5tu",
  "key8": "2zq2DsY6x3yNNVxA5mW61PyhYKFXwYKTpwBbb3AhJWTAZTS6cmSwNvtksmtykWePSWhEzehHzT26RvuzyFPKAF22",
  "key9": "3EHXF2fzu8oJ2i53HXC3Zq32ALwUJjoXDpDxF6CHGhS7Q5Fq5qM36JJbEfb3vFUXfd8BHBz4CSvbCishngeTFLmv",
  "key10": "eJqMDKD743gdL3SMHGfdJkng6TV2VGXvBZojjSFkg93sSwCELaV3xh4gALyVjS9zZD7Vg8d6Q5tUmvBiHQ2TrXb",
  "key11": "5c7TB9UgBzDgs7a6841p1RfXSWuG8sJJXae3CDSNcg3NUFDeeLoAn5568nH6KgoLrmKzmjBM3PWZw7zE211J4F8V",
  "key12": "4rk7qRveN98p6qHMUTPcmbDPqwuu4V9ckjty9HE85WfrBWQT7sT6Jmu44s4DQ4H4bpmRZAQgaxMoSmtX6t93uRPn",
  "key13": "2rez4bQtJS4AUxVFeAYXRwE1GN7qUJDuvqp3Vm1WfDwbqq8HhCQGSehSqguPHmVLsQuQxNo4SCYFRWbJdJovkvE1",
  "key14": "2Q5dVMqRFc4yfKXX8WfRkExW1UiGJbKEuk4kNg65Ugz2xEuThrT2EFaH3K2a1acjLkJSB9J5t93VrGdNYyveSsVW",
  "key15": "5jabwUpkgphSKEGvmSdumT7hJ9cA9ctTTEt5JDBqE2rbEGv7YMRjLkm51M8Av7EPqSu1FRWjiV9h4ykkpzdY2mwd",
  "key16": "5BC5Hn8FaNrN7EMMeht3ehzAq3KStEVQFQCsqjh1UEQx3ShaMmh8UibCfQxajokPFMKT3ej1bYRHF86tkA6ihtwc",
  "key17": "hMucLJuBwt7z8QkERhH5TwyZN3btENkrBhX5daKzXm4PZqRJonDZQhyFJtmcV4u4crPm6cLHWqvJgEPhVNGjUiJ",
  "key18": "53R1JTii76Fit65J2CxP3txcuvrY5YFVEBrKuJZVuzg2rN4HWxRWqhSrt7YevT4QMnDVCQm522iZtti6zJMqVt1n",
  "key19": "3LEyC54F3XWQRUJaZU1bqeY228Xxo46pEPKkDvKDJM1GpxDya9gaTLd28wYiLmNun8G3ptJqQeXaZxoZG8jFqQVV",
  "key20": "56rYokFLod6a8YmdqhiSdZwebWAtYYgJMuv1QGzhRViKz6XY7UDWP3e5YGLpbtuEAP8eymkP8JvornfJJFAQno2s",
  "key21": "4j8Be8Lm4wQz9kTmBhCEx2BDgEpWcMcAuHm6AVHyX3XyJjcQizcdt5A2UCEAJTe9iHpHCPhKSQME8KfwEaegUUEk",
  "key22": "2idDGPpVYkkC5EzVmBeKtuRbmZi7h32ugwjCgKwUzizAaorEPf1DVafU3xUi6Lzc7UifA1FVuYgf4ACYmVhSXvBG",
  "key23": "4KiD2B8UUvbiNqbsmcwytNK4Tja6xxFfZvDkc3Nx98EahAJ5Jcj7A8huigeUv7VmyUGRMr1KcMRsgPvrh4mT1fb5",
  "key24": "2qAL4ZYyzJLB8ZJ6d9kHjY6pS6uY1ydGNDFEwDepcppXk5q5JYDjTfQhaNuXskcCUYoAhRyNQ2mWAQfW8e1xKHv1",
  "key25": "34nf9z7NKNfPk3FeGwKB6kUtM1LaLpKm5VezXLnhwW9XtPTQf2gyPBtFV4s1yK5N86yNbJdbjYC6j9RYTTcCKP4",
  "key26": "2dLEgvZshDj6Mb9kxCUvKSATYjidQoSMtCY8QKotkafsuyDDnUJaCom9w71m4DeaxfNHD3x2v887rBCkut7N17TV",
  "key27": "2nKGJkJqRPk5qSnCZBScQjE9RcmGnZ84nnBrYUcLfynYsdi6AfKRHaZs8tXRouHaRqwrjBXZvtobyKprrGdzRNNH",
  "key28": "2SCU9MgKBJzbLp4dTDY3vDeQGMDw46bEwTxr43KfzwSgTLmkuWKWTiSfVFppR3ApmTSoHNWkmFHJoBKpHE9Kv5RU",
  "key29": "53mBxXN1U3cZWLjvq4iPUPeqRPU3eVKBxLraJ7f2JV3vY1JArzdSHov4XpQDbai2HUyzpUnGNLHSd3gkdpZRa4jv",
  "key30": "5kZ7cJ2czDKVgGcCfFYDKxAkJ5rHEUS4c8onTxe6EdCRXeGVT6Hn85NK1JLxofRDK93LFssC18J7x4gDd4PqpXFC",
  "key31": "HHw4Sn5H91BSNQFVs5YU8jXuTKFH39zs1komnDDNFBcgVUXftCmMjc86S24v3qpmNB9GXj5Wj1oLzDWgEhfrLAN",
  "key32": "B2KyFqxP8nMhGPzHUycPUwLkwW2iqvMvfpF68Udi5shyQk94KzxnmuTxxXgciSvFFy9BBcp4UTL8JrtzHUaJhQx",
  "key33": "3obsigaiaiHJSaoazn3xfKSmMFju9WfMen9SL11iAJp8rhgy2Gk8XYhoJnkmoxXNwy7rXUtZ34WDW8jrtEskQ2mV",
  "key34": "3rXpW4PKy22c2B1sZSLpbYuw9n12m7sw6mzhAxWETf4Npa6bDwbX3tENmLoGNzc4zyQn39WQS3BN5HS6G25h4cuR",
  "key35": "5XPiJ5Kkv5vbFtzZZgkzEqwcmHbHcJRcJJxTs4Wn7SqJX2ubonwVaTmncWuykUpLXX8AnomUARadosDdb74DEr5V",
  "key36": "6Pp8wbb5Dnx2Sbz9f9DwVcDdEb9hZMJWne1HznZ8eEaN9xYRYdattHsiaco5jkSucQPUaDRGHT3uLvUGubBGERH",
  "key37": "4BGL4qz22HeDCwJUqUEs1JTbZhnFnpMtoXLwSdzVJxoW7PhDHkwZCYHY4MgJ7ee96n3BayQQtr7NDfjvk2n8L4q3",
  "key38": "3kvJcZtHZ7M1VF9Q4RxmaYvJzQ9PtwLXVqV2xZXmUmpgqwgm2taaxo9pSHw9ob4haCBUV3fQaPWXEKQr2RmkMdq1",
  "key39": "4rSanJytPNsQxE2dpNkdmyhUdVeyTVcKnRUAaLWEHJfjCF5LV7FdREiPh2sjLEjYuu2tsAYNWR75Qewd4LCaxB3h",
  "key40": "4m47pANuzapPKHrhiZ2a7cUBrJsXYy5dJiyhjmauLqZ37KkxTpmNzPg7fWSf2be2bsWjym1b71nVaaFaGQGCfqNw",
  "key41": "2sbdFXKGQHkrGaCUXvEYi7jdikyigGMUwjEnrADQNRpeAANf7fq4qWvDgxMFBwGVgvvXGCVQLv1X73iyCjPYqqP",
  "key42": "Lo9Q9ZgnAmqYZsAX74DDYWFRr6SYWa333s15WoSKvj2zo1NiXUHewr6gkZpzTifkZpHWf4riE8wXETy8Wfdq3sF",
  "key43": "3d9qS13vnvShzeuNb9mtNDPNF5FBkhGFWNXv3uJ3RXVDQiZx6kdWPG5JpAW7xRoXVv3ojf9cM4g8bCdXCNuiegMk",
  "key44": "4VVffaJmDasJ9A6tHvPwYbSNYecSsAmtQTegjBCyHn38spyJAUW44zaCbJDLVRqRGQEgEXQVt6TLRAeB2jNzr3FE",
  "key45": "43rG4wHdethfejkWqxupy5jkuyFQhh1Bt1CfBoZP1KeiafyXiPVGXQm6AejKFEo4mCm7Vsfvn9XdnME9yrvy9JfA",
  "key46": "4B8Hpxt1CbVb8paWxSfLYM6hrJjgnYDP3TM12PTuYJxEye2x2nbDuNechHbrxwVuDcpExe8xtPqtt741iUbvg39j"
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
