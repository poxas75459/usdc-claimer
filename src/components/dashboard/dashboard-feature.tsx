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
    "3gJYuB4pHaHXytbMG9uYKw1deUanunwhNDrxTGpGxohF9HH9Ja5V8eLr6m8eA5Y9KoeaE9eZwSAAJngSzcRm5DZg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hqz7LBx6eXEpTayPsyxMoxqtiiwiLqg6UDqK15vUttqDX3HNB6eyb21TgavBhrPrYYCBxE6p4RzXnBV4YBTirDs",
  "key1": "4mDQ7i8ooV65oSrSiSsiJs6kKitaKJXXjADmWXgoSyirW39ykqFDtZSk7twK2rUJLivQaMVC9oz4vvhYDeYwrzxa",
  "key2": "5gdwrL8wY2iJLBYxozdSEgBCbs6PTNJ3D2foJrqMsUWBz4Ao6ZyqcD7rAjjzPLbvxeRieHLRL2L9KdUnzzC6iarE",
  "key3": "3TrYijSGWn9194fjzVzQLPc7TLaUBhBqiNDss2szKXmkufnf753KKGo6z1sE9bUKP35oTavCd9ukQ3RsrUhXKBHn",
  "key4": "5h7xJoSb4ogM9NUGXSGdnaAQqFtKNwSYEzjiQbyrcTfjS6UgsyUMHnDUw4gMeLCnjohjnNeF6RFLvrkEbbXCasF7",
  "key5": "3B16DSJVJB7Hw1d688f4Lcmbw2ZiW37tjf982yUCDGmeKzwiF1Wtqo9ifKr6oupPpzcnw5aCCBnPMAkwMk2WRR83",
  "key6": "4krLCnyBCu7HiwC5oiCx8bkh3xKWzExUkS9NWczXvn9qeeMYuoYRcCTpeqUoebDZ1CQvLagQACJpQnfLU6FGdCwK",
  "key7": "vKAmB6gTCHSMu2qUMTX3f3MF7eFdMerhs3dG7mcunBmDhucWUhJGLZAJVqN9VdSim9awMCkegi4Um1N6XMCE27Z",
  "key8": "55MYeEGZ8Zqc1qYLX7KbDz86NHjtaWHkVVwTQuvxDxpD1c2uwFr2RLyXvUeiWqJEVRPFhakdUNwDBf3G3Rs2fWr5",
  "key9": "4NndZytXEwji19uW1QeA6GLSpjopGqnLdVrM84Jd1o6NZrhZnpXGfB9ynLg5vV3PMM71Up2S9QEz3i4M9YYqoiRF",
  "key10": "3pjtZqCpqJH6P5LoA9rByMK9XYSpo1uyfKTGJUPRQRMjXTCoTtvZ8yNPRbMx5PdgGwk3i3tTZgeLUKKL4MawYw5k",
  "key11": "5kqCeSC7fCYphL2SMfkUYAua9hcDuX6Tjbx5xKg2NdYGGFCp1jJr7YscwrGjUHe5jmk36GMLmjarzRpHy7YTyux8",
  "key12": "2bmJwPG4PoSPSZnTrzRTiWGd1znfPdj3ion3WXybNPEmLMc3carB7P54LEA34jABWZRMAYzepPAjw5LD3ZoFbkJN",
  "key13": "3pN3VjYaXx6ri69nUrhRESfuGiom8MaCqkH2t7gkXzCF66GmbMGnrTXwWucZudo98Kdc6iHeieM2NjWeAmokMySr",
  "key14": "3GgmuWmqjaEmcW36SatfFTsHvFJKqcVxhZn9wxZ3PzGCWt3LjDkaH6YXXLmFXaG4RqFxLqX5gn4uwL4VSb1vfzTW",
  "key15": "5i4HSENNrfFAbe9VN3gvVPXGF4HBK2RwZE9WwDCrYCi7Lbw9bvz1JuzuNT8RWauvfAVQEkHCufpb4qCj3CTZprD2",
  "key16": "3Yyp6nphZUDcdCsyyH43gAsfKgA4YViUg4o32q97Cu7Yh4ETXVNvEJ6NYUkxoHoYMVXCYvywRLdHwhu7B8wwvSEX",
  "key17": "QP8Zp8bJ8d89c5H1tGetAuBD2PUjSGwFg3adCTUZJAaATRfuo3CSr2p8obXV1uaAjMFELWf72DAhKvqiLU21ERT",
  "key18": "3Fvom3sEbfbG38TuqyxGLofSMdntDW3igUKD6Hh5s5gtHFR3auZy3nRz1a8nNKQEpEEfjSABkGoLfaDF9tMrmP8j",
  "key19": "61fyU7LuFgLA55i2P7HkndU8hnFbRoTWwbpSA6sYpYbd9CZN7vHJhqoyae3x7jbNxX8xcgZL85BdtBiGmBPK8ZiL",
  "key20": "65s8MBd5Ye1D9rpuqA9guGjY8ip7G3SvK6rUPBjrMF8ha9ed7YhEenfnj7k5iT65dn6CFYtqJyc94jKNtwHLWVB1",
  "key21": "2VxUwDrzmDVbX4mWwa4d95TxhWom1wyutxtsDhccKc2249wcBwrUSdKM9KYLeo9r7APcV9PuN3w6NagETgBW69QJ",
  "key22": "25a9b2WtbpYXgwTUDoQVE1NPwPJdsXk816H7BFkafjcUdCpB5jaWqc9JkWZ1zbNxgUUWXyySKTQ52xN749JvjMDb",
  "key23": "3zopZKpjUjYZkWhSPmH4JDdvVhsAKfDgrpuY4GPYoME8s7DmdafXq3mN2Sw6s4RGKSuLqU9FQZsrmXkEryaQhbJR",
  "key24": "4EjYu2a4k4thBwLrauR8uB9tuXRNZSXGsFJNEkuiX3QRW4WGXJbpDtWSwaY7uV8Yr5i6iEsSKWnsNo12kDxDsX2G",
  "key25": "2Vsqh37gRMqemCfoz1Wj2ZwDc418nPdsqCpqpzKGe98zG3sd4wQRFJoSxJ6g5PNr5kGuugktvL1y9CjTEnDbArgj",
  "key26": "eBfgxpEyLdRJfwaET95rcXHYcN68xQ4c34qS3fKBz8Sj2a1r1eJvKzSjTHjcLnUfT3TcceyqWFPdQWxdTPELX1R",
  "key27": "1mKR7afbxmHVkwLWQXon5f85fDjVrnkUKKVTwxktCZQBxX384LEtm3S8YkYsQwRvYuTA1rjwgRZocc4VWjusirV",
  "key28": "3jkx7KStMgnHNy8uU9SsvdVQaPjtH7ZamztCiT9RbaZA51K7FtCpKfXnDwaztuuAu9SsbXbVbsukYopUd2QhQbUL",
  "key29": "2j7MwgS3FAgYZnZ5LpyMTKmvR9gnLYLTqu3DqUXkVSBYfPXcQPpPHX21eBSHBS2RQfHz1GQ1ThxLK3ncsXPLr4jQ",
  "key30": "3HA1o5jcbRAxMwNrW4WAgQQgMNLVxu8g7cNCQyy25WJJXbDZ5dpyEJByRx7Q6ZcaxKuFSGaSZoMDUAZr8WZe9Msb",
  "key31": "5XTPhAfd1cFiU6fgxppLgBXzbez5n3bRovJdeqcS5KUKsUt6n5EVoGvbfmkcG2nyKAT75L6jopRXsRQqHhJbbw2e",
  "key32": "5uD9JUB1fpYkNJNyY6WkYHrgZYbC39o96zLj9sLV5fg2xpASE7mPWajfcHAAAfAgTLWZ7gFytJfRCkiyTMh3T5aQ"
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
