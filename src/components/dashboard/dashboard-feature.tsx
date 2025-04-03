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
    "2j63QCqqevpbo8ia7B2pNyohGDMsea6JPNmLwwYDwryb33Xf7F3qohVxicpzPbPmLtD7rjn2X748ouBDvtHZT5SU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NEDq52EKfJw6qj4ig8kMpiJWsy5Nt6bVtg2beSp3VaoXsV66qXKBejNbTvFAp8CToeyyjs1GJMHACwe2fBQNPcx",
  "key1": "5UyLVHxyFdNBMRCbMUBWHSXRHDH4VYvNRGoC1it5oXcjtGFW17dWCjn4HorgaJ4ZYXHAuHba8Dey3ThVkm3WHaMx",
  "key2": "2RkaqWAHrjFaQYuGDSPdux2k3WdrpzQx8h6vAPc6He8EnsuDpCqNtX3GFQAvv98Vz2aaBZJ9gEfYugQnP2nLeUDj",
  "key3": "5a5JjEDR2eAfvfRwJk7c4MfP5wHJhfyaSPLq8wZpDWxT58pjFySKZRC2s7TdGNx2xuRF854fFv2mAMdpqS2VNgYs",
  "key4": "4Ue9SPgLWHJqGsQQheeoMteBk3rT1hQ4i4vKngz1SY1jVEgiYuc6WWSnBb3dLYXBLBsFjFpQJKtYP33Tuug4Bf4r",
  "key5": "5iPJrAE1NxC2z1TMPuG74vb1MR1zN8KV8bqrg1D5fFyqeeSpDj5LEyyAj4BqzTVEbjvXLLCAV64YftoEPRXqypZP",
  "key6": "2iq5RvDZcgULaK7rS5kkFtDC1aQudPUGs527d1KWTCRGi7zx3ZNvumNo4nifLAbo1664QbudxjnxRDQjWYPfbZ8J",
  "key7": "5nqiqUwsSPCkT8ortiPdq2f5LzNXQv7h9WNTRxMZdPpdu3cpwU9aXeXLq3ktEsN9kGtzmyo5gNCcWiPwSJywLs3S",
  "key8": "4398UZBeeGzESTfSV1WWe6tr6pVuhT4jPaePB99qedRrzmm57APbmpjfq9FAnuehY6EewVeBr7oe1ysoDpJ8gYwi",
  "key9": "2LiskgJcgAP3fNYDQNdESFjtFydj86aS9RpkqKY817pR1VTT9QpiG1zKCQjJtE98YtTJdUoM1WQ8AGyyWLR8SNAi",
  "key10": "62ca2n1SEsvcGdb7wJdHyAELmcQedAC4WE6QkgUuECR7ahMkYunDRAnZtkPh4Qo4kkGe5WXzi2kPX8bSEwPzryut",
  "key11": "2gbYkv5dL3EK5hU6vaFrzSiZHwXmP5QMvzokW6FVSHF1SJgnUNySkzGyzvP6drvRx7XPABRGGWwDc8o4U9DD6V7c",
  "key12": "2DP79QcxcF1U6T2UbPKEVoNCifYHsBLiYzP1zs4tc8s3JS9NRQJLneNTLzHCmwtHX59hnD6bCST3QC3H28mrvAi2",
  "key13": "2ZxJBcrkHmLyvJuaEjUp68KrDemjvVuBDNvaiwazfjBpTWoEFFftYSd4eRikHUkzkF9jNg2MrMvY6cf6ZEnM4PUv",
  "key14": "66BpRjYdMQWfWDVjKUVRAkSgXwN1fgL5SgTZMeGK6YVpJg5RrkDrCWrFKM2LDfsEeyAf1EwPFa3NJjQPmcdK5ezv",
  "key15": "2er4SoAhNWM1AX6pnahTh8yixwpE9dYZmZnfURivtwNxTqyLEewKhMHXqRnytd6bEckcymyYhnnsqq4KTQduFXYs",
  "key16": "YPP3RK7xKmd1M37utn1FdbzGkfa9tSn5yxsvjhsSukira7CCg235M1YzWb1DFMFbU2Hfr7fBgWoJES4HkVZChn1",
  "key17": "2NM5pNPNWiSsP55R8Lce6aLqKUE8m5szwBREe9GouWc7veVfxeuYSqUpaJwcSv3dQuy1Uy48gUSL4QqoKC8ZWfTA",
  "key18": "2QAJc2HuqvLoQr3e4vJKs8xNnGD8FZKnZZBKbXHDwhFydF8fV7t17PRKpT3gNiiLVmRWiaF3WVu6PVBmmafoUHRv",
  "key19": "3QTRHVtkvLFGpBgRDxHnDvzsBosQL1bdKYZVcDpVGwkaiVM3JLiBuYksicT7Jeod81AHCBK5WrHFkhNS8xWxC4Wz",
  "key20": "2Hfyn26KVrh8D8N3UjyPQ74kReb86TNavYtr8b41GP5KmJNFCwQP7fQtd3XPHekxqphYXhBGDYwFQ2QJXjtDN2d4",
  "key21": "b7mH1hzgx3ZaHzLD2ee8ECcFkE2ydPcbqMYy5esTv66rBho4tUEGsgUtsaohxaGewHw7rER7U9JkZQpXkjskLzr",
  "key22": "sZQLF5tWpeUFPJ9fa2Fg2H5GMYEc8c7PcJvdgUtWELZ1gF1WiWFcTzMLVPCLGXjoYmsiVSWZ2uV2gm1wSvQbFzj",
  "key23": "56tRFsT7AxXvd3tTJDgQzeyckC1oGu63Ud7veAVaqTnYRuAbd9N7bfoybgJUFmSJGFdpz59xnFbQC9NUy7LyyJY1",
  "key24": "2a3vK8TV6SwB1KRQEBPPDyp5gSkc8LUWdmvMYSwrDLfrD2BrLmTGmtEsdPD8tC5Vs8GmAxi5fe6ysuHqxif3ABnA",
  "key25": "2if1FYktCrLywiZokxae9B7kbGJsewsVAhVy51aiwaiE3tCVEuSdeBTeY5cJTdfpdvrG6yd7XLqySZFajCBGaoC1",
  "key26": "3eEbpdm8tqZxTuHnJUUoAYxcLVxtF4sZrpnFH1aqqNoWCmp3yYfhVd2cPATxnGRGW3PU3CqRydqomDZfKsQ7vmee",
  "key27": "2XLFtqgbsQTdgsuM9k5krWwQY2cZfpR8DpjawtyeScGbFwcrPfTE2N2H1EczP5VKeJVYWPS8Gc6wXpYcFYbvPwDb",
  "key28": "354pDEnGFckNdaJkAJUvxTTyPnm2McRkKnWnqzxn1PrN4fGTCqEh5yXDbc4U5aNQZSWm4NabUWT9iChgjKs6M3Wb",
  "key29": "2aiLUh3VoZ4Dj5T3aMFjnQrgsUDEjXpt3J9Qzc3FQPxtwHFvtWgcjXBif6ivoLgr3wKX9yPusCdtCv1jd1YDwgst",
  "key30": "Zeeq3YhFbozzLPqYEK4Q2wquKNAND424PCNQ7L2rFS8LdTyf3LYPjLyfr7bv8UJWPxVuNNqkzngmxAa7apTbN38",
  "key31": "38mr2nVt6B8jNkhnLFD5q9bZkyYNdZpynN1StvUmdeYpfPPvnSHpegnRt6ivBRnfmJjUSRKNKLUFa9k1ZB35pQmg",
  "key32": "37EdLVu4FuPwTt2Yf5B36kARMivjwDSvC8R4HLdU3LPFxa85zwhfLQacvCCRqcX6zDYtsLevzp4ioBzrMEa1WEgg",
  "key33": "2RDTycKYP2aHfoZ5LN7fedMMJLfRtRJQjKs7XhGQ2QBBeEAscmq9cVYxv6qXqrN7Bqhatnka8A5yHWRjeF244tPE",
  "key34": "4tYTn6CTC6exmMdJtJbqemi5PPRb3UzBx47Lc4ZmYJvT2kWHGgVuLcqL1mHW7DbNKorYtA3JDQawrn2bfvbrtLaL",
  "key35": "28gwcL2HaxuMV1NB5eyiRme5yhtmo84rAk56EXJm2cLa482GiEbzuU8RBHNfdanxKZd8Gx8NenWjbV6QbB9WPwVN",
  "key36": "5NkMYKTdBNeDi991FdMCu8iTSrSiXNRYjBRfjJyi6J5TzoHHtCqc91KerBvPwKKX7wPbMwQddoJjUbjo8JASMQ1o",
  "key37": "4SK99dXdADoRSy7maXgZnh5HiXCP1y2iFZutr9AtmfoDYmxQ8Zfdk74mjoZuZ32k9p445uuY7TDTNa6REKbE9gM6",
  "key38": "afnJHPJs9ie2f2n2CMVQcS9hRnoxxCHtr5HQ5hco8TpPUJNQR5Zwkb5dmLunXzvGphsYjHTKJDnFYv9CK4bCixj",
  "key39": "2E7ANAZVfv8mjfNmaJ1hkwR1Y5R4p9hnvpeTPTF6qo8TweYSJGPhQAVmpX1cCADzDFQP6dyYyDKBV8FbV4pgmYeo",
  "key40": "xmh3ZZ86SiXSQnuaJH1oabg4SrJhpvNhNYgWNaQ7KmU88m2APqWm56fYgbxJgNhFbMkED7SbaMcZmYj6ZfNr3ND",
  "key41": "34Mar6ZjxRb4cMgjXAcH1hP66B5SGm4HQj87Pu2Wxcz25ZEv7N1bxdF9g58HAKortLcHksW8prQ35WAgtUuAeUnh",
  "key42": "28BAPmujxjDHdr14rQUnFCJWK6TjdSJDAM4XuwcmbUeqWmbwYRNx9cPuLX9yittiSBRwWkhdvqXWJumj7akcLrtr",
  "key43": "4kuLjULR5onqUsYAf1hfLccb4zuB3qRxbco6jyiHj4VZc1qqmujfMmDGXRXK7XcgWwzeAd6uskD8bpTGS963aCaT",
  "key44": "53PUHwe2uFi8PKc2EfHYB63VBUyzkS5MMSE7riJLLgPYmFWGedZ9QagyVZmS6yNnJcojvtbCb2gjXzHYS6G38snm",
  "key45": "5PHoJVJ5pHgH8MPLR9iy7mrjBA9ace4btbDH4XGTyEBDhDThnfRCgVteGi7bNVzaDLKJ4ngpL5NnWRxoqc6bVJC6"
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
