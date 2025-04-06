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
    "57amaRJkLEuJpXjUcsqtow4TQSa8HYi2vj4xXdMMdZcwWMKkNyFHKb7sgMFzx9JtZirrvyEFZuUoTi7ptTBMPG6o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DPGf98xBfw76YLqpwGHB44C9QddUrSJy6ye5n8KTdHnunQAuMATTSjUJmX3ZY66cuEv6xY7jjixMvyQtL9mpngD",
  "key1": "35fBFjXx5KJznLsqgSBcrxTtBYuCoBkaquSDHMT3sagzcGHzJ8T5NeUNm4BKtTMjY216QtE81kR9pxwvMDSpfXf8",
  "key2": "5rdTV8FSTUpNYMNS4CHdmmDbyqNwitond3CqqtvxLdEoe8Mij8ooZ6TGQZJp3BYDctchb2jLTePyF4hVYmpuLgG9",
  "key3": "3wVrnLzrXgNv25CK4FC37wvk9s8ExEHGTkSTHFNhW5iEZ85np6zCDFz21ewyE12Hw7hqkVQ73osr2zqGj6mZEMCZ",
  "key4": "55UnUrFn4TJtLF7mi6c6hao6YHaT9tZZzUdUfVRyqHMTcQRQRVy6VoZm3wGeZU1DmyaTNbnY7uN6ADWp1aDRPAis",
  "key5": "5DSGV8kXg4M6CnSvWvJHwvNcpTKuotFsjsvsLshXMTMNGaLGZWZGeWrspzD6AeNGFYWyyzpQys73oKvaLVkYYbD7",
  "key6": "5KVnsmrXWrdwEmsn2xnBBdgd2gdmsJVP73ZNyXLHpzs8BVGBBPoGeGFJyhS6DW2P77L2FmPQ8TsNGZwki7Ywxkaq",
  "key7": "BpTjqMJ9t5AyKjwQPYT3AgCDDyRMFiqW5kVLnhKN5fJc7i7t6Ai3YC3spotJSW3sKAo39zoXNiZoSFED8ZHAYsw",
  "key8": "2US7DJexk6a8mBPgLC5UGSoq5VvNG1TtusQGf1vEdMQerJg3NxkLK7edeke5c7ACfsxnix1Z4LzGJpP2QCMKM749",
  "key9": "4YLa5cG4WpFfVzpNd7D6vGKUCqHB5AFbZv3VJieyJ5sko7FzLPvsyPWWzgiTTjASS8LHWLdeMwGPeH5n673yByMJ",
  "key10": "DaGNVdQUgcWTTgxzieGe9ZtqEZMBgxnKd8U1d6WUqoWHjwaf3pxQNkDLMwLC1e3A67qrakkEY5Jx67F7FEBTxUA",
  "key11": "2NRAFLjMkUhEvFKm3GTfzQ5aVe9DzNopFnARfeD8GVi8c8VUfqt2bmiyMd4z8J2JCFhHuEUzX6NeDwDT7BdW7XRq",
  "key12": "3o14yEgKPUz85BnffsD6vGRiauydjwmJoCZPbx2zHgBKarLqw6eQkVFvcZvdPs249EisVG4emV197JKQuFHj1vTM",
  "key13": "49G1rrJ9KMXRrxppfRVovmnowtoyCiyaXcHrTQQ88QBVDTcZAXb735Z5fZEjSeJ5LptVsC6Ug46WBqUo9L8utCJX",
  "key14": "4hfiyQKvmQ9NS2FEom5S8rP2gdmLWnj6Lv3hTDybr1dLp68yufnvu2ats1VAyF3mt4oiRf288pVkKapU6C2YpxyG",
  "key15": "4CsEGMK9DWrtq7WFFpLr31RD1qE1aKwiQjJu6A8YA8dgzMNAXhtDm2pGtovcAsx8QWVUt2MvdYAHD4bafmoUGkeJ",
  "key16": "DEG1pNpE5XwwDn3XvfqoceFAcbzoQc6sX7bhvpYqbstc4hPjcdjuk3MZKRrMGJd1MY3UkakoDTWgUTJEqXW7rPo",
  "key17": "9Y3oLryFiYg7u46cF4qGNxgGQiHB2gQ9d8NVHDfmisoETe6SK2KcDvsAYgQnixXwTmTEvKCSoRBK1kZRyjKWAf4",
  "key18": "2258g4e2r29fatP8CDsXvYhvFu7RnY8uVP72xCRzpuipJJJHDkgN5hGgZp2jQfwS3VLKqJNXW1s9ToaKD8PPkFqB",
  "key19": "5rUD7u31TKvUAg7AcWgSVxK6X7dtPgnvMzEHK7NWU3YSACnMSDuNxHEAefbvTjqZXriyyRmATXbz3U89kyCrP1Ls",
  "key20": "44zGNbtnsVmRzMLwfZg6qzq5m1kYW2C7f74H8VqMPDH869TsJkVtpV2wDpao4eoWuLkaKnaegh4xQu7S1Hzo5aJe",
  "key21": "5SEdEbRtfgyoBwrUTbXKaguZjEXe43p94fASt5Qw81f9G67SduYWYCToJhLUHh6GnUtyBd3T9SFngZ84yMHn6Hze",
  "key22": "3CoQ66DcGUjoiBoSfSAtLribQkHAtVRW5f3iB5s3SSphZxg6WYhhuai2eoh3e9An2ZxW7NdGrfAhpzc1hJQBV2Sw",
  "key23": "5vKQkJD6LdkeuEjGAdQP2dGDzZp3L5qG9Dwcd3CScg9pDVwdmuFd32GoMyqAZcsbR5Gkj6LaigYmRaLRXz7NrN76",
  "key24": "4hV8DJJMijwbjPH8GFDeWawKUL1Yr3UD4RHcYRy1dn4BeeHLxeE5C53Hi97yfsnn5D4zwNUYwqoGbRamysRejoV8",
  "key25": "39jraqKGXFDy2MpGZtre2JwpEbxBDF1t3xjyrkbBuwZtijqj8iCqBLEmKmUdgBdEguDLf7DHJkPFR2XEXpBrmMAs"
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
