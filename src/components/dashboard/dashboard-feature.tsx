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
    "3qjyaFZg8PGpc8r9CeFE1R6bXbkJJSe13d74fnK5U5adwLsmrehEdd4qyT4SKRwKgHiMkD6KKNxVM9p6Kxh9ZoQT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s9SnGEWwrhR7VVMsRDfNVPmWEo1mEvgchu3SZETQWxkyVrxoxgnHjicG5S8GXzFMSBj5FLHTRF58Dx38mo5iBaZ",
  "key1": "5QVr5JYaZWuFcgFCyiuXq1gZuobtkVzJoopDr6kJ8jFJTGYQjDZaFxcF8xBLF12y657FyUJGJs2DPpCEGPAzHrbu",
  "key2": "4YexT1iG1wT5iyac3oQvQawEyfmcS8KTtSxEJ8jJyPHpfA64Yjbs3JRe3Ez3njXpKdxKo6SmdhtUTD5cB31R8LWy",
  "key3": "q5zwZ95vGSvdqei9xyaoCrdYwHSUecV66rXkTdtBobBnMHxiLDtog2wERoLRdbmZz1SiigsPAsNmLubLB4yRpav",
  "key4": "c8esfWfo7cwrYKQG4q7J1xZgk6G2345oWHxGxDnxfPbUwUM7cGhjkCdvuBa1RdfdNoR3rVMfQWSNDm1fQGseqMr",
  "key5": "87yWjKLzcmfirfaPiFB4ZQ3fiU84wRq46VDgPBenjFD3SzUgnJM5ndTXnyiPbBd1fY7efMu181H6rKLsoeJLvbM",
  "key6": "3g45tdujnBztPg9ztBzwh6jJ6AXLBU7Z2aun6Sen9txGiuRftvBV58z5DzMo5F6ukkFBJmLqFBHZnDCcwRh3SwHq",
  "key7": "62XqyAd6SizbFUkoxzx32jj8mCfWksQRr12hCE7CgYhYEDK83VscyhWndu1M1j41MHsP8iLgZRtSWv1vpU6PuCKn",
  "key8": "89BN3dBZtfFX3GJKErD3fsAbhRhgdbncADCo3uvYt2y2KXayVze9H7AcxfJqsbsx2rDStUwEFQhFS7gpGH3jfFv",
  "key9": "4ZgVweSvf3WE48uVCbhaYf2hyFw4iqFWnjEaq7fLwpWtMCiUFov321aW7F3Z94JLBGqYQTmtBQoXGxmcJKpH4FTL",
  "key10": "4cgSC1F8bfPVphJsDLm7FUze9kokSEZSfaDeVTRw8hmJ8jPF9PUQru3B7ws4J1fzcxrvmn6KnJFtqVkWyBQ2Ekaw",
  "key11": "5Ffgb73AGY3tddhFscoFtfzinr5EPr2aGQQboJsydNrMgox755ugJAx1gryyGsdogvGN9PKeBHLUM6Zu5ghLZRqp",
  "key12": "4jdjTc3nWkr9W4xMVvenS8r1pfPtFw9weKxQnV78pW6NGhghMLuoJrEeX77xAQHfRcR7WKRYQeoex2kt6SqZt9oJ",
  "key13": "HWwiKnCLhBJBntJjeLBBhQJvpECw5RwZGqkDXKvPcT1y88rkeUh1atjYcsZeL4RgR9xpVG44nTMHAGQmtJ6N7nJ",
  "key14": "5gUM8TMCmfEmJEZGVEpuXJK7jKWJp9ri5FZDF1EdQtXXv8KadB6vFfaSVaTETqFVBfsNjtECLSVeYvHuD2v94sqi",
  "key15": "42UcxsgZcbB9cEdGkFHddhQ1uzk8h29UCGQz5zsBcCJD3h2Lcvfjown2RB8wUgVXvhZnEvukBfiwcKpqcKiFAojb",
  "key16": "2EWeQKzKf5a9nowGMseZBxe5LbFMFXkoimh4coSJ9Upz1TxCN6nD56uXrGRXNjiJeRKKgT4Bi7nDS8MKJWMRKLrd",
  "key17": "4xnBsNnxVswdD1xNmBSUL2MDUnjNp7r5q5MhFrddouxpk6G8GSni6UFhneUAbRFue1i6gLGdcTW3FKKgiQrpUhA1",
  "key18": "4TRaH4apJf7BjM5mtH84jkcPuGhK4r1h9dQRLcDnTJgFdr2BAnHQKyq3jmpMNCsnquyo5BRNH47r3MpGC5BkPLNe",
  "key19": "4LHRi4z9UVRXmtHjgsqh8wg4GaAtDjWzAEET8yLs9beGPNNM6kzR3GC1MgCKrQrXWmdrJAiHMa39zLoEoEzScn5f",
  "key20": "65FiuYLqAmWLqhyFwLKZZJRb1MNmmAHKtBEsxvQrZHKmbhKH5syefDFPxSgxwN3bLoynAXwQcsJb8JxyYN9Z4tKL",
  "key21": "3ynqPd21YN4kb3fGP5RRDRFfowwjJGJCU2pwAtT1QXgM3YCeYXmwXEr8XUb8wVdx8KubwrsXX4YtoREHnGnpDpka",
  "key22": "5V51zQVLsFVZg8qmmhFetNLkAArDaHZQ8uDHbuugRtWqp1w5FxNzDhnGa1ApPVCyFhKWnsiazNCT2FqL1DJtAaUH",
  "key23": "3sXqkrBZdxWoLzq169XaukBrRcMfANaVP82CETGGDBjKv2y1qpWYNzds84xpEtY6udRW4hGWsSWR7qCqnvjeaZ4b",
  "key24": "23MmWu8H9L1JWVnatwHUwFRHLhjH8YNmUFyM5r6FPyALzQx6iy1D7PXhD5yWoQMHBtyfzmm5KRZv6Nw2H9rFnZRx",
  "key25": "2fpqRMSdxU3128zhkSgV5kcDWNXXTniPYD722feT3pk1zgz4bDjibccTm7io1Pymu8MtwHu4WYXnx4sGSree2K1S",
  "key26": "45YDzvdcFpX193PHLiYwByfnMvwoZEcJpNEaA7VUap1hJ5VMgcK8Y5TEWeFCB3Qduf6yu1YgE8Adv6jEBvD7pDZ2",
  "key27": "55fRnnmHyqNkKcvQ7dNs9onxENPAuyG7F6QJgr4XAin9kTBehcQicdoxxffnvtVETBrXoMrQ8Hq38bS3v93RTpKR",
  "key28": "3iv8gQxVvWAoCABSa3BuZHMHjwqHziaEAeHRTbYJiVoaqYudP7MbNjerC39vfAZfxfiQCLGqwbXJdaGdT7cfxt8z",
  "key29": "3ndpPokzKuYQNP8DiMuKA1cuFJCHENgjikug5dMqsp9ZHx1rTdr4axpfastEyvN84n6jPfWZRoTyTCWTNCGLbib5",
  "key30": "UrUdA9gK5ZyFaDtUr4xegVr9zJKBMMCnZccUNZUWTbCUWhz25rkb6u464iQkuKAbwetDYD1dT2zMPb2utJhFDeN",
  "key31": "2ZxA1GXT6wn5x4pbay8TvznzkPavfhaiySpweWVh7JkDDNRaaSAYeyt3Ydr9j2H7evomCY6CSH5hVEmssrcGY1tv",
  "key32": "2bShi9p9bKDuFjnTvGkpCnoSDK3rPQNQCAbFXL5g6LWL75jcwH53piRpEa4z1YSpDBye3LZQovu6MFnQ7rdtKjLr",
  "key33": "48DWzycKwPfmL1tqxbhsCPbudBzXTgVQFwFiUSm1uJLS5m53rJ9ydaUwFa1eKG6jVKMxezNs7k5KwCL8CeHTgdtJ",
  "key34": "2X7WES1yLWL9xHjB42tvS2LR15wHv5ySJHiX9vTwsFbGBNNcJ5q2mh7Qn3sXDGHoSd6Z8azuASrc4GwWWhYpENAK"
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
