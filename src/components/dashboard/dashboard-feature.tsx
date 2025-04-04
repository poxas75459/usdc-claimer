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
    "3Qk2wiR4Manq4xTAR7VUaMwgtqj7uoSPh3fgqUdgDeN45XQPDubchoCT34cganVLL28knRU5c3LWgYZUBBWF5HUK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iSmX4yfjDm6eWuwjCHoafFeTMFMReumjYnU6bUqu2Ly7swNDWRkBSSM6ySvTZZYfQ919ndUq4QneqvWJWdm2Uwa",
  "key1": "2TVJXwnZpAvBcEd4mgaanZ16zqRnZowHYRVj7ovZdkhFQM42nN1GWVvoDes7TEpJhjc7rGmVda24NFFznqoGQNsX",
  "key2": "4e8z7cWkH5g62ySjboDD9qGTXiXdQbZboPwYCkYmCRDQJ9HogcexTr6QnLTYku74GsDGHJ4W6nEXCWjT4NfcwZkD",
  "key3": "4LEz1abPFUYtZj65pEEdeMjAuXLgSAW7gSxkZAKxU8wm5KwTff5LAkFNthXzDc3ygu6iCwF1syTaCT8KrCBs47LL",
  "key4": "2zb32gGb4eYXPyhgQxkXPBVDZBi64tAVCpm8vLRcQ8HijKFiEseV6SxXxWRvH9YFPBehSjp2pcbDfAthaUBU5a8f",
  "key5": "2FahgGDXLyPPBLsSNr5HKpKU7F8dJNxgNUSsbDLRKzuJURP6NvwFyU8dzFGiadnfYMJSHiLM3YMM35z58Z9R12eM",
  "key6": "23w4LhS2iuJygKTABK9CgahFrd8WPdNcSC5oWaTk4dQchecVHFNZmMfLS8zhheyjkm4XqJ5Jfy9JR129piUrKvqS",
  "key7": "2TfWMM2wrunU6PUEbudeuyj9YDF6MzS2bpuXk99G9UWj3GixyTd2D54ccCAUyDwFDhnJHGUM8DZSdWTv2qygrrx5",
  "key8": "2Yuc3s4Ziu5nxWZZnxaHtX6vCDHVFcidUGcwiAbiDKeRBB2H2acrawxuwfykSQNkDve5GJzqJ6fADXwSRk9FJuCV",
  "key9": "2m3NU4LbfP2fLu3aNEFXkDmeJeTqQ4J4NfZw7BrF61o4qc79no9RuYjJTGgFqqKLdahyYxBok3cHhga1VwT2WWnB",
  "key10": "4HpFWVo2Yo3jkWANDLurwWtVyTrLvQbndD5zy2DsZNXSS5kUKpJbLwekeASpftkavq6ZpAhCCZnqkJXrCjFcvJKQ",
  "key11": "2bfETv9K7GpkdK6tjUGnNQ3E78hNKugfszc3MB6ZQWHYg7qqNRSXcpLBKHxGSRcuMppqXKyNp9Qc1Y3SSJsjDNJD",
  "key12": "4girgHR43W9FaJ5CyQGv74QBsRqrX7w3h9LDNg231HAfUfWQ3qmCrzGnxM68kuQtB7WsLfMGqW5gbqvKmjJvEn1a",
  "key13": "3FeC6ctqUXtpkMcBoGk4ySTj2t2F2hgiwzhX4YZXRKQFj5bGQR6hTEdu7Fo5Px9jnfjD6UZGfMjiZNCFqJmWJPWP",
  "key14": "JA7iYdrqddwsRGVNYHNktdCi9TSes3xbKoYKfs9TuzY5rQk4QgiZdv7SBN84FB8JbkMcYP1ivQdANiVcSJMoRo2",
  "key15": "3pRhRWhWngXsCJ1hRz1iKFGfA4ihT9ZeMDE3KSZGtQw4NEywrxBMwd17xpVD65P5DaFiDrtHtoAnfgjqmSTxvaAk",
  "key16": "4N1z3dBadittnZWMgKV8yALPxP2tuFyvR4GgNUNUR62ETv5ZKzEqzyeWWfe29P2Q2sKfxQVGAMy21q8tvU9w6ZsP",
  "key17": "5aKwtxHLUyqqA57Uec2bpmZa6Z8cgxeCpKJvGKJAhCrK4tgSG3jDQLg7RwjnVANo7fdbWjoe4p2iszDyFFAK8NaV",
  "key18": "4ajpQv7rToNjvj39fZxJzfa9oSNeJ5gyswGJRPy1cXUZX2rUz761pXrXdX5ZqHmtdMsUCoPuWLRNLxvMS5Dwe8Zp",
  "key19": "2XV6TkgrUYjKRnbGarjUjeBd85sH8VoSCxpKHKuZaqvsgQsZtjBVrK3M52SbEZtoCZaxM1xvPc8wZvEy78ULQKLq",
  "key20": "mnwuEoHE7JCCcRuK53ZzGzUaQ2dyCZ7QUrvNEEqgcZ934o637rGv31KD2cVXRFaef7kR2s8L5Yy1qH4uj5hSmdX",
  "key21": "4TFHo5GrbBKT2Dg3isp78y2a5K5AQ5jnetX5VswqSDd9RyDgEzKc16kqA6tzEKegfaFTwMhymxZWX2peDkY86sMP",
  "key22": "3QEnDQNwFPKzkTuborTVk2WwMqHMQhjprySx7ESAkwMZspoR8JBquAhG5zimXcCS1pfLQ2tBhW6Q9WUWrU7okczo",
  "key23": "5LBDs324fhheWa7htL7ynvMWmTaxKhDk1cHKJXmaXxMHmeRfVoeEG6wvfUAwjhVYPMrzfV6kLWs4Lf7HYXEJB2vo",
  "key24": "2NUTSjL7x7Ney1AwaWr6GQb1GN9QELJUwo2JTpwAA3bw4kM7j4exsWsWuV92UV7yRC1PCwHmdXcrrggZHTDDzaxz",
  "key25": "3UJzeMHvfD4iWK6WnZqyXRoxxGk6CK85EbJp5P82g22vvFhXPRoWSLcxYGYEb4bqF3CRYjbZyciVPNvhG4UVYSr4",
  "key26": "4eFVR1ZBWEWRWGHa4HKDbbnSJ4GxN829Hg5aTVqHoAn1ZYB4Kz6cNVSV2AHJ5Sp1vQoidwoVVcwZsCh6Kypgnsuk",
  "key27": "YCMVhUZesJLQdyCfNKva3dV7PD5jJck4CC59e4yQBUtz6vDaTV9psAQDYmXcazqdeAAzHeyPjUHg1D3t3jA4X3q",
  "key28": "5QDNjLeXozp2H4ChGEzD7Fj5ELM7gXevndGRx9SFvPiFS8ZZEto6zYmqEhUjkJGqjCRydYaaUHhqJpmPv8EyykS2",
  "key29": "2dNdtfwBQHsTfM7fbSXobaqwhqH9FwudVrz247egq3qqNDR6RoPNiTVUHqGxCRoAGY2Jqc12pQtdRd1J8gJ6wgnj",
  "key30": "3Q3tbLDB2rs1F2Rh6xMVwVYYJxMHBEsUH7rdP7XZ2kc4eAeipEU8V2p3mrpaVQcHTeGU3YF3eAyVt78L1YZM4PN6",
  "key31": "2PkSZUyh3aJigADixkDWQb5E75CNf3F1qQCSECZVEsn8iF9JnVAj8xqGGfA4mmMLYqh87dvnAxY9cTLQvbPZQVY7",
  "key32": "4riYugWpQGcPgfnQLXYnbnPYymYETwWuYZAo52BYH9RB1ysnHSVhfX45hq6QDTbGxEeMyG83taT5uxb5C1zgJ9rM",
  "key33": "5JM2aY3Jt5DsEeDpY6A8VgPmjEWjQjhKnnZcY9kRG3yFsGmQYTP3VYFW3rUexvoyXDDnT5CKBUToEG5gEYyACzhM",
  "key34": "3jWDXqbosT3rR8XjgdGCUzdWJe4oLPAnVmwQQBmY3dYxYAdTDBJnT7ZBcCJTMq4VraJo3jUhUF5w5crqtJwmFw3Q",
  "key35": "3szBLUiUiJT49sYLonwFi5MUxb6qjBVGCdWaKdtrNqjkPAMDF5KNX1z2nqGSYiYmtKixRJioNryg8nEB7ig9G9Fv",
  "key36": "3XVyyA3qX5zQhVFP16Qr6a6Vz7gPJJ94PDfdR5aVweyz6TYGNSNJoiNmTqLBVEFEFoqacLGru52P3tZuaUbDT1bj",
  "key37": "2FkFbqnLfZBCoeyqAra4zXFQGSdqeXkKxhAnp6cvC72o8jdgoxY37Wqd6wEgPAFSAHRCxCu76JXJJumgt6eAJP9F",
  "key38": "5cYF4pnuojY65DfhkdjsLRTodsezM6VuvwwE2TeVzbJVi48Hr9FvnEPjuQdd5z7XkkxdExM8SGAXoUUq6LJaztyC",
  "key39": "36HeNTLyY9xkMTswSi1ebsw5UhRNuAQY3YCZK9539riu5fQExGkU9ZgVCQNMemepjtEFZkUPzy3wakK2KsVLkXvB",
  "key40": "4CNFzMayJFGB923QVTkNY4SvAYgE8uU7wLB7qrxm7eSf1NamBsgUzPbvc9jkTcLCht5jNhic82hUPNaFLbEwmuvR",
  "key41": "4sUL8S1qfNZEvfAQesfXQjWNZ6LZK6wyWW7ekzjxroEP3nhNprPgA5wYUtYYmvp3mSG6ww39iSJvqiyr23DNqms",
  "key42": "4VzkRTxpiYw5LkcGgpmEWN5mGAjzwqwKJuwx2xzt6mLpGnzp9dJ2wvrpSnDjeetDv94mbR7MmXoywSVkSxr71GE"
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
