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
    "41uabz9UJCiU738JYmWdmpHXQTkMEbst8DQWXxx6GXRpXnV4se9EVyaxTScswV5krjMi6RXP3NJQS7A93h7nucEY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TJ6xcmRcFf3Vvsso9uKZC67f3WcaSotHgJiFfHLkTWPhpuccgnrfnAa8LXeeEoFwnfK3XkZKTuQSY9pEVqiPeJj",
  "key1": "5R8L6KzQHU98VhSjfvjWNiw5zgLRs9ixBANxtAsbmj1p5E6XR6dCDLk4ReYkJcr3k78BBfiwPWhyiPkw3BtpkYX9",
  "key2": "5KTdNYoHKdV7zbF6fyGE9WxzhCF2RKHtp52cByRVTZH5gALvVM7uSm4ioFj3NzDBryMgdL4zRFQxxyH5tEReb5iV",
  "key3": "3Rv766MBZGpaRLwkUtQd1YhgP2ro8kTdZXcerWxpBSU7izU2bwgQJA2xVKHtJMGJNXvUQxTCz1wtbo4idUDWFJdZ",
  "key4": "5oRisyuTUG4XpW7MvoxNWwGgCtMfajnjxbr3TKshD7mTVxfcUAJpMj5DTYsMhBDsDnSasdGp1ADWs5GafN96q5h8",
  "key5": "3atGJsksCihSj8actrwkriQYiiqeP2HWdcZXUZpkRTosSLVKakbH2v6amqGLZHuv3HrjaLcaWdwCsHKCzG2KFPA2",
  "key6": "5845gvdAA7yuEocvZsESbDJDa6dm3vMZHXRQjJG8QfQ3dPNvN7Mv5qsv6B1Dcy89vDhJscACmDaUXKE4bkRMLoTm",
  "key7": "4XfWfAGkNFWhJdBZNLfYovvceEzdhpHGRYXWfQzjx5h6pFwAU4Bg1C7aPFT3cM6WEf11jDUqnicFTbUqiSnCRsNy",
  "key8": "XwCe4ufanRdvbEfFKs9yz6ZAFGPHh7xjLjmHveSRinAR6rf2wiQy8raHG2uyzpRbikXNgGp4gxmhxFQjbrdd2dB",
  "key9": "3NbU7fG2aSmVDDHo7Uyogzfk7ozhCdN5ZMJqy3NdcKsvZ7znbagaJt914RxJJkKdHGYxm2KHEMahMLjrnfhmFCdg",
  "key10": "5eijvzdtJ6GCDGE94FHYSkU5QHuKszqZZgmJs1g2X64PpcNfiWgHVQ45VT2MMqyzjqkcjRcxpLJpiKGkkG2Tx1er",
  "key11": "5NJKaeY5VJqErg5CozCcuDQNyjb3DJ4zMRbMETvvriDPPuWvH6f4thvgdRPgXuqpPWjBFPfhF9mGex7aLoXKZYcP",
  "key12": "vbViwHYA52r5qNbkNAJGAAaEy7o19oXjWADpcuVNpUG4yRvPUAFZs9LL9iAuVDWHZWFocJ221uUeXu4ykNnaoRA",
  "key13": "DKH9up2ZgoaNCneyAMXXzHCJKqubXvy6Ancm6RL7JM7tAbYynWqZ1erTnMQF7qdXdnG6JYT2WENgvjjSaXZhxwm",
  "key14": "3rZdi6z9YTkvhKUJyazJ5ubie6iNoseMDmwPHuvLnye7r2dy5fuxXhVoRQ8ipBXWvMqGHevkBm7QoACy5Z7HV7ki",
  "key15": "27gzaT38aHeYHn77R73wHCgcgwQJMKCGj7tmE97y37vKfSFMhfxsDXsTJsybHMsRB3jMBNv3jRbQJk8maFAT6nZj",
  "key16": "2WRtfxvvyzVXWsqFJc2LJ8MCgdWGM63cVYsGbEvKsiBDPg18b4cr74GHPGqSn2eAPydbAn31B8Lj855rTUFPDncU",
  "key17": "2KdoPgS5dWFMotaHg8dB8urBHrr2Eu6s4tdYdXksvxybm1jaC9YjVAyxHDK5oGX9Wi77SXV4jHV4fnzANPd9gJbj",
  "key18": "2CPWR4DE7jfWaYDAeMr71j8J5fUGpvQSCsNLL7R13fbV7U84SMTbEAREiKE3fYb8jfmnsFXmiB53NtWf4a2sSgSq",
  "key19": "5uzvz55nymbL59EeCaM8nJNN1RSsncrdoLzVMkDTDGNkSefKB6FmsUcVyBE7FP3AbKNdRY4CDeCGXwQq4yP8gDHA",
  "key20": "5P8s8Heq7YtPNj7dfmDgxhnX7htyfBVSht13Zc3mqc2TLgs7e7QibQtCw1iJiSbZjxmEJb2Vnn1AqivdkceLRp33",
  "key21": "5Y9dYt4iWFX6RNG9TYvBBRo62fyKLQnLo9czGhdrRox8Tx5hNe5LP6XLpGSXsVjZpUs3zNkzc3JXdDM1QjefxdpA",
  "key22": "2ZcKBBLx4U9FQFd79xucxUUUPLBVnZ8a8tSHnvMj35grqN7tpJmZSj65ptovtFAC8kfVZL2G83RsLw25qCdmwW7G",
  "key23": "4ZFP3BpoUoFbaF72m2qP6RB1wq8TCxEp1tJra3Rs4mmn38MSeugGLcJiC3CAFgxypykXtqckLTQA8iUQ1UdahVtH",
  "key24": "4hmS8iJknKZvW2Vh8C9scgixi1KW3orQguQeBDaonP5QrVzh65bi1NuZBrBgiG4efbY1cHjAWMLrX7MsduGLxvzv",
  "key25": "4JRDDkhPho9W17jvoMjq4U31nbvsFxUgKJkoTuQC1fcrbxBxnRAoURAFfv2ViwvoK69LZHbxvrjNGVRuT2cNhkHx",
  "key26": "2JzrS5BpA2dpQz8aExRn6b94sdR6d6NBLiaDkYCnHxZCWpUiWnpnhEvgDTyKdNXeWZHykcx4pVjScg9eE4qDX8WR",
  "key27": "XWFrVYrY8e8ymYHoe4ZvaakdTFYA9LDGrbzcEMajuZGeSe5F8Yb9ZUjBGzhZZam8jyHtbTPH7R2NSjYbjgySait",
  "key28": "2MTkUdocYPmmf8BWLXw6FdJZcehmx8o2oGE2mVqXf6kQPpQCDVCuWAfQEYsSMRBvtVxYpnFN74nu834NYbp1jaxL",
  "key29": "3cAeHSGDApxER9sahYG6hgSCcydhH8gDnDwUEkaZ4V4TKXr9P1BDPu1zwhTLWVsdKSidPtVAAME5seRb449pwT1h",
  "key30": "5rAwSsh5vcy8BFz8G8DiyuTWZJp2uqU92GNh3H7uvywyFhqqdW2wbSXUTyhhQTDtvUeXXuxXU5YEtquBCf6GS6B3",
  "key31": "5ZwLUiwnmvcZcedsCQ8Z5mxJDakVDmtH21Fyzia5z42W32G5Jqz69wCjrmdDieHnGQ6RGXChb2YiqzmPvwcSgvTJ",
  "key32": "2mgSSo8H8QZd7kBXu4hJrvTS5d8TUFz3GYUYWmUdFDsTaNUZmbSdcmwbUKE55KbjiyNbnusNw1gv31d6PqDHzetP",
  "key33": "26tiWGjaiYKUts23bvXM5b8BTxrKbvz1eSiiwDjd8kbWBTs6aQaJMsodRybM9uo1NS8ZjBNuohfyPzfHFuew8ssL",
  "key34": "2ATW9k6EZjkQ9DvDnsyyj5fzoSaTDf3VVTdq4xn2RAKJbunbDn8UCqCQX3amoZEaz5KuJf1SpohsVze7PX4Nb3rV",
  "key35": "2TqvqXR6DJ2eFkzdpwi42v1JoTZcat93XL6QBVZQkGXbU8QxRGBcTbm5z1LEB1KJCmgcPFxKXEdFc8WUqdVRTs87",
  "key36": "zmUMLAvTceL8UbYQT1gmybENMs9BjAtnJKZUFWzqB8DpdBvLXNLJVc9Cc4SU4LhX9mVVKaG7JZ5VwmmHty9zeAg",
  "key37": "4KAhMLP6vXHfhyQwH7wbrHfT6EjKYJsXqL9Kw6SJfD21RJ6ixuT2rCKVPp1hyZ6zoEMbvnwbPYyfHiA8UjRSppYm",
  "key38": "5xu6VhXGLkKpq88JMQFqdB54r3WjJvRcCK12nLrfskXLLTnyeH8r11WaYA5jz6Jjn7i1wytpWYVo9DqngtmNjKZ7",
  "key39": "4kwUNsKoEgFHb1U1QqMveSrsdzsefgzfScjL3hm7fQ9eTTJVroHyeRvLYtBCwPTQ4zpaQbdUtmHcPKrBP312TV3j",
  "key40": "5wiNMFiGTj9BsKhQh7ZkboJM5dgHodnMv6iEvJ2HEyen1uWwTKLwHivqPNsx2nWj8KMVCnR5zkCfGCpxwXHMKN29"
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
