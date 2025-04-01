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
    "4kAHzXnS2RBUH1WUeAH6XQcmT1fqK67M5t6CkQCSLZEw4Lejv2hVNdRocLJPbWbWpceVbhjzysaZxWyyJU9iNsdL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6651HuGVnSG4D6xv3ziHyNBK2Yi632HLRhvJxwNab7mVGpPfnZhWDWYgBUN4XGae9WXYndaJiwrXiPrvMbMwvzea",
  "key1": "5SbK9LRzDnKpqCcRuG6kWUKgBc7zRPXdUV9R3oerf8LEuJY3XxPHhi3HUUyH3GiyUZR75oRxmrwrzyoH5t5mPXyj",
  "key2": "Ta6Foi5d8VDqqGsBPhu7dZbYEz6HKaUVLiVLgVymgnRh3a79sh3iJBxUS1dU7fL1zv5Xgm7xH9ZoXkcdnwsCeqH",
  "key3": "5gswKh998MVsmaS1sUDN78KQ2B47QkqJgk322fXufHjAzcrm43TGfuqfDJvnhD87XDYgTiE7vJnkSiobmtDG6EMM",
  "key4": "3PCFWaCZHQVdEKZ7w3LnsHJNf1Jk2svxRn3AZTdiMkCqSt3kiJZ8SsUeMj5JRBWKMaxEtqVCESA3GgrkWaZzUAXr",
  "key5": "61Dx6AVsgp3XxJc6jC7bJbKbMNPYznCgAC6MnYPfyGnE8iuwAGBkkdvnQKwqEDUW4Nv4wA4fngVK6u1gS9hRL2LQ",
  "key6": "4wVzRXv6qDTrTy86vJdV2Wc2kSnTK84t6WGcVeyxef3gHeskQgS4imwPMqEB5MRfKerQHqKYmhB4CukBgyGtmsuU",
  "key7": "5mmjiXJE37MiAYfYPB9egpWA3EYkADg6H5jebUkm3XnchXWneuEpKr39C72zeWJ8a1SskejDNjS4ZFKx437KSs8i",
  "key8": "4aXmjiEF14FgWaKBQoiHjqT7YMWWw2RGhVLQPcS6yq7Vk24KeyUtUyP67V5GPxM8UCjVAe1U6dGQ87Mnrdt9ohD7",
  "key9": "2qinfm4uVMpqnbzGnKownAHBTqfWyyurQmfjkPFWboVpCCyk7zZ5KbRody9199qFVpRaEBA4qA5W5zFnsrqjH1uH",
  "key10": "4AL83KQ7Xa8jVgzHJfgwiaC57HJFa7dn53uoGBa9p2e2USQyxfmHk8Q9ueyakWrdV3vt36NVehJUvdnuy1BX45cA",
  "key11": "5AoviVpGn6w7JEcZ1KKHW8ethCe3yUaeQQqBbjYWDWc3AJbYxsSfqeJT3X8UyaitfBpgzN2rUHukL1BAQLjPuu8H",
  "key12": "5y8fcjbbuVdZJuL6RiJe7hwhEW6mJnsPX67qa6D76WPG2RGdPedMHxbtkvXpTjRq1kTGSGmrAihDkoA7CCsjfZvT",
  "key13": "3KVSHnvLBU1C4rgeb1M4cJPF821VfFhvUps1U54JxHtZ6fnAJ6aabGnDSYLs6wXS9JAgBfBUUvUPtKP7v9Qsav45",
  "key14": "3hpXnQdnhDh94SN1PhZXohfugCCvfAcBJgVALDDm6usZh5yFa1PQ8zstKzUUBDdXLixWM5UaTqDbTfnZkXvuJG9Y",
  "key15": "2zzqMt8uX4aMVzDGw9D1ccP2khxoMy4RBvDHMf5ijMxiLJsdU3kaafFXKtAEv1yuxocr1RGMZAXbjBS9oAdmBQzf",
  "key16": "oFXj6VFRSxk2MtwnzvQ8xL7eKxZePLNomBqYNiVyfp3zkz4bBu1bYHhikGo6kjTTGK41VyF46CGR1gTrp4Loxvw",
  "key17": "4fLxM9ZthubqJRUNZsjb8Exuj1iVejtJJu7B1BnpvdZrvKi9cWB6fHHgbeibWiLZDAZwLywm9A4pky3eGAFV3w6C",
  "key18": "3iLRQywPzQRNTyfpk9Pr7KvEbZq9k29P6iV5yPd3BNhPv9eSucHNDGBA25qPpKTUjSYg7txVCJf6ww5K7or7Deqv",
  "key19": "2PqexQNsPt8X78L38tR6aae5ZATzHcki51Fp7FneS7BHuvt1q1b88b6faJtF6spQMP2UMNds1zAg1QWTHnUqdY3L",
  "key20": "2NN9kzFYWymi3RBtcAQVpoo7RxqQNvXnBkc4WDLsSiGGk2AMSWf9RNiApkVYmzKPHvCYxn5UBZDh8GQZBbu7ZFCp",
  "key21": "4iezee6HdNFqJUSoKy71ok1taFPTZZFsJnMRPAgd26akRiTyuE414g5hsRSQ5VMPvr7dCNZtN64BMuhhpYWV69BM",
  "key22": "3EBk3nSq9Ahy1915rE8jMh4s8CiVjEDtvoLkSEZAG4giypxf1GvZQmUNLj4tvps4e81A4Gt6FozK8RVD2FfiFdEC",
  "key23": "3hXZhPD1BEr5Fe1mosWGU4wvGU4KoT3Nvz74V1FxHLs4Dck7hHaVDrbh1gAUh4VKi1kPUXTJggVrVmehZ6o4qWA4",
  "key24": "2ZZnP88L4oudPqkMJUSCHAx6mYNiw8r6irWgRo8o2bQSwu5iUp4tauF6VG1j8tQB75mr82z4U554DABtdFS5B5Yd",
  "key25": "5CQi9WMf88V3ZRpJuE1SThBEMeQBFj2oXiGad388yxzV57K8QV9DWcnr1YTdsabnmF6nr48nZWauw6HScJHAZ8jq",
  "key26": "bGD35nk5QM6p8HmFRL6Cnh2UkY7GEJ7rXLhzm1Ruhb7r7tFUZDniP5gGcoEx8z58cpppkX3LUxGtue1exHhU3bP",
  "key27": "5hCaPUdDTKyYDrqbHr5u8sidH3EiFugMSFpXkq19DXqb7uU4gfaH6kAUxRopC1RLsuFqLtdnKbn1ZYckd8Sep1We",
  "key28": "26EpSf422XybrDghmp2BXEjxDndDCGVFQux3RFDQMnL68hexZfemQWzg16R3HZJn4ktT5vGS6ks9VfLQutvjXQmB",
  "key29": "5fH4inTXniVQpH28f8CkRM3BA2oWnfeDkcVUMfJigAhTvwBi1hDxM1SHRxK4ChL9EdQ6cNVKDA7fJ1RPLAKYcoHs",
  "key30": "GgFktGThS3pVizdN3e6YZU9qmp1pdCiJgT3mrVXCvwV1uQ9tVZBGoBZdajBcVgXG3D1Gq3ihLnetP17nRZdc3qb",
  "key31": "iYWQuDv4Qpoyz8FGJaybomYn5V84KCDhs9DpXR3JPYihmJmHf6Rhu1z3HB6TxHX9tadvYEDuU3BSqsMzgsyLYey",
  "key32": "3tFtLB7APTFpp5oNNjs3R9nwABhPA5CiBGtjx1XmMeXCkZhwLWsZ9xv8S11hbBRCfAk4PataPGmvRpnH62p8Scfn",
  "key33": "51m8ZanfqafiSwXJdUncC4mFJv9YkCKkrodaZzpiNkirLeDtqPt3XGBXyexYbu5QujaaCCY9qonMKfWNteetrxVj",
  "key34": "2nMpTKf1Kvf5i3BMzma7QH3aGNM7wSMtKn3K2eENXara3Y8JVnhGBD4KXQvm7GP5xoj5MN5pPdcVD6AmHrN8tyAZ",
  "key35": "4P1qMhUkWhcr3rbJw9MYgfu2TADfdgDFf3C6Ha1QSLeUiTigq9nT9Ypjzv9Vfq6349YzVEyjrEFg2sPZpkfamkei",
  "key36": "4iz8f3dshh3aUPjjuKsemvt8QsK6s7jPStVNhcd6uUKLqVqv4PmUaVkdwGiicAS6VahHsnWbzR371f4H3QuTXVDW"
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
