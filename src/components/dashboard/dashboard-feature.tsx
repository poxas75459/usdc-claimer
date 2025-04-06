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
    "2jMtwnQRUVpwo95Xk9d5RQwdmq4SAEyw6KdZb2LmtLkDSAwtDRRiCuVUyPZyaShp3v8EAmwa4VNWx6xGsV7sYeC7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LbaSF5reBUHNGcEgEanC3f51kxi8j2iRg4RSSwX5KyfMCt696L1Yf3ENpLTLsjvFNSTfBzdxrFhZbfv9sQBiAF",
  "key1": "2FCtW6hKbBbEvPgNSZs7wJS34MF1PnVDhoWfSKLRQbjM9pvvM4sB2fJxeLeL6AoC9DABTNgrPhnDwthTJ1ZJ5evX",
  "key2": "45fFTiTM93jQQYJEiJHKcP88XZEyzgL8sVFaANAHoKxNcFhEvL9Gg8aZDZUgfjM5EBMnM1wDQFaQb6RKHJQELYW4",
  "key3": "2cj8FaCkujXt8ifLJ4WoswqyxjLAmfQwsR3FQjmnbcGtGF6Qakbb5UrbTota6sTa9ZZpmY7grXGt8RXE1dnQpptC",
  "key4": "iqo1YmboweZg7bWNsJALKahMEEmq4BccTDoa24FsWhhqNXaYWRTeLRLG4vsmxi1tWZWVZETbfsBXG7tsG54jp82",
  "key5": "2ZP4gC3seZ7rVuojHg2aVgnYLxhTvqy33xr11cj4ZjWGHm72BBSPeu2Qvz98SkNJ8DP5CGoEgoGVCNo7T6JsK4kr",
  "key6": "YFNRycDPuog285hWrE7tquQGx4gwjf2EB71bqGBujcmfGghJvnbB5obGBoG4Wmnx2e1u4z4MtnxNWJ3r5mwY51e",
  "key7": "2rr12Kw4EjouEyZJmcEsmEsvUzbEoZKyva9oCUTAnVBGqDr3znvYWUkmwgvdR6SjWEWDyv3Tz5fZgy93pPHrCxWb",
  "key8": "2XRTUSezDRJkC9tvSHp4jy6x71kgda1AFZ88ZXPB24EwuyFMHg2TWS5SLJbq3aBLaehHe4H8bSDBfHmn9nnU8pfe",
  "key9": "6JfBYVTAySJby1xS96T8d35zncxK69hXQdMZkQmCCSBidxTDCGrQKvTKxMuidHPi426ccTHwmJcnwTtw4HnCQUr",
  "key10": "38h2gxSX5y6xrCLabnahysnqNdDF4bsyt2n87bRkkALpzQnYEUnYwo6cnwjmiUSxpVyewrxHTt4Zcds4isounN1n",
  "key11": "3gir1AieJHpoqsnyhHBNZt88eqfL9c2JuFSj2LLkXvLnS1i13rrkwKhWC6zyKAFsgDmuXpj5KZbPhTdJwe1tzybY",
  "key12": "3xCD3mCMMfLKMhzdMEAZP12HviRTMJerSgABhdvSa1NAthdpeWLoY3DQh2NozyqBZDiv6MgAxdmVNSw5RTN2JQP",
  "key13": "3hM5JqxMWWoH5HHqmZNt5GtkGTGFK8JNQ8miqopDaYCEu4FyzRiuQw1ncmxihU9qQbYqFNNc82j5qGYUqZgDpP5E",
  "key14": "64JnufqdNY82GhfFFF2gHSPnrbiAPFZ62i1vCVh5JDkM8E9NJV89aZhauGgkxgfJqxyeufkx17hqjFRMUj25wyD4",
  "key15": "2G1QfgVjG76sGTMwCT3CmwcbYAdryE2YVXgPo4qLULC8bRWJe5KLXsfS1YUskDVCd5n7zcGb6xcpARn2PCAhyFqV",
  "key16": "55D9wVdFzTMAN9ySGKRXHqvY9zusJxMAaqb7UL7kn2aurDr7p8Pt52ooBXkQroevvChya7Tw6sjrpATeJAFVf2qZ",
  "key17": "4DjPGt4NYMXcaWTL9nxTxchCt5EksmGvL6sUppw7peN6c2ExdTLT4P6xEHbLVz7bEAQCreP5PwgYiUjzAdUSEv6y",
  "key18": "5iQv6BuMiTGQY3FQGG6uWEi71n9HX8GAQRK2TEgB7jGmyXoiawZhtfa5TVHyLyiKqYj6z5XifUVzD6oTPGdAMDs1",
  "key19": "5sQzqNgjANjuvjzsgB7fu29FgQ2eQ15BmKNbPFcZozfiNLDsJovwdt359bvJQS3vpVqJXVrKQUhAYbQ1adaUjf6f",
  "key20": "2QS2DEizpYLp8ZFaVHGDkTttJTy9U5xNtsCT6CeCuRRRQKLeAMjae2cv6eWey7pjfreKbQMv75fhQg62YR2YwBho",
  "key21": "4ek3dAKbwrMXXmQPAkiusANZRJBoMb4JJJjZVVDFxKVvg4H1KJA1wsyZp2cw7euTYUiiu6V3Lo956uEWrJtSdPiV",
  "key22": "4cxVghqEp7L7PN1Mqn58NUnHV4LgHVhhq5ZEPcutkk3kRdGNfbGLq3dBZTEdeM1UtopxssV33KhcvKKdx4Hruu5s",
  "key23": "5UHGB9prUkqBvSeSXguCo1YKmLkQanDYM92HDxJoed9p8KRsxawfvKKFUea8QXNctAWG8DicqcSDbgSJyh1wuqRo",
  "key24": "5yBp5EtkR725t4M9mKfsMYbsyaMiAxHjB6jr8oykFNT7hwbkVfbZ7WVakxZxoBnrLxwF93zDDNaQBNpr3xHsZZY",
  "key25": "5dvF6A48LnGerP1V2LA12aGMejV87NkJo98H9u6uRvTDgNxK9givDQaUyhdmxYrmJW25rdcSorkdi9XGMqmSHn9S",
  "key26": "zYgYow1uaLV2fB8ztjJAvpHEcFrQdLLvv3JQWvu3SykP148rXKgXns3RrB5R3D4P85cYxX98Cp2zk1p6gQLHM3A",
  "key27": "3KsWSSSjhhjFGu1CyT2EaSthEu4khbQSvhG9ibpXqR3qgZdPcFMF8ssyQbH1SkdzRJACDkQtSZu3Ma4ePcZMSUpu",
  "key28": "3pwtk85jsY99yQUKeGoHbnApzGpY7mZr7Y9avMk24itYa5UuLKmuZhBsUW1ZTSfxDNvm3VoZLBvtzYimQEnkTcsg",
  "key29": "2W8e8UokkVdcCkupfCZWtstVLKuRRou7rHj8eaLrPUXYHZ5gsgtGMa2UsXErRCnVqXwoiXPXfVYEuSaMy4748Rdw",
  "key30": "qu6RE6xMFpFtkMijJSFq53YKQvDT1sSmc5zgy6vErtE8Wd8iZryUBBjUaw46EbnWHxAcu9Vp9NoFgRi2Zo61yoM",
  "key31": "5TuxP49QprAfZgDJr9J4pbaZD5RJh4iAaAtz357aQ2xLFydHrWeCf2WyWxGoLfc7ojpBT1JCBt2yRCyrcoEb1J4L",
  "key32": "2Kwrhe3CLfviL39szdQ6svQrRqRsy1owf9ieZy5AzFFYUxFk5xc3hwEKmAkaYSQSWWPXvTH5mZNR1n3rRhGzdcUt",
  "key33": "3D2cbUvHFvykRB15NM6Zf6cdNXWc1EPm5A886hu7ATCAxbNsrsq36Bi7KRBmxiRHWr6Nf5cbDfdxezxun5B7gk6v",
  "key34": "49Mmv2xW9PskHQK3vyvbv86U6pnVUpLK4mgCFbV8SrdqhkSbDiZMzJHHnQRTfZ5K3ZEYLm6TYAVjP456A4nwSQN5",
  "key35": "3p74cdpaMbqeWKapuYZ59u8PrxniZkUCJ49pWqd82c7cAbumr1N4ssMwwkrueAHL6GBsLwwUsJuZo3poVc5UfTCT",
  "key36": "3MvUj2mEUrpFJANf5MbkAkvyWSREcWFjisoLqBHPmCad9A4fsr6jMiHhW1AzKTa5m5Lvi7spaYdBJQ4yKNxjo7nA",
  "key37": "54hT7zJx9sjPcVg2zY83rtz3zns9goMod3RXF453H72kxFLvhNWkBNQBp8gBFXrhomBMx8b2eRgYVkEdygEMVfm3",
  "key38": "5XvQLM4tFfgRJ2uSX68mChFeTna7C9X67FnpEWdt28wGRHr6StRAdtM6sXAPqR5ajjTkUs5cMGZebkgmw6Zsqe93"
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
