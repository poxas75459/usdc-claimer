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
    "3yHb5BBHtgQs7ta4GUc25mRh6Grb1cfAJyCZCcTF7q462J9WMCECABfe7K34e1qj5HzDzYudtKnorqymNZQzD43a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QtD55Y5npfwNokPCyq4b5tVK21PSVf8pBpmZvR8ZtWYokTk7k9AqsuC7VvNKhLvH5LJzsfJKd5moM4P8HMjuL4V",
  "key1": "2ZR7xwZn5PUYPkjZSkHcrYhVPgR1j9jBj5mthRk6dqpqcqASvvLxsutPTZu9atqFexo3srKFsvGUkpEkrXb3bwqN",
  "key2": "3mGzXWXRZKkfjfj3wk5FUzrW7HAnsHXL8yfaLLrWoMbPFDM7RiCHs4uqmo3pACy9epSiyUXHFG75QbmprsRL1yUB",
  "key3": "5D2jqvUsvANkDFryTKiAwJzSisqA2R8X4j9Na9nynpoqPVMnV1neC61iXRwe1et356y7Bywnk2zteYRByXXxuLcn",
  "key4": "4b2touBvziTkA7SExbeSVAmfFsoN7SzUz239NMCZLDonjmEaZq24fRM5axfpjxeq31py38duNLWHyXyi9UNziW3z",
  "key5": "4ZtzMUGhnRHYhVWrbLSfpwnivG4V8pYbpVD4y43w921WLZrrsGuYPf9xxkWUh8ad7biv24Yb1p1b1SkbYc1Bv3BQ",
  "key6": "5HTxaLcgNTwqbRKw2Kn6fitRHtvdWmHCekPxTrSZgzM3p4GBL1BNhoizUQDRjGeg1S352SiquQ24asrRLgrcdZMq",
  "key7": "24iCB1pVP2eDMLYGzdmUrAUHfZ9GzrpYuC2Zg5L4foTEgoHF7dYTZSHDZXZcZPramorgWBMuHUfNE9m4PJ2YzzZe",
  "key8": "4bCMZwDyuvQFLs7wHf1VnKa7BwJDPqEiqoutZafsgMdMXBZRwmqhmaQo3W6pPCrbrsw2fbXZvunoybBXwytk5dtM",
  "key9": "27pCi7qU6UYoLe7y5n82r4Y9r5Ho5CS85a54WYjnG6RUgZpR6Ds717TZm6Fipm4yCrstPfWLota8JNHs4RMagsF1",
  "key10": "5DnhQ5vfBF9bzSyDfHqqWxVL6dC3jcCt1yFtdTFJ97uPDKRaRqXNakvAVjGS17wEzhu5fnFRomgBDgvczkdrJgwe",
  "key11": "sWhmCX1TvmZURkhxgPfztudrbm89114uMyRHT3pR9BjbcKvZJo1rSzZjRrGKaSzYPpzrcZeexk45HkUZMDKVnWa",
  "key12": "49LfaLBcXHpo5C7auHGkHrp7WkoR86931UdMLppz2jLHStabhkSe4KkgrxFb8wkedKxCSTuFn8nPdfMMLS7gnp2y",
  "key13": "HnWN85ctYYiAjVzeXxKd9SoLoVHvnUh9YNHi41CwBZVBkzVakcP4pFyK7v6xD5U1uvNEJzjXoMpaVUGkFoJJLFw",
  "key14": "5DqPEevruSnLkHsbNCAfT8cejogmP62MSccpMg8tWKFtQ7u13ovW5rvtjraKqiK7uPGThkk1gpC65HWVJGJQYGb",
  "key15": "5AZdA4c6M1qQ3eipa9Z7Lrk5GPFWPvdv3oaQ558HNCnVCixpGjRuDctqGFuHrqP7gTBypbzkg7LPCs4iM6ymvatY",
  "key16": "4RtwhXtQMagdux2BoPQSMhGmSgeHZRqFH3WMES1fFqXLeWSJgsNn2Trkxic3Z3xk9LWgCYiyQUrgbte5jgVVmBv",
  "key17": "27ou8rq3fbjeLWoHtMLPxvhPT9fn1ZFjfXjxEtDDuWzv5yckv6wCaEN71A5cjB1Qih8MaUNAUb8MgMnz1mg2SwhV",
  "key18": "3nu7Pp1caMbwV6Zo4Jcc3oR5Fn8hduaKufYdRrzhx7LGgvSXYxaCnzyzdkx4LEGLPzWrCrugaRCSpkuDzFMZBEFq",
  "key19": "4qmf2UND3vjJKtGUpG1agJf6jf8wy3MzuMrMGkR8NERCYYc2TGshizFvtxnyfVoL1JcFfKmkAUJ2paqvkgmPBnMM",
  "key20": "3vHddUrsD6dwZKMRDgxEdeDnGab6tfJHTFNV4fkqZrqkScVRcRskiXdcKZ5f5hy9rKU1kDrDmbqQrcC4PhK5X6fN",
  "key21": "32fhMvB7fPKQH8J3wKtw1Lj8iG6i85xaP2THRxeDzT5GeZnpxQ4KpEsKCkACk1EXoWJ2srpjduiGQhSBST6SsgEK",
  "key22": "5ScAj93HRnpqRdAe1Qmxj9YidtAC4jGEfUTDWgLfQWeYxyHr8xVf7Lb8bkE4xN2NEwjW2KKHLY5aPHv7TK3pd3JK",
  "key23": "A2bxsUvpkoxVVCAHq9TMq5aQfUg7uNXDMT66aJBBrNTp8tTKM6XFrGjimRkQ32Sc9M4Qcira13SeadhgHoFhQw9",
  "key24": "83QhmqrWpKp5yJTMH4U15ECVhojzai5zSGL9Dv47hKyLow9Q86s7JsspvfW1gXGE5PgAif662mkUUviDCfipoTG",
  "key25": "V1Q2XhqPzgRxduaPkfq92TViXsBGRjjcTqgJw4MLhrfXyJoxzqBjBfeb4zK81AADN66ZTd3tCsTXSBdYpWFFpZS",
  "key26": "3QdVDXiTAmi5kuh1FwNSKEWDbXQycfhuAXZZckLK7i97ut9qYgXn3iwcEcXHRpPHKprc6523JCo5o6TbzSCfaQUL",
  "key27": "4uR5HEkfkJoDGE2YrdqpXaCdiYogK2GVyjG6cj8Pk2imbXceH6yKfSpsK4rSo2aSf86dy4szxh4tA496mwESXK8D",
  "key28": "5mFhjr8S5GHq5v59JNGQT6ubZN2xrkthtmRc8PQzyY5amLRKuEqxLjSCDmJqMHDCB9SuFex7jFVy3QzyXtzYkXEk",
  "key29": "5pcZ92FVqyk34Reyw7XpJTKSonVDtji8FVX4gtXKEfv6bYvJzx1orMh9JJtr7XLhreR4uvrekk3ddmjLhpdkq8MW",
  "key30": "3GJycirrLzC3sgSWV1CNMzcXdw3fot92ogW67R9jLu9gTVWgFwG6mqg2m9P4bgroV5omoZkfGUpL24kBkZ27MfS",
  "key31": "3NpXJez6HR2CJ7jewAggHk8LGaW4oUn1iimuna1zkAuYVqVyvvpoCAwM54TGDtiYv2ztZjoikNxohgXAMn1tDgYS",
  "key32": "hFVQupGkcATntmP7zHBR76EqW27Ug5XHZYNVzqjCcipfK47Hxpgo8zb5rzT1N6tyVogZGxwBW9Z6kDBTqoUAMHr",
  "key33": "2qGpTV19BtV5QZHuUgLaYGEiB8Rn6yfw9FE7s9UhcVZvhFZ5M1mnRRGNAnotsAewt2PEPAcW1kNxhmLDKfgfumVm",
  "key34": "a6n48LnfMBv9KSGhyLdpK8128U4524r4DVVdngcCkERecUhpUTr2NntoiDCcKBFiye7LRJ7Mou3V2REqFV2Jwny",
  "key35": "5VZf8kXi2f7boukSLJuxGiXh3iKfzFqUzwnVGksMQ3VtAhHdEBEZy865gYVVKXrnqFyYMciFuQq8S6gQ13m1pz26",
  "key36": "KaY7gJoXHDbYrqHcjtSLBQBrhoVMmXFt7B5DuWzbd47dS2ud1b1uwXfjafDxGttkGGok9i3h9dSobMt2CYyRDMU",
  "key37": "4sg7GCtM8qHHQmcynEa4wQHaQ52huT1QDRRVWUfib7wK88HKSYxaXyRDEizpN8wFe8rx5Jr34rQFCdGhPuYEXwgC",
  "key38": "2S6XQSdR2k4TH3Cf2a9MMtEB7oTSKozsjFSASuo8BUo9zpp6GnxfnzrjLHUsWBzFghNWLm4VWgKQZyf7aaCq4q3c",
  "key39": "3C8rdwZ8Y2YvvSsUTwz7NmPoKKv2aVHi6qvgosPcKsNffKeZkDcE8eC3bHpcftS6nd773KvBhzGkE86pqje8Ger3",
  "key40": "3Z1fZAC1QAgQuSCjFNR6zxfXoaEQBurJepLjZyLwYXjtPvUKERMaiD8SLELCxFs6vSoZfmDdqTjqgVmHsyyNrcPg",
  "key41": "5ejGUx5rSQRHzEJtd6QYagzBWFaxAdZyoSvY295Q4Dcug8WwrwsNR72NGtjyey9Rj3h6ncPcwai9HXiQpm9Aybrr",
  "key42": "2mCeJihxZHHZpfTD2SEATEnQrYZnJSKoSmEyCuaoSTBKTTPmjvdjkDVYMQu13z4JukMTWuQABwmh6rUZMQR6udsW"
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
