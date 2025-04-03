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
    "4cbJDMnssdKYdEWtGaYUL1VbSLWmRjF2MjvCa41u7WFcH3iAMJrhCc7gFZGAY1dRUPpfQ68SxtuDqZjY6VfD2kQK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24JN5kdvFikW4NNfJ6vhFEhR7XuReVShuCYVkiaQcNCumjvt5AybhAr2us15ihZ4qHFydCwrkayVXBov6aMD3X2c",
  "key1": "5kUbKvPsaX7VtyhGTZy7Rby2qMCZk4iua7JQk8H3W4vv1iJyzrKmNuYnpofC88HfrAejbFqUQb4VWLmoGsR2Z9zg",
  "key2": "5a7ZN2Enx6ctNHuoToSxKTyjWZX8AWQb7B65xjBPnXTSn6WY1Jog4xiTKMqGNEgVLMAijsyeRCvixSamBZxPHiB",
  "key3": "4hwX4TQZNXk1upXkqDhs4mkpPTZydknoEJQuxGpsSVjNs6Sg1SvpcErYCjU4YSSZ7Sc1DiPwUSuDcp1zofrSGcpw",
  "key4": "3TiWHhJuXwqfAWUmFDEBfgUDAoDGqBCEEkCJYU6JKiut9JXwAsYBLV8TXLv1tK6nPSRTs6Knymj36AmazCy64Ts3",
  "key5": "5zrD2ocCWcfWw8XJuX8vHHdT12TKWoeo1pa6PGSmCwr4CfLhy6i6SnMgXHZkzo7pMY9KSK4aeWLrtxV9YzZQaT75",
  "key6": "5LtgLFSE2j13U55TMvmtPDs6ZJnt8bdKf4GXapWzChRC1mwPpWxd5f57nC9fFiCNFXkNTsfM7JMKr3BhGZKPhvKQ",
  "key7": "34dinqtmep7ngNDJEjvqivv8tSosLZFRaYrWQ8wHQocB4foKUQiEtuAAimyJKkcgSzuxLLsRxCrFX2vmGqZJZjcM",
  "key8": "3PuQoDApzTjuFSULcmid3T7dqGTTzR1dLnoobgAWLMQFv1bxAQK7jvWrCSdriTamerzEtUBsyEo9Jqw4zJZ7jNgj",
  "key9": "2ZkjcEXDAqgP3WS23fUkPX8vpdkEUwZshM8RkadvccVgAkJq91kcm4J6bZBsY1VDNLsRFKidxx4dbf7e4PCseNJ2",
  "key10": "4vVQFu17563QThjkktkGGh5fGqqtShWa38MYSvaNayBVdq2MBp74E9kghEfVzbKvrZpZs8KyaizLXdpxWpSERs7v",
  "key11": "5EdN496qzV5821pWJKwFi36EPQzQEXq5k23rYEFfep72fSFxzW1gNQBCuJhqumfXsX4FDzBYL9CzvpV8Y9x7fbKA",
  "key12": "41sk2EY7ec6ksSfjo4aTPastX9qivoMMTQXATPHJAfyvWSYxtvbdYhJLhRnZDiQ4oFBMZj5ArEv4tnnLvEocG75L",
  "key13": "3v4UqiTZ9ghYzbdTcLH1cfBhnqGRsrDTVaLzUdpwKPwmEL7P12iM8YGXm4nxhQDrP16Nn1fDVBzz4TsSC8sExeC4",
  "key14": "5J3hCLJrV9poN5NaVby2eH4i8WPYeeLCkH4zxuN1na4H5jUamki9xF9Csh2Nq5q8LCmSmG6hzPynNqHjkfukgRNP",
  "key15": "xhD2du3sHhe1dwye7mYU9Zr6VfpGwGGw9dbKyd2hSry4SZPAb6gSgHCQuZBgS7QhXYFjbTfC2pxdqjas1bTzmQg",
  "key16": "56ccxx6wxXiM7PrYy874L7wcVvyq57Nx5zEAF7vEcGRGbM6gxRVgTdS9RubjeFhEC183Wx4om7f8YUVefFugGwzv",
  "key17": "3AmmPJ851EJPGBvfsEJtNL1Hn5z3EZTQp6BeaHq38U3pCcS6R6YgfjvWCLP4LSydGH4EvvDH2EWA2bM96nuEbjeJ",
  "key18": "5FeRvhmLi5PTXQ4Bi9FRS6UPoPQA3SFod7fVE4xEVc4no9NZeaUcpKSBk1tRDDgh5qYrxYih56kLRG3qtFsDsrYG",
  "key19": "3hZWmnXiRnqwxLEz5XAoaKAdH64ecejEZsFxVYfvwrz9g1rQUzjPaSUaU596irbv7qgS2ucywuviMmbL9YioNL24",
  "key20": "4BmBHNuWYm6hnoWRtxthvkTKtEAmnbtFG6ogCspRQgQDP8YPBPU3v5AXhatUyE2ob5c6UvKPcuUf4M7S2M4wnWuM",
  "key21": "b9kRULWbocj1x4LZyCzAQa2BAFWn6G8dgrGAxLj2NCRaZiURLKCzAZCJ1MeBmsMjs7Kc4xwLh6ygjfChhnY5syM",
  "key22": "4xxzPVnfkK6fsxaGM9X1MhMU5XqDpQ8YdkgVrcATpie5stAijLBx3eKRKFTyjz5ks1Y38LMfTgEXFGJCsSNQfF4M",
  "key23": "48zNePZmfceXtBV9CzqDUSTqhmZTnqxXEQ6SqFDuXf12KyoWYzp4UW19MFB76nPHouooGBtePa8gSbCyvcjzhSbi",
  "key24": "3E5XS4DsnAZGPxmJf9Ki9Kv1CJWKcg2fpQ7BZ8i5UyUhFfdpmmtrKzmNE24ikuQkNy7ux4pgm1jCU8U2bthxnq3Q",
  "key25": "KoSU3wBVEVwh8s9HnBZ2g2X61v6e3ecB9iinLuypYeiMM4esv9NGafF4fLnT6EDTWcKnbqMTfFCf5a3y9ST8RQL",
  "key26": "44DNcpEzrFYL9KA6CRj9vhomZzjEFxgKL6sgSkahuqKHKnyvKL5kbfJsJVuK5x3Hvy6QqXneJZHkyraeC7X6M5YX",
  "key27": "3V5aKt81UdXMW8pUoBpM6jMhwSrBKW3e25YQC7eCTsvLwKR5JYpSEF3raQpXDXE96MZEEdU3mMht43WMDbWMLqCH",
  "key28": "3itqZhQ4CQC4hecVVmx6Gzn4dGnR9JEFddvH3gmiYESp5GSvHT5ystLuC9SYckMFrVANDJy4hGhSxbfzNAx221K2",
  "key29": "ciTxGabaKnbSAA1eLnP48xvxCLBepKCCSfyXjqxruUaYC988QDBPtfSwpnv5YkCvCMVfaRcXJWQ2k7DwRDm34U2"
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
