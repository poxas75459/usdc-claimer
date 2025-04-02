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
    "5hsqskJ8j3ZHE9A87Ck2KdmQMomaLJjXaaM93AFUqKjiTKZ5iAwmFLWhdc8m24mmmPmvHQYQ5QfEKczXM7pNTgC9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BftfLtjLSSdyHc7FeT8TmCdRMw31fpGqSvRuUffzzoGJpTkcVf3DwKZBux8uZBxYdAiRTbvRdCDZJYWUvvJv2dP",
  "key1": "2cXAvUr5NFkeQ14hP3M2RGGULjRUwgLbVMTq7E1tA69KMkyiftgWaqxnoHE5W8X2m2GHGcrYPBqR5YoK3aCe7dP",
  "key2": "3o4FN2s7nCqykVjyj249pecDBMezkbhnGKZFSWhxSawEA1zmL5HmgUHyEei3RzfLJyYkQu42je5v3keyMy12P9Sv",
  "key3": "2frbRLFweoVKoUsNYNyLrcwrMsVx9Htr94yqZmm9VWz7WhwGMxSKVbygA4Zu8L4VHNeSN7F8j2kzAHWdtoVjdfAM",
  "key4": "37mpZyZ821xQnFiDkWwqi3kdBh3qbynYuj4rANj4PYB6NpidnEcAPLatQCNvPT3y1BhCC3qEGPAnuMheFDXGFXbE",
  "key5": "2eM4FwxqSgEhLPiNrs2x2TpnbkxWJkBwez1UiHs98VaGzTHuYx2mtJ5qC1Z9FHb4yJht6DmFRn7sxSN6j7JPWhxT",
  "key6": "5gwT4JQu3CCHRRSYosV3wPmMsjer9gMwzuhTYPGcFzTMMw5p9MXmpjfD4yeS6Xab2h9mdMdAm7SwuQkbSNs3mnX5",
  "key7": "4XoyuViArbtwXSsVM3znH8Rpd2Rt87KE3LwYREpfFFsVaQowfWe5gmCyp5tWHUBeSNHwz2HMgpkLxL9J5p4qpa6h",
  "key8": "nig5ATUgw4e4awBTCcSubKkN77fNzWkQJzjT5KREDRvFxv3ypZpR1qEP9YvgHsMdy7TGbjW7Tmjn8nWxVS7786g",
  "key9": "2aMxVXM8cQhk5959FE5D5ojVH8ocfjheLpQPicw9CLm9w9eL9c46HaCLbRC71aiZo7dd7ijds5TQ9m4uyZXFuo5S",
  "key10": "5oTF4ndzxH984q55yqrZRrFiR4NeWmwJ3mJnNkbq9MiB5rG4ZePvxhwSnqfFLr9TLo43U3Rt41JxUUpq6FDenMyW",
  "key11": "4sasXeYeqHFNWwNRLmYeinm2aJzCAacKKjMaUpFofnKakjqZr5LHhCpzJNxR2KDzizjyiAvGprLUXRbxiME31rNe",
  "key12": "3A69vDQWCNrusJAP4zXgjnZseGFqE7qWtukYmQ7hmvRE2hWmUTAYHZHYEBWA5d5bDbZMqPzyBgFFjB12cKEoV2nx",
  "key13": "3mt3sndBmYStzRqGGj41JzbdBqy8PydYLZ3m35Wcnic1dPyrPoG5Ktgv9oe3LkSZix3Yi5oeYMpYxpq4vtRhyaGH",
  "key14": "3dnXXqXJNdyoxz8da215r4QJDK9192MqtC4XjoVELwcVhmjaAbYmQSh4svCVd5QgE87nWNq5xcF4pYb4YMRjYKzf",
  "key15": "2AGQgTJdZoev7KonG3ELfhxsfXY311kuSr3fYcMRA3NsEabpKtUKRfrVVEFCRY1sUAMe51WQBP8xc4GsgdvWYSQc",
  "key16": "5uMVdWT2NdjKffGMZ3A3SPyiKsoUSSWP42TDPkkeAWGbBPYjR2di2VMeVackRkwvc7KmDATEhYBfrsnaPmBiZVNJ",
  "key17": "5vtfrDJfqz5WcURJDbJt67FwSud4iFmbZrcoTdcforGXnpHD9Whbzcc7y5KnurX5D97VTXeZaYBH7dCrfUs9C9c1",
  "key18": "2wVVmAH8KXxGBuReLz3tf7i3iXs5NGdx8bt8WmqzdsyftNjZxa2bz6EiVraBda6wW8Ze6Mb9TyqV2FjUAjcRv7sZ",
  "key19": "3DCjsjcW7ByFF1JLzCYaJtBEToaj7vtWbwBYLZcDts9jb4gvAgyWWHz37qoopJ2ZaUJ8M1oyh44ocB6cEHEEESAf",
  "key20": "57B7ZtSXtEjxKfqh7kYyHemmuioC3WCueNZnVjrYtXRVyh3iQg7tPBuZLPXCHuk4FRB3LGNjpSsDWu8fQJKngTCk",
  "key21": "4yrW4t5gHXqsx8QgwaygJJCanv7U7yNM7nGqBqQmtWLhrmrpcK2bhbQM6PXStoRNVjDfACMSz7T8S7DJQyuSveAU",
  "key22": "2YdGskz9jJ3udJwVBXwHZwLYuWGuW4ECJ3Vg6k8iLU29wuWjAfMLp8SyAsKTpT2EXgoZTe2FDAqVwLTrLkH4psH6",
  "key23": "5wZxfrxTndoCfqKXuPytdgFdBjvWWWUqBHDxYd4br6Euh6DbRuMMsCvzVvvznz68uBj4UgjM1FWojVQsb5tPKJxA",
  "key24": "2gG7XaeZTPom3tMPcKtjnNjzpEVLgL5a1k4ndwwuuj7R4ErJkDShF9vho73ZToFzPo8gms6r5jUo89kpVL1Zu1gR",
  "key25": "4hHoskfPiXxvHqEJTo5EU7qMp55ZVBzujEhjdSJGi1eEMiBEeDeXFnxaBWJGWcgvA5Z5iCCUwS37XYhoCnjbFVEL"
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
