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
    "3wuT9nLYj6YyjrU9iuTGXtee65jYjfbeZcAK7LwBcLkmJV7QRb54Pddbqi9nsdareafKF2MspbddvDyCCz2EydfJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2exFGbV5adwqKPdSmpSGUCb45Dbndwda38YHjh9c3T4Kiru851c19GvVSQ6yaqYLFtc5BzCuzgvzuNu35i3uAsK1",
  "key1": "yKq8KDJcz49pMAkks3bCsU8XE7bdnroSp5adHnsEiygCaVEfX7Pp8JXvnNHaLM9AYVAHbbrPxRw8oJAQpHsLPpN",
  "key2": "3zzev1kUt2ZH8rLRpYdLJHuGyptSq33BbzUQav8BcEULZeCqTpfz95QzvuRA4BmZW2cMKjvPzaZP5nXok4L38ASF",
  "key3": "2YLTFnu8eKzdf13UBbKBJFkxiL1AFXNrYLB92CJ9E8DEbCPWicdZURoTW8LXPxz2TZxESkWCemF7b1rV9taznLGn",
  "key4": "r1Gk5CxaBt195Q4BWiAdtzEKJyehKq43G8PTCy2kmdSBUgMLJBmwouVRa2nA8Z36yu8r9KKpAjZS9J6H2PVGU4b",
  "key5": "b3KVGTvbahuejHhKno9pEnGuNEJYuhgEwigpwpJbCEEyG25khxjKBwuSbY4RVW6BTe8t6DAwc9qbgRUbNYgS5tj",
  "key6": "65YJVhB5EJmpfpvHFLamcc6JoT2RGgheeaEtujpYm8T5LSynXCZCAafBjbFKUea8iMX5TpkuiwKJwWxrtojbQtNY",
  "key7": "3FhorkHS8YFBPJW5Pb7J6khjT2aH7FPD7eywq1B9Jrk2MH2vjX4V9Y4PS2zL9bKv4u1Ht2Qh9vgPTqutFkpDwgRY",
  "key8": "5eE5Z46nnBDq2Z9ww5cUZWsyhjLBxXvQKLzeUXzsWMNo5tJofGXqymhxpudLp7vSzbDCZJZwA9KKDtNhw3y13815",
  "key9": "43NN7PnzMC1hNoWitjuiUussqxAYboz2qvG39SXYvt1h35BQeTaYPMJoNYEfBL2WvGUob7KJ5LWK6H8zUuCKJuzW",
  "key10": "4gYGWrK6yVNtWP9mHpTk4boAr79kZ6nffDSsfbJZg4aEroLKXvqyh6fZ7pYZSHoWzjGqtCNDQYKFvHFh1aPU5wX8",
  "key11": "4vW1juD9Kx33ZLNVKTE6yAEfKFYpU29m6udumwwHv3hjsYYmg2BhPVgyA1PVTk1ZNiWLf4BGinVLP1C8kFhVgrdZ",
  "key12": "5xoAuL4qbShD9xR5pHyDBjnG4WShKuniac8grjct3Q5ZwmHez3BKseXvcwDLbZS4jPoZyNb7hJfttreUQNLJmB3x",
  "key13": "JxQqB3hR6RQGERSrpeyAzDwTeboRKvSBgQRRjhigsH4JGxk2GLLQtzdvxSpBbkUFD3wX8kyAnn7Q3FwSwc55PcK",
  "key14": "2VBRqWL5nvkuYeu3kjuS78rjkFeYM5DMeS1XyzZ3Yh87xkLpWTxSv9H7ZUbEfiPcrCLEMdmpieDp4MQxdz6Jyqk5",
  "key15": "65m2rhti5n45TMYz1ixXz9KgRGkdYzsQWkTcSVqsiCqfwPz67Pguj6DHNYE3xL61bcjs8NmguyYn9VYDyNsw3MtN",
  "key16": "2KVrBEbc4bF5UWr6GSq4gyypyp5yG7TuT1Tb35yUp1XNfEoidxxGPZNDR3XG5pV3JD2bP9gDCuh7HQAfZ42rQEAs",
  "key17": "2wPtMKLQasmZvbydYAaxZKt3W6GvX3qonw1YhvukJLYG5EjJ8ii9vurefzuVdUHhbq11EqJvBQ674XmZtQHfX1P8",
  "key18": "4MTbNpZvorgBfwApswYC7uV3LaHdF3BbiYaNTnKwWZdhv9FkTF3moH61eVut3qsWaDSNoDEuee4RuTYJWmh5miw2",
  "key19": "63ULVgnwy2jvuMdGH78HotqPFumBF6AzXMZXa3n4dyFEv9BJ6wcYCmZ94FPVjh1z1UshmHrU9wrebgQYBmU7rxXx",
  "key20": "3RLTaJjYtQL8dNNbCnG3xR89P9bUzNtLvTEcMLpDHoAHgR4mCgqNaZVqrbdWxnhgDEMgcGr6fA78hRzbtL17BCqY",
  "key21": "33Yfxb7hS6DEGwUgxMcKVqUumRJvvo2Y9VqbmQWRyWKAJkWYZdnZeEKzfMZyuNBYXNmTg9CEY8zdf3qdVgotZx1k",
  "key22": "UZtjaCKqMNKFQoZZc1cCPgUYpEp5D7yrGh3cHS4BQm2CCEmVBuSA4Hr7GSdFZcZYN7JS1jxAXUwfxYKYHyy848t",
  "key23": "2NKkC2AHLN5YZsmijycgHh6DysKB6EsM9UGNppZCQLWhZNP5dWsZ2U38feQRtxZAuFzrjApJiYBY5y4fweVvPmiu",
  "key24": "2miSth4h4SAsCVWLEYqEi7iajRezdx5nWZrCFW7CdiaR9Kq2CmmiG7pHBpdLLZkohyoLS2pEYUocmWJkTK3jLLTn",
  "key25": "5wTodwSkqsV3yUVagN8rEoq6TRQPn8S89DYNeJm1fuGMBMy9siYg4mw5KqRFLGUiZczKeengW4WpNuxgKkSK5azn",
  "key26": "2gE8tWDPd5z6gkJzuzx1prBV7Gmn2qu8udDHnE1iWWRx9PaUmH6VSzjwZDuCr5TH6aK33raoSudJJda5tvBKV6oM",
  "key27": "2EXCgmqd5Kgmw9bqKsVKziqZUeGh87FA7nxvGDrV6g869EZvNHrdyjNTSLn1cnufH17aEu79dFjUMzLEbFQfDETq",
  "key28": "4VYMtYzkaSMq2bJYzRxDbyeYbYCNCn1wGRHGCHZXgsYkL84agVGAbzCwYLZRQnXonnFKtkv3vL5c8UtdU4u9fYNM",
  "key29": "2M2YPT9wekWyMrNB2acYfPeWsaAkxyuPk815DVF5yhJwLvUAyBjTH29zKu9fZbyRXjHvhEH7KV4nSipqP4BsggPQ",
  "key30": "2PMMjHASDhPSewZdBUZaDMc9EPtXgErmzPACwbMM2chpfSPzFyUhL2cJQs15MRMw9qvLuoCZrzswTaTDKoaMGbXx",
  "key31": "28gBxUtzy8B1xdfiU7N4Qn2dwzG6BdUtbrBByzVVnp3rQg9Qe73qsNpwWCAcauNTUBBUfFsHeWfj2JmKLMa867V6",
  "key32": "5jXyBYwmNLWmnXLmtyuKSyRv2kEPpcrE6DFga3awAjTWDvXj9BX7V88WemzvYq9MvDzsuEH51w9CgWDaAjgUy8ed",
  "key33": "2vMVnB5ioYCEaV55tyzKuL1g3foqWRN1eEyGMqDFrmkYbgwPWZtkgmUZXFFV4cbF4okV8G1EAq1w5mF5q9iHHzR3",
  "key34": "3bA5MjyHQjQ4vx3tsc7n3sFjYcLtL19U75bbmPcJrc3m43uMBvxJfA8wsq6djHHmN2JMTjCNVYWJFqSgRaLYg4Uc",
  "key35": "43SGNBWscvCQm3hN8oZzBBRadcLAPvi3wvdvssdCgPJ1hsjNiDNCRwGqWKJu5kB7HQR6CMsNRhyYh6gVSZ9HsZEB",
  "key36": "5yEjAFtKjKkHScd8Bq8ftBz5bTG2YX3eCAG65ucLGbFLjhrx4DACqL164Ddtx5zziEcrkSuigSem8SRejdSrvXQR",
  "key37": "29DUZCSLcJa9yvn3EgkJH8vVsXsu3tPbadvh3TUuxzZ9mSV4Ae8p3K3wAvDVFm64xcBMecooL341u763MWiANjE1",
  "key38": "3TCJFAPxwRPR14ScDDqpeajSnpnBL5VuQdTV2PHCRXABdXGrbG4ywNj7ZBo4xD58N1sN39XjG2tkaNjnauiaCfN1",
  "key39": "3zYjXfLn2HPnXMJYetKGwBKm9CaML4sTi6frhf8BsivqL9wzeM6dpbwyAp41qFqFxbpgTaCMKeo3VmbDaSEu8cpM"
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
