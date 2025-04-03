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
    "2odLsQtoc9cjWs4o8UBb89kynFZHAagMP9UeoCsyn7ek7k8ceWnKjRt7Z9DYML8aLwMSKEjDhbteXjHcHYXuGyFV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66z4ur5aArqsxoyBYZYskXsNC4BdmmgCwLe22hSewSPGWde2bynFcnGrkbxG1Jgp9nCjxsv6xv7JAhKqv22qQAbA",
  "key1": "5n575cWyTCpq2wH1vJCD3R1196A3xF4PCNc63mjD5VBk4AcvzQdwpeBGDVsM4wnKCrqQybePwYzTgd12m4M8iHB8",
  "key2": "3wfSagn2z2ZHLdk5dGrCuQX7qcWZL5QAzsfDs9YJcAmwo3somYg5KP2EmuApoZUGadMjTRq4p7vQ3Gjr18m1HEfR",
  "key3": "3BrZBAvZ7q5w3xi2Xz9vP9LT5LRWTkWNgKZnKvNzavsx6mUFL9Mf5qWFwKwpYN1HLeuyi2eQH9Z9BxL78ZsCxjDg",
  "key4": "3qmrCqArCcYXGoGCfcoxiY8mtGAAck7JvzHkgR5LSiZ2pwnYiSv6HUQjrAa37ucf3RahT3SY2ngPBPWENMftJfhA",
  "key5": "639u9Ts3vZi9PffwA3oFW2Tp1noHMhcqBuvXEFLbRDbnuwwR7X8Dz2QWimApfqH53Eb3qoQ6pFJ4adVDDG2hvWEG",
  "key6": "2cazwnRGZeJ2qx1Z87m7BGJApAYxdabQn7NZNj6VZRx4aMQDANN2PbdVYBGarfWc6679kXmPvHmXL7kxqEMXtwak",
  "key7": "31S9ZRWwb8ciW15DqYvfxrRDWSvAt3RqsBHajCChshsL9scjXLfTB2ZRJ5hiTd2GhKM39ofXZNfT6Amy5BwnPqMw",
  "key8": "edFrCMmc9hZhqoK9YCgXRaiTkXoU9RWv52W9Ai4GbfS2cLhN3h4eoarPHzWvwbV4grHs5ehL4nR3SqjhdE5axEQ",
  "key9": "5qgN1nqh9h47xLogkj7sxY71wZbcLbn7v6bRPjPQkKPyBawgzVnKTTKu4YnkJhNFigG5NZPdaLHW199qXcV82bhp",
  "key10": "2jKBMPD7yKSupwdFzqrm7e64CFB6nHJ63TcfSoJmf4HNn5CtY6C4wE3jC4dMKhTpdvEAqwgAgnGPJieUF1QcSorB",
  "key11": "43UCLi45kK26DP3txi9zKLSz62HvCYBimqEVt11YqgPRqD3isx54YS5mj51gKmZxGMy9oiZZwXfSyzG6dgNmf8xA",
  "key12": "3z1NxkSFJxQ3pwoU4ApjRwwf7vG4n9QYpuba2zYJXBB3Z6WtvXpbVqGXbqptnpSHHdNyxx23kWrMctzB7KYuunXf",
  "key13": "3suNnkpYzYG9B5sRjqivxejByLsQgbesb21wxr4d7TcCwaUBa43a3ctTBEgeRJ3kx7JYzXeWfPx1re363Di4xP7w",
  "key14": "2WCPL34D2988s8FGNKeTVLSymWzSBFfupcMBCS7RFUfDjxB66pNEVcW1aUCh8AkSNA5guZJNsfLtBovQdi8Pv3wx",
  "key15": "5z9NaFdZDmv6icdzHiPbB16exsjX9cX5KiJ15RDtsDcdQhm2ryrHEu6QsA9AMcbKLJL4wUrJgW31N6nVqWPr1U7G",
  "key16": "2vVWooG7VchdCQSuyrsE5dF8fMFYLpJDT55LoFRsyKAMhUZ1GaeJx2CpJgTXqgWBvSEt5e1o2u34mn3Gzm14SHwT",
  "key17": "HRTrwv3kwnjeEKHXETPa1mKqHxtQRXfaRjfdPP1rxdkzFB8Dhy4go2meSPKpMwEFCGW4crt7NxBt248ZeaEDEiR",
  "key18": "3Nzm9i4ytwwpkt3JtLPxjxs7WUyBXg5e1AqJnttzvgLyAVxnXD3AWVLzVW9Z58Y5ie6jPseZTUBEkb7BEVazLUoy",
  "key19": "F1YgoavVFWAGQgsFyPBxNYCBTAVE1BZpfQwB5T5zb9zmZ24QYAbNg6sAzQcH1cewof7f9EtkZqQgkQMtCwNy7v6",
  "key20": "2TgBYgPM5c4KLeqqRaBtZ3mj9xhGypJwqnXmTdBwra8CRxDwUmtCyPnscAstS53QLLEhYqH8YggeSua6iHSiSvwQ",
  "key21": "3tVk5XXQpLVjWjsgracu1VzLEsGEAzKbKrqKYoTyBYqBGUh1ghoijUTBtCop48i925eXAjZWDMuRXED5srPGeTPk",
  "key22": "35zM7czzDzVh8gyKP386cSuiLN4oAo4FUoqUeag7cf8BnkT2cbHuHoqCsSmDdTvkfgE6wYfW9PfgWoZmpRTSJFXt",
  "key23": "5kcxxMvbjvEx2rv9bojhXT5CbJZWEEArJbuUBJF4SDVjKNHHLL52TLzmVLKdnbCAnERQGQyeGNXpigUTaJLeVFoi",
  "key24": "53Nca1f7KWzLM1XRBshLjPhJ6sWtpPmaX7sqmvENYXsF1NhGc3yaXbK8TyRvowsX2rufqL4v7FshhMkQ9KUhPPgB",
  "key25": "MpiPfvMFJDkWAMrG2M9Sa4sRz8dHnXWgSYP59Xe6aLVrMgMfARw3Xy4MPrgVfPgAaLZCXjB7DDkmbAjDBS7PAqd",
  "key26": "5tHp91D7KsFGd12v4v6k53hpPm9V22oQQhkMUDqWEbFygsNvhiR3Zb8rkLFLgRc5Epc4yoU8oMUScnLM7LbfRyBQ",
  "key27": "28sRBBriHNexEVJ1v4GpDG9s1B9mXurjyV7WysarD1pQzJC7oseY2n1zNHXNPeAxPYWzttG7GsceA2tQS7WPyC1N",
  "key28": "p57xQQiRTS2BBuKJYW97A8r6zq71pCDwTjRDPKjJDdmwSmgQ6Vz5KdKBL22EgHym12Gg47p94K8F17kpvDdsSP3",
  "key29": "5M53tUsDvJNvsrv2HcX2Vku7tQds3f6NRa2jBwiXWPjfE5G2bvN4Pcc1EA4Pig9Mx8H3fh6RmJprJsgHe8CojLhX",
  "key30": "5eUvprmzwYvMmCP4eaY98ti6gjZR63DSW7MvAyMyzEfBQdNNJjKM25pSX5cwst2KKrnY6TXzPYrDxWyXPt7no8pi",
  "key31": "4GTGKQpkWwhoLsvWTfCA3dF6g3etGCTxmD2FySu3PSFdEqBTwH8yx87kZv3e2CawTPqzFqKn3G88KTBQ8pDGV7cC",
  "key32": "D5Meoy8XUoHtbPC2VqH3v8oRW8TwGtxfCuuCHi8TxFDJddCUcz4hfgifzMZeGMhWJpvFEosFVbLiXUeJTKbSXzQ",
  "key33": "8MiD78AvVa5NjgGgWscdD3YirPwagqnAriJFoN9wkXMUTg3qxsFVCidYEPf5YFTrqGSf84yKHShyvKQRkuXfUu2",
  "key34": "HbMB9VWfMEW6MiyEeRKMWGZmsCNXmXFLr3Ubpx3Uzwx9V9T2UPX1sy68cMs9GRCEjUCpuzNJySbnv2Qf971Vfm6",
  "key35": "4RaPxQp1YAeSxbHvChxxWyyQaFjvaguAQMpkgKVXUmq8VTdC9iqyYyPivnXuFaNEQW9EGQ5AYmEGUicCe4LGVYja",
  "key36": "5Wt58bYXqiRpYn9h6x6kN3mj5GppySfPasNLe5uaDNXJnz3YuVL5uSiKFxtYLcNNqVKYrhcwCXELd4MVT9NfU3Ls",
  "key37": "2ETwrZH2UFeWNzVuVfke5ihysXqTD6KmKwBcmjVPsm6dzw3kYHpPNjzGngr7mM2ZqKazyudqYrpX9pWMVbzXhiwW",
  "key38": "3UouyCQsYioSbW4HJB9bGYMLbG648b6ic8X4BgF9Jjp4Tshqa1bQQJfEPh8hHww5eNvVP4qYXbAzWgCXryKA2D85",
  "key39": "3Q38q64CPyVjZ1mpkEHdFkktumd5rAXBndzSz7vJ2vvrf7y7WYxTRXPsfyBXVZxVdix1Y6WQE4ph2KbNt67DHTnW",
  "key40": "52aXQ8dbA7tD7TgAtinxsA39SyrJgfYyuzzayABU8v63F4N7U6pPu5NYRcuBnvfP6YLP4FzzjotpPjq45edanL6",
  "key41": "4DhhDGB7CKm5YJJJGwmn1VPkSxQt1e1VgQ6FT7vCC8mD989PrtmqhVSnhrYrfhTx2dFsigzF4mUqtHvPK6SBCvuL",
  "key42": "45SUS3TWsXufsq1ZLzQHCoZnLpZjjM1ABcpKpSKJnaeuA91WyV7tKFGBKx1v6iDdYsZNjubFocgiAyP3N3Cw7jB",
  "key43": "o4KWPQnwAqyMb6cn92cRf2vLyWBVBoAe345RY6nUYiwQmmLrKTjHdqUNrMSWSzcLJQ63VEjgQs5reU5MTGou94o",
  "key44": "4XvjHS8STgfXQQd3i7FCFBgDH3TM6FfYMPMavH2kZnia9Edyk8LvkCJSBRMgg6WiYwcsUwG9BGbLDWeC6PHHPD7y",
  "key45": "3UUdipyJUYq9iQLEeYjbLofKt3uuyuH8CEaBprx5UuqUDg9Kjb2WwmtDH4fM6EM1sZGYtmkD55FoVMwZrTXGNLyH",
  "key46": "DV1AmHybPGqmL1roCYg7WnmzSxd5aRaSSUM5aWj9gznGUyRPWdiC5MFxvSFGoFF8QLww2XEjDNQEjGG8bz7UX8z"
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
