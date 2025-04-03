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
    "3bSHbSy5TiMvpH9PKjwc6YgExfrHhvYELzmHGW4am5oVGsg2XFXo641YVtquHQW3xR6P2BftgHvfFUchFzkvWvC1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tDfE751HQ4uxMqB6mfkvJwSnnGi27cqyTZB8zfJcekTG4HRGqEcW9JE6egFPY3MFQwbXnsuipWwWUT4jMeBEozp",
  "key1": "Jbr5hrbpoLUK4dEvNP3skn4bgRgRGSHTNJx9VBMkNWrjrodgTQ8oksKTDrWseCyUiXea74EsjgfJVS1YEzTT9AP",
  "key2": "sUFTeFUnRaEdB6oZFGqHXSoGjfAXb2WDqzkpew7dkrH93BqB8p7APmSvdCfySPcpTNBREEyuvFEhQgdshoLBXca",
  "key3": "2cd2SixpL2zF8wZ2T76hBqhhhx1VPcY9fP3fjQ3bFHBN3VTZ7igXswydhxEKBYu4gAspvkRGKXqjMnJKovs5YKET",
  "key4": "3PLDGjvFYeDCskpK89SgMX9V5oJqNj9txTNkJCGw6pxBmc7r5ums99YqgnMZ6bpEV4CrrpsKRyNA9XtM87JC3SNN",
  "key5": "SdPdFwpF7UX6ofDEDwYqDsFdhbHhBhpkvgoCUro4acjne4mfCqK5SdeKHu8jDDV1qJzLgYywT6tDX4BJJ65973r",
  "key6": "2pVoAffoKkuKft48mLHESsRe3C6c2vBZJQCK76Ln8p7CcH8KmdGuB1p5ScSjw9tgegam7pWaZARLei892badebGT",
  "key7": "49YjdKCokjxZq2H7uHRRraLuXTHnji3ponEyF1zTcMJ1Kq9qFRpWv5hTecvtHYar3vnbAd9TdB3WdozgLrcqiNjG",
  "key8": "3quDrdnGmbDFgS6XmfZCCDJNuNKSfLfWipW4PP6jgoe6vDJi3PKPEDq2sXiSeMSXLdYDikCJKoPv127pw86vVjNp",
  "key9": "JGrAKM34b5ZimzfVMBgxvPAyLWe1oFp8WpBQbRLLJSxnbqEtQbLzT8z9KRQWv6o9wdz9CSKiaNGMg4z4DsyNfS6",
  "key10": "3r5Qo73SfhoBSnhkz4QntU5YX6Bnd7bk28inzdywpZuyj8hNLH8hwepfb1F4G9uoCPn2g4FrzpUzVmGMiZJ7b1uX",
  "key11": "3UMuhMGdwZ9k9gGw37YUXQ5Ynw8oiPDJQ6SP7BZoyPp5ZZLZgjWUvAbPFLg8ifgz9kTUV72vyu6aT2jbhifoojP6",
  "key12": "3qFNwyjFw4R6vEnRLAwyiF6VBzyYGmJ2FGqByVUzWcgCW1M54GJ9ST2VWAKKgGrw5no4pcTTsV1nPeA63nV5AEBd",
  "key13": "471txfP91vseEL8BXHiGH3P8hzFwzPJpfHXDVtV9U4D6E1QdPSU4tV1ewRqnhnKrCN124DYLT49F42MzbsGQgSiC",
  "key14": "2ieeYe7AF4WJQsDBEAsSzJQDmY7q3JUpAt61uMw1osDxeeJrZ6AQEhHhkqPPujG3FsPjNX59RFftWVEYY4HeJo2z",
  "key15": "31pjsZeo5J9C9KGSyN2mxUKu6kEnkwQkgdGmUbkTCDNqtFr4kncJsTchKLFL1fiAb3wJWA5wnZ63KzH3DYLv1PW1",
  "key16": "MSzEPuou2jco8BpRkZ6Z5NrFQncCRS5vvRzx93pHXwy8kh3sdJN5tenzeVBtPA7L4eGB2dYBasNQuDi48DqpEqP",
  "key17": "2tT7eAMiomT6EJeJUYbThbabw9sbXQFqba4LzmNQs5iNJmpiVY7V4QBuKuJK2iSceiJea9NMBzcmDKpTQAxEGQEm",
  "key18": "3oZTVWutj4oci6pwiAKBwaBAhtSscHQXdyaiNJcEfc3jFGvYxSTtTgUbbbqRxYqnkkeBLq8kgFRCoXMPxVpb2pue",
  "key19": "52xdn8GSay3WtEAVFQJzgTfZ3LBCJmtosHcXaUDEahfi5pkKXmkSimwERS5dNduDqD9sXL6wjLfQfFBo4hNEsunR",
  "key20": "62McHuVZYCRYeGBoQ53gsQBGLjusKLXxaH6joRxFnTKoaFLKyMrLyAwBB6GN6ZYJGdwF3crSKtdgvautDKSxFE2K",
  "key21": "4Kh4iK44K5jyJnp6ANXXTF8Vrpy8KGYB4ZgCoG9GJU4Xuw2o1QkMJ91VRCV8MG6gJQXqwS82cxMrMBefYCtqQQ1q",
  "key22": "4erFVSdBBedSS3hf5nq3QvC3Y3yC1ZscYYyQg9RLSMUkhgmVpRuvkwuPhTcCio4v6mXoTUtnEHwoqhZWS9BcJ5ev",
  "key23": "4i3AqeqitNxufCsB3txpMhMF8BWcoB9bCDfewb3AH1gN7mnUfMByenngbfRu7JLS14to47mUZ9B1f3k6Mi7tWLnT",
  "key24": "3y4W5rEmDw1TtDoVSQSgYWafoLReNo849cVAy7ehJzykitUQc4iEKVCuS7wZDseiFvibAeJAYMWbsyNF82jecRe3",
  "key25": "wjAEHkmFhP8SVZtWkXip8hQJRbFjyikKpJd6JEFHsww2szBxbvTskXv53MQH81t9ac8T1Yp1bktzBanXDLWu5Qk",
  "key26": "4UuHvAPcG4Uo9ZHSDjitFuxW7LrbQoAKjuemQ5N4Vtircn5MydZasLfKJXi1U3Ysz8B2sbdDeWBkZhLnkne6U4CF",
  "key27": "5AgcoTGEXn2BhVczZvamH3gDNPSBVpcNth998DKfP3BnoWEKMg2ziMrV8LZwr5cCuHCBrCZFDaojCDqygr1AVaCN",
  "key28": "26uEJ4cS9ozA9pczc8vhNKLWugwmyXBKx7R3bkQ7RFnscVKdmvooxAHtD8PRXHXyqrQrTGQTe238SdCdHBNgoASR",
  "key29": "34hRrwiTN9GHd2C3PZV9grSSYDFytqhBBprvcb2kWZV61MFdJGtDAL5wWtrzAN2dLmqrBJZUUQx8ka1Dkwu3UCjj",
  "key30": "4kTNJJXd7hgvooVv7XFk9eCD4kjKp39yMr4jFA3a9g6WuFtixnXvvtSDd8RME4oQMt3HV6SX91dZXeBQtqmwEPY",
  "key31": "4JhyZe2SFMbDfAb2jLXXorQVksj3sTTDCcczuJW8dvbRXi5w49o1HZpREbsbyen8iXUyXRCsV7Fn8aexibzVtE3L",
  "key32": "4JZXo4w7V8SNta3BCi6VubvuZvq2XiqxhbFKdcJncTc1yyWw83edfK8wkoGs4RPHVfcYAw42osmKgLymyZN2PzkX",
  "key33": "2XjEH9eSn4P89ChU3umYtxKL2QNBCqoogzDoFhopVkpthGgPdJChreBWwy8veS8MkGxeGwdDBAzW4obn1SvqXZd2",
  "key34": "4xyjJEgsAoW4ZEteK1BZimCqQxoULoKVi1c8UtS3KUsvULEsxiEcRXB77ttfNd1KJ1RvjAciNoANvLprx5dKrpAA",
  "key35": "4zFJNktP27oD6E2C9NM1UV5TJzggdDUv3VJY1otNY2sPqPfR6ZD5C1wT6TLXd2qus22e8r4vK19kjyzNTPxoj6Ay",
  "key36": "f97mysxadp85sR3jbAsgYDMXB8GDifbjiP2bTN1RFUY7V439rmabCV6q4Gkrp2QfNhvjyzpt1F22CtopnoKFRZn"
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
