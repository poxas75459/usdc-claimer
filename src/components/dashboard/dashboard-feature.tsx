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
    "5VJb5DGhdtpXxaJFLY8NvP5eixNt4kYU5G5cQZAfnqjoqVru4Sb9VfJzWYeRBsG2Geugh9N2cjW18AxBpZYxny2H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2psLMQ5Ru2pd8auEm7wZb6V5n54TmEixVUzQi3xGdpWycW6JshDnS4eCVQbWWanJFFpq4fZrANPKxnN72jy9ABmQ",
  "key1": "5uagTzGhofrTrjW6s455PtoWxGpbYA4gDQrkVmjRRHNyGN3t4RikvFp8PSZ5CB7abWsRF3BYGX1gRWntJ4joa3vs",
  "key2": "24byGVy7aHBJHv2tPatwVBhBMfG5cKD5zjqMQcjJwpBKKxHX4eBB9VfufSVyCHDJWJGJjTVsRUX2Dn4LxWgnN6dn",
  "key3": "4c2GWvNHz5yAUQ3AeMLqnJ9E5hwzpu7sHhuuH83rpkaZq5G137S6jkDF8iuNcgBUEz7DH1WJcEhDzBnKfXisnydU",
  "key4": "ZS2awuZcE4Bi2saatYpuYXMfSJweJ2tVqjBQQLsHoZQhsf72zPbv6SRspiRerosiF7acTEiVhYFaDGKWkP4yh11",
  "key5": "4Ja1kdN4QtSQmvZSyzZVThjX7acF1CK14JhG5xYCzMG1esrZnfa5LU54vheRxU5HgRxpkRYexvHzbWhzfQrTmUzX",
  "key6": "3TtyrD8ueQoDpi4DDBa9g8kuqHZEVVr3k6E4z3As4iEpVGpRBQzv6h68L5oAfPdVVWHdbc3zcJvizJpiEDG1iYiJ",
  "key7": "qyYh3ZSKvWx6Zth5wST35JK7tQtojwDLzUqrYUXLdDMBmou9HoJ2ww9vr3hhFVyMoh5G1agR9iA491eg5B5De5c",
  "key8": "4gG1ypL65HSqt9QSWcNgnrusgZn1rf4HvDWNe23NAH6nwwkaCTF5hXP1Wj79woBTNtktawBnZWQbFaJvWLcZQ52Q",
  "key9": "5MRDY8kxH8yyJZtJPfT9rY6Frsk9Ex8tWYeYydib1viVRq33U6LfAJYR83firVeLQsqa6vzfqVgjnQMKmyaxdjmr",
  "key10": "secME6kPzqMeYmhgGwp7N3easci4w2BesDq6qC9tDGmWkiQTiaWyHZjXXWG5zYCDxrgmUmGoDE79vuNQ3Hxwwu8",
  "key11": "4avwB6k445kDM9qCcKvxyZQ4DxnV77GqLF9TDwAyTJPGgZF26rCTVe24TefgiqVLDzL6FyAc1erWttA8yrdxQ2Po",
  "key12": "Fna9kH9YCi8Y9NLC96Gy5GUz6S3sFFAuH9vWzc3HyaLpGSUfi7VVB14YoGex5JJFMFQcPSHKpAwrwpgG4wFe1tU",
  "key13": "5aEyR5Wx1ZpFYro82kEc4VSsRYGGRhgdr2P9927TGeQKFRnrtyJnQCMxGS2a9ML7kq6UBsUUJsGZLy1wbfABZVRq",
  "key14": "4tt19XZ2KFvpqf1PMhmjq28wtARaAyiZ7r1tdYgDo7Hi7ExBLZVdY6KvgL23imWmkntsTimRbtgEBZWrYuk1k5nD",
  "key15": "3Mepo1SvKHVwDA3BMWp3GpY7vDeoFuPWmGqAnpoaKerafFzTejhurkinvKEdCNnw8DDvZySsyRt6zkYQf1LbszJ2",
  "key16": "53hWnQbvaFQ6oUeipvajBNQTF8dtPahBxaS3Vi1ZzDPfZntFeLgSMtNPwRKfVVXXph6xkzfJ5sBS2JW1sz5yquaA",
  "key17": "5wwHaqRHerzxzkk9WkfSWjoG4v4JjnRSChTwfmeohbW2bQxwnz84D2GS4sZsaSNiSVqq15KW24GGNnF5536a4EKh",
  "key18": "29cHgvZVJTS5UvcXALrdmtCQ6WZbfMVKJTez9jNCK93MhR4PXoZAVoW1totgva6GGxVd529FkcyhCQRiZyHR1Vec",
  "key19": "5MZ5QpwJbakB1ATemj2aiwgnrQDMxFDK4ZVKzC1rbE44VASucCXBiskonKbJhGkeN11KeRPYid7Ghn1QSH27tq4i",
  "key20": "B4MDKJhmCcjAFhc3PKwoYsYUc4cfZvke9nU5G6WosJL2R2v14cfPdLCdFkjbMXWF32LdvnPvYjn9PR3YF7Sdbw7",
  "key21": "3gEQjwzK6rRQhdQKv8PXgbWxXMxj4w1XG5y6jBF69D6Hxe2X1jGScfPA7brQfLpw8WRFPtn4c4uSRxawwBomKRTP",
  "key22": "56SrLEMfhp15teXCPtyiyrs7nWA5CCyN6x5eX3H64riChtLYJCr8QG2zWJZBPNz4xLv8YdFEJkkxz5huCVoXX72j",
  "key23": "QZX7bXk92CQTKF23aRNMFy3L4ZisbskVJXw4wrd7uF4oMutUgt6Lt7LfCKqgv2JHCbwBdVderCKnkCEgYWuo8WA",
  "key24": "2jXic7KtAc2K5EHy51EF5A4E5GXvag4hUWD4WVerYK1MHoayXi6LnRYVZv6HqbkmA2MZcJdWYq8qPPjoo3sk4Lrf",
  "key25": "3Ab7WNf7ZFumfJw9o6CpHMozv2L8mQpo7uPNYW8VRQ6F3s4yiDWeznKboxuny16UXP7TT5i5ynNq3GYSrzYLHzHW",
  "key26": "5oc4sPzhEM2pdoyYrdtULQS5ADtb4QwRAk9HJAM6qQNmmj9j6ysQrwksFdRDzEJkyTKV16TeSKNDdc1uWpfGAYRk",
  "key27": "2bnNzMtumWfhXZ6cH2jfoQ4nbWzoeGQRuvBq88up3JDNxvWYEjxJAP8gsrLLNLaWXLQQ5qNA8G19MriiNFiCR1Cn",
  "key28": "GqdCJQynuYfcL1osfJQVE1bxw86DSAtheJPyGT6fqhRxhS4Ey6MMs7rbQaqVpNJakerZTP8HBPYmt2GwWCdjS3z",
  "key29": "2eVVhXj4AT5GfSxjGjqd8gipiigCL65spPg3xvihSzPBbjSMHt8zSpAFcMWYCgBWhDYidFotHgKT2tsJECdkmbF6",
  "key30": "49ABMGGYVjx8FGaCMrKV6cbuDVfxeau1QKz85ou7BsAJQTBRAW58JSVVbmPsamNjv6ZB3Z79ohrayB4VQEGt42zp",
  "key31": "4GyRf7foDWFViru6LMqrHPhNuDgqvjUp8zbPNuWRzuVzuu4nUa1r3BYfnTuzpG1rwN4m48YLF6bjvXHqTqgZcDf9",
  "key32": "4Tm7tcug1GHbkxHZ4oRjbX3TCv4vCT2BPLqLDuugNQ7vTKQPLjMfSCMYLEoGqVfByPvETyBtvKpD27zcx4DooHfe",
  "key33": "5VopNhEBteMAi3ZyBsuN9uCcwPPpbH1xey49n31aYZ6QNPTqXr4ptt3ZxRLexcd2QceKwM6LuqMDMnqZXuDQLmpT",
  "key34": "56Nmc9vxyvuYJhmH2THtD2nGf95TUgw1MjPmWQJvoZUysEy2n1XVT3DerXrnrwYTKm7s9Wb32dPcQiZKZLTVEQRW",
  "key35": "qb3Z9HYc3aYpX87rrvrZZVQTo3D3TeuEKg8e5pDQrZZeSZvMRC7fgJso4ktcTCF9BvqsWAJtDBQSJBE4UvrC742",
  "key36": "eA48k5VpGfXjUkHgzss9k5dN2u21TP53bqEFCENqH5UX6Fopxcs2tpD6mC6TY7zH2pxGmqmk83bRYKAKtHCu2pq",
  "key37": "4DdRt3MRw1gLg3ZvuHfMQLNRrbGVHwppehYb2xjvARXJLDJtdSvFKc3FUoUMp9WLv9oMMb1Ve1heQymzkxcCQ2zA",
  "key38": "2nAPLqugzDkcmo3HXM3tRzvgyWa43VaJRncYZBf7LRwb9UcYniZpxVqqkU4ezC5UEAKGNDJ75DDkFss5CA2JQfGE",
  "key39": "2tmy66MyxeGBzuutDaG8e3oioJqdqysMxqnB7g5eANzq7dTUkJdRJjtZhxQgDukG7MjEvPGTj4upeY2fZEqtYeJF",
  "key40": "igpgSxjtRkZtycPCwFUKHpgyRt9W1DMDK2TZaDc3YJtm35hNvmL9iaZznxGvifMtPya1rt5ABSj8gDWGapYZcnV",
  "key41": "313Bb2EXgnjTWe3NpQSLydJ4iTnw3GVCd3CdzheYH17fPdzPaoifPT6Cxp9u93g3xfzzFYenTjpQqftShyCQ5WWm",
  "key42": "3NGXV9CLKDPbNC76twy85zmNd9SerjF3wRLtKcrdMHr4VdSxdpapf1GxNgpx54KBSW6jCeuvpokcicQJuwfv2JCg",
  "key43": "4RQCnzWGtfh6b24iBdACWNPh7scy6r5VwBeW1qqH64yUv3CMwquwktgXBHGt48QPvJaCp7DN6bEjXgeCXiQ8rqd2",
  "key44": "4bNkpyb11EL8VdqmwRMv9R7D3tS24aa1qqFJQ1cDGhKGttMp2q7XaeaV6NV8mCpaxH6vpvWxo9ZRbm6sUrhJqsEr"
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
