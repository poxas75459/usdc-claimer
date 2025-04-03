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
    "2Rk8atp5ycmHv2Wb198eu2cvHKuTrWz4nC8JUDwXwbFHqMhqAHuDJxqU21it1mGRb2J4C4UKmK5eCpfGurmKaWAR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CW9z3eGMc6Z1hMcCSMs1TKWikBkut7cPeoYzhAUNUZ3SqZ57aAdPJNq1sg2yTMtuVaJCYvkgf7UqBpCSoHo2cni",
  "key1": "3UG3wws3q8edB77pvGFvjUrXxTCxnpEPFAsPtZv2tNsnQiFVb9qSegxvRt8EG4y8RWBWbHoAVRKr1nHeacrpqyDi",
  "key2": "MtaGNVqsXLMtZy3o7oZ8S5gZL34rLwKTMhbmDHQysraQxxeHp8GsmCzQsqdyRHghnKZZB8pVZtAD3h3Kkzfp2pW",
  "key3": "9Jjd73LEqGJci38GbFJBvXekuh93HR8WZNwVitNca7fZs9JbNygzqDdHLuwKbPNNWZW6f5i4WaUZBAuCAYeiAyh",
  "key4": "4MqhJCH4n6dSbTkRdHwgr6GVb5vHAdvvJvxNSSVbthd4c8mQnjzyoJCcRYQA3XG7iAqxzZBLqLJnCDSn5U1peUiX",
  "key5": "3n66jBAK4fN36feimH4tAakcLjMKFPRjEUKc8W7cihHtLkQfoL4asFg58qAr2zyMaJwAMpnnAcAmeqG7jrPxz9N5",
  "key6": "EUzJgGHDpk9X4tPZfKbTm2KAZjJrA8EC9HAaPoLPM89LrVMWQvdSuLvyK5MyobHsdDpC3aQhm719rV5tcwWrVS2",
  "key7": "RQjo9jyfsMmBXdT3Ye7z69Y6Y6bCA2t7Z5QkTwi66h1B54YkMTmegLcrs5dqAQidkbcPzLctvXKzqNtEqLt6898",
  "key8": "2Gb3hK2cfTgM8yHAcjKzM59F6rYDXkJVmLG1zWdWVPKkDgP38gFdumrND6P3WQWcr4z6yt3uTH7fbhYQCeBefRGK",
  "key9": "5nSRGprm9RfHy8GVDSXsCPerV6eihGDkECvQUKBLjWtJ9xZ4vgBZHctiFPP3XM3BCH3yyTKcSFbZDtM3uNuEXScQ",
  "key10": "4RXhMfRteGUnHAkfd6fmf9SYgpwvLdMWa34kxm3xuECoo1qpt6YCatciw7DmwM55aBhtJsJ1AYot3gY8sVYoE3Mm",
  "key11": "3AHcdc9MGNAy2CNqcf9odPP6DC6FoTtizKfheNz4NV9zFoYCP6YgHKTX4jVqnRFbEgHtKsS9syLzoUsb6JU5h7PT",
  "key12": "4HnTgGpUEBHmi1M1av9ESWLsWuvxbicwj127AnDCqokAqjPBDo2vZtd6mz9eHST4ND6g3T4ETSj1npcjoMJkqZ3P",
  "key13": "DNqGjAbdJE3oKiPErkVerMZMo5aycoEBRyijum3c9W4yCrWFw1fxaEvTiW4zUeSW9REcnVz9C3JDa9cptWyCL1Y",
  "key14": "5g4JvVFv4SQRuB2RCCpkL5qQ5LdhTPD4PwKjrSH811N8GgAqjvR2AFSVGkvJK22znYn8gsRRbs3m9MqdW3piiPMS",
  "key15": "2RpbRon5est6QiM1GSw4udQ1hRTFi56LTfm5AjXktj9Z8BRVxY77CrQo9fjvT6et2o8EbeRehRWCXwxoRgKvWmkd",
  "key16": "4Aki6qZKL4yX5VBct2PByTjPfLx4PMrpLzYV1aK7qLBFADz7WGmbzuW2CdAQUGciZKj7z9mXWRLCEUCUwzJsSagR",
  "key17": "4b9a81ePaDHG1ZwhDHPaAUNFiYmErhtbSYHGh7BqzDzpo5JM9THe9TtS3iVh6cP2DRhhkA96J6e4DSDjs2r2zsxQ",
  "key18": "5fFVKcLTodrECL42K4cxJvefKyZtE7SWEkpaCkp9f6CF93NZdzzqZsUV5iKVmGHYfjnQCCtvLfXauy1wzSy2rW93",
  "key19": "5kQGZhZkV4Udetqrch2UFv3RmRsiywfurmxRNaUaJPCPmEpVK4sj8HQ2Abpeu4N2A6k8mRStL1w9JymDpNRuHGPk",
  "key20": "46UEoBWVExnzWEL3vpxDJTZvZ7HtLS8z1Q8dm2P99nWPGqKpgx7s5uuGi6BLuL7jf1kKS9Jmp1KA7m1Ct3Z5zokK",
  "key21": "jmxXAKmMhekajidyy6LQBgF6HYCGbsNfikt1MVW8hXW6Rh3z9Mi9DYfbvaC23L9mTLc2KnCjfxSn8wfS1QiYF11",
  "key22": "4ZEpWNNwvrjBLWKQtnYQ32bdYquWbGDbBKafdLUqKCA9YmuSghfyfpqtNoFXP9PEeqXE3yAfqYsXKEXySJmpHmxz",
  "key23": "2BrgeERbvDV5JeWfcRsBtSjZmjvNA9rxfWYdUfjY6VTjY5vPnR3sEDfmS836BcnGex5ggBgVnBT88GXH7556n1BS",
  "key24": "5Ypd1AkopiyfqSCema2tPkFyy7A3KX3oDSuLAbEfpzb7ao9mDWdNG2fzuDkc3Dpbp9jqv1T27SpJQZLkvfuqt43j",
  "key25": "4sSGg1yXpDQGomqFKoN27LJySTyM1cAZt17LKzmaoh3P8B8qtxciphYY5n1Ws3mhxw8zZymbRYyfHib1R2kAxgBH",
  "key26": "ERU2KBPPYBDabsSahpgzqmhXY6Dx9wMb1CEaBniAdFVDEqhTt8c4ZRZRJZLNofK7vNkD4RsAR6cNg8KznV3AHoN",
  "key27": "21HHMyJrvF5jUXS3PguvWLNkA4NNXKfs1Y5gHJTZpDBjJPFcxX8Sj6CtKXCpXCEGDCux1gKZCg4u89DAPwyxszKu",
  "key28": "3U3ML6fxwjbEdpUWpiMEBQkWai7rLMjwb1AekXW8iZPuVTJdEWxDVEqSCgvg2ji7bdkE4jQcydwLtohNT7tKmAHo",
  "key29": "2mcQRpbt6jUomzRFmHUZKxt7qxdkTr5YNH5dipW34WSAxDz1yNqgVR1G3vLyNociny4ceQjF8hmL8AriURY6dXyz",
  "key30": "3aUHs58yfuTRRjscYuhLAPjtmYxa3v2jPypjwWh75eFwyC51P6Wg4dnY34WeVAipfXd2XS4DjE2JwW1vdKYJqs5f",
  "key31": "AZaFHQKQPv2WFPE9b2zoXmGMpSSY1jE3NNGZ7HvGzTe2cAPVrzWYemH1BzbcBmvsk6ypW4tvTcNp9nYKzvsGjEp",
  "key32": "27aV455GyWcXBKW7GmG4XxUkQCubbC7k123amarHdgrinv2o24wr6sc1ck67Wwog8qTExGugVKu7jE8F6rSAkVuF",
  "key33": "Pn17YfSHiUt4JEBzqBNQKwxJbUdux9UEKesQWnUBzm4uTT981rics5Wiu65d9K2Q2iYBX9Hbw1VojSN31SLWu2F",
  "key34": "2MGdcY7VwjPqgwsYknUE6RRzCdmgPbpwkaYeEduAqCauG7sVbs86rANKgMokoQXM7wUcQcEVTFz4be247vDwG2xg",
  "key35": "57WL9DAXbbtagUm1YZwXxqbELvr6Gof2Ri3pKGSypUWmGVDzXH8oCmLiSi8n78VWrAU6GKRBAKcziw273e7AczUa",
  "key36": "3GzYfM9NhvQgVpBJLrP1fyZBy8pLYrUbDWVVKhr6ic5Jd8tUiojebC2Pwd1U9ASbov1aN3zGcMy7G2YWvTCuCtZJ",
  "key37": "5sF63fxKbfUbYbzHDSVwtNFcTaWPTqRtwvK48wMZUDxxv6DHsCr5QH28ipLZvAMR5Jb6GQER33TB2FaFn53VPmqj",
  "key38": "3K1qRjVGPdp2hyobSvwGNFQ1rECNLg7P9BkW8Zw46TXd6xfWFZmtf3HCMRj3NZeTKogZdhxf35aCDBfjd6bSfpbH",
  "key39": "61ddmbS9g45W2SPd7dZCUu4fVjsNo6J6rrvPDrdVTysuhxV3n1CCJpKGjQAJkZEDEUzFQ7sZZdBa9KLVtmrQziuZ"
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
