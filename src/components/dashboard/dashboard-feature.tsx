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
    "2MgWoVSUm8YNv9S1pTCg3Z9idRDnsv8tySVKHqbg47pTaTpzAZns3oedeRNm4xdfRpohYCUqgboooJxivcSRoyFE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T2o1U4rthfMBWPaaZWfikLdH1iihSYxf5nBK87Bk2tGLeTgpUjXmznRW6CVinttmjE5NCYPeY8Hodr8et8YqJya",
  "key1": "U7Z1JhYACW1Dghb6QpoGw97PG1pQmjXNfDpo9YPPvjh7oBjDzVFB2qbTzEfmsm5amYAK7BYL1z9GmxtNqhJKLyS",
  "key2": "3cCzfi5nd41J69nGBUreNQAw3xvGtsAG7HNwffesPtqLfNHhu3TbAErZfgqG8SEfqQg8ifVmBhV2i4n2CPMEUUgU",
  "key3": "eGkyeM1AxYMXwx3VorZbCf5hc4R7KXSMhiz6JA28s6iA2KHihAMQ7U3LbQ5tdWuRzdWAPa4yaF4GeHZhAKWWkTK",
  "key4": "2dyLU9zevodxGreceLBDGSCeCivgVWdSx9qX16QBRHsQ8ebnSvDU4o8hdB8sqKrrizbYAfN5JZGojKrPyXnpEW8A",
  "key5": "5h2kMgPtBYtrLraWuz9x8z4FtCVqDmS5beGcKU2cRU8hftqPbPQxkwvPbbdg1yxU4oHBR2cFnHR34MLrsC5T939Y",
  "key6": "3sBbiZP64jZkz77c3CiBR2zgCgRyBLCjR1Hx2Fd1xKUiwxDTHb7y1xDU1JtjdEiN657Y5ncT9DbmKhHApuW9VyZm",
  "key7": "5cPf4s2moJzJufNArb6VzqWHN4gi3vUPAyeRLH3mLjSWeZuKNsvJCCYwLkGFVDWtpwiVNkih3sRFhAHqdgcrWNmt",
  "key8": "3jgNLgXSjNJT7wRd6MBYeEG7xrMx4VmKeyWdfSUDj4nWqz39rwpyaFyq92T7CQFSJqrg4LmemqMyFtj9mMbWBKrH",
  "key9": "kuVBoMrhb7aXoWNAeEmopeBRLtgy52CPTfeT3nsbp5BZiTu8jfNrdQqd28csyx3gkh7xdcvLRjibrB9Y96rgqie",
  "key10": "DYb98pZK3QFrju8z2LPrHaumUtPgubGkJtzaZ3cUDwKGWxEy8FgajZV7ssKnZATF16mLPMd2iaq8i4oiiD4797c",
  "key11": "3YWF9tebhDKWFAv92Fr9hi5VhBNfSK7eq5VaaTZ95i85Hwk8tNU8QGKW9PASk1cgN4eM4LsLrTerokqs1EyvnYki",
  "key12": "5HdYMspWoXNGkjpGpnfQ93DF3X4AZJ9DGDk4Eb4eT5o5DfoWA9uAJivAxyTB2CbYRcE1LT82xQGPALQpFJpwXqKa",
  "key13": "2wYAZ8kPjocSoUMGAD65948Wd142EtEN2ZSSTLDsNLaF7JAX3aJUqHkjTyeM26wvLWxFdCeSbpfV7abi9N8jMojw",
  "key14": "Ghrh2m1uSh9esjqEf2JeVdLh2bgtmRrgsomgYdn1XpRDKdsdjyAr37HMcVbreyJE9B6Qq5gc1J49yZNrViL7BaK",
  "key15": "5ENXEJkzfG8BweZydY5cEVsSnzhNrDrjh9zJgdLzYtoYFEJBfZKNaGsQgy6rKvv6jdTugu3aYtfD8wpoWPGGxuvG",
  "key16": "42kVyFeMsUMToJSB8fbMnTSEkEatYiJ5tSVhLV81X2stBLe9iWtxVk9BjKXkSSo6UCyDzxWiXi8sgbDqSpqhqyD4",
  "key17": "3sFW6HhvZMQ7zmtfq6CG8bPoyJxXcUywMPKBHgmzDPuzpdWxBhMntVzEw7hkCsYtHn9dwRzPx8okjfhBe3yghXbZ",
  "key18": "37GL3HXfuMwxZ87xJ7e37FDbwZsspxGcbnzgKZmV7Mbrt5QNPBp5ZahkzC5ofMobjdc2ceaEj5aLFZ3WzYFPkw6E",
  "key19": "5GJ1WA8bKwdGGSaidBJSQiHZJaA2s2QdpyVhYyAtSSxYFuXZBcoqdVR84XYtzEGt3EHtfivHNwkmNzRQj4dqHVtm",
  "key20": "V6Prb2nL2erusgP9VnovYTVzNYxyEk4ywpeFjkQKuPn4ugoKuTxajqfBZt1mrYBKzKLg2fma8UpSZ4ZsSXXGD6G",
  "key21": "FpaoGwMNef7NsowCVNWEQxhoGr1iZTmub1ooNpeGFjf3keCjWfc6Ma5ZBS74gBFBCdzC7nni5A9v6tHmj2USrLE",
  "key22": "2rfyNncnKwiHMsgi6hUhnzwn9XU6i5YdZKwFeKHDeh4sQN7PtiTN8jWzQUwrZvknpu47ksFEgXDdCqc6Cq4FgxsW",
  "key23": "2j1T1ZA59vq98JC9tVuKx7oq7psyUXp4XaKG9nc278DgqLT7CzKPhXdf8ZkgfWyaSdXXJLgF9PhfJe5gXit165Qy",
  "key24": "5inR8sUzxPRxbiNF2Qn1DmQ8CyKt38emQRM6xysRraYxRNkFVap5RowMrEnnotqFhAUU7P3dC86PE9Hvv9RjiJ31",
  "key25": "3VPnE3NHi8DAVL5DcD79t6dz4VaqTpYRXPJaZH5huFJQzy5RpK7jSRxsV8jS3sfSC1z3ih2SpAeUZjTzpq36QbXE",
  "key26": "4Rzf7otYPYGDubrdsJb2FEykjYAY9tF7L8CgbsdHWsMw3cyzJDwwKpHkEFRDGerrVtrUFzkGccDUAKq41M8KKDMr",
  "key27": "3pjf3dcbNWy7Bh6jVuWVNak4azrsYSdNLSsgUzmVK8i6sbe9CYUwvM7M3k4jQXrMJkYWhHG761urDeJsXTRkUkh4",
  "key28": "5bNr8j5bqNLZxQoXTyFHZpzt1wGiTsXxG5if69E9cxpF2RL3iGL6wXPpbysfk4dhaP7wocH2t4EbLLJAzEjeZoMa",
  "key29": "8HVNXjGApWc1yE3b1pjPvWHnuT4Lxkcta5P9R8u9uvnKM2uvN11ENmnmpjtiU34TXF7auVSe7duU4RQ8vHaszwC",
  "key30": "2iAuAtTbubV9xbCjfdgGLQ3SVPjpdFgpcyobN4tANLu7BWDnAzKyzGey4cdyFm9BoXG7LSMppZ3rwBGZ3YhqkRAg",
  "key31": "42qkQCuwFNpisufMAkwUN1ogfhRbPKdUvnkzYHYsDP17qz3zn3Es3rkJQzxTDVhN1WNw61jHVvrsPHDXPbinyMKA",
  "key32": "2RHG3DUfdnwF1uu1mAcnyDPjYUc8keMURAPxmtLubKfAa4zWkPdG1zEWvY6VM7VBGEm2cVRm8MQNuqvyxS4bMugy",
  "key33": "fN4MPDaJHFrBJ5X5qgqQYqX8rppMhhj21HGNdf7to2uwx9hFtRGzHRUoCS84SRgfw9eHUpawoNHQZRaEpWYJXep",
  "key34": "2nBqq7XnEnf2EataGMA5anjdW7U8spQ2r4nZXoehAaVDD6HJ9std8aFQPgBNAUopsPQBFGCDxtQgfpGNRL5t6ktb"
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
