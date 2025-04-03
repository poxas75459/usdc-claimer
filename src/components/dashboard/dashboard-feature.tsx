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
    "5vERUc5J4GxGR3kHT7UbECBVT63sVKrxf6PUskzwrHsQ1m3p2zcAVQRm12K4C74ofbEw5snMY9v192nydyMcodyL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A2DhUXxfhuSfmGhhh2CYyjMwbTMAhDpyQ6CKo2JBDdxyqJVz7ESdQW8Fn5jNggisqKezGjUbgRGwpdeE3mKseku",
  "key1": "fE2aXWzmyaBFSMZPjUaxNoyic36Xp4kMnySUHVq6vBSFeATLZKqZZAFc6zDqvsSrDP7LKxWJP3tSyaUDAoE3kfH",
  "key2": "5rQTEkRtvD7WmwMi5po9dSmuvapmCo3jWsCirFFwCeSjtYYVdgFjS6vFyEhEwQBdHx8cQB2bGKWGVveRvKu6xYfH",
  "key3": "5jnbk9U2Dkzo9KTbYWjQ7qEucM1PBQNAERm1E2wtDFS3Ry92rJ5YcWiKsRS1z5wjxYwdW7L4LbpTbqqNeuTwn8AL",
  "key4": "3Ns5R3De8Q288uPeL6wXqwxZ1r3wZS4MBqmx2F4DDCVL63sYAtaFBFrCqbMFvpbS9d4gg5hHyYi8bxSWP2ZkQtyA",
  "key5": "2MUaWSy2uDH27qESefcL221nQH829RLfZyaCQ3YXsExDHkET1dAdheEPPqdjsfEatPVRLL1QJ1aGQVXLsYnU7akg",
  "key6": "4MSvmkJcqDqXwvRi5nncJDLzkr4PVFUshRD86ZDqiRwGLqoFbuWmwnt2T6op49a3x5o6QEUFF5ENZtxQDrhexxE2",
  "key7": "4jSxhD6ApyoG9B8WdaDbpE8Kt7ec5qjQC5fXLxr5MUpBCzdBE3MYJpXJtX1AsgmQdHuHgWQQjj1mGXjrXh7SRuRx",
  "key8": "5T8UYoogvcueLjSnjc41C4i4VVJWZALt8KbfYHRJbUkGgJDjTLffDk2VS453L1Zm7MGxiNgBpKj9sZwPxdv1Jx1d",
  "key9": "4ikaKacZ6riAT2Yb1thN8tizieWUeyQc6x5pkHDT6ijiw4afdDDyrfaojqzYrr7NNvojbUHQAFHktEeaU9CcE9Bo",
  "key10": "qqedtMQotvRJuJ2aB4zo9RoBd25qYAWeGRXF57asHMQp3WoHFhUfqyqgCz4xkJ7efQchGQnWUghxnezdSGBwR4c",
  "key11": "nuD2kyunHsR79xSkaJALGQF1CqBVwXo84Fvns3Xn1NtkFtx9nTnH4vqaXC8uF8TWfaW739g15AsgDKjTp1Xdctq",
  "key12": "3mXnjmjpXJ5pp24qZEGuo5VLDFXM4Y88QJmtHzfms7aTVac9aYWf7DBeuk11LAJUHHp3aX3UPwfmVDYymBCd7H6k",
  "key13": "1SVn1F6FrB1XBpLjD2ANWboABscTdsgbcqYS6BYb9eQKmU9rXjPLDVdD1Uxwbppsf6Lg9f4Z4wWSsEUcg8KHQSL",
  "key14": "2pebykZo8yZcrM7xVDjUAFwY51wxe3vrrL5GczDyzYQMc14mg176XsLKfPV3c22Fm5ePSqG39cKG1m4vUUg8gMUu",
  "key15": "5ULgFkdAuCrnG1WprZomGpvqX8P6SEjsuX88VikT9p3xsxcvPRC7xk3BwBfk8mtni3v65rK64B9MRkWQKnGLecDu",
  "key16": "4iF6QTvXfiUbXkcUTUpkycmsoULbU6DqtwykwWUXEbvk8zwKPFAcZs9NftsogKNZn1nKwhvTHDAQYcU6byKwG5Vy",
  "key17": "5r6EQj9uiw8MnDbosRETuMigMCRj9LBoxwxhtDDyRfBWhiizMQiABAZdsFpHLTj1ySFbnzyjNdXdtjUEay4YNtXz",
  "key18": "5RoDKzy5xHkJrwGs5ZAXYy4pTntmW7N6pu4EMbPd5aYYq8QQxDgjgve3wpqAzJFBSVRQAvDLf4S78B3mHBaYRu4i",
  "key19": "4dva3MaQhXCLmmkP1MkxHKM6NKKqUj1jbuUWRwxMT2ptVHfTf1PdtWBTws8BbCQP7gGmH1py5Zq9MU65GZJnJTtf",
  "key20": "WcbYNn4bpMnZWkz775F7ocVNBBqPR38TSETu6uAdz6sKVLoLjhbyapaH6XXvWsmL2NFd3625e8bm1GJ6aLRPW1a",
  "key21": "4EGfRvdW4eGEEzufaaJ567DEkG1uieJHv58SZrXMTb57HafEEY8mQF5eny29Z7rbo8qUCBW1ADDqk72ZoRJhm65K",
  "key22": "24qrd8X5vSQzM4AbNbnkAsZkvpoAP712WAVGP5Y6CQp6St5fHLbMQ9C7iVHN9tEFEyx5CJEHvAJAJkhczyXEEziA",
  "key23": "65ZCcN8j7R1m3N2nnQCcXaArSvbYa5Gv23f8fKNYXcxBz7vvan8PAy8SFxZHbc3fsXb5dNwktdPbjB5K3QcjUtX3",
  "key24": "5ZJN26jcoKcU3zt1X79KxQqqFpbtXhuNFMgC1JDhd8uDk3eE7HYhqtJi5hnRxmbnxz7k2zNchGh5ZfazykJsqfmV",
  "key25": "4rDmrFm8T799jWy8DeXvrTCJfPKpkrFJGKh1Kcnu312y5ZSv5HHE2iFrS4tZLDJ72pNrdPha8gwjMvSAm7yaUWL9",
  "key26": "3SUYx62XTkRME5rWsLbgKHti4YRtDCsdYxche6evxpqQ99Vif16mZqhPXmjnyKqcujj7eqDBKsFR7fdB4KPJH6Ts",
  "key27": "5qW2PdGKzg6jobEP8C21SD129X9cAdTVP7nozetrGtjt16T2rLjc4yjzNKeiiSzCsRXGoKSeWF5ffbcso3GD3cNk",
  "key28": "5vnbtTPForxnuQwpNRb6VdgZ5QEa9VjrtS4xsmy3aiqFrarcSKuVQTQZT4ES4Awd8vJPFSbnNsqouoJJKJmFCR96",
  "key29": "5oTBuwibPGVzXaqie8y8z4KkcJ968bnJ3gVvTk531kawtyFyJjoQvCy7T5AP6AtfmYhPs5DU2WdgSffPRd6kmWif",
  "key30": "33Eb6dLW65XV4K1Fa3VQ1jjxUKmpAVbSyuXtgQ55JVu9mQiLDgJeuDdcHrR3TvL1fieACXvCN1iuRdEqZqPZcTkv",
  "key31": "2xGKm2jRn3SShjVvChLd5nsrbgXJmwjsrohdjHJSqjmtRKg48KxeExAiZm6hTvfhxL5qvexWqnXahaXyCNsQiuSU",
  "key32": "RhT7B8mfWgfZfzRt5eshVAaYk6y3tWGJ3wJrYmdxNCQ96Vq5AzfBqqfZJiwBKVQ16sNCraDHC7NFE3pnW8WZJyh",
  "key33": "zV9XPz6UQLM3Hoo9yqq6yDoPXs2UuNjZMM82XxKn5tjHPo53Cm7CeAKerEKa5sAwi4EVNXVUAU8113FRePzpaES",
  "key34": "2gMppkPUTTQ44CqMn4psDxnYYVh62sXoqnxWMrqdn54eJH63NWo3fAUMy9r48FYb1w4rN3GeatfAxGBRFvNG3WHo",
  "key35": "2gpXJHiQGJSRkXq8aHVBhr4dYRVj4R3Pet7Wi6y13Nd1qVSZ5Nr7CQ3zYUV1mwxsPktsF1HZRek1ubQRRsu9nhK",
  "key36": "Biwnx6Fm2hPaAhjCdejAT97V4QNz1VD2EtRX61D6REzWp7WvbKoatiXppZxhYCjPrbVBTD9XNniY3NVLNAm3QHW",
  "key37": "3S1XAkbggC2MvcnsXzaAUFCg9nbCtLdoseD5oXd3rSX2ybqki5XZoL7rsLkHU46fb8vmgSGCfVmjBvwb6rR8uFHg",
  "key38": "7zPLzJSKv7VxKPdgK4xMbXkYFWfW4ByyCYbqVhnqKhj18LKYQMJnpFz9nkxS3YuRaySAGm4pm3jtzaUtVgzaZXg",
  "key39": "2q4ssoWwbtKV2AJoDn4xkRPys4e9kP3QCxSfXxsjMfBzbmk13Z5ZLB3NSLH6xyzEqeqfjuwpey5j3ypXPtZ4ss5N",
  "key40": "FhDApdBcvtYdxkQX8B55kj8CCbjzcbXEQLEBigP3AwxVrdkTca9qw97LizXSJmNYHVsot9BQrAsmcBCcLVVz35M",
  "key41": "39MXVfWwzM6AX2KTAZ8o3yM8MhhBFkMqSwUwszs2ocsRUbRz1wcFoFf3WhJcLfiTAvVeEkbTjKgqmqm2Snv3oVZA",
  "key42": "3NvruXYKCypGjhmCFEsLiJViM3UHTM8YsXrYi2m8BH95N9763ZM8Pxy6JMDeos3XT2yAQEiKSuPfhgZTWiXJ4b7s",
  "key43": "2i9RAfQ7ZKWtYud25wWdmiwQnuPt3MAToUJVPHuCZEV9NPKc2sMnVMSnpask3e65xcMc7T7XXXCyzdAorU9x1xzd",
  "key44": "2rUoTUvRKpGXdcqG3J4hmYkizBoxM2cxgdNQP7kp6fMKgMeUY5rmgHhFNWaXLufgMBNnsQf6RwSR7MKkscJQ3RuS",
  "key45": "2eS3wXanBhBaDE58yMHpdoJsG2sKGnWPmmSFBn5k31CnryVYJ3YcrA1Jvc3oH9h8o9qGpWDioz6NTG1nkddRkXDS",
  "key46": "rVntFdu99Z3zSJCv12mCHSYfFAMDYdQAbdGKWg4nqiQLPknmZejjyNA8Vt2zjP2hk6wLoDtTnmsMXi4Yno76ncE"
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
