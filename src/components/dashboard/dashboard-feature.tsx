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
    "2EYwitoYHKxpTHnyTD2LzBr1bLLSvPaFZ9eHKxvQ8YNDqbQQUpR37P3WeghcEtQ5RR5dUsKXhf71da8Tjf3yTDAy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QgDox8FWC727v281wpDhmW8N63vS5facWaN66dwJUxLjMhXbxkxU8QwF4p2QtYTRRkKWZPb7tho9ghEbBTquRNY",
  "key1": "3sGDbfCeAyi6BS7ucTLTjH5pXtY5jHkzqW9pAP6uhkL789StWDmdVapbtHocqXrhcArWCeeFNtUJeDjHTpvHypy6",
  "key2": "2Y8Bv2BusPkSiPgEkhRcQHFdf5zQaVF84MVThag65EqMoSgW4aZVsusMArBhRPksjZBs3D367o7iP16h5jHG7m1X",
  "key3": "4FgtqLKbKyXpDgmBEddzbFYk2jNUbTKnYJTsotxarXpBug31dEBpAFBodTu7uqA4JC5Chf8N9f8MDPHQZL2P7swD",
  "key4": "3E9JhJfRXzm7HZWDXADLbViJmiT9agy94ZXP5oSfaadzHaSZf4DNP5eCnpb7HJ95sZJGgQmQpwLQXGMYAA5fFMyY",
  "key5": "4gdCf81CjPTngi8GoSf4CPdyfd243QFpm5JUyj7na6hEVRJgEtCbFVbS5uLYy6wkvggm3hQ9ufgzPgn3BSmibD9n",
  "key6": "ALTH4hBAjKvJU4ymRHtXRVSFEhQVaXDqft7WZGxdvFmKk3AMagchm7Ls6xTLaVWiq5gXBLnfJ47LErz7vRaKcfR",
  "key7": "5RP1D5EgXt1MUPhazNyxq4bHrF54UhbR9TUmtSw8qgyaExqZskBoZVyXiTC8LnbqeEvcXQUzStQyEeTGKzD2hQCk",
  "key8": "2NTcrvJErDCRs5amVYrx1WLuvix8sp3p5jfLSG3HxdLhkckgkxzbDm8qkGL9WvPD2bkgKeJMTTpLJyceBSdV8E28",
  "key9": "2BBNRneyS3EeAtt5xLZtwoYAc1m5UjmsFNKdrqBpQApDhPShieucbTYP6XueCBXNBEinRVMFkWZSKbDtaXj4z9yC",
  "key10": "3JsZ3DF4DSpMRsNT1yAvtSTAWLTqpEd4iYn2Xe4uPrivbsEkuvCT5FnQjh3saCL6UX7AP6w3FoYiUScYABFNtwKo",
  "key11": "2f5y9cPrmNDDE6WPwG1C5UDM1G7kAPPCDQAz3hXJ2ghNd5FfNWUuQzbucScEacaK64tG9vxSNq8f73rRyNefNG8M",
  "key12": "7QV8MceSMRRgZya11eJwygyfjQ1ZSPNpYb4GjgeMS2wjmSXXGCLxd7JdmcS95MGsgS21GJ19Ckf7UFG5RkDQM7a",
  "key13": "2pa2sVu2Zzi8wgvrc83qDxwCuAqb3BVgzwmFEBVpyAU1TSjUuaEW78zy1RLJsiU82yM3dmVb4zbqimuTxFbRpCnv",
  "key14": "hHibPFZ4n8hKAiXUfskTSfeBS2AE9Naqgv6nWREvRPNScK6tQMRxwre42qajq7SSnnkXYvqR3S1hPLH46mLp97S",
  "key15": "gLUR9c5KsMnGUk3CXnz6ujfbf1hWSW8om4x9Gu2pQ3G17dEDSv1t3JSegPFJpKqVfGxdyKfFskmkM8AiQi6nbx5",
  "key16": "5UnPBxR47R26uwgVGLptqagKkjXU8Gd7cgCPYCnqowSsYTwktgamUoC3vWivMDoHjQUdC8iDppSWZqBpbSUdhJjY",
  "key17": "ZBJxoW9iCZDZ7epjXe2Xfmb6mojV1wbHaXN8QtgZfo3SM5XfR1tpdY5JnJP7Ac8qyEedpepsQdu1KZrs1HKQVCG",
  "key18": "ViYPREHdf39Y8BfX8CYfnHLSomX7chYMfthQPXtiqKTeuR45SaZWPLCPpJXFb7fFjrAZrfNGbmX47AR1Mos2SD9",
  "key19": "4dBbptQFczZbFzzwNPJDibPwec7sTGkv37RKAxo3Mn8ESG9F32Zogiyt6iB3jCQ76YZNvP8Wt3fWtF3G7KV8wvqs",
  "key20": "5Yz5kANp23KeCoBPjcL3fuDnF7ViDSFRE2zJ3az5bW8ZadQKrmNeJu9pZciHdjazskfegjFVdEk9sPFdzQDFcqNk",
  "key21": "48ahu7UM1rdhdaHoCihpm1uBgXkBkheZPBMTS7CuX7Ck8jRh48cXFeBvcTYJLqTQo4oGKtbyoPjDUMUz8EPk8Q3R",
  "key22": "4Wue4XiQiddTTkEYsMhpZaM5CxUEFRv41hndCQzdshRod7bEc99Wmd2azJL7fUTqqVd7QdDhg6ZVe7GCJCVb2wdC",
  "key23": "3rs9TSXD63w7QLkzJY5dUF4hU7Cqoyd32pgT47CKgciNvgQ1ZUJAVdqfzG4UKeN5s4YMifqepKh1to2unP2xKAMD",
  "key24": "3fmjwpr63rKZUep7gYut8zyhZbwteHwwQR93MGoUpUfd43XyL6tN2po82zMPuEwN8mwuS6BMVLi4F3vtDBAW54zy",
  "key25": "aHXrDimfYbB2Yqmp8WkSEhPBJKcUa9uZBsjdGWAqydsBREAJ7vPhdAP3EVn3hfANknH8kECr6dqchRVtCAoAwUu",
  "key26": "2Mbnmjm3Kost8RH3W57EDMXiXjrC1j2z8DNh3wo83kfB72zKCrKwziKhgSubPT5Z9Pxn2WvubJkuTGSb8SyArtoH",
  "key27": "ir89gF5c53cDz1FeXuy4m4ZDGBzzevSsghpnjpyQ4vBV5qhnMi16MBJjb1dz7HzUPiMRZsovFYwaoC4QYiVk6LH",
  "key28": "1QzbKjPr3v8wT7mmc3hGJ5fsig299rtjcXHzmUrywpgyVSCC3MiBtxrt1hQVFFFRJHEeMSMK7ZtWkcanw4jSBax",
  "key29": "54T9qkyZbyRQbzSXPQDKpqbex89cvj996AodUFZpQ74mWUNJYHcWU57Ab1vwgMmgVzDUq7PXRYnnMduYhYm7E9Lf",
  "key30": "HHxESN3QyjWxnosdoocPZ1n9PRH5cYjTERQrvZoXMqbbnHMQxSGtsgAo6dcRB29QMtmSF6BFHiYBaf6NezKh9rJ",
  "key31": "2ijLE9XdNV8TEc7v5t42UiydXNXjFFHC6Rw84zE5hidrTAb9EeDXLE2Tpegiqpxp5wewoTRpB4tKFq9ayh9Vf3bV",
  "key32": "keeDeWUDXqiZE5AnPyaNfD6byghRJLEzadQ78Je2oNbWS4b32V3S3VBPRVb44Ey9BRPYm7HYZX24ugzSUGkKrYx",
  "key33": "5UK46Mw7p34vtTMrrTsy6zPrHNSH3h9Y4GR5vmxvzFCr3ZZtis5kiGrebizasTivU9CFvn4MhF1n362ripxXFKsC",
  "key34": "5CYdX4DAiR5pamn9e1XVw1CaysPs8w16BkKPoFS3fiUFWztCDmBYc962TJawg5JHTdQ2E2U1N18pwPRPhRycKubr",
  "key35": "2ZDii1LX99Jnh3sxr8eNqyrbKrQoQbZequLJj86j1HyWaxbN9Un8nJC1Qb9s3c5NEHM2RCnB9X5JVafxoSdwCijN",
  "key36": "2Kj5ZsYk7zSqnp7sKQ421JkfZrGoyqERZqAcUvDNYns5rTMVScYdetYWYtRn3SapjtjYSJCdjLAKTj9fpWnCdWBm",
  "key37": "HkarAvPVP2vWDUZTp5Vyo1Dgab85QR71yyA7aPTtJuV17VUQecoVGe8grDfxJZF1Srwzs1iLSBacD3heZqbUBds",
  "key38": "3n1zdUUUqQKD6jQcaMwVhE8Fax4MDgVBq166jJTgfrJV1Gzhw6C48hYwmL5DGoX8yzm3vWR9fcukhzF8JkS75yCN",
  "key39": "3ztaks71D8MPa8VYsKBEbNRAujUGKaUKickJWEDGhGfsfynxJojemFu1PsPQMroDiL8gSkg3LA1Gqx6wqURimpwC",
  "key40": "2Kb4xHPzeisCDdjgKFhAn9ZLJAWV2uQsc55Qgb1g1eGgUfKo91AE67PrsVUXmhz4ELGb3AFxskMJxAbwMEm3KaS5",
  "key41": "J673GJrReYhmioA244j8KFCpazNTRZXsQFmK56z2yjiQg1Yc1jVhv1LyvWCBLRQgShPUNWbuvmEin2KpfqSowCe",
  "key42": "xnrejyvZMhSP3hxnaQaKwCKAFibkd27zidVFfULim26YQg6uGiVbybbKceBT2Evu7DhJQUqGRAR7JpdGPEj7wzi",
  "key43": "2ujS9LYTpRmCGWSYWy5p6LgXfD7vSsvv1wbs6CpdU51cy5gX1JdTVUhMrHytyzNu6GNoJiSsvegRvHx7PcegHs52",
  "key44": "PQ9ZcHm27RwY6MLLr86d8bdXtvxN8sN7yxUuAi9ifW6vYGGFv4Bm3TKCBNptLGQN8D7awa8gE3TizGfEfLv375v",
  "key45": "3USyXL6preJMoKHBDHwoDC1UTq3iAqw7vcWcfYewEGgefZ8fsabkFT3pTthHaPf6xmLW34j9rSwxvmAb11TCrGy",
  "key46": "3kvJckfkjWxUYMRdqJJCbcxrmhbiiCLwUTHADJYpLt8Fi8MVZd37ASwBCrWCkbZKfZ15MrS38nWcTgJapnzQJD7D",
  "key47": "iaFjEsrnw4PBGTRy5HePBC9WhLwqTy42o87VsTpyi5zi9YMVbc4nG9xGTSYDdSwoW265cW3aZXFtouJsrTvf9aj",
  "key48": "2wf2eQr4dBn4H5TYwCBMMbkSf7jv2SAxeDgR5ZkQqsfspjn64iDmbipmupMnHowmn3hKhiuzoPXC4kcWDrLPYzai",
  "key49": "5KLfft8nZQvACdcxzKKpFRCdBgaXaigyZDc2zA1jBN9g4KeZwSCWyy97gNhmqXSjwjHvc8dSTiNc3qPZBpwRNfMm"
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
