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
    "5C3YgyQr2eNsJWxcSG28sgeu2qdSyrnvLsCewossHNXtyp61A6SrH5iPiAvCLVKtzJaQ3RFzgZVLpKFpR2SJYHqk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iKFmE71LTUYYiSBut8EHQzPQ4znjJKUpC3TsA2oJ111uNMAqWYTQP4fhRMSShyrBDvxqV5kRnaVqB8qDydXskkr",
  "key1": "5M7dgoB7MaVwrrmHcfFSoUTsZe6QVmgHMgck6eQuL1rXTFSyA9m86ZXDFjM7jNTjfhwwHifWdiSn14N4x3wvpB9h",
  "key2": "SATFYvwgcsPyCGxiSeWwSTha2PrvoNrHNTTiYNxnhxocrqzXWrDwxUX8azUXGM8U6aLLow5sA4rU4pPqtrYFU8k",
  "key3": "33NP8ZDmpGSjV2eoY2yTpByDMeScreYUJSS7PgjoCLqKu4CM4h4N3bMhtxPzPVkb7X4Rqq1LHhB8T9VCuLriT8f4",
  "key4": "YhgwgeJZfoApiZr7nVeiRT2wXaJsbd4kAzhXvjV7ufjpagS9uBFRvZnmTZVqcNqAUfLyZyR4Er859PBHxTZwbTh",
  "key5": "2zndvyUKmncGuUxeNhKDzgMqte4LKBqozTuoHwYLSAcSLYLjEeeZvceifgDcyCyJeHMxsKbStyt5z8ygbiKg1XA7",
  "key6": "3CRdnTnJz35CmbicZHF6ieG56CnJKurszhqnhASyWHyMw4VybxocnweuYke41w9oNw6uKdzDrzNRGnZHWSXGnAcF",
  "key7": "2vpSxtvsK72M6t7m1d6FcFtMJXGzDsjiJS8T4Fqjxzan9epqK9yoiyfy2MQVDhoZudvrvWH6UHmo6AAeWCTv9oLA",
  "key8": "5m5ZnL3NZeQMrEeXGcYHHMXjMo5A4aixZfa1yyXb4vivucrXqhhhh8TKw816jykXHpcz1JC2qNHMdffmKeEbxBDp",
  "key9": "S4pFfVNoToxF2mzTerkQhoXn5i94ziz3UkvzMqXTzv7gsdMEsEWHsiNR1jWppQSdPq45gDjg4Rw6JBbgYWg5CvE",
  "key10": "5c7kRKuy1bHuxYt9T6V3vZqJZrUoZuHFkcSGaC9BBYSuq6Y414nQjJFuDFaB8uaf2cDgQxKU1RR3i74S2rZcAfZw",
  "key11": "46rAHWErqJkD6cAeG9EnENisn3wy4yM7eqkEqTSDpzvx6yfRBfkyjKYVmHnfJJZ9nrYq2WPCwe4VqifWmTKHpwz7",
  "key12": "3sHhaw7aKKdJ6Npcm3eiQSKKgEixHC1CYomk53z5Xg9Usakx1GqkgmE4e5pkrL2nrfAN9Xh2FLcaeCswzq64y1Kk",
  "key13": "3xQwevrQkPn62pErShY5oN5k6UYfPp5Wv5zSxLREgcHE5Gxb8GCv7XnnBRz2iFCMY4B55wNerbwBVRiqVoxPDHh4",
  "key14": "2BNFRnpw12YZJSjs5WFCio6SGC3oJmXvpe6PMEu4mNzaw9YBLpnR8s6G4pT5rJbxacmTBcyLfGo3KGafyAz5kR5D",
  "key15": "5wSubo1XqXFdTGQuFV4fhKFsopszNmERAE5UzFYAEuUZsMx2CHDudvNAq2R3vLZdTqQ9hmaSVRNivddJdqG9aN6o",
  "key16": "4zB1kb9QvCnWj8sgHRhQ2UzQzvw3B81STYWgVyw84U9QADfAuXj2rDwsx9KPszRFiqBcXSvkNDSQfZePiQZvrnFp",
  "key17": "c5aEPZpEQqPL9o2HKot8sE3jM9sMJXLc1jxs8BUvYxqXaHU1dKZA22CS7a7UshB5JREDfBU2G3PDWuubybCgkma",
  "key18": "5nwFd18e4B5jHDXwLrT18wsNZ7eg2hbVQoxZbng8UJ2Dfky8hH7XMHTQj9nF6q9eY4yUyecsyNzn37WUGn1aAhcn",
  "key19": "R4FctAWvfE7TqRHae2dpHWCFYYwvSh2iFKpiECcFnrnSfXz51hezo39ww1e9zaPRjoMcYiyJHzXukd1sUHqfFQL",
  "key20": "5fmqR4YxyBhumwtewPE8C4aTmDMCtJdC2XiBdNVmc7mphF4SbmsWgsYCbLrZ7MWJonkUJsdQyNx5KuNNB6tSH9zd",
  "key21": "3qNeubrdgHdFCcktf6uKdceNBU8paiWWAVw7MuHMBvB1YabT2ZTYC5Gr8gvHxMzBFfNKbhmtmaBsV5gz6M7kR5nD",
  "key22": "prRujydYwZDQohfSWL8Hps9X19ERE1tVbkRZ3agwgRk89ait2VhryazVgDaALMjxu7CF3jUFjHozfzne6pyAYwE",
  "key23": "3M5sNsZZ8ULr4t5V5XvbPss1pUZ7KJLRWG6DfWFtAFoUBkZrnjSqdvGMh3WKAVnGoZv7T7PSk5gVJKD3pqAn83ii",
  "key24": "32Grp8PTuN8nxQYFcREEWNCdkxvQdGjfzF2BXaxRQZGrGyTK9Xdbo8ZUdjdrBS89j3aj7mWnxLFHXFFBbjybD4GF",
  "key25": "2bdyTTvj4UJFmgk7sv1B2ZcjF7pYpSKbGpog3dVjFYxSmqhBCXxd1dn5VjcXyW4Bv9bt4SqSb7E5wqVaZAoQ6FaE",
  "key26": "5TsRA1nRJYtXLK9SNsKDEUF8UW7qRK9or8aeUZC6Et5RS2tDjoqRNjnyjMovdnDfWLvunzBM2wBJwScY5yYgnfhG",
  "key27": "5ozPY1tyW81tRx7EdUvzKpnmmGwxwfBP1aKnDCZKvoRfWT7CJNN19GZDg4zsjQZozsr1F1vxxjxVRXnGTZqeV28r",
  "key28": "5h6wq3FQsXi9NgTugKgE9Rp1mrS3M27AypVs5TU3DNwg7hCviMWQy9URTgCPnpcPKYrNkjcDU95PaXLEZxeZuRab",
  "key29": "2nq4MV8GkAZjaa5obaWwfZ9PgpSsvBrmoktbrXuk8ZCpUsmPokroMhZqprXGdAeaYNeCyiox5s84wTAvZbvynRQv",
  "key30": "63HDQqYzB2pYXrDnF5vWZXbbGhjPwFUbJDPoE4KV5HuTViLAivG9iNHkSnDy49rwDLGUGN8NJZW4ZbxwBeD9wwZp",
  "key31": "4Fp139MNbB9fpd5jVjW6TrGPnTGxW2MNJuk8eUcnMPydz4QvXukz9WdowdqdwsZ2gYGjM3yNqH5c5kUz6jxZWVZG",
  "key32": "2u1WG43AFC95hnQ2iSQeN8XBCaLPRPgi9ZqH65HDRYBnyv7q9GyqZfXNEqtoYB4TYzwHgYUbedx4rFH7sCKCPCUx"
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
