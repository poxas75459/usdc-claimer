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
    "3gGHdEr9jgoiWSNjDHx7SKwn51xwVDnAf5sc2A1J47sbCEe9zaGuYSxjnzQfrCCi4bRcFvmish4V6pmxz6z5CWS5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BZWDB2JspStsSj2PJyGDVSnULWsRFQZ2VCEooxeULWKLmg7y6MZSQ6KddyUE3G7cqNPWJc5JRSVwVqt6fns9KiN",
  "key1": "2EZVw1FJzNqsyhHGNPdNkXs1Tqg2Rpc1nMap4crysN46raEVjskrmqyAH5BRMJUBsnCgwxPjBMXtxdF2YXoEyWbK",
  "key2": "5mJQhXeDLsswgWm3nYq6G6vmDuy9x5BdkG5w1hinuwxRMM6cC7rsR9cvPSQDSUaEo5qjSWzMjSiLjNg57ADq4hcC",
  "key3": "nHhkser6f1ff62YNeTUqp23LVYMRNhKgwKqaANn3VQakacJzdZxnXcYJiEmjRxwvkLQpXc8jeGQQYW6TtBuGJuf",
  "key4": "33wNM1teeKuRrY4GRmVzbLFRYJTHJSFf1xMy34UEysUSx23GE1Qw2FjwkZc6c1fqMvd2dy18QMBz6H9eDSZE6fNH",
  "key5": "2XwVnvDYru8XEmNdYVXvUaZU2RQLqpimoBTocTja98SSZCcEiPeBB6eFCcCkVxPhoGy3qpssPokwgoGZQccNeGu9",
  "key6": "2BnzoafxJaqaGe9kbNxyHY5o9aA6gdz7bk5FNZJpnQ638GtGWRmQ5D6vJRdXWN7Px8US5uhkk9UT4vmjGTVraTva",
  "key7": "2rGEaruUhnbC1XZ1a5PqmiYrhafr9HkXLZXX6Vppn6LBC3zMWagC3eVfkaEjLEgk1a1a7fVdsKWSYzNdJv6chMKx",
  "key8": "4gCJoyyueQXz27r5HyGKJzoDbnYuZ39mU5FCScR9GFjr5ZvmsKjFwh9DwntQ2ZkAgHACLFYfaXLBkHLC479WGsdn",
  "key9": "5EQ7KFWCRW2QqNv7i7Zwm7TADNPR1TeqBrSHT31LJFperDBnRqFEGgbwc6Rp6qm616vcbwrT4s8bq8CnEXGaGsNH",
  "key10": "2BNpMUexqrWQiYXCu6EjRcRyZgNUW5qmt4UwZjFwicEx6UAXkvjQb6jVr4aGwwyXcWRdEsNS5fkU1CEMqwkzkkua",
  "key11": "2j9vw8YhAqWv6dmU92GteamfDMF3hjM7GSQYXqb4nWA8bsi5EFtyq3JkyQiz2C1izGvLJVwX6JsWA21KRnzGN1pv",
  "key12": "4iSGGjAQKY8CovCqeX62EZUAJPKpdBGgpxXQQkr4sBgFph6QZLZ6h6HLmGUjuQAwCAXFNpURTMqQj7S85eeZR19y",
  "key13": "2aDnKkXATPg86mThZ9T9xdd99uJz3Gp9FdnsYX3yT2Rn93q3XA2ewzP8F7Jwhq2zvy8SmgW8FPdSntcCDidbMwKY",
  "key14": "4FqpkCT4QkZrFAxavQrEAJdnLfA8S61qVsHkhisjrvB4uZRRySosKinN8RYosTXvzmRYkFhFHuaB9bpCDRPfyVbE",
  "key15": "5Ve4YSHdK9ACnykWJxC7CsF5inkr5fMYFodFzCM4yTYoSGTYgCbcn73UF8a4jRR2mGx5U1cX88piQoJvdjUDQtLu",
  "key16": "3yfShG9c1f87GkAwyRNnzNLwDGHmgkochN2h9XxSSZe7Z4uRpeaiQkC82B6K7S22wQMQ784U8MAnuaBr3wQNPxjW",
  "key17": "4QJcLNwd66ZpcXRLWarU1xWu681GZ5NN3oqEM8kwMyjR2MbjgT95Y7ouLtigQds9Pxw2gxgPXw1fYGj1KxNY8WXw",
  "key18": "U9Nt6ZgwZWG9gHdtDoWZ3ZdfZdLeq3DVoRgiDAaRjQ77nzqtPoEjye3GF3HU93PcwvwaLAQJRqTXqChGzkekoM9",
  "key19": "3iuPZjVS7EwC3zPkfDYnC4niuLoeSh6LEMDhDacoPpKE28HzMwE9ohqyQ23KmtMefsyPpV1T5epQpNyYECcDvGBu",
  "key20": "5x3UbCvdT9LvUsCUp65ExL6uJCNnUQymkGY2Tc57e5uuGMZ8edE2stQ2fvs3DUYgVax7hwpq2jk9CPUzmLQo6gar",
  "key21": "4akhz7dTkYg4v6mgNTp57mBLSTK6jM8quSF2hxUhE8Swp9DypGoJjrRrKKCTVN1easTk3ALRTgBdhuu7XKDiT1By",
  "key22": "fNFaSo4hcLnSjhaR8juqkiq4WDnhBBGUEMQJV5zv4VxSi9zrJiy5vrtzGgTDHn6dXaZcCoew5mWhqE5Yk82sGoF",
  "key23": "PDZH2DR4WjfXSS46CtSrHemYmaixSX71VnTAzS7KS36sc1oQu7NbyXsGo5DP1ZWuqFYrNmSc1mm9wSKLvjr7CFu",
  "key24": "3WC4nda2KqxBrmmZWrRUr8ofB5NraRJEfbPd2wupjP5wi6nFoUGJ3rgXm9oWbmUTcurVSJDUsZDYRekgx17VRrH7",
  "key25": "ok2HoLguyvLuBGvb5VFMEtc7LkejZYc2t6e5i2PF6URitbwNJ4hzbhRjFHQ8GZp3rmGRBLZrtc8ctuxhEwnT9or",
  "key26": "3PKVCuFqLtStET4cbSjeXteQtQ1QF2SnLCVom4ohWgWsPURpX9b6F2ckjW8NZD6weR1KHZEmf3sinKHQ2v66aqtE",
  "key27": "xMc7cvCTqnxhAcRtGozjqwFWRcFHSQqEnLaTSNt7PdbVmwi2J4eAw4btRiHeFLcHGnrHx1y1wUzswGHJgRUZW9Q",
  "key28": "5H2uGxRXRQNdq7tBNFn72wGhJ4JzzNuWSG7T3MWyMRJwvPfPaXvPcRVd31SLaWmEnjQjGvY17rm2Z1SzC1WVeH4J",
  "key29": "67RhTjbqmEa9pM3CrhnFzSByxHn1vhgY5t9QTBwuVnea2bWT2dfoJhVzecEGxD9UcNpRFjSUAsBmbZ5QWGK1QFMK",
  "key30": "3H2ftnBwvXz5HScdkgrVC8DzqkCvHKc6Qz2fd6nudkMXfBj53seKEBQTwYKtKHQP3cgKd2qFA5PHCMjgKaBmEM2X",
  "key31": "54nu3LL42UZRLSDr7yMaLLXgJNuayQqMDS5F3uKxyLJo76WHhAnVDntindJ2aADejsFxMMc1CN78KJQFham3aHQN",
  "key32": "4pbMqyCHk7aRPgSkqRMaynau4YGDmG8NJpzfacqUeyj9C7pjTwjyLW4ykYFwJoj2jALpCoPeC4V8vXM54JaRy8g5",
  "key33": "3Ttctjhamz9BYfbjSgCeEY4SDAUPoe2MTymUGJjrcA6KVEVzbbfLvBgPDor9XUGjXEkq6xZf95La19quwEz9oTq4",
  "key34": "3Aa6aSpTLUHJ8Mo6Mhw98pcx8eB3yQoWNKFkDtL8vQ2vk96zGD4LdFFusdbTSZGVnHnskbNdTVwugwWYzo7MabqC",
  "key35": "2Ah8fyTjE6mbpWDaUFKCMfk8iTQctxtFEP72sjbNHtc1BzMNBZR1GbWXafCjZ9WkLvngqHnHqtkGs25QyP6EbkN2",
  "key36": "33h1DMKWuTafuXDqwZFWEUx6SDXtvXDegaQVrEh2k96qv6FnouZxkKDEQJxcZA6qH6GxTrBPH6mu4voEzMEV3VC2",
  "key37": "4zX56HGXk6y2kuPnVyngc2nyAhsHvtqFG4VzKWugTN4xVCUGjgYB1TZQtR4JxmZUNTgxsbuQ3L4jsf5d29GXYKqL",
  "key38": "367Bd1StTFyxbmHNzPfqdTF9Zc3FAJ1khSUvKb3eh7PRQWWng9yEBez9DSFn2HEWv3F1ZmWCyCrfpCdpQS248naU",
  "key39": "53M3bqPkqYxN7DFpxYFFGFTXMHS7DSSFCr2tS8vrAv8ycXG1vEd2WHZyhwQtyWd8XXWnHroqAKv8YD1vVtSJm8sQ",
  "key40": "2yaKu8nkVVDJA1ty1pMkkn4zNGWx7uBwvVDAthZx42QfdeE6BSYGGmcyikwJCro3KmqDFexp785TudmLP6sVQDVW",
  "key41": "1wKhJE81xg15t4kCrfuKSexRxr2mkA5433bEaKWANAXqpmbdVvcHMJ78F8TZzsCLnDC3dF3NpfZ7QyTosBeW6fs",
  "key42": "4Vmbe8iBFZysUyTvqsUJFCgdEnhFruaidStYMuHkGRiGH8dsA81b6hx543gEB468LjSXb97xD7XeL4pL1mf85yR7",
  "key43": "3uh7diBpAYvPcJHAWC93nmZntJ4quX2CbxNJUdJQRsqw8HYmKSymkVN5PkG6SGNFjLRpJu91XK1t1JnmqpGKq4uf"
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
