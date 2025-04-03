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
    "5wXRSGgcF3jSy4MtvC1rtMKL7MeNJmrV4cLksjcjx6CwJoe8sDSgbQfdWJiqezdMYuC8YNzZ6nRNv4KW5AnGZJvg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43ddqFRmqhw3YY6PJ3Z117XzSLtwapVmijprhntykkq5uNj98nukheeYXhEoRTtFvcdb9GrERtU12x7FaSBBwBJc",
  "key1": "5nYvTfUEJKrk1cXDVwfUwNaHDSzus1KcffVV6txp5LMfSfLoViovqjLTkeVnGvwftqtznWZGEE9qXQRAH7xHrsPE",
  "key2": "5ZMYKuxJ2vfGqcCTgPaC5LKz1WvQzrcvbT17VNUd1fYfAdbg4Y8odtYULbGxnqAjhhX5VaUcQZ6Yw7urXwaue1DP",
  "key3": "4bideu91jndAPBgSJNyR4K2C4UskpbjXVboU7f5gxTrGepWxASDTAnjoAreQzSxKhFDAwQBkARevNJUUGp6V1mou",
  "key4": "4h8NfZNLkTnJSyAYDQoNE2fCfJFED6WQN6h3oFTyg7BbhiirsVkFH8xAALoHUqqtDXT5CMUhytRiysp7mMDFbt2v",
  "key5": "5TKyFfqm6svQncLKnq88aWJt3ScJjYSM9FpGpJ8GxMdbYnXKTTTjkG1B1mXsPzWPKdvWteTq9mM885CX4KSvoENH",
  "key6": "5iJeCwzhWpUQ9LsGKatZRTkKxNm5B5t6ASnzN2nDw1HYJZ8VUHv1vdin1ubJQt8hGJmCKgMzp3Mt4ZqqyQMnJoSo",
  "key7": "61qrKChGRBSS1rLbVqWTaD2t9mhy5YvxkCc1VBVAcggdeKUep39aZZW8e1SLsRW3gUtvAbKHKAhePSekJL62AU1p",
  "key8": "2AEU6swpGcbcMrMsoBhD9LdLz2v8ZA3oQmSFKJeLwwmUre4JdqZYABgbrs7EDJL4kfCtSSERas7E12bC19j6EdT9",
  "key9": "23xXSap16LWdjV53g5T3Ep1NgLg29CCFTx8GuM3VRdRnuJzySXVH73pQvzBjBkPCqxDHvfC4uGaUjJ7RpDh1x19W",
  "key10": "4wZcBLcnchYTJrUQY7xAgjy8zorMubqh34h5fXLEsUNZapanrEEbk7McBzEEp1fkpFninRH5MnBe5fiSkChkNio8",
  "key11": "3DqGh2iKaWBgw4CEVb3NhJi32Ff2YRfkQVtFtVPj4ofdAXmRu2Ssh126DtSVhVtJJLmhqoiD6MejSxSoy42MK9FC",
  "key12": "3Nz57HUdFYAwTX4SKbgJ6zp92AY5xp4UQxb24FqCV9mXFWdiTBDyxd1uHEyZFG5EY4zWgX9YViMBgCtCBJT6rMrz",
  "key13": "3pBV4pJCBSdJskqqjXakynNJfTpb79kFrUp4g4nCyS7x2dnRJ9HorQCpjMtJMxAQNS29bWEGUkH8gNWTucCfTazT",
  "key14": "5j2mwTobyhBq5P1RxziK5AXJ9zBcbGjfw6Qvp28rz3rAUT1gt41jpaNn1uKvMaVfyg4ctJAz52U6keCvswxWxbyN",
  "key15": "45kBdFh18nofCPmAuyFXu9qpc3XjHKD1vdbFkvKimkn1REqJKZpJpLWuTVP5sSE5VF63jTrUJ8cf8rxV1qmQ3nWX",
  "key16": "3qGHJRR2ar3M6CRy4wzEJrvqJjc8wjL782pysNB4aawYmnuQ2PqTEhpt1KrhgFV7ZGypYg6Wvg5tsxMDkz8FoyQF",
  "key17": "2RLzvtTp6ArU2sgE7rARr9vZsq246euGQwQH6DoR5ZTvURzrrMm7gXMUhPcfET14SJdc7ivVhjQ7AdxUuGPBFHZb",
  "key18": "4TmXQVU5N7WfW11bMGVcD3UBhXxYaZtyRk5VzK3Qhj1s5nFjWzHqfuNNzHfqdY4u2xUEs5vmH3YdgNiGyHdZSSUV",
  "key19": "5c9JQHu2RvybB9qQFCXUNKWBVNeSaD9C5ve3JVoUaZpGefxXn7iDnDdwKM6AerCXZjqrFwoWWCuoBS6EwSo4i6Vv",
  "key20": "LeRus19Y5xums7kpBR2xf4bVjQ29JSCXeWoyZHwxDASNaY4bY4b6xRBQBgaPuGBeQG2muoG2smDZRWS4Aq2GSfx",
  "key21": "2XtduaikgCuE7QgEYUd9DnArrwcqKu5RSL9epnG8z8YQKkvmMnqdD64FHwYr44NruXmCWcW82uy4UAmjhxQsvFHD",
  "key22": "4txC2yWxx2C96kXPorh6mLNMGTdVQyjbrCGv7gHZGLCz4oTLLsrXzag5KQ4hpBZUsVthurmXNUq8t93JC59C39aF",
  "key23": "5pAbgobsVcBHMM3idr1Cucv7cNrgwr6dfC3tohfEo2hhAaZUt37DKFcSSa9jURUm9G9abn5v7B8dvmSngAoiizcD",
  "key24": "35R2C4zM4CceV7rixYPdsAKCHVLzG8GD7oiprFYzfDLaxowH6qLEGc1kqnLJLoiEJBA2b4ou2biAsnBdcth65zzu",
  "key25": "4azS19SwDqxgdfkaCe9u3qygiAcNJMwP5uSfWaaM7y6aEvhvr3tar44oiG4QGp7SEwWe4ez3FfoCiUkpAVjwfeXQ",
  "key26": "4vbUVA4Th66ksmZ19fdoaX9eTvDkvwbGP3J1mAFr654NTWuGnG2AEHSp8acTaFjiHE1f1HNrBVoKr5r3YfteAc33",
  "key27": "4RjbZnosGfGbbK8kEa292g4ius4B1AHGhMs5Gb7NvLX7mSmm6NezVwAcfJXaEv3Xg9n1jcZRd3qMNkEpayDTALZj",
  "key28": "3xJkrhzBtnCpuaA2u73TjGfs1mcg6F96KYUddLpYEXK4agPVrLwiUBrGYDCJAKCmLzTBqs3FYdSifEVFE3K8a9gy",
  "key29": "iY2RY1wCZDPsEiZYk5wayPjJFngqHj76S2s7DS2epYwzBXmHhdLjJKDHSMDcCtHvP7qtFDi42oXwiv5Gc964mea",
  "key30": "2w9mBTx29rnqyEJQLqgk8wyEHiiRpcAGn1nwriXGr4CVJfX8YaZcJer7riwiGbexid9vLbxrD7FQjJNoGaWMkX7S",
  "key31": "43DoF5DQo9Zb78oumKc7LswnPNvtk7Q7fnkAcE4AJvwhUz6vKU8FN6dyKMruo3MkJbnQAaHhsR1LuUNruT8fKxgg",
  "key32": "MUNW6rVvaoGhpNDcm7xBzhozipxZrda6VmyNMztpm5iJ1b6jg5geaDDnKe9DpyDNrrmQJDDJ6zgGo4eAPPHvksc",
  "key33": "4UvgEGGmiZk7ARBzrTrrHG3yA8pCfvHcecLEJ18CWgcxhP3sqMegFf33dWsD67Tgm8JKhdyx8PFVvYmeq1cqkmZ2",
  "key34": "24JWzMLajyFHw97RZXk64cuhH61r7xGHZNgtWecmjzhktCMjPjeE5SfJ1vLxXeU5dCJ3bPmh5B4AjmLRs1QaDr28",
  "key35": "44k3PYLeyYRgkZWRYK875catRewbAhpTNsrZMy4W14uzzjXTePsrFxPN6QXDP5RMZADcNi8y5oxu299FjoVzreaE",
  "key36": "3aouGJZxk3KBKxaVutE3kepVijRekuawV14Kbyc27Ld6uj3Etbdkx2k6vLnPf5ixX2XCRsmS51JrfpenEpEp8Djc",
  "key37": "56W78yPXtDDY5oX9aojVrkW69CdaeXLnG5PznT274j35ZGkogGm4dKdeSqipcauUAoBCkCrW6h3BSupPTgeELPW1",
  "key38": "5PNZLYQ5P9ByKnxEZpjYwYfWrvyMutA1rtqmZ4g5Sg8gGLmNowubWivUpUNsSSuhzMNs9UPbeLDQaPW7ebNc4bph",
  "key39": "3RQYWpziR4iJuNgRQh9hM6r6DHQjeca4PKdgQJkgsaUkHzzADB2XzZgVCMQieRV8higvXffjUZRXrx5ethLGheRF",
  "key40": "4URnRvYH5Wwz3a8vwmVVNmU3ZkJbffwk4RMoMmNnVyvrMyojzgd8mqRpc6cDeUu1K44pQdqnoHyASjmUMfTWyqcb",
  "key41": "5Ek3fxrnzXWAhafCXgfrwHTeT3Lcwt8p4WTV3DPMLGwnSaxtGisCPGQFKQdEda1hs6kUB3RMEArqJKQCRncLCfyt",
  "key42": "4gXNTFagMxvCZ6iajXsnEsvSWySAxUcLQ8JhU4ApjFjgZSpCZCy179hmiYdRWWSKrCcB4x5Lk1fq3LNEwrr4pkrD",
  "key43": "2sBf5rVZ8uHTMGwCmds2R1YvV27i8TgWpU4aAjqybsEGxkaQsdD8WJsxjeTHEm9GJ8qV5W64Qzijy4NKwQToCaEb",
  "key44": "33QkEF2xfwXjjBAECsspU3BSQnn4SQrvrTWpCA73PCm65GLDCCEW5sC6LwMWxBmegeih3WxDPWqD6LYWvMLKbQPF",
  "key45": "2Jd4ar4NvVkCL8DunBDuWFysBPr7Dn2LFq8xmjTn6u54m7cf2St6Tr2zsmLgYZ8pNSXaHwTBU5kutn7CyMEB6rQy",
  "key46": "2ZUd31JXTkBRFaNjrTPhbEFYKNpKELJFHb2c5rg18NfApR6sFytwwioNiLhnmwCGx9mxap9PJsbpU14YohtYhPgx",
  "key47": "4wtoUw7zifBcs6hAgLa9bZVy62MrBFKYEjs2vAU7HTriHqaBWGDJY1ZBMwGK71CTyMYbv7BoNX73fR68eHDzb23g",
  "key48": "643mstHuZKWvnfvcQhk9MG8G85EZ9sSgyixUBguujidFrz1HsQf4UA6EPkhhPMM7ZEX57Mv4DXr8TUpNwzrVHYRD",
  "key49": "2oKJP7A7ai7hYdEnqgoCq1enyz4WemJhqc1HPjxErji5EDJUubtCzsoTxA2pVXVpgmLZZFpVK88Eux6755h5dv68"
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
