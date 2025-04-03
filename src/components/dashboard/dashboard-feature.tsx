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
    "4zSm2zL8cW7yoD4nUkwxdgvspEqvgf8Pz6dGgkuqch492nq4BF74jCd5ea4tmQVm47AyTcTzFFbfVnPxYN8m1mQZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aHTs9MVaPfC7UtTyJTNeXQG9JNrHCWrRJo9VvUFc6ARJbGwqZwZAjPQLZFbdaB8WB2xvs85UGypzNBL7iaNMExP",
  "key1": "2YxWi2nAbY7kAzF2491Rg2EUEVH6BTSkCjZY3Xpv2hFc1oeDDQe3wgE3n5HRdxPNBKQLT2Ts9uuLf8mLB2BdqUcQ",
  "key2": "5ZCKc2aigzvH64USTZfzFRdenG5FC4SMwB4aCumimakvD3s6KDqrBgaGNohXyPbtaLsANA9RyCfN2fPBr35yhG9q",
  "key3": "4vRWRDK5L21T9tqgqvRM2HJ2KmvEpqKt2SkpNQeqAWwAZ5G5PTURpP44NeJsfxYhs3XQ3XaUYs46nKMEjax1NQSZ",
  "key4": "4Wb1SAj4JPKymWaiURw6AeLSzkcHoJvenZd2qAZr6jPkpgHyLfBJGwko7apQbeytUzBxCBCtWJPnFHVd8QXZnHGh",
  "key5": "5cGpM7XX1GARRCXh4WGZ27er1DdMymvEW69JeoYbVhUG7vPGm9zGihKQGT668ghzv3CE9xjVp9tENU9rZgwXn3i1",
  "key6": "5xeHbJUNU5eUeLgYQdhU3UDwTJEcQGgB6wXm1BVMweg2qT1HtZEyAH3iox1KjTEDWD4oLffjyMpyMHfgHG4gTfRz",
  "key7": "VijUF6NBbqGipL8DBqivdXtRtFjXuUucWwZxHikrSyDG1FrDutTs7KWDVd1GCcfJUjCHUamqNSMxiSSZQBB2kWx",
  "key8": "4gw4CBYUhBZKtgLJkmvS8MPiDLPijbF6HqHkSQEGYPxFeNVUJWXNURTChkM7eRdWMKnUKRk78jUckXY7p8Cj8S4h",
  "key9": "5NFpNnvNEuaG1E67er4yaiBi6PsjUYN5xG4cr83rsRnbnrAFiXWLaEwXHqBf6SPuC8Ld3apL64A6cVRQnyLXgnmD",
  "key10": "2gLaoEWQA4oq7Zdfy3sBuzEawXxBAQp6cZGogkTWUgqUkW92ywA3KxGPAecinYFuFPbUvn6D9wsCVReXvguFjee2",
  "key11": "2Qcu66mP6N2nxCvHBZ4sH42vAewjpnt6HnVtoUgLW6d1cAMRkex2c2dmDTzULpbyAtkN9H5BVbTjAuLFcLRF6K1Q",
  "key12": "4D3AAZZaXP68XzYCBJYTz2isz5EihNGXQmzQFNZpp6acybMdw3DHZxfkCPd7F1xrboaEmwQwDQQAYwXy7e4Bv2J1",
  "key13": "2FqYgSc1PtHX3o8ui9PsZP6Yh9nZbDet7Z4F86rdou3qPpD3eT7iWtHYcyXJymwsNaCa9BNy59drkNfvoN78QSNV",
  "key14": "3WFk71jzcWUUPuoFECgme9REFgKiHGGjQmc4PAj233qo2uoYLY1i3KTz7A7C7KYmn5du9XMSTeZQWaaMDTDTDnux",
  "key15": "5cDq26oRgC78ekE5jGQWzCSAE2dViD7uETR4CXrBAJjqvfjzufe9L41RixLcFRELBJipTqiErLt8XADscesj66xP",
  "key16": "2JCG86GYqjtQKLwyFPq1SbxkQoRAEEad4StxvLbRWzJK5NqCF8TeQuFFvjAhWH3cC5X1fB1HzKZBKJu9iQiRrpHA",
  "key17": "47N96VhsTSm6aLnc5ac9icAWamMEuGZGEQzMas76S9JBqVdcaWt2jy32xyPJnuK3cGTtSAbPSahN1xwjm21R3hUd",
  "key18": "3ixnqRrA2a9z5tZ4YSPe9V9hGttff4qHLrMLEb5hptX7YQwydyNnnRwzWNNXztxXkgZG8xDQiD8BRRDrSZnfVWMJ",
  "key19": "ZYomjAqgbmq57PTbrXTCiHP8kcrNcfiQWQq4kNMdVAgDsxa2AgpLjfefVyodLQtRFtp7JERQgorRc2htFcBdXGL",
  "key20": "4zaJrxxbKVzxLjTYgetBwLcEfr9o9WPDV1ZFxdteYoXE54cP9rKJNQ95KwWNzYnFVxTzgtShaE8QBpeHNzDAFnuL",
  "key21": "3yptVzpCJLx81kYtS8egFULFMMAdvQu1x1fgRR1drMNaBEFWfS2QusULEKD3cnFNXgS57nGPNVLHxLZnxADdYUzS",
  "key22": "2tqoTNuh7uR8rWva8uAh1cJmYt3dGUwGe6yKEbgbc1aLMGGZktUUjY8MLeXA32XDmHZKt4YxUYFcowb29oNNqpRr",
  "key23": "4BesM8F2xmrxjKX4neT2WUcAB6WaQmWHXsrNBQEG9VXLtaRMZg9qDqLg1ME6F1TaHeLweXmTzpk5LSkPvcRsmMEN",
  "key24": "Ntawcqx7dU1d3REBj74YK7KXkEmzUormBgCFPkhgD3yFXEERSmo583SLwrgs42kVoUuPffL2yPW5a4exGYSv6id",
  "key25": "5wwyrr7ojKrGkL7er5R5LQYffnpjXCBw8gvTuRvgxJA3qiDUM2KkTpU4JRmCgv2Y1fswEhVrZERY8dJQNaCBo2qL",
  "key26": "2yzyyfsTcgdkQo4DAsc4PtXDhF9QBdT8A3VbCUxY2Qdf86CALCKcGujxc12PzvPcNR3VdAJoVT1B9qB3w3Hc2vSG",
  "key27": "3EPL9Q8awYay9W51hSVwWqhccZGKiDj6C7kbQGUbNFEKGcKqpM4mzpUHuepcQXcLvGdCARSLK9qDwawydcmpQRtG",
  "key28": "4uVmgyTEMfiYCTQB8vnXFx2rg4fnWnGbVRDMVz3QA2WYHh5n6e5zciJwu8SLNDw4Mxy3bxyyMRvgwykkvjsVzhiZ",
  "key29": "ahcUKxXUhFcLaRptzNVwbyT9rL9iCCj7u2skynwUkqvTvhfhWKrQqc6JqX3tabmyexPRqQ4Ng1zhXyDaCCAig6f",
  "key30": "3rNGAzPzVZGsqnkaDktRfY6MZgpx6KTgCM3ju8Vq3tS7B9cq1NFiYBojJRVf2xp2yo3bQNT9gFSrfgr9maLwEy3o",
  "key31": "4Yg4HQTBKQFXwgdS5ZTyWuTvWauhchs1mQ1f1rRQ6whLBnsdf39w8cpubXahezr51orK6q91W7Xgu8dPnsunzprH",
  "key32": "2eJsQVNXRGNbzxnUbowcAzZxiay74qyMjV8PrubgMBUX3thVk7sezxhicxabUq38ZRY1mvb4DHPJBd5xM8wu7hYY",
  "key33": "3dTWz5F8D91T7Z4rysmmo9A7pzeRxhUJWhTrDYL5V5hzTaKi7Xe7uNikboaSrxmAEAavPrJoDt8tTfFSEF81bKqf"
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
