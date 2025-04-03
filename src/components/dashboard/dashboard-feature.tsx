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
    "5ziZw8G9A9BiEoApPCovJK43UnmSnmK9C1iDZLXw5G2BgAtSFrzuXsQai7HQ8EmL2RbTxZzs3NrkSPjAcMH5pVzN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5huyKEkge7rmVWUzK77nEsaghVmDyhdAf3dXtrD5PVCNK4igr3a5NA3CqtyeyDfHvSB58xmnFSg8yU2RyTx9km7V",
  "key1": "29vM9NUdYWwJfTzisPTyb3KeGEJnJqWZr8PTNmTCLHyF9wBKPkmX969UhyGiQ5BjXEM2TxwcwtLmchV2C7kLtnJ3",
  "key2": "fozZuUv3DBKd1XPUhzVBZ6dRotZm3UbJsin9d4xRcrYuZaQ5UGzEh8EnuqDRbciS9sw6Cbt9Yg3vSNdmicoB8Tj",
  "key3": "2CjBCzBE7HtdXSRdptQo7QTKGaEwvJXb86qJMeJ47URDgMogob1RjVt8FFViYLgMJzxmbF4Y4aY8awmeUgNbpa3t",
  "key4": "2fJouzgQMwcNLaZ7pNmBBe5hJdRmZqyXtUstwKsZzLj6AYD4PDTori5HC4AWbC5JYcpYU2dH1RWZt3Pm6KXMYpf8",
  "key5": "3LqGbFXVCxUq8QWFBAcr9ux8YSmWgncvrnqR1ZuHQs2gz78qjvLypuyZNdYeTjZLMUSRPBeWChZzFUQbFF9UQzeW",
  "key6": "YrMC5UtQkjr7AUddWa2n59sN8aaZ9bYMLzMKAMd9asgrRbF7gDjFCMpALhH48SjftNZL37a2rYQYPcwieqJqWiL",
  "key7": "SMyh2eLmVK7rKz2Fdb3zJy9RsiHa6xTHuVAEdMApnC6jw7TZvv6EcZBZ8Hrd9nwzixQNRbQvcpfQpTaV4xgkeni",
  "key8": "2hcyjdFKMbMjo8FPeNqk3wMua64AXbFVcSMp9pvmCuauq9hzevGwZ53hTyrDqsmuL5BpJRXjKsf3f3a8dnE5FEAT",
  "key9": "479aWmdDNSkKZ1bxdFdGn7azLQ4AzvmTunBSBFUgj1fXdRA3ZoX4tNJr799LTDSfXMdiyGVc95mKW7Meue6VJNsr",
  "key10": "hu9FQy5F95gPVkihwHTqvFhDpudSKdNqgRLFFRM9Bx5qaf2vKYk8skU2njtX51K2Niv8VGLgkm9Ss96QjX8hG3Z",
  "key11": "5oEgctXXqXnx8dxRPjsXbo3jMi1ZHy4qKjtjB84PEgbDb4C2JDiW2JAshPZDYQ1VnVZTSQEpLWLRhsfivB9vPF91",
  "key12": "5LzyiTyvYLvUqeNK6vpdrhFHMuR5gmh4nhdhDTzZMzE72rYMinNmc9KwtZHDucgfycGidvL59haiqe6rJVnKuHA3",
  "key13": "P78s32ey1wttjrKHDpUxZrj6C5pJJ5et2HgsKdVmnGNSeXpLTWBiTMX1V6aK7BS61pCQnJYYUKNL43dD43RFYNp",
  "key14": "3xB8LpjstUcxF24jQkTFpWZb3VyooXEM3dLc362oPjm4Rm7X1J6ptPpmgvPU7NZhhHeYeuBPeKnp7LNHtrDigtrQ",
  "key15": "5pFZ8Q7JrZhP52DF1kgdefUzxK2bseP7VQn3yWpAYjg3wZwzNDHdqZkv2YBrP7wxP7QoECB9S7YPuDx8dosd88q5",
  "key16": "x5Ls5ibUrixY6paS7op6MXAuHpUkQdzsAtLHgX4J4bXMYNuE5yRodYN7D5yXpP2bbziwHCg5LEnQwSLYUs5s3G1",
  "key17": "28sL2U1xwGdVo9kSpRZszyKv9kytHQicbZ9U6tqV5sU4UJh25r1VDWX5qWeR9sC4L4RXXE3iphSf9kvbj1qiaL93",
  "key18": "49ndkrehK5i8AY4kjiM9e9KhfQKyV21Mq9NNUn2hFFuGB9BuGEBGnbsYZgcMb21GXCWQYZyo4QzZnSEmieLgs9f7",
  "key19": "2bUg9VpG6ryMs9Kja1kiRpj1V21oAFPrmFmxnWAgTeL1BRkZSK8RxC8nS84oub5xDKGMqHnfHUPoUamxoMXoAe5U",
  "key20": "3W7TfqrJry9h8Qaw4ADpYjZbcmsEbCpJ4zVMLLFgR3WZKeBtFDEo1nX2mHvmzgd9DNGwRAB9yaY49ytAjxE6EqVX",
  "key21": "Swd6ZAyKFqaMDwdaqCfEgRJVkfJYqE4cBbDR2x3VVgWnBn3fAawkB8GKNzwbEWa7m1hA6YcQT3q229xhyo52cH9",
  "key22": "4WHn1gug3aTNbDpdkaoPRYYsUiCDiqPvKjU4RN7a9oRnNi7NNWZdhV6GWf1wsqRCFXkek7o1kCKVmwy97wS3ySeG",
  "key23": "zjfDuuE5EbFSfLKsE5YNcyEwSRcZuZU86UBNtba7hA4pEuamit2AFiadYEdSHMHLTeeg16yud8Xq2GRCNxeeUHk",
  "key24": "55V2ebyCTQR4rAtBePGswsSHMkUtwR3zN5jQrVEhZVrJPWwXCGuMn6Ran3qR8cJL6EZoevgqQaPW4Vb1posGTvv5",
  "key25": "2P3hTNHrcdiaY2Sf6HwbdbzLDLYLEPacyTtMWqGz9E63QrzUw7vcgbZeVqBoQcKNCdLGCB4uN3QLg9dYxvzvWdA6",
  "key26": "3A5fZaZJNqQPsF9GJZ56Y62iZKREmrkPe2LDyWQ6tjxib1nmBzMvsRnu91nQXb6S1Wnn3YP8uqTxUcpwPPmVmyiE",
  "key27": "oAP35LVa6VpAJ1H2aCQ3Hu41Me7NnxMNP4zHLv4jb2bFfcnkQkEgrq6TFriuudJcfRZXYF8N71Nw6dTpxDwntrj",
  "key28": "5T3kw4nBiybbSgxshPukhBbnDNY85V7ZvBvTQ5emK1WwpVABXiKKacvYmqxsJzFB22ne5KrsRtzSjiJpwSwujzx6",
  "key29": "5417KEt4ego94kpNtXRSksL9z42k9GcgQpUC5J27hyUw8PMCVPW5UVm4aTKqjqiHwPd3U1GoLqdMwHsxGVyxFqci",
  "key30": "3C6bQLTHZJM1XvNj3QuPdQa4fPWkbNdTQ8TEYR5rwYnJoj8RCKy9UJWdLQwZ2RTuM8fhp5zXCeMSwfj2s2oobmz9",
  "key31": "3mdhzD5HKauWQG2MHtAZ3Dkntz5YjaLxnhDv94aH2Y93h5AQTcrxPgTLAWx3gVRGfcjKp6aKFNeK6jLNZQEjh4kZ",
  "key32": "kRvJrbNkdkzNNzegkunqR7DjmtmHcBQukJBNBhohh7ap3R2ECXNwmKWXVFQv727NTu6a6koMRsunpFZ2GKCb5NY",
  "key33": "2ucEgkB2zQYfqYhDgDNzvCYQAcBwrgsi6UmPjBj4tATa1fNaDfVeFM4QEeAjuumZrteiLaMg2kJMxR9XsiWEaEN8",
  "key34": "3SpJosqAfGYLFoPgCgBBKgkcLFPfaFB9oWR4UFTJF893ydCXcaFDz612kAoYGRVCzTz4Fnta2gAkBseTdwBBXbHc",
  "key35": "3NZLzY4g4ajGA2uJwFYud95ETTZnJnvv7e8zf9Ko8m4KnHZj1ofMr1b1D2cQdH2ep47wCRPbL8QDb81kw2ZzL59R",
  "key36": "UnTtaUrxmTrBFX6Z8VHxNi2RDjmcSaZqbpTNegyuxCk2T8ocXgd4Ccr8zvCc84JWn6c7vkdAZs2my86uVTJzGGp",
  "key37": "52xoUFSnUX9Rw5u7Ejkc6HQXd1fnZ7usUcadDUB3kkribUjCaN6GPixCKrpCa6QJgCmumSU894XbVWGvBj7jmXqY",
  "key38": "qTPG1GiUDL2HmugogZ3j9anBGNUgZpfSo4JstCiCcAKQUhJxmAeL9eBpqKFmsQnyGbn3b21borRD6xpTUzGv9Eu",
  "key39": "5PZC86cwZh58mG4GjSi6ghGVdMbAPvWdJbR4pJDiSs5jyPuYxjSEcNBHMsSPKrPxK5RPhRYXdFY9DkRaQR49tANy",
  "key40": "2b2WZP6tYVrGgvD9Q4HaqDR6QfnYC1LqAH8ftbmca14iwN2o8ynqGcAwM568pRHaNFMkd9gKDZb8YumD2FoVjqKU",
  "key41": "3zhcPVbGoiWTjYzNL1dQouiB7YmRNQnrhAzUrxR8stWoMeDTSUZF9vptCbBPHJfKxVaQ7sR4MA4KG4XgFWtyC8z",
  "key42": "3cxZn8szy7j46K94Lp7WdP9EN9wfqwXdtbMmmWPZWASAQ9b6L1k5Lx9WS2Eqaz95NZ5JVatLMQiZbcm34SLjfsPt",
  "key43": "23EGGHXzjp4Zc2oV2kNuWgi9ai4E6svpK63VrMryNaLKjgid9W8r6CUYZccFjqLUQJnyp2GWAgdJqrdADtgWxSy3",
  "key44": "54AS4YmzEgk5CtywvEPiqofRc9w1sYfE9PMvnNSenfDU5kbXxCULxjkSw29h5EdM8ohF1hEahyK8EfV7qqYUWXVG",
  "key45": "4RdKgxQfKn2NGerMm92GmnFLwHKayMrCQ9HEeAGctT6fjgPiaiJrZ98CAm2XDNsNKEBYM59bCP39q92C4hWmARpg",
  "key46": "3bEMq6YVoGmmWmXMBrhriMg6VTnkaq5HT3XRmyr6jSyKaeNFauDkpSZSMzEk4eM56ojQt3FvsqLQL56KK8FtgHGG",
  "key47": "4Bsv8dk5GQcMPb566yTfGtfetVMwv2GUzVjNEX7qxRPoHvRvpahX2zPzU9zmFtM7b7i4rpLdNg6Te2WTEWNdqFdP",
  "key48": "3BcJ6R42W35bwCmzrCFxjCvHxTv7raVgM3J8EQ3q3WtgmrxcJQmSxHHF7PJeeVhqtUu6rppWWpP7fuKYuEt92r3f",
  "key49": "57sm9wxwpn7yF7mAi9n8VmenPkwu7cEgyL6Tp8gESYbsErG5kKWeTkgjjKzLs2WoLKB1WfffH7mWTV7d99Htjq93"
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
