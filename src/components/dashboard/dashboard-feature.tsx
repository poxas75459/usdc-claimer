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
    "3XWokf7eLpDMkzqwneA89yQ5gjwHvsj4suYPhNnvgbaZ35PwChwH2WrqgC3Sqhq3iHCUAYCyEvfvna2VDbFxPyx9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CM5HU2DVo4cRoboAA9G8xmfGNh6p8RGQ5QrsLAK5qou36jczL6Cnpv535k73so2SWrYYjk6ohTZdH6VK2k1bDwT",
  "key1": "5fNSv1iJWoMmiXFX5fhW2oqPhBwU9rUHVQEt69Sa16G2Q2KdefAAS65s6td6ofyib6ByeHCcFgMMRJbJE66z972X",
  "key2": "2mcmbvBUEUD1vnCEQsskMNGDjAzUbye2eyBtfJYvvayTFKZTo5zJh23RD3VbyK2vNe4XCdhqiep3C7zHCyxZRBwE",
  "key3": "2VfGNvYZ7xFa8TuLbWULXUcAajmCxu6HtA1qQv1PU62yvpkGgudbPCoGUKMnE21aV5AhHcnNe9ATgrjPDRX5VPDG",
  "key4": "4eZUxEqPoZE3aJ81pAQhq5WuSqjhfu2bSK7bPD2Bp6MDPQspiw5dXgV6nrrcjxay6G9gyZ12u1V1eNcTu9kjA4Pj",
  "key5": "4SMwmiDc1M3ZShCruvPJJXutCPzS3tXa3Vq7tqFmmxhHczqJW8KTmMZk2syCY6GNooKkzYPgwS4aJAWjNH8QJSyD",
  "key6": "2pEWZw4bAXxLTqMxVgo8tQZGyhidEzT6s9SP4CFWBCrtbzvpjC7bd5TgWRwt5BCX3kwVP5u3S88Rjf9zeSMANSqB",
  "key7": "7nHdC7D44cpCUyjxmyg6pcZJccASJavteiRv8hF9bLqhPKSJfAyCyUyy6BerDu8wjdkjs98AE2XKUzad4eB6fpx",
  "key8": "4vcVj3Jq3rAjvh2cKpZP9wN79pRf1QYXLN53iNrhmxrERGPg6rqpm5VzPWDvCWgpe1YcRHb3ZYGtioQJEEWLtLWc",
  "key9": "2v5swNiFenXPBni5mJ6agSngs6bTkWujZzRnA4rAtX5acoZcXDWkYasrBjXgE5B1Po5ZmDHW2MS4HK5vuxkFRTGq",
  "key10": "24WdrXS26BdZRv2FQDJSxVeaQTbZFjX8Du3z1Hg43U6ZWxcq28iGMj5ZLYCY6teFyM8WDNggcQCSZ4nSYgN8KttB",
  "key11": "6326QeUC6xo5UwKUEMJvNfBZBDDFKSxWRsseQu3QVKp2hyk62Hc7mPQLiQKBT4vmoH9EDarmnfy7HzdQEfGaNqFA",
  "key12": "2BKn5LyYcq3JKAGLdM5196GihMVQnFwLdGCX8j2m2kYfTc4C33dB7y9Mj6gMxJYk6cc1Pzori6ujFkcWjiFMw2mG",
  "key13": "WjvXhZAKdrXHnSLGPNugwuMpQPTDVi1EZxbumeZ6iJEDFJK1RuZqdxAEsCj2v79WvFhJCLHUadSGvh14VvyGYhF",
  "key14": "3UzzmmoXeadwiiJHmEP3EYZJUV7hGzprZW82dZtneDxhH1M88AMDzCA2tAfsny2X1beFtrXKTPowLcyaUtV2wJqt",
  "key15": "3HqxrYDgtNnoeZskvFxX2WUhnMZsHjsPs7dtXy3ZS9f6qy1C2Sz5G3fa6o9NUTASYjJAzadJcLf9BMMuYp86a9tF",
  "key16": "2mmpR9XBjvkq6J1VP9vLoYwLi17qWtFbV4iRaGoMNhYioP6NqAm76RcYgxvjXuuZdRJ48s4vUVJN9xWwacfADzej",
  "key17": "25cJo2MsMNgn96QapNG5RZT2WBfRSqBKGbQYdmuSaBc3GBkD6SzVK6JZq1uRFXfpL8uqgcAtVZKrSkGAPMVXbcaJ",
  "key18": "4VxWdmHUeyem9SD7oQ88AE8SRyLVmhG8vZdMkRbYRxRpyqsyCxjeWtjfCmcWoUJG6mbXo1X5D3fiFmJsvsq1uxPL",
  "key19": "1q9LgmXKAWMjPVg6kYrMyED3Fxore1wBzGLVAifr4Xje1JsCtapCxWS2JpxcX7n4he9TV5eybsaTfPxJ6MeYtcn",
  "key20": "njzyYM9TvVjaqq2BmumgRp2zwGzDD6XVpgq5K39Uz6UNXwKbHBhU25MdAyzDus9nHRje9oaxUQisokaUcPNWiRJ",
  "key21": "35ZpDFj2BSooUS7siStAzgBMCD4GbNiTJbNs7h7peTayTumRRtRGuHjHwPnJjxeM6KPoNMGzhT5eku96SqphU6ZU",
  "key22": "21YofZyM61pWzXQGcEuQHJPAbqve1XoMcCGgeh9QE1L5VCzZyHqGMKBkk5KhFR3g9WHcDNPjATw9CTcHRcUwgeyj",
  "key23": "41LYbfBcHADwDdRsDpitUqaFCT5dzWJM4WcnBoC4NWM2GApu524qVM2FhPYrYo4NuWKy3a9VXNSkqWpBqso4J9Cv",
  "key24": "3kyX1qJJdx15BJ6qiBqGLGJQYbNFAKECqPQJrSTPqmaDTc3A5nvmyst1VD2Ry2DyJt9vC2yiMWhqBockgYvi9N1h",
  "key25": "WvGtD6G7tBeYkDKLtcfitUxVWZudkUrEc3KcRj6gdZkwvqvi9FZjg8RrYmc3yfVxawaKJHXm44FVZABsFsUXXkH",
  "key26": "67Ja4eRNPPawDqMzjPotCfhW4nYcm2GqvXgtZHhnScx1VQe28qfta2ZLvdXjwPFiKzv83RaDeQpooZ9EkotaPyup",
  "key27": "3oLx2fJazN1TCf1JRT7KANdi55Rc3exPYeCvtDV5rrF5Vo1V948iZwLJ6Lp4xtSPCehp6tbvgjue5WZoByNeU3Hm",
  "key28": "5Uj2wkuwwRLuVkTGHRLzotmqZP4KUVYXvbXWarWGTsos1cTg9q6UEw1A7morSuYpXZ7fNy41ubYF1HkvyzHoYJEu",
  "key29": "5TJqGoJHLu18zGXgPQ9MkGLbfGNnqk86WRypuYSfKYNUJQFxxfe8zTY5D6gxPTg8wRUjPAqS7zzWEDsZHrgpNAvE",
  "key30": "3tg5HEecnbvbzx33zS46sB9X2zKvSBqKa8HxoZXU9AKZwEeLw3Zqs3X8ysMhihyZGq7YAzSM1memnZhtSWUY7tkc",
  "key31": "2VFjEDrEQAaW8BkC9RdzWf1PEVYDW72CRhG7R7XQAhKt1NvqFuBxxhzYZaPNYZMkkPFzXksvYyhEViFwyiEHNvpb",
  "key32": "4bbDq9ByyDAxZZ3G1bCMWKJt2q1tkorPoU6sjcsrFBqU7Sqi2ptpeW15pqd3AykjSfECEBrZzGDAccS1TXzdBsva",
  "key33": "wJQembXuvCj6sAPRyxt95TWyKKguHAKtRb6KGspptrhu2mrTZp3Ne7ET3bzW4tqWfYSwZ8mKZd64Kc6T9uieau8",
  "key34": "1m46pt4hkLgvLxhF2uNEGPAzB898Sh7Drgy5YSDrXaFMEcPUjXRQTKEuZSornjhGuxtRZorEU7Hkr4yk3pa95qK",
  "key35": "5TgmMwJSjBEV5TwbSjgcq4au3qUcQDpg8JdLrSpf72davrDA8zFVAPBPZjWvCPLSkuDW7Hx149yNYfVv1pzCyidM",
  "key36": "e8nQWrg9rHqwdPrZzWGJorAJP7GMats9cNpYEUDeZjahkUpvyXi8UueccSdsCTpG2rnrJKAxDstfiRsymEaorbR",
  "key37": "3nKrczJgDcRqckvtLLLAdyKaSHjNX7oLcuqBPTyeZcgPMCnZCmDTWs6iYT5VZhTq2n4sf3eshXVH17o2yMQMGn8g",
  "key38": "48wo4dBCih4APN5bGznoHgVzwK9AbCvQcHX7YnsfJTz99oqWW8FBxMf3gihjzZuptT2c3FGb7jMNBSvdGd4ehBzt",
  "key39": "46yJqrUgZbkw9Dc89gbtowaKPAjyRMi7uPJ94s8AvCgpDebX38HfTkpFvGRcfvEKv9XQpnYCTUhHVYT6cwRKKpLC",
  "key40": "4RMBGw51uga3LmXjftQ4Bg5zURSdGHpCxgetgKWCs4iqLBSmfBG4VDFTNUaGQifBP7j4Rr1Vg83v9LiwzV9hfaD4",
  "key41": "21tuRyu6CzZEWXnwyTR4ZcH9gghtWrdXtFhjNEPUWsNb1q3g6n4GSyRET3YR4DMFA66YLPC5yesoX6LCbkRio278",
  "key42": "qKiRjJEXV2ch95PXK6WgZzL72Ur9SgHdW95bByydeusCCHbnE6Ad9WSSN6tqFCcqLAmg3AnRZ69VNJdiLQJvhJS",
  "key43": "2Sjxai3Jy5Dqimkqy3imiotETwYU4jWeQyZny6ARtDs6UxP17T3A8ri3D4reyBjju9drSzq86nufjwcNPF3ymufR",
  "key44": "2VUFTZx7d7d8TCWu3ZsrDdeTPSbRRcvTbP6dwGuJMDKsVRQFc6q9V9Pt9UE89QDJH6L5j5JUWhMDigWtt86uEBBg",
  "key45": "4G5G86Yq5YDtp7PT7dwwmyvdj4V51Sksc89Lh25ThQKyJ7LCrb5DN1VgTvkApQu6Gk5dvyBFa9Qq8dEkKGGxds6Y",
  "key46": "2wU3CCdPtsnfysAHKgTsEnW2RZgkhcuFwBWjLxXUREkK9AB62yEb3ZBgJwre9bHZ1pVDHjkQpyMyJ48cYtiz5JPi"
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
