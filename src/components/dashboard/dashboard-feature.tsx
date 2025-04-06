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
    "3DRvwetCfoLwDvgCxnRZg7fGydJ83TrpBUTRYA6vb7uPjLWM89KJ1XeWRtxfKbWhwFxGFrt1KhbRZ5wVqG7cr7oV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gq5XJ56JiVWGCnFwcjp5y4DCvvZKwtdtVsHxZfLX4JSM1EnTiZPJCo5RD3JpD3psba31dcHUCWkHtfqpf5RHv2j",
  "key1": "4rbk7iPx3JHWGgpR23vRghMAKtndg7gRNhNc8s7Q4pbvxvEFU2RaXMa4fqvxQnJiPF1bBoz6HFzvF3RRb75t4CEn",
  "key2": "4PjZQRLXUQWH9DsAHYQN8WWYQEgd5g52f7vsiaps1VYyiDZgAmHT6zTT8y5jDUL129Fou3uAYHpa2J1evJtU68Me",
  "key3": "2wdQDMK8hmgc6kmhT89zSij7ZbvQ2wVSxJgJZQ3QVYeWpkproetSEjAhKi5eTby1EGSEwzZJUV8RK5qiKctFgSC9",
  "key4": "n2NxL8gt73X266CS1r3nH1BdDR6a7Cg6xXUrJi9mMpjXRJVqda5xz3nDBtBEMFwL9BWNsZ2V2ivyPcWvNTHNyev",
  "key5": "Hr8nSvqqubD1QSEvyJbxYtkf6QcqE4xEW5AXGWk76Ra7TYefTMcNUymRcbcXWykEbH7Wy6kVdCUsBi349DyQXs3",
  "key6": "31YJsQ52m4xHAeRsfFZyaK6zwa8SkanfrPuKnCqzP11pqu1QcSXRW3XH4JzVSr6PCL2jyoEPFiQaahJSsmcjtekw",
  "key7": "3bbFN3mLEwY4eb9M7Vr6dGM7LkjcxqKRC342MxZ2EpPJ4Q1cE5BCa8KzDoK6wgwPoywZkgEeUTJdEQoDxctSwykQ",
  "key8": "3xXTXfVvQNSD17KEqBxZnZ6okCwY8mpoNUs6V5e6Egokvc6vXgKF8o6vReomi9VHdVbKxCVXzvgdP8Ma1SN6y36w",
  "key9": "3dVJX74setZSQBgHHzAjFe3qF95ERgN9RE4oQMB3azbwi96L8ep5EV5PeeMX6XGse3pVXNngGc7ooprSrsWVnqJr",
  "key10": "4AouUgyrhowmaDDiKNUa4VSJEkAn9EKah8Y551SB8HCFdsrxKUZR5LXmAMuPFDioekSeXPkByeip2TkR2V44z6to",
  "key11": "HViRPKWFHVWLJjGVRkRxx5D2TvQCgXwtwrMCE51u2aDEjUQTjhaCYzGFfgDCfPcGnUHhMag5f1geNVgd23v8wHw",
  "key12": "437LvAv9HdV9PaNq6QxqKyJtUaaDaXpVdeS8fesjdN8C6viDWZK5ykECfGFb6SC9Nh5n5KkTFrmubRGFpeSx3vxQ",
  "key13": "3cdCZajc1jwD5dEXEp2DCocS63VMPgMRU4M3W3Scbxk7tW3UchZPWkotL2fnXDdWJoutNcgW7GXpeYp24Ah5EvJV",
  "key14": "41d4a3hVukmCtbHz1ka9SbD7GoT2agqkRcS6KxuDUC9e63tTDjzfvwYdG9Ptes6HJyg9HiWdKUni23LzPDNdddM3",
  "key15": "3uB5n36BiirdemN8FU1yUZqwYoAn4GiGpGG4TxfmyVFh4MhHRHeEtQqjZ15vD7QYgZpwFhmgHKTCYzuxRL2YNDMC",
  "key16": "euWF6otUDAgo64jtjp8rr176v6Y2uQLZe5fPH5HsFy2EfLiiZFvU6msDZZCHFMkNrjnmJWtcjpkpGRRMETHAkDU",
  "key17": "2BfX2gW7w31W62GwLHHTWPuiZG1DtQVQpGXRExGcpTibfugWwohWYTzLwScJ7L73CQ4tH36tf5xVLXfba2LpbRcy",
  "key18": "3AzRUehbHLFEkQF113k9e12XXvypbQgVu37LiRQXhAPCfAugLbED51f2iZjuE5badn6yY95z7k4S5PSvrYiarMky",
  "key19": "53v6FWjMYC2BzyzCQqQjKFYnaiVcWRqPYjfJehm8zepfVMoWB3cJnNa424qGozUmS33EXPZNZTp1WtSkar7KF5Uz",
  "key20": "3fHHCoVhfZtbrpGmoZkpVUg99nh5vdA4D25RUrS5g51uoFgFwudV5qExJwxivT5B32anTdbRT9YeNXQPUzwYEjJu",
  "key21": "2PcscDKLfgWr2X1DsZz189YbkcHLy4mqyvdNUoyCZauhdt7pSdJSTn8AdzhzWpjYdiXLKr6CfLk178ZsfWswvTmV",
  "key22": "63k4ybrkTfLtxbr7wfCSBCTam94VGEvYPYLyiqddiEo7z2bo1XxKERL2rrXuNGATCEJgasKDBy91oYhsZNAt6VJd",
  "key23": "2K2Koyg64EFyyypZZ82Z4Zo6GdwxQkgCJyLud97AxP3bDwy6NX4kdr6Bd2fLd5JHAoat9t5oXPrSRfo8kVpqmGRt",
  "key24": "4viUVLTYyu4LBrYMdnM1TE9LWyMtL2SkyKQcGi4CdgC5hN3BawCLcoTTkFC2rnEpMwZeeTmueyP7W2m9oDMJanPu",
  "key25": "4mMUKLpZMvTQnyriebBhehK4vAFFaUThTyTr6kn8WvV48WvUr4SwJrZ5rTBu5N24K3Bm946BEx3Hwu3av8zEJVCz",
  "key26": "3L3U3pEMFH7i1tXiACCcmiWGorHw7awr88SczoWezBppNLnvBNxHLFVdYEMwy288CYVJzhHNgcA6qaUtYpHW1mDz",
  "key27": "2jgbyUqbioeGPbNNx6LUU2q5KimCytfmfyHq3wMkHJM9bxdiCmuA9dmQZ5U2nvXSchLMUEwDo1PJzv5tQ5t9buss",
  "key28": "2gbcd95Gphsap8u5477Y9UjCpEGUFUq9mYQMxpmNPv4KKaHvPG8KnzBym9mmCSR5h9KjdoGuwaKNKQbhVG29eBxg",
  "key29": "4htfCU4jevRHBT8xzqsBumxPhLSGur7Xt5rwZSuQBkTaGi4eY8JsRndPFZVLEu5VvmPdr8PNY73ZCNXhxTG3Z7gc",
  "key30": "4UP7SmNMfzjFUY9z4MAq6Hs6WLHTMzFZDoKwtgdmXGPmuqrvLANaFKo2V5XzsLNiQP1u8dwMzpnvaAs3oYsV8Nqz",
  "key31": "3yLt9no8E44Mjtyhpo89idzNXsa297TAzE3CW2WiNRK6vFouKWqqwjcmZQ7Aw5YPCs5re9SKgYm4DYKD9gkfrj11",
  "key32": "bLiTD51dt6mfxEapB1uLP42PqD8YUShJexq9ntBy58QTyWYhMrrqh7KrPjKorFic2VBE5n3mVkpz9viSQPqhMVf",
  "key33": "2eN7pYx8ESsoMn6V9eBUE3nc4VNsbvq53EvVSTr1hF7SRbbsJ3rcm3mAXyiYK62KxVSSQwgdqsyHvsvvLvjYB4pL",
  "key34": "3fz7CM95pgXvdy7aY1s6wNbTHTWm1atzaNjswKB78X1wJX62PJ3VtqVVPdMzmwMLZLizqZdhpjVx7ji5XJtoaEEu",
  "key35": "4pD2yNfdm5t2U3wm8ukf8C9C6AVfgKF6JirGN8PtsMSgeqPcjoHDG2L55esLJacM7vi6UDKRxDTW21RWBYRevfPg",
  "key36": "27jGihBHAtW3tptMtjZBn2tSBoRf1XoDSx165PDZFuYDy84SJjAqTvbEHhQ1mLTP6CzxUggXg5Dz5FV2dUk4TqDT",
  "key37": "2qhp64iNPGzUuf9o3GNhqxapdpgRUUZkfa7ekivPfS4NacuyLMUzu5koWi7fAWDeqWrksu6UGWbsSse8UJG9HjjZ",
  "key38": "2NL1zN5PCrdeJvxtWeaDm2pdE7THzA7w7fSqSr1xRYi65FWPtXqkq8CVm99yfTtyxgRpH8GjEJgh51g1DeSA4oNk",
  "key39": "joNe2qbsnANvpn85G9Tyakwuj9iwasqpFcA81iN5dLM1yJaMgRKUaUeP5enPzYCut4h3nKumJegq4yjcfhnfjdx",
  "key40": "VWfMsnL576R5NGX8Xz6WjPpaw8hX6DGQa5t484LCa9Wu6te31BN1KGFLaKMoTu1AvdgxjxhfvRX6eAaVNcCW8oK",
  "key41": "3ArNr9Q8YQFTBsbMJNMdmdnmXfThE4dXJn2AHncyvgSiq9AXgTmdg91Vg4XXpbkDGAvfKzb924HtM7k8tTAmp8Ky"
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
