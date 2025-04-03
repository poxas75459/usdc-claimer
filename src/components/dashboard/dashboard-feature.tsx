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
    "Pk71yZ6zAUr3yaJCn6ccnPoAsexVkv88ajfYBQa7eKTxCo51LkqKkCk3pG39qg2E677YbbnenEGPa6H9Kbmw2kz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xFEgCUTdxmeotgNWw3VtKuufk13AuhEe9Jec2qhaqyGj6BDhGGJEaUw9sEpYhe15PSjhoFkh6PZDrcsvRyNNwfq",
  "key1": "2YprrWdJrKNDEtghViR74KEiittjUVPeA5Kcn8Mig427YyhLzX6VUYK7m6aUWubGQVBLAEoETYnJMSpDmbjyCwoJ",
  "key2": "5uukBF5NCPW2C2QJUnTAQeL7GWhWkc9PcyL1hXUnqZzm6aWHmLhqaGyZvGHWcEXwcRAMe2snJ7mQ3mi6ctJWSKnQ",
  "key3": "qPNAgTZc9HaRtpsK7kYBGhDzojwm8Rf8GJHXbGq97JZqiLeqHteKHZzswFDa68GQSQWTJFuSseMq7PAmNP9VX2t",
  "key4": "44f5rzXgtVuapx68UfUxMHcoR1E1LymCiVJmsXrh1ewA71UTY2dC3tTW2tEdaLw2KTr746o8B8g4NymHWHf75mea",
  "key5": "3FaTei8Kk9BDLB9KHm4vufGTuvUfkKuZQ2zRosoim4NQhD1KQm4ynbrakCsczycE3uJerwS7yiKYxQX1FcruyiGY",
  "key6": "3eQs3WYCv2qNZkcuWiwHXpc6iBtpYavM6i7C6vJdH3ouRqs5LJ5hnEQg6kuxTPRbrt2p1BFTGSEeARSniSRF8yfu",
  "key7": "5tP1EHdHJGkpVECmcpEKno5i13GmwGwTDAvfq1e8UayspNjhL3zZ5DZTQGq2rmskPZEBBUP2YGECM4rqjuEgehB6",
  "key8": "4aqErdxASD9ULTqcjMqyXuDyVtLZEewKnvdXReokaNZHw6dGiKkAQwkZDggYXyBDnH97xd2zLc8UriU6hi58ctG",
  "key9": "4k9kkcHhm5zAvnRd5Xw8WpAHRbhcbn8hTfjUjSkAvjZvhBjbL5ssUCFgbbSLV5xwCeGjemEshd7K5sH6vKX7YvpR",
  "key10": "4idRaRK8AhxpK8A9YrJ4xMZ3yoRK6UqE2zo6JTD5pNHByxykA8c5VtmgNHPDC4fW7PeT9rCRAvZ3fnMa9dMnTs5x",
  "key11": "4V5qS7cx4ANf5VBb2vwnKZJWDABTSt8Uo85sX5co4ox6nqTaRE894ivmrRWYwjwwVTNjoXXuHU7HwSoDajGVjgLy",
  "key12": "4HeDTxvL8DTURdRi2tLbn1tf1JS283WyugRrUtUPWb8ybxwd2nd73UJzqcYNSyXucXt4fHb2MhK4squKUNw1UXks",
  "key13": "3TkxNtuFijhrLxMAyJjtAoUt3LrznQuyStM1XiHnNnZ5SFgeqJARyZnYdLvEFHwGAjotW7BZmUKSNsV1YbG1evrf",
  "key14": "56onbTd3NEgg2aXWqL4oojxZGvenFxa52HjAocBXCbLzuYpwjfhTNPZtF7Dp3UgWC3iJJJbGiVN8WCVuMKJ1rFYB",
  "key15": "3NRUtrRCCCv7feN9NJnp5H75udjgcRcXRAo2pGajwSCCR1bKWS3hT5w5xmFWHkp6HxL3QtNrD4oPnoAWC3sMaSkT",
  "key16": "U7RjD2WoXrpviLWVi2VAtzJmUxGgb9AuN31hmaAtMyYmo3FgpieWeJn4qm98Yh4To3JMK72VUQ9Dqp4s2JzBxiP",
  "key17": "2U3gk4G16ABFAcbU31icwctiwVXACm3mRbaQ2GRsGoxeCxKcuVeXTQsgemJ343TAmUEQRi7WTVeZMSUuG8ZbC48V",
  "key18": "4yEM8onTNs61H8muhsxRdbmPj5yQSC138cGMrBPXGAcv3p9q8fqJBPrnUNQsMFSGYjRtJq8zSM15r9VACLj1FZot",
  "key19": "3uuLJxJoVD9jLMdwcB2UV7GUgKKCXrJTLFpVX3q3qrtc9HFSBUZ2qDQpgMuwFfRdzhoP6kuBVQTxQRsmF8t89tLc",
  "key20": "5UY47J1Jw1DspYjD6kE2eqD2jDtfnsmoPBtq5NhHvDua3fqg6zU8QUAFHKkkjfrKPaGiRUCoFPnBL1vBy9E22roc",
  "key21": "4MTc1h9JR5Jsh43TLMHeZFoBo223jK9qW4uxaYk6EWHj63x1qsbafwg1tuKeCjiQsXtmtae8Y2YrH7UabRUGpTcn",
  "key22": "urr5HRe4UTVu4Uez1qgQsyZrG66S8YCWBM2nViex3vz557sdfsgabK7zyAVbFVuL9xct35WHtuvDWE25pXnUnC1",
  "key23": "4sLD9r5NeBA3ypFeaePDcEtmZXPSiGnsM2ABqCX2Doi3nT1tftr21crg4LkbpbRzLepXHr8KvcSpPBMGMhX4ZCD6",
  "key24": "2e18ubTV5MAyUMf4Zp5BRUfuXHUQ765wvcwa9wnxdgVMg5MtYcSxogajXHFpJYxnBp3VEpY3otF3zWsJywG81DDy",
  "key25": "2LbsrN5LBP8E1hic8FYY4QXMhdyiQQUVSaeQqEpe2UgCeGsgVnXmUX3fKaPKRiTUA1s1vvSwdgwzx5KfNmQCwKys",
  "key26": "5WL8u2PJ3hXA4HZgM94oXrjeU7bHkowJiGzKyVwqyBvLrfwFUaJEvW1thNNxGaaQhZbUkTHQmEKvYfPdg9jB2NhW",
  "key27": "5zEBfw1gFDMFFxba2e3fbie8ku6t2s7t62dTotCcuWLWdEj7EQQPeT4rft2o7dtg7VHxK7KWuAgdk5LeKU1QxwRj",
  "key28": "4kK6fDeXhNzLSmshDjUU9RAaiSxU7zYXDU2GF3VuMkD5jcSj9KCZP8zPn9uR9JHGkugMXcRvtYdY8Cn6wrANGog9",
  "key29": "YcSws8pxTbonyro3WgyZhzCaUe6CHaPRy6eAjMgRJSxH9WuURghvw4iCfUDhETYNAT2HZQVpYW3LM39brXUWSTQ",
  "key30": "5rav6FEaWUcdvmKZdB3biFb49xDBS5kjLKFZecC4CnwxZVmuWjd4VX8bo7jkbRXg9r8ihXDTRVY4ZPbdLpGFpYMW",
  "key31": "32JT93ig5XS65QdEwb3MDP4qxFueDRnYi6hYTdzAHPvKeDuW5UkHwfJnXamcjLtvV8WB8zCdjNcSP2KycEZNhuXR",
  "key32": "24oeWGgyNBJeErW94CWJ5bSshjY9SAi3xnmkNmi7CYNimuKe7eDGGpjZLSQDCncbRfyZdNDuJvt9WYk3BbmorDRF",
  "key33": "4XLomczchitHqzxZHGD5oaoRME1RDfofJ9txbZnRK3cNcPyKQTHnmdcwUhbJoE2qRo5T2q8gyHvztfG23DoB4myE",
  "key34": "2AgQn3c9bAvB1iK8JdmYpgFp6WMkAcYJgUZXzofjjmBTw7vFp7bffQ4cN1c2k2duFDToJrmWX64gffd1GZCx5fFE",
  "key35": "3sF9Df976fxSSjhVE6ZXhxE152cYUhKSW1RBUyFtDTYrqVtHtE4ez2o32AUpvro2rvnmag4cVuNmCaSXMvL3X44C",
  "key36": "D8ekdWtvTQgHrWJKJttCEum6mU1qC9PBxJC6Em6cEV5uZPWFhd8gdzTAHD2TafTv2Hc2fHPCxJsG7Nn1dpg1RsF",
  "key37": "TowqGqH4PFxa72LtgrTGxon7knRnCtHcpNPbwyvZqfyxJ55zJE3B8iLfN62aGHaLjAgHkwTp7VoMy3yRMqm3KzV",
  "key38": "A1ZFLZYWcJg8Qh9CdF75Xqh2tJxpAJBYPnCPqKv5nwuFVgVXvTyce5YEYweJw9Tm4vp6ZgrBBSNyuz5qW2LZj8V",
  "key39": "2v95upVnCWNnUdwBNreRAcZ2kACEJPPJBP4SvicURp6Ff34Kj89TvmNx7XPWRwCQf2Y8HFwMiMXbdeAnmt6mqcK6",
  "key40": "45ExZX9nS2QmPvkKmmCSuXNyUwhKDNBsRDo28NAFg3nB2Am3fHtZ3iFCr6zNYq1eyaY6T1jhwSaDofsUZoZvVPk2",
  "key41": "EGGi4vywNCJKrQi5yWZWFdx7sMraZaTHELvpSDfinNGZL4UeZRzdTBrUBuxBTvtw7pfmxUio1f7XzP6NaHwp1CN",
  "key42": "57XV2fgYCtnHbw4zKsGJJzmXhWE6jA8b7ATdCwbJazgEajuAc8JoNt2ytXY86Bn2pgnNXCUkUFksFVQNf52Kd74f"
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
