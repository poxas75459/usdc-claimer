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
    "4BWvSke5jroUmZdg6GH9rV2Cn2dwbEpcUAesMfz6U9CtGQZvCNyta34bjeZkWQivUHeKiVnoQxbhthkTE8i7VW82"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kHwWTWmWwu8vpX8fJRgxEjewofm69XUPgD8WxwnFkSnCZDpo3ZV2uLt22H9TGNZfGGDF7nge4HMTjDgNBJBwwiF",
  "key1": "NckgoH1uKeZYUCMLG7gsuGf2kJ5bRzd8yCgGq2ofVX9itUR11ac7Uw4qGHqHanMKE4kz2DgrjB6AsfAZUvUNZFS",
  "key2": "551nuvGDiDR4ViRxxSQM7BPfWbb5LAPcis1a2h5QxmhofYiJ7hgJyHU1ZfePzkLi4kocRpkVZKAsEWwNeYtMnpGr",
  "key3": "5iXchaPcDwqykYYy47j8eKkkYSNu4m39ryotmTYeNiggNeo1frkf1gTEXeBtwy5sytuCKRNMJZ15wRamNvd9NoB7",
  "key4": "2fxSNdRvm2MmzwvfEUG4DD2tXTmkjZrTrtsi9bi8cS3akJB2X6G8UT922CwQRizzhYeJhZuM4dinnrxtGCiNvbbM",
  "key5": "5jdR54UYTLgaH5r2gu7mwfFNJrmCJeH6PDcoiVRt1T7MXcnYpaCKSW4f8K87nyhZF2kABrxWfG39eNiTU5CRcKbx",
  "key6": "TQSe1h8ZRdyA5nU7YhkdQfr9ejUtpKnXoxGPYMviQPGCdq8VCMYsByL4b2mZU3U13oDxK5FueRuTZ2dsSywN9uR",
  "key7": "5pg2hwnnnbdZWjFc2EGXQDBdV8QQiXgPzHGwaG4Kqs4wiT7k2e8pFM5DJ4QAj3cgEKEdcvHezMDH1iP6KQD1y9b3",
  "key8": "233n9Gk4w2CXj2uZRK6nK3MKrfMSdDsMUXEsWEtMte3thBoJNZcvzXrkAkcwePycbhgYa67YRQNG8wDnrGV4sae3",
  "key9": "5Ee5RcpH8QiryhzzGas9Hwjury3DZ3ozimacnhJKUpAf1HSZS6DVMHWze6iv8yhcTLmbpvtxwrMK9EYWxfEqLTVe",
  "key10": "5E8kuXFGsF7VjNxG5nwNSzuJtRStUSQc76D5TkRAXXkd8aCD2t9TNxjcS8rjQ4eEE5wnNgmEPwjykx84jjLy11Ku",
  "key11": "3H9cPh98JcXo2xRKHYjNaRyW4QbMjKsf9DNhNLhnY4K74g8Yi5u5Dd4KCaiA8C3oZsGis8SiZToYwHXfwXeSZyqT",
  "key12": "M64UBnoSbeWhaG9dPz6Zmg8vu9BCzkGst1j6hR1JYKx5KBRiWDHZJ9sQ1VjGvBoe1AeynYzsxuVT4ANsZ4otW74",
  "key13": "2kbNDuQt7RxCzSmwKPc6XsNBsHWE2eAss6b3LoeUYLwzY5GHx2fvahQwMxUdKGJBhaTEMsT4NwRqR56Ccb2F1dns",
  "key14": "2VLUkFfwZZnRy1r5C4oHNdj8WhmAa6h7xBbRisHgn2a8eNYanuArWXaA34JJoghkRWFdkwWan4P74j5SB8g8FJ7z",
  "key15": "3NYzjFswgvyRa73gG7ppKdiF2TajSdEA6TNLGvrsyb2ip584gq8RBbgA3bJJk9pLBGPdt2DYQTYmPhNoFhiWznWQ",
  "key16": "rkdUxgNU8FtFGcbxEwKmNqbGB1CRntNuPQd4x858RcC81vo8oyUSRwhMJrLNFQhWuC4EhampfaAzaxiLipPKGHF",
  "key17": "5a4ytgvPvYjdztt4k5QjYHfFTaqfStHNpHh3aiW8BvkFDd2mGDxUncSxjSQhFpb1wRdy9uFe5cyw9D32kySHpgLk",
  "key18": "37J4mBXtsQf8XnwC8gjjwo9vigDxZXP5jAHG8Ja4mdNtNQxT1g9CkhqWu6SMmGkboM8SRGGzd6DiPoYZ4qqeERPm",
  "key19": "4Tcg3MEgU2QdCnbe2U1gcQDAXFpTM52amajH2oMphogaNAaVRK8ti7DTHThLbDN4NL6F2d4yZ95NNVqVW2wtie5j",
  "key20": "3MiM9QAqaw4s4GSYD9Ejj9yJGd11memW89sh1eRu5cexZrowL1Xq7rFajP3LdZYtBsKhj8xu9q1YjmVhHDHT37R4",
  "key21": "AFKTPH34XCShMq5wfGppypm6gudYr2wz1WE7GCPbjLUxDsgbLjifHYxe8G9rDEo45Y9vBNZTDRCx1k5KAuBRLrT",
  "key22": "4F2bNH7vpuMZWSNyD5vaAGf6Pz18PjiwoDnGuKxNDSA39Ln8oH15HJz4rziHbFAUAmmgZS6yN1m3evh2twGGCmhK",
  "key23": "iXiScUBiVEZaHWJezrqkJnAKedcxM3FLyzxdtNzvYmgGV3LEZs5nFRqTmyTAd496EEzGCfKp2X8XiP8Loz6GG6s",
  "key24": "4FxjePzPT8NZZggmXxDjQ3Gf7poyqriuYubUM7WPKBYCBemNJ2ScHu6bcLWsTnZ1yvFMkhzdMebXU6wxzWZLbkWn",
  "key25": "4quYdwp38YNvsPfxLxpHEytPi7tmgdwLKqwKhA83jMA47VuqfjWFBKdkp8ApwTxr4hvyPdB8jU8MML1LBMQqTwzZ",
  "key26": "23h7CuAQ41c4BYxh9Gg91Cjz3274z8w9d5e1JG9sHaBS4MBegCroTo4FiSSaUe9BXTGZovf5JZTJtdtR1VAsv3gT",
  "key27": "3nS2wkQNTcU8wKsL6ucTkLpPBks4JiUGuXVvdNrVF618uQfpQsiS4tEknskbrVhwPEHcNXgJqxANHRuqZrToKZDW",
  "key28": "5rWX72LcGHDPHS9n1CixcPaMwjobY9oy5FNz183gzY5xGP1nAX3p6QvMwmKsudGTMZbf1WqiwEAuYzfN935RWNPi",
  "key29": "4Lqh3FHtGo4ZcqpguLFFHqKC3Ad8z93vuAoP9RaQwicbPWTqJAxyatWP4GQ2TGAvPEGQUp9hreUJBYxZ3HByShKa",
  "key30": "2bVQ3QS6bZbCGQDZrGcvjn445HBLG3oQ9qP2mm2DchmQXCstkmqse9JZhz92NmvYLXtGmgXpCHSYYMhW3ewsFL1B",
  "key31": "4MT4dffc9Fpwq2MLPvX33WVSiry3HggJD69Duj6VDopDStPhECeqsjmVvtm39T5u1i7T2djUdwMe57H9CygMmD1Q",
  "key32": "2UUrdvCGKLw2TxDsQNEBwKXvkQtZkwXCY2Ecd1WFnSyeGGPstS9oiGaW6PR14rzHWr1HAVAPoyt3rTJGuu4oo2Ft",
  "key33": "vXBxD7fkss23syoJmL9EJ3QoXuh6xRrx2i3QypH68TbwTFvAfu2EWstV8adpcmvULtoKHsGU9wCoDfbUiHwwSnD"
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
