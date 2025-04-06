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
    "2LpjqVafDeeP9Cia8aykN5HZ1UAiogc2GyHGs7Amm4uhZ4hJZE4JpzNpwvmEnuZ4Jpt6EByzcH6MiPGEQDFFvSFj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32Aurs6m5zScoHUvzLk52X9asKX3d4CmBs6JeKEaqKmuAweDTGmM9ZUrBjxAVUdWSboznunoD5RvwTkZSBKjfFLg",
  "key1": "4eHBzaMJPe9S7eqyVymCLiq2V5bhXKuLKLwWkRpEwTJTo7cKw7h9d28NSQpQfnx7g3rzFiSWJo3CoeZPbWQgKjzP",
  "key2": "2Z42GykhZGXjiBncBXjEovMHqfhqoqecRUyBAYoVZyRqzbVRgDiUwBvvGudydiWqFgMkzM6C2mdpNPHiVXgp5SpG",
  "key3": "56Q32s8mCTmEPYyR7LW4vqjmeuyCv5vBavematRrxNu9ynQ4ErxvuZ9oA8PPzEQvnHgREHii8zw6HNdHp1p5vyzq",
  "key4": "3EZo6FEucZaQQemdKLrBj1pUcHQr7Y9rNz9vPNSbqnzS9wfYcwFXuHLq3HgAJcopUHQrbgvf33KnTBvJ6Zrib9iq",
  "key5": "122S3GEHTnWWmw7vWVN5Mwz1Cryd1goUw8i6rCwaKcowdFFXfT93ya8adWSKBGYFiWubRnB9sosneARyKnfVNZRW",
  "key6": "1NspBzX2AREMjtvHzSCwTVJcafeZXdAJhSvMB6a8yTebFWnqeENpgEcrjZm4A7zZzsXTxxdbYFqyKH1hv9dHFPT",
  "key7": "4rRmhFWFFZkYt3zwbE8NvWvB9kjg5J9j1verKFHZNzkRGBwWzcDa1PaQwzvcvqEPXGrMZyfLkbePTVdjaPJ5kUst",
  "key8": "3g7KXLhJgQtroDRkAnwD492vgVzcD14rqYWGyCb85datz4o8i5pfc8Crsyh4npS7dVUe3zfR8d9snbi7CAsByRJQ",
  "key9": "3o9iGLxYCHfhBUo7tgN7DTZwaJYSWw7tKBzu2ciVWVhLP89nqMmvErLYBTuwPYcqwWDESKVUahzs5m7YfCDzPfNF",
  "key10": "5SFGrk8qwegga4MrreXFafH4PHeQ6VQkWVUUCUmzYo5oPCypYEzhMhcvxSnJh1Ww7Dj4gXfkiGLbQffg1Uw1ty5g",
  "key11": "28tPiZJ67uEHYu7WjFR8wKUJCeRSTFP3rj2XPdwZofzssbxsM7xSR3SyzGXoRWW55f9MWeyWWniRtLMaWVsEWuti",
  "key12": "4Q4zxmwqet7jLQbMtE23GTeceMQSzJvSAQfW4nffPfd8ika86UWdmkVRqBFuLom8jreFVZRP5NAfNa7TE2YiwF9B",
  "key13": "k2Fi7oeBRd2z7b9BWAP7E8ekuhM6cUaeQ8aqGn9aLtv7SHCHV6SWqvefTZxj74wyKrbrwnmbGEKeByLEGmCx2gw",
  "key14": "5h7AwPRVmwa6DJ9ErkuAWCoqUxd8SvMo8yfNqDeuTo6dRH7DByQcvRtWw6QTdtsToqdQ1fshtCWqXxrc4dsPq641",
  "key15": "31xitM7xxoBtwdA5KYtYyCGtcEDEdPBZeiqRQ2znEUuwbxCHvjCnN1e3v5npbbvVzZ3xgimgLWVDom1QgwwLTjQn",
  "key16": "3ktQVKhxKVNk9cuivUfh4u5wS2oYj3LD63HzLnBwWNiWEH2XarVfHppo2Bd12ZV7jUrFAxmJ2q3iDruTsf5krLFw",
  "key17": "33p1dSYRBKbi74oeQp7bMFxe7FMGhmU36QCb5bZUUDe1N7pndpnfQYAyXuJoNwHAP4We2s3y4vq9zbnqMM9tindu",
  "key18": "4mb5QjvJPp4PV4XZ9KGMUTETwiJuSTdwAgP6KXEphGZD5e5r5KJKT8sP54GESgRRdEknnnXXXzHdkCMEo8Z1JeZX",
  "key19": "3oGFotibd8Li3FebZc5ghEYDU1SKsgjkuNe5JDVpavb22txff2GLqDAfPbZYqpVX7BxpEtgT4W57Ru96AfCBwu1A",
  "key20": "zDLDaHy2BEpVL6wbF26ngKygQZYcCTEhZprfZeVS4sosgUgfYdKT32cedv5FwVfH3ECSQaXLYA5TzvPJVGL2JGw",
  "key21": "JgxXJdyxSLW9B3Vb5cKfMNaeEzZUAuXvo3fCupap6jEuTKFxXUYXrJXRqnewfuVKyWRhc5Qv5f3RFNXkBDKNaxw",
  "key22": "2Guwbw5dGLC4UohLaar7cwWvxwWCusHbQgUpwvyL235JrzkhaKy798oSSCg38BxVLf4oUp9UduiwmFjxHd1pyVbE",
  "key23": "31EKgXHGhMP5W9C2NhsURo4jUs4qB4ScjEtmsY4mrDBCnGasNEDNvhXGMswCKLsYsiq2Gun23SNp3TsXmdG8BV59",
  "key24": "2gdArxXgpfwgwB4ovfMEhzf3g9rjqT4yemfJRdHsazyuhUmZZe5fVeXcX99h7mETTD1THUwLsCMKsoBXk4MYfTFf",
  "key25": "22V4DaC6YXFS7nMJnUvq52e3wjm7HPkiG2anS7L7ydYXK4PGWbAyh912RKLgBXy2H2gRQSShB91hanQDvx7iNamm",
  "key26": "4xHAfY6Cv9E5JS8FBaUAbqrEREP3bhriiPXujfpc6m8xyLGERDe4fHEeZCcfrhjSGB7qVdBkpCHLZJTuFAHNGAqg",
  "key27": "2nUxx9H3ShrbM4QyVM7vKLjsNLCaoKvwgLvJdLS6PMbfm1xNFzm2iif6vHzpva8dgtMP2swy6vX5d6Vznag6Ctn2",
  "key28": "3kQohhEp8Ljz6mWoqh6vypvz7EfUFcvZy8d5EbmrWn23aY1MTac3fb72EDGn12t4mCSXx48kzSfmQqftUzHNNLfG",
  "key29": "enfNX6fxQdebVafE83hptWJrtfvx5eTCKxzN5mE91Y6h8rkT8ZAUCBy5hEqfUm8ufopWS8YZXCtAbkaxG6ZbXLk",
  "key30": "3MShTvEBV9DnNmQsKfgvPWFfirscQKSRBw1r6KH7R3s1KTPQonDoUW5FJytgpF3G931gmqaUqVYmgFmkingvVyHs",
  "key31": "6kgLRzbkkhX6gSnuvfWbWF8cx9PV3c8uR5nGeUiXsXAUPxwFDQS2ZonhJTRvTjUpyX2kKuuBUsaiZMahy88hzBV",
  "key32": "3XW8qbnQ4rpntp33Bcb2NE1jy4oswcHc6iQgfwEJD2Tah1PuXZHmLApoSfYsESpw4zRgexZdM7DEuox4jxjhGGaz",
  "key33": "2qQS9WqvMutDsjTDUbTD7YXDDZ7G91T81qkaRJGYvNKvkLwtSFyDuoboZ7wXXib4DGQTbXw9xX1DEk7ZJQTFJL1s",
  "key34": "4rDUBLQWTCitWWgs8f8NymG1nM4Tn6WCd286bBEGnZVJ71WbjyDKf6P9U9ePbmYGZLq7XWWNGuxpHLngJh7zV7Kn"
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
