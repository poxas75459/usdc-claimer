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
    "TpVe3dVi2BNMSUaprGJFJnBiZ2Hp4REE7PzuqffsanR8u4rzkAK2kpCwjsCRJuC4hS5SLqPzJRbeuSfnSa3ULPw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PbBrJ2fu3Qn5NsEGhWWHZHPwugtAo9jbUFnPHFAawqqe2jKpu9cwNvwTKje9BGMNwK7z9QH7xEuJB2ADH3agGjB",
  "key1": "3G5F8AVQQdnvnPwqZaqBTis2JKoERtAFXaaKAMcmvdgbTZ38DodfYRirNDscbZNoxe6wS6FDBNq5tES6QBD6aZTT",
  "key2": "4mBJFMQ29zFpZeC7sHBB2rn76J8GFvgfktavyj3Y2JGxGwmrV6yjoyRrSZS6sCuFy6uSo8MLxiUyMtsepjsrgLpo",
  "key3": "5VwMkDmWMTJCnXac1omXYhsp9HoREUACgV6LnKLCyNfAfiB4p9FRefSEr8NRwWHtCR2SuRXbXW9U4gnGKbR2vSxG",
  "key4": "5wvbzJFMn5JBRjCCwj5hX1V1ZbQDLwitLTBvGLvbpELN49j9inkmngoULcRkK21UDXvvo7nZz7RzgHAJPbwBXSFQ",
  "key5": "35xYUTQ9WLfJsMrBwF1t8qKT6jeB5Ng7A8myTN6UjrA5Zw4QUqU5dX5U2ovWzjputzggCbh1EYGTXr4qiQPUACia",
  "key6": "Kv1H9oBM8fVqE8oWCmpS7QLKCpMg7uw4K7AwRRPDfdK9nrCS6vA3QkaXoVVPYqZMYSA6jMwcAkPiyos4YwRgLGM",
  "key7": "4ccq115atQ8R8K1RLjp6MX1ZNgV6LtWgjmRuVFx4JkMWHoo96YmpTrZaSYQiSmpT6NR1BSWtE6hu8BDmQXfNWbGS",
  "key8": "2yZa31iJtLh88SdWBEDH8YCuD3HQ25o1hocXNATvMrLxtPdxwaSgMDhbNAJykPXYtfdaP3b1PXuKxmqE3hSTGXYD",
  "key9": "5d4sa7bFcMMjcyBYe7Jomcqz1EmQpgt6KYcXYPo1X9BDitR75PBp6AxSbxRrd3rffJFKApCuDrEmFhNxbF3MxJF4",
  "key10": "2VvRS26FBzXE5ofw53ZaSn8DWu6ToPVf4NywXoDXnwxHFe45pHppRjxCJsNTVcJ9HAbK45uyoS4F1s2NXGMTm1ed",
  "key11": "jZg8hazzDsad6KmTd66siMD9DmmDADHPohN51ZRSoREiHQd4GFbcLAMtnpMfKztSs4aBiX7o3suggza4sJ39YiY",
  "key12": "5VrCteUTrzu3Qv6hb4DUZsD9syELKTzzvq1EYhnTWSrTBUmU7ueRmEqk8K1cg5RXpaSYhf9fRpxC556ESjkmfbNb",
  "key13": "s1s8RALfoLioe2wvGW8bY42dP8R5SU9KZdei4G6ig5WH93BWHQWDKuRBMqpHDcbR3V2DpUoC8MUuJSVHCYFyXvY",
  "key14": "4E3dfJDvu1RQC8adNnkWgeXeGK5zq4RKu5RR2CaQaXD5E8WTs5e5Ta4EbkiTr2vnaDPLeoLjss2TX6NppkQ9bxM3",
  "key15": "5w8fg9jKpjk2rgVxBiAojZLfMVbfNw7V65xiMGbjkf119UJpTngnbwYqZ77NqWuuZfbUPJyHyG3Awmdj48mU9ov7",
  "key16": "2k7t55wDj7PnUWAFPfH73CJJzG7bxWFzT6NCTcCWu9pGGS85jKuKxSC9DP5uAuRu3g2TBMAMNzEdENCj4qiBLQsB",
  "key17": "4j7yug6rryjsfevEWwcWC1XSkiVYgyu5NHEMocnF8gcWRVR1KmKWzHcJYgawER9Vobj2rw63gS6ZH1NvJnQvbmvC",
  "key18": "5JZ6BqjVTt8Mdm7hb1JxncnNewrn1tjm3HwtkTmygZuTxcYDQjqrzz9FgMMyWDuJcV4YhoCD8Kgbe5thqfoWkmfS",
  "key19": "2dPv7cdKpJmWbsU8ULu5TQcuDfPLWoK7QaKhJs18efekiwb8aSMGZsdYtabnhGojWhGxXBqUeu9hwzPvqaQ8J5za",
  "key20": "5iF2a51UbPGB5ZbnA1RzSzeQ2nevLAoHEZopZZuDRiosXhscG21bq5RtnTSFyh4rt4ddKNmxr8X2Lnik9zJo5PdJ",
  "key21": "3zYHwXxRCDjHuauecnzqRnXPzsnqdNs41nfJxwSbno5U2WbeodTeiKAbAazeqqtgN5NdcUy3xKYHx5YnhWRyPvEB",
  "key22": "4JBmXueV9yMgd5SkrPVUb9WRYipjbxYcqm9hEitb59Kz7Bxi7HUt22hkeofqCypRDbZ5YVvBcAWNKE2hkAecyRPZ",
  "key23": "3dwjXWtdHpjv3NQ1WCNj2sfZjaJ4sa6C1qNodXRTYHmGfgHq3j2QiVx2dyqL3Gu9A8d2fyn6eAWVhoHyE1xwSrq4",
  "key24": "ntitDCQHqBXKw8kPpk441ugfZBvExbP3ZJQBSwX2GV3tMpBmVC9tSfWitEVKEaJm8b2jYXxbMG44GN559wscr3m",
  "key25": "HkfP7BUZM9CDqNpapXkX4fLNTQzE7a9N6d5hfFLJaejRmtnD9y7q2z8P64rU5Ak4xZXXojb9FRtTQx97wUfwmwG",
  "key26": "3Y9tqMpqZJtG1Y4FczbkNHcUkGRkDfYLpwTBC4eHJkghZ5CJwZmFsZczALGkmPJye71DFzfoFPYD7rztmSpqyNyT",
  "key27": "2X619wvarf342i9bUqr6MoyujoYqzZ1imyhxbrUd2GqSX9idx2giH4U3cC9K9BH8whJYc8U51a9ZdP9oZx6EY3xp",
  "key28": "5YATweeGbHie9DdjAnFTqrqTRADvC3jiRLSegKYsWTyCNzT3FSyMDfepZsUgtf1EJCmebYoQkZLiMqF4JqmGLFHh",
  "key29": "2BLKmLUz7YQp968YeTQ5Uu9uTxYv3zkHopHS7rATwhfvgXe7vCvXp1DYVYrbjnyF7LKnZF61hJbNRi7kb7pgrdEB",
  "key30": "5qKNss7u4DmimZ3FPehgMBsVhT141hwW1eyRPxk6y5oGc7BSFbgEqaPgEjCkNTt5EeswKqFk8wGUsTTrh1ohPXmN",
  "key31": "YuRceYZLLaeB44wbfuyAtD9nDmc9PJAwBrJJmrBGmHm4QPGANSPJB3UL5SPogETLsHPSJZvMD4vAgYe1GCJPvaQ",
  "key32": "2tfCaaXH83RG6VMWtoGa96kHpbHmjDW9fReQtLAw6WdA3CxqEkoHfgPYgxYhcKXzTGReKKSombVVLTPP7JSf8HHH",
  "key33": "24gLAympGU52LRcRfkCyL8RFdmQzYCnCMVkStxU58rwJRNQY1SmHF4KHvxkzGheGDwA6LNR4ovAVYQYUpD8bJkRr",
  "key34": "46R7qi9Ybs5aHVjRuoUspRqAgryVievErPv9L6MjfPugMYbwYZd8fUcA2aUEjthpTx74Liq2QRh3pVss98LY6YBi",
  "key35": "29YJE8HvL7LCQsrE2MDtUx59whmWiyufnjAvP6rux6XSJXBX2gDLNwDR8sFZyYUUTarhDyTjeMhVgqK9o81BhZW4"
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
