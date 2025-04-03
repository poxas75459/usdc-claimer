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
    "3MgkaMxpDhGW3FWYbbqrAuXd8v9FdrZRu2t9N3WbD3yhNn8apVApkqc8bMGapgdNaspnAHh6mWZoXkcJvu5vd2MN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HvCZW7iScvqemuNqC3veDN8SdQLYAkrwxEFuAUrgGkGN1Fm13aSzNvcst6dyoP7UWz3BPaKC5zpUzquoZz1b1uk",
  "key1": "phTniko9AW2EX7cauJ6wpWvBmGmDGucdowDvrT9vSMHesr6Gdw1VFvhurjj4ALL52Cj7eByYnDVzDNwWGtn5yPZ",
  "key2": "2WEzdbUZHA4vg4jtDpoLznNu7Cqv12hGjbSPyNmQRD7qgV2UsHxS52xLE43xYW1HgQHMbMCNvWRTLzSGamKymBsu",
  "key3": "RW1YRcWCUDmLDL2gaWBL66mRtd5SzvwqBtFcRETmWiaMYabsXXWP9wBz9bQALBpjtZuq8QCdF4huG1uMH7ebguo",
  "key4": "3NL9abpz56e1BYrfmDtgtZDkR8nhKyD2BEYxwKC7WJHLFXgjeibybC1VraCWbqhgKQWZxbSW3Qf1upscBqQDw5uK",
  "key5": "vq3zwPg3sKvXaD9xax8vnMJq6EhbHb44QNXUsHMAE2vw15qPmpfogN4AXj46BN8PoTyX8Rhi3YUgyynVGDiuqXq",
  "key6": "Z6qXhJtFLZahQfFVNRVss8cJwEq6cBxaguqVSzTZiUUFaUjApyHNu2FoMunxd1t1XC5CMAzATKg2sg7T1hoga9o",
  "key7": "4psiRYsFs4CeCXP9FSgCZ5kjGfEbvPfKjToXspNQXAKjKd5ZQkbg9tfvtzTSijJyjFjqhJPJaZKoPbxt9hboHXYV",
  "key8": "NfWShq2zjYb4LGrJVgsZ9nTeabnfHByT7ypiBAULawnP7dF7mFUsKuMNtdPtzp7pBYnHoW3cKaffVSU7ExyU38x",
  "key9": "36p6hh6ef6CMTrJpKkev7E9HnBzwGAf1QMJDj2BdQkyWSCTQT9tEjsE5vNmjCpQ9yRHywuBE5SN6HbWBrwbdtXFf",
  "key10": "4tn9WPDWk5HwfEcay8p9w9zgjbSxLwXjcBUCUAx5gDDavz9qv67voSgW9RWvKxEHhmBVFYXKmRYw3JwRCGSf1hzc",
  "key11": "mHX516jFUdRZ9joy6z9sub2h4WzpwmmtzdPjYkXHTAdBjvti2wy2M9njuwyu2evpHcU3o8JvWc98J9qbooA4hAg",
  "key12": "5z7R8C5bkeZLUQcfRV2vqb2qftNeD3m4Q8eVsdByxYSjgheR8yKPBdwUeXkgCq77TxHcDKHR9KahrtDRcsDhWvfM",
  "key13": "2u5Z7fQB5Xbvhiducg2YCzHBmmYtgCdbd6vntNXgyKBdGjMFthCr7rbQvYuGDwntAH83W19zdeCcRaXnKnquhCWr",
  "key14": "5JehMmNz7fedgkwLExL4Cq5Amug8URbCYKUDUvRDCHwkQ2ykbRs1ZSJhkyvDD7Tme18VNgKG8UeHHpBZFVB9y7ZX",
  "key15": "GiqyCGg95NfQFBRcnDSjMceW2UY62F3S1iCzNxaqXHSnWM1C8DbB1LEiLuSy5FEqvGTHBZSL2om5vPBGhrRUPUz",
  "key16": "5dynJaAoywxp9x7UyCRuS2khoF7ufEKC7K54vKnikdShgC1yTD35S7yfk3sFA5rsh4WzuTMj97S4GVv8FLhXpz83",
  "key17": "2js8Jx51zKv9gtVFwN8Tj6i6MRR2PiMKoJ2gDs3wHa9XkewxZToXa8AZYDrQu4B7AA7dPpnCvixkbyyAQ6jKVHtj",
  "key18": "3EyqpRqiNdCQnH2qF6woDgY9FbRHNCGeQXSu3vDgKW6C3wsSsgF25HGQSSkrrMuibRxPARYkki6QrQFNbxdsc39",
  "key19": "5RSSqLYz7jLGyjiazxUUkZxfQbb8t8Msk5G3cxrtCnFCYM6W85u166hovFbRq24w53PBELteoNLC5Bs6buRaPNmA",
  "key20": "4gvcm59CWkKCHS2f3NuHfKTAy3p9QV27v1HWwDz8qQsDyKmJqYZhjxC326Pn94oH4DJicgbgaqZzfRgEtnEwUjpy",
  "key21": "2sR91ATFitDwPh9pPDc175sb6p3aWyAd38HmGPW4pXNbixEbqYDVZTRM5VccWXoY6wKq82JhWx5zcC7w2AS1TER2",
  "key22": "5dSc7ch7B28zp9bcFmLv6M5dy7mFtgpTu2EaTwBLqokACfNaMZoDND3ZcM7MiH15LnRXnoxuqfpGTRbPfjQAqRa3",
  "key23": "3Z2YgH6gB6JeAvp4JZEEwxdvwuiCGWmgziemnohBXNvyXt46hrzazWtUCTSg66YyL3msDpATwAmPyXrgZhWtUFKK",
  "key24": "K4oqcLQLDNBaYKYQxsDzahUkS1m4bBkNwbE615XADUx2ubkg8XihJMTagvZ8he5LifmHxRzy5Z6UzvxcX1GyJVW",
  "key25": "57zu3tSf895SCTjEp713txqKLdaN8NV9888UXUPDp2qHamE2ADU5bKXRKTf8pBWjcn9AC9GAywGTRkSQ3PuWcqYx",
  "key26": "4u2qZPQEbWjyBPmjLhFEVjiDUet99F9wUDdEJvgccVuDqRHQYFLmzwQ8HBUAZEAh18zxxwZDWAbzZja15xUdQH2M",
  "key27": "StgYqvoydzb3vtUgZh8oKp2WrnPpQALfTWhMX5ZdrvyzibpbfpTEuQRjMJKNdmvkPxdj7WGCh4ABQWzPkpCDFck",
  "key28": "22QNuGgcgNEFx95bKqurG35DoqJofeVmubZSeu131eSGjrqWe27kMhr6BU6vzgayWXQ8jdMSNendusfDJWE3hkHM",
  "key29": "J77tD37vW4aT9ancwTpfYPASNCyre8bRusKDzaMZ2Fz6gjtDD9nXdLcdGW4NLgU47SG8128NuseFi4kCnLweCDR",
  "key30": "4X9ff26ZhSEUFcLhrpkaKw2K73XNVsceke8VuGd6XhtXPVvZvy2iZswGYkXfQTNmTS3qdc71PcSfVwNX2aTAEpnQ"
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
