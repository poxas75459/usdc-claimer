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
    "5kYVJTn5yUBibWRArY5zbLKkjru5WRrasCX9C63dvb8DcUUoZxrUngRJha28dPRj14Ubj71356FELP1EBuRE3hFz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LZcCRHnVHVsjTFwd1qHi6xeJ3ciKGUreqUYGUhMcoGzxCHsboRyBrGzeq9th5g7gFepJX2W4HGWKgVERnj3WT5x",
  "key1": "5v8vismCzWLqW1AjV3U774gWn2bawkcCG32MeobSuEYPmMHEHMyyYKFXrPrEY75ghfJPXEWBKSr7skitiqYMETUv",
  "key2": "4ff3bZWyArxzn32JrR8Qy2FMy8wwCdmgTdiNvZXuC3YU3He3S4E6GHhJxPzoDXzyfy9CubYRfy8VA5tjKkvLTYM3",
  "key3": "4jVD9C8W7KE7mK3BStqEYUSvDMJDyzysPEN7Ru67wFwnfcNxLfN3rm9Q1A1xkKw3rKVFJ58tWGo6yejjYbr62QYG",
  "key4": "55DjeTRMNzfzo54ZJ1cswvmtWxG5ajxczS57YocSn35nNaZbqL9VVUz6Wmp5D5KYDL2W7CkgfmPqSzDZw22VLGx2",
  "key5": "4XET5fbvnAKNMQQiBeUwE6ChYjcc86g3ykQGUJzXPWhKB6PNNfbF6f999tpEmbjNkYVT9rCJ5VGdUg7P7keQmnsG",
  "key6": "3dxEawpWXYmJAs9EggfgVr7dqdigMeroQhvVCKsd9ekecBvk72KsmWcdi6tpuXPbXWj5T2abCp8ofR96pEVXJg3e",
  "key7": "3R6KXnHEx98z5UWn83CURwYRiKq3LjGjqURRjQAHQsHoo2U8KQgacJZ7BXDAEJrWywZCADC45wJt8eAid7vqKXXK",
  "key8": "2dXjTYGMxvYT9G3gwZhMUnr1r6gNAcntyF1oTPL8MuMoK1Qvxwd3wAQtsWCcdqw15AruF3dE5moG6LX5BvCi7uAt",
  "key9": "Jiv7cucmndY3KUo8M7kFER6vjANmWZe6QuPGoFNXXaQhRHzPaBQovDq3tecMhn5jbFbMzFfvdzXUVNW2RkNNiG3",
  "key10": "2ecXrAbJbJ1vrYLugHUoSqWW8GARxRxmRbheGmU1jzrrNuUw32HxuHbWSDHGafmTE3dYQdGDscPgRe7iLxk6L9YT",
  "key11": "5sohhCJx2U6qerWcVb1djhjouHX1hPemYe1mgnNkHP491LAbwbDWFkmMQZqAL8usXwEqTDCA2edu3bGBbxEEEff3",
  "key12": "3wYji5Erbf51BRKjsaV77zWBg7Uw3Eh56p4HFERdspY3sGFBPhAfKzkpB8URMQChiDbUd7zBcLR8G4igsHRto39z",
  "key13": "2U4Bdc4xATZoSqmKoYwvspPEnHziGBd5pqpXuSHjypWPevGzQfqxaVKCZ7MQQcu8B12XGqHTxignACtcd7n9FUAP",
  "key14": "34wQFv3ExaVzZy9KnKDj32GqSamkLn149ndYwb9noTZEXvqAXcAPtDMa4ak6ioxSKgRRuREACrYTWcBFpniXTBq2",
  "key15": "3RqwVhAxjji7QWxYWVj5bebvTpmwi7jhaWiyLWHXmz9rTAzwjN4DdV3E8Xi6r3zF6KfaHv1ZfnYBSwvpJpU3g5Ey",
  "key16": "5Bb8VyQSk3QpaDqAhyyqD1bG8XDGemFq28iBtZkHru4864N6CamDhhuxu7pia3KiYS3C5Ls9yAS2DowLHEMNLCAP",
  "key17": "2QpuAVRfngbnsF6ESbc98NDsHWxExV1XDU839DugTXmN7BMUSZPCu4hEU2QoCh2aWhM9PwL5WnZrmB2TzsngFSAi",
  "key18": "415XHxovcRSsmrCZue4hKa8va9MxsRssNJtCwsAVi5BbUwNYG5uYNiQv718Sf1457xtRVvjGyTxrybgxztqewZLX",
  "key19": "38mYscnoLbS9yv4tfxv6GiAvVGdsu6ZE1gx1fzAnkv65jbAauKSP7E4bULVcVG6xBnMsorJaUwM41NZ2wagD8hYL",
  "key20": "4DJiaxRXmChUcLi2NEChR3EKX2X2PUfkKr8WsCsRg4Ht1So7ZniHPFdk59A4DFQey4cPKA5F5eEonxdsD61zz2DH",
  "key21": "2Y1u42857MjjtdppW2YNpp7c8NPWNtdVZJ6vddfTd8B7GnT7Z5eirumNwi3JGXBiztAV29NHpQnhzeKJKHqm2F8a",
  "key22": "57fQ5grwbmV3joPF8K3Hk6XjpmniaoWHNUJ2sGgrQWDU39tMEZir8k8eKVLY1RbHcRjwQdaSDNUnpRrW3hzKs3CF",
  "key23": "5fhAKj3bDZ3MtgyFFSFc9MDDLhdhnGtWDsjpQ6nKMHdafue2GSUAmnpWGUzW3av8e26K5uvwhyN4gvm9k2MH8ktC",
  "key24": "MrD6Ft6VcyTqbWS4SzcmTt7vzYifGh7msFKivNMSQfYUA3C5JoHgWN1cUHgaBSpaRsyqNsGLCGurSsPAYNV4SU1",
  "key25": "4C72uAN4XXT4mfXTgso24RApdUYaj6XxFV32sC5rswo6GDmjAVS6hNZWJDmqKnkJ2V9HkYBJvgXNy6yHZsByWBat",
  "key26": "5Vk55hU42D196B9trEh1qdgucoSowBExEuEBJN27QKynWtbbKCAr4xWyPNAGKT41eTLrt3HpuZrSoZGCEaXGpJYX",
  "key27": "3utdegu7L4hX2L3ff6K9MCyR7SHxfhf4CWEp4ggHELYRapfPdqzJRPpYiFZiKVENeBqJkt4wghXN5JAz9ic8f8fF",
  "key28": "4tWvjdwsVoGRMT2jvj2w9szjmimuPk3WYZcQxjrv5LgvtqWtJnsx2dfbpAG1NtmYddcDSUgj83KJC9vCQmnzPufE",
  "key29": "veKpMLTDiRKZoYMa5QVzxgZ8uneNPfhVpUGEqbmb3pF8cNkARectopz67QawDpkMPqBMXzCUW54x43BNmCHHHyU",
  "key30": "4DjiXj79JBoJXyhaWYx8mmVckzpadKaE5EyLXqqetBKiWcfy2kvWobW9Co38UD3uXiqUomX4ry6Dd3W8XKzUJRQ4",
  "key31": "59kPqfLa1zngh7SWkPhfgkhTsSP1PGg2VDqZU231XS41dGUjXZZkzbRRZjUKcjqsKmxx3wSA5Mx1UktL4fkwZrtE",
  "key32": "3Lum9ukh1yRGhZq2vEBdtDwCnfxzK4LBLHWXuNqcwky68zdSxuEx92skG2aaYFkgqmBAiJNBGdxxQbTUnmTxvNM4"
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
