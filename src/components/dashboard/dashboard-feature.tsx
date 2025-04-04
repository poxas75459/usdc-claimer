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
    "4NhqUp2Ty893mbBi9T3bXf8Sbk3DYkX7mhxDEJm7j8uzRtZBfFyahH3mZfJs2KmhUGXDoAQye9uPZ5ZmNjTSTv3n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a8KpWh16pkqXLrxiNku4VSSxrcVsguibE25bLoyTqM9Se1HP9QDa3GgF93vzLTKxmGzrks45zGzvQmxUu4GueVr",
  "key1": "3Vzs7WcMsfzqPpTcK7Diyw4WqBMt55S86fBmSL1trKtpixka1BUFqE3VT5b42Uo15hhUTyjGLgTFiaTv3ddYgadR",
  "key2": "4s4qh9SNEGk9Hz6edvH28h2Af8LAnAv9V1ErbGj579DMCV3AqyX5QmdXM42wLrHpiBCb12259hboSGZinNq2oQm3",
  "key3": "5u8vNU8LsBUh3d1LcDAZzQ64ST5jebPk47nNxaMPPfqgyH4UWfQtMVYTJLWwbBangYDtw2ZTbKDpm7Jr7hNUGn2L",
  "key4": "6oaAuguYGgndrKA3f1xkc9z2CUbtjQTXwDVSvjQUuvsEMtdcDWCAdPqBa1X9e8B1jXqeiK6GcmfNGgTUXTGsZgq",
  "key5": "4W3xg4nF8FFqfkGVAYrnN5wrPydv6fg6DEYPer3ggKXfN9x5dXduy6ooUndRX7mcRREzyPgViwVq1ys2zhgo9xi9",
  "key6": "28dv8agt8dqidrZfhVMUUPYEL7hzxXUJWnScLbPsK1FTHswoTKpBe81VmSnMBUs63dsWHsi9y1iGYsR2QrF4oP92",
  "key7": "4ZVvaq1metTDqnTUmWt2MqwGd4DHwLEo7XjAMQsgGSEs61GjKwFt8AV82oHZe7W5TRc8dhmpncqgd8jusBNQorch",
  "key8": "4Dc3TMoBbXBrTzBGD5wEMYU8dGKAgryzum4XPFTWhYE9tP3EYMV8bFKopewcPHS6UeXTLhEp98b3gbrkULp5Fnyg",
  "key9": "ZCHz5affsn1pbUoFA2zeyqJuhn35UZYWPjKhwcyRKaxVABBDV4CTRrE4XVJJatkUtU2rgJF5dV5FTuBQNSFSdLz",
  "key10": "32Ynhsqiumbkt1uEAmSuoVcYk59mVb4LPyYyRLPw5Pxo2Xh6Ag8DZCdfJPYEPgei2YTfaQbu9tiTabCia3fzj7et",
  "key11": "oGiBbqbmgWibCvGebkGTz9z6P98gya1ZUUyK3futvM6vC1grsNGEZrfcehRkw2QjZ5YX8TwUKeziPHd1ZxVJ4qj",
  "key12": "3CKH6dn9ANuQDXhEkUm7bmjig66vtWWoSsKfP3viUTnbWqSeSzAUxvDFhRE8buJ2t7m8Y3iWB3Ced1j6FNwpwJv8",
  "key13": "d37mVfkfnPRD1BmrGPcC6SR2MNLZS3krzxUrQTFCeLp5Swwjj9dAX7fQmrCMpcBUavuKEJnGnc9pyZEGXHqz1Qp",
  "key14": "3oRQUaRjWWYUWFqbPrGofN3uA8brweLtacf4oaTADV2cRKL5XjQWdzL6cxgpKJawi2i95xaSL8bZhwoCQYDoiHPM",
  "key15": "5GpkPNZ9eGV5yA1dqxHj3HsevLG4rfTAonrKZnsSnpiGRBKcVUR6SLZXQg1xpeaGQM7xUKxn7K5nfFXgNRn4s4tB",
  "key16": "2sStoWTCoHLhjTre4eiamxMPPHiafVQxEWHMXsrfq54Xyd4EYghiW5KWgT2Nwc4ynXywEGCiLgBovt3utRy7Wi8j",
  "key17": "53AkYd64JJ77D1DVDokLT4itW5o7chnx3hyvGpufNC4eFZteLfH2xAprWKgxxR2Ej5SV3Egybfq6svyuxkm82RyD",
  "key18": "3d4BjSntj8g2MGzy5V5egjV6g8htwbFZhjhxhh6rLE69mZFAv2TBb1dbcVRor6kdCuSCibAkVopZ5XNALKsCLqTe",
  "key19": "29m4iCxt7MSo2zd59YnRwmqHznYaor3Srah1UdofXUnSTNPn7Y6DaZ7ANhDw4jFGo89qHCEgvySm3aEnssDY1f5V",
  "key20": "67i2ANDxZsEvjpBgkhkSyz3dWim3HtuN7i3s3yKn6qq2CTjYJffbXxjaRJbA5BcaK9MdaTpZYRB6FUAKNFRLuFGW",
  "key21": "4uBwzg6pNh34zYB3QiccqSCSiabiNNgQ8Y2T6o5C3X4DTbXnsCCPp7mJy8R5qQJyXeNYqmqc616i53D6UDB6nvMS",
  "key22": "3difCPoxtaPVd8KLTUA3XY231Uts7Z1FQQ5QYgEAF8JiWxDhjs1tbfgwJ4o3Mni4ou81h9jqDVH4TExzTurq57KQ",
  "key23": "3HzzPyedaznrX9iaRt1P36GEAmR2g89Zk1q1RFoao5xHhawa84MKPTwm4hnF2pQMnQ7poAuSfvVaSusS6bnjNVEe",
  "key24": "2x7NKTBkXggpoYBCJZB2BPBs7VMdMsKAnTYq8S9KCcgC4cpxmwoSkto14cc5o6a3nRoR7irLvqafG1DioAdrgA9f",
  "key25": "5FkRtn6Soa7uHqpRfSufskNYFLpPULEAiLA1KTULdEn34o6Jxm2DF9F1Bg8JUxC1a5ea2FWBSXvnqHyF4DMwbszx",
  "key26": "bXdWb9cLj1i3eSzYeredbm6wYiGFQurbQogUBqcEJcDHJE3ZWexkM6PKvJ5ctTEvoaeuDDnjzcbZw1fs97ychCE",
  "key27": "4LErAXYXgQvpoGGv1GafFmBNoZN6ZPsxE7YUga1kPvymvFqyaM1U4cGDpvrKBoC3vcyFbmjcm7bUwpUorrESo9Pf",
  "key28": "3q5WkVhJECFxsZQ4sa9rbf3GffdNMfwy3PDwn2CUcYoryTsAcz8fbBBV9LnMuB8bwZyXBW196MA4DRKjAkfiK6p",
  "key29": "4WhnDXiQyrZSaRgWRX7es7ceGUGSyqzYjDnGZt1BVP9SMHUvzUWsaJFX7r6h8ts89WaFwGhx41CBiJWmskPPGG8w",
  "key30": "2HJTvvCspzEaazypKJKCPYUGfZL6phd6WRNUNnXt8kGD98Rzx5nPUxzYn7QUKZADtNi19tYQ75DTh3e2fdesfrUE"
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
