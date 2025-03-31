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
    "wMpTzrvXbebwgmNvtrS6u6PWYpY24p5ysgW3bET9ZKbyGrY9xJPdgQTduXfANGZTx6xmFK8wc4vCX768WLQ2U9C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TCMNP29SetJbRfaK4CU8krfFsb5ZXyv8KesRDrzZ8bSFUpZY4awb2UvqQxGWWbAj4XWAhWhZ6uwx2ypvH8RR66K",
  "key1": "4gds3hhstgd4B1a2kMsaCbwu7a7BFBRtAFSNTZxWHR1YohkK967wAozLtVb6Gaoy6MdrStUoSxTQU9AVJ1hVfkzD",
  "key2": "pezwF2V2qu2aYCNtTPAwSafbFfbNFnq63GzK4wEj44AqniHydmEveP9hoedWSFsADMTeqbSakCr3xhXRH5cwgSn",
  "key3": "2AYu3fL4tfGSmEppLJmsyZuaG9D6PqttYZLijF9MMjuNFMuFpc9BGd7zGqaRagX5tsNf5wiGg2Jfni3ncgD7RD4T",
  "key4": "2BXqfi4KTcYSgGVgGLQ545BWLZXs3J4fryX1kSYQYm36WVXCpGARR7MicFAKiUDgTRrBcN2MUgTiLYuUVrx7huz",
  "key5": "3A6db4adNiGSAXxX6SC98htNgwraiAQ6FSr3XzrQZFMB1HsR7o1UBL5nLYs8whae79e2KBA13WqPHjE4FpxZ7Egw",
  "key6": "3SCJ2TGXRkiMjhi3drFajHzjA3VFse2fbnf79tCtp8WvuGCXXunwL5ZKzckzb4cGCi9BBXKcYfqP2xcZ5MBSrj1t",
  "key7": "iorKxDBorCA2TKwzajt2ENtiviCoybfhDuP6wQeaAdUHrJRA4kudVrbDrK6Ttzk9PoNWSQ2SaEEDrFrS8QZEYSt",
  "key8": "2uGY8NTyszQH56R5pH854otpQ9zmkQqDjCEAY7M1gZyfAVfwcxGWzkvwAKfUiv7QNBjngmukouqpXr2w5JQdTYhY",
  "key9": "2ULXqt3Bd1nberYKhLJR3UxLk9APuUDzazNMkFpEwS7xp5zHNVjrA3dgDLhLF4MraRDkSrxHygJ5jpmFFuVAPZ4s",
  "key10": "3LuMeQCNWGDDbw3sYsQd6XnWhSrNJwazhChHL3kU4NUhMzKe7ZUwvGfueuJTNkXwYRxrMQapiewwVSHLZrE8v7yR",
  "key11": "CFN65X32fEAL4ahWs3RbhbC48HKS3H1PfQgbTrQnsJNEuo4Tx9ruc6a6iRGbUm8DAGczQ4HWCwf3MpZicsYjCa2",
  "key12": "2e82kP3AfLvkE2J2mUjS1LVUm2JCLsWzLveudmA5QyeEF58CqAyVPVRUEdK4yewqGV4nnY3ZFkL1iTD1tgGtYmNF",
  "key13": "61WkfvMMefFAzoZV61v2qFCiNDA6QfMsXAreAqPZ2M28HteaU5fiSZ8rz4PKwBG75J592HEEMVYgzzVSzLTMmMYu",
  "key14": "NgdB7n5P4EWVj1aHec9afmQA6WnfA8nkYUWCNKdsfktTfmDksT7oXSj7icX6W8W1se3xof3SDcS1v9hSCr86owx",
  "key15": "3WS6AkFM3sfZ2X4Ag32ftjzoNryjjRAT1GAgzZs585oZy9Tkr72RuSQAH5igbHcfiAUhaNRZwqnD4RqFY8xb8tCE",
  "key16": "552Ewau9V1rB1ffhmPA5PrjZo9VmPVbbKmdA1dsfRR9igztKZdT5dorMTexpemzshjeeiCW7biUefukep8PSpnQs",
  "key17": "4H3fsdoNgcr98pi4Wsfu3pdfSRhRDyf4tzXjEsKM2u2QK8ep5LsP47vhf3EQMAhLwkDoLRuAGfDc3hqUNsBAd4bM",
  "key18": "5NrVs9YtoXjFsSmVyLBWugzmofQhsSUrg3uhjqUd9NRgjt5Q8VgnR6DQEKcSJFDHvc6khinc3z6yRtgdZvCKJ3eQ",
  "key19": "4rmzsgQKshPg6ju4uxVgBVnJ8iJfEgB12KVCGcuCTBYbBMGyLGLLjqEWVwVBhMWkVem2qXEuwSqkked1D6WsyPcY",
  "key20": "2jqfQ7DsTwQBQJm6LggnPE2vtBtwPbfV4wxnEx252AsBDoasovP9jDecV9svoKYWZMzDXPsFhEDW2oLpMwLEHqDw",
  "key21": "2TJs9KkFt8DVi6YMHVrDtptCZQ2ef8GPTUQxUbeBRvdmRz7N7zd9n2mGufNCR6WpgVKJBuEarxnxpjMTghWk4ZEp",
  "key22": "fvNrTrhM5U1AXK4RQaoqW7AUts4ahAJFVahAK5GCLmbRnCrABVixLwHnc6kgKES9rAc4WJ6wx3pbT4XyHKhCvjq",
  "key23": "2b3efcLNGPur6xh3jdXZs73TEJeouWzW5pLzGGbMVHzHinwTRz77jDuaYq93DvuL7YuKgXPEj8NkrGvgKovvvPzo",
  "key24": "4iaojE9T8V39nkS88wKNuAVz2tvDmW2eTM9SXHKaGFtP6iajt5oNFz4smkRcXzGGKz5jdwZpBbabiSNunKEWhsHg",
  "key25": "52Te76p6CVYunp8rme45hozVZypJrRLaXJ2FJoSxNHLLvCiaehnB7bTxwht1aax5fXR3WSHiMSUXNV2Eb99g7zF9",
  "key26": "4MiP3xtcb2auPUU38iSdzeTmCUY5Z56jLCoQiRKG7V38HofK9wPcpf3qJ8dgs8s6R6GUHYjETnHciwbjRt9XE6rb",
  "key27": "622XVyZcB8JEz8gjFSVkMGYPnL5PDykPFmGFM5iL16zUktMFmqWRaY3sp9FJmGXwJWPMb1X7u33RQxBTUQRnFJRz",
  "key28": "5Yz3dG6u8SY36Wsd3tyusMfuQ22A7WGcYpvrrDuJ9Q6dEsTHGuadbvXNegFF8ySz6dgAtQsyR6YiQzVCQm9woEmu",
  "key29": "3PJfWgt5bf51Qs42e1vmKXAydAUDkH94cWYXN6kL3AwV6S6B5eZJq1MDchKRyYLWQUVk43fKaQTkXvVzcDMY7Gvr",
  "key30": "5jrpMbnbvXSGHKfUa8FEG7knKJqMf1KqyUsKNVF2Dw5SM8W5CHceR2SKrryonVkRGVqshPWZmJocX75UrqcSEWWq",
  "key31": "5QJ579NUMXwVsMUG9DNAmZ9A2eBSXB3EwsDUdo4vorz7yystenE19wjwKKyg2VxratgAvEjRJygh9pM8hm6QJB3P",
  "key32": "4x38UhpXhyjQ354pvsAViSfCSRdCjLsA8S7G3jEmez2YQTDjv7HiYMpM4Y4pT56vDw5p5kwD4KecnVGnWzMeZvJg",
  "key33": "2mRnZswLX4SjFxtUSmSgfLessTcjtq83eiL4SKzf9Ekd314cYFGiCN1gtDKdSEpM4cHmt9JSB3nVxPkbB2tA7m5s",
  "key34": "39cGoKZMZcu9TQgQLxKBi5Scj6E3PAUwyZAhXBhB4wNzcFbshH28LA1iDXwNHGbkpvaQCG6ozEwbpkafDryvBqzX",
  "key35": "3mkGWj1Qn8kkmL2ZKNMCKDdYetdHKmu8gtL1dthQM91XWeMMQewS1sMqDCDiXiDNBuSGVBh7NttwwbV1jF4gbzt1",
  "key36": "W4eC8JutQDFRLsWwwoiD3MQnUHFyBDtijVpFZ9AAhFxYHxd2bAyxsgiCHvBRYjAH6aTV66y8KMDS1VcWPPLcs1v",
  "key37": "5rqmryD1KLNbWtz4GTk6s27pt7gBcyUTdp9Hyd7xyuQj5et7fqiKjX3mwGcKedg1Newa2Xon4LumFCSC8hiFvARW",
  "key38": "4LRYnYgGAqEKxoj9jGA7cc2WRJtRhseQgj9y8pqjGW4oSZyZzy3sLGTbxerAFUkagkisVqndZ7udfu4T8wWMmS2F",
  "key39": "2NLuSvhrNhzKxN6gnfA3H36t2MC1ZYhn9yf3AfB5JCmUxnzAUHTJi1n7hLdJjrV1LPUe94FCRobW1iPHKa3yieST",
  "key40": "51BKTZP46rAWcd7FJ9zBi5ZNcwsQS44smjLmFj9u2rgqHMJsTWxDzf59MmyFtNAVTMChK4sStyj9tcHzAh7v6CCS",
  "key41": "3uigT2WiWz5g6ix3EAkTXfGTiXAVgNcUw99ARBH7FFyruaNZ1JfyBVqaHXDBSgSGE5eSWfmmpNV3jEDPznCeQTCg",
  "key42": "fFCP5pubP5XDCb2FA5M2tVyzfYtCUvppV1yxmUHb4sVWCEtJ1yv2GWPWhQWZdAxgrwihr6tjYdAFLMU1HoY3ZhS",
  "key43": "EPUWu1oNBFBENSjNUmxZPeY5nqj3kXTo4PYrobH6tUtPk4U5EWfTXo4vyvSvD4UoLTpzVu5iFceSJZ7kHkJAfeL",
  "key44": "222T7XSj36VAYqjZpH4XfviQgrwyT8FWt4HVzCrkkGRivdgzgqcxmtP5hEkdjAhWCsiVEBh5CBKAH9TvS7P2EsVM",
  "key45": "5menbnHZPhSWd4rAHo3UawyBfGFQPDtZTosnRjsnr3FXCcw8GNDZeo22CguCD4FEPqNg2CZrrQ8utpYowxwytZHp",
  "key46": "3LmA4MBbzfQK2mRPhEVJky3PuUcipRz7bCLyG9z9CcPDn3uEnfyhyjunewgJzPCYjgPmQQ3THcpau1ys78LMa7My"
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
