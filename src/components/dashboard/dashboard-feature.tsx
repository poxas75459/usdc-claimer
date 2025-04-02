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
    "2pHqsFQyYKRKWPyL4GkCDq7sqsBAjo1QH7gsqGi9QMuo7dMhB3AvPL7cFjjYtr7jP31ihD8HD6JoCtDK1Uqqh97F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fCpwj19sUSeDy3HdnrqFMcQgcBLTkuNXuVarQvoF1Q3adgz2Tgxp21SEgWTmvrcR3y9EDqEa7buKkv1TBodRznG",
  "key1": "23yDo5W8vG4VkC86noGKuhaCURM9bRh9SqdzKH1S37HGUqp6euVxjEPbyqA1GP8wVszADnDHYxtAUfvef7Ktpdk6",
  "key2": "2yeT8FepJXL5VzUUd4e4ZJ5YEqcnh9h87Xe5SVtWW7MpoHeTeWCjJC6PuJMkxBsM5yzte1iRZ44bh2fKGpwCtdza",
  "key3": "2A1t996eGbtpGyWYTUAemQdGwAmoizvm6UiwW6BHbamDfKn1WeoRvuLZq88FVkk4MAqhv3M4iie5EhaTKkzVqiW2",
  "key4": "2DWCuBBoDQVwWVStfMYNP8FAMkaZApi7P2qcn26zVEgg53yUFgR7hXKCkoTeQLKEeEtEkRfNVqgnV1Dc9r8fxhzP",
  "key5": "65mVf66HVHAHBj3gNNqyALuUzcPuVHFF47iqgQnrFDhYgphBPzk5LCQmgbgPwuAWpj2KAXMg7BLuJhGRv96phw6s",
  "key6": "3rqf6ubRaL32mgXfKmofBaUhxAdrdUKJyfXhLCLf7Fk4xyiHzpXg4169yAyX7safNNvah1xoWuubR4GV2fW5Fpxw",
  "key7": "FNVCgwyDsD787apDQVtKTaKGDKMmyP8CgYz1DtUrbHFJvS5NVsSMrzrtLMiNxDgi9ksHwJUitd6x3Caod5nf5VT",
  "key8": "48dkVCNftF7iAHvB5JRpX4FrBYwcazUyfB34NnUkZVDxm14Bov92HrysruUdMeLhnVycyLbhD7D45N8kvwbeGUq8",
  "key9": "2TyyEQenLi4vpuGUNBaRq88tvAmD36YFzGBTgXRUNWGE62FLWa52bst5rKKvGCkVjCzp2TxGUDuEcmUbb8wRU2SZ",
  "key10": "2G1MHxZ4jhUp5d7Ly2za27ukKHdGz1FqrKKXZCHjSaFpntRHujG97rk1MEjscL8FATCdw93FGLzUZ5wFdRmKsHEz",
  "key11": "5Np7cVUSk8X2tp2NfE5UNc5JKgC5Qt67W4JMGZTBPmUAjqVY2J9JMCtK5dQ3UtfMQF9Vq6mH4f7B9Zz13HDJkVxu",
  "key12": "5WT1GxEg8Cj6GHhSv4o7DW618HGjkF1hCGDXXVEkqTNw9CMjX67dssuo1XtWofjtdDTfm9pT6sSbPh8CAbEVrY28",
  "key13": "66CBNvh8LTvh9mDsmGigMs98J1qimJQqVEM1ENMZNeCvd3reQ7LjPyuDbasVqEWKTYhC7pGFytr6WfAJRY6ee6zs",
  "key14": "5ANs565mgkGSNetPeA2jgzM5kDPoxQQ9BM2dyNPbYxNWjAxChw6Gbzpf82ECH8Addn5QpV3wpUzWtk5QT4Zt7t49",
  "key15": "3WT3AC2ZbWdcUZkzr35TTy4wnU5k46CKyb7VbKpBwP3CP5YYiZxkG5hJ8RhkxJySbWHbrEFAfTBYS1HkTBXHBgh3",
  "key16": "3XS9JA2kgr44VZQkSJ5qaqkvBosiZC2BtLk4hLrtGHgjDozdAUcyMxsLgq2onJf2ZKJ4spYdpsM2Tyr2QVDHvRKi",
  "key17": "iuSheXJhENGpYoEaZ1gCER5m3296vsBCtbfpLesBb9nCU9u5VqMj6shpq5uKhwsjWa1ayT5YfM1yWCRBmxRJG3a",
  "key18": "2ZSBaB3i4thxaiQK68xiUKSU2opoKth4xTbk9xsvciMB2YigwqCd4ntREPgtW2XugJrJPTfGUt2A72tTB7HZJEkE",
  "key19": "2fwgqQP9M9W6n1axHama9q9qDQZ6xMDb9NHTybeAekkAyNM17vCUajZnHqAY8uE4xwEgmjdFu1LqQ395f7aXAmpM",
  "key20": "3fB9uxAo5gh9iXrUGy4MiuFq7ngC6ND1xey9F4jWsVPYndnmTqxdh8YhUKn3SWZbppHM6hYGmGDMiZ2U9X5pR2UQ",
  "key21": "4J6TruTKiRkNGnW1i9MwT93KFKviA8YkAA9A2qN12JmSTaaXgTMXPMHuMoQBhcrXorM8PBmCtt4T1oLcdnRShb9j",
  "key22": "YBA66Qsk688kHSPHvoM9DJzErw5oZ8GENe6JsF5V79JYYELXhGzWtZK6SKtRgTGpLHteT6pb97oAsCp5oYR85aZ",
  "key23": "283pxzXCMVedhWVavoaDGZF1y35EM6c4WckKqdZq8Jo8eAhTT9Hq8mViabjHTFCxaGFHUSZK4ufqQJDp7tHu7au1",
  "key24": "AB87RLFDhzza8wQ86rv8Rp11QzBGMesYKARceqnT8PUMJUE7vHXqS7wKDjnzyvHdQc8yGsdc7BLRCWdNfvVzMsz",
  "key25": "2p8SMeaqgn8BPthcaZAv8qaY18YSE8nMyrtez1BaQpoEfTXC6wbUityqPrih2h1zX1V8BzcXT3vePUG64RMphCP1",
  "key26": "PHV8kpCd9nx8xDK6RWw8JzbJdPmFYQPD91XMKZrqUE317wdFNwqgxdwr3vGRzVKyuHAFKUCm5wQimWPM7DDjjJa",
  "key27": "3a2a2dpmChvermwKdyKszkPgwbyXQxrhvFJ1ayvpLAPvPWkksyUVa2vVxcnmA8b4KSCbKzp3YSD8foa6Vietodp2",
  "key28": "4grq15kBaJqisvTQJvG9dcRrEkDcVvFADSoCHjBJ1G5o76nnojicpSQESizkfPCiG4qUsd2dZMRRETdKU8HkdpvP",
  "key29": "3qngsTmRtbFskDS1ZkAuJCWjuTJMyTE3kuELgkoiZnjBMiTPh8L8TFm4tqPKeCs9ebA1edQq8yqcYFqP3nX6pBpZ",
  "key30": "xPKjZmdGR46MogHa6CHWLHo9VuKWiQZBNj7iQv4TFEWULgDrHBjpUBn4UuAu3X89eP5Ny3DrDLmK7yg1vDbJz1u",
  "key31": "2eKJ4cd2K945JkG3auDAfwWevh9kbc5Fa2k4tCAbYKru7WMow2NuqS7uJRwQzUo14Sfcw7gC2QSQMDcTJyqZ1F5r",
  "key32": "2SBVR5aA2PrCEdKLSPNonmm8py9wbdpJ7FZMP9YLDE4gpwZhVzm6MpmW3Y7WFg6btcCsX833Qsmeusc6GAAwn5E6"
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
