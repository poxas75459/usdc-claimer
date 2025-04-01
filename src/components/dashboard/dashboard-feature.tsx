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
    "38iNxXbiak9HvfDzjhLF5ighdaJ8U2W8JmGb95j6di1menAJAeQpfceWkFLxb66mAgphjcFaUJRbm88wCDcCcQFE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HJz37UfcN2sKdE37ombPctCUkcDyeLgqDekA1naAaJFz7gy23cxVCAgCDL8reZxZhxMb7oYh9MV2jJoTvskh4x6",
  "key1": "3K4hs1temtDoE8tAqfFf8LwrqUMnJVSBrsZErTE577RbW6R6eJkfvbW9RhCtcecN3CvyQeT4Q2w8D8zxJcrq9DnS",
  "key2": "3KcyvRPr5MHtZLb3iPBgjrmEEdFySEx4mAF72Y4Ew4UVizvwsCcGyHBjRZHDJN4JioWp5SxdqqEraZ9wk7NDDYpw",
  "key3": "aWPFiggUM1g47KTM8UhaTK681mDjkF9CckThhsPMLRyvJ8beXF85xXo64dCay3peakpyhzvz571HqVkrUwaFbJ7",
  "key4": "26JTV6ZkR2yjP7nfG6FAP82vAwcKfHQT7NhB1fvVzouk6LTx4p7fEQrve16T68SgHbxpX34pyAJHRUN3UmhQpHUY",
  "key5": "2iCgv4dVyxo3iyZD9KqiMqY6PWyU2Dz8JW9x1r9C8rU9j9WkHNNbJq1nKtJktLJNpbHinKdg9CF6ntqj1zhrUNum",
  "key6": "66PD3aQdr9gKPopqfQDdBAzUjTt4PVRTJaFhwqMqkLS1rMJHavqpkuWfYvGdnyZgjosGF3jgcjoTiqsWCiCCvmyu",
  "key7": "2GFpwwWbz1fWUDbbNkbJcTjuBFT8BTqH1G8iJJu71n1nExvUd1BivvR6P9wSQCDk57uuxQ8Tjte53r79oAeyWUbX",
  "key8": "L59ybE9TtG1Kz1aDmbb565CicWqmZNSuPwKFSeEAdF6bszRzbBKoBosA8BsHQDSXB3p8yaoChfboVxcjsHtzv4E",
  "key9": "GrRfWHFkWDsMGMwdb7vwUaF9Rv6FusGUYbGAYvkvVBULCJzozkWGawPVGWNghHktpEo1scr5JXkqUx6ohMoNht3",
  "key10": "3X7wM8jJ3tXSfoHj6jZ5uW44pAUdGW1b11rWQGov5xJLLdJzcLRs7XN5zczWM7CeX6g9SZ67rwm8L3rL6eyydWYk",
  "key11": "3QSC1tRTsrDrHgHutpAT2d2TWQUcb3jm3ztB15NmuvCVPPnrZBfFoUAdJv2ppcMA7PUpUMxk2thbJCQ34VF2wptf",
  "key12": "e2hg4YUwzZd5rCeT4BwV3w8aY49H6yyw823FhdNTKuykcjVvCivKvwQ6fZvEUThon4QaeYvCpH2iiM1DE4ja5wp",
  "key13": "3DyEBVY6zXoH2qqeXexNQNPRRHX29TmM7LoXuLJ6BP3QTA3pT1FZ7dBpGdQupCkqf3r58Q3FkSj6Yn1upm5SvdaF",
  "key14": "2CiZtNRwK1N5G3NttLUVHxTDj7U8GDy1NFrTNN636YoUkC5KpU6z9r3DXhrRvD5rFRRVuWBmRorZs8Ro4QnXuCfg",
  "key15": "5kvk8PUTXqeVbNP5heBdWB9Qi8xCdx8t3rr1VNmdGx3SmrmpB3rf3sm6CovAZsobVuvsGx8nTauBs4XLqeu8a1AN",
  "key16": "4X9oui3DjjQavh4uhUH8QxY3z3G2pmR54ukz9cbf2GPpRk78u1SL2akSpfTtXVqHUXKPJj4YTQEW1LFj8U2AbqAa",
  "key17": "tcBn3dqDfeJZgKWUTL2QVmYnNqrjhD9Qt2HbBFCFRDdjBAPKiW97DwSqLyanYrQysu8zDrcfZMkciWay2L9ZtAf",
  "key18": "4LXauuruMsjxVdEgx3UmXy7jX2gMxGKF3pnMDXqGinXcqqSWSWCxmj35bznje1zp9T1mLmvVUxVxNoVRuAFz9SRd",
  "key19": "4KZYCNo8HoCoeQDgoMkAe46AnfZG8k1BGsUYkxUiUZ1F2TxLfQHd8A87Bt9XgVL7enwqUqWD5anR8oB8Vi1EzdjK",
  "key20": "aMjxG1c7vyuRHkquhCjTCqnB89HhPxGt3tUDwyNFBj4BQgVDRY1ZHmKMz7U1AkcUpVF6WbAy4vJBv2FZRS9eepZ",
  "key21": "4PYcDk32Cto1Zb2ssS9ZdJkdFzUrF8NeeT88P2d9EznrMyPy6CrkKgJmotDTYPDTUdirgpPMn15J9J8YgbA9HdLE",
  "key22": "4ueZseiWutb7jAVD71QHQ6gNPdBV2n1u8LbprTBWc6WsPJarjd6VpqsBjf3QC2SnQs4v2kxyQi3YEYEuSZp3d9Gq",
  "key23": "DBfj4kFeWshyo7KditJKhdaU7YoQoWadhRDBDGmQhXvUDBNTp8GkJyke5DksJ5Zrzk1rSCmBEA1cHuWgifvndQ4",
  "key24": "3zfjErLiPnrzfU9zXwpUC7aWmGzmWnNwT4Ehp7natJQSwf2M6iYRFfHJXwS4KCw4oSQReEWEdxs1sJQgpXZLhnDM",
  "key25": "41XLCdrnwkggdvNzb6HpXP1CE1dVsb97im1NMmGBSviWuRVh2DJ2cdP8aKUPFWvoXA7BHkKLf6vjwCDhWpSVi65T",
  "key26": "5hy6TtbrsgwMfMff7d4w8YJcoXHivBAVx8pVV5Dwneipuxz5A4oEDfywBpfiiPyqnZFjoDqjmrjYPn1SnJ6RRtB3",
  "key27": "3w49JZyZi4NeTuZdztgvRDcTeZRouLKhYwi3EQJRuhw8pvrVC6uBpn9zMMWbsnBAXwvtWHHmGRiG6Tq1ccGj7C2s",
  "key28": "3r9tTS5wrToRJzEgSAfaCZevk4tL3eEsnW4bUaXKj8KnPfemrpsV7g1xfugQuPiuVdj88kwG9oX59MBfzWFwrWgz",
  "key29": "5MWz8T6wRMqMJC3FeKswQAkX1BeNKDYT2XALZ5HhNKfBzkL5dGT8TfEBzCubEGGJueDBTiGkY8rrhA1NSS6PNQQk",
  "key30": "5fACWthjg5DiMq4LFpxhqkrE4i7GVbensss1AJGUaNfCozmQ9ZCHYUvZJA5Y6TdZzv5vZJuxJixCG13JjW5nviy5",
  "key31": "24yLyRH4xxmJ46xsxnTkryrmNqyK56JrnHT1codPup5kRy6crgcsF3BsKrikdRyHYQFjLsAwvTkce8htMrptFLuz",
  "key32": "32mZvnieLPSZGYr2dvjwDaC21uoC7uKawKHe2cCzxr4EaNfYNy1322fUuYSkLt2FDxMnPtcJwE2kxke2oyKvB6aW",
  "key33": "4EzJ7Y7CoxCLciAcHDFKYsKRbVEHdbvkNrFcZj7orPwDsNySxUAmqZHFF97PG7bQSH9JaDPeUknAzKypBzDS3f7n"
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
