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
    "4jbFMwrrWph9ZGxiTyjuLe9ZoSKH58s4GiVXDcyj2CDTyP7KdjKw4AJVE3cnKtNJtXSQ5LuTH9vBX2EuBbSym6nR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wGQx4i1c9iq2AsFBbwEUtF4QyoVzCc1nNuMLnTRUXnAShdMhX5NeP6Qzmbf6jQ5DJ9YAaCbBUB8WZLMkCzZ6wew",
  "key1": "2stLJCyyQo3iZf6hoF6ht5x84wUk8TJK1mbVKcsJ5rAF3t8Z1vQjWhW49jMd5QKsZpwi6aqZWrM1wo3sfmTXaX9S",
  "key2": "3GyMNt9wtxc5vrY71RMZNq2k9ue7rsVS56k1L6X7R2jjo11ZqLCt6KY2fDpo4UaB6ZpAjaw6cVvX4Q8q6DDvGLvJ",
  "key3": "3EevHhFLRVV4qcjoyzGvp7pCf6syaK8hgAz21fpzvTB4gnUrBbtnRz9sGtiMLBUx1DzjWFcT4Cq7CyNwyL4prR51",
  "key4": "PXz3AHAgpwtJU49Rj3VxbfWLjVbAcccWfxnzm3UPZHTvxM1MLji5GaNQp6LCeca22LoK95ytkwEEm5jxwqPeeTa",
  "key5": "5K7g5Ljm5FbgZdpbf3eHGcK8UWYtd5jhXLtHDHEyqFEiMPDPBYdDAkYfCzW4JL27tuCTJzuishnPJRGR5AV6BhVo",
  "key6": "3GBx6JpzVBRZ89jY9iLWRMiCmWosV9R7TM5HJSHFkemAogrTPnMnSqhV7QoTiCyzf5z8r6FzaneDZCRapxmr1nbY",
  "key7": "3futHzsgovKv7Kqtp7U4PioVSmbcbxVUDr6DCMiAfi4Zcs5VyauuHXdyAELs1o5VTswKe5UH6ijSom4Eqy8APys4",
  "key8": "9aMjt1MerjTR259eqUXGYfuK3hZJUagTvJq4yVW9STWsnG24cWcNnZDc5EFRneJyJ9P5EbswKt5McNyvA5rYyi8",
  "key9": "4T5UFhHtjVKMSwmHBWVHb3HMPRwCpu2PxKgi4qs61A2YABqNbUkkka8LkyAXgmbFXEx9ym15wLs4g4Camb9U1VXi",
  "key10": "3k6wsUnZJqsFmMgYYqbnRWjKnKW2e3xLD8qu6nuUUoVY6HaNNQ8HbBzrh6MYtrkfieBgWrVRjgAPsKP4fgbkXTrV",
  "key11": "FRmJRpU4ri2HyEAEXiy4oa9jJo1BoCPgwL3AjoP154R6nTRstLikMJyLRYjdEBc8t4ShMKue868fMdwtvjbrDo1",
  "key12": "3ToB8QQMw2BKRYYWzNvs3Sa6uRGDCx2kABDCKpBgcc8nYsqVrjUDABJJDiZ88iZoWXHfYdy44vd36LTQatMHQU4f",
  "key13": "GeNJvAbBiFiJbKTHTpS4Z9rigFZMUc7WLwjtxLTnxRtjzqLEE29YUKShbEf1Z1zeHaBg8jAESkoq7AzBZTRMFiK",
  "key14": "3qf46uFXyVRn6AwncwQgvWbgpQNsKmaJKZXLuJkrcJcHChoUxVij7C4GavC8wyL9sMeJymeCs5ty1dDJoan4cwRL",
  "key15": "3owXGmbbE7TFsctXGXBdCt2dNASSZ5E29o5xbBjp3aoxBRH94aKHNyhz8zQErAAPvVRDhpG8mwqNfhLYkrHze2A1",
  "key16": "45jfLxqhnQLDfxUUu2aqoTL8ZjvJbZJpU9hB5nbcCvk2UXFR2X2bCaJWU29wD3ZogEaCasvBzn7UVz4VNwPJYAFn",
  "key17": "2PXYWpuwRjnYYrvk5YA9JJRmJozaxNC4jknXFSQ9gZhKJKQQX2NDsnFCtQmX7CE4C5HwJJXZje6aspwJCGxsn8DZ",
  "key18": "5EQhLPFgazMqamnSFQrcGQa2AucG3fJHdn8TYtwmDeVAKYUhARmC7J6FFvzrVqM4Wv8bK7tWEYdrRCDw7etSz2jE",
  "key19": "3r3uFPmmwoaKPi8SUPJAovBzBJCCNFdA1uScbMKBTKjg78bsU9Tbv7oZYgv8ykjccs4uaHFT3Z6q8GYUJHmNJsuH",
  "key20": "SHNcRHJMhk2otoEp9oGZAKVtK3e6orAoM7HLVj3pREkGdqjo6eGfnFZ7NedvuojZFjxWTUA9tgNVzjbU2a7A4gb",
  "key21": "35AvsKVis6geeHp5sm7sDYpaw9HryMmjCaNgxRuap9qXDE6HXpg2bHkHMVfMkwQg6Ej1TA14ZE6RncfPioVHz4gN",
  "key22": "4FP3yRkU6L9xkiz3t4ixS6WX93Z2ReFjRTuZaRS7LGCAms1Yki1yAu6vQXkL3BefXD3nLhgyySY7u1wMHtZDNHQa",
  "key23": "62SmHcPeiXwffxdi1JcvtBZZp5hYzZuQ6uyYsPBMLZ6CyU55sZN3b2rJiYVGhATAhvxXQfa1489cyrByj2xJEysP",
  "key24": "pSeRYUwxwVnoLQgeSF1hPijXkvRr6JMFiQJLMTwXpueVMaFPZb6SBHRqYNm1hzounBNmBpDEEh1JC5vAcqX9dhL",
  "key25": "4fD5pkTNm7wvYLWyTUmH3c6TEjEGjyNYVdyWiWJdtd8rpB4jL3YN9fiXyAdEV6LU4179QRkb5WmLCJ6RBZzw2Bci",
  "key26": "3mWo5aV8k9CRzYq6JS4Tj91sgWgFGh75d8Zrx8P7xRCDaGNuFuTVkkCWAHsQ56onK6d7ER5AMkTjoS4VJnswcedq",
  "key27": "4xG7KBhjP1raKZ3yULhbzsWQgygFaeW1tX7jbWNdaALmDg8ZprYC319NYRw862PFPzTfpzpYkphsBa9jW96YnPMf",
  "key28": "2jChCcDGbFCTRDCQqZQDJiJSqs1LNFRCJgtCtcjK6cH73E5L1QzioECnv9GgfeaRcf5Y6bohpYR18p2HVSeL94J2",
  "key29": "9BCybZw2hhAQnB26ngNBwa6UQscVhsuGNANCKM2X96rDSBuNogPr2xjgc9QTCnR6Vr3xPpomkjMgaJT7LsR3NQg",
  "key30": "4w2Lxj3TbqUTaJW9tEFrch1Jhdk2wPH8VwYJmfA9fkuFTseu4AjdEHYdHBga5sQviLJ1ijXrfGQ5Sfd3SenWpKis",
  "key31": "48pk6Ni5aZjk4g8f7N3mZ4Pmx3rWDPgDcuMbYwauM1wBYuftLXpUqmXsfPcKW4nW6QiihYuWoMKEEJRNt1Z2Gt5q",
  "key32": "EF5XStauNh6yJv5o6wW7yEXJtywJdntXFZy1jjeKRJnJVfJVswKtyuRgbZqodq4mAusQUiVe8zwkqx4N21Wz8iA",
  "key33": "5AP8L85JyNKRVZsbkPVdeX4t3wHuBfTSprur8A7Gs8sYgSg1abu8Jviehg88F5WkuXWqWEWc7KAr7G7mAeJh2Dru",
  "key34": "2PiZmMa15t2yU4kfmB5wHyGzFDccwBLu76tBXgacZ4xQER6c6peZ8LH5TKLSCvoh1rPSwqRPinJStoUYZPckv9ud",
  "key35": "2VBSMXdVx2JJW9Rz2FrSn2PkZHZZyDAH1AVvbaWDbCU6QZm86rMPqPrZ63TC2VTJAMj9aaAsW5A8bEs4GU2oY4hE",
  "key36": "s4Zm5dJHsARe5chhb6kn49MWf4csMw82ZUGm2SqPD7dv4Zc8LkSpuNrFgV7Mb4Hz6gzM1oFUX36WX5Jr5ZcoRXw",
  "key37": "3VFbgfztmBpHoaLyyepQoZEgoC5p8uoBKrNDANdrwy74w7L47RbXr6dujU684bfejzRvC1e29L2hprRymm1oFeAx",
  "key38": "2xKEWCVCKeiPTtSkqwQCGugQunGQPBTDGqiMYWDw3Zzb1RV8VJK4N32DZ1FM2zkSkrZtzQDCdF7NPqrDaKwEvMik",
  "key39": "2hTFsNRV7Aahm7BSD42eF2tNkhVLQUiKW6616fpzGYw8iXgPfzpdDTExhHH1QeCdPbgG1TpqfN2KvCm6kjXqFGz8",
  "key40": "5kYyy7Wi7XZAaxDAsKHqDEaC7kAgHkhuaUXtfpftJ7hVBHhukzQWHNL9m8HS4P16auXf345CvgTy9E3b2JX8JntJ",
  "key41": "3vdBJmQnhP3UpWWUfztWd8aovQ9WDZ2FS7wmyHZrUTLmr9UpsSxsHwfEi385XpzsWCpLYMNiMumLvGo8HtpVL8ik",
  "key42": "59LjaENchfrUCwXnaVfqRDEWaiQMv9z9AaW19BXfZrAWWe2Kcmcx5KYYrivjRekdEb8yRTm1KHBDR6Kmof4KsFim",
  "key43": "21k12qTNwneSh5oYRJxZtYUVm13cEmEzo6fuL437g9Eqx2zhsiHYyB7rqVtSEGSgDqK7Fhtj3TdrQErQh8nSYTA7",
  "key44": "nvMrWzJ9vwESfh4CPWtGNxXZXyH7RxaJykKjeXwjuiYtuKtb6n5nWefpkYJDjetzpGBaGGz1iV1KfNN2WWof36N",
  "key45": "4XLnh1rEBRhhCtyf49jeqwhy8xtoNYvHgCShQZeRK3e2Hx6JXvH1TMv65Xfnk9L2eMxf1W6fyoLyvJwWoosHXByZ",
  "key46": "4LMtNJJzbNsRzxf4xZPKKbjjgnch4ek7mW7mgtcuoyuDLC4PJkaKoRkYhSVN61qVPz7aZUWU388RiLixu3swTrCk"
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
