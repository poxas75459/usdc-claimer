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
    "tQwU5gdXMB6pJiDTcM8WHtoD8okqQsUG64zRTAbkNpPbgRK9Z7JebVqVNu4rNo7BE6DmtbNPqNr6UoS6DFy4Fff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zKgszHsYnZj3Hxv64NL2MdbC2HmY8igmvLwnjxgASbogh3rnWfTa6fYwCsam9f8eREFwvbdYJGK21XcftASPTaz",
  "key1": "4nS2Mnyw46GDdVjpqX95zAWen9em7zzErjWvFNqEYVTF43AMeJJ1CA9Ue6M3GmAGuzpv9jt2XtUrJLBRwACGZ3ng",
  "key2": "4xAEj3w1pC5PfsBFoQHjXYRzbYJUnYX35gbDswxV7TiKoBgCJoS1FLbjLd7PupcQBdYF58fNqbL2rQj6P4FDYjBc",
  "key3": "5xZCzpZ38F7Eq9RKw8MwYkKBUsdiMpsxZQrZYhb39zgxoLZevU6imt9ZbPp8MGV563gZibJ2d5RxVp32KuVmFSMX",
  "key4": "2vkDjpTieeT5hYVjWUUQvVYtMysr2Gkxp1u9F9dKfXKjKt6qSY5bvbQz8vpBDuBRzQ6LE4HA4Ms5Rh1dT5qXTQd8",
  "key5": "4sm1dtJxMp8N9ftSLsbKRcrqez1c6W3cNxzKfmjzBHLSfHhZraon9yckZqUs1Vmv1aj9n8cREGGzg6fKtSTR2UZq",
  "key6": "3X5ZxciB5jLGNTFWfDrfEu5sEiSDNBK8RMVZyNk6VKxmjSLqp9wfJtkqAvKrTSB4pLCZ9RKDPEphUM9AP7GhSdVw",
  "key7": "5aiuVVcCwkmJPbqrQb58K8brBrhsi5N8c91qpnqSTfjcpF8vjdXxyqAtDLxSozSKUGbfiScwqtSB1gvyN6hBro3q",
  "key8": "3y4jzf95y8RHzUAYEhSrMWGKuY7XJjHLmnr59pg1a7LUQormGq8SjvsmnWH9MrwTRJ6aFaxxKxKg5Lta6BpU8Rho",
  "key9": "NfeM3MNFWxevaMoJ99SKGZUuFbEqepCFt3ncbAiQXv3KeD4pALTxbVndig3PmnaqSg1MQPEddeXoL9K7aMXHPnm",
  "key10": "5FXJoMgpYZcQQ2pqSJkrko9tM8UpzBioxirpGxmqMm8k65uJ5jBveCUzqEHGVQj4pHQA7ipfHfMT9ddFwY733zbR",
  "key11": "qDusjnVyJgAWm3AvAkWZcNZS9ckhjYGqQjZUQcDCDjykmGWBt9EsGKvR8eiUaFM7wAChHoSZX8zHwdzDbgsVMGA",
  "key12": "5fMJe1sqoJaVgZ76iDhWidyCCUxoti1CnwJnn4hVAPjzpZwsRmByhMhoebmL9pYJ1WmTKizQRZrPjRCrXKX4NJb1",
  "key13": "2ZspdbAXfRKS7d2x2CrvRUf2BkPbMSm4mT1hkcLdBHHPzachoqjXQFMRtx7hiEr8rpEzAMfAEXJVk1a91zdMFgx",
  "key14": "4cWTwW3jyjuagkvtUcgT5dn8XcWX8pwxoU1WNswitCSv34tevgJNg1EtuWHkaDmdvqatH22WeN4i238K8oSTHLHd",
  "key15": "3KpMMDtmEyv6pjF8DrSzeLbJuXievj6CjvdQFB8EtujT4vfs7qBRFhJiu1zh5e1ZTecAER1gXTavhRT9etVJmws9",
  "key16": "4uQWwUsd2QMRVQ4Qdk7kQhELgJMRKo9F8YN1fvogRJJT6TZNBPqQtsxtvQrcyztYrxgrgk6MQU9grHEzvPM7BWXZ",
  "key17": "5ytKtZA1Ji3ZyETYPL6sFzSE6oDYnPUKAGp99yR3ceSfeXqtqtZabxYuAZt1otpQwBF416NJDwYviN5d71tEXvA5",
  "key18": "5ATpBTN6qGesa5CzwDEewkh1zRTrCkHt74rm6L21rSsJ1rFdW8QtFrPYmHwFFfzQ3u2JGHZXnnzs2sSXpTrFzhH5",
  "key19": "3BPio3hK5HU2gKmpy7VP9j6yaS1yLceQxkS6uxzaujiWqrfUuVhGL7VkgJpasSsGDTtg7YfiTCxU6Naisz9c8yZR",
  "key20": "43HhSNgEZdQKwe26xiY6DeE6s7hdKvQaMiWwvWbhitDHFKWBPbmzFP2qufP5TAi98Ba3v36ASifrMiEtzqTYtzJ",
  "key21": "5jK9gdsHSwGkaw8RtXF3cBUfGcuExUGTBiwW7PpPfSirEJ29qU5KVwjYbA57cLFWrnNXf6ofaqUX66n7qo9m41HF",
  "key22": "4rSH6NFUKyic398EVMoFWk73vJt635ATceAUiLMSjevBWNnLdazqWoWMxfcx7ApJhanwRnNjzDfXfz2uuV9rxD37",
  "key23": "5H5UEaesmCXSAqS7KjA3WBPPi3hFrCtgfcKAoYTLckzpqYPFn9jage3xRTMNzeme5LeVwX3aBL1DwATB5Nv3Bi5T",
  "key24": "5XXmeA4QXvmsP45R9TxuEoqDTpHjZXqrPiZsoPVQHNhDtdgbZExnA6cvgekhekZqXYm9r5Twokbc1UVzVfgH5FbM",
  "key25": "2r6TefZfupR7mtF73MSzdzrRCNt7dqkFP1coc8re5Avfx6ZpahwvNxLVps1kgrf5nsh2u678tiyVPXnJu4W4HNis",
  "key26": "22vYyajFKeFRPrRp13uEPgBpYseTZ2N4eDeo4b2NokHczix92HAZ1e3vG7ecWjCkYPYfhwyQfracbuqQsjL6ASJd",
  "key27": "5BrUZcQvvNQrnk949r7nx1wBubTNcqXCpDgSwkQcHx6awePdh87Qfgm8uxJWhEbhKXeXWenB7GxMn7Usw6t14X1H",
  "key28": "52KWqy8zo4GPrRe1LvzsXGQvEnYobkHy2MSoaEDtfmhoQfaDLSnudKKQxh6cwuGjvQEJZQdoD1gKQQL92fQzcepk",
  "key29": "3owkZcWrafuC49r7ht6xeAbCZJun5PG8BA1HXg8hiyB2BiJeVUE4mUe1ayUHAcBqNaeWEsHV4X7FM9cDmVSNJyTv",
  "key30": "BYx8WxZmGkZyRqU3vjiJ48ZDzm2n7hoaKcx4BkCfzdLtkfaQYKXb4FukcMwk3t9WFtQ3d9bmkMLAueQ8VgPuDdE",
  "key31": "2Qkn7DJYsLSpnWXDbmJJxQVbkjWZXKjr7Gm6reP5pomF4TZKsgogRJAZ5nTXNtdGPkUzwu3W8s7yP81Gqvr3idrL",
  "key32": "5GfENN8YWkVDPfEUUZzanR3opZozZRnruJS9m8oQdNEMNbXTrPbcHGh5PT1mQrdjWvFFZbJWLhd5yEYDaTUvWZbP",
  "key33": "5u6mQezB7F9ALV6hVtV7FnuJBJTHR8j5ZQaeGGFw1bajoGsfNingavoh8Lo2mQgkCH3Ns7xhNCLp755Kx6CYNfMY",
  "key34": "er9WUTY2qE9mp2hJsm6NRKBHzJAbj148dPghBxXGK43PaUAC9eoNnmKe84ZdVmNthQPSY5NFwNDRg3MKb64WTmG",
  "key35": "v6TG7QkrRDDeNELh5fdJr4HcN7Byif6kwLD9wYUqJPJHgaLy9sQZc71KZcWNEcokVypBoXUaJNfV57WGmH2Hkmu",
  "key36": "58P3hb7bM1wwwLntFjqNi33s5xzzDGPVZFHCc2GpFnYfKWs3qRfxGk14HhhQ4bjcATJzp124mpKGjsgd9qd81TwT",
  "key37": "2RNJfC8QhknetVsvKC8EfqYqzgejjp9X1mZ1xNXgn9gCAKsiiNj5xucjAz1V85JCiWxYfNN8JwQfdGBxM3XdvdmR",
  "key38": "2gh9Aegwd57XZQZa7YD1kPmHe9BQ6Z1Z3H2ju19YUwPkrKiWh8RA5eokWrqUHLGsvPDsLSS3dRGvjW7j1uPxNJQs",
  "key39": "3cfQL2LU5QY4xpfyKLt8Cqd9MRBrqgdLtYZb3bmA45av53Z9bE2y2i1BzxNEgVzJFpwi2RwmZpoazYmU4zxC9jjh",
  "key40": "3wKZLTgQG1QXih1SGMeqAxJfYkaAzHjFDEwFkK1t5t1FZzjXypL6WgQTqaZrwnUgTmtepREmDCKwPbjo7Z8VQLst",
  "key41": "35zaxqpUdhi7sC5SeNeqja9vafCgCkVL7KuKcVrtbzrsGu6um98j8voMsMhFfecGKqDQXaqz3YCoomLwjyrESLm7"
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
