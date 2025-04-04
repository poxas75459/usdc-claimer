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
    "2Vs84aFSep5HKVoVmX3g8WBzG1JUT549UuEZdqUqRjhrrPnHRUqJFk4vNtagKJh24nCb1QFvokqq7RpEjVUXhCj9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fw7UhLfnwNFqjbYmUSMUueXnwK3TXyiK1hPE2osD8AXizKP7bahmXBXoBuvYFWLsGfbJyuck1tDnZsNnPkwtwRF",
  "key1": "3vZqoyjQUhxqP2eYLX93s6jhVX52RbnQ4pyqMsNUcNnTckaqEkrTHJ4MBDWKJacbieDfvn7fjyQajngjWMohGfZ9",
  "key2": "5eS9TF7z6MpKaJ6inCjitXKEwF4sw51yVv1cu25bbDXxMuYoJZ7UYCUwmwNn4TgKNsf4TSvj5MB3RmVV1oZYribA",
  "key3": "39wZz9JhoTvcB5JJFNaGNnVKzs8h1rinVmCvp4oKrL9eNsNK9NtmijusVtb5Wyo43KYXj42hbKbBqbXQgfbNs4Xh",
  "key4": "4U56ZLsp17nT5E4V1KKQ2xzyp3uby9X8AgrXMeMiyUmxdiJq9FczhbTuiqjDJ7GhJFj9K5QVR4CToL3ybDitTbfn",
  "key5": "5yvwoJzEXUoN3s4S6tWbQtGojtMk2EutWpQvm7tWGvwCRTUgMUsFCN3NSvHfE3JNyhijFnhwESqsgiHnr3PFWvnn",
  "key6": "43J5gum8dmZdGRpHPSaHUpwQL56Sc9CoR16GeBycYbCogn25x7Af9irNCKCMiR8URqgRC5r58yuXvgWSKXAm1Bq7",
  "key7": "5DuuBNE9Ze7QVGyaGPd12sUdB86993j2PjpLkfmxwxBjbhuGiV8UwX5viLRkPTkZgoCyiKN1E4Y22hZxUtXtrD6L",
  "key8": "38MATTr5UGWhqm4Myzga2aQHiLJxs9V37Arp226vz67XZK5M1hMBK6pamsE9oQxTJHmwVDxcp13sjw5FGKPDUJTQ",
  "key9": "5uk8t4M9a8Wy5LFHetbV3EDUpKZ1Zbqq96aPFitM5WxRG9Y2Nwtv5VHyEHrWkh799Eaa3XLRFjwaR4UTGe58vpN8",
  "key10": "3QWMdW5TTxJQ9exte8Khi5YhqFfygD5NmhJ5bPgW5Rd29ReFhx6GBFV11g45QYMHMtkQsrmaswGUae1DS7qD3iQi",
  "key11": "4fukWzuo8miQZjRo3f9zg6Y4itXGYDQUDmBuD7zMbsx4j3DvRoT6uXGLvb8oPqxLKsHFW7CCn93tpUHiK9BEN3Me",
  "key12": "4kyC8bwiLGzTNzsUxVed9d5sjwsrdcDQPqepGyHYkbDnEJhPxYd2q4tGqVtm7GtsKBEVGMndBxFnBtmQSFpGpdTt",
  "key13": "4HNUfK3tWqL74VjaNZzFiBxtxyyMf2Fbqo23A1Q19wgFN8tqYx924WrVpKz3KqKGMEoNTYdN2acPTF1ty6RVQy2G",
  "key14": "4Fk3CP4XyGWMSaL2skG2KhebdVdHUwAZnmbyzEh9DFHKaXgPCkDRPseqY8VkX3mmQCubFdtGok3LATURdaRcV9xs",
  "key15": "5aEC8KMWbgTK9GykAppEwxn5PADh3o3QKaQ65fTTy4LcY6MZHoqMdu56CUEZmHpb3WRENfvtWBBzRbjo9EqvGUqH",
  "key16": "5FTmPQFn5WApDqk3Sg1v8oBonDCmV4378U4Lm8AUca81SW1Dv6UYxRefAddcT9tF51wXCqxrwhXt1qieWXMB7CGK",
  "key17": "3uh67YfSYDnKX3iMePtpU7TzBxLDqGNZqE1wTZGHYNhuUM3fwK5iRnTtb3rPvqjXMAczvcLPTL39GWWwmyAnveUh",
  "key18": "VUu5y8Gm5LpPxd7VL2rdCiwxKcdtXaMppV6nSMbVzmAnqG2PQNyEk7dkkPdd3QagA2sXYMueA1N8Je2rSX6auRz",
  "key19": "RxynQterJUa5ngnALauD1uy5JzKFmVp866CafYrLFNaM7iib5CrYAaUud1hua4yguFWMkdZNBxin19DrGEzpVTq",
  "key20": "D7q5RxrH3bsTp6uBqoginVi5nudQEyV9XnJEqUC6w5mkTYUdNxCBFQtYHDP3mXTa6vv2BZypBgV9jyvfXyaVvtJ",
  "key21": "4ShUeFHwR1uikR1pJdhKaMwPmUU9uj14Lt2aCZmQ4YtUw6wAQZL9uUDp9zM6LQdrZGQLbJb4LVkiz84u8mZGuN2c",
  "key22": "2x6njj19nHstav4dAjnLuPHB8G9mZBovGkkT7ifbza5JmaUPvWBx5z2Urzd1YazyTeNyZqLETQNi7AFjDDWnVTiH",
  "key23": "2WLTfr91TNykaVBkpLBRHaVgyJQ3MyLUGn7Sw7SodmH8hzgesEqizxgMpuV3ZNpQdfnQzBB6FQ75NiNoZ5N9u3Bs",
  "key24": "2zA3Rn5AqM8D5a6RiGDREYL4t4qztBgtYCegiuiZbwk2C8R82gS4oGiT7NsdrnXs15wQSG6P7GBmoKPx2CX8bNhd",
  "key25": "5QmAHAD77xLw9apgGSZdBUTddkVDYrLacg3P8dgpcxUexRqpNdEod3t5dNr1vzxAhmake3StPdkMMty1EZHuSucc",
  "key26": "3F2e91nfQXMfAp2XCDYz7qx6ParHx2WJsT7w47hhRhq8XkijoV2PtrNoZZcY91FGro6dhhM9iRbaKgCyREdirsq8",
  "key27": "js1r5tnui545XvL2Zj1LN4mSmVoju4YCtWDf3cLfCKQKk48uRrNMozFW241FcmdsUpW7GdS9Ffzj9nhALfWdouC",
  "key28": "4dr5Fv5LqpiJ5egA2dP3QP4q3gmQKpvmRDteM1g5JnBwu6N3KddQi9GtNQTBbksmRP2HRzT9e5BxzMir7yDBJnQs",
  "key29": "4HeYmaQUPxez61mdzaUZbrbQRzQemTifpdpTnJuxhDKMGBK4igpa7XBsNE8b3Q9ZYWGcMddGnWTMtuWHJA51mr3m",
  "key30": "5zET1hgUAiRhPffaEZuzD291eRPXBPh9AGHXP1ib7LAGrUsyELep34A2aYSiYtDqHHJ2MH4wLDsdZqNfBNFP7k7d",
  "key31": "3wTuYy3JHtEhzFv6PcQTtpXPbKnKWDXxaw8nQXNQ71tgECkU3kdYGLjJ2hKe3UJJ8pxJSZW9iRqmMVSp9cqZ173K",
  "key32": "5hkMR8wfqXUXc1TPHuXFQu18tpvwbL2QwnekrdgutNmtVdJxcmCuguhm8uhSLryCc7VUtJJjqeULKXHETsCQ8mjR",
  "key33": "4RJFVTrBDuqW6yYJsheQPzTXF7SbDVJkb2N7vMrUbLRmCYhv6LhoYR5PtjnhqWaTPGHUhNhVfRxrEUtesoMT8q8j",
  "key34": "2KXqZoUKMgQgZbiB98C6y1PMg2dsQBa9Yb987QQoYXDBd8LGwJHFXo8W7jWLdE3m9SsKsKvsF31uBP4TTW8HgDpx",
  "key35": "3ktY9Uwfa9CBZXoSBnbR3hWQKJJ6Ga4QMvXCVkWPJH6QbSAF7Kgap1w8yVbtoBq2Yhme9guJkNkPHCenMqgwQWJL",
  "key36": "3Ez6PvPdY4pEGcTtM2XQyYnmwHjZLdBzUb8Szx3w74JR7GMRRiF6NB7ZEY6rUxCZ6mcUv9BP2v9sP8oeud7kq4tB",
  "key37": "Y8hpz2vXvvo3a2MJvdhc37mvTkPQ5ycxdTsV9hG7CnGWDeQx1R8koQzTVPxA4iiqKFuDLNtf1A9axvCatf5BpxD",
  "key38": "229z66jVSgnwGZVVm3ArzVfWX8PVZqi1EmEAPupyWauHext811iTLrV3TypYKCNfPabf5cYttcjPe7HsrNmihb8M",
  "key39": "3tkPWa7dkvRL3AeSHJR1znrdpQoutHVcisqiYynwaYtRuKsXrjLpTyygp5Zq6RtzRaDEKk5Vgg8VGcitDshqMUUS"
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
