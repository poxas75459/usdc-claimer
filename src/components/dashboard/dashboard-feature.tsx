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
    "4bzSHjjjGCBjM3DkTQzrvps3pgDs3m2sVpVSUVLksJbSsq15LqBB8sierNfPtsumFb2u8Sja5mTcYRYu51AyHkLu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wy82mF7stXou56pnTvsi2rMcVxUaB9TC7rFZoivkusFsveN7iPuW243pJ31c5GARje6fdQLvW4Z8jw615YELhDA",
  "key1": "3ZnuyASqdPZYjRkJDDVPvved2aUaPMJiY921i9YxjzSm6kH5pRsvGGd8vzyRpkPXnoy6ViqpnfkGDtmE2qeaGH38",
  "key2": "3ERdTXYLv82sQLQBL42VUkDSUG4LPDPANFwkcsCAdo72bbbFAHp3t1ycTrND5SS5V6zsWXC28hiZSeyWhzVomJuz",
  "key3": "5qeKEi1tWYJiVvwteWZbrWtJHSUVLa2ytkQ4rWQZwJ828AXw3HjFPbKuniRpbdAdqHgB72fzbhWXwaHNJb6Pc439",
  "key4": "3mSu6uFbYBfPZac8Z61kQPNFbZtuCtnyH6xagdhN9afKzM97YoyjpoS1381zcpbRYxSfYGWSnhN1UMDMJQNGJ6di",
  "key5": "MJ8s8EqdNJVpyiMvKL5KegqmeoPaidYRN1djwhSw8TJJ34cACazuQaWBCzNoCehhmsHsGPzbGKsokUaTGa6JoYX",
  "key6": "5Z8Hi9CUcKh6FmAF11coXm3H1b8oPwAYrkZXR6jcs5Wdr2GZAGW3FoRjbVfAtyR7pcDw1YVRakfwPKatc3kwhjqd",
  "key7": "j6YqoqbDcMsnW1j9tCFPEAygSfXwVCvCmFzLT1ATzE1REzUpxd99cFXBFu4oRncMLvds4zD7d9Jkhd5UudZae5x",
  "key8": "KeU5E5cuBkmS3ykhm4ePeXmiABEC13x9YZi4cZrubzPCbbv4nnFCdWKV7HKp1Vbffggw4pxHW479iW1ifmpXtkD",
  "key9": "51iHmh1cgsMNcq6ud3peAQWHcbSMfEnyVg8EKN4zb3wPrYaHPz3UGZrY3XGaQnm5rTVSV66NLqdVj5N8ApH78o5V",
  "key10": "2oNuec7T16cajSjkYcW5xid91rHZdgcXAWCmPSrMKfFqKbzxQuhfJHJLPPZquNMxSwmNEuu8ybznbTFhTzfaHf9X",
  "key11": "2wRAoYBiEdBe1faoEAgkiS9KD1fX1M5CTvcEfXxZf27R1CUA1y2R91SD2xyUP71nvZ2gU7rBof2pZaF7qRgT654A",
  "key12": "eNak4TAoDx1XzZ6nL9pvmYm6wsZwRY6fBMM4u2m9pJWvBBCWGEXm13v4itSqdt1nwgTdTYGxayZLuMJhFtvVB36",
  "key13": "3m82CTHXdYG8cZmm477itsvUucxrpRcNJR5hVeq7KKYys9TmocuuBbasWmbD6DujxuabACx9sGWeGdzZgWuCq7Aw",
  "key14": "4QWmoekqSzbTqkFZ7MuCm3kLTsfWu4eQvfeDk9G866QLnkNFM3aSLJCE9ekk4g9FoV3VUK3MmVoHA2SEQpAoDJDd",
  "key15": "3BvF9fk89vuqdKuhmBitAS769ugqHRKSaFm2EL5dJbQUr96tyibdkauHRhtDiFGN3E4BU9G3Bx6z28Pse4wjrrqA",
  "key16": "4qHfvuEPLoHpWMqZ3FwRMbAn9sj3CVJ3Gzq6yR49ZTTBwAs8tuj1p7bWbvD29kbwmAELQX8JsxcAbGizq9BcnxnT",
  "key17": "51EgYL5pRLXocgMLp97zZ4yHkgqRxc48pNwr7NFKZVGPn8Fa3wCchE91FkR7MyheHF9NY6C51wW3RcS1eGubpyxk",
  "key18": "FQUdGj1aJq26onjfECzKjEGqaUNdodqcjpCQrRiKWXVsz5rQYruxGhyotu18kqqQLfu7QGboLdS1gpmNdNzgBkU",
  "key19": "3nwBmseYs2PiHasJ7629WjazTafcvHkavfJ27M3Kn7wBaQRBZpJQRat1v7XNGzEycpcVeRUxWPjcvsY6GAe64QzR",
  "key20": "2mAVAtmv7St9VfSy11yx9f2Po9kZsFq8Qrwb8sY8okhFWLz4qS8Zmenij6xd7DnpqGEp67D5AV8raxpmiEUrpYgA",
  "key21": "4H1gogVBHMxH13JTwZfcCZL2CeYD7LoKYS3vQwVMBkWLzvejoXEDznCztJMBSArB1g9iWMUF4YkWdsXrmqMsxYzo",
  "key22": "24JM9de916eFne6z5pSd1unFx56cVbaVcJ2Ydgka81DX8krH59quNntNUfevTaf27Dv6XPo6zfrZ9WojE1BGwLnT",
  "key23": "4YcPdqAWd2AQPPr1amiMGTjaL5Pr5D7KxwtcKA4TS9NDmJ1suaR4rUTXNqysfMz2rd9GSwgtvXsk9DeXvbJPLbT2",
  "key24": "4RxZ88F4JZQt9A3oDjGdqLnhoS11GNWvWsHr6dJpehdzCfLwuVLgestkQdKcKEpPtLXQeutcNDUV8gT3YkZRR6mK",
  "key25": "mueiUP39npiDc8qqDD3xjtApQT6DPgtiLsFmyt2GnaPUjsw8dRwSTxMQFsEJjQCYYj6mrY7uZrSoH6okxJErBbU",
  "key26": "AD67SzmSWYghajKD6TynpT94aHASLqf8XNgQCvAjx3YnFHLA4pe7eYFP2aBfDchiHg2xWfs4EDZy3C8qAnTATTU",
  "key27": "4Xjsriw5a5hdGFMrzdNVMuG7tPfG7dHZ74FWTMNXtHsGymyHuXLYQcA6QDK14GU6y87PxuYFM3C6TR72Ge7yYzLw",
  "key28": "22cV4vi7QZXs6NtBu1JhMbmK8MECXKFuPfniUZA5bF6rvc5Dj7QUsZgVm99weacEEJ13rDnft4XVLE4HW2BigcSk",
  "key29": "4wSwW2TsGBgRKtepFdRWZ7FEdtmoZWRe31F1ocPSXDCG81RZdPKYBTTyPDWpxCnGBz3Si5GcPrbiFdL54CBvF5Tu",
  "key30": "3rWwCf5T6r3zsVHMvYji5rxmnrtpYzcsjMU5AGw7jbFuuqFRyAubKpjv4AiCbkYnF8gj5FXfENvpnSDAcnDSknGi",
  "key31": "2mDWtrE6HSpZEm2TRBycgRfX9xWWHqXjQSsRn2ofTKszUdH72tA7KLrWd3sjW3SovZqaoQ6nqtdXbDtvXBNC7VFi",
  "key32": "4NWuNBqptAcmKGKxVmdSwrHVwWrTCYpeumwANEN5NYEkBv4M2V8iVqZ8TQ8xinfrud95S8mLfgo4iG3KAfCkMVfe",
  "key33": "2PLGVzwvGBRZmc8LpYDUuxK5ecKT7rZoBHrniKv2couvk7xa5DwLqhEWVQJEXpCSm2WTynCjx63VyV46Dq4M8wrY"
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
