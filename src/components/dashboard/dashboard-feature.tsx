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
    "2Q4Yb1nJbkfFCjMxk8jRKZfjwTFjiosuwzuKGZW8cgLyZKCQh5Zec7384HH3o2V92quCAPg7vWoph1gbE77L7VPQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5quoxeH9TUth9xGPcNPCJJLATrHGsj7i8hE7RqC8o7HZyaVv6K97kLbRR1TkCEErw4YvYMpmsMCvn3qJnjuHoCge",
  "key1": "54ijPm6t9iehwCxgtah6jVCiqJshcds7gEQhJyrb1rAHrVETJALJK818gMcqwVKs2mDzxEbQ9LzSU26utRadn7nK",
  "key2": "3a41KP2uZPAMyWsmAyBs2wD6sKFky2o6s5AaCkwZ1jVX6MFoPYoeRDXUZBojT9aV4JJ17vdboNiWyDgKTkkFZcfS",
  "key3": "2PuEV33MmHKFkSxDPQbRPBvZTi8VfHMiZgwrtLwg8s8odeJhcxK4J2GZkC3tZWy5miYx1ze9b1qesuSH3aE5TbXp",
  "key4": "4bmyN7i4VinxrqFmx6ZpsZmxdD69jaHYvgtewUrqTZ2TcYuHYDXFEEEdQ4S7CKE9oeEjgnorPQWbuHjaKRHAtDba",
  "key5": "5qtc1A7swFAd4gvZSwLDUX6qeJwtGEj5j5yzPYP4nhBQhsNv5q4JCD3RCH3Yv7ivsqkJ2rCYx5b5wX3tXmX5cSif",
  "key6": "3p92XruAGiAWm7rFHnppYwpH7wxtBDCfNDcstjH1NQBaPgDXQnuZJpqJh6KDTgJbRmyNuUNN3ezNMhMGs1hcipdV",
  "key7": "Cy4yCccnZ4r4enYGBbdgVi5fxMrERMhHqK6NDoVMiUWvB6uSxsEJMi3D5uwsYCLXpsyW7kiEUKoFbfVoVS3AJtZ",
  "key8": "4VZSyGAETTANdqvvWEDTzqz3F1hnSyGL5AAGFoDXeXmmjJaK61BWcyo8M5KDykFr7KsDK6tV2fcvF87B52bB2a7p",
  "key9": "3hRLVKripk6VFX394A2AENzLttNsEKvWnLWEWuCvwvrDS7MmatVtq41uEcBRadYRF5n22sCddWd6TywJvcchRfj5",
  "key10": "5W8FcUmJ9uHCtoPiPrFjWj86E67jeAVu7UioZqtqLqkKzZw9aPGLccJVSSDAyGnUU2ZzDUJ3Uph21DDjtfRtid5M",
  "key11": "2nVA1zGEvP2RFLMmxTFt2k8XJWoaYgk6eQJLXN9hQD5qUdQMsoiuXEDTezyrk2GW8TUTE2GFkBgPcbCe4DoWM5aR",
  "key12": "3AznzNw58i9za9EJnAXZvKqpv2YR8355bWT33chQRB1iPsB4do6r8MJJGZTRvV6qUDy5rT1qoFb4zMAwaTQsRkDW",
  "key13": "3ZtuRpCtS6dG32QcCW8wU9E1EnEXVnvbrEvs7z4M8XgBj4LjznbLX9XBjfj5bGPuNbLUzcSEG7317HLBP8nHh5EK",
  "key14": "63JmfoFqfmfEVA35d7ZCCtqqkX3JvgzSCLhHPSdy9GHC5d42uRfkvow6d2GZmNVkVrZLchvM2fqp92nhdvrHp22x",
  "key15": "2Bmi3fLxcoB69esedi4y1mnrmrAZUaG2eabjTkFzgNFz19kV4fhH8iCwcmqddmsDz5cMdgw14fQLer2mLdyUqE47",
  "key16": "4V4kSNZfqYzHSPSeTmMKzMaA2hoH5swyWHWi4M1tUNKiMAMxMHfWUNTEkTJqH9vMvQMuSoHEKbJxXKjfbmtgMLkq",
  "key17": "49t1qQgT9Hrr8NpCEdZ4xD5ZeiMcv4F9GEdY6GJDdUty7ttb51nn6AwrMgi94zYoLsF7MXcjt43DDEaTwq1AusLs",
  "key18": "3BL5492TWkaCdEVFPyhrniPJLrJfhw8ui23wU7aaSD8hFwPEBo1oTm7NwHDvPgsXthfGWQoihkNQUYgPRQS5NQoa",
  "key19": "5NFtbiho5rgV7pmaMsmHBvj5bjW14bwHcheB2UkXv9UcM5RJaukwDqzWAyxS5t14mCTYozq7BRvYBGFckviCJ3bf",
  "key20": "2yFNxz1fPL5ouwfcUNsWUdUqBnMgaPYHo7RYHknexMQnBUmWiNYFB6zeUehik6nnh55YMvRKYGDauxi2zqTjje8G",
  "key21": "4ic5m5N71SyBR7vZv8GZa2kc1e1wDs35qcvBwRew3JteuAzS1XNWHVnSiMMuwAod2RF6fRh7jwhjhqwDXD1tVqyD",
  "key22": "5mPRr3m7RGeb8DHfbMwL8E17GVjthbxkndRXsVVsZFdfTq4aJsUqcyPyPvveBTxp6R2jVyZStL8iUWSv8pv9eTeJ",
  "key23": "35QxVCBmEqpuGJrbpvRnTSRMRCR8uoofJ4PDCS9Rn7Ntsi1Kdft6aCxncPWTfCfioLiZDq7U2c4BRAbYurwswEQa",
  "key24": "4Jvo52btS7ZBjAQ8NnthrUxmbSLaMff5FxwQ3z5dRfKHmRYYUmxgcbVAWDpCSAan4bzkDGew2DtHG7hHSRYJfns4",
  "key25": "3B4DVWmrygYFkki2jtSS7EGUkLs7v4DELNF8RUprY3jZyJgWmMbyQJ1TDisWRbQXoFPsw5VJ5MwQ28DPz8uXu369",
  "key26": "5m92jUVEgvBq15dtUuNy54PxWvBDSwPNSNpcSPymKYTvDnJj693TmiosWWcwcKMtM3fLspfHmCCV2EV1xvcZ6fqR",
  "key27": "5Dp2yJZFWEyUbUTVNwRDM5BAHHa3gWbdkiy9SEK7ebd2uoetbj7r9pp6ZmQheLHdgUKa1AHgmZCkdZJBg5fgoZae",
  "key28": "2DwtTXPLwB71XUtbc373onbKtkPHe6JdS5GkDyp7wpTZEyoHnFCCEvz6Z7MkMAEsdRAbpo6wyTPwDs4QKjnAS5xu",
  "key29": "3oGEttq8vXp3xVLeaxAEuJhMYoPW8tjVH8VQdppd9qPmN8pgk4SqWsvg4bufZKJjgyGRvGYcookZkeewV61bFJzq",
  "key30": "3DdnX2FhHwUnTk8H7MRXthJdyAS3Ri9nfxGkUTwRtGFmt7XZNG5XCC11u3xE6xLXTFtnqNoBMJsHqY9wkDVyMiDc",
  "key31": "3YzNLLrkUW6itYMqJVep7Vn4rMSwrjazhJcd7PxL91Luvd3sYarhCrsJr1mBEWTYJmHwPYn5qh1vRvQLaXvUjNW6",
  "key32": "5egcqAfWEkm4TRfvEXxTCWWzNZYfCDmiwTmyDUUbZdEuaoCj5X7ssTLpzGsX9AEQP2cxwPsWFMCyXiJDM2afwqfo",
  "key33": "4DXe3vGVWYHyy38AzPAUQESvKqYBFXYLhckuY7Ss24kMh9YmCBb3V622ZZGFV4x7sQD1fZD8r5XzHPxvKG3wH5US",
  "key34": "2Qni95vQLuo6EfEtpJoW2pBz19G6w64JewuqoqGotUGvTgdpQJ3m6DGT8SgNr4qrg2UpKaE7iirDMrRuKQYHoPN6",
  "key35": "4TSSK3qwAqRPMJ79tQUxfRcZ1gPMZhbiJZRAoHAdvLMpNv2XnT51QiPhqu22MbB7JCP4ZnPsNb4x9iBJnaqANSWw",
  "key36": "2wxSyhuXaPXLZ7qwdpofW8qQoQzf64QNpova5KWL1JPST7QVFLyEwU3swCC6jdBFu42XrhLG1f7cJPBC83MToQs6",
  "key37": "5rWMksWMP7GKbkqAXfiqDgHt98H948QSVMrJye9YoaUvtC7A4egYsm9hYNEwap4Nwwd27HEzXysQ6EyzaCo4zdXM",
  "key38": "3gLqpubh6rcKofPFsQEWV2TmcFWDN9Lbs3t13temUczvnfwV1SH7XrStnmx94bX75TPDqFhxTVBvtThTy4NKE2Lz",
  "key39": "4d1MCBZ8W1fH9ANYjFw3YeQdXPQd4QgeqfDAgGZqZ6XCof2b81ijeJeJkNdEXzzhhKCdCNpZrVLAQLqX9gbtWdLR",
  "key40": "5HY6hAgoeWy4q2RggPoEQD7UQ2xHr6Krfo7CUiP2CMyPfasPcQqDG6bonu9dyYUvKquw5sBwSu3vBGALgvAPk4nQ",
  "key41": "y6yzviYSxuep5sAPz2qeDjw2b9m14wMLZRPA5tkhBEZsHM7xMBQRUgrwvaDVH2A6fHC1Md9W4WXfeMy93QiX7sJ",
  "key42": "4yRyC9NwLvVUAwom8rMhGT17gLaFzURzkmgmCiCzWfdwJBvzYQLFjogBdJ7HD6nDwxruvKFRhrBYHEW94kByV9mc",
  "key43": "2fp2E7ENMT81kfKo6xLN5jgVt8Em11nXyEdLVZGnEbhFKf7TruhmjYZFbHnUDPXjTtKb9xXVMobspUgGszvEqbik",
  "key44": "eaXheyptFxriFqzGRmgNH3yxGrUdnaTh37fVcTY54YqHntKeBckn4SieM2icvqn5kJ6hRdFN7sQ9BdMmVki44p4",
  "key45": "66vxAi1bjPsRMxypqe22SEetYJ5xdiewnmVFNnXYR7Z83cCECGweVc5ZjDTuJErt8hN54bSdsWGbpshrmwUp4cbA",
  "key46": "2KngipWbH66QyBquRzyMxXvUDxejJA1zU55t16j8dqpDTBaeoJR7DAUEn2wFakpVY7mmpipWUw7vtcF48rzfF7Ju",
  "key47": "2pAhi35nTz1mQr82yZ78svU3cuJBYGyfzW44YyeZTfCSGz38Rh2KqQhUCiFGMkNJEEiisSqwqEM6ceTLQCWPEkcE",
  "key48": "45qbRMUPwGrMkswSYnTGnVsA6qBeLNAQ5zdNnUfWc8d826QomTvLEcp6ikwJhgYnkUvq7csbrAwsPbGUNgmTp2FD"
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
