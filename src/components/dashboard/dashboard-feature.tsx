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
    "4ierNtsxHiivYyUNv9RZDA8Tu3AAUFMDssEQSe6NJhzk9hyT2JWRSHtjBPEeF52GBgVPPhCHmKa5uZtPvAQo3Xz5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NKiCYpbi2X9nBwo8jq43upzBQZ5anSkJQJb3tem4B6rHZwYpSshRM99tDydXRGVv8TS7SYP4Y5DfqVwYFsjxA66",
  "key1": "5FKq46LGd5LWshuZ1HmJrUonVXjNfUH5EKQaH6y3h6ozc1Vfm7rB4YpFhGLMEsf7CiTW9p3yL4773PWCc9AeuJ5w",
  "key2": "2zXyV1aALA7DAk3fSBSdLyYSFp6GumMR2AdG5MYrA9aq1PNLzB44g6xdaxKYU2hkmh7WqcRYZwNk3QTXpdpJbDZK",
  "key3": "4ARdJeYV2Bym6S3BG7V6dWeGAYJMajgna62PaXDkS7qeHSoEqLw1yhd3L9ajBRjTCVNPymWEahbfqCLgPhnR8K2i",
  "key4": "4aWNvoDqYNuBY8qc2reMXxUyqihZZpog5n5Suvnx13GtmsKMFwXzaR1Ywqb7EfFNeAaqPtuHZHBiwYgEwy8PbtVz",
  "key5": "4omctSyWCPZWGafmJqVGxHuTD7gT4yjXDzUpFq9bVDcy2Q3dt6JUHvGVwTrJ8THcjkwYwgCwESQAiwZteRbC5ofe",
  "key6": "4jWv14irMTGDq5ds1SVxocKfxJRq3ch3QMDkTtsjAqZNebXqrwyWJdt4tjP2BA7vhpVgsWBvn63FDKjpADxa1zB1",
  "key7": "2mWPWhRVo3STHJkiTExBPMCNq8Wp9u7SA6Nw9LFyrywYuU6S5eR7siZQA6YyAFENvoyzwUFZrwEBSk7pdwfrutKz",
  "key8": "3wzyXYSzdWYEMyhvJtPPgEKDy51Z1qRA1HeNpfg2qPqLn5fnEx95aqym336oDPf4z4rvw5t1udnN8wvrsMYdaXFX",
  "key9": "53gzMh2pSfRYBkRsSUfPAfzad7SZKK4vWFAySsQ9DBD922Q83rvb4qnDzNWBgey5JBTJz7HCzbffrMxvSk9X8oeZ",
  "key10": "3SfuJcNJrAuXGLJk3axvHVXVBdmJa4HUdPhgueegStF9g3S46t23J32h6aAZ7bKzdzjUtKECQypCwAi9YzTvNk4v",
  "key11": "3nQDBpSFfqmT3v98Lmf4F73n5GGTUUeWWBvLumVqryAs4cBAS1mLzE56LHE2V6PYr7K4PyTQzTDgD1tFL9hajMVc",
  "key12": "2FoFB6AhJnmiDTaRAwMWkpsTnwUo6PWFRp4MttjHN3FFgJaC7bgsqWbw4VDHdvb6ZbsvwjQ4us4PMzHqmUaR8Kdo",
  "key13": "5XYmrk9HYp1ta5abgAfYBnShDzMZCjECjvU8EsZn2rhCZiAQUvYgVJwfqWnLqEi2oaESdhwkginfo1ZWcNEREdSw",
  "key14": "4MMaV19an5DLDYwWXEQcXeWBjjKzui2p9BTpUgLxucxsu9wAe7yUYLDr1TePDC2m7FvYaXvVZEa69859Kmw7aX4C",
  "key15": "5TNV2kzx16UAFpQmGHJ1mUv2JoLXNX1Q97Pe76BETApQ8QevfpsgiNN3ums4F3Fbkd2tsNkwsmWEdcpnCs4LiHXt",
  "key16": "5PPuUEUwceRoHJ8NTeS8MERkBf1CixFxhvURkMDmb4KE92zJb7XMpWKEw2kg9ATAZzbQH9tsxcm3u2H5UphAcCV3",
  "key17": "4hZHgRjLCanYoSpNAmFaspxboP7eC1kKmaHuRDUrhzgs4vvSzd6np3xw28ArnRUkka4rTjRY1fHcNDm7Gcx97snZ",
  "key18": "3vns1WBQx5FTTUFzknFvDccKuQ4RWqbsH16sxGoYkfYQbDUQXKwddkfYkY6uSvhZNCcpwkXoUkisELrkN81uzQq2",
  "key19": "3QLCJWXo54tGwTyCn1ydAm9Dnqq2aguR52iePg8Vk4yXNGy65bRWNSATgoVX1QZjuhfdAyjMQjV97kegofAhTFNo",
  "key20": "2P9HPG2RN7j7RoX98YVexLJV3VpEs5qZXmsaZfvTq4ypsUfJ7t8Bw9rdiDoXqxg6djVE5zuw2U6MC3pgX2UQyCpj",
  "key21": "wSPqU9XW9DBNLvy6gPQkCfGEW3Bks7zRyvc7N8YPYKGNpqNGS6bbsKhsJb44jBmkSJHSdN4UhP65Jzgo5MaUH65",
  "key22": "58s6MkYAZaBTKMcPpZCitH9c9eABNdQnBt8kGtBkBK3frr4sviosZ5jGygDXQiTDbKjKbFu5M1y7xCfwRNTf45id",
  "key23": "43JCMoDkiEN4t4EQ7kNKy8vJbbUXZYSnFW3TYB6c8fyeUC83AnpiGqvQaSKWBjTA2GC2Ffx3k2kfXx5yx7sr75kc",
  "key24": "4JByz5h5W85HQ2WawN12UwxjvD1jG1LSoSkxazTNXXq6qjTSLEhq4dHfdQPr9rxwffhZzmFZqEa7aiwqXHvqXALK",
  "key25": "3aUbKkkXH2iufj7765LFGWZo93XAGVtBUPyg2KScBekvEmHaGD8PnSLpeuhfPPdC2nh586bfPN3sbJcVTW4as2JY",
  "key26": "4puRD9UKZ4Zg3eW6xheQ39bUzTUy3nz7juFYf6forLcXapBgb28QkXj169d4o18943yXtgF8CdvdHZW13LWitmMe",
  "key27": "2oHtLwwkzYY82Eu3NGGsrYbiqq2i2ZgotpZFziQA7PALeQhWs5wzFr15wirnQ17jjC1gPPH9CDY7zNGmbj24VVDE"
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
