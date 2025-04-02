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
    "2RTENNsBLAE8H8evddZkZE4bGAiGyRUE7uBH8c3WHWVD4dLRw8V88rmhjMWVcoJvbZWGifurhmcG6cB13RjSaebV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hB4DkrPy72tUNDAn55RppxmpXWQrzSGNv7zwFBgtVeYAkD33CcRGLqfbbsZJtC9TFzWSTkCYfRS3T1VsYbqw37X",
  "key1": "4QFYwzdnCwgqXYjNiW757jGWk4Ny8QeS2npGTexJMRrPBRtzrJgqmWM9kmU7nQcrBFkDBoEMwJs7LeyCnXpo33wb",
  "key2": "51c5jm2obCn4N84KJ2faqNU6noYaiatz22YkpqivHMGhczZaJX58fXQNRE8UDg9wtB53zS97qf6tzgMo8p6oiYEi",
  "key3": "5nyAKnXHqonWHvkPvDLKnMWqeDZ4SKD51ARF8a1AQXH1MF5jK7cfMbHimtZ9qdUrLcZ6DzfWwhFfGRUy7PMExxdx",
  "key4": "gR85go7LKopWQqoFSbhAHinYeVQz5y7maQVSbBzci3x5GEW12gHfwAZmB5sEtLuyuHfuxzmuY9PBLKs2ojSUa8g",
  "key5": "vjGq8KHCnzBMBSfHnng7mdtMLo6sQJZBm4JYYEqT6rRCpkyWKJcnZBFswAuDewUZc7N8HvpNuzA7K7ttGgUBsSH",
  "key6": "2vA3fMdMYuRaSRwV4g5W2caezavEWq22UYk7EkAXCesA6nrPSYXxnS1iszcqi1ViBnDUkoT1kuMHhXa7zvM4yFUr",
  "key7": "EnfRFSHhrKP4PotVBy3dGT1Q5vuBj4dKE7D4uVB8EyiHB5wU1Rzzus4dBqwP25LoLhDHxGFn5zAscxqo2XD3AXX",
  "key8": "5GgqQLYXF2kaB8VAeZ1EgpEqKcXAQNzGEDmqPzh77NVRpzjt4f4juPY37mWmgj6J9dMr8hrkCdWZkTwsYwvbAL99",
  "key9": "czmq88D9EHHA6HBBfmKikzGuDX84XS3VsrcRc8wuYwpHkNoxVVtwZSRdRiDE7YNvPJGs52UPaJAdDpmmitxZ5Rn",
  "key10": "4VzDmAdbo3ZnDZLez4wHhaSC7rUKVk4eoc666mqZ2yPnRBwFYsscqGXBfaVqoNjtBFzsMfzhtjboEadAbxjb1UGo",
  "key11": "55UsETtfoVtV9xsyzFBm5KMKqBEX2eWgTsHW2NmMvbZuEmraCKDgUrTUNQJ1AKpU5xyp6zckZZqRHdUEfvAGFVpk",
  "key12": "2xN9ww9i76mbK8J3cr9UAZTU47iUTWYKb8mKkf9RuS3AC4A2qpsKZFArKN7j1H7nNjSc3Jhiwp3ZCYFmPXxCMS8n",
  "key13": "3sM6Ti9pZKAtrWNGo3p6wCzZ2tJvuyLkXCvPbvWVRx6Qvhq6GneQMonrdjfruYuDBQ7z6MYJL6XVeAr8Dh3DU7W7",
  "key14": "35GCXCb4fYzqnufxWojEmWDWqPYFEh6Pky6UQ5MtM6t2xAH4mT7aJbhVaoUNuarrewWSoYBSnwyyDFVesf64PnMp",
  "key15": "34Au3ZufY7xsRzgv52ZsXUc3eXMte1dD1ZHkPcwycdXPwxfQg2LJvpxf1ttzsnmVRqG5toKe9Hwd8269HaJqLp6G",
  "key16": "5B9ELM8VFWDjegaa6ZYgvXZjpKapbFo5rgo2r7H8UPugZ8GtnKEmMgJiN5SN6yDMPPPLprzEGpct7VztjrqJzSur",
  "key17": "51UDELG1ZUAszQpnS7RqJFE7Zf1ARRg67vv8hqeKU7Zp1CVWRuASrugf3jDahwcxp18rFrQ1qbgNzoCxBqTQhmDe",
  "key18": "3XXABwsD5EWHfmaQoHvv4rra9NbTECMJaJybGVHsFfoFtMfbcz62hk4Ph4JHZrPhqmVBaEJQujuJ8FYspHqGUjuK",
  "key19": "2JP1PAe7LeqXAgv9oWp1qGLi5TTCLpHTPz6YVt2ogcLn2ZwRf37kJ5bYcdZtnx15wkCjaTb8eaF3BcwKH1hj2tKx",
  "key20": "2uezJyizpS4roPmZFUqRRBcFkYMh2scji9QTjtDyVVpuCpb5hnXj12yFGFdeB2SvBb8ur2GfTWMESbUvxHEGpy2N",
  "key21": "2u48ACHDGFu3v7xCXGsDGfi1ZMRt2n48UQ1dKLPwbyjLKwhD1gJr3y1BHWKaNKeH3NgXAj289rNquT82YpdXbgqf",
  "key22": "2s7YBQ8h6tFRKmhy4oLqRhcocmLNLftYJJ7BjsrbVcSBtkASqUTR6WbrecqGwDbYJvDxLRd7Y6vG6Tp6E7NPJGAo",
  "key23": "4DFPte6xMX4vT5whhAG8J57F8g8GyvPiNqcgkC6Z6rLDApHymUHLs5SeR4D6y5Ry7W7nUyPjmZ6ZsZXdwztmVMkn",
  "key24": "5mxLmUXBoZnPvfEyjDQoQkZUeX3Ke2VgNJdpZR951qQrjx7uUJoLPbXHAz3DbtTx5Vv4sZEN84uMNtRiCwPXserG",
  "key25": "3pH6jft6xXuUZCWk2qDNHQ9XWqfaL5i19wqnr4kq6NB4rFPGSDMNEpUZsStZKRkbNJAdfsbn9eWbDGmenZSTKQSS",
  "key26": "hDZtD5XiqDJUw8RKCJST6R9viczNiF5uybqAh8t8UcAgpH7EE7KkZzuUpRnKfcPEUEcRjzjQM8HaU4cLbNCCPeR",
  "key27": "2hzfERMB9mY28v8tLHKbvnTeq62ycJHrCH4tcxpDMgNufsS9d3EtgXDMJk3NAtH4fo2Nd9GyppsY8qJh7tLmEc7w",
  "key28": "2WkqNSYhXFqxUYKKoFxrtfHdXNsjcVoCi8wsbF8ZGfQtSaaCPRR9gnVj643rPbE5CV6Q6F8pofi9zWzF1ZxVn3hH",
  "key29": "3XSsNeFRXxnfQGd15fodDvmMbHKyFCkxWhPiRDycDWEs6gA31QKB9nXkwCGyrK5yaT5T81nR7o18gTe9XM57ehpV",
  "key30": "4jMeMjkUFp9Xhn6jAR4eQae6UAQVWcXDvjiHWwELDM2FmJT6p26E7ABg9FnTXV66tXeEgLQb1FfpH6Q3spPFW87j",
  "key31": "34H9AoRKhG81bpovUaieUCXGGES8iYBajUk8tGuyjS7BvkzqQpGidzryzw8DoJHqThDpr5MigabLUPj8fAgJFNqz",
  "key32": "3WdNHHxsQjEakuNjo4GfVeoXgwVVGc4h83JnZw5La1Z2w8HZrzxJBzenteNwKzRh5Vh8GZ91tBz3XEXF7yxgfTji",
  "key33": "3BHiScXMrbtvvw6vcWjWfbE3xfmUQ3poNCtihFFJroJ6BU2AXQmm1mMV3aXc7kYPBjfcNobvNAb8xHmCaime23VN",
  "key34": "3vf81FdXQZNcvoSCFsSeM3YVqyLvF4sZZz3Zh2MBbkm8UGLYcy6pJrHnMFDa9kfouSnw3pFYQkZPPteXV27qoySL",
  "key35": "3yLFkYoghsvpiCKExtKKc2cTa3ThdQHAxhjd34jNX5pocBJ4jy8agPDv87vsp3Esyw3hCgmGJS7CPGUZ7NTtY6TQ",
  "key36": "XDbe2Rytf2J3oRpLDymBoJHht6K5srenNypbuNLGRQYQ6GCXPKTKLgRnndBDqVYWvjFJ2hMuU66ZcH1CcDbXNTc",
  "key37": "5XViGdU7kQTLeMSiCymyvWDvcQYWh7VFdnZfp1Df2uGT58UNWDHtchn4gVdJoev2EBP1P8cTYLtVQdZvxnfEeUR2",
  "key38": "5XWBDduSKLkw1x2LyPZFsFuPhEMrMMV6vTjoLZ2snvDwxZQjdy1ytUxQYFhuHNUACgCvgSv5cCVVFXqp3oKpoShG",
  "key39": "4kXV26x8w8QmzwKdtZNaUL4uK4ysXHPCEnVpMHLGHYRLY7UqtsJSDGR6hdcSGaPvFpCFRz29jHyCLe9CKsypBAQ6",
  "key40": "JWDp1UJvFujT3aE5Z7KVSXpwK1KjMmc6LHdHMpUbMS3QWZsuyP9zFiExjNFZRSuHTekiKMU3GFmZYc97zH62gX9",
  "key41": "2reGXDfmMBprf2RU1dWXtbEfGsXd5AshA2vK2y997Yi1Xz8qJj8C3uySfrH9nKU6J9FVkBhn8NjHfbpwg75tPKN9"
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
