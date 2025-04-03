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
    "4AtCY9Jc2G4CpnvA1ksu3ahiYDpnrxPWhekmiofVrUVYdRnHSqTLoSnkxPET6M6vccsMpvhxENsSFfB4JyeWvPSD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uAquLtjQBcJb3iasH3FX97i4JmQa4UQEaNZEhMrv8tG6bfJAXyPeinaWhXVS8sGRHyyEVCXyuQSwshqewDxghv4",
  "key1": "3YmSKbKK46ieG3Dw5nHvpa2B7VrvzAhqati2aUEMTU2uNvkjrd9CbZ1JJhVFav2BzWCv5BRuuUopNyStxQfwgShJ",
  "key2": "4JJUhZmL7TNw9vgtzsUU6QkEjXZoh31NN8EUoNMmfxQ4A9C5Y83yd4GE8WER78jP6tnPMFbtNoHdQcDwSo7xAxWE",
  "key3": "2BBnjYFLKmYhHVzUEJUU4HykPX68tgfUmp8XzmFN5usoZBFWH4LW2m73XtcKmS2A1Mh8tzCuTpyc7G4GSPq6aJZp",
  "key4": "4XiHbm8HVN7ESdbaXQuxEoAbjdVfzX96G1jhPVQvk3y7JdjvJB54D4guua816xGPqvN85g53gSsjfocyh8hzhEa6",
  "key5": "36W7JovpxzRaperSdy8SJZN1ZHuwZqiwryR2MAeh7nVdGRR9GK9nmds4ddZXxJbvTFLBWGfdNHALuMTj6wysTEvo",
  "key6": "323pJHRGTPyXVjLGCykEBL3oFdwivngygwAQnXiE4JXhTwKDjpPLDB8qxmuLuJnBdPzrX24qWFhME3rgWcwQmiMc",
  "key7": "5jpVchjMwaELsHYAYTUjtWHKmtBLZF7fbZm6T8Jco1NY7t19W63mzthXcKEJZtvUFo58LQQxtujK7bEWufekz6cP",
  "key8": "3UXSdWuuRcBVc2MqNWiJqKQPoyn5fVaSALhX3ZyM5UgSe3HaGMfBM1EgfDqVKtamLQfEj5DVvaP8ui5uEjEkYaM9",
  "key9": "2bcB2ksvzHjbpVpdJeo68mRAZaXwLLrsFMqQRWML5WHJh7oH8TSCDSB7VeCF6bXLWvrrGvCdVqFK1rgjnXTS4zHJ",
  "key10": "3N2fx8KQYUxy66EaFZQeERyHtUhBwBsgzwTSA8YpyL7EQkeRimstSBdSqe4kw78ToTd5S7DcLYQLyHwK8B8gNqVU",
  "key11": "5kYYZZCWL7jjEpMqXThg6ETaJxZAEKwaKwEHvndEdPDmebJqse92MXtpk7fn5qVDvyF6M6Zz4NuW4kt9e47iiNyH",
  "key12": "5wHW2aLJmATrm7qSYei4XumFhm9mjoV2uCTuQPDatJwW1QkhgscFRjkAKyhyyVTPwgB9gcxDZBVCGh1VJ8rrZZuV",
  "key13": "Q8DMj3jtoGD6g7UHsDtdctd12NGJnWkqeLyEweinqmcz8Ay3p1Z8NfZe4SV3tWw8KkxKLzsLT2J4A6UtiZ8DFRa",
  "key14": "5XzM1TDVno2Yq6VZmci8MSAUMZSMyeTqVk5kXPQMYUvQKZWuTKSQzMTctkJEhGra8kMWrmjmi1kteGHKKHnMmaw8",
  "key15": "eeNzfdGrpLazx6gnF9AnYAUDNPTdEWATviKJaeNjPPfJLMuxBhiwhn4qgd9DdWiDJiPRTtu8wbYqJv5Nj78HLwf",
  "key16": "48qasAeUZvmXj7cuK2sVTTagEnp3TQz1c7DBZc14WtMaLcEUTq7MDUj63cjn9X622QrRVf1gc4MNUCBNTXXygyG1",
  "key17": "4srYtaPgEfnPMP1GVrGZ36no7nJPPfSxTvaQv7f7Di1CaT9khrbApLsD8KujX74esgnsXkoGdmoYKZWJMsQ4Ux6v",
  "key18": "5piho54yhrGvAP5acgevJQLw4xxVySvbCqFrk2EM6oBfT1vXkhw1KcHS9KDSpYZFuC9JzGjPPSa7RpHspcKcmS8f",
  "key19": "5H7dH6oF7WdLYN8UoiL31aMq62AucGHPop29ALZZVuDy5DgdAbcwQsLSvUzi2NN6ngx6cTUxdZMXSvfJ1RFQjiMB",
  "key20": "4uR5tPZB3ufp1aY4pEuq2Xw1KeSeW287p6WEWkqcDmJm1HQMopNpF8bLg2oQMbNxVhmpBLPGeBxXLxNvRqupW7U4",
  "key21": "3RwPr1EGPgMJJikB9orA3Wbi1hzBeYUgR7ueS6awQYt2VnAauQcrnF8MCzBWXAxgtGD7teLeqPD3zBukrpxCnHxe",
  "key22": "4B2NCsq7DTUEWkDafttqzpcKLUHqUcjLz5paJ1GwWcMhL3UHbbdAUgKKHHgemxaH1gN9C7arHUM2incbX7U9LwFe",
  "key23": "5MQudC4N9kcdyU6j2uyt1ke5cU42ddWaCFbq4vKtuji2ENuc5GRxqrNqVrU6nhHnJQe8mCWH4aBYD4jXmQtZF37F",
  "key24": "YKAc5pu2Ar4ughmF1wp8b95GNC8WM8RFgEaSr25VBJLh3xhfMUNjLo8qBnU4jr6sYQZ5gm4ZmFXygzKMjCAAaSG",
  "key25": "65sVbRFdgDDVrXHq9ygoWsu34fokGJeMZvChah9xb9e2LrFPoJKoieqH36BD6XLpS93Z4H7hk3JqtTxCKRPSypN3",
  "key26": "6GXjLmD4SLkw8Mm6KReRfo7FbMB3dPPKt5tuBZoyKm6AchcvAsdJCpcnP8FmUe3BNJae2miBPxiPpt2YmRwFV2o",
  "key27": "4mFjWHZrvhr9BjJ3uS9eLNQ6uxFTQEWD4N54reeg6cGvenbXgYKm6NHjAZks4eNfANAMcfCiPptErBL9saEssuEF",
  "key28": "4qHSgSDi2BRVtCHpAsLrYNChZE66sApgiQUjgKKtzeiKU6NtaXLRrQQCXnA7c8M7nspt56vuu8Kn6iCqRMskj2UM",
  "key29": "3MHiHwZGq24EcQrwMBDW4x5J5oivSqupnyUsGgVnXzMYHYXVHCMc5LvQRgWC9goxb8JubWEJNvV7PojN9iedzxKa",
  "key30": "9u6mjsiCFy2YpzZ8zxn2J9fmtpe1pDtaF1zrED8WZgsd1aeBkWdqJ2gSFk1tanurkW6HpLrcvubpWykNXGqEm7H",
  "key31": "2h7xgGUMKnRDYguXvxrcRNJQPYBMaSSBqebsgzdkzNiNTC5U12xoTMyRrquy1H9WfQDfrWP159PB9WsaLaFepPyE",
  "key32": "wQUko4ZnX9oxb8rdZ79LgVKTy8KzLHfhRBVGuZ7868BKCyJBs4PaQzvNddVdtZCGSVY4CiaiDXvBUs3t7a7Ho8j",
  "key33": "664JMadne8GS7s2skwp5Lb4xgHMzfnCH9k5ey6MzgDEb8wgFEPiWLZ9TMCLQbsZhnt4ipocZE88UQSwth9dxQBpo",
  "key34": "3vorKqWyctKSHUySEyfvB65oiSEY4ZJxM89hUq1nnKb5CSdRjQcVhMNbmbreT8MpZeGw9CXi9JFZJzTr6jo3NJ62",
  "key35": "5jRwDkdoWU1mnDAPkxxaL3swot9GFJviCGxm3LxTE7PzfwSHnZjNFFL5L2JdDikiUtnigSPQJjex37yEKw4F3q8p",
  "key36": "2BQuQh4wPjy4526dkXz7hMCHjPuhRh2YUeqR8QszHgZaJAtvdVjDYBxSAFzXgtLb4251oiVwepgZpX2adyXjwfrb",
  "key37": "87A1S2AhsH9xxYa4wkts2K2cenmKaNzuSJoogz1Y1ZavkzRXSbNUbnFXMBM35SAKbgViSQ8cVhjhG1y9Yti8ysd",
  "key38": "3HDSPxuA574nEuZqTgSUZqmPL4np5Z6HDVfNY873LEXicXfdA1fhSWqvnakJK5A8CiyFeVx7pyZ6QvrxAn3XS5kA",
  "key39": "394PYptb8KGaBDHqNhQuWckbwpDVw1fr56U6eBQj2dZ9yMkpxtLrhg1JBboTcYoQNMqFBAhQvvXCZ9wk5eTV2thm",
  "key40": "3aq41og7K42FxsyH1GZtbitWRYcELhW8yrtfwrYpr5sMiQAHS83vGeF6RpVe7h2hLNLNEJNVFxTSXumxr4LuWpk2",
  "key41": "4EcJHXMpxPMAvXgyN16Q5BUPs2x9SwXs82eVHPCYw4vaRKfZ1beJshZKJgxzzQ5bEe6wWTMKpM8NNVn1pMrtPNgV",
  "key42": "3rbnecYRwBKLKqoLmNmHidsLfABanMjfxS7ZawocNpFULVq6xh8Zave1y7ohwtuUDdvS3i7VRpk7vcDHdvFXmYM"
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
