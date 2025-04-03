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
    "43yx3riLPbpiC6B83FTTJD9WvMGwoLSfTTehrkkQhr676fQ14tQw21ZgiSsQDRCo9djMy8d4BaemfZSfwPPbxm3y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ybYVMTS7whmgaHkMDN5BFay7ngjAvosAHdwWW441kWMEuYjft1gnC8xegDCmasm4kfXVFxndjCUYacnMVaEWFZw",
  "key1": "3o11nPkGwzb96W8ptugNTiuRb3yYgnRYBuTew8VRx1o8hw1rQNxtaG88xFz2Kmoep4LdbeXv4tJBdeDpbWooDqQG",
  "key2": "4LpUxiLr3sPH2Lb6FsFMt2LtaCBo9vS96mQuQ7aKT7VjSeJDgMbWSVbyS82SSAQVqAyCyxNgBtF5EDcvsQXR1WtN",
  "key3": "5Xi3tZUffZ158a6xKqqdaytNc2ANh3i3m8hC9BGoKhY3YnxDRaRPwkg6bBLjixs6YeH1tuYiLm7yKEUpTgWXHrkf",
  "key4": "5hCAvqsb3wrGGUhVghNqkdpWAvtxcfpMp2X65YM9J8h5w3FwMxX4NPz5gKbPzQwvBHH5rXEQwbyUD8bFc69y8EZ",
  "key5": "AgCwih4MGTHe9ggaUCXyfMcZSGyB3NTSW2qpPGPWmCmcVv2D7Ui4Ruq4i2MDhtEqkCTK47jDZK1iRUTRSnAJyQr",
  "key6": "4WMNzhjguAof2xMqv3dCjNHu9CqXf2Yvx2hu6gNNGN1uBJrV9PmQjYYJ6cTxchQyzfkbbaK7K8timpccb4yCk4Fg",
  "key7": "2XD7sSdTjonda1nqydhqxrYsQ7At4CmfhEWGAw1nYayE9hztmvicYRwvCD3WLFCpfSwye8AL4N25VfkoLaiVhtSM",
  "key8": "DLARrYCUyHNpKxZFMTtcVaAnHZtraVKBJxYMZaam8RDHie5bGonAJqpsqkm9qM8Xwr1CYjPyjfRU6TeizhqNczR",
  "key9": "KFz6rR2C3sBytof73W21Lj8zabGtDcEsuJYkJFpDDPRWCiX4i3yzqcaM2C8DWSDXAuVjzZLxLump7qyUg1LTGeg",
  "key10": "5UWRBNXvPMbqYGQXJtX57ZHrdgTGtc1vSjzL3VNE7oUuiAnRFcYHy3vsBcCgR6btu8zxEHdjK53Km5iuJ72Snsfq",
  "key11": "vQzXhR6gTHA56wZzpEZJxi6FAZEXCtPxkk8XPF1oibt2Ujg7fifxyo1EXVKXf4RcqTiDx41JnexGcMyr2fKXQ1X",
  "key12": "4wyUj6QSSHBXmjRZcCfedWMmzdfgFksveeFxyTjFtXFVrHgYvBQZY81huoNEH9DLjUSWmi7v9iBbfMvbqJqydnXP",
  "key13": "4pezxJibpAbiTF4uVF8vAqKP8Hrz77SYwUdPHNcNquif64MLrE8JwdSNrZBG6Vj3tqTmgFNNBkDnSuR1ZbXnAwXD",
  "key14": "6Eo8UwNZmhjbArXn6d1JF8YCTmttbqJzVoKsSnP1YEiBLyNjzkABYd5DmdALCywgA12jMXc4yNJPmeLW5ZMLrte",
  "key15": "5qXyKyy97Xdi46ifhhPxLt5QdbqxemLLaxQ2bw8fNtmaHDcsLqnZvLBEzLVxEMjjE7NfoHq7wE8tvsksB5XCFBMn",
  "key16": "5p1eiy31kRmNnmCEZB77RhEGxMdZEtzKSm3WV3iPxTD4LAjJryFxdheA8fTxAVi7THjiagYjuWJY1PkWVYjkkqY1",
  "key17": "6595cZwANpCpGNnzVetJGek8Rq2yr2cZwHHdnjsm6vUwEka66o9fjsfz66eJGVNgQJkTL5KTJEFsXJuwGw9JboBj",
  "key18": "21H6ZrwombdgLLBAmwu6T1sntxhxGmJitk79boEiBhj5khsr5bmmprzxDmKPWbgjQtJ9YH524qQWsXftMgD7TwQS",
  "key19": "5Y8iRrGWHD12HgygAcwAkyimvrSjXySzNPyuAyTwNrqERgJkNffVcpyvU8DNW2AdFBZ2jXVsCETSXwCT9hSG3Er9",
  "key20": "5dVexNgkh8HcFUyejDvbQsNF8HXMMujxNrN3iXFGKDNqmrXuxmR1Eup4q81AJpsNKuYNMfCsbkLSbRHFeYpXQzbu",
  "key21": "3M1sP6CfFTHvX2jkbexMTpZ6sYbLTvF8omTsVLjf2HTsksghUrwvxYMJYQs4mSMAnreyXNm9suAQ7ppHD7HvRAmU",
  "key22": "5odA9szt7EnBk2LzeXqTjTy5wJcHpMhsB9WsmCVuJj5MofDGC9PvtuNb3srkXLYJfenZSg47gPeUnvpYq6edFLd",
  "key23": "4BK8eb36Webs2xHbd5BRyj61vAgFbNvPUL9qY4grGMgxcuMQaAhssE3fZ7MvKhZTQhATvJNkpEx2K4unKZ6RGGJz",
  "key24": "2iGiEP7aDUN3Vi3h8SodrPwwy3PiTdYPSHT5cUVanFjAgBR3DesAp6X5TGpkaFEMCnWvoPBR88isfjh8w3ohgZA9",
  "key25": "2SC5aqevz8uAfUye4qbcD6saJz9UA52hPuYq47L299Ds6VXkZotE19mc3MQqxKPqJQ96GKYFpv2w8ZcbkgGMMdY4",
  "key26": "3cjMyihDJfZJGZCFxUQFLDQEe787LKqctarooMYCSS5CYZK29ufrZEi8JHGNcELnd1LMTGFwQinuduhyTQbycWjW",
  "key27": "5TiZB4jbDEEMTnanpme3NYEJdAcFfxFYj8vhJvNiFPC3oJofhRWpbR415Skcviyh99RJpCXoDVrDTQJ3ePsnrMqk",
  "key28": "3QqG3rJMCTxjWPhsXFmSn4ZDo6iQ5KT2ADqgCSh8eFMbEZctozXAamSBQswuzCdc1TYDaaB2vdJqhCASurhLCtP4",
  "key29": "5Z6EJ1uFEdKKSWB4As7FiwpbfFtmFBb6gYzKfMBnZgomCNWQXZGoTGBm3MMn5ojgiTkjefefFiw38w5b7awN75fh",
  "key30": "4mpr59FfBDC5SWAXNXkZk1kmj1R6NCaSpLfPGb36EEwYpSvRDQFT2KdwUdvt4uiwDRBFc7K9dNmEGsnoxZCWMZry",
  "key31": "2t4NtDc3Zi5C6sejEVv32Re4n2Q9F9ZnUqB4URwsuz7hXuxdPZxw1QoAPRHQVpN1pqU7fWptnyDSBjYAmZa9bNjn",
  "key32": "5mhHPYn9m9S8Vf52DicJk7hiaeWz7oz7XVaVcoWGb91xX33oSbtDbxcj7CVjnnZ6eVvdEeH925oGdiaz4b838oNA",
  "key33": "LAwsrUxpdJixrG2EyeHZx6aqjuRwTdhYrZusjZbfJwgbbhi98pbELqA5CaMYireGCEgofn68UhLWvu2hdSSXc6e",
  "key34": "2gC9ZqrzfvU3AcRyPQ7GknkTzVAYWMEYp5zzmuTuSoQDzT6yPDkFTAp7YMQx8HkZCCkhCSnwev19LCfWQyibLCQj",
  "key35": "371jha7MABTX4Cv9aityQuiDntmng2bw25xuBupqeKXM7yf1seprwU7Qc8Ps3TEghLDRhx4QBTVX1hRGuSuhNhwY",
  "key36": "3WWhroANHyeoaSFRbaxYWVcUh1QAVGYg3uD1ckPhy2yGN8qgVuRJKgKWkrXdmVG5YU9HqdNHUcwsmdd4EoijFXY8",
  "key37": "5DwvgUXUHRL39SwM7fjE1CnwfnzXoKAPwLFVPa913yina4y4uSwHT4FtLSUZX9pkXQSzRJHeKdmdGJmrsXJG4YTc",
  "key38": "5pLKm6EjgCCNPeSEBDuy2duEMv8Jtd9yBYchmGrcwBqWzA8pGvgzKaPoP2i6NbdFUk6BFd51sTVQHf5GK6rPtJUo",
  "key39": "4Z5Utb2uT6xhupnWxg4bisQm7pUCxbbW1KSzG3KVFVGxBpj1wC8Xhs2RMyZRQE2tndRfYxAXeah37HZS8rKAm3FM",
  "key40": "33K3BqSNRuiy61oopzipBAbYe5E88yxDq3SacxtLt2wUHYw1q7fybREYR3P9M2S8VRGPHryrp5MGG1e1p7SUQi8o",
  "key41": "4fvhWJT7JEnLkdD2wuMGszHXDq1bMX9GVr83YHzUaLGjUPq1DV8A4j62dWMVi2LZTSsnN5YmBFfCSsu3jwfUYW5K",
  "key42": "kA1hxzz2abFjedxc5H2tAwt6HexE4DAFsBxwAerS4rEMJxMrLebvTfC1LaphN6WNxc7mtfyotTWNBhh1ezq43UA",
  "key43": "5EoN41vHhfaXgJXvvbCpL1WQz4EJ7AAnffn8fbVR4jfrCEMYvDhPCzHNtRwZGW2sCyqCdrvhneRpdsuaNrpQSE2m",
  "key44": "4WX72XyPuBpvc8wEyzJXwda5yNV48Y9Scow4B9yP6Zz4zHpq2Asv3sRzu1eQ54EayX8AFwzA87dViiWrJRJpuwsr",
  "key45": "kEGGLEoze1fn8rw16uRhpUGDLM5JtCFZZMimg2sCoubqtn6R6J4GRHEgeXvvnXzkND8tkLsoTuiZofWG3PNvssD",
  "key46": "5H8GkgXBH4oYQDhHBhd2bPFWFePd45qjtyFS81hcdHU9DcTodpXtVr3JuKh9yCeXzhPwd3pGmEniX1b9R7bqNNC7"
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
