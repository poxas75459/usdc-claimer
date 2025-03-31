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
    "Hpmk9WQDtnVE7NcLSxaGhAK3tJwKLKwTC2Q1ULARhVhphUQ2P5JrmoknrsuTmnvtsAp3cgZ47we8mR77g1NCUuF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9GsUMDbu473qXhErA8JqKAJRXJip4Ci1dVYe8T8vTPASrT5M4MbPynoFhh9nFxhuo6dxRWnWcBCXSAi6JEYHqG5",
  "key1": "2LM2T6CxUkTBwZbjYnUriWTXEsbMAoEGfJpDXu4T9kRcWfNGBUyHoN7hBFzQKu8hJ3ESjtFwyXns5q1Qz1wpicVZ",
  "key2": "3rxMbiPrkEBmwTqeAgdetrLD8eMCYn9k8YqRVhQJ4mfdPig3KpjqSkqm6rkFBikrq6bXidLcoFN3GWHr47DePCB4",
  "key3": "4YtYYMtbJBJSiigcowvMyLKuqU4xnvyD7CoBukmKsBGU9pfyKTtfwDjUHFpsThk6xj3fZKC8ANygdnCvp1kWbCm3",
  "key4": "3oA3UNcWuPvAbgamjmwRHZ16k1odHVJjhcsHFLfWZKC8WprrBqxsH7veHYCBiEXSVtDtAUo5twXZThPKuV4pAGCt",
  "key5": "2GTKRQuQuyk7BYYwHMGnQRXNuoCxn4aRZ489Sj62RNrczfTd8AL3f1uPU2whh9DLSCuhZ9Gnqu4tGpTUcJWW4SnD",
  "key6": "4MA1kmgfzdt2UABezCjkxTs8sUXuJj23d8e9ae82R4JiapDL8qAuwpdenSdprPFSzqeGeyntWAuZyL7gc7LLCAny",
  "key7": "59pSJnXgi1cwcTXNzHrThMtDomxLYrEtnoeJLDPorQeFygZr4nLB3VNCb9y9VDjYh11A1enFjZ2kzY9NVkYkXVbZ",
  "key8": "5U3c1CpBVYTofaBzA8YrGN3WAZpv1vx64H2tGY7gLu37EosiqWpZZGmykRGMu4ms7GWNpQdn1foTuU1jQqxdSZXn",
  "key9": "2iQpnRSBdJUyAUxu62bPKjEQBiXmHJsRf9wLMLNecBdZkNrUwa9mj6izBFCWdzYok1Y6aNT4oPx4f3tcBQM3GSLu",
  "key10": "5QNHUMyUKcE9VpL27uuEKwRw34jAKeoLMzGRq2Sw88YneRhPGj1nfH98KzAafSZEe5q5nqpREKY69W9UquZPj8He",
  "key11": "5hmshRzpEXg2mYgmyoFcFMQYLzN5Ppwr8deHXoKv8k8T5UmrPWBZr92B8pe166VvfzyqTf26cTGnvE7tnkzGEXqe",
  "key12": "22vnnpZ6gwKYqHbTdtWiuJq9mdkQwsRemoNSnq6Xf2KXCHPoxJGXKGxVLYYonEvNzmSZpVucqWMEfb1rFt9SFuvM",
  "key13": "3bChZLQWeDLMuKNip8bkHaDsvsEoTMha7tCyZun1Hm4WqRLZyipc8dBVK46tNcN5oRtrSH27VFCqNUxyG3RVuCt7",
  "key14": "2BiTCXbLUr74m5t98JUwwHGzR2Pc67v8Togkgq8TYB1i15AU18biFv1BvtQQW2Q6nCAfbZ6FpK5px6ep82LfbXtD",
  "key15": "oGRJ1cgf7EQEbTxfPCys42ewEk5m8DhUi8rPgf7LE48x61WvwhcJKGZu7aqc4hi8T3SGdBAZDTnoYXT264ya1XQ",
  "key16": "3iNtWyDe3P1PhTvSDXwV7VqEQ5iK88qiKwzgM9w3srzNfY7orZ1H1o3AZR9ftBSkTvk8XHxedhGbhR9cd1qtytGi",
  "key17": "2V7CNPHys4M6B9wABAtoGUuTikAQPi2ZdGuHNNfGsy4VZaJVrFVosX3ZjabT9dRXyKLuWoEyB63CjE9mNG1kTS9d",
  "key18": "58N14e8BKnBUKmoXKdWSJtbp4KL3xABYF91X5dFEQaRMSVjrBQym7X4rRgc682tVpfPPYZWg9BfYi3EZc76yNSf",
  "key19": "4UGpfuFqqbMQXyJQzJJJsZGQyuraSp4bphoubLxxGr3j7Wv3ft6hNMViUdrGeSPWPysieRYvxSBuHadT1Z9BWYYU",
  "key20": "3r7HWL12Dxpt3LCeUkRKDNRsLQFXe97Jq3zZ2QdEgUccZRBCqrWrDSLwR67v2XxKrhD5pSuPbfXCmhkenGbgg1qi",
  "key21": "2Nsqvctyv6Ed386nCpzAF33oibuaBNXZLpXV298XXDrWwfAbQtzBLughqJqwrgLxMdunmFYfXeYf9S5PbMQtV7WL",
  "key22": "4z1xYCw2ixo2BXx6TJRUWMqZRyZY7BmsDg9VeKuYvtRsgefTgk1L1NwcAtdktJWrLagPVBj8NAmojcfPDWuWfyBw",
  "key23": "hXMpL2nQ8Eb1ZXTLJad3MoN2L4m7kPHJPdr6PAia8HgZS7Gc2vQyjcgA2HMjqDMQUxZAtGzJtaSL1WzKBMqh5FP",
  "key24": "5D61QfX6r496kvbKWkFf55iDYyybo1kidsfcXQJADQhpcQ1oxoiGR5QtUJTaaexo2riEb9tLRY97m7LhsNSPeU6P",
  "key25": "5Y13YfpTVfJJfgb6ev3EJh7rS5npJeRorq9cpE621itDRVki7QDBRZ8KxKt1Ymr2WxbMtmbNq7peXMwgAsTX9qt",
  "key26": "5tAnE4z2YL6jY2kFNb152va19muGJwJjjDssopD8BZMC3ZPmNgmmyiM3rdvibv9m6Yq88eYuExfWEMMhK8dmm4ih",
  "key27": "4xfDACftokSr7Z38KLSLB2Yp4o2vNZhTbxySYmvTgh1WQvLVZQh1GYmGNm24mVu3zBK4snBUSg7bwrgpcug4rwy5",
  "key28": "3cseHTGcqVh2jnDQ19WgVXMCq13TBPCFtUrBjQwXCoeNYe6gxstrtephCBC41AuaH2bZE9QKabnmyhxYg2WJ355U",
  "key29": "2bKCLHdzipuctUFfLzP7J4SjgEg8A1z1SEKNCpZkVHqZRBt4E1NPD9NXS9247Qjv7fLYodQDiB6V4VKPyPzTPxYH",
  "key30": "2FmqyrNxX9u7bCPPmqwFEXqFxfEtRwJx7y1mzPhEou9q1MoEXGPG57YKsrYrU48hWtjGQc6vUMQzjBJYV2q88Mrt",
  "key31": "64ty3mndyJ2h56Us8r95rJrVajRdUap2MNkhT3XnzpwdshYBkHX7kRb5rN5Nku3r3oima9kHqJxPHVGGsFAKKt5r",
  "key32": "3MTw9hyBrRt44CqtfEThRxrsJAF1V6vQFdqiGgDsBNzu44oEz9AJPAAwN4Lay37qFjVccs1L1GLxpyKPrV453UYb",
  "key33": "3zqcPcUGMBBziJirMLMqoiRRxAtmAnY5f5gbyqjdjzpoDLJhzHCW9BWFJ2rkqJP2jGhZBewUKgGdgUTsMpfjk8hb",
  "key34": "3hsfhHuYHYRu8AJqytsEHSQxCu5omC9hHdoSQhJdYssj6m3FZ7WNr8vNY2a9NFaeGBogUxYDXaKjc9gQvD27Xo7n",
  "key35": "4FhNSSFap7rRPZyWXW979B6xahEzsZFC7vG1y2Y2MgNaSxm2DyCiE95QKdL3Xm6eNyyRvbMDweJDxEArJJA1aix9",
  "key36": "3kRnubDnmFq51rwonb3TmNMKmenw6DHAmsRfUfw72WouRftzXtX4XPEE882Daii4Uvh5HCrXa3uxtFVfYVm8zAKT",
  "key37": "4W6DazUtuFgQnKTqit89tQmEzqTVG2DGjxAGychWruWLVTTFoyigvJMSVnpHkJdZDUzEbWGE1SQQSxNnSCgLziqp",
  "key38": "36g21kY4G4pAbZH3XSrgRPw2oXDanj1Zx12yhYZAbZnShFEpAJErUxDy5v52iQcCn4uBVkeSt1YTWVNC157HPrhb",
  "key39": "49uSckT5o8Xifuh1exMtkUbis97i5cr98sqrH4zcdJUGXuniDEhrm1uwkSjNyCMR4486CiMKkaGqZwL45xkDA2VK",
  "key40": "1jvCVY3UTUQh92tPJXgWefkduwsHnpvpuUYnm2B1v2bLM4Tyw9K5KetKNKdrV82AayC1QWi6QAMXqo5zxywRmis",
  "key41": "2uwqN14JW3NeauKHB9XBdMXQfj1wvE8TUsN36h21UaNLCtxrUuen2mFS4isiqzbLAqbXc9PDNYkTQSYgeygP5tXG",
  "key42": "2z3poUYyZ2yb7o81pSAfgSo7UjBvEijJdGX1LUWSpnivV2CBpmnhBsD8PeEL6dNDiGHUtpJ1zLHW4X9toLcntnit",
  "key43": "2mJHu5pAQheAGHWC1MNFexujLj3ELRS2EMJuZk5yU5HCxv2kmvXEoBjtVYVsbRGNpZ7cQESqWxmruybr9dHNf4XE",
  "key44": "cjsL6Y6wmyP53dFDcQ6QDxkdoSPQsismcgXRssNvFSyzMZ8HmnbXJJtPWLVKc62BoXaNKaTfPFX1sKwJhYWPHBE",
  "key45": "4cSrxVGTm6EbNNVPDBLCWj9T66Nm1AtdwoDBKGHoqvhUjAnc5JYhTgoa6WBK6rNQSd5UnwtqiWrXxHgVCgoftjvw"
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
