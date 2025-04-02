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
    "5sdrtbZ3LUKui2FUHJFnxdXc5KmcfATJmDgh4DCXe5Cs1mtaaqBciVfjz8TWKW3mBpdDtnMCXu7miCnDJCy7G4Go"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RZcNJiBmRYsJ3w66EvyffUqNCguvawo36LNByBcN4ypUhx7cdSsrtZdKdFTdm4FfM2rD83igpErsAM3vsNhqHAF",
  "key1": "5xc1pePmcsVYV7wqZyaep4sNXFMevJUjMExBN1seuTFM6LPQoxnQJfHfXVXbcp9D5tQyCfZFTdCuo1eQtSnLjat2",
  "key2": "gNGirr8SncATLYaQFMDieBDtYLUJWc2h2YULatzJCaC9aM64B85yscaxMbcnnVnphcQsiRx6rijfEf26xMTdgmZ",
  "key3": "2TYTsk3rb4qfPN9Bx5S2oZ7KzjetU58q8p5dcL5C57JMyVWmhqndo2Uq8E83DYDPLq17G4pBnqYqMrK9z1V7v3rY",
  "key4": "3wwco6Mrftx9eSGdyEkADXnY1ZE1aFzAtYYs4zh8LY1GYuMAZuviNST6rhNzaNbbXAUinZFVuZK6D63kDZaiHCJ6",
  "key5": "J9M7VhDSfkBdASdMrGCZitAp9wDAtSguShngifvPJhpP3X5TrKxw259nUXGBf5tBNSwtjJjDterXF3wkDzbo7aQ",
  "key6": "4xTXZjeUeYK9Naf64fXq76i756ZEic5wz4aMKgRZJy4ZYk7jqySeB3oG1i3EKrtJfSs68sA9Z66itsdAW4KME6cL",
  "key7": "5N6uqNm1VwSVSZHCzf1JvSAhTsbuTn3kcmW8AMymkypbbqtdSRHxHkikRCesN1nkUKVZ9uYQrsPEBcjvP46oDisJ",
  "key8": "53TexzzV7EeVcrgsU6wX8g4Fzk5gULn9ZPRqqW7P7dHogg6yoR67QtcjNuu7tjR6rRc2tPHKoyv6GobzK3ttugdx",
  "key9": "4pG9Pw6McDpJzB6FZVeW8ebCJi1rg2Wj6pSfAZcvV87gA6MjRn4e4pZkEzAsAUPVxGVtx5WBP2QDixQyen9BaoZE",
  "key10": "5o6n6NV7Tf2u8jLCtmRHy6XZghBdCqWp1HmrShWBXz2mbGHskJ2P4U6b4iQsuSkzw1o4FE5fXMB2x6iTFC3B5HSw",
  "key11": "3Ji7d4DdTncU2RzM17Gbk4tBRy3L8JeQRkY3vqSyTdCmr5F3vdPhLhyKvNAkitW9Dk5GGJFyNg8cWMhBWpwWJp7u",
  "key12": "3WVjbYwCjbfNkr2YDyWqKJQUgNJ5XPY1Zt1WmD64MrtJvzywHkPBCNJBmXEGSzHuTTEFocfGduqYUeSrs5rQmHY8",
  "key13": "2s3U3rpnCJVoRiycNg4Q3VDcuRTcnpkw9A571ssc6iwtxQnnYAcEzfTkmGD8TQDtZP2QpFWMZVnKn6pFBDaQLMCC",
  "key14": "3Nj19PgYDga2KPUdVeBVLErYGjkumSbFjCagNWZDf1BEbxmWpYmSCxFXWLg6voo1Z4yKftsjjfiSStFKgsC5jjJ6",
  "key15": "4KdL3uKHQu96TEofbNbCTEK7fDL83SZ34qR8es1987ESzAxd4WhU8AC8Rhu3xraJdbBtsNgVdE2b7bvKxkgU4Wvi",
  "key16": "5VPsWq7qTAyxnPPMxw9rasFRVrVdUfohfmFZo3T9Kopra9umF3P86u9KoWhoQhYgZRuLLg2Dkmqk4x92GyZcAqvg",
  "key17": "4LpE79WoWwHw28wZjPEdUAJZwrW5DaWWwSGeirC2WV8wdfaNTNsY2gJj1gs67UgmyU9Lcd9tC662VNc8LK1VxQku",
  "key18": "4xUxqcfUAtPZSNLStFyq14L8KzQt3uAQXAMhKc36mGYZPwsybb4MXVcPdjoA5YhXJvty9Rsvd9v4Ec6yCN2fbb38",
  "key19": "3wD3AARSwiNcCe4sDRmC6FXBghGh5qKMPPfrWAggKWow8gNshJUc5J3iTfQD7LgTtcVVCHrArKPAGAvwDEh7MQgW",
  "key20": "47AeBgwKua3h8ZqcvjqmcUqvxXyTRfGKrSAZLojHHwQcrJMbVKMK5w4tUSZStv21wdsbwj57bjCdNWiBRL9XbjE8",
  "key21": "3yqRWmD37Eezuxehb7FkzchokrsiTL8wogrVkdLjwYA9vNwyqbyyfLDQY6DiNijAKAXvk1K2vDTgU8pwsDk97oTU",
  "key22": "38xHLGHUD9NAeSYXt221hTwfo6Jwd7KBwjgB3hjB3q58zqrVWokFe9zL635YAYXYvEzKXBAC5YhDdyiUhzSmUA91",
  "key23": "4XFr1Jfb4P11rzPAbvL2hw59cFxGWqsakCZWb6bEPorEXWdbjid6CzX1ez5L3c7eS9xVfTFRFvjLpuGwJp7e9EJQ",
  "key24": "iXFMK749LUbNDJtKt3CQU8qggJht7nDs9DXXw1Rwz5HhGUvKQ5yRM17fpyHYCcYHMfeTBZDvaFFo6Cu2Uoa2ZUh",
  "key25": "v1Yao4noYrQzJdHRT98G2kAv8Ss7QySoJBjBrfanXQmK8YxijgLQMmxtjg24BmYrJjQ4QwSYeGvcewUdYCsUEmy",
  "key26": "2UXRMZUQx7Yceuf5596H5DVk97Vzjm4tLe9XqYY7rjZR1EknjL61yXS3iL4FHamreSF4XZaBmoMZLgYwe8nrrafA",
  "key27": "5rdnuVy4c5YPMiwkuXjYQygMaWHTW6XAab6vaDdgxANYoib5gRFhw4n5i7baKRLpJGXYtVVqYnFQgSNdYRYXDpEz",
  "key28": "5e2QT6nYWzx2YpVUoNb9dnd6bnQu3EmUntYaCQMvEDyTUj8weS7T4o5SSuSRY63ejz5jQGU63VHUGk6ZukebFwTT"
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
