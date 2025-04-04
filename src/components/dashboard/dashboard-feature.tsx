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
    "7LjFt1QnyekeusEZPdi2qtuDRtcnsuhNc4R4SaFFMZhznCPDkcvqxnSAusBh1Dn3K8cuhFmzTrQx7naHuX9a25d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31hj55sxhtBgY5Kd4nPhinimmQdRCftF8cZpCtFqzz4rkoYqPhAN2yDcubP1grNuJ1fhRyWvuonoiRCCnfTXSF6U",
  "key1": "42mQmoAb1svqbxg4h6et2WQacxeZaBNFXGVvvyKbLUUUSoU3z5PQHaVRA6vTrypNhVkc4d67M6uSeoxw9JF83g27",
  "key2": "3K6NrZav17nd4WMDaxC2LSFpPKVRhZrfCCY6vZkxF48sGhKs7Dg36Kxw6BTNbcQL3ERNwKSSzh1sJmZuSZZd5FdL",
  "key3": "48MgpcYUcBbqwAksoRwWrAsPCvnk2eRJzutB5YcfgQnNvPGXZUAWPapa2FKxqwXafdE3pnBsyWqEBNHVhWFG7GzG",
  "key4": "3ratnq7vER3pxALNvyagBMyiSY6sNRgqfhFwJ7JMfBkbxeCrZo1Rg8hPsyFwjqry8eHrzQ4sqMg8ULvkY3BUe6r2",
  "key5": "2584SCv5FStpWgPkccC6RDqKhaVGE9u8ABfjN7cbsRKpKusf7htgT9LiQK22HN4ccMcgSxPAXVudn9SEJzSm9fEn",
  "key6": "4T1g2Wg6chadXJHhBDappXG9NGmM2GH8iyyTgdS7GL8t23h6eLDJDut5Ry618mns8FnmqBBh26rg4dkkypKLroF2",
  "key7": "4Ts9KUDC8iXgcbtwi9HJxjB3ysoZC7p4UatUF93zEWV9pjCsPuYK5WHRSzm2mLtqUEueE1jGYybvbysRWjDymGVC",
  "key8": "3JRygYmLeop1edKXBN2Ny2f4BHy6TfYqtBq19PK2Udbc1cvFGBJRJYhJQBGD4ayLznTiEW1Xje8c49oWm79ZqcsW",
  "key9": "2GA8uoosU8BLD8quFrGkTuzx3ywE21VUfdGCFuVxPghEYqZWY2egWx71JdNykatXrSPgkCDcRsHL8j3pujv1GSQE",
  "key10": "3hpHCDEiGEECWhyrQZoenQKCkPzhUBY1CBG39dzMtidMGZv4Hs65maiFxo4BjpzAkaHtVkiVNvRKcoZptSBNBysC",
  "key11": "5wjZtCvWPUSdb46KEtSKHZwsnaKy6f5ch8K3m7z1ityKcJmpCUi4ve5fT1CS3YnzBncqFJXmwoVVXWREwSWYQ5Di",
  "key12": "3sBNdXx5fL3RNtgecpWdYW5e8Mh46WS9xKcCH3cmTkyUPWGwt8Gk2ENsuo3ZnqhR8GQTDRZ8E8y9B3jVF3iHTGUZ",
  "key13": "pP9n9nmZp5asjhUwTjBi79YoyhLqLT1SQFrdgH6QMJTvQhAX6DPHWfp3FR3P9uV2LqEtsJp6pFH4MZpWyqNu6wn",
  "key14": "2mjFMpxcroUfbkECAir9CYX66XtWnfdvMmAYR6rEpVkgnEM7bDRsofELG3mTPT1fnKwYZCHmYdd38bAuBgLdojcm",
  "key15": "35KCXRRbBSitFLV6cVmQLVaR7KTr7LwsW2EsFaFQ4HfDbWmWkvQLnZbRV6cYJQRe2UbCKLdCgeRfJ95kwac9j2Fm",
  "key16": "aeL92sJmsjMwComVAbouyZF6WQXvZ3jJzJd3ReHWVsund6NTN6a3DxzzyebK2s2LQ7oPDjDk2RMcpaW9cBQMNfW",
  "key17": "rek6zNocU3kewQbXGQyU8AuiXRLwTowhwLDZSYEFAi4KyKY7BE91Vhk85YqTPYW8dDpEsQ9aeoatZaKiTfueHXG",
  "key18": "3GqEUGrw2mp6BBbT1zcrLsrEEAZhZicV8vD56c8Sowh7kCEiC6iGfuutGLHNJbbdyVwMDZb7GGJcdezG5f3wC582",
  "key19": "4xVuLiYChsxPsVbJcVhnF8NBWbbSGjwYaDL2aTyUPnPYH5ctbbRsFjxfjSgT2DfWSTG9S9xcH8fn5AqcYKg6goHr",
  "key20": "2gX44h3AAm7Y6RvShLomYX2ERsxT7faLT4rXEtGthndHtpnVuPYXnH6SQ7r3AiyQ1P8KwJk59zRqsyNe1xbfELFp",
  "key21": "4F18zRyqgA3f6ihdwLsiwDtAfWJmbtzgjzMa1LQN6kqLLyMLBv3jjzWWvueyGuGcjeXZD8YuocB2KDseMyW9MYBd",
  "key22": "46nFjgycK6LQBjXD95mKHrXc9gVyKRBR3iDcCkgHDspRC5NM96syg2Fx7jRT6P9t3KnSB6hoBs9ydg67itGojUw8",
  "key23": "65NCjcaXRDk52cNRk7reSs8frkJmsh31JGKLAvVMWFi4VF1BkTuLkZ2Vpz8RYQ5tejecc18TRVW6LtWcPSGjLxTG",
  "key24": "Uw7WnSzFAF81vAptHDwDmuQ6fGcqk45jtL1H1nm4EojfKXTEBCmTVDuB3o1bLcsAw2UJTN3YgbesbEiHQyAF6e4",
  "key25": "JxXswJrTXi4ZC6BsLJZTh1fAr7BYFTwe2Jof2n4kXBjGnNU5e6WjxVPGpijVcqGb6fc4xUNeXXuBFgM1Yr396mW",
  "key26": "3Eb3bLSRvEMJNzEC8kvdpseFzK6nMS2hpXgSSBNs52pYafrzPEgS7Cgwsu8ifRHkvPbw13QyiiDusE4vGF3WP9bq",
  "key27": "29MAdunkkkr6sGbboZuGbYDrZDGc2Tw543nUdZQKaMeW87DCJe7oKdqRf6rZ8uM7xEUhKQLkiFkQLB3aXr8BFES2",
  "key28": "5Ve3umPShVs3YXEuhCQaLjrx6e5AUQaY75MG4WqDQYQMsZs8QdYPvmH2UL1K7pFHXkowKqWc18Ha4rDCrnjjqHm8",
  "key29": "5rnLbqgGQ9tey15TbjN3hBfxVE5a3NarDAi3NMEvkaARVjCcGz4svHk7uQs8A8t62cHEXvCsDs1we9PS96HitHiM",
  "key30": "DPz8QzYjs4EnZafntqjsKvZ8oCHuN4ShKc8SzFEepKqN1pym4tfpyx6gFmmvWhHKmCUkW1a88s5LreyD1LuYSvJ",
  "key31": "64vCjxSQzV7bM9zg4eMQGq8DHCQcghtzt8Mevew3r5ycCAn3rteuhTJHUZ2ASmSc1B5kATpo92n8u3jrfHMx7C7q",
  "key32": "3M2ELdYyojT1V2v3KrMEU3gLvqhNTrjancqeWmcbAgMXMuXcHdd5qenVzxX9AkTC4vJtJeQdzKRPTQcs1WvxUSCx",
  "key33": "2LpfTvrhXKCzyKCrAtzeceDVSb8isPzLZ2ecW4aUkPnEYzK8LH1vSqbCjihCUMogGJaKoj92mGjBsQtnTt7gCaMv",
  "key34": "2YVjgjfXyNKShs7B7MopCNyvh9j6raeGj2FNe1dT6XmxmdqTwBM8AjAobcaP1gy2bexepTuR9tAoPeg1UT3tQT6L",
  "key35": "3AZTf72siNWi6zLHCB88iP792J2XEbHfTMGUabHMgj7wxCshcGHncvSxCRYqBWSAweAtNsyD8tzorYgBpgeLcKC5",
  "key36": "3tPZeNEuqC6d7QVgyZCEDkR68wnusboAaTp1REdybUaPq2UxV4aDjQfMrGHbHqxn8wZKBmLKq5DV98U1tT69HuzE",
  "key37": "4cqJGeTjHsgiDCsXq7mBi85cSYM3i8mJ5uQuHmaSSBwk9aPmJnMzHH1nvMyrErx74Ks3Mpqp5ehx4JBrPWXNb2dQ",
  "key38": "43kM9whEqp3n5FDcmj3bSdnn1FWP2eQamhVd1guDvHMrbc4A6dTHrDu3dsDPNPgfrvcApsNwnzuKSrwCo7BZBn4v",
  "key39": "36qEcqH9dukf5qmSyzRLhLu1VtDi2jDnM2R1GQ4oe4ybUT5MRJdLTEMjWMz9uU6fJt8HDp8KSuYkB4yurm3Ewjcj"
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
