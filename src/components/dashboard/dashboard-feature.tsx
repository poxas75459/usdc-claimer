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
    "2e91Ka34D1zmmqUuZBusYmjiDoQUDHVgoxfEzZV9bUNLvp5Cba4455YH8ShsjisxjfjQQUpSPiAgFGqtxHN5g7xu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yzzYLeQCMs1dW7sxWBzJrYGnw9EswtVvvF4VWLDNWg273nqHnesbafy2qPv8mreqKAGUkz4tFnfCU5QD2RkHRYt",
  "key1": "fspQBupHVc3c2z9xoxHUzEDyRLWUVjg8aAwrH9scQyHMDfqhsyzxyacDcCaiUXqLifp4Ckwa8kh83cXWNFKs9MX",
  "key2": "aCWbgxpgq3FM6cL8cPmnK6TWtDbwSirPuQGTkM2gXr5se2VGj1HrmX4jkiqfNFbWcNDAuPmTNuD74SPo984UZFL",
  "key3": "3RtaNsUAQvXm4xc2Z4HvsRGPFMCPuyfKFPg7o77AQtLDkUWEJmRGACZ8GDhjQKB6U8KddbMzJtN736WkomcogJyU",
  "key4": "3n4fNT2mGP5CjXLLgv1p6pkXtVMcpCvCz6SrdEAizsK9KeAQ6QVquvvHwAC1WqCUzuvS4J6CCxFqKghpYPpQzre4",
  "key5": "4deydfTazHUSYNr1kTkwnzaBa3wybsRRMPmko1gD1wP6jBrdnbUzB8NFJAnwdiEYfRwAeDoL6zwAEsyQhngkjt9V",
  "key6": "RvAhYg3CzFF3A3Gekq2p5q9ZWvvL7WRMyfwwkXDJy4wRucRdCdmHaB5p11UYbAnjr9LNweYya7HKW73bD56GdJy",
  "key7": "HykBZVEVZCodqnPQeGFqyjRa8q67K3HJNfhdyjypKTyeRFKWo4mwsQ9S2fdL6RGsptZrTrFRByv81udjiRBV2xD",
  "key8": "39bUXio5MysxarQdjouw3HSJ1XzZpN7Ma7UBn54rjszxfgQxTNMHFZ1KeN1hrTPUM1V4qa5xNZ4xE38mmvRPVa5Y",
  "key9": "3dDQ39Wd6WHoXTSsXj94ee3D9tqTyv88gG7VR4EVHLSzQtNWWoJb8UCi9uub7B46WakWxpFBEdARFH34SYUBnJYp",
  "key10": "3oJrsfKqVLbdh4WaHYX41KsGKeKcRaG8KK1RshjAsbjZhKJxiZtN487aUVMDZ6TErAxKCzeqELyGazyWJT21GkJX",
  "key11": "4PGhSpNxkz4fKBxDgDpqcXmcwRe3qCxpodMCmoiF4tkgMMcQ2fZ3kXRWbLMdMXtjGiut4wGSJtV9U3XrGxokuN5n",
  "key12": "2EcfDe38kZenuQ8XHdsK3Cg8x9UqNCP9N5tMDRonC67bwwvEYJDiwTgTFrGV9978AtgRdfYNmE7hHrnTJhWFXpz7",
  "key13": "4yAxiQ86cD6vwcUmssQtvUVABSMtExTXR9pSJV8T3Q3KPACUKvH8Jbe2gL8BwA1UHKAcmTMV5tLdNAS8HqKNUqQd",
  "key14": "5iKvDpK7hHq3F5LUvvhvTf1aVMjvD5wB9F58D2t8hBJrKutx1AAYqtbGn1ASoDkKqjFv8umfY4kypjCc3vmnZKr3",
  "key15": "UXLUW8nDHKUPoD3gMXJeiUWe8hJtnzV7ZZQY31fVfTJSwquaTakvmLkcbvBfBfjnWrpedFdZyE2kgJnaCc3pTcJ",
  "key16": "2JDzTK9qNC4kjDTyCXbVo8bc1SHcZmatJEQxGu9piRWCN5L2Hqmfj4bQuLcZwT3rjfuXtXyRa6qRetjmFVz9gjPR",
  "key17": "4n5T3mugiPYxqozj2n25mZ6z9K3HnvKhF7F8N73ycB9ScdisMpUW8XFE6eKfCQ4dFpSXzFM9bQxwQ8UoLkiJ72AU",
  "key18": "uJ9anyAQgFPKPkRKPa6hh6DdVF7FN5oE4THsYaLLMEKQPMGb8T2LczsTexMmLzeSKT9YFbtzmodG78pUMQXzq8V",
  "key19": "4WAKxYuKLzwPcod2Z1by1w7BpTM77c3379snyuJ3n7MLHyVv7yh6dv9JVPUBHmSaiNdtmZmfKJ6fSPCcne4YCyZc",
  "key20": "2Dv2J8wyj9TRDM8rromxZWh7FPRH4u9ULpMRUYXCJwKA9sVZdySKgMrb9Ur3qWRDdAYiboQ3DHbKXiwK1NZkYFJt",
  "key21": "3pakRvbS9iD1PjXkgAY4KhzZg5pq5CjBR29HRzoDkb2UqqKhEi8q87tuvS3EekcUEo9R8PDwhPb7jGd7EFsMhUVx",
  "key22": "3SkLY5g1USKD4jCnBi1QpsbUK3Hpje8FcTKhZBVFTsvYjRunWJtGHHpydqqysBpovoQR32uuH7LuSvJYooGj6Xq",
  "key23": "3tk9SNPtKEk1U9frTXMVGj3zpaMHVGvgghh1ABXqKVkdzwdghkcEirdbZniZhkcWVpKnk87Dc1Aew5iaVJNwKkHj",
  "key24": "2jpEuvTa6zS87Hnsz7tyMTfcmtq9HuzskjfZ5VauKDCzuANMVbJrnh3q36dcnzqXBMLdNzhMBrae2mUk822BLqRb",
  "key25": "Az3uvbDvZUuQScScHdb4DhazGxG7LEqPuNESY8EqR4oUvgpP6yU1Pe1TMCsiNm1tHj42KdN7mBgGedW83646dV1",
  "key26": "4Juj521oyCaF7Ucrf6ayvGax6NjFwXzJ4hqHSWQehrEbYrzEjn1YurV4vHjaXmCffofFYnczfe7MEcRy2KqWwtZh",
  "key27": "5ujFCPWAhBUJRzw88i7GG72ohD1Mr4Fn71shuHELtPN6tKF9fmErSRM46ggYKCPnE5NifMUzXUMgAMHAiyPJXkvC",
  "key28": "2mUJjbWqfBigP53VP9x2gNvgTfguhzduk1ZGWBeWGERRAWYrNRjBCGVwNfgwk9snpfXB99CuRuHvnCGQhSC6Ph1N",
  "key29": "9thqNhjRMjjjQSJT2SWMDoKJeNowwq7W4sXmS31mdw2oapeCJJLtxuxENZoLzecM6wJnYz6nhpDhkXj5MRgcS2j",
  "key30": "5HmDgNTuvqgHUfGA6KTFy5kFCzcf2jHVaaEcxCRiCueoCwsQKACQwbsyjghuGLQ7Snv9iyWBzi7umMJSDRWaz8bM",
  "key31": "5AQ6jfHxJJcrMRYwoh9Eu3UNGgRXueR1MYgbxAGiuyKcnCz18zCUpAcSXvGBEvfJSaKt55B4VSPtH9yAQ1fh5be6",
  "key32": "czWNcNVZ36t7WrtGfXGg14hSZvHCVF92bN2LSonNLsTQZ9tcnUGsVFSz1HZuZZZMJQpDbveYE3Qoz98zsd799Rr",
  "key33": "5C4N42moroXWMhCdNjYDmZDidecqDsDCJWfiJ9CtuE9bG8TK8VPnD6jZes4feifpKutg3gKTRdpCFfVUNaKLGjyn",
  "key34": "PeZB98GAgoEdu7Rapk7nd8c4V6wmY9dnBsK3gHd1B4kFMLcnZTGQeyBKGwhXzNL8zYtq2DR2mSAuqBychWfWkpf",
  "key35": "3wWzBqmHse84FvtQgo2hGn3mr14gKjU6AnR5htFkUGGJsJT8ojn6aLEHwtPUEFgpgbjYmKvHGkHW19cYihs7VXuJ",
  "key36": "GdiDQeFtAG3TNcWZ77m96kUmLUXXP75pUFFtMXtLaY1hfZbazDWN6LLvy9AWAvkkuCUKwDg4GqLjQjo9F9JCAwB",
  "key37": "2SVVJ7uNgNCGVW1MoATRCoCUNbq7P9Ni5Sq1YNvGWEhVykxR6ohQnECwmdSCqVBsknas5wZWWVvb5mjDVsVqNE36",
  "key38": "54dL3r9BinBxuEmF7VjRaiVB8abhU9kkcZkKqFB2mV6bRR8ce6aNPJVrmr478WCVnL4iBjP7vqGNTbrCsdHPaQx2",
  "key39": "61ebddSXLBAdEnkny9aMKgjAtTUK23ckTGYkvRXA4wkyXHdmftjSX1BzmqLxkPnYUBhQyCvwznm6kMnvmStZmA3x",
  "key40": "5oCD62PDv8VTPQFH52j5EFQQogGKZKp7EAzjw69KDiEC7ZRDGDdrJFm8PVtn6vwhwkPKUdfcJcEhiUUSwZMkDuCW",
  "key41": "26Hb4NFd7d883Up24uVhrJXHqZzAEtJcZqjggsSEosmCHaWiua8oMg7N5F4bJXLsAqQvhkEmb5mn2bZihpJXZVZs",
  "key42": "47nNgdCGEd7VnraaLyvnXAsM8uJXcwESqcVuP3zUTHtWDke4oEiedufN3BixRuKvfN4hsjD9F71Pqcss2vXBCzFS",
  "key43": "fPARbjQkDA7Z9JPKK7sVFcyUjs5ydUxw24VcEwVCdpMRTffzt6bvFiU2oTyD8AdRcBpApxDRQb9MoYYG89gti5W",
  "key44": "2dkvFegmAbDWnAFTAcQx2vKPocrHjBKPDPdUk3aH2SsjbPrB8SWWH9AwBzNz71woqBa74FYCrEqQrajDh8uk2B3N",
  "key45": "639vcXu2oPPeKD827b2STaHa6M6RtkAUe9Nsisoa173CGacuvttXtxXX74UUXgn8v1MvyAoGMgeveqRqei7CbhFX",
  "key46": "5ZFczaJ3SyEY8bhVkG24UN69Nik8eSepej71GoAbJEDzyeS18hSRxMosXA1KaALiGdHxv6R6VwYK6H5zdREh1gFz"
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
