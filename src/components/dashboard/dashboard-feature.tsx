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
    "2cekanKt7Ad1wui9bnsY5RbLr5kjLTKJz5ZeWYfw8ZZcYYtdgEZU5tB1CChCkies1S3QPAGfGxYWa9JEvcdQgo46"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2phZqKZdeCYUumBfsN8iejTqD2tAKg1B8cYwT1SYsR5JFPZh6T51p37qWNaDEuXaxdwmm61wJLnBkpWsdXnhbuKu",
  "key1": "483TD1xMGk1ojp5i7cgasLLid1F7t8H7qrySHQBkncTkp4SRhkMcQfTa6RiGvFv9UqtjganDu9NcbGy8zteujpwx",
  "key2": "3Y3XUxvWcoRbijDa7RehJGFcdX7yVZxrTrNCQkYAtv4YrZdygMLYX7RmqxrgmCki46SYPWZyunJzdM9962QXQMTG",
  "key3": "5Zo7evEpei5FebC4pKZv5ReMhUpS9NSrjiXPQZgun6YUpXTZ1eocp7zBLfff9PuZhPp2R3TutQeEZKS19ARB7L5x",
  "key4": "H9Y64ZsbLCTTiG77GgZoD2N21upehVvx2bL2oa6iwrUJQx5qTLGd1crSJ5BPxVDww8WsgYkR5rsmmQAG7f1GKm7",
  "key5": "4SP2QGsDTtEDCLVx4TjLVxEn3GpKHPwecUQQvyL1mP3GuxKrg1z7TaydaXze39URntC8y6iD4p3ft1iAnKsJ2JbD",
  "key6": "2hsqQnn6PwYJvcmmyV3WGkJndjQko6dgF7TpUFnx7uG2jMvsvXArPguo54QN9fdnr8wuC77NukJLARrqEZwgCCxo",
  "key7": "3gkvKm32gzvUK9eCZwTJXu543chcvWtDspthrQNUn8tpVF8NgJKCe4AFe21VFvrYZASxKVpKmZ9cTjVW5qZt8FcS",
  "key8": "3yLz13E8jHA92rXHs956WcZxqicTYrLuzH6URWGt8YNZAMBy5xueY77ae1XdzSd7dmBwJ58UTFihCVBhVbUL4bUT",
  "key9": "222RtH7mtFyA8mHnqHc5CJ2Aq22VJmoewPxjWcyHrmLyPq9r3dRL4WemNEajcEpPME3FmkXyGAHmvhdztztZPG1n",
  "key10": "5QbkvWC32F4KdUJgZBfBZVbJPkpHJ7ErEnf9sS2tAWoSpRgN48oJtU6pmsfaHfB3GmYu5yL89ppjSvJXtEukXfbo",
  "key11": "idE6wTtXx6amd78uPUNQgbHFYAfh3DsmqYHbXzWXZ1YujgB8M1L6zfpUbKAcKVQhVEkTsL56w4PYogTZPpDd1kE",
  "key12": "5TM3rr6tCafYiS7Y1mEShdikgfDWcEKDLLBfD6at8xY7VQJ5RZUDRuZSBWMmASZqtLwuWdsrD2evzFQCNH62xMz2",
  "key13": "35C3PxSdJRrAcdhVFoyj8i8qJEsYG36ZtqfjFcCaB4cnrffvSR24w5UnpUb2ZYMBhVcZ9pYo5tLHGRg77AYRc3vC",
  "key14": "HZs4Wc2ZQNbZroj2uvGAm3y7ruVBarH2LH9EE14Es3WKbdCs4CNKG5cpxKYEs2wJHkkees4sG5WBjPg2zBg2xeT",
  "key15": "51LhASri2zn9AyFFpnZ1dZzK6kf8KHxpvXjSRdgnBVGpEQeUMy7L7jkn66W9eJ1NsRgsnAMuGLFT7oenjZCiN65x",
  "key16": "5h1D3R8EYoDK2xCeSpvzDiHJtMuxi1eMhuELkxbeEMTwvTKhAFVppFHxnrtspiqoVNtJQC8kVgrbdni7KBvttyzB",
  "key17": "5YtDshNj4TvH3gC2riQqCAi87LJJHD4ZVBZF3PrnrVcpGNJceKsk7AwFYfzUKKVaywWSPTPx5MCFM3yzpJq5uNwg",
  "key18": "RuKTQJXH1Ep8b5U3DgrVKH2TCTrUiZbDJLCWFhGaeeF9UW5GdY9JAmqWA51ZPEVFZRxsJMGb9kVwJgGX9HoCaP7",
  "key19": "4zpQdG2neTaU88EWaxgQvQpuYnVyM5yg5ZLpM5yaPtHG8SVuCNq6yetwvtn6BWnZs52TUrCm55mopzG4Wq5fQ3wG",
  "key20": "5JHRFuTgLZ1FVhvdzwesuibaBkQSAqTVLYH21nfYdQpc91YX5rRxLcjPzNVHoeKphyoZZFLKBYFH8Qry32errwEo",
  "key21": "57yfKyKrbE3WL1t14K5aMKuoywioAv8xh3eBnGiJzEpzhoSkimm2ZKVC7Y5idYFcSt8E3Rqkgksfysh1SXUY73aD",
  "key22": "26q2Fuygiyuafs3WDHzpWMm6ND4jYX64YsBKNQRihyqUJnufBKkkzGxVKSQDmJXFxVEb4LxMN8tMaa6zftvEYC3n",
  "key23": "3sHtWKYFN9etcUwcr9iQqdsD3t9ayaSeKgUxtiUjUMkn1kkw7ch7y8TiqQqdUwk7qj1ujSPTS1pK4kdKVUV5h3wb",
  "key24": "4mNiJ2G2q9sRuYjUzXhnVFzPPRqNa11N6Wosp1gFkubY2YT8FzLbNxbCH2LDW5tjE6G7by5huc9GMjvueYfST1Dp",
  "key25": "3J6hKWid6EoLfP8mHFg1FYzc6r6CXHmUqPz3GHZ88FkabWVqhDs7eRro4uVJK5t8wWibMYCaTskj5x7on5aPkK3q",
  "key26": "4BBDpRVWhAn1MEj1CHCfbEUZBHQEiM9vNB8VupUQx3bBN94SWcgQyj7TVT5RkNQWmkYGFi8z1RJ7MqL3EYpLpeKx",
  "key27": "67EGy8EA5GCF44pdkDGYR55u2kBaazzSYUwyZYgRGE26Fd55SZC9aGG3n5pJnieaQJWVp6yWoc9vRTUGEZ7rU1Y3",
  "key28": "3FfXCnEu4C4YF5zaPecyE3KWnLrQH2S5wEmKKVoYZBtfTYW69acbfoJTafQKxCSen12RSBb8TNDcho33HvNQ8c8x",
  "key29": "62FVEXEuvyYwZ4mv4t9JX89E8pq4L489MmqdmwjozLA4cA1XW96wf9WJhZywScywxxEDk2JCYrtzeW6qgNTA58Va",
  "key30": "41LppaepwwGQv1vKuRpCS2pPfNaddmrWA65BgJTKX6gqQ8hRdE4u8rhZPVGS4Ak93UkBcn6FSCRkLtMM6ZeMqMGk",
  "key31": "2VRLrzv8pKkbPoPi32SXxZYxjimWZfu4jFao4QSQktsnH2drokZHJu412G9VcBc6FPVTmKsftokKsv2yW5sCyLMP",
  "key32": "3FbyUZHLpZtDquEkDYKn3AYL651gFn3ATFcE57TwHnxATNuccWDPP12kziSnLXJAhGqhbw4C26ButH68Zw6d7FFj",
  "key33": "3LCUjx9zwtPM8nQphaVCF4Ps4W5dxh55GyHDLUNBv8NVcjyz5TYjhozkPLoN1sx2vP68HXrFDYfvR44EkVwuhzvB",
  "key34": "58usFEmQdwiHvGBxdBfch6d9J8tLVEgTKNUR2Hhh8Ta5QnBFf199ckZTdwirri4F2kXG1GmJ4viSYpLHz8tCq3CD",
  "key35": "4HncDVFTymY8amMe5Njk4zCoz48VZXRGWdWX8xg8HvAdFHEnjnnq5Zfd9U4UQzE9pLHsiFTv813i5fuo9drcnLcf",
  "key36": "3LMtapE7BUf1a5F7LjSXrySNZZzAMmXJK4n5kfF95b6XLHnkbwmq1B2U6yTNfdzEZLQaLq5M3MhKJd96yheAnMwp",
  "key37": "iVREfeD1K17p7RbRN8XFbuv5kx7vWuftwLMcZHFAPDKz5VN4bS2EnBggUpn2qk21MQXsTm8mKFnnAQvcTnhYgf9",
  "key38": "2LEeCh8iwDGo6Acce3vcp2cfBKJ1fCFhtywDbuQALWD8sZz3AuF4TzKEvayHobwu4d4kFejq96dH2QkPv5zuhVCo",
  "key39": "QxhgZHBGsmvUkgBt9y8fE17qJ5H1JyVYLoyjQdDyoDJv6gNuzRp8Gura9ioyBcrqy4D785evuxej8N9AoGHHwdL",
  "key40": "4ZTE87Bqxf4tomj9XysPdhNnRYLmnvNsmqKGhmWMYNdF2ZDUG1vruKhQjqp84EX1KyzT7mjvuzc5gRR7u5bV2LLx",
  "key41": "3vydGxT81TgnM2W3xg4fK2GHVKtf3aWotk9E6wDmTsDKduzvvQR35Da3myrmwWfFZotjbvfmPS1fRt8M24XHwjCM",
  "key42": "3qn9YEBf2VBjvZ83XngKauyo6qP1PHAA8jxRmkV4Zp3uz4akjsUN4wrYKYcDGhJXqk7jQBmTZpGJ2LcmeFVs8QYh"
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
