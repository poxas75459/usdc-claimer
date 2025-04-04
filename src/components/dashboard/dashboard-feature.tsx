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
    "v4QfsJfCwtxd3xKMAvmwL4s3AsZHgVsVu9rr9iU8VG65iDdyjpyh1nDv35nNHsFduJe4zsTVeZT51G2LmSzbFFf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r2PwUDcLt1R2geT8Qvg4PxtM13yuZ6wqXVzwgNFeDCCztxAqtyr1i6vEkaGdLSMN2sZRFXzhuDM3e1ar1tHHAYY",
  "key1": "utdA7DXJ5it1Pw5UTmpYcq2iezu9W8JZp4kqcRvcSUHqBRrjZ36z7GdzbFeJQGxtKXhXCYM5h5SuDxP3BptpCEF",
  "key2": "58T2MdKEur7FW47jkEJrU9rc7VErBFbgoxuqPXiNG5nsK5ixscv599avP3u44tdQZmYo9q2vPyTWPkGUgcBaRV7Q",
  "key3": "43Yvzq1RdHvsVVgMY7AJK3v5H5hRwfDALFP5UintYFPGZH7bRqi2wwV91v6GARQp6obiLrXzqPEkfU8Mgb2c1tge",
  "key4": "4pr4NLSpaRhNeJvvnSpB1x9ynqV5A45P9x6BHBAnLTxJfpUv9CMHsRjyzsmwdSeA1wyXbV4r3XMjy8GKfZhXKvW9",
  "key5": "2ddX91iN9oUZw5WaPbpr8jqBNm1ZCRVo2vQtwWESjr5ipTFXEGZRJ8e9bi5YAUpwFKQYpMxPoMnYd71FNZ9ru7ES",
  "key6": "SHf38GzVh3KkoW6y5FcGYKpLSg6dJXdDq5ZYbiFuuzFjsp1TQC1q2MQog3C6mmzkZbv264LWrArWfxojp9aWsNz",
  "key7": "5pQXvPDWCmprQoo5mqXUu1XrrSXL97ZCC2w18nP9nocWcV43ZS5DHmsUsTjhxRR6z6wojDBJCguBjcEF6A1TKPBh",
  "key8": "4JmdDkTepyo4mBT76ri65QaQr8zvEqr1z7NKoK5tN8Tk1akcmeSASG1VFjxT4xJpMxpTGVPFefTXwM4bQjYxCoMQ",
  "key9": "3SAywnuNZsa5M2aBznCPo5jywgTYKQhLjVgHJo5oRXFvyoYNwFQtzZHHgjSPTZArDVkWCiNj7d5c5i9Cz2sUfyXt",
  "key10": "4HALNQKMouPH6CuhLDjsf4NSDEMnRCzwch8FH7jdBJgPA1pzztov9Nm9zsi2TofetDqpVMgxfbg3DMbB4qXZCLCF",
  "key11": "4vVPQFtNWabedmAtW4S8cjK4vBaJmynphsKg68uTTxVJ7vsKjSgrVVjX3wqGuHV26LCxHruHcLQL7KmoHsLcU7kW",
  "key12": "3C13LNARXJApaWVEn39UMG8gRzJgh47B1BEBQTwDR2E2V5vqdavo9Ghx1bp4zWP2eMv8mZJ64zSVMaFNd4fcLkhs",
  "key13": "3QzEUFw2JhQ7w4Bv4VvRMQ5S93P9shHv8gM1rWGvQDSMoakU6D7QXj4tjnZAHnYDtsMTVQ1hdXYxRDJzjiCc88Cd",
  "key14": "4PBDF2h1Ka3PhYtxRtj9jQRzT276x2Ruaagb787FzzvRTs7ZJnV89eR8qNkNBZ7HPJcbwz9qDVCjrqPwyWQfe78h",
  "key15": "4ECM4LUyrPQ8d4k7i9oaTcDUhHnKA9rPorVinUwV2DsA4puHWGvbV86pmqmiZEPw69Nz5589wEzEsNhSbWdWCq2y",
  "key16": "4iM1mbtWSKzV6JzNL6Y3NLMh4ZWjntoNTDgLX6Q233e4956tEeNRQpoguBS1KKFsJimcoxBZzNgGNHdj7B543u54",
  "key17": "3BM5Sve7y1KeWNTVxeyB8XcLnqbnk7bVrnnZqg67xc49GD5tSqSkyBaPWi1drvHtFQiUWwRzk6fgKowWwuYpRysE",
  "key18": "2toPdwuzvNfMop4AVKHwrV6eqDabGhEFH5xns8SuqLrJjwG99c1ivjKnzrAgKzXgda4NCgxjpZ5MPtPsL7usbVNr",
  "key19": "5khoamQ28ABTkE4nu7sQANLM3HRtpGs94PLBbejJk1cCzLywjPSrtQcAg2nkQRiupXpxvfVFAzXgdAJcnVodKWXC",
  "key20": "4MDRbCwhochwc3aa1a8zmW9v5W9g6dc9y9K9zs4ipfZdwW18vMXcq7QCmGWLPQFTdxiXPxKqr8nnqjkm2dekQ6GQ",
  "key21": "dT1NwzFNYP91z4io5nZME7Rpuv8c1ef3Eei8ahvEsiYb9SorakN9nX2nQanDSkj4gGLPFZehccc6VvgbboterM8",
  "key22": "4iPgw1ebiAXc2h3ojeW25PFZx59KtuywFRiP1386W4tHBQBB8ewxC66SiPYjALdUbCsdVQooeCFUYS65zjYEfRgB",
  "key23": "2pQ2Ybv7AkexSDBLTDiHGaSTWWmZf34JcBT617wTAddZzC5rHfYsbuh2p1TxUg5TDhLuj4ShaAh8JaogAsMqSVqr",
  "key24": "hTBASx1PGGUbvUha48kpw8fgQNNJNxDnkPmUgaC7KFaqm2oWWH11hbyu7VbXLYfab4mXLSUnu8EGZPqGLqehefN",
  "key25": "33Xwmzr4oK3KtVZKDKTJCSCzs9pETjhXDZeFU1wpA7FPtyoX94Vri6L5mZe2fxsK9XqfAKpeEyUbF1fnbqNcgvhJ",
  "key26": "NCHEnoNBtDxcqXcnJs1Zyc5SFkEimn5bRJyTB2MybFsh9x7jDbiuvwf8uxV7gB2EucU2QqH5dFJeDmExhUj8zjL",
  "key27": "3ymLMFjjXZe3cJaDxKPhSqG2jFXXBMW5ExiKdjTdBgQau2CcGTuPgqj1J6mNa2tjy8XuQPh1mk4C9GTn5AM4HAWj",
  "key28": "5EwHPGwSMQTQYwg4p1Cdw71E43tsbXPk6NhHyRDojrwicJZ1cyd5XPqWQE589TD3dRL4t2txwRkm4xHrasMgMPeq",
  "key29": "4xbeqsR83NNRtd4GTYeSLPvrijsWACg8guR1CKdjctXzhfD61gsn8aJpsLiBL2RNuhFcPzWx3GSztUTsMCL1ciLE",
  "key30": "4Arqr1xBy6AGbKVkqJ24erts7bS7jpcxLCpDfuqF5XuGRvwAxruXx7Nqo3Gbc7eBera4FpihoKoivz8cE4AQKhZJ",
  "key31": "4yFxh2QY2ppmtsdPe8LFeEWCZZcw9vSS52vreTQHGfA4yfRmspNNSbCVCQD96hfKCcMtDFECNMsSuf5QA29dbpsg",
  "key32": "32tSmSeesq4T1Kq9zFa1uGjg8PPWm5h7775wrQRU1wbk2zc2GwfWTdD1vyfrcFMBzf4KE5SuLYnShQfRvztQS8MB",
  "key33": "3u6sDxNzsA64LBr58XbUA2qXz2bDUrmWyfvfDCuRWZ4FfxxMhbHk1UnYGJxaVhkXyY7SfPAzXhHRRVoNEmowairi",
  "key34": "3cxi16CEc9MYJtSvEd8XsUj6j3Jb1MjGWsA9Q7RJSFkmcNBqdgfqqneL5VKEfZQY4XRpb5Te1BSxUx4agwSv7s7f",
  "key35": "4vQVaJ2kQBJ8qvGHoanS83HtGYcTjg8ZAdmVtbX8Y5aMKuAAFqR32WbyEMd6ak9xwYGrWhq7ENouKj2joxenXAxN",
  "key36": "2wrCSnhNx3uR2pisZwqrkE8kkgP7JCx85SCicmWucXXjcWV3j7NvoaF1JHdzkoptcYY9mtjxyHXmSdFcfRJ1bpNY",
  "key37": "3tcxsAjLPh2xq2PNv129sdjcaijF6KhxFWmsv9zv4PxXc2kS6pxGipi8D3QnzT7Mu2JJwQBsg72C3VpXARtftXjB",
  "key38": "HQXVsrog8BRsEvUiX8143ETmzsNwoYeg9LF9Ga8ZywzYLgDoSDDLVurkaLPH3if4zpTApigXuKJfJxae1cD1Km6",
  "key39": "5FY2yE2y4RbqtPqiMqbuxDaFjVe5xNLR7RAG6tUNKkoFqrfGirkBmhpAyWuiq6WghfczV4o4itLBiYEmPjQpQe1n",
  "key40": "4Fjb9QuJMSVBCLfSwY8SSUsVkfuo243eGyD1jsEMajMfY3drBFjLdDeG2Vyb8aiu94x3uec7SzkmN7pZHSExx2t4",
  "key41": "fHUiTAzfKgfyf2a8R5w31y2H1Zc2n5gBBggENn9kBijY5EZAPvds54CnhPj3SHHY3fRedggkGBGLbXw7GMgQhNA"
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
