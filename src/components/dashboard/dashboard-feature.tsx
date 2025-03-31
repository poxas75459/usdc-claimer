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
    "66dvNNVx3YFhQBWVkV3sG2QRtXAU5dihezFeogZ3vZV6XxbpbyUXKUvqkFum7as8dBfCf6cJo9DGjqSCG2LyUNDg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WqMrzjPuTWr3J74s2Q71feNo6ESxWAXvyYC81AiLwPMjToYuhMDKY4B1USfkYprKoxQVLejHfE8sxob2vTsVQ1E",
  "key1": "4rGJtEw3oa32LGjczscYAZipTjRMbb3mS4mSJsDZqzwuUXYKjqHrPiU4VRC7naLrxywe5LR3kRHJ8pTwae9PTK5h",
  "key2": "4rAmXDGDkb2DTkEXKXVSoDxeEN5pWtEtRamkRvC4EhpEo6Akbuidnwqj6pUmg3MJJwkj5KbsMo1QipUz81BKXfC1",
  "key3": "YTbjDovTJgk5m5CeNiU1GxEjh1JNCPSaL1JPAGvNo6SG74pduVTUwzrzj1zCEGqucxhPtA3giV24Z5ScGMUWdcr",
  "key4": "65Duv3HuqF7uBesvcJEA6tqGkRY8qGSpLr26ZDdqPMjDjC46rwEgKwizHS2CvTMXnrCeZuecMHVSXP59SiLfzNiE",
  "key5": "c4HAzpXuj43srEZwKGJvyUpEEaw3xBy6rbcTTdaDbeYkJh1GKhgb2Byazqnu7Y4zkR1LRaUVkqhjCQTKhVTYfp1",
  "key6": "YTxB3JgPM8XHAjF2KmjfK181nq2VNuwf8GdRbu6MXyeKwuM2dLqY8qyFS1aamCoYztFhE1Zn9FugUhiN9iRGTeo",
  "key7": "2ZFk43ao3zqPxY9aYMXc5x39PH4QhcugfXioCK1k2pmjW9aSS2w7CrL2obeaFzwz29b87dEWFT1dv3Dxpdw9aToa",
  "key8": "3Vt4h3JdKn3wyqZivyXwkix67vYmK5Egs7AAQavtW9gTkKtwjee1XZ74DRQ3VLWUGEDvDzDUV9Uuq1Cd4Nfe1xVD",
  "key9": "5p5oZv68ck7Xkrn7icGH5pL7SFDgGbE6mKRaQpYCUJSQHVcbaL5v9Ne6D5hNNKDQKXbupuYrUumYi49Xxddaer1d",
  "key10": "XNJtNSCbMCsKaHff9vgXHgbeYYu1LXpMEoKu6Y5mHKW5tFQya2MwxfgS9XfxQ9jeJfk73Tjnx7msnu2YWTzQKtW",
  "key11": "m2KJiQ8sBJSV8UTNnQtZTC9q1GscJLgHEve6ajJyXSd5xAEyYryvomzA2F89GR8H7GPaoB2ykX9J4HD737vhXig",
  "key12": "q8SDiT2UvMBTvGTdHfRqqt5Qf2xJRUhqZbR737RTBjt5c7fz3jakUc8gS52BEe2V6YX5kwMmfzzc6NnCDzGbGvr",
  "key13": "2p7FiEyFGvkcRkvxXpmm1TEmjZs3qGEJ1AgfHf1NQywCMaEtq5DTVoMGJKku1PdQn2TVrV17CqjMztTztRqJrFM2",
  "key14": "5iXW11XchVHqK1QH1fZEKgJT2L8g8dF3ty7Hj4s4fp5vf91WfChp5NwoQRAwqFwEByJ8xQDHcfCaZDefieVnBkJr",
  "key15": "3upNCgTd6qjWVV6QdHSHS8S92pi29FZFhiVLE2CzFuvjYdj74SFuZkyouioi2GJXtUqNTtGv6W9z87NTbjgSEpnB",
  "key16": "ifzXJt4J8UoZZwjwF786jJur7V9YrdS9XBuhNVZ3fRzK7i2LHQbk26tFYc5TS3X6Ld6RiqBSFiAv2TDJvpGhDZn",
  "key17": "31QDWcxF3aqts5dVHyw6xyE75BytQdUqiFehXW1o1c8fNMn9ymo6JRanCEiRFcKuxmd4m8ed9tLvEgNFDCb9EJcQ",
  "key18": "22HNcFnwnkVEqyNX9XErAufuwFE3NJ9ETPecRHRSZn8oi9d93SjjEUeTgBtzA9xM2xWYPVjQpsxdh8r3wxHxwhQH",
  "key19": "4Z1NHLaChodtQxgoQr2N3Xsf3AS5swkrJzf3DrTFXJbm4Ay67gvpU9pcyvPwv6nrZTZkMh3JWJmHVanppzVNhb47",
  "key20": "66BTwdqg1iRoyihDTV7zD1Qs8vUH1UkMQ6g3Z2xM9FZqVsEtRaumVWnvm8UNGPMS63Fi6tUD9fU2Y2dmZqG9XjXP",
  "key21": "3SeKwiHXPkBAifF81DS3NJ4hYjjugMsL8XhsQmRD6Tp6mNMUikQBEo1fQ2kU4d81uHATNYD2YkeVdfsoTaA8hUKL",
  "key22": "5FWKtzaueTLNXgS1iAQN3e1er21AC5WfRUupTsVaauPtxetbGLgmBsbcd4PqKhLpPykgL23tGn1umF1pqxXvAco6",
  "key23": "2sd1TLghnM3ebG4MGk6gt6zMSAWRuV3DGXpsY6c7ieh21mvW36TQJk9xPbcMbWQGcPAs4p3aGVmFFXwKds6923vr",
  "key24": "39D9nN2isV5cBN3aqhTYtCtVRq4FHXzcRBummnjj2x11npYTMXNYUJbGAhMsrc4khoUiiuJVg4bUYpCDg5UfpCJw",
  "key25": "mHJXdB1mPSmVdataDKZtQ9Zmf7Dxp4cUwXVrLCeZaDT2dqPAEkyg3EZAfMBkVBKEZwrCFeQW8EKNngx4vBKaUKp",
  "key26": "4jdwwGREjTzYQUSvzpL71i4rcCffrrbyZbPYkf1x6JKcTjj1YwESBC23YnXQp9rRqCh1mJiGjMhZVHpgzsXwtkaH",
  "key27": "3R2ftBkdPoYTFGBrtosKhhYVhJT5JedAhcChZdn3AdM8Eg5QJivYp422AgR9x2W5xP8ks83LKF9btCnC88qoUnR9",
  "key28": "3DsiBDQVF2U2wCNyoCYkyh8hPYJ5hpmzQm498JEA8UTzkEeVzfSiSXXEb5EeNZKsToBY8SNcKz5uWvKpMFTiejrZ",
  "key29": "4Yqkzz49ogTTHNz2RiUMNxo5op8ZeL65RMSUTA2orycPBVmjsR4a28MbwvDghHojv4DKeGwFuFDo7bpJVaqE3dU2",
  "key30": "4EkmLLX3GLn2DZTVYUHtchziDZnkj2ztYrYmzNjeHSjSQTQTvBzHcJt4ChmzeEMRWhML3aCHKtmPfe5ADMesJ5D2",
  "key31": "4cowdEjztEdCXHEXJHuQwJ8XwCkWXW2yFZjDLQkQAj5UBPSjZajFmEqgEbSeFNosSP929skX79538jBDdD1ow6bd",
  "key32": "4WoUxqCbv5ZWmw5dPGFfun1TARZg1hShVshA7sVARPuediEf7tNSDotxKn3PS63N6XP56GdERUsqnoDYyr9MJ6dq",
  "key33": "26WWszeK1AacE3PjxurMcfmcr1Wg4UydxRjoSuEtndU4ux3TSwmnpLCoxnfKppwdBDJfuNZy1eDQrgLyBxzcXSPq",
  "key34": "5rgWtmJhcZBuZo4hWXMeTbdhS5ZJUDD9CxTqzY4nDZdgEomBKB91sC5WqZw8JL71KrWDGGC87Tjk7bmvZH6sgQg",
  "key35": "2KfXUkctJDjxvQx6nxCrMDkcfyTzLakUXc5JzQ7XcmFngAMaSNBua1ghva93L2zgU7YaBtZgYdTmF8zFipatC28M",
  "key36": "2vg6iCDEzFd2co7wB1sqkLEF65Kath6yfKErNCbcoHK9XajohixtZhypVAyA3LtruuQYS9h2VHAKUhiiF6DZDnHa",
  "key37": "3ffd6Tgfk7bUyrg4LmHp7r7XPoF8mW8Q4w5ZPRVStm32wKVGexH95fVcbjhpTXp4uwRbQUSUiHJZxGs9zUXtMfhM",
  "key38": "2CdqRoBwjqKN9N3VFEQsB6DC7qpKYZiZ9uQq53bdu9QnyaaYA4nKy4WHiVVFfj2y5uA9zAdnJ63fbWPxMRKBn5Jg",
  "key39": "5eR7sHcB4Y91iiHaRgoUzSpiqjRh8SEX5W1NUeTL5yoQG5wVjVxWY7YA4oaEE24seiiryhcYSLwSej2jfwydmQSM",
  "key40": "5R6wz7CTnWrh8opihxrykD5JsmNXBMi2kTHojCttKoFUj8beancv5NK5yGrh9s5tUvCWdjY4px4XkyvQjdryqUY3",
  "key41": "2ry4RbgKVDhUq57vQjYEKCbF6aaTxXD27BFjwGa6mjPXhKP3AML451Ns3GvsSZunFJyrQyXthd6Naw2vCLAcBewd",
  "key42": "K7QQwya94td5pDrRJoGY64WXunMH6nkm1bBUrxyu4rbW1TdVXuE98nHf75aosYFPUfZmo4cQLgQqgRSQDvVP6M5",
  "key43": "3hVThUysRD9KWA2hg4dfesTKbWoHSKhbTnJuHGHB9w9DGfco9HY846qbUd8dWQ8fjUW2GGS8KgBygn87wWgotz62",
  "key44": "5F6gyckB3oLvwxxapiEsPyNHeSfqnusaYFLpAJeBZrifdxSN47MkJ2ngCJ7w8WxkEUtzCT3NjhZt2AAtsizefis",
  "key45": "3X1pbpuXDYrpDia6sao4LRve6hzokPUVFVenmrgJJ2MNPwkuCfRs3RpZzdcovUzaJn2ZV5VSbs2NMhNiP9u9d8g2",
  "key46": "45QM3TPUkdMTibVAGA85MMSNqWnfeWfH8jtj1t6sfcQ896S5csm2CWEnVdXBviZuxLwoN5xouUYXY52GqSfjVPwH",
  "key47": "1buLPDWE6vcDd6j8veDQ2Y8kkaRJEsB8cz7AWg5WwX6LAi2qnnHZ6h2VLQyJVJpciw19aU4CXKB2cULiWepdxLw"
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
