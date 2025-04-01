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
    "2WP2iBULhBxzw1Qks3BRDrgmnHWoqvxCQuJpXSpAwogYy8kPJF3Yxi9nX5uXoocSn9dyy4Ra9VWBEcd7q9WLgzXU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VVpCd4xiWNxryvJnhBksnabdji9SUBZnKPaE4FcDXfeiftTpnxw7Ygx7pBoASYDYQ5NriZMwnmqpFQ94AtnaSxk",
  "key1": "4hme6YfS9jrkjMeDFA5P9JLUytN2Zo6BWZxWcwfarE6pJogPtSn7rgHbzaLw6fbMvENRnK9GsVM5qQyoHKJ8meCZ",
  "key2": "675Qnx9f2gsrB1b6njfYet7beUKASVQ5C4VyNYknrxYFk7buUR24YXCSFxdsMTmhyYKy9vdbJpaGFfGcA579jC2d",
  "key3": "3oiTfhSSHqWriekCF7LcksoaSn5mnWjA1V4JuaFGWsYKoZatLq6HFG5w5DwkmCPV4CMw93dGj4xicEsPsPYbrCco",
  "key4": "28PihRgAKkuDU1yooUzaj2FLjiKxifFwjsmDTTxt9gzk7SJFy54Dromegzmh7xKPDu3DugACdjH1XsWo9My8WnPd",
  "key5": "5Esrby1WLDCNuhT7BGRN8W1F28XLwk3rmLWETjJY5GLF6HiWa6wUaG96JV8cyxZHkYVBEvgj6nhNxT78R2DfNbdr",
  "key6": "8XKW56uDCjn2t9GE6jModu92oQJhB8iQRtYMsTdmaYZEnguT9uxpsV2b4zMXur3r94FwHTY4qVWPNECzYBxVMrE",
  "key7": "tX5vvC7RBJGQ7mSpzqnXXSvtoLdwJrsh2ZmJ1NCmWQciUb46ranRPRwysbjKho44e5YU4eAgcDy3dEbwCmbVTYc",
  "key8": "Uk8JfUzAbbUwex32pALirMkqz67Qgp5XfAqva8yB6iGBFph7io1cDdVHiTa7q1Mtr8jg8MHQivnJks8HjnqFTrA",
  "key9": "37yPak4LXMswLGkWMWrHVuh9TWyxZ6n5ZhtmdY9GdetMb4fY7pNwvSt1rAEgc65qXi1LiQ7n9Jv94pz5krchmXhr",
  "key10": "4c9zuAeBeZu4ixRKrCpNFbqerBJp8ivEszAhNeZJEnseonxkjZ3g41QLW4k1v2ys2CtagmrhhRmmtqK8YZxYPRCj",
  "key11": "KqbjuLscuv8r6ERtYpmecbJavzbjLqSgpEACzW4GUUCxyedSFKok4ZhwC9fbnPM9VFeNioTZGSnpA5ooNiq3v4k",
  "key12": "8nUboq5wzEPmmiJ5GsX8RLun8WJ3rsvEQLoTTzJZ1sARMMB5cVxJCMUZoMfPn7xYRAJDX2DXezLWbz5Nack8AfJ",
  "key13": "5CKKLhg6QoeEoT5kRCqWfB1WFbaEwDPBcbCVDbdwAfE1NbZBjxL6WuDa4mkMGEksYDts1zQMZjMM7FjNjksqUpza",
  "key14": "zMqvVbXLbPJokEJWLXfZBVDoA7Xcd9EhwAdM7tsdqHjLjZrDD66x1L6gN3LjTaY3DvHcYgCijGzQm5ye2FCAGvM",
  "key15": "4wkt7tVxutoFh9UYsdjbYQTVR2LurmQbwMF3peFcMsreeNFGed8HpVZJ2rWQu2NvKKG3ySWdz3r2ZVWpmxKCnduv",
  "key16": "ZyojEfea8hj64fByYBk4MVbq939dvbfQnM4P8q2kYVHRafF8Vv8Y1DbcLkJzSjqqrbjT2xLMNsf2H3JG7iSR9YY",
  "key17": "kiiWWSeAESaQAysvjxY4AEvwH11Vmu2jLj8Bj1xE8wxUtx67vH6GkPbqFhnCpmrVrvevAe4h9Z6fSvR6MJhtvMT",
  "key18": "2qKjPvnigzqB5Wzx1WPTZ8aDN7stanf9S1BXC9vdvsR4LBtJRhko8Fpw5CeHX53DN8N31Bz7ZXz8uCDYENG1NYQy",
  "key19": "3zW1iz874QS8AyijRZQzHxWQyu9DBWrRJc6zxPH8bntSspbZjewinr6HteF8mj8qadB87DWj1hjwqQQ1H9VPTo2K",
  "key20": "4xumkdcT8oJPxzaQxuKLFszWadeRLApPiqznUafRiA7YMf3aaFvVFkLhCWH9J8aw7ihpeLUVub1GkZ8zdKnsgXFQ",
  "key21": "2sNSXYdro3kKBrFArkHDhf7E2YPrz4h75kL1iCyh5Brhy6Cb5G1haZRrVzZvTyFruYbBfDJV7acbxc7iTAgqd9L6",
  "key22": "2Y9KJhDaADXDZLC7Zbh1WL2ZLH8XAoA9y8fMa4z5ho7W1LSq7b1vofwAwzbq8e1xTt4Upf8yMNrcKykM6WHT2ZRz",
  "key23": "5bZ4vanofifVrQMyPdLDA13h9W9kaw93Tqn5QCrwhuRLFiGwkr5zD2mCLpXkF2w1UZUH7gDygf8xESnQe7bJA3Xd",
  "key24": "2GqfdmF825PAmbW8jqygLkG52AQGGKJxzNqNyHCKwX4Zmu6wCKKnGVfjJNmfT3LMUtppAmpeicJk7NwWLVqKYWx9",
  "key25": "4m4ZAXL5JXqVostqD5BFDuefE9otXaYwSvYYAACg6gaxzbw6NkGtCrQByDnYj65gVnTK23rQ24epaJYcdbVKxSEm",
  "key26": "zvYmuVdLzQNe5tXywEKVhodekN6GhDxuwC5TCQwLRrskq7CiHPBdwjPL1pu4NKYeKyJDoFL4KjZko7raD913Rwz",
  "key27": "hJiPWFk2kBiAps5eHtwWspu5J9z25aVae5Y3sif3fDBixr9fqHCTeTanjqvLoRTH6z3kxQuhMDjVdm6vWobV2De",
  "key28": "qg7VjtBvohxsQj1h7eA5kbrF3zjFjKf6BPyxV9J1xHiiegzH1xzHvwz3Gn262rZpHCEgJaKg8eNUWyHJjJdWeRg",
  "key29": "2vCPbLtKZdHDxKvds27QgpoQE4SfmTaSXxbbpXJdn2fPZ6Nrgzxq49Wt2rpcRZjBTVmo72kqTC7FoqRpr5Pa9rVC",
  "key30": "54LvpmwP3EDHPqwXANmtHypF8QM8Kx7s5ZUgQcNagTqHRB4fjYiTGpQZ2TYHTex3kzhpQF2P8eJrq1D45ASCseor",
  "key31": "2RLnmBWp4EXYf2GhXjQEqoGQnGNZveAec3xe6xGRVccacGV17sicNGqZSPodNvhxAWhCmUAPX5LWCLSvA8Kb8FY9",
  "key32": "461hAhMaRrHzmGHmtYheYfkiDDe9ZMs9hrxyPU299zENPkTkaRq4KMsqro4iipKSAGaPzNB3PPRXE6q5yEgy2t9e",
  "key33": "RS7RGbQkFXVSWnBrV7F1dHFCTomVg6sX4EhPzkBYeV8vPfkBVibCW1j8q7HCssf6MKia8GfqapSiUzkP4jpJ6ih",
  "key34": "5HFrssSmyTi5BJG9SS6tXBC2oHEeyVnUNWZMxUu7kRTX3ES9DJZc1sTpLFrLoDXrEr9qTeE3LbfTqKUtGxpxU65c",
  "key35": "4d6sF3obuZeqgYBBAVQNErR9TtZqDXJkdDQFhAcgdq46d8yJ7t19JEDtdM8R9pXUCxsdis2VYsTVzK7QjoBLMk2W"
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
