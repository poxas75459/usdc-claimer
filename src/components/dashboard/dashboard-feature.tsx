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
    "9L8ecftx16i9ujqWBpCRn8MgminxansqhVBQVx1LVC8vZJgrgA5VWSHsU1fRYAJAp9FHbsyGDsjgv6qXAGSe1ag"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mgKneDqnz6Nt5W1mvRJvM9G1zF4Zp9JF4DZsEbpkTpduJcCZHMkXEk5DcBLZcioK9e6DFGqatfGBMQgZyKznVbr",
  "key1": "gAJg72mnAvMWwhEsNErNf1YdemaPHUbpUeFtN7BmB8YyBRsQqVKrxA3iCMtZtXM9PJaGrmnRHMcAbxbWGvUs9RQ",
  "key2": "4Kd5L8LZx1ohTGr2KSpGhsdAUQ4hZmmYYbreTXxYmzx1jRdDcsZk8SGTeV7xZDzkeNeeDp1cXgV6o7mhHr6eUvP2",
  "key3": "4GHQazVUauYq9cfhcXN3nRx5iEXUmcZLKTL7bKvuUxy1v2GZ8njKwqNFMwzCMFz57kVqaYALJ6PAbLQ7otqdS7TT",
  "key4": "Lz2x38ZHVHAKV8Eq9aQRREB7sLeoav8MRvXy7Zj4iUziuLsWetzKefkExyUaGxQAMZW9fykx8AqVogXsKTfaim3",
  "key5": "2SuWKGhZaxwJFfP6aAndbwawQjioZzvwrhVEyqwTv8LxLWWidS1rGhPbZEMgyhLYgRBcKPAAmQJz1dkLVJgGqJHR",
  "key6": "5VZQ4XLbrcHc13MGx97488JtXxvZ2eZqy1AM6SysEgguUsFSGMnj26gz2iKmcDLJs4zPmkhsCKmgvxTu1MtrA65Z",
  "key7": "2Q8eFJCxU7uoJmNs3qj6hqLJrd9V43EJbnkchhHdZFW4bj4KZaCykRPfVVkpHYcZEmbEE4MVhpL4vNT5RAKwecbh",
  "key8": "4PMR965mr2MEiy8hjmPpAMzVQPqQ13RrRnSzws5ybYbH3rnYpxTyBkpNEjczde4n3PtPX1spkyey8WK9En4AwQwj",
  "key9": "4211YQhRnmnTiFrYufSXZdR6WrAn4WqrDZBy83H38RUcWeK2yBY8hzBLb8uJapQ384RZDscboxFz3oX48NKwfdcQ",
  "key10": "5dcSfvKKbFDxKiWdu2igaHD1xCViQa6r8jorTbqoNv7pUkTzX7DAgesx8mXziraYMPVoJmsJDzyBnQhmdm283ncq",
  "key11": "3hb8ZfhzaBxiz6pdZiLfv8QhZLaZco8HdZLPTxpSR1biPcTnU8NHi2Wd2Jbgx8T8F2xZo9m7oXWLR2HLD8QXVKQ3",
  "key12": "1CTwiaeWGfyzsGzDE2GCjfHjSHZ9hQCnFiQkQJwDzYvW9CryugGDPXN926d6uKGArg7wtKLVeZ6eaNc2CdCGcBL",
  "key13": "4ViD3N4Qz3PhKryjcRL6JyaBQNLvLSZTG4osrJX596n7t4Zyh1nSioNja61yDFfBJgWYNj65U3FUZ1goe8CgQXh8",
  "key14": "4LxqCJjPXVkdrYnEgThpUfUnrbo8iYKemjU5Mzd2eCZUot7NA9vBR3rhJrxPubJoQv489eJqz1s7jvH9eHZkhin3",
  "key15": "tkF3tzgndKgRtHdHfA6oa3w7PgyjWkdz6vnZUccNiARU72XzaJ3VEs5cDqPfC92jXdmxz8JMnYayvcA3zi1MuE1",
  "key16": "2Z7p7bvvyPH18qredPP8dg5zrMUusNqhLAb8UvpwqD8gq4QjdJD5jXwvEg7FEMYzRLdTvdgdEGTF2UaUQRdGvpJD",
  "key17": "4XGgMZAqBNhcKs3hVj5NZddDiwhK7gzt4W261DBUusztnEC1nohLPib71mwGNdbxUxZvdq8bn4UbdHtM5nvW3qPW",
  "key18": "4Tjg9ph2Rbu6ExzLS1c1xuc5reHcTAkFFAxD3ndQc2rgjnttRiWA2LfQ5WYcuhG1JtcjDtEa13qtbbrnJef1WcLo",
  "key19": "3enFmVqgUVDDay6FN4GpD2mYfaELboyKhhnipmF8qR9jgWuXnTNneHzoi1j7uwXV8YccgDqiZAZwCuYusArXH3Ks",
  "key20": "2rmYRo1nQydt4QDSjuu243Whj1HQeeCTje5gytkKapGrjwGKYVdKzK6YaCE1MZtuPwyLBtTSaDNqNgNQ7UMjYE2N",
  "key21": "3C92p528omTbBByEf3sva5wzyfHwRH4K6XxAL8ZPpNezNRZpXXNW2UhUkZpNzUmMJ2ufncA4Ah4LEm8inggwokDV",
  "key22": "3RxYckeN7vJrStrvA6fHVR5zjzbKo6sx6jLdPecidzauHfFHh7SHPW3Y2wjZMoBc9PW2rwyspnAsKqrNA7FUaTZ8",
  "key23": "3phhGgGmxMR2KKXgiBXRMMddc7MsfDyQBwEWbmTcqATmekg6vJ4xuTkNhBRRuDiPHRDF2AmKFV8ZCBkjjH1Qc9YF",
  "key24": "4xLjWpTTfkSgVCmVtAX8SeTUmYgyL5Dns51PNZhNBjgHKEbNbCK5ZcGdiKY66mwNNmSn8MuRorEWUAHAWBhBpGSH",
  "key25": "k94XZt2Uc6XuBKQ5E3tbYAeZe6jmcDT5wLbFA2bgy1ABgBPAiWJVpJNCJ8ThVKFk7dXyDrvk5THDBu6q9Y8wXCv",
  "key26": "iXYwpSRQinC8mzkaSxLcaPw1NCNx4MGz8pME8S8qnV1uPaSCDGXFNNS7pntRMmV9Ktsh9NGVWnvBVLzfuSfgSWY",
  "key27": "4iMMSgrASN6xgAT1nwr5AzUNxgmDkPWdnhVZrhreqB8vEzVTXpwWLedHSDM6cYKe6tpdomspS9Md6G3qsWMS7eD4",
  "key28": "4mHEmzC4BtPMsKuqFu9wL4vZsRXhY4t41n7tcRFYGEehW1Cvrfhd2J7vxmNRxK2oEgMfpKKQMyRaMgZZriXKnK1x",
  "key29": "3znK3SjvHEdhJuk5JZ3jC1YdRXe9itQCHV7stpxvMv8JTJetXb3BPKr1sYWtFKRXMPXAfZmGYyM9ipLF7rqs5Q2i",
  "key30": "2mNUsxKBoqGLs7kiGdBzX1cSMpE3v2vpAnDgJ3e2dUGQHm5vJ4HJrqWYbCKRS4hhagifjL4sxR4JsoFSdNTubiC9",
  "key31": "4mD3FAa8PZXRvFm2oA8CkrZ5ooL8ooan7q3Saq8Tty6deai1fqHfcYHYugdLfV6hemtRiTdmBGpKDvfLXMwAxCDG",
  "key32": "4h8kAkJV8hjfTvdNjbHYXp4N9kQbLXMt7hk49skhNAq2eY8d9jnPQzchhB3PZoWuP8DG6MrrHvKpscxyyAniEf9S",
  "key33": "5XnJkxP8gZ2USJpf4Jqo8zFxHxukpvpRqQMKxTTmScMLma9Zj3rJPamt4w2F4Hu1D4ZnnzcsffrtbiwqMkW6J1BZ",
  "key34": "LKTo5eDCBjrKUnMTxR1VdqKe7xK3RyJiVJsqZYT9cTLkvksvKZv6riD9orREM1N29nfPzPZjU7DvrmANEioV64B",
  "key35": "4e3D7vKktY7ELGrZRJxcFHrrehKj5vHDyQoh9CxhbDwRq3wQ1wGk9gEx5uUA2x2kfdydRKNza1kyJphVcwonPjxv",
  "key36": "5EbPXmyycgR1Ns2MeyJUCKy6WhRrTxTf632yaPCc6KMRU5uvA5GfQUY768VtaUTZ1YpviLz9a5grXr4Vy9F9BGkm",
  "key37": "PicT5434XkhCYAcJVvtbe4oo2cvkoisMYHW1x6nLwBAS1WfhXtmnyvRF85o384h3z1XeCkea2ndAZQeY2vcmmKU",
  "key38": "3mBDRRyKtsG1LXTeTve2QUSbyTnCQnQpPXufGQidnNGC9SvYDWH7Fb4U3wghpNdoeHgoiScEhveFntJei5gojudW",
  "key39": "cDBsfd6ERT1qZardZjqW7KyjkWCgzUW6tmkCpccEJoxKQDzDeYi86cksMuwb8wkLjoi4AaTfHJvAKZ2hXEvugjW",
  "key40": "TBekdoSphSgsddNYHpEASmw1rNQocnWDtZrqMej6RwHAWJpNXvwPC7R1ptMaqZyDqyQkC9hEpodrNESkDof86pP",
  "key41": "5QYjaXbmxbpLeUVpX2EMY1HHfeR78QskB63Ko6RYuM5fe6ctMT3mvbsAUk51Cq2GBXHKYaYkNfc2cpnkqFDXiJfc"
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
