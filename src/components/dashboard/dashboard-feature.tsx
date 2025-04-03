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
    "4iD8DogY1cWUZckxvuzZxPgQKoMRGvEyh8vTDw4Hui9w1yasjTE1c75uqwSjefTgwmsti1Rmq8i4jZMwqqtRQ2bj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tCjaqCikLWZrfAHW3mGqpQhpuBz8VjJiXtGFXR6ZJUmFD6vxiAKnbVAd5Yj7Z7qwb3Q4i9e7LYU9CjrzaC1kFMD",
  "key1": "ZN24XG7tAf4HNHW6CoMfiTWtJHJKtc3E6CTnr5S98fF7sgSbZcKGzBJUT79VbyCND1DEcFY6ufxWB9P2NAHk3bR",
  "key2": "5dFvaERHJwn5T2MTnxvRz4TjJ5pc4kN2r1w5SmasXmDHG77WVjbRNotBr1o6nXEE1NEYSzsGiBNq6fJVbxFatesz",
  "key3": "2r9UtU76SkEygrFQo9eNFA7PXCcBzhuTYzKLKJXik5YngpKESPPS8tTumUCtVJZED2kxDZfGAwfBm7926CwSBPSZ",
  "key4": "2pukqg9V3sZLuuQE2uzfTzmFoPVUnpUG9i6vN1o2BbWqUJUtCzFxFUbnehXZW1yML6MCcZuEiVoD7L7gJ6NV3sPo",
  "key5": "47YMAXixXX4DmygGPTKAe8WqD7XizUkqPbPY5PbCvTTM85oRYhdfgNyTY2oiGuFBiHqbZmp2KQYq8CFpuJ9H5Ax1",
  "key6": "4NMrq5psWeRoBQDs2Z1CZvHPXbhrwuTdbka7SYsCQguj9ZZLi2RDdrQdDEudK3pfca7qirhgRMdUCRxMpCCede1K",
  "key7": "2s3UsfLy3ZxzjhX14x9mzBAM7fvme7b9DQ3bT2AfnoGroPxhkAo1SzAZtSyHSdPHRfwJex9RreCmDyinu1XPmPvz",
  "key8": "3dBpGEmVswGx8dyKTSJkqgoQNp58vVksvM2f2PC7pnC24WBGcVzqCo2DfEzQ7MR1WmeQKf8Aeat1y4K1mPdJfpon",
  "key9": "674EiV4q366fG4XFUC4y84527iTgkaEbdkgMvdrdx2UutsHeL5vUgx3j6YiUmfMMMh8DYcXpx42CunXzphcT4SXz",
  "key10": "2groDHVEcejgwn9U8HDdm3UzSvomJxNQjPGMiNMwfPLusub7GddY3Hm9ZhzjCEQZXw7t1mVfKojYi491dLVwXgrR",
  "key11": "4JEaoM2n2cTGpr47yir1zETdbxsbPmhB6bLavm5NTEeckZsNQ96p3DYcgMpfD8pDNQsfA2nxMPm5a5aobuhj5Hij",
  "key12": "5sAHikn2jGdGDjh4cJqJURteTTrKu6sJ4z3bZEnL3ZgSKgsLveHvgataQAZvpiJtnmqiyAe8cL9sNDvUuQZhkSQ",
  "key13": "2vbbNAbc998u2M1pLnee5iUjhSJmKmquv6Ymw7JZXh2uwVBQNvHWNmQsuRMsH1WcNHeAJzdvQbV2zPUC9oTrQ3Ke",
  "key14": "4dFRZ5qhKgWi8dp6P5qFfwCCnH7bFFyvRiVqTaWNwtKsfdKR7sK3PrzLyvT9jDkMC1amupDya1spCrsjf2Ea9qDD",
  "key15": "5Dr2S2w9Qodi3uUeD9mbuYv8YkvYaLwALFTpvVwqWMb38z77B3ZruWsx32HyafPWzQpJ3x74ZTTS9sZ4Aq578TAT",
  "key16": "WYJ6k3dx5J4H6oSUHZXchzxphUzeWJpCN9KxDP8giZqjq8SWEubDH9FMvihv5nqTYWGFGzsdahumT4VsiFsgyUY",
  "key17": "41dVdKuMmGmCDg1wKmBq3Ho1JbwKyN3yKciE1GSeZRgVcmXTUQCSsDTHPX5hqqY6bJVUskj5sciy1VfoQ3Y8ZcFo",
  "key18": "5QudkSh1HP7Xp6GrHNU3YkWapokxBvSpUvXzaXmzyxez23dC9wSevqbnNurPZ3AjBfMEG3S4gbgJSDbAptYVXE5x",
  "key19": "3Emw2B586Q5P57JSoLYXL9mD16Hmp4qkGygD5qYKwwuPMioKQLnxJNQMtk1hsrnLPLhNoW32s6t56Lq7AVF5MDUe",
  "key20": "yu3x6VRC1MGxksV3F7ku13GUDJAX92tDmCvpNxJN8qBTEWVKDWgxA4xvJvLDuhvuQevqLcdMY3G5N1DdbY4Fv3C",
  "key21": "4jqtT8stWsJthmB2srqvcaGXwMvk7JeLhsPS17GSt66aneZP4VZhpc7jNiBYET7eJmwu6veEwZjhQnP2oDs2Q6gr",
  "key22": "9rjf4zAdzJhTZQX5pGKC79jffCCqB7N7rvWUBGsNhEo9Fb2qVurjEfLEia7tZcRsSgRqkkKjXDZSkaEZUv5jv6p",
  "key23": "3eS439GLrWPZPYEaRdeXy4JE8LwoaR1oXiD3dsprLUwPcwpWumSk8xYLpoYUUbWsyde1eff8UnDPR3GyMrCmcqKS",
  "key24": "4oGNBxqSCfxmU6sbm3qS9PYjdzEy9cf88PCNahV769KF79YvKsZGvqkG8qxam1FfGmU8j4PoW8ngZxvLWJwiEmqv",
  "key25": "5tL8btWfR6uoYDLnQDh8N51Vm37Z1a6kqkSt5MmKkMP4HPMMxJw6TavDq1mM5aZTFnzV7ziSsKGSJ87fbwjEgy5u",
  "key26": "2WEo9prjiWPcwseBDEqyfPcQJRTmAiMriVPuNm9tuuEQPNBXRCj3sj91U2upjxffArtosxkpuLte1dSFM33D6gHp",
  "key27": "UGLkUXyjsT7iGADqMCCt7QEcNo9otG1oSCMPc736BtWt6UoDcMpnQQUNxgD3S6tRoLZ6TZzkc6wydW7WhP3KfY3",
  "key28": "aAUv8Lip3vDGhtkvRxHfPKEHss5QQcyojWmn8BjpJVieYbMHpmTdEDKpCXBPbHwDBqYdx9CpXx72vJfUQuxFNPt",
  "key29": "HF7TSrPaJQSS3cMwFFX2GsqD1WATkVseFDJxB67bCLSfjosj6EQVVSu7BWrPiThdkYQjhiZTjVX2kKmttU2tSp7",
  "key30": "5FcCNNBaGa23WYrM13r1UJc7YB9jjw5EdpkgN4if9q3ETwvMRVe5yKaoZdyaAn7EkJdEU4qnXyhJuhMgDy9psM5U",
  "key31": "4FbxF21bAVXm7vExg5mmnZ2UMnSaNfaMkSXfuAQA1M3watBnVsLy4iuwc8zGLAaDYAR4zMV5f95SKN1r56L9oaBo",
  "key32": "3sydvVcy9hwNws4bU5gGEHExnzPGJpGz6AnqpuFyYWLWFH8L57Jwk5UqCxVkyXmKunPEpmAsmeLWPkWzA1zNm56D",
  "key33": "4h6weGMwxGQwer82NPupPZUWw6yZmWRoksWxXQT6VC37ATJGiTjg287J45k4KNc7nAWtg1VyXCb5sppF3ttQqxnt",
  "key34": "2EdFGx2s7UPkwy4fzhUghD1wNRs8De8qQHcVQYs8dtXinpDCHjrT1wyUtTzutCQyTU4Jmi1iynGAm2qbVfooT9jY",
  "key35": "iqUrZhavrP1Arznb7gDtif3kRVkPsuSDwKYR7rNtdcD9VR4ZXZcGF2NePdB9eKcgVXBJKUU3oBL3CneuVyFVbCT",
  "key36": "4w9H7KHX1wmnku18RJDMcQvXKjQZpt58nGzutdsiSryUkk4ZFJX6mopdYafbvfgEQi9wWNEdS34iSGUXLutPZDFm",
  "key37": "3934UFVNwKn9KYFtYyuev4mXeqe5E8f6znWnnLLaHHRR3Y724iHq5ZwLtfgMewTXobqt8wjA8sJBkzP88bAbd41q",
  "key38": "32KtZFuFMg4Y3emfnwp8UDp2P4SZcR4mRYxhG3yidxNt8sBh2gZq8VGb1PfUigY8f1ttvQau855q83tV3xWqJTB6",
  "key39": "YF4r536iEqTziFXWh9jfTNhy7QSFphH3S9jx8Fv7j57mk3e2XDSCGfgba8bsZrCA3UkibZXter4dazEm9RcLNpZ",
  "key40": "3eMydE6xiB8p1F4WbWAuazfdeT57jtXHWsLDy71bpc41vAGGVXgErrswYiPUkEPZTHbk77LKKf81RSjAQHdNZqBt",
  "key41": "pTQmXbgTAVYH9jMjeRSZUx3JsqRvMwTLnPuumbN2iFfgaFz4yG97b4FKNp3PobtNz5d4CeztTKrY7rbDqAEmMbV",
  "key42": "2Nw6bWuH5emkg2s2gVd2bhEJPGpwM4uPCa8E2RoeVVkMWMsJhy2g1h1R1UxEqJcpCoJ5GhFbwpFpCZRBDEA95iF8",
  "key43": "31RdFU5mkSAHEfx8o2Hc5Z2fhdjR3r1yKBgwgDrZoeZKAyBUqGUppcSdgMpX9y6r1pZmg1K6zE4f68wRVoi62Qwq",
  "key44": "3H9UUcQwLTZ23gcktMemuExk5Bk3kDCTn9F391HUXc7g8eHwM18jVKj18AKSzDeRBFCR7KzoPSNoJUHj6wAkt6vs",
  "key45": "3XxJDrNGniSR8BdStPrqTJGnbsbweMHx2vZhiyYdXYnzXzNgukKmRpZSF8rE4capqWvpQPpi5er4EmimjmEGDHbY",
  "key46": "4uibYKv3Sy17GWizaQuYbkawF5TeXTBGizkPxCtQMPcKtQu8JSXs2PXgr6nqL797fXynaV6ksS69nw1mh5kugn6u",
  "key47": "3o8jzM4RohXTzQVJ3BnU4kwBgWA8snZpKYkVykf9yKaoWFEsqqvSzHnzyiWetxSnTudHvZPYiEJPqeU4km8Dk5Gh",
  "key48": "2sNfvNtPXSsKDpSvxAWv9ty34r66AGVXdReYoE4eHyWSxyNtaca7w1AJRsXihfrTsPMRSeTkLGhZjb41GPczMvzG"
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
