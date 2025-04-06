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
    "3bzwcJY5a7JBtCfR8Ja9eyLJ9GRu5wg5srFuSGfkaZH7VxKUbhv34Gwk2VYV6KnweUJ9pFvkPBw7GYfotJ8XZUHY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dwYc36iJd7D1jaoCeCtq5sGPqN3XnTXNDpTWtmwvb4T2QvTLLhDVZee4pMySQZH5x65gLpb5bApCm6PwEhV7hgo",
  "key1": "5vuk4oArxfJXXEMQKaNBBXTDz6KMvRYYPEoMagdfmbtn8c5D5AVkJMCxZMuLwts7DBDFP57FRey84fYXdCZTfRGm",
  "key2": "zBdrmMBXdegBBTEjMKkhDKm9evMiAHPBi6Q1iaYMPsuBK738N1ZfYaBi9gha5TJ3EmHug7Rw4nwtSz7S8DWbeC4",
  "key3": "4gC1SvTKd4DxPjMoPKagtDjK2195jVTJ1YqypUyNJeEwDMFtQYA37qGZQEVRL2htWhCccYbX48yruoWNvaJaeAJn",
  "key4": "3Tnq8dnPsUkPXoErUjf7RVkPzSxuuTRJn3eyEN175tzDHyXYDSrdD22XWXv3dMCHAYy3KBexV9ZQiTkevCDWxby7",
  "key5": "aYY9CgeJtqFo4phxx8yXBXMzDMYJ6t8QDFZ2eqAyQS6RgbZHq4FRZSN3XF4Y9hR2Dibnh8ERgDH6S9RqZC5cb6x",
  "key6": "4fsTJxCD7cDBgdMyfYEhtZY8seuokv2i3hFmrGa1dnJmvxQEC81yWZ8WUYjXzuBcRuc6y1poeezZTvcQYoUfez1X",
  "key7": "PeDfP1HUiGD5ZTeViozAtKDHUdLKj6HaZEPHkc7zf3XZmuUtehLfgpiZpHpaLjr63a62P9HTcDi4TfStapKRBrM",
  "key8": "T2u22CyFiJmAcgsbfAtWYc49MSvNzLHuAmb27QtL3oudiiJaZRC5WjmmU91weoYAhMFtpAq1NWgMUDVosPxRPMp",
  "key9": "3n92rrgZAxP9RTLvSFr7WwpNMj4xvb6yJzPw6p9HNJ14ej6QFns5ST1a7teiNRXKnnLhUnnv5nVcYtx6sSzvoBEJ",
  "key10": "2RdtTkSksCsBqSnvaC736zUucrPWQGzpVGaCzb3vC2F8nWZKeZN6YSBte5Z7hBp212FPgCZnfw24RBQ8h3TNf9cB",
  "key11": "2zUYsN3ScxQNq7JhDw6xn4jHpFfQziwBjt2ukHysMVXF6EWMJYMGL1a7xqgjowyzQ5c1QAvPE8i37czkkYu1jFQi",
  "key12": "45LpPLJPBVvEPCNiqebkGzcLTWbmWT6n6AP7zyKabtTz75vqtd7GZqp7Kxkcyrk3mMCEgB7XUmvV4jGzBwwCaLdg",
  "key13": "xttYp8CCbHxkbih6Pxit54GkiRkAmiJ6DnHmJFi4HKZwDHLv552fq5Lf8Ht1YMQ6JZPyL1tGiq8KeVNoYAmeSNz",
  "key14": "3V6J3jzVP1FCpJdiCYSUtg7qcd4wdBfDVtPuAZy1NYQunrJUNZGDQSrRS9QLrnkA5PMSFrDaYmtLf1GHqtp7EpjD",
  "key15": "23nsspM11JNVmH6PUYYe5s3myVwR4i4LMFcp5GQTqzBbp552ftLQHBYhkKHbDcywEW5Pv1eemPBw3rpBu6HVo41Y",
  "key16": "3yKshhSQ1fXw82snMhfPW69uVhD6jhEg35QMDitksHEKob375r5xtPQX35u4ArG9E1j6rxwgborCEgFBNH6UWkQh",
  "key17": "2QtgqNodtfHYvWPTJtTdDY5i4uX6uADn15hNy46wK6Xd5Y8vKF63ErH1d7apwkVFBFuVmgLV9BT8mC3X9Xbp2oPX",
  "key18": "WqTD8LNUNiHH4TcbJ6jnhMxKGiiV6aaryPtvMTYCeBP5sS62fGRupKhHJswTpWSoQKsCsvY3n4RRWLUqjmNYdEr",
  "key19": "3mr4jUGGDJrEB6pFfhwChREcuQ3PM8eS2qRY2AbdrRBvphk18BXzQpTGjDgiVCg8gyHu8c5Lb1mRf8YF9PDH8zKq",
  "key20": "33GkoVGnqmJ7L8K6eEUyUsx7PinsUjtLcs9i3rERs69BRhqRPLtFYWNiGt4dN1oJCftTTgVKdTqcfExuni89vJnH",
  "key21": "67iRHNjDUhutC6r6EEDxF1BAywZSwt8F2gMpkWS2xmryAApB7Hge4YFBw86ELKCgrk9TFFRz8A9aTeQcjiEjQHjn",
  "key22": "5c5s8r3gPpww9QTzRL1Qc1SYP9x4i1MD4PissYCHisUTFaDkpeuH3AePZB78KNpWub1M4zRGzYKoc44EgmC1kx7M",
  "key23": "3gqBo4sr5VDwv3zkZZ574ekHtoYmbicEkmeaDzbkchzZENzdxcQg2PSg1FmbJAhDhPJG1asbKZkNBaVB7UCAHEk4",
  "key24": "3dJeHtvesdjJ7zoeksz5vDK3tBoXgri3JfaKPV3SN1A8KhCWxJdPGv6Hd1faaznmXBPXswc1uLqShFVkLbX86F8s",
  "key25": "5HQCUMaKW65gZp7TwaKuyvXYW66vNEUneJ36hawgNZyEXCe3zPjos1WY8HYBkDet6EMEyFs9ex13pqS7Gm5Ud7no",
  "key26": "4XitbHZ2qTX48pUrGrEsvq3y22xLy44CiaVpy6Aq482yi4SDYX7RxjZt3uoZSLDFeDSPVLSGYGyt87iUaah1skmx",
  "key27": "3T5G7zttL9ynd6cXvHeBBRiFHaSLn3koeKNbWNDQ7kKPURKZbeLG42ZDgzzQGyj6CBKodehwYd6MvSikz6tVGjwv",
  "key28": "2uNZNRP1RAhZZ2QoDBfsYhDhtp2rcDm5F3AzSYLJ6TFphmmTvU95PqCHoPGEMCRQrsN2jAkaXzmhjui3fvTfsEmE",
  "key29": "4ptWUk5yBbw22dsfbXUE6PCeLQxd6MJTo3mdnjhnsx32kzUMxgUeE3Svq4pa5b415J1tkVL5QJLcUQUCf1rGYHNZ",
  "key30": "LSJx478o4RmVV5m7FhEBVpWBsLZQELmZZPaRx7Qz3BhdafkFDjkqg6GntCZXPkwMvACXFTCC4FvGkd67Jc1Km1F",
  "key31": "248CqupyaNVAqNNYAoPt5GtwMszdPdp7V3eVbn3pQ1z8dZD5DUv13jrDRZFyFkuz4ixfCwrr3UmVv3EgMcGsfPR4",
  "key32": "3CVhvTtyDbAfN1tzzdvtKuN7QdKqQUhNSg6D4foEPiQCtVmyqBjAfupCjCseZrRVMHiRkwQCLiNwjb1dEo9oJDvE",
  "key33": "5qDJVPmhvqD6FZFwqA6dapwX5FK5UnvcvWv5JsAGMsnnuyukLb3ZxaMN4HvZZvuAGpfzECr55disaQc1eRhZsU6Q",
  "key34": "5JThXcr8BA8R8JsrcQbGA1HvnrdfeLSNwhuUucyKxDcwRWtPGCJHCuTXfuHV9tWoUzeL9XyJTmnFQzR9j7NX4rJT",
  "key35": "uxGVyA5QVZ41ZCxtXf12mcxEXPgSoYq9GUe2MF61vXdwbdqndWqpa11CPrVdr5pFgCjFUAy2U4u6gonxmG3R5df",
  "key36": "2ipcHHDA8FNXmffMxaLSfvDyuaZZbS4ZMEi9oxu3fDAAgnPuPKGkM7Ha8CBHBeBfV7bdXgiF1hh1QeqKSSCuSeGG",
  "key37": "3oTpHZ8njPivogERgdCzX86PjEXEssPLeWouFaYbeAsoehQtJmGZZNTNYznCHhNMqsDZi6ZU7SiVgXaqEisLKkzv",
  "key38": "4jvyKbTyLkttoUKZWQ7emn8A4KincmD7KdSHv5kqQWgYsc7QaN2NpuKtiopzkWWAkKuyapfnw9X4CnTCxiFwpxzj",
  "key39": "3u6mcwGykJoJB35Cce2ivomCTMq5pcQUVTWmmoRmJT4P8A9SdtUYMe5sW4FaJ27cuPxCU5jzdeqEc5W8pcPrFPdZ",
  "key40": "ohuQCNfEP5yoaVzgmCD6TSekrByZ4oXEv6KyA2ptQrLWRmc58F2JBTi1SkffaxrHVLbAUg3ythpk2Lqo6bqhsuR",
  "key41": "4keWvybaficdBZRjLnHtsYxHJ73SfmJRT7HfzJr2vekoVWEF2G7bzHET3MQQww4fhKhGss5YaYfBKMZRnaKepDBS",
  "key42": "5PXeVTo2D2RcXxbHTDLPDvaJR3icT8qH1QHPoyR3vaAd62rfHwRLFVRCSmY7bf7C4sR3BE3gbXsDRJjT6SrKWdum",
  "key43": "jrSmQ42htd7pC97PhKH3x2rjhhhSZrvmdy8YwUp3jg3cdUzTvfvQERFdPyKkdAFEMaki7ZMP3A57ERThh5DUEd5",
  "key44": "3sdDXfafWH9XsBoygYWt6na18YvK6rEy9ugTxJ54bHdU2gMsdWWHm9uKteP5YTxSMu8ng6Zbtj7qXcFEaMHRQkMn",
  "key45": "GcPEfHeDaEr9mWhQrD7XZNn4cxUtU1FgidqYft2udEB66UaZc1J6MfoD2z7tur8iimCqeNFXxFse8wgbioCvZBi",
  "key46": "5b79ddV3KyfHSA837WjeN1Cp1uF4H6MVVypztgiPB9yzK9aohyauNR4tQ54w46EskQk3E2QDPEKkos6sA54PdwAR",
  "key47": "2n88sbgvwyerLiu6P9rLVJQbLsWZjxhNNGzUGYV3j9MBSb3M8h52hubeNxurU3husGP6vtTnQuX6WsP1P5W6sjgT",
  "key48": "RHxvxDGSgF2rwtWHUdfcChaeg9edm5FwcFk8ZazvToVVhCJsQ53RfoSmRRZYb4wZop236orJrgtyW6LkaisokFS"
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
