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
    "BkAorcJxoMT7K65NDxGirtkG9Erxxqh4X1wtki1Nba1QZRAqgGvsD5HGUyGEDytyJgtGLMrMs5fQ9hLx4ov81J3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61vR2xz4a2A4MXZ431Kbt1Vve9F2A86ZPtL98JF82x9pYRfqi3Etq21yW41BsqAqyaekE2zicLhb3r8zkC4uUvXe",
  "key1": "3ZWQTqrhwafyQ1jNkhzenmkkKC6bW2yqGfmZezmMtxPFKcJ2fBSTQM35wsDytBunawoBnE6AFpKmUZTm5LGyrnca",
  "key2": "uMQX5rwUugv6WKwrvyjM6zEJTy5yDQR8vvibCUNe1BGgeCsEojAdT1jTrjov4Zf5YEye8VnjBqNMxAJakM3Ytap",
  "key3": "38JDQv33cVHfSP11My6ZF1cACCSzhPkYSvyUgdS6hwStZEFcoZ4XsTPw2wkBQW52EQSdFEkvUjpU7N68yVeb6YGX",
  "key4": "rwZo9P2D3YF1z7VwkeQJ6s4ACbBLPBYkC5nbMZ1vBta8STaTMEYxqFUWYWgzneBSAf99TUnj9a6xKhQvnjvvcT1",
  "key5": "5yRdXkuSqyetYtkgr8brWWdiur1TfNoAknXL6TgxPhGsfrP5N8K37UCmfKicCjDYjdjwWHceQbRRf2qWzC6LTEw",
  "key6": "bVSjAmwx38xE51onpbZnyhf57jEiq8cLdMtLLQvAtKJTXeVB45NqaYc6L8zwqWUyBdLnCmzYZGxWEq1xYK5MGwc",
  "key7": "5JhJa97yVxRHiE4PCe1hdn7hxbdvsWjma8p5AWszwNvnZTc1gU9T6d2BAYAJPkJ8ydXNhoPUPnkdtJzzG7apeKyC",
  "key8": "3znREtNSLsvbqj9hMehM7HUt2fTo3PzgyErdowgEi1X2sMLsmGuMokW6ccw8t34XXKNQ1jaoRd27zDExw8ovGTxo",
  "key9": "4bWCP6GXY99m2HZxAMKcgp7URYC7NjGc9mqxRJKtaQiwfffKup8wPmtGRt8zRi1YtHuA7JyFCmkAhTnj2qs4ReTj",
  "key10": "4ULxEgHXLFNXPMz7j7rBSsMJoyXd6sdnNdkkstF5Lx9jt4NG284bm4MnTtWiR58J2qEGRMM3cCpzqZTJ8Evv4774",
  "key11": "4p3GMTfg1XkH9xvmbCYWMA6hdtUKD3QypifYc7JRjfKtPp2Ly18LaFKnNcetu3efBA6SFQrffRGnbmxkJKajCEGn",
  "key12": "3GVhXuYUGXekeNVnT5t32gxzfgCrXfQELFXftViPaN2FTMi5y2oi34322mK1xVQH3ePjQ5AXjz2PVAuGwDX5cfJ9",
  "key13": "5W839hYzqjHYk3WHtWeWScCHzyfXt679pvwXuFrp784aCf79frp1gG3qywDqG2ndjJX5aqSBNGPAwXb2xEV8wW3P",
  "key14": "5fPgqrKJtewb8K358RYpjW5QKB6pMq9pujHdhXY6bTkaJRb6WYeYxdAaY7WX2BGTRL59veBMwq5ZWUoWYuQJmvr8",
  "key15": "37JdkptrkGCHkZSNpRiMQe1EU6ZHsoj36tNBnjkiA5j52FqRJL5uUzWW8jQLA1JDFK6hDb46VvRtUsxSmSwaNz1H",
  "key16": "2CN4tAgA6wPNAfFc29PMJfQqY3VkVbHjrShDQsFKiRMscUWqbmxq4ezL1dv7ZMoCcH7mTdN5V4DivTGFgfjYzKkr",
  "key17": "4zxKsyJo5rfKuUEKDCNM1tRRTecrzzQ1nazqNmsbVDdca1TPVonKGkgYT7qJcngretTuETVbrm7gD9n9o1jyFfJY",
  "key18": "4yRakqXL9HFZTaF7sEXw2BjxibSy74FAHnR5nzgj7UURNBKibDGuumCcSdzzFVYx2BPyVT36grfVqhZJizWkWqou",
  "key19": "2Zy9V3G39nHSDocF8DWeSY5VAiSCMJeSECytb6oTKJqW8dmc3BHwT9AZfF1x4HaKkzEsSCBqc93q498u9zqCifWf",
  "key20": "3JyHSWQu9Fem7hDbGZ7FqGSDa1qhXqj78kigh9P3DLx9DzER9q8wjgJtTJD9MD5MDFbqRkYNmjjHjgVjVGjHGwoJ",
  "key21": "4ibA1KmqheKsZHSehdFhDSpvXR1WTrnh1rELMHZtiLf4fCFJHyhmR7xohq5kHoFAqbJsaw954r9ATNeHepS8Nsw8",
  "key22": "bnsJJ8q75MUkNQhJAPWTZ3u5j7XPA5Kxm6TsLUmn3io4DoQzdJowXJhJhyyPGgeCNbv2eP1ggzgUjnmJHw8WPZK",
  "key23": "2gYYiFppX6wJKpXWeG65uiqRXC9bV9VoiemF3vg2nsBrDnEbvH23u68QbCUrpG4u3oEt2oqJ3acwUxMrGrs6mkF3",
  "key24": "2PCgx1Bci3ihgfjCou9UFrnUQxH9zjuWJqYaCNvmhkFHXMYUy85gF8beex1mN1TXoKKGQNKPrJyK8pWvp6vw6y5w",
  "key25": "5fNDj6g3yMTKPH4XDkko7mA1qnkQkSDbNUCtDzPpBwYgPMdgNeYdJ7QLsd3Fk5jcpHoEb2B8WHfW8f612Z14vwk4",
  "key26": "ZuYy2Xj1cuEx2Ddq3sZVYVdMFSXdbXk2n8Gm5Gh3ZrH6XCYKRM1uSx4qpSTDkLJhngYHXJ9GXAJK8MqDmgoB53k",
  "key27": "2cvb6uduSCqk4KKYX1GxmMzr1Vkda4ahWUhrg7ZY5rrEEawtZZUUpBQ77XoSKCEj5P1ZoXAz5qVUYh5oA6wQPuBW",
  "key28": "67MbZtb1vJv83XbNaSrD89MJjXghkS2QpwQ8T5u67GnDJRjaE2AJ1BerLQ4yPLSENSfqZmZgchoHD4zy3jXJU5TX",
  "key29": "5tfgsKAPX2eTJnT3h8hUKj5wbv7vTfW5cjkxtQgZARtqUpoeXgHZKDiSKyk8Gtv4H34toeq5NUvQAXsutRbpXfPE",
  "key30": "JzCCshwZDZDEj5au8FTGXtaB8y97XgQgtnZC22DuHrJjFR1DBshjCiB9g24jaMKUwPegGBhjKYpjs3PKcupKRHm",
  "key31": "4TYV6kKK5KHFNemVYSb6ovdvjfpYM7h13dCCzwTxCNBCuTPpy14sn6VYD9DSwbjEHEhkx14dKswRav372A5gHBCk",
  "key32": "269TGMttpbnj8hJLJBkV77L4KzVhu49YoptdHGYXXHRaeRW7dMYABRLSckTRXhkzwxLjgt998t18ARSrVZ11PZoR",
  "key33": "4UKznx1pZxBkevMRQpDsHgwxYTaH1fJ2KcLBfsP7QQ8nB56pbaZxFVjLvhtZVmny5jmRvCMkPyXjKSLcVucNTMoy",
  "key34": "2xj9NKr5x5ebJyTPN2JDP1ib9KMKr51L5L2masMS2pykZpVBQsk7PhDAtmnEDBxmgLCh6cxbLv4JRjbTcE17NZtG",
  "key35": "CZJCg8uRiXipHtpkpShxa7dT1M4yx5YjRZv7YNv1YNmpVDPH1htN7AtFXfN6DPfP5M3cfuSXfZ2tufvzW95BSDW",
  "key36": "XWabr4RPUfgR8yucTRgdmVHjT4LBENPfCpac8RKDKKG4baUbj8HNg5HLiaBDhcUeyuswCLtXivQAdn1apFtnLZG"
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
