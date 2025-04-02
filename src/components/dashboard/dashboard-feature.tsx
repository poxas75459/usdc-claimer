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
    "2rCHwXwF1tW8NMG6NQesfxWTNT29ojfd2rjSBT1ZTpkyCirn9fAfDFUHtGCeCEkKskiiLh2ZSp9HPvEVLi5ieavP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "618r5wAMphCahe75Wf5uFAj7DmkYzjaNSeheg8PxRZxR4CNtx3rp97imGutfSx3yWHq8f6ndySVsg18qwXTpbRUq",
  "key1": "57mHVZiy3YFvQ47eF3wSmhvfPXUAKitCWmZ9Pfmx5FuQzzhUhoxPBPkvVm9UmP5MxFjKH5wYMgXmeFt4P4o1DT2a",
  "key2": "4znHj6pZW1uT8etDvhTkmBFS29BtDDBvaiEEoSfP2SqazZ59iYWjj8Qyf4FHvNfcZYHGrT4DDEz1WybKVPupwVqM",
  "key3": "5NRv9AX4natm4An3c6A7nPQYp2pLmUkDQtisDTAdjPXcb2Xw4Z29GH4Q4V56jR9rfwPfkYBdwFCQaUyT4dCBCDQZ",
  "key4": "3KKU3hAbUPGoR3BLkBFNCMNBCEr9iewndLmk4cJC1VT7wWa8ikBmJetf3ZeWZzkWCukahUpPdT4M3GEcwJRkwkgh",
  "key5": "4EpqZ46xAdmjKDHqqfA5HpXQvTrLwYhGboLajYADnRmFQu1FUeZ4vywyFNRjW5oVq6PNr85KK7RNhXwaZzSFKdVw",
  "key6": "353aMZMyU4sKsnwkN6EHqZfS7sw9BBfCTNcoSd8GY3hfGUdfFLfjuYuVhqeBhnLD4EJ7weJawZ61ic61G6wLPHqS",
  "key7": "2YGzSLg6iTkqdpkC8jk2R9tLfXHR8kKagJHSPR4yth4gqrug5nYLFodXFo1WSkZAWPVDH3W1RCTUJ2N13qs1WeUC",
  "key8": "4b6jXYxpTKi3oX2XV2uduc3Ce7XFEH9UmgkpmSjkLY7HozifA98T6smSZBmecTKMGSe7xhUg7JFp7YFggG5XErnW",
  "key9": "3uVkZmkGnoxd2wAb8gJoCW4AwjrVJDcU3Vfduq4DSucBDLQGrpeUJ84vg2K5s1dRrVh83CiSC3T8NKaQRexeTHhP",
  "key10": "5sKQL4Bnzo68FukVoBBLpeEkmhXtd2szT4mWiN46V3mZL77TEWtdbG83R4997V5qTBrVxwf3tHhf3scsanKL64bu",
  "key11": "2V5M7FRPWFrCPEquQn6AM5H3tMvhLn87cwbhhoFuDdDeNWFMQepAxriJB7yzAfK8dZRdCJ4dwscLBWNaeyePwhhN",
  "key12": "5ygNCdxUA4hyxKXjcBhdrG4Z51rBiDqi585zGCxKUxGvSXtupowvyjmvzMpHzkw83kiZKpsJrBgvRoynyG1yQsYf",
  "key13": "5Lf96DxfX3qLzXbEJKNdh4hQkxEKCqg5UcGBKC2Q6veAk6X7aQZ5UW2sTG8p4PzVsKPEpzh7b57opAxtcBTrqwjV",
  "key14": "QngnjePNxEYwi6dLDHm83ZtfbdkN1UF5p97wLFEV4PfGRLFkjjxzbB3f9FKwhRTaYPCdXWWr19ECYLeL4FRsQ19",
  "key15": "46x5n3ydhhBSVZU6YKg2MViVxVp55vh3rk8z86GxaEAjrq8jzNQiTk8zaCRwECUCvXbXUtmAtvMJgggzwJSYd9gp",
  "key16": "VUNyc2ELJnjLsNHYgaJaJc4n3XuGVnrJHUk5HFF3nCFLXbtkNS1uewPF8eQq44VouzrL5HBxyJswLA3gbHEt2gk",
  "key17": "2QJjaTks5f25CTnad2AuEtxYjCCnUBTiR6gtjZmN4EkzN5uNLeNFPRpgNy2jsgnZkLCwg7mbHULikz7nrfJJLJH8",
  "key18": "QhnrqTyAQ4YdddzYx1keBAEYR6Vj46boJ7THAAjBn6Xm3id6fHWwbP6Bo1fy2XeKkBeFKEx1D35fgk8hRc6QZ6T",
  "key19": "5bHukx2DCQpLzN7iWLkYiHBmvZHVEe1WJ3jZrpRJa8fyed15mAnPEkc6bd2TLJsYGVsSZ3ddRc7W8APFhLw1vxoq",
  "key20": "4soG19rnp92qKgWczUjXrsqpTcyQ6KH5SRQTxYuSCgVbzx7YtmAjMzXsyQj7fCUmdmpewTYhyiDbqcZm5UPmXENG",
  "key21": "5eVUmUN8LoeCS4YeQghn9jyVqirXgsFYCcoa9nTrpEynBqbQkY4aVozmGz48SCLrzcnDGRhf2SoK47aodVZC3Cvr",
  "key22": "3HXb71Ed5FGzf6f6qE9xADVTf14rvDZ5ZbdESsbBWiQGRCxzqQXJeHUPCm6tfT39GZyrgpSxsride8eUQMxvT7QJ",
  "key23": "2ty6Ztt7H2rwFjFQVLLXZVpwom36zShHfNUmp85WjGf18U7HsGFbRwe4s97i18YEA3rkFDAHZYuywzjJJMwkADVH",
  "key24": "5WB9qCGVm4HrND2xjJAXwhj3REnqqbB6JDDtx9MHpao5Xt1U2gKoJcfDhoPMTHg7TmpFNpfi7cxYqf9XKy3fRaU9",
  "key25": "uKh83rp9ZYdatznCfQmf4Wtn5pfzhKdD1LMwQuFC3gcc7bcnyxkLMzGnZUM1J3TaLntmMBt79U2cj7kxus2wUtc",
  "key26": "oQyKehNs3rHc2SeGdkFM1MVgP4Qo2e6JTLyYDKA2P5V86RRj6ybCBCTv51bacRwVdF7SQ8u1B6LiumWnQFk8Qwj",
  "key27": "3xcxNPoXbfGFpD9PTQoFDayYcqgZahXtSBLoUSo77QnuBwBiZbSFxnLXjSmQGDbUEWQFhPwEHffbs83MFPBeTTji",
  "key28": "5vrkrUB7uhTZYpbwFohYqrspGfBkzStxGpvxVnvBJidn6jGDhdHanLzSyQ7jK98uq5DzVBF8HogKkHFXqsw6zdnZ",
  "key29": "5JHmJiXJS9WJjXLG21i9CPDe6uAh2mAesKGupTFG1szrH5e7CKaSR7aiyghYi7q3pJXV7PRCQ89D187ivud7ipES",
  "key30": "5HTQ5dYvViQG6yFxa4czBs7A5A85GC9hQqom4ckwYUKrf1srEWVGXtEvgSuZn1ktk6mLai63oeFWvow13WLzjVox",
  "key31": "ReWeqjQHZRNNUvS7EZSmezdu1qCydL8AxX5vk7H4vCs1JwQQhA4JtRiF7kfExravSSLpsUDm8wN3jSR6uYqtkTs",
  "key32": "2HKqf76o4kHZ8HGkpA7tcxnkk4WutdvnFj3WKVPUF7C1dxFaQsS2pHCBt2S3UC4JW2K7EhCKTafeXcovyPrL9WVU",
  "key33": "5WR9DuucYwHg4QpP38rMW7EiTRE6o2iTJBghwURK1scDXzhtko3cMwSoyBG1iJ3scVWTRWNAb7z46mg3nFYLtwqR",
  "key34": "28nuXYvVXvDNvVeufNxRqLdpQLYPLyTakGkWFuSQxTi1F8CuUagULqHuqZvELCywdNYVZq4uzDmeDxRRbfNaVSPx",
  "key35": "3WerPG2EJm1wo8XZhHq7xawn4GiE73zW5x9EhPYvko2xRGMPFTMBoqiU4S6L6h4GDdaGqeXQMWgR64ewRG94KoqM",
  "key36": "26mYnroPJGqdEeYM4o6busPzf838YzrVMH2AfC4Kqx6oRkPSbqZjBg9XGvrBwZrPo5FBBLauiAtw5piqDnmDRaa2",
  "key37": "5gMPEgR9teJrF98K3ZHy3e6dcavk9BSwRSE7iyKYV6Q2WtvnoW4f3BFkf4GGSWBgmWqmtNukGU2psn2LRHMWHF3y",
  "key38": "3iHerrSVX9mrmsiy3A8ES7Ux6WqKuGzQHDv29BSvmoJH4EuQHpoMvE1UKMzg98kAYvScVhFHzue9DeVAWm5SxUNC",
  "key39": "kH5SFqNNp2UBSy79PNKnZLE4KPpHwugCxVJeftg1tWi43UqJ9vXkfgNSiiSXdXevdZRXDf3cycRqSuk8gKQJVyL",
  "key40": "5Fu8kKt3zsCUMxvWsKSRchUYszTY16kmeyz35nkJCctGbPmft1D4FrbFta5Q1ym932dcF9M8ncC7MtDjMCzQTpxc",
  "key41": "4rsm3TAzPDwW9Lx8UP4apJXBRG8dKnWpnRuBtYWJ4nvoqEjEUyHDfL6UXVEFmn2aN2TBpRzyQv77J6L8vnM9q3JY",
  "key42": "UrK9fBy22tdEAgBzveGduFJEpp9cX5WshNSZtpJxv8xASiwZWifRUFvZ8vspnZvrzc1ptKaTq8ZYB2ZzzPHcCwP",
  "key43": "P1AjGdJSQ44anxzNtH4JYimLQ28niqS6amQxzwJggb3mBvS2HBxXuS2Xf8TKGA1KjpbTW5gEDu4WFU6CGzz94oE",
  "key44": "5gCLZS2jdTRP9vJyaLruRHNpHkjyJJgzgRbuosKTo8vkLcXgERqdL7mEc2WWqK4THaj8JDLAjw6owwvPMwpQ9AUU",
  "key45": "4q6Qa9kvNf8zZpuLyCuvwTffTmFe6EBSx2FuYXjhgjVbc8CiEdc1y1ZCJ6qenTjzckWZrph23e15Wz63V8kCPuVo",
  "key46": "4Z118ni7sh4WPCdA7kVXPEHrzoakHmBqaUvZRp9p2aiaXAPn8W23Ud5CANyoY8yXvCvQtumreBHYEL8YHzGNNh1G",
  "key47": "MEHXEHYkGByJTxPJNwXETaXN1Z7SDBvFmjVUN2z75TbB2TwWadFQi74fq15LemkJUJ9L7z2vL7XEYy6VLizKrzo",
  "key48": "mNL7Cz8khr8TdAoYQCeDhstVmNwwp8Koe3goFrEYdKKdEX2qjaMMNNdTEzhKm9t9NuGUatnB3PqKnVHKxbmxJ4g",
  "key49": "2TZSbsrNJk3Pcz7RvqbBz3taVpAihL4juD1ebpMGfSogg7v6Dv4R51eRfMPBLUs7tU5j1w2MVkJiFKgZBmCNy7XL"
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
