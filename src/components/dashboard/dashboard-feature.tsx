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
    "3CLsYUq2EhnEUoKtiGiVxNQjXhXnBqe1ubsXjUNqnbYKy3nnkiEBqJmUQLM8Y2SR7L8dxjwL2RQy1JTjkXnqk6S8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41U4a2nXdyL5eWzcUDAo1yuYHQDKY5xhco2GLXTNPerQHCRnNaQ67wdmb7JwMz1BUMyf8QrJVkwcx9YJUvPLZifv",
  "key1": "4ziiN8mBZrSu8PMJMbr7yY2DuJQjwwbJwzMkwuLK7F4n7zh17EYCNJdZVYEV2XEji46HjNrJHiNM7cdG8txFehys",
  "key2": "2zGcFkWKjsWJqEontgyisumMh5CEx1p6e4WdCJKxVCjDpwXybugXmZVBWSK9k4Xoe15hpACU6GAekGHnEC4t3Gd4",
  "key3": "2NGvAs8XLpSJdWs1PLme2vL1bxRvwU5rDD9cgHq72bjfTk9ZFKLf3g8KbWg61NgGbGaSg6H9EroJ1Rv5DzJP18Cy",
  "key4": "2T3snZJVqrtFMKC3YetTJHV9adgX2shEf1Y7chihhKMaAu8e6ay3jtmTNTyPvkmTN5vn9nBxWDkBFn8uCPs254LV",
  "key5": "rTs32LniYWvqchjtq3xHyDBixv8QxsWwX4hbn4To57t68ZEHo1QSFXfrDiniCxkD8TA9JuZHnECu7qQmgxZoSmy",
  "key6": "8fCg24W7APRiBwz89knV12Ns6sJRQYkYA3LxvEDK4vUEJDSTdGGX1v3LcQ3JE88rKiku2Z3wHghUpHVqQT4Ddef",
  "key7": "2trUoinAJeWxNu8fTghLDmgYR2XwV3NeUBSwxKdzwu11GMBK1h8fiSZtcgkqKH61q2a13ZnYPY23v1FqaLCnMUrF",
  "key8": "2geLjerTirgi79C4pKYCGJBdZzbYEz7N8UWodhGx4gf4HKUk74R58WkReL88P1cZByGefu7Cv7EueBCRcjLNqHyq",
  "key9": "MCZYrSNZTimYdADYYs9antFCnccqhbxYV3suuGh3NHo7kAqcugUMFqBdgnaEb5tVEdKZv9GU2nHmMNYTJmeGjSb",
  "key10": "5q3S1WtupiGtnxuBW36RzqYTGnohGeQyuP6acey99hUYSCneDkXykYG5h9wS9HUeU9TyNAqE9GPq9uh5CjX329v2",
  "key11": "SpZnaEGjWirh1PLX4Ws7SjeXYFzi3v3N8TxFWxUKejpgqCmyNcsVVuMtF4vzhvQz5pbu4qixsQHBh3Q5x66PpQc",
  "key12": "67TbsMrVj53KQpLQFoopsmgmaEExB2TCBUgey2X1ftiYNqLSqEpZEqGMZ2a4QrramtRurULQyJU3HbE9ohA6APbr",
  "key13": "215CQeWBR9Pnk9zSThUg3nLhADjePoxFFRrufAbGNnzxMkW7i29BzUqCaPCa8apcW3t8KtxDhCmaNPBfCrS9z6LW",
  "key14": "2yMoWCDYxj4ipnuPufbxuHVbebjC8JfWTknSHBfSKBSkr7sokY52ALoWyC5g4ao49nCmXZgX8AuGmKMPKnLm7Tcz",
  "key15": "34j2uVJPGhpXv6nqUj5DBfsZUuvCTpQeNtSSMvRbV7SejmbE6eVD3gLMBe8AcGhmFhRrDKZCTb17XZdxW72K7PP6",
  "key16": "4XWk6qFE18EaFrVr8z4D6KEm37jrJ3MYCYazxeUG7vz2Aq3bWN5rhqPn77kS4NUbRar6z4HeddHkraTKwMmay63n",
  "key17": "5rQKxUSKYxv5tae3QxsqSjEwSXe2YvA9vMXqhPgzjGQazoDeSmvpQnSvFntXZtiVqqToNM1qhZMynodsWkXKisgz",
  "key18": "24VJZuSRL4C576uDtMkt6Cxwg1kdLwDCFqSo9zrEBR9FqnxFuD74U8WC21toZ8wCg2eThc31poQkZBZBhsrV7m6m",
  "key19": "3NWsMpd4y9o3JfhzXdXku1TCTivcecF31CL46A7r784nJFJRVgs2PRoxfxhg4oSEwmzRTny75Eh3Ftj3mFhBqvaW",
  "key20": "T8AAD1bX7UyJKRfj9R49itodDhMEMVkVGnNDXKo4pmQo52dh838qbzQNmZMtG79PGHVrT4YB8uddpKtU6rFdLdY",
  "key21": "3S4e4SksU5pAVYHoP3UQdU5AgaEReQgJk2ckLFU6YfS7DHn5j3FCKEBVNvkrBcBsRDTpfz48jNVzvz5PCck6CjJV",
  "key22": "4AAnnm5WTFHsnAjmnn81gSSXyYMFnCRXsgPVjnW5E6YNzhvW3p6xscMx8CGq65uLnZqbP5W4NL2oDrxJNrggqtdd",
  "key23": "59RY9RQroAHNZ1XGm5haz9gUQaVzA7pi4SxmKkPWZ6vdyn68cky9SQZXNttMY5JNXuBfSF5Po3NyA6AbF6fvpzBs",
  "key24": "4VLqyyWNcvkK85m7pAiG7kgXosby6Sct8jQF2UxtVcPQv2C2Cmh4NbANtE9fL5L7zMu1HWsgB4czQujznA5GJpDJ",
  "key25": "wUz3mvW8R7C4jFP1E5A5xG6yhBCmZz34myaECnkTmSLvve9KwStwEBj3VcjnKDJ46n5PpL7t8YjAcmGDnNG6gDA",
  "key26": "3EEYWK9wFZnhLBaeyRpw5mkPVcohdyQCtts1b8wxdLatZhp9MPfxA6gcjD2QPGt1u5Q5YPN8bFvB5ojspvVbkSeM",
  "key27": "2awJnTGStBeUN8E9HCA9erMy3U958iwiBQ3KpphYPScPwk2WrsYcEEedGyxdTD7g92TwVBux7W157jxu8Rfepfm6",
  "key28": "4EUwnhTLkK6DG5DAba6gw3xzBSubguNfkuTRJi1UhmkVDPK51xNZBzCrRVfjbkYLu99hEoWJkg8vhmJj2GX3H98U",
  "key29": "3BuwYJg2Tik21Zt5zsyj5x4U6ueAcuZ9x7pByHCS6z8tVvBFnVmMnxVhHzJDzbPSrBAfyLHQArYVkST7baDVyvhL",
  "key30": "3o3WuiR77WANAnnqMK1qmFQuMTTfkvmgsxqyrwb9uH3ehLo1BPiQocDmEnDatnnSWVhSzFTB1r5f2ktvonWsJwSH",
  "key31": "2CD3K4H5HrLP6pRJdPRq8uVwKk3bmF9JVccwuARqyF6MVqHb5DQLRkVi7ymoSFk4X63aZPRKXfpHykWkRsppct8d",
  "key32": "5ho8SHUfiTvHEqpcTtZqN2jxFcKop4PKhpREtALGRQB6imh25LqB5dENy158BD1V1TG76cQRogYhZ188WSj1j7NW",
  "key33": "5VPbmUYCjNrhbuDx4vJiC6rShtJvjt8hNsY88fALKM74JzbvGcAEJLFfZ6xr6DfKgBRKSkQZ5BLR1zToVWRKWGbR",
  "key34": "1pB84uHGqsLUtWcwpRCdHT7rpMdMgQBDee9n6cBErEPDJupYwMsBzHq3Y8UsHJJCxzB2mjBWQnpbRBvyJyJAyY9",
  "key35": "5aed88VJ2uT55H481oPZXLfvE36XNXbwQxgVutV4bLz9PnMQCHpDjjYZZhxwRGkyqps7kgitmxHEcpE1kGcYXewL",
  "key36": "4BeeqZveZdCEL4PRopg8vghVbyfKssjf5qczktrh3SqZgihXQcCzFsfzuTidginBHVN5aDzXrr5o6UF6bS524GQq",
  "key37": "3R4btwgdbpNufXNEbZ7geLe3LhSe2QH1vxs7Koa316QfSK8VZTUU6SMhij6L76a7XNAubhGy9PYXUVZECYjX7REq",
  "key38": "ePBkH6ZChFUtZN1LHNFa41W9bM1HSSeyNXM8SEty1ZV8HjopTbWf7f5cCcBHdQdLNXmj8vvy8mTFGkREvUx5qdS",
  "key39": "2He22f2h3pDWKv2JqXwMu1ULM9ydubjpLpAWstGBcEkukLKKsvyQQu2dKH9sqLH9xWcHggAEJvQsPfJ2STWZcWnm",
  "key40": "42teUw1QsYDurSGjgu3x8ZuZnzRLktMjorMiBb62eUmZdhhik3dLZvYrG3EBpTHTiR8FLgbhakndWCcMoJLWy2mQ"
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
