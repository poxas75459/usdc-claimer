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
    "7XGz1D97zuZq2fMikQtyxa1zgZYbWZxFVtQLXXHqdgthCq2yRRVByx41xvWxQCeXxu8bVHKaT3KyNQ2oezGrRG8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KFPYWoXR7mp5xQo7JERQquhCVJW9pGXiDLgmJK238mBuESLwBrsWtwZBC6ZtjFrbH5XVM8V9CnvmXuvZUpPkQAL",
  "key1": "2JNRnzd3KNz2jBrsFhpNbpcjaQZDi8LUp2wgs9mduiyZGDY4MmTM2nC8UEicPbme7FMrcaXuFoJ7hXE9b82sp9gp",
  "key2": "4HYrC5HEkmvK1dnaPNQmb1SRuZwgpyMZSunyXvR3W94J4QFjv743BFfgWdLs7PpacspKTVszRZV6Y6AgGLUHWwjS",
  "key3": "5ERtn2Sy9CuEtx5pXVDdsW6K9pnMsb3GVQYTWCgGrGqgpVCngPzTS2utW6ChABdNbKzQjmyUseDGWL8LzQTZGzdQ",
  "key4": "2odGBPo2Dp5Jfv3rbahaBXSVf3YHKg2R1W2w4YgMb84Zy9N9QXhUuRC8EWndGSyRK9UceDtVXjzWFA5PLLgC2nS7",
  "key5": "2gebjCDGS7zBg6gRM5R8dWMVWDjDaJb45wSwMCJMdftkZoGPvEiEsxp45nCcZFt9tf5hpwLrwbL5pmw9xMk2W67m",
  "key6": "5Lr85vk3e2HXtz6F68JrpnjiSi6vc9GAzqDsQwZQgkhkrUxUkPCDwTwj9riVfo5qEXMcPDGxWHfS4RQHX9nFvs91",
  "key7": "4gBkBDfpTd6uyEqW5P8FEiBPVPuvh5SEcmYDhktHHMuTwZuQbcM98UPmaGXzpLyHAUdGFyZxuKpMUjcAyPozKBkY",
  "key8": "2Gy8N5M7K4S4BLQtzBW2ufSg4ZrFKLvQ8mhMEUCByefoqy5Wu64sRHb5rY51W2kYUevwS98K2BnGcAvwf5Nx6STX",
  "key9": "LG6aQYrTgeFDRN9dDbcdq24q7fE9EPkNVP6XX76rJYCfog9J8Tar3TrX9S1sjHqs9zvgG6TvqytUogyhjiodN3j",
  "key10": "dDvKutsPYXTbQ8VZADDT7r7ytcw5a37WYRMbRFbakTzTKFdH48wBp7KJkNNQ6rr1Mz66Kwq8p5evDk8QFrmGTpL",
  "key11": "i2zBjY6VjuDTstmmTWrXDk14t4Ppe9G1iCFPUveuzrFtvgdaBTmpzowCP3EEQgXC7Cra51RqvHHAchNW7JAkEte",
  "key12": "4NenjQhYo3vnr9zTWqyxpRLG3s6R36ickbpRyi1ZphroPqhK6H3vcgQW9ojc9aAtCugqJg6mYNce5Q3KEhi6PsoD",
  "key13": "3DWAazSZENxibvQa8wKP1unUv4CjbvZs8TKUZ6cVwoHEYZ5FjgFDFZQY2LLR4PBHtj9TwGTeDUszxr4qB9aVHeWn",
  "key14": "4QKPPnhyrNTjYPQTagN65bS5kZ2vXXPgJ1dqPQZPhxZXtBkhSiEvtg5d6Q1PvmqxfU7E7oJDCyiS5CMcUwmzP1gF",
  "key15": "2SswUp9UaGzNFcVwNSckpHJg9wZV3c7ZksbYtnPwbkGsDckEshxuXp6bfqSxMo8VvK1NWje5x8ufXGeWJzzQ87Fv",
  "key16": "2PeRT5y9H6nztNfHRHPA5ncxSt7G6a1ri8r9CnFprvKmJmKQvFRvNDV6EACQGcQghMeDpnxKUDqSCUWNGGrhKWS3",
  "key17": "3NZLPFifPgXv8BmjkoAopyNJRwi589feJqyYzR2R1YDr2jmEUAJDXtZDNGEDdwwfycz646Rze99R4nZrdnk6yDkU",
  "key18": "4waYy98Fm77bDCtRspkUjwNyjcYGeQs2iF9bGLDdsfkCMFDpu7c8hNUktoDRLXSpdNUxnhTH1tgYB4h7fnfYPQHM",
  "key19": "23pL4r5uAPDybo3vgB1p7YKkUjS1F4HzCf8gcf4zfyH1VjzfoVQKmv5V6kk64MyW1dCscT6DgebAbpDffpdk2mKf",
  "key20": "26cF9ooDeY4zyLMzq5tGJVN1krEqhLkcQuP9ea9omfFDyzTR8TaHxterytsZT9gv9PhzCbHDKeibEa5WDq6VpQqd",
  "key21": "5uG319mXthLMBnNVJxkrynM7pJ5anrzfga38zKS2yqYz4EeXznC6fcF9TYpHnWprwQhcXTZNAnYuvc9zEX2Qqqp9",
  "key22": "2j8ZCtBDkCT2HjJXo1XB4kHGPTRJnFbasKVUT48BPkjN2aJAMbVfq5pCB4oE53Lnr9UDmFh3XkmY5okqaHPEvu83",
  "key23": "2jB3AaLFzAcbLbxd2pqDMKENnswGXU5teuBRrBpQxz6n2c5XNmGEVjHnq8YYPD2UkXzD7kqoFYVXArhwhEgSwScx",
  "key24": "WxZDiNNkAoZ5morc1azRGiamXMjbvUUzcrUFZFfSUV8wvvAUXqemjF2HhA4zjf995BjGT99zCyexQgXRSDipix5",
  "key25": "4SJ3cCimQZLn6SAxgF19wQsnT6b4U1WKyWcUxaS6XQLtVzwMqmLdAJMYviXBFEDDnwX6scvxtqc5qwHDJDuCDDQh",
  "key26": "2b5y4PjEfu1R8AJ9ZyjN8p7oVGr1iz42Kmo7nw7SjE3A3msnsEkwu2UVtnvbjWz3Jr12bw9U4xmr5AWbMmmSj4qG",
  "key27": "2EhG8sCSxVk1ZEZtRCq2pKNKN52Fy8qNNKdU28XXbJUC546FAo1WA2wRRuGaaypdm4iyBXe8Pi8UoCPWYV8PVYru",
  "key28": "5MHhVWnPwfrML6SwZWedVYKZ4FED1yrRRZaAQ7nkEUeMAJeXVJ5QP73giedtPGdjdsrtHtMC2pttRmchh6CHDvxc",
  "key29": "3RZnGWUjM4qV3S9HWbVWbrefhLumtAU65StoScKMHLab9AXPt3ADFiHz6a4xupD275URtSadMd21L4Xy7y5n4xAw",
  "key30": "VJ7Uq6JMDtVbLc1PcLJFjmwcBAgjcQi9FMd5WCDp5UyPh71cKdhp2Vbya2pkouTFp1pEhybaLru3vKRPdY2moQQ",
  "key31": "49BabWT99Pbts9pqb7WHoGS9ngp9mjwqye8RkdQFFtV8iCaEnS23PYAohsDumsm6FfWuYSE2sxSGLgMmoyiwwXYB",
  "key32": "qsZfxpRQKjTv45ygKJY4zEJ96iXsya7MUJBxVhGgzn22khRvM8GCMLgATY7F9NHLdKFqPJzwxixQDNNex3bsXJf",
  "key33": "4NQdtX8UmXE19Utcrs2hEw8Fy7spygYEJcWLVMuM3KKrXS8w6Z99bcu2ppfjMU7ftKRF4CewxuJM5u3QUC91yZav",
  "key34": "39a2HtkHgh5Yb2W3jdzC1cVHsuzKVyKzh4FQKWmseQArzJRSu6a6Xgfb4BiW1zqmMtp5wnMhtSR4cntPfe6JsM5w",
  "key35": "27WRfPYDSGC5e4RcJ1DHWrL2rKgYt2jzB2aVqMAvVbkYAoN52APGhovJWYMSwTfXSkV7ivuXqzQfgPonK9BT4Nvw",
  "key36": "4YMwDoAtF1o3Xp4uARx15X4Q19yy5peUPRhh6jUdXask3MCjzNsmDCVpqTiW4Fs5bcmd9PiECyzz69unj3rvgvvs",
  "key37": "2ibgpefbRss3zUoMbViiRsHYHoMzP2xHK8tjsTgW81E2EFzW2sTL1c977kWwbn59yNcNVkaqZi86vo6Xrxq5Wcrm",
  "key38": "64MfG8nZHwKaZhhKzBaAyY1iWF1FWPnXbNLYHA9GprQtCWCvq4vUVFTZ1cZVvqD9CfR6TqZTJPvG5wWV66mW5pXP",
  "key39": "5xLXvpZZoeKUKwzDctuTXXZTtKQ2Zst2sG8uWREt6hhEnYEADrYZiW6Q7FwHx7xTSK4Ci2F7DcLSB4VtKuQMinow",
  "key40": "W9TVwvnquzSqdh95n5CQodpKvPzgQ4TsgiFBVxvAM5pF9cNWMcfn92aQuSAjk9xTm6EVp7E1DXWr9UieyBmT8v4",
  "key41": "49zQgY3TVPWhoRD4z64FvHGs658ssu1Kwh6d6wDkwLcNSCFBp6v6YpEMB1Jrrm5q5LYVoRYod83RSvrEvMm2tYBt",
  "key42": "5t22UbsFtLfrKTirHLtY5gvBMoBz8c3z84XChRMfJ1JCJXptrZ82CbMCYebnQf7BYtfn5SZ5ubvnDH1sLdxLSV99",
  "key43": "2fq3GPNhTqFK7ST2nC1UiwuYTTcBWJdLFGGMcx8F49EVsSmkCDeNXWXP3D8NJajt95bthDk8obmnSjmZHcM2SN23",
  "key44": "5ogzJifXGY2Lht68SVTNbBBaFUBCTMBQa49AARo2ukZU9xubH4UtMUE1JmVRHfabkmsTCJL7D2H1dKdvGv3YzaXb",
  "key45": "437AyywG91wjb7MV7ZCvJLuJyX2bweS6BuxidLBUPAASLE17VpYgk7px8xMWYPJLVgHHfpUhvkrv2SV6KQed3gEp",
  "key46": "Pfm6dYrpFvxW17CM6PpzeLYEYy8uvXNJMZaAdmi3LPpfi2eMWyv5dAw2S2ETrgih7gEDVAxtHoApkfZfLZqsaz9"
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
