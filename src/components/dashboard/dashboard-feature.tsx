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
    "4dBoQaYAWczquPSTrHkVg7q82bct8zGoVZCdBwECHHWbc68YSfvNctcd6ET3xaPGDiNK2EpVUnasxLQeFP1Q4fJ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3shjUF1kWNSKzdE6ufrD3JtvE8y6GR7qKqGMA8h57VgdgFtm8PjwtNrD12z24nG555pScXy9jEwmcjWqV71FzuJV",
  "key1": "4ookgp1KVdbU3fs9A7sD7eXdj9FxJEhcNg9KHSksu7LCQntMWgSmJqrFLQjDeFEskNaZbFkg4DfVsNtUHuNBwswc",
  "key2": "f4gJpFhs9Br4ziQZRLHUW956DxPZJkmWXDQg7kW4x7q8KKB1QrCj56MyoiznbuTWyfvgFmhpAm6BDpLR3DPAZmZ",
  "key3": "3CF3iBXJ7JY7sksM6DLN8PtovggXXP1YGMHmSebhRPkEyfCVDR5WtWpLDWsJPP6MrtnpvCmU7XnacmpF95BTTeBm",
  "key4": "55cyvvccp26iKQspcAdu66hEUfKjMPUEgjPE1gkTva8QmLxPSnxWmDudd2E8FYGLqGzS1R8katjCMu74DJJMh9ia",
  "key5": "22KTWDTjGHxdg7ozvvZjUwEujiDN7CBjjWAZtCtCj1QH4MWgM8UHeVKVkHcd5F4PeyWWdwMe8N9uiagn1xZFnNA7",
  "key6": "up1SHfozcYBdzbQ11Zfsi1GDCRZVoMnpGQAbsidq63vqguEsBQ6Z67qePGFxRCdcG6FCPozLv2n73km3bCAxTKX",
  "key7": "4hs4yqGp1sZdEBcz8H62D9dadn1LXBkmNugguuexJt4sZUVteZFFvU9LF9mpiZaWdFKzKEgKBpYHdWVV1T2jaPeG",
  "key8": "9LbXA2FYYtnG46P3HnP2XwCyX5yLyFJtBspVjso6toZhzLxWVq92qZYMTt68EAkQdrF98xj2p8kKqDAcMD5e23k",
  "key9": "7oMTUAmCLbt4fm2A8SHxkcFw4BnFjsYDwXYpGcfzorCxZzTkEcAgvFiiwzkyfLpmmxav3PUv8ZNwiG98BJUC3gh",
  "key10": "4t6nC3dDRh7VFEsRycJ6o9opHeA7bjWWk9xgXs4LCrsoFs2XuG2QRszD3AvCXaNASWDeAs4qP9c46eXGqUFurfXG",
  "key11": "5QEXmvoiJFjFfEfbb2kddSvdQpjnkwdnMSpZb5XkWnWRYnt9bmM5szUfkQPqH66ijbrANoGkfu4XiUrkrHrzCFJy",
  "key12": "64rSavMuregMofqjEDM1yXbR96x8cYuG17hTZjs8J6vV3Mr7iBFMn4LVffdr9pECahLnBoDEvNGAd6oW22EV2exL",
  "key13": "3BpkkQtcVH7CeWaKYKjzci9zFuPg9zkL2npZb4Mj2X4f8xBkrydNmCZ8Ri7mboNuoA6Npxv8RpjYmWgYDMyu9q7Z",
  "key14": "2HCy8AhXGSytuk1fVzs8LWh7KXyFjeuTEytkenqH7LTcjarDyphjtGDG8yRczmfY8syK1FvN1sqSWWkcm6pJLnWU",
  "key15": "2Rc9TXz6CC4wSKSFGW2ABGg6pYD8QCSCU6mEWy5n5sAHgdHkGA1skD8MewSrkMh6KTG3CyfvEUiTCXVe8YnqoLfs",
  "key16": "4TQZMwm1q2RPcukSnCsMxk6BxigbECR47ADKbyrBkFgUFUd8W97JYyDuBJjKZrWYHQqyYWdDsDKdzg4ugjCvKJkA",
  "key17": "5p1SfS2RfcoXZWpP3wTf28tLbvD9sC9mBvjYsCdexEzp9ZgTRJckUNXP3konqjBapgs7Av88yrzUxBYZHpzbJJQf",
  "key18": "2tU8fJPWoCZcFnw59BeTF8CaRSx9UVaKXNN1fekTx5mGAbJCGCpCZtVSmHph9snJ38ouHuz6CDsXoyPANFwLxJ5D",
  "key19": "3ncwmeNapSCLra75oXPM3Qfw9QhkcJN8jyp8q2qYKcbocTNPEHGfuTbziKq5kPA7zxHtvuqRXiVoGpPLeoJeRhxH",
  "key20": "5JbDjLzWaNCzd6dLKtkKg9nQiouDNCaSqemQK3LWPqXBjhHGqymZCXvasgcUHQLXxeUaFpqteFRBkuvEZnDBu1f4",
  "key21": "5QyhyyRopbtsZofaD2L8wABMjp6LtSCSsDn44mxurhwrLVgJYBNisxFnhLFWrBqfDd4QYmmsZCJVoLZryDeoHHBy",
  "key22": "2nTHBVGQ9HRGv1tFeXuw9ziWFCZ632RmjWyzr7WbNEd44BjQAf1C6zTHbfdSTc5W6YdUikk8QMwQTbtTX9LzPvd6",
  "key23": "5NJ1Xgg77EHpTk4r58x1rKEwPT2418ZDpqh7DQdgNwamxxnHRzjVqkCGg8ybmTJKVJizcTHtyy6q61djXvU6zqAX",
  "key24": "52yu5vDthEE2dLpRPMbmrm1854rNP6iS876fwkDLJLECbrratriEkTYkP11pB2qxrYyVasZA4XD6xE21aG5s5PyQ",
  "key25": "4J1NJeXFozjwYqeHgD8SWo88SCgDAd1XVamJZuY61wqZ2B8kUMKLV3rFSdh6eDq2CD1Wre9CoGBmHxcMkQYzCfwG",
  "key26": "2WEotCKrks67wwTm9oa1VSThHsLViSwg3ZdhGq6RroNPxkcTwFkvDfsaVFqzMixFiwytkoKMNpXK1oZ7tteRaVW3",
  "key27": "33JbhnkdCN8mcRrTWjFvJwMp1rm9NwGtDWA2CswCypwa7EqtWK6ceLNTkW67w6Gp4jQTuaxpcpkcxUNYH5icAQ6M",
  "key28": "5zkC2s59kKanTFmD3NH1oPHDN2gkeNHvwQbp9iGcMaebkukit7dBHCDYwYRsp6w2oxvtrRxKk9LGDnwx8c5sd8ix",
  "key29": "5ZeFh4MFdFyF5b8bjfPdPZ4FPtcxA7f3xrz3i1KPAaNV5GZZbrCq3wcbmjEqRZ7Nn5D1iSYu9ZT2EMwK6Mi98Kd3",
  "key30": "fhsyL8UYsgDbSixe16wXpBR7WyBaZfFvijnHEbTshAmiWn2G4QzNTYfPs1Tc2RUt1JorhUxgcQakpMfTWa96w2F",
  "key31": "4uTQt5aJ5oiPGqjBwAVhEszF5kg6DSQQ3VqhfHTemrsGbX9xjsB2bDeshVHPuP5x7f6ZYxd7fAgHo7ia8pnictEn",
  "key32": "4BYEs8Yeb8DMnkG32NdiE3wgfpT9kd4r9VQaBWAhZdM7LMw48vohjhWzcKixvK2t8LnT9XQWSa4fqF2bMZ5CTUcZ",
  "key33": "29k93Gfi3mWJa5PzT9MMTDDiJ5Jv1nknPJrazMFRiuX7F8SiTiSNzi5jXzdxsynY7x326sGpJ8vRZu59AXEtxT91",
  "key34": "3oe7gw56WyHF1drni3NGLqwVKhbcKtDDCcf37a4zQjz4HqrU1k8fcC3SfosVnSkxURgfTT2Hogvkko4HAFvL9mcQ",
  "key35": "4Ph9CJjZ4Cpyi2NRp7FHvrvSxfueXhAxU8kN1HbhJ9NkuX2NncD2hGx152c1N4NQP9vWZZN5cwrnVKdTZrXEAWjH",
  "key36": "4rxFboJht32GJ6X9YtaDfo6mmzu8zfLwr7g6YQ7V8oBqhiHxemtDyMkRGA9oXZfE2W9bpdxjN1YeKMXMdzryFkDM",
  "key37": "5vt9Uh6aGvKvPUorzNswV9xpY3QjMmBUjSvmcezYcw17SVCz6LmhP5mLAVyS83wrfRwxSVLy1dvogB28UMu8dnon",
  "key38": "ieCe9s9S8ZgGjUCoBKEVTPpgToAfVfkNf2d43qZ4tjT7BVQWFNx1AnoemYwU4yzhzoWRjUtgYneyNsUC27QpVK3",
  "key39": "bjzB2En7uUT24pP77GwbJAMHbwwH75MYoaDRScYttNbb4rsZipbX2o4BXNA8cRA6nMZzous1hVH1PTHBwcov1AQ",
  "key40": "X9ikrUAFydM9N8K9HUcgBzPEpYJqULm1AEYuYfG16TbrnrGne9mmANy8YwonihPjD71CJX8q2rZ65d7DaWB7bS3",
  "key41": "2uydtPHGRod47LwjYyyj3zAiCzMt9TXSLho2PgzPTZdH8Mx9PSoEWjTg8z9fHEa5gLts11Ex7jwc8E9kcnCK68L",
  "key42": "3P3iZse9bh2cHey8eoqPPc3HTuihgHYBx8NzzmzpyK32WL6jZyawnf3SjWYcNxSrvzk8us8kM8D4du44FneUDEoH",
  "key43": "4YNPyprW28pZ9Tnq1zozKbBLzB4aRZrqT9p7PXxeGW6dvWtACtb8AtusMbqFrwKPdn8gHLKxnK4JGkAqh195KVWT",
  "key44": "4j6nmEv9aj2DtzVDvwxL8wtsTsv2R9VrwPGKp4i6njHtFwko4gHndz6LJS18cjRWLsbYvrxntye472YYq9fXHXv8",
  "key45": "21vVSEdCUYNQGCzNxmde9K8iAfPrLsxChVBkKDWUQ6sr51Wc3UrJTrAkBHxTG7vnN5mX9eFzsHM8PM21Kyc28ng2",
  "key46": "RBJ51QfpDzWZBKUUhfsnVWDmBooufxtMgsGpb2n1LSXBVRJMgUZ3SNii1o2digrAswugvecjFUUsy9wDsFFgvmj"
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
