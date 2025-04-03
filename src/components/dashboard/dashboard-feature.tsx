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
    "3TeCycfryaPMm2WCUZgH7PDStBvRDv3AYTESegTVrYg4fbbCsVxCeFguvuZEq4WSzwU4FLEWgufoT8vGv5ZrUuFm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cDDyzRe5K6u6WXhMa5DgnKZND4rwXyXupuMqqqNxGkuyqYA1M7r7nw13DaerDpFEhGHUjW6JwAy9BPrxi3wS2Dz",
  "key1": "4WdwF1xMTYMcQdUeb3dJWdhK6qsjyHRcYrky7VC8WGf5DRBbYZk1kYwDQwcNUHMApZkwLiVtDf6UhdSUiMqNNDqn",
  "key2": "5MWi3oZ7zkzPv5111Mq5pbaVNMjQRqy1mwbCfPEs7jDF1uoHmdfkAGvwWR8cTFv5XK7aT2XVar1mrfP1yg43P1rH",
  "key3": "2SZzV6J8rvV6z7WTLnGapPrtBxZE7YyPBY5GPAEjXVcj6TXxREY5Pt3nGNMFWHv8qJ34J4t42HcSCfYB4xnCHHAk",
  "key4": "4FZ7mBTZGFs4BJP9RMpLYXnbvLGvv3DwrJWiLh7TeVrWU5mH33MeAXqu4eJfSP91tCPjcnVpB7tLuug2FVJD5AHX",
  "key5": "3eB4EeaHR88SvHCQYuuqmcqBzxKJV9VRWNpXnAHEHAt8rE5mtRCSuvVRwji7pv5PJCXq1jnnLyZ6YbBoh3rrmr12",
  "key6": "2ii1tfQzmrSPwrQYfzwKo5vxNcNDPhtGUejtGqS9bV9rMWv4i9FpYL7Cu5nE6YN9zvHusX5vqoR1VDk2yA1woSSz",
  "key7": "32GEShWnQ5iPkgm213wbD95pUj6hHBWtiNr8k5wqWsZoQEM2tyrH7uFChKkpE2DMvVok717nw7jKgidMKUkrFwRJ",
  "key8": "4beJmzY3qv27krLHbieKZEaKpHyAWGSjrCou1KfjadGBJGkHjnsrZJdxpXCLNJfEcHMPYZD55iHmdbtsRkLRaXxC",
  "key9": "3fPeRXSmh2FDDpevhC3JAzMHQSq9CpfQHtA2BYdBz4uEU1Unj6e6joFNxymjJsJCvpvxMHa2W4m6q6LSPkp7UKU4",
  "key10": "5Z9H4eBr95PYyGGDXWgzyDotx9bzxze8uTvG7GMq2DV7nXaQcD7f8XyKUfmQDwTco8dT2bKqgNvrnSShKqfnV7be",
  "key11": "pV2k9MLrYZvoAM92A6rUBYctYMx1nkzCkLcZNYPKjn9StrDCq9WGrJq1zFqGB9TbGvt2c1A8uNWRz9PRPMsknFp",
  "key12": "3GJrUHtzBkPKQRDU2GW8wtNrnQjfaw8oZ8VuAEAEMB3qCJqsaLBVWPjKHFaHWsK7yK2b5GMSS4eq4y3PQNoaofR2",
  "key13": "3Yw2hucmMke26UD2r6XDMExvmJJE1qi6y83bYt3gYcNoWSP1uK2vG5vhP6nuXfNJLX4dM2WuhwUoYDxfUtP4Nk8w",
  "key14": "2csGpWSx1M2WjGGXX8FTNhQ9xDE2B31au8UBXezRTM5P6qxw4NzQbAvzQFAxwCyBWV4x1arq6QissmiaEYvqjoPc",
  "key15": "3iFeEEUFXMvXSWHiJ32J4rnCkSaenk1AZdvjbKq81jvNKkek9z1RZBQPNk8Di4KRYNzZtTEgANaG5T7A95h6ygeH",
  "key16": "64FDRHM3XwE9CGnuJiYqVe5sohzc4wKRs7XYvhRdDa28FofFGukFQZnDVovCrH95o6odMSNJ6rwm6P6XMQrtDSSc",
  "key17": "xVC8JDwFB6tn8JC9GmKjFwM7UTbkCVR1piTtPGFETUxRzqpswmj6BPtPsdrrRzLBj7BharnX5GZzEY292aMoCmp",
  "key18": "52dVYQiR3UiiYivV8YXtsXJYnxtRUSJPej6gn2n7vYMbreuw85CvNwuKsjvxytd24g6M59EGD9ACMMuScDrPnEfK",
  "key19": "4U5wSkFHfaW8gdpDiTfPr8XeSiUpfUj4hgkzfSFa2jW6Exqz3EZdbABtuFBzHTafkPQruTvzFNyWGctQbbP1kzpg",
  "key20": "3qX5tm9DKZTdfYWwZRaQF8UKozhd7p7YANHnJmeispPqoPpAoGksmLvpi6zE7hGLtka5Wn7e5s6N6vPEeoWGuqzb",
  "key21": "2JGfebA3QHLZXygrX8LUK56VKLgTMVdjTLbWdGiYF4VLtYaZUcCzLdGbLT7Z7hd2gGUooab3N9n7hgWwHQeH3Nc6",
  "key22": "2FkzPNy6r1XcoDsDHrwt65bJQCaPf6bnKAGc7NpTdPKsNmi595kLYV5MsHw2fFDcg95Js5azUVt8NhdS1uj6eCJP",
  "key23": "V37n5gsLKpwR8BbaLsKzUerDDGZFt3kZ5zaXPPAJX3USGLdKKwKWeA5Np6hEmofcRg1AVcxudC1w5JoG4uc52o6",
  "key24": "4fUDdXFyR44AsG5VgsefTHHea8t4cLsbnfSG7GYAToQPkkpydC7mcopYKbYriEJ2tCrxzFNH9rex6T5nWN4j3pe4",
  "key25": "53CvRhuapybzV1Ev3rxxk4byq59b7YCwsHYG9HWo3c7McdjyTpk4C7pjVtNQHhQLGA11inhQ6MqrrpDRNmHJPnws",
  "key26": "4c1wiPgvp4wsN3EdeHMjzJB3xaZuQyxT7JE35wKJ4Foq37vQVBCL5rfkT1v8XmAUdkYDJnZhBMVp2ofLHXQQpm1Y",
  "key27": "5ybdJckPzFexp9Aia5wJeqHcJA7bMwQmP75VJELT6CcRqJeKANVWxrg9sCiMhTDry8aHcBwzuB7rZAgmTMrXqm2h",
  "key28": "vcC1tHyFoR2QrwrSkqppYFW44PiqcSaPj56ZXSpSTtdTNZvfs1X5XMjpRht3uDPrYrgofJK4NQJTRQe8SGCx3qv"
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
