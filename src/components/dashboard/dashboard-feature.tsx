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
    "3WTzPdfvzEoWH2BohhzDoAnb94Kf29PTBTwS8dk8TgrpjSqs9sgyTEuJ7PepKU97YSjXPW3X1NDyfpVjCidWtKLh"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "2adR6boVgA6Mahb6GFJfeDXAtCSz11YK6EXXawXJJkN2jCHVs6SET83pPEHgh6LhssMCACu3r5Nep3L85Ne8tJKq",
  "decoyKey1": "2BZpWyo8CfXzeZfCaquCfF9R8T4k7bEvGqENg4NXNPgrsztmJzJpY2N9ELkHSiVpDMv5nHfMD1vy2zqePf9phsJY",
  "decoyKey2": "2EgiVLoAYpHAt9NVXMF66n2rM4jkp9tzxqmhKJhhyYQedgAnd1vcTE4MK3BZCxAUoh5eYBuA4bNbe5zyCnF9f36P",
  "decoyKey3": "uPzCYq8E5P8KQS26Gz1Ybv5j9JgBMdLQf5SZ3fvRp4MYwKkBcyy3jtSKnP1MzxfpGG2hf4yxtsaocpDSiAAZmEf",
  "decoyKey4": "XmqiUieN7zTBaHDUKm2cYVSeGq7gYEkur452e2yFeqEMZtLu5hWaBFPWetx7eyegDkSmKyRb1DfMAG44DRtuM6A",
  "decoyKey5": "2tbCyUqeuMKC5Lhbm6jUjh8DoKdMKYhfCfX512hZqMtPJLPiXTnK5FrEHcuh1m2CUW4fpgPGyZCGE5cijgDrPqR1",
  "decoyKey6": "3hQQhXRGAcDE5aBDphh67Cfo98DMqDzxRxH6p2MXjUoGQBN2oa3JD5B62mUTHeHg1s4G19nXewV4sdRwLYieUF6b",
  "decoyKey7": "5zt8raARRx5DM8J3V4F8oYRAma73zfnf5Pg9gbc3Az2iRyuZ3NPKGABT6DxXui3GTtfDYXUPD2XpFuzJGJ7LZfK7",
  "decoyKey8": "2anNoiGhMZrKQBZrPiw25LLEUr1onMF1cXM7mLpMPk2TTvVripsmh1Xcypfqu2GpRJgUJHTeEJYsJYJ3P3km4Rrn",
  "decoyKey9": "2dNUWxCxh9GfRUNrY4KMfXAYKcubCNR8PoukLYTKHjxE5bkmn56e5XxBhxvUBryMELUYL1Dwjs6b3nenpZCp7q9L",
  "decoyKey10": "tZGTTnaNXX9wSauNhQArVc57gYS535aCqBPsBLo9xACZjr5i732WeaZt1sEDp7Z1GgWp6zyzU9xyCHRRMm64WrA",
  "decoyKey11": "4SHLR7XdimbgGqetXftyZnVscgrnJQyefM3eTwLYa3y8gXDezCsLffADNDY2w3mKM18dBTDLaVfHLZ76qk8kRwTh",
  "decoyKey12": "4NcHD7R1gUM9EwV7Ls3LjzVYNg4AU9Jn1wTa9BZrWzZZP1fTF3P19EbDJ3otGhNXLhhHFezhSEJVzYgof4d8Bt34",
  "decoyKey13": "3s6Ww9i3SXcNmM8YSHLXMkPvzaQiJpYbFnqzdDPvKRq2HbSkkN8Ttk9kRRMxz86FX8q5U4wHyXZxgEpxAtbXpPKp",
  "decoyKey14": "5WmGG3rh7aw8W1ZEnhgMURpxUKuFnx7dfym48Vu6YdYX96ycgph2EcZdoKqca9NdcbbeckKXZtGkHo7pxKWQRKSM",
  "decoyKey15": "3p3hrcp6DcEMPuL8RGeRg8wGQHKFegPpYLH1G7mrTVkonDM8igjJcP8m9UxvmDBSz4gFLCjXMUEPa1yEgcWh8sjH",
  "decoyKey16": "2qZ7jsz3Gwj3qwcFoxCyKkHusAEZSjHsRbSkzMfRseNqVM7pcm74CXW4SdeRJ4FfdgaLWAmxNPyo6N1voSYJ6pUD",
  "decoyKey17": "Kd4SVaYHbK3dN1JTnaybmptPZL78YX8bYZ6Q9KarJWFcXMSv2muCP1pSeocZJLvJzqrnEU6pSiwuXJU7hTz6teL",
  "decoyKey18": "LuF5eMoTUKq3gHgLRvGmehyMZTDHs9DTVAD4nBQ4kHqxiM6ALupScgFZFLDp4BCzZU1t9BRVFfTedXGCxJ2eVRC",
  "decoyKey19": "Qi8JpbaUAoTGzKt8iE6AabxfqgUpLvxZ6LDWxJu7JBxsnXivLiDyKinU2q8Rnatsu2ohxQ1JMmPKBePxZnYmiGJ",
  "decoyKey20": "4RA4XpNkNnU22FQx1oVtNw5meYSG1meq2bKEW4CD9suvBp2jXEWSAtt54Gt9NsDwqs3zxavG7h1K2Tq42TjogCv8",
  "decoyKey21": "V6eGrbrrfyqu47hHLaDeURPdwTjFM6B9cdnffmghK5x7HPJC4hrPx6yWoequdsXFN7e6tsbsU6x9og1jMu3Ku3p",
  "decoyKey22": "2p4EmzLj16MWrLpurtwr5cNXDDiu36y5ojMaCq2Ppfj3Rwdc5G8tYXL2UFzmvHiasPApdAFX5urGyQPb5UqhfEdq",
  "decoyKey23": "dmywjfKYw4Z6snFcXdS7d1Td3N9fFfZAz4LCrJ7BkXuRAB8iAa2GMrBpHzwifvrqK4X1dsKjPFRW5neN8YraJut",
  "decoyKey24": "KajRdsP9zTMAfjHZDcpPnd7K916ao6p39DWVsYNxH9La85sT6ie2ZM9DfM1VPWKBbKWAYjAMEfDyRFdgZzqETHs",
  "decoyKey25": "35Ew5SvA1MYZjMLCuYdXiB6SSzHt2btGD2wApvdUs1QA7mEyENPH6vM8YQedUM8DaXqTMpntXwSDLJErE8n14Jff",
  "decoyKey26": "2433HLbVnymeYtBdXNiUoN6aEjy3dQq79trFgPeaqFwvF5FRnqdyURjUTQyMRiaCdALYBs2xhBtwdK3MKKgpS1rf",
  "decoyKey27": "4EbzF1cfeWcZefsDXEDPSpKEepoRpWykXv6jTtZ8XprA7a4NMHfKpsnEnqsFUChEk6AHjttTbWNVDpWm7cbug7Mk",
  "decoyKey28": "2fTANDLZqdTHHnBxD9P93d1Xmszv2mUUcvo53e7TFumeP3HH5WRQ4mfqn68YgNHhFPPRNKvkctRQcxwN6u7dQbjU",
  "decoyKey29": "5QLRvFHxZCPnFBUT5wAy7FagjxpGkM5eCStGqmbhevRGNwTD1LbQEFHrpT3wimMQa7A7315MUri7DdNRd7U8wyeH",
  "decoyKey30": "62EnXXqoz2D8v6REuDQa9RowmKgETBXx1NEWuQLaCxBiWpaXfQcbnAiLSq4Fiivm2Nz7RQ5jfkZYGyK4epLqsCwc",
  "decoyKey31": "5M5zmvpLRao12YL2M7eDhHr4wyS7zyfqdbtjy633ZBmTwS3obbmaatsrpQBrAdit96UYmDV7nm99386hNPy8wC3Q",
  "decoyKey32": "32kZTyMtYbcRNHXPcwfdHSvYnGyhw4frzJ4PheHxZhW2nBVwuNQQKAtub3Qx19UttzyXQVEJZFcfjTQPdJqdRSdf",
  "decoyKey33": "5U7AtFo2ypWtQ7YC7ne2kW8kBvSX419Wag1Qz9whwpbrDWLNHRmvWBZQXgrZpucpuFmxbybALKqiWotvLkS8q41Y",
  "decoyKey34": "5Gw99nju5W9UcUwVhQQAeQrrkUwcpza5CQ1kpGZgzGs3TFx77K2m7TWcBjYSByZuP9ooKgSdgpWQg7sihtohK4Vq",
  "decoyKey35": "2T6RM4pUaDQeSGkbU9Re1pwwv5dGLvvu7nM3ZyfqiPmgbg2QeBH8rj9BzoGNMwobfGB1smAiNixggXngom8Zyy8M",
  "decoyKey36": "3gFVWRkQmauoTsYXfCSHgf3ReVEi7nFT6CHftdhcApLMkZ3ozDAb7Gmejn4jqzkN1GQrNqCZC26Jas1SD43pktJr",
  "decoyKey37": "3nkYnaN77aMmRpji68MnwAsrDJ4dsFJfdkxfFuMe7nz85dExK8pqytABskkmHLsv3bwcY86mQNeKz3mg524Ke89K",
  "decoyKey38": "XZtzRyFn15VXFZNSrN6KUaQiW1ncwAkoEax54HP2cd3C7oQKprn6jz2TutWXck4CvaL961LNifC3biFPTyNQtpk",
  "decoyKey39": "3gjkea4moEX4ZVpSLSJbuH2H7SjPB6jXrV2pzTX8HSJkLUsySNEvB4vJsNm6crVuZpqr9syaHkiZDb9Hni2GjTeM",
  "decoyKey40": "4tYxoRe2egmJ7p1h3ou1hpJUdDzmcDNpUubq5fgZWjsws8nCvAZjr81mvqkfhYdHpFafMyDQvFfaUGBHn68JHUMi",
  "decoyKey41": "27km4aHJyQqkDSPcYNrzNePBsC7Ygr9cNGoPW5MRZ22SwTwWAq9W1AtWLUjHQzoLQ5nWnzLDhsnEY6MTFzVdP6aw",
  "decoyKey42": "36THWLUBPf42eajKCDRoo6EK3j1EPNzsnaJ5RdEu56zAQFCGdhsRMux4DEx6qjMnTsmmrLC7hJBX1S4ijtcsMb6S",
  "decoyKey43": "2hEnzfpj7UYsggHNKUW7ETKPZKHXL12wrA3r3gkFeE1W5LmFrks4kaBoDyANhSUcZ6kkYh4WPA2Ys22FST4Dy5VS",
  "decoyKey44": "HsXu9UEzeiBd4JH3UhWAD5QQDuCExHnDpSqxvD83Fbb34ULrHZUFmyjW4YCAMHVsq1QVQNwagkwynXF1uhqRPGA",
  "decoyKey45": "3Mckw1pDiX7jMM9JkjEP1h1tmGm21Hh2pGrCERwwLCMJNkmTpwDen1Ywyr4zU5UBFSngYg3BsnXuHhtAA9bk3uDM",
  "decoyKey46": "4eYF4Nh8eEmhesGh9ZgGaoTP52N97jK8XbBRMp2BiqVALZVFwtaE96Ndmt9QVHJNfLnbFFArKkqqS454qCPFAhFa"
};
// DECOY_KEYS_END
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