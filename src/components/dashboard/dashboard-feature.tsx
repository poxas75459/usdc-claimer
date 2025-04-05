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
    "3BZC8gu44tMH21v1Fter15WdyVMyfi6o2m2XRuzTze2rXeUM5agFia2Rnq3sJFTT3Rt6GMzDjtaCnz5GYgGCG1ji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vug6pg7TfrAx64oMnDzewYGAsbYhpdSpaAbT5XhdKxstaX9CB2stGfSmaMd9dYCpbjEknDjMqDMeNqUqut6Kpoq",
  "key1": "2iCcN4dCykrYuwh1xb1sKonzKWGPTuRGvoF9tsnZsABiqiMp2U1q3eyJ9iKhzriwYpidtxPMidq1ti2i38FK8Sje",
  "key2": "2aKEEuxPuiU11godxogrcqq7uJtapAMUs8rP4Ce5Tjpw1NeveTaUE2FenPno7FYRugWPnZNna4JJZf7NsrYSiqqe",
  "key3": "48ajYMTFmFryV7DvZB2DGyEmdfu9kdgJioqtpsVxmoLTqhmLHm5nYGcir58YgmxrcNW1oeZeGLPQN3voDrnJtn1P",
  "key4": "5dWvcFzNB4EVSpjopG4YYc5whcAGXEHjAzQAjjr99DiRVZsDEiJDqdnioqdPSW2vCJDkNcCfDtngfx1LZPmjA1Ne",
  "key5": "QmNTHSaXxBiQFMGJGpEhLCkg9XYaLizt2BRgbZSdaz7FgSimzV5Buzw76a1FWJvJKXmVpsjBrbxfiqgrQ215AD9",
  "key6": "jvg4HZLU346un2Tt8pWCrBsHJnQKpbroYfgBy78xRXVcm2RrFWFXqpvihQpbxBkDDZT28ozYriuBbr4PkzU2H3p",
  "key7": "3BocPHurcB8apwS5Bi7jaxdoDEBoy2mM1mKDzSpRVecZPbyY2QKZB64pK7sCffTmKsM1M3fzj2zo4QNgjkxNXyQ9",
  "key8": "5nT7P3TPAZDmkQ6CkRW1h1PhMuga4DMwBTUaNLzPL1rrSTujnhzUUyGcrQPitVXXtJp6pJpXyQBanBZncqhdqiqr",
  "key9": "4rSERaskL43VhGPNzhJ5dLZVU4vQbNtkFCqf1rQ89DB7jqDSCDLZFhMpJUQFEUeKRsibM7K6pQFybpjAFbZUTcHM",
  "key10": "w7jzgwqfbuAKYUqJrFeiB2NMraCCRAfdNzNgm3F384gohqSMyD5DHwweEG2zdy2FDwxSXqxQyXTSdfAYRhgM8Kw",
  "key11": "5MagikmctKopgWscWMC2ehKyNJKeaaEmRU3DDdfY7Ui6ydc3RWjT1unyrCxtUaM7cpiGuyxyab2qcNMeLb3rNHEU",
  "key12": "Pu6TSvVg67kjznudBcNqPGuX8WpK18vwdWC7XiMgouGjXVNGpUJKHD3zBCeu5yYfDiU7iy7GqfMGKM2P8VaxhQd",
  "key13": "5Rp9mU8ZZKxbGAv5pi66Dm8EwrjzPD2wZLJXnJL5X949oeSAd2N5hrun1yayfPxuFTM3wiFajP3AS1Td5YgbJJyv",
  "key14": "3ZUAgEf5JPFDHQGzvjp1zBM1XkRQjEsbn6D7wQQPgfDmPG9VND3sYpGqjJoztniAhxLJ2ajvHS4Be36PbtsVMHKv",
  "key15": "5BmFQvPnHAmJdX83zd9vYuBid7dKaXcZuxE4BRqGNjtn26xREGGisYpUrsFGFVR1pz4CQnaQUyvmPiUEKE9SpJGB",
  "key16": "32cep9P8v7PYtX922fhKyifv7wzmGsLAYMJTNHiMnLp8ck66LSHuwmYTcHPEURGvVJW5upfkwX3cL3qvMoKePQ1w",
  "key17": "4jdzGox1DGgS4Lrpzjyh6axjsrfZkdy3M8aueDyvNV9qNAqrGQi45hHQV1oiR1cthNrCag3oijyorjPE3jLkgWH6",
  "key18": "2kRhQjYmVv4zokceYnfHzEHsdc1Mn9V1Yu2K5DoBuJ4E2mjTYauHddAFutAekyHvacYcXxtT1igmk6wLQYcuceKj",
  "key19": "4WHcGFhNBNaxzNRAeSrtkWxkwMwsw1vFJutwhhiUAYCn5KEkNupvJLBH768hanXLwRepSb7hhbWMx19fK7c8RwSo",
  "key20": "2bXtdmhCYAFXwufRb6mmNjtEGMBBXXZn4yQyB2WwccnZEpMaeQUHwYvXAfoMPb3TkW7oghCnqYzcrDXfxJX2MzV",
  "key21": "4y82hd7Eaevy7PyghQuAjwgjKfvhAWPfLmNNpDRGvKCQocoafHcCRTSJV7C6a6Gk2qXwn9Rha37ioLuz98meBXaC",
  "key22": "ksNKZywX8KHKk17dA6cQ3Lq72x7KCzRMRp6wQdjaeVEf8jPxuKCvTfMFe35t4aegJSbNiw1JNAq5PT7YRwm7dCU",
  "key23": "5PkrZG7MdQuJqhJWAvNc6Cs1jtyii6WVrSsPizvaTLXmAyu8KMXBo4WU81j6k11jJZgdNc69ay3Q7zg1wNLQgcq4",
  "key24": "4i8yfReZSFm1aseCUV8uNhtY2fT1UHs5GDn7kmajZJbZPv3LpKMLKGKZfTJSvqarq9S9SbT6m39AokjnyY8Z6V5L",
  "key25": "2wVcJVRVuZX8pdPV7TbbmYfmro8i53eHfMR5TrsqL7EyrUi6boqPg5FpX7vXiHLUDD5XA4egxdFBdpk85yHSJr4R",
  "key26": "3xQ6HYRRxrjVitorSCCya9XMUSeycvY8eBx6CfqHM33Y3yHVNv3jYCVddM5cgo7cBJeTc8bjJ6tMRVCy4dJF1Ef8",
  "key27": "5CDD7ioSnfLcMNanrYFKhaepZNb3kE495SM6GuBpadvbw2s4kgVPzib7JH3W4X8zreCC2XjRpicF3uJCHGjxqWud",
  "key28": "7KvQoSV6MjMd2q7o9RaV6LGYbVKeDjq3PsgQfVuRJihodZc1iExz54BkBTEUQf6iRMJ3K3moryKe2KDGJuAsjFA",
  "key29": "26i15TEg4tbiQNCvhzKvVpohJpn9SWSdBQxXP8CSAQNmhYa5QeuMZ4bCH8gnnT4DzwJLGHhJq1bhHHci3eBrjvSG",
  "key30": "61goHCTueKhTSsCt1oXoeG5JhuNm4816v3UTSz8Ps7Jk9sBvLBJutd4whMkBShtwFar8BYP7MvCv4QiCXFC4BMjE",
  "key31": "4ebquBFRAAeiQ6yTFC7Ke1ANm2ws6PSqzFvV9AcctyjTkDnPmodNYrk9gxUr7q7P18ZcwcLoQHsXXucmeeugDRWa",
  "key32": "5eCnK3a2aqJTXc4GT3RHJicff5gdBycLwPkxCUWcjQmBLKSdL4PJwf4peHffRmiRBGUvRnsHMG752txPscWn4j52",
  "key33": "586EvfRisHTgKDLbARcCTDn2zhiwgUCfZ4fsHvVt13dxsX68Mw3DNm8Fs9dcy76ejRiE4j6YtBPPwy2S9JbiJEy7",
  "key34": "2QEPZKvw5oK34Dg9rkn9bbR9ibNPcDpkUtVJe2CWWdfcydfma23TfygxEe9NDrz5f5vCepfRA7tGP3sTnRfxX5ww",
  "key35": "4zKBS1n47PiP4CxPFcsH6wECkgowaxY6ReMJdWV3DCBGrfaTgrZZEQBDTMFPqatoM8wSjJczGAfkbXdtP9AjeeWH",
  "key36": "64VNGC19XT3u6XCGnFzutRaMuHvnWMDru24eKgfQN3CgngFqC9bq53VheZudatuHGxdkZrneG3qhvYqAPtYk9rXY",
  "key37": "3tvHPbgNTFMiPJFGXJvm1f1YucBg9ra2PUdhcXwPcQaqsvqJEk98zWV9C8G83L4gfJdUZmW83yjpLarQLf1w8Srs",
  "key38": "4rdkh53BhaYjvW2fQJiGVkct8m3H8knPBcoWxerzpDHq3axde4UQQgTxxoPdPUap4KRAKxFyWXJksfKNNCoCXciX",
  "key39": "3zjetdv4LJXs6K6hgmqjitawsU4UC4JHhBvXe3vnL4pvsrsCZUkJxgJak55TfyCKzWg2jgyTxiDj94UeYw3FDmox",
  "key40": "4UuYHQ8CZ3WECRnXm2iD2U5d8PuwGizw3joJJe5HnmeaTdxqFjjfobJvzJYKUHHjm94hZ4fn5UxHgBgA37jdWLNL",
  "key41": "4VQPaVDsbnPjmUy4hNtNqerudiXJgjJFmJsTZ5WfL1Xvdcefxi33wcRR5rvbR3NeAnGK17PWwsxaaAnYVzC4b5vv",
  "key42": "5K3D2jGWtwfRYRjRDRCT2AnJkXf1cVQTMFcDgietDUzKsTqGkgxD3Wr7bpeAVCPG5VFURZY9uAB9ZZRkgnuzvMYY",
  "key43": "vnAaYNs5Nh7Dz8TbJkJLYaBhEHY2ucjdMmxb6T3RRRAVXyDhaxcpNPhP3pNrM5FSQjdudtnB84yfB2Xz3Pe3Rwf",
  "key44": "5pXSzMdTbEt2GPeFVMf5uQLrZasMsnHojCJkaNGStoyyT348CngwAJFY6aqaY2YihyEjbNMH3xCAh64JabwDWF6B",
  "key45": "5Nbo6Jh1ZynfACPpRDiJcbVK4Uxu52VYsP78QU1xpsPNoC1DoErmev1zdLV7Duab6t6q9dkWib5Tbp34xqZFoZAn",
  "key46": "3xea2d7s6yDoey2A6nma1TQ957nLhCkueBKjzCSnYHvzbkVoMyQ7Kipn7KyCWaXzZWhmivExFC7HHQB9vXRqgkEg",
  "key47": "xnuo4KZevwtTFbqCM3qbce4pUQdiwmigWAx9TPfAs8nNtgcpoVkcAyfzdG9vMwEjxsoyLiYHUdffqYf1u7Nv58W",
  "key48": "23xmSZGWooMGV7Ueb74M2rZCSwyicwRAiUDNsZqczi9J2Vn91MDy781KkZZhNbhWs42X7nGZjk8WdRN2c55aUEqv",
  "key49": "21n5UaH62i5m6NdRpLzjwS236DCUnVW9BPXRnxmgNCUeQe7fSfXxXsrRa3AksSRvXuFUBiN8cCNpr1nLNB5LSf9i"
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
