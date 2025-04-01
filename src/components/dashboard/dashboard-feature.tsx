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
    "3Ccqw4vXD8Kvd7pMbfSBTU5MV1m5mM3jhyvVowtUHWsBky3xEE1jCKHVmUc75TcpZHe3fUjTYS7J7xQdfpMuaeDM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f3P3appnnwUoXoY41uxG9bV7Y7YcpM5bqhUb9StZe2xuptMHyhrnQMn4NDWNYkHoz57yoUykQA5frQ65L4hMoYc",
  "key1": "3Huf5NmRM1rQv8foPiUexCpZGyQ3KoVySh2fQaJZwPFHyQxFMBmDNujCCjMyNAWCvnpq8EJBcWTCvwCk7u4dVedf",
  "key2": "qk8PvXnemqWU4R3euD6iHXRYWBBMaAWmUSv6tJy7hMjjwKLsPoFoX18CtWutZd1EqmGNrDBzmioYXj3xGqXevVM",
  "key3": "4US7x5iUnq3joRUJ9WvoB219vf19xFx12H99wnnkFoZ9cwEBJcrSxzvrZ8Cs3f3UNvBw3feDyTnDYS2HWkGiEfju",
  "key4": "3t5kMoHkZbv36D95HumKPM1yBTYsyizUAZMrkusKH9Jkkg8TSyrKaNSs2VR1GtfAuptGeuWSqhCKMEELSj6YE9qa",
  "key5": "56izLRGMEfMtepsT7uJJGuq8QadTu1QuLKhp8rURRqSjN9bTL1McHSK7MCH8xQWZLx6y67UuJaPm2YhFKCzpj7yc",
  "key6": "59TeW7ECYjMXYzCw8gLCQ2G1twYpdoDAwvNhZ3F8mXxD6rkn167FXNsnj2c2X97C63opAb9G1HSViQyidU3hMnEr",
  "key7": "2wsmBnmCM8pnQotQfSV3iBCAmvddCDNpgTjH8PpWLFKE6CeRwF7TudyEskXZ6rd6c6xaWkwsa4gPZA1hnJcm7F5Q",
  "key8": "gJuDRVFxqbQ4AzYFEKqDMZN3kFAKvi5zeu4fR2zScKTKFCcgpMppad2NEadhaFNZcJdW3ahyGsmUDkkY7bndQhL",
  "key9": "ZZjK9TViFMszDWb35GMGfEMqEeLjYAM63qqac21FmkVUMSQFg4NAuDAzonLfPcH2p77efPcJEznmekhNB9J65c5",
  "key10": "3wZE3T4JUtgZcXkBeYmMqZAcCEnd124xp7tRrGf2CmUJdKZE9q8okPRX2zHwt5RzDRGJmCwgRpQXpHAtvCkwdNkQ",
  "key11": "3wF6ZbacBViFEQEACDAnRDDhEKttgQ84e4YQMFVxASGjFwGuyC35ijdvFzEVDX6f4zEVRAqXg3jf5v9kgug8vSAn",
  "key12": "2ybkdfaWPNdehX6jW37nKxvC5BeWnEvYL6AFzQpEwTLgtW9nvRdkC67aJA3zRKrAv6YSqxHKqhZ5wnDzDiRnW9Vd",
  "key13": "K8UBKqfShK1BQUx1p89RgBNKDyNKY2kYPwpHy9EWqviNKZy37ipZ5LaM5Ddz9UFLnreDSwuircRn7BqRSg75GyS",
  "key14": "vkuMpXdu1RrCpM75uLa7Yvwp9ue1FSwDBtAkhhpR6Chcps1p6pKyPEMRYPzfjvhocSCFMGicX4abNbGr3mscjVq",
  "key15": "3b8SDSX2C81k4qEm2vA79K2SsaPthXDi44xR5Cg5HS8hLs3rRwVm7sXHoahbrmzaP4k4a25DdhMJxQSxdpp66yJ3",
  "key16": "3aqMYysg6e8a7w57HnCmHKDWmi3BcwiJ7625NhvwC2wfJk5skvJNEGJLExSvasPXKjdxs1qtHZoY6oBBZEGxZKMR",
  "key17": "4WuHH3v4QRCMuSbc1ce7omgs9ZxmBKjT8DqzuxU3NBGWdShjcXnhhtHLdA8fGZfSqNbdbMZJWm7SQpDo6csLgz7E",
  "key18": "3YdhzQs5ExA9XMgdN2osGcJg5urGmnfgXPyYa2ekpvWnwj1k2CVv56bnktHqKrQiruuApGTSQ6cXDqWCkAWxnTdr",
  "key19": "4387cFyxzxsFQEbNP3Nk1B6pmF8TQ5oHHSxTgCpoZjjZuYgyes4V1kmdgiRLad8cyZypJFa9i7h7DVSnAoLjz1j7",
  "key20": "2DrmpeTg6VYsiAcYiuHuqCinktqrTjqXW6ZGkWpNbJJv5tkvjbM1iy2sx5c5sBn3PcM2ATw5ee7aosVREVpEFs6Y",
  "key21": "5uKiPA2Fa57jzgDYgJBL5VxEnY6oNFKryryWjvY2zofpSpARHPKWx5s8ruspsmuLdFeehQMjxZQmXzM2M5HCDMgd",
  "key22": "5JrQ1DrTQhiRPM5Mtt5MKMfGY5hTXimfbrnPz3cnLvG1mvwUvGUyDdcXBsW9A1PuroxuVt4beAUwxYiyPsLWNTH2",
  "key23": "364PsAvfv3HTfhv6QT8YZUdn5o5JHr5whr56GzUVNhpEu9GpNmmiDt58ngXLGjhLRoEXKDHW94Vu3LG9JRqkadU4",
  "key24": "Zo9dy6FjeNik7ATqZRhPjjdYk83XhxtLww4hThXy9Jc1RbpueoTR7gAZuX1MkqBRUVfRukuZH7kyu3VG9jX8bGd",
  "key25": "2JqX9VJvEfpJQJqA2bvQNMGV1uMpkHsev1Hfyz7pMvEV6mp6jeSHnmsf4TJByJrfbVw1LPTZKzwUxPvyQSf6BTYC",
  "key26": "5rvc1zMWHgZpmxfs64qgqXTJUE1o9DLi5L8iUGas1bHRDcH9F5C9SWaH7BqTYTr6RoqWAYbf8rWmmbgpEzDmZRnU",
  "key27": "3fZkPxS1x6X2tFuksco2dHHySxKx9Aq4bqYG2RNdhXGVtqk7d1RgSATJhqH49kUGdhZtHt7Tnye2XupNc6jzMjuD",
  "key28": "5nsTYNaWjENnKbvquWuDwLheLoR4Pt11ALzRu9F7FnMSiBDkppfAVC2TgCzFA513dyYaRHDGB7BdM1kt9noyKZgN",
  "key29": "2Cs6vkCa2ZBX2byxhHuWtRBcBrD1BPB8eKFPZXaxctEqwkwevFHvTaosmup7ea1pEDNQfjdDFKgYEEZgPwZFB3DZ",
  "key30": "utqhfVEoGrCJdQdeRVh3zt5Ap6oSjm3wMSFqKwrQqZ9GFTfP6X3pTexTVu7wVf8HnP8cbCQk3HYyCQerYj88Pmk",
  "key31": "suAsJbi69NmWm2VDNCgcZgc98U87NWYKMYGnE2SEok9TqdfmPcTit9LaDPxgdkzzXxuaUYNuh7kXPSBx8KzsbWb",
  "key32": "2mhKcPbSaiPhyKTnBUMrhwdbHsoaCeBXEYqAQiwYDD1K6L2CGwrATjUvbgF3L1yM2NTXc1GsPukYwi6rvmxTQUHY",
  "key33": "3Q4ZSPkDySYwpJtDUrRD2Brf9Sbst9RyychinaKmavFPCbhtu6GJNgjQWhHob3CzAhvwWLEwrSXPVRNR33zXg8Vq",
  "key34": "5ZCgdB8WdE7d33ddRu5Wq2GHXqYVdJM9zamwHeDZ1QTKfzdpzxiCyeMXbavvnxspATr6ugPbFdbK5XrdxqtKRnrg",
  "key35": "wEisyPLHupbkDLRjzFx2Fkg8cDNCHsQ7SzxCvk85w5zg2fFGKUw7WQ2Pa7bVRkUiFfLMM4NHFq1A7ieHkZJbpPg",
  "key36": "4E6cpNyjZmEA7sDDygYHpK7ZRgxHYCDo1ftmfcLChxE7HUfWZeKQdsro12dtrCsPmzoV9NqKy1PSN8etW4qfLsA4",
  "key37": "2xzqyWAebXGWEUR3zBSqaskRGWNrTxtaV8DjqwcJn3nrZ7ugi6bueGNHSinWWzyiGRK9afdgGy1E1pvUi3S8CQUB",
  "key38": "2Ju3CdbpBSmdmfNw5KfGMa962ABwj66xrvmEJVVKdFksjuCBWJv2hA38P7aRbdV2j5SAncHwZwtK7FRB5yyW7NK1",
  "key39": "3znJTAzYS4hqbDEvLcgwS5MMnLS2e7oM7XdZTj3W1Wa1R6RdAmPhwHJvyTsvPeZ7XhZmiAQwhN8J2EBpwSQQUDqc",
  "key40": "ZV2HsQe3TUU4zgFic4uj7kn3WWTp58xzn8MA4BrNidAQoDcJhs5kSBMZcniMkJwZjHAKjGEuVXnV5DUXZqnc4SZ",
  "key41": "5jEaQkBT8NoTqYgyX85ac5Y39u3LB37f3DzaA7h7Nj6A31oiRjau7u3JHup19rER1inWEFySV5QSEPcaFYgopAJs",
  "key42": "Kxfgb4NXyASLaGkjxYdwhoJzPQDZQ5GsG561sESpcRGUFrF9Dr9R94RqwcnUK7pAWjM3aJ6SJ56yhwkCkDYjmFv",
  "key43": "4F6ntYZkEgZKzcn82N7yMztRVPvs3FGGJGTao3tGJZGt6Y9YhiBumxYRgLVHwFknqtTcQVQgHGLBXtp8mYEgA2kd"
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
