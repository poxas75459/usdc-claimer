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
    "FC7DUYBUWCqGKb2Ne82sjTqeKNVoJiqGPFdxE9QpGDhAk5ajbmtp49xJ3mtLtoFpkFvCi4M54fygcvK84kreYps"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bE58TCuy5Mv2nMKaBZyTTGSeDiei6igDb4754pYQwXWK7zfrdRax8oDVZAfGoZ2K2YH3fxNvom2WKnz6K1pTE1s",
  "key1": "5DQWqGiTnSovocfqDdBcPVnwpgGao4YTi7QkMEWjvRfK7eCSAkrrJKwYAPnmkhUq8LmxCUgjiPxRr9TwDnAvLTwL",
  "key2": "3MeZxf4utcGvTauD5SWVe5HzaXLiz3asRHJsKW31Huvzdn4MFdFXWFFUMk6N1UBBBsLC1BiCDM3PYD4bPbzcv9xu",
  "key3": "58BqwnvS2AsHzqJw2yYnJbWzHT8hQZMgttWP7KfW5HcFNJW6KCk1ySs2zTd6h27sHutpR4SjhjxSit43B4P1mpa",
  "key4": "XbYukQQNYT6gYAoDAR9cSbnshyDJVW8P4H36VDK4L9ivMuwHNtk3KL6E7hzaLdobWCg79eNDqStbNQRzXy8qKwS",
  "key5": "82h5Esii4YVQzJmSTF7hF9fyX3oYCBXpMJZYJHbr4Uv4WGFJAwrVffiq7TLwLdPY3WeHRULoVSvGt9BvuvMbFQY",
  "key6": "5RUf4u2VWdqUb3CqVxjXqUQSVfqjDuHQN3SWTxLwT3YhKSaRV71FFMLGrvZLq8TaMsT8tnYraJmWf5CwP7bXoyDG",
  "key7": "2MHoZEuaR3xcgofQQKNa43kEN9raUyf9npBCwfXhwi7yz2T5cmvVcAnizu7w9ZUgU5mfhkyK2NwqVVP2kgxR7HC6",
  "key8": "4j8B1QewfteFwRQj3HSSp9H3LN5QrivZkP3mCwnDYk8RWp6UbwBUE9HSBfUfWbr2LXopGMBzRqxBj9jgYjuaNprn",
  "key9": "2TocnrHqJkTXZoHbnDYXmULupfW3f49eCeqk3DXbv7NRGL9xzm83NT4KAcjswyvQa7aHJZfQTsaoUwiNuQ2wczSH",
  "key10": "3Be29oS15AgJyqKBbgyQYDfHA19RpVLjtY6WbY174DZ81ZoEccuR28RahxthDyWRUmgjivNDuaV7Zhr2MydDTJSx",
  "key11": "48r39LKJPMqe5etc6pQquYV3dee1jvg9X4tZ9MkmM66deKE7rk3mWzsAiYGpoKEBLHvCeUAAgm7VF9RoQAKVZq77",
  "key12": "3mC3UMq4K9ZdV6VeDRnWycVjfKZ6Mv9mSv9xzVyw1LMmgrogR1XFV6RqNHy9BhCZvbCoF9H4RzXnriyXEWfaaDyy",
  "key13": "3yKGjhXJhdUos9E1qPkqtyfSTZCWR4nuRR7Y2GxHVQ7MNGkoiLSQPjiWKNCdBAPSNy6KcUhgtmSCtTHYQe3MscMS",
  "key14": "2zKUWd8BY9qj4nwT4Kx254bnuAMuCNYmGRKpmsfmViFAp3dLBQHN7KLcnBay7DXvB1H775vd5hEuBCi8YEimER3H",
  "key15": "5SDJ7CsqSQ4hMFg4dSUzJkagmihVvizzJkKbDqN6LxyV4onbtm89qd9nbZERuarFLvPFV75pA2eiLCNrn431XnCp",
  "key16": "4UPhbEdfdyo4DJEvsmvGGVDFLcvpDoXFY6N6XkmswHvmFBvaagTGnTypKbzY4YovEwajt6q3r3KPfBXadei1btyA",
  "key17": "4fUBztLcFG7G8MCJ5KYSS1pyp7KQZtGfZ6abCvBQncZum7x2n8oCcTGYdiP2Kk4PxKZRnASwVqjnnvtku21GjCQC",
  "key18": "479pXyuKq2Z5LgAmFj7DKxD1pdxUndHqU47q3kP2cPGN9mDUnbXew2Lj3oTWF4WE5hXnAPk3D3WH4tHf1D4Bn3zu",
  "key19": "2oAp9cBWBkoiXD5FUf4ysrsqWGfSswpRmqnwcS4gfje7B3FHoaRqc7S5Wy51Ht7BF7Qahn56kiNY3UoMasPpizkx",
  "key20": "35EikL286zgxSxUqEdjkJKF7epunuXrCyHnQDufVBeGpQojayyoJf1WhEWDwKHSfWTYp18pMjzaPnze9njm8AhNj",
  "key21": "3hvWJco5XiqXV33xuR1fKMLGqPrK69b8onDWf6AMTpeBXgym9i8nSKehK5qi73nQ7nz8eryHyaEGF4JKQVtnnGbc",
  "key22": "3s9HMmkX8S1cEmTpV2y6swbu8KQ6xM1iDWLgq8EcFzGWj7uWvUMNdGU9VETDzXWkuL96NQzkJFv6F51qNqKQDnsf",
  "key23": "2iuguSNF397zdcs1jDqsBjarTxGZyEyamjEGctNa21XUUELg4AZp1mgDNAXQkbUYxRvscvx569M1nNGj4j8F2Jxw",
  "key24": "5bkzCNEgE6vVsZPLXGVGgcKXys6eHubvArWUgvoLTAqz1SC6foYPAMrHVY99QTZ3eBGZq3NhjKNmEeHYmzFhspzG",
  "key25": "2GFZHmLFT2aFbVfgKXHyZ8k3qqLpdGy7wGrSJzicQ2jHqTDzHPJgAn2ppYwEG78EyNFVv7aujon3266oqHvZ4Xdr",
  "key26": "2husaEh5BGKgAwGPFBRW9u5ivNhZdAWyM3dShuoknYfwnPZrx77KixNericbxwksaVD7fmCXfiUZT9Ssfq3bNF2o",
  "key27": "5Gejwpwhx4Sq4GCQuw3oFCjxZWCvLvvkJf8s5fUGTwtJQEHEjGQfyqeSxJh5noQdcJDefw2kmcDNZLY4tS9qQ6YG",
  "key28": "49kwYznn6v7DQgsXAQVAbcpa95pXLAfNrVV4t7hZ27TsRtqmHXbV2HaAxfHhR6KRca16G28ruvJP1RzyKmKEk7uF",
  "key29": "dVjLFBq58zNfPN5YEa5MMU5a1NhJYuomwpShDkskPCmbD69Zn2cY65F8TNrnGhB6yGCNe7ttvTSnxgch4N8G866",
  "key30": "25YgTz5Eirz27jaxaNhXWJtWCPAYdc1p9wyhUXnp3J5D7Bpb1LXZguRRQh3EjrYfw3gp22jp9JnSWzeXMMUH4njm",
  "key31": "3kkbUPaa2ugGgL1YhdMk5XoHbayXHHNd1ftChgTSfJf2pjgPmhAob8dxWda8ZZKzYcbBGuZgzNutVGGpGjUhkDnR",
  "key32": "2ZSNTqwcjZWh9b9Xh8rJGicExuK4SzNFFucm2bUPJ2Je3ieVK64q5yKGbzbDHoKGX8RjoaYgJpxzqnCaHk65nhQJ"
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
