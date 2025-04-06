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
    "38CMTL5Hp3y1ZrV27u8LkLfmTtUKRTH1xNH6sNgAEQbpLZwS6E4ejmde6PQhcxE95f66CjKSnUiWEfeCK8EqC95u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XXaXugavy7kywSa2eN1GSzizvScGqLxcmcXHUguCmRbbmbVroWx9nX1HaLG3qNk9qCpA1nynCXDVm9J4xRmvCM8",
  "key1": "3nCEuZ2JQLkJPfTpzD29iqQntzyhXeJWHujygeyhisEdL9RGDmp94GF9w2uq4pUFahJiMoETRyS3M7eDKBdb1vaT",
  "key2": "5EQoc14Njeg8bm1E88iRk21dHmo9yHQd8Adr5i1282cya89B1BJUNgvShnSsztXEpTzY6paeRinbdKUmPHiCMEza",
  "key3": "2pECkmseWhRiFKoSAsLh3ooq2GBREW3raCh7uCncYhhoZoAHSdjWZXRnLT4GCYbudPN3BxxPWBRkhnuFLSDTXQhc",
  "key4": "3e6M5baYQzck3RwHfi4RM5r1FdFKgSu8CfZew3Vf5u9RHuMLDUz7gKsWqxqUMhPbA8H2aXyAcBRn87TiyJw9rbuG",
  "key5": "jonnKwHADo1bztEEjmnMWm99UiGfMaSmnRLQj3NQkNAm1gqxxMTxpr9NTrd6cuT2gpSQUsYRkHVMxHJcCEqeagT",
  "key6": "ymgfTU9RtN2nbRakDFskoyvfGHNUYbkBugfJChDk2AhZ2psXCyhQtBsTYfT14ZhTxp57zJedUdgE4bLxQujXw5Z",
  "key7": "3hYbMUqMBQkhJZ3Wn6MSNZouQ44EnfF85K1LMeJrtkYHBvi9QjYopDLKbH8f5TsfJvJXEKpwyZznBiCQEPusBgxw",
  "key8": "5JLUvypRKHGmxX4YJtq8Ab9vhhrm935HSpat9xvLqwwxpWYP5zcp6DoW8V6QHypMNe2R68S2648ajwYabqYhxP9B",
  "key9": "2TwFQ3oBAKpJZNw6WYNuyyR9jvgNzgtYAnjgy2BhiN8mFxgnWxGL1itrhKGoAhwusxYAUArCW6f9Tofvj8GB9k9n",
  "key10": "5BKUNmgXqAq5VvWAsjnZ3LiGvdHqKFU4LSKmFNJCvLHu2ZMVyywoizs3FhacMbiFjjKrs6aEFYSGqvMTFbMpvK8f",
  "key11": "2uxLsQGi7JXFn3rcDE2rdGucfhDRmBErAK9Q2Cz8rSHMeCLwBSajBVh1Sc9ZgK4fcvddE4VfEcrBkeFaUGS8r11p",
  "key12": "obf1wXuERigVVwVXJYp7fG43UJNcauCdZqbGFnYsibCzqosr9mhQkXX5nm43NJGyXkpVwjVjCVwH4i4avprDT6S",
  "key13": "5drg3XXk6yjpAHEYWk6tcsZxgDU1DkHwKwwnQDawgTf6Fu3Do3kD71a63n1PFvkdVjbjhi39xAWnPWchEV38QGPt",
  "key14": "27SC1fHHPvz1dq2yNvxovPUHbaKfCY1rDiiqiBSCR2c26kFbMyob9FQLKb7U6JdnFYoneWWP8UjgQjpx8ycT3dgS",
  "key15": "4YynaC7EHky5EdWgfU4xWPPBzkyFMZGcAnExZKmYpWA6KKpGPy8zXLq4Jy1yuwEHXuGgs6QLrf2Byk2ywqrBAwN1",
  "key16": "62TzsGcQyMvUzS5XmgsBg7w6bQY5zAhawAsXc6z1NnnNcDXFEp3QmNFfDsLR9XYjKknHbinKmSNWHZbfTVK4gVao",
  "key17": "4KTnTWyShTxsrNPfJa3hfkAhBGXP2NvKLjXq2uwBxGKvXkuMxmKCbzVRSurm8svCsQFZ4EsTnQoRcJkVzYvQAGwc",
  "key18": "3ZTS93D7ieEJcdd7KktASpUXVj3rryhAmrGoSL4C2C7uuJfF4ZonMb2wonEeEtJprPgCLzu3z4oQKPc8X7wu4tKk",
  "key19": "W8JtJcycKGXDtF7PiakmaceCvstAqgZeZcLKxa46qusViUx6gYvtJ6EZtsWSPyMe9Bqj1cPQmS17ardCqVwxqoP",
  "key20": "Hu2YsEBn134Q9mx8d2kfekJW8ZNVbfLhhwUhvF9G2tY1WUAVWdgNo33haCFJktEvfwHKiFdaMFyGwVi6HLuPjNV",
  "key21": "5TVdx4o94y1QraWuAbzVXG6R2yu25ASjbxQR88dijJynu8wgEtxQgHexyYxHJyKMS2BtXNrmex2KvFXfLLubiBsh",
  "key22": "LuNQ4TUn8GuhCM6hjzAZD9HoQWEWnHeQVkP6uhyvwPVzCcddiWgV8xUTkaCSBnxhFqqyxw6nFSwuR5eFrywBGEv",
  "key23": "41oRdW7YtAXy5BoDkcN9pdNUipqtWXWeUQBVz4BeXPNWf59mb8J1AbvEVXjuYdxJGd7sbkaQyzk8B9WN9cEVmuQL",
  "key24": "4gsfAN71j6qC3vjPCfdKLuZ7XkDH1HJoiPHq9ujTwEEfwHxGeaYBANYtsPShbVR3QjSazsB8i4amUQfzgmb3ryot",
  "key25": "5YpYBT7YLvmHHV3yiZacWF8XUCgoxoBcNjRb4rFD4wrhaNkW77SH7fEk7kaRrk6dwcxAP92YshzbZ8zWtLYue55j",
  "key26": "3YNLdrKfUKxTrgYBa4mkvpSpS2cgTUkvv5LJDT1apRUjDSWDTUDQu1mBaEXNXAhUL3RDtJQmLzQtjhrEqTpjovKs",
  "key27": "3hzvYTiUzmT9iUWKKNyeJ1PT4xq6bxc6k1FFuPysA5Rsp4XMCU4PgQ4y6968qcoEzR28oMD88mLbscBkuUfgSuJu",
  "key28": "5ef16MgrHpqfVZR2FeNHNE6EZQXCZaGKAMuxDwZg8pFwS7dYyPvwgnmJ7CygRdazZNAUn3UUqATdP1RWV8FAUzmf",
  "key29": "fyTwGHkYJYb4miXTu3ijLB3HckLfwLr8tAaRst4xMScLZoyApo1YidopFNTxGxZ3QU6MPqEVxyCaxEx3YvELHVe",
  "key30": "5GtVwEEoiQHb5jXwBWfv9UxNTWqY5dFQo7WhGskyBhDcRiXz9kaThJ39F2L9FxGTbQhe9PU2vhjWAqmWrPb8WK6J",
  "key31": "2KJEBnaBbdMXj9Kb1U79MzbGqVvKDJKZmYQbXJikigUtnmh217R5C3MBbreJovh5oWMFAEeiEKMMgHPNKxAYGnA3"
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
