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
    "LE2oR9vD3HmMKQc7s1iPaQq1q2TGGQb6VR7PfGwx9d7TLMGPKkcBc1KY833dyz84JUnmK8R6uUKXqeo9Jh1zFiE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VuhdgZwNsGtLyjBuGFAwx9Syr7xfV5qNXjU9DbSb4W2DWKCkGFKrQDH6HNwDeHfW35Hajn3q9dwG5ZAvGndGX6f",
  "key1": "5bmLTgiqw1DcCtnWVGYqv8HWdZBGvwzHfRTWyA1Jev8XvJ1ruDmwKE5g8oSmVQkBHooKiWmLdxH5FJtisMDJpyE9",
  "key2": "385ro4Z7sUk6qbwXoJTtdNBxwZUW9wL5Y8YQTgfXuHQVWW7qsYrtXGtDRJb58s7mNPdyaw4CkaLwLByLbTPcaAKr",
  "key3": "3knxTq475usSCTXBUiL3N9rQ2nPSEgMkF1pu9AxwnYuqCa6KHRWvnBeFYUu22LeEGDDqpiaYLRp5k73ZdaqvpMPW",
  "key4": "3w2itTmqgLQYr8ardPzPwYHzk4M77HcwVSC9NNwQcRUv6om7YgdY1b943WnXVTCbyoifR2fmF8fXWBQAHFeLZwPH",
  "key5": "qrRskbUEGRyLvpg6ZX1dm3MnzJ8xFo5fsmyXyDWqSgJkMbo2tzf6up6SfNdkrATkxpKTxoR8zGCvoi7MpKwet5G",
  "key6": "Jb8XWdKd7WFYnfaUwRnGXYQY6nNLdn2VVjMwnEsbyJbFL7JMqc7xwM3fHuVbTCbfBJ9tdCdkT7NVYPokTDXKGpj",
  "key7": "5XnfVpPZkPBpGkX94GmB1PAFAhf6ZDeGEXVgmahPwbjXqYkThpUSYpeojS79sMdwGLo8SWZ86B84D3FJwB5NbYQa",
  "key8": "GU9n4oTMopAWdcMBFRB3mNpH8anG5TChVYZbMVyGs81hmWwoyMRvGQi5M17sSGT6SUR7L9mDbsfwJMzgFLzoXaD",
  "key9": "34WaMEi6pVGE1enmPbRLsvwxc4MQ8JJixr5PzfaAY9Hnvpy6X5xjVk67eT1Thvigf1QrtGvvEotG8wJXpsDvXm9n",
  "key10": "4gBBbAV8KpSu1X4AE5utBBvQ7r8sLT6m2CtQcZkbQ5XDSndYKb3vf911T1fiE76cApScj34t2rBECeBr4e6a74Kq",
  "key11": "2HE1Z1B8zupnb4KmmDT1HQgdhKRJbbtndNfZkYNKFTz82YmXQseGrnUewHkQa9gYynM6cPqUKtdsEmBfEzeHUv19",
  "key12": "2YYFdaVFVVyhRnZDUrXEDxe6MqgoSqW73hohu5QvX7m2KwvqMrdA5P8hRbyoi9SCCfNthKU9cwoogkw2dXc8XWko",
  "key13": "4pghmB6VvTjR6vwv5KfcmV2T4jDisHnmFXMmGNUXkPoofhTGG28y5s9zuku8Lk1Tny6n2RkQToCbEvrec2PqVeNC",
  "key14": "4e25XuV8S83JjdCRrqopdP77aB5eBMzfKdsQuuwi4NApR8DKnQx5ShAjLqYzjcoS4BSHTQH5WfvACg6wWmpq2a7M",
  "key15": "3sDMUsAV7c4oScSBfg8LXWm9bZxBky7tnWqWFUembCYN8pQg27K9DdVP79PnC3nSJnGcZtG1gXkyWaYhjgqh9PsN",
  "key16": "5LoKQc3wZhdpEPfoALRr1546bnZDv5bCj4WPsLM67cRyVYVPU8KmYzdQyHt9CNtEAFz1wFnudqmZcLCGwTvi9Dxe",
  "key17": "2gCEUAVtnqRonjFSWG7rYQLefaZVgaeLXvrUL7vSNU34wa3fCn6EuDrgTFwSwF5dpGZDdcUn2LtX6Cb9b1HP9QWy",
  "key18": "kWgdSS2UN8sxVDTUz87RbEY2qiC4U9V9kqGS7jFbY3qPHVfkZRWkPuqeCTFiS9cv2iW3vpzHzQPUdUiM29cBJkN",
  "key19": "3QyecwoxThoBb5i2Gov8WbQooz7Z2MhXd742BTxQaiFbLxui7b8N2eGiEWMapgK1nCzPFx6FnsHLDoEH8qjw7ofj",
  "key20": "46wZqKTBt4cQHbhntKVec3e58mJLdweHgfsUDyrtwt4aYfEbdnMG3vioaHHgPeCCZJqaYRPeERRpg44Hq4jJyifr",
  "key21": "2GKWtMPmxSAYeTxbq5oGZ9QiUNzfqwt5KWfUqAj7VnbrzdFPE6eSwgU64tgzGwiq3oFKnta7KXd3HicT2V3YPViC",
  "key22": "65AhBNzJcWP3X1yMfXBHunf62MYoguMeQWGSXs8U28AGUes5sms8z5seFNRHzULwLFKD4u1KFXrZjp4WZ5mzQsyc",
  "key23": "2W3BzrUwdTnEXZrdMNj5Zu4ATvwXXt5Z48udL2MBxKbQD9FiRPV8bUV56R6ZU6KXftBfEJybjT521JftjPjiZmpG",
  "key24": "GnbRy3s1sxmw91XhnsamVNpYr9Fa2RGYcznx1vUUqFDaBXjQMVL4jgQLe2nMdYFoaeKuGwG72GyLW3FUbEFyiM1",
  "key25": "5ZFutt9boEboGwp4Zo3Hj8PJYeCd14sVwS118BLpeJ7LJ88hx3j8kja32cLLZ1YC3Q5TgJFvxsZxMRK5ZDn7rZQr",
  "key26": "WgMb1XcM5E5ktzU63dabXzraYGxKo1K7gCvcAxrTFEUMjNyAQx68VQFP5v48iVNBJQWu5uMNq1VkD7nqNp2EbxP",
  "key27": "26noRtUdsnLNA4aCKGW35p1PqCCzfbmfVUmqKig9pz9e8bcuauJXMq89zr66gwToJ8US4CFodvXScPqaWFYstC7n",
  "key28": "3CS81rLLbVYd4zbX6yBeUPmvz2cNHoH4Ye7PpAAbMp3rd7MhGruDJuwPUtsEpWGA2N4wGQ894fgme8F8a6YFG4Ma",
  "key29": "9vFEvNpYJ2f6SNAyxj9cHoSFLcTNRPYYsAqrS8QbXqcih4ytj42BWZvXetSmQC8P9RqAbifNL8KVp4xk7TeNmWG",
  "key30": "qBLa1C8DkV1zEJRpspVCk4J7A5pBMBcHGMCjcKgHwpaxM5ZkwcqGpv33hTq3wTms1KwcUW7VeUD5HYPnWuwjynG",
  "key31": "54zg2JVZynuw5XXbzEQeRUa7qBVfQdkZYXGLtYWDzj81V9dcfZZR62vDkcr4mmHSEuhd3t8scCFNEpe1HyKx33b7",
  "key32": "5YE6jWMGGqEa44NdFCHCPJdopYyifWY7jG2T51kFWLbutYtwXHWbkQWNM7mvSNLJsVH1wDfxvFK3KrwrgTcFM8tp",
  "key33": "5Kf2KHKR2qu7kmfJirCz4YuYuiKnaeAcbsP9FiB3cMSV72w72giFyjBFkWZAXALH3LDCMc9QrSiS46RbehPi1bay",
  "key34": "5JxvUgY5f6GZ3uEGnLMFdUoFsfSewBRvTupDpUcSXsgHRa34GSJtdP9dUR9o6MhtQyLf4oWuXTCQLhyMDStvUkQw",
  "key35": "5gk5ysXwxDgwQdddjLc8bnwFe3xu2KcQbKXpdtBAerNkR2bSy947oXKJ3tn6nNHroDAHc4iFZp4A1XE1q5DX8Lw5",
  "key36": "5KnCuE3zH9tjMPmaX9ke9h6Z5x8AcNC3LCAwTEzimaEQtLiQuNMfRx899QEmPZrcd4Gt5jPrLZGBj4LjhePvcPPz",
  "key37": "4FK19ZjVMCYyYqXEfXDLzqWNQ3BxLLsCNHKWy21qy5g58bvXcxjo7QZ9eWcurY69VgrYnj6YacQAQDNdTRUDugqQ",
  "key38": "4DmtEYWPCZe7tPwR8KAzhjvZBrQ8PAaMTcu2BQhZGRViW8rvZpQZerK52R9RogB29Yh5vziDepg6QKjL5faSozEv",
  "key39": "4ATV6wZciJ9SrPRnagSbGAHKV5pnvhopszLDiK5Px8UwEr3ipMZsGw9YVt82gRXdqjfUS2mXW2K4i3GtUtfy6z9x",
  "key40": "2bxZ2gqjMK69u7szwjeQCshhWps6WQ1VYu2M9LJEXK2B4F8WnoXHGEQsDo2r6h3kAK4CWKPjGQgWNZXmHivjtjaF",
  "key41": "62PQw8GGpgyZtkKAh6WTKgfXnbULPTDFZeh64FXWCN3UTPYaWZwWRxvLEwxJBfH2urEkjEXSKwsdnCNF1euHdWsm",
  "key42": "5Vxsp8ryBNZJQ79GbBbb9U2EEFmA9MFyh3NQTY4CGta4Beha2eNetkD3HeaDnZYWoZ7bXuBmqQCPkqhRUhrKUDLP",
  "key43": "3jvDc7hVJRTHS8ni5itN5yb6jaJLrmoX5hQf8rgsbq51UPVqU3mQcTCiYKcoNMoixfPLKGQpywQY5Mtn3F9HBiyf",
  "key44": "ki4ik32mEFnVqDmXXUFE1o6prPzm1LFGsnjUfQhCRn1Z97FkdgLCTa99FrvdZNYByjRvmZbJE7bsPYmSND7G6Hb",
  "key45": "2Wiza8wMMoVHrJyfDPVE6k3fqmkcUp1ELV2W3UjtnfovrtRWja8ByfaDs3bBbe2f5VJWzqHBucTGzwbDxTgXKJHt",
  "key46": "3SE6FuXn5TN5fYxhciLcvyndKERXcWmd36C4XPvEQfjhurq86qGEijLWB9bYE6BVGLdip5d2E3tWKvtyhXZJNKaM",
  "key47": "3pWBBEZkFz6aPVKjZSo6EJp6niBccsztbhXQAzjNv2HM5riYewWD2BCXckgWZspJ4dw21Rp1VhBDEkEjnq2EiPTu",
  "key48": "2XDnpTafeEfsGehLo2oDF52QRTvkfvNFiiqoXfqbxnHYJP1aZeSfps16RLYWYQaB1bE1QawDAHvz8QcLi94qKSWL"
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
