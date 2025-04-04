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
    "4Uv577RxAnmEKZihRTrN8RaDnqLssXasoWcZTS97MmkRsALvgLEe71ndCFd4RV1DcBCAhBfoeafGDJDspk4kfKTT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "251inmESau242Nj6fsczmWLWoJCJvSkuWYszXUBbaW2Jt8UT5rP3QgPHesP83bq4FeZELpMu5VTJyptEGX9FNqtx",
  "key1": "4in3pUvvgDhuqWxJJKxjnMx8an19Nwh4YCoviq5hB28oxo4TuCKhFMuH1HBHrYW5ZpsoCPRxAkUpFQN39VUJBgej",
  "key2": "52ufz8JWdwFg22SXUSABaDoS2A6Ei7EMqyXLXcnowAiCF5i3CuwTdXw2fTFGYFsuaREjjgzq7pzmpXUMHGLppuX2",
  "key3": "5719mTmVQ3mw5fooEo667DNbTbmabbXzxYJJzM5UGeQxEPs5tGoNnrsBrxzsTtnK9sA2ZdZyTCnikiooqV4DnmDf",
  "key4": "pRTvrVzwRwTAFfojJ9hWxiuATAyCXUDozWRyr6aWRybmvSsBkT7eAUzro1HbQMQkQBFsVP2BQLAnHoE6B8fcbM3",
  "key5": "5oik58tnTEakZVyFyF8BDoaM5UzhG8EvsEX7buVm6pRuYFgaXBSh51i7U7yMRswGyFxN6pDvWBWihQiHj6otpWzY",
  "key6": "YshVZBxeEMTnhHUP7gK176UgTcFB2fr9sAdXHJwK1FW3K8ACehsrZ1DVEgK265sQ6vu7Xaft6mKELMj55oFCs3s",
  "key7": "5JNbAZKCSkoMncDYYMruptvgCkRTfoFte5QQxncrUH1eBGtLn3wRXewsaVoDJ7yWwtg9S1kf8AJNAjs37iD46Ajw",
  "key8": "27TXQfFzVepfwxpEEDqELav6i8SKBXNdzMHZCMDPtYCCtt7cu7xkivwuxdTaSVEABKZYL4iSnoK1vLnXKrYj2emN",
  "key9": "UdHrBzqWqLye63gPDTFFuRXP2WFwHk3wvYqUJW9buxyhx5Di85uM7nARiZtVoUcS31G5ZsmwUph9CSqNTixvLq9",
  "key10": "3SGde528JwiisX6wuQhS6ARVYmKAXh7eAXDSy4itYYYF5VHsSJh3ZnYJprBsykBiDKgPzbgL4T3yDgX6fCSaE2zC",
  "key11": "4PMW1tJUeGJ4ZdmxGWC47G9VCnsdZYJcMtbRABBNZnFts79u5QaDJaoaGtUf2G1J74xKv1hqt3X1FJ95KHHUx67Z",
  "key12": "4NvzDzAqYd4N4pQ6Sp8Cpaw2ZaaXYn8BSeFpHJu6pTLXs4Xx7H5VpnNatKe9BoJXYxPpmopATn3oq34gCcjMG69L",
  "key13": "duFL6yt77WMkGwdrhFDnFzNFiPuZKtT9Qaq1BjkGEqXKXNC6U7jgfkYpif74KbuTf9biSZ3KA7pktP2Yyz8afUR",
  "key14": "5YbaXK67uiyj6LNAJgh6k9LT4kB827o5e41iatrcwHWsPyFJEiejR7xjZbrAREMDzqs8zmQugxzwFPjBdJXaaKK1",
  "key15": "62mudHdxhf62JLzNoMz8D12Gxfp17RgV89bXH4jZVcSKw73pqwk5SiCKgXfnQwyxEyCBeuJWXakQqK91NcjZLRec",
  "key16": "5Cdk2wMwBYrUvT9SGwh54zk88s9wrUQMfYLKdTB8UD1LTguESiTYwZ5BL3jxVW7SWYih7X4dKDPXJ53cdHGreoro",
  "key17": "2wSzwrJGrDetxQ5fpt1aNpGK3YMiWX7wcUtZQgzU3jXyr1Nyz7moNh6afAAQe3fQtWtvYtGKU3GHTb3FEuTiNfii",
  "key18": "5ngv1gcXr8cFeRmnRt99bjidL4MmKW626m7Hx83CyFp4ehTpRkrsrNTcQVH3Kb6VHmrGFXnuez3XdKeGBRPQoq2G",
  "key19": "58PS8Ue1Rp7o6vXthFeEp5p16762fpsTktUGtsXPAkR3r1VE9tjwiqebzCDedMkK8W7ELrJT3bimPgnGn52YHZEz",
  "key20": "41BmU46BiEjMze3UcBxNRBmj9cn46UpciGGbr6s17Us4tTwotyUjGv3HVX2zrSXYeUV5xrsUz6KcBkn5SPLFEyVw",
  "key21": "AHnhhMWYvfXsfZGs2bQfenJ3jpADsaBVsFXfFNfJSNjU9uujkJdjBef6pcDwy1jhsDzQjJJtdT5pirDZhGow9yz",
  "key22": "5z9w1z5grUZW2tYb1vMzo32Q2kPtwCSbLq5H5CFeUPqKBCxPjoRisutUMbuEF68LFdPCrfW1crSTuUh6YQJZW5Hi",
  "key23": "63kid5qky5WQyTwUK6BB8AWYYA31fo4r2ntc4CZvTzktrgaVkX92SrZrui3a9GuEuYcmgdtn1bRabmWfEkDbbDhV",
  "key24": "2reg2GkgKMYDaJPc2e3ZxakowsNF3M6jV6i6jn8CdNzB3sdQTosHQj7ukZJG1hMXPeZKbMDp2SZA8UvniPdKV9Tu",
  "key25": "3MfDw1LwFoEXoCX1eFs4Caz981y3ZKzooLEAR2kHybWx8jKMVyX3hC7RwRNfDzQtsbeyKBkap7xJcrcLhuQa54Cf",
  "key26": "5PDS8LBsCPSEFzpFZY3tJmgezBwiE6PaJ9bWz3vWoZU2mEb5QYAbbUwHEySaXLMBjaaVJwD2ov2LPNU93xtgpShi",
  "key27": "2oCK2Ytbh3tDvoH6JcB3pAmMH1iJH11QnMofBZXwdoAMxZENu5iQpGdcudDCAzcaSKRzwT3MG6ikmwd5WPp7RvVT",
  "key28": "2ujLeCj8SU2QrsDp9Aa3bnrV4ZjAABvmFtDAvQ3ZVmrD6WzT7MK2NrgtNAGuEtPdCMoU3n7KnjZQ9ordSTM4zeY5",
  "key29": "2gvcnPCd7fcXMRSnH1YKtSUkYv1xFfTQ1UAEFqcyDZs1YfdpiC79TH5D5Jy6LXjAFrEbzrvR7qBGMbwmVYVTgrZ3",
  "key30": "4kvZdxTNpU5p9bFHaWKRnxzC7UF4hjfxp6LaxGs1eRZRzhWnSjhpZJQqReF1G8kQNb5TS2L2Wfs88T5ZTLSjiT1V",
  "key31": "27a5RyyoxNoeBPuSto5pQqJxvR6xY22iXNRrT26wis3FXpnUkpDetkzsLzJzobtJciRUeVj61FgSkxF72qaA5iL2",
  "key32": "2ZmbhskWxskvzKHiK4y5pohQF1MDgKX1gvDdVdAaGcDgzgYUUErEPUVx1YQKpJ5fQFSNoAn9pEE2oN1xzYyQ2pLt",
  "key33": "3AcykCFA829SGuEmnVRZiAT8doBY4gBhB8tsECnWyypQJzCmwZmZLLkxtCcUAci1RK9dA582yBNa6hg586C5KjZ4",
  "key34": "tL5Qnvd54bqMvTjJuETQAhDAAjiWNDbKFd1karPetU3XQGT2vdQjhB7kowJBobEPSRaNZs69pRRnQo2EFfLdC7M",
  "key35": "nByWB9qFcvgxwb5WALvkhvStDThRmxUfoRTNDn2BexTcDXA9Ub818MFadtc2vws4fyFzBGDFkEdqxsE35axffhp",
  "key36": "31WRYhnwDhvjroAHdueZjEjLnRCUk4bZcz49vDSiMPdtqbZ7isq2jh3Eehpc6XQmu4Q268aMDp4SKB1WsMAQxKy9",
  "key37": "ToEmSUhZfVeoXLSuuLCtGjsNoXsfp1YXkCzQLMuWVTAdxsHJck6R2eL7NzJy3XvMfDLfj17div8gDw3nXUuBn2L",
  "key38": "2EyVUc1NEq9BeV7bcqMgnuKRDcBFBYHXDXMzBT8ehcsm1tzDyFKC8SM7BjuwAwxR7HLPVwg4DnRt2eZTX9PFUFSH",
  "key39": "5A76ZGGLDkw51CLFAuMCkM42JFSCAeh48PvziRUdzSn6Bm1sno3YGKRBbeEXkkMD5veitgnh5fxTHJK9zT1Hrhjh",
  "key40": "aNsNaghCY2aA4YdCY5ysWSBdGsV8Rv75LFURD8GWrTHCiEUeY6HcocmYgAPmyjXFGXVQiQUH8iXh29jFybvj6Ui",
  "key41": "32QM1hzczHnVLdECoGc1dCuGEzvrfBKkAJrySPDmmgZxkeiVFL2qDskqhw4LpeSuTwhrdHXE77dv6zQ2fdpxtb3v"
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
