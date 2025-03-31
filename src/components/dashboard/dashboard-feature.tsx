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
    "3DaFdWh4hYXMVL8p8tuzBoLjV9itDNQncmQge9a713D8anLnAukCNxzks21f3oReSKAfnZ8Q8TowKqBLjEGv3jqd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42sdGBXez33zxSJQsGw9skYAHRZ4wXd3aK1KEu5qJ9QoWA12tTYfdh31u4dv5xH7pEdNQAkPYnpYWVfnet3j1TTN",
  "key1": "w5YReUDjUnX13prZSz8Gwb1NSYrJgYwN5ZWB5EiouFFjJ8fWCNWTx1tTMURybdGYn3uqNi8KR2xKpamn2ww946T",
  "key2": "5L5cRhqBJoQVaJGp4AEacrEaAU6iqUU1ZTQP2tVHYvWzqVqYpxWmQm3H5ZM1t1RsS62T95Xv72dxVz1SJNGNzvGL",
  "key3": "5aY2ueNSNVzJpuNDpZJTRnd215rMP7nZJEAxUnpwu8tVYXFC4XrdX7eYXPoJS4vUoJJdKsfJ4FGVt5KAokZX23yU",
  "key4": "2wFXDmT2zNVHYKudZNLP1kJgDXATnMeL49nDwTrpq8mqwi8xv3hPnUxanVfJnFx21hJY1tHUufmMd5r84DiECwRY",
  "key5": "5E9L6TUNLAr6iFSmgJtXjmGQc413dEAUJpYSsjEyw87L9wkV4mrQF2Usy56jCdgHXuoRhwTpEzroaNaB5XGbcYNN",
  "key6": "4ETHnn9Dcb2cuZBbwx1y9HwueNRx5L1adbLkX1pz7STvUCeJXHYsd2hQznrRyLHUhBV1NMm9Gk7hu3AA9BUAZ85f",
  "key7": "1dwQx9TDVkGY9hBFFaMCWgCkZuBJQeohqT3ALJ7BssUfa3AVhk5ahDRL9J7UD44VrAMEUmFiLfdHmWSXQGfpkM",
  "key8": "47mXtGfweeXf4LbM2h3TVfCWPrxQSbfFc4kT5rcVDfzgpv9wtqsHQ79QRiWkotKQrHe5FBQeePjsRA4Vqnv2fnLW",
  "key9": "5vwXQRnWPzBphRkDcYLjd6yPDdk77ni4QbSr3qkYwd7BMCw9W3kjDrX3DosHcjVxd3sNsLCA5rKj4h1GbcUH7ZwQ",
  "key10": "2wmUotHaV2iJDGSHXSsFNwdx489Xw3rNrAk9ZwvkyqB2yCJayNgooJYxCEMpKEtb6kU5cvx1nQWcALN4ydAfhttA",
  "key11": "jAPspedbYPZxz2VBVDstqTAiaEVNuYp9hmXjVQATaRa6wKDDdVjTL3NuG3C6w1GVCMJCWusqWai9x1VFmgxBruN",
  "key12": "x76iH4XEf8Rpfxpbq3sxNMdh8687LJ18XwWBuqVWWf8wn8GVsnee12twQZbAypmEk6GVVXuy3Hyn7tph11vjF8c",
  "key13": "4SAxtyoB8WjsMDkRDgme5ph9saankiPVyVgGfGKLhBX5DDFsEsUTJTjpYKa5BSp7TB9wL6ukkz7FaxXTyJ5mxsBp",
  "key14": "3xVXS9NARrZWhgqRBSABFRUyd5FR2WovoY4SnaHqMmLrmsfumbmVASzyfAFqksNTwTWDR67Ckw7cy7oCEa53TpGR",
  "key15": "4ZLbvVFZ7QUEiWairFS9iKXhpQtNQyTsEcZ8Ez48pscAgShfgk6JoYU4rXkZ2k1ET4urh81y1N5t7uzoPTkbcWAW",
  "key16": "5X43GXhaBF2Dev2rp7K9HqCH1WNBNogpgrcRHYpYCSNmFpPNLRtPdeW5Hvg71A8ZvdJzqNhhXtcnuwgoiUC1VJAM",
  "key17": "27f8VwnTjcnseNS9H5w16973JVCzog2edxXR5idsvEFaEDh8PgLwCZP8TQX1kBecCvWibtPdqjt4FtrzXjDf4EGT",
  "key18": "3BWnkjU5ZRzG48RVpnHNeF4qG7SXJJgecz5L3QPrVWtN3rAZn9JRQxFsX3QqVNhz2J3dK6HM2PitddMi6oEx5XyE",
  "key19": "3SZp1CojUwnbxgy9njde7ChhyeVVD2ico3HUmNAiahTp4XmkiYvxJ2TDRcU3dxfzbiRMdkm3A2Qk4WYTRjfANwhi",
  "key20": "2kNnbS5rD8kBgEgqdZdLsswSqLwKo7tXxTbHVfSttsEYN6usV1yxX6heZw4DPdxBs4iCkgSyqFewaRVNZLU3z6Ue",
  "key21": "4PFebgkA6q1uQh2n6Szth9aN83YPAr5PgLczaoPxkMFsU8rHAtYaJktMSHL9ZPvJCxbTxLKZb3HfySYVxuhPwbab",
  "key22": "5ZZNxE6AnnMGkMYZvqbArdG1LKaEZkYtj72s3zNoGr6qTiMpvSEJseLb7d4ohzCPeYLg3iGiXxxMczMYaQzmDYXi",
  "key23": "51uXQuTiLCirLxxWGEbygVgB81eHMhLBFCYuUh3dJkAVbrMB8DqbuXwQQuezJu24BJZpuaQHJvCvueLKte3Uwg6L",
  "key24": "3P3hBYDa7WjWoZM12BPno4GYp4yLWgDGQMtHuuaFj98UeHMT8jzm6KBGPbxtvazRLPFJ12bW67QRorhUutGj2k7p",
  "key25": "417H132GoeQVw7BgZXAnbCM2q8DGBi7ZijZbyAdFrfDB4FVKXEZai6e3o2HMcrD4HYjNSu2KDCuEvW9KhcYLneup",
  "key26": "2WQUB6FtuEomfJqzzAcmhboNyYNcXsXiaWVovzbbTpR3tMLHRmAWaShqjLwMqVxRoqdTty4UdWe1ToEvkBvTKv3V",
  "key27": "2CQuNTro6HKRYay9UMrRN86BNn5Q7BkQE1aE83H8pAWSQTuhVv4bYTAzovZP9a5jbnHCVLXQKFx8px6XMYes3eSV",
  "key28": "5RuqVmAaGEvaHJZiUeSLNWVgCs1nHS3FUiECYeryALNYELmy5nXWwBbABX4Sbmk6E5jxSBTDxhboyN6xiQNnturx",
  "key29": "4vNWKMynDdArqeUGi5gvbGjGM6WCckYLMurKUkb7UVz6KV9WaJK7GkEjKiavrnfhNuuLzVc9aKtimJPcmcjQ3m4M",
  "key30": "5tC4GutT2BiXBSXTRDDrwDNzUcaooBaXysCsyLaX9hMfkEbNj5uiGqoEkxKNejKoy7pHFMFeWS8foXexcSJgockk",
  "key31": "irunv9fKDqqJLMdryhntgVsuMbbMiYUssGX5Z8ixfRN3sTvHsGuAYMk8884imcReSXtVLtjnkhWzg3zs1LbCEA5",
  "key32": "2bM8ZUGJU1sPorMr1YkpXV5QxMTczBwt1eXeGd7kQRVBdh6A2hbuy6wNGZ1Q5mFXAhFUP49UeCdBiCBtX1FwLoRE",
  "key33": "3XeXryvRn62S4UVtfXncgTkPKwyP5fxENLx2LgZtoLBzxavFnzitJu2ayVzzvg3bFEPfjpxffp1J8wtdnbSQTWGF",
  "key34": "4NChU5fRBTP4NnA77ejuUs6ZLdKJ5CCjcsA4uL34MkKDMdEfs4Y9xrmy17sFcVoeMkMZ1nE3PEMeFH9WVVdf79uM",
  "key35": "NZVmV9iyAuFbexTV9z8eXVokHS4762MoRaCtjx5bjdEDW3F3MTkZiFkPRMTBtNGT9ACKGe5CWG1RirHuzkH2rDY",
  "key36": "4A8ciBZDh5icJsE2dQJSjzZfMYVNpHYJTxZ4V6hbSuyUBwH4izNBs7ibbHGLZKtEncJEavqZbvbMHkvYs73XeDdu",
  "key37": "2oih1qFAPEUKnqEDythKpjbob6xJnx3Ls6afpbqLxqyAhaWQ9xkneX5w9uCxUwq8rmppwDe3u9oVv6mCQvay9V5s",
  "key38": "2M1mc56TLdjruRc7VWi2YREUdCaRtUX7wD2VyfECxpqKVks68XZ1xgRzb69rQxRfEi1AZfWRqsrgQ12zvqnkPAed",
  "key39": "4fJDHN2EMuXQAbfr6r5eWgpejp1CsGqZCvyKSYi9gByZ3oe719ZuvZAJN5wSXWmvqvtWoP7UxpciawvHmjXQ9RK8",
  "key40": "WpgxzyWRUCZqx2ZBbdcfUy6N2EPVebtZagjter4JMoJdAqscRZc8woCMWnEQmXHj6p3MeuYiLWMBehR33gy5SMw",
  "key41": "5GMZpMnb9YcVBXfH8jxNaLzDGyVMMkoRTvTh9MqLqXeCXeB5dYMZj1NW6RFSJYVRYDtjQMnL1a95Ayv3X1AYVH6E",
  "key42": "4x8nboo1rDE3s8KbUfigRXguCXuMxu1nCgRMrFtvJWvD7gdS3Yj1GHqZL8AuwMXCGbdwvQ8wQTPpTixiDQvhfAGb",
  "key43": "ip8jq8XAQTyDhkgVWZBiFzCste9WjnQJPFMMKMTqxpnaRsi6C52BX8VfGBZTphrZNf66SrGXAkvtTQYdiNXQqWw",
  "key44": "3w5mtSnKxt1sM7gEKSuy1w8Y5rfd3o6qpV7K8tPLwRNoucDceV2dqga46UiYinBnekZEJEfEQ5NSXxZ6Q1uhkb3B",
  "key45": "39rh2hJJScGppPZi3KAeFMnpeTZQCk5wwASFtFwFR73wQQ3GmV6viCvzAY82R71xa22d9zuoSByCAeHTRZPeeaCN"
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
