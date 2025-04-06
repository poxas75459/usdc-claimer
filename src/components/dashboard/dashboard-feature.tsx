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
    "3YrQuGBP1m2sBfXbjui8ZbRgVUN4sSNXqegNTxy56Ezoa55phnmce6CYWo8TRP3FoctgJWa3JMZcFZCPvW81QKKk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MWMPGMaJnyKEmk6EuiqSMnC1cDJND3j8VqNvTA4WWehHz1R2Mto8acst1KC91b28X2mXuqBfUgxGRZpiAotczUg",
  "key1": "5w6dTg19PG3tijsAhRMMszH3XLXhkGPcY1Tcy8Ubs3e2ZX8UByeDY2ikkUhgWUykMQ6bdMRen4LprL67VBxQTiCB",
  "key2": "5QeHJwTkgqXeuU3VZGL7g6TKu1a6VFn155Bv3cKQhBiw9fDB69wKSNYL3EAHg6dZPyDvyAzPFfvcpeApcXF4HGoy",
  "key3": "4a7Mo7mqatuKrnKfDa6fJWfyAHVxpKEWttfDd1BM97BVjyKvrjqXytBGf8mKTan7dZpadGxEz2f72Cf8gKWNh3Rt",
  "key4": "5FDfxcrurtRjYdQ6a22T87SLRe9ndqTtBiNE2bGZdPBKiKYKqArzeHd26EdF2JXqE7jMi7t9sqVZDK6nYHFu4w5",
  "key5": "25FX5Rnbgt6QaL2jGf5eAcbS4sXR7nNhXKmcFcpbYFU7VXbcg7bxi12ynkwXU5oeWddGcMTDPBZN65WFhbgvnxcg",
  "key6": "2ZuSS3GE1gzYhisvLVAp2gRSF27bNWamXEgctz3aEyW9eqqskXUAgTzPPw9vEuKZjBfkwRwNKts3hjMqazWorrDu",
  "key7": "36Sj2AY3gqNE6aQDWZnJLKXmw4JggEfpDnnJG5N5zuQ3LRJvbaZNgzB1m2ZP5uPugYvnTaQ2wxtcz6ez5yWDNwCP",
  "key8": "3N6vtJEK9sRfk4mSjtjCGHrqZj5giCmNs5dgf5rhRfuPKkxVuBYDVU8c4x9gDhoJTBndWMJg23bna2zwEp756FVR",
  "key9": "4qFoC23vjX2eRHNDcFXip1wybpUTtQaBjDbwUSTwVmZJqvwoyk7yFDtZL6Y2kDKZxQsByUQ5hQ8aCTyEtpvPeoGn",
  "key10": "3LD7DgaAnesA4LMr9nPuwP8WsDHynj1GBVHyDHGxuQijUqHc8HNewso5GW9U4eGjRHc28rAfccowMi5ybvBSSzDT",
  "key11": "5q35pFNC6HE2knoy6cT6gxrt8SdqBqHrfh4BNZnHo9zdcu8m8SHSaUhwec9Y9yitKwGYVcHmRGHGawLsktsEVHCR",
  "key12": "32CUSRhHhH1Q5crkhNg3bwNjM4s4nCCWDNhtLjhZmH6dLStugBSVG5FiX6k5vyesm8W4UMbDnnounjC99rKrSw1w",
  "key13": "j3KSmnne6tDUhR9f4rpXV22FHy7ZcCDZX9PaqqiDW1MkSqLkRTkgf3Z9uNkw4mgfkiap3YJFWLrWUpFk2dDK5Q1",
  "key14": "27baQ9H65MnbAbCh49TKh17gEA9fPMB5Q8ZjNJ8n7xX3Z9F2MQ2e5GBnp29J3cmg6ofxcF2wWukgyvKPPAE6S9h5",
  "key15": "r3x1vtmBw1go66FTJ3rQyWWshrQXcJvCgqyKjmUHHzGmsYDUaVA3jv5wS8Uq9JX8r1D8GDPjXGax8MCyB5NtBRj",
  "key16": "FcFSrPtTDhRvBRvjNbtYKu7tQsjGB9Nv2pJQ9Hzo6EKofGtpcCdxQSn6YohwYmkDtgyVz7XuSEM89J7vWEPh5bF",
  "key17": "34kHbHkEZ16N3vgYE6T9BMaD4Fn4rKvsYTKZkXo5upohg7ZK9E8jzABVbY16VzpP5Q4ZeWq7KcM6u8vdj214ksUJ",
  "key18": "4Kw1YPk1TqMUkUAD8REuPiYMR19tCkE8qKJr8Nn9yohc9kxaG6hr67uYEwB6L5JGyRivArgNkB2rp1yHJgAofFB2",
  "key19": "5mGmNwxnj8pLApMQAxGKEioZZz5MVX38u5AK2Dcy5NWCaXvWCSDNYnHC2hRoewHUkjbg9TCpEL8pN1RSuWBGyeKp",
  "key20": "5eS1utu1zn1nV2rska44HDLRiTCdboEmfamTZV8pUVYnUac9RbtQPCo9CevmuvomqWqt8bswTtzpub36p339JLSE",
  "key21": "XEk7Z6o6WbWLZveADSB3YU43o8d4j8swNAHLP7VwSL2oHjPq1QJ1vUPok8EBXRnP7XqQRQMpgzUZ1c8VyHZodfx",
  "key22": "5ZkmD9JTkb39TPssPopzGX2YcUU5zYVkxMfxXuvNTs9eozw32yvKrXUYYFfL5jizbCy6YKnkmYgXWFRehE9x4ZY",
  "key23": "4WVaQb83FLYH8KB1DH9mcKP1XLHxjeSFjCpbAwYxgskHyqB55ATWWN166knWJ9iHdVdrTqZo1nv6DurVyxMnrhrM",
  "key24": "3HeD4mkhWRz4Ttrkcndt7dT48gAHyjLtFQGQ2qrXENMmiFB6JGMeQVKvgAK2nsusqSh5oHXc91EcfzMtMr7oXCAD",
  "key25": "2VNrMLXokJSqCJVmrVvdoYScLUJFx3RMK6sLwNzTx9WpG2SRZLBRFqqJ6HPwPUnDoCiPjX2uU7DHHTezFM68bSQG",
  "key26": "4YPjs9QQjtUiG9d1neBM4tdbfDrAJndK3Fb2jSTfMbiQjqHThe956HfZmj3tuYJzWiXhiKCyQd8wsNby2USs7jw6",
  "key27": "3PjXVo4T4WgGFPmAoNJhuEntZQM36PX899HLqSX8YJN4Pd74wehVwrmm8qW1D2GNTJpqRyHeeXEWcbDKCRFdehDS",
  "key28": "3HXfhfqDvam49FPnYZNH4sKmjYNos2Sjx5o1RRg1CHcrPLq9UyiKyNDBFATHRSSmutcXAHr7rSpjYXV8kz51V7QD",
  "key29": "3Ha6UYZpqsgTmsd9tNDwommtXjAyCjbr1GjajJAV56rZj7FcY5x3VqzfYwxDkphnNDaLH37J5m4uhF2xwQxw1eGG",
  "key30": "qeHMfhx9jdoNZzaJRk4LCZAeE1aBKiu1tXRHQMTd5pvW8DVNnhW3M7uVctVBeLGbAbukKoKynWSTupmJc96BMUH",
  "key31": "2sj35xE1jeEBJe6Njb8HbN5MT5zoBbX2SsuRqLg1X2JScb9LF1HzR7UzTtsXKZCvmWNRD6FWQmTGqZHoEPMN3Emd",
  "key32": "2CUykNbnQzZuGjkCQjkYMKCftUgZ5dgofQvteF4Vj3eofmhgivdPqSVZWh9KDTP2JvVvSYNCTYyEiy8FjgceAi3B",
  "key33": "2DkKt6ZX9PBRMgGNNYozr3kQYhQpxVupjk3uQdAUv7qk6UNf934NjJuDw6K2MtfveEgir5mY18RkVByWrHpPTj7u",
  "key34": "2M13YRoASsM5mTUZi1MjqvDCB6e1JhAwJCtB4B5DWDtq2NuxbgUSUmNTDqQv8ciJxFvsQ5cSSz7hTi8YEjrmqztg",
  "key35": "2v4WPWkT4HtZqr6wEdbpXq3YumyFZXciyMmSK9YH8VYzisbF9QvJEQ5hDDwtRWLJcrkNS7uQQ6nHHQ9nHLTDye2q",
  "key36": "2W2wgMDZJG2Ka3gMDZghXS59nMcfrXv67YpjKwuPxvozQBQzEtFdVt83wUZAi6DpHBehNAX2Fkt8Ep1cHeX5MnDv",
  "key37": "Hp1k1AejYrDMj42qq71G3qVApYT5wS7MdtmJzqcoyazrLPduJaFEB4gfUa7D5MsXZTkV9oQpGRM8waU4BbWRMU9",
  "key38": "4cQhinsCdNsr45omJwFU7wwMCrcxmuqvHTFWwz5dENWZwdPUUy8Y37MPyZuiEHqhGwncZ68KcMx44Dz8HbtjKY1o",
  "key39": "4UeUgmuuL1ucxyi6BM5T6Roftf5ZBT7FL4y9C1ETGfMiSJW9vky4DvHcYF4RhZB6EyCXDZCwNXx4e7WdpMzr9ebT"
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
