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
    "59Ei8PhBdRdrr1uAYMcsaGoPRyPaN7PtE4kWdhQqNDcmBCnzUkudXVZh1FV71a6hjxpriE1Gquz82Ev97bgWeMT6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kMbgpwcSUmwCzpUFQe37q4xspcA6acgEVLqTVqCjBdJ3fMFKPU1CfC4rwZWkRDyrW1qrRZpUmkeh3BqhKnTBaZp",
  "key1": "41K3vKSsAfJfYsiQFwXyEcMba4a1MkDsJEFm9M6uAGobBasaq4j8htPK84yNaiHWhJKEM811SZ5pmwPmwScZLdRg",
  "key2": "ZxjCQJZqEXDvwg6wSW17QWh8Pw1EFn6iWe9DiWERRXCQab6QUzjsMPVBiJcLPmJUcsreUzdRuPyv2EARrgxcABA",
  "key3": "4FSLunZKL8A2SHMo9PVQEhrV1Ze9NuJ4LwVwVfWn7BaLm84Mxcgj6MSufCHtT4NF9gwU58DjdSAN7gnVn8d4h7SJ",
  "key4": "42Xb2EvgVVfXSdqeBpVEzZK5CgTrn8NvPHSDD8NH4wgCsnbrDGie4bmjRXUhLYHJgn2nVpFondnNe9FrLmFVYizn",
  "key5": "5guzzNijoK6tZ6rk3mHysd2YP3PGhdmajtm8hENcpdBhRoi32w1sSL9qwyN2sD5tGTUfkpiyszdPkdFEwV8gMUWV",
  "key6": "5jvr7QzcyfDK6K3Pri8w9MMSYpGkcu6ub7KNWwHTpaUmwe8ih5VBSzXjQ1qo6strEBQE3DKjreN7e4eV6UwtScNi",
  "key7": "2zZ6BxDEy4u8DENBnoRWRpCci3vXaVrGhZ1PLFPre6sjSB4ytXhYApyx4Tj3gvb2K2HntpVBGh26M6WzeBLB2pAe",
  "key8": "2AqgZ1dcBAchxxEmySbVBLLwrFj4mBFoCLDSi4YFAiWNhBMEgEttHuv5vDGKekwkRQBi6MxFydtkwfDsmArBkvqk",
  "key9": "451rzhcFXCTZa2RXtdP5T4678TrefbMSxEsDUPPW6AHujpJ8pU95wt2cUmBkM4CoEVZk8S9X355etWDYSWEtBJWX",
  "key10": "3tk6LLFFRy3ptxwGx7eEY5LxZ4yma2QHH6AewVTmE7zggJndd4NN3jxXR8JT2KzHZidpMNPv2fVAxRZCZ8rVe2Y7",
  "key11": "4bMpALANPd2iffFunAqNmAq8Dca49Wxkc67CVwL6jkzJtEhKKjZcK2JBQQqvZxRUeSjeAoYfVMd3yQVwxWRHiYB9",
  "key12": "NwfphUhEiFnSyzgPEW9wQ78AcJNeUwQyvzXA438JGgBMxRgrBQTXiScT33B3pVuJ4w9KT5eB1o9r5Uqw7k7iJeu",
  "key13": "Fu356wi6SXN988arPLriV53tDbBFpCaXwUaR5GAdxucfW56qTcDkfUZifrEXygMK37SNoCQ39qFb58rU1ZGFmLT",
  "key14": "4nXRGrZ4eFBB6HR5qt9o3v2L9KzuyGwKPMf8ujH6Eq54BibjHLjQ71qTe4VNXyh8BhdqznSm3mN3Lw8bv2miCQFK",
  "key15": "4Vd1tbTEWn5TjwHZwZTUHpLkitjautHXvvqsteaUquPbVdj9ecmD32SbLTHLwFpSmUNqwVtXAhSXbhvusyPpNA4Z",
  "key16": "F1XAR4wB8v1FGskrX2PgMsvMxjS8zznKUoG7cUardjLRw9eQhYLSnFDecz23HJLUk5EMuZTBQB3jTx2ks1tYypY",
  "key17": "3exAV3KH9cufJF2z9gPMbu4sK9vDbsdMe8yUXQBrZoN4CwToxVfgSrnVDij5qydphZ2gibTFS5jjC3ycYYaegirN",
  "key18": "53p5kujWzJgrQjMRRhKKTYJFKjLiNDM8s8BSHJRY7jRktn6ABUfCHeP13WY7KV3nrguYRWdW7VTfeoSZwruHRt9N",
  "key19": "5bTA9EuCKK4sVoa4tHEmV3fZk2rRQ6nNxxyw8QNS3UwTSw6bNmwqyZd61VNr4cQG9Ay6GcHpzvJQAfNHKm9x5JqE",
  "key20": "9GfxTopUtCRk8mqwQKGxhd6d8N1tbaaFvTZPfEK4VggtD72UvN75pyVVEkjdNKgec33HzGA9uhuuc57VzRqhiCs",
  "key21": "Gwby6L4eJ9hA1xkqXAJ4NSJLqEGhtHXUHcfcqdFtn4uKt6uZ5FeE1rjU3AxyrR3gvs6JACvV9EiigJrmQehVDrj",
  "key22": "4A4n3Wu2fw2FP8JKdY5hggWE6iCpuo1g1VUHXaABZx9Wxw36UFWi3fZtLTKRXZSWgW4oumH7MX6syTdwXtwUXNwz",
  "key23": "4abeTbdxdPH2wpcaAS5XLQDAH27KxLqQkSUaDLZWirog2UwfA7WJBYKpQuGDh2jGxPWNC5DmQysRz5J5iPvZwkDZ",
  "key24": "5abojMkJuG3r1b9AszysnaqToiyJ8h8nViBHuBtoisaXsjr2vuZ9GiiuY8xK52essLA7KMYvVUWe2AJTcfvpe2Xy",
  "key25": "5PZfSrnMKzCU3yqg4qRTeTuQBpR22dFiuiy2HdRzoKs1UDF2AKYsSzcFxv2GKtgkotMpXejSsUgFx47NnEAkYgJa",
  "key26": "4tyBJiypdDKyWoV1nqeBYPjddR57tXu4LFhPTdtLJoyf8zL5NUZeWVWvmgDy2r3GHvRUJz9w9QGzZuQEQKhjKAJF",
  "key27": "c8u3dof92WkTjwhzLdafLvfZU6B2EzHZYfoC6ACKN3UcrK6whTaFX8LJhGZDb7wHAANL5H6BjwjPgnLJrQr4jgc",
  "key28": "4qbP89r5Ncq4Yzik77ffvXS1j7AM1MGKRMupUXrMkoHLHr9R3fQEhkNhA8dRtfwNwypH49pGr2Fq1BLcgfvjTjby",
  "key29": "3bDboDTaRUCT6JuN3rUg9BJnzKV94KVaHwJfKtHmB8awtN4Q4ErzWHggP29vKq9soThSaUP7vcceauVP2rjNsLSK",
  "key30": "pB63ybiMABZjaeaYX96wcxUCj3btHQqTkivmmdbnRZpSLWY7LDkoEsVd5zbxt4FGfQcLizE6jYfrw3koQh7o4kr",
  "key31": "4QNL6S6GyWh12Gq35z9EDkAEhpJS1CMLoYf1dftGUKYRN4n8scpK1D1xd8SSVQHrwVBgEteD8hkfptgxHNa9Hb1d",
  "key32": "urfn1db1gQnFGqicz9MTW2jcLDCN4xUYc9PFWzfRv7MZL9Xuz7rdpWc6m4dcgpzjZgTzVF74DN6mzYmeBKabCRy",
  "key33": "4J7FdCamXk6fzBe64BwtkKT8FV2PcLi7EmNQR6f3Rh7dp1cKCC8dkXLEmsJN3qquNUxFevhP6AERUHf2YaXB4fag",
  "key34": "CGzaifUfPfACSFawzhdjQ4zxMH48YMD5wfne2DWa3jEyQZk2nsCW12weiULztLKPVXxhzcTNHjRV23JbRFzfp9u",
  "key35": "66qn7cFWgJaPCsadj34qu9jD37h4jKzho5woJSKuniNj459L6FtY7cvP3ceTY6CR1wBPHy3zUDjfYEb1zN9GgVFv",
  "key36": "4HfMtZKjT1og8gK7ZaYHLhubjukAnTTdNhFzD7TngYxBcCZ17VZWvZzdycWhrzJsjrNc9A88ddMqnm6UhV2e6Xy",
  "key37": "eVXm4uvNCeiMPo76JmEZJNCGQZbZdpxeU7omHpRRBvrWsX4uWMtc1MrAxsAR6p2T8QbQRRUoJ4uNJXYHXtwU3pe",
  "key38": "5qvpydozUxEkyzbJqRSPBcvb7JYiyYRDoXgvxMFKdrJqbGPRYN7MfN6QRzQMPcq4Y5tiXft7ms2yicSiHKavJoLU",
  "key39": "2fwY4cSwBUppYyYYUTtbE4Z9G8zw5tYTaz99aTBLp5PqrPNuAWsmh52kfbDoms4kMr59eDwNvepZYgehCd1b2VMB"
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
