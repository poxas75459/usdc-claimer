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
    "3caX2VXVdgZ167ZuWjgCNXS5AAadCAJz8jsL6mDmJ96UPuDVxJp4zLipi7TA6iu6GHQi5jodVVzyoes5xLQKWcQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AsHRnb7WVj3XMEXgptbFEitNn7KJiaqL4e7xSv32YnLxNtdVBT3HQZsBzAtAbkyocoCVY3hgQfH1eZy4GwGNkQN",
  "key1": "5PeE8g9mnHo8EkDrTdB2riegojCp89Kjr3qXDQ8MMyETtqPVJJDJWBwBcyGGSewnWbSxxvevYioCF17UiVMhfNYX",
  "key2": "3bYS8eZCfxPPJtTrjoyjDEYtfEqCdNHsu2KzyWMsRC375nezYGGG9ScVNSrR2LCWHzcwDxeHeStFi6vK1sTwGCas",
  "key3": "63p5Cr55wPdj4zay7UcNoZZ6xQsRBvo7x712qLU27CSFNoV5se1GCPafWG4RyqFgXsK9oy6HVgxkGeXfA3gsAX3U",
  "key4": "5BZLpUJRsAzMEKaHGpWCqCUSYxxG4ChyUaDuzcqLGvzipSQmJVL3WKp5fwNZsDPK2kLwQRjVVmQ6PbwRc9nZ5Ciq",
  "key5": "49VoEtNTazVwhesCuyoKLtrtX5hsY8JRUvjcmkZR7tfc6XaDPEZdqthLvF17V1yMycCP7Vzq1ibLANRZaJQWfVJN",
  "key6": "3ChV4hzXGxf2KvnAsTgWqrJqeZpYsoZHwqmqKsLQngR9jWNmscFTqvkakDoEVjy6cA8igQwF5Ki9xcMgWTY2rcnb",
  "key7": "5dvBVbZw587uj5gpirBN3b5maK8Xx9rCrfFruDhyz1gtucbsNa8CcnQZefpB4qrCJBDAPve6toNji6ZjA7uZqz4v",
  "key8": "5UGQrtjNUEA5ZDtJUUKTZon6VJwLEUC1xJkKf3MDhgeHT8msXPCsKmzQ4Zw74835nrp2sXczqZPYYNrjVqX4UzaX",
  "key9": "2FUESHxEhME7Q5E9Tv6UThWE8TGVA7eJAzmczxpzvxXAMYNCPXwXNV7Ng4GW1KJEfi13ssJ7jMZ2uAdCdcZ61gmo",
  "key10": "5r2sYvbmsWAuWiFyvLTRbnKtwwBo1ZwntPFA66ceGhKca62JvUAUP13nEZ5UbGi3g2C969RWRmHhZ8CnMAyjtwFK",
  "key11": "4mUxPoSjjwTebShMz3u4HFKUCYQgKpg2HjTt5jMyECwWa12UZQPVjTQDJeHuSoNxm9WDUqKSfzcggjdkQgDctAiu",
  "key12": "2JH1YFRhGv5JtKwsWw161qR5PkdX1TH3WQ3WvBxv9TvxVPEAkUhAawftLY1Giod287aLS96ENedrsYEHjEsuLwQX",
  "key13": "5YfgV4wtKu31UVfTJ2J63M8ZJShHqfvFfAm12MYqPmqCBB137WnGCk2jojh1DV8qfAEWd3BZ1CkwrcAoyVrTGYEK",
  "key14": "5t5NDyUqb9eJ6rNZDmtmWRS9ufU6QM897eJeUdWhTFQmGwg8Q5o12ST1Jh9m1gDXgqxbu7dP5j1rbCvTyMs5skaP",
  "key15": "4MwCq6hZfc995pgAXBLGGwfnStSLa1iUvpEyFV24F2in2bAEjABi9hkXrnTA1pNwnSffg8fw42SHt6DdpReMDq3X",
  "key16": "3Vd2DYmmUsb4aA8tW5CJ1kcMgES52Rvk2LvZ5boJ2zfF7XQ7pPzNVpQ1NJPfA73Pp9mWeqvLQGMHF6UpEa6Q2Z4J",
  "key17": "47Ps6Ujrk2w2jndWtvMRYTp24LBHzLSFP5NHqTLH9vaMQRMFDEvAimjPZv4SMWcxCWD9nsDJvwamdfKWVD14gsCS",
  "key18": "2CwLZtmDsSfXvLRjFx2PqhMGBZs9n3xGtUQmkARcJEgD17d3P483zaPftLe9PxxzD3jCLM21aaRL3n68PXMCV8Mk",
  "key19": "5r88wPS3uBiiRruKscjqradehEKp8iXizftCbGSak64GfCeuk5oZhb3wcZKmraBmEHbLQvFbqcSRk4xee1Tv4sq2",
  "key20": "2oa8wkdqK2vjcMjwHDsyP5vwTmz3J4AUA2uPegQeeHmagBtYsYvZFPsknmy5BDWHtkiQikQQXHKuwhUZDpDvJyCu",
  "key21": "4YyunJfvV8eH35rwXVGAj9iauF9wBXDw19M1KkFwtRZ79zfwQJWXPqzkaeDKnc4BmPzFk7QyqrZYUX4nCUUAcs6u",
  "key22": "LJXCSztcFwQ2YYMwUSFHG6nudbFywQ9Jut7MEL5hHt1s5vJ9hPkPjcnWnDg2FQ9ojtK2Wquf2Aqm2mcC5ycoZSD",
  "key23": "4j6n1ixdJ1encQtyksSupuBkn3UWdK2oFESxcDKQLtfpUaYfykhDLMgYR61L4jwXce6nc5rDdaYQi63xUFrWdsbi",
  "key24": "2jXSouuCxDMmCeAL6xgZLFRWi3YHzqTbjXvUGesEVZUw4XfZQwaQbeTPijtFaLA1yWyscoe3QkNCyPJTPmXKPZtW",
  "key25": "41XsAEGHQfxUMsc4WhqoaPUqk615WAS3jNjUVcRLayU23zXJpnb9SjcaRLtc39miHR3H3oQcSMnZnogG8AemfnQR",
  "key26": "3FnWGh6x7treM7NXQu3TNM6ngW8nVZvo6AdYhtNDCT7Edzca5o7qvZKkLdB229DxLm3LbSZVBHUxGKZCmyPNAnCq",
  "key27": "Vhdui4NJkED1pmfUaoq8rsu4d5rcLxQanahzYbdQnd4gfK93CdWB8YDySLBswBzFSB8cV6Ms6Qra2R46QiuDiP8",
  "key28": "2u85yv4jBU9BK5Dhc8yzCgN4tUxAfGMohkcsQqvMbtHSDp8rrPbwWipHcjLVi7JM9C5eg8xZofPt7wyocW3r1ivv",
  "key29": "552VmwbuiT6NMQkPt9FfLQxbh8kBHzKijifwZVFGyZhPW8mJKTW42PYuE8TxEqV1NzwFG6miPScYJkrzfYLR8euy",
  "key30": "5W1LTcQeWNrnmukJfGxC6jB7yXXQK7ymxrA23cSjxTLoaBeTd2EGDG7EBHdEBCfWH7GJaD8tewzSbjaSocht8SEZ",
  "key31": "4YdxCzLkbjxnbwQE11BWkDJo74vng8FJdoNbw6MjNpjERq8iGrCJZSEgdwoXXUMvYnoBjY7XA1BcC61rGYiVsJ6D",
  "key32": "5G38ho4rscUhdqXj83QgMh94V2seEUpc8LdWDUHvJicowZ6jH7ThJBzdHi8A3N9cKLZHFkdSCx217ZSPEZKMysyj",
  "key33": "4UxA6eYxnEjPWiQTJeCdnWdMH8ZuVu3DnUDWuAHMu5Yj9XpMqsNX12QEzMFXDTW4ipPhVVRojB3RXjeqzPNuPS6U",
  "key34": "5rRQwUbnbmtnJk6sJogPpw6DxhApbEk34962Sk9SAGHxN6itkVauuJ8TagxYfg1n6zq7L4wu9DwAx2jE1gE1AHC1",
  "key35": "3ahS5mLxrCLTN6vZgyVpdWTNV9JuN6pEG6tAWc45Kwy6W1PpVzHmB8SdYrjTBiyDiZao6fwedcd1DWeuiDcLHymZ",
  "key36": "5SMeoQ4w6pMdMxoPHLFNNFLUShjLjipzvH619o7qtBRG48wNv6cDPkRHLPVE9Lipx9pu7HX4fNzywu8qCBjrSGE3",
  "key37": "4zEyrLXmKRnFzLCzritfgeW1zqCyi9p84wKMNav4Yte7An7HoVQ39bwHowd6vjzvD4JTKYcE1NuY69268yNPiQou",
  "key38": "2Qik9F5UWYAr6y63MCdn4CM7cEZuReV9ReUEGgq4eJ6bEwU7wuJYkCrCj4hgHBRDEo9oorDtTv8QVehmLUVQw2rP",
  "key39": "8PhqMRbCk1EKBRJv1zc7A9bkUXTCy5HX9X5hZr2TTBbzCKTBWbm9XMb3sMALRgTwutpuBe8ymNSkHtSMjixS4fi",
  "key40": "3stk41Bmy3ziSdDLTunwCYjc3Baz49qpjB8iaK4NJACK15BZMTGdD3T8pJi4yh4cdyrpL91uZtGUd4Pa9J5vGNbY",
  "key41": "3ZpkcyG6wxUuGJTKDZXJHfPHKjsShjk8juqUTCHwwhGiXWXubjKhLEaG448Q2EoZmm5W5HDJRpxMYka7Y2wPNPMY"
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
