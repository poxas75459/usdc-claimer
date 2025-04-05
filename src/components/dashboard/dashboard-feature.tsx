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
    "3Mu8NuNFxRYPZd5Uu2DrGTnWChxmKqmEhSGuMy4H6hmoQioMkbPYvYcGcvJhbtfTteLnhQvpLJKs7eHJoCtqRh36"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Nx3dR1VtPyGYCktmtYoXuVPBRnFzDabDUzCQm6xWY14ZBErp9NGBAoytT6Fb7nJtzmJUPqrcftdVCb2vMHMXkyB",
  "key1": "5b1eParhezzkunr8FhdXMZGupVSBP7B4jXN7nN3Miv1faximhFskQ1krQbq6hPbLVxuXK8ZsTF9HS1x1Nbj7z3sr",
  "key2": "5HCg9UeknRJpmFiQXZuDvQf4i1LgVMb7Lfvuix2q1gKbbSvEY4nCpzRNzD7XNt2tF73bW6qGW9qHZmdo4mg3e7rz",
  "key3": "3MpEbLRP74VfEPv3ZQqx1ey1TiYwcuM6AL9LFnFmbnwaLxsqXr85zzwBtqdee7tkDAosiieqGPaGk4Cv9AeGxRLv",
  "key4": "4Z65pt5LtUTNiFDqE3UbfCNnkqfrdUBEWeuVrZtaaT1MP5YCSZgQ3NxN6Yqh96sxo1meAHd5JvgWLYN1QL9i6EKo",
  "key5": "YH9p6WCLmpSth8gyNHidP4RHi9iwi3xZCwjbLXjvaGtb9ckFGbUs7aDADoocQ6uJsMAVhf9baXv2RVtdjZGeGKg",
  "key6": "59ALkPtMs4jair9WUQ1jRRRgobj56129wxXj4J1dZXNzKZUkroNsXjy188mDnHZ6BzBeyrzpPQURoAr5F96XS7nf",
  "key7": "2ywH6L2pom7VRsuWe46ws5RVuZccZZnpyqPA8w7KEjeQ5RsAXf2d8SfBkFWe3ydWgEjw54oksTSDJGiQDikiBTn5",
  "key8": "VgHvosipozrniEK8tFB839FpJ9QBgEhMPUHHik9xcPSoBgbPwzVHZRhTgGhW3LtoZVUnuKvxpVBYufpt4MNLtke",
  "key9": "3r8aupU3i1y4awQn6bWhsm1chova8CHDLifep4VWSm5ctH8625MfrtvmLrPRw28WSDtMMwcZS1QjDLc2ZKezCwFm",
  "key10": "Quar65XwLsdkBvcoTWeDRhaUABudmbYC5KLTkp61P6GYo8hxnSPhpPQ9fZFCvgQuDLB3HHmcr7vit8vHVVduHcg",
  "key11": "273eGM9xagDfbEKNEQBE39tXJ28ncnS8es3nawi45sKjjvLzvtq7c5U4Gy9fPVodeFpo6t9CBhGKoTYG91RaTf8a",
  "key12": "V5SDrXLPFGfDmzX2NFjoqyRjrrxZstkKipD3Dn6r9cb6K6XYD14VtbkPu3nRUaaNgoAqMke8igwB2yobkdfaN3z",
  "key13": "DcEKbnnUKjFovgMizdX5oraHjCm8x7eF6KX4C6aKML6zhTZ4hp7Uq45R554txpeQ5ey67tVGLiDJY1tNztFdawQ",
  "key14": "4baBTVuifQCBVrm8C8uMgTgsSAzbH8uUmBEXF8F7r2XtJD7kf7GBRdwL2Ci9rA5GUnArpKTieTUWXLZ64FUu22GF",
  "key15": "2rQ7cP4DXdRwKQ4w6GmdsHwgCPvqnocpy5PmDtNSnAdEWhhN7PsXEW4PAHmnMLWA7CczYQF7KwaPdBhGqCLtfG4y",
  "key16": "2nPYngVsxfJGQ9Na2vXsxqy3Ab7XeGMm3ifYSm3s3RY3SULh8n1LPHQpCrAXJnHmwBy1YSStsBBvo5gp8tTGQFRa",
  "key17": "3JTdsZiXjmDptSRG9zf5dRpqPLP3SnXdM7xs7uZdX3ghPHnAvy4m4VcqTtnT9pFYWmcGdxQ4B2y8gTyTHAwF99pr",
  "key18": "FC3H7bGj3aUw3VZyLKYjG6vns2MdrNd4xbp5Z634N9x5Yh7DK2LiQK8AcpXU2cBvzVFK4mgXcMFson2GwskuRaj",
  "key19": "51i34jLYGtz8gj5AdhdmjfEp4Ls5ZfJaukgxYP6oZ8MkvYrojxe7eCbY9YLZiNTbUPC4TQgvzfB4VKvcBxx7ivG1",
  "key20": "2Cjjr5eV5jvoBosSHEYk9CcdVnUsgBDq9jWXBgm1BAcoJX7Nf5a7LWTW7WnhxbEQXqTt5mc4Npque5eEQPkBDpmf",
  "key21": "KStyMVyt74X3FQiefK93or9dWqA5QqBzeGzoPrPjYX6QdrfQNrCoEXfX3NqMcqo1vJkYgRKivZPREQS2rr2bFzr",
  "key22": "vLRCrGJfWjFDYfHm2TxMHfFtsswiTytFA5ivLsaaNAt34rgBbwgygsNqhf4gmdF4vtETfyzfHvA7ZSTorxfQ9fK",
  "key23": "4eHzyUoki1JDorgt1cRh61cYv9NS5XUAEdUg3hzNNPyfGQvt1w5FvH6UWtD1CvBLJsfxaiJhsrTcq7B8TBQB9qjT",
  "key24": "467R6v8EFSsJnyGnuvchveVsK4JVkHZGdXWiCaSwaHQEUJVnBQh4AbJkssh15SXRfeyFphgR7MdGBCh1pA7SabeG",
  "key25": "GWHe1TpgTbwWc1sqEEh6zZ696RKYy6wgstrDqyhvAmiFY3ciAjcAHta1rhDHyiZR2mXRRxp2uCejfTC6mB9Rtdk",
  "key26": "2vpYQ94Nq2UAUTC7f9NPzcwtvN8oGpkZ1Q6jziLqTdCtL6BiLJNCHo9eXBmXDABnJonjPvNLj7xXmgrucStSZPQE",
  "key27": "4v7A3wUPRsnP2TNRpz4tjDKHwxe4HAtcPuVVtNGepkpWpEvMzqv3gjmBzw9LxaoDQLjtsjht4dF3yKy9GW62zVT7",
  "key28": "3GqLWmC2HsuT1s3rU62nz2swx4xengBJ1b7Y5mcbuDDCcMEi3NiyEVMgCFKWutQydYWgjAkBozFC3CBcznx2TS3t",
  "key29": "2ngC3CXuhUaAtidjsqkRhBR6Ahn1WzNzrZx38QBhKR7f3JMrmDgFh1Yg6umfB6hjdesAuPg7wRX4gRHtyVVF1W1j",
  "key30": "5mxhP46iMgcjAJhYbTPdMJ28fjvNRCcT8oNxnPpMUCspJRdEaGQwLnYkcEbQuUQ7jN3u3jUZtSQW176tQD1gbcgZ",
  "key31": "3jmdaDu7NJANB5sTVUR88q7j2yDUzH58duRg48kzXXbRebCm74MDQ5xnR6Fb6Sir5CuaTtDjwKcPJoxPCngcvUH4",
  "key32": "4X1UZ3q2PE91LcwC4A3tVFJKazJNMRmKFJEANnKo8AyEaJwVgh3iRQzZJDiTwv2b6LtTh326PnwxydmJ1xJnAr2Z",
  "key33": "2TVzeisP1ShiFrz6JAz7ATCEwNiS9Vcefx6ML2PPT9TVBMLx2vqfHKqAs1SfFsDgKFYknGjsQoDGELWroa66uBGV",
  "key34": "5JhaxGQUm15SuvXg1THFhvhbfkVpg359LJajdiYBm4q3U5CB5GwPXMX3gm6J1ddkPt1K4s5g88mME1HQuprJ69uP",
  "key35": "4ohbyVc24AsQWhCuLFs79V6RbfrGff43yXjYaWPDrfod7XSmDrz5XaKXh5ZGuMQeu9zjhYYsGAgqoM5EXbCiJPu2",
  "key36": "3jt6rBHbqMpoQAy5xthFKVswCDm7EtjvtXyq7WYJ23ZXDSNxqBHJczS4bWSTUsfTzCmKTaiXm9YS2o92L7vjEacB",
  "key37": "3jWy6QhGtMZnaHXK51KhnBPNbaHVgjqFdRTeewf4TULXRYvXA2s5g9siD5eXE1M6qFbHRU4gNjo4rQ3gX2zbotLD",
  "key38": "G2DNu4t1rGUEvAZk32zbytdSE2xvcoGLcFZPmLjurpV3TD4hrfG6ycJWQ3HVmLEC91vr5iwqdPhWM7bgmWaRcsj",
  "key39": "38hzmukvUnZ3tEyAwRGEqxcSr7AmoZ8mgdLKa2Xq2VpBCxiz5Zm2je8tnCFVq6wXqQKHmtkt7qFD5fMAWPqQqonE",
  "key40": "5vL4K68UEqdJdVDECtRQKmGfZoYeSc98L6yeFM2i49PpJ16mJKk5bWSJngQNHpcj8hYVe8xPw9erSZeddRoZF73K",
  "key41": "2UjrgHqW79GfFe8qFx2HEJ2TfLhhdmwFQVZoDYjcU4sk7Rc4zT1TsRPmbZPjsoSvB3P2yWfsFxXCReXzetRgu9HT",
  "key42": "42F5E3TC7FXfc3NaFp3RbRfRbRkbQkQ3YXhXb3tmD3zHiYxaKSspe48Fz3npZdyuaZw4cJCe5W52nSTc5fr9pzf6",
  "key43": "4c3yzRNCHC8nC1RkFnVMaqiG7n7f8tnTJ4AfoPjuvggEpxAKLDc21FRdA7o7yHM13TAwjRYB9N4sg6hocgCdYsmS",
  "key44": "2HgV1UkgvfKgJLwhGfC8MDj1DWDGW9bcgow6dAhCMvPT8N8gKrHS6nS4jZbe2AeiEXF3hqEZy9Nsaj8RzPqWe9Ef"
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
