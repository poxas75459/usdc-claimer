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
    "5toSbsTtmxMRCuo4bCF3uwuGRHJnDXHbEWT9wpuUK1ffmmx1TFpyJxktzCyfoeRHE5J5KPDjryLeEakPWQt4vDgN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JVWNw9WRMSHKdxJXeL5R3CHmprUdVDFRZwd8KrnGEZ1ZcBQETfaw7RfahReRQpXgm8xk3PMYa14EbQqdVwF5Eqe",
  "key1": "3zpRaxwYsyqvRq8idZWNRwmq9ZQwstKFtPhT3Xh79LqR8hUvKuLRrCDS27QRdaJrgi7aZJhaNHtVgrAGBj5FBJog",
  "key2": "4zeYLkX1t2qtMQHz6qGNN6ZY9Cb9knLdxQYWM9xTcohVupe5W1B5Z42kLYhr5zkbVjgEnh2BR2kDfPMcPgyBpQG4",
  "key3": "Ft7eZ8RMBrvHJWa2v6734YfNnzXFK6eUqemhme8JgNT5rEaDPVsM9Ff6UKugWhfV5kFp8zM5mqyX6q9kPafhubi",
  "key4": "5Wz19gTdx5VCQb733KCBgmE3E4QLKf26kJSdZm7yct3dNv2FG5u4mB9V7W6GhPjUiMNXnQHMEm28kPvi3QjDoq8J",
  "key5": "2EsUKUpkMyu8q8zsr4gUL5gbiebtkMsw8coXeJkA3rXTzixpvE1LnDe6KcpqtZnWsFsbqhHGxFEHBpaSo48ZSPsu",
  "key6": "2GCdUirogaqs5fNgaWy1MTvcpyky2xRjHedS6WQsUqy8JdpgKtmjt2dop7ECuHp1bpWrP1GCGe1CPpwqe5YmC8RB",
  "key7": "YNLyeGqoHohTBM7h2pspkqTVbJp39HHzGukWoaHfuApqitSzqGrAhdXx5m758tPR11rHkrFGcSJepkUJFRE3rbG",
  "key8": "3UTHeK5wWZqAESg3Fz3poqEsd1o4jRQjwq1tANt9xne4Qsutpe9g7svq92NGtayw5Ac3sBTDrwiTqWay7WccbTJd",
  "key9": "4bqqwW4j2BW17zDDPsPssJUwD14aQ584EVyDJCzWGYBHc1cbpDyRdfKWEpFVYfH52KvJkUr4PAB82d4DEUJSgZVj",
  "key10": "3ouJSSN1kW6VqMp91DqEsXbty4TUf2iwTESujaAVxHurLZ2JNBKmfBZo4s2JLwxwMXucKD5ZmDCeD6kmH118tsYK",
  "key11": "4qcPeUQJSMjzDn339VLwkEEmuc5VT8VQx91Kv8fToA1R1YrSxigpX33EEHH1dDhfTf9L4KUXDbiyqFuiy5wjmGYC",
  "key12": "2aL7W4f6zJuSu3qvEg4fMenYXHLF2YUzSrV6sxRr2QRDJEnXRQtrsG5inevcc8wojarVuZtrY6Pvfm3Ho3iU8eUG",
  "key13": "5gJ7nrhY88bKJmH3DSw2VN4ugEtA3v2NY7Ht3ywj8tYzW59siqZihsh4TdrXWNLgxRvmWoEt1QVFS4QzKHDbt44e",
  "key14": "29YZTaN5NBMwyJhgqUNBk7JF6BS1ZNrRn15Ud3pZ22GPRDdwGnrRuxyHGqrJNnbw6nkfvDrbRhvF9KjCtKn1xSqJ",
  "key15": "9QvxE8SUzzKcB8NQzEKWVNSEVg4rDmVnmcSbd8v7jKzgKCbqAaKSgqMGB8K9waJNRcCQYCqQSseSstjRy1CkuYG",
  "key16": "CnnfN6SwQN6WUzjR2HLTzjh6st72NYgic57yAZk7cKF2Hv7HJNKfBPfnXpXSAx5VYeQyWP9genAbZmkWS7SN2c6",
  "key17": "a618qddEDBpFbyb1HRvpwHs9oobHRBkRjtousKZhzd9MBmuytQnBYoi8aHGrb86PZPW3uxdtD3qk58djaSngEUd",
  "key18": "5g6jdJbuQw8vxWqMwvT2a5pU7TGKo13LeRrt4wCBGzGHP8qbhwB6ZwJJzrRn73JxXoRe9P3pnUNF1HHihgzTT2V1",
  "key19": "35GKbKdN5Lmar59vPNtgoQ83dbNa1ECYnFeCbnFvToKmgbejKfBCJtoJfn4X6KuEekkfxLuuJsYbVYBMkPnMFNs4",
  "key20": "3x8dMmH5j1WDag611QZfVxRjqszhefPuWCN3ru2wTNvs85sizjJnH6bzLo9m6jpGx1e4GGQ51byHMQsot7fYQsPW",
  "key21": "3gEg8FktCN4eEtsBt31YxB2waVnxY2da1MKMNt8Paq2tGKuqkZdbUpXUGbncRSUTb3PyiqwTMGMzu7Dgf2SAzQiX",
  "key22": "44R2nHL3DAPmm9exEXi9PWjYxK1mcp42jhsFYxt9s225z8ha67Rcrw1sbr7c1UrBe2eu7Afyy4xMhHgJTfGa1oe9",
  "key23": "3v7JvfbueFDy1HiVKUHWqFEGcmTEi1Jn3uyMSN54SrguwEoFsqKqCRAgyCoeFNXSUsE2qpBtu6H7FUTvB9TozYM2",
  "key24": "63Hbn6deYWBSrN6LZ83wsnhVTYYBnXUhVFa21MLnxBz9m3zuD5akUCMhx7uqp9J6jBGb8sQtXT4MyK7jc9H9qG2p",
  "key25": "3hJL8aQgCe5ULHpjnf74rWEkumKYzfo4VvpNxbu3RRvteUUzv2rSg3FyPpyDLjupfjZxMD5ifqCuBKVM4XHaByf4",
  "key26": "qSStFkrVQ7LgURjWjrtSrhKWiBrRspcFhN4TTCTzA5bNFUxvuizjBMUUBdsadJ786LRB3HxC3MUe18ojnYudLLo",
  "key27": "2jmQUJeLiU27yZ9mjhYfyiAYzGDftP9WkjtRgw6yM5ApguGRQV1UV6pVUVki5NT8dpvLALoGpkpNBv6phDv7JnaA",
  "key28": "4qAc5HkWQqZEfzdTWv6oqdnjPYFcAGfT5p4KxCQZBuLhksbKyHsihWMNPpm8a5LWpjKUxx5jE7MYTS58A1oXUzbh",
  "key29": "2yWEKoDSjoQwYd9oern7YuEwjoWWHEkp2vZFw17FFoSqeUXkcfuWjJUQiVhyPcvqnAnkehFLoa1CaTkE973cwLMc",
  "key30": "4LU5GdfsxT1VpW3XGBcq9iqfqBrojepJYXayHWpRvr5kuSkA5GFLnmgzQsspManAzAaEM4Nr6CyxBsp5QqbADwiL",
  "key31": "28mKkammkorWEe8RuQcS12g6UDym8CBy2d5Wwxed72dBVFGxXjAvAnLGcDF8dXfuwNh3McHsrETCwKWQ5udvfRvW",
  "key32": "2Hs3yoD5vmJC5zLybHSXFaRxCcUnCjGX3UQABbRHFXmY6GfLk56kLqB37Xci1BydGx8K2nAv7F91m5Q5eWYYY8jS",
  "key33": "mKVaHimPvFgZLFSkcUz5R6eZZ57ZJ7Hh1zErr6W3WVKdE5ASJ4hke938ukAFK7sE5N4KfePbiWuZMt7RdsUHpkq",
  "key34": "57uWvt5LijsmeLbSjkrYsxNZ1LkZ7Xc3pLxxGqxvwkQjJaNgh83bvs5hUd2vBtSy8VKDqr7SETicvw9GBdNJJEok",
  "key35": "3ycB7QKiR5uV73cBTKbT1VMjADrnm9nEe6fh16VqfHAq1ywAooGVtUWa6ktB7ar7gcDQVX4htZUXpDbDDwBEz8xW",
  "key36": "3sBLgHqQZMShKpXTyd9VeTnSm1gR7MZA4pGjxDoxMjP72wtAuHxt1VAJ7cABhSdX4arFzGEocWzu6uL74k6dp4ei",
  "key37": "SMJNuLDQCF5xs7RjptpZBUpwvwsnqUdmFBTmwQXnbXjJcC367riBVNuxNUwydmVRJmJgXJ54WUSNgrZ4NatsaGU",
  "key38": "2PcDHFCmHFsH9BrtFt1aDth7xhgjVmiqRvZN9JpUXeFs6CCETWKGvn8rzmTtEphEmjzanB1JWN8mRCwXPSTaMua8",
  "key39": "2dAxgg5ysQMtAQt1GP96TFF3W36xuk23c7NiAbqsqK25Mw8foy3NsgMUSgoexhdgVB1YvteJd77rpz7z9nLn2g5m",
  "key40": "65NpRFfiWouTcvzrKFMnAHGiEmm7AK1nNwQYVsMjrE4X194Q9yNkD7KS5dsTBMmjg88U8oe2Wkri9adRDXucS7e7",
  "key41": "5P1RUDiiTxWx88UPPEBc4cGSR3R11v8fV7cnjr8xTr8NNc944o57Si73Krcomv8avxee23WAR3VVxJFJh5ai93Jb",
  "key42": "4J1c8vxJ8F33JQ36JuYRWifW6LpCD9oQCmqu3jgcDAD5KmXEcZuJ1D269ErRaVj695FUpqoyjWgQwPiX9wNZGj5u"
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
