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
    "2Q6wmW8ATnaM5RwUskwPeAio5CgKBxA2cjiyEpbrAkavu384RDT8AUoZxMPMQtsuJ1XZZMCXLebTiqYdQW6XNZKb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HUCnKZwXyLxGX4FbPC3UnfrhTz4wgtDhVYCidiURq5C9jRphR3y7rNP3NtqwQFKqMwaehQvMSKBKkqeH5GttQ8S",
  "key1": "4VYF2PAhpypuBYcCPJpMyqhzpagoauDjKC2r1ophKBmFzA7zFdgK9SS561Zy8zmBcMaMJWHHPhtVLgsXeTphyMBp",
  "key2": "3iCwxakdQ8CaWchd2mRwCdCyxFzwpiZH7sVMacX7prv8LW2waXXs2C3a7JA2tFjCenAAnVaouGGBK1heiUFXpL42",
  "key3": "N2Tq91i5RiCi8yoXdTsB4bxLAN1vnxKo1RwXxoPnXaF2HKgpZGZWZoqvKcvwj7jsdEx5GCQQTSiNHN5N3HbN6u7",
  "key4": "4iyYk47pR3ZtmCPGJ8Xk6H4ByaTSFfVgHjg6Ehq7rcppPteJ3NiPx3QZCfWSMsRmidF8ecxM1XDk3CXpdmC7yexg",
  "key5": "3mz7d4u7UZVyfKDaF76zLmwknUdT6j7t52c83m7MBj2sjPZWT7xt6WiKXPrUU2Bh1m9EEprQhsnQw6GK7xGD36s8",
  "key6": "3fVMw2K4dW3Vj8TnwpUFzHkZtFQDE3cPRGEBzKnCVEmgzzLtzhrwwLUCssuQv6DVHMZcbiBFAzs2QZWdFrd8uMj9",
  "key7": "2VEr5tohYMsC9dACVvGm7Znx2fEKwM2xJWwCEjferaqphHT1J6FVnqyRk5y1rHrGPPFZKHstW2nC2yGTsAuigbBe",
  "key8": "4S4sFS25seBqrkY4y2nXs4wURe8175doyKUW6sT7s5EhpTt5wyGPzztuz8iwEm4HcawcAVWteMxXDWAPUFW4DX16",
  "key9": "2NpAqqtcvfgci8FWrwPVVai1NQfrieqaUQ9TXSbVX1XaQqDBQsXwo3Z2MDQSrA13oQqzBjPUCJiokVWhiPW6qKvy",
  "key10": "x5GYybFAsHJchX279aj8Bhym6iUfe4mwvxrEVgu9sUJfiB1i6C8r4hTNibiyS4ej9NGXkSC8H715QDTPt9TajAT",
  "key11": "22zPMdRwe6gQa7FFceKR9sWMrKhupZCmYHQuzTs29CMXd3JfqYoHrR9dUFJDy3Wpgm2v9VcnJLGqk2ic882TooA8",
  "key12": "3q3qEkzUVWizxS5LXtjwVGbKxqwYRZpe6hEiACnLJRhhMhzsZfnABBZA1GUDR9YbSi88egUc6d1zcBjHaycM5qQ8",
  "key13": "66A5jDw98yEbQYKEaVgvTtMPzHsyvkFaHP1hmZdieGLLgrHUBe3e6BaDb1KsFV4hsD5msjYTFYxU1LvS47uEJZ4b",
  "key14": "rAPHFKC9p33Ppn2s5dwPknaXUYhT4eKufEPYTpp8WJaCZoc25cYYQnApTnVNjJ5pgJ1P6zdmDAAUkFpQWm36J7v",
  "key15": "2Ww6zHnwLoFKPYmk24AaMcEevV9p1h2hA6ud6VnEBUFnUXrM5nGYepM6Ps1WPSbMdypfDp8zKzLvX6euWBY1ToRY",
  "key16": "2uBUgWRSSTXroZdLs2ZC8nt3K6qaYmQ8SWYqTDKwnPgrwACpmxgf66uLR33rifstrAYTRpWBzAFwqseiwsUgHWdU",
  "key17": "26YVREL6gdJz5z6iDosMNos5Xp18tHrhR4rKAzskdfM2ncs739mMEh9s4c4JqfAuufupfraxV5ghc3DzRuPnrwwC",
  "key18": "5erg8dCeKkMGxbTXTQ6kYsCUE21FLpfg2ER6f2A5Br1HaLeeXypKLTNxfNW78fpQL47DEUAu5XPrJiv3fF6nAqF4",
  "key19": "4ZsbCYH4W9GVEqzHJutUX7esZQKtM4H4dw1GJ5zZCnLZSg4qm3PC3VGtFeJSRqF79LJNvgZjuA2e28GQT6H7qCGf",
  "key20": "5KqH2xTRBgCuMcvuy1M63gasHLRAoizmpQ1PYQ6Tfekqj8XL6B9qyn7MUMBaGkfe56rU2sNrauijjmC5Waq7jFbx",
  "key21": "5csXBywZ18nqqQHGbRt5s9aCYSJ9NC7ozaFBwF3jKEopSe8tY4tC2Nv8VpkuPxtVNaTtCq7ZzzA4fMK1c4SDeMkb",
  "key22": "rwL7Ay6vryE4uZHpcwSZmo4RKYpVXVNXwqh414gWGurjBTmfXdHRri6TgXEfAR1XhL57hzBQ4CHxMQmnTvzFn97",
  "key23": "2mgTXxFtbEw3uzwoektcLCJBarztvf9j3f49jWEpL5RpUVzsMK1Em2VUaGDyHSRe9E5bKznJ2xM5Bypy4aZjhqp6",
  "key24": "Gxa1wy7k3wb4Zb64jenbE4HEPX8Kne7VacwAiyxJnFuL6okvESHqMT8DEaG9kdBWkkBdx8gfRPqtdY3RTBW3LBz",
  "key25": "2JCYG9bsjhXA8eCd1W2CfnnCSpEsL9iCbimXoPvKZoH6TXgBGNso2uAPnDHp4uwoB5BNjUiBKC4qZxrdeYZfMc8R",
  "key26": "FGeN49da85B3DqAfjarEEAJCf2XtNps1Hp3jHdjS7ryh9CpHeVYK8J4QVUvKajs5RbL1rYGZLYetQmveSipWXSa",
  "key27": "41iWKHrYuLT2Kg1FpsCoVi8SAULrMop7c51ztkTne6vvApV7XUtC9UEM3LezEmptFQL8eU6qnkLAwDkQAfXVmPff",
  "key28": "4ntsGYsAzFnebBZG115D5YJVePg6Nwm7XqgZyV9tXZHVcwBEXksAU7rJ7yc4tCay6W9BJ3uWY1VmAg7ht84zJoEA",
  "key29": "r8GiXgF37kUqgW5enXfGJCFCDJmpErTZ6dVkMJGNz7gFFRmPQ4aEiFUxmp1gpnNFr4H3fdMZR2vmFcMMK4YTSML"
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
