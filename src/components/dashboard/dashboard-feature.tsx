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
    "3d8veaczB4kncuQd8FhAv8HzRhP4gFxj9QMDsmU72xwwfdMDHkbHdKK9cKS4zokLmyBjD46RAD5dJJeC8GhzSFxA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c3sGCSRMMwAWdpxnU9Y1hqZrcrd7WjoK1BGyKwogKUP77ZK641gXGtVBHTXcjiPFJ7ye1PZRyUFjQZDoZDpezvK",
  "key1": "2xTG7BiYY6GFNngu15T6rDgrSGFwi5jFFXh6fGTceKhYhvhEqqSpjpSYX4jCerFMsGNw97UYTgvcBWZaFL2ggLgZ",
  "key2": "126wd73H9NbbCfh3D1NAN6BpJTazgqeZ6LVGppvfk8UievD6J6taRvp1FpZuw344A5mES3dkhF3V4QxYZohZTXkk",
  "key3": "5ioJM4BKZ3QMPGA3hGuc5bK9Z1dkE8MgtWHgK8GJfRBtueR37edFFczS46Y1MZWvhNheDukGDuyv9PstZbboZTMo",
  "key4": "2GXcYVcMECyGno18pABaPWj6jn88bWSBDhSTFUzcBxLoiqGHq6M7D95E49gMrtCuwjF4Zcn3viyAc7Wh71M88jHo",
  "key5": "2ipd3CpozkiwpJ2fMKR8P5mgJrrWUEBnS467vn4FBpfNVBcvboquBcMxxokTPUXWS5r1oJUko459nGB4W64Fb77R",
  "key6": "RQDJFDHi8kQd96CBvZESwMroAY3bsEcPqQzUnobXHXzp1UsgdhV2FnjmeJMfhdW89vWsLxSQqw66pUUZC37Y6pp",
  "key7": "2k7AQFSZRWJZADCaKjatHP5F6yGX3LstuuYCtnWdQ5o33eNrrwn2V15LAwXuqJz7SKEWvmXZTGk6sBaEkPjsRBzv",
  "key8": "4Z7Pyv5TvbvawtieVhDJuSfdxTh9jrKZ7LbMbUZmZhYv8vXM3yTEzx28qVLQ5h8BEj2n2d6pMa6g68BTfFw7kCxK",
  "key9": "5a54wfY1ip9KRNpZFRHFisMy41nSMzVHBzxkW3VzvSdAgHaK6KCDRj6gZtfYggi4WgKAqhtqiFUhDk5VzkX1Jyvf",
  "key10": "4hGt3CdZuLH8wBsXBADGYuoTYWARHNc7Ncu6LgRTRsDi5ukXUvUbx1SpxJisVtkaaU57pJXydzAJbHgj3H5s3HnE",
  "key11": "23TXfUFTPpj9qApo3e644V3CqCVQYvu1Lyxu1ugG9H4HmYngAniDp6uRfdCFMF4vrtjAk6A4Jv5Bynu7yapaonZp",
  "key12": "kdexKVFUYn8eb7NZ7gaEQDxxyqKKWDPdzf2cDsTNBrKXQ1jjgmtwvkWMuAFy3xb82d6uUDgrYA7HCPA3rxVB97i",
  "key13": "4RDRqQ7xTLgsuebJxmQ7GAAVD6wDpMf8vowGkPCh8D81aucLKVQwPnsUKJ42dnTHn62g6B8UeUNSsxhnJkgZraN7",
  "key14": "4goKDCX8SDq3F3QaaR4btV8ch4owq2f7eHyYivXDpKpMRMmh8q4zQkxvLkpqbCUt5koX4wNYa6J46M63nEvTDWwY",
  "key15": "3VwgcPpP2pTKLYmigexKtA4dFhnYxMHCMifDq4gBfbY8GFMeUPF8ePtZGHdR9ZVFS8kg8bMjKBSvqSUoceNzc3ax",
  "key16": "4jzR1hN22spZeuBR8uCwXCrDqct2CNurufe2Dh437o2bhMnqjGPWvXyWQy3smcJJfox3jkWZdKfs6muAP9JGKraU",
  "key17": "3QGuQUtUqeFUYjt8KdUD3mTKWiP8NL6zALfSfLRnGWaTep5eGL49f95jqw6qCEmChKnZySCZdBi4itDRUT79KhfC",
  "key18": "4zBomTidde6wbxEKAcj1tdRnuKbqFryNKz6E2XzdQtFPh5FGjCZ87dCQGKkc2m9subW2Stjj2CaASDK2MQfqPTrN",
  "key19": "SpGEcPSESdkWcLHRumDiFujeqvtC5KE3rHo9KoU71jkDH3UALfM41tmTx325nyTMTNCtLJYkdcXat5v5pPUTSxq",
  "key20": "jdYRGEPEtue5s1tmCR7FmwD5S8xHhE1zSjXrBwXHuufoSc8sBK4Kg3ysLm4s812Chwn8o9HEikAThmuwHM8y14M",
  "key21": "3iSHRcec37mZ3UUkDQ5Vpypz9tk3kXiaHpFVBoottwTqxxQR7okcm44Cjjh5C9uLNUfGYViCkAdj6WM1PXrD8R5F",
  "key22": "34ebmoktM478TV26MMg797FttfNbr5EZLrZhVaiFeBAEgQUh41CJBt9yR3TTMPU6NYHuUco35tq8y8DhenSZes4c",
  "key23": "5Me9sTbYyTNzcJCKo5VPTQJQH35xCPWztVzX4u7NC3bVAzXkqLFAD4XvZ6eHxTALJfCVz95ZPPjaRXoek9nFngNv",
  "key24": "9dsMYEqK1biAQf3zTexocxLBM9SzXgzEzqXh3GUKWEEmS51mDtEhqy2Ze4R89C39qczdccrJryefEaM8pWqc7HE",
  "key25": "Yhdt5rmwyhFiyNiXoZSAfVEckGedMVfUQRS4ucqQYaUWx1Bf1ABKMqvFGXYGriQurX9cpwmoa49xRvvrQ2azrDh",
  "key26": "51pW7aFDHEyvrfkrpiH1LSfoThSs4WBPfpJWd9VLmjdeQkgiqkkmYuVuf9CzuCxD97meSa9ZACZRGsJ3HWhBRtGb",
  "key27": "64aXkiEmXcDniJWACh3hT9p9bRjUSP5z5vvpcb6Ji7PcBcqwxk3TWDUxx5bArCSqTGSQwkH5pUaayv3wdSLMw4Bn",
  "key28": "4B6u4i5U7ZZK8a3XwpHCA6h8HtKJAUKtCiDf7EteS2rZ9giGZLaujwAWp5uH8zP2tMXPJEoMhuHrwGZp7jF1oBub",
  "key29": "2nDSfMoWbXTNXrJnLK7BbR4yeLCQjF3a9h17dfpVMmZYy6No2nY8xzDNi55jcGRhhk9jCJx6rspYgEGdtbMhy5GK",
  "key30": "4tFss6py4y3GcEML79ojPxXpFBpv1kQRmYZScau9Jn7g45tLGGdg1FDmzMyPorREy9cW2SwQug1B5gPLZrG2vYbv",
  "key31": "29kwjtTHZixUWegbJSqPtCZgMvV4jzjMDu3F43sTXSMrdJbJrW9yiUfVLek4K5fxQfP6z3tK3dynQkKJH2XcVvmN",
  "key32": "2XNZDvvdzsog7YbdZJzukVCXARrDf48ReFTd8Tpy9mf56f3CCR96PzCbe7dfXsZEGPX3X3CL9b6yLMpxBgnfVJLq",
  "key33": "K8NH3dyqrbvWgNJXrUB7ij7jsaSdnsjFNsN1sCTdi5j6nzCDqkEoovoRD3aXJ1qknbrY95YbHC5ic7GaN6LReFV",
  "key34": "2xzD5PW9iGGnTsUSD8i3BxbtDR9PdtDp2nsDbevzGyfxQ1eQhDBgR5xVHwDcGjE7Qr2WrY7Aj1RPpqoRG7oXprWr",
  "key35": "PYnDXAPEQYTQSPs6sptw4rjokPB56Y8Qv7L7H8hrDAKshw4kxUZCe9RPjCLzVij4KHqv6AJeHyPwMWnu28XrEE4",
  "key36": "4jyBDEBqvWCEciH1VCn1rKoxxW3p3qnMuGX95AFxQJSoxjunY4ufEr3URpciLNofprehv7LHsCL4k3uc7rBk1Pdo",
  "key37": "5mNjAAM1ALNMmZdvDEJxNCNNWVSVhRKrikaZykkoyjkVZ9xE8DwMy1K9VW7iWFZnNo1Ff5WYPQri1aqTGkPvhZ2n",
  "key38": "5PgsvNk7D2wmna96oDiA5fejvmYYFASHW4JQYBzkrfxzWBBVDhBij6Cdx93kQgktDqVUcFHUZPP4wZAFNcH6mpoV",
  "key39": "4efSZzaBFbSUdMhDTHExR1MnNWmGgnuRNGeQLQSvTBHbpPZhxmjGSwPYMBJjDcVRt5u85UGtquzwpYpN2scVYSVx",
  "key40": "3KqjCyb25gR9cZ2A71vhWBrHTFvyy1NygoP4qA8nFK5WYtLbYA6xB3S8E7XZkPRNkjqTQCNjAjuk1DiTEyPmtZB8",
  "key41": "2uLKRJtbC4hvj9iCtEEtTSmyYyKgrggVSzioZUu9gyz3RgpJGi2m4ovVC3EGXCLooh8ZjuENo44jajfVZ2nsyfjU",
  "key42": "5TZ79546BaE4isC5yjk4EQkoCpZs9XkWhWWcU1Zh3fHz18SzvGZj1WmE9L6kkdGS6wzz3oMpnxxA2Q76jzKsYPzU",
  "key43": "2TouV391NMAUQw45XE2Nuy2rUaAbx9GJmAP3aMmZpKQaDSzmKbusLzJDVHesBt8XKJWPnQAseKXizAHVfZzSiE2g",
  "key44": "5DxQ6ysxdCr3W18o7SuWA5MSAgkfYT7oQN3cdiCFLctibrxU4DF8s1sVHSEhC6dExLqDXFvaUDsbWRHd5PRPFXjG",
  "key45": "Pzyd7FuWsANBoQ1Pyafw6kCJTzdF13skMkEYkn2MFof4qhrrmwgWfR3RRGtqgZRBnUAxeTmKcQmygh8pWf81REx",
  "key46": "2wti7XVerq8iMP9fBjbvgTBoN3Qx3hy4L9edMLgHr2No1mWE3PHhnJB95e2qWFuUuAf6UPrGuhaihduvKjEw3qtG",
  "key47": "4UonRSCuyEsZMsRi3dMGG9k25N8G7qTZFgHk1iaBC5gf5EDsBk36DPDMuEhfcWDe4iJar9qajomKN5tXAxJgKwND",
  "key48": "48ZzTdk8KG9CswwpABgARYvYLGAoLcuaYuK42xEA6SWxfvS6wrjMn6XexUffmViVvgQtXMSYeDSbcapp4XtBLNkZ"
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
