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
    "PphQKHgkv8wZkG63LiJSQY4eKDGp4DygRE76qUNpVpFovfzKwoiZgqJ6grmCGDcaA75BvPG2FsC8Q5v9vDymFoC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pYtdFgYzLiUGdVJjEbaGafoq5DtBqBJStghGtbmW1pBFDXN6cRuTruw64yzJw6t2NMzGepfoQ3AxCNUUekMJpEQ",
  "key1": "qk4VsxT3x3o7iT4znPoYRuPQCYUiks2dDxWhrYqW3WcXQxMSognxhknT8wkvXUzqLiv15ERDuagmDYdwvq5TYVL",
  "key2": "47iRZ4yj2SxCpBxZqYu6zE6JiEi7C5c2396DrPkB6N7on4Hy4z7hatfreuo4xckyxMnmcbVP4Lg3KY5zCtvrcTp3",
  "key3": "4qTzQxETiqSjFBx7hMumndkDJy2qGgmnJ5zgNrny9EZhtMNpQ7ZftorrtkK918YJxzzVCFpEHeNKmdpeqUg8rSMi",
  "key4": "3MV3as9AKv4xGkzBGNzG7LEjZPUhKQH2b1MYsH5oThpzzYGNEe4yF13pbGdcxuSYML6N5qvkaDNgUEi9QtoyThDJ",
  "key5": "3u9dTZbAoD1npQnRUWh1HGGsY35HfoFgsiPz7THH2J8GjfaGv2TCoDiHxv7PDXACKfVU4g8CXQ6KNYuTqAkA4Dnq",
  "key6": "dhv1THk1BC37XCXonejJKAWLeP4viHJ5MfUcADUHZVg2jW2m7wA8qESW5jpugbDKsKUKVEhR3e9aL9WYFEG3dVB",
  "key7": "5WdTZwavD1UjNtQnfuETQg2wnE9n4J9jbL7mwki2w2DEhGjMDmNikCqpVEKcWJcX53ozGk6ZyB7y7PA1g5EkKoXT",
  "key8": "iDCBYGan8p6kYLVfjHxXBG7ZU38uu7ap6BVQFNpaK4V22CLfiUgtZtvKJxK3AUfFCabbYyCmDZQh3Byr1vLuK16",
  "key9": "466h8PDTrhsN22rNe5rB87bZa3hhtM7dVhizcJSGyu3Vahp6PGaAn5BS3PS5Wpx9KVKed7mn54FgDtyto8UHKjmx",
  "key10": "4J64yunBsWTPgmcho97J7WEWtACZhfkZY4BecmbqbzJeq6tY2EeEtYnLSNTfAkakPoK31JQZxDvLMgsmPRGJeKtb",
  "key11": "ygVwFEmEGbzYbTrBxrbDYpcPAV2MJvV92t8oFjX3GopfgmVpT5aX2gY7iS7ioFM7p9xtueBtZ9wUyUYSP6ub5aK",
  "key12": "4RqHLhwmUpeQRrjp6wycsrduY4x5WgHgc7We5peB7KKZ2tcPWVrJF8fJYDsAFCtYvBvMwrW9FxZe1B7YSpm8bEDk",
  "key13": "nV773kFpMzVHg6Cf2bt3gkEP5foWga4Yto3APPsec5k6bW8eepL2nwGpzRysQmRBE5Lg55EfXtgNN27T5M2As7k",
  "key14": "VcWhCo6AFcjKqgU3GbPrpC4TDRDEx27cs2JSXU5u4rZdoU8M2Xoh5tQXpF9uDSNMFgKUGDq3qY7NaEgEX3g2PgJ",
  "key15": "5nCMr5Wy4qX5A8J9fq48pbTGYscKyPEhaTSNVmjXDAWKcCfEnPBHawJnWiVk2WtVxnkkJ2KVTc7oiC9YQZPg1oBx",
  "key16": "3BGtgLQqDNan1zYToCDNLxhUaMiSz2CKewbwQfqPqfz1kk5emeomfB4BRoYC3b7f7Sk2CATsiSFN7hadkjXJHsb8",
  "key17": "Je9JfP84UYtdnpTSFxcDnDDyoALBfrMJECdau21mpMcPFXozXWHcgebfcVmo5SpxXbypxS3oQq3i1DP1k52RPH9",
  "key18": "5CSxFgAmSU5sK7nWz7x88jjv6fmmcBEYRpgRnhFpdFgAroaaoNbUfN5jbQwA2YjGcnzPinoaF2czQEPgzYVySKHT",
  "key19": "JDDxsfEjjPkbXWsckeujFH1QwdYzMYmj2x3N6NY8DMGBhpRWXUpDcWfptjc6un7auhb3AsAmyCowW7qgFhc8EER",
  "key20": "kapYXa6DU59tr7byYVdwJrbEdcW1wbH4MRyZspcKLqgj133TAjH951c2WjXk7QhUFfs2rc4c7W6YVZjncpSYrWA",
  "key21": "2hnx2xYzdsJckAmBfusPkriFU4g82Njy79wzNfnCMMnsyCnxdN4ZL9LpBYSdtRzcahyJKAtetDmTni1myidXZaw2",
  "key22": "4biNBSz2xsJQboLGFS6LdmYCp2B53gskzdm6PTNJDeSp82PiB8wibQiNUMJtKMicC4gZukcdqDehamcPGymFMcXW",
  "key23": "2x2kyfUybsdDoz2FnKBmrfGu8pHAxwMAVEhsudAVNh2sBDd1JFwS1RDfi79yz7mDFptTr9N48ArwWRmQFxtwVikB",
  "key24": "4KLwRGNFrZPBPmhzqEgL2DoeQt3994PBdCGJqW1igSZLG3H5smdE8g6uhXske6ATT8Px6ZT2KzuZtX8YimGc7YVy",
  "key25": "2Lt4AjMbu7bpgAJz3BYUoR67ie3sLdYwqGZyPVgdaYqQQVv1GjMq1e2ifKAyLZ8X6WdJ56QH9Wxkv5kNRQAchWFK",
  "key26": "5T7rSqykpuvuQ1iHFQarE4aK6xrx2jiKrCQX1oWByYB5E3rNiqFTLskopYuDafS7sWxgtPuGuRR2So7TEvSuH5Qa"
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
