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
    "3ktCVNrRKzKZu7e6uv17P8bpvAgTM8XTHC8U3QKBYPGSoZy4Uyv2Y78UbMeKM4zdtTrfzD4Lxwy5TpFFsX5Zn3T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xe59rKqYmdpLR1XnNpFua5NC1xEBPE665ry1k7V8hNnMkPLNQEoditGrsWtN1hPZ8vTwv6t55VoLzCa4mDhhxnz",
  "key1": "2wcynTbqxtm8VfwyYhYaiW2ZDtBaxtmv5eMipUZ6LWxu5ijfYmbe94MKrxDFs84YX7jYqqvcecAUYsxTL8ENJyRW",
  "key2": "4kmQSFqMgD8EgdLx9NAUjMKD7nnZRZNKDDcfzFK3MAczbmFDMWkkbKfXnUnxYHUy9cx2R282B6voJDERG1kSXG3g",
  "key3": "uhdYDGY4PHdh6umu2CV5q1epXWgJzmQDwP9CpjS3QT9QwRNk5FSwyJ27nqLBECUqj3Y5L9fmvcQFMGnFj9cVSz7",
  "key4": "58y82b9HXaYAXJmsw3r19pag1zLsf5zFWkf15iBzgs3a42i4JR6uXNkTMjawYxjWtkvHjTFbJNRmvd2RmKqFGWSL",
  "key5": "23SXo9gt1NAg7tRFqnyk1cNL5kyq5LFaQqZ3NTqad453G1V9cg88VFjJJckruZyWPSBqTrC752cgMrgbQM5tcfuX",
  "key6": "2v3YagcCvJxGFjsTCkpUNwSX2iRfst1PtZS51DU3Jywmfv5C4jByLo9q1t6Ug8B5U1RLezhgzhHUREQdJvjiMbq9",
  "key7": "5mPagxgHFDvDAjotBEMpsFr3kYRCysmEjRX3VRqLZdigTGCkgzngTHS9ndTnCLUSaGcja1MFqgSc8AxzZa1JRdwP",
  "key8": "ZLrnWk6bEFgimAeWpTq2gJ9iCwAVoZZZfZ6xXAVkw2g36FZQbpBFLTS1z5Ums5kum8i1iKNexcP1y4uhr4sEDt5",
  "key9": "3VpVB5sPK3D9A5RhEvV3QBKyjAbq4w5BMu7oRUe8hBTdQ31MK6NgLbLUUJBEhgGHAJDJE4nViYcz4jRzuoUGibod",
  "key10": "39aqdVw969s6sxgxf6fF6pAETpqcLCCKafri3mVJgVrvU6woWjWqchW1gA1yu4Ch6ikgECrRof78KiXsTPhFCtDv",
  "key11": "RqAf7noXT7xp8VE2trBUEysWnDiQg2Ct5hshBbtvCw91GAvEPdYUNPSrUucsKgtCXc64ZWrtPVGhM8aXUtsGcoq",
  "key12": "XwCUkBE1M3qpLEUR6w66aCxEabgMStgMzCKRmmyHspV4WvB7Lof3Hq5QRi8NmvzjCuBH42U61uYj5aAEDX1gAHG",
  "key13": "MKfmUdNVwhEgnvqjhsYFkieUqWpiDNSnR5cRVuvX9QeutidYzCBjoiKiqvQFkA4eT1dLACLSNjmYEe56H2LEa9X",
  "key14": "2vchRpXk3bhE2aPQgZqjpsj6zFo6P8Z3XdaqHNJdcZCjiKqGGNbpT6tfhcNyiquw9MrHVejscrhTPMdMhkgeJmUm",
  "key15": "56tGnhrdx6dkwd27hP9hErocDF6CnBcX4hyFRJMunQYp8brrjgKxT3R6cJBjb9D2H5bZ8YhtGhvYAN3w7JVqkdbj",
  "key16": "4qc4RNNyS6JGTb7KVaVfuBJXDw9h1MbYEyNHLnPHDoVZGGsDdt1wcFciG5YLo3KvcEHRrTNKZ3j4wMBywJKxSK8i",
  "key17": "WXrr4VEuE9xDCLij9FwSY9DjgDqPb7dPdVJuyNkFQEpjB2ffveYThvWwCXpNGj1taYyKdfx1MHHS63Zm6xdgim5",
  "key18": "5eEb4os65yPddPtkrEXHMxbnG3wkLJyZxy7LsypQpSHsitazkESq7nByHmiUXTzJvHjz5zT9taegKYkErzJQQjxH",
  "key19": "51mxaA5a9ivpTv5DWgzTFniDdNJSFGBCJjm5YGUREsMZnwf8YEqu1tH4F2Pz1tUyoiPBsS6vQTF2UTvEJRtj9RTF",
  "key20": "4UZufPxC7xjSzNV3W5WmdNYSQZMRmQJmiXTYxQoWMqKiZYXHDaCvsGT2w8oFsbVFNu9zhM7LpxJ5zwHByjB9AFRZ",
  "key21": "3C8vekmhVhFH2vFVvcqyEuN1jF87ZRsMdS1j7G5ccehSdYAND6H6rQA1cHcjbXzKDFrQ9J12S5NGkEu67bGB8fTu",
  "key22": "2b84BSPU1hjiTEoUE6ooDSH91h6Ln2VgtQQAJ2q13M1FSeetXtPrasnNHnAfM9if1G5GdEzvdmVKR4y5cx85yFrH",
  "key23": "5H9PR1LTNAjDTRAMCdixMHaPAfCSufs9QxExzLvnRsz7anjJJHPsMUJ56hzcHkVzTYAaAaefQs8diaR1Mt1Uy1yg",
  "key24": "39Mu5Nfr3b8SD8PDYSyde1noCCR6Gd2hWY8ojcEkzXvAaTyZmF6dNQ5q5LCJKQUkhUFpm2ozRNSxXc7ArnL5rd7d",
  "key25": "3BVm6Rjn8VLJRiT7oFEuRJizkAuq3T34sbnDgVvC466rqxHUtfHzSPPbPuFp5rekrhGhZ4q1dh3FzACramcKeXEx",
  "key26": "4W45XxXJZcuGYhCe7tvu8NUUgBAid312puGCcshKSbWjp7c2BGycwVxhzCvg3SPgudBJ2fUgXugP2z2YzNUYTyow",
  "key27": "xU82QkXtq5ihM3gAUybRW47VC1cAiBYDXx44QMrD2GuTun87umUxCzu6kAk6b7Y3R1wq8vz8fiXRKpWxZqHBj65",
  "key28": "2jNawKmxKUyoiEkZvQ8TbWeoxALDkpLwM8PGoPjfZUaUTbKSxqcrZy7jx2sXx63w7tQauG2nakkZkkEkZxzFeK1f",
  "key29": "3WpeYSQVmQkKKwuKzZKePzRBo9GJ1sZKSZUoBC3nHvXrnPj8AHo5v6HPgTBkrbeZscF8vPC3cwFaZVTGyuBoXUnu",
  "key30": "2Ee9AFQKPYk5WyxpWuBUbd74FWd2LFAWMarUoV8f5HWtZsSuAMbJiFf1KSkeaRNjJLpWxX9y6kGRzy5oWLNCkzSC",
  "key31": "5ADzrizQMBJDVjVY8LRDtG4Mgh8YHS9trxLwmiVYEuUrrh7mnS9UVujWFfh2uyzJ2mFM1ZReTRwKTfLTPmhwTLUW",
  "key32": "4hPeJrt7uG4sVQyvWVJphLaDpNWebWYRuFvHh67H6FEWCv3nCdzgMfnQxKhophd3dP8dynniS1HdzfZHkhjDWkzf",
  "key33": "55DhgBy9jLgRxegf4hAzmTVj9TC7DwfBoQiixyQMrNtpNdpkR3Zo4XzsazwvCRxxdK8PFrDs65Qy3CvPnA6ARbBH",
  "key34": "3QncQkqzaHbMdjB3hrCqbpjjvjKoPjTFhhKveU956mPVSBnYtpRS9oxF6tjhDSL1sMdrLdk1uGMqBY2Wk66NN6Zg",
  "key35": "4GqRZQJQJGRLV7uZWXZNGRH8xq7cw5QNMheD6CNV2qdTxXAo6hVzfVMr2Rk63jYai26NF6fxKidBEDWTm5BXLUvw",
  "key36": "2dHi7pMTynfbBRHiJTnTDpJA3W7VrzNqsscDYSG29kz1nY3hnYefgjRZW8YhF1EbqcaeS9PmXJUr87V3A5w8m8RS",
  "key37": "25wZqiw5ZBhzdCgdC3VNJsqYoxA3nhYLPbumVwDq6gEpyxTAhiVJwHVZfTiWaDeYVhXeRNfx8ewFrfPGwxSvRS9D",
  "key38": "4yPyAKUpaczhDcB97PgngDqAgdvFJBCmbPDa9S4ysBTYyKH5EwBZCoJr5LLvYQ2ZuxxnA2Kbe3S9jaTkt559fPSt",
  "key39": "EoK6g3uQy7AqgumGAy1TRataNiJ6qHQbdmbW1fLRUiA2ds74q9Vgthnd69YN3sPkCEW61BD8TTvYLDsq72BjnWo",
  "key40": "521TEKVbe4CGLgr3e2Hr2ssFRE6GZTtSg6UesXoAzty5q2YqCgKgBGa2ZL61CFvGD8aaERc2GyDytzSdFV2Q5znY",
  "key41": "2CXukUx7kFkBnz4aNtEKYU8wb6baPnUWTkpN3Z7TRKX2tPPbEmdeGvxQraaQskEShTrHPmakNr4VBet8GJ6hNF1x",
  "key42": "59zVfFPvdocAqhZMeMQ2gX7mmPK7JN4QVFeVSoaBPnbBUuQird9Gnp4ET4kDf74jQM9n4dN6xcXtyZdG3ZdrK9YH",
  "key43": "3qSKfWxYMFmfM5J8ukUdDa8WhaAJXDrZKSQhxJgDyFs2aNP9B346wA1mAM1KC1gZQyiG7bi6BbcpV1ysWF2gTEfh",
  "key44": "4TWSKxkBJbcLurhFkr4fg8zbZaciiAy8zzXp8ipc8gskTk2nkXkwcqhmdYQhQ6LSaR9m24ixwTKYspdtE6MRZNVT",
  "key45": "54egBsiWZhagreGDzF1zk8zcgAipW7TSm2woP7vCfSLYm78uJfWjoFWMJMV1PZZ2DiaYKLmrQcbVdMDHkmuwEF79",
  "key46": "2n9HaxPTnczRPSm13Q8yq6cFTFioQbUA8spNcGMYTuvTtBZEkxYkxbFQZ1toQkASn4VWBp2YZVYFnYqxv7Sz16ZC",
  "key47": "2ebnCvKp2m7XXe5waHRQ5y4BTmZdtcCqAZP8cx5GuuEeNpSgiWP3b56zPvDrBE5DuTfh3tvASLvUohCU6GQ1MUZ",
  "key48": "2cxE4e8E6u8d97cmeaUiUrbkJmLEQAaSDfjoNMpTnWmffQ5t9reaSZBZozkRjxE6b2X9hFLzFvbBMwDe1pw98DDi",
  "key49": "3Zmo85ET7Mx8UxdiyD917mMW4RBGDbGMMQHF7Q4wzefFKHDLgk5gLDP6LPhW4cdnyoorrJr41fi1viQz83oVEifn"
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
