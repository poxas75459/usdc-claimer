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
    "3Y8a7RAsR2mveUfgjxKRBvhvm6UBXUPSa4jeXBpU5PdjctKqpcFxt54H5AhLpY4PhvNCMbBug4UKTbbCE87o4pNk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r1aAEytaMdLm6a3VjE8Gz5ekkC1XjwSfjUc197dXS5NMMs1AuezrXZz61yS3pDzt6FEdNT6HSEGEfuB2mdcoWM4",
  "key1": "481BETrzmBMidpPRnEWC7o59w3yAUSMoGc1W1kCqJmhiGbWCs9xiN6t4nzSvSqCgGqVyNr7Z7vH76FCeYe2VU2Xy",
  "key2": "FgXHHoDvYPwtzf3PJXECR5DTVetkcNE8ePPznGdkyCdSGFkLTEuyZ8PEHXgmS9F6VJsZv37mYarAARgajooLQbT",
  "key3": "57ApjWV1YJRE3EfS9VFrpFzaq5z8HULxbuC6hNQEwJWNXy4rjxHTkNe9FjmaM7nje7P1A8TMyT6NiMywhFbhQ7TK",
  "key4": "3ho6zocWeU8jgmy9VM5Nj79S8uQLuLxHkrZG3RanWvwzpmsvu1AqigWX9cG4xKauRYHkDQsB6LHc6pDQxSBnihE8",
  "key5": "67EycTUnFu6uS5jZoEYAhdUv8DJyVR1RF3xkiiukdvMFUsJLqoBFJ2gXrHc367HeEEm9CiNDVqow1ckgXxzGCnFm",
  "key6": "2XAXWnJQSoRtG5zrDx6KFeQ5vmF91yBY1yDx1qMMoUDGobRLUi3HdezuzJfPQw6UKXttZmkHKNjeBkTKM59aeSXq",
  "key7": "46j2TJNzsSyEN8UaFwgnhj5424W6WKfYeY5hyAc2Vzot2d8FpVNeH1NEguEYjfcT86ZFJaHxWxwzonzucnC25dEx",
  "key8": "35Epto3aHfcN7CKHw8afWQ5xAzAhuo4ENGWnCRLWn2QJgwgbagPYuxcQB8q3gjLEkjLHHkQBELQBbapek4K1KkLU",
  "key9": "3BqeVooV1TZGHpNthBeBLXXXMq5YW5rtZ9z2BoPp3mrpfLRngBKnmRU398EuGHrkvRPuk2utpTj3MG5h7RAvHsCU",
  "key10": "4MMAMGp2Tpp5Dr2oKJADAqJtxgMndpsU51egf8Rjp48FQUd6vRDkXDEQyjRofdERW3to8oaZKyTiaRXK2iMXas3t",
  "key11": "2ks3vxx4wdwKMBcMJwc9jJgzK7ReBbcBXqvzFR3SsucQiybL9gAZaD1ruwmCr2u7SxnzenhXw8p9wb1mFnw3JGKw",
  "key12": "4eYxaRAMDnMuLRhBQna3whb1mCDk8wqVAXwrpXdSvsuggHjnNjdPMcgGqbuDdSAQhxRDLW2hBdF3nBRQKMLJHBvj",
  "key13": "5mprUdQYmx9urJ1qFL9EmuB6rmsPzDTqTGPHNBGeLQpTmDr1hQDJfruyr34eq7nKeo6bDcZPMwMS3qmvvKKYy38g",
  "key14": "2zfGHavkxu44MJEHkjWffjsaB7imm8MyVVnGjwp13KEjuZySNg4Xc5do7nS6km8efhpzSA3WzPadSnuFBs3SbYY5",
  "key15": "5NCwfrAAUZovgQomhrLeUboLLnxim8JuLfY4T656JuxvqNC3NumDuUAREAUgV6Jj9XvhUsbvfhcnJBrnqx7wFUkt",
  "key16": "3GjWFojo9ZLYAS4Vyk7WSKpo91tXMGWSQbyvLuqTvqMBuKkqjUyCSVA5QSu7v4f3w8gkJk82ot3zT5Gw6oAvzDMY",
  "key17": "Caq5bafjZAr21yDpWbCDkk6tUmh2Wp9fiMcGFBuvGgGJ84Lor7NHC1BMerE3hThQMcZcTtZknkLAHE837FxGyY5",
  "key18": "MY1SW7LsFxLpDHj2c2NrYu7wxvCp8ivGoBJkDX94TJKTdZCSWN8ox8mMojPiK1ksRJcW8ipsUUCyrPNoDWNVSR8",
  "key19": "4abhjYRAJLL726j4ZMB4idV5FCnBKi5UQJPmvpBgZU1WLMKy9s3RXw8wC9CHzzDSEAJb4Lqf9RWXRg28NcK11LWv",
  "key20": "4ZrtPMCMxdvkd7jh1q8Fme7WhzKukN97T2fv6ZFpi8y6F4cZD1cyxjX5VREnQAx5CReab9A5NjbeX7U2TSKbAtLE",
  "key21": "5m8c2GwzHqKQyDUAHzXtrfvGYH5rnCF3895TSN8cH62ezBPmckrQDDC5oHXxcQYKc93kgJR6HHitSoTWeGGjhtCh",
  "key22": "owNeU4pBFumqyea9vKbsHUVNbQR4bNRSixZP7eUsZEZen8QdA6s9yYfrqYaAYGt8Hpt8ibFyH1fdrG4Y8PMR62E",
  "key23": "4iiTKie1YefxRfnDxcJvVSu3HbPQTvYC8qKY514A7zCDiMrGCzFD8PdUHj9wZFvAndL57TdM1tCpo6zvff3JXFc7",
  "key24": "236b9D9ACH7RGp4X5GtRfJo8smZtHvHQi5KjH9TDQueDKenUUi257JgXwzVwQYbb6AdtGX4ZjDHde7CdD7fwQSBm",
  "key25": "5Yub7xttNBy5D4Ao9s2u4vDJQzosnXxnQqYvFujrcsAXGscvhdw9SSM4pUt7fASyvwxvgyRaEPLAqNNk5mCLiq3E",
  "key26": "2yHntq7CiitN1c3fRW49Run2h9Zwaq8FBz9m9EDkKiW8eV1oH8jh64JvZmh7isr1c6eCeEi7qAeWuWGJtSfPTsGR",
  "key27": "5QtTkMXwYamkHfMPbM5goaBoKSkJRWjVzyH2xGVyCZZPzCtUh6bdVXuzkDJbWHLFjDKJsUP4bXFJu2ULUr4jBn97",
  "key28": "5zywgkvVCcKpCs6nyX1ZoHDYD472nXet79GssM3UxkGHEeGiecYj4NmhsQXpvhF3FqC2hdYWveiWfBpQYDyuNpYP",
  "key29": "5bBDictV8osK4occf4wDSkQQocEuMsju88FyhbZUyJbCrcpCgzkTwCBQnGzqEU2CaXZ7hFwq4Nm8YSSNSpkC7Joc",
  "key30": "5KtQvQnuF2XsZx8xcaymZ6m9N8CKuZj6HVgtiLixxKewig6RJqyYCFW2FrmxTjKNPxEfd6xck5CZP1okQjDTX8PK",
  "key31": "4xZL46YGtdUn48LzRkV1SUrRQDpNZL6dgrPdj8CfSVgLy1JD4YHnCpnZobqrYsTD9HEj3jXgWkx2Nx7EHzF7S9HW",
  "key32": "5FjqaDTR33cfn7RZjVrqNjMfZM8Na1EYghEi1S9EQUY4p7jKiaNusjLSaTJMRqC6JNeSwcoe9VHQLaNCuK9uSbSW",
  "key33": "3WUgoZZFMYy3L2hHmzBpQeYNNPQedozoHkAFZF83ZWx716do7LzFHCp6CaJBCtevUv8Fw12XUAKTiWgDAxBRsbdN",
  "key34": "3GXeawCXxwCdEmfQuGc8QwsVhwz2PzmWFLMPfsmJ2Yi7MR6G2N2WuLhUvNVihkzSh7T8u7gqNk8KoKFH5z24mhkv",
  "key35": "5vxRN9JDxAyV3njy4vZgzH3Q613jFL95g5z4ZujPNVng6XRKHL9nwGoTf39AGv1rN9FTrkv1utnP3ha5FGzTTNi6",
  "key36": "2pabt3PdtAiVEB64ZSTLEpQPkBLvAVpsyKe87UJNaatgBAEbfKzm3qonEPJoTyNeunaELJp7wENzp6UV1ML4eU37",
  "key37": "3MpHY3qzb2yMHJ2rvGX5zoeiP7nz5RU7iFSpMpHx6zw6nDeYV98RbdXPpBznGFN8Sgwukf5vtiVgEEy2mPdWu9Jj",
  "key38": "5uPjEnU8KFsxYvQX4xjdkeGriHGSjkfrwtU78hXHR3TC3uZH94VRhuFv4E3NULkBn8d6tH8yvBYqaQ8ixZytWDpk",
  "key39": "4NzYpY925e2UPYiYmKGiwKmRReYKxwobWHNTr3Nx8WkmrNQ7xZEqXmCJjzhje3WDXL2MJuoEbMqgancBu6oaRHWU",
  "key40": "4uSHFdMDqUCLRfymMh7wiMYbSnVpWFFg4nr7MSvVWtrSL9k9UZn26q3rrikiSjWH1hrodWH8XL3to3iZYoVqPBRd",
  "key41": "5kS6krieZ8kKf8q9s3XtJRttPGE4amGREc2NiiyKiuzkVWHo84ga5ETEwJsAudxtWTgCL57gpDQH8VtNV3F1rumh",
  "key42": "3mk2VQU14yHXYYWJn7BqtZHDAA95yV71VqqgzpWagwYRsxqKTcvibSzikSTtYtLAaW5VGHiPACc894kcrkyWHryS"
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
