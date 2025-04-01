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
    "3cyHJp5ztFQ8p6YwtURiCDHS7WyPJD6USzuv67b6WtkDk6k6MxMfK6ctCBjBhEtYwVdiBGRHrSG6ZQ9CXuGDxGLp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZtkKdF65QHbZ8A9LDVTdaGXwQUV7i737E3FRAZtZusRTxzZpFhtPE55tnu1j7usRaafnW2Kt1KtrF4VuXpwPKpy",
  "key1": "4jTaVmoXAaCJKWjmTb3JQ1CN7WtFFt4GyEd7cUetq6yhSUnCZgCLD5BAjPhvuezABNneaihN92yNCVkLQjWPTVXH",
  "key2": "5kDofBv9h1xePLP2nVkbTgsDPRAtzaMbsmGFa9B295QGtX4qrkw7gN2RbSgbeqwcdXgcJub2UJsggmaZ7YCgbnbU",
  "key3": "6YJN7M2rsQeSvni1uaLysVE2qZFTMppdeRCbt61ZfedmQYqauZ11U4oF7M4bPDSg23wvvHeL2TUqhZPkqdEjRk7",
  "key4": "3cN4Kng8qx4hPecgFgFQbpYrkXGfPUBSCbDTY2HQQuqMMujrZEjHo6mNAVhUmv5Gi6ZRfWcuYDVnw8WcjKBEVL2y",
  "key5": "2zs7owJscjJvhS4v1xinhWq6XpKp3KxpMAEn8DTZsV3bpfqnFQanc8G3AyZUaxWzTFBjV7bAcepmcEwsk5PR5orj",
  "key6": "4Qxqy7bYgS1DBytnRRUrSZZTdoMR1yfkJ1eFGdik2u7XVVvQqX76aguzG5arhRS7ebdX4gUu5b38fbAqy8YA3vhR",
  "key7": "7LopkMFR1oAqi7AUFxzmg1rW4F1QrN4heqrhCgK2UAe5oRJqzHPmeeo4Sp1k2jkQmzqC4VSReNASgBidX227zKj",
  "key8": "3voiD2iAE346vHQRh1jPTUUh6EotWYhDN9RLdbC9DVyoeZxrgaHiezwBfYGHvFrZvbemQMkpFDzdmLGW1CLhuCCD",
  "key9": "5mdVzj7PS328c9N9uW1RXWfpfYRgRyyVqxVnmwR4UVtjgGqR84FWM67DdbaYg6pRfeUDcB9gVwS3BxGcrMoHUfje",
  "key10": "DLxxUpApitqmFApzfcFDJouyNgWQgUUJzdDtFFtXHi1sUetVquEPZSY56vASV5PfjRYvdG8hX78dq3T1nbWvmQb",
  "key11": "545hMRzWjxD3dARyr71PWYxWmwn6WhCMAEaksPBqFGYZmQFRdh7bhWWaCDgwTsupwmvEUQufpbTnPVym69K8vMyu",
  "key12": "33UU7KugYoqJxoxkb9NXk1CisSozaatBYWhTLbNWpfqH9e4RrVKT7B7Xghx4h329DUtLonoXzRGFTCHprrwWLToW",
  "key13": "5DN8dujyk6Ufv9tBNDuzeV5UE1C8GE47x1BRdaqqGzCYvtW953muXsMdHCubxqgJAZxTvDRNwcFEtWPTa9v7Pz3w",
  "key14": "4dVHNhWZKqR6Ni5HuZGLfe4B3DmK2R93rgXu2L7Uk1bR2mgPYtievT9EzNyk47QqTfEGbdN2wEBmV9eiRMdG9YSF",
  "key15": "5N7fB6BbTPVbBsaLmjwtuBW4q1CfDVLBGWo4MCuP7cYb9ZA1BAbzs6dwfosaAkxJmT3prvCqEYqrZdFpkVquRbcS",
  "key16": "3YEDh9S8p7pmvMvoCocvrVc3bRR2HDfTbn25NxkZz43VXXEpd9Ufbhrf7qpeWpfaRSXgscDqSsKM34wNsEW419Sx",
  "key17": "4imTVe6FSEZ1PXTixfJTJYzyW93UeADM6Cu4Wr6rWSwH8xroVeZ1joR2cBaw13VxFss27ZnDGyooeVJxxst1GKgY",
  "key18": "2vMTKRNy8jEsxYxEJxrVi1RU5FiswrdUosBxH322ci2hCDyECAdyVNyJeDKc9JK61x2d6uXBzf3T5UPsiyPFCbb4",
  "key19": "2GAT7wiboE6boBoCbtNoAxWeHKhaYAAbutN5keAiQSDZUdkV9isytE7urxJYgCZiKEsHcyyF3T5eddpAKhLwmXT",
  "key20": "5WF2b1tuLZzSUwmn1nwaJYEwPq7gfUBU665M7M9ZDH8FBEYs165JXL8DzTETqr71sAmc58gtqg8EUh4rfUUgQ7f",
  "key21": "3Lws6aUSdZrgF9gGpSajDRN473v86ttttiawD215LSDpZZ3QVpnpLTfFD53KCcWjNtPrmMQvESPb3uQ5HfmF57mY",
  "key22": "XSdttHrZ4UzSYJLdn4YWfYN2RsgGNwJBpyvowFkcjjupv4DoAVRAFXmuD3FdVUMSQMTiK47qKdk8Xp8Bti3XzTd",
  "key23": "5F4ReZVroiZcFTssFo4HD7pKVA8bEyrSgDqM2U4hRM6xUpQt6MVu2M3V5MVrvKHQnUk58J2zqrJobb8XwhAcNqU5",
  "key24": "2frtNCrpzRSrQGjuwcMtD5rbPSKNTQbGpzEPhBpEjDewcm6oXhYrWL8bqFPf6vAuih214xSpS74EPid5UKi9JiDC",
  "key25": "66jNvJAkN3A1hnnTczputsmB2UHxqdhNy2YFWbYAZyzJ4UF4JaEQF3qNGqFJCTLsoURwg5SoLvCzVWRQhB6y6QMQ",
  "key26": "Y74hwWcGEGv1WEniwy8doU6RAwhYF8jzrPbZmnbxeDz8NShbsYRBz1ocUY7xvJLo7uH2nM3D6z4eHeo2xvEwDzp",
  "key27": "4wHk2s7FjDqJ7QGBeztqZc7puto5sp9TtZdo8iYaVDCHKzaQaDazt55PsXjUdjpCgDzojLFhk6nes1wZtHYZYkWU",
  "key28": "5mfJazSvPR4VmhzvPKxrVdfvZYpSTPn3V2G1c3cDUVtH25mG5KwwPf79gLN4AW2uwTHdDenG8EnNvM8NvFYpxvAK",
  "key29": "2JrH9cfyXoNujHE21hoCAxviwYdLbWtC41JQ6tpYjscBihmUdSdMg4hLjzxrFLjRAop87JC3Q5JjeWg9nLFoaJU9",
  "key30": "grkxFfVjQPcehPrB8rCTsoYQXEzFANqjbEkPiFPGx972J3ndvKXYFZpHDcNVYmUu1X6QbvmjwNUNsUCfqR3QcwR",
  "key31": "YJKnFRptr9BmA86XwobYSGKL9ADC7571NN7oy7usgrWyqy3PudSoSLZu9C26nmX1vCPoTc8x5zBNmgCqD6P6fVK",
  "key32": "3B9jV8GRBkY3qR7wX32QfzuDDKXwcyxaZLuQm9NgnEdtM56cmbhiT4pmoqW1qDNAMTgEPDM5ri7KxT2JbW52PAVi",
  "key33": "3Ue1m63E7MkQcbHDXcR2o8NUvmFteUsuwTb5FFfzBX7mz76GqyDtyVkjcCe7C6pAVmNQmNtegZ89HvLhgmNwLXsY",
  "key34": "5ErMEKBtGYtmjp7X3etwe31J4orYALUhfgL2JoyguvD65QduzJ72X9aUfyHUriKKDswZpKxXehmPzuoYKQjR4n6e",
  "key35": "2kcaWwdy3cKCYMKZvYikyWW74Tk4YkXb7wx25hd3jRF3TVRrxfgZdaijfr1P3hbDJrDjRSCcx79YVNVsKtVZwCAs",
  "key36": "xwfFxwdKprSoXc28AnLzsNZo9bm1nAJnQrQHJMhaRf987sKDCZj52baJhdjQpgrFdAKtpuHwAuSbhdWMeahs2ok",
  "key37": "243VAnbcA6U9ezcx4wyzepaYPQnLYtsJH4TU365NiPyEdsr7J12SxMwNMP3PfjXCC4sPB1rbje6hMwYo9sStdAUp",
  "key38": "4TqAo6j35vDKe7kBRchsADXY6vGK7Ab8XRCpmJ9c4Ye3ii76h5purt4W6NcZzMfTjyT2WkCvtCXxcMkcctUmHvs9",
  "key39": "4WjUJGEjxTk2kEERQ5SSEwobZhRwKazmzPvZtwq5vpexuKsTsXNvFD3LYwBcHueqioW7augvPGaZitiN6CjPfKdN",
  "key40": "4ZZm8wzUqZW3w39GRP3r2uFVaGp3AJAoYabBsmRLoYzPHGMpRJviSLrVoSkt574DoFCAenzQ948atvnWDea63ti6",
  "key41": "5MmbP57Zm9SewkxDkAjP86i4CtiE2FMEji1kCCv45h1TxvdhFCuVqwFLiUoKpkaaGxkuARb8VSbBF7Q9GYQMDnrt",
  "key42": "5hRsBHUvRoQMXy368hJanAwSNavs1soH3ieJ81HbhpoyYyqV7LtrisL4BE7vNnEGS7myhqippXm9kBkZDcnUUtYA",
  "key43": "4zkB82WVVsKeexpTiEgatek92qmQuPZhJLyLqsu3beR8vYA3KG6T24ymC46srh9ZgV4qmQXFeAUCiDH4eQcy2CEz",
  "key44": "5NpTvZ9Ru6sUqnDtvebwLCnG7MnzM4VCmkCDeqeUrLGf5QM4AXXPoEPrMwCeF9B2YQ5YGfaXmqFagM5224dmj97o",
  "key45": "56pkiCETFgX6q1PAceWmYmqZX4ZuDy6eEzpPkbqsL6bH3uTUzgArTMKCGTrWsiPwEhb1WaNmsPHSRRRPUsqdSjtN"
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
