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
    "RMcobpAsmC3kFf4nesrufQFqAsw3DiUr9MdyesEa1ocAFSx2VhXGYBH7mrDiPnEa9zjDe7ySthqrAMby9ZRYkJb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eHCWC3mJPwmLoBXeJtv4umVyTyA5YnFK8Eaw6kuYkvviKDzLssxAj7Ks9ahHUdG5wuV6aCuv92agcvAu5gZPz5C",
  "key1": "4eBfyz9wfrnCwzr8uMESBdxFFRoYi12EbxnaU26enbkvpetmqbWJUeZpcjpp1aC3kDxz7DoSHcS6ZvHoeiVGbM1o",
  "key2": "2jEyrWbG1wLAeMwdrvZghhqASQN5DB2Xcojw51aKq8bNnquERs5hVQmbCvQS4WJd4EFkwYVnB5eexNw3TK68Q4BN",
  "key3": "5AMm9PnAP32VRWWDuUbwJ3XF8qeMmvjDLuZXTAtvCJRtgj1d791LadeR7dRBwcVnJTzCiU7DS7GKkACpdKkQDYhc",
  "key4": "3Q14nAfKKCggzTfZ1pVkgRiwLPUdAmzTugpPmWtvLHJS5v5dytrsHBKovRXsrHXMjPLLrVBs6DkLftX5paAsrq9M",
  "key5": "5CqCyEtqY5DrYFAua4aJabZ79xJNSaheV194HeRJYgBgLqau1U17dfLn4dbW6aLA6fY1V3kuyHveg43GyvDsVFd2",
  "key6": "55dtD3yra5vuBrA9pKxrQCqDokFpf2PoSKYVe8xNGhQ3a1oWbXUbZh2ua2idh27Brzxz4RiYVwcJ7EHAeY1aJ6Ht",
  "key7": "3MZvA9K4m9SFNuuWxFmyy9HuXxYKv6WM3rZ4ciSesSVYPqfyrW5BXQAmM8S9uLEQrsfU9SRiJAueqsavPcnW7FGt",
  "key8": "B4biVMCR18ZjG6nCUCDRsF2WKpk2h1wi3v7ZQhFKTnkfsWMRh4khWnfksfeL79MEqpwAvSUDPgy7q658wixPg2M",
  "key9": "5ao9JhKC2Vkx4PwPzgNx61qyNpdBC5n4wjHMmyimM2HDXtLVpnUCT5oWshX32fg4HBnvhwotaZpozPRjetfQx9jg",
  "key10": "4a1dCVzXUKtPSF1rLaW49s8oepH1LZkmjzBrSAqt4hC7cVru86eHYDBA5pZhnV5JiPFkYvYD5njpwMLbR3rmcz4s",
  "key11": "5zQQ3Jr91uf8m61Wp8ucy1mz5U5iY1ziz2mAk6cLjA21Q2CJJiYVULcPbFajSB47QqPPh8jVTUvHdR4pQKNq3tHC",
  "key12": "5rw839cWqrvzhmrNLDfQ5Qu3JsbPhv2Do2cMn3F9sULn8q9AzzUSKDbPWgQS2NdM6NjHXjREhL4YcueWv7bkMfWv",
  "key13": "792YF9DcCLqAFa5LVXRcrZhUt4doxmccBLYkqakMr1rgc5uD3f8ha1WZU9Y2yawUwWwbM1MKZGvfyeD8oBkfrbX",
  "key14": "2kx7BaT86X5P5y9zX6WgiV7m8o3TkDioiz6k9F6gSXXr2bNyNbWCEZQ2QpoVoYrNQumejbNRBsNcoFBkaW7s6kMu",
  "key15": "2RPX8Kumws2jBrpCMxW3yh2SEQDhPSVzKSKq3siGDWHzj4Q8ZYPWddiZpoA9KnVa2fiej99NUkbnCQT1npWFebj1",
  "key16": "r6nHo8YGGaf8BzuhEzCfaBa9B22fBrQLEVhuuMdZuxWcBSP2wVn5RJ2vzCM6cJ2hPdjhbYQd4Scrwyep2m5n44b",
  "key17": "4Qfx6kXvjphLpyG67PWMAGTfYcNf1h3B7KRFbPBLSWyL7zYqWYdSsxJgpYnJtt9Fu3rh4RGFvxSsGewKAHzBjbPh",
  "key18": "2PrRUi59uf9GgUreWKo3wLiVFSTBuYZdYb6FpRh4TTSLAdXPMTRSYSYVTqMmLYvq3hp977jVhWqzK8zqmzAirF2i",
  "key19": "vvXomNXDX9qKXHwWYRRhjwdv6fNKGYpjPA9jS8P8E93sduQoo1dzdgwGAa5GzJqEvECbA32Avn2PhiaSivSVygP",
  "key20": "5VRejfzMC5yPuXWeVDKuqihmTntuTZrBhcibwaXZLM9uugm6q6PJQ55xQtQiiVBvQGfgvPG1L5qYgepB66kUTdkk",
  "key21": "3ZF42kK6kTShqadkgVGXgfW9qQPwEWcDGdcuUaHiyG7jFABUvS1d4foRVCUQpKBzXFAtAWdjdH89Rd1SYjjs6uQ9",
  "key22": "5wa5U2XsWTapB9UGpVoYBCdbLFN98RFzLwH79PX4SdEt1sgYBwzrNvDFPFe39GhKSaguKCbf9cGzJeeFTgpD27Wd",
  "key23": "2xm98eyCku3yWhEjnM2WKT6kbPUFGXAW1Pb2Ukqh8SQjyxrcs8sVTM9pm5FzVU5AiL3L3evm5onHaX2crXMY96X1",
  "key24": "uPBxZHKQV17K7J5NDoHVUYtQhkoxZHnVW2e81dYGhESnGXT7pr8ki2uDbFBsgvnroanoZzTrH9v5MCZLXWCjiz8",
  "key25": "566QwQtiL1dt3q6BLjuxNDX3BfVKmV9crftoFJ9r4kczSo5j21g6t8JtzijV8wpMAMMDCxgabZ9UQxreBi56qbhy",
  "key26": "32FPiXzK8wpp9nnoNwMDELjciqqMxLSK4AtPTSgNVQMr3URhgFeRWd8BJ3HQZKZBMcDB1hPVsDQnqq819VdGLfrB",
  "key27": "4iVJkP7FeN1ps6GEPYYdccWsrh3aLeWkFUkz5DjyQ7TqAnSAPZbcw57Dxu2xxsi61avpexiSz4F5dvZWtQzpJy86",
  "key28": "2fKrbWAJCv3tqD1VqmuEzwWaAos1u9Y5LhiXDrfQMDmqwQhahajkH1EvZaf92QpadxZHgn882DzRZqbEEeGAdqMW",
  "key29": "4LWS4bH5VT2t4sox2HW3XMz3y8ffsMnFyXMAfdJiKhDYBhmQ2PwaYS34SaQ1PraeuzecMwGM7PTHSUL9AB6bdjVb",
  "key30": "4UESG7EZWGHfFYHRsNAqSA8zpeahq6HwZy3hPb7GAiWLBEAcVh6iqqcsdB9Fk5BJt8tdCgxApXig3gDsUPTkq9TM",
  "key31": "FxyTbJTd2QWiDoyLGzWk5mMYt9kspAaSF1XbBkDZBvZkbcRNTeCUCMVdjG57eEtr1NbsAAL58pvy5tcx5xcSnH1",
  "key32": "5mwRKrotdoQEyGUrxcKCL21gHZHMrAAsiyvT1Hee3uCYNiEFWYjYdDCTcwT2uWn2RCTuHmn13Q15D1kujxyUmBXi",
  "key33": "3FHJ3CC841XEER8YSHUpzNLWs9Rz6oRhSveVdb9h8wLyfQfcTZRux8h6by8n9v6akiNjorQWdqwrjMztHLghXody",
  "key34": "XZFoxsh3Tkzu35BBxfutXQDcsLcqXUJF4527M8fwPhv8DMg66w2j5iTRGdYZp9aXoPozFJmTd2fLoXceHDWiaRo",
  "key35": "2ZV9ZWU2Zdb9JTa3ZPS9gnisErCdxT7QARAoVfUT1wbEEJ7J4d6wnQAt7QrUmZaFxQ1RKeoNup2uuPBJDEoanJ6G",
  "key36": "433i1NojDDHPGuad4wHfqYTMVzko26e56PF9QLTiirYe6f2hDebJ9RXr5uom11o3vDuCSX1WE9aSEbsGoMVvczez",
  "key37": "WHrDWSnCzoobVUNHDoHRYJtvkBF86qWoRRp2oTpLikJEHC8KAF6xftYbHApemb3WJ7QQgr8bbMiSW8Gz8SHZgF8",
  "key38": "3ucZWqSLeWkZQzgT2XmBK5nSCNb4hQXCSHAdipM3inFqLhejTetAVivutyaSrmP9SZTNYuHLaDNGFTq78RLCjqJ3",
  "key39": "47uyZ9j7YhE4yysugW8N6s3zZizV49tHDBcDuTYfgDYVrFBCK9hg7ygTQ3bJsP3vfoc2LAtUpwpMjcMqsfrwomBV",
  "key40": "3tM18MHsuamGe4H7M6pYs32fGcdjo4sT2RdkmxemRSNQ6Q2pCAaP6TnjxAsf1kwwujmFiYH7yryyEeWPUb3USBB8",
  "key41": "5QQPdPL2QdgsWnUjtWzoKcnNhBveYFm1zR5c8L4n7Vb4EELXJG7ehcy61UKAsyHFnDqrXiqivfxm2S3oRBxhyn45",
  "key42": "5SF6fqkubg91kf9JbA9M7FRuzrvbMCMd4C52dEjWF8iRFNVonQUdmZwiWFRxpWiqNi9y5Yr7qCmnaF26md11XdAv",
  "key43": "5Vyxn9vfbqzadAwh7U2PFAfcjmZ3GFPSHLFE7dRx3EedSupY2imN2nkU3aKWnebSqLAhBDxDvxbtXTzYmgJXPPDK",
  "key44": "24oMnn8yEvan2kQA7NfV8G2KRCkv6ZQket4r4wit1BPV28bVfZwKeXBiC2WXCnWLCH8BqF8XqzcPbUaKHZTp73hZ"
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
