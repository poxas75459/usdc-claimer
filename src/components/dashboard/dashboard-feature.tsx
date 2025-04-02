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
    "5JoC9dzAe9R93dFbgNhqaZbh6VuJ3154BBVqMAWkZhNw5h788mDnq8zi8s87gacqV2BCDnevEkkfUMm4oWKv7a9u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R95RHGwZFBe89vcJzFywibKBmbVKxVNsKdzw3yyUUD3etUK3MZjzPwF8A5sDFUoUfZebFh6to88Hssc9f33hKwB",
  "key1": "3eT36QEAMtZ5sFXZ4DfAtwgrz9ttAPinRsrYBUJNhpuuW6GVq4oeXroforunHVxMVmggt4ZZ9hv97FQYpe21G9GP",
  "key2": "2hHt2v8bUQZQEogvBUMwZ4v41Cy6YLrJ8B1N2xpy8K5cL1oCB4HDMy5i9HbjQk8xwSH4zbPYwFgFjo6dBcA9dU4p",
  "key3": "5p2tDUdDWtkn4QiUhHTJQKwHPwzdj9Dd2upaJ1rQA83tR8tydUj6GgNZVUbNHhLNedCeq5VsFRDZU2ibKQ1o4ti4",
  "key4": "5uEjZd82VZa1rRoMAGuMQBbTA1vTLFwBFhnXVnpZwTr7PEg6eJzXLsXMsinf7hXRzP5rZVR81DvVSVAoavou4nWY",
  "key5": "4scFRK5KjcxfJrRiew5YLGkvKqro3bBYuUxPSZ83r8vqkjbE6hyfSjYV6QKqyFf7jPaw7tGzqqhjJquQZbT5q5HM",
  "key6": "29bQQjYnNSNfQ6tcWq6XJh22MazSmwemqrFwMR7SPeraoyCdLBHUr4VAxXEUY1CoZ7VLwDjab2TzqvMM5nHRLZ4z",
  "key7": "2q78S99D1G5fANgEbwgezhfXNnsK5a4KQsZkDMP3JSBGZRDRmubiWMdJZi1P4L5mPLXZ3z9gYv8cr6LKVawcHX94",
  "key8": "36o1RNRpV5wdGqM5czYUny16KKj4b9VvKrD3gFRFhBPZt1hPWLBQ3mbuT1djQaF4Fn38zQeFnAD6XyCuzFJbzh2Z",
  "key9": "3AMQG1zbLR7Ht6nhrgWJg2m7KmZdd9VpKUx3T4yk81HciqeSc5PRFnSMho5Ciio8gguyvJ6egb36R4KVBdiBBCbH",
  "key10": "R81ppGWnRwKfgV89eXw7gwVTFTSxj9GST37NTqtbByNjGwyutwrqzwnJAkGM1b8BXosiZaJDvQPQeRBPSckEEhg",
  "key11": "2Fuq9wPhMCnk2XdWNFs5bsofigm7F7MzKKARTBYLKg14C8nhurT4f4xYrnmgC2id3yPU1yfs2xpwn1UZrr2rQWTV",
  "key12": "3sruDBXW4n8JRFASLAsb2yizwZmWmfDjD3NSE2DGF4vDffT82bEMCSKaN3YUA8DTZ3Nk7Z6eEma86rJv7Jr5TyCe",
  "key13": "575gbuTDroD4UgfT3DWdx7dnGbaZatM8NuaYtgV8hUmxhpvkaefdX8dgEZ6dCf812gpavVqSbPrYdbocU9ojjr5N",
  "key14": "yk6VW2uufzRz1bPVJxAth8eu78xoETebLgy4ezSEbPSDzLF3VR2aj5s8gBtdUZAUL5LCdb2bdk3fMpxbtssmKis",
  "key15": "38ffe69xF74hPSwveCaVmeeZzBYsnnhrQBtTHa4maZHjFUucPuXPQWdHXq3fkDtSka35Jbk1nknp32DSPrJwMEKj",
  "key16": "RgN3DtoPCAF7ctB7Lq8USWKbt9nWxv3S2nCZxEob2dZLGYcBxEoSR3yHb1PJouc558aqbifK1ohQZ3FRytaVZTU",
  "key17": "pehcxWBAMeWqAfnMPxJzLpr75Vds5CBAPq8mQP8nUM1umoZvL2YLP3xjzkaVJvh36xRGc68PE9bkaYmjCu4DPzo",
  "key18": "4s2gVR5Mtg8b23KbrYxNHfxdAnRp8X11gG19jmNt4KhDVSCGz4FYGks8wuP2bQCBEmB6SQUWhGw4dXP1jSDQDRSt",
  "key19": "xQfciuXmWaZJWz6n2u8D5zpXEchLDJWKbowhAXjw1JSi4ejRF1Zz6q7Aemr8DmNCvN1dujXfMov9VqjU6VSPVEp",
  "key20": "3i1t69xS7MK4EB4PGWVq4dMkSezCGumzTqTddpe2czYHkgaUKMoTVFbdJpUKNZe4tYbhPY28MjFWZKjPoJRtswzH",
  "key21": "3GNNteVyz1AFEHeeEsNdPHRyiuA3ZHFAhDym3WhnU1M6YrsBzHM7tX8odB6eY9BLV7LESiiKT1MjrqmNmiLvykEc",
  "key22": "5yXzMXYrsq34uNpmJgadvdK2kTtHMscSWQQNtdVFoAoRVCMU6faeyezEim7DhqtULKPTK8wMW4fwPpBZyWS2HE2P",
  "key23": "cb3aCLBUsufebzBtA7v4dbGLhgkD8QzqNWXest9ZxSX2H4Fg1BejG3Gjk5nbQCEQ9t14PJWFS6fz3QZgGhZQ1ow",
  "key24": "yKfDVvHtssjdrtvrac4N8Dm4jh2fq3j2tGciaeQKv4oAJB3d6CVoQY8p4APjg9NWqjzD6xCQkPeFiZTgi53h6zz",
  "key25": "3xvZX26ZRpemDUPJNSsKwWct3nKy1hfpCW9TqeGKZkHg5oFADhZwuYUG4RHtGAND4PBytQDcCkVGCfm7tDPULL5s",
  "key26": "4zhrFXFDLKZnUioNYqxCYP2q4nyoJ6XTdHnXWh2243rbPXEu7g8rjyZ4S3DYMikQVh1o1WcLvb1Mzr8KCRgjtoqb",
  "key27": "3jroPqD42UNrrMA1q71zXPzKLwMmraHTw3frX4cdULkpqvTaKzzxU9jtbHfzN3GQY8kvJp8jf4i8dmiiRucBP1Bg",
  "key28": "5feejDBoJTKqsfNTdkFg886Ag5Ss3yctP4gUBrU6TEAqKEGZjWSfrywn5DH6W6arkTCrLHMxapZ3U3BUyi8icdXn",
  "key29": "2RNyrKf8jbZRKZypYeDgpLVcPFLdA4T3bnUd5Nj9SuSYKPuBnVXjNBa5dBuBsBnu4WYWG1Wm6yAXyh9HebcMDYpJ",
  "key30": "3HsESsgQAEZVgsYrBcfojQkiU94CCvHf5g5xiL82d84rD9cgFvufSWnvoXkHUvsoutTkMGnzazRoxumBEujXm766",
  "key31": "4bo9hfcjucf6K2tvRmBAG6STnsaFLHemxYHUFbjyaEmRaY3jayFp5mMgZEVWj7Nn4t3hJgGCAUe3EMen5QTdYWpe"
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
