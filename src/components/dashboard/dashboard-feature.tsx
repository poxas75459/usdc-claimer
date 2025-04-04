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
    "2AGmP6TfE6LEfBwMd2tWQSWS7KdpchDzsPYQwdMBf2U7MuzL6JpVSYePgMC7T1bhTaycgMzLfGSbMkZVG6AA8psG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wFkGEYnnv2NiN9sLbsjxv4eVtskJdArwvGnhdLuPHPcu4C8FfcKR5DonidW7YbxhWLqdSUqcpMcqScSXoW6dGGZ",
  "key1": "3kAdNgAUSkxsoDoB7yaeJuGcwwikx9w7DdvSnAhQRRR611bkwG6DTwR5xegJMrVqrb7h1GcDszoRRV9DMACDE1Q9",
  "key2": "67ZrnWSxBg7Pko8x81VYmGeHgDCZZETx1cocyuVuev6a424bWRs6s64TdWY52jVw9ujY4Bd7rmfayEEBTZcnjoLz",
  "key3": "4mHDNH9LyCiEi6N77au87zxyfvY97Wfj4kJuhDZrSd61z4bD35TRD1RNhXqftdH23uLuic5qTd6P3LfvNqasgH3H",
  "key4": "3MRVHuun7khfPD9t736gRRQKjGWXXKNBwpifUuBTHAPH5U6FtyUWLDCgzHKdQvZLKz8FQTzswowarwAL2tm5A3VW",
  "key5": "393rbKMKoBG4b2u3xoduiybJMnG138t4fefrGFa3ysMkVcDUiz6EtdcBdQXGkS8jsfDsLsgnG3gZUwGtJo6VM3zG",
  "key6": "FaBve75YGuDim3yLHkgaUwRy28w5Uv2HbwEVXynwbfthGMrgaGH9uYgfwvRKvYiHw823KRdQTaUcREbvWQGhmNe",
  "key7": "4RNKAt6uBQz8rCGkiRnYxuXwdV4E4KrWH1xVJKUxiMbudxu5aLvPGn7Bki7aNANtwq383akQgFChgE3o9TD4JaBJ",
  "key8": "aNtwwcGXosrzCfqy6YPHxzXMnevxVsrhgYnh9kPkWA8qyDsfqUcBQuYu8tRYPPKsBGBWB3dZbuSTJda3juHukZf",
  "key9": "2eWSpjMpZYVcCKxDtcp3Ss1JeXRPaX6ZBKJGChJiR5WXXRusLUF5Y7ptCqGjKwttjzgSC66QaTnyVBADWQaPQFAV",
  "key10": "3oz5ysPK9qtWb5EFaDGaxJz6WbJH3agcFwyn34TFCTQkST1qhU7SFPdDzkrAsHV6yz1qBDB6nRVpRvwkzoLVCZQG",
  "key11": "VhiKdj5u1PYJd1irFAFRLQVCqvdQawSRsAMKPURjpFfAiP8xSzBGAtZbRGx2ZVZHVeqMPGjd1cKwkZzj9kHwT8H",
  "key12": "5R46fU1oEJvgp5ptExzLhZprApHhnJYggnhM4Ku8yiCyYghJfka9VRDCmhXf6nfV9daPUEwEQcefpXKY9fSVXgpm",
  "key13": "5VKz8wGo5DrYsL49SXjzc9UTGCT9N77XN1iiw1ypjSCDaKAMoS4ReYzTecTrGU1pxBZMWzj2kgUFGzRsHzihdvoY",
  "key14": "V7CvXAGnmpBeyTaUNkjjhaSWzfwF9XDSB6tmf2vtbuCcgzrDnjUXniVMQfKPQimZetMYEuzDFMiZKbgYRgiFqP3",
  "key15": "36mx4TXtsW3SjmU51P8j6fagrr2jNzyceUFEonZwUXk5GsXCMCfyBHuguPZu6cyR6aVHnZ3wRVWH4CsDNT2GvL9D",
  "key16": "6327XSPJQ7iGtdABcyqb1KpKMAtPTyfgrNAZM4sE99wo9o8WheUwyeHoXYqEu5QLskrSD4P53cZ8Snv11VDQQ7gN",
  "key17": "3DT9bjDX4o7cJwpTxgRyeKuKHtTY9KTALsnvHdczAfsSNs953fUPnrH29C9JZgDot7mxjGwdmJtVKiaVw7ZuNWXB",
  "key18": "2YgxorrRMNycVn6kraVHm5vSC4v9H4sFGb3RdM1YCwYYYQXXm663s184N2g2ZRPxrNLNePsHRYBW1A3p2PFyxsXM",
  "key19": "2N2H4jMrrpHPK7WggFUwP4wTyd7yDtS1fGwm6Y6esxFjjLcmgUnUjtoTG8u2USjLLjzGqisQ5weVgshTcM9oxvmK",
  "key20": "46hjkViYtp4xaKGc7PtCM8VvfuYDDt3rbQaCFRkk6p3hQdaZ5T71p2uk4McK1zpU45KBM4SwehZYqPDXj6sn2ojx",
  "key21": "5VtfNShfHMmKr4WBaoi5J8fa3LzBmaD77tHHiKJyp7JRYmvNH1kopig72j8QWjTAng7Q2RNSSHJfkJ7rCMMQPYS4",
  "key22": "24ZjJRCzPhp7vdAaSPEVwrBiZd79pcQx57ypfEJkAnNLqsRJG6krTCkKbqEyMk1KsfR2Y8H2gqTLYEfwoR8HgJWj",
  "key23": "VcfJXYtEYX8jaWWV6VTiUndmPtdX5nBjK7CnFGekNsspSHEF3zzpjthXczmefmpRccoSe8Ha7oaDx4rn9AfDJEU",
  "key24": "gqsmjXm1LyxCJm4KPiCbp2QRbqk4FriD9DocfNmyeMQJZWUkNBaeGGyufsVvsePrBqpWyrgcif4BHUEGRzPKQBj",
  "key25": "5NQ8H725RrMtwGB7LFbgfbnvtsoNR7gNzeAWgzvPZfdecorC648E8ybE14DZ2ketwdUYueJuXa5bkjN5MLzW8pCy"
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
