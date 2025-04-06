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
    "aSrGPycRuxAzDn5uW4yKBy94heCtt1SboLVmVQ8JPHTfGj81QXLUjCAuE6X4n6d18UJ5ccmgj8E5PoeKSberBRH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uW4Tm3qVMdZ3RPD6SB8Z69MZYsprGfikNMZmvh3hTrSWcTQKtrueNVbPyYNFQwcYibLWfLSCxp8FVehHwAZrs2h",
  "key1": "5WKWLUb4yXx9SydqQSRqYJNUP2QJDL1bDwyxg8wwobh1AUeVo3pBtnpf9Fqu8m9ap15nVKNpDdBxCAfTDXPP3CaU",
  "key2": "3jxnTkBcBQ5mVBJ71ZXW8VoVcYKtvNQCvViEsiTs6Ua5dAwcjMvHrKkbGt2mqo6FkoNbefAjvxoxsgUqi5wwwRfS",
  "key3": "2cbLu5fz8FHBbxwT3CRXTbZgaRARJwF9dUWTk4hYTXAdgvhZYwoupiw2KZZrdD8MrRTQetv6TJGNnc7Qc19XfDf6",
  "key4": "4dRNBBHZVj7BZzFP8HTXeJYt2etCgXsoeHizJZ8B8iomzijAB9PVQStauzfC2f6qhF6ZUZZ3ms6t3HHggqXp4dCd",
  "key5": "2ZTkvArrpph61BGZhUG3poijDtMUoBwx6z4hGDtbFhD6KL7wu9U6MRiNUsL3yCV2yzk9nA69ocxEyC2kXREfnfev",
  "key6": "CSbasTxvxXGDo8pmLXqgDN3Y1iSJHpBn1z8iA3hpuqNwWSXa24yhzC7uF95dbZChqG6NY9twV6tLz8Q6ZcotkgN",
  "key7": "3HeMWwuqHp9eMKnbKBjQKtcgfevVFn1yccMgYYovx5XP2n7SGdia8eqeVXUYgzxBJtYdKvdFfFAyrrwbsxiE652N",
  "key8": "3Vwqq9LzAfKN5kGHPG8wch55fstgiTay6uMHAicTvm8vpQqMErW2EZTD9u4nB4HS5NkuS8SjJFMGAQRKWbCe1nyu",
  "key9": "4WehMGZ79eWFzn1p3WfRXmiZvpeYvn6s6ubf6fT2rk3c6Vwp5jXkMirjXuDEkbeeiV93HqassCFVmFqCGyjQ4stM",
  "key10": "2EKgE7M1YxaT94p6fRwcPyV4xh11qtMFuqivDrKF169uE64sF9AS8cpQJuJ4mjtzLKo5dqpWGLNE1TNuSAu6aeqg",
  "key11": "2MY9UiCfHJAxLhHUdjq1FSVV62Q1pPEbuc2ghbPadbC5yUC26d2KD68EubHoJHggrnfUdMKHk2Eho3uTf52xPBUi",
  "key12": "35tSEF1ahWmMUJbsYoCEUzUmzDMU419h7ytP34a3hiqoh18GUK59Z95hgWZYCYKw7DVNB1r4Z4wevHM4RrENQz7F",
  "key13": "21dmF477c8aN6ufWzFPkEgnVkWi4ZHiTyCM3P6NZreCMrtLU7VkU3fC6Df67ufjiNU9KkzUvNwjbhvw1N6eHFef8",
  "key14": "2PjthHG9VCLm6Jzkb9i1die3QFxcFn5UCcsf9Wa8rT26WUNmsc9HpmezbgTbif6jxqmuFuvGifa13aeH7U5b9SWJ",
  "key15": "3gLgi2tEFi5XTQY1MQCbykK6uy6ukfyyn3zLSpYbZ5Sn5rfvBqRuDGfzaVBkpNHYNC6FNxWtpKrQSY4bgsdZQpnG",
  "key16": "ZMgnvFkd8bKv2ifUoNbipJpoP86S2H4CJ4GJTk3EoZqMZ8A8S1R4ZzZ13RKg2d3ocjJgk2Sudi4gpkYq3jR5evd",
  "key17": "5yi23p6uT5xwNjuLoAgAYaBpF8w3bvQ8shfmHar9718eW6k9ioDD9P2KfkrVzKzVkNJirQUGc2bCRqVRXQuge43K",
  "key18": "cegkJdsoCyeMnZdufjhMAuzjiZ2VropZLX2MnSobYaPC4CseEaT14UahNg1YVXwDbUEt21JBuBWi2hCtseetoLc",
  "key19": "X21ZDzSwJgjtP78vb6aMNzswgNc5Q1gZEQ9vyFL8q9usUB4KCvPixPQgueXHeSWBgvf3GMJ6zMNPrSEpy1LfpVn",
  "key20": "3W3DywEzu5vfUPhjyXpqYvNRiWe2e8CZQsBVsqDUArmVwNa9jZCqKiAEa2DrSVNvGX25WBSawUBpRJM2eMfAnS2w",
  "key21": "22camQzhVGNdkVEWxrVB5tGMKEc33LfNsFhRag6bpoieFGD1YmoqSbfRBQS1vNyPD45Ju47RbtPcmSJx8ovFHM9s",
  "key22": "3ntMn88GNbR3UvjZpvxfhEfzppYiXWgoqSZiQUBrjY7NF1qVMvssqeQwEpyTxfRTBGfXjXp32rQoCmLSP7PsW15S",
  "key23": "4c3Ed22vyE5AZucMVasx2Zi8ENZUtz53scj5zREfw8sZSHSETQAiSraJG9Wkpwf5VGFuUpkLxZBCwWp3P6kN2uCs",
  "key24": "egaLXq39qNBBvLdMzm8m4X2kcmdchPxVGPUJcvuv2ZaQrFABH7Us3m9xENfgCsUv9R2Nec4GguLZ9yUShzWry6u",
  "key25": "3QxHXpfEtHo49AUuiBsZmuR6PMQyap47CGYtzUgWdtspfLA3niQvrMA3iM1nCxYh9cJrkJsMUBvtifgj4L4qqTA6",
  "key26": "5yUr2RALyKikUUu1jtYo3Mn82wQDspSMS7Axs81cWyTYb7aBxQs1pPLw2WD54FAEeGEmDYzhbtQuhJ9Kpk1ZeAdG",
  "key27": "ebQpK2ayPCU62mL5NRTsxWHdr15L9FkngLkW9A2WzzHHKEZKUPFPCkuKqHKY1rj1pxoeTj6xQxwdqYuE1KMfYPc",
  "key28": "Yb81gzKnV7wn66SQpWKyRDBXVAgah7vNQrERBxXv3pjLk62Bp2RsNboSKdkkTjM375nmsZaykbYZBPND2YkkZmh",
  "key29": "LGhwgnEJUNHGUt1RNHLj6zrQFVdQwQ4sJhhuuaTgtQH16PQkTcABkFYWpuvkxvwkAuvksZ2cBZh2PTAxwfW8UMk",
  "key30": "agPs8zJs2eF9uQir6dHhqXvLMKKqDHhQfjszEKfRRJjHYSgwxUc7qCTdXzqFq3geg4AK25KimNcxPeCSnvCEQeF",
  "key31": "3eLUxsELWkeLAhixT2HRzEDWwcDq7Yww9Aw2jkj9jQUjT9xTSPs5vKG7Vpcq8jnvodJnGiNs5ypJMzoQ7nLaQLLf",
  "key32": "491XQEZDqcV4ZyJL8bshLWCzbn952JaLX5HKbRdM6uu7KuNvExU5qvR6aceTCFv2t8wD58eWgVJtDZTLdABQ4DAc",
  "key33": "273FmtTQRVGHwnTxps8iJeH2RsSirp26VVEZ5M3bFDb5hHMQbYtjQbPTKvjF2DBHUV6u21mzdxrDPT99V6AnQLCs",
  "key34": "3r4z24Xv4gpkPnB4DRhszwmVa25xm4yPcU4gbRhCj4GQvMRE6maE8UiohYbcJX7t2zd5yCfq13aZLwXphyEuYLaq",
  "key35": "Pc66e8vYqPwagoputewwnng4KgGfFZod3VaRTFFrGTHyaBHAJ78ZE4bLThEdvgioMKyHLB1h9hVYaiFELW9BbPs",
  "key36": "4eEs2ywAJ2XPcwgtEYjneBiYCrQqQf9NYyEn4nBm7aqjgvU5QF4RVFaf3gJwbUWbczzpzYmws2vkwupe7bznYLSW",
  "key37": "N4fn9j4u9NZ3UadbYvgtTRyBGSqugvzJNhR7pYzo32oHyauWmF93mc7PJ1mTrcHwnLonBzNLZuvA4JEPNeSVRJP",
  "key38": "5F2DK6LztTh1JXQr4tFuwYmXprxHyjciQAHGp1AnN1cAhaxyGhvEamQWgHgaKyYiUCr3Uq5EZJWkos2nsfKpK455",
  "key39": "4CJR4fZ6cBtaGTQSHddW3hFPAQMpNjJSdvgYUxR3CZLKu2kaPfisA2z9AfrZru5uSvft9VqtyPu9u59j27hxB7FL",
  "key40": "3C7rDyAuM5buCfy2MwPVp8GDHJK3eWCGYExuiGMw8RfTAUrHozT22QrdQPR4dtY5TxUfZ1o55Qh8AXL91uMs8zoZ",
  "key41": "2p2AzUPHvwgZzcbz895VkDWAsRCnSY5d21mdKEvAxGk9xYAhwhQi1PDgg78xZ3E6YVXYx13zEkp3Qr2wPeoGqexF",
  "key42": "3S9bVGNNBLwWwwu56uq4boUdw3feu3icw7EXoEbZMGenfLRnNN7FL2uqDdXjsKubxfRgeHnMfACwJRUym67199Wm",
  "key43": "3tpPHRW4HefsHDodGN5us4r1PJ7Q6oNNayXCi7T7upgDav3nuyFC2zZ3wBMuF237tmDyP7R7uLCameu7V7BHNdcZ",
  "key44": "pWZPu7oX4tVvxHaqs9cRv4jSBAgW11n6SrW7RWKTJxqwufpxdEpycGjsTa4NzEkWS6hRSUdWShzA8zidqmKk6L6",
  "key45": "TGcHsKu8gQgzUk6KzER6WTtSq3AixtzfbchAZeaxSMmypMoXBk7ZQTQGQU6t37jp3dyV3RGthjymhzomc7M1z54",
  "key46": "5G3q2a9qdrBLCwYwHzMLPm4x3KmBmB28dX5TNQXbVyfjHXAVqvhCvntxLXsBY1znBAE35jbSQ28PW9DiEujspvPk"
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
