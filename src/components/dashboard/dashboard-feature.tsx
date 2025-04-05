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
    "5qa3e3x4dtFk9ccBtg3R7BsP41yKmgaHRuDqYVrDcQUix9qC7cM7oxxnYAq5uJtqAMVchg2MuELCBTV8EH3RXVw1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mwpapYqz2Mi7k6tWKV68BCnpsmFWeexYGxZg4wfMRnnWtrzBRtwmg1QAmEd9pzP5dEgGSyGx7LceRUeKWPfUykg",
  "key1": "22kEYTyZvdsbR5HSPoN4auQU4J7wEDucrAAFrnM1qV2GsYkFvgo2S4S58bWwLmy6RJk5bKJnC1V9V8Ruf18h23YJ",
  "key2": "3NG2mEkzCeQBwuBswPMqyKwGt3xuS3yDkD7sC9mNmrvfc9454jriGDpCeu47GnG11paM613okGpBFqdA76SeayyG",
  "key3": "5XaQcbCURrFc71aYGvUwqNG9yfFVyC39NJ3f3RW7WE7NjbuowcLxQLE19h8oQ4Ry6Xv2DEdSADnBwE2nE5NuqJ5x",
  "key4": "24P9C68Usfk4W2zTfTVxqLeXZJhYvLpvYxYcmsUb3WNxtZqts5xAT68vRrAATuRx91mDt4b9g47meSUWjTorN9RZ",
  "key5": "63iNywnbzSgf6d42sWSpXScF6WssRwwdaZsZFcBQQR5qLgc8THUW5HzMW1prs5GmBGtvEaisyRn1X682WXHe6DnU",
  "key6": "3keQx3r7zNy2QAMJdP6cw8mSFWqWJpbmifLR86FeU5vSmNrZdBHLkX2HuEsRQLvnY1HuFyAySBhQ7NpruXpKtckG",
  "key7": "2TVufRT9RgWtAybVksLgGePEW4RdSFRyJoeUj9LpTNQZQ2aFwKJV6u7CdzjTakLxTxAhmvA54VskdXkKykT5UvUh",
  "key8": "3t55cDr3dkJuic63pwBc9gU3TGW2gb1hmqEFsTM1i5tgNMbCiWgAMbYdo2LLbnACkMvzuq2NeG1TyN3nikPWmfsD",
  "key9": "5y1Rb9CQcXpdLeuhmh1wHxmfxmQJt1DTGoSke1fxv4AGqTVLsVwB1TTo1ReAkdPPQxSFRFahc71eyvPq4EjLkTwk",
  "key10": "2mZLDeGoiD3CBrKCUmEfPEUchMzH8Ds4szGudRCBHrBi3rvBeBnaAdrt18kXfbsJefETC159fhD7dYgPePZW1Ga3",
  "key11": "29SNUXRma5WBCM44qCLggpk42VU5EhTAao7sZtTRrC6JZd78T88RhQUen1UcY4xA69y76xGrEnve2tftg1PEkUCq",
  "key12": "2K5HnZLZWqEL8YSjhCBHcidZ7XM4YBhkHH2HFDAkKTtm6VKd4kDuStKQ5hzQdXYeLu9xLezaE6Hs3B6ycgiBperz",
  "key13": "22WoMJ4ziuhBaHcx3JGtDsfFhURJf7D17xqfGmo9rvupx37CRKfwGgVWwhBnjBPFB9u5hxnp5aQsAZKZe1AfT7AT",
  "key14": "5UDGv3rZGSiY9sxneMzRGndGHm4heKbqmLowHPHZE6L2zEPRhoUVTTz63Xo2YLaemk6wowSEkqqfQdqBpBD5ioWN",
  "key15": "2qo4HbwbCeFtbi9UAJvNEf895c4q5rQ4qAAVwD5aaKp3a7wY3VjUEFj5hEuz46pGtx5EMUFxaJJJF8Y57YwErwD4",
  "key16": "3HKJTdLtCU68BJAKTzNzVDhH1QKZ9Kdn5nqRAgPRno5EKhiWeRX4BL2eVtoiVADDjU9oeJsKLcZ2DBMpTf2142WL",
  "key17": "63Cg3fMUuB69rZ3XH9MgUP8rrpKXC3KbtunAgQCfiXMQFRwSGcoxYNURNnYCzPsEgnfmDphYMhQCvuYPagiUEumP",
  "key18": "64k5rPDN68VqB2xqgRWccAtpnC8ZZGqu52SUMRbV26vZNYpSgPp2tBiSHc1DebUe2L4gF2oZanLMHTNJHWg3cgSk",
  "key19": "5zM2h7d4b6gwswkzfgVCQUEa27uUMCMDKkavrdFUNGzeEZorBR33JPfiSPm5Qzhn52ZwxUJ77ik7ctKsU9TyTdCn",
  "key20": "5bRk1Fef61wMmEqZ57BmJtMuu7yQxaxe2N954NFhc92923NtgGU4JB8y6sFd1SJ2EAmvUU9N85QVJUx5CRMwLCfn",
  "key21": "3BThB62Vw6ggiXpVWkcScXpxKHsKNv54quW226ZvamxxhGcdJLdoA95TNThHBThWKmCBQiG7d8sL5wyt8ceW6FH4",
  "key22": "5NkAaFvjhviJFrsr3ogR1UioBnPqCAPHd4FVqHrcHwcHg9Pw7xVNMraASgdCPtQR2Kk2SMz1D9Ti3Km87QvUc33",
  "key23": "5KGwswkWSgT7AF42n7AeEZ4VRzjC852KmvBWNsc5musqhAUkd2YXfCnMGxhhCrYAi2qWnnHdq2WrDnchZaq1cP81",
  "key24": "12h92WkgH9bXz5J2EyTyfAHRdwas1f53e3QcnPpWwnJr2v5kDAostFvrDwwREgZfCcTxoMZ6663mcxQLwuTXt4r",
  "key25": "31DA7xnrUVaARkBouQDFqyvGfhickPU9K5GHQifs7uQME75BbUz91QZgihsgt6ecczuabhBgZ4y1EzFVsnrJUeuA",
  "key26": "3DvxbWVwNzm7TBP9n1kT8rT4h8xthCGpFDsYMi6LNn4cHauTVbTtTWsi4G2CpKYnLtRuShZSmjDnk4MDBE4F3vXS",
  "key27": "3YH697WmCnhKB6hb9dJRMLx98hUn5yxaaun1TNYL76qG6Dp4rWomLMQk8aZMdqTVxgSXz2MXUN4z3yo6oGEv93HY",
  "key28": "5xA66vyaFekeximFVANZkotV7y98geCCyjgQjFdxMj9WuqK7gjFk4XJKKE37MCKDnueWFAv2uKrybdkkwKtLNH2h",
  "key29": "5SE9jxxqyYZb3FC73qiKqmG15Tp4kZSp5RszEnprhcDTHsb2sFBhrgEBGFUgkVu8ZdE12ZFXR9495MgTShHSRidH",
  "key30": "3php5FWWdn6oxKeykuaRAsWrbiXaEjcNGH4ySysiihzdYJJykno1goETY7uUbKfFuwoGLFo498UeqNRua39rdvsp",
  "key31": "wEMFQAaNA5HDFMbdFPum5FbEDkVc2Bn2xmJCs92bKH5nQA3cesMqUi5afArX6RQ9XLDUsFDDzHz3zcFMJexatEa",
  "key32": "2htuaQ3HxWVdwU24twTBzjaAB2x7FEFCkvty2VK74i4813wDN4aYcEkJ7sRUvwyUjDewzKFSqU3JnsdJgdRpCQLe",
  "key33": "3hzfr5gyu8dh64Vjs7VmNt6jVieKf81sHYbNQGfYuszzSTZypbqHa6m3ExQgxuPo9bt28Xf6WmTjfH6dgBCzNXVt",
  "key34": "3HjfDARFYijSigBxMUWrGAd6vasV4SB7h4bnBvzd3aVTZUfz6BeNqEeB2jjrGFzCfqM5H5RwKVDDiYohKEvPe2WN",
  "key35": "66Dw8WAEC9raViz1VhzNbHdmw3WCrvAi6u7w5SztW9xWWXXRVfWtxmqSc3sMDrtn58euPodc7CPvXDgcshQdZwKy",
  "key36": "4688mQr163pjGcic2JhsxSiiAChB6hwgrFyW7eedBSvpk2XWDTNuvKQiRcJztDYkRDBURTKgZn16mQ4mCmfXxXWM",
  "key37": "4bmHBvqN7TFTyRpZzPPYLSVeSAMggujtEvXKJXSqo5eaKsLwgHy5vNJe8cq4Bzi8SNy9qzfpZgmJ3VPJW9JGycq4",
  "key38": "2xCToyjyShGUzEU98aFjjasKGGHLzF9cUrWxgE9xKzkiHfnim527nGLPEej97ow9zDAdskgT6BC378PmS8mbzVRe",
  "key39": "3fmx74D3uLrvi1hh3kWGXnURijcFZosSF45aWrkK1EnbAywCQNs4voVnCpYpVvP95B35cLYwj2XaiKMvjzkkxpTE",
  "key40": "3v9x7Wf7N2Md2Wx1UPKvv5uE9FRVckvtXoFAYUeoB8ScgcjYPjFKUntVyVhVncK4sVoBNJC444QTGu4HSEoqTTpr",
  "key41": "Hhn4RjQztH4mvsbmonH83Lx2nGh4cpcnmkJ2iQ7Bxs9eAsVifWPNdCoyJaAGz4QHTQ5NoZubyXtwjpmbNUME2wv",
  "key42": "4WsYLjyetynbRMQzAWo3Vwco7pVyob5Ro6ZKhP5cArtGp5gpM86ezv5zMaY9B4ri41CQHZqRydUQw45eNUWXdawh",
  "key43": "4vjnR32xzenRkZyshDKHvtky2uWfuUmtkfu93wmizYNZAmYk3Zt19LNCxrdFE9foiSo3dpFmQBxHEDx63vHK4AkN",
  "key44": "3b7ZGDhTegzD13hsDPBVGhKu5TYjXM8jLzEgGn7qsfTg3QNgTeQJrL55pquRXEG8x16SQ5HG2TYCFovLQkhZGiQu",
  "key45": "4oxc37uaEipDvEhNC8yjgiFY8ZSJL4FTZ2fF8XzEPYfapf4a9AKC4YipmcDGLvZyDzZhMRu745fAgaZubvmFaYcB",
  "key46": "4PAVrUeyYGUp7v7SpVhLzo5wSjCsyCBhUv8XaZkC9QEy3e6fWYGDAxNZ3HTtKpQeAwgH6BEvkTNSPyk6nvp27Eiy",
  "key47": "5nTu7NtVuraS4MNQ1eo7xAp9zghdRq2tERLJhFAQapnnN4BgWreAcKBLMsAtnVYvAYJ9rpNA99GK9bVJMUv5uJqn"
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
