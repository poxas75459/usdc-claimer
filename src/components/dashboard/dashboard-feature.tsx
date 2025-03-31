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
    "3UABR6YZ7ZA8cf6cnUVNjThJUihpdTGeVY9XxP9yb2PMsT8XmdP3Go7Xducwfw176tGvAr91Mn1TsgDKxheeZgJn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oMDZZDEMPEPCKjydLvswaKeibuucdzYxz7QcJNuFzzwyRjZbNPnmiqor62kWh8kymF9wZehAbkremja81XwuVyc",
  "key1": "tkkwR7urChY9pwLKxdBv1xzQLzA2PwSM7UYCU8MDjKZw7fJMAZfu4Fev8mtaCo4Cc8fvAPqQVeMWBz4HQNLufj9",
  "key2": "255Z4UnF79iHevSDH9x4qTqKUMqrdxe3oLDHo8yA3WAmgeRvmsKjZxGoyd1Tw4Ugr5DaYLgwWvVXNhZVRG1Tupwn",
  "key3": "4CjG4bdbVjEJPNrfzkuQuboEJ7fk8wJi3UVjyvYTG73x35qXxxGknevB4RisC7wSeqVMiaD2J3KMx2kovAry7aTW",
  "key4": "EV6fTwCzdrCcPkZdoEMW5i1tAVrZrnFM2zvsE38d5CerymvSiVjDbDxpTdGTDT6iV8NATYhBabGKWEL3PM7xJ68",
  "key5": "2PedRHC8sNxopgsZE9Bz54eqXvhEpH9aoSMoKpB5azwu2cNBJ9p3ySw6beppBnDoGjjydHsLxZnDHL71FZVcb9HQ",
  "key6": "33UJX58Svjknur3dSHqKfS6RJZAQAYdVFXyh1feTba5weux4LZAWXk7NkD8RqPdFGd3MDRCu6WCQLsfmsYmhbawi",
  "key7": "4wJWU6a3nXgiRzfiux2t6Qg1UBhdEzJhvjZUKR3Er5XitJsV8im9Yx8nPPwhTmznNQzghN6bETy43cRhPJyEtM4S",
  "key8": "3RzHE95hJv1B1LEjFERWZLavC6jTEZvBvp82teeM4x5iuvzus2qzs7i9EAR7hKisFpAdyiYm6n7RzDP5xMctroXh",
  "key9": "5nkJLzfrsksv58fyAJqV4Tgq4LduPr9jBy1rburJxWRR7UXgt2c15tqhBuJsvFqnE3yrYY5odKFsAFRkgqsZmFtX",
  "key10": "5aDEWqRiDzxZg3KUwp8EzbiyhECAtqJktk7L3qF8i8U7xpuT7wEKHw4bUmVE1T1DFbCwbWrG8GsTDD8PDGW5ve6o",
  "key11": "kx1dCHH2gzDf5vUnJUToJ8opPGXMG4UwMzgRx75GyA583hDxp9bXyoFXqiaVWr4oE5jYqsb6UXSPhAYL8a3mRXH",
  "key12": "7fRsB1j6PaW2w2NVTLWREgfBbjpVhSMAtfbMa41NBk79GPKa3hkMvZC6T5Nnh5PQdzxWEdYoi447ZXwS9efpYeX",
  "key13": "4DCg7zU9odhe7CP5RyRTpNXYDJqErmnm8m8MDCQdSwRPaUBE896cQQ4hMLDEV6mkDrugGrtJgc24knP7jBZUkXww",
  "key14": "5NgJo7aVZxzPYfo7jSstGSubkLY8GdpTp3TYZmcSVUhwYY8WGCee5Zc28AFmtjMicWMQN4DMMrivLQjRQBSGVnFp",
  "key15": "5hCeMDvcw4cTYrpaRquvRkVRa94U2weR2dhzzGPtcNK5LM4w9DwwEzEn2F6acRNimcDB7oDSpjU88KrPSwg2nKf8",
  "key16": "3R55wxxneuxYfB4eG6PzkLSeEiGvXmA7caEebwJmQ4WwHiqM4EzrVzBmWciDymf94qbhZvMYzuWkUdut1uwX3QMC",
  "key17": "28qpqxGcLGjTykkYmwRMoifVmqCAqrojZrcCJ3sNrPMjUy28JpEcrwvChnsHwavGJVr4CcELGudyy7diF1YTRiy2",
  "key18": "2q2yYpuQh3ZWtjiiu3YJFuAdRR8gLH1mNYRbsagjMwMBuN27wQUtDSsmkknyynJDmLcXV75zNBFBT71rtuRhgbvY",
  "key19": "43QqE6UV5vu1eTpzfDzepNsrXupvDVairNuMrBzY1BPty4aBVJvrjUp4VZgYwPpQ5dz1944vfQgyyacE4Ljrs5Lp",
  "key20": "3XPSsU91rQqm1K1jydYASi9JXMxncah6gzY3Y82kyYwkQ38nodR1qS84CU5fuK1FznSV9qRCsCr42VKoGZ41ah8B",
  "key21": "3KBJmyYrHeAWBX1ZeSUoZJUteGitjMfbqPsfbCNbL8RSZYKtgg1rtKDLQpunfSgycM6RGMCvfiphMHLMEBubrR4h",
  "key22": "3aztzoV3L7K111xeB9sYAYertu3wYdRU3JLhevLEfrXwdHEnPFyBCt9LUaPVgvmSEgt7EARNPXb9Cqyyys3jsKCR",
  "key23": "3LMaRZvZ2dpQMySNbh5BY2Lb4oWsVZY1JeNP8LqNvTyu3KZmwEszvfMbZp5aHaX58agxB3MJze1E4373h1fq9D1m",
  "key24": "2zCQHSm5oPgkJb9p4KHKYPFg8E5kXDGBZSpBzmokB5nxhkCzxBowkDC9gBQ3UEsk9FqdxETLck975Q6qfJ96nAoR",
  "key25": "3sej6kM975zTHXEcSLYDT62g9mKPFSR1ARJWuw6ffBZkAAvBWYAYw97TnHj88CiRwiYJJiHF2uZ4qzhXJ3r438o2",
  "key26": "4Zs9DE8uUFyQaZAxkXBmv6qqRCd8cWvgLr9VbN9MyX26fpcMG7z3iHuvBCoKM8ArSmUPjjuZ23KqafHShQ5TwLh6",
  "key27": "4kmv15z5HdxZiovD5DYnRMhtrpZ8LLC1gT6XFeiUbNKHv1kQ5K6RRSacFyTi5mR8ogDXc9QEoRLVvScceDRamuJY",
  "key28": "3Cj2y9CQLyvAZeNgBZsALHMoPc3uM5VPUfa1ccAbTE6TXso8es4uL1tRqJxQdKGzpyAohgBo6TWxnD2Q7rPBQJLR",
  "key29": "4NqpW6tw29RTt96PvtiSBQcTRij2JaSfcZsoWRXmJiS3FvPftD9qSs8uprKVW5aPy6qE52d41FKj8bpTy7p5h679",
  "key30": "2TeTyia8gyZVsrmzUDGnD5fo2pMRacbmz1UcoJ9dVPmqzMvPhTQtzbZRyBHim9XqVbaUU9F4ree1QacQMynPUj42",
  "key31": "3S5GTMMG1RrFzkvfnfkEwfvKqVBdSM8Y4tnEppSejQbEAj1fMwneYY7KNr2qTkLH7KnY4VzVn72JVfpU3vo8Vbcq",
  "key32": "3RqNWVFybLTSu8DVfY61CrgvbJmdEZi7jbRFw7eqLfsJTCa9GxJZK2AifBWPMFHQxy2YneSRmyp28e9iTjpGsqy5",
  "key33": "ZZH6VPauZLmNZXtw22qsYwLyV9QiueNX7Gr4QJXbnkjgYkA8qMMeZFtGcPTHwZMean63j6BxyNS9FZsvC38YFQD",
  "key34": "33ZpGackHG8duuNAM6JvmLusjn8iNCwZn6ExxQt5G6cYPyYpaYGCQ2bN1NF21nmiU1s4iotiGzGkxrsrWHryLN6j",
  "key35": "5ekBYVqvtwTAmv6qBToRE2554nU6Aa7CNvvhYSripX8hEPKmfa4mKWSiNcCqzMfj3Eq2gzLnmYMAp7Nt55PEChCL",
  "key36": "3ieR3eDVWyHwSeX9UcuwwYHjngxR5TYskVfSHqC6qequfdsy2tLpVWuYjqeR4yUZvpocjNdGkvNYk7BTjy3hbWRm",
  "key37": "EAJEGytFxYuT1YZiJBCac3VQm9okuQStz2pX6q4c2Uq3Zr2bqCkT8QTuLgn4h9efTYFo3RC6nXEKmZTPC84jBAZ",
  "key38": "4sWGsX1wEMumUKe7uAgqAq67CB1pyn8RzRWYZpngh6taeMGzJXyjLvfEPmn2DtgeRkvdwpRaCvLe3CgUQX2o2PGw",
  "key39": "5kWbRMXxGrK28sL9m3rBGNd8uLBNBt5qCeoqaGe1yB4PAycPUiq5q9ufgzajFTx2VCNAMadDnonmdYdcpDbqY8M1",
  "key40": "5XP2QAVHR9TdiELovufUwykP95mzCiwsk4byYvVwhaQAifdf2KmQYXPMxCChsNgBSLCZ2cpbmHcvhf2AFKsAsKUg",
  "key41": "62xQaU7cCwXzyANL5SCYRnmkF2RgVeRRor12GxiMyDnwtsBeu99goiaxyEtUSUvHaMhESvW7bJGZ7bzxMJsQMQoT",
  "key42": "3aYq8NjWwicH2mGYVhL7nzb1rx5H73yUVqLUkBWMJx6UCN3W1mU9VqohiQ9RQu5CvS6j8KbtxRnHfNUiZGTQPzGm",
  "key43": "2op7EhT9ruv8NXgtRFh5MskoU5ikHTHU5z1g7nXqVkDtpJGbbDhAxTfxfmAfMXsvMaph2KrZE64Bt8QqjLLtjdqH",
  "key44": "5KMc8UKn6wXdNBfPQQ7fBzmMHMDcihEk1J8ZVNWxc5hr7YxFjDqNaF96b85GPp1VrqcxKU9XFGks1xJ6Sx1w1hUq",
  "key45": "4VCWtXmEHzegyE5tJ4eoDGfV4aKka9KSVbgigVSyYowbhSSnd5FNCFvczjrDe8rvbFggrMzKGq8LgmsH7HzqEH4j"
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
