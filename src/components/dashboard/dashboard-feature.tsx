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
    "3E1JxdXeRX51sm2ZCpWBoShmDtPUi6kFAgDzsKTMVfSZduVDASJAtiNTowgw2qEMzEPKTErnGwnzDnjY4Ct5o24J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FFFnHMAiBEd5L4gCPtQPe67t5cmq6YCgp5isbKP6gqCswe9NQKQv5VgN1pofkgvYRYWABB1vzyBaaNvAuuTwrWV",
  "key1": "33SWdmwEh3SDDvUmAqXXysop23eLowvUnub1FEjZiUURDVsiHEV8Ln99rQADnVVmtHMrhsLtYEZUqD9VWFCTrZJi",
  "key2": "425euaTV4mAFsrACgBsEwGfw5CQTx3yEzy4GGEEq8vqvSfWenf4jy7ZodmZT8iiYz93KS9C56Wj8gfvdM2YA3GUb",
  "key3": "2E2LZhvia7Xya8UXJdihksAG1xuDLKSZUgBn4JCQnDNczfr2i6ntjNVNcBShdYmGd6i31EYRe8vhdKw4Ba4Zy2Up",
  "key4": "3i1VcfEwZAPzfSPUP6HwCXTkszc7QUq9C9QBttYskZjajk5zkbi2gcjcPZpDMd2c7dRVToWWGz245xEKxZMq5sQa",
  "key5": "4E1drJNpDc5dAB1jsqoKsL3MwAtxK69jR1rNCv3SMCgDeZbtMRcPGGLc8pnyCh41KGvQD4W36AZ62YieRY1o37sg",
  "key6": "2iTimWdzTJEyetyEkcTVH62jYK5ou4MSdf5YY7ur9f5Z9gFZS9qP6ZYVusbtCVd6ryhRjNxyC5CXq9RPdnrfgzzi",
  "key7": "qYoA5CDSoy9cc9j3DyeCLa8rZT4FQazs4Zh62pRt23fm6HcqBiCUkYFfrTwWnXo4nciZscDD8LrhL1EWfiXUr3d",
  "key8": "2CD5sGX41675ePanQwYYdnDxw11jvvSFu74qb3E4VZV3KQtUsdCYsBuLbYjp5yXqPvQqFBNXQ8hejgQsMAFUVntH",
  "key9": "2cyH4FqTcNjNWg8SoLb7a1dtTtpWh8iisBwhKpWXMVgHEfq2cnRjvhfVGwR4RoQRjiCPonKLSXAegWBwqzoL6xtK",
  "key10": "5HX6th6n1w54D1iVx8SrgdmcRVqqzie355wRxQiaJZuXSsdLCWHjBFJpsSgrFyvjS13tVDnNX2dRQS7r6Kai33TB",
  "key11": "3jEX44UdFwb6bqPekBvDJoRL3gh1F9dxNLM2dD1ZSX9bq9J17JAZySy4st59GATugv9m1Tatw6RDL7ZNDxKU12XE",
  "key12": "39a1Zkvna8qTsHxx8hcM8Zjjueo6mZNfagFZ6qQxpsoZp7Ln3EcyiUg7mFLcjVuFWEtvzNYkbQEKwKfVSZpiDWpu",
  "key13": "4EEd8cfUEqqBLw1zE1sAj4jLqA2kwo7ZMbSNuKR5FAeFVaX5KTmAFtmmEAe7qNxo29dAEXjiBVzFvsCqWu2vW2gN",
  "key14": "4x5oLpispG1AJT7TH8t9uwUBve1Pq3U1o5y21XUTUSwD7yWCqQB11b2QH6JsrZXEBwekDpC96gp9w8uGHpHScrrz",
  "key15": "2Vw1WcHtpPwT1cx3eK3AoXUn22qJSeKz21Fn5xNgq4H5KSuvXWmYkjoQyCidW9rDztG3Uo4BhG8CPkV9xqk1Jym8",
  "key16": "5PXWLbQN8D4ud9aC5pke6V4cHtoiEf5XgjXRa1aEyP67Vu32LFxnjh41fMCG55JFHEmEUbBNjgqQW36JrFYPczr5",
  "key17": "3eLFbTZXKStaKkhqXybrJZVGxXYY4w5TpqaknGjVamFYNvXkLHWgXDCMKmsEyk7hh2FTZbXWENNoFkm9fggJqa48",
  "key18": "5FtciHWqd8WNBqmWTt8vW2w5ovLtvpvuYfZfKSBH2iNL2E9pSNqXNmWgN6siK9RswTPfRj1EmU8GzMDsPx52QtgX",
  "key19": "39pSmGD7aXvMCMNFg2VZ4VBDRPaUnpooxgkHC3pFPptGb7NhcdoFVg2AnjkEwwXp8FveGHmSmei5YXaZnJwP1TSX",
  "key20": "3NmnNJLaeweXuf8fAcJ6Sqsqfx2Nx6QWPu11e5pNNsL26CXN9vVUe6oqZDjL9fqrYDGH3ZV1Wew26JvXjsSijqtk",
  "key21": "35WpWdJ6AA6oTuZYMUUxnsG59nV33f5hiqs8C26MPmteSWBdhSXPgnVxrprg5Kjx1nWUT4bXb2eQT3vVj2gKLWVH",
  "key22": "4EszRgo2wcBAQrQU5MLFJR36M9GJLVqzBqjAfUKFgTvgYJFWfM4mHcg7UaZUPQ8ktocEyiaFqE3PaQ6igAgp7hMn",
  "key23": "3TxgkMzsPWaBZFH9uRgMpvZWCcBqSaDXPaMUeqj5mEwjaFQWXSZ9S9oxiSGEZRfo69y25tA2Gejs9G5hRJhSYZQa",
  "key24": "47XTqi4rnknVntRohzmm5qAUZtxeAv3ciQPbG5iF27oEn6G4EhMsQZ4ZbSYDayqsEYL3fPFGWQfhiLVj7aZs3Mx5",
  "key25": "5GWbKr5Pkr5yLzg85RXWDehbuYZacJKGdXGpcHaT7S2N9xdbuc83wY69Xy9prHdNcBrcsVPgDJoZMr2nBTNEHDbT",
  "key26": "3pF8T19KFQcxQq63FepzsJZLgv9pheLPEPNxeCqmg4L4VieNpQsUhoZJEJQUjfhcJm9NZD3sVFpU9QxF93M6kY8X",
  "key27": "3YGjFLaogEKsfsfqsuQcvc28Rfe7uAsDaLeGMdihBd3dhfcGxi5h6fiThT1v3PnGXE5VvLKHTqK5VyWhnBKyvynD",
  "key28": "5d4MbHXXrxUCjvoT1QfLc9UrV38qXdGoZfPdzwY7vAm1qHJtgHmSJA3NAbu8nABXxytsvYjTNoHtZt5ypfBs64ap"
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
