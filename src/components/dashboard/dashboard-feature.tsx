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
    "sFaegSVRis7XnGzMfnF7BrTwg6AzJ7cFeEyRQFWmqiRXk8sdc3vfMy9RDJHs7DYhnTXLjY25JoYkVZoa9BfXRVf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "525nyWC7Y67QoqYxF5wknGzPfw1hSZnqtj2fmdYHT47SKJx9vodGuKZWXbKguEirf6E9N2Wq36fJEv1C6MNwfrVE",
  "key1": "2LKbeS1G4GhyMesE8CojTHrjtdUeNu4fJPDaTBuoGThAgaMBE8F68GAxRQEThpjmpi13uXgCAMQPTYBKAUc1gsHy",
  "key2": "5bwWRX5sZP4zmMedxpZVAAxLtZv9dEo2hJCK8ehczg6grQF4JVsFYzEdkhPs2vXywLGUjLaYw32sX9W2jwCvKqBx",
  "key3": "3G3N2bPTkSzyo6sFQj8cdc3bVBAH7TQCdLDVmEX22vjA4BPKcPyQsXge47MUhqo1zWWhqEXXQ3my2QXfcugveme4",
  "key4": "4U1UKFnZQDxbSF9xxAz8x62RRf6zYgWZkvdAe9m98FqKEa64cMMdUWzHjth2i6W2ekw6EtzPXBJ1w4z9QbyYNU7v",
  "key5": "622CqCMKkpBVKMJh2bjuvp1uAun1bSbemX7hN36XAK9bQptMF14T2Q9XW6KY37X7PfzXT4hkSLU18w8K7eHzkYDP",
  "key6": "5BoXyxx2FMvLE29NW9gZ3FqtzM3EmtkoDmcmSHQ3zEVxeAUHc56Yvy5PYxeaYnzPZoGJhcLqsST1LfRw27armuFG",
  "key7": "a69ZCNy6PeALFKP9iyWRj7fLmnyeFrJtae2Zhb9JWaztLEFsnxkti6wGfFbmiBKTA4YZB4HHbJ3tbZ5BXvhZfpH",
  "key8": "3A1tuvwi4vuRpNenvGz3eedXEN2i5231uhCVjXfzFLYh8unbHkiF6xnmXS6Y8EYf5t4jy4h9Z3gYEoUtzrSrppb3",
  "key9": "2VYULx4Jw2th8NSLzobKShVgjQN9iW4oax2NSvQBRnAEv7rXUNQyrJjDFFswMX16iuTukf1eA4Z7hNHoU26YUmbo",
  "key10": "57sAoNtXU7pWNgneVpcvNVB1dFuDxzWKq2aXRV9Mt9gJG4Mi9jdraU83EZ9EVycbCYnpmEXn8Fak5EEcvCKS7iPH",
  "key11": "3UEKMSLdog2dAecJW9yyqZJxUeoZhEyUu5geyHny3Btdzsk1i9dkqMJs86TaWN15eeh6Vwqkyf9c14CwXXhtdqSg",
  "key12": "24YivM3Vh2Q3gN6dTqPaCNt7tu6ZCDWQo9StmpmF98qKSmgbmUVV9yFccyVnfwaHvYAXsbUEXi6z63sikXDAaibM",
  "key13": "5MfSgzrqkHhwqx9rPFUs6rvEoHuAyCoxGPUV3znhUVPZ3nQdQNWjbFY4ssX1ggrikLeyegMPAMDWu1T7p6akVmzw",
  "key14": "2iDyXJqDG3ZWEiCyC1m4bhi6grPQu71sg1VzNB9k6uTf5oQtJh7XiraZGwRQ46xEiUCaTVWLrAiguiT54SjqmZge",
  "key15": "uohEdjVPczrkzDjvPqbNDagkD22jPh2kjHa58MR7X1rgjDrMCEphLN7qFxenzPmGXhBSFBLwiJv5dJvtDkwhp89",
  "key16": "2tgnDFvvDPwunNrhYSBDo3iAz44bxUVeHwzRwC4NKSK8pXbNfHxK3o32pyRYqTZTUBANAmu5e5akd8UNrBe5HSUe",
  "key17": "2BB1nopjCK21BQG2vinQAQ75HiW2KA4a1LSkovwRhJBKHkzceHabGX9ErvQJ6FhqkGAC9SU57naVAaqGXsdhyXRR",
  "key18": "5fujjT5D2XJYDXsCkHh8gaNR8ogUPEyBZ65afuYdBD57ddMLgQUVAUWezjdBdfKjRE423qKMGT27cfgEuCDEh1sQ",
  "key19": "2sZWXfur7qyLqiRpyYL5up4dLEipSAQSSrN4JTg2mQrZDofGneE4EzT3sk2GobP3SxHbJ547dyYGtrjW3oK7sL86",
  "key20": "G3vikUfMAKnwc8VH8at3AXqoWnjCvUYCXk3YHG6C3XE1RntapSd6vujNqRLT981ds2ZhZYRdLQrxkTXTVkvYBiw",
  "key21": "3kb5FiPrPEdQe7Z8T7f2uGDnS6P8yuo44SXpWXHKZ4wW1oBwqS3L1NBpsQhirGHzE4wo3wq8Yn34tS7mfGWcaf2k",
  "key22": "4YEtwGBsCNsnfGtWp7uUaggFgsQBh8rxE73CseWte4dPATjhaBvFoTXFwQU3Ppv36qeCNBr3764wUV2hEttuD3gH",
  "key23": "62S471hf4QJC3Rdi5jk9G4HhhK1CWjXXWH83ZJuVYLxUtgiGoTvpTcJSDqBjLXC3xryDbPpRhYqXRJf9Wnnikp5N",
  "key24": "43HPRdJYouooUWbGqd5byeXyiqsk5zjbNBKPWLPc9du8XSFKFK3etsNNPTQQzxeRiJNF2wZGJGwtWfzb1qbKHdZe",
  "key25": "5A7T8j2tBR5iZo5ZAew334xYEHvqZJ5reqkRNkZo3QkTH1hxrHqpVHYL2iqoHSq62PbsppBBA2mYRvfnofZajb64",
  "key26": "gjoFU6BkCE4vtkvs9Qz3fSPvKn724aGwga87YJX8bzBDmfjbEurH81SirZr4gy9mwdK55ZZBgfMRaW6BX8HUYtz",
  "key27": "3YLMG46Fdxq9juVDvXsxgkgCLMp4NvpdBwSkeBX6oKaLPezz14cQfjjGm6mb1cvEm8S6eDRQ1omVWSkdkS9thnHA",
  "key28": "5ieDRjmJ6gdSgjo3frkqn5ZsMLuha8BG7DhYgMz2vNAzHka199Rf2D7N8NNAKQXKoRXjWPMPf6YZihVtUN8tpCax",
  "key29": "3jT73MNApB9x57dYnk1YctAVTudy94EPJJD1QpqqmW9QSyyxhvxyxbBewEfF9kDBeff9aiFqMTj3fL9UVtJ2zDVq",
  "key30": "4xBJsmACNcnj9GoJmi1qs9D8EreXnrbUVubU8DmqBYGsuscgAFKEnubK5dJ5BFeJjgJcPiXT4k6HeUw7nwFPhVVy",
  "key31": "GipHZskv3o6jRqU6EXRwfJNacohLMmqyLz76akxSDMTStSU4e5bHUA1wL6R7hVSuHAejjqCZaQHZG2kmPDJpkgK"
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
