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
    "y97uYM51iYGMM3Bd2hhxGsANMntPLDqwXRdRMkxMaVsMkPYv1WSom117dXPT6FKegAZ7QkdKDUCWKb9LRJo1TtC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jtoJjfrqhmc8LLuoV7vQxxQKD23nnaWN5kZwWxQGSL2FmAxELs3i3JVhNzMEYRzePmBkortgpGhkTzUKv5R7FNF",
  "key1": "4jxiVKC5CfmAoWjRYRFUQLRvozRazaBsJ27MhKdkrCbAtuiFXox6vXicw6rsbojfk7ptpxQ8FSimvZqYdo3VxusP",
  "key2": "3vt4KhLW2uiJLn25LbcEU4tZzXgLDo61QjoZxBZTHdJXMxskCmVYRrBtTGR9LTCpk7fFu4b2h9oCZDpyE5zkrX71",
  "key3": "5LJ3UrXPnBHhCKiLqU2WQ1V5UkVWXpQttbEwBjmwAsvawk88LCThTthi1aqW9PQRxqm5bHGA3ZYhrbkwMHkeT8wV",
  "key4": "4oo9zBUQLihhbuUe9ww1BaafxGcSDA7CTYsxgEbczJARWUc6TEv7SebSpmMKM5eDEcr4ZPycbNHJhF1Md1hKM66h",
  "key5": "2C5mZ3CDcDzmu3tzMkRfGzHKTCVvFUbsvFYi94nxvj9Gt3TLT9TjJPUEn7vji9Z8aHFkAGzXSQdWhxXjyX7e4hrU",
  "key6": "4TY55YkQBpkCcBHj8MKxy2nV1vdVjarDZVugRDzUCkGXjNR3E2XEpacMhdyZrLWVrrQVsXRkVcHTdXkVcdURXT2t",
  "key7": "CGUmAfvXh2hdehHE5MgAT3sXFHPifunyQiZs28zGt5UCDtLEWVDUs983rbiGCdoyaXbmyruX7mAR3f5dWMyWZBq",
  "key8": "26veFWB7c3zbmPjA9sWdWzeQFz8PnPTymh6C1K6KdjiV268meHWiqGuuWkeudVpH8yEkSfnR5cQqxLrvDNz82qia",
  "key9": "55qECHKEbyCswERz7mWNqCYakUtUsGssFKYcKT2eL3je5oBcjhAmUKmUHqD2SLT6G6e4BnoXC7pXeCoafCpvRB3M",
  "key10": "3VamKaeJTc9AbEBx4qAph3CaEhHSSRoxTkp2Ct3ZtLJnwSiHSEVvhLvktMiNdG3B5uHR7HRA8i4umcCiHTabJHi2",
  "key11": "3fMidq6NyyN16QQ4p9vTd73nqpUGddRJZdF3hc2U4W9ysjVi1WRo8fFBHubyuDvuyp5KuWr6LRbvkNZSADbaRDQj",
  "key12": "3PH6PxsEriYysGGZL4jkJfqEyPwbCKGqhY7snT3d36qiVpHocY7bLco4Dd9qumMP432EcnhL8UsbVyRqyFKZ7z3H",
  "key13": "4XVQypStiLqfG4AvrMkJeDYQiDQZzWiW6zzCSh9hxM7NzLvJJr4xuRz92EXkCuVYiJKcM299WQCFyz6xSheMnYyF",
  "key14": "5ez1sr9nXR86nLxR877aeewNdf5WDSuCKiQ145Y3BqqB3qhXCpofazmsjQXhxqipWYnSg2yx2orZ3RE3u1Jr1gn",
  "key15": "2KNvBBRRpncPjhkZdwqC52aYhRBY2kD8xUWAXvJTWswUqBSPtvzZyiSHNceVtL5DRxChF5P6exo8QZR99QNRFYfo",
  "key16": "5nP9jXM7vUv6zrx3jqGFryHrdnnhKxqnJRjbKYSNGkHUfo8Npuowz5FusPzRE3dNVf54JWsuuC4gJSKkSMj5oedy",
  "key17": "5F6zfVnoFnHfkK9z9ia2a7xacw5xm1sqf376YQcCeW7dqwGPBKdP7X9N1C6aXcQvuNvayYtvEb5GhnLU1mEBcHWT",
  "key18": "5MPwm5v3mo6RrcPmzbioRhNEShDDNPDpQxPu3hwMfpqY1Qq9EdAW6ZyzsJMy4wpEJdsfFFtbbhJznwWFQepgzk5g",
  "key19": "365cTWq49au2bmcgXwfLUUSmRAQu2TP55pcQqmsr2PxHFEDX89QmuVKbkdwgAjq4yuMUnSTQAZYG78JXkRcu1sEe",
  "key20": "3a7L3pqCGYRM8LKo9ASsGLDhiasraMQ9FXQ6NuJ8efc9scddTtixHrAzx3xaU5EKiRG6kjAEK8Ewd7oKcGqCV3Pq",
  "key21": "3c6UKD1usgPacDGtr2wCyXXdBVQCrBFXAuTE4E8CXfCtWhGLAPjDdFxezyvEE5juCnzv1A1ACgu1vT7EYsmjtwux",
  "key22": "2WFRoZZDXZuqpQzerBW38AKZiQTuvFbJUG1d6VH4CwZCW7fzkq4DSUsw8RpL9b4wsVMhejvcrpoQJ5UAEY12fi16",
  "key23": "2aMVG9Cc6W4sqFFyDQJ2mS7pnyehQRtq29ySpbesiz8FPukEzr3r5f9EnYt6AEoDL8Dw5D7CNWSECPZGRsofjmNh",
  "key24": "5t6w5McAJ2CMYHp4aUvcK78qJovSWnA5UZtfsTKPd7njrKR8QNeLLoWVByJptUAgaUrFXAohgFag5SNh24GRCEHC",
  "key25": "4jA1JP2D691Wrm1jf2zoBCP9EqbFuVa7XYXXLXkggjXP41AbUhUGokdbuT2gWf37DV67h3BdyGUprXp7keJKc7wV",
  "key26": "BreNuEMH95Soqi9DPmvFUmiWkVWgAEPoKrNLG1A98zyrvgDasvCcqoH1qTH2TrsbMhqFWUrvTXLcxhdSfF1Nopr",
  "key27": "3AxpDmbGjgMvN939bBDCEokHQJsmLjG3k14QX4vET6ToJdRHyDBq8qqpgdWZ9e3SbgnebcT981dRH6FSs4GCKJ5T",
  "key28": "n56ar3n6APDwVZ6tdKUZ6HMh9GgqESWXRaqNbg6sbjYqzd8ZHE9Jx7NMmpwKen8TH7BWAWaS1zu647geuuTDnjT",
  "key29": "4TAQH3M1NwVuW9swr5npP7DyMmn1XWQ2uMNFNF8zTGytzGcjvAgU3ixdkRfmqFjReaLVBEqjYYjoJ8gjsCfpR6Fd",
  "key30": "4desHZaoKKH6o8oJGkcitLDXgLSY8vtRcYZhnxpMHGQyj8KZukngxJtoCeKKuMXnifC321J5obRc4PW6jgeBZWD1",
  "key31": "5gY3jZFH9XBu12r6rip3BuLyBLfscBojsC9e3XVWGDdFZmQmoyEpCsoyw4KkfLG99sV2fEtwLe9ZYDSkGnYu1ELv",
  "key32": "3HP5pnwqfS8zQdy5GsDmVLJRbH1Hc1E9pjpHTXv2aY4TL612WfuLxDZgx3bPYFx1XS8vurTBn9iHepdUsAo3PfXi",
  "key33": "5FTQLcFuv2temw2hHCUBnk74JreWr7gJtk8swJBDcYPdANLSkeNL6ToBbURMxHK2A4XjxStsEpMr2MMSzwMCqCeQ",
  "key34": "3npYSf3Lhkq1UUmCdMCLqjW3rv2ZsgYtc1otjHNyTpWu3nXUm3RcPb41UKDcjzL7vTxrCZ5BbpWeRrTuAJEJQQzb",
  "key35": "4QdrWBAqq3arYLErQtD4rXqnTkB6wJrewDen1yby1LCreUAYLxs3i2PccMeDfWAjiSyDfWzwiTPW7yk1UkgLuyyE",
  "key36": "3nqvFoz4mafT5QJn15cgBZhT4Wgc5dGK7hzB3sumjqaHwc4GeayU6eY9jpxqVBQY2YqEZkz8MASZsiMdhUMz4Wrh",
  "key37": "39yCghR4z4VW75q9eYCguXuxt1d8ctc3PfPLaphZFowdQHrSQqJatdbFxJfThcwxT1CkruQHUk3BAyNrC2w6zkLE",
  "key38": "qpJiXCkB42ACpeyuei4pvx4b7ousdmU29Cy8GMfzfxHLAS7HJw5Zw8Veit5ZUE4tbfJGE9VzpuRbEBKH1HJ81sq",
  "key39": "34xZHRUJ59vc1SLE3jUfdHiAf8euN5biSPEq9RFqBLgCKBCjPqs4DppHP3x4DaGbsrNHGtREK49m1SPgh1YAwpYc",
  "key40": "5rBRViHXsdGbhZZ6TRtnCyEyjvr9hV5DAzSM6ztzvpBnUzSH77waLWctZgHnAZj7YfQkhdmW55UynzWNkPY8LE1z",
  "key41": "3QT4Yyku4bt89g7N8sysMQrQ3MoThSyvGP6Sn3YVkRpztuB5zKzJDQ7n4xoWLnKhYPBuk9mZCMznLYLyhuRv4SoK",
  "key42": "2uJU6j8iJqsnUaspTeijuiefm8ssHiWRENEbUoq6MoaybWtKdyeGDJdezXRjM1Dc7GUJF9n1LncinRmAM3zVfYu5",
  "key43": "3WatrgHqnNFzegC53NVw7Uh6YvAreVKt2urrDrGxWJQFA5bskAV7YZDvLPEF5dvZWLkBz2mETrVuEa2mAuKChRqc",
  "key44": "5KfKaPxirZSzQQK7h37JE97bMJj5gEyqkEbwTeebMTVbawJjo2GCN6LeadwZ6cCqeREksEvyUjXR5dvHinCu19ym",
  "key45": "5mkTeaeBAVRbvLwxAUfAHANbMDuAGU5a4avYnK4aQdV3VuNLuhuF6WcVPQMMs2NKt4Sjr5ifFbnmQXNyyJg4FuYf",
  "key46": "5nSyGSZntmQfdCbKjCENSRCPKx3qjNqrL5DjpLjT9xh1oKuf3VRayHtypBorPCuXWLybYBz8k9QCMAu221juZPLz",
  "key47": "4ui61jagukkQawiQHYiAYQhwfiPnizzoA7usgBYMSMSAxKFdWUGhH3bZoGbnw6VuK5SAzf6TCBB3wUrtqQ8L5ETQ"
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
