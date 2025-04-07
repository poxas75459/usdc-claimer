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
    "nQMrzf1F516hjSY7CwpPsiyRZNGkS3vKb82R6AX3MGkvpgUvrLG3toiS8gZsgHFFdSrcgB213Us9LZnP8ETfGDd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37c21Dit7ABtmGq7jXAb4FNFE2XkBhTBtNHuQzyDnhPm1Bvb5BBBAcTYPix7wdKiQDkEHLQf66J1q7QaP6z2xSzv",
  "key1": "2qqdFfZ8h1Shq1oXXGHUCX6MNQT5tM9crPgG1mAqBWpTT7VgrS3wCAFQCUSyYyUjzPjDRR1UGCjpzcH9Yz9GYdpA",
  "key2": "5Sbc6oUwitxKEHrX8tTdPeEw2bcj12Lsy2wwvSyH4rsPoKPy4ACP2eYSxYkxnJixerjnQLvKravk8yfYTSpQH6oa",
  "key3": "62K4WoLxicAEcSnmtxHrr25nYnsS6RfUiqMKgzPQjk2nQhcuJubTYgvjGnkP9P65B5qAAj7XFQbJ3T3Sjg2anfuQ",
  "key4": "5nfxV2CddiRyik8TS2HLVQ9TEEgpvXo2w9iJems1NyNc1j4rmBDT5cSb4hnd1xkp6gfDenQcvWZMDNxFpv54FWVU",
  "key5": "2yJRvAeZGFJ5JNw9xq7KfcLfmo7FNGp9Ppx9XKFQcfCgyaXW982J31177eTbsKNquZYkZKrm8nWMNpJnve94RPpE",
  "key6": "UEWjUaUqTgVYHh5DsniRQMM6PHyXjBHoC3yN2AB87c42ScAhvtSjZTQhKiupJk1FDqReyVso1f7kC61gcTWaQrZ",
  "key7": "47oaJV6E8jzSZUXzAZuZJTTLNH4EajkDEucn4yjnDyBGdaYZXq4ds6fBpPdBHxgTpKEhrXaYHyZ6TrzRNPfVzsL8",
  "key8": "svvKi9ETgPqekmxWt3mkpz6vwtwHwSurW8HebAXvB3q2rPvjakTRTgsUuMA1nUp15SjCkxjXAnmzVbjkn8aBmaJ",
  "key9": "5HcJNJgWoSGd8jPz8oFBTx7cApSPX11BHmWNtj7NqMjiRrZy3Pdx9CLdVs9JEK7Y2ba5eDbdzySfVc3DPEi6vX3y",
  "key10": "EyquoDSksVZ5zGCiLwRDMPEZGBH9MkVVnBSaV6y2HhDPfzT5iP6f8u3UpHPc2QjFEq9HdbLc4rmmgmZjLRvVCFG",
  "key11": "5Nv3Vm4mkzp9uKyaB1dsVtnU7TZLnJdk1owkepzJKYvzQR9sESn66Da57UzKXfV1jM7MVTa4Y82QKmrBrS3NZtJk",
  "key12": "4oYrQjxF1gjWB5e1SZNMhhcGymrZdtDbrvVVWEejeTeqR973QYdRksfGV5WpuKBjEuhydcmi4sUYXwbpTP1xn3Hy",
  "key13": "3dvLfdH3G6igTcYNDwoBV7FKHFkeTDzkA8uhBDrSb9oyTnRN3dLxXnt1hYLb4THBM32n4sq2Hxv6MtH4FNmJMXgT",
  "key14": "3pHVocKnwueAzsWy5iRzEHqd5Zfbk4KLnkczuxyk1k2cXkmQpqKxqYgkaHTmrG64KfQVQnvJPjMKSRhrgxcFvCa6",
  "key15": "53excXoZhbe7aSNCEWosZZEs27CWYgoZ9sutSmsy4M5gK89qqufZcHqe2qgwrvbLbq8sLJXUGejZDSikUq4QiJru",
  "key16": "5J8BSLDJoC2TYiMWYWomWyKR2tL8qV6ojwfRJGpEQnUWTRhuDVnkg62GFUKpV7koAZH2hvGxaA28XmYwxC5TTXA2",
  "key17": "2bh38zhp8i4d7mERhHMzET1wRFKjnkREccohswYnY2bBaQURo8fXTj7YJXLTLmpJgn1zqqrQg892thjfB9BT2zf4",
  "key18": "66yown2aoFfNRNwdxku9gAMaG3QdPeThWqVgmXYi8RvmanKaUtbNsGAuC9k5czBEuGQTVayLw9hfsFX4GKpTeRh2",
  "key19": "5L3CJHrksPxveaa7xXuxiSY6A2fHog1oeVaWJHqbwiTQQdhujmoJKLMFGUFoAsZcP4ySUaSnMki4LhBQRwwL4wWj",
  "key20": "5rZARZWPzTwcvavP81GW82ET3W1FZeYDeTdRQeJhDLuz2RjGAi6PUhpFqitqznndoe9gAoczEmWvPh5yVCYsCVM3",
  "key21": "3fih1gKX9EUSYk1hbuxm7rBXEVXtUVNmR1VmxVwD5PQmG4Nv4mGPHVR9qwEDQqM8HNqgM3UHerKUrXD5BAXyWQUc",
  "key22": "3QiEXofFxTppEBgKTrPT9QXf1t3LwXJDTVjQ5CgjzDkvhaLgynDT8RPvkRuUVKt6sRCqKw1KvMnyk4AqanFo6pCd",
  "key23": "3rrXVjE6AqnL9cij7aR6ubmGLmA9agR5c9Pkv2MADRdo4G4xsmpBHsempgtntRXaSQh3LRobiyapnyUPVfCHdGnC",
  "key24": "o9Dt4nmwQw218waxtHfYR1w1c9W7zQwawNXZoEDSJ5z36uadtRqxMkWVwVGhp78QXcauwMHB4MTACaDC95hPzH3",
  "key25": "4smMiTSAp9k9Jt7wHiB73M7UeJ1yZnGGLdYKubQaayuNHnFvh1L9HbvajWLXHGPyCovstN95rj1RtB4wQ7LfFRsH",
  "key26": "5hB2QU7xstKAPX9W3c5qGfzgAfuZereA7LPAQFKHnpxzFnp9Jx4Mn1uJcY2aRYcHhCi6E9DHvS8VWChtry8vKFwp",
  "key27": "4FkZ5GFfUn6iGYzKpyE8iWmmYNFhDMXsAm6KEMFoKiPLKPWjWUVS91u8Ue5qjQjBxW7W8vzvczVuKpwXUxoaenoR",
  "key28": "5MzRgpNUJovS4JTPLHWdCT6Dup6JVY7U5veSMSXK5ByRKDRBzdgACDxehkky9inPMuBNp2Vhqa3jLYLcdVRZQgtM",
  "key29": "5uwYVtezbRZn8Z44nRPhmaRmfbVFak5ZX2s3MWEobJL9LBPCYW2ef3CYJx9gyK879sG8sKe9NcqwrYp64vX21iMi",
  "key30": "5F68HfncLz8KXVEnKjjd6PR99B5wD4tgKcziGPVqJtbGpMRZE9811XGW5SoS7qMN3nrdMk9TZdLNYpizwhZtytMn",
  "key31": "4YKktLiVAvCJnevLqxjbwithqfjbHmbh5Ranp6ekGUiCMZqEQnappAcs6RzYHKYUZ67V5fMa1M3g3X6LvjWyWumr",
  "key32": "tUy13gnc7EymyGBr67DE75m5NCrYzqaPT7Q47xpKFofoxqvXaBXWpGdaVkDBJGppNHhMBzmDAHmPVyqafc83kwh",
  "key33": "dNQrqndzWyeHBNbk4D3pyGmbogC7USqzmm6ZoCQhhQLNzHm9eCp4eWbLzu4eZDCbrWJX9DCzCdn2GYn1HRMTUJb",
  "key34": "kzywivw9gQSZQCnsudXkzokvjW9igguae6SBzA2WrvrTQK2Ag9RtqgZekbPsc6WFRx16TkvfkvoHEQAr8qds6Te",
  "key35": "3zsbcEM21kuG8G5RvavTjLECnSi6eE6WCBMnAS62Y4LYKaYwTHxjnJJdgprPECKubJYcFk8o6Y84Ch4SNdXaHGPC"
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
