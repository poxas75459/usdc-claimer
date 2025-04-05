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
    "vKBLPH6CxdNYAXYZ3PCLMKts55aSubenYhenznTmxAoA7cJXNGhU94VtjM6JFxbYarCzWogHFw4AT2w1K8B7bgC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PfdaoMRN8823pWDJPene5NA83c6CAivjjq9cHvd4n8S7SoPYF1JLe3tYR88z4462VZB2vXk9wTzHFxqJaFFv1aT",
  "key1": "kCXz6jBJwwoEQoWQqsrG7795Wy8h7DTPqwyQXK1G1Bi3ZDfj2vcyLSaayXFe5RQB9aB8dwegk5wDX2nnmJzPnT3",
  "key2": "3Z6cMzoD7AfwLGojiPqB1c1zwYbWp3cpM7uitJFyNtCBZnvL5xub6YpU5m8LED3ri3WzdGH7t2fqRiGLpVBix82M",
  "key3": "2GMSLdib2DiDZLMnubtP5tn1h87D8QyCyVVoooGd8vqb12vNy1Nn9YTHjCa2aiqS7UuunriEkVds6vf2prQWXAsX",
  "key4": "2MbyVWtJptVMWNwmA5UVCF2AMjfaqP5Yjj5n7Gdt48CUafGQiD1BgwVrioBtzWd6YdqQBQBcZmwt119i9mLVaQdG",
  "key5": "KfMWDJRbQW4iVv8us7wEzWbLiTpc1DB21PycsPBtrxhRsogi5rGdgjmJfAkzAp3VggZu9m8NyrBG338Nr3Rgiws",
  "key6": "42JfQfwDdhirVmDVSBJJ3YEcsMzcK4eumZ25QzgVM23AciYdfRAUSAevgGAVNYsbzgUYBVj6puSw3oAkVmp9yn59",
  "key7": "4ZVe97k3HSD3wbYui6eKavH8SwBAonwTcDSiUdZRLSyaVrHp35XYHieV8EFwawyGgvz6rwheMwsxacW32QtXMfw3",
  "key8": "44RxozzavJsekVgYjZWmC3S7NYoxRZ1oC9nCHz6ASqAhGegUumXRFTQTCuDH5jcdWaV5oBfQxHAcXPrrPiiqzGR3",
  "key9": "5nzm2AW6EniZrA4BJa1Lm8U9VvxrsHM5Trsqp5CghhcQsZ8SVzhrhbnXfKvu5atx2Vw2Avs5LySrcNuorNjnMTGZ",
  "key10": "5TqaVW7jKnSs1h4MyZ91suevmhRce2Z8vj36xnSkqgcJMkcUFLd3eAErnhkB1QXfrS36h8SMgMtnkDYxWgehKAmy",
  "key11": "3zE3Ca6QUNDjqzMkFPh2LdWAqKbGXwG487emWmyheRyCyRKR6EKReK1NTxv6jhW8deqy3RkkyX638oJDb1Yf842T",
  "key12": "4WcNvBgACHibZQfBHd31yGGr7WUVJ7wFEVVEB9QSTww2Kt6X58VZpmUa6V7VYkEuweaAQzGKq45vz1JEzgTRWp1v",
  "key13": "4WQwsWjyHpGPKDcTGhmogBxW52MxgP7bmMuA9mqJ8Pdwr8sh8gkcLb3eBDUC5NuEiU9ET4B4oGHmdFqRhDH9bE32",
  "key14": "5Cdmnc7nogD27QUmbRh9HshLut8fdcdp1YNs4a9bHhE4Gw1pfzmAkzdgoS1ScMGgDjPbsyfwdMdjoGBH2fa2QJeB",
  "key15": "3r71Ks8HRqxQfY74U82sjTjg882hnrSm3qyEpJRsVLE5QWEErBVs8HRzXAjy3RtBMSSJFrEQBCRwLUNYSYeBT2B9",
  "key16": "4cV2yRTHVthRAfZp743d2WSHrZu1r6TmWE2Hrdg8GDNp3HEh7gH7figYgvWgcTCSFZhkSoppx91ZJnRs4QHZR7HJ",
  "key17": "2TG7SNoZVnCEvZ7XZdJjfUfhr3ehui13VPBpVcMu1P9FexDa1cZVq7n2yTdFndDjsqzw4Squnt5L4FbvQZ5T9HC3",
  "key18": "4WNaqoRgAMTZq7qBomJMvPS11sdFVTSqbc7DTQjPZzTaSLdmmNnbtzF6VNLyZ637SEQBze6XHS5xqfhHjZKvgT3s",
  "key19": "3y9AVHEmHFjYdjWfs2RFmHxQL76Hp7Y2yzbSkBW6iaTe3vpZknZjCeHMtzKSkmkjTRkFm9NZ5wjPDZXgG5551SG1",
  "key20": "3VkqZekkYE9xQspYcqWKvbL7sVjFP1Qqmc8CaGvjkMyukQRZFqPKCvJjA48EjZcZLwPdxRM8bJezTZVf3KNwUEP8",
  "key21": "2qPzZd4YVbMTSyG4pdVcL7D43EqmWvwdCFj28rcaXrQq7By9gshFBjYR4aLGqakBHUmGxqWVibamJHfJ4KfNnmUx",
  "key22": "5Lrjt2aNSn27mV9YAT6p5ge6o43TKNUELVTvAgi41J99r7UEDGEXpfF7jmBkMDDyUjFGYr7CbBMz5Se7HKoKBq9R",
  "key23": "EEA2WcBRM7U5mZsh9K3nKVkjQQPuxd8ZB1E9Cx8ECA5Nx1dhGTES3k1gqCdNnGLhvJHm95jcv3maZ35JhSXnCvK",
  "key24": "2RgYtkMHTZ367qY1h69rH4ZNALrUCS368sgDuTuL2jJ7hFue5oKL9r85b8sHowrweRtDyopS4Qq4vSoGHak2z3Vu",
  "key25": "4yRqCRg8tWUQsuBHDPZtLHtZ4fccKGPjTHYdrSvWq5QsN74AdVX9Cr7gkyUYrxrYxKTEJsbMePJ2tJxj91JUjZmu",
  "key26": "3cvyG6jWqTCW9ish5t3hNDzKn4iCAiBySztKbpsWf6oUB9pSNacLzjfSc7RTMSU2xvM3C4B2LJgW6qYq3G6bE9n6",
  "key27": "3CL6oAB1ezHusDLgcYoKJq4rwfknqfUo3tKHPpkSm6LxA9E7FfDzbTtGtGQCvJ6G2qpMYZUBNH51ujUVGQQmK45Y",
  "key28": "462i6AQ5c3byYRr2gxSqRdcpTUt2AXsmzYp3JwR1J8imdawa9sjoqKw4rtGqn7oASvLFKkp25xS3HgqBrnsMFGpc",
  "key29": "4G1Wvjjsync49qexVcb2TSiY97e9px9YTHr4eJ19WGozAmjfirL6WkrMWXnkMdkBPoyQLTWsLnXqpfzRuu3BLFCy",
  "key30": "2sfBWg6SmdahN3kKwVgFukmN6WMmkkuB5CiMN59R9Hksgh2W5Hu6gHAaGXneW2ovSq2j1toReDts88Utmjgy8ru9",
  "key31": "5fR22SauPgLtidnxJAZrNHhuL6dwFCrrmgwmRhGSjzoidiTYfhPHHYKyshQitL41yKnpa1voEQqH4kqZmJymFduH",
  "key32": "3GSW6w5pjgNB4Mk83rhqj8RTxMr88zM31ogiTrvePBdHTLQcaxP6kaCLDM53Mhe3erG5mha5Ey7hzUmcQjCtnhgw",
  "key33": "ruZZzw7fm4dQeggvGXS75oNwa9E9BfKEtJHiEahoGJhYC1ST8rqrhZdzWGiZPiz2vh5znHPP5MAnax41qTSpjQL",
  "key34": "4avuxLJPRy64fSAMFieUb5RXHTXwMkYBB9YMxU1yJg9xpZgt6ef1ZMwwFoQbmCUpW9GYBdPgtvAbszWqttTxdoKc",
  "key35": "4mbhBtWTHk5bcBnMrpza61BqMY34hDBLwo2f8iFGGWKy6Mrr7wbmZm67PQyCdnmrsEPuxpc9eme44ja3CDdhGBqs",
  "key36": "4X6DCSSBFM2fxwbpQMjwWkz2NDmpmtqV2vfGb36ZjKnMVNnXz5CR6YvnXaX8b6jz2iRutqqSAJngCveCoMH7tBbt",
  "key37": "4LYwZXFDd6NBQfAJXsKgHzYS66znQSmiuLuFbgXbjnXVcWLnPverDbhq6SaRpgk92dPFL1f5wwERVZFugdqz7258",
  "key38": "2eDBjZ8A4UXLAhmXWTxRGojWuxWcqWZvqiPEKNb4cEkNUow6s5GrBVSGdHy3FRfRpimSrQcFy5Z3keSVFFsYjvaY",
  "key39": "5PLcUpvDp8mrcxboYJFiX6QzuREvoE9VctLzjQ9o1Vi8Nw6gNpDkRb91HApSusdnUX8LZCd9DeH5CVUcb4L9ybqP",
  "key40": "41bzJbvfhFikactCTe9wvU9sqiuNT96EzQ3rUtabMKZZ7bM1HY5DwnSGn3L7bd51aDbqekt1Zo4PbpXdx9BQATVN",
  "key41": "39uzhCJd29jnwMR8nuxR7uaC43PoijgZgs21TEWAPBSH2WRnh68pteWcm2Xu2F5sf3xVX9VWyvWPkBa3yUgwUKW2",
  "key42": "cqGmSKyTW3ajBd41dhNXBVveegdA3XQqmDxg8yjvhXT7vauhGPaPHwn1wdY2giLe9ZEP8Sx3n1czzACoLwkn8p8",
  "key43": "5emXqZK4j41EcAz77vne6TH2ZW5UXVAsZVt263bT1P5WrzeJ8mEP1CVGER6CBf3Vv2qVFfM65JgpqCHRqcStPhyw"
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
