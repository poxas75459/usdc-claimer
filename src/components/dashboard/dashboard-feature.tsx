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
    "5j5SqCyEK4DN94JVtkccDH5KeJYVijZXEKaVEBrxWppvmgMNCFKWATSXpCmCKSZhm2rPHjzrn4weFxoSQ8DjRqYK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p8vE1CBiMTGixzqRb3ytyQqRBhjLMJuq9tW7LwW75r2oYYxdRaNBJ2Zk9XEzVnUxZRUTekVDE7tL3ciKGJu16rd",
  "key1": "5ATCr3NgqGAD6XbWoqLU1bHarDWz6W2HfxPBpcbFy9VzuuKgEH1n9k4duKvitfjRCWMSBS3fKLJsXVN6Ygx4noAR",
  "key2": "642xxgtZkRbzEFtd5Q7RuLLjokiuTrXsVDBoPS9xXo25bYRQScrLJchRtFXV9kuyZBhp1GgPdKoHe3uR1982ihTQ",
  "key3": "2n3r4CtFvsw6aDPLBa1rFhdXuvndxX7bVi1yj5N11cEkestTJJpsUdw22vq4P1VyxdEVa73Nm3wEQ4YHpGLmxQti",
  "key4": "8WAZZdngBWs4tRZ5XkUyMzXMsTLuEh1pzdj9uU2aYZSXFeBzo7z2d7E539M6bXXGMZMPbsN39oJWGJdZ2o9t3jj",
  "key5": "2AfSfXnx3TWQGMg1YBfZeQjhSA1FKuwQhZWQzojxdF2Rh8wLLV9N7bRrfkuJpAjeDYU5hK9PzjnzzK9cN4G1V2gr",
  "key6": "eaCtoL6jMf5K3FVjmkx9c1BTuKEMp9X58yKHsLmTdvLnum5vTS8QPWzcwNvxfiZcV4RSwYjK7aP8AXVt1Ur3b6e",
  "key7": "661DV8RzD6PNkB6TZLEfaXhKRjG5fwijVDJpSLJnLZC4NCe1gG67vu3bHAmudLMwPPto3iwbYgdu2K8FzHpsj9Bk",
  "key8": "2ghWwKkmhx7iScrf93HBKYyPWX67mBsthZvx8Emwzk9P8gENNKabKoP75B76VxpKnazh2vi1BXaKqRxeavNgjBrU",
  "key9": "2BUzq3bjSQdGhXRbAKNMsQUmeEU6tWhQxENpdYz118pCPUBmfFMvnQYkz7ed6MX9i9CjHui95KXDKSfqCK1pJtsm",
  "key10": "4kgnc9b8AACt8ZrG9RLtPyykX3JuRWRMropVzeW7u5xyvPcEbfbs2voVmcSoqZDhHv7S4jvbcguX4GPjmThFqeiD",
  "key11": "mitRhfzMpKf3pPaaaNjsTQeVaAdSakwLxYQXs4kTPxhWfnszb8q91NThwXLvdfzprBZVCZmCkSMuEHZAX6cBHFG",
  "key12": "5tLnmu5t3z1e5hRgyNHFD36oSigDE21ZEmWvTyp6Ao74miCSngudGsm2PFXBhU7khKhcYH3BBqwjHTJqjYLiPYWL",
  "key13": "3mcgZBZjrzq8SkUe1cEF5Xb2VMUJR1sGx89v2hCsB83NDkRkT6kSDjMLD537vJ6LW2VEkNHSxFheJKhWor5MzZZs",
  "key14": "2Ny9GUm9zrWuBWKSkMgZnwNDbpSWjBDkPAb2pGG3CnRUJ5RGRaoKNETFephpwNpkhJB5VN3Vm636imLuvyBeXVdL",
  "key15": "66huvMbz7pRGfz7AUZKE4TdDrDmSPcqXA4RmYivksz2mfv81ZnKLzjLsmVcduy9gLk9gzg8aY2fsBRy68B5isnP9",
  "key16": "2uC7VsfHJG4TqEQYRhmZqv83DLc6ZWQq6HaWQxsqDBEvAQ1c9556Jx4HDbjC6o9JGcKAA5Wy8azdk1HW24v4PHnB",
  "key17": "5Wbxv2jjQBbEonGypWwSsPJ5njw7XegSnaTdLmutw6iZria72YdmdJuL3Utd3yCsuv2yeWMmwFp6YCyzuFo3eKj7",
  "key18": "5GCxvBa1NXYiK8H2aKzgAfHuSBetyAfDCi43e5zyXwJDtAGkVaMpxowsyMoye9TQRjqdHzTL5jHsfP17mUpgnm9Q",
  "key19": "2v8oKwKdA4XPqAytgbMdikUZ546KaMQnrhc6D1kpFo9M7TbBejBvfUjWLXcpKcSA3U3CxqgaAbFJEN5NXi6tQAJF",
  "key20": "4aqxZgg1oGSWXFgjtPpmipiWeWzNii5Rc3ozFu4nSpukBZkbd8EaZY4FUH5jZLDnxcXQLs3LeqiG4HDhEqUSuMCT",
  "key21": "4xvhX9rGKcMwGcm7iZPdhJ46RjgCeojXZodYtiq5Fa38GWSf2agjjsWzp5NDW138RZa5ZBwPg5ScJavVR7jUsh1M",
  "key22": "3Mrrsx2RaXUE1QySZen8x7v5pNGvUKetQ5L7RrHydqKsbhANcFUGNmL85WDSBVxcRz6iyV8oe82UunMvYhKmXudb",
  "key23": "2JakgMka8TLrzSGfnAMbLeTT1dznCEbdVaxBLTF8S6iyVx1fPk4oQPv1qAuZngHDroUGBqmYis9owXxv3Z7nr8Hx",
  "key24": "3Yd1nnpiwExM3tfVaMy12cX3fBSWbtKqd5fdNn8fX6c8h92T9VazjmEn4gwva2YXuMaXHfMpkLoHE2rXQYJz1BDd",
  "key25": "4AYBb6WFF88bqmJV3HegnKZaczYP2CTAcpnxaPHrgKVYGrRnv4i3wM7wbXcyoiF5Y49pNr2CxAu9e7ZwNSVrN3Qy",
  "key26": "4fGUmEn1Lyuu2Egy9zsF8BiqFijJVJRHowCEB9qJNw4vbT9PsygEm87qLunAmNpuFo3hhm4XDREAtaHKi6sSvtFi",
  "key27": "2n5CCXv6PxJvaAUKxWJTc4kVWiNRrbPNSi27JMSrPfV5H7usnQD3KHKTKUrCWDN1fHfnZKxqE3ZEu1oAiU95C1Qq",
  "key28": "2AgoRrQr6hcYgTZSoVr48AvYkmx5R67xcqYMj9Y5ULNLhqj1ntrC8EFYK6Qa4Zcwo5ZXuzfZ3JW8NDX5CkBbT5WK",
  "key29": "ib27bUZEY6m2sKFq8gaUQab7oCUQrFApov8L45HooFiLapRKHGNEdkt887ZAWMphNYokT7UN1ESzP1Mzd6wqUug",
  "key30": "3gFMudUjAKViChHoBvGJea9QRqz4by51rahXgtbVjCgbG47w6RpHygoefHSQaMyNL2SEPbcdT1sToGUt6EGjqKLX",
  "key31": "3yPHwoh6kkdDV3MVXyBmjud7T7JK4CpBsvwNYQ1jbxMvUV4Ktw34GdxKsi7vbPA9eQJsiEmiKZkdXzQk1pYEm7RD",
  "key32": "5MdAcMovUJaeWbb9L9HJ6EYbGGDbXi78UTZsrXP3rWumQMRQ4F5RpJkzHdoQtstYVZ7WVZ1uNeG84MeY13UCpyPV",
  "key33": "5un3H54q7gpLKMEdTJk9Z7R2L9Fi3wzPZJjamVtS4hqXqzV1zHSJfVXpNDV369xjuLJtXZvE6yLPeHehp6SHiHas",
  "key34": "5TMHfucH6yZLr83vcP5jSgCdHbesQnCdu6hrKDfG7WMrXUgoiFFUiiETtNqWCcpLG9VRbFoD4hips8wwGDuZLgbo",
  "key35": "5sSyAUYy3itshLxDcqnihpkAMikoX4kmLEeWeqgf3DGqvkDaY4PwY6FYawdyP9tGcCjPG2VTgkE2r2YcmupwC2y9",
  "key36": "2jppkoGMi9nxDbUhpYz5QVfkkpUtpAVAX8cS2CNpsuJnEVi4LnHLzTxY65kieiZSYdCLjWrLgSQfprR1JpsqoMmV",
  "key37": "5zMgfJgqXwphUfjWXiSu6fUvmoHgiSCvLUqpgCbyGBF3UzBVqk7mNySjcKJCjLcMwg7boRrFFDTfKER4gFwXS3Fu",
  "key38": "4s3GFmj3o2ez3wAhT77TeB4dQFP5oR3zeWNPoJRiTudNkXgWgG7wGesJFeRNd9mQzPrxs2YezvRDoz59u1d56Hfo",
  "key39": "qgTAtFXUEDpJT8tKAsL5tr85fZeRcJLgjcXBWZb1DWVeskBS73xwLwPFqUhp7NKTUcj2ipaPSNJqNzQkrqGaZa3",
  "key40": "41acZX5QYGn8UK8g6GVDpXQkbirNqtJoHwCkqYFSTe4FzEjSVCyzTNeJhCoGrREkLTHSHyjKfR4aftSh5LN3FQfz",
  "key41": "2CbpDrGqDuChp6rmu4iq3MxuFvs6khShH5DfS3JmtpuLQtaSGrzStnhP3cnPFinb8VtLQ1gnCvnAwf6p1sTzsABY"
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
