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
    "5xMtN2vb7qynUbsHy2N8rm83TwMehkhuhKXNBVaBTmZr9BJzxBgAHdN3CEXddeFJY8Wqs9fhHrcnUXiLfXsHGftR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LVxSg5iiqMhgNr1GHFHaKnxgk9Fgu8JVnFmpXjQV4Ns6mCgZvggw9d17qFCQev1ecze4kUFwewsrgG8vgJxtRHc",
  "key1": "5LFZFLVp94fFnETKWygY5qSd44GBsk4V1MCSyFGVR5Jdu83gGpEZcJtmH4FfsaifCHUVc4CEcfGYWohXk2CF8ecf",
  "key2": "P982sShnngAhUVUiR8ZzPR8RcQRYQXBYq8pm7eVsdYMBopuqP83wQrkvjHWFDdbtBrrBRvR4N59QpDEnMySe3XH",
  "key3": "3Gu4wBwpEF2DGLZpbrJApBvW6fD5YUi6eW8bcxPzJWENkKmFrzPp2aPxW7VsDqyxd3PpoyBEdDuMDFNTsGUpMjfP",
  "key4": "2bt1RCAjhvixG6yQbDPghwvYR737CNU7Cnu5wSQ9UyGkZqNVHA8R4T8fwamK4foL3yR4VcpkAPB4hA7y9m1aXsF9",
  "key5": "ZSCNTkqaPvYZWFGBB2QCVQ4iLSFSt8GWPHUvDgcPvpLAr6acg6QmTYMZnfY8jq2vSKdBSk1rEmHt9PKzdB4WnqH",
  "key6": "2yPE3Ao4d4E1v32zt4eY4sqtE9jV4pn3UfDkUB5uApMrxHbozK55pXDDffJ7vGaaegGtJmzDES3i9EQyUEaBmk2p",
  "key7": "48Tcp5Qwt4gi6gBSve69wwM1mN9inmG3ca5ikTAXbbpcLMjhkwnzKyECMLJiMUF1Vanapfsd4fGxwRuKrNyRNfSh",
  "key8": "57pHNVHmsx5gqEnbuEeoNmVQoEHD6Pz4B3EjmndK8ptYbMV58HaRMabke9YkagS4TBjE8AZ9FrRPRFSCdNCEqeb7",
  "key9": "YtuAtd1W3MMbK23c96RjwxoWwdMMxVNhuxry5E4sfLK5ahBkeyTcWCHFvnaQEATgeNfALpvqMa98wsS7RABU4Kg",
  "key10": "2x5Ub1rXDX7TC44S6LdwZgkMnEmZRMh7A5B2CxTDLWuRjr6U5BZUJ7QcDFF4rHJwoRVoekxLnyeMc46nCEvb1nFv",
  "key11": "4LcHqG3NwXKf5RZsN8hrz3Ahp85DNeHGV5SmNYY9APJ7VFcqH9P36h3Dv6s53qbcUZDYkQFJiKHAsKKdVWCV7o7g",
  "key12": "2EN9VCy8SdmQ5FwbEXhk45mjj7MCvVsZfFUwvWttQ6tsmtG3jpKMaMURtNG1jBuq1z3xQfFhvcZW2CGWdzrFzKic",
  "key13": "RZ44eUPFvC16Sx4pFx6Fe5cF9t4vBcZanLPAB8fGhZUgjktntjX78W68bWnwbhZ4Xa6P7M2qbkrtr7UVUJGPsRf",
  "key14": "cKjHjdwiz5BNG2qHiuQUxKDhc3rW39y5VyQtkjvNaqeLtpJKfCN6br8CRN1atp677Qa5EHn2EKoTv9fLmBNMzvm",
  "key15": "4DPmNV9BsBGCT8qGTZABg52PCTivjyFaWWtrTKad7pZq6LpZpUcRdPd6Jx8zUdE2eZw8vNGJ1MEvFZj54vkoxbhC",
  "key16": "3NQohwYimr3jBTMBQ5AAscbmzwVQ7v873uZPfK5NYrVRBP5tjt4ghvCaHU2AWW4umFKuZ1zWePyjWxc1hLTHSoaY",
  "key17": "5ssHav1LD89GSmQ31oFGnA3zH7EUvE62ZDEsp9o6r6J7NrFyh8eKeghB2jQ4PKJR1ZkkrnHM2kcZJogvEPGkLSAY",
  "key18": "28ZVyhJk41FB5MwydYyhDTgpp8J6TGJ6yhxhREjvpm5HUhXGMtszTLhVx9ksBDg2wwjdhMkDUYjvBMAzJUkqEVLg",
  "key19": "4CZJoxzmrk6EC5Qm5uQBpAMoacjRB64QERfAohAnkQPUkoX8ipc8CN9rJA4j6K8qgE8ayBGSyq54StULvdKpG1Vn",
  "key20": "R4GQWSp9bNEHx6Ev9JK1eM11xoECfhELBmHxo5h5rtypKUzeqwroe2LJsdeKANLvaHxgJatWaUbK4DoW5XUiXih",
  "key21": "2w4ajsihpc41FmWGHqm8oAQvDFcrwJQVBbc2ovu8iHwNjA1KA2RjnTCgYRxeSQjh1TMsz9duK7zinCxoU1DtJAZE",
  "key22": "2XtNoFYcKNk4Gk1YiG4Zppngs6jnBZgRTprDmpfKJE9WRdmvJq8MTiS8KXKAZFaopQgLnndHehEtzCDtzGRQV7bd",
  "key23": "5g7fXnrQwumBbiczbrqkWDeW9GnUhbMRU8pfKjJUnZu2h1qqZHkhUcjGyeLq4Dmc4VNWLBLKEPborNh9bWwAbcUf",
  "key24": "Dc18ykvT8dyvHcPeKfpKppomLDRdV9XG8GRMg4zoWMqJ3FwkrHxMtCHCzJQDLsNus9o8MSHkxU6XQhMNcf3sbpN",
  "key25": "5v224C2sGaWspJXcF3dDVxNLJaJx7dXTSq6HCcU4HfVJAwEU2UssR9TZLCT7akb6UmFwMb4zDNfUghXQJemPsCmX",
  "key26": "2Ph3BFQb7vuPQ1eTg63pRo29c8sXvLVspbWPfXFmViPkXZ2w1Ta6ohtgnvm1t8GNaFSv1CtLhTgyT92EPSmZ6WfF",
  "key27": "317NNbSCKMktTxwiXNastHAFMVcdB4sb1NmTkBCcemf3wLYSuV33zXygjjU6YHri72nDRfwK31zJTh4mGb8UKnhf",
  "key28": "46fsknM32gfNvwpdFPHWRjreoiQAjPQb8pSD5EnpWhYHDZbhKznP4BtTW5HtfFhrttnnGzb19L3fjSUzdshfPLtf",
  "key29": "5H78FSqA2SkxMmARh7fW27dXwyL4g7EUaYvdXCxarQ1diaNr86Tvcx8p2vHHzyqiGTMZ1U8HbkaVEfUANhy8o8Sw",
  "key30": "3uFoALzd1aZmkCWY5Sz3JXqGEwzGcpWiuFDh6fveshAEgLYHqaTGp5xVNvScKmpVAcn4fANoW54rNp4uJvvKhMVT",
  "key31": "4WKX48YQ7iHLFmAYqqEKKDcbjLerUQPTmkyrDtCYAHJE8iFzn67CttMdS8e6NiuNaX7EMbr1HBM7nDNTr7yPKapW",
  "key32": "3u5wXJxsH1bXC3MWq3b1RctPMjrzKh3K5ezbPDw7BAbuz1noTGAPuhn1vk8kGJoxU8Hx7PbMuDr8CN85zvqBRSsv",
  "key33": "38it9RkCEiE5oSLE736BLC6gHmCD7YqfeVTWHftyH3tUF4ja2BqVnLjMKHAY5ywYadXJhU7RacJmu21BbsAhNai9",
  "key34": "3iayFeAEB5LRj1ePer9ibUjp5GgiMZoqPTDi887VWm4kbni8wt1Mp5z8SdwZpACj2V5vyg6eKdGp6upTDwKdVkwf",
  "key35": "5WNRpuv8TZ9gyaX6DHkNi6oDjnJQBw5oep5HGS9gMRarnCQcUkJByJVARf4sTV5TnC4BbtQtLikBMDJH54uCPvnJ",
  "key36": "2f4DgkrVJqNteiFe1JqSQPc2ZtnNcGWbsjFmryDhJbWFSF9fcZ7BhZKnRHafkaX8Z5JDLi4u2w12AfNVj4jeVmbA",
  "key37": "3YANvdpVKPYbfgL49otMzH4X6xYEzCxThY1QUx67J5ZFQ3gEXMVTDdHwb3hSyztN8oZYhbzrshjWQZ4UXRAz9FqC",
  "key38": "3nAfVhg9dqksMKjMVzV53vNvvDptA3nR4FwNPMmbUEu8N7Tt3vwRWruDc5VyVdsktKPYQQ5v22iv97xW32t3Po3S",
  "key39": "vPeBReYTF8Vbqnqn9RG3J9JxSPC8USWSGFRq74R1EMqygiYteES7bPTjm58ZfbrdSFxHrSeDRVXMAQb6igaT17S",
  "key40": "4qFimx96iMFbrNW4BzLKpViFKZ8wetXMDGzAR8xiiHsmofy9b4cM2XkCK6CJdFZJ5EgBR43ALsQENe8B8xUcJ2tq",
  "key41": "f3YcD2wMZXWAwotPYPKD3gDTWPRb8nyj2uSk5fRW5Sx9w4JCGZADh3mZ4TqF4ucRNrzKG7Xv8rbEdpU4yiDRy57",
  "key42": "4HoDMQ4gEofpLYsTMUFaaHu7c8js2isTpq15siS9fg4qboXmY5BnTnGhvE71nZfsETxBoMb4XQngoJUDm3dK6Du9",
  "key43": "3An9PHQwEvRKjYykV4TBtUiHy2Jcx8HknM735LFtoFscoc3NhrzrAmptq1MBUZQ5fYbyRB9cqHN3cW4w7nnNDecF",
  "key44": "4BYkA5vHXcX8nHEudqDsXhtJQV4ts84fBfjdc9e1xY4YmtrwKyuEkeE3XiGmV6pa5P1vdjPqGGnqs9BwkCZJcwrz",
  "key45": "5wxm7aWZr35L4txiP29mSYSvUUADDNe3urRvgtNJFB5kNGZGvkUt1xQwYLqwGn3A1ADUksQ6C9YYZcBzKd71B9m4",
  "key46": "3xRPnRDkDigQLXkhyZAYtmZyNo5JqdHmG9G4gxUQ5UB9DrzXnSDRj7upkHe1WEXNjAvYugRsojoqJp5EXpD82NrH",
  "key47": "4Bfd4LWVfbLwfrfswYpRJqSzA6r9LJHUDF3tidS3a7uqmi7waV6tm5EDKp8Fh74qRYA7TSQ5m181gPvu2oSGMSxx"
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
