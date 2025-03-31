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
    "XwXq6Me89Aj5uGb9CcicEU3M5p7mfg4MQ8yvZcaxCAvC6B3X9V3nXVA8z3VsjuKVMtQvyLYVHMVcSu68cYVnRcb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24pWDrxxm4GrL7P4eoEzp5qn4Y5kVSTY6rfcDS6A92H9UkBHpiQF5iGcvzjUCozhf2RbwTkfWaANqpivQU9bmBfx",
  "key1": "5YYL5opCzdFPwACUu1kzRAQHATJASUhKGgU2XVxGz7KHVQMk2crcoePUc7gTW1hf5tB6rUceijm5Jpo8MTUnoz5s",
  "key2": "4edtsvV7dJrs6djr23db7q8bJoDVj2fzyVUfNR2NMtberhykGvLJf8KZfj2cizih2RXbK2owzZqZ8ZUvCn9QUvPc",
  "key3": "3UyWczCBFB1QshfWwZufek24dkHD1boTQizRVMg4zsu475y96tX6EKuMBahDAtoyHsLjkyhzmakvmMzaR6FzRk2f",
  "key4": "3pcEqZKb7rmMyAXsngjoQxvWEkx6QXDuAkWy49gPNCD2ebckhssXcHkUYdUL6qNwRcS77K8r2jcMYpFk2bQvT8EE",
  "key5": "66MMXM77NpC6DUR7dp2GxxgbbXuwckWSwqhGLsmRwL8GtMyLRiFmcgw7YCQbZgfkNnmud9G62RVhudML9c2mm6Yw",
  "key6": "5Y9jXNcpHAMt2Yiq3CPSZqKCxw2dnJdPN8gScs1z8mt6Jtyj8P5ELqEUesDL7FaAqUYkve7EU13zUoFRwGRb3vHg",
  "key7": "5tt4R9SwzavnMuomo4r7BjQjgrRfzRdgcMrfP3ZuKDjcFh2Tuv7ZJfpgBXLK49Af1QE1WTRS1fbT9TDr7noNTJhf",
  "key8": "5hgvhMmd5aZhYXSHPdmXptoD7QoTPDYSj66GzZyVkzV7WF7kypoMmp53FzJp2nrFGz5VmrFxSo6DbuEHWNwskTNC",
  "key9": "3moqoYih8tNv49ADmFgPx1NaSnqgPVeDUkRJzP5RTxNTUDP6Zh2BmfQ9rWKfpKqQfE8yjV3GaW6rdawcuyvhpRfh",
  "key10": "4jiTFxrkpEpg5xujBEVBPheTBiiRPfKK8Ej9SkkfFZC8arkEdwRjjmgX9U94HNBgjT3rimEYxPYfAnCh2Zswk8cV",
  "key11": "SLuwpFDY8TXJ1QRaNs54yUoxbx14mAiX6DL4GWjY9CgyxL9tA2rsGVrQeqKuifs8qyPzPDiJ6TB9pJeFnbRP9Vr",
  "key12": "3Ft2tsJdF7YLAqzYTnL6pYk8ovYjmobULPRvWMZe7rSMkrqrmwmyygzYqKt3m4pLQBsBJA32RJRBnPEMu5B4L2fd",
  "key13": "V9VHCtzbDzvKaoRbg8PZKV4HBuWSbsJJoToDGSbfCPuSwfvvL19BkycXdnKaBDscwkcuC3nhu5EYDKzqT9Wx15X",
  "key14": "2zZWKfW5W6QZ1BLcKHi5GEziM9rgLaD76vKiXRDdNf6ZioWSqUo4Sfxv4p75UXzVBWABw43nmDJGBQ6fWE77Bu1p",
  "key15": "54tRsSf9iC3qE24njdV3Yy5Hfu68e19zw75uMVzfwVXXJPL8tDPKyCVmaL8kf9esE9zhsHhSGXorT2SGgtHVycZP",
  "key16": "Mki1fUZNixjD94vqHeZsEcjtyCTAerzR7T9tEwUY5166ZUZQxGbGUWMXf2hqpzW41mEXru7MRQ41TYmQBdkwyT7",
  "key17": "3LifBo432TLmAdg5YTtrDuz6q2ABvSUapbYAcLHqxRadhc2DJvMRZtNXYLSuZ3KPuyyersb4JnguoXfN64cVgV79",
  "key18": "5pR2z2zg8b3rb5HjyBCWCBZj6cM4Pi4z33WbZ2e4s5o25r82SoBZ3GZyKThSx1HaAaxTCXTFvXiHj4zBYpDCiCXd",
  "key19": "5GpKam4CZpNeAnn4CxQinGF1ejWCzpoSJHsMPJsenZdt9oXsRwwro16zeFh5RNbSdeaEpV2Uo3XePDwRBjssPBze",
  "key20": "Tfa9Eqh26AgmqjhbzaZPtK6pEY6tgpibBpthfpbzVRHNZeaGpzjz3HXs6RSz5JtYJXaDU1Z7cSmPtunFSuj5M7c",
  "key21": "sRGiMfoSQEvepXgHm9uQoTWzXHdEeicztwr6YuBqwdxz4R57ARfFVc57iTeogyH4awYT6NqWzPZJvs6rtncn3Yv",
  "key22": "4xTVMkyG56UP8xsYzSRVQUYVHSREP5XJWGpr7w5bKWGtV6ydKZT8bqp9PTPLfaaPr2YEtkXfhk8Z1oyXGyBftHwA",
  "key23": "5fyfaAfjP1EwBU3EboABPbKpvPYkiM9m3zYAZ68YDpgBWEMsrkDC9rh5y6ETDyiCtyvddM5wwH9NycmF7ek8bBBE",
  "key24": "42A4WLLYY9d7xFM5VwbPpZ2dHGXsEnnX2uUeH3G14VJT5RZUEhsfH7FESgBax34MJi6kpex6DT4vCE3sNGHPJXka",
  "key25": "5sacFcPpkzaHF8Jhaba98biqeJVJMN15gkDdr9NV5Ze5RRgpwKwjo3puGW5fq7sSzrJB77YBWK4SN4C9N8fn5XvB",
  "key26": "5zsD3fGnkUHq7SJ5JNx68iXjGuGiryakYTKwzUcRWHK7qkmy9ezFPAEYUs4oyJeaMTsXTaMNYhETJiLZhH7uZh6n",
  "key27": "QYHm4JgkJy3Fa2NgUezbbEtJDDrgDSvN3Bhfa5i4QEqL4dxFHJP5zMFF3vgiKhgz7UnBecKZ7TrmnKEUkkA9YTt",
  "key28": "4ht6zh2kGiZeQ6a62axjc4X5E6hrgUUgWqhMtq8ByaKjyZbWUtWXbewq2DdcDohktfQ6hKVQJFYp3FV56uEaqg9m",
  "key29": "GrCwseuQ1Ub2PEWuBLxWFeuq8SDDsvPV88YKe4AThpX2yRG6AfFhsnP6PfyXYNUBcT5mVaad3fKcCiDK3RY7LHt",
  "key30": "3ydVX3RuwwSBrD9wpPpdN4LW7wG4hAtXZit7mNeQgCr4zVf91Kktgogkqfvsgsa3keCWhYSzjeKpEoMrbSqodZZf",
  "key31": "59qsDvVraMrSgt8tKB4B9NCfhXAg2inhe6sCVRn7ooRnQCdvru3Wjxg4jwEMZhfWEN7B5jC8Jzz72SVj8gyuGCFX"
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
