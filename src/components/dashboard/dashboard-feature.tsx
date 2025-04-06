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
    "xJQFW1DsM6BPqBCxgDMwwjWwbfeW6yWhgDJdRPk47APntTTUtVCFcSRUktUpcaWz9CemVenuTym8xVL9mvbBu9Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LuStJoE8YbVVN8sfwYYiw5Gm7rRX1USvtPPjizSanSmb57rhmKtLUH2iGi5c4bY78ERhosXY2TX8NkpE1Ga1Q3a",
  "key1": "yNFfD2uNKcEFJ184rSgAmmSninKePQqx2m3SyW1CNBoSHFENqjnAoy5fZtfhW5iRe2BFAVt2rfs8zdjw5YLNY9M",
  "key2": "3XQMbVM4ejHpRpDzEnC5HSYQ4EPqFkpW35cKW4ekpvio1obegwSsdeLL6id1CbaJTLaYDbQFWuMeoz5H2dvRLpjk",
  "key3": "3p8Rg1nDajPeKh7sZLSbcemet29oehCbMDZgu3g8A18zZVHDDKuB6k3KZjXE1q5rWie2W85mQ9F1EnUYNAqTLHCm",
  "key4": "3T9waHPMddfYneLNFKUfee4MSUhND6upb81t88wTfsPQt9RRQuMrK6thEBAHxcehVEpkBGEy1FB3TQyvGxcJWoYY",
  "key5": "347oAYCvNiDPUQwkxdWnpTc1vGRj1tmNi44CfpMMwUQ9JSCTPrLea2n1EyJJarwgREmxffTFSDePHmLxweGQp9b4",
  "key6": "5GGXBUxRSTPD6TQZqaPrmjkv1anF7RmKWMNyAY8Z8Y4y1DAWm9Pxjht7bVeV6qLZgaQnQZJ98TpyqSPFdp7ZNrcn",
  "key7": "57RtRKdxfM3E1zJFuu9vwc52emyhHw5GLvJ4CUitgBYM9NWcvfuC9HVj7egh8QdXNmTgWDsK5Rd9ba6LR7qkReSq",
  "key8": "539gHybTZnGYtKhRWaePLqF5uobZnbEA8ErwoqL6ovtPDYyakVCgtaMW3SAkMiUU8aVnNSYE4wtSE7qFXsLkbedC",
  "key9": "2xHQZN4JbveA7PRJiR9aHTgTQUT2mVVoondLFQcoq7R5YSxXuGHdHKzEJyNk9soSDfaCSzLE2ge6VbYJPNiQ7BSm",
  "key10": "36x4k74rFzXHqicdqx6gYxVzhUeq7E1e3C7HSQS6JzzKHZen9yGrQnxjBnyLq5TsRsmPRmJF811NbDF9RDwCURaL",
  "key11": "4Xmc5Yb47GShx4AFQifD8gzg3Ph7JnhLeBzD7e1NT69kqLcqxfoyx2xWKa8E6akcxW9t5y6873KvxtjPu6j9sBJF",
  "key12": "4iTsWiiq5i4ySUUwCDADiAc5un62AdSngxZohc2MZ8ahFidjnFFm3ETEFjZA2SUknt7CLNzEA4ZU4PvWxaqJgx9p",
  "key13": "48EhFb7vJSxkzMSHRruDxKjjsxfg27VaTyovfVY2keUTa4Zj1UakgeyJ2bDUUrxczq4nCKev7y1XLFp1RtACJczP",
  "key14": "2o4fdcGHNc9hVTwYgCifN9Y75kuhpgnaQynBApTnnXQnBXzH3VJFcWUVM7rWBW8BwnKhJHpPqWktQETocrRhNnQK",
  "key15": "4CDwvDFyuwWBLaTT3mTJbqz9xoMkoVZfm4Z9oC8EUTYkkeLG3zjkmHFpNCaK5rYaEomAQUP49o9iGe2a87ZfRrDW",
  "key16": "sFJqGmhzcUGdcF4wu5GzYGFmHNHo74iK2DCuT8A8msyPu67XaRKaadAgZiUDCDci1nZoLtAqTw7e981Qpd5ZaUj",
  "key17": "63iVtLTZqZ3BdC72D1pV6o4vdLK6mgL5QbwSQ9WeHdCTmqzZYpcbHH9LHiY7aLfstcDDsjTNaWgAmpM7ydmBCSN",
  "key18": "3iW8W3WCdhYsQ3yrQQyKwTJJAtWQu8ckgqTXU7UFE6H5CRaxBXNdXjMTgPkQCKnpPecPm5dtqYq2L8fQd3HTHQzZ",
  "key19": "5DYNMhxBJz4H7tx275dmNReu6e4nsEEnCCni1U5jyckogciqfNgALucNQDGBeNQgS4AkAmovaUvBedoJ39dfgVoG",
  "key20": "4RRyLXM2N2XAyv2Jgh6AnLgWbEAAu8y1YycXFyycCLovWexUs7QJBZkMhJDweecmztPMkanpbEb8jurzevv8cBFH",
  "key21": "3hJXcYsf5swiCyK8b9VmyfuDE3gy3TP8ZP9NvdaZyyf4EANt9qbrEjFjkzF5b4hgymUM3E3iPbgSX7KH2DFG3rVY",
  "key22": "3xSTxvh4FWdvoFHSC37JgB2MCvnSp1fUPNYXawF9KL3kyUeTwF9VNCznYQ4MvUvoRfrJR8pBDR2M9q1xud3eMMWx",
  "key23": "3Fw6NJ52Zd35eNdHAcUHAjL2bGoumkWCoRfTp9qJPgcoQriqno7dd9zLW9Hrhp6zMwzomzENR98VdDvbKdwxGWTt",
  "key24": "2pfCCaLDREfGFMup6uGa26Br62D9FeJPwcWES6mz4npzgsLQLj8v2YXgrfAd773HYRbkoNAC89vGfA3U6AFJTYiA",
  "key25": "3JKmyoP4ov5MbcuCbUquuGHtwqAw3kyNwipSYgkNtiQvccT5tK4wKGpMDXWuCLVsM7ECxFumi6RhgEQHeaThtUpY",
  "key26": "382h4Gb1kxw4PgKkMX4jkStqxZBjVXk81QbrWnBUZWkh7opTk7n78oqsBEdei6fSJ6ckwKEJPyVF2C7hMmZ7ZK8X",
  "key27": "DQgoH4GNjhNuCoV9HjEvorVNdnzdwqwooNXCktJNaYpwkGVWL8dTzmr7dwvXNV3FSE5mC5L21dqYFVupV6qr3ae",
  "key28": "4A5EauNJqjtKSbeMjHMuDgsJsuKrkUr4saKTXhzyrHq7v9K5YJwSUeMHEyGUTeDfa39dCx71oMqYxPXkBazuEAJs",
  "key29": "3JAsL7XeiiicSjcnec9yGUL5Y5Yh3pFZtunMEYyTz34szes5nnXZdzj7Xr7QBVRJxAT9vthFGnWASfKHCyPXVifW",
  "key30": "2SKJ5f1DGSwAyfebB26YvEoexZrjSS9bmwfqjZVu9ehTgni6ff9E2vkbH6ymJGsepFE1wm7yjcwaL9wdxJrHi3zb",
  "key31": "3aL27p6L2JCgH7w2AGhx1C7QJxMVyZt3ion66PBrbbo4o6DQ3jTm5XDbmYb53ELsFJ5V69FDJMs2J5yd2yMcdoFP",
  "key32": "3XTMNyQTPktJx2gBHNxminkCgFov8iHwBz1fLLwx6gKZoC49d9Q4puRD9uXfP7kfLWjE86ZGp72wAWHJU7zFP4SR",
  "key33": "5T7EknphZuSj4ZA66KER6jAXP6C3iser4VRqEEL8nVsnyiJ36iuF3NVGgp7cM9cKdnBibeHGJsMVzY3FpqKVFfdN",
  "key34": "uRWuzmDWJkEkwGwRLaL42Hy8FjpbVGXFCgmbRK8eWBzAPxqkb576w3xAqGZkLbKBg1zefeowfSeDazTsU2pUcLS",
  "key35": "3uE9So1aMbhHcuEJ5uxQY2UkqonxgUbm2ztToRG1sJY5GQGykX91t2h9ohhmnjZsXb6T9KNoxkVc1mkGLyJ7FPgj",
  "key36": "6TCjAfhFk6FE3yKkhuExRUsWVAscZe6M5p8KuWA5Jn2w73qpGWkonFBMThZukF1quU27Rdk4NAfcBmJiL1K4tVR",
  "key37": "4SYCBYELHiEZcBEiqc9Gh5sLyUbJek6c5xx1nYoggPDM1SM3ucon75QyXjZABAUnAk3Lw13hJtEFMEGTQggxMAJ7",
  "key38": "5pLTJZh5UocnLoHjwfa7kvTnhExuG9rU2HmdGgMsopaY4KsGNJ3Suio66h1K3nDS5n3E1HGCcoVq3sBGtJpqHGh2",
  "key39": "4MfTtfV3cxxD8mQnHprwp22C8uKjhFme7Wtk3mwm8JwcyYLjF3UwfGDLzKKCDVm8rpQV9x6oyf7xZnXLKguv5FG2"
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
