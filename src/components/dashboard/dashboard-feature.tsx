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
    "5mfJjrxEEb43XLj6CksXtfyScmtwzZsVYkSoGjaheH3kJVs7ZhU6EJbc7eDSnHiWQbgg3ZNfTvrQbp6rbCEugnUv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dBQyMrM3KBK2fCANErnDotH4G9vqobEtfMK9EwAtd4wDnhcPfVg5UoJ6wkYBek4XS6jGHumzbbYCodCUVTgQons",
  "key1": "5izDe5gXKdw8zhqFHMU6YZZVLGFmuHAwcNVWnJKa9CyWyG4Ms7XTBVyStqFj6qtbb5mhu38TGEcU85bnnXfHu1Mx",
  "key2": "23GPp1y5jePahAZttE4RJXhKAtwt6NmFgrKQt4hxwAkiKQdt1SdCLkv5fFQgx3kadskpTAZSwuwDfZaNmgr8Y1nY",
  "key3": "pmFrZrto86TS2NEU1AamkSD2xz3m8xqwd1MWU6s2N3R1kVZstXX52m4T9gnFq2voTNEJAePRMoxiDHimp1nezTb",
  "key4": "4Y44vvevcLXnkqBzogRpF7t1q9kPfEBbXqsFPx7GQYDdAHNNmSMWoopBaBf31mzjzS7ohoPYGd8eeZurH18Y7RZe",
  "key5": "4bbgVSsnfDiDAqkrXPim3ovCS53qnKkVz7AaQriuMSWW6sRfuHQAvYrkJJMDGBgogrwMqank9qK7T9yg6B3NyGJU",
  "key6": "2eX472DQRHC2eDAwGwY28hVNYDwe35pCsGhb16PXmA6bKECPJ6sg5q4Wke7durDCyjMLEs4JE5fBovgEwuHTBSeA",
  "key7": "52MJSJiRj3xAH8dbc6J4GuP9rhFYP1uhgGSjWdVPzsVz7kcTmYXQu3J393qeMGthkXKQz9y9L2CErR8Pydq9Zutk",
  "key8": "2HiSed4DCem9CcinUsjU7FLz2CsQjXp75hhaVTvWujK6DpZviFUfyJYy6kU3iJi2kuFi42SVnAYuGck17ZGXiYyY",
  "key9": "5XTZk4jCarG91vwRWteEjN43EqN4Wyop5wXba8y44yYFaZfFF67pug69vNF2s8Fc359VN7MVDNeUDzQranfRBTZY",
  "key10": "49jzGQ3YXNr47F8qMmZjp2eYndLck1B24YEt6eMFL49NTg9vtLUDnB9PUP9uryxY9UL6BUCgF9gLWPSHmKfXCYxb",
  "key11": "5XHiK1MJVFBhFtRnqKFJu8WRGc9kGYwurwzDMaHWDmzyCYMdc8sRpXm7tK9wKBZWLnyCbpce7bNjz44JrNtG4MXm",
  "key12": "4nEcYa5iRjrrrNxpY3BJEAkgzmExmUubH6VM7xiqP8ujXBYVNptRkRnZhPbNCTngMDdKRaLa2UW7AsWcF7JtmPs",
  "key13": "59odt6BwhoHGaMgxmkz5diURkWf2215M1cpgUgLjCYsrGrwgu3nzvzD6bCbjz7mUiKHMUSnhp38kCza5FrsiGJNe",
  "key14": "5nqTDKDK9LKye7PGX5ytdxLmNM2pva7DKhaqXxvdjRhTVuS6s5Bxnaid8bMANgYZ4Bwwrhdj4Bs49JK5rQGtgDqq",
  "key15": "66ETjnTY1VVe72nvFbVzCN8jNdfWUDcZTUw6iuH7phNJD3CqgnJCguyCNXwccsVdFRBML9dXxMcPdRnWFNPs5qga",
  "key16": "3oznXoJQtD2wpmJ5D7LFz5GDBF2CAWQjMZzJynoHyFh7g6j6XHDXaNeGSmXh5McX6vGrdKbbqn3if9pKEhbv7XYY",
  "key17": "7AJUFGw8gB5o1tg9ynAvf8DCNeAFAYoEPkFvxdnB9c7mXqvqvbd4egEKhQYswhw6XBvFUE3pEfZffep1W6fDmG1",
  "key18": "2AvSo92vza752AdTB9CmzqkSws5abbe3ESYXmMsXocXyb42ECgcKwbLEZJAdQ3AVvrERdyfNXYXvJGKmeqPBrAZk",
  "key19": "Te46hRtLodQtHw7922PfqnkxDZ91a9vFGDVqVsXaPB5K3qRL6LrgWwQBtqaG79EF25oWjimKEdXf5N3NbH67hVQ",
  "key20": "51Rry26WHbgZCgvFNGYtfB1v388nx27QhNGVGeYqWFAbio2LwGoPptNE17CzeMCxNUdS8GVkVeq7NqNHaY3Zv6b9",
  "key21": "5FHnqxTKGdjZFUzvoiDS4KDTBLy78QHpMyuQqXR62d4GZ1xN4XyU7HypBjKBWcLSudg9gXeJ2ncpxc5RhwFjTwwE",
  "key22": "2K7dv8Pq1TTCdHhsHQFH9zL8iMwMLvkuAw6bqfzpharcwKu1wPU8N9SesGiKCG7j6qZDYFA4TiToQ6eyAaMeqeYF",
  "key23": "4SeYxXKu75H18z3ZEYVZvJXGHq7629PTR8vbzcuCSc21u1eEDH7Y4VjwSbSD9s5ZYmXHy2ua5omwqpKTvPMMZ46S",
  "key24": "5cgX9bSa6pPfBAzvoQtoZiWe8uDGjLgQCncDcb2R7Y9uES9UUEEEv6AhTb4gj57qCpwNYGRAhp8kWuFeKbuyvLL2",
  "key25": "3jcLoULjhqiWwgoV2pLeps8Uxpt9SyNkZWo1rBeVhec6rEJbk8UAEeNxHiiQMFdMakGpBhwmugxxBvNFJwb73XNA",
  "key26": "4dg7uMFi78LvR4BEUrawtM4hq1cPUFoEtq7LDB1chJW8DQTBWbmDtXJEV1FT2q4Ru3vhfJHfWexdVgC1jwyNfdFu",
  "key27": "623zQFuHUPTUKs8gHrGhyxMXKu98F4d5BcTLJ3zmRjTd1ddjpxquafbmbr9gZuPDoo7HTiwykDy5vUVHdu8xcg6b"
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
