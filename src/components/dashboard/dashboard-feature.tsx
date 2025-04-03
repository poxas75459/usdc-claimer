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
    "42DsMt9B6ZQNhSfaSYSLBSUkiy3xPTp6QmxM3XfA9HUrZGW8qJkfWmmvMJcdDRpXqMHFeHjUUYcW5RDoGNuWZMVd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v3YDXcP3FTKba2FaVJGmDQq7bwaTLUiA3MeKSKmZtH2f57Y7ZezSGVjHc3L4gWcHrYGpcJWQ3tnua54jSzSnj3S",
  "key1": "5qi6G3k4G5CcBsvNktbqGWsMTnBUXrdiPfkFk6VGFYxiQJTASrXF6km2CMJZBR7JuCyswgWEEqVnfnwA1yeN9ASn",
  "key2": "tHhv4YD6K6KbQGSP9qzVxZaWPPDcETnfUQrkjRLFErp7GVUH4NEv63LtiJsPLUn9UoahLp1RDveSnbBA9sNhvCo",
  "key3": "4CAkCaxAQBxsvZnG6bZz81aigXLVbv5cWGR5nKtmjQ859j8TxkpsAJiSjYW3HHgGnatm4TDLXNP1vxpJKkWMUHb",
  "key4": "5pJEVoEMt6EHpFWrRdVu6S5CcLdw73KQntd372PJPmNkVzbNwFW2jjdLz8CQtTM8WFr5yv7yUj5WZ2YeKB3wWFgL",
  "key5": "2Ty7P8n9wbb9wyUFuASxDxxLVgNjc7HepxidtpEchZcx5VGcFFbpXSAekTjRbR3SvEkekdG3QR4DShwW7mYPQyPJ",
  "key6": "3RjMiGA3CL1qRWRuQmGJ5gEuwvrY77ih9hBD5sDW2kqW4bgi3Ru6X7GMszLpCQmcPBFaLZCc4LAiaHDedWuC8vdu",
  "key7": "44wLHfH9MSWGEYru44cRDtngcszVpLn1AkqTT98rvPNLBjTKgrEVGwbBnuUV5HnpFvZJNVQjLgbMRQ9EDG4RX8Ew",
  "key8": "3LotdrE9S5eqUdJWfnEgSh9auaf3GwTx7gbGZErU8YyBXTJ5eWj9sKJEv2tGYF7gbXFHqJPWP6VH3uwW2kGcySkN",
  "key9": "65dMUGza8eExEzrYyZ3LwonENdD51R81fSCueEtYbZkMo8EcwZRTknEKRcNP5ritSKw4zUdXTDFfeUCEGBAU6tfQ",
  "key10": "2HBBQGfH138wfjnLRx6sZEVQThxKfLRuGoyurKvzFj1fATtAxYNvWaXf57aSv599DJaTafht5CL8kokyf9Bw2RJ2",
  "key11": "5mMmpd6qaDHfwTn6MfqcvJev4QqQdBfy4d47UTHCbPNgoGNAhY449SjVeCvHz3eZMhmUmhvh4ZstfQjV4qzh76vN",
  "key12": "5ec7gfEAvaTjYnuTQv1Vh2WFBaGDZ4qouzNEgjnpgGJRqhVNXt3CL3WJVDEXGsu6Pebk2mErpjxpzMaN3a8ueGYB",
  "key13": "WvVwCwsmtJ8gQqfTLvLryFMphDW1JaABudJ3hPhP1n7Svt1iUZn6uWUvezSxLfFtJiy962rm8Dve98GLEGotNkD",
  "key14": "3CqCfLcZ3FiVG755HfkLx8YA7BJiXUQwhTr6dAmU8cycyqX61ZJ5vynJADKtcCyNMoSfHxdgveFM2Zq6GWvGKCRD",
  "key15": "2N3eLhoCACmtY6mwopnKiWCyoTZuK3uE7PWiThYa6fkXq1kAQgszGMrShusfVG6F1kTQ62PsbC8ersjSKzpZQ5nw",
  "key16": "4Lgkgbmyq7SzhVJtSoVJEHGMLJLnia47m4Fhn1h8XnnBsvw38qvH8EdjDDHM3N95cs46tsYNAp7Rkmxq9mdY4sWY",
  "key17": "2P85W23GL1NUeXf5B6aAm8uwGFNiQNaZqWALkWHFsxTqNkxT8UYz8ywgRqgvfURXr9YeH5WbyCUJPQAN9567SmNL",
  "key18": "2PwKNnYTkFMJKDE9KR4SuZk6yqGiWaKNEecJVC8EdZE8DjqoCMQcarvve8kF824koSBXfcnvQHKKGqmYT8dwRGro",
  "key19": "4zrZxzLC28YonmNjESUxAu24RHfAKFPVRjfNsJWkJB4LHNZb6jejbBJ4ToMTv3Q6crZQV64yvtqNNcPLiEBjUdXo",
  "key20": "41cyUFXyRcPXPyDN9Ty9oy8hgQAtwvVQ1HXqdfHqLUQXizq9ZVEcs5qvS2z1xFHEZzEjkzSGRZz7UWSDi81UCg7E",
  "key21": "2V5CQXJoU7P3apJdoNkygP7au3dpRzQPLuTbRyeBDyGEpVbaam848jyKCmpBsk5UHECFigv2VUevzePhJgaC9goJ",
  "key22": "4Y3uuTDQymKFKKHTibryfByjrjKXjCcj2NaBJGvPSyGeuQyQQcfau2vL3DL9PzeBuWpgbsmGpY9s3LCxLg4H8zDa",
  "key23": "2jt28336FyVU74xeyfnjddCJqKjGdhzLxjik7dusDnRMCqGtTxQHA4YxkFr6XxrW4Qt3EmRz8UmTzdh6jhTn82hB",
  "key24": "48CkiF75Cra2ATZCGtyyGYMvHXNWAmhDErCdbmSFKSnFp1wAeXLwVh8Mc8bkJoRiB48BFxNZCkvVeAu9NsKsy2oh",
  "key25": "2vX7CWnx1Kw7rsdN9QeuujK6FRdPWuvRGF1Z16ExyWwoBSKLn7gEZcuXJXJMWHStMzBwWkBKoXu7gK96jrXs2PNQ",
  "key26": "3EEb6BXSd8JiLMwMvCp5MKW4FSi6foHvtVctGDRkLeYvNARyZpGBbxHkaBij4M9tbahFUqoZLFUY8LqLJkHZ6tPg",
  "key27": "5jrJkNhoYPhyAHytfsLRv1rbLkHtezXxMTAjEeVnAaUVaTY1DEZCM71KBYWCGyJVVQvsmS1HioowDgBof5sDKbGc",
  "key28": "wQqvjrYE7fHFgmgpr98RTy2t3UoSqu9TMh5sZxs39xpKojNaARUZSZcBqjpdp3vmvPXoQAtw6EBdMBM7jQfK2iG",
  "key29": "3DBsRK1EDg79JgNq2rjQ3F6dwFDTqpNLDFq1MFHfgdZMFM9ZTaVkrhs48kZ59qqgfKSSSutT5NcbK1wZRxQWoYbf",
  "key30": "3KP5NHEEvuDf7KwQzNvTrURbudrb2oZ7wu9gqLqfgJ1eB2q6m9hLK9qVbHhK7kfurbEUBBgED16oXd6Es2UjoAKs",
  "key31": "43ywKKrKCAQcqNT7knCqCVmopsrWUrCxEXbQrA8VbpK8xSfvRVuJn2FjdZgHkGDVgXDPjksTWzdZz1VpN7XEoeMc"
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
