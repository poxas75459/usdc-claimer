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
    "43hFvGpcpskkenz8R9SBnedYDEA57PrQ6AaziSomureheLgsJ3bvuSpZ43r2gugQK17AHXnTp3ubyaNkBQ6AGu2h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SCknJS4mkWJirFimKJhySkByNPTKcRHke4nyybWnBNWNq1hecHmPqmYSktD7kX8tHKNTvSR4jRhMteJdfJKzfoJ",
  "key1": "3v88GhzFgFEFkHg36YBfGcm1HtDzMnzZ17WiNuSqbdAr9fo4CWWi1hV658NaxwZSo3oDfQrcAaDJ5RD5T92oTCHC",
  "key2": "5fHSyJWp4Nj26RUcCinJr6FoevS1qE6XrsNBEePb7gSVpE6hrN2Uw2pWcnqw38wvB5akciSQXdazKyh4H5zAajpL",
  "key3": "LFn5hLxd4MmBJVuf8ccnPrmb75YNzHRj3jJ9r35hH1XESRM8SkEdNo7Py2xbDT3Fxmabx86d1SpBDT4qr4Keq8r",
  "key4": "5cvUMkJih5F9A87a3SR45NeTn3b8rJSThRnkz7bEVKunAEo1ZE3wkbWtC8QQs4pKJ24bba3mTCUhoV325Lm7NfrU",
  "key5": "5gDzUPht37Evisw4gmDDfiNGxmzqM3NJ2uHTygTeNdUbSq25AkCmKURoxyMzv2QtZhLUzQ9eTBWoE6A6VWR36zuy",
  "key6": "QCLhDp1zmW7iuzWrQxQQ4Zn5NrJ88nUkbVwjrvv7efYKS4CBdVNbd6GRRKCd3LxM8h71ApgvZ6thahk5nYdujKr",
  "key7": "3f5wLjefxpTk72jhKLqjRRKbfMgEDuNk64nahwB8Jx3FnmSUprrDUJef9nk8nJPtCDAUu4D3rq9pNQkW9pa8yEyb",
  "key8": "3AgJxsJXQAerjTjSCNmfrS1xu8if8gAH1a9jWgNAL5ASsknA5fyXadQa7QhPa3iTo12W8kJWhyhi4HLcan8Kr2Qh",
  "key9": "5gg557kWk3Y38NFueJCxFG1CXs8jrhhRt2PsYaYNKw1thFhmqJpLAHNH2UiCjifESKrnMfPFF3gTTuvgLMy1nprV",
  "key10": "LRQDhgn48d9qW4AFkSTyWn9yKXoeKpAYNtCBPrWS2CoJr2MzZA4zHFjdUdMeuAtNFqimbVUfNTwdbnmAgtCgQJp",
  "key11": "cth3QmyonDFt2WgLctrkyHnquCJ6sD5eqhuuMuFqeaL2p4ieHKcr21bPu5vxogqciCGzBwiEkaT78N5ZY7QYvDz",
  "key12": "TX7WHhEsAbTaErmXa5Y8k7uUtpoqugRzmmuq9p5iP8KFqkGhvKBepqBFUCixLMSueJxFoK9A7RF1FXgPPzMkWHL",
  "key13": "SquSrWLALSrkA1qS6TydwWtgagEV5FfPpECCxVABdsmRJrKa3eDf3VRCUUnqpKuHqWyjek1mZnGzTDfwx43CMa4",
  "key14": "5uRkz2LCNHUJCBW85Gz89hJpSCJK9cr42aELzB6ZsxmSnSo6nGA9VxBmhhNRDipv859gV1dnp63RR19o8mg5PXZh",
  "key15": "3hVs1FgDKTS8Kfej4tficb47oxt2K9VJhfQjtFESNc1jmHawZucttRjmRAzhfWQHBXu6dpwkZrVV6muBBo1FPW6H",
  "key16": "2j31dy21F72VipgWYZiEGuWKiG1ZYZzkynMYHvAjNbvFrxbgHcrNEHeW3UaXP3vWPoLdLqfnbHD3AdmArB1hXsvi",
  "key17": "LkxZe7y5AVE4rsahab9K2JnzUkamPTArNRaMFwWFNm8XpCjCTxVDWEipD9EUFkwPy2qpRapVfENAYQ8nWV6BLZb",
  "key18": "4vYiR3mLs9mDxVtUWgCLUBPP8zwVY7cGFz6eQGxPgouTQEuLdzNN991osGN6qmHd1NkPSQEKWGdd96WEqz2Z6BJi",
  "key19": "3zFDskFSNwzyjUGcRijy9yPXfccGvT5xa7LTKEeEynJm7GrzSX3rz1GvLB3NQB91sQDixW5gVsmfQV5MJo9BZjEY",
  "key20": "4DUrmr1akgRHZK1MMug3HqcwaLtBssBjGQFo8Vb3bCbeyCqs5V2XsopbdqeGybXSzscVQ7sjKpnR67m98a2N4NCT",
  "key21": "quiJKVjD6rWTy1gm151x9HFJiwTNPXEcADwMU33D2roixPKeTsw49LejnTnLnGJzTeuiHT74RS3VSPPEwdUEpW4",
  "key22": "27MKcowZT74Sic4P9M6LcdeukmBLqk1suo6wJK4fqBcARJEnYEgHZEot16SGDeUWh6w5ndFYofVxuRLYYCMmNyi3",
  "key23": "5tzydkXuBmKfwb3PMgrm9FkCWGcyLtnWqvSnkG3dSKsBmVF7bnw2kdP4ye31Zm6w1m9yHUdLewW9ddBgVypRRE2C",
  "key24": "3iMLZt14B8R2XNfMdBKU9LcnVDZj2s5PhS6YH32jtkjidSKfpdrRhwCKAN5ybPHXygDLeHag8qNU6V8SVRF1X6rR",
  "key25": "5t2KyVJF8FPxA5xgh3k9ZASh6XKCuyxCiFsBpfFdGK1Jb1VkmNpWem4tt3DFeQkzHS5Lc6aQRydhkELYJ8rJkGmV",
  "key26": "2QXMkeZNETicoKr7KgnYgRRkppFvmNFRgp86XSGSdyBdmu1aTT5ArjRTv1pHTVbwnwgGbYsnganjXYGfSdYFmd43",
  "key27": "55xJgX6nYWgF7tX8Ggrix7P2nurWm4RguZVBgM4Wy5U15JJ8DiAK45G4QEd2STyF48CM9M4sWYAGcW6pQGcb1tMy",
  "key28": "5LJaNzBiodyFKADcY1cozWxpcD1XctiTxtn7yi2qEkneCrUpbvEKZsJvgrqj3pmMhz35AirdEdRvNEPdHsCiPfQg",
  "key29": "54ih3TgGzMpzVbLh7g4D4bMtk3ppFp4rFDrra5z7XCBHsNnwZRuvXaBCFuBvNERxXjGsRHQzSrNToXremaN2ehNk",
  "key30": "3HmKZg1t6jEWjMS2cisUx78X4smZrJnQ1jkxqRPBcX1CC6mq7DKM9PuY5EEgoYHh9U5kQ3To922j2xFPj6dW1H7A",
  "key31": "DCXtiPCGJzHvjDcNaw6zdcV2tz9sFVr5tLuGxccwREf9Ey5ap1uTEuLXy3ZGWyhKjunN8b9c4Sci9XqV2hVYh5F",
  "key32": "2PvrR9muA8PnHjWxrcDCBNUtCEyuEn3bRLcXkPUsaS25FcHhXkKf4BLn55Unax383WB8ZfmNmh3DaZP3CTcBWCJw",
  "key33": "5XyP4s37XvePEyW8kqnhqWrZQpgv1sura7sBajm2mwSa4VUy2nL82nDHG8b3jkLfrUCEEkv7xgGHoSwsYs9LmTGp",
  "key34": "2Z7kr6Lfv41oiXFvRPTPVVsdnWHsKoX4bA48LPfLuZ5QCFT8vbyuvm1T5VxbNHvcQbAMCybKF3EYhMfMuQPc3Kps",
  "key35": "A8Pg1vLJeuPDJRN4zBb68fzkLJA9xXAowop7zEmgwd71KUMVYa76v32wJsMwFk7oViduNHy9tSsPHXrZ5JCyrNb",
  "key36": "5v8TzKRTQ2SAyWoRkfVGAzrjM5VZACJdHUQeZZyHyHRh1mLu4LPhcS4S2wKdAVQUWkENx6FGoUQkR9CVYPoDeAfo",
  "key37": "4KyfHmaNiRUACiwmsAS1hqnsWmw2Jthh1fvDtN7XbEVHgBZS4HCUA3vEU1EKJC1VTN1CweHBWD6VcSGnemkn9FiS",
  "key38": "4D745ZwWuqayexp8zALB34sr5PKXb54ThsskdbSLvNcqcXYbgTcJcfbX6N3rgx3vDVq3eY9FZB13cSupPzBNW9mu",
  "key39": "5serBdmZLzLWVxRY4wyvUsoc8q4yPSMyXyftpjcGmhXSgGukiVXFp7dyuP9noycMdzWXdRybkzQvjfT1dE4DU6ws",
  "key40": "2aqqoqou96NcMjgwAkiHH9EjNVN6KyNW6mzvJDYmx98JEA1ot38UCKmRdePgC3XMwdTwEu4TbFQkSho3TpS7gvV2",
  "key41": "t3NEiUM5CLZM2fH4yK8he1AwRVhH1bYCZg9XSoTe3TuwwMfKWfpb7yvFTTUnLWsZhZt1GfVGBa679o39KNoKEBi",
  "key42": "45gYedVyWb7PixCwnSwBasEMAHHsdDAGDoTA83Niz63jFrazGWy6cpvYfkcz71AXMC4tfyfwgkbtr4TLY6gEWH8o",
  "key43": "36noRY1mtLcEnhP82HAZnvt8J5z1vccYcJkKmm88RTfjWxZoaYeBPS1J9rqJ3JtESXyLDszxp5LCN5vJ7pcETy1X",
  "key44": "2ev4hupJEYAk3iVWqrkzEYLH84xx7kV9BucR8iFPhJZpAWh4r9eVr4SRhn3KEVwLy1spKbsb3gmCUQmoSaiDr52q",
  "key45": "5yGnsvq6VFzUHTHHJ79buobQp7YtNbMpFw5qC8awGGqcU6Kqpq8Jd6DHzbpGUZC3hjJ4UGfBQiEknchc4xxPNW1v"
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
