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
    "5GJp1CbPJU8rbhqHwR9syALYRcT6FLVNzQM8eZwb9CrnVBGuA99exKvp9JJueWieUtsEy9eaDV91tnbHtt6r25Js"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qZjYhPXSKBj6oXkoug9aWeSSbXTNGAi41CVTviNw4ZVs3SdA57CSEYstvncG6wNkwNYer39TsQWM89VvcAExkfE",
  "key1": "3tsHFdj5ieCFbYv8mdqwwUK2GXxpWj4JrcLhxxHaXNLnqNJkSeApmEfwK7NeakAyREKiKAHQhD9Py1bkWh29sU5u",
  "key2": "2zJuePwFCopf1e1EgK6jjmvDxBayzrZLV9cnZUiYwbSv4nQ4PqAShRWqrgnHktRUCFY1xyq6tAJWz2Y9uoheZP8B",
  "key3": "4TgGtvbk2GinesyPzMAVZptuerib79GKuYN5wHGqfPPGa3prcdHEqDDxF7KrCqg13CzCyQJKPmZPofCdoPvidKiZ",
  "key4": "35pKNRxV9i9NRgbLj791Yu8eyMHJEWJvifsPbqSwyw5TaDdUCmLazAXraip4dzdaEV4TcjJU1te5ANuxweDURr8q",
  "key5": "vGtYQymxAh4V5zRqiHJr94BoVhpfwU5miQ1tCKQ4A7DqHu3MrBxTmpPpSNafetfywPJKJQbHRiFaW5TbMYZLUvX",
  "key6": "4jtfuaRf9KA5rGNtvJyoQ9TyrCjjK6HKGHsdERpDikk6jQrMRhK1M2GMgNw7PGB2V6H58tMjSpVzqPoc9zTns8CV",
  "key7": "5gCCkQQaUfNc3BiKuRrmTp6VoMpTi41s2y5pZv1YTFJhecbrrZ9HX4VVQfpw6XfAYYy9dsdqHMwMaU79kAp5s49D",
  "key8": "3gbq1yARcUTXKcojqDkC24hCkmjnU8gNd1qC6mkAK1JEZtMMSzuDoYRDrTkJsmAtav3bA1EPiWzBsk6d21n16EQq",
  "key9": "itHcrKyUmjhL8gekP1EuPe1a8nM7XA4KHPrqvnbWKYVw2tHjZbLZDTdYTF2k5rT9KgCJdf4unFjo14PuEzWrj3K",
  "key10": "5JQZ35h5jGcw1RKb9GS8g7hj3aq3c8uc1RFcLuQvKv4FmN2y8e7rV9qpZEtfwasPg3d1F16nSm3RApxpK9oEv2ki",
  "key11": "4sSpnewfrywzTbEmT8CZVcozXt4MGGxf5Ed25ENL49imWwMcL4rFAZ9Fp1nJdZGHVPGN5PaCNteMUQxGj6e3LpLT",
  "key12": "9VSgmDF4tpS2rGwFemKx7VyiyumExgybgur4AspVG6DBuBwM6Vu2XPUGNvHoQPduJ97FTAP17ySPUWvcktbSN7z",
  "key13": "9tJKosvuk4knCyYTN8ht9KnDnU5fDomqjwApksgWHP1ALt1XBt9kkochNwKBXJYiCvArTudzFu8AztZkBHvm1K7",
  "key14": "2XHYjztLHzt8E2T9AqmGaqJgHpSVTvcAGf8ioXGEkvHCErpjC6nUQm8kbgWFkURHBhv5ft2A2AFDR3zRz5gsvmDh",
  "key15": "4cCfFRWcW63A3shsW7dP9UWHXKL1xbVTK5RgzNvVTxBbdf1Ne5JfGFDpCBZsCtvozw3ecpFsj8tVmtS2EhpkjzcZ",
  "key16": "5mHyg2vDrR1bkvMVhsYa5uaMouRYJq3wiYiAGvNsKr9xmX7kgCtkjW6sFEXCo8c3LF5sz71UP1VpTbf7gGz5idov",
  "key17": "5QN1B7JFDhjcLDvHhFnoUewM9JhvVdmoadYvGUwFd9Z6BhzNYUhDYdhqp9T7VLszhCCYSBFYXnaWNSEUXHWGQ4z",
  "key18": "2WxB5izbcSxQHTHFQqtUGYhpCQwCgMMjN2a7YPGGeQMZZhhcNmpZHfk1cLUvkuNECcxjdeK8xh5dAYu3Br7wH3Vi",
  "key19": "4kENoF4hUacwMr7qq44AtYzhxdrFkEjGBE4LGaDuWLazaJoVpDM5HpyeBRyZArvx14Q763HY9o3UUgcC3vmoMWia",
  "key20": "49EArsgLHQoX66xKmxFj3zgWxViHGkTmQB6yntM7Gqn2W9K8Cq1Fb2CEABXABMeTk4n4YVsFHXEwQqJo18e8rmJg",
  "key21": "3N1sgi7XdqsZfbY5Meh6RaNxqDgswhh79hQ9ZcmyHy3acn7SgLBtTzasatSnXuidEcjiUWQiiq4HWkWtrcwkUqib",
  "key22": "3vmaZcAZkiDKggoXTHMcK8HsQ4awppWXuzwCT2oZfqVEzvynRh3Jj1cLxwiZvHr7QS62BvjSfueeALYr1W3nEaf6",
  "key23": "4JpMKGNHBvojims23EVUXPNf4msjRmcDQHj9p69BHTaPnisj2Kir8HdAfG8LuvUXq6iubHuvXD5q4q6DmSF8Fxv4",
  "key24": "4wHhmkhY94oCt9qcze5GrCXMEAj24epb9QCZacz3KzcpR2Hh4VW4FkR98dX1R7JVKbWrkQtDbjtSJAWSo7tm8LyB",
  "key25": "5bdcmdD9AZ4XyKcqGGBNMLDeZ8ySaPFJAggyv84wywQAEXpHnmBWZugzCDhmwyQGoePMX5u5kGp3RwHHqxiGjhWd",
  "key26": "45x1FjwzC8Gp1QLSFZGoABPS1FLmzZQt7nLDVUu1VFix1NiWrD9eszKhpcLzqM4oRy4obwPbRHqYxYeQuPfy3XUT",
  "key27": "5D6xLahzMZsjBTzYgncbhsJze36xxrbo5PPey7rA2RFe4Wz7fWFeWfsEPVUkqWnB4h79rDf3kJoChCCVuboMPoDE",
  "key28": "3KixaDbzy55NspaiEi3QEP8QUxvkQDhSiifaMmGnPL2HLHy1FDf8pyA1U16crCzCvUMJ55mNv73nr4Wjp4o9XMza",
  "key29": "4eyH1fj4N8acnJGpgQ9vqNvNMAzCsmgGMu3uGsbBi5sR56afnaMsXpsxSSLtCXK2KkJ5rejJ2JY7mFBYtFgCUwsG",
  "key30": "5n9b8JzXsrEgDmS1Pkk86tr2kHRtyi9jZBdyyL8YCM1yF2hfCtjCzpSccLZrjXJuTVEebotvaGn58QWVuB1U3jnn",
  "key31": "26JuYcgjh5p7ERAcP7SM4fsaTv8nxgVAZ7v9V5JcNzE4tb7pzaNEaGVBMdGMnavZgRyxP2rKGchWcKE6kge3KJib",
  "key32": "5Mf8xPxL6SNgX4y7fFT6XME1Td3gJDcB8B1UVfZcbq1mtEunanyGKR5MUkdnfL6M1rmF7nWBVbC927YKjZ8LUrFZ",
  "key33": "5vRwirFRP3GsuhS7njRJibTjQXHv5cyJA9DPJR3WHV3DTT5r25Zx7SzXYjyYoc2Xh4NSysrbYAZijACwDQVsqWiV",
  "key34": "4V4vAuNdX8G3FCzD7RDdZ6ngVym6ZvTCX775PNpXfQe7MvLMzrU4fF1xaP6r6DQmPriSSQUy5BfBGBXTEuwU3fvX",
  "key35": "3NpzCBDhwkcADZX3aKdW5BGR4E4Mq87DLaPDZSPBNPhExkd2qDzA5dLE7mG5K2wPDVmBQTJmSytpt2w6Zq3mjsS2",
  "key36": "3E7JQSkyV1adcVUHMJAk3pYfpXGkPGmY5bNVC78k8V9cARTi7E1Bd3X5AmmSAy7RrYsHU1th7LNK42wEVGopTqPn",
  "key37": "3rjWX6k2ZFA8AuUaMg9FYdABHcPeu4Cdf1zZLKG8DQks3HbgDn91nC3iv6s9a1c4QewMbDvfKB1PYnJh7Y3mDipH",
  "key38": "3q7prDtGCoKrHLmDv5dRMCygsUFm3REWctGM5YSR5wn95z66Rgb5iwmRUeDyYNtfax8idaRa2L56m6z3dbe7mGRH",
  "key39": "66JVfXCDnU2wNAvwiCgwdNzVgUs7Wpcdt6WKgsCUfJYxk6Hc1wexPhYyGV5iDR7Dg2cQvJ3AUQ5ksBT3XFTdTrzd",
  "key40": "zTHBUHa5nzBPi5JXV4UmhZ9mctkt7pXGJNvdQu5vdpdueiWcXSNDr8Mp6YVPSSKz3pfHhQwLVVRf7xJXe39BRtj",
  "key41": "24irggdFjo2WmZuRqmxFguW7ADRWfRpGbD4XQgDyd6TEhm8go8hWdz7Z1GNAMNsZCe4pZ7SGvS46e3JpT22eVz9i",
  "key42": "XAQSFsyVNXtrp3K5vdDLhPwuKjHokFf57Z2zYNibgqrFVhqPk8M3pYAXYPkdkpHzWVo15Hg4U8qaA521WAPCSzj",
  "key43": "27YfDnBp82KXskVNKdrpNPs8pP5iqyRkKCDwuKuQaPLaWuJm8eAw6WrvTTcFogSxmrQGJ7yPC6sCU3jKch7NDGcU",
  "key44": "EHhq3CffrsxCHNQARGrLdSvXawpE9mCpniz8R6fwJkTgC37RHieGJ3v4zbbwkhc27Bdrsm6AdBg67NcohjZ4RMq",
  "key45": "5ZDFHmowAWwD8hjS3vjnJ9w7nAP3knKLQzBFrq7G1berDg1gnc93Z8uuyLpu2LXQtPnUgPSD4P4qSMYaF1VKDZtZ",
  "key46": "3UD71NZ44v1Q1M1LDuoCttmMWE3ottfpTNvrjTPrvTrXynCc4ZtroNMRf9F1pZB1hDBEjm7VTTLV8gy1ziJmKq66",
  "key47": "aQpFVPfvLjPumExvHWh4LiVx57Ca2dVDVxNFdR9tUY44TsFEjjrXdRhUPYpdcQ2fBWy2oDjg1QxJDNBLzN4nroh"
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
