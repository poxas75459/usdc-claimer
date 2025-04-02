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
    "mNkFreHYWeQEGiRssLn1pgTZLpXo3HMSNzetRSf8M5xpCKo3fc1718Dvxg2pumUDLcH5HhpAf6EfPy1xXXxCu9e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hdyXcmf27ZXsBcWZUSHpS3S32pxkk3o5LzLmaPn9JwbJoqsBdJaXLLZi5Ye3YnH4jiKLj1TbJTgcfAGhhGwBQe2",
  "key1": "5Rtr16BH4uS4aanka6CLchjpXZiz9cXQptcJrT18bgDQC3kBsVsWgYowRRzosy7GX5zrZARbNeuq4EtA866Ztkku",
  "key2": "5popCfmPgcUF6tJqFNwPgbJrVAZaFEGmGwg8JJJxjaJRwdEpeR7trENPdXbuifZcPD7cUrAHoJNZ33QxtmoozqG1",
  "key3": "3ea4Azn5368Br2dMdBedR9Ko8MaSgvxQM1QyMA3hEbBaDrq63GH4vFXDjzNJZrHiAJthiagARD2sb3LUMKtdxsSq",
  "key4": "5Y4AjSKTd9t5ETuTzsff7Lp6y2Z1tXtu556NELtaASHzctMj9Qt22xiJ78Z74qwyUK7PD7yzWx1bTQanBy8NQzZr",
  "key5": "3Y7B7sYUXedJzqX2oGGj7hDZqzftmfL12fUk68Ni5SF1p6MyPaH6pE7YhQCd1CHXhSx7w4aYocq37CWqK7EuAqns",
  "key6": "9n1TEVewyK2VTH7ta9BFadrd2Q1aBZHM4Ki9psFPsLMsruD8sXMzMwdZXQSZ9PfE7nYjdjy29R5BhfLopeGQfyj",
  "key7": "2j65HZUusTHY1zwzwgGnN2N274N6votYBfz1moxmr553ZvSardSVQiCzrG3AMpYSHxjQPEvNwP1BenCvJre9QG64",
  "key8": "pwQV5FqpgB2mWuqoy8Mp7rdnq6y9cNPwq7SZ7v61mQMQQKdo8nNdbc6nzMSaPVk6cHfo8sx1s7NYudGjmGcBXVM",
  "key9": "4xGJ9QpvQQkrawgCEeQ5x7oSnBZvM2zZmYDuyPe78F1641K2BfkVTMnXyFsKRWE3EFc8iTawkZnzM9TAfvWHWqQD",
  "key10": "3zqrKRUBs75BeZN42FyKgr1TmXc61DvoTsB5nWLpVBT3nYo5JxBQrchojE1uVUjMVcvm4QxBffcnv5PJR4A4zcdX",
  "key11": "2zR3568WFt9DNj5sH4ujiFyJqHpWfiJNArRYDmJ8X1zhorXBmEMV6e4j87GX9ZrBMoHHmHSnSAEDLVjAcZf89afv",
  "key12": "41vrF7wPKDxfm9x6vtVyH4VFSXyE4Zh7qSbw9ouUfnXC4ktGRzeBURuQkAJSZEQYfHGty8pnbmAHQRoqJ5gj2kDZ",
  "key13": "5Q21iKaE3QKEhVg3KB8iWZH9EW2EQC8BNWEgE1WJjYveriUSzFEUhnBhubVQWuBxHkSRE7bztnESu6oRMNg4rDVN",
  "key14": "24y4FoiM8qeKh9CzYdV1cohx5TQU3mM6qov7r7nfpPSMsWMmwznMPwXZhG6aHYEFetET4XuuvwzU1e6sBKZDyapp",
  "key15": "5qMg6evbX9GSet8SuXqT1iwrD6F6PA5k3pNR3mcYGd2JRjSnu2VP6eHGpnyoUDfzB98NFvGVjHVyRaUeXRxxX7vJ",
  "key16": "4gd6XojrmvP24HbQJu6PZqGqjMNPNKar7V5to8r2juPNA9vvrKhUjbX7sXKSfsFnLJF1V4kFiNEfpw9jZfwX8Aff",
  "key17": "2Rng99Ry1zRgPhqur8SZCxLRLCy6R1RAQtZDbzqvj9DqcdhCzW44H2m846KurZgJwCgoVzHUXRKGUCaxpwguGRr1",
  "key18": "3sGKDm1FaFw6uhJehVXFopsWjbTR7PXbmXqwJgDTfpAtPkVSGsApraDXyaBTNEJWiBZseZaQvhp3uQzMXCWZVfvE",
  "key19": "5Xxntwj2pQWH1YkzawzRmoxST2XncDrxyyzBZ2MjTzXse5T6AuJT1QWYG2JBCQxod3GsLRnnZSss96YAVN9AckEh",
  "key20": "ierusGahtgLuYn3L91eWB2HLDTYnG4VT7zdwQ99jMfpCwkghsfamQqazUpn1kdorEwKsuZZx3XtRfCBTiUuYeFj",
  "key21": "2J4tQwfbgAmZTJxrHydzt9D8NacDdwab3Gu78Gz4TSVxBaGDQjVV7A6HVcKKHGzrQTksra6cdsPBvEotZ9gfAYJs",
  "key22": "5o6z3wU3o3DaYEkwZauXWpfJjG2WtRjnBWvJsGrMwrETTMQmLm2TrSqNgMSQbKNmAFCvgCwEge7XUsHdBzGiTTd5",
  "key23": "4aY3tWBDaS2m5yexrze6tEbt3xkdJLGGUW5P3Rff8d42H3e6HJF8CZtbkxAFzj4L78YEPPLhYjHYCeQgHRNQMtwK",
  "key24": "4AZpCuik1BHBHgEit3HLSQtiC9svx7KUy8xhmXgbqsvESRP5ZUDDJ4QcsRMmcxQfa9vxek7hcwXLsX9qaTu5yE12",
  "key25": "587a182aMpZCgfKsUd4dGGrAFWBLX27SwSW3cXPzcVZSeqhtXe94MXuFToBYpB9vMfW2tMtvPuh6hwjAV9zDQAmR",
  "key26": "2JYx5Mv4jasCyVEskkpKx9gg4zn14Bp8zpoGaGL5nPMPhB7PMa7smvfL4nWwAaZDQtnDPM7PZRNyhkp7SEoJvHpA",
  "key27": "2BucLDYM5zst9VnTFqKZw6h3YyayBGFc9hhBDmhaJ6vMjjSXki8Vo8LeLAEHJzxWtmQPFRQu5fFTvjxSmHqBGf2",
  "key28": "4HG8Zoyc3vqB3v44pV76b9wHBuwU3Qouim9GzoxRxT39DtFm5TGcuuQw6QukQHFwxfbbcKwdogRnC9CG4B8EiSss",
  "key29": "5VJnwEQvqeqjZQcKBiqssxW5qAnQMXcFYrjcgopP6gieSuCZgXodhvBaxMmWBKMLGHuAjB1sZc9BTQ4ozJFqD5ph",
  "key30": "2phpSqBiS3jxE7qnYXz5yt1CzX8pyotUzLqmauHxygW6S45sBZScB3LfcZuH81hTRnY8CajbKEwKLEhszwGy8jY9",
  "key31": "3QZqmhH7iQGaCbVyQSbsYiucZn2wtgKsaYA1kfQeqmMEtiqsA5gZNbtztDWPdcnTXmYcUWdCGT2Vdb4eC29vHPas",
  "key32": "3kKqk6AQ8CR34LuLLZvRCdRVc9DCk2cR9XRH3aH41AUbfmShWnzLYFida6wVMnQLJfoxqmxBg4VgpWgic4GFqQHJ",
  "key33": "4F1UtPJ5hT62QcmsU1syYviLm3NvASkwrKFTvz48N6RYc51F8TWVpowG6w9fXLiXKLHQP3xN6Pm8d924PnQCYRTC",
  "key34": "36wue1iwQWsacf5TErBB717Niztuj8AzfQtgj8YHSM83Kv2GfD8ynLCnYfbiHsGiJbpQcKqcZ8gaqV4MvjokAGGQ",
  "key35": "3yN7B6wJCViPL2Z1RXjkAr1RV8RV2uXNm1Y2rsgr739dDMcjpxRwYksYNptxMy4EaTZ71DyX7ehN2oqJaUpfGMU5"
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
