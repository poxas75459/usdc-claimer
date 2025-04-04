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
    "8QFmpc7CcbGZ6ga5AoiHgp93QzhiAv73cfKEiWdtRgwDkna5ojEoVqWMRyiwEzqfVYouSQ9WouHy6xR4vHJbz5V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dWLhTyR3QSxcYxf5c4mUwoAeZEtJwruA6sfFHdZ3qiavQQwb276ndnWw8cpENzAxmNdw2Zs8ajuwMSbCZgtAQbt",
  "key1": "4iJxuXY8pLyZNEkMqJkHMHLqXCkQetmAFbyK9Ko8E9oLbXynC3rLYsGjkdUK4kPi3hzoWRQYA7z2bqaL9F8hUFSc",
  "key2": "2NFuMm8oR5o8xGdGAfcNumJW8mP4UxiqmkZdmM9ccVS1rRhVpUW5b2HjRvGN6M5V5MQCjrczRMehQ3ssGSHarHDa",
  "key3": "65FvRgnC9yRooSrG7HjTzFViGhN8o3jjZNUTikQAzRfS3hN84mUeKv8XQXTJY5hEUfdUrKpr37gxJSdTJXAVuqc7",
  "key4": "5LtPnP4WoTVCaQmBh4yxAigzpA1gc7NXSf3UA2kBL2ceicrF7Qqhz5GgGWs1Mu4EDURfBnyCzQksE8pZfxBHq61L",
  "key5": "3WuwMF5uKyLUproUfu8y7VByM7hJNveFE7M9Csyn1LTBGVTGNUDerchJowJNNU1BuDgqYVTXAjDVek4BidPcrJXs",
  "key6": "4XcwjAUKtQzLvw56beKi95hw666zyS2uXMJmpSbgxPSi7gNAs4fsftjz6AfRuTYEs1wWgGM36F2wgr56GsSRyKZc",
  "key7": "4n5kaDH5xL9ZkmQBGTFDmuxWN3kuEeWueRkfxT7jctenjvAwHFDrYchJb8Q4wH1EGAMRhujpTPAu4K8nRSm5UsGx",
  "key8": "2Lc3gMWkqnLjfhD6mVQwXFPqz61QezjM8SxpnxMKom7FAqYvStgKq747rf4cAq9dfN1bnUfqHRJkPsm3KRYWZg54",
  "key9": "2eNCqKYFn6tQZH1zT8cNoWZbn76FjzCLpGJFprzBsP6Vfd4LKJ24BdYbssTX5oRmpcQtyTb4uVn71u5pqzQaQA7A",
  "key10": "3rfcky8RKfroTrYdXLB7s7X4yuKnqibTsZBtJHr8hJYfC7ws3qAz3VDZ7pyN5ovyuMCF8D5P39mNNQ6tNWCCtuEe",
  "key11": "3DXt43DVQuXHm6dabC7mFb6fboQdaLfHUZL4d31wZFZhhYStFAHnr3ZCoX3fNyzcUMd41HWpBGmommbgrPtqYqM6",
  "key12": "51k5WkfBwkxN1yvLTttXA2ofREpRLH9qukMUs9cnd63ACr4s8NgrmKDcLNkqjy8d4ZxCzft7rNCKTu16uofv1Spg",
  "key13": "CchuiJXzDdeXe4KoBpKnw3tWAkjo1KtnsYtVAYrGd2XfCDd5aamw8jHmQXX3ME1k7M4Dxyb8hKPrB9vRNNtkKT6",
  "key14": "BRkGdobWZGKXAE1h8yXepGfsAdL5KUJgKq1h86RXuyk4ck3gk6wM73EU3zf3TJmjY5NEK7ZSNZoVjsRLbTopf3M",
  "key15": "29jdfffyjiGJRSBdchSUtKDk7PxoebshZo8tfT7b6AxXmGPedTvWgx5ffkTSyZY7GQoYQpTRZ7G3cAFnc3ttVjtH",
  "key16": "QF9xDS5DCxAQ1UVHZSVKmxhoioKL2Rpq1PkUu6eq89oyKTzrUHkbgHHaeDr4kZptMQGA9CKphenmG5KpY24pSC9",
  "key17": "3Dsby4xDxtaz7mYqcpQvfW6MgexjK77WRt5qYPAYBGicm1JGumCDU9fT2uYBL7LYRapC9vVzS6Yv2thiTaqyNsou",
  "key18": "2NJzkTcFaY9wwLjSCEamTMQSudbNdinAQzjeVMF4cBUqr9wrJPNVnJh7WnCNXagQFfhdm73dJqQR9u7vAYpGQqRz",
  "key19": "2DGDps2uLkgRBC6weSjYFT6wiMxbbz7GLsGZzxJiJvnJzignYgiig3uHHQqp9tTevQbTumE2LNFQrZVW81t4t79x",
  "key20": "3T6vjZDpYVkzL14Z39AB8qshsCRjUZG9hM4gQVozCYwkG3TESJp7CecfQHu4PNJjk8y6MRTv4WsrCqGK8AWMmWCv",
  "key21": "5SZeYaKxiiXvKaa6U8tr9F3V9xMLDpZ4B38bTtTgE9rgK4fWHSAXgVw53yxcz1PhCn6sEx4LKQJ6h2X6KrMSfhyW",
  "key22": "3Scn3dumNez391amTYwHxXFYBt3acCwDbiWeecS1KMcQqNWL7vHPfS3xM7PeSU858kxACBqYAzBZ7nXNVSNiynZx",
  "key23": "P43VUhei2vC2gQLPV2RdJY57MKSfyGk7GyUftxzbk45wQnR4U26gLipug9x3jqHZUuh6wSbhytM35TYpNib9HcA",
  "key24": "3GaPbWyR8fepd37GjoXNvqf2sZsPyiJfJQ1GBoW6Esu8dxrPa1NRYm4fFM8Vn2GStmmWtHCruBt5Z3LtiVyvu6DZ",
  "key25": "st5ZGg1ZZSwf2e5uJGhDwMZ4VRqrfYMQ8w2tVwWuuLn3HVDT9Nqd4yyjgzURn8hL3WiSNyGVXNcVQthV7rnz1jR",
  "key26": "2eLAsLGPa3jSDn5s3Ae7FS8YvkYGMVyCYEpBGfc2uWBYQxqUeQEoQcx9K8npk9q58Ne6Zv6zt6ZjiRhGp5tVvMcG",
  "key27": "4Y4VqQEVwM5e4CvJqyQzo3SwkLB1UR77E9DE2u7Nwo7CPPfVKFvhH2H6Txeh12t6U8aPbSgG636ztJk4mpgxPzHe",
  "key28": "5HH9QmJHKocL57Gnod65nSnsXNeHXevat86zoXybGWphNGoiBsyyH4Sti7jSmgXEhRgQRgb6TjH9U9RNrtdku1VQ",
  "key29": "5iJzHqV1Udp6hyRjos5o2xa26WCoioAcJcVVXjeGVHGC2fBiNxdipWREjgv8MzYwThPRr9hbTC4EBdkP25854rjA",
  "key30": "dCTa7Trw2MdihStMgdRVWmyvxTtt9cHcYpjkYrB6eUo6Uj2GpQVPzvXqh3xv9zJLXo4rvPSRLwYYxF8f6RpWAjX",
  "key31": "3p5SHkHDtbvg7QJmsLW9YJ73mK3zKoJK98gWvMEx5QZcyHtNECK9oxhXELhnQxf64thGWZJxtr8eQLbqSSxpuDeQ",
  "key32": "3de9UKm5wM2VXhUJ9Sdorh7k2erygdB4X9Rko4L2yZ9dsfAeqGTrEePpj75ciX8A44EUxPisGG1PhcuvXXWzYW1j",
  "key33": "38jYyo6w9CteWveSdAGnEm5EwCdwPJeNRM4aMXLy3aYsgmuns7e1N4G2pEj5AyKZjcLsn46GFrxWFgy66dGrJ7Rw",
  "key34": "3uCBVR2WsPCJUukkS7BLBF2HLAxHZ6i82sEZPzNZarU9deiGv9wofo8aTxR5nehHg59jjBtJAQuA1eSp71taKB4B",
  "key35": "U9kyzN7xcS2pKLskeeMmm7i6CkgicZJwrrpcfW32WniqRX7N7eHPeS98T8Y36kpvRjYij55BGfZtg5NTNRxTP5H",
  "key36": "5VvkLTxcrZd7W72o2oesGgsSVpDfvcLjH6aL7wNWBEZjVJxQR74EjHRgxti7ZWejxoRhV8CRer6nUPK49gSCsQBo",
  "key37": "55wDzDmcPuyuCcLKYfyBjhFZaxrBudeYkznLaVfz7h7chRrMZV7urnFPeFiWmW4scfVN3LUqfcc8UWD591k1dn4b",
  "key38": "4w9YAr4NUR2zisL4aTjBMC8SuqoAqGStjyRHJBMLrXgodUuQQ3KcHEEcFLg8Q8K63Kpe9of6vFxAm4CHJnCYrdQX",
  "key39": "58GniuKgPDgkXNHmJcM9w4SSvSqh5yW6LRo9WDKTw717u7ExUHtae6ChPDZF4Snszaeh1pe3P4BF8s3zjpvBmvqR",
  "key40": "52FdqhezagEnavdDdTQSvZW8md1ze5ioTwJHMLYJh32Sd1TJGDxrynceLqi92Lj5HJmHy3QxJENwt3WLJ4HW3qje",
  "key41": "59MdzE5z3S2UXn3H7a9Qszq8WNaXrzN7bGFpcsd644SsMsA5UjkXmM3fEZsaZikTguXS6jnxNRJfkxg6vLjxJ3Cz",
  "key42": "5Fn1ECCqiW4ZycLxRqQK5BqwQdtgJP6LVDxS4rxGDQhthJEMayx1uoYCwiDcu3ZDNZSYCoqWCWgQaK1WiQCy7bKf",
  "key43": "PcsDABisYyzEF3DLpn3tKeRFfhUAkDihK8zbze43GC48NHwWTPRuvWBcomMBX8FAa2RB685fjEDMV4vgzFrwjSt"
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
