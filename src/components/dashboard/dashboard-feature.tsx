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
    "2QrdF8VrKghfr18kpQGHA4o83WNcxfVLHatgdWRzQHRxeuQxnsYGvkMUgZQ89shWWxCcYjbWekHGfVJva5fNee8b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gbi3GrGf1afaJCRge4Njt9UbFh19HJe7dGN8im41qjLhioWNQGXwTnEz6hLCXFtqLQWExihRt7bVQys6rJtvydV",
  "key1": "63hC1wSQnXHJMkG3bZQwGNjFqwh6Gq2XV4qfowwiQLZRvm6HbpTwfjb362aJ1B4cjuBudacxV5kfsWZ8YNKmCjqC",
  "key2": "5teken5zvDdyhawRUpfuyqYYcAKa5ppFPw8qLpowpZmwrNaGNeN97srYx8VZbgkZDN7RchFDERAeAh5p8scvbKo6",
  "key3": "3L5oqpkdb3ZT1L5RbcammFM3Vo2jM7QniLqxM214vs181AL72WtHh4ADPgFQh6btEMGHELMa5KHuGy7hojpL1zBs",
  "key4": "4iztf9Vegb34c828GwcHEkw32WUYoeHA8wyahy85g2ai7d7jJPmXyqxKVKje6yeP33EayC7WEabex4BXqDMaxSPZ",
  "key5": "2z1YzCAZN7YwVRHRg2nbxdEH5YZiQzWvyFLP2xhjcbpWsFMK5EA7x2N6kMcQFBkX6LBZWwp36VdTk7ut9hMcAaQZ",
  "key6": "49wNsk3gSFBEzRDEDvSM3YD9rJ1hAodUpsm8KCF7g1D5grx3kjRngCFBxBvKJobz8NimGrKn6vkx6VqhaHb6a32D",
  "key7": "u8PRYRBNTxrhbu4p7dBYWB38dPdo5vpSa4nnbt9F6TAJcsMfGr8WCFC1MAZeZmsXsdGPVQway6vL393YCo65MWU",
  "key8": "2MSvyiMXyBTYyba83kGqQs1HYGbxFjeAvfoQzwvjRA62vcLLBbZKPus8TLjUm5yQnYhoAdt9vFqtunSTnuU7zT6H",
  "key9": "2ymDy9WgSzhS8Ct9wM1WWouCd3NDirLgbKJTDfGoMMqJkgA1A8ixqxEXtMLkeuHBtGxwZtBNvYynxNDXJE2WpVCF",
  "key10": "jNjiMGNTQiHP1ge89Gu4FZAn7aSKcrHH9BYMZywyEd6ywG4v9BkTjVBSMYGTegpRAsYHm4Xs2XjvaCrb1W2KiHP",
  "key11": "LwyeTLG2YdS3oZ3AyjvzKxzKMCoVsa1JPKhm5XhaUWEYtZoFHPB3eLtky6euTXNXjovnYasHfu6hwdHABHxbbKa",
  "key12": "3CtDf5WTVpLD9HxZ1PaGPdqMdorG8GUjNb9oVVzZ8YZvhdif8q9jkY9528DAvvkckgPWbq2qpRkT6ZfUgNpyb8mV",
  "key13": "3wty7FGBug9uADG9eYGg7UkPVEJJ5Zu26J5nLoEN89Zj4ewsSQM2sFDFDuZ6Fnw9Qk4ZsceLuAdy4vwYZbAtzj7Z",
  "key14": "xX18HFua9e6JraFHpfe1RoZy65MGndb8QbwHMZ2XVuWRccUoTDorBy94aTFjUsYj5pfaY1QbQUrWKg5d6GDaYmb",
  "key15": "5zFUa1kaX17GHWJZj4Y16LHaBYMrFG8kj7Psk7EFSLVkY8rETdSEkaknipSDKeXCcJFMdD4hQSLKBoHKR3wWYoha",
  "key16": "5y3m5J3kcx9HB5pCJDi8YvsUXKAK8B6JYEpVT8hEKiHJyaAZxS1L3DW1CV9A3b676vDfUpqKn6JRDBADfBPa2ozW",
  "key17": "xRsmZieRieZ666yM64bQzJCqANvReJcSD5srKpJj32sFoLe3TFmZGtbkgeGmrXg8AAqCCSZtNerqftnGc59GZ5C",
  "key18": "28YAovKweHcjDwVZwXuPDYoEbYcVfQ5HEagF3DRVp7H9DvPLGRhscPQYck9WRAwtHoQT3wSYoWsQci97WSznM2m7",
  "key19": "4TvWhdUAW54S4Z3jqyPk4rDMxkQQven3FwQ6dYt5xb1QZuXB498N4MHcUJEsZdLB8araWBcZUXdSdbfZ6tpL2pPc",
  "key20": "2b1QLEy1xYpCfCxuLZZkRx7Y9X3KaVK9ng5gHUhbXyVxLBoswq4z59Gr1oEp5LJvYgr9Ueaw3nEASQNAa62B6zQf",
  "key21": "5XGqoZnLGATMR555RXpW4X5Kjqz71HwXamCFZSq3aekL8MVt5Mjz8VgYx7eYEwdVrcVX8nSAXxDqdU2xVesxihNi",
  "key22": "5qXdpsRrktRwkjBe6w7PoH3vYDjHvudHkLZ1AXdnEVArvvjJgwFF7n5kAnHhG42dZtb8t5CRHtBwJvYnb3oJ2qj5",
  "key23": "4WgSAY3hpm4rvh8ZrPuLGkLZroCGh24RTBZkSjTfr2qvamTk6cusPRrmYageKYKcAnDbZ1vDUhfZYKsrUjRUSXbx",
  "key24": "3mmVpAv4NHyYm1YuwBJosS6zBS14Hyk9MLZoVEFi18SbGc1dk8awuB2bdBEnD4oMKbsV4JveWdW2WTcZy8UKMWaa",
  "key25": "3GkCzEJSkGcos5iZop4oMyxXHVLKV5bVvpQJ2AN6aUFNdnPLiZtfBnLaASTfHkuR5Fu35wWtXPGLGq7jm9JFxQ5",
  "key26": "5Ub5uD25pnUiY1RjySbg8YcvP9qb8bLLpMGAPXY5dGgemiThhEaz6bMkzk4PdqpKxMyPpbdimurp3Zchi5M6t4MV",
  "key27": "4T2Bptonn1PXfubFGJKucYvgrESpqb3vnYuaZp3U5Hmtue4UPx8czT5PZGVE6TkHMyEFx1kPyvsdeVc4BBAPULmH",
  "key28": "25PaD7tfprMEuoLUnyVeit4ouMbAXbAkVNttEv7p5rzsG6rwoFMKmQHen2J7BkVdbFKsAUWwudHY9bKXLzG8aE4A",
  "key29": "4CTSM278CCsfVWc6tkRLL3KHvjKmzBQ7kEH9B8jg9FxGxoJbdXKNts7ndDYbvWE3tHw5XS9JGo1ZUx8Bb8MKjrSx",
  "key30": "45ZExNbLCTSYb8ai7jQgHwpPWKzgkG5tJyuMDtnuB6ujP3ZHgzExJgzCghKA5BQL49iwta48dq5QVEfuTRm7aQs5",
  "key31": "2CcEADrWVovRJQYFN8So1Kcs4ByZop2vAXZcbmW9fgaRsucyvPPDPJobmoE4FTymWMWMv6LZQnAjiaeEXJDhZ4e2"
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
