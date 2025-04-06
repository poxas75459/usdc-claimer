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
    "23yjMx9kcRN4vRTHmTgLDJJvAoqMxpWGHKokEiHbXR5ZH3UFmLrE3K8gASdnHu9UngSnMVcBrB2QiqofSFT1C7bE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fCfR25eGxVbb4VeJvtozTVuUXQVcjwaqQiFA17vEPcUkfqNDp1D7J5iMyUCuJJqFsaLWsg4Q1wDLAKE72znSXzd",
  "key1": "4ZH8crZv8BGKGX6TMRyHbTercJgF7WSrQPB2YS8EtQ8saQBGdq6VNodyR8mwwFVrwoC9dgbr6nooGkPZoSwLAsw5",
  "key2": "7CTS7wyCYDyF8yxxfMnCMzBEBpBecAWYUw6ffbNUNdS91WFonY6Yk1FvNJJEDmuuy3TXYtkXqDqvYZRooYW5U3P",
  "key3": "2NzD9dbWS183Mag8vHu2v4kWWdPc1xbjTi87pzoK7uC46rNEZcyei7eQ4caxTNmJAg6h22WpznH3iAom3VaSfEu9",
  "key4": "DbXfw8yoNP5yhT1zJ8CgCU5WzDJGjv1gruPvq2uz2ZsnBKDeke4Yq2LTfaWSpCKgFfRUtAoUoRJ1cCBPjaHWP5V",
  "key5": "4FLiALpViFbi9b4iiGjZCuuuQNn31RaCNu2zf4rdijTuLwfmBgjoJSFhbpXbdeicQSsMVyK7DAAB7ipevs2SYkeK",
  "key6": "5BbwqQ8rXsyDmSmSnSr55XzdMZk8psRVhCcks6tkgDdFhGEggxTvCvTmS3T5qxuMmt1ytHPP7JZhJpJmF95hnkiS",
  "key7": "h2wXYU4d6pFKtNaBxwQ5Sy19kTZDLnuB4N2hPqwHNCLJSShE91vqJLo2iRZfUkhCftAoK1tEpbcXPsRzfCruh8V",
  "key8": "5xbozWAqfsSP8HoWnvepHaGoYybymUDQHD8pqEnkiEefEGpbHCEa4AvhEhMyv4pffPfPcKrDFinc1YGHDtGK8WjE",
  "key9": "877gfpWfG9Z6i2TjcotC6VjCvG4C8QSBVbsZJdqrqWLD45ZHqz6vUvptBbeJPGxzSQP8K9KxHpvnX5hbQ56Mk9U",
  "key10": "62iRoLaWXZy9mKqae5o9GpZEi8MXEB8UpEsBwM4eBPiUKTqTVMnyCsY3KRZdiHcCNhof9W1pAA9zRutLxtLew8WN",
  "key11": "4EBBYArAdnh2fTXBn1FVN6BLVth2VEqYxKbXBa3qoRnHH4fkmtcs8aMWur3qxTbezRunUJi6oyMQkzQvX4cLgck2",
  "key12": "4z5mxQnPfWHQ2VhqSUYxXxp4Ne6dsRrLsYDux5QxA2dm4RSdkhkKeSXxmbm1xL8V5PzBaT4KbH2kfqf1Bk53yFA9",
  "key13": "2zRYxP8V9h8xh58nTtYyWA8DnifpWWCenDMjrUAKSH9sVYgAwQX3juNYcfBDEEUq2MxXbk6qzqweydmeTaGuWrxB",
  "key14": "3vjauqukjc9XkKSnoDsbgi9UdEU55RLxpW7jnFxhwSDndK5vAhRihpX6BYVMwFAGtjnpwX75EXe5kqoWUePTNWCP",
  "key15": "DGq1oQ9h2f37tL9tCvjnMvEA1CarDETKxwbFWZxu5wZoDsgJBAscHvCLJm3LQezSJDAAazdfWehbQSq8x1V3s44",
  "key16": "5M1bNi1Kmsb6T392fwzowCfq4dsZvnCkUUEozM1Ty4GQoyU9NQyepTUXuBS1pML6TZXZ2F6Gp542JXR1F1dVEVhv",
  "key17": "39cjBpaX4GphtQADKkq7NBWfxswDhsbFwx7GkU5RNWwnHFQauekbksuhyea4Hg6iCYfYdzM6GKwERUkiNvV2An6y",
  "key18": "7DcxddyHzx45yEpuKbFtMamGKwEeeMzMJ84876npGCFQR4ZcfabkLwXLBwjMRZGsWidNyqku9HT8euafqiy9RJ6",
  "key19": "4tAva1LtYK9erbjC23kvYDeCzdpjECzdrpX49Xnp6igqCdszfu6ZaRdxHNtDzX76mh2WSAyKQ64GHhdeCCdgEgRe",
  "key20": "2JdGfFKYPFfgPBhryunx6fpRt5hhUBHhpYXGaH6K94wbmrrgirj41BRTxiGL2X8CNf4n8WKs3897RNK6Jtwe9vmw",
  "key21": "m8zK2jQdZBeMkSNSKr1HoDmVdwQdur18H82mZNCqhLVPUQ66LoPJVR9cofa4p1NvEpctx2QS3on96kQE8fuvRwH",
  "key22": "2XsHa8ERgv26PvMzoCs9gZ2YGVfg11qVKxmrVncXo3cJan4LaJfjARejo88LeKLZMJhDhi7T9VawRhu1rtPgWB8N",
  "key23": "4nDRpcRWvZFRYdkVM1MAsm1UNNGzbKFRRQAnrubKZqL7QimxbceyzrPHnWvUGsovP3fM2ZZ8j438Qk1xFPvc7zmv",
  "key24": "35aVqRkDT9ZtgxfrpXyRxyKUHhWVUSDtKVJVgwHQRPPTGgqHqyUHyboktgxWBXEJz4VTddjpzSj5192w8dbAYwXU",
  "key25": "2YetvCL5WYarJE4R3Dq2tK9WpRitYj1zTzaLDomJYcGfLaoFTmctDVt8Wap6G41K7ssgswKsRn2tc1dgm71bD1bE",
  "key26": "4B1zv5mUH84xNh6XUvPbYEV52NkUTyAz36duYERHXzWaJ8DgiqwQTx7oitXtz4VxDmwtfhmnS9CwEztvFektXisr",
  "key27": "5LqzhHvhP4Q189ikkMe1BGsLTFhLjf4kU6deysV17ohEjien57ZU8uReFVfG5dXpsUJ2jGFxSMmTeYg8yAM5jNUf",
  "key28": "5YxuccKxxqXpiAN8HK3asXt1JKRYu1Q6qJqoabpoQX3GDtcUHRTHL7WFG5pNnhxrq38MbihAJzkCnATecUjZKNCs",
  "key29": "3qEos76t48VS6wK2chkhUaTTvRnSrFEFaM5AuskxRauSjRHU15crY3fDuJwp69J9CBj2eduaoX6zoPuaYRMEcNYD",
  "key30": "2VQ3poWcBpaZuY9KsDXTQBSNo4porUhK48NdMUDAGpYaFAfqqo3rEhojHhaPkxG5D59Dxoq2gDxv6NJGi9xxUayZ",
  "key31": "5JQpnBT9icAhKBFwyDywLDGwVvHTcYkcnHAGLgDVmr8y9VM5mZnwJsfZFk62MRYtnEWcp9wG5RmANaPkiiiqPiWX",
  "key32": "2Y9axjSRvm8VsVSNwhnvddRBTUnUkmDjS3F3Sj1UAGHdWfDhCoeSmesFeiCZpEUHAE2Ad5P5Shp6cVY39rCRRetq",
  "key33": "2U4sxmsDaj1YFiFYZkQBCRW3396a7WUxWrW7V28gpJP8wr7n6juD2eZW7KVA9ikY4hnCU4ZLXeVhiUzfJ2scgHqQ",
  "key34": "4sCKB5kFCUZGjMWSQqGqg5zT2BgTYybXAhahb4fRHZ983M6tDaATcjKxfxCgaq4WvLJEjxBijr7Sbnwat5QPhBGH",
  "key35": "3fnYKZSd5usR4sFCV52CsGMyFBG5DDVwczyb26tKbp5XfwTfBTp7sQ89nt8sqN7a5ojsbpNs23G9x73myX84JySP",
  "key36": "4e28xbXdc2YSdYcH5hDEdofKeH8ojrunUT8VQfxwyNujKUaKgrLz6Ykny1ECdAVzE33cNAgXqzJ6iPvpkFeyb9uE",
  "key37": "35oP4LuiT7mrKpQjas45UUu4GmmxvmUYrNezWw7y2ekQVohRKyQ8SfF5RPTT6pAYV7UQ4fzQzaepuJjUbpSk1fha",
  "key38": "3vSkyTss5LKaKY187PB7ZwKVPgH81uMvUb2P1vyte3AJSXc6jCYigspdNS9eHveyzdQnfQRsQnQEAzTjeVYieFy1",
  "key39": "5dTQGVQfs692EpC8rav2B6WjffdSjG1wkx6mM3mLBX4dfpZVFUmVg5bW7hjiJL85ibo2qYv18ytYESHuMj5KP335",
  "key40": "59Np1GkZjf2kE5voHjoavoeu8Tttq1VG6aMD7YrDiBiiyVBY8dUoHavnMmA32GAh6cN8Cq14V6yD5y1Maed7FwFh",
  "key41": "5kXxfksEfh2fe2a4U6kkuuhPDhM5rNuTZPP3URJSGTBvsufYtMoagAff6Y52UFPMHq8yn81PvbpWr8cCrpz4MCVY",
  "key42": "4TP8JjEAMySVaU3x1K9ZHKWdd8zwQ2eQDNNn7ZDjcqr3tnsPNqZ4KEdyNPxNVTwRgnGz19pURJM3qHxw6BFEPznR",
  "key43": "5URgT6LGps5pPJL8KKrCYWH2cuBRhSYD26VwsnbewYCUJ2vCCJJqdLv6s8rTdv9ehosWig64REYyBjRohKoLNWVx",
  "key44": "2ALw3CYNwsaBHMJ1TrS3ohsVuTGkWNr2HQrT9rvBj1mpGCockQqvEN4KaxqsZiKPu4wGh11oYdQdgD6nPvSGPrD3",
  "key45": "61ckY24wFVUVpC5WfoA6PCKt3G21oG2qrA1XuFdw932e9yyBQ1Na6EkVXTEsGcSPj7bQNy87RHgwti25uPE5xmdt"
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
