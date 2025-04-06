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
    "3V5uaK1PCFKq71NXYpR2zh3e9y8De1dQAJN6cfPaTFXs1QRPjsEVTchjmdXhpdKbZp47BfunjRMU6czzYV9dkec4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31Zthu2KPkzj4V1JVGXgaALyASuSxXuLXkuMaNrqEheNFXMRYBUxEoaF7Mo93WnjKZUEmoeSedQeRHa77f7vh85a",
  "key1": "3ZFMu4rneXECz4aGpe5AN9j8qN1MWJKpaPx7UzJzYnghkSdVCysixqfDVcSacoGWq5XJnvCjDEobq7Mf4PhPhUqw",
  "key2": "5bMh8RtwvhGxyWqZ9pSceSW6x6vToJi39ffif3UmfprctrYVs4nJMVwce1bZVXTBUGaWDWSBMzmtW5ocqyH5hmLa",
  "key3": "5ht7vLeD8d9mmCVBxYdeGcRvVf5aoR11TfDdDMzE1vASE3Xm6WQCQNG6F8KhwaDzJCPQBAjRbHsT9H3BiTP3PyYv",
  "key4": "3vsnRAD25jiEj8hkuH3RaSzqNzGrvCgpuk5ShP3FGGEWpvAr4DoWVLnBmkpN6Zrk7qEKB5SrSAHNnMMhKvYnvTPt",
  "key5": "5aSeBGN8RHfngSuPtTtLbFkgNj12nHKcsaxVCnBm8f45JN576eorVJtiz7kgjJfw33tfpKokko4LgU6yFtHyHXMU",
  "key6": "EoMfN3fpNGizRGL9QPWxvEBkqKTrBoZsWzBSFL9FZFCXqctSHTLnhsDVWsJHoL6avR5EDujjnGZ9BjVfHdPGCu9",
  "key7": "5RFU3UQHouRzMTRHPXcv8eDwWNDo4u3cKZPfdS13NLZWNRMaLNQVRhXVFG7bBbUVcLHxvNeUjsUsoQLw4XLvTGi8",
  "key8": "4z9wSVNX2Tb9Zb3dW28HkwCv5z4oM4qyAh5xH9Caj9vSf977UmZ91GcW3He7K95aZzTFAbbss2B8qvrN69Pw2hmP",
  "key9": "4UEST8gUFqrAQCiYMSwJcv9kYqNK3PfrDQS9J2Z1M1kM8nA1Pmm6ETxGcLsiJ9nHXX3g3WZAQg4rErNTfgkqeHCC",
  "key10": "2cfhc9yyE9LNXR3sBf6iSyxvB6UXYbS9ZyqvimtcmSBe42jaL4zRbPqFJdh4BKUH88k9B6EhVCVBb3YGoqgyAeaR",
  "key11": "usL66ui5h8P2NWAuSEi14uNjWu8eYGnHCq9jJw5chjNnLGzMDJoqxMGp6kzDtdUKkv8MR7t6ABna7ihHLqbkAiA",
  "key12": "3UuY1AVdLayEMaWYNhCo3zUrPXHQyXjor49jGHy4mz1vueZvfzLEZ2MRDbcb2cLLiiJpprndorwAmVYE8aknsJw3",
  "key13": "2kExKQWaJRwe6nsqv6WGsQddhMpSCvPPvDqMATa7nqqknAMSJfJ1zN8Nd5imchUDSDXvEgUUNfwNB7T82C6mvbwQ",
  "key14": "2U7uN84ymrLt3ktEy8iB2z8Dbr5axSsvCxeH3gUSMgVnUQgKCbKRmut26m9PTLm6JNovMR6XKdvjKrHXvEm9Bj3F",
  "key15": "e8askKKNTGyL2CpHaNPNt3ZEAfquCxAVR3j9YSQQvxw2Kh5RoWSb3rZVabAVpZBLjQASUNwvB9scNk9RX6G5QV2",
  "key16": "3KE1wktSdqFtaDYXqjZ1KNNSbqBLEJc9pD9Gw2RxVAaGAy9nqhWDN4vsB2Jsi9kHDXCpjC99j5HbNpyDuyUkWMZN",
  "key17": "3NCug81ZMQaoKtAS38hdLGz2zHeH3a1J2xGWSAQoVzBuFeMKW7sy3rjiwYS9HcQfnZbgJndxx1Kg1ZU12Zkr8Hxm",
  "key18": "QUPFSuji3C314FNhdTT6rAmJJwiVmrAPS16F1ob626KgMxAoAMVa9W8FtxvuiX5XgSRN14YazrpB77xxqxNeCdf",
  "key19": "2kYupnmCpw7bRyCedp4YYPLEdnqND3j4y6ErE9JwGsCFdHFpn4yxFehojNHXA8ZgBzdZB7HwktckkvM8kkTU7kLo",
  "key20": "4onMTZ8DwbFWGEae3KTnmrBvTB2X3tLwEWYTA1Z2XdL8irS57eAbmyiUsR87e2wmzMaig28TMQ5gPtW4PVBpcivZ",
  "key21": "2PR2NZYFHBKeFQUYZoEtqrQEpxdUa6vUEGvZBhMfo8qJ6hwDi3XUDUfFepHbJPUmVkHHfkAqh46FyY8xN5b15RZx",
  "key22": "5VmEGQ7CgXQarfP1k2sdDQ5ap2GooECUHZtQepjF2sKVFi9KxNk8Jz3XByMazbYeMReAwuKu3izxfBJwR6LB8kVq",
  "key23": "42hCJC8WAbts3mFPMUUFUDVhwXn3xdMLZdqwtsSh6doL5mocksJq7NPBc1RiWb5PyrQL8ntsMxV2mwXXtzfg4vHQ",
  "key24": "5LLVCNw18AJS8ZQH9cuUQTwFYiJaePZviYnvCcvbvQRmSW6696c2CYTcjtQQS9fwfkCi3x3vZ8pQWHLCMJFwCSJt",
  "key25": "4k1dthxagUyw3BPtuc2YGf9aKph9bhWMtHnWTcUqLGqyXZFou3qUKrPTbvcGJAv4MxM491GnEx7B7vYBXyDJfBcQ",
  "key26": "4PqW5oy26mo8Q8TkgZSuHfhnV9hMFeWwdN3eWdhwSEBw5BsiMHTuGBUGw9yJchU8uDMZcY4n8e2ouusEnGHaHyw8",
  "key27": "5ukjQU7xppfGCGb1ZZxKQborBfdYyL87zzRHwse4eLdvZGh8rumNv5NtgjzT1you67bWDe9aACZCWydWsCMnHDBc",
  "key28": "5H5XV9LGSBTSox4g53qN7tBQsfSFZJthCHzEdZtc1ysgD5V4XPD2stwC4RgrvhuWt56uLkGUSDuDHNhPq33EUxi3",
  "key29": "a7hR5q7J7toFFmCCMFgMeA1B74G2NBwDv7zEFJrKdMmm3RmdXgu4kUnW6qAs7GK1koxW3Qie31e2oJc5MBS8qFU",
  "key30": "3bXN7FEM9ktz7tLQV2LMiQpTcYPyXMkw32stgMWtYzNX76DaLtqtAjLJd7AadJCLDQ8d7XmdjQLncVwYAsrrLQXL",
  "key31": "56sDQFZPC3qYLpXTc9eviPBDuh1hAgenA1pW6CXLQzcxVqYaooK8GrkPXafGkGRifx3fnXx1vgW45o1rMBCK37GZ",
  "key32": "hGg7V281M8n6Y9KMSxhBBdhLWXDTJen7gKHHjSHtHsbV2TFsWX31VNuyKqjXdbPmQYxBhC3oMhFP1RpKnu829GE",
  "key33": "5TQdb45CPNqvFgCeCgWmRX7SZWmZHsn2caf5z2sRinTcWWsrVHdC9UD9r6bg6FnEn2ugsQJXSWdxnW6vc6oLiLiX",
  "key34": "3uJCnJ5cAgQNMU9f4gMMVFgfTmoYEAERPtBNgKvQtrH9t51ULU18pajhc9FytcZhomZwzgX1th8JEpLRdQqFBnkq",
  "key35": "5h283JP4rdGedcU6fmpaNVZBgg6HQV3QmzcHsmEs6vDqwnJTRhPCCe18uqwKu4qRfLdEUovNTsGauTKcTTXDhKFF",
  "key36": "5wT65wsR2hsXKm48ss6qsF8kM61B5dyVYK9oNtsuvuAZPSw1Ni6SxYmqxAi2AKyjjBT1PkitnYoEB8yH9S8oUoSc",
  "key37": "4t6HBzmVw5A4MPyCpWcGY1jD7bZjG45anwMGSMmYrVRcFUKRTCnCAHwAH5RgLkG1RHutfMyYNgdEFxd7J64sULHU",
  "key38": "4j9wG6QwJAAUbQ39rcGkBxpWhBMGVxE2hGLyafFTFVfpUoec5RPV3PhTi9Jgx3d4U7v3PQc1EhUEjRSSD3bStwUT",
  "key39": "2HiCEmVJH48iEbmUZhfQjGWmGU1eMP3Mj3qp6L9sZdhJDYRMexPczzYQ6ZQ89WaPMQUKfVyuGum65s9nvHpSknMU",
  "key40": "Yaaz7oxaGhxkNDDU3eHACKKyvPcGE4Tqjr6UaqhfpJaBtyaN4VmYNChKrayo3iUTrAdcNsYPajUzrbdnZr4yQiA",
  "key41": "4GbqwBHEqC7dfRaTnSJwWxouvLu2TbA4TJCApZCvxdEGVErr7h3tRiezpL5VSsHnrgpXX4SC7GxL9UABahBLmebL",
  "key42": "4erMSMXEYQ38hkz2G6tj1eQUywamrqFrQmWXfcNBTRmLpuqYGRtkRrfNSqUqSvwbPTCZU5EmsfZzkyTPgY78WJD7",
  "key43": "4JKondg6dP4xD3ocXPpBmxDFc8FQiiu25PMjBQJoHyAx5GUDAttXaUDwEB5H9zRXUWaXowRoJPSiNgadZ8soRFNM",
  "key44": "5WHQATVifv6LtZHMJ4aeV2SggE4cdHS9jAB64YWeiCGCFac79cNnMYyuiqj6ZPSGHkkM4GhUb7K9UByL5uzrn3kL",
  "key45": "5QdGnRXFjDVU73Hf7bD3eHxergXJKYZKZVZzd2wT1pM2bZdWrfTbUS2SVdhs5DEDMAJVq8SFoaDjYVQxaPNSwyD7",
  "key46": "4sTZKfh6BpFo14gq92sJmpxQ6Sc7csQxhhVxRBDkpdyLkR4t6ekSmq7sFZo9S7mcser9fhxGGkwujXWzRsc7fkQf",
  "key47": "5bZyTuvnSiP4Kkx23oQc6Dp8ojr8exUqEtWQ1MiN2Y7oYuq49qbmMcR4agZeVFPcHhjgykK71tgacaQd4jLvidbr",
  "key48": "4cJeh9uTm4ipjBLq8qSArDbFCWkkU6tfsZrqmNt2fgEG1d3BtopPYAmKWtQsmdUj2jcsbdZL2ENsx4Ha2LZjnm67",
  "key49": "6NbtnKNJdTsn6JVzSQeMAFk5qWSfLr84k1yCEiAa4TGX32F18LwshP5iV6mzoBgXawbzMgW7fMYieSEGozJvviL"
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
