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
    "2Pe7Hbp8rY6yEqrBppTuofUeJo8BbG3uYqin2PBaT3cA87KpdcE28K93z7yRYhbnVcNW5sKzZ8b84S3EE7eN1pt5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Aeph4y9Xb9LSnM84kbxRG3AiK19m2oEd99KoPfsbicPzhh9nacpNjZXgoFbQ8vCRwHnMZb3NtTwmi7ZapRQfkho",
  "key1": "2Ms1CbagBe2r1WXqY3HAexMxqWq3EaPX8qEDGm2JsWprmEs6gvqd3xPuBUM7tRm5HWFfbrLib82ReD5KRY4JdikQ",
  "key2": "3AdoyG8JDbhujuVMRDRMW139oCfF2rEW5hhr4HgknaTnMpVLJ4DD1fBgZoUjqmzYpVjFZrZp67xjJeSAzoVBygya",
  "key3": "2uRYzCsFDdG8uGXw7MjyRMH2PbD52kw2EHdAd5FE37BXtTAbtEXvwaTK1ftNQMsCKjb6h1Jnj9LDzkYPKdGqkpiM",
  "key4": "45h1J6p6JbSMBW4B7V4mCn2zwy7e5HJYRp4BorYyyJqARKA9HEm8xx8TbkhDz2pp4QYdnL7PZccYEwxNAYR86buR",
  "key5": "2iF33sqUk9Wxb2K5KhNaNwNw4eJvcCpR3MnbvtoX1xKHGtCAHtcz3MSAvELcMkD6PFcRuf2sx8A42x3gCAhQURr3",
  "key6": "3tutHYEVCTCaXrt91JozhYLxEVbJYHVFAyxZprvju7oDPKZfo9aMH1wk5GaeRdsgvSKfm8QXGwFivC8KdHk6DWn6",
  "key7": "4QwGUBqsdJxUhApHtYJnSGs3zoaYipcAbnE1JXcromvmnET7NMN2HU7Xu1VT53A9jRzUMf4c8TsJeu1UkbjhA8Qj",
  "key8": "3fQsmHmm5rEscRWAKAsknXxUoqbT14cQZRRqRcW8ZsCRSBhWokGrRJRAo6NVhL8C5ReweDA35rXNEcoN3WnuBxAG",
  "key9": "4HJDR8KTBKrhGEWYTxdZAsUwKpD92msC3Q6mAvfDzEgKcs8VtXHiUFUFgVCvMnZzaK9fpQqzFvNKW4ZaUpcUYCLK",
  "key10": "kMRmwRHpya5xTfZjjkfNmYb5PKVDgt6WxGgedTtddPao9yZRp3DLvsr3c9bg7bVKma7MpDMEPZgZ6HxLp8LALkZ",
  "key11": "86yNPBspmMgnUkewcLSBVnAy83W9FuSVmvsvxH9zayABm4AYWz7Xg96pUwcJ5hF82CPagwMZGSDDf8cvi7dJWYB",
  "key12": "5dAvoDtmNfsLWQh9kPuLVFaSNYwAcP8Rp2QDKrkPVh6wuKKZgpS3aJNj2DNJWnMbtzV11TM8HSqKE72DrNJPyTwM",
  "key13": "29JA3eD1e4CkPZZx4ktefzvdCAMmS89tzj53ZMJPnNQzU4zUkFFqzVVzqorAb5hUTVcMVy36oCfmNM6zUEYYZE9r",
  "key14": "2Pcq6fYEULLc4hN18wcwoZPrVQaAU3hFcg93B2XtKMS8SbQMr21oxrgKQ7WdKufWKimwtsfQo53dj5JXBqCo3Dzg",
  "key15": "3dX1RF4mdWNXcGccs4Fbvnvyborh8HgUPhr3uwiTWdkQHYAcz4Dg4iHrgd9XRCt7REsUPCCrxLtGm62uYeHSq38c",
  "key16": "17LMUuYx91iXo3J7sdFMbwd6Ui2K6S5R3XcEzgwA42qUbC5Wa6Z2R155JnaMND2zrm6VYDTvXey2EDkptdWnqXy",
  "key17": "5fBUN9WfCWhe8ZWDYizSN3UFwU1AUdt6N1BmQLyvgiKmRrbF8SWMjwQuGxgkv8k9TDHBjYKBGwfx9S6NCkJXkgap",
  "key18": "36xSL9C3j6SSYmroot2XpyLhGBmUZp2vXzL582cYEMrqMZf4A5rwDgnV8EFLEbVo6ezQfNakxe7YCfShMrCAQL8i",
  "key19": "2ej1xXSppVwL4jxmvgZwFS4t59VAw7KXLktrrH8XofuPuMDXjj8nX6axY6wxrQboQF7bH7RbAFwBGzHPK6rS5Q6d",
  "key20": "CoK42UDSdk9YNkzyQXksUkywsN9h6FPgSWWtTwxTEqPzCDdbNfjfZNdqHD2q97kvg2v5CUvrBmZWfRsEMPSt7tp",
  "key21": "2vcfn8duzab65QXkBwo3M4VaZ4oRcvUBDEd4dTsTnQHPq2TVMUrtcqvpY2vgiu8BA6kSu77LvRTBtTFq6qAd5uoN",
  "key22": "2r9WTYdzrzbqVkdTGoTnBR8jDFWb5y6bj7vVGMb3GSjKe6WoXQtvdPeaj9wMGnQmpYpdwuAFVqYKgMECyvp4jyQQ",
  "key23": "54hY6jzW1mMEhk5g4Zdd3EWSMVjaVwGYWD2h8yy1qLwLZ6SzkGRLfuWSdXEa3L4JtWsHH4GHaLBvkAZnJPBCpcVJ",
  "key24": "HZHwRPPHXfKXLCFAUwhQDmh1YwEYmQ1jsVAXuocg6Zo7D7F3GsScRfecMRzjPRS7or13mQUwcEo638NMHqA3Ugp",
  "key25": "rbvEgLGWchx9kVH83JC9NVmsdvhtyqoLE5thriVFxLpJxY3Eom68MsjmEqBck8gd7QinZBT1AVTEcDPfSUWJ71h",
  "key26": "3G97c2HZFg5P9K7WpGcnmCRLqr3DoQMQYEwyBhwdUVXVGaQbuUjwbWgbL3LscM4FATw46s94rqWVB4qJs2zdWVR7",
  "key27": "5jtFMWQwXcKhNkW7xZKXtWzPNGdZMQ6NJySSd83A7a7zsK3WxdjCBgka1VssiMQ1wjtmqJ63SxrZK4uHkJvEAcGU",
  "key28": "yTMZ2EUaUeYBcT2rZJ1scPwMe4vKeCQbhfnwB8P98Y8wDCa8NYn6pDJPSkHV4hduXgyo4unzHjHHN1uT7VmXkJt",
  "key29": "486hTaMifLSTY6m5Ddm1vhNrp4DK8nRezniPYFhJkmZAHWb8McQRUxJWQ5m6kUnPp8XPgXeVj3tHB9bW7K9cnadM",
  "key30": "4yADGyt27Rr12Ta3kHoZ9MxE9vu5Tc8czN1txYCGANwHBnMqPjbqQzwUWSNG3xcaid9N5tmbwXDRXFiu5RtaBh3n",
  "key31": "5sNkeSUdUBS5dZWz4zknDmxKTzBo5NyCdMZEE9eFGVx9qJivwUS5CqDS5LtF35RW2rKtYpyBtyWKHXUxd8C5zeoz",
  "key32": "35746nmS1jKxyCZuTsrcD9Y9hBRKvFvxD8BmpSSB7FJ3YKfCMg6vuEocbRat36m4j547mc3ZQFkP51c37fJnTcmN",
  "key33": "2PeJgmFneEbmmMoJaeu9LDbXYJ1Ttkft1oex9o2gmkxiXxv1MMEkbVV9vNY1issM8bZxkqhfVoMYA5XwoGjfJtHX",
  "key34": "wpvWNKdKPWsCguvNzyuTNbWpe49gB8XnaRqcQi6wdiMiFXUo62xmNMmq8ohyfCuwif1ZbXEmZH4dfEpaAXKeHXE",
  "key35": "2cinFw6sMjj7S53RVfXznMeD7M6GeVgRdcDZZtGvtfk7gv2uiUBknb7Gf5LiXNR4F4bjPtsRsNQaWaKqdCiczeNZ",
  "key36": "HtNZkK4P5RnmN6yNJx15AhNTzS6Rf6BxQcGsVtn2kghVWw2orcPhyb659fXUUpn4v4so1vuS34SrVRcogqs7KKN",
  "key37": "54jvRfAHVNyM6tm4VXc28EkH5eeQQD5Vz5rPLvh9xnzkg3JxstKdXgc7HvMtt2eovCALWFHF3sLEtFAwsdpjFG35",
  "key38": "45MAAN4TfnH1QQxUU6MyjoFvBA2CpCj2rRZeBU8rscD8avz4edQTQqH4Bs4eXLfNvjceXf3riciFfrcfeW1VXGNb",
  "key39": "SUH7yob5mnsgZoQfUeNBeccyHJuRcUeWezPfhji8YtFan5gor6ZhiFXuWV1opta7pRghcWzFYu34fo49jNi5LYp",
  "key40": "hYCZvXAntkmUz6JLk8GudvPPZKXMHaEZezTYemrsbD6uGtaEL7MaEWuxaMuD4et6coN4ELkrSz8MEPHkYbzM3rF",
  "key41": "4ishcHJQqYvkpHccLhKYLM83gZRApTBa4UJrercKy9fxoMJoibQShHSZqhiDsuA1gg4QFeaGtQbc692sxjrt3ySw",
  "key42": "vAeU9cTdv2HX5cgg9T6G2aYW9MBzU3vjVnFNJcnEMTTUPfhCmnYQ9ozym5o49zMEnaPeiJU1pZjGAVrRQGLYtyy"
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
