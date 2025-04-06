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
    "2pGaGStdEmLWDW28vu8gSoWxybS1fdVXq8MPU4xo78We5J5nrvWeKsqtNbTHvzvrtUtJhZXiBQqj1e74ynPGAoRr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AVq9qSXYbyqG7H8zmj6Upd3NQRBdK7MyFetkUekbc3w4Kf4MhX1MYyaaHATTeCwD98sXZLWXV6HDk53KxfzEDMf",
  "key1": "kVx6iUmfQHrCTsYpRhRHRZ9L6dpKXuZTdbk4Z5R6sbsgXSimkBJctfeZFDsWdP9szRiq5du6sBEao8H3vs68Pmd",
  "key2": "59AsSsvAcWKG9xtyQ3LLH75G77ReUefYMMVW3WwCFjd3mGCfwm8iihseDAyBCAoGVs6LCsaBN7HGNgCQaTFZxKBs",
  "key3": "ynLtaPNHDqCh5YzHQi2pUEbP4FcMiNVHpWSuhwSzZbQgCmFDyVCvGb8Fox1DSkRFQau62nRLZg16uS8bEcMiwPE",
  "key4": "5uEnqtZW9KyW1sZ98DomUFLpYcwRuuCwvJScA1W4o1nAZ783H7FBbEYU42PcJGAycf9EgQpUxasL87xCK2Q1RKiC",
  "key5": "2PHypdZb52s6a9PAetxu84p1CrZGd9N7h4dVK2z5G89XifdM7TE183nqYqRvjBMLCB4sVt9q4UmXhu8RPQ5WrEzw",
  "key6": "3Vo8VjTJ9nBsfwL68PRqyLzrUWASEU35ByHFR7eV6SJkkZhAbSbXXouTyC1P2PXQ5E2Bi1i2TWKkfrJcrqj9N6f4",
  "key7": "3QSGpygySMawgGRbwvGbezheHKHxdQfnEWcUvGbj9Dm2HX2w3ChQeUPb7CxRqNztSGsr3KuQ4DCDxxG9qCQGCwyn",
  "key8": "4Loj3L2Z2WFHfVwDtt9pHBh7mkAwXGoZGRMnSKFMUmSLaoM1GeNpLRx4HEtXfC6uxNd1ggD4SEiCKe3PtgmETAiW",
  "key9": "ySsf1F5e9urER983LQxHCJmtyuEgsUzrF8LYozdVrkayJMWPFFAWdJAUC1mCqEfvAabA36jQnWz2weo9fYz59C1",
  "key10": "23RTSJpJGt77YdSmdCwRjcN9RguP8WfYd4VoE5jgwZxHPQsjJvTwG8BUSDDMQz9UsPdiDP72MKB8g22gd6s3JUsD",
  "key11": "5GarEom22QmqjFCL9rgoMmkaLoGta2Qrs985ctCQHd3XujQdayx9JLXwPT9V8ZtmyM3f5SsnXY62tWFYq4nkYw6E",
  "key12": "3HkYoSSG12mAPyrKJ6oeqjm6DZpXdvzf86hhAnACXeyGb5FrXbXtZ2pZoPwvBFtDLjHmB7NUFubD1MgtG5SACm2f",
  "key13": "5ZtT1DPqGECTotKVWr8c6qeqHhksH71KHb9yvvDHTkE1yYTEfJgDfyb1TjDUd8uKmmvtbRQrubdnP7xQiVYuZWj4",
  "key14": "4hd3PWZP9vNQUBYWDE41NiHsv19PPZ5Wxn3t6Lis7D1UQc3spbtGPbfrjZj35hhA2PtTRKXy8JLa6nVy15oYyBPP",
  "key15": "5Y3VmgJVxF7QnSubPDdTvzfPU7VnHZAaXc89xwmTYdfbXro8we1pona5VA96kpLiHbrJbYjZKy3ns432TqB8gE4A",
  "key16": "2YBgH6CxR4dLtCwMMnfupD1oE4KKLpAnPVkAQsmgHNToWB1x7FTSG3nhuPj9VBwQDewL1RjAqzdr5QZrMbRNSF8e",
  "key17": "2G8A8EVrWAeEPHf2oAmgr1S6TikzHXE42ze1V7cMmgpvzpPQ3Bsc19Pt9qf3op8yMLwtNAHsf23r7yJ7mxqkUYCN",
  "key18": "62b9SnA2Z4LLrnEQzbGBTeHgjYcRTezNe5YLHTh3D4Z2ARo8uqzMYpvDea9u8rTixYQ4WgpFmC3wWpVmoh9EDV2L",
  "key19": "4fjNEULHW9rkzW5qgWDSRr5VRHh2otVDu7a9toi1BJoALCjsc9QfhYaJwwksLhaTPnoHacqAhd85ciV7jbPMCtR7",
  "key20": "2o72BJNyZZgj5NqNC8yf51Tfv4MtXtoUam3hZrxYhfk6sietk7bci9e71671LwnwjNEooum1zWAueCRLbQdEV3bN",
  "key21": "2iQcMw5ywvaqu2keiHTfVHNPaZPDJrfZz9AcKkQoZRgYGxNWyFqSVDHv6EBL2ENQVFfVmpWU7JFG3mEjsGx3NU5b",
  "key22": "4pGVQBCjSGSquUB5ffhdUM3Sbj5sbnXFq9osQ2qXmGNRH6RzX1buvc7Cfd8kTAEjaZiMhWfw43mdaBKxVcF36RSJ",
  "key23": "2W889iaNJHoq6NHcrJ4PAqc7UtLvpnXnTu2LLjo6hPVebABmBGrdwRHkwsfiAcD9UDA5LYYL4tpjkjQxuiTidFxW",
  "key24": "2KVGhsKbq5GPGPC64bQxM4BzEHHo5sdnazQncd1DXmxGdntwNj7uNJD7u84XSYT9Jx5qvzihkWVKPhWQh2jUqNJA",
  "key25": "4c4c7kto39hWtkoWFGgUCqthd9b4AmemnMqfnz7TjcN7S7N9x7AT9RVav6Z3Nvm1E5MUHbJd7eva6UefnJCLUqH8",
  "key26": "3wArQ3K9WUrqkAx7b5n2QNHDtnH3riLUgdGTg7LntEe8F2AkCddhEtJVjM8R2cjx72mEQiF4Wb2uMUGp8Zt47f4Q",
  "key27": "4u98csUpX7y7auvzdniXaaAcH3RhcE5SQx8qFmo993Lj5R4P1PTSCW1y8xvwYMWm9qdgQPEoLLMawMC6jip1ZQq7",
  "key28": "4kn35mrE4GxPHGYX1E15RyWfJ8yT1ZNA9oTrA7RuRWWPREu7gytP9ip5PxmAupfci7tWH3Nig6fGrWWH5XfhDkMB",
  "key29": "5BZoZ5hf9cezAkow27zjBvfpYtaUdpCxPqZT8T5CrbkRkWFLZqhWpp9y7j4j6XMEbzNBU5Q65YRn2sfYPyWZJAfa",
  "key30": "3aFtGK7aabUbkAp3t7NTDMSgBwLSLrh57KPBtM3poBwoqnZRZn2UZTUVxBcXGWVVnrfLqXMAVJWAGFMeYBAzNu8f"
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
