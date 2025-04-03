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
    "w7GUj5qsV9kbtTesRq1gpMLY5jW6gjXKunuCnbqZUM3agttCdScejMj1baB48aB9wSKcuTXBU3R384su9hzmW2c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pd9GDXSctgXv6bhqPeCyw1jbtCzaZijAHxPXCFUMW6P2aqQYt3vUBbiv2vyBxpfFCUYwAQpmhKTU5AMyt5PhWYH",
  "key1": "5v5Vq9o8qPurrKjfnTyUn9ccacmUuBM9BC5aMofAUDtqJxXVQqsLxVbgDxS1dcppJcC4NPih6Z9BCxnm9voCWmdW",
  "key2": "6wdQ6Mppb42H96NLU65N2y7ABruAYzGaxKuUaNYAEWrVq3D8VkX6fPGyz5SHdSvgVNTz164GGczhKiEzKHgX5PC",
  "key3": "3R6YktkGcS3GWAejCu72jY41L3wW7QGayUDtTY41bBFG1oiLotX2Yq6BFh7JdZ4aM3LjXRDrYbFhHfd4kfmpAYnX",
  "key4": "4wVG968vx6Z3hiNLuiN3GBdmMJkAk3xMh7T7uixk297XFm9vRwFKtPMDqrZXzdkZ4LptheuXfxt9wTMjRFGVMn1t",
  "key5": "5bYVdxRTPo6X4THEGEN8MjZtvjwTpvVJ6p9UPpTbLb1nFPcKnbLQM5m4ty3gHhhqGKY6vRyUhSMa9JCx6dpRaJun",
  "key6": "4SEVFX7x2S8TStrUKWbksMDJyt8BA5scFYR4KCAWqg6tGjYxEMWWvhd4Ckh3K6sjxtPk4c3Wy87caPhajaPtBk8y",
  "key7": "4ZojsQw2hZjfkzUhRs1oenwaS1d2E1dAt6u3YGimWe68b3KXcdNs3gkyqNhn8kRxVWfNFqDAQgkXdg3MsEwbzcJ2",
  "key8": "4oWo46sdEbHmfwf1TyqRXpXvqAmbKmB68FiTT8zxCoMuiJ739cGjQJJowbCruUhAQ3wBpzaJQ5hmLKgkQmW3uQ8R",
  "key9": "4dhCZn5Uin9Cs83iASW1fcXqjTfbFL2Zt87VEBvY8D8jT7zKDBfuBg9PkngWWHSSvgWATtpPLAPxZiy5q2ig1HDB",
  "key10": "5HMDS7ZtEp8qp9LFGCxU6NibhzERmHJ6SFyXEFYMzBdM1S8rref89BXtW5Z7bX7Yr7dF4JS1KSJGv2VdsRg7eXYn",
  "key11": "atprJUqhFpo8m8yHkAevSz4joiYivYwqdyXCrziNtNtUtvVfRBo5wrsiuSvRp1sfHX7MSzQEAAogGuR16bYNx4f",
  "key12": "39t1UBSupcVNqW6TRTNWat4WY4qkHa9CB1RwwQCrCckq76xHo9HUFQGzFiSVHfqnM3wYiNbEEE8bg2sP4Lbf34db",
  "key13": "4JzYph7rrgeMopTnPXyVabg3PDmZriEQwUsU6Y8nty2gDvoPmKG2XbPwFYNED152d3NriRXwAaaavks77KJYASES",
  "key14": "5uqDUqPvdmXRQD5M58GC7YJnmi2V53336ZKKEgEe9f4AkhKM1pfjnGJu6vScE3jzAAQjSgLWtHpWXHj1CyAYXJf8",
  "key15": "HXEhXovfwtkcZcb74Kqd2tp8tCprDJDbSpkTSgpGQQJNpyn4nYoHFd9KgNoVxSfSccjEgr4hyDoe624RmWwSqY1",
  "key16": "FTzWEWyRs9GKRGTmQhQ7Ar3BRbf2um2D3A7jizgdmM9TiP16c3ydPyV2cyW8ZSJv18Te56yNPcD5bq8Ndjoust8",
  "key17": "33UmXstZmiQLYoKmpQVwUge8GwNZt89PFkCFbegkEySLG3oqqUVmHknRoKtTh2CSGweXoU5vxmmt88BoA5Bs16iv",
  "key18": "4wTXCLaCdDWpxBGiaT94jHhjcX8KFeqFbErFM5Md9qPztRKkd6NXwSEaxPpuNjXDg7uWpUS655kRcJgafi8a2QoZ",
  "key19": "3JzFqnosyu8je45jr7g4t3pifpwdsAth88DzBKmW4AxNfc4iv7Y7wKfqLd5fsqFMtKBwMHVLrnMgQVpKu89UQoAg",
  "key20": "3Bm7BQsqc75VHXdpHgYueZRW1J8A8PZNdgmNjyYtmhnuq4mNpvzMj8vktxt751KBbzgFsiZkjPgLffbB5TEp8JnY",
  "key21": "56xR1pGoYdvKoWr3RK6N4L4JgVy7gofZK26uYjyZJFF1eiZP5iE6TYBcMRBihDLR1YaoDRwt3Hit9f257YCo16Ss",
  "key22": "2RK6X5kHCfugsisoTi6pxHFc4z4d7bZ5qBtqyFN9bENdGNwMH12XTGFiDNyydzxTcTVBn34cVCUt3nRGragM4tXa",
  "key23": "2uKaTFvEuWs9QDJ9qpBBwbbAxZtxt4jeZtvFnoWvkQfcvvsKApwAXY617Z8TgzZ3brtcgsNQX9DB1XNgyFbjuFU4",
  "key24": "xSXgJGBbY2nQGu7ySV2y8aLie99m8XCnQXmAoEEFGscz1EWsuwwoFuzmPiwXYahLuNN4LDCDRfDxEFhSv2LJpmX",
  "key25": "Ag7kbSp1MJ59BJEfB39Pi3rcNwucBBtwMnSk7Efie61QcM1U2FkWzMaaDVXddP93YfJEsNZQ3KbTwCmY2y1rjYL",
  "key26": "5ofyPpE2knsE9EDwMr9WyR6fknapcYUdYq3Pz7x3zaoFuYBGpcAiLrveLAR1jZyUH9Kp6fc1RvzuHMK61nkaLt9A",
  "key27": "33eMfqs7W9wk1omH7vTgxdTJq1SDQxzZ9VU5uf7vEPTD6WUb1bth2ntHFSdY32Dy2iH2h3tfRhH1BvMqEMvuhoPh",
  "key28": "W5CEeemr2z83MeuTHh7srsAiaxdk2gtvaN4CH2Q5cDqKGEpB5SdyVbXJsV4jZaFnj3undWzjtGSBHia5CZfktNb",
  "key29": "22igig9nnudWdT2BCK1nCkSqJM1eAiSuHWpHueBSa3ZB1AFLa2uFJaydfNixybYbQWa1eeEGEC5eH5xUV7QUac2r",
  "key30": "3br4xeRp1obw5HugcUTjhjgVpvmoeK8sfdkwavigJKJqEu4MDAx41GUsSYq1tW98guPCMSNcBsZRR8DZXWmzoGCF"
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
