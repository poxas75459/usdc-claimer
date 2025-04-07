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
    "wfynVTWCZbCrnNveDHrwhcZmJCxrRUnnHqhEJGfCodQPXF6Syf6R5K7tPceU22VwBromgZJjoYE8bUYT8DDAodh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qsREQ6vLM8VP7JXmfZTFqS99qtz5VZhkXuUiYUyvYNXyhZECYixE9ApZjQApStykhfPBgjQazEJzjSMrY9fgNyi",
  "key1": "5WDeWfWyNQHr79hjZfsnZJzsCs5je7nH9iPJyJui1pZV3cmM7u1bHs3ugK3Meb6XdR4NCqkPRA9SJkAEBspgtouQ",
  "key2": "5qngZXxzsTjdQb1bCDNpBjPHuo3AcF3JATcu8JQsZT6AG8acwFn2gJ7PpD8qhRjX9zwmYSWnhex94gXfXiq5oPHv",
  "key3": "4E3278uH5w2vLVYnpmg3B1Qo9jSCXPDhrtGu8BovTETEHoASBZRetFopH6FSsLeQGN77zjtWiDiSqSvMMoovwxxB",
  "key4": "4Xi9K957kUBXCMxEGS36TwtDAMVtvPWmvvW8cqFyqprmc9bygfHEfEN2SibZL7GnGFgcNHhYsu7BXRPFgkFivnYA",
  "key5": "4VmJ7k4GTsBUwT4yPizScYiEkHsL1toBPJ4ozE9vEsj1P7uUd3Dx1LZD2FZw2HsMXLZ562kNLScynj5XtsifQ8Vh",
  "key6": "5WydBYCNhuNcXdaPmBT1jqanmgGJKUUFm8U295FbsvrGwsSnnC5A3VRa9kpkZ5t8ZXj47MVf7JUjMbv3ZUBcp5bz",
  "key7": "5eqwP7zuW3jP3dUgrShMEERZ861fXh1WgywsputmFWVk5Z4w7DXSKNNmaGZARG6fZ1nh8CJPBjNtGosBzCv16j81",
  "key8": "3JxDkDNs4FkgWaoJECCo4zD9mtriPq3CWk4ygZMohJgKaSE3aPQZ33pifxsJTcsHMxQ1sgy3utdCNqpZjx7iYgPE",
  "key9": "2wwMM717Nr6aYG4Sgq7LrfwRmCUte2T1bdZNt8bMwENAQXiHu298fjZHiMQdnez6tmeaMvC5Jn3hW6eZYvygYS7k",
  "key10": "2JiuqpMWYH3kpnuXHrvmFTSe4HV1fJqj6L9UsbZVyb8QgedhhT5ecCLLvU7zRMDqvyCK8GfT9rTWd2NuN4Pe1y1t",
  "key11": "63bDnhMn1U9PxJntMdDEWiFugu1o3pJuagsbyjLiNBy6fLCBk728yUJTpA1MKuLGNDVQQcyH8EYcXdx6sLzbu3iE",
  "key12": "4Yx7ztQLmqNCc8FpyWZZ6aupupiyDkX9nW6PwmNVd6jmbWCQ5LSnfyGSjXZFA7QuHcKkDqtsdKJqX58Cp2u3KGKP",
  "key13": "3sC4wapT9KFtkKPETKAQYCdUS32xxgp7m2Jduy65t9mFhUAmi3EwPYBxEmdCM3t2iSJPxpw17x9MBF9M85k8sMn",
  "key14": "3nANSN2gb6qXWNu3ew8DvmBdmdeFkpkbMbDryPuh5KJ5UGbSdkuGLXfxiM3gapp5gDeoUFu1gMppC2NFmWWFRwpp",
  "key15": "4N4NJDQv9iioVbZHsWisTsb8HbUNATjECRGQDb3k2bNroxZz2L3Tim6ku2gYHGvLdTwfcg3wwmRCpKJoTAeqLBR8",
  "key16": "3DdmrdYYCPnscTUtfLaNY3Wu3owXXrqYeMGsHGhZhcK7PvoTxxPq8hypiyMQTjxHDsswFDABGcfCyb6G5tT9HdwX",
  "key17": "4L4bs9eXV1KPjVsVTmHeW3greyopDheYW6ePpwjiZbBvDzxLPqG32qbGkRM9iKLZ7f3Nvmjez35r6MucdFu53Nxo",
  "key18": "48fH1UVdzzxrrM8oWyH32FmQPEsmeejfuF68pyVfB9L1f3t41yoqoemd9NZW171WeZ2VQNCmNj9aQngF9A7vxp3P",
  "key19": "2hwbkvyUF2xPgMVfEz9kopGQLd8cY4f7655AJfSABChPm6Byu2TvaDfpMrho9aS6tFPzAKt4RzcHfLEQPu6FSXZA",
  "key20": "3gJHzdXbbqzFZZCb2ELgg7LoekD5noLCrAE3C1TiHoGLZ4pFEmV1LWoSxCGLAUUucnqnvQpXMQY1rLXjzJAzd6k7",
  "key21": "3m2vuCt47EzVja71AVY1AtoVmWk9NcDmqk8NyuXJJaH3WPoi1wT66u4MZEHAF3eusfq4vZuv9u2gqDPa95JCfgsB",
  "key22": "3MAsocDft8UCwky6KUgBhHkmk9XkvqWehboKMerHU3Xdx4FD9MDH6Js91ddzJ5EqyL6iqbaXhzHZSBrHjUURDyZg",
  "key23": "wADRaTJG8bB7miztnpC1YeRsz4JTbBwAKbpDtjdJdfFGBZsNmmk1tGVX4keS3Jan5xkJpq7Y2KkZ7mfs8EDGfM7",
  "key24": "27fd5BFKUkkqRaY7Tv7GWrmDJYZpgijFLpRP1Ar5WSTy5C341soGCm4wMYXiTJUereUsL2yXnJUSePTKovHsyHmg",
  "key25": "JGZSVUjPV4WcZFjeDzw5kFHZ5rUyWYfz5G2hv3QqT81YdVnbpgySyisx6p3vdLi1wTbd6uzoyXdD45fAcsrxEFt",
  "key26": "5cA3oivVYQUtWA3rYcqGCZqD9MfFhSBE9GZQCd6yRaf6UVmXirX6ZAvvqcdq9ByiAWxF9Urm9uDmBnyGRKxiWuRg",
  "key27": "3bdQXWHgdYo4HcaKEr6JRmLjPf4fyNPyYNxvLzN6HjsgtYjWN8wKnwLzKKYEqMMVQYa8Tb8jRJ84Fng31csYVdHa",
  "key28": "4idpXds5KUcm5bYVxbSRVtpdtigb2dQU97KGrtJoXamWZCD423fFzL3Z2q4gzEF6q6QkYJwMaCPJCsp4MuSAF7uH",
  "key29": "31hSBowTHX1b4YtEz13rh635AwGbMv51sst5GMuLUxbb5UG5RTDZuhe7tpb61gBNmN8LNV3NF3zZnrpigtuMc1cH",
  "key30": "2r3uptk8a5CvN5U4BKSKcJgqcHrnTj5vcwahZNw6GPKJBT15PRBRrjSE97zvCY7dSaDGQ8URB6KYM2NDSQuizwjx",
  "key31": "3RFBFUrepaN6RhdTeNLtZRff2nUmpmvXUWAhrrZ2GBW6Da6AAPzy1oxNZHftQKnpP1e7L3AvtckPbtBzX76mqxX",
  "key32": "2HvYG5nYcENA1cWVKw3vT1PAtrjrcSnupYfjcfRwJGfa9W3J7jnSwVkMH7ReVeZGf4Lvp9y46brbyjgXkRVPLK3J",
  "key33": "549etjFTK2SU3MBxTgzhvPYThDUbcmUEzT5GarcgRJYZRzkjxnm9jsaYpJ6xZVhQzgTCefkovR723pejLdUXN5WT",
  "key34": "5r8A5E9RqxrPf2sPLp1zwUiXtVsfTPfRSMGQE5nUfwpoUrh1SGjyahwuCsdTr5joxHwhBob9U3dFvFQVvUemFpd4",
  "key35": "3XeZYoCTfZj9A7zfLcbF9rmYB1Eo7LkLvjFJMjgRVoMsM87BzNTyea54VPgenUT64TdHS1Ladoj4vZB4QnYVk45A",
  "key36": "39WRQ9b87Rbxo3hj41NRnWbMHY2WUZE3hik7JdXVZZRii5Yq2zFGf57huMdUL34F54kNPga9yBnGXEZ8byxdD3qm",
  "key37": "jsp4LVLzVzV1JmAq1BnNRd8iCgAG1vYuFUxFKbQbpTscUjSoKwJ1pxVbVYxrAEgK3cJ2E3wLTeCG4FRn57vs875",
  "key38": "uv5iMpjyj3Tp6vjySqxcZ5aUNAQX89nab5Uv5FvrbAphUhsiLM8vLs1ijaZEC9Lnfwsntnpn9o3wmia9rvTv9kN",
  "key39": "2xQy3DiFNEPSrtLmC7KRQ2MTM5KnFgGY54U8sF5785kMn5j9RAkmd8ch7JHbbMT4UtHZpxHwz522mTF5yoYMEiXm"
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
