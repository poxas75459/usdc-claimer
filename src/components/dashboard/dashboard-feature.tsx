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
    "3HhhCPGgUA2Ev6vz7i1t3HUmNEMi2pjDAiW5k7UqrX9YBjWwcDB7s4aAdhVZmfTrxVi9eYUihaWFFZq8XRnFp2up"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SpZ7nwPafz8k5zjU1mqPQL7jLP615w2iEvmbTZzaxmBxXhLDWtAjE8YwmL5GXfVKcqSSsGRM8EqCDuc7qTE1Rek",
  "key1": "4xygM5KbQbehQgemHNMLxdcT4rap2U313WJzWAeTKrJbJRR5dsfj7SQ3bF1Ejc8MTUFDmwGei4tWSNi6P4Xd4taC",
  "key2": "4jXMjJ44otQDW7jwdwoYa8hBtingfKFLov8rjGMgbzSRRmFJucduMMKgyJjisugkKyioz5AdQd6E5LcCKMJmHPVH",
  "key3": "4KmtX9ZmepkM8mnTGj4BW53NWhLRnCLjabSwkFpJjZe1T1cN3MZBCFN3UoPd2fdTje8gy5UVXDbRgNRgNB2K2jRj",
  "key4": "etEnnoCTJcwsWJsUDVCGAVhVKWAX8RT1AxmRaqq6r1w5zVf3MYjUYwpd9jVhktXaJk7gE8KJWi3HFPeGGCSAuPx",
  "key5": "2P5o9EvxqoyjU5yMvaZufzPkyGng1siZTXsfSjBir7rvwaXphDJorUwEmpVS193uPV1TjJ5wcvkbodtxDUS9KKvn",
  "key6": "4FzhyGKF3UuAor3KfKVqkatRcA8BYnVLtEzrfZyoZKodoVyLiKN91Bz8a4Y6WKsMctGqqLs6JVbyooA73brvi4At",
  "key7": "4EuR6khubyRdb9ntv9kKw9rQKcBKHHDHLbvWa37vUjz22rYzseG6DLyEJRwWZiQx3VZ9Yukb6nKoor9oJYXTzKSA",
  "key8": "cL6eKe2b3o8ymasjTWpEP4hj3qScobBdwTYq1vJbrmxywGsidhTRw1Q7x1jsPcpvxXquFBDrsRoLKjQjacdPkFd",
  "key9": "1254YbfAZnQkZZAsYvdEixfEbMWHGQKhhnPRjf2hKiR7bTTrNg3w2EMxVmeTcHRSEABnCuhAvX4bepHxmoyNrMAR",
  "key10": "51beoWpUD87U39qDu6zyVTQ4jxA7Zmbp1cwXGrQBfz7RQP6U93uPWLZRyTLzxP3z5W6J3PkxNvVuNzE14b3WgYsr",
  "key11": "2RGQQYvp84g5YvJqXdS39pdvNTz2onrxy2k6FmbckgnV8n5AwGnqefYS1yr9d8wNBSKmBB3YjNcMtKwVaFfJNJXu",
  "key12": "2oazYwLrWG6Ps1nA1hC9UnW5wtkrxem7u7zPX6pnuoF8xkFecLGwUWzXMb4yEJNagx2N8RGdZbMjUWHCzUZDGnFp",
  "key13": "2a39PhwRhynCVJMLwT3Q2yZK6eRqshvqS269xp9RSbJTg8U9waUCcTkX22wcZbRvFENxw1d9D2gVzCoFBLHcike7",
  "key14": "3LHChsgWZ7qTX63nCREsdBNUwGrD1fxsp9xJFb6Lxu5MJ57q4cFdJ3UUaRvH2KDL7ghbggo7Z6VwmntjXUP3kaTe",
  "key15": "5c2Tkgin9ms1gegqzKw92yzdWfJjPkK3NSFWQt4EPhq3rNFnbaQZjrjbgyAvNDu9pXEqFPR7BBoeAGhA1QY19zKf",
  "key16": "5bPFQYj1BKfT3aXNQYpnX6NQbvVDzMotBadc1TB6EfXkx1D41gVQ4tu15hLnUU9HFEk25dx9x3zxw7ZVjjDFS3f3",
  "key17": "UDZk6so8Bh5zra8HTnCBkPpjMVvHfmR3sMMZZnNZLZMvbKDFjuAdqkwvKDDZYy3ac1A2UipvjMHK8EMZE2AyQtr",
  "key18": "4YzL8bacPJPNfvSSGwvovozV17cGmXKREN2G327MWH1f9cnAA3RZMx73zFHnArnh9zRBXCUoQBSXrSc8pgdizb25",
  "key19": "hXdk1Nf2vvfcPfs66Lhw5faEf1vYYmzJMwhrTbvfBsFBTTE2Zc8GTApALGyGudx7nQiHxZKgLKmcnw1WrSyzjma",
  "key20": "5NBK76CXBcu9a6xHGERFHHoWkFtTYJ6wcb4fbVBvC8cH6gFVaaK2aBotTeBMu16jRCPC3iXdoRMftsm3GjQayJp1",
  "key21": "3HmeHd6B2Cqk4ZTEbVagw2CjRTKcYEF4LicmbXrEDB1VSD3kTszAwdAA57G7Zs5Gz8uHqM24fdzGR2JuSBtp5MSX",
  "key22": "3gG4LTrdpJJEmiec2J9tSrv1H8f9H4ywWPQkguS2VzNiSCTvqU2J2W2YNhpg7K3v9HGKmmDDSJ9mnC86mWbvdbMA",
  "key23": "5q2mcbPadNZ34HCpSiCdZ69Z8NeXxzfHrQCZFvTdqSnGVe8nmrQtyEwzLUzU7mhkazX2ntxuSVnaGX432SfuzvUk",
  "key24": "5qHM6yKbW47J7XnzAvJC8pNSX7GzgM6cU5gAHeozBVSSJGEnTyLnDCL5i2WaTLJbRt7dxorva1hupdhhEygfcFGq",
  "key25": "34Jft4KmM4e8pQ8RwYSuHC1VUAsEZMc4XjDPNmG5e24wL1BgX2M1ioGEWbgAkMz3BoRnAGWXEZCE9vioPWZMxRSZ",
  "key26": "4y6F46oYn3C4bBdWekysQ291bMv2ZmVr1tbnJfpcEpyvJdhTvBX1GCeqYZiymGisbjixgFhU5jq1i96RmSYFTsdB",
  "key27": "2sVNazPPQSjRJFdUgq55R1UJbxjSNPe5eTWWnsxzgGbjQAGoT2iRmVFStWVCNn6eizvh6GruQrBEntdcksrAmLAn",
  "key28": "4wp68415iB31iTK9Gm68Xvro4bzGev4KQ5ZgfRmkmbQw22M1RWjQo1P1rVW7KmEY37iKrbWgbSGSgeaWKWifCeQK",
  "key29": "5ZfRGRaFj6V3J33UK9sHw6MzMkYj2AKPbbNqGaw18Dd3virWUhMfKw3zgoxL6YPi5qanWQcpEoGGPGtfqEjHveaZ",
  "key30": "3KQHBFdCmgBeFrUaZPNsoL3BVbFm9MhDZEjMYPEN8kdw8H1xeQxb5nbvUcvVByyN2rm5RzVu3u1iKC5dUwEojz2X",
  "key31": "2bhEYLcKSTSSTgLTgVg7yaPNwSE6Ct2ipxRAvWYiHgV8MfDBVjfnu35wHima61TSVVsL4PW751KagA37GCDYePcx",
  "key32": "4TZJHaTyq9g1LWafyakyc2KfgjcQALB6H83fX6tq413s6gAM3LpVNMnesBJBt8gnH1Ebaogx1bQ73ReLGHqGrQAj",
  "key33": "5bSTA2RQqP5yPzibhoPZPKjsYZeD4RYWZAAsQQw3fQqUnA25sEXfr3TAaYiKsD5CoEatD73DzfAjAPz8XTJEXdur",
  "key34": "26rd6kLL3UKqVRwUhFD2GpigA9fpWseuuaEeDKiUVLZRAQXD8VETBVSp4XZXHLxovySGUxdtRWc65q7SragWqZ7Y",
  "key35": "3w6mfwjsw6giWKezcMz8W5wUSZvwWgQasQb4wVttLFVQk45Gsj7HnsxNPaeLtKhaYSJDve51UEW4oJsrajRCpSjs",
  "key36": "4YVPw4DzaZNdQnbAX5oVABkQbyxWzMZEqXfm2f6TknF2Cuhzz8Rf5aqQh8MK3mm49AJ6eCHvN4u3xNPx6uyRUJuf",
  "key37": "4fVuvdjwWMswSpvvgTVtnTTqchyQEzEcUU11Go5HWEsU1BYvFYV4tcwtsDkz5yegDBYn1tbwJqmCviLQ6m9Z3wGe",
  "key38": "2FNwBd5S6gnEqMAvpsrcJ66HetsNPUQAx76BZskJPSmY8cvmNPDju9E24LL6sVFXswKPDjaFSYFaHB8yNZaHkcaq",
  "key39": "2YJGedWNsYWLzWapXuQwPbc1ehcmEhu7dF22eoDvgUEWvmJezLwyDW2nXerrx279HVkCDD4GAhQMAZEisaCnCjMq",
  "key40": "MWwfwaJDLyVcX6Fn5bJnLTQEk1afv1hRT1DAai6hCmkgyh2LpAqqnowqFEBQ9YQC2ZXDUJzQ5EjkXzAoWsniokE",
  "key41": "4evgXeYmVkk9jrQirR4b7b7wfzvcZZQQ7tbxM3AmsRBdp58m7LmriTmxzrX7uN2jtdxctV3Mj4t8WHgucdqZbLP5"
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
