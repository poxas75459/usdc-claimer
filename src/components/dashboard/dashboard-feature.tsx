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
    "5yb3p2U7azKWgqCwZZxjjLtsfQ6RPisbirCUVUaFHLmizcgC9wsKaeMaUWN2qcuNg8mgbxYMR95PriDJg9QYwpNq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uP9XWLPSKiWAgDaXXbVRyTzHZLE49Jdnc32ct7WeXdhoigyVAN193WzbcNzCwCWdQnDKEpAPimJ4h35h5dgmgeK",
  "key1": "3Ni2vMAunbsRjDMkDxho2s4jMz8mxkpKHMEDwmvvMKHYgkDgdH1fFaHQKtL7bnS6KmXJyjZ9rHD43nFgdL825o5",
  "key2": "2noRGhoYF59Baa4nLE4Nae9wCMeDojS3eqL4G392SqD56pGaaBEfrKzM514eUjTjcLedWe2Zi9WgpHDULbpow1kv",
  "key3": "bi2Boky8hrxiTzE3a6XS2gZY1D5GyMD6mZTDQ4DjetjMJRfSZ2o7okWewbRK5pUomEgNhtkj9B6m86oyJxixCmU",
  "key4": "66JNvAvtBzZBiUhjr14uE5X74wbvdpd2pTQASUajS12YSbzuGcGUjWeqZKtzWQZ6s6vM9NobzTxfBLDBFBRYo3MK",
  "key5": "7fypMbkoPq8WEj1Bs9QGpmB5NdyaCcEnrMQyQWTJg5U11cSPhPuPbdf6qVdsiFKD4h4uGGy1PjpNqGbT5WYU2LH",
  "key6": "3YJL4caXvFAAEjA78N8AF6cBEHJ8epym8szcZmg11vS9iM35HSny7nuUfDjgLAwz5obczKDSWGCiVLu4MSHGJzGL",
  "key7": "3XifUCQNsj57FsRjbco9FwhCWfwwrwxjRaRFCngmWnJDkVgrHYpT54SC85Sg7KMTBQ8KiLN3oKNeqQG5eDC5NJ2U",
  "key8": "2Ww1onLWwSPzR5Lo33aiQfozgEWk72pYAdAcMxmnCXA7gDBzx6Bg7Ysv94Ckw3JTHAD8HDesYzhCtwGFXj7XFg9F",
  "key9": "2vKaVsbyGZtBHN3uFN2jHNvepu5mDn3CFyWbtbiuxmPEzgrqyBkqFGofpemiwPuKUQyuz8bPxVLo1QAmuKgNhtrV",
  "key10": "5fWApJJQhRaJhZXEjB7g84yMpH4WJU2fG4jj7v6mQCUxTgyUwbTHQusPEwbjMCNWWcjXCdqATFuaxd7XXUTZgxrG",
  "key11": "4BW1PtKGzYE5NmbJ7s6HuGtREo8uS1bYgUzEL8gKLgpgcdS4Q9w1uzbrMvWHaEx98yDGByYPn9dYCbrQ1wbajogH",
  "key12": "5yGpjkYfKAAmdgSr1p9VD4Qrx1gWbRQxaCesr6uehBaRhzoYL2BnJ8GFQTc1VtP6ZHuaBBS2KdUs81LQCBsX6ANg",
  "key13": "VMmH47tKACQ8j8JP8GACW1M9gTu7rz3S1kfwA2Urr9RsVFtShk2SXxuULAgSpGdiEJYAuKWk4yvUbbB7gYMb3Cj",
  "key14": "4MpLMsptKPTJo9yXjT2HVJbA2ouTmA1MdbmqyUAR3saPQKjQNAYKGiQdGg44yX6Bw4J5aSKGiBSQqDDxoB78TUof",
  "key15": "B6dsqp1Sj38GT7ALKdRdB6Fs25gS3SCB7aRGH1epp5EFpxdEmeN3ZV4s3ftgRZ3ivJ5W6beNakbCQQiwQHYsYhr",
  "key16": "49Dxw6Ar8NKGBvz9U9pPRqS1pHFKFNGo6q5s9mbeDUB5oxDYKXts5krppA5a6ubM3JefbSRBzcyZp8Bsubq8YCZu",
  "key17": "4mTaB2Dr4JYaFuoEirwtphW5iZVuKwB3xbbpWLQY8yPii2bRwroewYwLWE3xGe3PRUgydKsA8DKYMsUQvqBz5VSe",
  "key18": "24uUrfGajpjjgw84Rcbj4QgG3fAcTa4n92ZA3aoEEqiMnEPauZeJYZf7A7fLPbHRDaDZyQRrPTopNnn1ktjDs9ef",
  "key19": "2QweAkSzB5buVN8n1RkQ9FBTh8TtpTbwuz3tYyxAoThriBcGErdC5QG7kJ127fHjSXQ79px5uSTQEjGhG9LddSpP",
  "key20": "5x8CKbdzf7ae53fcc68fDDtL311fdQfpAyYas6NA7SvgKphN46Whd9QhZaSk3iUqtaXuTwaqzbHqzoSfKdat9bYw",
  "key21": "2P1KL7DkHMuAv5K5Gwsxg5PfMTpPVych86KLyRFZVN48CvutWf9NmfeUKHZWf7iEGHqo6G8EZi1J1zB759MR5yTQ",
  "key22": "4ubWzXGYeUYfHtFgP7Zs2NCuZgtbnVc9myfose5EtbuT9sLWFjv5sU6j1JqPi1ZFkppSLbAsRDyQKxS2MLTZ94AV",
  "key23": "5LfrQac8vyiYGmXeHkYqK6nbcomVUGU3FgRkRaRgUFjfQzaKFYriiFf8iAFwYCzpf4zFky1co1eGawuGhZwz9LfB",
  "key24": "qZ7Tm8HEuP4HG5tuTWEn5G6wgrTw9VgoGMHjWCCmrxHTEGt7rCEaZtoCnapMPwg4vTCeqBKwEzPmAkjikjXaP1Y",
  "key25": "41da2WaSJGwFyCTFwjDBT1FMLn8vTfjRvyeRyDiW1nYDVKRHXM9JN8E7Vidh9dKwNJu2j8WJLBY2hQTZ4XaNUdqZ",
  "key26": "2sffFtYUpyjgZnyJppNmmY7W2zfJTWpRUfx8vNVSanJBndugVrUXRUCYQQQ5fZxjSFoe1pBqrm1SYYxgMVJokmme",
  "key27": "uJT49pUy3HFZdoJ7kY4gtVJKXS6NraE2VMDAiydZXFtiQeLBWV56dmYSvy2D7gbe7tXcVpJvDGsrciEKNELd2EF",
  "key28": "3jkWK6PCGfM6XsFVi3chXaDajvunMCKjxSu7mLvHUAG1S6PVRffqDpU72iChmKSANE1Aava35xm1Rcy52p7tmp7Z",
  "key29": "TTmCFnzBeuqPQhxdcjqn1p7zkfT4bAAhSpvYMjF1a4x57AT1zAGY34xhKx8dxzxeqeZ9Ruw8BRXe95pDbtRZYQD",
  "key30": "HNu6RC3SUuMtmFQDfkyPD6zf5MXVzWN9qUXKvQEN1hyD46WD2KH4kP7sYyCxaVfvMtpcdNKHKPJMuwooC27PPay",
  "key31": "5zfFSunvEkwgo6MLHCuNbBpC1LcBU26us4XQikfS3yDub95bZjUUa2UzsEUsRkm5DrHzwJ2Z84zUtre3C9GKhYFM",
  "key32": "EGrM5nkiUSfCttDUmWrN6e94CLnqRwnfr4QK3jFNHMSb5yQtuwt2iJh2mRDcrPRtwqV7TABTa2qqq4cpq38HkiZ",
  "key33": "2MEqfiVV7YDPWzZRdQPC8fy3hmh2LP8GyisPHfLiiB26Dhc9bGzPFvYcXc7o6bx3LXXoCXHemMvxaGrnywTpaxrZ",
  "key34": "31fbk9nykYjk9eCknXQEDDkmXje34GF5XNPRupacxJvHfrum51RLBP5agaCgf88Cu2JTUTKxaGmnv4YpFBG6eBwD",
  "key35": "5iT4Mo73zxifwGuqivrWfE116YeW4vk4TfEgwUYaty8v29MFHZfYLhq4GKgqR69DBdGFXnqAg55BAmcivFZqA94e",
  "key36": "twStYiWbncJ84Es1ws5vxNCwcsa4W6N3zcDpa3ky44XunnyWxceqfc7NX58bgYphCiHvejQjEnXSuxTj6eQ3dhU",
  "key37": "7u5EVaE4RidGfhP49sFFWG6TXDkjzwu4dVTvLAZcVMgCgKSUBiQYTFsnbyFRHpf67g2Tq2CkXL3idanZBfyqf4P",
  "key38": "4nqVy1gfRjCBtso9YTbyrhQXD2HxzCC4kXLETfJ4fvDxCgwTCTUg17JTpn9XS3SMQTEvqtvokjkrkPeKs5fm2Qm5",
  "key39": "4CDDAK3MjpwwhJZL5MNjPCeXscnfs3Y7iHgfXjYJW2BXnABgezxjEZupBT1cgsgLVDexYh6TRGTvWBdEJ8o3qB82",
  "key40": "43ZpwihuG1mQS9KvEM5CxyxDf4JPSGNvMkd2UsBMurFrNYDW7z6BpcEFGryPsb2s3VWg2Ej4sFZyo4DF8mEPJfca",
  "key41": "4Wjc4LYkpf42wCXCMeCVNk4MEcAYVpEcMwQck7xWYM8ehpDHs87htBKfSEffqnJ6yuD4gpo7PDRWY89jWwpRZPsn",
  "key42": "4dzPn687jsuoGgVE5HGav5jDpvgembCfRctr5MUV96qWErYSXZMBDRAEWqaPb1xDFue131btASLwV8Sg8WxXj8VP",
  "key43": "4wwMqE1wkUVpNf2yw5onQAvWPCQB2x3V6jAgZ91G9kFQoFosA6ubG4XUp4D2E6tt5JYrnSjVMcRQGLAhyLyN4Tda",
  "key44": "3EHA2siBkvMLk3bPQ7X9KYd4TgRsbYrFm6U3QdjVyyrc3ShLz7SyR4oHqjYu1GvTsYPw7hZsgmBVi3qo7WoEdorr",
  "key45": "4u3FzfCy5qZaEzXs9mSSVMbySCvEwsYxhK4hu2dYwHqAJsnBXpTpfTUfLmYRjfSNNfQYDA5mJ5hMk58qHZ9m4XWg",
  "key46": "4qrRFRz1sjjaqDphp9dx5EcBR9TQ2ivrnjFZjTkgakeYPXL3sxHLabpTtNL6R376Sc8Gzx4ZwvgdHDwaWRWvLnGp",
  "key47": "24eDrR62mXQUMGBKoVa7Cx4bkp1vVNs8tCk2HTGcULyugm1q2SLjkvavBsZbBrWm6H8EakSUEdFS1M6JDN2FpZVM"
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
