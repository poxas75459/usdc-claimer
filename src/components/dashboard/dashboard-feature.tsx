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
    "2hyKRv72dNHDiutuZ4JgcsTxJ8wx92p5MvJm3Y3j3eCoEQtJJGtzU2FH9qtwsioZgYyUmewGMH1WwoTAvfGUy5BM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T3iDwRELup6JnaopqLcuGXiSi93LaC5BhV12KZP7Bo1pYAEDSa7cuVSwZLEF5MDYeCT5ouSt7MSrjD3k1ZJmkvK",
  "key1": "4U7irffHbGnURzERjJFdVn3dC2Vn72MQ6kPugnAPFvSCwGuzcKAU6SFWdrjBzdUTB32BfyB3hfqxS6MDXtZXyN9k",
  "key2": "3ubanQmvDiyVU8xo2RSZYJzR7YEwbnAtWpnv23GSkyP6PtnA2r4te5Eg7QD3tk1tUZyC7BDBhY7PH8tisbL697NB",
  "key3": "2bnRKD8587XBW52zLcBfBSjrwZyobHTK57mQRasSbsKApa1rkQGHzivwonPxkbtLGA43CgUvpUVRXMm9i1wZWFoW",
  "key4": "2LqQwccF9eRR5fxJiLuQxJ3vQLywzmLY7fZWknpShgsGgt1oyidjHfuC8oodwszVWpVKBhYVRLK2Pf4LH1GPfmoB",
  "key5": "43peS5UfDfFvfBn4PBS9qtTmRrDP2EFxkeFHEYcxZS2wBNNBAJVheZEot2F6S2kMnwQC2nhjnyCJawNXefJ4pqGW",
  "key6": "4A3KGCn5YKwtLXgAq7WTbJLYrwvDggrQHLqAXt51eBapMnD9d4sVwEachcFXhHgZy1gjDj4FFLJ9JDhz3EkQgixw",
  "key7": "2vVrr1LpegAUdv1yUqRSpqZGniUb259R8oc41hMXbr8Kn8yTNiMgMTWfHnUpD1aDDT26PjyKTHioJ8DwHaffExoa",
  "key8": "mtn6PLanycSEXwuwuKN8ULS1uBjbHZUhSrKRaKBHkTk83xY4UPsXpQYowkUzDHvSVGUcRShjupGh5iVN6g8uZPt",
  "key9": "5GmJSTJ8V3WkREcXV1ZrH7nkyu6tpJujJAJgBhnw1imnsvEsP6KSqvUe1KYZNx45eyCss15G14TjSXVPtPsX6Xc2",
  "key10": "2LmLJD3tvdFeUvb6qLYhRNNEitLoeLEYtgas6vG9YHyhGR3gtm6PWkQVTbwNE33ZmdZ22SLzzNUQXwKeoA1X5m4p",
  "key11": "2eGXcm6d15sDXj2u4bdhYTDdXizidMAG8CXtvA2mFnsUZQaBG668nJe1W5mLr18USzDX3GR5ttGhDiZ2Y2DsiuCA",
  "key12": "5eqKafdUu8hurUSuSC5X6WXYuBo4fbnkBALt3CkotugttifNuhkPXoDJURLWvtbn2VMvWYWR5rDWXy2uSbd9GDgK",
  "key13": "FZTC3Tc893AeXjkeRxRrRTJ3o8pouMe5LdeS24YdMQA7SCmB2kyWS5yAzofCo6h8FXMAXgmyZkdctagVrWHy2GN",
  "key14": "4ECdMzmxrDfgF5dpScBAXgwvRhE4v62CK4UG4u9nXCTwSLvvMCeGywKiEygTfPGRU1M6HxmutNyZpiympfshCvkD",
  "key15": "2Z34db1fSVxaCaJzMXKCNioquR7PZ52ZoX1KBPHT7diNvxfm8gaXzR9ErHeoHTs4gCZyqnVkMouxGaQt4pk7PqEC",
  "key16": "2NC1fng159vovuqUGSPcqNmSfGComBSKosbRfZC9TdpkaRth68BFsmtj4FJ2zHPv6YBuKV4So7a8RLSnABNMNnW2",
  "key17": "2mYosyMopEHc2DuA5X8nQqvhrXgCfSQGAVXHg6mkpBCEMSudZPgQcyWrHJg87VgyecGZnRzZHJ924ih17wQ4MdUG",
  "key18": "5JNsyAyLtQJvQdh3u8jN1qvbDqdZE8jgkriPMmPHgc5ZmWpnTKjUiGH8uioCmHjbCQaZyvTr8iVyEJvntgYjZymb",
  "key19": "33VBJVZwMYRwgFkfkz8bffshNkQqUUDAeY67QhpndgMzWzBghpWm8g6XSzzbErqYpb21Qx4TLV1FPM1nYkK9Eidr",
  "key20": "THCnQj6h5cwZc2yW894reUSD29xaS9FF6SvkWQYuELADcDEB5BJFmJaR3ujKbRh7Js1LaEmGXd3idz13vQswHUa",
  "key21": "FG2ZsR1Q42BkZYW3rNKnVPVaBa5gGzrcZPogz5iyM5RQ8kEEYhoVKj81tgStNRgZAXsD65B3A6XyP2PBU9J8f74",
  "key22": "2riiB6M7bZMMbsKj73fi1R8VZqoG7BaGDvNEjZvGLK5nVdrJfepoBYRYs6QbXGtgZC2c4b5TuubgqqBCe8Ja1yUg",
  "key23": "4w7teQf7kgBXxwAoU8TdLi8JTMDt9A2ZruPP5rQEFcQhYnWQsyu9FGsmfe2n7qxAh7CKqU6RaTmtLdYSehN3L4HZ",
  "key24": "Kjg3LgFVFQek8AHryHJU1gRS9Vd7KbNW3Us4kx3hHWQKRXWNgLGisoxrsJKzFJjykAP2m4HbocGKLCdUrNz5bMX",
  "key25": "2qLVrJ2CuN5TqYbDR3EQ2SUcFdcoCa9fd2AP77KkUH55WK8JDTCTeTMZHEaqxF2yx1arj5PQUUtURCCnGV7TowYp",
  "key26": "AXi8Z6c6wkKkD5M8Xa4z6tqP9ARbdBEhboLBnCCtrYKrNEN5LbaKAA8z7ZSA1Yb8MyFHqTYJfdk6NGoVTdXTNMM",
  "key27": "C4nRiWgMb5RHWktBrXoSuyaAa3DW9Tag2gdpuSPd5nX8LJmYbNhv1ZBMf9D47VwCrncNvZsrts8euBzviJ2Gfri",
  "key28": "29qBMHXBk1ESRK9JMgPMceW7eCeid7L4zGRpFRehxcGMBJE7rrwFpFHf9U7oWKVygWKqpgrNUmQonxvKDvF6A2Xq",
  "key29": "BGzkTtnK8APsrw8sX1tiLTCXjrozQ4fLZ4mtdDirdcaFLN3VhDPcvRGQZ9pqKtL9BQmaprnsQYPqCCXYicDNkGi",
  "key30": "3HLUNZufYt388gXybDSyGErxU4C3PfgxPXMNCTwg99f7iWtwDc3eXDCK5oJnRad1tXLRx1vWJ5yLd2u2HBcLFVGF",
  "key31": "2jrZrXn4RWb2bbisHE3vQ4ePdy5DgBpdsvQNj6CGovSFEyguJ8FPoA6Mx8PtLek5vRzwF57robpqoG9EEes3rG51"
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
