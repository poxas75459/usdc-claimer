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
    "5FnPb96W9MHUVJQ6FFtev3tpgiNi1ZppHeoCtMEp1Sjf6dyrwuJrBKTYoWmiCoBr5AociaCMZfaMb2GhmzJ5Hz3S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oAeK5EaCdGT5EWPYH7uxNMBioAFmCNt2N2fSZgLXuAGDbrYXYsKhiU558tR7ueZuE2mj8uShkD4davafn9qpgvi",
  "key1": "5mGLx1ya42J3rV9iS6vZwPMB5RomWeKgqnq7r8ZRnpm3yB18CMpjepN2yYP4GuUXWaejYnBAcpX4M7694NprgW2J",
  "key2": "5v1tJrAQfqqMxB7JpHJkR9QhyaGgrTmEba9gRHJUD47rHgvPj1Ycomggkmdij2Rqq5sfNTqtYRY7jSiXyURTgh6v",
  "key3": "5GBsihQ3SFwnm1vH6bMwAPoPtscMa3PoNB1Cyfgmd3qVY8kFt5fKhQDntbe3UssFN82pDPo1idW9TYjb7vicZxzF",
  "key4": "2yLqLSzs74wirCuEo2Qh58Tc2cVdAsXWZG8wVidmbxtYMAnhTjBJKaQ2ctaBgQPzFU4x71NfAf1i2er89gLkQtAg",
  "key5": "3AEFnZ9bw3Th2ezaLuhKKzEPtNBm8d5RXhE12LbohmzurKR8T1ivW99By3eQfSQcD37VK26gmD6jXD7Fhqya3ytJ",
  "key6": "4Ek4K7ZZ4jgX4oaCwrhFK6KcvsEwTM6wzTkT7jU1Gee7ziSggMY7evsxZkTDNyYGYt3anjSmh6J3X7Nbrs5evjcM",
  "key7": "4Hg4L4h8bgdSeQ4Ug6uPKrM6HeoG5rL7TVvS8T7yAXuNKf75fKDyLzPdLSZbrEprwb2LjX6bMeL6a7bfZCbhAQiQ",
  "key8": "dSbVW8Pvv5rhxuqJD1zr4dm2LaJ1qETjtRhxnEPYHH2YxjmHhtVWAiPwn1cZLtWKd2Vp6TXVJZiDxiSzv4VvDLg",
  "key9": "49rxm3sdpKoTYzuKmA9RQmEUdrrVPjzxMx8PLwRXo4LGzBQEkKPEhNXPMCU7LKvTfc9gQ4Jm8fURZ7fYQCtHF4mF",
  "key10": "3QPmwdfjoZrExX4aSsVSpCn1ST3vm2DQu4nQ1W4GB677tg8UwwzaxvNEDQm59Dkd24ZkkqR9STKVxDCcKiv7VVAQ",
  "key11": "4ouSb4cxwr7c2Dd2jeJo8f28q5z2cMLt6cc1vRZitfwbWwVNfKoBzQ6dV5KVCzPrSCgRoVoTn43HHXnF4kNQzkbm",
  "key12": "2TsPtLW85NvxvE9UagKWuLMLJ6St1MN7JzJhCAdBkqMxXoVmyLXgC334qnktWrcUtP8jknctNWTcUt5XLBwevScN",
  "key13": "3tfDuu3WVXdgm59QJYx9yb9RskWzzPdEBV28vMLcJgBkjJDasGxe7rMnCxqkeJ2P53ARarZKFKZx66kDFnp5ER5a",
  "key14": "4sMQSBDsXWwMztdgC5JguNcbKi7Y9LDgFdVFTDxQ3JQgJRHZ9XRv6fCkLat78uVxJ6YPczwNsDS9A9pyxXYoq3yz",
  "key15": "45h3Ux6DUszckAH3qD6iyPrDFE7vT5Kw3RKZdGsPWWq1hVNcdtvaUrLAeZVrArqN2n5zc2YFPtpdEhgFEERZ753A",
  "key16": "2Jcoyy1Bk47dY67MDTz5iu1iF2cwCvwZfGKTtieC8KHzKy9XNKgzao7s94LqSu22ppvR9RJMHWfWwxdE6kkqnzkq",
  "key17": "45rqrSRYFoUtahncRkaRzR8gkAaTqQGJQm14CFNzVZnRJtH9aDf94dPXmENfaCKV7bXXaYBa9ZkZS3RRuiy1X9Uc",
  "key18": "2dXFtr6hDLCf93K1iP5QFc4Upp6CBuC1f7YcWqakLH7rWDDFq2cT91d2YzTE7Ftsoa61oNvUgjE8PeVq3UwQaFto",
  "key19": "3WYAyGFNPQbFLs6fZwUVbSkHmEwqetHkGgD7EKnGArvyuDjbv7N4NrGqu4HsQyNowHW3yzNabpruSCyD5aDXTNgo",
  "key20": "2wDQeavBFUdgWUgKTbu7GJ55GwrQoN1bup9fwGujacBZmp8f7vnn482pjxe3q3mBVYRbY4WAG3BosbrkjrCFgVCb",
  "key21": "31Y25V5qkQ5tbKnNSxPs5TrvVNG28n8GDVZpXSNHJ5HPHAHrxx5wSqN6NR5SCpnn73wutpeYHYDFdQcPYPPFQ6Fk",
  "key22": "4RFvDuMU1vyZku9879NbWdzcJfTWzTCLHm6y2GEnw4yPGDNj1aLqSeU8oWXNELnVhk4K8tpPYQEEYyAwX1kGFXL7",
  "key23": "B2qznKCdMMTLkn2wiLtnopKZhBujDYDxLCF7swmNkdfHxRsiQR85qjnSb6KLdfLyfspCi7bCkyN4GqHqzP4zvED",
  "key24": "4o2ttqwHFbrL6GkciB5cCwLvXqUx9JbMwYMxe8TcfPxa8TGviaEytrtDqmmCiiymhdv545r4uZVgueNas313NUB",
  "key25": "5R1UYkziA8UJgHxvMAeiHAPgXobjtTk23RtcAt9ePUDW1scVbDx5weWL5eAajNaH27ixXet9G21hTT7aj74av1Sx",
  "key26": "5QatszrvD43MungaTdfnwdsZyqDEoFciNknvsdXBwTiZMY4jQjL8yRZcnCktZzCDbsDRkheha9ZSeVx9YRnPx4dE",
  "key27": "5KmbpFRZMSfLDHPTWvN9cm1cGbqDHZCqpT2bA96G4w5XvGjRCZEFj4F3tWQGyFNYft2akjxXVZr3T5FANMbthDee",
  "key28": "3HxwCVcnrkErxpWtoVbFVaiAa9PcFxXLkFAWQ1Gr8EPBZLeYCgXqt97wfZ6uVME6WrUXVmQf5ZWhKh7Ds65jktpx",
  "key29": "2NrmTKy1GkKqRYrGegaDFNwT7Rn8gDgECWfvPeYso6yUkLxGqWqSZ9PXYDyvPbDjSq8oiL653GukvXPtR8Pxz46d",
  "key30": "3tcsMtrbqctyEUXM6Us8pLT73B8MLXUZPWjCxw9K6mR8Dd3nduhaSCa33hH36BtLFaqV3d48tckRMU61RTviuDKW",
  "key31": "9Aopffdwj4ombcJ7XnCaDftz6LqkqxkNUt3BEihjrWwcUaPQ7q4ckhVjbsQJtBE1Nn6fN6JAtCdFehEg8URgWHF",
  "key32": "5QyFuygRhFWnDgRXuKUcMaHeTsCbc4YqHBm1kgUrcEbZLy1RnmyyPokoBhfhFQ5GjYefpdeV1gcHL65iYboiqd8b"
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
