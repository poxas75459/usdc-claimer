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
    "3ZWci36TGESzuHviRZzCgsH5vTdUrAiRcNHux5qSWrwZsSrywQUHYNNvRWZQHnqKCrupASKsMr5TfCXyd12uV9Dx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jHoCJu1c7Bs5wow1HwXbGJzDUeUc6b9pUo7kL2bJRRZoCQrJRpm1M55WzTogPpD7RaP141oRP5coZqeR2JLBLRy",
  "key1": "4wvX2LveAtr6XigUKu7Z7Hkg71efHukx9S5T7kmfzcMUcQmn3uUmQQzRQGKxzy8wLdAH5vbq3xeEmrjmHzj2jQEY",
  "key2": "TKDarvancqUwBQBBAf9Erx1NzaqskWEyG93hJYT3P5U93sHibgYu2pySWjEWe3jb8eMeXsuLTR4GM9onZcEPyJD",
  "key3": "2GWjoZ3EhsYC5FamdkyNBWFEDUSoNPFY3GRA6Lix2Gk7HLr7twU8XpQ5jLoL2VGWW2Vgs53SPiSfxyqfRgQx1B2f",
  "key4": "2PDquFsQZRPnLNr9H2kwntjg6mdCzxNxJzbRuqCvx8DDcVX1eeL9GhveC2kBFPGx6cRpZtor11L4e95oH66nnFpb",
  "key5": "SeW3KdjJAsypHgQVpCa6DBQHbSDcTbML95CPHqt5m9ALb8EMNUEfCty6uMcREHTTXcskfzwFX14tM58aoMwyDXp",
  "key6": "ovRbSrVakY42Rt6vPStd5JTWD7Q2ZpsKAZa21mEjbZvZLEJZNeD8taJbSuxF6jLZMFpW7FZUuzEpNnaDY7KqePu",
  "key7": "3dQAFmhzvDTrn7PwXV7z5Tz4ahjnwgHoxUHDaqFr9seGvW9CjLR52U4hRQFqsVS1szWGkzJi18DAc5n3tDfaVMSz",
  "key8": "24JLP5KYPx8anmbdG7k1gDYCcqqi8YffXuN4DWJsKrRhHrp1LfqA3TbXzasTsvKVZwiVrxoYQUnKaSebY1Vp6pAt",
  "key9": "2xcJi4UbBpVyQZfS7URQNz33AXWG17dFasRL6Ww7Q4krGWNdbyfAXhLfCSgPC947iCvPx8t5kWTiZ9DaCRSep6bm",
  "key10": "4T47Zrx9AybskhjBrcchrVDTa6q9NYLeAemWiki2LYJF4PynTuWyJnXcdZ69TNaduh65cgVWqoiSPcUXChrMrUoh",
  "key11": "3BHRehAMqDZeturFEn7T8ifVnQSBTxtFyFn5qnEixdU8B1Kn8TXQTsxEnF7gAC47fmUkiPjFwVtFsMVJmEi8nu2u",
  "key12": "2pgHx4v2tUBe4eVJAkWbs28DcSgi9yhPdofKvQLoce5xiXA5MztctsJCBe4JYYULgC5EbpcGeeRrBUjx2WYQNSqH",
  "key13": "5qiAk5PTz9AVF1MU5hjrtECahvVteaRhFPVJ9GJPoRKcH5it7EMTc9vqyCZ31djyUBttnTQyqLXAnLdUkJJV2xVg",
  "key14": "64fac5bLiLxX6jng69Zk9kpM5tbWA9yCYo2aNZz5rJUFseiMPXJjHC1AQ7UCRfVn51is61PzP9LYZCUBrHQaTn1o",
  "key15": "5TCjwHmeoq3cszecP18Gf87jJ2CcX3MGitZVdawn1Za3jTHggVdPSWui5v9K9xM78oGwRfU4sM5fc14VJnwya1vX",
  "key16": "uFJkqic5DfuU23y8uAbYgkBqZFCop9jqvecnN559R48pMV8MJVwfQs33QzDDu8LhnA6fEfTksV8RsKtiZjeDha1",
  "key17": "4o6Gc3mEqrW5gHSFtTnDYi9Jh7YvZWeGUeJeVNETaJcCkn8iVf5Bzrz856PzfHcWZf12bW9xAj1YTCZ3h4ZnprQg",
  "key18": "3dxNYuXjHGM2Ynk23NqkbwnMogNDpkh1FNQxS5WDqPYkaHSGHsxdiEnz9jVVRGhmX27dxjZ5rQ5cKvUiF98ARj4s",
  "key19": "62qtyn3yhuSRMVmVwfr9BTrmnfNaJeCVQVaCWvGHcT1NeHqV4bzQe3Evu7SyPYhRo8Usw7sLkJX6ckafVd3uYcDu",
  "key20": "3imz3eaDNobZn71wuQLnt8oUtGorM7fvhtWjmYZxadHm1nJcK56uCocbtSnRdVTAdk5kasKc7MoGkAr55LCeoZBK",
  "key21": "3o4tq7etWAnRr4RzGdfC7spYAiiKg6eAyB4bmxr5MPxrUcGqiByXETRGBhnwCYrRKzn39J1Tjf4c8w5zi1BS6sfD",
  "key22": "4goDj45NdopzYFsjzwiH4C6f23sVAEoUWAFfbEH5Riq9oc37hminQ1Ay6j6hFb6MfQCxXVys2sJ6hzXrkS3ULW7i",
  "key23": "3oPj7wq4Djjao5DKKBJuM768Dfe2T6QRZwGaRQM8rRNF6AMoavkNjGYx9H3rp4WpAZuYg1RSy58d3jQ4UqsPQHHS",
  "key24": "zvfdxYoeE5RBCx1doz6FQmhTFrFYHoxeGqS14LzD5Evaioa9wzuuyr4kBQ1w1kyKjb9V59BkWNxCWaemLTLYt14",
  "key25": "2NNGHJbkdSp3jdRCHkbx7sccdEUwihR3TpGaV5XwzTSgkJwNafeETfkYWnanpvvvduR74kkjXoy8RnLTcGpbbmBv",
  "key26": "2UJJ2DhTdzBUaYeu5GNgRGg7a9zrDKkEKJk2CEg4jRtzAuVxvQG728hwyLvrHcDqLpNpEy4JRPhbY5pBvPo7rjJh",
  "key27": "3we2zgpsZzpfGHaVDaK9KdZHBPaJCSU4nticN8sz3tLg2W8fHT9tBRGKczU7QapeUy7pBkU9zffdMJALtB2AE8xB",
  "key28": "3NTcnVDDKC622oPd47L9QbVSGNCJTCRrmp3FDr87e7JbZdMPYGxaKeHvYwBrtMPGpHS78rbbinuNPNe4C7jdVVZc",
  "key29": "4NbQcZ61irojEdcHUQrJa6oNkxutLk7P28JfTGogJD7tzD3QbDZC95wCkWNrwvs4vMAvC6xcQRFUGhB3jkq98sQt",
  "key30": "qbJ4DXsp9H6Ga3ipNE2CPFWVV3UmKXTnYXgA5NAtyBiWfgKVPEduyGzgMSnN3CsDAdv7jSSAdqg15S448VZWwBd",
  "key31": "5sNbhn1QzSKwssNtkyiXPN8BXLXNm1DbvpgWMv3v2EqfReEu6NXeHRUd2CwwwuLLHAZSi1gBPsk9rLsENE4iffxs",
  "key32": "4rTDEAkEcMLfWvU221w7pHmCeTLASaX125coHb6iQKV4toJuqK5ogBgAsKxNwcMy9SiHTuHYWH2ESJiXMDpQtCdL",
  "key33": "4AKsQN29tCWo3LhmVK2QM6e5x46bKUhFSjyDpYYbywyaLPH9w3oc55byTiaPSwXoDXyYnRsT4XVT62rB7rbHdfT3",
  "key34": "2BSM1NNjsPeo4rrP94xPBko7CsENons8znB2hG7cLmVv1d52KfqLxNGTbDN2WptmEnCtsxamxKqq98bejcVTUWEM",
  "key35": "3MET2zfSvbP8dzyWFT4sMt3Vq5NokdouuBdgPbSdXaTEwjeYcUXvkh61Prr8TGhaaWFHABd7sjPSMTVQtaAf351D",
  "key36": "4X7KQZfY6HqWbwUCmY5t8man9yaoCeggNBshWdhfwYFoznYMA8GcxkkFqiRoq3qEXfB8mTnx282q7mg7KngYfha1",
  "key37": "2n3Gb7NGRvvAXHxyzRKduZGs6z57R5vnz2WmgKt1ytubVHdXMuzUdEM4ZsXGT3yXed55Vw1CKxxVTXNhWfGh9nbH",
  "key38": "in7HQeuEt5aR8XR76YHMzsupaVgPy7RYiZYve5HaQ48zKDwiiCWaGKTD2booD1JvctsSGRk7oQktBWgCBqicySj",
  "key39": "49PDv26nGyiNizuqf8eWkobhizyH3UZ3rw7XhN6h8BpAQm74oX7Wy9fRi9qvin1TXGBWP1Mr5Cgpz9RCSHnW5iT4",
  "key40": "3XMxkCk5sXH6eLSh4SNEXGrSVVrTfuL6UZZbChYyNBmvBJpNQHiXjiU5tW7ce1HmLSq1zSTRAqbnNZWYmb7nb7Hq",
  "key41": "ua57CGhipomtgH5m6N41vVtS7h8Fs7yriUK7QvF6aNN3bhmiK14uXSfMNncfTwkx4zM235dTLm9zg98KkrPsbEW",
  "key42": "3hV2KNJi6vVchoPCMR9X7Zp6gYFi12i3WcrKFVH9ohrXJsT2ZYcQEcd4XvEFck2mw2eUDR2EF14JC2q2WeCuCd1m",
  "key43": "axpsGdDtUVRmZqBS6Pz1Q1PHFbyUh8ZjWNoUC2N1n6guygobYmvA7LFbhjztn6cCGinRTyD2WCv6iJh3nbqmbaF",
  "key44": "Pf1Y1dsyp1o8XMBaUQUWNytxrHQWprfdHzEiS7Ljg5H7nsqH9cMUDQ38id2wGACcEF2afoxWkpN6DbdKMwrKGdc"
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
