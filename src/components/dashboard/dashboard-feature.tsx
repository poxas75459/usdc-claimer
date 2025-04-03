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
    "gqfHiXx9vjVBjjNFS9EkG6jzUZFkSyNxTywq4kpWtEeFH7b1uGdStTMQLz25hzRCfMhQfLuFoU67T2DCdzSe3HT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SKac1N7v4G2RYVbrdcwNQPaQJrABnTrKgTp7ufpRto3wGA7x94A9Ddi8XnjcsBx2xqngoeUH1KGhhPwNyXRecLa",
  "key1": "2Vp5m4kcERc89XewQwCGmpuSxrg6HacVSm9pTYas8z7X1xWAnrsKhnKxSGaRQ5grQN9vqYPhMHgfxjFWxyPF7Lzd",
  "key2": "4FL2AVJQBHo6aSmXbqTPtzCG8tfcpkZyv5r1iQZRs3TV44y8ji9sdFN7sMRrZHqmaYEkzeHtakSkfwYDAzvWqh5V",
  "key3": "5bYYxJrNFu6gpU8bhLgAZCmjL88S35Gjq8PXoV5z9hwqvkgqRmdwTWHwCFGnJEgU1RZjJpPucYgxcXHjnX3QKNkm",
  "key4": "5aWNf2S9aSxGtxrXUwUn9weLBbSw4PDovMMi37hKDpn2MXDT6E4kMppMJ4FZKkhPxbBZWq55tqNM5bc7ADuAi9ue",
  "key5": "65VfVHLvteqJSimCv34QPSzwXU4XVaPxEgpyNtEXhoW1evNtEyhJGS8mLTLEVkNtGcr5T8kjakJQKQ4n7NGr8g5F",
  "key6": "2HNDMmUSVWXSCEPFexyZB6GRDbfXNdVEosaEDP6cJVkZQDwM1jj2R49KGDJsoferSvRrvMnX1zDmj9NWfEiRDcfK",
  "key7": "bc9uUqSqj1VNY8oSzPvFMzfHBFgZfymvnpdaFoR5kYhVGtr8xscoc5jzvNtP4ReftNCruvouvJBqifVmVys387B",
  "key8": "2fjg7vAKWcB2tpLGptxP92PPcGShMeLkLu6bCqh8mmX3bf846AjwKc7JZaCUCVyeTmimfLMZnGqo1aR4bn9gj2vd",
  "key9": "AYenj5LWVgnLT4vhhzHJhGYUgi5YRdjoaksyQq2KXzMPakc3F5Qy8ukLjBMdufa6TdAYKrQWSYvQEjd3hfgjUNQ",
  "key10": "2EYCeo1qfuwR3eubyMRjyWuRwLBZtD3d2RdfKK6kWG1bUg4d6METGm8266inrammWqx6bFbWKRhjZNP1wv4Xsf7s",
  "key11": "3a7hSrcxWFLGRAhRbUmWJ1kExaQxNE6NfnoGr3crFnTLS7DWZcSABmnmZSZFkd8N588eteGwF7iGgWPT7Q33Wrpe",
  "key12": "5BjZ86MnuPPunoN17uSx85WUqwZjMQFT1sDZiNPaSUdLyPyZb4ghguiAaAdvfCNM5Gf4ZpfFZg6dpH2F7jUh8qEp",
  "key13": "4JjgALnnkahQiLrN8knhiXQ2cNukZwbRvcHnraBn1LnduXY1cBrxW9ChLYDem7bwebq5zgUmjV6fmyDiyu7KRw4y",
  "key14": "3EVcZyPFewAPgGsvxj4JT8W9vbfVcNsMJ2mJrBjcb4r6iRxjGpVmcehNeDm1ukJpPJgJ6KDq89uDnqvCUEwfax2g",
  "key15": "3VGxx2pxHFb1xUjVXcmVBofNTNE5nnCNqrnPHUgPuVf6faADk525YvH8LigfWf1BHiriX7rYFc4uhhRJfpFCm5c3",
  "key16": "44aRu4yTG4uDVHbMqJMoDH2a21i2MVCW1t4LHYHEmn4c45WoApVPcYmepW2yL3PRLvPvbWDaSq5oERN69K2XZkwZ",
  "key17": "NNR7p4GG44PfMZTSePmCuwLwYoyrZewRD2Bw6fPaxpz3XedDTiczbAUmdwFUANRXrcamedzpQPuAxiWZb1chBNT",
  "key18": "5RLPAwbCu3hy3ZuQvZ2YYYeH4J8AAuFxZzTa16jDJg9afSRghjwCSmVeKVeyupRQv4QRjRmjnLNGFwZkxjQ77zsZ",
  "key19": "wkV9JcDz5fsxtk1LXwxTfcye1cVrzR1B65ep9y3uRC5JCZZVCYvRsu389ij5SCdKA12j45R4Vojg91jtjtWBmqw",
  "key20": "5EoG37pvVitBrQxqtNLPZg5xHgdLeChoGFF116VDeWCyCb5dQadCCyvqSNuVK24CSSMJ4h4aMGtGmSVFtn836cAE",
  "key21": "zULJhkLY8oERgC5uq8RKZjL8fP8PAG9H36XBJFJR35NiAqDGqY9aFiFqt3EfQhjkAGC4QZQxbGpRBhEdef7CVMT",
  "key22": "37CnD4yEzTveV4ULLUjJqk3pideWZMk4qbWGbkh9EnqJUdZcJ1tXoR11FKHnzjHrNTfwZMDfD4wvXdJxxkyWj1co",
  "key23": "4m1qHMSs4YeEXep1T56kRisu2XX8FhJ535ejb765gzPxTiwhKG5nQFzKG4eCcjzRM1rCGfd6xsqtJ2T1sgrHMCDu",
  "key24": "Hgif14jeaeFacFYEbiDFcpTqp9iAzkPgskCbz7cK2FF9mf3YBkgrGKhSa4jXgSd6VdFagVijjN3QyQU4i3kMvno",
  "key25": "59adB4ixbA7V36yA4dqncFxkDQULDQ1PcmkQZzgEqY8iTQRhXfWPxqYMZhP1Xa3ojjMgY4biunJN1dMusx4kQkxD",
  "key26": "4HLJhcG6BboMB6KGBxsGsu8sN18CXsTpFqfK4v5JcT9LWtARoTDF6cjChMrX2BeaDWTArDmAsfYDkVLPaxeqgBpk",
  "key27": "366pdMJ2UQfWuVnsB19YjE5d4PwJ5fSMyEBThcqHMosaeL1JrfhR27F1gcou1HNjEUh8qSgqpec2a5GKJ7qeRgk4",
  "key28": "q57uyJytMoAv4c6i4H5s4q7ofamtwv4WLshvnbQeUBVWAJx11A1YBMBkAh61ifehT7ytBvBbvs2Y4We52JxUUJi",
  "key29": "55GSe1D3JCBEXfhs7wCNcX63oKxVv1KqEvrQs6ghaBBZyrgJtVCtF2ytGsmTTSF6bSr49zQFaMdRefBawrrdMx4r",
  "key30": "4GdQySFQsUDaBstYi4ncpCeUvZHCgtYos2bWmDZF1W5T3fadR5gVaMxRVEAyPpjbjEKNPiBumwPa1CiUnEToTu4D",
  "key31": "4Ae8MUseKaJZhMZ4y3jAEALz9hiBX1TxUFBTH5Z8doARuv3JyUSLr2jFvZ7e3ERYCoDUdhqjn9UfgovAyjx8Pxcz",
  "key32": "VKYgRaxkJ7SYB8EsDf6HzKbDFAWmU5uDidXRw3d56u8h1ByBDsPq1HfsB4Y4CZpNXovcPLfJryDRHpMSyzLxHt7",
  "key33": "7KM5r3PdwKPxtvF49rxzbjJJVEcyitMSsdinSjLeDnGTLqbAs8ksLhjZH79R67kW3o8oMEZURRyuX5JGURo62Ms",
  "key34": "65E6PcPKZ37342nSM2j5u5YErbZKoKYQKEy1G1LfZ1UX2x2EE5Tr8oE6m2VP5hsVu3hgiap6U374oYLX4gdY1pGL",
  "key35": "2cnzxpvWJfrtB7YV35dG5J1dKzuyabsjeDxCyyf3S2N7PUfiUM3Nx4tr7Q2qczzE9ngHBtbaU2nxmN3mpaDQFTf1",
  "key36": "4PBSAJFKoxgqwk2M3boicjZQghfWJmACC4NL4WYdkKWEanjn46cfm9aaB284ZUNvLUyVgNdpEfaDr1m9A1RqEjSD",
  "key37": "3shq81sFUZDirpSvgPa4tvMEQbLfAd5Mv7kzond9yDmFw9uXzfbWZvBbt8hetdPi5qMw8wWkxmwpbNkA65FJZaQz",
  "key38": "2kR4L2cxp26bSkz3fHiZkGJQyDcPKoAR87bHtZsicJvDX2jUWD7qsvitFNZ4jWPfraRz59Kr4Z8Bt2GvzPB5h7g",
  "key39": "ZSfNiMJwDB7DKejFi44gJSAbts3rTqUDCgXyx93vYi9rCmv4XZ9dGs7CoakgSfKADUStdQZ8381x6VW83m8XmfZ",
  "key40": "2hT9wiZnYnFU1XNgzay6PYRmij1ewB6Yy1AexKzXFRiecPLpsPjoKwexQY69rHmbnLu33m8vNPF9hcF7EARnocrx",
  "key41": "4rNGwBygSth4inTXw6P83MgqeqxxeffbCEKVZf5ANZ5H2GaiuiC64iru1YyD3Wa5w8Xp5qECrjkAQDHKToFLAt63",
  "key42": "5bMfV3btMeKGgbbHU1CFdArZjLFq9ZeTEGuLPfC46hZ7Jt73JmKUtCodmXA6YnNbW6SLrT4BB3tEyNcorv61NN7m",
  "key43": "5AETjEERj3KCws67EhZ4NmEPHQCmUsEBihy2M96hqeA67D23T8AuJvtj4jQRgdRV8csZGFBg95f4F1krWDCpSRma",
  "key44": "5Pj5Ceb6DL45Ymb1bWQpMBSw36nTruVAmkprby14V7fYwUCWw7BrhzuafANp6sCJaYYTdu9eSto14yzRvVfFVfjB",
  "key45": "5pZW3Bzo5E5HSB8ZcvuSLLCMrSjbDXMaS1LNyeJhKpwwNy5dJS4HX1hj49v1F4TmQKdGLQLVKcYwyJP2bVBAgkWf",
  "key46": "2AEJ7uHEcfaZru4iR6MrzCaxH3UBD3GCLKTZj26wL6j65xcv1eML3q2ZuHNksAGbFufCSASaBA7i7YsmkLuBehew",
  "key47": "mTZ9EsXFysyuJHncjVENGLKE7Qqsw3UDx5xVPRcbyiLwagZnLfkiCJ1vay8qGHs28xUFyBCUbLiLfzSfnr83vgd"
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
