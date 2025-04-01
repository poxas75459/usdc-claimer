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
    "2ETdx64qfd7TnQjqDLRj4YS1KFQoNeijVtUcbb7E1A9ddjsW1ip3Jy4ge24CN1PVYcThBMjzsd9NFKPxqof8GBVG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eztc2QoUxX53pbfk9FfJCpvbGeoJhjomb8h8esK5cH4kta47fN9V2QBtJRHoSLMoqhLiFyYgvWy8MiFrTBA3ttE",
  "key1": "4JMSUxDK2QWtK7eESHrLAR92ufQzpqKZd1i8dPYFsvuR9dCf1qJHVscx3P8tr3Md46KcY6DeMucheqEhnmpBo7Q2",
  "key2": "5LVAd6gYRkVXADWSThU2UR3Cj6UH7F1m8YpJnkM7rT7sqruLrmo2sDSbfY6pTs578TUGsH8aaSSbF1G5PoJctqyP",
  "key3": "2s1YgXzFXnWdUZkJEtBhFgKQYbC3y8qsPx7ttgwBD3R7caXnyh4eJtNRRSv3rLR71oC1nwgWUaHuijjk8DBHUigZ",
  "key4": "4Qtkd9gZZmoo4GUHchAYqWNUi6oLxuRBZBY5TB3MYTbJ5JYJfukCbVWy655crRZ6L6kvNGaDQHdgVi7aCiepgU98",
  "key5": "62CyaPd7mxWyNQcZDXESnhxVGqqxDeYYRSzRRiZwJcopWRvgQU53e4u3dGk6fvjbtcSeVa53JtcW6taMNcp3T1jC",
  "key6": "42FVrSv8wL98y7yBCLP5XexHKmHpRJXsswJHZkjHVVU2aD3tH82L4vasQxi8LhJczGqa1YcBt6uPXGhV9ybBFBEk",
  "key7": "4v124DW9xc2efRx3bVjATtB8ZcbbJZFefaq55EA2GJPe6XN53YWNATT8xoaHY9XxtuM28tHUY4AeH3tYkvg39pd1",
  "key8": "2vQPwDTnMrZsYMRBDnhh1F1YHLsue9gro3Fm5ZiNsmx6DfoKoTe6tgSe7prw3w9oTRptJssfZ1eMhiZF5QP56Gio",
  "key9": "4ZiE1zyT3TeZksSg32mdd1G2PAu5dmH5Ut1GQhXmpe3ffRQFcfG1YBBz5xTbrXcxmWANY6quDSU8MgGj8cKafDJq",
  "key10": "4XYrMBizYvZcQrDziErdtMdXTUEnqSo2hNE9w9Nxx938E4csBAMAog8TeCZmoJaBomjHB46suPAiYEE3tDkifo4v",
  "key11": "4NwQuHWYk2tjirapcXccA8abQ8DVWFsnu7p18QKh1ojmvYwpwaKEvSxqNXgvVtQxN6tD6C595ExskJu3uPa55TzJ",
  "key12": "5T2CV34ymnXyieHsUFeDL75wsMTPdbDd6bhTZ92JSQRujscAQmUb3phUrUefEy3BtFgxDhMm1HGHYGWFhfvdmJc4",
  "key13": "3pToWXdXiChowBygd116xqPWjzfTWjxGZ8EDQkv99eRic1n1BTe1ByUTtX8FUpPo6BbEYS5uuoHf3KAM7eyL1wDw",
  "key14": "3NKKeQggwcYziY2HZYibZjbR1nkZzMf8mxxm7dL6geKSQdjhfw45ezk6BPMqN8yVUJBMrV5XCpMKGeVDruxoN6fe",
  "key15": "3R1P11xq68W94JQCbaYfm4bfNRGMJ31t7aMvjJEiEK2Zx3GXqFwYP1bungGh75ssN7XhCaQ4Kc22aBjipCgnAv52",
  "key16": "2m4bniNMp4pfu3swHcQGTYK72bvGGzdyjh3W3DjyqC4G5pG5bYH9dHv54ShU1DunanKh5wcubtSqsQ3PWhGBL43B",
  "key17": "2xMx76LPR9icaVGXEM9ZotdWWDF2La9zqN9f9fM86ySS4j4SHVQ7H3xegbEmHF3PXu8SZXDF6Axx4DaPj3vEvVar",
  "key18": "xZ2NxAFBqpAf16jFRU2DDwnF16fyRxNc7Chx7cCkBYFHMr28UV7eW8jPM5C1goANRGLqJJou2YoekzAXERqqYz5",
  "key19": "VWDSQq6UeeRNiB7JfBnWJtjXLyA14VcuitweNvBfH1Gx5kajX4cyhzr1n4NqaTkb9Zhdgd2NHGMDP9i3XaihRwd",
  "key20": "3WQnQ2D4icGYi63mo2cgj98HiuCeCHrE2pFVCnyXK72WjcQW6Jx3eKKvyKKH4Y5X9qTHzaoCSpm61ymxtimtJZ7K",
  "key21": "4BnFEry5aiTxhvkwzVQW8c3sE4cmLHvLQG5Ki4jfoGD8E8nmsV48RvXZXa6SLDqpHbHVnHGtq23nJQ9Ex5tXHPKC",
  "key22": "2LKfTwjssUjZtMAsnLepRPbLv95XkqnN3kMgNnYFP2KwZFdyAD6V9CDPTHnrHo9Pxgygafq8zMB3JzsxE39fX3Xk",
  "key23": "4aJWGD2EmicYk7BQHXHYiCDfS1zn2pQRJksBBdjzfzC2aiCjPPiVcGpbwX9kd88fh9xVt6cnC7nAp1iGCfcWq8gp",
  "key24": "51ArtTqWGiZhRYefYre74hv73cATs1iAm6dpRBKJXi8wDRKtixofunwNUCF8TCWPVdaUmuDnrfqKusqN7hhtNdJC",
  "key25": "3giJm7RAfmGtMsZLBZt9Z6coYwpYUJXV7iLHBTgXtFdVz3UbEypzabdALV55h2et2Mj2NvNdUc2iyhxc9p9nWPP5",
  "key26": "4gfaRtXP5gqT7E5m4HFpYraBDkbbxTMotoJi6GqMhqpdgBgCKb8JDL2hKJH4eW6knnYq2vbLVLZb4UodEeXJPf3s",
  "key27": "5baDRiY1BrAGmHZiTmByQDxyTWfZvpijNbwng8X9Hcx6Xu36CNDWQY2iPDTfNgbFJxc3iGtkpwr3PMUXie2qKFTG",
  "key28": "59dDg7Qt2KYHoAoWXk4phdErg9jE3f9hW997LwDgcgLH2Z77c7BqAaSwK5iu3vCXqBGEEWSuFyDLGsfb8k1HBkco",
  "key29": "2Nq6YWqbymvkz6bGVJnNvBNCYKG2npW4hVPzkAfKMGUq2TNtVbThEXJjrEZdg1b49fz3mUwRtFpBBwSnyp3FnB3M",
  "key30": "2S8kJDeCc1aShAiRSvqiwCpm9bqetME64K4T94TaMy331Eo8ax9qjFfx2JxWtFwFk7SJeAYc12iF5Sxui2EgTLQz",
  "key31": "d4Ye6u4bEEWmtZj1cjakxAKfhPSsmz7Em6LHRpzHcaisk2EuydVqFgRjPAPHZNF5ygoYW154CTgAaNqesTjMyAg",
  "key32": "3ZRJ4aMB7SDzfsKfK3FfWRn8Tb1q2yj2Y7oDtjt78KPe9fSAv6mzqYvqFYe6Nu1yzac9DDsaE5mq32TzHRmVgx21",
  "key33": "55mU3iXCgs5WsgJk1CB9uhwVpxuqYC1cV8CSdN4EASuAwMVVL5DU7YRZaJ3NAEEP1uroMiEL3wCE4NHLWZnu8ecY",
  "key34": "2FqhQKphQdkMU7AKiHhSxv94kqpKQRxKjdAJP9FmDtu4X45DtMNkt7g8HczwMFzqVfypfprbWKkAh23TkVdWCfiy",
  "key35": "4AEetVp7iRoCxD2X2eT9J8DJrBcEhKKhYE6RgNCpo2cFLPqUDodkSex1sKjbKeRNt3SXyt5L78e967hjjajJZsgK",
  "key36": "5HWzkLfgLaKq4F46eqTwmPYwcq8ATG26RVit1x7gzzwt6NS2DBpfoUz5sdFreng13XcSyVqLLuRVy29ZVcSJNeKi",
  "key37": "5yGJSay1QXrUr3jtGL6mjApSseurSi5gTVbmxuCMGwHHvQd2Z1LntYhMUmbwgBW44waoVPxpP4kiHUmqozeVNx6C",
  "key38": "3wgCEjUGns3z2F649oFhftAv9cL711bjJV9QNXP7VTtVswxt6pBVD7todTDFWKmXq87EhXY39Sabx8PRHsHWdxQV",
  "key39": "4qumPSEQE7tpWMyDJgGTRinFcYodDP8v29Shs83NxRu3FdSNKqhx8obdPNPhU77HJ9P3bPiMoZYgkDDDATTrC3wh",
  "key40": "sxkq3VxoZnV5iLvXktB4HBFXGyiVcii6DjemU3Z5quEoSquBPKozBuw1Msq5fHdRRoZqcYP3jgfLfbLx8fP9XRB",
  "key41": "2p19eTrDWP96vunUQ5npYFcUrSFg4AXXkQskt91MgzmLn64zRFHLzazmV9vyW8TmSM1F5FCttzxdStrg6URuigqX",
  "key42": "3KbcJ994MLWyvaELqcAg3eXTFCkaGtzRqYndreJ8UyhRyWkqhGPZPiqnLme8oQiwC9HrZwmCTqmuW9Pt3rH4xgo2",
  "key43": "57eEQH2iCUnz4TigVk47kjsNDDP9tiTbswtd5UGBx2xwS7VWuYFiADhe7tsxkDHiT7ZQMoeZ3SY1GbrcZAy5Rfj",
  "key44": "4h2k8FX4tFs61E6rb1ZKW2bLb3uoAvJo8PsyERjmnXL17JB79oT6b54MRp374UL48owyKHjAPwZ3Y2EWSSe8F49L",
  "key45": "4ywYNJp49ecJMhBJhJ8nuZ2rXMdbZAzpmoKNgGnVHfdXDyQtW9cU2dQBEQagwTbgLv946roeoS4eYWvcL2MobJDo",
  "key46": "2EPdjuiuNB7EfCZRs8ZmcCTraGyQ3e3wJ1Qc78rDKSseT5g8ckQYpyJCGMMGVCZaM8sBmg9Asdo8dNBBDd5WYNxZ",
  "key47": "Pe1GKgF2E1iqY8jB2nc9KDpv5N4QPgEwJVG1qkHHMjLjEzH1aEPVTvkbzBcu7D1WKZVLR8YXJ4ZVLdQ6wtK9EAG",
  "key48": "5oXzqRYWM4Yn21r45f3gRjTcg2wVG31cQGhAHDyEB91tD5vrzxtWqsWKwpQw4FTMKrprhqTFZxrgzt9AWgcRMFcF"
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
