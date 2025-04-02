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
    "2URzJeVvKWHBCi3UhsA5XzNiGbxpM6CkA2B7edXAZRQeK4WumNaH9whRP5da3poj9QuGJmbVfRJp8Ta5VQwiRvSh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BqnpkNm9zWFhgg6cieanj6kibFcHH6VSXo9FM4FQc72p19x4Xn21jfjswsbpbLardLPVJpjTYW1oviELEkksMGr",
  "key1": "4UK36NgrsA8vDhX6HhSLEYdBFLT537zC1t2tb9XsDz5HeGky4297NwrUN4qja3dtmmLT9KNtwju4aoWVKw3coQPU",
  "key2": "3S7Dp7oiC5kc8aukphV7UnUrWK7oyu9tJ2H4Phc3Hhhq3wEdq8nZPBVMc2tysG1nH948r6ZuxGKnncBhw4Aa6FSB",
  "key3": "2YbjcepTvdJzGnm2rsKWDoQ9ntPjgfrUtVAp55Mt5SCyp9ofgdQW6yDkajurqg3oa4FdYqEr8wLXyrc9YjUgF1BY",
  "key4": "4EygfJQiyHa4p7sVbGK82SFxHWAWwk8bZsgeGBDdiRvfYJkwjMzM29biXTNhScZyfCse7Hgx3aGggWb7msmeXwfs",
  "key5": "4bP2ueHKgAXm3hTWDGbA1nvBzjpi9towQUBFQFrC4pf7eGMhw6bY6GMSu5HuPSoe9dpHxcs1zZyVsjTrzWU8FeUo",
  "key6": "3CQiQuf3nH5yYkpTuCtiNVhYCLNymY3FTwjTiZbxLq4rbj8jCzZAAEudbg1dHsyXWCBU4B1fPWkCN3RPYiPxrpDg",
  "key7": "2jKvouGuaetrC22sC9PnwcBmxpFCt8YVF2VWDzAf1LTzrbVk3tswrcitfCW3N65s3brofjUcsfa69daeimYDbt5S",
  "key8": "SiSHAyvMaRuUgbjoFDahfRrTGdCXhS7Ci1ebsF93Aq26Zk7n2SWGPDFaKCxSnabSj4vQeSjtVtNPzm1uF7N9CNz",
  "key9": "tEnmPzssWoDdrhVpeXpg2Ntoe5edtgRQkjoYTnLWN4ZwJUpc2r8fZx62eqh3HiYRchHWQztGkdp1nQknrJEqscJ",
  "key10": "56eJf1NHCKfZRxuWf5LwtuDzAedw6RJHtZZg681azGGhHTS68uTQpDo65GbY8HRX27Rm1LxD5XBozzcYKKuF3Pv8",
  "key11": "2pbSWtWk9GXQQSsAtnghpCyZBVR4DFLTLdC4vR8WznZ3nmoh7bPqKNqprX9Fd93fVLAKp7nLrQkECdMZbSgzopEh",
  "key12": "4DSJ5F3t3WSoSAYUZQaucrCcU9cjF7znjMWiDRgvWW465LYvHP4vhy89rHuAgSojbEiXbkqUG84dYLgTNt9Ra47n",
  "key13": "25c4AXaL8QgzijKjVPACaro8ockTB1mLuyN8pKR8tdh4UoPKHBUx5LkTnxxJiRpBwGHjT5Mi7AvuyuZVwwZLpRRQ",
  "key14": "5Hg5krZhq3Tk4P7TBQDKYTgNnKmiRicRKku9uFmcQRQUBxhwKVVTsDBZa5aTqw93X6YpPvpn6nH2Tc8mQc1VPZiw",
  "key15": "3jDT5LXoCJqppRpf4qDVHtpFxBjpCNc6dtsbcTN7r3rDAi3JTcijQAqLEChDPvo1beS6jF9Yk6aZZ4srWfyYCqnD",
  "key16": "SjM67yubTX5NmbjWzdvUCmZqqEhXHcD7ZrYFgSKW8D7csC4AtXuo4oKo7SDBm9MrRuxoABJ35GQ5tqZVyW6Y5GV",
  "key17": "424qDLpwAV8Fu1t5SkWPYMrmzWrH9yMVS5aVsfqzyZzHTS2burgWMp2S7cfP4QyrHp39QFU1GkKJYmdp8BGwa9vV",
  "key18": "4uMATjcBYsddLzWHZXkYxLiWdFaYASotmQYiNtxbQGn1z2RB9EZCYMvdKgVfNaoB2oWZSa9dAXbcEt94HHNRjcmj",
  "key19": "MvYai8SNCUP1NGETBHvhd9jVnkDmVhvaQLfqt8zzfK36TdreoXZidzERA1zmg2fRERUQAdozyUFXgeb58Q2ymhu",
  "key20": "5KAE8CUJscB5yGfcmikvBnXnn5RQJkneBFPNYEb2h6FFN8X5oqjMXSN9LXw6ZeELWbQKE8A7Gcv7Jfy2HzMqvHts",
  "key21": "x8bbQvoTrPcMBbp77fGZmPHJRwALWmo1SoxyezkwKqaU6qYjRWWHwT5FUKKiabxv5MSbVs5hbwXPBvSSB6TVkxy",
  "key22": "4ZW9v3z7pg78NrWghYLSbAC7izJexYHLTC1DsfQ5vpWtqCCTcSGex36TtJweexi7HhfTykMrsW5tMEHUzJHmTF37",
  "key23": "45MNuQTubVNXc9h5B7haidZ41iPVBrod1yyzvav4N56R5eiZirVRUuQFshqDwnwBHxMfvKiebSowHyxfFvttGuTn",
  "key24": "KmBvjhaTcJCcJ6AWPTWb4eraWQu6CMcMBvZkcGViTa3MFir2AZKHk4BagD5WB8SKDp7f5MNfaJkNCBvvXp9ZmVa",
  "key25": "73yznD67DhRjPSFkc1sVBsMhZEpC8T7BzrkPewGJuJEXPGCdP4VLdQK9XXt6ni8a51c79W1GjwxSaRkZHCD4DDQ",
  "key26": "4BAHukUEJZfjfBRScuWNjjz9mQgtHe9ip1zBVkZWM4rdr4gKo21QPFJqdhMzCxPRR4X2GFHCUiNxeerJPX96324B",
  "key27": "4vLJJ7r3ZYXkqHoNfU9o9fhAuTdYLx2UE9Lxeh16nLmuKKSzqtRDJtvcRk9UQqBZxxb8DPVEogpUyzkeYntumv3m",
  "key28": "3BJMxFnXugv2ddBf6FzreScyS3GcsBTNq7B4NXmKwRygwdeZ2v8mJohhiTy929P8zDJviUF4UZ42R96vcWDMKcCf",
  "key29": "4kkypot4JAsSTXaoVofJ3wTT7XVMVbmqYaEbQZAhT2j1GBYufprNBptrA2tf6i2pBBtj2g9oX9yTaafgAPMUoTZH",
  "key30": "3hXdaZMtM5zVC3CYw4G3h6Eomr8cGeqcnN35pTVqhPpzrvto7zsVbF2ZhaL1QmBzfFcRhA8ifU3LFnfYRtJrPM1W",
  "key31": "4mMUXFQUf7bK3hycFSnkNmYkDRH6CySL8xVU2ShT8mXTDFAs6Mw4V8zNCffUA3tMMdJJJCTtmxgxkrmCu5fgwNDG",
  "key32": "bdJyznafEAvxa8qGxUb9VTeBN4FyByo9pTQFECxJhiSRC7jputJ4ZJNivjnM82fpyxBH8TjdrrqDi7rMrpqo1wb",
  "key33": "5RsV5LBSS9uY3CbCto71zV2RB7KVZF4WmCpjy68BsxjMRXiBhvXdF2TDEyKfk9j5jc1mmj4o1D3C8PJXypJQoai1",
  "key34": "4Zc8NQyevJY21q9wn4cWFe1cYSVdb3oyNTxTxJYQQPM18RWT6jafcqxAAy2kpjBdTxM9rxVqXv1asKShisEz1jW4",
  "key35": "4s1ppRKV3N7A41QavhkczkKsygKEFnnHQtaukWXjgcP9co2Wg1sN5GEXC3GvJhBFiXnwjUfBA37waphGyvbT67B3",
  "key36": "5CYzwvQ5zsx5w4brz8JbbviPDrUs4SgrjTkz6qnFdse9CeKGUhFXGzMSb1Jkdm5j6e13ygsTjmmDUsgJsh7PYCnb",
  "key37": "gvmgyNLfFtjr9QXMbxpHGMHX6AFpAgojE2qMdXzBoAyxXB1nB5YxDrWJMuZCJ2c8jms4WtRBoUi5iTTBxCna1ZL",
  "key38": "61UngAkmfkZE9xj2JQZfmLiLc79wV9X239GrtXY8gJ2M7ZX1RBBE11T4bGr5UoPRn58B8D5aMafL2YEUNPDpKiqf",
  "key39": "4YVQedJxF9AAhZG82vytwJH9ZYdjohEFrstiJLimKdS8KZHurTzkKumY8CKFef4KfLwUNXcSM4Y6uBn8tLvjMAPS",
  "key40": "4K4BKXrefsGsmJJbe8cymNYGo9NTFjQAGWx5QDSqaxp8QeXTcZfq3dvaWFWaf21md9JqHx3damp33gHZjdwmDyv1",
  "key41": "2KZwFCVYXSbwe73iM6aNigx1X1UnJEmaiS4pdRYj8Fkq3LQAbhEtdDeMT1jf9K9t8SB2nSjLPjjbok4dLzGfULYk",
  "key42": "5r4aBzUcNHRiW64is9hbasMtfaNsDhEtoM32hpbjKGQgv2eEGTrChwtZX65p1VW3wCyznsb1wVdE3YUZme32aYfV",
  "key43": "2CvuF9sVZeUhCZhiJ77KSfhDR3RfT1mmYnZ7bD6Q3zSab4tqjSNqtxKJYEmAkfgAvoPBjiFVLGwmdQEyBiJZqBbs",
  "key44": "5yHwfu2vA2z4jCWd9Ud3L5sWzv5XwsiKZyaeekRN9bhiPv18UhXnNLV4bRfz5Hjb32V4dQ37DitkxieL1C93qbAM",
  "key45": "4E9KM1iwQrhW3BLjKwK8R7PRT5voyen4mm4GTYmDf2ZZybRsmqKutpEU9WTZMKxoeYL8ijztjDi3JSye6y36JRhd"
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
