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
    "5UJDJTw2f8EsSkMF4fh4NLdyfrUQ91kJxCuEc78bxY91kaZfSBfGtbaPU1L4wPqwG3JcysKDpnKnKkDQYTuYKiuv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AigKD2RpRS9spqt7gWsme5oMwDK5PmNgD8kqUoEivEnfeXUKEzwqVYAeWkYmpTceKzMchgskPaUMMFoXZcYxqme",
  "key1": "2dxYHBYcjTkDsZaDyXwwZbHBKdSHi9pQTEm8T6DJJPHcPMdDV5axtNYF7AcCUkLvK35cWJGzvEpcYMzz2Hpwv4JN",
  "key2": "rct1PBFgAN3beMNVbhZ8o6UJmrXDcshNrXMg7HmR7y4JZdF8sBESQUGzC6echrBxzPvJoDZwchvyyWXVHffwKCB",
  "key3": "4eBR6ecBeJonRPDmmT27KPCBKNzJw1ow7rzF7o3KFH4goTbZUWcb1HmHTwu5SoPW4L6D6pPK8HjumLVmvLDr4EXJ",
  "key4": "3GmZ2BV9zudKv7jYPfiZ5SrnVxZeQuMatJvMJHKV3ANWX2AGDbQm8d3j5nnX7AdysySFSzbgStUEcnMDtK66RRvv",
  "key5": "4qAvFzz6meHVpGmtS5s24WciF7PtaTRDY81ZyVAesTSKZPvcocdmK4FKSpwj2aQbYWkYQHy9iphjniJZmy3Pn6uk",
  "key6": "3vBa6Aqtrd2YYR5sNhQqauBfhZAeS2KDm79FnKU4F99YZaEM37Kju5P232g8fSEzm8cts7btmXRQF7KM49ukTvDQ",
  "key7": "Lg736wXV6vCUxZeAogK46xSCb7XMPBPAAvLHbBsVFf15hz2816jh21MepUKBCkyFvmMc218DL39YuytUP9YD1fY",
  "key8": "4SnufiVdV4X8bB3BHBpbfSe2EX52UCLsJuUyqNeGVTu38hn2j4WsakY2F3EKvHRs1VdbjS9hZE4HWPyUvLyQ3d8h",
  "key9": "4DHqKoRRC21Sr9AJRJ1Vk6xPHFh6MhnjAAjGyQzEtcbauGrzPGJBFVHVVw3QX6wtndKkc1fCCZkCNfLkkHBD1YSv",
  "key10": "3auR8BHVupoUZzq6XE5bJmFYLDfzbmfRwQTxc95rPXw27RPcNF8FXjazVHVYxCPmDAJGiwurhmkSvUSQfpqnvDah",
  "key11": "4JgFRnujxqz99XMAgWysqznpE342ew8eSJduMVTbKzmkSoyUYwLokM8oR2Ht1yNXSiSdkU4ZNB5i5C9XRHwC3oc2",
  "key12": "4WpFBJjsQeufaWKKwMLHK7kjufJEHZvF9CeP4XJYtC7kxnAT4YDx3XvyWTrA6HrfGh88jv9gnCV38iLzQYFdpsM",
  "key13": "Ab8TVNyVtAZGXSs9GveUDKaofyX7jM4Da1w7nfdVGFKG1vg1jE3wrvy5nKEZqBn2ohwJTG98843bgFxBbrwnysy",
  "key14": "nCoMib5XsTdqaW7uxtQ3NtbLgvWrjx7wUp4PeRc5u9xBkiUcNZbj5JeNhZnBHikejCcUbgEq3Z3dgNDKAZc2xGR",
  "key15": "EsYwfVoP9mrtBq8Ht4T8ywXd1yQWjeW6pKSjaRrsZGmLaJYe5Ndi12PYLRQEGNBT2j6UH2hsTRka1A9v7o8VpE3",
  "key16": "UsaWYduj6zkZDuBSmUU2dmzu2w7urvPrtqXP4mmwPjBbhwuEbkYWHniARABANybXL39hnnA8jqyzgWouM7E6DGA",
  "key17": "5M1bAtvxtNxvMrhRxoUbGwukkAUJoqo3BExw3bz2CAVoUzU9ZdiKKFbVnt2kBMSqDbfYFNg5geWKVk9CfW6j2aXE",
  "key18": "49UnuVvHCsuAMrZr5K72AXBx881HNhirTJVZpottabGd5qFufkEGLfr29zCMhfTSjcHRA23LkMVJYBHkWrz9sTHt",
  "key19": "2VLmGUkkNkMrMRyYFokWh3gZQNoJyQ2Gwc9W6q3sypATW3WaYFrHv5vT9ZbLKACr5tC6mmnBm4rSr36oLQnwzUmR",
  "key20": "JoHX5Re1ALTq5NKWWc243vxKVoyNbWABrfLRKxcRpbRWLW91Dpbv9Pk5bToutZHFsmDDEFqYrXerEzJrN8JdMDM",
  "key21": "54zNaf7UdVVN6mEnYVo37tTuPyKeqffECj6DN9KipLiCawr3evyjZMCAYxBkTa3pHf62CyZ1WmTDdZhQfpFzxNe",
  "key22": "5znsFtBmjvrwNjV7K696cymKRSGLTvB7j8shqy4TEkNVzXoe7LBcY9cQeNCXqbWiLBHRVnVvQM9kZ1TwsjjYbMyA",
  "key23": "66zQEqRqoEAC1djBghvVGWUFAmVhLj16cKA5HomVvtEbn9ZcnV91aCDKmE294DVt91FJZFbrjMsVL3PSbUSPJVTZ",
  "key24": "5qy7cT8pbXUdenkHF4ayxzQ3DYFDE3wCTHq3Z6QnpJEhQgVQ1we8KYm6y4LooQn3oG19p1nwEwawon7MFuy1tDCa",
  "key25": "5K2FGfi5AByPLFJtyTzoPXfoaGgTVrBxpL1pMT7iHkbCLcLBKvbkUaNm2D9ExVH5DEhooD1kBszDzdEKTDisVGDP",
  "key26": "47rPKwLe6vaf1pDHpdKrGzgBvPXLQX85Gt3t6sxYPVimensAb8PtFRhC2F45kAbP4AQXY2SKf61wVaQLjZCX724F",
  "key27": "5Lap6GiSbLd7FiSycV4R4Xqn8c4sHKmKPxLfpPrxCcZrc8Nt9wq5HE2U52BeZcQi8Wxph4EpgiHHDjZgoaJBQKHi",
  "key28": "57utEkP9RQvBUTSdTAjeXd2McG9xpxxSoqEBS7qAoaQmCFX4t8wsjLNFnHqi1uim9FhvQaoL9oqnHVQvWvKpn2wZ",
  "key29": "39iTqk3GPKcUtgbzZHmjhLViy17c5QFpL84ARvpoRqR53fKpJnjtiaCtzMhLFsxpMSSXTwPi8S9ekdwu7p2mutxt",
  "key30": "2izD36kMYj2BZ1W53XWbvfBSZmgbMeXiBAScU2eYBFg82eqnngSypHrEFjJk9ydzwVTKTmJrzkTEKsbybHY1JQoo",
  "key31": "4tEgAury3VV3QkZwgYtY25Eh9KAbk6bM4oygdhDwkX4yeKTjvmxvXSPRH6vdWHjM2fJyF4GrbJLFB27TDGGqMbvr",
  "key32": "444YR6V8mnERhRaGk81bmzVzNHPB9qFTXVexgRzpX2ZcwUqEAB8K3hrfMnRFm9qSMkWFHFpSG7esd55wznn3odyG",
  "key33": "3CAXcH6n3n2hwrU3L2SsM3uKn1c2n4sYrvR7KRHVAsoHqUaBP2fxxsLk4ox8xYUwKV15DtE1dLEoPKwBeHLX6Gkv",
  "key34": "4AsFP3yM5XkYzYTSnBy6dWGvybJrQymQo4WHGnZyz1WRxU8KzERVPyP25tYHGSvwDCSWuVeBbNqYwcdsQxQhdiNt",
  "key35": "62DpjMW8wzLZnUDVMFuVZbcNr1u6LFPiQzNv8y3xw1kTeFhA1SofFFLZFMnMSHPSVdX2YGWyxYZGcKufb8WzvHz",
  "key36": "2FFdX2ZcHQNKd55XtamoZPDdqJn9JNRs4vWe3ffwEizgarptnEAvPHmzaPtvGQ1rBFCncEn4D2RtNCehwmKDu6qt",
  "key37": "2qNZJNaYeXbyYYkmb3jufeacW5QcraxgPfjuhLVxxp42Pncro65wdptef5asdcdgKECP6Xk6WDsLDxv1xDvAhceT",
  "key38": "6TWpgAk8QbMnRHXQF6THREJ43ZCnp2Z5n1wcXzuVsVnwrT7o1PSMqTvmiaVp48xCH8nZaMKqRacGFKg3JTNSKU1",
  "key39": "4rH549P8QnHexsrz9aPx4s9aKYsuAYi8Pm8xNPpj7zjjt6wiphqqiZ9Mo5ZzzBqHMSWxhXXnWELBxhRPFGXP45G9",
  "key40": "4fW1vDKj8qkup4NwewCX7MetbaKb2btckcsQ4c9hwSMoie2QRsXyyFPCrYZ3bFz4Dy2dFKTdxGCk9apEzxYwrQRc",
  "key41": "2w9MtFAynKCdEkaqMMk21qiiUb83M5G54ZYQQrbuFZnrfswszomyz3MYiBjyXsQU64kaQddzvUuo1JQUMMCERFQp",
  "key42": "33bnMBekck7ybw7nQS9Lhc4jDgSb8DfXghMivfg3CHn7VyJo1VuUZM1RKGvDRyLoH2ZE4wGh9BQEmyR3tn5DtuP7",
  "key43": "2oaVCVw8PUaqa3rGnUSLT58ci3FCUSdJEwqW7V5FYceEaJJQzUvULVXJ9tiPB1HHzcR3Zqpt6ZDP4SNF5vQJLoiN",
  "key44": "3uo3XawtuYtZczjjyfsWj6J86VkMPBbYjiQdspMsmcDVc13kGHn7UGUnGDi752MxGVpCz7oSV9KDnqdM5kTfubxN"
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
