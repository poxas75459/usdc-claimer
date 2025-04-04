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
    "5ZcAiZfrySZDevgRkEt5QZnJfEQPtnxb5XafiKX9SamjYaHCXyQYXsV5hn4mmhKFMYcDBFWK7691uNWsQv58kVKX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "evb4eSoR3vdvSSBkTwKBj94Wq5pNiEmEciV2okEetzkGW4LdUWFjChmmKxLQannGicvHx5kjShEWPjACs4AtwxF",
  "key1": "22HL8nvQkp9gLeEQddNPXmjZiWjuAFSuJ5nZPjZ9VxRbTMcZGmVbdYMusdzSpzFS5nxzQswA8JyjNUKNsf4bnfWr",
  "key2": "27MxJUX3UpbrcBfqj2UyVS7HqqPq71PQr7uoZdJDpPiX65gVdcFLCdX1qcetfq5iL4UGvvm4KUE3aHDJnai6GT7o",
  "key3": "24HR51aAzPppG82dgS7xdi7YDQmkT2wa816xeL1Q9G6dDP6AC1MgfLy6svBjziuh5vVooPuS4CgZ7ypMbwNYi6F3",
  "key4": "49FfS6Jta8iNBsAsyNHYgwuSVuCMtp2C5uq3iy6ohZpzBJFQuT5A3VjU3MrHPVsgPtiB7vBNYB7XAWVts9w6bSBz",
  "key5": "2vtEUYSvvVSYetW56Mc1pqKGoba6vB6zai43ut6EVP5TK9RsU3b1582HeS6jMEfZkGF2jFomstHRWntuGVBrtfPq",
  "key6": "4s2JoxVaUk7vWQYvA4Ad7LZJhn5EQeCvAza8xmT8Ypx8MGRAnBNeYzwYAU7Goebtr56UrJgjchsedt3t2n6vJjY",
  "key7": "2TDVyWR3RF29Lx6SxfxoJzGnR5SnuwGYxuD4n69NZY7AcykGG5gkubnnGhw7MEt5qCg4opxeJJSrPyMiha9NiSGW",
  "key8": "3dsaNgc3k8r87qrwd8mDYZkEVCjFY3wLvdyHrhWyHtJfKCVHzdhpWApirFzdgG3qhGXuuG3xR12V16QdBXQ17R1D",
  "key9": "4DvqfpsS8hK7oVfZCNspn7PvVGKJnuAFQjXUrSPSt3cMCx5Bt91qG6KqEQkUv9hy92r7JWhGxKTjdq7Eo4RayQJB",
  "key10": "4nGC4p2kEEKUHrEbfrS1tnYngZNPm7uGosQB2edsnJoeBRzbRkFooinbJ6zMdGz2tdhnsDSFkfroXqisQzFAgDzh",
  "key11": "5zemmfGzyp5JWEVehh23EUKBXkLFkj2faTuAxJTuYst9pvBNDowfJBbbTZq4uJ4AhKHBNa11XMv8VVNE2ywi2VF6",
  "key12": "5WWc7GNRNgrCXcB6NNBCGmDNY3UaQARmJbE1xK1QApPcWrmhs9tvDxpXoAQo5xVg5p5ZwPCxiQrUnb5NqBopcXa1",
  "key13": "5FLBxYwsZXPf5JnufDo33QDKcyxxjxrYzMWGPqjeERpCktbrPxxfzBMWePrXXuPsqAPjKLdLpoABkvdiDvRhnwbR",
  "key14": "3KReUipzg2Q3BU9bTD3gb5xm9geCeECmKRnZSyS9geuPa7EDom6wcKT1bZ9qAqfh4QgngDHPcRxSgJEG77oefPqe",
  "key15": "3Nav2iRMdF6LiuYk5UDp9v4TuVnPuEse8boeVhg3p42mvSziFJ6EpLtsmizEW6pezxPSv14JEjNjuRj23hKUY21W",
  "key16": "pRkD6qZ7W6HH2jkCqm1tS7GgfZ2U57neZHzMpLjT7cFG43zQgtTzi9EdLsiKc6ze5VFhSEyq5hPZk9wE7FqziJ9",
  "key17": "QforRKfCU22LmnF3uVjMCFriDU1nf1AmqH7gs1qQp6xbZkMjG9aABnrzomBk6p4zu5w14kS7JyA28pR5tm49ngN",
  "key18": "2DTmUoDsJPHwJxaPKYKwYJQe8gkRGyLLSh5TVCbmJtFsPv2PUNWH3syJFYf23eRwEAQGmWtPiW2JgqkxKwsPTboT",
  "key19": "3aoG3KE2K7RwpyFsaTEJvotTWyXbBWyY6YXoBeVKvEJ1iQy8Uiippx1fpTGTZq7TBme1otAJictooSXeo6AzyDwk",
  "key20": "5ofS99btbWLdj7npy9KTkcrbnK6UspC3RBQUnxAgBLmoMMPi8MQTpHwKTrsz5FHSeRbvWC3gP3y5foeYcEXYvbfG",
  "key21": "2493WrW7Mfk8GgB2mi1U4Qm6H7uDL2BHCzy8yKsaMpFj4XcHwsxKVg5qj9yaFxyNVr8UETK9gj3dVFdq9LnhSKCk",
  "key22": "3CXBHQSHQ4vk8y5VnB3v7p3gdJnR2jZrEgKqQaExKFgV69FhhnFFNkSDeX29VppLxEjLm1QoXRP4xipMVefREKqa",
  "key23": "317x5EzP15kcoXUNHwxorHU3R4tFx5WqUW53Ys71WqUD7BF2BP88pZNCSQvQEqh5EKVnvXrnqUyS5jgVBPUUkZLC",
  "key24": "3A98jonbNMW2oPxtDS74phdVm5bdX48BeAP5HW1sRgrqeM296gnvk9Pd83qwEEwBjq6E5792L8y4NhdAprro9wr6",
  "key25": "4towJtJkK3Ey1z86P4yC4GmCifAWiqQ6dkobprUexGNfq6ZDHFREACzuFJLNEFsZ4LtCyQxhqWrb2GjNXgyCG2SP",
  "key26": "36rJD6ng3zb2vFFrHbc2ob8jLn4vkLF1hVTaphDn7y6cwHX59WV4nb9N2NNoRRvnhCFCPue4cW58ph4sbk2ggZV2",
  "key27": "2oxM17dkNXHibEzFNdHegNre6vpui6CjDvT7Up4y29xhL4YMuffFmxMibgUMkLWQMSoQhZAhSTMUNghpZYUHMFY7",
  "key28": "ru3RzRM3MiXhJpEQQY6gDFirUgpzMeVt8fTXRDQxENo9wfzbgSrrQekoiWBVt4d972cM6x63NmR4W3Y8Qh13hcv",
  "key29": "23CdGUnsdSpoGKCkkg4RjRKqcPmr4aeaVc7MCt9dudMXaFRh8m7KqKU2jqVh8Mxg4TXoXe1MdkbJp8u266woYu8D",
  "key30": "5qGqUGwECNdWnVkASicFUAAh4hq1gZKSjD8saWbVqXXJ5dE64aJqJS7254mdA4PosN2cd2i4V5LS5Zeso31u471m",
  "key31": "wDrM94PPKPzi6ECcV4f8j5BJdVfjgyhN2KFzmVZewWcpNs8croTYV3gPpseYRJoax92a5X59uarAGLQfRWAwMpK",
  "key32": "25ZUDyvRHPtVqRbGu9cUNKkfYSinEF5pb9Q8EraWVQaymPrnEUsrLQVzG3URaLseXi1RmyCpECNc5wzrgUKdq9Kt",
  "key33": "3WR3o62iSkoNS1dAP5V81ABN6P3rgWB5CUAYt7XNxw4iqD3PLYWWovMwL9uHTyZ2ZVGRxFS8iAAENgCu5pja32Mf",
  "key34": "5j9o6zgC2vP1DRWUzrn2CedtXGgsLDaqv8eXENQ4AbywrghjnL4WUxrxvWTjirhWrBADzLTAxPpy8zfGXofhUJVU",
  "key35": "eZ1Xyvw1szGY4Gb1mgtfLNxx2dXs9jgZx6i1VMdC7ctP8pSa4qWV9g9pCYNUMbajcLpmdXZnvij6GHR3FjF9KCQ",
  "key36": "38JXYLhLDKVq2Suzyfyc9aZy8CHGSTjbCtuzCF7cXK5zjZjaHxHdiCE7rgRS4DNVkYY2tsEvrtNGJ6gAex9RPDew",
  "key37": "2fv3pkdVVnVFBm6pAUgWAFQg4nBigu2tetLvrgiPdiLDDr2uH2VGKqe62qq9NpEczxiaZ3HXZbPCxjaeSF4MdxKU",
  "key38": "9FTZeNGZhBEJyKWxDfYKXrMs5MwmUDaSV6VPK6BAqLrsNAeK37qNQmQT8AxBpygjr1BtzH8ZExNKRxU9LF7xG1J",
  "key39": "4RdWD4tEDQiWm3vAbjb23ZMqa8sXexbHHhnAYBykvTWzNTwCYpPqvc4G1yVZUZDqVBb7x4C7c6NKdgt9oCwTHCN2",
  "key40": "3m7kNisqTGCN5iL2jzP1TNLN1CgLiBRAv8UYSF18PVg2TkMev7BKVzVfiBp8cNbtKysfRNaBnx9t8SF7j4zDKZir",
  "key41": "53qv6nxa1ysshGuAVU1z85wmXAYAQQPX7xdMnwGUkm2hFN4ZQgk1fBK4ub2F8zsZ4mvytsC536KAEKDrtscQw3yR",
  "key42": "4ZLxnS7GDHfLKmfGKDLu5WNJxUvpFXT7h1kwQjAvHfajg5Rtx37KRxNAk3whyywtR3gJx62w6FgYA6F9Huz3XJJn",
  "key43": "3uq7dE9Kq4okWiB3kZyPEHZ1gmyowCQV2Cpf5PjXTX3KfhV4iGxJ3dRWqJzdbA2F8aTRPfK1C8oLfhJAWrsHYpGE",
  "key44": "5GRkExjY8JqKoaweyVDxVuoPJC8KK8BVszumS3XtmKTYZbafCxtxcFR1qqkwVerGQncoRAeWjT1XXj8pi7UBuANr"
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
