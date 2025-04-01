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
    "mtejwMpa2dcDz2zghGDSsbu2RAdw4vwSg9P844qwbgLNWC96vN3xVqsn5JhH2zqBB6iLJaYe6rexSwHtLfuGDiP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p2vRBm9BP5n7sDyDqYagtyvtNKWhYFLeRLcxH2AxhHVHdgDBvJC9A1AHb7FCXwaGFwaz2HAFU5zGGRZuDm5MHfc",
  "key1": "bnfHwev5Mn2SXQ4k6k5NWrtMbpfX8DBrAbSK47Hw96yZh24bVFNsEBxkyzJaDAQQq3qJtjSQmxGrGJ5PVZiyJ4d",
  "key2": "5mKqjRsrN4ouLfsVpgRpkQ65kiu2jpBsmo1FScv3qbPs41zeqQgn6nq4CdsiJpG3wBYXpaw5Cc9sPhZz7td35yLV",
  "key3": "kUCHHzBw2W8oFszxtoHC7rufPT4nM7byimoTHMddGPa2sVmad2Zeuzo4jjJL5YDHGQ8pYmDQi7WpXc8N3CDgpQ2",
  "key4": "4NDhAW6ohBnUpUZaDPrhwG55KnrCwr5BPKJ2V4jQfjnamhSqSgsuJAStQX8r5VKc1pkRuFoakDqz5XCeK878eAHq",
  "key5": "pX76LgLzDuhie5thCAnh1pqmZuUWW2qZSsGJu4wuEZtNZSyTf5UQckjRpFxF6UtZpdw9Y6wsvNLsuc4YyqNMzaN",
  "key6": "44i2hxP9kWieTX432kNHWqrAzW6JrQ79EwWrBK53cfSFoZNQYwCM4d5F2woatX4sLyZ7SDLZjTvjjtUmfQnUUesV",
  "key7": "3yQkxodK6UvddhoTVWBUGUvH4G8fa9sp1hjvWyNPdgEme36NxP19ahkXrppzMgzCDb8x1wqLQ3DyEPevjpu2dvQL",
  "key8": "3Zz2xPcmfA4xy8vgvBRi4zneqiakMxdraLsrb6ZBzhtLQPPJDvCS61pFChUmjfGvswF34NJHnSDXsicu9VzABxPA",
  "key9": "28v2K57dNyeS5PwJPfsqcWJzKtf1AoqxQtL9u5BraDsU7sZ7ZErAbpLqLyZ4N1tSRRD1s4cTYjHcNbzQNu26up4K",
  "key10": "1Qv43FArZ2XyQATYQzAoK1Y844xE8H3CN9ZaRT4riW5NhFuvBkGwWX8b2B9pxVACGaXaMov7ronACMERs1mKnz4",
  "key11": "5nPWH3D4phYmpgjxuTYz33KPWY7GaEmJCivdF3GnGaYp8deQSV5ga948dZd6ziuJSmZAWvheR4bjwfYMw3b7xVy7",
  "key12": "2avZdHrspaVeS9U2DULemYCKgfDgJGqsPbFxv46E58DfTFyzbJEqNmRCuqSv4NTyLgyTDzc2nGqBXpzfDX5U6iUm",
  "key13": "3gw9oL1t7JQbgiPUGe7eNd9jkLmrHw2WUGPhtRyF3nAA5KVBk2xkufxT6jYAZ2K1LmLnTCGUZhVZWEYxLfSuQ9Vk",
  "key14": "V9JFwkqnLhPGKPQJFTi5fu8sKJCf6N7k2GRD2eCHHj5KszBmzvtrXj4rSLMyqYfSem89mAfmP8XTQ5WkAKLS6KX",
  "key15": "2G5Ay8hW9tt65cDEwwsxFNf267GgrPsjDLipJegAuiAFTwue3KNYPD8hMa1SiBXcX4YpLEXFdgWBwsNf2PWRbTRH",
  "key16": "2DQH7kfswAUFo7Bh4HxYReQPf2RGBRJJkU6H2kT6GodJQ3LtjKjwE3aJgt9yAQLBEJqbFYGr2ZiBL5MYbTcEaptP",
  "key17": "2XWm5H1oMNQAFkACHGBoY8aWy4J66ZbLTYZZgAVDp5CVfJJjFerTZGMk3UoMz3m7NdQMTmLQoTtfMvD2dh37dpUB",
  "key18": "56iALXREGuFsvEdf4vhaK6J1tKryjceLp1NdctYsfqA6xqAbK4y9PWE3Vz9unt5JDQHkMJKNPhvGNdTvYFWVmynS",
  "key19": "2pA7onZu887SF6YywewQoGJjJpiUP7FypqsdEQxTsfSD6vWTF3f2GcWasWM1VFfELpwrTU8rLqAP6fbViACUZr7F",
  "key20": "2eRtCiavknpj6EZDbzqjso5hgchTdQn9NUNV7QAZLYybYm9HLELaRUa6thPzXfEUE5kwu5X9J5PhyLY89hEM2X6u",
  "key21": "5pcQf7wY5W2p6zfPkaC3mDvmBB5PxnGrGVEyXZqDhFzYjRYNrogn3KqwUUHLsaDYEoWbXaxuj9Uhouwg3K5ioqiL",
  "key22": "R3ANKPSyXfsT1uAKyFXuKQ6NbpQPBWvQwJ5A1y5h5dpq6qRrWQaRZwDP18w8Dx95mAAivTGUvvnR9fVXdg6pmJm",
  "key23": "63Hu1fiVQ8S5i5ipZ2LDbBsczGYR4ti5HFAbMgy6mV1MCk6CRKh9vXmzDw3HRx5PbiuniKzmCnJnPLZwrPvcGVSg",
  "key24": "5jsCHRxWeJD8beqXiurEDiQ7tMJfieFioBrDtsMHtvgUkoTjhg9GfVQnjTPoJdM8bZugco7xTC91t19BEC25HkzK",
  "key25": "1wu9VcuczTkGxrE7Gov9gjYpPD6cNWSRKMwavfQFhX7873U7E1MQ1rnEdszWAFXGq5nihr3cAXSqoCJQvAGGxUN",
  "key26": "3cSTtvDKsmHxnfB4mMGoUqNkDXg7HmbWqsfGsi6gtnsXCkqYsRvaDWzqh5T9VxqVoLrAvWjzJbyMvvpqPR9mAPWm",
  "key27": "UZSifX3Y299vNpMBXFcxzkEVmYbjXSVQF3tDBFsUQL1zgFPTDwEfFYnfXePU3Hjx5Wi66bTKjfm5ysw7gS2idEN",
  "key28": "2LFxhJKoBTjg4RdcdawEPUAkREkXoZmYroE5P2uvbWHY86KVw3cx5Yxjme7MNfHSLqEehgGeHBoYf5kWTqt7oYsu",
  "key29": "HrhMPj25xQHyqvsUjSEXTbGgzZiwzqus7epi2ukCACFB2MXSCuu7hoX8ZY6R3VTfsTbaxyQFquAL2Ax5T9DAi7u"
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
