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
    "5Qyf2nyzH176n93A863ZoGY7eVj38i7E8oxYkqqvC9YgbxoUzvbc8yM9FQpFK6kvWZ82NHMJgacVR6qSMbQk9jMt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64ks75xWGegjzeos7kBa5xxTQjPh4FUdT1RMyk52mjFzwYDSs4MQDH3AHN1p7w69r4yBDN3nLz2abithLRrfkiSW",
  "key1": "5x7SXSAv1vXfLvi6tTSiGkamn8UrSBvy8e7cAj8G1MhytH3zcmiiUzNkAxyejF2GNbBUCybcv5gHFXx23pYzjytU",
  "key2": "4cocQJNY9rPLgzQjwsNbHDYyS4Z43fUwXYtPB8UP514TZZuhsEhfYwbVRgHDXpW5BoAqtsSohHdVPyjmb45p444B",
  "key3": "66NaWN1qkRaA1zgF9AGp8opaFskJkSNWp3AartRz1GCP8U8eKSHJXFDTQtjRvi9C1hRFpZAJHibvc5TMUHB4SRQo",
  "key4": "2r7Ai6hfw81tsY7E1GDGv1gmnvAtB2gifdZ3bumRk1LTqVdVFKSm2gdoNzRDmqigNCcwrsr3zjFeFASZmrow3TnQ",
  "key5": "2531qXWxLqUmzncnGXUJmjwf8pSqAVFpEAwGeZzHRmh2KeiPEVX5dLwcpY7ANjydVp9imPzhEtY7mBZ6XCBcKHqZ",
  "key6": "6Xpj7vCMDHQGitYbrw1VpLBNN5tSUB9e1kCzbzKu8hFfasCkwo4jxSHJtn2UmMjaJvZUS6aDJfESYPj2FRRRPyd",
  "key7": "44qCDBRXVJfkxnMQgEQyCKjU1nYPyaxiKrW4bQQ2r1BspngtXyJBDNs5uqEsVnDqc8yUdWYQrfScnqijP6b6XMVA",
  "key8": "3bqeTuYLovDaUgGqnNTwc411Bo43Jeh3bxQEqynJRtd3sTzmMVsCQ7o46pp2T8j3zNTaipqGeJXcmDNesWXCU6Hf",
  "key9": "3cenLQN4fc4LffnXKhyDbf1De2ooskoPkCJu5CD5ESW5JcNNw65c6R9yCCVV2dHq6S6eSJgiCXB2AWRyUninN349",
  "key10": "3r9f5fCa9beD74inPJu8f1rHiLn3fWpjJLwkmHMmPYy1k5GFWSv3nAbVrNqgndWjBijQUofvKGdA9vr9v55pt4YD",
  "key11": "2QiZjjBCUZUSnDr8couv2k7auMcg2AAaur2LjG3HC1953wo15Eyxmifk4eps8aqhWRjXjDXfnzPaHuSKe3QMTvA4",
  "key12": "2sQmqKEGUnNsueEu1hFNQNmVLoqMCLUhUFve24uFcHTcwJDeeF6PuVDEbQsK69Ei8j5U5tvyaVoMeS5Phi874pbD",
  "key13": "4T82Jn8C83feNHrfcLzqHcRt1XP2isG1UdXFzxX7Ymo5P3E9uJEUZW5A8RkLeYVHA6bFyFTYJB7AFGNiKxb7k9Fx",
  "key14": "5AVgU8iejStCSw8yUZKHNoaqQoPy83eer2k3DfsmaH5J9ATbfj8s45NFUNpeYawGNo1FqGBT1inkiSWnGWyVRyGr",
  "key15": "5f2XnHF4ee5jVcK2Dop7hKQ28s1hfgVLTBKRmaTQkhBXappcEjMuCBxkMLttZE1PRcwtcBN8GionUhRNUeRYLZZu",
  "key16": "rSiWZbZEFSbNLJy8AkEs7z6aa21dc57ijv763qP9cSvW3gaXmMX7i4EPRVtmLowYtEfmGEVes1KbM3HFw2gNdk3",
  "key17": "235Sh4e7PFLXiN724Ft1tCpyCYoWUkmkiTvefZBzqQCNQcTFsW9fKQn2mY5eH56A6UbmYRY361Lu8YBHvEpaM4f3",
  "key18": "AeMQoiBckVV369MvdLBA7XRubGtMjEWcr1Bj6ePnwQJG1mXZRgpoSLgyVuW5hp5aPNP8Zp6R6G5jnPS6gK4oT2S",
  "key19": "4LfqrCdUso2rnQXKPmfwD2gsDthYw4h2P6pKRnvafTpW5KKKUnwejgxBFw2XVKsTJf1N7bGtrW6Jt6C6wrYQc7kM",
  "key20": "4o6b4pikzLsm33YUbAypn7US2d1xdcANcUVyfVrMT1Vy35UnbeisTYd7DXgd9Kv8St5dcgXimXaPquP2t7qX4JC2",
  "key21": "5rSgXxwpBuv8iH6KB2b1eSFcGwDgQGTbBPx3tMqSX8ZhDJGJa1MENRzVuxXrDXduLbdDYvvmewarLmgy3QHbPg6G",
  "key22": "5E6oRtCTitmW4TLuiNDHnMUGhvQNR6mfGKZ768NFsiLELRNypE2YLSwmkdWXrHe3novQVBATVd2mqNi8AiQerUAM",
  "key23": "nUwDt9Nd4E8U1P6Uzm4uap1EKu716nL3YMz3mL1wJ7fGi6oyoEJ7vFCrek6M4YSLvTUVyzrVFSg46Aght9dQjai",
  "key24": "66izgp7hL9iB5hr427N54T4uaenxLDAR6SoD624zNKWPGRJm4bcZsQnDdSmxSQAkzjrnYQnaPGBWXd2ANfgus2Pz",
  "key25": "4UJ3QpFKwctCEfpi1NfMhPxMLYJWbcjxPxPjNS1eMThEXccEKR6a4vtyspUroxiQrTxCUQwG59AsLnGkpMsBAPYk",
  "key26": "21CXpVf2AGhigtLzmDK8MnMCCg1n1gDP4Qj1owYuHwPShBWFhmAJvbPBPe6fXvYjdr6ztmAPu1FT1hBLJZW2TMc4",
  "key27": "2AjALUoovn9v2hQKfMVyiQ7W69LHbs2DivVhTnnkCVKEDLyDqv4zq7TX8EyraG13MjpF2YFVH16YSjfYoC38NDbQ",
  "key28": "2mxv4dmBQDgC7cGscmFBFj4N5gsDDjuMbcS3XCX9pTsZS9eXjEzYZ192kgcZWhKFpE3WdTnBicXhJsnmjFH5sNw8",
  "key29": "46LREdbMAWDxKnSjB9RrQY7ZUxzBXUURxX8KEtahsXXvAFw6VBNVknneeKMQgCpyzaycVeH727emon4j9WzCETrh",
  "key30": "67gQCzMUHQs5H6AhtN84TepbrR6xWofMWsDVmXZggKYRKGdHwfNrUJeydHHnEuHSFeHk9nvkjGKXxXpRU7fHLNph",
  "key31": "2V7LXCwe7C3c7kqfjY7Tb4h6T6hVHbiVKVosoJyNmu71SFS3eUDra5hiTvN2TdTvUAghUBQ3Z2uDtyufRdQH4yUV",
  "key32": "NvmiMgPVKJN5ihz8tmEAL4SAeqAWLtZyr3uwfLn4ZdV7NKZDwMu38dri3kqYpvKEyqsCX8fE3jBuGYuFA6HoSsT"
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
