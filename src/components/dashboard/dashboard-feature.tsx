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
    "4B7rNWLCSLWATJLiSHKVAzp85xkkjaSUpdBAG6SvxJa4CGPMLEy87dB8n7vbXQBtJjVLewDDUQMEAYH2ffeUdce7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vp7x7iZch7zarbzmQtRMUeS4bUjqCu8PNWxxRfsuU5m5GmeHCGRdXKhtxShJSpFgdKKJUNDTyMfzMQqaN7a6gei",
  "key1": "5zgEkR3riJfazezQGm4PnLtLxGqfeo56rP4MCNVxM1WcNhq69WWvYRqnj77WAMZEw1v78Y1C5V9hWaXLTsW5U7F4",
  "key2": "ESiHJZRFzHvtXTiZ2TeLhfLRLDTZdpcU4m3wcsgogYWomHmrSDFNrhCNvjSTb82S9FBXQcwHussQr6QiqPasijc",
  "key3": "3YxqfLEHvnDfAUpNLByKQCF9KvxKLTKfrFLgsfiacxvhuZHK9Wy5E81to5G7cgMTxTGSb7XfkQcaADPNTMVdJR6A",
  "key4": "2pZDwt41ubQNMqq2uhXE99zLkwXDve4kxuRddmGWaHzfBbEg5g3us1QFM4xh1EFkZcLVPDLtFrBnEFBheufQqAfP",
  "key5": "FzvTi1HN73sPeDqiCrTuj1vu8u6rUaC66LtWrMWRhvQ5WTdkG4CW3mKFwqVMchA1hYmvUFQMTC9wU85mdbwWKmC",
  "key6": "66XnQmjhQr9Bt3KPUHKEk8MAGrZKdktvcSUnWAc6XsAaP2TF8jeMZn66DbaDrWWnLi6vNdQSmD6fn9ZdZdt6vfnE",
  "key7": "3uiYCGzRz6gag7iTDCgqDo9W1agGXcHvtydTJQWCiDq5ZMZzR2n5RjeZb3T96jdSe3rxgJtWb63TiNTxEJRm9pz5",
  "key8": "2HiGXrLsPfyDYmZ6fPGPxdNnDmuKwsjvVdRhRJ11aMsKd1u8zwQfmL8nFaK5UCGTqAiH8Sx5VQch6BY7ZSUyRs3N",
  "key9": "5kceaZrnfv7448JaEemDTCLxsb9JpF7VC1FKQP2vbs9NooqvHrnYk5Z2xVNoNssG1vRdTuMBAj9x5XXgCeXgGXGq",
  "key10": "4YXLThvW33jDaqdvMtz6cJJ7bQsBjccwsMBhZyuNQN44o9MTmg5QnbsAgpouyxhQ58Yg2WTHgHFUxVjwVVVorRK8",
  "key11": "4G92JadZqZMLsCTVaAoNgNKRLb6hKH1Mi5gwzopt4TEH6cT9mPA73rVmyHf3Wn6kRNfMfCHrgWa4o33YyApo8eF8",
  "key12": "65z8615KyHMJj7byuFRQDHMkZTrB7Lph7nLkTqX41WufeMfWEEm1HZfsaRxTBjdRs9JufHFjRduyEMuJUbMpyxmi",
  "key13": "5zfA43drqxKinfQnRgtYEw8pYg1cqZnhfTohvewAx7PJpxnRnV3ZBqvVZcUUyrRmmLYm8K7ZJ24g1weHCAJ2KbHD",
  "key14": "eXcwA6GYgArY7Km5wBDeZ6FHw9ogKhpBhXLRSKgoYxvSjHBbECM7tApYxzsusFYpHpjDA4ZJnPA6UgGcSvPXoXk",
  "key15": "3pqgsFDYwy2NDcb9sabfj2ut7mhdJKJazBQK4wePZQMaU9PVXWnyZtRtKe7eKmRVEmddeevw7z73qxmbaY9j944w",
  "key16": "d4YX3RbruxwmEvjQmFHJYqkZZ2usJ3cyxjZVHj7zy223DJZdWtMuyoAXJseVpkqZDVa3ahupaxSnrYhJ8uybcUm",
  "key17": "5Cs4Ttwt5mu3o5oCde9msJDBcSyjXffCP9r4W8pwRTJznrTVkzUGKTaWdL5z1uG779yb9zGAoLXy6XvFnZmGX912",
  "key18": "5oBTarweSiaeZzSQqfDiV3SbkTw5SfYjf7qxJnWiBWCMDpMwwR7RM9SVjHa2nfdgfPneYBpyTyUzHAsKtpZFYa3P",
  "key19": "61bsnms1qTCpxNc694oitboweibCWk6uLFfQjfAC1bLKndu5EJgYiFoSjfgeY1ztabsV9oEvnCaxmk52Yf7ASqG4",
  "key20": "2SswJLde6LavjzsoTtELQguFdTX99gd9dF3eVYeqdS5vTm2P8Jqxmxs2jw3cmc64SCH79F9BCm32M9ZRTLdNb7gq",
  "key21": "4BpV34tTeMQwKJPZGobnkLq5EwEniiJJnsm7w5kXvjBHHPv9jB5PuwYTE71PEnCxo2PGoNY4jg8QVEv9A9F3zT77",
  "key22": "43sQtVBiAM2gzacps12czpqAR3XrShh37yiw2AZChkHVV4nj3EYNJN62sN4MpUcFu8RAMe7HLHQEAmUbEY5B82yx",
  "key23": "L9PrFdjmYELoY7s3ng9hg5shRxUEwz7NnC9aCxjgE4fRq1ynvYDZMTmQCrtZungXJ2QZ1WVJyVuLfb6acEVaG7N",
  "key24": "TNnFn5ugH3S5CxJMPXveyqwwJC1uukrNYPPtuQ9GUPTJ85cgPtm7eEbShV91kgx8PQENgKzw2fUpHYaxHgzo1gd",
  "key25": "493oyvbM8fAzrbGxCNmYWRGZ5GwuCSKeXcPM39T9seVcfhZ3Hqcd1EusAUdULngsQZfEN2bL4fVBdz8vyBsYRhLk",
  "key26": "66j7YnXxt5T83MVfBJeytnqE4e6QQJEUp6mjwdy9e5kUofx1k88vVjFHqkXAiBfVnCCyM2h8gxsj3DC5kNseJJKq",
  "key27": "mFwcPTCassnkUfY2U1s5q8BsBfzRiSt3PwviXMvRgPE12NVnjxguu3dpZZpdqDxge5xGbCcjTk5rUCcJZQTXiM7",
  "key28": "3dafkjf5eyigAXFnrcezKwYy3ajV4B9QXprgbgJQWosR8QPwhueVgmLemVuLSFkEJYADywcjLJvN9c1ewW8ZAgnD",
  "key29": "4EKcCD3guzhjDKqq2PBRT8uH6krZiHQb44Vebb4zsynuTtvawd5yWqqnebAMfaeBYsaA6qyQrWiR4oJzFjjY1edR",
  "key30": "M9tw6dCL76CUMaJmdpZNeydHtV3HjtUs4LH7ybisHs7o9K3gCzjHPn5B999Wa9unJrq9xDr5HviJAcPZRntB67T",
  "key31": "UGjatCCFR5XTfrSRVE9Ba6Vb9wUzCompR4vYhAUdZDLtDvAFyXc8ruvz7LGunXBBPw4EzFBwV8k6SJD9vJe7qxz",
  "key32": "39inbzuZiBQ7V4eEHJ3GP8n8DaixynhX9F1qj4kp251wUmqrX76DXLh8d7jBYhY4vUA4f6FD1TNKJ2Aw2rddFWvK"
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
