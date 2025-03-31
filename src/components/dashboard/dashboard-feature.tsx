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
    "62PupbmxLuqs6MiDa2vtFsVJ99EeQWjqZJg7idehWDUtgURTetuzMLjK1wFv9TTv64RLqFvCEz1TxYw5g2n6PkNw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Mh2ncATfcRJTkkCsYL8ADDJDgRcbiLX7j1ZVAQRFjzCjUt8G9towojpvy3tBirkaY1ueLTKGcwzqT2UDbdfFHRZ",
  "key1": "5AgkgAmhMGdYe9kPWMjv4KWays5dDVz6rPUmaKG1g7riCT1S9yfZX3aN9CxVVaBDvS4NuhMysiohfz6WoJoNcDL1",
  "key2": "2FeuvfSGk7M1gRyv6Azw6Nxv12sZPKVbXa9hBf4QZ5imGHc2qqjgmu6uheVDyS23ysAeNkT1cQ4T11suco5K2gnA",
  "key3": "3t5oQbGTBb8AeSMKYnHP28xzHaFtjQ8kx38h4F9GQrKGUMhWJcfkvEdZE6M7yHqd9CB5hfdGXysfHBUeZ6y6JXHA",
  "key4": "4AALZnR3pPkFDYfw28MafbVymHxcqHcGNvSV8yV1znTTiPYZKrtuwkmshC2wCqLVnDP43gEoGmUbxdSRFrNu772W",
  "key5": "4iz8Yqad38QwAXhqGRU3rCQKR5d2MuFgdQqsyaFWTSeiyhgEokzzVTzBj1ZakYyiFN8MqnPYrXDGXTq3Ax616VqA",
  "key6": "3AcmE3AnnMBxe6N9z9bdsjZpUk9h2DKUh4Yw3Bn2VaPPxo1dnKHesNcQzDU5whUrBv2wrjjXgfi4g2nqMu2jW7uG",
  "key7": "5zPp7JHm9f6ofGvYVLsnQ2F4CacYrdLUC75W6njM2hpmNBBM8wF4wXm8N1Xi3rBDwMrrdNudvpBA1RRhLnzyaBhp",
  "key8": "2ubr2npaRMEbuvG9YmUMAoUtvT79Mo3rkrg3T1uJysHFGixqBYJ7k6sYT5Ckwd8mwubABb1ek6KE52ompt2J5cJf",
  "key9": "Fuqz6u8ePP3dtw2f8CBG2WBsWZwvfGq7FVcds2Umkq6dk6p32bZLC7tYtBsBmwzgN3cizLWGfeW1B24Hakg3q6B",
  "key10": "4qAwZcZnh7Dtke9Qd7DnwSRpizWQxPsNmFbcZvfwv6zyoqtQXVKLct7WrZm1Skk3r3vMPrtSYTWppViMTgEuzCNo",
  "key11": "4zNYvUkmfY2PvDkxoJC418gVZf3VBZuinbsauGGYDoRPQpyS5b6C1ai774h8TdcTtfAruN5MsDeM9RB7STUGzAnn",
  "key12": "27BFxog8YzMiFa1kPYJyKuxZ8wBfNLiXV9o3uuiSWv9K5LpKtaR6UeWPB21wVzGu7jxKGTRChXg6V2sftSsEnjrP",
  "key13": "5bFSnFjgZULaXB6h9VTRMkCXYXsfn3CdY8kvH8JVwAZ3i3aXP5sySYDnQbJ1bLij1TKxZVbT45616JnghEuV2yod",
  "key14": "dZateuPRLjVVyV2QA62DshNGbhAUBg72ZAvnndteCg7CkxxAAecb9rM9eYxp1denXLJPT3PqJZ5N52FW52U5Piv",
  "key15": "2o3Kf3vqXH6HMbRYQpq9VZtQD5Ju1nP1KzQpuKLGkt3LSAfTsEJL9m977MC9V12dBdFiJnBrCmhQbLMsbFznGBvu",
  "key16": "6DXWJExRhxsHeTZHs6d5J1yXijySXXdAoimpXdbzCSRdjGLaYGKAnEaed4rSJHSG3jB37bKGeYCqzvXf7EP9mU5",
  "key17": "4fDENwgKyu8cYjdDrVfn1GTsodNvRV5H5YRTnpYotKfiyAwPyd6hFhEj9rUmiktRYiSFzpogMsZoXrPW1uKU3mz3",
  "key18": "3hBMu8tuU1kp7pbubBtnoSPYDkx625nd8tA9rhBaxuh7uza7h2sKxp3aAfqYhkuyzkVBnABBbugXT4JPbMjtcAbL",
  "key19": "53TFay24x8PFmT3VDF6Jrzr3yfb23tK2RsBba4nWdVYMSVr8uhrXbf4yNkUkcVWDeRdHjEPjVAnjroKdLr5Frpei",
  "key20": "4zU3cShopWdLsPx9EkXJ1N84pkAqEa6qVXAeM6zPkpDSyDA2KwBPNhEdy4GzUHwKC2UnY24YFjgTxyeYeuUv8P6k",
  "key21": "47uwJHftS9RvDVLs1Wh7ySxN7bsFnhGLrptGHHntLtxddCiob2aYfyTQFY3KZ8fwEcbbfpcut8MLs8YETZnaRXAq",
  "key22": "2LBrJLjWUTk3ULpFGsdQfyBYMoHx7toivZJqdcNh2XLgDwL5hYwfGtcJTnAXmRpHX78PuBrqHXM9ioDAMnrpLDTD",
  "key23": "4Kvjki4xvw46abBizVyP7XRAYC3b9QMbsx7bFjz5HByWWAw3E3SYKNa2zWoWguLynSVpKnVvJcwUgEnSD3yS9N79",
  "key24": "43mkgTvj6gqZDA6y3Pw56itXYKDhFwa29JLWqDMn2CvtUNa3JNLtjFeS9hC6DXRyfs4vnxW6nxy5W6FdMmXEtRrq",
  "key25": "ZnV8gKje9QgGyXd4ftwBqx8g4daXKerALQk8Xf9aW1kChxRSiFRXDFcTyZKHPXPfUhtqsWjUwKZcC37cgrFmzjV",
  "key26": "5zGd9r6qjWEEmQgTpPo3tvTqeM3y5JW8M8Qke8haTTdpVHJKQgGiB6Rphkh1RGutAHJCawzHnm9fyTq1smSpxHjQ",
  "key27": "5h8yrp5DGgf5jVwwT2fiPavbbXBDMJKyKnhVg3acs1uD2ZvjfF3WMp2cAeaYSwQkv7jo7xvLhYx5RpP5UhbtE7LG",
  "key28": "SYG3dKf1HXdmVNUtZ98aqqbShP1bHw2DKHL1SxYEC2ziEs5jKMncZ1gCZHsnQjG7ejUXyJeBzK6UYtdpycDt3Nq",
  "key29": "2S4AZTdCjMY3CpiaXPcBtK2RzNznEBKLSMnYLztWoYpLUoRmvUih468D1KsvKiCu1Yjs2ML41xaxjnAQ5Ry11f7s",
  "key30": "4tVKFYNzVLWhbc97VHTgFxP6AzprCVjTvWZ3xVcEvkXgyccdQtaZvYmehwXu6rURJ6HsjDGiQb6SdmxquNNruYrU",
  "key31": "dbBCWkiZL6i4REfsR4cJvmmbDYbREdJPw8yfFxEuEhaxfnxY8FtXD59vEDs7dXB5GpzrRUeoLWMeGrPU4nx7qC1",
  "key32": "H4K1EreRkVLrZ3AUYAg98eoXDY2R3XMWFH6qQ5Sd7bQ7vzmyyxNJjuZnGyk9jv4PazUotdCaZjgbnfQdZBL5txk",
  "key33": "4GrivBQgR7CpBRiz21HSRdfRda8NFdLVYwtnRVxs7VVs1ivrHjoARRaJw8t7jkFc2Pr9cUDFb2eCSo8zPrV3qxBo",
  "key34": "5wPM7qM4CeTZ4BekGJdbDYQWMDrVDdagT2xskycqdWeqE2XCYYbXwi7TmveLDrhUShxp96ptUgCbeR82Pmhn24x4",
  "key35": "4D5xD1BAsEPQFTrMCtpmvK9fjTVGVfwEvzAbrU4az3Uy8KdSyTSRUYumWCS2a5sdM6VWg7Ngsmkz8iDh6sxtazcv",
  "key36": "4r3TxNq2xhhWXEA68fWGYVcnbyDdaScrCHb6FqG2H4Sd3EXRxNPJBh67nGf9opSARDGoru4wwxZQQFchDoYuFBjk",
  "key37": "fTmzgDLXxeW3PdT75fhycY3YvbDx56bkZXiZVVnyhGwhCZndCYQp52qmS1vHERZB1vtzw4ttyJpZuTHUqtmMEBG",
  "key38": "4Qe3K8Gk17jVnJRvrai79E94WjqPRVgi97XCpCqkT7DxBYc1iA5pbqXk3etAc5qCgfB5DEkrHgUDit3kMWde3EHk",
  "key39": "5uHmrb7vNjkh5DB3xBeet2uL9PPKuLek5cRH9uJqBkoKnVrYfYf4yVaob679F2rA393jwbFwyUy5a9keZQngVmD5",
  "key40": "2U8ds73uBSpctNKiLPoHvkMCHmreUX3MsqA8hG5dKCb5tbYhFXVC5H6BeNzhokyxaeYh49mvx4fCKgcQztbHS9yg",
  "key41": "XG7kR63R6ieNBuiv5Dw4ELG6zZLkQjPsc4CZu7Ev2wGCtHB5hzYcgY9PwfCYyaCHCicLJpAUVXzgNLEg1rFagxi",
  "key42": "5mjccevEpT2rQmFeQE3dbBqAEd425XdHRREPAGSfQR7vDr9XZUCSwAigoEKt58AkjzZixZkohZLaXgrTKNHa1ALX",
  "key43": "aaTtrTVnwJu2j4jDKGoTtBiw6tMuup4DjKnFi9txW4MCENxujtN4uumZAnjwC9PhSiePPC4d53rpqp5a6EYZLj9",
  "key44": "3aSRKjwQAfFTp4CNuv85gX1zv3tCLJKbXGRmoVSKBLEmzkNdzoWojneLTCQAVo7aREYfAaDgpakPkDyVhkbWkh2T"
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
