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
    "2noi5uZgPwn8GENFMoaYphgqPzxq7HcCH93XPfHZxvZGorZohWF8RospwrwmLSX62Tqmj5THyN8r1v8cEHN23XbE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sGWYvfMjDShjzsVXSbWNhfwaSJkvk9si1q5Twwp4TxgSmXNuTtf8UnxjcvxwMoZjT7pSEXpnjhxGG2DouH2c3Db",
  "key1": "2yU1VJCA75qibJKVyEPBStmfc8WkeZPjcgi3mX7Qdua6x8Squ6q58ieGFubnWZ1ZAyzZAhRuzbGumzc7eMLaM8BF",
  "key2": "3PnU6UCs4JgE8YP6v8k2hBHNoLh7zwgX8ZKWEm3DnGjs9zoUwqKdaHvHyPLwtGZV7n2bfUJMKLX5W6yzwhUqQuA3",
  "key3": "4J62NCxUBXACmm9SDYTGX89dYQReZ99rmLkyfwbWVi8fSMTaGS4ngrZvbMVQTfoG2gS5sP8RFXsVCLVu6zeXdYZw",
  "key4": "tCHANNGoQEuK13AhubB5MqRb7nbTXuvJ6SKGUvrRr3nZXXRqzYwnNxES2R5XgieJozVLSBypXNYRS1BSVcGsoiS",
  "key5": "4SC6h1mb3qGWWczeMippu7v9ns9n9qH5AXquYSfZiS4UdTVcrAXrqBSCLiRx8y7BSzSTbSPWpR8pd2s3zx3ePEno",
  "key6": "3zy3C29jfwx4cWHtCQQhkg8hVHPtFwNUwxGnfpHhowhzLSoNeN6SaaQ9hQjUm39vaEFdfRnW9ZyLrGREUkXYejVQ",
  "key7": "2MhVrtgpYMjwuHsJDNpUaf8wVF2AboE5xy88C8FGYGns8mBH3bD3KdjzrwGeJfekN1CgDgmHvrubJwcwzjaEo4BJ",
  "key8": "aT99wUi19rdgzR6J9K97gZQo769Czi2jQ6xD7Jop4UhAK4pwiMyjMovciK1GnXELusX84s46C9izVv79Tne4Lm2",
  "key9": "2Sb2hfSgk4WZMuZzLWoJXSZUp75NhZCSpPt8ZncDAJQxi522269nHQBHYfW6QGEiJfZe2PPePiTA54ZaxAkaUerm",
  "key10": "44P1JBLQEinDMdQjaahf9awMvRnUiPNAm9SYPnCS213Rhhi7WXiBSdVNwBSeKVUr6tmyhwTGoK7GfMwy9Ku7pbzE",
  "key11": "3vkA8WJCv1n4vE5fLcPc14d5zUUa54ioEX5pjebSiv7KeVuDWVfX8jNLFMrZdF5sgTRXPvFkkybnDDWLXVBGVdRP",
  "key12": "9G5BcyqSHuQEwNXbsQKwVYyvokvjZBibDRj1dJKfcdV4dHkLRwvhhrikyuCKSmqt5ipUfMKouP4HccdyAXEf4vq",
  "key13": "Ti4NoyR1YgtmesHDSiXjqrLZ41iXAyMZvDf5QpSu23gdx5p7K8mvpw8MJHWrKfLCktLCERZCnWrM6DbWz768RHm",
  "key14": "2Dxach39pccwSXMAPaYR6ZnsmmVSkynkaKGzFLbpdFCePgH1eEBUwa7FUCpij8Dssf87gM4HcpJ6FoHbTARw4GcH",
  "key15": "2QeVS8RBMPAQx7KC7M6RserrjRApdnFvFwz5rhAwcCs6KyQpJxXZ8LWY7kz8t6yF2njHB6uuQhY7dgXEqRMRZtec",
  "key16": "2x13AcyzzDqcp18CADBQbU5RT8EvgtFe2BGXrQHbge7Ga8GisVwAuLxeBKR55k2bAJvetpaoqymx21rPQoimcBPh",
  "key17": "npBkcEHwg7jyVErSU3k54xKdJEqZgFrTEH3jZV4jE2zgbPu7gsWB5xQmCNMkpLqWqGFzrXVyZMw9jC7pXwddJiE",
  "key18": "48K7Bx18XSBPVnbspza1N3ZTRfQryZfiRjXwP11qmSmbRzTRm3toDKTjBm4AMcF8Dh25HEswtvDWqWoVjWnfb3JW",
  "key19": "qZCht9wjpPUD1UTu82La9DSWpFsZXQH327mgWNt1JSEXoWFw2tt3wqSmGXqLs17dU8dwFG3wSxDkVhSBmMQqfof",
  "key20": "5ZEuDYQXUd1aM7diCmyk83dBoNGjKCGpo16rp8ubspHSVssAgNfU683BzQFRntvX7EW9KPRvP4L6Azw8M4DS6Mjc",
  "key21": "244PTfoeZnR2JySyd1UBSqiUAKFgEjsjBQHPfXiuGHkqv8JLfwkG5opjh6hdfTmv5YsnoFY8Dt2dHG1Ss6Y9Xicz",
  "key22": "2fSjSPzUQpq5MEFcVwdeLYdrcLe7kwxVVUuHsXUdRQoe28egN3FBSpXCiUPeY9maqCz2Bs62z4UXuJkeXe4Gc39v",
  "key23": "3QdMK5Vtad1TJSiTiEdt9wgS2SaGvw4259SKhJhkbxgt733bkwAC1bDnmK5t4612TPq7PrQDoZLVqgSSyWVFhBn7",
  "key24": "44B7WJvbDA4kr3oq1jeMLpJcenkNuef7mfGKx2YnmLFTX1jhZqoM8irkn2u6GDTjU5C1pFtBhnks5VNzb41c2iGd",
  "key25": "37L91qz1RnZvDcSAVHRqBiN9aumC47vqvaMa6CD7xn4KDhifmNABUPQLmDpcDkhLfvXuPrS1aKiPDt8eUHnpoWsA",
  "key26": "3QVcsGfeWaSg1mcE6F5ZzhvcgYm9tV64eXWA4mMuGoVBBQTBTSBeyMpAibEaJNvenDrJkq3SR3xwXG5Fow67usU3",
  "key27": "63QvVdi4HQvMifmcX2iSHMWpTqALfPrjX4p9Fa7YYDNTQKjh5S4Ycs1uZPsKaaCGZVb7bGiuVC5rkNDnGsFDNAVc",
  "key28": "UYRheeamoD9fhtjymK3oFUZed12ttwpFQVQ6dRkVXngYkoq2PMLZU7PUQto6nh1mV2PateCCzqUwTXU1ePD22cx",
  "key29": "5kxMctwHwmvochLUsCwFJpfjvBqsY9yTrzHgXSaqEEfD8Cn6jREzrBssM8eeyCoDic14EsfWdbT6nHCUfBsRHDg",
  "key30": "4Nk3Z71bXWgPMEtLK327TnndZuJVwzd8H1RaT7utPznHVAPinsfF841G6KL8Lqqh9YQbKXtqS1ytXnFvAJEpwR6B",
  "key31": "2Hr2va7tUkNNop5vh3dvhnEWLRK32mqgqFbcTp8ej6d4Fp8eVynYhZXts7LxQiFB2EVq5HL4Ljs1FeCsvPtjMxLe",
  "key32": "7jUceVNZ4HWck82WKJbwGa4puXtPxMhN5puFTFZ5REwS2PqnUKX3bBYXDsAXJH41N9VzuPqmcTq7JzveNrHKqaj",
  "key33": "4c73MrNurJ8qRDNskUawDcPow9Z71kBsHm13rezfL5wSBsq4cDNZtw7BaxdPtvq8qWimHnAbvvhd1c5DLxhH7oDd",
  "key34": "3ZUgHxaJUqpD9SuGnuRd4Xo5Ujyhk7YH5nMeX92cMpNTrMPE46igp392KcJS452LbtTTr5bSdvqZmW1senDoVcCP",
  "key35": "5Cv6VXZd7zkitq9ox6dYMQas6vMYvZSHzhMUKSwRnubAZi1yLAu2tq1LoGX1RutMAEZgxTpdG4ca76CMMd7Nfrvn",
  "key36": "3BoRuWuEed2r65zgAX89uXoBn4gZYtB1GEEsQAvsmqxgBUv2BKL7emuFHeBQh5cbZ8LYZnBgtmWBsNxSzAqEuRQv",
  "key37": "W9Nawxu4f9j1LqrruDF3MJGoYdMFserrxVG9aecbmpqXt8aorrYuG3qwTVcw5ePUH4ezsZsymAvQStrBpd6j37k",
  "key38": "Jmqk7mjuiq4F3QmerkZHs6FGyHQakAxnMiyDqncp5FXyR5u8VGYoJeg6AMZScCutLqpJGBjRAraQsDojyBC2ZMC",
  "key39": "47rD7E4VtQauoDNMtof4Yp1UUw2hvJbWFVad5Hdet8xix971iLiBSCwvMHbXXEQUnamfRKhDYhuiAVMR22YZonXq",
  "key40": "5tLBrpXwHC1uEncMedNm1qF9hV2VuQnUmMy6bhku54jyn9qX349v9WXnhC5wkdcVJyWrk3bncXum14QNzUcFMAsi",
  "key41": "CzywPeDcaXDkwD8sBV9jqZgVC1wRTWeBF7fHWoDUUFsog2eMSCm5Zb9w2xGL7Rar3FSektjrAwpGWLMGUn3xCSb"
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
