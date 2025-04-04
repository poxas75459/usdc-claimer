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
    "2k7iWtJVA13B8vUdU5CaAuJ6QJBAPU4A3m4cyNhgyVdsj3QB8uUFmVyFUYYMWneCtCUyx9vMiJuga7cRHeeeDGgt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YZQQuhgN3WJPEDop5NTaX5YamHn1yL4m6VysYuQNqEpjos2oknj9KREwBVUBpeWkDp18kpY6A8q2ENgaQS3f4GZ",
  "key1": "2twTsYSDAyP19o1cz6RnPHjSBhRoJRzZbVnFek1g7Y7GydHV9oqQvNuG3thtvBM2vpJpUPyWih7zQe8vm5c7ojPB",
  "key2": "2QRsLpZuaaKGUEuvLTR7sxywavuUACuSv8644KddbQFSChr6skabgDzJHmkLmNgdDXzNBi5Tf6Gor6c7zmkLkX63",
  "key3": "64yNJdnmScBatKg28RmRjaBNbBih6qBc84iJTrAjRLNmETHpgpM9wf8k2yjVJv1u1xw1GhzVR8eScoxnPKht2we9",
  "key4": "4kxr3gkK5Pp918dBP8Q3LbgRxnp5d2szPGt8FXzpREi8tPqCJ65eiyJb3mPSWBjCCVBzYDZxzgH8qScaxy9wueT6",
  "key5": "4px8j2vGNkbD23bnZHEnKcGB3XKsrd8vJgUE1boiEER154GrDo86GEMCR4eQBAsh5wZns5r5FETEuVLyBPpKBMM1",
  "key6": "3UsZVFT7sVGKjKRgiEi8H7cCEaDfyrk46XQRGGS2PrA4P8zojyVTbCUhiNw3FkbvuiQJcCHKcFHYnRtgnjmeecSB",
  "key7": "3467YWh9oGawtTKBXfZ5wDJJTs6MeNcZtukHHEDht3aZ7ZHQB6d8RiJxYg4vtx9dhyNN4V93x6sCLpoSojaiCM6V",
  "key8": "4qXm7QN2h9dX4TMfYscqMw3n5Fmqg41JbDXFn7gPeZiX6JmFEaPYZdgwmANGdT4ZiGbr8cXhr4qYA6h5pwY4JWvw",
  "key9": "2SyhRrZa3GpQCJMm9ndSZ1HM5GDcGhCNmS18xmRAjNQzDFetg6ASSGzmvDFTpDsNgwY495ecqjmntW9aEjihxe7x",
  "key10": "9CsJhCkeJEUoxWc8Kzk49S2nPqEDX6XZVJLbjC8v73fqD5jsTgpY6ZXc8TkQh28X65RurE8PRMJUPB2XqsNLt7x",
  "key11": "5TkuMYK66sagU5JxUzHTGxFJDLMACP391BCWEEDZ6YHHTbeRQW8BiRzamh1LmvsCrPi2aTHrDWQyDEka1r1cw5hp",
  "key12": "4rYYQzM5MDQTcFVgah3PjPcg2tek7Ua1Dyiq8rvzpQ3JyaSGibCn5LUHxzDTW4JC8gqnvgUiuNZEGZUXy9KHb5FS",
  "key13": "5hA2fXFq4GEgLTCJN9sRbzzTqmCvRNPSod32cRrpe1PqQKNT6TKgkQBWGW5brb9EKGxac3Fd5AN84PUesetXggMT",
  "key14": "2roe8oquHBdcwGz6N7i3khwiT7kERDiaM8CDtTLf8cc3pitfz8TZARF8JyZKGqeWBdfZyFX9uELHkqSVfFGeG415",
  "key15": "5pgZSoRietrNiBKtdrRH5thhX9jTP96hqdXasegHoJymFf9W23oXFAKR8tjV9gYCYhVt6qpFGUe6JhExuuXnC61q",
  "key16": "4VNW7EmKBiQXyv41iJhZGQA3iAGqQedcFGpwNHUMgBoaaaqA1NJk2ieujAv7uFhhPaJHzcJmT95JmkjEWcMWny4X",
  "key17": "4zkeE4tpGjMPTaMdr4tihmHn8rbtTBNf4NStRqnyKXYgmA5BD3sba54Dg8s1WVhpp7Td9Sgaig6QibNmNe9w5nVC",
  "key18": "ZFsiqusbJPqtLmbWh29f41dAt9DLGVySkbAyUob5LD4rfr9EPrK9ggmZKcXoz8mwfYi42XQHWuVfX6BzC64kKn3",
  "key19": "2TJWxwk8zjEhfGj9A4LSxeTnwnHTEv5J7jMto26pfaeePDN3UqaWL8RmVyXX3FkERTHcpRTvAcXPaTB6Zk2VDnH7",
  "key20": "53C56wxoxSAbJMhmNY7Mv9uQX7KKMjr4AAyDHR61SDGNC1Fdch3xj4e3Gs4D4jG5uBdpAYNuGXjVA1MNLFMDtQq2",
  "key21": "3AtmEX9kgXyjGEgdSsqeH1qqGEL8uY9fW8JtwwQE6bZ2EbgHvNm1QeMeUiK5GBU7ng1vwthVUqCQMWSsMcrtRLgm",
  "key22": "57cv6igVPH5MmFiJXToZgMfXx9XjBPp1kwXWbKrbpzvQ9KBLmR7DDw1Ax6nfu1ZLQhvxcEwPmwGKzdiNrDVx26Ng",
  "key23": "3upJXKvV5FRYpBNYxuMdBsFuw9EZDdmAFZEbL3NE2nsb3zS9hD7REsAXbtMv48VRoNJkrWvkyUEqb1x8XW9FGBW4",
  "key24": "4QqVeioMAKZsz3Vkq35MAKM4Xsu2SvS2ArzhxoCdJeumFwrR9C5AUWUoAsfrT3Xnn5HaHEuzVBvHWXZRDUDm5iK7",
  "key25": "5SscdYDJbHqqSWSpqYPfDUiGBMSHxA7LmziMnpA285VFUjmKqxArU4cRGvHzhoSiPKYgMCwvGNUjjCJei7t5sTM5",
  "key26": "4DGzHoHWvKDbqQKikz1L4LE3pAEx6VjEUqUvSN6n1PLKDn2r1yaHtctc7xS8NM2Z5J2wiYkGDT2xnDFW1d16oS7f",
  "key27": "5wBDnr6iB4pu4R3FV7J9khAmzYNunWi4Dt2wDyTVMi6N11RiccDvxgPBq2HH3Kj4fnMWkt7oafz1e7CyWseoLKEc",
  "key28": "56kcTxoQUZ4wNuDVnAHRccxCnGPb3iQmwtnmNoXy4mAXcBsAYQXqnMgUkLLuEUpuDfapQpAW17MsEm8dqY1SstKU",
  "key29": "oxPSBdhbYYRY2vX6YqebYjbAkCBUUCdbwhFHjNMRSh2LytEjRzJeSmhWehVYtrHHNBHYWPYX8W6PusxHFSARxbE",
  "key30": "3bVxsgBkWF7CPRvNu2reHXJCK3nbe37f568yJfYfBqy3skJMdVBmUa4L5uhwTaKPMPgVJepf36HNo8fCpqdrit3x",
  "key31": "3SvG4L7n7JkiwC4GoghWfwUiDGmPB7b9tLLzp4YDx7jfJt7nByaC5GL4kiWf44BupwGaGbBSCfCq1KwqnPDFVuCt"
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
