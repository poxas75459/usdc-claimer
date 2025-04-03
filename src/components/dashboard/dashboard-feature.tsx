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
    "3iGYN98mp3D1yZFfqzH8Ardeiw1pM9ooJma3P9TGJFwuqVvBQ1gQhcdfewnNXFnTTz8ThBiKDgddRaX7yjthY2r7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N96ctzKt21fSt1HiYJfWWiaKfAaP4afFM4QLPxKVjt8Z4xqUmak6xuw7wCtaEHM2w1Zvv5cpryeWjS4EJdzygLN",
  "key1": "2SQD4UPU2m4KwmySH1kPY9z5i2shQKiqCmRrHK4r9Pco6LMg8XTm4tEUYuRpKogGq9Grk7CkMvcfkVfyrvWY3CnN",
  "key2": "3EFDQbfDHrYKZAYg6iAbFTASBysEutjmC6CC4NQbYtjRFXdSY46UABrrGTNY9jnCvjUzqLFgSwTG2n8i4X2ocbv6",
  "key3": "56kzZYmXvdHxCoK1NN5prfNBDm6d1bC8aVu4bzbwMh7XcXoCwRH1otQ9VMkaqEYQfwFu6gKzrbW8awLNKFuJbWXs",
  "key4": "47Egh9ggmGzToXc2tRTYtUhDdL4HsqrVtzuiwf1kFXHa4RkEox3mD1fQmmMcETVCiS5eEN35Xay92gVpaDUSsyLB",
  "key5": "2jKWdyQua6t4LcZoabkBj9xsgLGwwZd42E7JuUefe6ccbwvho16EAqMuuZa5P5umvqHrSQQt2Y8YRPNPuuzXWVDG",
  "key6": "4YMTYMsV9Dg3LTikbnQsPWKVPCnztVYLzN33xfcV8GVWxhYU9G5rdE9Z7viSgByC92r1xztXRYxX7JDjsF4PnL81",
  "key7": "yysfYE2TGwbixX73Vr97zqJE4BcQ6wa2ZzA3WzNCYpxbYpUehQdweAEibRsQNvsvet51f2nyQoc9mY2pMyMiryE",
  "key8": "5vzJJ7g8znmbvarcVYzTDEkf4bTUA9QuUKtydLgbYB1Mupwq8LiBD14Y4wENm5QTxPhbasqbEeaQSsDW2DGeDYfi",
  "key9": "2p4ye7J7o1oXBjuuBVX25rcEQSE6ZTypvZaQanBSHaDPvzyxfnkJhQwnXMoVShYzgPcAhECPoXFpxT4MEJY4fKj4",
  "key10": "4afbZKurCn5nxGBQXfCG7BnRj93CDCfQrrSTmP4RJm6Dz1xZ55nS5ZWvKRPMnykDiHayuMKYEGofWQaEgTAqswG2",
  "key11": "4FoLpAx6PqK1g8poj3ZRHG7SX6dRDq5s2dRMJuLVcaT231Hyi88MwEJLhyrsGVnshp4KAcsUvjFFtYAREmEPzQAk",
  "key12": "53PPWy99YV39nprkvMy9cpyo7iU5wKEu55FuVUyr3sdGWBPMggWTGJKrrxYxFtuSVoDLLSLB6TMuRetfDVJhwC3x",
  "key13": "35zaHYZCahNQm2Sy2Fq6mxMFXZzasiP99bqc4qm16Vjp14fAFGHYENz8mL8tCkioj7YpQLRc8Wv9TfWaiZZwdGdU",
  "key14": "No7nmq1ig119qW5XSXj3SZPfWcgyWdHcVmspuKr3VkEJjYYbaeZfWDkDu8i6PA869whJm1izSfjX8JRGiVHqgVZ",
  "key15": "4rsKzdzG2w6DsG45eD4zWEhJvPF4RQZPMv83pBACNwC2qCuCEffkDQLzgVZ16fwKy9bZqX59AaZr2TMfM5sZsP2Q",
  "key16": "4PTYchDmeubQfHVYE8LGzoRCTKVmxB1jhSrCHCNgxLUtmGz7soQyb6tWCwbJEbjQLQBWH5pbhAALopBZtSYz2N6t",
  "key17": "5fEazUytYKzxUVbrjdsc5UvXuwhxrnVJC3NToUWkqGzAgZ8Eb2EoHRWVCueuBKrvfiMZVgRy5MQkmFsB6LNwZ3WS",
  "key18": "3TkkxfNDA15LE2emXUtaeC9Mp6JrEHTNnfpRMAWRTkFQvv7pNMH9FXHDbSvoDKz7gDegkZ8UF9jKJi5Lcwtq1dZF",
  "key19": "3FhkRuoa7KyPBz94hZtNQU4JjEUjwu2oFcHUXi9mtNmrXdTtCFtmAoE7CuBhkWmHg92Pv8REixwRGXTnkgyCTbRY",
  "key20": "5jrJSLPVR4FWsf5o2eGBT7PrBgpNmjGMBWrmU1kd3UpbJsg1XAJMURNFgtkENJLZCXCT8KnknXPqb8iJH6mZEUWm",
  "key21": "5KoFs4XSrfCqxSneYZUDytTjyCzFA3GiL1m3qMHgTqqdhNrkxqsWv6WmAHrZboA3VQugz7xmbsCZMBHbt2SPazhh",
  "key22": "ZSvt9PDkvbyFcdmhkwzZLAfPLQBKarwzwraEtgPJqWnkCBeEwVcER3N8K3M5kFfKtCsB39BNbf51mJ8LjTDDmpG",
  "key23": "3eGKn4vCtWZ1bGoE6Dr9xgtE88tiMV5vFentkCgx8559a7ixKfer84LALX2QwPrbEjLXvPC1DnFyAPHYW47Ku6Jn",
  "key24": "zc1yw7nPNczAwr1ydr5wfVPvirKCSqv7xuqVpBZ3KErJra8tLjWwasKxyngdM339DKHqM7uFSEodSBmMZo9G8wH",
  "key25": "37CuViidywy95KbUXBGeFt8miB52T1aiNmpoF56ancJB5q6wAxMEm86QysJSV43AZyjUTnXy2zLHVUEYjzhCh3Bx",
  "key26": "2cHThyaWUwRrVYREHixNE8jieb1jwNAQ9pGbpA7e8tStWb2Mb5rqHktrWXfqYFEeoxxW4PpjgJLZZpaFHvSiTTaK",
  "key27": "5C5wgGZ5d13uXBfuBAzWt4Z3EuDK1dy6SdaJKmAsM8pdcYQRsz57WiWGWCdmNm2JvwHVXvWBUczBqnQCYgmYoo9N",
  "key28": "334C4uzXzEnimc18rhmiKf84QcPzCT3EfLmXrotqKeDAgDxPNGuLULh2i82NYg2ek8PHeqU6F7XnMYbZJBAaV8LM",
  "key29": "eTeVjqKr7GiCaAQiw6ydaED7873oi8HuVfm1uH3tFQ7en51Csp8uejT79wVky4VAYkxsGXXjC7SbYq2utkDSXXy",
  "key30": "K2yf6pj7XJ6vQ4GM5T7saNxQu5U4aKe3NTSroMavTNHyNah6SHiniryUBYUhXjamPPSQd7jsS2Rkd6wWmwDNWZ1",
  "key31": "5TF5x28TqxVM9tYK5puC5RRd6mKFuoc1z5Pc3PRdzCMqwmPXb8kf5cPzDzZQCSg7SucLNDgzt3fAUYLUGGFi5MBs",
  "key32": "2xKVEEzjRHMfnekubWcV5iCJAQJavvFKJwQRYK2v2H2kMTGBXG35zqFapRjnosdcjEA9Vsk1eFkLWsDgABTMt5Zv",
  "key33": "4uFLFieNH5D2KF2vKSGn8wmSzP9rZCtHki6kwbaFyBSGearYKvDKfWGAyUCxc7xv3G475M6XyiLKzwJX9eKbyrsp"
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
