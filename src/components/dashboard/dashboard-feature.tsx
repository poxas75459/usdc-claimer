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
    "4Fp8UR1dA1K7juDGoDqeXLj264yE8hrXN7XoE2cxMqZcACN979e8BHygcoEoLmnVYLjwaL4gwxpePUK6Sd5QKza9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iuqUqtPWmFMeEfZTZFF9iZiGCAh8cXJxZbMNk3ztPGipE2pdjCHVKuKZw8d4euz2u3vt1E9cytckwVsVDhPMuLN",
  "key1": "3Fpywjjy5Kp2EHZQJHFiWm5xhS9RpTAZ4VVEcuaVYsq1YCCFQVQ1GM9jxvp58Z82fqsc3abwAt4nogvC2cZECfkv",
  "key2": "tWAQ8rsRSr5mbsFs3UqC6v3yCLVmgtCEnG6kRzjmDnCWPaeWnDCrssGGc2tGtbffXCx3gfwGiDhiMm3Ws3vXHrG",
  "key3": "4fBbSEehRiMSbfGDF5XC44baDEwDDNfrGcGP1je95iTHzLyG3bLmH4EzAMdUudM1U3JVF1rJHVW9ksYJV1ZRnMvh",
  "key4": "T8452nF9yWSJmYh3SC4MGkAVJpxy2gFrZVVDDiZiB56w582ZMRRFMmhBeXb8DrjRd4GxzzP7HHPZ8rKGyo461nv",
  "key5": "4PbRyjjznXhaCtcF6auKdfkAwQgnooN6GwReb1zmCPvi4Ctdi4T5GRJQWag9UZmMyLHrTJeyQkmm6C8mzXf9tcRg",
  "key6": "4XhX3zUxgcnrwX6k2FVinndDNXCoNPDV26x4RN8bDF5834LGUpK6rwDeywSj2YQW1r57QpkcqjpgjqEvbzY56mbi",
  "key7": "2zAnoNNmrVBfN1dZrK7rASePPyRQcsY6b1KQmP2i8by1pgpxdbeYtT9HmdcFPiQpZ26KZohPgXswTS6hKxP8pKUR",
  "key8": "3BJgjV3gYpxfGGhmjyhzFxp4ubAHwjrAGia9cJu57XKYbyvgzzx8dVpjpVTsobvEcNoZVK7iofkr8GSrHKkW1Bht",
  "key9": "5QzKBaQB9xsRfcgveWRi81CPx3DWpsYNG4FUtkBAXYBkcbPceKcCAP5LHordxJeZ8J53ejT7uyPGXt2GndfxNxTu",
  "key10": "emgLXWQkYhvPCWrmKxn5Uo7MkoHxg8ZHNiPWryJSq1Cbgjzt8i2ba1pAJfHtKpaLxcPZ4j6H29Buy9J4eMgbp4c",
  "key11": "5xXvSaeFV4kefmf97LKEtTPDPqeF4wXrSWZe3dExs2JTZGJqCLwSdymizws1R51LLnKntGE3qp4MxB2YpRbChj8Z",
  "key12": "2kAiSndMbvu6AXLsM8aQJq6XMKSxgH3bhjJofSNeqH9o66vmoyJbcntubQuEXLG9aijSD3U1c5ssucjoZmbZnkhD",
  "key13": "nNKhcGyKE1TUjQZJ4Z2gWBtfAB5sEZxoF6don42w4HaFbAP26ozq3MXi2WC2XfXCFP95Ep1G9BKMMRxeYao4ujJ",
  "key14": "54bLccNXp6AuLm57K5nDmA4z6oB6YUpEzu4YcFLWXBLgxU5AqxHv1yJCRYaTHiQnKwTQq5ytp6XYjHDkvKHJQUJu",
  "key15": "3f8nqEP1NNuEXGwa6DGWFW9hQfNPjbtYQqtxWMgscyoWmHVWCzmnP3XugdxyHFEfCdTam3dtusgc5JrnR7VCN7Dk",
  "key16": "2ZuNPGjKqe5TzjMK5hwZcLao1RuX3h3SZDY2zj4145FEW5ASbWfUxTHKD7nAofrKE3JCFV7EWKcrPFyqvFzavsSF",
  "key17": "5h36F8qXYJqUcZD1yPmbtAD7ZyDwC38aKuNBXbWeZZ14tu53mYD43XtCzbGxRXxEkiWhsWu4ksidzLd2BKXJ5qPp",
  "key18": "3ZZXD6fZrUWAHQMjG3cjjiVFdqC2Qkkn9wCSCEzeV2tcrX3jdMtfRmgGLFxmVd1Y3Nb1QTuFczkC1KHMfaYEsFPZ",
  "key19": "2269NWGNdFTG9ASybG57izQpDoawx5enQ87wbtRVRJ4KoVWR9bRghdwgPSa9tEJEQkjdLipzVkWMHtkMNk5keCdb",
  "key20": "53tS4jxzJABxqXVR4xpRHJ44Ch3Zd1S7WnXJjMt5gsEscT8Rzoi8GRup49CB1ZEUnZBpXFYMiMsMeXeVMBTzSv55",
  "key21": "2T99BZ8ihJMxjpbAzTJoXpCwpXB7QQ7XvvZSvrV6mhMuyukv5bZe64SkwP3UCm4AN5TpPXvfXHgqhncLxMmVAxQC",
  "key22": "2VbKPdG2pAq1GwEsBK1jv8wd3dU3gnbvTtHJT5axLBR8tuNbNnmEANnZCmzrCGTGAiApqbVZAAKYybMDZRFMxWWJ",
  "key23": "5XA9kGpAHas4DZi3ZPHKjnPso2gN8vZLTDvCpznNXt2qqJj2VJ1CkCqaaBU7bK7FuWEBpEH6nncKynqe6qmv4JGd",
  "key24": "3yBHRTJS6ZpQnWwpi5GWM2sQaXWVdVeQ4wNBanyePkkTD7UPQFhEeARJ3YKThkVtQ2jds7gbU5P5Yqv2dvJTvBrn",
  "key25": "3UiypAZw8iSCqDhqzs86S4HXKvyd7FKP22SsNXbFRt3kjYjnZ4w2gERt2gvah4RkdAefHSnSzFhpMiEj4DR3Auc4",
  "key26": "4dPok9kbZcQQDwSAjHzhcTZnGXEqkLL1NSmgnDiCetbJsiUy9NSFyPNLzNPiYgHkwUiJao5s76VL5SxoqsCB6VG1",
  "key27": "4zZuv5BoijBdDkGzcUHA45ijdx2xs67QDf4FHLaw3F2mVyj22dB2JvSGjGGj7C1sSmeaf1a3ppbhAH66F7UKXLca",
  "key28": "4U7oBfkUHxa4k71qL2ug1AbXaweJTVGwQar7wc96jfv5xetqnwxdVoJfcdNr6PkYgZgWtNQxmrC5yjGmZdpY1fTD",
  "key29": "Biu6qMbMkLcwwMzGmdTCxitfrt8yG1wz24EyxLftGAz9uRkHinPRt6d3uyoa7SV8b5Ex3Kq2kM5TjsXYe2FakZ5",
  "key30": "25MTtP4SyTz6tPoHmuPPKp9WbSxQotWxcyNJm6xr23EvYac8NM3bxhogQ1u4GqJdY75CXohUYgFUv6RGnNn765Cb",
  "key31": "379F3ehA6ZfWXdTMh29mxZ6ZdUYtqHZPmy2Sqdzfom6nKyNvPX2TJ7s8FzjzWjK7P1SXhxLN9niFc9NNVsjHqmra",
  "key32": "2M2Mg1mkbj62tbKnAcrqvGnQGBabEGzHsZF5DjsRrMXT9qqn7QxesECKqcQ1sxm2kQMUDWr4EU5t3nvKpnjySFuW",
  "key33": "4wXMCkWNr37n6EmbC6CksE73MVNRpvrw6qwipa84i5GN9h2wqNDXbqRiUjuTkQxk6zGXCKMHp1FYbTkAgAx1p96f",
  "key34": "51to8kSxoD8FdnFSz8x3c6aWwqyPyUveYjzHB7aXuYLqkghehScgR3kRvwZqvfUCT85447RU1PahbnqSwkHa7cvM",
  "key35": "42Bopdg9w6bhR7tQjcBPnVdVnstF1novL6Q1VKS4AtdfkSNPXFrzEQ8FYYfEwpJbGVfSyyTrE5z6tLkKQcEt12Hm",
  "key36": "5SHEN83ZJFoq62WnBNoBacs6Hdyzy2JRLe7cpmHfyZCCkTVgZYYN47gpqLyNcLpdGjxUcCo6yKrWsLxpWuHQLjNf",
  "key37": "4oJuG6bR7xMJGT1bnHyTFDzNjZKeGmbVx4oFnJmixNWmxtcukAVz9yqXmSN5nFFFPmNSWhzfRRkbMgjpbvUifBoH",
  "key38": "vvdmsQeQitVoXDnEvyMiScQ7iNsqAB8HzjmE5JP24Q5GUYmKUiaPXX9oaXmaHSZPsaQF7Kua9yi7arxoYFTmD1h",
  "key39": "49rUSRk9VFSTzcYTAvrdNKptF1SpzETd2th6nhYZiHevAWNyaJrJ9nxcu3FwtWNhfVUuefqAaewP41dBhrxVEdQP"
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
