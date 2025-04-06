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
    "37qEiJfb3RJkp5TWPGfub71nTH8EA9XWA1yKY1LqQfuGBWSCDa56wgnUBoCFhcyB3XDGRxiie7gQWTATnH3C4DSG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oa5ntbxi1KhhWoZZ5w4zVvLFnRmgeFmXL5zpJrSm13Ef6iAASaQGc7EQvSPh2j35pvkp1mT7sgaxG5Vbqn7sUA",
  "key1": "mbx9KXrKFHBXhpszQRzsDAsb8LdE214HNfre7VsmAJppidXWm5aegG2fn76GyHidoo6RDa9sbsiqBCTzxL1U4zi",
  "key2": "ABNGUJCfWaEAb9UmfXHMKRAjaD7Yp5cz7LDd5vouRfyN6kZWiPKV6oFTgbNLs7mS3PBnAJNXvi8EBLBT9petZeg",
  "key3": "565aFoAiAKxjweBYeCp3y29KMJAQpXuX3VwNfXDXm2T9VCBC9HNcwGdoPi8PJW52YYaQM1jpFk7MyAgP4LmeFyKk",
  "key4": "2HvQArJPekyFdhYQZw5tLwJa2bJf8uSq5nafwmyLJtjtv5gN61YDt1VJhoB6fqXq4jnp42DdgNVvnsNV5CNZ9YCF",
  "key5": "51bvHGzcYhirkr1oTwvvoFLBWJy4WhcPkj5fcvKDvNTENamCGLRmxf6z4Bz2vmjs1foRX8zsYfsWmWTeM26dMcGW",
  "key6": "4k4Dz8VSgcb3GPk6WhjddtrWspi8GAoeacqzELp7ifvqi5qnkC8XzxiEGH4NKtc4SeBVYGJ1o8rkfinddjHnF2RB",
  "key7": "3PgzAKzBbH9WPkTKGq4HPt6YynKXRj5EhZyVNqVNKPaX3DASyF5tZzjiY92uG3TYZ8hwRTNWrz3A96aLALzeGVz",
  "key8": "5om4af8dCP5ThUp9BxoG4WZfvics9GY63Yj4JdkzCALy81bpa8W9MK2i85ZxHmwxbi3YBjkVJw1Wf34iucddMQ4R",
  "key9": "24g47uNgvNdLqUZPrQ6voXvmxMRp6UgztHXnk8RpVWnbivq8x5iK8sWtFVxP7XVSN3Eq4ASF9JfpQLyFJtrT91C5",
  "key10": "51DBwaLgj55sGStdJRSuXr8RtzKhqb9jUDkkZqoGEA1Hs8dvNAq8f9hg6J2EfJzcXmdDPxqt7sLAyrSNSDUpb1pz",
  "key11": "56CcX5zhaup5oyzHZVVbZJrpRXVShHsPzcDVg7eT9gbvL6VuZUsmf2EmC5kNyW62a84SMEh74sBG3ZAoVCwX1nxm",
  "key12": "3aLVsmHwJSu7KqDy3yVXehS4TewkBbmM1zXy1JjkraCykHoVFYE2hTD9yjbXpJaoWm5Acgt5o4Yh9m7oDF7K5PHB",
  "key13": "5EgkSVZF2Wi1k46FGxqwnejQfMXaqDUKfVezx6Y3E1ZzDgDVLA7vxqi7pSMr2Ggsmo3yPUMtVoPMFt9TUAoJjLm",
  "key14": "4xpmkYjHHBFFU1RdFz8Z8p7BvJfVYH8dVFY95NxMRjAZDLsLoxpB1C5eBDj7qkemMrotAxHkPvw6FdQ3qgc6uPXd",
  "key15": "3JEAXm3VttKB1XGfivmqZb2DhzwdSZwSb92mZhksxXYghpAoprdRbTmrDtmpYaYJHndinwoyViH5VF4obfmgh5PZ",
  "key16": "5DXbgr1WggG47CrnyfdrkrhMaz8cAnkRsE63HeJc3Ew323AjxKrXHWn1ELmoAqsVKjuSCvgNZUWgqbv4k4Eycvue",
  "key17": "5Am1i5YrkgtetqmAB8NJfDkjyy8QhiqpvdzKciFs5LsmJnyMdkTdH5tQUmT8p7i9C1S61iTx26YLwJ95iUmQzvgR",
  "key18": "N2k8pbYwAtpcwnWaMZxFdFnGDgQF9aCwe9HhnFNNvxpgKfhTKpSnCKWFVi928BDhN3xWJZ3vtsg46AbrU5Ciaa7",
  "key19": "5nk9eft62kujJUeBeNfTGb1qTJXRVk7gVcADmr3augqu3VbzDaHeTT7fEWHVtAoizxEvYcX999hbUVQ3ePGWDaU1",
  "key20": "4AMctQoWJzuonu13v5eAbpB8wgM5gA7VqLccmhAMgPN6MnDSjnjDthHYsSejmdnqwDLUMaP984sKcpGDarSDEugx",
  "key21": "4gYRVaBhbUqsnNi4mj8TAxp19Qk3t1uUKBF4d7Fjf3SakUxiQ65sA6HQ3u1KVhTrEGCaHwd75aWaP4ysBaQCZeiU",
  "key22": "MfMXjR3e5eKybQPqKGfFf6M2y8JRS9ifuvgVAebFzwCFEmS4Np8Zs7SpAjwndDyfjoCvHvSfgWxDnAvvXpZxcSr",
  "key23": "5S69DjZphCwigCJeXW1L4mCSWbnEbcUMEAFJuJc4oQJZMT281P6MT8VnVQujp3kQGz4SpnoeuS4guCeoyy5sc8mD",
  "key24": "WNVJ9vBmviMgFCRifZ6iMBySzUbtf1yoP8Ss1GKM173fnHsoVoaSmmdiyaTMwZpkJpYMmSVarEvVCL2W7HXSGB1",
  "key25": "2PTKAAKLsrCBAswifCyHm8fsvfabQtoosBkcEjbJboCHsUGiFgW1jFt43oyDH8FedNae425iyWGuh5SZQW6BqKWs",
  "key26": "4VfHFHwoGNZZ1eEDbC4YpFZeXeC5NuCnxugUUrKPPhVpeVox6dHuDL6TzAWLXTuhx479adNCX5TNvFAt5Rxk4f2a",
  "key27": "2qikjbGWVD53sSqE2ixRUeY81hG4EZxnCKL64VpS5ybQdxbutv4saVuUVxQSvqGSFnkJDqxte7yuu67ARPFwSjAx",
  "key28": "2svSFWzvnMX3dib3ReunWwpBsv1Cx4pDg6oFwQQGQ4Uhsso4RVn5Chu75Grmy3ApeYxkt7YNjqixXpsePmvrsLir",
  "key29": "5oDMt6bDXgBztxVEFsKDPh63ZapmfyJoYsupqEBm3mMA5HioLiec5YqRwbLJFCxXGPveF3G3LckGQJyXou2TFXyq",
  "key30": "uSJqsLXBBMkXA1puD6kbGCPph9ThFq3UHfrQQHNRd5YS7UhWuKSEHYJm3Bo86Le7bmfvhR3Z53jTHmU63xay8Np",
  "key31": "NpTxLN9YpAv749XtsYVSdyL8tTPevmkk1DhVz31JXCJbHpCkZqZQoKMHLrtco4Z3M7zg4EpMFHXpMfdaZMsPPzh",
  "key32": "5uALx4J5MgGfudvuGcbDwkf94WJbbE2Ns64jo3iLuwGdSQYHA9SnCG527kLCu6BTjVkZsMEPWS8SSRi7fjnRciD9",
  "key33": "2Nqx5Lptfv65WiBeJuXYttBM15dUFcss3ov29T8Fw1j7joVtiChU8dQ8PP8WpQt78DvQGeQPdQofGJYCDXAwVC7r",
  "key34": "35NPYH4aAEmJAyP9m5jCd3rTEaeWYT5SybNPec6ne8wPyEMdryix2fgF9snFvWyE1RS2TzFS8D2vLpgHUpGWbpxb",
  "key35": "3jgMqV5LpveBiQBSPikiQjbWBF8bvYh4yc2LL7EB1s7jDQknpWh3N4Xuq4urjcvi18Zdg7yMYJebAJVCMf9CBKEp",
  "key36": "2MXh87LdFmT3mH47PSZEkxk8AQnxpFnWqGm9gV2W5J3v4JabgCuxHngaaKVdZVNRsnarHFhEwpJCLvtzzSqwwsQ3",
  "key37": "ScysD4ifedasCnSmA3o6caXrjy5JX93CBAv7YWBnphHhRvLuWsYJzv4uh2eJ6jydZ5R5muZdmNgdn566z94FiFw",
  "key38": "9fPVqqxu6X1mSbkP73Xj29tgqQj17LhLYT83aCaw2z5aU7PJs2tTjLWEr5WrzJbMaey9Fs1xqzKNqhcYer2CM5J",
  "key39": "2NaogYRmRNPeiVHGfuhQLTGMARVN9wMjZDwnbpdZ617XRYUfJwKaiDbDAKePiMVu9iekKAC8xLH1Qu6WZMTEaQd8",
  "key40": "x4RTbgjFFS683ZvwbvQ8P4wJ5vCqnVPLZYc4CegiPFnjmjpLqMz14zWPpZNytW3RfsRkbQjsDAWmunpowb5uQT9",
  "key41": "t8K8VxikRMFrFs19a5bAd3X9Vj8aMRtw5WYq7cniBP9Q1PsYqubakCFYX1qkDzKTUt8xuW22kzcFqG1A1nCwnm3",
  "key42": "4aLjARouFGHwjKQ688QNXyMAx7He3N7tLzxDSLWWK2NCs3jBT5rJ5i2GVCfj2jqjDBAxhrShcAqREGN3EQbeaYzj",
  "key43": "2CHsGGs9Aj7pEe1hRZMSubsNggHaK4oLuJRLHvnF38PfUgBMCZD7Hz42d5VrrBmtT7CaSvvkNaS3t8djYVdN5N77",
  "key44": "5wy4C3XM8QNXA4nyZKZHdKmERoHY8qDZRL42PbJm3iV74ghec5qp3tKr2maj9AZnc85hN8jrUc1y7LT53UMipBqB",
  "key45": "5KCnjJr3kPeQPm698PHtz6cQngwjT7jBG9XFtYumyrSG1GPz79dwpRXPHtekSs2zzR9GFeKUPoWPKwMnGbR85ixd",
  "key46": "2fZhcukhxqEGsrZyWJzRjKfB8dn8UHZFaxDqx3YWSmXjcWibLstiLqrv2qofvYmBwobjQwiVj9zQtweioUvYdruG",
  "key47": "59AkpZ7t14JTrHsbBbA3qBXqNrknMjFDSorXncPGQp5gBGD36J1UiePitxxZRNn2oquLsmub36Tak2iFY3Zr4iB6"
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
