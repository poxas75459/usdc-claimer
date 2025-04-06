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
    "3YiN8GvSRj2J7SiwudJnzx5jPDfYSYwB98UUZyQBznDYJLBncBWtwvkdJWkixdANmapH5PZvt8gg7Ek4J1gj7ahc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42ZDpbpoPs1PiDyqUjC471itS4DK3g3Un1ktYhiJx4HUC91cpuoKdtRBJ8uaX7Q8QvXW1MkC8sQhAQoQDPFbcevM",
  "key1": "2Ydf4cPzQbpHAwXDZUdLwEgtCcWg67EZkdNTYxqfadKyuATXuL4D7Xjo6hpKygCSbWGJCDjjHBsX2qRBkn4xNcW5",
  "key2": "2Uqpq1EWJix5JQctF1maxanJXQsMfwAPqmwFGPkWE75joM9U7hedchiGUTFf2DoxZak9XD4DhmjRWe4A2fUrid3j",
  "key3": "5KoaeU6QftYALzyiJsHdZJoRoCgBx6sYJypki4yu92129fCaPjsYJyZC1qdfWvKKy6YQCmbF12NLgjrmYbPq1X3r",
  "key4": "4Nq9L6nPakWNJGVmhC3LDcowdKGZv96KvSmxtN7w7JrbPrvZUDVzSUwjqErhRVwCtWkTdyFs6rPUfxZpHETdfe7R",
  "key5": "B3nZusmkBVDUVknHMW6RPoU5fRoxB3QJKymo8wQtaQZyB7eaGsgnqMRd57Poc94eafNTLkxN5oLFQAQ67BunSHX",
  "key6": "ubny6NS7yP3oNykaE1PT871GGjCcEgiC3kbSbLhFZUTwwWfKjLyzqYccZmwYwgj4tiQn5bcYp5fmvJMHvmUPR1d",
  "key7": "ETpdD7ruvuyBLDPA7Z4ewDMv6kNMy3iuM6BLruHh42F4ge8kHmiPdmeijsgEJmgUvrnPaALwekNEfq5PE5epv8B",
  "key8": "41jdxPrMo5YkZCtDsqBaaPz5gh5xBoZcveRekndxzo1ZXpJFPm5meomGM8tJPba8uiz7tcBGbxErmtHKmgPqQrUi",
  "key9": "4WgPGvqGC3P6bMhzQ1HiT2xt6RGQ5zSdFqvGQMN8MnBRn3wvSMDJdQCx16wu8KZv1ZUZM5xUHRwAmJR9WP52xMq8",
  "key10": "4116Q5cBB2pZP7HG2DXxE773EwEnJjpebZKFe6rqCr2AuGx5qkuupTzXonzepWbuheRsayLjbqdv4dDfvR65htxC",
  "key11": "4MZUL4i5ipfxxkD8pQUWreoWwa8BnUAo3vPKNdXkw4LNcdfXdqqhj4mzCWCieA7XLfj2E2X8cJxNeErQv3WrGCL8",
  "key12": "QXt6NAqWvPAURNeBHPozP1HHpPEV56xM9qCENwrsP3dZANB1cEA9GiJqrxhwoAiKVYwAhX4DWHViaZZdrvkb2nN",
  "key13": "2PKprv91SBvKMGmBZFktG76ZHb29HWzJYX8iuCZjrr2dwFZLSEbifAGGNf7ujuk5762Ln9gePvz6sx68FvpdzmJk",
  "key14": "666uUm39gx67A91RT3N7Wwd5Ve9a3Aq2J3oVzAkgQYaJf5RZ2KvgC4dQmGMmDet2JjddYJNnoq3NRtbt6k9tfrvu",
  "key15": "3y4hE5qVZfGg2WeDypBBz9W2h3y8dyfX2nMLAbKxPJe7YM7hMhUZyg4TYeN1BgTNruoCpLqcxDzm2byVE3ZfhEYe",
  "key16": "2ZquM1tfLgZUPjEdTf5zUvzuTyd3YASY9tYtxnZi4YuM9fyQgQ5f1b6kqPEgaSpv9mNMgSrjK7syHLnjptPPFKJU",
  "key17": "21L3YHvsvmq7CL79PvqghhUDfPm87NhAo4p2HNiVn7BYWSC7RZTnZH2cMVNqT9fhdPfZk9cWQ82itRbZWsv3Ut86",
  "key18": "bHTJSSpHoF3Cc3Haxpmg4qGXxrzt2AwTJYwUTabHuXoo1iT1NCVWZmG6gPyJdFZ5ZQDDagbFbdnXCPV9wZGouxt",
  "key19": "4xw79zFNCowGz8HMSzovaUqSXZcZHTkMJnWhZGDFchzKb3ru8HG1GcwWNkcQ1yXnKCGs4PksDiVsRFF9xne3xkoF",
  "key20": "4c8paqpBTXDFHVn67UL8ETM4FKaCuT9TfNP26m7oVLUA3vCYM7nsfp8v5dq7pcd5eUMsJ61sWycs2xqqpPBprvHm",
  "key21": "2kbaMLkmHrGJVbE41ni9iw4xBFTftNoRoBMCGwHrJ8cUEnvYHV18CipXsxgmyWgs2upEvnYUtGptL3pZ5t2Fw7iX",
  "key22": "5wjcyE8pD9s9TYma7bAEz9D5NgJkgLtNzosCchhhG5bdHSjHVprRBVTrNKyn6KBkSGrrkCKPaoP8HwigTrJWabtM",
  "key23": "2FuVFyEVv69iKQj7SVHNDpQs3MzdGJikwGkomhUR9bDaSNhBLpFfD9XoeS1rZrRuXaMzgeAMrP2rxJ1BVFjMe1CM",
  "key24": "4Y6s9uBJUavVYNeW9fR9xjBASVG6q3viUtHtJ8dpSWB5K2mwzEm4FGS1kUgwzzXDfvt75iqSRNdKkCXXYXoYRCrB",
  "key25": "2vBQdWDFc6nboUZEq8GJGmnNti9P9HbkU6QKRwbG5pR7mz3diq7zvjXdak1pW6XwY4ygRNwkgUCywShx1DQZCLrR",
  "key26": "64obWhRtpxYWWSH3MfAg8GV1mowobmek47yUyJbjuk3TdmBujUaqWEhLpLnjZokCALq4LNYogvVDy4iDusGmADAR",
  "key27": "5bbcooy8DEYHgpKUFPWPzbRCjKCHv9PzoezXGWzEmwiwkFWYCAgf9UnKNXRiJG2b64t32aFVQXvj9eByEqw3GQzV",
  "key28": "2PVBvvowCRL9w7RYu7k8BQyiZf2sYBrj9UgnLjiTWRKT8ABh93kVU2euTbhFEHbgLYKeRxAnfuXe43qJczKCMq7R",
  "key29": "3DznY1PajK4r6uvhYKDkHh2Cz7prKMNX27Xm6qSpf3rh2Z5A59dhwFJKVytyLAkwNJQLSJG6phYYAT1uzQPrEW11",
  "key30": "5Z8nT8Um5BNXxqmYwzSsj6DdxX4dxnrdTsJB2VWzj5ktmvsXpRBQgUVHdMKU1A14yc82YqjN8dtzhz78A8rC94MP",
  "key31": "346rtKmnYX6DDwE6NSdSzT9dKr6ECMRuNsjFvPeiH2LBEkMgVyqR6Eo4dhLBC7KCp3w6Mtma2gYE8mQTooPKx7ob",
  "key32": "4Dv6p9yJJi1A9cG6LaEthGUe7M6hUEZQnoXGPkeqqQ64j4BSZqrLjywSYpDzdzYPN5BLYSyp4VDVhPPLHDL3XKBH",
  "key33": "3yiejXNQi2awrmBhYPGtiWtZ4YkQisaDKZSctYZhckCPmaRMEdT6Pig3tYQCV8h6bX1ePrkrbZELY1p8vexdUkYM",
  "key34": "3DZUWi9JHsfnWDt6s2Ng3omagwujGQW7XNGMSsVAg3vWdJFxGZLWu95DsuRMTqRJz4V4E7zQr4ouMKjnyor5UzZN",
  "key35": "3gmg8jtNZkWvZq7Y12WttzhRskrYfE3pcmxqjaWrALoUHXJZi87F8UTa2wpbAgjFQxcCKtDuJZkpDYLKjSdMCjar",
  "key36": "67nEs8sCDxjgoxhHMBChoYHuZogocRJRao29S6k1XDK2gVSLbraFwyxv3m6cJTyHjzabcPNj1gSfoSZJEkBfvj7J",
  "key37": "s13f76ZJYiH8fjMMfgr8VW3aZuidNDDGMJD5yLKjQi2pT3J3hHi8Dy3GXEGNuNWhqaZn76JD6YMqVFdkPkaoMsq",
  "key38": "34rnaFt4NXKBqeDjBg6RMLbhytquWXQMYS8m89CNL8eupXtt8MTsyZ2XDbdjgdp2AgKYEMns2xDtXmhiKkaDZMe4",
  "key39": "5aFRG91ZQyNBsTVmTXKaxXJv2oKsK7diuaeEF9ax2ea62bQ5GX3cvUJw32bgZEyb896GcHtbNG3eV7NYT1WLHMmX"
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
