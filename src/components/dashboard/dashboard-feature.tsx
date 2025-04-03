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
    "2op2wiGcHpwLJ9pyV3irUJnvvNHutHDAo1bwGmnwDrLDukP3hS9NaEP3NVEAyKtDUQX68FW1BnTkgFVnbWnBvJLx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44SAS1dNAczrUWsB4uuA6SYYfWPfL6YYFMArDJHLCDKZBQpRb6S8Yf1TfQgnBUCVYjzaCNRkuonPii1oPWchaWzj",
  "key1": "4v9G3C6TSKsQBPVsGciskniKLSXZNjhNEpiR6DY2NxTyfHRNDUZ8M3SFT3PyPCwcrXyzLVqqjJhYKqMVBqYCgW6U",
  "key2": "ys6XvvQrgZSu56wNCJWvSw816wqN5YuLjkp4qb99jex73wC23ujm9Kp6cEfLD5ezwuUzZDGJQU9nnyoJiZtAiYi",
  "key3": "45z3LSeroUeYZ78BJaaV6W18U1HJ3U7SXyU39tpT8CFVZpGZEmiuEq7P9eDVYHbpuxnonamAxJRTgrPgTAMUEdJ9",
  "key4": "5MkCQwUikuUmjmQe3X2YrPDdzUZ7v8tv2shFFXnnb3t9dYKnrmBKyM2ZvAbSzRk69SJLvBtjfJRYnGMvP6z6mRus",
  "key5": "2GN1L1z5Ke8GS1m7PLBdq7ztVwBRAWZCtKiV7xCNGGdyS8pY9AVMiFaYQaBfE8ChmYyxXMqfY5CL9j3BgFSQJKyr",
  "key6": "NkAgtAvWHM6RCETgqN2JrEXAbkzxUdJKvrbDTDoe1iaJbjPireq7a1YoZZLou53ZAU83e9cgqX8WW7SWhDoNcRM",
  "key7": "4W1ddbUJ3m3vdFapV5SqxbhWyjDxK9k1dZLYc81XB3qrHPjsGLVq24Vop9XrJ33s7LfkjrnfFVVrB4ShZXFbKuY5",
  "key8": "4BAkxnv7Qfz4nbDSnt5iHb7b6wgUWTDasrWu8f6HgMFVCAztXCVQvzbQ5QCKkfbrG3n72nb1NHF1Wr2JfXCAWRC8",
  "key9": "471ZTD9n5FDMd7dBaufqW2iEZB8yADm37EmnmfnWWvpk1B8tYA7oGVgWcfvoWn47F8oVKErds1cRPU9Cxchm35L5",
  "key10": "4WNn2P5Rq8gm8ncUCuYiDhsU5WD3Jwf5gUMbCu3jg68GTjGj6ervTcbaZK8NfJCDhtVzGpYAoU5Pi2mRyHv1EiKp",
  "key11": "2aXihk9JHoFGGWRRTM3VHhBd3iL1odPQx3sSnHmGeAKcmv4XJoGa9fhGbecF8Q9oFUCJAYqnFCdaTnK9f3PJLFSd",
  "key12": "35D6wBztfRG5xcc7G8bzAbhh82hShoSXBCTU4JY7r1wBgsamvxJDYuDAY9QxRginjaBL64LYBTpqN8VLFNQT4ZTU",
  "key13": "3LiUvXbi7v2PJwT46nucxSxh47B5uXNPgUfJkFaVzDHGxsfxYxEVbtn6kgAp4FFSQQvQqMr7V6K8Lu6S9tkFYiTK",
  "key14": "mLXif1u2p387nMPivsoyVtZPnFtTbvyUEvYLbSKyWvJEYCzRFdiCRXuJNz59cesRvkGYQ94QQmeCdBq2zxh8EQr",
  "key15": "3gpHsfm4Tnh3VBNKEnG91C8ep4FKVutVijcHfNA2hujvtpAnLgxdMFMEXPgZYFhgL6dqzFxh4FkD3XQoc7oBYwdD",
  "key16": "4ziojDPDKPfSHqsgSPwbvVVTmJUdZo3NS5NCKbHF5frb6mdqCzpMrue8nwR9M82S94AjbsTPEnVCJB5oynDWCroV",
  "key17": "v7BGSkZ1diTj9qSKbauoJv9C96DQXPN5RpcNjNxSK5mU2QwL2pZXAEpvoVL5XFkpttjAJxKpUeN91faR3t6fq1d",
  "key18": "2qb3VsE7gZ9d6P7zgpcgvytXP8iK5fGc2WzMqrW7fvL5Hh1WWimNYFV1u5RyjYUAVAm6ynBaWJ3g8XUE7HHgGxMd",
  "key19": "6672sRtnPZ2ei3kp1NBcHkUVsAPVsSRvDjR91oh6bDFqLQ9L3wJE81CcfqZdrBc2LMYu3LFtPQNbZqQXwoF3pAfs",
  "key20": "2qz12E2Cvx5S3q6tmSkPJvS5dmGtPgWHgptBdpcHMbqKrzACcPmXvo5Wd3GMVck2G391UehPJsqjL1MzYQqmN2Vc",
  "key21": "jnCoqRvpWzNsvFp3q1WN5WJ2NnCuHPTFda1We46Mzarenb3eUQPxqFN5XYS9uSMgMo3Suz9GE14LXBTo7shqMcq",
  "key22": "2aq7DXicThdgDnSkvjF534HZ2EYiKQN1yTvzaYEw54hbLCTZNKeXXzPUhpgeJdoNUCUTKX6jHDJjSG2Go7chcvBD",
  "key23": "43KYgupjpYrMtc87pyNHmdktwg7t7tKY6dkvkV7Rj5K29zEoBf8Qai7mcwxuuGQmni4vm7PxzXNSguAYYXDCJA79",
  "key24": "3d96ZoJFgWyHwqmKTkPnWVMCXnonkqaS1Uh2jck3WftHdAcSpLF4MY5aiwZU3489yc9x2zpqQWGbt6KaSJ93wDV8",
  "key25": "2B3SyxrqVRnhdeQVWYyqP4ESydSX4p3DYVVLbEZoipCTSjooMpcm7fXo7zmJH3wCUy72VkGAAMjiLDn3MixqFdNq",
  "key26": "3L2P8rVFYDnJHk7zR9qgUtqy5iTZWDdTqzQThRGXgdhYfdMe3pR8iGPjMiaJq7eNSs7UyhaeuYMEBnGNyFKhymYs",
  "key27": "2S2cK3cjctQJwsxwmRwjzejx7DeDdeCk2KVWxYzMARwDDdnkeTF37qizYqDAkVHpoWSvkEQma8Srxa3LELuRTNPW",
  "key28": "5GmL8dUu2rRGowJHDAfwnJVavUuvWZahY78DxHJ83UtQ4TeCQZhu16XMJkyY6wsGVZ5qQWDwgFWFyWJpWWvmVvxh",
  "key29": "5PYEHHh4F4cZ9dtasr6TohoaMK2ttNbLNB9GAnwtSV8JnupC6pKNHqsLzjLUsgE79eB2fwqeWTirKNH7nHsRGS8u",
  "key30": "2znaxFKe9XN6vSdShi69JgJzSqLf3JQvUAfSNB7x7JSc8r25ssr6KRC3pBR5tzPhiCcr7XeBUDTyGHTFMtzkqtqs",
  "key31": "3PxXC333hqMDTaCHLiznWGqmtmqLfDhFoXXBCYvthYh41U562fECJpK8tiNWrs8Vw2HV55RW5Ct9cbeneihGTWRy",
  "key32": "2e8b9FgCYe55SdQEAfKfiRrqU3AN2k8xJWbcCybXtBWtDXYNAEzXcYfoqcZSczJWVZ4o35EsEqzgcXKiEHEeoMbT",
  "key33": "5zdbsUxZz5p8ve1FMz5xaWswABvQqZxT1J2cg1tg1XyUPhT34iZP1Reh6jzRdNrHvHDyAgtRWmdCH81ngmj8k7u8",
  "key34": "5hjn71L2ScrdxndPNQFwLNGT5XFQCXUZi3wBBhz5Me2LxaD41aVhHZGQ947BW7rZF9jzRuh6GeXzdz2DDi4DNWSw",
  "key35": "52xnkjQoEredcoRfUkJViSH63j3EQiFk4GmEHHrdGJZY17zFHzMC2Pedn8taJ6KGPDtMrTseRgQwtMCPBF7yH43a",
  "key36": "u6CkYttiN2tc4SJA1QRwjpvCWXehLg6SJ3cvuXnty3UYfj3qBVFD3B8T8gDhjfzbuomDNaECokZZHpxEAQH5Ynj",
  "key37": "47WM22jzwq4xTUroSfFWXaak4aZFauFBmtkSJSmMnHP966pVbhKq2HU7MQdBDrUJRbyifu9so2sW1d4inNAbQqsb"
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
