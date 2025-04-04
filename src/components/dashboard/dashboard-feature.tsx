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
    "3jtJkwtuMkKERBV362QZtGXVATPqNNsD8ybg96UtsHWsiJvJo6oUEd99AanACMBrwUnvDE2oDnGtqLhfNXuS99L3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yd2vvHoMJAboDMJsrvVREXnMP8mCgZ7sQs78Bs4J8CRvSCWKKHSsVJGFUjqLNtY6oiUjH6Dc4mUHp8xDSAPihm8",
  "key1": "4wCnemtvDRbGEgehwKb2FWWMAmQ28GLYispyYtbjTyd72LePHZ9k9tw3G57nQAu5gAJj3xjs2BLS83dNtzw574DP",
  "key2": "3eaqgBLWefMJ1YTmKsXQfWWAaJN5vJUn7pfSDLgZ8TfPPc2jD5QeHz4K6NRTaPQSkUbuw8W8jj97DwbVQNDHytzU",
  "key3": "33NWYZWzoTR8nv5eXcf86yoH43mh6FL5fHfWfFzzJjeHVEtoSKa1LP9rcvKLiQT6i8Ck7xHvmMHMLrBb3UDrnZD7",
  "key4": "myro6ynG6JGuEhwkDKMtuXjhJMsVqjD5JoPB984vnFo4rixMgQDRTeZQG2XLKKUoYDCEe8qnX9RZMLyxmeufvCx",
  "key5": "4XqsEirxzDtYmLxSLiqoWQfdQbkD38U2oewat8wFyjfy9XoYLQvrPR25fRbzZSpdrrPfSXUD54Y5PYnfCHUYRGPs",
  "key6": "2HFQoNC2U1frXBKJHdfw1LNDqvMkNwiHRZHAjJhzUoXQPfXGb13QgPKwQewdsDRZgimtBVgvEwbKv3DeLbAHoJEU",
  "key7": "HE9R6oa6B9AwYX3PjsK7H6Bng6Hb9Z7wiFNnAUKRHUbore2ptWqj5v3CPf6usFWWacZUQ4s2LnrNnG2DiEic5WH",
  "key8": "2wCiGMc1zuwRvUNHxF5UHD6tup7jEzZBUwujQGFCysDyHhqQP2L8fVGK4atRCfA5NsM24VJBmuYE2eQ2f18pJUqc",
  "key9": "3R9GgjmH1Bx3QNivfjFiicHAoKnNNPA85r9MbB9HGK14daE9snsGR1EECDvp8gVwtBMaoet25MUr2xGFFEDVdaGC",
  "key10": "5J8h6md5sWcmQYSYfCnfLJ4NZnV63HPRGN2DNgwGLqFhh6sq8Xzmd8mMMYDbTRLiByMF82yob77MFxenXwsM4bua",
  "key11": "3Jgf4tpWYzJMqngrupfZ8NTGcKiJounqBaGSkVKcdCceMpp1UGyCzAg2tEDWGS29KXJeHsfr3gzrcR2ftW6qGbwe",
  "key12": "5tct76upttJnqnJP25WZGPgZtuoyhmh9p1haZRRnpWg2acZVYWAgp1HLNfFfLHaVc9xeMd1fndGfkrycGsBCSo1G",
  "key13": "52wuWFQA49BCsC8Y87hsocBG2cqFPgsA3HWRVz5ZhC1X6PbsUrcKx8vSJ9igPa72HKkzKfSeHQMtJtcZwvWns4vJ",
  "key14": "44MSZAurxNrPHBP6yrSvL8WhgjEvuMcvpJKMzytpMgbGyugeMSNXrygjhUuCz84oTwGqmmixRizNHcHifPouQWum",
  "key15": "4Yt3Uy166uJHUHbve4WX2vwKSpkrzHePTeT5qQQ1UoTydspQBSopq2BcsUUoGepmK6bzfnfDBF9zL2pz6tgUbqCS",
  "key16": "CYvyQG7uQVHwLM13QfQg6R6uN5CypzucHH23DKwkSTc1J9jqLPR9YjvJvrNue5zpMxtTWkmzDzRCgmrNWv59J9Y",
  "key17": "3HJnqsnSs6JJm5wcw44cmDKMpgUPj7CAHZKvooVEC862zszT3bNdvYuhzXdMsmDAUhjBybktDYEn76kSP5M4QPSC",
  "key18": "5TLiN8Qny1a8CHPQjLDRtokLcwiQRjY8v1J4JrA8XSjovzBKJWQwm99c6QgmZmSsD5fTg6kTfsyPHn532SHBWgJp",
  "key19": "2bDKeruAmhmkS9gj2s8rxpgqjuvzAfJksZj41G1NTV7jCGtKNr5Cu8jFPymkc5t73YJycwNEC9WFAEDu2d7x9BhZ",
  "key20": "4nhW5uzvK6B9dx1UxK652x2pnZLVTNB53hnzKKQHh9PJND1tmMZ6XSPZvRdv25RKSEsgp1GPKPS85waWAYapvxBU",
  "key21": "5uUM4i2UkeAEeZ6R8DWR5gwAqRdiPcMjYe8ecB4hynBRV4xCcrNwNd3JRUJsdHBkZeTStYLaFfF87q23DB6Kwvk3",
  "key22": "5uAmvrqzfBmpqx6Dp67a14N1pSZJbQRFquojgW8MJ28sMbEVLd5mifCUM8PQ4KX5CPQtpauw3vwdTRoohcaCDMEg",
  "key23": "3DPcnptVadxETChCB1xUsqCgxaWkQ9irt23Un2A8LMwHsYQvB5WjguupLf3yxBKCzsLTRznavTppDdYbLZDGthBB",
  "key24": "37P5ktXNbi6yxda8PD4eqiujrpPrq6HXPeFzvpC2zqRZAY93KPMRpSbqkCGvYikT5NbSTScKoKb3rHkGrd49Kmhe",
  "key25": "2HETxh4vJYzFNGQLXSG3YK2Pf6K2BkchvFSwpYFPM3wRaRUiJ1e2J7dm1tU3jPcKuT4kgJPBuFnK8Ema5YUB5Wni",
  "key26": "2UJDWEqRPjw7nRj7zkDwVipVShYP8MUDF3R5yifrLGi7W2LncJrTvryY25Q6Gtu3QLLn7uKbQEhRQNcYvQzq87Hd",
  "key27": "44dDzMNdDAhGL3rB16zJ3EjscwDXLR59HqVQb5cwnRNkLm6UBXPun1wPdKfAPT1u5xYtF2uypCmAt4ictPpw9Kum",
  "key28": "2chUieCkxTsz4Rc5qeAHba5EHkCWfEjbU9LGTAbaN8buCavmHir1JDPQDRpYzWGRub8TJoZZZbvgM43tA8i6WaiY",
  "key29": "xmbSKP25VqaGuT4unMG4KixWDiCTnqGKJEuyBXgpYGtSMa5RvCaDcbosEk93BZjLAJqdB6CGHHnbGAYuvtV657h",
  "key30": "4sYizQKwqEsDHqRoAH3Fq6P9Sz66b9kULveo4qY4iVDh3vmfKCvzsYtq6MmwyepTnnvQEVWwxV7sJgBBYsikjELn",
  "key31": "2ffFimMprz7ZySpyA1ekRiXrs4HkKi4f3AqbTPvNhonKGzAJ67yKdRKnpcC7XnbWB1cFdPRhdFjxRH8DruAJBDyr",
  "key32": "4nMaC3C9DDSNEKg3vZ4tqT8L7QvtY4GAgM45wv3bodwNyp52crCTrurp68HPV6jD5uDu5sKn5io7wKNQtfv8ihM4",
  "key33": "3hjnReweRqjU3Ty5SeFNDhM3CKpJF1sSecJbZwsovaJwmGx9QCHvvk2ZAc3oi2YyfVn9ztLnLYPVGFz4SjgsNeWq",
  "key34": "3reBNA5khyuYTwaiochbPjhqdbmh7XBGSbJcs2h19nA4htQx1uKVtjjNGEnhFwjs8gRyT9qpKqLSXSvzbWZTxwoD",
  "key35": "1pzMkLp3SV8HpcJeHq4kdbCAArzyEPPQxtca9bXFJ6kU3uaawtzUtoUoy2jZMf7PMYrrgmEaEVNaiV4x6QrvNbd",
  "key36": "wnMiqM5FGs6jE9gMkk8EkQfHVqkKgj1ktmBhwz3jVCY9iDbXhiE15vrouJQpLmDGVyjhgCsx9VyPTDpdw4jfTxg",
  "key37": "4tH8mbMSN75K7q7vhkiV29bT3D7dmDbbzuNNQoL3D2eRDLP2WUFTAAp8US1yoFsyDLKg75BQ1xhMeKiEEt1R4bsC",
  "key38": "2nYR5mJ1tYDTcPjvaw5ACNyy1TyXL3W4FaxotDX4d6MgBp4Co9DxKYwbuhpyoH7jia177ez6ajxLNdF49KgYcNVm"
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
