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
    "2e4R1M2PF4vSa41LyzEs7QekUz9hSsjJmvCGACb2BQPyMiZktiMHxu4wzxTMGBExQoCr3ofQ1HHun4iEz24DckTG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tH3qRL3YqDZraxjkdiMeTQboU4xrPx1k2g5qvb6SJ1aVHopqdfk4DYWNCRDtW2f6ByavhnSuEzrWU2qpYyGxRHQ",
  "key1": "4SiDNP3Xu8iLFktPgDwnni3biqMa9yfadbrcgdRN4XNBuQHNneSb6kKHdkHFEEpPMYiMenhStcb6mPeMCAGJqBGD",
  "key2": "4duptiv9CVR4MeUKf5ibbNshfhj1fJbv5ie6dMEAvPa89B7Rjg9ssxkmbnG71xhJumZdMJMvzpMASvhBF65JNnNc",
  "key3": "3sU98CKHMd4u5JdupKLteovtcoVbhhnXYL2e7N2BFWCrWTk1fEaMKe8LAiTc2W8WZuxYnbX5jtSZQPdBASoP7HKc",
  "key4": "1oezzdLw9EFpEdqt9BHV4c61sCWf2xkXPvzqxn9xmwRr1LvNrxNoRdYD5t1FoAnTXYGKpJRjE6sZj5k9bgTPY5R",
  "key5": "42EzE8TzDcfrpmkkfGUo5NWe8JLN5ixuPkyKFyMKWMCAr7Pv3o7aZXFbpXd8y62wLGqCk7chf13rWUhJAdTJhfzs",
  "key6": "2wNZfwSXVJd2AkUey22Hw1RwaxyfgzZ4Q8DzBgqDUNeqjBiSber8VHTM7fgbSkpPYQhGXAS9K1rH4AxdbZCtW2Nd",
  "key7": "4wngwzQZWJQBWcXBM8eCnzCcQfHs7hory1TAd6QKESEWTsJ3DB8ZGKZTWDB1A6aLXNvzzAbKQEs5M4CCZ3RzKHdQ",
  "key8": "3DDCTsksstz4vE5kLjXAqanrGNj3cVySGQkZyzRVsKYuc5dWTcAAwcSQiPsYGyEKCHk4fKaNkVuZAjycKkns8t4",
  "key9": "53cDEcDnniRZi2FrasrzpBarn5mV2sqzgbxz51rEis9yi5LXkaCCG4yjWf8opQPmM8quBoFdiiprM6BHwVEdqkGJ",
  "key10": "3t8ScBEjjSf62LxLfNFBzgeTnoXz2aoyLbZhHFy6L1R9FmvxxT2npiSGQnMFDP6VnCCCeLa9jxN5CwWKx9mZaMgq",
  "key11": "F7bhoyB1G56ZdKvUmkGTTVcrFWrxXVmKwi8udG9uzP8PcNTjfFxXBoPdQvQavGsNKFVLjqzee4zE87mS8sXr5J5",
  "key12": "7nftPp15nKXpPbqp2QGTg4ZnQh5su93g4gby1ZX3aSHFb2tUDFjkE8rUPsWnDuE1BzXBdL3V4kkgbaGfueNNjtr",
  "key13": "3UxfB65rQVome1PmnSFd765oWCsCGz5t3pjZoXA2XuAaXin2avvc7zJfRHbqVPsW9vz8UfWzdqbNnKRHRL8i5KFX",
  "key14": "2j3CtBw6HsupYHkpcEWfLpfhQhyA6NPPqDTVe8pvLjXsDjhDMSGPdtZnrwWCFKSxW3iCJc4kv6PqDZjuvR2iixbm",
  "key15": "2t1B9tRyeq8t484MgrSkUZp7bQsRvByuQNaPXACvvdnQJc78eXbLZWxN18d2Lb4ivenK47piBgdKxSB7ovCjpXfi",
  "key16": "Tjgm8o7RM1V7t5ayaXGfWAev5HFBo8AuePQc6fyTG2XZjvRAvmqPJeeuT2JccUQp6kCZP1qJ4jhP3bUYkdxnPAf",
  "key17": "U3eQyCbxnzBjK1nWrHyiMv4KvQwAVyB1uK4zm6Ha1uLLsRCkxFCbnDX5uyV9AZghGUc2PUobqKSH8Dhv35LLSVt",
  "key18": "2NtGW5Ykj6DQGHaR12oSUk97N8B512T7UN6DYCoVbdzSf7PKErCThAYM12bvKJPufuyGYVUd3sJaksnU74P2y1Us",
  "key19": "4RTKmBcb2hN1LZZ1kqw2ZJDJUbadrNoAz1B96QCGzrQV4fMf2PLPA17TgtobYEQ3pn1B3FLa7JCXMscb4mQtQ7WC",
  "key20": "5vKiABVPNTW8XdLKNh6vMGUGz2MF8PU4VJu3Y7rv7w3g39QJgrw68fSpdoBDuwnkUFhmEUJpDaesejDCLJK8P3VB",
  "key21": "4DoFjoLzacYoU1qpwsSiNWwSSQvAr6zZTQpZ6ZjUkMhi89WiUZtaSxEKei1ryDReDmNxzYcFvEgPNv23m7pGYf9L",
  "key22": "344cdNbsF7Ef35Ag68VV53DRqSuUgpoeihoiqGLaLbYzJMi3ziHBnnvkpRvDY2TKb9wMr5cY24dyz6ighziXabuH",
  "key23": "47YTG3HgKDcwVMWkdo71QrSkhMtouZ4SuuGbWS5pCDiMRsr7YDapzL7cXTNsQS8iLizFsV3xG44ms8tmjyGcCJVT",
  "key24": "gtfgLSAKECUyZ7KcPfxTxcLM17PQEDKCh9jh2GR1RjaJFX5UmiUajLe6tEhqbZP6h96ro4uEXGbqYDB4Zozty2U",
  "key25": "61UEdhcDExwMe8BupuP27r8LJkUUQUpzQ2LTtcitcWhMwmgbXucFDRPPUjVNtG1pLhSXsqBjhbqCQx7tXALnmVj2",
  "key26": "nrQ4UaodjPWqiegpUgtoAnMtNFUSXY4j5kCgCfnEiRTSe5GyDfwvwGmA4mKCYxsAGaYHCUevcFZ29Xjy5W5kJtx",
  "key27": "3mU5EygoswMPpmpA3EGWyyPtoVkgGeEG6jM4EpKRUc5fMiCsakNidtSTDmAkrooQHefsNP6HZx2tavREcjc9L4nc",
  "key28": "61ZDPGdncJ5U2Jb5R6fCMEGvHgfaLsdJbdMTU39S5WAQgHNPfhGE2Sxe8sBmCG2r39rtTjLsWP3pKr7Ax4XHRK1t",
  "key29": "5TcJBQDoedkT2BqG3oGYJSaDeHFS8AoMbpRKtN8iCg6PeL2jg3yoXvUM9LtvQYP9toN4keVPrc4DFXDpg59tnZ63",
  "key30": "5MiXcvQ2UvW623urMj45uGcPxr74uNai1hQuaeh8Vsw74cWvSBm7N4geubqBihhhLFcvLW4poNmQtH3RXPLr2KhL",
  "key31": "4kHCE3jLjaCGmMzA52rGYDw5qEQxETqkQd6Gt5SjobG36MuZSrwJcjHdN6TLpAxhQi31UjPnAhKVTBcEMHG6yPPx",
  "key32": "5eNLL9nR31hkdgM2VXZjPKh1AVGWEPbAhh1QHoFews2odoPFHK64EywF3pj9wk1T6YiL62jMU1B4vjZ2JffVGz7A",
  "key33": "2rP3GFT3Lxf28xAGDQtgijCB7At2DP38YrTRFwZda73VgvkcLTzghkMgzPQRX1zHkeSz5WkrANw1cJXgcJUd3bz8",
  "key34": "5rvNaPyGhtAUyGvgns9htS4a6ubADcN7KRFZNUa6jKwEgQtCXKF8HWdCt9WBNnKbuPhVReECuuhLUGYqDBcRCqJb",
  "key35": "4YyxL3VGF3XsB6sXhWaZjGp32vB7hocLHTQc4XPYJAjDLwMHXLxkqpBtPskosv2LXgfQWT3eFHGGcho7BRNW7rxv",
  "key36": "32PUcae68LRpM1G2hZyKcQs5ojPYgTpeJyMwmU2fcWRM6xmGrhncf3koub8eFZGJ7fRCoSQ7LfZXoUJoGE8AAE37",
  "key37": "5vRi5ugdBT1eK7Z56qg4LFBb3NwHcWbbeydjeVuRc73hePi3ougQYvGcCHceZg1gDYz7MupJXyrSpV5drQYExyxK",
  "key38": "QXQXWty3W61EHFGfBTUxHQ3qtPZt63n1GKgVViqUmR1rHi3TDwP6EkF6yoJJd1PW4eHnp8WCf2qinHppzZTejfS",
  "key39": "3r3a4a4Q1rLLRRGtRNktjicydk5hC9tWepdxZuWAQfMZhohmhi6izFC15EaYA4GaHvmQ69vcvUMbAvAbqfUyeW4e",
  "key40": "3eZ6FSJpaME6PrfzbnMzpcRFY3W8FitzUagbgHpN3cJivVcquJg3obbCgaemWqCJTyYLxBSqHPXF24EGjsSd2U2U",
  "key41": "4Eq5x7AXmyETpddhqaEHdDSbjdJMxTonun2S6LCUSL7HWR97vFcQJitaAALT3iVajxbKAk1ojYxBuHLeWQ7PujQJ",
  "key42": "4mn3QoaGy9BaMDZa1J1YsVCJ8FU3BnjiCtDZMF9sN6Mueu6ycyGfpdtG64CKUs2LG7WsV1sMsbjbsQx4ZKxuVnVZ",
  "key43": "4XZB4sg22B5pcWvwuRg7BZUGQUrHaeuS4p45yFTkPEp63gL33zy4LTFmmvRhpb5eAwwuapmug8NktY8BfYPCpKBH",
  "key44": "4SUdLJnboDQtC1s4a2zJD4YCpiZizn6LdGEqBnzvQmZw1BuST424HCKe39StL7kTrj4Ms3KEEhXkB5dnYLdawG9a",
  "key45": "32rEvM3hpCsibT2SD14ZnNXLc9rYa1GSjbmu7tPnoxyvLEPsnhe9fyAudwjSs29BXsnykW7AXh3wSHqHunozTyNw"
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
