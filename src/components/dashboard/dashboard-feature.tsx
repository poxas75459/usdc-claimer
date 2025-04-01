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
    "2QHPSBPgbBxef2LYRDnEV4EEEztxGTdJKvi3DErYrHQxJr4c7XLRSBSuq9BmfPPGfZeQ94AJVkrxCykx1LeGszkM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eVbPEKPvBsto4NJejj3HQsYW2CJ8c9gedEJySo4SUAmH4mK44WnPwTA6hwhqRvjXJhgmG49KKVt6Z7EUhqa9XCY",
  "key1": "FSH2YCmuTGeuCoSv2AnXqDgDpN8rToETUyn6hteyAc7WWfNv8XKmGageiSVUcRwj3jmcfriNYEvSU6NQ1r49Eox",
  "key2": "33v7qi1MHwur29k91F9Mb8dxAQdeeHpstaEPgySpRbbMHjLJWmZn3tXZAFYEZ6B8ML2opr87YrJMA95fopD5BY2b",
  "key3": "tTcNffQsMnbnB4rsbs4zyiViGnLfsiTHTpN5eCCuLWTfDzyQNyxGzEu6dW5CDLpC34VEAUeybYK1ztmfPCD8UPt",
  "key4": "5noabcroZnfZKVFHxYFk88UCUKCXYHaS3KeNjV1ghWqxMrLqE7Y5NiW4yG2GAsoMNi17KEWwzxCrF8judQHxkMrX",
  "key5": "4Tk6MA9CWYjBRxwhPvLpoSgNYUgMe4uhWem8CfG1B2cU2nCVr3XAP7t6noRbDmiXAa9Pupcw4YNLs4HvsfejgqmX",
  "key6": "5WvJDcm4Zab3mFYGNM2yoqmtJDf6H4H12pJxAuw2fbTkhDsKANqyGVEJ49SGhp4QFATzasmf1EDqK9T21LFAhen1",
  "key7": "4wGDbfkwSgazwqNonuwpm62S3y6ngnFj8XBAiFaGQ2v2oyQEQBtdJGS3wWZ7Da66EgUsq9uwgQjzBsudHZZRQjUu",
  "key8": "4qbWbdZf4SZUF56Xrcs2zTySa64EbuJF1EekGBawMv3qHNgbjQXSFqaC5cabbGqGC6r5rkeMfj1jJ6D5g2KicHrW",
  "key9": "pNzGhAvnkE3evnjWXztEBeorQYYDD4iNgruDrjMcy8cgwgAbSjXdyJMq8XAAnWrPaGCYUqMTG6D8ift69mtvXpb",
  "key10": "3B61saGAfAmCVNx6RNNEP9SQpvp4W62ckonr1qie2jf6iy5bVqyLdEsuXDxd8rKrkttVUXWGJFrc5kX1LFajGaFo",
  "key11": "4vrsYhZJ9cqsHPGTySXpfSyP7jhRMyxRJtZFFg79mrePhQeYgif3QvjT3iXJPjbumJh5GWRkmwft1THRULjywYPx",
  "key12": "iZh8cA5AVYG6mJoUc1bLuPTeg7FKY6A9DXy7F1cRvmfuBEcVwP6XugqzRpYjNfPXPN1QsEs8RavEbaK6yFBydCd",
  "key13": "3UfCXQUbDff4Qoh39pFhiMvtbQ1vi6qF4qx7zsBNPNyLogoqEnpR4rES9PcfxD5n2iMV2fMNVaGHRtKWoU69ikbz",
  "key14": "3RTLDqg7fHccbg7X35uTwbYEgzhL8doA3nGRxH8oT9evmJ86hpWnLeia8fxg8P4FqPi3kPtVPUvXk8NWcnGEXhgH",
  "key15": "3dAWtjoCTTgvgUrjEB88K5SWf5dAViJ3esxZN7xwyPA8DDjvwzeSPNwRJhigUMqDQyBDwpCHPJtu2MrULwnTfZhX",
  "key16": "3hLhYojcnMxGYFKpNuQdcn6zCgpj9n5VebWozMf73V7XHeYuB3cbmvgh8G8MU6L9QcXsUs38VuRWsTSXUWeEJzAD",
  "key17": "5s2gSek1UngALbzoCJN5uSR7YdJSnRfSA6imyaYJyc1fyonqLhksdC9rMRQ4cQxbJ5sFqHjNWTBhvCs2h5XpixbY",
  "key18": "53SVHrVmUnWWVvHuc7ExkmRT4JtWavf1VafsziGuAUAYTXKoX9nphR4mnopGHbt7EqWKuKGoKxEXYcBoMTCnycV8",
  "key19": "zwnGhUxKAp7FKYzbttpP5xzoSfEXjjFf5vGeQc2ERNT4WkJtV2mAPyfrgPHRzD1gV4KTvs8wYMuQGxdFbsv7mGh",
  "key20": "NurbwMtJqYj1zC16o8nQt1wT8aaqTf4g5mRgP7XEzhtkYFaAJerz9jtbr684KJ6bbqHuH5cbMjq8dCqEQJXSC96",
  "key21": "3rwZY5dQfYxdzSNAFqKse2HuT3dYFrT1AoVJ7PnwFsQwEcTr3pfzvU4DkajMnErJt3fGWmJqJeKWa6JrGsAw6edE",
  "key22": "25Yggjbvf1b3N8egmVKwzCVXPK1yVdvMWAcxpDMv6Ck82gzSH8hArDRcuKJn8NYrSep4FU3LL8NEYouzo8ja6E5T",
  "key23": "37EdSSYTGdQp4iU7s7g1viLkLbfN2Pg1tr37hEaaGF8FLeMs14TgDbFAt5mPgKyZDdCjHCjU6yCuzMULxTgV9xnH",
  "key24": "5ZqA5q79S9UwfvoC65bnDr2nSEPn5eLAQT5jaX4JLWxdxgehQmJpb9WrsYk8tFN2Gh9bZAcHi3PYP9hywX32MZDs",
  "key25": "3T1ZhsVG6dcRrLYiix3wzvdU3F5yPfgoSsG5pg7yEDnbaMQW2BrnGjfiGKZHSZtfos4AgmnedCZEZPRYYSzYiniM",
  "key26": "2JqjnJU8Cds7mLhVTtStubWDjcT4nHqKvpLG67RMv4Q3K6aB8UfpoqMTpshaqTJfPqrcwFWpX5RzYNRxaLGwmPNY",
  "key27": "rhEW1gbGcvVvEVBdZgBmAbTXNvNiKHMtqLryjnsm4DvDBr6q9u6Sp3TMMtz7xwbQr9eP3bHc9fdqYvZUUNF4fdh",
  "key28": "3o5XxXzfx4T4ZshEcrJFSiQZKdHJdNKg6DxacynEDnQPkkrTZQuWAhYRqKbvHZXh4nkwYvQr5qDxcwoF7hcozkjq",
  "key29": "2n3363yAUVxUcEidMi2rCnCFVnh7Y6yZQna5m52A7FHV6zDhi1j8WhPRdpFvBUNf4F51GF2bdu97RGaRmwKNKFjM",
  "key30": "cqFWeY9ohMGe17SpYuWizsoj3EmpjjpzGoQFUGL7qxxJjZwEsbpSAeBCFovgQuSA9PkPXUWszhKr3mZfdqwoyXf",
  "key31": "4Ag41fGZbwmfrePUUn35gbtvwbFonJDUQEGTs8LLV4tatm3mdTVYTxGHeAhtxHeGzXoU5anNkh9PxYcDrWxyKGEL",
  "key32": "4o2GPnm4VxWXpjBVDKvkEdhAAgNNwhEtEatJJBPvY3CvCq3Gc4AfACGQjkngHiuTgPZQw23VoRHQGVs56QsYg4yj",
  "key33": "3zShxWyYYog6v6fNPWotx2TfGbJuiZ7ajV9EXu4XdwSdCtNev2iRfb1MJUcjWo8udBpLY2YCiLmm5P33eSGMMNzG",
  "key34": "54VyaZnjURghXBL3X4vDVVgkB4Nmd3DJ5rztiDY2u9HXACgLGX4B6GATcyMPxW9YU4uuHcPG4QBPJkyji79Mhj6d",
  "key35": "2uVHC5YNB8ZRkitWSjV7pwtLLrAtP6F1TDTsFKe1MQ1nUULMLQeFTc7S971mPkvu4LRpvDK41DPBzQDNmLeW93ru",
  "key36": "4frFVzCxEfHkP6x9gMEz27CHFg1xohaVdVepYTbsZbJvBxXxvZ5hcPWVgHSeatYTpa8zq76QiEy6C73jJEVuQ7xY",
  "key37": "25ATf78iGhBJEzBja8wuB7aQJQxui2KMQukpoW1AP7kC8fSXrMsUK42b7siUkfrw3X1jkUhWfPAhhFhbC7Ursic7",
  "key38": "3t8VQmEqWcMJH9dyknfRrJnaeSSqp2u8i3vVCYMuAWHNYUD4qKFJSnyZtchRJYxYNcQpc1tJiUSQaYaCAFpTAzZ7",
  "key39": "5Lpra6AZbLfQhLj8gu5J5kNWyTDWbxcUVuaHFv3JyTMeuLK3auNR5GisDHoe7tKKRAudUwA3dBMQ9h7z4NwY26Mv",
  "key40": "4RQ7PjZaPLEVagLJyxVpEWr7mnwMwEkQe4KXULDYFDf2QdaVZtTtXUig8sxuf2JnuGxuQUaqhKnoPUJwexLq4RW",
  "key41": "rSiQJ7aWpAC2RjFTJtEnbw51E7f18v4FiFZSmdEK9efnpGvmnzi9ezwkCDtF1BjvPRK3E7Ju966xkbYdmLcCUaz"
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
