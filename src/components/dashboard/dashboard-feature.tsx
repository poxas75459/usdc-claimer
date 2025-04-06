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
    "4rST1fK4eQhGJGcQNnoy9Tfs1RiLXQ8B48z7tpoQhwev9Zb9bLg15J3tcjttjxpTfssQjsLJkENbM3onT67WJWL8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3irhFULTi9WCB9uzxY8kwkSkDbiPn2B9HyNJDR3HL6wPN95pSEXJPJBsALeCeeQt7Ai7sAuN4y56YcZ4HLX7gf1h",
  "key1": "2tmrJm5ktrLZikeA2gbnwEQeuSBkZUK6jykGNUZCfHZVi8pfu4HiBreobB57qs9LpbxqdBhLmRbL8pfYxBNCSgEN",
  "key2": "2s7WkivGSduSWo7C2xTETin5Nj83YT5BLBQUWaCJ79F6nF5mkpDV38FUmafx9gu11PkHTynQXU8umTeic7Xjwogi",
  "key3": "uPsbFZ3dEtdCG7GQC4fQ9qvtdvQX4dUrR77tLWNE5QrYAEXFMKs3LRznzvyGmT3u2PY4nvDhUtnJ6iVJ7fvQp7D",
  "key4": "3tRrUF8WZEEsHVfPhYoEfjrJgkhAuomnxNwGXoAJbYwCxzgVkkSNEvMMekqKrtZ65Hak87Vc7Nd4NqivUTvkypRw",
  "key5": "nh17142GnoLVAiK8TVNk17zpc6SgFuTKKBqnvAqaH4eHAnkGwTt6dhvUzR93p3A7CxBrACmnhTU1YAqJiNfPpd2",
  "key6": "351zkAZKZeyyayq71GsXaKczYbdbWUuxBzpTgpErdrbmjnZ8TjzohuQJHxCAQKdUnDcWAbTuwg9ygKLxGQocrqV",
  "key7": "4CNvastGfrv1csyKDoJfiw7JE57oBjKe3JpvvpbZhbFwASLGzj9CcYRzTixMN4UuPqYZwL8VSB2QFLw7Ss5DAyd2",
  "key8": "G1MgEQQVKnL2cXBw48PJqCA2MbCZ2Un2PCAjkD6AjMa4AvGd6pNwScLeDACdrSgEY63SEUmH314LWjyX8uML7oF",
  "key9": "3fFz6iTzy9FMzCHgvb8ZBBukZe7CrEX9ZzJgEwJqSnrS8XzHcWQrRXyXgAmvzTBgv5SFka2nMnsoNnxsmdiaQcjt",
  "key10": "48xpGXt1hfBXZhD9nzsJHcYbcb3eGE22agwMdyGLqHb8MKoEkT2P5px3ZY3fJUjmUhJUGRMt7ZEMwSyJ9P3XHi8d",
  "key11": "Q5Cbce8yq59LL6PS3C8pyaaMC6DSXkyKA3FNsvwNSGUkjA98Pokjshjdrrwi1Ude7Ur9j9zNBZtdE1wwgTavQ1G",
  "key12": "4dK3LX1QsrAQkDWoCuuFL6FdEX3YKaxs9Dja7xciLAijAFGP5TMX4yAuTMuU1cN2Nc8vemp9MPLWr2fqbwLjuyQJ",
  "key13": "PhDYTMTYb33JBoFTUL6h9ZeJzEEEHD6vsC7asRC5VndvitNRXfctFs8agj4JaRKWyghmsHmLtnfKJDuNKSBaddJ",
  "key14": "4atRVkRRvzWsQdbbQKAAM3HySX2BqH5R8hefb6GRT629P7FNH6H9ud34Ec7czat7kY7F87fL6Wba6w7vCvdzpHfo",
  "key15": "2NusdjcW1hbR3khRM1RgFZGzDdq9JAMxwzoXA5MU1jHBUyxTyKRxSTz58SMm9UWVzxCNg6UNaET6cde42ap22BCn",
  "key16": "48mFpVxreDGEZjKgcHEQAvR4yoLNKCN7eRdQyXw9U2ryuCFDqi1q6eK6XdBPzxrWf4QAVbvcULQPtWyF3nezh3hX",
  "key17": "3NmszYr7buXYUXNj4teoprfg6RcCmc1ziDK2P8uft4PVh6EhfwG2mJ9mCqVLjNvj1WGcPXtqSLS9My9KZ9KLNmNg",
  "key18": "fq1A7mm1NVUawxLMCXkRRwN298nAQFhUh1q5ZbhaJ1qJ2kgdUrjWGsoU4oiHkBacLijzsRXzqX5LW1DxJkpZ6fS",
  "key19": "mYRMwnYBxAf72eZAJfTLVthu2Pc3xcUPozVkK1EZycKhrEttDgschRJ7GDsCttwajTx3e9oW4C8UHPVrxJBcnvZ",
  "key20": "2fPwhHFL9JszZQCJVAZLsA82C89VNwniBhmmTbS42eWRi6N4htHsgvkqSpet9AsoaucA8oxXwj89cbbTHJz2iGeP",
  "key21": "3yqP7Hy3juKUxP1raiK8ehiMVc6LWjC8QgMf2b3h3KPgXgwBRPBhzYG5A3aW18LczC1N8Jjyuf9vEbWd1chFJZ4o",
  "key22": "2JmMPSJWWLgT2tpTikMzmngxn1up9Di3Qi2bX68yuxiRUjM4sVbuXJW175J4xpFTm6TLNJfsHZSdUdQHm788KPoY",
  "key23": "3LQwbV1XF8mShUj8v2UtoJVhfFW1hGUuCs1K3CXa4Sn39oQUvncANHPdTtdCw72o4rsQ5bYEfTHkkEg5iBEmCyJu",
  "key24": "3riiYPaiDrX8hJsLZYrWKkijiYxCv4gGkGSq3EaDMNvvVQFan3PbZaus3HBHn54BZg8La2GoZVm3fQEUUzSH5pcf",
  "key25": "Z9cnjVuPjijNKbEtafQv23ydoW7XXa3gp7t1Fv5JvXw63BtuSCWVyixUJaya8KYUQ5AxbCDnXFH8eX8mW35gx9w",
  "key26": "4yTdQfa4q1R44neviAiX32csvoxAC3hswA3DZ572CjRdLCF7CDrnnNDe5PW8WmC19161e4No7scPnDYXPLfiW3dq",
  "key27": "VujwRRvPyAb1EBHzw8yskMza5HBo3L4sWWC1N1ZAE7xKLUT3VgnQ4CMpjXXGoyGjP6hcNEvv69Jr7CN21EgqKZ1",
  "key28": "Q6b3FthqpkiPpauVDfkVTwGj8sbqdjtA2oGKPq3Sb9mq97xcAhG6qDzc3yvNazRHnBc6Dtkv6vSoQGDcXwLkj9F",
  "key29": "Vbkm2bmzZYFkVs5r3LkKW2DrPx7SJ2rk9QwUgLpfzAygJhvgZpapkxQQnrRdjxje1KmUS7woJp6L6W1bqZU3okt",
  "key30": "2PtDeHQc5zG1ZL6pZ5ZHiQQQ1t3nf7xVZieevFy68ppGY7XJYXizvrDtEHwVSHst4Hwejnen8d83qz2pJHGnZV77",
  "key31": "2taFViUNYNcqY4nDUcLA3P28zoa1Ko6ki4QP3xmHTqGghSoE4rjBRqefyiumYvhc4hG7QC533bpn2HahvRBcHmN1",
  "key32": "5cVKs3naucVpaz7dDf524tSdp6gDm2qhNzszSLg9UNRGQpRKcqgGCYfiWdMDJtBsHwXpCvfLDkeKB7JMnrMprURm",
  "key33": "8SafcAMR8iaFJVT8j8izUKbfQd7pC4ah9R5FBbqkk8inBBNuHHXK6AZ4MM8TuRK9AdkYqFVtHjWyjxr8rUbwgxT",
  "key34": "3UPggqL222thQ3teKRruUpSt1QvZXRc46FujpuoEfi3yAqt6jaezRArxhYhPTKerDjnRMidGGpuyD5G9gRBxQ4J6",
  "key35": "5e7HPXMgamfcLbtnuC2bMrUhL7KTJB6eY3WLWaaTAhgLkrpqqbWHcYeavPyCoHZkpeCkYCgvEVzeMSUwZJL3umVF",
  "key36": "39HzzbpSjYCfUb5PepUbmAkSV1WNTN7w5iDuuF8dujV8okxaEwgZknxz2kQEV4ArcWghnaPLZ3xMugtFLpbM88Z5",
  "key37": "2nb2BNCZuQ9qJP7NTBzWtGSfSmn1fkZgnswct5T5QMGntJkJpHphSFQMbauEkxVeyrqMMzAzX1xaXv4eXMvCw25R",
  "key38": "2DMyx8dtbrNcDkVn9S9QjRtgsXJNBZwzUGSQet3VXYXDKAG1LMHuY1GVmENyTb9vEgSwCDF7813XGMSsA8PgPT7S",
  "key39": "ZXdeddeSuPnHErwBBA2UAJyFefGtaiV1LHr8SwG5cjM4HUQVb341qGE6DWXpeWy9dgPHcpnvJYSG5ztmkajevNX",
  "key40": "3rsJZp7g3aduQE4hEiVgbCBe9xCPm3vYbFB8HzwRvswqqecoBQKP78F3u2AQWuyhDsztHsQx9PW7VCX13LUZZduC",
  "key41": "2Ph2hJJnbbznqdY7aUfENyS6j7UTzd8KAWEMZizgJM8UrwTWXUJN5VsD3oS9fU6cjim945bQhNcrhrnvP23pQ5wa",
  "key42": "5qGqJX2ZiCc1DzmNDfckbhA2bjkPLd1ZYJ9JC8Gk4NZ96qnTzoAMAFKziVuZhAfVuHQwVWbG4REBQxfAzefnLLc6",
  "key43": "5utzVjWDYNwKdwHjavQU151gU1iKhFxxF6LdKkrKE5GfGwF2WmomVPaj8UDG1qSUkoV4TctxZjudqJ1keDg1qBn8",
  "key44": "3HTFRX6FCr8tg92g97S19xesFUhWGiXJv5yhsQUcY6qpzA6KiuN3LZj8BP5suC2wfpc4zVkwF4ynxXUy6B2RPBRQ",
  "key45": "5VHFs5gZ4Houk2YXpEgTRcKupuh6G73pAduVaUvJYujLpJrz3ynpPr3yCcuohGVVE2REhwsVqpznrEuHEZHnYieA",
  "key46": "5Z1y6MuSRFZLXkD3duiDFDvurPQWVkiFxMivG2VpobM1H66LHjJXjjs7Uw1RWahsR6DsT8ZZ4sbCLe3V5PJjZZSk",
  "key47": "46iL56ozYTCFZ8vs6baR9mNvWUcraDPPzqEZwAQCasSh5Xx24NnBSdPxj1cenxyL6BNg8Z5MJ2H3FBXNvVUUGw8v"
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
