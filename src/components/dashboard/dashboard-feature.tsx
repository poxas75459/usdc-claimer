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
    "4MQ6o2RzkSfRXCBmY6RfUC9XYyedH8abkcLhuimQb8kSTdumGAeuxHSK3b29imYb8ZsHpwZqbqowKg77h2ZVGZQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tumGgGAXksJ1nVuAZeSNhdHdoZUrrcNq5sk1jLaMnPzKh3sNDrKHvkCoxZc45iQJVKpt2BPNjuKzUEuZkzSBPyk",
  "key1": "4LSag6gUzgXRr1FaNF9KziDEaA8YXVgFZbcqWUTk8eVaTpyQ54sSsCHpsHRoeWJs8Pf9LJjwDR7vR5o6nbfPSRoB",
  "key2": "4cwk7Msk4kmBr9tF6MWmXvLvcaKEeTqBWcmoHr4DEhFzRa9GN6zhnZXFKyFV6J6CiFxP3MBQSMRpnWCF2h8HZ2pD",
  "key3": "2ZPv89j5JdYGhhAFZmDWzMV6iLeEwvu7XuMH1cujQixHzKQL2thiaWC7Ju3ky3so6SrxtUAqZ5MKPdEVwzjjriNL",
  "key4": "3KcVyy8EYHQ2WjM8Bj5S7ySWzchyt63gMhUzdYLm4aAydFdjPqs6AypjfZeVkLj7Yv3DfgdMwEqbFdrxkZeAeFkM",
  "key5": "2ZTQJVYbH7YUJqQfiGtingdZ5z2YkiqfrDisESzoQohs7vHPGMfQ6SQQtKwCcfyKhcsERZrvNzxcFYZsswAfqGVY",
  "key6": "5KN4DUmpypiVxseXBAFUzWQgMjeDwZ3xwHeBAFNuPcNvsi9KmLV3Hf3Ms59PChfREmyqq1tRhGb5CMNnruCnSwCF",
  "key7": "5YN2XcZp8nR2dikpuQ8ytKYpvyNomh8J1zP6j6UMCTNnJpofxFXHt9R6jtfcd7DEHGUZysez5wGVrG1PgfT4cF7i",
  "key8": "38q4r8Jv1Vs8U6kPG2Bmwa6dTQhj5tmPEavoWLCdsRfuUsMRhDDvxxWKm9NwimGZeHAsKMgKJ1TfnwVGjBRp3Qfe",
  "key9": "5cMB3QxHn5UD3H9Kz7FozUbo7iMrW6HntTdQvFWUpkM3RUiBxr4Tiw5TekmVVBpdxx7bWmkdFz5d81X3XEF5u7U3",
  "key10": "hzLiXU9CinZ11xo1i6bFYwKar3ronKH6cQHwQeFTHwtKAMyJkyuEbM7ruVgoPq3rk6P6Uum5fUBXYDoyfQ8rfH9",
  "key11": "66ZtaS6kWgAgMa42gCoaggkywHP51cB2Lss6Kz7hvLK9aggjA62L9YMbexfnriAHZfX7yigxbxYpg12U7KyLjY4X",
  "key12": "5rKHFhvUMA8e3paTPwHTaPqyqCJoKTo39ek6jc8a4riC8GM1iqntt66ZhEV9T7izkBy9vsaUWc5vZzqArhMNCVR",
  "key13": "3iGctupfoKv4FaAZRH4MKPvPe9XBtbhbHRFurGKvaqbcWh18PBmdmC26JeyHm7jocWKFJ2mscUDgyaTEioT5Je1q",
  "key14": "XyUxVs5avyvrF17ZD6igVHmA1MFhqKjWccKZxjRnkLb2Zi5rueWB3WxmA1h98XY1z6ey1szAyf4oxxjDcExL8Ln",
  "key15": "2NZuwDN2bUynhRQwZLWbpg9XgdGvXSpW9dsXJRLQSzWdkggFYePngsyCBEaJat9oh2Fsd3Gn6pKtJ7t5fN3sWdBe",
  "key16": "67VUQY8wS52R9pg4VG4JnWR5Rs9yotdYafQmKJB4PPDqW1ifpWGDgEGAjUsY3dFVdnaaVGM9HYgKsCRXtY1PhE9j",
  "key17": "4rjoHS2MwQDANzTDXXZXZConptWT3uGfeFG8qKc43jdUMCryYsTJyzwA478zdGGCDuEBgEjziTJGksmj9sLtjvQe",
  "key18": "4BExcoQfkz8czywfrZTJaLHbTJ75b14xqZpKPCSTfbU2dSwByS1sMTZNVzPiRosXYbuJYTkDHuwwK51gTU75qy8z",
  "key19": "3TRbXtLs3rdZAePehaxMEom7rxw4Qz9WptcinXEiWVqgMzafRFhJA3igZhJrCHtTBBJRSBoofYRhxkDbM6vV75AY",
  "key20": "4WwEjBNfpicjHGRBi8pz7nYs2zP8biLKHr9zAuoXiF1Jc18DAFGAF8TXcz8m1gQXvFJG54xL8NyDkiKqYhNFLJSN",
  "key21": "2nPQMarYEUffgycJ7z9YgGjCDkQ21b8vanBTW1vzy9hUrfRpFjDYoPE96oULpeGnC6G7KoN52KnmKz2tPhL1nkGA",
  "key22": "Q27eMPbT1p5T94CGT28WWTUAT5zgfvuaQV7En2bKXJg8m2MW875gniftHKi9g5SFUE11SBQqJb6C3WuMM93FwKV",
  "key23": "3tnijATsnFPXHUNFWMT7SpGFHXecDSCmgg4wnG8cA9f5162WUX17gn5RFsvFMnBnyMkyyHiySeaPW3hsx383ptrZ",
  "key24": "48q4GamNp1xqsnQ6SULo9xUwmVzD99aZYyFikyuXw5VcwQRmVnrJrCA3gaGsJv44KAuHjhf8mbKB3F68TSmDrCSn",
  "key25": "h4rD5Dyba1ScKr7BSN2JpkXMLBJ5QdNTyPPzpCds1zMRHk8TuiuhZFrqardLuXsCX81ZrRtddnQKwuZZTpCC3o3",
  "key26": "54z4e6Ho6q3JGcUnPWdfgcdKZ8ppn8WYjGmYofePYQu6avAmDeoEGp3S8SaBL46crp7qS7c3Trv9uYbPTunEjhtT"
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
