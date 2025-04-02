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
    "4j4eUr4Ze8RbXq3CURPSFGqfG4yFGffckd4P8pkmgzP2csFQAMHQ4AuHBzydAqA5AyTYvj5HJ2jKbgbjypUYgM4R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vsoHrUBNtRCHu3LXr4Jo2YDrpWxz1ggptbiCgiLQBqUDT6ex58ccfVBbTrmj9sXsjY7Xxsor7eNPpzFi7ytz57A",
  "key1": "ktLkX18sE6YApqFLL4n1t3o8a9wyErMcvyrP9fx6ovaRJUhmqNdrUFGm75qWShdCTPvS6aXhsxqw6PYMTfG5yHt",
  "key2": "3yGdWREuersYRdnzYqDaoSbeUssE6AykNwn2WfwUFakXYpRdwxQPkypoMi5LNo9rKuiLFjk42f1GNt2oHd8KaBwb",
  "key3": "BAh9EgAabCJeXeRxrfQuHxDZWfNjwwsHNhvKutX1YxdxRdeyT2DTjPDz4KoDyYcUBPDvgxwonNQsSWhrTCAi988",
  "key4": "2fHPTVUq57vBjdHs6oMpxJ7BT7s9zFs39BzKWkF6yrAtQStECecK9X8UDj1zUkD9CcnKwrgVvExhxE2Yrx2x1Wyi",
  "key5": "5nay6GWGgovYn8Au4jgBS7X34dp9v5NmuAmTnmEsoVgEtVaEvjYz6oEY8hX5pVEivMkMhLRYSmXSXpoyhkdkHaqp",
  "key6": "3viWQ54iPCwx69modY2B97d23C6u3dRwJvPZzK3e8HRd391znk3xp1CC9s5eQbCrXiiqNt9DzBw6iDMTzJrWXmL4",
  "key7": "4njE2vh1MQAsQ43Xvq1WAz2dY65uFabiHnv44mFsW1xUdMMg31LWvE92AmEwscSA8FfwcUyZPaztLqYorPsZj21k",
  "key8": "5uXZm6SZLr8k7KAgi3Z1fGr47pW2LJvUyndFBNL1seta6r9juFUogmncDMs4Zzv3eM4QF5iq5EAwbUonaWfxwbyU",
  "key9": "3aEKW2W7EjVRTktyuod5QbNxk1WAzxE4tKspv81uYp3gy22ZDgnXHCd9pFtjK2tjnRn8rqZF9xzVwBe2B31T7mKX",
  "key10": "2pHg3pyf2SkaiVnboVNbPaoi6rT7EA4XBmeL1xU64ouaZayo5hdHfvTMwuQm5tHFrdjqbxQepQmi8ox79QW2tVWQ",
  "key11": "64wbRvuaQ7o4VMBZGxbt6mWXZPNZj2pQSHHfPdo9EipEhYm5QiHKuAbG3qGvFQCyZ5H9MpPbpBUmQ8CLi7XDMpBw",
  "key12": "4jsSg3PqR5ZWMakH7wTM767oi6GPWRwfWX7iv8jeMVXzJ5py5rTR2AjQo4MiUmii9S6Bd8p7WBn1okkRKmenargP",
  "key13": "5HmbBWxnx2P2eRucbYYVfHhxTgFMC95Py5mwaFYyEaGD3SYvnKV3ry8pFmPxDQWB4FH7PHnRiF5TjxVPsxgzcPUc",
  "key14": "ybTZ3rV8q97bDfiFx6GQc8dv3tHiRKjYUAKERDiR8Sk1hauhCpHWvU2Ts9v1jtbsYq9VTVxRYfkVNo5ynQAFkeg",
  "key15": "3kqCZAycDEgqW3ZRDz3n2nsVPo87Gd1DjaRKpis8noGLfd4BoAH6baZNGeqAGc6MiDbBqo7wB39hKgG8wYFBgT37",
  "key16": "MDZTJHXLVvwJy5VxjP4UX7vLnYp5Sud3vHZqb23xqzw3K9Ta5cxynjDSQSJ4zxrDA28pqCg415qBXMDnTP5Nnqw",
  "key17": "4TCscBYUr4fUGQg6ewTEZPXUWbMkZsvCzAEXZVMMjdC2GFAyEJ3TME3wgCuJwt33pr7vCYHiSrDf29eRMW6QZNh9",
  "key18": "2iBqagbWUVN1eN2ZziAN9QmVNAXxJW4ALuoZqKstipKifvEkTatgTQHhJkv9kQYxhrHyf494qKV2k2cGsgvxa7NL",
  "key19": "4nERxuDoCPifm5vrfj2U2gvXw2YBrzQiu9dU6EmH8JE1SBCp9s32RUxeyhtw7YrPBPT5W9mBBY1M5tNofuDL3Fdz",
  "key20": "3jR1qcZJzx7gQL15YkkNMg9KeWdjmw7XXM7fcxXbF2PV7kTCX7y6Ukyqb3VK4UmjxzZbBkdTbNWTTSu1gHy5GD5b",
  "key21": "2p46mB5tG22QvJaVFZBv6FJvYin9DeW9F2hrvWHNJt5s7Hp4nBexdhJkWADcftWcFEKCDGgu8hBBUPcMVMBVopFB",
  "key22": "2tr5jMLRaFufab9DyGz2BdoB4JpffPoCoM9JFd2nMAVMW91GZdscLXZxXhrLDZSmbrUYdhKh6wXc463sarxum7Z8",
  "key23": "2CyLzEBBKTcSUwAoBhodmXqFrbAZJYw5crUMnp7CFCKRaQfLRsvPLnvuRiEZjYH21VKCsyBV8ozwxzhVZqikFyUr",
  "key24": "65f7NCfjPUo1vs7zTLMJocZZCp1j2g7aZkSc8fp3dDShUD7YpskTwPHkp8MPTHPqXcpbVinRVzetbyJ1t7dZghLv",
  "key25": "5BiKStMnZs68hToF3JT5Znzh41dCy6W76E6odiTYePkRutZ9wAQQLhS3JTjbA9Nj8ST1zbQw83ezzpp5tzUkrzyL",
  "key26": "4Rae42DYZD67nwqGYBax76T6Y8BzFLvcBEw6KvVcbu781KSRVFQaHnbGmSWXaZmTwgQyRfV9CGEUBPMmF9hdc9bJ",
  "key27": "pNxy5onBBjiw5DyqxVed4XcKCmuaePriBKy34SX4yaLX2GHDhqUseGqdvLTfcL8F7gvD9Ybm6mFEmSa93xeotjz",
  "key28": "2K4Jkz931d3LLAr3t9GS93wa6io74sP7gmStWHwWBFns6La7nWjgM12ndtr2vpVxprkhXgQAN49NRkcmBXQdswNv",
  "key29": "2tHoSc6BFnHLQqi27SnCAr9Hqfw4xVq1XvBEbMdM63YRrZhnWZyLZZ2Jvs6KPAQ3scbRQXqfugo2rP78DzNZjXs2",
  "key30": "56vKM2MTc4zky5wUnvt6NAENyvNt7Be9WYZvrHjRW61145Fkbp19znY7ghPRnNrvHAZRzowGRkoM8xKmh6BQ2USK",
  "key31": "2CcupokTPGEYirE1zVbf2oy3aQV7x22dfKqmrpGzsdURaPCXD3PfMgH65ob7qJxKiPtFyY4WkMEzSkBQvQvgivKY",
  "key32": "2eUmWnkFMUzogqCmGRSebCEnnUdpagJ8qgzhy8gGTexvyCURLuEx4hqLvwbp2GQWTwhpSTNXwCVMkuwnUxLwGbFG",
  "key33": "5PpMpMc6KQeX5o9Me2JBvW69ase6T5mwj3bXPYeCVKBftCfHJmsMdnMH4QEWkgrNb7o34MCeiiQRrNrpxdc9Ui4L",
  "key34": "3D3Ce4zKAjKTP3fFbiXta7EmuXhfysQgpZXUhSR1xSCvFDGB7iGuDNGfSP5mUSMXCspphRoSy9VGPGvH24e7M3dJ"
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
