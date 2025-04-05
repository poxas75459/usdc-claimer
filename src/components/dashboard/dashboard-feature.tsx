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
    "9WZmTEEQtxjhts9zp4HYgBugqDcNXu6Yk4NXJiTYKFSi2P6k5QeeHrwRvbcTzyyEuZc8MMQGyzYiMLJQR1zghQU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MYrWFe7yYDcpL8JYkgVu77bKV1AD7NL7qx1xxcNXC55n5BMnbqFg46twqyuC4HW6VTifTi2vc8ERtSN88FHenyG",
  "key1": "5jiZqwshA6Gy5kmtufxPJKJiAdpuV5yectX72FuNBgpM4b4nYLddVp8dzvHJ6ijhwmzatzB5fiu3XVJEXwXUNoWg",
  "key2": "3iw4w4odmmHvD6qz4FZfSFrvDrUwRWKgeVfBfMcWQK2H9mjrfWkgaKsxTyrFLsb2kvXYrumDSB3sYnkQozkk17mJ",
  "key3": "4CeuruJWodsJAWCxLY4h1wduX1HhbSn7Va62Vmo1o6xxwLJFj9cRie9cvwQzfbDNwba9GSoNWqbgbDskLxCz9Z2r",
  "key4": "2twfsMisdm2uLSgKhXwSs5oMWfcL9jvsNbLnhAvHyJM68HZPJLYrDmm4PnYWzCVuJmpQjVEs8wZSEtEgTUZTXh4c",
  "key5": "2ibC4YVZz9bZMrKXNzfMySRG4SXoTGChBgqegkGNcyhhEmKZbizMBoSqy7SocVfaNATrUE4AkGXAyVvLaCFQkXJa",
  "key6": "3Gu3H44GdTrj6Ta8yro96nBVojFUwxXrPMmTrCWH3gU1TUGNYNVyYPYzxGQugx4mhyfwBgkSUW2URikFThj264t2",
  "key7": "4j7apHXscKq4VACwRFrETF6nx2Sb8MtKP8iKp6sxJHG1qEJAN9LPXsAqzxzjFhugzKQvyVUHb4E3jGBkvAgtDFWJ",
  "key8": "45zbunHgpY4g5w6ZxFE6Rh4Hth21Gmn2vS6iKXKuUoW6XkawfD82bHbzmkNcempXXeVmNxEvidFJZm78PdAhDHAy",
  "key9": "24UaXonJTQYKM3wd39nHybaeVtAXA47ix1YvioQkghQ8deYJZAhMx9r4mWiZr1CmGwdsUHiXCyWm73NontKBK6qi",
  "key10": "48MSaohALbCdfoVYLmZXWwjL47Tk6GMBwCrHJDLbcbRgV5ds3K12xGNLzw8mvuqLBo27WczfD4JaQD1y7KCbFuGN",
  "key11": "2v4bV1AEWV33yieP7G8WJmLXRp6PvL2xXMAVkVxzxddrZGzdbtMwVMxHuaUJZHMAfTEm3BqvS95NWnXLJ4nu4jAA",
  "key12": "nKVsBVDDpNp6Jn2KMTS7RjYRzho2WmM9qJmEeH7t5KQmbNaajnvDMbt6CqFh838xzXyV6Qp8rNqRg8u97SLtV4V",
  "key13": "5UMWus2rwkRbVHqVx2K4eWfs1PSBk8sRiwfmh73RxEDhfo26r7ToVA42EaGFtfgnvsMs4rvnTWNSH9zjC2P1BLHm",
  "key14": "2Wsaux2BTjZqAc8xD9ykJLCpDPeuLZA9aEWnqPRGC2o5maMK2tw7runDeEfaxDKJeFTUDrCeHqRLbHA23ZcaZ8nQ",
  "key15": "4BA31SyZHwLVUfGzpQfTJ25UAVuHZ2dnQywdhXNx8qi7Jf1coxjhb4x7XcGzoYbcP1mSRSYk3AqHcXSPP6qMidyr",
  "key16": "4SSLit51xKzYQx4gMe938BWrj92ZBVcnZrkeCjmUwqMzgYfBFtUTFtywmTV2Ayf2zLNe9nPzyNdq7Dwj9kW4K2un",
  "key17": "5qSvgEe86WMMesy17y6KQAfkcvsF2MEWzv13Kqbwk8AXS8F8M8TRNNVvx32tN6KxWFJfJY175h9VQkoQfv3vvrMr",
  "key18": "3SFCztCzAnWAc3QcafDsC6ya9v8ZSq4t4gjqnqk7Xb5pQGBGkkKsL3hhnAHGynirNuSWrfzZhE5ro9Y5jM5uwPSy",
  "key19": "1n4SLqkMHEe4mofr74yZ4ByhDQUBdyNjzzD2fyuLWNWUpatz2cnqD18gMZo1kww1ixm2aTALxXZa9tcVL6xM69w",
  "key20": "3gEJfd5CU2Gk77KeyUFZmKC3YtZDsMMWLjGsvU5A7S5KDf5AokRBHxLzCrC55KYa79MxFYeZP3BoCJ7SaKDKipyW",
  "key21": "55fkkm7fN5UvPjDfgnuFASudoXXsc1HsdG7zJZwZ7RkiYpAu5L1KDZNvwE7pYYXf6katTwLGiFCyM5LcafHKWSrg",
  "key22": "48dmU5h4QmTiT64nBAXz4JUw9ntb9gVJpSUaTzMEgpuC5FPdEdsbxzWmFsgc3jugnMroP9m7AH1oTt4kZx7kndLY",
  "key23": "2mKzjNtu2Znbt4eGoRkpYeUkS3L7M3TbyFzhrRj4ZNUgKTaC3TBFfsSATSPyd3myFfJY1zByUdVU9DyYPst8QC5o",
  "key24": "5mfxKhXsTXk62pZGLKG6jRKh7D9cYdb1KoZrZWiCXh2EGG9rjEyeSFqQGUVtf7pLhrJhFCp2DswMpaWFADRuRrTu",
  "key25": "4urUZm6Cwb9pEMVx88VVsC5n4J5rdauxTTwmVwwBDQNh9xnSyuRp1q5XXxs2TNWCc3X4uKaoZn835rR1Z1NqnP1D",
  "key26": "5nnKo7bgwE18w1t1DZ7hvSzrFrUH6AiuW3DeSxdgJ3jMTxAa6phWzKdnXP5miAUuxmCabG8wx9x69LbVqUM3Ssok",
  "key27": "36LCLFKgL38RJZjb178h3Uq9HkwKvrssjqmmucgMfCSEMZDtoQ3thNKn3YJa4KxgXiHEvq7aDcMxsA2VVC6ZLz9Z",
  "key28": "T3NSKDpZ35Dt6uJ2AuuyDxgS4WEr9BBBUThhspcgJBNu5fY8nU7iXBub3FLUJtGTMXvi9vFkpR3ksZCzLQNMXW7",
  "key29": "4itj5w6xtmPbbJyjfTpbsVFAqrfZALtqCuyzSVsRJR3ntmk9pESKbPHq87UmKzhNb4Rx2sSFUQxEzz6hwvr5MCoh",
  "key30": "4obTkKiDPXkviefvbdfMQP4gSuBJrJgpaVdzAYXXW4Tj5nQ2AAKkK5Bx1zrtPkLa4SA5mQc15G3PThf3Vkc8Upaf",
  "key31": "4B2DCUQCsk8nCNoRZYew7cwfyjoJ8LgdcGm7SMwWGEv4h3La3J9JAeSs9PhcXPFPjqAXP3BcEUeq7GrhLCJ65CLf",
  "key32": "qVVcYotTi8514nkW63LXj7CoWDzgHDjNF8ZpPvqLKBjW2Bf26bRqVLQP2SKcsFweLsGF8dMZ788pizuNgNoyBYA",
  "key33": "5iuQXyb37vemGq97bNqAm4LBa1w6akc6Gynsv8FMN73zzhAceBXQhDVWBxqL7atjszXZXD1599PaciKrk3QB4ZLY",
  "key34": "PV194wbwE5YUeGoU9W6haMC3Dyzv3mW6mEVA1zDtEGsi8mNYB9wkZfWqbeZZUWGRDU31ec2qVnEjrQtmQ7nxKqA",
  "key35": "W11A3n7fwvW3oNzcR7PanNymBWDXqd1hiNJpYzVobmeCrwq5aS33YxzmgcHb9XQdMdxrCQA7zLnJVCgDxEn5iZp",
  "key36": "5f6aC6SFKhjts4sVgiWk3WUZRSTHECWN74wCGBxWoppPBeAWBKAbiQb5neXAPQvwREfb3hZaSGVWPZwPoUQsMhy1"
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
