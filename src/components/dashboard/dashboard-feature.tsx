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
    "2B3HmsuC2KrgqszMpRLthZ2g8EZUj4L65C7yoS3pLVYBMwaMc5JfoiV2j24gvWguoLx9syCE4tiXbxYmQEuLSHeQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25bDbcpMEqGuxNhrHjavn3JmFxY9JJxS1scx2stSJtWsqwtqbiHZbBTgk4c8TPh91XCCxwRNG69PCejXxgtpT8aL",
  "key1": "4NVEf9p3jjpDaW2PXbKu9JgwpkLwbWNtZcZctGwyc2aZcrnAJNntp4cF5zYecH7aLYsiMkFh3nNQcFxAGBsSeN5f",
  "key2": "MADpkTLuEiVSf4Dyd8rMKgcAMDic4nNMfLuopB7Lbe3u9i7zbLEUcoxBVd8dSLWkQ9d82KKVsaatdJr1T1zrcCa",
  "key3": "5K8GyKoYNobWXaeLAQCqCKzS22FBEUTu562dEVZZoRxjWofWEaDt143s6zGveCvT6LUgoxjUFVTzVYd8Tc5LV4Wr",
  "key4": "8qdXySMkbTtENuSjoxFxk4pjcaSW7BQXZ7mk9GQH9nkRFnCXeBPGnijMmj41icYP6Uzp6ghupNo7D2ryep9bnPx",
  "key5": "CSMSnSi6Rat73KeAsfP4AgvDNrTxco4uS74sryGkU3hFW9MTiDyeqDkVZgT7FBme5qo7PjkMfzrenhCUnz45dKF",
  "key6": "5BeZBARXf6YBEiCL6Ey5nwEXFPEaCcgvi3ENkTKVMgssjFHkxzoBSum6QYV3sLUBo24PhGJPJPp5fJ8BStk6Ksan",
  "key7": "2p7nRSaBtURyaSwaffjxB7fbpdNgVcLqKUEHpuFHEkbpNfygY3wtri1SALBbwMU9T4CCh5nbymvGmBiKfeXGk1fP",
  "key8": "3PBEuws1Ng1TDhE8NxZzY7pE8PFRWRudHwyHKAQgJrWjbWHaAtnT1tKy4oQwPUPx3yZFwUM1gebYBaBhZ8JKLSbP",
  "key9": "8yzC55JTu2QVRgchQwgiGczr56Bhg7xZdXvgABjsAvkh31Rp2UUXgaXVmV4HAH2RGbdC3LoieAgrt3RqAN3KEuk",
  "key10": "2KtKcBcKZzyrbcUmo1fppMahwuBZ7CVuqCLwftdKfCkVbq44atBomyFNzjoXbQ7H7vVJ8ozSvNtJAZbg5B6fBXeA",
  "key11": "aG9qVNCD4qdykD9K57QKJXisrJxo5yVrpwVw6L1zUDsSTvNT7sCB2HFp7U3N6d5gDSFdZato4NFGWZsCFmg8U5y",
  "key12": "Dx6GvdhQcSVy8uPm6nqmDA7nSV1r8LxKT73TE4iHSbhrjUtoh37xgorHtfMxHeAnh16iHTbNE9xoNqbfDRmdAkH",
  "key13": "31QM7C2yFxNgsNyGYd9mvgw1GYBDZ7JVxSQ2owLnz7vBRZWvQBD2C84eryf1ZMtvQjEwB1yJqWogd5LC9fWTuo5A",
  "key14": "4TmHfkpG92VXHUnhBVXKedbvTUYYaUynKx83DoVyDkMjTjNEY5YiXq9VSHhKRxuST81pYzXGHArFj8GsSCYjWxVF",
  "key15": "5McRgT1FXmsxAh32x6KyjHYPpYQDcFGmKqnNypNTveTzLWE2m9UcHobu7uJp58GdnDEMz32C6xh8nHwmAvSkrLVN",
  "key16": "2jBcBcUd2A8ZCfcMiDujPg3m4GjiDDeaD7ezmXX2AZisQoQrMpk4k77pX7TzSmvnLRjUruGy9XvwN9WHjub7gEMB",
  "key17": "4rqCrTba5GAhGCSAZQ7f8NxEoVhi12uHf5kyntoNmvTtCg1hZTDEnCHVRdvHSx5UeaeGWtTJUC6p92nkPbmiq39N",
  "key18": "2Y12eyxXrCKhXXWV7wH62o9yQHYj6chF5VnQj8s7ntTRneLPfG6iVrQez9J3rSPXxePYG9LDo35biSfxmMgyDkxW",
  "key19": "3tYmiitaw9h4tsxTzPPuFdvb7gSn8sR1eK2f1ES8thmTdJnQ9RGe7jS2GDfrVqEZEm6hy1J6A6aFfwmXTjPuUkvP",
  "key20": "67QYh944uyMgAkGZHP8PtVhhNxQituFPpfRXxEcsSqr7sg4dbPGURdmHD64nSf4cdgBf3oBTgvGGMkDoQMX74atx",
  "key21": "59rqfi6k8BoDajiksuxJsVqn8Ts5ytVkWiUH2svMT34ycn4xPBVKPFGu8Hj94pwQz3NkbfBAybRi9hHUyBrsx5Ak",
  "key22": "2R5ggMf1spw4NXTkUJGwtFKHGpRQRqeD9JTFJxgGdtTeExreiKXmYqZuABgtisWdzDNwcR3uyzaqQfvuU34b7oMB",
  "key23": "2Sjp1DDXX3zb8EtPX24NRUt2sMhjrcy9QTaNonb6j9rKTfWMCvcfATx8HJ3kSpDN3gZjN8jnMELebP8WGmJwQd8z",
  "key24": "5gvECTYtvR1rAXvf8ftYr8cqEmCy87EsGSa6QvzurqGRL2LKZU7DeMEdGkxErXBCRFLszZvemL7r75HN1x2wB9iA",
  "key25": "2sJSSGJGgAdhjFv66oQbyXW49ANRy3cHxaQuN5YzkGdz843K1tGxZnKFHEs7wtaboxtgn6rhcSy12e91dCR4GmHW",
  "key26": "3Auf11bcktUD4oDBebYok4k4DfxT73Qx67EaJRysxefpdHVuNM4baLQoGiCyw125V8zEbJ4HXVhJ3zkjGqX3eZk8",
  "key27": "2sGQUYahYXpqj2XtCAEdQ56ZZnTcu6CED31ux5roAQq1p4msoquLkY438XQR2NwwWV7LGp2zMAjw8JGZNycQfb9W",
  "key28": "62D8yyzHjJc5GstfGRxNztAdYu4KLSvK1cApJPpeW7DC27baKWr3P1P9o9K2RF1nba5mwbzjtha7gWuPB8YPgyZK",
  "key29": "5hkRJ6CaA5bPEmpTCJoAYmiJN28gCyS68QiwEJP5X3x4PRgU3A5LA6So5kjySUJZXSahaFUSbybba2VDghDHmpBq",
  "key30": "62zgmWiaRyciVp5RtW2oTKpupEBSoU9bW92mAa7o26pYfL3GHQyyXoooCbfyVGEHYPioQwTi3TnbwEjFk7z59UuM",
  "key31": "2ken53oWRcbEvTUTb1CeffnYh6dkr4dTjkFVXznizZCKiov6SZwCmfXSBwMh824tnnLP4ZciypQNV8fQxsBZtt9e",
  "key32": "XnU7pZ8ar6E5QbJGo4v4jVoKL9aRU26yLEXebgLaUQkL2aTZqqGvWUaCbtHmRZ3vQ1AXLjYHLCswTba7UzLqWU8",
  "key33": "3HanWNiZGBLotpdDkpoxKCMYqk9iYnx9mvDyxAgCDfYZqmJDqwk4jFad37vJVwZVaf1jxTUPmc5PkmcVt4h7s2wA",
  "key34": "5H5Poj3noLkYqBuSYtfGLjPgEKdS8DYC7EAKmN7K6YUwGkuxoUA9V4YzURjwjqns5XLXRs7i6dRjXpdP2Rggu1Mj",
  "key35": "3hqjo7QcVmMPTheBq6tu7xffmt6T5rdEnD1Th4b2vbPhs4z93zhw2XzDXZxEYmumsktGrsCQi43zrbN8iLti6cm3",
  "key36": "5Ro6MuG8LjeFTHC5xL3jhRbwRrYvfc3C82WLtHmymvRELdBQWPaSjfSNMPjw5cimxottUsiPVbUjdY1wLD2adYED",
  "key37": "4AyZGLHUj37nP7Pvkz35sGkRdj9wv9ZHy2SeSThD5jhw5mJswoAyRLMF8XgkwekyqXtXUo8rzqdcAkJQe9dZLzSa",
  "key38": "58HfhQMN2JQcJ6woix9DANATLGSRrQupywyj8r4jp7pF87Sh3BmCgiHMhLuyXkPWjQDnDV71hc24iSmNK8Zehfi5",
  "key39": "2c9vcENp1Y3AkitvvvE2MTJ6Vvb2zTgu2fFuR46BygWAaBzRBkUuRM64D5WbKFFWqnNtKjtNj3UDEkdpakupMxv5",
  "key40": "MA77rnZt6B5tv8vZ5sAxm2zNVCiDtZ5N1UfeTyUUeDynFR73tzB9wGA3Yr35V9muobcZFLfBy9WhTDad1UgeafZ",
  "key41": "2G9r1FU4vpLStSUuHB5R6yPw9Y1S1xCeZShzyV9djFJrcue5h6Uo9mFePvgQpjFWm12dRLsqc6cKJJPmZiN7xtUG",
  "key42": "4iC8umctX8LEh3K6kzgCeKr2ABnxXrgRqHaB8Y1JZdG4rWT6SseCtwq2Uxp6WLTxYms3FGCuZDo7iQ7oRPMbJNVC",
  "key43": "2NGXLFvrG3f8wyqtn5A6sF1QK9w5LDc24W52Lty28XPwuzb7c6TdqvqvdBCJn4fNYbKJ7jxNbGZeJJaqeC6hU7EH",
  "key44": "3kGgBNDhyCYXaxSaA2jHHuZPb8KUrseA3gDuLLUUeKyHE4Zk9Vz4XCgdnYaPAeMDYkn8eMcex9w1U3uDLvb184aM",
  "key45": "3nZQommJU9cRNDQMxAvxE5qhMEypisEf5kwuDcjk9koAYZZ92CnUFBs42ccmAxmkHYKeN69WsBgTe9o668cMANrn",
  "key46": "5QPMH5j9eEC9G6JeycEiV2nRoFAQMUxe5kr5w61m43ZzbZ5WJET7ipm352RkF6imv7x4NrFgd7F2vbD8GfuVArT4",
  "key47": "2frYjeH1RFriuHoAuhuexKkuST8Zo4t3Zb3jTLZYM9ShrGSTjVW2a6STpDgF1zz4mRrSypvjNQFBMoyZewbQD2Y6",
  "key48": "3L576qgcaqVu79y3z5s423YB3ousa5WyhMTHEZnnLRJYS2szNxumS7FCxcrHP4qFJtqS9xDqmxBwL7cTZSodDvWM"
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
