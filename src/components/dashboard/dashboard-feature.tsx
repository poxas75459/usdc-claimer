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
    "5AHcqmR3W42SEp72x5H1X8632BWETYzf8tySoD2bgSDQ96tkum2ULZsAM9oSoGVocNkMvXNvMbQBG3CWv1Lhkwjw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j8hvJc1wqvmhqy8xmPEuiUh1mtb7Vie6FtDgLJUQQbapVMKh3Qnodeqw99kJJtGx1zzf9ihc1G85kLeLYyPUwMD",
  "key1": "4YxoNaANh3cAdVEjmoCxf59zi6niNbzqVmUFeKvyMdyhSq2WdR35fBua3HVPEzr39SsAMLxy2FgTmrkHD8exQZGk",
  "key2": "644Vpa7zk8ypsP2stZ8y99P9ny3mQsA2w3X7LrtssKYfHMzKrpuisJ1aMVp4Crjqj4QddQU8gdggApVJ7qYvh1XE",
  "key3": "5ocP9odkGaDX8iLj1hfjdU8q1ovdu5wbLQyj7jwQHaT7YF3Z2g4o1tSpumLjE5KLWFBUvXueEak1GSwhCPrE4FS1",
  "key4": "3P3fAWHJCwSsH5NeCnLn6yyh4y9QyhyN1hhRUj3GLfBp5VeoepMgAc9iMpkPC42ti1X1RLcAfegCSPkbLiPjwNHG",
  "key5": "W512j315btojXyt6RgxwYxqLtCzWc85bFwEBjccbU8hJniuD9qNH4Ws3BrV39aKbZwN81j9DfGiDWbeb63jMPFb",
  "key6": "3qVHXYzcLxbgokhect6huMtz55LcNcatU1e9Fz48C74adK4fsBubpqzNKw63Y3jTu5qVD6AkXyab1Ai64msf7FFR",
  "key7": "2WNSCQ4jtc75bYv3RLeiePCRE6g7vtydDniTtS7MqwNokAxwrseHVat7H7w1D9R8yfhqr7u18vR4HbcvPhkgPcbD",
  "key8": "2ZKj9TgE5G1kyhenNhsiANj1MiXh3u9EgyE6TmyaenpqBUpTsUyi6fsWWWmKf7fb7533CaToUELa8Gq16p3hj5VF",
  "key9": "yPDHj9gwjZ2yxrwVRXnbZfrDfNf3Ut6uAt6XYo877RjaZbVSHU6LrESKtLjgKBUj8Po4YR3cewwZ29gatcLadru",
  "key10": "5XhonTYvsEfi3jy6TVZf87osaqUBER9tmY8TbZaZQCbLAbVhSdmSN1nwcqWWEyKTV8HWUGQrQb8L1JUVmrPhCjUg",
  "key11": "5JMvAre8wJUv2QLwYUV19fEVGjDtdZfadvA3abRwgQSG4PubxAHsEeRxQfa8uoDaZ8J2azQpkxKB67grLqZLxeUN",
  "key12": "3saQ4HNkTcy3dNCFGbLLYP4b6QWxkjBRHaFLPPc7SPAx7XEQKuWFCuwEXGiLHewnZVg9GZN6Q7hDNx9MjsBcRyxN",
  "key13": "3Ge6CRHqzM44ENmFdKS1NRbfMfuZfoJduEyFRuKa9scqEpnP5yoRvbdYLPxKF1oBM2jamX3PtHjeXA7pkAjaj93f",
  "key14": "4vi1eiX7V27V3bowcesfLzoDsxiiFn2hpUtcP2c9MvYf757uKKq85ciHHyoeH988bmkLMkQoT7omZFDfWTjugFFX",
  "key15": "32QVCAkWobw86qEX4qnMY95bcKUnSWbPvoni3aTGHRjTws4quBWzCsD4ETj2zTZNwV6vVGkbdvuTS72cGqG8ALzZ",
  "key16": "g8jFVAPC4KJEUAkviACZyezHtonjCD39JAJYfyK1R4MZa3kv9Va9hQLTwtqLYBxcWR2PqBvVKM9ZUV6sHASYh7R",
  "key17": "2jAqEHMWmxBWyqTLqFYyfHtQsADoVaQqZXEhETvEAH3a5hMfmou8kGM34RSZ5Bbs8Ep5USEyPJZhVUFiMuh69eTG",
  "key18": "4DFWvZQ4LFob8WdK2HQ9DrvZW9dGR7jF61FLrkLAPsuzacb9ggBZ144aKrN4YeuvSXMp335GUzhdsJc67fY7wnqc",
  "key19": "2JHJQnCwF5dV2XdY7LXFvx8Mpmiz3GeMvAxevoEAeN6qGvSewu6ei2NUrAULVuXjNqgdQxdBEGeVFgb4sLu8ZBtx",
  "key20": "2xwVGqTotV2erKtF8rFFNsxY47s3PtCRetGEckrT1ieTUMhxJmLh6neJfGv5LJb1hCpVen3yVityFhcuVx8AzKCS",
  "key21": "SC7ybKEeem9iUCBXDSVYbMaDo779kFzFeujujyBEXbZrXrehz9za5p8Xa3u1d1uYvA6CJRjzh1RTXQhoPbtVNCD",
  "key22": "3BanoYNCFUGPDSS1zc6n9Kkeh6ZsvkJq6Afo1yH4kDm5EF7TMqyuDWTKiJqoczvhkyoweyYUu4zUDCgtSGgwYVS7",
  "key23": "4sAzz2GwBdsf9H1cTrrwohtSwYzkovKwBHXBDFX2XDwuHm7XL5r598kBTCH9Fd7aKL34GMt5a1Tpzz2Zte5REJkB",
  "key24": "tfmUAGiob89T6fiGD7j93JwnYo4TnHJZyBTnsjEioiB6mepaqYFeq7casEj7nc52TNZdkhkcQMZq19Le2VoH4XY",
  "key25": "3BnYNzgdDdZjdK2hcqBNTcyp6UEBGkJsvqanA42qeKNFbEBo42ZsAcWdCXRZHQ6hjxXPjQ9pQWziiAtirGQNyZC7",
  "key26": "3t6w4KeQrTzn4zqNYpus5CnnoczeQ1pRkzADwxFyKxCGjHQbfK2cTiU3MsAMxFn68njsQwSCn8ciZuHatcvQchbv",
  "key27": "4wSLRGozJKszptaKmV1dv4DdAkTeDqhVKzfRDrHY9EPUkfZjpQYZgKEW78gr2U36C93nSKaiyfKjHwwXdcWNoNXx",
  "key28": "2Kt7jvvb72X6UzSdTiHyctgtmMb2Tdhqyu2uZ3q5iAsAQ8ySMEZNnbYtcpMcb7eSSgNeFDbzZB6NRZ7fL15SQo7Z",
  "key29": "38SQsBeRxqmBPnXm49U4zGwEC654AbHz2BhWWaU1tRcBLCbP744XNqdQWhN7WqDHETtEGZsmyouSW47YhNms5hQJ",
  "key30": "X35Pj82WtJt73CB1r13vEbv886VFouQ1J2AnTLTsMAAqHoGtYR6a8oNpJKx3spQX5GNHKRAQUEUSNzXA5HfjXZe",
  "key31": "4cis8BmERjMnd7SEWua1U64wr2L4xcU5vDRiGTpojSBg3g3j8ogdfS8HACR9yY8APjMFqUumFdbsneCnLGJRejLZ",
  "key32": "2Uomww2wqkMUSer2wwuaqzr9BG1tfBPGfzEeR7qU9JDsNs5hi2qs1mHh4hkH9hEg2Z36CYzVSTeZ3GQMkWNcUvKb",
  "key33": "4Fk2EMbzEfeXPuuQYjQXV4zSsN4VQACFofgv5nXBC2eaxJkshTVpMQThoxKTFxTpBdSFUxaCfvNDrabbSfi9ZvCx",
  "key34": "3dEbDoxF6iQMbGZR3qLtzdK1jXnbYkX7tQkD6LngmsG8n1tjAKMoKEct5X91JhQtzcAnDisiyLdHurAgcSM8KTQ8",
  "key35": "4qifJSDEuE5bTedXLhMUYhBj6gYubYNzzxEgS23Fjy5sbN3HuVhnPMMjiroLkWjgTRqkvM57Rmk5g3J9r1W83vty",
  "key36": "4U3SHvHfuAMC9xydCmEjNrKWr7h8bftoYydC88Xz41jZ53etTsJk3MmaJ1tyGJW52ptZFL3wWRCaSWf3DLKwkB2V",
  "key37": "2MF5C7LQNk5xJnkiWgpBJhKTbhCyejZXQf2MrJCLeaSGwgdKCjfTv6ddZSzCmwaw7qhAHKNHcBTShCUEy2X5kmQ7",
  "key38": "2nNPbjQCYD3ug93vxZ3NsXPmeYpzAneahJiP6NK2KmhuJey24LrVJo2EAj1sQwanJKwQGNttkg4yJTF5f3D4v7su",
  "key39": "5G1qiLPWZkMzd2zJ6yvbkYJUZwVnH9i2u5ttDQuNwUdLpmVVL3LSqqVxM9bgMFDrcV8W9Bo7fSFyrZgwRmTCLxWg",
  "key40": "2KP4JMkz9vNQz7BzAyau1AZ56xdKS5D3gtvVGrD9SzYsEN5HWbRg5dHXFvsD72H9VcGyy52D5XBn1VKQxarkWzVq",
  "key41": "R8Gsd76vPqCbhKHaM9YiVyXLrvFowi8m46U3XncriPivWAZZ9XS1eT4dkN5EVEeq8vq2RDfjGenANFsNG7guRWP"
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
