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
    "2oeRb6pG2Exi33hKVer7yR8Szr8GBLFTmmfqaYVvN46QBGmemG171m9yi8PSsCFikQLRbTnw49EvTNj5TGqw62tF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KZPjteSKQVLEf2GukrxUKXBk5EDLPxpuVcWPHGKfdJv8RU8hB6bLSxFaf3GVHPs6Gq3sTgDD6ykvwQ4z8QQt18Q",
  "key1": "56FjKQKYoLqJQEJXgUQiLDLv8hWpFKTKY4zq5nCrjJycj4gBf4ugDxwYpqFKZYVKY3F5XwoWcKSxEYXUzEfX4iud",
  "key2": "5roENqxAYbbbRvpsam57GrdhSbGoePYZFPLvZLCkrpk69Rn3m28PmN8m5n6T7GWwpFNmYH3rtiJzveLfYR7MQHVb",
  "key3": "Ra3MsoNSezVPMUjA7fqgUh2ntae15L4FbfMsoED4mvjK762RzrKJjMUK9PPVGfrTVokyVCiFR7zq3NnKw4po5a9",
  "key4": "2pN7EH4AvQwKkwTRMQuUyraEqy4552YtuUyN1MXrEZmNfeut7iVkUDSaoAA1Ku3YMJcvrktK19VYkik7NBSPKzWn",
  "key5": "41BCZEm9iZyPeQRGbayHkqaEYcNhSAr2swyruGminiSxaTcU5KbUnKs2mADqwemfkikSSAwHbuV1poNRAZsZPXJk",
  "key6": "5mKpSkmhsaUrhdotQdg8dFejsqtb2KJW2JPHZrMBMeLdSkF9vTJ6x4K79u36XBoUSwvU6pKuS7M2qBv9rb1CVHtH",
  "key7": "DPBJRe4XqaQZP6uAXedfGCBggchjnHaCBYyzu74xjp7S2zG1uVdmXSJgfRcHaJkREqFHj9RReB28SsNYHDKjR8v",
  "key8": "2sw567FEfNWwj8jhrapDfZkp9pVy7TsXK4PYDkKMi5qeNqAK8CWZApNhZEFYAW5wQkYe8zc4hS89FMYeEfKinQHs",
  "key9": "4Mr2M6xrNnpD2zGrmSZ4j2CEFoRF2Dewz8m8xCrSZ97Hpb8mGshk7YNyope73Qff6bDeAqTYBsrr6FYj3X6fhSZc",
  "key10": "2LJ4C7kAMbtVLUG3qcwDP9F8GpQ1Brja7vKo5RKnNJVA5Kx8dfXw6Nef64dns3XrbGvjps71w5tyQ5Dx1JHmWY2Q",
  "key11": "3dmwxQwTPmgXVi6Si1vzwHjBANZEYkoxk3E8Xt6CiVjo3jLHBRG86nNHX5QYqu2pfgD7tCG6oTQRF356FgM51dzL",
  "key12": "5YCr32db56pT2crWw7wBLJd53uhC49Sy4urmuXYwPYmimd9PtbwKrJGWx4gBwNEQXBhYk3vSH3U7s4YvCYDPLwtC",
  "key13": "3LT2TiHiMqNGMr2wQA56cWDEpgYYo4snSWJ7puoafneuN46qMz9yASFuaz7PeMRFK3wg8CZ9eFe3omGB5a1QVDHF",
  "key14": "5DF4swS5LM55LYgN2NV2PkLt2AD5yeaCdAy6apovndbP5Zy3js9Jcdg5Q5pFJS9M4J9bum5FzynK5o9guHgt7Tcp",
  "key15": "4D8RdyWUPh73Yag9WdJDiAkRLZjF5EXFuhK4s4yAqCE8nrb7VnA8BZfznRLLfEGtDvMKd8gcgM9WdeyREaxpZrAF",
  "key16": "q3SEfEJi3N4GhVfcJ8s3xPo5xU6yjj5SFCHNgkFwF7QoJhfVXftAtHG5uN7BW8m58GpPtuXTuJRHohkbcg36cz9",
  "key17": "1Uh6EPRaLXAwHdK7zJUnLwEZcrpCRf7hbWPnZxeovwXvvRY747eipNZ2nv1bNyK1LTTyUtS3FwEF98J2CNc1TZw",
  "key18": "2J5uFwPZzPxri6akZnjKR9dK8y57Hqvmh5FaHWT1k84igLnbWqrRsp1YhW1LErkbBpdeUHsEmNetRB3xDnxKJvPd",
  "key19": "5oN9oaU14vnZKxfa3vwagmM3BBece4iUSCNttwcvz8nrhxefbhZPb72JoYQyHivPTbLWhvSWHYjcBt5T58PCGtdr",
  "key20": "4d47rwcyf79v2gVmrfiYWqbBs2X3pRKtFb9m8H56tVTSC8YYhg111hvyczHaoMj7ULaZwdsjjCJAiuTMbHXrDnko",
  "key21": "3MTeRoHojTaE1zRGPRAWgYJ7ihUcJy1CF6uja888iHHfUEo6duwHJWa79J9jMoyrMNgrz9drckd6o3UpFeQ8uJyt",
  "key22": "4EHajQR5PokrDhiZFfX7NT7b8JRzjurVgUimHBFphDGGrLUpNQi5HgK743Wftvcr9LsVK17496ZwHjQqGfTQN8eb",
  "key23": "4XsHW6D41jUEvjnNoQpjeFGKrSg8uvSD4vNheyvFpu6ho5buiUUc9bBQoWjM7TPnh11qrS8ubR8RaYCrhd71VVNe",
  "key24": "3VBRgXHLDvZToTiw71676bpweVzSAKmU7C2YYRqaQJsenSMo2MYdW7mXVQGYMWvzGs9c4GQwmAe43RxyUzAEiJRa",
  "key25": "2nrr7STwSTgKTyuGrAc4FVCM55t21U6si45i8tRf1EWfYwLuiGPwMvb5JKQqLjaa2osCFDw66LfqggytNJrK5fDF",
  "key26": "67T9MHZAG8HL3jvCk26diwpFhnXy4rguNQh8oZPMRNCo1J2BWVsb22ZbEuQUjqonyFBqxJk9ffpMksMyt6DfYoq3",
  "key27": "2BkBFcnj15LoqGQdAz9oW8gRG7fj5kQtvL2QmFyqGKkz4GkkFQEFfe97pES7siZVwEcKDYWxjSReZN1mWXEAHLbY",
  "key28": "gCQTfUUSaJfBkf48F47DgpGrm9gBhsxoQLj8Ee49PxUwV4r42cynG2Hwox9dS1bZUJefJJkP51LDMd3UaTzrd2p",
  "key29": "5SmdqruKdm9obs2ryqRRUryL8RS6YU2rzY1szd7kq4aUh4Sfjbert74niydhzwbhqTX5DcmWRxc8BJJjYWgcKeLN",
  "key30": "3k5zzbFxLEfHcf2wpkgb4Ufs6v7qYGKeaNxcvgc5NoWJaRCavqhZqKuemonnkkadKukVfy5TwYJ6q3HRBaQ3CV5U"
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
