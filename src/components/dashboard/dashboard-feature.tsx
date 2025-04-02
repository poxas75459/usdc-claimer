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
    "3ADWF4mzKFKLaDBR8oxq72283k2WrSM9uuPNDPub2La4pgzGQCaH9kjdwnWc15AYNBYCRe5CG1Nh1jB4F3QXp7WV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rNJFPe8dZKXt91UN7zC4abQT36SBNGT4vGGFME5ALkEM3JD8iy25CdZBHFLcUbCNby1sJ8yD397Zs7WzPh1GeB4",
  "key1": "5hmQMpQJTo9gYD38pDqs3oGM5JusBf4ASafp31c2qewF9wvum785c32o2WNdZBRVR6YeSFnmepCfJqGKqGtB9nuG",
  "key2": "qByu4mXWQACtwoGqeZdxUB3gK1yczuJU5UxC5JBVzL6BQwe1cvMSW8VEGhopHCZxrGGe6maZTNHr6LEUm1bQ8va",
  "key3": "3W48o4NepqwQs7i9HQdbrCkXnYD2DT2T7JbmFUYDC7kWyHTaTM7U7sbXd9B9wgyiMABW96RPd8bbWatnaWFbhewR",
  "key4": "4fkcXXrAiBDdzmw8d6ES1DAhv8EaA7WQxQkepBS7z51An77CY77uQzSTaF9y99NMBvd9BEKZVdeqEs4yYLKMv4W7",
  "key5": "3MW7eW9HbH9xmMsAjziVRqYJDFxpDyTF4aLz1KsmQRfNHDWXpBRbxXrLrL9gXVgCH4MeNEZbv8ijZKvJs97bFpkS",
  "key6": "47wakyuDHgYrQe3v834QJr8QnKbmGfzS2Rn73awJz9smxQq2sStPDigeXJSHmyFLnAdba8gNYNkkxF5njxcNTPWF",
  "key7": "4TfNw1xoawjcJjejDFNANNMDhwDFo9TtV4R4ynexEGAsXs56mKpg4DcPr5Whaqrpuoc9q6kvcss54zfc5JU8ZtoU",
  "key8": "3VFwaSfeUHeo3qMneY8v7pFqnnZd95VzjXUDhpnjgbPdzb44xztwvh4PswBm6r9byxUSQoYnWNPWSPbmvEyujGFr",
  "key9": "2hgccKnvVcYnKjnVhcCEMcxroAdC73ULx7tYuMRRVfqVXtsMNTDWjeJ3AkQ7bS1sqb5dKNRLiJVYgm2yi6SKc6Uu",
  "key10": "5Y1RPrwsnEVSEMkUnxe272ZTMYBeuxYvYbYJXoWAJ5EwCjXVkcqEwYjQbFoAPjg9M6A3CyY5LPKu7xDdD8mgMRBT",
  "key11": "d7ccDWcseCXxZ2RqRp18msKM6VkYxL47N8jrZiHwJXgFdWn75VsLowh953Wz56cQ1Ur4ef9A6dKynDDDtvjDjp3",
  "key12": "cnQoWpdL98ta5VwzC1KajSQHs1yZ5WQHEFKjYKs1JLzRjyLhvCiyR85BTh4BhYEfGuZ5u7vyKZPdpcoh6DVsW1s",
  "key13": "3h8HPVf7CCJhuVk7ANTKBdmBBrWvCh5s1bR5XVVTuGed5PUFu2sm6s9r66uM7TzsJ336QLkYPerjmnpk8Cv9dLF6",
  "key14": "2eKTUXA9zSgcMLg7wTUgZXhLo6rPu7BXXe5eA2kBiHBaqnFxR9GR2AFmHNLXAjVuSmmBaqNX4riYNfce2Dus86k5",
  "key15": "q4RRotzj2WUTNVDchRa3HN5AnSK5rePeYA3EFidiDjZyqQW5ZgraejCzTJWPykgBzXyDqyyepviVmtoqAZZmxE6",
  "key16": "5Jm8tHkjNZ8wf7o67Z16fkokBhcyt9DGrLdW8HQyXhbRePpDih9QHMq3yf89kKBaz7Fic8BFCtarzxrYVhGm6UuU",
  "key17": "4zJJCrAkHFD64RPfWGBJuwawQsiMvoKXwBot9ti6WxRsNp7BJfhC4cfaHpwQsWdNqfGWte59PL4ZGy1fBS7HpoAX",
  "key18": "2WKDmq5ktb7JuJyjZbrhRdN9FycLqi7QQdczBAqDs3fzbx8bttg7GpL991SZTHdRcwmBw7zoZxLkUWMHZPtjbLkf",
  "key19": "LX7BZCNwzje1P94dPZsexSeY3N64TtuDdhuP3L7fToTFeCD21Y3Ghv64YQ8wZC6tgzWwoiJFm7Zn95demWFqCTD",
  "key20": "2uKsXSsvzR9bpWX7rABfDcpsvDvUcmLKCMNdY3iCunkvEhWWWzj4mkg4z18MTamNjzRzHnumHBjAQxFyM66zaeAn",
  "key21": "RDf2EYRmXuDJFtdK8PtDsGeeKMrHpZkkVp2fUVEB3wDTAHV98XpXiqFA5Hu3MhQmTUEHuN2FaRaysyUmJtL1kBX",
  "key22": "4rNvhx8JRQ7Mp58snYxewtCZPSDAvr5K43ZWwTWNoX2397ut5cS4KZC8xi3b5NGTS4NMTbPuKg4SvoSAopQP7gJk",
  "key23": "3T64ie8JdwETwRpEHJ1NbXdaqFGYDby5jcuKK213jFe8i6ZN1uQyx5Jo4EnZejhKYwJdfwQDDAPfksKtZUUTJ77X",
  "key24": "2sKv7Mz98ufr5D9zPuDokrfNDysX4w4e8wdVxmUPWhqJbWJ1idyQRs94A6CzLgxUdbHjDaSwFCcqbTGbFJvfS82C",
  "key25": "3ycsJb1jVD5mVF293tE7NtHL697JJNE2qr4PgfSB9JGrJqTr2qvaiiGgmyHByfiymBSzfQGVf3AiAG9hKG6QEHzG",
  "key26": "2LBk5ycTJkDUotUL1S85gGZVVGzLAK4RrG2eFGydwXRewr63MYjDhxWvrNQMTeas2SAR9s9nTbhZLATsoEUUzRWt",
  "key27": "5JzTaPHwS1wUzpwsTHtTphx8kV7GNCMspCWh7zSF5NmkAtcg32idD7cqibv68dsQSPdnZ4eX5D7WWcA1XnR85gaE",
  "key28": "5RiXBGWaHa4ykbbHvX7CbT3qB3LFV4vuGz9Vy2JRHNPMJHbb2jQiTRzaTs24Ffs89NyqUgCPQtvPTj8sxjDietQz",
  "key29": "31WvcpDCUcyuS1xkm2UTViGD38jFZkzhzP75uFXGej9MZJWVzQKbcGazVcyoXTnCCDaRM5tdxVhPxmdUDp3cBVpF",
  "key30": "54xHdLfFe55cmoYRBG5vNqEjc3RxbT3UGFYE2LqrHzhteEYKCQedmShMrPnmuciZ1k8Wsdm2GsUkqLnMs4WL4aem",
  "key31": "4ubcda5uTTgUDQ6PjR4dUZaaYkdB65XxYu63sbqNJPGidVUms8XajLKqhKb6feWYi3cC3DF2y9vQihU5gXheMw8H",
  "key32": "4T1dgN4EQdiHC4Tt8WTGJw1DTbnyx7myZwPvXb1Fzv2Pa8MjBgqtnwt4dgCexS2G5s2QsabeveKN7dPU47nCGqh3",
  "key33": "2QEnLN52Qz7cJBQZVJwMj9tm5xVp28ETDX73uAbVpUiCq2wQxzM56n8Ck4N386yNjXZ8dLDcjF54gCLxQpPSqfv",
  "key34": "2PLJYnnKJy1qmBfTUZinXkeJDE7D9gkQwXMY8k2acShJYwN6KC7Y27WGrBW8Hn3drrtJ3Fn393r1pRRu5gjR34QA",
  "key35": "66efuzED5jdbkB7MnZUBUVCZXb4c1Y96i7sTDQh3uiTcFdp6agCQWcv2PjmyaBhpyUfvQzWA1W5DPZTXnxbEiH3b",
  "key36": "4LqfiwMQqbZ6pcTeSypfhJsqrxrxFCyg3hJzT1fZWrWQiuRaQhBszggriJ3G9ebGDPVNjG4kx3hKURuKfpM6brPD",
  "key37": "4dEG7YxiPmodCjiKrktWgawhzweJgAFA4TAQJvDupA5Z61nX9vcsdAck51tA1uUoknhZmTJapUWrj8dNbLEw4qQ9",
  "key38": "5EH2P3uyrjAFRaCZgymyTGxvQn6XAkNNeRZMZTGeeAcQqc6gXKE2G78aJHRM6MSkYXR2CpT9KcNsjEz3adeHKx3o",
  "key39": "37btVpmLHgygEVeqxdg39h132w5iRNwM6cPMKvh6oX7JSsNf3gWwnh8dgsC1NCqmCjJe3ShQcnH8RYfSwNJ1jYGH",
  "key40": "4LYjavrp1D8385x5aCcENaLxk6AoJt9SH3SgWRX3f51wqZU2FZSnbE1v87saWUjjFzLj1EAV7bZnWtN4AzWqE3BR",
  "key41": "2HcBqFdHyKjQWYaEENgUsg5sYnps756xjpdL6xn3Dg781uUXv2EosmpZzXf2StEbVWYbZkmu7F2umgsVCBXM9Uzz",
  "key42": "3Wz8ae7x6TSiWUFJkA3TWokazaMRUSN4QDJ2EUJw9jkgJtZAwVtJH7EApgcdpaeTXdTShvZTYa4W6F6LWd4pqn95",
  "key43": "nY4yb9f7KG1BLu3zz91oESFHh6oLP3Pqspye1ZgnCrVZyHLjvFi8EQZKscrRiqYCVF5qbPK7VtJMthxu8kXB5M5",
  "key44": "U4q6bXG8m4q9Yf97nTHKkVsbKQQqSHDkm8dAEAiwafyePBC8jDWeRajovxsgPvtQG5XemSnxaKRLUA7GdhGeQnU",
  "key45": "4uVzqETkySjPbUt3Jb9uGZjzjdETupSpFYcYmGsrCbDkaatZ2Dao5MNv246pNjHkdwhygTD4Q2sH81Bzba14uMTw",
  "key46": "3XsqhoZ1KPccHvtmh4RmrYaDuQx3UuYyVjwqQkrmiJrMXXtBnCTfrNSoPvTa4AEC7pPXxQVKGTr8JZGeT3UYKYe1",
  "key47": "fme5oNUvUzxhZ9Z4beoHZ9QF4WxVmHYwQ2jJdJigT16RP9j4C9cJEtSgGAiQujBinjZQdn47u9nzcG6gxkHPcch",
  "key48": "g37UufLzXP5Q6Z2qKtN6qDrctAYvjQ2aqc7QTETXcMxEPgFt5WTcZGyRaKjh7S6xYSm15Vv4Cck4WRaes3sdSaE",
  "key49": "LAqbQYFakqGDZaBzhRizQwc6Kb4QbAEx6jxtiwjmVydBL32vX71mnEwZB2RsfaJYBLfpeBUA9r2A39u73t2AWdr"
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
