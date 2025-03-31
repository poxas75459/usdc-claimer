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
    "4gxb5rJoG96Gsj82Ggf4RYB1Szn5E7GrPkFJWFvASjgpvdaEcCWuPWKP2uf5o8RtSvcmA3rgBb2UJ6mfg7WrPhJJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CiUhUztbvLXhJvVaJSvzDakBWUrrPMXAyzRQc2VP59GGgi6e7BLFxSyJiVWdqz88xTXqdsdNeYW4Pu7qLcTAZiT",
  "key1": "3ZnscMLCUEUqcMZC6XJn9MxXTbZGPt7HPUG8WfyPBM4iHjv153uVK2gAGgyVNarLv6nGQqBeijv3Uw4YiztXH8Df",
  "key2": "2y5LDrdWE1gJtchtsDUcyq3VHEMPHQ8kSKtrWmuaYCQmv3FnkMPJWmziuc87WzrV7td492EBGvUc7iSQ2XrTLxi4",
  "key3": "3pTLZRfzLxAaYawQWTkqiyVw3X9GAeNmoN2CJeBdTF6W4sEZtTWNV1Jt2CnMpnSTNiazCXm78gsDE6gN54GqAuhi",
  "key4": "4qJqL9AUyDk7RK5gswXHcmsYdrUqNUhB1ZHtyhzC9ENmHgpL7JVUgETELQ2pcPafcYN9SxPyT6sUSu3WgVxS7eVB",
  "key5": "gQAE5dZcsCeEu8PsYqVE7AZyLQ6oCnqpvfkAVN583QPPNdT1tynT7zFASzMFQTpgRhDreByqe9wHBige9wV7Txn",
  "key6": "2sTWc4zJUhpJeBSKjrTzHetWdC4fcDui2wPt2Gi2y3BHQjEbCRFvmixtjjX4g7nXiYF3QJjikNpU84aKCSTBHxXn",
  "key7": "5e3hdxrs36ZfNADLWrkbTrRsyH9fcCCQBvUo2Wy5EHEZxEpEicqYpVTeCdNEXEUhVjMvrQrrYL88KpWhv5fpjMXA",
  "key8": "4S47zg9WhCdFPzHKsmARmMrocMdprZNtTacdFpz3eyWzQM8W19mqWAj8gjLSabTsakgH93EP3NiKfr1LHekEG7uA",
  "key9": "4qoqEDTbZ49QPaDD71yLWzwMhLFEWGhZzUbdBfSsnfVVQZYii1SZ6LP1udACH9hxc8xYwBt4a29GfSdKeFtDUpCG",
  "key10": "3oj1u4462HqhvV1fhF96Cf5zjqTJr568dNUMTrBYhT18RH6Gs69X27hFScxKgg6dyU8Udivqw2EkxtLU7omhwbeo",
  "key11": "2NtsZS3fzaLGqJQQbTjfyHshxV7CfZJY3UY3JgXbGeRxC7MqvBKTzCYoXZRJ16CsZvBFZDq5NS5p64rmuvZg6W1Q",
  "key12": "xpVvZrgcrrvDuKW5LEmtdPCYkrXJqGUHLM5YAkj9J9h435dH5atCikYYgLAcsaLXMEqwhAGvWvToE2Qk1KY8Ypx",
  "key13": "3jrYd9LDxR1ELxzeQDTfPRzeMMi8YnkvUTFehGf69uXr2k6SyJbNfrC5qtV1qEnW9CRmAAwjaiPnkcUFuPPYXWgc",
  "key14": "4ajEF38acb2HygyrS9hGXAYj9tDcKTRUdrG4ASwQtGnWi2fQkigeqh9kqyzxaxDfVPmkggvyi1KF3vnCEdhj3SKY",
  "key15": "eb7PcEGiwi6vtrb6nexo7LwaoPNfSwYFMUpnXE49Nwog8KnPZmZmyw1s2HcKFmkbmTyJHieHSbL2QBFcLEwWXXo",
  "key16": "3Tj7xZyaMhUhnjHgBzWkM8hfqFRWuDjgJVrSGMgY9JscDoUACBVq1zQTdHWGZuZMKxZPyYL7u4vAotaGnSWdiMhM",
  "key17": "5F4ivv6eiLzeTCa35gRJcz6ioCbNSg6ELKV1r6JQJRbJNz2HV3yTGnBzdpgD9zFGwmu3QcHKyYcMwpeoZfsuG6qe",
  "key18": "4W8mCxJuTttw5DeUEw3795tQnDfj1mmYRrhVsWHGUCz4mrzyeWs5rjGk2jUXWw4uWdzj2xVL3ENKLhBMesPRMgBx",
  "key19": "2re77U1S5dgRacSLqKCEEDjenRZ9yBUKdAvHRXhbjaSrDMNrYEitLggR9kQYSz91S9vxdv1VaJGw3A1bV4M3TmPK",
  "key20": "3Hs3VEZ8iMVUSDYCvXvu34C4jWUbZT8pL6BtuUFkCUJUBBQJYCru8rK1aow88pJeNjgk9VnwR8fUqZrkagtnCsM7",
  "key21": "3GVjosA28z2pQ5c6iD9y1rModwGSgrm5hkpAfBg1HAkXmajmxQfZjWYhSaJNwo88TneQWfPnfw2CKoEGNgC5HvfA",
  "key22": "3y48qQvKpujPxuf8AEXq1Ho7rUAMaedWBnPGeCX6bFfY6pLDNzQ2kTL8uQFRknvZF5jxYyH8ZDapi1HqwpADH9Fz",
  "key23": "2R8qJks1yM7gxDoBiYjajpmtUDH3KWCpD6x67t6SnVfcTSqMMzW1ygGzn7c13CMSeszMe6wiaD45WGTPTudVwBcQ",
  "key24": "2Pui9eUHQftXnfzXjKktbrS2yhXt348RQrtSgNuTq3uJgah3cTZHPeZGtQrfXQco1NhGGqg2AQdJkvYXsmxpXAXU",
  "key25": "3djvETAYy5GD4WuRLr66VA5Fxdnda5mJvsneZYRMY86p4z11aXiGTcKPakpDDu7uvS2Zu5TQQ12ixZLzf2h7qku4",
  "key26": "27huGkD6E1ccdn1NPe9Ny2Wg5vWkyv36Hr42UV9D8mXErjQcszgVmPBAnqJxDRigrE3zP1shfYoXXQQfzPfMtkfU",
  "key27": "2mUeik76QqFmgdvZdAoDGVRW11G169UbFsgd31tuxuAgkaxMBAB6iRaBjVLUfxZYTzGARPMv1MdZo2dhz4gf9KZH"
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
