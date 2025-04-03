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
    "5VUHUmXAbwT1h9Lx6EAyG72yXzGVqUzRrdyUZJbAbbmNj7Dxwh9jTeT35CyDCgmdjf51o4H1agwxL9d6WgXQnyv8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vq2i3y1rbrtMU7HE3SLJfiH19JSLN3v48J9Ry6JUZJT3tVxvjYvasdtfLybxG6aQpdJQJ49EVvoWHczF9vGpSru",
  "key1": "kNY1r1AvCfJWATb3aNgickpQcRbY6tTjiEe4na9bdERH7xZeaXiAixNmBsM7XbjVZ2b8JQKnYHwSFCT1KdJeMYD",
  "key2": "4efDDPnPs5K2AtvHbsuj2RLx8yrktD4LohQF7winRAwdow9odtP3ARV1Xv4fcDWTz6LtPc4ZQZZ3MGmu61iYnxx8",
  "key3": "njatcPcTCpWvTeuN9a2ihzbMb3qwH51wuTQfXiR8qCftVYNmVZ8joA2R6gkMTtVFbeqTDK133U2U1f1vU93H8NH",
  "key4": "5AmdQrpPAtJ85N1fYwzwufEWffzzsSG82XgZYMQoDZVHqK2ugusCQUSFZhBqV1UqkNTUQCP55y9QA2ecpEXb6mu1",
  "key5": "5ba98GRdnaNqfi9DE5Kjfw9vGqRFpVzPjn7KAdxfBcnRwHajo2DAcMFWYa76q5EyAuUb3927FK8ffmJ6kLj7gfEB",
  "key6": "2ZqQ4zJ5zMjY8y5vGaHNeRgP6bd1GpWTZ8vzeJaub9cxSGxJyRGsMW5PwG6LKzikFXvxzYfbGJ2boAUocFDEaFHe",
  "key7": "242XNPC8vY3kfrmGChkJH7Q2gGwb19ZnfB4eKugipL9z6gZWmvPdFqRqZyn2phXhyXL2R9HhT9mPz2kuc3L9P32Q",
  "key8": "2uaW5DJ1DWd7sHLPPHynKPQoR17eCCgjdRBaFTAdKB7u2RmbvRWCFifYuCRayi8NC8D5TjmgYwgkZTaG5Zy9QLnT",
  "key9": "2714ys7q7tLkcvDhx8HQR2n3XFmnPg2NEb2x4K3GUXtyvputDtfjDjA9WcoBbvBwiGTNJuE4YVPRcqmfLSPASDLt",
  "key10": "3Jbkq3Gp9cnGHWLb92W1kGtchoEa1RfXeavfd88Cge8miMerXNJnAGWr1MFgNy1ft1op2VSDPvomw8vkupS56wxf",
  "key11": "FFCceX9kwtoZk97r84WMZaSjAqyHXy8yEPSgyKQzXWpWQ7YP6YYkDTY7bBtUWVLzVXa1GUPFGGkMZLnBgB7GjKt",
  "key12": "5sibAxeyCGSY6FtoSUF1S47GLLPyriXYW48a7SR2Jx7T3KZuZYaZGChyYaRgRVXDjdnc9kAU49o21rPVzRfWjtUr",
  "key13": "4JYtB1NaqCMPiSjyecZjJUckLoHHJw5cnMEQbDM5URbqAfymVmvcsrDST2qSEssYuSNmaw1CZR4oX9S6Vsys9JpD",
  "key14": "5qcUPWhRF9H5nH3qWrFLJ4QQtYmdVs7e39yTbiJ1u9wE2LSBWuDMmH8L1ijWERjF5M8keAcaZuX6r8zz3g3LEdGS",
  "key15": "GoZ3DDADtRqmBex8KYWkDUAivXfhxzJfGVtk5H2Z3C99RKVkLyXzacG5UeJ1i1a6XvS1ry3reFsdXp4v3ADZZ3c",
  "key16": "3HdjHurioToFkoR49SFmo4RbNwF6bFuNdxLsN6w2c9nqbCYzy5Xb7n3V8wQRkdRQA4yeXd3wSTvTDwZsxm2wHQKs",
  "key17": "34tvj7dPAhEogG42KGGQwQwuCnoku87sCKrJjhNtgV6t8Kibtbom8kkT2gZXBg8GxkzxKeHu57S8GSpVDy9arXLq",
  "key18": "32VBujmWM11hPHxPLGh3ePj7LhBVX9T3BpZMv7VbXKLz6js76Gg8B6h3kFTn6LnLuzdJx9QwDdfb1TXvfq2oPs33",
  "key19": "4VKPWvgQR7E8fWyiyKtD5UkyGvqpHxJQaoMLwV43Z5xy4D2df4fRQXU1mso458mFmbM5wVpdPEi2ffm1xWiAT84J",
  "key20": "3jyZDYpWEWmqmWUs8CM27LCbff2BL8yQk2JjwHdNhdFxF6JpQAnfWKRuYahYKGVQuFw9ptnDACv9N5zE1vk8vQaB",
  "key21": "2FuoaJALv1Ut6Y4Qg5yCrfh6LF4rJaKJNnZrqHyTRZUr2Cy3riQ2kSjQMTwXxKpoHb49qwYYNFG328F9FWtLdtCU",
  "key22": "62cFDPhyLkjqCX7PZKzHYnCH3JmiNmwbZh8rUuHSULi6D7xqUG4qfkKVYp1cTPff48VHCG8qR9QDHqGeqSzXVk2Z",
  "key23": "2bfEXnr8BUjtboHMBKUr7anwLVgSET96ZnnGwJUrHCxkFihg7LURcnARhmgsy2mhYsHooNrDg2GgcnDwwHC1R1nL",
  "key24": "3VXYaYz2WD8LXRqPtSK34FfU9hSrrPzqas8Ez1AepevZaBupz5TvX6r6C2ykUGvyLAwxmYjQAmNxBxY5suPj2xs4",
  "key25": "s8sLwT1McBmaXegUebnueTiq49CsmmyqMFy57EZnLtw1RaDtcqgrzgQj1Cv8SXtWQdCjAcLPjhQmuvAm8j8hUK7",
  "key26": "25Na9iYpdmdLKSpoaFhrjHduSdm9nm34LfQ6UrHc5Q6SBZWvLVVRJqC7CLRHehKDrjVYqLDUHJyrXXWCNcB362Po",
  "key27": "5Lyb6a4SzKZX1AxoUohHfiTsWXEpyP6MKt3AAGvp5rrufrgNdiWGiTWkydTjXVtx4rjjPnZTQgyJQQc3ZwwfqdGa",
  "key28": "aXSPrT94c76Tm8tQSSZycrDhxJEgXvMhhbWLXaxSd6apsRZdgDxYRhfpttzc3cjiTupLouuCR8xcvHJHubx9DhR",
  "key29": "3qg1EqJ69KoLEEBdK1WvyMmYucpdY7iTeP1e4y1mr4EfZVgkjCpoxjsvKbMG1cXpfwSbnQhDJR4sdFvNbCCTGeBb",
  "key30": "3q2ebA1F5hDC56L7ChbrrmC6oUMeSaQDqn3EbsznpzYDeTcixX5eVS26beGdfDqt2xpoq5Wpb6F8jhBqp7YwGptH"
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
