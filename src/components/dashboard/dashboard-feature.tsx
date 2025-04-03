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
    "BxG1FrsZLzSCVpS3Bj6AdjxpqZ8UtCNFKMWVGqkeeGwDAoFhGL1PfiGG8Eecue8XVep74RVjUn4iHuXwTJwom39"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B7aEoSHNQeAhWsgpGnCtE9maxDESR65Zn6PpPk52HQtL1dTw7v7CJo3gcYUTodrofGgGGnCp9qyMQPjfGzR3Pxn",
  "key1": "5s1Gw9tewCpsche4gJLzWWxSDtCeKfn4QdDmcbjMngDbcw7oi1qX7aXMa9QyFvnv5KPB2JD4wb9UFHLSavB6D9zs",
  "key2": "cpfgw7WJNg5VencR9UEJ134PcmTTaVC8z4gLxJ9kevmu7RcoK7C7gZCLNjdT6hstPD7Vc2i4tpZkHayfes63jqt",
  "key3": "3H257qEXYe5tGj8JJhVXGXitRjnQAZRr1gC4eGERng2wfDFw15iRZwj3rVX2dJ7zYnJetQWWq54q8XTxvpJJdLJ7",
  "key4": "eX8sj5PUzF6qmxAxQm7H5WgYoKEtowtKSdsRZDDerYdxUdbwHkcwEmBoKmPR7SQDUJ5zg1n5fuP8rWewiwtvgv7",
  "key5": "3hu4npdvrPcNKkkPdZAQFKTCRynrC7GKKSrFodbkxakh3V1v31k7HX5RMbNA4yHaYenWkfGzztw1AQqBptFu8Rg3",
  "key6": "YAxZxWaAmAskJufcQTYuLmGmpP3jJjVgdEqmrZzi7MUHSj3UHQjtd1PqpNUqjcaSpbVyJ9QFCo6NBo13eQvurAy",
  "key7": "2v9BMrEcCuHAKQCU5XeKdEgKxtze481Bix89JhimWJ31KJmPBxg2cqZTXAcbTcs5CmqQFNxF4UobE3RqrbVb3nuT",
  "key8": "2quT9EEKfYZrWtRkmXxoXsTGweushpnzw9SvS43DzD3r1xDo66Fbq1vo4Ako52EC4CCJjY1kmf7vNsCJwEUGRbw4",
  "key9": "3RULyogifvYC6wWpqVHi9a4o8p7tsSFgWSv2pLkUskoCynY22HQ74htLTMDwYd8Hexh55Ae2zScTnnW4gRQPuZJT",
  "key10": "2mBYJxs6FYbf8MdmhHzovZwsiYngtCfiM1D4x9GqocbaSfvTeUjzPNxwt7rUusPgYreMSiYUZSgEKVxZApRN4r2W",
  "key11": "wE2cNW6tDbrjiS98FnfcSx3TytSq2PUCdz5PZwuLqN8qsxsQ844p2KsXQnQZu1SrBcoJ16yVV6WJzymTiFCr4k2",
  "key12": "4dHJyDfKH1n2vn4Phwe9KNqZHFgrftanVkK3Xcz4UvLqf8wexAM1afnZwcQX5XJzVvgBtuWkLZftHKM11HrTMyyH",
  "key13": "4nX6SmsZTwqXjja9opSm7ggNr23VkETSqe1uB8DBjipo6F4GXk3hePHedi9gcpkaRb8w767qrJTJoY8zr9WDKNkS",
  "key14": "65BPvn1Xfwq747gYjRoDbY5LJHxCxPSPSGfMfwc5QPY9aXo3MSAcWHGoNUFKjibYMVqHvPLNcxCbmdLgC8J8L3iL",
  "key15": "2g9TDHGEAGaxnR3AKAmWcdzzR44u4So1W3KaEmSg4W47UuHEzxmtgNvnQ11ukyE8TgRUzSeL9eP1sBVm5gNVmNoH",
  "key16": "2WYikMM3d4kgq7Z6XjUx9NdJW8naV7fnTGU4zzdzSiXVhTieqU4uAzXCHkyoccQk5hNL3RgAz468wNYugv3osgXg",
  "key17": "tgf1iV1p7RP4y3Gg2356hpra8wXDeKuJ6BTymNTMdZCyCA1fzqA3eYCYN2nTFDnMjffjmPJhe6qu7hVbhFuMmvR",
  "key18": "2DZctfXkABBUHrL329BK7WrS1CnnKXjarsHKKi6fJzhkVBorjsPGBqzfuZNSEeqWRccCxEuH6e3TDPdp5pdtWaTw",
  "key19": "3w5w96zPfe2JyfZUG9qKGvuDEqsQuwXv74bz8sm11y82cS4wxGdZ7SDhv6sou23awXcNFf21t2TKzVFc7BRnpUBa",
  "key20": "3NmRtqjxnUuq7siaqeThh7Exv86Qp7e47nSopkvHQeGSPe6FnJqQqKSPgDadUKxxDptHi3BSvocFWEDg8FpPY9oL",
  "key21": "2NowT8QQWSNojuyWRq1xY6LpfBq21hfvFH4uAf4uZWMEMpNuH7dHN2AKDVwnXFZxEnsrU3aK6j4ftXDcXE4GfKQs",
  "key22": "XfatwLbWWwCJ18NKG3Vfz2rDgg7XRMjAPa7SiDSqtGbXXwH2Ge6CqDDvooQbqr26MNaoWs2uqhS63RwCHset3WU",
  "key23": "2AjzwHcT24WicWUesSxZkt5Pd4amMvUyvkbjNMTXdUYHjin2URt4ZGpe1wfVtDdFXpdCgL2bo4ccDugpEmHNjGG",
  "key24": "27h7XMDUutc5FUdboy39TMLMBrVvaRpRqAExSCG3LsHvDVLnqp4rnQjRPAH3tKfeRd8dPAsxA2H5vubcEmNdRxG5",
  "key25": "63k6dAG9Bb7qijkinD6EVdvLRa8fvamEbxvAAE4NwiwfCcfFzSmshc6uCJLykZ4V4vVckXHmYzEsG2k1u4eFd2KD",
  "key26": "3TPkJHtX7rSroDkgxutezT3FfzrsFHHBJKyFuXhPFiaUe7N5wB1Me5TgzEjkvikyLtGMHwnsNjBnbcJPDbaz4yd6",
  "key27": "qqLAEQw5MLaXxNNG7i353ZTKgH3ksfbJwbgXfRPdELQp1rnU86JkTjARBQ5orQLdtLxkLhqqCt5M76FHnng6KE5",
  "key28": "4jV6hXV4LWmV7AiHSRhwnDhGP2z8gRKciTpTzzCd4uFbzjzUipbQqstJQRYonYAXh7HThkFsxL7HKL9Bgsv9XBAi",
  "key29": "67jUkJ8MbdXJaV6H8usCAHkxPCP3VxanJVtKsqfsZtz8GSwBYqnQHZhbTFghSr5K1PKL5gU1iYEYepoFWv3Ez5bb"
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
