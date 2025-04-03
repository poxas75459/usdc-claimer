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
    "4LCMQBjRZbhXGVJoXLRGZTSPmf4SbW7M5xP57A7iyC7LTssTscptAKpaxCEzF2xsFGwduKVds1rD73F6pQQvqdCe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TX8BAcLi7rBkeJHFdhtSZe6XoJ1smHq3Ck9oEoHRtmcYQibrRDMW3xVXJECNQDjFjAiAJyQvcLwFsrbiH3YeLtR",
  "key1": "657bcvZaUAiFRuwosGHZ4fV9sdLvk2WupDKVVMpsq5kzyqeW9yESBf7PvjRLY1fGgxUMRP5kyJdWiD1kaKvmhki7",
  "key2": "26NmmfbiHxVR9Ab2T5jmVmnWS5WJAC8QdtquGFQWGthseusnRQcASdum1CuCmexSyHpoikWZwxQ65BmyozPuSJVN",
  "key3": "3H9vD59Mb9bCh7aCBo5wLNB5iUGD8a8cXkx6Yi21wfWYuLqSx5nG6FDWaCN89SoiRGV6ArbwyTgZsphzupthf4SN",
  "key4": "5FKqEfx4NjbJKe8zr99dXcPDU4Xj5i5YPFp2oWd9LUup1215JQPu6UH4tQ9ZDPh7c1gSba74XNPXLniuJL7iKaGu",
  "key5": "39N5FxNPVrnYgKCjRWJUbfvoeVjnSX9WGDmJ4ms1vF2LL9F3agXcJtb5Nes4avmn4hSzYc6N4NQiv6wa294X5LR8",
  "key6": "2NFe3rTKpiqMpp2S6mv8LMYBngCqaVrWCxNDvns7UC2coMeMtntKYKLm6Lfzm1PxtN1tYvVqd73N3sVTN1dwwFnE",
  "key7": "482QVC97Cv13ieDQvo86d5wabmiJ6BuQRyzXNzQ8w4em9MZTrLmkgXwDEMgYoAD7WmmHrQx6Z856iQWHjpQcEmwA",
  "key8": "2sxBVSufe5Kcq11ixVbZPXLLBtemWBkHqbMfntkSEWkoEsaFUor9H139Rke7PFyD8HBMGBqUXqQHFpvLGLa5yazd",
  "key9": "3qDUkdciemx2JStXJCPs2cFDbYaQoeDHe4EZSNm4TvGqSkVi4G3us4infCK3BP159yLaoMxqueKNaWWFjJejcPjx",
  "key10": "3hma49jbaFEf5QmxSp92AjcPPMtBtDJHQWXLAm4hr74oQQ9ZSRbpG8XFDxzx2xHqKuxA91XTBYAncRNS9Q3c2io1",
  "key11": "56Z9bYufWJxJ3TjcS2s1bqz5Drvz6Abr6XaRjtso1Uabq1Avs4Kw9gBbq8eE6YmKhSfUhKhd2np8PbZGGdj13aNh",
  "key12": "5tU1NS9McKuL73RkJKfuxe11yWMfoDSNoyptXZAM1kohjy7dMYBbDPeR3YiV3KZ4Nbbs1Eydc6xs5menhMC9MVxP",
  "key13": "45iq1EGQ8JiHe11wC68aaeDLfcvfTZF7MXTxcq8e6xtGDE3gqyg8hby37prmUNASHXhCQY9yfUNnDXKeq8F957em",
  "key14": "5QKYV8uRTxSx25AfRGiJTbhsmMjfzHuGAvBCY6Dt5f6Fu2xzSpnntXVoDUcAi3TE1qBPx4ez76e8vQMdpTmnLeFB",
  "key15": "5mZLMHQkVFD68bDK4P3ULgA52urp2CihoDs3wMoJ8khiTjVsTdi18ktCB4TpJ6JCEbmjCMpcshkyDZWk3bkuikty",
  "key16": "5ZAVt9BAcScxo5CRWH7UNBstWLJr7ARuWEaQ2VSBb6mhHrr6z5V1jA7UAFwgvSYSMWPhqHWHGPJa7j8J6hW6LG2C",
  "key17": "381ZNLHTRzGwbA9Z3YyBaK2obma7v7vgcNRbFe2SV7Awh2fVvpsAwhaB6fqAdFkHWA4Q7zaTD8qC3PkEpWFhomfK",
  "key18": "2SxusXdCVEXneZyntLBDiCCjMf6eXCiLwPNx4dVRXY3TMCmL16LPQU1DhBBZEJtYF2PPCkR11Z9Rkrk1sZTZdGZv",
  "key19": "3i9KqTE2hP9yZosNdndW1U2vUcHzT3Hg5XqgYyNWYRr5E7kD9RqPPH1n9Vihp2kRRHgaBjHpZmGyGhiYyrF8gkv5",
  "key20": "51tBkF58refx8m9yazSKmpH8idbfGwzWjFwYwLH3Wnj48sXBqoptRingio5gzgoTJyqZTbM5C5TpfJ9Doqj2hRsG",
  "key21": "2orAWjF88tZ3G9RxDqoT2gkbT1tj35R5R3poPhr3xp4Z1e8gYAaP3yx68XcaHHmbeKadp3HEUj8aSZ27LXkSHCn1",
  "key22": "65KGGNCaKWsThYBxMDQdMzv1wgiz8JcJZc53xUf54v8m26zEs9xKLYe7aWdM9uJVMMYtvUoLHZoKVZDDX8g3b3Lv",
  "key23": "41Cb8iQzitHyvHreMebNgJCCbbC7yVpBrXCnmytkEhvYc7fmiDf5BiDHUXA3drQBvuPXYVcNhbCwsppTrwQt2Zks",
  "key24": "XPW7ourtSV8jo6arfBzBEZZMpKjxPQByF6oaYMSt7682NRi1cSjNj3T58vzLJ4DScGNgZJmpdpfUYWUksAKtMvW",
  "key25": "2yGiFXZhxWpmj1cHXTpxKWQrLVvoDFBGaGWdN2ef4WDGnrHnCeyzRbADRRSY5Jv8cYmj86JcDAjjK97QC3mhyXSY",
  "key26": "5wfJQeonanrwsNfBUJSJMr5XcftZGhvprh6aDLfL7Fzoa3KDtDDz7ZwtwMfxe4r3JcbjNhgfQ2qsccmtjo8ushFS",
  "key27": "Kxg8VYH1RbsxzPzKrGL5cGAjbpHX23pWBzzuP18YgzdofsPjMKrCyZRQTdPvg6PP3JdXMFons8QkMYZTcU6hSiR",
  "key28": "3YGKx5TZ9NYmPK7UgxsGc6HczvE8pC4uZY53bs6C527Qw3JGGXjTUyjDTUoyzb1Wx9YreZfmoK1v9rjL5Uj1R7p8",
  "key29": "39yL3gPfcHAakL3iGhvWhFCDEnnRPZMaymzz1LwRJ6YXDqQpA1UbcM61oveu2nhh6vSmCvwYSxegjia8bY7RXTtU",
  "key30": "4Ab52kmAbEJkY5MdJ7yP7qoxKPXokb1tSe8h4qwmL9B7ongU2io7J7pt24mq9dzgx9ZLKbkucbA6zt94q7VUBJYS",
  "key31": "4ABAvm1jsbnvcq5XhGuJ9oeAVr4Vhv2pWXZpkLRxpcw2wSf4B3AqPYYUMq3iK1AAnbby3x996bJrFcgGAbteNGSL",
  "key32": "4ozWHX4dM8V4LoX5iaoGXYMxtpzpoH7H7ByuGwX8N8fnmzWyxk5dW2Pa1TeWQz4NUNnnX7HNSGZ4vU9AQNVJgJb8",
  "key33": "252yWf7Sdpfxt5QRMy8eLyvz8ttRLpNeAG1NcTWPGTn6df6yah9EDXLJdf8yamN3GXxaSGr3jCsPT5xxfQpghwmt",
  "key34": "3HyVCxi5tvxkaosTX68u5Wx8GyaEFLDjwV4UU1g4wGJz7aEA28bntHL77SWqyq8sCmaEp44GaMifi8TUfbHezjc",
  "key35": "2eBgZhwhsjkMYNw61ue17Ltk56RzDjefGY6w35g4hQMRr7pKLe2DAvvcHTCYCiDWtY5UsJQjNPvmjRbEqPwBCNjd",
  "key36": "3JsF1hXiGXWBgaPCEqKEr7M79wdTEsbtRKMRbpY9n38JeAmqcv31A1uexmh8ARM2F8NujEDHXCN4vCbjKFxUDrUJ",
  "key37": "2STCMwaJ8SLwTqNXvYuuwerPaoFPCsHNcQz3x22ndhC7YxHeyuY2DsCvdzqNrnSLCoAY3EhpL9yzAqqeXqKe2jz",
  "key38": "2CxKx1aYMajijc8nryaJewUsKBiEx9o7eV98pssvX9wHhorF8mxFaB4RxJMAAT86hW45QxQKDVMYrFLe9Cu8dgxu",
  "key39": "4kT5AmpHzLAhH8HRFT6eHP8XhJGdoicbow5ZRX59fmMCWMJkwP9FKvKmwXU2pwD527S2zMvd2KRqjzwqrNRRdD5s",
  "key40": "5CBGpMXhjiseMuyGJbKKbEz714AGzrTcTnvpmNe3MJHdxRvkHX4PnnTMrdpqc8BXPgBaqYZPJmQDVoTYxNkuSGAx",
  "key41": "5xsUpXkxFfCo42HbLn8UCFHv5UdLiAetC5uCuNEyxzPCDcQqNA3Ckz2usgWKwcFVQa2G7zu8YuAnUKV99zPsyHFk",
  "key42": "4Nmk7SpvftvQdwmUviHVYKqJfZRrvxfTVQEp1xhZjhWHD2DrC6UvcFMFkAJjZ6UxPWTYnRB1erAgXHhGDT9jBRGH",
  "key43": "5A34Nj6jaVUmxHKVF7SoUod6r3R1en36umzAUT1oY4E6iHQu6XVNxBpEXirfUm2SrGp4ggsEdMYKh6xVCrPLU6mH",
  "key44": "61xLQyAns1DzH4n1rDGgYL1dLx9T7VVuGGWXtNPvzofLaRSDyPbbkzHekbUcTwpWQqbqKWhrNNr1eBAmvDqZtSMV",
  "key45": "5ajvx1cZ5j6MtW4QcispZP1YrEcFuFXW7fbB1Udg1YXd9eRWx5J3wBUsa3oCJJpJLHvQmwXymMoYKV7EgAUS9FX5",
  "key46": "4LKD9rxBqkXT4e1URDW2Z1CVtpu51cnYTnTqtSFU8L6NpVW9278T9voYghR65XjNhVzK2W9JP6nPHoDXsUvLVL9m"
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
