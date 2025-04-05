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
    "4q8T9LX5B3jxvzTqbiGrtJt8Sm4U1Dk5ECcy8N1rBNuwtMM8VWTmAK5vk8iiKpCggH75gUhx755vWxucdLfUMeGW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nrdvXNKL7v3pwqrkux6KoRd4Csybvdx6eU5xKsji3CAQjZaLrgUxqjEnj8fjjLA9vMV7Ae9wsbXvKwuiVWthVG2",
  "key1": "2THzDduuZAZHdEy6cyBkutwZsEGXCq3R9zFcEP18CkbHTPupRmemFJVNr52r93R9oUnS72SMvpHqjVAm39QR4pbo",
  "key2": "2wgXFxiieYjJG7CdAE3m7QqNArfyqFyGe2nFsmmLj9d3m8PLa7tsBX77wJ78AMwskx8A9oeUi4q9A9UFHcvyD4Rv",
  "key3": "46BbZNkTLL3LRKdYJRFz66TGf2WftdcndW4pc7nvynnCe36HcaaqiRoAd9rLwG2Sz6JU8NcsT7544CweBhp8AEP1",
  "key4": "5AVLQ994BNgjfavkp92TrcxUnMDMcwZbGFCrHkZKaXBoTwWhcUcB2HswnKrFhmSp2dtyDaRH4iNrhc8yvYgzAUz2",
  "key5": "SYEW3JyTfmbg1tH4pm6HD8w3HvP5Z4HDB9pELt4p4XeyViKjUsp5wwmP4UVitP3DF1M5uJDHyEmf92Rh61tadkb",
  "key6": "3aYT97wtZTfXag7zfFSGtrz6mo2mCCiiQETMofC4EM9qaP7dYprT86thvnUHLdmaYn9ccF1RjR6tuAiigmBuGz9F",
  "key7": "5YtaAMkgJjytnmZ6TKWKYUJZ8hVGp9UqqoywddHgN162zd9iM2PsSmetyJLTHHyEULuEF9uRJ5gcnpm3UYqmrXf8",
  "key8": "K3ttSNHxb7dWoW4foWC4Q3xSr74F4YvzmzEFdPW3qq1RsYjkC8BxoxtjgffLXD5nXgBPLrdf2RQfs7GdAZf6Mws",
  "key9": "5hb8hHGeuekbRpTUgApbPQbAR6scLQvScP8zGQz2idiBtHXQ1FpvNe43JPXH2a8wNU1NhjusPsQQfNNmgG94HzFR",
  "key10": "1HSHYkD2GM3mV2ERPEGgftUZUHh7Gj2sfsrmcroQPf74P9NhqXn5YTRDUJUSdLyei3pcL3NGJ7DjAeevaoRudpn",
  "key11": "3ujbE6VwXY6RvMbhiPb5Z3mh6WQoqyEEBrkHmPnSASHp6nKAxbjn1LtCqDEGKQGbbcoHFAteqyooZMSf9FBpHXQ2",
  "key12": "3t1PyJJPAddcuQ6qH6TTC6xrNaMJBbHpFKDxwzA8bz3Vq7qMFichztxSayJo9zcbLySNvVkHqX1wCBR4UuZWquS8",
  "key13": "4HzLa83RBLxvfCtTZVTiS4gFEZD3gF3P5EA8vfr4RznA7MgmgvnaC9ZT371pCjva3Xwu6id9iEbtBQZy8BDK6d2g",
  "key14": "TVsiNTTnmm3izwrdWuQXA5PxF11HjHZYkH3WFsJKjj4VQdKfF8W2gL14n2qdypJcgo14KHFSQKuSbTcjGxBQXcg",
  "key15": "9GwtLGrXZCFvkZ6WqrfvxKJ9Ya1HBNwd9kgHLZYyxtPUPfCQz1rSZgSxzktycGXsotcrXGtaFBZVcQngbiPWRUs",
  "key16": "3Nouythw7XvbWWwqy8CP8PqcvcbbvURKN9t3mGeZCmaNGRVCucCHB7E4mYRQfTyMHxqKM81SKMxRdUJN8g88fMpE",
  "key17": "DqwKZvYTf43DEGA18HUpmk3pFZBB7Y75YTJKayHXyv8FNn36484SiLhABVCSHPndYPSDrpQUMah5G3pyL9j82o3",
  "key18": "4cA3MFet8eA4dtvjVHAukg3CPCX7wZdg828ahQbaSugRR9yQUJLt7Z7QSHo1a3qkqG6kDNWDdmMaF2PggibjQXqe",
  "key19": "5A8K2GwGW324ycuc533atyXgruWnWCBoEjYa7eXsvcdR4KFpCXs6TW6XRQWh3PzpThAtBmNWJwhKRpeYmJWkhPx1",
  "key20": "3TqLZ7WG54XuQ4jx5VNK8eZsTngXBEvsN7MxSBjbCmq1ArbVB93GKo49ApMJARvsZP6qXkmcqihQvt4EP8LXye3s",
  "key21": "467BxfXsF86FQFwencNATnjyQpJRBuXbA2XrvS66R2TwxuFn9dCuk8JgCKtQzWbqBG9jJdeJrCf3D2wx9Fo2sxBw",
  "key22": "3iMLQ8W2fq3cMMFhWd2t2ZcpuS9XorGZdm6sJyBhQZFNrwceCHEEB52EDwkEY7f5EQTw61w8xbUBHUBroTUuLjbn",
  "key23": "F7tDpc3opuxZ2p7moaFAUP6THSbAsoHqV5ptYaisK1KMzUYLTuBY2mhRquQTj8yzNBgEU8qd2QLTAc4FMNaqD1u",
  "key24": "2NDmiseGVKT6Xkt1LmTRW2TsKZ3jn2utWHrSWgiHJxJQ2xTDfmHKizgiBCX6ybTLywP6xCeGbdF6jhBwM2JRArRd",
  "key25": "384Wcaywj6tdV3cMJd6QxRv5dsjoXMkN9rUZvLpDcUzdbGfZoLCbst2JEhs5iURQS8VN3wRKzif8T9zvdTPRwuDC",
  "key26": "4XKG56gYiENqoowZxGCkzinHqvxfdL29QMo8mnpSXmacrbaJyvZuAAvYRecSKPy4FQrHWybFsCZS99FyLKRyC4P9",
  "key27": "2QpSS3WdS1Vypw8tmM2AjvKS6BHMWkbr6uvMEjfdvGisLPxeyMS4sJhweuPhf2m9nwiJzuaCJHnAZ3F17enq1gqX",
  "key28": "GVCdmEFGKoi36u6ks9xuZxzWFZKEZHic8fD1U9vJB1seWAwyibjwxnEy7QNQEH9zra3DYrERfB9Qrpqh1GByL4b"
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
