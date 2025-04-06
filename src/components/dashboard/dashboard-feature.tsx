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
    "EypEaK1qg5Xx6QKhDdG182oN3LcWwQny6X2TrywpmQV9vWqSmZqpW2JPVnpvY39AbRfiEAWAAME9X5iPkuCzqYB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66mb5gA5eTjBGutcDNrvihTeGFCNPz19YH3gPFPWz9fYmEnsVvFTVHj4YqcLCFiJk4u8CYhuybV9hkm62AbqKZSH",
  "key1": "Hgd7uxRgZL5ACEHfQ4Cp1gi8A7F8VyZbPkSZcUktqZWrqw1yKnDMRkKzhAV2DtkAxy1zAiKVBULJNXX8dNDPQZ1",
  "key2": "jnrB9Vo7Bud6yQW8BnWcNwJR6xS4GgqBaaibmSY4HiDvve33PrusMpr4A6KcGacwfsuuNU99yD8vQv2tAiwyS85",
  "key3": "Jm5podJ9qGCna9WYbJGz4BQgeP9FZeL1akPuHM8wk13jNaut5Xc1Yx7nTa7BS44wnrr37rCXnLZnMMfKqQujzTX",
  "key4": "33K9GTNDxYzPzoWESXnaSGugmxf9eM4BQa5aPXH4r4w2AzvzrfSMwYvDYdgVhWZ4kEkkad9Hbq9YsKismvz5RfKo",
  "key5": "54CEjcD7SpQvi4oVf9xCtQhyeFqfLmr1b2gPFQij8XuyPYDz7Zs1yn7SSQQDWbhtcFhkSByT5qp9DbrXUtmp8PdL",
  "key6": "5TMYcPvUt8yWgUoYnyZqsqF284GTPq7aTVbFLUYRfh3CSusbiav4S5db9WYve35ENGRH56cM9oSKqGscnvGsuBJb",
  "key7": "297JXqFb7jTLUGpdkyYK2RtMHcv9MVSXbZJYzu1s4tn2jrRrGEotatE8ZYWRWQKFFPUaghaUeAtwh5r42AzU6wHL",
  "key8": "5yawknRwurQ2avd3Dy8JHqVLyxdNMoRF4Ft5W94xU53L3SrGjUHaxarxWtkZgizjfkrjJYKv1cQkCn23iPqdHAWS",
  "key9": "3M8Yqisqt4f7r9D2NJUiSEJav76NDK1u87qvBQePr3RBtNpNmuC1GTS3PUct8MbtmVF57tyJkwosiFwoDDMpcxYV",
  "key10": "42v7j1sg7TSneem4V46i4Xk4A1DxmGDaPG1PbXnD7Lh8UzfJ29TNEP8AsUD2kdCktf49B7MT85TTKj5remdQcNah",
  "key11": "247ZFuuizCH8bRZ2pXBbuP47mRMcBCoK4V4AMHTVXhjmUEZ7sKQ7atR731Rfsp4UJZVZJ742CEYFTN3mVb5aaWkt",
  "key12": "5uqGSv5GQ24YeV89AeDKrpzmLCJLYCWxT6sEpzAjZp3xJ6UAcd1JmofGhRfksW7N193ac7fsy9NS5XHfCgmPeCSo",
  "key13": "3PwCN7hzynyCHisMy7ihKJtEPM91hqpdDznvA42p7D6NYo49t3Tse12D49mMas7o4JVJsFc3JAJ69Tbs7teSKSH8",
  "key14": "5FG66yCxrZwf3ovJEG8zcwmKcd4sWsERxru9ZBEixjXzQAaJ6Hc2z9RuQVXeDDQAXqKNeCoULDE73nGMbYHmG82",
  "key15": "2cWps7VTBdqPx6UgaxQniWG2CzmPpq7S3xUP3MHfxEEMxtkXnXKtfVgtQQBmmjvQoBSugD2rJrFgnYqThqNayyEF",
  "key16": "4ZGCTcGm6rxjp4iJjudfdrj8YV25KeVP1Gy4JVgt4RMueXzxWtPPdg4ZZJTX6qFDYKA4mzVeS1GXuwh2U2eG1g8L",
  "key17": "49YbN4h3t2txsFqs6gzn7f7C699KvkkamzM6RaD8uw5vjvo2AXUNbQMXjWTJZfdqhJ1viHk317KS8DLnrQeq5f3k",
  "key18": "1sUUJJHRiWGRyMK4DsL4Xdec9yve9QnzzzRt97CjsJyYzJR5QwdKrNwKbyu3UEAfoUMapLV2Aqyrqs8yuwV6Eop",
  "key19": "5DPM2Q7hvemtSKhcZyAK617xwCaz8vs1VqfWc3jTyJcZvxbyKckJDseAHeHT75gmgMYyTHrofvC4EL8mqyrajAA6",
  "key20": "5bKxKR6DKp63pTSK4pWAxn2gL36tSUCsvV9Q7iJnx755JgprzinKfLhtpqd8XwAt2GQhWFxcpjV7CeAE3GRA4v6f",
  "key21": "2UFV3AGPtmS4dXX4D4D46v2qNBGfG3hNJp9GTLGmFqUz42NH4Ry9xg9vSxF2AGMQez2ns25Vt69VJxK5DtatHK3J",
  "key22": "4T4cPj3WCY7hvSTHWg3Hg9j8xQtbPVmuK56jBWdLqCwHazKYwo3pgqxxMkoofDnwF25v4vsVuMwpxJuyqBp56iTd",
  "key23": "2ARyTuu4zUhULRDF9Gd7wj9CGGSZnPDAiXscrZTHTRwup1nB8XHadhzYAPPKZyww7f5d6dZ25jMoUhnrp77stTo4",
  "key24": "vhWcofdQGMszbJz7iLYNJNXUNMEZWjR5CuWBd3DaGRpBEQfvj2zBbBzWHxNu3bvVJxJPeKFWBYECrTsdDgJyPfH",
  "key25": "5toyLH1XuRP1ic2ByHUy6YQZgNhWPgLysVzSZxhGDLKVZFQRDwkFkcahL9XqM2MojuJ6WwX7cRLxYU1kqC5zm3zX",
  "key26": "5CcejUK3jvKBSwwYMDJFXdvbzuatfqpZWVYuCwa2GrGRyE6YsqQ3ZKxSEbaWYj4W5fLaCyrr6WH5PSMxkLJrwg9x",
  "key27": "3BWYccEAZv4FRmE4My3X4AhssJ5F9tJUKsdFZDDfLg5tsyPcEtL9an9xsBsctr9D3ziJwtNShzM87ps76wXm5R3"
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
