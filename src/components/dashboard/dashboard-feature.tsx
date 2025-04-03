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
    "5Wh5NBUnwoJHb5egvv57zJ8xQvj6HwPWfZQEbrAZf6yhLo5Ju4qyiDPJ9GucrVTiMz4Av71vCEqX4KCR35YrsvYT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tmd9X6LnuiwmvA4bnUNwKsQDikciBXigsp5z4vQvvCURSWhuAtCB5MaEwf1WDc1avnow3cmHBT3TzkEoT8UhRfJ",
  "key1": "3VmZfGogYPdyeuiyr79ZFmuoMAPpqEJVHp9AyZyaGvp1cswah3feeoqrvHZcjt6rx1KN1SfqcNT1d8KYpkEV4d4h",
  "key2": "5kxKehgW2M4eaK22KaYJ6XgX7NAN5zWATZv4qqbgEXrYWvMaP7htdHQA2nVEoaepjV2JkwrxLdaWuMD1KbLoBJAz",
  "key3": "2fvSCXdW33qZ6wibwGrdDaoFbFeHp2yg8Y4AzXpA7MNhP2Dkf9dWb8jAxjmckbNNnSVukjWH6Ni6b9Hz4yprVBDB",
  "key4": "2ssZpk62HXyiDopQtz9McpQw6vwBaawJuPFNEe7tLuxHhgC8MTXcipdKxpiNju5xdGwT7rWtTCzp96qaya1Aws4F",
  "key5": "5BBHCtdk2gSYfPqsCfykMD8AEwmqo6TgbjptgVts5DJmpTYVjw8TbaUVNkiH67BgTZYnBR5rVDxAk8SFRchiqYXR",
  "key6": "2gDAj2cjHHixyQbYB8AiH4o9mASfWgdS24xumJe5SqYsR6MTLxBjaMKLwRk6rQ3FqCCgAuL59JNhFngoPuhiYEo3",
  "key7": "3gKaXbyAm22XfisQcbViKYcKjcgvoTQ5YC3GD9AbfbzkMds4XLn7DDEdv9oFoMg5QgWZWXcsySW74zP6ZHiUky8h",
  "key8": "3PDyLuXsdeV5i57XnasmYQRVG7D6NFhXTB7dz2cR7bbsBVoGUNBqQhKrEfbM6KKT51aPpmWmwoCxJHBGhpQxpANC",
  "key9": "5MBpc3azVVmUhwA4M3fzcunArid7g4EXGjEKkM6Neo3tViRwCY4Djfho5mCCcCeE4MkkQFL2EwCW6LLhe28Jmd1n",
  "key10": "GKfGJFdPanBcHZUKNfyGfKiwFeYdT5QW7RTjKvP1LUUbGfkYmBKn1rS6Z6pFQqGah2rzPnimJqCQvxMwowGasMx",
  "key11": "5QR6mpHj3qx2zd6Fvx6hLbK5Xkq4spejNJCojqHHCdtaovoP5nJosHGfoAsDfd5iwM4yBcvBmj9sZ9Vm63yr84HQ",
  "key12": "2xFedv4mtA61NNQGTm6ixCggUvksUH14NzYYLSWBRiQMUQHd4FtC2MrCmmEMwaDsdLywNyXUYPTsws5DJbvkRcyN",
  "key13": "64u8LcttX4ALPtrXCq6MuJonkDzzchgBXh6vBpj1B2CufcedGnvVE5qG1cFSVt7YYMeenncLaEJw6e3Ep2C5ezuv",
  "key14": "5UN8uGqRDPDuapdpbYfiuFcA3av7Yabhejs7ihKEDRh4Se2UNfrUJSbijzBtYb5Vt4MKc3oXMET3WYCFAZ9pnr9x",
  "key15": "EzJUCpCfEQxtqKgyzgKnz6UxUV2muxpMF8gtPi9TVNY7C4WX5GeHWPwquXBad4SviTm6W23puVKt3ahnXDUhctH",
  "key16": "3QNxm15erBx2qTpRywHRQ7AiRxRAcUvm2EXBae8crY5FKn13qvYjMm1jnSAX2d7MgSkR9mwFeXJAXa1f7XjT76ZA",
  "key17": "56JBndEvJdUJrGhSBKvzryKgrMcAVp5k43NRW6FLB8jxteCw4vC1QxTyXc3odAtW9MuBz3fdiAnoPVgnx1LMWZws",
  "key18": "4seH6e7cdVyNgBgXjHHjNS3AjzPrqT61NqmT4tPw7KnzcorqDeCbdksJ72df4wDg9bY9nArpuerZRPohEwC6iuvz",
  "key19": "2x58wgU1kd3J9twR8mSoU2JzPhVioKcrhpntsoNZiRcdhDSuTok5djSrrNv1RCqEjqvM3U1TD4AbSqQ6uRU8YNr6",
  "key20": "gH4549ozdRGWMLSWgQY1QZj1LU7Dzc1kvmznKaVLVRwNejGacbqBrtM4dM5t1DNRBAxaPQegFTWuRQExmrCsAX4",
  "key21": "5u3vt95PH1f9sUn8tJPvbznTdSFuV4AomMuNy8oZ5Mm9waytWJqeqnjH64bJRVYFjnFK5W7owqv6ZNfheHHZHUxz",
  "key22": "47cQR9Dn6SyHMJ2a5tFySM4KVAggh5x7G3ZFjz4W2saqzGGkFi86MHZsjC7Li54jHWTawzyusRTp3XzJ7rC8G6Mt",
  "key23": "s63oqqLqs5pk3ytgpivs4RswdYg1nmgybm4nyudC8Eda6yEHPUxwgrupK9uPjsB3K5haYdybRWYyZj5vSe96tu7",
  "key24": "4LRPZ26wwUxyufZYZGZPHrGYgqxoaUrbgYYM7mrfZ2oaP7wumq1uFWwD6ad46MUKcde1L7gs9WPijPQ4Y2Hh9E3Z",
  "key25": "3y4tND9x57oaPwZuZFnqCWHaSxTJ8dV8P4CfwPsg4ATSwm7RowdDd8xunP5wZabxYAo5yv7CrxCz1nwS4GA3uYED",
  "key26": "5ftkZoU2MYTNcTx89xdarPXL8eQg8KGBYmtMDWRyPANsaFEmznYxeZsR6GyMZsKc2CmaonGhLpKBbpK9ECLfTU6M",
  "key27": "5ey6TwzXwyr9BBsaL9LkhVZtkxVQ2jcW3n6BXZT1DXhKZx2pExqmuMaos8DADiHt53Bpd3cGFo52tw5ee8oVY44E",
  "key28": "5Tn92FCGC7xpZ4k4pGPYNJmn1Y2qY7v1R5Qwu5EQHeenGFaRx8t3MR6EkycmZ92Fwh4p9Jfg6tJHw2GAQFkDrRUW",
  "key29": "54vB4SnuNpWLPavqPPAJ3jpqRVQHrsGjDBtfHb4Wz4oiMLubMVmeMqf7rc1CYpTFu2P1K1PvuGLSRehLyYp789xx",
  "key30": "4tUYYcaRzrmHsDmKMi5p25R8e2m5aEi8iV5psfqW9YjZp37CWZQEVJ5WeR8XMnGv6euw87B56Tg7VF229LMWM1oX",
  "key31": "2WkU9eg9edUdMyadFfRcfrmTXNVTgxZwuaA7n7Z8rbeYRfFB62kfmBJEhF9pn8Vz5MJF4g4BYAngPmpEWMWuKg1q",
  "key32": "4wna4c57P7hcKtEs77DuHVhyTsxe6buE1MpUoGnHXtt9eNQcQbbLPpAHmcq9wzRGyanxBQp9X4sG5rSSqjoerrpg",
  "key33": "43UzLgGDUXJAAnjnd878CM9ko89SbK1qiysV8s54AXNtiK1va9kV1844v4Yz9zqsByPV26Nz7ChhvuL47xrFY2mg",
  "key34": "4qwiCqf3KWeBcu5CdFQPq5VLc5KZPp1DPGVfV7GqWGPb7kx5HygPyg3bJBvNpK6Q2dYNTXBSGUT1dwcna1cYfkt8",
  "key35": "328w7ZZq3gmnLSS6B7S4NjRef7n5FC5jMTPa1LSwPQwPZs5ouXUsKBBfEnSczoEa1rZ1RnaUmCT2wefYXJnwJ3Md",
  "key36": "CTyNc9G5ACeV6qQsKRXTBPTrf4EvAKgYtjTDdJCPC6VWUiWniRnVxQGuT6eKw3GURkGiL4Y61wdAQh8i4os91W2"
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
