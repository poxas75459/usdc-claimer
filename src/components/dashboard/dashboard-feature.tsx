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
    "4q7ALEJu6PvztYDAwjKmdxnTcMquPKGf1bpSkyJewPvcxZneDjvuWSFL1yZkDP4aaKDRFe8jUcXXY56UwfcXNe2u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VsJcHzALbkqbFRqcx1vA1fwqii5dV8dbNXyZENkcS3v8XZpX6fi9a8VFevmVfnTNdetvrmFRbKccXFttMDysdWg",
  "key1": "2kYcyPTr74oScJVzCst2e95zCQr2gYtTjU4dAq12NMuS9DzD66hSrAnAVzUb5JvfRWjGu7Ct4kV58cX4PTD9Gyjg",
  "key2": "qdQsiw5mFviJVVrnaYHWT54qQUSPcHUfzVrpnYzem1w6bmWwyYQLwWUPcQ7ta2TQAi2NXCdLSmzdVX16uRAzqtr",
  "key3": "gcKYckdthdcq2UfTHiKRsNR6und4a97Hcpxvj11gubocgWiBVNN8umudNDL97DabX5kqMd4cWKgK1ekttRMc8E6",
  "key4": "5ZDKTic2WGZiKpcZsioDys4RPKfrRZAx2psnhQSwL1yC2bBExRCCzxXuDjxorBYt3oA9HwBo6VkzJqLAYMmhBfdF",
  "key5": "3WqHFEXewMbSmLiJZx24Ed4Y7B9c98abB5VKY8rfZpxuPPePPC5H3SfhpHpEfagvWKpAut1iKLY45Zhxw4LNSxDT",
  "key6": "4t7ouVo9QexrVuTNzeJGTyb3srH3BbXYfamAAJCSaehxCdJ9Zh3f7mmKYSjwiuV5F8nVW5TtEXadrstkh8WyaSyr",
  "key7": "MRSKY6A6TTjJgbjSaynE6prm8Qicr5pFRw5poy1W26HPiNrv7cmPEWLe27otrjJuX25zFgqSDg3zqHRhdFik5rC",
  "key8": "2A4d2isg4jqXqVWdxS99gVTfE5hTc77EvfAmTn3kNpaJDS2vkywW84RkvnYZXPZ1SAP1pgVgXBAEuSUp2SSraxiX",
  "key9": "2UaFVLzkY7oER4k3B4yvXpWHJrx1dcmSUh6Ck6SHkK6GfDn9mqBkyiMyg6TzGeHPVaxPmNrJx3QrecqrhCoybPvV",
  "key10": "4g5NVPyoTCtTbVnZhXoiXPi7RUc9dYbfJG1kY5kceYWP3AnF9jNsD14ALVatYd322PrXjcFULoGMjNQcvHSZNRzf",
  "key11": "5dMNAy9AzXAd2rM8qbCChrvDa2v7BLCECVCa8NQ7MkyHhdGR3qBHG2hQ7MeJzxNfAQKXgafgmC7MaXBTFPfoJgRe",
  "key12": "7djR39UB6PKYTZ9gHR8rnn1MYpaCRA1Q5aUKkRt59cZ7sbaRhZxbwHkUR38S169rSx7j5Zaba3k3bS4w9bXXKnK",
  "key13": "3VDPeUtD26eCZyDxxWw7HyTygAZt6UHtPujAPiYsu8yxYzMK4YGyNPPEESrULyoxrNZT71z9AF2xfxaZcZJaLfZS",
  "key14": "2zzmjUrgdLXjdVXePoeowWMEaSFuBWfnwHKpsqkkWMooE9xVtKHCoEZiJdbvZZdxQj2weAkDqKhQTnsaEdRJUnuD",
  "key15": "3fPRaknh3jJd6N42KpxW647VX54wpwX8M4bMV7ijUNmpwEjQJkc4tRp9KkjP9uwdCMVCnGCneBPPNCusBbpyBD7z",
  "key16": "4DdkXu9t4p5YeazaWGmftJpDYsnjRdNAsByrV41oENpHo2f3J6HZ27SDHT9TTkhZKiCMSNbnBYj2YVRHa4G1Xrux",
  "key17": "2uWGy439sq25KA5iddaRUbFdDAdytNW1mgV7AYZnj9xaZ4ZDCDoaqcsjZxkbCDgqNmdX2wRx4L1ETXqBYR9k8XpK",
  "key18": "u1vnW7c5SsJTj9x1XZ96aNhsTgyt69bdrLqiLqVR3zqthJxHMsWSKnC24VZ7GYKQbWUh1F5J1Wt6xspaejqQWvG",
  "key19": "3JcnxmSe8dZgGp8ft6XyjBLC2KB2Gdiwgz2zxQJtp9E7WpnP7Go8z2HHxm89zdcnw9xeKoNy1woQSCiCNqfErUtz",
  "key20": "2QnBtXutzcQTe5teu9DuWJZqEtcVCNx3DfBdqVtLR3AZHCEja8BnZWwRQj4Qh7EtZa4HxQnsgKk14jje9wZruEcD",
  "key21": "4mbH7ke2fKXNm8DxYw9gjh4uKY4pef5e6erQ2oNYnWi5Het8oioMuKHTrps2af8fhAYwQRAudYFQKBsPwVXL6q7b",
  "key22": "2XgvaV76PQER3UhfzJi4qHCzCppUzbqZek9CS7cxZqSJgjmuN6K7kmfqeLotGGRa57euLh3cAVtnCUco2vxBpYF1",
  "key23": "4vuAiSeUk1jdXfpWFpcJ1hsMZcEw529GjPutM9LdaY8QDyN7PdkkeujNpu2L6hAKh159KgJVtdPEEKBVADnjYzRg",
  "key24": "3t9a2M4k93y5LgVycPxrUEj22ZgDUrGFX9hMFbH8g5iCJd3vLSh1qjtFn7gV5cKNrVeFAEAVLwf6Z58z1uLHf5bN",
  "key25": "tGhSe5XYEbJeUu8HuZTA6g9TqTQRGXuZ9CgM85CkbnF9psEDDcLgp8yEmy2bSe5mmNx8cV21zd7eSr5eJVsD6XX",
  "key26": "5MXfQmSrN9stjdJDQ2CT24xm5spMYLKTH22b6oT5pDKeCRkvqqN8cbxP9YzsDAGH4ki9hu3ZQY9xAvtdkwSCtsJe",
  "key27": "3AmBXRR6qGKSdRZk9HqLCquAK21FZzgwPeCpHr6SrVV8NYcMdxsNc8YekPKNVToDzViVVcPQXQtPmmYseMG5NS7",
  "key28": "5iQERUY9YDw6G3hcdQUGVaykipDHW9FYcBLUVGY4deFLApgMeVu1hQvQ2HXX5LL6TwuoKxne7yBvatymJbkCwqCr",
  "key29": "6fQAbMB1L28GugNuwA5CKAczEcA8GdLtta8vpKnWUHE3y3keYR9LwhAmLvAdWEQDGseWaEPF2Z7NCrnpMeVNiyh",
  "key30": "2w6M3vjMpfK8TWHMVMdEuy9DQviHhee7cr8U6LuNWv76sdbyj78U8Vp1uc2Fxd2hcBN6FDYFvk63dnN2ZW7DgCHD",
  "key31": "4W4mYaQKnkZAyDiCRvKgpm8zDDcVrxoMNYNfSUibYyJrdqKVLcosFqHKbdziDfQiWyy4kyzsVrCMKcj9v26HdZZo",
  "key32": "7EqGdKKhGebK7DiYz3WdtL5XeSg4v9ykhkpSSeuQ7Npt1DZzRFZPJErR5jzYU8atkUcWApZNYPkxbK6VWiAdcQ4",
  "key33": "3ZSijbra9aYAfXFNtgnUjbZhmbzYZ4MrjSh97qNHgBCUdKAwmuNWft5dNxUDksTDSLuKfQ1UwqiGnSUaMB4PFi1c",
  "key34": "4snMcVkJpxLmNLGdGA37qm6WLV2wuCo1Corer5jXoCUZanysyA6hwWPhGw8wp8bTnyRnWhrkj6EcfGttL8aHEL3P",
  "key35": "Zam7pCWqXdgcrmA3xe8w3un58fib17jFCZx7xCUHKDpUGFifE1HMqmc3bZngN35oxhLzWJR8tgfVraXnQDBdfeZ",
  "key36": "DEuFCYfDUmwHgfGZhjGMEP6jn4RyVgrQX2CQzZZvmosFqmkigXGLzWM88gXNYCZG2CqcrXZMcRbeT26VFnzotjj",
  "key37": "5kDKpFnj8ZExd2x3FaBKyFqsyE8NvuhEiVGRRYmboGsH8ptSWse8hWaUuF3XKffQWoEfPQziVbB78enrWwcJdWQN",
  "key38": "5rrT2HNwBzavnXp6snCCxWBZk2E219UNYR7wZhXYcYz3T2tnjrtJba3GYHpZDtJdGp5bhsRejDXxye5BhPftG4Ym",
  "key39": "2Se8P5eUknUjCSFo84BymAnPngN8Nb9BMfrYbPeEUR9YKz8ueHgwTa2Gh76NtprqnCvVLNjtQffuTLrkfT2vnwpr",
  "key40": "XBZgLgncLgxZBmDGeqp8d6t9JpzPxzEWezjts4QbSf97E3V1ncjGEjLENwFWfoX6SyqWakUUd2GT7wMmiGznpsF",
  "key41": "DnEjLHUyVqhHRJAf9vVui9YSygDT7LTQ8gb3sEpzWgAsT35EbwRMDw2EUgorBn743cdj6hnx7qFg5oTP4sgJXGM",
  "key42": "34D13vP68JTid86h8fP4aY2JGiGLG3u8KxZKokKQ5qTx76Benk1TfmWjRPpCnMNNKoU27ehN3bsdZryAGiRyZJER",
  "key43": "5bYrXL37iUuBoB64EKpEuY2omWK3AG35C8MKvWQLDpWC7Njx6yLBUc1oYZR21WNiRRWAq8KGFmdNxAk7zMezK3Sb",
  "key44": "4cVqLP8ttuNPNkqiksPqWXWuzkUp7WZ7Z1yQgvFDx9BiTJSDGFn64fpJbn1rpS7fipwgb6FDHSZcaftH9w2QK9Gj",
  "key45": "yMk2XYhYtDFuGkYKu33LD15NQUE5wrGHgz7NMYqCJXZvUNAWwQaDMvktnK1JwBj3dpU6YYv8YLNXbiySiBQxjkB",
  "key46": "4PNjzFmN4qqW8qFJyHBgeT9v5CsfeYKUWRQbxRGxWKF6JxMzuV6EwtBsLcmPKLXmHHGA7XsXFsvMf8Zk6Yr6Exi9",
  "key47": "65UN1uwZfh4Lm3j3yd6vdxCEhgavg5ghJiDwWCxZ3M7zHgWbmPxh7Ppaymipii4zD5YG5V6cfmDSBjRhK6qdQRwt",
  "key48": "2oKuNCAvj3n4Qrx8uxERCmA6BKmHrFPZgWW8yDjVAmAS9sU3oE9QujV7nYqAXLjUuRHyCwtxiXNsKAsKWYhA8Wkw"
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
