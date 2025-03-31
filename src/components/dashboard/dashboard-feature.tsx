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
    "3Hsn4kAYduqHj5P2ectb6Hjm8uJ6mrGj8iastrvj4Ey5cHqFiEgtd5n6CKY5iQoa8RHxNqTY4L2wK7UayXHDKdyz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WR7NYuvpeUo2HKpeDQZbbC4PV2s7WS1HFsGiEkN54KnKeuNnvdHpHj2ZLYMcBoYgHqmHEuJkqpBzhD57PXsLfKX",
  "key1": "3TJ4rnT4Jv5U75B5XdaPFCei4oMVN1Ksvn4SXuzoCTUQojcM7DP6fFFao6mViitQd3WWkWDnTC43M8efai8mkAhu",
  "key2": "5oFZbysvpfSY2bSX9KJbgmtKagzBYL7MnsGm22eA71UkJLytSFn17LEwzMZsC1wMVEhki8yenu45BktQEzt87Nhs",
  "key3": "3s2rwoPE3yU9TNZRgjRnFS7fAephFgUQKRnD7DF8ZDbP6e6uAxJ5Bsy9mEc49WjwF7Mo9iVgXqgxHV9fcqzJotZ4",
  "key4": "tCcDC3unkBYPrnpwtQ6oF4higKFT77gSscvsCa3oUXQRNBJFJf6PAnd6rbp6sznMvXiuBjSQi7N9idDqA5hPtXH",
  "key5": "iJn44ZaHBHSZr4G78gSzPbWMBBjFxEWmyz9w4DYtwZfbZU5QR3P6a2ZK7DzNbqLDipFgYfgvyDZfxeJdjpMUJVX",
  "key6": "4tEy4bpca9NP4Be6gBRmFUjBfiLg4ua9Lwq6pwnLtJ65qKEKLrqd4H1P6ddpkTjxqUXTtuQx5KeLqkVkHhq2gy2r",
  "key7": "4Ec2FNirETqJfX797mQ3ndJbHN91rqQLJd78FF7RfvjkFqiUdVHWAveVsaPqREXZzQghjTPRmhjTH4CJNMa4qS27",
  "key8": "83S4qCo5NiUM8wx3cSVKs9Dy1NDmhAV3Ea14vLERiBJ47TpDwdqKAjdVvV2jt8FTffF4Qt4UM6K6e7msh8Bd73X",
  "key9": "2YqUfcr8P5yxa1CPF44zLeiEJwdnV8fQeEUyZx6KbCqNKLwVtBppGw3Ve6WAWrkGaHVfetEK16ALgCSHDAb8upBS",
  "key10": "5p2eCw9bfGH8d2RyiTBMgG99G6ZfY2MgG5H3kTubZgfm4KRdPjEzexub5ZJamqWR2gCNGLLNwPte9RqyWursL2qw",
  "key11": "3HBsDNxBqXdUA1oAn2qfPdwSJcittXDtm6xX3L7gwbxv1q91zitvyS7UoXVt83tJcv5LjPxbPjosB6oW3QDi2uup",
  "key12": "qX86PFWBZtChVEe249oMjdjMRJwrEDeKjEGtTTySdLPXXT43dZvckyqiYBuytvZNe7D8FEnKqLPMAcJdsWB3xqg",
  "key13": "Kf9sEqD4BkfwYNidBXepGwBTCNzM7bgxhPscrd3DbJWQhJA1MgwmNrzmoHhHWbDKH9Qm3BJMdMyaAwRKyuotV5s",
  "key14": "58NZuLwPYvsZaH6undEKGoLN6yjk4DbSBCUWTiNvxgkTgY2osUhKrwgVr1tgSwddsNffgHstUGzC9UajCKs5LXzp",
  "key15": "d9UrssMDM87X3JAriUWgAdNQ89irddq8P8qGasQZ4V4tbnLqbb3iWWwye3YH8hRDveNhjcyApnP9VDZPtarxbLw",
  "key16": "vfNXMNqzGLLBjXQP1c8VudNpLwKpQeWcsav6zFBp4ogvNJUd3y5dzEq36BwJUe2kFVErHX57U8sND8J61s4qFJx",
  "key17": "2ZpM94DTgHWqxx7uGWRPXcW2Vk33zXiCGq2rBApnRwSGp1BoN25ShMYxw3AdYd83ho5CVPuuX8FKWV6S8pJX3TMU",
  "key18": "2AcdXNBAUYJBNFbiYy76vxNrSc27sL7hrZktdfwuhSaWMPwoiCTMczdHmhQpeqWoiVjw8Mce2GaG3Ki8Gtziai9",
  "key19": "3bLWxM8BxCZ3L4K3G1895EeFNg4zyF6yJaTHLU6H2JWUZaFjJPrw6FPp3spq28unzgqvHwgT4TzGbFgYfhhChN6H",
  "key20": "22Tvu7ucXVWLuUp7gLjakStwf29dn3iidhLHrjzz6wwnys4eZVdJzscWNBaXBtHD7kSRDGsZYep6pdE17oLwmz2G",
  "key21": "Tddhc37zaxZxLEVrbN4S7hrwHNXtbgrBP85gEEdoZ56nbhoRcc7yGVskojaTyVF1ZMvEm9eUeDnFx9V3D9sHaP1",
  "key22": "2DzPdEj8c722JCBxTPMXAhiuKMU9oXcMConwt8YvTVRnagWTZc6c18A7PgrMLwWW8oU5QhUYA4a9geieU25J2WgC",
  "key23": "5gbT6q2vAweTerox7gGVD3idKymfFgHCi4pHvu9gVzcsCeHtUMQf1jyf9trNA13rq81p7zo1umdC7NoJKkuJGvJy",
  "key24": "3dGLjAnbfqzik1RDz4YsYPJC9tjUM2iQj8M6ue92fQVzJeahCyyZi6ZiirPY5sre1qUN1EewHgvNH799Ywk1SS1N",
  "key25": "4A2zojeufTZEzNK1kDGxAvhD1XE9ASt2ex4JrKrHfd5g3UTucHuJdpfAoKKSTeVL7edmFJTcBsw8baDEmW9B894U",
  "key26": "2gDzFqRrmbQDjYip3QD4PXhH3BBDfuJzSEERtKYfoKN1p6qHxeRMmhr1UFkoZ71PJTo9skwgQqysYBFmrz8RTuKQ",
  "key27": "2MpirJTUZ6GU2qkoudKm4nraK9swdjWid48DMKPLj3ff3E54Po4e1DYwhEV4rxawS3airTZJf9E99SbNizrsRN21",
  "key28": "zeC2XSyyfYDczkD7w9zGKXWtwX3VGYcjPVWtnYQUyAFgA7HDg2MwyAfuB411BRfSfKn9GLENuYpUFGeuvJPpb4j",
  "key29": "hhYmk8sXeu5AcdyU8mhcZHZoo3aKALGeu9u8KBFYxQWoP6qiAaKnnmn6cPcMUJc9bwKJw1ZDZdGfS6Ne7UWgz8U",
  "key30": "5nLn5UX9esAKiDBZM8VNgA5kAqnMYqSZczwFLnBRoa7B3BSCfvffXm4auXG4g3J1ZNuGUo4h5ogN8NKv7mG6f7Jk",
  "key31": "2Upz3wmBmyNTY2owc3xVVNNYmuybtG4m2gQSEzyy2ANgnTJZ15Li7KCWXKCz7XL7pM2x9y8bifyE1pEvkrNKH4mc",
  "key32": "4ouRXfPNhGeE1u51NQq2rzFHwu1ts2u7hVDiVaQBasw23qekrpyu2fUPR2SrTvD1QcA5gu25kFzUjsNVhjindTx9",
  "key33": "4H7SHNeXX5E9VZQUXf7ZWT3ixhHP3hnGFWZKd93XGWu4BYiWXFe3USGTyFwrMd6HkUAe9zm3QDE7wrAWkuVqLGW1",
  "key34": "2NUtyYVgwEyifSNHvimXeyA2Qgbbbogz7AMg6CApQ93pygzHvur2JhXjpau4bkQ8QdqAkY29kJtu6GVew3t4kkq4"
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
