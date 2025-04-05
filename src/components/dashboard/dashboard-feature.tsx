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
    "4MbKWhkPnEpnG865y12s7cWqZAoGf5MszfsArjcoxmq7hY31t78SLgTx3Ld28hrYxK1BwCf4pPJ73eyos5b5YDEj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EV3nRc3nxHMUyUso6xpAFqBzmb2LY4FSGqNPdEKYq1v3mZKrPUm7n92Kv1FV57VZ3rbRYLVzmjWq9xcoHPeWTME",
  "key1": "473easxut4A3xk2jiUbDxQug2YrdmFCt4HzUkQKvdtLfTqQYjG5G9JsrUdqQTuQmNRKaxSAdcAjBja72wmUt9wRV",
  "key2": "5WY7ztcszENgsfKZVPUekGE2Y1zT7LmzvyFDvjQFfM8fAEXBdncTi5BN41EV2fgiS88t8KgBZfgdZN7vLtq3fA8c",
  "key3": "58R9PiYnw7KGjgENYDkAgjUUg1BbYmDgZpk9GE7u2qLgtzyiHVDamdhHT6Gv5HJNsEqN7KpQsAacLJxZ1YVgB1gC",
  "key4": "665qkoXj2KSasVuWxQP3ykA7rihYcHjQyDMFw984g6Hvba8XTwbnaRasZb5SaU66juLMMabj3CYibRPC6UekxZzz",
  "key5": "3PkgcBP1tjB3ft7RZpY1zp9WUJ9vz98SFpburEY7jpydD1uyYtEbdCK9PMorcGKCwVAn1uyzQqJiZcbaCFoneiTr",
  "key6": "UFMs571KTtXZkj78rhVjDg3aFKphYXsAGmCPRAYbxGszcJ7K44SrdYLRZQAadXLzLPi3KZhR7RhYrzTTscH1o2j",
  "key7": "2spCMB2uPFcZ7jgt7L1UL3PL3xXFphfVKTpZkLTh7sy3LHZCHpq1kyLrSFiCrrhg1DYWpJDYEzg2gTAAwdHdQe2j",
  "key8": "3n3qjW4jD9YJydwSCpNE9mDeyWVy5Q9r1jiaYkp2XazHnjZcmNVEdFZYdcGz5j3WgKoPrvEASF1DjHFuURXvr9Lw",
  "key9": "HGuMM1kZAPgBEJBQdRoHxg4TF7jtXxpiwj84X8RyyZVNUpw8vojpviEjvWZLKjhUHjaMuyqWqRwyfeLKH6UA8Mf",
  "key10": "qAwNvGikpikCRLXbgkihME6xWsZ3zQirdWVrnQHwgjpcV1d3ajdqFDxm2jotFPf55MQPaBFT5osU59LwKHZjciD",
  "key11": "32TC1tcyVjZb2nWrwXyKPZrQZUzqTrqMynbiuugi3quFvCGRX2mSSK8DbG14nJz11ffa3T3JhYj1XxKbHusd9zyX",
  "key12": "3UF6Xmzo6szDXkdWhoSyb9zoP8AEGDnUG5qP8jR6RzeXAuhY7WssKvWcocHAMyjuwyM9in3VMcU5e732dkqqiEDP",
  "key13": "3ScPGDQMKVQbLCu5SsU1GadNCdreF4FttacqEeU23TTgwUHiwkWtDbcSoFeCE3HSq45QKm6xrQTM8B5KhCEjfGMX",
  "key14": "4XeSYBoj3RRsjkxbBMpEL7dqYmKpNwhFdR2st6YhZbiNp3NMQ7uiFrfv2of1ejxUAvASgLQo6xaQqhBn3sCjS9Gd",
  "key15": "4TWwWFp6rTZYNvX2uLwofdFJuDhG2P98Vc6uFLZBDUdobCcCff8pn1LUJdHLTT47qCa75qY7ZWcjPz5Fbs4zFRNm",
  "key16": "4W31cHvTV4xk6E3L5t6WfXrd62rYjHB3Tz7xYL1oMaFURu5k1EqeyqypY2TLu8NgJ2axGFPMZ67EQefsCK2GxGGP",
  "key17": "275bgBWTQbw3iYvAip2nRPhdtdvcUumuMNKhPGH1UnmenCpbNSkg8VDe2fm8vFmgdffY2gVgqY9ZzWdC75d4WHNW",
  "key18": "a2GdZVSkSBWRapS9oWG4fZn1jZVeiVebEXjWgmWj9HiAJfYrXPiBL5UjPDimaUMjRPuRq3yYk4VX8Zc6RryKvtd",
  "key19": "5TnVqRWgVSjSi4FM1e1jKUynzH7rataq9eiEoLtBSAsx8CVKEv3cmZS8wo8qHDKF4KQfeY2VFmPLQ34fhXgUWGdm",
  "key20": "DjaumLh8c5faUtCoNAKEZNXSsxXT6sAcd2B2MuYBmQd9C7nHiw2fhjPCGmzHXTwzAfMqbinRLoagbHTAfAazcUW",
  "key21": "4i7djxd2L22G2UMroDdv884daaW9Zby8vy2b4MQ7enqcsbCWQozd3vUZC6pXcpe61LxDpcCp9NEpaJK3ZyxmT5P6",
  "key22": "4vsFgnkgvtGXR6wjCP14FP82E9MMzgov8Kk7GR43AJ3QArFNcvb22NPG1N5f63wo1WfaztwSsWeaeFDR4KPpAwBD",
  "key23": "5rCeApGQU93jGhjv5Eti4vmnCNcMGyFwGdRDqGHVNV8tRGfGjLLF1cRS5HjE6iS6E9bSsBwx4chNbZyM2EyaJWGQ",
  "key24": "3FDKee3zXZrQjFBHefzinTAzUMYcEXtS1seQ7gs1PZNw9yqpbKEreE47o75umj8S1zpeVCK8yjTrp9KziHYVtYrj",
  "key25": "4JAbQBzVb2YEnhCxvccT6yynYfPodXFoBxNdmcoLwRmJ9LyJSxhSY1EKAi1JQoXjStyhkSnd92nb61evNpJK68Pw",
  "key26": "4zGidGQGoqRKsQXJ31Qgo1ueutRLk2mDBZ8gdNTxih35oNCeLJeJ3qzRiXupGaz78Pafw4mUvE27X8X9wWvaqrh8",
  "key27": "wwLBXLCV9QjFZYzqKfqrXe5iK3dAzUE2vgPPiMrts5QHYGLn757c72VrnM4TFGoL9fxVbWuwNxU6ri2owb6HVy2",
  "key28": "4QMveTVttcpHX8twkfTcYraqbxo9x1DEr4ncNZqKtoXAKvSLqyJ9TT1Yisx2nSqrq2NWrjMKgtpeHhrPiQxDkA9z",
  "key29": "oWX8yY6bjZGkw4ipyTnTQtYXTcdFjFBtHJjJJ9GwnYmJq6AognBQaW6WjhFthUPwiPm1rwKE8YBbMRFbXKfCzXG",
  "key30": "gWBfRao5zKMRjLAPrALuX1669dYafMhod5huabPphweMdkM9FqmLz21oRpGnzeWVTXm6UyUtsQZ17JpgAn3abJS",
  "key31": "fAufUiRkPHdcSF2fssjoFBrk3SdfqNWjQN4vUsQpgAp5kNdvmdcd4vvR3QfvDTcUt2ccHu5LHHrf3pHMj6GppSP",
  "key32": "6KEDy6RKQxXfrGvHnpKibmdWHJ7WXhTcSBVEGHXnWJJ7da8JG1ZZzKpsjaWBXygqm1csZ1GpghXKHqGDeaXKkwA"
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
