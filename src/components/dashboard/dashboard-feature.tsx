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
    "2W56B9EFDkADFKqZYbEJCkQSGc8zWDkNG5NmvjwN3NXoRyPqdtWgKqxQV9TzBoGac4aU8EzkpGRGJfavnjohEx3m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CtRWvW4otWQizYpx8P4fsWXCKvbgwdEQQBaq7uCFUuWD185SAuVnGoDCD35vRahWGtiE6xqvqJz7AuNvVEstLLD",
  "key1": "5mMdAEHZC4ixQkPi1ypsroqpyvDQYUwKH6ZoqBPVK4azN94sRhkwiPQ3A3YcStKqVBgpzL63vfz5HNDRJCTxSXw1",
  "key2": "5ysGJ2KMsxgUzC71SZasmh4yWE73w5QBcLa2sfvHrBRDYQwCnr91tAezyvgjUoeqcqt6iD8CyLswxY5hA6bxEEAw",
  "key3": "5YHNd9zdPV52djrMr5AV8Gxtj26aR5DddQMZH3jCRBZxKRwM61edgtw7zgxeZuuGBDtba8s7nmV9L8fMQxdY6bV7",
  "key4": "63MHQqxH5w2WCwb3zgNw9RRnYoQMBim4Z2aheaKbNKZspmK57MURjNrjkiN8UBhv2VVSjBUVdY566ghahsP7MyHE",
  "key5": "3ySqDDiyrDDhPLM8xwAtno4wZv7UjDbMREzJzrfWTpAtsxcbfosQt5R3ZfGmy34mZ4sWYhz97ZCzHzqE3TcBDhbh",
  "key6": "5BZuf7T5qfXdCuuor2tSQxC6uwAemLv5Q1Ho2P163szLxZZtxY2ft7GVtkU2oQwYx7RsGsCppes2vTJhrS8DCwnb",
  "key7": "2PS6xMQAGDSNE4QGYiknoP6yykvCNUrVpQLESzQEqSQhy4XKVYo1VQC13K1y47ibGKfH61UKEvGsNDFGRtUz4Frm",
  "key8": "5ApyezSA8UGzKpUb1c3nNFFiQSe2KBauP2YJs14YQhBEgpWTsAR2hB8Mwf7CbqcegYTJEv1wxx56RX8V8ie3Pvzp",
  "key9": "3iJNqzzzXvmQ5PZBzBdQVbUn8iS86U8JJ5cWsU9psDTuxzL8s8ihbT8kUcAPgZMLioU7QT8kXVXjfu2LeF3R5iJ3",
  "key10": "3Rofkw9MQAGeEW9YETafp4gKLdRreAAj4ycfkh5rQvQ7SbVAQxpbF4h6XkANcnk6pKKQazNWNA1YvMhneyoT4kgT",
  "key11": "4EfRe2ezxMcMc29UgNXBS3o2WaCASe8jeLtn3sKytb5UewN9Eb9o6gUp2mPP4TnuPJoxRmpQWYBm7SDdeSRiFNcy",
  "key12": "2EGCjVQpLS6gt1AFA7we3fWFa84PUkQeE1EiUwJM6Yw14JF1vP24JkG8M7KvjxEmS97Wryemtf6cwF8ejRh1Q5mV",
  "key13": "484oP7HH43YtHKVxDDM6dBS4UWTWYpfAZMHvySbWYX6ikRXKGErV8RGiHde6KK9adxRxPfAMy9DJxKhmXgVbyXpz",
  "key14": "5NDPQvj6F8Qvgir4AnBsGFRMTsoZkTKmeGzVJAdXRrhuak2fk5bEvh1FiDcDWWkGy9PiqYHzfDz3GTEhxbwVxYVj",
  "key15": "31dRvG3zMxjTvzpPJQTEdLGoGZYd9K9HBbbptAzwFQq85haPqeUANepGGifzWMTdCCoS4FqMsgBFM91F2Wp73hTU",
  "key16": "3xM9JHyujyQr8CTZqX5krmAP5q2zyjoBedA8MQZ5cn1Fu3tDuq6hSUJyS3XXFnzQZ8P2qB8sQQEkBsh9uFt2CyJD",
  "key17": "NAZeiBs1i549kAFJ37K8stge3BJs53mJCgEXpExDs7Biar4kizxA68tsZKgnMyUnNNPpX3pSwbAT4Lp1Zw1SpbJ",
  "key18": "2eKSLiypHR4XD9kPvZGRYkSURtD1PSDcAbfBVUB7q5w7rtjfvjLwSMTtFtSv1dmypbtpnhYJxD15eBGDyj9pm1H7",
  "key19": "496GpBUZ9QV8VxZQ8LoSZCbyDABVBy9G3FP23FhepnizyPCYxUMksDx8igY63kNup5Fwad4MDXGE4e2uP6VB7sQc",
  "key20": "3bQvc1jSBfyMGsER6TXJAuA55UNFA4hw27B6fdftqZdd8uc1xZZtD73FV89fjavUCRUd9ryDERtmZxEKyggnea22",
  "key21": "4L99N73DtisLmo9TqZFP7DxJxtBLBc8jaE3LxVQtgcVMiXqYusT3QY6NyhFZLVK3RSvADRBUrcWbABxuGK8dwGTF",
  "key22": "2CMQeuvYf9Y1cbhP5oWKZ8jYvctueF6Kdm6qBxqfgcSFPpwMkWMRbpsaXdS3yPGv3Fcd1K51BBQkpD3Da2zkEKgo",
  "key23": "4Fjh1ShRXZ2CgSkwZe9Q2bGuLWstRS15mPQ1KUsjarLUZa1jn98maVzLxBkQGvej9q1rrDDYEzHJYSibmoLqXbLM",
  "key24": "2mwNZjRgEc5Ewd7zgG9w3M4Ey2KVjqGR3HC8CpSyK57GcdL65J8bWJfDEo3VzeAYu37ALbszfCvRaGGrYA8cYVUM",
  "key25": "5zpMH8kuRwfcKJDL178GMZTtysfyH1EaZRj75wcyEW5iBvH2uY321PpPY25bLLVsxDyYgWbCGP3AKF4XE5MFU6PM",
  "key26": "53MHgmBH48pBPV35HCjCbjqi8VG5Wdmfmk6m1TNtpVHrQYdQ9479n6gw4yfLPAY3566NJPR2FLXCqewxGDZboAGJ",
  "key27": "5bVr1hHPHodYsjK9sbz716nD7ryAvvfViL5roZaaMGvCVZT55EqqSo74aFiWEpEsMH2LzmKAPbvR1H1Es9GWfUtq",
  "key28": "2FWnux2CQ8v6jK4mFpZjaBsxtFn5sfaVmvddpzvA2FhMjZ3pL7Ns1RCVhDBvDV6iUavXqUQXJzF1WmqsnDW5SnD1",
  "key29": "33AuK4GL2L7durG5KGMGpgBF9cGVjtnuhcrYVcv16PcF4mXDsFNwSHwFXdMVuigSEuNuDkrYJRmfexKmht2wjFgk",
  "key30": "5xYFR1a4yKx6DNNtmC7rtZVNYtnAqRuHuzEGvJZmZbYgvtr8RL6BNMPTz8mryunRtGU3cykbVSdkmos3XApBQskd",
  "key31": "3Bk4NMDXTAupBTEo3J3pa9J1ZXpgTQEDwSueLBLFjTEDytVA44begbKaSPsFpwfgme5EMyhRTyd4z1XgVCEvc6e8",
  "key32": "4T2NkjgNDgLXQcYnmGSNDpLbdrCATpyvB1J44qatyymzvpi4LBLn6P2gWS6K3V96GK7AuvogvNgsRBmyb8LWGYW6",
  "key33": "4zDbbSngGpvVPE3SceM4uHTzwzb87u8K5JmfkuP7pV6QFxiFC1Dkd6Acj7Aw7yQpvHG2FZgD25J37aNmKpUAZWQA",
  "key34": "63NqbGc9CSVC9GhLDBWY5Wi8dnwDCmykJVrEWacmgnPsPEzjyBw9tzQ4hnnU1fKF8cZjaGAE8w5jvnNDbVNbghy5",
  "key35": "Q5YKR2JvyPJrUtJJL78cepbBw3gDeDXwVYAapXmpWv6ZrykyBz9xjxsYGjDMSA7km4NrvNVT82AgiYSVqyCz1LV",
  "key36": "4LKRB8pQSzUujBwEZN7rMnvE422wSzJJVAf4vTnsobbvRHNtARii5bqdvDFQjEetoLpMdtTni28uXywFwogKyLqX",
  "key37": "2Mgdty59T1MFJ4nx3UNE7UoASioqsFfTm9dbSsPwnzCLaXBkqfNakJRHhQhrzzhehkkYjDxW1hxRYPPNWoERC1ra",
  "key38": "4VkFVvgqpPUoUh9ZRNQdTyFdXbpM3wUypGrUSr6BRX6rFJCFCC5maSpcFqnrCwHRo6V6tALvrSpoQgZzHn2n6xJJ",
  "key39": "28efiimbHpzpaKAVy4EU6DPcA6TxkvhzBFYS4r5Ue69vCsJYdQzwhQ4g7Lza9ScxGzuvthQ9cgPt69RyDmwSkoeU",
  "key40": "2Eba2fef1VfyLqUQyPF7MpSCFpZs7ycF3Xq3r1zB51PwWz15GqxTazvNajLSH9mBjFhsvYdro8wARX3FMiFTYrAe",
  "key41": "3fns25vugrrYwSkr6W2AFsFMeZHpgqnhhD8fwrvSMdV5FX6uM6SZsWJZDQk1ycwWWkxybh84AVq6rQpCB9Eomas8",
  "key42": "unGCYL6aKGdEVkehJtBEnKhiKqzHYuCWsaxuS2udNDRG81d6rNgxHpGQWmSJVcaZZv33izby8ybXXdtFmJhpYn9",
  "key43": "2bHSJ9KXyjowfwwaxgU3dAUqHKjiGxf4MqHNSPhECibXAwfPZrbzX1ucq3LN3tnYfRWbiZtq41KPGbcFamkaSKSe",
  "key44": "2KKJ1P8sPTZVpkSe5RwXryYqLfgooBwgEYzAoa2gEJsua3EXcxNHvqHvbQp9m2JB8n2hKR2tG8zCASvro2nvAR6t",
  "key45": "3jvzfFhBV4vaDSdya3pgkMDW5S3JA9HYiBd7Z5qhZbUXaeo9vs1oVZV83GcXhsgDeKTjm5sTv14eTwPTezVfMTto",
  "key46": "2Fu2hZ9nn3eLZKAvv45EWQqi6TS67HR69d7UEarRzHbEaExmJhsiWNQj8EtaoHnxsfBseFakzi7uzyv1ghceHhge",
  "key47": "2kqbePnvtyGpHyyRG7EdmvHh2A5dhQSt3W1P9wqNVTY7cnEUriGibmsk44W6WH9z87j3iubXMLAh7mjhaKmvtkme",
  "key48": "3g85csyAP11um4ttk2ZoMz2dZ2RktccajRq7aDga6ooWNxsQEBbpz5Z5pq9BdMWAaiavQRhdaSD4BsMXaTeEWvzt",
  "key49": "37vQ57ChH214wYUkn95Q7zdgjkRXxhZrRGt9HsTEfbo8A3Jh9CxZzX8YwyzB9PhqpdKoWGFPr9A3dhvm99NCmZMx"
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
