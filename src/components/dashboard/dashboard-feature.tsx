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
    "2mDhy1GMydBZHjS6BmXxYV8GnvQAUppzfVRqWcrcdMmdCRnwU2cmkHF1s1qenXsmHJhT8G22YHxKDAMvrSJNGnjJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iB83MWuP7P3CVXn8bk4eKt2vLyHvN3PKrr4R84rGTvf7RBGuC5bUQHPrfLGKLDoznqHvgAGRKGMBK6tmA22jdCX",
  "key1": "55exJYjAX6qjv7Kwg3oaYno1meRmEA98CeFQtfsVpF4LUwgk2nbpr7q8VjWZJgxcvwprCiTX2SSQc1bYFJ5ZbDWk",
  "key2": "4iC35M6EELyoXwhg9L8oW5XMevnomie13UDPSUU4rtNj1DkLsjVQegwjGsJJtMsAT9LHU6SEHDX2rAGCLakTU5Bb",
  "key3": "2zEoRKV3sEnAdutEt5A9UXJkTKxJHexxbnQ2o5Xobd2nb7XnF42ehiFPArBv6D6AvzvDxyw16RDPzrjMGJac8q3z",
  "key4": "4LLLXKWtC8dSm2jN9W99A8QWRS1GKNBEis3z92w7cDvtedkaS2Pj2ZYdNcfTzBXUePnhwZoiss8Z23FzVd4hdH7m",
  "key5": "2YBqqSXk8ERF5p84VbrRtav3R8HmQKBPUQDmM3Xe4UczGydWc9TQTpWoav8Anytr3F45tsW7Tk5aaVndedLN1fev",
  "key6": "2b13pR5zJ7MDLU22vR1Q2u8TUejbDjihbJLG1zKknDtLj4FWkByBDuUYPLqawADBzVi1jfKjkRZUHcSBAzEfSNzY",
  "key7": "3ZMdA45k7NysrrohXzFwSTTXgBFKJHWejWQSZ64MEkhGJeCk3B8npc4oCcVf6bACBX5vzkFmWFDxEN6u4nPwPMdQ",
  "key8": "4HDnd1E9VmywaoT7B8uebH5cSsUdfgUmSbG3dWoYrheuTfQs9FTkfPKwjuo4kSzaxHsY19hZS3zhZvjczf8hEp62",
  "key9": "2nsjdombLCf8gqG6Jnfk2MaaJe1EHHLTP4BaFoyaD6eWo9hKuKSrpqs4o4m9ZT5T6UzexANiM97m3XXuCZtqMZ5N",
  "key10": "5ZLZwk4fEf6vbxQ4uzYXjwHZ1TyempaHSP98inr9CjWmYydgD1DwgvVPT7Jc26UdsqdomBmuFzL7MsqU7TnLqBxg",
  "key11": "3mg3ZR8RvfagUomDQ2aAdDFs7kvHGLM237amY5BE4pBr5FHzV7LRuQxdEd6CFzqtcohFRxKNDf7E4udPC7bhviWB",
  "key12": "4TzmmuKndypZnWxwXHqaZSbL3hV1W7bimAw8yt4VNKFmKKHB2VmX4uppYzqDYBPCnpx9MwCvydYr7uPFrpkZMbSV",
  "key13": "NyyohpjKqAS2S1Z5VsU6bqm7CQqPwZ4FJxiRDF24L2BG2uErR22qHLmKHvM4uRWzjwAC9c1mxK2KDhRc5mkUsEj",
  "key14": "3YMNLCyfq83R4ehXhm7gh1b4JqCpSyehvMyjEqmHstVBBJSV53qq9VHGGV4K9EomvhsTyG7cVvcpxXPaia3hJL7r",
  "key15": "5ZmYgyyDG6ZJhK2fbpX726kiqqLcXN92KavTaqZRgXh99UcbUmgviomX2RHFEgha8XtcjKzy2uByqYHpw1hquDtg",
  "key16": "3cbfAAzNQmGmhmZtLDT8XCjYwhtNQz7jML6rmh3SYSkf522ceYq9t6dtoL2MwjodXzwgwJx1N3yxFAsAQwbzhMtt",
  "key17": "2sZbLsy3hySgx8V9UWN7s1Lp6XatkMxatScKM8frYFz4LZgBVCjzEUfX29dhxMSX3gGgmRGhg9vnXkViJbpY1wqX",
  "key18": "3c2PuXh2M8AQB3evh997qLLXjk8RQtkxn16XUJ2aFdvags18P2jmvKBGZrQuycewDZ6yZPXyhMmhkZ6EHFFN5HJX",
  "key19": "5rUJXSiSG3Sgoj5xfj7VBhn6ZkVu5cZdqteFigDBpRMthnvn7Qc5SWHTb39eFJrz5b5qwkaKkUXftZxZ88PyNtt6",
  "key20": "3EMaw69kqSqGQhb6BCra7uExU5eJvAmid4MKc6cF6myakbyGvuyafRfovRt95CeoR9pjy7Ra6soqCgu5AT3hX1zT",
  "key21": "Ky3vuA4yoSvkpp1QcZrn7A8FfYX2SzQsWY1XityPEU5PUiL1PTqfBjW1vH6CsLCDwQicV9VMJbvjNgz8RJMU7ut",
  "key22": "2CYJPMJCik9mvjvF3yRhfQgdaCLFovjWvGL8ZVhyJB7VcbQZz8S9y3RfmGRUwuyaSubLEMCU8GqHSS2yCr2xA5gY",
  "key23": "4BZbfCDnzwSigQM8XPAJ1LBQi1dXZSh8zcX2Sd7YAyvZiKetYj2GS5k8E8afso9TTrByvxy9eGdGVnDnB4bTEc8N",
  "key24": "WWFzmNXqURc5xBqP1YG7PchCrCX3sYfMWVUfS2oe3dEJ7Tp37ConGyE26HTHf3BrE8knLH57XWo5V4j4EyYFbaM",
  "key25": "3pLCbS8F7wsGKLbXGAn6NsHqbEeZGVLpFC99D9xtRvWo2YhEMBk6YmCQBYC2GAvU2H9K3AKCwcRHYoWpBu1jC6ue",
  "key26": "3vqgfGRK8AWPu1jjAmJtuwUuYTsHUoBYVfiNL34MXrEEWmE7NcvSHkNjwq3hqqGZkW7ccFYJ76wd3CnVqT56SaJ2",
  "key27": "5uV5ZJcTzBrjxnm69ET1qEZ2zmJ5P3i3xnPga6xSHzXgNmbJG7rbSDE8HgGze1HC2AWM6Wst7W1yziMmaJF4o3dG",
  "key28": "5duru8YyBBuKM2EXygzVAqQv82k7EZz57xt8rWarBBYfxzxvE4SwzYnHiYPapphyfSdupou2sptiVMs92FsDxajM",
  "key29": "4fWoAhyzsacnRXezp7BdmwUV7MrJDfBnpMwf3rSoH1bWjYGXLSP4eDuE32ya1w6JwW5Qu1fry2GnyBSZDFX5ELr5",
  "key30": "54tMyYnCbuZ5AeRLPHqMRG1cKqHNzTHEEQKVgj38bAuG3RipLMuwMD3EtvUD6G7XjrPE37EnGPo42NDUgaYmrmwr",
  "key31": "3JBtK1VAyCp9wwz5Q9TxwbnmKD5dxRaW79CaJUwXfHePnzPkZHd4woeEPiPsEYAhXh6zw4VsFmUmpv4RcWnvV1R1",
  "key32": "3mKqV3axrWYHYnekvuVWNFc3vq8po4vXQtpxTMhP7wU54akAqU5UBheF7ywJSWFhf6F8mLdr2MG2nj2AXf3SikWt",
  "key33": "3hMPfQUEkxN6mJbDdZ2aJx5Eh7z4C1uKmz1GtwypazbRu5C5wwxr88iBnWuHmFMfacjArj4MdadMqTfHJeLkAUah",
  "key34": "YwPUzfwFQAigF4HbDQSnauRGBDWy3ax2EF5Rf9PB6QGDfoJaTGXfwGd8ZBFSB9sEW6iHQynagfrmumfB4gp4u84",
  "key35": "2NVGPAy49z74kdhjCSRKnE7hk7WxiZT5yqb3ssD28T2PAaxJ2wUvZtbnFvoNY6VdBkPg9Z88H7yakJ2vxtRDX7Gh",
  "key36": "3Ad8RQdWLyJ2RAKTcHGMEFkhfHRTLTtNGvkNwSz1PH5dQumtoG9F91FNjvg3GMR9w5iKRFP9qJboTQbx8JXLG7zf",
  "key37": "5ZJDBnghwF1dFtbVrKyKf3VRYLsQcWseP4x5JTaZeNdiM9rCuTFMdgumAegYU1FY5CgAp3zPvKjKVDCX6iHh7PFm",
  "key38": "3iPFKnzVfWsJq81C32FhG4B1ZXroKGzubbLRaqgcg9JiNWqStnv5wBrCZ5daZweZACLTa2jr3MLnqyQZf6YpTHUN",
  "key39": "2qoBhQNAjYaPNupVURroE6r4ETFVRmJVS79xmkEMeXKgQ8vxkMrh2STQFyDJ51nzvcygZKzcpZxv1XexC76VZctb",
  "key40": "2tHzSj1Es9D1DpPssSjd8MBTbdYTkEuiRPxqz3qg4quHz7x5p1D26qUATnf7fWpGyh2KPLGM9zWFGvWhd9RcH9yU",
  "key41": "4rBhrG3SmgAiWPEXF1sWJ4mscAQWPZK1J8Xhzf9nQoufL8pQkfPdKSuLNYy5RjMKH4UTkksJJ96izwTW8xR5ScG8",
  "key42": "hzFnnv7tWw1yQbEjwjrnTUZLvnXrKWpZLMrgjhF6raXK8XpFV5jtUPQbVTisvZABtduFbSu4fDPvMbXaVdGBB5n",
  "key43": "54YP1XjzLNVHPwZewPMhegzxkpfxggUVJULWSNunMPVAGdQpLnwvYhFKgYzp6iyeJcBRZqq4KcALACrGPDQcCzCg",
  "key44": "bsaFESoXSYTFVjYpDXpco49tXHqA2649dZaXKSdshFK3M75opgNggzWyf2oL7wqX5yNzT5z926StqBCBHyy8MsS",
  "key45": "3gEhiWRryCxDUh9nZjrxwdEUjPsh1SqhSSjPGs25GCRzUYJSwqayqwHNjQaLW8uvQKKmASVyQh7jxKcN7Y8YdUWi",
  "key46": "3Crrca945zynNb6Egg1CUxn5YcYKWTn7hELVWGWUfotzM71fpow9SuRWcwcLNEK3fZJX9Reeav2wAFqW1KxuKKtt",
  "key47": "3TW3hbvVK8DP4fw2myTBhy5wKRW4oz7H3Uip8yJZNHnZ28HrRFjeNssmC2uFEqDfPbpAUBHmXPG3BA9dVxgB8PWJ"
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
