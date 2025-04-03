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
    "24MZp5qUGVdmDfZPEnX7bkhHnEHedYBATyb3qcBDzsHSMnzr2r4C72FvTei95mdgSFRab3m7nGFofHuT1bBYWA24"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67av3zG211NfTP12LqYvGR1RF1aouNLbtxzNuiG9A24TvyX8LnXiJ4JBmeuvDqbQiWsbQNGU42cJ2a91vBGVDLDR",
  "key1": "5npsDBAUaBeZN46qoR56PRzGNm7FQWGKmD2M3Q72K72JcRpJftWytA59qEqy85qwYpMJDJTvaqoTXmgkyhi2oK8",
  "key2": "3SQJbnufmp3zQ8jnohtBAxi1y4a9MZf3yofeDsf91C9oxZcDsoNgMNTEzu2Hq5AsVeeeMvuu751B6HZrn2HaS4PJ",
  "key3": "4bw7NJnNLZcgDZc2payDTtnMnBSHgw3GijCHhCPU3cQFbaFuXiy8vPAjGWXuF5CRikCRMTnhXpCpUCaqzVUa743u",
  "key4": "3VgfUqotHNUWEMwLb146gfJy6TC3254wpUHe3eK6Ddshk2RNf6etua7JUTghyBP577sKSvwij3ikbmQahzQ3K4HY",
  "key5": "4nrkfQ3VtT2ZvtDCn4ubLK12asS8b2hiyKVX4fGNmBNWE2LJJnpjoviT4VBq6419e9Cp1dmP94DCQpLBdWY1KEa8",
  "key6": "5yryJeHt4xAJ7qZaKJnxWK9AKtdBZNSrcXnuBeH4RWEJcGYrGLgXpCHSSwiizUoFi4LUu5eHUWbNxoHQpgZUrmVy",
  "key7": "kQEM1dYdiwVd1cUwF3d3PEgzQ3wHuW3RPgqgni12EbnUT2W36meTVXsCH6yFtizX5GZPneorXAnv2wBXMuhBmv4",
  "key8": "4hTq5honzprdHWAcD1tbwKLjBV6USzZWsnZa6ndVJmLTUQRWcicxXrnpprfK814u4TKVJ5reugQaShrGsHEyefYt",
  "key9": "4FB9VvNG4UZwjydWgZejfK3nJ6VGtKeAG64joDMPtz61KVWhoUB6MyAFK2B7J7yRcW8YuJbMe2KjVGWoPKxLiUpN",
  "key10": "JG4ai4JgpoP3mJXRmpbuczr56675M6vBBhmpyRtda5y7yNwQZ8ZZka1Pr34g7EUSabn3zBu1vhpXRXub3ii3wdH",
  "key11": "Sdd421HSFisGQvLgrkML7j2APbirMBVkBBDcmeWBELRPxkAiFUJtHZoaHdrU63Dzve1RPLPp5T2a2Dw5xwFksXs",
  "key12": "5kGp7gtjxEazXjRfA5E2Nvm9J58tG49mGk4px6Ec9MKQtb7sShcqw9JxMw9ye5JyCtNtTSr9k9FUE4HhTJt9ucJr",
  "key13": "67e2pxQfRXZmjf4bjFMuJUztGJQvtAGguyeuSvzjdnGDKXJKabYuGECr7i36Z5nqTZPHPeEjLnUkLn1zDkGiaa3J",
  "key14": "5tDXkKeZHTxa2z3Uw38ace7Kkai6GH9GgFn4rJywoxH3cWdZ1d1eC84ZzT89icU2jeZETxLcgLsyhBK1gznrSVmC",
  "key15": "K7au9iDdsNYcjSWNWVvMeptGcms9HqiqEgyVbRVVDjW8zQKsgDwJcxGiCNcmqvqjs1qpo9cyBEfPaey2AmSWNrn",
  "key16": "5oF9nSpmRWUSLdwJQeBVpSD964GESnryRLWUXQQzaQ2ynx5tAg2dZTgRwFSGapDkJPPaBoHhtVmVdA5UVnZZzehp",
  "key17": "3tUESMCtpc4NViryTtaqRBj23Y4wfCeJmyhjZbGJNbds1HXnwaWadzPt48vzwPq5iRpiBkTeyKNiij761GEn4cCP",
  "key18": "2FRb6tgdkzwNvdhZCkspTi4H9hgCqRsH2dKV12J3Q4zgsTiQftsVmaky4K3iezUw3uzBULSfccnJj6SGAWkgfotr",
  "key19": "Nh55JigG8ThxnWuGHjXHzTTshK3Hh6beN6GncpScQoWaGmudfjvKVQaqffDTq7x8gdMi8DsgN7LMW8PejjHpwQh",
  "key20": "gpYkP9fzJyafpuuBMbnmS7gGwyBpCfNj3wm9PxUmKXpUm74KsfiTLHw6YrGr9f7E7rbpXqio7iUwJbpSsfjx8kj",
  "key21": "2zFiNQ2iGAgUdxii66AzQoz7Rh5MLadq4gF1ENJeR8z95wvCMsPKxgkW59283CtXpafueKpQBscmxK4LsrxmhD3V",
  "key22": "bJeJyrAu9eBJej6bzHb15qoeFk4dj1UpBrYBp9B6XncKY11bjRXFgPszSgX5R7R98zec8Q7AYCYfV6wAofVH2DX",
  "key23": "Fs5EKYGeWwPem495FjdGFGUCweefhj7UHcM6j4Zvma3kRJNwmnBzDuWXqfQjGmcx1we5GyTwxdnnryyxa5Mydqs",
  "key24": "59xgE1RuG9rir2gU4L8qS3GR4NE812vn9bZBSHrU1YYezJEC86QNMGLDye16cjfpVcnhP9Yg1YCLUVrA8D5jP5V",
  "key25": "3ijEojtTTN8ZymV4y6to2cZfbAMFgcJtBrvVz44wNLomjw46LmB76Smmh2eAorstHGgJzGwrRH2JwMfxfWDucYfC",
  "key26": "8ZCxUF4ndt7FCUiK1ApFUZN3n6zgQULHSPHC7MF3m6TRxeDoqTVQfoLoorFANoHr9uxCX63bzx1v4vsQzSm29W8",
  "key27": "61JmRvXN1qTEtsQNRb2NgxyNDoqUtNgnMk8iTW8V95AgHQ3wEaf9z7eXxTkkuvetP1gbgoPdFD58CydMAa4QWYT3",
  "key28": "3GxFoQvcwkQLcqk1kiW1Q26GDr1b5iJaLHdsSqgg6GrXBQGHZU4N9YXArsVRM2uRWSp8cGxgEo8zE4hPbcD7fDP5",
  "key29": "44o8zfHmhRxV9cJKZSf6TmZYECF2BXamdf2t2CM2VtKD1sD3SBkRCqR4hFhn4S8uLcqbT4YxHxQ2oE52RCF5AJ7T",
  "key30": "wYbSuFyRrn7Grnzb5qcueEnM9bBhJx1V1RJuUFth252QhWyn5JA2tga1wNACpup1S3ZGYP87HMq9ZWAbH3zMEcR",
  "key31": "4M5R2SgJnG4LnDiMvNumfeiPt45EsFXmeRTpXoMLHz7aiC9DiN9sJTKLesuVxiL6yRzjL2yqtgsgVpEpbcmgxc8Z",
  "key32": "3HfVcgnvLF7etoQwu8zLUnvYGyPtUZay6kSu3mAr2FJ57KgEAB18hPethTG8PHtiVeeV5ArhfHtWGqKXS56ieJFo",
  "key33": "5L7aktXVwDyRgmnKTuPEj9f34yuKevdrFdpYwESYrPxrrKwVqC8UADjE3N3AKwrTEzwwLFH42auUbg6ALswkMEC8",
  "key34": "5NGuM3qogjxCAhryJXvrSQ5wYbLmsdFTnEymz644kUx5ee2zAFpgXXDaXKEeMEch9iQqTXT9g7uzo7nys7qWVUe5",
  "key35": "4uxEEVBEeejYMqfeEDH8cWM57MZQc3JLfXELyX8xgD2xigYwywuWgWtXDk5c2aLqYJ98BHNH6ZRMgdoWexkf6NxX",
  "key36": "2YUpryoqdvW8ofjdZL5u7UWyfCGnRff7xTtHhQyhrNitpDaekkA77U7FCgifLgZ1NmvmMdUSfhZbUq27G5zrfjVt"
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
