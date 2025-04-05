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
    "4bGnA78wFtVaePhbWt9f8CdskytjiDYyH52RwuD3CaV3wfKTyKsWoVpXaxueZvrMymfAGeXGdEMHt1qfQipxQ9SD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P4kh7Ue2wpQFcu7hoYrCiDyKLGUVrGJjexd8fYRETwAdLUPsafoaG7S2w7d6dEKSN66Zv9CY4nce7jqd2rPJxtz",
  "key1": "2DAUrxhENxpScPy8qdHiQ1f5awLm8CsRrgygXBKN5hQjsRWd6K4g49PWPKyDrMEhPmRweNEBqNa9YCV6zRqNbemC",
  "key2": "5WJ3GySmzAsPLuBYh6yZjYqQK86V2T8hChNChoV3qD3vXysAJAKfhzEGTQi4DhMKTkEng56QAdkUJTrAuPeZprRK",
  "key3": "2zxM14idwCCMAvQi11ubr1yNVuxgBfm7mDcjc5bDTxGkhTiCvpUmxaQVbbFyakcp5uA7QE6LzdpYxhduS3YDCSwm",
  "key4": "5C7rYxxFxkfEGhTcA97F56YwicFyBiRig9CMAKKRg1mfggaZqE79suEN4MisL7Y7BRnksbigaJ5WnXcTvWV2wk93",
  "key5": "58hhRPbPLXNaTGV9TVx7b5zBQxNyYFmyeVe76y5nk8sLHdr1RXhKZXkqXyc3TD3GiVrz2pdNtyTgt8aDUFE516hY",
  "key6": "Cfy12qYhJZsqn5E7ZJNmTj136fhbCPoK11n9chuEu43tYcXQndZRx6pQRMMMjTqoSM2yB4mR567KWg9bvaWGYwK",
  "key7": "DgUxXegJjxC14pNETRyvbh9TUonQHuq8gBSxEzJKoEyUg6V8FWCVPDxCcVkdy3hAP4YAyt77qkjvKtARzNGu87z",
  "key8": "29KVgaRw6fzQxJvjSeKvt9bv9CkFBRX7ZL1aqASUhckSxXwHmKCNE9JxMP9subk9D1yBdC4dvuixwogWyeoid7f5",
  "key9": "46zohunrywGjMCxJzhAdTrwKQvPFGnJTeRA6x3FyCiVcYpJLLg4iXKJgxqE2NzPTzQWF8qc7R1eR4pL9nLCxVUZW",
  "key10": "5QibtuC7Qz9i7xr1WA487J393FJQcfc5ANMaFdtXt9NPr8K3g8Ze3nMoN7Q3NoJ6dRVCAVbQoFkiLuZeXYhRoAUN",
  "key11": "i1jbJcAxhfDAjeh372hgmaF9vMQFV6QV4nFXBBG1e2QmqsoVChH5yHqmwfvRiG6tHE6AgrPDVH3rBfZrUwPVPeS",
  "key12": "4pNQfyyeru3hnzRRzxnueUUAERLugncvFx6L9Bg7LvgrRKmaMfm5UMkn2C7VXeo7HhqYACEyLLKtoNeKr7dhfu52",
  "key13": "EVMLDUQN4xdqASYjGzvc3YS2RxzCRqPgwGCBGczVr3ZiaeP3sbUs7kstGYJBVXph8tqZjdppnZ9XYdc3ZA27678",
  "key14": "36NHVo1YobpfyeMhhefxuR4qzsxjRJeY9DviQuD9RSs65kmuBNfHzHRHEzjwycHSQgs7BxqqfJw6NJST8T7damHm",
  "key15": "bwGpNp6FBYBGbNhB1vAjALK8gvQLJ7cgMCjUDcvEi7DtzSjVLVqPHVb6mHGnoE8v2dyufiF4fMhtWDVHKJkCGTg",
  "key16": "3UnXMvCmNjcKjQY1odwqR4eDg4Ni9Y8Rm4py2xKfemPAyAG9sHQvFuEP34jNjTfSug6uCWi1CAGfFNaMnbfrdyDm",
  "key17": "NkSM4BmgUXn8uYJG9pNgeedUK8fiBdyKiWgGiozedHJdKtP8JzYjABC4RRN5qVasT1ihhLYLVBL9nFU8NMXzChm",
  "key18": "623uiBhzNbWk1XeCThxDGyq4Ly7UfhpdKp2AQKUdUg6KzyNkxQ9AEEvWqNifQfP1PGejfyfrZ6Tz6ZbXG425Cccb",
  "key19": "2Xv8jK4hbooReFE9hkpm4QR1AVLdQmVZpswAfLPXNQcBcQ3xQLpxDF4wYd5PSLWmnd8bvJXNdqK8EUxRunY9qZ6X",
  "key20": "4SWwukuLMWAeSgjrgEV6dK12N4TUUz8n5fA314VQW6fNQ3p9SBe9ebtmJcRTvAu4i5DvNgxev3diSPzP9d6zAPPh",
  "key21": "5JEUoLvjcPeZgohLgacTp9TMyzXP62TLjzS7Enh9edfVLe2niBVV533Scvag8p1LmaSUVkNj5SwjYa9nGtCDm1ga",
  "key22": "27SuYB1KUMn7bNWu4bkWxbr7uNyxJeo32GdgHXuq1K9ocguG3zo1skXnYstkvwrpbKUNRJJki83NiVxR7JRV487C",
  "key23": "21iPCufxgiub5S5kJxkpbDPGvvRivvWimmFKzVzknQu1G5qVBKVLXZCeqbi223tEnac3peLUb8JDmM9djS8paFZy",
  "key24": "5e8ZUTb8kfJH1bnMt2U2XWA5Ty3KvjhbF63rx3mQjLaS4EEZ3GX3ufiWNCNFcDrxPd2CM7eJ4uyGFrn8QtbbHJXE",
  "key25": "2S6fz837zo9in7U3AGNyCcndkm7RpGRhDmuCmfG7Mgv7XqyDeESo8uj8nJWQkT3u7o2fJbQBEyJK1qKECvz2MuzJ",
  "key26": "2ghankBVX4tQ58KAfY9z12UEU8USMBjCaA6XEBTHdpWG7y8pBnGygmx54CzGjDFvQ5vri2aXfJsBwJkw1ZFVic1B",
  "key27": "4rwnxNoT1bQd7rfa6aj8oCsmageHkM7u59K3XZqTf8FGEK5sZALyW4te3wtcxwVGNmTFgNMkZ8RS6RmLG7GTwrtH",
  "key28": "3NfFa8prGfFuQpcvtaYmNXFEe1G9RPyfM4Rixi53neFcKdc1aX119c7fX3PvTjKWtUim8wHrHDSNrVN8hToQVZ8p",
  "key29": "3z2w7KeuUuYXos5N3ZN7N95BtksxewJcqqGWNWfQLxpPBNux96dT7p5JNTRxMaTkB4o3HtT74CZkAYceBvVtmbS6",
  "key30": "3NJf1DVsPTRU7YnAf3KemtyxMzHZ89Uyt91HVx9GzDGJQWsF53Jj4DumdBMGwpaBK2JwKGSztoihchX9Gfqrxpmb",
  "key31": "4MRqXk5YWm4mQrq9WC4rWs8rpZ3Hs57aQSR8zGz46zwSWQivMn4Tdw6oxTtfBcsBhAjbYy9giVNgJ8MyYaenEhsB",
  "key32": "5mya6K3p9udiUNhXZi9TAxHsgzX8WfDdswBhfLuwGtwFEQfPfQ8SNNaP3W6mjoqCEopKLCRPccioSSknqrTxZsRx",
  "key33": "4xdgDgDtTXYTyC5uzenMP9wVcGXHRBL4zVRWFvfomXeqBTeFsBNsQ9vM8gyPobt1CBFPJwtyLMax4rFsZEgs3WxA",
  "key34": "2aXG41U2dNsSYoBYS8N7EssDNho2yPqQiiutv4RGD7msgLLLvimTH7iPhRyhXZzKyhijNd3gpXJp6cQYmCwq2RHw",
  "key35": "3H4Dfv7JEv94rhvszjbCqZb8mTRVYfkGbo8FTRvRHfCJU6adH765LwAEGpt63oZg8GSx3oZDduA7LmSnYYKDQn6D"
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
