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
    "5n5AZbvhZY4kQ2t5mcRdCXHLQ898WXF8kB85Mfxj3tCrSdYeEMe7rEHvza7P61pFrXYhr4b3TCqoRyrXvPp3UwP5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZeVvgMB9HhzP5TXW9JMZ4HXbM2aTmGxQLZR4SKz2so8kdTE585PPiS6iNq1tctjHdmZfYpSwcEDYdBrvexXwz4q",
  "key1": "Nqzuk9qDsZAJMTkKhLtKjnu8yU6Vsi1QkB7MudKb6P7VkcVzFRpvNgBZueH5ZrJbtiRoCjzA5WSeHXpuoSZJ4nK",
  "key2": "yR7Dcak2zbRaXtEH5QcAWsr4PbE2JmgVsrN61N1jrSfKCHxxzdk51zPTuSZHBRqijQqEq6yqsqnp7CaF2hviSqB",
  "key3": "2eYatohd7Fd6zSLeXzme1NjEnW6e46jAL6w4ZnT2d6BWs9xPMykbc16kdwhffNnf9HEoE3VwoiGT8uZ3C7tmm8wj",
  "key4": "47GkZRtP75H8ZCZMUE4btFUKkzd8UhofQmE6wiqsEz5Jar4hT1GLGv8p3KKvmZfmnci3xh52wAYcmYun2LTYQ3N1",
  "key5": "FQeFxT39GfzRfGmvTnzqPPfSxzjT2hQYPqhqyy4BUWzsAuJPjy5wNzK46vz1KTUj7X1ZTbvxGZU3mYL686rrxqK",
  "key6": "2ytGiyCapNFMaq4J8qNVtXmjaxirSq5KQXKn2xyxx3LpBr7DZgySMMdUmwopxRtSRSJkkQvpHeMMRSwbiix5QvTP",
  "key7": "4j6AC9nYBJo5N7HLZPdPLCfmrerxSTvdsZuqwJcoUA3zzMwLCj6FegyrUk5sRQi4rwHJ1iZggMrjWizjgJhhARQ8",
  "key8": "5qn3nqPVZV3AXueaKh6JZdcmgKjKMMGciMMSHexKayqrhqsv9GVg5gzuCTrQLnmg7oX3q6H38its1w38F6LhYM9Q",
  "key9": "3j6A8K3Tq2uNnoCUAFfJSpdzRPJQXPhXT5ab7jaTda7qihKdAc7Z2SFipVLsiuG2Yfp5f4oHyb9Cg8QrDVQEwQQy",
  "key10": "5PpRNbtsRzmZUUHpptKKcdFSdgA7Dji6zNaf9SbUi96A43BzjySAFxY9y3YSCJ6Eiv7udqUB4Nhq7bnnvVdZZaX6",
  "key11": "dGmbfMLcLER1K2ygEc4VV9UK1QMn8qgzSKMUdyNNZnDnp7tWfwUNuSYeAmpqFzZsud5SRiAeE5baJyiG12vf7dJ",
  "key12": "414EvnHV6ieMQytfc9JVy9trnHHYR1TBp5TTAAPqbKV6Dc9awvvQ5L2Dy8Cv95d1tjcXCzhWXU3cSK3AsnboyDBL",
  "key13": "iAvBzEy2otyKmaYgbDcUSkg55WLQtvVXVcC5CqyWvcchF9qTFjRm35oPDH4ncTzKX8SLGR6zotx3PBGhtxYpyuo",
  "key14": "2Nbud8AsSM1xCYdZ9TDZtmXy8NiCU3vZxScvpR6xE9wXNYg9SwEwKPt6vWkpd7apbozZXxzEkZbXwVpLLT6S4AeG",
  "key15": "57EtVx8nonAwdq7KsCeijz8qowkqKvXmvogYjpHWWDVcvXx5hTQUwU9nDPi2kTbbERFFVYzWLpk17Gzg5myxwqmA",
  "key16": "2EafBXhfG9eCj1HoJkdKMQD3Wg5bw3kMZuZgXCFZXAWoiu2kJ7Xt2EKgmTPRxY9jdwNWMaxTp66ZGWvTR4gZMpdz",
  "key17": "56HrpvaHi82GmsgdHBYNsu5svbj4UAxRj2Rwss6SQd7A7bqAjNrhPXGLvj69XZhNstUB2r1QMyWTpTQDznEVt1io",
  "key18": "4uzVEJnrw4tE5pbRT633mrH6EwJbDqSR3bG5zfn65TNRwRjKz5cE957AE6XqKtKKR3yXw6ZqRV7fuJFMaJ1YgxYa",
  "key19": "D9uD3HXdoM6PTNuCK9sGF6odVXwsrqoTAkj9jbv391y6awmAotVePTcAh6aPDhz1eiChBtNpHm6p6NdBs7YGWfD",
  "key20": "TLqtPWrWYAc9EePFrTybrwoAJ5w1aWpNJTJr4VtACfipazUDzKiM4DGncLncfZ37jNC69JDdo3KKo1mSxKdXFDr",
  "key21": "3P9VcDj2eZmMj67oNoPgXXmdbHspmTURn8PWKcEa6juaVu5vQ2hdhesK64eXk6BGcxRyAWUWZcUPH2QpBmpizkog",
  "key22": "4oixEUpfGTkvGG6q2L8QCMYEQ2XhT4uSGcyMD3ZgeSAxk3n1XUsTvu271xsmDKMkA3FiqQAchosi4zTBJYUsPfpw",
  "key23": "25uDr1JmBKnAUarCW8XgZrmHooDCrpmydNj8zihvJ4ffWyVpnCyBMEBBMV5JVkaCc81itDawWKu5fKJQiXJC7mxY",
  "key24": "2pVx6NYRsnTrjKnqS2YrJm6CSWSfiuD3rLSTZkg9rZNVfSQZzdppCpCgvkg6wcBJXrifwXUrqBafq27r9GUEfLPF",
  "key25": "2NyejedXt2P6YdnogRsULm56C4ViQHUjzgmdgkEn7yhPLcKUiK1ZtHjXJ3AWQNMJgViEkgTkQz2jvVmuQa6XGaRx",
  "key26": "xbyBQLGtRL7LKVgVUiDXKqyFj8QA5ZGw8Ai6EH6j6zRTVr7p9dxU743wGihL461ZiBiA1hR8SNCw7WJBnzYrhyV",
  "key27": "3us2yG2tYGHAyPZvEaySrMVNtm5nF4b2YvsiNrkeJzjRGvR7e8Z4sYxuQdEVrujr8RowhMdwkghvCE8Wr8LLXQk",
  "key28": "3XYhQWDnmuv2r5wi8298MdihJTALHEc8CsFnS8V4L3YuFXpa5VeJFoNUyPSd7yqxNWvgHpCjtaCsmoh9nKygM7WC",
  "key29": "1w6DXprUn2i9DuutuyATYimzxjQqvUb3aCUCp1xnogUHrhkBPUPQSb13V8ra15BkAfyqY97sH3ek625WH9f3HYE",
  "key30": "REyNGGUgwdesEJxgjvmKHFGrPmazXpLYEEMsAymUyQHjZvFtAjTcnhwESjHLJ1uzPWPZ8qM3W2Sitjsyff3Xf9C",
  "key31": "9yVTiJfrPi8q3oFjST8pWny2agre8VBdSMuRztB2dBPbb7aFTpQLhmLXyHaFR5L4a2dBDMoMigu1s7NgnstF5Fe",
  "key32": "5MTseUDsAY3HyF3CMVM2MMS4y8Mh94W9ojD32nZRkYkoWyeRsHo8WPPhEPHhAsmohCHiwQjn1jV8QwGk4K61mKiP",
  "key33": "3bVNsowS1vMMXh2yZqEW18uB6HpmuRRBrKUaiHNW3sQyW5qihTaiET6kAKWHzXKpDVrFxiPCMFhg5VQd6kJtrTXm",
  "key34": "4eU8ZzQ4VvLjCGhKF4xshDQF82vK81HhymSJJiv8ezLSDnLjMdcqeJWfeRWYNSGh4j2XKoYMEWUckMRQKDJEuLNR",
  "key35": "2QxV1w6jJrxxGn9zx4hQJRBieFGhXrCQzPH3wife9hxfDjKetCzgiks34zmmEgrFDGxTbw1j9mVYRpNFzbS789KH",
  "key36": "2DZkrUZe8hH8ghucaE9qG6ka5ShqkiqiCyedjnJXFopXMYYs9z2cYABSSTGVzbFjKdpiCuFmbpi4oUm3B1BqXvmC",
  "key37": "3dR6w9GfeoBnawWJksd2A6fihDM6aSvXGN9CcyyrtmA3CoboDp6BJon8uX6wmUTMyt5bHaJKx3jWVHBwJScNV5vq",
  "key38": "4FUBSVLiyipnR6nsT5tbFKeUAUcywak3zi5JT3CrJ88EiuUPLhwgy3npUFRhbVqnSgEHZszpf3CSmZ5XCj5438cY",
  "key39": "hZAXzroRcpv7tVS8TpuE371zs7cLbLmyVArDT6B4qk76YKNK5Zxa9EQuFha4gaW7ScHwGyoAQ4bdrb7HDZffXxx",
  "key40": "RmoKQwgeVfRqMfhgq4U15r9zWv4bEp5AG2rc7BANevrbpaiHRDT7PhBPZ8wj5uvUZJmB1rKhNVdgb4cngLPQw5q",
  "key41": "3WdYWfQ3qphYUPvFMfjMGzW9giPuqUymV7cMU6sqkh8tAgeDQgJGHyH37ezoShVQCAsWZ4aojPW6MSBF1Rwywde9"
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
