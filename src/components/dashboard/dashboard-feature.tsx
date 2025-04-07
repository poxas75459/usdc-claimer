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
    "5CEwEtsAuz2qAZ8DmCfEcCGPpzraSJec94951ZFTaakfeYfBMxZwHVZdXd1X5uvJRguTziUr2jwT8wr77PRLqMMo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hHgyFhExi6Ko1TreAB95XPQAPbWb8psUujdS4VsBXBFuWkYqQ61n3Rrw1FVZPBqkBbxHTkrM9yNexTPALP8t4XX",
  "key1": "vXnuf6NyWpgvgzrUFoZSAKaQBvvMkN1DvnDioqLSwuFCmj9GA92qVDV8KtRfaadziSH38itofPzCndzf6FQekP2",
  "key2": "3GuTBvEHUTgxWrbiTTVjknMutwk1HFvG9CjJf6FzHtmrzcBaqV3VfqvsnyiGX8Mt1wLxRch6svMEBVSu55EfJCmv",
  "key3": "2LA1dHdjey2aRSFTroEotMFjfSybtLtEyXNr9tj6biJmtbuLWcGoJisryq3fxPx3Eg6VXdTBAUMiJUwkofEKy5s",
  "key4": "5AuQA8D99snSb2VfAgcyXU7j6stRwXLDdE96UD2wso7XGuYEXqG7SeeB3sCcHQfhjVpMWHzJTjJSCBkwMC8izbuu",
  "key5": "2bck51xVcoyY5BYpyTmKEz7umKX4qgJa1x6KcWPyB41KVwpQvhW9pemJzgZ8iiuQhUEVzSWhyDb9PvngGBxgPHZn",
  "key6": "4ReqXok46pdbyahAP5JH3VZJeJetjqw36Q1rykmn441xskPpQ14UKVaJVb1pA2PNLcPszEKn5Es5tCn8U1UMFGDS",
  "key7": "bxDrfYnsyS9JctB4Q4BXhw8HFJvsjgTHuXetiWsxNEwFsF2CFbZTZWMNGkLZVWs4a5TiU6R7Q6iX6SEyJMTLyxx",
  "key8": "4QCNqc9jZxdDaK9QhBnE6ZB8uSxqDBfJL7kXnow3jdTGVcSVKgmE8Mai765y5Y2VgTbyPE6hY36rpv2ETxdeA4BF",
  "key9": "EuPeAzJwEniL4i1eriSnW7barijKiZ65tFbQ6Ybgq7g7QT4hBcQUh1x3wPZuFeCTkQnCYUVZmMi6cj6x37UzkaV",
  "key10": "2NSP62Fz9TxXrGFqQRz1FSLFEuJGZGcR3B6Qy1pLDTyhhNMWQtV18NL1DJFrPVmJFwgu414rBJPX6E7ySirfpHqw",
  "key11": "2XvY7cnZE9aX9miAjBjc9huybFiNQN23t97nzQM8bb724FKTpZCEiKwJKxV9un42oreNyHYB2Fq3XNXbjBi6qnp1",
  "key12": "PFx2vvWZKQSsCcJgMxhHLtJHPD4wWyX4DUvrL8NxpPZdYdCyifi7uccKvaX8KMwfQmRZSWv1C1Eox9jRvYf9uNu",
  "key13": "46T3wyunajtfc75D4LwQ4Esid2PhA7VpyrFxYWPBr7PeuubBjDsWpDdJze3PHpsqTTLDxjjj9cNhDKPoLGvDVyK8",
  "key14": "56gfRyUVmgWayqCa17hY25Yd3xTwe961f154f8LwSUCyaizLSLHM6b8idUJ1ZwKKkb4dQ94nKi3j8vPQBt8429p6",
  "key15": "4yphou9FKsR9JmjEeaMsBx84jaCw2HZ1HDvhNMBLiAkJsLvHMuEqfigLzm2FGYnaiimxhQzKj9FhHzeYt9YrZeVJ",
  "key16": "3AoQKTZV7DA2enVaqtGs29xVwqj6bfQY7BeF7dvmwkhSni6WRZkxyWgbQnxdsAcTzfPQ1wnMsqEfzUJvqhRNqnsU",
  "key17": "5z2e9GqJjZxhELmChHG7yAnDSdjwxM3pfVZXN6pLs3yjnXtKcexUfdKUQjwSKhZ9vhwkTLvWt5fUm7f4eYfTnMf8",
  "key18": "4LiEVm8ashQS2YxGJCfY25YVBRDiYnBMXkkSErbmMmNmf2vUxwKwjokpRuxS27pBMzNjVi3MncdK55RPEYVC1s8g",
  "key19": "2ZWq3kGjeTnV7EUnY25MFtfrkPcnJT3zaQFqwNhgAusDicSHrfrT62YyMmkdix4VA5BvfynAe9jc7UeRcDdiGMxe",
  "key20": "4UR1RJA7ztuoqSiVAA3PuoEUFFkt57mq6v35NRZn5nJfGfFx2NtND1DS9M1TLYWFEF7T6sFdGJToE1euz3ftLLoN",
  "key21": "3iKnHPZUpfBtXiuymxkexnBPxP6fjtSU9qDHmth2FmqWHhe1MfYkahM98ugaP22kaRpeuV4MbYygWJB4Uwx1UnLo",
  "key22": "4XmxkF9KQv6Mi3i7y6ctXKe5isGFGPqCCMmbg4C8yvktS6Mmg7CxVfQZJ87mfdwTWxGQ34JyZqRzzxSZZKb62oWX",
  "key23": "52kwFhhUDPfEFy2xLja4wtnxexsrrY2YAWw7YDmhXAeTHVJMy48XYH3nFdwYJkC4raodUmm55UKwTDBWqetLwtHX",
  "key24": "5eZSxY3eW4oKUCfvL9t2PwAr5i6AMjTBEztb99ZvEDZDa25rT9a4NF17f9JrXbFWsnJupSF5eRWt2Kydy3es5yuW",
  "key25": "3fpWmNZCZ4mdvtJGGJwy1RrcZSE4ci4kWy8jsdkvFAAp8eyQvSfrCit5skZt1tNdyhhMCssYKkACJjuSsSb9wFow",
  "key26": "49US1MpmneDbjGdh3jh7MFvZiCQeHeTAMHTMj4zcSTr8bqXYkViwgoRbGYkKifoMWxqyqY6L4gawqMFSe8SQJQqU",
  "key27": "2KBShoZomNtgrJdTu4YGVAJ6mJxMgvUipy4erY9nZhNSWZ8L2t8JYV5Lirc44r6tuRFe2tbTG67h3aSMvNBwdMR3",
  "key28": "mBcB4J4CXiXW2uM3BeMwLEMDvf3j481nULmePNuFkxsyv4p7b4DZy2aLDEVv2CxXBB89Mdf2ezYY6WMHoZR57nA",
  "key29": "4YpWwAZr9jndQnD2FasixvbyjaQv7ei6if8R8W4WXEGeoBJ2APTKTzyyde7gqQWEC7Dm1v6gQWSbA2PELrKRSGQZ",
  "key30": "21aff7kdVCrv2xMExgMF1xC3iNYo26YTG6mrzFLNDePEsTFzbrbS89SR96zZbT9gvbYVSqnfguG473CUzgR6Voc5",
  "key31": "4TTjvPwkQ3zJV2qz46aFYs7sUfsfSM6Di6dwPs5buXtSrqhL1ipWWGdaNnSay1vCuAdvTUpQUNmARKzzmQiJoyYm",
  "key32": "43XCk6UgDDhHZyLyfqoFRGzbCLRSLqmimEyCwXFxRqCw4bdTCef4ey1oWh64An2yezrsaCVC96TrgSHAKHgDqz4v",
  "key33": "64T3FXuJEqGXSXarosmFtcE4SP8CCiTuyjuSNXHSZCyiVUAhb3Ad2uCXkPb58HTFDmA9HwqUK3ZfjRiWuPDtBqKX",
  "key34": "4qYYkovYhFRtReqbqvYV1HquffryDEFjwwR8YAbEq6VAiSf2vZtv7wSG32Xu4afETWRKkmfkC7tNiF4BhXNmY3ad",
  "key35": "2bENG1B4KBBCRWQkLGeBrmzvNnw5T8F5QULCWNTuz9hnJLDVRYhXo9ZEwjsTPmi26kpCfecm5SVdiiL4QHG1U24P",
  "key36": "4rcgdeBSmowush1aoq9U46Uo8uitjyKySFmW7iTXDvsQAHJwD77wBfPUpbFskJB5D8zfk64jBngS3Cn9VspZFhkN",
  "key37": "5uXqGXJceDL6xKMzUb55AeSGU979NztS8c31CDVGyZ6Ft2VbpAdLPZZH5eKQaVyRBjL6coeqZaiz39NMVLJ83rEg",
  "key38": "2h3con7wmswr353SHBhx71F1aFH1unx74kgjsoL7FF71BtZdKc6ZWVr6pWC1G9rpzpquX4aSZKXwX99WdLKBReU8"
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
