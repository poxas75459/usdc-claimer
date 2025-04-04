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
    "4atqntf97C2TudovVhg44rQwwvZ4mQz9zJCvcggGEEddPmRaeLuHpCqnTLXWfudQvhevTgnwCtE2Eb54SLVw1Fc5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DtwLiWw9XrMwg7Tg5Vxi4XJ75JuYz6wbRHqEKPLyqnH9vSBCVNoCePhhprifjUkHfuruBMzdLdmuMVhac1kaFJ1",
  "key1": "4cCQjeyrK8YHGh91ZmprXygVwhM8enHoZQn35icKc63PpS4LzpW4RZAkJpricCLNoSZBXQt3gycE3VjaZpK6qrJe",
  "key2": "4p9Mwn3cbFmVTjN1Asgp4tsxThdoLMeaRSshdtek8k4Q1aCHmkpDE69UYAysMrGhqGCCX3bpsmXHMDD2PEkEchqy",
  "key3": "48rmNMHyu5vzV9HPB9qJV8wexd3YHHwKuCvZfaGi4yTAqXjJGJivhaZtvtB9fuW9RE297J4ZuCuor1xGyFV2JWo2",
  "key4": "TzhWQ1Q9akhEeoKAnp2nBhhdnBGbaPNRCTcBJnrfAmkDc1AcExSqKkqTYYBYU2iQTRfUW18c71rjLBd8tkK7YX6",
  "key5": "5E5yMZmhwnAyPVQ1f3e1qgw7eGKpa78sbvu1zNV2sRCMhFPpPMMnjTqzugxnyZEesreqtZiGHJL4ssVewKVKG82k",
  "key6": "43ePsWDzL1LgyPj9iWUikJ9nRqNDifbrJ8y8RNcfTMYu2y6MnS8DwVXhZ9N6nGfxGUtKoidr6d8N66MgUSDnZrCH",
  "key7": "2xNCETtKEK3VjcAckUEzzAzVWWDSiEH2d7gsQaanVdBKY19BgATdvgvVccmHXw4cpLrp7XYCymLrSGcdDTMT2BvG",
  "key8": "5bBiU3YCd9aRLL6RLW89NbNhXQjBQxkA3JHTodDEYHTGbZ1ur2Z2yQXPKgxx8zZLBNQNWsjQfcmxDgM4wLy3QYJW",
  "key9": "3XZftayzYixWivUib8YT5vXakuSZqMp6ELT5UHrDnKM3HF3Sj88JK1VbkNjZXoUpFnWnVBcosu1e3dHnsMny5zYi",
  "key10": "3PjbBaRpMexPWjL925aTEbTtrcqFwpxKWGGmrdC3w3V1BioiJYz8GRmxHfaRaghQYrYLWmX8z3HfDWSPnJ2UVEBb",
  "key11": "3xtySc1FMj5GHRn9hpoqYydPupM4vhS6LMgwPuZUQxC2KhhZJaiaNZJ5NEhbzmZS8sRXhsX5ubjkopAPieu1SQNK",
  "key12": "3NieKpFMwoZTMhw3FtKNog8MTah1i4T4dTRge9pq1N7ieg2FTTFUidSogkehhM8tvgNzJ6QrvgqLB8we8s7uNv7v",
  "key13": "9B55nwoMGNEpZD2wXZXwRkXuFTuJs8L8ETrmvhnzaoS1Vrkm6YsRi6nPzXvMUV4gaoC5dZdZJ3GMHrSLdAMrYfK",
  "key14": "4EPxLzbpnN5931GgncQP6f8y9ikhT4k5ufB11nYzW8fNTWwNrZBJtWA3mSR8kjb5bb6kisdk1YCGw3Lq9P1K5cUF",
  "key15": "2ttLnm7oo7yUTqA8pHYQnzhcJ1Y6rEEzrFLDi5ecC3t5Dr2u96xDX8c6nPpgwS4Z5MX4nHxNkaPXzHWb7CsZgY3x",
  "key16": "4Nk3x5V9gaZ7GY1CfZp9S1MmpDcpWSgTEP2jRo2tETErxu1prWcHW4GDqzsXvfa33AH2UBH83Q65aSCUbqtcp6px",
  "key17": "4i2SV3LnTx5XtZX8KEWrXDcTKUFtUZozhm5DEwVADXYvMSXXaqYDsHRm4LPAtD7Zsq7yQVFzqZ7CXF5Zw3tEbRoc",
  "key18": "3jpa78P5kXgZXvW6R6vahGafnP1TepEFvnEDMzVrNJePCmQt9gQEyWAMnDgXGuYpb4PEw14M7xTVxm5RmqbEFr4u",
  "key19": "52KZ2H4yrZNmAhfN67B7B4HRJxvefwrden25FtQKfdSynetGQ5k2w88QkSy74Z816e69dNQANHbc2sdXLHeJQbKS",
  "key20": "iB7mWTGZ2WFufY8ABdUF88qf2SKGXmj8UGnZnqei43YJ4VAbMrbFuH6Emurv5v3rxr1MwhK1e6Y7VEhMcvCBgpr",
  "key21": "125HRfib62HA9UBaD8qvDqPK2CqowGHcNVikkeZvR9mhwHL9LwUgBoB3SkrfKbZFYbVcZdLBVyryGPqUinfQzDra",
  "key22": "2gURxrDYhBLMsmHYL5716wNb2YdanXhfQ1RdKiprFbQ2i62MGqGRyPnTGaaeTSa7v7UBBJeBghbaU2Q6ZmKfo3N9",
  "key23": "36szWUi6dT3rarysWo2ahrURdXWShnhLneqF9c6iumwvs7PAJKTxie1BVp1zFxFJX1QPrDZCQhUxNb1Z7cthAABg",
  "key24": "59hLm66s356jDvB9TUpJmBMc3R9Mx57Uv1vuksAGyCZo99BogbJst5sCvEKTzSeoispMzgBwfWwExZ6hRGTBedJR",
  "key25": "2YAY21qDRmBasL98ZrPGkVDqdh1apdk4eHrgk8tsWuzxN7No1xtL9BbfFTFVF44MarYkU2eiFnVW9ULK8dm8kZhy",
  "key26": "2qwKAnj5YUKMtJ1bZEEqJ4bLhD5FYmFznJhGpbemVvPAzV1wuxP69KyUBeiEsuCh599xr3baWsjj33ytfMRzKEag",
  "key27": "5VKnX12kJBwY2KNQi7TiWHNvw8NvDtbvza1sUXzvAVf2D7CvDKsv49faVxG7Y33DCYXrYVU6GtaTemDREsvxCjHo",
  "key28": "5eUT5nfJPmFFqQoSmyyf6v2RR4KuUPbro5c8ZN69X3uCjvz2b1mhiDPPscjkurVK7SdM4P4BBpsS9VNyEb9U8nqH",
  "key29": "5uYR3d9dqULFDnaWMidFnjr35AYpx2oXGFwkomMHkcJoAoUgufBTjpbCo94a5zj78uZfftMyso4PmEaK599kqMxY",
  "key30": "59dLzrfKqdL361VxEDTMMCfEg3XtwXCexArFyTWf6E4856crHV25XVoGb5wkRWjLfTgiyCtjoXRABeBJ837E44ja",
  "key31": "2uQVGbtGbtfzJgUezHFxTJo8UD545sixGDBY44cKRSGWyCFxhoLZs6RvM8qN2YDf4hpxzvpy5wBWbjyJjZdk2tvu",
  "key32": "jWpDJvbB9izzpKxwdQG4n2fEJUJuhrtq8U4VXgErcbkjskdiZcS8KGhJVig7jtLhkVYzNxsH8Zj5raBLETwdt5d",
  "key33": "5E6mSm7WzMkhXpG8HibmzptQZfCHBwkJgHgaz6AFBeZJuuno8vHjTahXM3mFa4Ej3T6BBcbAcRf2iKjVf7b21QXs",
  "key34": "34tq2KEGHgcZ977ykXRQEfzLD8LtwBabfQ1VUER51bb7hYAF4eaGEHu6LQEFFFcNDPmsBxBzaJ3Y6vqQgrRFES6D",
  "key35": "2oZtQucwLRhQkvBjHGPSuMjEgE5PPXJjLsTn5tKbCy8oXFxegXrnTLkg2oCnM3Z9CEGp2mHASkFQmQ837DnJydqb",
  "key36": "eMYAimCw93sR5RwtRQG4DWqTSaXwY7YisjWsoBSStFeKZ2tgqzvtcJvzp6ZNJ5iNsCPESbfSHtQ93ZfQ1PxpBAB",
  "key37": "5eUizXZzb6y41QGUjrAxEHWGtM5RkoHeudmu38VERko9zoUQMwKV8YEZ8kCXsRJoDj9cr7yYG1439eowhh2yBnKJ",
  "key38": "5WkpoVbQ4sWYmojFH1DUS48npcBKguXidJr4tmjciJ4XmRpdLPMWaXgzTydFurZEfE5Yi6kwhrq9yQG93BoSF1Rm",
  "key39": "5xCYmbKbiAT4s3NDBoQVPSSXYM2aEPFKFn687irkpiopbxTX2vX1MtKuxjBqb1RGdgX7CQVuYqcq3uDXaAJfitYs",
  "key40": "5ZWUs2e5M1SfrsdxkQ22ZhGi61dmJSeY8Zjmcr6Edxh5o9QQszBv6tVT9UVipfmfJtEH1eWaT75ytG8ySKRqyaTs",
  "key41": "931gTtgktTyg32n1Tx3mkpermUnfihN3nhLpjacFboH8MZ88RrsApensTVeN1aBqvgtQGSF4zytA8T1vtoXPLfn",
  "key42": "4JHqjWpLTL1w6MqYjHP47DVFZsvnPksFCXkNoj3HX9fhunEq99t6VGUSBPita67UoD1wntUAdxfSPSajnmP4Nc2s",
  "key43": "4EP2S4mvJY43gpJSqZxSa7TMQhDfJQGHKM2P841uWYCcLQFArzyx6qakot6FGhSckqeXMSMxxckCLLkQUBJU5pmj",
  "key44": "4dkKXh3BVALDQJk7cwWqMYpGaJgtSXYcP94npLPyLv6SKUcXmuafJL4usjwo9UtoxoX4ZLMziTW4kmFrzzK8JyGN",
  "key45": "54Fs5qgdsN8pg2KwAkg7xGMqzMg9rVHDXeCA4w64TJpWEVyvSBSUdqZz9QqQrTGE9oF82niHERwTwB3k5wfMPmoJ",
  "key46": "5DTGhh2kqzVcwD5wSXjA35DTx8MhtcTd9V3j7or4TNunicnAj5JADwg2BMkV9HLv1KfeRtp6LkftDt4HKSzWkHgv",
  "key47": "5U4FHMtsZK9aMuqFsDvrmQiSu2Fa5MgBiELEMrCNGkGcEDv1GEg1xjHXJWj4TekMCutkXwTYsDau6mfSqZTxxBr"
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
