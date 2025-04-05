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
    "5PsD8aiHgLh3vL2J9svFfhBNfVNoZE6B9WEfxXpoKzZjgs1WxwZpcZpGZxss7z4vmt9FPpEUdE3HKtsDjQLipgYi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hnBnZjw7114onyp7grhA3APjqa2rZq7GVGta2Hyf2VYbbDMGpR3WiKsEQs1EKkVW22Gu545yfFmPyEmttDxKH2Y",
  "key1": "29KW5vKE9by5ZFQzbBt2jXu2dyomFYCHSfE7JmyaBmmAD2uZ8BAH7nz3yYmkrryiJCKdBt9SCJwSn33kfr5EUkSB",
  "key2": "52UvXGYzcb5W54YYL1zDKPVuHwiifVVdtG79pidffw8wVZcTq7kT5wFUESQ92bw6RX8kUgVjQMrNszgSAYHECH8n",
  "key3": "oTq9itGvKykbxaeZHSJoDuAfkFG43xgGQaeGRpFuR4XseFbiJ1c2x35dd5ChW1in6V7iM4KE12aMfRk1iA5D4fQ",
  "key4": "3R2icPjWY86w7qMEWQvx2aZtPhduiRi4NhehkPV2FKj77iuZn5jQeZEz4U1PxvvxiRrGYiWV9Gwy4w31SGw7XUZK",
  "key5": "3ejkDdhGBVQJCX4LHkcPTsVAjkW7KuWEP9eLT8myRVZukcPidnEthUmGpNxbbtsMSk8uSgcuKk7LTkW3iTBTKa3m",
  "key6": "5s4SwJ8AWcYP1At7Uzc2KsAXfivcpkAyWGvkEvTTxhesDhBx4Tfk5oPonhdLVgEwUGVRjFnXDuJNFmStHKukBs1t",
  "key7": "4PxTeJfzRyaEDmEMJiEKG77vfWgreCHxkdAJFvDHJs5KCkmUVCoPe6Qir9bJy1dd9vyikAPAcy4uXx53kkgBX3Cc",
  "key8": "4KnsvBzD7NSRAguydNcNXgLuGTMPYNsv84Ex2qZyKkJjapQsEChxmhGziMqHC6EfG6CUPXRCqCZvGvzx21RjHizp",
  "key9": "ySSvyrZFZbkxptVxBWqGgVMwAr3RHuWZg1Xv1oosVRQvWp77V2J1PDqvjry8ooH78GVr8RwNj2RuVwMPauNtQuu",
  "key10": "3R392rur68atG6fhkGCaRvfaD7u4bgDmLqrEiXRRTaTGdmjNNCvCEXRV7kCeimp7fp3BzVbvbf1M2jqfimyuRu6r",
  "key11": "248dfRrd11DCpwhtLREV31PDMBxmp8UHfmLK9N6zEsJFCKmrS5NDBK6eNi9WxqsY8pEFJ2uqYFUtejhSovWrr44L",
  "key12": "4jLDxTJ1UmXyGb6eXocAnMYkF5xdcxomxdKHYTJw3d7Q9Utjxcqk4d1fQoCqrXA7vojrNrbMW2YYZkvg6eCSeuJp",
  "key13": "rek8nki2xWc1ahLVDV93Ynqin643SgMgmcDkmhnXUSahVouD8GHK3m3hupqTNknji37j4GvB76b7RQJqafeTpJD",
  "key14": "2X9ojPzkri4JG5GAEQfSJaEj2NReh14K8HZJKGiTY7BdcMpk4pKbE2GftuXMAnByQt9Pf2XK6SWUnNjjuKeYdPeR",
  "key15": "2hXHCDQpC3XJSpUAxXEXmaiddBJ5e11FnaphE1xQftinj9RoVub5VmhEakvdZN729eqmwuEjpxPzyfve4Vw2oeE4",
  "key16": "yRXDo6g3UsHFcFEynKCiV8vRmUKUc3fCAx6PaKNb2Ld6zQViWScypMbZ2y5LcooQc79ZUCtJhtx4htA7ET4X1Sd",
  "key17": "448Fb57ecKsqyFtYpk7hzyz3r3AYTYz1V5yS1gmEse5VT6WYjxtF47J8GrtL4PdYjAewkJpaNC4CM9h1aGNJG914",
  "key18": "2ZrvWSxYS5pCUkwmC4TMRZ2zK4Fyr7NRFt1viQEne9ZETn7Zu5yvXNvFeRJQfqCvGMsJD5H4BtcKyoRU8WBkowtq",
  "key19": "53cM9oJ4Mpf6XMMwvzobvm9uY7pLgAYN7QSJWwo3sKuWNWWrYRwXAq911U3kbdsG9uAjmTcRRS8i2z4tL1t6B28S",
  "key20": "3qu9ucJwt7TCa8ZrNsU9AsonTNBjqUWkiw5wiw6TUMBZ6Z4oKnecVpSL7MiSo2xqBqh5yhCgrakV7spE71E8AnJT",
  "key21": "2STYoF3U1xbDirkc2Xpn7LfnyVWaib58UimxdpbnXXqkbw2viFggEbzAxEwbSm4QQ5L7tq9H4Dsb9qVLuJudHJZg",
  "key22": "4zzX3msH3WFkqwoqqdvJpuvuUzt6B9UYy4EHDgexGv1xNABBw6J3wcjadCL5bmjfku1Rn1QWW5L3tzsbVLru9Zo1",
  "key23": "5MeTtqqck8oHUVeHTE9RbnrbFQWr5v5ZXzE2N9GXGUhHWTWVfmXBXkL53qgjHermvTUFf1LRoYQqiEvJKF7D6Aru",
  "key24": "3cwBPbh64FJjnQc8a7mPXzQd6SsyhRD51qW5PkkvFrwiUitXAJRMPb79dQ9TjQRKBK2cAnNDQQywGgDQ3fVqSoBX",
  "key25": "vcNbk2omxygkYDu8VqFDxPz4KR11CnFdARSmuvtCBDcxLU3u5sxdmue8AjdLhm8yQ1P3evNKR31pJ8Wf19zwGgs",
  "key26": "3YdbKDNDoYHxqbp1Eh4hA8YfrrWGnyh6nVc67adTBbaMh9cNF3LDiC1wVE98EfcV9w7WqH4JRvtnK3686Q36CE3y",
  "key27": "Jtd7MNeJvqaQwVVJyfRXwG3jP4PJMb9pTT1AUWdKf7joXL5kBASoq7MvYT4GEQa2fJHorrEf7jZsWVp7Di3R9rR",
  "key28": "4bWnuGXRrChbizHnCT8EtmF6a31y8Nr9yfXwyhKXEqcGamK978VvS9vM6zpeJ8s3K4RbmJyKvvKy28VKZUc33GdK",
  "key29": "4Sj88ohyb5f6ahSEFXPh573eFZVt4d3Byrjb1hWySznENKRh4MV7KBtXCj9apPVJUHdHPT2MUbt6T51KmhZfPuew",
  "key30": "4kU3qMWbZrjdmAZgcU5DfLSNR8P7a1P21vZNJfknLcFon4F5sdCeYkzVF2Gfz6phRZXACVaXNHVnJjbNxWm6btRU",
  "key31": "4r79s3KPX9Y9VADXCn3hpdJbVy9ukys8GxBxmZZMSjnNiiV6y3Q2DD8A4jk8MPAhquSFoWrSvs86a2BeENmgdnZF",
  "key32": "5szTQJEagdjy6bKthNaVe8VqLhByQs5ibvdRvbtH6pucxvthPfFcE5xVzVgtAKyn8JgSbSZrhMDVwGcFeVq47NxZ",
  "key33": "3Kw1XQ9cyZEW2p5ra9QkT2oCNpRqdBE6cBv6oMLy6bv3u7dNxjZVbJjuy4zLhkiuLZAbYioE6xWmnqDRspkJhoDm",
  "key34": "2Zr51G3GmWkghahkp4KrxgSceyDSbrw5HkQkfrSwHpuMyc1ut57Vc4VMwFh1UmDJLywUkt4afBjxJEKRqUGygYR7",
  "key35": "25Nc8qBCPNn3fQKpKaXQPn5wD6asHG4PiNDe7MQbR5Gn6aBikjWXRiPETAtYriayEMS1myoCh22ou14oyhy9yh9H",
  "key36": "2XQBWvx9TSZE75NqZwXWejJkAVBQCYt4EyNdrjqDwyXp6sx8VD5MCon9crm4rvH7QXqVqQCAvq44zZM7uExYMCFo",
  "key37": "2MtXj7zdaDo9tiRzgMVk1Y7VdfF6Cm5Q7syvJ6bJE34MHku3kzcZHf1cDuNtFyP3m4TkLQYMwGmBwBBNo4fVnF66",
  "key38": "2Au47DfdL2iQFm3ZbKk8N58Gf1sEX9R11f7ZxKvmtUMZizh7gQPWEkcNXQpBhLcKVZKtx27MEWgZVeiA6P8BuKZX",
  "key39": "5xNBib1WcjZCADVdH4EbFTE3Fa5W9fNcbFZUuCPQx4qEPWDjscE38EZTc77CTww1wpZxsok6GL6J2fde3ZVLrNKe",
  "key40": "3ccoQF924ZGNyxBR2w9e1URApWopETgDtkMutJJSXyqfACUybWa199WASwjyMT5cBC74wM7rAhbZKQzwLkPhgY3R",
  "key41": "4yrNCGLtG2MSgsZEb6bmXDUAhEh5vgzWDQf6gYaQQbShsrkveFmTPv6wd4PqzBKLAFhbUQBXqh65cLv6okusU8fP",
  "key42": "4AaNoye2EN3Dq7SD9v3FfiipM2crgh3iP68y5hztrEtPgdkTji4S5BjgjFjsoeyBWWFsecPJvJPT8ifn2CJyedLn"
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
