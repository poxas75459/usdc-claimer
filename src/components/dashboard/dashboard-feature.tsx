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
    "2xsYWibsBHG71XXjEisg4qjAcDvwJvWtozZPhZp5zMNgak2HFiqj9C92p97sDM9LwgkSHQzxaHYeQD5digB79wHW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42XjYg7csoxwbVZZWQ32eB6MAzGjMUrwmdnRTgahVg1r6aXHoRz2DhqEPLRrGeCAmjFXXyM52YnsknBy4GoAf6Xt",
  "key1": "vXYemRwAin1SNtYff9yNoAmMDmWuFKfYqSwVHgg4Yhc8RD2eG6fziBNmY6fitwTjGfY9jDd69JFkLSYKBNrkrxd",
  "key2": "TNEZXGNaoLuULLUSxnCJdg4SdYiTf8sECg466EpyLq7PyrxoygYYgYuGxmJjhYiu7dDMszWGDovXxPLFkuktwoH",
  "key3": "471ueiz1rD7TgskgWACgRTAgqv5JvVeQkScVhGpwBqudVNm675kwpMQ5vRTUu3T3taLCryuaaV86o8R8QdBKxmv7",
  "key4": "3iNC1LGHhdUDULi2rAwJnCgfb7vrajvmYbZdQCfGFgVSnVtrepxodCW9deXnFsqFjFnomnsNEW3Wx2WJ2S3ZeCQi",
  "key5": "2d8jTenmf9d3C9bTgAHWPpi3z97pyHjNehCDhYz7VpMzBhB5vKdMswC7CHEz7mc7qQxRqmBLvLemdTGeKMJDW8DZ",
  "key6": "5CDKHQRc5EtuXJRmZGrDcDfnrvJ12UXYMYUzuzriYHd3g2hkxewWwSsmRHMyUj4Lso8sg8hqXNuuuqZzRQcsZ1Mz",
  "key7": "29277H9BdneskdpvLBCpTWv2qWPjzJW6GYH7AoZfM9L7iZzLstrXQxUC5EWNF1oQrJtCb1xBT7nRqbjtZ65EyNyb",
  "key8": "LMgSXSvMDtmPjdUzKLWgYi7ZTxrpMSr1Duq43bqfwAD4FSFDMxWW8rynnNfNeXziuwAr5gyMnWYTNKweJtubEDs",
  "key9": "EnRkWLiwmaKgru5GXcL8oTpYhkKvvHnd8NTexNBU35bdzRwRGRMBhKngpPQxtB1UzFLCqPTRUeiN7MrmT9PuFzu",
  "key10": "9esFw5CuLRTuzbL8hQvj8RzsyLMQ9JDcxa3R3JJvS7oPnWdYCr6Vf3YWhb5aBFfWcNU2q9aMKhc1AwqJXkqRS3G",
  "key11": "2LdAn7UfWhvoxWFUZsHP6Zx59vgVfRLg2btz6aNiFGkpYs4bozRLkVqiJtE5iUcw7TWpnJKCwrPSdroLVJ1Twv7V",
  "key12": "5SMe3MJP3MwA2VoSkvRyRmjUxNZkHbkb95fZmokrVYMLPS5YQvu8hM15vnWtHm9faAtKegsELsnAoCA8hjNxBmwf",
  "key13": "kwVTwA9cFGVbUfkqhX82A6Gi856YTWxwbjBqrNdwDDbSyRMJrwcXcg9pNbny61QqTvwKt1v3B5GXxRX32q8bQLQ",
  "key14": "5hv8tMGVbyRdRHjAZ4KM5Wg55MAJjr1znPbdWkBYbuG5VveozSG3veyEyKq2BaPF33BBk6nL6f89eHbhtfkKkc6",
  "key15": "jpW17CSQXy6ph7VdGHQn9aB3hiY6GgepbnTqUcr6ahdGrT9fbNJCPrkR13SNKg1Ez68y5mJ7Qa9MNgMWMQqDL3K",
  "key16": "3pv8wqZKciNc5ffZDko8hMqQr1gXV44RkbAniudYTMFCyDz56djfrwHwrhcXwTZJwW41R4qRS7AzVxLLsh7VjUvV",
  "key17": "FngtEU8GBNwqjQC17huHb14c6r8jK6LM8htymX4oj5PaqpTScEBsNuVEQhiqLekhuzNhan9HnEpMK3ie2YskrAN",
  "key18": "4VLgq2KL9igkDuEaDuGqfDFMLQVGrUo3iePSLYrbgaUwcN4tGYBjDC4kQ5jFFnrjauDrTcRpCNGhficbFCxZatZx",
  "key19": "3yxwAWCtNzEyuofwCVzuGnTqxBrVcHp4zZrDLjyuL15HFkpgN1z9rQkH273D3dvyJaBTR4KfXs7Sh7eyMJCNnrkp",
  "key20": "v45XGY955Nj6d2fsYsBf9Bfor8YstiMAb9yoQcX7CN5KLnFr27mdQmdNY2ekumWs5atiZvJhncDmM6UgJQEota1",
  "key21": "5MZkYQxQLNX2cmkEK83i1dnBRmYd5nQS8xcHrwTRe2we4fFEPNLK5VGoFEUqFFuB3H3qDuBbUx9jJ9xYPXvsPq1X",
  "key22": "5khCQ8BmTaBw5wuwt24usyzbJdNEqHoqwF1fWyQ58pmVBNBngJA8p83QDRYEuMhsDxHcdM7wxviBCXPF953kxitS",
  "key23": "2VBuZSzURFV4iofWGsrijRZMJKNm2MHkHis2zvk2DH5tLRpcc8dAH8kxoiAYjizANwwQWqpF36k6rRX1EDzxEK1X",
  "key24": "4Xb7MaGZjVyo9fsHqgr5LFw9Wf3nYJewR6SX9Z8KyrAqYStD2wHJgYGqfPUdoSb31wz2DuM7pUbGTawxdGMhYrUK",
  "key25": "4Mh3cTNemAdhzGp1bq3KxCPWXLcoykjqhV1GY9pKHeY5pMczB67tw4XeQchjHxbEF7sTL3oh6qTWd3scmnMzNfCL",
  "key26": "3mWi1QHTepPi8ruC7QzzChoGrpMVCn7YfdAFvYp9mi7UmFsEMkJu55vTEL8mMWRVWsyRW8mEoyuZ972V5phdfuSw",
  "key27": "5J6JchaNFeM7Uy1QuZyeBAJN9LLuHvSjwMaijhtbpLWaAZavHNdJYhBUrzxbuhDVA7RiZ2ejtrwsgEgaZMimTvzC",
  "key28": "5cG6kZmRFnoyhu5f3cUZmUdmWgjJgFYpQfzHwmn1bPyF5XMcPo8LLr76S8bEA25wns2HbGcpv1ZqHbCxxZj5n6f",
  "key29": "1Xhj5qLa984gxPnCPwVRChE6fJWSksXTW5xLThFzSWjzWcxQn5ZjSpC8EbpU942Gm7vqZVGac1Qd1ZkBcgJUcfN",
  "key30": "3D4aRyR6kxntZ48cHVPdC6CLCsZxNNixdjY95Yo6gH6ztvRkJYzWAeXUdBkWt4y4aiCuUxnMGSB9ALrnVrZ7WoBW",
  "key31": "K9ZPQRnNx5nP6FAB4Q8zz59bZaDc9yuvhR5bEBDBFhZE2qzEk8mNraBUUZ8eqoYrkPit3YZhMUCJbWRuthEQdpt",
  "key32": "414M1fbkDmxsf7tKGEJqWFbgaQ1mo7tYXggeoYxRfYviuk6diCU3kaVGNLuHkbvC1zi9M4iuoNBR2Q7KFgPExShH",
  "key33": "2Udiccn5usMbrMrgnwZX1ZJu2d8g4U9AE26omky3VgtAcJYo4iBNkCRU85sPiVu7x8jhLee8QUsbL6tKJkCtFuq2",
  "key34": "4cKgoGCMiCG5Ep9RCdUXKqSvCSCD2BztgUpkswJXX2nupdu4y68wE9fkq6Wt6RWFVhqAxMTs5UMRctmqNXgV149Y",
  "key35": "TtQw2nWxBx3m42RNwEEQo1Cmu1pbgu3q3qdyYuXGjxqVNa88fHtmdM83Kdtx9Ng8Z5TKKnNwd5bWa7drts9gdrg",
  "key36": "2GCBAnBQZTuNKtxe34TsZp2HbpDVzVfEmTykiqchvn2cjKtwLMfqsAgnFiK6jiqQVM7muWJ13MKCfC2qGs47mu5X",
  "key37": "3ByQ9RAHyKDaqKxKKb16XQm8J8MmTYLZgvcsewUu7NPN7EUXdnCkx5U9vSjYrHizJ5WPi7kbmjUowEPDx26CX9o9",
  "key38": "3s1metEsujFgasCGCKQ9x2nsQVCNRPoaTG7KXNXSwXgE7MAiinT2v1SF8QagQYsYhRQCHhGZ8GwqyhQ5UzBBzKUT",
  "key39": "63ZvqrFsvAamzNfShhKUfGq9hmFMsTfr52kPGDw8KqFogB78J1SX8mkYkLpHdHU91m5LuEgWZ2tLPzr3qRpphs8",
  "key40": "u9DEyzwzmo6p1FdHkbr37sKQmDDvLTccJDBDNEPzEbAERzZ1V7QeN9n61M6enGmSrT1Sw2u8SFwE7iZKKVLu12E",
  "key41": "5hEqfZUnGxJRpw8iJwgYQm81D2kieZMTL6xFAKnuL5kvWdawCXC9wVdcNWwZcYgUq2Ntxj2wL9UfqZYxfv7F1o9Z",
  "key42": "2zoSW5G2hbUnrGWB2VqnPRgkV5AEeZEf7axc121wSHAvsHQoisQtAZwrV1UZeNtmmFS2sHrNBZh1MG8J61FpkABQ",
  "key43": "5QCJA8aSSJV6FcT2zaTeHcgyaMha4adpj8sTcifM68DNP2etfipdkeEdgyfkdZw7vAp1xJBnzw9EhsmApdt5MbEA",
  "key44": "27493aVw2Kys2E2P7pbR6K8wUQ59iQhgfECaerSbWVeB3K6FmDrHu9WU9tH67NdmwfHNzGw3wLe1TFLPJwJCkobm",
  "key45": "2rupxtFZcJG8p9fDDYskUHMBqXhmUxrXkaXqVH4NMMtRsyQPbiiwakqCDQ7jSUzxNH49sbrSFv2Wo6tVaF9naWqq"
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
