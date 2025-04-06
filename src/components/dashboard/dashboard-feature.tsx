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
    "3Zm14XbjbtUKPooY2A1QDaGfUuFT8K8mDwWRbvQpZAN6NF7gnig2rwu8HpoBwaJ5voXVkdibM7Uoe3HgQDuCxj1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kAKpQc9X2N7yjeGWF8yZ73xR9MCJXiVUPA4fXQh5xLv1VggjcVAJ21oVHgWWgxLgsmAuCLj9Dn2r5nyJCA1E9D1",
  "key1": "4z1RXVvsxLsNUbFgxMQRoFkNrXzV29rR7xCheNQv5gN9KeDt45XnNvJ6tr651ZcFqRWpADxoMnCYboPp1MNhjRjF",
  "key2": "4ZeYFJg5HUyu3VUQLE4Ef2UL23TY8JcdouiKVNBaeQCodDggEaciAJV39UxDfNMn1Xd2EAwsMd2c97BW4oAR9qz5",
  "key3": "5YKTti5Lm6qQDtbk1T7YMFWLjodGsu51AAvVAAVhw1AL16qhq6M84YCodhBzYoaP9mVmBnALhGrwZUYs7gmhoakY",
  "key4": "3xBiQZoWAd496XiS3ZMXfW4wVsEZtB6N7vUWEdA5sSycpJNWHLtLQPaik1G4Ncp8G5CkgVozoCNCHsUoRiPUWK2n",
  "key5": "Ug4DsqnnfrHJwmo4zzFtr5xTixwVCUiK2HxZsQK3jTqWuvyh7P6YezBb3BNBqpSzXjjmvr2pTZAiDe66voiSzVX",
  "key6": "61hADwwkhSJH6trbeStSMSkSgT8raPpVAb8i1ycva9N6iGCowU8kjw8xony9Ko62NgYJEuRkYNPKK78umdroFSAV",
  "key7": "46U3sD5HgieKqmSwwwey9RbpqP7UyHWyvMjbdv2Qz9HrdcTng48ESHbevwsZL2WVhLrZaGCytsxJivHnhFkad6MX",
  "key8": "5W35FKgsrCA46KZZiFtKZhenqH81PmVL4wZyZzfad12gWZ3wADzTvBjUwH6aN6qfz1SFRhd6dqL9QTKR9UZHQhxt",
  "key9": "4WSz9bvUvD9YLHmwD3EuRFnzV7btsej1RMEX4NuJXUBVUAuHPpv14YREQLBMUkjJSA6HokDLYqGvmKMuGBRYNsWS",
  "key10": "3sRDNCV81eTF2WZ4R5Fx5aZsYFnsTBuYtFTWdN6N45WdX9t7uPcoLFVS5aGq7zHJUEHD9fiLoUx1KvXRKtsnJLMp",
  "key11": "3x2N2USU4TgDbRzLBAW7VbDsqvy1dKNHZedtWgoddRzrbk6YGNn4bi1oTzBXHMM1scTVgkZ9R6NpXRomABsy2U4n",
  "key12": "55Hd814YdadaAf1c7E9q3V3ZNsAMzw6EXJd1162os8J8agpwyEbS7SBtRzavUc3cEsdiG2MPNFgHC1BdoGc3RPbU",
  "key13": "4ovT9eR9SJXYqa8YnFnfjzcnJfix8jB6FXNyZgequhCYkAL54JbPXro9R6Mac4NN5GA3iWeZnR4R9yVJiaPkP6Np",
  "key14": "3KE4iFZmytxxv2C3cBmPqdRnBzvsGDGDokgfTN4vsz9UKDCGwhkwBfy6EkqfL4YevF4SfKeo7wbx7m6rZm16ULpz",
  "key15": "2VJ6bG81GQsv8qjTBudckH5GsKMJhPFSMJW7n9rxTDuJpRenetg5VkBw98eWH7faTUUZEGAwu24dvBLqadsrBDXx",
  "key16": "39qbK32jmfhPi3UZVY8XxoAs3DK5eQHWtghyDBcQDgsy8chkdT9w2PRtR3iQueD8fuVqnQHqPXCyg7fRhqaqFWGY",
  "key17": "4VcLczhTbJDfQTR12rh4v9uiQGvJWq7RYZqBV24RLbbAHYo62PqaRGLppHABJXCKaYriEZRapoHsSWzro2HsDXxn",
  "key18": "YKV25tNXsj3WyFrh3NUUZZwJBXiXNKGTBcsYoXtzv3vXautYr8wunnmuiFPh7wRe242BXo4kdc1nLuuESSd4ibe",
  "key19": "4FhzArZkcCh7Xb6DXf4xNepWJBbLKVwT1DFyrZLwR538Ka6zYBRzhHBCc1tc4myTEy6TvYdK4m6dHh6XpYaLKGmz",
  "key20": "5oeGdw7To9LrmMpVqqJGEH581dLsquo71ybwGUY4HxWADQRHS3MLYqRXvW1ueArXHmuEGi2nFRAqJd1Cn3dYU8ud",
  "key21": "pepQfsBhiJmuYagfM248ob7psgRungDaLe4TDJAonFo6yhxnv2wTu9BGL8anixgn5F77Ard2vPU4Gdz8F5i9R5T",
  "key22": "35hv7HpmHEjkxajP2qYzNekUrdkHXzUYqd48Y6wy2PX3dkkQrJ7zymNTpRHxmcwTp7KazBQFvnEBdAksmGoVpCdC",
  "key23": "4DH1H6oyozuJk1GyEHxgVx35BtJnbN9hW1dYG92uLsWLvBgKMBVVRrxgwHqWD6cEBp1YwrTM2FtVGSHLdhYxRLLe",
  "key24": "67HuFnqZSowyfArAWQ3mz6Jj3mUWKp5YqUpo9QfEvHPgD5S7yoZjbjeqcUiogQwA53Pxs8zC4XFXPVrH8RMp5zWT",
  "key25": "2djHTG2W4gGpYcUNYSFU5q9CNskpHyWCfgjzEzcF45tBBNBLQejBMdZXEgu3MPaJMJyC2PVhcmGsiomVJsgNahP8",
  "key26": "2rwvkXPzBUQHKsjhA2fNAvaywF7z382QaYtZkQCnuXkcgWvUTBuPjzqU9AoyaWn5uwMDzwDfmqwQMfrdnFppdxFV",
  "key27": "5J2SZJDxgQ2mZubrqSrDrowWuoQx12YhZt7YSe6a3rqFGCSULdAWF6qKR2orbeEjnmq8LWwdwBiPLDgL8rp3ePZY",
  "key28": "59LeMKE9DAjA44nNdJ8vn8aPKvKLsPnxRKrkCqoq7k5guijwA8vRF5AHAj4UokS9UmgoX4KGjmWNyyu3wuDuQoQx",
  "key29": "5HBn7gNqJDVaT9fNxZbpUEgph8uqsgE45MUajfTsy7YNvDKLv5t7xkqanaLAfkCnxFqB43Q1SdNj6FXdTgfr4Ndi"
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
