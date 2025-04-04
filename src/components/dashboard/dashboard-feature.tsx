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
    "4w2NoVw6VfZfTzk2AcMNu3o2aiwm8mX6PypApLWPyP46izSwMYEUUFjYygU34C2oL25AczKvs5ZiS3vZLZKZrtjk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7tnz5ZuhGwSysYLfjsDAWsZVKjccZPqLr8BtZ7AgdpVZXr3A6YDfjbw5MVra3ngCzmPMN6JoE62RXL1kyGejzW1",
  "key1": "3ig1ZXRfZbBeQHA1rkmu7uCrmtry2Uuh93N22L48fHpNWH9LBBHtXvtp8QkMbx2mWPNd6CFdFJdKYvW1FY1QmBwy",
  "key2": "2AitnrdxefxAR1M1vYy6LbBKdTbJ3crNPs9fw1u4Pmk7cReGR784nrd1FpEivNBbYhkV5RbRN58hv27gvgHUYmYD",
  "key3": "2ZooufaneqU78ieLLWmb2JPRuiMCmwxaG7x8x9AfsmGYRiLSrSz1FPWTTzQncobbBJxtsi6jJH3vDuEBpnTTedE2",
  "key4": "5mMTy5GKozUAKFkbnyu24ZTs5DruigLQj1Ksfue87rFj7SxjQWP9KS17VQvyGTQXDCG7AF3GNBKN3MHoXUeEUHWK",
  "key5": "2dRgQpCR9Wq9DkxiW8aNmmThTEK5Rz59qhBFrTfDY37zcngNYJTjQxfvhvSNLWXjXirRvwQTsV3fiZdnZSyhAU6f",
  "key6": "v2hSNi7EAmVj133g9iwuHPCN8W215MfweKHpSmcxVsZiBz7kizAJ7KuiTckXaChCDZV5ydTDup6LC3adtY4hLcL",
  "key7": "3uzt7cHRpiZGzwKNhXDyYf1Lbf227hnUS2cKvHeSkzsn2zEhwRVxvMdaArN9quLDuvK5HM8uQAM98sbTJ2YzvLaN",
  "key8": "2SdF6h8cybxWjupyNvv4BvHFpCQ2SH4VmxWn13CaEnJGTSguvujcNzoaWy4JJmvBcf7mY4mVD2NrNss9CgAij6tb",
  "key9": "2xyZ8sPj7H8fvVn7hs3NAGCvqC7hzThs7oCU3RgWA5w6diA6LYSGNHFKEHN6x5KVfJ6Z19K7ejdJG2dr6LBf1yyg",
  "key10": "4JFmeTWnW7AyfS2q9ZpPc4eVbEYW7AiqVuRtrVBSh6eVfDhJRRNnj8DSyLnRBgZB2pTK5rtiuZtXQdCfxVf769zK",
  "key11": "4L2hcSfCM7EuQxpVfaDZezdBPdgtQdhTVNsqLnEvaNmc4LFvmHkqehPabur5Pgt7iwidxx1c28UsYV6HsXD1o6BH",
  "key12": "3S1c85mmGzJQKNzSMu7RviYbbDyW6RAEGdVDyyNmcmwFm5aNJfa7v5dnyd7CRE81aCPSmoqEz6YPrJajTgespsAB",
  "key13": "4Lwd5wqPutp6nhxVQd1Qj9TDf8WihYQK9TELpTogByvTeWRuKabPywE2EPdgsoRTC17gkqKHuNgvLNSkukismj3A",
  "key14": "123aUBEKuV7pYinM2BUMuDjKMwC2i2PgqGTD8cQbU51ikgK14JifgzRRHJqKLevve7qJioZcPZnBQTYVK6g9qHG",
  "key15": "66PtrkhSHG2jT9i3Gm9NKtAF8TDBE7xChxqpSq3xdW5i38DZQxgXUCjUX5xi2xoAoc1y68PjYq4yWtpvSJj9PdJw",
  "key16": "4eKkh1eWNDBAue1CvJqMhyz2qo1dkHRcmrCtKyAfuRj1sX3mntCLt7sTanTefgLTJXWRuxYm3VrnZsFT3AJDD2FY",
  "key17": "2fFV1tQ2q91xm4kuwqHA1ry6rWzwV7R7ZE26AkPkA3s64hKqR1wFj2GxC1fC1nAc1eLSAacRbJsVVYwwCo6enPGG",
  "key18": "4bp1ZdathKTqVeGNbYmnZHfKELscfExzedJ1poRaQevR7At1fxgtLrj8TvUu8bJVghoWGA75kgqkyxp3e14M93Bf",
  "key19": "bk8aZb8VPYQGVmazLPqH9GXiMe7inY7gHUdxbbX8Y94uVwx7bNb2SmmB2MTRMmbSpofVz99z5RYfezoeMa7A5T5",
  "key20": "5W5JV6aGHiyYxJcKGNF6gZjPd2PXwLqvarvfyfa3XkXauHCy62ZVKeGjAm7tw5TA3yEgMBZGup6XQYMjGPxLmhXY",
  "key21": "4kxPBf6x3myECyK814Lic6K9mbJ6Jr3mHLqo4kPtGxwkco9AvREoAPNK9weS13tsenwrJpWP7JePfGb6uqLh2iN5",
  "key22": "258XGqDeGh2Txknjw8xa2nDxsa3hMi6urcCc8MiaFc9Y9t8iDcij1jDWihDxHzoHfpKfQykNbDHRpmd5yF5ZJ2ry",
  "key23": "4yPheqBnKyRwJZN2h4HUs1ygivBRggHwcpKnLWgkwgxkSZviWYrKhrdMkPQFpA1PJqNAYdcqTJgSvYVmMcCyNjEE",
  "key24": "4kUSZXKb6TZ2wYvcKCAoCihWzsay6bn1YGK7RFhNareV5skkoYXESZ4t6DEsrBEi9Sch5b9aKiHiUTwLGhbWnBUq",
  "key25": "4fhxePtHEYV4PwpYUaTubcgo82D5fmhH5YKxZGhd3HZntndQVYE3zgXaQYWLBVsAQvAc4L3rR6vyBGga8fwLSgKs",
  "key26": "5Lk9M8zRB3vyYhPaRMPNzbfQAXr6Zp52vEXtCAgyYcLgHWjdfKTnQQQmyi4hvbcxujUfyWBcHj8ZwdrSRLyY72M7",
  "key27": "YNiCEpzzcg9wQe1TYkB93JzBARxEsJ3K4WLTzedDRXC3bgBRu2fRdNhDSPXUf1JesYDXSJJjVhdsgo1Cb88s9xB",
  "key28": "3LpgjiYBbYvea9DBiLmUv41MzKLwSWY6sz5fVQ3AgnaGqRPbH2Hgag5bvfmQXMYQqzWBwT94iTPSe55xDmXGP7L6",
  "key29": "5zXutNfHFfPmHyRzYwfgZt25oxSSxgLvfxTg1Qea3ACmaVCchRYkJS2ngo8Cq4iCdX5W9PhnbLD3AaKuU8BWaKv3",
  "key30": "4bp9YqcBbQhaPr3AqPxSjkh8YsdbXJ7GFJuK1Wt7UTGbYX6MvKeuR3E98wb38fZFFtPidqAu4nsXJTKUfizB4YAe",
  "key31": "jTA7VxfWYLF9avPQoMKpo54UyKbZ9JtpJH9QeQkvtM4hrLuJytycByWN8ME1xY81ar3UsZBTYdhHMB39u2xRKBi",
  "key32": "29mhsv6ycE7g3TuJQ9kH8yuv3DPXM6aPXjmGqSkdvhqwTDDzepTyKa5HK2P8vUK82CX8JynU7Xe3weRpYusSn3og",
  "key33": "3bekEMXNkgyzfaeDTs6a47dnqGPHGHSNSh5XWh91ecEXuHHL9c6cCZenpXZ3B84Y777CVPWN44cZvusMei9ZtwFR",
  "key34": "2xoyLxuLR3CquUj376fEQMJfLvfrFNZPJcyJ1Kyrh68fHNVrF9utcxxYFhypBs32LuhDB7YvQqtM9mCHErmC3eUd",
  "key35": "3BbD4t5ZKEwCSX8cZzmFooeAUe7KRdz6qF3suKWtzCukWFLCNMjH7T8MwJ8GDarTnXt6UAsaLe5h7JtizQr2ktGm",
  "key36": "4cRfKa7T6Z4Jt7SSFPAJLRcUoyHfTDC9NPGBDxU66Ugvc3CfswydxsfehwmCyEyHH3WydPLpHYh8VUoM6sYbsnDU",
  "key37": "4yWSS858txMjzoamCoixtU9xdhiKSarXPa26dvcVEwLSZZPCj1CcLYs85uT6EKzR16EHqNmgsRTRDobS9767FDw5",
  "key38": "3NgTCDbm6dU2uR6cnpYoFxRH72M3ScR42SjaPGyuHryU8bmeUtBYEJAXAgTtxaNqvywyowrgw3gSJdoDgiziwhn3",
  "key39": "3DFD5ka8FALMNappj3GJ2tfdF1NELRHCeocbe8sUNW2pWQr5r4NA9d4gqXn8jZ2tmMm5cZq6ZcXQSeCDEZxYqH48"
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
