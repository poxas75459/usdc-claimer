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
    "4j7Rv3AUZHv89fTngGTXFWh7BHuba9KdBWrSR46gDGmLoGR4yKbQytp6QWmhSYcahS3PMo9pJsMPAmKZW54xddcX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27xkM8nCps4bWrcFEWSESAkFsEDAYjRUnEgPc6oVtYQek6gmR4Sx1GESD1FYz5XzLSzYdqW6XhSKkdVgF6FCZrLG",
  "key1": "5WtgwMZ6kivHC3brQsvNqQXFE2XL51tZbSojNP9MiCP92MkWmsfd3uXBrieGv2w2g3bmcnXPm221r1wQZaQHzUgd",
  "key2": "RBaQmGujafFvdtxamKVEp1u29qeydfb3hoys38pLhb7Y5grF4gYJXLXtUihCcXP4Ww8WkkzE5XeSs8hhQ5CoFUm",
  "key3": "4Padh36VeTQmBAVLpue2y5XNJcsgxR14qE8MR84C8GsDcygEdiZbR2Afo5LgsofWhhqBC4QbcCX5j2aXMDhKybzM",
  "key4": "51sQsA4soqzrzZoCcNXH2J1CAVfq7zZhdXUiSDsX6hVXUu8rVMZREHD7JqYkM2radM3Le2tvy518uuujMDvWqvuR",
  "key5": "5YGPgDAeYy3Q9G7Cap8nP4CuNnVc7o1REeG1yJHUK2pFn5EHvfhL6TzCM9j8qoRUvrNpZhGPFmVHf1qYyoU2MYYU",
  "key6": "5GAtyQV8JwP4sPA53XbPQbTQJc46qRiY89TR9cmXCxHrwqutniuc9SvKigo9J8q6SbBzw7VsbCa3mYAPAmkSUxs1",
  "key7": "4b4PSBXG3EHSdjHyPY4BGdxtGyaNeMu8TFhhMGKYmfViynAtoCJTqtCYZ6hVbJ351dmbedWZ77v7uVEPXZwr1WA9",
  "key8": "3JgnR8Tg8jTGHW1LwuGxDSv6HoMNV48RHDCL34cnUBwc7fKvU7sdUuuM3Q9JgaMxyoK3FaHdCeeohPkXisqLSMu5",
  "key9": "2p5X9akG8b5QdVfbYiQoc8dad9XUQUkgh7pCvXZzJavao1iQjTvKpYum6VAVkecUrhrNb2xKqWEAqQkgPaaed6VL",
  "key10": "3Pf2duv3Cazn51KrHnmwZhmc9Phd2Jzr4Mf3h2aTvLCXK21tRsDexXvC2VHtEw4rywn5oarn4tFh3jiWLjuafha",
  "key11": "2feQ1j7VKeSC5XLKh5K9VvsZc6FGEpFG5HaHCHXtEVyYeZBtgkEND81MWwJJbBi6m7UF8R7z8waBpfCgmm4NiBRi",
  "key12": "23mWazonHErPSVNR4tDjb7MvwYKaAaBjtcJXmeEAvjT7Yrvsfx46pgtaHEaLmX4hmn8S6yLR75gifkeZegHzAiuu",
  "key13": "3N9kmMxXumjGaiLzHpzhHj4YDv29haRbCpw3MdKY2GSfWsNtJrtbfTb5cTpbYTqDdXBa9T1aN8BUGHV7cVy274Dz",
  "key14": "45K6uER4KZ27YGiBtQiBet6azkvQ64gQ9MpBkNhwV8e92emtkucrHBh7H8J4fV1s16am8BjNmg4JPVeaettgPwz8",
  "key15": "5icwbHZKHC439AKwX7dRmuWbjKzfVbi8aBdfYZLpoWEF5Upyy8tfQsdo9hXgxx3jVBvvXSrNVRT6eCugddAgsa13",
  "key16": "2r5agV2orKdW4kt6FGuEYHT1iz64NhX1cHaZKUQZbABi7e6ywfjLmhwjSMEGpyzkCKnByw1D6sj5K2SaiqTTJwNS",
  "key17": "4v8NKh5u1Qc4zkwp4faPqGEf1CQrBWTTcdW7bC2k7c9mw81RrQmTnDGdQZWRFXQ5tYxQDjkxMAcaXKmk9jq2mzix",
  "key18": "3U9fJpF5vD6VYY1vn64ihV191VHPciyBSNyBxrAbAeos8ZWV4Btn6uGkRo1sj6BG7kjmVKsum5TCZJp1vf4VCiZD",
  "key19": "2noN6hMw474EYERorQt8hv4F3N8qGePuxXNaNm6E3W11ysfVFJDEu2kapwHstCA2Hvu3dSerN18MJhMzWwt7G7PR",
  "key20": "97ZXzjdsJCtD2JXBHz5tE5BqBi6j8bEeynYArhmXiagCLswPPC7UCYf65Dyw8cSviL7oLeEVtgEZFEqLZnp57yY",
  "key21": "3AoscNJUC2rKJKe8rJTRGkGfpewbY88pu3zeVgkNxrcQGeSWEZyeUdBE1B2gWWcSKMkVWJ9ziq7fP3REpwptENNp",
  "key22": "2PEVKPvaYk2mNHhgZwRoaPkSnJYtFoJM6epjCbJzJA7kVoYZtBjQQgZPmos5ho23FkWKh3UDwgi1Co1SBvN6AVTi",
  "key23": "2F2NxDWVb1BUzrukihoquahQP7NoRjYV8Cv56m2Bue6pH3Z5pcncaRzfGgURjjeW5FDjqsSxnYaTqr2UYEtdQqCB",
  "key24": "5rNpcx7UMai1JZFen7Lns9mqogmaAJ6GwdzdCN1ycsSMC8N9Cikhcrcz1DJVjrnEdr4cnSNs4ELg2LCDWZbtyZTx",
  "key25": "4XdXL54vQKf1iAtBQRq26K694NxvDGubL21RbpHoRLM9GUrASXVJRz1GDoxcbUPxohc9ArneEpcZ4GQFrxuZuKRs",
  "key26": "3NR7WFbXQRoW4fPjLPKmyM3WTEPk1vmvkCkFkvLtPXHuhrsz4Zzt6xKe9mGojX1kAYXNAPSB8vne94Sn4qhvkZuy",
  "key27": "4ufu2KHyLBhfWfe5z9V81dGSynHxJmGBFub6eNvs5ER9MyHCayca3DzYYoLt5Puf8L27WWy71wZKNdDCXtxacnDt",
  "key28": "42Yw4u7sQVjFA9mQyNZsoCKx9sjKKNHAqCFeAPzyJ7iM4yk6peDkYqKCt8uLrP92M6EtzcSaDj7T1gioaLBqnK4g",
  "key29": "4sgDpJwdWsvEiC2isz2GbosjFiiBUDE4WoDGcfG7UhgjLPwwZcLPcd5AR2srpXV7tjoJ6VgMuskvuKGBy4iYPqfM",
  "key30": "5TzzKPFfNHojRWTchHU2sq6YfRGHegyLFQQYNBDvWcVstv149X4JvSJdwGxNmB48YUFH4C4wVgz9GGix8ZcapWhE",
  "key31": "4XPp5Sf4HNncst8NxCw9PDBB4R5amYzXQfNCnywbdLQbe51wUZVqmHMJRAJCdmFxJphKnRknjrTWDDBdEN1JeDS4",
  "key32": "3Zd44QhaDftN5eJ7Tj81Jdoy7vgDRUdvor5zsorZ6z9uZweq2QkNEnUEFw3mebaBUHwuf2xQUykgT6aMYn7MZvKN",
  "key33": "5rTBFzyfQPakJMrEH5o1d3PzUJAFStw6JVutDsWrM77si2DUiwXK86Pf98tGeHBW6bW9gZDr9rYZKdFS334V541g",
  "key34": "3wNBT4JcHuf7LmyHBwkHkGBvijuuLHCkpuYppCBjwmbkVAimnyPce2VMTiCqtKf7dDaKC6U7DQMdjmLHw4ZosaeN",
  "key35": "3fTLPkdtr6xtVHTmgJwBNHUVQkjDhVoRxB8DnovMNuRKWX8252wr3desD7dKcgMfCiE8PmM6yjA7xuD5n7FXt31f",
  "key36": "4hfPMDgbGhUpkUCoyBHtMsRtJT7TpC5KXTgafPs1P6khG1a4uibck3RSju9uEdRjDaP7ppxoCWrDF3opNrhDaAgS",
  "key37": "3cNL4ZggScdW6kixDEmygTF4pPXstzcySWz5kskiF4njzPMb9ZxrbUan1u8KBTRTZPxfeLY1HBE47Sx2sAUGnij8"
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
