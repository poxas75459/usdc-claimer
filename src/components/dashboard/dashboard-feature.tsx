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
    "3JMUV43MC1eC3SB2uNF25wBNKPTiSrSS4vBQhXvicNpMudjtg9XREw5GvpXvgs1owb1jrivprnimVP4Lc7wuUoGh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8G5nmy89Fnn99sYwCAmmXyFfhgq5CVdQmaxWzqs7UU8saiiBjnxzPK84sZ113p3LRSGQuGU7K9abc6UcVakzXwm",
  "key1": "3CavXF4cWUZyBLDmiUYE9k6FPyY1g2wWWx1DTVuZzQyQDTAe2qQfzqcUYHxnCU2A83tNBzxLqcE5xurRdYjCs5Gg",
  "key2": "4MfvxRuiBQL86bAPtfAN7VqY2N3koBauVSMto9PLyYnNXZzACPUkKRtQG5BSJU1ZVwva1AsyU7qpVW5dD2PNGLgH",
  "key3": "DY7d2XcG6JLNAsVCBMyF9aJHqYcDxk1roMtpKrwcTXn4m7NtzGJTorkgqNQcvEMkDpkcu3gi7NHmarqMMo9eMd8",
  "key4": "2q4bYFECcAPfS26ix4Ph4XdDATqsmSusXmpBXvbHtRvK1K2e2ShGR8iNvRpE89PjeAE6ECbzsq1EacPpopDHHimJ",
  "key5": "39mX4QqfGNkpFdeDQKbRU4PQCQiouofjQwC2wNWPUtH79yoYBF9qfbFi5vYeYyRuM1R6DCCSQwdDbUerJJoMqHJc",
  "key6": "2pvCeTmbLXKr2Qz2KcpkM838FEBGhodeknCHw8Kon81QonDfkAH7fvYvKsmPg1FzoGMQtR3J75ziKZ2k4NeDv6ug",
  "key7": "Be2RNqLUdZGvmSeNK23gDVbFStrWwF2JwRRzNhxPRoSxtcSXHed3GFSmdAkBSrRt7nibj46Z9ejVi1ELRZa286A",
  "key8": "5NiBBPDQynFimpn6u3PjX4VDVans8bjvGfhFTFPBCupXzSsFNLK3jYXMoNRPf9RAbQkdQ9jM4Fa8rNrPqFHvCabb",
  "key9": "327ihtVd5KE11ejs11NYSfXGPsMhsYrxyqGcBowBZ3S7XYZfigYYnFUvmLVdrZdGsrxEoy3fYUdbDdQ1MvLLfbFW",
  "key10": "3yyTvgHjXYuDPa2rNHSYUB2RQ2FByD8yAxXHJNbVu75bE8Y9yhpkHGL5TU7EDn5BbedeSDKcftn8fETaNDEbvUjn",
  "key11": "2Sfqi8663cqBRcQRG7sQfwKQQ5ogZgUR6DSLjgMRvyxRPMeNrr8RTbxrStx7nTkW9F8b3i8oMq9P5mvVKq6nNDsY",
  "key12": "Xgp6oLH89Cj213jsZVowcLQbYLiSgJeatEPMuZaffkruJ3SuqSToN2JSQjo3ePJ1g17iCiveai8irqQYei2HrR9",
  "key13": "378A5Jms4taLeo87XYQssU6TbmSyVVL3swx1a28XewUpdEC8sCA8yy5dueFjRsqocHQ3NteUAChKGS5UsfQ4F2V8",
  "key14": "636UtCGr9FP6LzhTPHS9X1VsMiLvwi2iFJKgWzLDNbpDBGDVEni2srGPesDfpFPWhp1XwjD8EqJvnqoJQkp8ByVc",
  "key15": "5FvdtienyRZkkcp3sbtXiHdFnP3aRHm1vry3o3BPhGSgMByWHdT7eXSwLGJRQbqHz7GqGQXRaqUdvwMffPxiW39Z",
  "key16": "naJN7X9uT7TsHbWYTc9o6UsqUHv1mjs5Bs9pQJiphbCZ5cLSdHJtAgWv15GXqxH6ebVArqHumgR1MXsGws2jMkn",
  "key17": "P5AnGbWEZuTNzGppYUQb1hLmUpETCLXQZfmxvwu7xVqJ5BiYNLL1RsfQrZnccgZhZeqwLakBVMnEXvi2UtRMLiB",
  "key18": "pFwfvuguUjHseshwyuCbV23noPy9zzhCLBCg5CL6eWhsVMzQkFQwCf75XecTT6NnyErqv8SXHSpexi3amz4UNfQ",
  "key19": "3mVtTAwVWbMBM96L9EDNRKGF6uadgB7CjVpCEAPfDSvFS1V2juY5JUBWwvUzxnjUE5LVfGViT4jT4R4kpYSwZWXD",
  "key20": "iiUnpVhSDKz7PESo7QzyCTAgXDX8XQFePnE2XYN676EfjiTn9DMz21ir5jfrC13NxsDW3JFyXjHqio4SCLufA6P",
  "key21": "62vQCt94EWSydyt9gYyeYVYgNjjDamUaJe4CLXn3s63fR1oL1EEHdxkyo1srSrkB4v8xxaKyw89eKjUDDDb5uSRq",
  "key22": "48ekmY77zDgDdLBo7BQNU53Sxanzn8QDF7z7zpojcP6op5es411iYbGnyRzR7Vmjd4gMentB21a4Qu937j1291yy",
  "key23": "3nBsKbccQzB7mwAVthLepKmN41WGzuCBEjVJqFuvs7xGoTbvJbE8Q4QzXwReV5FBC7PtgDQSYczF7KXuquEC4h5M",
  "key24": "3PEnegvoLQQB1UZVnr5w12AbLWvFCYraeZxcVnB836iXKUTvU3Z7MrdwFDHYSn1bM5YtKVQo5cna4LftyHrfNPhe",
  "key25": "3fMzNYyCTQe9oboSntdphbVjf7dpniKJwgU2Czv8YghUmDjaYcGG6Yyj45pqcY1WavKJW7ujZrCeqLQsZygN9diT",
  "key26": "3jX9to2RdWhf5qRFsGjbDePHoLyTjNRSXhNoVGMpMck2N4pn9fYb7e9riTbcznM4GpcdiZjDU4qMA1W4iMYzFEgE",
  "key27": "QRm6agzx3K263KRwyQbYNR6ZzVfWL8NfkQcY5nKRdveP9BEuJu3mqFPkX36voXmnpbY8qbbmTXqoym4sLoUR5bh",
  "key28": "2j2MVPPpv8wQGESURPRNkN6dH7Sp1ThxBv52JtzA3HRJJdSQ73fUfZbs16gT59g7ayLaP1xNy1rg2u4noBGTTgVv",
  "key29": "3YnVRVxADVwLPujwNrAxzK1Fdq3BJdbiMPac7Qg9Q6oVBkTBMPL4fgBNbpb8H3yJoWsk2XRmaXyqSoxrsKYyv89y",
  "key30": "4xcKoFwgKQ5gT6ezkUju1a9jh8uB1Yjijis9booGQVKxHonSs9qbcWn9YTqXWjXSbtPUzjYYPuEP7hDGCLJTvhCB",
  "key31": "4ChCRjWuDrSx2hzGWyr6zAvpWrhZ3CEkfwvEJPg16zsyCvuVQrQWD2E8rCBn28Ws6FFYMHVhp4NnvurCSy2HcGJ5",
  "key32": "4UoCwffyT7MHVGt994hpCLA8YwCiPah6HrGWnDT6VF2pPq1rMpRRirsSG97hPcAmzWgmnd1XcN9YywjTSeZvCFsa",
  "key33": "3GJ3EXgwzQzfjcHxVrqCyL7GxhZKLjJLoDMkap7v6sQ5z49R56oDUQ3GF48EVL5nNqicUbJHFpnYrowBzVjcQM5J",
  "key34": "2qibk6u1YrWTJoZFctJvWZNtXSveLkQFmsiaNaXANW84DTaRUTCFGVPvfw2xstM7rPF5rCZSXTWyeA9n7hTrEVTg",
  "key35": "5sE2K8eZyHrnnUGUvteuPUxztRh8CNY6BGw853RbnnJPfGMscKMKefK5sEGDZpNKGmWMus1bFL4FgLExzMWDsjah",
  "key36": "4YLoMUvnJSvvR65NXT4hBLuiZWjNb8F9zmwpMos3vyriPbzhGutmfgRqf468MYqAoQjJeJJnuLLYL1MQRXgpmpoW",
  "key37": "2qH9VirHY5GKM4UYKTxRq6qpEP4t4XtTfTQwRK51Dh87fowSChFY71HPXwBt72sLBd4aMYE9NU64G9iisk9kaAFz",
  "key38": "4DhCbVHrNyxfE7AMY7iHj6xBokD7q11eyQEyDT1cdgSVyYCGHC9iwYjEmaA9gyhcHHS6sym4dm85CbyzQ44bHAnK",
  "key39": "28RKRXp4vVPZAatxFeMHrj2B1hp4r9ofC9p3njcbQWb9SMF34DKsAJd5rCPdYnfacZTwN3TfCQkTCW35HRuoVZCq",
  "key40": "2abt7dYu4yMX5ocFnnuL1UYWf3fWqnNsbuZDwXkH63NT7hq6R5YhyxPfszsc1TRUtuqkLJzcRfqGDv95z5XyibbY",
  "key41": "3tX4bUZZzW6euytZNiKSpJ1Lc1GJaxGoVKGkEn3Q6PeJyaY1LNBedELfhLCrjEMtCCZg8Pu8JRuEL6XSCUMG7xp1",
  "key42": "3fX9KU5HfVVSyLdi88jJos6P5SdMByLAodvP2cBBJQv2DU4NFqu9CPYknm3b2kex4WYQR2nXKcWekbUEx9GPtHmX",
  "key43": "25D1v16SjxKptdFSW36CAoLsTrSg2VQPbr1rooiTSa9hT6nQMBun2hZwmqUT3o9erURUiXd5NqvYScJttLYfu2m7"
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
