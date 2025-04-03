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
    "2Y6CEyA9tnoxVHDGn94pboF4zSP1Hg8oRTkMjaTdnH19ZxNNcqzB9Lc4qZ6exEmHJNPNt294tLUe4NF7tm57xbze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cpfbnb1soamCScemyhuWLGd4M6GGRbRdNSTTwZ2Cnc1RPKLVKFMPVmoQdtsKHDb9huQHDfvyNcdwmEfSBsjHk9P",
  "key1": "2m3YCUMyvrPfsgam5769m5hpzv8XXpMmt9hoAU6nh6TFnH7pWdXviaPCoVjn76VPemFSne5aogJsz7VegtJ2QQXe",
  "key2": "3oYU6MTeDDPUUTFrBNgujnLSfV7pyUzXAZFCYvBSWN9wEmMzADcNTktmqHb2gSZ9fGgtEBYWS6gbFWi7kX4GgdpG",
  "key3": "2k3bV6thDXqj6yg1csYFKJoKgTGfACEhy8Wtxe6eQ5Gv93Z8pD5kffa2g73pK8pS9q4CGmV4KvKwuCsaFhWRRnmq",
  "key4": "5hAzf61f5DzgqMPRDLGW2QyCvTH4b8pjCjPqFi9RAjo77XppctucfPxxpuXkieZakFHWpZGLR374pbs2Q8QKFsYw",
  "key5": "CssaNWxAFRzTmSRXm6DTF27cRVbSrfKvYzF3HFszkSDeHPu4Guu8N8b22XPyrtpygAQHs6GspfPxDSuvhdr89xm",
  "key6": "zwyDSTvD6mAqQ7zv2FVuBbDfUrzfP5874d8u3BDXKgSG77TGYDQbMZDDcuDQqgZGp6u1t5TqoUCi5DHnfB2Rd8F",
  "key7": "4FpnJrfqix6hdTUt7Swj3yEsGuyDv5PEeVPWWdphWirHYKiZK5EJy41WFGcpB2spwFmmkiCZj7SeGSvPFzLEoSTp",
  "key8": "6gEjhyk1zotLpYAF6TJjgGeLDmzkGVxn5wZfUzi8xK4T187eqNtnJx3D8x4ivDG7EEPfV79kArs3KifFNYeC4so",
  "key9": "AowDoUdmfitpipZVeFsfbMiLgRBXDb2byGCcA9TxeZ8qpAMtWRBRAAszUbiY1UGsHasapUnoqbzYLCauuxsKE8b",
  "key10": "2ezHJJq9NkQxYnuntjUZyADagqZQMANGnq3jSmp1kwW68qtaLAe1nHxLF7xiGgGB1LRqyptyvThDQAJ7C6LRUm7t",
  "key11": "5SsiCm4cK6MxHtaACS7sesBjDj3Px7tc5WTJV5q986zFHdp4z2sqiHaPfC3hPN8WS9vHc9xhLg2Qvg3ThggN2YD4",
  "key12": "2gATE5JXN6uhucYsSgGuU9qhX5H7LMevUmvvJ5u9GxfKYF7i7j7JujaqokorUG35qYjkf2XDu3p4hUhU67p8eQwX",
  "key13": "s1P8TjCTWvuDD2ZE9Hucz3ha8vZ8ACmFVYzoojYRtE2V7tPr7WYL2HaucWS1Rnw4GdXH6hw6Cag7RKsiLmkegLy",
  "key14": "5V99Z3Cuh5UteiKCK61MUYtzjyhke4d1BBhvG4Qvtx1FR6yMjSjh1QExgDpGEwNazhgpmxRm6rQdsRzznH8MAWiD",
  "key15": "2RHdHdHrRg9rz2fAFYC2EEr6axGrwwhuCCxBaDSVPqsjcvJDh9qYtASzDgVuFNoWg3UoGhqxd1yebd99ebTVoHTj",
  "key16": "3QFfQtF9pjmXrKBFvGN1mYAeYVsjWo4qgBEYFjtXxR2gL2RxwSU26U7S2zU2pEeiBNoJJwzHJoWnLK5jpbtsTSxj",
  "key17": "2cXE3g26mkbPg5vophUMp3Khw3Trp6f5MSZfqFjskskMVT6PcDCkQo4e1ubR8yxVmBHM1EjDdT1UKJw1BDCEetua",
  "key18": "66CfukXNVvbknyWgzzDWpi2q1bN7GXD6EkX8NzUUMDTjsXYyTgpax5CsmJGKxZivwbEcNkCqkDCZbqCyucREfFDv",
  "key19": "2i7dJpXhxjjydaq4NxLVUYviD6gxnksVH5JcRsMJSfxRHSgCSTxQsWxConijnmjGLrv534vD2fWXkg7hQEYqodZx",
  "key20": "3Lft8yyyLTHFJFY8ZCTEae8d7aiGqwxidGjqYqSRM2c7eXKzAXUMrNw5XaUisAuCpwZJQrzovDstFqeHwNXbKkPT",
  "key21": "32eg7nPLR6Ujfbwh1NPTPUEbZbKiGsHMhRM1B2egQk3absfpi7Uz4RD1ezEkndCvUdM3skwSVTXczXmNQ7dkVuLK",
  "key22": "48xx24pcFTJHXL51iBG6YbxeSe6rVMzrL3w3CG7NhcUc6kpBXe4qymMn6CRTmtKKXpvVCLridZDAquWXrudFEXLL",
  "key23": "3ZEEsDM5wggyrDDY5dV9ofmiJwocTWcDvMdyNveg4659CZ1EDvRjkk7nTCGTDS7sAb3hkyHF34n2CFrmgWUv1hFn",
  "key24": "pd1esnBn2FhUUuyzo3frqArd1QJJQ5EauDwe2HvnEWRGzLA1ru9CWCbhuDPgcFY7vczomMVXvcdKus2rbhauCcn",
  "key25": "4sXJa8mLJrCPq9iwXx1K87jWueMxhgiLsNWEWmxJBj9MHaMauAaVDG1SQs5UtqQ2Mp6N3XayBnkxwV4TJZ3e7EqN",
  "key26": "ayiU7fFbQvrtg55LngYz8VEec8JAFvJoC7P8S4n5he4BRc9YaXNXkdZpzbPo9KG3kmDysb8D7ke5YM7cSv5ZksF",
  "key27": "5MprkpwKpTae33qd5t24RpS269VC2oVYNbSUNmA3nDMRxayejWVVFyciqcEAwHq9fGdPLp6UC9nN4yogA9jQFrqu",
  "key28": "2Vz2kPrfkQt7HwnTFZSo6DMq3GSfidENs12MTfDjGpeawKLu7HodZFidcByzhmWyEjTjCogmbGdcCCar36LVLHPS",
  "key29": "1kposR8HxtfCYXU67EMaQpT2VnCN5Kbgv83zJEGvDz11RWUupEcgD852tW698G5jMT1EBnFco9LUxXzza6DYZhW",
  "key30": "2hNSJds8ECgFjSHPm3fSUxEZarZjfFiXXJZzfwdANKyNhN9KYLRzPPyBaGZDRDPgsdnsBsWHNA4KxbPGGL1TMJut",
  "key31": "5xn2D7PmJzNuWF5t67L7zkxfZ3U1EcQ8qmM9845V6bjFa8ZB3UJinhmMtq5snRTRFtdcFSs3pHRMH4wPu6RXUZ1y",
  "key32": "3KynuMJSaahVJwz5zF5urT3DgFmfbvCxciRo8dsGy7bEadPA2vcfwo2qpo9A3nUkXT6H6Q8xkwGb7oa16PEBvmUG",
  "key33": "32zS2wjZsG3Wa9qcU2fbo6DXkoCRSmwkkcuvmJ9uzj2jSZ46CSLr9789N8grN5NMfDjLUGAa9SWxNDsW439nQeNN",
  "key34": "3XX1YXhjA9JrTRFC6boXCy3HAdKLwp2TPPZEFNc3GYBKhqcaSyz1HfEKZxszBcENL6PsMxisFMewkRz4f7TECzLE",
  "key35": "kMhSS3BB79U87Fd9bRUNAw8aR5PWN45EWjZXGDEoxPM8PJFE8qWG5yjzgy22LDX16cSrfTN3xtrS5QUwrsdLWDZ",
  "key36": "5F9V3Ck9Fra8ymA9MhsLskydHc1PjL226rDP7X1BidKAGVDMnXQ5UXE95NxpXdrbHXZmuxfYCVhAhXDH7jwb2b4z",
  "key37": "2c1JU2ZX2K2867nCb7Y2vLMFzwdCaqV56N8ry5XKqCubpEQ3EppT3jcUZsonJW7CqBWXwKovkSmVk2YD1HoH17Vb",
  "key38": "3KnqyH22dx3CdzcA278CrYoAv2JCREXepdoWDjFA59YoSJ7qjetq4ojz9jcEYhAWALFr8TwqSNN1qw2wWiHeDk5M",
  "key39": "5Ufn5CqC4e6Cj8CKLEQLYEs9hPRzNh4WStqgYKH8HMrosYcSTYB94D5XJbxMf1DcbU5RUvuKpzUwr6514u6eQJJ2",
  "key40": "CNcPMpLCVgw3ZmLh1mcPJ2AgpGpmPB3EjhMsLHRrLFroQp7CJAV6bZd44cAiUJJ2NvPE3RynSSavpAwdfso2qpW",
  "key41": "3TuS7MWnBvcbLnDGW7dgSgLCbfVNrYJPxjJiCbBaKmp5GECmVWx76mbGDgfCLgfcNuhvxLgrfnTJD7xprVm5R2z4",
  "key42": "2pWrFUp32KciV62PvptJ8DTiovgDnrEBQMuxGua1b1K9Kdnhjce9axJjQwAk2m5dpPukX8o5h86p1feLwWp1bAp6",
  "key43": "3UnTcWWzg2vBSZc9gbbGZxaEn2E9YPQDp582YVDAnSK1vSc2wac3tDAd5Z3PuTwv18soSMWjwZa8wrkmRnfhCvfo"
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
