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
    "5eMusDZcC1VmwrgxeD4nryxrEHmZuiG9kLJT8DwHYZ649w8TirJywwCqLXFY8kjXyt5eARx8tyEVf9iPqGNBuUvx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qNyip8awk9NV3kamDn2XwL752uohz9SreTCfKEFDRa8MoghwmzuCER7HDbujbDq1L7xi5umqH4U8ZaDmMFzHx93",
  "key1": "3vatoAHF9C7LAmWeXRXFEm4fy4BjWqbufzDVRPSuUNAaVTtAfQPwkuTmMiESWvvy3bwUNcJJUg5M5LttU9oF5wM6",
  "key2": "2zMNj6Tk2k1doGaQwrkH5QQEpoiuWepuriQdPpscF7knJhWZ9WyziW9v4MzU2yMXfGaK1eHbzsWnY1BdwSWug1b7",
  "key3": "2PQQLLoMV4FNgjQ4gWLqFy4TqUPoFT8dMrm9vWUxfJShfPahnQwNSVtQUfaFLkvLgbpxfJQmz9W2DyhwK5E4MTnY",
  "key4": "5rSQBe5wc5fKkRW5RnHcaUePN3twav6zjiJbWgLwEPoX5a7y3N2VhBSQ24hTTYtA1fj7J5y5EjoAyyjXxDyEjQc8",
  "key5": "4QWh54hZGS7DnrNAGcJeaYXXZVHoaQWgAiPk4x6CB3zrhGZXQE5EFjsZTEEYwP9ehbURakZEjzsD1P2g9KGSEXjn",
  "key6": "5nAD3zMebXFpaWNGi6b2z4fpE5ygdpXHCcPxAQq1wkFKwBeNUKSKYzRX9jPuUfiQeNWg1iRcdsUhqtbntVLcef6B",
  "key7": "2XFrZhr6PNHofw4GPhoNinizBYdY7eADe8txfpmUfyFuXSDaL3E24VXwkeFmMXidrNoX84XiEqvZsXjAnDLfTTh8",
  "key8": "BgEsh48P6bkiNW1NTa25etxP2F3fneTasDFRMnnPTBzxZjEqRwKfETcRN71mSSzFGa8vbKYx63NgdyrQE2NHzs6",
  "key9": "FRhDeRCm5hkSAPC7BF9GoqiUv8bp8QgkQ2xPZvpQBn4P6NEPD5CcnkCEfeGEUX1d47fcvs29mij7VwNJtyKDi49",
  "key10": "2GPySm9EPR7s61emeWdvZX3GZorMe3j3wXkmABwQd9oFTUKcT8W61rUgcXjqTt7dD6DFf6o4b1ccr34n1JXbjbzy",
  "key11": "5qNWMn6LNokqSKPd7iYE3se3yeBVVhaLDAXKDeb1cQ9NcaGREvzVuM6Ris2LxdNBm843QZZkthAZuEmn3BTfnaBZ",
  "key12": "y8AS8uk7WChSCVkvBWcuGJUv9rtbxBVw6k9BmXJPsyKDYV4SJdBjixc4r62JZwg1ZAjYBF3mxGzsQqHPgFc64d5",
  "key13": "2TVqk69FjVBboWuey6W4qVBep7AuedCwNVpytRh4gGH7v9Wtjxc63fAKY4ZbHzX5iSoB2Acqx3BjQPrHLs4L1Z8m",
  "key14": "4EJUP1FnHHz8WvJZTMyooprzPe3QjuPcAZ5P1nfaf5SAzJajRex7f31Usfpe1MN26xUhQeWieqijiouayduwYyHr",
  "key15": "4AuH9FKERHs4JsfxsyBV8Z7MkUrWYm3atwAVXeTxYPEiS3EZ1pRDmUUUFT6VqTDDY8AY3dweqT5X3MeraG59yqdo",
  "key16": "qppZDSrxv6sKxQoKu98uw2EVw7pGPkzgWpFU6674kdbuMySHA6RQNPbfnDse3ka4MBmWD7i51NS1nWGERJ2fWqc",
  "key17": "5mq7VBvKBuoaqEEooo6Te2qWPWhCXTHJpNfkQFM6VfCQ2zWZBLNp1uwJkPW7qPxr8AH9SmQ3Fish7H2bebgLEkCb",
  "key18": "42aAYRqwsgyyaveZ4myjXxrVZLw693hipBui1oWQLavTzQmwaLYTsCLtqJKe2x85Fqh7XH5q7RoJPnmFRHyN4BBJ",
  "key19": "42AqVJWc5tE1RzBPkftm3kGXqmJtq8mtMGBcHGHzdjU6e6owZSBcKrKcuLxvw6XEfEEEGcJZ55MRNGiioBTAtEqh",
  "key20": "35MfnvJdcaGFueZcyDUNDkVgKiSsTmh1FuH74ZEjHwwXmuJezkueBvFcGwKugjGVKe4LcAc3P4DkMrRBGowyukUg",
  "key21": "3AaLHSiMtpYeCLMZRENwwNw3GvWM627CxF1TGQogJbpCzYmEoztpWj9JXgusWWqXFnKNvFYgEYzWQtwuY9LZQWV2",
  "key22": "3W4korU99ZHVXzrAsrd6D1Z2hRCNs3r5e2n18pkVMjdGnppdczvjuB7VyowQuAXU49Eqhh5fdda7oKBPXR6EkbsB",
  "key23": "5N44Dmp2f6GdhmtoUKMLa6GDy2hFFa2Wwff5QteBs3N8yv9KJVXoTaTB3An5BkwBs31nf92f4WYxucTh64trKiEp",
  "key24": "4PH69Y2oH7y9Ds6xg1WhPLCs181ZkKfSMjjNqEVzukkyypCewhqVHqqRJLrAjwRqxYznqQLhc8poE3UYxYBwGqNA",
  "key25": "3zfczfBWSAp8qQ85UWSVyV9vuGtPYwFqFd347oVTFPAjt31XC71gwhowSvRHGzSPnq1uythLCo5Wfq7e79y9h5t6",
  "key26": "4s2vB7NtETkNXmdeb4mrVndm53NNN4dEDurrjXET3WQ8fT2oerEv6vRoqFqfvzqpoJ7jp5nxLMBRFTjxcKze5gpN",
  "key27": "2KmsoQtuK4Jnvma89JnqyrhfaYyfEf3Xi3963evLtAeotxXJo3vkwT5CKNzrt55btnFdUV3h6c6KbnWP1ZqiSGHe"
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
