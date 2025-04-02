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
    "5oQ3bzPEPvJXBXyHGuDvSrMANErBHrMUbBBiyfTTNsTXnYA96yAbpS5Fm62JcdCfBmL85efdoYJsVN1beJCbBz3g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y2iATEEXTUqKeNKd4p4yeUeDdaBxQvbBHS7ZxedLJKD5s8MbHeiAZ6mt32GiXyNFqZsB1vPJiDNy2yi2LJSHdrQ",
  "key1": "5sugWHxpyFHSUd77kFzqPeAy5Yps5uGqdyT3E4Js9tUtyqwAfyVVvxvZ14njk2m6CyeFuPzMVJSVAwiGcL5Np39r",
  "key2": "5XnNLXmTMwkBMw4BuyApyi7yPoEG46Q9Xz5KkRyTH272rZ4maPfTpt2KDZyNgHV9zvWyQMAkZp4keVk5meoS4c8b",
  "key3": "3j763rwvGfG6aWxQhUZmEpF8c3nJejkyKNstP5pGoUMcXPzUbwkDbHpKjx3G6ZP2jWg2TZnJeb1cJk6tkHz1sLry",
  "key4": "2e1ks4R5XyzW2rJ2m5e17y8zcWSgVDELxuzyoevcbEcMCTvSTh6u2PvVJYYMf5qN9nL3N6k8y9hwzR4gnojzuNuo",
  "key5": "4mWEYcvacHZ8oUqznLJA5TDHWRMWo7AF1BPqjiaehuzEHwjQUgc2iam9KCdU5Mms3vWQb1uyJPuzzSvucRWDqZGq",
  "key6": "3dWcaR6CAZTmAfS8KAV7zPxKhh5j23ekD1Zk6i1t9QCSVtPKjQqcfbwGtTtSeve8uLsVLH5QnYzhdTo5A98gnNdA",
  "key7": "2Uc6vTzSn27Du2XGsK4Zhhmj8mLuqcAgenM7EPj44rxz2mKKpA64mwboAxhBAUCRZg2egRPQfimz6hHn6nLZm3W5",
  "key8": "2gAM89G7HJdrfM9saBdkm9ZxPSfV7dU59eL5BjknSLK2HCuCWtt3Hi5mxnC8nvMcR1iiTNRYNetqqupBmWHwtdga",
  "key9": "3A9UMwQ9Pj1AfAzSnZiPu9FRPdVBnxYnP2yJtAi4wqTV4BpYWjZnsJJGgavamRsvuKWHNyWtzDKm3nREyhLHFadx",
  "key10": "2wC3EBAZfd9SgtiZ59S4TYwyzfW4w66KcK5VNuohoCe51L8QesYuLHB4aR8vVjdxHMmcVX4aC2ora1xk3kc2k9Zr",
  "key11": "3m8Eq2sFYh66j7qj4k86rMMwj13MB75prrgEAGAhELVqDFga1orSRYrBeAvHdMBTbohpnHdCm7zKJ3eyFHRrgmJ2",
  "key12": "63huDo1MobLQScq6W7aFLgvxSpgLZxW6We7Ve342Scu4tN17kYGUC6sUsCaSQWuNcj1fDw1PUv5j5eypJgC6vRfc",
  "key13": "5JUQpWf18zte5uhBnd1WjJg79sUd1T9EXuPEuHJz4N96fhoteEYUEyP3sGCXSQpEqYdFUaLh1hFoxvRXYdZq2fFL",
  "key14": "vnxV535XGxc2WBkDxtHCnyxxLDRQhUigM84CXWaKkQC49GFb2tw3s1AvxT3zanD3S7jFn9Gsy1cTdSUTQvnW6QM",
  "key15": "2i8AEjvDwG9fodKTRceCCCmTakXinS2KKZew5Hm2T5THtBarHNFWE1GGgi6dksy3LJeHpWC3QmR49trdi855JLBn",
  "key16": "5gMwERr9rqnpUpyUaYNgkJza4X6K1RJ27gEeZnD5omT4XoFSf6hu6GjjyYfARBbfpy7oses5yMpZK82pVW3agxCU",
  "key17": "3yfAA7mvVqZnm3y9untQrUpxUMCTosrpxsUvL2atsThSkDgn8d3hsN7fyG8qBofRHRiLib5tK28e7AhJVbmazz1k",
  "key18": "31xKc3UTizm68msB7QKJNaVot3ke2oGo1EshF34JspcxrjPH5fRebixiucVw4c5PkRyzAizakuimeqBfyPEcsBjR",
  "key19": "xEwWfbaGFxgpFcTF9ivjM4PYHE28FFpjLz2GjmGePf3eN8qU3HgWZ4uupmQ4UHrRk2kkYvJVHifnirZDZ6jnrcX",
  "key20": "5ZFkYaLJepDkM3nuUT6vAVVWV7vpfGX1UpybJPdNGBZSvpcNy1px7SAtbpwic95nEZm8joUtvEJaN4ZsbHHNwqit",
  "key21": "2rihxh54ZEX8sXQKsHFKG7ktnU3uvBbayeyuEJRoHKC4PD358SKW3ntHkWii8v9K4rSBmykS1PPXFGMHDiW5G362",
  "key22": "41sH5pM52eehEhfr6JJw548F2cKhbsKLcUkqQaS5Q4X63658TpyGEaUQYXRg6QDPanBHPMF8U2Wwr9nPxmuR96sD",
  "key23": "5ASh3C4b1ptuFtSKrMJq8CnCY26dpStpgX96Ev58wpgW5m1vf84hAEasuDzTKtqDVmKihsGe3ADpbBRhghQRxTFf",
  "key24": "3F4esEpyLEFsX23rDESveTDkCniHgXzTaVT2FTxZbnUmyo8irkm7yuERgmRJLHpEcCRTg7RbmvR8fBQJZtDKzMy1",
  "key25": "2w96eKH4n8jU4G87pWujAcGcCH1QKVZgFWHnWkVV1qei1SneaCu3kenqWYjFd5Jrzei8146QDfXfSJET7nWAjHZ9",
  "key26": "4JLDWHrxoyqBKSxjhx2ffSrst9GYLZH5zHtbR8oC2bvRjYnE68nMks56c5RwMwCTyKa57qovexMUw6Y1dd1CLMec",
  "key27": "642DWbGqHyWG5KbxcT5Y6h4KRPtJgU8jLXH6Gs2aCYnhhrsHc5NbHdtoc3UYZyYWNZuvhCEDvUQJTFf2jbAy9wJt",
  "key28": "2BGgQsqgcrUt1aPTqz1dnV3WaRJgXK3KaJyVSsHgMSVdGb73RR7LJKKCoGVCQ8DZLejkhkfDnGSTENpCoPCX4v9r",
  "key29": "5gMU8oGhr23gyF7jwYJYpz7yzUPzW5yCetFGUxiEZhsbsKzJ2hh2vu13xx4h8rLnDiohNyr3zPFCnkYE7xqkKYNi",
  "key30": "3HLqVdiYNaJh4pvgP2YJLoNWwhxk6zpUnyRHKjELQNPXtNZJNmDyKJR8JsyjUK4vcKeiM3xdTYsg9V1TKjkjrXra",
  "key31": "3o7zLngDPHFSwFfDF9mq1vJbvtjnG5ss1ga8NivzcoMi217uS7oMnGXkAqaNXm7VQRJJSQHDXQNJpnUBjMjy6KnP",
  "key32": "4ZByCYz1Dh6aU25kLgWzskG1Mip4uQFLWdhq6eVUqFGQ3i51zkyMbEz2hbquJiczUJ2jxtYSiw5QfYb4XarfTBJk",
  "key33": "Fvhi2mhJKU5TnYwN984B434iwimnUeXHz6ywfUFgpXVJYmf3E6WYo4BtUQ7oL7B8qzXvS5Fv2T4Bta9Jz21uVKD",
  "key34": "tx1K4po4Av8sdvxcmo9dV9UWXVvk92swbYDYRaj3YzNjxDLGwWsrGfcxJC6DxF1aTBLxVUWPmrmNUUR9VynVFs4",
  "key35": "3W7985QjY8i5HdexYc45oLuNoPyQegVnhUV7ETMHLKSE2JyfRadkwViPYAuDhWPpNCTUdVJVeyD5UgjD8zCF8uta",
  "key36": "5M2emXM3xMoSVNzKAKEFyWnyo7Rm7JAsyd2gxDkmhSj5TU8GTCy7ZiiQRitEo4bS5Mgv9Qn2rSjvptkeLUWBntwU",
  "key37": "2Yd5tYYADutbVUCeUK7mhWAiqBXmVZPySZApbJer7jkgsGUpQXDpAAvBJ9W4RctA49X4svqeWJL8aBrT5u33QQmq",
  "key38": "3G5zGghVBKmbrCoT8RaTLjFDZ2XmiLjuwzAC5HmD5gFTPWgC5R9XmGzqVUL3BxCoaycPoSW2BjXQox8SLWcPfFSa",
  "key39": "3EZVEft9CfQBSnr8HucmnqCx4C7F7g1CmkkQV4Jo7Xe3GRbZc5kht87rwjVNUyAZErmyxgUwDMkhZvB79nX6Fh8m",
  "key40": "5LSMEyKbbFcqhBZERiCmi74hoeSSpG9DHzM6WUJSowXj9UyvcAtRX9qsgTMvPumHMvcoF2CMmPRq4UQm7qjsjH7j",
  "key41": "2eN6FVoEhRuGpn9jV9tCDj9k9es29ML53DTfN3tqaQnxM7U5DtbVUBYbLSh1z6sE9zLFcuLA486mN2EamheYRXsC",
  "key42": "4CtEpfFv33aXaw4TjxtCSZNHA1VghtZZLYbi9Hj8w9Vb389ZmJd7mGZqGzmwqSV3CG7iGFPCKkm1hiUdRakhhkXS",
  "key43": "5xRRGt4uWPHdBxhYHceYzC2DCSnreX2rxUwap6cXyE8sHnyVUdyjfpDaT2szxHuMYuS8vwZ1WbeD2MxX9R8F2QoR",
  "key44": "4Vm7UBWhycFsHeZpivpUa36FaxwuDnjZau8JpbKgzU3L1TQJaou3ihAvyicyWpSdXwScFo2AP6u1buUtwwuwJxte",
  "key45": "3a35Jri2NDcz9536BTAdhYGTiuDUU4TA4iwGRr1fmnNXFpKvcYwhuEDvK74dEPHgU8dFsmS5yXKagohTqjsx2AEW",
  "key46": "353BHGygoUAVKx5kivgFCd5w5acoYP6P5tUWNomhcsK8JixAsTkLyUNCN2o3UhBxHqDtxYCHMGYA836fkyHyWH4n",
  "key47": "43xq6QjCVpx1grx2uoM9JqDp4kx5V5KgPCKnQdTdByjjpfqyEBPG7FovLXfqmma5heHk7MFpwogx2dNZcy6jrbQb",
  "key48": "4N1okUwASXA6fSsKWN1z8LV6AM7i67SaJ1Gc2dKmWTSeW4ycSYoLsctwA1EzRH48fzVyVj89kmeRdSzsdZ25Hwrj"
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
