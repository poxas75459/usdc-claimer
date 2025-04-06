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
    "65Jwa83aaxcatq9Cr5ziAwBvti9D5v9xsYhHUD6aqcXgFPNVe9C11Q5W1hYa64sXoYxHY8uWQudZX9C283fjFMMP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36WR6ZMJebLwo8bGZXWVrvpDxKfS1cXcB3grGFSkx42Vaa2JQe9mpkwVKKiexsRUVtzsrPnpr5tfP7xZFszdtTYm",
  "key1": "4f9P7wRDRx2kiuuismAcruGom8jr4YwKF9unjkvE17ryVWmRNHjmNbo9UZWmCL6vrq6q4no1fEPZvxQMUf7eSfZm",
  "key2": "26VQLLUoAhjJEz6nUtuTbK7rQmyWzWpyVr4gxEEeLfxxdykzAHyLXNo47EPzdvMT7HrL9fqfrWoE94sjErYZ7fQy",
  "key3": "4jKXqPn2nRzBYUCFexc9rJSLVfbS4aS9DGgRTbrtXKasroPARYebtCBYmq4Gctig71FcwxhVjB5u2fCoQ3A2zL6g",
  "key4": "34JXBs4phRFPrFVJwdEqportxdhcf5nStp4r3BPTzrW8DaHN1XFyDq1WXfNS7HnfJFJMJoTSPWbLRvNwXuAaCi2Z",
  "key5": "xozDL7A2LqfDNti7DmK3thbgprEEd3ERdcagAm3286HQuhGtizoySpCzZMJGaFu4vcD1fQUWK9PyMQK9gShBbtJ",
  "key6": "Ga7tyuNPEJyGfzNHA4yEJVp5wzJgKpzy8VbULtfAvGPksDHoSc2U76Nq7zEpmLcua7sKtuTeghz9e4dyBS6PVKt",
  "key7": "VJQqHiJxSbFhA2vm7nzh1bb38c96dWUZdALkQcYKGEKdhxQ7xNsrC5SUTFonewzThe594HwzNHxPgSgZiUqQP79",
  "key8": "3fETYQPfbwzZph3Pz5Z1pBoqsDsLaLTCvyrLd3c91n7gq1AYVZuuPLkRxfYCADdoGbEcCYakf45ZeJc7uk41M32R",
  "key9": "3fEZQoAwirunqHbr43Csn7jXCbyuGjKmqELKYegfEzZ12Es7w4Q3UMGENa2h88CszKLeFtdxdWxAKqfmifbRvtzm",
  "key10": "5S7HWEg9n9XPmPJR5c9VUSVZybZRot3EeNZ32HyiTzg7u5QzR1tscEpifwPeXea7B6MxSjnzCM9dHe1gfkmxEYQf",
  "key11": "MoPVCJmtHyoz5vCg9NaMPPCpyQExibgKm94qhDDi2MJTZ8VkdToWJP5TT7XyaMCcAmKCARhjDMDqMew87Zponc8",
  "key12": "3PN9uSXSLBynCJYPnsgVMQjrJJPVaKPQ2zZ1sz4iuk7QMEAjhUy3RVbeyp4ZRUoFmiVeNKsb88hgA75HE7vsB9CU",
  "key13": "5GX9SjPBjzF2vsMhMp2wnJeizf57ykrRM8GiE5K49ZxUetHVbEtRbDjrDjZBJiAQRYhTJUzybsaMMyzBDyNZV3Rv",
  "key14": "2SetBfwFAvmemsEQv9qPvf8w7ALzLeYLanaKHB47qBfeEpeKHo56UKk1kuH1dkwCeWHW7bSpXxKChZyMKHmsKQT2",
  "key15": "UtLNfaCk8zBE4VDhm8c2CHv279bQttBxDxHFg4CKFJt6koPUCAyR6UHC2RTXA2zk5UAf8ZWqZJMvBnmts3pFeap",
  "key16": "2nMrHeUV52eM422cFG1ZXa1XZ8rr9zHQQhE6uy1wzTcJXt1mJborJjKoiFveibb4e7Uno3UyjYsFSsrr1oaan87J",
  "key17": "35oExYE26y7rhmCSDYQFrSzYCtJBxoxadEKXFxL8ttjjqz5RaSqSPgitM6JgZjC8FBWi7SdLxwR9qKxFKh7Skiaj",
  "key18": "3etGbiVZQGwbTDwjUq2Jk8mwAk7bJx5mWiXx1YecDwgccJnNzsyzAbQCPDqwZUgkSXij8QmRj3xzYC855KKfJ9e9",
  "key19": "2fwVzJDV18VRSCrevnzTmGbmgr3LvrXZmAR43iZct8CPZbQG3YnZh3eYAX8boaLEMwZDkPyxXyHhyhLQ5sKKuXuF",
  "key20": "2cLdxYoCFJ8hqkgetoBC5xsire62q9mdeH27Z8kETgNWDjivncnfJ6Kvr2qXZ6Gdw99LuUUiGxqtFwe4qcGumND8",
  "key21": "3ks3KiYkMwP9ttY8WRu84xGHQ9kN6vMeDYZMTfpX9n6NG27S4RXMxYY2RAEyoFrHMjnQa9xeG2sBX9rsZqXnT8qh",
  "key22": "3z6wySbkY971RxH1WVhoM5UbPyHjawekCdJCCioWKZrMBNd3Ex2gDTrv3NQFCXxRxe5YX9dWXNYBffnRnhUPJEqV",
  "key23": "2iJbdNGQtvLJvLuR9ZJY2BxYKQcx14cMTHvZhBVannuzk7PeZ16UNhZzJjAV3HGkhcYQe2VbMe78kjq9P2EGRMoq",
  "key24": "25EFc36f3p1b5avVAp8c4vWE6eMrAMoK6fC4NZf2MeFtcApNxvTqoLoXZWU6znJHqNqubTvkSUnFZxBeAXvifzEU",
  "key25": "MRZWyN3nNWFvNo6xnDE41NWnVBaWBdY7XDx1SkqSfmFvPt6STniDYVGU1pEAsoAJ6y4MpJsQ7HXaiwvuSyde9Ad",
  "key26": "2kW6muE5URxe56sHaYvuM7aptdeVLfvZ4qR92o8nZMKACrnkLWh9ycb8zD7imp5EfHtMi2ffR7uHT84tY4gbVTKE",
  "key27": "4JRsKrRGCZWp6M2yP5Vj2ntBo8EDJ2PK63Y137rVBfUDqe4NXKVAKcW95a8LsaE5d4K5oza3vidcQeEj91ReN1ap",
  "key28": "2cEH2ayzEqHVWANkz8uieRY2K8wfSJ14fBHoycSva8mcazw3x5uGF1RzaNuxTsStUxurUD4wmWybWwGECm9odASe",
  "key29": "4m95sbcAvYxumdRrBvs5YFAHaFXkXtyxSXh3mwQVrUWfMDwAckpTYsssUeBFyfdthakLj7wtaGfa3yC9zz6Ex1Yq",
  "key30": "2sbuTWWjSLW3f1EPtFaj8ouQvUCKiJtqTjtbV5bkPiM34EhMGQxYeGycJCERXWVM5a9JtJF7oFKB65vDrtL9xupu",
  "key31": "64tdkKCDD6GP6YggWAyc77hApbpJHU2XAoPsK1n8aoMg7kbHDSg7NpkMSaCSQte2NFw6N8KDbRhfBJ1K7Q6C8wEr",
  "key32": "4Dqaw4JceSJbpi8ezeXSegbpx1sa1B3HzuLQwZZRnpCySLmFyfCzt4XQDDHJhP3JYpG5YdBHisJRvD2ZskYXMwim"
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
