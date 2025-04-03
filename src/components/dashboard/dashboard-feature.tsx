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
    "NBGPk7xxMGjyp3FiDbLUmjpKY31eFYYX862Yq6RmQ9tzb2ekm4uztSUF8gNRwcxskye7EGsHmpTRSygPYVBx3ar"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1MumGA8vhcQFctaZa4vUWJ4McAfbRi6ZLzxBzLwi6XkUnA2CP8raY1TZQdDGcEZpnPW6qh9CYjXTrxTx4UsZRxC",
  "key1": "3EasWgrsomm8imnWKtnim2VGiboD33svwMLmDUWNUPeCnwoLRyMyp92dyzFD5g1s29jeKK21AALTgzQUCHoDAcZ7",
  "key2": "5Nn4hQCmcvUidF1U75m4Dp5oGeGtzvdE5LwxmzicQPpjJgcYz1PRSP13A56d1fuBwUaaaBr3vquznUj5fgkZsiaT",
  "key3": "QHaN2zqLdCBRvZvgmfKgvZcrXRpgRw5C2MkB5pZRdxZihv9utdWmkioueGs28xfQNiFraA2dTsj3CbGy47WpZYc",
  "key4": "65SqZddEPCMgvYz37aE4zV1QWU1va8Q27qW1TKibpHdowvfGXEstzFLipXJ4GPvf6BuLv4eTSuXXCQK33tHoewC4",
  "key5": "5oidsn8okUoj9uZLHCYQu98SjnJfB5PsahVrZTZSJJJhhxXmXhBEiNA6k4SFocQFJ9gM6hDn1B65DEQcv29qMsqZ",
  "key6": "61QTUjt4CWnvW6JSAN3tmPKpKFqD2ubPTWvmc6ADAMiioVfHFWzDEdEXiU2JrXWbiVFnRpGKvn8QSK45Y6DXTr4S",
  "key7": "3G418qiFTNAY1n1MeubyrxCQFvdd5VofSFuTRnVHNurLQZMRV9UxEiFJfaZ8R3WqhcXdbHxpXyayeDDCZBGhQWCe",
  "key8": "34YCzm7b1HnBgMiL1UFdnhRn25VUfiQvbvMiBuVpPK2DHVnyViTpjwbHLyQKPRJ8533d3W8rcug6YRqL4t4XkP3g",
  "key9": "2jRBfGRjX7PiBuEzXDRZBDXRVyon9mYPnAVc6xXHvrRujuj8TKeRTVdTuQerpMtx4HsGgrfewcE4LVbNgKq42UU1",
  "key10": "2Uj7dW2qNsoFJbDAhNnVNEdtKAjTGwVysbK9RGopRsgJ2wpRygZmitPjcijG1RKfXVLs9fASjTMjbf1McVDQtzVf",
  "key11": "druj8rwTQba5jFTWYu5VH6RriYXudpS3Ys3E2dxpuYRLqHzfgKSgKkVQtBrWcPHTmXWHEQZvpQcvbxke1nfSeky",
  "key12": "2cKiSWgAt49xh9zRWtLDjx5yjiiE22CKekdDxkPPcRHYn7i6kSTtEw99Z6NLVcBgomB2M4nHF5Sje5FbnAf5u5H9",
  "key13": "5SovxJNc5fR6nu4KV2MZAgTfvgLhX5vsovVWC3azAkeNiJs8f4ZX8XJVEqGbxKjNkBRE7BSC3XPRXXxVe4UVBgfD",
  "key14": "3os78Ftr8kKk3ASWwooBA6gGSpvZJxUQut6bWGHi6AcVBmV17eLUCR7iS8SMnA89VGLfhiwMTARXRBuimfSYWjgZ",
  "key15": "j6pocV8BiiGx671ybuLu6wzFtvxaeuVWxPEhvkLJgCFtivoF1gCpigJAnSZeTKPLBVhXtXJNUA5oHXfs256GjJk",
  "key16": "5PXjJSeHiCFohh1YXCeEtcz8nbHA6mfAjToCJiuDpkJ5pH1G3X6iFdK8K8auFH6QAQ1NHw2423yhvuH4Rrq1Yfm2",
  "key17": "5xbzhQ6kAD1YJFpZZgoJEHAp72xvHUAkHvZEBkx4iTynKXC5A36Y4sH5SRnpFb2nGKXA9nh6g5SrfDHGj6ah13u",
  "key18": "4xWPZjzVQE2nUoxmwusmh56LWzhEQNCwVLEFukFZY9zCCZ7pjph24NW2Jyn3ZKuBGhoixU13RHMEBeZ19ibyt4Eq",
  "key19": "3AMcLFgYSYKxLKHuwQLueQEXirigAPwzU74kYRJsVdBAnAZigKVzphHU6E1Eg9jv8Fcz4uNUWRkVNrz5dxnMoGrM",
  "key20": "2yNK8BBbQobNYgfxTrmDoSoxt7VzbQCBK9NKKHhJ2jwE4awdinTHeMjKX6FWCeQ7ebFFSamjSi81RHwoQhzaENHc",
  "key21": "5kxdHpDe9iGXjBGeo3X3kVQ5yPS7RwHrkvGhiz7HCc6chqi3PNHJULBDeMKWtTKBsKHvLzoo5KEwnhR2AWfF3Z1P",
  "key22": "4CXwhuRytHmiXHHmjFjkk3ufMTvdSPvQGUt1JXgZ5iHQeSrx5M9XMyWgA1DiaL3UU6tGaa6BzNN2kHw7NSePh8q8",
  "key23": "3grQwzXocvAcxJ8XDYF2zSLX6Kx4kPSWtkUY1LzjG6x9D7dCtayK3MhyvcPcVhqFYVp5YWtJ8WX9TmvgFmai7a9K",
  "key24": "4eNxgyqLBwqVm6Pi4A8PiDkGK1zmZhDWyvA41nX6X1LKPgoc3V6iQGuwc1Ywoj7FsuoVzh1CsRvNCjwmDpe1LZ9U",
  "key25": "WB3rpRHRX1ThUa9DCvS87MyDz2qa6Lv34VLWzRe2yUfPWona5LYVtYv5Wi6VzrpPZRbjy2eJmPJZQhv4F1SkZyW",
  "key26": "2jE3e4cHRg2XBqUYS1a6Jc3AdzUF1CTC1VY42LNRzaU12RvcUp3FdeJTPUrwx3mZuWTL4gzpKK5qaEvfCMDXb9d6",
  "key27": "2SL5ZQw9nfXcfEQTqbQHFzK3FDrgtZaLqvWaXmdhZESU5r9tJmk6rzrtaadUtC3PQioS6Vu5DUqozC5FPtewWWnM",
  "key28": "7GDYsya7GbkGtaDREAumWsNEfN2bGLqLfCSpbHUqckREiUaR4fyDRZrf34LGLeYbtPXS65CS8y6v7E4An3U7LrE",
  "key29": "Jwk4RW61rTNkajA2oCvq7p99waPL42Z5JQqbxoY6p6u6TAC8eL4sxkBxRtNPzEw6zxG21oXZ7XCrUUvzbdX42kN",
  "key30": "t3tx23tNHqwVdmPeM4gseWbySGNqs3KcD5NM9MexMkhfRoGQ2kjJ1r6ewzgNr3swF9wxKFyRnoVj9oWAHe7FoSJ",
  "key31": "1QkqASdTKsDCNBRcrZiPhQhNtZzsyq3s9ti96LStBDbWpRku7HU5VMPBoQ4oyZwsHKPgo362pUodKdCFzHabErh",
  "key32": "4xa1UgzjQL1GncjCMgdqj8axPiXpuD7H5Rq4VpF55EZ3WRJiHYRobLW1BfXkWi9bTrFnb5NQ5Hv2wBLgfRbxBxLN",
  "key33": "61zsZSPyEapvMog197X9GH7ckydRZzNXUeNVUibVyurBHNKgsLTnCZtLqPkeJFMgm2yH9p2HXbfr6aGf3PPCDafK",
  "key34": "4KzSB4VJgPy1zNVuvS6ccyfbhDeMsRqWJRyTUhdD4HpGmfUn14cwUgbtbutJmQxAFkfwvRWrZieSMomM7wQT8h1U",
  "key35": "3VvHEsPWwbPG6oxZwpESC88nArd99z9QP1qrYQjTaPxvEwUhdgKZHNW9Jtm9xftYgSXaGse3C1Z8nQXybSMRmCHM",
  "key36": "3X76ZRJFx7d9vzJEqotsNg7FDxcfwgdvqF37aCsT5PqPQd7hRLseKN6pxVTGoyvLAHmHVtsH6oVmwRUKY9yEYMm9",
  "key37": "5tBW6Xe5XH8xcd4g4DP634SFYosBBzWYrUN3itn1AgCuDUMJdowAFyAy1Wx3dBrWVoXwFYLocWRJXKzWDFKHQic3",
  "key38": "2HAEoUwnEy2RTVywqzAEboJVWe46q1cBBMWp4yjWt4q2rsm92XHEVQ44TuCQqjHkuQ5k3ZuxUuewPWEe3VT84UAS",
  "key39": "uAbGLnRanYcqTrrcPaknYv2vAbC26RSemh9EoVeB6r3JdLHXJFXRSrhHd3m7XxRddQPUeemYTU6MmPfZ9L42A74",
  "key40": "3ieJeRrefsp6zCe24mgVbm9RQrCwyDW3d8FQxYDqUAov1dpeohH29HTfGA5yttK8gD24sdKsDjysAHL8G45KjNKm",
  "key41": "5omEdiJUCemfKWFwzTLkwTqtiAYJhnEUrBtmNDhbg5S7vJUdfWJ5U3n28K7seFaBhgNh8mfvxLitq4eVB1aaPhqV"
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
