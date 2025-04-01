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
    "2wW5R3rdh9ZUnq7b1J4QMUEkUyXBa73i4TWLJQYw8ZMsQHDmRZDzpjqPaKtTkPzuumxKe2SiQE8DediV81f5VCmA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44GANKBVn4xQKE2RT4t7M51UhhvYB6kS9uxnisBRmvAtatyqg6T1xWPAPjJVUGmCmYQs9NDem3tDpux1GMQcioZ",
  "key1": "3379Lvvypha5tXA7sxg8vJ4WZ4Hh32UQZ8Y3JxV3nTYsgm61b9GF5gX8Yv8GM6QGwuHVf5nYfMyUUbmzDvZxYvGi",
  "key2": "vi8vrLfWSCVaBouBSVHxEajnBG8stRFhdJacNCTUGR9QZnHTuPAXrFLKpx4yMt2V1eoi3tkoahtxQxTL9DaEfyn",
  "key3": "4wmFHPgxubTSda5CKEkenCgi4E3nXMsQ3zjv4z5uDRNo7prtvxsNVC23QLCCQigiiujkXNccxD48Ji6KmfmaCLmM",
  "key4": "3bMKKy9gZRUs3UHQt6ZJLoNit6HVDiAZuVY7dtpnuoNM92Q9sPrr6bLEAsyqnc7tXkBZiiV8yvD43aiqvTjCnUuv",
  "key5": "3oYaycSHqdTi6A4K66zCLk2rZgGxAPX539Wws4v5RP1F1ERr6kA6MhcW8SGdhVksaxc25U1JPDSsMjZW4XajZ61P",
  "key6": "3AtShesNKA87U18ek19PT18bCKd1TyMbgcDf6Vf6rwEDc62xpU5DknyydjYEKWnPbaNnuGVi6W329sHaWhwQGJig",
  "key7": "urKVyhG1T1XkKG2yLiYt9zmrWoNj6j4fK4XYaKLXEbn6WwBq2RAiH2RBa1xASoHKTztSNSaqUyjUUEowtPP5fQR",
  "key8": "ZDiyG2sB7Vc7YadUkRZ4gNgqkr3X22eKa6fiJKVkAdiraHSfyyirg2kEMH88idypgwC6bzAj1mbdeuwN7khKLLZ",
  "key9": "4wMhpmFQ94tnJfufoudd7bEVSNHp7N48VxDp5F8T91FqKsqYJSmZwzwgXJv93Ce49rFoPc3nj8BwAmBdRSYbtVfP",
  "key10": "3L4fSgZi3rh5cqWJuByG1s5jAkUpn6YNH5gdAcg7b5bTXuxd4Yn2VB3nTTmZuvcM9acmqjKBEEVX9VMx5caaDLF9",
  "key11": "51t8K2G1nRk2knWBYRZpY8Kve3PP6yG533mEjMQHPX9PkEo3dQ3YCftBgfZrGZjx4pbJonBcCzsKm2wq279MKY4Y",
  "key12": "4kge4eKVK728Z9fTHTxB7FGTNQC7hci3KJuo7dX6RaQNNPn1t8QXgL5Avdi2ybCcxxw6Uad1p1MMBFrysVSnxabX",
  "key13": "4hyexFTvcLEaytEKNroFDNeqnZpyx2Kxv4VHSc5WH9nq29NzvbFi4hM431sWHG6xoZVYT2JRvkPFngVYxThfEh14",
  "key14": "2R6M2HpSThx9UzCo3YzsPUHKDbLNMbgT5yfxXYdBiKL84JTeHkdBv1ccUhx5wvudEFwozo5NaJYq5hJzkugaeRNe",
  "key15": "3zWRYyjeSof3dRW3tX5HengfdB3o7TCnRyDtwsZD8guo9BRdcVcbw1pkjiPdxK8USJWUfrXrbn8mzhnjEtEvM5Fn",
  "key16": "3cGo4o5Z8A2wu7i5iZAQiqt3PCadRPefsjDnD2iyU1AVB8ULqr6gCWB4wJTDUWwWMpfQeeta6P6APypBxM4zTenU",
  "key17": "2qxNdJkxSUGhfsf6eY3gtjAQvDDKDgZ6aKVCwC3KX1hNRocjRByMewLxPyZU1xU3QAKzpxFB56UrHXm4iBQFtpG2",
  "key18": "3Hj3tNc5T8y1HPYhoknqq4uZscBfBPMGYYuSExGgpXAsDgXYZZL8DpSsCe4oqDvokgGxbHwM8QK57usRPEKhx9BC",
  "key19": "3eUAnKAyUWx8AeYQa7dVd34ezzdukX3KCnMgzYdJe8YgTHAFYMjQzHHc4n5Sx3ApHT87UZR9pbefuNgVmBv6wzz2",
  "key20": "2MsNvZdkb49h3PCZrCGJmF9zgc3BnXsKjrvg8zPyxFWMJ5ZxZvF5LP4t5zNa4w8Sh7rGffrddLqYJoWUtP7cxnEn",
  "key21": "4z52DSCWRMLUSnX5BH3XRDfMUb1NhaCyBEsbQFDQgwX2QfMpipEYTJv9xN9HYWEmNz8n7ss2pnJHFKWqshAg6qY3",
  "key22": "3ZudzPYDrPK7GzTmHzUbVxUMKeAQL3mqwff5mw9gmuZwY1ioxSJRbFhGeQdBFYzmgq9fXMMMPUxajFK5h6znYLEb",
  "key23": "5hgqhSm1mt164faX6w285WJdEotofY8SWW9Zhr2wwJuyhLUJMPAfvZm3Pw5B59VYjcFyNQgPXbsNxFPi7KzhKejM",
  "key24": "471bKkZUo8TeKudykvx3QGrPzQZneu3J5wEHHNz6Gqit8PBSMyQ6bBfck35FxWpWHJCdqHCFJbD8kTNwuhiUFv1D",
  "key25": "4PLQdevpZ12veJrCRuaJkLAZEbbiuSNay5N9u7tteTHKanGzevrkV49fxoGvBcAvgtLhA88mkjyEQBV8U4kxbEk7",
  "key26": "5xqbXfUygmRww6Rj6XbcPf4V1R8UUREXEdSUyzG1ePXns9ba27XnYtA9zcc5LRijbveNp18roKVMMfjzQo9uhHDg",
  "key27": "n42x554GoRw9fSwhRTogN6MpRTwZgESomi3Rg9oZ6BZDmhTQhpdnTWBJahV1ffej51Pi6ePSAaXi2dPQ1GvD2hW",
  "key28": "2YjMKu8phX8k14EQYUaDtqAFQSgDw2i2Yq2Ah2cSxu9FmWUpjzq4jnPQUhd1RmiaRf29JaRKq2sY9pQMiV96oN4S",
  "key29": "2JS6RPFmfMSb3nTVNoN8wtseMs2P2kTpaeFMo6Qu7JGwFdyrN5SQHMQgnzRMsvbhgh7heF7PJLUPK9yQ8CyLNnyu",
  "key30": "cqpKUFA7QyAjv9sYCo4wro5UuhMNWJqp1EeYxKTYU9sJtwErUKmR54trVi6NYuzWJa9vpfshTn26UEhhtYosnck",
  "key31": "4tGFfi9doVNJ6u4ACFcCPy8oXUSaDnmkV5GsuBbiABxYz9bX2cKnGnRs5mDK9mhMFF6UMMW8xMzaLarKz4AvASGE",
  "key32": "2hvs84dCeGo2dw9weSmjBvNFM4rLx2gS9m2TzbDmBrgYuK4zyDJ8x7gw1iWMx2JmXoj17Sv2Zx2zTzjCQYR7pLR3",
  "key33": "5bem6ZqTHzzUWoRc5Q8HsmhTrg1mqjybsCjTPvpcPtdQLtqKiNjji5HuEfRHRhbwmGYfhpKusgNGkJWM1u3L5XRZ",
  "key34": "5SDUcr5VmjvzHH9zWw7TPJh7ygRHQnXsbU9FdSzZWeiYuxtfgobXFdQYfxeDuq1U5MHVjqrNunX2waa5nsbYyjRt",
  "key35": "5wQmQdg2G7Mv9XKgmymkeBYy55LAZ2r1AhDFavtRC5b99cKixyCtEmvcNHAgPW5AMN2V62ystXApcWjEbm85NSq6",
  "key36": "5WSyZinPsT6oBk3Qb7eq6oJvsQixUcJLPKwPNaGnyCixo8Jhgn2zrrQnADHv6PeYpFWCV1nDSD6BzHHPRan65pMk",
  "key37": "4PJmQ4fbFQiS6h8CVSfbdTpUkQx6qp6jLT3E89A1iyUosTPWF5YEU4oTWrpPGDGmLGPsi6QtfoQaqsEuoN6uwZF4",
  "key38": "2uJLHdumNuMdETe92iHXFcMjgVPYjfW3ZwHHAMfQXR7vvZvv4EYQnscnh1v11mgfY4np58D1iTje38HgLgxzABw4",
  "key39": "5vrpJYjvSwf24ztWZtvPHJ9u6ZgJgTjYEGuxJHtBrMezdDGkiFZnYVws1p8NGa1HqLwjn8eNfJtFh4otmQT9QPvG",
  "key40": "3w1mLCkVFbgGZ8nAS5a3VmSKJsBhmcGpA52E3dNPfYMtbx2MFUMpNLZLSF3nsA6HbjLzw8QPwxEggtdHv9FhAGRk",
  "key41": "5321n9oT43BbgCU1sona8Wgm4ZbSyeZoezoQAjBrCcosP72KQGrLg6r6dhnzUnhhtTsaENaaSk19hBbNadykRwHZ",
  "key42": "2MpVgquZkaoTzEte6rtf5xVdyUzChdvThpcE4g3mtSGx2KEj8J4qt6rus3gd2PbU3kQN2xmhD9LhAzBX9iSqMSsm",
  "key43": "4nb8WvLJhohr8kUUQuc2Rfs1WE86fyVRxhKT9nwiYHRTjS7n7GQCc3Gk7Vmc36qLBCQW4rwnqSn7dyZnJ2eBzNCR",
  "key44": "3RXgGA8quW2CrfdiYLxaQS96Ng84GLogbXs4jzYUYEgS1fxuUUg2iDW1AvNYzZdeecQ3qybA3ng4tKNi84Jr1t8F",
  "key45": "5jrc9qfhK5dXwxj7ESDkabtv43GNJem3YFqjNNYKSTvKuYNsKb66tu1h9ZTZaJKk1syAuaMW9fWS3oaHgDv1Uh4W"
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
