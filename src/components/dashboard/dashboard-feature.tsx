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
    "nZUwZCFwG6rdor99GVLzeCHeiPvHL44ERAJVVHV7Rre7dxoms2h7GLfFCRpSw67zqLfXta6dQiPeL8abe3DKkgq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rP9Ss6gS5w5SpcXKRu88W8P9zZ2wQBMiywNFEQ5VbybZqX5HBo4EZJhvoBCvG4jUWBX86uc62XyqCp8b64PKiAv",
  "key1": "3zSmhwXcqV6xJvTQopG1kdCm2hrA9trPWXH8JdHHbmxjWfXit1e343YC3aMRTvq8zC3t34h7GQS3QW2TAdKcDh9f",
  "key2": "osbEM6gN6Hef7E63ox59fuqKLU2BrCwu5mPyNBii3tuPjsesSMYFUnsJ97Dr5TiktG6EBUPRuk5JtmYVct1Yo95",
  "key3": "u57RoXqSc9MSFj5bEBsf1rgTsmSB7nyQJa4WJrpiLnTE7o6uEqkBsxgSUKNRTrdREEhd3aVRMcfLw9o93C92bdc",
  "key4": "Nsy3uVvStZdvj1eYiNH8zV3Tc7PbEmfNwEgkbhtGwTQGpC9j2qHypubmnyx4rGoEoz5R4cr3W2EGCmyBWFwXojD",
  "key5": "5XK8rRzr3r5wiqaoMERzJ5Hc27RgspsTjKTCeJvwfsVQs1Gk7j1B8cJrmvWddS2EL39cJDGUHnazNYEZCQxSyAgm",
  "key6": "5GEKtBvfm8jXuYC69eL6S3Yq5HxrSKykWryzbgMmVMk3yoDdmTqqzT99bTnqZfsQMWANhLcVnxpWELgwcRekjp7g",
  "key7": "3qgdDpP9cpcCRs9ZERRDvG8EJ63bMCGnjDdye6x38xSjtgP7z5zhE6UL7bHnLujjzSRmudtaWLFiJYgp9vgV4hHk",
  "key8": "3422u4dgbPe8CoL73bC7uiHSLDoVrQ9nuphxme2EQQxaGkremhH5z9pmKxAEFN3ZSLJHCTKrAbz5VjjnkWj51F2Y",
  "key9": "9dajuEfdUU9nvQjHFp97RKY22XYK3WTqccAnGCWaY8p4gWpgsXkYUjcbvzLjwudSA3X2ePDpALGzwghe7igSN6G",
  "key10": "2zgZzsJW8NXvz8LTy65HsqMUxzr2gwgbxLRumvB9SqxeQthsiUs38P1Z5nhfrEuAzZsw7V18shKS5wzy1eEP4vL9",
  "key11": "4UvUdDG9jqEiYceUxYrWmPK4RKp956o7tiUN2gam3MVJVtAjrGgDCUXyyePkkJsfpqTPWidUSfAUemEAquiWURcg",
  "key12": "37yL9LakwDNfQyom4rdoXsvFDo6UcmS5QX3dH26CRf7ENyx8Ys4TBCTrdEyeps6js8KWCTYsbxAhdViaxg3BYtNN",
  "key13": "2sLrV19ipBbrx5NgfNdcdhoeVhS7kx45WgH8XQU4thbguhtsAbLX3swmFwVv6om5JpdcY9C4aNJDTfnc9hGyUUoQ",
  "key14": "274GSjFYUtcDuXPzWpbkL7TpjhmFPULwbeaEvbV8kf4X27R48SJfrnqijekdWmohudo773w19pGs3wR3FkobBhoM",
  "key15": "472Ts8h72UuRFv7SH6kD3LASzu2LkxiUS4jgPC9KrwZ45H8gPLjEmJozWzX8DAod4PSj4W579pawn76giTVeUDHC",
  "key16": "55Kt13uB1Fi8ukCuhzMFmZKhDYQ58p65UG4foZxdhJ3AGqRrzUJEKdjCEUcZttuV1hfRwhmQxUqSQWTaVkZi3sN8",
  "key17": "2xL7y1zX3ZvYWkFph61c9NwvdbkEVbVS6ong8XGCWWZtvpewDLefGN896UTUTE1tpVfD3UzNBkr8n7mg7ebf2evh",
  "key18": "5YyxuNVesUx3oFwyrzAsZFmQ2F1o7ors8Yo8UmE4GJ79EcqBm5cuHxaSqZQTxDLt8d5AEtKeJbvaYfhHmwHUnE7M",
  "key19": "pjZvfmq1CpcSGT66zhiw1JroFSpogffnPU1iV4cLzA3VEm56Q8CnU7YwYrGYEjddRhyfdDucqNozomqWTdJxJwo",
  "key20": "3QbdrCK92TJsLR9xbd3nttbTmcUNembjENzo2XHDFi8qFu5hdRraSgNoezoLcAJEeH9CwdpHGLF4h7gB4Rgv6Xfh",
  "key21": "26RqiUftknPwNY9LQSY625ZiBqPAvYzqzYPU5zu8zmyjvSJ1MAaKk9yFekjUWzjhQnma9KKxs3GUfeNLmN2cYmat",
  "key22": "3SqMiNTBFGqE2RkGq4rxmmr6rQZPr64dHtrFqJt9JR4HNUxso1BMcXz2ndkVJfJCr7Q1byQa2GgA3iB1UebS3cRc",
  "key23": "26gKSTKS1zCU1upjMxBdFXynDgjMe66dzYQUYp5VeqDSynQBkr7NC2TbE9FTaSavmfLWhT7Z4tp8SyTn8UTn1fyW",
  "key24": "5Ap1xP4KJsoQay5eh92garFtLNujrcfUQGwZNXR3GYuGgt1detmFjnaDCzDL1oNfR5TDbKFV2oftBMUXucgNU4z4",
  "key25": "4uVwfDcuzBwhArpfrgo7hP4Rt49Jg3KQP4iYbzUE8fZA35P1ProiRoFhv9d5o5VKbYR7BdqLxLPXSmWBmhBzbzTe",
  "key26": "4gLJjBBqNXgwAhs2sQdYobnwLsDscRtd2xcBDW1M8dW7ppy9tk7gnw3BMuA9MLUBT5THcRGRx4ofpu1Z8YX4EGoo",
  "key27": "5EazHKcgcyF2yi2ytD6FEwguJp2SUErGAXT7hGALFH8kjk3TwNenMmgdsuCk56n31g5p7dX8JaZC3vYTxjhnKo1z",
  "key28": "8qaYw1eMz9b822Yx9TvBzRCpTNfgtygtwjUEefHkX4iRyKekq7uMpADmhokMKFZD77hKrfX5PRnXSCLVUA1y5R4",
  "key29": "36qpcU4N89DTWJtx23FxdDqfQqqnoan41njd1wV2vczdAAckwemDhhR5qCTjqLVXSpVkWyqJBC9cwG93n5QAPw3H",
  "key30": "47SPciahpsyjZQnXbn9qjUzETLnfpmEtHmZCB8SFjZaWKapEZW8YHLBxuXCyzufQWaMN1ttq4LhD5uthrL5CDGEc",
  "key31": "3zHqCYbnE7EcSzCq5N8qSqk9HvhrHrTxsiXdqBNkHST4NwnGAivjz5dFomerAeHYCmC7QhWxJa4xMK39sgJdhnsX",
  "key32": "4Qt6Knju8c8dsZmDUxekkZjwWRpMPeiuwQ315KAc944SrWFTf1qunQmcKyKB25vGCK1fLxVidJizptRWPJBnTSpH",
  "key33": "2dL1zGKne8GqztF9K56nJ9E2KcnJdMyAoaV38FhpsC48gSM5MesabbdTy8VuXB22LYN3ArFukkXTB2tRXTF25Vpu",
  "key34": "2NkeRwhsSr8kHPBmbxrJF7zbnoitDPMduF8Uvq9JAFgBDxKH5jV1WSWLFhdSdQ6ApjUpYnZTusEKMRQyGxQoeuhe",
  "key35": "3FQeG4X95vwe753e9AxdPskgGV2bVLWX3ADVMTcMv8fKWkeycWq3SbfMFDVHeKktTzVDBmNrgk7zGisJhkpGatoB",
  "key36": "fnhAQUjXNCQMgCPZM52CtJqEMM5w4saidqMTZb2RsgeMjC6mLXcDGzhYi6iDrj5uvb8QoGthRrYAfa91jaAJ2zW",
  "key37": "2mMk9ikLxjY9vPADnssvjz9EoFdDsUP6H2nL9hBRvprwgXM4VGwfhVmgnKPoFCstrwoz1SeAMRqNB63mZU6heNSb",
  "key38": "Zpvhyy4HKnFgxBgRpwTDqCzfbtMgRPXe6o2CbsBcQjtDXWBGTZmxYay5Eiw5oAEuyaLWUrvf72b3LcDPMo5M7te",
  "key39": "3oCcKscQ4kHGqh65WVDzvpeFxZ4bprQaFrbtE6bavdkPoQHEKiZh6xocmTA6LRVKEUm3G9M18RuXaNfoeR43iJF5",
  "key40": "2ixETnGdAgimKNFBXQwgLddtKVN54ne5LTbuWVuAQ3cdTCAndZNedoThZd8husKBAD1A7mCurjZYkq9ydkTMov9D",
  "key41": "4UVMXxucvMZgB3r9jFYb6TDSgpAsYHcg9PEN9DBUPn6SaX76Nbno573JaJHkcA33gE96rLSc57S9sxjaQ3nV94ZY",
  "key42": "4K3DeUpYisQzp78Wnebvf5NKWAWz7j2TPXJQnTp55qeMwQ1KgAgEaYYzTBQjufWXnC6Ah8U7TuVskMsVGhAMy3dw",
  "key43": "NKRUWRMChF71J8L7DdKdBM5ZJo76FzYWnupVqDVNEdaUhmVseWpN47dgm2vkEwBzu2wMcnuaQmkS3tQogxA6Eox",
  "key44": "4vfwfQESMroMyppkPtcgqqGX5vdmdjJ8f2vHhDXMCFADwNdpKynAAXLZZAvzpNBd136f5MLrJwZrcvZVbQXLL1vE",
  "key45": "2JbWsVGY829o7pAddpNuGNwZvSJiEjtzGb6MoQUBCYVvkqWYyA1x1er6rdB9G8Utu8fw17C96CsG6LibybEPsgFr"
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
