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
    "384tkNqLLk8ghypXucMxPkeY9jcsq5U4jKyC6kLLNbv4RJcnHNMeS1NYWVSXTxtJEhJdX9FCn4c2pLDoT2TtBAbj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zrKkvEyG8UjqEeqiGA6SB5sia9WGqpfNzejNmHEdk5TYebCF7nTaKPn3wECTePXk642rc2s6pnq3K7rhyaYuZ4K",
  "key1": "5G5HHBTsH8nXU97Lot5t8xaHC47QWeWsj5BFNLbK9beoD88xx8CgFAoTPdRRyFf2c5ZWHCtvFvSFqTry1hpts7u2",
  "key2": "26PMJRzZ2TYUJjoc3BARU9n3HwYanqB2MBapLqaFiG1bR7Yf85NAAaV2PtjkjCzhF7C2wiZ7LEr7tegXpNkp2aKG",
  "key3": "5mXJHuEssa1uTETn9HkzhoPsxj3a8ty5VR5VixB8d3XL7NvTXTs7E3F6Xc1o9UR69QMevQfjGuVspCLxvczS88C9",
  "key4": "4jygVus2BS4SJHRoYk9Ps5QksdNokgz4vsGb3Ln2CBrouRsNPCM2ZLFjXixv7ZQF3CM9qM3vcW5K4JkbY9TAscL9",
  "key5": "2bA4XGFXWBgcYJxz5qxPbTpqtD6yu7DS7zrzSqqVAA9oZeakbj5dXZQL1fmuQWCteAYRigCNFD2fMPyTn2E4MfgF",
  "key6": "2erELfot9Sw2EmFFUuRJYXDczFqmzXeMQwKp5MJPWM41QBHYe6WisoNp9WGVdtRmBStZDWXwf3RrXkoSuYUCxxTH",
  "key7": "2qLCZbTb3CctWk8VXrRWBxG96PrWkUQCe5ZoHehCeuVAW9iynx1FNniGKXpB9CFNzuSbiUukxtTHkfTB1Fi1y6oN",
  "key8": "2LRV7cTCXJQMY2kQvYQMhupYtNyNJgNZKPLWtkxwfR88HQtwxihkTEzDTCLRkgkuW9LaQGNE35tfpwJdp842HArw",
  "key9": "58xCSJ7JtkUVkNoNDpYYPaJ2PBsJqTM8GF239KQQFKYodVAMh3tUHrrs6G3DbjQ4NnxL8kfdHjtTkuDk9EZeDyJg",
  "key10": "uk7HWZXxeVh9AwUUpTwSvoL1tn6k1CKL2vMbCVrra36YSScCnMQxPqX7ANp8NkvaUSk85heBBMJMpqER7yxuDZd",
  "key11": "4ehiCd6v29QcRU96cHjdWvPuQgMA8ryxX6dKH11S8rs9qAcyFk8V8hY9YCcKD5Uz4m4BMPmkHjzaPxESKfuqYahD",
  "key12": "546VdPRBiUR7jP9rGB15KdXPaAqeM8iZ9Lu7tej2kWef46MrS5ucaYXywcpj6hecGncAU1UsCSzXLuCS34S56sw4",
  "key13": "3zUWFg4wf7D6XM158AFqdPZmQzctVhG5goXz7nTEQHUJdWdAS4T6GFE8bqSWMtRpX2VEweD8z89PeVS7LWvjrCTK",
  "key14": "5RtfdfqSd5AJgDGGPjWa4hC3PS7BP2btqUtZv1zy2YyJNccXpuh4i2uoBkjNkSfXo9ByzZ3W57AeYbfVf5cbuHyw",
  "key15": "h5y2wW3Yf1cYbpWe2qhchUap4JJ1FQT43EAw5FwiTm6eVz2VhJBLgD9CsBGNLVsUpxaCNyGJsKLrYfgKKBba1XM",
  "key16": "3i7fwys6NLG6zFmxf5ndTp94quM8b5WEWz9FiZ8jtLR69uCfZYuqDhSgXZiyWVtS6J1BLk5MS2b3ek312txmUvzM",
  "key17": "4d4msffY7FvnQyn7CLEpgjsybA11U7vGyWhe9w99TXU4RUSV18p8BayyCCRmnWwwqQgQivAQPq8Kj5U6EtPNpDDZ",
  "key18": "BGr5xsgasLQknJaCDKsodRC3Wdm3Mzw94pmDNGKNiH6BquCsHUfECZcGtLxhR4fc4NnzBCwkcQQBbHZ6JAysrAp",
  "key19": "2ABqPKqjG8nMFDmoMpxhVD3qd8uXzoPXci7H6SjpqLc2PQ4YwKDkHAUni1EYpXjUniyYGvysCM273ACGRR15BSDJ",
  "key20": "4236gZR8btfv8Pk7bF22dz7DRucdhhhTa6c49xYfZW16MVYyESLJ3FqpR5LK5GaCJG7r4556xv5YcjpTsfAVL5Qb",
  "key21": "5khvEtST9kGuhchb56t9iFVrVWUTcEZ7kD1gAKRLKDeg7CBFC8LaQKry4ReXJKmUE7TjHvJQ7Ayfi2Dn31PzM2k",
  "key22": "b4Y77aiuPfMhmYzFFaoGe2gcWgE7GN4gY7M3ZL3zqkYQqdPqeN4mxfw75gN55BDYWahyfSZzjthFNsbttuwmBNd",
  "key23": "4yDNXStT9T27PPKQjFGt76YpPeaaoi3VP61wJMKd9ibxcxb2BW7oWmUB5AtUhmEhFBvmzJF4w2GGkkt7iAYbonRR",
  "key24": "4A8BRrP9mAzAKWXPWCRH5pzRUhKVeRXXmoNy88U5yuMu3xdXARCSVGhYz4gdATydM5dBLsLQX7Dtm5hNKLKGU8KP",
  "key25": "2T4JupjBW4LkW6EtkYF7c57j4mgSMYyzoJnhpL4uZ6HDTqTWxYCKRF28mfWNvYogiQmox3NZYq342w1kFYGBvSqn",
  "key26": "mtaL9FbpY14f5qTsAhNhEbP2UdnrVR9jxeXc3wXKTSDmeGDCnLFtaUHRj1QUguMJ8kCRC782L6YDCvGBePdNX6X",
  "key27": "UxqEPzDatnjiB15uTTe1C3A9CWTFufauy3UPHqQVZ4AG1zmx5uEj2Z4bNXnHH3bzXvqKCmvkGwrChBPKNJCzsBk",
  "key28": "4F18Yj2PoWTSbAzEaTrDjyYYitU3yMnMMswCQftFt1SErc2AgkGWApwf58uDQKjuFuPszoDrjo9oowWttPjNtL6C",
  "key29": "4ZqD8PdE12hwKZhkVmgVxCQboqzPGpu5baHWJecfXHESMeNcEWy81PwJ15Ah2gZ7Wjr7nwNNLRWFWuE7u8nZPjaZ",
  "key30": "2voAFc8Pk7zEWEDZ9tXxA9zxiyL4H6uViBj1zc3UozrqCJktGditeJiQseAJsGfgitKmJatgs9gYDPNwbboL6NZq",
  "key31": "5SYARvnHyBJk8b7AF3gQCa5kPjF3TDU1apPiRm7yYp8oPAnNVcnP2E6z9XLJpj9pXFTQNab4vHvenrkqRhxs3yPo",
  "key32": "3XUAyxjKA395q3JezqcgsENJ5bohW5RVj8Uzux1bsG9zAr12ZTdZLhdiHft8YJZRejJGwGSzdiDqiinKeCTtrPJ7",
  "key33": "4VuYJUxr4dE9gturp6gUg9AnKULgq1V2KjzzBEy5W3dSv7o9NDT6LoiiJiZfx4yNL2CvrL2m1Lr2A7HUnhCk7JQ9",
  "key34": "6197zuNXmgczUASU5QH77LbP99ironR3pxvRoQXFPpD5jR5oivcfaKdqvXPcWdC7trhWgNQLvRooiP8sedBkRcP4"
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
