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
    "61PajsRADAPcb4uHJjRBA27Epvg4rEg2vTrJDS95c7HVuUb8Z3i644WDoAD8AEf35E5nhPHSYNLurqYT9iwL2ZWc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hnGG5xcczKSpHZnKfJsM2fD4ApbPfwFfWNFkdP85EMAsruhjfwjLcdEUi2PFWN3hEEG8hJziaFwbkLpqeBKMg22",
  "key1": "4UMSMXX4WTTuvqkZ1eZLLw5HcprCQAKF1kk7yL1KHYRVSGPXUzauP4q4AiALPLeyJ3UdEsYtisoigvRSSr8EUWNA",
  "key2": "3w1MNx5YDCkbNQBMy9fzzZ1XW5Ws7mtnWwQNa5to3HiZfHVwHrNM43vDxqvTZsBsjvB4SbbaGBaTx4nNjv89xAn",
  "key3": "4ey9vyDqf34jrAf2mpn97bEFVeLMjSt6dhKG8podPAXRcgKnRC3Z8XFhmuNqKWB7khxugNo9d525yBDC92KLrLyT",
  "key4": "27d3YJ2FSuNEKsgEaWMmxVwF6ZgE7ceVGBPPMfMdN4GgDKp8eN4WKoD8xWSHhkvHkFZ6NiDzUD6vVuQqgVkUqMxR",
  "key5": "56mDntTubNHRJ6rG2qTxCFa7mzumZivymFxoiFxEAHTExvo9dj12qnA66idAUEs3ipAuRfEvVTG2or6WQ13SmJ1f",
  "key6": "64qKEcypfKCjuac61d8KskrLZbV62MzHVsy1u9nDL9VL1LQbGnuLyitzawK2UHY1oaWQgKmPFwWg6HmQudkvtDvj",
  "key7": "2A9v51nAiygg4B61kMnByfKudKMBkm7AaNaLF38LZBLhahrkA4A9vpFota2bDtxw8w7soUKgr7ABA3WKFgbrZz9o",
  "key8": "4ugfARxYzHANmdZ3VeU1ZK5HUAPcvrx4fxMYu2JRCUZPkx5co26E9Virr3ZuBtBqQMKfBYq1F72RyxkYzr5DUKru",
  "key9": "2eamrrhVHfvTpmY7nfwyv3Af5pFV6xUrPThGsKPsZNzRFwVXactGh6F5dQuEJ9TZWEUFMoiihWMboZ5gcXBXLip4",
  "key10": "3XzYssKFbKFDmbwGfGmeukYTi7v2q1ysWr5USbEHUbaQNgWjpqbDJkTp4ECqrc9fS1c32zuzvmuGjHnSbMGHTNVK",
  "key11": "hHNYKtAdmGsDtSQaz3wEcFDCtvCxtMVzJtSQ4Lvi8mRnqUMJbzvSazVMxaAGCuxXcvsoiX6yHseSMMMPNYFB39f",
  "key12": "3mgJyaYgYo2YTSFJUhfupuvVER7q6AMcVg4h19WY3PdmtZgTwoP24FTRCRRQkc1qXVdyqemi3qxcortGGMLmWBqG",
  "key13": "3WhegALT6H9yMpgr3BnL1GgV2LmHCv8BxhF36FKyTY5o7ufsZ7pXa6ibxf2VzK5bccV8PDnS2ZnfNuCop9WLFFJU",
  "key14": "3uUCAJWPHVoEkysM6rkQw5D1GMtn35oFjky3tLR1ZFdUhjW4u8FwtfTS8xXyLhCDd8vNbjQW11hTL2J7TiGLAmXh",
  "key15": "35SJdir95DbFdZ9x1cP3Xet9LdfW3P75bY5beYj7qzFtmqHep1CmtJ1qhbdiwyBpWDeubnBhjoJ5JBVycbXCqBfQ",
  "key16": "5riv6qzppYXYzqgVLberceYvyRGCBL4pNHxzbG5nim5GqsCdNcYvJDGR3QEVZxfdbHvDtuVhZAjChTjF73mnkByR",
  "key17": "Ud1NuHM4SePHG2CoNFxEmbgPhiTqWmYqEr9iw6cS2eD7LsqjBmtFnd1HfAFjcA9wFwtXfiYF2k4ZEUxuawCJGMq",
  "key18": "5H7mU8wEwd63BKbaq7ubFHbD6zYzXvGiGkV6JMF3aLHFJjV2qJT8JZ6Zm9XkPiGvBbvN5in9waf4KFDTanTUxEBg",
  "key19": "5secd49UPngnasaVyb8FoCZ6CEguTn3sPfpHac8qFZ92WbcmyrfUoEExiGzyKbC5ZLNDn9aoEhxyqNyEdysJeWrU",
  "key20": "5W9ecoj2JhFf2sNn31LWm2vvmo1gdVLeaqc5QR451yr9RNF69m9E1HsprqeDRVM31bZtm9J9humqoD3VuMoKfpDL",
  "key21": "5BqZi2qMnnr3bRSnQ3ZZ6cjbW1vsXY2jivUF1H7YnDkdYxRbN5nQtitYCmW2NYHqUm7soB737fnXmnWrZQXDZHQF",
  "key22": "4nEJuZ4t92xDzhFEZzkPCwbHUze7Jt975CsZiJ67t3d1msJpwMaX5W6FNVcEPCputVXU95UMeCY9wSjK1awYjM7Z",
  "key23": "4gVB5LLXoZigkuHcLLLiszarun2fesYGEhpsGthYbv6dfEgbz9VR9rBA4A6gP1V2n8PDuk9seYkqgHqahrjQepmR",
  "key24": "5RZYd7F4kqUvamia8R8PXJ1Wxi7k9fCTb7hbPPjEzsUtEe6bV3si7XchKrbKCbvAjKQ2z7UHFpuUdhbbtXUQ797s",
  "key25": "2RvfKB9zQCpWNvtpbrXX4Wwcth6P7d5eyxXiKX6Z38kR5Tqe6r1hsR37F8GbMibiNvG5zfSEgK1s35qVTBKWEx28",
  "key26": "5HovRADsTyzZTuG4oaaVyuNxSdz7R111JRtMbuR7B4VnT8rTReXTDNM5actvofr8CFQJjUcxvoLMJyfrFDRGWTwh",
  "key27": "5Q62ct6wPjRo2Mw8mbUH7SHrcNuF4vAmrnqsQp9SVD9uNsacSNnF98EWkW6n54zqbkmbApNg5JKipihD52aTaVdh",
  "key28": "4LfB8rcJBZ9TczyjgtpVMpEixTWAqhnYC4A1KTYfgTERv6refwU217td7kL6Qe9vbu9BnUp32LuqSJUn8YNX15e8",
  "key29": "wSKk7HWmc6GiG7nUJc58Yz8o9V764FhgzxNLLg9rAr8GKzGGsib5rJ7u41T8xE1Jrr2aAj8nx9kfQeRTutD1cdw",
  "key30": "3PnJHNQeJpE5rJBJ4cEwcSzkDs1kntWReuKfR5heddKT65YwLVWMWgdY8Ge46QWFtWD8mcxRotcKaXEaC2WSHqQg",
  "key31": "4qiYHr6Z68LM5hX4At8QXjMp5YSCTnv29ErXiDsVbQARH6uUHu4XZQQVJTFx4CR2WwKioXasZioFdVQtMsDa2hev",
  "key32": "38JqT475E8sHLjXu7J8ZWjdgD2RRxyMUWwLpDJrAYrsiTrNKXy7cixsUPcUbi9Dq455ZghfTk5ZVdLj93cNcgYQ3",
  "key33": "3QsLgj6rvdFGvH6v5DnmsRhPjUCXNgAgtTb8xPkYhdHoeUyZz8XF8iTAWa93YBwv5Lyd1EzA8N8p4psWraLog5XQ",
  "key34": "2jP7Bc1rMj2ChFgoYtxqZzcfMmw1sfhxY4vkhKfw94yiDL7Vv1LQtCQeToGUrqcCtEwzcyMgmsVf8rzSLUkLq4dz",
  "key35": "NLoWJxMuwLDvVMNCbDdhHncF1XGS6F4QrhZVUDX9JSmHo9enwFkqKNSuG4r7SaaLp2iuD2c9dpXYGdD2KPToa3F",
  "key36": "1goZj7gYuXCAyztcZid6ihQYED8Wx7JJXPumcSq8TbifmXijprKg3WoguuccGCaf6Wq4AeiFQzeG4ZoZar8ifrB",
  "key37": "2EkyCMswnVQKY3FsFSnrsThGAx9UtCaTTk32uVXiMtaeJxCSseyp3fznrBUa5gBQRPg3Mm3uJgXGWvmzzy9SpiWT",
  "key38": "3XT8fDbFo6dg69FTepDL4K14iB7SvwDMN8v4ei4vuwwFPD9HFnHBJGdYPixNE4fPLTAYsByKEDgmhjtSohtXLgnP",
  "key39": "d9o7tvjgVCmWgiZDB7bQRixCEQhDAWjYLCYgKRyZH39PC2QGmoiZFgc1H2bcBqqJn8qmggjX159f17f6hmLQa5R",
  "key40": "322zpermPJB2uuUKEAZmBFwiMLCrCjStfk1QcbvaB6XyStc27GLBgsa4ZCHWjH6yJSyqozVKkJ1nSJq897PVBwym",
  "key41": "5nmJ1ppKBwdJKjKrXz8PxMnyrupDr58PwYVBfhBmGQedpecgd4358jmSAJ9xHWf82CH8nMoxWmy9uoES9CuzQS4o",
  "key42": "5fgm7TrFiujNZmCgYUhJ33iXRyjDmFpns2SJ1vfgQ6tNKp3eJ2XKJRxja3V1y2G3tPS4XB2no9fBgoj9p58eBTfF",
  "key43": "HBShwB53hB47XsAwvcpWwjRpX4e85adPD4BMAav26etdK5CJVgnT2xxuyAqL2ErHYbnkg5xQ2wrfa1YVsxU6BNS",
  "key44": "5P6a5rF6MedBCn2Ego2mmUWS8WDNvKdCCf9rbMXGqKDKeAkbaGuDaNgzh4zZhMMUhHtLsN9to8Kh3nH1wynH5mFP",
  "key45": "4168VhDbSLrfrxbrr4XwckEXa8hj2ZPdKGaXfMKqXd5QtMaC3aeeDnxbtuNNfL9cB4rM7S1uky9K2kJKwxMCiT82",
  "key46": "iEtz1fZGhpetiFZ9CLqBsJRpgG1EA4ct4fJko154ox2Z2ULPhPSb8qyKunNLKaUr9N7pFbZAskKFiyhjiaZEYzS",
  "key47": "4KTLtdU9KSxFtoawnrp3dNgUARMm2pkirUjuj7RpsFcZ9pz6KCGuTyFPkBBU6E5zjrwAndvV6n8UJG9he5dg7BmP",
  "key48": "3pRi1EwbWKdoWSTD4etS7WKq7JyMk8YvferY31YU8rqnCA7TPwYjaqTfZYkZakNpVmggaDHUzQGRZjf7a3pwzZ3G",
  "key49": "4kBm7mYYHz3hCY75KkELcq81mwMiCguD1bhKnZPPTdSPjM6wR1LiHWZYTf5vCjW5b5KRFXzRdYTk9Ut9xuenkhX1"
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
