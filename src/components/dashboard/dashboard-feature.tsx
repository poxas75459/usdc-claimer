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
    "533CWdsG9ahTQTWC6Gfet9fYpH4zFKunBbVPrcA9RS79Qd1VJH7teiTVKJQEVasLpULnZKS7TDCnfsYrndUMFNiS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZDK6u6h3WonSUk3oQsYyndba4byjffy2B1uVxcVpcjbp4XnyeCgF5v1xtoXi1puXDSTmExPbXf6ZoiwWTaubdPM",
  "key1": "4jnzkW4yWheL9SBAWHP7WaVSwayUUJVCB4ewxqxPcyaFFbeKwdR4aZa7aLM7H7LtUVZ6Z6wNY4J5xwuttgAUmj5M",
  "key2": "46FraXP3ULXzLvaGY7oesyMtrfw1pDeEmUywNeBPcQsU8bYXzPeTha46MY1sPS3VbmPUrTz4QWX7BfD1g81etTf",
  "key3": "58wwYSNCe8LiP3qBEYQ7QiDPKL1sCWWMtYsp3x5bAspHd4w2EEhTL7wL7WRNnzkwbzkLJPHSMgJPyMFT4XeDGB9x",
  "key4": "PcJ7P2tUsmuaaE7EtSmfUEo7gAnKz9w7CkZM4TugkqYcWmKaPDDr3VLWHPxHBNJ6tQSZiTAprLaDL3sWDXHfaR8",
  "key5": "NFundqCggYV6UuxibD99LRL2uXwsg2trECMpK5ehYJj9GCZrpzwLNg9hbeHx4vuTabFKEidWPXKjvDbmuZ3FLjJ",
  "key6": "5BVwTRRM5P9Q5BkvJiKHxZfZ8c5t3cAJy5VccV2bNWRM95QyqoCLGmS1Jm4C6twPMJuEW6bun5XnwhqMSMLSR3kS",
  "key7": "3hUJsozSX7aBiaNCZdNQPkBFUSqmgvRwaTuKcW4q2PB6Em8uQiXqBNCuS2PSnDvCSxDprXAGiymrnyxNygudF1pE",
  "key8": "5CAya2WxoP722vjmUeXi6yRjLs4V6DBzeHmFEXWwQTWDsbcxprEjNbRUM2CSLdCb9AUCaFqiCEXLL3cY99r8EGFN",
  "key9": "3ecoKNKrfxqncb9xd8XaEnzeTBx7y4Zcpvg4pJVjtDw4mHbADJWJgznhbdJTVxkc5ke45gB2w4PKnSBFtXsD7wZP",
  "key10": "hr8Bp5pJHVMat6JuxDGMQTpvH3HRJnjKHzLBYp4JZCCbX2CziCmaC9PDCk5CMKPkbPGqwTv5aLBvpyjidn9SvuS",
  "key11": "27BV2hkjziyBzDzccn4jiFocZUNagumED3rHMJw4cCHUbDFjvwss3TBDXbR1xq4QRzqZmD7UCMGaarXFSv21s2Jc",
  "key12": "5R17mPSRXjdPxmJWXmSD3WKVeHcRceMzvSiiLXHMS6s81kvLDWdE4ZCKk4HEzr6wWB96L4ZsjGraCNT2nwPHSAg5",
  "key13": "MmdpYScZbTMe5V9J3YQYQSTuBjywDByzXrtD8pBN1kmkbSTAU4vyGdkF4HBxSPCwYyHzznatXicwvgWXwn6h2Lb",
  "key14": "3gYEvejVgmYTdv5YpWmDQZueur8aYN9fwrMn5Z5CDNKm2jhkpmtdpDJ1zQi9En9i168vNTjN7WD8kryo6hnHHGuQ",
  "key15": "5569PBPMXAzWQKjtWR39X8rTAReLCEnCaQj9DMLYKLMjwAv5RWUWSniVdynuXepe8KXrcJRRQ2iS55fonoKCr9ff",
  "key16": "3uNkg4qPJD2iR8pJvZM9mrTTrmFK2RYVKXA8RMT4pNkyGWtR73ijnZVne4ATJ98iN357m2VkGsJHX6h4x3hixzJj",
  "key17": "Zywja8G4N4RCAq9BPRQLRzJGQvcU4JAbEsn2qbdbsrA3WarjMycLi2fhxv8W8UfwnpFc13Jnr67LiCzUSqJUn6X",
  "key18": "4Lpos1mfCJ4zZ7KW9zEn4AQBdc8hp2SitP7Wcz61R7L3eVip3fCDjrnSmRAE2iRkx9ZMVKKMiQ4M4mS9y5yDgUda",
  "key19": "1TnVsVxRWNugLD14ubHFhDzo63AkZWyKCurA6VJkwEAQAnBKdsEbvDQHF2MW1MSHPLuc6bedmKnDdrcN7yG7gap",
  "key20": "4NhaZaHxW8gwgBfe6wDma61jPvG2oabRRAsQU2vVUqvrbHJdZqfuyTcpEKBeyxibmkj5BR8VH3BDVbx9AFCHd5ur",
  "key21": "5ytwjW397ooHddw52FC9tmj91xKCj7qFsmns6MxHz3N8KgBor3FRHdnN4kTipru74i1puBirQe62FHF5PP4UpPei",
  "key22": "2jcr2kZGMQBTnoayZPNBS9owviyAmqfm3ieJw1wiWSwKbPW9Uv2MrSZFaXFxHVx3T8rPjTZZxDhigRN8gTy8cQmQ",
  "key23": "XnYS17okdYr54nKr83vLyqczJHiCVfD2MPw3zZqxn6WGsqDTQQt4bDXtvyUxUccYCQuX16uq89vHdSh8vY9dffz",
  "key24": "63b5gUL5jJ4Zw2nksYESNs44sFkuzhS17c9onrEahNCp9tVfMc74kz3uggqvKLcy8kMVdFPHSm6JnNXB8LmrxS2n",
  "key25": "4mpVvbnMhtAyqM1Z58qSxAn2RqVTyZwBfiPXwYYYb9dcmG1SG5Br3iYqnheFedprFdYwZQZt5fjT7fkTTpTUHdSc",
  "key26": "4zmLjfH8NJD4BL9aepyaC7PDTK4zZD8F7847Lad1D73b858ypWpRhw8A7SKeXVwg8t474eATgDYZ4cTSqPGhHnpE",
  "key27": "3MSGvH5FaD7fKxUQ6aesK5yDavVxnqJMPQ7VWqhyzA4MV1sq1dRyhbrPFaSTU8p4JDrfhGGSmX1eiZk3UWT6CFDJ",
  "key28": "DLgjRJtLhQjEPFireRvyuCSneZ99woHVJBPz52wUWPaDhd41hs4TWcRtNZG2wZrHQ5SzpyD6mCN5YxnUavULzDU",
  "key29": "Br2BC4Qhm37ybaSHUwsCvoruNwXfT4A1EixBLtLYAfR3XDZ7Ux4Bodms5egFaZL637JS96zMW4DJqnXbFNA7DDg",
  "key30": "3jFwLAS8YqUfgRvxR1FacQWGGy5s5SBH2YqyFDD9YjCdmLdYH9svkq4bRCPq7LMMP67XptNQPs8H27hgXKnzzQWd",
  "key31": "5ajCUVR8nqTe6mPZupZNFuaRkj9ty6cA2uQywY6prciAikHYwp5XVGhRztqBjE28ZoPSgeFFRdUV15AAAiVCUPFR",
  "key32": "PPwcxdofXitoDW82AqcWBfiSWXPNq6TRPGy3ntxtMTTzNEdPFwFoJ7kX9o9ApNSuveA1RRcPa2tLT1Vdz5Jaa4b",
  "key33": "3qY6duqskz2FPSZXh2LsZpckiGqz7RDLrThD271hy8e1NY4oU8ihzZ5HG2u9q6nTi3CcCaWt387b5a9SogXH13uE",
  "key34": "3VhLVPj6eagLKHLneqdznKdTKM86Vp5Zm673BmWoQt2DZ2Sx843bonacEjsHBoeBi8aB3eMFvxoHiMZH4oNcq2Qv",
  "key35": "2a4wmNeUWJxAtbueS8AJyrRVT9KTERy72v3WNTiX3Y7oqefp7MPJjfd5LHKnNaFBAMrYmkceJ228vNtPfVzsg3Q",
  "key36": "44FcDWXpsKh7EkhMHQbmV6xohLcGA9Cg3JkkJhC74sFZWsjUu9A3b3dvMFUMtBxaxG7X5JRgGsibMxjTKAjZHJPR",
  "key37": "4DMqzuAmoQyTupDW6wPfAcXkLc7qJEJ9MDMYaPbh28tzh4RmisBCE1fMJN2cLdRyBsgVghPPmTYeFi7C2u6r3JXh",
  "key38": "2WEDNeydaJpcpdSAJpQAkmMximxJXBLR8z1EsKsea27EitgLX6ki8GpnKZCXGLzU3XVBvo6B2xga7mNrpqU9Dh1a",
  "key39": "48sBTHTADPfQZtiKLdWPV1MmNzQW8mxfzmC5DGC6D7ifUTGeYAFycZFrnnEZmAfcPp9owL7Djz2JjTT5GeeCYDbZ",
  "key40": "4xWxat2q4B2yjyRAHtRsbmHymAAgMiNFsWkb521X6Bc85VJQYCtX7kpF7pHJr71XAbKsgnnWKmZrAULpfSafYGHY",
  "key41": "hoXJtgDUzLQWCuyF5NAQC3t7PH2rLPwX7W675djQkuqRv5jg5TkQ9LBYmnogg4F3gU6aaVZbKy8rf7uTyLAwUVF",
  "key42": "2kfwT7GXm6bW5jDBrkzhpahJhKYCm2wJt1QpnVHjXCevy4gpo54XNmJahs2N7sXRwPbuftDBfmGem2WuStLqYrZ8",
  "key43": "BgTibDSuiNLCMv8BvhBGdz6uu1w1xqaYxtYywwFr6YYDA6sqbMU14vD5ffpXibtkVaipYVQt5UL9y7GN6EH4VAC",
  "key44": "5MsrP45qUki7L4536WUrArCoEN4ZLuTct1RFwa2ZzXx4pC51mNrffFy1wLiCHfPj19F4NhD9qiVtPpKyHjCmZKjs",
  "key45": "666tYtBEqs4c97wazUZHTiCGN9uR2dM8sdkS4XZzLpzxK8wGtusCuAE3j79zqGboDENJbgeVc4fWEDA67dWJhvfU"
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
