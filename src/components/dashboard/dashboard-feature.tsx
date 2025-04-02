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
    "45UWdsSfYgyPNssVLQuTeqbeN2YT6gxxG6Gk4cUBRhfyoWydw71X7vXKPLtedF6TqVQxgXjFrg8VbPapJ7c9jeqG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s4obj8Z1k9QorAQ7rsizQSbqWMVa4yMSpqL2YqBAwj7jdoQnLd62qgQvD63cLoQejHkeMmYyy2Gdf9mjrn5pAXD",
  "key1": "3nAwqKh2mtdowDr2CuwcTaayiVePqRonEsdv9ULJ9hgG75HSVKfRsXvFrcDiywzXa4jYXuLVcr5wFtpDqa1FDmjs",
  "key2": "ftzNaAD766unL7YosZ5QzxW1WBCzsFT4SPomRRBNGJhG1wM2DHaJh7LS9wZj2ZPMU9ADvPPrbchd9utpcBTx5TA",
  "key3": "4D2tr8QiGSzkZpfSNyTJrTmfTNXfaZtmHTJ78241oNUsvsvEpDoUKHNoCVAHCdtxAU7e4E3XkKD32hWdYcF1xtHS",
  "key4": "4SCF3eyw2t5eN9s45aRUADLMqifY7E4pBFLasEPmhu5rVAW2h83hhW192HSgbUT7NvtnoyZvsCkbvpnmBpPPcoxc",
  "key5": "5rLFcNJzDrdAudtuQeGswtnAaZFjFyMwXLtuL4kyQ8gxQyN7H96ABuhz9DrFbniPbBSWmTy6wJCSnUqJHQw1DncL",
  "key6": "4WanCiVyrRcJMCDqx3RA8WtZt9zeNE6nAf8YSCFbQnvSZMkkuoE9jrcpFLi4QgnTM4M65cibGZghEhxjDmsZE7Ed",
  "key7": "58DWz4VVph5t3msg61L5kw7J99rc9dH2tKhVuE7PupJTtb4nNnrEoXrArSfy55hyVc3WNaaFTTAMPDdrqBs3EhYt",
  "key8": "4WzH16BmQMoJkfZE8UxAzU9x6M8guriE8Td1y39VqhYynwUnX5EXLTfW6SLyo7hGjjL6vpzmPem36zMa4SrEzFsa",
  "key9": "25hatQfRwRTTwVsKgUXzFpHgbthH6ZrY82GyEP2pEmToMbH72WrCibAnN73cTmqhrHEgqDMVm6j9xoqfJQrxrV7G",
  "key10": "kT3S88gnqXVbtcxyqsQJnNvHFaSnXwFRfacAT5hXU6BtpRpVXsKrNkf9HAzR3Wc1Zn5uxJxuJoqpfcai9dYCYKT",
  "key11": "3cAEQBuTtd6mY3KzAuR9mgxPtpcVHGGE7E4jcohBYCSTi3DZTZZRdG1geEk5GbbKoFJSE3n7uE3DCZQot8c8a3g3",
  "key12": "5wRNXLuSs4suYyWsRBY8DekCbn1PqtmkWbSi9buvqzL41JdaqjCDMLfinUeQWSAjcsXuZ7e9PuTr8KaMicc3HNZL",
  "key13": "Jgza3VSz4zFWBKkYsAmAsuxGUikHL1Qq3tmb5EEb4Behv8GsL6bCE1zeVhbXpswfjX2fMNx31179x6FS1YUBzhT",
  "key14": "5qXXmMx8YDWrmEMpy2cXmNC6HJFLu2B2HJxMTgCj469y5mPfUVe9iBVywBkCs4dKxixKYTfgBJfuEHDDpFHjgAwb",
  "key15": "4C2KBVrcVnaP8pNiTgrbX6oaYP7DvvsfWRo54QmUdQ3AmSja72fH1XAo94jzBuxN4racGzuT3GAEfbWup3G43S7r",
  "key16": "3cz2XpBAALKx6WFbQk6UVmrjGCChVEfLD37PkT1hoJvScSaNc4icLnaErPpj534GkArPNSz5t2eGWXqif3icbbra",
  "key17": "5XB79bt2xw96seKWCTeG2GLRH5EcLUK2yybe7z5ady4PmeduVjVyLUQ8pWBmtkkEK5hzhWNj4u2TMQxjEMSqMNwb",
  "key18": "3jGWFkhoTLh1GKc89yKtSehZB9HyYUN1orVGVmBJ6d3ECijvc4HGGohZQVtbcp8ywc8VkUkrb7A41hGcrhv1c8UU",
  "key19": "3HmF1i8wYDU4JSUCyaKp8rA3EkEYEV91BTndWy2ZjB5vmrQ5eJJTXp3292Rr762uviMnPoKmdQaWyAjPYYnFNhu7",
  "key20": "DFj4vb7b8kZ1zmG9EiVotgYxqTv2kqEfquF2Mi8DED7nU4oGeK6YbdAQVj5pggcR66JpSwQBdDJJm6EhLHdBWTe",
  "key21": "3PiZwd1TeX5uW25dehcQiUr8PMNpzEFr5H9mjU3VNi2yiJgtJmz8dKvX8eG2VfzHRrpXUbBNViC4aM1rFc85b9jJ",
  "key22": "41XBD792zANocSn5KGZJMnMUhct3jgKCRtpM3Y6DJn4AF9Z6mPVSqY6wqWjz7S2999JP3Fn7kQjdywDQaZyLs8GY",
  "key23": "5w4Vd9WxTMWrmggnf1S9pqCVwtcfBUEuDZhM9Cjtm4Q5mJ8BrXiKt9z67v5pVom45UK4WuuFck4rnkXu2xPYpd1",
  "key24": "3oL78LyoFKMkTedojoUP4NsE2Q6NrptUBBfZSJvn4dsFZMkaGCEF8T129Tc1TQoaS5wCSeuCGPytoFX4T7Dm56yQ",
  "key25": "5CJ9wYTF2bnYDsrN6XARQyb5V7Zo6ukNXxnEYtHTKqmwA6GSpTEZiTwEBmub5MEXaUMTy9DUqfFiskGiFNVAmqAj",
  "key26": "2PSuyScYiT2EukT85ubLRdSosd37SmpNEFKe3193V9m8YkknbsoJ5rEtEQMpzctPApYtjwjFz7JwwKjFgNvvDG7u",
  "key27": "2QktVrNbN1DM5WRUkMDbpapDVJymVW5khLKRoFhHVR9Bc4xvRL7FJmmu2kAbwCWkasqmcX2ouur8FpzyKmrFAEh3",
  "key28": "2dghnBQdySbuofa1Nr7mXnixRJvkx5q4aZaEYf5yutFXwmMXhRBN8kiPzbrTKsDajzogDR1Ubk1YURj3E2msPSPX",
  "key29": "5XUHk5L82oziej5YqYT31tv2WEfa4M8u3EnrXjWtf5DihHsi8vK3NqzHfajpTw26ZMBfHf2vKYZPo6Cy9bDHjqKr",
  "key30": "5ihYCALmSYZDTiehA9zfGHKbsznndtRUcMYCvDNSBeoEDWYE7MQABbugSuyoSr9GrwEux2hyqZG8ZeXaJJaipvU7",
  "key31": "ehWBbgkLhsRgF7Y6VasC6NAsm1vnmXcUuhg5e8XGw3hBtXJfy7zKDuKCb8NJdq6FwthZDkmVGxiV15p97QicheT",
  "key32": "235CYrzaGPmNy3SXNJ9KDqWYiVA6RswMbwdtiaNDVhDcF8u8PhKimuMd9fgwy2c5bxLcqhuypJ6AWpUmYUYPn6eN",
  "key33": "43y7gLHQX11ZN3cyxcfvizPEQq9ZNHj4Wxnn2bzzY4zQVUM81jjXdatzMh3LndzFJBzS5m3Y1cuH9r6YpSeST1kk",
  "key34": "5vNMyWSkXSZQeoK1TELpmXa1PRbGnrc1XhxwbNytCvjeQzQwHK2VrARM3QwzfKCE941aW2WfaV6RVfygzypk6Bbs",
  "key35": "5MGVhnh4ySajK3jgReRSwViAE5Jg7aZ7eSgnZJxPzfyWmJarcv8CTfswa8WdSJpJL7x9bRo36meVRHBu2DTCpJS1",
  "key36": "4PERmcZUFLCYpZzeHcKz2FxPW6LNWJY3AAMKY6EzUoijouSQc1or6z61Hvcj4C4mv5SdeHkWmyxYGfFJgK3hkeYf",
  "key37": "4ZkUBR7n26sKahMBvLtrhzSBGergjGzLM8uK9H3JEs5yjC6EKjUGeEzC7biqX2VJxJFjg6cuntxsQFpmLcuxqcjz",
  "key38": "46gH4c7P6GxeceCfhJcosGKSyZriqmUNRQbHMcnTWF8KkkgwpeR3iXPAZo968qae7Le18JoysFG3dws95BGbx6WW",
  "key39": "5xHNgWZs8NHtvCfUcpzUj7NAce29miqHmYB2nuDoWcjMRSRUtsfCMYtBm1BTN6hDfAYqCr1mcq6u8Sy6MjgAczou",
  "key40": "KTRvhffD3HjpA4RbB1n237Kbr1mtK1RrywnQd7KB4MPMavLJs3sdpoVKr84uewJcbwKNdMCUJf2qk4duLKrNZrz",
  "key41": "2EFGeNWq4vbCUNaN3PQEbWvTBnMu2ySEhhuhG9Rve44YXUPta7iZzY6DPmjv4GvPq6AvZmrrBV56Khh45rpG9Thr",
  "key42": "3Vuagg13odQMokLtA4onbMf4ft23Mnz8k7tPxdBHzQnCssY9Weqdz4YqqBdHAnTK4AgJg4EbkZmm97gdkX6aokBF",
  "key43": "JWLpiHd2GdXFk3sa3zLYV9mdYVPXohW9Ysztj5YZQK8x5CzR6hLbPYdjGvJ2L33ujaV6zfJDbKMgnXKcqReKDG7",
  "key44": "3QncZxEMBBznwJ7PQeUBXCEPQ2RJWnwZxqm8ZaZsAQ8uuVNGe2D7hX8EBwZeiXwmifcfjAhMDSEhXWqG6hreAfuB",
  "key45": "562LSaijGmDjZX5XnaUdS9ePZVZnGLLwyLQMwkCtiMnMEyxmvUh12i6Pckb4L92bq54yiJUu6phs9SBGjnZpS56v"
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
