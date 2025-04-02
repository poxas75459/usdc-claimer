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
    "4CkXGayQCsm7aMYS25xth2izqVKfFVhbCKCPcqPDR5ZU21RS1DkmhVxQz4VRHphXsbHowK2rpFrqsSgeM9QpGGCt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Boou7RT2i2f6Kpsf9nhfVf6BwFVhFfzv9zMciZkusfwqCPGRsZfw7ktjPH7mGDVZGVv2V7Ww651YnvtsHLSw1vq",
  "key1": "3qaDN6aSajmiC7uSfjtehtJM3LhcNG42LGkns39rkN4eeTrEZ9qBNQqwmuLBciQGK292XWEZGtXvexxGJdMYLQp3",
  "key2": "5aw49yp9i5ef9JNXKmG46zcqZ9T4QnLVqyKkKKDaX3HpPdiJ19HfgFexuA3xcxfWUMyWzF7C9fqVVDvefh86nyEz",
  "key3": "5W7YCc9mypvCFqk9V27zGuKHdaGTrag9LAcw9EKx4NdDkU9A15z67nAXSuLFwu79jVUhV5VAagd5ZfzoKpD8w5ME",
  "key4": "PRtDowZSQHb5vSqDJGZfxYMfkpavbNJKeLtvXfuPRwozMbKTfmrJhLNoFVCu5pQ8LEED6qNa7PeuWrtmwcC1fqL",
  "key5": "271vwbZEznmC9hnWm787VdcVxzYCq87bqrRitWFeChEAG1crAkAtxXLrKWbp2K6cyNqE1Lu2aK7iLnG7oitcob46",
  "key6": "qeXaaEcpC54BGCLyZYuPBDLmXL3vvNuvjc8N69LXcb6Z6z73LEAr6U4CpayQAWjGnrode3V7W9UwRNSo4WNsoW1",
  "key7": "5T9Lk2wcyFPEs5yeqWHfJYBa627mrYboDFYwwsKSnAtjrW9RZ8SdMaf6FpBUcfMAWWbH1dB9cqu1NFRrRZ8HtKtD",
  "key8": "4Kwi7T16RF4bezyBjiYMuNjVKDHzjyStvWTsrVxg78vjXKgj7sf9r5JZSujSYhL6Bro7ek6fkPPnK6TTkWM7rFWv",
  "key9": "fPzbdT73wywoMESyatuWvS5D2bVqyQTwMSFMyZXnfC8nu9zLqVgA6QdFhbJyWj8yNsRwPzXC1tGCMgSeE72M3PY",
  "key10": "4c1YtebBkRVpv9eiW3gCHPEEvy8vGKXqNFdApuYgREqPSD6oRZPwSVNxkdQXnJabf6hyGrDCj5A7AVRYyS684dGE",
  "key11": "5oAgNySJmnQntGM7krCJr9wGu1p9Yb1iamE7fLGVMpYVS36xSrb13zETv5qjJ7BVovqp9xuBdqzW1Y4hLBm7sZ8K",
  "key12": "3TYQK1cggMJZDM6XsbZGWupAbEde2VAqKm3hqNq4Zk1rN3rQtzMg6kF8c827mfB2ZEShMXNaRAqhNqo4MmWes3uW",
  "key13": "5ivfgsoadejiKgu61PfQZCNaifCacXWUbuttBSVj7orZXw4MjzGzY53WrVPp1BZkwhEDH8pJGmqc2X5zzGUy4FQK",
  "key14": "32TogVU3KRSA3MeNPELs7VhsvGoGCoSBZ2z8oLd4oMGU4sx8yrSbMZiSyFzMZ6ryfvMuXK9VBF7zoxuQK3waqaQv",
  "key15": "Vcspak9BYQK8hfULnZTVRdfD5wL6kri2RPnMgpxXvA8cWrAkTwvwDA1iayG3VigNVoDbnNhcKorybot6wjkMxG7",
  "key16": "4vUm8MNVmQWth9YP5wpfA4MgT2zDMB2fLF4bf8orzeQrhoJ4VkNQhkcccqoA9Z7mFdRc3BdAnh3jDrbyiKpF1BoG",
  "key17": "4YWThiRNoVbpowLK5A9uBVUwAoSrppbifKhfU5crNBFAM2XhKjexWKJknPVL8hgUPCdits1G6VHAuYFZCMHSaPXW",
  "key18": "5nmSRnPhAeKxbgB9gJ6tK1dEBeERVhqXRgANAJ4RqrSFp7uussSJcJ7ygzz8hF9ixVzToeGpcNLfi41269u4o5PR",
  "key19": "ZMmHPKVeuyTt9fwu1BhMmaugHg9rkd2j6sQS553QzH5TvGoRUo91ENiz1LSpGy2kbtBALTrsdSU1yb5eU7ZXqJw",
  "key20": "2ZmSQ2q1nA5Vcnw9Dwn3gvRib8hGoAh8w6KGftBTX8mgs3s2LPcmFiWp3FvkqiFtZ5iUgseqcA7gosUxUB8vmjPu",
  "key21": "5ga5ck4VTNbrYgQDFNEvKCeWPhyKLLS2f4yHXNKaKGguGQJskJdVAi3Xd1mRraDu24J6i4pxjb1Zms61nGhFHPXz",
  "key22": "43A186FeNJ9eo3bc1Ai4S32RaTggdw1bXkQawkdtJjgNJqRbFDLBNN84veA3TgHan7R4Tht6DKfnjnkq8juK3k3w",
  "key23": "2rC6LdUHPzD8XZ7Vs1kZ4vtSvQiaoXn63x6668vE3gAeMqxuXudabkV1eXbgotToFaM7GiWxWvLriHVExyd4bwxp",
  "key24": "47Req7D4fQwqhyMdUb4H9s47ieP65A3bfjyeWciFjPM75AEzCWjejn4n2TH3iPFt9RuoAyeBBfUGjbbhGvFVu4Ne",
  "key25": "2mffdqLaEHP3RUHCx8yiQvzkM6v933Tz9SY62W8WrVSoN8oDSXHiRHXNzCcq7K7Cuym3A8KCj74uLuezV1Unf1FB",
  "key26": "3bjb4sukpEQLx9hTB6aYzeK427pH2Eqtz2QgWQ5fMcf4q5XZjmaLX9Vkz7MvghyoxgmAyqZwiJEV5HTdmDrYJvew",
  "key27": "3NNm9iShYsZA3Vw7jERx97H7CYjWWLWWQywiwtEnhQWjUP4Vg3kUU3CpXs9xxwg3hUoMHiRkZD5gL2ybkJmG8VC6",
  "key28": "Sn49Zr2GwpMjezcYxsX9W2T6PvX4rJT7uTXyd9jPQJsd3j7KRr22Y74Th9SFMLhrN9qiUAHVYCqtMTEKwKyFGDg",
  "key29": "3coswaRXJCS4pcTFRwuNh6PQDxMhTfxb378XWqCXEzHxWAcCGgv6Fdqsw9XVqj1pHp1cxPAvqSh7X8AQEGt9ZwCW",
  "key30": "2jKXm2afFj1otKqBB8ta8EYH35Ad7jcN1GpSaQ6RSMuGQzkHHwU9vEW4NtiECjMYPcXACeEfnMReLHGzMTTvzFs7",
  "key31": "61MDPpuft5KizRjZaBEw2cBxr8bZmMvh27xVdjRjmxwrjjtnNUrtRH16mb6Bs21wEqyBZUMG7wcQbWTbbc3KvRWA",
  "key32": "3EcY1wFSqAF97ruAYkQ6T7jwdijaHfHLu9g71f2J1zdfuTFcEtgsknFNZoPsq8q4YEsF9fprVhK5Lgf2ghfvkDHE",
  "key33": "24ozRCM8wrmRpRHXQGEyroLA4WM3dUEuRGQg76a6EJCBTmAHsc9CPAFy8BC97RLDtBQbAN75SZhSUXriytxCF1CA",
  "key34": "2xY52NhsT8rz2DnHhPH8qowu7CMrCWjPdFiDs8hxagrvvrRFSvwV8Tz4UnfdBTKWvzDQcccrY1uGutsmGjJ2UMc1",
  "key35": "5LdtisQve5QAWNomPdz63c34GT9jGhz3kAmRjqMQzw8bTNYz7AaDB2HK4kNjW3qGsJAxMfh2asy8SbWBitndG9VE",
  "key36": "3yz5FgzyqGUk7xSAanRba2XBLLc8Dwy2JyfadC1bUQir6pbetFpASFPkfCcmBWGERHGWegTEM9PohixeByEDHhEP",
  "key37": "5x5K6by8adzRVfdupNiWzetg6KwjZHggEsTqMDR5gLPL8uVNQMD4siUkdGxE8XtM3n53L51rqQJ2U9L3a329HD5S",
  "key38": "k2KT1SiBQgVABxfbDzbrXdV27rfkHWuebb9AEKt38c81Qn8rE5QCMfun6F2iN5R76VzwPGJZoQQNYrbKsdjY3cH",
  "key39": "5fVjyJoMQVH4KJSKhgz81vPhdw5NE72LBUKCJTyUv6Pxu3Mj3qVWw8PZN1qc2nW5ghBwoyeMd2vJxSywDM5Vy6dc",
  "key40": "3hjxMGRxLv3EBEsfU7jRWsfxNU2G65CcnMmPqAPTVvTaZ2mAzGUaGB9dvcmQZKTAmJktmo64gpVKEvyreeNYfU8t",
  "key41": "7QCa8pPKhHkkXepamaj98XJEFWY45zwMwhagZvKgNnPriGsvY8bPzsDNjcE5tfHP3ruJLbvRdbC6ExxSA4zygJK"
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
