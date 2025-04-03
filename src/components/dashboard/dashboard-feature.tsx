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
    "5EEES8Msm7xP8XdpxYYLswLyPrcyaK8wzvwSAQN6ucp47yizntyGKupMbbF5hjo2sqz3bRv7pjDaM9sk9RXRCD9g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c9F16vyU4smFta1gxUQB7XnBjgnLpEVKgFYTHXHxgVwByzzWJEn9x9ZrYmH6oDebKpWhZRi8S9YVbqz4XiAHobK",
  "key1": "43zeAqx6RxsRCos7CRn18oTveG72oNvAxtwWqcLWEk1V8qc4JMXasukPTgtaFLy4CScy1Gk93k1axzSmiresAhMv",
  "key2": "HCNt8u9inMbJn3AA3mcZcuHzQ3YBoDkRZVae7ECHEDTE3HSb4TinQJyh3MSkNHy1YTHPT7uwyXLvxQtCcJTevmi",
  "key3": "4LsTTKbR8kHFV8uZ5i6XXSKSQsuK3zjNmWw9CjjCVzGXMy4Bwj6PsaGHFnG58zMP8k5Naauqi9sRMMBvZMaYuGDD",
  "key4": "2SUe3MRoDtwXsiQ7kvuq3uximpb3GsB2ND61pm3XWjcGxZutsFp1CcbMfS2DJk5A1txYbFVBpw62pBddW4kfHBo4",
  "key5": "3fMxfkeRyyTnCYAkwRCooX3E7sGAUapByRGRejxZaJUAn8GGCZwg8SR3EzhtEyfc6RYoR1pGMeQxDUudrFx24QzH",
  "key6": "5gAHEQwzm2Jah9jT9qF7h12Zg3y1tiotHNwLDxdtqK5XuK2kw2ZkHyYNd83HvyExAXR396ZqxxX385ozC4AR7gvq",
  "key7": "4X2jEWsWCuJHMREpjobRRLjoSCvDLM1PSm4Rbsre19vPEL8mC4yY2L4BpMXCCjQxWJRTqr9wA3tSmQR5Wg3hqN4c",
  "key8": "66pA29muytdqriqArCKx2g8A1CzqZuyQuJwkYrkE1npkfM4vdMdhSrWVxv4yzPapthPoV8kJjk6188kcnUpVmoKk",
  "key9": "3zJENwq7AC9uoKgigAu4pWp2umkc9KiHm4JWvyxDC1aJ5pEmPA7PPF6YaSJDgmqQAuVAmiutX3RHJf374f46JRBj",
  "key10": "47Hswi3zNxB4xdad6sNjnLyfDZSvAC6V36DX1KCdMj3kBoNjSnq9kvEfjkUueUvUfaVmdRc7xNXbtsRceYXjzCGf",
  "key11": "3XHmTLhVv8wuVQsbEHKUPt2kj8YbevYA12MCXTtf9H8fRszzbR7jKKFiVumdRcpf2wkHAj69appF2mJ9sFuERDsZ",
  "key12": "3A1cMDJUnFEk3Vdh83Ff6RMgtZ6ioHtmzSDVQTxfb9RKFnWD1zsJJbrH9ArSFkk4DgXNtW3cAW4dSxxVojWkKU5y",
  "key13": "4uU1RZFkiKNMEQqcawrrB3FiHZoiwmn8UgwQmWnPPWB9aL6qrkp3PbrbGDJsuZq454XBebzjTug5qb6vE87zauwL",
  "key14": "3rMEUFuRiyZB6ttCJCB1JC7oQtLMNpTxjAH4ozgjVpFGgcQkRhW6LwMLPeAYzB7skBB28fEDKJD8ZQVUctoS7wxD",
  "key15": "5RoMxnYtQqS7TnSwx5fDTJiMdfKgt79TgEj6if3YrmwJQhmouqhw8PBUWDRyJ91eDGRG9vVyp4MFmxSBdksqQ8tb",
  "key16": "2D1JFkhL1W9aksV2tgR2KwLfEC2KseDfpWBb3J8dswgYdiXUjjTxStL5TsQkz7aZzB9PtRKPmozwxZfDmqJASDm3",
  "key17": "2w1J2hgQaksD2GSqgfGte9dDR7rYnVbP5zxY3SyNBLTWdvpsDUXUikqyM5dg1PxLc99Vx4wRMuMQZyzPjuS7eeYf",
  "key18": "4Gu2t63LSauU7t3V4euvZHRsiVLWE4wu3fFZH5VynpB9yJWbndVw4NWm3SdQDVn6BoKs53E8kUDvxVRwPxHwmbn6",
  "key19": "3War31gksQ2xf4eR7EWfUftuefqpgxxchHsPjGnUJAtNd61e586xJtNhnoeot73LiGVd21E3NCudWZh49Suj3PcQ",
  "key20": "5sTwgRx4ksogFygxFMBvCWRqNsxp6KNvzkhqV2GEEh111njZKj2QfMedpFkwrPv32KadLqsBx2VgbHuETyNuGGs1",
  "key21": "5kJCjqA5ehbu3CBTjxkEUq8aGhT8NFxkE46p3hNPVkoGogw4VCZr8Mc1Ts5xqNQCFzQNbpy8qFvm8eAwLE6SNB3b",
  "key22": "37PmNrZyPwci1QxcjZYuSJEzCj8t9bLkrBZoGYvUdVJXsCYoemHwRswhTep44Zos5fS79cqBdo23Rh134YkT54jE",
  "key23": "mCa6BsNdkKLGgR8EKHjh1y3VkFJBVGEYUBnp15Qzu6Dd1qgiaWbXqfiBUmssbBJjrjkmcpYV9hB9LVA5JTtuiTg",
  "key24": "3goeNAYUZK8Hzg18366ooyep5GY8LpZHRm2sofCQ5qpUvPbmHXkSYRmfgGNGDzmtp3PBnBirGX4ymp1HfAEbVJng",
  "key25": "5mR67WPkNrSjuApPJdhY9uZWF3Kk8qCQCG5hQXNcHJf88enyxb9wwRYGeDcevq3tzg1Y9owPZG6htkdcdURXundn",
  "key26": "5VoYXgVaQheY6G3YENf44fVrv9GKvtLrv7j8tj71s7tVhtbEMhZwGvwYZgxzEfggJyeNEWWRaBujGb4LkXZGpKyu",
  "key27": "23ph9Fuc5LscDDuvL2YdA5LaJU2XC335aLWtbbqS8amK53sCXVzQg7VKVjNMBKDkAjqPLELzYWzJVGoK1eURJZGf",
  "key28": "8LZCygLhRJeeZd3f1Tu4WNSLAuK6bw5X1wxEZM7PSB4xV9FFDdT6VQQWiWapReVrBnb3UC7YE4PSPAAsLN65Lgx",
  "key29": "LYHvEmpBf1uKtJGL7NmHdLaJBakDSjtFEFPM5FFqQMNx6Na4pPYz28yhC8uQAuoR4NnvNqxuLqQRN7GNgRrGTMV",
  "key30": "5qaFuCU1fw226VmqkqtYzB4PngWj2G897fUDQoTRr5CrVGQxBxknU9nscAAWr2aNgQ2ULm46Pf5G8ii7bNrZKRGp",
  "key31": "4MC4ZcaYUoQ65pskHvWiXjJjKUpFRtLAqrEXUqurAamMFRgKCfv7PdPfgx9BUv2ShU1LTrdhVfGwDiNKheZDvQmA",
  "key32": "5ta12f7Ji4AYa6qBZpDHEcznBbUm4GTTZPNUip1VfypwyXRjsp31S84QMWc73Rgqo8TroNLKwUp291aUKd8E5PGT",
  "key33": "3yieLLw4GesMZHNyxi8isEmqMcevAmwknWEYeqgm4Rribv9efxAHxucDXjQxgARbhT7SyhKDvSC1cJTcDVxJUF64",
  "key34": "iqfPM6X3eXFLHCxdDaZdwCFYFYCw2NA2MhQ1eFQkyvtpDXbGiyJSyChp9CdDMdmRALy1XgNWxG1rHx9MZ2A2rtM",
  "key35": "4ar9mT8taLMEsEBWccyXTtRTUJyQANL2PNVH1y2gEB8qiE2J1kqqTuYZbvZ7st5jvUH11RvqgrLBHgdn7kHxHn7T",
  "key36": "5ruhUAGA6syyLChvYRWy4TNG2kVjEdWdzGUSQRLDp6xJRotZ6fAofLfD7aA2JMY2m2ppK7zpFXJ3vPSTqBRjBYw9",
  "key37": "FwmxHd9WrYnMVChHD1vtrzbmygZxPwaDtEmY4aeFy3a1p3Za5Q1HsXrxJbBbas82z8veq8RgPS8Ek5c86U2Epju",
  "key38": "4JG3W3TAx39ghjXuAn993iaGzkkE7GX4vwaPF1UzuZqu7frvzoHA5gMjLHQzF9BV4Ych5PmFBGtwHLXWgBvwGjHG",
  "key39": "4Te8LXSDs6T4ubnvfMYpkJB5xs6taRgei3DHXJXY3W3tDjmQyonMo79WCvDuyL2csZ5LkqC6Ydx1WhuMhaetrxXP",
  "key40": "34iidqdz6ao9za18AF64rw8droMcPAKdAsnTwCZxac7wmrDMkiTMR66Y71Q15ELsn43SFv1Rpqvj2zKxXCk9DKsz",
  "key41": "4qjxXHPQkTocgAMvGfTVGkEPGeKSrHC8f5aD51XEMU6eYpiR6VXY1XASH4tK9xwjxxv8KK8C98tgoxtriNCu2QQQ",
  "key42": "4T2kgwtrVkkqyW2sNBwTRZNQnr6Dsw4LPoGgpataZB6gqSYZqu4VyHzgYsWLedvvy4LjwbD3SADMo3kDfQPScqCm"
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
